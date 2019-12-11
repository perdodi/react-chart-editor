"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Button = _interopRequireDefault(require("../widgets/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

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

var PanelHeader =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelHeader, _Component);

  function PanelHeader() {
    var _this;

    _classCallCheck(this, PanelHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelHeader).call(this));
    _this.state = {
      addPanelOpen: false
    };
    _this.togglePanel = _this.togglePanel.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PanelHeader, [{
    key: "togglePanel",
    value: function togglePanel() {
      this.setState({
        addPanelOpen: !this.state.addPanelOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var _this$props = this.props,
          children = _this$props.children,
          addAction = _this$props.addAction,
          allowCollapse = _this$props.allowCollapse,
          toggleFolds = _this$props.toggleFolds,
          hasOpen = _this$props.hasOpen; // dropdown is styled with same styles as react-select component - see _dropdown.scss

      var icon = _react.default.createElement(_plotlyIcons.PlusIcon, null);

      return !children && !addAction && !allowCollapse ? null : _react.default.createElement("div", {
        className: "panel__header"
      }, children && children.length ? _react.default.createElement("div", {
        className: "panel__header__content"
      }, children) : null, _react.default.createElement("div", {
        className: "panel__header__actions__container"
      }, allowCollapse ? _react.default.createElement("div", {
        className: "panel__header__collapse",
        onClick: toggleFolds
      }, hasOpen ? _react.default.createElement("span", null, _react.default.createElement(_plotlyIcons.ResizeDownIcon, null), _('Collapse All')) : _react.default.createElement("span", null, _react.default.createElement(_plotlyIcons.ResizeUpIcon, null), _('Expand All'))) : null, addAction ? _react.default.createElement("div", {
        className: "panel__header__action dropdown-container"
      }, _react.default.createElement(_Button.default, {
        variant: "primary",
        className: "js-add-button",
        onClick: Array.isArray(addAction.handler) ? this.togglePanel : function () {
          return addAction.handler(_this2.context);
        },
        icon: icon,
        label: addAction.label
      }), this.state.addPanelOpen && _react.default.createElement("div", {
        className: "Select"
      }, _react.default.createElement("div", {
        className: "Select-menu-outer"
      }, _react.default.createElement("div", {
        className: "Select-menu"
      }, addAction.handler.map(function (_ref) {
        var label = _ref.label,
            handler = _ref.handler;
        return _react.default.createElement("div", {
          className: "Select-option",
          key: label,
          onClick: function onClick() {
            handler(_this2.context);

            _this2.togglePanel();
          }
        }, label);
      }))))) : null));
    }
  }]);

  return PanelHeader;
}(_react.Component);

PanelHeader.contextTypes = {
  layout: _propTypes.default.object,
  fullContainer: _propTypes.default.object,
  onUpdate: _propTypes.default.func,
  updateContainer: _propTypes.default.func,
  localize: _propTypes.default.func
};
PanelHeader.propTypes = {
  addAction: _propTypes.default.object,
  allowCollapse: _propTypes.default.bool,
  children: _propTypes.default.node,
  hasOpen: _propTypes.default.bool,
  toggleFolds: _propTypes.default.func
};
var _default = PanelHeader;
exports.default = _default;
//# sourceMappingURL=PanelHeader.js.map