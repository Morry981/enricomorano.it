<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(true);

const STORAGE_KEY = 'theme';

onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        isDark.value = saved === 'dark';
    } else {
        isDark.value = !window.matchMedia('(prefers-color-scheme: light)').matches;
    }
    applyTheme(isDark.value);
});

const applyTheme = (dark: boolean) => {
    if (dark) {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
};

const toggle = () => {
    isDark.value = !isDark.value;
    applyTheme(isDark.value);
    localStorage.setItem(STORAGE_KEY, isDark.value ? 'dark' : 'light');
};
</script>

<template>
    <button
        @click="toggle"
        :aria-label="isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'"
        :aria-pressed="!isDark"
        class="p-2 rounded-lg hover:bg-white/10 transition-colors text-lg leading-none"
    >
        {{ isDark ? '☀️' : '🌙' }}
    </button>
</template>
