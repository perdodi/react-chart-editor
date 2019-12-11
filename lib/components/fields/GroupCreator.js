"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _Field = _interopRequireDefault(require("./Field"));

var _Dropdown = _interopRequireDefault(require("./Dropdown"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _plotlyIcons = require("plotly-icons");

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var UnconnectedGroupCreator =
/*#__PURE__*/
function (_Component) {
  _inherits(UnconnectedGroupCreator, _Component);

  function UnconnectedGroupCreator() {
    _classCallCheck(this, UnconnectedGroupCreator);

    return _possibleConstructorReturn(this, _getPrototypeOf(UnconnectedGroupCreator).apply(this, arguments));
  }

  _createClass(UnconnectedGroupCreator, [{
    key: "getAllGroups",
    value: function getAllGroups() {
      var _this = this;

      return _toConsumableArray(new Set(this.context.data.map(function (t) {
        return t[_this.props.attr];
      }))).filter(function (g) {
        return Boolean(g);
      });
    }
  }, {
    key: "canAddGroup",
    value: function canAddGroup() {
      var _this$props = this.props,
          fullContainer = _this$props.fullContainer,
          attr = _this$props.attr;
      var currentGroup = fullContainer[attr];
      var currentTraceIndex = fullContainer.index;

      if (fullContainer.index === _constants.MULTI_VALUED) {
        return this.getAllGroups().length === 0;
      }

      return !currentGroup || this.context.fullData.some(function (d) {
        return d.index !== currentTraceIndex && d[attr] === currentGroup;
      });
    }
  }, {
    key: "addAndUpdateGroup",
    value: function addAndUpdateGroup() {
      var _this2 = this;

      var allGroups = this.context.fullData.map(function (t) {
        return parseInt(t[_this2.props.attr], 10);
      }).filter(function (n) {
        return Number.isInteger(n);
      }); // don't want to pass empty array to max

      allGroups.push(0);
      var lastGroupNumber = Math.max.apply(Math, allGroups);
      this.props.updatePlot(lastGroupNumber + 1);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _ = this.context.localize;
      var _this$props2 = this.props,
          attr = _this$props2.attr,
          label = _this$props2.label,
          prefix = _this$props2.prefix,
          updatePlot = _this$props2.updatePlot;
      var options = [{
        label: _('None'),
        value: ''
      }];
      var allGroups = this.getAllGroups();
      allGroups.forEach(function (g) {
        return options.push({
          label: "".concat(prefix, " ").concat(g),
          value: g
        });
      });
      options.sort(function (a, b) {
        return a.value - b.value;
      });

      var icon = _react.default.createElement(_plotlyIcons.PlusIcon, null);

      var addButton = this.canAddGroup() ? _react.default.createElement(_Button.default, {
        variant: "no-text",
        icon: icon,
        onClick: function onClick() {
          return _this3.addAndUpdateGroup();
        }
      }) : _react.default.createElement(_Button.default, {
        variant: "no-text--disabled",
        icon: icon,
        onClick: function onClick() {}
      });
      return _react.default.createElement(_Dropdown.default, {
        label: label,
        attr: attr,
        clearable: false,
        options: options,
        updatePlot: updatePlot,
        extraComponent: addButton
      });
    }
  }]);

  return UnconnectedGroupCreator;
}(_react.Component);

UnconnectedGroupCreator.propTypes = _objectSpread({
  attr: _propTypes.default.string,
  fullContainer: _propTypes.default.object,
  prefix: _propTypes.default.string
}, _Field.default.propTypes);
UnconnectedGroupCreator.contextTypes = {
  localize: _propTypes.default.func,
  data: _propTypes.default.array,
  fullData: _propTypes.default.array
};
UnconnectedGroupCreator.displayName = 'UnconnectedGroupCreator';

var _default = (0, _lib.connectToContainer)(UnconnectedGroupCreator);

exports.default = _default;
//# sourceMappingURL=GroupCreator.js.map