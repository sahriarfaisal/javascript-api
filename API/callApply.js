const normalPerson  ={//normalPerson is a object name.
    firstName: 'Rohim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function () {//anonymous function.
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips,  tax) {
        console.log(this);
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// console.log(normalPerson);
// //how to call object method.
// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}


const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Gulam',
    salary: 30000
}
// // normalPerson.chargeBill();
// const heroBillChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroBillChargeBill(2000);
// heroBillChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);
// //friendlyPersonChargeBill();
// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonChargeBill(500);
// friendlyPersonChargeBill(200);
// console.log(friendlyPerson.salary);

//CALL
// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(friendlyPerson, 500, 300, 30);

// console.log(heroPerson.salary);
// console.log(friendlyPerson.salary);

//APPLY
normalPerson.chargeBill.apply(heroPerson,[900, 100, 10]);
normalPerson.chargeBill.apply(friendlyPerson, [500, 300, 30]);

console.log(heroPerson.salary);
console.log(friendlyPerson.salary);