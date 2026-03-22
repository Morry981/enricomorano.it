import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AntiSpamEmail from '../components/AntiSpamEmail.vue';

describe('AntiSpamEmail.vue', () => {
    it('rende un link mailto corretto dopo il mount', async () => {
        const wrapper = mount(AntiSpamEmail);
        await wrapper.vm.$nextTick();

        const link = wrapper.find('a');
        expect(link.attributes('href')).toBe('mailto:web@enricomorano.it');
    });

    it('mostra il testo email via JS senza esporlo nell\'HTML statico', async () => {
        const wrapper = mount(AntiSpamEmail);
        await wrapper.vm.$nextTick();

        const span = wrapper.find('span');
        expect(span.text()).toBe('web@enricomorano.it');
    });

    it('apre in una nuova scheda', () => {
        const wrapper = mount(AntiSpamEmail);
        const link = wrapper.find('a');
        expect(link.attributes('target')).toBe('_blank');
        expect(link.attributes('rel')).toBe('noopener noreferrer');
    });
});
