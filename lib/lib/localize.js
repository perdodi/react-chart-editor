"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = localize;
exports.localizeString = localizeString;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

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

function localize(Comp) {
  var LocalizedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LocalizedComponent, _Component);

    function LocalizedComponent(props, context) {
      var _this;

      _classCallCheck(this, LocalizedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LocalizedComponent).call(this, props, context));
      var dictionaries = context.dictionaries;
      var locale = context.locale;

      _this.localize = function localize(str) {
        return localizeString(dictionaries, locale, str);
      };

      return _this;
    }

    _createClass(LocalizedComponent, [{
      key: "render",
      value: function render() {
        return _react.default.createElement(Comp, _extends({
          localize: this.localize
        }, this.props));
      }
    }]);

    return LocalizedComponent;
  }(_react.Component);

  LocalizedComponent.displayName = "Localized".concat((0, _.getDisplayName)(Comp));
  LocalizedComponent.contextTypes = LocalizedComponent.contextTypes || {};
  LocalizedComponent.contextTypes.dictionaries = _propTypes.default.object;
  LocalizedComponent.contextTypes.locale = _propTypes.default.string;
  LocalizedComponent.plotly_editor_traits = Comp.plotly_editor_traits;
  return LocalizedComponent;
}

function localizeString(dictionaries, locale, key) {
  var dict = dictionaries[locale];

  if (dict && dict.hasOwnProperty(key)) {
    return dict[key];
  }

  return key;
}
//# sourceMappingURL=localize.js.map