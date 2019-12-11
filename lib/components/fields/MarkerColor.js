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

var _MultiColorPicker = _interopRequireDefault(require("./MultiColorPicker"));

var _ColorscalePicker = _interopRequireDefault(require("./ColorscalePicker"));

var _Numeric = _interopRequireDefault(require("./Numeric"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _Info = _interopRequireDefault(require("./Info"));

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

var _VisibilitySelect = _interopRequireDefault(require("./VisibilitySelect"));

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

var UnconnectedMarkerColor =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedMarkerColor, _Component);

  function UnconnectedMarkerColor(props, context) {
    var _this;

    _classCallCheck(this, UnconnectedMarkerColor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedMarkerColor).call(this, props, context));
    var type = null;

    if (!props.container.marker || props.container.marker && !props.container.marker.colorsrc) {
      type = 'constant';
    } else if (props.container.marker && Array.isArray(props.container.marker.color) && props.fullContainer.marker && Array.isArray(props.fullContainer.marker.color)) {
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
    _this.setColor = _this.setColor.bind(_assertThisInitialized(_this));
    _this.setColorScale = _this.setColorScale.bind(_assertThisInitialized(_this));
    _this.onConstantColorOptionChange = _this.onConstantColorOptionChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(UnconnectedMarkerColor, [{
    key: "setType",
    value: function setType(type) {
      if (this.state.type !== type) {
        this.setState({
          type: type
        });
        this.props.updatePlot(this.state.value[type]);

        if (type === 'constant') {
          var _this$context$updateC;

          this.context.updateContainer((_this$context$updateC = {}, _defineProperty(_this$context$updateC, 'marker.colorsrc', null), _defineProperty(_this$context$updateC, 'marker.colorscale', null), _defineProperty(_this$context$updateC, 'marker.showscale', null), _this$context$updateC));
          this.setState({
            colorscale: null
          });
        } else {
          var _this$context$updateC2;

          this.context.updateContainer((_this$context$updateC2 = {}, _defineProperty(_this$context$updateC2, 'marker.color', null), _defineProperty(_this$context$updateC2, 'marker.colorsrc', null), _defineProperty(_this$context$updateC2, 'marker.colorscale', null), _this$context$updateC2));
        }
      }
    }
  }, {
    key: "setColor",
    value: function setColor(inputValue) {
      var type = this.state.type;
      this.setState(type === 'constant' ? {
        value: {
          constant: inputValue
        }
      } : {
        value: {
          variable: inputValue
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
      this.context.updateContainer(_defineProperty({}, 'marker.colorscale', inputValue));
    }
  }, {
    key: "isMultiValued",
    value: function isMultiValued() {
      return this.props.multiValued || Array.isArray(this.props.fullValue) && this.props.fullValue.includes(_constants.MULTI_VALUED) || this.props.container.marker && this.props.container.marker.colorscale && this.props.container.marker.colorscale === _constants.MULTI_VALUED || this.props.container.marker && this.props.container.marker.colorsrc && this.props.container.marker.colorsrc === _constants.MULTI_VALUED || this.props.container.marker && this.props.container.marker.color && Array.isArray(this.props.container.marker.color) && this.props.container.marker.color.includes(_constants.MULTI_VALUED);
    }
  }, {
    key: "onConstantColorOptionChange",
    value: function onConstantColorOptionChange(value) {
      this.setState({
        selectedConstantColorOption: value
      });
    }
  }, {
    key: "renderConstantControls",
    value: function renderConstantControls() {
      var _ = this.context.localize;
      return _react.default.createElement(_MultiColorPicker.default, {
        attr: "marker.color",
        multiColorMessage: _('Each trace will be colored according to the selected colorscale.'),
        singleColorMessage: _('All traces will be colored in the the same color.'),
        setColor: this.setColor,
        setColorScale: this.setColorScale,
        onConstantColorOptionChange: this.onConstantColorOptionChange,
        parentSelectedConstantColorOption: this.state.selectedConstantColorOption
      });
    }
  }, {
    key: "renderVariableControls",
    value: function renderVariableControls() {
      var multiValued = this.props.container && this.props.container.marker && (this.props.container.marker.colorscale && this.props.container.marker.colorscale === _constants.MULTI_VALUED || this.props.container.marker.colorsrc && this.props.container.marker.colorsrc === _constants.MULTI_VALUED);
      return _react.default.createElement(_Field.default, {
        multiValued: multiValued
      }, _react.default.createElement(_DataSelector.default, {
        suppressMultiValuedMessage: true,
        attr: "marker.color"
      }), this.props.container.marker && this.props.container.marker.colorscale === _constants.MULTI_VALUED ? null : _react.default.createElement(_ColorscalePicker.default, {
        suppressMultiValuedMessage: true,
        attr: "marker.colorscale",
        updatePlot: this.setColorScale,
        colorscale: this.state.colorscale
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var attr = this.props.attr;
      var _this$context = this.context,
          _ = _this$context.localize,
          container = _this$context.container; // TO DO: https://github.com/plotly/react-chart-editor/issues/654

      var noSplitsPresent = container && (!container.transforms || !container.transforms.filter(function (t) {
        return t.type === 'groupby';
      }).length);

      if (noSplitsPresent) {
        var type = this.state.type;
        var options = [{
          label: _('Constant'),
          value: 'constant'
        }, {
          label: _('Variable'),
          value: 'variable'
        }];
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Field.default, _extends({}, this.props, {
          attr: attr
        }), _react.default.createElement(_Field.default, {
          multiValued: this.isMultiValued() && !this.state.type
        }, _react.default.createElement(_RadioBlocks.default, {
          options: options,
          activeOption: type,
          onOptionChange: this.setType
        }), !type ? null : _react.default.createElement(_Info.default, null, type === 'constant' ? _('All points in a trace are colored in the same color.') : _('Each point in a trace is colored according to data.'))), !type ? null : type === 'constant' ? this.renderConstantControls() : this.renderVariableControls()), type === 'constant' ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Radio.default, {
          label: _('Colorscale Direction'),
          attr: "marker.reversescale",
          options: [{
            label: _('Normal'),
            value: false
          }, {
            label: _('Reversed'),
            value: true
          }]
        }), _react.default.createElement(_Radio.default, {
          label: _('Color Bar'),
          attr: "marker.showscale",
          options: [{
            label: _('Show'),
            value: true
          }, {
            label: _('Hide'),
            value: false
          }]
        }), _react.default.createElement(_VisibilitySelect.default, {
          label: _('Colorscale Range'),
          attr: "marker.cauto",
          options: [{
            label: _('Auto'),
            value: true
          }, {
            label: _('Custom'),
            value: false
          }],
          showOn: false,
          defaultOpt: true
        }, _react.default.createElement(_Numeric.default, {
          label: _('Min'),
          attr: "marker.cmin"
        }), _react.default.createElement(_Numeric.default, {
          label: _('Max'),
          attr: "marker.cmax"
        }))));
      }

      return _react.default.createElement(_Field.default, _extends({}, this.props, {
        attr: attr
      }), this.renderConstantControls());
    }
  }]);

  return UnconnectedMarkerColor;
}(_react.Component);

UnconnectedMarkerColor.propTypes = _objectSpread({
  fullValue: _propTypes.default.any,
  updatePlot: _propTypes.default.func
}, _Field.default.propTypes);
UnconnectedMarkerColor.contextTypes = {
  localize: _propTypes.default.func,
  updateContainer: _propTypes.default.func,
  traceIndexes: _propTypes.default.array,
  container: _propTypes.default.object
};
UnconnectedMarkerColor.displayName = 'UnconnectedMarkerColor';

var _default = (0, _lib.connectToContainer)(UnconnectedMarkerColor);

exports.default = _default;
//# sourceMappingURL=MarkerColor.js.map