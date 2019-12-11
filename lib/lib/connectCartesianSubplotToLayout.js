"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectCartesianSubplotToLayout;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../lib");

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

function connectCartesianSubplotToLayout(WrappedComponent) {
  var SubplotConnectedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SubplotConnectedComponent, _Component);

    function SubplotConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, SubplotConnectedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SubplotConnectedComponent).call(this, props, context));
      _this.updateSubplot = _this.updateSubplot.bind(_assertThisInitialized(_this));

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(SubplotConnectedComponent, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        var xaxis = props.xaxis,
            yaxis = props.yaxis,
            traceIndexes = props.traceIndexes;
        var container = context.container,
            fullContainer = context.fullContainer,
            data = context.data;
        this.container = {
          xaxis: container[xaxis],
          yaxis: container[yaxis]
        };
        this.fullContainer = {
          xaxis: fullContainer[xaxis],
          yaxis: fullContainer[yaxis]
        };
        var trace = traceIndexes.length > 0 ? data[traceIndexes[0]] : {};
        var fullTrace = (0, _lib.getFullTrace)(props, context);

        if (trace && fullTrace) {
          this.icon = (0, _lib.renderTraceIcon)((0, _lib.plotlyTraceToCustomTrace)(trace));
          this.name = fullTrace.name;
        }
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject(attr.replace('xaxis', _this2.props.xaxis).replace('yaxis', _this2.props.yaxis));
          },
          updateContainer: this.updateSubplot,
          deleteContainer: this.deleteSubplot,
          container: this.container,
          fullContainer: this.fullContainer
        };
      }
    }, {
      key: "updateSubplot",
      value: function updateSubplot(update) {
        var newUpdate = {};

        for (var key in update) {
          var newKey = key.replace('xaxis', this.props.xaxis).replace('yaxis', this.props.yaxis);
          newUpdate[newKey] = update[key];
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, _extends({
          name: this.name,
          icon: this.icon
        }, this.props));
      }
    }]);

    return SubplotConnectedComponent;
  }(_react.Component);

  SubplotConnectedComponent.displayName = "SubplotConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  SubplotConnectedComponent.propTypes = {
    xaxis: _propTypes.default.string.isRequired,
    yaxis: _propTypes.default.string.isRequired
  };
  SubplotConnectedComponent.contextTypes = {
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    data: _propTypes.default.array,
    fullData: _propTypes.default.array,
    onUpdate: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  SubplotConnectedComponent.childContextTypes = {
    updateContainer: _propTypes.default.func,
    deleteContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    getValObject: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  SubplotConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return SubplotConnectedComponent;
}
//# sourceMappingURL=connectCartesianSubplotToLayout.js.map