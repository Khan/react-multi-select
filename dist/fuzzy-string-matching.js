'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


function filterOptions(options, filter) {
    // If the filter is blank, return the full list of options.
    if (!filter) {
        return options;
    }

    var cleanFilter = cleanUpText(filter);
    return options
    // Filter out undefined or null options.
    .filter(function (_ref) {
        var label = _ref.label,
            value = _ref.value;
        return label != null && value != null;
    })
    // Create a {score, option} pair for each option based on name
    // similarity to the filter text.
    .map(function (option) {
        return {
            option: option,
            score: typeaheadSimilarity(cleanUpText(option.label), cleanFilter)
        };
    })
    // Only include matches of the entire substring, with a slight
    // affordance for transposition or extra characters.
    .filter(function (pair) {
        return pair.score >= cleanFilter.length - 2;
    })
    // Sort 'em by order of their score.
    .sort(function (a, b) {
        return b.score - a.score;
    })
    // ...and grab the original options back out of their pairs.
    .map(function (pair) {
        return pair.option;
    });
}

// Scores the similarity between two strings by returning the length of the
// longest common subsequence. Intended for comparing strings of different
// lengths; for example, when matching a typeahead search input with a school
// name.
//
// Meant for use in an instant search box where results are being fetched
// as a user is typing.

// A collection of string matching algorithms used for school and filter
// matching in the LearnStorm signup process.

// Filters react-select options and sorts by similarity to a search filter.
// Handles partial matches, ex. searching for Waberg High will find Raoul
// Wallenberg Traditional High School. Case insensitive. Ignores
// nonalphanumeric characters, and treats unaccented and Irish accented
// characters as matching (ex, Í and I).

function typeaheadSimilarity(a, b) {
    var aLength = a.length;
    var bLength = b.length;
    var table = [];

    if (!aLength || !bLength) {
        return 0;
    }

    // Early exit if `a` startsWith `b`; these will be scored higher than any
    // other options with the same `b` (filter string), with a preference for
    // shorter `a` strings (option labels).
    if (a.indexOf(b) === 0) {
        return bLength + 1 / aLength;
    }

    // Initialize the table axes:
    //
    //    0 0 0 0 ... bLength
    //    0
    //    0
    //
    //   ...
    //
    // aLength
    //
    for (var x = 0; x <= aLength; ++x) {
        table[x] = [0];
    }
    for (var y = 0; y <= bLength; ++y) {
        table[0][y] = 0;
    }

    // Populate the rest of the table with a dynamic programming algorithm.
    for (var _x = 1; _x <= aLength; ++_x) {
        for (var _y = 1; _y <= bLength; ++_y) {
            table[_x][_y] = a[_x - 1] === b[_y - 1] ? 1 + table[_x - 1][_y - 1] : Math.max(table[_x][_y - 1], table[_x - 1][_y]);
        }
    }

    return table[aLength][bLength];
}

// Convert accented characters to basic form, remove non-alphanumeric
// characters, and convert all letters to uppercase.
// ex. 'Scoil Bhríde Primary School' becomes 'SCOILBHRIDEPRIMARYSCHOOL'
function cleanUpText(name) {
    if (!name) {
        return '';
    }

    // Uppercase and remove all non-alphanumeric, non-accented characters.
    // Also remove underscores.
    name = name.toUpperCase().replace(/((?=[^\u00E0-\u00FC])\W)|_/g, '');

    // Replace all strings in `stringSubstitutions` with their standardized
    // counterparts.
    return Object.keys(stringSubstitutions).reduce(function (unaccented, character) {
        var accented = new RegExp(character, 'g');
        return unaccented.replace(accented, stringSubstitutions[character]);
    }, name);
}

// A collection of strings with multiple spellings or variations that we expect
// to match, for example accented characters or abbreviatable words.
var stringSubstitutions = {
    'Á': 'A',
    'À': 'A',
    'É': 'E',
    'È': 'E',
    'Ê': 'E',
    'Í': 'I',
    'Î': 'I',
    'Ì': 'I',
    'Ó': 'O',
    'Ö': 'O',
    'Ú': 'U',
    'Ù': 'U',
    'Ü': 'U',
    'SAINT': 'ST',
    'MOUNT': 'MT',
    'PARK': 'PK',
    'AVENUE': 'AVE',
    'BOULEVARD': 'BLVD',
    'DRIVE': 'DR',
    'ROAD': 'RD',
    'STREET': 'ST',
    '\\\.': ''
};

exports.filterOptions = filterOptions;