/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr = arr.slice(0);
  const collator = new Intl.Collator(['ru', 'en'], { caseFirst: 'upper'});
  const sortFunction = (a, b) => collator.compare(a, b);

  switch(param) {
    case 'asc':
      return sortedArr.sort(sortFunction);
    case 'desc':
      return sortedArr.sort(sortFunction).reverse();
  }
}
