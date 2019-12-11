"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _SymbolSelector = _interopRequireDefault(require("../widgets/SymbolSelector"));

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// TODO compute these from plotly.js
var SYMBOLS = [{
  value: 'circle',
  label: 'M5,0A5,5 0 1,1 0,-5A5,5 0 0,1 5,0Z',
  threeD: true,
  gl: true
}, {
  value: 'circle-open',
  label: 'M5,0A5,5 0 1,1 0,-5A5,5 0 0,1 5,0Z',
  fill: 'none',
  threeD: true,
  gl: true
}, {
  value: 'circle-open-dot',
  label: 'M5,0A5,5 0 1,1 0,-5A5,5 0 0,1 5,0ZM0,0.5L0.5,0L0,-0.5L-0.5,0Z',
  fill: 'none'
}, {
  value: 'square',
  label: 'M5,5H-5V-5H5Z',
  threeD: true,
  gl: true
}, {
  value: 'square-open',
  label: 'M5,5H-5V-5H5Z',
  fill: 'none',
  threeD: true,
  gl: true
}, {
  value: 'square-open-dot',
  label: 'M5,5H-5V-5H5ZM0,0.5L0.5,0L0,-0.5L-0.5,0Z',
  fill: 'none'
}, {
  value: 'diamond',
  label: 'M6.5,0L0,6.5L-6.5,0L0,-6.5Z',
  threeD: true,
  gl: true
}, {
  value: 'diamond-open',
  label: 'M6.5,0L0,6.5L-6.5,0L0,-6.5Z',
  fill: 'none',
  threeD: true,
  gl: true
}, {
  value: 'diamond-open-dot',
  label: 'M6.5,0L0,6.5L-6.5,0L0,-6.5ZM0,0.5L0.5,0L0,-0.5L-0.5,0Z',
  fill: 'none'
}, {
  value: 'cross',
  label: 'M6,2H2V6H-2V2H-6V-2H-2V-6H2V-2H6Z',
  threeD: true,
  gl: true
}, {
  value: 'cross-open',
  label: 'M6,2H2V6H-2V2H-6V-2H-2V-6H2V-2H6Z',
  fill: 'none',
  gl: true
}, {
  value: 'x',
  label: 'M0,2.83l2.83,2.83l2.83,-2.83l-2.83,-2.83l2.83,-2.83l-2.83,-2.83l-2.83,2.83l-2.83,-2.83l-2.83,2.83l2.83,2.83l-2.83,2.83l2.83,2.83Z',
  threeD: true,
  gl: true
}, {
  value: 'x-open',
  label: 'M0,2.83l2.83,2.83l2.83,-2.83l-2.83,-2.83l2.83,-2.83l-2.83,-2.83l-2.83,2.83l-2.83,-2.83l-2.83,2.83l2.83,2.83l-2.83,2.83l2.83,2.83Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-up',
  label: 'M-5.77,2.5H5.77L0,-5Z',
  gl: true
}, {
  value: 'triangle-up-open',
  label: 'M-5.77,2.5H5.77L0,-5Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-down',
  label: 'M-5.77,-2.5H5.77L0,5Z',
  gl: true
}, {
  value: 'triangle-down-open',
  label: 'M-5.77,-2.5H5.77L0,5Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-left',
  label: 'M2.5,-5.77V5.77L-5,0Z',
  gl: true
}, {
  value: 'triangle-left-open',
  label: 'M2.5,-5.77V5.77L-5,0Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-right',
  label: 'M-2.5,-5.77V5.77L5,0Z',
  gl: true
}, {
  value: 'triangle-right-open',
  label: 'M-2.5,-5.77V5.77L5,0Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-ne',
  label: 'M-6,-3H3V6Z',
  gl: true
}, {
  value: 'triangle-ne-open',
  label: 'M-6,-3H3V6Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-se',
  label: 'M3,-6V3H-6Z',
  gl: true
}, {
  value: 'triangle-se-open',
  label: 'M3,-6V3H-6Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-sw',
  label: 'M6,3H-3V-6Z',
  gl: true
}, {
  value: 'triangle-sw-open',
  label: 'M6,3H-3V-6Z',
  fill: 'none',
  gl: true
}, {
  value: 'triangle-nw',
  label: 'M-3,6V-3H6Z',
  gl: true
}, {
  value: 'triangle-nw-open',
  label: 'M-3,6V-3H6Z',
  fill: 'none',
  gl: true
}, {
  value: 'pentagon',
  label: 'M4.76,-1.54L2.94,4.05H-2.94L-4.76,-1.54L0,-5Z',
  gl: true
}, {
  value: 'pentagon-open',
  label: 'M4.76,-1.54L2.94,4.05H-2.94L-4.76,-1.54L0,-5Z',
  fill: 'none',
  gl: true
}, {
  value: 'hexagon',
  label: 'M4.33,-2.5V2.5L0,5L-4.33,2.5V-2.5L0,-5Z',
  gl: true
}, {
  value: 'hexagon-open',
  label: 'M4.33,-2.5V2.5L0,5L-4.33,2.5V-2.5L0,-5Z',
  fill: 'none',
  gl: true
}, {
  value: 'hexagon2',
  label: 'M-2.5,4.33H2.5L5,0L2.5,-4.33H-2.5L-5,0Z',
  gl: true
}, {
  value: 'hexagon2-open',
  label: 'M-2.5,4.33H2.5L5,0L2.5,-4.33H-2.5L-5,0Z',
  fill: 'none',
  gl: true
}, {
  value: 'octagon',
  label: 'M-1.92,-4.62H1.92L4.62,-1.92V1.92L1.92,4.62H-1.92L-4.62,1.92V-1.92Z'
}, {
  value: 'octagon-open',
  label: 'M-1.92,-4.62H1.92L4.62,-1.92V1.92L1.92,4.62H-1.92L-4.62,1.92V-1.92Z',
  fill: 'none'
}, {
  value: 'star',
  label: 'M1.58,-2.16H6.66L2.54,0.83L4.12,5.66L0,2.67L-4.12,5.66L-2.54,0.83L-6.66,-2.16H-1.58L0,-7Z',
  gl: true
}, {
  value: 'star-open',
  alias: 17,
  label: 'M1.58,-2.16H6.66L2.54,0.83L4.12,5.66L0,2.67L-4.12,5.66L-2.54,0.83L-6.66,-2.16H-1.58L0,-7Z',
  fill: 'none',
  gl: true
}, {
  value: 'hexagram',
  label: 'M-3.8,0l-1.9,-3.3h3.8l1.9,-3.3l1.9,3.3h3.8l-1.9,3.3l1.9,3.3h-3.8l-1.9,3.3l-1.9,-3.3h-3.8Z'
}, {
  value: 'hexagram-open',
  label: 'M-3.8,0l-1.9,-3.3h3.8l1.9,-3.3l1.9,3.3h3.8l-1.9,3.3l1.9,3.3h-3.8l-1.9,3.3l-1.9,-3.3h-3.8Z',
  fill: 'none'
}, {
  value: 'star-triangle-up',
  label: 'M-6.93,4A 20,20 0 0 1 6.93,4A 20,20 0 0 1 0,-8A 20,20 0 0 1 -6.93,4Z'
}, {
  value: 'star-triangle-up-open',
  label: 'M-6.93,4A 20,20 0 0 1 6.93,4A 20,20 0 0 1 0,-8A 20,20 0 0 1 -6.93,4Z',
  fill: 'none'
}, {
  value: 'star-triangle-down',
  label: 'M6.93,-4A 20,20 0 0 1 -6.93,-4A 20,20 0 0 1 0,8A 20,20 0 0 1 6.93,-4Z'
}, {
  value: 'star-triangle-down-open',
  label: 'M6.93,-4A 20,20 0 0 1 -6.93,-4A 20,20 0 0 1 0,8A 20,20 0 0 1 6.93,-4Z',
  fill: 'none'
}, {
  value: 'star-square',
  label: 'M-5.5,-5.5A 10,10 0 0 1 -5.5,5.5A 10,10 0 0 1 5.5,5.5A 10,10 0 0 1 5.5,-5.5A 10,10 0 0 1 -5.5,-5.5Z'
}, {
  value: 'star-square-open',
  label: 'M-5.5,-5.5A 10,10 0 0 1 -5.5,5.5A 10,10 0 0 1 5.5,5.5A 10,10 0 0 1 5.5,-5.5A 10,10 0 0 1 -5.5,-5.5Z',
  fill: 'none'
}, {
  value: 'star-diamond',
  label: 'M-7,0A 9.5,9.5 0 0 1 0,7A 9.5,9.5 0 0 1 7,0A 9.5,9.5 0 0 1 0,-7A 9.5,9.5 0 0 1 -7,0Z'
}, {
  value: 'star-diamond-open',
  label: 'M-7,0A 9.5,9.5 0 0 1 0,7A 9.5,9.5 0 0 1 7,0A 9.5,9.5 0 0 1 0,-7A 9.5,9.5 0 0 1 -7,0Z',
  fill: 'none'
}, {
  value: 'diamond-tall',
  label: 'M0,7L3.5,0L0,-7L-3.5,0Z',
  gl: true
}, {
  value: 'diamond-tall-open',
  label: 'M0,7L3.5,0L0,-7L-3.5,0Z',
  fill: 'none',
  gl: true
}, {
  value: 'diamond-wide',
  label: 'M0,3.5L7,0L0,-3.5L-7,0Z'
}, {
  value: 'diamond-wide-open',
  label: 'M0,3.5L7,0L0,-3.5L-7,0Z',
  fill: 'none'
}, {
  value: 'hourglass',
  label: 'M5,5H-5L5,-5H-5Z'
}, {
  value: 'bowtie',
  label: 'M5,5V-5L-5,5V-5Z',
  gl: true
}, {
  value: 'cross-thin-open',
  label: 'M0,7V-7M7,0H-7',
  fill: 'none',
  gl: true
}, {
  value: 'x-thin-open',
  label: 'M5,5L-5,-5M5,-5L-5,5',
  fill: 'none'
}, {
  value: 'asterisk-open',
  label: 'M0,6V-6M6,0H-6M4.25,4.25L-4.25,-4.25M4.25,-4.25L-4.25,4.25',
  fill: 'none',
  gl: true
}, {
  value: 'hash-open',
  label: 'M2.5,5V-5m-5,0V5M5,2.5H-5m0,-5H5',
  fill: 'none'
}, {
  value: 'hash-open-dot',
  label: 'M2.5,5V-5m-5,0V5M5,2.5H-5m0,-5H5M0,0.5L0.5,0L0,-0.5L-0.5,0Z',
  fill: 'none'
}, {
  value: 'y-up-open',
  label: 'M-6,4L0,0M6,4L0,0M0,-8L0,0',
  fill: 'none',
  gl: true
}, {
  value: 'y-down-open',
  label: 'M-6,-4L0,0M6,-4L0,0M0,8L0,0',
  fill: 'none',
  gl: true
}, {
  value: 'y-left-open',
  label: 'M4,6L0,0M4,-6L0,0M-8,0L0,0',
  fill: 'none'
}, {
  value: 'y-right-open',
  label: 'M-4,6L0,0M-4,-6L0,0M8,0L0,0',
  fill: 'none'
}, {
  value: 'line-ew-open',
  label: 'M7,0H-7',
  fill: 'none',
  gl: true
}, {
  value: 'line-ns-open',
  label: 'M0,7V-7',
  fill: 'none',
  gl: true
}, {
  value: 'line-ne-open',
  label: 'M5,-5L-5,5',
  fill: 'none'
}, {
  value: 'line-nw-open',
  label: 'M5,5L-5,-5',
  fill: 'none'
}];

var SymbolSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(SymbolSelector, _Component);

  function SymbolSelector(props, context) {
    var _this;

    _classCallCheck(this, SymbolSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SymbolSelector).call(this, props, context));

    _this.setLocals(props, context);

    return _this;
  }

  _createClass(SymbolSelector, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props, context) {
      var fullContainer = props.fullContainer;
      var defaultContainer = context.defaultContainer;
      this.markerColor = (0, _nested_property.default)(fullContainer, 'marker.color').get();
      this.borderWidth = (0, _nested_property.default)(fullContainer, 'marker.line.width').get();

      if (this.markerColor === _constants.MULTI_VALUED) {
        this.markerColor = (0, _nested_property.default)(defaultContainer, 'marker.color').get();
      }

      this.markerColor = Array.isArray(this.markerColor) ? _constants.COLORS.mutedBlue : this.markerColor;
      this.borderColor = this.markerColor;

      if (this.borderWidth) {
        this.borderColor = (0, _nested_property.default)(fullContainer, 'marker.line.color').get();

        if (this.borderColor === _constants.MULTI_VALUED) {
          this.borderColor = (0, _nested_property.default)(defaultContainer, 'marker.line.color').get();
        }
      }

      this.borderColor = Array.isArray(this.borderColor) ? _constants.COLORS.charcoal : this.borderColor;
      this.symbolOptions = this.props.container.type === 'scatter3d' ? SYMBOLS.filter(function (option) {
        return option.threeD;
      }) : [].concat(SYMBOLS);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          fullValue = _this$props.fullValue,
          updatePlot = _this$props.updatePlot;
      return _react.default.createElement(_Field.default, this.props, _react.default.createElement(_SymbolSelector.default, {
        markerColor: this.markerColor,
        borderColor: this.borderColor,
        value: fullValue,
        onChange: updatePlot,
        symbolOptions: this.symbolOptions,
        backgroundDark: (0, _lib.tooLight)(this.markerColor)
      }));
    }
  }]);

  return SymbolSelector;
}(_react.Component);

SymbolSelector.propTypes = _objectSpread({
  defaultValue: _propTypes.default.string,
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
SymbolSelector.contextTypes = {
  defaultContainer: _propTypes.default.object
};
SymbolSelector.defaultProps = {
  showArrows: true
};

var _default = (0, _lib.connectToContainer)(SymbolSelector);

exports.default = _default;
//# sourceMappingURL=SymbolSelector.js.map