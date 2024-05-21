/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
  /*
  ? CHEGG RECOMMENDED SOLUTION 1
  let output = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (i !== j && A[i] + A[j] === N) {
        output.push([A[i], A[j]]);
      }
    }
  }
  return output;
*/
  // ? CHEGG RECOMMENDED SOLUTION 2
  let numbers = new Map();
  let solution = new Map();

  for (let e in A) {
    numbers.set(A[e], e);
  }

  for (let e in A) {
    let diff = N - A[e];
    if (diff != A[e]) {
      if (numbers.has(diff)) {
        let pair = [A[e], diff].sort((a, b) => a - b); // ? sort the pair in ascending order
        solution.set(pair[0], pair[1]); // ? add the sorted pair to the solution
      }
    }
  }

  return Array.from(solution, ([a, b]) => [a, b]); // ? convert the Map to an array of pairs
}

module.exports = sumPairs;
