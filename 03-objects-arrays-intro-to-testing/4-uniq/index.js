/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) return [];
  let uniqArr = [];

  for (const el of arr) {
    if (!uniqArr.includes(el)) uniqArr.push(el);
  }
  return uniqArr;
}
