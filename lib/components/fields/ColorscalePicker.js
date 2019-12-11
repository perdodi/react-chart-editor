"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedColorscalePicker = void 0;

var _ColorscalePicker = _interopRequireDefault(require("../widgets/ColorscalePicker"));

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnconnectedColorscalePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedColorscalePicker, _Component);

  function UnconnectedColorscalePicker() {
    var _this;

    _classCallCheck(this, UnconnectedColorscalePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedColorscalePicker).call(this));
    _this.onUpdate = _this.onUpdate.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedColorscalePicker, [{
    key: "onUpdate",
    value: function onUpdate(colorscale, colorscaleType) {
      if (Array.isArray(colorscale)) {
        this.props.updatePlot(colorscale.map(function (c, i) {
          var step = i / (colorscale.length - 1);

          if (i === 0) {
            step = 0;
          }

          return [step, c];
        }), colorscaleType);
        this.context.onUpdate({
          type: _constants.EDITOR_ACTIONS.UPDATE_TRACES,
          payload: {
            update: {
              autocolorscale: false
            },
            traceIndexes: [this.props.fullContainer.index]
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var fullValue = this.props.fullValue;
      var colorscale = Array.isArray(fullValue) ? fullValue.map(function (v) {
        return v[1];
      }) : null;
      return _react.default.createElement(_Field.default, _extends({}, this.props, {
        fieldContainerClassName: "field__colorscale"
      }), _react.default.createElement(_ColorscalePicker.default, {
        selected: colorscale,
        onColorscaleChange: this.onUpdate,
        initialCategory: this.props.initialCategory,
        disableCategorySwitch: this.props.disableCategorySwitch
      }));
    }
  }]);

  return UnconnectedColorscalePicker;
}(_react.Component);

exports.UnconnectedColorscalePicker = UnconnectedColorscalePicker;
UnconnectedColorscalePicker.propTypes = _objectSpread({
  labelWidth: _propTypes.default.number,
  fullValue: _propTypes.default.any,
  fullContainer: _propTypes.default.object,
  updatePlot: _propTypes.default.func,
  initialCategory: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedColorscalePicker.contextTypes = {
  container: _propTypes.default.object,
  graphDiv: _propTypes.default.object,
  onUpdate: _propTypes.default.func
};
UnconnectedColorscalePicker.displayName = 'UnconnectedColorscalePicker';

var _default = (0, _lib.connectToContainer)(UnconnectedColorscalePicker);

exports.default = _default;
//# sourceMappingURL=ColorscalePicker.js.map