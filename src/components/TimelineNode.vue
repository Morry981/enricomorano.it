<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import {
    ShoppingCart,
    Code2,
    Search,
    Server,
    Smartphone,
    Palette,
} from 'lucide-vue-next';
import type { Project } from '../types';

interface Props {
    project: Project;
    index: number;
    side: 'left' | 'right';
}

const props = defineProps<Props>();

const categoryIcons: Record<string, any> = {
    'E-commerce': ShoppingCart,
    'Web App': Code2,
    'Frontend': Palette,
    'Mobile': Smartphone,
    'DevOps': Server,
    'Marketing Tecnico': Search,
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
        class="bento-card timeline-card w-full"
    >
        <div class="aspect-video rounded-lg overflow-hidden mb-4 bg-primary/10 flex items-center justify-center">
            <img
                v-if="project.image"
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover"
                loading="lazy"
            />
            <component
                v-else
                :is="icon"
                class="w-12 h-12 text-accent/30"
                aria-hidden="true"
            />
        </div>

        <time
            v-if="formattedDate"
            :datetime="project.date"
            class="text-xs font-bold uppercase tracking-widest text-accent"
        >
            {{ formattedDate }}
        </time>

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

<style scoped>
@media (max-width: 767px) {
    .timeline-card {
        background-color: var(--bg, #0d1117);
        backdrop-filter: none;
    }
}
</style>
