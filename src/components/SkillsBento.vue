<script setup lang="ts">
import { Code2, Palette, Terminal, Globe, Cpu, Zap } from 'lucide-vue-next';

const skills = [
    { name: 'Vue.js', icon: Code2, size: 'large', desc: 'Sviluppo interfacce reattive' },
    { name: 'Astro', icon: Zap, size: 'small', desc: 'Performance' },
    { name: 'Tailwind', icon: Palette, size: 'small', desc: 'Styling' },
    { name: 'TypeScript', icon: Terminal, size: 'medium', desc: 'Codice robusto' },
    { name: 'Frontend', icon: Globe, size: 'large', desc: 'Esperienze utente moderne' },
    { name: 'Node.js', icon: Cpu, size: 'medium', desc: 'Backend logic' },
];
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        <div 
            v-for="(skill, index) in skills" 
            :key="skill.name"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            class="bento-card flex flex-col justify-between group cursor-default"
            :class="{
                'md:col-span-2 md:row-span-2': skill.size === 'large',
                'md:col-span-2': skill.size === 'medium',
                'md:col-span-1': skill.size === 'small'
            }"
        >
            <div class="flex justify-between items-start">
                <component :is="skill.icon" class="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-500" />
                <span class="text-secondary/30 font-bold">0{{ index + 1 }}</span>
            </div>
            <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{{ skill.name }}</h3>
                <p class="text-secondary/60 text-sm">{{ skill.desc }}</p>
            </div>
        </div>
    </div>
</template>
