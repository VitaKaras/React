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

var person1 = new Person("David");
person1.sayHi();

var person2 = new Person('Kylie', 'Jenner', 20, 'Female');
person2.sayHi();