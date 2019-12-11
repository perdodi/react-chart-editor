"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

var _RadioBlocks = _interopRequireDefault(require("../widgets/RadioBlocks"));

var _Field = _interopRequireDefault(require("./Field"));

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ErrorBars =
/*#__PURE__*/
function (_Component) {
  _inherits(ErrorBars, _Component);

  function ErrorBars(props, context) {
    var _this;

    _classCallCheck(this, ErrorBars);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ErrorBars).call(this, props, context));
    _this.updatePlot = _this.updatePlot.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ErrorBars, [{
    key: "updatePlot",
    value: function updatePlot(value) {
      if (value === 'symmetric') {
        this.props.updatePlot(_objectSpread({}, this.props.fullValue, {
          visible: true,
          symmetric: true
        }));
      }

      if (value === 'asymmetric') {
        this.props.updatePlot(_objectSpread({}, this.props.fullValue, {
          visible: true,
          symmetric: false
        }));
      }

      if (value === 'hidden') {
        this.props.updatePlot(_objectSpread({}, this.props.fullValue, {
          visible: false
        }));
      }
    }
  }, {
    key: "getMode",
    value: function getMode() {
      var mode;

      if (!this.props.fullValue.visible) {
        mode = 'hidden';
      }

      if (this.props.fullValue.visible && (this.props.fullValue.symmetric || typeof this.props.fullValue.symmetric === 'undefined')) {
        // when this.props.fullValue.type === 'sqrt',
        // then this.props.fullValue.symmetric is undefined, but 'sqrt' is only
        // applicable when we want symmetric error bars
        // https://github.com/plotly/plotly.js/issues/2359
        mode = 'symmetric';
      }

      if (this.props.fullValue.visible && this.props.fullValue.symmetric === false) {
        // it has to be explicitly set to false, because we don't want it to catch
        // cases when it's undefined
        mode = 'asymmetric';
      }

      return mode;
    }
  }, {
    key: "renderModeSelector",
    value: function renderModeSelector() {
      var _ = this.context.localize;
      return _react.default.createElement(_Field.default, null, _react.default.createElement(_RadioBlocks.default, {
        alignment: "center",
        onOptionChange: this.updatePlot,
        activeOption: this.getMode(),
        options: [{
          label: _('None'),
          value: 'hidden'
        }, {
          label: _('Symmetric'),
          value: 'symmetric'
        }, {
          label: _('Asymmetric'),
          value: 'asymmetric'
        }]
      }));
    }
  }, {
    key: "renderErrorBarControls",
    value: function renderErrorBarControls() {
      var _ = this.context.localize;
      var mode = this.getMode();
      var showCustomDataControl = this.props.fullValue.type === 'data';

      var styleAttrs = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Radio, {
        label: _('Copy Y Style'),
        attr: "".concat(this.props.attr, ".copy_ystyle"),
        options: [{
          label: _('Yes'),
          value: true
        }, {
          label: _('No'),
          value: false
        }]
      }), _react.default.createElement(_index.Radio, {
        label: _('Copy Z Style'),
        attr: "".concat(this.props.attr, ".copy_zstyle"),
        options: [{
          label: _('Yes'),
          value: true
        }, {
          label: _('No'),
          value: false
        }]
      }), _react.default.createElement(_index.MultiColorPicker, {
        label: _('Color'),
        attr: "".concat(this.props.attr, ".color")
      }), _react.default.createElement(_index.Numeric, {
        label: _('Thickness'),
        attr: "".concat(this.props.attr, ".thickness")
      }), _react.default.createElement(_index.Numeric, {
        label: _('Crossbar Width'),
        attr: "".concat(this.props.attr, ".width")
      }));

      if (mode === 'symmetric') {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Radio, {
          label: _('Error Type'),
          attr: "".concat(this.props.attr, ".type"),
          options: [{
            label: _('%'),
            value: 'percent'
          }, {
            label: _('Constant'),
            value: 'constant'
          }, {
            label: _('√'),
            value: 'sqrt'
          }, {
            label: _('Data'),
            value: 'data'
          }]
        }), _react.default.createElement(_index.Numeric, {
          label: _('Value'),
          attr: "".concat(this.props.attr, ".value")
        }), showCustomDataControl ? _react.default.createElement(_index.DataSelector, {
          label: _('Custom Data'),
          attr: "".concat(this.props.attr, ".array")
        }) : null, styleAttrs);
      }

      if (mode === 'asymmetric') {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Radio, {
          label: _('Error Type'),
          attr: "".concat(this.props.attr, ".type"),
          options: [{
            label: _('%'),
            value: 'percent'
          }, {
            label: _('Constant'),
            value: 'constant'
          }, {
            label: _('Data'),
            value: 'data'
          }]
        }), _react.default.createElement(_index.Numeric, {
          label: _('Value'),
          attr: "".concat(this.props.attr, ".value")
        }), _react.default.createElement(_index.Numeric, {
          label: _('Value (-)'),
          attr: "".concat(this.props.attr, ".valueminus")
        }), showCustomDataControl ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.DataSelector, {
          label: _('Error (+)'),
          attr: "".concat(this.props.attr, ".array")
        }), _react.default.createElement(_index.DataSelector, {
          label: _('Error (-)'),
          attr: "".concat(this.props.attr, ".arrayminus")
        })) : null, styleAttrs);
      }

      return null;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, this.renderModeSelector(), this.renderErrorBarControls());
    }
  }]);

  return ErrorBars;
}(_react.Component);

ErrorBars.propTypes = {
  attr: _propTypes.default.string,
  fullValue: _propTypes.default.object,
  updatePlot: _propTypes.default.func
};
ErrorBars.contextTypes = {
  localize: _propTypes.default.func
};

var _default = (0, _lib.connectToContainer)(ErrorBars);

exports.default = _default;
//# sourceMappingURL=ErrorBars.js.map