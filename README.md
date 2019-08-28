# snake_case -> camelCase
Transform `"some_string"` into `"someString"``

## Installation
```javascript
npm install @fippli/snake-case-to-camel-case
```

## Basic usage
```javascript
import snakeCaseToCamelCase from '@fippli/snake-case-to-camel-case';

const MY_STRING = 'MY_STRING';

const myString = snakeCaseToCamelCase(MY_STRING);

console.log(myString); // => "myString"
```

