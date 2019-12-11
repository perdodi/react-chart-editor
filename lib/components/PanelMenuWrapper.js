"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _SidebarGroup = _interopRequireDefault(require("./sidebar/SidebarGroup"));

var _lib = require("../lib");

var _sortMenu = _interopRequireDefault(require("../lib/sortMenu"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PanelsWithSidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(PanelsWithSidebar, _Component);

  function PanelsWithSidebar(props) {
    var _this;

    _classCallCheck(this, PanelsWithSidebar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PanelsWithSidebar).call(this, props));

    var opts = _this.computeMenuOptions(props);

    var firstSidebarGroup = opts.filter(function (o) {
      return o.panels;
    })[0];
    _this.state = {
      group: firstSidebarGroup.name,
      panel: firstSidebarGroup.panels[0]
    };
    _this.setPanel = _this.setPanel.bind(_assertThisInitialized(_this));
    _this.renderSection = _this.renderSection.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PanelsWithSidebar, [{
    key: "setPanel",
    value: function setPanel(group, panel) {
      this.setState({
        group: group,
        panel: panel
      });
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        setPanel: this.setPanel
      };
    }
  }, {
    key: "renderSection",
    value: function renderSection(section, i) {
      if (section.type && (section.type.plotly_editor_traits || {}).sidebar_element) {
        return (0, _react.cloneElement)(section, {
          key: i
        });
      }

      return _react.default.createElement(_SidebarGroup.default, {
        key: i,
        selectedGroup: this.state.group,
        selectedPanel: this.state.panel,
        group: section.name,
        panels: section.panels,
        onChangeGroup: this.setPanel
      });
    }
  }, {
    key: "computeMenuOptions",
    value: function computeMenuOptions(props) {
      var children = props.children,
          menuPanelOrder = props.menuPanelOrder;
      var sections = [];
      var groupLookup = {};
      var groupIndex;
      var childrenArray = (0, _sortMenu.default)(_react.default.Children.toArray(children), menuPanelOrder);
      childrenArray.forEach(function (child) {
        if (!child) {
          return;
        }

        var group = child.props.group;
        var name = child.props.name;

        if (group && name) {
          var obj;

          if (groupLookup.hasOwnProperty(group)) {
            groupIndex = groupLookup[group];
            obj = sections[groupIndex];
          } else {
            groupLookup[group] = sections.length;
            obj = {
              name: group,
              panels: []
            };
            sections.push(obj);
          }

          obj.panels.push(name);
        }

        if ((child.type.plotly_editor_traits || {}).sidebar_element) {
          sections.push(child);
        }
      });
      return sections;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var menuOpts = this.computeMenuOptions(this.props);
      return _react.default.createElement("div", {
        className: (0, _lib.bem)('editor_controls', 'wrapper')
      }, _react.default.createElement("div", {
        className: (0, _lib.bem)('sidebar')
      }, menuOpts.map(this.renderSection)), _react.default.Children.map(this.props.children, function (child, i) {
        return child === null || _this2.state.group !== child.props.group || _this2.state.panel !== child.props.name ? null : (0, _react.cloneElement)(child, {
          key: i
        });
      }));
    }
  }]);

  return PanelsWithSidebar;
}(_react.Component);

PanelsWithSidebar.propTypes = {
  children: _propTypes.default.node,
  menuPanelOrder: _propTypes.default.array
};
PanelsWithSidebar.childContextTypes = {
  setPanel: _propTypes.default.func
};
var _default = PanelsWithSidebar;
exports.default = _default;
//# sourceMappingURL=PanelMenuWrapper.js.map