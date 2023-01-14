"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesePerson = exports.MAX_PERCENT = exports.MIN_PERCENT = exports.MAX_SALES = exports.MIN_SALES = void 0;
const WageEmployee_1 = require("./WageEmployee");
exports.MIN_SALES = 100;
exports.MAX_SALES = 1000;
exports.MIN_PERCENT = 5;
exports.MAX_PERCENT = 30;
class SalesePerson extends WageEmployee_1.WageEmployee {
    constructor(id, name, birthYear, department, basicSalary, wage, hours, _sales, _percent) {
        super(id, name, birthYear, department, basicSalary, wage, hours);
        this._sales = _sales;
        this._percent = _percent;
    }
    get sales() {
        return this._sales;
    }
    set sales(sales) {
        if (sales < exports.MIN_SALES || sales > exports.MAX_SALES) {
            throw `wrong wage value must be in range [${exports.MIN_SALES}-${exports.MAX_SALES}]`;
        }
        this._sales = sales;
    }
    get percent() {
        return this._percent;
    }
    set percent(percent) {
        if (percent < exports.MIN_PERCENT || percent > exports.MAX_PERCENT) {
            throw `wrong wage value must be in range [${exports.MIN_PERCENT}-${exports.MAX_PERCENT}]`;
        }
        this._percent = percent;
    }
    computeSalary() {
        return super.computeSalary() + this._sales * this._percent / 100;
    }
}
exports.SalesePerson = SalesePerson;
//# sourceMappingURL=SalesePerson.js.map