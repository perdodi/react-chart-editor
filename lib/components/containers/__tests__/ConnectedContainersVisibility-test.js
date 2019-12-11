"use strict";

var _fields = require("../../fields");

var _ = require("..");

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../../lib/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Visibility rules are computed Top -> Down,
// I.E. PlotlyPanel > PlotlyFold > PlotlySection > Field (Numeric)
// PlotlyFold decides if it's going to render itself and it's children depending
// on child type vs PlotlySection communicating visibility decisions up to PlotlyFold
describe('Basic PlotlyPanel rules', function () {
  describe('no PlotlyPanel, no context for Fields', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement("div", null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "), _react.default.createElement(_fields.Numeric, {
      attr: "title"
    }))));
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
    it('SHOWS div which does not need context', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
  describe('PlotlyPanel gives context to Field', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_fields.Numeric, {
      attr: "title"
    }))));
    it('SHOWS Field', function () {
      return expect(wrapper.find('input').length).toEqual(1);
    });
  });
  describe('no PlotlyPanel, does not affect PlotlySection', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement("div", null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "), _react.default.createElement(_fields.Numeric, {
      attr: "title"
    })))));
    it('SHOWS PlotlySection and #thediv', function () {
      expect(wrapper.find('div.section').length).toEqual(1);
      expect(wrapper.find('#thediv').length).toEqual(1);
    });
    it('HIDES Field because it needs context from PlotlyPanel', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
});
describe('Basic PlotlySection rules', function () {
  describe('hides itself when it has no visible children', function () {
    describe('PlotlyPanel > PlotlySection > Field-with-no-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
        attr: "not_an_attr"
      })))));
      it('HIDES PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(0);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('PlotlyPanel > PlotlySection > Field-with-no-visible-attr-based-on-customConfig', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter({
        customConfig: {
          visibility_rules: {
            blacklist: [{
              type: 'attrName',
              regex_match: 'color'
            }]
          }
        }
      }), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
        attr: "title.font.color"
      })))));
      it('HIDES Field based on customConfig', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
      it('HIDES PlotlySection because no visible children according to custom config', function () {
        return expect(wrapper.find('div.section').length).toEqual(0);
      });
    });
    describe('PlotlyPanel > PlotlySection > Field-with-no-visible-attr-based-on-customConfig', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter({
        customConfig: {
          visibility_rules: {
            blacklist: [{
              type: 'attrName',
              regex_match: 'color'
            }]
          }
        }
      }), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlySection, {
        attr: "title"
      }, _react.default.createElement(_fields.Numeric, {
        attr: "title.font.color"
      }), _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('HIDES the title.font.color Field based on customConfig', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
      it('SHOWS PlotlySection if it has an attr that is accepted by customConfig', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
    });
    describe('div > PlotlySection > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement("div", null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('HIDES PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(0);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
  });
  describe('shows itself when it has visible children', function () {
    describe('PlotlyPanel > PlotlySection > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('PlotlyPanel > PlotlySection > div', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
        id: "thediv"
      }), _react.default.createElement(_fields.Numeric, {
        attr: "not_an_attr"
      })))));
      it('SHOWS PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
  });
});
describe('Basic PlotlyFold rules', function () {
  describe('when children have an attr prop', function () {
    describe('Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS PlotlyFold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('Field-with-invisible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
        attr: "not_an_attr"
      })))));
      it('HIDES PlotlyFold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(0);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
  });
  describe('when childen do not have an attr prop', function () {
    describe('div', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement("div", {
        id: "thediv"
      }, " ok ")))));
      it('SHOWS PlotlyFold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
    describe('when children have a no_visibility_forcing, plotly_editor_trait', function () {
      describe('PlotlySection', function () {
        describe('div', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
            id: "thediv"
          }, " ok "))))));
          it('HIDES PlotlyFold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(0);
          });
          it('HIDES PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(0);
          });
          it('HIDES div', function () {
            return expect(wrapper.find('#thediv').length).toEqual(0);
          });
        });
        describe('Field-with-visible-attr', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
            attr: "title"
          }))))));
          it('HIDES PlotlyFold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(0);
          });
          it('HIDES PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(0);
          });
          it('HIDES Field', function () {
            return expect(wrapper.find('input').length).toEqual(0);
          });
        });
        describe('Field-with-invisible-attr', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
            attr: "not_an_attr"
          }))))));
          it('HIDES PlotlyFold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(0);
          });
          it('HIDES PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(0);
          });
          it('HIDES Field', function () {
            return expect(wrapper.find('input').length).toEqual(0);
          });
        });
      });
    });
    describe('PlotlyPanel', function () {
      describe('Field-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_fields.Numeric, {
          attr: "title"
        }))))));
        it('HIDES PlotlyFold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(0);
        });
        it('HIDES inner PlotlyPanel', function () {
          return expect(wrapper.find('div.panel').length).toEqual(1);
        });
        it('HIDES Field', function () {
          return expect(wrapper.find('input').length).toEqual(0);
        });
      });
    });
    describe('Info', function () {
      describe('Field-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Info, null, _react.default.createElement(_fields.Numeric, {
          attr: "title"
        }))))));
        it('HIDES PlotlyFold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(0);
        });
        it('HIDES Info', function () {
          return expect(wrapper.find('.js-test-info').length).toEqual(0);
        });
        it('HIDES Field', function () {
          return expect(wrapper.find('input').length).toEqual(0);
        });
      });
    });
    describe('no_visibility_forcing containers can be visibility forcing with a visible attr', function () {
      describe('PlotlySection-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, {
          attr: "title"
        }, _react.default.createElement(_fields.Numeric, {
          attr: "not_an_attr"
        }))))));
        it('SHOWS PlotlyFold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(1);
        });
        it('SHOWS PlotlySection', function () {
          return expect(wrapper.find('div.section').length).toEqual(1);
        });
        it('HIDES Field', function () {
          return expect(wrapper.find('input').length).toEqual(0);
        });
      });
      describe('PlotlySection-with-invisible-attr', function () {
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, {
          attr: "not_an_attr"
        }, _react.default.createElement(_fields.Numeric, {
          attr: "title"
        }))))));
        it('HIDES PlotlyFold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(0);
        });
        it('HIDES PlotlySection', function () {
          return expect(wrapper.find('div.section').length).toEqual(0);
        });
        it('HIDES Field', function () {
          return expect(wrapper.find('input').length).toEqual(0);
        });
      });
    });
  });
});
describe('Other ways to force PlotlyFold visibility', function () {
  describe('Adding a custom component as child of PlotlyFold', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement("p", null, "I force visibility of the fold"), _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "))))));
    it('shows PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(1);
    });
    it('shows PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(1);
    });
    it('shows div', function () {
      return expect(wrapper.find('#thediv').length).toEqual(1);
    });
  }); // What most of DefaultPanels do

  describe('adding a Field with visible attr as child of PlotlyFold', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
      attr: "width"
    }), _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "), _react.default.createElement(_fields.Numeric, {
      attr: "title"
    }))))));
    it('shows PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(1);
    });
    it('shows PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(1);
    });
    it('shows div', function () {
      return expect(wrapper.find('#thediv').length).toEqual(1);
    });
    it('shows Field in PlotlySection', function () {
      return expect(wrapper.find('input').length).toEqual(2);
    });
  });
  describe('adding a Field with invisible attr will hide PlotlyFold', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
      attr: "not_an_attr"
    }), _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
      attr: "not_an_attr"
    }))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(0);
    });
    it('HIDES Field in PlotlySection', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
}); // nothing in the lower level PlotlyFold can force the upper one open

