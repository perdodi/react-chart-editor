"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = connectLayersToMapbox;

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

function connectLayersToMapbox(WrappedComponent) {
  var MapboxLayerConnectedComponent =
  /*#__PURE__*/
  function (_Component) {
    _inherits(MapboxLayerConnectedComponent, _Component);

    function MapboxLayerConnectedComponent(props, context) {
      var _this;

      _classCallCheck(this, MapboxLayerConnectedComponent);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MapboxLayerConnectedComponent).call(this, props, context));
      _this.deleteMapboxLayer = _this.deleteMapboxLayer.bind(_assertThisInitialized(_this));
      _this.updateMapboxLayer = _this.updateMapboxLayer.bind(_assertThisInitialized(_this));
      _this.moveMapboxLayer = _this.moveMapboxLayer.bind(_assertThisInitialized(_this));

      _this.setLocals(props, context);

      return _this;
    }

    _createClass(MapboxLayerConnectedComponent, [{
      key: "componentWillReceiveProps",
      value: function componentWillReceiveProps(nextProps, nextContext) {
        this.setLocals(nextProps, nextContext);
      }
    }, {
      key: "setLocals",
      value: function setLocals(props, context) {
        var mapboxLayerIndex = props.mapboxLayerIndex;
        var container = context.container,
            fullContainer = context.fullContainer;
        var mapboxLayers = container.layers || [];
        var fullmapboxLayers = fullContainer.layers || [];
        this.container = mapboxLayers[mapboxLayerIndex];
        this.fullContainer = fullmapboxLayers[mapboxLayerIndex];
      }
    }, {
      key: "getChildContext",
      value: function getChildContext() {
        var _this2 = this;

        return {
          getValObject: function getValObject(attr) {
            return !_this2.context.getValObject ? null : _this2.context.getValObject("layers[].".concat(attr));
          },
          updateContainer: this.updateMapboxLayer,
          deleteContainer: this.deleteMapboxLayer,
          moveContainer: this.moveMapboxLayer,
          container: this.container,
          fullContainer: this.fullContainer
        };
      }
    }, {
      key: "updateMapboxLayer",
      value: function updateMapboxLayer(update) {
        var newUpdate = {};
        var mapboxLayerIndex = this.props.mapboxLayerIndex;

        for (var key in update) {
          var newkey = "layers[".concat(mapboxLayerIndex, "].").concat(key);
          newUpdate[newkey] = update[key];
        }

        this.context.updateContainer(newUpdate);
      }
    }, {
      key: "deleteMapboxLayer",
      value: function deleteMapboxLayer() {
        if (this.context.onUpdate) {
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.DELETE_MAPBOXLAYER,
            payload: {
              mapboxId: this.context.fullContainer._subplot.id,
              mapboxLayerIndex: this.props.mapboxLayerIndex
            }
          });
        }
      }
    }, {
      key: "moveMapboxLayer",
      value: function moveMapboxLayer(direction) {
        if (this.context.onUpdate) {
          var mapboxLayerIndex = this.props.mapboxLayerIndex;
          var desiredIndex = direction === 'up' ? mapboxLayerIndex - 1 : mapboxLayerIndex + 1;
          this.context.onUpdate({
            type: _constants.EDITOR_ACTIONS.MOVE_TO,
            payload: {
              fromIndex: mapboxLayerIndex,
              toIndex: desiredIndex,
              mapboxId: this.context.fullContainer._subplot.id,
              path: 'layout.mapbox.layers'
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

    return MapboxLayerConnectedComponent;
  }(_react.Component);

  MapboxLayerConnectedComponent.displayName = "MapboxLayerConnected".concat((0, _lib.getDisplayName)(WrappedComponent));
  MapboxLayerConnectedComponent.propTypes = {
    mapboxLayerIndex: _propTypes.default.number.isRequired
  };
  MapboxLayerConnectedComponent.contextTypes = {
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    data: _propTypes.default.array,
    onUpdate: _propTypes.default.func,
    updateContainer: _propTypes.default.func,
    getValObject: _propTypes.default.func
  };
  MapboxLayerConnectedComponent.childContextTypes = {
    updateContainer: _propTypes.default.func,
    deleteContainer: _propTypes.default.func,
    moveContainer: _propTypes.default.func,
    container: _propTypes.default.object,
    fullContainer: _propTypes.default.object,
    getValObject: _propTypes.default.func
  };
  var plotly_editor_traits = WrappedComponent.plotly_editor_traits;
  MapboxLayerConnectedComponent.plotly_editor_traits = plotly_editor_traits;
  return MapboxLayerConnectedComponent;
}
//# sourceMappingURL=connectLayersToMapbox.js.map