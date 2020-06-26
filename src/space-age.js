export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateMercuryAge() {
    this.mercuryAge = (this.age * 365) / 88;
  }

  calculateVenusAge() {

  }

}

// venus - 53.533
// mars - 17.532
// jupiter - 2.796