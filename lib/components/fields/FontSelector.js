"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FontSelector = function FontSelector(props, context) {
  return _react.default.createElement(_Dropdown.default, _extends({}, props, {
    options: context.fontOptions.map(function (_ref) {
      var value = _ref.value,
          label = _ref.label;
      return {
        label: _react.default.createElement("span", {
          style: {
            fontFamily: value
          }
        }, label),
        value: value
      };
    })
  }));
};

FontSelector.propTypes = _objectSpread({}, _Dropdown.default.propTypes);
FontSelector.defaultProps = {
  clearable: false
};
FontSelector.contextTypes = {
  fontOptions: _propTypes.default.array
};
var _default = FontSelector;
exports.default = _default;
//# sourceMappingURL=FontSelector.js.map