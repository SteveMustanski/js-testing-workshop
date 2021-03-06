const expect = require('chai').expect;

// take a string and return title case
function titleCase (title) {
  let words = title.split(' ');
  let titleCaseWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });

  return titleCaseWords.join(' ');
};

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');

