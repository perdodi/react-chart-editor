"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleImagesPanel = function StyleImagesPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.ImageAccordion, {
    canAdd: true,
    canReorder: true
  }, _react.default.createElement(_components.Radio, {
    attr: "visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Dropzone, {
    attr: "source",
    fileType: "image",
    show: true
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Aspect Ratio'),
    attr: "sizing",
    options: [{
      label: _('Contain'),
      value: 'contain'
    }, {
      label: _('Fill'),
      value: 'fill'
    }, {
      label: _('Stretch'),
      value: 'stretch'
    }],
    clearable: false
  }), _react.default.createElement(_components.Radio, {
    label: _('Relative to Grid'),
    attr: "layer",
    options: [{
      label: _('Below'),
      value: 'below'
    }, {
      label: _('Above'),
      value: 'above'
    }]
  }), _react.default.createElement(_components.PositioningNumeric, {
    attr: "sizex",
    label: _('Width')
  }), _react.default.createElement(_components.PositioningNumeric, {
    attr: "sizey",
    label: _('Height')
  }), _react.default.createElement(_components.PlotlySection, {
    name: _('Horizontal Positioning')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Anchor Point'),
    clearable: false,
    attr: "xanchor",
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
  }), _react.default.createElement(_components.PositioningNumeric, {
    label: _('Position'),
    attr: "x"
  }), _react.default.createElement(_components.PositioningRef, {
    label: _('Relative To'),
    attr: "xref"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Vertical Positioning')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Anchor Point'),
    clearable: false,
    attr: "yanchor",
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
  }), _react.default.createElement(_components.PositioningNumeric, {
    label: _('Position'),
    attr: "y"
  }), _react.default.createElement(_components.PositioningRef, {
    label: _('Relative To'),
    attr: "yref"
  })));
};

StyleImagesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleImagesPanel;
exports.default = _default;
//# sourceMappingURL=StyleImagesPanel.js.map