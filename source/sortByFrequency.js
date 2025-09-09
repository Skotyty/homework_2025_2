'use strict';
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
  const map = new Map();

  numbers.forEach((num) => {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  })

  const entries = Array.from(map).sort((a, b) => b[1] - a[1]);
  
  const result = [];

  entries.forEach(([num, count]) => {
    for (let i = 0; i < count; ++i)
      result.push(num)
  })

  return result;
}
