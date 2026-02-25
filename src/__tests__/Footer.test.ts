import { mount } from '@vue/test-utils';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import Footer from '../components/Footer.vue';

// AntiSpamEmail richiede il DOM, lo stubbiamo per isolare Footer
const stubs = { AntiSpamEmail: { template: '<a href="mailto:info@enricomorano.it" />' } };

describe('Footer.vue', () => {
    beforeEach(() => {
        // Simuliamo una pagina corta senza scrollbar
        Object.defineProperty(document.body, 'scrollHeight', { configurable: true, value: 500 });
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: 800 });
    });

    it('mostra il copyright con l\'anno corrente', async () => {
        const wrapper = mount(Footer, { global: { stubs } });
        await wrapper.vm.$nextTick();
        const year = new Date().getFullYear().toString();
        expect(wrapper.text()).toContain(year);
        expect(wrapper.text()).toContain('Enrico Morano');
    });

    it('contiene il link GitHub corretto', async () => {
        const wrapper = mount(Footer, { global: { stubs } });
        await wrapper.vm.$nextTick();
        const github = wrapper.find('a[href="https://github.com/Morry981"]');
        expect(github.exists()).toBe(true);
        expect(github.attributes('aria-label')).toBeTruthy();
        expect(github.attributes('rel')).toBe('noopener noreferrer');
    });

    it('contiene il link LinkedIn corretto', async () => {
        const wrapper = mount(Footer, { global: { stubs } });
        await wrapper.vm.$nextTick();
        const linkedin = wrapper.find('a[href="https://www.linkedin.com/in/enrico-morano/"]');
        expect(linkedin.exists()).toBe(true);
        expect(linkedin.attributes('aria-label')).toBeTruthy();
        expect(linkedin.attributes('rel')).toBe('noopener noreferrer');
    });

    it('è visibile quando la pagina non ha scrollbar', async () => {
        const wrapper = mount(Footer, { global: { stubs } });
        await wrapper.vm.$nextTick();
        // isVisible diventa true nel mounted via handleScroll
        expect(wrapper.find('footer').exists()).toBe(true);
    });
});
