export default function iterateThroughObject(reportWithIterator) {
  const empl = [];

  for (const employ of reportWithIterator) {
    empl.push(employ);
  }

  return empl.join(' | ');
}
