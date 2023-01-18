const wordSearch = (letters, word) => {
  if (!letters.length) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  for (let i = 0; i < letters[0].length; i++) {
    let col = letters.map(row => row[i]).join("");
    if (col.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
