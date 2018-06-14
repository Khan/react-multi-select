'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loadingIndicator = require('./loading-indicator.js');

var _loadingIndicator2 = _interopRequireDefault(_loadingIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */


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
            expanded: false,
            hasFocus: false
        }, _this.handleDocumentClick = function (event) {
            if (_this.wrapper && !_this.wrapper.contains(event.target)) {
                _this.setState({ expanded: false });
            }
        }, _this.handleKeyDown = function (e) {
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
        }, _this.handleFocus = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (e.target === _this.wrapper && !hasFocus) {
                _this.setState({ hasFocus: true });
            }
        }, _this.handleBlur = function (e) {
            var hasFocus = _this.state.hasFocus;


            if (hasFocus) {
                _this.setState({ hasFocus: false });
            }
        }, _this.handleMouseEnter = function (e) {
            _this.handleHover(true);
        }, _this.handleMouseLeave = function (e) {
            _this.handleHover(false);
        }, _this.handleHover = function (toggleExpanded) {
            var shouldToggleOnHover = _this.props.shouldToggleOnHover;


            if (shouldToggleOnHover) {
                _this.toggleExpanded(toggleExpanded);
            }
        }, _this.toggleExpanded = function (value) {
            var isLoading = _this.props.isLoading;
            var expanded = _this.state.expanded;


            if (isLoading) {
                return;
            }

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
            document.addEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener('touchstart', this.handleDocumentClick);
            document.removeEventListener('mousedown', this.handleDocumentClick);
        }
    }, {
        key: 'renderPanel',
        value: function renderPanel() {
            var _props = this.props,
                ContentComponent = _props.contentComponent,
                contentProps = _props.contentProps;


            return _react2.default.createElement(
                'div',
                {
                    className: 'dropdown-content',
                    style: styles.panelContainer
                },
                _react2.default.createElement(ContentComponent, contentProps)
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                expanded = _state.expanded,
                hasFocus = _state.hasFocus;
            var _props2 = this.props,
                children = _props2.children,
                isLoading = _props2.isLoading,
                disabled = _props2.disabled;


            var expandedHeaderStyle = expanded ? styles.dropdownHeaderExpanded : undefined;

            var focusedHeaderStyle = hasFocus ? styles.dropdownHeaderFocused : undefined;

            var arrowStyle = expanded ? styles.dropdownArrowUp : styles.dropdownArrowDown;

            var focusedArrowStyle = hasFocus ? styles.dropdownArrowDownFocused : undefined;

            var headingStyle = _extends({}, styles.dropdownChildren, disabled ? styles.disabledDropdownChildren : {});

            return _react2.default.createElement(
                'div',
                {
                    className: 'dropdown',
                    tabIndex: '0',
                    role: 'combobox',
                    'aria-expanded': expanded,
                    'aria-readonly': 'true',
                    'aria-disabled': disabled,
                    style: styles.dropdownContainer,
                    ref: function ref(_ref2) {
                        return _this2.wrapper = _ref2;
                    },
                    onKeyDown: this.handleKeyDown,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave
                },
                _react2.default.createElement(
                    'div',
                    {
                        className: 'dropdown-heading',
                        style: _extends({}, styles.dropdownHeader, expandedHeaderStyle, focusedHeaderStyle),
                        onClick: function onClick() {
                            return _this2.toggleExpanded();
                        }
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'dropdown-heading-value',
                            style: headingStyle
                        },
                        children
                    ),
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'dropdown-heading-loading-container',
                            style: styles.loadingContainer
                        },
                        isLoading && _react2.default.createElement(_loadingIndicator2.default, null)
                    ),
                    _react2.default.createElement(
                        'span',
                        {
                            className: 'dropdown-heading-dropdown-arrow',
                            style: styles.dropdownArrow
                        },
                        _react2.default.createElement('span', { style: _extends({}, arrowStyle, focusedArrowStyle)
                        })
                    )
                ),
                expanded && this.renderPanel()
            );
        }
    }]);

    return Dropdown;
}(_react.Component);

var focusColor = '#78c008';

var styles = {
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
    dropdownArrowDownFocused: {
        borderColor: focusColor + ' transparent transparent'
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
    disabledDropdownChildren: {
        opacity: 0.5
    },
    dropdownContainer: {
        position: 'relative',
        boxSizing: 'border-box',
        outline: 'none'
    },
    dropdownHeader: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9 #ccc #b3b3b3',
        borderRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
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
    dropdownHeaderFocused: {
        borderColor: focusColor,
        boxShadow: 'none'
    },
    dropdownHeaderExpanded: {
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px'
    },
    loadingContainer: {
        cursor: 'pointer',
        display: 'table-cell',
        verticalAlign: 'middle',
        width: '16px'
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