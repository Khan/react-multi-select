(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectItem = function (_Component) {
    _inherits(SelectItem, _Component);

    function SelectItem() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            hovered: false
        }, _this.onChecked = function (e) {
            var onSelectionChanged = _this.props.onSelectionChanged;


            var checked = e.target.checked;
            onSelectionChanged(checked);
        }, _this.toggleChecked = function () {
            var _this$props = _this.props,
                checked = _this$props.checked,
                onSelectionChanged = _this$props.onSelectionChanged;

            onSelectionChanged(!checked);
        }, _this.handleClick = function (e) {
            var onClick = _this.props.onClick;

            _this.toggleChecked();
            onClick(e);
        }, _this.handleKeypress = function (e) {
            switch (e.which) {
                case 13: // Enter
                case 32:
                    // Space
                    _this.toggleChecked();
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectItem, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.updateFocus();
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.updateFocus();
        }
    }, {
        key: "updateFocus",
        value: function updateFocus() {
            var focused = this.props.focused;


            if (focused && this.itemRef) {
                this.itemRef.focus();
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                option = _props.option,
                checked = _props.checked,
                focused = _props.focused;
            var hovered = this.state.hovered;


            var focusStyle = focused || hovered ? styles.itemContainerHover : undefined;

            return _react2.default.createElement(
                "div",
                {
                    role: "option",
                    "aria-selected": checked,
                    selected: checked,
                    tabIndex: "-1",
                    style: _extends({}, styles.itemContainer, focusStyle),
                    onClick: this.handleClick,
                    ref: function ref(_ref2) {
                        return _this2.itemRef = _ref2;
                    },
                    onKeyDown: this.handleKeypress,
                    onMouseOver: function onMouseOver() {
                        return _this2.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this2.setState({ hovered: false });
                    }
                },
                _react2.default.createElement("input", {
                    type: "checkbox",
                    onChange: this.onChecked,
                    checked: checked,
                    tabIndex: "-1"
                }),
                _react2.default.createElement(
                    "span",
                    { style: styles.label },
                    option.label
                )
            );
        }
    }]);

    return SelectItem;
}(_react.Component);

var styles = {
    itemContainer: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: '#666666',
        cursor: 'pointer',
        display: 'block',
        padding: '8px 10px'
    },
    itemContainerHover: {
        backgroundColor: '#f0f0f0',
        outline: 0
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        cursor: 'default',
        padding: '2px 5px'
    }
};

