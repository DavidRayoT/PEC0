import { canDrive, fibonacci, isEquilateral, sum2 } from "./pec0";

describe("pec0", () => {
  describe("Ex0:", () => {
    test("should return false when age is less than 18", () => {
      const actual = canDrive(16);
      expect(actual).toEqual(false);
    });

    test("should return true when age is bigger than 18", () => {
      const actual = canDrive(22);
      expect(actual).toEqual(true);
    });

    test("should return true when age is equal than 18", () => {
      const actual = canDrive(18);
      expect(actual).toEqual(true);
    });
  });

  describe("Ex1:", () => {
    test("should return true when a, b, c are equilateral", () => {
      const actual = isEquilateral(4, 4, 4);
      expect(actual).toEqual(true);
    });

    test("should return false when the triangle is not equilateral I", () => {
      const actual = isEquilateral(1, 2, 1);
      expect(actual).toEqual(false);
    });

    test("should return false when the triangle is not equilateral II", () => {
      const actual = isEquilateral(2, 1, 1);
      expect(actual).toEqual(false);
    });

    test("should return false when the triangle is not equilateral III", () => {
      const actual = isEquilateral(1, 1, 2);
      expect(actual).toEqual(false);
    });
  });

  describe("Ex2:", () => {
    test("should return the array summed by 2", () => {
      expect(sum2([1, 2, 3])).toEqual(expect.arrayContaining([3, 4, 5]));
      expect(sum2([0, 0, 0])).toEqual(expect.arrayContaining([2, 2, 2]));
      expect(sum2([1, 1, 1])).toEqual(expect.arrayContaining([3, 3, 3]));
      expect(sum2([-2, -2, -5])).toEqual(expect.arrayContaining([0, 0, -3]));
    });
  });

  describe("Ex3:", () => {
    test("should return the fibonacci numbers", () => {
      expect(fibonacci(0)).toEqual(0);
      expect(fibonacci(1)).toEqual(1);
      expect(fibonacci(2)).toEqual(1);
      expect(fibonacci(40)).toEqual(102334155);
    });
  });
});
