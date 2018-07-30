'use strict';
const path = require("path");
require("console-stamp")(console, {
  pattern: "yyyy/mmm/dd HH:MM:ss",
  metadata: () => {
    let e = new Error();
    let stack = e.stack.split("\n");
    let line = "";
    let basepath = path.normalize(__dirname+'/..');
    if (stack.length > 4) {
      line = stack[3].match(/.*\((.*)\).*/);
      if (line) line = path.relative(path.join(basepath, "../.."), line[1]);
      else {
        line = stack[3];
        let i = line.indexOf(basepath);
        if (i >= 0) line = line.substr(i + basepath.length + 1);
      }
    }
    return line + ' [' + sizefmt(process.memoryUsage().rss) + ']';
  },
  label: true,
  colors: {
    stamp: "yellow",
    label: "white",
    metadata: "green"
  }
});

const sizefmt = (input, b, c, d, e) => {
  b = Math;
  c = b.log;
  d = 1e3;
  e = c(input)/c(d)|0;
  return (input/b.pow(d,e)).toFixed(2) + ' ' + (e?'kMGTPEZY'[--e]+'B':'Bytes');
};