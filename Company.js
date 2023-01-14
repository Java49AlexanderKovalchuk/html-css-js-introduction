"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
class Company {
    constructor(_employees) {
        this._employees = _employees;
    }
    addEmployee(employee) {
        if (!this._employees.some(emp => employee.id === emp.id)) {
            this._employees.push(employee);
        }
        else
            throw `Trying to add the employee whom id is exist already.`;
    }
    removeEmployee(id) {
        return this._employees.every(el => el.id !== id) ? false :
            !!this._employees.splice(this._employees.findIndex(n => n.id === id), 1);
    }
    getEmployee(id) {
        const findedEl = this._employees.find(el => el.id === id);
        return !!findedEl ? findedEl : null;
    }
    getEmployeeBySalary(from, to) {
        const arEmpl = this._employees.filter(el => {
            const salary = el.computeSalary();
            return salary >= from && salary <= to;
        });
        return arEmpl.sort((a, b) => a.birthYear - b.birthYear);
    }
    computeBudget() {
        return this._employees.reduce((budget, empl) => {
            return budget + empl.computeSalary();
        }, 0);
    }
}
exports.Company = Company;
//# sourceMappingURL=Company.js.map