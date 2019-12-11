"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _factory = _interopRequireDefault(require("react-plotly.js/factory"));

var _EditorControls = _interopRequireDefault(require("./EditorControls"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("./lib/constants");

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

var PlotlyEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(PlotlyEditor, _Component);

  function PlotlyEditor(props) {
    var _this;

    _classCallCheck(this, PlotlyEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PlotlyEditor).call(this));
    _this.state = {
      graphDiv: {}
    };
    _this.PlotComponent = (0, _factory.default)(props.plotly);
    _this.handleRender = _this.handleRender.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PlotlyEditor, [{
    key: "handleRender",
    value: function handleRender(fig, graphDiv) {
      this.setState({
        graphDiv: graphDiv
      });

      if (this.props.onRender) {
        this.props.onRender(graphDiv.data, graphDiv.layout, graphDiv._transitionData._frames);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "plotly_editor"
      }, !this.props.hideControls && _react.default.createElement(_EditorControls.default, {
        graphDiv: this.state.graphDiv,
        dataSources: this.props.dataSources,
        dataSourceOptions: this.props.dataSourceOptions,
        plotly: this.props.plotly,
        onUpdate: this.props.onUpdate,
        advancedTraceTypeSelector: this.props.advancedTraceTypeSelector,
        locale: this.props.locale,
        traceTypesConfig: this.props.traceTypesConfig,
        dictionaries: this.props.dictionaries,
        showFieldTooltips: this.props.showFieldTooltips,
        srcConverters: this.props.srcConverters,
        makeDefaultTrace: this.props.makeDefaultTrace,
        glByDefault: this.props.glByDefault,
        mapBoxAccess: Boolean(this.props.config && this.props.config.mapboxAccessToken),
        fontOptions: this.props.fontOptions,
        chartHelp: this.props.chartHelp,
        customConfig: this.props.customConfig
      }, this.props.children), _react.default.createElement("div", {
        className: "plotly_editor_plot",
        style: {
          width: '100%',
          height: '100%'
        }
      }, _react.default.createElement(this.PlotComponent, {
        data: this.props.data,
        layout: this.props.layout,
        frames: this.props.frames,
        config: this.props.config,
        useResizeHandler: this.props.useResizeHandler,
        debug: this.props.debug,
        onInitialized: this.handleRender,
        onUpdate: this.handleRender,
        style: {
          width: '100%',
          height: '100%'
        },
        divId: this.props.divId
      })));
    }
  }]);

  return PlotlyEditor;
}(_react.Component);

PlotlyEditor.propTypes = {
  children: _propTypes.default.any,
  layout: _propTypes.default.object,
  data: _propTypes.default.array,
  config: _propTypes.default.object,
  dataSourceOptions: _propTypes.default.array,
  dataSources: _propTypes.default.object,
  frames: _propTypes.default.array,
  onUpdate: _propTypes.default.func,
  onRender: _propTypes.default.func,
  plotly: _propTypes.default.object,
  useResizeHandler: _propTypes.default.bool,
  debug: _propTypes.default.bool,
  advancedTraceTypeSelector: _propTypes.default.bool,
  locale: _propTypes.default.string,
  traceTypesConfig: _propTypes.default.object,
  dictionaries: _propTypes.default.object,
  divId: _propTypes.default.string,
  hideControls: _propTypes.default.bool,
  showFieldTooltips: _propTypes.default.bool,
  srcConverters: _propTypes.default.shape({
    toSrc: _propTypes.default.func.isRequired,
    fromSrc: _propTypes.default.func.isRequired
  }),
  makeDefaultTrace: _propTypes.default.func,
  glByDefault: _propTypes.default.bool,
  fontOptions: _propTypes.default.array,
  chartHelp: _propTypes.default.object,
  customConfig: _propTypes.default.object
};
PlotlyEditor.defaultProps = {
  hideControls: false,
  showFieldTooltips: false,
  fontOptions: _constants.DEFAULT_FONTS
};
var _default = PlotlyEditor;
exports.default = _default;
//# sourceMappingURL=PlotlyEditor.js.map