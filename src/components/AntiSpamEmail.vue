<template>
    <a
        v-if="props.variant === 'button'"
        ref="linkEl"
        href="#"
        :aria-label="props.label || 'Scrivimi una email'"
        :data-from="props.from || undefined"
        class="flex items-center gap-3 w-full px-4 py-3 rounded-lg corner-squircle border border-secondary/30 hover:border-accent transition-colors no-underline"
        @click.prevent="handleClick"
    >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" class="size-5 shrink-0 text-accent">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 7 9 6 9-6" />
        </svg>
        <span class="flex flex-col text-left">
            <span class="text-light font-medium leading-tight">{{ props.label || 'Scrivimi una mail' }}</span>
            <span ref="labelEl" class="text-xs text-secondary/80 leading-tight">email</span>
        </span>
    </a>
    <a
        v-else
        ref="linkEl"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Invia una email"
        :data-from="props.from || undefined"
        :class="props.variant === 'cta'
            ? 'inline-flex items-center px-8 py-4 bg-accent text-dark font-semibold rounded-lg corner-squircle hover:bg-accent/85 transition-colors text-lg no-underline'
            : 'hover:text-light transition-colors'"
        @click.prevent="handleClick"
    >
        <span ref="labelEl">{{ props.variant === 'cta' ? 'Contattami' : '' }}</span>
    </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const props = withDefaults(defineProps<{
    variant?: 'default' | 'cta' | 'button';
    label?: string;
    subject?: string;
    from?: string;
}>(), {
    variant: 'default',
    label: '',
    subject: '',
    from: '',
});

const linkEl = ref<HTMLAnchorElement | null>(null);
const labelEl = ref<HTMLSpanElement | null>(null);

const parts = ['web', '@', 'enricomorano', '.', 'it'];
const buildHref = () => {
    const addr = parts.join('');
    return props.subject ? `mailto:${addr}?subject=${encodeURIComponent(props.subject)}` : `mailto:${addr}`;
};

onMounted(() => {
    const addr = parts.join('');
    // 'default' e 'button' mostrano l'indirizzo reale (anti-scraping: composto a runtime).
    if (labelEl.value && props.variant !== 'cta') labelEl.value.textContent = addr;
    if (linkEl.value) linkEl.value.href = buildHref();
});

const handleClick = () => {
    // tracking gestito centralmente dal delegato href-based (mailto) in lib/analytics
    window.open(buildHref(), '_blank', 'noopener,noreferrer');
};
</script>
