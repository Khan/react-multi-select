// @flow
const strings = {
    selectSomeItems: "Select some items...",
    allItemsAreSelected: "All items are selected",
    selectAll: "Select All",
    search: "Search",
};

function getString(key: string, overrideStrings: ?{[string]: string}): string {
    if (overrideStrings && overrideStrings[key]) {
        return overrideStrings[key];
    }

    return strings[key];
}

export default getString;
