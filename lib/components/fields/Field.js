"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FieldDelete = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _MenuPanel = _interopRequireDefault(require("../containers/MenuPanel"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

var _plotlyIcons = require("plotly-icons");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var FieldDelete =
/*#__PURE__*/
function (_Component) {
  _inherits(FieldDelete, _Component);

  function FieldDelete() {
    _classCallCheck(this, FieldDelete);

    return _possibleConstructorReturn(this, _getPrototypeOf(FieldDelete).apply(this, arguments));
  }

  _createClass(FieldDelete, [{
    key: "render",
    value: function render() {
      var onClick = this.props.onClick;
      return _react.default.createElement("div", {
        className: "field__delete",
        onClick: onClick
      }, _react.default.createElement(_plotlyIcons.CloseIcon, null));
    }
  }]);

  return FieldDelete;
}(_react.Component);

exports.FieldDelete = FieldDelete;

var Field =
/*#__PURE__*/
function (_Component2) {
  _inherits(Field, _Component2);

  function Field() {
    _classCallCheck(this, Field);

    return _possibleConstructorReturn(this, _getPrototypeOf(Field).apply(this, arguments));
  }

  _createClass(Field, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          center = _this$props.center,
          children = _this$props.children,
          label = _this$props.label,
          multiValued = _this$props.multiValued,
          suppressMultiValuedMessage = _this$props.suppressMultiValuedMessage,
          units = _this$props.units,
          extraComponent = _this$props.extraComponent,
          fieldContainerClassName = _this$props.fieldContainerClassName,
          labelWidth = _this$props.labelWidth;
      var _ = this.context.localize;
      var fieldClass;

      if (!label) {
        fieldClass = (0, _classnames2.default)('field__no-title', {
          'field__no-title--center': center
        });
      } else {
        fieldClass = (0, _classnames2.default)('field__widget', {
          'field__widget--units': Boolean(units)
        });
      }

      var tooltip = this.context.attr;

      if (this.context.description) {
        tooltip += ' – ' + this.context.description.replace(/`/g, '"').replace(/\*/g, '"');
      }

      var containerClassName = (0, _classnames2.default)((0, _lib.bem)('field'), _defineProperty({}, fieldContainerClassName, Boolean(fieldContainerClassName)));
      return _react.default.createElement("div", {
        className: containerClassName
      }, label ? _react.default.createElement("div", {
        className: (0, _lib.bem)('field', 'title'),
        style: labelWidth ? {
          minWidth: labelWidth + 'px'
        } : {}
      }, this.context.showFieldTooltips ? _react.default.createElement("div", {
        className: (0, _lib.bem)('field', 'title-text'),
        "aria-label": tooltip,
        "data-microtip-position": "bottom-right",
        "data-microtip-size": "large",
        role: "tooltip"
      }, label) : _react.default.createElement("div", {
        className: (0, _lib.bem)('field', 'title-text')
      }, label)) : null, _react.default.createElement("div", {
        className: fieldClass
      }, children, extraComponent ? extraComponent : null, multiValued && !suppressMultiValuedMessage ? _react.default.createElement(_MenuPanel.default, {
        label: (0, _constants.getMultiValueText)('title', _),
        ownline: true,
        question: true
      }, _react.default.createElement("div", {
        className: "info__title"
      }, (0, _constants.getMultiValueText)('title', _)), _react.default.createElement("div", {
        className: "info__text"
      }, (0, _constants.getMultiValueText)('text', _)), _react.default.createElement("div", {
        className: "info__sub-text"
      }, (0, _constants.getMultiValueText)('subText', _))) : null), units ? _react.default.createElement("div", {
        className: (0, _lib.bem)('field', 'units')
      }, _react.default.createElement("div", {
        className: (0, _lib.bem)('field', 'units-text')
      }, units)) : null);
    }
  }]);

  return Field;
}(_react.Component);

Field.propTypes = {
  labelWidth: _propTypes.default.number,
  center: _propTypes.default.bool,
  label: _propTypes.default.any,
  units: _propTypes.default.string,
  multiValued: _propTypes.default.bool,
  suppressMultiValuedMessage: _propTypes.default.bool,
  children: _propTypes.default.node,
  extraComponent: _propTypes.default.any,
  fieldContainerClassName: _propTypes.default.string
};
Field.contextTypes = {
  localize: _propTypes.default.func,
  description: _propTypes.default.string,
  attr: _propTypes.default.string,
  showFieldTooltips: _propTypes.default.bool
};
Field.defaultProps = {
  center: false,
  multiValued: false
};
FieldDelete.propTypes = {
  onClick: _propTypes.default.func
};
var _default = Field;
exports.default = _default;
//# sourceMappingURL=Field.js.map