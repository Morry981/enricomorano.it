<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import {
    ShoppingCart,
    Code2,
    Search,
    Server,
    Smartphone,
    Palette,
    Bot,
    GraduationCap,
    Info,
} from 'lucide-vue-next';
import type { Project } from '../types';

interface Props {
    project: Project;
    index: number;
    side: 'left' | 'right';
    active?: boolean;
}

const props = withDefaults(defineProps<Props>(), { active: false });

const categoryIcons: Record<string, any> = {
    'E-commerce': ShoppingCart,
    'Web App': Code2,
    'Frontend': Palette,
    'Mobile': Smartphone,
    'DevOps': Server,
    'Marketing Tecnico': Search,
    'Automazione': Bot,
    'Formazione': GraduationCap,
};

const icon = computed(() => categoryIcons[props.project.category] ?? Code2);

const prefersReducedMotion = ref(false);

onMounted(() => {
    prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
});

const formattedDate = computed(() => {
    if (!props.project.date) return '';
    const [year, month] = props.project.date.split('-');
    const months = [
        'Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
        'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic',
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
});
</script>

<template>
    <article
        v-motion
        :initial="prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { delay: 100, duration: prefersReducedMotion ? 0 : 500 } }"
        class="timeline-card w-full"
        :class="{ 'border-spin': active && !prefersReducedMotion }"
    >
        <div class="aspect-video rounded-lg overflow-hidden mb-4 bg-primary/10 flex items-center justify-center">
            <picture v-if="project.image">
                <source :srcset="project.image.replace(/-opt\.(png|jpe?g)$/, '.webp')" type="image/webp" />
                <img
                    :src="project.image"
                    :alt="project.title"
                    class="w-full h-full object-cover"
                    :loading="index === 0 ? 'eager' : 'lazy'"
                    :fetchpriority="index === 0 ? 'high' : undefined"
                    decoding="async"
                    width="800"
                    height="450"
                />
            </picture>
            <component
                v-else
                :is="icon"
                class="w-12 h-12 text-accent/30"
                aria-hidden="true"
            />
        </div>

        <div class="flex items-center gap-2 mt-1">
            <time
                v-if="formattedDate"
                :datetime="project.date"
                class="text-xs font-bold uppercase tracking-widest text-accent"
            >
                {{ formattedDate }}
            </time>
            <span class="text-xs font-bold uppercase tracking-widest text-secondary">
                {{ project.category }}
            </span>
        </div>

        <div class="flex items-center gap-2 mt-1 mb-1">
            <component
                :is="icon"
                class="w-7 h-7 text-accent shrink-0"
                aria-hidden="true"
            />
            <h3 class="text-2xl font-bold">
                {{ project.title }}
            </h3>
        </div>

        <p v-if="project.role" class="text-secondary text-sm mb-3">
            {{ project.role }}
        </p>

        <p class="text-light/60 mb-4 text-balance">
            {{ project.description }}
        </p>

        <p v-if="project.note" class="flex items-start gap-1.5 text-xs text-secondary/50 mb-4">
            <a
                v-if="project.note.url"
                :href="project.note.url"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="inline-flex items-start gap-1.5 hover:text-accent transition-colors"
            >
                <Info class="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                <span>{{ project.note.text }}</span>
            </a>
            <template v-else>
                <Info class="w-3.5 h-3.5 shrink-0 mt-px" aria-hidden="true" />
                <span>{{ project.note.text }}</span>
            </template>
        </p>

        <div class="flex flex-wrap gap-2 mb-4">
            <span
                v-for="tag in project.tags"
                :key="tag"
                class="text-xs px-2 py-1 bg-primary/20 text-secondary rounded-full"
            >
                {{ tag }}
            </span>
        </div>

        <div class="flex gap-4">
            <a
                v-if="project.url"
                :href="project.url"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="flex items-center text-accent font-semibold hover:translate-x-1 transition-transform"
                :aria-label="`Visita il progetto ${project.title}`"
            >
                Demo
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            </a>
            <a
                v-if="project.repo"
                :href="project.repo"
                target="_blank"
                rel="noopener noreferrer nofollow"
                class="flex items-center text-secondary/70 hover:text-light font-semibold transition-colors"
                :aria-label="`Repository GitHub di ${project.title}`"
            >
                GitHub
            </a>
        </div>
    </article>
</template>

<style>
@property --border-angle {
    syntax: '<angle>';
    initial-value: 0deg;
    inherits: false;
}
</style>

<style scoped>
.timeline-card {
    --border-angle: 0deg;
    position: relative;
    background-color: var(--surface);
    border: 1px solid var(--border);
    padding: 2rem;
    backdrop-filter: blur(4px);
    border-radius: 1rem;
    transition: all 0.5s;
}

.timeline-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: conic-gradient(
        from var(--border-angle),
        transparent 0deg,
        var(--color-accent) 60deg,
        transparent 120deg,
        transparent 240deg,
        var(--color-accent) 300deg,
        transparent 360deg
    );
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s;
    pointer-events: none;
}

.timeline-card.border-spin::before {
    opacity: 1;
    animation: spin-border 3s linear infinite;
}

.timeline-card:hover {
    border-color: rgba(238, 108, 77, 0.3);
    background-color: color-mix(in srgb, var(--surface) 200%, transparent);
}

@keyframes spin-border {
    to { --border-angle: 360deg; }
}

@media (max-width: 767px) {
    .timeline-card {
        background-color: var(--bg, #0d1117);
        backdrop-filter: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .timeline-card::before {
        animation: none;
        opacity: 0;
    }
}
</style>
