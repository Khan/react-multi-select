"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * This component represents an individual item in the multi-select drop-down
 */


var DefaultItemRenderer = function (_Component) {
    _inherits(DefaultItemRenderer, _Component);

    function DefaultItemRenderer() {
        _classCallCheck(this, DefaultItemRenderer);

        return _possibleConstructorReturn(this, (DefaultItemRenderer.__proto__ || Object.getPrototypeOf(DefaultItemRenderer)).apply(this, arguments));
    }

    _createClass(DefaultItemRenderer, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                checked = _props.checked,
                option = _props.option,
                onClick = _props.onClick,
                disabled = _props.disabled;


            var style = _extends({}, styles.label, disabled ? styles.labelDisabled : undefined);

            return _react2.default.createElement(
                "span",
                {
                    className: "item-renderer"
                },
                _react2.default.createElement("input", {
                    type: "checkbox",
                    onChange: onClick,
                    checked: checked,
                    tabIndex: "-1",
                    disabled: disabled
                }),
                _react2.default.createElement(
                    "span",
                    { style: style },
                    option.label
                )
            );
        }
    }]);

    return DefaultItemRenderer;
}(_react.Component);

var SelectItem = function (_Component2) {
    _inherits(SelectItem, _Component2);

    function SelectItem() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, SelectItem);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
            hovered: false
        }, _this2.onChecked = function (e) {
            var onSelectionChanged = _this2.props.onSelectionChanged;
            var checked = e.target.checked;


            onSelectionChanged(checked);
        }, _this2.toggleChecked = function () {
            var _this2$props = _this2.props,
                checked = _this2$props.checked,
                onSelectionChanged = _this2$props.onSelectionChanged;

            onSelectionChanged(!checked);
        }, _this2.handleClick = function (e) {
            var onClick = _this2.props.onClick;

            _this2.toggleChecked();
            onClick(e);
        }, _this2.handleKeyDown = function (e) {
            switch (e.which) {
                case 13: // Enter
                case 32:
                    // Space
                    _this2.toggleChecked();
                    break;
                default:
                    return;
            }

            e.preventDefault();
        }, _temp), _possibleConstructorReturn(_this2, _ret);
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
            var _this3 = this;

            var _props2 = this.props,
                ItemRenderer = _props2.ItemRenderer,
                option = _props2.option,
                checked = _props2.checked,
                focused = _props2.focused,
                disabled = _props2.disabled;
            var hovered = this.state.hovered;


            var focusStyle = focused || hovered ? styles.itemContainerHover : undefined;

            return _react2.default.createElement(
                "label",
                {
                    className: "select-item",
                    role: "option",
                    "aria-selected": checked,
                    selected: checked,
                    tabIndex: "-1",
                    style: _extends({}, styles.itemContainer, focusStyle),
                    ref: function ref(_ref2) {
                        return _this3.itemRef = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onMouseOver: function onMouseOver() {
                        return _this3.setState({ hovered: true });
                    },
                    onMouseOut: function onMouseOut() {
                        return _this3.setState({ hovered: false });
                    }
                },
                _react2.default.createElement(ItemRenderer, {
                    option: option,
                    checked: checked,
                    onClick: this.handleClick,
                    disabled: disabled
                })
            );
        }
    }]);

    return SelectItem;
}(_react.Component);

SelectItem.defaultProps = {
    ItemRenderer: DefaultItemRenderer
};


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
        backgroundColor: '#ebf5ff',
        outline: 0
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        cursor: 'default',
        padding: '2px 5px'
    },
    labelDisabled: {
        opacity: 0.5
    }
};

exports.default = SelectItem;