<template>
    <section
        class="fixed inset-x-0 bottom-0 top-20 md:top-24 flex flex-col bg-[#1a1a2e] text-[#98C1D9] font-mono text-sm sm:text-base overflow-hidden"
        @click="focusInput"
    >
        <!-- Barra titolo -->
        <div
            class="flex items-center gap-2 px-4 py-2 bg-[#16213e] border-b border-[#0f3460] shrink-0"
        >
            <button
                @click.stop="goBack"
                class="w-4 h-4 rounded-full bg-[#e74c3c] hover:brightness-125 transition-all cursor-pointer flex items-center justify-center text-[0.875rem] leading-none font-bold text-[#1a1a2e]"
                aria-label="Torna indietro"
            >
                &times;
            </button>
            <span
                class="w-4 h-4 rounded-full bg-[#f39c12] flex items-center justify-center text-[0.875rem] leading-none font-bold text-[#1a1a2e]"
                >&minus;</span
            >
            <span
                class="w-4 h-4 rounded-full bg-[#2ecc71] flex items-center justify-center text-[0.875rem] leading-none font-bold text-[#1a1a2e]"
                >+</span
            >
            <span class="ml-3 text-[#8892b0] text-xs"
                >guest@enricomorano.it - 404</span
            >
        </div>

        <!-- Output -->
        <div
            ref="outputEl"
            class="flex-1 overflow-y-auto px-4 py-3 space-y-1"
            @click.stop="handleOutputClick"
        >
            <div
                v-for="(line, i) in lines"
                :key="i"
                v-html="line"
                class="whitespace-pre-wrap break-words"
            ></div>
        </div>

        <!-- Input -->
        <form
            @submit.prevent="exec"
            class="flex items-center px-4 py-3 border-t border-[#0f3460] shrink-0 gap-2"
        >
            <span class="text-[#e74c3c] shrink-0"
                >guest<span class="text-[#8892b0]">@</span
                ><span class="text-[#98C1D9]"><span class="hidden md:inline">enricomorano.it</span><span class="md:hidden">enrmor.it</span></span
                ><span class="text-[#8892b0]">:~$</span></span
            >
            <input
                ref="inputEl"
                v-model="cmd"
                type="text"
                autocomplete="off"
                autocapitalize="off"
                spellcheck="false"
                enterkeyhint="send"
                :placeholder="hasExecuted ? 'exit' : 'help'"
                class="flex-1 bg-transparent text-[#98C1D9] outline-none caret-[#98C1D9] min-w-0 placeholder:text-[#98C1D9]/30 text-base"
                @keydown.up.prevent="historyUp"
                @keydown.down.prevent="historyDown"
                @keydown="handleTab"
            />
            <button
                type="submit"
                class="shrink-0 w-8 h-8 flex items-center justify-center text-[#8892b0] hover:text-[#98C1D9] active:text-[#e74c3c] transition-colors md:hidden"
                aria-label="Esegui comando"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true">
                    <polyline points="9 10 4 15 9 20" /><path d="M20 4v7a4 4 0 0 1-4 4H4" />
                </svg>
            </button>
        </form>

    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';

interface Props {
    pathname?: string;
}
const props = withDefaults(defineProps<Props>(), { pathname: '/???' });

const cmd = ref('');
const lines = ref<string[]>([]);
const history = ref<string[]>([]);
const historyIdx = ref(-1);
const outputEl = ref<HTMLElement | null>(null);
const inputEl = ref<HTMLInputElement | null>(null);
let lastTabTime = 0;
const hasExecuted = ref(false);

const c = (color: string, text: string) =>
    `<span style="color:${color}">${text}</span>`;
const link = (command: string, label?: string, color = '#98C1D9') =>
    `<span data-cmd="${command}" style="color:${color};text-decoration:underline;cursor:pointer">${label ?? command}</span>`;
const extLink = (url: string, label: string, color = '#25D366') =>
    `<a href="${url}" target="_blank" rel="noopener noreferrer nofollow" style="color:${color};text-decoration:underline">${label}</a>`;

const pages: Record<string, string> = {
    'home.html': '/',
    'skills.html': '/skills',
    'projects.html': '/projects',
    'about-me.html': '/about-me',
};

