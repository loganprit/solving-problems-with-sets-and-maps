/**
 * return a Map of the unique letters and arrays of words that are made up of those letters
 * @param {array} words An array  of words
 */
function sameLetters(words) {
  // ? CHEGG RECOMMENDED SOLUTION
  let results = new Map();

  for (let word of words) {
    let lowercaseWord = word.toLowerCase();
    let letters = new Set(lowercaseWord.split(""));
    let key = Array.from(letters).sort().join("");
    if (results.has(key)) {
      results.get(key).push(word);
    } else {
      results.set(key, [word]);
    }
  }
  return results;
}

module.exports = sameLetters;
