"use strict";
/**
 * Функция, выводящая массив чисел, осортированных по частоте
 * @param {Array<Number>} numbers - массив чисел
 *
 * @example
 * returns [2, 2, 2, 2, 4, 4, 4, 6, 6]
 * sortByFrequency([4, 6, 2, 6, 4, 4, 2, 2, 2]])
 *
 * @returns {Array<Number>}
 */
const sortByFrequency = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new TypeError("Argument must be an array");
  }

  /**
   * Проверяет, является ли значение конечным числом (примитивом или объектом Number).
   * @param {number|Number} n - проверяемое значение
   * 
   * @example
   * returns true
   * isNumeric(1)
   * 
   * @returns {boolean}
   */
  const isNumeric = (n) =>
    (typeof n === "number" || n instanceof Number) &&
    Number.isFinite(Number(n));

  if (!numbers.every(isNumeric)) {
    throw new TypeError("Array must contain only finite numbers");
  }

  const map = numbers.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());

  const entries = Array.from(map).sort((a, b) => b[1] - a[1]);

  const result = [];

  entries.forEach(([num, count]) => {
    result.push(...Array(count).fill(num));
  });

  return result;
};
