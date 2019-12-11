"use strict";

var _react = _interopRequireDefault(require("react"));

var _ = require("..");

var _fields = require("../../fields");

var _testUtils = require("../../../lib/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('<TraceAccordion>', function () {
  it('generates trace PlotlyFolds with name == text', function () {
    var fixture = _testUtils.fixtures.scatter({
      data: [{
        name: 'hodor'
      }]
    });

    var folds = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _objectSpread({}, fixture, {
      onUpdate: jest.fn()
    }), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.TraceAccordion, null, _react.default.createElement(_fields.TextEditor, {
      attr: "name"
    }))))).find(_.PlotlyFold);
    expect(folds.at(0).prop('name')).toBe('hodor');
  });
  it('can add traces', function () {
    var fixture = _testUtils.fixtures.scatter({
      data: [{
        name: 'hodor'
      }]
    });

    var beforeAddTrace = jest.fn();
    var editor = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _objectSpread({}, fixture, {
      beforeAddTrace: beforeAddTrace
    }), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.TraceAccordion, {
      canAdd: true
    }, _react.default.createElement(_fields.TextEditor, {
      attr: "name"
    })))));
    editor.find('button.js-add-button').simulate('click');
    expect(beforeAddTrace).toBeCalled();
  });
  it('can delete traces', function () {
    var fixture = _testUtils.fixtures.scatter({
      data: [{
        name: 'hodor'
      }]
    });

    var beforeDeleteTrace = jest.fn();
    var editor = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _objectSpread({}, fixture, {
      beforeDeleteTrace: beforeDeleteTrace
    }), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.TraceAccordion, {
      canAdd: true
    }, _react.default.createElement(_fields.TextEditor, {
      attr: "name"
    })))));
    editor.find('.js-fold__delete').at(0).simulate('click');
    expect(beforeDeleteTrace).toBeCalled();
    var update = beforeDeleteTrace.mock.calls[0][0];
    expect(update.traceIndexes[0]).toBe(0);
  });
});
//# sourceMappingURL=TraceAccordion-test.js.map