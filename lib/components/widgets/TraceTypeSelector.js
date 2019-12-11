"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TraceTypeSelectorButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _plotlyIcons = require("plotly-icons");

var _Modal = _interopRequireDefault(require("../containers/Modal"));

var _lib = require("../../lib");

var _constants = require("../../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var renderActionItems = function renderActionItems(actionItems, item) {
  return actionItems ? actionItems(item).map(function (action, i) {
    return !action.onClick ? null : _react.default.createElement("a", {
      className: "trace-item__actions__item",
      key: i,
      "aria-label": action.label,
      "data-microtip-position": "top-left",
      role: "tooltip",
      onClick: action.onClick,
      target: "_blank"
    }, action.icon);
  }) : null;
};

var Item = function Item(_ref) {
  var item = _ref.item,
      active = _ref.active,
      handleClick = _ref.handleClick,
      actions = _ref.actions,
      showActions = _ref.showActions,
      complex = _ref.complex;
  var label = item.label,
      value = item.value,
      icon = item.icon;
  var SimpleIcon = (0, _lib.renderTraceIcon)(icon ? icon : value);
  var ComplexIcon = (0, _lib.renderTraceIcon)(icon ? icon : value, 'TraceType');
  return _react.default.createElement("div", {
    className: "trace-item".concat(active ? ' trace-item--active' : ''),
    onClick: handleClick
  }, _react.default.createElement("div", {
    className: "trace-item__actions"
  }, actions && showActions ? renderActionItems(actions, item) : null), _react.default.createElement("div", {
    className: "trace-item__image"
  }, !complex && _react.default.createElement("div", {
    className: "trace-item__image__svg"
  }, _react.default.createElement(SimpleIcon, null)), complex && _react.default.createElement("div", {
    className: "trace-item__image__wrapper"
  }, _react.default.createElement(ComplexIcon, null))), _react.default.createElement("div", {
    className: "trace-item__label"
  }, label));
};

Item.propTypes = {
  item: _propTypes.default.object,
  active: _propTypes.default.bool,
  complex: _propTypes.default.bool,
  handleClick: _propTypes.default.func,
  actions: _propTypes.default.func,
  showActions: _propTypes.default.bool
};
Item.contextTypes = {
  localize: _propTypes.default.func
};

