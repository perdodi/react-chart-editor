"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedDropdownCustom = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _Field = _interopRequireDefault(require("./Field"));

var _Dropdown = _interopRequireDefault(require("../widgets/Dropdown"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnconnectedDropdownCustom =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedDropdownCustom, _Component);

  function UnconnectedDropdownCustom(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedDropdownCustom);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedDropdownCustom).call(this, props, context));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    _this.setLocals = _this.setLocals.bind(_assertThisInitialized(_this));

    _this.setLocals(props);

    _this.state = {
      custom: _this.value === props.customOpt || !_this.props.options.map(function (o) {
        return o.value;
      }).includes(_this.value)
    };
    return _this;
  }

  _createClass(UnconnectedDropdownCustom, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      this.setLocals(props);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props) {
      this.value = props.fullValue === undefined || props.fullValue === _constants.MULTI_VALUED_PLACEHOLDER // eslint-disable-line no-undefined
      ? this.props.defaultOpt : props.fullValue;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var custom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      this.value = value;
      var customOpt = this.props.customOpt;
      this.setState({
        custom: (custom || value === customOpt) && value !== ''
      });
      this.props.updateContainer(_defineProperty({}, this.props.attr, value === customOpt && !custom ? customOpt : value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          attr = _this$props.attr,
          customOpt = _this$props.customOpt;
      var value = (this.value === '' || !options.map(function (o) {
        return o.value;
      }).includes(this.value)) && this.state.custom ? customOpt : this.value;
      return _react.default.createElement(_Field.default, this.props, _react.default.createElement(_Dropdown.default, {
        backgroundDark: this.props.backgroundDark,
        options: options,
        value: value,
        onChange: this.setValue,
        clearable: this.props.clearable,
        components: this.props.components,
        placeholder: this.props.placeholder
      }), this.state.custom && _react.default.createElement(_Text.default, {
        attr: attr,
        updatePlot: function updatePlot(value) {
          return _this2.setValue(value, true);
        },
        onChange: function onChange(value) {
          if (value) {
            _this2.setValue(value, true);
          }
        }
      }));
    }
  }]);

  return UnconnectedDropdownCustom;
}(_react.Component);

exports.UnconnectedDropdownCustom = UnconnectedDropdownCustom;
UnconnectedDropdownCustom.propTypes = _objectSpread({
  backgroundDark: _propTypes.default.bool,
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func,
  clearable: _propTypes.default.bool,
  components: _propTypes.default.object,
  placeholder: _propTypes.default.any,
  defaultOpt: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool, _propTypes.default.string]),
  customOpt: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool, _propTypes.default.string]),
  label: _propTypes.default.string,
  attr: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedDropdownCustom.contextTypes = {
  updateContainer: _propTypes.default.func
};
UnconnectedDropdownCustom.displayName = 'UnconnectedDropdownCustom';

var _default = (0, _lib.connectToContainer)(UnconnectedDropdownCustom);

exports.default = _default;
//# sourceMappingURL=DropdownCustom.js.map