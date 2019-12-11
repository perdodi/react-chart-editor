"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _PlotlyFold = _interopRequireDefault(require("./PlotlyFold"));

var _derived = require("./derived");

var _PanelEmpty = require("./PanelEmpty");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AnnotationFold = (0, _lib.connectAnnotationToLayout)(_PlotlyFold.default);

var AnnotationAccordion =
/*#__PURE__*/
function (_Component) {
  _inherits(AnnotationAccordion, _Component);

  function AnnotationAccordion() {
    _classCallCheck(this, AnnotationAccordion);

    return _possibleConstructorReturn(this, _getPrototypeOf(AnnotationAccordion).apply(this, arguments));
  }

  _createClass(AnnotationAccordion, [{
    key: "render",
    value: function render() {
      var _this$context = this.context,
          _this$context$layout = _this$context.layout,
          _this$context$layout$ = _this$context$layout.annotations,
          annotations = _this$context$layout$ === void 0 ? [] : _this$context$layout$,
          _this$context$layout$2 = _this$context$layout.meta,
          meta = _this$context$layout$2 === void 0 ? [] : _this$context$layout$2,
          _ = _this$context.localize;
      var _this$props = this.props,
          canAdd = _this$props.canAdd,
          children = _this$props.children,
          canReorder = _this$props.canReorder;
      var content = annotations.length && annotations.map(function (ann, i) {
        return _react.default.createElement(AnnotationFold, {
          key: i,
          annotationIndex: i,
          name: (0, _lib.getParsedTemplateString)(ann.text, {
            meta: meta
          }),
          canDelete: canAdd
        }, children);
      });
      var addAction = {
        label: _('Annotation'),
        handler: function handler(_ref) {
          var layout = _ref.layout,
              updateContainer = _ref.updateContainer;
          var annotationIndex;

          if (Array.isArray(layout.annotations)) {
            annotationIndex = layout.annotations.length;
          } else {
            annotationIndex = 0;
          }

          var key = "annotations[".concat(annotationIndex, "]");
          var value = {
            text: _('new text')
          };

          if (updateContainer) {
            updateContainer(_defineProperty({}, key, value));
          }
        }
      };
      return _react.default.createElement(_derived.LayoutPanel, {
        addAction: canAdd ? addAction : null,
        canReorder: canReorder
      }, content ? content : _react.default.createElement(_PanelEmpty.PanelMessage, {
        heading: _('Call out your data.')
      }, _react.default.createElement("p", null, _('Annotations are text and arrows you can use to point out specific parts of your figure.')), _react.default.createElement("p", null, _('Click on the + button above to add an annotation.'))));
    }
  }]);

  return AnnotationAccordion;
}(_react.Component);

AnnotationAccordion.contextTypes = {
  layout: _propTypes.default.object,
  localize: _propTypes.default.func
};
AnnotationAccordion.propTypes = {
  children: _propTypes.default.node,
  canAdd: _propTypes.default.bool,
  canReorder: _propTypes.default.bool
};
var _default = AnnotationAccordion;
exports.default = _default;
//# sourceMappingURL=AnnotationAccordion.js.map