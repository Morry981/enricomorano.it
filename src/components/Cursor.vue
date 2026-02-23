<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const mouseX = ref(0);
const mouseY = ref(0);
const cursorX = ref(0);
const cursorY = ref(0);
const isHovering = ref(false);

const updateMouse = (e: MouseEvent) => {
    mouseX.value = e.clientX;
    mouseY.value = e.clientY;
};

const animate = () => {
    // Effetto easing (inerzia)
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;
    
    cursorX.value = lerp(cursorX.value, mouseX.value, 0.15);
    cursorY.value = lerp(cursorY.value, mouseY.value, 0.15);
    
    requestAnimationFrame(animate);
};

const checkHover = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    isHovering.value = !!target.closest('a, button, .interactive');
};

onMounted(() => {
    window.addEventListener('mousemove', updateMouse);
    window.addEventListener('mouseover', checkHover);
    animate();
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse);
    window.removeEventListener('mouseover', checkHover);
});
</script>

<template>
    <div 
        class="custom-cursor"
        :class="{ 'is-hovering': isHovering }"
        :style="{
            transform: `translate3d(${cursorX}px, ${cursorY}px, 0)`
        }"
    ></div>
</template>

<style scoped>
.custom-cursor {
    position: fixed;
    top: -10px;
    left: -10px;
    width: 20px;
    height: 20px;
    background-color: var(--color-accent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: width 0.3s, height 0.3s, background-color 0.3s;
}

.is-hovering {
    width: 60px;
    height: 60px;
    top: -30px;
    left: -30px;
    background-color: rgba(238, 108, 77, 0.5);
    mix-blend-mode: normal;
}

@media (max-width: 768px) {
    .custom-cursor {
        display: none;
    }
}
</style>
