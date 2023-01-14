import { CipherDecipher } from "./CipherDecipher";
import { Shape } from "./ShapeInterface";
import { ShapeContainer } from "./ShapeContainer";
import { Circle } from "./Circle";
import { Square } from "./Square";
import { Rectangle } from "./Rectangle";



import { Employee } from "./Employee";
import { SalesePerson } from "./SalesePerson";
import { WageEmployee } from "./WageEmployee";
import { Company } from "./Company";

// const minCode: number = ' '.charCodeAt(0);
// const maxCode: number = '~'.charCodeAt(0);
// const SHIFT: number = 10;

// const cipDecip = new CipherDecipher(minCode, maxCode, SHIFT);

// type TestObj = {
//     str: string
// }

// function testCipherDecipher(data: Array<TestObj>, testName: string): void {
//     console.log(`${'*'.repeat(10)}${testName}${'*'.repeat(10)}`);
//     if(testName === "cipherTest") {
//         data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.cipher(obj.str)}`));
//     }
//     else {
//         data.forEach(obj => console.log(`str = ${obj.str} --> ${cipDecip.decipher(obj.str)}`));
//     }
// }

// let dataForTestCipher: Array<TestObj> = [{str: "abc"}, {str: "Hello World!"}];
// testCipherDecipher(dataForTestCipher, "cipherTest");
// const dataForTestDecipher: Array<TestObj> = [{str: "klm"}, {str: "Rovvy*ay|vn+"}];
// testCipherDecipher(dataForTestDecipher, "decipherTest");

// //---------------

// const shapes: Array<Shape> = [
//     new Rectangle(1, 2),
//     new Square(1),
//     new Circle(10)
// ]
// const shapesContainer: ShapeContainer = new ShapeContainer(shapes);
// console.log(shapesContainer)
// console.log("sum of squares: ",shapesContainer.getSquare());
// console.log("sum of perimeters: ", shapesContainer.getPerimeter());

const employee1: WageEmployee = new WageEmployee(123, "Vasya", 2000, "QA", 10000, 100, 200);
const salesPerson1: SalesePerson = new SalesePerson(124, "John", 1990, "Sales", 10000, 100,
    200, 2000, 50);
console.log('1 ', employee1, salesPerson1);
const employee2: WageEmployee = new WageEmployee(223, 'Petya', 1975, "Development", 12000, 70, 120);
const employee3: WageEmployee = new WageEmployee(323, "Misha", 1978, "Adv", 6000, 70, 160)
const employee4: WageEmployee = new WageEmployee(125, "Bill", 1970, "Audit", 8000, 110, 200 )
const comp1 = new Company([]);
comp1.addEmployee(employee1);
comp1.addEmployee(salesPerson1);
comp1.addEmployee(employee2);
//comp1.addEmployee(employee1);
comp1.addEmployee(employee3); 
comp1.addEmployee(employee4);       //id - 123, 124, 223, 323, 125
console.log(comp1);
console.log(comp1.removeEmployee(333), comp1);
console.log(comp1.getEmployee(125));
console.log(employee1.computeSalary());
console.log(salesPerson1.computeSalary());
console.log(employee2.computeSalary());
console.log(employee3.computeSalary());
console.log(employee4.computeSalary()); 
//salaries: 30000, 31000, 20400, 17200, 30000;
const arSal = comp1.getEmployeeBySalary(17000, 21000);
console.log("method getEmployeeBySalary is works:", arSal[0].birthYear <= arSal[1].birthYear);
console.log('budget:', comp1.computeBudget()); //128600
