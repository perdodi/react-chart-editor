"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleSlidersPanel = function StyleSlidersPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.SliderAccordion, null, _react.default.createElement(_components.Radio, {
    attr: "visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.PlotlySection, {
    name: _('Background')
  }, _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bgcolor"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Active Color'),
    attr: "activebgcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Border')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "borderwidth"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "bordercolor"
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
    name: _('Length'),
    attr: 'len'
  }, _react.default.createElement(_components.Numeric, {
    label: _('Length'),
    attr: 'len',
    step: 0.02
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Length Mode'),
    attr: 'lenmode',
    options: [{
      label: _('Fraction of canvas'),
      value: 'fraction'
    }, {
      label: _('Pixels'),
      value: 'pixels'
    }]
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
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Ticks')
  }, _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "tickcolor"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Length'),
    attr: "ticklen"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "tickwidth"
  })));
};

StyleSlidersPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleSlidersPanel;
exports.default = _default;
//# sourceMappingURL=StyleSlidersPanel.js.map