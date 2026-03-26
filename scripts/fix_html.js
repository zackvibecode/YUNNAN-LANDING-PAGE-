const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Replace Top Logo
content = content.replace(
    '<span class="text-xl font-extrabold tracking-tighter text-zinc-900 dark:text-white font-headline">NUSA TRAVEL</span>',
    '<img src="assets/images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-8 w-auto" />'
);

// 2. Change maybank-logo.svg to maybank-logo-png-transparent.png and remove bg color
content = content.replace(
    /<img alt="Maybank logo" class="h-10 w-auto rounded-lg bg-\[#ffcd00\] p-1\.5" src="images\/maybank-logo\.svg"\/>/g,
    '<img alt="Maybank logo" class="h-10 w-auto" src="assets/images/maybank-logo-png-transparent.png"/>'
);
content = content.replace(
    /<img alt="Maybank logo" class="h-10 w-auto" src="assets\/images\/maybank-logo\.svg"\/>/g,
    '<img alt="Maybank logo" class="h-10 w-auto" src="assets/images/maybank-logo-png-transparent.png"/>'
);

// 3. Font Montserrat
content = content.replace(
    /Plus\+Jakarta\+Sans:wght@700;800&family=Manrope:wght@400;500;600;700/g,
    'Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700'
);
content = content.replace(/"Plus Jakarta Sans"/g, '"Montserrat", "sans-serif"');
content = content.replace(/"Manrope"/g, '"Montserrat", "sans-serif"');

// 4. Remove scrollbar max-height from tabs
content = content.replace(/max-h-\[620px\] overflow-y-auto pr-2 pb-2 custom-scrollbar/g, '');

// 5. Remove Hover Detail divs entirely
const hoverRegex = /<div class="pointer-events-none absolute left-1\/2 top-full z-20 hidden [^>]+>[\s\S]*?<\/div>/g;
content = content.replace(hoverRegex, '');

const detailTagRegex = /<div class="mt-4 rounded-2xl border border-primary\/10 bg-primary\/\[0\.03\] p-4 text-center md:hidden">[\s\S]*?<\/div>/g;
content = content.replace(detailTagRegex, '');

// Also remove the "Hover untuk detail" buttons (which I updated into "Lihat Jadual di Bawah")
content = content.replace(/<div class="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-primary editorial-shadow">Lihat Jadual di Bawah<\/div>/g, '');
content = content.replace(/<div class="mt-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-bold text-zinc-700 editorial-shadow">Lihat Jadual di Bawah<\/div>/g, '');

// Make sure the main cards for pricing don't overlap now
// The hover wrappers should be removed to simplify if wanted, but removing hover info is enough.

// Change color of primary back to match "warna logo no".
// LogoNusa looks like a corporate #ED1C24 red logo. I'll replace the ba0013 and e31e24 to #D31D24 or #ED1C24.
content = content.replace(/"primary": "#ba0013"/g, '"primary": "#E22128"');
content = content.replace(/"primary-container": "#e31e24"/g, '"primary-container": "#C8102E"');

// Write out
fs.writeFileSync(filePath, content, 'utf8');
console.log('Modifications applied successfully using Node.js');
