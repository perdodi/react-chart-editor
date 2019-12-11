"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectShapeToLayout;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lib = require("../lib");

var _constants = require("./constants");

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

function connectShapeToLayout(WrappedComponent) {
  var ShapeConnectedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ShapeConnectedComponent, _Component);

    function ShapeConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, ShapeConnectedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(ShapeConnectedComponent).call(this, props, context));
      _this.deleteShape = _this.deleteShape.bind(_assertThisInitialized(_this));
      _this.updateShape = _this.updateShape.bind(_assertThisInitialized(_this));
      _this.moveShape = _this.moveShape.bind(_assertThisInitialized(_this));

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(ShapeConnectedComponent, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        var shapeIndex = props.shapeIndex;
        var container = context.container,
            fullContainer = context.fullContainer;
        var shapes = container.shapes || [];
        var fullShapes = fullContainer.shapes || [];
        this.container = shapes[shapeIndex];
        this.fullContainer = fullShapes[shapeIndex];
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject("shapes[].".concat(attr));
          },
          updateContainer: this.updateShape,
          deleteContainer: this.deleteShape,
          container: this.container,
          fullContainer: this.fullContainer,
          moveContainer: this.moveShape
        };
      }
    }, {
      key: "updateShape",
      value: function updateShape(update) {
        var newUpdate = {};
        var shapeIndex = this.props.shapeIndex;

        for (var key in update) {
          var newkey = "shapes[".concat(shapeIndex, "].").concat(key);
          newUpdate[newkey] = update[key];
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "deleteShape",
      value: function deleteShape() {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.DELETE_SHAPE,
            payload: {
              shapeIndex: this.props.shapeIndex
            }
          });
        }
      }
    }, {
      key: "moveShape",
      value: function moveShape(direction) {
        if (this.context.onUpdate) {
          var shapeIndex = this.props.shapeIndex;
          var desiredIndex = direction === 'up' ? shapeIndex - 1 : shapeIndex + 1;
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.MOVE_TO,
            payload: {
              fromIndex: shapeIndex,
              toIndex: desiredIndex,
              path: 'layout.shapes'
            }
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, this.props);
      }
    }]);

    return ShapeConnectedComponent;
  }(_react.Component);

  ShapeConnectedComponent.displayName = "ShapeConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  ShapeConnectedComponent.propTypes = {
    shapeIndex: _propTypes.default.number.isRequired
  };
  ShapeConnectedComponent.contextTypes = {
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    data: _propTypes.default.array,
    onUpdate: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  ShapeConnectedComponent.childContextTypes = {
    updateContainer: _propTypes.default.func,
    deleteContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    getValObject: _propTypes.default.func,
    moveContainer: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  ShapeConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return ShapeConnectedComponent;
}
//# sourceMappingURL=connectShapeToLayout.js.map