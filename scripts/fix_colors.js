const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all hardcoded Tailwind reds with our dynamic primary token
content = content.replace(/red-600/g, 'primary');
content = content.replace(/to-red-700/g, 'to-primary-container');
content = content.replace(/bg-red-700/g, 'bg-primary-container');
content = content.replace(/text-red-700/g, 'text-primary-container');
// Replace bg-red-50 to a soft primary surface
content = content.replace(/bg-red-50/g, 'bg-primary/5');

// Make the nav Logo slightly bigger as 'h-8' might be small
content = content.replace(
    '<img src="assets/images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-8 w-auto" />',
    '<img src="assets/images/LogoNusa[3]-01.png" alt="NUSA TRAVEL" class="h-10 w-auto" />'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Colors mapped to primary successfully.');
