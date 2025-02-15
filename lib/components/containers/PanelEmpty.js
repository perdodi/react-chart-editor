"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PanelMessage = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _plotlyIcons = require("plotly-icons");

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PanelMessage =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelMessage, _Component);

  function PanelMessage() {
    _classCallCheck(this, PanelMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(PanelMessage).apply(this, arguments));
  }

  _createClass(PanelMessage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          Icon = _this$props.icon;
      var heading = this.props.heading || '';
      return _react.default.createElement("div", {
        className: "panel__empty__message"
      }, Boolean(Icon) && _react.default.createElement("div", {
        className: "panel__empty__message__icon"
      }, _react.default.createElement(Icon, null)), Boolean(heading) && _react.default.createElement("div", {
        className: "panel__empty__message__heading"
      }, heading), _react.default.createElement("div", {
        className: "panel__empty__message__content"
      }, children));
    }
  }]);

  return PanelMessage;
}(_react.Component);

exports.PanelMessage = PanelMessage;
PanelMessage.defaultProps = {
  icon: _plotlyIcons.ChartLineIcon
};
PanelMessage.propTypes = {
  heading: _propTypes.default.string,
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};

var PanelEmpty =
/*#__PURE__*/
function (_Component2) {
  _inherits(PanelEmpty, _Component2);

  function PanelEmpty() {
    _classCallCheck(this, PanelEmpty);

    return _possibleConstructorReturn(this, _getPrototypeOf(PanelEmpty).apply(this, arguments));
  }

  _createClass(PanelEmpty, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: (0, _lib.bem)('panel', 'empty')
      }, _react.default.createElement(PanelMessage, this.props));
    }
  }]);

  return PanelEmpty;
}(_react.Component);

PanelEmpty.propTypes = {
  heading: _propTypes.default.string,
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var _default = PanelEmpty;
exports.default = _default;
//# sourceMappingURL=PanelEmpty.js.map