# Advanced console

[![npm](https://img.shields.io/npm/v/advanced-console)](https://img.shields.io/npm/v/advanced-console)

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

require("advanced-console");
console.log("Advanced console.log");
console.error("Advanced console.error");

// console output
Regular console.log
Regular console.error
[2018/Jul/30 15:06:56] [LOG]   advanced-console/sample.js:7:9 [31.64 MB] Advanced console.log
[2018/Jul/30 15:06:56] [ERROR] advanced-console/sample.js:8:9 [31.89 MB] Advanced console.error
```