exports.default = SelectItem;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            expanded: false
        }, _this.handleDocumentClick = function (event) {
            if (_this.wrapper && !_this.wrapper.contains(event.target)) {
                _this.setState({ expanded: false });
            }
        }, _this.handleKeypress = function (e) {
            switch (e.which) {
                case 27:
                    // Escape
                    _this.toggleExpanded(false);
                    break;
                case 38:
                    // Up Arrow
                    _this.toggleExpanded(false);
                    break;
                case 40:
                    // Down Arrow
                    _this.toggleExpanded(true);
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _this.toggleExpanded = function (value) {
            var expanded = _this.state.expanded;


            var newExpanded = value === undefined ? !expanded : !!value;

            _this.setState({ expanded: newExpanded });

            if (!newExpanded && _this.wrapper) {
                _this.wrapper.focus();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            document.addEventListener('touchstart', this.handleDocumentClick);
            document.addEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('touchstart', this.handleDocumentClick);
            document.removeEventListener('click', this.handleDocumentClick);
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var _props = this.props,
                contentComponent = _props.contentComponent,
                contentProps = _props.contentProps;

            return _react2.default.createElement(contentComponent, contentProps);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var expanded = this.state.expanded;
            var children = this.props.children;


            var expandedHeaderStyle = expanded ? styles.dropdownHeaderExpanded : undefined;

            return _react2.default.createElement(
                'div',
                {
                    tabIndex: '0',
                    role: 'combobox',
                    'aria-expanded': expanded,
                    'aria-readonly': 'true',
                    style: styles.dropdownContainer,
                    ref: function ref(_ref2) {
                        return _this2.wrapper = _ref2;
                    },
                    onKeyDown: this.handleKeypress
                },
                _react2.default.createElement(
                    'div',
                    {
                        style: _extends({}, styles.dropdownHeader, expandedHeaderStyle),
                        onClick: function onClick() {
                            return _this2.toggleExpanded();
                        }
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            style: styles.dropdownChildren
                        },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        { style: styles.dropdownArrow },
                        expanded ? _react2.default.createElement('span', { style: styles.dropdownArrowUp }) : _react2.default.createElement('span', { style: styles.dropdownArrowDown })
                    )
                ),
                expanded ? _react2.default.createElement(
                    'div',
                    {
                        style: styles.panelContainer
                    },
                    this.renderPanel()
                ) : ""
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

var styles = {
    dropdownContainer: {
        position: 'relative',
        boxSizing: 'border-box'
    },
    dropdownHeader: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9 #ccc #b3b3b3',
        borderRadius: 4,
        border: '1px solid #ccc',
        color: '#333',
        cursor: 'default',
        display: 'table',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: 36,
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        width: '100%'
    },
    dropdownHeaderExpanded: {
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px'
    },
    dropdownChildren: {
        boxSizing: 'border-box',
        bottom: 0,
        color: '#333',
        left: 0,
        lineHeight: '34px',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteWpace: 'nowrap'
    },
    dropdownArrow: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'table-cell',
        position: 'relative',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 25,
        paddingRight: 5
    },
    dropdownArrowDown: {
        boxSizing: 'border-box',
        borderColor: '#999 transparent transparent',
        borderStyle: 'solid',
        borderWidth: '5px 5px 2.5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative'
    },
    dropdownArrowUp: {
        boxSizing: 'border-box',
        top: '-2px',
        borderColor: 'transparent transparent #999',
        borderStyle: 'solid',
        borderWidth: '0px 5px 5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative'
    },
    panelContainer: {
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderTopColor: '#e6e6e6',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '300px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 1,
        overflowY: 'auto'
    }
};

exports.default = Dropdown;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fuzzyStringMatching = __webpack_require__(4);

var _selectItem = __webpack_require__(1);

var _selectItem2 = _interopRequireDefault(_selectItem);

var _selectList = __webpack_require__(5);

var _selectList2 = _interopRequireDefault(_selectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectPanel = function (_Component) {
    _inherits(SelectPanel, _Component);

    function SelectPanel() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectPanel);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectPanel.__proto__ || Object.getPrototypeOf(SelectPanel)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            searchText: "",
            focusIndex: 0
        }, _this.selectAll = function () {
            var _this$props = _this.props,
                onSelectedChanged = _this$props.onSelectedChanged,
                options = _this$props.options;

            var allValues = options.map(function (o) {
                return o.value;
            });

            onSelectedChanged(allValues);
        }, _this.selectNone = function () {
            var onSelectedChanged = _this.props.onSelectedChanged;


            onSelectedChanged([]);
        }, _this.selectAllChanged = function (checked) {
            if (checked) {
                _this.selectAll();
            } else {
                _this.selectNone();
            }
        }, _this.handleSearchChange = function (e) {
            _this.setState({ searchText: e.target.value });
        }, _this.handleItemClicked = function (index) {
            _this.setState({ focusIndex: index });
        }, _this.clearSearch = function () {
            _this.setState({ searchText: "" });
        }, _this.handleKeypress = function (e) {
            switch (e.which) {
                case 38:
                    // Up Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(-1);
                    break;
                case 40:
                    // Down Arrow
                    if (e.altKey) {
                        return;
                    }

                    _this.updateFocus(1);
                    break;
                default:
                    return;
            }

            e.stopPropagation();
            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectPanel, [{
        key: 'allAreSelected',
        value: function allAreSelected() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected;

            return options.length === selected.length;
        }
    }, {
        key: 'filteredOptions',
        value: function filteredOptions() {
            var searchText = this.state.searchText;
            var options = this.props.options;


            return (0, _fuzzyStringMatching.filterOptions)(options, searchText);
        }
    }, {
        key: 'updateFocus',
        value: function updateFocus(offset) {
            var focusIndex = this.state.focusIndex;
            var options = this.props.options;


            var newFocus = focusIndex + offset;
            newFocus = newFocus < 0 ? 0 : newFocus;
            newFocus = newFocus > options.length ? options.length : newFocus;

            this.setState({ focusIndex: newFocus });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var focusIndex = this.state.focusIndex;


            var selectAllOption = {
                label: "Select All",
                value: ""
            };
            return _react2.default.createElement(
                'div',
                {
                    style: styles.panel,
                    role: 'listbox',
                    onKeyDown: this.handleKeypress
                },
                _react2.default.createElement(
                    'div',
                    { style: styles.searchContainer },
                    _react2.default.createElement('input', {
                        placeholder: 'Search',
                        type: 'text',
                        onChange: this.handleSearchChange,
                        style: styles.search
                    })
                ),
                _react2.default.createElement(_selectItem2.default, {
                    focused: focusIndex === 0,
                    checked: this.allAreSelected(),
                    option: selectAllOption,
                    onSelectionChanged: this.selectAllChanged,
                    onClick: function onClick() {
                        return _this2.handleItemClicked(0);
                    }
                }),
                _react2.default.createElement(_selectList2.default, _extends({}, this.props, {
                    options: this.filteredOptions(),
                    focusIndex: focusIndex - 1,
                    onClick: function onClick(e, index) {
                        return _this2.handleItemClicked(index + 1);
                    }
                }))
            );
        }
    }]);

    return SelectPanel;
}(_react.Component);

