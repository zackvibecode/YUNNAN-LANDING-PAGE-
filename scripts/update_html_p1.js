const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Fix WhatsApp numbers
html = html.replace(/601111111111/g, '601255001601');

// Fix Navbar Logo
html = html.replace(
  '<img src="assets/images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-10 w-auto" />',
  '<div class="flex items-center gap-3"><img src="assets/images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-10 w-auto" /><span class="font-headline font-bold text-xl text-primary tracking-tight">Nusa Travel</span></div>'
);

// Fix Hero
html = html.replace(
  'Percutian Yunnan 7 Hari Semua Termasuk &mdash; <span class="text-primary italic">Anda Hanya Perlu Hadir & Nikmati.</span>',
  'Terokai Keajaiban Bumi Yunnan &mdash; <span class="text-primary italic">Pakej Lengkap 7 Hari 5 Malam.</span>'
);

// Fix "Lebih Daripada Sekadar Destinasi..."
html = html.replace(
  'Sebuah himpunan memori kemegahan alam yang tidak dapat dilupakan.',
  'Saksikan keindahan alam semula jadi ciptaan Tuhan yang memukau pandangan dan menjanjikan pengalaman percutian yang sukar dilupakan.'
);

// Fix Included/Excluded
html = html.replace(
  '<div class="mt-8 p-5 bg-primary/5 rounded-xl text-center flex flex-col items-center">\n    <h4 class="font-bold text-primary-container text-sm mb-3">Harga Tidak Termasuk:</h4>\n    <ul class="text-xs text-primary space-y-2 list-none">\n        <li>&bull; Insurans Perjalanan Peribadi</li>\n        <li>&bull; Caj Tipping Pembantu Tempatan (RM100/pax)</li>\n        <li>&bull; Lawatan Pilihan (Optional Tour)</li>\n    </ul>\n</div>',
  `<div class="mt-8 p-6 bg-surface-container-low border border-outline-variant/30 rounded-2xl w-full">
    <h4 class="font-bold text-on-surface-variant text-lg mb-4 text-center">Harga Tidak Termasuk:</h4>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
        <div class="flex items-center justify-center sm:justify-start gap-2 text-sm text-center sm:text-left text-on-surface-variant">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">cancel</span>
            Insurans Perjalanan Peribadi
        </div>
        <div class="flex items-center justify-center sm:justify-start gap-2 text-sm text-center sm:text-left text-on-surface-variant">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">cancel</span>
            Caj Tipping (RM100/pax)
        </div>
        <div class="flex items-center justify-center sm:justify-start gap-2 text-sm text-center sm:text-left text-on-surface-variant">
            <span class="material-symbols-outlined text-primary" style="font-variation-settings: 'FILL' 1;">cancel</span>
            Lawatan Pilihan (Optional Tour)
        </div>
    </div>
</div>`
);