describe('PlotlyPanel > PlotlyFold > PlotlyPanel > PlotlyFold', function () {
  describe('div', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok ")))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES div', function () {
      return expect(wrapper.find('#thediv').length).toEqual(0);
    });
  });
  describe('Field-with-visible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
      attr: "title"
    })))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
  describe('Field-with-invisible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_fields.Numeric, {
      attr: "not_an_attr"
    })))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
});
describe('PlotlyPanel > PlotlyFold > PlotlyPanel > PlotlyFold > PlotlySection', function () {
  describe('div', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "))))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(0);
    });
    it('HIDES div', function () {
      return expect(wrapper.find('#thediv').length).toEqual(0);
    });
  });
  describe('Field-with-visible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
      attr: "title"
    }))))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(0);
    });
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
  describe('Field-with-invisible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
      attr: "not_an_attr"
    }))))))));
    it('HIDES PlotlyFold', function () {
      return expect(wrapper.find('div.fold').length).toEqual(0);
    });
    it('HIDES PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(0);
    });
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
}); // Lower level PlotlyPanel with visible attr forces the upper PlotlyFold open, and visible
// attr on PlotlySection forces the lower PlotlyFold open

describe('PlotlyPanel > PlotlyFold > PlotlyPanel-with-visible-attr > PlotlyFold > PlotlySection-with-visible-attr', function () {
  describe('div', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, {
      attr: "title"
    }, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, {
      attr: "title"
    }, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "))))))));
    it('shows 2 PlotlyFolds', function () {
      return expect(wrapper.find('div.fold').length).toEqual(2);
    });
    it('shows PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(1);
    });
    it('shows div', function () {
      return expect(wrapper.find('#thediv').length).toEqual(1);
    });
  });
  describe('Field-with-visible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, {
      attr: "title"
    }, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, {
      attr: "title"
    }, _react.default.createElement(_fields.Numeric, {
      attr: "title"
    }))))))));
    it('shows 2 PlotlyFolds', function () {
      return expect(wrapper.find('div.fold').length).toEqual(2);
    });
    it('shows PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(1);
    });
    it('shows Field', function () {
      return expect(wrapper.find('input').length).toEqual(1);
    });
  });
  describe('Field-with-invisible-attr', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.LayoutPanel, {
      attr: "title"
    }, _react.default.createElement(_.PlotlyFold, null, _react.default.createElement(_.PlotlySection, {
      attr: "title"
    }, _react.default.createElement(_fields.Numeric, {
      attr: "not_an_attr"
    }))))))));
    it('shows 2 PlotlyFolds', function () {
      return expect(wrapper.find('div.fold').length).toEqual(2);
    });
    it('shows PlotlySection', function () {
      return expect(wrapper.find('div.section').length).toEqual(1);
    });
    it('HIDES Field', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
  });
});
//# sourceMappingURL=ConnectedContainersVisibility-test.js.map