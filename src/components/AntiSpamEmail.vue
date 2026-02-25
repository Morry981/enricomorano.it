<template>
    <a :href="mailtoLink" class="spam-filter" @mouseover="revealEmail" @focus="revealEmail"></a>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const mailtoLink = ref('#'); // Default to # until JS constructs it

const USER = 'web';
const DOMAIN = 'enricomorano.it';

const revealEmail = () => {
    // This function is triggered on mouseover/focus to construct the mailto link
    // Only happens on client-side, making it harder for bots
    if (mailtoLink.value === '#') {
        mailtoLink.value = `mailto:${USER}@${DOMAIN}`;
    }
};

onMounted(() => {
    // Initial construction for accessibility and in case mouseover isn't triggered
    revealEmail();
});
</script>

<style scoped>
/* Scoped styles for the AntiSpamEmail component */
.spam-filter {
    /* Base styles, can be customized */
    color: var(--color-light); /* Or inherit from parent */
    text-decoration: underline; /* Make it look like a link */
    cursor: pointer;
}

/* Pseudo-elements to display the email without putting it directly in HTML */
.spam-filter::before {
    content: "web@";
}

.spam-filter::after {
    content: "enricomorano.it";
}
</style>