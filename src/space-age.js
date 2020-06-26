export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateMercuryAge() {
    this.mercuryAge = (this.age * 365) / 88;
  }

}