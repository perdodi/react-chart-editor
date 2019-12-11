"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleUpdateMenusPanel = function StyleUpdateMenusPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.UpdateMenuAccordion, null, _react.default.createElement(_components.VisibilitySelect, {
    attr: "visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }],
    showOn: true
  }, _react.default.createElement(_components.PlotlySection, {
    name: _('Button Labels')
  }, _react.default.createElement(_components.UpdateMenuButtons, {
    attr: "buttons"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Background')
  }, _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bgcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Font')
  }, _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "font.family"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Size'),
    attr: "font.size"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "font.color"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Border')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "borderwidth"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bordercolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Horizontal Positioning'),
    attr: 'x'
  }, _react.default.createElement(_components.Numeric, {
    label: _('Position'),
    attr: 'x',
    showSlider: true,
    step: 0.02
  }), _react.default.createElement(_components.Radio, {
    label: _('Anchor'),
    attr: 'xanchor',
    options: [{
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Right'),
      value: 'right'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Vertical Positioning'),
    attr: 'y'
  }, _react.default.createElement(_components.Numeric, {
    label: _('Position'),
    attr: 'y',
    showSlider: true,
    step: 0.02
  }), _react.default.createElement(_components.Radio, {
    label: _('Anchor'),
    attr: 'yanchor',
    options: [{
      label: _('Top'),
      value: 'top'
    }, {
      label: _('Middle'),
      value: 'middle'
    }, {
      label: _('Bottom'),
      value: 'bottom'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Padding')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Top'),
    attr: "pad.t",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Bottom'),
    attr: "pad.b",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Left'),
    attr: "pad.l",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Right'),
    attr: "pad.r",
    units: "px"
  }))));
};

StyleUpdateMenusPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleUpdateMenusPanel;
exports.default = _default;
//# sourceMappingURL=StyleUpdateMenusPanel.js.map