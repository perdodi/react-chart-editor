"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContent = exports.ModalHeader = exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _plotlyIcons = require("plotly-icons");

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

var ModalHeader = function ModalHeader(_ref) {
  var title = _ref.title,
      handleClose = _ref.handleClose;
  return _react.default.createElement("div", {
    className: "modal__header"
  }, title ? _react.default.createElement("div", {
    className: "modal__header__title"
  }, title) : null, handleClose ? _react.default.createElement("div", {
    className: "modal__header__close",
    onClick: handleClose ? function () {
      return handleClose();
    } : null
  }, _react.default.createElement(_plotlyIcons.CloseIcon, null)) : null);
};

exports.ModalHeader = ModalHeader;

var ModalContent = function ModalContent(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", {
    className: "modal__content"
  }, children);
};

exports.ModalContent = ModalContent;

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.escFunction = _this.escFunction.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Modal, [{
    key: "escFunction",
    value: function escFunction(event) {
      var escKeyCode = 27;

      if (event.keyCode === escKeyCode) {
        this.context.handleClose();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.escFunction, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.escFunction, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          title = _this$props.title;
      var classes = 'modal';

      if (this.context.isAnimatingOut) {
        classes += ' modal--animate-out';
      }

      return _react.default.createElement("div", {
        className: classes
      }, _react.default.createElement("div", {
        className: "modal__card"
      }, _react.default.createElement(ModalHeader, {
        title: title,
        handleClose: function handleClose() {
          return _this2.context.handleClose();
        }
      }), _react.default.createElement(ModalContent, null, children)), _react.default.createElement("div", {
        className: "modal__backdrop",
        onClick: function onClick() {
          return _this2.context.handleClose();
        }
      }));
    }
  }]);

  return Modal;
}(_react.Component);

ModalHeader.propTypes = {
  title: _propTypes.default.node,
  handleClose: _propTypes.default.func.isRequired
};
ModalContent.propTypes = {
  children: _propTypes.default.node.isRequired
};
Modal.propTypes = {
  children: _propTypes.default.node.isRequired,
  title: _propTypes.default.node
};
Modal.contextTypes = {
  handleClose: _propTypes.default.func,
  isAnimatingOut: _propTypes.default.bool
};
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map