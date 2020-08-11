//how to creat call to create object.
class person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;

    }
}
const heroPerson = new person('Hero', 'Balam', 15000);
console.log(heroPerson);
const friendlyPerson = new person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);

function PersonaOne(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new PersonaOne('Grand', 'Papa', 1200);
console.log(oldPerson);