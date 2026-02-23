import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import AntiSpamEmail from '../components/AntiSpamEmail.vue';

describe('AntiSpamEmail.vue', () => {
  it('rende un link mailto corretto dopo il mount', async () => {
    const wrapper = mount(AntiSpamEmail);

    // Aspettiamo che il nextTick di Vue si assesti e il mounted hook sia eseguito
    await wrapper.vm.$nextTick(); 

    // Verifichiamo che l'href sia corretto
    expect(wrapper.attributes('href')).toBe('mailto:info@enricomorano.it');
  });

  it('mostra il testo email tramite pseudo-elementi CSS', async () => {
    const wrapper = mount(AntiSpamEmail);
    
    // Non possiamo testare direttamente i pseudo-elementi CSS con JSDOM
    // Ma possiamo verificare la presenza della classe per cui sono definiti
    expect(wrapper.classes()).toContain('spam-filter');

    // Nota: Il testing del "content" di ::before/::after richiede un browser reale
    // o una libreria che simuli stili computati, non supportato da JSDOM in modo diretto.
    // Questo test verifica solo la struttura HTML e la classe attesa.
  });
});
