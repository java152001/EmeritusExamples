var Dragon = require("../dragon");

describe("exists?", () => {
    test("dragon should be a function", () => {
        expect(typeof Dragon).toBe('function');
    });
});

describe("attributes", () => {
  test("it should be red by default", () => {
      const testDragon = new Dragon("Charlie");

      expect(testDragon.color).toBe('Red');
  });

  test("it can change color to golden", () => {
      const testDragon = new Dragon("Charlie", "Golden");

      expect(testDragon.color).toBe('Golden');
  });
});

describe("sayings", () => {
  test("it should get angry when you wake it up", () => {
      const testDragon = new Dragon("Charlie");

      expect(testDragon.wakeUp()).toBe('WHO DARES DISTURB MY SLUMBER?');
  });

  test("it should be happy when you leave", () => {
      const testDragon = new Dragon("Charlie");

      expect(testDragon.threaten()).toBe('Go now, and tell the others to leave me in peace! Else you shall regret the day you first drew breath!');
  });
});
