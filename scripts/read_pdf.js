const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const pdfPath = fs.existsSync('docs/reference/pdfs/YUNNAN 2026 (1).pdf')
    ? 'docs/reference/pdfs/YUNNAN 2026 (1).pdf'
    : path.join(__dirname, '..', 'docs', 'reference', 'pdfs', 'YUNNAN 2026 (1).pdf');

let dataBuffer = fs.readFileSync(pdfPath);

async function run() {
    const parser = new PDFParse({ data: dataBuffer });
    const data = await parser.getText();
    console.log(data.text);
}

run().catch(err => {
    console.error("Error reading PDF:", err);
});
