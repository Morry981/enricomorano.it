<script setup lang="ts">
import {
    Code2,
    Palette,
    Terminal,
    Globe,
    Cpu,
    Zap,
    ShoppingCart,
    Search,
    Server,
    Smartphone,
    Shield,
    Compass,
    BarChart3,
    Database,
    Blocks,
    Wrench,
    FileCode,
    Monitor,
    GitBranch,
    Plug,
    BrainCircuit,
    Lock,
    Gauge,
    Layers,
    CreditCard,
    Package,
    Container,
    Cloud,
    KeyRound,
    Wifi,
    ScrollText,
    Megaphone,
    Eye,
    Cookie,
    ShieldCheck,
    SquareTerminal,
    MousePointerClick,
    Mail,
    FlaskConical,
    Accessibility,
    MonitorSmartphone,
    GraduationCap,
    BookOpen,
    Workflow,
    BrainCog,
    Sparkles,
    Webhook,
} from 'lucide-vue-next';

interface SkillCategory {
    id: string;
    title: string;
    learning?: boolean;
    skills: {
        name: string;
        icon: any;
        size: 'large' | 'medium' | 'small';
        desc: string;
        id?: string;
    }[];
}

const categories: SkillCategory[] = [
    {
        id: 'ecommerce',
        title: 'E-commerce',
        skills: [
            {
                name: 'PrestaShop',
                icon: ShoppingCart,
                size: 'large',
                desc: 'Sviluppo moduli, temi custom, ottimizzazione flussi ordini e catalogo su PrestaShop 8+',
            },
            {
                name: 'Marketplace',
                icon: Plug,
                size: 'small',
                desc: 'Integrazioni Amazon, eBay, feed prodotti',
            },
            {
                name: 'Pagamenti & Checkout',
                icon: Lock,
                size: 'small',
                desc: 'Gateway custom, checkout ottimizzati, conversione',
            },
            {
                name: 'PHP 8+',
                icon: FileCode,
                size: 'medium',
                desc: 'Backend e-commerce, API REST, logiche business personalizzate',
            },
            {
                name: 'WooCommerce',
                icon: Package,
                size: 'small',
                desc: 'Temi, plugin custom, migrazione da/verso PrestaShop',
            },
            {
                name: 'Shopify',
                icon: ShoppingCart,
                size: 'medium',
                desc: 'Liquid, theme development, Shopify API, app custom',
            },
        ],
    },
    {
        id: 'webdev',
        title: 'Sviluppo Web',
        skills: [
            {
                name: 'Laravel',
                icon: Code2,
                size: 'large',
                desc: 'MVC, Eloquent ORM, middleware, API backend strutturate, queue, eventi',
            },
            {
                name: 'TypeScript',
                icon: Terminal,
                size: 'medium',
                desc: 'Tipizzazione stretta, type safety end-to-end, codice manutenibile',
            },
            {
                name: 'Astro',
                icon: Zap,
                size: 'small',
                desc: 'SSR, View Transitions, performance-first',
            },
            {
                name: 'Tailwind CSS',
                icon: Palette,
                size: 'small',
                desc: 'Utility-first, design system, temi dinamici',
            },
            {
                name: 'Vue.js 3',
                icon: Code2,
                size: 'medium',
                desc: 'Composition API, componenti reattivi, state management, animazioni',
            },
            {
                name: 'Node.js',
                icon: Cpu,
                size: 'medium',
                desc: 'API, automazioni server-side, script CLI, microservizi',
            },
            {
                name: 'Alpine.js',
                icon: Blocks,
                size: 'small',
                desc: 'Interattività leggera senza build step',
            },
            {
                name: 'MySQL',
                icon: Database,
                size: 'medium',
                desc: 'Query complesse, ottimizzazione, migrazioni, stored procedure',
            },
            {
                name: 'Nuxt.js',
                icon: Globe,
                size: 'small',
                desc: 'Framework Vue SSR/SSG, routing automatico',
            },
            {
                name: 'REST API',
                icon: Plug,
                size: 'medium',
                desc: 'Progettazione, documentazione, versionamento endpoint',
            },
            {
                name: 'Stripe & PayPal',
                icon: CreditCard,
                size: 'small',
                desc: 'Integrazioni API pagamento, webhook',
            },
            {
                name: 'Twig',
                icon: ScrollText,
                size: 'small',
                desc: 'Template engine PHP, theming PrestaShop',
            },
            {
                name: 'Sass / SCSS',
                icon: Palette,
                size: 'small',
                desc: 'Pre-processore CSS, variabili, mixin, nesting',
            },
            {
                name: 'Composer',
                icon: Package,
                size: 'small',
                desc: 'Dependency manager PHP, autoloading PSR-4',
            },
        ],
    },
    {
        id: 'seo',
        title: 'SEO & Performance',
        skills: [
            {
                name: 'SEO Tecnica',
                icon: Search,
                size: 'large',
                desc: 'Audit tecnici, ottimizzazione crawl budget, indicizzazione, link interni, sitemap dinamiche',
            },
            {
                name: 'Schema.org',
                icon: Layers,
                size: 'small',
                desc: 'Dati strutturati, rich snippet, JSON-LD',
            },
            {
                name: 'Lighthouse',
                icon: Gauge,
                size: 'small',
                desc: 'Audit automatici, punteggi performance, accessibilità',
            },
            {
                name: 'Core Web Vitals',
                icon: Gauge,
                size: 'medium',
                desc: 'LCP, FID, CLS - ottimizzazione misurabile e continua',
            },
            {
                name: 'GA4 & GTM',
                icon: BarChart3,
                size: 'small',
                desc: 'Tracking avanzato, eventi custom, dataLayer',
            },
            {
                name: 'Privacy & GDPR',
                icon: Cookie,
                size: 'small',
                desc: 'Cookie consent, compliance normativa, privacy by design',
            },
            {
                name: 'A/B Testing',
                icon: FlaskConical,
                size: 'small',
                desc: 'Ottimizzazione conversioni, test varianti, dati quantitativi',
            },
            {
                name: 'Google Search Console',
                icon: Eye,
                size: 'medium',
                desc: 'Monitoraggio indicizzazione, copertura, performance query',
            },
            {
                name: 'Hotjar & Clarity',
                icon: MousePointerClick,
                size: 'small',
                desc: 'Heatmap, session recording, analisi UX',
            },
            {
                name: 'Meta Pixel & Google Ads',
                icon: Megaphone,
                size: 'medium',
                desc: 'Tracking conversioni, remarketing, campagne advertising',
            },
        ],
    },
    {
        id: 'infra',
        title: 'Infrastruttura & DevOps',
        skills: [
            {
                name: 'VPS & Apache',
                icon: Server,
                size: 'medium',
                desc: 'Configurazione server, virtual host, SSL, tuning performance',
            },
            {
                name: 'Linux',
                icon: Monitor,
                size: 'small',
                desc: 'Amministrazione, scripting bash, cron, sicurezza',
            },
            {
                name: 'Git & CI/CD',
                icon: GitBranch,
                size: 'small',
                desc: 'Versionamento, deploy automatici, workflow',
            },
            {
                name: 'Vite',
                icon: Zap,
                size: 'small',
                desc: 'Build chain moderno, HMR, ottimizzazione bundle',
            },
            {
                name: 'Docker',
                icon: Container,
                size: 'medium',
                desc: 'Containerizzazione, ambienti riproducibili, docker-compose',
            },
            {
                name: 'Nginx',
                icon: Server,
                size: 'small',
                desc: 'Reverse proxy, load balancing, configurazione SSL',
            },
            {
                name: 'Cloudflare',
                icon: Cloud,
                size: 'small',
                desc: 'CDN, DNS, protezione DDoS, caching edge',
            },
            {
                name: 'SSH & SFTP',
                icon: KeyRound,
                size: 'small',
                desc: 'Gestione server remoto, tunnel, deploy sicuro',
            },
            {
                name: "Certbot / Let's Encrypt",
                icon: ShieldCheck,
                size: 'small',
                desc: 'Certificati SSL automatici, rinnovo, HTTPS everywhere',
            },
            {
                name: 'cPanel / Plesk',
                icon: Monitor,
                size: 'small',
                desc: 'Gestione hosting condiviso, domini, email, backup',
            },
        ],
    },
    {
        id: 'mobile',
        title: 'Mobile & Altro',
        skills: [
            {
                name: 'iOS & Android',
                icon: Smartphone,
                size: 'medium',
                desc: 'Sviluppo app native e cross-platform',
            },
            {
                name: 'Automazione',
                icon: BrainCircuit,
                size: 'large',
                desc: 'Script, estensioni browser, import/export, riduzione attrito manuale nei flussi aziendali',
                id: 'automation',
            },
            {
                name: 'Problem Solving',
                icon: Wrench,
                size: 'small',
                desc: 'Debug produzione, hotfix, analisi root cause',
                id: 'proactive',
            },
            {
                name: 'Consulenza',
                icon: Compass,
                size: 'small',
                desc: 'Roadmap tecnologica, scelte architetturali, ROI digitale',
                id: 'strategy',
            },
            {
                name: 'PWA',
                icon: Wifi,
                size: 'small',
                desc: 'Progressive Web App, offline-first, service worker',
            },
            {
                name: 'Sicurezza Web',
                icon: ShieldCheck,
                size: 'medium',
                desc: 'OWASP, XSS, SQL injection, HTTPS, CSP, hardening',
            },
            {
                name: 'Testing',
                icon: SquareTerminal,
                size: 'small',
                desc: 'Vitest, Playwright, TDD, test unitari e E2E',
            },
            {
                name: 'Responsive Design',
                icon: MonitorSmartphone,
                size: 'medium',
                desc: 'Mobile-first, breakpoint strategy, layout adattivi',
            },
            {
                name: 'Accessibilità (WCAG)',
                icon: Accessibility,
                size: 'medium',
                desc: 'A11y, screen reader, semantica HTML, contrasto colori',
            },
            {
                name: 'Mailchimp & Brevo',
                icon: Mail,
                size: 'medium',
                desc: 'Email marketing, newsletter, automazione campagne, template',
            },
            {
                name: 'jQuery',
                icon: Code2,
                size: 'small',
                desc: 'Mantenimento codebase legacy, migrazione a framework moderni',
            },
            {
                name: 'WebSocket',
                icon: Webhook,
                size: 'small',
                desc: 'Comunicazione real-time, notifiche live, chat',
            },
            {
                name: 'GitHub Actions',
                icon: Workflow,
                size: 'medium',
                desc: 'Pipeline CI/CD, automazione test e deploy, workflow custom',
            },
        ],
    },
    {
        id: 'learning',
        title: 'In corso di apprendimento',
        learning: true,
        skills: [
            {
                name: 'GraphQL',
                icon: Workflow,
                size: 'small',
                desc: 'Query API flessibili, Apollo, schema-first',
            },
            {
                name: 'AWS',
                icon: Cloud,
                size: 'small',
                desc: 'S3, Lambda, EC2, architetture serverless',
            },
            {
                name: 'Symfony',
                icon: Code2,
                size: 'small',
                desc: 'Framework PHP enterprise, bundle, DI container',
            },
            {
                name: 'Redis',
                icon: Database,
                size: 'small',
                desc: 'Caching in-memory, sessioni, code messaggi',
            },
            {
                name: 'Pinia',
                icon: Blocks,
                size: 'small',
                desc: 'State management Vue 3, devtools, type-safe',
            },
            {
                name: 'MongoDB',
                icon: Database,
                size: 'small',
                desc: 'NoSQL, documenti JSON, aggregation pipeline',
            },
            {
                name: 'Figma',
                icon: Sparkles,
                size: 'small',
                desc: 'Design UI/UX, prototipazione, handoff sviluppo',
            },
            {
                name: 'Python',
                icon: Terminal,
                size: 'small',
                desc: 'Scripting, data processing, automazioni avanzate',
            },
            {
                name: 'Elasticsearch',
                icon: Search,
                size: 'small',
                desc: 'Ricerca full-text, catalogo prodotti, analisi log',
            },
            {
                name: 'Deno',
                icon: Terminal,
                size: 'small',
                desc: 'Runtime TypeScript-native, sicurezza by default',
            },
            {
                name: 'Terraform',
                icon: Blocks,
                size: 'small',
                desc: 'Infrastructure as Code, provisioning cloud',
            },
            {
                name: 'React',
                icon: Code2,
                size: 'small',
                desc: 'Componenti, hooks, ecosistema Next.js',
            },
        ],
    },
];
</script>

