"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _TraceRequiredPanel = _interopRequireDefault(require("./TraceRequiredPanel"));

var _PlotlyPanel = _interopRequireDefault(require("./PlotlyPanel"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../../lib/constants");

var _lib = require("../../lib");

var _reactTabs = require("react-tabs");

var _traceTypes = require("../../lib/traceTypes");

var _PanelEmpty = require("./PanelEmpty");

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

var TraceAccordion =
/*#__PURE__*/
function (_Component) {
  _inherits(TraceAccordion, _Component);

  function TraceAccordion(props, context) {
    var _this;

    _classCallCheck(this, TraceAccordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TraceAccordion).call(this, props, context));

    _this.setLocals(props, context);

    return _this;
  }

  _createClass(TraceAccordion, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.setLocals(nextProps, nextContext);
    }
  }, {
    key: "setLocals",
    value: function setLocals(props, context) {
      var _this2 = this;

      var base = props.canGroup ? context.fullData : context.data;

      var traceFilterCondition = this.props.traceFilterCondition || function () {
        return true;
      };

      this.filteredTracesDataIndexes = [];
      this.filteredTraces = [];

      if (base && base.length && context.fullData.length) {
        this.filteredTraces = base.filter(function (t, i) {
          var fullTrace = props.canGroup ? t : context.fullData.filter(function (tr) {
            return tr.index === i;
          })[0];

          if (fullTrace) {
            var trace = context.data[fullTrace.index];

            if (traceFilterCondition(trace, fullTrace)) {
              _this2.filteredTracesDataIndexes.push(fullTrace.index);

              return true;
            }
          }

          return false;
        });
      }
    }
  }, {
    key: "renderGroupedTraceFolds",
    value: function renderGroupedTraceFolds() {
      var _this3 = this;

      if (!this.filteredTraces.length || this.filteredTraces.length <= 1) {
        return null;
      }

      var _ = this.context.localize;
      var dataArrayPositionsByTraceType = {};
      var fullDataArrayPositionsByTraceType = {};
      this.filteredTraces.forEach(function (trace) {
        var traceType = (0, _lib.plotlyTraceToCustomTrace)(trace);

        if (!dataArrayPositionsByTraceType[traceType]) {
          dataArrayPositionsByTraceType[traceType] = [];
        }

        if (!fullDataArrayPositionsByTraceType[traceType]) {
          fullDataArrayPositionsByTraceType[traceType] = [];
        }

        dataArrayPositionsByTraceType[traceType].push(trace.index); // _expandedIndex is the trace's index in the fullData array

        fullDataArrayPositionsByTraceType[traceType].push(trace._expandedIndex);
      });
      return Object.keys(fullDataArrayPositionsByTraceType).map(function (type, index) {
        return _react.default.createElement(TraceFold, {
          key: index,
          traceIndexes: dataArrayPositionsByTraceType[type],
          name: (0, _traceTypes.traceTypes)(_).find(function (t) {
            return t.value === type;
          }).label,
          fullDataArrayPosition: fullDataArrayPositionsByTraceType[type]
        }, _this3.props.children);
      });
    }
  }, {
    key: "renderUngroupedTraceFolds",
    value: function renderUngroupedTraceFolds() {
      var _this4 = this;

      if (this.filteredTraces.length) {
        return this.filteredTraces.map(function (d, i) {
          return _react.default.createElement(TraceFold, {
            key: i,
            traceIndexes: [d.index],
            canDelete: _this4.props.canAdd,
            fullDataArrayPosition: [d._expandedIndex]
          }, _this4.props.children);
        });
      }

      return null;
    }
  }, {
    key: "renderTraceFolds",
    value: function renderTraceFolds() {
      var _this5 = this;

      if (this.filteredTraces.length) {
        return this.filteredTraces.map(function (d, i) {
          return _react.default.createElement(TraceFold, {
            key: i,
            traceIndexes: [_this5.filteredTracesDataIndexes[i]],
            canDelete: _this5.props.canAdd
          }, _this5.props.children);
        });
      }

      return null;
    }
  }, {
    key: "renderTracePanelHelp",
    value: function renderTracePanelHelp() {
      var _ = this.context.localize;
      return _react.default.createElement(_PanelEmpty.PanelMessage, {
        heading: _('Trace your data.')
      }, _react.default.createElement("p", null, _('Traces of various types like bar and line are the building blocks of your figure.')), _react.default.createElement("p", null, _('You can add as many as you like, mixing and matching types and arranging them into subplots.')), _react.default.createElement("p", null, _('Click on the + button above to add a trace.')));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canAdd = _this$props.canAdd,
          canGroup = _this$props.canGroup,
          canReorder = _this$props.canReorder;
      var _ = this.context.localize;

      if (canAdd) {
        var addAction = {
          label: _('Trace'),
          handler: function handler(_ref) {
            var onUpdate = _ref.onUpdate;

            if (onUpdate) {
              onUpdate({
                type: _constants.EDITOR_ACTIONS.ADD_TRACE
              });
            }
          }
        };
        var traceFolds = this.renderTraceFolds();
        return _react.default.createElement(_PlotlyPanel.default, {
          addAction: addAction,
          canReorder: canReorder
        }, traceFolds ? traceFolds : this.renderTracePanelHelp());
      }

      if (canGroup) {
        if (this.filteredTraces.length === 1) {
          return _react.default.createElement(_TraceRequiredPanel.default, null, this.renderUngroupedTraceFolds());
        }

        if (this.filteredTraces.length > 1) {
          return _react.default.createElement(_TraceRequiredPanel.default, {
            noPadding: true
          }, _react.default.createElement(_reactTabs.Tabs, null, _react.default.createElement(_reactTabs.TabList, null, _react.default.createElement(_reactTabs.Tab, null, _('Individually')), _react.default.createElement(_reactTabs.Tab, null, _('By Type'))), _react.default.createElement(_reactTabs.TabPanel, null, _react.default.createElement(_PlotlyPanel.default, null, this.renderUngroupedTraceFolds())), _react.default.createElement(_reactTabs.TabPanel, null, _react.default.createElement(_PlotlyPanel.default, null, this.renderGroupedTraceFolds()))));
        }
      }

      return _react.default.createElement(_TraceRequiredPanel.default, null, this.renderTraceFolds());
    }
  }]);

  return TraceAccordion;
}(_react.Component);

TraceAccordion.contextTypes = {
  fullData: _propTypes.default.array,
  data: _propTypes.default.array,
  localize: _propTypes.default.func
};
TraceAccordion.propTypes = {
  canAdd: _propTypes.default.bool,
  canGroup: _propTypes.default.bool,
  canReorder: _propTypes.default.bool,
  children: _propTypes.default.node,
  traceFilterCondition: _propTypes.default.func
};
var _default = TraceAccordion;
exports.default = _default;
//# sourceMappingURL=TraceAccordion.js.map