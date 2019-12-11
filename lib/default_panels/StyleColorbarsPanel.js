"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.traceHasColorbar = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var traceHasColorbar = function traceHasColorbar(trace, fullTrace) {
  return fullTrace.marker && fullTrace.marker.showscale !== undefined || // eslint-disable-line no-undefined
  fullTrace.showscale !== undefined;
}; // eslint-disable-line no-undefined


exports.traceHasColorbar = traceHasColorbar;

var StyleColorBarsPanel = function StyleColorBarsPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.TraceAccordion, {
    traceFilterCondition: traceHasColorbar
  }, ['', 'marker.'].map(function (prefix) {
    return _react.default.createElement(_components.VisibilitySelect, {
      attr: prefix + 'showscale',
      key: 'x' + prefix,
      options: [{
        label: _('Show'),
        value: true
      }, {
        label: _('Hide'),
        value: false
      }],
      showOn: true
    }, _react.default.createElement(_components.PlotlyPanel, {
      key: prefix + ' panel'
    }, _react.default.createElement(_components.PlotlyFold, {
      name: _('Title')
    }, _react.default.createElement(_components.TextEditor, {
      attr: prefix + 'colorbar.title.text'
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Location'),
      attr: prefix + 'colorbar.title.side',
      options: [{
        label: _('Top'),
        value: 'top'
      }, {
        label: _('Right'),
        value: 'right'
      }, {
        label: _('Bottom'),
        value: 'bottom'
      }]
    }), _react.default.createElement(_components.FontSelector, {
      label: _('Typeface'),
      attr: prefix + 'colorbar.title.font.family'
    }), _react.default.createElement(_components.Numeric, {
      label: _('Font Size'),
      attr: prefix + 'colorbar.title.font.size',
      units: "px"
    }), _react.default.createElement(_components.ColorPicker, {
      label: _('Font Color'),
      attr: prefix + 'colorbar.title.font.color'
    })), _react.default.createElement(_components.PlotlyFold, {
      name: _('Size and Positioning')
    }, _react.default.createElement(_components.PlotlySection, {
      name: _('Size'),
      attr: prefix + 'colorbar.len'
    }, _react.default.createElement(_components.Numeric, {
      label: _('Height'),
      attr: prefix + 'colorbar.len'
    }), _react.default.createElement(_components.Radio, {
      attr: prefix + 'colorbar.lenmode',
      options: [{
        label: _('Fraction of Plot'),
        value: 'fraction'
      }, {
        label: _('Pixels'),
        value: 'pixels'
      }]
    }), _react.default.createElement(_components.Numeric, {
      label: _('Width'),
      attr: prefix + 'colorbar.thickness'
    }), _react.default.createElement(_components.Radio, {
      attr: prefix + 'colorbar.thicknessmode',
      options: [{
        label: _('Fraction of Plot'),
        value: 'fraction'
      }, {
        label: _('Pixels'),
        value: 'pixels'
      }]
    })), _react.default.createElement(_components.PlotlySection, {
      name: _('Horizontal Positioning'),
      attr: prefix + 'colorbar.x'
    }, _react.default.createElement(_components.Numeric, {
      label: _('Position'),
      attr: prefix + 'colorbar.x',
      showSlider: true,
      step: 0.02
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Anchor'),
      attr: prefix + 'colorbar.xanchor',
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
      attr: prefix + 'colorbar.y'
    }, _react.default.createElement(_components.Numeric, {
      label: _('Position'),
      attr: prefix + 'colorbar.y',
      showSlider: true,
      step: 0.02
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Anchor'),
      attr: prefix + 'colorbar.yanchor',
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
      name: _('Padding'),
      attr: prefix + 'colorbar.xpad'
    }, _react.default.createElement(_components.Numeric, {
      label: _('Vertical'),
      attr: prefix + 'colorbar.ypad',
      units: "px"
    }), _react.default.createElement(_components.Numeric, {
      label: _('Horizontal'),
      attr: prefix + 'colorbar.xpad',
      units: "px"
    }))), _react.default.createElement(_components.PlotlyFold, {
      name: _('Labels')
    }, _react.default.createElement(_components.VisibilitySelect, {
      attr: prefix + 'colorbar.showticklabels',
      options: [{
        label: _('Show'),
        value: true
      }, {
        label: _('Hide'),
        value: false
      }],
      showOn: true,
      defaultOpt: true
    }, _react.default.createElement(_components.FontSelector, {
      label: _('Typeface'),
      attr: prefix + 'colorbar.tickfont.family'
    }), _react.default.createElement(_components.Numeric, {
      label: _('Font Size'),
      attr: prefix + 'colorbar.tickfont.size',
      units: "px"
    }), _react.default.createElement(_components.ColorPicker, {
      label: _('Font Color'),
      attr: prefix + 'colorbar.tickfont.color'
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Angle'),
      attr: prefix + 'colorbar.tickangle',
      clearable: false,
      options: [{
        label: _('Auto'),
        value: 'auto'
      }, {
        label: _('45'),
        value: 45
      }, {
        label: _('90'),
        value: 90
      }, {
        label: _('135'),
        value: 135
      }, {
        label: _('180'),
        value: 180
      }]
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Exponents'),
      attr: prefix + 'colorbar.exponentformat',
      clearable: false,
      options: [{
        label: _('None'),
        value: '000'
      }, {
        label: _('e+6'),
        value: 'e'
      }, {
        label: _('E+6'),
        value: 'E'
      }, {
        label: _('x10^6'),
        value: 'power'
      }, {
        label: _('k/M/G'),
        value: 'SI'
      }, {
        label: _('k/M/B'),
        value: 'B'
      }]
    }), _react.default.createElement(_components.DropdownCustom, {
      label: _('Label Prefix'),
      attr: prefix + 'colorbar.tickprefix',
      options: [{
        label: _('None'),
        value: ''
      }, {
        label: _('x'),
        value: 'x'
      }, {
        label: _('$'),
        value: '$'
      }, {
        label: _('#'),
        value: '#'
      }, {
        label: _('@'),
        value: '@'
      }, {
        label: _('Custom'),
        value: 'custom'
      }],
      customOpt: "custom",
      dafaultOpt: "",
      clearable: false
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Show Prefix'),
      attr: prefix + 'colorbar.showtickprefix',
      options: [{
        label: _('Every label'),
        value: 'all'
      }, {
        label: _('First label'),
        value: 'first'
      }, {
        label: _('Last label'),
        value: 'last'
      }, {
        label: _('None label'),
        value: 'none'
      }]
    }), _react.default.createElement(_components.DropdownCustom, {
      label: _('Label Suffix'),
      attr: prefix + 'colorbar.ticksuffix',
      options: [{
        label: _('None'),
        value: ''
      }, {
        label: _('C'),
        value: 'C'
      }, {
        label: _('%'),
        value: '%'
      }, {
        label: _('^'),
        value: '^'
      }, {
        label: _('Custom'),
        value: 'custom'
      }],
      customOpt: "custom",
      dafaultOpt: "",
      clearable: false
    }), _react.default.createElement(_components.Dropdown, {
      label: _('Show Suffix'),
      attr: prefix + 'colorbar.showticksuffix',
      options: [{
        label: _('Every label'),
        value: 'all'
      }, {
        label: _('First label'),
        value: 'first'
      }, {
        label: _('Last label'),
        value: 'last'
      }, {
        label: _('None label'),
        value: 'none'
      }]
    }), _react.default.createElement(_components.Radio, {
      attr: prefix + 'colorbar.tickmode',
      options: [{
        label: _('Auto'),
        value: 'auto'
      }, {
        label: _('Custom'),
        value: 'linear'
      }],
      label: _('Tick spacing')
    }), _react.default.createElement(_components.NumericOrDate, {
      label: _('Step Offset'),
      attr: prefix + 'colorbar.tick0'
    }), _react.default.createElement(_components.AxisInterval, {
      label: _('Step Size'),
      attr: prefix + 'colorbar.dtick'
    }), _react.default.createElement(_components.Numeric, {
      label: _('Max Number of Labels'),
      attr: prefix + 'colorbar.nticks'
    }))), _react.default.createElement(_components.PlotlyFold, {
      name: _('Ticks')
    }, _react.default.createElement(_components.VisibilitySelect, {
      attr: prefix + 'colorbar.ticks',
      options: [{
        label: _('Inside'),
        value: 'inside'
      }, {
        label: _('Outside'),
        value: 'outside'
      }, {
        label: _('Hide'),
        value: ''
      }],
      showOn: ['inside', 'outside'],
      defaultOpt: ''
    }, _react.default.createElement(_components.Numeric, {
      label: _('Length'),
      attr: prefix + 'colorbar.ticklen',
      units: "px"
    }), _react.default.createElement(_components.Numeric, {
      label: _('Width'),
      attr: prefix + 'colorbar.tickwidth',
      units: "px"
    }), _react.default.createElement(_components.ColorPicker, {
      label: _('Color'),
      attr: prefix + 'colorbar.tickcolor'
    }), _react.default.createElement(_components.Radio, {
      attr: prefix + 'colorbar.tickmode',
      options: [{
        label: _('Auto'),
        value: 'auto'
      }, {
        label: _('Custom'),
        value: 'linear'
      }],
      label: _('Tick spacing')
    }), _react.default.createElement(_components.NumericOrDate, {
      label: _('Step Offset'),
      attr: prefix + 'colorbar.tick0'
    }), _react.default.createElement(_components.AxisInterval, {
      label: _('Step Size'),
      attr: prefix + 'colorbar.dtick'
    }), _react.default.createElement(_components.Numeric, {
      label: _('Max Number of Labels'),
      attr: prefix + 'colorbar.nticks'
    }))), _react.default.createElement(_components.PlotlyFold, {
      name: _('Borders and Background')
    }, _react.default.createElement(_components.PlotlySection, {
      name: _('Color Bar'),
      attr: prefix + 'colorbar.outlinewidth'
    }, _react.default.createElement(_components.Numeric, {
      label: _('Border Width'),
      attr: prefix + 'colorbar.outlinewidth'
    }), _react.default.createElement(_components.ColorPicker, {
      label: _('Border Color'),
      attr: prefix + 'colorbar.outlinecolor'
    })), _react.default.createElement(_components.PlotlySection, {
      name: _('Color Bar Container'),
      attr: prefix + 'colorbar.bgcolor'
    }, _react.default.createElement(_components.ColorPicker, {
      label: _('Background Color'),
      attr: prefix + 'colorbar.bgcolor'
    }), _react.default.createElement(_components.Numeric, {
      label: _('Border Width'),
      attr: prefix + 'colorbar.borderwidth'
    }), _react.default.createElement(_components.ColorPicker, {
      label: _('Border Color'),
      attr: prefix + 'colorbar.bordercolor'
    })))));
  }));
};

StyleColorBarsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleColorBarsPanel;
exports.default = _default;
//# sourceMappingURL=StyleColorbarsPanel.js.map