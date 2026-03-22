<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted, nextTick } from 'vue';
import TimelineNode from './TimelineNode.vue';
import type { Project } from '../types';

interface Props {
    projects: Project[];
}

const props = defineProps<Props>();

const wrapEl = ref<HTMLElement | null>(null);

const cardSections = ref<(HTMLElement | null)[]>([]);
const connectorSections = ref<(HTMLElement | null)[]>([]);
const cardProgress = reactive<number[]>(props.projects.map(() => 0));
const connectorProgress = reactive<number[]>(props.projects.map(() => 0));
const dotActive = reactive<boolean[]>(props.projects.map(() => false));
const firstDotActive = ref(false);

const mobileLineProgress = ref(0);

let rafId = 0;
let running = false;
const DONE = 0.95;
const LERP = 0.12;

const targetCard = props.projects.map(() => 0);
const targetConn = props.projects.map(() => 0);
let targetMobileLine = 0;

const lerp = (current: number, target: number, t: number) =>
    Math.abs(target - current) < 0.001 ? target : current + (target - current) * t;

const computeTargets = () => {
    const trigger = window.innerHeight * 0.6;

    const rawCard: number[] = [];
    const rawConn: number[] = [];

    cardSections.value.forEach((el, i) => {
        if (!el) { rawCard[i] = 0; return; }
        const r = el.getBoundingClientRect();
        rawCard[i] = Math.min(Math.max((trigger - r.top) / r.height, 0), 1);
    });

    connectorSections.value.forEach((el, i) => {
        if (!el) { rawConn[i] = 0; return; }
        const r = el.getBoundingClientRect();
        const h = r.height || 1;
        rawConn[i] = Math.min(Math.max((trigger - r.top) / h, 0), 1);
    });

    targetCard[0] = rawCard[0];

    for (let i = 1; i < props.projects.length; i++) {
        targetConn[i] = targetCard[i - 1] >= DONE ? rawConn[i] : 0;
        targetCard[i] = targetConn[i] >= DONE ? rawCard[i] : 0;
    }

    if (wrapEl.value) {
        const r = wrapEl.value.getBoundingClientRect();
        targetMobileLine = Math.min(Math.max((trigger - r.top) / r.height, 0), 1);
    }
};

const tick = () => {
    computeTargets();

    let settled = true;

    const t = reducedMotion.value ? 1 : LERP;

    for (let i = 0; i < props.projects.length; i++) {
        cardProgress[i] = lerp(cardProgress[i], targetCard[i], t);
        connectorProgress[i] = lerp(connectorProgress[i], targetConn[i], t);
        dotActive[i] = cardProgress[i] >= DONE;

        if (Math.abs(cardProgress[i] - targetCard[i]) > 0.001) settled = false;
        if (Math.abs(connectorProgress[i] - targetConn[i]) > 0.001) settled = false;
    }

    firstDotActive.value = cardProgress[0] > 0.05;

    mobileLineProgress.value = lerp(mobileLineProgress.value, targetMobileLine, t);
    if (Math.abs(mobileLineProgress.value - targetMobileLine) > 0.001) settled = false;

    if (!settled) {
        rafId = requestAnimationFrame(tick);
    } else {
        running = false;
    }
};

const startLoop = () => {
    if (!running) {
        running = true;
        rafId = requestAnimationFrame(tick);
    }
};

const onScroll = () => { startLoop(); };

const reducedMotion = ref(false);

