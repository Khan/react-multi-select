'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _selectItem = require('./select-item.js');

var _selectItem2 = _interopRequireDefault(_selectItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an unadorned list of SelectItem (s).
 */


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
                onSelectedChanged = _this$props.onSelectedChanged,
                disabled = _this$props.disabled;


            if (disabled) {
                true;
            }

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
                ItemRenderer = _props.ItemRenderer,
                options = _props.options,
                selected = _props.selected,
                focusIndex = _props.focusIndex,
                onClick = _props.onClick,
                disabled = _props.disabled;


            return options.map(function (o, i) {
                return _react2.default.createElement(
                    'li',
                    { style: styles.listItem, key: o.hasOwnProperty("key") ? o.key : i },
                    _react2.default.createElement(_selectItem2.default, {
                        focused: focusIndex === i,
                        option: o,
                        onSelectionChanged: function onSelectionChanged(c) {
                            return _this2.handleSelectionChanged(o, c);
                        },
                        checked: selected.includes(o.value),
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
                        }),
                        ItemRenderer: ItemRenderer,
                        disabled: disabled
                    })
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                {
                    className: 'select-list',
                    style: styles.list
                },
                this.renderItems()
            );
        }
    }]);

    return SelectList;
}(_react.Component);

var styles = {
    list: {
        margin: 0,
        paddingLeft: 0
    },
    listItem: {
        listStyle: 'none'
    }
};

exports.default = SelectList;