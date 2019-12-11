"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Fold = void 0;

var _FoldEmpty = _interopRequireDefault(require("./FoldEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _plotlyIcons = require("plotly-icons");

var _lib = require("../../lib");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Fold =
/*#__PURE__*/
function (_Component) {
  _inherits(Fold, _Component);

  function Fold() {
    var _this;

    _classCallCheck(this, Fold);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fold).call(this));
    _this.foldVisible = true;
    return _this;
  }

  _createClass(Fold, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        foldInfo: this.props.foldInfo ? this.props.foldInfo : null
      };
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.foldVisible && !this.props.messageIfEmpty) {
        return null;
      }

      var _this$context = this.context,
          deleteContainer = _this$context.deleteContainer,
          moveContainer = _this$context.moveContainer;
      var _this$props = this.props,
          canDelete = _this$props.canDelete,
          children = _this$props.children,
          className = _this$props.className,
          folded = _this$props.folded,
          foldInfo = _this$props.foldInfo,
          toggleFold = _this$props.toggleFold,
          hideHeader = _this$props.hideHeader,
          Icon = _this$props.icon,
          messageIfEmpty = _this$props.messageIfEmpty,
          name = _this$props.name,
          canMoveUp = _this$props.canMoveUp,
          canMoveDown = _this$props.canMoveDown;
      var contentClass = (0, _classnames.default)('fold__content', {
        'fold__content--noheader': hideHeader
      });
      var headerClass = (0, _classnames.default)('fold__top', {
        'fold__top--open': !folded
      });
      var arrowClass = (0, _classnames.default)('fold__top__arrow', {
        'fold__top__arrow--open': !folded
      });

      var arrowDownIcon = _react.default.createElement("div", {
        className: arrowClass
      }, _react.default.createElement("div", {
        className: "fold__top__arrow__wrapper"
      }, _react.default.createElement(_plotlyIcons.AngleDownIcon, null)));

      var icon = Icon ? _react.default.createElement(Icon, {
        className: "fold__top__icon"
      }) : null;
      var deleteButton = canDelete && typeof deleteContainer === 'function' ? _react.default.createElement("div", {
        className: "fold__top__delete js-fold__delete",
        onClick: function onClick(e) {
          e.stopPropagation();
          deleteContainer(foldInfo);
        }
      }, _react.default.createElement(_plotlyIcons.CloseIcon, null)) : null;

      var movingControls = (canMoveDown || canMoveUp) && _react.default.createElement("div", {
        className: "fold__top__moving-controls"
      }, _react.default.createElement("span", {
        className: "fold__top__moving-controls--up".concat(canMoveUp ? '' : '--disabled'),
        onClick: function onClick(e) {
          // prevents fold toggle to happen when clicking on moving arrow controls
          e.stopPropagation();

          if (canMoveUp) {
            if (!moveContainer || typeof moveContainer !== 'function') {
              throw new Error('moveContainer must be a function');
            }

            moveContainer('up');
          }
        }
      }, _react.default.createElement(_plotlyIcons.AngleDownIcon, null)), _react.default.createElement("span", {
        className: "fold__top__moving-controls--down".concat(canMoveDown ? '' : '--disabled'),
        onClick: function onClick(e) {
          // prevents fold toggle to happen when clicking on moving arrow controls
          e.stopPropagation();

          if (canMoveDown) {
            if (!moveContainer || typeof moveContainer !== 'function') {
              throw new Error('moveContainer must be a function');
            }

            moveContainer('down');
          }
        }
      }, _react.default.createElement(_plotlyIcons.AngleDownIcon, null)));

      var foldHeader = !hideHeader && _react.default.createElement("div", {
        className: headerClass,
        onClick: toggleFold
      }, _react.default.createElement("div", {
        className: "fold__top__arrow-title"
      }, arrowDownIcon, icon, _react.default.createElement("div", {
        className: "fold__top__title"
      }, (0, _lib.striptags)(name))), movingControls, deleteButton);

      var foldContent = null;

      if (!folded) {
        if (this.foldVisible) {
          foldContent = _react.default.createElement("div", {
            className: contentClass
          }, children);
        } else {
          foldContent = _react.default.createElement("div", {
            className: contentClass
          }, _react.default.createElement(_FoldEmpty.default, {
            icon: Icon,
            messagePrimary: messageIfEmpty
          }));
        }
      }

      var classes = className ? ' ' + className : '';
      return _react.default.createElement("div", {
        className: "fold".concat(classes)
      }, foldHeader, foldContent);
    }
  }]);

  return Fold;
}(_react.Component);

exports.Fold = Fold;
Fold.plotly_editor_traits = {
  foldable: true
};
Fold.propTypes = {
  canDelete: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  folded: _propTypes.default.bool,
  foldInfo: _propTypes.default.object,
  toggleFold: _propTypes.default.func,
  hideHeader: _propTypes.default.bool,
  icon: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  messageIfEmpty: _propTypes.default.string,
  name: _propTypes.default.string,
  canMoveUp: _propTypes.default.bool,
  canMoveDown: _propTypes.default.bool
};
Fold.contextTypes = {
  deleteContainer: _propTypes.default.func
};
Fold.childContextTypes = {
  foldInfo: _propTypes.default.object
};

var PlotlyFold =
/*#__PURE__*/
function (_Fold) {
  _inherits(PlotlyFold, _Fold);

  function PlotlyFold(props, context) {
    var _this2;

    _classCallCheck(this, PlotlyFold);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(PlotlyFold).call(this, props, context));
    _this2.foldVisible = false;

    _this2.determineVisibility(props, context);

    return _this2;
  }

  _createClass(PlotlyFold, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps, nextContext) {
      this.determineVisibility(nextProps, nextContext);
    }
  }, {
    key: "determineVisibility",
    value: function determineVisibility(nextProps, nextContext) {
      var _this3 = this;

      this.foldVisible = false;

      _react.default.Children.forEach(nextProps.children, function (child) {
        if (!child || _this3.foldVisible) {
          return;
        }

        if (child.props.attr) {
          // attr components force fold open if they are visible
          var plotProps = (0, _lib.unpackPlotProps)(child.props, nextContext);

          if (child.type.modifyPlotProps) {
            child.type.modifyPlotProps(child.props, nextContext, plotProps);
          }

          _this3.foldVisible = _this3.foldVisible || plotProps.isVisible;
          return;
        }

        if (!(child.type.plotly_editor_traits || {}).no_visibility_forcing) {
          // non-attr components force visibility (unless they don't via traits)
          _this3.foldVisible = true;
          return;
        }
      });
    }
  }]);

  return PlotlyFold;
}(Fold);

PlotlyFold.plotly_editor_traits = {
  foldable: true
};
PlotlyFold.contextTypes = Object.assign({
  deleteContainer: _propTypes.default.func,
  moveContainer: _propTypes.default.func
}, _lib.containerConnectedContextTypes);
var _default = PlotlyFold;
exports.default = _default;
//# sourceMappingURL=PlotlyFold.js.map