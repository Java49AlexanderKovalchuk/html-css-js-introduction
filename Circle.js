"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getSquare() {
        return 3.14 * this.radius * this.radius;
    }
    getPerimeter() {
        return 3.14 * 2 * this.radius;
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map