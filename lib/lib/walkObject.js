"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;
exports.makeAttrSetterPath = makeAttrSetterPath;
exports.default = walkObject;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isPlainObject(input) {
  return input && !Array.isArray(input) && _typeof(input) === 'object';
}
/*
 * Helper function for _walkObject
 */


function doArrayWalk(key, value, walkArrays, walkArraysMatchingKeys) {
  if (!Array.isArray(value)) {
    return false;
  }

  if (walkArrays || walkArraysMatchingKeys && walkArraysMatchingKeys.includes(key)) {
    return true;
  }

  return false;
}
/*
 * Helper utility for path accumulation in _walkObject. Supports array
 * path accumulation and also Plotly.js nestedProperty style.
 */


function getPath() {
  var pathType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'array';

  var _path = arguments.length > 1 ? arguments[1] : undefined;

  return {
    _path: _path || (pathType === 'array' ? [] : ''),
    set: function set(parent, key) {
      var nextPath;

      switch (pathType) {
        case 'array':
          nextPath = this._path.concat([key]);
          break;

        case 'nestedProperty':
          if (this._path.length === 0) {
            nextPath = key;
          } else if (Array.isArray(parent)) {
            nextPath = this._path + "[".concat(key, "]");
          } else {
            nextPath = this._path + '.' + key;
          }

          break;

        default:
          throw new Error('unrecognized pathType ' + pathType);
      }

      return getPath(pathType, nextPath);
    },
    get: function get(parent, key) {
      // in array mode we do not return the leaf node key.
      if (pathType === 'array') {
        return this._path;
      } // in nestedProperty mode we return full path including final key


      return this.set(parent, key)._path;
    }
  };
}
/*
 * Helper function that transforms an array of path parts into a single path.
 * For example:
 *
 *  ['_fullData', 0, 'transforms', 3, 'type'] => 'transforms[3].type'
 *
 * Note that it strips out the _fullData part (and also _fullInput) since that's
 * usually present in the attribute path but isn't necessary in the attribute
 * string since it's usually implicitly applied through the userDataIndex.
 */


function makeAttrSetterPath(parts) {
  var path = ''; // Truncate the leading parts that aren't intersting when applying changes:

  var i0 = 0;

  if (parts[i0] === '_fullData') {
    i0 += 2;
  }

  if (parts[i0] === '_fullInput') {
    i0++;
  }

  if (parts[i0] === '_fullLayout') {
    i0++;
  }

  for (var i = i0; i < parts.length; i++) {
    if (typeof parts[i] === 'number' || Array.isArray(parts[i])) {
      path += '[' + (Array.isArray(parts[i]) ? parts[i][0] : parts[i]) + ']';
    } else {
      path += (i > i0 ? '.' : '') + parts[i];
    }
  }

  return path;
}
/**
 * The function that walkObject calls at each node.
 *
 * @callback walkObjectCallback
 * @param {string|number} key The current key, which may be nested.
 * @param {object} parent The object which owns the 'key' as a prop.
 * @param {Array} path The keys that lead to the 'parent' object.
 * @returns {boolean} True if the value at 'key' should *not* be traversed into
 *                    if it happens to be an object. I.e., you don't need to
 *                    return anything if you want the default traversal of the
 *                    whole object.
 */

/**
 * Walks through object and recurses if necessary.
 *
 * @param {object} object The top-level or nested object we're walking through.
 * @param {walkObjectCallback} callback Called at each object node.
 * @param {Array} path The keys that lead from to top-level object to this one.
 * @param {object} config configuration object
 * @param {string} config.walkArrays flag allowing array walking
 * @param {Array} config.walkArraysMatchingKeys An array of keys permitting
 *                                              array walking
 * @param {string} config.pathType Either 'array' or 'nestedProperty'. Array
 *                                 based paths return string keys in an array up
 *                                 until the current key position.
 *                                 NestedProperty style returns a single
 *                                 concatenated "nestedProperty" style string.
 * @returns {void}
 * @private
 */


function _walkObject(object, callback, path, config) {
  var walkArrays = config.walkArrays,
      walkArraysMatchingKeys = config.walkArraysMatchingKeys;
  Object.keys(object).forEach(function (key) {
    // Callback can force traversal to stop by returning `true`.
    if (callback(key, object, path.get(object, key))) {
      return;
    }

    var value = object[key];

    if (isPlainObject(value) || doArrayWalk(key, value, walkArrays, walkArraysMatchingKeys)) {
      _walkObject(value, callback, path.set(object, key), config);
    }
  });
}
/**
 * General function to walk object and call the given callback for each node.
 *
 * @param {Object|Array} input The object or array we want to walk.
 * @param {walkObjectCallback} callback Called at each object node.
 * @param {Object} [config] configuration object
 * @param {Boolean} [config.walkArrays] flag allowing array walking
 * @param {Array} [config.walkArraysMatchingKeys] An array of keys permitting
 *                                              array walking
 * @param {String} [config.pathType] Either 'array' or 'nestedProperty'. Array
 *                                   based paths return string keys in an array
 *                                   up until the current key position.
 *                                   NestedProperty style returns a single
 *                                   concatenated "nestedProperty" style string
 *                                   with the current key included in the path.
 *                                   Defaults to "array"
 * @returns {void}
 */


function walkObject(input, callback) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!isPlainObject(input) && !Array.isArray(input)) {
    throw new Error('The input must be an object.');
  }

  var path = getPath(config.pathType);

  _walkObject(input, callback, path, config);
}
//# sourceMappingURL=walkObject.js.map