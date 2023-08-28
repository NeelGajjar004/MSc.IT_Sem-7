// Q7. Write a program to promisify fs.unlink function and call it.
const util = require('util');
const fs = require('fs');

const UnlinkAsync = util.promisify(fs.unlink);

const path = "QuesAss1.txt";
// const path1 = "QuesAss1.1.txt";
console.log("  ====>    Question : 7    <====  \n");

UnlinkAsync(path)
    .then(() => {
        console.log("  ====>    File Deleted Successfully    <====  ");
    })
    .catch(() => {
        console.log("  ====>    File Not Found    <====  ");
    })