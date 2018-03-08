'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuzzyMatchUtils = require('fuzzy-match-utils');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectItem = require('./select-item.js');

var _selectItem2 = _interopRequireDefault(_selectItem);

var _selectList = require('./select-list.js');

var _selectList2 = _interopRequireDefault(_selectList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */


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
            searchHasFocus: false,
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
            _this.setState({
                searchText: e.target.value,
                focusIndex: -1
            });
        }, _this.handleItemClicked = function (index) {
            _this.setState({ focusIndex: index });
        }, _this.clearSearch = function () {
            _this.setState({ searchText: "" });
        }, _this.handleKeyDown = function (e) {
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
        }, _this.handleSearchFocus = function (searchHasFocus) {
            _this.setState({
                searchHasFocus: searchHasFocus,
                focusIndex: -1
            });
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
            var _props2 = this.props,
                options = _props2.options,
                customFilterOptions = _props2.filterOptions;


            return customFilterOptions ? customFilterOptions(options, searchText) : (0, _fuzzyMatchUtils.filterOptions)(options, searchText);
        }
    }, {
        key: 'updateFocus',
        value: function updateFocus(offset) {
            var focusIndex = this.state.focusIndex;
            var options = this.props.options;


            var newFocus = focusIndex + offset;
            newFocus = Math.max(0, newFocus);
            newFocus = Math.min(newFocus, options.length);

            this.setState({ focusIndex: newFocus });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                focusIndex = _state.focusIndex,
                searchHasFocus = _state.searchHasFocus;
            var _props3 = this.props,
                ItemRenderer = _props3.ItemRenderer,
                selectAllLabel = _props3.selectAllLabel,
                disabled = _props3.disabled,
                disableSearch = _props3.disableSearch,
                hasSelectAll = _props3.hasSelectAll;


            var selectAllOption = {
                label: selectAllLabel || "Select All",
                value: ""
            };

            var focusedSearchStyle = searchHasFocus ? styles.searchFocused : undefined;

            return _react2.default.createElement(
                'div',
                {
                    className: 'select-panel',
                    style: styles.panel,
                    role: 'listbox',
                    onKeyDown: this.handleKeyDown
                },
                !disableSearch && _react2.default.createElement(
                    'div',
                    { style: styles.searchContainer },
                    _react2.default.createElement('input', {
                        placeholder: 'Search',
                        type: 'text',
                        onChange: this.handleSearchChange,
                        style: _extends({}, styles.search, focusedSearchStyle),
                        onFocus: function onFocus() {
                            return _this2.handleSearchFocus(true);
                        },
                        onBlur: function onBlur() {
                            return _this2.handleSearchFocus(false);
                        }
                    })
                ),
                hasSelectAll && _react2.default.createElement(_selectItem2.default, {
                    focused: focusIndex === 0,
                    checked: this.allAreSelected(),
                    option: selectAllOption,
                    onSelectionChanged: this.selectAllChanged,
                    onClick: function onClick() {
                        return _this2.handleItemClicked(0);
                    },
                    ItemRenderer: ItemRenderer,
                    disabled: disabled
                }),
                _react2.default.createElement(_selectList2.default, _extends({}, this.props, {
                    options: this.filteredOptions(),
                    focusIndex: focusIndex - 1,
                    onClick: function onClick(e, index) {
                        return _this2.handleItemClicked(index + 1);
                    },
                    ItemRenderer: ItemRenderer,
                    disabled: disabled
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
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "3px",

        boxSizing: 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid',
        borderColor: '#dee2e4',
        padding: '10px',
        width: "100%",
        outline: "none"
    },
    searchFocused: {
        borderColor: "#78c008"
    },
    searchContainer: {
        width: "100%",
        boxSizing: 'border-box',
        padding: "0.5em"
    }
};

exports.default = SelectPanel;