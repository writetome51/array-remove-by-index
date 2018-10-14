"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveItem_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveItem");
// index can be negative or positive.
function removeItem(index, array) {
    getAndRemoveItem_1.getAndRemoveItem(index, array);
}
exports.removeItem = removeItem;
