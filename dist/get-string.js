"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var strings = {
    selectSomeItems: "Select some items...",
    allItemsAreSelected: "All items are selected",
    selectAll: "Select All",
    search: "Search"
};

function getString(key, overrideStrings) {
    if (overrideStrings && overrideStrings[key]) {
        return overrideStrings[key];
    }

    return strings[key];
}

exports.default = getString;