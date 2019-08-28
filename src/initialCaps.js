/**
 * Make "WORD" into "Word"
 * @param {string} str - "WORD"
 * @returns {string} - "Word"
 */
const initialCaps = str => `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;

module.exports = initialCaps;
