const os = require('os')

console.log(`${os.version}`)

const currentOS = {
    user: os.userInfo().username,
    typeof: os.type(),
    version: os.version(),
    release: os.release(),
    platform: os.platform(),
}

console.log(currentOS)

const path = require('path');
const filePath = path.join('/content/', 'subfolder/', 'test.txt');
// console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const fullPath = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(fullPath);


const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/subfolder/test.txt', 'utf8');



writeFileSync('./content/subfolder/third.txt', `This is the content of the \nFirst file: ${first} \n Second file:${second}`, { flag: 'a' });