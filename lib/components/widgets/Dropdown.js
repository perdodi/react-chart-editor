"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _classnames2 = _interopRequireDefault(require("classnames"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "onChange",
    value: function onChange(selection) {
      var _this$props = this.props,
          multi = _this$props.multi,
          onChange = _this$props.onChange,
          valueKey = _this$props.valueKey;

      if (!selection) {
        return onChange(null);
      }

      return multi ? onChange(selection.map(function (s) {
        return s[valueKey];
      })) : onChange(selection[valueKey]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          minWidth = _this$props2.minWidth,
          placeholder = _this$props2.placeholder,
          clearable = _this$props2.clearable,
          value = _this$props2.value,
          options = _this$props2.options,
          searchable = _this$props2.searchable,
          multi = _this$props2.multi,
          noResultsText = _this$props2.noResultsText,
          valueKey = _this$props2.valueKey,
          disabled = _this$props2.disabled,
          className = _this$props2.className,
          width = _this$props2.width;
      var _ = this.context.localize;
      var dropdownStyle = {
        minWidth: minWidth
      };

      if (width) {
        dropdownStyle.width = width;
      }

      var opts = options.map(function (opt) {
        return typeof opt === 'string' ? _defineProperty({
          label: opt
        }, valueKey, opt) : opt;
      });
      var dropdownContainerClass = (0, _classnames2.default)('dropdown-container', _defineProperty({
        'dropdown--dark': this.props.backgroundDark
      }, className, className));
      return _react.default.createElement("div", {
        className: dropdownContainerClass,
        style: dropdownStyle
      }, _react.default.createElement(_reactSelect.default, {
        placeholder: placeholder || _('Select an Option'),
        isClearable: clearable,
        value: opts.filter(function (o) {
          return Array.isArray(value) ? value.includes(o[valueKey]) : value === o[valueKey];
        }),
        options: opts,
        isSearchable: searchable,
        onChange: this.onChange,
        isMulti: multi,
        noOptionsMessage: function noOptionsMessage() {
          return noResultsText || _('No Results');
        },
        getOptionValue: function getOptionValue(o) {
          return o[valueKey];
        },
        getOptionLabel: function getOptionLabel(o) {
          return o.label;
        },
        isDisabled: disabled,
        className: dropdownContainerClass,
        classNamePrefix: "Select",
        components: this.props.components
      }));
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  clearable: true,
  multi: false,
  searchable: false,
  minWidth: '120px',
  valueKey: 'value',
  disabled: false
};
Dropdown.propTypes = {
  backgroundDark: _propTypes.default.bool,
  clearable: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.array.isRequired,
  placeholder: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  searchable: _propTypes.default.bool,
  minWidth: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  valueKey: _propTypes.default.string,
  value: _propTypes.default.any,
  multi: _propTypes.default.bool,
  components: _propTypes.default.object,
  noResultsText: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
Dropdown.contextTypes = {
  localize: _propTypes.default.func
};
var _default = Dropdown;
exports.default = _default;
//# sourceMappingURL=Dropdown.js.map