var TraceTypeSelector =
/*#__PURE__*/
function (_Component) {
  _inherits(TraceTypeSelector, _Component);

  function TraceTypeSelector(props) {
    var _this;

    _classCallCheck(this, TraceTypeSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TraceTypeSelector).call(this, props));
    _this.selectAndClose = _this.selectAndClose.bind(_assertThisInitialized(_this));
    _this.actions = _this.actions.bind(_assertThisInitialized(_this));
    _this.renderCategories = _this.renderCategories.bind(_assertThisInitialized(_this));
    _this.renderGrid = _this.renderGrid.bind(_assertThisInitialized(_this));
    _this.renderSingleBlock = _this.renderSingleBlock.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TraceTypeSelector, [{
    key: "selectAndClose",
    value: function selectAndClose(value) {
      var _this$props = this.props,
          updateContainer = _this$props.updateContainer,
          glByDefault = _this$props.glByDefault,
          type = _this$props.fullContainer.type;
      var computedValue = (0, _lib.traceTypeToPlotlyInitFigure)(value);

      if ((type && type.endsWith('gl') || !_constants.TRACES_WITH_GL.includes(type) && glByDefault) && _constants.TRACES_WITH_GL.includes(computedValue.type) && !computedValue.type.endsWith('gl')) {
        computedValue.type += 'gl';
      }

      updateContainer(computedValue);
      this.context.handleClose();
    }
  }, {
    key: "actions",
    value: function actions(_ref2) {
      var _this2 = this;

      var value = _ref2.value;
      var _this$context = this.context,
          _ = _this$context.localize,
          chartHelp = _this$context.chartHelp;

      var onClick = function onClick(e, func) {
        e.stopPropagation();
        func();

        _this2.context.handleClose();
      };

      return [{
        label: _('Charts like this by Plotly users.'),
        onClick: chartHelp[value] && chartHelp[value].feedQuery && function (e) {
          return onClick(e, function () {
            return window.open("https://plot.ly/feed/?q=".concat(chartHelp[value] ? chartHelp[value].feedQuery : value), '_blank');
          });
        },
        icon: _react.default.createElement(_plotlyIcons.SearchIcon, null)
      }, {
        label: _('View tutorials on this chart type.'),
        onClick: chartHelp[value] && chartHelp[value].helpDoc && function (e) {
          return onClick(e, function () {
            return window.open(chartHelp[value].helpDoc, '_blank');
          });
        },
        icon: _react.default.createElement(_plotlyIcons.ThumnailViewIcon, null)
      }, {
        label: _('See a basic example.'),
        onClick: chartHelp[value] && chartHelp[value].examplePlot && function (e) {
          return onClick(e, chartHelp[value].examplePlot);
        },
        icon: _react.default.createElement(_plotlyIcons.GraphIcon, null)
      }];
    }
  }, {
    key: "renderCategories",
    value: function renderCategories() {
      var _this3 = this;

      var fullValue = this.props.fullValue;
      var _this$context2 = this.context,
          _ = _this$context2.localize,
          chartHelp = _this$context2.chartHelp;
      var _this$props$traceType = this.props.traceTypesConfig,
          traces = _this$props$traceType.traces,
          categories = _this$props$traceType.categories,
          complex = _this$props$traceType.complex;
      return categories(_).map(function (category, i) {
        var items = traces(_).filter(function (_ref3) {
          var value = _ref3.category.value;
          return value === category.value;
        }).filter(function (i) {
          return i.value !== 'scattergl' && i.value !== 'scatterpolargl';
        });
        var MAX_ITEMS = 4;
        var columnClasses = items.length > MAX_ITEMS && !category.maxColumns || category.maxColumns && category.maxColumns > 1 ? 'trace-grid__column trace-grid__column--double' : 'trace-grid__column';
        return _react.default.createElement("div", {
          className: columnClasses,
          key: i
        }, _react.default.createElement("div", {
          className: "trace-grid__column__header"
        }, category.label), _react.default.createElement("div", {
          className: "trace-grid__column__items"
        }, items.map(function (item) {
          return _react.default.createElement(Item, {
            complex: complex,
            key: item.value,
            active: fullValue === item.value,
            item: item,
            actions: _this3.actions,
            handleClick: function handleClick() {
              return _this3.selectAndClose(item.value);
            },
            showActions: Boolean(chartHelp)
          });
        })));
      });
    }
  }, {
    key: "renderGrid",
    value: function renderGrid() {
      return _react.default.createElement("div", {
        className: "trace-grid"
      }, this.renderCategories());
    }
  }, {
    key: "renderSingleBlock",
    value: function renderSingleBlock() {
      var _this4 = this;

      var fullValue = this.props.fullValue;
      var _ = this.context.localize;
      var _this$props$traceType2 = this.props.traceTypesConfig,
          traces = _this$props$traceType2.traces,
          complex = _this$props$traceType2.complex;
      return _react.default.createElement("div", {
        className: "trace-grid-single-block"
      }, traces(_).map(function (item) {
        return _react.default.createElement(Item, {
          key: item.value,
          complex: complex,
          active: fullValue === item.value,
          item: item,
          actions: _this4.actions,
          showActions: false,
          handleClick: function handleClick() {
            return _this4.selectAndClose(item.value);
          },
          style: {
            display: 'inline-block'
          }
        });
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _ = this.context.localize;
      var categories = this.props.traceTypesConfig.categories;
      return _react.default.createElement(_Modal.default, {
        title: _('Select Trace Type')
      }, categories ? this.renderGrid() : this.renderSingleBlock());
    }
  }]);

  return TraceTypeSelector;
}(_react.Component);

TraceTypeSelector.propTypes = {
  updateContainer: _propTypes.default.func,
  fullValue: _propTypes.default.string,
  fullContainer: _propTypes.default.object,
  glByDefault: _propTypes.default.bool,
  traceTypesConfig: _propTypes.default.object
};
TraceTypeSelector.contextTypes = {
  handleClose: _propTypes.default.func,
  localize: _propTypes.default.func,
  mapBoxAccess: _propTypes.default.bool,
  chartHelp: _propTypes.default.object
};

var TraceTypeSelectorButton =
/*#__PURE__*/
function (_Component2) {
  _inherits(TraceTypeSelectorButton, _Component2);

  function TraceTypeSelectorButton() {
    _classCallCheck(this, TraceTypeSelectorButton);

    return _possibleConstructorReturn(this, _getPrototypeOf(TraceTypeSelectorButton).apply(this, arguments));
  }

  _createClass(TraceTypeSelectorButton, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          handleClick = _this$props2.handleClick,
          container = _this$props2.container,
          traces = _this$props2.traceTypesConfig.traces;
      var _ = this.context.localize;
      var inferredType = (0, _lib.plotlyTraceToCustomTrace)(container);

      var _traces$find = traces(_).find(function (type) {
        return type.value === inferredType;
      }),
          label = _traces$find.label,
          icon = _traces$find.icon,
          value = _traces$find.value;

      var Icon = (0, _lib.renderTraceIcon)(icon ? icon : value);
      return _react.default.createElement("div", {
        className: "trace-type-select-button",
        onClick: handleClick ? handleClick : null
      }, _react.default.createElement("div", {
        className: "trace-type-select-button__icon"
      }, _react.default.createElement(Icon, null)), label);
    }
  }]);

  return TraceTypeSelectorButton;
}(_react.Component);

exports.TraceTypeSelectorButton = TraceTypeSelectorButton;
TraceTypeSelectorButton.propTypes = {
  handleClick: _propTypes.default.func.isRequired,
  container: _propTypes.default.object,
  traceTypesConfig: _propTypes.default.object.isRequired
};
TraceTypeSelectorButton.contextTypes = {
  localize: _propTypes.default.func
};
var _default = TraceTypeSelector;
exports.default = _default;
//# sourceMappingURL=TraceTypeSelector.js.map