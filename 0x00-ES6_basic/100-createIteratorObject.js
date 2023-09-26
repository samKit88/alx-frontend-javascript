export default function createIteratorObject(report) {
  const nameExt = Object.values(report.allEmployees);
  const toReturn = [];

  function getNames(names) {
    for (let t = 0; t < names.length; t += 1) {
      if (names[t].constructor !== String) {
        getNames(names[t]);
      } else toReturn.push(names[t]);
    }
  }
  getNames(nameExt);
  return toReturn;
}
