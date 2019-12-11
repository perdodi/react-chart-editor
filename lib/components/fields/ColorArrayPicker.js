"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

var _MultiColorPicker = _interopRequireDefault(require("./MultiColorPicker"));

var _constants = require("../../lib/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnconnectedColorArrayPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedColorArrayPicker, _Component);

  function UnconnectedColorArrayPicker(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedColorArrayPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedColorArrayPicker).call(this, props, context));
    var fullContainer = props.fullContainer;
    _this.rootAttr = props.attr.split('.')[0];
    var type = null;

    if (!fullContainer[_this.rootAttr] || fullContainer[_this.rootAttr] && !Array.isArray(fullContainer[_this.rootAttr].color)) {
      type = 'constant';
    } else if (fullContainer[_this.rootAttr] && Array.isArray(fullContainer[_this.rootAttr].color)) {
      type = 'variable';
    }

    _this.state = {
      type: type,
      value: {
        constant: type === 'constant' ? props.fullValue : _constants.COLORS.mutedBlue,
        variable: type === 'variable' ? props.fullValue : null
      },
      selectedConstantColorOption: type === 'constant' && props.multiValued ? 'multiple' : 'single'
    };
    _this.setType = _this.setType.bind(_assertThisInitialized(_this));
    _this.setValue = _this.setValue.bind(_assertThisInitialized(_this));
    _this.setColor = _this.setColor.bind(_assertThisInitialized(_this));
    _this.setColorScale = _this.setColorScale.bind(_assertThisInitialized(_this));
    _this.onConstantColorOptionChange = _this.onConstantColorOptionChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedColorArrayPicker, [{
    key: "setType",
    value: function setType(type) {
      var _ref, _ref2;

      this.setState({
        type: type
      });
      this.context.updateContainer(type === 'constant' ? (_ref = {}, _defineProperty(_ref, this.rootAttr + '.color', this.state.value[type]), _defineProperty(_ref, this.rootAttr + '.colorsrc', null), _ref) : (_ref2 = {}, _defineProperty(_ref2, this.rootAttr + '.color', this.state.value[type]), _defineProperty(_ref2, this.rootAttr + '.colorsrc', null), _ref2));
    }
  }, {
    key: "setValue",
    value: function setValue(inputValue) {
      var type = this.state.type;
      this.setState(type === 'constant' ? {
        value: {
          constant: inputValue,
          variable: this.state.value[type]
        }
      } : {
        value: {
          variable: inputValue,
          constant: this.state.value[type]
        }
      });
      this.props.updatePlot(inputValue);
    }
  }, {
    key: "setColor",
    value: function setColor(inputValue) {
      var type = this.state.type;
      this.setState(type === 'constant' ? {
        value: {
          constant: inputValue,
          variable: this.state.value.variable
        }
      } : {
        value: {
          variable: inputValue,
          constant: this.state.value.constant
        }
      });
      this.props.updatePlot(inputValue);
    }
  }, {
    key: "setColorScale",
    value: function setColorScale(inputValue) {
      this.setState({
        colorscale: inputValue
      });
      this.context.updateContainer(_defineProperty({}, this.rootAttr + '.colorscale', inputValue));
    }
  }, {
    key: "onConstantColorOptionChange",
    value: function onConstantColorOptionChange(value) {
      this.setState({
        selectedConstantColorOption: value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attr = _this$props.attr,
          fullValue = _this$props.fullValue;
      var _ = this.context.localize;
      var type = this.state.type;
      var options = [{
        label: _('Constant'),
        value: 'constant'
      }, {
        label: _('Variable'),
        value: 'variable'
      }];
      var multiValued = this.props.multiValued || Array.isArray(fullValue) && fullValue.includes(_constants.MULTI_VALUED);
      return _react.default.createElement(_Field.default, _extends({}, this.props, {
        multiValued: multiValued,
        attr: attr
      }), _react.default.createElement(_RadioBlocks.default, {
        options: options,
        activeOption: type,
        onOptionChange: this.setType
      }), type === 'constant' ? _react.default.createElement(_MultiColorPicker.default, {
        attr: this.rootAttr + '.color',
        multiColorMessage: _('Each trace will be colored according to the selected colorscale.'),
        singleColorMessage: _('All traces will be colored in the the same color.'),
        setColor: this.setColor,
        setColorScale: this.setColorScale,
        onConstantColorOptionChange: this.onConstantColorOptionChange,
        parentSelectedConstantColorOption: this.state.selectedConstantColorOption
      }) : multiValued ? null : _react.default.createElement(_DataSelector.default, {
        suppressMultiValuedMessage: true,
        attr: this.rootAttr + '.color',
        updatePlot: this.setValue
      }));
    }
  }]);

  return UnconnectedColorArrayPicker;
}(_react.Component);

UnconnectedColorArrayPicker.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedColorArrayPicker.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func
};
UnconnectedColorArrayPicker.displayName = 'UnconnectedColorArrayPicker';

var _default = (0, _lib.connectToContainer)(UnconnectedColorArrayPicker);

exports.default = _default;
//# sourceMappingURL=ColorArrayPicker.js.map