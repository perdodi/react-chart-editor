"use strict";

var _fields = require("../../fields");

var _ = require("..");

var _react = _interopRequireDefault(require("react"));

var _testUtils = require("../../../lib/test-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Stylistically Panel, Fold, Section are the same as PlotlyPanel, PlotlyFold, PlotlySection
// but unlike them, they have no special visibility rules, they always display themselves
// and their children.
describe('Basic Panel rules', function () {
  describe('not connected, provides no context, cannot use with Fields', function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement("div", {
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
  describe("displays all it's children", function () {
    var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Section, null, _react.default.createElement("div", {
      id: "thediv"
    }, " ok "), _react.default.createElement(_fields.Numeric, {
      attr: "title"
    })), _react.default.createElement(_.Fold, null, _react.default.createElement("div", {
      id: "theseconddiv"
    })), _react.default.createElement(_.Fold, null, _react.default.createElement(_fields.Info, null)))));
    it('SHOWS Section, Fold, #thediv, #theseconddiv, Info', function () {
      expect(wrapper.find('div.section').length).toEqual(1);
      expect(wrapper.find('div.fold').length).toEqual(2);
      expect(wrapper.find('#thediv').length).toEqual(1);
      expect(wrapper.find('#theseconddiv').length).toEqual(1);
      expect(wrapper.find('.js-test-info').length).toEqual(1);
    });
    it('HIDES Field because it needs context', function () {
      return expect(wrapper.find('input').length).toEqual(0);
    });
    it('PANEL shows collapse functionality, FOLD is foldable', function () {
      expect(wrapper.find('.panel__header__collapse').length).toEqual(1);
      expect(wrapper.find(_.Fold).first().props().folded).toBe(false);
      expect(_typeof(wrapper.find(_.Fold).first().props().toggleFold)).toBe('function');
    });
  });
});
describe('Basic Section rules', function () {
  describe('always shows itself and its children', function () {
    describe('Panel > Section > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Section, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it("HIDES Field because there's no context for it", function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('PlotlyPanel > Section > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Section, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('PlotlyPanel > Section > Field-with-invisible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Section, null, _react.default.createElement(_fields.Numeric, {
        attr: "not_an_attr"
      })))));
      it('SHOWS Section because it always shows itself', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('Panel > Section > div', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Section, null, _react.default.createElement("div", {
        id: "thediv"
      })))));
      it('SHOWS PlotlySection', function () {
        return expect(wrapper.find('div.section').length).toEqual(1);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
  });
});
describe('Basic Fold rules', function () {
  describe('always shows itself and its children', function () {
    describe('Panel > Fold > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('HIDES Field because it has no context', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('LayoutPanel > Fold > Field-with-visible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_fields.Numeric, {
        attr: "title"
      })))));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS Field', function () {
        return expect(wrapper.find('input').length).toEqual(1);
      });
    });
    describe('LayoutPanel > Fold > Field-with-invisible-attr', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_fields.Numeric, {
        attr: "not_an_attr"
      })))));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('HIDES Field', function () {
        return expect(wrapper.find('input').length).toEqual(0);
      });
    });
    describe('Panel > Fold > div', function () {
      var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Fold, null, _react.default.createElement("div", {
        id: "thediv"
      }, " ok ")))));
      it('SHOWS Fold', function () {
        return expect(wrapper.find('div.fold').length).toEqual(1);
      });
      it('SHOWS div', function () {
        return expect(wrapper.find('#thediv').length).toEqual(1);
      });
    });
    describe('no_visibility_forcing, plotly_editor_trait have no effect', function () {
      describe('PlotlySection', function () {
        describe('div', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.Panel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement("div", {
            id: "thediv"
          }, " ok "))))));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('SHOWS PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(1);
          });
          it('SHOWS div', function () {
            return expect(wrapper.find('#thediv').length).toEqual(1);
          });
        });
        describe('Field-with-visible-attr', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
            attr: "title"
          }))))));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('SHOWS PlotlySection', function () {
            return expect(wrapper.find('div.section').length).toEqual(1);
          });
          it('SHOWS Field', function () {
            return expect(wrapper.find('input').length).toEqual(1);
          });
        });
        describe('Field-with-invisible-attr', function () {
          var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_.PlotlySection, null, _react.default.createElement(_fields.Numeric, {
            attr: "not_an_attr"
          }))))));
          it('SHOWS Fold', function () {
            return expect(wrapper.find('div.fold').length).toEqual(1);
          });
          it('HIDES PlotlySection because Plotly Section visibility rules apply', function () {
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
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_fields.Numeric, {
          attr: "title"
        }))))));
        it('SHOWS Fold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(1);
        });
        it('SHOWS PlotlyPanel', function () {
          return expect(wrapper.find('div.panel').length).toEqual(2);
        });
        it('SHOWS Field', function () {
          return expect(wrapper.find('input').length).toEqual(1);
        });
      });
    });
    describe('Info', function () {
      describe('Field-with-visible-attr', function () {
        var wrapper = (0, _testUtils.mount)(_react.default.createElement(_testUtils.TestEditor, _testUtils.fixtures.scatter(), _react.default.createElement(_.LayoutPanel, null, _react.default.createElement(_.Fold, null, _react.default.createElement(_fields.Info, null, "ok")))));
        it('SHOWS Fold', function () {
          return expect(wrapper.find('div.fold').length).toEqual(1);
        });
        it('SHOWS Info', function () {
          return expect(wrapper.find('.js-test-info').length).toEqual(1);
        });
      });
    });
  });
});
//# sourceMappingURL=UnconnectedContainersVisibility-test.js.map