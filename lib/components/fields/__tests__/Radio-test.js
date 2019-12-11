"use strict";

var _react = _interopRequireDefault(require("react"));

var _Field = _interopRequireDefault(require("../Field"));

var _Radio = _interopRequireDefault(require("../Radio"));

var _containers = require("../../containers");

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Trace = (0, _lib.connectTraceToPlot)(_containers.PlotlySection);
describe('<Radio>', function () {
  it('enables <Field> centering by default', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      plotly: _testUtils.plotly
    }, _testUtils.fixtures.area()), _react.default.createElement(Trace, {
      traceIndexes: [0]
    }, _react.default.createElement(_Radio.default, {
      label: "Connect Gaps",
      attr: "connectgaps",
      options: [{
        label: 'Connect',
        value: true
      }, {
        label: 'Blank',
        value: false
      }]
    })))).find(_Field.default);
    expect(wrapper.prop('center')).toBe(true);
  });
  it('permits <Field> centering to be disabled', function () {
    var wrapper = (0, _enzyme.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({
      plotly: _testUtils.plotly
    }, _testUtils.fixtures.area()), _react.default.createElement(Trace, {
      traceIndexes: [0]
    }, _react.default.createElement(_Radio.default, {
      center: false,
      label: "Connect Gaps",
      attr: "connectgaps",
      options: [{
        label: 'Connect',
        value: true
      }, {
        label: 'Blank',
        value: false
      }]
    })))).find(_Field.default);
    expect(wrapper.prop('center')).toBe(false);
  });
});
//# sourceMappingURL=Radio-test.js.map