const BOOT = [
    c('#e74c3c', '  ██╗  ██╗ ██████╗ ██╗  ██╗'),
    c('#e74c3c', '  ██║  ██║██╔═████╗██║  ██║'),
    c('#e74c3c', '  ███████║██║██╔██║███████║'),
    c('#e74c3c', '  ╚════██║████╔╝██║╚════██║'),
    c('#e74c3c', '       ██║╚██████╔╝     ██║'),
    c('#e74c3c', '       ╚═╝ ╚═════╝      ╚═╝'),
    '',
    c('#8892b0', `  Pagina ${c('#e74c3c', props.pathname)} non trovata.`),
    c(
        '#8892b0',
        `  Digita ${link('help', 'help', '#f39c12')} per i comandi disponibili.`,
    ),
    '',
    `  ${extLink('https://wa.me/393520220025?text=Sono%20interessato%20ad%20essere%20contattato', '💬 Chatta su WhatsApp')}`,
    '',
];

const HELP = [
    c('#f39c12', '  Comandi disponibili:'),
    '',
    `  ${link('ls')}              Mostra le pagine del sito`,
    `  ${link('cd')} &lt;pagina&gt;     Vai alla pagina (es. ${c('#8892b0', 'cd home.html')})`,
    `  ${link('cat 404.log')}     Leggi il log dell'errore`,
    `  ${link('whoami')}          Chi sei?`,
    `  ${link('pwd')}             Directory corrente`,
    `  ${link('ping')}            Controlla lo stato del sito`,
    `  ${link('neofetch')}        Info di sistema`,
    `  ${link('date')}            Data e ora`,
    `  ${link('history')}         Cronologia comandi`,
    `  ${link('whatsapp')}        Chatta su WhatsApp`,
    `  ${link('clear')}           Pulisci il terminale`,
    `  ${link('exit')}            Torna alla home`,
    '',
];

const commands: Record<string, (args: string) => string[]> = {
    help: () => HELP,
    ls: () => [
        '',
        ...Object.keys(pages).map((f) => `  ${c('#5dade2', f)}`),
        '',
    ],
    cd: (args) => {
        const file = args.trim();
        if (!file) return [c('#e74c3c', '  Uso: cd <pagina>')];
        const target = pages[file];
        if (!target)
            return [
                c(
                    '#e74c3c',
                    `  Pagina "${file}" non trovata. Digita ${c('#f39c12', 'ls')} per la lista.`,
                ),
            ];
        setTimeout(() => (window.location.href = target), 1500);
        return [c('#2ecc71', `  Navigazione verso ${file}...`)];
    },
    cat: (args) => {
        if (args.trim() !== '404.log')
            return [
                c(
                    '#e74c3c',
                    `  cat: ${args.trim() || '???'}: file non trovato`,
                ),
            ];
        return [
            '',
            c('#8892b0', '  [LOG] La pagina richiesta è scappata.'),
            c('#8892b0', '  [LOG] Ultimo avvistamento: qualche deploy fa.'),
            c('#8892b0', '  [LOG] Probabilmente si è rifugiata in /dev/null.'),
            c('#8892b0', '  [LOG] Suggerimento: prova con "ls" e "cd".'),
            '',
        ];
    },
    whoami: () => [
        c(
            '#f39c12',
            '  Visitatore smarrito. Ultima posizione nota: ' + props.pathname,
        ),
    ],
    pwd: () => [c('#8892b0', '  /lost+found')],
    ping: () => [
        '',
        c('#2ecc71', '  PING enricomorano.it - 64 bytes'),
        c('#2ecc71', '  Risposta: il sito è vivo. Sei tu che ti sei perso.'),
        '',
    ],
    neofetch: () => [
        '',
        `  ${c('#e74c3c', 'OS')}       Astro v5 + Vue 3`,
        `  ${c('#e74c3c', 'Shell')}    TypeScript strict`,
        `  ${c('#e74c3c', 'Theme')}    Tailwind CSS v4`,
        `  ${c('#e74c3c', 'Host')}     enricomorano.it`,
        `  ${c('#e74c3c', 'Dev')}      Enrico Morano`,
        '',
    ],
    date: () => [
        c(
            '#8892b0',
            '  ' +
                new Date().toLocaleString('it-IT', {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                }),
        ),
    ],
    history: () => {
        if (!history.value.length)
            return [c('#8892b0', '  Nessun comando nella cronologia.')];
        return [
            '',
            ...history.value.map(
                (h, i) => `  ${c('#8892b0', String(i + 1).padStart(3))}  ${h}`,
            ),
            '',
        ];
    },
    whatsapp: () => {
        window.open('https://wa.me/393520220025?text=Sono%20interessato%20ad%20essere%20contattato', '_blank', 'noopener,noreferrer');
        return [c('#25D366', '  Apertura chat WhatsApp...')];
    },
    clear: () => {
        lines.value = [...BOOT];
        return [];
    },
    exit: () => {
        setTimeout(() => (window.location.href = '/'), 1200);
        return [c('#2ecc71', '  Arrivederci!')];
    },
    sudo: () => [
        c('#e74c3c', '  Permesso negato. Non sei root qui.'),
        '',
        `<img src="/images/eeh-volevih.gif" alt="Eeh volevi!" style="max-width:min(320px,80vw);border-radius:8px;margin-left:16px" />`,
        '',
        c('#8892b0', '  "Con grandi poteri derivano grandi responsabilità."'),
    ],
};

