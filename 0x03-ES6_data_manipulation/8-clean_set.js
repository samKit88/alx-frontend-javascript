export default function cleanSet(set, startString) {
  if (startString === undefined) return '';
  const startSet = [];
  if (
    set.constructor === Set
    && startString.constructor === String
    && startString
  ) {
    set.forEach((s) => {
      if ((typeof s === 'string') && (s.startsWith(startString))) {
        startSet.push(s.slice(startString.length));
      }
    });
  }

  return startSet.join('-');
}
