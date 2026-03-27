const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Rewrite the Itinerary
const oldItineraryRegex = /<section class="bg-surface-container py-24 px-6" id="itinerary">[\s\S]*?<\/section>/;
const newItineraryHTML = `<section class="bg-surface-container py-24 px-6" id="itinerary">
<div class="max-w-4xl mx-auto">
<div class="text-center mb-16 px-4">
<h2 class="font-headline text-4xl font-extrabold mb-4">Aturcara Perjalanan (Padat & Berbaloi)</h2>
<p class="text-primary font-bold">Setiap hari mempunyai keistimewaan tersendiri. Tiada masa terbuang.</p>
</div>
<div class="space-y-6">

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 1</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">KUALA LUMPUR &mdash; KUNMING <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(MOB)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Berkumpul di Lapangan Terbang untuk urusan daftar masuk dan taklimat ringkas sebelum berlepas ke Kunming. Tiba di Lapangan Terbang Antarabangsa Kunming. Peserta di jemput oleh wakil kami disana dan dibawa terus ke hotel untuk berehat.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 2</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">KUNMING - WEISHAN - DALI <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(B/L/D)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Selepas sarapan pagi dan daftar keluar hotel, peserta bergerak menuju ke stesen keretapi laju untuk meneruskan perjalanan ke Dali. Kemudian makan tengahari di restoran tempatan dan ke Weishan Mosque. Seterusnya singgah melawat dan bergambar di Dali Erhai Lake Ecology Landscape Corridor yang merupakan sebuah tasik semula jadi dengan pemandangan yang sangat indah. Makan malam dan berehat di hotel.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 3</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">DALI - LIJIANG <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(B/L/D)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Selepas sarapan pagi, peserta dibawa ke Dali Lixiangbang, Mini Dali Santorini untuk bergambar, kawasan yang diinspirasikan oleh Santorini, Greece. Terletak di kawasan Dali, bandar yang terkenal dengan seni bina klasik, tasik indah dan warisan budaya etnik Bai. Lixiangbang ini bagaikan satu perkampungan ala Eropah. Makan tengah hari dan singgah di Nanmen Mosque, Dali Ancient City-Foreigners Street. Bergerak ke Lijiang untuk makan malam dan check in hotel.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow border-2 border-primary/30 relative">
<div class="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">Main Highlight</div>
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 4</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">LIJIANG <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(B/L/D)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Selepas sarapan pagi, peserta dibawa ke Jade Dragon Snow Mountain (termasuk kereta kabel). Salah satu tarikan alam semula jadi yang terkenal di Yunnan, China &mdash; terletak kira-kira 25 km dari Lijiang. Gunung ini landskapnya dramatik dan keindahan menakjubkan. Menyaksikan tarian langsung Impression of Lijiang. Makan tengah hari. Berkunjung ke White Water River dan Blue Moon Valley. Lawatan diteruskan ke Lijiang Mosque. Makan malam dan berehat di hotel.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 5</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">LIJIANG &mdash; KUNMING <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(B/L/D)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Selepas sarapan pagi dan daftar keluar hotel. Lawatan ke Black Dragon Pool yang merupakan sumber air dari Lijiang Old town, airnya jernih seperti jed. Makan tengahari dan menaiki keretapi ke Kunming. Singgah di Shuncheng Mosque (masjid pertama dibina awal 1425, ibu pejabat Persatuan Islam Yunnan). Seterusnya ke Green Lake Park untuk bergambar. Makan malam dan bermalam di hotel.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 6</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">KUNMING &mdash; KUALA LUMPUR <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(B/L/D)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Selepas sarapan pagi dan melawat Naigu Stone Forest (Keajaiban Pertama Dunia zaman Dinasti Ming). Shilin adalah lambang pelancongan Yunnan yang meliputi 400 km persegi. Seterusnya membeli belah di Nanping Pedestrian Street dan photostop di Kunming Old Street. Makan malam dan bertolak ke Lapangan Terbang.</p>
</div>
</div>
</div>

<div class="bg-surface-container-lowest p-6 sm:p-8 rounded-2xl editorial-shadow group hover:border-primary/50 transition-colors border border-transparent">
<div class="flex flex-col sm:flex-row gap-4 sm:gap-6">
<div class="bg-primary text-white font-headline px-5 py-3 rounded-xl font-bold flex-shrink-0 text-center h-min">HARI 7</div>
<div>
<h4 class="text-xl font-extrabold mb-2 text-on-surface">KUALA LUMPUR <span class="text-sm font-normal text-primary bg-primary/10 px-2 py-0.5 rounded-full ml-2">(MOB)</span></h4>
<p class="text-on-surface-variant leading-relaxed text-sm">Tiba di KLIA dengan sejuta kenangan indah di Wilayah Yunnan.</p>
</div>
</div>
</div>

</div>
</div>
</section>`;
html = html.replace(oldItineraryRegex, newItineraryHTML);

