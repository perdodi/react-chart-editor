"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("./components");

var _default_panels = require("./default_panels");

var _StyleColorbarsPanel = require("./default_panels/StyleColorbarsPanel");

var _Logo = _interopRequireDefault(require("./components/widgets/Logo"));

var _constants = require("./lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefaultEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(DefaultEditor, _Component);

  function DefaultEditor(props, context) {
    var _this;

    _classCallCheck(this, DefaultEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DefaultEditor).call(this, props, context));
    _this.hasTransforms = _this.hasTransforms.bind(_assertThisInitialized(_this));
    _this.hasAxes = _this.hasAxes.bind(_assertThisInitialized(_this));
    _this.hasMenus = _this.hasMenus.bind(_assertThisInitialized(_this));
    _this.hasSliders = _this.hasSliders.bind(_assertThisInitialized(_this));
    _this.hasColorbars = _this.hasColorbars.bind(_assertThisInitialized(_this));
    _this.hasLegend = _this.hasLegend.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(DefaultEditor, [{
    key: "hasTransforms",
    value: function hasTransforms() {
      return this.context.fullData.some(function (d) {
        return _constants.TRANSFORMABLE_TRACES.includes(d.type);
      });
    }
  }, {
    key: "hasAxes",
    value: function hasAxes() {
      var _this2 = this;

      return Object.keys(this.context.fullLayout._subplots).filter(function (type) {
        return !['cartesian', 'mapbox'].includes(type) && _this2.context.fullLayout._subplots[type].length > 0;
      }).length > 0;
    }
  }, {
    key: "hasMenus",
    value: function hasMenus() {
      var _this$context$fullLay = this.context.fullLayout.updatemenus,
          updatemenus = _this$context$fullLay === void 0 ? [] : _this$context$fullLay;
      return updatemenus.length > 0;
    }
  }, {
    key: "hasSliders",
    value: function hasSliders() {
      var _this$context$layout$ = this.context.layout.sliders,
          sliders = _this$context$layout$ === void 0 ? [] : _this$context$layout$;
      return sliders.length > 0;
    }
  }, {
    key: "hasColorbars",
    value: function hasColorbars() {
      return this.context.fullData.some(function (d) {
        return (0, _StyleColorbarsPanel.traceHasColorbar)({}, d);
      });
    }
  }, {
    key: "hasLegend",
    value: function hasLegend() {
      return this.context.fullData.some(function (t) {
        return t.showlegend !== undefined;
      }); // eslint-disable-line no-undefined
    }
  }, {
    key: "hasMaps",
    value: function hasMaps() {
      return this.context.fullData.some(function (d) {
        return [].concat(_toConsumableArray(_constants.TRACE_TO_AXIS.geo), _toConsumableArray(_constants.TRACE_TO_AXIS.mapbox)).includes(d.type);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _ = this.context.localize;

      var logo = this.props.logoSrc && _react.default.createElement(_Logo.default, {
        src: this.props.logoSrc
      });

      return _react.default.createElement(_components.PanelMenuWrapper, {
        menuPanelOrder: this.props.menuPanelOrder
      }, logo ? logo : null, _react.default.createElement(_default_panels.GraphCreatePanel, {
        group: _('Structure'),
        name: _('Traces')
      }), _react.default.createElement(_default_panels.GraphSubplotsPanel, {
        group: _('Structure'),
        name: _('Subplots')
      }), this.hasTransforms() && _react.default.createElement(_default_panels.GraphTransformsPanel, {
        group: _('Structure'),
        name: _('Transforms')
      }), _react.default.createElement(_default_panels.StyleLayoutPanel, {
        group: _('Style'),
        name: _('General')
      }), _react.default.createElement(_default_panels.StyleTracesPanel, {
        group: _('Style'),
        name: _('Traces')
      }), this.hasAxes() && _react.default.createElement(_default_panels.StyleAxesPanel, {
        group: _('Style'),
        name: _('Axes')
      }), this.hasMaps() && _react.default.createElement(_default_panels.StyleMapsPanel, {
        group: _('Style'),
        name: _('Maps')
      }), this.hasLegend() && _react.default.createElement(_default_panels.StyleLegendPanel, {
        group: _('Style'),
        name: _('Legend')
      }), this.hasColorbars() && _react.default.createElement(_default_panels.StyleColorbarsPanel, {
        group: _('Style'),
        name: _('Color Bars')
      }), _react.default.createElement(_default_panels.StyleNotesPanel, {
        group: _('Annotate'),
        name: _('Text')
      }), _react.default.createElement(_default_panels.StyleShapesPanel, {
        group: _('Annotate'),
        name: _('Shapes')
      }), _react.default.createElement(_default_panels.StyleImagesPanel, {
        group: _('Annotate'),
        name: _('Images')
      }), this.hasSliders() && _react.default.createElement(_default_panels.StyleSlidersPanel, {
        group: _('Control'),
        name: _('Sliders')
      }), this.hasMenus() && _react.default.createElement(_default_panels.StyleUpdateMenusPanel, {
        group: _('Control'),
        name: _('Menus')
      }), this.props.children ? this.props.children : null);
    }
  }]);

  return DefaultEditor;
}(_react.Component);

DefaultEditor.propTypes = {
  children: _propTypes.default.node,
  logoSrc: _propTypes.default.string,
  menuPanelOrder: _propTypes.default.array
};
DefaultEditor.contextTypes = {
  localize: _propTypes.default.func,
  fullData: _propTypes.default.array,
  fullLayout: _propTypes.default.object,
  layout: _propTypes.default.object
};
var _default = DefaultEditor;
exports.default = _default;
//# sourceMappingURL=DefaultEditor.js.map