"use strict";

var _fields = require("../../fields");

var _ = require("..");

var _NumericInput = _interopRequireDefault(require("../../widgets/NumericInput"));

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../../lib/test-utils");

var _lib = require("../../../lib");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Layouts = [_.PlotlyPanel, _.PlotlyFold, _.PlotlySection].map(_lib.connectLayoutToPlot);

var Editor = function Editor(props) {
  return _react.default.createElement(_testUtils.TestEditor, _objectSpread({
    onUpdate: jest.fn()
  }, props));
};

Layouts.forEach(function (Layout) {
  describe("<".concat(Layout.displayName, ">"), function () {
    it("wraps container with fullValue pointing to gd._fullLayout", function () {
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(Editor, _testUtils.fixtures.scatter({
        layout: {
          height: 100
        }
      }), _react.default.createElement(_.PlotlyPanel, null, _react.default.createElement(Layout, null, _react.default.createElement(_fields.Numeric, {
        label: "Height",
        min: 100,
        step: 10,
        attr: "height"
      }))))).find('[attr="height"]').find(_NumericInput.default);
      expect(wrapper.prop('value')).toBe(100);
    });
    it("sends updates to gd._layout", function () {
      var beforeUpdateLayout = jest.fn();
      var wrapper = (0, _enzyme.mount)(_react.default.createElement(Editor, _extends({
        beforeUpdateLayout: beforeUpdateLayout
      }, _testUtils.fixtures.scatter({
        layout: {
          height: 100
        }
      })), _react.default.createElement(_.PlotlyPanel, null, _react.default.createElement(Layout, null, _react.default.createElement(_fields.Numeric, {
        label: "Height",
        min: 100,
        step: 10,
        attr: "height"
      }))))).find('[attr="height"]').find(_NumericInput.default);
      var heightUpdate = 200;
      wrapper.prop('onChange')(heightUpdate);
      var payload = beforeUpdateLayout.mock.calls[0][0];
      expect(payload).toEqual({
        update: {
          height: heightUpdate
        }
      });
    });
  });
});
//# sourceMappingURL=Layout-test.js.map