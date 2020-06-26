import { User } from './../src/space-age.js';

describe('User', () => {
  
  test('should correctly create a User instance with name and age properties', () => {
    const user1 = new User("Donald", 33);
    expect(user1.name).toBe("Donald");
    expect(user1.age).toBe(33);
  });

  test('should calculate users age in Mercury years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnOtherPlanets();
    expect(user1.mercuryAge).toEqual(137);
  });

  test('should calculate user age in Venus years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnOtherPlanets();
    expect(user1.venusAge).toEqual(54);
  });

  test('should calculate user age in Mars years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnOtherPlanets();
    expect(user1.marsAge).toEqual(18);
  });

  test('should calculate user age in Jupiter years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnOtherPlanets();
    expect(user1.jupiterAge).toEqual(3);
  });

  test('should calculate how many years user has left to live on Mercury, Venus, Mars and Jupiter', () => {
    const user1 = new User("Donald", 33);
    const yearsLeft = (85 - user1.age);
    user1.remainingYears(yearsLeft);
    expect(user1.yearsLeftOnMercury).toEqual(216);
    expect(user1.yearsLeftOnVenus).toEqual(84);
    expect(user1.yearsLeftOnMars).toEqual(28);
    expect(user1.yearsLeftOnJupiter).toEqual(4);
  });

  test('should calculate how many years user has lived beyond life expectancy if user age is greater than life expectancy', () => {
    const user1 = new User("Donald", 90);
    const lifeExpectancy = 85;
    user1.yearsExceeded(lifeExpectancy);
    expect(user1.yearsExceeded).toEqual(5);
  });

});