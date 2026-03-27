const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const premierHTML = `<div id="premierTab" class="tab-content active">
    <div class="mt-8 max-w-4xl mx-auto space-y-4">
        
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">MAR</span>
                    <div>
                        <span class="block text-primary">Cuti Penggal 1</span>
                        <span class="text-sm font-normal text-on-surface-variant">Raya Eid Fitri</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item mb-3">
                    <div>
                        <div class="font-headline font-extrabold text-lg text-on-surface">25 MAR - 31 MAR 2026</div>
                        <div class="text-sm text-green-600 font-bold tracking-widest uppercase mt-1">Available \u2022 7D5N</div>
                    </div>
                    <div class="text-right">
                        <div class="text-[11px] text-zinc-400 line-through font-bold">RM 4,890</div>
                        <div class="text-2xl font-extrabold text-primary">RM 4,790</div>
                        <div class="text-xs text-primary font-bold group-hover/item:underline mt-1">Tempah <span class="material-symbols-outlined text-[12px]">arrow_right_alt</span></div>
                    </div>
                </a>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">MEI</span>
                    <div>
                        <span class="block text-primary">Cuti Penggal 2</span>
                        <span class="text-sm font-normal text-on-surface-variant">Raya Eid Adha</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">28 MEI - 03 JUN 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available \u2022 7D5N</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">29 MEI - 04 JUN 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available \u2022 7D5N</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">30 MEI - 05 JUN 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available \u2022 7D5N</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">31 MEI - 06 JUN 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available \u2022 7D5N</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">01 JUN - 07 JUN 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available \u2022 7D5N</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">AUG</span>
                    <div>
                        <span class="block text-primary">Cuti Penggal 3</span>
                        <span class="text-sm font-normal text-on-surface-variant">Ogos - September</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">28 AUG - 03 SEP 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">29 AUG - 04 SEP 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">30 AUG - 05 SEP 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">31 AUG - 06 SEP 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">DEC</span>
                    <div>
                        <span class="block text-primary">Cuti Penggal 4</span>
                        <span class="text-sm font-normal text-on-surface-variant">Disember Percutian Hujung Tahun</span>
                    </div>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">04 DEC - 10 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">05 DEC - 11 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">10 DEC - 16 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">11 DEC - 17 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 DEC - 23 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">18 DEC - 24 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">19 DEC - 25 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 DEC - 29 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">24 DEC - 30 DEC 2026</div><div class="text-xs text-green-600 font-bold uppercase mt-1">Available</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,790</div></div>
                    </a>
                </div>
            </div>
        </details>
    </div>
</div>`;

const promoHTML = `<div id="promoTab" class="tab-content">
    <div class="mt-8 max-w-4xl mx-auto space-y-4">
        
        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">WIN</span>
                    <span class="block text-primary">Musim Winter</span>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 FEB - 13 FEB 2026</div></div>
                        <div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                </div>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">SPR</span>
                    <span class="block text-primary">Musim Spring</span>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">02 APR - 08 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">09 APR - 14 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 APR - 22 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 APR - 23 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 APR - 28 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 APR - 29 APR 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 MEI - 13 MEI 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">08 MEI - 14 MEI 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">14 MEI - 20 MEI 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item shadow-primary/20 bg-primary/5">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">15 MEI - 21 MEI 2026</div><div class="text-xs text-primary font-bold uppercase mt-1">Special Promo</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                </div>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">SUM</span>
                    <span class="block text-primary">Musim Summer</span>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item shadow-primary/20 bg-primary/5">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">10 JUN - 16 JUN 2026</div><div class="text-xs text-primary font-bold uppercase mt-1">Special Promo</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item shadow-primary/20 bg-primary/5">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">03 JUL - 09 JUL 2026</div><div class="text-xs text-primary font-bold uppercase mt-1">Special Promo</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,190</div></div>
                    </a>
                    
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 JUN - 22 JUN 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">17 JUL - 23 JUL 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">06 AUG - 12 AUG 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">13 AUG - 19 AUG 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 AUG - 28 AUG 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 SEP - 22 SEP 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">24 SEP - 30 SEP 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                </div>
            </div>
        </details>

        <details class="group bg-surface-container-lowest border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors shadow-sm">
            <summary class="list-none flex justify-between items-center p-6 cursor-pointer font-extrabold text-xl text-on-surface select-none">
                <div class="flex items-center gap-4">
                    <span class="bg-primary/10 text-primary w-12 h-12 flex items-center justify-center rounded-xl font-headline tracking-tighter text-sm">AUT</span>
                    <span class="block text-primary">Musim Autumn</span>
                </div>
                <span class="material-symbols-outlined text-primary transition-transform group-open:rotate-180 text-3xl">expand_circle_down</span>
            </summary>
            <div class="p-6 pt-0 bg-surface-container-lowest">
                <div class="w-full bg-surface-container-low h-[1px] mb-6"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">09 OCT - 15 OCT 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">16 OCT - 22 OCT 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">22 OCT - 28 OCT 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">23 OCT - 29 OCT 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">06 NOV - 12 NOV 2026</div><div class="text-xs font-bold text-orange-500 uppercase mt-1">Deepavali</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">07 NOV - 13 NOV 2026</div><div class="text-xs font-bold text-orange-500 uppercase mt-1">Deepavali</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">19 NOV - 25 NOV 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                    <a href="https://wa.me/601255001601" class="flex justify-between items-center p-5 bg-white rounded-xl border border-outline-variant/20 hover:border-primary hover:shadow-md transition-all group/item">
                        <div><div class="font-headline font-extrabold text-lg text-on-surface">20 NOV - 26 NOV 2026</div></div><div class="text-right"><div class="text-xl font-extrabold text-primary">RM 4,490</div></div>
                    </a>
                </div>
            </div>
        </details>

    </div>
</div>`;

const premierRegex = /<div id="premierTab" class="tab-content active">[\s\S]*?<\/div><\/div><\/div>/;
const promoRegex = /<div id="promoTab" class="tab-content">[\s\S]*?<\/div><\/div><\/div>/;

if(html.match(premierRegex)) {
    html = html.replace(premierRegex, premierHTML);
}
if(html.match(promoRegex)) {
    html = html.replace(promoRegex, promoHTML);
}

fs.writeFileSync('index.html', html);
console.log('Update Phase 3 (Pricing Dates) completed');
