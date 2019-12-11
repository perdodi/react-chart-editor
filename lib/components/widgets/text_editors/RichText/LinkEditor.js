"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../../../lib/constants");

var _reactDom = require("react-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LinkEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkEditor, _Component);

  function LinkEditor(props) {
    var _this;

    _classCallCheck(this, LinkEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkEditor).call(this, props));
    _this.state = {
      // Use cached position to maintain position during times of focus.
      position: _this.getUpdatedPosition(props),
      originalLinkURL: props.linkURL
    };
    return _this;
  }

  _createClass(LinkEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Focus the input field if the URL value is empty
      if (this.props.linkURL.trim() === '') {
        (0, _reactDom.findDOMNode)(this.input).focus();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var props = this.props; // Update position if we are editing a new link

      if (nextProps.linkID !== props.linkID) {
        this.setState({
          position: this.getUpdatedPosition(props)
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Cursor dissappears when component rerenders, to make sure it's present
      // we're using setSelection range to make it appear at the end of text:
      // https://github.com/plotly/streambed/issues/9964
      (0, _reactDom.findDOMNode)(this.input).setSelectionRange(this.props.linkURL.length, this.props.linkURL.length);
    }
  }, {
    key: "getUpdatedPosition",
    value: function getUpdatedPosition(props) {
      var _props$coordinates = props.coordinates,
          x = _props$coordinates.x,
          y = _props$coordinates.y;
      return {
        x: x,
        y: y
      };
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(urlValue) {
      var _this$props = this.props,
          linkID = _this$props.linkID,
          onURLChange = _this$props.onURLChange; // Call back to parent

      onURLChange(linkID, urlValue);
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(ev) {
      /*
       * `KeyboardEvent.key` enjoys excellent cross-browser support.
       * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
       */
      var key = ev.key;

      if (key === _constants.RETURN_KEY) {
        // Save changes
        ev.preventDefault();
        this.props.onClose(this.props.linkID);
      }

      if (key === _constants.ESCAPE_KEY) {
        // Cancel changes
        ev.preventDefault(); // Restore original URL

        this.onInputChange(this.state.originalLinkURL);
        this.props.onClose(this.props.linkID);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _ = this.context.localize;
      var position = this.state.position;
      var _this$props2 = this.props,
          onBlur = _this$props2.onBlur,
          onFocus = _this$props2.onFocus,
          linkURL = _this$props2.linkURL;

      var placeholderText = _('Enter Link URL');

      var urlText = _('URL'); // TODO: add close button


      return _react.default.createElement("div", {
        className: "rich-text-editor__link-editor",
        style: {
          left: position.x,
          top: position.y
        }
      }, _react.default.createElement("span", {
        className: "rich-text-editor__link-editor__label"
      }, urlText), _react.default.createElement("input", {
        className: "rich-text-editor__link-editor__input",
        onBlur: onBlur,
        onFocus: onFocus,
        onChange: function onChange(ev) {
          return _this2.onInputChange(ev.target.value);
        },
        onKeyDown: function onKeyDown(ev) {
          return _this2.onInputKeyDown(ev);
        },
        ref: function ref(input) {
          return _this2.input = input;
        },
        value: linkURL,
        placeholder: placeholderText
      }));
    }
  }]);

  return LinkEditor;
}(_react.Component);

LinkEditor.propTypes = {
  linkID: _propTypes.default.string.isRequired,
  linkURL: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func.isRequired,
  onURLChange: _propTypes.default.func.isRequired,
  coordinates: _propTypes.default.shape({
    x: _propTypes.default.number,
    y: _propTypes.default.number
  })
};
LinkEditor.defaultProps = {
  coordinates: {
    x: 0,
    y: 0
  }
};
LinkEditor.contextTypes = {
  localize: _propTypes.default.func.isRequired
};
var _default = LinkEditor;
exports.default = _default;
//# sourceMappingURL=LinkEditor.js.map