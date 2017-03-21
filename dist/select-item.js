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