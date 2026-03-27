const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Change Google Fonts link
html = html.replace(/family=Outfit:wght@300\.\.900/g, 'family=Montserrat:ital,wght@0,100..900;1,100..900');
html = html.replace(/family=Outfit/g, 'family=Montserrat:ital,wght@0,100..900;1,100..900');

// Change in Tailwind config
html = html.replace(/'Outfit'/g, "'Montserrat'");
html = html.replace(/"Outfit"/g, "'Montserrat'");
html = html.replace(/font-family: 'Outfit'/g, "font-family: 'Montserrat'");

fs.writeFileSync('index.html', html);
console.log('Update Phase 4 (Font Montserrat) completed');
