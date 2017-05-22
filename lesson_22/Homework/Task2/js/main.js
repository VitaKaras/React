class Person {
  constructor(firstName="John", lastName="Doe", age=0, gender="Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName(){
    return `${this.firstName} ${this.lastName}`
  }

  sayHi(){
    alert(`Hello, my name is ${this.fullName()}`);
  }
}

class User extends Person {
  constructor(firstName="John", lastName="Doe", age=0, gender="Male", signUpDate=0, id) {
    super(firstName, lastName, age, gender);
    this.signUpDate = signUpDate;
    this.id = id;
  }
}

let user1 = new User("Kate", "Stivenson", 25, "Female", 35, 1);
let user2 = new User();
let user3 = new User("Vill", "Smith", 56, "Male", 4, 2);
let users = [user1, user2, user3];

console.log(users);

export {users};