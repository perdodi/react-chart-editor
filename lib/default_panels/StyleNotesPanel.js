"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleNotesPanel = function StyleNotesPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.AnnotationAccordion, {
    canAdd: true,
    canReorder: true
  }, _react.default.createElement(_components.PlotlySection, {
    name: _('Note Text'),
    attr: "text"
  }, _react.default.createElement(_components.TextEditor, {
    attr: "text"
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "font.family"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "font.size",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Font Color'),
    attr: "font.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Angle'),
    attr: "textangle",
    units: "\xB0"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Horizontal Alignment'),
    clearable: false,
    attr: "align",
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
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Vertical Alignment'),
    clearable: false,
    attr: "valign",
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
    name: _('Arrow')
  }, _react.default.createElement(_components.Radio, {
    attr: "showarrow",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "arrowwidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "arrowcolor"
  }), _react.default.createElement(_components.ArrowSelector, {
    label: _('Arrowhead'),
    attr: "arrowhead"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Scale'),
    step: 0.1,
    attr: "arrowsize",
    units: "px"
  }), _react.default.createElement(_components.AnnotationArrowRef, {
    label: _('X Offset'),
    attr: "axref"
  }), _react.default.createElement(_components.AnnotationArrowRef, {
    label: _('Y Offset'),
    attr: "ayref"
  }), _react.default.createElement(_components.NumericOrDate, {
    label: _('X Vector'),
    attr: "ax"
  }), _react.default.createElement(_components.NumericOrDate, {
    label: _('Y Vector'),
    attr: "ay"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Horizontal Positioning')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Anchor Point'),
    clearable: false,
    attr: "xanchor",
    options: [{
      label: _('Auto'),
      value: 'auto'
    }, {
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Right'),
      value: 'right'
    }]
  }), _react.default.createElement(_components.PositioningNumeric, {
    label: _('Position'),
    attr: "x"
  }), _react.default.createElement(_components.AnnotationRef, {
    label: _('Relative To'),
    attr: "xref"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Vertical Positioning')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Anchor Point'),
    clearable: false,
    attr: "yanchor",
    options: [{
      label: _('Auto'),
      value: 'auto'
    }, {
      label: _('Top'),
      value: 'top'
    }, {
      label: _('Middle'),
      value: 'middle'
    }, {
      label: _('Bottom'),
      value: 'bottom'
    }]
  }), _react.default.createElement(_components.PositioningNumeric, {
    label: _('Position'),
    attr: "y"
  }), _react.default.createElement(_components.AnnotationRef, {
    label: _('Relative To'),
    attr: "yref"
  })));
};

StyleNotesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleNotesPanel;
exports.default = _default;
//# sourceMappingURL=StyleNotesPanel.js.map