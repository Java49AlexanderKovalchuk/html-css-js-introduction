import { Shape } from "./ShapeInterface";
import { Rectangle } from "./Rectangle";
import { Square } from "./Square";
const shapes: Array<Shape> = [
    new Rectangle(3, 4),
    new Square(5), 
];
const sumOfShapes: number =  shapes.reduce((res, cur) => res + cur.getSquare(), 0);
console.log(sumOfShapes);