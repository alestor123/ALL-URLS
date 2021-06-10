const allurls = require('./App')
const { readFileSync } = require('fs')
console.log(allurls(readFileSync(process.argv[2] || './lol.md').toString()))
