"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeContainer = void 0;
class ShapeContainer {
    constructor(shapes) {
        this.shapes = shapes;
    }
    getSquare() {
        return this.shapes.reduce((cur, el) => cur + el.getSquare(), 0);
    }
    getPerimeter() {
        return this.shapes.reduce((cur, el) => cur + el.getPerimeter(), 0);
    }
}
exports.ShapeContainer = ShapeContainer;
//# sourceMappingURL=ShapeContainer.js.map