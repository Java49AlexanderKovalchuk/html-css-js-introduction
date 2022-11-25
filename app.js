function createEmployee(id, name, birthYear, salary) {
    return {id, name, birthYear, salary};
}
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    let employees = [];
    let uniqueIds = [0];
    minId = 10 ** (idDigits - 1);
    maxId = 10 ** idDigits - 1;
    for (let i = 0; i < nEmployees; i++) {
        let id = getUniqueRandomId(minId, maxId, uniqueIds);
        let birthYear = getRandomInteger(minBirthYear, maxBirthYear);
        let salary = getRandomInteger(minSalary, maxSalary);
        employees.push(createEmployee(id, 'name' + id, birthYear, salary));
    }
    return employees;
}

function getUniqueRandomId(minId, maxId, uniqueIds) {
    let id = uniqueIds[0];
    do {
        id = getRandomInteger(minId, maxId);
    }
    while(!uniqueIds.every(n => n != id))
    uniqueIds.push(id)   
    return id;
}
    
function getRandomInteger(min, max) {
    return Math.trunc(Math.random() * (max - min)) + min;    // on an interval [min, max[
};

//1.
 function getAverageAge(employees) {
 let currentYear = new Date().getFullYear();
 return employees.reduce((acc, cur) => acc + currentYear - getBirthYear(cur), 0) / employees.length;
 }
 function getBirthYear (obj) {
    return obj.birthYear;
 }
//  function getValueByKey(obj, key) {
//     return obj[key];
//  }

//2.
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    const emplSalaryInterval = employees.filter(n => n.salary > salaryFrom && n.salary < salaryTo);
    emplSalaryInterval.sort((a, b) => a.salary - b.salary); 
    return emplSalaryInterval;
}
//3.
function increaseSalary(employees, borderSalary, percent) { 
    const emplsLessBorder = employees.filter(n => n.salary < borderSalary);
    let res = emplsLessBorder.map(el => el.salary + el.salary * percent / 100); 
    emplsLessBorder.forEach((n, i) => n.salary = res[i]);         

    return emplsLessBorder;
}

//TEST
let nEmployees = 5;
let idDigits = 1;
let minSalary = 6000;
let maxSalary = 16000;
let minBirthYear = 1970;
let maxBirthYear = 2000;

let empls = createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear);
console.log("array of objects:", empls);
console.log(`avarage age: ${getAverageAge(empls)} years`);
console.log('sorted employee by salary:', getEmployeesBySalary(empls, 7000, 14000));
console.log('increased salary: ', increaseSalary(empls, 10000, 10));

console.log(empls);
