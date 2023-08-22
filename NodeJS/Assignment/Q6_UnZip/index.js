const zlib = require('zlib');
const fs = require('fs');

const InputFile = fs.createReadStream('QuesAss1.zip');
const OutputFile = fs.createWriteStream('QuesAss_1.txt');

InputFile.pipe(zlib.createUnzip()).pipe(OutputFile);