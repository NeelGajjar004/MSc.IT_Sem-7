// Q5. Write a program to create a compressed zip file for a folder.
const zilb = require('zlib');
const fs = require('fs');

const InputFile = fs.createReadStream("QuesAss1.txt");
const OutputFile = fs.createWriteStream("../Q6_UnZip/QuesAss1.zip");

InputFile.pipe(zilb.createGzip()).pipe(OutputFile);