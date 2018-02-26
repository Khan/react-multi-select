"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/**
 * A simple loading indicator, modeled after react-select.  Since react styles
 * don't support animations, hack it so we inject the keyframe animation
 * into the document.
 */


var STYLESHEET_NAME = "__react-multi-select_style_inject__";

function findStylesheet() {
    var styleSheet = Array.from(document.styleSheets).find(function (stylesheet) {
        return stylesheet.title === STYLESHEET_NAME;
    });

    // upcast as CSSStyleSheet
    var cssStylesheet = styleSheet;

    return cssStylesheet;
}

function registerStylesheet(css) {
    try {
        if (findStylesheet()) {
            return;
        }

        var style = document.createElement("style");
        style.setAttribute("title", STYLESHEET_NAME);
        document.head && document.head.appendChild(style);

        var stylesheet = findStylesheet();
        if (!stylesheet) {
            // Someting bad happened.  Abort!
            return;
        }

        stylesheet.insertRule(css, 0);
    } catch (e) {}
}

var LoadingIndicator = function (_Component) {
    _inherits(LoadingIndicator, _Component);

    function LoadingIndicator() {
        _classCallCheck(this, LoadingIndicator);

        return _possibleConstructorReturn(this, (LoadingIndicator.__proto__ || Object.getPrototypeOf(LoadingIndicator)).apply(this, arguments));
    }

    _createClass(LoadingIndicator, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            // React styles don't support adding keyframe rules.  Create a
            // stylesheet and inject the keyframe animarion into it.
            registerStylesheet(keyFrames);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement("span", {
                className: "loading-indicator",
                style: styles.loading
            });
        }
    }]);

    return LoadingIndicator;
}(_react.Component);

LoadingIndicator.propTypes = {};


var keyFrames = "\n@keyframes react-multi-select_loading-spin {\n    to {\n        transform: rotate(1turn);\n    }\n}\n";

var styles = {
    loading: {
        "animation": "react-multi-select_loading-spin 400ms infinite linear",
        "width": "16px",
        "height": "16px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: "2px solid #ccc",
        borderRightColor: "#333",
        display: "inline-block",
        position: "relative",
        verticalAlign: "middle"
    }
};

exports.default = LoadingIndicator;