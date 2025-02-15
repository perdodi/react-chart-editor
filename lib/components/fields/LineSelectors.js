"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LineDashSelector = exports.LineShapeSelector = void 0;

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var strokeDashes = [{
  value: 'solid',
  strokeDasharray: ''
}, {
  value: 'dot',
  strokeDasharray: '3px, 3px'
}, {
  value: 'dash',
  strokeDasharray: '9px, 9px'
}, {
  value: 'longdash',
  strokeDasharray: '15px, 15px'
}, {
  value: 'dashdot',
  strokeDasharray: '9px, 3px, 3px, 3px'
}, {
  value: 'longdashdot',
  strokeDasharray: '15px, 6px, 3px, 6px'
}];
var strokeShapes = [{
  d: 'M2,14L14,2',
  value: 'linear'
}, {
  d: 'M2,14C4,4 16,16 18,2',
  value: 'spline'
}, {
  d: 'M2,14H14V2',
  value: 'hv'
}, {
  d: 'M2,14V2H14',
  value: 'vh'
}, {
  d: 'M2,14H8V2H14',
  value: 'hvh'
}, {
  d: 'M2,14V8H14V2',
  value: 'vhv'
}];

var _computeOptions = function computeOptions(strokeData, stroke) {
  return strokeData.map(function (_ref) {
    var value = _ref.value,
        strokeDasharray = _ref.strokeDasharray,
        _ref$d = _ref.d,
        d = _ref$d === void 0 ? 'M0,8h100' : _ref$d;
    return {
      label: _react.default.createElement("svg", {
        width: "100",
        height: "16"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: d,
        style: {
          fill: 'none',
          strokeWidth: '4px',
          stroke: !stroke || stroke === _constants.MULTI_VALUED ? _constants.COLORS.mutedBlue : stroke,
          strokeDasharray: strokeDasharray
        }
      }))),
      value: value
    };
  });
};

var LineShapeSelector = function LineShapeSelector(props) {
  return _react.default.createElement(LineSelector, _extends({}, props, {
    computeOptions: _computeOptions.bind(null, strokeShapes)
  }));
};

exports.LineShapeSelector = LineShapeSelector;

var LineDashSelector = function LineDashSelector(props) {
  return _react.default.createElement(LineSelector, _extends({}, props, {
    computeOptions: function computeOptions(lineColor) {
      return _computeOptions(strokeDashes, lineColor).concat([{
        label: '',
        value: null
      }]);
    }
  }));
};

exports.LineDashSelector = LineDashSelector;

var LineSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(LineSelector, _Component);

  function LineSelector(props, context) {
    var _this;

    _classCallCheck(this, LineSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LineSelector).call(this, props, context));

    _this.setLocals(props, context);

    return _this;
  }

  _createClass(LineSelector, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(nextProps, nextContext) {
      var fullContainer = nextContext.fullContainer;
      var lineColor = (0, _nested_property.default)(fullContainer, 'line.color').get();

      if (!this.options || this.lineColor !== lineColor) {
        this.options = this.props.computeOptions(lineColor);
        this.lineColor = lineColor;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_Dropdown.default, _extends({}, this.props, {
        options: this.options,
        backgroundDark: (0, _lib.tooLight)(this.lineColor)
      }));
    }
  }]);

  return LineSelector;
}(_react.Component);

LineSelector.propTypes = _objectSpread({
  computeOptions: _propTypes.default.func
}, _Dropdown.default.propTypes);
LineSelector.defaultProps = {
  clearable: false
};
LineSelector.contextTypes = {
  fullContainer: _propTypes.default.object
};
//# sourceMappingURL=LineSelectors.js.map