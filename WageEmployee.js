"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WageEmployee = exports.MAX_HOURS = exports.MIN_HOURS = exports.MAX_WAGE = exports.MIN_WAGE = void 0;
const Employee_1 = require("./Employee");
exports.MIN_WAGE = 100;
exports.MAX_WAGE = 1000;
exports.MIN_HOURS = 0;
exports.MAX_HOURS = 200;
class WageEmployee extends Employee_1.Employee {
    constructor(id, name, birthYear, department, basicSalary, _wage, _hours) {
        super(id, name, birthYear, department, basicSalary);
        this._wage = _wage;
        this._hours = _hours;
    }
    get wage() {
        return this._wage;
    }
    set wage(wage) {
        if (wage < exports.MIN_WAGE || wage > exports.MAX_WAGE) {
            throw `wrong wage value must be in range [${exports.MIN_WAGE}-${exports.MAX_WAGE}]`;
        }
        this._wage = wage;
    }
    get hours() {
        return this._hours;
    }
    set hours(hours) {
        if (hours < exports.MIN_HOURS || hours > exports.MAX_HOURS) {
            throw `wrong hours value must be in range [${exports.MIN_HOURS}-${exports.MAX_HOURS}]`;
        }
        this._hours = hours;
    }
    computeSalary() {
        return this.basicSalary + this._hours * this._wage;
    }
}
exports.WageEmployee = WageEmployee;
//# sourceMappingURL=WageEmployee.js.map