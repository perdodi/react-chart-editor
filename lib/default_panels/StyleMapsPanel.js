"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _components = require("../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleMapsPanel = function StyleMapsPanel(props, _ref) {
  var _ = _ref.localize;
  return _react.default.createElement(_components.SubplotAccordion, null, _react.default.createElement(_components.PlotlySection, {
    name: _('Base Map'),
    attr: "style"
  }, _react.default.createElement(_components.MapboxStyleDropdown, {
    label: _('Tile Source'),
    attr: "style"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Layers'),
    attr: "style"
  }, _react.default.createElement(_components.MapboxLayersAccordion, null, _react.default.createElement(_components.Radio, {
    attr: "below",
    options: [{
      label: _('Below Data'),
      value: 'traces'
    }, {
      label: _('Above Data'),
      value: ''
    }]
  }), _react.default.createElement(_components.MapboxSourceArray, {
    label: _('Tile Source URL'),
    attr: "source",
    show: true
  }))), _react.default.createElement(_components.PlotlySection, {
    name: _('Map Positioning')
  }, _react.default.createElement(_components.Numeric, {
    label: _('Center Latitude'),
    attr: "center.lat"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Center Longitude'),
    attr: "center.lon"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Zoom Level'),
    attr: "zoom",
    min: 0
  }), _react.default.createElement(_components.Numeric, {
    label: _('Bearing'),
    attr: "bearing"
  }), _react.default.createElement(_components.Numeric, {
    label: _('Pitch'),
    attr: "pitch",
    min: 0
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Map Projection')
  }, _react.default.createElement(_components.Dropdown, {
    label: _('Region'),
    attr: "scope",
    options: [{
      label: _('World'),
      value: 'world'
    }, {
      label: _('USA'),
      value: 'usa'
    }, {
      label: _('Europe'),
      value: 'europe'
    }, {
      label: _('Asia'),
      value: 'asia'
    }, {
      label: _('Africa'),
      value: 'africa'
    }, {
      label: _('North America'),
      value: 'north america'
    }, {
      label: _('South America'),
      value: 'south america'
    }],
    clearable: false
  }), _react.default.createElement(_components.Dropdown, {
    label: _('Projection'),
    attr: "projection.type",
    clearable: false,
    options: [{
      label: _('Equirectangular'),
      value: 'equirectangular'
    }, {
      label: _('Mercator'),
      value: 'mercator'
    }, {
      label: _('Orthographic'),
      value: 'orthographic'
    }, {
      label: _('Natural Earth'),
      value: 'natural earth'
    }, {
      label: _('Albers USA'),
      value: 'albers usa'
    }, {
      label: _('Winkel Tripel'),
      value: 'winkel tripel'
    }, {
      label: _('Robinson'),
      value: 'robinson'
    }, {
      label: _('Miller'),
      value: 'miller'
    }, {
      label: _('Kavrayskiy 7'),
      value: 'kavrayskiy7'
    }, {
      label: _('Eckert 4'),
      value: 'eckert4'
    }, {
      label: _('Azimuthal Equal Area'),
      value: 'azimuthal equal area'
    }, {
      label: _('Azimuthal Equidistant'),
      value: 'azimuthal equidistant'
    }, {
      label: _('Conic Equal Area'),
      value: 'conic equal area'
    }, {
      label: _('Conic Conformal'),
      value: 'conic conformal'
    }, {
      label: _('Conic Equidistant'),
      value: 'conic equidistant'
    }, {
      label: _('Gnomonic'),
      value: 'gnomonic'
    }, {
      label: _('Stereographic'),
      value: 'stereographic'
    }, {
      label: _('Mollweide'),
      value: 'mollweide'
    }, {
      label: _('Hammer'),
      value: 'hammer'
    }, {
      label: _('Transverse Mercator'),
      value: 'transverse mercator'
    }, {
      label: _('Aitoff'),
      value: 'aitoff'
    }, {
      label: _('Sinusoidal'),
      value: 'sinusoidal'
    }]
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Country Borders'),
    attr: "showcountries"
  }, _react.default.createElement(_components.Radio, {
    attr: "showcountries",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Border Width'),
    attr: "countrywidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Border Color'),
    attr: "countrycolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Sub-Country Unit Borders'),
    attr: "showsubunits"
  }, _react.default.createElement(_components.Radio, {
    attr: "showsubunits",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Border Width'),
    attr: "subunitwidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Border Color'),
    attr: "subunitcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Coastlines'),
    attr: "showcoastlines"
  }, _react.default.createElement(_components.Radio, {
    attr: "showcoastlines",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "coastlinewidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "coastlinecolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Oceans'),
    attr: "showocean"
  }, _react.default.createElement(_components.Radio, {
    attr: "showocean",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "oceancolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Land'),
    attr: "showland"
  }, _react.default.createElement(_components.Radio, {
    attr: "showland",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "landcolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Lakes'),
    attr: "showlakes"
  }, _react.default.createElement(_components.Radio, {
    attr: "showlakes",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "lakecolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Rivers'),
    attr: "showrivers"
  }, _react.default.createElement(_components.Radio, {
    attr: "showrivers",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "riverwidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "rivercolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Map Frame'),
    attr: "showframe"
  }, _react.default.createElement(_components.Radio, {
    attr: "showframe",
    options: [{
      label: _('Show'),
      value: true
    }, {
      label: _('Hide'),
      value: false
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Width'),
    attr: "framewidth",
    units: "px"
  }), _react.default.createElement(_components.ColorPicker, {
    label: _('Color'),
    attr: "framecolor"
  })), _react.default.createElement(_components.PlotlySection, {
    name: _('Map Options')
  }, _react.default.createElement(_components.Radio, {
    label: _('Resolution'),
    attr: "resolution",
    options: [{
      label: _('1:110,000,000'),
      value: 110
    }, {
      label: _('1:50,000,000'),
      value: 50
    }]
  }), _react.default.createElement(_components.Numeric, {
    label: _('Scale'),
    attr: "projection.scale",
    min: 0
  }), _react.default.createElement(_components.Numeric, {
    label: _('Latitude'),
    attr: "projection.rotation.lon",
    min: 0
  }), _react.default.createElement(_components.Numeric, {
    label: _('Longitude'),
    attr: "projection.rotation.lat",
    min: 0
  }), _react.default.createElement(_components.Numeric, {
    label: _('Roll'),
    attr: "projection.rotation.roll",
    min: 0
  })));
};

StyleMapsPanel.contextTypes = {
  localize: _propTypes.default.func
};
var _default = StyleMapsPanel;
exports.default = _default;
//# sourceMappingURL=StyleMapsPanel.js.map