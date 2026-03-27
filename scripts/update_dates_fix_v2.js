const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const premierHTML = `<div id="premierTab" class="tab-content active transition-all duration-500">
    <div class="mt-8 max-w-4xl mx-auto space-y-4">
        
        <!-- CUTI 1 -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">CUTI 1</span>
                    <div>
                        <span class="block text-primary text-xl">Cuti Sekolah 1</span>
                        <div class="text-[12px] md:text-sm font-bold text-on-surface-variant flex gap-2 mt-1">
                            <span class="bg-surface-container-low px-2 py-1 rounded">MULA: 19 MAR 2026</span> 
                            <span class="bg-surface-container-low px-2 py-1 rounded">TAMAT: 29 MAR 2026</span>
                        </div>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div>
                            <div class="font-headline font-extrabold text-lg text-on-surface">25 MAR - 31 MAR</div>
                            <div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Raya Eid Fitri</div>
                        </div>
                        <div class="text-right">
                            <div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div>
                            <div class="text-xl font-extrabold text-primary">RM 4,790</div>
                        </div>
                    </a>
                </div>
            </div>
        </details>

        <!-- CUTI 2 -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">CUTI 2</span>
                    <div>
                        <span class="block text-primary text-xl">Cuti Sekolah 2</span>
                        <div class="text-[12px] md:text-sm font-bold text-on-surface-variant flex gap-2 mt-1 flex-wrap">
                            <span class="bg-surface-container-low px-2 py-1 rounded">MULA: 23 MAY 2026</span> 
                            <span class="bg-surface-container-low px-2 py-1 rounded">TAMAT: 07 JUN 2026</span>
                        </div>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">28 MEI - 03 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Raya Eid Adha</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">29 MEI - 04 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Raya Eid Adha</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">30 MEI - 05 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Raya Eid Adha</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">31 MEI - 06 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Raya Eid Adha</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">01 JUN - 07 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Available</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>

        <!-- CUTI 3 -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">CUTI 3</span>
                    <div>
                        <span class="block text-primary text-xl">Cuti Sekolah 3</span>
                        <div class="text-[12px] md:text-sm font-bold text-on-surface-variant flex gap-2 mt-1 flex-wrap">
                            <span class="bg-surface-container-low px-2 py-1 rounded">MULA: 29 AUG 2026</span> 
                            <span class="bg-surface-container-low px-2 py-1 rounded">TAMAT: 06 SEP 2026</span>
                        </div>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">28 AUG - 03 SEP</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">29 AUG - 04 SEP</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">30 AUG - 05 SEP</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">31 AUG - 06 SEP</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>

        <!-- CUTI 4 -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">CUTI 4</span>
                    <div>
                        <span class="block text-primary text-xl">Cuti Sekolah 4</span>
                        <div class="text-[12px] md:text-sm font-bold text-on-surface-variant flex gap-2 mt-1 flex-wrap">
                            <span class="bg-surface-container-low px-2 py-1 rounded">MULA: 05 DIS 2026</span> 
                            <span class="bg-surface-container-low px-2 py-1 rounded">TAMAT: 31 DIS 2026</span>
                        </div>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">04 DEC - 10 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">05 DEC - 11 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">10 DEC - 16 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">11 DEC - 17 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 DEC - 23 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">18 DEC - 24 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">19 DEC - 25 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 DEC - 29 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">24 DEC - 30 DEC</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>
    </div>
</div>`;

const promoHTML = `<div id="promoTab" class="tab-content transition-all duration-500">
    <div class="mt-8 max-w-4xl mx-auto space-y-4">
        
        <!-- WINTER & SPRING -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm text-center">WIN<br>SPR</span>
                    <div>
                        <span class="block text-primary text-xl">Musim Sejuk & Bunga</span>
                        <span class="block text-sm text-on-surface-variant mt-1">Februari hingga Mei 2026</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 FEB - 13 FEB</div><div class="text-[11px] font-bold text-blue-500 mt-1 uppercase tracking-wide">Winter</div></div>
                        <div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">02 APR - 08 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">09 APR - 14 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 APR - 22 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 APR - 23 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 APR - 28 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 APR - 29 APR</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 MEI - 13 MEI</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">08 MEI - 14 MEI</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">14 MEI - 20 MEI</div><div class="text-[11px] font-bold text-pink-500 mt-1 uppercase tracking-wide">Spring</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-primary/10 rounded-xl border-2 border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">15 MEI - 21 MEI</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Super Promo</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                </div>
            </div>
        </details>

        <!-- SUMMER -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">SUM</span>
                    <div>
                        <span class="block text-primary text-xl">Musim Panas (Summer)</span>
                        <span class="block text-sm text-on-surface-variant mt-1">Jun hingga September 2026</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-primary/10 rounded-xl border-2 border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">10 JUN - 16 JUN</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Super Promo</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 JUN - 22 JUN</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-primary/10 rounded-xl border-2 border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">03 JUL - 09 JUL</div><div class="text-[11px] font-bold text-primary mt-1 uppercase tracking-wide">Super Promo</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 JUL - 23 JUL</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">06 AUG - 12 AUG</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">13 AUG - 19 AUG</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 AUG - 28 AUG</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 SEP - 22 SEP</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">24 SEP - 30 SEP</div><div class="text-[11px] font-bold text-orange-500 mt-1 uppercase tracking-wide">Summer</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                </div>
            </div>
        </details>

        <!-- AUTUMN -->
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-14 h-14 flex items-center justify-center rounded-xl font-headline font-black text-sm">AUT</span>
                    <div>
                        <span class="block text-primary text-xl">Musim Luruh (Autumn)</span>
                        <span class="block text-sm text-on-surface-variant mt-1">Oktober hingga November 2026</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform duration-300 group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">09 OCT - 15 OCT</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 OCT - 22 OCT</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 OCT - 28 OCT</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 OCT - 29 OCT</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">06 NOV - 12 NOV</div><div class="text-[11px] font-bold text-purple-600 mt-1 uppercase tracking-wide">Deepavali</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 NOV - 13 NOV</div><div class="text-[11px] font-bold text-purple-600 mt-1 uppercase tracking-wide">Deepavali</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">19 NOV - 25 NOV</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">20 NOV - 26 NOV</div><div class="text-[11px] font-bold text-yellow-600 mt-1 uppercase tracking-wide">Autumn</div></div><div class="text-right"><div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,590</div><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                </div>
            </div>
        </details>

    </div>
</div>`;

const startIdx = html.indexOf('<div id="premierTab"');
const endMarker = '<div class="mt-8 border-t border-outline-variant/20 pt-8">';
const endIdx = html.indexOf(endMarker);

if (startIdx !== -1 && endIdx !== -1) {
    const before = html.substring(0, startIdx);
    const after = html.substring(endIdx);
    html = before + premierHTML + "\\n\\n" + promoHTML + "\\n\\n" + after;
    fs.writeFileSync('index.html', html);
    console.log('Update Phase 5 (Exact Replacement) completed without breaking layout.');
} else {
    console.log('Could not find the exact markers!');
}
