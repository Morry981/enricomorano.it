<template>
    <footer 
        v-if="isVisible"
        class="fixed bottom-0 left-0 right-0 p-4 bg-dark/80 backdrop-blur-sm 
               border-t border-white/10 text-center transition-transform duration-500 z-40"
        :class="{'translate-y-full': !isScrolledDown}"
    >
        <div class="max-w-6xl mx-auto text-sm text-secondary flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {{ currentYear }} Enrico Morano. Tutti i diritti riservati.</p>
            <div class="mt-2 md:mt-0">
                <AntiSpamEmail client:load />
                <!-- Puoi aggiungere qui icone social, link alla privacy policy, ecc. -->
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AntiSpamEmail from './AntiSpamEmail.vue';

const isVisible = ref(false); // Controls if the footer is in the DOM at all
const isScrolledDown = ref(false); // Controls the slide-in/out animation
const currentYear = new Date().getFullYear();

const handleScroll = () => {
    // Il footer appare se la pagina è corta (non c'è scrollbar)
    const pageHasNoScroll = document.body.scrollHeight <= window.innerHeight;
    
    // O se lo scroll ha raggiunto l'ultimo 10% della pagina
    const scrollThreshold = document.body.scrollHeight * 0.90; // 90% della pagina
    const scrolledPastThreshold = window.scrollY + window.innerHeight >= scrollThreshold;

    if (pageHasNoScroll || scrolledPastThreshold) {
        if (!isVisible.value) isVisible.value = true;
        isScrolledDown.value = true;
    } else {
        isScrolledDown.value = false;
        setTimeout(() => {
            if (!isScrolledDown.value) isVisible.value = false;
        }, 500); 
    }
};

onMounted(() => {
    // Controllo iniziale anche per le pagine corte
    handleScroll(); 
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>