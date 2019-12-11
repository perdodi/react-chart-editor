"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Section = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    var _this;

    _classCallCheck(this, Section);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Section).call(this));
    _this.sectionVisible = true;
    return _this;
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      if (!this.sectionVisible) {
        return null;
      }

      return _react.default.createElement("div", {
        className: "section"
      }, this.props.name ? _react.default.createElement("div", {
        className: "section__heading"
      }, _react.default.createElement("div", {
        className: "section__heading__text"
      }, this.props.name)) : null, this.props.children);
    }
  }]);

  return Section;
}(_react.Component);

exports.Section = Section;
Section.plotly_editor_traits = {
  no_visibility_forcing: false
};
Section.propTypes = {
  children: _propTypes.default.node,
  name: _propTypes.default.string,
  attr: _propTypes.default.string
};

var PlotlySection =
/*#__PURE__*/
function (_Section) {
  _inherits(PlotlySection, _Section);

  function PlotlySection(props, context) {
    var _this2;

    _classCallCheck(this, PlotlySection);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PlotlySection).call(this, props, context));

    _this2.determineVisibility(props, context);

    return _this2;
  }

  _createClass(PlotlySection, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.determineVisibility(nextProps, nextContext);
    }
  }, {
    key: "determineVisibility",
    value: function determineVisibility(nextProps, nextContext) {
      var _this3 = this;

      var _unpackPlotProps = (0, _lib.unpackPlotProps)(nextProps, nextContext),
          isVisible = _unpackPlotProps.isVisible;

      this.sectionVisible = (0, _lib.isVisibleGivenCustomConfig)(isVisible, nextProps, nextContext);

      _react.default.Children.forEach(nextProps.children, function (child) {
        if (!child || _this3.sectionVisible) {
          return;
        }

        if (child.props.attr) {
          var plotProps = (0, _lib.unpackPlotProps)(child.props, nextContext);

          if (child.type.modifyPlotProps) {
            child.type.modifyPlotProps(child.props, nextContext, plotProps);
          }

          _this3.sectionVisible = (0, _lib.isVisibleGivenCustomConfig)(_this3.sectionVisible || plotProps.isVisible, child.props, nextContext, child.type && child.type.displayName ? child.type.displayName : null);
          return;
        }

        if (!(child.type.plotly_editor_traits || {}).no_visibility_forcing) {
          // non-attr components force visibility (unless they don't via traits)
          _this3.sectionVisible = true;
          return;
        }
      });
    }
  }]);

  return PlotlySection;
}(Section);

exports.default = PlotlySection;
PlotlySection.plotly_editor_traits = {
  no_visibility_forcing: true
};
PlotlySection.contextTypes = _lib.containerConnectedContextTypes;
//# sourceMappingURL=PlotlySection.js.map