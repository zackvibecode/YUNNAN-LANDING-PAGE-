const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const oldPolicyRegex = /<!-- Polisi Section Checklist Format -->[\s\S]*?<section class="py-16 bg-white" id="policy">[\s\S]*?<\/section>/;

const newFaqHTML = `<!-- Soalan Lazim (FAQ) & Polisi -->
    <section class="py-24 bg-white" id="faq">
        <div class="max-w-4xl mx-auto px-5">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-4">Soalan Lazim (FAQ) & Polisi</h2>
                <p class="text-gray-600 text-lg">Jawapan pantas mengenai terma, syarat, dan pembayaran Nusa Travel.</p>
            </div>
            
            <div class="space-y-4">
                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">1. Berapakah jumlah deposit dan adakah ia boleh dipulangkan?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white">
                        Deposit sebanyak <strong>RM 1,000 per pax</strong> diperlukan untuk setiap tempahan bagi mengesahkan tempat anda. Deposit ini adalah <strong>tidak boleh dikembalikan (non-refundable)</strong> sekiranya anda membatalkan trip atas sebab peribadi.
                    </div>
                </details>

                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">2. Bilakah bayaran penuh (Full Payment) perlu diselesaikan?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white text-sm md:text-base">
                        <ul class="space-y-2 list-disc pl-5">
                            <li><strong>50% dari harga pakej:</strong> Perlu diselesaikan 90 hari sebelum tarikh perjalanan.</li>
                            <li><strong>Bayaran penuh (100%):</strong> Wajib diselesaikan selewat-lewatnya 45 hari sebelum tarikh berlepas.</li>
                        </ul>
                        <p class="mt-3 text-brand-red text-xs italic">*Kelewatan dalam penyelesaian bayaran mungkin mengakibatkan pembatalan tempahan dengan tiada pemulangan deposit.</p>
                    </div>
                </details>

                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">3. Macam mana kalau saya nak batalkan percutian pada saat akhir?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white">
                        <p>Sebarang pembatalan perlulah dilakukan secara bertulis/emel rasmi. Jika pembatalan dibuat dalam masa <strong>kurang dari 15 hari</strong> sebelum bertolak, tiada sebarang pemulangan wang akan diberikan.</p>
                        <p class="mt-2">Tambahan, sekiranya tiket kapal terbang telah dicetak/dikeluarkan, <strong>tiada sebarang pemulangan tunai (refund)</strong> dibenarkan untuk harga tiket tersebut.</p>
                    </div>
                </details>

                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">4. Adakah pengecualian bayaran balik bagi masalah kesihatan kritikal?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white">
                        Ya. Bayaran pakej hanya akan dipertimbangkan untuk dipulangkan jika peserta tidak dapat hadir atas sebab <strong>kematian ahli keluarga terdekat atau alasan perubatan/kesihatan kritikal</strong>, dengan syarat wajib melampirkan laporan pengesahan rasmi dari doktor.
                    </div>
                </details>

                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">5. Adakah trip ini terjamin akan berlepas (Confirm Departure)?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white">
                        Nusa Travel mempunyai hak penuh membatalkan kumpulan perjalanan sekiranya kuota keseluruhan peserta kurang dari 15 orang. Sekiranya trip terpaksa dibatalkan di pihak syarikat, semua wang yang telah anda bayar akan dipulangkan sepenuhnya.
                    </div>
                </details>

                <details class="group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                    <summary class="flex justify-between items-center p-5 cursor-pointer font-bold text-brand-black hover:bg-gray-100">
                        <span class="text-left">6. Apa yang TIDAK termasuk di dalam harga pakej ini?</span>
                        <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180 shrink-0 ml-4">expand_content</span>
                    </summary>
                    <div class="p-5 pt-0 border-t border-gray-100 mt-2 text-gray-600 leading-relaxed bg-white">
                        <ul class="space-y-2 list-disc pl-5">
                            <li>Insurans Perjalanan Peribadi (Kami sangat menyarankan anda membelinya).</li>
                            <li>Perkhidmatan tambahan bilik hotel (bilik layanan, dobi, dan minibar).</li>
                            <li>Tipping untuk pemandu pelancong/pemandu bas (Kebarangkalian dalam lingkungan RM100/pax).</li>
                            <li>Perbelanjaan peribadi dan sebarangan lawatan pilihan di luar aturcara asal.</li>
                        </ul>
                    </div>
                </details>
            </div>
            
            <div class="mt-8 bg-brand-red/5 p-6 rounded-xl border border-brand-red/20 text-center">
                <p class="text-brand-black font-semibold text-sm">Peserta diwajibkan menyemak kesahihan Pasport Antarabangsa masing-masing supaya tempoh sah laku melebihi <span class="text-brand-red">6 Bulan</span> sebelum tarikh penerbangan.</p>
            </div>
        </div>
    </section>`;

if(html.match(oldPolicyRegex)) {
    html = html.replace(oldPolicyRegex, newFaqHTML);
    fs.writeFileSync('index.html', html);
    console.log('FAQ Section updated successfully.');
} else {
    console.log('Regex did not match. Please review the old HTML.');
}
