"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ModalBox = _interopRequireDefault(require("./ModalBox"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _plotlyIcons = require("plotly-icons");

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

var MenuPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuPanel, _Component);

  function MenuPanel() {
    var _this;

    _classCallCheck(this, MenuPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MenuPanel).call(this));
    _this.state = {
      isOpen: false
    };
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(MenuPanel, [{
    key: "getIcon",
    value: function getIcon() {
      var _this$props = this.props,
          question = _this$props.question,
          Icon = _this$props.icon;

      if (question) {
        return {
          icon: _react.default.createElement(_plotlyIcons.QuestionIcon, {
            className: "menupanel__icon"
          }),
          spanClass: "menupanel__icon-span menupanel__icon-span--question"
        };
      }

      if (Icon) {
        return {
          icon: _react.default.createElement(Icon, {
            className: "menupanel__icon"
          }),
          spanClass: "menupanel__icon-span"
        };
      }

      return {
        icon: _react.default.createElement(_plotlyIcons.CogIcon, {
          className: "menupanel__icon"
        }),
        spanClass: 'menupanel__icon-span menupanel__icon-span--cog'
      };
    }
  }, {
    key: "togglePanel",
    value: function togglePanel() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          show = _this$props2.show,
          ownline = _this$props2.ownline,
          label = _this$props2.label,
          children = _this$props2.children;
      var isOpen = show || this.state.isOpen;
      var containerClass = (0, _classnames.default)('menupanel', {
        'menupanel--ownline': ownline
      });

      var _this$getIcon = this.getIcon(),
          icon = _this$getIcon.icon,
          spanClass = _this$getIcon.spanClass;

      return _react.default.createElement("div", {
        className: containerClass
      }, _react.default.createElement("div", {
        className: spanClass
      }, _react.default.createElement("div", {
        className: "menupanel__label"
      }, label), _react.default.createElement("div", {
        className: "menupanel__icon__wrapper",
        onClick: this.togglePanel
      }, icon)), isOpen && _react.default.createElement(_ModalBox.default, {
        onClose: this.togglePanel
      }, children));
    }
  }]);

  return MenuPanel;
}(_react.Component);

exports.default = MenuPanel;
MenuPanel.propTypes = {
  children: _propTypes.default.node,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  label: _propTypes.default.string,
  ownline: _propTypes.default.bool,
  question: _propTypes.default.bool,
  show: _propTypes.default.bool
};
//# sourceMappingURL=MenuPanel.js.map