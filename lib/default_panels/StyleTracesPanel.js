"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

var _derived = require("../components/fields/derived");

var _traceTypes = require("../lib/traceTypes");

var _localize = _interopRequireDefault(require("../lib/localize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allTraceTypes = (0, _traceTypes.traceTypes)(_localize.default).map(function (_ref) {
  var value = _ref.value;
  return value;
});

var StyleTracesPanel = function StyleTracesPanel(props, _ref2) {
  var _ = _ref2.localize;
  return _react.default.createElement(_components.TraceAccordion, {
    canGroup: true
  }, _react.default.createElement(_components.TextEditor, {
    label: _('Name'),
    attr: "name",
    richTextOnly: true
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Trace Opacity'),
    attr: "opacity"
  }), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Leaves'),
    traceTypes: ['sunburst'],
    mode: "trace"
  }, _react.default.createElement(_derived.LevelRendered, {
    label: _('Start at Level'),
    attr: "level"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max Depth'),
    attr: "maxdepth",
    min: -1,
    step: 1
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Opacity'),
    attr: "leaf.opacity"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Legend')
  }, _react.default.createElement(_derived.ShowInLegend, {
    label: _('Show in Legend'),
    attr: "showlegend",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }],
    showOn: true
  }, _react.default.createElement(_components.GroupCreator, {
    label: _('Legend Group'),
    prefix: _('Group'),
    attr: "legendgroup"
  }))), _react.default.createElement(_components.PlotlySection, {
    name: _('Cones & Streamtubes')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Size'),
    attr: "sizeref",
    stepmode: "relative"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Size Mode'),
    options: [{
      label: _('scaled'),
      value: 'scaled'
    }, {
      label: _('absolute'),
      value: 'absolute'
    }],
    attr: "sizemode"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Cone Anchor'),
    options: [{
      label: _('Tip'),
      value: 'tip'
    }, {
      label: _('Tail'),
      value: 'tail'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Center of Mass'),
      value: 'cm'
    }],
    attr: "anchor"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max Tube segments'),
    attr: "maxdisplayed"
  })), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Color'),
    attr: "color"
  }), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Segment Colors'),
    traceTypes: ['pie', 'sunburst', 'funnelarea'],
    mode: "trace"
  }, _react.default.createElement(_components.LayoutSection, {
    attr: "name"
  }, _react.default.createElement(_components.ColorwayPicker, {
    label: _('Colors'),
    attr: "piecolorway"
  }), _react.default.createElement(_components.Radio, {
    label: _('Extended Colors'),
    attr: "extendpiecolors",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorwayPicker, {
    label: _('Colors'),
    attr: "sunburstcolorway"
  }), _react.default.createElement(_components.Radio, {
    label: _('Extended Colors'),
    attr: "extendsunburstcolors",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorwayPicker, {
    label: _('Colors'),
    attr: "funnelareacolorway"
  }), _react.default.createElement(_components.Radio, {
    label: _('Extended Colors'),
    attr: "extendfunnelareacolors",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  }))), _react.default.createElement(_components.PlotlySection, {
    name: _('Funnel Dimensions'),
    traceTypes: ['funnelarea'],
    attr: "aspectratio"
  }, _react.default.createElement(_components.Numeric, {
    label: _('Aspect Ratio'),
    attr: "aspectratio",
    step: 0.01,
    min: 0,
    max: 2,
    showSlider: true
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Base Ratio'),
    attr: "baseratio"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Subplot Title'),
    attr: "title.text"
  }, _react.default.createElement(_components.TextEditor, {
    label: _('Name'),
    attr: "title.text"
  }), _react.default.createElement(_components.Dropdown, {
    label: 'Title Position',
    attr: "titleposition",
    options: [{
      label: _('Top Left'),
      value: 'top left'
    }, {
      label: _('Top Center'),
      value: 'top center'
    }, {
      label: _('Top Right'),
      value: 'top right'
    }, {
      label: _('Middle Center'),
      value: 'middle center'
    }, {
      label: _('Bottom Left'),
      value: 'bottom left'
    }, {
      label: _('Bottom Center'),
      value: 'bottom center'
    }, {
      label: _('Bottom Right'),
      value: 'bottom right'
    }]
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "title.font.family",
    clearable: false
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "title.font.size",
    units: "px"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Values')
  }, _react.default.createElement(_derived.BinningDropdown, {
    label: _('Histogram Function'),
    attr: "histfunc"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Histogram Normalization'),
    options: [{
      label: _('Number of Occurences'),
      value: ''
    }, {
      label: _('Percent'),
      value: 'percent'
    }, {
      label: _('Probability'),
      value: 'probability'
    }, {
      label: _('Density'),
      value: 'density'
    }, {
      label: _('Probability Density'),
      value: 'probability density'
    }],
    attr: "histnorm"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Cumulative')
  }, _react.default.createElement(_components.Radio, {
    label: _('Cumulative'),
    attr: "cumulative.enabled",
    options: [{
      label: _('Enabled'),
      value: true
    }, {
      label: _('Disabled'),
      value: false
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Direction'),
    attr: "cumulative.direction",
    options: [{
      label: _('Increasing'),
      value: 'increasing'
    }, {
      label: _('Decreasing'),
      value: 'decreasing'
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Current Bin'),
    attr: "cumulative.currentbin",
    options: [{
      label: _('Include'),
      value: 'include'
    }, {
      label: _('Exclude'),
      value: 'exclude'
    }, {
      label: _('Half'),
      value: 'half'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Header')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Height'),
    attr: "header.height"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Fill Color'),
    attr: "header.fill.color"
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "header.font.family"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "header.font.size"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Text Alignment'),
    options: [{
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Right'),
      value: 'right'
    }],
    attr: "header.align"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Font Color'),
    attr: "header.font.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Border Width'),
    attr: "header.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Border Color'),
    attr: "header.line.color"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Cells')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Height'),
    attr: "cells.height"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Fill Color'),
    attr: "cells.fill.color"
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "cells.font.family"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "cells.font.size"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Text Alignment'),
    options: [{
      label: _('Left'),
      value: 'left'
    }, {
      label: _('Center'),
      value: 'center'
    }, {
      label: _('Right'),
      value: 'right'
    }],
    attr: "cells.align"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Font Color'),
    attr: "cells.font.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Border Width'),
    attr: "cells.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Border Color'),
    attr: "cells.line.color"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Display')
  }, _react.default.createElement(_components.Flaglist, {
    attr: "mode",
    options: [{
      label: _('Points'),
      value: 'markers'
    }, {
      label: _('Lines'),
      value: 'lines'
    }, {
      label: _('Text'),
      value: 'text'
    }]
  }), _react.default.createElement(_components.Radio, {
    attr: "flatshading",
    label: _('Flatshading'),
    options: [{
      label: _('Enable'),
      value: true
    }, {
      label: _('Disable'),
      value: false
    }]
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Bar Grouping, Sizing and Spacing'),
    traceTypes: ['bar', 'histogram', 'funnel', 'waterfall'],
    mode: "trace"
  }, _react.default.createElement(_components.LayoutSection, {
    attr: "name"
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Bar Mode'),
    attr: "barmode",
    options: [{
      label: _('Grouped'),
      value: 'group'
    }, {
      label: _('Positive/Negative Stacked'),
      value: 'relative'
    }, {
      label: _('Strict Sum Stacked'),
      value: 'stack'
    }, {
      label: _('Overlaid'),
      value: 'overlay'
    }],
    clearable: false
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Normalization'),
    attr: "barnorm",
    options: [{
      label: _('None'),
      value: ''
    }, {
      label: _('Fraction'),
      value: 'fraction'
    }, {
      label: _('Percent'),
      value: 'percent'
    }],
    clearable: false
  }), _react.default.createElement(_components.NumericFractionInverse, {
    label: _('Bar Width'),
    attr: "bargap"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Bar Padding'),
    attr: "bargroupgap"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Bar Mode'),
    attr: "funnelmode",
    options: [{
      label: _('Grouped'),
      value: 'group'
    }, {
      label: _('Stacked'),
      value: 'stack'
    }, {
      label: _('Overlaid'),
      value: 'overlay'
    }],
    clearable: false
  }), _react.default.createElement(_components.NumericFractionInverse, {
    label: _('Bar Width'),
    attr: "funnelgap"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Bar Padding'),
    attr: "funnelgroupgap"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Bar Mode'),
    attr: "waterfallmode",
    options: [{
      label: _('Grouped'),
      value: 'group'
    }, {
      label: _('Stacked'),
      value: 'stack'
    }, {
      label: _('Overlaid'),
      value: 'overlay'
    }],
    clearable: false
  }), _react.default.createElement(_components.NumericFractionInverse, {
    label: _('Bar Width'),
    attr: "waterfallgap"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Bar Padding'),
    attr: "waterfallgroupgap"
  }))), _react.default.createElement(_components.PlotlySection, {
    name: _('Binning')
  }, _react.default.createElement(_components.NumericOrDate, {
    label: _('X Bin Start'),
    attr: "xbins.start",
    axis: "x"
  }), _react.default.createElement(_components.NumericOrDate, {
    label: _('X Bin End'),
    attr: "xbins.end",
    axis: "x"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max X Bins'),
    attr: "nbinsx"
  }), _react.default.createElement(_components.AxisInterval, {
    label: _('X Bin Size'),
    attr: "xbins.size",
    axis: "x"
  }), _react.default.createElement(_components.NumericOrDate, {
    label: _('Y Bin Start'),
    attr: "ybins.start",
    axis: "y"
  }), _react.default.createElement(_components.NumericOrDate, {
    label: _('Y Bin End'),
    attr: "ybins.end",
    axis: "y"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max Y Bins'),
    attr: "nbinsy"
  }), _react.default.createElement(_components.AxisInterval, {
    label: _('Y Bin Size'),
    attr: "ybins.size",
    axis: "y"
  })), _react.default.createElement(_components.PlotlySection, {
    label: _('Bar Position')
  }, _react.default.createElement(_components.NumericOrDate, {
    label: _('Base'),
    attr: "base"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Offset'),
    attr: "offset"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "width"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Box Size and Spacing'),
    traceTypes: ['box'],
    mode: "trace"
  }, _react.default.createElement(_components.LayoutSection, {
    attr: "name"
  }, _react.default.createElement(_components.Radio, {
    label: _('Box Mode'),
    attr: "boxmode",
    options: [{
      label: _('Overlay'),
      value: 'overlay'
    }, {
      label: _('Group'),
      value: 'group'
    }]
  }), _react.default.createElement(_components.NumericFractionInverse, {
    label: _('Box Width'),
    attr: "boxgap"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Box Padding'),
    attr: "boxgroupgap"
  }))), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Violin Size and Spacing'),
    traceTypes: ['violin'],
    mode: "trace"
  }, _react.default.createElement(_components.LayoutSection, {
    attr: "name"
  }, _react.default.createElement(_components.Radio, {
    label: _('Violin Mode'),
    attr: "violinmode",
    options: [{
      label: _('Overlay'),
      value: 'overlay'
    }, {
      label: _('Group'),
      value: 'group'
    }]
  }), _react.default.createElement(_components.NumericFractionInverse, {
    label: _('Violin Width'),
    attr: "violingap"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Violin Padding'),
    attr: "violingroupgap"
  }))), _react.default.createElement(_components.NumericFraction, {
    label: _('Whisker Width'),
    attr: "whiskerwidth"
  }), _react.default.createElement(_components.TraceMarkerSection, null, _react.default.createElement(_components.Radio, {
    label: _('Order'),
    attr: "sort",
    options: [{
      label: _('Sorted'),
      value: true
    }, {
      label: _('Unsorted'),
      value: false
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Direction'),
    attr: "direction",
    options: [{
      label: _('Clockwise'),
      value: 'clockwise'
    }, {
      label: _('Counterclockwise'),
      value: 'counterclockwise'
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Rotation'),
    attr: "rotation"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Hole Size'),
    attr: "hole"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Pull'),
    attr: "pull"
  }), _react.default.createElement(_components.Dropdown, {
    options: [{
      label: _('Show All'),
      value: 'all'
    }, {
      label: _('Outliers'),
      value: 'outliers'
    }, {
      label: _('Suspected Outliers'),
      value: 'suspectedoutliers'
    }, {
      label: _('Hide'),
      value: false
    }],
    attr: "boxpoints",
    clearable: false
  }), _react.default.createElement(_components.Dropdown, {
    options: [{
      label: _('Show All'),
      value: 'all'
    }, {
      label: _('Outliers'),
      value: 'outliers'
    }, {
      label: _('Suspected Outliers'),
      value: 'suspectedoutliers'
    }, {
      label: _('Hide'),
      value: false
    }],
    attr: "points",
    clearable: false
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Jitter'),
    attr: "jitter"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Position'),
    attr: "pointpos",
    step: 0.1,
    showSlider: true
  }), _react.default.createElement(_components.MarkerColor, {
    suppressMultiValuedMessage: true,
    label: _('Color'),
    attr: "marker.color",
    labelWidth: 80
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Point Opacity'),
    attr: "marker.opacity"
  }), _react.default.createElement(_components.MarkerSize, {
    label: _('Size'),
    attr: "marker.size"
  }), _react.default.createElement(_derived.NumericReciprocal, {
    label: _('Size Scale'),
    attr: "marker.sizeref",
    step: 0.2,
    stepmode: "relative"
  }), _react.default.createElement(_components.Radio, {
    label: _('Size Mode'),
    attr: "marker.sizemode",
    options: [{
      label: _('Area'),
      value: 'area'
    }, {
      label: _('Diameter'),
      value: 'diameter'
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Minimum Size'),
    attr: "marker.sizemin"
  }), _react.default.createElement(_components.SymbolSelector, {
    label: _('Symbol'),
    attr: "marker.symbol"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Border Width'),
    attr: "marker.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Border Color'),
    attr: "marker.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max Number of Points'),
    attr: "marker.maxdisplayed"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Connector Styles')
  }, _react.default.createElement(_components.Radio, {
    attr: "connector.visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Fill Color'),
    attr: "connector.fillcolor"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "connector.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "connector.line.color"
  }), _react.default.createElement(_components.LineDashSelector, {
    label: _('Line Type'),
    attr: "connector.line.dash"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Line Shape'),
    options: [{
      label: _('Spanning'),
      value: 'spanning'
    }, {
      label: _('Between'),
      value: 'between'
    }],
    attr: "connector.mode",
    clearable: false
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Increasing Marker Styles')
  }, _react.default.createElement(_components.TextEditor, {
    label: _('Name'),
    attr: "increasing.name",
    richTextOnly: true
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "increasing.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "increasing.line.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Marker Color'),
    attr: "increasing.marker.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "increasing.marker.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "increasing.marker.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Fill Color'),
    attr: "increasing.fillcolor"
  }), _react.default.createElement(_components.LineDashSelector, {
    label: _('Type'),
    attr: "increasing.line.dash"
  }), _react.default.createElement(_components.Radio, {
    label: _('Show in Legend'),
    attr: "increasing.showlegend",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Decreasing Marker Styles')
  }, _react.default.createElement(_components.TextEditor, {
    label: _('Name'),
    attr: "decreasing.name",
    richTextOnly: true
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "decreasing.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "decreasing.line.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Marker Color'),
    attr: "decreasing.marker.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "decreasing.marker.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "decreasing.marker.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Fill Color'),
    attr: "decreasing.fillcolor"
  }), _react.default.createElement(_components.LineDashSelector, {
    label: _('Type'),
    attr: "decreasing.line.dash"
  }), _react.default.createElement(_components.Radio, {
    label: _('Show in Legend'),
    attr: "decreasing.showlegend",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Total Marker Styles')
  }, _react.default.createElement(_components.MultiColorPicker, {
    label: _('Marker Color'),
    attr: "totals.marker.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "totals.marker.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "totals.marker.line.width"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Ticks')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "tickwidth"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Contours')
  }, _react.default.createElement(_components.Radio, {
    label: _('Type'),
    attr: "contours.type",
    options: [{
      label: _('Levels'),
      value: 'levels'
    }, {
      label: _('Constraint'),
      value: 'constraint'
    }]
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Coloring'),
    attr: "contours.coloring",
    options: [{
      label: _('Fill'),
      value: 'fill'
    }, {
      label: _('Heatmap'),
      value: 'heatmap'
    }, {
      label: _('Lines'),
      value: 'lines'
    }, {
      label: _('None'),
      value: 'none'
    }],
    clearable: false
  }), _react.default.createElement(_components.Radio, {
    label: _('Contour Lines'),
    attr: "contours.showlines",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Contour Labels'),
    attr: "contours.showlabels",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Number of Contours'),
    attr: "autocontour",
    options: [{
      label: _('Auto'),
      value: true
    }, {
      label: _('Custom'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max Contours'),
    attr: "ncontours"
  }), _react.default.createElement(_components.ContourNumeric, {
    label: _('Step Size'),
    attr: "contours.size"
  }), _react.default.createElement(_components.ContourNumeric, {
    label: _('Min Contour'),
    attr: "contours.start"
  }), _react.default.createElement(_components.ContourNumeric, {
    label: _('Max Contour'),
    attr: "contours.end"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Stacking'),
    traceTypes: ['scatter'],
    mode: "trace"
  }, _react.default.createElement(_components.GroupCreator, {
    label: _('Group'),
    prefix: _('Stack'),
    attr: "stackgroup"
  }), _react.default.createElement(_components.Radio, {
    label: _('Gaps'),
    attr: "stackgaps",
    options: [{
      label: _('Infer Zero'),
      value: 'infer zero'
    }, {
      label: _('Interpolate'),
      value: 'interpolate'
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Orientation'),
    attr: "orientation",
    options: [{
      label: _('Horizontal'),
      value: 'h'
    }, {
      label: _('Vertical'),
      value: 'v'
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Normalization'),
    attr: "groupnorm",
    options: [{
      label: _('None'),
      value: ''
    }, {
      label: _('Fraction'),
      value: 'fraction'
    }, {
      label: _('Percent'),
      value: 'percent'
    }]
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Lines'),
    traceTypes: ['scatter', 'contour', 'scatterternary', 'scatterpolar', 'scatterpolargl', 'box', 'violin', 'scatter3d', 'scattergl', 'scattergeo', 'parcoords', 'parcats', 'scattermapbox', 'scattercarpet', 'contourcarpet', 'ohlc', 'candlestick', 'histogram2dcontour'],
    mode: "trace"
  }, _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Color'),
    attr: "line.color"
  }), _react.default.createElement(_components.Radio, {
    label: _('Color Bar'),
    attr: "line.showscale",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorscalePicker, {
    label: _('Colorscale'),
    attr: "line.colorscale"
  }), _react.default.createElement(_components.LineDashSelector, {
    label: _('Type'),
    attr: "line.dash"
  }), _react.default.createElement(_components.LineShapeSelector, {
    label: _('Shape'),
    attr: "line.shape"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Smoothing'),
    attr: "line.smoothing",
    showSlider: true,
    step: 0.1
  }), _react.default.createElement(_components.Radio, {
    label: _('Connect Gaps'),
    attr: "connectgaps",
    options: [{
      label: _('Connect'),
      value: true
    }, {
      label: _('Blank'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Filled Area')
  }, _react.default.createElement(_components.FillDropdown, {
    attr: "fill",
    label: _('Fill to')
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Color'),
    attr: "fillcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Notches')
  }, _react.default.createElement(_components.Radio, {
    attr: "notched",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "notchwidth",
    min: 0,
    max: 0.5,
    step: 0.1
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Text Attributes')
  }, _react.default.createElement(_derived.TextInfo, {
    attr: "textinfo"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Text'),
    traceTypes: allTraceTypes.filter(function (t) {
      return !['histogram2d', 'histogram2dcontour', 'parcoords', 'parcats', 'sankey', 'table', 'scattercarpet', 'carpet'].includes(t);
    }),
    mode: "trace"
  }, _react.default.createElement(_components.DataSelector, {
    label: _('Text'),
    attr: "text"
  }), _react.default.createElement(_components.TextPosition, {
    label: _('Text Position'),
    attr: "textposition"
  }), _react.default.createElement(_components.FontSelector, {
    label: _('Typeface'),
    attr: "textfont.family"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Font Size'),
    attr: "textfont.size",
    units: "px"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Font Color'),
    attr: "textfont.color"
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Constrain Text'),
    options: [{
      label: _('Inside'),
      value: 'inside'
    }, {
      label: _('Outside'),
      value: 'outside'
    }, {
      label: _('Both'),
      value: 'both'
    }, {
      label: _('None'),
      value: 'none'
    }],
    attr: "constraintext",
    clearable: false
  }), _react.default.createElement(_components.Radio, {
    label: _('Clip on Axes'),
    attr: "cliponaxis",
    options: [{
      label: _('Yes'),
      value: true
    }, {
      label: _('No'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Colorscale')
  }, _react.default.createElement(_components.ColorscalePicker, {
    label: _('Colorscale'),
    attr: "colorscale"
  }), _react.default.createElement(_components.Radio, {
    label: _('Color Bar'),
    attr: "showscale",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Orientation'),
    attr: "reversescale",
    options: [{
      label: _('Normal'),
      value: false
    }, {
      label: _('Reversed'),
      value: true
    }]
  }), _react.default.createElement(_components.VisibilitySelect, {
    label: _('Range'),
    attr: "zauto",
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
    label: _('Min'),
    attr: "zmin"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max'),
    attr: "zmax"
  })), _react.default.createElement(_components.VisibilitySelect, {
    label: _('Range'),
    attr: "cauto",
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
    label: _('Min'),
    attr: "cmin"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Max'),
    attr: "cmax"
  })), _react.default.createElement(_components.Radio, {
    label: _('Smoothing'),
    attr: "zsmooth",
    options: [{
      label: _('On'),
      value: 'best'
    }, {
      label: _('Off'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Gaps Between Cells')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Horizontal Gap'),
    attr: "xgap"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Vertical Gap'),
    attr: "ygap"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Heatmap')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Horizontal Gaps'),
    attr: "xgap"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Vertical Gaps'),
    attr: "ygap"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Gaps in Data'),
    traceTypes: ['heatmap', 'contour', 'heatmapgl'],
    mode: "trace"
  }, _react.default.createElement(_components.Radio, {
    label: _('Interpolate Gaps'),
    attr: "connectgaps",
    options: [{
      label: _('On'),
      value: true
    }, {
      label: _('Off'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Lighting')
  }, _react.default.createElement(_components.NumericFraction, {
    label: _('Ambient'),
    attr: "lighting.ambient"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Diffuse'),
    attr: "lighting.diffuse"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Specular'),
    attr: "lighting.specular"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Roughness'),
    attr: "lighting.roughness"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Fresnel'),
    attr: "lighting.fresnel"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Vertex Normal'),
    attr: "lighting.vertexnormalsepsilon"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Face Normal'),
    attr: "lighting.facenormalsepsilon"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Light Position')
  }, _react.default.createElement(_components.NumericFraction, {
    label: _('X'),
    attr: "lightposition.x"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Y'),
    attr: "lightposition.y"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Z'),
    attr: "lightposition.z"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Scaling')
  }, _react.default.createElement(_components.GroupCreator, {
    label: _('Scale Group'),
    prefix: _('Group'),
    attr: "scalegroup"
  }), _react.default.createElement(_components.Radio, {
    label: _('Scale Mode'),
    attr: "scalemode",
    options: [{
      label: _('Width'),
      value: 'width'
    }, {
      label: _('Count'),
      value: 'count'
    }]
  }), _react.default.createElement(_components.Radio, {
    label: _('Span Mode'),
    attr: "spanmode",
    options: [{
      label: _('Soft'),
      value: 'soft'
    }, {
      label: _('Hard'),
      value: 'hard'
    }, {
      label: _('Manual'),
      value: 'manual'
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Bandwidth'),
    attr: "bandwidth"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Span'),
    attr: "span"
  }), _react.default.createElement(_components.Radio, {
    attr: "side",
    label: _('Visible Sides'),
    options: [{
      label: _('Both'),
      value: 'both'
    }, {
      label: _('Positive'),
      value: 'positive'
    }, {
      label: _('Negative'),
      value: 'negative'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Box Mean')
  }, _react.default.createElement(_components.Radio, {
    attr: "boxmean",
    options: [{
      label: _('Mean'),
      value: true
    }, {
      label: _('Mean & SD'),
      value: 'sd'
    }, {
      label: _('None'),
      value: false
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Box')
  }, _react.default.createElement(_components.Radio, {
    attr: "box.visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Box Width'),
    attr: "box.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Box Fill Color'),
    attr: "box.color"
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Box Line Width'),
    attr: "box.line.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Box Line Color'),
    attr: "box.line.color"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Meanline')
  }, _react.default.createElement(_components.Radio, {
    attr: "meanline.visible",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.NumericFraction, {
    label: _('Meanline Width'),
    attr: "meanline.width"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Meanline Color'),
    attr: "meanline.color"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Nodes')
  }, _react.default.createElement(_components.ColorArrayPicker, {
    label: _('Color'),
    attr: "node.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Padding'),
    attr: "node.pad",
    min: 0
  }), _react.default.createElement(_components.Numeric, {
    label: _('Thickness'),
    attr: "node.thickness",
    min: 0
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "node.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "node.line.width",
    min: 0
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Arrangement'),
    attr: "arrangement",
    options: [{
      label: _('Snap'),
      value: 'snap'
    }, {
      label: _('Perpendicular'),
      value: 'perpendicular'
    }, {
      label: _('Freeform'),
      value: 'freeform'
    }, {
      label: _('Fixed'),
      value: 'fixed'
    }],
    clearable: false
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Links')
  }, _react.default.createElement(_components.ColorArrayPicker, {
    label: _('Color'),
    attr: "link.color"
  }), _react.default.createElement(_components.MultiColorPicker, {
    label: _('Line Color'),
    attr: "link.line.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Line Width'),
    attr: "link.line.width",
    min: 0
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Hover/Tooltip')
  }, _react.default.createElement(_derived.HoveronDropdown, {
    attr: "hoveron",
    label: _('Hover on')
  }), _react.default.createElement(_components.Radio, {
    label: _('Hover on Gaps'),
    attr: "hoverongaps",
    options: [{
      label: _('Yes'),
      value: true
    }, {
      label: _('No'),
      value: false
    }]
  }), _react.default.createElement(_components.HoverTemplateSwitch, {
    attr: "hovertemplate",
    label: _('Mode')
  }), _react.default.createElement(_components.HoverInfo, {
    attr: "hoverinfo",
    label: _('Show')
  }), _react.default.createElement(_components.HoverTemplateText, {
    attr: "hovertemplate",
    label: _('Template')
  }), _react.default.createElement(_components.Radio, {
    label: _('Split labels'),
    attr: "hoverlabel.split",
    options: [{
      label: _('Yes'),
      value: true
    }, {
      label: _('No'),
      value: false
    }]
  }), _react.default.createElement(_components.HoverLabelNameLength, {
    label: _('Trace Name'),
    attr: "hoverlabel.namelength"
  }), _react.default.createElement(_components.VisibilitySelect, {
    attr: "contour.show",
    label: _('Show Contour'),
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }],
    showOn: true,
    defaultOpt: false
  }, _react.default.createElement(_components.MultiColorPicker, {
    label: _('Contour Color'),
    attr: "contour.color"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Contour Width'),
    attr: "contour.width"
  })), _react.default.createElement(_components.Dropdown, {
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
  }), _react.default.createElement(_components.Text, {
    label: _('Value Format'),
    attr: "valueformat"
  }), _react.default.createElement(_components.Text, {
    label: _('Value Suffix'),
    attr: "valuesuffix"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Error Bars X'),
    traceTypes: ['scatter', 'scattergl', 'scatter3d', 'bar'],
    mode: "trace"
  }, _react.default.createElement(_components.ErrorBars, {
    attr: "error_x"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Error Bars Y'),
    traceTypes: ['scatter', 'scattergl', 'scatter3d', 'bar'],
    mode: "trace"
  }, _react.default.createElement(_components.ErrorBars, {
    attr: "error_y"
  })), _react.default.createElement(_components.TraceTypeSection, {
    name: _('Error Bars Z'),
    traceTypes: ['scatter3d'],
    mode: "trace"
  }, _react.default.createElement(_components.ErrorBars, {
    attr: "error_z"
  })));
};

StyleTracesPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleTracesPanel;
exports.default = _default;
//# sourceMappingURL=StyleTracesPanel.js.map