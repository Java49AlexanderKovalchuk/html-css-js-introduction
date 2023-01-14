import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
import { SalesePerson } from "./SalesePerson";

export class Company {
    constructor(private _employees: Employee[]) {

    }
    addEmployee(employee: Employee): void {
        if (!this._employees.some(emp => employee.id === emp.id)) {
            this._employees.push(employee);
        }
        else throw `Trying to add the employee whom id is exist already.`
    }
    
    removeEmployee(id: number): boolean {
        return this._employees.every(el => el.id !== id) ? false :
            !!this._employees.splice(this._employees.findIndex(n => n.id === id), 1);
    }


    getEmployee(id: number): Employee | null {
        const findedEl: Employee | undefined = this._employees.find(el => el.id === id);
        return !!findedEl ? findedEl : null;
    }

    getEmployeeBySalary(from: number, to: number): Array<Employee> {
        const arEmpl: Array<Employee> = this._employees.filter(el => {
            const salary: number = el.computeSalary();
            return salary >= from && salary <= to;
        });
        return arEmpl.sort((a, b) => a.birthYear - b.birthYear);
    }

    computeBudget(): number {
        return this._employees.reduce((budget, empl) => {
            return budget + empl.computeSalary();
        }, 0);
    }
}







