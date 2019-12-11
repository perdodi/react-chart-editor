"use strict";

var _fields = require("../../fields");

var _ = require("..");

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TraceFold = (0, _lib.connectTraceToPlot)(_.PlotlyFold);
describe('<PlotlyFold>', function () {
  it('shows deleteContainer button when deleteContainer function present and canDelete is true', function () {
    var withoutDelete = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.PlotlyPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
      attr: "opacity"
    }))))).find('.js-fold__delete');
    expect(withoutDelete.exists()).toBe(false);
    var withDelete = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.PlotlyPanel, null, _react.default.createElement(TraceFold, {
      traceIndexes: [0],
      canDelete: true
    }, _react.default.createElement(_fields.Numeric, {
      attr: "opacity"
    }))))).find('.js-fold__delete');
    expect(withDelete.exists()).toBe(true);
  });
  it('calls deleteContainer when function present and canDelete is true', function () {
    var beforeDeleteTrace = jest.fn();
    (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _extends({}, _testUtils.fixtures.scatter(), {
      beforeDeleteTrace: beforeDeleteTrace
    }), _react.default.createElement(_.PlotlyPanel, null, _react.default.createElement(TraceFold, {
      traceIndexes: [0],
      canDelete: true
    }, _react.default.createElement(_fields.Numeric, {
      attr: "opacity"
    }))))).find('.js-fold__delete').simulate('click');
    var payload = beforeDeleteTrace.mock.calls[0][0];
    expect(payload).toEqual({
      axesToBeGarbageCollected: [],
      subplotToBeGarbageCollected: null,
      traceIndexes: [0]
    });
  });
});
//# sourceMappingURL=Fold-test.js.map