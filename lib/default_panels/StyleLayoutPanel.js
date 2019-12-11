"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _derived = require("../components/fields/derived");

var _DataSelector = _interopRequireDefault(require("../components/fields/DataSelector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleLayoutPanel = function StyleLayoutPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.LayoutPanel, null, _react.default.createElement(_components.PlotlyFold, {
    name: _('Defaults')
  }, _react.default.createElement(_components.ColorPicker, {
    label: _('Plot Background'),
    attr: "plot_bgcolor"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Margin Color'),
    attr: "paper_bgcolor"
  }), _react.default.createElement(_components.PlotlySection, {
    name: _('Colorscales'),
    attr: "colorway"
  }, _react.default.createElement(_components.ColorwayPicker, {
    label: _('Categorical'),
    attr: "colorway",
    disableCategorySwitch: true,
    labelWidth: 80
  }), _react.default.createElement(_components.ColorscalePicker, {
    label: _('Sequential'),
    attr: "colorscale.sequential",
    disableCategorySwitch: true,
    labelWidth: 80
  }), _react.default.createElement(_components.ColorscalePicker, {
    label: _('Diverging'),
    attr: "colorscale.diverging",
    initialCategory: "divergent",
    disableCategorySwitch: true,
    labelWidth: 80
  }), _react.default.createElement(_components.ColorscalePicker, {
    label: _('Negative Sequential'),
    attr: "colorscale.sequentialminus",
    disableCategorySwitch: true,
    labelWidth: 80
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Text'),
    attr: "font.family"
  }, _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "font.family",
    clearable: false
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "font.size",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Font Color'),
    attr: "font.color"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Number format'),
    attr: "separators",
    options: [{
      label: _('1,234.56'),
      value: '.,'
    }, {
      label: _('1 234.56'),
      value: ', '
    }, {
      label: _('1 234,56'),
      value: ', '
    }, {
      label: _('1.234,56'),
      value: ',.'
    }],
    clearable: false
  }))), _react.default.createElement(_components.PlotlyFold, {
    name: _('Title')
  }, _react.default.createElement(_components.TextEditor, {
    attr: "title.text"
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "title.font.family",
    clearable: false
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "title.font.size",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Font Color'),
    attr: "title.font.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Horizontal Position'),
    showSlider: true,
    step: 0.02,
    attr: "title.x"
  })), _react.default.createElement(_components.PlotlyFold, {
    name: _('Modebar')
  }, _react.default.createElement(_components.Radio, {
    label: _('Orientation'),
    attr: "modebar.orientation",
    options: [{
      label: _('Horizontal'),
      value: 'h'
    }, {
      label: _('Vertical'),
      value: 'v'
    }]
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Icon Color'),
    attr: "modebar.color"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Active Icon Color'),
    attr: "modebar.activecolor"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Background Color'),
    attr: "modebar.bgcolor"
  })), _react.default.createElement(_components.PlotlyFold, {
    name: _('Size and Margins')
  }, _react.default.createElement(_components.VisibilitySelect, {
    attr: "autosize",
    label: _('Size'),
    options: [{
      label: _('Auto'),
      value: true
    }, {
      label: _('Custom'),
      value: false
    }],
    showOn: false,
    defaultOpt: true
  }, _react.default.createElement(_components.Numeric, {
    label: _('Fixed Width'),
    attr: "width",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Fixed height'),
    attr: "height",
    units: "px"
  })), _react.default.createElement(_components.Numeric, {
    label: _('Top'),
    attr: "margin.t",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Bottom'),
    attr: "margin.b",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Left'),
    attr: "margin.l",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Right'),
    attr: "margin.r",
    units: "px"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Padding'),
    attr: "margin.pad",
    units: "px"
  })), _react.default.createElement(_components.PlotlyFold, {
    name: _('Interactions')
  }, _react.default.createElement(_components.PlotlySection, {
    name: _('Drag'),
    attr: "dragmode"
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Mode'),
    attr: "dragmode",
    options: [{
      label: _('Zoom'),
      value: 'zoom'
    }, {
      label: _('Select'),
      value: 'select'
    }, {
      label: _('Pan'),
      value: 'pan'
    }, {
      label: _('Lasso'),
      value: 'lasso'
    }, {
      label: _('Orbit'),
      value: 'orbit'
    }, {
      label: _('Turntable'),
      value: 'turntable'
    }],
    clearable: false
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Select Direction'),
    attr: "selectdirection",
    options: [{
      label: _('Any'),
      value: 'any'
    }, {
      label: _('Horizontal'),
      value: 'h'
    }, {
      label: _('Vertical'),
      value: 'v'
    }, {
      label: _('Diagonal'),
      value: 'd'
    }],
    clearable: false
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Click'),
    attr: "clickmode"
  }, _react.default.createElement(_components.Flaglist, {
    label: _('Mode'),
    attr: "clickmode",
    options: [{
      label: _('Click Event'),
      value: 'event'
    }, {
      label: _('Select Data Point'),
      value: 'select'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Hover')
  }, _react.default.createElement(_components.HovermodeDropdown, {
    label: _('Mode'),
    attr: "hovermode"
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Text Alignment'),
    attr: "hoverlabel.align",
    options: [{
      label: _('Auto'),
      value: 'auto'
    }, {
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Right'),
      value: 'right'
    }],
    clearable: false
  }), _react.default.createElement(_derived.HoverColor, {
    label: _('Background Color'),
    attr: "hoverlabel.bgcolor",
    defaultColor: "#FFF",
    handleEmpty: true
  }), _react.default.createElement(_derived.HoverColor, {
    label: _('Border Color'),
    attr: "hoverlabel.bordercolor",
    defaultColor: "#000",
    handleEmpty: true
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "hoverlabel.font.family",
    clearable: true
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "hoverlabel.font.size"
  }), _react.default.createElement(_derived.HoverColor, {
    label: _('Font Color'),
    attr: "hoverlabel.font.color",
    defaultColor: "#000",
    handleEmpty: true
  })))), _react.default.createElement(_components.PlotlyFold, {
    name: _('Meta Text')
  }, _react.default.createElement(_DataSelector.default, {
    label: _('Custom Data'),
    attr: "meta"
  }), _react.default.createElement(_components.Info, null, _react.default.createElement("p", null, _('You can refer to the items in this column in any text fields of the editor like so: ')), _react.default.createElement("p", null, _('Ex: '), _react.default.createElement("span", {
    style: {
      letterSpacing: '1px',
      fontStyle: 'italic',
      userSelect: 'text'
    }
  }, _('My custom title %{meta[1]}'))))));
};

StyleLayoutPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleLayoutPanel;
exports.default = _default;
//# sourceMappingURL=StyleLayoutPanel.js.map