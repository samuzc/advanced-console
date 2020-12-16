# Advanced console

[![npm](https://img.shields.io/npm/v/advanced-console)](https://www.npmjs.com/package/advanced-console)

Advanced console for node.js

# Installation
```sh
$ npm install advanced-console
```
# Usage
```javascript
'use strict';
console.log("Regular console.log");
console.error("Regular console.error");

const ac = require("advanced-console");
console.log("Advanced console.log");
console.error("Advanced console.error");

ac.set("absolutePath", true)
console.log("absolutePath");

// console output
Regular console.log
Regular console.error
[2020/Jul/30 15:06:56] [LOG]   advanced-console/sample.js:7 [31.64 MB] Advanced console.log
[2020/Jul/30 15:06:56] [ERROR] advanced-console/sample.js:8 [31.89 MB] Advanced console.error
[2020/Jul/30 15:06:56] [LOG]   /home/user/advanced-console/sample.js:11 [31.64 MB] absolutePath
```
