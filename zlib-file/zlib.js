const fs = require('fs');
const zlib = require('zlib');

const gzunip = zlib.createGunzip();
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example.txt.gz');
readStream.pipe(gzunip).pipe(writeStream);