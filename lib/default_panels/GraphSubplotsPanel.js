"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _constants = require("../lib/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GraphSubplotsPanel = function GraphSubplotsPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.SubplotAccordion, null, _react.default.createElement(_components.PlotlySection, {
    name: _('Boundaries'),
    attr: "xaxis.domain[0]"
  }, _react.default.createElement(_components.AxisOverlayDropdown, {
    label: _('X Overlay'),
    attr: "xaxis.overlaying"
  }), _react.default.createElement(_components.AxisOverlayDropdown, {
    label: _('Y Overlay'),
    attr: "yaxis.overlaying"
  })), _react.default.createElement(_components.RectanglePositioner, {
    attr: "domain.x[0]"
  }), _react.default.createElement(_components.RectanglePositioner, {
    attr: "xaxis.domain[0]",
    cartesian: true
  }), _react.default.createElement(_components.TraceTypeSection, {
    name: _('X Anchor'),
    traceTypes: _constants.TRACE_TO_AXIS.cartesian
  }, _react.default.createElement(_components.AxisAnchorDropdown, {
    label: _('Anchor to'),
    attr: "xaxis.anchor",
    clearable: false
  }), _react.default.createElement(_components.AxisSide, {
    label: _('Side'),
    attr: "xaxis.side"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Y Anchor'),
    traceTypes: _constants.TRACE_TO_AXIS.cartesian
  }, _react.default.createElement(_components.AxisAnchorDropdown, {
    label: _('Anchor to'),
    attr: "yaxis.anchor",
    clearable: false
  }), _react.default.createElement(_components.AxisSide, {
    label: _('Side'),
    attr: "yaxis.side"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Aspect Ratio')
  }, _react.default.createElement(_components.VisibilitySelect, {
    attr: "aspectmode",
    options: [{
      label: _('Auto'),
      value: 'mode'
    }, {
      label: _('Cube'),
      value: 'cube'
    }, {
      label: _('Data'),
      value: 'data'
    }, {
      label: _('Manual'),
      value: 'manual'
    }],
    dropdown: true,
    clearable: false,
    showOn: "manual",
    defaultOpt: "mode"
  }, _react.default.createElement(_components.Numeric, {
    label: _('X'),
    attr: "aspectratio.x",
    step: 0.1
  }), _react.default.createElement(_components.Numeric, {
    label: _('Y'),
    attr: "aspectratio.y",
    step: 0.1
  }), _react.default.createElement(_components.Numeric, {
    label: _('Z'),
    attr: "aspectratio.z",
    step: 0.1
  }))), _react.default.createElement(_components.PlotlySection, {
    name: _('Projection')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Type'),
    attr: "camera.projection.type",
    options: [{
      label: _('Perspective'),
      value: 'perspective'
    }, {
      label: _('Orthographic'),
      value: 'orthographic'
    }],
    clearable: false
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Canvas')
  }, _react.default.createElement(_components.ColorPicker, {
    label: _('Plot Background'),
    attr: "bgcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Bar Options')
  }, _react.default.createElement(_components.Radio, {
    label: _('Bar Mode'),
    attr: "barmode",
    options: [{
      label: _('Stack'),
      value: 'stack'
    }, {
      label: _('Overlay'),
      value: 'overlay'
    }]
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Bar Padding'),
    attr: "bargap",
    showSlider: true
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Ternary')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Sum'),
    attr: "sum"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Polar Sector')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Min'),
    attr: "sector[0]",
    min: -360,
    max: 360,
    showSlider: true
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max'),
    attr: "sector[1]",
    min: -360,
    max: 360,
    showSlider: true
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Hole'),
    attr: "hole",
    min: 0,
    max: 100,
    showSlider: true
  })));
};

GraphSubplotsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = GraphSubplotsPanel;
exports.default = _default;
//# sourceMappingURL=GraphSubplotsPanel.js.map