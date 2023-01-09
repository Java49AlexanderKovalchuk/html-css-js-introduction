"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rectangle_1 = require("./Rectangle");
const Square_1 = require("./Square");
const shapes = [
    new Rectangle_1.Rectangle(3, 4),
    new Square_1.Square(5),
];
const sumOfShapes = shapes.reduce((res, cur) => res + cur.getSquare(), 0);
console.log(sumOfShapes);
//# sourceMappingURL=app.js.map