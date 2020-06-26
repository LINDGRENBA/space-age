import { User } from './../src/space-age.js';

describe('User', () => {
  
  test('should correctly create a User instance with name and age properties', () => {
    const user1 = new User("Donald", 33);
    expect(user1.name).toBe("Donald");
    expect(user1.age).toBe(33);
  });

});