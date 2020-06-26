import { User } from './../src/space-age.js';

describe('User', () => {
  
  test('should correctly create a User instance with name and age properties', () => {
    const user1 = new User("Donald", 33);
    expect(user1.name).toBe("Donald");
    expect(user1.age).toBe(33);
  });

  test('should calculate users age in Mercury years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnMercury();
    expect(user1.mercuryAge).toEqual(137);
  });

  test('should calculate user age in Venus years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnVenus();
    expect(user1.venusAge).toEqual(54);
  });

  test('should calculate user age in Mars years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnMars();
    expect(user1.marsAge).toEqual(18);
  });

  test('should calculate user age in Jupiter years', () => {
    const user1 = new User("Donald", 33);
    user1.ageOnJupiter();
    expect(user1.jupiterAge).toEqual(3);
  });

});