<template>
    <div class="space-y-16">
        <section
            v-for="(cat, catIdx) in categories"
            :key="cat.title"
            :id="cat.id"
        >
            <h2
                v-motion
                :initial="{ opacity: 0, x: -30 }"
                :enter="{
                    opacity: 1,
                    x: 0,
                    transition: { delay: catIdx * 80 },
                }"
                class="text-3xl font-bold mb-6"
                :class="cat.learning ? 'text-secondary/60' : 'text-accent'"
            >
                {{ cat.title }}
            </h2>
            <div
                class="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]"
            >
                <article
                    v-for="(skill, index) in cat.skills"
                    :key="skill.name"
                    :id="skill.id"
                    v-motion
                    :initial="{ opacity: 0, y: 50 }"
                    :enter="{
                        opacity: 1,
                        y: 0,
                        transition: { delay: catIdx * 80 + index * 100 },
                    }"
                    class="bento-card flex flex-col justify-between group cursor-default"
                    :class="{
                        'md:col-span-2 md:row-span-2':
                            skill.size === 'large' && !cat.learning,
                        'md:col-span-2':
                            skill.size === 'medium' && !cat.learning,
                        'md:col-span-1': skill.size === 'small' || cat.learning,
                        'opacity-60 border-dashed!': cat.learning,
                    }"
                >
                    <div class="flex justify-between items-start">
                        <component
                            :is="skill.icon"
                            class="w-10 h-10 text-accent group-hover:scale-110 transition-transform duration-500"
                            aria-hidden="true"
                        />
                    </div>
                    <div>
                        <h3
                            class="text-2xl font-bold mb-2 group-hover:text-accent transition-colors"
                        >
                            {{ skill.name }}
                        </h3>
                        <p class="text-secondary/60 text-sm">
                            {{ skill.desc }}
                        </p>
                    </div>
                </article>
            </div>
        </section>
    </div>
</template>