var styles = {
    panel: {
        boxSizing: 'border-box'
    },
    searchContainer: {
        width: "100%",
        boxSizing: 'border-box',
        padding: "0.5em"
    },
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "3px",

        boxSizing: 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid #dee2e4',
        padding: '10px',
        width: "100%"
    }
};

exports.default = SelectPanel;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* TODO(csilvers): fix these lint errors (http://eslint.org/docs/rules): */
/* eslint-disable brace-style */
/* To fix, remove an entry above, run "make linc", and fix errors. */

// A collection of string matching algorithms used for school and filter
// matching in the LearnStorm signup process.

// Filters react-select options and sorts by similarity to a search filter.
// Handles partial matches, ex. searching for Waberg High will find Raoul
// Wallenberg Traditional High School. Case insensitive. Ignores
// nonalphanumeric characters, and treats unaccented and Irish accented
// characters as matching (ex, Í and I).
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
function typeaheadSimilarity(a, b) {
    var aLength = a.length;
    var bLength = b.length;
    var table = [];

    if (!aLength || !bLength) {
        return;
    }

    // Early exit if `a` startsWith `b`; these will be scored higher than any
    // other options with the same `b` (filter string), with a preference for
    // shorter `a` strings (option labels).
    if (a.indexOf(b) === 0) {
        return bLength + 1 / aLength;
    }

    // TODO(riley): It would be nice if subsequence *proximity* was factored
    //              in. For example, a filter string of "AL" should match
    //              "wALnut grove" before it matches "wAtsonviLle"

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

    // TODO(riley): If we end up wanting to highlight matched characters in the
    // results list, we can add a backtrack function here to return the full
    // subsequence.
    return table[aLength][bLength];
}

// Returns the Levenshtein distance between two strings.
// NOTE(riley): The Jaro-Winkler distance also worked well and is slightly
//              more performant. Levenshtein seems to match more
//              reliably, which is the important metric here.
function fullStringDistance(a, b) {
    var aLength = a.length;
    var bLength = b.length;
    var table = [];

    if (!aLength) {
        return bLength;
    }
    if (!bLength) {
        return aLength;
    }

    // Initialize the table axes:
    //
    //    0 1 2 3 4 ... bLength
    //    1
    //    2
    //
    //   ...
    //
    // aLength
    //
    for (var x = 0; x <= aLength; ++x) {
        table[x] = [x];
    }
    for (var y = 0; y <= bLength; ++y) {
        table[0][y] = y;
    }

    // Populate the rest of the table with a dynamic programming algorithm.
    for (var _x2 = 1; _x2 <= aLength; ++_x2) {
        for (var _y2 = 1; _y2 <= bLength; ++_y2) {
            table[_x2][_y2] = a[_x2 - 1] === b[_y2 - 1] ? table[_x2 - 1][_y2 - 1] : 1 + Math.min(table[_x2 - 1][_y2], // Substitution,
            table[_x2][_y2 - 1], // insertion,
            table[_x2 - 1][_y2 - 1]); // and deletion.
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
// TODO(riley): Open this up to the whole team.
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

module.exports = {
    cleanUpText: cleanUpText,
    filterOptions: filterOptions,
    fullStringDistance: fullStringDistance,
    typeaheadSimilarity: typeaheadSimilarity
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _selectItem = __webpack_require__(1);

var _selectItem2 = _interopRequireDefault(_selectItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectList = function (_Component) {
    _inherits(SelectList, _Component);

    function SelectList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, SelectList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SelectList.__proto__ || Object.getPrototypeOf(SelectList)).call.apply(_ref, [this].concat(args))), _this), _this.handleSelectionChanged = function (option, checked) {
            var _this$props = _this.props,
                selected = _this$props.selected,
                onSelectedChanged = _this$props.onSelectedChanged;


            if (checked) {
                onSelectedChanged([].concat(_toConsumableArray(selected), [option.value]));
            } else {
                var _index = selected.indexOf(option.value);
                var removed = [].concat(_toConsumableArray(selected.slice(0, _index)), _toConsumableArray(selected.slice(_index + 1)));
                onSelectedChanged(removed);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(SelectList, [{
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            var _props = this.props,
                options = _props.options,
                selected = _props.selected,
                focusIndex = _props.focusIndex,
                onClick = _props.onClick;


            var isSelected = function isSelected(value) {
                return selected.includes(value);
            };

            return options.map(function (o, i) {
                return _react2.default.createElement(_selectItem2.default, {
                    focused: focusIndex === i,
                    key: i,
                    option: o,
                    onSelectionChanged: function onSelectionChanged(c) {
                        return _this2.handleSelectionChanged(o, c);
                    },
                    checked: isSelected(o.value),
                    onClick: function (_onClick) {
                        function onClick(_x) {
                            return _onClick.apply(this, arguments);
                        }

                        onClick.toString = function () {
                            return _onClick.toString();
                        };

                        return onClick;
                    }(function (e) {
                        return onClick(e, i);
                    })
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.renderItems()
            );
        }
    }]);

    return SelectList;
}(_react.Component);

exports.default = SelectList;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _dropdown = __webpack_require__(2);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _selectPanel = __webpack_require__(3);

var _selectPanel2 = _interopRequireDefault(_selectPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSelect = function (_Component) {
    _inherits(MultiSelect, _Component);

    function MultiSelect() {
        _classCallCheck(this, MultiSelect);

        return _possibleConstructorReturn(this, (MultiSelect.__proto__ || Object.getPrototypeOf(MultiSelect)).apply(this, arguments));
    }

    _createClass(MultiSelect, [{
        key: 'getSelectedText',
        value: function getSelectedText() {
            var _props = this.props,
                options = _props.options,
                selected = _props.selected;


            var selectedOptions = selected.map(function (s) {
                return options.find(function (o) {
                    return o.value === s;
                });
            });

            var selectedLabels = selectedOptions.map(function (s) {
                return s ? s.label : "";
            });

            return selectedLabels.join(", ");
        }
    }, {
        key: 'renderHeader',
        value: function renderHeader() {
            var _props2 = this.props,
                options = _props2.options,
                selected = _props2.selected,
                valueRenderer = _props2.valueRenderer;


            var noneSelected = selected.length === 0;
            var allSelected = selected.length === options.length;

            var customText = valueRenderer ? valueRenderer(selected, options) : undefined;

            if (noneSelected) {
                return _react2.default.createElement(
                    'span',
                    { style: styles.noneSelected },
                    customText || "Select some items..."
                );
            }

            if (customText) {
                return _react2.default.createElement(
                    'span',
                    null,
                    customText
                );
            }

            return _react2.default.createElement(
                'span',
                null,
                allSelected ? "All items were selected" : this.getSelectedText()
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                options = _props3.options,
                selected = _props3.selected,
                onSelectedChanged = _props3.onSelectedChanged;


            return _react2.default.createElement(
                _dropdown2.default,
                {
                    contentComponent: _selectPanel2.default,
                    contentProps: { options: options, selected: selected, onSelectedChanged: onSelectedChanged }
                },
                this.renderHeader()
            );
        }
    }]);

    return MultiSelect;
}(_react.Component);

var styles = {
    noneSelected: {
        color: "#aaa"
    }
};

exports.default = MultiSelect;

/***/ })
/******/ ])));