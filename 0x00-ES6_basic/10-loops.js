export default function appendToEachArrayValue(array, appendString) {
  const resArray = [];
  for (const idx of array) {
    resArray.push(appendString + idx);
  }

  return resArray;
}
