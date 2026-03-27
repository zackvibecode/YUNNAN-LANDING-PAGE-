const fs = require('fs');
const path = require('path');

const premierDates = [
    {date: '25 MAR 2026 - 31 MAR 2026', title: 'Cuti Sekolah + Raya Eid Fitri', price: '4,790', full: '4,890'},
    {date: '28 MEI 2026 - 03 JUN 2026', title: 'Cuti Sekolah + Raya Eid Adha', price: '4,790', full: '4,890'},
    {date: '29 MEI 2026 - 04 JUN 2026', title: 'Cuti Sekolah + Raya Eid Adha', price: '4,790', full: '4,890'},
    {date: '30 MEI 2026 - 05 JUN 2026', title: 'Cuti Sekolah + Raya Eid Adha', price: '4,790', full: '4,890'},
    {date: '31 MEI 2026 - 06 JUN 2026', title: 'Cuti Sekolah + Raya Eid Adha', price: '4,790', full: '4,890'},
    {date: '01 JUN 2026 - 07 JUN 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '28 AUG 2026 - 03 SEP 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '29 AUG 2026 - 04 SEP 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '30 AUG 2026 - 05 SEP 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '31 AUG 2026 - 06 SEP 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '04 DEC 2026 - 10 DEC 2026', title: 'Cuti Sekolah', price: '4,490', full: '4,590'},
    {date: '05 DEC 2026 - 11 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '10 DEC 2026 - 16 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '11 DEC 2026 - 17 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '17 DEC 2026 - 23 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '18 DEC 2026 - 24 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '19 DEC 2026 - 25 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '23 DEC 2026 - 29 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
    {date: '24 DEC 2026 - 30 DEC 2026', title: 'Cuti Sekolah', price: '4,790', full: '4,890'},
];

const schoolHolidayWindows = [
    {label: 'CUTI 1', title: 'Cuti Sekolah 1', start: '19 MAR 2026', end: '29 MAR 2026', period: '19 MAR 2026 - 29 MAR 2026'},
    {label: 'CUTI 2', title: 'Cuti Sekolah 2', start: '23 MAY 2026', end: '07 JUN 2026', period: '23 MAY 2026 - 07 JUN 2026'},
    {label: 'CUTI 3', title: 'Cuti Sekolah 3', start: '29 AUG 2026', end: '06 SEP 2026', period: '29 AUG 2026 - 06 SEP 2026'},
    {label: 'CUTI 4', title: 'Cuti Sekolah 4', start: '05 DIS 2026', end: '31 DIS 2026', period: '05 DIS 2026 - 31 DIS 2026'},
];

const promoDates = [
    {date: '07 FEB 2026 - 13 FEB 2026', title: 'Musim Winter', price: '4,490', full: '4,590'},
    {date: '02 APR 2026 - 08 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '09 APR 2026 - 14 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '16 APR 2026 - 22 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '17 APR 2026 - 23 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '22 APR 2026 - 28 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '23 APR 2026 - 29 APR 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '07 MEI 2026 - 13 MEI 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '08 MEI 2026 - 14 MEI 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '14 MEI 2026 - 20 MEI 2026', title: 'Musim Spring', price: '4,490', full: '4,590'},
    {date: '15 MEI 2026 - 21 MEI 2026', title: 'Musim Spring', price: '4,190', full: '4,590'},
    {date: '10 JUN 2026 - 16 JUN 2026', title: 'Musim Summer', price: '4,190', full: '4,590'},
    {date: '16 JUN 2026 - 22 JUN 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '03 JUL 2026 - 09 JUL 2026', title: 'Musim Summer', price: '4,190', full: '4,590'},
    {date: '17 JUL 2026 - 23 JUL 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '06 AUG 2026 - 12 AUG 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '13 AUG 2026 - 19 AUG 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '22 AUG 2026 - 28 AUG 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '16 SEP 2026 - 22 SEP 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '24 SEP 2026 - 30 SEP 2026', title: 'Musim Summer', price: '4,490', full: '4,590'},
    {date: '09 OCT 2026 - 15 OCT 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
    {date: '16 OCT 2026 - 22 OCT 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
    {date: '22 OCT 2026 - 28 OCT 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
    {date: '23 OCT 2026 - 29 OCT 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
    {date: '06 NOV 2026 - 12 NOV 2026', title: 'Musim Autumn + Deepavali', price: '4,490', full: '4,590'},
    {date: '07 NOV 2026 - 13 NOV 2026', title: 'Musim Autumn + Deepavali', price: '4,490', full: '4,590'},
    {date: '19 NOV 2026 - 25 NOV 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
    {date: '20 NOV 2026 - 26 NOV 2026', title: 'Musim Autumn', price: '4,490', full: '4,590'},
];

const premierHolidayGroups = [
    { holiday: schoolHolidayWindows[0], dates: premierDates.slice(0, 1) },
    { holiday: schoolHolidayWindows[1], dates: premierDates.slice(1, 6) },
    { holiday: schoolHolidayWindows[2], dates: premierDates.slice(6, 10) },
    { holiday: schoolHolidayWindows[3], dates: premierDates.slice(10) },
];

function splitDateRange(dateRange) {
    const [depart, arrival] = dateRange.split(' - ');
    return { depart, arrival };
}

function stripYear(dateText) {
    return dateText.replace(' 2026', '');
}

function getVisibleNote(title) {
    if (title === 'Cuti Sekolah') return 'Dalam tempoh cuti sekolah';
    if (title.startsWith('Cuti Sekolah + ')) return title.replace('Cuti Sekolah + ', '');
    return title;
}

function getSecondaryNote(title) {
    if (title.startsWith('Cuti Sekolah + ')) return 'Dalam tempoh cuti sekolah';
    return '';
}

function makeDateRow(item, hoverText) {
    const { depart, arrival } = splitDateRange(item.date);
    const primaryNote = getVisibleNote(item.title);
    const secondaryNote = getSecondaryNote(item.title);
    return `
<div class="group/row relative rounded-2xl border border-outline-variant/20 bg-white px-4 py-4 transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_18px_40px_-22px_rgba(186,0,19,0.45)] md:px-5">
<div class="grid gap-3 md:grid-cols-[1.15fr_1.15fr_1fr_1fr_1.5fr] md:items-center">
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">Berlepas</p>
<p class="font-headline text-lg font-extrabold text-on-surface">${depart}</p>
</div>
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">Ketibaan</p>
<p class="font-headline text-lg font-extrabold text-on-surface">${arrival}</p>
</div>
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">Harga Asal</p>
<p class="text-base font-bold text-zinc-400 line-through">RM ${item.full}</p>
</div>
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">Harga Promo</p>
<p class="text-xl font-extrabold text-primary">RM ${item.price}</p>
</div>
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500 md:hidden">Nota</p>
<p class="text-sm font-semibold text-on-surface">${primaryNote}</p>
${secondaryNote ? `<p class="mt-1 text-xs uppercase tracking-[0.18em] text-primary">${secondaryNote}</p>` : ''}
</div>
</div>
<div class="mt-3 rounded-xl bg-primary/[0.04] px-3 py-2 text-xs font-medium text-on-surface-variant md:hidden">${hoverText}</div>
<div class="pointer-events-none absolute left-1/2 top-full z-20 hidden w-[320px] -translate-x-1/2 translate-y-4 rounded-2xl border border-primary/15 bg-white p-4 opacity-0 editorial-shadow transition-all duration-500 ease-out md:block md:group-hover/row:translate-y-2 md:group-hover/row:opacity-100">
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">Hover Detail</p>
<p class="mt-2 text-sm font-semibold text-on-surface">${hoverText}</p>
<p class="mt-2 text-xs leading-relaxed text-on-surface-variant">Tarikh dan harga ini disusun semula ikut PDF Yunnan 2026.</p>
</div>
</div>`;
}

function makePremierGroupsHtml() {
    return premierHolidayGroups.map(({ holiday, dates }) => `
<details class="group rounded-[1.75rem] border border-outline-variant/25 bg-surface-container-lowest shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg" ${holiday.label === 'CUTI 1' ? 'open' : ''}>
<summary class="list-none cursor-pointer p-5 md:p-6">
<div class="flex items-start justify-between gap-4">
<div class="flex items-start gap-4">
<span class="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 font-headline text-sm font-black tracking-[0.14em] text-primary">${holiday.label}</span>
<div>
<p class="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Cuti Penggal</p>
<h3 class="mt-1 font-headline text-2xl font-extrabold text-on-surface">${holiday.title}</h3>
<div class="mt-3 flex flex-wrap gap-2 text-xs font-bold text-on-surface-variant md:text-sm">
<span class="rounded-full bg-surface-container-low px-3 py-1.5">MULA: ${holiday.start}</span>
<span class="rounded-full bg-surface-container-low px-3 py-1.5">TAMAT: ${holiday.end}</span>
<span class="rounded-full bg-primary/10 px-3 py-1.5 text-primary">${dates.length} TARIKH</span>
</div>
</div>
</div>
<span class="material-symbols-outlined mt-1 text-3xl text-primary transition-transform duration-300 group-open:rotate-180">expand_circle_down</span>
</div>
</summary>
<div class="px-5 pb-5 md:px-6 md:pb-6">
<div class="mb-4 hidden rounded-2xl bg-surface-container-low px-5 py-3 md:grid md:grid-cols-[1.15fr_1.15fr_1fr_1fr_1.5fr] md:gap-3">
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Berlepas</p>
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Ketibaan</p>
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Harga Asal</p>
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Harga Promo</p>
<p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Nota</p>
</div>
<div class="space-y-3">
${dates.map(item => makeDateRow(item, `${holiday.label} | ${holiday.period}`)).join('')}
</div>
</div>
</details>`).join('');
}

function makePromoRowsHtml() {
    return promoDates.map(item => makeDateRow(item, 'Tarikh pelepasan rasmi daripada PDF Yunnan 2026')).join('');
}

let html = `<!DOCTYPE html>
<html class="scroll-smooth" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Nusa Travel | Yunnan 7D5N Editorial Journey</title>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "secondary-fixed": "#e5e2e1",
                "primary-fixed-dim": "#ffb4ab",
                "tertiary-container": "#007bb5",
                "surface-container-lowest": "#ffffff",
                "surface": "#f9f9f9",
                "on-primary-fixed-variant": "#93000d",
                "on-primary-container": "#fffafa",
                "surface-container": "#eeeeee",
                "primary-container": "#e31e24",
                "on-error": "#ffffff",
                "secondary": "#5f5e5e",
                "on-primary-fixed": "#410002",
                "secondary-fixed-dim": "#c8c6c5",
                "inverse-primary": "#ffb4ab",
                "inverse-surface": "#2f3131",
                "outline": "#926f6b",
                "on-surface-variant": "#5d3f3c",
                "background": "#f9f9f9",
                "tertiary-fixed-dim": "#8ecdff",
                "tertiary": "#006190",
                "on-tertiary-fixed-variant": "#004b71",
                "on-surface": "#1a1c1c",
                "on-tertiary": "#ffffff",
                "surface-variant": "#e2e2e2",
                "tertiary-fixed": "#cbe6ff",
                "on-tertiary-container": "#fbfcff",
                "on-secondary-fixed-variant": "#474746",
                "on-primary": "#ffffff",
                "primary": "#ba0013",
                "surface-container-high": "#e8e8e8",
                "error-container": "#ffdad6",
                "error": "#ba1a1a",
                "primary-fixed": "#ffdad6",
                "outline-variant": "#e7bdb8",
                "secondary-container": "#e2dfde",
                "surface-container-highest": "#e2e2e2",
                "on-secondary-fixed": "#1c1b1b",
                "on-secondary-container": "#636262",
                "surface-bright": "#f9f9f9",
                "inverse-on-surface": "#f1f1f1",
                "surface-container-low": "#f3f3f3",
                "surface-dim": "#dadada",
                "surface-tint": "#c00014",
                "on-tertiary-fixed": "#001e30",
                "on-error-container": "#93000a",
                "on-secondary": "#ffffff",
                "on-background": "#1a1c1c"
              },
              fontFamily: {
                "headline": ["Plus Jakarta Sans"],
                "body": ["Manrope"],
                "label": ["Manrope"]
              },
              borderRadius: {"DEFAULT": "0.25rem", "lg": "0.5rem", "xl": "0.75rem", "full": "9999px"},
            },
          },
        }
    </script>
<style>
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24; }
        .editorial-shadow { box-shadow: 0 32px 64px -12px rgba(26, 28, 28, 0.06); }
        .text-balance { text-wrap: balance; }
        .tab-content { display: none; }
        .tab-content.active { display: block; animation: fadeIn 0.5s ease; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 9999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #d4d4d8; border-radius: 9999px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #a1a1aa; }
        @keyframes fadeIn { from { opacity: 0; transform:translateY(10px); } to { opacity: 1; transform:translateY(0); } }
    </style>
</head>
<body class="bg-surface font-body text-on-surface">
<!-- TopNavBar -->
<nav class="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl shadow-sm">
<div class="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
<span class="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white font-headline">NUSA TRAVEL</span>
<div class="hidden md:flex items-center space-x-8">
<a class="text-red-600 font-bold border-b-2 border-red-600 pb-1" href="#destinations">Destinations</a>
<a class="text-zinc-600 hover:text-zinc-900 transition-colors" href="#itinerary">Itinerary</a>
<a class="text-zinc-600 hover:text-zinc-900 transition-colors" href="#gallery">Gallery</a>
<a class="text-zinc-600 hover:text-zinc-900 transition-colors" href="#reviews">Reviews</a>
<a class="text-zinc-600 hover:text-zinc-900 transition-colors" href="#faq">FAQ</a>
</div>
<a class="hidden md:block bg-gradient-to-br from-red-600 to-red-700 text-white px-6 py-2.5 rounded-xl font-bold hover:opacity-90 transition-all active:scale-95" href="#pricing">
                Lihat Tarikh & Harga
            </a>
</div>
<div class="bg-zinc-100/50 h-[1px] w-full"></div>
</nav>

<!-- Hero Section -->
<section class="relative pt-32 pb-20 px-6 overflow-hidden">
<div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div class="z-10">
<div class="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full mb-6">
<span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">verified</span>
<span class="text-xs font-bold tracking-widest uppercase">Group 2026 | Makan halal | Tour leader Malaysia</span>
</div>
<h1 class="font-headline text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface leading-[1.1] mb-6 text-balance">
                    Travel Yunnan 7 Hari Tanpa Serabut Semua Dah Include — <span class="text-primary italic">Kau Just Datang Enjoy.</span>
</h1>
<p class="text-2xl font-bold text-on-surface-variant mb-8">
                    Dari <span class="text-primary text-4xl">RM4,190</span> sahaja.
                </p>
<div class="flex flex-wrap gap-4 mb-10">
<div class="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">mountain_flag</span>
<span class="font-semibold text-sm">Snow Mountain</span>
</div>
<div class="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">train</span>
<span class="font-semibold text-sm">Bullet Train</span>
</div>
<div class="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-xl">
<span class="material-symbols-outlined text-primary">water_drop</span>
<span class="font-semibold text-sm">Blue Moon Valley</span>
</div>
</div>
<div class="flex flex-col sm:flex-row gap-4">
<a href="https://wa.me/601111111111" class="bg-gradient-to-br from-red-600 to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 editorial-shadow hover:scale-[1.02] transition-transform">
                        WhatsApp Sekarang
                        <span class="material-symbols-outlined">send</span>
</a>
<a href="#pricing" class="bg-white border border-outline-variant/30 text-on-surface px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-surface-container-low transition-colors">
                        Lihat Tarikh & Harga
                    </a>
</div>
</div>
<div class="relative">
<div class="aspect-[4/5] rounded-[2rem] overflow-hidden editorial-shadow rotate-2 hover:rotate-0 transition-transform duration-700">
<img alt="Yunnan Snow Mountain" class="w-full h-full object-cover" data-alt="Stunning aerial view of the Jade Dragon Snow Mountain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPYPp_Yqk-6tQDHmlEsC_xibDNNij63WXy1ofhCrQIhbANYmPBYN5FBNe9SgYCm-1J0gz8ypkCpE-PJs946kY7xjFWIgplNvITn_aqi5lDXXrqkEFPpBS4tRy8a4q-zp6z-t3237ZXqPPbjiDsQ9zvElnB82lo6GAfOuB_5p3F71wbmUCv2KNPFDxbzvtnsT5m9Rh3vdpl-lUPWPOQ28Gl6jbAOZOowcXaMgOj2uazjMfeuwuCLuVrMKqVsZulxopL8mEcFf729IE"/>
</div>
<div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl editorial-shadow max-w-[240px] hidden md:block">
<p class="text-sm font-manrope font-medium text-on-surface-variant leading-relaxed">
                        "Trip paling smooth pernah aku join. Semua dah siap, tinggal bawa beg je."
                    </p>
<p class="mt-3 font-bold text-primary">— Akmal, Kuala Lumpur</p>
</div>
</div>
</div>
</section>

<!-- Value Stack -->
<section class="bg-surface-container-low py-24 px-6">
<div class="max-w-7xl mx-auto">
<h2 class="font-headline text-4xl font-extrabold mb-12 text-center">Apa yang kau dapat dalam trip ni:</h2>
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow group hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-primary text-4xl mb-4 group-hover:text-white" style="font-variation-settings: 'FILL' 1;">train</span>
<h3 class="font-headline text-xl font-bold mb-2 group-hover:text-white">Bullet Train 2x</h3>
<p class="text-on-surface-variant text-sm group-hover:text-white/80">Jimat masa, jimat tenaga. Tak perlu naik bas lama-lama merentas wilayah.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow group hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-primary text-4xl mb-4 group-hover:text-white" style="font-variation-settings: 'FILL' 1;">landscape</span>
<h3 class="font-headline text-xl font-bold mb-2 group-hover:text-white">Snow Mountain</h3>
<h4 class="text-xs uppercase tracking-tighter mb-2 group-hover:text-white/60">+ Cable Car Included</h4>
<p class="text-on-surface-variant text-sm group-hover:text-white/80">Puncak Jade Dragon Snow Mountain. View paling 'mahal' kat Yunnan.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow group hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-primary text-4xl mb-4 group-hover:text-white" style="font-variation-settings: 'FILL' 1;">restaurant_menu</span>
<h3 class="font-headline text-xl font-bold mb-2 group-hover:text-white">Halal Meals</h3>
<p class="text-on-surface-variant text-sm group-hover:text-white/80">Tak payah risau pasal makan. Kita bawak ke kedai makan halal terpilih.</p>
</div>
<div class="bg-surface-container-lowest p-8 rounded-2xl editorial-shadow group hover:bg-primary transition-colors">
<span class="material-symbols-outlined text-primary text-4xl mb-4 group-hover:text-white" style="font-variation-settings: 'FILL' 1;">support_agent</span>
<h3 class="font-headline text-xl font-bold mb-2 group-hover:text-white">MY Tour Leader</h3>
<p class="text-on-surface-variant text-sm group-hover:text-white/80">Tour leader dari Malaysia. Nak tanya apa-apa pun senang, bahasa kita.</p>
</div>
</div>
<div class="mt-16 text-center">
<p class="text-2xl font-bold text-on-surface italic">Kau tak payah fikir apa-apa. Just datang, ikut, enjoy.</p>
</div>
</div>
</section>

<!-- Attraction Grid -->
<section class="py-24 px-6" id="destinations">
<div class="max-w-7xl mx-auto">
<div class="mb-16">
<h2 class="font-headline text-4xl md:text-5xl font-extrabold mb-4">Bukan satu tempat.</h2>
<p class="text-xl text-on-surface-variant">Ini full experience yang kau takkan lupa seumur hidup.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
<div class="md:col-span-8 relative overflow-hidden rounded-3xl group">
<img alt="Blue Moon Valley" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWIjwjWWNKNyyniriD6JXNAn8gRIXLubOrzj14hDUNqK9PIVTotcOs-hGL2p7xB2-20X6SqoZgb4XZ_xt5OkavE1d_fDNsQM8EN3aERYsChGkIJsWbd_EVxz8ha_W1DQw0Jucc9zV8fHZq_L9PYyrpwhB6flX9YDEloUTVBBXiLaljZBpm9ul4_oqa1SLd1qUzi48HNJH8yo6wQRiEi-JflG3LPjZ5sgTdmXQ-56SHmAviLDXDOt5S1A4cKTWoNZNachzZdpfY5xw"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
<span class="text-white/70 text-sm font-bold tracking-widest uppercase mb-2">The Highlight</span>
<h3 class="text-white text-3xl font-headline font-bold">Blue Moon Valley</h3>
</div>
</div>
<div class="md:col-span-4 relative overflow-hidden rounded-3xl group">
<img alt="Lijiang Old Town" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXMPnCu1781xSb7AdG501A_zNDrC2HqquyheYY6OBAAlL2aqQa9W8dpvB_S8sDuCQKNGJXpXfe3xojQE8dz6mXPV0U7pWRQoT3_wM2n0BHiyUHS0VLi8s-gfdaEi3wdT9vMd0kbJa_BXzVF3kUUzfS3_zJquhScHlN8OXqDeFqxbUyAbR2BoEGC7aL_DNqihDdCYGL_nREsC0UEkP06B6bu_dOHrlegxRdZcDInl1h8aps3zwvK1PeJ5G7eBfpPbIz3WMynNi1xgs"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
<h3 class="text-white text-2xl font-headline font-bold">Lijiang Old Town</h3>
</div>
</div>
<div class="md:col-span-4 relative overflow-hidden rounded-3xl group">
<img alt="Dali City" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2_FxwsrZpg-U3sNOdKGKvAMsI_dq8VSOcbNoJOW_A_c0-X31wR-tHLMQwvwt26qvDxtkndFggxwU_Xzy3X3gsqfw3k0UsD5rvcDSvR848ksBYnE9SJMhjrIqnxJNt-LNiALjyMno_ZfeDpGC6P6BADtIxm6bALkPAmH6BfTgXutXizvPjMkv55SiOgFs3psnPDtpw7yFXunhgTIJiCay7DIYcY6ZTDExHt7T31L6H6eZ9l4K2BopaKWbtXsJRKeZ5vsEDIhB0NLc"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
<h3 class="text-white text-2xl font-headline font-bold">Dali City</h3>
</div>
</div>
<div class="md:col-span-8 relative overflow-hidden rounded-3xl group">
<img alt="Stone Forest" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJgULbgS6KIWuW-u7uo69F1cwksWTB2WIzwloZAvEUSW7s1uS3hH7pG-STxqfnzPz0mH9heYt7CTdPaxA0W-gF88nQ1GK8LoUYtvTCh0Bu4cRD9Mj8dA13KddGJpGznQPy5kKFbf7W0kK3eCizfTxdpe4cTVlOTYPN69J52Fi6ida4pedwXSM2BRFNHvcvQQZJ-RDr4qFF7vB_sa77cRICFCPmsK1c-qVRX4abDc0VNBY0Qctb0PF8b0vm4-7dQ5in7GU35JX3Fxc"/>
<div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
<h3 class="text-white text-2xl font-headline font-bold">Stone Forest (Shilin)</h3>
</div>
</div>
</div>
</div>
</section>

<!-- Itinerary Timeline -->
<section class="bg-surface-container py-24 px-6" id="itinerary">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline text-4xl font-extrabold mb-4">Flow trip (simple & padat)</h2>
<p class="text-primary font-bold">Setiap hari ada highlight. Tak buang masa.</p>
</div>
<div class="space-y-4">
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">01</div>
<div>
<h4 class="text-lg font-bold mb-1">KUALA LUMPUR — KUNMING</h4>
<p class="text-on-surface-variant text-sm">Ketibaan di Kunming Airport, disambut oleh team & terus ke hotel. Beli simkad, berehat di hotel Kunming. (MOB)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">02</div>
<div>
<h4 class="text-lg font-bold mb-1">KUNMING — DALI (Bullet Train)</h4>
<p class="text-on-surface-variant text-sm">Bertolak ke Dali dengan Bullet Train. Melawat Dali Ancient City & Erhai Lake Ecological Corridor (termasuk basikal). (B/L/D)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">03</div>
<div>
<h4 class="text-lg font-bold mb-1">DALI — LIJIANG</h4>
<p class="text-on-surface-variant text-sm">Lawatan ke Lijiang Old City & Black Dragon Pool Park. Makan malam percuma di restoran & check-in Lijiang hotel. (B/L/D)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow border-2 border-primary/20">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">04</div>
<div>
<div class="flex items-center gap-2 mb-1">
<h4 class="text-lg font-bold text-primary italic">Highlight: Jade Dragon Snow Mountain</h4>
<span class="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full uppercase font-bold">Must Visit</span>
</div>
<p class="text-on-surface-variant text-sm">Naik Cable Car ke Glacier Park. Kemudian ke Blue Moon Valley (termasuk bateri kereta) & pertunjukan seni tempatan. (B/L/D)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">05</div>
<div>
<h4 class="text-lg font-bold mb-1">LIJIANG — KUNMING (Bullet Train)</h4>
<p class="text-on-surface-variant text-sm">Kembali ke Kunming dengan Bullet Train. Melawat Donghui Mosque & Golden Horse dan Jade Rooster Archway untuk shopping. (B/L/D)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">06</div>
<div>
<h4 class="text-lg font-bold mb-1">KUNMING — SHILIN</h4>
<p class="text-on-surface-variant text-sm">Melawat Batu Hutan (Shilin Stone Forest) & ladang bunga Kunming. Makan malam perpisahan dan check-in hotel. (B/L/D)</p>
</div>
</div>
</div>
<div class="bg-surface-container-lowest p-6 rounded-2xl editorial-shadow">
<div class="flex items-start gap-4">
<div class="bg-primary text-white font-headline px-4 py-2 rounded-xl">07</div>
<div>
<h4 class="text-lg font-bold mb-1">KUNMING — KUALA LUMPUR</h4>
<p class="text-on-surface-variant text-sm">Penghantaran ke lapangan terbang dengan kenangan manis dari Yunnan. (B/MOB)</p>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Pricing Table -->
<section class="py-24 px-6" id="pricing">
<div class="mx-auto max-w-6xl">
<div class="text-center mb-10">
<span class="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Tarikh 2026</span>
<h2 class="mt-4 font-headline text-4xl font-extrabold text-on-surface md:text-5xl">Susunan tarikh ikut PDF Yunnan 2026</h2>
<p class="mx-auto mt-4 max-w-3xl text-base text-on-surface-variant md:text-lg">Tarikh premier dan tarikh pelepasan biasa disusun semula mengikut format PDF supaya lebih kemas, senang scan, dan tepat sebijik pada tarikh.</p>
</div>
<div class="bg-white rounded-[2rem] editorial-shadow overflow-visible border border-outline-variant/20">
<div class="bg-gradient-to-br from-primary to-red-700 p-10 text-center text-white md:p-12">
<h2 class="font-headline text-3xl font-extrabold mb-4">Harga bermula dari RM4,190</h2>
<p class="mx-auto max-w-2xl text-white/80">Pilih tarikh yang paling ngam, sama ada premier date semasa cuti sekolah atau tarikh pelepasan biasa sepanjang tahun.</p>
</div>
<div class="p-6 md:p-8">

<div class="grid gap-4 md:grid-cols-2">
<div class="rounded-3xl border border-primary/15 bg-primary/[0.04] p-6 text-center">
<p class="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Premier Date</p>
<h3 class="mt-2 font-headline text-2xl font-extrabold text-on-surface">Tarikh premier ikut blok cuti</h3>
<p class="mt-3 text-sm text-on-surface-variant">Disusun ikut CUTI 1 sampai CUTI 4 seperti dalam PDF, lengkap dengan nota raya dan harga asal/promo.</p>
<div class="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-primary editorial-shadow">Hover row untuk detail</div>
</div>
<div class="rounded-3xl border border-outline-variant/20 bg-surface p-6 text-center">
<p class="text-[11px] font-bold uppercase tracking-[0.28em] text-zinc-700">Cuti Sekolah</p>
<h3 class="mt-2 font-headline text-2xl font-extrabold text-on-surface">4 tempoh rasmi dalam PDF</h3>
<p class="mt-3 text-sm text-on-surface-variant">Setiap tempoh dipaparkan sekali sahaja supaya tak ada lagi duplicate mention untuk cuti penggal 1 hingga 4.</p>
<div class="mt-5 grid gap-3 text-left sm:grid-cols-2">
${schoolHolidayWindows.map(holiday => `<div class="rounded-2xl border border-outline-variant/20 bg-white px-4 py-3"><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-primary">${holiday.label}</p><p class="mt-1 font-semibold text-on-surface">${holiday.title}</p><p class="mt-1 text-sm text-on-surface-variant">${holiday.period}</p></div>`).join('')}
</div>
</div>
</div>

<div class="mt-6 flex flex-wrap gap-2 justify-center">
    <button onclick="document.getElementById('premierTab').classList.add('active'); document.getElementById('promoTab').classList.remove('active'); this.classList.remove('bg-surface','text-primary'); this.classList.add('bg-primary','text-white'); document.getElementById('btnPromo').classList.remove('bg-primary','text-white'); document.getElementById('btnPromo').classList.add('bg-surface','text-primary');" id="btnPremier" class="px-6 py-3 rounded-full font-bold bg-primary text-white border border-primary transition-colors">Premier Dates</button>
    <button onclick="document.getElementById('promoTab').classList.add('active'); document.getElementById('premierTab').classList.remove('active'); this.classList.remove('bg-surface','text-primary'); this.classList.add('bg-primary','text-white'); document.getElementById('btnPremier').classList.remove('bg-primary','text-white'); document.getElementById('btnPremier').classList.add('bg-surface','text-primary');" id="btnPromo" class="px-6 py-3 rounded-full font-bold bg-surface text-primary border border-primary/20 transition-colors">Promo Dates</button>
</div>

<div id="premierTab" class="tab-content active"><div class="mt-6 rounded-[2rem] bg-surface-container-low p-4 md:p-6"><div class="mb-5 text-center"><p class="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Premier Date 2026</p><h3 class="mt-2 font-headline text-2xl font-extrabold text-on-surface">Tarikh premier ikut CUTI 1 hingga CUTI 4</h3></div><div class="space-y-4 max-h-[720px] overflow-y-auto pr-2 pb-2 custom-scrollbar">
${makePremierGroupsHtml()}
</div></div></div>

<div id="promoTab" class="tab-content"><div class="mt-6 rounded-[2rem] bg-surface-container-low p-4 md:p-6"><div class="mb-5 text-center"><p class="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Tarikh Pelepasan 2026</p><h3 class="mt-2 font-headline text-2xl font-extrabold text-on-surface">Senarai tarikh pelepasan rasmi seperti PDF</h3></div><div class="mb-4 hidden rounded-2xl bg-white px-5 py-3 md:grid md:grid-cols-[1.15fr_1.15fr_1fr_1fr_1.5fr] md:gap-3"><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Berlepas</p><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Ketibaan</p><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Harga Asal</p><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Harga Promo</p><p class="text-[11px] font-bold uppercase tracking-[0.22em] text-zinc-500">Nota</p></div><div class="space-y-3 max-h-[720px] overflow-y-auto pr-2 pb-2 custom-scrollbar">
${makePromoRowsHtml()}
</div></div></div>

<div class="mt-8 border-t border-outline-variant/20 pt-8">
<h4 class="font-bold mb-4 text-primary">NUSA TRAVEL SDN BHD</h4>
<p class="text-sm font-semibold mb-2">MAYBANK: 5620 2162 9476</p>
<p class="text-sm text-gray-500 font-bold uppercase tracking-widest mb-6">MOTAC LICENSE 8693</p>

<h4 class="font-bold mb-4">Semua dah include:</h4>
<div class="grid grid-cols-2 gap-3">
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Tiket Penerbangan (Return)
                            </div>
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Penginapan 5 Malam 
                            </div>
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Makan Halal Sesuai Aturcara
                            </div>
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Tiket Masuk & Cable Car
                            </div>
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Tiket Kereta Api 2x
                            </div>
<div class="flex items-center gap-2 text-sm">
<span class="material-symbols-outlined text-green-600" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                                Tour Escort dari Malaysia
                            </div>
</div>
<div class="mt-6 p-4 bg-red-50 rounded-xl">
    <h4 class="font-bold text-red-700 text-sm mb-2">Harga Tidak Termasuk:</h4>
    <ul class="text-xs text-red-600 space-y-1">
        <li>✕ Insurans Perjalanan Peribadi</li>
        <li>✕ Tipping (RM100 seorang)</li>
        <li>✕ Optional Tour</li>
    </ul>
</div>
</div>
</div>
</div>
</div>
</section>

<!-- Booking Flow -->
<section class="bg-primary text-white py-24 px-6">
<div class="max-w-7xl mx-auto">
<h2 class="font-headline text-4xl font-extrabold mb-16 text-center">Cara booking simple:</h2>
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
<div class="text-center">
<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
<span class="text-2xl font-bold">1</span>
</div>
<h4 class="text-xl font-bold mb-2">Pilih Tarikh</h4>
<p class="text-white/70 text-sm">Check availability dengan team kami.</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
<span class="text-2xl font-bold">2</span>
</div>
<h4 class="text-xl font-bold mb-2">Hantar IC/Passport</h4>
<p class="text-white/70 text-sm">Screenshot or PDF je via WhatsApp.</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
<span class="text-2xl font-bold">3</span>
</div>
<h4 class="text-xl font-bold mb-2">Deposit RM1k</h4>
<p class="text-white/70 text-sm">Bayar deposit untuk lock seat kau.</p>
</div>
<div class="text-center">
<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
<span class="text-2xl font-bold">4</span>
</div>
<h4 class="text-xl font-bold mb-2">Confirm Slot</h4>
<p class="text-white/70 text-sm">Dapat receipt & invoice rasmi Nusa.</p>
</div>
</div>
</div>
</section>

<!-- Social Proof -->
<section class="py-24 px-6" id="gallery">
<div class="max-w-7xl mx-auto">
<h2 class="font-headline text-4xl font-extrabold mb-12">Trip sebenar Nusa Travel</h2>
<div class="columns-1 md:columns-3 gap-6 space-y-6">
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Traveler group" class="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcTU5SNXgBKbRYDTY171f1bbh1rOwqqb2UTq6oLGGuILWzeujRx58FwrcbC05ovVwa1WYWdHO5CQ-7sXlLh7BEPXil6QKeqaoetopdpIazD3mRPN2brLUuiGnD5y_HXIttjxuqpGD8jjq1cMFdMt1j9qN1GNP52KU_q-zaPXqC3CWIvnicVOW4Z38J9tgnli9bYGKoxs7QkGIZh1HkjFE8PqVIOrI8wp0_z7bYrFmt79aVUjSITq2yVNAzWe6ylONL9WgI4uvNVj8"/>
</div>
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Halal Food China" class="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBcLPlr0DRJBre5ejttODq3Ag9ugHnHYW1cSHMr5O_t2_t9ivZB4UiPf6qKcU-uHKFLla1O2oY4kgE6dCPWxxrY9lMAD8wieXzxPA53UKhT4NanM9pAuwQocu_8k-pObj1pJw4si2TJF2ACk0s_Q-dlC-VmTMPn7y7gtlpAS1uw9faNkar0okeCUW9wHUGp1G-5Z7pX-dQSRK38o_O9evt5GTI4nZx8igk720j0GpflYkdWpje21oHs7_NpJLpF0FqXnjOdV6TRgY"/>
</div>
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Bullet Train Experience" class="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbG9YUTr4OHWFOZZsYz_iXIvfVMHDLEQlT7iygPoIOD_PoyMLlrujjfgGuuRi2F8x4MJzyXivcB5By4QlqJq4PtM3uNjwzfx9hJxO5ViiJnDRJxtiHVPX_W-6Dh1NRaQwV2duxATMog2j1-N5_P6i-1ATnQJ9rxrgU1VVaofa-Xp0bkfpST2Ilcc_3iIY8Lzh4q0tG2Dbsy9Jdw_b02s9ffS7ort8u0ZzV2Dinn0K1TUYeDC_eLV7J3-iGLDD_xqK3WM99B6t8CR4"/>
</div>
<div class="rounded-2xl overflow-hidden shadow-sm">
<img alt="Yunnan Landscape" class="w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbaypgU0GqTLCL7Sbak95ptiadq0zme6KSy6nG5NqX27kWQebn8-xv_69BNnVw6m5cYU8JwrM5snSaqRLh2pYYy1nkPrvC3XSyN0Xhyp8bRyPzekPOqHFEhWh3sYXQ9V8Ryr5H92IQhyDaU5qdg1fcWq725C5umV1p125iNzc0TxscFTf97ij2v45eYwv0BxPGbeqxl5y47MP3g6dT8T0JYJDuxKIz1vKbG8wOoYXdaRIQ-npzvKTaAMDk9MJ_tAA0DOTdSLWKZ0I"/>
</div>
</div>
</div>
</section>

<!-- FAQ -->
<section class="bg-surface-container-low py-24 px-6" id="faq">
<div class="max-w-3xl mx-auto">
<h2 class="font-headline text-3xl font-extrabold mb-12 text-center">Soalan Yang Selalu Orang Tanya</h2>
<div class="space-y-4">
<details class="bg-white p-6 rounded-2xl group cursor-pointer border border-outline-variant/10">
<summary class="list-none flex justify-between items-center font-bold">
                        Makan betul ke Halal kat sana?
                        <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed">
                        Ya! Kita hanya pergi ke restoran yang ada sijil Halal atau dimiliki oleh komuniti Muslim Hui di China. Menu kita pelbagai, bukan sekadar mee tarik je.
                    </p>
</details>
<details class="bg-white p-6 rounded-2xl group cursor-pointer border border-outline-variant/10">
<summary class="list-none flex justify-between items-center font-bold">
                        Berapa orang satu group?
                        <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed">
                        Khas untuk keselesaan, kita limitkan satu group maximum 20-30 orang sahaja. Tak ramai sangat, tak sunyi sangat. Ngam-ngam!
                    </p>
</details>
<details class="bg-white p-6 rounded-2xl group cursor-pointer border border-outline-variant/10">
<summary class="list-none flex justify-between items-center font-bold">
                        Deposit RM1,000 tu boleh refund tak?
                        <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed">
                        Deposit digunakan untuk booking flight & hotel segera. Refund tertakluk kepada T&C, tapi kita boleh bincang untuk tukar tarikh atau cari ganti jika ada hal kecemasan.
                    </p>
</details>
</div>
</div>
</section>

<!-- Final CTA -->
<section class="py-24 px-6 relative overflow-hidden bg-zinc-950 text-white">
<div class="absolute inset-0 opacity-30">
<img alt="Background" class="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWIzsej2SwZMzpElnbVJDsW5yG9ve-xbiFNcMzq_jO0afldEH0aoU1FFaoSx_vhYNks0IBrMpS_e5r6ouwhfJXINtq_ofiI4zvvT6zqhXpU39HckVh_o4-m60xMFO9I0_cqN9YGhYA0WD_gY2fRh1DZbMSQTbrHujvSFCiEZLMlleArHX0rPY6cgRbP0euj4x05VoShUtaQf59AgBzqEMnkpcGXH1JzOtD5C9RGWlxphM8oFLdzqjrF8zZnDY20brsiVLQ5wqaoHY"/>
</div>
<div class="max-w-4xl mx-auto text-center relative z-10">
<h2 class="font-headline text-5xl md:text-6xl font-extrabold mb-8">Kalau kau serious nak pergi Yunnan tahun ni,</h2>
<p class="text-2xl font-bold text-primary italic mb-4">Jangan tunggu.</p>
<p class="text-xl mb-12 text-zinc-400">Seat limited setiap trip. Sekali penuh, kau kena tunggu tahun depan.</p>
<a href="https://wa.me/601111111111" class="inline-block bg-primary text-white px-12 py-5 rounded-full font-headline text-2xl font-extrabold editorial-shadow hover:scale-110 active:scale-95 transition-all">
                WhatsApp Sekarang
            </a>
</div>
</section>

<!-- Footer -->
<footer class="bg-zinc-50 dark:bg-zinc-900 w-full py-12 px-6">
<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
<div>
<span class="text-lg font-bold text-zinc-900 dark:text-white font-headline">NUSA TRAVEL</span>
<p class="text-zinc-500 dark:text-zinc-400 text-sm mt-2 font-manrope tracking-wide">© 2024 Nusa Travel Sdn Bhd. MOTAC 8693.</p>
</div>
<div class="flex flex-wrap gap-6 md:justify-end">
<a class="text-zinc-500 hover:text-red-500 transition-colors text-sm font-manrope" href="#">Privacy Policy</a>
<a class="text-zinc-500 hover:text-red-500 transition-colors text-sm font-manrope" href="#">Terms of Service</a>
<a class="text-zinc-500 hover:text-red-500 transition-colors text-sm font-manrope" href="#">Contact Us</a>
</div>
</div>
</footer>

<!-- BottomNavBar (Mobile) -->
<div class="fixed bottom-0 w-full z-50 md:hidden bg-white/90 dark:bg-zinc-900/90 backdrop-blur-lg border-t border-zinc-200/50 shadow-[0_-8px_32px_rgba(0,0,0,0.06)]">
<div class="flex justify-around items-center h-20 pb-safe px-4">
<a href="https://wa.me/601111111111" class="flex flex-col items-center justify-center text-zinc-500 active:bg-zinc-100">
<span class="material-symbols-outlined" data-icon="chat">chat</span>
<span class="font-manrope font-semibold text-[10px] uppercase tracking-widest mt-1">WhatsApp</span>
</a>
<a href="#pricing" class="flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 text-white px-8 py-3 rounded-xl font-headline font-bold text-sm shadow-lg active:scale-95">
                Book Now
            </a>
<a href="#pricing" class="flex flex-col items-center justify-center text-zinc-500 active:bg-zinc-100">
<span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
<span class="font-manrope font-semibold text-[10px] uppercase tracking-widest mt-1">Dates</span>
</a>
</div>
</div>

<!-- Floating WhatsApp (Desktop) -->
<a class="hidden md:flex fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-full items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform" href="https://wa.me/601111111111">
<svg class="w-8 h-8" fill="currentColor" viewbox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
</svg>
</a>
</body></html>`;
fs.writeFileSync(path.join(__dirname, '..', 'index.html'), html);
console.log('Done');
