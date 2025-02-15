"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plotlyTraceToCustomTrace = plotlyTraceToCustomTrace;
exports.traceTypeToPlotlyInitFigure = traceTypeToPlotlyInitFigure;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function plotlyTraceToCustomTrace(trace) {
  if (_typeof(trace) !== 'object') {
    throw new Error("trace provided to plotlyTraceToCustomTrace function should be an object, received ".concat(_typeof(trace)));
  }

  var gl = 'gl';
  var type = trace.type ? trace.type.endsWith(gl) ? trace.type.slice(0, -gl.length) : trace.type : 'scatter';

  if ((type === 'scatter' || type === 'scattergl') && (![null, undefined, ''].includes(trace.stackgroup) || // eslint-disable-line no-undefined
  ['tozeroy', 'tozerox', 'tonexty', 'tonextx', 'toself', 'tonext'].includes(trace.fill))) {
    return 'area';
  } else if ((type === 'scatter' || type === 'scattergl') && (trace.mode === 'lines' || trace.mode === 'lines+markers')) {
    return 'line';
  } else if (type === 'scatter3d' && trace.mode === 'lines') {
    return 'line3d';
  }

  return type;
}

function traceTypeToPlotlyInitFigure(traceType) {
  var gl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var scatterTrace = {
    type: 'scatter' + gl,
    mode: 'markers',
    stackgroup: null
  };

  switch (traceType) {
    case 'line':
      return {
        type: 'scatter' + gl,
        mode: 'lines',
        stackgroup: null
      };

    case 'scatter':
      return scatterTrace;

    case undefined:
      // eslint-disable-line
      return scatterTrace;

    case 'area':
      return {
        type: 'scatter' + gl,
        mode: 'lines',
        stackgroup: 1
      };

    case 'scatterpolar':
      return {
        type: 'scatterpolar' + gl
      };

    case 'waterfall':
      return {
        type: 'waterfall',
        orientation: 'v'
      };

    case 'box':
      return {
        type: 'box',
        boxpoints: false
      };

    case 'violin':
      return {
        type: 'violin',
        bandwidth: 0
      };

    case 'line3d':
      return {
        type: 'scatter3d',
        mode: 'lines'
      };

    case 'scatter3d':
      return {
        type: 'scatter3d',
        mode: 'markers'
      };

    case 'bar':
      return {
        orientation: 'v',
        type: 'bar'
      };

    case 'cone':
      return {
        sizeref: 1,
        type: 'cone'
      };

    case 'histogram2dcontour':
      return {
        type: 'histogram2dcontour',
        autocolorscale: true
      };

    case 'histogram2d':
      return {
        type: 'histogram2d',
        autocolorscale: true
      };

    case 'heatmap':
      return {
        type: 'heatmap',
        autocolorscale: true
      };

    case 'contour':
      return {
        type: 'contour',
        autocolorscale: true
      };

    default:
      return {
        type: traceType
      };
  }
}
//# sourceMappingURL=customTraceType.js.map