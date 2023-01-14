
import { Employee } from "./Employee";
export const MIN_WAGE: number = 100;
export const MAX_WAGE: number = 1000;
export const MIN_HOURS: number = 0;
export const MAX_HOURS: number = 200;
export class WageEmployee extends Employee{
    
    constructor(id: number, name: string, birthYear: number, department:string, basicSalary: number, 
        private _wage: number, private _hours: number) {
            super(id, name, birthYear, department, basicSalary);
    }
    get wage() {
        return this._wage;
    }
    set wage(wage: number) {
        if (wage < MIN_WAGE || wage > MAX_WAGE) {
            throw `wrong wage value must be in range [${MIN_WAGE}-${MAX_WAGE}]`
        }
        this._wage = wage;
    }
    get hours() {
        return this._hours;
    }
    set hours(hours: number) {
        if (hours < MIN_HOURS || hours > MAX_HOURS) {
            throw `wrong hours value must be in range [${MIN_HOURS}-${MAX_HOURS}]`
        }
        this._hours = hours;
    }
    computeSalary(): number {
        return this.basicSalary +  this._hours * this._wage;
    }
}