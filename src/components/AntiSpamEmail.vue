<template>
    <a
        ref="linkEl"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Invia una email"
        :class="props.variant === 'cta'
            ? 'inline-flex items-center px-8 py-4 bg-accent text-dark font-semibold rounded-lg hover:bg-accent/85 transition-colors text-lg no-underline'
            : 'hover:text-light transition-colors'"
        @click.prevent="handleClick"
    >
        <span ref="labelEl">{{ props.variant === 'cta' ? 'Contattami' : '' }}</span>
    </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { trackEmail } from '../lib/analytics';

const props = withDefaults(defineProps<{
    variant?: 'default' | 'cta';
}>(), {
    variant: 'default',
});

const linkEl = ref<HTMLAnchorElement | null>(null);
const labelEl = ref<HTMLSpanElement | null>(null);

const parts = ['web', '\u0040', 'enricomorano', '.', 'it'];

onMounted(() => {
    const addr = parts.join('');
    if (labelEl.value && props.variant !== 'cta') labelEl.value.textContent = addr;
    if (linkEl.value) linkEl.value.href = `mailto:${addr}`;
});

const handleClick = () => {
    trackEmail();
    const addr = parts.join('');
    window.open(`mailto:${addr}`, '_blank', 'noopener,noreferrer');
};
</script>