// Fix Policy layout
let currentPolicy = `<section class="bg-white py-24 px-6" id="policy">
<div class="max-w-6xl mx-auto">
<div class="text-center mb-12">
<span class="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Policy Nusa</span>
<h2 class="mt-4 font-headline text-4xl font-extrabold text-on-surface">Polisi & Terma Pelanggan</h2>
<p class="mx-auto mt-4 max-w-3xl text-base text-on-surface-variant md:text-lg">Sorotan ringkas berdasarkan PDF Terma dan Syarat bagi memudahkan penelitian perkhidmatan kami.</p>
</div>
<div class="grid gap-6 lg:grid-cols-3">
<div class="rounded-[2rem] border border-outline-variant/20 bg-surface-container-low p-6 editorial-shadow flex flex-col items-center text-center">
<p class="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Pembayaran</p>
<h3 class="mt-3 font-headline text-2xl font-extrabold">Transaksi & Baki</h3>
<ul class="mt-4 space-y-3 text-sm leading-6 text-on-surface-variant list-none">
<li>&bull; Deposit RM1,000 setiap peserta (Tidak boleh dikembalikan).</li>
<li>&bull; 50% bayaran dijelaskan 90 hari sebelum penerbangan.</li>
<li>&bull; Pembayaran penuh selewatnya 45 hari sebelum bertolak.</li>
<li>&bull; Kelewatan mungkin menyebabkan pembatalan sedia ada.</li>
</ul>
</div>
<div class="rounded-[2rem] border border-outline-variant/20 bg-surface-container-low p-6 editorial-shadow flex flex-col items-center text-center">
<p class="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Pembatalan</p>
<h3 class="mt-3 font-headline text-2xl font-extrabold">Polisi Semasa</h3>
<ul class="mt-4 space-y-3 text-sm leading-6 text-on-surface-variant list-none">
<li>&bull; Segala pembatalan perlukan notis emel/bertulis rasmi.</li>
<li>&bull; Jika tiket pesawat sudah dicetak, tiada pemulangan tunai.</li>
<li>&bull; Pengecualian hanya untuk kematian/perubatan berdokumen.</li>
<li>&bull; Tiada refund jika notis di bawah 15 hari dari tarikh.</li>
</ul>
</div>
<div class="rounded-[2rem] border border-outline-variant/20 bg-surface-container-low p-6 editorial-shadow flex flex-col items-center text-center">
<p class="text-[11px] font-bold uppercase tracking-[0.24em] text-primary">Maklumat Lanjut</p>
<h3 class="mt-3 font-headline text-2xl font-extrabold">Tersirat & Terancang</h3>
<ul class="mt-4 space-y-3 text-sm leading-6 text-on-surface-variant list-none">
<li>&bull; Nilai tertakluk kepada perubahan pasaran semasa (Cuti Umum).</li>
<li>&bull; Syarikat berhak mengubah jadual sekiranya kecemasan.</li>
<li>&bull; Peserta mesti sah memiliki pasport melebihi waktu 6 bulan.</li>
<li>&bull; Trip akan dibatalkan dengan pulangan jika peserta kurang 15 pax.</li>
</ul>
</div>
</div>
</div>
</section>`;

let newPolicy = `<section class="bg-surface py-24 px-6" id="policy">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-12">
<span class="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">Maklumat Penting</span>
<h2 class="mt-4 font-headline text-4xl font-extrabold text-on-surface">Polisi & Terma Pelanggan</h2>
</div>
<div class="space-y-4">
    <div class="bg-white p-6 rounded-2xl editorial-shadow border border-outline-variant/10">
        <h3 class="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2"><span class="material-symbols-outlined">payments</span>Polisi Pembayaran</h3>
        <ul class="space-y-2 text-sm text-on-surface-variant">
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Deposit RM1,000 setiap peserta (Tidak boleh dikembalikan / Non-refundable).</li>
            <li class="flex gap-3"><span class="text-primary">&bull;</span> 50% bayaran harus dijelaskan 90 hari sebelum penerbangan.</li>
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Pembayaran penuh wajib selewat-lewatnya 45 hari sebelum bertolak.</li>
        </ul>
    </div>
    <div class="bg-white p-6 rounded-2xl editorial-shadow border border-outline-variant/10">
        <h3 class="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2"><span class="material-symbols-outlined">event_busy</span>Polisi Pembatalan</h3>
        <ul class="space-y-2 text-sm text-on-surface-variant">
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Segala permohonan pembatalan haruslah melalui notis emel/bertulis rasmi.</li>
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Sekiranya tiket penerbangan sudah dicetak, tiada sebarang pemulangan tunai dibenarkan.</li>
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Pengecualian hanya dipertimbangkan untuk kematian/perubatan berdokumen.</li>
        </ul>
    </div>
    <div class="bg-white p-6 rounded-2xl editorial-shadow border border-outline-variant/10">
        <h3 class="font-headline text-lg font-bold text-primary mb-3 flex items-center gap-2"><span class="material-symbols-outlined">info</span>Maklumat Tambahan</h3>
        <ul class="space-y-2 text-sm text-on-surface-variant">
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Peserta mesti memastikan pasport sah melebihi 6 bulan dari tarikh kepulangan.</li>
            <li class="flex gap-3"><span class="text-primary">&bull;</span> Syarikat berhak mengubah spesifikasi atur cara berdasarkan situasi semasa atau kecemasan.</li>
        </ul>
    </div>
</div>
</div>
</section>`;
html = html.replace(currentPolicy, newPolicy);

// Update FAQ animation CSS
html = html.replace('</style>', '  details > summary { list-style: none; } details summary::-webkit-details-marker { display:none; } details[open] summary ~ * { animation: fadeInDown 0.3s ease-in-out; } @keyframes fadeInDown { 0% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 1; transform: translateY(0); } }\n</style>');

// Write back
fs.writeFileSync('index.html', html);
console.log('Update Phase 1 completed');
