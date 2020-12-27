class Shape {
  constructor() {
    this.color = "red";
  }
  drawShape() {
    console.log("Drawing a shape");
  }
  calculateArea() {
    console.log("Don't know area of unknown shape");
    return 0;
  }
}
module.exports = Shape;
