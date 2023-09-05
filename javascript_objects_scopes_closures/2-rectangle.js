#!/usr/bin/node
class Rectangle {
  constructor(w, h) {
    if (w <= 0 || h <= 0) {

      return {};
    }
    this.width = w;
    this.height = h;
  }
}


const r4 = new Rectangle(2, 0);
console.log(r4);
console.log(r4.width);
console.log(r4.height);

module.exports = Rectangle;