const cmdNames = Object.keys(commands);
const pageNames = Object.keys(pages);
const catFiles = [...pageNames, '404.log'];
const argPool: Record<string, string[]> = {
    cd: pageNames,
    cat: catFiles,
};

const prompt = (text: string) =>
    `${c('#e74c3c', 'guest')}${c('#8892b0', '@')}${c('#98C1D9', 'enricomorano.it')}${c('#8892b0', ':~$')} ${text}`;

const scrollDown = async () => {
    await nextTick();
    if (outputEl.value) outputEl.value.scrollTop = outputEl.value.scrollHeight;
};

const focusInput = () => inputEl.value?.focus();

const handleOutputClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const command = target.dataset.cmd;
    if (command) {
        cmd.value = command;
        exec();
        return;
    }
    focusInput();
};

const goBack = () => {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        window.location.href = '/';
    }
};

const handleTab = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    e.preventDefault();

    const now = Date.now();
    const isDouble = now - lastTabTime < 400;
    lastTabTime = now;

    const raw = cmd.value;
    const parts = raw.split(' ');
    const isFirstWord = parts.length <= 1;
    const partial = (
        isFirstWord ? parts[0] : parts.slice(1).join(' ')
    ).toLowerCase();
    const cmdName = parts[0].toLowerCase();
    const pool = isFirstWord ? cmdNames : (argPool[cmdName] ?? catFiles);
    const matches = pool.filter((x) => x.toLowerCase().startsWith(partial));

    if (matches.length === 0) return;

    if (matches.length === 1) {
        if (isFirstWord) {
            cmd.value = matches[0];
        } else {
            cmd.value = parts[0] + ' ' + matches[0];
        }
    } else if (isDouble) {
        lines.value.push(prompt(raw));
        lines.value.push(
            '  ' + matches.map((m) => c('#5dade2', m)).join('    '),
        );
        scrollDown();
    } else {
        // Completa il prefisso comune
        let common = matches[0];
        for (const m of matches) {
            while (!m.toLowerCase().startsWith(common.toLowerCase())) {
                common = common.slice(0, -1);
            }
        }
        if (common.length > partial.length) {
            if (isFirstWord) {
                cmd.value = common;
            } else {
                cmd.value = parts[0] + ' ' + common;
            }
        }
    }
};

const exec = () => {
    const raw = cmd.value.trim() || (hasExecuted.value ? 'exit' : 'help');
    lines.value.push(prompt(raw));

    hasExecuted.value = true;
    history.value.push(raw);
    const [name, ...rest] = raw.split(' ');
    const handler = commands[name.toLowerCase()];
    const output = handler
        ? handler(rest.join(' '))
        : [
              c(
                  '#e74c3c',
                  `  Comando "${name}" non trovato. Digita ${c('#f39c12', 'help')}.`,
              ),
          ];
    lines.value.push(...output);

    cmd.value = '';
    historyIdx.value = -1;
    scrollDown();
};

const historyUp = () => {
    if (!history.value.length) return;
    if (historyIdx.value < history.value.length - 1) historyIdx.value++;
    cmd.value = history.value[history.value.length - 1 - historyIdx.value];
};

const historyDown = () => {
    if (historyIdx.value > 0) {
        historyIdx.value--;
        cmd.value = history.value[history.value.length - 1 - historyIdx.value];
    } else {
        historyIdx.value = -1;
        cmd.value = '';
    }
};

onMounted(() => {
    lines.value = [...BOOT];
    focusInput();
    scrollDown();
});
</script>

