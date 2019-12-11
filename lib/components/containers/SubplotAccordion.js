"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _TraceRequiredPanel = _interopRequireDefault(require("./TraceRequiredPanel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TraceFold = (0, _lib.connectTraceToPlot)(_PlotlyFold.default);
var NonCartesianSubplotFold = (0, _lib.connectNonCartesianSubplotToLayout)(_PlotlyFold.default);
var CartesianSubplotFold = (0, _lib.connectCartesianSubplotToLayout)(_PlotlyFold.default);

var SubplotAccordion =
/*#__PURE__*/
function (_Component) {
  _inherits(SubplotAccordion, _Component);

  function SubplotAccordion() {
    _classCallCheck(this, SubplotAccordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(SubplotAccordion).apply(this, arguments));
  }

  _createClass(SubplotAccordion, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$data = _this$context.data,
          data = _this$context$data === void 0 ? [] : _this$context$data,
          _this$context$layout = _this$context.layout,
          layout = _this$context$layout === void 0 ? {} : _this$context$layout,
          _ = _this$context.localize;
      var children = this.props.children;
      var subplotFolds = [];
      var allCartesianAxisCombinations = data.reduce(function (acc, curVal, inx) {
        if (_constants.TRACE_TO_AXIS.cartesian.some(function (c) {
          return c === curVal.type;
        })) {
          var xaxis = 'xaxis' + (curVal.xaxis ? curVal.xaxis.substring(1) : '');
          var yaxis = 'yaxis' + (curVal.yaxis ? curVal.yaxis.substring(1) : '');
          var existingComboIndex = acc.findIndex(function (t) {
            return t.xaxis === xaxis && t.yaxis === yaxis;
          });

          if (existingComboIndex === -1) {
            acc.push({
              xaxis: xaxis,
              yaxis: yaxis,
              xaxisName: curVal.xaxis ? (0, _lib.getSubplotTitle)(curVal.xaxis, 'x', _) : 'X 1',
              yaxisName: curVal.yaxis ? (0, _lib.getSubplotTitle)(curVal.yaxis, 'y', _) : 'Y 1',
              index: [inx]
            });
          } else {
            acc[existingComboIndex].index.push(inx);
          }
        }

        return acc;
      }, []);
      allCartesianAxisCombinations.forEach(function (d) {
        return subplotFolds[d.index[0]] = _react.default.createElement(CartesianSubplotFold, {
          key: d.index[0],
          traceIndexes: d.index,
          canDelete: false,
          xaxis: d.xaxis,
          yaxis: d.yaxis,
          name: "".concat(d.xaxisName, " | ").concat(d.yaxisName)
        }, children);
      }); // For each key in layout, find all traces that belong to this subplot.
      // E.g. if layout attr is 'ternary', find all traces that are of type
      // that has subplot ternary, if layout attr is 'ternary2', find traces
      // of right type that have attr 'subplot': 'ternary' in their data.

      /**
      Example:
      {
        "data": [
          {
            "type": "scatterternary",
            "mode": "markers",
          },
          {
            "type": "scatterternary",
            "mode": "markers",
            "subplot": "ternary2"
          }
        ],
        "layout": {
          "ternary": {},
          "ternary2": {},
        },
      }
       */

      Object.keys(layout).forEach(function (layoutKey) {
        var traceIndexes = [];
        var subplotName;

        if (['geo', 'mapbox', 'polar', 'gl3d', 'ternary'].some(function (subplotType) {
          subplotName = (0, _lib.getSubplotTitle)(layoutKey, subplotType, _);
          var trIndex = _constants.SUBPLOT_TO_ATTR[subplotType].layout === layoutKey ? data.findIndex(function (trace) {
            return _constants.TRACE_TO_AXIS[subplotType].some(function (tt) {
              return tt === trace.type;
            });
          }) : data.findIndex(function (trace) {
            return trace[_constants.SUBPLOT_TO_ATTR[subplotType].data] === layoutKey;
          });

          if (trIndex !== -1) {
            traceIndexes.push(trIndex);
          }

          return layoutKey.startsWith(_constants.SUBPLOT_TO_ATTR[subplotType].layout);
        })) {
          subplotFolds[traceIndexes[0]] = _react.default.createElement(NonCartesianSubplotFold, {
            key: layoutKey,
            traceIndexes: traceIndexes,
            canDelete: false,
            subplot: layoutKey,
            name: subplotName
          }, children);
        }
      });
      var counter = {
        pie: 0,
        table: 0,
        sunburst: 0,
        sankey: 0,
        parcoords: 0,
        parcats: 0
      };
      data.forEach(function (d, i) {
        if (d.type === 'pie' && d.values || ['pie', 'table', 'sunburst', 'sankey', 'parcoords', 'parcats', 'funnelarea'].includes(d.type)) {
          counter[d.type]++;
          var currentCount = counter[d.type];
          subplotFolds[i] = _react.default.createElement(TraceFold, {
            key: i,
            traceIndexes: [i],
            canDelete: false,
            name: (0, _lib.capitalize)(d.type) + (currentCount > 1 ? ' ' + currentCount : '')
          }, children);
        }
      });
      return _react.default.createElement(_TraceRequiredPanel.default, null, subplotFolds);
    }
  }]);

  return SubplotAccordion;
}(_react.Component);

SubplotAccordion.contextTypes = {
  fullData: _propTypes.default.array,
  data: _propTypes.default.array,
  layout: _propTypes.default.object,
  localize: _propTypes.default.func
};
SubplotAccordion.propTypes = {
  children: _propTypes.default.node
};
var _default = SubplotAccordion;
exports.default = _default;
//# sourceMappingURL=SubplotAccordion.js.map