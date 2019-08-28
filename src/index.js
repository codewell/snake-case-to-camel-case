const initialCaps = require('./initialCaps');

/**
 * Make a SOME_STRING into someString
 * @param {string} actionType - "SOME_STRING"
 * @returns {string} - "someString"
 */
const snakeCaseToCamelCase = str => str
  .split('_')
  .map((part, index) => {
    if (index === 0) {
      return part.toLowerCase();
    }
    return initialCaps(part);
  })
  .join('');

module.exports = snakeCaseToCamelCase;
