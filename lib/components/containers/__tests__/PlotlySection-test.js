"use strict";

var _react = _interopRequireDefault(require("react"));

var _PlotlySection = _interopRequireDefault(require("../PlotlySection"));

var _derived = require("../derived");

var _fields = require("../../fields");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TraceSection = (0, _lib.connectTraceToPlot)(_PlotlySection.default);
describe('PlotlySection', function () {
  it('is visible if it contains any visible children', function () {
    // mode is visible with scatter. Hole is not visible. PlotlySection should show.
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(TraceSection, {
      name: "test-section",
      traceIndexes: [0]
    }, _react.default.createElement(_fields.Flaglist, {
      attr: "mode",
      options: [{
        label: 'Lines',
        value: 'lines'
      }, {
        label: 'Points',
        value: 'markers'
      }]
    }), _react.default.createElement(_fields.Numeric, {
      attr: "hole",
      min: 0,
      max: 1,
      step: 0.1
    })))).find(_PlotlySection.default);
    expect(wrapper.children().length).toBe(1);
  });
  it('is visible if it contains any non attr children', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(_PlotlySection.default, {
      name: "test-section"
    }, _react.default.createElement("div", {
      className: "extra"
    }, "special extra")))).find(_PlotlySection.default);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find('.extra').text()).toBe('special extra');
  });
  it('is not visible if it contains no visible children', function () {
    // pull and hole are not scatter attrs. PlotlySection should not show.
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(TraceSection, {
      name: "test-section",
      traceIndexes: [0]
    }, _react.default.createElement(_fields.Numeric, {
      attr: "pull",
      min: 0,
      max: 1,
      step: 0.1,
      traceIndexes: [0]
    }), _react.default.createElement(_fields.Numeric, {
      attr: "hole",
      min: 0,
      max: 1,
      step: 0.1,
      traceIndexes: [0]
    })))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Numeric).exists()).toBe(false);
  });
  it('will hide with Info children when attrs not defined', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_PlotlySection.default);
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(TraceSection, {
      name: "test-section",
      traceIndexes: [0]
    }, _react.default.createElement(_fields.Numeric, {
      attr: "badattr",
      traceIndexes: [0]
    }), _react.default.createElement(_fields.Info, null, "INFO")))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Info).length).toBe(0);
  });
});
describe('TraceTypeSection', function () {
  it('will show when the type is right', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_derived.TraceTypeSection);
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(TraceSection, {
      name: "test-section",
      traceIndexes: [0],
      traceTypes: ['scatter']
    }, _react.default.createElement(_fields.Flaglist, {
      attr: "mode",
      options: [{
        label: 'Lines',
        value: 'lines'
      }, {
        label: 'Points',
        value: 'markers'
      }]
    })))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Flaglist).length).toBe(1);
  });
  it('will hide when the type is wrong', function () {
    var TraceSection = (0, _lib.connectTraceToPlot)(_derived.TraceTypeSection);
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      onUpdate: jest.fn()
    }, _testUtils.fixtures.scatter()), _react.default.createElement(TraceSection, {
      name: "test-section",
      traceIndexes: [0],
      traceTypes: ['heatmap']
    }, _react.default.createElement(_fields.Flaglist, {
      attr: "mode",
      options: [{
        label: 'Lines',
        value: 'lines'
      }, {
        label: 'Points',
        value: 'markers'
      }]
    })))).find(_PlotlySection.default);
    expect(wrapper.find(_fields.Flaglist).length).toBe(0);
  });
});
//# sourceMappingURL=PlotlySection-test.js.map