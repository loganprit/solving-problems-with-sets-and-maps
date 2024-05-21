function intersection(a, b) {
  /*
? CHEGG RECOMMENDED SOLUTION 1
  let result = [];

  for (let element of a) {
    if (b.includes(element) && !result.includes(element)) {
      result.push(element);
    }
  }

  return result;
  
? CHEGG RECOMMENDED SOLUTION 2
  let map = new Map();
  let set = new Set();

  for (let element of a) {
    map.set(element, true);
  }

  for (let element of b) {
    if (map.has(element)) {
      set.add(element);
    }
  }

  return Array.from(set);
  */

  // Solution from Copilot
  return [...new Set(a.filter((element) => b.includes(element)))];
}

module.exports = intersection;
