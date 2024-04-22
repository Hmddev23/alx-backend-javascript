export default function iterateThroughObject(reportWithIterator) {
  const resString = [];

  for (const report of reportWithIterator) {
    resString.push(report);
  }

  return resString.join(' | ');
}
