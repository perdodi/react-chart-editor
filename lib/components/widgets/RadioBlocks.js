"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RadioBlocks =
/*#__PURE__*/
function (_Component) {
  _inherits(RadioBlocks, _Component);

  function RadioBlocks(props) {
    var _this;

    _classCallCheck(this, RadioBlocks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RadioBlocks).call(this, props));
    _this.state = {
      activeOption: _this.props.activeOption
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.renderOption = _this.renderOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(RadioBlocks, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // Reset the value to the graph's actual value
      if (nextProps.activeOption !== this.state.activeOption) {
        this.setState({
          activeOption: nextProps.activeOption
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(newValue) {
      this.setState({
        activeOption: newValue
      });
      this.props.onOptionChange(newValue);
    }
  }, {
    key: "renderOption",
    value: function renderOption(optionName) {
      var _this2 = this;

      var label = optionName.label,
          value = optionName.value,
          Icon = optionName.icon;
      var defaultActive = this.state.activeOption === value;
      var optionClass = (0, _classnames.default)('radio-block__option', {
        'radio-block__option--active': defaultActive
      });
      return _react.default.createElement("div", {
        className: optionClass,
        key: value,
        checked: defaultActive,
        onClick: function onClick() {
          return _this2.handleChange(value);
        }
      }, Icon ? _react.default.createElement(Icon, {
        className: "radio-block__icon"
      }) : null, label ? _react.default.createElement("span", null, label) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var optionList = this.props.options.map(this.renderOption);
      var groupClass = (0, _classnames.default)('radio-block', 'radio-block__group', {
        'radio-block__group--center': this.props.alignment === 'center'
      });
      return _react.default.createElement("div", {
        className: groupClass
      }, optionList);
    }
  }]);

  return RadioBlocks;
}(_react.Component);

RadioBlocks.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.number]).isRequired,
    label: _propTypes.default.string,
    icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
    disabled: _propTypes.default.bool
  })),
  onOptionChange: _propTypes.default.func.isRequired,
  activeOption: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.bool, _propTypes.default.number]),
  radioClassName: _propTypes.default.string,
  // One of right, left, center
  alignment: _propTypes.default.string
};
var _default = RadioBlocks;
exports.default = _default;
//# sourceMappingURL=RadioBlocks.js.map