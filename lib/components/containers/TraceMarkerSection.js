"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PlotlySection = _interopRequireDefault(require("./PlotlySection"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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

var TraceMarkerSection =
/*#__PURE__*/
function (_Component) {
  _inherits(TraceMarkerSection, _Component);

  function TraceMarkerSection(props, context) {
    var _this;

    _classCallCheck(this, TraceMarkerSection);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TraceMarkerSection).call(this, props, context));

    _this.setLocals(context);

    return _this;
  }

  _createClass(TraceMarkerSection, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(context) {
      var _ = this.context.localize;
      var traceType = context.fullContainer.type;

      if (['bar', 'histogram', 'funnel', 'waterfall'].includes(traceType)) {
        this.name = _('Bars');
      } else if (['funnelarea', 'pie', 'sunburst'].includes(traceType)) {
        this.name = _('Segments');
      } else {
        this.name = _('Points');
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_PlotlySection.default, {
        name: this.name
      }, this.props.children);
    }
  }]);

  return TraceMarkerSection;
}(_react.Component);

TraceMarkerSection.propTypes = {
  children: _propTypes.default.node,
  name: _propTypes.default.string
};
TraceMarkerSection.contextTypes = {
  fullContainer: _propTypes.default.object,
  localize: _propTypes.default.func
};
var _default = TraceMarkerSection;
exports.default = _default;
//# sourceMappingURL=TraceMarkerSection.js.map