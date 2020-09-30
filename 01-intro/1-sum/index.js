/**
 * sum
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
export default function sum(m, n) {
  const sum = Number(m) + Number(n);
  return sum ? sum : alert('Упс! Вы ввели не числовые значения.');
}