// 2. Fix the gallery (Trip Sebenar Nusa Travel)
// Injecting left/right arrows that will actually scroll the container smoothly on mobile
const oldGalleryRegex = /<section class="py-24" id="gallery">[\s\S]*?<\/section>/;
const newGalleryHTML = `<section class="py-24 bg-surface" id="gallery">
<div class="max-w-7xl mx-auto px-6 relative">
<div class="text-center mb-10">
<h2 class="font-headline text-4xl font-extrabold text-on-surface">Trip sebenar Nusa Travel</h2>
<p class="text-on-surface-variant mt-2 text-lg">Ribuan peserta telah berpuas hati dengan pengalaman ini.</p>
</div>

<div class="relative w-full overflow-hidden group">
    <!-- Navigation Buttons -->
    <button onclick="document.getElementById('galleryScroll').scrollBy({left: -350, behavior: 'smooth'})" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-xl text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-transform hover:scale-110 active:scale-95 opacity-80 md:opacity-0 group-hover:opacity-100 border border-primary/10">
        <span class="material-symbols-outlined font-bold">arrow_back_ios_new</span>
    </button>
    <button onclick="document.getElementById('galleryScroll').scrollBy({left: 350, behavior: 'smooth'})" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 shadow-xl text-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-transform hover:scale-110 active:scale-95 opacity-80 md:opacity-0 group-hover:opacity-100 border border-primary/10">
        <span class="material-symbols-outlined font-bold">arrow_forward_ios</span>
    </button>

    <div class="absolute left-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-8 md:w-24 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

    <div id="galleryScroll" class="flex overflow-x-auto gap-4 md:gap-6 px-4 md:px-24 snap-x snap-mandatory hide-scrollbar py-4">
        <div class="min-w-[85vw] md:min-w-[500px] snap-center rounded-[2rem] overflow-hidden shadow-xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
            <img alt="Traveler group 1" class="w-full h-[350px] md:h-[500px] object-cover" src="assets/images/trip_1.jpeg"/>
        </div>
        <div class="min-w-[85vw] md:min-w-[500px] snap-center rounded-[2rem] overflow-hidden shadow-xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
            <img alt="Traveler group 2" class="w-full h-[350px] md:h-[500px] object-cover" src="assets/images/trip_2.jpeg"/>
        </div>
        <div class="min-w-[85vw] md:min-w-[500px] snap-center rounded-[2rem] overflow-hidden shadow-xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
            <img alt="Traveler group 3" class="w-full h-[350px] md:h-[500px] object-cover" src="assets/images/trip_3.jpeg"/>
        </div>
        <div class="min-w-[85vw] md:min-w-[500px] snap-center rounded-[2rem] overflow-hidden shadow-xl shrink-0 transition-transform duration-500 hover:scale-[1.02]">
            <img alt="Traveler group 4" class="w-full h-[350px] md:h-[500px] object-cover" src="assets/images/trip_4.jpeg"/>
        </div>
    </div>
</div>
</div>
</section>`;
html = html.replace(oldGalleryRegex, newGalleryHTML);


fs.writeFileSync('index.html', html);
console.log('Update Phase 2 (Itinerary & Gallery) completed');
