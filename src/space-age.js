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

  calculateMarsAge() {
    this.marsAge = Math.round((this.age * 365) / 687);
  }

  calculateJupiterAge() {
    this.jupiterAge = Math.round((this.age * 365) / (11.8 * 365));
  }

}

// venus - 53.533
// mars - 17.532
// jupiter - 2.796