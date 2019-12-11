"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INLINE_STYLES = exports.STYLE_MAP = exports.STYLES_TO_HTML_TAGS = exports.ITALIC = exports.BOLD = exports.LINK = exports.SUBSCRIPT = exports.SUPERSCRIPT = void 0;

var _react = _interopRequireDefault(require("react"));

var _draftJsUtils = require("draft-js-utils");

var _plotlyIcons = require("plotly-icons");

var _constants = require("../../../../lib/constants");

var _STYLES_TO_HTML_TAGS, _STYLE_MAP;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUPERSCRIPT = 'SUPERSCRIPT';
exports.SUPERSCRIPT = SUPERSCRIPT;
var SUBSCRIPT = 'SUBSCRIPT';
exports.SUBSCRIPT = SUBSCRIPT;
var LINK = 'LINK';
exports.LINK = LINK;
var BOLD = _draftJsUtils.INLINE_STYLE.BOLD,
    ITALIC = _draftJsUtils.INLINE_STYLE.ITALIC;
exports.ITALIC = ITALIC;
exports.BOLD = BOLD;
var STYLES_TO_HTML_TAGS = (_STYLES_TO_HTML_TAGS = {}, _defineProperty(_STYLES_TO_HTML_TAGS, BOLD, {
  element: 'b'
}), _defineProperty(_STYLES_TO_HTML_TAGS, ITALIC, {
  element: 'i'
}), _defineProperty(_STYLES_TO_HTML_TAGS, SUPERSCRIPT, {
  element: 'sup'
}), _defineProperty(_STYLES_TO_HTML_TAGS, SUBSCRIPT, {
  element: 'sub'
}), _defineProperty(_STYLES_TO_HTML_TAGS, LINK, {
  element: 'a'
}), _STYLES_TO_HTML_TAGS);
exports.STYLES_TO_HTML_TAGS = STYLES_TO_HTML_TAGS;
var STYLE_MAP = (_STYLE_MAP = {}, _defineProperty(_STYLE_MAP, BOLD, {
  fontWeight: 'bolder'
}), _defineProperty(_STYLE_MAP, ITALIC, {
  fontStyle: 'italic'
}), _defineProperty(_STYLE_MAP, SUBSCRIPT, {
  /*
   * Can't use text-align; IE renders `text-bottom` properly, but
   * FF doesn't (same height as `bottom`). Chrome doesn't understand
   * `text-align: bottom`. Use relative positioning instead.
   */
  lineHeight: 0,
  fontSize: '65%',
  position: 'relative',
  bottom: '-3px'
}), _defineProperty(_STYLE_MAP, SUPERSCRIPT, {
  /*
   * Can't use text-align; IE renders `text-top` properly, but
   * FF doesn't (same height as `top`). Chrome doesn't understand
   * `text-align: top`. Use relative positioning instead.
   */
  lineHeight: 0,
  fontSize: '65%',
  position: 'relative',
  top: '-5px'
}), _defineProperty(_STYLE_MAP, LINK, {
  color: _constants.COLORS.editorLink,
  linkDecoration: 'none',
  cursor: 'pointer'
}), _STYLE_MAP);
exports.STYLE_MAP = STYLE_MAP;
var INLINE_STYLES = [{
  label: _react.default.createElement("span", {
    style: STYLE_MAP[BOLD]
  }, "B"),
  value: BOLD
}, {
  label: _react.default.createElement("span", {
    style: STYLE_MAP[ITALIC]
  }, "I"),
  value: ITALIC
}, {
  label: _react.default.createElement("span", null, "x", _react.default.createElement("span", {
    style: STYLE_MAP[SUBSCRIPT]
  }, "2")),
  value: SUBSCRIPT
}, {
  label: _react.default.createElement("span", null, "x", _react.default.createElement("span", {
    style: STYLE_MAP[SUPERSCRIPT]
  }, "2")),
  value: SUPERSCRIPT
}, {
  label: _react.default.createElement("span", null, _react.default.createElement(_plotlyIcons.LinkIcon, {
    className: "icon-link"
  })),
  value: LINK
}];
exports.INLINE_STYLES = INLINE_STYLES;
//# sourceMappingURL=configuration.js.map