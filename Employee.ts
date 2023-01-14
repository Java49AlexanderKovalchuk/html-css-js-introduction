
export const MIN_SALARY: number = 5000;
export const MAX_SALARY: number = 50000;

export abstract class Employee {
   constructor(private _id: number, private _name: string,
      private _birthYear: number, public department: string,
      private _basicSalary: number) {
      if (_basicSalary < MIN_SALARY || _basicSalary > MAX_SALARY) {
         throw `salary mast be in range [${MIN_SALARY}-${MAX_SALARY}]`
      }
   }
   get id() {
      return this._id;
   }
   get name() {
      return this._name
   }
   get birthYear() {
      return this._birthYear;
   }

   get basicSalary() {
      return this._basicSalary
   }
   set basicSalary(salary) {
      if (salary < MIN_SALARY || salary > MAX_SALARY) {
         throw `salary mast be in range [${MIN_SALARY}-${MAX_SALARY}]`
      }
      this._basicSalary = salary;
   }
   abstract computeSalary(): number;


}

