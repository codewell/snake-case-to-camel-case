# snake_case -> camelCase
Transform `"some_string"` into `"someString"`

## Installation
```javascript
npm install @codewell/snake-case-to-camel-case
```

## Basic usage
```JavaScript
import snakeCaseToCamelCase from '@codewell/snake-case-to-camel-case';

const some_string = 'some_string';

const someString = snakeCaseToCamelCase(some_string);

console.log(someString); // => "someString"
```

