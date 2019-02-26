"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_by_index_1 = require("@writetome51/array-get-and-remove-by-index");
// index can be negative or positive.
function removeByIndex(index, array) {
    array_get_and_remove_by_index_1.getAndRemoveByIndex(index, array);
}
exports.removeByIndex = removeByIndex;
