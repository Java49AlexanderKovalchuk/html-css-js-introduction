import { Shape } from "./ShapeInterface";
export class Circle implements Shape {
    
    constructor(private radius: number) {

    }
    getSquare(): number {
        return  3.14 * this.radius * this.radius;
    }
    getPerimeter(): number {
        return 3.14 * 2 * this.radius;
    }

}

