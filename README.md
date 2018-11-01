To include in your project:

import {removeByIndex} from '@writetome51/array-remove-by-index';

removeByIndex(index, array): void

Removes single item from array, identified by a passed index.

let arr = [1,2,3,4,5,6];

removeByIndex(2, arr); //  arr now contains [1,2,4,5,6]

You can also use a negative index:

removeByIndex(-2, arr); // arr now contains [1,2,4,6]
