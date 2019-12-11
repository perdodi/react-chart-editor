"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropzone =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropzone, _Component);

  function Dropzone(props, context) {
    var _this;

    _classCallCheck(this, Dropzone);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropzone).call(this, props, context));
    _this.state = {
      content: ''
    };
    _this.validFiletypes = {
      image: 'image/jpeg, image/jpg, image/svg, image/png, image/gif, image/bmp, image/webp',
      geojson: 'application/json'
    };
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_this));
    _this.parsingError = _this.parsingError.bind(_assertThisInitialized(_this));
    _this.renderSuccess = _this.renderSuccess.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropzone, [{
    key: "renderSuccess",
    value: function renderSuccess(value) {
      var _ = this.context.localize;

      if (this.props.fileType === 'image') {
        return _react.default.createElement("div", {
          className: "dropzone-container__image",
          style: {
            backgroundImage: "url(".concat(value, ")")
          }
        });
      }

      if (this.props.fileType === 'geojson') {
        return _react.default.createElement("div", {
          className: "dropzone-container__message"
        }, _react.default.createElement("p", null, _('GeoJSON loaded!')), _react.default.createElement("p", null, value.features.length + _(' features detected.')));
      }

      return _react.default.createElement("div", {
        className: "dropzone-container__message"
      }, _('File loaded!'));
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _ = this.context.localize;

      if (this.props.value && this.props.value !== '') {
        this.setState({
          content: this.renderSuccess(this.props.value)
        });
        return;
      }

      this.setState({
        content: _react.default.createElement("div", {
          className: "dropzone-container__message"
        }, _react.default.createElement("p", null, _('Drop the ') + this.props.fileType + _(' to upload here or click to choose a file from your computer.')), this.validFiletypes[this.props.fileType] ? _react.default.createElement("p", null, _('Supported formats are: ') + this.validFiletypes[this.props.fileType].split('image/').join('') + '.') : null)
      });
    }
  }, {
    key: "parsingError",
    value: function parsingError() {
      var _ = this.context.localize;
      var supportedFileTypes = this.props.fileType === 'image' ? this.validFiletypes[this.props.fileType].split('image/').join('') : this.validFiletypes[this.props.fileType];
      return _react.default.createElement("div", {
        className: "dropzone-container__message"
      }, _("Yikes! This doesn't look like a valid ") + this.props.fileType, _react.default.createElement("p", null, _('Try again with a supported file format: ') + supportedFileTypes + '.'));
    }
  }, {
    key: "onLoad",
    value: function onLoad(e) {
      try {
        var payload = e.target.result;
        var parsedValue = this.props.fileType === 'image' ? payload : JSON.parse(payload);
        this.props.onUpdate(parsedValue);
        this.setState({
          content: this.renderSuccess(parsedValue)
        });
      } catch (error) {
        console.warn(error); // eslint-disable-line

        this.setState({
          content: this.parsingError()
        });
      }
    }
  }, {
    key: "onDrop",
    value: function onDrop(accepted, rejected) {
      var _this2 = this;

      var _ = this.context.localize;
      var reader = new FileReader();

      if (accepted.length) {
        if (accepted.length > 1) {
          this.setState({
            content: _react.default.createElement("div", {
              className: "dropzone-container__message"
            }, _react.default.createElement("p", null, _('Yikes! You can only upload one file at a time.')))
          });
          return;
        }

        this.setState({
          content: _('Loading...')
        });

        reader.onload = function (e) {
          return _this2.onLoad(e);
        };

        if (this.props.fileType === 'image') {
          reader.readAsDataURL(accepted[0]);
        } else if (this.props.fileType === 'geojson') {
          reader.readAsText(accepted[0]);
        }
      }

      if (rejected.length) {
        this.setState({
          content: this.parsingError()
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react.default.createElement(_reactDropzone.default, {
        accept: this.validFiletypes[this.props.fileType],
        onDrop: this.onDrop,
        activeClassName: "dropzone-container--active",
        rejectClassName: "dropzone-container--rejected"
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return _react.default.createElement("div", _extends({}, getRootProps(), {
          className: "dropzone-container"
        }), _react.default.createElement("input", getInputProps()), _react.default.createElement("div", {
          className: "dropzone-container__content"
        }, _this3.state.content));
      });
    }
  }]);

  return Dropzone;
}(_react.Component);

Dropzone.propTypes = {
  fileType: _propTypes.default.string.isRequired,
  onUpdate: _propTypes.default.func,
  value: _propTypes.default.any
};
Dropzone.contextTypes = {
  localize: _propTypes.default.func
};
var _default = Dropzone;
exports.default = _default;
//# sourceMappingURL=Dropzone.js.map