onMounted(() => {
    reducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    nextTick(() => {
        computeTargets();
        for (let i = 0; i < props.projects.length; i++) {
            cardProgress[i] = targetCard[i];
            connectorProgress[i] = targetConn[i];
            dotActive[i] = cardProgress[i] >= DONE;
        }
        firstDotActive.value = cardProgress[0] > 0.05;
        mobileLineProgress.value = targetMobileLine;
    });
    window.addEventListener('scroll', onScroll, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener('scroll', onScroll);
    cancelAnimationFrame(rafId);
});

const setCardRef = (el: any, i: number) => { cardSections.value[i] = el as HTMLElement; };
const setConnectorRef = (el: any, i: number) => { connectorSections.value[i] = el as HTMLElement; };

const dotX = (index: number) => (index % 2 === 0 ? 23 : 77);
</script>

<template>
    <div ref="wrapEl" class="tl-wrap w-full" role="list" aria-label="Timeline dei progetti">
        <div class="tl-mobile-line">
            <div class="tl-mobile-line-bg" />
            <div
                class="tl-mobile-line-fill"
                :style="{ height: mobileLineProgress * 100 + '%' }"
            />
        </div>

        <template v-for="(project, i) in projects" :key="project.slug">
            <div
                v-if="i > 0"
                :ref="(el) => setConnectorRef(el, i)"
                class="tl-connector"
            >
                <svg
                    class="tl-connector-svg"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                >
                    <line
                        :x1="dotX(i - 1)" y1="0"
                        :x2="dotX(i)" y2="100"
                        class="line-bg"
                        vector-effect="non-scaling-stroke"
                    />
                    <line
                        :x1="dotX(i - 1)" y1="0"
                        :x2="dotX(i - 1) + (dotX(i) - dotX(i - 1)) * connectorProgress[i]"
                        :y2="100 * connectorProgress[i]"
                        class="line-fill"
                        vector-effect="non-scaling-stroke"
                    />
                </svg>
            </div>

            <div
                :ref="(el) => setCardRef(el, i)"
                class="tl-section"
                role="listitem"
                :class="i % 2 === 0 ? 'tl-left' : 'tl-right'"
            >
                <div class="tl-dot tl-dot-top" :class="i === 0 ? 'tl-dot-first' : 'tl-dot-desktop'">
                    <div class="dot-ring" :class="{ spinning: i === 0 ? firstDotActive : connectorProgress[i] >= DONE }">
                        <div class="dot-core" />
                    </div>
                </div>

                <div class="tl-vline tl-desktop-only">
                    <div class="tl-vline-bg" />
                    <div
                        class="tl-vline-fill"
                        :style="{ height: cardProgress[i] * 100 + '%' }"
                    />
                </div>

                <div class="tl-card-wrap">
                    <TimelineNode
                        :project="project"
                        :index="i"
                        :side="i % 2 === 0 ? 'left' : 'right'"
                    />
                </div>

                <div class="tl-dot tl-dot-bottom">
                    <div class="dot-ring" :class="{ spinning: dotActive[i] }">
                        <div class="dot-core" />
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<style scoped>
.tl-wrap {
    position: relative;
    width: 100%;
    overflow-x: hidden;
}

.tl-mobile-line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    z-index: 0;
}

.tl-mobile-line-bg {
    position: absolute;
    inset: 0;
    background: var(--border, rgba(255, 255, 255, 0.1));
    border-radius: 1px;
}

.tl-mobile-line-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-accent);
    border-radius: 1px;
}

@media (min-width: 768px) {
    .tl-mobile-line {
        display: none;
    }
}

.tl-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 2;
}

@media (min-width: 768px) {
    .tl-section {
        width: 46%;
    }

    .tl-left {
        margin-right: auto;
    }

    .tl-right {
        margin-left: auto;
    }
}

@media (max-width: 767px) {
    .tl-section {
        width: 100%;
        margin: 0;
    }
}

.tl-card-wrap {
    position: relative;
    z-index: 2;
    width: 100%;
}

.tl-dot {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
}

.tl-dot-top {
    margin-bottom: 12px;
}

@media (min-width: 768px) {
    .tl-dot-top {
        margin-top: -2px;
    }
}

.tl-dot-bottom {
    margin-top: 12px;
    margin-bottom: 12px;
}

@media (max-width: 767px) {
    .tl-dot-bottom {
        margin-top: 24px;
        margin-bottom: 24px;
    }
}

.tl-dot-first {
    display: flex;
}

.tl-dot-desktop {
    display: flex;
}

@media (max-width: 767px) {
    .tl-dot-desktop {
        display: none;
    }

    .tl-desktop-only {
        display: none;
    }

    .tl-connector {
        display: none;
    }
}

.dot-ring {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--border, rgba(255, 255, 255, 0.15));
    transition: background 0.4s ease;
}

.dot-ring.spinning {
    background: conic-gradient(
        var(--color-accent) 0deg,
        transparent 80deg,
        transparent 180deg,
        var(--color-accent) 260deg,
        transparent 340deg,
        var(--color-accent) 360deg
    );
    animation: spin-ring 2.5s linear infinite;
}

.dot-core {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: var(--color-accent);
    box-shadow: 0 0 10px rgba(238, 108, 77, 0.4);
}

@keyframes spin-ring {
    to { transform: rotate(360deg); }
}

@media (prefers-reduced-motion: reduce) {
    .dot-ring.spinning {
        animation: none;
        background: var(--color-accent);
    }
}

.tl-vline {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    z-index: 1;
}

.tl-vline-bg {
    position: absolute;
    inset: 0;
    background: var(--border, rgba(255, 255, 255, 0.1));
    border-radius: 1px;
}

.tl-vline-fill {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: var(--color-accent);
    border-radius: 1px;
}

.tl-connector {
    position: relative;
    height: 160px;
    width: 100%;
}

.tl-connector-svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
}

.line-bg {
    stroke: var(--border, rgba(255, 255, 255, 0.1));
    stroke-width: 2px;
}

.line-fill {
    stroke: var(--color-accent);
    stroke-width: 2px;
}
</style>
