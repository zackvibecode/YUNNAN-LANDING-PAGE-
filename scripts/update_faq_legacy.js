const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<section[^>]*id="faq"[^>]*>[\s\S]*?<\/section>/i;

const newFaqHTML = `<!-- Soalan Lazim (FAQ) & Polisi -->
<section class="bg-surface py-24 px-6" id="faq">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-16">
<h2 class="font-headline text-4xl font-extrabold text-on-surface">Soalan Lazim (FAQ) / Terma & Syarat</h2>
<p class="mt-4 text-on-surface-variant text-lg">Maklumat penting mengenai tempahan dan polisi perjalanan Nusa Travel.</p>
</div>
<div class="space-y-4">

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Berapakah jumlah deposit dan adakah ia berstatus 'refundable'?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Setiap pelanggan dikehendaki membayar deposit <strong>RM 1,000 per pax</strong> untuk mengesahkan tempat atau *seat* tempahan. Deposit ini adalah tidak boleh dikembalikan (<strong>non-refundable</strong>).
</p>
</details>

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Bilakah tarikh patut menyelesaikan jumlah baki keseluruhan (Full Payment)?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Pelanggan mesti merancang untuk menyelesaikan sekurang-kurangnya <strong>50%</strong> dari jumlah harga pakej selewat-lewatnya <strong>90 hari</strong> sebelum tempoh beralih. Baki keseluruhan (100% Full Payment) perlulah dibuat selewat-lewatnya <strong>45 hari</strong> sebelum cuti bermula (tarikh penerbangan). Gagal mematuhi boleh menyebabkan pembatalan tempahan.
</p>
</details>

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Apa terjadi jika saya membatalkan penyertaan pada saat akhir?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Pembatalan hendaklah dilakukan secara emel/tulisan yang rasmi. Sebarang notis pembatalan di <strong>bawah tempoh 15 hari</strong> sebelum bertolak tidak akan ada sebarang pemulangan tunai.<br><br>Peringatan: Sekiranya tiket penerbangan anda telah dicetak/resmi (*issued*), <strong>tiada sebarang pemulangan wang untuk harga cip penerbangan</strong> akan diberikan walau apa pun kondisinya.
</p>
</details>

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Bagaimana pula dengan pembatalan atas faktor kesihatan?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Pengecualian polisi pemulangan tertakluk atas sebab kematian ahli keluarga terdekat atau anda mempunyai isu faktor perubatan/kesihatan kritikal di mana kami memerlukan <strong>surat laporan sah daripada doktor pakar/perubatan</strong>. Ia akan dipulangkan atas kelulusan pihak syarikat pengurusan.
</p>
</details>

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Adakah trip dijamin akan diteruskan ('Confirm Departure')?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Bagi kelancaran logistik, <strong>minima 15 orang</strong> pelancong diperlukan untuk satu jadual trip jalan raya diteruskan. Sekiranya tidak mencukupi, kumpulan lawatan tersebut boleh terbatal. Walau bagaimanapun, andai pembatalan berpunca sepenuhnya dari pihak syarikat kami, wang deposit/pembayaran akan ditebus balik secara telus.
</p>
</details>

<details class="w-full bg-surface-container-lowest p-6 rounded-2xl group cursor-pointer border border-outline-variant/10 text-center" style="border-left: 4px solid #F52D02;">
<summary class="list-none flex flex-col sm:flex-row sm:justify-between items-center font-bold">
    Maklumat yang TIDAK disertakan (Excluded) dalam harga pakej?
    <span class="material-symbols-outlined mt-2 sm:mt-0 group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<p class="mt-4 text-on-surface-variant text-sm leading-relaxed text-left">
    Sebarang kehendak atau perbelanjaan di luar kebiasaan aturcara adalah tanggungan sendiri, antaranya:<br>
    &bull; Perkhidmatan dobi hotel, bilik (*room service*) atau minibar peribadi.<br>
    &bull; Lawatan keliling pilihan rawak (*Optional tour*).<br>
    &bull; Tipping Tour Guide / Pemandu Bas Tempatan (Kadar tetap/anggaran +- RM100/pax yang disalur bayar terus kepada wakil di sana).<br>
    &bull; <strong>Insurans perlindungan perjalanan antarabangsa (*Personal Travel Insurance*)</strong>: Sangat disyorkan untuk anda membelinya lebih awal.
</p>
</details>

</div>
</div>
</section>`;

if(html.match(regex)) {
    html = html.replace(regex, newFaqHTML);
    fs.writeFileSync('index.html', html);
    console.log('FAQ Section updated successfully on legacy design.');
} else {
    console.log('Cannot find section with id="faq"');
}
