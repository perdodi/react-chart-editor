"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ENTER_KEYCODE = 13; // A generic component to handle text that can be edited when the user
// clicks on it.

var EditableText =
/*#__PURE__*/
function (_Component) {
  _inherits(EditableText, _Component);

  function EditableText(props) {
    var _this;

    _classCallCheck(this, EditableText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EditableText).call(this, props));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleUpdate = _this.handleUpdate.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleWheel = _this.handleWheel.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(EditableText, [{
    key: "getRef",
    value: function getRef(c) {
      this._ref = c;
    } // Selects/highlights all of the text in the filename input

  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      event.target.select();
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange(event.target.value);
      }
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate(event) {
      var onUpdate = this.props.onUpdate;

      if (onUpdate) {
        onUpdate(event.target.value);
      }
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      // This will force handleUpdate to be called via the input's onBlur
      if ((event.keyCode || event.which) === ENTER_KEYCODE) {
        this._ref.blur();
      }
    }
  }, {
    key: "handleWheel",
    value: function handleWheel(event) {
      if (this.props.onWheel && document.activeElement === this._ref) {
        this.props.onWheel(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          className = _this$props.className,
          text = _this$props.text,
          disable = _this$props.disable,
          autoFocus = _this$props.autoFocus,
          onKeyDown = _this$props.onKeyDown,
          placeholder = _this$props.placeholder,
          readOnly = _this$props.readOnly,
          size = _this$props.size;
      return _react.default.createElement("input", {
        ref: this.getRef,
        type: type,
        className: className || '',
        value: text,
        onFocus: this.handleFocus,
        onChange: this.handleChange,
        onBlur: this.handleUpdate,
        disabled: disable,
        autoFocus: autoFocus,
        onKeyPress: this.handleKeyPress,
        onKeyDown: onKeyDown,
        onWheel: this.handleWheel,
        placeholder: placeholder,
        readOnly: readOnly,
        size: size
      });
    }
  }]);

  return EditableText;
}(_react.Component);

EditableText.propTypes = {
  // Called with input value on changes (as the user types)
  onChange: _propTypes.default.func,
  // Called with input value on blur (and enter if no onEnter is given)
  onUpdate: _propTypes.default.func,
  // Called on input keyDown events
  onKeyDown: _propTypes.default.func,
  onWheel: _propTypes.default.func,
  // Input value property ...
  text: _propTypes.default.any,
  // Input properties
  placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  className: _propTypes.default.string,
  disable: _propTypes.default.bool,
  autoFocus: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  type: _propTypes.default.oneOf(['text', 'password']),
  size: _propTypes.default.number
};
EditableText.defaultProps = {
  readOnly: false,
  type: 'text'
};
var _default = EditableText;
exports.default = _default;
//# sourceMappingURL=EditableText.js.map