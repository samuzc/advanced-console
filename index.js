'use strict';
const path = require("path");
let absolutePath = false;
require("console-stamp")(console, {
  pattern: "yyyy/mmm/dd HH:MM:ss",
  metadata: () => {
    let e = new Error();
    let stack = e.stack.split("\n");
    let line = "";
    let basepath = path.normalize(__dirname);
    if (stack[3] && stack[3].match(/\/.*:\d+:\d+/)) {
      line = stack[3].match(/\/.*:\d+:\d+/)[0]
    }
    if (!absolutePath) {
      basepath = path.normalize(__dirname + '/../..');
      let i = line.indexOf(basepath);
      line = line.substr(i + basepath.length + 1);
    }
    line = line.replace(/:\d+$/, "")
    return line + ' [' + sizefmt(process.memoryUsage().rss) + ']';
  },
  label: true,
  colors: {
    stamp: "yellow",
    label: "white",
    metadata: "green"
  }
});

const sizefmt = input => {
  let e = Math.log(input)/Math.log(1e3)|0;
  return (input/Math.pow(1e3,e)).toFixed(2) + ' ' + (e?'kMGTPEZY'[--e]+'B':'Bytes');
};

this.set = (optionName, optionValue) => {
  if (optionName === 'absolutePath') {
    absolutePath = optionValue
  }
}
