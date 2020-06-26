import { User } from './../src/space-age.js';

describe('User', () => {
  
  test('should correctly create a User instance with name and age properties', () => {
    const user1 = new User("Donald", 33);
    expect(user1.name).toBe("Donald");
    expect(user1.age).toBe(33);
  });

  test('should calculate users age in Mercury years', () => {
    const user1 = new User("Donald", 33);
    user1.calculateMercuryAge();
    expect(user1.mercuryAge).toEqual(139.8);
  });

});