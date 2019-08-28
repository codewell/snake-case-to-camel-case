const initialCaps = require('./src/initialCaps');
const snakeCaseToCamelCase = require('./src');

/**
 * initialCaps
 */
test('Single word lower case', () => {
  expect(initialCaps('string')).toBe('String')
});

test('Single word uppercase', () => {
  expect(initialCaps('STRING')).toBe('String')
});

test('Single word mix inital lowercase', () => {
  expect(initialCaps('sTriNG')).toBe('String')
});

test('Single word mix inital lowercase', () => {
  expect(initialCaps('StRIng')).toBe('String')
});

/**
 * snake_case to camelCase
 */
test('some_string -> someString', () => {
  expect(snakeCaseToCamelCase('some_string')).toBe('someString')
});

test('SOME_STRING -> someString', () => {
  expect(snakeCaseToCamelCase('SOME_STRING')).toBe('someString')
});

test('some_STRING -> someString', () => {
  expect(snakeCaseToCamelCase('some_STRING')).toBe('someString')
});

test('SOME_string -> someString', () => {
  expect(snakeCaseToCamelCase('SOME_string')).toBe('someString')
});