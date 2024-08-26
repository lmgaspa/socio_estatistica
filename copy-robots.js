const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'robots.txt');
const dest = path.resolve(__dirname, 'dist', 'robots.txt');

fs.copyFileSync(src, dest);
console.log('robots.txt foi copiado para dist/');
