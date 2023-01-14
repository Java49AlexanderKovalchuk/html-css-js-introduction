
import { Employee } from "./Employee";
import { WageEmployee } from "./WageEmployee";
export const MIN_SALES: number = 100;
export const MAX_SALES: number = 1000;
export const MIN_PERCENT: number = 5;
export const MAX_PERCENT: number = 30;

export class SalesePerson extends WageEmployee {
    constructor(id: number, name: string, birthYear: number, department:string, basicSalary: number, 
        wage: number, hours: number, private _sales: number, private _percent:number) {
            super(id, name, birthYear, department, basicSalary, wage, hours,);
        }
        get sales(): number {
            return this._sales;
        }
        set sales(sales:number) {
            if (sales < MIN_SALES || sales > MAX_SALES) {
                throw `wrong wage value must be in range [${MIN_SALES}-${MAX_SALES}]`
            }
            this._sales = sales;
        }
        get percent(): number {
            return this._percent;
        }
        set percent(percent: number) {
            if (percent < MIN_PERCENT || percent > MAX_PERCENT) {
                throw `wrong wage value must be in range [${MIN_PERCENT}-${MAX_PERCENT}]`
            }
            this._percent = percent;
        }
        computeSalary(): number {
            return super.computeSalary() + this._sales * this._percent / 100;
        }
    
}