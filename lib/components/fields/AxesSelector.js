"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dropdown = _interopRequireDefault(require("../widgets/Dropdown"));

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AxesSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(AxesSelector, _Component);

  function AxesSelector(props, context) {
    var _this;

    _classCallCheck(this, AxesSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AxesSelector).call(this, props, context));
    var _ = context.localize;

    if (!context.axesTargetHandler) {
      throw new Error(_('AxesSelector must be nested within a connectAxesToPlot component'));
    }

    return _this;
  }

  _createClass(AxesSelector, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          axesTargetHandler = _this$context.axesTargetHandler,
          axesTarget = _this$context.axesTarget,
          fullLayout = _this$context.fullLayout,
          _ = _this$context.localize;
      var axesOptions = this.props.axesOptions;
      var maxCharsThatFitInRadio = 27;
      var maxOptions = axesOptions.length > 4; // eslint-disable-line

      var multipleSublots = fullLayout && fullLayout._subplots && Object.values(fullLayout._subplots).some(function (s) {
        return s.length > 1;
      });
      var options = multipleSublots ? axesOptions.map(function (option) {
        return option.value === 'allaxes' ? option : {
          label: (0, _lib.getParsedTemplateString)(option.title, {
            meta: fullLayout.meta
          }),
          value: option.value
        };
      }) : axesOptions;
      var totalCharsInOptions = options && options.map(function (o) {
        return o.label;
      }).reduce(function (acc, o) {
        return acc + o.length;
      }, 0) || 0;
      return maxOptions || totalCharsInOptions >= maxCharsThatFitInRadio ? _react.default.createElement(_Field.default, _extends({}, this.props, {
        label: _('Axis to Style')
      }), _react.default.createElement(_Dropdown.default, {
        options: options,
        value: axesTarget,
        onChange: axesTargetHandler,
        clearable: false
      })) : _react.default.createElement(_Field.default, _extends({}, this.props, {
        center: true
      }), _react.default.createElement(_RadioBlocks.default, {
        options: options,
        activeOption: axesTarget,
        onOptionChange: axesTargetHandler
      }));
    }
  }]);

  return AxesSelector;
}(_react.Component);

AxesSelector.contextTypes = {
  axesTargetHandler: _propTypes.default.func,
  axesTarget: _propTypes.default.string,
  fullLayout: _propTypes.default.object,
  localize: _propTypes.default.func
};
AxesSelector.propTypes = {
  axesOptions: _propTypes.default.array
};
var _default = AxesSelector;
exports.default = _default;
//# sourceMappingURL=AxesSelector.js.map