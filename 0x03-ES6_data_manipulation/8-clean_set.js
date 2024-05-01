export default function cleanSet(xSet, startString) {
  if (!xSet || !startString || !(xSet instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  return Array.from(xSet)
    .filter((ele) => ele && ele.startsWith(startString))
    .map((ele) => ele.replace(startString, ''))
    .join('-');
}
