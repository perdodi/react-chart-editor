"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedTextPosition = void 0;

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Info = _interopRequireDefault(require("./Info"));

var _DataSelector = _interopRequireDefault(require("./DataSelector"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnconnectedTextPosition =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedTextPosition, _Component);

  function UnconnectedTextPosition(props) {
    var _this;

    _classCallCheck(this, UnconnectedTextPosition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedTextPosition).call(this, props));
    _this.state = {
      posType: typeof props.fullValue === 'string' ? 'simple' : 'custom'
    };
    return _this;
  }

  _createClass(UnconnectedTextPosition, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var radioOptions = [{
        label: _('All'),
        value: 'simple'
      }, {
        label: _('Custom'),
        value: 'custom'
      }];
      var control = this.state.posType === 'simple' ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Info.default, null, _('This will position all text values on the plot according to the selected position.')), _react.default.createElement(_Dropdown.default, {
        options: this.props.options,
        attr: "textposition",
        clearable: false
      })) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Info.default, null, _react.default.createElement("div", null, _('This will position text values individually, according to the provided data positions array. '))), _react.default.createElement(_DataSelector.default, {
        attr: "textposition"
      }), _react.default.createElement(_Info.default, null, _react.default.createElement("div", null, _('("Top", "Middle", "Bottom") + ("Left", "Center", "Right")'))));
      return _react.default.createElement(_Field.default, this.props, _react.default.createElement(_RadioBlocks.default, {
        options: radioOptions,
        activeOption: this.state.posType,
        onOptionChange: function onOptionChange(value) {
          _this2.setState({
            posType: value
          });

          if (value === 'simple') {
            _this2.props.updatePlot('middle center');
          } else {
            _this2.props.updateContainer({
              textpositionsrc: null
            });
          }
        }
      }), control);
    }
  }]);

  return UnconnectedTextPosition;
}(_react.Component);

exports.UnconnectedTextPosition = UnconnectedTextPosition;
UnconnectedTextPosition.propTypes = _objectSpread({}, _Field.default.propTypes, {
  options: _propTypes.default.array,
  fullValue: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string])
});
UnconnectedTextPosition.contextTypes = {
  localize: _propTypes.default.func
};
UnconnectedTextPosition.displayName = 'UnconnectedTextPosition';

var _default = (0, _lib.connectToContainer)(UnconnectedTextPosition, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    var _ = context.localize;
    var options = [{
      label: _('Top Left'),
      value: 'top left'
    }, {
      label: _('Top Center'),
      value: 'top center'
    }, {
      label: _('Top Right'),
      value: 'top right'
    }, {
      label: _('Middle Left'),
      value: 'middle left'
    }, {
      label: _('Middle Center'),
      value: 'middle center'
    }, {
      label: _('Middle Right'),
      value: 'middle right'
    }, {
      label: _('Bottom Left'),
      value: 'bottom left'
    }, {
      label: _('Bottom Center'),
      value: 'bottom center'
    }, {
      label: _('Bottom Right'),
      value: 'bottom right'
    }];

    if (['pie', 'bar', 'funnel', 'waterfall'].includes(context.container.type)) {
      options = [{
        label: _('Inside'),
        value: 'inside'
      }, {
        label: _('Outside'),
        value: 'outside'
      }, {
        label: _('Auto'),
        value: 'auto'
      }, {
        label: _('None'),
        value: 'none'
      }];
    }

    if (['funnelarea'].includes(context.container.type)) {
      options = [{
        label: _('Inside'),
        value: 'inside'
      }, {
        label: _('None'),
        value: 'none'
      }];
    }

    plotProps.options = options;
    plotProps.clearable = false;
  }
});

exports.default = _default;
//# sourceMappingURL=TextPosition.js.map