"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_item_1 = require("@writetome51/array-get-and-remove-item");
// index can be negative or positive.
function removeItem(index, array) {
    array_get_and_remove_item_1.getAndRemoveItem(index, array);
}
exports.removeItem = removeItem;
