const fs = require('fs');

const html = `<!DOCTYPE html>
<html lang="ms" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Pakej Percutian Yunnan Lengkap - Nusa Travel</title>
    
    <!-- Meta SEO -->
    <meta name="description" content="Pakej percutian Yunnan 7 Hari 5 Malam premium. Makanan halal terjamin, tiket penerbangan disediakan. Nikmati pengalaman ke Lijiang dan Dali tanpa pening kepala.">
    
    <!-- Google Fonts: Montserrat -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    
    <!-- Material Symbols -->
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />

    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Montserrat', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            red: '#E53935',
                            redDark: '#C62828',
                            black: '#111111',
                            gray: '#F5F5F5',
                            text: '#333333',
                            light: '#FAFAFA'
                        },
                        whatsapp: '#25D366'
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Clean Details Accordion */
        details > summary { list-style: none; }
        details summary::-webkit-details-marker { display:none; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        /* Smooth Fade In */
        details[open] summary ~ * { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="bg-brand-light text-brand-text font-sans antialiased selection:bg-brand-red selection:text-white pb-24">

    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div class="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
            <div class="flex items-center gap-3">
                <img src="assets/images/LogoNusa[3]-01.png" alt="Nusa Travel Logo" class="h-8 md:h-10 w-auto" />
                <span class="font-extrabold text-xl md:text-2xl text-brand-black tracking-tight">Nusa Travel</span>
            </div>
            <a href="#packages" class="hidden md:inline-flex bg-brand-black text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-brand-red transition-colors">
                Lihat Pakej
            </a>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="pt-32 pb-16 md:pt-40 md:pb-24 px-5">
        <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 text-brand-red text-xs font-bold mb-6 tracking-wide uppercase">
                <span class="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
                Pakej Premium 2026 Kini Dibuka
            </div>
            
            <h1 class="text-4xl md:text-6xl font-black text-brand-black leading-[1.15] mb-6 tracking-tight">
                Terokai Keajaiban Yunnan <span class="text-brand-red block md:inline">Tanpa Pening Kepala.</span>
            </h1>
            
            <p class="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                Pakej 7 Hari 5 Malam premium yang diuruskan sepenuhnya. Dari tiket penerbangan, hotel bertaraf 4-bintang sehinggalah makanan halal terjamin. Anda hanya perlu bawa diri dan cipta memori.
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#packages" class="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-red/30 hover:bg-brand-redDark transition-all hover:-translate-y-1">
                    Semak Jadual & Harga
                </a>
                <a href="#itinerary" class="w-full sm:w-auto bg-white text-brand-black border-2 border-brand-black px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-black hover:text-white transition-all">
                    Lihat Aturcara
                </a>
            </div>
        </div>
    </section>

    <!-- Big Image / Video visual -->
    <section class="px-5 mb-24 cursor-pointer" onclick="document.getElementById('gallery').scrollIntoView({behavior: 'smooth'})">
        <div class="max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl relative group h-[400px] md:h-[600px]">
            <img src="assets/images/trip_1.jpeg" alt="Pemandangan Yunnan" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8 md:p-12">
                <div class="text-white">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="material-symbols-outlined text-brand-red">location_on</span>
                        <span class="font-bold tracking-widest text-sm uppercase">Jade Dragon Snow Mountain</span>
                    </div>
                    <h3 class="text-2xl md:text-4xl font-bold">Pengalaman Bernilai Seumur Hidup.</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- Value Proposition (Experience & Convenience) -->
    <section class="py-16 bg-white" id="value">
        <div class="max-w-7xl mx-auto px-5">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-4">Kenapa Nusa Travel?</h2>
                <p class="text-gray-600 text-lg">Setiap perjalanan direka untuk ketenangan dan keselesaan anda.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 md:gap-12">
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-brand-red/10 text-brand-red flex items-center justify-center rounded-2xl mb-6">
                        <span class="material-symbols-outlined text-3xl">verified_user</span>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Diuruskan A-Z</h3>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Pengurusan tiket penerbangan, visa (jika perlu), dan logistik semuanya ditanggung beres. Tiada kos tersembunyi yang mengejut.</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-brand-red/10 text-brand-red flex items-center justify-center rounded-2xl mb-6">
                        <span class="material-symbols-outlined text-3xl">restaurant</span>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">100% Makanan Halal</h3>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Keutamaan kami. Nikmati hidangan tempatan dan antarabangsa tanpa was-was di restoran halal tersaring sepanjang rombongan.</p>
                </div>
                
                <div class="text-center">
                    <div class="w-16 h-16 mx-auto bg-brand-red/10 text-brand-red flex items-center justify-center rounded-2xl mb-6">
                        <span class="material-symbols-outlined text-3xl">train</span>
                    </div>
                    <h3 class="text-xl font-bold text-brand-black mb-3">Pengangkutan Selesa</h3>
                    <p class="text-gray-600 leading-relaxed text-sm md:text-base">Bergerak melintasi daerah di Yunnan menggunakan Kereta Api Laju (Bullet Train) dan bas persiaran VIP persendirian.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Packages / Pricing Section (Clean Grouped Layout) -->
    <section class="py-24 bg-brand-gray" id="packages">
        <div class="max-w-4xl mx-auto px-5">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-4">Jadual Trip & Pelaburan Anda</h2>
                <p class="text-gray-600 text-lg">Pilih tarikh yang sesuai untuk anda. Sesuai untuk percutian keluarga atau bawa pasangan.</p>
            </div>

            <!-- Notice Pricing Info -->
            <div class="bg-white border-l-4 border-brand-red p-6 rounded-xl mb-12 shadow-sm flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                <div class="bg-brand-red/10 p-3 rounded-full text-brand-red shrink-0">
                    <span class="material-symbols-outlined">info</span>
                </div>
                <div>
                    <h4 class="font-bold text-brand-black text-lg mb-2">Maklumat Harga Semasa</h4>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">Harga tertera adalah <strong>sah per individu (PAX)</strong>. Terdapat dua jenis tarikh iaitu tarikh Promo (RM4,190 - RM4,490) dan tarikh Premium Cuti Sekolah (RM4,790).</p>
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 font-bold rounded-md">Tiket Penerbangan Termasuk</span>
                        <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 font-bold rounded-md">Hotel 4 Bintang</span>
                        <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 font-bold rounded-md">Tiket Masuk Tersedia</span>
                    </div>
                </div>
            </div>

            <div class="space-y-4">
                
                <!-- Package Group: Promo -->
                <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div class="bg-brand-black text-white px-6 py-4 flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-lg">Pakej Tarikh Promo</h3>
                            <p class="text-gray-400 text-xs mt-1">Sesuai untuk percutian tenang di luar waktu puncak</p>
                        </div>
                        <span class="bg-white/20 px-3 py-1 rounded text-sm font-bold">TERLAJAK MURAH</span>
                    </div>

                    <div class="p-6">
                        <h4 class="text-sm font-bold text-brand-red uppercase tracking-wider mb-4 border-b pb-2">Musim Spring & Summer (Paling Laris)</h4>
                        <div class="space-y-3">
                            <!-- Clean Single Line Layouts -->
                            <div class="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-gray-50 rounded-xl hover:bg-brand-red/5 transition-colors group">
                                <div class="mb-2 sm:mb-0">
                                    <h5 class="font-bold text-brand-black text-lg">15 Mei - 21 Mei</h5>
                                    <p class="text-gray-500 text-sm">7 Hari 5 Malam \u2022 Trip Edisi Khas</p>
                                </div>
                                <div class="text-left sm:text-right">
                                    <div class="text-2xl font-black text-brand-red">RM 4,190<span class="text-sm font-medium text-gray-500">/pax</span></div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-gray-50 rounded-xl hover:bg-brand-red/5 transition-colors group">
                                <div class="mb-2 sm:mb-0">
                                    <h5 class="font-bold text-brand-black text-lg">10 Jun - 16 Jun</h5>
                                    <p class="text-gray-500 text-sm">7 Hari 5 Malam \u2022 Cuaca Nyaman</p>
                                </div>
                                <div class="text-left sm:text-right">
                                    <div class="text-2xl font-black text-brand-red">RM 4,190<span class="text-sm font-medium text-gray-500">/pax</span></div>
                                </div>
                            </div>
                            <div class="flex flex-col sm:flex-row justify-between sm:items-center p-4 bg-gray-50 rounded-xl hover:bg-brand-red/5 transition-colors group">
                                <div class="mb-2 sm:mb-0">
                                    <h5 class="font-bold text-brand-black text-lg">03 Jul - 09 Jul</h5>
                                    <p class="text-gray-500 text-sm">7 Hari 5 Malam \u2022 Pilihan Terbaik</p>
                                </div>
                                <div class="text-left sm:text-right">
                                    <div class="text-2xl font-black text-brand-red">RM 4,190<span class="text-sm font-medium text-gray-500">/pax</span></div>
                                </div>
                            </div>
                        </div>

                        <h4 class="text-sm font-bold text-brand-black uppercase tracking-wider mt-8 mb-4 border-b pb-2">Jadual Promo Biasa (Winter / Autumn / dll)</h4>
                        <div class="grid sm:grid-cols-2 gap-3">
                            <div class="flex justify-between items-center p-4 border border-gray-100 rounded-xl">
                                <div><div class="font-bold text-brand-black text-[15px]">07 Feb - 13 Feb</div></div>
                                <div class="font-black text-brand-black">RM 4,490</div>
                            </div>
                            <div class="flex justify-between items-center p-4 border border-gray-100 rounded-xl">
                                <div><div class="font-bold text-brand-black text-[15px]">16 Apr - 22 Apr</div></div>
                                <div class="font-black text-brand-black">RM 4,490</div>
                            </div>
                            <div class="flex justify-between items-center p-4 border border-gray-100 rounded-xl">
                                <div><div class="font-bold text-brand-black text-[15px]">16 Jun - 22 Jun</div></div>
                                <div class="font-black text-brand-black">RM 4,490</div>
                            </div>
                            <div class="flex justify-between items-center p-4 border border-gray-100 rounded-xl">
                                <div><div class="font-bold text-brand-black text-[15px]">16 Sep - 22 Sep</div></div>
                                <div class="font-black text-brand-black">RM 4,490</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Package Group: Premium Cuti Sekolah -->
                <div class="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div class="bg-brand-red text-white px-6 py-4 flex justify-between items-center">
                        <div>
                            <h3 class="font-bold text-lg">Pakej Premier (Cuti Sekolah)</h3>
                            <p class="text-brand-red/20 text-white/80 text-xs mt-1">Khas untuk guru dan ibu bapa bercuti bersama keluarga</p>
                        </div>
                    </div>

                    <div class="p-6">
                        <div class="space-y-4">
                            <!-- Accordion Style for Cuti Sekolah -->
                            <details class="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                                <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-brand-black hover:bg-gray-50">
                                    <div class="flex flex-col">
                                        <span>Cuti Penggal 1 & 2 (Raya Puasa / Raya Haji)</span>
                                    </div>
                                    <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div class="p-4 pt-0 border-t border-gray-100 mt-2 bg-gray-50">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">25 Mac - 31 Mac</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">28 Mei - 03 Jun</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">31 Mei - 06 Jun</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <details class="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                                <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-brand-black hover:bg-gray-50">
                                    <div class="flex flex-col">
                                        <span>Cuti Penggal 3 (Ogos - September)</span>
                                    </div>
                                    <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div class="p-4 pt-0 border-t border-gray-100 mt-2 bg-gray-50">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">28 Ogo - 03 Sep</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">31 Ogo - 06 Sep</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                    </div>
                                </div>
                            </details>

                            <details class="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                                <summary class="flex justify-between items-center p-4 cursor-pointer font-bold text-brand-black hover:bg-gray-50">
                                    <div class="flex flex-col">
                                        <span>Cuti Penggal 4 (Disember Hujung Tahun)</span>
                                    </div>
                                    <span class="material-symbols-outlined text-brand-red transition-transform group-open:rotate-180">expand_more</span>
                                </summary>
                                <div class="p-4 pt-0 border-t border-gray-100 mt-2 bg-gray-50">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                        <!-- Special Early Dec -->
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-brand-red/30">
                                            <span class="font-semibold text-sm">04 Dis - 10 Dis</span>
                                            <span class="font-bold text-brand-red">RM 4,490 <span class="text-xs font-normal text-gray-400">Promo</span></span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">05 Dis - 11 Dis</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">18 Dis - 24 Dis</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                        <div class="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-100">
                                            <span class="font-semibold text-sm">24 Dis - 30 Dis</span>
                                            <span class="font-bold text-brand-red">RM 4,790</span>
                                        </div>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>

            </div>
            
            <div class="mt-10 text-center">
                <p class="text-sm text-gray-500 italic mb-4">*Tempat duduk penerbangan amat terhad untuk tatikh Cuti Sekolah. Tempah segera sebelum tiket penuh.</p>
                <a href="https://wa.me/601255001601" class="inline-flex items-center justify-center gap-2 bg-whatsapp text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-whatsapp/30 hover:bg-green-600 transition-all hover:scale-105 active:scale-95">
                    <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.563 0 5.827-4.738 10.565-10.564 10.565z"/></svg>
                    Semak Kekosongan Tarikh
                </a>
            </div>
        </div>
    </section>

    <!-- Itinerary Clean Minimal -->
    <section class="py-24 bg-white" id="itinerary">
        <div class="max-w-4xl mx-auto px-5">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-4">Aturcara Perjalanan (Padat & Berbaloi)</h2>
                <p class="text-gray-600 text-lg">Setiap hari mempunyai keistimewaan tersendiri. Tiada masa terbuang.</p>
            </div>

            <div class="space-y-6">
                <!-- Day 1 -->
                <div class="flex flex-col md:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl">
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 1</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">KUALA LUMPUR &mdash; KUNMING</h4>
                        <p class="text-gray-600 leading-relaxed">Berkumpul di Lapangan Terbang Antarabangsa KL untuk urusan daftar masuk dan taklimat ringkas sebelum berlepas. Tiba di Kunming, peserta dijemput oleh wakil kami dan dibawa terus ke hotel bertaraf 4-bintang untuk berehat.</p>
                    </div>
                </div>

                <!-- Day 2 -->
                <div class="flex flex-col md:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl">
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 2</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">KUNMING &mdash; WEISHAN &mdash; DALI</h4>
                        <p class="text-gray-600 leading-relaxed">Merentasi bandar menggunakan <strong>Kereta Api Laju (Bullet Train)</strong> menuju ke Dali. Singgah di Weishan Mosque untuk lawatan, kemudian berehat santai sambil bergambar di Dali Erhai Lake Ecology Landscape Corridor. Check-in hotel di Dali.</p>
                    </div>
                </div>

                <!-- Day 3 -->
                <div class="flex flex-col md:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl">
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 3</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">DALI &mdash; LIJIANG</h4>
                        <p class="text-gray-600 leading-relaxed">Bergambar di latar belakangan ala-Eropah di <strong>Mini Dali Santorini (Lixiangbang)</strong>. Melawat Nanmen Mosque dan syurga membeli belah di <em>Foreigners Street</em> Dali Ancient City. Bertolak menuju Lijiang.</p>
                    </div>
                </div>

                <!-- Day 4 Highlight -->
                <div class="flex flex-col md:flex-row gap-6 bg-brand-red/5 border-2 border-brand-red p-6 md:p-8 rounded-2xl relative">
                    <div class="absolute -top-3 right-6 bg-brand-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">Highlight Utama</div>
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-red text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 4</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">LIJIANG (Gunung Salji)</h4>
                        <p class="text-gray-600 leading-relaxed">Naik kereta kabel menakjubkan di <strong>Jade Dragon Snow Mountain</strong>. Menyaksikan tarian kolosal <em>Impression of Lijiang</em> yang berlatar belakangkan gunung bersalji sebenar. Kemudian menelusuri birunya air di White Water River & Blue Moon Valley.</p>
                    </div>
                </div>

                <!-- Day 5 -->
                <div class="flex flex-col md:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl">
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 5</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">LIJIANG &mdash; KUNMING</h4>
                        <p class="text-gray-600 leading-relaxed">Menghirup udara segar di Black Dragon Pool, kolam sebening jed asli. Menaiki semula Kereta Api menuju ke kota metropolitan Kunming. Melawat Shuncheng Mosque (Masjid Dinasti Ming) dan Green Lake Park.</p>
                    </div>
                </div>

                <!-- Day 6 -->
                <div class="flex flex-col md:flex-row gap-6 bg-gray-50 border border-gray-100 p-6 md:p-8 rounded-2xl">
                    <div class="md:w-32 shrink-0">
                        <span class="bg-brand-black text-white px-4 py-2 rounded-lg font-bold text-sm tracking-wider">HARI 6</span>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-brand-black mb-3">KUNMING &mdash; KLIA</h4>
                        <p class="text-gray-600 leading-relaxed">Saksikan keajaiban alam di <strong>Naigu Stone Forest</strong> (Hutan Batu semulajadi dari zaman purba). Acara bebas berbelanja cenderamata di Nanping Pedestrian Street & Kunming Old Street sebelum menuju lapangan terbang pulang ke tanah air.</p>
                    </div>
                </div>
            </div>
            
        </div>
    </section>

    <!-- Gallery / Trip Sebenar -->
    <section class="py-24 bg-brand-gray" id="gallery">
        <div class="max-w-7xl mx-auto px-5">
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-black text-brand-black mb-4">Trip Sebenar Nusa Travel</h2>
                <p class="text-gray-600 text-lg">Ribuan peserta telah merasai pengalaman ini.</p>
            </div>

            <div class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar">
                <img src="assets/images/trip_1.jpeg" class="h-64 md:h-96 w-auto rounded-xl snap-center shrink-0 object-cover border border-gray-200" alt="Galleri 1">
                <img src="assets/images/trip_2.jpeg" class="h-64 md:h-96 w-auto rounded-xl snap-center shrink-0 object-cover border border-gray-200" alt="Galleri 2">
                <img src="assets/images/trip_3.jpeg" class="h-64 md:h-96 w-auto rounded-xl snap-center shrink-0 object-cover border border-gray-200" alt="Galleri 3">
                <img src="assets/images/trip_4.jpeg" class="h-64 md:h-96 w-auto rounded-xl snap-center shrink-0 object-cover border border-gray-200" alt="Galleri 4">
            </div>
            
            <div class="flex justify-center gap-2 mt-2">
                <span class="w-16 h-1 bg-brand-red rounded-full"></span>
                <span class="w-2 h-1 bg-gray-300 rounded-full"></span>
                <span class="w-2 h-1 bg-gray-300 rounded-full"></span>
            </div>
            <p class="text-center text-sm text-gray-500 mt-4">&larr; Swipe untuk lihat lebih banyak &rarr;</p>
        </div>
    </section>

    <!-- Polisi Section Checklist Format -->
    <section class="py-16 bg-white" id="policy">
        <div class="max-w-3xl mx-auto px-5">
            <h2 class="text-2xl font-black text-brand-black mb-8 border-b-2 border-brand-red inline-block pb-2">Polisi & Maklumat Penting Raya/Harga Lanjut</h2>
            
            <div class="space-y-4 text-gray-700">
                <div class="flex gap-4 items-start">
                    <span class="material-symbols-outlined text-brand-red mt-1 shrink-0">check_circle</span>
                    <p><strong>Harga TIDAK Termasuk:</strong> Insurans Perjalanan Peribadi, Lawatan Pilihan (Optional Tour), & Caj Tipping (RM100/pax dibayar kepada Tour Guide).</p>
                </div>
                <div class="flex gap-4 items-start">
                    <span class="material-symbols-outlined text-brand-red mt-1 shrink-0">check_circle</span>
                    <p><strong>Pembayaran Ringkas:</strong> Deposit hanya RM1,000 sahaja untuk jamin tempat bernilai tinggi ini. Baki 50% dibayar 90 hari sebelum terbang, dan baki penuh (Full Payment) 45 hari sebelum trip bermula.</p>
                </div>
                <div class="flex gap-4 items-start">
                    <span class="material-symbols-outlined text-brand-red mt-1 shrink-0">check_circle</span>
                    <p><strong>Perihal Pembatalan:</strong> Deposit RM1,000 adalah 'Non-Refundable'. Jika penerbangan telah dicetak, tiada pemulangan. Kami ikhlas menasihatkan peserta agar komited sebelum melakukan bayaran.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-brand-black text-white/50 py-12 text-center text-sm mt-10">
        <p class="font-bold text-white mb-2">Nusa Travel Agency</p>
        <p>Hak Cipta Terpelihara &copy; 2026</p>
    </footer>

    <!-- Floating WhatsApp CTA (Priority conversion) -->
    <a href="https://wa.me/601255001601" class="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 flex items-center gap-3 bg-whatsapp text-white px-5 py-4 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:bg-green-600 transition-all hover:-translate-y-1 animate-float group border-2 border-white">
        <svg class="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-5.824 4.74-10.563 10.564-10.563 5.826 0 10.564 4.738 10.564 10.563 0 5.827-4.738 10.565-10.564 10.565z"/></svg>
        <div class="hidden md:flex flex-col text-left">
            <span class="text-xs font-medium text-white/80">Pertanyaan & Tempahan</span>
            <span class="font-bold leading-tight">WhatsApp Kami Sekarang</span>
        </div>
    </a>

</body>
</html>`;

fs.writeFileSync('index.html', html);
console.log('Final build process completed smoothly. Clean, high convert layout applied.');
