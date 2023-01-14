import { Shape } from "./ShapeInterface";
export class Rectangle implements Shape {
    
    constructor(private width: number, private height: number) {
    }
    getSquare(): number {
        return this.width * this.height;
    }
    getPerimeter(): number {
        return this.width * 2 + this.height * 2;
    }
}