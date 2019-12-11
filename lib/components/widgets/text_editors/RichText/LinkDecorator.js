"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * A DecoratorComponent is used by `draft-js` to render rich content
 *  beyond inline styles. This Decorator renders LINK entities.
 *
 * See
 * https://facebook.github.io/draft-js/docs/advanced-topics-decorators.html#decorator-components
 */
var LinkDecorator = function LinkDecorator(props) {
  return _react.default.createElement("a", {
    href: "#",
    style: props.style
  }, props.children);
};

LinkDecorator.propTypes = {
  style: _propTypes.default.object.isRequired,
  children: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.element]).isRequired
};
var _default = LinkDecorator;
exports.default = _default;
//# sourceMappingURL=LinkDecorator.js.map