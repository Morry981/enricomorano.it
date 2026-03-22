<template>
    <footer 
        v-if="isVisible"
        class="fixed bottom-0 left-0 right-0 p-4 bg-dark/80 backdrop-blur-sm
               border-t border-[var(--border)] text-center transition-transform duration-500 z-40"
        :class="{'translate-y-full': !isScrolledDown}"
    >
        <div class="max-w-6xl mx-auto text-sm text-secondary flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {{ currentYear }} Enrico Morano. Tutti i diritti riservati.</p>
            <div class="flex items-center gap-6">
                <AntiSpamEmail />
                <a
                    href="https://github.com/Morry981"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Profilo GitHub di Enrico Morano"
                    class="hover:text-light transition-colors"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/enrico-morano/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    aria-label="Profilo LinkedIn di Enrico Morano"
                    class="hover:text-light transition-colors"
                >
                    LinkedIn
                </a>
                <button
                    @click="showPopup = true"
                    class="text-secondary/40 hover:text-secondary/70 transition-colors text-xl leading-none cursor-pointer"
                    aria-label="18+"
                >
                    🔞
                </button>
            </div>
        </div>

        <!-- Popup -->
        <Teleport to="body">
            <Transition name="popup">
                <div
                    v-if="showPopup"
                    class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
                    @click.self="showPopup = false"
                >
                    <div class="relative rounded-xl overflow-hidden shadow-2xl mx-4">
                        <button
                            @click="showPopup = false"
                            class="absolute top-2 right-2 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-xl leading-none cursor-pointer"
                            aria-label="Chiudi"
                        >&times;</button>
                        <img src="/images/eeh-volevih.gif" alt="Eeh volevi!" width="480" height="360" class="block w-[480px] max-w-[90vw] h-auto" />
                    </div>
                </div>
            </Transition>
        </Teleport>
    </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AntiSpamEmail from './AntiSpamEmail.vue';

const isVisible = ref(false);
const isScrolledDown = ref(false);
const showPopup = ref(false);
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

<style scoped>
.popup-enter-active,
.popup-leave-active {
    transition: opacity 0.35s ease;
}
.popup-enter-active > div,
.popup-leave-active > div {
    transition: transform 0.35s ease;
}
.popup-enter-from,
.popup-leave-to {
    opacity: 0;
}
.popup-enter-from > div {
    transform: scale(0.9);
}
.popup-leave-to > div {
    transform: scale(0.9);
}
</style>