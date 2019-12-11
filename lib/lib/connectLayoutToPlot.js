"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectLayoutToPlot;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _nested_property = _interopRequireDefault(require("plotly.js/src/lib/nested_property"));

var _lib = require("../lib");

var _constants = require("./constants");

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

function connectLayoutToPlot(WrappedComponent) {
  var LayoutConnectedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(LayoutConnectedComponent, _Component);

    function LayoutConnectedComponent() {
      _classCallCheck(this, LayoutConnectedComponent);

      return _possibleConstructorReturn(this, _getPrototypeOf(LayoutConnectedComponent).apply(this, arguments));
    }

    _createClass(LayoutConnectedComponent, [{
      key: "getChildContext",
      value: function getChildContext() {
        var _this$context = this.context,
            layout = _this$context.layout,
            fullLayout = _this$context.fullLayout,
            plotly = _this$context.plotly,
            onUpdate = _this$context.onUpdate;

        var updateContainer = function updateContainer(update) {
          if (!onUpdate) {
            return;
          }

          onUpdate({
            type: _constants.EDITOR_ACTIONS.UPDATE_LAYOUT,
            payload: {
              update: update
            }
          });
        };

        return {
          getValObject: function getValObject(attr) {
            return !plotly ? null : plotly.PlotSchema.getLayoutValObject(fullLayout, (0, _nested_property.default)({}, attr).parts);
          },
          updateContainer: updateContainer,
          container: layout,
          fullContainer: fullLayout
        };
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return LayoutConnectedComponent;
  }(_react.Component);

  LayoutConnectedComponent.displayName = "LayoutConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  LayoutConnectedComponent.contextTypes = {
    layout: _propTypes.default.object,
    fullLayout: _propTypes.default.object,
    plotly: _propTypes.default.object,
    onUpdate: _propTypes.default.func
  };
  LayoutConnectedComponent.childContextTypes = {
    getValObject: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  LayoutConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return LayoutConnectedComponent;
}
//# sourceMappingURL=connectLayoutToPlot.js.map