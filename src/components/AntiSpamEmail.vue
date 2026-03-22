<template>
    <a
        ref="linkEl"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Invia una email"
        class="hover:text-light transition-colors"
        @click.prevent="handleClick"
    >
        <span ref="labelEl"></span>
    </a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const linkEl = ref<HTMLAnchorElement | null>(null);
const labelEl = ref<HTMLSpanElement | null>(null);

const parts = ['web', '\u0040', 'enricomorano', '.', 'it'];

onMounted(() => {
    const addr = parts.join('');
    if (labelEl.value) labelEl.value.textContent = addr;
    if (linkEl.value) linkEl.value.href = `mailto:${addr}`;
});

const handleClick = () => {
    const addr = parts.join('');
    window.open(`mailto:${addr}`, '_blank', 'noopener,noreferrer');
};
</script>