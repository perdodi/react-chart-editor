"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TraceTypeSection = exports.LayoutSection = exports.LayoutPanel = void 0;

var _react = _interopRequireDefault(require("react"));

var _PlotlyPanel = _interopRequireDefault(require("./PlotlyPanel"));

var _PlotlySection = _interopRequireDefault(require("./PlotlySection"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LayoutPanel = (0, _lib.connectLayoutToPlot)(_PlotlyPanel.default);
exports.LayoutPanel = LayoutPanel;
var LayoutSection = (0, _lib.connectLayoutToPlot)(_PlotlySection.default);
exports.LayoutSection = LayoutSection;

var TraceTypeSection = function TraceTypeSection(props, context) {
  var fullContainer = context.fullContainer,
      fullData = context.fullData;
  var mode = props.mode,
      traceTypes = props.traceTypes;
  var ifConnectedToTrace = mode === 'trace' && fullContainer && traceTypes.includes(fullContainer.type);
  var ifConnectedToLayout = mode === 'layout' && fullData && fullData.some(function (t) {
    return traceTypes.includes(t.type);
  });

  if (ifConnectedToTrace || ifConnectedToLayout) {
    return _react.default.createElement(_PlotlySection.default, props);
  }

  return null;
};

exports.TraceTypeSection = TraceTypeSection;
TraceTypeSection.contextTypes = _lib.containerConnectedContextTypes;
TraceTypeSection.propTypes = {
  children: _propTypes.default.node,
  name: _propTypes.default.string,
  traceTypes: _propTypes.default.array,
  mode: _propTypes.default.string
};
TraceTypeSection.defaultProps = {
  traceTypes: [],
  mode: 'layout'
};
//# sourceMappingURL=derived.js.map