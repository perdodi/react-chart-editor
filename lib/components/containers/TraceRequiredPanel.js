"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PanelEmpty = _interopRequireDefault(require("./PanelEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _derived = require("./derived");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TraceRequiredPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(TraceRequiredPanel, _Component);

  function TraceRequiredPanel() {
    _classCallCheck(this, TraceRequiredPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(TraceRequiredPanel).apply(this, arguments));
  }

  _createClass(TraceRequiredPanel, [{
    key: "hasTrace",
    value: function hasTrace() {
      return this.context.fullData.filter(function (trace) {
        return trace.visible;
      }).length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _ = this.context.localize;

      var _this$props = this.props,
          children = _this$props.children,
          rest = _objectWithoutProperties(_this$props, ["children"]);

      if (!this.props.visible) {
        return null;
      }

      return this.hasTrace() ? _react.default.createElement(_derived.LayoutPanel, rest, children) : _react.default.createElement(_PanelEmpty.default, {
        heading: _("Looks like there aren't any traces defined yet.")
      }, _react.default.createElement("p", null, _('Go to the '), _react.default.createElement("a", {
        onClick: function onClick() {
          return _this.context.setPanel('Structure', 'Traces');
        }
      }, _('Traces')), _(' panel under Structure to define traces.')));
    }
  }]);

  return TraceRequiredPanel;
}(_react.Component);

TraceRequiredPanel.propTypes = {
  children: _propTypes.default.node,
  visible: _propTypes.default.bool
};
TraceRequiredPanel.defaultProps = {
  visible: true
};
TraceRequiredPanel.contextTypes = {
  fullData: _propTypes.default.array,
  localize: _propTypes.default.func,
  setPanel: _propTypes.default.func
};
var _default = TraceRequiredPanel;
exports.default = _default;
//# sourceMappingURL=TraceRequiredPanel.js.map