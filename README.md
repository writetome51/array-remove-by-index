# removeByIndex(index, array): void

Removes item, identified by `index`, from `array`.  
`index` can be negative or positive.


Examples:
```
let arr = [1,2,3,4,5,6];
removeByIndex(2, arr); // arr is now [1,2,4,5,6]

let arr = [1,2,3,4,5,6];
removeByIndex(-2, arr); // arr is now [1,2,3,4,6]
```

## Installation
`npm i  @writetome51/array-remove-by-index`

## Loading
```
// if using TypeScript:
import {removeByIndex} from '@writetome51/array-remove-by-index';
// if using ES5 JavaScript:
var removeByIndex = require('@writetome51/array-remove-by-index').removeByIndex;
```