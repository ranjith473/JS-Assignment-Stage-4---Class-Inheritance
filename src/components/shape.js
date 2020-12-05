// declare class

// export class using module.exports
class Shape {
    constructor() {
        this.color="red";
    }
    drawShape() {
        console.log("Drawing a shape");
    }
    caculateArea() {
        console.log("don't know area of unknown shape");
        return 0;
    }
}
module.exports = Shape;