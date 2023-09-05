#!/usr/bin/node

class Rectangle {
  constructor (w, h) {
    this.width = w;
    this.height = h;
  }

  print () {
    for (let row = 0; row < this.height; row++) {
      let msg = '';
      for (let column = 0; column < this.width; column++) {
        msg += 'X';
      }
      console.log(msg);
    }
  }

  rotate () {
    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
