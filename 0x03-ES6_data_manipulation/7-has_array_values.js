export default function hasValuesFromArray(xSet, arr) {
  return arr.every((elmt) => xSet.has(elmt));
}
