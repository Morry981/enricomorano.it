<template>
    <section
        id="competenze"
        class="py-16 md:py-24 bg-slate-50"
    >
        <div class="max-w-6xl mx-auto px-6">
            <!-- Heading -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Come posso aiutare
                </h2>
                <p
                    class="text-lg text-slate-600 max-w-2xl mx-auto text-balance"
                >
                    Quasi dieci anni tra sviluppo e consulenza.<br />
                    Dai processi aziendali al codice, copro tutto lo stack.
                </p>
            </div>

            <!-- Grid Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div
                    v-for="skill in displayedSkills"
                    :key="skill.id"
                    class="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover:-translate-y-1 border border-slate-200 hover:border-slate-300"
                >
                    <!-- Icona + colore -->
                    <div
                        :class="`inline-block p-3 rounded-lg mb-4 ${colorClasses[skill.color]}`"
                    >
                        <span class="text-2xl">{{ iconMap[skill.icon] }}</span>
                    </div>

                    <!-- Titolo -->
                    <h3
                        class="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors whitespace-pre-line"
                    >
                        {{ skill.labelLong }}
                    </h3>

                    <!-- Descrizione breve -->
                    <p
                        class="text-sm text-slate-600 mb-4 line-clamp-3 text-balance"
                    >
                        {{ skill.description }}
                    </p>

                    <!-- Link approfondisci -->
                    <a
                        :href="`/skills#${skill.id}`"
                        class="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                        Approfondisci
                        <span class="sr-only">{{ skill.labelShort }}</span>
                        <svg
                            class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>

            <!-- CTA per tutte le competenze -->
            <div class="text-center mt-12">
                <a
                    href="/skills"
                    class="inline-flex items-center px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
                >
                    Vedi tutte le competenze
                    <svg
                        class="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 5l7 7-7 7"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { skills, type Skill } from '../data/skills';

const selectedSkillId = ref<string | null>(null);

const displayedSkills = computed(() => {
    return skills.slice(0, 4);
});

const iconMap: Record<string, string> = {
    ShoppingCart: '🛒',
    Code: '💻',
    Zap: '⚡',
    TrendingUp: '📈',
    Shield: '🛡️',
    Compass: '🧭',
    BookOpen: '📖',
};

const colorClasses: Record<string, string> = {
    cyan: 'bg-cyan-100 text-cyan-700',
    blue: 'bg-blue-100 text-blue-700',
    amber: 'bg-amber-100 text-amber-700',
    pink: 'bg-pink-100 text-pink-700',
    green: 'bg-green-100 text-green-700',
    purple: 'bg-purple-100 text-purple-700',
    indigo: 'bg-indigo-100 text-indigo-700',
};

const handleCardClick = (skillId: string) => {
    selectedSkillId.value = selectedSkillId.value === skillId ? null : skillId;
};
</script>

<style scoped>
.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
