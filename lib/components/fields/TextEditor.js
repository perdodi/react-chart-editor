"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UnconnectedTextEditor = void 0;

var _Field = _interopRequireDefault(require("./Field"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _LaTeX = _interopRequireDefault(require("../widgets/text_editors/LaTeX"));

var _RichText = _interopRequireDefault(require("../widgets/text_editors/RichText"));

var _MultiFormat = _interopRequireDefault(require("../widgets/text_editors/MultiFormat"));

var _HTML = _interopRequireDefault(require("../widgets/text_editors/HTML"));

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

// TODO: import plotly.js regex directly: https://github.com/plotly/plotly.js/issues/3520
var TEMPLATE_STRING_REGEX = /%{([^\s%{}:]*)(:[^}]*)?}/g;
var INDEX_IN_TEMPLATE_STRING_REGEX = /%{(meta(\[(\d+)]))}/;

var UnconnectedTextEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedTextEditor, _Component);

  function UnconnectedTextEditor() {
    _classCallCheck(this, UnconnectedTextEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedTextEditor).apply(this, arguments));
  }

  _createClass(UnconnectedTextEditor, [{
    key: "hasTemplateStrings",
    value: function hasTemplateStrings(value) {
      if (!value) {
        return false;
      }

      return value.match(TEMPLATE_STRING_REGEX);
    }
  }, {
    key: "updatePlot",
    value: function updatePlot(value) {
      var updatePlot = this.props.updatePlot;
      var templateStrings = this.hasTemplateStrings(value);
      var adjustedValue = value;

      if (templateStrings) {
        adjustedValue = adjustedValue.replace(TEMPLATE_STRING_REGEX, function (match) {
          var index = INDEX_IN_TEMPLATE_STRING_REGEX.exec(match);

          if (index) {
            var adjustedIndex = parseInt(index[3], 10) - 1;

            if (!isNaN(adjustedIndex)) {
              return "%{meta[".concat(adjustedIndex < 0 ? 0 : adjustedIndex, "]}");
            }
          }

          return match;
        });
      }

      updatePlot(adjustedValue);
    }
  }, {
    key: "getAdjustedFullValue",
    value: function getAdjustedFullValue(fullValue) {
      var templateStrings = this.hasTemplateStrings(fullValue);

      if (templateStrings) {
        return fullValue.replace(TEMPLATE_STRING_REGEX, function (match) {
          var index = INDEX_IN_TEMPLATE_STRING_REGEX.exec(match);

          if (index) {
            var adjustedIndex = parseInt(index[3], 10) + 1;

            if (!isNaN(adjustedIndex)) {
              return "%{meta[".concat(adjustedIndex, "]}");
            }

            return match;
          }

          return match;
        });
      }

      return fullValue;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attr = _this$props.attr,
          container = _this$props.container,
          htmlOnly = _this$props.htmlOnly,
          latexOnly = _this$props.latexOnly,
          multiValued = _this$props.multiValued,
          richTextOnly = _this$props.richTextOnly;
      var _ = this.context.localize;
      var fullValue = this.getAdjustedFullValue(this.props.fullValue);
      var placeholder = this.props.placeholder;

      if (multiValued || fullValue && (!container || !(0, _nested_property.default)(container, attr))) {
        placeholder = fullValue;
        fullValue = '';
      }

      var editor;

      if (latexOnly) {
        placeholder = _('Enter LaTeX formatted text');
        editor = _react.default.createElement(_LaTeX.default, {
          value: fullValue,
          placeholder: placeholder,
          onChange: this.updatePlot.bind(this)
        });
      } else if (richTextOnly) {
        editor = _react.default.createElement(_RichText.default, {
          value: fullValue,
          placeholder: placeholder,
          onChange: this.updatePlot.bind(this)
        });
      } else if (htmlOnly) {
        placeholder = _('Enter html formatted text');
        editor = _react.default.createElement(_HTML.default, {
          value: fullValue,
          placeholder: placeholder,
          onChange: this.updatePlot.bind(this)
        });
      } else {
        editor = _react.default.createElement(_MultiFormat.default, {
          value: fullValue,
          placeholder: placeholder,
          onChange: this.updatePlot.bind(this)
        });
      }

      return _react.default.createElement(_Field.default, this.props, _react.default.createElement("div", {
        className: "text-editor"
      }, editor));
    }
  }]);

  return UnconnectedTextEditor;
}(_react.Component);

exports.UnconnectedTextEditor = UnconnectedTextEditor;
UnconnectedTextEditor.propTypes = _objectSpread({}, _Field.default.propTypes, {
  fullValue: _propTypes.default.any,
  htmlOnly: _propTypes.default.bool,
  latexOnly: _propTypes.default.bool,
  richTextOnly: _propTypes.default.bool,
  updatePlot: _propTypes.default.func,
  placeholder: _propTypes.default.string
});
UnconnectedTextEditor.contextTypes = {
  localize: _propTypes.default.func,
  fullLayout: _propTypes.default.object
};
UnconnectedTextEditor.displayName = 'UnconnectedTextEditor';

var _default = (0, _lib.connectToContainer)(UnconnectedTextEditor, {
  modifyPlotProps: function modifyPlotProps(props, context, plotProps) {
    if (plotProps.isVisible && plotProps.multiValued) {
      plotProps.isVisible = false;
    }

    if (context.fullLayout && context.fullLayout._dfltTitle && Object.values(context.fullLayout._dfltTitle).includes(plotProps.fullValue)) {
      plotProps.placeholder = plotProps.fullValue;
      plotProps.fullValue = '';
    }
  }
});

exports.default = _default;
//# sourceMappingURL=TextEditor.js.map