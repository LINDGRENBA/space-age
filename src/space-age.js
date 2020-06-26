export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  calculateMercuryAge() {
    this.mercuryAge = Math.round((this.age * 365) / 88);
  }

  calculateVenusAge() {
    this.venusAge = Math.round((this.age * 365) / 225);
  }

}

// venus - 53.533
// mars - 17.532
// jupiter - 2.796