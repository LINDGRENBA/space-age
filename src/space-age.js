export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageOnMercury() {
    this.mercuryAge = Math.round((this.age * 365) / 88);
  }

  ageOnVenus() {
    this.venusAge = Math.round((this.age * 365) / 225);
  }

  ageOnMars() {
    this.marsAge = Math.round((this.age * 365) / 687);
  }

  ageOnJupiter() {
    this.jupiterAge = Math.round((this.age * 365) / (11.8 * 365));
  }

  remainingYears(yearsLeft) {
    this.yearsLeftOnMercury = Math.round((yearsLeft * 365) / 88);
    this.yearsLeftOnVenus = Math.round((yearsLeft * 365) / 225);
    this.yearsLeftOnMars = Math.round((yearsLeft * 365) / 687);
    this.yearsLeftOnJupiter = Math.round((yearsLeft * 365) / (11.8 * 365));
  }

}

// mercury - divide age*365 by 88  =  136.875
// venus - divide age*365 by 225  =  53.533
// mars - divide age*365 by 687  =  17.532
// jupiter - divide age*365 by (11.8*365)  =  2.796