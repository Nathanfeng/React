
class Person {
  constructor(name, age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi. I am ${this.name}!`
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }

}

// class Student extends Person {
//   super(name, age);
// }

class Traveler extends Person {
  constructor(name = "anaonymous", age = 0, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += `I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }

}

const me = new Traveler("Nathan", 26);
console.log(me);
console.log(me.getGreeting())
