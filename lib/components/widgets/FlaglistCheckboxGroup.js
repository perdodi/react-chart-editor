"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

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

// Component handles activeOption with shape "x+y+z"
// and ties it to the CheckboxGroup Component
var FlaglistCheckboxGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(FlaglistCheckboxGroup, _Component);

  function FlaglistCheckboxGroup(props) {
    var _this;

    _classCallCheck(this, FlaglistCheckboxGroup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FlaglistCheckboxGroup).call(this, props));
    var currentActiveOption;

    if (props.activeOption !== null) {
      currentActiveOption = props.activeOption;
    } else {
      currentActiveOption = '';
    }

    _this.state = {
      activeOption: _this.parseFlags(currentActiveOption)
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } // convert plotly.js's "all" or "none" option in its `flaglist` type
  // to a series of options separated by `+` that our component can handle


  _createClass(FlaglistCheckboxGroup, [{
    key: "parseFlags",
    value: function parseFlags(option) {
      var activeOption;

      if (option === 'all') {
        activeOption = this.props.options.map(function (o) {
          return o.value;
        }).join('+');
      } else if (option === 'none') {
        activeOption = '';
      } else {
        activeOption = option;
      }

      return activeOption;
    } // Sync local state to parent props.

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        activeOption: this.parseFlags(nextProps.activeOption)
      });
    } // Called whenever a checkbox is changed, this updates the local
    // state to reflect the new activeOptions and then called props.onChange with
    // the new options.

  }, {
    key: "handleChange",
    value: function handleChange(newOptions) {
      var newActiveOptions = '';
      newOptions.map(function (option) {
        if (option.checked === true) {
          newActiveOptions += option.value + '+';
        }
      });
      newActiveOptions = newActiveOptions.slice(0, -1);

      if (newActiveOptions.length === 0) {
        newActiveOptions = 'none';
      }

      this.setState({
        activeOption: newActiveOptions
      });
      this.props.onChange(newActiveOptions);
    } // Turns the activeOptions "e.g "x+y+z" into an array that
    // the CheckboxGroup component can handle

  }, {
    key: "renderCheckedOption",
    value: function renderCheckedOption() {
      var activeOptions = typeof this.state.activeOption === 'string' ? this.state.activeOption.split('+') : [this.state.activeOption];
      var allOptions = this.props.options;
      var newOptions = [];
      allOptions.map(function (option) {
        var currentChecked;

        if (activeOptions.indexOf(option.value) > -1) {
          currentChecked = true;
        } else {
          currentChecked = false;
        }

        newOptions.push({
          label: option.label,
          value: option.value,
          checked: currentChecked
        });
      });
      return newOptions;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_CheckboxGroup.default, {
        options: this.renderCheckedOption(),
        onChange: this.handleChange,
        className: this.props.className,
        orientation: this.props.orientation
      });
    }
  }]);

  return FlaglistCheckboxGroup;
}(_react.Component);

FlaglistCheckboxGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.any.isRequired,
    label: _propTypes.default.string.isRequired
  })).isRequired,
  activeOption: _propTypes.default.any,
  onChange: _propTypes.default.func,
  className: _propTypes.default.string,
  orientation: _propTypes.default.string
};
var _default = FlaglistCheckboxGroup;
exports.default = _default;
//# sourceMappingURL=FlaglistCheckboxGroup.js.map