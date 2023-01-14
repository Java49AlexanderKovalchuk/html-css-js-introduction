import { Shape } from "./ShapeInterface";
export class ShapeContainer implements Shape {

    constructor(private shapes: Array<Shape>) {
    }
    getSquare(): number {
        return this.shapes.reduce((cur, el) => cur + el.getSquare(), 0);
    }
    getPerimeter(): number {
        return this.shapes.reduce((cur, el) => cur + el.getPerimeter(), 0);
    }
}
  

