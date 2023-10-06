export default function hasValuesFromArray(set, array) {
  let allExist = true;
  array.forEach((n) => { allExist = allExist && set.has(n); });
  return allExist;
}
