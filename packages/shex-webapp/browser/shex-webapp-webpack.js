/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var RDF  = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    XSD  = 'http://www.w3.org/2001/XMLSchema#',
    SWAP = 'http://www.w3.org/2000/10/swap/';

/* harmony default export */ __webpack_exports__["a"] = ({
  xsd: {
    decimal: XSD + 'decimal',
    boolean: XSD + 'boolean',
    double:  XSD + 'double',
    integer: XSD + 'integer',
    string:  XSD + 'string',
  },
  rdf: {
    type:       RDF + 'type',
    nil:        RDF + 'nil',
    first:      RDF + 'first',
    rest:       RDF + 'rest',
    langString: RDF + 'langString',
  },
  owl: {
    sameAs: 'http://www.w3.org/2002/07/owl#sameAs',
  },
  r: {
    forSome: SWAP + 'reify#forSome',
    forAll:  SWAP + 'reify#forAll',
  },
  log: {
    implies: SWAP + 'log#implies',
  },
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var codes = {};

function createErrorType(code, message, Base) {
  if (!Base) {
    Base = Error;
  }

  function getMessage(arg1, arg2, arg3) {
    if (typeof message === 'string') {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }

  var NodeError =
  /*#__PURE__*/
  function (_Base) {
    _inheritsLoose(NodeError, _Base);

    function NodeError(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }

    return NodeError;
  }(Base);

  NodeError.prototype.name = Base.name;
  NodeError.prototype.code = code;
  codes[code] = NodeError;
} // https://github.com/nodejs/node/blob/v10.8.0/lib/internal/errors.js


function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function (i) {
      return String(i);
    });

    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(', '), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith


function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith


function endsWith(str, search, this_len) {
  if (this_len === undefined || this_len > str.length) {
    this_len = str.length;
  }

  return str.substring(this_len - search.length, this_len) === search;
} // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


function includes(str, search, start) {
  if (typeof start !== 'number') {
    start = 0;
  }

  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}

createErrorType('ERR_INVALID_OPT_VALUE', function (name, value) {
  return 'The value "' + value + '" is invalid for option "' + name + '"';
}, TypeError);
createErrorType('ERR_INVALID_ARG_TYPE', function (name, expected, actual) {
  // determiner: 'must be' or 'must not be'
  var determiner;

  if (typeof expected === 'string' && startsWith(expected, 'not ')) {
    determiner = 'must not be';
    expected = expected.replace(/^not /, '');
  } else {
    determiner = 'must be';
  }

  var msg;

  if (endsWith(name, ' argument')) {
    // For cases like 'first argument'
    msg = "The ".concat(name, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  } else {
    var type = includes(name, '.') ? 'property' : 'argument';
    msg = "The \"".concat(name, "\" ").concat(type, " ").concat(determiner, " ").concat(oneOf(expected, 'type'));
  }

  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType('ERR_STREAM_PUSH_AFTER_EOF', 'stream.push() after EOF');
createErrorType('ERR_METHOD_NOT_IMPLEMENTED', function (name) {
  return 'The ' + name + ' method is not implemented';
});
createErrorType('ERR_STREAM_PREMATURE_CLOSE', 'Premature close');
createErrorType('ERR_STREAM_DESTROYED', function (name) {
  return 'Cannot call ' + name + ' after a stream was destroyed';
});
createErrorType('ERR_MULTIPLE_CALLBACK', 'Callback called multiple times');
createErrorType('ERR_STREAM_CANNOT_PIPE', 'Cannot pipe, not readable');
createErrorType('ERR_STREAM_WRITE_AFTER_END', 'write after end');
createErrorType('ERR_STREAM_NULL_VALUES', 'May not write null values to stream', TypeError);
createErrorType('ERR_UNKNOWN_ENCODING', function (arg) {
  return 'Unknown encoding: ' + arg;
}, TypeError);
createErrorType('ERR_STREAM_UNSHIFT_AFTER_END_EVENT', 'stream.unshift() after end event');
module.exports.codes = codes;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

/*<replacement>*/

var objectKeys = Object.keys || function (obj) {
  var keys = [];

  for (var key in obj) {
    keys.push(key);
  }

  return keys;
};
/*</replacement>*/


module.exports = Duplex;

var Readable = __webpack_require__(29);

var Writable = __webpack_require__(33);

__webpack_require__(9)(Duplex, Readable);

{
  // Allow the keys array to be GC'ed.
  var keys = objectKeys(Writable.prototype);

  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);
  Readable.call(this, options);
  Writable.call(this, options);
  this.allowHalfOpen = true;

  if (options) {
    if (options.readable === false) this.readable = false;
    if (options.writable === false) this.writable = false;

    if (options.allowHalfOpen === false) {
      this.allowHalfOpen = false;
      this.once('end', onend);
    }
  }
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
});
Object.defineProperty(Duplex.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});
Object.defineProperty(Duplex.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
}); // the no-half-open enforcer

function onend() {
  // If the writable side ended, then we're ok.
  if (this._writableState.ended) return; // no more data can be written.
  // But allow more writes to happen in this tick.

  process.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }

    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(29);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(33);
exports.Duplex = __webpack_require__(5);
exports.Transform = __webpack_require__(35);
exports.PassThrough = __webpack_require__(68);
exports.finished = __webpack_require__(17);
exports.pipeline = __webpack_require__(69);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(58)
var ieee754 = __webpack_require__(59)
var isArray = __webpack_require__(60)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * isIRI, isBlank, getLiteralType, getLiteralValue
 */

var ShExTerm = (function () {

  var absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const RdfLangString = "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString";
  const XsdString = "http://www.w3.org/2001/XMLSchema#string";

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function resolveRelativeIRI (base, iri) {

    if (absoluteIRI.test(iri))
      return iri

    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return base;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      let m = base.match(schemeAuthority);
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? m[1] : m[0]) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(base.replace(/[^\/?]*(?:\?.*)?$/, '') + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    var result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  function internalTerm (node) { // !!rdfjsTermToInternal
    switch (node.termType) {
    case ("NamedNode"):
      return node.value;
    case ("BlankNode"):
      return "_:" + node.value;
    case ("Literal"):
      return "\"" + node.value + "\"" + (
        node.datatypeString === RdfLangString
          ? "@" + node.language
          : node.datatypeString === XsdString
          ? ""
          : "^^" + node.datatypeString
      );
    default: throw Error("unknown RDFJS node type: " + JSON.stringify(node))
    }
  }

  function internalTriple (triple) { // !!rdfjsTripleToInternal
    return {
      subject: internalTerm(triple.subject),
      predicate: internalTerm(triple.predicate),
      object: internalTerm(triple.object)
    };
  }

  function externalTerm (node, factory) { // !!intermalTermToRdfjs
    if (isIRI(node)) {
      return factory.namedNode(node);
    } else if (isBlank(node)) {
      return factory.blankNode(node.substr(2));
    } else if (isLiteral(node)) {
      let dtOrLang = getLiteralLanguage(node) ||
          (getLiteralType(node) === XsdString
           ? null // seems to screw up N3.js
           : factory.namedNode(getLiteralType(node)))
      return factory.literal(getLiteralValue(node), dtOrLang)
    } else {
      throw Error("Unknown internal term type: " + JSON.stringify(node));
    }
  }

  function externalTriple (triple, factory) { // !!rename internalTripleToRdjs
    return factory.quad(
      externalTerm(triple.subject, factory),
      externalTerm(triple.predicate, factory),
      externalTerm(triple.object, factory)
    );
  }

  function intermalTermToTurtle (node, base, prefixes) {
    if (isIRI(node)) {
      // if (node === RDF_TYPE) // only valid in Turtle predicates
      //   return "a";

      // Escape special characters
      if (escape.test(node))
        node = node.replace(escapeAll, characterReplacer);
      var pref = Object.keys(prefixes).find(pref => node.startsWith(prefixes[pref]));
      if (pref) {
        var rest = node.substr(prefixes[pref].length);
        if (rest.indexOf("\\") === -1) // could also say no more than n of these: [...]
          return pref + ":" + rest.replace(/([~!$&'()*+,;=/?#@%])/g, '\\' + "$1");
      }
      if (node.startsWith(base)) {
        return "<" + node.substr(base.length) + ">";
      } else {
        return "<" + node + ">";
      }
    } else if (isBlank(node)) {
      return node;
    } else if (isLiteral(node)) {
      var value = getLiteralValue(node);
      var type = getLiteralType(node);
      var language = getLiteralLanguage(node);
      // Escape special characters
      if (escape.test(value))
        value = value.replace(escapeAll, characterReplacer);
      // Write the literal, possibly with type or language
      if (language)
        return '"' + value + '"@' + language;
      else if (type && type !== "http://www.w3.org/2001/XMLSchema#string")
        return '"' + value + '"^^' + this.intermalTermToTurtle(type, base, prefixes);
      else
        return '"' + value + '"';
    } else {
      throw Error("Unknown internal term type: " + JSON.stringify(node));
    }
  }

  // Tests whether the given entity (triple object) represents an IRI in the N3 library
  function isIRI (entity) {
    if (typeof entity !== 'string')
      return false;
    else if (entity.length === 0)
      return true;
    else {
      var firstChar = entity[0];
      return firstChar !== '"' && firstChar !== '_';
    }
  }

  // Tests whether the given entity (triple object) represents a literal in the N3 library
  function isLiteral (entity) {
    return typeof entity === 'string' && entity[0] === '"';
  }

  // Tests whether the given entity (triple object) represents a blank node in the N3 library
  function isBlank (entity) {
    return typeof entity === 'string' && entity.substr(0, 2) === '_:';
  }

  // Tests whether the given entity represents the default graph
  function isDefaultGraph (entity) {
    return !entity;
  }

  // Tests whether the given triple is in the default graph
  function inDefaultGraph (triple) {
    return !triple.graph;
  }

  // Gets the string value of a literal in the N3 library
  function getLiteralValue (literal) {
    var match = /^"([^]*)"/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1];
  }

  // Gets the type of a literal in the N3 library
  function getLiteralType (literal) {
    var match = /^"[^]*"(?:\^\^([^"]+)|(@)[^@"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] || (match[2] ? RdfLangString : XsdString);
  }

  // Gets the language of a literal in the N3 library
  function getLiteralLanguage (literal) {
    var match = /^"[^]*"(?:@([^@"]+)|\^\^[^"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] ? match[1].toLowerCase() : '';
  }


// rdf:type predicate (for 'a' abbreviation)
var RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
var escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    escapeReplacements = {
      '\\': '\\\\', '"': '\\"', '\t': '\\t',
      '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
    };

  // Replaces a character by its escaped version
  function characterReplacer (character) {
    // Replace a single character by its escaped version
    var result = escapeReplacements[character];
    if (result === undefined) {
      // Replace a single character with its 4-bit unicode escape sequence
      if (character.length === 1) {
        result = character.charCodeAt(0).toString(16);
        result = '\\u0000'.substr(0, 6 - result.length) + result;
      }
      // Replace a surrogate pair with its 8-bit unicode escape sequence
      else {
        result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                  character.charCodeAt(1) + 0x2400).toString(16);
        result = '\\U00000000'.substr(0, 10 - result.length) + result;
      }
    }
    return result;
  }

  return {
    RdfLangString: RdfLangString,
    XsdString: XsdString,
    resolveRelativeIRI: resolveRelativeIRI,
    isIRI: isIRI,
    isLiteral: isLiteral,
    isBlank: isBlank,
    isDefaultGraph: isDefaultGraph,
    inDefaultGraph: inDefaultGraph,
    getLiteralValue: getLiteralValue,
    getLiteralType: getLiteralType,
    getLiteralLanguage: getLiteralLanguage,
    internalTerm: internalTerm,
    internalTriple: internalTriple,
    externalTerm: externalTerm,
    externalTriple: externalTriple,
    intermalTermToTurtle: intermalTermToTurtle,
  }
})();

if (true)
  module.exports = ShExTerm; // node environment


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExUtil** provides ShEx utility functions

var ShExUtil = (function () {
var ShExTerm = __webpack_require__(10);
const Visitor = __webpack_require__(20)
const Hierarchy = __webpack_require__(41)

const SX = {};
SX._namespace = "http://www.w3.org/ns/shex#";
["Schema", "@context", "imports", "startActs", "start", "shapes",
 "ShapeDecl", "ShapeOr", "ShapeAnd", "shapeExprs", "nodeKind",
 "NodeConstraint", "iri", "bnode", "nonliteral", "literal", "datatype", "length", "minlength", "maxlength", "pattern", "flags", "mininclusive", "minexclusive", "maxinclusive", "maxexclusive", "totaldigits", "fractiondigits", "values",
 "ShapeNot", "shapeExpr",
 "Shape", "abstract", "closed", "extra", "expression", "extends", "restricts", "semActs",
 "ShapeRef", "reference", "ShapeExternal",
 "EachOf", "OneOf", "expressions", "min", "max", "annotation",
 "TripleConstraint", "inverse", "negated", "predicate", "valueExpr",
 "Inclusion", "include", "Language", "languageTag",
 "IriStem", "LiteralStem", "LanguageStem", "stem",
 "IriStemRange", "LiteralStemRange", "LanguageStemRange", "exclusion",
 "Wildcard", "SemAct", "name", "code",
 "Annotation", "object"].forEach(p => {
  SX[p] = SX._namespace+p;
});
const RDF = {};
RDF._namespace = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
["type", "first", "rest", "nil"].forEach(p => {
  RDF[p] = RDF._namespace+p;
});
const XSD = {}
XSD._namespace = "http://www.w3.org/2001/XMLSchema#";
["anyURI"].forEach(p => {
  XSD[p] = XSD._namespace+p;
});
const OWL = {}
OWL._namespace = "http://www.w3.org/2002/07/owl#";
["Thing"].forEach(p => {
  OWL[p] = OWL._namespace+p;
});

const Missed = {}; // singleton
var UNBOUNDED = -1;

function extend (base) {
  if (!base) base = {};
  for (var i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
    for (var name in arg)
      base[name] = arg[name];
  return base;
}

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

  function isShapeRef (expr) {
    return typeof expr === "string" // test for JSON-LD @ID
  }
  let isInclusion = isShapeRef;

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          var ret = { value: ShExTerm.getLiteralValue(term) };
          var dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          var lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }
var ShExUtil = {

  SX: SX,
  RDF: RDF,
  version: function () {
    return "0.5.0";
  },

  Visitor: Visitor,
  index: Visitor.index,

  // tests
  // console.warn("HERE:", ShExJtoAS({"type":"Schema","shapes":[{"id":"http://all.example/S1","type":"Shape","expression":
  //  { "id":"http://all.example/S1e", "type":"EachOf","expressions":[ ] },
  // // { "id":"http://all.example/S1e","type":"TripleConstraint","predicate":"http://all.example/p1"},
  // "extra":["http://all.example/p3","http://all.example/p1","http://all.example/p2"]
  // }]}).shapes['http://all.example/S1']);

  ShExJtoAS: function (schema) {
    var _ShExUtil = this;
    schema._prefixes = schema.prefixes || {  };
    schema._index = this.index(schema);
    return schema;
  },

  AStoShExJ: function (schema, abbreviate) {
    schema["@context"] = schema["@context"] || "http://www.w3.org/ns/shex.jsonld";
    delete schema["_index"];
    delete schema["_prefixes"];
    return schema;
  },

  ShExRVisitor: function (knownShapeExprs) {
    var v = ShExUtil.Visitor();
    var knownExpressions = {};
    var oldVisitShapeExpr = v.visitShapeExpr,
        oldVisitValueExpr = v.visitValueExpr,
        oldVisitExpression = v.visitExpression;
    v.keepShapeExpr = oldVisitShapeExpr;

    v.visitShapeExpr = v.visitValueExpr = function (expr, label) {
      if (typeof expr === "string")
        return expr;
      if ("id" in expr) {
        if (knownShapeExprs.indexOf(expr.id) !== -1 || Object.keys(expr).length === 1)
          return expr.id;
        delete expr.id;
      }
      return oldVisitShapeExpr.call(this, expr, label);
    };

    v.visitExpression = function (expr) {
      if (typeof expr === "string") // shortcut for recursive references e.g. 1Include1 and ../doc/TODO.md
        return expr;
      if ("id" in expr) {
        if (expr.id in knownExpressions) {
          knownExpressions[expr.id].refCount++;
          return expr.id;
        }
      }
      var ret = oldVisitExpression.call(this, expr);
      // Everything from RDF has an ID, usually a BNode.
      knownExpressions[expr.id] = { refCount: 1, expr: ret };
      return ret;
    }

    v.cleanIds = function () {
      for (var k in knownExpressions) {
        var known = knownExpressions[k];
        if (known.refCount === 1 && ShExTerm.isBlank(known.expr.id))
          delete known.expr.id;
      };
    }

    return v;
  },


  // tests
  // var shexr = ShExUtil.ShExRtoShExJ({ "type": "Schema", "shapes": [
  //   { "id": "http://a.example/S1", "type": "Shape",
  //     "expression": {
  //       "type": "TripleConstraint", "predicate": "http://a.example/p1",
  //       "valueExpr": {
  //         "type": "ShapeAnd", "shapeExprs": [
  //           { "type": "NodeConstraint", "nodeKind": "bnode" },
  //           { "id": "http://a.example/S2", "type": "Shape",
  //             "expression": {
  //               "type": "TripleConstraint", "predicate": "http://a.example/p2" } }
  //           //            "http://a.example/S2"
  //         ] } } },
  //   { "id": "http://a.example/S2", "type": "Shape",
  //     "expression": {
  //       "type": "TripleConstraint", "predicate": "http://a.example/p2" } }
  // ] });
  // console.warn("HERE:", shexr.shapes[0].expression.valueExpr);
  // ShExUtil.ShExJtoAS(shexr);
  // console.warn("THERE:", shexr.shapes["http://a.example/S1"].expression.valueExpr);


  ShExRtoShExJ: function (schema) {
    // compile a list of known shapeExprs
    var knownShapeExprs = [];
    if ("shapes" in schema)
      knownShapeExprs = knownShapeExprs.concat(schema.shapes.map(sh => { return sh.id; }));

    // normalize references to those shapeExprs
    var v = this.ShExRVisitor(knownShapeExprs);
    if ("start" in schema)
      schema.start = v.visitShapeExpr(schema.start);
    if ("shapes" in schema)
      schema.shapes = schema.shapes.map(sh => {
        return sh.type === SX.ShapeDecl ?
          {
            type: "ShapeDecl",
            id: sh.id,
            abstract: sh.abstract,
            shapeExpr: v.visitShapeExpr(sh.shapeExpr)
          } :
          v.keepShapeExpr(sh);
      });

    // remove extraneous BNode IDs
    v.cleanIds();
    return schema;
  },

  valGrep: function (obj, type, f) {
    var _ShExUtil = this;
    var ret = [];
    for (var i in obj) {
      var o = obj[i];
      if (typeof o === "object") {
        if ("type" in o && o.type === type)
          ret.push(f(o));
        ret.push.apply(ret, _ShExUtil.valGrep(o, type, f));
      }
    }
    return ret;
  },

  n3jsToTurtle: function (res) {
    function termToLex (node) {
      return typeof node === "object" ? ("\"" + node.value + "\"" + (
        "type" in node ? "^^<" + node.type + ">" :
          "language" in node ? "@" + node.language :
          ""
      )) :
      ShExTerm.isIRI(node) ? "<" + node + ">" :
      ShExTerm.isBlank(node) ? node :
      "???";
    }
    return this.valGrep(res, "TestedTriple", function (t) {
      return ["subject", "predicate", "object"].map(k => {
        return termToLex(t[k]);
      }).join(" ")+" .";
    });
  },

  valToN3js: function (res, factory) {
    return this.valGrep(res, "TestedTriple", function (t) {
      var ret = JSON.parse(JSON.stringify(t));
      if (typeof t.object === "object")
        ret.object = ("\"" + t.object.value + "\"" + (
          "type" in t.object ? "^^" + t.object.type :
            "language" in t.object ? "@" + t.object.language :
            ""
        ));
      return ShExTerm.externalTriple(ret, factory);
    });
  },

  n3jsToTurtle: function (n3js) {
    function termToLex (node) {
      if (ShExTerm.isIRI(node))
        return "<" + node + ">";
      if (ShExTerm.isBlank(node))
        return node;
      var t = ShExTerm.getLiteralType(node);
      if (t && t !== "http://www.w3.org/2001/XMLSchema#string")
        return "\"" + ShExTerm.getLiteralValue(node) + "\"" +
        "^^<" + t + ">";
      return node;
    }
    return n3js.map(function (t) {
      return ["subject", "predicate", "object"].map(k => {
        return termToLex(t[k]);
      }).join(" ")+" .";
    });
  },

  /* canonicalize: move all tripleExpression references to their first expression.
   *
   */
  canonicalize: function (schema, trimIRI) {
    var ret = JSON.parse(JSON.stringify(schema));
    ret["@context"] = ret["@context"] || "http://www.w3.org/ns/shex.jsonld";
    delete ret._prefixes;
    delete ret._base;
    let index = ret._index || this.index(schema);
    delete ret._index;
    let sourceMap = ret._sourceMap;
    delete ret._sourceMap;
    // Don't delete ret.productions as it's part of the AS.
    var v = ShExUtil.Visitor();
    var knownExpressions = [];
    var oldVisitInclusion = v.visitInclusion, oldVisitExpression = v.visitExpression;
    v.visitInclusion = function (inclusion) {
      if (knownExpressions.indexOf(inclusion) === -1 &&
          inclusion in index.tripleExprs) {
        knownExpressions.push(inclusion)
        return oldVisitExpression.call(v, index.tripleExprs[inclusion]);
      }
      return oldVisitInclusion.call(v, inclusion);
    };
    v.visitExpression = function (expression) {
      if (typeof expression === "object" && "id" in expression) {
        if (knownExpressions.indexOf(expression.id) === -1) {
          knownExpressions.push(expression.id)
          return oldVisitExpression.call(v, index.tripleExprs[expression.id]);
        }
        return expression.id; // Inclusion
      }
      return oldVisitExpression.call(v, expression);
    };
    if (trimIRI) {
      v.visitIRI = function (i) {
        return i.replace(trimIRI, "");
      }
      if ("imports" in ret)
        ret.imports = v.visitImports(ret.imports);
    }
    if ("shapes" in ret) {
      ret.shapes = Object.keys(index.shapeExprs).sort().map(k => {
        if ("extra" in index.shapeExprs[k])
          index.shapeExprs[k].extra.sort();
        return v.visitShapeDecl(index.shapeExprs[k]);
      });
    }
    return ret;
  },

  BiDiClosure: function () {
    return {
      needs: {},
      neededBy: {},
      inCycle: [],
      test: function () {
        function expect (l, r) { var ls = JSON.stringify(l), rs = JSON.stringify(r); if (ls !== rs) throw Error(ls+" !== "+rs); }
        // this.add(1, 2); expect(this.needs, { 1:[2]                     }); expect(this.neededBy, { 2:[1]                     });
        // this.add(3, 4); expect(this.needs, { 1:[2], 3:[4]              }); expect(this.neededBy, { 2:[1], 4:[3]              });
        // this.add(2, 3); expect(this.needs, { 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 2:[1], 3:[2,1], 4:[3,2,1] });

        this.add(2, 3); expect(this.needs, { 2:[3]                     }); expect(this.neededBy, { 3:[2]                     });
        this.add(1, 2); expect(this.needs, { 1:[2,3], 2:[3]            }); expect(this.neededBy, { 3:[2,1], 2:[1]            });
        this.add(1, 3); expect(this.needs, { 1:[2,3], 2:[3]            }); expect(this.neededBy, { 3:[2,1], 2:[1]            });
        this.add(3, 4); expect(this.needs, { 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(6, 7); expect(this.needs, { 6:[7]                    , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6]                    , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(5, 6); expect(this.needs, { 5:[6,7], 6:[7]           , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5]           , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(5, 7); expect(this.needs, { 5:[6,7], 6:[7]           , 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5]           , 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(7, 8); expect(this.needs, { 5:[6,7,8], 6:[7,8], 7:[8], 1:[2,3,4], 2:[3,4], 3:[4] }); expect(this.neededBy, { 7:[6,5], 6:[5], 8:[7,6,5], 3:[2,1], 2:[1], 4:[3,2,1] });
        this.add(4, 5);
        expect(this.needs,    { 1:[2,3,4,5,6,7,8], 2:[3,4,5,6,7,8], 3:[4,5,6,7,8], 4:[5,6,7,8], 5:[6,7,8], 6:[7,8], 7:[8] });
        expect(this.neededBy, { 2:[1], 3:[2,1], 4:[3,2,1], 5:[4,3,2,1], 6:[5,4,3,2,1], 7:[6,5,4,3,2,1], 8:[7,6,5,4,3,2,1] });
      },
      add: function (needer, needie, negated) {
        var r = this;
        if (!(needer in r.needs))
          r.needs[needer] = [];
        if (!(needie in r.neededBy))
          r.neededBy[needie] = [];

        // // [].concat.apply(r.needs[needer], [needie], r.needs[needie]). emitted only last element
        r.needs[needer] = r.needs[needer].concat([needie], r.needs[needie]).
          filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });
        // // [].concat.apply(r.neededBy[needie], [needer], r.neededBy[needer]). emitted only last element
        r.neededBy[needie] = r.neededBy[needie].concat([needer], r.neededBy[needer]).
          filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });

        if (needer in this.neededBy) this.neededBy[needer].forEach(function (e) {
          r.needs[e] = r.needs[e].concat([needie], r.needs[needie]).
            filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; });
        });

        if (needie in this.needs) this.needs[needie].forEach(function (e) {
          r.neededBy[e] = r.neededBy[e].concat([needer], r.neededBy[needer]).
            filter(function (el, ord, l) { return el !== undefined && l.indexOf(el) === ord; })
        });
        // this.neededBy[needie].push(needer);

        if (r.needs[needer].indexOf(needer) !== -1)
          r.inCycle = r.inCycle.concat(r.needs[needer]);
      },
      trim: function () {
        function _trim (a) {
          // filter(function (el, ord, l) { return l.indexOf(el) === ord; })
          for (var i = a.length-1; i > -1; --i)
            if (a.indexOf(a[i]) < i)
              a.splice(i, i+1);
        }
        for (k in this.needs)
          _trim(this.needs[k]);
        for (k in this.neededBy)
          _trim(this.neededBy[k]);
      },
      foundIn: {},
      addIn: function (tripleExpr, shapeExpr) {
        this.foundIn[tripleExpr] = shapeExpr;
      }
    }
  },
  /** @@TODO tests
   * options:
   *   no: don't do anything; just report nestable shapes
   *   transform: function to change shape labels
   */
  nestShapes: function (schema, options = {}) {
    var _ShExUtil = this;
    const index = schema._index || this.index(schema);
    if (!('no' in options)) { options.no = false }

    let shapeLabels = Object.keys(index.shapeExprs || [])
    let shapeReferences = {}
    shapeLabels.forEach(label => {
      let shape = index.shapeExprs[label]
      noteReference(label, null) // just note the shape so we have a complete list at the end
      shape = _ShExUtil.skipDecl(shape)
      if (shape.type === 'Shape') {
        if ('extends' in shape) {
          shape.extends.forEach(
             // !!! assumes simple reference, not e.g. AND
            parent => noteReference(parent, shape)
          )
        }
        if ('expression' in shape) {
          (_ShExUtil.simpleTripleConstraints(shape) || []).forEach(tc => {
            let target = _ShExUtil.getValueType(tc.valueExpr, true)
            noteReference(target, {type: 'tc', shapeLabel: label, tc: tc})
          })
        }
      } else if (shape.type === 'NodeConstraint') {
        // can't have any refs to other shapes
      } else {
        throw Error('nestShapes currently only supports Shapes and NodeConstraints')
      }
    })
    let nestables = Object.keys(shapeReferences).filter(
      label => shapeReferences[label].length === 1
        && shapeReferences[label][0].type === 'tc' // no inheritance support yet
        && _ShExUtil.skipDecl(index.shapeExprs[label]).type === 'Shape' // Don't nest e.g. valuesets for now
    ).filter(
      nestable => !('noNestPattern' in options)
        || !nestable.match(RegExp(options.noNestPattern))
    ).reduce((acc, label) => {
      acc[label] = {
        referrer: shapeReferences[label][0].shapeLabel,
        predicate: shapeReferences[label][0].tc.predicate
      }
      return acc
    }, {})
    if (!options.no) {
      let oldToNew = {}

      if (options.rename) {
      if (!('transform' in options)) {
        options.transform = (function () {
          let map = shapeLabels.reduce((acc, k, idx) => {
            acc[k] = '_:transformed' + idx
            return acc
          }, {})
          return function (id, shapeExpr) {
            return map[id]
          }
        })()
      }
      Object.keys(nestables).forEach(oldName => {
        let shapeExpr = index.shapeExprs[oldName]
        let newName = options.transform(oldName, shapeExpr)
        oldToNew[oldName] = newName
        shapeLabels[shapeLabels.indexOf(oldName)] = newName
        nestables[newName] = nestables[oldName]
        nestables[newName].was = oldName
        delete nestables[oldName]
        index.shapeExprs[newName] = index.shapeExprs[oldName]
        delete index.shapeExprs[oldName]
        if (shapeReferences[oldName].length !== 1) { throw Error('assertion: ' + oldName + ' doesn\'t have one reference: [' + shapeReferences[oldName] + ']') }
        let ref = shapeReferences[oldName][0]
        if (ref.type === 'tc') {
          if (ref.tc.valueExpr.type === 'ShapeRef') {
            ref.tc.valueExpr.reference = newName
          } else {
            throw Error('assertion: rename not implemented for TripleConstraint expr: ' + ref.tc.valueExpr)
            // _ShExUtil.setValueType(ref, newName)
          }
        } else if (ref.type === 'Shape') {
          throw Error('assertion: rename not implemented for Shape: ' + ref)
        } else {
          throw Error('assertion: ' + ref.type + ' not TripleConstraint or Shape')
        }
      })

      Object.keys(nestables).forEach(k => {
        let n = nestables[k]
        if (n.referrer in oldToNew) {
          n.newReferrer = oldToNew[n.referrer]
        }
      })

      // Restore old order for more concise diffs.
      let shapesCopy = {}
      shapeLabels.forEach(label => shapesCopy[label] = index.shapeExprs[label])
      index.shapeExprs = shapesCopy
      } else {
        const doomed = []
        const ids = schema.shapes.map(s => s.id)
        Object.keys(nestables).forEach(oldName => {
          shapeReferences[oldName][0].tc.valueExpr = index.shapeExprs[oldName].shapeExpr
          const delme = ids.indexOf(oldName)
          if (schema.shapes[delme].id !== oldName)
            throw Error('assertion: found ' + schema.shapes[delme].id + ' instead of ' + oldName)
          doomed.push(delme)
          delete index.shapeExprs[oldName]
        })
        doomed.sort((l, r) => r - l).forEach(delme => {
          const id = schema.shapes[delme].id
          if (!nestables[id])
            throw Error('deleting unexpected shape ' + id)
          schema.shapes.splice(delme, 1)
        })
      }
    }
    // console.dir(nestables)
    // console.dir(shapeReferences)
    return nestables

    function noteReference (id, reference) {
      if (!(id in shapeReferences)) {
        shapeReferences[id] = []
      }
      if (reference) {
        shapeReferences[id].push(reference)
      }
    }
  },

  /** @@TODO tests
   *
   */
  getPredicateUsage: function (schema, untyped = {}) {
    var _ShExUtil = this;

    // populate shapeHierarchy
    let shapeHierarchy = Hierarchy.create()
    Object.keys(schema.shapes).forEach(label => {
      let shapeExpr = _ShExUtil.skipDecl(schema.shapes[label])
      if (shapeExpr.type === 'Shape') {
        (shapeExpr.extends || []).forEach(
          superShape => shapeHierarchy.add(superShape.reference, label)
        )
      }
    })
    Object.keys(schema.shapes).forEach(label => {
      if (!(label in shapeHierarchy.parents))
        shapeHierarchy.parents[label] = []
    })

    let predicates = { } // IRI->{ uses: [shapeLabel], commonType: shapeExpr }
    Object.keys(schema.shapes).forEach(shapeLabel => {
      let shapeExpr = _ShExUtil.skipDecl(schema.shapes[shapeLabel])
      if (shapeExpr.type === 'Shape') {
        let tcs = _ShExUtil.simpleTripleConstraints(shapeExpr) || []
        tcs.forEach(tc => {
          let newType = _ShExUtil.getValueType(tc.valueExpr)
          if (!(tc.predicate in predicates)) {
            predicates[tc.predicate] = {
              uses: [shapeLabel],
              commonType: newType,
              polymorphic: false
            }
            if (typeof newType === 'object') {
              untyped[tc.predicate] = {
                shapeLabel,
                predicate: tc.predicate,
                newType,
                references: []
              }
            }
          } else {
            predicates[tc.predicate].uses.push(shapeLabel)
            let curType = predicates[tc.predicate].commonType
            if (typeof curType === 'object' || curType === null) {
              // another use of a predicate with no commonType
              // console.warn(`${shapeLabel} ${tc.predicate}:${newType} uses untypable predicate`)
              untyped[tc.predicate].references.push({ shapeLabel, newType })
            } else if (typeof newType === 'object') {
              // first use of a predicate with no detectable commonType
              predicates[tc.predicate].commonType = null
              untyped[tc.predicate] = {
                shapeLabel,
                predicate: tc.predicate,
                curType,
                newType,
                references: []
              }
            } else if (curType === newType) {
              ; // same type again
            } else if (shapeHierarchy.parents[curType] && shapeHierarchy.parents[curType].indexOf(newType) !== -1) {
              predicates[tc.predicate].polymorphic = true; // already covered by current commonType
            } else {
              let idx = shapeHierarchy.parents[newType] ? shapeHierarchy.parents[newType].indexOf(curType) : -1
              if (idx === -1) {
                let intersection = shapeHierarchy.parents[curType]
                    ? shapeHierarchy.parents[curType].filter(
                      lab => -1 !== shapeHierarchy.parents[newType].indexOf(lab)
                    )
                    : []
                if (intersection.length === 0) {
                  untyped[tc.predicate] = {
                    shapeLabel,
                    predicate: tc.predicate,
                    curType,
                    newType,
                    references: []
                  }
                  // console.warn(`${shapeLabel} ${tc.predicate} : ${newType} isn\'t related to ${curType}`)
                  predicates[tc.predicate].commonType = null
                } else {
                  predicates[tc.predicate].commonType = intersection[0]
                  predicates[tc.predicate].polymorphic = true
                }
              } else {
                predicates[tc.predicate].commonType = shapeHierarchy.parents[newType][idx]
                predicates[tc.predicate].polymorphic = true
              }
            }
          }
        })
      }
    })
    return predicates
  },

  /** @@TODO tests
   *
   */
  simpleTripleConstraints: function (shape) {
    if (!('expression' in shape)) {
      return []
    }
    if (shape.expression.type === 'TripleConstraint') {
      return [ shape.expression ]
    }
    if (shape.expression.type === 'EachOf' &&
        !(shape.expression.expressions.find(
          expr => expr.type !== 'TripleConstraint'
        ))) {
          return shape.expression.expressions
        }
    throw Error('can\'t (yet) express ' + JSON.stringify(shape))
  },

  skipDecl: function (shapeExpr) {
    return shapeExpr.type === 'ShapeDecl' ? shapeExpr.shapeExpr : shapeExpr
  },

  getValueType: function (valueExpr) {
    if (typeof valueExpr === 'string') { return valueExpr }
    if (valueExpr.reference) { return valueExpr.reference }
    if (valueExpr.nodeKind === 'iri') { return OWL.Thing } // !! push this test to callers
    if (valueExpr.datatype) { return valueExpr.datatype }
    // if (valueExpr.extends && valueExpr.extends.length === 1) { return valueExpr.extends[0] }
    return valueExpr // throw Error('no value type for ' + JSON.stringify(valueExpr))
  },

  /** getDependencies: find which shappes depend on other shapes by inheritance
   * or inclusion.
   * TODO: rewrite in terms of Visitor.
   */
  getDependencies: function (schema, ret) {
    ret = ret || this.BiDiClosure();
    (schema.shapes || []).forEach(function (shape) {
      function _walkShapeExpression (shapeExpr, negated) {
        if (typeof shapeExpr === "string") { // ShapeRef
          ret.add(shape.id, shapeExpr);
        } else if (shapeExpr.type === "ShapeOr" || shapeExpr.type === "ShapeAnd") {
          shapeExpr.shapeExprs.forEach(function (expr) {
            _walkShapeExpression(expr, negated);
          });
        } else if (shapeExpr.type === "ShapeNot") {
          _walkShapeExpression(shapeExpr.shapeExpr, negated ^ 1); // !!! test negation
        } else if (shapeExpr.type === "Shape") {
          _walkShape(shapeExpr, negated);
        } else if (shapeExpr.type === "NodeConstraint") {
          // no impact on dependencies
        } else if (shapeExpr.type === "ShapeExternal") {
        } else
          throw Error("expected Shape{And,Or,Ref,External} or NodeConstraint in " + JSON.stringify(shapeExpr));
      }
      
      function _walkShape (shape, negated) {
        function _walkTripleExpression (tripleExpr, negated) {
          function _exprGroup (exprs, negated) {
            exprs.forEach(function (nested) {
              _walkTripleExpression(nested, negated) // ?? negation allowed?
            });
          }

          function _walkTripleConstraint (tc, negated) {
            if (tc.valueExpr)
              _walkShapeExpression(tc.valueExpr, negated);
            if (negated && ret.inCycle.indexOf(shape.id) !== -1) // illDefined/negatedRefCycle.err
              throw Error("Structural error: " + shape.id + " appears in negated cycle");
          }

          if (typeof tripleExpr === "string") { // Inclusion
            ret.add(shape.id, tripleExpr);
          } else {
            if ("id" in tripleExpr)
              ret.addIn(tripleExpr.id, shape.id)
            if (tripleExpr.type === "TripleConstraint") {
              _walkTripleConstraint(tripleExpr, negated);
            } else if (tripleExpr.type === "OneOf" || tripleExpr.type === "EachOf") {
              _exprGroup(tripleExpr.expressions);
            } else {
              throw Error("expected {TripleConstraint,OneOf,EachOf,Inclusion} in " + tripleExpr);
            }
          }
        }

        (["extends", "restricts"]).forEach(attr => {
        if (shape[attr] && shape[attr].length > 0)
          shape[attr].forEach(function (i) {
            ret.add(shape.id, i);
          });
        })
        if (shape.expression)
          _walkTripleExpression(shape.expression, negated);
      }
      if (shape.type === "ShapeDecl")
        shape = shape.shapeExpr;
      _walkShapeExpression(shape, 0); // 0 means false for bitwise XOR
    });
    return ret;
  },

  /** partition: create subset of a schema with only desired shapes and
   * their dependencies.
   *
   * @schema: input schema
   * @partition: shape name or array of desired shape names
   * @deps: (optional) dependency tree from getDependencies.
   *        map(shapeLabel -> [shapeLabel])
   */
  partition: function (schema, includes, deps, cantFind) {
    const inputIndex = schema._index || this.index(schema)
    const outputIndex = { shapeExprs: new Map(), tripleExprs: new Map() };
    includes = includes instanceof Array ? includes : [includes];

    // build dependency tree if not passed one
    deps = deps || this.getDependencies(schema);
    cantFind = cantFind || function (what, why) {
      throw new Error("Error: can't find shape " +
                      (why ?
                       why + " dependency " + what :
                       what));
    };
    var partition = {};
    for (var k in schema)
      partition[k] = k === "shapes" ? [] : schema[k];
    includes.forEach(function (i) {
      if (i in outputIndex.shapeExprs) {
        // already got it.
      } else if (i in inputIndex.shapeExprs) {
        const adding = inputIndex.shapeExprs[i];
        partition.shapes.push(adding);
        outputIndex.shapeExprs[adding.id] = adding;
        if (i in deps.needs)
          deps.needs[i].forEach(function (n) {
            // Turn any needed TE into an SE.
            if (n in deps.foundIn)
              n = deps.foundIn[n];

            if (n in outputIndex.shapeExprs) {
            } else if (n in inputIndex.shapeExprs) {
              const needed = inputIndex.shapeExprs[n];
              partition.shapes.push(needed);
              outputIndex.shapeExprs[needed.id] = needed;
            } else
              cantFind(n, i);
          });
      } else {
        cantFind(i, "supplied");
      }
    });
    return partition;
  },


  /** @@TODO flatten: return copy of input schema with all shape and value class
   * references substituted by a copy of their referent.
   *
   * @schema: input schema
   */
  flatten: function (schema, deps, cantFind) {
    var v = this.Visitor();
    return v.visitSchema(schema);
  },

  // @@ put predicateUsage here

  emptySchema: function () {
    return {
      type: "Schema"
    };
  },
  merge: function (left, right, overwrite, inPlace) {
    var ret = inPlace ? left : this.emptySchema();

    function mergeArray (attr) {
      Object.keys(left[attr] || {}).forEach(function (key) {
        if (!(attr in ret))
          ret[attr] = {};
        ret[attr][key] = left[attr][key];
      });
      Object.keys(right[attr] || {}).forEach(function (key) {
        if (!(attr  in left) || !(key in left[attr]) || overwrite) {
          if (!(attr in ret))
            ret[attr] = {};
          ret[attr][key] = right[attr][key];
        }
      });
    }

    function mergeMap (attr) {
      (left[attr] || new Map()).forEach(function (value, key, map) {
        if (!(attr in ret))
          ret[attr] = new Map();
        ret[attr].set(key, left[attr].get(key));
      });
      (right[attr] || new Map()).forEach(function (value, key, map) {
        if (!(attr  in left) || !(left[attr].has(key)) || overwrite) {
          if (!(attr in ret))
            ret[attr] = new Map();
          ret[attr].set(key, right[attr].get(key));
        }
      });
    }

    // base
    if ("_base" in left)
      ret._base = left._base;
    if ("_base" in right)
      if (!("_base" in left) || overwrite)
        ret._base = right._base;

    mergeArray("_prefixes");

    mergeMap("_sourceMap");

    if ("imports" in right)
      if (!("imports" in left) || overwrite)
        ret.imports = right.imports;

    // startActs
    if ("startActs" in left)
      ret.startActs = left.startActs;
    if ("startActs" in right)
      if (!("startActs" in left) || overwrite)
        ret.startActs = right.startActs;

    // start
    if ("start" in left)
      ret.start = left.start;
    if ("start" in right)
      if (!("start" in left) || overwrite)
        ret.start = right.start;

    let lindex = left._index || this.index(left);

    // shapes
    if (!inPlace)
      (left.shapes || []).forEach(function (lshape) {
        if (!("shapes" in ret))
          ret.shapes = [];
        ret.shapes.push(lshape);
      });
    (right.shapes || []).forEach(function (rshape) {
      if (!("shapes"  in left) || !(rshape.id in lindex.shapeExprs) || overwrite) {
        if (!("shapes" in ret))
          ret.shapes = [];
        ret.shapes.push(rshape)
      }
    });

    if (left._index || right._index)
      ret._index = this.index(ret); // inefficient; could build above

    return ret;
  },

  absolutizeResults: function (parsed, base) {
    // !! duplicate of Validation-test.js:84: var referenceResult = parseJSONFile(resultsFile...)
    function mapFunction (k, obj) {
      // resolve relative URLs in results file
      if (["shape", "reference", "node", "subject", "predicate", "object"].indexOf(k) !== -1 &&
          ShExTerm.isIRI(obj[k])) {
        obj[k] = ShExTerm.resolveRelativeIRI(base, obj[k]);
      }}

    function resolveRelativeURLs (obj) {
      Object.keys(obj).forEach(function (k) {
        if (typeof obj[k] === "object") {
          resolveRelativeURLs(obj[k]);
        }
        if (mapFunction) {
          mapFunction(k, obj);
        }
      });
    }
    resolveRelativeURLs(parsed);
    return parsed;
  },

  getProofGraph: function (res, db, dataFactory) {
    function _dive1 (solns) {
      if (solns.type === "NodeConstraintTest") {
      } else if (solns.type === "SolutionList" ||
          solns.type === "ShapeAndResults") {
        solns.solutions.forEach(s => {
          if (s.solution) // no .solution for <S> {}
            _dive1(s.solution);
        });
      } else if (solns.type === "ShapeOrResults") {
        _dive1(solns.solution);
      } else if (solns.type === "ShapeTest") {
        if ("solution" in solns)
          _dive1(solns.solution);
      } else if (solns.type === "OneOfSolutions" ||
                 solns.type === "EachOfSolutions") {
        solns.solutions.forEach(s => {
          _dive1(s);
        });
      } else if (solns.type === "OneOfSolution" ||
                 solns.type === "EachOfSolution") {
        solns.expressions.forEach(s => {
          _dive1(s);
        });
      } else if (solns.type === "TripleConstraintSolutions") {
        solns.solutions.map(s => {
          if (s.type !== "TestedTriple")
            throw Error("unexpected result type: " + s.type);
          var s2 = s;
          if (typeof s2.object === "object")
            s2.object = "\"" + s2.object.value.replace(/"/g, "\\\"") + "\""
            + (s2.object.language ? ("@" + s2.object.language) : 
               s2.object.type ? ("^^" + s2.object.type) :
               "");
          db.addQuad(ShExTerm.externalTriple(s2, dataFactory))
          if ("referenced" in s) {
            _dive1(s.referenced);
          }
        });
      } else {
        throw Error("unexpected expr type "+solns.type+" in " + JSON.stringify(solns));
      }
    }
    _dive1(res);
    return db;
  },

  validateSchema: function (schema) { // obselete, but may need other validations in the future.
    var _ShExUtil = this;
    var visitor = this.Visitor();
    var currentLabel = currentExtra = null;
    var currentNegated = false;
    var dependsOn = { };
    var inTE = false;
    var oldVisitShape = visitor.visitShape;
    var negativeDeps = Hierarchy.create();
    var positiveDeps = Hierarchy.create();
    let index = schema.index || this.index(schema);

    visitor.visitShape = function (shape, label) {
      var lastExtra = currentExtra;
      currentExtra = shape.extra;
      var ret = oldVisitShape.call(visitor, shape, label);
      currentExtra = lastExtra;
      return ret;
    }

    var oldVisitShapeNot = visitor.visitShapeNot;
    visitor.visitShapeNot = function (shapeNot, label) {
      var lastNegated = currentNegated;
      currentNegated ^= true;
      var ret = oldVisitShapeNot.call(visitor, shapeNot, label);
      currentNegated = lastNegated;
      return ret;
    }

    var oldVisitTripleConstraint = visitor.visitTripleConstraint;
    visitor.visitTripleConstraint = function (expr) {
      var lastNegated = currentNegated;
      if (currentExtra && currentExtra.indexOf(expr.predicate) !== -1)
        currentNegated ^= true;
      inTE = true;
      var ret = oldVisitTripleConstraint.call(visitor, expr);
      inTE = false;
      currentNegated = lastNegated;
      return ret;
    };

    var oldVisitShapeRef = visitor.visitShapeRef;
    visitor.visitShapeRef = function (shapeRef) {
      if (!(shapeRef in index.shapeExprs))
        throw firstError(Error("Structural error: reference to " + JSON.stringify(shapeRef) + " not found in schema shape expressions:\n" + dumpKeys(index.shapeExprs) + "."), shapeRef);
      if (!inTE && shapeRef === currentLabel)
        throw firstError(Error("Structural error: circular reference to " + currentLabel + "."), shapeRef);
      (currentNegated ? negativeDeps : positiveDeps).add(currentLabel, shapeRef)
      return oldVisitShapeRef.call(visitor, shapeRef);
    }

    var oldVisitInclusion = visitor.visitInclusion;
    visitor.visitInclusion = function (inclusion) {
      var refd;
      if (!(refd = index.tripleExprs[inclusion]))
        throw firstError(Error("Structural error: included shape " + inclusion + " not found in schema triple expressions:\n" + dumpKeys(index.tripleExprs) + "."), inclusion);
      // if (refd.type !== "Shape")
      //   throw Error("Structural error: " + inclusion + " is not a simple shape.");
      return oldVisitInclusion.call(visitor, inclusion);
    };

    (schema.shapes || []).forEach(function (shape) {
      currentLabel = shape.id;
      visitor.visitShapeDecl(shape, shape.id);
    });
    let circs = Object.keys(negativeDeps.children).filter(
      k => negativeDeps.children[k].filter(
        k2 => k2 in negativeDeps.children && negativeDeps.children[k2].indexOf(k) !== -1
          || k2 in positiveDeps.children && positiveDeps.children[k2].indexOf(k) !== -1
      ).length > 0
    );
    if (circs.length)
      throw firstError(Error("Structural error: circular negative dependencies on " + circs.join(',') + "."), circs[0]);

    function dumpKeys (obj) {
      return obj ? Object.keys(obj).map(
        u => u.substr(0, 2) === '_:' ? u : '<' + u + '>'
      ).join("\n        ") : '- none defined -'
    }

    function firstError (e, obj) {
      if ("_sourceMap" in schema)
        e.location = (schema._sourceMap.get(obj) || [undefined])[0];
      return e;
    }
  },

  /** isWellDefined: assert that schema is well-defined.
   *
   * @schema: input schema
   * @@TODO
   */
  isWellDefined: function (schema) {
    this.validateSchema(schema);
    // var deps = this.getDependencies(schema);
    return schema;
  },

  walkVal: function (val, cb) {
    var _ShExUtil = this;
    if (val.type === "NodeConstraintTest") {
      return null;
    } else if (val.type === "ShapeTest") {
      return "solution" in val ? _ShExUtil.walkVal(val.solution, cb) : null;
    } else if (val.type === "ShapeOrResults") {
      return _ShExUtil.walkVal(val.solution || val.solutions, cb);
    } else if (val.type === "ShapeAndResults") {
      return val.solutions.reduce((ret, exp) => {
        var n = _ShExUtil.walkVal(exp, cb);
        if (n)
          Object.keys(n).forEach(k => {
            if (k in ret)
              ret[k] = ret[k].concat(n[k]);
            else
              ret[k] = n[k];
          })
        return ret;
      }, {});
    } else if (val.type === "EachOfSolutions" || val.type === "OneOfSolutions") {
      return val.solutions.reduce((ret, sln) => {
        sln.expressions.forEach(exp => {
          var n = _ShExUtil.walkVal(exp, cb);
          if (n)
            Object.keys(n).forEach(k => {
              if (k in ret)
                ret[k] = ret[k].concat(n[k]);
              else
                ret[k] = n[k];
            })
        });
        return ret;
      }, {});
    } else if (val.type === "OneOfSolutions") {
      return val.solutions.reduce((ret, sln) => {
        Object.assign(ret, _ShExUtil.walkVal(sln, cb));
        return ret;
      }, {});
    } else if (val.type === "TripleConstraintSolutions") {
      if ("solutions" in val) {
        var ret = {};
        var vals = [];
        ret[val.predicate] = vals;
        val.solutions.forEach(sln => {
          var toAdd = [];
          if (chaseList(sln.referenced, toAdd)) {
            vals = vals.concat(toAdd);
          } else {
            var newElt = cb(sln);
            if ("referenced" in sln) {
              var t = _ShExUtil.walkVal(sln.referenced, cb);
              if (t)
                newElt.nested = t;
            }
            vals.push(newElt);
          }
          function chaseList (li) {
            if (!li) return false;
            if (li.node === RDF.nil) return true;
            if ("solution" in li && "solutions" in li.solution &&
                li.solution.solutions.length === 1 &&
                "expressions" in li.solution.solutions[0] &&
                li.solution.solutions[0].expressions.length === 2 &&
                "predicate" in li.solution.solutions[0].expressions[0] &&
                li.solution.solutions[0].expressions[0].predicate === RDF.first &&
                li.solution.solutions[0].expressions[1].predicate === RDF.rest) {
              var expressions = li.solution.solutions[0].expressions;
              var ent = expressions[0];
              var rest = expressions[1].solutions[0];
              var member = ent.solutions[0];
              var newElt = cb(member);
              if ("referenced" in member) {
                var t = _ShExUtil.walkVal(member.referenced, cb);
                if (t)
                  newElt.nested = t;
              }
              vals.push(newElt);
              return rest.object === RDF.nil ?
                true :
                chaseList(rest.referenced.type === "ShapeOrResults" // heuristic for `nil  OR @<list>` idiom
                          ? rest.referenced.solution
                          : rest.referenced);
            }
          }
        });
        return vals.length ? ret : null;
      } else {
        return null;
      }
    } else if (val.type === "NodeConstraintTest") {
      return null;
    } else if (val.type === "Recursion") {
      return null;
    } else {
      // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    return val;
  },

  /**
   * Convert val results to a property tree.
   * @exports
   * @returns {@code {p1:[{p2: v2},{p3: v3}]}}
   */
  valToValues: function (val) {
    return this.walkVal (val, function (sln) {
      return { ldterm: sln.object };
    });
  },

  valToExtension: function (val, lookfor) {
    var map = this.walkVal (val, function (sln) {
      return { extensions: sln.extensions };
    });
    function extensions (obj) {
      var list = [];
      var crushed = {};
      function crush (elt) {
        if (crushed === null)
          return elt;
        if (elt.constructor === Array) {
          crushed = null;
          return elt;
        }
        for (k in elt) {
          if (k in crushed) {
            crushed = null
            return elt;
          }
          crushed[k] = ldify(elt[k]);
        }
        return elt;
      }
      for (var k in obj) {
        if (k === "extensions") {
          if (obj[k])
            list.push(crush(ldify(obj[k][lookfor])));
        } else if (k === "nested") {
          var nested = extensions(obj[k]);
          if (nested.constructor === Array)
            nested.forEach(crush);
          else
            crush(nested);
          list = list.concat(nested);
        } else {
          list.push(crush(extensions(obj[k])));
        }
      }
      return list.length === 1 ? list[0] :
        crushed ? crushed :
        list;
    }
    return extensions(map);
  },

  valuesToSchema: function (values) {
    // console.log(JSON.stringify(values, null, "  "));
    var v = values;
    var t = values[RDF.type][0].ldterm;
    if (t === SX.Schema) {
      /* Schema { "@context":"http://www.w3.org/ns/shex.jsonld"
       *           startActs:[SemAct+]? start:(shapeExpr|labeledShapeExpr)?
       *           shapes:[labeledShapeExpr+]? }
       */
      var ret = {
        "@context": "http://www.w3.org/ns/shex.jsonld",
        type: "Schema"
      }
      if (SX.startActs in v)
        ret.startActs = v[SX.startActs].map(e => {
          var ret = {
            type: "SemAct",
            name: e.nested[SX.name][0].ldterm
          };
          if (SX.code in e.nested)
            ret.code = e.nested[SX.code][0].ldterm.value;
          return ret;
        });
      if (SX.imports in v)
        ret.imports = v[SX.imports].map(e => {
          return e.ldterm;
        });
      if (values[SX.start])
        ret.start = extend({id: values[SX.start][0].ldterm}, shapeExpr(values[SX.start][0].nested));
      var shapes = values[SX.shapes];
      if (shapes) {
        ret.shapes = shapes.map(v => { // @@ console.log(v.nested);
          var t = v.nested[RDF.type][0].ldterm;
          var obj = t === SX.ShapeDecl ?
              {
                type: SX.ShapeDecl,
                abstract: !!v.nested[SX["abstract"]][0].ldterm.value,
                shapeExpr: shapeExpr(v.nested[SX.shapeExpr][0].nested)
              } :
              shapeExpr(v.nested);
          return extend({id: v.ldterm}, obj);
        });
      }
      // console.log(ret);
      return ret;
    } else {
      throw Error("unknown schema type in " + JSON.stringify(values));
    }
    function findType (v, elts, f) {
      var t = v[RDF.type][0].ldterm.substr(SX._namespace.length);
      var elt = elts[t];
      if (!elt)
        return Missed;
      if (elt.nary) {
        var ret = {
          type: t,
        };
        ret[elt.prop] = v[SX[elt.prop]].map(e => {
          return valueOf(e);
        });
        return ret;
      } else {
        var ret = {
          type: t
        };
        if (elt.prop) {
          ret[elt.prop] = valueOf(v[SX[elt.prop]][0]);
        }
        return ret;
      }

      function valueOf (x) {
        return elt.expr && "nested" in x ? extend({ id: x.ldterm, }, f(x.nested)) : x.ldterm;
      }
    }
    function shapeExpr (v) {
      // shapeExpr = ShapeOr | ShapeAnd | ShapeNot | NodeConstraint | Shape | ShapeRef | ShapeExternal;
      var elts = { "ShapeAnd"     : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeOr"      : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeNot"     : { nary: false, expr: true , prop: "shapeExpr"  },
                   "ShapeRef"     : { nary: false, expr: false, prop: "reference"  },
                   "ShapeExternal": { nary: false, expr: false, prop: null         } };
      var ret = findType(v, elts, shapeExpr);
      if (ret !== Missed)
        return ret;

      var t = v[RDF.type][0].ldterm;
      if (t === SX.ShapeDecl) {
        var ret = { type: "ShapeDecl" };
        ["abstract"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        if (SX.shapeExpr in v) {
          ret.shapeExpr =
            "nested" in v[SX.shapeExpr][0] ?
            extend({id: v[SX.shapeExpr][0].ldterm}, shapeExpr(v[SX.shapeExpr][0].nested)) :
            v[SX.shapeExpr][0].ldterm;
        }
        return ret;
      } else if (t === SX.Shape) {
        var ret = { type: "Shape" };
        ["closed"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        ["extra", "extends", "restricts"].forEach(a => {
          if (SX[a] in v)
            ret[a] = v[SX[a]].map(e => { return e.ldterm; });
        });
        if (SX.expression in v) {
          ret.expression =
            "nested" in v[SX.expression][0] ?
            extend({id: v[SX.expression][0].ldterm}, tripleExpr(v[SX.expression][0].nested)) :
            v[SX.expression][0].ldterm;
        }
        if (SX.annotation in v)
          ret.annotations = v[SX.annotation].map(e => {
            return {
              type: "Annotation",
              predicate: e.nested[SX.predicate][0].ldterm,
              object: e.nested[SX.object][0].ldterm
            };
          });
        if (SX.semActs in v)
          ret.semActs = v[SX.semActs].map(e => {
            var ret = {
              type: "SemAct",
              name: e.nested[SX.name][0].ldterm
            };
            if (SX.code in e.nested)
              ret.code = e.nested[SX.code][0].ldterm.value;
            return ret;
          });
        return ret;
      } else if (t === SX.NodeConstraint) {
        var ret = { type: "NodeConstraint" };
        if (SX.values in v)
          ret.values = v[SX.values].map(v1 => { return objectValue(v1); });
        if (SX.nodeKind in v)
          ret.nodeKind = v[SX.nodeKind][0].ldterm.substr(SX._namespace.length);
        ["length", "minlength", "maxlength", "mininclusive", "maxinclusive", "minexclusive", "maxexclusive", "totaldigits", "fractiondigits"].forEach(a => {
          if (SX[a] in v)
            ret[a] = parseFloat(v[SX[a]][0].ldterm.value);
        });
        if (SX.pattern in v)
          ret.pattern = v[SX.pattern][0].ldterm.value;
        if (SX.flags in v)
          ret.flags = v[SX.flags][0].ldterm.value;
        if (SX.datatype in v)
          ret.datatype = v[SX.datatype][0].ldterm;
        return ret;
      } else {
        throw Error("unknown shapeExpr type in " + JSON.stringify(v));
      }

    }

    function objectValue (v, expectString) {
      if ("nested" in v) {
        var t = v.nested[RDF.type][0].ldterm;
        if ([SX.IriStem, SX.LiteralStem, SX.LanguageStem].indexOf(t) !== -1) {
          var ldterm = v.nested[SX.stem][0].ldterm.value;
          return {
            type: t.substr(SX._namespace.length),
            stem: ldterm
          };
        } else if ([SX.Language].indexOf(t) !== -1) {
          return {
            type: "Language",
            languageTag: v.nested[SX.languageTag][0].ldterm.value
          };
        } else if ([SX.IriStemRange, SX.LiteralStemRange, SX.LanguageStemRange].indexOf(t) !== -1) {
          var st = v.nested[SX.stem][0];
          var stem = st;
          if (typeof st === "object") {
            if (typeof st.ldterm === "object") {
              stem = st.ldterm;
            } else if (st.ldterm.startsWith("_:")) {
              stem = { type: "Wildcard" };
            }
          }
          var ret = {
            type: t.substr(SX._namespace.length),
            stem: stem.type !== "Wildcard" ? stem.value : stem
          };
          if (SX.exclusion in v.nested) {
            // IriStemRange:
            // * [{"ldterm":"http://a.example/v1"},{"ldterm":"http://a.example/v3"}] <-- no value
            // * [{"ldterm":"_:b836","nested":{a:[{"ldterm":sx:IriStem}],
            //                                 sx:stem:[{"ldterm":{"value":"http://a.example/v1"}}]}},
            //    {"ldterm":"_:b838","nested":{a:[{"ldterm":sx:IriStem}],
            //                                 sx:stem:[{"ldterm":{"value":"http://a.example/v3"}}]}}]

            // LiteralStemRange:
            // * [{"ldterm":{"value":"v1"}},{"ldterm":{"value":"v3"}}]
            // * [{"ldterm":"_:b866","nested":{a:[{"ldterm":sx:LiteralStem}],
            //                                 sx:stem:[{"ldterm":{"value":"v1"}}]}},
            //    {"ldterm":"_:b868","nested":{a:[{"ldterm":sx:LiteralStem}],
            //                                 sx:stem:[{"ldterm":{"value":"v3"}}]}}]

            // LanguageStemRange:
            // * [{"ldterm":{"value":"fr-be"}},{"ldterm":{"value":"fr-ch"}}]
            // * [{"ldterm":"_:b851","nested":{a:[{"ldterm":sx:LanguageStem}],
            //                                 sx:stem:[{"ldterm":{"value":"fr-be"}}]}},
            //    {"ldterm":"_:b853","nested":{a:[{"ldterm":sx:LanguageStem}],
            //                                 sx:stem:[{"ldterm":{"value":"fr-ch"}}]}}]
            ret.exclusions = v.nested[SX.exclusion].map(v1 => {
              return objectValue(v1, t !== SX.IriStemRange);
            });
          }
          return ret;
        } else {
          throw Error("unknown objectValue type in " + JSON.stringify(v));
        }
      } else {
        return expectString ? v.ldterm.value : v.ldterm;
      }
    }

    function tripleExpr (v) {
      // tripleExpr = EachOf | OneOf | TripleConstraint | Inclusion ;
      var elts = { "EachOf"   : { nary: true , expr: true , prop: "expressions" },
                   "OneOf"    : { nary: true , expr: true , prop: "expressions" },
                   "Inclusion": { nary: false, expr: false, prop: "include"     } };
      var ret = findType(v, elts, tripleExpr);
      if (ret !== Missed) {
        minMaxAnnotSemActs(v, ret);
        return ret;
      }

      var t = v[RDF.type][0].ldterm;
      if (t === SX.TripleConstraint) {
        var ret = {
          type: "TripleConstraint",
          predicate: v[SX.predicate][0].ldterm
        };
        ["inverse"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        if (SX.valueExpr in v)
          ret.valueExpr = extend({id: v[SX.valueExpr][0].ldterm}, "nested" in v[SX.valueExpr][0] ? shapeExpr(v[SX.valueExpr][0].nested) : {});
        minMaxAnnotSemActs(v, ret);
        return ret;
      } else {
        throw Error("unknown tripleExpr type in " + JSON.stringify(v));
      }
    }
    function minMaxAnnotSemActs (v, ret) {
      if (SX.min in v)
        ret.min = parseInt(v[SX.min][0].ldterm.value);
      if (SX.max in v) {
        ret.max = parseInt(v[SX.max][0].ldterm.value);
        if (isNaN(ret.max))
          ret.max = UNBOUNDED;
      }
      if (SX.annotation in v)
        ret.annotations = v[SX.annotation].map(e => {
          return {
            type: "Annotation",
            predicate: e.nested[SX.predicate][0].ldterm,
            object: e.nested[SX.object][0].ldterm
          };
        });
      if (SX.semActs in v)
        ret.semActs = v[SX.semActs].map(e => {
          var ret = {
            type: "SemAct",
            name: e.nested[SX.name][0].ldterm
          };
          if (SX.code in e.nested)
            ret.code = e.nested[SX.code][0].ldterm.value;
          return ret;
        });
      return ret;
    }
  },

  valToSimple: function (val) {
    var _ShExUtil = this;
    function _join (list) {
      return list.reduce((ret, elt) => {
        Object.keys(elt).forEach(k => {
          if (k in ret) {
            ret[k] = Array.from(new Set(ret[k].concat(elt[k])));
          } else {
            ret[k] = elt[k];
          }
        });
        return ret;
      }, {});
    }
    if (val.type === "TripleConstraintSolutions") {
      if ("solutions" in val) {
        return val.solutions.reduce((ret, sln) => {
          if (!("referenced" in sln))
            return {};
          var toAdd = {};
          if (chaseList(sln.referenced, toAdd)) {
            return _join(ret, toAdd);
          } else {
            return _join(ret, _ShExUtil.valToSimple(sln.referenced));
          }
          function chaseList (li) {
            if (!li) return false;
            if (li.node === RDF.nil) return true;
            if ("solution" in li && "solutions" in li.solution &&
                li.solution.solutions.length === 1 &&
                "expressions" in li.solution.solutions[0] &&
                li.solution.solutions[0].expressions.length === 2 &&
                "predicate" in li.solution.solutions[0].expressions[0] &&
                li.solution.solutions[0].expressions[0].predicate === RDF.first &&
                li.solution.solutions[0].expressions[1].predicate === RDF.rest) {
              var expressions = li.solution.solutions[0].expressions;
              var ent = expressions[0];
              var rest = expressions[1].solutions[0];
              var member = ent.solutions[0];
              var newElt = { ldterm: member.object };
              if ("referenced" in member) {
                var t = _ShExUtil.valToSimple(member.referenced);
                if (t)
                  newElt.nested = t;
              }
              toAdd = _join(toAdd, newElt);
              return rest.object === RDF.nil ?
                true :
                chaseList(rest.referenced.type === "ShapeOrResults" // heuristic for `nil  OR @<list>` idiom
                          ? rest.referenced.solution
                          : rest.referenced);
            }
          }
        }, []);
      } else {
        return [];
      }
    } else if (["TripleConstraintSolutions"].indexOf(val.type) !== -1) {
      return {  };
    } else if (val.type === "NodeConstraintTest") {
      var thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return thisNode;
    } else if (val.type === "ShapeTest") {
      var thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return "solution" in val ? _join([thisNode].concat(_ShExUtil.valToSimple(val.solution))) : thisNode;
    } else if (val.type === "Recursion") {
      return {  };
    } else if ("solutions" in val) {
      // ["SolutionList", "EachOfSolutions", "OneOfSolutions", "ShapeAndResults", "ShapeOrResults"].indexOf(val.type) !== -1
      return _join(val.solutions.map(sln => {
        return _ShExUtil.valToSimple(sln);
      }));
    } else if ("expressions" in val) {
      return _join(val.expressions.map(sln => {
        return _ShExUtil.valToSimple(sln);
      }));
    } else {
      // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    return val;
  },

  simpleToShapeMap: function (x) {
    return Object.keys(x).reduce((ret, k) => {
      x[k].forEach(s => {
        ret.push({node: k, shape: s });
      });
      return ret;
    }, []);
  },

  absolutizeShapeMap: function (parsed, base) {
    return parsed.map(elt => {
      return Object.assign(elt, {
        node: ShExTerm.resolveRelativeIRI(base, elt.node),
        shape: ShExTerm.resolveRelativeIRI(base, elt.shape)
      });
    });
  },

  errsToSimple: function (val, node, shape) {
    var _ShExUtil = this;
    if (val.type === "FailureList") {
      return val.errors.reduce((ret, e) => {
        return ret.concat(_ShExUtil.errsToSimple(e));
      }, []);
    } else if (val.type === "Failure") {
      return ["validating " + val.node + " as " + val.shape + ":"].concat(errorList(val.errors).reduce((ret, e) => {
        var nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length > 0 ? ret.concat(["  OR"]).concat(nested) : nested.map(s => "  " + s);
      }, []));
    } else if (val.type === "TypeMismatch") {
      var nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["validating " + n3ify(val.triple.object) + ":"].concat(nested);
    } else if (val.type === "RestrictionError") {
      var nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["validating restrictions on " + n3ify(val.focus) + ":"].concat(nested);
    } else if (val.type === "ShapeAndFailure") {
      return val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
    } else if (val.type === "ShapeOrFailure") {
      return val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat(" OR " + (typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)));
          }, []) :
          " OR " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
    } else if (val.type === "ShapeNotFailure") {
      return ["Node " + val.errors.node + " expected to NOT pass " + val.errors.shape];
    } else if (val.type === "ExcessTripleViolation") {
      return ["validating " + n3ify(val.triple.object) + ": exceeds cardinality"];
    } else if (val.type === "ClosedShapeViolation") {
      return ["ClosedShapeError: unexpected: {"].concat(
        val.unexpectedTriples.map(t => {
          return "  " + t.subject + " " + t.predicate + " " + n3ify(t.object) + " ."
        })
      ).concat(["}"]);
    } else if (val.type === "NodeConstraintViolation") {
      var w = __webpack_require__(21)();
      w._write(w._writeNodeConstraint(val.shapeExpr).join(""));
      var txt;
      w.end((err, res) => {
        txt = res;
      });
      return ["NodeConstraintError: expected to match " + txt];
    } else if (val.type === "MissingProperty") {
      return ["Missing property: " + val.property];
    } else if (val.type === "NegatedProperty") {
      return ["Unexpected property: " + val.property];
    } else if (val.type === "AbstractShapeFailure") {
      return ["Abstract Shape: " + val.shape];
    } else if (val.constructor === Array) {
      return val.reduce((ret, e) => {
        var nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length ? ret.concat(["AND"]).concat(nested) : nested;
      }, []);
    } else if (val.type === "SemActFailure") {
      var nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["rejected by semantic action:"].concat(nested);
    } else if (val.type === "SemActViolation") {
      return [val.message];
    } else if (val.type === "BooleanSemActFailure") {
      return ["Failed evaluating " + val.code + " on context " + JSON.stringify(val.ctx)];
    } else {
      debugger; // console.log(val);
      throw Error("unknown shapeExpression type in " + JSON.stringify(val));
    }
    function errorList (errors) {
      return errors.reduce(function (acc, e) {
        var attrs = Object.keys(e);
        return acc.concat(
          (attrs.length === 1 && attrs[0] === "errors")
            ? errorList(e.errors)
            : e);
      }, []);
    }
  },

  resolveRelativeIRI: ShExTerm.resolveRelativeIRI,

  resolvePrefixedIRI: function (prefixedIri, prefixes) {
    var colon = prefixedIri.indexOf(":");
    if (colon === -1)
      return null;
    var prefix = prefixes[prefixedIri.substr(0, colon)];
    return prefix === undefined ? null : prefix + prefixedIri.substr(colon+1);
  },

  parsePassedNode: function (passedValue, meta, deflt, known, reportUnknown) {
    if (passedValue === undefined || passedValue.length === 0)
      return known && known(meta.base) ? meta.base : deflt ? deflt() : this.NotSupplied;
    if (passedValue[0] === "_" && passedValue[1] === ":")
      return passedValue;
    if (passedValue[0] === "\"") {
      var m = passedValue.match(/^"((?:[^"\\]|\\")*)"(?:@(.+)|\^\^(?:<(.*)>|([^:]*):(.*)))?$/);
      if (!m)
        throw Error("malformed literal: " + passedValue);
      var lex = m[1], lang = m[2], rel = m[3], pre = m[4], local = m[5];
      // Turn the literal into an N3.js atom.
      var quoted = "\""+lex+"\"";
      if (lang !== undefined)
        return quoted + "@" + lang;
      if (pre !== undefined) {
        if (!(pre in meta.prefixes))
          throw Error("error parsing node "+passedValue+" no prefix for \"" + pre + "\"");
        return quoted + "^^" + meta.prefixes[pre] + local;
      }
      if (rel !== undefined)
        return quoted + "^^" + ShExTerm.resolveRelativeIRI(meta.base, rel);
      return quoted;
    }
    if (!meta)
      return known(passedValue) ? passedValue : this.UnknownIRI;
    var relIRI = passedValue[0] === "<" && passedValue[passedValue.length-1] === ">";
    if (relIRI)
      passedValue = passedValue.substr(1, passedValue.length-2);
    var t = ShExTerm.resolveRelativeIRI(meta.base || "", passedValue); // fall back to base-less mode
    if (known(t))
      return t;
    if (!relIRI) {
      var t2 = this.resolvePrefixedIRI(passedValue, meta.prefixes);
      if (t2 !== null && known(t2))
        return t2;
    }
    return reportUnknown ? reportUnknown(t) : this.UnknownIRI;
  },

  executeQueryPromise: function (query, endpoint) {
    var rows;

    var queryURL = endpoint + "?query=" + encodeURIComponent(query);
    return fetch(queryURL, {
      headers: {
        'Accept': 'application/sparql-results+json'
      }}).then(resp => resp.json()).then(t => {
        var selects = t.head.vars;
        return t.results.bindings.map(row => {
          return selects.map(sel => {
            var elt = row[sel];
            switch (elt.type) {
            case "uri": return elt.value;
            case "bnode": return "_:" + elt.value;
            case "literal":
              var datatype = elt.datatype;
              var lang = elt["xml:lang"];
              return "\"" + elt.value + "\"" + (
                datatype ? "^^" + datatype :
                  lang ? "@" + lang :
                  "");
            default: throw "unknown XML results type: " + elt.prop("tagName");
            }
            return row[sel];
          })
        });
      })// .then(x => new Promise(resolve => setTimeout(() => resolve(x), 1000)));
  },

  executeQuery: function (query, endpoint) {
    var rows, t, j;
    var queryURL = endpoint + "?query=" + encodeURIComponent(query);
    var xhr = new XMLHttpRequest();
    xhr.open("GET", queryURL, false);
    xhr.setRequestHeader('Accept', 'application/sparql-results+json');
    xhr.send();
    // var selectsBlock = query.match(/SELECT\s*(.*?)\s*{/)[1];
    // var selects = selectsBlock.match(/\?[^\s?]+/g);
    var t = JSON.parse(xhr.responseText);
    var selects = t.head.vars;
    return t.results.bindings.map(row => {
      return selects.map(sel => {
        var elt = row[sel];
        switch (elt.type) {
        case "uri": return elt.value;
        case "bnode": return "_:" + elt.value;
        case "literal":
          var datatype = elt.datatype;
          var lang = elt["xml:lang"];
          return "\"" + elt.value + "\"" + (
            datatype ? "^^" + datatype :
              lang ? "@" + lang :
              "");
        default: throw "unknown XML results type: " + elt.prop("tagName");
        }
        return row[sel];
      })
    });

/* TO ADD? XML results format parsed with jquery:
        $(data).find("sparql > results > result").
          each((_, row) => {
            rows.push($(row).find("binding > *:nth-child(1)").
              map((idx, elt) => {
                elt = $(elt);
                var text = elt.text();
                switch (elt.prop("tagName")) {
                case "uri": return text;
                case "bnode": return "_:" + text;
                case "literal":
                  var datatype = elt.attr("datatype");
                  var lang = elt.attr("xml:lang");
                  return "\"" + text + "\"" + (
                    datatype ? "^^" + datatype :
                    lang ? "@" + lang :
                      "");
                default: throw "unknown XML results type: " + elt.prop("tagName");
                }
              }).get());
          });
*/
  },

  makeN3DB: function (db, queryTracker) {

    function getSubjects () { return db.getSubjects().map(ShExTerm.internalTerm); }
    function getPredicates () { return db.getPredicates().map(ShExTerm.internalTerm); }
    function getObjects () { return db.getObjects().map(ShExTerm.internalTerm); }
    function getQuads () { return db.getQuads.apply(db, arguments).map(ShExTerm.internalTriple); }

    function getNeighborhood (point, shapeLabel/*, shape */) {
      // I'm guessing a local DB doesn't benefit from shape optimization.
      var startTime;
      if (queryTracker) {
        startTime = new Date();
        queryTracker.start(false, point, shapeLabel);
      }
      var outgoing = db.getQuads(point, null, null, null).map(ShExTerm.internalTriple);
      if (queryTracker) {
        var time = new Date();
        queryTracker.end(outgoing, time - startTime);
        startTime = time;
      }
      if (queryTracker) {
        queryTracker.start(true, point, shapeLabel);
      }
      var incoming = db.getQuads(null, null, point, null).map(ShExTerm.internalTriple);
      if (queryTracker) {
        queryTracker.end(incoming, new Date() - startTime);
      }
      return {
        outgoing: outgoing,
        incoming: incoming
      };
    }

    return {
      // size: db.size,
      getNeighborhood: getNeighborhood,
      getSubjects: getSubjects,
      getPredicates: getPredicates,
      getObjects: getObjects,
      getQuads: getQuads,
      get size() { return db.size; },
      // getQuads: function (s, p, o, graph, shapeLabel) {
      //   // console.log(Error(s + p + o).stack)
      //   if (queryTracker)
      //     queryTracker.start(!!s, s ? s : o, shapeLabel);
      //   var quads = db.getQuads(s, p, o, graph)
      //   if (queryTracker)
      //     queryTracker.end(quads, new Date() - startTime);
      //   return quads;
      // }
    }
  },
  /** emulate N3Store().getQuads() with additional parm.
   */
  makeQueryDB: function (endpoint, queryTracker) {
    var _ShExUtil = this;

    function getQuads(s, p, o, g) {
      return mapQueryToTriples("SELECT " + [
        (s?"":"?s"), (p?"":"?p"), (o?"":"?o"),
        "{",
        (s?s:"?s"), (p?p:"?s"), (o?o:"?s"),
        "}"].join(" "), s, o)
    }

    function mapQueryToTriples (query, s, o) {
      var rows = _ShExUtil.executeQuery(query, endpoint);
      var triples = rows.map(row =>  {
        return s ? {
          subject: s,
          predicate: row[0],
          object: row[1]
        } : {
          subject: row[0],
          predicate: row[1],
          object: o
        };
      });
      return triples;
    }

    function getTripleConstraints (tripleExpr) {
      var visitor = _ShExUtil.Visitor();
      var ret = {
        out: [],
        inc: []
      };
      visitor.visitTripleConstraint = function (expr) {
        ret[expr.inverse ? "inc" : "out"].push(expr);
        return expr;
      };

      if (tripleExpr)
        visitor.visitExpression(tripleExpr);
      return ret;
    }

    function getNeighborhood (point, shapeLabel, shape) {
      // I'm guessing a local DB doesn't benefit from shape optimization.
      var startTime;
      var tcs = getTripleConstraints(shape.expression);
      var pz = tcs.out.map(t => t.predicate);
      pz = pz.filter((p, idx) => pz.lastIndexOf(p) === idx);
      if (queryTracker) {
        startTime = new Date();
        queryTracker.start(false, point, shapeLabel);
      }
      var outgoing = (tcs.out.length > 0 || shape.closed)
          ? mapQueryToTriples(
            shape.closed
              ? `SELECT ?p ?o { <${point}> ?p ?o }`
              : "SELECT ?p ?o {\n" +
              pz.map(
                p => `  {<${point}> <${p}> ?o BIND(<${p}> AS ?p)}`
              ).join(" UNION\n") +
              "\n}",
            point, null
          )
          : [];
      if (queryTracker) {
        var time = new Date();
        queryTracker.end(outgoing, time - startTime);
        startTime = time;
      }
      if (queryTracker) {
        queryTracker.start(true, point, shapeLabel);
      }
      var incoming = tcs.inc.length > 0
          ? mapQueryToTriples(`SELECT ?s ?p { ?s ?p <${point}> }`, null, point)
          : []
      if (queryTracker) {
        queryTracker.end(incoming, new Date() - startTime);
      }
      return  {
        outgoing: outgoing,
        incoming: incoming
      };
    }

    return {
      getNeighborhood: getNeighborhood,
      getQuads: getQuads,
      getSubjects: function () { return ["!Query DB can't index subjects"] },
      getPredicates: function () { return ["!Query DB can't index predicates"] },
      getObjects: function () { return ["!Query DB can't index objects"] },
      get size() { return undefined; }
    };
  },

  /** Directly construct a DB from triples.
   */
  makeTriplesDB: function (queryTracker) {
    var _ShExUtil = this;
    var incoming = [];
    var outgoing = [];

    function getTriplesByIRI(s, p, o, g) {
      return incoming.concat(outgoing).filter(
        t =>
          (!s || s === t.subject) &&
          (!p || p === t.predicate) &&
          (!s || s === t.object)
      );
    }

    function getNeighborhood (point, shapeLabel, shape) {
      return {
        outgoing: outgoing,
        incoming: incoming
      };
    }

    return {
      getNeighborhood: getNeighborhood,
      getTriplesByIRI: getTriplesByIRI,
      getSubjects: function () { return ["!Triples DB can't index subjects"] },
      getPredicates: function () { return ["!Triples DB can't index predicates"] },
      getObjects: function () { return ["!Triples DB can't index objects"] },
      get size() { return undefined; },
      addIncomingTriples: function (tz) { Array.prototype.push.apply(incoming, tz); },
      addOutgoingTriples: function (tz) { Array.prototype.push.apply(outgoing, tz); }
    };
  },

  NotSupplied: "-- not supplied --", UnknownIRI: "-- not found --",

  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  unescapeText: function (string, replacements) {
    var regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        var charCode;
        if (unicode4) {
          charCode = parseInt(unicode4, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          return String.fromCharCode(charCode);
        }
        else if (unicode8) {
          charCode = parseInt(unicode8, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          if (charCode < 0xFFFF) return String.fromCharCode(charCode);
          return String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
        }
        else {
          var replacement = replacements[escapedChar];
          if (!replacement) throw new Error("no replacement found for '" + escapedChar + "'");
          return replacement;
        }
      });
      return string;
    }
    catch (error) { console.warn(error); return ''; }
  },

};

function n3ify (ldterm) {
  if (typeof ldterm !== "object")
    return ldterm;
  var ret = "\"" + ldterm.value + "\"";
  if ("language" in ldterm)
    return ret + "@" + ldterm.language;
  if ("type" in ldterm)
    return ret + "^^" + ldterm.type;
  return ret;
}

// Add the ShExUtil functions to the given object or its prototype
function AddShExUtil(parent, toPrototype) {
  for (var name in ShExUtil)
    if (!toPrototype)
      parent[name] = ShExUtil[name];
    else
      parent.prototype[name] = ApplyToThis(ShExUtil[name]);

  return parent;
}

// Returns a function that applies `f` to the `this` object
function ApplyToThis(f) {
  return function (a) { return f(this, a); };
}

return AddShExUtil(AddShExUtil);
})();

if (true)
  module.exports = ShExUtil; // node environment


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors ||
  function getOwnPropertyDescriptors(obj) {
    var keys = Object.keys(obj);
    var descriptors = {};
    for (var i = 0; i < keys.length; i++) {
      descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
    }
    return descriptors;
  };

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }

  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(42);

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(43);

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;

exports.promisify = function promisify(original) {
  if (typeof original !== 'function')
    throw new TypeError('The "original" argument must be of type Function');

  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn, enumerable: false, writable: false, configurable: true
    });
    return fn;
  }

  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });

    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });

    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }

    return promise;
  }

  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn, enumerable: false, writable: false, configurable: true
  });
  return Object.defineProperties(
    fn,
    getOwnPropertyDescriptors(original)
  );
}

exports.promisify.custom = kCustomPromisifiedSymbol

function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}

function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }

  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }

    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function() {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args)
      .then(function(ret) { process.nextTick(cb, null, ret) },
            function(rej) { process.nextTick(callbackifyOnRejected, rej, cb) });
  }

  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified,
                          getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return N3Lexer; });
/* harmony import */ var _IRIs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var queue_microtask__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(queue_microtask__WEBPACK_IMPORTED_MODULE_1__);
// **N3Lexer** tokenizes N3 documents.



const { xsd } = _IRIs__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"];

// Regular expression and replacement string to escape N3 strings
var escapeSequence = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\([^])/g;
var escapeReplacements = {
  '\\': '\\', "'": "'", '"': '"',
  'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
  '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
  '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
  '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
};
var illegalIriChars = /[\x00-\x20<>\\"\{\}\|\^\`]/;

var lineModeRegExps = {
  _iri: true,
  _unescapedIri: true,
  _simpleQuotedString: true,
  _langcode: true,
  _blank: true,
  _newline: true,
  _comment: true,
  _whitespace: true,
  _endOfFile: true,
};
var invalidRegExp = /$0^/;

// ## Constructor
class N3Lexer {
  constructor(options) {
    // ## Regular expressions
    // It's slightly faster to have these as properties than as in-scope variables
    this._iri = /^<((?:[^ <>{}\\]|\\[uU])+)>[ \t]*/; // IRI with escape sequences; needs sanity check after unescaping
    this._unescapedIri = /^<([^\x00-\x20<>\\"\{\}\|\^\`]*)>[ \t]*/; // IRI without escape sequences; no unescaping
    this._simpleQuotedString = /^"([^"\\\r\n]*)"(?=[^"])/; // string without escape sequences
    this._simpleApostropheString = /^'([^'\\\r\n]*)'(?=[^'])/;
    this._langcode = /^@([a-z]+(?:-[a-z0-9]+)*)(?=[^a-z0-9\-])/i;
    this._prefix = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:(?=[#\s<])/;
    this._prefixed = /^((?:[A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)?:((?:(?:[0-:A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])(?:(?:[\.\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~])*(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff]|%[0-9a-fA-F]{2}|\\[!#-\/;=?\-@_~]))?)?)(?:[ \t]+|(?=\.?[,;!\^\s#()\[\]\{\}"'<>]))/;
    this._variable = /^\?(?:(?:[A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:[\-0-:A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?=[.,;!\^\s#()\[\]\{\}"'<>])/;
    this._blank = /^_:((?:[0-9A-Z_a-z\xc0-\xd6\xd8-\xf6\xf8-\u02ff\u0370-\u037d\u037f-\u1fff\u200c\u200d\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])(?:\.?[\-0-9A-Z_a-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c\u200d\u203f\u2040\u2070-\u218f\u2c00-\u2fef\u3001-\ud7ff\uf900-\ufdcf\ufdf0-\ufffd]|[\ud800-\udb7f][\udc00-\udfff])*)(?:[ \t]+|(?=\.?[,;:\s#()\[\]\{\}"'<>]))/;
    this._number = /^[\-+]?(?:(\d+\.\d*|\.?\d+)[eE][\-+]?|\d*(\.)?)\d+(?=\.?[,;:\s#()\[\]\{\}"'<>])/;
    this._boolean = /^(?:true|false)(?=[.,;\s#()\[\]\{\}"'<>])/;
    this._keyword = /^@[a-z]+(?=[\s#<:])/i;
    this._sparqlKeyword = /^(?:PREFIX|BASE|GRAPH)(?=[\s#<])/i;
    this._shortPredicates = /^a(?=[\s()\[\]\{\}"'<>])/;
    this._newline = /^[ \t]*(?:#[^\n\r]*)?(?:\r\n|\n|\r)[ \t]*/;
    this._comment = /#([^\n\r]*)/;
    this._whitespace = /^[ \t]+/;
    this._endOfFile = /^(?:#[^\n\r]*)?$/;
    options = options || {};

    // In line mode (N-Triples or N-Quads), only simple features may be parsed
    if (this._lineMode = !!options.lineMode) {
      this._n3Mode = false;
      // Don't tokenize special literals
      for (var key in this) {
        if (!(key in lineModeRegExps) && this[key] instanceof RegExp)
          this[key] = invalidRegExp;
      }
    }
    // When not in line mode, enable N3 functionality by default
    else {
      this._n3Mode = options.n3 !== false;
    }
    // Don't output comment tokens by default
    this._comments = !!options.comments;
    // Cache the last tested closing position of long literals
    this._literalClosingPos = 0;
  }

  // ## Private methods

  // ### `_tokenizeToEnd` tokenizes as for as possible, emitting tokens through the callback
  _tokenizeToEnd(callback, inputFinished) {
    // Continue parsing as far as possible; the loop will return eventually
    var input = this._input, outputComments = this._comments;
    while (true) {
      // Count and skip whitespace lines
      var whiteSpaceMatch, comment;
      while (whiteSpaceMatch = this._newline.exec(input)) {
        // Try to find a comment
        if (outputComments && (comment = this._comment.exec(whiteSpaceMatch[0])))
          callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
        // Advance the input
        input = input.substr(whiteSpaceMatch[0].length, input.length);
        this._line++;
      }
      // Skip whitespace on current line
      if (!whiteSpaceMatch && (whiteSpaceMatch = this._whitespace.exec(input)))
        input = input.substr(whiteSpaceMatch[0].length, input.length);

      // Stop for now if we're at the end
      if (this._endOfFile.test(input)) {
        // If the input is finished, emit EOF
        if (inputFinished) {
          // Try to find a final comment
          if (outputComments && (comment = this._comment.exec(input)))
            callback(null, { line: this._line, type: 'comment', value: comment[1], prefix: '' });
          callback(input = null, { line: this._line, type: 'eof', value: '', prefix: '' });
        }
        return this._input = input;
      }

      // Look for specific token types based on the first character
      var line = this._line, type = '', value = '', prefix = '',
          firstChar = input[0], match = null, matchLength = 0, inconclusive = false;
      switch (firstChar) {
      case '^':
        // We need at least 3 tokens lookahead to distinguish ^^<IRI> and ^^pre:fixed
        if (input.length < 3)
          break;
        // Try to match a type
        else if (input[1] === '^') {
          this._previousMarker = '^^';
          // Move to type IRI or prefixed name
          input = input.substr(2);
          if (input[0] !== '<') {
            inconclusive = true;
            break;
          }
        }
        // If no type, it must be a path expression
        else {
          if (this._n3Mode) {
            matchLength = 1;
            type = '^';
          }
          break;
        }
        // Fall through in case the type is an IRI
      case '<':
        // Try to find a full IRI without escape sequences
        if (match = this._unescapedIri.exec(input))
          type = 'IRI', value = match[1];
        // Try to find a full IRI with escape sequences
        else if (match = this._iri.exec(input)) {
          value = this._unescape(match[1]);
          if (value === null || illegalIriChars.test(value))
            return reportSyntaxError(this);
          type = 'IRI';
        }
        // Try to find a nested triple
        else if (input.length > 1 && input[1] === '<')
          type = '<<', matchLength = 2;
        // Try to find a backwards implication arrow
        else if (this._n3Mode && input.length > 1 && input[1] === '=')
          type = 'inverse', matchLength = 2, value = '>';
        break;

      case '>':
        if (input.length > 1 && input[1] === '>')
          type = '>>', matchLength = 2;
        break;

      case '_':
        // Try to find a blank node. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a blank node.
        // Therefore, try inserting a space if we're at the end of the input.
        if ((match = this._blank.exec(input)) ||
            inputFinished && (match = this._blank.exec(input + ' ')))
          type = 'blank', prefix = '_', value = match[1];
        break;

      case '"':
        // Try to find a literal without escape sequences
        if (match = this._simpleQuotedString.exec(input))
          value = match[1];
        // Try to find a literal wrapped in three pairs of quotes
        else {
          ({ value, matchLength } = this._parseLiteral(input));
          if (value === null)
            return reportSyntaxError(this);
        }
        if (match !== null || matchLength !== 0) {
          type = 'literal';
          this._literalClosingPos = 0;
        }
        break;

      case "'":
        if (!this._lineMode) {
          // Try to find a literal without escape sequences
          if (match = this._simpleApostropheString.exec(input))
            value = match[1];
          // Try to find a literal wrapped in three pairs of quotes
          else {
            ({ value, matchLength } = this._parseLiteral(input));
            if (value === null)
              return reportSyntaxError(this);
          }
          if (match !== null || matchLength !== 0) {
            type = 'literal';
            this._literalClosingPos = 0;
          }
        }
        break;

      case '?':
        // Try to find a variable
        if (this._n3Mode && (match = this._variable.exec(input)))
          type = 'var', value = match[0];
        break;

      case '@':
        // Try to find a language code
        if (this._previousMarker === 'literal' && (match = this._langcode.exec(input)))
          type = 'langcode', value = match[1];
        // Try to find a keyword
        else if (match = this._keyword.exec(input))
          type = match[0];
        break;

      case '.':
        // Try to find a dot as punctuation
        if (input.length === 1 ? inputFinished : (input[1] < '0' || input[1] > '9')) {
          type = '.';
          matchLength = 1;
          break;
        }
        // Fall through to numerical case (could be a decimal dot)

      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '+':
      case '-':
        // Try to find a number. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a number.
        // Therefore, try inserting a space if we're at the end of the input.
        if (match = this._number.exec(input) ||
            inputFinished && (match = this._number.exec(input + ' '))) {
          type = 'literal', value = match[0];
          prefix = (typeof match[1] === 'string' ? xsd.double :
                    (typeof match[2] === 'string' ? xsd.decimal : xsd.integer));
        }
        break;

      case 'B':
      case 'b':
      case 'p':
      case 'P':
      case 'G':
      case 'g':
        // Try to find a SPARQL-style keyword
        if (match = this._sparqlKeyword.exec(input))
          type = match[0].toUpperCase();
        else
          inconclusive = true;
        break;

      case 'f':
      case 't':
        // Try to match a boolean
        if (match = this._boolean.exec(input))
          type = 'literal', value = match[0], prefix = xsd.boolean;
        else
          inconclusive = true;
        break;

      case 'a':
        // Try to find an abbreviated predicate
        if (match = this._shortPredicates.exec(input))
          type = 'abbreviation', value = 'a';
        else
          inconclusive = true;
        break;

      case '=':
        // Try to find an implication arrow or equals sign
        if (this._n3Mode && input.length > 1) {
          type = 'abbreviation';
          if (input[1] !== '>')
            matchLength = 1, value = '=';
          else
            matchLength = 2, value = '>';
        }
        break;

      case '!':
        if (!this._n3Mode)
          break;
      case ',':
      case ';':
      case '[':
      case ']':
      case '(':
      case ')':
      case '{':
      case '}':
        if (!this._lineMode) {
          matchLength = 1;
          type = firstChar;
        }
        break;

      default:
        inconclusive = true;
      }

      // Some first characters do not allow an immediate decision, so inspect more
      if (inconclusive) {
        // Try to find a prefix
        if ((this._previousMarker === '@prefix' || this._previousMarker === 'PREFIX') &&
            (match = this._prefix.exec(input)))
          type = 'prefix', value = match[1] || '';
        // Try to find a prefixed name. Since it can contain (but not end with) a dot,
        // we always need a non-dot character before deciding it is a prefixed name.
        // Therefore, try inserting a space if we're at the end of the input.
        else if ((match = this._prefixed.exec(input)) ||
                 inputFinished && (match = this._prefixed.exec(input + ' ')))
          type = 'prefixed', prefix = match[1] || '', value = this._unescape(match[2]);
      }

      // A type token is special: it can only be emitted after an IRI or prefixed name is read
      if (this._previousMarker === '^^') {
        switch (type) {
        case 'prefixed': type = 'type';    break;
        case 'IRI':      type = 'typeIRI'; break;
        default:         type = '';
        }
      }

      // What if nothing of the above was found?
      if (!type) {
        // We could be in streaming mode, and then we just wait for more input to arrive.
        // Otherwise, a syntax error has occurred in the input.
        // One exception: error on an unaccounted linebreak (= not inside a triple-quoted literal).
        if (inputFinished || (!/^'''|^"""/.test(input) && /\n|\r/.test(input)))
          return reportSyntaxError(this);
        else
          return this._input = input;
      }

      // Emit the parsed token
      var token = { line: line, type: type, value: value, prefix: prefix };
      callback(null, token);
      this.previousToken = token;
      this._previousMarker = type;
      // Advance to next part to tokenize
      input = input.substr(matchLength || match[0].length, input.length);
    }

    // Signals the syntax error through the callback
    function reportSyntaxError(self) { callback(self._syntaxError(/^\S*/.exec(input)[0])); }
  }

  // ### `_unescape` replaces N3 escape codes by their corresponding characters
  _unescape(item) {
    let invalid = false;
    const replaced = item.replace(escapeSequence, (sequence, unicode4, unicode8, escapedChar) => {
      // 4-digit unicode character
      if (typeof unicode4 === 'string')
        return String.fromCharCode(Number.parseInt(unicode4, 16));
      // 8-digit unicode character
      if (typeof unicode8 === 'string') {
        let charCode = Number.parseInt(unicode8, 16);
        return charCode <= 0xFFFF ? String.fromCharCode(Number.parseInt(unicode8, 16)) :
          String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
      }
      // fixed escape sequence
      if (escapedChar in escapeReplacements)
        return escapeReplacements[escapedChar];
      // invalid escape sequence
      invalid = true;
      return '';
    });
    return invalid ? null : replaced;
  }

  // ### `_parseLiteral` parses a literal into an unescaped value
  _parseLiteral(input) {
    // Ensure we have enough lookahead to identify triple-quoted strings
    if (input.length >= 3) {
      // Identify the opening quote(s)
      const opening = input.match(/^(?:"""|"|'''|'|)/)[0];
      const openingLength = opening.length;

      // Find the next candidate closing quotes
      let closingPos = Math.max(this._literalClosingPos, openingLength);
      while ((closingPos = input.indexOf(opening, closingPos)) > 0) {
        // Count backslashes right before the closing quotes
        let backslashCount = 0;
        while (input[closingPos - backslashCount - 1] === '\\')
          backslashCount++;

        // An even number of backslashes (in particular 0)
        // means these are actual, non-escaped closing quotes
        if (backslashCount % 2 === 0) {
          // Extract and unescape the value
          const raw = input.substring(openingLength, closingPos);
          const lines = raw.split(/\r\n|\r|\n/).length - 1;
          const matchLength = closingPos + openingLength;
          // Only triple-quoted strings can be multi-line
          if (openingLength === 1 && lines !== 0 ||
              openingLength === 3 && this._lineMode)
            break;
          this._line += lines;
          return { value: this._unescape(raw), matchLength };
        }
        closingPos++;
      }
      this._literalClosingPos = input.length - openingLength + 1;
    }
    return { value: '', matchLength: 0 };
  }

  // ### `_syntaxError` creates a syntax error for the given issue
  _syntaxError(issue) {
    this._input = null;
    var err = new Error('Unexpected "' + issue + '" on line ' + this._line + '.');
    err.context = {
      token: undefined,
      line: this._line,
      previousToken: this.previousToken,
    };
    return err;
  }

  // ## Public methods

  // ### `tokenize` starts the transformation of an N3 document into an array of tokens.
  // The input can be a string or a stream.
  tokenize(input, callback) {
    var self = this;
    this._line = 1;

    // If the input is a string, continuously emit tokens through the callback until the end
    if (typeof input === 'string') {
      this._input = input;
      // If a callback was passed, asynchronously call it
      if (typeof callback === 'function')
        queue_microtask__WEBPACK_IMPORTED_MODULE_1___default()(() => self._tokenizeToEnd(callback, true));
      // If no callback was passed, tokenize synchronously and return
      else {
        var tokens = [], error;
        this._tokenizeToEnd(function (e, t) { e ? (error = e) : tokens.push(t); }, true);
        if (error) throw error;
        return tokens;
      }
    }
    // Otherwise, the input must be a stream
    else {
      this._input = '';
      this._pendingBuffer = null;
      if (typeof input.setEncoding === 'function')
        input.setEncoding('utf8');
      // Adds the data chunk to the buffer and parses as far as possible
      input.on('data', function (data) {
        if (self._input !== null && data.length !== 0) {
          // Prepend any previous pending writes
          if (self._pendingBuffer) {
            data = Buffer.concat([self._pendingBuffer, data]);
            self._pendingBuffer = null;
          }
          // Hold if the buffer ends in an incomplete unicode sequence
          if (data[data.length - 1] & 0x80) {
            self._pendingBuffer = data;
          }
          // Otherwise, tokenize as far as possible
          else {
            self._input += data;
            self._tokenizeToEnd(callback, false);
          }
        }
      });
      // Parses until the end
      input.on('end', function () {
        if (self._input !== null)
          self._tokenizeToEnd(callback, true);
      });
      input.on('error', callback);
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8).Buffer))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(2)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(50)

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function eventListener() {
      if (errorListener !== undefined) {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };
    var errorListener;

    // Adding an error listener is not optional because
    // if an error is thrown on an event emitter we cannot
    // guarantee that the actual event we are waiting will
    // be fired. The result could be a silent way to create
    // memory or file descriptor leaks, which is something
    // we should avoid.
    if (name !== 'error') {
      errorListener = function errorListener(err) {
        emitter.removeListener(name, eventListener);
        reject(err);
      };

      emitter.once('error', errorListener);
    }

    emitter.once(name, eventListener);
  });
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function posix(path) {
	return path.charAt(0) === '/';
}

function win32(path) {
	// https://github.com/nodejs/node/blob/b3fcc245fb25539909ef1d5eaa01dbf92e168633/lib/path.js#L56
	var splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/;
	var result = splitDeviceRe.exec(path);
	var device = result[1] || '';
	var isUnc = Boolean(device && device.charAt(1) !== ':');

	// UNC paths are always absolute
	return Boolean(result[2] || isUnc);
}

module.exports = process.platform === 'win32' ? win32 : posix;
module.exports.posix = posix;
module.exports.win32 = win32;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/end-of-stream with
// permission from the author, Mathias Buus (@mafintosh).


var ERR_STREAM_PREMATURE_CLOSE = __webpack_require__(4).codes.ERR_STREAM_PREMATURE_CLOSE;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    callback.apply(this, args);
  };
}

function noop() {}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function eos(stream, opts, callback) {
  if (typeof opts === 'function') return eos(stream, null, opts);
  if (!opts) opts = {};
  callback = once(callback || noop);
  var readable = opts.readable || opts.readable !== false && stream.readable;
  var writable = opts.writable || opts.writable !== false && stream.writable;

  var onlegacyfinish = function onlegacyfinish() {
    if (!stream.writable) onfinish();
  };

  var writableEnded = stream._writableState && stream._writableState.finished;

  var onfinish = function onfinish() {
    writable = false;
    writableEnded = true;
    if (!readable) callback.call(stream);
  };

  var readableEnded = stream._readableState && stream._readableState.endEmitted;

  var onend = function onend() {
    readable = false;
    readableEnded = true;
    if (!writable) callback.call(stream);
  };

  var onerror = function onerror(err) {
    callback.call(stream, err);
  };

  var onclose = function onclose() {
    var err;

    if (readable && !readableEnded) {
      if (!stream._readableState || !stream._readableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }

    if (writable && !writableEnded) {
      if (!stream._writableState || !stream._writableState.ended) err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream, err);
    }
  };

  var onrequest = function onrequest() {
    stream.req.on('finish', onfinish);
  };

  if (isRequest(stream)) {
    stream.on('complete', onfinish);
    stream.on('abort', onclose);
    if (stream.req) onrequest();else stream.on('request', onrequest);
  } else if (writable && !stream._writableState) {
    // legacy streams
    stream.on('end', onlegacyfinish);
    stream.on('close', onlegacyfinish);
  }

  stream.on('end', onend);
  stream.on('finish', onfinish);
  if (opts.error !== false) stream.on('error', onerror);
  stream.on('close', onclose);
  return function () {
    stream.removeListener('complete', onfinish);
    stream.removeListener('abort', onclose);
    stream.removeListener('request', onrequest);
    if (stream.req) stream.req.removeListener('finish', onfinish);
    stream.removeListener('end', onlegacyfinish);
    stream.removeListener('close', onlegacyfinish);
    stream.removeListener('finish', onfinish);
    stream.removeListener('end', onend);
    stream.removeListener('error', onerror);
    stream.removeListener('close', onclose);
  };
}

module.exports = eos;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * Status: Early implementation
 *
 * TODO:
 *   testing.
 */

var ShapeMapSymbols = (function () {
  return {
    focus: { term: "FOCUS" },
    start: { term: "START" },
    wildcard: { term: "WILDCARD" },
  }
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShapeMapSymbols;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

  function isShapeRef (expr) {
    return typeof expr === "string" // test for JSON-LD @ID
  }
  let isInclusion = isShapeRef;


function ShExVisitor () {
  // function expect (l, r) { var ls = JSON.stringify(l), rs = JSON.stringify(r); if (ls !== rs) throw Error(ls+" !== "+rs); }
  var _ShExUtil = this;
  function visitMap (map, val) {
    var ret = {};
    Object.keys(map).forEach(function (item) {
      ret[item] = val(map[item]);
    });
    return ret;
  }
  var r = {
    runtimeError: function (e) {
      throw e;
    },

    visitSchema: function (schema) {
      var ret = { type: "Schema" };
      _expect(schema, "type", "Schema");
      this._maybeSet(schema, ret, "Schema",
                     ["@context", "prefixes", "base", "imports", "startActs", "start", "shapes"],
                     ["_base", "_prefixes", "_index", "_sourceMap"]
                    );
      return ret;
    },

    visitPrefixes: function (prefixes) {
      return prefixes === undefined ?
        undefined :
        visitMap(prefixes, function (val) {
          return val;
        });
    },

    visitIRI: function (i) {
      return i;
    },

    visitImports: function (imports) {
      var _Visitor = this;
      return imports.map(function (imp) {
        return _Visitor.visitIRI(imp);
      });
    },

    visitStartActs: function (startActs) {
      var _Visitor = this;
      return startActs === undefined ?
        undefined :
        startActs.map(function (act) {
          return _Visitor.visitSemAct(act);
        });
    },
    visitSemActs: function (semActs) {
      var _Visitor = this;
      if (semActs === undefined)
        return undefined;
      var ret = []
      Object.keys(semActs).forEach(function (label) {
        ret.push(_Visitor.visitSemAct(semActs[label], label));
      });
      return ret;
    },
    visitSemAct: function (semAct, label) {
      var ret = { type: "SemAct" };
      _expect(semAct, "type", "SemAct");

      this._maybeSet(semAct, ret, "SemAct",
                     ["name", "code"]);
      return ret;
    },

    visitShapes: function (shapes) {
      var _Visitor = this;
      if (shapes === undefined)
        return undefined;
      return shapes.map(
        shapeExpr =>
          _Visitor.visitShapeDecl(shapeExpr)
      );
    },

    visitProductions999: function (productions) { // !! DELETE
      var _Visitor = this;
      if (productions === undefined)
        return undefined;
      var ret = {}
      Object.keys(productions).forEach(function (label) {
        ret[label] = _Visitor.visitExpression(productions[label], label);
      });
      return ret;
    },

    visitShapeDecl: function (decl, label) {
      return decl.type === "ShapeDecl" ?
        this._maybeSet(decl, { type: "ShapeDecl" }, "ShapeDecl",
                       ["id", "abstract", "restricts", "shapeExpr"]) :
        this.visitShapeExpr(decl, label);
    },

    visitShapeExpr: function (expr, label) {
      if (isShapeRef(expr))
        return this.visitShapeRef(expr)
      var r =
          expr.type === "Shape" ? this.visitShape(expr, label) :
          expr.type === "NodeConstraint" ? this.visitNodeConstraint(expr, label) :
          expr.type === "ShapeAnd" ? this.visitShapeAnd(expr, label) :
          expr.type === "ShapeOr" ? this.visitShapeOr(expr, label) :
          expr.type === "ShapeNot" ? this.visitShapeNot(expr, label) :
          expr.type === "ShapeExternal" ? this.visitShapeExternal(expr) :
          null;// if (expr.type === "ShapeRef") r = 0; // console.warn("visitShapeExpr:", r);
      if (r === null)
        throw Error("unexpected shapeExpr type: " + expr.type);
      else
        return r;
    },

    // _visitShapeGroup: visit a grouping expression (shapeAnd, shapeOr)
    _visitShapeGroup: function (expr, label) {
      this._testUnknownAttributes(expr, ["id", "shapeExprs"], expr.type, this.visitShapeNot)
      var _Visitor = this;
      var r = { type: expr.type };
      if ("id" in expr)
        r.id = expr.id;
      r.shapeExprs = expr.shapeExprs.map(function (nested) {
        return _Visitor.visitShapeExpr(nested, label);
      });
      return r;
    },

    // _visitShapeNot: visit negated shape
    visitShapeNot: function (expr, label) {
      this._testUnknownAttributes(expr, ["id", "shapeExpr"], "ShapeNot", this.visitShapeNot)
      var r = { type: expr.type };
      if ("id" in expr)
        r.id = expr.id;
      r.shapeExpr = this.visitShapeExpr(expr.shapeExpr, label);
      return r;
    },

    // ### `visitNodeConstraint` deep-copies the structure of a shape
    visitShape: function (shape, label) {
      var ret = { type: "Shape" };
      _expect(shape, "type", "Shape");

      this._maybeSet(shape, ret, "Shape",
                     [ "id",
                       "abstract", "extends",
                       "closed",
                       "expression", "extra", "semActs", "annotations"]);
      return ret;
    },

    _visitShapeExprList: function (ext) {
      var _Visitor = this;
      return ext.map(function (t) {
        return _Visitor.visitShapeExpr(t, undefined);
      });
    },

    // ### `visitNodeConstraint` deep-copies the structure of a shape
    visitNodeConstraint: function (shape, label) {
      var ret = { type: "NodeConstraint" };
      _expect(shape, "type", "NodeConstraint");

      this._maybeSet(shape, ret, "NodeConstraint",
                     [ "id",
                       // "abstract", "extends", "restricts", -- futureWork
                       "nodeKind", "datatype", "pattern", "flags", "length",
                       "reference", "minlength", "maxlength",
                       "mininclusive", "minexclusive", "maxinclusive", "maxexclusive",
                       "totaldigits", "fractiondigits", "values", "annotations", "semActs"]);
      return ret;
    },

    visitShapeRef: function (reference) {
      if (typeof reference !== "string") {
        let ex = Exception("visitShapeRef expected a string, not " + JSON.stringify(reference));
        console.warn(ex);
        throw ex;
      }
      return reference;
    },

    visitShapeExternal: function (expr) {
      this._testUnknownAttributes(expr, ["id"], "ShapeExternal", this.visitShapeNot)
      return Object.assign("id" in expr ? { id: expr.id } : {}, { type: "ShapeExternal" });
    },

    // _visitGroup: visit a grouping expression (someOf or eachOf)
    _visitGroup: function (expr, type) {
      var _Visitor = this;
      var r = Object.assign(
        // pre-declare an id so it sorts to the top
        "id" in expr ? { id: null } : { },
        { type: expr.type }
      );
      r.expressions = expr.expressions.map(function (nested) {
        return _Visitor.visitExpression(nested);
      });
      return this._maybeSet(expr, r, "expr",
                            ["id", "min", "max", "annotations", "semActs"], ["expressions"]);
    },

    visitTripleConstraint: function (expr) {
      return this._maybeSet(expr,
                            Object.assign(
                              // pre-declare an id so it sorts to the top
                              "id" in expr ? { id: null } : { },
                              { type: "TripleConstraint" }
                            ),
                            "TripleConstraint",
                            ["id", "inverse", "predicate", "valueExpr",
                             "min", "max", "annotations", "semActs"])
    },

    visitExpression: function (expr) {
      if (typeof expr === "string")
        return this.visitInclusion(expr);
      var r = expr.type === "TripleConstraint" ? this.visitTripleConstraint(expr) :
          expr.type === "OneOf" ? this.visitOneOf(expr) :
          expr.type === "EachOf" ? this.visitEachOf(expr) :
          null;
      if (r === null)
        throw Error("unexpected expression type: " + expr.type);
      else
        return r;
    },

    visitValues: function (values) {
      var _Visitor = this;
      return values.map(function (t) {
        return isTerm(t) || t.type === "Language" ?
          t :
          _Visitor.visitStemRange(t);
      });
    },

    visitStemRange: function (t) {
      var _Visitor = this; // console.log(Error(t.type).stack);
      // _expect(t, "type", "IriStemRange");
      if (!("type" in t))
        _Visitor.runtimeError(Error("expected "+JSON.stringify(t)+" to have a 'type' attribute."));
      var stemRangeTypes = ["IriStem", "LiteralStem", "LanguageStem", "IriStemRange", "LiteralStemRange", "LanguageStemRange"];
      if (stemRangeTypes.indexOf(t.type) === -1)
        _Visitor.runtimeError(Error("expected type attribute '"+t.type+"' to be in '"+stemRangeTypes+"'."));
      var stem;
      if (isTerm(t)) {
        _expect(t.stem, "type", "Wildcard");
        stem = { type: t.type, stem: { type: "Wildcard" } };
      } else {
        stem = { type: t.type, stem: t.stem };
      }
      if (t.exclusions) {
        stem.exclusions = t.exclusions.map(function (c) {
          return _Visitor.visitExclusion(c);
        });
      }
      return stem;
    },

    visitExclusion: function (c) {
      if (!isTerm(c)) {
        // _expect(c, "type", "IriStem");
        if (!("type" in c))
          _Visitor.runtimeError(Error("expected "+JSON.stringify(c)+" to have a 'type' attribute."));
        var stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
        if (stemTypes.indexOf(c.type) === -1)
          _Visitor.runtimeError(Error("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'."));
        return { type: c.type, stem: c.stem };
      } else {
        return c;
      }
    },

    visitInclusion: function (inclusion) {
      if (typeof inclusion !== "string") {
        let ex = Exception("visitInclusion expected a string, not " + JSON.stringify(inclusion));
        console.warn(ex);
        throw ex;
      }
      return inclusion;
    },

    _maybeSet: function (obj, ret, context, members, ignore) {
      var _Visitor = this;
      this._testUnknownAttributes(obj, ignore ? members.concat(ignore) : members, context, this._maybeSet)
      members.forEach(function (member) {
        var methodName = "visit" + member.charAt(0).toUpperCase() + member.slice(1);
        if (member in obj) {
          var f = _Visitor[methodName];
          if (typeof f !== "function") {
            throw Error(methodName + " not found in Visitor");
          }
          var t = f.call(_Visitor, obj[member]);
          if (t !== undefined) {
            ret[member] = t;
          }
        }
      });
      return ret;
    },
    _visitValue: function (v) {
      return v;
    },
    _visitList: function (l) {
      return l.slice();
    },
    _testUnknownAttributes: function (obj, expected, context, captureFrame) {
      var unknownMembers = Object.keys(obj).reduce(function (ret, k) {
        return k !== "type" && expected.indexOf(k) === -1 ? ret.concat(k) : ret;
      }, []);
      if (unknownMembers.length > 0) {
        var e = Error("unknown propert" + (unknownMembers.length > 1 ? "ies" : "y") + ": " +
                      unknownMembers.map(function (p) {
                        return "\"" + p + "\"";
                      }).join(",") +
                      " in " + context + ": " + JSON.stringify(obj));
        Error.captureStackTrace(e, captureFrame);
        throw e;
      }
    }

  };
  r.visitBase = r.visitStart = r.visitVirtual = r.visitClosed = r["visit@context"] = r._visitValue;
  r.visitRestricts = r.visitExtends = r._visitShapeExprList;
  r.visitExtra = r.visitAnnotations = r._visitList;
  r.visitAbstract = r.visitInverse = r.visitPredicate = r._visitValue;
  r.visitName = r.visitId = r.visitCode = r.visitMin = r.visitMax = r._visitValue;

  r.visitType = r.visitNodeKind = r.visitDatatype = r.visitPattern = r.visitFlags = r.visitLength = r.visitMinlength = r.visitMaxlength = r.visitMininclusive = r.visitMinexclusive = r.visitMaxinclusive = r.visitMaxexclusive = r.visitTotaldigits = r.visitFractiondigits = r._visitValue;
  r.visitOneOf = r.visitEachOf = r._visitGroup;
  r.visitShapeAnd = r.visitShapeOr = r._visitShapeGroup;
  r.visitInclude = r._visitValue;
  r.visitValueExpr = r.visitShapeExpr;
  return r;

  // Expect property p with value v in object o
  function _expect (o, p, v) {
    if (!(p in o))
      this._error("expected "+JSON.stringify(o)+" to have a ."+p);
    if (arguments.length > 2 && o[p] !== v)
      this._error("expected "+o[o]+" to equal ."+v);
  }

  function _error (str) {
    throw new Error(str);
  }
}

// The ShEx Vistor is here to minimize deps for ShExValidator.
/** create indexes for schema
 */
ShExVisitor.index = function (schema) {
  let index = {
    shapeExprs: {},
    tripleExprs: {}
  };
  let v = ShExVisitor();

  let oldVisitExpression = v.visitExpression;
  v.visitExpression = function (expression) {
    if (typeof expression === "object" && "id" in expression)
      index.tripleExprs[expression.id] = expression;
    return oldVisitExpression.call(v, expression);
  };

  let oldVisitShapeExpr = v.visitShapeExpr;
  v.visitShapeExpr = v.visitValueExpr = function (shapeExpr, label) {
    if (typeof shapeExpr === "object" && "id" in shapeExpr)
      index.shapeExprs[shapeExpr.id] = shapeExpr;
    return oldVisitShapeExpr.call(v, shapeExpr, label);
  };

  let oldVisitShapeDecl = v.visitShapeDecl;
  v.visitShapeDecl = v.visitValueExpr = function (shapeExpr, label) {
    if (typeof shapeExpr === "object" && "id" in shapeExpr)
      index.shapeExprs[shapeExpr.id] = shapeExpr;
    return oldVisitShapeDecl.call(v, shapeExpr, label);
  };

  v.visitSchema(schema);
  return index;
}

if (true)
  module.exports = ShExVisitor;



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExWriter** writes ShEx documents.

var ShExWriter = (function () {
var util = __webpack_require__(12);
var UNBOUNDED = -1;

// Matches a literal as represented in memory by the ShEx library
var ShExLiteralMatcher = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i;

// rdf:type predicate (for 'a' abbreviation)
var RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
var ESCAPE_1 = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    ESCAPE_g = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    ESCAPE_replacements = { '\\': '\\\\', '"': '\\"', '/': '\\/', '\t': '\\t',
                            '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f' };

var nodeKinds = {
  'iri': "IRI",
  'bnode': "BNODE",
  'literal': "LITERAL",
  'nonliteral': "NONLITERAL"
};
var nonLitNodeKinds = {
  'iri': "IRI",
  'bnode': "BNODE",
  'literal': "LITERAL",
  'nonliteral': "NONLITERAL"
};

// ## Constructor
function ShExWriter (outputStream, options) {
  if (!(this instanceof ShExWriter))
    return new ShExWriter(outputStream, options);

  // Shift arguments if the first argument is not a stream
  if (outputStream && typeof outputStream.write !== 'function')
    options = outputStream, outputStream = null;
  options = options || {};

  // If no output stream given, send the output as string through the end callback
  if (!outputStream) {
    var output = '';
    this._outputStream = {
      write: function (chunk, encoding, done) { output += chunk; done && done(); },
      end:   function (done) { done && done(null, output); },
    };
    this._endStream = true;
  }
  else {
    this._outputStream = outputStream;
    this._endStream = options.end === undefined ? true : !!options.end;
  }

  // Initialize writer, depending on the format
  this._prefixIRIs = Object.create(null);
  options.prefixes && this.addPrefixes(options.prefixes);

  this._error = options.error || _throwError;
  this.forceParens = !options.simplifyParentheses; // default to false
  this._expect = options.lax ? noop : expect;
}

ShExWriter.prototype = {
  // ## Private methods

  // ### `_write` writes the argument to the output stream
  _write: function (string, callback) {
    this._outputStream.write(string, 'utf8', callback);
  },

  // ### `_writeSchema` writes the shape to the output stream
  _writeSchema: function (schema, done) {
    var _ShExWriter = this;
    this._expect(schema, "type", "Schema");
    _ShExWriter.addPrefixes(schema.prefixes);
    if (schema.base)
      _ShExWriter._write("BASE " + this._encodeIriOrBlankNode(schema.base) + "\n");

    if (schema.imports)
      schema.imports.forEach(function (imp) {
        _ShExWriter._write("IMPORT " + _ShExWriter._encodeIriOrBlankNode(imp) + "\n");
      });
    if (schema.startActs)
      schema.startActs.forEach(function (act) {
        _ShExWriter._expect(act, "type", "SemAct");
        _ShExWriter._write(" %"+
                           _ShExWriter._encodePredicate(act.name)+
                           ("code" in act ? "{"+escapeCode(act.code)+"%"+"}" : "%"));
      });
    if (schema.start)
      _ShExWriter._write("start = " + _ShExWriter._writeShapeExpr(schema.start, done, true, 0).join('') + "\n")
    if ("shapes" in schema)
      schema.shapes.forEach(function (shapeExpr) {
        let id = shapeExpr.id;
        var abstract = "";
        if (shapeExpr.type === "ShapeDecl") {
          if (shapeExpr.abstract)
            abstract = "abstract "
          shapeExpr = shapeExpr.shapeExpr;
        }
        _ShExWriter._write(
          abstract +
          _ShExWriter._encodeShapeName(id, false) +
            " " +
            _ShExWriter._writeShapeExpr(shapeExpr, done, true, 0).join("")+"\n",
          done
        );
      })
  },

  _writeShapeExpr: function (shapeExpr, done, forceBraces, parentPrec) {
    var _ShExWriter = this;
    var pieces = [];
    if (typeof shapeExpr === "string") // ShapeRef
      pieces.push("@", _ShExWriter._encodeShapeName(shapeExpr));
    // !!! []s for precedence!
    else if (shapeExpr.type === "ShapeDecl")
      pieces.push(_ShExWriter._writeShapeExpr(shapeExpr.shapeExpr, done, false, 3));
    else if (shapeExpr.type === "ShapeExternal")
      pieces.push("EXTERNAL");
    else if (shapeExpr.type === "ShapeAnd") {
      if (parentPrec >= 3)
        pieces.push("(");
      var lastAndElided = false;
      shapeExpr.shapeExprs.forEach(function (expr, ord) {
        if (ord > 0) { // && !!! grammar rules too weird here
          /*
            shapeAtom:
                  nonLitNodeConstraint shapeOrRef?
                | shapeDecl nonLitNodeConstraint?

            nonLitInlineNodeConstraint:
                  nonLiteralKind stringFacet*
          */
          function nonLitNodeConstraint (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type !== "NodeConstraint"
              || ("nodeKind" in c && c.nodeKind === "literal")
              || "datatype" in c
              || "values" in c
              ? false
              : true;
          }

          function shapeOrRef (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type === "Shape" || c.type === "ShapeRef";
          }

          function shapeDecl (idx) {
            let c = shapeExpr.shapeExprs[idx];
            return c.type === "Shape";
          }

          let elideAnd = !lastAndElided
              && (nonLitNodeConstraint(ord-1) && shapeOrRef(ord)
                  || shapeDecl(ord-1) && nonLitNodeConstraint(ord))
          if (!elideAnd) {
            pieces.push(" AND ");
          }
          lastAndElided = elideAnd;
        }
        pieces = pieces.concat(_ShExWriter._writeShapeExpr(expr, done, false, 3));
      });
      if (parentPrec >= 3)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeOr") {
      if (parentPrec >= 2)
        pieces.push("(");
      shapeExpr.shapeExprs.forEach(function (expr, ord) {
        if (ord > 0)
          pieces.push(" OR ");
        pieces = pieces.concat(_ShExWriter._writeShapeExpr(expr, done, forceBraces, 2));
      });
      if (parentPrec >= 2)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeNot") {
      if (parentPrec >= 4)
        pieces.push("(");
      pieces.push("NOT ");
      pieces = pieces.concat(_ShExWriter._writeShapeExpr(shapeExpr.shapeExpr, done, forceBraces, 4));
      if (parentPrec >= 4)
        pieces.push(")");
    } else if (shapeExpr.type === "Shape") {
      pieces = pieces.concat(_ShExWriter._writeShape(shapeExpr, done, forceBraces));
    } else if (shapeExpr.type === "NodeConstraint") {
      pieces = pieces.concat(_ShExWriter._writeNodeConstraint(shapeExpr, done, forceBraces));
    } else
      throw Error("expected Shape{,And,Or,Ref} or NodeConstraint in " + util.inspect(shapeExpr));
    return pieces;
  },

  // ### `_writeShape` writes the shape to the output stream
  _writeShape: function (shape, done, forceBraces) {
    var _ShExWriter = this;
    try {
      var pieces = []; // guessing push/join is faster than concat
      this._expect(shape, "type", "Shape");

      if (shape.closed) pieces.push("CLOSED ");

      [{keyword: "extends", marker: "&"}].forEach(pair => {
         // pieces = pieces.concat(_ShExWriter._writeShapeExpr(expr.valueExpr, done, true, 0));
         if (shape[pair.keyword] && shape[pair.keyword].length > 0) {
           shape[pair.keyword].forEach(function (i, ord) {
             if (ord)
               pieces.push(" ")
             pieces.push(pair.marker);
             pieces = pieces.concat(_ShExWriter._writeShapeExpr(i, done, true, 0));
           });
           pieces.push(" ");
         }
       });

      if (shape.extra && shape.extra.length > 0) {
        pieces.push("EXTRA ");
        shape.extra.forEach(function (i, ord) {
          pieces.push(_ShExWriter._encodeShapeName(i, false)+" ");
        });
        pieces.push(" ");
      }
      var empties = ["values", "length", "minlength", "maxlength", "pattern", "flags"];
      pieces.push("{\n");

      function _writeShapeActions (semActs) {
        if (!semActs)
          return;

        semActs.forEach(function (act) {
          _ShExWriter._expect(act, "type", "SemAct");
          pieces.push(" %",
                      _ShExWriter._encodePredicate(act.name),
                      ("code" in act ? "{"+escapeCode(act.code)+"%"+"}" : "%"));
        });
      }

      function _writeCardinality (min, max) {
        if      (min === 0 && max === 1)         pieces.push("?");
        else if (min === 0 && max === UNBOUNDED) pieces.push("*");
        else if (min === undefined && max === undefined)                         ;
        else if (min === 1 && max === UNBOUNDED) pieces.push("+");
        else
          pieces.push("{", min, ",", (max === UNBOUNDED ? "*" : max), "}"); // by coincidence, both use the same character.
      }

      function _writeExpression (expr, indent, parentPrecedence) {
        function _writeScopedShapeExpression (scopedShapeExpr) {
          if (scopedShapeExpr) {
            pieces.push(" ON SHAPE EXPRESSION\n");
            pieces = pieces.concat(
              _ShExWriter._writeShapeExpr(scopedShapeExpr, done, true, 0).map(
                line => indent + "    " + line
              )
            )
          }
        }

        function _writeExpressionActions (semActs) {
          if (semActs) {

            semActs.forEach(function (act) {
              _ShExWriter._expect(act, "type", "SemAct");
              pieces.push("\n"+indent+"   %");
              pieces.push(_ShExWriter._encodeValue(act.name));
              if ("code" in act)
                pieces.push("{"+escapeCode(act.code)+"%"+"}");
              else
                pieces.push("%");
            });
          }
        }

        function _exprGroup (exprs, separator, precedence, forceParens) {
          var needsParens = precedence < parentPrecedence || forceParens;
          if (needsParens) {
            pieces.push("(");
          }
          exprs.forEach(function (nested, ord) {
            _writeExpression(nested, indent+"  ", precedence)
            if (ord < exprs.length - 1)
              pieces.push(separator);
          });
          if (needsParens) {
            pieces.push(")");
          }
        }

        if (typeof expr === "string") {
          pieces.push("&");
          pieces.push(_ShExWriter._encodeShapeName(expr, false));
        } else {

        if ("id" in expr) {
          pieces.push("$");
          pieces.push(_ShExWriter._encodeIriOrBlankNode(expr.id, true));
        }

        if (expr.type === "TripleConstraint") {
          if (expr.inverse)
            pieces.push("^");
          if (expr.negated)
            pieces.push("!");
          pieces.push(indent,
                      _ShExWriter._encodePredicate(expr.predicate),
                      " ");

          if ("valueExpr" in expr)
            pieces = pieces.concat(_ShExWriter._writeShapeExpr(expr.valueExpr, done, true, 0));
          else
            pieces.push(". ");

          _writeCardinality(expr.min, expr.max);
          _writeScopedShapeExpression(expr.onShapeExpression);
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "OneOf") {
          var needsParens = "id" in expr || "min" in expr || "max" in expr || "onShapeExpression" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, "\n"+indent+"| ", 1, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _writeScopedShapeExpression(expr.onShapeExpression);
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "EachOf") {
          var needsParens = "id" in expr || "min" in expr || "max" in expr || "onShapeExpression" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, ";\n"+indent, 2, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _writeScopedShapeExpression(expr.onShapeExpression);
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else throw Error("unexpected expr type: " + expr.type);
        }
      }

      if (shape.expression) // t: 0, 0Extend1
        _writeExpression(shape.expression, "  ", 0);
      pieces.push("\n}");
      _writeShapeActions(shape.semActs);
      _ShExWriter._annotations(pieces, shape.annotations, "  ");

      return pieces;
    }
    catch (error) { done && done(error); }
  },

  // ### `_writeShape` writes the shape to the output stream
  _writeNodeConstraint: function (v, done) {
    var _ShExWriter = this;
    try {
      _ShExWriter._expect(v, "type", "NodeConstraint");

      var pieces = [];
      if (v.nodeKind in nodeKinds)       pieces.push(nodeKinds[v.nodeKind], " ");
      else if (v.nodeKind !== undefined) _ShExWriter._error("unexpected nodeKind: " + v.nodeKind); // !!!!

      this._fillNodeConstraint(pieces, v, done);
      this._annotations(pieces, v.annotations, "  ");
      return pieces;
    }
    catch (error) { done && done(error); }

  },

  _annotations: function (pieces, annotations, indent) {
    var _ShExWriter = this;
    if (annotations) {
      annotations.forEach(function (a) {
        _ShExWriter._expect(a, "type", "Annotation");
        pieces.push("//\n"+indent+"   ");
        pieces.push(_ShExWriter._encodeValue(a.predicate));
        pieces.push(" ");
        pieces.push(_ShExWriter._encodeValue(a.object));
      });
    }
  },

  _fillNodeConstraint: function (pieces, v, done) {
    var _ShExWriter = this;
    if (v.datatype  && v.values  ) _ShExWriter._error("found both datatype and values in "   +expr);
    if (v.datatype) {
      pieces.push(_ShExWriter._encodeShapeName(v.datatype));
    }

    if (v.values) {
      pieces.push("[");

      v.values.forEach(function (t, ord) {
        if (ord > 0)
          pieces.push(" ");

        if (!isTerm(t)) {
//          expect(t, "type", "IriStemRange");
              if (!("type" in t))
                runtimeError("expected "+JSON.stringify(t)+" to have a 'type' attribute.");
          var stemRangeTypes = ["Language", "IriStem", "LiteralStem", "LanguageStem", "IriStemRange", "LiteralStemRange", "LanguageStemRange"];
              if (stemRangeTypes.indexOf(t.type) === -1)
                runtimeError("expected type attribute '"+t.type+"' to be in '"+stemRangeTypes+"'.");
          if (t.type === "Language") {
            pieces.push("@" + t.languageTag);
          } else if (!isTerm(t.stem)) {
            expect(t.stem, "type", "Wildcard");
            pieces.push(".");
          } else {
            pieces.push(langOrLiteral(t, t.stem) + "~");
          }
          if (t.exclusions) {
            t.exclusions.forEach(function (c) {
              pieces.push(" - ");
              if (!isTerm(c)) {
//                expect(c, "type", "IriStem");
                    if (!("type" in c))
                      runtimeError("expected "+JSON.stringify(c)+" to have a 'type' attribute.");
                    var stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
                    if (stemTypes.indexOf(c.type) === -1)
                      runtimeError("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'.");
                pieces.push(langOrLiteral(t, c.stem) + "~");
              } else {
                pieces.push(langOrLiteral(t, c));
              }
            });
          }
          function langOrLiteral (t, c) {
            return ["LanguageStem", "LanguageStemRange"].indexOf(t.type) !== -1 ? "@" + c :
              ["LiteralStem", "LiteralStemRange"].indexOf(t.type) !== -1 ? '"' + c.replace(ESCAPE_g, c) + '"' :
              _ShExWriter._encodeValue(c)
          }
        } else {
          pieces.push(_ShExWriter._encodeValue(t));
        }
      });

      pieces.push("]");
    }

    if ('pattern' in v) {
      var pattern = v.pattern.
          replace(/\//g, "\\/");
      // if (ESCAPE_1.test(pattern))
      //   pattern = pattern.replace(ESCAPE_g, characterReplacer);
      var flags = 'flags' in v ? v.flags : "";
      pieces.push("/" + pattern + "/" + flags + " ");
    }
    ['length', 'minlength', 'maxlength',
     'mininclusive', 'minexclusive', 'maxinclusive', 'maxexclusive',
     'totaldigits', 'fractiondigits'
    ].forEach(function (a) {
      if (v[a])
        pieces.push(" ", a, " ", v[a]);
    });
    return pieces;

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }
  },

  // ### `_encodeIriOrBlankNode` represents an IRI or blank node
  _encodeIriOrBlankNode: function (iri, trailingSpace) {
    trailingSpace = trailingSpace ? ' ' : '';
    // A blank node is represented as-is
    if (iri[0] === '_' && iri[1] === ':') return iri;
    // Escape special characters
    if (ESCAPE_1.test(iri))
      iri = iri.replace(ESCAPE_g, characterReplacer);
    // Try to represent the IRI as prefixed name
    var prefixMatch = this._prefixRegex.exec(iri);
    return !prefixMatch ? '<' + iri + '>' :
           (!prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2]) + trailingSpace;
  },

  // ### `_encodeLiteral` represents a literal
  _encodeLiteral: function (value, type, language) {
    // Escape special characters
    if (ESCAPE_1.test(value))
      value = value.replace(ESCAPE_g, characterReplacer);
    // Write the literal, possibly with type or language
    if (language)
      return '"' + value + '"@' + language;
    else if (type)
      return '"' + value + '"^^' + this._encodeIriOrBlankNode(type);
    else
      return '"' + value + '"';
  },

  // ### `_encodeShapeName` represents a subject
  _encodeShapeName: function (subject, trailingSpace) {
    if (subject[0] === '"')
      throw new Error('A literal as subject is not allowed: ' + subject);
    return this._encodeIriOrBlankNode(subject, trailingSpace);
  },

  // ### `_encodePredicate` represents a predicate
  _encodePredicate: function (predicate) {
    if (predicate[0] === '"')
      throw new Error('A literal as predicate is not allowed: ' + predicate);
    return predicate === RDF_TYPE ? 'a' : this._encodeIriOrBlankNode(predicate);
  },

  // ### `_encodeValue` represents an object
  _encodeValue: function (object) {
    // Represent an IRI or blank node
    if (typeof object !== "object")
      return this._encodeIriOrBlankNode(object);
    // Represent a literal
    return this._encodeLiteral(object.value, object.type, object.language);
  },

  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite: function () {
    throw new Error('Cannot write because the writer has been closed.');
  },

  writeSchema: function (shape, done) {
    this._writeSchema(shape, done);
    this.end(done);
  },

  // ### `addShape` adds the shape to the output stream
  addShape: function (shape, name, done) {
    this._write(
      _ShExWriter._encodeShapeName(name, false) +
        " " +
        _ShExWriter._writeShapeExpr(shape, done, true, 0).join(""),
      done
    );
  },

  // ### `addShapes` adds the shapes to the output stream
  addShapes: function (shapes) {
    for (var i = 0; i < shapes.length; i++)
      this.addShape(shapes[i]);
  },

  // ### `addPrefix` adds the prefix to the output stream
  addPrefix: function (prefix, iri, done) {
    var prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  },

  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes: function (prefixes, done) {
    // Add all useful prefixes
    var prefixIRIs = this._prefixIRIs, hasPrefixes = false;
    for (var prefix in prefixes) {
      // Verify whether the prefix can be used and does not exist yet
      var iri = prefixes[prefix];
      if (// @@ /[#\/]$/.test(iri) && !! what was that?
          prefixIRIs[iri] !== (prefix += ':')) {
        hasPrefixes = true;
        prefixIRIs[iri] = prefix;
        // Write prefix
        this._write('PREFIX ' + prefix + ' <' + iri + '>\n');
      }
    }
    // Recreate the prefix matcher
    if (hasPrefixes) {
      var IRIlist = '', prefixList = '';
      for (var prefixIRI in prefixIRIs) {
        IRIlist += IRIlist ? '|' + prefixIRI : prefixIRI;
        prefixList += (prefixList ? '|' : '') + prefixIRIs[prefixIRI];
      }
      IRIlist = IRIlist.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
      this._prefixRegex = new RegExp('^(?:' + prefixList + ')[^\/]*$|' +
                                     '^(' + IRIlist + ')([a-zA-Z][\\-_a-zA-Z0-9]*)$');
    }
    // End a prefix block with a newline
    this._write(hasPrefixes ? '\n' : '', done);
  },

  // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
  _prefixRegex: /$0^/,

  // ### `end` signals the end of the output stream
  end: function (done) {
    // Disallow further writing
    this._write = this._blockedWrite;

    // Try to end the underlying stream, ensuring done is called exactly one time
    var singleDone = done && function (error, result) { singleDone = null, done(error, result); };
    if (this._endStream) {
      try { return this._outputStream.end(singleDone); }
      catch (error) { /* error closing stream */ }
    }
    singleDone && singleDone();
  },
};

// Replaces a character by its escaped version
function characterReplacer(character) {
  // Replace a single character by its escaped version
  var result = ESCAPE_replacements[character];
  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    }
    // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
      result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                 character.charCodeAt(1) + 0x2400).toString(16);
      result = '\\U00000000'.substr(0, 10 - result.length) + result;
    }
  }
  return result;
}

function escapeCode (code) {
  return code.replace(/\\/g, "\\\\").replace(/%/g, "\\%")
}

/** _throwError: overridable function to throw Errors().
 *
 * @param func (optional): function at which to truncate stack trace
 * @param str: error message
 */
function _throwError (func, str) {
  if (typeof func !== "function") {
    str = func;
    func = _throwError;
  }
  var e = new Error(str);
  Error.captureStackTrace(e, func);
  throw e;
}

// Expect property p with value v in object o
function expect (o, p, v) {
  if (!(p in o))
    this._error(expect, "expected "+o+" to have a ."+p);
  if (arguments.length > 2 && o[p] !== v)
    this._error(expect, "expected "+o[o]+" to equal ."+v);
}

// The empty function
function noop () {}

return ShExWriter;
})();

// Export the `ShExWriter` class as a whole.
if (true)
  module.exports = ShExWriter; // node environment


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var ShExParser = (function () {

// stolen as much as possible from SPARQL.js
if (true) {
  ShExJison = __webpack_require__(48).Parser; // node environment
} else {}

// Creates a ShEx parser with the given pre-defined prefixes
var prepareParser = function (baseIRI, prefixes, schemaOptions) {
  schemaOptions = schemaOptions || {};
  // Create a copy of the prefixes
  var prefixesCopy = {};
  for (var prefix in prefixes || {})
    prefixesCopy[prefix] = prefixes[prefix];

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  var parser = new ShExJison();

  function runParser () {
    // ShExJison.base = baseIRI || "";
    // ShExJison.basePath = ShExJison.base.replace(/[^\/]*$/, '');
    // ShExJison.baseRoot = ShExJison.base.match(/^(?:[a-z]+:\/*)?[^\/]*/)[0];
    ShExJison._prefixes = Object.create(prefixesCopy);
    ShExJison._imports = [];
    ShExJison._setBase(baseIRI);
    ShExJison._setFileName(baseIRI);
    ShExJison.options = schemaOptions;
    let errors = [];
    ShExJison.recoverable = e =>
      errors.push(e);
    let ret = null;
    try {
      ret = ShExJison.prototype.parse.apply(parser, arguments);
    } catch (e) {
      errors.push(e);
    }
    ShExJison.reset();
    errors.forEach(e => {
      if ("hash" in e) {
        const hash = e.hash;
        const location = hash.loc;
        delete hash.loc;
        Object.assign(e, hash, {location: location});
      }
      return e;
    })
    if (errors.length == 1) {
      errors[0].parsed = ret;
      throw errors[0];
    } else if (errors.length) {
      const all = new Error("" + errors.length  + " parser errors:\n" + errors.map(
        e => contextError(e, parser.yy.lexer)
      ).join("\n"));
      all.errors = errors;
      all.parsed = ret;
      throw all;
    } else {
      return ret;
    }
  }
  parser.parse = runParser;
  parser._setBase = function (base) {
    ShExJison._setBase;
    baseIRI = base;
  }
  parser._setFileName = ShExJison._setFileName;
  parser._setOptions = function (opts) { ShExJison.options = opts; };
  parser._resetBlanks = ShExJison._resetBlanks;
  parser.reset = ShExJison.reset;
  ShExJison.options = schemaOptions;
  return parser;

  function contextError (e, lexer) {
    // use the lexer's pretty-printing
    var line = e.location.first_line;
    var col  = e.location.first_column + 1;
    var posStr = "pos" in e.hash ? "\n" + e.hash.pos : ""
    return `${baseIRI}\n line: ${line}, column: ${col}: ${e.message}${posStr}`;
  }
}

return {
  construct: prepareParser
};
})();

if (true)
  module.exports = ShExParser;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Approach:
//
// 1. Get the minimatch set
// 2. For each pattern in the set, PROCESS(pattern, false)
// 3. Store matches per-set, then uniq them
//
// PROCESS(pattern, inGlobStar)
// Get the first [n] items from pattern that are all strings
// Join these together.  This is PREFIX.
//   If there is no more remaining, then stat(PREFIX) and
//   add to matches if it succeeds.  END.
//
// If inGlobStar and PREFIX is symlink and points to dir
//   set ENTRIES = []
// else readdir(PREFIX) as ENTRIES
//   If fail, END
//
// with ENTRIES
//   If pattern[n] is GLOBSTAR
//     // handle the case where the globstar match is empty
//     // by pruning it out, and testing the resulting pattern
//     PROCESS(pattern[0..n] + pattern[n+1 .. $], false)
//     // handle other cases.
//     for ENTRY in ENTRIES (not dotfiles)
//       // attach globstar + tail onto the entry
//       // Mark that this entry is a globstar match
//       PROCESS(pattern[0..n] + ENTRY + pattern[n .. $], true)
//
//   else // not globstar
//     for ENTRY in ENTRIES (not dotfiles, unless pattern[n] is dot)
//       Test ENTRY against pattern[n]
//       If fails, continue
//       If passes, PROCESS(pattern[0..n] + item + pattern[n+1 .. $])
//
// Caveat:
//   Cache all stats and readdirs results to minimize syscall.  Since all
//   we ever care about is existence and directory-ness, we can just keep
//   `true` for files, and [children,...] for directories, or `false` for
//   things that don't exist.

module.exports = glob

var fs = __webpack_require__(3)
var rp = __webpack_require__(24)
var minimatch = __webpack_require__(14)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(53)
var EE = __webpack_require__(15).EventEmitter
var path = __webpack_require__(2)
var assert = __webpack_require__(25)
var isAbsolute = __webpack_require__(16)
var globSync = __webpack_require__(55)
var common = __webpack_require__(26)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(56)
var util = __webpack_require__(12)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(28)

function glob (pattern, options, cb) {
  if (typeof options === 'function') cb = options, options = {}
  if (!options) options = {}

  if (options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return globSync(pattern, options)
  }

  return new Glob(pattern, options, cb)
}

glob.sync = globSync
var GlobSync = glob.GlobSync = globSync.GlobSync

// old api surface
glob.glob = glob

function extend (origin, add) {
  if (add === null || typeof add !== 'object') {
    return origin
  }

  var keys = Object.keys(add)
  var i = keys.length
  while (i--) {
    origin[keys[i]] = add[keys[i]]
  }
  return origin
}

glob.hasMagic = function (pattern, options_) {
  var options = extend({}, options_)
  options.noprocess = true

  var g = new Glob(pattern, options)
  var set = g.minimatch.set

  if (!pattern)
    return false

  if (set.length > 1)
    return true

  for (var j = 0; j < set[0].length; j++) {
    if (typeof set[0][j] !== 'string')
      return true
  }

  return false
}

glob.Glob = Glob
inherits(Glob, EE)
function Glob (pattern, options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  if (options && options.sync) {
    if (cb)
      throw new TypeError('callback provided to sync glob')
    return new GlobSync(pattern, options)
  }

  if (!(this instanceof Glob))
    return new Glob(pattern, options, cb)

  setopts(this, pattern, options)
  this._didRealPath = false

  // process each pattern in the minimatch set
  var n = this.minimatch.set.length

  // The matches are stored as {<filename>: true,...} so that
  // duplicates are automagically pruned.
  // Later, we do an Object.keys() on these.
  // Keep them as a list so we can fill in when nonull is set.
  this.matches = new Array(n)

  if (typeof cb === 'function') {
    cb = once(cb)
    this.on('error', cb)
    this.on('end', function (matches) {
      cb(null, matches)
    })
  }

  var self = this
  this._processing = 0

  this._emitQueue = []
  this._processQueue = []
  this.paused = false

  if (this.noprocess)
    return this

  if (n === 0)
    return done()

  var sync = true
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false, done)
  }
  sync = false

  function done () {
    --self._processing
    if (self._processing <= 0) {
      if (sync) {
        process.nextTick(function () {
          self._finish()
        })
      } else {
        self._finish()
      }
    }
  }
}

Glob.prototype._finish = function () {
  assert(this instanceof Glob)
  if (this.aborted)
    return

  if (this.realpath && !this._didRealpath)
    return this._realpath()

  common.finish(this)
  this.emit('end', this.found)
}

Glob.prototype._realpath = function () {
  if (this._didRealpath)
    return

  this._didRealpath = true

  var n = this.matches.length
  if (n === 0)
    return this._finish()

  var self = this
  for (var i = 0; i < this.matches.length; i++)
    this._realpathSet(i, next)

  function next () {
    if (--n === 0)
      self._finish()
  }
}

Glob.prototype._realpathSet = function (index, cb) {
  var matchset = this.matches[index]
  if (!matchset)
    return cb()

  var found = Object.keys(matchset)
  var self = this
  var n = found.length

  if (n === 0)
    return cb()

  var set = this.matches[index] = Object.create(null)
  found.forEach(function (p, i) {
    // If there's a problem with the stat, then it means that
    // one or more of the links in the realpath couldn't be
    // resolved.  just return the abs value in that case.
    p = self._makeAbs(p)
    rp.realpath(p, self.realpathCache, function (er, real) {
      if (!er)
        set[real] = true
      else if (er.syscall === 'stat')
        set[p] = true
      else
        self.emit('error', er) // srsly wtf right here

      if (--n === 0) {
        self.matches[index] = set
        cb()
      }
    })
  })
}

Glob.prototype._mark = function (p) {
  return common.mark(this, p)
}

Glob.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

Glob.prototype.abort = function () {
  this.aborted = true
  this.emit('abort')
}

Glob.prototype.pause = function () {
  if (!this.paused) {
    this.paused = true
    this.emit('pause')
  }
}

Glob.prototype.resume = function () {
  if (this.paused) {
    this.emit('resume')
    this.paused = false
    if (this._emitQueue.length) {
      var eq = this._emitQueue.slice(0)
      this._emitQueue.length = 0
      for (var i = 0; i < eq.length; i ++) {
        var e = eq[i]
        this._emitMatch(e[0], e[1])
      }
    }
    if (this._processQueue.length) {
      var pq = this._processQueue.slice(0)
      this._processQueue.length = 0
      for (var i = 0; i < pq.length; i ++) {
        var p = pq[i]
        this._processing--
        this._process(p[0], p[1], p[2], p[3])
      }
    }
  }
}

Glob.prototype._process = function (pattern, index, inGlobStar, cb) {
  assert(this instanceof Glob)
  assert(typeof cb === 'function')

  if (this.aborted)
    return

  this._processing++
  if (this.paused) {
    this._processQueue.push([pattern, index, inGlobStar, cb])
    return
  }

  //console.error('PROCESS %d', this._processing, pattern)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // see if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index, cb)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip _processing
  if (childrenIgnored(this, read))
    return cb()

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar, cb)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar, cb)
}

Glob.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    return self._processReaddir2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}

Glob.prototype._processReaddir2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return cb()

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  //console.error('prd2', prefix, entries, remain[0]._glob, matchedEntries)

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return cb()

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return cb()
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix) {
      if (prefix !== '/')
        e = prefix + '/' + e
      else
        e = prefix + e
    }
    this._process([e].concat(remain), index, inGlobStar, cb)
  }
  cb()
}

Glob.prototype._emitMatch = function (index, e) {
  if (this.aborted)
    return

  if (isIgnored(this, e))
    return

  if (this.paused) {
    this._emitQueue.push([index, e])
    return
  }

  var abs = isAbsolute(e) ? e : this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute)
    e = abs

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  var st = this.statCache[abs]
  if (st)
    this.emit('stat', e, st)

  this.emit('match', e)
}

Glob.prototype._readdirInGlobStar = function (abs, cb) {
  if (this.aborted)
    return

  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false, cb)

  var lstatkey = 'lstat\0' + abs
  var self = this
  var lstatcb = inflight(lstatkey, lstatcb_)

  if (lstatcb)
    fs.lstat(abs, lstatcb)

  function lstatcb_ (er, lstat) {
    if (er && er.code === 'ENOENT')
      return cb()

    var isSym = lstat && lstat.isSymbolicLink()
    self.symlinks[abs] = isSym

    // If it's not a symlink or a dir, then it's definitely a regular file.
    // don't bother doing a readdir in that case.
    if (!isSym && lstat && !lstat.isDirectory()) {
      self.cache[abs] = 'FILE'
      cb()
    } else
      self._readdir(abs, false, cb)
  }
}

Glob.prototype._readdir = function (abs, inGlobStar, cb) {
  if (this.aborted)
    return

  cb = inflight('readdir\0'+abs+'\0'+inGlobStar, cb)
  if (!cb)
    return

  //console.error('RD %j %j', +inGlobStar, abs)
  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs, cb)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return cb()

    if (Array.isArray(c))
      return cb(null, c)
  }

  var self = this
  fs.readdir(abs, readdirCb(this, abs, cb))
}

function readdirCb (self, abs, cb) {
  return function (er, entries) {
    if (er)
      self._readdirError(abs, er, cb)
    else
      self._readdirEntries(abs, entries, cb)
  }
}

Glob.prototype._readdirEntries = function (abs, entries, cb) {
  if (this.aborted)
    return

  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries
  return cb(null, entries)
}

Glob.prototype._readdirError = function (f, er, cb) {
  if (this.aborted)
    return

  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        this.emit('error', error)
        this.abort()
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict) {
        this.emit('error', er)
        // If the error is handled, then we abort
        // if not, we threw out of here
        this.abort()
      }
      if (!this.silent)
        console.error('glob error', er)
      break
  }

  return cb()
}

Glob.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar, cb) {
  var self = this
  this._readdir(abs, inGlobStar, function (er, entries) {
    self._processGlobStar2(prefix, read, abs, remain, index, inGlobStar, entries, cb)
  })
}


Glob.prototype._processGlobStar2 = function (prefix, read, abs, remain, index, inGlobStar, entries, cb) {
  //console.error('pgs2', prefix, remain[0], entries)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return cb()

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false, cb)

  var isSym = this.symlinks[abs]
  var len = entries.length

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return cb()

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true, cb)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true, cb)
  }

  cb()
}

Glob.prototype._processSimple = function (prefix, index, cb) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var self = this
  this._stat(prefix, function (er, exists) {
    self._processSimple2(prefix, index, er, exists, cb)
  })
}
Glob.prototype._processSimple2 = function (prefix, index, er, exists, cb) {

  //console.error('ps2', prefix, exists)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return cb()

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
  cb()
}

// Returns either 'DIR', 'FILE', or false
Glob.prototype._stat = function (f, cb) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return cb()

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return cb(null, c)

    if (needDir && c === 'FILE')
      return cb()

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (stat !== undefined) {
    if (stat === false)
      return cb(null, stat)
    else {
      var type = stat.isDirectory() ? 'DIR' : 'FILE'
      if (needDir && type === 'FILE')
        return cb()
      else
        return cb(null, type, stat)
    }
  }

  var self = this
  var statcb = inflight('stat\0' + abs, lstatcb_)
  if (statcb)
    fs.lstat(abs, statcb)

  function lstatcb_ (er, lstat) {
    if (lstat && lstat.isSymbolicLink()) {
      // If it's a symlink, then treat it as the target, unless
      // the target does not exist, then treat it as a file.
      return fs.stat(abs, function (er, stat) {
        if (er)
          self._stat2(f, abs, null, lstat, cb)
        else
          self._stat2(f, abs, er, stat, cb)
      })
    } else {
      self._stat2(f, abs, er, lstat, cb)
    }
  }
}

Glob.prototype._stat2 = function (f, abs, er, stat, cb) {
  if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
    this.statCache[abs] = false
    return cb()
  }

  var needDir = f.slice(-1) === '/'
  this.statCache[abs] = stat

  if (abs.slice(-1) === '/' && stat && !stat.isDirectory())
    return cb(null, false, stat)

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'
  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return cb()

  return cb(null, c, stat)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(3)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(49)

function newError (er) {
  return er && er.syscall === 'realpath' && (
    er.code === 'ELOOP' ||
    er.code === 'ENOMEM' ||
    er.code === 'ENAMETOOLONG'
  )
}

function realpath (p, cache, cb) {
  if (ok) {
    return origRealpath(p, cache, cb)
  }

  if (typeof cache === 'function') {
    cb = cache
    cache = null
  }
  origRealpath(p, cache, function (er, result) {
    if (newError(er)) {
      old.realpath(p, cache, cb)
    } else {
      cb(er, result)
    }
  })
}

function realpathSync (p, cache) {
  if (ok) {
    return origRealpathSync(p, cache)
  }

  try {
    return origRealpathSync(p, cache)
  } catch (er) {
    if (newError(er)) {
      return old.realpathSync(p, cache)
    } else {
      throw er
    }
  }
}

function monkeypatch () {
  fs.realpath = realpath
  fs.realpathSync = realpathSync
}

function unmonkeypatch () {
  fs.realpath = origRealpath
  fs.realpathSync = origRealpathSync
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(54);

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(12);
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {exports.alphasort = alphasort
exports.alphasorti = alphasorti
exports.setopts = setopts
exports.ownProp = ownProp
exports.makeAbs = makeAbs
exports.finish = finish
exports.mark = mark
exports.isIgnored = isIgnored
exports.childrenIgnored = childrenIgnored

function ownProp (obj, field) {
  return Object.prototype.hasOwnProperty.call(obj, field)
}

var path = __webpack_require__(2)
var minimatch = __webpack_require__(14)
var isAbsolute = __webpack_require__(16)
var Minimatch = minimatch.Minimatch

function alphasorti (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase())
}

function alphasort (a, b) {
  return a.localeCompare(b)
}

function setupIgnores (self, options) {
  self.ignore = options.ignore || []

  if (!Array.isArray(self.ignore))
    self.ignore = [self.ignore]

  if (self.ignore.length) {
    self.ignore = self.ignore.map(ignoreMap)
  }
}

// ignore patterns are always in dot:true mode.
function ignoreMap (pattern) {
  var gmatcher = null
  if (pattern.slice(-3) === '/**') {
    var gpattern = pattern.replace(/(\/\*\*)+$/, '')
    gmatcher = new Minimatch(gpattern, { dot: true })
  }

  return {
    matcher: new Minimatch(pattern, { dot: true }),
    gmatcher: gmatcher
  }
}

function setopts (self, pattern, options) {
  if (!options)
    options = {}

  // base-matching: just use globstar for that.
  if (options.matchBase && -1 === pattern.indexOf("/")) {
    if (options.noglobstar) {
      throw new Error("base matching requires globstar")
    }
    pattern = "**/" + pattern
  }

  self.silent = !!options.silent
  self.pattern = pattern
  self.strict = options.strict !== false
  self.realpath = !!options.realpath
  self.realpathCache = options.realpathCache || Object.create(null)
  self.follow = !!options.follow
  self.dot = !!options.dot
  self.mark = !!options.mark
  self.nodir = !!options.nodir
  if (self.nodir)
    self.mark = true
  self.sync = !!options.sync
  self.nounique = !!options.nounique
  self.nonull = !!options.nonull
  self.nosort = !!options.nosort
  self.nocase = !!options.nocase
  self.stat = !!options.stat
  self.noprocess = !!options.noprocess
  self.absolute = !!options.absolute

  self.maxLength = options.maxLength || Infinity
  self.cache = options.cache || Object.create(null)
  self.statCache = options.statCache || Object.create(null)
  self.symlinks = options.symlinks || Object.create(null)

  setupIgnores(self, options)

  self.changedCwd = false
  var cwd = process.cwd()
  if (!ownProp(options, "cwd"))
    self.cwd = cwd
  else {
    self.cwd = path.resolve(options.cwd)
    self.changedCwd = self.cwd !== cwd
  }

  self.root = options.root || path.resolve(self.cwd, "/")
  self.root = path.resolve(self.root)
  if (process.platform === "win32")
    self.root = self.root.replace(/\\/g, "/")

  // TODO: is an absolute `cwd` supposed to be resolved against `root`?
  // e.g. { cwd: '/test', root: __dirname } === path.join(__dirname, '/test')
  self.cwdAbs = isAbsolute(self.cwd) ? self.cwd : makeAbs(self, self.cwd)
  if (process.platform === "win32")
    self.cwdAbs = self.cwdAbs.replace(/\\/g, "/")
  self.nomount = !!options.nomount

  // disable comments and negation in Minimatch.
  // Note that they are not supported in Glob itself anyway.
  options.nonegate = true
  options.nocomment = true

  self.minimatch = new Minimatch(pattern, options)
  self.options = self.minimatch.options
}

function finish (self) {
  var nou = self.nounique
  var all = nou ? [] : Object.create(null)

  for (var i = 0, l = self.matches.length; i < l; i ++) {
    var matches = self.matches[i]
    if (!matches || Object.keys(matches).length === 0) {
      if (self.nonull) {
        // do like the shell, and spit out the literal glob
        var literal = self.minimatch.globSet[i]
        if (nou)
          all.push(literal)
        else
          all[literal] = true
      }
    } else {
      // had matches
      var m = Object.keys(matches)
      if (nou)
        all.push.apply(all, m)
      else
        m.forEach(function (m) {
          all[m] = true
        })
    }
  }

  if (!nou)
    all = Object.keys(all)

  if (!self.nosort)
    all = all.sort(self.nocase ? alphasorti : alphasort)

  // at *some* point we statted all of these
  if (self.mark) {
    for (var i = 0; i < all.length; i++) {
      all[i] = self._mark(all[i])
    }
    if (self.nodir) {
      all = all.filter(function (e) {
        var notDir = !(/\/$/.test(e))
        var c = self.cache[e] || self.cache[makeAbs(self, e)]
        if (notDir && c)
          notDir = c !== 'DIR' && !Array.isArray(c)
        return notDir
      })
    }
  }

  if (self.ignore.length)
    all = all.filter(function(m) {
      return !isIgnored(self, m)
    })

  self.found = all
}

function mark (self, p) {
  var abs = makeAbs(self, p)
  var c = self.cache[abs]
  var m = p
  if (c) {
    var isDir = c === 'DIR' || Array.isArray(c)
    var slash = p.slice(-1) === '/'

    if (isDir && !slash)
      m += '/'
    else if (!isDir && slash)
      m = m.slice(0, -1)

    if (m !== p) {
      var mabs = makeAbs(self, m)
      self.statCache[mabs] = self.statCache[abs]
      self.cache[mabs] = self.cache[abs]
    }
  }

  return m
}

// lotta situps...
function makeAbs (self, f) {
  var abs = f
  if (f.charAt(0) === '/') {
    abs = path.join(self.root, f)
  } else if (isAbsolute(f) || f === '') {
    abs = f
  } else if (self.changedCwd) {
    abs = path.resolve(self.cwd, f)
  } else {
    abs = path.resolve(f)
  }

  if (process.platform === 'win32')
    abs = abs.replace(/\\/g, '/')

  return abs
}


// Return true, if pattern ends with globstar '**', for the accompanying parent directory.
// Ex:- If node_modules/** is the pattern, add 'node_modules' to ignore list along with it's contents
function isIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return item.matcher.match(path) || !!(item.gmatcher && item.gmatcher.match(path))
  })
}

function childrenIgnored (self, path) {
  if (!self.ignore.length)
    return false

  return self.ignore.some(function(item) {
    return !!(item.gmatcher && item.gmatcher.match(path))
  })
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(27)
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


module.exports = Readable;
/*<replacement>*/

var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;
/*<replacement>*/

var EE = __webpack_require__(15).EventEmitter;

var EElistenerCount = function EElistenerCount(emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/


var Stream = __webpack_require__(30);
/*</replacement>*/


var Buffer = __webpack_require__(8).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}
/*<replacement>*/


var debugUtil = __webpack_require__(61);

var debug;

if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function debug() {};
}
/*</replacement>*/


var BufferList = __webpack_require__(62);

var destroyImpl = __webpack_require__(31);

var _require = __webpack_require__(32),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(4).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_STREAM_PUSH_AFTER_EOF = _require$codes.ERR_STREAM_PUSH_AFTER_EOF,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes.ERR_STREAM_UNSHIFT_AFTER_END_EVENT; // Lazy loaded to improve the startup performance.


var StringDecoder;
var createReadableStreamAsyncIterator;
var from;

__webpack_require__(9)(Readable, Stream);

var errorOrDestroy = destroyImpl.errorOrDestroy;
var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn); // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.

  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (Array.isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(5);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode; // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"

  this.highWaterMark = getHighWaterMark(this, options, 'readableHighWaterMark', isDuplex); // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()

  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false; // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.

  this.sync = true; // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.

  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;
  this.paused = true; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'end' (and potentially 'finish')

  this.autoDestroy = !!options.autoDestroy; // has it been destroyed

  this.destroyed = false; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // the number of writers that are awaiting a drain event in .pipe()s

  this.awaitDrain = 0; // if true, a maybeReadMore has been scheduled

  this.readingMore = false;
  this.decoder = null;
  this.encoding = null;

  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(34).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(5);
  if (!(this instanceof Readable)) return new Readable(options); // Checking for a Stream.Duplex instance is faster here instead of inside
  // the ReadableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  this._readableState = new ReadableState(options, this, isDuplex); // legacy

  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._readableState === undefined) {
      return false;
    }

    return this._readableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._readableState.destroyed = value;
  }
});
Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;

Readable.prototype._destroy = function (err, cb) {
  cb(err);
}; // Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.


Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;

      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }

      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
}; // Unshift should *always* be something directly out of read()


Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  debug('readableAddChunk', chunk);
  var state = stream._readableState;

  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);

    if (er) {
      errorOrDestroy(stream, er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) errorOrDestroy(stream, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        errorOrDestroy(stream, new ERR_STREAM_PUSH_AFTER_EOF());
      } else if (state.destroyed) {
        return false;
      } else {
        state.reading = false;

        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
      maybeReadMore(stream, state);
    }
  } // We can push more data if we are below the highWaterMark.
  // Also, if we have no data yet, we can stand some more bytes.
  // This is to work around cases where hwm=0, such as the repl.


  return !state.ended && (state.length < state.highWaterMark || state.length === 0);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    state.awaitDrain = 0;
    stream.emit('data', chunk);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);
    if (state.needReadable) emitReadable(stream);
  }

  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;

  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer', 'Uint8Array'], chunk);
  }

  return er;
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
}; // backwards compatibility.


Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(34).StringDecoder;
  var decoder = new StringDecoder(enc);
  this._readableState.decoder = decoder; // If setEncoding(null), decoder.encoding equals utf8

  this._readableState.encoding = this._readableState.decoder.encoding; // Iterate over current buffer to convert already stored Buffers:

  var p = this._readableState.buffer.head;
  var content = '';

  while (p !== null) {
    content += decoder.write(p.data);
    p = p.next;
  }

  this._readableState.buffer.clear();

  if (content !== '') this._readableState.buffer.push(content);
  this._readableState.length = content.length;
  return this;
}; // Don't raise the hwm > 1GB


var MAX_HWM = 0x40000000;

function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    // TODO(ronag): Throw ERR_VALUE_OUT_OF_RANGE.
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }

  return n;
} // This function is designed to be inlinable, so please take care when making
// changes to the function body.


function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;

  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  } // If we're asking for more than the current hwm, then raise the hwm.


  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n; // Don't have enough

  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }

  return state.length;
} // you can override either this method, or the async _read(n) below.


Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;
  if (n !== 0) state.emittedReadable = false; // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.

  if (n === 0 && state.needReadable && ((state.highWaterMark !== 0 ? state.length >= state.highWaterMark : state.length > 0) || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state); // if we've ended, and we're now clear, then finish it up.

  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  } // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.
  // if we need a readable event, then we need to do some reading.


  var doRead = state.needReadable;
  debug('need readable', doRead); // if we currently have less than the highWaterMark, then also read some

  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  } // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.


  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true; // if the length is currently zero, then we *need* a readable event.

    if (state.length === 0) state.needReadable = true; // call internal read method

    this._read(state.highWaterMark);

    state.sync = false; // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.

    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = state.length <= state.highWaterMark;
    n = 0;
  } else {
    state.length -= n;
    state.awaitDrain = 0;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true; // If we tried to read() past the EOF, then emit end on the next tick.

    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);
  return ret;
};

function onEofChunk(stream, state) {
  debug('onEofChunk');
  if (state.ended) return;

  if (state.decoder) {
    var chunk = state.decoder.end();

    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }

  state.ended = true;

  if (state.sync) {
    // if we are sync, wait until next tick to emit the data.
    // Otherwise we risk emitting data in the flow()
    // the readable code triggers during a read() call
    emitReadable(stream);
  } else {
    // emit 'readable' now to make sure it gets picked up.
    state.needReadable = false;

    if (!state.emittedReadable) {
      state.emittedReadable = true;
      emitReadable_(stream);
    }
  }
} // Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.


function emitReadable(stream) {
  var state = stream._readableState;
  debug('emitReadable', state.needReadable, state.emittedReadable);
  state.needReadable = false;

  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    process.nextTick(emitReadable_, stream);
  }
}

function emitReadable_(stream) {
  var state = stream._readableState;
  debug('emitReadable_', state.destroyed, state.length, state.ended);

  if (!state.destroyed && (state.length || state.ended)) {
    stream.emit('readable');
    state.emittedReadable = false;
  } // The stream needs another readable event if
  // 1. It is not flowing, as the flow mechanism will take
  //    care of it.
  // 2. It is not ended.
  // 3. It is below the highWaterMark, so we can schedule
  //    another readable later.


  state.needReadable = !state.flowing && !state.ended && state.length <= state.highWaterMark;
  flow(stream);
} // at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.


function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    process.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  // Attempt to read more data if we should.
  //
  // The conditions for reading more data are (one of):
  // - Not enough data buffered (state.length < state.highWaterMark). The loop
  //   is responsible for filling the buffer with enough data if such data
  //   is available. If highWaterMark is 0 and we are not in the flowing mode
  //   we should _not_ attempt to buffer any extra data. We'll get more data
  //   when the stream consumer calls read() instead.
  // - No data in the buffer, and the stream is in flowing mode. In this mode
  //   the loop below is responsible for ensuring read() is called. Failing to
  //   call read here would abort the flow and there's no other mechanism for
  //   continuing the flow if the stream consumer has just subscribed to the
  //   'data' event.
  //
  // In addition to the above conditions to keep reading data, the following
  // conditions prevent the data from being read:
  // - The stream has ended (state.ended).
  // - There is already a pending 'read' operation (state.reading). This is a
  //   case where the the stream has called the implementation defined _read()
  //   method, but they are processing the call asynchronously and have _not_
  //   called push() with new data. In this case we skip performing more
  //   read()s. The execution ends in this method again after the _read() ends
  //   up calling push() with more data.
  while (!state.reading && !state.ended && (state.length < state.highWaterMark || state.flowing && state.length === 0)) {
    var len = state.length;
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length) // didn't get any data, stop spinning.
      break;
  }

  state.readingMore = false;
} // abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.


Readable.prototype._read = function (n) {
  errorOrDestroy(this, new ERR_METHOD_NOT_IMPLEMENTED('_read()'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;

    case 1:
      state.pipes = [state.pipes, dest];
      break;

    default:
      state.pipes.push(dest);
      break;
  }

  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);
  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) process.nextTick(endFn);else src.once('end', endFn);
  dest.on('unpipe', onunpipe);

  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');

    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  } // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.


  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);
  var cleanedUp = false;

  function cleanup() {
    debug('cleanup'); // cleanup event handlers once the pipe is broken

    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);
    cleanedUp = true; // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.

    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  src.on('data', ondata);

  function ondata(chunk) {
    debug('ondata');
    var ret = dest.write(chunk);
    debug('dest.write', ret);

    if (ret === false) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', state.awaitDrain);
        state.awaitDrain++;
      }

      src.pause();
    }
  } // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.


  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) errorOrDestroy(dest, er);
  } // Make sure our error handler is attached before userland ones.


  prependListener(dest, 'error', onerror); // Both close and finish should trigger unpipe, but only once.

  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }

  dest.once('close', onclose);

  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }

  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  } // tell the dest that it's being piped to


  dest.emit('pipe', src); // start the flow if it hasn't been started already.

  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function pipeOnDrainFunctionResult() {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;

    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = {
    hasUnpiped: false
  }; // if we're not piping anywhere, then do nothing.

  if (state.pipesCount === 0) return this; // just one destination.  most common case.

  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;
    if (!dest) dest = state.pipes; // got a match.

    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  } // slow case. multiple pipe destinations.


  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, {
        hasUnpiped: false
      });
    }

    return this;
  } // try to find the right one.


  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;
  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];
  dest.emit('unpipe', this, unpipeInfo);
  return this;
}; // set up data events if they are asked for
// Ensure readable listeners eventually get something


Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);
  var state = this._readableState;

  if (ev === 'data') {
    // update readableListening so that resume() may be a no-op
    // a few lines down. This is needed to support once('readable').
    state.readableListening = this.listenerCount('readable') > 0; // Try start flowing on next tick if stream isn't explicitly paused

    if (state.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.flowing = false;
      state.emittedReadable = false;
      debug('on readable', state.length, state.reading);

      if (state.length) {
        emitReadable(this);
      } else if (!state.reading) {
        process.nextTick(nReadingNextTick, this);
      }
    }
  }

  return res;
};

Readable.prototype.addListener = Readable.prototype.on;

Readable.prototype.removeListener = function (ev, fn) {
  var res = Stream.prototype.removeListener.call(this, ev, fn);

  if (ev === 'readable') {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

Readable.prototype.removeAllListeners = function (ev) {
  var res = Stream.prototype.removeAllListeners.apply(this, arguments);

  if (ev === 'readable' || ev === undefined) {
    // We need to check if there is someone still listening to
    // readable and reset the state. However this needs to happen
    // after readable has been emitted but before I/O (nextTick) to
    // support once('readable', fn) cycles. This means that calling
    // resume within the same tick will have no
    // effect.
    process.nextTick(updateReadableListening, this);
  }

  return res;
};

function updateReadableListening(self) {
  var state = self._readableState;
  state.readableListening = self.listenerCount('readable') > 0;

  if (state.resumeScheduled && !state.paused) {
    // flowing needs to be set to true now, otherwise
    // the upcoming resume will not flow.
    state.flowing = true; // crude way to check if we should resume
  } else if (self.listenerCount('data') > 0) {
    self.resume();
  }
}

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
} // pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.


Readable.prototype.resume = function () {
  var state = this._readableState;

  if (!state.flowing) {
    debug('resume'); // we flow only if there is no one listening
    // for readable, but we still have to call
    // resume()

    state.flowing = !state.readableListening;
    resume(this, state);
  }

  state.paused = false;
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    process.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  debug('resume', state.reading);

  if (!state.reading) {
    stream.read(0);
  }

  state.resumeScheduled = false;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);

  if (this._readableState.flowing !== false) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }

  this._readableState.paused = true;
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);

  while (state.flowing && stream.read() !== null) {
    ;
  }
} // wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.


Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;
  stream.on('end', function () {
    debug('wrapped end');

    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });
  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk); // don't skip over falsy values in objectMode

    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);

    if (!ret) {
      paused = true;
      stream.pause();
    }
  }); // proxy all the other methods.
  // important when wrapping filters and duplexes.

  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function methodWrap(method) {
        return function methodWrapReturnFunction() {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  } // proxy certain important events.


  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  } // when we try to consume some more bytes, simply unpause the
  // underlying stream.


  this._read = function (n) {
    debug('wrapped _read', n);

    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

if (typeof Symbol === 'function') {
  Readable.prototype[Symbol.asyncIterator] = function () {
    if (createReadableStreamAsyncIterator === undefined) {
      createReadableStreamAsyncIterator = __webpack_require__(66);
    }

    return createReadableStreamAsyncIterator(this);
  };
}

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.highWaterMark;
  }
});
Object.defineProperty(Readable.prototype, 'readableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState && this._readableState.buffer;
  }
});
Object.defineProperty(Readable.prototype, 'readableFlowing', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.flowing;
  },
  set: function set(state) {
    if (this._readableState) {
      this._readableState.flowing = state;
    }
  }
}); // exposed for testing purposes only.

Readable._fromList = fromList;
Object.defineProperty(Readable.prototype, 'readableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._readableState.length;
  }
}); // Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.

function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;
  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.first();else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = state.buffer.consume(n, state.decoder);
  }
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;
  debug('endReadable', state.endEmitted);

  if (!state.endEmitted) {
    state.ended = true;
    process.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  debug('endReadableNT', state.endEmitted, state.length); // Check that we didn't get one last unshift.

  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');

    if (state.autoDestroy) {
      // In case of duplex streams we need a way to detect
      // if the writable side is ready for autoDestroy as well
      var wState = stream._writableState;

      if (!wState || wState.autoDestroy && wState.finished) {
        stream.destroy();
      }
    }
  }
}

if (typeof Symbol === 'function') {
  Readable.from = function (iterable, opts) {
    if (from === undefined) {
      from = __webpack_require__(67);
    }

    return from(Readable, iterable, opts);
  };
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }

  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7), __webpack_require__(1)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15).EventEmitter;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) { // undocumented cb() API, needed for core, not for public API

function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }

    return this;
  } // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks


  if (this._readableState) {
    this._readableState.destroyed = true;
  } // if this is a duplex stream mark the writable part as destroyed as well


  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });

  return this;
}

function emitErrorAndCloseNT(self, err) {
  emitErrorNT(self, err);
  emitCloseNT(self);
}

function emitCloseNT(self) {
  if (self._writableState && !self._writableState.emitClose) return;
  if (self._readableState && !self._readableState.emitClose) return;
  self.emit('close');
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

function errorOrDestroy(stream, err) {
  // We have tests that rely on errors being emitted
  // in the same tick, so changing this is semver major.
  // For now when you opt-in to autoDestroy we allow
  // the error to be emitted nextTick. In a future
  // semver major update we should change the default to this.
  var rState = stream._readableState;
  var wState = stream._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy) stream.destroy(err);else stream.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy,
  errorOrDestroy: errorOrDestroy
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ERR_INVALID_OPT_VALUE = __webpack_require__(4).codes.ERR_INVALID_OPT_VALUE;

function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}

function getHighWaterMark(state, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);

  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name = isDuplex ? duplexKey : 'highWaterMark';
      throw new ERR_INVALID_OPT_VALUE(name, hwm);
    }

    return Math.floor(hwm);
  } // Default value


  return state.objectMode ? 16 : 16 * 1024;
}

module.exports = {
  getHighWaterMark: getHighWaterMark
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.


module.exports = Writable;
/* <replacement> */

function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
} // It seems a linked list but it is not
// there will be only 2 of these for each stream


function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;

  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/


var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;
/*<replacement>*/

var internalUtil = {
  deprecate: __webpack_require__(64)
};
/*</replacement>*/

/*<replacement>*/

var Stream = __webpack_require__(30);
/*</replacement>*/


var Buffer = __webpack_require__(8).Buffer;

var OurUint8Array = global.Uint8Array || function () {};

function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}

function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

var destroyImpl = __webpack_require__(31);

var _require = __webpack_require__(32),
    getHighWaterMark = _require.getHighWaterMark;

var _require$codes = __webpack_require__(4).codes,
    ERR_INVALID_ARG_TYPE = _require$codes.ERR_INVALID_ARG_TYPE,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_STREAM_CANNOT_PIPE = _require$codes.ERR_STREAM_CANNOT_PIPE,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED,
    ERR_STREAM_NULL_VALUES = _require$codes.ERR_STREAM_NULL_VALUES,
    ERR_STREAM_WRITE_AFTER_END = _require$codes.ERR_STREAM_WRITE_AFTER_END,
    ERR_UNKNOWN_ENCODING = _require$codes.ERR_UNKNOWN_ENCODING;

var errorOrDestroy = destroyImpl.errorOrDestroy;

__webpack_require__(9)(Writable, Stream);

function nop() {}

function WritableState(options, stream, isDuplex) {
  Duplex = Duplex || __webpack_require__(5);
  options = options || {}; // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream,
  // e.g. options.readableObjectMode vs. options.writableObjectMode, etc.

  if (typeof isDuplex !== 'boolean') isDuplex = stream instanceof Duplex; // object stream flag to indicate whether or not this stream
  // contains buffers or objects.

  this.objectMode = !!options.objectMode;
  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode; // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()

  this.highWaterMark = getHighWaterMark(this, options, 'writableHighWaterMark', isDuplex); // if _final has been called

  this.finalCalled = false; // drain event flag.

  this.needDrain = false; // at the start of calling end()

  this.ending = false; // when end() has been called, and returned

  this.ended = false; // when 'finish' is emitted

  this.finished = false; // has it been destroyed

  this.destroyed = false; // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.

  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode; // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.

  this.defaultEncoding = options.defaultEncoding || 'utf8'; // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.

  this.length = 0; // a flag to see when we're in the middle of a write.

  this.writing = false; // when true all writes will be buffered until .uncork() call

  this.corked = 0; // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.

  this.sync = true; // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.

  this.bufferProcessing = false; // the callback that's passed to _write(chunk,cb)

  this.onwrite = function (er) {
    onwrite(stream, er);
  }; // the callback that the user supplies to write(chunk,encoding,cb)


  this.writecb = null; // the amount that is being written when _write is called.

  this.writelen = 0;
  this.bufferedRequest = null;
  this.lastBufferedRequest = null; // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted

  this.pendingcb = 0; // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams

  this.prefinished = false; // True if the error was already emitted and should not be thrown again

  this.errorEmitted = false; // Should close be emitted on destroy. Defaults to true.

  this.emitClose = options.emitClose !== false; // Should .destroy() be called after 'finish' (and potentially 'end')

  this.autoDestroy = !!options.autoDestroy; // count buffered requests

  this.bufferedRequestCount = 0; // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two

  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];

  while (current) {
    out.push(current);
    current = current.next;
  }

  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function writableStateBufferGetter() {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})(); // Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.


var realHasInstance;

if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function value(object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;
      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function realHasInstance(object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(5); // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.
  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  // Checking for a Stream.Duplex instance is faster here instead of inside
  // the WritableState constructor, at least with V8 6.5

  var isDuplex = this instanceof Duplex;
  if (!isDuplex && !realHasInstance.call(Writable, this)) return new Writable(options);
  this._writableState = new WritableState(options, this, isDuplex); // legacy.

  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;
    if (typeof options.writev === 'function') this._writev = options.writev;
    if (typeof options.destroy === 'function') this._destroy = options.destroy;
    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
} // Otherwise people can pipe Writable streams, which is just wrong.


Writable.prototype.pipe = function () {
  errorOrDestroy(this, new ERR_STREAM_CANNOT_PIPE());
};

function writeAfterEnd(stream, cb) {
  var er = new ERR_STREAM_WRITE_AFTER_END(); // TODO: defer error events consistently everywhere, not just the cb

  errorOrDestroy(stream, er);
  process.nextTick(cb, er);
} // Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.


function validChunk(stream, state, chunk, cb) {
  var er;

  if (chunk === null) {
    er = new ERR_STREAM_NULL_VALUES();
  } else if (typeof chunk !== 'string' && !state.objectMode) {
    er = new ERR_INVALID_ARG_TYPE('chunk', ['string', 'Buffer'], chunk);
  }

  if (er) {
    errorOrDestroy(stream, er);
    process.nextTick(cb, er);
    return false;
  }

  return true;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;

  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;
  if (typeof cb !== 'function') cb = nop;
  if (state.ending) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }
  return ret;
};

Writable.prototype.cork = function () {
  this._writableState.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;
    if (!state.writing && !state.corked && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new ERR_UNKNOWN_ENCODING(encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

Object.defineProperty(Writable.prototype, 'writableBuffer', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState && this._writableState.getBuffer();
  }
});

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }

  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.highWaterMark;
  }
}); // if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.

function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);

    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }

  var len = state.objectMode ? 1 : chunk.length;
  state.length += len;
  var ret = state.length < state.highWaterMark; // we must ensure that previous needDrain will not be reset to false.

  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };

    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }

    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (state.destroyed) state.onwrite(new ERR_STREAM_DESTROYED('write'));else if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    process.nextTick(cb, er); // this can emit finish, and it will always happen
    // after error

    process.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    errorOrDestroy(stream, er); // this can emit finish, but finish must
    // always follow error

    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;
  if (typeof cb !== 'function') throw new ERR_MULTIPLE_CALLBACK();
  onwriteStateUpdate(state);
  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state) || stream.destroyed;

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      process.nextTick(afterWrite, stream, state, finished, cb);
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
} // Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.


function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
} // if there's something in the buffer waiting, then process it


function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;
    var count = 0;
    var allBuffers = true;

    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }

    buffer.allBuffers = allBuffers;
    doWrite(stream, state, true, state.length, buffer, '', holder.finish); // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite

    state.pendingcb++;
    state.lastBufferedRequest = null;

    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }

    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;
      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--; // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.

      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_write()'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding); // .end() fully uncorks

  if (state.corked) {
    state.corked = 1;
    this.uncork();
  } // ignore unnecessary end() calls.


  if (!state.ending) endWritable(this, state, cb);
  return this;
};

Object.defineProperty(Writable.prototype, 'writableLength', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    return this._writableState.length;
  }
});

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}

function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;

    if (err) {
      errorOrDestroy(stream, err);
    }

    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}

function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function' && !state.destroyed) {
      state.pendingcb++;
      state.finalCalled = true;
      process.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);

  if (need) {
    prefinish(stream, state);

    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');

      if (state.autoDestroy) {
        // In case of duplex streams we need a way to detect
        // if the readable side is ready for autoDestroy as well
        var rState = stream._readableState;

        if (!rState || rState.autoDestroy && rState.endEmitted) {
          stream.destroy();
        }
      }
    }
  }

  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);

  if (cb) {
    if (state.finished) process.nextTick(cb);else stream.once('finish', cb);
  }

  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;

  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  } // reuse the free corkReq.


  state.corkedRequestsFree.next = corkReq;
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function get() {
    if (this._writableState === undefined) {
      return false;
    }

    return this._writableState.destroyed;
  },
  set: function set(value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    } // backward compatibility, the user is explicitly
    // managing destroyed


    this._writableState.destroyed = value;
  }
});
Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;

Writable.prototype._destroy = function (err, cb) {
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7), __webpack_require__(1)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(65).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.


module.exports = Transform;

var _require$codes = __webpack_require__(4).codes,
    ERR_METHOD_NOT_IMPLEMENTED = _require$codes.ERR_METHOD_NOT_IMPLEMENTED,
    ERR_MULTIPLE_CALLBACK = _require$codes.ERR_MULTIPLE_CALLBACK,
    ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes.ERR_TRANSFORM_ALREADY_TRANSFORMING,
    ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes.ERR_TRANSFORM_WITH_LENGTH_0;

var Duplex = __webpack_require__(5);

__webpack_require__(9)(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;

  if (cb === null) {
    return this.emit('error', new ERR_MULTIPLE_CALLBACK());
  }

  ts.writechunk = null;
  ts.writecb = null;
  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;

  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }; // start out asking for a readable event once data is transformed.

  this._readableState.needReadable = true; // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.

  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;
    if (typeof options.flush === 'function') this._flush = options.flush;
  } // When the writable side finishes, then flush out anything remaining.


  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function' && !this._readableState.destroyed) {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
}; // This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.


Transform.prototype._transform = function (chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED('_transform()'));
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;

  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
}; // Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.


Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;

    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);
  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data); // TODO(BridgeAR): Write a test for these two error cases
  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided

  if (stream._writableState.length) throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream._transformState.transforming) throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream.push(null);
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
let promise

module.exports = typeof queueMicrotask === 'function'
  ? queueMicrotask
  // reuse resolved promise, and allocate it lazily
  : cb => (promise || (promise = Promise.resolve()))
    .then(cb)
    .catch(err => setTimeout(() => { throw err }, 0))


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

ShExWebApp = (function () {
  let shapeMap = __webpack_require__(38)
  return Object.assign({}, {
    ShExTerm:       __webpack_require__(10),
    Util:           __webpack_require__(11),
    Validator:      __webpack_require__(44),
    Writer:         __webpack_require__(21),
    Api:            __webpack_require__(47),
    Parser:         __webpack_require__(22),
    ShapeMap:       shapeMap,
    ShapeMapParser: shapeMap.Parser,
    N3:             __webpack_require__(70)
  })
})()

if (true)
  module.exports = ShExWebApp;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * See README for description.
 */

var ShapeMap = (function () {
  const symbols = __webpack_require__(18)

  // Write the parser object directly into the symbols so the caller shares a
  // symbol space with ShapeMapJison for e.g. start and focus.
  symbols.Parser = __webpack_require__(39)
  return symbols
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShapeMap;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var ShapeMapParser = (function () {

// stolen as much as possible from SPARQL.js
if (true) {
  ShapeMapJison = __webpack_require__(40).Parser; // node environment
} else {}

// Creates a ShEx parser with the given pre-defined prefixes
var prepareParser = function (baseIRI, schemaMeta, dataMeta) {
  // Create a copy of the prefixes
  var schemaBase = schemaMeta.base;
  var schemaPrefixesCopy = {};
  for (var prefix in schemaMeta.prefixes || {})
    schemaPrefixesCopy[prefix] = schemaMeta.prefixes[prefix];
  var dataBase = dataMeta.base;
  var dataPrefixesCopy = {};
  for (var prefix in dataMeta.prefixes || {})
    dataPrefixesCopy[prefix] = dataMeta.prefixes[prefix];

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  var parser = new ShapeMapJison();

  function runParser () {
    ShapeMapJison._schemaPrefixes = Object.create(schemaPrefixesCopy);
    ShapeMapJison._setSchemaBase(schemaBase);
    ShapeMapJison._dataPrefixes = Object.create(dataPrefixesCopy);
    ShapeMapJison._setDataBase(dataBase);
    ShapeMapJison._setFileName(baseIRI);
    try {
      return ShapeMapJison.prototype.parse.apply(parser, arguments);
    } catch (e) {
      // use the lexer's pretty-printing
      var lineNo = "lexer" in parser.yy ? parser.yy.lexer.yylineno + 1 : 1;
      var pos = "lexer" in parser.yy ? parser.yy.lexer.showPosition() : "";
      var t = Error(`${baseIRI}(${lineNo}): ${e.message}\n${pos}`);
      Error.captureStackTrace(t, runParser);
      parser.reset();
      throw t;
    }
  }
  parser.parse = runParser;
  parser._setSchemaBase = function (base) {
    ShapeMapJison._setSchemaBase;
    schemaBase = base;
  }
  parser._setDataBase = function (base) {
    ShapeMapJison._setDataBase;
    dataBase = base;
  }
  parser._setFileName = ShapeMapJison._setFileName;
  parser.reset = ShapeMapJison.reset;
  return parser;
}

return {
  construct: prepareParser
};
})();

if (true)
  module.exports = ShapeMapParser;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.16 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ShapeMapJison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,7],$V1=[1,16],$V2=[1,11],$V3=[1,14],$V4=[1,25],$V5=[1,24],$V6=[1,21],$V7=[1,22],$V8=[1,23],$V9=[1,28],$Va=[1,26],$Vb=[1,27],$Vc=[1,29],$Vd=[1,12],$Ve=[1,13],$Vf=[1,15],$Vg=[4,9],$Vh=[16,19,20,21],$Vi=[2,25],$Vj=[16,19,20,21,37],$Vk=[16,19,20,21,31,34,37,39,46,48,50,53,54,55,56,76,77,78,79,80,81,82],$Vl=[4,9,16,19,20,21,37,43,74,75],$Vm=[4,9,43],$Vn=[29,46,80,81,82],$Vo=[4,9,42,43],$Vp=[1,59],$Vq=[46,79,80,81,82],$Vr=[31,34,39,46,48,50,53,54,55,56,76,77,78,80,81,82],$Vs=[1,94],$Vt=[1,85],$Vu=[1,86],$Vv=[1,87],$Vw=[1,90],$Vx=[1,91],$Vy=[1,92],$Vz=[1,93],$VA=[1,95],$VB=[33,48,49,50,53,54,55,56,63],$VC=[4,9,37,65],$VD=[1,99],$VE=[9,37],$VF=[9,65];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"shapeMap":3,"EOF":4,"pair":5,"Q_O_QGT_COMMA_E_S_Qpair_E_C_E_Star":6,"QGT_COMMA_E_Opt":7,"O_QGT_COMMA_E_S_Qpair_E_C":8,"GT_COMMA":9,"nodeSelector":10,"statusAndShape":11,"Qreason_E_Opt":12,"QjsonAttributes_E_Opt":13,"reason":14,"jsonAttributes":15,"GT_AT":16,"Qstatus_E_Opt":17,"shapeSelector":18,"ATSTART":19,"ATPNAME_NS":20,"ATPNAME_LN":21,"status":22,"objectTerm":23,"triplePattern":24,"IT_SPARQL":25,"string":26,"nodeIri":27,"shapeIri":28,"START":29,"subjectTerm":30,"BLANK_NODE_LABEL":31,"literal":32,"GT_LCURLEY":33,"IT_FOCUS":34,"nodePredicate":35,"O_QobjectTerm_E_Or_QIT___E_C":36,"GT_RCURLEY":37,"O_QsubjectTerm_E_Or_QIT___E_C":38,"IT__":39,"GT_NOT":40,"GT_OPT":41,"GT_DIVIDE":42,"GT_DOLLAR":43,"O_QAPPINFO_COLON_E_Or_QAPPINFO_SPACE_COLON_E_C":44,"jsonValue":45,"APPINFO_COLON":46,"APPINFO_SPACE_COLON":47,"IT_false":48,"IT_null":49,"IT_true":50,"jsonObject":51,"jsonArray":52,"INTEGER":53,"DECIMAL":54,"DOUBLE":55,"STRING_LITERAL2":56,"Q_O_QjsonMember_E_S_QGT_COMMA_E_S_QjsonMember_E_Star_C_E_Opt":57,"O_QGT_COMMA_E_S_QjsonMember_E_C":58,"jsonMember":59,"Q_O_QGT_COMMA_E_S_QjsonMember_E_C_E_Star":60,"O_QjsonMember_E_S_QGT_COMMA_E_S_QjsonMember_E_Star_C":61,"STRING_LITERAL2_COLON":62,"GT_LBRACKET":63,"Q_O_QjsonValue_E_S_QGT_COMMA_E_S_QjsonValue_E_Star_C_E_Opt":64,"GT_RBRACKET":65,"O_QGT_COMMA_E_S_QjsonValue_E_C":66,"Q_O_QGT_COMMA_E_S_QjsonValue_E_C_E_Star":67,"O_QjsonValue_E_S_QGT_COMMA_E_S_QjsonValue_E_Star_C":68,"rdfLiteral":69,"numericLiteral":70,"booleanLiteral":71,"Q_O_QLANGTAG_E_Or_QGT_DTYPE_E_S_QnodeIri_E_C_E_Opt":72,"O_QLANGTAG_E_Or_QGT_DTYPE_E_S_QnodeIri_E_C":73,"LANGTAG":74,"GT_DTYPE":75,"STRING_LITERAL1":76,"STRING_LITERAL_LONG1":77,"STRING_LITERAL_LONG2":78,"IT_a":79,"IRIREF":80,"PNAME_LN":81,"PNAME_NS":82,"$accept":0,"$end":1},
terminals_: {2:"error",4:"EOF",9:"GT_COMMA",16:"GT_AT",19:"ATSTART",20:"ATPNAME_NS",21:"ATPNAME_LN",25:"IT_SPARQL",29:"START",31:"BLANK_NODE_LABEL",33:"GT_LCURLEY",34:"IT_FOCUS",37:"GT_RCURLEY",39:"IT__",40:"GT_NOT",41:"GT_OPT",42:"GT_DIVIDE",43:"GT_DOLLAR",46:"APPINFO_COLON",47:"APPINFO_SPACE_COLON",48:"IT_false",49:"IT_null",50:"IT_true",53:"INTEGER",54:"DECIMAL",55:"DOUBLE",56:"STRING_LITERAL2",62:"STRING_LITERAL2_COLON",63:"GT_LBRACKET",65:"GT_RBRACKET",74:"LANGTAG",75:"GT_DTYPE",76:"STRING_LITERAL1",77:"STRING_LITERAL_LONG1",78:"STRING_LITERAL_LONG2",79:"IT_a",80:"IRIREF",81:"PNAME_LN",82:"PNAME_NS"},
productions_: [0,[3,1],[3,4],[8,2],[6,0],[6,2],[7,0],[7,1],[5,4],[12,0],[12,1],[13,0],[13,1],[11,3],[11,1],[11,1],[11,1],[17,0],[17,1],[10,1],[10,1],[10,2],[10,2],[18,1],[18,1],[30,1],[30,1],[23,1],[23,1],[24,5],[24,5],[36,1],[36,1],[38,1],[38,1],[22,1],[22,1],[14,2],[15,3],[44,1],[44,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[45,1],[51,3],[58,2],[60,0],[60,2],[61,2],[57,0],[57,1],[59,2],[52,3],[66,2],[67,0],[67,2],[68,2],[64,0],[64,1],[32,1],[32,1],[32,1],[70,1],[70,1],[70,1],[69,2],[73,1],[73,2],[72,0],[72,1],[71,1],[71,1],[26,1],[26,1],[26,1],[26,1],[35,1],[35,1],[27,1],[27,1],[27,1],[27,1],[28,1],[28,1],[28,1],[28,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

          return []
        
break;
case 2:

          return [$$[$0-3]].concat($$[$0-2])
        
break;
case 3: case 51: case 59:
this.$ = $$[$0];
break;
case 4: case 60: case 63:
this.$ = [  ];
break;
case 5: case 61:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 8:
this.$ = extend({ node: $$[$0-3] }, $$[$0-2], $$[$0-1], $$[$0]);
break;
case 9: case 11: case 52: case 55: case 74:
this.$ = {  };
break;
case 13:
this.$ = extend({ shape: $$[$0] }, $$[$0-1]);
break;
case 14:
this.$ = { shape: ShapeMap.start };
break;
case 15:

        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        this.$ = { shape: expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, $$[$0].length - 1)) };
      
break;
case 16:

        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        var namePos = $$[$0].indexOf(':');
        this.$ = { shape: expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, namePos)) + $$[$0].substr(namePos + 1) };
      
break;
case 17:
this.$ = { status: 'conformant' } // defaults to conformant;
break;
case 18:
this.$ = { status: $$[$0] };
break;
case 21:
this.$ = { type: "Extension", language: "http://www.w3.org/ns/shex#Extensions-sparql", lexical: $$[$0]["@value"] };
break;
case 22:
this.$ = { type: "Extension", language: $$[$0-1], lexical: $$[$0]["@value"] };
break;
case 24:
this.$ = ShapeMap.start;
break;
case 29:
this.$ = { type: "TriplePattern", subject: ShapeMap.focus, predicate: $$[$0-2], object: $$[$0-1] };
break;
case 30:
this.$ = { type: "TriplePattern", subject: $$[$0-3], predicate: $$[$0-2], object: ShapeMap.focus };
break;
case 32: case 34: case 42:
this.$ = null;
break;
case 35:
this.$ = 'nonconformant';
break;
case 36:
this.$ = 'unknown';
break;
case 37:
this.$ = { reason: $$[$0] };
break;
case 38:
this.$ = { appinfo: $$[$0] };
break;
case 41:
this.$ = false;
break;
case 43:
this.$ = true;
break;
case 46: case 47: case 48:
this.$ = parseFloat($$[$0]);
break;
case 49:
this.$ = unescapeString($$[$0], 1)["@value"];
break;
case 50: case 58:
this.$ = $$[$0-1];
break;
case 53: case 54: case 71:
this.$ = extend($$[$0-1], $$[$0]);
break;
case 57:

        this.$ = {  };
        var t = $$[$0-1].substr(0, $$[$0-1].length - 1).trim(); // remove trailing ':' and spaces
        this.$[unescapeString(t, 1)["@value"]] = $$[$0];
      
break;
case 62:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 68:
this.$ = createLiteral($$[$0], XSD_INTEGER);
break;
case 69:
this.$ = createLiteral($$[$0], XSD_DECIMAL);
break;
case 70:
this.$ = createLiteral($$[$0], XSD_DOUBLE);
break;
case 72:
this.$ = obj("@language", $$[$0].substr(1).toLowerCase());
break;
case 73:
this.$ = obj("@type", $$[$0]);
break;
case 76:
this.$ = createLiteral("true", XSD_BOOLEAN);
break;
case 77:
this.$ = createLiteral("false", XSD_BOOLEAN);
break;
case 78: case 80:
this.$ = unescapeString($$[$0], 1);
break;
case 79: case 81:
this.$ = unescapeString($$[$0], 3);
break;
case 83:
this.$ = "http://www.w3.org/1999/02/22-rdf-syntax-ns#type";
break;
case 84:

        var unesc = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._dataBase === null || absoluteIRI.test(unesc) ? unesc : _resolveDataIRI(unesc)
      
break;
case 85: case 86: case 90:

        var namePos = $$[$0].indexOf(':');
        this.$ = expandPrefix(Parser._dataPrefixes, $$[$0].substr(0, namePos)) + unescapeText($$[$0].substr(namePos + 1), pnameEscapeReplacements);
    
break;
case 87:

        this.$ = expandPrefix(Parser._dataPrefixes, $$[$0].substr(0, $$[$0].length - 1));
    
break;
case 88:

        var unesc = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._schemaBase === null || absoluteIRI.test(unesc) ? unesc : _resolveSchemaIRI(unesc)
      
break;
case 89:

        var namePos = $$[$0].indexOf(':');
        this.$ = expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, namePos)) + unescapeText($$[$0].substr(namePos + 1), pnameEscapeReplacements);
    
break;
case 91:

        this.$ = expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, $$[$0].length - 1));
    
break;
}
},
table: [{3:1,4:[1,2],5:3,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},{1:[3]},{1:[2,1]},o($Vg,[2,4],{6:30}),{11:31,16:[1,32],19:[1,33],20:[1,34],21:[1,35]},o($Vh,[2,19]),o($Vh,[2,20]),{26:36,56:$V9,76:$Va,77:$Vb,78:$Vc},o($Vh,$Vi,{26:37,56:$V9,76:$Va,77:$Vb,78:$Vc}),o($Vj,[2,27]),o($Vj,[2,28]),{27:42,30:40,31:$V1,34:[1,38],38:39,39:[1,41],46:$V3,80:$Vd,81:$Ve,82:$Vf},o($Vk,[2,84]),o($Vk,[2,85]),o($Vk,[2,86]),o($Vk,[2,87]),o([16,19,20,21,37,46,79,80,81,82],[2,26]),o($Vj,[2,65]),o($Vj,[2,66]),o($Vj,[2,67]),o($Vj,[2,74],{72:43,73:44,74:[1,45],75:[1,46]}),o($Vj,[2,68]),o($Vj,[2,69]),o($Vj,[2,70]),o($Vj,[2,76]),o($Vj,[2,77]),o($Vl,[2,78]),o($Vl,[2,79]),o($Vl,[2,80]),o($Vl,[2,81]),{4:[2,6],7:47,8:48,9:[1,49]},o($Vm,[2,9],{12:50,14:51,42:[1,52]}),o($Vn,[2,17],{17:53,22:54,40:[1,55],41:[1,56]}),o($Vo,[2,14]),o($Vo,[2,15]),o($Vo,[2,16]),o($Vh,[2,21]),o($Vh,[2,22]),{27:58,35:57,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},{27:58,35:60,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},o($Vq,[2,33]),o($Vq,[2,34]),o([37,46,79,80,81,82],$Vi),o($Vj,[2,71]),o($Vj,[2,75]),o($Vj,[2,72]),{27:61,46:$V3,80:$Vd,81:$Ve,82:$Vf},{4:[1,62]},o($Vg,[2,5]),{4:[2,7],5:63,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vg,[2,11],{13:64,15:65,43:[1,66]}),o($Vm,[2,10]),{26:67,56:$V9,76:$Va,77:$Vb,78:$Vc},{18:68,28:69,29:[1,70],46:[1,73],80:[1,71],81:[1,72],82:[1,74]},o($Vn,[2,18]),o($Vn,[2,35]),o($Vn,[2,36]),{23:76,26:20,27:42,30:9,31:$V1,32:10,36:75,39:[1,77],46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vr,[2,82]),o($Vr,[2,83]),{34:[1,78]},o($Vj,[2,73]),{1:[2,2]},o($Vg,[2,3]),o($Vg,[2,8]),o($Vg,[2,12]),{44:79,46:[1,80],47:[1,81]},o($Vm,[2,37]),o($Vo,[2,13]),o($Vo,[2,23]),o($Vo,[2,24]),o($Vo,[2,88]),o($Vo,[2,89]),o($Vo,[2,90]),o($Vo,[2,91]),{37:[1,82]},{37:[2,31]},{37:[2,32]},{37:[1,83]},{33:$Vs,45:84,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VB,[2,39]),o($VB,[2,40]),o($Vh,[2,29]),o($Vh,[2,30]),o($Vg,[2,38]),o($VC,[2,41]),o($VC,[2,42]),o($VC,[2,43]),o($VC,[2,44]),o($VC,[2,45]),o($VC,[2,46]),o($VC,[2,47]),o($VC,[2,48]),o($VC,[2,49]),{37:[2,55],57:96,59:98,61:97,62:$VD},{33:$Vs,45:102,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA,64:100,65:[2,63],68:101},{37:[1,103]},{37:[2,56]},o($VE,[2,52],{60:104}),{33:$Vs,45:105,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},{65:[1,106]},{65:[2,64]},o($VF,[2,60],{67:107}),o($VC,[2,50]),{9:[1,109],37:[2,54],58:108},o($VE,[2,57]),o($VC,[2,58]),{9:[1,111],65:[2,62],66:110},o($VE,[2,53]),{59:112,62:$VD},o($VF,[2,61]),{33:$Vs,45:113,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VE,[2,51]),o($VF,[2,59])],
defaultActions: {2:[2,1],62:[2,2],76:[2,31],77:[2,32],97:[2,56],101:[2,64]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        function _parseError (msg, hash) {
            this.message = msg;
            this.hash = hash;
        }
        _parseError.prototype = new Error();

        throw new _parseError(str, hash);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  /*
    ShapeMap parser in the Jison parser generator format.
  */

  var ShapeMap = __webpack_require__(18);

  // Common namespaces and entities
  var XSD = 'http://www.w3.org/2001/XMLSchema#',
      XSD_INTEGER  = XSD + 'integer',
      XSD_DECIMAL  = XSD + 'decimal',
      XSD_FLOAT   = XSD + 'float',
      XSD_DOUBLE   = XSD + 'double',
      XSD_BOOLEAN  = XSD + 'boolean';

  var numericDatatypes = [
      XSD + "integer",
      XSD + "decimal",
      XSD + "float",
      XSD + "double",
      XSD + "string",
      XSD + "boolean",
      XSD + "dateTime",
      XSD + "nonPositiveInteger",
      XSD + "negativeInteger",
      XSD + "long",
      XSD + "int",
      XSD + "short",
      XSD + "byte",
      XSD + "nonNegativeInteger",
      XSD + "unsignedLong",
      XSD + "unsignedInt",
      XSD + "unsignedShort",
      XSD + "unsignedByte",
      XSD + "positiveInteger"
  ];

  var absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  var numericFacets = ["mininclusive", "minexclusive",
                       "maxinclusive", "maxexclusive"];

  // Extends a base object with properties of other objects
  function extend(base) {
    if (!base) base = {};
    for (var i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (var name in arg)
        base[name] = arg[name];
    return base;
  }

  // N3.js:lib/N3Parser.js<0.4.5>:58 with
  //   s/this\./Parser./g
  // ### `_setSchemaBase` sets the base IRI to resolve relative IRIs.
  Parser._setSchemaBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._schemaBase = baseIRI) {
      Parser._schemaBasePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._schemaBaseRoot   = baseIRI[0];
      Parser._schemaBaseScheme = baseIRI[1];
    }
  }
  Parser._setDataBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._dataBase = baseIRI) {
      Parser._dataBasePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._dataBaseRoot   = baseIRI[0];
      Parser._dataBaseScheme = baseIRI[1];
    }
  }

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveSchemaIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function _resolveSchemaIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._schemaBase;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._schemaBase + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._schemaBase.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._schemaBaseScheme : Parser._schemaBaseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._schemaBasePath + iri);
    }
    }
  }
  function _resolveDataIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._dataBase;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._dataBase + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._dataBase.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._dataBaseScheme : Parser._dataBaseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._dataBasePath + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    var result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  function obj() {
    var ret = {  };
    for (var i = 0; i < arguments.length; i+= 2) {
      ret[arguments[i]] = arguments[i+1];
    }
    return ret;
  }

  // Creates a literal with the given value and type
  function createLiteral(value, type) {
    return obj("@value", value, "@type", type );
  }

  // Creates a new blank node identifier
  function blank() {
    return '_:b' + blankId++;
  };
  var blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser.valueExprDefns = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._schemaBase = Parser._schemaBasePath = Parser._schemaBaseRoot = Parser._schemaBaseIRIScheme = null;
  }
  var _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  var stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
                                   't': '\t', 'b': '\b', 'n': '\n', 'r': '\r', 'f': '\f' },
      pnameEscapeReplacements = {
        '\\': '\\', "'": "'", '"': '"',
        'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
        '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
        '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
        '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
      };


  // Translates string escape codes in the string into their textual equivalent
  function unescapeString(string, trimLength) {
    string = string.substring(trimLength, string.length - trimLength);
    return obj("@value", unescapeText(string, stringEscapeReplacements));
  }

  function unescapeLangString(string, trimLength) {
    var at = string.lastIndexOf("@");
    var lang = string.substr(at);
    string = string.substr(0, at);
    var u = unescapeString(string, trimLength);
    return extend(u, obj("@language", lang.substr(1).toLowerCase()));
  }

  function error (msg) {
    Parser.reset();
    throw new Error(msg);
  }

  // Expand declared prefix or throw Error
  function expandPrefix (prefixes, prefix) {
    if (!(prefix in prefixes))
      error('Parse error; unknown prefix: ' + prefix);
    return prefixes[prefix];
  }

  // Add a shape to the map
  function addShape (label, shape) {
    if (Parser.productions && label in Parser.productions)
      error("Structural error: "+label+" is a shape");
    if (!Parser.shapes)
      Parser.shapes = {};
    if (label in Parser.shapes) {
      if (Parser.options.duplicateShape === "replace")
        Parser.shapes[label] = shape;
      else if (Parser.options.duplicateShape !== "ignore")
        error("Parse error: "+label+" already defined");
    } else
      Parser.shapes[label] = shape;
  }

  // Add a production to the map
  function addProduction (label, production) {
    if (Parser.shapes && label in Parser.shapes)
      error("Structural error: "+label+" is a shape");
    if (!Parser.productions)
      Parser.productions = {};
    if (label in Parser.productions) {
      if (Parser.options.duplicateShape === "replace")
        Parser.productions[label] = production;
      else if (Parser.options.duplicateShape !== "ignore")
        error("Parse error: "+label+" already defined");
    } else
      Parser.productions[label] = production;
  }

  function shapeJunction (type, container, elts) {
    if (elts.length === 0) {
      return container;
    } else if (container.type === type) {
      container.shapeExprs = container.shapeExprs.concat(elts);
      return container;
    } else {
      return { type: type, shapeExprs: [container].concat(elts) };
    }
  }

  var EmptyObject = {  };
  var EmptyShape = { type: "Shape" };

  // <?INCLUDE from ShExUtil. Factor into `rdf-token` module? ?>
  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  function unescapeText (string, replacements) {
    var regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        var charCode;
        if (unicode4) {
          charCode = parseInt(unicode4, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          return String.fromCharCode(charCode);
        }
        else if (unicode8) {
          charCode = parseInt(unicode8, 16);
          if (isNaN(charCode)) throw new Error(); // can never happen (regex), but helps performance
          if (charCode < 0xFFFF) return String.fromCharCode(charCode);
          return String.fromCharCode(0xD800 + ((charCode -= 0x10000) >> 10), 0xDC00 + (charCode & 0x3FF));
        }
        else {
          var replacement = replacements[escapedChar];
          if (!replacement) throw new Error("no replacement found for '" + escapedChar + "'");
          return replacement;
        }
      });
      return string;
    }
    catch (error) { console.warn(error); return ''; }
  }
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/**/
break;
case 1:return 47;
break;
case 2:return 62;
break;
case 3:return 34;
break;
case 4:return 29;
break;
case 5:return 19;
break;
case 6:return 25;
break;
case 7:return 21;
break;
case 8:return 20;
break;
case 9:return 74;
break;
case 10:return 81;
break;
case 11:return 46;
break;
case 12:return 82;
break;
case 13:return 55;
break;
case 14:return 54;
break;
case 15:return 53;
break;
case 16:return 80;
break;
case 17:return 31;
break;
case 18:return 77;
break;
case 19:return 78;
break;
case 20:return 76;
break;
case 21:return 56;
break;
case 22:return 79;
break;
case 23:return 9;
break;
case 24:return 33;
break;
case 25:return 37;
break;
case 26:return 16;
break;
case 27:return 40;
break;
case 28:return 41;
break;
case 29:return 42;
break;
case 30:return 43;
break;
case 31:return 63;
break;
case 32:return 65;
break;
case 33:return 75;
break;
case 34:return 39;
break;
case 35:return 50;
break;
case 36:return 48;
break;
case 37:return 49;
break;
case 38:return 4;
break;
case 39:return 'unexpected word "'+yy_.yytext+'"';
break;
case 40:return 'invalid character '+yy_.yytext;
break;
}
},
rules: [/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^\/]|\\\/))*\*\/))/,/^(?:(appinfo[\u0020\u000A\u0009]+:))/,/^(?:("([^\u0022\u005C\u000A\u000D]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"[\u0020\u000A\u0009]*:))/,/^(?:([Ff][Oo][Cc][Uu][Ss]))/,/^(?:([Ss][Tt][Aa][Rr][Tt]))/,/^(?:(@[Ss][Tt][Aa][Rr][Tt]))/,/^(?:([Ss][Pp][Aa][Rr][Qq][Ll]))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(appinfo:))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:a\b)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:@)/,/^(?:!)/,/^(?:\?)/,/^(?:\/)/,/^(?:\$)/,/^(?:\[)/,/^(?:\])/,/^(?:\^\^)/,/^(?:_\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = ShapeMapJison;
exports.Parser = ShapeMapJison.Parser;
exports.parse = function () { return ShapeMapJison.parse.apply(ShapeMapJison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(3).readFileSync(__webpack_require__(2).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(19)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var HierarchyClosure = (function () {
  /** create a hierarchy object
   * This object keeps track of direct children and parents as well as transitive children and parents.
   */
  function makeHierarchy () {
    let roots = {}
    let parents = {}
    let children = {}
    let holders = {}
    return {
      add: function (parent, child) {
        if (// test if this is a novel entry.
          (parent in children && children[parent].indexOf(child) !== -1)) {
          return
        }
        let target = parent in holders
          ? getNode(parent)
          : (roots[parent] = getNode(parent)) // add new parents to roots.
        let value = getNode(child)

        target[child] = value
        delete roots[child]

        // // maintain hierarchy (direct and confusing)
        // children[parent] = children[parent].concat(child, children[child])
        // children[child].forEach(c => parents[c] = parents[c].concat(parent, parents[parent]))
        // parents[child] = parents[child].concat(parent, parents[parent])
        // parents[parent].forEach(p => children[p] = children[p].concat(child, children[child]))

        // maintain hierarchy (generic and confusing)
        updateClosure(children, parents, child, parent)
        updateClosure(parents, children, parent, child)
        function updateClosure (container, members, near, far) {
          container[far] = container[far].filter(
            e => /* e !== near && */ container[near].indexOf(e) === -1
          ).concat(container[near].indexOf(near) === -1 ? [near] : [], container[near])
          container[near].forEach(
            n => (members[n] = members[n].filter(
              e => e !== far && members[far].indexOf(e) === -1
            ).concat(members[far].indexOf(far) === -1 ? [far] : [], members[far]))
          )
        }

        function getNode (node) {
          if (!(node in holders)) {
            parents[node] = []
            children[node] = []
            holders[node] = {}
          }
          return holders[node]
        }
      },
      roots: roots,
      parents: parents,
      children: children
    }
  }

  function depthFirst (n, f, p) {
    return Object.keys(n).reduce((ret, k) => {
      return ret.concat(
        depthFirst(n[k], f, k),
        p ? f(k, p) : []) // outer invocation can have null parent
    }, [])
  }

  return { create: makeHierarchy, depthFirst }
})()

/* istanbul ignore next */
if (true) {
  module.exports = HierarchyClosure
}


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 43 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* ShExValidator - javascript module to validate a graph with respect to Shape Expressions
 *
 * Status: 1/2 tested, no known bugs.
 *
 * TODO:
 *   constraint violation reporting.
 */

var ShExValidator = (function () {
var UNBOUNDED = -1;

// interface constants
var Start = { term: "START" }
var InterfaceOptions = {
  "coverage": {
    "firstError": "fail on first error (usually used with eval-simple-1err)",
    "exhaustive": "find as many errors as possible (usually used with eval-threaded-nerr)"
  }
};

var VERBOSE = "VERBOSE" in process.env;
// **ShExValidator** provides ShEx utility functions

var ProgramFlowError = { type: "ProgramFlowError", errors: { type: "UntrackedError" } };

var ShExTerm = __webpack_require__(10);
let ShExVisitor = __webpack_require__(20);
let ShExUtil = __webpack_require__(11);
const Hierarchy = __webpack_require__(45)

function getLexicalValue (term) {
  return ShExTerm.isIRI(term) ? term :
    ShExTerm.isLiteral(term) ? ShExTerm.getLiteralValue(term) :
    term.substr(2); // bnodes start with "_:"
}


var XSD = "http://www.w3.org/2001/XMLSchema#";
var integerDatatypes = [
  XSD + "integer",
  XSD + "nonPositiveInteger",
  XSD + "negativeInteger",
  XSD + "long",
  XSD + "int",
  XSD + "short",
  XSD + "byte",
  XSD + "nonNegativeInteger",
  XSD + "unsignedLong",
  XSD + "unsignedInt",
  XSD + "unsignedShort",
  XSD + "unsignedByte",
  XSD + "positiveInteger"
];

var decimalDatatypes = [
  XSD + "decimal",
].concat(integerDatatypes);

var numericDatatypes = [
  XSD + "float",
  XSD + "double"
].concat(decimalDatatypes);

var numericParsers = {};
numericParsers[XSD + "integer"] = function (label, parseError) {
  if (!(label.match(/^[+-]?[0-9]+$/))) {
    parseError("illegal integer value '" + label + "'");
  }
  return parseInt(label);
};
numericParsers[XSD + "decimal"] = function (label, parseError) {
  if (!(label.match(/^[+-]?(?:[0-9]*\.[0-9]+|[0-9]+)$/))) { // XSD has no pattern for decimal?
    parseError("illegal decimal value '" + label + "'");
  }
  return parseFloat(label);
};
const DECIMAL_REGEX = /^[+\-]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][+\-]?[0-9]+)?$/;
numericParsers[XSD + "float"  ] = function (label, parseError) {
  if (label === "NaN") return NaN;
  if (label === "INF") return Infinity;
  if (label === "-INF") return -Infinity;
  if (!(label.match(DECIMAL_REGEX))) { // XSD has no pattern for float?
    parseError("illegal float value '" + label + "'");
  }
  return parseFloat(label);
};
numericParsers[XSD + "double" ] = function (label, parseError) {
  if (label === "NaN") return NaN;
  if (label === "INF") return Infinity;
  if (label === "-INF") return -Infinity;
  if (!(label.match(DECIMAL_REGEX))) {
    parseError("illegal double value '" + label + "'");
  }
  return Number(label);
};

testRange = function (value, datatype, parseError) {
  const ranges = {
    //    integer            -1 0 1 +1 | "" -1.0 +1.0 1e0 NaN INF
    //    decimal            -1 0 1 +1 -1.0 +1.0 | "" 1e0 NaN INF
    //    float              -1 0 1 +1 -1.0 +1.0 1e0 1E0 NaN INF -INF | "" +INF
    //    double             -1 0 1 +1 -1.0 +1.0 1e0 1E0 NaN INF -INF | "" +INF
    //    nonPositiveInteger -1 0 +0 -0 | 1 +1 1a a1
    //    negativeInteger    -1 | 0 +0 -0 1
    //    long               -1 0 1 +1 |
    //    int                -1 0 1 +1 |
    //    short              -32768 0 32767 | -32769 32768
    //    byte               -128 0 127 | "" -129 128
    //    nonNegativeInteger 0 -0 +0 1 +1 | -1
    //    unsignedLong       0 1 | -1
    //    unsignedInt        0 1 | -1
    //    unsignedShort      0 65535 | -1 65536
    //    unsignedByte       0 255 | -1 256
    //    positiveInteger    1 | -1 0
    //    string             "" "a" "0"
    //    boolean            true false 0 1 | "" TRUE FALSE tRuE fAlSe -1 2 10 01
    //    dateTime           "2012-01-02T12:34:56.78Z" | "" "2012-01-02T" "2012-01-02"
    integer:            { min: -Infinity           , max: Infinity },
    decimal:            { min: -Infinity           , max: Infinity },
    float:              { min: -Infinity           , max: Infinity },
    double:             { min: -Infinity           , max: Infinity },
    nonPositiveInteger: { min: -Infinity           , max: 0        },
    negativeInteger:    { min: -Infinity           , max: -1       },
    long:               { min: -9223372036854775808, max: 9223372036854775807 },
    int:                { min: -2147483648         , max: 2147483647 },
    short:              { min: -32768              , max: 32767    },
    byte:               { min: -128                , max: 127      },
    nonNegativeInteger: { min: 0                   , max: Infinity },
    unsignedLong:       { min: 0                   , max: 18446744073709551615 },
    unsignedInt:        { min: 0                   , max: 4294967295 },
    unsignedShort:      { min: 0                   , max: 65535    },
    unsignedByte:       { min: 0                   , max: 255      },
    positiveInteger:    { min: 1                   , max: Infinity }
  }
  var parms = ranges[datatype.substr(XSD.length)];
  if (!parms) throw Error("unexpected datatype: " + datatype);
  if (value < parms.min) {
    parseError("\"" + value + "\"^^<" + datatype + "> is less than the min:", parms.min);
  } else if (value > parms.max) {
    parseError("\"" + value + "\"^^<" + datatype + "> is greater than the max:", parms.min);
  }
};

/*
function intSubType (spec, label, parseError) {
  var ret = numericParsers[XSD + "integer"](label, parseError);
  if ("min" in spec && ret < spec.min)
    parseError("illegal " + XSD + spec.type + " value '" + label + "' should not be < " + spec.min);
  if ("max" in spec && ret > spec.max)
    parseError("illegal " + XSD + spec.type + " value '" + label + "' should not be > " + spec.max);
  return ret;
}
[{type: "nonPositiveInteger", max: 0},
 {type: "negativeInteger", max: -1},
 {type: "long", min: -9223372036854775808, max: 9223372036854775807}, // beyond IEEE double
 {type: "int", min: -2147483648, max: 2147483647},
 {type: "short", min: -32768, max: 32767},
 {type: "byte", min: -128, max: 127},
 {type: "nonNegativeInteger", min: 0},
 {type: "unsignedLong", min: 0, max: 18446744073709551615},
 {type: "unsignedInt", min: 0, max: 4294967295},
 {type: "unsignedShort", min: 0, max: 65535},
 {type: "unsignedByte", min: 0, max: 255},
 {type: "positiveInteger", min: 1}].forEach(function (i) {
   numericParsers[XSD + i.type ] = function (label, parseError) {
     return intSubType(i, label, parseError);
   };
 });
*/

var stringTests = {
  length   : function (v, l) { return v.length === l; },
  minlength: function (v, l) { return v.length  >= l; },
  maxlength: function (v, l) { return v.length  <= l; }
};

var numericValueTests = {
  mininclusive  : function (n, m) { return n >= m; },
  minexclusive  : function (n, m) { return n >  m; },
  maxinclusive  : function (n, m) { return n <= m; },
  maxexclusive  : function (n, m) { return n <  m; }
};

var decimalLexicalTests = {
  totaldigits   : function (v, d) {
    var m = v.match(/[0-9]/g);
    return m && m.length <= d;
  },
  fractiondigits: function (v, d) {
    var m = v.match(/^[+-]?[0-9]*\.?([0-9]*)$/);
    return m && m[1].length <= d;
  }
};

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          var ret = { value: ShExTerm.getLiteralValue(term) };
          var dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          var lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

/* ShExValidator_constructor - construct an object for validating a schema.
 *
 * schema: a structure produced by a ShEx parser or equivalent.
 * options: object with controls for
 *   lax(true): boolean: whine about missing types in schema.
 *   diagnose(false): boolean: makde validate return a structure with errors.
 */
function ShExValidator_constructor(schema, options) {
  if (!(this instanceof ShExValidator_constructor))
    return new ShExValidator_constructor(schema, options);
  let index = schema._index || ShExVisitor.index(schema)
  this.type = "ShExValidator";
  options = options || {};
  this.options = options;
  this.options.coverage = this.options.coverage || "exhaustive";
  if (!("noCache" in options && options.noCache))
    this.known = {};

  var _ShExValidator = this;
  this.schema = schema;
  this._expect = this.options.lax ? noop : expect; // report errors on missing types.
  this._optimize = {}; // optimizations:
    // hasRepeatedGroups: whether there are patterns like (:p1 ., :p2 .)*
  this.reset = function () {  }; // included in case we need it later.
  // var regexModule = this.options.regexModule || require("@shexjs/eval-simple-1err");
  var regexModule = this.options.regexModule || __webpack_require__(46);

  /* getAST - compile a traditional regular expression abstract syntax tree.
   * Tested but not used at present.
   */
  this.getAST = function () {
    return {
      type: "AST",
      shapes: schema.shapes.reduce(function (ret, shape) {
        ret[shape.id] = {
          type: "ASTshape",
          expression: _compileShapeToAST(shape.expression, [], _ShExValidator.schema)
        };
        return ret;
      }, {})
    };
  };

  /* indexTripleConstraints - compile regular expression and index triple constraints
   */
  this.indexTripleConstraints = function (expression) {
    // list of triple constraints from (:p1 ., (:p2 . | :p3 .))
    var tripleConstraints = [];

    if (expression)
      indexTripleConstraints_dive(expression);
    return tripleConstraints;

    function indexTripleConstraints_dive (expr) {
      if (typeof expr === "string") // Inclusion
        return indexTripleConstraints_dive(index.tripleExprs[expr]);

      else if (expr.type === "TripleConstraint") {
        tripleConstraints.push(expr);
        return [tripleConstraints.length - 1]; // index of expr
      }

      else if (expr.type === "OneOf" || expr.type === "EachOf")
        return expr.expressions.reduce(function (acc, nested) {
          return acc.concat(indexTripleConstraints_dive(nested));
        }, []);

      else if (expr.type === "NestedShape")
        return [];

      else
        runtimeError("unexpected expr type: " + expr.type);
    };
  };

  /* emptyTracker - a tracker that does nothing
   */
  this.emptyTracker = function () {
    var noop = x => x;
    return {
      recurse: noop,
      known: noop,
      enter: function (point, label) { ++this.depth; },
      exit: function (point, label, ret) { --this.depth; },
      depth: 0
    };
  };

  /* validate - test point in db against the schema for labelOrShape
   * depth: level of recurssion; for logging.
   */
  this.validate = function (db, point, label, tracker, seen, subGraph) {
    // default to schema's start shape
    if (typeof point === "object" && "termType" in point) {
      point = ShExTerm.internalTerm(point)
    }
    if (typeof point === "object") {
      var shapeMap = point;
      if (this.options.results === "api") {
        return shapeMap.map(pair => {
          var time = new Date();
          var res = this.validate(db, pair.node, pair.shape, label, tracker); // really tracker and seen
          time = new Date() - time;
          return {
            node: pair.node,
            shape: pair.shape,
            status: "errors" in res ? "nonconformant" : "conformant",
            appinfo: res,
            elapsed: time
          };
        });
      }
      var results = shapeMap.reduce((ret, pair) => {
        var res = this.validate(db, pair.node, pair.shape, label, tracker, subGraph); // really tracker and seen
        return "errors" in res ?
          { passes: ret.passes, failures: ret.failures.concat(res) } :
          { passes: ret.passes.concat(res), failures: ret.failures } ;
      }, {passes: [], failures: []});
      if (false) { var _add, ret; }
      if (results.failures.length > 0) {
        return results.failures.length !== 1 ?
          { type: "FailureList", errors: results.failures } :
          results.failures [0];
      } else {
        return results.passes.length !== 1 ?
          { type: "SolutionList", solutions: results.passes } :
          results.passes [0];
      }
    }

    var outside = tracker === undefined;
    // logging stuff
    if (!tracker)
      tracker = this.emptyTracker();
    if (!label || label === Start) {
      if (!schema.start)
        runtimeError("start production not defined");
    }

    var shape = null;
    if (label == Start) {
      shape = schema.start;
    } else if (!("shapes" in this.schema) || this.schema.shapes.length === 0) {
      runtimeError("shape " + label + " not found; no shapes in schema");
    } else if (label in index.shapeExprs) {
      shape = index.shapeExprs[label]
    } else {
      runtimeError("shape " + label + " not found in:\n" + Object.keys(index.shapeExprs || []).map(s => "  " + s).join("\n"));
    }
    if (typeof label !== "string")
      return this._validateShapeDecl(db, point, shape, Start, 0, tracker, seen);

    if (seen === undefined)
      seen = {};
    var seenKey = point + "@" + (label === Start ? "_: -start-" : label);
    if (!subGraph) {
      if (seenKey in seen)
        return tracker.recurse({
          type: "Recursion",
          node: ldify(point),
          shape: label
        });
      if ("known" in this && seenKey in this.known)
        return tracker.known(this.known[seenKey]);
      seen[seenKey] = { point: point, shape: label };
      tracker.enter(point, label);
    }

    function schemaExtensions (schema) {
      var abstractness = {};
      var extensions = Hierarchy.create();
      makeSchemaVisitor().visitSchema(schema);
      return extensions.children;

      function makeSchemaVisitor (schema) {
        var schemaVisitor = ShExUtil.Visitor();
        var curLabel;
        var curAbstract;
        var oldVisitShapeDecl = schemaVisitor.visitShapeDecl;
        schemaVisitor.visitShapeDecl = function (decl) {
          curLabel = decl.id;
          curAbstract = decl.abstract;
          abstractness[decl.id] = decl.abstract;
          return oldVisitShapeDecl.call(schemaVisitor, decl, decl.id);
        };
        var oldVisitShape = schemaVisitor.visitShape;
        schemaVisitor.visitShape = function (shape) {
          if ("extends" in shape) {
            shape.extends.forEach(ext => {
              var extendsVisitor = ShExUtil.Visitor();
              extendsVisitor.visitShapeRef = function (parent) {
                extensions.add(parent, curLabel);
                // makeSchemaVisitor().visitSchema(schema);
                return "null";
              };
              extendsVisitor.visitShapeExpr(ext);
            })
          }
          return "null";
        };
        return schemaVisitor;
      }
    }
    // Get derived shapes.
    var candidates = [label];
    if (!subGraph) {
      candidates = candidates.concat(schemaExtensions(this.schema)[label] || []);
      // Uniquify list.
      for (var i = candidates.length - 1; i >= 0; --i) {
        if (candidates.indexOf(candidates[i]) < i)
          candidates.splice(i, 1);
      }
      // Filter out abstract shapes.
      candidates = candidates.filter(l => !index.shapeExprs[l].abstract);
    }
    var results = candidates.reduce((ret, label) => {
      var shapeExpr = index.shapeExprs[label];
      var res = this._validateShapeDecl(db, point, shapeExpr, label, 0, tracker, seen, subGraph);
      return "errors" in res ?
        { passes: ret.passes, failures: ret.failures.concat(res) } :
        { passes: ret.passes.concat(res), failures: ret.failures } ;

    }, {passes: [], failures: []});
    var ret;
    if (results.passes.length > 0) {
      ret = results.passes.length !== 1 ?
        { type: "SolutionList", solutions: results.passes } :
      results.passes [0];
    } else if (results.failures.length > 0) {
      ret = results.failures.length !== 1 ?
        { type: "FailureList", errors: results.failures } :
      results.failures [0];
    } else {
      ret = {
        type: "AbstractShapeFailure",
        shape: label,
        errors: label + " has no non-abstract children"
      };
    }
    if (!subGraph) {
      tracker.exit(point, label, ret);
      delete seen[seenKey];
      // Don't cache EXTENDS validations as they aren't testing the neighborhood.
      if ("known" in this)
        this.known[seenKey] = ret;
    }
    if ("startActs" in schema && outside) {
      ret.startActs = schema.startActs;
    }
    return ret;
  }

  this._validateShapeDecl = function (db, point, shapeExpr, shapeLabel, depth, tracker, seen, subgraph) {
    var expr = shapeExpr.type === "ShapeDecl" ? shapeExpr.shapeExpr : shapeExpr;
    return this._validateShapeExpr(db, point, expr, shapeLabel, depth, tracker, seen, subgraph);
  }

  this._validateShapeExpr = function (db, point, shapeExpr, shapeLabel, depth, tracker, seen, subgraph) {
    if (point === "")
      throw Error("validation needs a valid focus node");
    if (typeof shapeExpr === "string") { // ShapeRef
      return this._validateShapeDecl(db, point, index.shapeExprs[shapeExpr], shapeExpr, depth, tracker, seen, subgraph);
    } else if (shapeExpr.type === "NodeConstraint") {
      var sub = this._errorsMatchingNodeConstraint(point, shapeExpr, null);
      return sub.errors && sub.errors.length ? { // @@ when are both conditionals needed?
        type: "Failure",
        node: ldify(point),
        shape: shapeLabel,
        errors: sub.errors.map(function (error) { // !!! just sub.errors?
          return {
            type: "NodeConstraintViolation",
            shapeExpr: shapeExpr,
            error: error
          };
        })
      } : {
        type: "NodeConstraintTest",
        node: ldify(point),
        shape: shapeLabel,
        shapeExpr: shapeExpr
      };
    } else if (shapeExpr.type === "Shape") {
      return this._validateShape(db, point, shapeExpr, shapeLabel, depth, tracker, seen, subgraph);
    } else if (shapeExpr.type === "ShapeExternal") {
      return this.options.validateExtern(db, point, shapeLabel, tracker, seen);
    } else if (shapeExpr.type === "ShapeOr") {
      var errors = [];
      for (var i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        var nested = shapeExpr.shapeExprs[i];
        var sub = this._validateShapeExpr(db, point, nested, shapeLabel, depth, tracker, seen, subgraph);
        if ("errors" in sub)
          errors.push(sub);
        else
          return { type: "ShapeOrResults", solution: sub };
      }
      return { type: "ShapeOrFailure", errors: errors };
    } else if (shapeExpr.type === "ShapeNot") {
      var sub = this._validateShapeExpr(db, point, shapeExpr.shapeExpr, shapeLabel, depth, tracker, seen, subgraph);
      if ("errors" in sub)
          return { type: "ShapeNotResults", solution: sub };
        else
          return { type: "ShapeNotFailure", errors: sub };
    } else if (shapeExpr.type === "ShapeAnd") {
      var passes = [];
      var errors = [];
      for (var i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        var nested = shapeExpr.shapeExprs[i];
        var sub = this._validateShapeExpr(db, point, nested, shapeLabel, depth, tracker, seen, subgraph);
        if ("errors" in sub)
          errors.push(sub);
        else
          passes.push(sub);
      }
      if (errors.length > 0) {
        return  { type: "ShapeAndFailure", errors: errors};
      }
      return { type: "ShapeAndResults", solutions: passes };
    } else
      throw Error("expected one of Shape{Ref,And,Or} or NodeConstraint, got " + JSON.stringify(shapeExpr));
  }

  this._validateShape = function (db, point, shape, shapeLabel, depth, tracker, seen, subgraph) {
    const _ShExValidator = this;
    const valParms = { db, shapeLabel, depth, tracker, seen };

    let ret = null;
    const startAcionStorage = {}; // !!! need test to see this write to results structure.
    if ("startActs" in schema) {
      const semActErrors = this.semActHandler.dispatchAll(schema.startActs, null, startAcionStorage)
      if (semActErrors.length)
        return {
          type: "Failure",
          node: ldify(point),
          shape: shapeLabel,
          errors: semActErrors
        }; // some semAct aborted !! return a better error
    }

    const fromDB  = (subgraph || db).getNeighborhood(point, shapeLabel, shape);
    const outgoingLength = fromDB.outgoing.length;
    const neighborhood = fromDB.outgoing.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ).concat(fromDB.incoming.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ));

    const localTCs = this.indexTripleConstraints(shape.expression);
    const extendedTCs = getExtendedTripleConstraints(shape);
    const constraintList = extendedTCs.map(
      ext => ext.tripleConstraint
    ).concat(localTCs);
    const tripleList = matchByPredicate(constraintList, neighborhood, outgoingLength, point, valParms);
    const {misses, extras} = whatsMissing(tripleList, neighborhood, outgoingLength, shape.extra || [])

    const xp = crossProduct(tripleList.constraintList, "NO_TRIPLE_CONSTRAINT");
    const partitionErrors = [];
    const regexEngine = regexModule.compile(schema, shape, index);
    while (xp.next() && ret === null) {
      const errors = []
      const usedTriples = []; // [{s1,p1,o1},{s2,p2,o2}] implicated triples -- used for messages
      const constraintMatchCount = // [2,1,0,1] how many triples matched a constraint
            _seq(neighborhood.length).map(function () { return 0; });

      // t2tc - array mapping neighborhood index to TripleConstraint
      const t2tcForThisShapeAndExtends = xp.get(); // [0,1,0,3] mapping from triple to constraint
      const t2tcForThisShape = []
      const tripleToExtends = []
      const extendsToTriples = _seq((shape.extends || []).length).map(() => [])
      t2tcForThisShapeAndExtends.forEach((cNo, tNo) => {
        if (cNo !== "NO_TRIPLE_CONSTRAINT" && cNo < extendedTCs.length) {
          const extNo = extendedTCs[cNo].extendsNo;
          extendsToTriples[extNo].push(neighborhood[tNo]);
          tripleToExtends[tNo] = cNo;
          t2tcForThisShape[tNo] = "NO_TRIPLE_CONSTRAINT";
        } else {
          tripleToExtends[tNo] = "NO_EXTENDS";
          t2tcForThisShape[tNo] = cNo;
        }
      });

      // Triples not mapped to triple constraints are not allowed in closed shapes.
      if (shape.closed) {
        const unexpectedTriples = neighborhood.slice(0, outgoingLength).filter((t, i) => {
          return tripleToExtends[i] === "NO_EXTENDS" && // didn't match an EXTENDS
          t2tcForThisShape[i] === "NO_TRIPLE_CONSTRAINT" && // didn't match a constraint
          extras.indexOf(i) === -1; // wasn't in EXTRAs.
        });
        if (unexpectedTriples.length > 0)
          errors.push({
            errors: [
              {
                type: "ClosedShapeViolation",
                unexpectedTriples: unexpectedTriples
              }
            ]
          });
      }

      // Set usedTriples and constraintMatchCount.
      t2tcForThisShape.forEach(function (tpNumber, ord) {
        if (tpNumber !== "NO_TRIPLE_CONSTRAINT") {
          usedTriples.push(neighborhood[ord]);
          ++constraintMatchCount[tpNumber];
        }
      });
      const tc2t = _constraintToTriples(t2tcForThisShape, constraintList, tripleList); // e.g. [[t0, t2], [t1, t3]]

      let results = testExtends(shape, point, extendsToTriples, valParms);
      if (results === null || !("errors" in results)) {
        const sub = regexEngine.match(db, point, constraintList, tc2t, t2tcForThisShape, neighborhood, this.semActHandler, null);
        if (!("errors" in sub) && results) {
          results = { type: "ExtendedResults", extensions: results };
          if (Object.keys(sub).length > 0) // no empty objects from {}s.
            results.local = sub;
        } else {
          results = sub;
        }
      }
      if ("errors" in results)
        errors.push({ errors: results.errors });

      const possibleRet = { type: "ShapeTest", node: ldify(point), shape: shapeLabel };
      if (errors.length === 0 && Object.keys(results).length > 0) // only include .solution for non-empty pattern
        possibleRet.solution = results;
      if ("semActs" in shape) {
        const semActErrors = this.semActHandler.dispatchAll(shape.semActs, results, possibleRet)
        if (semActErrors.length)
          // some semAct aborted
          errors.push({ errors: semActErrors });
      }

      partitionErrors.push(errors)
      if (errors.length === 0)
        ret = possibleRet
    }
    // end of while(xp.next())

    const missErrors = misses.map(function (miss) {
      const t = neighborhood[miss.tripleNo];
      return {
        type: "TypeMismatch",
        triple: {type: "TestedTriple", subject: t.subject, predicate: t.predicate, object: ldify(t.object)},
        constraint: constraintList[miss.constraintNo],
        errors: miss.errors
      };
    });

    // Report only last errors until we have a better idea.
    const lastErrors = partitionErrors[partitionErrors.length - 1];
    let errors = missErrors.concat(lastErrors.length === 1 ? lastErrors[0].errors : lastErrors);
    if (errors.length > 0)
      ret = {
        type: "Failure",
        node: ldify(point),
        shape: shapeLabel,
        errors: errors
      };

    // remove N3jsTripleToString
    if (VERBOSE)
      neighborhood.forEach(function (t) {
        delete t.toString;
      });

    return addShapeAttributes(shape, ret);
  };

  function matchByPredicate (constraintList, neighborhood, outgoingLength, point, valParms) {
    const outgoing = indexNeighborhood(neighborhood.slice(0, outgoingLength));
    const incoming = indexNeighborhood(neighborhood.slice(outgoingLength));
    return constraintList.reduce(function (ret, constraint, cNo) {

      // subject and object depend on direction of constraint.
      const searchSubject = constraint.inverse ? null : point;
      const searchObject = constraint.inverse ? point : null;
      const index = constraint.inverse ? incoming : outgoing;

      // get triples matching predciate
      const matchPredicate = index.byPredicate[constraint.predicate] ||
            []; // empty list when no triple matches that constraint

      // strip to triples matching value constraints (apart from @<someShape>)
      const matchConstraints = _ShExValidator._triplesMatchingShapeExpr(
        matchPredicate, constraint, valParms
      );

      matchConstraints.hits.forEach(function (evidence) {
        const tNo = neighborhood.indexOf(evidence.triple);
        ret.constraintList[tNo].push(cNo);
        ret.results[cNo][tNo] = evidence.sub;
      });
      matchConstraints.misses.forEach(function (evidence) {
        const tNo = neighborhood.indexOf(evidence.triple);
        ret.misses[tNo] = {constraintNo: cNo, errors: evidence.errors};
      });
      return ret;
    }, { misses: {}, results: _alist(constraintList.length), constraintList:_alist(neighborhood.length) })
  }

  function whatsMissing (tripleList, neighborhood, outgoingLength, extras) {
    const matchedExtras = []; // triples accounted for by EXTRA
    const misses = tripleList.constraintList.reduce(function (ret, constraints, ord) {
      if (constraints.length === 0 &&   // matches no constraints
          ord < outgoingLength &&       // not an incoming triple
          ord in tripleList.misses) {   // predicate matched some constraint(s)
        if (extras.indexOf(neighborhood[ord].predicate) !== -1) {
          matchedExtras.push(ord);
        } else {                        // not declared extra
          ret.push({                    // so it's a missed triple.
            tripleNo: ord,
            constraintNo: tripleList.misses[ord].constraintNo,
            errors: tripleList.misses[ord].errors
          });
        }
      }
      return ret;
    }, []);
    return {misses, extras: matchedExtras}
  }

  function addShapeAttributes (shape, ret) {
    if ("annotations" in shape)
      ret.annotations = shape.annotations;
    return ret;
  }

  // Pivot to triples by constraint.
  function _constraintToTriples (t2tc, constraintList, tripleList) {
    return t2tc.slice().
      reduce(function (ret, cNo, tNo) {
        if (cNo !== "NO_TRIPLE_CONSTRAINT")
          ret[cNo].push({tNo: tNo, res: tripleList.results[cNo][tNo]});
        return ret;
      }, _seq(constraintList.length).map(() => [])); // [length][]
  }

  function testExtends (expr, point, extendsToTriples, valParms) {
    if (!("extends" in expr))
      return null;
    const passes = [];
    const errors = [];
    for (let eNo = 0; eNo < expr.extends.length; ++eNo) {
      const extend = expr.extends[eNo];
      const subgraph = ShExUtil.makeTriplesDB(null); // These triples were tracked earlier.
      extendsToTriples[eNo].forEach(t => subgraph.addOutgoingTriples([t]));
      const sub = _ShExValidator._errorsMatchingShapeExpr(point, extend, valParms, subgraph);
      if ("errors" in sub)
        errors.push(sub);
      else
        passes.push(sub);
    }
    if (errors.length > 0) {
      return { type: "ExtensionFailure", errors: errors };
    }
    return { type: "ExtensionResults", solutions: passes };
  }

  /** getExtendedTripleConstraints - walk shape's extends to get all
   * referenced triple constraints.
   *
   * @param {} shape
   * @returns {}
   */
  function getExtendedTripleConstraints (shape) {
    const ret = []
    if ("extends" in shape) {
      shape.extends.forEach((se, extendsNo) => {
        // Index incoming and outgoing arcs by predicate.  Multiple TCs with the
        // same predicate are aggregated into a single TC with the maximum
        // cardinality span. (@@Does this actually reduce permutations?)
        // tests: Extend3G-pass
        var ins = {}, outs = {};
        visitTripleConstraints(se, ins, outs);

        [ins, outs].forEach(directionIndex => {
          Object.keys(directionIndex).forEach(predicate => {
            let tripleConstraint = directionIndex[predicate]
            ret.push({tripleConstraint, extendsNo});
          });
        });
      })
    }
    return ret;

    /*
     * @expr - shape expression to walk
     * @ins - incoming arcs: map from IRI to {min, max, seen}
     * @outs - outgoing arcs
     */
    function visitTripleConstraints (expr, ins, outs) {
      var visitor = ShExUtil.Visitor();
      var outerMin = 1;
      var outerMax = 1;
      var oldVisitOneOf = visitor.visitOneOf;

      // Override visitShapeRef to follow references.
      // tests: Extend3G-pass, vitals-RESTRICTS-pass_lie-Vital...
      visitor.visitShapeRef = function (inclusion) {
        return visitor.visitShapeDecl(index.shapeExprs[inclusion]);
      };

      // Visit shape's EXTENDS and expression.
      visitor.visitShape = function (shape, label) {
        if ("extends" in shape) {
          shape.extends.forEach( // extension of an extension...
            se => visitTripleConstraints(se, ins, outs)
          )
        }
        if ("expression" in shape) {
          visitor.visitExpression(shape.expression);
        }
        return { type: "Shape" }; // NOP
      }

      // Any TC inside a OneOf implicitly has a min cardinality of 0.
      visitor.visitOneOf = function (expr) {
        var oldOuterMin = outerMin;
        var oldOuterMax = outerMax;
        outerMin = 0;
        oldVisitOneOf.call(visitor, expr);
        outerMin = oldOuterMin;
        outerMax = oldOuterMax;
      }

      // Synthesize a TripleConstraint with the implicit cardinality.
      visitor.visitTripleConstraint = function (expr) {
        const idx = expr.inverse ? ins : outs; // pick an index
        var min = "min" in expr ? expr.min : 1; min = min * outerMin;
        var max = "max" in expr ? expr.max : 1; max = max * outerMax;
        idx[expr.predicate] = {
          type: "TripleConstraint",
          predicate: expr.predicate,
          min: expr.predicate in idx ? Math.max(idx[expr.predicate].min, min) : min,
          max: expr.predicate in idx ? Math.min(idx[expr.predicate].max, max) : max,
          seen: expr.predicate in idx ? idx[expr.predicate].seen + 1 : 1,
          tcs: expr.predicate in idx ? idx[expr.predicate].tcs.concat([expr]) : [expr]
        }
        return expr;
      };

      // Call constructed visitor on expr.
      visitor.visitShapeExpr(expr);
    }
  }

  this._triplesMatchingShapeExpr = function (triples, constraint, valParms) {
    var _ShExValidator = this;
    var misses = [];
    var hits = [];
    triples.forEach(function (triple) {
      var value = constraint.inverse ? triple.subject : triple.object;
      var sub;
      var oldBindings = JSON.parse(JSON.stringify(_ShExValidator.semActHandler.results));
      var errors = constraint.valueExpr === undefined ?
          undefined :
          (sub = _ShExValidator._errorsMatchingShapeExpr(value, constraint.valueExpr, valParms)).errors;
      if (!errors) {
        hits.push({triple: triple, sub: sub});
      } else if (hits.indexOf(triple) === -1) {
        _ShExValidator.semActHandler.results = JSON.parse(JSON.stringify(oldBindings));
        misses.push({triple: triple, errors: errors});
      }
    });
    return { hits: hits, misses: misses };
  }
  this._errorsMatchingShapeExpr = function (value, valueExpr, valParms, subgraph) {
    var _ShExValidator = this;
    if (typeof valueExpr === "string") { // ShapeRef
      return _ShExValidator.validate(valParms.db, value, valueExpr, valParms.tracker, valParms.seen, subgraph);
    } else if (valueExpr.type === "NodeConstraint") {
      return this._errorsMatchingNodeConstraint(value, valueExpr, null);
    } else if (valueExpr.type === "Shape") {
      return _ShExValidator._validateShapeExpr(valParms.db, value, valueExpr, valParms.shapeLabel, valParms.depth, valParms.tracker, valParms.seen, subgraph)
    } else if (valueExpr.type === "ShapeOr") {
      var errors = [];
      for (var i = 0; i < valueExpr.shapeExprs.length; ++i) {
        var nested = valueExpr.shapeExprs[i];
        var sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms, subgraph);
        if ("errors" in sub)
          errors.push(sub);
        else
          return { type: "ShapeOrResults", solution: sub };
      }
      return { type: "ShapeOrFailure", errors: errors };
    } else if (valueExpr.type === "ShapeAnd") {
      var passes = [];
      for (var i = 0; i < valueExpr.shapeExprs.length; ++i) {
        var nested = valueExpr.shapeExprs[i];
        var sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms, subgraph);
        if ("errors" in sub)
          return { type: "ShapeAndFailure", errors: [sub] };
        else
          passes.push(sub);
      }
      return { type: "ShapeAndResults", solutions: passes };
    } else if (valueExpr.type === "ShapeNot") {
      var sub = _ShExValidator._errorsMatchingShapeExpr(value, valueExpr.shapeExpr, valParms, subgraph);
      // return sub.errors && sub.errors.length ? {} : {
      //   errors: ["Error validating " + value + " as " + JSON.stringify(valueExpr) + ": expected NOT to pass"] };
      var ret = Object.assign({
        type: null,
        focus: value
      }, valueExpr);
      if (sub.errors && sub.errors.length) {
        ret.type = "ShapeNotTest";
        // ret = {};
      } else {
        ret.type = "ShapeNotFailure";
        ret.errors = ["Error validating " + value + " as " + JSON.stringify(valueExpr) + ": expected NOT to pass"]
      }
      return ret;
    } else {
      throw Error("unknown value expression type '" + valueExpr.type + "'");
    }
  };

  /* _errorsMatchingNodeConstraint - return whether the value matches the value
   * expression without checking shape references.
   */
  this._errorsMatchingNodeConstraint = function (value, valueExpr, recurse) {
    var errors = [];
    var label = ShExTerm.isLiteral(value) ? ShExTerm.getLiteralValue(value) :
      ShExTerm.isBlank(value) ? value.substring(2) :
      value;
    var dt = ShExTerm.isLiteral(value) ? ShExTerm.getLiteralType(value) : null;
    var numeric = integerDatatypes.indexOf(dt) !== -1 ? XSD + "integer" : numericDatatypes.indexOf(dt) !== -1 ? dt : undefined;

    function validationError () {
      var errorStr = Array.prototype.join.call(arguments, "");
      errors.push("Error validating " + value + " as " + JSON.stringify(valueExpr) + ": " + errorStr);
      return false;
    }
    // if (negated) ;
    if (false) {} else {
      if ("nodeKind" in valueExpr) {
        if (["iri", "bnode", "literal", "nonliteral"].indexOf(valueExpr.nodeKind) === -1) {
          validationError("unknown node kind '" + valueExpr.nodeKind + "'");
        }
        if (ShExTerm.isBlank(value)) {
          if (valueExpr.nodeKind === "iri" || valueExpr.nodeKind === "literal") {
            validationError("blank node found when " + valueExpr.nodeKind + " expected");
          }
        } else if (ShExTerm.isLiteral(value)) {
          if (valueExpr.nodeKind !== "literal") {
            validationError("literal found when " + valueExpr.nodeKind + " expected");
          }
        } else if (valueExpr.nodeKind === "bnode" || valueExpr.nodeKind === "literal") {
          validationError("iri found when " + valueExpr.nodeKind + " expected");
        }
      }

      if (valueExpr.datatype  && valueExpr.values  ) validationError("found both datatype and values in "   +tripleConstraint);

      if (valueExpr.datatype) {
        if (!ShExTerm.isLiteral(value)) {
          validationError("mismatched datatype: " + value + " is not a literal with datatype " + valueExpr.datatype);
        }
        else if (ShExTerm.getLiteralType(value) !== valueExpr.datatype) {
          validationError("mismatched datatype: " + ShExTerm.getLiteralType(value) + " !== " + valueExpr.datatype);
        }
        else if (numeric) {
          testRange(numericParsers[numeric](label, validationError), valueExpr.datatype, validationError);
        }
        else if (valueExpr.datatype === XSD + "boolean") {
          if (label !== "true" && label !== "false" && label !== "1" && label !== "0")
            validationError("illegal boolean value: " + label);
        }
        else if (valueExpr.datatype === XSD + "dateTime") {
          if (!label.match(/^[+-]?\d{4}-[01]\d-[0-3]\dT[0-5]\d:[0-5]\d:[0-5]\d(\.\d+)?([+-][0-2]\d:[0-5]\d|Z)?$/))
            validationError("illegal dateTime value: " + label);
        }
      }

      if (valueExpr.values) {
        if (ShExTerm.isLiteral(value) && valueExpr.values.reduce((ret, v) => {
          if (ret) return true;
          var ld = ldify(value);
          if (v.type === "Language") {
            return v.languageTag === ld.language; // @@ use equals/normalizeTest
          }
          if (!(typeof v === "object" && "value" in v))
            return false;
          return v.value === ld.value &&
            v.type === ld.type &&
            v.language === ld.language;
        }, false)) {
          // literal match
        } else if (valueExpr.values.indexOf(value) !== -1) {
          // trivial match
        } else {
          if (!(valueExpr.values.some(function (valueConstraint) {
            if (typeof valueConstraint === "object" && !("value" in valueConstraint)) { // isTerm me -- strike "value" in
              if (!("type" in valueConstraint))
                runtimeError("expected "+JSON.stringify(valueConstraint)+" to have a 'type' attribute.");
              var stemRangeTypes = [
                "Language",
                "IriStem",      "LiteralStem",      "LanguageStem",
                "IriStemRange", "LiteralStemRange", "LanguageStemRange"
              ];
              if (stemRangeTypes.indexOf(valueConstraint.type) === -1)
                runtimeError("expected type attribute '"+valueConstraint.type+"' to be in '"+stemRangeTypes+"'.");

              /* expect N3.js literals with {Literal,Language}StemRange
               *       or non-literals with IriStemRange
               */
              function normalizedTest (val, ref, func) {
                if (ShExTerm.isLiteral(val)) {
                  if (["LiteralStem", "LiteralStemRange"].indexOf(valueConstraint.type) !== -1) {
                    return func(ShExTerm.getLiteralValue(val), ref);
                  } else if (["LanguageStem", "LanguageStemRange"].indexOf(valueConstraint.type) !== -1) {
                    return func(ShExTerm.getLiteralLanguage(val) || null, ref);
                  } else {
                    return validationError("literal " + val + " not comparable with non-literal " + ref);
                  }
                } else {
                  if (["IriStem", "IriStemRange"].indexOf(valueConstraint.type) === -1) {
                    return validationError("nonliteral " + val + " not comparable with literal " + JSON.stringify(ref));
                  } else {
                    return func(val, ref);
                  }
                }
              }
              function startsWith (val, ref) {
                return normalizedTest(val, ref, (l, r) => {
                  return (valueConstraint.type === "LanguageStem" ||
                          valueConstraint.type === "LanguageStemRange") ?
                    // rfc4647 basic filtering
                    l !== null && (l === r || r === "" || l[r.length] === "-") :
                    // simple substring
                    l.startsWith(r);
                });
              }
              function equals (val, ref) {
                return normalizedTest(val, ref, (l, r) => { return l === r; });
              }

              if (!isTerm(valueConstraint.stem)) {
                expect(valueConstraint.stem, "type", "Wildcard");
                // match whatever but check exclusions below
              } else {
                if (!(startsWith(value, valueConstraint.stem))) {
                  return false;
                }
              }
              if (valueConstraint.exclusions) {
                return !valueConstraint.exclusions.some(function (c) {
                  if (!isTerm(c)) {
                    if (!("type" in c))
                      runtimeError("expected "+JSON.stringify(c)+" to have a 'type' attribute.");
                    var stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
                    if (stemTypes.indexOf(c.type) === -1)
                      runtimeError("expected type attribute '"+c.type+"' to be in '"+stemTypes+"'.");
                    return startsWith(value, c.stem);
                  } else {
                    return equals(value, c);
                  }
                });
              }
              return true;
            } else {
              // ignore -- would have caught it above
            }
          }))) {
            validationError("value " + value + " not found in set " + JSON.stringify(valueExpr.values));
          }
        }
      }
    }

    if ("pattern" in valueExpr) {
      var regexp = "flags" in valueExpr ?
	  new RegExp(valueExpr.pattern, valueExpr.flags) :
	  new RegExp(valueExpr.pattern);
      if (!(getLexicalValue(value).match(regexp)))
        validationError("value " + getLexicalValue(value) + " did not match pattern " + valueExpr.pattern);
    }

    Object.keys(stringTests).forEach(function (test) {
      if (test in valueExpr && !stringTests[test](label, valueExpr[test])) {
        validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
      }
    });

    Object.keys(numericValueTests).forEach(function (test) {
      if (test in valueExpr) {
        if (numeric) {
          if (!numericValueTests[test](numericParsers[numeric](label, validationError), valueExpr[test])) {
            validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
          }
        } else {
          validationError("facet violation: numeric facet " + test + " can't apply to " + value);
        }
      }
    });

    Object.keys(decimalLexicalTests).forEach(function (test) {
      if (test in valueExpr) {
        if (numeric === XSD + "integer" || numeric === XSD + "decimal") {
          if (!decimalLexicalTests[test](""+numericParsers[numeric](label, validationError), valueExpr[test])) {
            validationError("facet violation: expected " + test + " of " + valueExpr[test] + " but got " + value);
          }
        } else {
          validationError("facet violation: numeric facet " + test + " can't apply to " + value);
        }
      }
    });
    var ret = {
      type: null,
      focus: value,
      shapeExpr: valueExpr
    };
    if (errors.length) {
      ret.type = "NodeConstraintViolation";
      ret.errors = errors;
    } else {
      ret.type = "NodeConstraintTest";
    }
    return ret;
  };

  this.semActHandler = {
    handlers: { },
    results: { },
    /**
     * Store a semantic action handler.
     *
     * @param {string} name - semantic action's URL.
     * @param {object} handler - handler function.
     *
     * The handler object has a dispatch function is invoked with:
     * @param {string} code - text of the semantic action.
     * @param {object} ctx - matched triple or results subset.
     * @param {object} extensionStorage - place where the extension writes into the result structure.
     * @return {bool} false if the extension failed or did not accept the ctx object.
     */
    register: function (name, handler) {
      this.handlers[name] = handler;
    },
    /**
     * Calls all semantic actions, allowing each to write to resultsArtifact.
     *
     * @param {array} semActs - list of semantic actions to invoke.
     * @return {bool} false if any result was false.
     */
    dispatchAll: function (semActs, ctx, resultsArtifact) {
      var _semActHanlder = this;
      return semActs.reduce(function (ret, semAct) {
        if (ret.length === 0 && semAct.name in _semActHanlder.handlers) {
          var code = "code" in semAct ? semAct.code : _ShExValidator.options.semActs[semAct.name];
          var existing = "extensions" in resultsArtifact && semAct.name in resultsArtifact.extensions;
          var extensionStorage = existing ? resultsArtifact.extensions[semAct.name] : {};
          const response = _semActHanlder.handlers[semAct.name].dispatch(code, ctx, extensionStorage);
          if (typeof response === 'boolean') {
            if (!response)
              ret.push({ type: "SemActFailure", errors: [{ type: "BooleanSemActFailure", code: code, ctx }] })
          } else if (typeof response === 'object' && response.constructor === Array) {
            if (response.length > 0)
              ret.push({ type: "SemActFailure", errors: response })
          } else {
            throw Error("unsupported response from semantic action handler: " + JSON.stringify(response))
          }
          if (!existing && Object.keys(extensionStorage).length > 0) {
            if (!("extensions" in resultsArtifact))
              resultsArtifact.extensions = {};
            resultsArtifact.extensions[semAct.name] = extensionStorage;
          }
          return ret;
        }
        return ret;
      }, []);
    }
  };
}

/* _compileShapeToAST - compile a shape expression to an abstract syntax tree.
 *
 * currently tested but not used.
 */
function _compileShapeToAST (expression, tripleConstraints, schema) {

  function Epsilon () {
    this.type = "Epsilon";
  }

  function TripleConstraint (ordinal, predicate, inverse, negated, valueExpr) {
    this.type = "TripleConstraint";
    // this.ordinal = ordinal; @@ does 1card25
    this.inverse = !!inverse;
    this.negated = !!negated;
    this.predicate = predicate;
    if (valueExpr !== undefined)
      this.valueExpr = valueExpr;
  }

  function Choice (disjuncts) {
    this.type = "Choice";
    this.disjuncts = disjuncts;
  }

  function EachOf (conjuncts) {
    this.type = "EachOf";
    this.conjuncts = conjuncts;
  }

  function SemActs (expression, semActs) {
    this.type = "SemActs";
    this.expression = expression;
    this.semActs = semActs;
  }

  function KleeneStar (expression) {
    this.type = "KleeneStar";
    this.expression = expression;
  }

  function _compileExpression (expr, schema) {
    var repeated, container;

    /* _repeat: map expr with a min and max cardinality to a corresponding AST with Groups and Stars.
       expr 1 1 => expr
       expr 0 1 => Choice(expr, Eps)
       expr 0 3 => Choice(EachOf(expr, Choice(EachOf(expr, Choice(expr, EPS)), Eps)), Eps)
       expr 2 5 => EachOf(expr, expr, Choice(EachOf(expr, Choice(EachOf(expr, Choice(expr, EPS)), Eps)), Eps))
       expr 0 * => KleeneStar(expr)
       expr 1 * => EachOf(expr, KleeneStar(expr))
       expr 2 * => EachOf(expr, expr, KleeneStar(expr))

       @@TODO: favor Plus over Star if Epsilon not in expr.
    */
    function _repeat (expr, min, max) {
      if (min === undefined) { min = 1; }
      if (max === undefined) { max = 1; }

      if (min === 1 && max === 1) { return expr; }

      var opts = max === UNBOUNDED ?
        new KleeneStar(expr) :
        _seq(max - min).reduce(function (ret, elt, ord) {
          return ord === 0 ?
            new Choice([expr, new Epsilon]) :
            new Choice([new EachOf([expr, ret]), new Epsilon]);
        }, undefined);

      var reqd = min !== 0 ?
        new EachOf(_seq(min).map(function (ret) {
          return expr; // @@ something with ret
        }).concat(opts)) : opts;
      return reqd;
    }

    if (typeof expr === "string") { // Inclusion
      var included = schema._index.tripleExprs[expr].expression;
      return _compileExpression(included, schema);
    }

    else if (expr.type === "TripleConstraint") {
      // predicate, inverse, negated, valueExpr, annotations, semActs, min, max
      var valueExpr = "valueExprRef" in expr ?
        schema.valueExprDefns[expr.valueExprRef] :
        expr.valueExpr;
      var ordinal = tripleConstraints.push(expr)-1;
      var tp = new TripleConstraint(ordinal, expr.predicate, expr.inverse, expr.negated, valueExpr);
      repeated = _repeat(tp, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else if (expr.type === "OneOf") {
      container = new Choice(expr.expressions.map(function (e) {
        return _compileExpression(e, schema);
      }));
      repeated = _repeat(container, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else if (expr.type === "EachOf") {
      container = new EachOf(expr.expressions.map(function (e) {
        return _compileExpression(e, schema);
      }));
      repeated = _repeat(container, expr.min, expr.max);
      return expr.semActs ? new SemActs(repeated, expr.semActs) : repeated;
    }

    else throw Error("unexpected expr type: " + expr.type);
  }

  return expression ? _compileExpression(expression, schema) : new Epsilon();
}

// http://stackoverflow.com/questions/9422386/lazy-cartesian-product-of-arrays-arbitrary-nested-loops
function crossProduct(sets, emptyValue) {
  var n = sets.length, carets = [], args = null;

  function init() {
    args = [];
    for (var i = 0; i < n; i++) {
      carets[i] = 0;
      args[i] = sets[i].length > 0 ? sets[i][0] : emptyValue;
    }
  }

  function next() {

    // special case: crossProduct([]).next().next() returns false.
    if (args !== null && args.length === 0)
      return false;

    if (args === null) {
      init();
      return true;
    }
    var i = n - 1;
    carets[i]++;
    if (carets[i] < sets[i].length) {
      args[i] = sets[i][carets[i]];
      return true;
    }
    while (carets[i] >= sets[i].length) {
      if (i == 0) {
        return false;
      }
      carets[i] = 0;
      args[i] = sets[i].length > 0 ? sets[i][0] : emptyValue;
      carets[--i]++;
    }
    args[i] = sets[i][carets[i]];
    return true;
  }

  return {
    next: next,
    do: function (block, _context) { // old API
      return block.apply(_context, args);
    },
    // new API because
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments#Description
    // cautions about functions over arguments.
    get: function () { return args; }
  };
}

/* N3jsTripleToString - simple toString function to make N3.js's triples
 * printable.
 */
var N3jsTripleToString = function () {
  function fmt (n) {
    return ShExTerm.isLiteral(n) ?
      [ "http://www.w3.org/2001/XMLSchema#integer",
        "http://www.w3.org/2001/XMLSchema#float",
        "http://www.w3.org/2001/XMLSchema#double"
      ].indexOf(ShExTerm.getLiteralType(n)) !== -1 ?
      parseInt(ShExTerm.getLiteralValue(n)) :
      n :
    ShExTerm.isBlank(n) ?
      n :
      "<" + n + ">";
  }
  return fmt(this.subject) + " " + fmt(this.predicate) + " " + fmt(this.object) + " .";
};

/* indexNeighborhood - index triples by predicate
 * returns: {
 *     byPredicate: Object: mapping from predicate to triples containing that
 *                  predicate.
 *
 *     candidates: [[1,3], [0,2]]: mapping from triple to the triple constraints
 *                 it matches.  It is initialized to []. Mappings that remain an
 *                 empty set indicate a triple which didn't matching anything in
 *                 the shape.
 *
 *     misses: list to recieve value constraint failures.
 *   }
 */
function indexNeighborhood (triples) {
  return {
    byPredicate: triples.reduce(function (ret, t) {
      var p = t.predicate;
      if (!(p in ret))
        ret[p] = [];
      ret[p].push(t);

      // If in VERBOSE mode, add a nice toString to N3.js's triple objects.
      if (VERBOSE)
        t.toString = N3jsTripleToString;

      return ret;
    }, {}),
    candidates: _seq(triples.length).map(function () {
      return [];
    }),
    misses: []
  };
}

/* sparqlOrder - sort triples by subject following SPARQL partial ordering.
 */
function sparqlOrder (l, r) {
  var [lprec, rprec] = [l, r].map(
    x => ShExTerm.isBlank(x) ? 1 : ShExTerm.isLiteral(x) ? 2 : 3
  );
  return lprec === rprec ? l.localeCompare(r) : lprec - rprec;
}

/* Return a list of n ""s.
 *
 * Note that Array(n) on its own returns a "sparse array" so Array(n).map(f)
 * never calls f.
 */
function _seq (n) {
  return n === 0 ?
    [] :
    Array(n).join(" ").split(/ /); // hahaha, javascript, you suck.
}

/* Expect property p with value v in object o
 */
function expect (o, p, v) {
  if (!(p in o))
    runtimeError("expected "+JSON.stringify(o)+" to have a '"+p+"' attribute.");
  if (arguments.length > 2 && o[p] !== v)
    runtimeError("expected "+p+" attribute '"+o[p]+"' to equal '"+v+"'.");
}

function noop () {  }

function runtimeError () {
  var errorStr = Array.prototype.join.call(arguments, "");
  var e = new Error(errorStr);
  Error.captureStackTrace(e, runtimeError);
  throw e;
}

  function _alist (len) {
    return _seq(len).map(() => [])
  }

  return {
    construct: ShExValidator_constructor,
    start: Start,
    options: InterfaceOptions
  };
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShExValidator;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var HierarchyClosure = (function () {
  /** create a hierarchy object
   * This object keeps track of direct children and parents as well as transitive children and parents.
   */
  function makeHierarchy () {
    let roots = {}
    let parents = {}
    let children = {}
    let holders = {}
    return {
      add: function (parent, child) {
        if (// test if this is a novel entry.
          (parent in children && children[parent].indexOf(child) !== -1)) {
          return
        }
        let target = parent in holders
          ? getNode(parent)
          : (roots[parent] = getNode(parent)) // add new parents to roots.
        let value = getNode(child)

        target[child] = value
        delete roots[child]

        // // maintain hierarchy (direct and confusing)
        // children[parent] = children[parent].concat(child, children[child])
        // children[child].forEach(c => parents[c] = parents[c].concat(parent, parents[parent]))
        // parents[child] = parents[child].concat(parent, parents[parent])
        // parents[parent].forEach(p => children[p] = children[p].concat(child, children[child]))

        // maintain hierarchy (generic and confusing)
        updateClosure(children, parents, child, parent)
        updateClosure(parents, children, parent, child)
        function updateClosure (container, members, near, far) {
          container[far] = container[far].filter(
            e => /* e !== near && */ container[near].indexOf(e) === -1
          ).concat(container[near].indexOf(near) === -1 ? [near] : [], container[near])
          container[near].forEach(
            n => (members[n] = members[n].filter(
              e => e !== far && members[far].indexOf(e) === -1
            ).concat(members[far].indexOf(far) === -1 ? [far] : [], members[far]))
          )
        }

        function getNode (node) {
          if (!(node in holders)) {
            parents[node] = []
            children[node] = []
            holders[node] = {}
          }
          return holders[node]
        }
      },
      roots: roots,
      parents: parents,
      children: children
    }
  }

  function depthFirst (n, f, p) {
    return Object.keys(n).reduce((ret, k) => {
      return ret.concat(
        depthFirst(n[k], f, k),
        p ? f(k, p) : []) // outer invocation can have null parent
    }, [])
  }

  return { create: makeHierarchy, depthFirst }
})()

/* istanbul ignore next */
if (true) {
  module.exports = HierarchyClosure
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var EvalThreadedNErr = (function () {
var ShExTerm = __webpack_require__(10);
var UNBOUNDED = -1;

function vpEngine (schema, shape, index) {
    var outerExpression = shape.expression;
    return {
      match:match
    };

    function match (graph, node, constraintList, constraintToTripleMapping, tripleToConstraintMapping, neighborhood, semActHandler, trace) {

      /*
       * returns: list of passing or failing threads (no heterogeneous lists)
       */
      function validateExpr (expr, thread) {
        if (typeof expr === "string") { // Inclusion
          var included = index.tripleExprs[expr];
          return validateExpr(included, thread);
        }

        var constraintNo = constraintList.indexOf(expr);
        var min = "min" in expr ? expr.min : 1;
        var max = "max" in expr ? expr.max === UNBOUNDED ? Infinity : expr.max : 1;

        function validateRept (type, val) {
          var repeated = 0, errOut = false;
          var newThreads = [thread];
          var minmax = {  };
          if ("min" in expr && expr.min !== 1 || "max" in expr && expr.max !== 1) {
            minmax.min = expr.min;
            minmax.max = expr.max;
          }
          if ("semActs" in expr)
            minmax.semActs = expr.semActs;
          if ("annotations" in expr)
            minmax.annotations = expr.annotations;
          for (; repeated < max && !errOut; ++repeated) {
            var inner = [];
            for (var t = 0; t < newThreads.length; ++t) {
              var newt = newThreads[t];
              var sub = val(newt);
              if (sub.length > 0 && sub[0].errors.length === 0) { // all subs pass or all fail
                sub.forEach(newThread => {
                  var solutions =
                      "expression" in newt ? newt.expression.solutions : [];
                  if ("solution" in newThread)
                    solutions = solutions.concat(newThread.solution);
                  delete newThread.solution;
                  newThread.expression = extend({
                    type: type,
                    solutions: solutions
                  }, minmax);
                });
              }
              if (sub.length === 0 /* min:0 */ || sub[0].errors.length > 0)
                return repeated < min ? sub : newThreads;
              else
                inner = inner.concat(sub);
              // newThreads.expressions.push(sub);
            }
            newThreads = inner;
          }
          if (newThreads.length > 0 && newThreads[0].errors.length === 0 && "semActs" in expr) {
            var passes = [];
            var failures = [];
            newThreads.forEach(newThread => {
              const semActErrors = semActHandler.dispatchAll(expr.semActs, "???", newThread)
              if (semActErrors.length === 0) {
                passes.push(newThread)
              } else {
                [].push.apply(newThread.errors, semActErrors);
                failures.push(newThread);
              }
            });
            newThreads = passes.length > 0 ? passes : failures;
          }
          return newThreads;
        }

        if (expr.type === "TripleConstraint") {
          var negated = "negated" in expr && expr.negated || max === 0;
          if (negated)
            min = max = Infinity;
          if (thread.avail[constraintNo] === undefined)
            thread.avail[constraintNo] = constraintToTripleMapping[constraintNo].map(pair => pair.tNo);
          var minmax = {  };
          if ("min" in expr && expr.min !== 1 || "max" in expr && expr.max !== 1) {
            minmax.min = expr.min;
            minmax.max = expr.max;
          }
          if ("semActs" in expr)
            minmax.semActs = expr.semActs;
          if ("annotations" in expr)
            minmax.annotations = expr.annotations;
          var taken = thread.avail[constraintNo].splice(0, min);
          var passed = negated ? taken.length === 0 : taken.length >= min;
          var ret = [];
          var matched = thread.matched;
          if (passed) {
            do {
              const passFail = taken.reduce((acc, tripleNo) => {
                const t = neighborhood[tripleNo]
                const tested = {
                  type: "TestedTriple",
                  subject: t.subject,
                  predicate: t.predicate,
                  object: ldify(t.object)
                }
                var hit = constraintToTripleMapping[constraintNo].find(x => x.tNo === tripleNo);
                if (hit.res && Object.keys(hit.res).length > 0)
                  tested.referenced = hit.res;
                const semActErrors = thread.errors.concat(
                  "semActs" in expr
                    ? semActHandler.dispatchAll(expr.semActs, t, tested)
                    : []
                )
                if (semActErrors.length > 0)
                  acc.fail.push({tripleNo, tested, semActErrors})
                else
                  acc.pass.push({tripleNo, tested, semActErrors})
                return acc
              }, {pass: [], fail: []})


              // return an empty solution if min card was 0
              if (passFail.fail.length === 0) {
                // If we didn't take anything, fall back to old errors.
                // Could do something fancy here with a semAct registration for negative matches.
                const totalErrors = taken.length === 0 ? thread.errors.slice() : []
                const myThread = makeThread(passFail.pass, totalErrors)
                ret.push(myThread);
              } else {
                passFail.fail.forEach(
                  f => ret.push(makeThread([f], f.semActErrors))
                )
              }

              function makeThread (tests, errors) {
                return {
                  avail: thread.avail.map(a => { // copy parent thread's avail vector
                    return a.slice();
                  }),
                  errors: errors,
                  matched: matched.concat({
                    tNos: tests.map(p => p.tripleNo)
                  }),
                  expression: extend(
                    {
                      type: "TripleConstraintSolutions",
                      predicate: expr.predicate
                    },
                    "valueExpr" in expr ? { valueExpr: expr.valueExpr } : {},
                    "productionLabel" in expr ? { productionLabel: expr.productionLabel } : {},
                    minmax,
                    {
                      solutions: tests.map(p => p.tested)
                    }
                  )
                }
              }
            } while ((function () {
              if (thread.avail[constraintNo].length > 0 && taken.length < max) {
                // build another thread.
                taken.push(thread.avail[constraintNo].shift());
                return true;
              } else {
                // no more threads
                return false;
              }
            })());
          } else {
            var valueExpr = null;
            if (typeof expr.valueExpr === "string") { // ShapeRef
              valueExpr = expr.valueExpr;
              if (ShExTerm.isBlank(valueExpr))
                valueExpr = index.shapeExprs[valueExpr];
            } else if (expr.valueExpr) {
              valueExpr = extend({}, expr.valueExpr)
            }
            ret.push({
              avail: thread.avail,
              errors: thread.errors.concat([
                extend({
                  type: negated ? "NegatedProperty" : "MissingProperty",
                  property: expr.predicate
                }, valueExpr ? { valueExpr: valueExpr } : {})
              ]),
              matched: matched
            });
          }

          return ret;
        }

        else if (expr.type === "OneOf") {
          return validateRept("OneOfSolutions", (th) => {
            var accept = null;
            var matched = [];
            var failed = [];
            expr.expressions.forEach(nested => {
              var thcopy = {
                avail: th.avail.map(a => { return a.slice(); }),
                errors: th.errors,
                matched: th.matched//.slice() ever needed??
              };
              var sub = validateExpr(nested, thcopy);
              if (sub[0].errors.length === 0) { // all subs pass or all fail
                matched = matched.concat(sub);
                sub.forEach(newThread => {
                  var expressions =
                      "solution" in thcopy ? thcopy.solution.expressions : [];
                  if ("expression" in newThread) // undefined for no matches on min card:0
                    expressions = expressions.concat([newThread.expression]);
                  delete newThread.expression;
                  newThread.solution = {
                    type: "OneOfSolution",
                    expressions: expressions
                  };
                });
              } else
                failed = failed.concat(sub);
            });
            return matched.length > 0 ? matched : failed;
          });
        }

        else if (expr.type === "EachOf") {
          return homogenize(validateRept("EachOfSolutions", (th) => {
            // Iterate through nested expressions, exprThreads starts as [th].
            return expr.expressions.reduce((exprThreads, nested) => {
              // Iterate through current thread list composing nextThreads.
              // Consider e.g.
              // <S1> { <p1> . | <p2> .; <p3> . } / { <x> <p2> 2; <p3> 3 } (should pass)
              // <S1> { <p1> .; <p2> . }          / { <s1> <p1> 1 }        (should fail)
              return homogenize(exprThreads.reduce((nextThreads, exprThread) => {
                var sub = validateExpr(nested, exprThread);
                // Move newThread.expression into a hierarchical solution structure.
                sub.forEach(newThread => {
                  if (newThread.errors.length === 0) {
                    var expressions =
                        "solution" in exprThread ? exprThread.solution.expressions : [];
                    if ("expression" in newThread) // undefined for no matches on min card:0
                      expressions = expressions.concat([newThread.expression]);
                    // console.warn(threadMatched(newThread), " vs ", exprMatched(expressions));
                    delete newThread.expression;
                    newThread.solution = {
                      type: "EachOfSolution",
                      expressions: expressions // exprThread.expression + newThread.expression
                    };
                  }
                });
                return nextThreads.concat(sub);
              }, []));
            }, [th]);
          }));
        }

        // else if (expr.type === "Inclusion") {
        //   var included = schema.productions[expr.include];
        //   return validateExpr(included, thread);
        // }

        // else if (expr.type === "NestedShape") {
        //   var newThreads = [thread]
        //   return newThreads;
        // }

        runtimeError("unexpected expr type: " + expr.type);

        function homogenize (list) {
          return list.reduce((acc, elt) => {
            if (elt.errors.length === 0) {
              if (acc.errors) {
                return { errors: false, l: [elt] };
              } else {
                return { errors: false, l: acc.l.concat(elt) };
              }
            } else {
              if (acc.errors) {
                return { errors: true, l: acc.l.concat(elt) };
              } else {
                return acc; }
            }
          }, {errors: true, l: []}).l;
        }
      }

      var startingThread = {
        avail:[],   // triples remaining by constraint number
        matched:[], // triples matched in this thread
        errors:[]   // errors encounted
      };
      if (!outerExpression)
        return { }; // vapid match if no expression
      var ret = validateExpr(outerExpression, startingThread);
      // console.log(JSON.stringify(ret));
      // note: don't return if ret.length === 1 because it might fail the unmatchedTriples test.
      var longerChosen =
          ret.reduce((ret, elt) => {
            if (elt.errors.length > 0)
              return ret;              // early return
            var unmatchedTriples = {};
            // Collect triples assigned to some constraint.
            Object.keys(tripleToConstraintMapping).forEach(k => {
              if (tripleToConstraintMapping[k] !== "NO_TRIPLE_CONSTRAINT")
                unmatchedTriples[k] = tripleToConstraintMapping[k];
            });
            // Removed triples matched in this thread.
            elt.matched.forEach(m => {
              m.tNos.forEach(t => {
                delete unmatchedTriples[t];
              });
            });
            // Remaining triples are unaccounted for.
            Object.keys(unmatchedTriples).forEach(t => {
              elt.errors.push({
                type: "ExcessTripleViolation",
                triple: neighborhood[t],
                constraint: constraintList[unmatchedTriples[t]]
              });
            });
            return ret !== null ? ret : // keep first solution
            // Accept thread with no unmatched triples.
            Object.keys(unmatchedTriples).length > 0 ? null : elt;
          }, null);
      return longerChosen !== null ?
        finish(longerChosen.expression, constraintList,
               neighborhood, semActHandler) :
        ret.length > 1 ? {
          type: "PossibleErrors",
          errors: ret.reduce((all, e) => {
            return all.concat([e.errors]);
          }, [])
        } : ret[0];
    }

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          var ret = { value: ShExTerm.getLiteralValue(term) };
          var dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          var lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

    function finish (fromValidatePoint, constraintList, neighborhood, semActHandler) {
      function _dive (solns) {
        if (solns.type === "OneOfSolutions" ||
            solns.type === "EachOfSolutions") {
          solns.solutions.forEach(s => {
            s.expressions.forEach(e => {
              _dive(e);
            });
          });
        } else if (solns.type === "TripleConstraintSolutions") {
          solns.solutions = solns.solutions.map(x => {
            if (x.type === "TestedTriple") // already done
              return x; // c.f. validation/3circularRef1_pass-open
            var t = neighborhood[x.tripleNo];
            var expr = constraintList[x.constraintNo];
            var ret = {
              type: "TestedTriple", subject: t.subject, predicate: t.predicate, object: ldify(t.object)
            };
            function diver (focus, shapeLabel, dive) {
              var sub = dive(focus, shapeLabel);
              if ("errors" in sub) {
                // console.dir(sub);
                var err = {
                  type: "ReferenceError", focus: focus,
                  shape: shapeLabel
                };
                if (typeof shapeLabel === "string" && ShExTerm.isBlank(shapeLabel))
                  err.referencedShape = shape;
                err.errors = sub;
                return [err];
              }
              if (("solution" in sub || "solutions" in sub)&& Object.keys(sub.solution || sub.solutions).length !== 0 ||
                  sub.type === "Recursion")
                ret.referenced = sub; // !!! needs to aggregate errors and solutions
              return [];
            }
            function diveRecurse (focus, shapeLabel) {
              return diver(focus, shapeLabel, recurse);
            }
            function diveDirect (focus, shapeLabel) {
              return diver(focus, shapeLabel, direct);
            }
            var subErrors = "valueExpr" in expr ?
                checkValueExpr(expr.inverse ? t.subject : t.object, expr.valueExpr, diveRecurse, diveDirect) :
                [];
            if (subErrors.length === 0 && "semActs" in expr)
              [].push.apply(subErrors, semActHandler.dispatchAll(expr.semActs, t, ret))
            if (subErrors.length > 0) {
              fromValidatePoint.errors = fromValidatePoint.errors || [];
              fromValidatePoint.errors = fromValidatePoint.errors.concat(subErrors);
            }
            return ret;
          });
        } else {
          throw Error("unexpected expr type in " + JSON.stringify(solns));
        }
      }
      if (Object.keys(fromValidatePoint).length > 0) // guard against {}
        _dive(fromValidatePoint);
      if ("semActs" in shape)
        fromValidatePoint.semActs = shape.semActs;
      return fromValidatePoint;
    }
  }

        function ldify (term) {
          if (term[0] !== "\"")
            return term;
          var ret = { value: N3Util.getLiteralValue(term) };
          var dt = N3Util.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          var lang = N3Util.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }

function extend(base) {
  if (!base) base = {};
  for (var i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
    for (var name in arg)
      base[name] = arg[name];
  return base;
}

return {
  name: "eval-threaded-nerr",
  description: "emulation of regular expression engine with error permutations",
  compile: vpEngine
};
})();

if (true)
  module.exports = EvalThreadedNErr;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExLoader** return promise to load ShExC, ShExJ and N3 (Turtle) files.

var ShExApi = function (config) {

  const ShExUtil = __webpack_require__(11);
  const ShExParser = __webpack_require__(22);

  const api = { load: LoadPromise, loadExtensions: LoadExtensions, GET: GET, loadShExImports_NotUsed: loadShExImports_NotUsed };
  return api
  
  async function GET (url, mediaType) {
    var m;
    return (m = url.match("^data:([^,]+),(.*)$"))
      ? Promise.resolve({text: m[2], url: m[0]}) // Read from data: URL
      : (url.match("^(blob:)?[a-z]+://."))
      ? myHttpRequest(url, mediaType) // whatever fetch handles
      : (() => { throw Error(`Don't know how to fetch ${url}`) })()

    async function myHttpRequest(url, mediaType) {
      if (typeof config.fetch !== "function")
        throw Error(`Unable to fetch ${url} with fetch=${config.fetch}`)
      let resp
      try {
        resp = await config.fetch(url, {
          headers: {
            'Accept': 'text/shex,text/turtle,*/*'
          }
        })
      } catch (e) {
        // DNS failure
        // no route to host
        // connection refused
        throw Error(`GET <${url}> network failure: ${e.message}`)
      }
      if (!resp.ok)
        throw Error(`GET <${url}> failed: ${resp.status} ${resp.statusText}`)
      const text = await resp.text()
      return {text, url}
    }
  }

  function loadList (src, metaList, mediaType, parserWrapper, target, options, loadImports) {
    return src.map(
      async p =>
        typeof p === "object" ? mergeSchema(p) : await loadParseMergeSchema(p)
    )

    async function mergeSchema (obj) {
      var meta = addMeta(obj.url, mediaType)
      try {
        ShExUtil.merge(target, obj.schema, true, true)
        meta._prefixes = target._prefixes || {}
        meta.base = target._base
        loadImports(obj.schema)
        return [mediaType, obj.url]
      } catch (e) {
        var e2 = Error("error merging schema object " + obj.schema + ": " + e)
        e2.stack = e.stack
        throw e2
      }
    }

    async function loadParseMergeSchema (p) {
      return api.GET(p, mediaType).then(function (loaded) {
        return parserWrapper(loaded.text, mediaType, loaded.url, target,
                             addMeta(loaded.url, mediaType), options, loadImports)
      })
    }

    function addMeta (url, mediaType) {
      var meta = {
        mediaType: mediaType,
        url: url,
        base: url,
        prefixes: {}
      }
      metaList.push(meta)
      return meta
    }
  }

  /* LoadPromise - load shex and json files into a single Schema and turtle into
   * a graph (Data).
   */
  async function LoadPromise (shex, json, turtle, jsonld, schemaOptions = {}, dataOptions = {}) {
    var returns = {
      schema: ShExUtil.emptySchema(),
      data: new config.rdfjs.Store(),
      schemaMeta: [],
      dataMeta: []
    }
    var promises = []
    var schemasSeen = shex.concat(json).map(p => {
      // might be already loaded objects with a url property.
      return typeof p === "object" ? p.url : p
    })
    var transform = null
    if (schemaOptions && "iriTransform" in schemaOptions) {
      transform = schemaOptions.iriTransform
      delete schemaOptions.iriTransform
    }

    var allLoaded = DynamicPromise()
    function loadImports (schema) {
      if (!("imports" in schema))
        return schema
      if (schemaOptions.keepImports) {
        return schema
      }
      var ret = Object.assign({}, schema)
      var imports = ret.imports
      delete ret.imports
      schema.imports.map(function (i) {
        return transform ? transform(i) : i
      }).filter(function (i) {
        return schemasSeen.indexOf(i) === -1
      }).map(i => {
        schemasSeen.push(i)
        allLoaded.add(api.GET(i).then(function (loaded) {
          var meta = {
            // mediaType: mediaType,
            url: loaded.url,
            base: loaded.url,
            prefixes: {}
          }
          // metaList.push(meta)
          return parseShExC(loaded.text, "text/shex", loaded.url,
                            returns.schema, meta, schemaOptions, loadImports)
        })); // addAfter would be after invoking schema.
      })
      return ret
    }

    // gather all the potentially remote inputs
    promises = promises.
      concat(loadList(shex, returns.schemaMeta, "text/shex",
                      parseShExC, returns.schema, schemaOptions, loadImports)).
      concat(loadList(json, returns.schemaMeta, "text/json",
                      parseShExJ, returns.schema, schemaOptions, loadImports)).
      concat(loadList(turtle, returns.dataMeta, "text/turtle",
                      parseTurtle, returns.data, dataOptions)).
      concat(loadList(jsonld, returns.dataMeta, "application/ld+json",
                      parseJSONLD, returns.data, dataOptions))
    return allLoaded.all(promises).then(function (resources) {
      if (returns.schemaMeta.length > 0)
        ShExUtil.isWellDefined(returns.schema)
      return returns
    })
  }

  function DynamicPromise () {
    var promises = []
    var results = []
    var completedPromises = 0
    var resolveSelf, rejectSelf
    var self = new Promise(function (resolve, reject) {
      resolveSelf = resolve; rejectSelf = reject
    })
    self.all = function (pz) {
      pz.forEach(function (promise, index) {
        promises.push(promise)
        addThen(promise, index)
      })
      return self
    }
    self.add = function (promise) {
      promises.push(promise)
      addThen(promise, promises.length - 1)
      return self
    }
    return self

    function addThen (promise, index) {
      promise.then(function (value) {
        results[index] = value
        ++completedPromises
        if(completedPromises === promises.length) {
          resolveSelf(results)
        }
      }).catch(function (error) {
        rejectSelf(error)
      })
    }
  }

  function parseShExC (text, mediaType, url, schema, meta, schemaOptions, loadImports) {
    var parser = schemaOptions && "parser" in schemaOptions ?
        schemaOptions.parser :
        ShExParser.construct(url, {}, schemaOptions)
    try {
      var s = parser.parse(text)
      // !! horrible hack until I set a variable to know if there's a BASE.
      if (s.base === url) delete s.base
      meta.prefixes = s._prefixes || {}
      meta.base = s._base || meta.base
      ShExUtil.merge(schema, loadImports(s), false, true)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      e.message = "error parsing ShEx " + url + ": " + e.message
      return Promise.reject(e)
    }
  }

  function loadShExImports_NotUsed (from, parser, transform) {
    var schemasSeen = [from]
    var ret = { type: "Schema" }
    return api.GET(from).then(load999Imports).then(function () {
      ShExUtil.isWellDefined(ret)
      return ret
    })
    function load999Imports (loaded) {
      var schema = parser.parse(loaded.text)
      var imports = schema.imports
      delete schema.imports
      ShExUtil.merge(ret, schema, false, true)
      if (imports) {
        var rest = imports
            .map(function (i) {
              return transform ? transform(i) : i
            }).
            filter(function (i) {
              return schemasSeen.indexOf(i) === -1
            })
        return Promise.all(rest.map(i => {
          schemasSeen.push(i)
          return api.GET(i).then(load999Imports)
        })).then(a => {
          return null
        })
      } else {
        return null
      }
    }
  }

  function parseShExJ (text, mediaType, url, schema, meta, schemaOptions, loadImports) {
    try {
      var s = ShExUtil.ShExJtoAS(JSON.parse(text))
      ShExUtil.merge(schema, s, true, true)
      meta.prefixes = schema._prefixes
      meta.base = schema.base
      loadImports(s)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      var e2 = Error("error parsing JSON " + url + ": " + e)
      // e2.stack = e.stack
      return Promise.reject(e2)
    }
  }

  function parseTurtle (text, mediaType, url, data, meta, dataOptions) {
    return new Promise(function (resolve, reject) {
      new config.rdfjs.Parser({baseIRI: url, blankNodePrefix: "", format: "text/turtle"}).
        parse(text,
              function (error, triple, prefixes) {
                if (prefixes) {
                  meta.prefixes = prefixes
                  // data.addPrefixes(prefixes)
                }
                if (error) {
                  reject("error parsing " + url + ": " + error)
                } else if (triple) {
                  data.addQuad(triple)
                } else {
                  meta.base = this._base
                  resolve([mediaType, url])
                }
              })
    })
  }

  /* parseTurtle999 - a variant of parseTurtle with no callback.
   * so, which is "better"?
   */
  function parseTurtle999 (text, mediaType, url, data, meta, dataOptions) {
    try {
      var p = new config.rdfjs.Parser({baseIRI: url, blankNodePrefix: "", format: "text/turtle"})
      var triples = p.parse(text)
      meta.prefixes = p._prefixes
      meta.base = p._base
      data.addPrefixes(p._prefixes)
      data.addTriples(triples)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      return Promise.reject(Error("error parsing " + url + ": " + e))
    }
  }

  function parseJSONLD (text, mediaType, url, data, meta, dataOptions) {
    return new Promise(function (resolve, reject) {
      var struct = JSON.parse(text)
      config.jsonld.toRDF(struct, {format: "application/nquads", base: url}, function (lderr, nquads) {
        if (lderr) {
          reject("error parsing JSON-ld " + url + ": " + lderr)
        } else {
          meta.prefixes = {}; // @@ take from @context?
          meta.base = url;    // @@ take from @context.base? (or vocab?)
          resolve(parseTurtle(nquads, mediaType, url, data, meta))
        }
      })
    })
  }

  function LoadExtensions (globs) {
    return globs.reduce(
      (list, glob) =>
        list.concat(__webpack_require__(23).glob.sync(glob))
      , []).
      reduce(function (ret, path) {
        try {
	  var t = __webpack_require__(57)(path)
	  ret[t.url] = t
	  return ret
        } catch (e) {
	  console.warn("ShEx extension \"" + moduleDir + "\" not loadable: " + e)
	  return ret
        }
      }, {})
  }

}

if (true)
  module.exports = ShExApi


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, module) {/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var ShExJison = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[7,18,19,20,21,23,26,36,198,220,221],$V1=[19,21,220,221],$V2=[2,27],$V3=[1,22],$V4=[1,23],$V5=[2,12],$V6=[2,13],$V7=[2,14],$V8=[7,18,19,20,21,23,26,36,220,221],$V9=[1,29],$Va=[1,32],$Vb=[1,31],$Vc=[2,18],$Vd=[2,19],$Ve=[1,38],$Vf=[1,42],$Vg=[1,41],$Vh=[1,40],$Vi=[1,44],$Vj=[1,47],$Vk=[1,46],$Vl=[2,15],$Vm=[2,17],$Vn=[2,264],$Vo=[2,265],$Vp=[2,266],$Vq=[2,267],$Vr=[19,21,69,71,79,80,81,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,194,220,223],$Vs=[2,61],$Vt=[1,65],$Vu=[19,21,39,43,69,71,79,80,81,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,184,194,220,223,225],$Vv=[2,29],$Vw=[2,242],$Vx=[2,243],$Vy=[2,268],$Vz=[198,200],$VA=[1,73],$VB=[1,76],$VC=[1,75],$VD=[2,16],$VE=[7,18,19,20,21,23,26,36,51,220,221],$VF=[2,47],$VG=[7,18,19,20,21,23,26,36,51,53,220,221],$VH=[2,54],$VI=[119,125,127,194,223],$VJ=[2,139],$VK=[1,111],$VL=[1,119],$VM=[1,93],$VN=[1,101],$VO=[1,102],$VP=[1,103],$VQ=[1,110],$VR=[1,115],$VS=[1,116],$VT=[1,117],$VU=[1,120],$VV=[1,121],$VW=[1,122],$VX=[1,123],$VY=[1,124],$VZ=[1,125],$V_=[1,106],$V$=[1,118],$V01=[2,62],$V11=[19,21,69,71,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,194,220,223],$V21=[1,136],$V31=[1,137],$V41=[1,138],$V51=[1,135],$V61=[1,134],$V71=[2,233],$V81=[2,234],$V91=[2,235],$Va1=[2,20],$Vb1=[1,145],$Vc1=[2,53],$Vd1=[1,147],$Ve1=[2,60],$Vf1=[2,69],$Vg1=[1,153],$Vh1=[1,154],$Vi1=[1,155],$Vj1=[2,65],$Vk1=[2,71],$Vl1=[1,162],$Vm1=[1,163],$Vn1=[1,164],$Vo1=[1,167],$Vp1=[1,170],$Vq1=[2,68],$Vr1=[7,18,19,20,21,23,26,36,51,53,79,80,81,119,125,127,194,195,198,220,221,223],$Vs1=[2,95],$Vt1=[7,18,19,20,21,23,26,36,51,53,195,198,220,221],$Vu1=[7,18,19,20,21,23,26,36,51,53,96,97,98,101,102,103,104,220,221],$Vv1=[2,87],$Vw1=[2,88],$Vx1=[7,18,19,20,21,23,26,36,51,53,79,80,81,101,102,103,104,119,125,127,194,195,198,220,221,223],$Vy1=[2,108],$Vz1=[2,107],$VA1=[7,18,19,20,21,23,26,36,51,53,101,102,103,104,112,113,114,115,116,117,195,198,220,221],$VB1=[2,102],$VC1=[2,101],$VD1=[7,18,19,20,21,23,26,36,51,53,96,97,98,101,102,103,104,195,198,220,221],$VE1=[2,91],$VF1=[2,92],$VG1=[2,112],$VH1=[2,113],$VI1=[2,114],$VJ1=[2,110],$VK1=[2,241],$VL1=[19,21,71,81,100,108,109,168,190,209,210,211,212,213,214,215,216,217,218,220],$VM1=[2,187],$VN1=[7,18,19,20,21,23,26,36,51,53,112,113,114,115,116,117,195,198,220,221],$VO1=[2,104],$VP1=[1,194],$VQ1=[1,196],$VR1=[1,198],$VS1=[1,197],$VT1=[2,118],$VU1=[1,205],$VV1=[1,206],$VW1=[1,207],$VX1=[1,208],$VY1=[100,108,109,211,212,213,214],$VZ1=[2,26],$V_1=[2,31],$V$1=[2,32],$V02=[79,80,81,119,125,127,194,223],$V12=[51,53],$V22=[1,270],$V32=[1,275],$V42=[1,252],$V52=[1,260],$V62=[1,261],$V72=[1,262],$V82=[1,269],$V92=[1,265],$Va2=[1,274],$Vb2=[2,48],$Vc2=[2,55],$Vd2=[2,64],$Ve2=[2,70],$Vf2=[2,66],$Vg2=[2,72],$Vh2=[7,18,19,20,21,23,26,36,51,53,101,102,103,104,195,198,220,221],$Vi2=[1,326],$Vj2=[1,334],$Vk2=[1,335],$Vl2=[1,336],$Vm2=[1,342],$Vn2=[1,343],$Vo2=[7,18,19,20,21,23,26,36,51,53,79,80,81,119,125,127,194,198,220,221,223],$Vp2=[2,231],$Vq2=[7,18,19,20,21,23,26,36,51,53,198,220,221],$Vr2=[1,351],$Vs2=[2,106],$Vt2=[2,111],$Vu2=[2,98],$Vv2=[1,357],$Vw2=[2,99],$Vx2=[2,100],$Vy2=[2,105],$Vz2=[7,18,19,20,21,23,26,36,51,53,96,97,98,101,102,103,104,198,220,221],$VA2=[2,93],$VB2=[1,374],$VC2=[1,380],$VD2=[1,369],$VE2=[1,373],$VF2=[1,383],$VG2=[1,384],$VH2=[1,385],$VI2=[1,372],$VJ2=[1,386],$VK2=[1,387],$VL2=[1,392],$VM2=[1,393],$VN2=[1,394],$VO2=[1,395],$VP2=[1,388],$VQ2=[1,389],$VR2=[1,390],$VS2=[1,391],$VT2=[1,379],$VU2=[19,21,69,165,204,220],$VV2=[2,167],$VW2=[2,141],$VX2=[1,408],$VY2=[1,407],$VZ2=[1,421],$V_2=[1,424],$V$2=[1,420],$V03=[1,423],$V13=[2,117],$V23=[2,122],$V33=[2,124],$V43=[2,125],$V53=[2,126],$V63=[2,256],$V73=[2,257],$V83=[2,258],$V93=[2,259],$Va3=[2,123],$Vb3=[19,21,39,43,69,71,79,80,81,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,184,194,195,198,220,223,225],$Vc3=[2,36],$Vd3=[2,74],$Ve3=[2,77],$Vf3=[2,35],$Vg3=[2,39],$Vh3=[2,42],$Vi3=[2,45],$Vj3=[1,446],$Vk3=[1,448],$Vl3=[1,454],$Vm3=[1,455],$Vn3=[1,456],$Vo3=[1,463],$Vp3=[1,464],$Vq3=[1,465],$Vr3=[1,468],$Vs3=[2,41],$Vt3=[1,538],$Vu3=[2,44],$Vv3=[1,574],$Vw3=[2,67],$Vx3=[51,53,70],$Vy3=[1,603],$Vz3=[51,53,70,79,80,81,119,125,127,194,195,198,223],$VA3=[51,53,70,195,198],$VB3=[51,53,70,96,97,98,101,102,103,104,195,198],$VC3=[51,53,70,79,80,81,101,102,103,104,119,125,127,194,195,198,223],$VD3=[51,53,70,101,102,103,104,112,113,114,115,116,117,195,198],$VE3=[51,53,70,112,113,114,115,116,117,195,198],$VF3=[51,70],$VG3=[7,18,19,20,21,23,26,36,51,53,79,80,81,119,125,127,194,220,221,223],$VH3=[2,97],$VI3=[2,96],$VJ3=[2,230],$VK3=[1,645],$VL3=[1,648],$VM3=[1,644],$VN3=[1,647],$VO3=[2,94],$VP3=[2,109],$VQ3=[2,103],$VR3=[2,115],$VS3=[2,116],$VT3=[2,134],$VU3=[2,186],$VV3=[1,678],$VW3=[19,21,71,81,100,108,109,168,183,190,209,210,211,212,213,214,215,216,217,218,220],$VX3=[2,236],$VY3=[2,237],$VZ3=[2,238],$V_3=[2,249],$V$3=[2,252],$V04=[2,246],$V14=[2,247],$V24=[2,248],$V34=[2,254],$V44=[2,255],$V54=[2,260],$V64=[2,261],$V74=[2,262],$V84=[2,263],$V94=[19,21,71,81,100,108,109,111,168,183,190,209,210,211,212,213,214,215,216,217,218,220],$Va4=[2,146],$Vb4=[2,147],$Vc4=[1,686],$Vd4=[2,148],$Ve4=[121,135],$Vf4=[2,153],$Vg4=[2,154],$Vh4=[2,156],$Vi4=[1,689],$Vj4=[1,690],$Vk4=[19,21,204,220],$Vl4=[2,179],$Vm4=[1,698],$Vn4=[121,135,140,141],$Vo4=[2,165],$Vp4=[119,125,127,194,195,198,223],$Vq4=[19,21,119,125,127,194,204,220,223],$Vr4=[2,239],$Vs4=[2,240],$Vt4=[19,21,39,43,69,71,79,80,81,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,184,194,198,220,223,225],$Vu4=[2,33],$Vv4=[2,37],$Vw4=[2,73],$Vx4=[2,75],$Vy4=[2,34],$Vz4=[2,43],$VA4=[2,40],$VB4=[2,46],$VC4=[1,765],$VD4=[1,771],$VE4=[1,811],$VF4=[1,858],$VG4=[51,53,70,101,102,103,104,195,198],$VH4=[51,53,70,79,80,81,119,125,127,194,198,223],$VI4=[51,53,70,198],$VJ4=[1,901],$VK4=[51,53,70,96,97,98,101,102,103,104,198],$VL4=[1,911],$VM4=[1,948],$VN4=[1,984],$VO4=[2,232],$VP4=[1,995],$VQ4=[1,1001],$VR4=[1,1000],$VS4=[19,21,100,108,109,209,210,211,212,213,214,215,216,217,218,220],$VT4=[1,1021],$VU4=[1,1027],$VV4=[1,1026],$VW4=[1,1048],$VX4=[1,1054],$VY4=[1,1053],$VZ4=[1,1071],$V_4=[1,1073],$V$4=[1,1075],$V05=[19,21,71,81,100,108,109,168,184,190,209,210,211,212,213,214,215,216,217,218,220],$V15=[1,1079],$V25=[1,1085],$V35=[1,1088],$V45=[1,1089],$V55=[1,1090],$V65=[1,1078],$V75=[1,1091],$V85=[1,1092],$V95=[1,1097],$Va5=[1,1098],$Vb5=[1,1099],$Vc5=[1,1100],$Vd5=[1,1093],$Ve5=[1,1094],$Vf5=[1,1095],$Vg5=[1,1096],$Vh5=[1,1084],$Vi5=[2,250],$Vj5=[2,253],$Vk5=[2,135],$Vl5=[2,149],$Vm5=[2,151],$Vn5=[2,155],$Vo5=[2,157],$Vp5=[2,158],$Vq5=[2,162],$Vr5=[2,164],$Vs5=[2,169],$Vt5=[2,170],$Vu5=[1,1115],$Vv5=[1,1118],$Vw5=[1,1114],$Vx5=[1,1117],$Vy5=[1,1128],$Vz5=[2,226],$VA5=[2,244],$VB5=[2,245],$VC5=[119,125,127,194,198,223],$VD5=[2,127],$VE5=[2,76],$VF5=[1,1168],$VG5=[1,1204],$VH5=[1,1263],$VI5=[1,1269],$VJ5=[1,1301],$VK5=[1,1307],$VL5=[51,53,70,79,80,81,119,125,127,194,223],$VM5=[51,53,70,96,97,98,101,102,103,104],$VN5=[1,1365],$VO5=[1,1412],$VP5=[2,227],$VQ5=[2,228],$VR5=[2,229],$VS5=[7,18,19,20,21,23,26,36,51,53,79,80,81,111,119,125,127,194,195,198,220,221,223],$VT5=[7,18,19,20,21,23,26,36,51,53,111,195,198,220,221],$VU5=[7,18,19,20,21,23,26,36,51,53,96,97,98,101,102,103,104,111,195,198,220,221],$VV5=[2,209],$VW5=[1,1465],$VX5=[19,21,71,81,100,108,109,168,183,184,190,209,210,211,212,213,214,215,216,217,218,220],$VY5=[19,21,71,81,100,108,109,111,168,183,184,190,209,210,211,212,213,214,215,216,217,218,220],$VZ5=[2,251],$V_5=[2,152],$V$5=[2,150],$V06=[2,159],$V16=[2,163],$V26=[2,160],$V36=[2,161],$V46=[19,21,43,69,71,79,80,81,85,96,97,98,101,102,103,104,112,113,114,115,116,117,119,125,127,166,194,220,223],$V56=[1,1482],$V66=[70,135],$V76=[1,1485],$V86=[1,1486],$V96=[70,135,140,141],$Va6=[1,1509],$Vb6=[1,1515],$Vc6=[1,1514],$Vd6=[1,1552],$Ve6=[1,1599],$Vf6=[1,1632],$Vg6=[1,1638],$Vh6=[1,1637],$Vi6=[1,1658],$Vj6=[1,1664],$Vk6=[1,1663],$Vl6=[1,1685],$Vm6=[1,1691],$Vn6=[1,1690],$Vo6=[1,1736],$Vp6=[1,1802],$Vq6=[1,1808],$Vr6=[1,1807],$Vs6=[1,1828],$Vt6=[1,1834],$Vu6=[1,1833],$Vv6=[1,1854],$Vw6=[1,1860],$Vx6=[1,1859],$Vy6=[1,1901],$Vz6=[1,1907],$VA6=[1,1939],$VB6=[1,1945],$VC6=[121,135,140,141,155,195,198],$VD6=[2,172],$VE6=[1,1965],$VF6=[1,1966],$VG6=[1,1967],$VH6=[1,1968],$VI6=[121,135,140,141,155,161,162,163,164,195,198],$VJ6=[2,38],$VK6=[51,121,135,140,141,155,161,162,163,164,195,198],$VL6=[2,51],$VM6=[51,53,121,135,140,141,155,161,162,163,164,195,198],$VN6=[2,58],$VO6=[1,1997],$VP6=[1,2017],$VQ6=[1,2023],$VR6=[1,2022],$VS6=[19,21,39,43,69,71,79,80,81,85,96,97,98,101,102,103,104,111,112,113,114,115,116,117,119,125,127,166,184,194,195,198,220,223,225],$VT6=[1,2069],$VU6=[1,2075],$VV6=[1,2107],$VW6=[1,2113],$VX6=[1,2166],$VY6=[1,2199],$VZ6=[1,2205],$V_6=[1,2204],$V$6=[1,2225],$V07=[1,2231],$V17=[1,2230],$V27=[1,2252],$V37=[1,2258],$V47=[1,2257],$V57=[1,2279],$V67=[1,2285],$V77=[1,2284],$V87=[1,2305],$V97=[1,2311],$Va7=[1,2310],$Vb7=[1,2332],$Vc7=[1,2338],$Vd7=[1,2337],$Ve7=[51,53,70,79,80,81,111,119,125,127,194,195,198,223],$Vf7=[51,53,70,111,195,198],$Vg7=[51,53,70,96,97,98,101,102,103,104,111,195,198],$Vh7=[1,2407],$Vi7=[121,135,140,141,195,198],$Vj7=[2,174],$Vk7=[1,2469],$Vl7=[2,173],$Vm7=[2,181],$Vn7=[2,182],$Vo7=[2,183],$Vp7=[2,184],$Vq7=[2,49],$Vr7=[2,56],$Vs7=[2,63],$Vt7=[2,83],$Vu7=[2,79],$Vv7=[2,85],$Vw7=[1,2491],$Vx7=[2,82],$Vy7=[51,53,79,80,81,101,102,103,104,119,121,125,127,135,140,141,155,161,162,163,164,194,195,198,223],$Vz7=[51,53,79,80,81,119,121,125,127,135,140,141,155,161,162,163,164,194,195,198,223],$VA7=[51,53,101,102,103,104,112,113,114,115,116,117,121,135,140,141,155,161,162,163,164,195,198],$VB7=[51,53,96,97,98,101,102,103,104,121,135,140,141,155,161,162,163,164,195,198],$VC7=[2,89],$VD7=[2,90],$VE7=[51,53,112,113,114,115,116,117,121,135,140,141,155,161,162,163,164,195,198],$VF7=[111,119,125,127,194,195,198,223],$VG7=[1,2560],$VH7=[1,2649],$VI7=[1,2655],$VJ7=[1,2738],$VK7=[1,2771],$VL7=[1,2777],$VM7=[1,2776],$VN7=[1,2797],$VO7=[1,2803],$VP7=[1,2802],$VQ7=[1,2824],$VR7=[1,2830],$VS7=[1,2829],$VT7=[1,2851],$VU7=[1,2857],$VV7=[1,2856],$VW7=[1,2877],$VX7=[1,2883],$VY7=[1,2882],$VZ7=[1,2904],$V_7=[1,2910],$V$7=[1,2909],$V08=[2,176],$V18=[1,2928],$V28=[2,52],$V38=[2,59],$V48=[2,78],$V58=[2,84],$V68=[2,80],$V78=[2,86],$V88=[51,53,101,102,103,104,121,135,140,141,155,161,162,163,164,195,198],$V98=[1,2952],$Va8=[70,135,140,141,155,195,198],$Vb8=[1,2961],$Vc8=[1,2962],$Vd8=[1,2963],$Ve8=[1,2964],$Vf8=[70,135,140,141,155,161,162,163,164,195,198],$Vg8=[51,70,135,140,141,155,161,162,163,164,195,198],$Vh8=[51,53,70,135,140,141,155,161,162,163,164,195,198],$Vi8=[1,2993],$Vj8=[1,3022],$Vk8=[1,3055],$Vl8=[1,3061],$Vm8=[1,3060],$Vn8=[1,3081],$Vo8=[1,3087],$Vp8=[1,3086],$Vq8=[1,3108],$Vr8=[1,3114],$Vs8=[1,3113],$Vt8=[1,3135],$Vu8=[1,3141],$Vv8=[1,3140],$Vw8=[1,3161],$Vx8=[1,3167],$Vy8=[1,3166],$Vz8=[1,3188],$VA8=[1,3194],$VB8=[1,3193],$VC8=[1,3271],$VD8=[1,3277],$VE8=[121,135,140,141,198],$VF8=[1,3338],$VG8=[2,50],$VH8=[1,3372],$VI8=[2,57],$VJ8=[1,3405],$VK8=[2,81],$VL8=[70,135,140,141,195,198],$VM8=[1,3430],$VN8=[1,3452],$VO8=[51,53,70,79,80,81,101,102,103,104,119,125,127,135,140,141,155,161,162,163,164,194,195,198,223],$VP8=[51,53,70,79,80,81,119,125,127,135,140,141,155,161,162,163,164,194,195,198,223],$VQ8=[51,53,70,101,102,103,104,112,113,114,115,116,117,135,140,141,155,161,162,163,164,195,198],$VR8=[51,53,70,96,97,98,101,102,103,104,135,140,141,155,161,162,163,164,195,198],$VS8=[51,53,70,112,113,114,115,116,117,135,140,141,155,161,162,163,164,195,198],$VT8=[1,3500],$VU8=[1,3506],$VV8=[1,3569],$VW8=[1,3575],$VX8=[1,3574],$VY8=[1,3595],$VZ8=[1,3601],$V_8=[1,3600],$V$8=[1,3622],$V09=[1,3628],$V19=[1,3627],$V29=[2,178],$V39=[2,175],$V49=[51,121,135,140,141,195,198],$V59=[51,53,121,135,140,141,195,198],$V69=[1,3714],$V79=[1,3740],$V89=[1,3782],$V99=[2,171],$Va9=[51,53,70,101,102,103,104,135,140,141,155,161,162,163,164,195,198],$Vb9=[1,3834],$Vc9=[1,3909],$Vd9=[1,3915],$Ve9=[1,3914],$Vf9=[1,3935],$Vg9=[1,3941],$Vh9=[1,3940],$Vi9=[1,3962],$Vj9=[1,3968],$Vk9=[1,3967],$Vl9=[1,3988],$Vm9=[1,3994],$Vn9=[1,3993],$Vo9=[1,4031],$Vp9=[51,53,79,80,81,101,102,103,104,119,121,125,127,135,140,141,194,195,198,223],$Vq9=[51,53,79,80,81,119,121,125,127,135,140,141,194,195,198,223],$Vr9=[51,53,101,102,103,104,112,113,114,115,116,117,121,135,140,141,195,198],$Vs9=[51,53,96,97,98,101,102,103,104,121,135,140,141,195,198],$Vt9=[51,53,112,113,114,115,116,117,121,135,140,141,195,198],$Vu9=[1,4076],$Vv9=[1,4100],$Vw9=[70,135,140,141,198],$Vx9=[1,4115],$Vy9=[1,4148],$Vz9=[1,4181],$VA9=[1,4210],$VB9=[1,4216],$VC9=[1,4215],$VD9=[1,4236],$VE9=[1,4242],$VF9=[1,4241],$VG9=[1,4263],$VH9=[1,4269],$VI9=[1,4268],$VJ9=[111,121,135,140,141,195,198],$VK9=[51,53,101,102,103,104,121,135,140,141,195,198],$VL9=[1,4344],$VM9=[1,4376],$VN9=[51,70,135,140,141,195,198],$VO9=[51,53,70,135,140,141,195,198],$VP9=[1,4446],$VQ9=[1,4472],$VR9=[1,4514],$VS9=[1,4600],$VT9=[1,4633],$VU9=[1,4673],$VV9=[1,4706],$VW9=[1,4712],$VX9=[1,4711],$VY9=[1,4749],$VZ9=[51,53,70,79,80,81,101,102,103,104,119,125,127,135,140,141,194,195,198,223],$V_9=[51,53,70,79,80,81,119,125,127,135,140,141,194,195,198,223],$V$9=[51,53,70,101,102,103,104,112,113,114,115,116,117,135,140,141,195,198],$V0a=[51,53,70,96,97,98,101,102,103,104,135,140,141,195,198],$V1a=[51,53,70,112,113,114,115,116,117,135,140,141,195,198],$V2a=[1,4794],$V3a=[1,4818],$V4a=[1,4855],$V5a=[1,4897],$V6a=[1,4942],$V7a=[70,111,135,140,141,195,198],$V8a=[51,53,70,101,102,103,104,135,140,141,195,198],$V9a=[1,4989],$Vaa=[1,5021],$Vba=[1,5080],$Vca=[1,5104],$Vda=[1,5161],$Vea=[1,5194],$Vfa=[1,5234],$Vga=[1,5289],$Vha=[1,5349],$Via=[1,5391],$Vja=[1,5436],$Vka=[1,5471],$Vla=[1,5526],$Vma=[1,5550],$Vna=[1,5596],$Voa=[1,5640],$Vpa=[1,5714],$Vqa=[1,5769];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"shexDoc":3,"initParser":4,"Qdirective_E_Star":5,"Q_O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C_E_Opt":6,"EOF":7,"directive":8,"O_QnotStartAction_E_Or_QstartActions_E_C":9,"notStartAction":10,"startActions":11,"Qstatement_E_Star":12,"statement":13,"O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C":14,"baseDecl":15,"prefixDecl":16,"importDecl":17,"IT_BASE":18,"IRIREF":19,"IT_PREFIX":20,"PNAME_NS":21,"iri":22,"IT_IMPORT":23,"start":24,"shapeExprDecl":25,"IT_start":26,"=":27,"shapeAnd":28,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Star":29,"QcodeDecl_E_Plus":30,"codeDecl":31,"QIT_ABSTRACT_E_Opt":32,"shapeExprLabel":33,"Qrestriction_E_Star":34,"O_QshapeExpression_E_Or_QIT_EXTERNAL_E_C":35,"IT_ABSTRACT":36,"restriction":37,"shapeExpression":38,"IT_EXTERNAL":39,"QIT_NOT_E_Opt":40,"shapeAtomNoRef":41,"QshapeOr_E_Opt":42,"IT_NOT":43,"shapeRef":44,"shapeOr":45,"inlineShapeExpression":46,"inlineShapeOr":47,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Plus":48,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Plus":49,"O_QIT_OR_E_S_QshapeAnd_E_C":50,"IT_OR":51,"O_QIT_AND_E_S_QshapeNot_E_C":52,"IT_AND":53,"shapeNot":54,"inlineShapeAnd":55,"Q_O_QIT_OR_E_S_QinlineShapeAnd_E_C_E_Star":56,"O_QIT_OR_E_S_QinlineShapeAnd_E_C":57,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Star":58,"inlineShapeNot":59,"Q_O_QIT_AND_E_S_QinlineShapeNot_E_C_E_Star":60,"O_QIT_AND_E_S_QinlineShapeNot_E_C":61,"shapeAtom":62,"inlineShapeAtom":63,"nonLitNodeConstraint":64,"QshapeOrRef_E_Opt":65,"litNodeConstraint":66,"shapeOrRef":67,"QnonLitNodeConstraint_E_Opt":68,"(":69,")":70,".":71,"shapeDefinition":72,"nonLitInlineNodeConstraint":73,"QinlineShapeOrRef_E_Opt":74,"litInlineNodeConstraint":75,"inlineShapeOrRef":76,"QnonLitInlineNodeConstraint_E_Opt":77,"inlineShapeDefinition":78,"ATPNAME_LN":79,"ATPNAME_NS":80,"@":81,"Qannotation_E_Star":82,"semanticActions":83,"annotation":84,"IT_LITERAL":85,"QxsFacet_E_Star":86,"datatype":87,"valueSet":88,"QnumericFacet_E_Plus":89,"xsFacet":90,"numericFacet":91,"nonLiteralKind":92,"QstringFacet_E_Star":93,"QstringFacet_E_Plus":94,"stringFacet":95,"IT_IRI":96,"IT_BNODE":97,"IT_NONLITERAL":98,"stringLength":99,"INTEGER":100,"REGEXP":101,"IT_LENGTH":102,"IT_MINLENGTH":103,"IT_MAXLENGTH":104,"numericRange":105,"rawNumeric":106,"numericLength":107,"DECIMAL":108,"DOUBLE":109,"string":110,"^^":111,"IT_MININCLUSIVE":112,"IT_MINEXCLUSIVE":113,"IT_MAXINCLUSIVE":114,"IT_MAXEXCLUSIVE":115,"IT_TOTALDIGITS":116,"IT_FRACTIONDIGITS":117,"Q_O_Qextension_E_Or_QextraPropertySet_E_Or_QIT_CLOSED_E_C_E_Star":118,"{":119,"QtripleExpression_E_Opt":120,"}":121,"O_Qextension_E_Or_QextraPropertySet_E_Or_QIT_CLOSED_E_C":122,"extension":123,"extraPropertySet":124,"IT_CLOSED":125,"tripleExpression":126,"IT_EXTRA":127,"Qpredicate_E_Plus":128,"predicate":129,"oneOfTripleExpr":130,"groupTripleExpr":131,"multiElementOneOf":132,"Q_O_QGT_PIPE_E_S_QgroupTripleExpr_E_C_E_Plus":133,"O_QGT_PIPE_E_S_QgroupTripleExpr_E_C":134,"|":135,"singleElementGroup":136,"multiElementGroup":137,"unaryTripleExpr":138,"QGT_SEMI_E_Opt":139,",":140,";":141,"Q_O_QGT_SEMI_E_S_QunaryTripleExpr_E_C_E_Plus":142,"O_QGT_SEMI_E_S_QunaryTripleExpr_E_C":143,"Q_O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C_E_Opt":144,"O_QtripleConstraint_E_Or_QbracketedTripleExpr_E_C":145,"include":146,"O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C":147,"$":148,"tripleExprLabel":149,"tripleConstraint":150,"bracketedTripleExpr":151,"Qcardinality_E_Opt":152,"QonShapeExpression_E_Opt":153,"cardinality":154,"IT_ON":155,"QIT_SHAPE_IT_EXPRESSION_E_Opt":156,"IT_SHAPE":157,"IT_EXPRESSION":158,"QsenseFlags_E_Opt":159,"senseFlags":160,"*":161,"+":162,"?":163,"REPEAT_RANGE":164,"^":165,"[":166,"QvalueSetValue_E_Star":167,"]":168,"valueSetValue":169,"iriRange":170,"literalRange":171,"languageRange":172,"O_QiriExclusion_E_Plus_Or_QliteralExclusion_E_Plus_Or_QlanguageExclusion_E_Plus_C":173,"QiriExclusion_E_Plus":174,"iriExclusion":175,"QliteralExclusion_E_Plus":176,"literalExclusion":177,"QlanguageExclusion_E_Plus":178,"languageExclusion":179,"Q_O_QGT_TILDE_E_S_QiriExclusion_E_Star_C_E_Opt":180,"QiriExclusion_E_Star":181,"O_QGT_TILDE_E_S_QiriExclusion_E_Star_C":182,"~":183,"-":184,"QGT_TILDE_E_Opt":185,"literal":186,"Q_O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C_E_Opt":187,"QliteralExclusion_E_Star":188,"O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C":189,"LANGTAG":190,"Q_O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C_E_Opt":191,"O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C":192,"QlanguageExclusion_E_Star":193,"&":194,"//":195,"O_Qiri_E_Or_Qliteral_E_C":196,"QcodeDecl_E_Star":197,"%":198,"O_QCODE_E_Or_QGT_MODULO_E_C":199,"CODE":200,"rdfLiteral":201,"numericLiteral":202,"booleanLiteral":203,"a":204,"blankNode":205,"langString":206,"Q_O_QGT_DTYPE_E_S_Qdatatype_E_C_E_Opt":207,"O_QGT_DTYPE_E_S_Qdatatype_E_C":208,"IT_true":209,"IT_false":210,"STRING_LITERAL1":211,"STRING_LITERAL_LONG1":212,"STRING_LITERAL2":213,"STRING_LITERAL_LONG2":214,"LANG_STRING_LITERAL1":215,"LANG_STRING_LITERAL_LONG1":216,"LANG_STRING_LITERAL2":217,"LANG_STRING_LITERAL_LONG2":218,"prefixedName":219,"PNAME_LN":220,"BLANK_NODE_LABEL":221,"O_QIT_EXTENDS_E_Or_QGT_AMP_E_C":222,"IT_EXTENDS":223,"O_QIT_RESTRICTS_E_Or_QGT_MINUS_E_C":224,"IT_RESTRICTS":225,"$accept":0,"$end":1},
terminals_: {2:"error",7:"EOF",18:"IT_BASE",19:"IRIREF",20:"IT_PREFIX",21:"PNAME_NS",23:"IT_IMPORT",26:"IT_start",27:"=",36:"IT_ABSTRACT",39:"IT_EXTERNAL",43:"IT_NOT",51:"IT_OR",53:"IT_AND",69:"(",70:")",71:".",79:"ATPNAME_LN",80:"ATPNAME_NS",81:"@",85:"IT_LITERAL",96:"IT_IRI",97:"IT_BNODE",98:"IT_NONLITERAL",100:"INTEGER",101:"REGEXP",102:"IT_LENGTH",103:"IT_MINLENGTH",104:"IT_MAXLENGTH",108:"DECIMAL",109:"DOUBLE",111:"^^",112:"IT_MININCLUSIVE",113:"IT_MINEXCLUSIVE",114:"IT_MAXINCLUSIVE",115:"IT_MAXEXCLUSIVE",116:"IT_TOTALDIGITS",117:"IT_FRACTIONDIGITS",119:"{",121:"}",125:"IT_CLOSED",127:"IT_EXTRA",135:"|",140:",",141:";",148:"$",155:"IT_ON",157:"IT_SHAPE",158:"IT_EXPRESSION",161:"*",162:"+",163:"?",164:"REPEAT_RANGE",165:"^",166:"[",168:"]",183:"~",184:"-",190:"LANGTAG",194:"&",195:"//",198:"%",200:"CODE",204:"a",209:"IT_true",210:"IT_false",211:"STRING_LITERAL1",212:"STRING_LITERAL_LONG1",213:"STRING_LITERAL2",214:"STRING_LITERAL_LONG2",215:"LANG_STRING_LITERAL1",216:"LANG_STRING_LITERAL_LONG1",217:"LANG_STRING_LITERAL2",218:"LANG_STRING_LITERAL_LONG2",220:"PNAME_LN",221:"BLANK_NODE_LABEL",223:"IT_EXTENDS",225:"IT_RESTRICTS"},
productions_: [0,[3,4],[4,0],[5,0],[5,2],[9,1],[9,1],[12,0],[12,2],[14,2],[6,0],[6,1],[8,1],[8,1],[8,1],[15,2],[16,3],[17,2],[10,1],[10,1],[24,4],[11,1],[30,1],[30,2],[13,1],[13,1],[25,4],[32,0],[32,1],[34,0],[34,2],[35,1],[35,1],[38,3],[38,3],[38,2],[42,0],[42,1],[46,1],[45,1],[45,2],[50,2],[48,1],[48,2],[52,2],[49,1],[49,2],[29,0],[29,2],[47,2],[57,2],[56,0],[56,2],[28,2],[58,0],[58,2],[55,2],[61,2],[60,0],[60,2],[54,2],[40,0],[40,1],[59,2],[62,2],[62,1],[62,2],[62,3],[62,1],[65,0],[65,1],[68,0],[68,1],[41,2],[41,1],[41,2],[41,3],[41,1],[63,2],[63,1],[63,2],[63,3],[63,1],[74,0],[74,1],[77,0],[77,1],[67,1],[67,1],[76,1],[76,1],[44,1],[44,1],[44,2],[66,3],[82,0],[82,2],[64,3],[75,2],[75,2],[75,2],[75,1],[86,0],[86,2],[89,1],[89,2],[73,2],[73,1],[93,0],[93,2],[94,1],[94,2],[92,1],[92,1],[92,1],[90,1],[90,1],[95,2],[95,1],[99,1],[99,1],[99,1],[91,2],[91,2],[106,1],[106,1],[106,1],[106,3],[105,1],[105,1],[105,1],[105,1],[107,1],[107,1],[72,3],[78,4],[122,1],[122,1],[122,1],[118,0],[118,2],[120,0],[120,1],[124,2],[128,1],[128,2],[126,1],[130,1],[130,1],[132,2],[134,2],[133,1],[133,2],[131,1],[131,1],[136,2],[139,0],[139,1],[139,1],[137,3],[143,2],[143,2],[142,1],[142,2],[138,2],[138,1],[147,2],[144,0],[144,1],[145,1],[145,1],[151,7],[152,0],[152,1],[153,0],[153,3],[156,0],[156,2],[150,7],[159,0],[159,1],[154,1],[154,1],[154,1],[154,1],[160,1],[88,3],[167,0],[167,2],[169,1],[169,1],[169,1],[169,2],[174,1],[174,2],[176,1],[176,2],[178,1],[178,2],[173,1],[173,1],[173,1],[170,2],[181,0],[181,2],[182,2],[180,0],[180,1],[175,3],[185,0],[185,1],[171,2],[188,0],[188,2],[189,2],[187,0],[187,1],[177,3],[172,2],[172,2],[193,0],[193,2],[192,2],[191,0],[191,1],[179,3],[146,2],[84,3],[196,1],[196,1],[83,1],[197,0],[197,2],[31,3],[199,1],[199,1],[186,1],[186,1],[186,1],[129,1],[129,1],[87,1],[33,1],[33,1],[149,1],[149,1],[202,1],[202,1],[202,1],[201,1],[201,2],[208,2],[207,0],[207,1],[203,1],[203,1],[110,1],[110,1],[110,1],[110,1],[206,1],[206,1],[206,1],[206,1],[22,1],[22,1],[219,1],[219,1],[205,1],[123,2],[222,1],[222,1],[37,2],[224,1],[224,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        let imports = Object.keys(Parser._imports).length ? { imports: Parser._imports } : {}
        var startObj = Parser.start ? { start: Parser.start } : {};
        var startActs = Parser.startActs ? { startActs: Parser.startActs } : {};
        let shapes = Parser.shapes ? { shapes: Object.values(Parser.shapes) } : {};
        var shexj = Object.assign(
          { type: "Schema" }, imports, startActs, startObj, shapes
        )
        if (Parser.options.index) {
          if (Parser._base !== null)
            shexj._base = Parser._base;
          shexj._prefixes = Parser._prefixes;
          shexj._index = {
            shapeExprs: Parser.shapes || new Map(),
            tripleExprs: Parser.productions || new Map()
          };
          shexj._sourceMap = Parser._sourceMap;
        }
        return shexj;
      
break;
case 2:
 yy.parser.yy = { lexer: yy.lexer} ; 
break;
case 15:
 // t: @@
        Parser._setBase(Parser._base === null ||
                    absoluteIRI.test($$[$0].slice(1, -1)) ? $$[$0].slice(1, -1) : _resolveIRI($$[$0].slice(1, -1)));
      
break;
case 16:
 // t: ShExParser-test.js/with pre-defined prefixes
        Parser._prefixes[$$[$0-1].slice(0, -1)] = $$[$0];
      
break;
case 17:
 // t: @@
        Parser._imports.push($$[$0]);
      
break;
case 20:

        if (Parser.start)
          error(new Error("Parse error: start already defined"), yy);
        Parser.start = shapeJunction("ShapeOr", $$[$0-1], $$[$0]); // t: startInline
      
break;
case 21:

        Parser.startActs = $$[$0]; // t: startCode1
      
break;
case 22:
this.$ = [$$[$0]] // t: startCode1;
break;
case 23:
this.$ = appendTo($$[$0-1], $$[$0]) // t: startCode3;
break;
case 26:
 // t: 1dot 1val1vsMinusiri3??
        if ($$[$0-3].abstract || $$[$0-1].length) { // t: $$[$0-3]: 1dotAbstractShapeCode1  $$[$0-2]: @@
          addShape($$[$0-2], Object.assign({type: "ShapeDecl"}, $$[$0-3],
                                     $$[$0-1].length > 0 ? { restricts: $$[$0-1] } : { },
                                     {shapeExpr: $$[$0]}), yy) // $$[$01]: t: @@
        } else {
          addShape($$[$0-2],  $$[$0], yy);
        }
      
break;
case 27:
this.$ = {  };
break;
case 28:
this.$ = { abstract: true };
break;
case 29: case 95:
this.$ = [] // t: 1dot, 1dotAnnot3;
break;
case 30: case 96:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotAnnot3;
break;
case 31:

        this.$ = nonest($$[$0]);
      
break;
case 32:
this.$ = { type: "ShapeExternal" };
break;
case 33:

        if ($$[$0-2])
          $$[$0-1] = { type: "ShapeNot", "shapeExpr": nonest($$[$0-1]) }; // t:@@
        if ($$[$0]) { // If there were disjuncts,
          //           shapeOr will have $$[$0].set needsAtom.
          //           Prepend $$[$0].needsAtom with $$[$0-1].
          //           Note that $$[$0] may be a ShapeOr or a ShapeAnd.
          $$[$0].needsAtom.unshift(nonest($$[$0-1]));
          delete $$[$0].needsAtom;
          this.$ = $$[$0];
        } else {
          this.$ = $$[$0-1];
        }
      
break;
case 34:

        $$[$0-1] = { type: "ShapeNot", "shapeExpr": nonest($$[$0-1]) } // !!! opt
        if ($$[$0]) { // If there were disjuncts,
          //           shapeOr will have $$[$0].set needsAtom.
          //           Prepend $$[$0].needsAtom with $$[$0-1].
          //           Note that $$[$0] may be a ShapeOr or a ShapeAnd.
          $$[$0].needsAtom.unshift(nonest($$[$0-1]));
          delete $$[$0].needsAtom;
          this.$ = $$[$0];
        } else {
          this.$ = $$[$0-1];
        }
      
break;
case 35:

        $$[$0].needsAtom.unshift(nonest($$[$0-1]));
        delete $$[$0].needsAtom;
        this.$ = $$[$0]; // { type: "ShapeOr", "shapeExprs": [$$[$0-1]].concat($$[$0]) };
      
break;
case 36: case 235: case 252:
this.$ = null;
break;
case 37: case 41: case 44: case 50: case 57: case 192: case 251:
this.$ = $$[$0];
break;
case 39:
 // returns a ShapeOr
        var disjuncts = $$[$0].map(nonest);
        this.$ = { type: "ShapeOr", shapeExprs: disjuncts, needsAtom: disjuncts }; // t: @@
      
break;
case 40:
 // returns a ShapeAnd
        // $$[$0-1] could have implicit conjuncts and explicit nested ANDs (will have .nested: true)
        $$[$0-1].filter(c => c.type === "ShapeAnd").length === $$[$0-1].length
        var and = {
          type: "ShapeAnd",
          shapeExprs: $$[$0-1].reduce(
            (acc, elt) =>
              acc.concat(elt.type === 'ShapeAnd' && !elt.nested ? elt.shapeExprs : nonest(elt)), []
          )
        };
        this.$ = $$[$0].length > 0 ? { type: "ShapeOr", shapeExprs: [and].concat($$[$0].map(nonest)) } : and; // t: @@
        this.$.needsAtom = and.shapeExprs;
      
break;
case 42: case 45:
this.$ = [$$[$0]];
break;
case 43: case 46: case 48: case 52: case 55: case 59:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 47: case 51: case 54: case 58:
this.$ = [];
break;
case 49:
this.$ = shapeJunction("ShapeOr", $$[$0-1], $$[$0]);
break;
case 53: case 56:
this.$ = shapeJunction("ShapeAnd", $$[$0-1], $$[$0]) // t: @@;
break;
case 60:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t:@@ */ : $$[$0];
break;
case 61:
this.$ = false;
break;
case 62:
this.$ = true;
break;
case 63:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t: 1NOTNOTdot, 1NOTNOTIRI, 1NOTNOTvs */ : $$[$0];
break;
case 64: case 73: case 78:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1];
break;
case 66:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t: 1dotRef1 */ : $$[$0-1] // t:@@;
break;
case 67: case 76: case 81:
this.$ = Object.assign($$[$0-1], {nested: true}) // t: 1val1vsMinusiri3;
break;
case 68: case 77: case 82:
this.$ = EmptyShape // t: 1dot;
break;
case 75:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t:@@ */ : $$[$0-1]	 // t: 1dotRef1 -- use _QnonLitNodeConstraint_E_Opt like below?;
break;
case 80:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1] // t: !! look to 1dotRef1;
break;
case 91:
 // t: 1dotRefLNex@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        var namePos = $$[$0].indexOf(':');
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, namePos), yy) + $$[$0].substr(namePos + 1), yy); // ShapeRef
      
break;
case 92:
 // t: 1dotRefNS1@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy), yy); // ShapeRef
      
break;
case 93:
this.$ = addSourceMap($$[$0], yy) // ShapeRef // t: 1dotRef1, 1dotRefSpaceLNex, 1dotRefSpaceNS1;
break;
case 94: case 97:
 // t: !!
        this.$ = $$[$0-2]
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !!
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !!
      
break;
case 98:
this.$ = extend({ type: "NodeConstraint", nodeKind: "literal" }, $$[$0]) // t: 1literalPattern;
break;
case 99:

        if (numericDatatypes.indexOf($$[$0-1]) === -1)
          numericFacets.forEach(function (facet) {
            if (facet in $$[$0])
              error(new Error("Parse error: facet " + facet + " not allowed for unknown datatype " + $$[$0-1]), yy);
          });
        this.$ = extend({ type: "NodeConstraint", datatype: $$[$0-1] }, $$[$0]) // t: 1datatype
      
break;
case 100:
this.$ = { type: "NodeConstraint", values: $$[$0-1] } // t: 1val1IRIREF;
break;
case 101:
this.$ = extend({ type: "NodeConstraint"}, $$[$0]);
break;
case 102:
this.$ = {} // t: 1literalPattern;
break;
case 103:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: 1literalLength
      
break;
case 105: case 111:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: !! look to 1literalLength
      
break;
case 106:
this.$ = extend({ type: "NodeConstraint" }, $$[$0-1], $$[$0] ? $$[$0] : {}) // t: 1iriPattern;
break;
case 107:
this.$ = extend({ type: "NodeConstraint" }, $$[$0]) // t: @@;
break;
case 108:
this.$ = {};
break;
case 109:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0])
      
break;
case 112:
this.$ = { nodeKind: "iri" } // t: 1iriPattern;
break;
case 113:
this.$ = { nodeKind: "bnode" } // t: 1bnodeLength;
break;
case 114:
this.$ = { nodeKind: "nonliteral" } // t: 1nonliteralLength;
break;
case 117:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalLength;
break;
case 118:
this.$ = unescapeRegexp($$[$0]) // t: 1literalPattern;
break;
case 119:
this.$ = "length" // t: 1literalLength;
break;
case 120:
this.$ = "minlength" // t: 1literalMinlength;
break;
case 121:
this.$ = "maxlength" // t: 1literalMaxlength;
break;
case 122:
this.$ = keyValObject($$[$0-1], $$[$0]) // t: 1literalMininclusive;
break;
case 123:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalTotaldigits;
break;
case 124:
this.$ = parseInt($$[$0], 10);
break;
case 125: case 126:
this.$ = parseFloat($$[$0]);
break;
case 127:
 // ## deprecated
        if ($$[$0] === XSD_DECIMAL || $$[$0] === XSD_FLOAT || $$[$0] === XSD_DOUBLE)
          this.$ = parseFloat($$[$0-2].value);
        else if (numericDatatypes.indexOf($$[$0]) !== -1)
          this.$ = parseInt($$[$0-2].value)
        else
          error(new Error("Parse error: numeric range facet expected numeric datatype instead of " + $$[$0]), yy);
      
break;
case 128:
this.$ = "mininclusive" // t: 1literalMininclusive;
break;
case 129:
this.$ = "minexclusive" // t: 1literalMinexclusive;
break;
case 130:
this.$ = "maxinclusive" // t: 1literalMaxinclusive;
break;
case 131:
this.$ = "maxexclusive" // t: 1literalMaxexclusive;
break;
case 132:
this.$ = "totaldigits" // t: 1literalTotaldigits;
break;
case 133:
this.$ = "fractiondigits" // t: 1literalFractiondigits;
break;
case 134:
 // t: 1dotExtend3
        this.$ = $$[$0-2] === EmptyShape ? { type: "Shape" } : $$[$0-2]; // t: 0
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !! look to open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !! look to open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 135:
 // t: 1dotExtend3
        var exprObj = $$[$0-1] ? { expression: $$[$0-1] } : EmptyObject; // t: 0, 0Extend1
        this.$ = (exprObj === EmptyObject && $$[$0-3] === EmptyObject) ?
	  EmptyShape :
	  extend({ type: "Shape" }, exprObj, $$[$0-3]);
      
break;
case 136:
this.$ = [ "extends", [$$[$0]] ] // t: 1dotExtend1;
break;
case 137:
this.$ = [ "extra", $$[$0] ] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 138:
this.$ = [ "closed", true ] // t: 1dotClosed;
break;
case 139:
this.$ = EmptyObject;
break;
case 140:

        if ($$[$0-1] === EmptyObject)
          $$[$0-1] = {};
        if ($$[$0][0] === "closed")
          $$[$0-1]["closed"] = true; // t: 1dotClosed
        else if ($$[$0][0] in $$[$0-1])
          $$[$0-1][$$[$0][0]] = unionAll($$[$0-1][$$[$0][0]], $$[$0][1]); // t: 1dotExtend3, 3groupdot3Extra, 3groupdotExtra3
        else
          $$[$0-1][$$[$0][0]] = $$[$0][1]; // t: 1dotExtend1
        this.$ = $$[$0-1];
      
break;
case 143:
this.$ = $$[$0] // t: 1dotExtra1, 3groupdot3Extra;
break;
case 144:
this.$ = [$$[$0]] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 145:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 3groupdotExtra3;
break;
case 149:
this.$ = { type: "OneOf", expressions: unionAll([$$[$0-1]], $$[$0]) } // t: 2oneOfdot;
break;
case 150:
this.$ = $$[$0] // t: 2oneOfdot;
break;
case 151:
this.$ = [$$[$0]] // t: 2oneOfdot;
break;
case 152:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2oneOfdot;
break;
case 155:
this.$ = $$[$0-1];
break;
case 159:
this.$ = { type: "EachOf", expressions: unionAll([$$[$0-2]], $$[$0-1]) } // t: 2groupOfdot;
break;
case 160:
this.$ = $$[$0] // ## deprecated // t: 2groupOfdot;
break;
case 161:
this.$ = $$[$0] // t: 2groupOfdot;
break;
case 162:
this.$ = [$$[$0]] // t: 2groupOfdot;
break;
case 163:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2groupOfdot;
break;
case 164:

        if ($$[$0-1]) {
          this.$ = extend({ id: $$[$0-1] }, $$[$0]);
          addProduction($$[$0-1],  this.$, yy);
        } else {
          this.$ = $$[$0]
        }
      
break;
case 166:
this.$ = addSourceMap($$[$0], yy);
break;
case 171:

        // t: open1dotOr1dot, !openopen1dotcloseCode1closeCode2
        this.$ = $$[$0-5];
        // Copy all of the new attributes into the encapsulated shape.
        if ("min" in $$[$0-3]) { this.$.min = $$[$0-3].min; } // t: open3groupdotclosecard23Annot3Code2
        if ("max" in $$[$0-3]) { this.$.max = $$[$0-3].max; } // t: open3groupdotclosecard23Annot3Code2
        if ($$[$0-2]) { this.$.onShapeExpression = $$[$0-2]; } // t: !!
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = "semActs" in $$[$0-5] ? $$[$0-5].semActs.concat($$[$0].semActs) : $$[$0].semActs; } // t: open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 172:
this.$ = {} // t: 1dot;
break;
case 174:
this.$ = null // t: 1dot;
break;
case 175:
this.$ = $$[$0]	// t: !!;
break;
case 178:

        // $$[$0]: t: 1dotCode1
	if ($$[$0-4] !== EmptyShape && false) {
	  var t = blank();
	  addShape(t, $$[$0-4], yy);
	  $$[$0-4] = t; // ShapeRef
	}
        // %7: t: 1inversedotCode1
        this.$ = extend({ type: "TripleConstraint" }, $$[$0-6], { predicate: $$[$0-5] }, ($$[$0-4] === EmptyShape ? {} : { valueExpr: $$[$0-4] }), $$[$0-3], $$[$0]); // t: 1dot, 1inversedot
        if ($$[$0-2])
          this.$.onShapeExpression = $$[$0-2]; // t: !!
        if ($$[$0-1].length)
          this.$["annotations"] = $$[$0-1]; // t: 1dotAnnot3, 1inversedotAnnot3
      
break;
case 181:
this.$ = { min:0, max:UNBOUNDED } // t: 1cardStar;
break;
case 182:
this.$ = { min:1, max:UNBOUNDED } // t: 1cardPlus;
break;
case 183:
this.$ = { min:0, max:1 } // t: 1cardOpt;
break;
case 184:

        $$[$0] = $$[$0].substr(1, $$[$0].length-2);
        var nums = $$[$0].match(/(\d+)/g);
        this.$ = { min: parseInt(nums[0], 10) }; // t: 1card2blank, 1card2Star
        if (nums.length === 2)
            this.$["max"] = parseInt(nums[1], 10); // t: 1card23
        else if ($$[$0].indexOf(',') === -1) // t: 1card2
            this.$["max"] = parseInt(nums[0], 10);
        else
            this.$["max"] = UNBOUNDED;
      
break;
case 185:
this.$ = { inverse: true } // t: 1inversedot;
break;
case 186:
this.$ = $$[$0-1] // t: 1val1IRIREF;
break;
case 187:
this.$ = [] // t: 1val1IRIREF;
break;
case 188:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1IRIREF;
break;
case 193:
this.$ = [$$[$0]] // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 194:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 195:
this.$ = [$$[$0]] // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 196:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 197:
this.$ = [$$[$0]] // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 198:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 199:
this.$ = { type: "IriStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 200:
this.$ = { type: "LiteralStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 201:
this.$ = { type: "LanguageStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 202:

        if ($$[$0]) {
          this.$ = {  // t: 1val1iriStem, 1val1iriStemMinusiri3
            type: $$[$0].length ? "IriStemRange" : "IriStem",
            stem: $$[$0-1]
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1iriStemMinusiri3
        } else {
          this.$ = $$[$0-1]; // t: 1val1IRIREF, 1AvalA
        }
      
break;
case 203:
this.$ = [] // t: 1val1iriStem, 1val1iriStemMinusiri3;
break;
case 204:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1iriStemMinusiri3;
break;
case 205:
this.$ = $$[$0] // t: 1val1iriStemMinusiri3;
break;
case 208:
this.$ = $$[$0] ? { type: "IriStem", stem: $$[$0-1] } /* t: 1val1iriStemMinusiriStem3 */ : $$[$0-1] // t: 1val1iriStemMinusiri3;
break;
case 211:

        if ($$[$0]) {
          this.$ = {  // t: 1val1literalStemMinusliteralStem3, 1val1literalStem
            type: $$[$0].length ? "LiteralStemRange" : "LiteralStem",
            stem: $$[$0-1].value
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1literalStemMinusliteral3
        } else {
          this.$ = $$[$0-1]; // t: 1val1LITERAL
        }
      
break;
case 212:
this.$ = [] // t: 1val1literalStem, 1val1literalStemMinusliteral3;
break;
case 213:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1literalStemMinusliteral3;
break;
case 214:
this.$ = $$[$0] // t: 1val1literalStemMinusliteral3;
break;
case 217:
this.$ = $$[$0] ? { type: "LiteralStem", stem: $$[$0-1].value } /* t: 1val1literalStemMinusliteral3 */ : $$[$0-1].value // t: 1val1literalStemMinusliteralStem3;
break;
case 218:

        if ($$[$0]) {
          this.$ = {  // t: 1val1languageStemMinuslanguage3 1val1languageStemMinuslanguageStem3 : 1val1languageStem
            type: $$[$0].length ? "LanguageStemRange" : "LanguageStem",
            stem: $$[$0-1]
          };
          if ($$[$0].length)
            this.$["exclusions"] = $$[$0]; // t: 1val1languageStemMinuslanguage3, 1val1languageStemMinuslanguageStem3
        } else {
          this.$ = { type: "Language", languageTag: $$[$0-1] }; // t: 1val1language
        }
      
break;
case 219:

        this.$ = {  // t: @@
          type: $$[$0].length ? "LanguageStemRange" : "LanguageStem",
          stem: ""
        };
        if ($$[$0].length)
          this.$["exclusions"] = $$[$0]; // t: @@
      
break;
case 220:
this.$ = [] // t: 1val1languageStem, 1val1languageStemMinuslanguage3;
break;
case 221:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1languageStemMinuslanguage3;
break;
case 222:
this.$ = $$[$0] // t: 1val1languageStemMinuslanguage3;
break;
case 225:
this.$ = $$[$0] ? { type: "LanguageStem", stem: $$[$0-1] } /* t: 1val1languageStemMinuslanguageStem3 */ : $$[$0-1] // t: 1val1languageStemMinuslanguage3;
break;
case 226:
this.$ = addSourceMap($$[$0], yy) // Inclusion // t: 2groupInclude1;
break;
case 227:
this.$ = { type: "Annotation", predicate: $$[$0-1], object: $$[$0] } // t: 1dotAnnotIRIREF;
break;
case 230:
this.$ = $$[$0].length ? { semActs: $$[$0] } : null // t: 1dotCode1/2oneOfDot;
break;
case 231:
this.$ = [] // t: 1dot, 1dotCode1;
break;
case 232:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotCode1;
break;
case 233:
this.$ = $$[$0] ? unescapeSemanticAction($$[$0-1], $$[$0]) /* t: 1dotCode1 */ : { type: "SemAct", name: $$[$0-1] } // t: 1dotNoCode1;
break;
case 240:
this.$ = RDF_TYPE // t: 1AvalA;
break;
case 246:
this.$ = createLiteral($$[$0], XSD_INTEGER) // t: 1val1INTEGER;
break;
case 247:
this.$ = createLiteral($$[$0], XSD_DECIMAL) // t: 1val1DECIMAL;
break;
case 248:
this.$ = createLiteral($$[$0], XSD_DOUBLE) // t: 1val1DOUBLE;
break;
case 250:
this.$ = $$[$0] ? extend($$[$0-1], { type: $$[$0] }) : $$[$0-1] // t: 1val1Datatype;
break;
case 254:
this.$ = { value: "true", type: XSD_BOOLEAN } // t: 1val1true;
break;
case 255:
this.$ = { value: "false", type: XSD_BOOLEAN } // t: 1val1false;
break;
case 256:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL2;
break;
case 257:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL1;
break;
case 258:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL_LONG2;
break;
case 259:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG1;
break;
case 260:
this.$ = unescapeLangString($$[$0], 1)	// t: @@;
break;
case 261:
this.$ = unescapeLangString($$[$0], 3)	// t: @@;
break;
case 262:
this.$ = unescapeLangString($$[$0], 1)	// t: 1val1LANGTAG;
break;
case 263:
this.$ = unescapeLangString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG2_with_LANGTAG;
break;
case 264:
 // t: 1dot
        var unesc = ShExUtil.unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._base === null || absoluteIRI.test(unesc) ? unesc : _resolveIRI(unesc)
      
break;
case 266:
 // t:1dotPNex, 1dotPNdefault, ShExParser-test.js/with pre-defined prefixes
        var namePos = $$[$0].indexOf(':');
        this.$ = expandPrefix($$[$0].substr(0, namePos), yy) + ShExUtil.unescapeText($$[$0].substr(namePos + 1), pnameEscapeReplacements);
      
break;
case 267:
 // t: 1dotNS2, 1dotNSdefault, ShExParser-test.js/PNAME_NS with pre-defined prefixes
        this.$ = expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy);
      
break;
case 269:
this.$ = $$[$0] // t: 1dotInherit1, 1dot3Inherit, 1dotInherit3;
break;
case 272:
this.$ = $$[$0] // t: @_$[$0-1]dotSpecialize1, @_$[$0-1]dot3Specialize, @_$[$0-1]dotSpecialize3;
break;
}
},
table: [o($V0,[2,2],{3:1,4:2}),{1:[3]},o($V0,[2,3],{5:3}),o($V1,$V2,{6:4,8:5,14:6,15:7,16:8,17:9,9:10,10:14,11:15,24:16,25:17,30:18,32:20,31:21,7:[2,10],18:[1,11],20:[1,12],23:[1,13],26:[1,19],36:$V3,198:$V4}),{7:[1,24]},o($V0,[2,4]),{7:[2,11]},o($V0,$V5),o($V0,$V6),o($V0,$V7),o($V8,[2,7],{12:25}),{19:[1,26]},{21:[1,27]},{19:$V9,21:$Va,22:28,219:30,220:$Vb},o($V8,[2,5]),o($V8,[2,6]),o($V8,$Vc),o($V8,$Vd),o($V8,[2,21],{31:33,198:$V4}),{27:[1,34]},{19:$Ve,21:$Vf,22:36,33:35,205:37,219:39,220:$Vg,221:$Vh},o($V0,[2,22]),o($V1,[2,28]),{19:$Vi,21:$Vj,22:43,219:45,220:$Vk},{1:[2,1]},o($V1,$V2,{13:48,8:49,10:50,15:51,16:52,17:53,24:54,25:55,32:60,7:[2,9],18:[1,56],20:[1,57],23:[1,58],26:[1,59],36:$V3}),o($V0,$Vl),{19:$V9,21:$Va,22:61,219:30,220:$Vb},o($V0,$Vm),o($V0,$Vn),o($V0,$Vo),o($V0,$Vp),o($V0,$Vq),o($V0,[2,23]),o($Vr,$Vs,{28:62,54:63,40:64,43:$Vt}),o($Vu,$Vv,{34:66}),o($Vu,$Vw),o($Vu,$Vx),o($Vu,$Vn),o($Vu,$Vo),o($Vu,$Vy),o($Vu,$Vp),o($Vu,$Vq),{198:[1,69],199:67,200:[1,68]},o($Vz,$Vn),o($Vz,$Vo),o($Vz,$Vp),o($Vz,$Vq),o($V8,[2,8]),o($V8,[2,24]),o($V8,[2,25]),o($V8,$V5),o($V8,$V6),o($V8,$V7),o($V8,$Vc),o($V8,$Vd),{19:[1,70]},{21:[1,71]},{19:$VA,21:$VB,22:72,219:74,220:$VC},{27:[1,77]},{19:$Ve,21:$Vf,22:36,33:78,205:37,219:39,220:$Vg,221:$Vh},o($V0,$VD),o($VE,$VF,{29:79}),o($VG,$VH,{58:80}),o($VI,$VJ,{62:81,64:82,66:83,67:84,73:87,75:88,72:89,44:90,92:91,94:92,87:94,88:95,89:96,78:97,95:104,22:105,91:107,118:108,99:109,219:112,105:113,107:114,19:$VK,21:$VL,69:[1,85],71:[1,86],79:[1,98],80:[1,99],81:[1,100],85:$VM,96:$VN,97:$VO,98:$VP,101:$VQ,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:$V_,220:$V$}),o($Vr,$V01),o($V11,$Vs,{35:126,37:127,38:128,224:130,40:131,44:133,39:[1,129],43:[1,132],79:$V21,80:$V31,81:$V41,184:$V51,225:$V61}),o($V0,$V71),o($V0,$V81),o($V0,$V91),o($V8,$Vl),{19:$VA,21:$VB,22:139,219:74,220:$VC},o($V8,$Vm),o($V8,$Vn),o($V8,$Vo),o($V8,$Vp),o($V8,$Vq),o($Vr,$Vs,{28:140,54:141,40:142,43:$Vt}),o($Vu,$Vv,{34:143}),o($V8,$Va1,{50:144,51:$Vb1}),o($VE,$Vc1,{52:146,53:$Vd1}),o($VG,$Ve1),o($VG,$Vf1,{65:148,67:149,72:150,44:151,78:152,118:156,79:$Vg1,80:$Vh1,81:$Vi1,119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:157,64:158,73:159,92:160,94:161,95:165,99:166,96:$Vl1,97:$Vm1,98:$Vn1,101:$Vo1,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{38:168,40:169,44:171,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:172}),o($Vt1,$Vs1,{82:173}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:174}),o($Vr1,$Vz1,{99:109,95:175,101:$VQ,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:176}),o($VA1,$VB1,{86:177}),o($VA1,$VB1,{86:178}),o($Vt1,$VC1,{105:113,107:114,91:179,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:180}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,184],21:[1,188],22:182,33:181,205:183,219:185,220:[1,187],221:[1,186]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:189}),o($VN1,$VO1),{119:[1,190],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,199]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,201],106:200,108:[1,202],109:[1,203],110:204,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,209]},{100:[2,119]},{100:[2,120]},{100:[2,121]},o($VA1,$Vp),o($VA1,$Vq),o($VY1,[2,128]),o($VY1,[2,129]),o($VY1,[2,130]),o($VY1,[2,131]),{100:[2,132]},{100:[2,133]},o($V8,$VZ1),o($Vu,[2,30]),o($V8,$V_1),o($V8,$V$1),o($VI,$VJ,{67:210,72:211,44:212,78:213,118:217,79:[1,214],80:[1,215],81:[1,216]}),o($VI,$VJ,{73:87,75:88,92:91,94:92,87:94,88:95,89:96,78:97,95:104,22:105,91:107,118:108,99:109,219:112,105:113,107:114,41:218,64:219,66:220,72:221,19:$VK,21:$VL,69:[1,222],71:[1,223],85:$VM,96:$VN,97:$VO,98:$VP,101:$VQ,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:$V_,220:$V$}),o($V11,$V01,{44:224,79:$Vg1,80:$Vh1,81:$Vi1}),{45:225,48:226,49:227,50:228,51:$Vb1,52:229,53:$Vd1},o($V02,[2,273]),o($V02,[2,274]),o($V12,$VE1),o($V12,$VF1),{19:[1,233],21:[1,237],22:231,33:230,205:232,219:234,220:[1,236],221:[1,235]},o($V8,$VD),o($VE,$VF,{29:238}),o($VG,$VH,{58:239}),o($VI,$VJ,{62:240,64:241,66:242,67:243,73:246,75:247,72:248,44:249,92:250,94:251,87:253,88:254,89:255,78:256,95:263,22:264,91:266,118:267,99:268,219:271,105:272,107:273,19:$V22,21:$V32,69:[1,244],71:[1,245],79:[1,257],80:[1,258],81:[1,259],85:$V42,96:$V52,97:$V62,98:$V72,101:$V82,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:$V92,220:$Va2}),o($V11,$Vs,{37:127,224:130,35:276,38:277,40:279,44:281,39:[1,278],43:[1,280],79:$V21,80:$V31,81:$V41,184:$V51,225:$V61}),o($VE,$Vb2),o($Vr,$Vs,{28:282,54:283,40:284,43:$Vt}),o($VG,$Vc2),o($Vr,$Vs,{54:285,40:286,43:$Vt}),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:287}),o($VG,$VE1),o($VG,$VF1),{19:[1,291],21:[1,295],22:289,33:288,205:290,219:292,220:[1,294],221:[1,293]},{119:[1,296],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:297}),o($Vh2,$Vy1,{93:298}),o($Vt1,$Vz1,{99:166,95:299,101:$Vo1,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,300]},o($Vh2,$VT1),{70:[1,301]},o($VI,$VJ,{41:302,64:303,66:304,72:305,73:308,75:309,78:310,92:311,94:312,87:314,88:315,89:316,118:317,95:321,22:322,91:324,99:325,219:328,105:329,107:330,19:[1,327],21:[1,332],69:[1,306],71:[1,307],85:[1,313],96:[1,318],97:[1,319],98:[1,320],101:$Vi2,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,323],220:[1,331]}),o($V11,$V01,{44:333,79:$Vj2,80:$Vk2,81:$Vl2}),{45:337,48:338,49:339,50:340,51:$Vm2,52:341,53:$Vn2},o($Vo2,$Vp2,{83:344,84:345,197:346,195:[1,347]}),o($Vq2,$Vp2,{83:348,84:349,197:350,195:$Vr2}),o($Vr1,$Vs2,{99:109,95:352,101:$VQ,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:353,95:354,91:355,99:356,105:358,107:359,101:$Vv2,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:353,95:354,91:355,99:356,105:358,107:359,101:$Vv2,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:353,95:354,91:355,99:356,105:358,107:359,101:$Vv2,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:360,84:361,197:362,195:[1,363]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,364],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{120:396,126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,121:$VW2,148:$VX2,194:$VY2}),o($VI,[2,140]),o($VI,[2,136]),o($VI,[2,137]),o($VI,[2,138]),o($VI,$VJ,{67:409,72:410,44:411,78:412,118:416,79:[1,413],80:[1,414],81:[1,415]}),{19:$VZ2,21:$V_2,22:419,128:417,129:418,204:$V$2,219:422,220:$V03},o($V02,[2,270]),o($V02,[2,271]),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,425]},{111:$V63},{111:$V73},{111:$V83},{111:$V93},o($VN1,$Va3),o($Vu,[2,272]),o($Vu,$Vv1),o($Vu,$Vw1),o($Vb3,$Vs1,{82:426}),o($Vu,$VE1),o($Vu,$VF1),{19:[1,430],21:[1,434],22:428,33:427,205:429,219:431,220:[1,433],221:[1,432]},{119:[1,435],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V8,$Vc3,{48:226,49:227,50:228,52:229,42:436,45:437,51:$Vb1,53:$Vd1}),o($VG,$Vf1,{67:149,72:150,44:151,78:152,118:156,65:438,79:$Vg1,80:$Vh1,81:$Vi1,119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vd3),o($VG,$Vk1,{64:158,73:159,92:160,94:161,95:165,99:166,68:439,96:$Vl1,97:$Vm1,98:$Vn1,101:$Vo1,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:440,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Ve3),o($V8,$Vc3,{48:226,49:227,50:228,52:229,45:437,42:441,51:$Vb1,53:$Vd1}),o($V8,$Vf3),o($V8,$Vg3,{50:442,51:$Vb1}),o($VE,$VF,{29:443,52:444,53:$Vd1}),o($VE,$Vh3),o($VG,$Vi3),o($V12,$VA2),o($V12,$Vw),o($V12,$Vx),o($V12,$Vn),o($V12,$Vo),o($V12,$Vy),o($V12,$Vp),o($V12,$Vq),o($V8,$Va1,{50:445,51:$Vj3}),o($VE,$Vc1,{52:447,53:$Vk3}),o($VG,$Ve1),o($VG,$Vf1,{65:449,67:450,72:451,44:452,78:453,118:457,79:$Vl3,80:$Vm3,81:$Vn3,119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:458,64:459,73:460,92:461,94:462,95:466,99:467,96:$Vo3,97:$Vp3,98:$Vq3,101:$Vr3,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:469,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:470}),o($Vt1,$Vs1,{82:471}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:472}),o($Vr1,$Vz1,{99:268,95:473,101:$V82,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:474}),o($VA1,$VB1,{86:475}),o($VA1,$VB1,{86:476}),o($Vt1,$VC1,{105:272,107:273,91:477,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:478}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,482],21:[1,486],22:480,33:479,205:481,219:483,220:[1,485],221:[1,484]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:487}),o($VN1,$VO1),{119:[1,488],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,489]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,491],106:490,108:[1,492],109:[1,493],110:494,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,495]},o($VA1,$Vp),o($VA1,$Vq),o($V8,$VZ1),o($V8,$V_1),o($V8,$V$1),o($VI,$VJ,{73:246,75:247,92:250,94:251,87:253,88:254,89:255,78:256,95:263,22:264,91:266,118:267,99:268,219:271,105:272,107:273,41:496,64:497,66:498,72:499,19:$V22,21:$V32,69:[1,500],71:[1,501],85:$V42,96:$V52,97:$V62,98:$V72,101:$V82,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:$V92,220:$Va2}),o($V11,$V01,{44:502,79:$Vl3,80:$Vm3,81:$Vn3}),{45:503,48:504,49:505,50:506,51:$Vj3,52:507,53:$Vk3},o($VE,$Vs3),o($VG,$VH,{58:508}),o($VI,$VJ,{62:509,64:510,66:511,67:512,73:515,75:516,72:517,44:518,92:519,94:520,87:522,88:523,89:524,78:525,95:532,22:533,91:535,118:536,99:537,219:540,105:541,107:542,19:[1,539],21:[1,544],69:[1,513],71:[1,514],79:[1,526],80:[1,527],81:[1,528],85:[1,521],96:[1,529],97:[1,530],98:[1,531],101:$Vt3,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,534],220:[1,543]}),o($VG,$Vu3),o($VI,$VJ,{62:545,64:546,66:547,67:548,73:551,75:552,72:553,44:554,92:555,94:556,87:558,88:559,89:560,78:561,95:568,22:569,91:571,118:572,99:573,219:576,105:577,107:578,19:[1,575],21:[1,580],69:[1,549],71:[1,550],79:[1,562],80:[1,563],81:[1,564],85:[1,557],96:[1,565],97:[1,566],98:[1,567],101:$Vv3,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,570],220:[1,579]}),o($Vq2,$Vp2,{84:349,197:350,83:581,195:$Vr2}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:582,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:349,197:350,83:583,195:$Vr2}),o($Vt1,$Vs2,{99:166,95:584,101:$Vo1,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),{42:585,45:586,48:338,49:339,50:340,51:$Vm2,52:341,53:$Vn2,70:$Vc3},o($VI,$VJ,{65:587,67:588,72:589,44:590,78:591,118:592,51:$Vf1,53:$Vf1,70:$Vf1,79:$Vj2,80:$Vk2,81:$Vl2}),o($Vx3,$Vd3),o($Vx3,$Vk1,{68:593,64:594,73:595,92:596,94:597,95:601,99:602,96:[1,598],97:[1,599],98:[1,600],101:$Vy3,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:604,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vx3,$Ve3),o($Vz3,$Vs1,{82:605}),o($VA3,$Vs1,{82:606}),o($VB3,$Vs1,{82:607}),o($VC3,$Vy1,{93:608}),o($Vz3,$Vz1,{99:325,95:609,101:$Vi2,102:$VR,103:$VS,104:$VT}),o($VD3,$VB1,{86:610}),o($VD3,$VB1,{86:611}),o($VD3,$VB1,{86:612}),o($VA3,$VC1,{105:329,107:330,91:613,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),{119:[1,614],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VC3,$VG1),o($VC3,$VH1),o($VC3,$VI1),o($VC3,$VJ1),o($VD3,$VK1),o($VL1,$VM1,{167:615}),o($VE3,$VO1),{100:[1,616]},o($VC3,$VT1),o($VD3,$Vn),o($VD3,$Vo),{100:[1,618],106:617,108:[1,619],109:[1,620],110:621,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,622]},o($VD3,$Vp),o($VD3,$Vq),{42:623,45:586,48:338,49:339,50:340,51:$Vm2,52:341,53:$Vn2,70:$Vc3},o($Vx3,$VE1),o($Vx3,$VF1),{19:[1,627],21:[1,631],22:625,33:624,205:626,219:628,220:[1,630],221:[1,629]},{70:$Vf3},{50:632,51:$Vm2,70:$Vg3},o($VF3,$VF,{29:633,52:634,53:$Vn2}),o($VF3,$Vh3),o($Vx3,$Vi3),o($Vr,$Vs,{28:635,54:636,40:637,43:$Vt}),o($Vr,$Vs,{54:638,40:639,43:$Vt}),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:640,198:[1,641]}),{19:$VK3,21:$VL3,22:643,129:642,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:649,198:[1,650]}),{19:$VK3,21:$VL3,22:643,129:651,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,652]},o($VA1,$VT1),{100:[1,654],106:653,108:[1,655],109:[1,656],110:657,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,658]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:659,198:[1,660]}),{19:$VK3,21:$VL3,22:643,129:661,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),o($VL1,[2,188]),o($VL1,[2,189]),o($VL1,[2,190]),o($VL1,[2,191]),{173:662,174:663,175:666,176:664,177:667,178:665,179:668,184:[1,669]},o($VL1,[2,206],{180:670,182:671,183:[1,672]}),o($VL1,[2,215],{187:673,189:674,183:[1,675]}),o($VL1,[2,223],{191:676,192:677,183:$VV3}),{183:$VV3,192:679},o($VW3,$Vn),o($VW3,$Vo),o($VW3,$VX3),o($VW3,$VY3),o($VW3,$VZ3),o($VW3,$Vp),o($VW3,$Vq),o($VW3,$V_3),o($VW3,$V$3,{207:680,208:681,111:[1,682]}),o($VW3,$V04),o($VW3,$V14),o($VW3,$V24),o($VW3,$V34),o($VW3,$V44),o($VW3,$V54),o($VW3,$V64),o($VW3,$V74),o($VW3,$V84),o($V94,$V63),o($V94,$V73),o($V94,$V83),o($V94,$V93),{121:[1,683]},{121:[2,142]},{121:$Va4},{121:$Vb4,133:684,134:685,135:$Vc4},{121:$Vd4},o($Ve4,$Vf4),o($Ve4,$Vg4),o($Ve4,$Vh4,{139:687,142:688,143:691,140:$Vi4,141:$Vj4}),o($Vk4,$Vl4,{145:692,150:693,151:694,159:695,160:697,69:[1,696],165:$Vm4}),o($Vn4,$Vo4),o($VU2,[2,168]),{19:[1,702],21:[1,706],22:700,149:699,205:701,219:703,220:[1,705],221:[1,704]},{19:[1,710],21:[1,714],22:708,149:707,205:709,219:711,220:[1,713],221:[1,712]},o($VI,[2,269]),o($VI,$Vv1),o($VI,$Vw1),o($Vp4,$Vs1,{82:715}),o($VI,$VE1),o($VI,$VF1),{19:[1,719],21:[1,723],22:717,33:716,205:718,219:720,220:[1,722],221:[1,721]},{119:[1,724],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VI,[2,143],{22:419,219:422,129:725,19:$VZ2,21:$V_2,204:$V$2,220:$V03}),o($Vq4,[2,144]),o($Vq4,$Vr4),o($Vq4,$Vs4),o($Vq4,$Vn),o($Vq4,$Vo),o($Vq4,$Vp),o($Vq4,$Vq),{19:[1,728],21:[1,731],22:727,87:726,219:729,220:[1,730]},o($Vt4,$Vp2,{83:732,84:733,197:734,195:[1,735]}),o($Vu,$VA2),o($Vu,$Vw),o($Vu,$Vx),o($Vu,$Vn),o($Vu,$Vo),o($Vu,$Vy),o($Vu,$Vp),o($Vu,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:736,121:$VW2,148:$VX2,194:$VY2}),o($V8,$Vu4),o($V8,$Vv4),o($VG,$Vw4),o($VG,$Vx4),{70:[1,737]},o($V8,$Vy4),o($VE,$Vz4),o($V8,$VA4,{50:144,51:$Vb1}),o($VG,$VB4),o($VE,$Vb2),o($Vr,$Vs,{28:738,54:739,40:740,43:$Vt}),o($VG,$Vc2),o($Vr,$Vs,{54:741,40:742,43:$Vt}),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:743}),o($VG,$VE1),o($VG,$VF1),{19:[1,747],21:[1,751],22:745,33:744,205:746,219:748,220:[1,750],221:[1,749]},{119:[1,752],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:753}),o($Vh2,$Vy1,{93:754}),o($Vt1,$Vz1,{99:467,95:755,101:$Vr3,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,756]},o($Vh2,$VT1),{70:[1,757]},o($Vo2,$Vp2,{83:758,84:759,197:760,195:[1,761]}),o($Vq2,$Vp2,{83:762,84:763,197:764,195:$VC4}),o($Vr1,$Vs2,{99:268,95:766,101:$V82,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:767,95:768,91:769,99:770,105:772,107:773,101:$VD4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:767,95:768,91:769,99:770,105:772,107:773,101:$VD4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:767,95:768,91:769,99:770,105:772,107:773,101:$VD4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:774,84:775,197:776,195:[1,777]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,778],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:779,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,780]},o($VN1,$Va3),o($V8,$Vc3,{48:504,49:505,50:506,52:507,42:781,45:782,51:$Vj3,53:$Vk3}),o($VG,$Vf1,{67:450,72:451,44:452,78:453,118:457,65:783,79:$Vl3,80:$Vm3,81:$Vn3,119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vd3),o($VG,$Vk1,{64:459,73:460,92:461,94:462,95:466,99:467,68:784,96:$Vo3,97:$Vp3,98:$Vq3,101:$Vr3,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:785,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Ve3),o($V8,$Vc3,{48:504,49:505,50:506,52:507,45:782,42:786,51:$Vj3,53:$Vk3}),o($V8,$Vf3),o($V8,$Vg3,{50:787,51:$Vj3}),o($VE,$VF,{29:788,52:789,53:$Vk3}),o($VE,$Vh3),o($VG,$Vi3),o($VE,$Vc1,{52:790,53:[1,791]}),o($VG,$Ve1),o($VG,$Vf1,{65:792,67:793,72:794,44:795,78:796,118:800,79:[1,797],80:[1,798],81:[1,799],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:801,64:802,73:803,92:804,94:805,95:809,99:810,96:[1,806],97:[1,807],98:[1,808],101:$VE4,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:812,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:813}),o($Vt1,$Vs1,{82:814}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:815}),o($Vr1,$Vz1,{99:537,95:816,101:$Vt3,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:817}),o($VA1,$VB1,{86:818}),o($VA1,$VB1,{86:819}),o($Vt1,$VC1,{105:541,107:542,91:820,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:821}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,825],21:[1,829],22:823,33:822,205:824,219:826,220:[1,828],221:[1,827]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:830}),o($VN1,$VO1),{119:[1,831],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,832]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,834],106:833,108:[1,835],109:[1,836],110:837,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,838]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$Ve1),o($VG,$Vf1,{65:839,67:840,72:841,44:842,78:843,118:847,79:[1,844],80:[1,845],81:[1,846],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:848,64:849,73:850,92:851,94:852,95:856,99:857,96:[1,853],97:[1,854],98:[1,855],101:$VF4,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:859,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:860}),o($Vt1,$Vs1,{82:861}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:862}),o($Vr1,$Vz1,{99:573,95:863,101:$Vv3,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:864}),o($VA1,$VB1,{86:865}),o($VA1,$VB1,{86:866}),o($Vt1,$VC1,{105:577,107:578,91:867,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:868}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,872],21:[1,876],22:870,33:869,205:871,219:873,220:[1,875],221:[1,874]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:877}),o($VN1,$VO1),{119:[1,878],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,879]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,881],106:880,108:[1,882],109:[1,883],110:884,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,885]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$VT3),{121:[1,886]},o($VG,$VH3),o($Vh2,$VP3),{70:$Vu4},{70:$Vv4},o($Vx3,$Vw4),o($Vx3,$Ve2),o($Vx3,$Vv1),o($Vx3,$Vw1),o($VA3,$Vs1,{82:887}),{119:[1,888],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vx3,$Vx4),o($Vx3,$Vg2),o($VA3,$Vs1,{82:889}),o($VG4,$Vy1,{93:890}),o($VA3,$Vz1,{99:602,95:891,101:$Vy3,102:$VR,103:$VS,104:$VT}),o($VG4,$VG1),o($VG4,$VH1),o($VG4,$VI1),o($VG4,$VJ1),{100:[1,892]},o($VG4,$VT1),{70:[1,893]},o($VH4,$Vp2,{83:894,84:895,197:896,195:[1,897]}),o($VI4,$Vp2,{83:898,84:899,197:900,195:$VJ4}),o($VK4,$Vp2,{83:902,84:903,197:904,195:[1,905]}),o($Vz3,$Vs2,{99:325,95:906,101:$Vi2,102:$VR,103:$VS,104:$VT}),o($VC3,$Vt2),o($VA3,$Vu2,{90:907,95:908,91:909,99:910,105:912,107:913,101:$VL4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vw2,{90:907,95:908,91:909,99:910,105:912,107:913,101:$VL4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vx2,{90:907,95:908,91:909,99:910,105:912,107:913,101:$VL4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE3,$Vy2),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:914,121:$VW2,148:$VX2,194:$VY2}),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,915],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VC3,$V13),o($VE3,$V23),o($VE3,$V33),o($VE3,$V43),o($VE3,$V53),{111:[1,916]},o($VE3,$Va3),{70:$Vy4},o($Vx3,$VA2),o($Vx3,$Vw),o($Vx3,$Vx),o($Vx3,$Vn),o($Vx3,$Vo),o($Vx3,$Vy),o($Vx3,$Vp),o($Vx3,$Vq),o($VF3,$Vz4),{50:917,51:$Vm2,70:$VA4},o($Vx3,$VB4),o($VF3,$Vs3),o($Vx3,$VH,{58:918}),o($VI,$VJ,{62:919,64:920,66:921,67:922,73:925,75:926,72:927,44:928,92:929,94:930,87:932,88:933,89:934,78:935,95:942,22:943,91:945,118:946,99:947,219:950,105:951,107:952,19:[1,949],21:[1,954],69:[1,923],71:[1,924],79:[1,936],80:[1,937],81:[1,938],85:[1,931],96:[1,939],97:[1,940],98:[1,941],101:$VM4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,944],220:[1,953]}),o($Vx3,$Vu3),o($VI,$VJ,{62:955,64:956,66:957,67:958,73:961,75:962,72:963,44:964,92:965,94:966,87:968,88:969,89:970,78:971,95:978,22:979,91:981,118:982,99:983,219:986,105:987,107:988,19:[1,985],21:[1,990],69:[1,959],71:[1,960],79:[1,972],80:[1,973],81:[1,974],85:[1,967],96:[1,975],97:[1,976],98:[1,977],101:$VN4,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,980],220:[1,989]}),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:991,219:45,220:$Vk},{19:$VP4,21:$VQ4,22:993,100:[1,1004],108:[1,1005],109:[1,1006],110:1003,186:994,196:992,201:997,202:998,203:999,206:1002,209:[1,1007],210:[1,1008],211:[1,1013],212:[1,1014],213:[1,1015],214:[1,1016],215:[1,1009],216:[1,1010],217:[1,1011],218:[1,1012],219:996,220:$VR4},o($VS4,$Vr4),o($VS4,$Vs4),o($VS4,$Vn),o($VS4,$Vo),o($VS4,$Vp),o($VS4,$Vq),o($Vq2,$VO4),{19:$Vi,21:$Vj,22:1017,219:45,220:$Vk},{19:$VT4,21:$VU4,22:1019,100:[1,1030],108:[1,1031],109:[1,1032],110:1029,186:1020,196:1018,201:1023,202:1024,203:1025,206:1028,209:[1,1033],210:[1,1034],211:[1,1039],212:[1,1040],213:[1,1041],214:[1,1042],215:[1,1035],216:[1,1036],217:[1,1037],218:[1,1038],219:1022,220:$VV4},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,1043]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:1044,219:45,220:$Vk},{19:$VW4,21:$VX4,22:1046,100:[1,1057],108:[1,1058],109:[1,1059],110:1056,186:1047,196:1045,201:1050,202:1051,203:1052,206:1055,209:[1,1060],210:[1,1061],211:[1,1066],212:[1,1067],213:[1,1068],214:[1,1069],215:[1,1062],216:[1,1063],217:[1,1064],218:[1,1065],219:1049,220:$VY4},o($VL1,[2,192]),o($VL1,[2,199],{175:1070,184:$VZ4}),o($VL1,[2,200],{177:1072,184:$V_4}),o($VL1,[2,201],{179:1074,184:$V$4}),o($V05,[2,193]),o($V05,[2,195]),o($V05,[2,197]),{19:$V15,21:$V25,22:1076,100:$V35,108:$V45,109:$V55,110:1087,186:1077,190:$V65,201:1081,202:1082,203:1083,206:1086,209:$V75,210:$V85,211:$V95,212:$Va5,213:$Vb5,214:$Vc5,215:$Vd5,216:$Ve5,217:$Vf5,218:$Vg5,219:1080,220:$Vh5},o($VL1,[2,202]),o($VL1,[2,207]),o($V05,[2,203],{181:1101}),o($VL1,[2,211]),o($VL1,[2,216]),o($V05,[2,212],{188:1102}),o($VL1,[2,218]),o($VL1,[2,224]),o($V05,[2,220],{193:1103}),o($VL1,[2,219]),o($VW3,$Vi5),o($VW3,$Vj5),{19:$VB2,21:$VC2,22:1105,87:1104,219:375,220:$VT2},o($VD1,$Vk5),{121:$Vl5,134:1106,135:$Vc4},o($Ve4,$Vm5),o($VU2,$VV2,{136:401,137:402,138:403,144:404,146:405,147:406,131:1107,148:$VX2,194:$VY2}),o($Ve4,$Vn5),o($Ve4,$Vh4,{139:1108,143:1109,140:$Vi4,141:$Vj4}),o($VU2,$VV2,{144:404,146:405,147:406,138:1110,121:$Vo5,135:$Vo5,148:$VX2,194:$VY2}),o($VU2,$VV2,{144:404,146:405,147:406,138:1111,121:$Vp5,135:$Vp5,148:$VX2,194:$VY2}),o($Vn4,$Vq5),o($Vn4,$Vr5),o($Vn4,$Vs5),o($Vn4,$Vt5),{19:$Vu5,21:$Vv5,22:1113,129:1112,204:$Vw5,219:1116,220:$Vx5},o($VU2,$VV2,{147:406,126:1119,130:1120,131:1121,132:1122,136:1123,137:1124,138:1125,144:1126,146:1127,148:$VX2,194:$Vy5}),o($Vk4,[2,180]),o($Vk4,[2,185]),o($Vn4,$Vz5),o($Vn4,$VA5),o($Vn4,$VB5),o($Vn4,$Vn),o($Vn4,$Vo),o($Vn4,$Vy),o($Vn4,$Vp),o($Vn4,$Vq),o($VU2,[2,166]),o($VU2,$VA5),o($VU2,$VB5),o($VU2,$Vn),o($VU2,$Vo),o($VU2,$Vy),o($VU2,$Vp),o($VU2,$Vq),o($VC5,$Vp2,{83:1129,84:1130,197:1131,195:[1,1132]}),o($VI,$VA2),o($VI,$Vw),o($VI,$Vx),o($VI,$Vn),o($VI,$Vo),o($VI,$Vy),o($VI,$Vp),o($VI,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1133,121:$VW2,148:$VX2,194:$VY2}),o($Vq4,[2,145]),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($Vu,$VT3),o($Vb3,$VI3),o($Vu,$VJ3,{31:1134,198:[1,1135]}),{19:$VK3,21:$VL3,22:643,129:1136,204:$VM3,219:646,220:$VN3},{121:[1,1137]},o($VG,$VE5),o($VE,$Vs3),o($VG,$VH,{58:1138}),o($VI,$VJ,{62:1139,64:1140,66:1141,67:1142,73:1145,75:1146,72:1147,44:1148,92:1149,94:1150,87:1152,88:1153,89:1154,78:1155,95:1162,22:1163,91:1165,118:1166,99:1167,219:1170,105:1171,107:1172,19:[1,1169],21:[1,1174],69:[1,1143],71:[1,1144],79:[1,1156],80:[1,1157],81:[1,1158],85:[1,1151],96:[1,1159],97:[1,1160],98:[1,1161],101:$VF5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,1164],220:[1,1173]}),o($VG,$Vu3),o($VI,$VJ,{62:1175,64:1176,66:1177,67:1178,73:1181,75:1182,72:1183,44:1184,92:1185,94:1186,87:1188,88:1189,89:1190,78:1191,95:1198,22:1199,91:1201,118:1202,99:1203,219:1206,105:1207,107:1208,19:[1,1205],21:[1,1210],69:[1,1179],71:[1,1180],79:[1,1192],80:[1,1193],81:[1,1194],85:[1,1187],96:[1,1195],97:[1,1196],98:[1,1197],101:$VG5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,1200],220:[1,1209]}),o($Vq2,$Vp2,{84:763,197:764,83:1211,195:$VC4}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1212,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:763,197:764,83:1213,195:$VC4}),o($Vt1,$Vs2,{99:467,95:1214,101:$Vr3,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:1215,198:[1,1216]}),{19:$VK3,21:$VL3,22:643,129:1217,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:1218,198:[1,1219]}),{19:$VK3,21:$VL3,22:643,129:1220,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,1221]},o($VA1,$VT1),{100:[1,1223],106:1222,108:[1,1224],109:[1,1225],110:1226,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1227]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:1228,198:[1,1229]}),{19:$VK3,21:$VL3,22:643,129:1230,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,1231]},{19:[1,1234],21:[1,1237],22:1233,87:1232,219:1235,220:[1,1236]},o($V8,$Vu4),o($V8,$Vv4),o($VG,$Vw4),o($VG,$Vx4),{70:[1,1238]},o($V8,$Vy4),o($VE,$Vz4),o($V8,$VA4,{50:445,51:$Vj3}),o($VG,$VB4),o($VG,$Vc2),o($Vr,$Vs,{54:1239,40:1240,43:$Vt}),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:1241}),o($VG,$VE1),o($VG,$VF1),{19:[1,1245],21:[1,1249],22:1243,33:1242,205:1244,219:1246,220:[1,1248],221:[1,1247]},{119:[1,1250],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:1251}),o($Vh2,$Vy1,{93:1252}),o($Vt1,$Vz1,{99:810,95:1253,101:$VE4,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,1254]},o($Vh2,$VT1),{70:[1,1255]},o($Vo2,$Vp2,{83:1256,84:1257,197:1258,195:[1,1259]}),o($Vq2,$Vp2,{83:1260,84:1261,197:1262,195:$VH5}),o($Vr1,$Vs2,{99:537,95:1264,101:$Vt3,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:1265,95:1266,91:1267,99:1268,105:1270,107:1271,101:$VI5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:1265,95:1266,91:1267,99:1268,105:1270,107:1271,101:$VI5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:1265,95:1266,91:1267,99:1268,105:1270,107:1271,101:$VI5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:1272,84:1273,197:1274,195:[1,1275]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,1276],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1277,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,1278]},o($VN1,$Va3),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:1279}),o($VG,$VE1),o($VG,$VF1),{19:[1,1283],21:[1,1287],22:1281,33:1280,205:1282,219:1284,220:[1,1286],221:[1,1285]},{119:[1,1288],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:1289}),o($Vh2,$Vy1,{93:1290}),o($Vt1,$Vz1,{99:857,95:1291,101:$VF4,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,1292]},o($Vh2,$VT1),{70:[1,1293]},o($Vo2,$Vp2,{83:1294,84:1295,197:1296,195:[1,1297]}),o($Vq2,$Vp2,{83:1298,84:1299,197:1300,195:$VJ5}),o($Vr1,$Vs2,{99:573,95:1302,101:$Vv3,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:1303,95:1304,91:1305,99:1306,105:1308,107:1309,101:$VK5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:1303,95:1304,91:1305,99:1306,105:1308,107:1309,101:$VK5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:1303,95:1304,91:1305,99:1306,105:1308,107:1309,101:$VK5,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:1310,84:1311,197:1312,195:[1,1313]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,1314],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1315,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,1316]},o($VN1,$Va3),o($Vt1,$Vk5),o($VI4,$Vp2,{84:899,197:900,83:1317,195:$VJ4}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1318,121:$VW2,148:$VX2,194:$VY2}),o($VI4,$Vp2,{84:899,197:900,83:1319,195:$VJ4}),o($VA3,$Vs2,{99:602,95:1320,101:$Vy3,102:$VR,103:$VS,104:$VT}),o($VG4,$Vt2),o($VG4,$V13),o($Vx3,$VE5),o($VL5,$VH3),o($Vz3,$VI3),o($VL5,$VJ3,{31:1321,198:[1,1322]}),{19:$VK3,21:$VL3,22:643,129:1323,204:$VM3,219:646,220:$VN3},o($Vx3,$VO3),o($VA3,$VI3),o($Vx3,$VJ3,{31:1324,198:[1,1325]}),{19:$VK3,21:$VL3,22:643,129:1326,204:$VM3,219:646,220:$VN3},o($VM5,$VT3),o($VB3,$VI3),o($VM5,$VJ3,{31:1327,198:[1,1328]}),{19:$VK3,21:$VL3,22:643,129:1329,204:$VM3,219:646,220:$VN3},o($VC3,$VP3),o($VD3,$VQ3),o($VD3,$VR3),o($VD3,$VS3),{100:[1,1330]},o($VD3,$VT1),{100:[1,1332],106:1331,108:[1,1333],109:[1,1334],110:1335,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1336]},{121:[1,1337]},o($VD3,$VU3),{19:[1,1340],21:[1,1343],22:1339,87:1338,219:1341,220:[1,1342]},o($VF3,$Vb2),o($VF3,$Vc1,{52:1344,53:[1,1345]}),o($Vx3,$Ve1),o($VI,$VJ,{65:1346,67:1347,72:1348,44:1349,78:1350,118:1354,51:$Vf1,53:$Vf1,70:$Vf1,79:[1,1351],80:[1,1352],81:[1,1353]}),o($Vx3,$Vj1),o($Vx3,$Vk1,{68:1355,64:1356,73:1357,92:1358,94:1359,95:1363,99:1364,96:[1,1360],97:[1,1361],98:[1,1362],101:$VN5,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:1366,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vx3,$Vq1),o($Vz3,$Vs1,{82:1367}),o($VA3,$Vs1,{82:1368}),o($VM5,$Vv1),o($VM5,$Vw1),o($VC3,$Vy1,{93:1369}),o($Vz3,$Vz1,{99:947,95:1370,101:$VM4,102:$VR,103:$VS,104:$VT}),o($VD3,$VB1,{86:1371}),o($VD3,$VB1,{86:1372}),o($VD3,$VB1,{86:1373}),o($VA3,$VC1,{105:951,107:952,91:1374,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB3,$Vs1,{82:1375}),o($VM5,$VE1),o($VM5,$VF1),{19:[1,1379],21:[1,1383],22:1377,33:1376,205:1378,219:1380,220:[1,1382],221:[1,1381]},o($VC3,$VG1),o($VC3,$VH1),o($VC3,$VI1),o($VC3,$VJ1),o($VD3,$VK1),o($VL1,$VM1,{167:1384}),o($VE3,$VO1),{119:[1,1385],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,1386]},o($VC3,$VT1),o($VD3,$Vn),o($VD3,$Vo),{100:[1,1388],106:1387,108:[1,1389],109:[1,1390],110:1391,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1392]},o($VD3,$Vp),o($VD3,$Vq),o($Vx3,$Ve1),o($VI,$VJ,{65:1393,67:1394,72:1395,44:1396,78:1397,118:1401,51:$Vf1,53:$Vf1,70:$Vf1,79:[1,1398],80:[1,1399],81:[1,1400]}),o($Vx3,$Vj1),o($Vx3,$Vk1,{68:1402,64:1403,73:1404,92:1405,94:1406,95:1410,99:1411,96:[1,1407],97:[1,1408],98:[1,1409],101:$VO5,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:1413,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vx3,$Vq1),o($Vz3,$Vs1,{82:1414}),o($VA3,$Vs1,{82:1415}),o($VM5,$Vv1),o($VM5,$Vw1),o($VC3,$Vy1,{93:1416}),o($Vz3,$Vz1,{99:983,95:1417,101:$VN4,102:$VR,103:$VS,104:$VT}),o($VD3,$VB1,{86:1418}),o($VD3,$VB1,{86:1419}),o($VD3,$VB1,{86:1420}),o($VA3,$VC1,{105:987,107:988,91:1421,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB3,$Vs1,{82:1422}),o($VM5,$VE1),o($VM5,$VF1),{19:[1,1426],21:[1,1430],22:1424,33:1423,205:1425,219:1427,220:[1,1429],221:[1,1428]},o($VC3,$VG1),o($VC3,$VH1),o($VC3,$VI1),o($VC3,$VJ1),o($VD3,$VK1),o($VL1,$VM1,{167:1431}),o($VE3,$VO1),{119:[1,1432],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,1433]},o($VC3,$VT1),o($VD3,$Vn),o($VD3,$Vo),{100:[1,1435],106:1434,108:[1,1436],109:[1,1437],110:1438,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1439]},o($VD3,$Vp),o($VD3,$Vq),{198:[1,1442],199:1440,200:[1,1441]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:1443,208:1444,111:[1,1445]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,1448],199:1446,200:[1,1447]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:1449,208:1450,111:[1,1451]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,1454],21:[1,1457],22:1453,87:1452,219:1455,220:[1,1456]},{198:[1,1460],199:1458,200:[1,1459]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:1461,208:1462,111:[1,1463]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($V05,[2,194]),{19:$V15,21:$V25,22:1076,219:1080,220:$Vh5},o($V05,[2,196]),{100:$V35,108:$V45,109:$V55,110:1087,186:1077,201:1081,202:1082,203:1083,206:1086,209:$V75,210:$V85,211:$V95,212:$Va5,213:$Vb5,214:$Vc5,215:$Vd5,216:$Ve5,217:$Vf5,218:$Vg5},o($V05,[2,198]),{190:$V65},o($V05,$VV5,{185:1464,183:$VW5}),o($V05,$VV5,{185:1466,183:$VW5}),o($V05,$VV5,{185:1467,183:$VW5}),o($VX5,$Vn),o($VX5,$Vo),o($VX5,$VX3),o($VX5,$VY3),o($VX5,$VZ3),o($VX5,$Vp),o($VX5,$Vq),o($VX5,$V_3),o($VX5,$V$3,{207:1468,208:1469,111:[1,1470]}),o($VX5,$V04),o($VX5,$V14),o($VX5,$V24),o($VX5,$V34),o($VX5,$V44),o($VX5,$V54),o($VX5,$V64),o($VX5,$V74),o($VX5,$V84),o($VY5,$V63),o($VY5,$V73),o($VY5,$V83),o($VY5,$V93),o($VL1,[2,205],{175:1471,184:$VZ4}),o($VL1,[2,214],{177:1472,184:$V_4}),o($VL1,[2,222],{179:1473,184:$V$4}),o($VW3,$VZ5),o($VW3,$VK1),o($Ve4,$V_5),o($Ve4,$V$5),o($Ve4,$V06),o($Vn4,$V16),o($Vn4,$V26),o($Vn4,$V36),o($Vr,$Vs,{46:1474,47:1475,55:1476,59:1477,40:1478,43:$Vt}),o($V46,$Vr4),o($V46,$Vs4),o($V46,$Vn),o($V46,$Vo),o($V46,$Vp),o($V46,$Vq),{70:[1,1479]},{70:$Va4},{70:$Vb4,133:1480,134:1481,135:$V56},{70:$Vd4},o($V66,$Vf4),o($V66,$Vg4),o($V66,$Vh4,{139:1483,142:1484,143:1487,140:$V76,141:$V86}),o($Vk4,$Vl4,{160:697,145:1488,150:1489,151:1490,159:1491,69:[1,1492],165:$Vm4}),o($V96,$Vo4),{19:[1,1496],21:[1,1500],22:1494,149:1493,205:1495,219:1497,220:[1,1499],221:[1,1498]},o($VI,$VT3),o($Vp4,$VI3),o($VI,$VJ3,{31:1501,198:[1,1502]}),{19:$VK3,21:$VL3,22:643,129:1503,204:$VM3,219:646,220:$VN3},{121:[1,1504]},o($Vt4,$VO4),{19:$Vi,21:$Vj,22:1505,219:45,220:$Vk},{19:$Va6,21:$Vb6,22:1507,100:[1,1518],108:[1,1519],109:[1,1520],110:1517,186:1508,196:1506,201:1511,202:1512,203:1513,206:1516,209:[1,1521],210:[1,1522],211:[1,1527],212:[1,1528],213:[1,1529],214:[1,1530],215:[1,1523],216:[1,1524],217:[1,1525],218:[1,1526],219:1510,220:$Vc6},o($Vb3,$Vk5),o($VE,$Vc1,{52:1531,53:[1,1532]}),o($VG,$Ve1),o($VG,$Vf1,{65:1533,67:1534,72:1535,44:1536,78:1537,118:1541,79:[1,1538],80:[1,1539],81:[1,1540],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:1542,64:1543,73:1544,92:1545,94:1546,95:1550,99:1551,96:[1,1547],97:[1,1548],98:[1,1549],101:$Vd6,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:1553,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:1554}),o($Vt1,$Vs1,{82:1555}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:1556}),o($Vr1,$Vz1,{99:1167,95:1557,101:$VF5,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:1558}),o($VA1,$VB1,{86:1559}),o($VA1,$VB1,{86:1560}),o($Vt1,$VC1,{105:1171,107:1172,91:1561,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:1562}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,1566],21:[1,1570],22:1564,33:1563,205:1565,219:1567,220:[1,1569],221:[1,1568]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:1571}),o($VN1,$VO1),{119:[1,1572],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,1573]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,1575],106:1574,108:[1,1576],109:[1,1577],110:1578,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1579]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$Ve1),o($VG,$Vf1,{65:1580,67:1581,72:1582,44:1583,78:1584,118:1588,79:[1,1585],80:[1,1586],81:[1,1587],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:1589,64:1590,73:1591,92:1592,94:1593,95:1597,99:1598,96:[1,1594],97:[1,1595],98:[1,1596],101:$Ve6,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:1600,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:1601}),o($Vt1,$Vs1,{82:1602}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:1603}),o($Vr1,$Vz1,{99:1203,95:1604,101:$VG5,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:1605}),o($VA1,$VB1,{86:1606}),o($VA1,$VB1,{86:1607}),o($Vt1,$VC1,{105:1207,107:1208,91:1608,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:1609}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,1613],21:[1,1617],22:1611,33:1610,205:1612,219:1614,220:[1,1616],221:[1,1615]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:1618}),o($VN1,$VO1),{119:[1,1619],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,1620]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,1622],106:1621,108:[1,1623],109:[1,1624],110:1625,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1626]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$VT3),{121:[1,1627]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:1628,219:45,220:$Vk},{19:$Vf6,21:$Vg6,22:1630,100:[1,1641],108:[1,1642],109:[1,1643],110:1640,186:1631,196:1629,201:1634,202:1635,203:1636,206:1639,209:[1,1644],210:[1,1645],211:[1,1650],212:[1,1651],213:[1,1652],214:[1,1653],215:[1,1646],216:[1,1647],217:[1,1648],218:[1,1649],219:1633,220:$Vh6},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:1654,219:45,220:$Vk},{19:$Vi6,21:$Vj6,22:1656,100:[1,1667],108:[1,1668],109:[1,1669],110:1666,186:1657,196:1655,201:1660,202:1661,203:1662,206:1665,209:[1,1670],210:[1,1671],211:[1,1676],212:[1,1677],213:[1,1678],214:[1,1679],215:[1,1672],216:[1,1673],217:[1,1674],218:[1,1675],219:1659,220:$Vk6},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,1680]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:1681,219:45,220:$Vk},{19:$Vl6,21:$Vm6,22:1683,100:[1,1694],108:[1,1695],109:[1,1696],110:1693,186:1684,196:1682,201:1687,202:1688,203:1689,206:1692,209:[1,1697],210:[1,1698],211:[1,1703],212:[1,1704],213:[1,1705],214:[1,1706],215:[1,1699],216:[1,1700],217:[1,1701],218:[1,1702],219:1686,220:$Vn6},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($VG,$VE5),o($VG,$Vu3),o($VI,$VJ,{62:1707,64:1708,66:1709,67:1710,73:1713,75:1714,72:1715,44:1716,92:1717,94:1718,87:1720,88:1721,89:1722,78:1723,95:1730,22:1731,91:1733,118:1734,99:1735,219:1738,105:1739,107:1740,19:[1,1737],21:[1,1742],69:[1,1711],71:[1,1712],79:[1,1724],80:[1,1725],81:[1,1726],85:[1,1719],96:[1,1727],97:[1,1728],98:[1,1729],101:$Vo6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,1732],220:[1,1741]}),o($Vq2,$Vp2,{84:1261,197:1262,83:1743,195:$VH5}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1744,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:1261,197:1262,83:1745,195:$VH5}),o($Vt1,$Vs2,{99:810,95:1746,101:$VE4,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:1747,198:[1,1748]}),{19:$VK3,21:$VL3,22:643,129:1749,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:1750,198:[1,1751]}),{19:$VK3,21:$VL3,22:643,129:1752,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,1753]},o($VA1,$VT1),{100:[1,1755],106:1754,108:[1,1756],109:[1,1757],110:1758,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1759]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:1760,198:[1,1761]}),{19:$VK3,21:$VL3,22:643,129:1762,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,1763]},{19:[1,1766],21:[1,1769],22:1765,87:1764,219:1767,220:[1,1768]},o($Vq2,$Vp2,{84:1299,197:1300,83:1770,195:$VJ5}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1771,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:1299,197:1300,83:1772,195:$VJ5}),o($Vt1,$Vs2,{99:857,95:1773,101:$VF4,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:1774,198:[1,1775]}),{19:$VK3,21:$VL3,22:643,129:1776,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:1777,198:[1,1778]}),{19:$VK3,21:$VL3,22:643,129:1779,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,1780]},o($VA1,$VT1),{100:[1,1782],106:1781,108:[1,1783],109:[1,1784],110:1785,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,1786]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:1787,198:[1,1788]}),{19:$VK3,21:$VL3,22:643,129:1789,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,1790]},{19:[1,1793],21:[1,1796],22:1792,87:1791,219:1794,220:[1,1795]},o($Vx3,$VT3),{121:[1,1797]},o($Vx3,$VH3),o($VG4,$VP3),o($VH4,$VO4),{19:$Vi,21:$Vj,22:1798,219:45,220:$Vk},{19:$Vp6,21:$Vq6,22:1800,100:[1,1811],108:[1,1812],109:[1,1813],110:1810,186:1801,196:1799,201:1804,202:1805,203:1806,206:1809,209:[1,1814],210:[1,1815],211:[1,1820],212:[1,1821],213:[1,1822],214:[1,1823],215:[1,1816],216:[1,1817],217:[1,1818],218:[1,1819],219:1803,220:$Vr6},o($VI4,$VO4),{19:$Vi,21:$Vj,22:1824,219:45,220:$Vk},{19:$Vs6,21:$Vt6,22:1826,100:[1,1837],108:[1,1838],109:[1,1839],110:1836,186:1827,196:1825,201:1830,202:1831,203:1832,206:1835,209:[1,1840],210:[1,1841],211:[1,1846],212:[1,1847],213:[1,1848],214:[1,1849],215:[1,1842],216:[1,1843],217:[1,1844],218:[1,1845],219:1829,220:$Vu6},o($VK4,$VO4),{19:$Vi,21:$Vj,22:1850,219:45,220:$Vk},{19:$Vv6,21:$Vw6,22:1852,100:[1,1863],108:[1,1864],109:[1,1865],110:1862,186:1853,196:1851,201:1856,202:1857,203:1858,206:1861,209:[1,1866],210:[1,1867],211:[1,1872],212:[1,1873],213:[1,1874],214:[1,1875],215:[1,1868],216:[1,1869],217:[1,1870],218:[1,1871],219:1855,220:$Vx6},o($VD3,$V13),o($VD3,$V23),o($VD3,$V33),o($VD3,$V43),o($VD3,$V53),{111:[1,1876]},o($VD3,$Va3),o($VB3,$Vk5),o($VE3,$VD5),o($VE3,$VK1),o($VE3,$Vn),o($VE3,$Vo),o($VE3,$Vp),o($VE3,$Vq),o($Vx3,$Vc2),o($Vr,$Vs,{54:1877,40:1878,43:$Vt}),o($Vx3,$Vd2),o($Vx3,$Ve2),o($Vx3,$Vv1),o($Vx3,$Vw1),o($VA3,$Vs1,{82:1879}),o($Vx3,$VE1),o($Vx3,$VF1),{19:[1,1883],21:[1,1887],22:1881,33:1880,205:1882,219:1884,220:[1,1886],221:[1,1885]},{119:[1,1888],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vx3,$Vf2),o($Vx3,$Vg2),o($VA3,$Vs1,{82:1889}),o($VG4,$Vy1,{93:1890}),o($VA3,$Vz1,{99:1364,95:1891,101:$VN5,102:$VR,103:$VS,104:$VT}),o($VG4,$VG1),o($VG4,$VH1),o($VG4,$VI1),o($VG4,$VJ1),{100:[1,1892]},o($VG4,$VT1),{70:[1,1893]},o($VH4,$Vp2,{83:1894,84:1895,197:1896,195:[1,1897]}),o($VI4,$Vp2,{83:1898,84:1899,197:1900,195:$Vy6}),o($Vz3,$Vs2,{99:947,95:1902,101:$VM4,102:$VR,103:$VS,104:$VT}),o($VC3,$Vt2),o($VA3,$Vu2,{90:1903,95:1904,91:1905,99:1906,105:1908,107:1909,101:$Vz6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vw2,{90:1903,95:1904,91:1905,99:1906,105:1908,107:1909,101:$Vz6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vx2,{90:1903,95:1904,91:1905,99:1906,105:1908,107:1909,101:$Vz6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE3,$Vy2),o($VK4,$Vp2,{83:1910,84:1911,197:1912,195:[1,1913]}),o($VM5,$VA2),o($VM5,$Vw),o($VM5,$Vx),o($VM5,$Vn),o($VM5,$Vo),o($VM5,$Vy),o($VM5,$Vp),o($VM5,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,1914],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1915,121:$VW2,148:$VX2,194:$VY2}),o($VC3,$V13),o($VE3,$V23),o($VE3,$V33),o($VE3,$V43),o($VE3,$V53),{111:[1,1916]},o($VE3,$Va3),o($Vx3,$Vd2),o($Vx3,$Ve2),o($Vx3,$Vv1),o($Vx3,$Vw1),o($VA3,$Vs1,{82:1917}),o($Vx3,$VE1),o($Vx3,$VF1),{19:[1,1921],21:[1,1925],22:1919,33:1918,205:1920,219:1922,220:[1,1924],221:[1,1923]},{119:[1,1926],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vx3,$Vf2),o($Vx3,$Vg2),o($VA3,$Vs1,{82:1927}),o($VG4,$Vy1,{93:1928}),o($VA3,$Vz1,{99:1411,95:1929,101:$VO5,102:$VR,103:$VS,104:$VT}),o($VG4,$VG1),o($VG4,$VH1),o($VG4,$VI1),o($VG4,$VJ1),{100:[1,1930]},o($VG4,$VT1),{70:[1,1931]},o($VH4,$Vp2,{83:1932,84:1933,197:1934,195:[1,1935]}),o($VI4,$Vp2,{83:1936,84:1937,197:1938,195:$VA6}),o($Vz3,$Vs2,{99:983,95:1940,101:$VN4,102:$VR,103:$VS,104:$VT}),o($VC3,$Vt2),o($VA3,$Vu2,{90:1941,95:1942,91:1943,99:1944,105:1946,107:1947,101:$VB6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vw2,{90:1941,95:1942,91:1943,99:1944,105:1946,107:1947,101:$VB6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vx2,{90:1941,95:1942,91:1943,99:1944,105:1946,107:1947,101:$VB6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE3,$Vy2),o($VK4,$Vp2,{83:1948,84:1949,197:1950,195:[1,1951]}),o($VM5,$VA2),o($VM5,$Vw),o($VM5,$Vx),o($VM5,$Vn),o($VM5,$Vo),o($VM5,$Vy),o($VM5,$Vp),o($VM5,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,1952],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:1953,121:$VW2,148:$VX2,194:$VY2}),o($VC3,$V13),o($VE3,$V23),o($VE3,$V33),o($VE3,$V43),o($VE3,$V53),{111:[1,1954]},o($VE3,$Va3),o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$VP4,21:$VQ4,22:1956,87:1955,219:996,220:$VR4},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$VT4,21:$VU4,22:1958,87:1957,219:1022,220:$VV4},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$VW4,21:$VX4,22:1960,87:1959,219:1049,220:$VY4},o($V05,[2,208]),o($V05,[2,210]),o($V05,[2,217]),o($V05,[2,225]),o($VX5,$Vi5),o($VX5,$Vj5),{19:$V15,21:$V25,22:1962,87:1961,219:1080,220:$Vh5},o($V05,[2,204]),o($V05,[2,213]),o($V05,[2,221]),o($VC6,$VD6,{152:1963,154:1964,161:$VE6,162:$VF6,163:$VG6,164:$VH6}),o($VI6,$VJ6),o($VK6,$VL6,{56:1969}),o($VM6,$VN6,{60:1970}),o($VI,$VJ,{63:1971,73:1972,75:1973,76:1974,92:1977,94:1978,87:1980,88:1981,89:1982,78:1983,44:1984,95:1988,22:1989,91:1991,118:1992,99:1996,219:1999,105:2000,107:2001,19:[1,1998],21:[1,2003],69:[1,1975],71:[1,1976],79:[1,1993],80:[1,1994],81:[1,1995],85:[1,1979],96:[1,1985],97:[1,1986],98:[1,1987],101:$VO6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,1990],220:[1,2002]}),o($VC6,$VD6,{154:1964,152:2004,161:$VE6,162:$VF6,163:$VG6,164:$VH6}),{70:$Vl5,134:2005,135:$V56},o($V66,$Vm5),o($VU2,$VV2,{147:406,136:1123,137:1124,138:1125,144:1126,146:1127,131:2006,148:$VX2,194:$Vy5}),o($V66,$Vn5),o($V66,$Vh4,{139:2007,143:2008,140:$V76,141:$V86}),o($VU2,$VV2,{147:406,144:1126,146:1127,138:2009,70:$Vo5,135:$Vo5,148:$VX2,194:$Vy5}),o($VU2,$VV2,{147:406,144:1126,146:1127,138:2010,70:$Vp5,135:$Vp5,148:$VX2,194:$Vy5}),o($V96,$Vq5),o($V96,$Vr5),o($V96,$Vs5),o($V96,$Vt5),{19:$Vu5,21:$Vv5,22:1113,129:2011,204:$Vw5,219:1116,220:$Vx5},o($VU2,$VV2,{147:406,130:1120,131:1121,132:1122,136:1123,137:1124,138:1125,144:1126,146:1127,126:2012,148:$VX2,194:$Vy5}),o($V96,$Vz5),o($V96,$VA5),o($V96,$VB5),o($V96,$Vn),o($V96,$Vo),o($V96,$Vy),o($V96,$Vp),o($V96,$Vq),o($VC5,$VO4),{19:$Vi,21:$Vj,22:2013,219:45,220:$Vk},{19:$VP6,21:$VQ6,22:2015,100:[1,2026],108:[1,2027],109:[1,2028],110:2025,186:2016,196:2014,201:2019,202:2020,203:2021,206:2024,209:[1,2029],210:[1,2030],211:[1,2035],212:[1,2036],213:[1,2037],214:[1,2038],215:[1,2031],216:[1,2032],217:[1,2033],218:[1,2034],219:2018,220:$VR6},o($Vp4,$Vk5),{198:[1,2041],199:2039,200:[1,2040]},o($Vb3,$VP5),o($Vb3,$VQ5),o($Vb3,$VR5),o($Vb3,$Vn),o($Vb3,$Vo),o($Vb3,$VX3),o($Vb3,$VY3),o($Vb3,$VZ3),o($Vb3,$Vp),o($Vb3,$Vq),o($Vb3,$V_3),o($Vb3,$V$3,{207:2042,208:2043,111:[1,2044]}),o($Vb3,$V04),o($Vb3,$V14),o($Vb3,$V24),o($Vb3,$V34),o($Vb3,$V44),o($Vb3,$V54),o($Vb3,$V64),o($Vb3,$V74),o($Vb3,$V84),o($VS6,$V63),o($VS6,$V73),o($VS6,$V83),o($VS6,$V93),o($VG,$Vc2),o($Vr,$Vs,{54:2045,40:2046,43:$Vt}),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:2047}),o($VG,$VE1),o($VG,$VF1),{19:[1,2051],21:[1,2055],22:2049,33:2048,205:2050,219:2052,220:[1,2054],221:[1,2053]},{119:[1,2056],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:2057}),o($Vh2,$Vy1,{93:2058}),o($Vt1,$Vz1,{99:1551,95:2059,101:$Vd6,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,2060]},o($Vh2,$VT1),{70:[1,2061]},o($Vo2,$Vp2,{83:2062,84:2063,197:2064,195:[1,2065]}),o($Vq2,$Vp2,{83:2066,84:2067,197:2068,195:$VT6}),o($Vr1,$Vs2,{99:1167,95:2070,101:$VF5,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:2071,95:2072,91:2073,99:2074,105:2076,107:2077,101:$VU6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:2071,95:2072,91:2073,99:2074,105:2076,107:2077,101:$VU6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:2071,95:2072,91:2073,99:2074,105:2076,107:2077,101:$VU6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:2078,84:2079,197:2080,195:[1,2081]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,2082],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2083,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,2084]},o($VN1,$Va3),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:2085}),o($VG,$VE1),o($VG,$VF1),{19:[1,2089],21:[1,2093],22:2087,33:2086,205:2088,219:2090,220:[1,2092],221:[1,2091]},{119:[1,2094],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:2095}),o($Vh2,$Vy1,{93:2096}),o($Vt1,$Vz1,{99:1598,95:2097,101:$Ve6,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,2098]},o($Vh2,$VT1),{70:[1,2099]},o($Vo2,$Vp2,{83:2100,84:2101,197:2102,195:[1,2103]}),o($Vq2,$Vp2,{83:2104,84:2105,197:2106,195:$VV6}),o($Vr1,$Vs2,{99:1203,95:2108,101:$VG5,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:2109,95:2110,91:2111,99:2112,105:2114,107:2115,101:$VW6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:2109,95:2110,91:2111,99:2112,105:2114,107:2115,101:$VW6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:2109,95:2110,91:2111,99:2112,105:2114,107:2115,101:$VW6,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:2116,84:2117,197:2118,195:[1,2119]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,2120],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2121,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,2122]},o($VN1,$Va3),o($Vt1,$Vk5),{198:[1,2125],199:2123,200:[1,2124]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:2126,208:2127,111:[1,2128]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,2131],199:2129,200:[1,2130]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:2132,208:2133,111:[1,2134]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,2137],21:[1,2140],22:2136,87:2135,219:2138,220:[1,2139]},{198:[1,2143],199:2141,200:[1,2142]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:2144,208:2145,111:[1,2146]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($VG,$Ve1),o($VG,$Vf1,{65:2147,67:2148,72:2149,44:2150,78:2151,118:2155,79:[1,2152],80:[1,2153],81:[1,2154],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:2156,64:2157,73:2158,92:2159,94:2160,95:2164,99:2165,96:[1,2161],97:[1,2162],98:[1,2163],101:$VX6,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:2167,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:2168}),o($Vt1,$Vs1,{82:2169}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:2170}),o($Vr1,$Vz1,{99:1735,95:2171,101:$Vo6,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:2172}),o($VA1,$VB1,{86:2173}),o($VA1,$VB1,{86:2174}),o($Vt1,$VC1,{105:1739,107:1740,91:2175,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:2176}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,2180],21:[1,2184],22:2178,33:2177,205:2179,219:2181,220:[1,2183],221:[1,2182]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:2185}),o($VN1,$VO1),{119:[1,2186],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,2187]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,2189],106:2188,108:[1,2190],109:[1,2191],110:2192,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2193]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$VT3),{121:[1,2194]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:2195,219:45,220:$Vk},{19:$VY6,21:$VZ6,22:2197,100:[1,2208],108:[1,2209],109:[1,2210],110:2207,186:2198,196:2196,201:2201,202:2202,203:2203,206:2206,209:[1,2211],210:[1,2212],211:[1,2217],212:[1,2218],213:[1,2219],214:[1,2220],215:[1,2213],216:[1,2214],217:[1,2215],218:[1,2216],219:2200,220:$V_6},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:2221,219:45,220:$Vk},{19:$V$6,21:$V07,22:2223,100:[1,2234],108:[1,2235],109:[1,2236],110:2233,186:2224,196:2222,201:2227,202:2228,203:2229,206:2232,209:[1,2237],210:[1,2238],211:[1,2243],212:[1,2244],213:[1,2245],214:[1,2246],215:[1,2239],216:[1,2240],217:[1,2241],218:[1,2242],219:2226,220:$V17},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,2247]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:2248,219:45,220:$Vk},{19:$V27,21:$V37,22:2250,100:[1,2261],108:[1,2262],109:[1,2263],110:2260,186:2251,196:2249,201:2254,202:2255,203:2256,206:2259,209:[1,2264],210:[1,2265],211:[1,2270],212:[1,2271],213:[1,2272],214:[1,2273],215:[1,2266],216:[1,2267],217:[1,2268],218:[1,2269],219:2253,220:$V47},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($VG,$VT3),{121:[1,2274]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:2275,219:45,220:$Vk},{19:$V57,21:$V67,22:2277,100:[1,2288],108:[1,2289],109:[1,2290],110:2287,186:2278,196:2276,201:2281,202:2282,203:2283,206:2286,209:[1,2291],210:[1,2292],211:[1,2297],212:[1,2298],213:[1,2299],214:[1,2300],215:[1,2293],216:[1,2294],217:[1,2295],218:[1,2296],219:2280,220:$V77},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:2301,219:45,220:$Vk},{19:$V87,21:$V97,22:2303,100:[1,2314],108:[1,2315],109:[1,2316],110:2313,186:2304,196:2302,201:2307,202:2308,203:2309,206:2312,209:[1,2317],210:[1,2318],211:[1,2323],212:[1,2324],213:[1,2325],214:[1,2326],215:[1,2319],216:[1,2320],217:[1,2321],218:[1,2322],219:2306,220:$Va7},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,2327]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:2328,219:45,220:$Vk},{19:$Vb7,21:$Vc7,22:2330,100:[1,2341],108:[1,2342],109:[1,2343],110:2340,186:2331,196:2329,201:2334,202:2335,203:2336,206:2339,209:[1,2344],210:[1,2345],211:[1,2350],212:[1,2351],213:[1,2352],214:[1,2353],215:[1,2346],216:[1,2347],217:[1,2348],218:[1,2349],219:2333,220:$Vd7},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($VA3,$Vk5),{198:[1,2356],199:2354,200:[1,2355]},o($Vz3,$VP5),o($Vz3,$VQ5),o($Vz3,$VR5),o($Vz3,$Vn),o($Vz3,$Vo),o($Vz3,$VX3),o($Vz3,$VY3),o($Vz3,$VZ3),o($Vz3,$Vp),o($Vz3,$Vq),o($Vz3,$V_3),o($Vz3,$V$3,{207:2357,208:2358,111:[1,2359]}),o($Vz3,$V04),o($Vz3,$V14),o($Vz3,$V24),o($Vz3,$V34),o($Vz3,$V44),o($Vz3,$V54),o($Vz3,$V64),o($Vz3,$V74),o($Vz3,$V84),o($Ve7,$V63),o($Ve7,$V73),o($Ve7,$V83),o($Ve7,$V93),{198:[1,2362],199:2360,200:[1,2361]},o($VA3,$VP5),o($VA3,$VQ5),o($VA3,$VR5),o($VA3,$Vn),o($VA3,$Vo),o($VA3,$VX3),o($VA3,$VY3),o($VA3,$VZ3),o($VA3,$Vp),o($VA3,$Vq),o($VA3,$V_3),o($VA3,$V$3,{207:2363,208:2364,111:[1,2365]}),o($VA3,$V04),o($VA3,$V14),o($VA3,$V24),o($VA3,$V34),o($VA3,$V44),o($VA3,$V54),o($VA3,$V64),o($VA3,$V74),o($VA3,$V84),o($Vf7,$V63),o($Vf7,$V73),o($Vf7,$V83),o($Vf7,$V93),{198:[1,2368],199:2366,200:[1,2367]},o($VB3,$VP5),o($VB3,$VQ5),o($VB3,$VR5),o($VB3,$Vn),o($VB3,$Vo),o($VB3,$VX3),o($VB3,$VY3),o($VB3,$VZ3),o($VB3,$Vp),o($VB3,$Vq),o($VB3,$V_3),o($VB3,$V$3,{207:2369,208:2370,111:[1,2371]}),o($VB3,$V04),o($VB3,$V14),o($VB3,$V24),o($VB3,$V34),o($VB3,$V44),o($VB3,$V54),o($VB3,$V64),o($VB3,$V74),o($VB3,$V84),o($Vg7,$V63),o($Vg7,$V73),o($Vg7,$V83),o($Vg7,$V93),{19:[1,2374],21:[1,2377],22:2373,87:2372,219:2375,220:[1,2376]},o($Vx3,$Vu3),o($VI,$VJ,{62:2378,64:2379,66:2380,67:2381,73:2384,75:2385,72:2386,44:2387,92:2388,94:2389,87:2391,88:2392,89:2393,78:2394,95:2401,22:2402,91:2404,118:2405,99:2406,219:2409,105:2410,107:2411,19:[1,2408],21:[1,2413],69:[1,2382],71:[1,2383],79:[1,2395],80:[1,2396],81:[1,2397],85:[1,2390],96:[1,2398],97:[1,2399],98:[1,2400],101:$Vh7,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,2403],220:[1,2412]}),o($VI4,$Vp2,{84:1899,197:1900,83:2414,195:$Vy6}),o($Vx3,$VA2),o($Vx3,$Vw),o($Vx3,$Vx),o($Vx3,$Vn),o($Vx3,$Vo),o($Vx3,$Vy),o($Vx3,$Vp),o($Vx3,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2415,121:$VW2,148:$VX2,194:$VY2}),o($VI4,$Vp2,{84:1899,197:1900,83:2416,195:$Vy6}),o($VA3,$Vs2,{99:1364,95:2417,101:$VN5,102:$VR,103:$VS,104:$VT}),o($VG4,$Vt2),o($VG4,$V13),o($Vx3,$Vw3),o($VL5,$VH3),o($Vz3,$VI3),o($VL5,$VJ3,{31:2418,198:[1,2419]}),{19:$VK3,21:$VL3,22:643,129:2420,204:$VM3,219:646,220:$VN3},o($Vx3,$VO3),o($VA3,$VI3),o($Vx3,$VJ3,{31:2421,198:[1,2422]}),{19:$VK3,21:$VL3,22:643,129:2423,204:$VM3,219:646,220:$VN3},o($VC3,$VP3),o($VD3,$VQ3),o($VD3,$VR3),o($VD3,$VS3),{100:[1,2424]},o($VD3,$VT1),{100:[1,2426],106:2425,108:[1,2427],109:[1,2428],110:2429,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2430]},o($VM5,$VT3),o($VB3,$VI3),o($VM5,$VJ3,{31:2431,198:[1,2432]}),{19:$VK3,21:$VL3,22:643,129:2433,204:$VM3,219:646,220:$VN3},o($VD3,$VU3),{121:[1,2434]},{19:[1,2437],21:[1,2440],22:2436,87:2435,219:2438,220:[1,2439]},o($VI4,$Vp2,{84:1937,197:1938,83:2441,195:$VA6}),o($Vx3,$VA2),o($Vx3,$Vw),o($Vx3,$Vx),o($Vx3,$Vn),o($Vx3,$Vo),o($Vx3,$Vy),o($Vx3,$Vp),o($Vx3,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2442,121:$VW2,148:$VX2,194:$VY2}),o($VI4,$Vp2,{84:1937,197:1938,83:2443,195:$VA6}),o($VA3,$Vs2,{99:1411,95:2444,101:$VO5,102:$VR,103:$VS,104:$VT}),o($VG4,$Vt2),o($VG4,$V13),o($Vx3,$Vw3),o($VL5,$VH3),o($Vz3,$VI3),o($VL5,$VJ3,{31:2445,198:[1,2446]}),{19:$VK3,21:$VL3,22:643,129:2447,204:$VM3,219:646,220:$VN3},o($Vx3,$VO3),o($VA3,$VI3),o($Vx3,$VJ3,{31:2448,198:[1,2449]}),{19:$VK3,21:$VL3,22:643,129:2450,204:$VM3,219:646,220:$VN3},o($VC3,$VP3),o($VD3,$VQ3),o($VD3,$VR3),o($VD3,$VS3),{100:[1,2451]},o($VD3,$VT1),{100:[1,2453],106:2452,108:[1,2454],109:[1,2455],110:2456,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2457]},o($VM5,$VT3),o($VB3,$VI3),o($VM5,$VJ3,{31:2458,198:[1,2459]}),{19:$VK3,21:$VL3,22:643,129:2460,204:$VM3,219:646,220:$VN3},o($VD3,$VU3),{121:[1,2461]},{19:[1,2464],21:[1,2467],22:2463,87:2462,219:2465,220:[1,2466]},o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($VX5,$VZ5),o($VX5,$VK1),o($Vi7,$Vj7,{153:2468,155:$Vk7}),o($VC6,$Vl7),o($VC6,$Vm7),o($VC6,$Vn7),o($VC6,$Vo7),o($VC6,$Vp7),o($VI6,$Vq7,{57:2470,51:[1,2471]}),o($VK6,$Vr7,{61:2472,53:[1,2473]}),o($VM6,$Vs7),o($VM6,$Vt7,{74:2474,76:2475,78:2476,44:2477,118:2478,79:[1,2479],80:[1,2480],81:[1,2481],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VM6,$Vu7),o($VM6,$Vv7,{77:2482,73:2483,92:2484,94:2485,95:2489,99:2490,96:[1,2486],97:[1,2487],98:[1,2488],101:$Vw7,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:2492,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VM6,$Vx7),o($Vy7,$Vy1,{93:2493}),o($Vz7,$Vz1,{99:1996,95:2494,101:$VO6,102:$VR,103:$VS,104:$VT}),o($VA7,$VB1,{86:2495}),o($VA7,$VB1,{86:2496}),o($VA7,$VB1,{86:2497}),o($VM6,$VC1,{105:2000,107:2001,91:2498,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB7,$VC7),o($VB7,$VD7),o($Vy7,$VG1),o($Vy7,$VH1),o($Vy7,$VI1),o($Vy7,$VJ1),o($VA7,$VK1),o($VL1,$VM1,{167:2499}),o($VE7,$VO1),{119:[1,2500],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VB7,$VE1),o($VB7,$VF1),{19:[1,2504],21:[1,2508],22:2502,33:2501,205:2503,219:2505,220:[1,2507],221:[1,2506]},{100:[1,2509]},o($Vy7,$VT1),o($VA7,$Vn),o($VA7,$Vo),{100:[1,2511],106:2510,108:[1,2512],109:[1,2513],110:2514,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2515]},o($VA7,$Vp),o($VA7,$Vq),o($Vi7,$Vj7,{153:2516,155:$Vk7}),o($V66,$V_5),o($V66,$V$5),o($V66,$V06),o($V96,$V16),o($V96,$V26),o($V96,$V36),o($Vr,$Vs,{46:2517,47:2518,55:2519,59:2520,40:2521,43:$Vt}),{70:[1,2522]},{198:[1,2525],199:2523,200:[1,2524]},o($Vp4,$VP5),o($Vp4,$VQ5),o($Vp4,$VR5),o($Vp4,$Vn),o($Vp4,$Vo),o($Vp4,$VX3),o($Vp4,$VY3),o($Vp4,$VZ3),o($Vp4,$Vp),o($Vp4,$Vq),o($Vp4,$V_3),o($Vp4,$V$3,{207:2526,208:2527,111:[1,2528]}),o($Vp4,$V04),o($Vp4,$V14),o($Vp4,$V24),o($Vp4,$V34),o($Vp4,$V44),o($Vp4,$V54),o($Vp4,$V64),o($Vp4,$V74),o($Vp4,$V84),o($VF7,$V63),o($VF7,$V73),o($VF7,$V83),o($VF7,$V93),o($Vt4,$V71),o($Vt4,$V81),o($Vt4,$V91),o($Vb3,$Vi5),o($Vb3,$Vj5),{19:$Va6,21:$Vb6,22:2530,87:2529,219:1510,220:$Vc6},o($VG,$Vu3),o($VI,$VJ,{62:2531,64:2532,66:2533,67:2534,73:2537,75:2538,72:2539,44:2540,92:2541,94:2542,87:2544,88:2545,89:2546,78:2547,95:2554,22:2555,91:2557,118:2558,99:2559,219:2562,105:2563,107:2564,19:[1,2561],21:[1,2566],69:[1,2535],71:[1,2536],79:[1,2548],80:[1,2549],81:[1,2550],85:[1,2543],96:[1,2551],97:[1,2552],98:[1,2553],101:$VG7,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,2556],220:[1,2565]}),o($Vq2,$Vp2,{84:2067,197:2068,83:2567,195:$VT6}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2568,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:2067,197:2068,83:2569,195:$VT6}),o($Vt1,$Vs2,{99:1551,95:2570,101:$Vd6,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:2571,198:[1,2572]}),{19:$VK3,21:$VL3,22:643,129:2573,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:2574,198:[1,2575]}),{19:$VK3,21:$VL3,22:643,129:2576,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,2577]},o($VA1,$VT1),{100:[1,2579],106:2578,108:[1,2580],109:[1,2581],110:2582,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2583]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:2584,198:[1,2585]}),{19:$VK3,21:$VL3,22:643,129:2586,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,2587]},{19:[1,2590],21:[1,2593],22:2589,87:2588,219:2591,220:[1,2592]},o($Vq2,$Vp2,{84:2105,197:2106,83:2594,195:$VV6}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2595,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:2105,197:2106,83:2596,195:$VV6}),o($Vt1,$Vs2,{99:1598,95:2597,101:$Ve6,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:2598,198:[1,2599]}),{19:$VK3,21:$VL3,22:643,129:2600,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:2601,198:[1,2602]}),{19:$VK3,21:$VL3,22:643,129:2603,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,2604]},o($VA1,$VT1),{100:[1,2606],106:2605,108:[1,2607],109:[1,2608],110:2609,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2610]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:2611,198:[1,2612]}),{19:$VK3,21:$VL3,22:643,129:2613,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,2614]},{19:[1,2617],21:[1,2620],22:2616,87:2615,219:2618,220:[1,2619]},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$Vf6,21:$Vg6,22:2622,87:2621,219:1633,220:$Vh6},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$Vi6,21:$Vj6,22:2624,87:2623,219:1659,220:$Vk6},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$Vl6,21:$Vm6,22:2626,87:2625,219:1686,220:$Vn6},o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:2627}),o($VG,$VE1),o($VG,$VF1),{19:[1,2631],21:[1,2635],22:2629,33:2628,205:2630,219:2632,220:[1,2634],221:[1,2633]},{119:[1,2636],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:2637}),o($Vh2,$Vy1,{93:2638}),o($Vt1,$Vz1,{99:2165,95:2639,101:$VX6,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,2640]},o($Vh2,$VT1),{70:[1,2641]},o($Vo2,$Vp2,{83:2642,84:2643,197:2644,195:[1,2645]}),o($Vq2,$Vp2,{83:2646,84:2647,197:2648,195:$VH7}),o($Vr1,$Vs2,{99:1735,95:2650,101:$Vo6,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:2651,95:2652,91:2653,99:2654,105:2656,107:2657,101:$VI7,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:2651,95:2652,91:2653,99:2654,105:2656,107:2657,101:$VI7,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:2651,95:2652,91:2653,99:2654,105:2656,107:2657,101:$VI7,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:2658,84:2659,197:2660,195:[1,2661]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,2662],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2663,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,2664]},o($VN1,$Va3),o($Vt1,$Vk5),{198:[1,2667],199:2665,200:[1,2666]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:2668,208:2669,111:[1,2670]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,2673],199:2671,200:[1,2672]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:2674,208:2675,111:[1,2676]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,2679],21:[1,2682],22:2678,87:2677,219:2680,220:[1,2681]},{198:[1,2685],199:2683,200:[1,2684]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:2686,208:2687,111:[1,2688]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($Vt1,$Vk5),{198:[1,2691],199:2689,200:[1,2690]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:2692,208:2693,111:[1,2694]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,2697],199:2695,200:[1,2696]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:2698,208:2699,111:[1,2700]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,2703],21:[1,2706],22:2702,87:2701,219:2704,220:[1,2705]},{198:[1,2709],199:2707,200:[1,2708]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:2710,208:2711,111:[1,2712]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($VH4,$V71),o($VH4,$V81),o($VH4,$V91),o($Vz3,$Vi5),o($Vz3,$Vj5),{19:$Vp6,21:$Vq6,22:2714,87:2713,219:1803,220:$Vr6},o($VI4,$V71),o($VI4,$V81),o($VI4,$V91),o($VA3,$Vi5),o($VA3,$Vj5),{19:$Vs6,21:$Vt6,22:2716,87:2715,219:1829,220:$Vu6},o($VK4,$V71),o($VK4,$V81),o($VK4,$V91),o($VB3,$Vi5),o($VB3,$Vj5),{19:$Vv6,21:$Vw6,22:2718,87:2717,219:1855,220:$Vx6},o($VD3,$VD5),o($VD3,$VK1),o($VD3,$Vn),o($VD3,$Vo),o($VD3,$Vp),o($VD3,$Vq),o($Vx3,$Ve1),o($VI,$VJ,{65:2719,67:2720,72:2721,44:2722,78:2723,118:2727,51:$Vf1,53:$Vf1,70:$Vf1,79:[1,2724],80:[1,2725],81:[1,2726]}),o($Vx3,$Vj1),o($Vx3,$Vk1,{68:2728,64:2729,73:2730,92:2731,94:2732,95:2736,99:2737,96:[1,2733],97:[1,2734],98:[1,2735],101:$VJ7,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:2739,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vx3,$Vq1),o($Vz3,$Vs1,{82:2740}),o($VA3,$Vs1,{82:2741}),o($VM5,$Vv1),o($VM5,$Vw1),o($VC3,$Vy1,{93:2742}),o($Vz3,$Vz1,{99:2406,95:2743,101:$Vh7,102:$VR,103:$VS,104:$VT}),o($VD3,$VB1,{86:2744}),o($VD3,$VB1,{86:2745}),o($VD3,$VB1,{86:2746}),o($VA3,$VC1,{105:2410,107:2411,91:2747,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB3,$Vs1,{82:2748}),o($VM5,$VE1),o($VM5,$VF1),{19:[1,2752],21:[1,2756],22:2750,33:2749,205:2751,219:2753,220:[1,2755],221:[1,2754]},o($VC3,$VG1),o($VC3,$VH1),o($VC3,$VI1),o($VC3,$VJ1),o($VD3,$VK1),o($VL1,$VM1,{167:2757}),o($VE3,$VO1),{119:[1,2758],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,2759]},o($VC3,$VT1),o($VD3,$Vn),o($VD3,$Vo),{100:[1,2761],106:2760,108:[1,2762],109:[1,2763],110:2764,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,2765]},o($VD3,$Vp),o($VD3,$Vq),o($Vx3,$VT3),{121:[1,2766]},o($Vx3,$VH3),o($VG4,$VP3),o($VH4,$VO4),{19:$Vi,21:$Vj,22:2767,219:45,220:$Vk},{19:$VK7,21:$VL7,22:2769,100:[1,2780],108:[1,2781],109:[1,2782],110:2779,186:2770,196:2768,201:2773,202:2774,203:2775,206:2778,209:[1,2783],210:[1,2784],211:[1,2789],212:[1,2790],213:[1,2791],214:[1,2792],215:[1,2785],216:[1,2786],217:[1,2787],218:[1,2788],219:2772,220:$VM7},o($VI4,$VO4),{19:$Vi,21:$Vj,22:2793,219:45,220:$Vk},{19:$VN7,21:$VO7,22:2795,100:[1,2806],108:[1,2807],109:[1,2808],110:2805,186:2796,196:2794,201:2799,202:2800,203:2801,206:2804,209:[1,2809],210:[1,2810],211:[1,2815],212:[1,2816],213:[1,2817],214:[1,2818],215:[1,2811],216:[1,2812],217:[1,2813],218:[1,2814],219:2798,220:$VP7},o($VD3,$V13),o($VD3,$V23),o($VD3,$V33),o($VD3,$V43),o($VD3,$V53),{111:[1,2819]},o($VD3,$Va3),o($VK4,$VO4),{19:$Vi,21:$Vj,22:2820,219:45,220:$Vk},{19:$VQ7,21:$VR7,22:2822,100:[1,2833],108:[1,2834],109:[1,2835],110:2832,186:2823,196:2821,201:2826,202:2827,203:2828,206:2831,209:[1,2836],210:[1,2837],211:[1,2842],212:[1,2843],213:[1,2844],214:[1,2845],215:[1,2838],216:[1,2839],217:[1,2840],218:[1,2841],219:2825,220:$VS7},o($VB3,$Vk5),o($VE3,$VD5),o($VE3,$VK1),o($VE3,$Vn),o($VE3,$Vo),o($VE3,$Vp),o($VE3,$Vq),o($Vx3,$VT3),{121:[1,2846]},o($Vx3,$VH3),o($VG4,$VP3),o($VH4,$VO4),{19:$Vi,21:$Vj,22:2847,219:45,220:$Vk},{19:$VT7,21:$VU7,22:2849,100:[1,2860],108:[1,2861],109:[1,2862],110:2859,186:2850,196:2848,201:2853,202:2854,203:2855,206:2858,209:[1,2863],210:[1,2864],211:[1,2869],212:[1,2870],213:[1,2871],214:[1,2872],215:[1,2865],216:[1,2866],217:[1,2867],218:[1,2868],219:2852,220:$VV7},o($VI4,$VO4),{19:$Vi,21:$Vj,22:2873,219:45,220:$Vk},{19:$VW7,21:$VX7,22:2875,100:[1,2886],108:[1,2887],109:[1,2888],110:2885,186:2876,196:2874,201:2879,202:2880,203:2881,206:2884,209:[1,2889],210:[1,2890],211:[1,2895],212:[1,2896],213:[1,2897],214:[1,2898],215:[1,2891],216:[1,2892],217:[1,2893],218:[1,2894],219:2878,220:$VY7},o($VD3,$V13),o($VD3,$V23),o($VD3,$V33),o($VD3,$V43),o($VD3,$V53),{111:[1,2899]},o($VD3,$Va3),o($VK4,$VO4),{19:$Vi,21:$Vj,22:2900,219:45,220:$Vk},{19:$VZ7,21:$V_7,22:2902,100:[1,2913],108:[1,2914],109:[1,2915],110:2912,186:2903,196:2901,201:2906,202:2907,203:2908,206:2911,209:[1,2916],210:[1,2917],211:[1,2922],212:[1,2923],213:[1,2924],214:[1,2925],215:[1,2918],216:[1,2919],217:[1,2920],218:[1,2921],219:2905,220:$V$7},o($VB3,$Vk5),o($VE3,$VD5),o($VE3,$VK1),o($VE3,$Vn),o($VE3,$Vo),o($VE3,$Vp),o($VE3,$Vq),o($Vi7,$Vs1,{82:2926}),o($V46,$V08,{156:2927,157:$V18}),o($VK6,$V28),o($Vr,$Vs,{55:2929,59:2930,40:2931,43:$Vt}),o($VM6,$V38),o($Vr,$Vs,{59:2932,40:2933,43:$Vt}),o($VM6,$V48),o($VM6,$V58),o($VM6,$VC7),o($VM6,$VD7),{119:[1,2934],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VM6,$VE1),o($VM6,$VF1),{19:[1,2938],21:[1,2942],22:2936,33:2935,205:2937,219:2939,220:[1,2941],221:[1,2940]},o($VM6,$V68),o($VM6,$V78),o($V88,$Vy1,{93:2943}),o($VM6,$Vz1,{99:2490,95:2944,101:$Vw7,102:$VR,103:$VS,104:$VT}),o($V88,$VG1),o($V88,$VH1),o($V88,$VI1),o($V88,$VJ1),{100:[1,2945]},o($V88,$VT1),{70:[1,2946]},o($Vz7,$Vs2,{99:1996,95:2947,101:$VO6,102:$VR,103:$VS,104:$VT}),o($Vy7,$Vt2),o($VM6,$Vu2,{90:2948,95:2949,91:2950,99:2951,105:2953,107:2954,101:$V98,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vw2,{90:2948,95:2949,91:2950,99:2951,105:2953,107:2954,101:$V98,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vx2,{90:2948,95:2949,91:2950,99:2951,105:2953,107:2954,101:$V98,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE7,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,2955],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:2956,121:$VW2,148:$VX2,194:$VY2}),o($VB7,$VA2),o($VB7,$Vw),o($VB7,$Vx),o($VB7,$Vn),o($VB7,$Vo),o($VB7,$Vy),o($VB7,$Vp),o($VB7,$Vq),o($Vy7,$V13),o($VE7,$V23),o($VE7,$V33),o($VE7,$V43),o($VE7,$V53),{111:[1,2957]},o($VE7,$Va3),o($Vi7,$Vs1,{82:2958}),o($Va8,$VD6,{152:2959,154:2960,161:$Vb8,162:$Vc8,163:$Vd8,164:$Ve8}),o($Vf8,$VJ6),o($Vg8,$VL6,{56:2965}),o($Vh8,$VN6,{60:2966}),o($VI,$VJ,{63:2967,73:2968,75:2969,76:2970,92:2973,94:2974,87:2976,88:2977,89:2978,78:2979,44:2980,95:2984,22:2985,91:2987,118:2988,99:2992,219:2995,105:2996,107:2997,19:[1,2994],21:[1,2999],69:[1,2971],71:[1,2972],79:[1,2989],80:[1,2990],81:[1,2991],85:[1,2975],96:[1,2981],97:[1,2982],98:[1,2983],101:$Vi8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,2986],220:[1,2998]}),o($Va8,$VD6,{154:2960,152:3000,161:$Vb8,162:$Vc8,163:$Vd8,164:$Ve8}),o($VC5,$V71),o($VC5,$V81),o($VC5,$V91),o($Vp4,$Vi5),o($Vp4,$Vj5),{19:$VP6,21:$VQ6,22:3002,87:3001,219:2018,220:$VR6},o($Vb3,$VZ5),o($Vb3,$VK1),o($VG,$Ve1),o($VG,$Vf1,{65:3003,67:3004,72:3005,44:3006,78:3007,118:3011,79:[1,3008],80:[1,3009],81:[1,3010],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VG,$Vj1),o($VG,$Vk1,{68:3012,64:3013,73:3014,92:3015,94:3016,95:3020,99:3021,96:[1,3017],97:[1,3018],98:[1,3019],101:$Vj8,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:3023,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VG,$Vq1),o($Vr1,$Vs1,{82:3024}),o($Vt1,$Vs1,{82:3025}),o($Vu1,$Vv1),o($Vu1,$Vw1),o($Vx1,$Vy1,{93:3026}),o($Vr1,$Vz1,{99:2559,95:3027,101:$VG7,102:$VR,103:$VS,104:$VT}),o($VA1,$VB1,{86:3028}),o($VA1,$VB1,{86:3029}),o($VA1,$VB1,{86:3030}),o($Vt1,$VC1,{105:2563,107:2564,91:3031,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VD1,$Vs1,{82:3032}),o($Vu1,$VE1),o($Vu1,$VF1),{19:[1,3036],21:[1,3040],22:3034,33:3033,205:3035,219:3037,220:[1,3039],221:[1,3038]},o($Vx1,$VG1),o($Vx1,$VH1),o($Vx1,$VI1),o($Vx1,$VJ1),o($VA1,$VK1),o($VL1,$VM1,{167:3041}),o($VN1,$VO1),{119:[1,3042],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},{100:[1,3043]},o($Vx1,$VT1),o($VA1,$Vn),o($VA1,$Vo),{100:[1,3045],106:3044,108:[1,3046],109:[1,3047],110:3048,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3049]},o($VA1,$Vp),o($VA1,$Vq),o($VG,$VT3),{121:[1,3050]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:3051,219:45,220:$Vk},{19:$Vk8,21:$Vl8,22:3053,100:[1,3064],108:[1,3065],109:[1,3066],110:3063,186:3054,196:3052,201:3057,202:3058,203:3059,206:3062,209:[1,3067],210:[1,3068],211:[1,3073],212:[1,3074],213:[1,3075],214:[1,3076],215:[1,3069],216:[1,3070],217:[1,3071],218:[1,3072],219:3056,220:$Vm8},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:3077,219:45,220:$Vk},{19:$Vn8,21:$Vo8,22:3079,100:[1,3090],108:[1,3091],109:[1,3092],110:3089,186:3080,196:3078,201:3083,202:3084,203:3085,206:3088,209:[1,3093],210:[1,3094],211:[1,3099],212:[1,3100],213:[1,3101],214:[1,3102],215:[1,3095],216:[1,3096],217:[1,3097],218:[1,3098],219:3082,220:$Vp8},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,3103]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:3104,219:45,220:$Vk},{19:$Vq8,21:$Vr8,22:3106,100:[1,3117],108:[1,3118],109:[1,3119],110:3116,186:3107,196:3105,201:3110,202:3111,203:3112,206:3115,209:[1,3120],210:[1,3121],211:[1,3126],212:[1,3127],213:[1,3128],214:[1,3129],215:[1,3122],216:[1,3123],217:[1,3124],218:[1,3125],219:3109,220:$Vs8},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($VG,$VT3),{121:[1,3130]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:3131,219:45,220:$Vk},{19:$Vt8,21:$Vu8,22:3133,100:[1,3144],108:[1,3145],109:[1,3146],110:3143,186:3134,196:3132,201:3137,202:3138,203:3139,206:3142,209:[1,3147],210:[1,3148],211:[1,3153],212:[1,3154],213:[1,3155],214:[1,3156],215:[1,3149],216:[1,3150],217:[1,3151],218:[1,3152],219:3136,220:$Vv8},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:3157,219:45,220:$Vk},{19:$Vw8,21:$Vx8,22:3159,100:[1,3170],108:[1,3171],109:[1,3172],110:3169,186:3160,196:3158,201:3163,202:3164,203:3165,206:3168,209:[1,3173],210:[1,3174],211:[1,3179],212:[1,3180],213:[1,3181],214:[1,3182],215:[1,3175],216:[1,3176],217:[1,3177],218:[1,3178],219:3162,220:$Vy8},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,3183]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:3184,219:45,220:$Vk},{19:$Vz8,21:$VA8,22:3186,100:[1,3197],108:[1,3198],109:[1,3199],110:3196,186:3187,196:3185,201:3190,202:3191,203:3192,206:3195,209:[1,3200],210:[1,3201],211:[1,3206],212:[1,3207],213:[1,3208],214:[1,3209],215:[1,3202],216:[1,3203],217:[1,3204],218:[1,3205],219:3189,220:$VB8},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($Vq2,$Vp2,{84:2647,197:2648,83:3210,195:$VH7}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3211,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:2647,197:2648,83:3212,195:$VH7}),o($Vt1,$Vs2,{99:2165,95:3213,101:$VX6,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:3214,198:[1,3215]}),{19:$VK3,21:$VL3,22:643,129:3216,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:3217,198:[1,3218]}),{19:$VK3,21:$VL3,22:643,129:3219,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,3220]},o($VA1,$VT1),{100:[1,3222],106:3221,108:[1,3223],109:[1,3224],110:3225,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3226]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:3227,198:[1,3228]}),{19:$VK3,21:$VL3,22:643,129:3229,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,3230]},{19:[1,3233],21:[1,3236],22:3232,87:3231,219:3234,220:[1,3235]},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$VY6,21:$VZ6,22:3238,87:3237,219:2200,220:$V_6},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$V$6,21:$V07,22:3240,87:3239,219:2226,220:$V17},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$V27,21:$V37,22:3242,87:3241,219:2253,220:$V47},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$V57,21:$V67,22:3244,87:3243,219:2280,220:$V77},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$V87,21:$V97,22:3246,87:3245,219:2306,220:$Va7},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$Vb7,21:$Vc7,22:3248,87:3247,219:2333,220:$Vd7},o($Vz3,$VZ5),o($Vz3,$VK1),o($VA3,$VZ5),o($VA3,$VK1),o($VB3,$VZ5),o($VB3,$VK1),o($Vx3,$Vd2),o($Vx3,$Ve2),o($Vx3,$Vv1),o($Vx3,$Vw1),o($VA3,$Vs1,{82:3249}),o($Vx3,$VE1),o($Vx3,$VF1),{19:[1,3253],21:[1,3257],22:3251,33:3250,205:3252,219:3254,220:[1,3256],221:[1,3255]},{119:[1,3258],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vx3,$Vf2),o($Vx3,$Vg2),o($VA3,$Vs1,{82:3259}),o($VG4,$Vy1,{93:3260}),o($VA3,$Vz1,{99:2737,95:3261,101:$VJ7,102:$VR,103:$VS,104:$VT}),o($VG4,$VG1),o($VG4,$VH1),o($VG4,$VI1),o($VG4,$VJ1),{100:[1,3262]},o($VG4,$VT1),{70:[1,3263]},o($VH4,$Vp2,{83:3264,84:3265,197:3266,195:[1,3267]}),o($VI4,$Vp2,{83:3268,84:3269,197:3270,195:$VC8}),o($Vz3,$Vs2,{99:2406,95:3272,101:$Vh7,102:$VR,103:$VS,104:$VT}),o($VC3,$Vt2),o($VA3,$Vu2,{90:3273,95:3274,91:3275,99:3276,105:3278,107:3279,101:$VD8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vw2,{90:3273,95:3274,91:3275,99:3276,105:3278,107:3279,101:$VD8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VA3,$Vx2,{90:3273,95:3274,91:3275,99:3276,105:3278,107:3279,101:$VD8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE3,$Vy2),o($VK4,$Vp2,{83:3280,84:3281,197:3282,195:[1,3283]}),o($VM5,$VA2),o($VM5,$Vw),o($VM5,$Vx),o($VM5,$Vn),o($VM5,$Vo),o($VM5,$Vy),o($VM5,$Vp),o($VM5,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,3284],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3285,121:$VW2,148:$VX2,194:$VY2}),o($VC3,$V13),o($VE3,$V23),o($VE3,$V33),o($VE3,$V43),o($VE3,$V53),{111:[1,3286]},o($VE3,$Va3),o($VA3,$Vk5),{198:[1,3289],199:3287,200:[1,3288]},o($Vz3,$VP5),o($Vz3,$VQ5),o($Vz3,$VR5),o($Vz3,$Vn),o($Vz3,$Vo),o($Vz3,$VX3),o($Vz3,$VY3),o($Vz3,$VZ3),o($Vz3,$Vp),o($Vz3,$Vq),o($Vz3,$V_3),o($Vz3,$V$3,{207:3290,208:3291,111:[1,3292]}),o($Vz3,$V04),o($Vz3,$V14),o($Vz3,$V24),o($Vz3,$V34),o($Vz3,$V44),o($Vz3,$V54),o($Vz3,$V64),o($Vz3,$V74),o($Vz3,$V84),o($Ve7,$V63),o($Ve7,$V73),o($Ve7,$V83),o($Ve7,$V93),{198:[1,3295],199:3293,200:[1,3294]},o($VA3,$VP5),o($VA3,$VQ5),o($VA3,$VR5),o($VA3,$Vn),o($VA3,$Vo),o($VA3,$VX3),o($VA3,$VY3),o($VA3,$VZ3),o($VA3,$Vp),o($VA3,$Vq),o($VA3,$V_3),o($VA3,$V$3,{207:3296,208:3297,111:[1,3298]}),o($VA3,$V04),o($VA3,$V14),o($VA3,$V24),o($VA3,$V34),o($VA3,$V44),o($VA3,$V54),o($VA3,$V64),o($VA3,$V74),o($VA3,$V84),o($Vf7,$V63),o($Vf7,$V73),o($Vf7,$V83),o($Vf7,$V93),{19:[1,3301],21:[1,3304],22:3300,87:3299,219:3302,220:[1,3303]},{198:[1,3307],199:3305,200:[1,3306]},o($VB3,$VP5),o($VB3,$VQ5),o($VB3,$VR5),o($VB3,$Vn),o($VB3,$Vo),o($VB3,$VX3),o($VB3,$VY3),o($VB3,$VZ3),o($VB3,$Vp),o($VB3,$Vq),o($VB3,$V_3),o($VB3,$V$3,{207:3308,208:3309,111:[1,3310]}),o($VB3,$V04),o($VB3,$V14),o($VB3,$V24),o($VB3,$V34),o($VB3,$V44),o($VB3,$V54),o($VB3,$V64),o($VB3,$V74),o($VB3,$V84),o($Vg7,$V63),o($Vg7,$V73),o($Vg7,$V83),o($Vg7,$V93),o($VA3,$Vk5),{198:[1,3313],199:3311,200:[1,3312]},o($Vz3,$VP5),o($Vz3,$VQ5),o($Vz3,$VR5),o($Vz3,$Vn),o($Vz3,$Vo),o($Vz3,$VX3),o($Vz3,$VY3),o($Vz3,$VZ3),o($Vz3,$Vp),o($Vz3,$Vq),o($Vz3,$V_3),o($Vz3,$V$3,{207:3314,208:3315,111:[1,3316]}),o($Vz3,$V04),o($Vz3,$V14),o($Vz3,$V24),o($Vz3,$V34),o($Vz3,$V44),o($Vz3,$V54),o($Vz3,$V64),o($Vz3,$V74),o($Vz3,$V84),o($Ve7,$V63),o($Ve7,$V73),o($Ve7,$V83),o($Ve7,$V93),{198:[1,3319],199:3317,200:[1,3318]},o($VA3,$VP5),o($VA3,$VQ5),o($VA3,$VR5),o($VA3,$Vn),o($VA3,$Vo),o($VA3,$VX3),o($VA3,$VY3),o($VA3,$VZ3),o($VA3,$Vp),o($VA3,$Vq),o($VA3,$V_3),o($VA3,$V$3,{207:3320,208:3321,111:[1,3322]}),o($VA3,$V04),o($VA3,$V14),o($VA3,$V24),o($VA3,$V34),o($VA3,$V44),o($VA3,$V54),o($VA3,$V64),o($VA3,$V74),o($VA3,$V84),o($Vf7,$V63),o($Vf7,$V73),o($Vf7,$V83),o($Vf7,$V93),{19:[1,3325],21:[1,3328],22:3324,87:3323,219:3326,220:[1,3327]},{198:[1,3331],199:3329,200:[1,3330]},o($VB3,$VP5),o($VB3,$VQ5),o($VB3,$VR5),o($VB3,$Vn),o($VB3,$Vo),o($VB3,$VX3),o($VB3,$VY3),o($VB3,$VZ3),o($VB3,$Vp),o($VB3,$Vq),o($VB3,$V_3),o($VB3,$V$3,{207:3332,208:3333,111:[1,3334]}),o($VB3,$V04),o($VB3,$V14),o($VB3,$V24),o($VB3,$V34),o($VB3,$V44),o($VB3,$V54),o($VB3,$V64),o($VB3,$V74),o($VB3,$V84),o($Vg7,$V63),o($Vg7,$V73),o($Vg7,$V83),o($Vg7,$V93),o($VE8,$Vp2,{83:3335,84:3336,197:3337,195:$VF8}),o($Vr,$Vs,{46:3339,47:3340,55:3341,59:3342,40:3343,43:$Vt}),{158:[1,3344]},o($VK6,$VG8),o($VM6,$VN6,{60:3345}),o($VI,$VJ,{63:3346,73:3347,75:3348,76:3349,92:3352,94:3353,87:3355,88:3356,89:3357,78:3358,44:3359,95:3363,22:3364,91:3366,118:3367,99:3371,219:3374,105:3375,107:3376,19:[1,3373],21:[1,3378],69:[1,3350],71:[1,3351],79:[1,3368],80:[1,3369],81:[1,3370],85:[1,3354],96:[1,3360],97:[1,3361],98:[1,3362],101:$VH8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,3365],220:[1,3377]}),o($VM6,$VI8),o($VI,$VJ,{63:3379,73:3380,75:3381,76:3382,92:3385,94:3386,87:3388,88:3389,89:3390,78:3391,44:3392,95:3396,22:3397,91:3399,118:3400,99:3404,219:3407,105:3408,107:3409,19:[1,3406],21:[1,3411],69:[1,3383],71:[1,3384],79:[1,3401],80:[1,3402],81:[1,3403],85:[1,3387],96:[1,3393],97:[1,3394],98:[1,3395],101:$VJ8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,3398],220:[1,3410]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3412,121:$VW2,148:$VX2,194:$VY2}),o($VM6,$VA2),o($VM6,$Vw),o($VM6,$Vx),o($VM6,$Vn),o($VM6,$Vo),o($VM6,$Vy),o($VM6,$Vp),o($VM6,$Vq),o($VM6,$Vs2,{99:2490,95:3413,101:$Vw7,102:$VR,103:$VS,104:$VT}),o($V88,$Vt2),o($V88,$V13),o($VM6,$VK8),o($Vy7,$VP3),o($VA7,$VQ3),o($VA7,$VR3),o($VA7,$VS3),{100:[1,3414]},o($VA7,$VT1),{100:[1,3416],106:3415,108:[1,3417],109:[1,3418],110:3419,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3420]},o($VA7,$VU3),{121:[1,3421]},{19:[1,3424],21:[1,3427],22:3423,87:3422,219:3425,220:[1,3426]},o($VE8,$Vp2,{84:3336,197:3337,83:3428,195:$VF8}),o($VL8,$Vj7,{153:3429,155:$VM8}),o($Va8,$Vl7),o($Va8,$Vm7),o($Va8,$Vn7),o($Va8,$Vo7),o($Va8,$Vp7),o($Vf8,$Vq7,{57:3431,51:[1,3432]}),o($Vg8,$Vr7,{61:3433,53:[1,3434]}),o($Vh8,$Vs7),o($Vh8,$Vt7,{74:3435,76:3436,78:3437,44:3438,118:3439,79:[1,3440],80:[1,3441],81:[1,3442],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($Vh8,$Vu7),o($Vh8,$Vv7,{77:3443,73:3444,92:3445,94:3446,95:3450,99:3451,96:[1,3447],97:[1,3448],98:[1,3449],101:$VN8,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:3453,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vh8,$Vx7),o($VO8,$Vy1,{93:3454}),o($VP8,$Vz1,{99:2992,95:3455,101:$Vi8,102:$VR,103:$VS,104:$VT}),o($VQ8,$VB1,{86:3456}),o($VQ8,$VB1,{86:3457}),o($VQ8,$VB1,{86:3458}),o($Vh8,$VC1,{105:2996,107:2997,91:3459,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VR8,$VC7),o($VR8,$VD7),o($VO8,$VG1),o($VO8,$VH1),o($VO8,$VI1),o($VO8,$VJ1),o($VQ8,$VK1),o($VL1,$VM1,{167:3460}),o($VS8,$VO1),{119:[1,3461],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VR8,$VE1),o($VR8,$VF1),{19:[1,3465],21:[1,3469],22:3463,33:3462,205:3464,219:3466,220:[1,3468],221:[1,3467]},{100:[1,3470]},o($VO8,$VT1),o($VQ8,$Vn),o($VQ8,$Vo),{100:[1,3472],106:3471,108:[1,3473],109:[1,3474],110:3475,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3476]},o($VQ8,$Vp),o($VQ8,$Vq),o($VL8,$Vj7,{153:3477,155:$VM8}),o($Vp4,$VZ5),o($Vp4,$VK1),o($VG,$Vd2),o($VG,$Ve2),o($VG,$Vv1),o($VG,$Vw1),o($Vt1,$Vs1,{82:3478}),o($VG,$VE1),o($VG,$VF1),{19:[1,3482],21:[1,3486],22:3480,33:3479,205:3481,219:3483,220:[1,3485],221:[1,3484]},{119:[1,3487],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VG,$Vf2),o($VG,$Vg2),o($Vt1,$Vs1,{82:3488}),o($Vh2,$Vy1,{93:3489}),o($Vt1,$Vz1,{99:3021,95:3490,101:$Vj8,102:$VR,103:$VS,104:$VT}),o($Vh2,$VG1),o($Vh2,$VH1),o($Vh2,$VI1),o($Vh2,$VJ1),{100:[1,3491]},o($Vh2,$VT1),{70:[1,3492]},o($Vo2,$Vp2,{83:3493,84:3494,197:3495,195:[1,3496]}),o($Vq2,$Vp2,{83:3497,84:3498,197:3499,195:$VT8}),o($Vr1,$Vs2,{99:2559,95:3501,101:$VG7,102:$VR,103:$VS,104:$VT}),o($Vx1,$Vt2),o($Vt1,$Vu2,{90:3502,95:3503,91:3504,99:3505,105:3507,107:3508,101:$VU8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vw2,{90:3502,95:3503,91:3504,99:3505,105:3507,107:3508,101:$VU8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt1,$Vx2,{90:3502,95:3503,91:3504,99:3505,105:3507,107:3508,101:$VU8,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VN1,$Vy2),o($Vz2,$Vp2,{83:3509,84:3510,197:3511,195:[1,3512]}),o($Vu1,$VA2),o($Vu1,$Vw),o($Vu1,$Vx),o($Vu1,$Vn),o($Vu1,$Vo),o($Vu1,$Vy),o($Vu1,$Vp),o($Vu1,$Vq),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,3513],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3514,121:$VW2,148:$VX2,194:$VY2}),o($Vx1,$V13),o($VN1,$V23),o($VN1,$V33),o($VN1,$V43),o($VN1,$V53),{111:[1,3515]},o($VN1,$Va3),o($Vt1,$Vk5),{198:[1,3518],199:3516,200:[1,3517]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:3519,208:3520,111:[1,3521]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,3524],199:3522,200:[1,3523]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:3525,208:3526,111:[1,3527]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,3530],21:[1,3533],22:3529,87:3528,219:3531,220:[1,3532]},{198:[1,3536],199:3534,200:[1,3535]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:3537,208:3538,111:[1,3539]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($Vt1,$Vk5),{198:[1,3542],199:3540,200:[1,3541]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:3543,208:3544,111:[1,3545]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,3548],199:3546,200:[1,3547]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:3549,208:3550,111:[1,3551]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,3554],21:[1,3557],22:3553,87:3552,219:3555,220:[1,3556]},{198:[1,3560],199:3558,200:[1,3559]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:3561,208:3562,111:[1,3563]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($VG,$VT3),{121:[1,3564]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:3565,219:45,220:$Vk},{19:$VV8,21:$VW8,22:3567,100:[1,3578],108:[1,3579],109:[1,3580],110:3577,186:3568,196:3566,201:3571,202:3572,203:3573,206:3576,209:[1,3581],210:[1,3582],211:[1,3587],212:[1,3588],213:[1,3589],214:[1,3590],215:[1,3583],216:[1,3584],217:[1,3585],218:[1,3586],219:3570,220:$VX8},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:3591,219:45,220:$Vk},{19:$VY8,21:$VZ8,22:3593,100:[1,3604],108:[1,3605],109:[1,3606],110:3603,186:3594,196:3592,201:3597,202:3598,203:3599,206:3602,209:[1,3607],210:[1,3608],211:[1,3613],212:[1,3614],213:[1,3615],214:[1,3616],215:[1,3609],216:[1,3610],217:[1,3611],218:[1,3612],219:3596,220:$V_8},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,3617]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:3618,219:45,220:$Vk},{19:$V$8,21:$V09,22:3620,100:[1,3631],108:[1,3632],109:[1,3633],110:3630,186:3621,196:3619,201:3624,202:3625,203:3626,206:3629,209:[1,3634],210:[1,3635],211:[1,3640],212:[1,3641],213:[1,3642],214:[1,3643],215:[1,3636],216:[1,3637],217:[1,3638],218:[1,3639],219:3623,220:$V19},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($VI4,$Vp2,{84:3269,197:3270,83:3644,195:$VC8}),o($Vx3,$VA2),o($Vx3,$Vw),o($Vx3,$Vx),o($Vx3,$Vn),o($Vx3,$Vo),o($Vx3,$Vy),o($Vx3,$Vp),o($Vx3,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3645,121:$VW2,148:$VX2,194:$VY2}),o($VI4,$Vp2,{84:3269,197:3270,83:3646,195:$VC8}),o($VA3,$Vs2,{99:2737,95:3647,101:$VJ7,102:$VR,103:$VS,104:$VT}),o($VG4,$Vt2),o($VG4,$V13),o($Vx3,$Vw3),o($VL5,$VH3),o($Vz3,$VI3),o($VL5,$VJ3,{31:3648,198:[1,3649]}),{19:$VK3,21:$VL3,22:643,129:3650,204:$VM3,219:646,220:$VN3},o($Vx3,$VO3),o($VA3,$VI3),o($Vx3,$VJ3,{31:3651,198:[1,3652]}),{19:$VK3,21:$VL3,22:643,129:3653,204:$VM3,219:646,220:$VN3},o($VC3,$VP3),o($VD3,$VQ3),o($VD3,$VR3),o($VD3,$VS3),{100:[1,3654]},o($VD3,$VT1),{100:[1,3656],106:3655,108:[1,3657],109:[1,3658],110:3659,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3660]},o($VM5,$VT3),o($VB3,$VI3),o($VM5,$VJ3,{31:3661,198:[1,3662]}),{19:$VK3,21:$VL3,22:643,129:3663,204:$VM3,219:646,220:$VN3},o($VD3,$VU3),{121:[1,3664]},{19:[1,3667],21:[1,3670],22:3666,87:3665,219:3668,220:[1,3669]},o($VH4,$V71),o($VH4,$V81),o($VH4,$V91),o($Vz3,$Vi5),o($Vz3,$Vj5),{19:$VK7,21:$VL7,22:3672,87:3671,219:2772,220:$VM7},o($VI4,$V71),o($VI4,$V81),o($VI4,$V91),o($VA3,$Vi5),o($VA3,$Vj5),{19:$VN7,21:$VO7,22:3674,87:3673,219:2798,220:$VP7},o($VD3,$VD5),o($VD3,$VK1),o($VD3,$Vn),o($VD3,$Vo),o($VD3,$Vp),o($VD3,$Vq),o($VK4,$V71),o($VK4,$V81),o($VK4,$V91),o($VB3,$Vi5),o($VB3,$Vj5),{19:$VQ7,21:$VR7,22:3676,87:3675,219:2825,220:$VS7},o($VH4,$V71),o($VH4,$V81),o($VH4,$V91),o($Vz3,$Vi5),o($Vz3,$Vj5),{19:$VT7,21:$VU7,22:3678,87:3677,219:2852,220:$VV7},o($VI4,$V71),o($VI4,$V81),o($VI4,$V91),o($VA3,$Vi5),o($VA3,$Vj5),{19:$VW7,21:$VX7,22:3680,87:3679,219:2878,220:$VY7},o($VD3,$VD5),o($VD3,$VK1),o($VD3,$Vn),o($VD3,$Vo),o($VD3,$Vp),o($VD3,$Vq),o($VK4,$V71),o($VK4,$V81),o($VK4,$V91),o($VB3,$Vi5),o($VB3,$Vj5),{19:$VZ7,21:$V_7,22:3682,87:3681,219:2905,220:$V$7},o($Vn4,$V29),o($Vi7,$VI3),o($Vn4,$VJ3,{31:3683,198:[1,3684]}),{19:$VK3,21:$VL3,22:643,129:3685,204:$VM3,219:646,220:$VN3},o($Vi7,$V39),o($Vi7,$VJ6),o($V49,$VL6,{56:3686}),o($V59,$VN6,{60:3687}),o($VI,$VJ,{63:3688,73:3689,75:3690,76:3691,92:3694,94:3695,87:3697,88:3698,89:3699,78:3700,44:3701,95:3705,22:3706,91:3708,118:3709,99:3713,219:3716,105:3717,107:3718,19:[1,3715],21:[1,3720],69:[1,3692],71:[1,3693],79:[1,3710],80:[1,3711],81:[1,3712],85:[1,3696],96:[1,3702],97:[1,3703],98:[1,3704],101:$V69,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,3707],220:[1,3719]}),o($V46,[2,177]),o($VK6,$Vr7,{61:3721,53:[1,3722]}),o($VM6,$Vs7),o($VM6,$Vt7,{74:3723,76:3724,78:3725,44:3726,118:3727,79:[1,3728],80:[1,3729],81:[1,3730],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VM6,$Vu7),o($VM6,$Vv7,{77:3731,73:3732,92:3733,94:3734,95:3738,99:3739,96:[1,3735],97:[1,3736],98:[1,3737],101:$V79,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:3741,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VM6,$Vx7),o($Vy7,$Vy1,{93:3742}),o($Vz7,$Vz1,{99:3371,95:3743,101:$VH8,102:$VR,103:$VS,104:$VT}),o($VA7,$VB1,{86:3744}),o($VA7,$VB1,{86:3745}),o($VA7,$VB1,{86:3746}),o($VM6,$VC1,{105:3375,107:3376,91:3747,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB7,$VC7),o($VB7,$VD7),o($Vy7,$VG1),o($Vy7,$VH1),o($Vy7,$VI1),o($Vy7,$VJ1),o($VA7,$VK1),o($VL1,$VM1,{167:3748}),o($VE7,$VO1),{119:[1,3749],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VB7,$VE1),o($VB7,$VF1),{19:[1,3753],21:[1,3757],22:3751,33:3750,205:3752,219:3754,220:[1,3756],221:[1,3755]},{100:[1,3758]},o($Vy7,$VT1),o($VA7,$Vn),o($VA7,$Vo),{100:[1,3760],106:3759,108:[1,3761],109:[1,3762],110:3763,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3764]},o($VA7,$Vp),o($VA7,$Vq),o($VM6,$Vs7),o($VM6,$Vt7,{74:3765,76:3766,78:3767,44:3768,118:3769,79:[1,3770],80:[1,3771],81:[1,3772],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VM6,$Vu7),o($VM6,$Vv7,{77:3773,73:3774,92:3775,94:3776,95:3780,99:3781,96:[1,3777],97:[1,3778],98:[1,3779],101:$V89,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:3783,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VM6,$Vx7),o($Vy7,$Vy1,{93:3784}),o($Vz7,$Vz1,{99:3404,95:3785,101:$VJ8,102:$VR,103:$VS,104:$VT}),o($VA7,$VB1,{86:3786}),o($VA7,$VB1,{86:3787}),o($VA7,$VB1,{86:3788}),o($VM6,$VC1,{105:3408,107:3409,91:3789,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB7,$VC7),o($VB7,$VD7),o($Vy7,$VG1),o($Vy7,$VH1),o($Vy7,$VI1),o($Vy7,$VJ1),o($VA7,$VK1),o($VL1,$VM1,{167:3790}),o($VE7,$VO1),{119:[1,3791],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VB7,$VE1),o($VB7,$VF1),{19:[1,3795],21:[1,3799],22:3793,33:3792,205:3794,219:3796,220:[1,3798],221:[1,3797]},{100:[1,3800]},o($Vy7,$VT1),o($VA7,$Vn),o($VA7,$Vo),{100:[1,3802],106:3801,108:[1,3803],109:[1,3804],110:3805,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3806]},o($VA7,$Vp),o($VA7,$Vq),{121:[1,3807]},o($V88,$VP3),o($VA7,$V13),o($VA7,$V23),o($VA7,$V33),o($VA7,$V43),o($VA7,$V53),{111:[1,3808]},o($VA7,$Va3),o($VB7,$Vk5),o($VE7,$VD5),o($VE7,$VK1),o($VE7,$Vn),o($VE7,$Vo),o($VE7,$Vp),o($VE7,$Vq),o($Vn4,$V99),o($VL8,$Vs1,{82:3809}),o($V46,$V08,{156:3810,157:$V18}),o($Vg8,$V28),o($Vr,$Vs,{55:3811,59:3812,40:3813,43:$Vt}),o($Vh8,$V38),o($Vr,$Vs,{59:3814,40:3815,43:$Vt}),o($Vh8,$V48),o($Vh8,$V58),o($Vh8,$VC7),o($Vh8,$VD7),{119:[1,3816],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vh8,$VE1),o($Vh8,$VF1),{19:[1,3820],21:[1,3824],22:3818,33:3817,205:3819,219:3821,220:[1,3823],221:[1,3822]},o($Vh8,$V68),o($Vh8,$V78),o($Va9,$Vy1,{93:3825}),o($Vh8,$Vz1,{99:3451,95:3826,101:$VN8,102:$VR,103:$VS,104:$VT}),o($Va9,$VG1),o($Va9,$VH1),o($Va9,$VI1),o($Va9,$VJ1),{100:[1,3827]},o($Va9,$VT1),{70:[1,3828]},o($VP8,$Vs2,{99:2992,95:3829,101:$Vi8,102:$VR,103:$VS,104:$VT}),o($VO8,$Vt2),o($Vh8,$Vu2,{90:3830,95:3831,91:3832,99:3833,105:3835,107:3836,101:$Vb9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vw2,{90:3830,95:3831,91:3832,99:3833,105:3835,107:3836,101:$Vb9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vx2,{90:3830,95:3831,91:3832,99:3833,105:3835,107:3836,101:$Vb9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VS8,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,3837],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3838,121:$VW2,148:$VX2,194:$VY2}),o($VR8,$VA2),o($VR8,$Vw),o($VR8,$Vx),o($VR8,$Vn),o($VR8,$Vo),o($VR8,$Vy),o($VR8,$Vp),o($VR8,$Vq),o($VO8,$V13),o($VS8,$V23),o($VS8,$V33),o($VS8,$V43),o($VS8,$V53),{111:[1,3839]},o($VS8,$Va3),o($VL8,$Vs1,{82:3840}),o($Vq2,$Vp2,{84:3498,197:3499,83:3841,195:$VT8}),o($VG,$VA2),o($VG,$Vw),o($VG,$Vx),o($VG,$Vn),o($VG,$Vo),o($VG,$Vy),o($VG,$Vp),o($VG,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:3842,121:$VW2,148:$VX2,194:$VY2}),o($Vq2,$Vp2,{84:3498,197:3499,83:3843,195:$VT8}),o($Vt1,$Vs2,{99:3021,95:3844,101:$Vj8,102:$VR,103:$VS,104:$VT}),o($Vh2,$Vt2),o($Vh2,$V13),o($VG,$Vw3),o($VG3,$VH3),o($Vr1,$VI3),o($VG3,$VJ3,{31:3845,198:[1,3846]}),{19:$VK3,21:$VL3,22:643,129:3847,204:$VM3,219:646,220:$VN3},o($VG,$VO3),o($Vt1,$VI3),o($VG,$VJ3,{31:3848,198:[1,3849]}),{19:$VK3,21:$VL3,22:643,129:3850,204:$VM3,219:646,220:$VN3},o($Vx1,$VP3),o($VA1,$VQ3),o($VA1,$VR3),o($VA1,$VS3),{100:[1,3851]},o($VA1,$VT1),{100:[1,3853],106:3852,108:[1,3854],109:[1,3855],110:3856,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,3857]},o($Vu1,$VT3),o($VD1,$VI3),o($Vu1,$VJ3,{31:3858,198:[1,3859]}),{19:$VK3,21:$VL3,22:643,129:3860,204:$VM3,219:646,220:$VN3},o($VA1,$VU3),{121:[1,3861]},{19:[1,3864],21:[1,3867],22:3863,87:3862,219:3865,220:[1,3866]},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$Vk8,21:$Vl8,22:3869,87:3868,219:3056,220:$Vm8},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$Vn8,21:$Vo8,22:3871,87:3870,219:3082,220:$Vp8},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$Vq8,21:$Vr8,22:3873,87:3872,219:3109,220:$Vs8},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$Vt8,21:$Vu8,22:3875,87:3874,219:3136,220:$Vv8},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$Vw8,21:$Vx8,22:3877,87:3876,219:3162,220:$Vy8},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$Vz8,21:$VA8,22:3879,87:3878,219:3189,220:$VB8},o($Vt1,$Vk5),{198:[1,3882],199:3880,200:[1,3881]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:3883,208:3884,111:[1,3885]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,3888],199:3886,200:[1,3887]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:3889,208:3890,111:[1,3891]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,3894],21:[1,3897],22:3893,87:3892,219:3895,220:[1,3896]},{198:[1,3900],199:3898,200:[1,3899]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:3901,208:3902,111:[1,3903]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($Vx3,$VT3),{121:[1,3904]},o($Vx3,$VH3),o($VG4,$VP3),o($VH4,$VO4),{19:$Vi,21:$Vj,22:3905,219:45,220:$Vk},{19:$Vc9,21:$Vd9,22:3907,100:[1,3918],108:[1,3919],109:[1,3920],110:3917,186:3908,196:3906,201:3911,202:3912,203:3913,206:3916,209:[1,3921],210:[1,3922],211:[1,3927],212:[1,3928],213:[1,3929],214:[1,3930],215:[1,3923],216:[1,3924],217:[1,3925],218:[1,3926],219:3910,220:$Ve9},o($VI4,$VO4),{19:$Vi,21:$Vj,22:3931,219:45,220:$Vk},{19:$Vf9,21:$Vg9,22:3933,100:[1,3944],108:[1,3945],109:[1,3946],110:3943,186:3934,196:3932,201:3937,202:3938,203:3939,206:3942,209:[1,3947],210:[1,3948],211:[1,3953],212:[1,3954],213:[1,3955],214:[1,3956],215:[1,3949],216:[1,3950],217:[1,3951],218:[1,3952],219:3936,220:$Vh9},o($VD3,$V13),o($VD3,$V23),o($VD3,$V33),o($VD3,$V43),o($VD3,$V53),{111:[1,3957]},o($VD3,$Va3),o($VK4,$VO4),{19:$Vi,21:$Vj,22:3958,219:45,220:$Vk},{19:$Vi9,21:$Vj9,22:3960,100:[1,3971],108:[1,3972],109:[1,3973],110:3970,186:3961,196:3959,201:3964,202:3965,203:3966,206:3969,209:[1,3974],210:[1,3975],211:[1,3980],212:[1,3981],213:[1,3982],214:[1,3983],215:[1,3976],216:[1,3977],217:[1,3978],218:[1,3979],219:3963,220:$Vk9},o($VB3,$Vk5),o($VE3,$VD5),o($VE3,$VK1),o($VE3,$Vn),o($VE3,$Vo),o($VE3,$Vp),o($VE3,$Vq),o($Vz3,$VZ5),o($Vz3,$VK1),o($VA3,$VZ5),o($VA3,$VK1),o($VB3,$VZ5),o($VB3,$VK1),o($Vz3,$VZ5),o($Vz3,$VK1),o($VA3,$VZ5),o($VA3,$VK1),o($VB3,$VZ5),o($VB3,$VK1),o($VE8,$VO4),{19:$Vi,21:$Vj,22:3984,219:45,220:$Vk},{19:$Vl9,21:$Vm9,22:3986,100:[1,3997],108:[1,3998],109:[1,3999],110:3996,186:3987,196:3985,201:3990,202:3991,203:3992,206:3995,209:[1,4000],210:[1,4001],211:[1,4006],212:[1,4007],213:[1,4008],214:[1,4009],215:[1,4002],216:[1,4003],217:[1,4004],218:[1,4005],219:3989,220:$Vn9},o($Vi7,$Vq7,{57:4010,51:[1,4011]}),o($V49,$Vr7,{61:4012,53:[1,4013]}),o($V59,$Vs7),o($V59,$Vt7,{74:4014,76:4015,78:4016,44:4017,118:4018,79:[1,4019],80:[1,4020],81:[1,4021],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($V59,$Vu7),o($V59,$Vv7,{77:4022,73:4023,92:4024,94:4025,95:4029,99:4030,96:[1,4026],97:[1,4027],98:[1,4028],101:$Vo9,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4032,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($V59,$Vx7),o($Vp9,$Vy1,{93:4033}),o($Vq9,$Vz1,{99:3713,95:4034,101:$V69,102:$VR,103:$VS,104:$VT}),o($Vr9,$VB1,{86:4035}),o($Vr9,$VB1,{86:4036}),o($Vr9,$VB1,{86:4037}),o($V59,$VC1,{105:3717,107:3718,91:4038,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vs9,$VC7),o($Vs9,$VD7),o($Vp9,$VG1),o($Vp9,$VH1),o($Vp9,$VI1),o($Vp9,$VJ1),o($Vr9,$VK1),o($VL1,$VM1,{167:4039}),o($Vt9,$VO1),{119:[1,4040],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vs9,$VE1),o($Vs9,$VF1),{19:[1,4044],21:[1,4048],22:4042,33:4041,205:4043,219:4045,220:[1,4047],221:[1,4046]},{100:[1,4049]},o($Vp9,$VT1),o($Vr9,$Vn),o($Vr9,$Vo),{100:[1,4051],106:4050,108:[1,4052],109:[1,4053],110:4054,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4055]},o($Vr9,$Vp),o($Vr9,$Vq),o($VM6,$V38),o($Vr,$Vs,{59:4056,40:4057,43:$Vt}),o($VM6,$V48),o($VM6,$V58),o($VM6,$VC7),o($VM6,$VD7),{119:[1,4058],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VM6,$VE1),o($VM6,$VF1),{19:[1,4062],21:[1,4066],22:4060,33:4059,205:4061,219:4063,220:[1,4065],221:[1,4064]},o($VM6,$V68),o($VM6,$V78),o($V88,$Vy1,{93:4067}),o($VM6,$Vz1,{99:3739,95:4068,101:$V79,102:$VR,103:$VS,104:$VT}),o($V88,$VG1),o($V88,$VH1),o($V88,$VI1),o($V88,$VJ1),{100:[1,4069]},o($V88,$VT1),{70:[1,4070]},o($Vz7,$Vs2,{99:3371,95:4071,101:$VH8,102:$VR,103:$VS,104:$VT}),o($Vy7,$Vt2),o($VM6,$Vu2,{90:4072,95:4073,91:4074,99:4075,105:4077,107:4078,101:$Vu9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vw2,{90:4072,95:4073,91:4074,99:4075,105:4077,107:4078,101:$Vu9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vx2,{90:4072,95:4073,91:4074,99:4075,105:4077,107:4078,101:$Vu9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE7,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4079],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4080,121:$VW2,148:$VX2,194:$VY2}),o($VB7,$VA2),o($VB7,$Vw),o($VB7,$Vx),o($VB7,$Vn),o($VB7,$Vo),o($VB7,$Vy),o($VB7,$Vp),o($VB7,$Vq),o($Vy7,$V13),o($VE7,$V23),o($VE7,$V33),o($VE7,$V43),o($VE7,$V53),{111:[1,4081]},o($VE7,$Va3),o($VM6,$V48),o($VM6,$V58),o($VM6,$VC7),o($VM6,$VD7),{119:[1,4082],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VM6,$VE1),o($VM6,$VF1),{19:[1,4086],21:[1,4090],22:4084,33:4083,205:4085,219:4087,220:[1,4089],221:[1,4088]},o($VM6,$V68),o($VM6,$V78),o($V88,$Vy1,{93:4091}),o($VM6,$Vz1,{99:3781,95:4092,101:$V89,102:$VR,103:$VS,104:$VT}),o($V88,$VG1),o($V88,$VH1),o($V88,$VI1),o($V88,$VJ1),{100:[1,4093]},o($V88,$VT1),{70:[1,4094]},o($Vz7,$Vs2,{99:3404,95:4095,101:$VJ8,102:$VR,103:$VS,104:$VT}),o($Vy7,$Vt2),o($VM6,$Vu2,{90:4096,95:4097,91:4098,99:4099,105:4101,107:4102,101:$Vv9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vw2,{90:4096,95:4097,91:4098,99:4099,105:4101,107:4102,101:$Vv9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vx2,{90:4096,95:4097,91:4098,99:4099,105:4101,107:4102,101:$Vv9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE7,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4103],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4104,121:$VW2,148:$VX2,194:$VY2}),o($VB7,$VA2),o($VB7,$Vw),o($VB7,$Vx),o($VB7,$Vn),o($VB7,$Vo),o($VB7,$Vy),o($VB7,$Vp),o($VB7,$Vq),o($Vy7,$V13),o($VE7,$V23),o($VE7,$V33),o($VE7,$V43),o($VE7,$V53),{111:[1,4105]},o($VE7,$Va3),o($VM6,$Vk5),{19:[1,4108],21:[1,4111],22:4107,87:4106,219:4109,220:[1,4110]},o($Vw9,$Vp2,{83:4112,84:4113,197:4114,195:$Vx9}),o($Vr,$Vs,{46:4116,47:4117,55:4118,59:4119,40:4120,43:$Vt}),o($Vg8,$VG8),o($Vh8,$VN6,{60:4121}),o($VI,$VJ,{63:4122,73:4123,75:4124,76:4125,92:4128,94:4129,87:4131,88:4132,89:4133,78:4134,44:4135,95:4139,22:4140,91:4142,118:4143,99:4147,219:4150,105:4151,107:4152,19:[1,4149],21:[1,4154],69:[1,4126],71:[1,4127],79:[1,4144],80:[1,4145],81:[1,4146],85:[1,4130],96:[1,4136],97:[1,4137],98:[1,4138],101:$Vy9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4141],220:[1,4153]}),o($Vh8,$VI8),o($VI,$VJ,{63:4155,73:4156,75:4157,76:4158,92:4161,94:4162,87:4164,88:4165,89:4166,78:4167,44:4168,95:4172,22:4173,91:4175,118:4176,99:4180,219:4183,105:4184,107:4185,19:[1,4182],21:[1,4187],69:[1,4159],71:[1,4160],79:[1,4177],80:[1,4178],81:[1,4179],85:[1,4163],96:[1,4169],97:[1,4170],98:[1,4171],101:$Vz9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4174],220:[1,4186]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4188,121:$VW2,148:$VX2,194:$VY2}),o($Vh8,$VA2),o($Vh8,$Vw),o($Vh8,$Vx),o($Vh8,$Vn),o($Vh8,$Vo),o($Vh8,$Vy),o($Vh8,$Vp),o($Vh8,$Vq),o($Vh8,$Vs2,{99:3451,95:4189,101:$VN8,102:$VR,103:$VS,104:$VT}),o($Va9,$Vt2),o($Va9,$V13),o($Vh8,$VK8),o($VO8,$VP3),o($VQ8,$VQ3),o($VQ8,$VR3),o($VQ8,$VS3),{100:[1,4190]},o($VQ8,$VT1),{100:[1,4192],106:4191,108:[1,4193],109:[1,4194],110:4195,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4196]},o($VQ8,$VU3),{121:[1,4197]},{19:[1,4200],21:[1,4203],22:4199,87:4198,219:4201,220:[1,4202]},o($Vw9,$Vp2,{84:4113,197:4114,83:4204,195:$Vx9}),o($VG,$VT3),{121:[1,4205]},o($VG,$VH3),o($Vh2,$VP3),o($Vo2,$VO4),{19:$Vi,21:$Vj,22:4206,219:45,220:$Vk},{19:$VA9,21:$VB9,22:4208,100:[1,4219],108:[1,4220],109:[1,4221],110:4218,186:4209,196:4207,201:4212,202:4213,203:4214,206:4217,209:[1,4222],210:[1,4223],211:[1,4228],212:[1,4229],213:[1,4230],214:[1,4231],215:[1,4224],216:[1,4225],217:[1,4226],218:[1,4227],219:4211,220:$VC9},o($Vq2,$VO4),{19:$Vi,21:$Vj,22:4232,219:45,220:$Vk},{19:$VD9,21:$VE9,22:4234,100:[1,4245],108:[1,4246],109:[1,4247],110:4244,186:4235,196:4233,201:4238,202:4239,203:4240,206:4243,209:[1,4248],210:[1,4249],211:[1,4254],212:[1,4255],213:[1,4256],214:[1,4257],215:[1,4250],216:[1,4251],217:[1,4252],218:[1,4253],219:4237,220:$VF9},o($VA1,$V13),o($VA1,$V23),o($VA1,$V33),o($VA1,$V43),o($VA1,$V53),{111:[1,4258]},o($VA1,$Va3),o($Vz2,$VO4),{19:$Vi,21:$Vj,22:4259,219:45,220:$Vk},{19:$VG9,21:$VH9,22:4261,100:[1,4272],108:[1,4273],109:[1,4274],110:4271,186:4262,196:4260,201:4265,202:4266,203:4267,206:4270,209:[1,4275],210:[1,4276],211:[1,4281],212:[1,4282],213:[1,4283],214:[1,4284],215:[1,4277],216:[1,4278],217:[1,4279],218:[1,4280],219:4264,220:$VI9},o($VD1,$Vk5),o($VN1,$VD5),o($VN1,$VK1),o($VN1,$Vn),o($VN1,$Vo),o($VN1,$Vp),o($VN1,$Vq),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$VV8,21:$VW8,22:4286,87:4285,219:3570,220:$VX8},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$VY8,21:$VZ8,22:4288,87:4287,219:3596,220:$V_8},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$V$8,21:$V09,22:4290,87:4289,219:3623,220:$V19},o($VA3,$Vk5),{198:[1,4293],199:4291,200:[1,4292]},o($Vz3,$VP5),o($Vz3,$VQ5),o($Vz3,$VR5),o($Vz3,$Vn),o($Vz3,$Vo),o($Vz3,$VX3),o($Vz3,$VY3),o($Vz3,$VZ3),o($Vz3,$Vp),o($Vz3,$Vq),o($Vz3,$V_3),o($Vz3,$V$3,{207:4294,208:4295,111:[1,4296]}),o($Vz3,$V04),o($Vz3,$V14),o($Vz3,$V24),o($Vz3,$V34),o($Vz3,$V44),o($Vz3,$V54),o($Vz3,$V64),o($Vz3,$V74),o($Vz3,$V84),o($Ve7,$V63),o($Ve7,$V73),o($Ve7,$V83),o($Ve7,$V93),{198:[1,4299],199:4297,200:[1,4298]},o($VA3,$VP5),o($VA3,$VQ5),o($VA3,$VR5),o($VA3,$Vn),o($VA3,$Vo),o($VA3,$VX3),o($VA3,$VY3),o($VA3,$VZ3),o($VA3,$Vp),o($VA3,$Vq),o($VA3,$V_3),o($VA3,$V$3,{207:4300,208:4301,111:[1,4302]}),o($VA3,$V04),o($VA3,$V14),o($VA3,$V24),o($VA3,$V34),o($VA3,$V44),o($VA3,$V54),o($VA3,$V64),o($VA3,$V74),o($VA3,$V84),o($Vf7,$V63),o($Vf7,$V73),o($Vf7,$V83),o($Vf7,$V93),{19:[1,4305],21:[1,4308],22:4304,87:4303,219:4306,220:[1,4307]},{198:[1,4311],199:4309,200:[1,4310]},o($VB3,$VP5),o($VB3,$VQ5),o($VB3,$VR5),o($VB3,$Vn),o($VB3,$Vo),o($VB3,$VX3),o($VB3,$VY3),o($VB3,$VZ3),o($VB3,$Vp),o($VB3,$Vq),o($VB3,$V_3),o($VB3,$V$3,{207:4312,208:4313,111:[1,4314]}),o($VB3,$V04),o($VB3,$V14),o($VB3,$V24),o($VB3,$V34),o($VB3,$V44),o($VB3,$V54),o($VB3,$V64),o($VB3,$V74),o($VB3,$V84),o($Vg7,$V63),o($Vg7,$V73),o($Vg7,$V83),o($Vg7,$V93),{198:[1,4317],199:4315,200:[1,4316]},o($Vi7,$VP5),o($Vi7,$VQ5),o($Vi7,$VR5),o($Vi7,$Vn),o($Vi7,$Vo),o($Vi7,$VX3),o($Vi7,$VY3),o($Vi7,$VZ3),o($Vi7,$Vp),o($Vi7,$Vq),o($Vi7,$V_3),o($Vi7,$V$3,{207:4318,208:4319,111:[1,4320]}),o($Vi7,$V04),o($Vi7,$V14),o($Vi7,$V24),o($Vi7,$V34),o($Vi7,$V44),o($Vi7,$V54),o($Vi7,$V64),o($Vi7,$V74),o($Vi7,$V84),o($VJ9,$V63),o($VJ9,$V73),o($VJ9,$V83),o($VJ9,$V93),o($V49,$V28),o($Vr,$Vs,{55:4321,59:4322,40:4323,43:$Vt}),o($V59,$V38),o($Vr,$Vs,{59:4324,40:4325,43:$Vt}),o($V59,$V48),o($V59,$V58),o($V59,$VC7),o($V59,$VD7),{119:[1,4326],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V59,$VE1),o($V59,$VF1),{19:[1,4330],21:[1,4334],22:4328,33:4327,205:4329,219:4331,220:[1,4333],221:[1,4332]},o($V59,$V68),o($V59,$V78),o($VK9,$Vy1,{93:4335}),o($V59,$Vz1,{99:4030,95:4336,101:$Vo9,102:$VR,103:$VS,104:$VT}),o($VK9,$VG1),o($VK9,$VH1),o($VK9,$VI1),o($VK9,$VJ1),{100:[1,4337]},o($VK9,$VT1),{70:[1,4338]},o($Vq9,$Vs2,{99:3713,95:4339,101:$V69,102:$VR,103:$VS,104:$VT}),o($Vp9,$Vt2),o($V59,$Vu2,{90:4340,95:4341,91:4342,99:4343,105:4345,107:4346,101:$VL9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vw2,{90:4340,95:4341,91:4342,99:4343,105:4345,107:4346,101:$VL9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vx2,{90:4340,95:4341,91:4342,99:4343,105:4345,107:4346,101:$VL9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt9,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4347],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4348,121:$VW2,148:$VX2,194:$VY2}),o($Vs9,$VA2),o($Vs9,$Vw),o($Vs9,$Vx),o($Vs9,$Vn),o($Vs9,$Vo),o($Vs9,$Vy),o($Vs9,$Vp),o($Vs9,$Vq),o($Vp9,$V13),o($Vt9,$V23),o($Vt9,$V33),o($Vt9,$V43),o($Vt9,$V53),{111:[1,4349]},o($Vt9,$Va3),o($VM6,$VI8),o($VI,$VJ,{63:4350,73:4351,75:4352,76:4353,92:4356,94:4357,87:4359,88:4360,89:4361,78:4362,44:4363,95:4367,22:4368,91:4370,118:4371,99:4375,219:4378,105:4379,107:4380,19:[1,4377],21:[1,4382],69:[1,4354],71:[1,4355],79:[1,4372],80:[1,4373],81:[1,4374],85:[1,4358],96:[1,4364],97:[1,4365],98:[1,4366],101:$VM9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4369],220:[1,4381]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4383,121:$VW2,148:$VX2,194:$VY2}),o($VM6,$VA2),o($VM6,$Vw),o($VM6,$Vx),o($VM6,$Vn),o($VM6,$Vo),o($VM6,$Vy),o($VM6,$Vp),o($VM6,$Vq),o($VM6,$Vs2,{99:3739,95:4384,101:$V79,102:$VR,103:$VS,104:$VT}),o($V88,$Vt2),o($V88,$V13),o($VM6,$VK8),o($Vy7,$VP3),o($VA7,$VQ3),o($VA7,$VR3),o($VA7,$VS3),{100:[1,4385]},o($VA7,$VT1),{100:[1,4387],106:4386,108:[1,4388],109:[1,4389],110:4390,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4391]},o($VA7,$VU3),{121:[1,4392]},{19:[1,4395],21:[1,4398],22:4394,87:4393,219:4396,220:[1,4397]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4399,121:$VW2,148:$VX2,194:$VY2}),o($VM6,$VA2),o($VM6,$Vw),o($VM6,$Vx),o($VM6,$Vn),o($VM6,$Vo),o($VM6,$Vy),o($VM6,$Vp),o($VM6,$Vq),o($VM6,$Vs2,{99:3781,95:4400,101:$V89,102:$VR,103:$VS,104:$VT}),o($V88,$Vt2),o($V88,$V13),o($VM6,$VK8),o($Vy7,$VP3),o($VA7,$VQ3),o($VA7,$VR3),o($VA7,$VS3),{100:[1,4401]},o($VA7,$VT1),{100:[1,4403],106:4402,108:[1,4404],109:[1,4405],110:4406,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4407]},o($VA7,$VU3),{121:[1,4408]},{19:[1,4411],21:[1,4414],22:4410,87:4409,219:4412,220:[1,4413]},o($VA7,$VD5),o($VA7,$VK1),o($VA7,$Vn),o($VA7,$Vo),o($VA7,$Vp),o($VA7,$Vq),o($V96,$V29),o($VL8,$VI3),o($V96,$VJ3,{31:4415,198:[1,4416]}),{19:$VK3,21:$VL3,22:643,129:4417,204:$VM3,219:646,220:$VN3},o($VL8,$V39),o($VL8,$VJ6),o($VN9,$VL6,{56:4418}),o($VO9,$VN6,{60:4419}),o($VI,$VJ,{63:4420,73:4421,75:4422,76:4423,92:4426,94:4427,87:4429,88:4430,89:4431,78:4432,44:4433,95:4437,22:4438,91:4440,118:4441,99:4445,219:4448,105:4449,107:4450,19:[1,4447],21:[1,4452],69:[1,4424],71:[1,4425],79:[1,4442],80:[1,4443],81:[1,4444],85:[1,4428],96:[1,4434],97:[1,4435],98:[1,4436],101:$VP9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4439],220:[1,4451]}),o($Vg8,$Vr7,{61:4453,53:[1,4454]}),o($Vh8,$Vs7),o($Vh8,$Vt7,{74:4455,76:4456,78:4457,44:4458,118:4459,79:[1,4460],80:[1,4461],81:[1,4462],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($Vh8,$Vu7),o($Vh8,$Vv7,{77:4463,73:4464,92:4465,94:4466,95:4470,99:4471,96:[1,4467],97:[1,4468],98:[1,4469],101:$VQ9,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4473,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vh8,$Vx7),o($VO8,$Vy1,{93:4474}),o($VP8,$Vz1,{99:4147,95:4475,101:$Vy9,102:$VR,103:$VS,104:$VT}),o($VQ8,$VB1,{86:4476}),o($VQ8,$VB1,{86:4477}),o($VQ8,$VB1,{86:4478}),o($Vh8,$VC1,{105:4151,107:4152,91:4479,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VR8,$VC7),o($VR8,$VD7),o($VO8,$VG1),o($VO8,$VH1),o($VO8,$VI1),o($VO8,$VJ1),o($VQ8,$VK1),o($VL1,$VM1,{167:4480}),o($VS8,$VO1),{119:[1,4481],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VR8,$VE1),o($VR8,$VF1),{19:[1,4485],21:[1,4489],22:4483,33:4482,205:4484,219:4486,220:[1,4488],221:[1,4487]},{100:[1,4490]},o($VO8,$VT1),o($VQ8,$Vn),o($VQ8,$Vo),{100:[1,4492],106:4491,108:[1,4493],109:[1,4494],110:4495,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4496]},o($VQ8,$Vp),o($VQ8,$Vq),o($Vh8,$Vs7),o($Vh8,$Vt7,{74:4497,76:4498,78:4499,44:4500,118:4501,79:[1,4502],80:[1,4503],81:[1,4504],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($Vh8,$Vu7),o($Vh8,$Vv7,{77:4505,73:4506,92:4507,94:4508,95:4512,99:4513,96:[1,4509],97:[1,4510],98:[1,4511],101:$VR9,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4515,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vh8,$Vx7),o($VO8,$Vy1,{93:4516}),o($VP8,$Vz1,{99:4180,95:4517,101:$Vz9,102:$VR,103:$VS,104:$VT}),o($VQ8,$VB1,{86:4518}),o($VQ8,$VB1,{86:4519}),o($VQ8,$VB1,{86:4520}),o($Vh8,$VC1,{105:4184,107:4185,91:4521,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VR8,$VC7),o($VR8,$VD7),o($VO8,$VG1),o($VO8,$VH1),o($VO8,$VI1),o($VO8,$VJ1),o($VQ8,$VK1),o($VL1,$VM1,{167:4522}),o($VS8,$VO1),{119:[1,4523],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VR8,$VE1),o($VR8,$VF1),{19:[1,4527],21:[1,4531],22:4525,33:4524,205:4526,219:4528,220:[1,4530],221:[1,4529]},{100:[1,4532]},o($VO8,$VT1),o($VQ8,$Vn),o($VQ8,$Vo),{100:[1,4534],106:4533,108:[1,4535],109:[1,4536],110:4537,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4538]},o($VQ8,$Vp),o($VQ8,$Vq),{121:[1,4539]},o($Va9,$VP3),o($VQ8,$V13),o($VQ8,$V23),o($VQ8,$V33),o($VQ8,$V43),o($VQ8,$V53),{111:[1,4540]},o($VQ8,$Va3),o($VR8,$Vk5),o($VS8,$VD5),o($VS8,$VK1),o($VS8,$Vn),o($VS8,$Vo),o($VS8,$Vp),o($VS8,$Vq),o($V96,$V99),o($Vt1,$Vk5),{198:[1,4543],199:4541,200:[1,4542]},o($Vr1,$VP5),o($Vr1,$VQ5),o($Vr1,$VR5),o($Vr1,$Vn),o($Vr1,$Vo),o($Vr1,$VX3),o($Vr1,$VY3),o($Vr1,$VZ3),o($Vr1,$Vp),o($Vr1,$Vq),o($Vr1,$V_3),o($Vr1,$V$3,{207:4544,208:4545,111:[1,4546]}),o($Vr1,$V04),o($Vr1,$V14),o($Vr1,$V24),o($Vr1,$V34),o($Vr1,$V44),o($Vr1,$V54),o($Vr1,$V64),o($Vr1,$V74),o($Vr1,$V84),o($VS5,$V63),o($VS5,$V73),o($VS5,$V83),o($VS5,$V93),{198:[1,4549],199:4547,200:[1,4548]},o($Vt1,$VP5),o($Vt1,$VQ5),o($Vt1,$VR5),o($Vt1,$Vn),o($Vt1,$Vo),o($Vt1,$VX3),o($Vt1,$VY3),o($Vt1,$VZ3),o($Vt1,$Vp),o($Vt1,$Vq),o($Vt1,$V_3),o($Vt1,$V$3,{207:4550,208:4551,111:[1,4552]}),o($Vt1,$V04),o($Vt1,$V14),o($Vt1,$V24),o($Vt1,$V34),o($Vt1,$V44),o($Vt1,$V54),o($Vt1,$V64),o($Vt1,$V74),o($Vt1,$V84),o($VT5,$V63),o($VT5,$V73),o($VT5,$V83),o($VT5,$V93),{19:[1,4555],21:[1,4558],22:4554,87:4553,219:4556,220:[1,4557]},{198:[1,4561],199:4559,200:[1,4560]},o($VD1,$VP5),o($VD1,$VQ5),o($VD1,$VR5),o($VD1,$Vn),o($VD1,$Vo),o($VD1,$VX3),o($VD1,$VY3),o($VD1,$VZ3),o($VD1,$Vp),o($VD1,$Vq),o($VD1,$V_3),o($VD1,$V$3,{207:4562,208:4563,111:[1,4564]}),o($VD1,$V04),o($VD1,$V14),o($VD1,$V24),o($VD1,$V34),o($VD1,$V44),o($VD1,$V54),o($VD1,$V64),o($VD1,$V74),o($VD1,$V84),o($VU5,$V63),o($VU5,$V73),o($VU5,$V83),o($VU5,$V93),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($VH4,$V71),o($VH4,$V81),o($VH4,$V91),o($Vz3,$Vi5),o($Vz3,$Vj5),{19:$Vc9,21:$Vd9,22:4566,87:4565,219:3910,220:$Ve9},o($VI4,$V71),o($VI4,$V81),o($VI4,$V91),o($VA3,$Vi5),o($VA3,$Vj5),{19:$Vf9,21:$Vg9,22:4568,87:4567,219:3936,220:$Vh9},o($VD3,$VD5),o($VD3,$VK1),o($VD3,$Vn),o($VD3,$Vo),o($VD3,$Vp),o($VD3,$Vq),o($VK4,$V71),o($VK4,$V81),o($VK4,$V91),o($VB3,$Vi5),o($VB3,$Vj5),{19:$Vi9,21:$Vj9,22:4570,87:4569,219:3963,220:$Vk9},o($VE8,$V71),o($VE8,$V81),o($VE8,$V91),o($Vi7,$Vi5),o($Vi7,$Vj5),{19:$Vl9,21:$Vm9,22:4572,87:4571,219:3989,220:$Vn9},o($V49,$VG8),o($V59,$VN6,{60:4573}),o($VI,$VJ,{63:4574,73:4575,75:4576,76:4577,92:4580,94:4581,87:4583,88:4584,89:4585,78:4586,44:4587,95:4591,22:4592,91:4594,118:4595,99:4599,219:4602,105:4603,107:4604,19:[1,4601],21:[1,4606],69:[1,4578],71:[1,4579],79:[1,4596],80:[1,4597],81:[1,4598],85:[1,4582],96:[1,4588],97:[1,4589],98:[1,4590],101:$VS9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4593],220:[1,4605]}),o($V59,$VI8),o($VI,$VJ,{63:4607,73:4608,75:4609,76:4610,92:4613,94:4614,87:4616,88:4617,89:4618,78:4619,44:4620,95:4624,22:4625,91:4627,118:4628,99:4632,219:4635,105:4636,107:4637,19:[1,4634],21:[1,4639],69:[1,4611],71:[1,4612],79:[1,4629],80:[1,4630],81:[1,4631],85:[1,4615],96:[1,4621],97:[1,4622],98:[1,4623],101:$VT9,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,4626],220:[1,4638]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4640,121:$VW2,148:$VX2,194:$VY2}),o($V59,$VA2),o($V59,$Vw),o($V59,$Vx),o($V59,$Vn),o($V59,$Vo),o($V59,$Vy),o($V59,$Vp),o($V59,$Vq),o($V59,$Vs2,{99:4030,95:4641,101:$Vo9,102:$VR,103:$VS,104:$VT}),o($VK9,$Vt2),o($VK9,$V13),o($V59,$VK8),o($Vp9,$VP3),o($Vr9,$VQ3),o($Vr9,$VR3),o($Vr9,$VS3),{100:[1,4642]},o($Vr9,$VT1),{100:[1,4644],106:4643,108:[1,4645],109:[1,4646],110:4647,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4648]},o($Vr9,$VU3),{121:[1,4649]},{19:[1,4652],21:[1,4655],22:4651,87:4650,219:4653,220:[1,4654]},o($VM6,$Vs7),o($VM6,$Vt7,{74:4656,76:4657,78:4658,44:4659,118:4660,79:[1,4661],80:[1,4662],81:[1,4663],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VM6,$Vu7),o($VM6,$Vv7,{77:4664,73:4665,92:4666,94:4667,95:4671,99:4672,96:[1,4668],97:[1,4669],98:[1,4670],101:$VU9,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4674,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VM6,$Vx7),o($Vy7,$Vy1,{93:4675}),o($Vz7,$Vz1,{99:4375,95:4676,101:$VM9,102:$VR,103:$VS,104:$VT}),o($VA7,$VB1,{86:4677}),o($VA7,$VB1,{86:4678}),o($VA7,$VB1,{86:4679}),o($VM6,$VC1,{105:4379,107:4380,91:4680,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VB7,$VC7),o($VB7,$VD7),o($Vy7,$VG1),o($Vy7,$VH1),o($Vy7,$VI1),o($Vy7,$VJ1),o($VA7,$VK1),o($VL1,$VM1,{167:4681}),o($VE7,$VO1),{119:[1,4682],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VB7,$VE1),o($VB7,$VF1),{19:[1,4686],21:[1,4690],22:4684,33:4683,205:4685,219:4687,220:[1,4689],221:[1,4688]},{100:[1,4691]},o($Vy7,$VT1),o($VA7,$Vn),o($VA7,$Vo),{100:[1,4693],106:4692,108:[1,4694],109:[1,4695],110:4696,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4697]},o($VA7,$Vp),o($VA7,$Vq),{121:[1,4698]},o($V88,$VP3),o($VA7,$V13),o($VA7,$V23),o($VA7,$V33),o($VA7,$V43),o($VA7,$V53),{111:[1,4699]},o($VA7,$Va3),o($VB7,$Vk5),o($VE7,$VD5),o($VE7,$VK1),o($VE7,$Vn),o($VE7,$Vo),o($VE7,$Vp),o($VE7,$Vq),{121:[1,4700]},o($V88,$VP3),o($VA7,$V13),o($VA7,$V23),o($VA7,$V33),o($VA7,$V43),o($VA7,$V53),{111:[1,4701]},o($VA7,$Va3),o($VB7,$Vk5),o($VE7,$VD5),o($VE7,$VK1),o($VE7,$Vn),o($VE7,$Vo),o($VE7,$Vp),o($VE7,$Vq),o($Vw9,$VO4),{19:$Vi,21:$Vj,22:4702,219:45,220:$Vk},{19:$VV9,21:$VW9,22:4704,100:[1,4715],108:[1,4716],109:[1,4717],110:4714,186:4705,196:4703,201:4708,202:4709,203:4710,206:4713,209:[1,4718],210:[1,4719],211:[1,4724],212:[1,4725],213:[1,4726],214:[1,4727],215:[1,4720],216:[1,4721],217:[1,4722],218:[1,4723],219:4707,220:$VX9},o($VL8,$Vq7,{57:4728,51:[1,4729]}),o($VN9,$Vr7,{61:4730,53:[1,4731]}),o($VO9,$Vs7),o($VO9,$Vt7,{74:4732,76:4733,78:4734,44:4735,118:4736,79:[1,4737],80:[1,4738],81:[1,4739],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VO9,$Vu7),o($VO9,$Vv7,{77:4740,73:4741,92:4742,94:4743,95:4747,99:4748,96:[1,4744],97:[1,4745],98:[1,4746],101:$VY9,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4750,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VO9,$Vx7),o($VZ9,$Vy1,{93:4751}),o($V_9,$Vz1,{99:4445,95:4752,101:$VP9,102:$VR,103:$VS,104:$VT}),o($V$9,$VB1,{86:4753}),o($V$9,$VB1,{86:4754}),o($V$9,$VB1,{86:4755}),o($VO9,$VC1,{105:4449,107:4450,91:4756,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V0a,$VC7),o($V0a,$VD7),o($VZ9,$VG1),o($VZ9,$VH1),o($VZ9,$VI1),o($VZ9,$VJ1),o($V$9,$VK1),o($VL1,$VM1,{167:4757}),o($V1a,$VO1),{119:[1,4758],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V0a,$VE1),o($V0a,$VF1),{19:[1,4762],21:[1,4766],22:4760,33:4759,205:4761,219:4763,220:[1,4765],221:[1,4764]},{100:[1,4767]},o($VZ9,$VT1),o($V$9,$Vn),o($V$9,$Vo),{100:[1,4769],106:4768,108:[1,4770],109:[1,4771],110:4772,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4773]},o($V$9,$Vp),o($V$9,$Vq),o($Vh8,$V38),o($Vr,$Vs,{59:4774,40:4775,43:$Vt}),o($Vh8,$V48),o($Vh8,$V58),o($Vh8,$VC7),o($Vh8,$VD7),{119:[1,4776],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vh8,$VE1),o($Vh8,$VF1),{19:[1,4780],21:[1,4784],22:4778,33:4777,205:4779,219:4781,220:[1,4783],221:[1,4782]},o($Vh8,$V68),o($Vh8,$V78),o($Va9,$Vy1,{93:4785}),o($Vh8,$Vz1,{99:4471,95:4786,101:$VQ9,102:$VR,103:$VS,104:$VT}),o($Va9,$VG1),o($Va9,$VH1),o($Va9,$VI1),o($Va9,$VJ1),{100:[1,4787]},o($Va9,$VT1),{70:[1,4788]},o($VP8,$Vs2,{99:4147,95:4789,101:$Vy9,102:$VR,103:$VS,104:$VT}),o($VO8,$Vt2),o($Vh8,$Vu2,{90:4790,95:4791,91:4792,99:4793,105:4795,107:4796,101:$V2a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vw2,{90:4790,95:4791,91:4792,99:4793,105:4795,107:4796,101:$V2a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vx2,{90:4790,95:4791,91:4792,99:4793,105:4795,107:4796,101:$V2a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VS8,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4797],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4798,121:$VW2,148:$VX2,194:$VY2}),o($VR8,$VA2),o($VR8,$Vw),o($VR8,$Vx),o($VR8,$Vn),o($VR8,$Vo),o($VR8,$Vy),o($VR8,$Vp),o($VR8,$Vq),o($VO8,$V13),o($VS8,$V23),o($VS8,$V33),o($VS8,$V43),o($VS8,$V53),{111:[1,4799]},o($VS8,$Va3),o($Vh8,$V48),o($Vh8,$V58),o($Vh8,$VC7),o($Vh8,$VD7),{119:[1,4800],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vh8,$VE1),o($Vh8,$VF1),{19:[1,4804],21:[1,4808],22:4802,33:4801,205:4803,219:4805,220:[1,4807],221:[1,4806]},o($Vh8,$V68),o($Vh8,$V78),o($Va9,$Vy1,{93:4809}),o($Vh8,$Vz1,{99:4513,95:4810,101:$VR9,102:$VR,103:$VS,104:$VT}),o($Va9,$VG1),o($Va9,$VH1),o($Va9,$VI1),o($Va9,$VJ1),{100:[1,4811]},o($Va9,$VT1),{70:[1,4812]},o($VP8,$Vs2,{99:4180,95:4813,101:$Vz9,102:$VR,103:$VS,104:$VT}),o($VO8,$Vt2),o($Vh8,$Vu2,{90:4814,95:4815,91:4816,99:4817,105:4819,107:4820,101:$V3a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vw2,{90:4814,95:4815,91:4816,99:4817,105:4819,107:4820,101:$V3a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vx2,{90:4814,95:4815,91:4816,99:4817,105:4819,107:4820,101:$V3a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VS8,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4821],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4822,121:$VW2,148:$VX2,194:$VY2}),o($VR8,$VA2),o($VR8,$Vw),o($VR8,$Vx),o($VR8,$Vn),o($VR8,$Vo),o($VR8,$Vy),o($VR8,$Vp),o($VR8,$Vq),o($VO8,$V13),o($VS8,$V23),o($VS8,$V33),o($VS8,$V43),o($VS8,$V53),{111:[1,4823]},o($VS8,$Va3),o($Vh8,$Vk5),{19:[1,4826],21:[1,4829],22:4825,87:4824,219:4827,220:[1,4828]},o($Vo2,$V71),o($Vo2,$V81),o($Vo2,$V91),o($Vr1,$Vi5),o($Vr1,$Vj5),{19:$VA9,21:$VB9,22:4831,87:4830,219:4211,220:$VC9},o($Vq2,$V71),o($Vq2,$V81),o($Vq2,$V91),o($Vt1,$Vi5),o($Vt1,$Vj5),{19:$VD9,21:$VE9,22:4833,87:4832,219:4237,220:$VF9},o($VA1,$VD5),o($VA1,$VK1),o($VA1,$Vn),o($VA1,$Vo),o($VA1,$Vp),o($VA1,$Vq),o($Vz2,$V71),o($Vz2,$V81),o($Vz2,$V91),o($VD1,$Vi5),o($VD1,$Vj5),{19:$VG9,21:$VH9,22:4835,87:4834,219:4264,220:$VI9},o($Vz3,$VZ5),o($Vz3,$VK1),o($VA3,$VZ5),o($VA3,$VK1),o($VB3,$VZ5),o($VB3,$VK1),o($Vi7,$VZ5),o($Vi7,$VK1),o($V49,$Vr7,{61:4836,53:[1,4837]}),o($V59,$Vs7),o($V59,$Vt7,{74:4838,76:4839,78:4840,44:4841,118:4842,79:[1,4843],80:[1,4844],81:[1,4845],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($V59,$Vu7),o($V59,$Vv7,{77:4846,73:4847,92:4848,94:4849,95:4853,99:4854,96:[1,4850],97:[1,4851],98:[1,4852],101:$V4a,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4856,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($V59,$Vx7),o($Vp9,$Vy1,{93:4857}),o($Vq9,$Vz1,{99:4599,95:4858,101:$VS9,102:$VR,103:$VS,104:$VT}),o($Vr9,$VB1,{86:4859}),o($Vr9,$VB1,{86:4860}),o($Vr9,$VB1,{86:4861}),o($V59,$VC1,{105:4603,107:4604,91:4862,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vs9,$VC7),o($Vs9,$VD7),o($Vp9,$VG1),o($Vp9,$VH1),o($Vp9,$VI1),o($Vp9,$VJ1),o($Vr9,$VK1),o($VL1,$VM1,{167:4863}),o($Vt9,$VO1),{119:[1,4864],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vs9,$VE1),o($Vs9,$VF1),{19:[1,4868],21:[1,4872],22:4866,33:4865,205:4867,219:4869,220:[1,4871],221:[1,4870]},{100:[1,4873]},o($Vp9,$VT1),o($Vr9,$Vn),o($Vr9,$Vo),{100:[1,4875],106:4874,108:[1,4876],109:[1,4877],110:4878,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4879]},o($Vr9,$Vp),o($Vr9,$Vq),o($V59,$Vs7),o($V59,$Vt7,{74:4880,76:4881,78:4882,44:4883,118:4884,79:[1,4885],80:[1,4886],81:[1,4887],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($V59,$Vu7),o($V59,$Vv7,{77:4888,73:4889,92:4890,94:4891,95:4895,99:4896,96:[1,4892],97:[1,4893],98:[1,4894],101:$V5a,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:4898,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($V59,$Vx7),o($Vp9,$Vy1,{93:4899}),o($Vq9,$Vz1,{99:4632,95:4900,101:$VT9,102:$VR,103:$VS,104:$VT}),o($Vr9,$VB1,{86:4901}),o($Vr9,$VB1,{86:4902}),o($Vr9,$VB1,{86:4903}),o($V59,$VC1,{105:4636,107:4637,91:4904,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vs9,$VC7),o($Vs9,$VD7),o($Vp9,$VG1),o($Vp9,$VH1),o($Vp9,$VI1),o($Vp9,$VJ1),o($Vr9,$VK1),o($VL1,$VM1,{167:4905}),o($Vt9,$VO1),{119:[1,4906],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vs9,$VE1),o($Vs9,$VF1),{19:[1,4910],21:[1,4914],22:4908,33:4907,205:4909,219:4911,220:[1,4913],221:[1,4912]},{100:[1,4915]},o($Vp9,$VT1),o($Vr9,$Vn),o($Vr9,$Vo),{100:[1,4917],106:4916,108:[1,4918],109:[1,4919],110:4920,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,4921]},o($Vr9,$Vp),o($Vr9,$Vq),{121:[1,4922]},o($VK9,$VP3),o($Vr9,$V13),o($Vr9,$V23),o($Vr9,$V33),o($Vr9,$V43),o($Vr9,$V53),{111:[1,4923]},o($Vr9,$Va3),o($Vs9,$Vk5),o($Vt9,$VD5),o($Vt9,$VK1),o($Vt9,$Vn),o($Vt9,$Vo),o($Vt9,$Vp),o($Vt9,$Vq),o($VM6,$V48),o($VM6,$V58),o($VM6,$VC7),o($VM6,$VD7),{119:[1,4924],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VM6,$VE1),o($VM6,$VF1),{19:[1,4928],21:[1,4932],22:4926,33:4925,205:4927,219:4929,220:[1,4931],221:[1,4930]},o($VM6,$V68),o($VM6,$V78),o($V88,$Vy1,{93:4933}),o($VM6,$Vz1,{99:4672,95:4934,101:$VU9,102:$VR,103:$VS,104:$VT}),o($V88,$VG1),o($V88,$VH1),o($V88,$VI1),o($V88,$VJ1),{100:[1,4935]},o($V88,$VT1),{70:[1,4936]},o($Vz7,$Vs2,{99:4375,95:4937,101:$VM9,102:$VR,103:$VS,104:$VT}),o($Vy7,$Vt2),o($VM6,$Vu2,{90:4938,95:4939,91:4940,99:4941,105:4943,107:4944,101:$V6a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vw2,{90:4938,95:4939,91:4940,99:4941,105:4943,107:4944,101:$V6a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VM6,$Vx2,{90:4938,95:4939,91:4940,99:4941,105:4943,107:4944,101:$V6a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VE7,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4945],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4946,121:$VW2,148:$VX2,194:$VY2}),o($VB7,$VA2),o($VB7,$Vw),o($VB7,$Vx),o($VB7,$Vn),o($VB7,$Vo),o($VB7,$Vy),o($VB7,$Vp),o($VB7,$Vq),o($Vy7,$V13),o($VE7,$V23),o($VE7,$V33),o($VE7,$V43),o($VE7,$V53),{111:[1,4947]},o($VE7,$Va3),o($VM6,$Vk5),{19:[1,4950],21:[1,4953],22:4949,87:4948,219:4951,220:[1,4952]},o($VM6,$Vk5),{19:[1,4956],21:[1,4959],22:4955,87:4954,219:4957,220:[1,4958]},{198:[1,4962],199:4960,200:[1,4961]},o($VL8,$VP5),o($VL8,$VQ5),o($VL8,$VR5),o($VL8,$Vn),o($VL8,$Vo),o($VL8,$VX3),o($VL8,$VY3),o($VL8,$VZ3),o($VL8,$Vp),o($VL8,$Vq),o($VL8,$V_3),o($VL8,$V$3,{207:4963,208:4964,111:[1,4965]}),o($VL8,$V04),o($VL8,$V14),o($VL8,$V24),o($VL8,$V34),o($VL8,$V44),o($VL8,$V54),o($VL8,$V64),o($VL8,$V74),o($VL8,$V84),o($V7a,$V63),o($V7a,$V73),o($V7a,$V83),o($V7a,$V93),o($VN9,$V28),o($Vr,$Vs,{55:4966,59:4967,40:4968,43:$Vt}),o($VO9,$V38),o($Vr,$Vs,{59:4969,40:4970,43:$Vt}),o($VO9,$V48),o($VO9,$V58),o($VO9,$VC7),o($VO9,$VD7),{119:[1,4971],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VO9,$VE1),o($VO9,$VF1),{19:[1,4975],21:[1,4979],22:4973,33:4972,205:4974,219:4976,220:[1,4978],221:[1,4977]},o($VO9,$V68),o($VO9,$V78),o($V8a,$Vy1,{93:4980}),o($VO9,$Vz1,{99:4748,95:4981,101:$VY9,102:$VR,103:$VS,104:$VT}),o($V8a,$VG1),o($V8a,$VH1),o($V8a,$VI1),o($V8a,$VJ1),{100:[1,4982]},o($V8a,$VT1),{70:[1,4983]},o($V_9,$Vs2,{99:4445,95:4984,101:$VP9,102:$VR,103:$VS,104:$VT}),o($VZ9,$Vt2),o($VO9,$Vu2,{90:4985,95:4986,91:4987,99:4988,105:4990,107:4991,101:$V9a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vw2,{90:4985,95:4986,91:4987,99:4988,105:4990,107:4991,101:$V9a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vx2,{90:4985,95:4986,91:4987,99:4988,105:4990,107:4991,101:$V9a,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V1a,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,4992],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:4993,121:$VW2,148:$VX2,194:$VY2}),o($V0a,$VA2),o($V0a,$Vw),o($V0a,$Vx),o($V0a,$Vn),o($V0a,$Vo),o($V0a,$Vy),o($V0a,$Vp),o($V0a,$Vq),o($VZ9,$V13),o($V1a,$V23),o($V1a,$V33),o($V1a,$V43),o($V1a,$V53),{111:[1,4994]},o($V1a,$Va3),o($Vh8,$VI8),o($VI,$VJ,{63:4995,73:4996,75:4997,76:4998,92:5001,94:5002,87:5004,88:5005,89:5006,78:5007,44:5008,95:5012,22:5013,91:5015,118:5016,99:5020,219:5023,105:5024,107:5025,19:[1,5022],21:[1,5027],69:[1,4999],71:[1,5000],79:[1,5017],80:[1,5018],81:[1,5019],85:[1,5003],96:[1,5009],97:[1,5010],98:[1,5011],101:$Vaa,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,5014],220:[1,5026]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5028,121:$VW2,148:$VX2,194:$VY2}),o($Vh8,$VA2),o($Vh8,$Vw),o($Vh8,$Vx),o($Vh8,$Vn),o($Vh8,$Vo),o($Vh8,$Vy),o($Vh8,$Vp),o($Vh8,$Vq),o($Vh8,$Vs2,{99:4471,95:5029,101:$VQ9,102:$VR,103:$VS,104:$VT}),o($Va9,$Vt2),o($Va9,$V13),o($Vh8,$VK8),o($VO8,$VP3),o($VQ8,$VQ3),o($VQ8,$VR3),o($VQ8,$VS3),{100:[1,5030]},o($VQ8,$VT1),{100:[1,5032],106:5031,108:[1,5033],109:[1,5034],110:5035,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5036]},o($VQ8,$VU3),{121:[1,5037]},{19:[1,5040],21:[1,5043],22:5039,87:5038,219:5041,220:[1,5042]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5044,121:$VW2,148:$VX2,194:$VY2}),o($Vh8,$VA2),o($Vh8,$Vw),o($Vh8,$Vx),o($Vh8,$Vn),o($Vh8,$Vo),o($Vh8,$Vy),o($Vh8,$Vp),o($Vh8,$Vq),o($Vh8,$Vs2,{99:4513,95:5045,101:$VR9,102:$VR,103:$VS,104:$VT}),o($Va9,$Vt2),o($Va9,$V13),o($Vh8,$VK8),o($VO8,$VP3),o($VQ8,$VQ3),o($VQ8,$VR3),o($VQ8,$VS3),{100:[1,5046]},o($VQ8,$VT1),{100:[1,5048],106:5047,108:[1,5049],109:[1,5050],110:5051,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5052]},o($VQ8,$VU3),{121:[1,5053]},{19:[1,5056],21:[1,5059],22:5055,87:5054,219:5057,220:[1,5058]},o($VQ8,$VD5),o($VQ8,$VK1),o($VQ8,$Vn),o($VQ8,$Vo),o($VQ8,$Vp),o($VQ8,$Vq),o($Vr1,$VZ5),o($Vr1,$VK1),o($Vt1,$VZ5),o($Vt1,$VK1),o($VD1,$VZ5),o($VD1,$VK1),o($V59,$V38),o($Vr,$Vs,{59:5060,40:5061,43:$Vt}),o($V59,$V48),o($V59,$V58),o($V59,$VC7),o($V59,$VD7),{119:[1,5062],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V59,$VE1),o($V59,$VF1),{19:[1,5066],21:[1,5070],22:5064,33:5063,205:5065,219:5067,220:[1,5069],221:[1,5068]},o($V59,$V68),o($V59,$V78),o($VK9,$Vy1,{93:5071}),o($V59,$Vz1,{99:4854,95:5072,101:$V4a,102:$VR,103:$VS,104:$VT}),o($VK9,$VG1),o($VK9,$VH1),o($VK9,$VI1),o($VK9,$VJ1),{100:[1,5073]},o($VK9,$VT1),{70:[1,5074]},o($Vq9,$Vs2,{99:4599,95:5075,101:$VS9,102:$VR,103:$VS,104:$VT}),o($Vp9,$Vt2),o($V59,$Vu2,{90:5076,95:5077,91:5078,99:5079,105:5081,107:5082,101:$Vba,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vw2,{90:5076,95:5077,91:5078,99:5079,105:5081,107:5082,101:$Vba,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vx2,{90:5076,95:5077,91:5078,99:5079,105:5081,107:5082,101:$Vba,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt9,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5083],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5084,121:$VW2,148:$VX2,194:$VY2}),o($Vs9,$VA2),o($Vs9,$Vw),o($Vs9,$Vx),o($Vs9,$Vn),o($Vs9,$Vo),o($Vs9,$Vy),o($Vs9,$Vp),o($Vs9,$Vq),o($Vp9,$V13),o($Vt9,$V23),o($Vt9,$V33),o($Vt9,$V43),o($Vt9,$V53),{111:[1,5085]},o($Vt9,$Va3),o($V59,$V48),o($V59,$V58),o($V59,$VC7),o($V59,$VD7),{119:[1,5086],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V59,$VE1),o($V59,$VF1),{19:[1,5090],21:[1,5094],22:5088,33:5087,205:5089,219:5091,220:[1,5093],221:[1,5092]},o($V59,$V68),o($V59,$V78),o($VK9,$Vy1,{93:5095}),o($V59,$Vz1,{99:4896,95:5096,101:$V5a,102:$VR,103:$VS,104:$VT}),o($VK9,$VG1),o($VK9,$VH1),o($VK9,$VI1),o($VK9,$VJ1),{100:[1,5097]},o($VK9,$VT1),{70:[1,5098]},o($Vq9,$Vs2,{99:4632,95:5099,101:$VT9,102:$VR,103:$VS,104:$VT}),o($Vp9,$Vt2),o($V59,$Vu2,{90:5100,95:5101,91:5102,99:5103,105:5105,107:5106,101:$Vca,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vw2,{90:5100,95:5101,91:5102,99:5103,105:5105,107:5106,101:$Vca,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vx2,{90:5100,95:5101,91:5102,99:5103,105:5105,107:5106,101:$Vca,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt9,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5107],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5108,121:$VW2,148:$VX2,194:$VY2}),o($Vs9,$VA2),o($Vs9,$Vw),o($Vs9,$Vx),o($Vs9,$Vn),o($Vs9,$Vo),o($Vs9,$Vy),o($Vs9,$Vp),o($Vs9,$Vq),o($Vp9,$V13),o($Vt9,$V23),o($Vt9,$V33),o($Vt9,$V43),o($Vt9,$V53),{111:[1,5109]},o($Vt9,$Va3),o($V59,$Vk5),{19:[1,5112],21:[1,5115],22:5111,87:5110,219:5113,220:[1,5114]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5116,121:$VW2,148:$VX2,194:$VY2}),o($VM6,$VA2),o($VM6,$Vw),o($VM6,$Vx),o($VM6,$Vn),o($VM6,$Vo),o($VM6,$Vy),o($VM6,$Vp),o($VM6,$Vq),o($VM6,$Vs2,{99:4672,95:5117,101:$VU9,102:$VR,103:$VS,104:$VT}),o($V88,$Vt2),o($V88,$V13),o($VM6,$VK8),o($Vy7,$VP3),o($VA7,$VQ3),o($VA7,$VR3),o($VA7,$VS3),{100:[1,5118]},o($VA7,$VT1),{100:[1,5120],106:5119,108:[1,5121],109:[1,5122],110:5123,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5124]},o($VA7,$VU3),{121:[1,5125]},{19:[1,5128],21:[1,5131],22:5127,87:5126,219:5129,220:[1,5130]},o($VA7,$VD5),o($VA7,$VK1),o($VA7,$Vn),o($VA7,$Vo),o($VA7,$Vp),o($VA7,$Vq),o($VA7,$VD5),o($VA7,$VK1),o($VA7,$Vn),o($VA7,$Vo),o($VA7,$Vp),o($VA7,$Vq),o($Vw9,$V71),o($Vw9,$V81),o($Vw9,$V91),o($VL8,$Vi5),o($VL8,$Vj5),{19:$VV9,21:$VW9,22:5133,87:5132,219:4707,220:$VX9},o($VN9,$VG8),o($VO9,$VN6,{60:5134}),o($VI,$VJ,{63:5135,73:5136,75:5137,76:5138,92:5141,94:5142,87:5144,88:5145,89:5146,78:5147,44:5148,95:5152,22:5153,91:5155,118:5156,99:5160,219:5163,105:5164,107:5165,19:[1,5162],21:[1,5167],69:[1,5139],71:[1,5140],79:[1,5157],80:[1,5158],81:[1,5159],85:[1,5143],96:[1,5149],97:[1,5150],98:[1,5151],101:$Vda,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,5154],220:[1,5166]}),o($VO9,$VI8),o($VI,$VJ,{63:5168,73:5169,75:5170,76:5171,92:5174,94:5175,87:5177,88:5178,89:5179,78:5180,44:5181,95:5185,22:5186,91:5188,118:5189,99:5193,219:5196,105:5197,107:5198,19:[1,5195],21:[1,5200],69:[1,5172],71:[1,5173],79:[1,5190],80:[1,5191],81:[1,5192],85:[1,5176],96:[1,5182],97:[1,5183],98:[1,5184],101:$Vea,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,5187],220:[1,5199]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5201,121:$VW2,148:$VX2,194:$VY2}),o($VO9,$VA2),o($VO9,$Vw),o($VO9,$Vx),o($VO9,$Vn),o($VO9,$Vo),o($VO9,$Vy),o($VO9,$Vp),o($VO9,$Vq),o($VO9,$Vs2,{99:4748,95:5202,101:$VY9,102:$VR,103:$VS,104:$VT}),o($V8a,$Vt2),o($V8a,$V13),o($VO9,$VK8),o($VZ9,$VP3),o($V$9,$VQ3),o($V$9,$VR3),o($V$9,$VS3),{100:[1,5203]},o($V$9,$VT1),{100:[1,5205],106:5204,108:[1,5206],109:[1,5207],110:5208,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5209]},o($V$9,$VU3),{121:[1,5210]},{19:[1,5213],21:[1,5216],22:5212,87:5211,219:5214,220:[1,5215]},o($Vh8,$Vs7),o($Vh8,$Vt7,{74:5217,76:5218,78:5219,44:5220,118:5221,79:[1,5222],80:[1,5223],81:[1,5224],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($Vh8,$Vu7),o($Vh8,$Vv7,{77:5225,73:5226,92:5227,94:5228,95:5232,99:5233,96:[1,5229],97:[1,5230],98:[1,5231],101:$Vfa,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:5235,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($Vh8,$Vx7),o($VO8,$Vy1,{93:5236}),o($VP8,$Vz1,{99:5020,95:5237,101:$Vaa,102:$VR,103:$VS,104:$VT}),o($VQ8,$VB1,{86:5238}),o($VQ8,$VB1,{86:5239}),o($VQ8,$VB1,{86:5240}),o($Vh8,$VC1,{105:5024,107:5025,91:5241,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VR8,$VC7),o($VR8,$VD7),o($VO8,$VG1),o($VO8,$VH1),o($VO8,$VI1),o($VO8,$VJ1),o($VQ8,$VK1),o($VL1,$VM1,{167:5242}),o($VS8,$VO1),{119:[1,5243],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VR8,$VE1),o($VR8,$VF1),{19:[1,5247],21:[1,5251],22:5245,33:5244,205:5246,219:5248,220:[1,5250],221:[1,5249]},{100:[1,5252]},o($VO8,$VT1),o($VQ8,$Vn),o($VQ8,$Vo),{100:[1,5254],106:5253,108:[1,5255],109:[1,5256],110:5257,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5258]},o($VQ8,$Vp),o($VQ8,$Vq),{121:[1,5259]},o($Va9,$VP3),o($VQ8,$V13),o($VQ8,$V23),o($VQ8,$V33),o($VQ8,$V43),o($VQ8,$V53),{111:[1,5260]},o($VQ8,$Va3),o($VR8,$Vk5),o($VS8,$VD5),o($VS8,$VK1),o($VS8,$Vn),o($VS8,$Vo),o($VS8,$Vp),o($VS8,$Vq),{121:[1,5261]},o($Va9,$VP3),o($VQ8,$V13),o($VQ8,$V23),o($VQ8,$V33),o($VQ8,$V43),o($VQ8,$V53),{111:[1,5262]},o($VQ8,$Va3),o($VR8,$Vk5),o($VS8,$VD5),o($VS8,$VK1),o($VS8,$Vn),o($VS8,$Vo),o($VS8,$Vp),o($VS8,$Vq),o($V59,$VI8),o($VI,$VJ,{63:5263,73:5264,75:5265,76:5266,92:5269,94:5270,87:5272,88:5273,89:5274,78:5275,44:5276,95:5280,22:5281,91:5283,118:5284,99:5288,219:5291,105:5292,107:5293,19:[1,5290],21:[1,5295],69:[1,5267],71:[1,5268],79:[1,5285],80:[1,5286],81:[1,5287],85:[1,5271],96:[1,5277],97:[1,5278],98:[1,5279],101:$Vga,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,5282],220:[1,5294]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5296,121:$VW2,148:$VX2,194:$VY2}),o($V59,$VA2),o($V59,$Vw),o($V59,$Vx),o($V59,$Vn),o($V59,$Vo),o($V59,$Vy),o($V59,$Vp),o($V59,$Vq),o($V59,$Vs2,{99:4854,95:5297,101:$V4a,102:$VR,103:$VS,104:$VT}),o($VK9,$Vt2),o($VK9,$V13),o($V59,$VK8),o($Vp9,$VP3),o($Vr9,$VQ3),o($Vr9,$VR3),o($Vr9,$VS3),{100:[1,5298]},o($Vr9,$VT1),{100:[1,5300],106:5299,108:[1,5301],109:[1,5302],110:5303,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5304]},o($Vr9,$VU3),{121:[1,5305]},{19:[1,5308],21:[1,5311],22:5307,87:5306,219:5309,220:[1,5310]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5312,121:$VW2,148:$VX2,194:$VY2}),o($V59,$VA2),o($V59,$Vw),o($V59,$Vx),o($V59,$Vn),o($V59,$Vo),o($V59,$Vy),o($V59,$Vp),o($V59,$Vq),o($V59,$Vs2,{99:4896,95:5313,101:$V5a,102:$VR,103:$VS,104:$VT}),o($VK9,$Vt2),o($VK9,$V13),o($V59,$VK8),o($Vp9,$VP3),o($Vr9,$VQ3),o($Vr9,$VR3),o($Vr9,$VS3),{100:[1,5314]},o($Vr9,$VT1),{100:[1,5316],106:5315,108:[1,5317],109:[1,5318],110:5319,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5320]},o($Vr9,$VU3),{121:[1,5321]},{19:[1,5324],21:[1,5327],22:5323,87:5322,219:5325,220:[1,5326]},o($Vr9,$VD5),o($Vr9,$VK1),o($Vr9,$Vn),o($Vr9,$Vo),o($Vr9,$Vp),o($Vr9,$Vq),{121:[1,5328]},o($V88,$VP3),o($VA7,$V13),o($VA7,$V23),o($VA7,$V33),o($VA7,$V43),o($VA7,$V53),{111:[1,5329]},o($VA7,$Va3),o($VB7,$Vk5),o($VE7,$VD5),o($VE7,$VK1),o($VE7,$Vn),o($VE7,$Vo),o($VE7,$Vp),o($VE7,$Vq),o($VL8,$VZ5),o($VL8,$VK1),o($VN9,$Vr7,{61:5330,53:[1,5331]}),o($VO9,$Vs7),o($VO9,$Vt7,{74:5332,76:5333,78:5334,44:5335,118:5336,79:[1,5337],80:[1,5338],81:[1,5339],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VO9,$Vu7),o($VO9,$Vv7,{77:5340,73:5341,92:5342,94:5343,95:5347,99:5348,96:[1,5344],97:[1,5345],98:[1,5346],101:$Vha,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:5350,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VO9,$Vx7),o($VZ9,$Vy1,{93:5351}),o($V_9,$Vz1,{99:5160,95:5352,101:$Vda,102:$VR,103:$VS,104:$VT}),o($V$9,$VB1,{86:5353}),o($V$9,$VB1,{86:5354}),o($V$9,$VB1,{86:5355}),o($VO9,$VC1,{105:5164,107:5165,91:5356,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V0a,$VC7),o($V0a,$VD7),o($VZ9,$VG1),o($VZ9,$VH1),o($VZ9,$VI1),o($VZ9,$VJ1),o($V$9,$VK1),o($VL1,$VM1,{167:5357}),o($V1a,$VO1),{119:[1,5358],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V0a,$VE1),o($V0a,$VF1),{19:[1,5362],21:[1,5366],22:5360,33:5359,205:5361,219:5363,220:[1,5365],221:[1,5364]},{100:[1,5367]},o($VZ9,$VT1),o($V$9,$Vn),o($V$9,$Vo),{100:[1,5369],106:5368,108:[1,5370],109:[1,5371],110:5372,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5373]},o($V$9,$Vp),o($V$9,$Vq),o($VO9,$Vs7),o($VO9,$Vt7,{74:5374,76:5375,78:5376,44:5377,118:5378,79:[1,5379],80:[1,5380],81:[1,5381],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VO9,$Vu7),o($VO9,$Vv7,{77:5382,73:5383,92:5384,94:5385,95:5389,99:5390,96:[1,5386],97:[1,5387],98:[1,5388],101:$Via,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:5392,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VO9,$Vx7),o($VZ9,$Vy1,{93:5393}),o($V_9,$Vz1,{99:5193,95:5394,101:$Vea,102:$VR,103:$VS,104:$VT}),o($V$9,$VB1,{86:5395}),o($V$9,$VB1,{86:5396}),o($V$9,$VB1,{86:5397}),o($VO9,$VC1,{105:5197,107:5198,91:5398,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V0a,$VC7),o($V0a,$VD7),o($VZ9,$VG1),o($VZ9,$VH1),o($VZ9,$VI1),o($VZ9,$VJ1),o($V$9,$VK1),o($VL1,$VM1,{167:5399}),o($V1a,$VO1),{119:[1,5400],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V0a,$VE1),o($V0a,$VF1),{19:[1,5404],21:[1,5408],22:5402,33:5401,205:5403,219:5405,220:[1,5407],221:[1,5406]},{100:[1,5409]},o($VZ9,$VT1),o($V$9,$Vn),o($V$9,$Vo),{100:[1,5411],106:5410,108:[1,5412],109:[1,5413],110:5414,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5415]},o($V$9,$Vp),o($V$9,$Vq),{121:[1,5416]},o($V8a,$VP3),o($V$9,$V13),o($V$9,$V23),o($V$9,$V33),o($V$9,$V43),o($V$9,$V53),{111:[1,5417]},o($V$9,$Va3),o($V0a,$Vk5),o($V1a,$VD5),o($V1a,$VK1),o($V1a,$Vn),o($V1a,$Vo),o($V1a,$Vp),o($V1a,$Vq),o($Vh8,$V48),o($Vh8,$V58),o($Vh8,$VC7),o($Vh8,$VD7),{119:[1,5418],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vh8,$VE1),o($Vh8,$VF1),{19:[1,5422],21:[1,5426],22:5420,33:5419,205:5421,219:5423,220:[1,5425],221:[1,5424]},o($Vh8,$V68),o($Vh8,$V78),o($Va9,$Vy1,{93:5427}),o($Vh8,$Vz1,{99:5233,95:5428,101:$Vfa,102:$VR,103:$VS,104:$VT}),o($Va9,$VG1),o($Va9,$VH1),o($Va9,$VI1),o($Va9,$VJ1),{100:[1,5429]},o($Va9,$VT1),{70:[1,5430]},o($VP8,$Vs2,{99:5020,95:5431,101:$Vaa,102:$VR,103:$VS,104:$VT}),o($VO8,$Vt2),o($Vh8,$Vu2,{90:5432,95:5433,91:5434,99:5435,105:5437,107:5438,101:$Vja,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vw2,{90:5432,95:5433,91:5434,99:5435,105:5437,107:5438,101:$Vja,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vh8,$Vx2,{90:5432,95:5433,91:5434,99:5435,105:5437,107:5438,101:$Vja,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VS8,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5439],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5440,121:$VW2,148:$VX2,194:$VY2}),o($VR8,$VA2),o($VR8,$Vw),o($VR8,$Vx),o($VR8,$Vn),o($VR8,$Vo),o($VR8,$Vy),o($VR8,$Vp),o($VR8,$Vq),o($VO8,$V13),o($VS8,$V23),o($VS8,$V33),o($VS8,$V43),o($VS8,$V53),{111:[1,5441]},o($VS8,$Va3),o($Vh8,$Vk5),{19:[1,5444],21:[1,5447],22:5443,87:5442,219:5445,220:[1,5446]},o($Vh8,$Vk5),{19:[1,5450],21:[1,5453],22:5449,87:5448,219:5451,220:[1,5452]},o($V59,$Vs7),o($V59,$Vt7,{74:5454,76:5455,78:5456,44:5457,118:5458,79:[1,5459],80:[1,5460],81:[1,5461],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($V59,$Vu7),o($V59,$Vv7,{77:5462,73:5463,92:5464,94:5465,95:5469,99:5470,96:[1,5466],97:[1,5467],98:[1,5468],101:$Vka,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:5472,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($V59,$Vx7),o($Vp9,$Vy1,{93:5473}),o($Vq9,$Vz1,{99:5288,95:5474,101:$Vga,102:$VR,103:$VS,104:$VT}),o($Vr9,$VB1,{86:5475}),o($Vr9,$VB1,{86:5476}),o($Vr9,$VB1,{86:5477}),o($V59,$VC1,{105:5292,107:5293,91:5478,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vs9,$VC7),o($Vs9,$VD7),o($Vp9,$VG1),o($Vp9,$VH1),o($Vp9,$VI1),o($Vp9,$VJ1),o($Vr9,$VK1),o($VL1,$VM1,{167:5479}),o($Vt9,$VO1),{119:[1,5480],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($Vs9,$VE1),o($Vs9,$VF1),{19:[1,5484],21:[1,5488],22:5482,33:5481,205:5483,219:5485,220:[1,5487],221:[1,5486]},{100:[1,5489]},o($Vp9,$VT1),o($Vr9,$Vn),o($Vr9,$Vo),{100:[1,5491],106:5490,108:[1,5492],109:[1,5493],110:5494,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5495]},o($Vr9,$Vp),o($Vr9,$Vq),{121:[1,5496]},o($VK9,$VP3),o($Vr9,$V13),o($Vr9,$V23),o($Vr9,$V33),o($Vr9,$V43),o($Vr9,$V53),{111:[1,5497]},o($Vr9,$Va3),o($Vs9,$Vk5),o($Vt9,$VD5),o($Vt9,$VK1),o($Vt9,$Vn),o($Vt9,$Vo),o($Vt9,$Vp),o($Vt9,$Vq),{121:[1,5498]},o($VK9,$VP3),o($Vr9,$V13),o($Vr9,$V23),o($Vr9,$V33),o($Vr9,$V43),o($Vr9,$V53),{111:[1,5499]},o($Vr9,$Va3),o($Vs9,$Vk5),o($Vt9,$VD5),o($Vt9,$VK1),o($Vt9,$Vn),o($Vt9,$Vo),o($Vt9,$Vp),o($Vt9,$Vq),o($VM6,$Vk5),{19:[1,5502],21:[1,5505],22:5501,87:5500,219:5503,220:[1,5504]},o($VO9,$V38),o($Vr,$Vs,{59:5506,40:5507,43:$Vt}),o($VO9,$V48),o($VO9,$V58),o($VO9,$VC7),o($VO9,$VD7),{119:[1,5508],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VO9,$VE1),o($VO9,$VF1),{19:[1,5512],21:[1,5516],22:5510,33:5509,205:5511,219:5513,220:[1,5515],221:[1,5514]},o($VO9,$V68),o($VO9,$V78),o($V8a,$Vy1,{93:5517}),o($VO9,$Vz1,{99:5348,95:5518,101:$Vha,102:$VR,103:$VS,104:$VT}),o($V8a,$VG1),o($V8a,$VH1),o($V8a,$VI1),o($V8a,$VJ1),{100:[1,5519]},o($V8a,$VT1),{70:[1,5520]},o($V_9,$Vs2,{99:5160,95:5521,101:$Vda,102:$VR,103:$VS,104:$VT}),o($VZ9,$Vt2),o($VO9,$Vu2,{90:5522,95:5523,91:5524,99:5525,105:5527,107:5528,101:$Vla,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vw2,{90:5522,95:5523,91:5524,99:5525,105:5527,107:5528,101:$Vla,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vx2,{90:5522,95:5523,91:5524,99:5525,105:5527,107:5528,101:$Vla,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V1a,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5529],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5530,121:$VW2,148:$VX2,194:$VY2}),o($V0a,$VA2),o($V0a,$Vw),o($V0a,$Vx),o($V0a,$Vn),o($V0a,$Vo),o($V0a,$Vy),o($V0a,$Vp),o($V0a,$Vq),o($VZ9,$V13),o($V1a,$V23),o($V1a,$V33),o($V1a,$V43),o($V1a,$V53),{111:[1,5531]},o($V1a,$Va3),o($VO9,$V48),o($VO9,$V58),o($VO9,$VC7),o($VO9,$VD7),{119:[1,5532],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VO9,$VE1),o($VO9,$VF1),{19:[1,5536],21:[1,5540],22:5534,33:5533,205:5535,219:5537,220:[1,5539],221:[1,5538]},o($VO9,$V68),o($VO9,$V78),o($V8a,$Vy1,{93:5541}),o($VO9,$Vz1,{99:5390,95:5542,101:$Via,102:$VR,103:$VS,104:$VT}),o($V8a,$VG1),o($V8a,$VH1),o($V8a,$VI1),o($V8a,$VJ1),{100:[1,5543]},o($V8a,$VT1),{70:[1,5544]},o($V_9,$Vs2,{99:5193,95:5545,101:$Vea,102:$VR,103:$VS,104:$VT}),o($VZ9,$Vt2),o($VO9,$Vu2,{90:5546,95:5547,91:5548,99:5549,105:5551,107:5552,101:$Vma,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vw2,{90:5546,95:5547,91:5548,99:5549,105:5551,107:5552,101:$Vma,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vx2,{90:5546,95:5547,91:5548,99:5549,105:5551,107:5552,101:$Vma,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V1a,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5553],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5554,121:$VW2,148:$VX2,194:$VY2}),o($V0a,$VA2),o($V0a,$Vw),o($V0a,$Vx),o($V0a,$Vn),o($V0a,$Vo),o($V0a,$Vy),o($V0a,$Vp),o($V0a,$Vq),o($VZ9,$V13),o($V1a,$V23),o($V1a,$V33),o($V1a,$V43),o($V1a,$V53),{111:[1,5555]},o($V1a,$Va3),o($VO9,$Vk5),{19:[1,5558],21:[1,5561],22:5557,87:5556,219:5559,220:[1,5560]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5562,121:$VW2,148:$VX2,194:$VY2}),o($Vh8,$VA2),o($Vh8,$Vw),o($Vh8,$Vx),o($Vh8,$Vn),o($Vh8,$Vo),o($Vh8,$Vy),o($Vh8,$Vp),o($Vh8,$Vq),o($Vh8,$Vs2,{99:5233,95:5563,101:$Vfa,102:$VR,103:$VS,104:$VT}),o($Va9,$Vt2),o($Va9,$V13),o($Vh8,$VK8),o($VO8,$VP3),o($VQ8,$VQ3),o($VQ8,$VR3),o($VQ8,$VS3),{100:[1,5564]},o($VQ8,$VT1),{100:[1,5566],106:5565,108:[1,5567],109:[1,5568],110:5569,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5570]},o($VQ8,$VU3),{121:[1,5571]},{19:[1,5574],21:[1,5577],22:5573,87:5572,219:5575,220:[1,5576]},o($VQ8,$VD5),o($VQ8,$VK1),o($VQ8,$Vn),o($VQ8,$Vo),o($VQ8,$Vp),o($VQ8,$Vq),o($VQ8,$VD5),o($VQ8,$VK1),o($VQ8,$Vn),o($VQ8,$Vo),o($VQ8,$Vp),o($VQ8,$Vq),o($V59,$V48),o($V59,$V58),o($V59,$VC7),o($V59,$VD7),{119:[1,5578],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V59,$VE1),o($V59,$VF1),{19:[1,5582],21:[1,5586],22:5580,33:5579,205:5581,219:5583,220:[1,5585],221:[1,5584]},o($V59,$V68),o($V59,$V78),o($VK9,$Vy1,{93:5587}),o($V59,$Vz1,{99:5470,95:5588,101:$Vka,102:$VR,103:$VS,104:$VT}),o($VK9,$VG1),o($VK9,$VH1),o($VK9,$VI1),o($VK9,$VJ1),{100:[1,5589]},o($VK9,$VT1),{70:[1,5590]},o($Vq9,$Vs2,{99:5288,95:5591,101:$Vga,102:$VR,103:$VS,104:$VT}),o($Vp9,$Vt2),o($V59,$Vu2,{90:5592,95:5593,91:5594,99:5595,105:5597,107:5598,101:$Vna,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vw2,{90:5592,95:5593,91:5594,99:5595,105:5597,107:5598,101:$Vna,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V59,$Vx2,{90:5592,95:5593,91:5594,99:5595,105:5597,107:5598,101:$Vna,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($Vt9,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5599],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5600,121:$VW2,148:$VX2,194:$VY2}),o($Vs9,$VA2),o($Vs9,$Vw),o($Vs9,$Vx),o($Vs9,$Vn),o($Vs9,$Vo),o($Vs9,$Vy),o($Vs9,$Vp),o($Vs9,$Vq),o($Vp9,$V13),o($Vt9,$V23),o($Vt9,$V33),o($Vt9,$V43),o($Vt9,$V53),{111:[1,5601]},o($Vt9,$Va3),o($V59,$Vk5),{19:[1,5604],21:[1,5607],22:5603,87:5602,219:5605,220:[1,5606]},o($V59,$Vk5),{19:[1,5610],21:[1,5613],22:5609,87:5608,219:5611,220:[1,5612]},o($VA7,$VD5),o($VA7,$VK1),o($VA7,$Vn),o($VA7,$Vo),o($VA7,$Vp),o($VA7,$Vq),o($VO9,$VI8),o($VI,$VJ,{63:5614,73:5615,75:5616,76:5617,92:5620,94:5621,87:5623,88:5624,89:5625,78:5626,44:5627,95:5631,22:5632,91:5634,118:5635,99:5639,219:5642,105:5643,107:5644,19:[1,5641],21:[1,5646],69:[1,5618],71:[1,5619],79:[1,5636],80:[1,5637],81:[1,5638],85:[1,5622],96:[1,5628],97:[1,5629],98:[1,5630],101:$Voa,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ,166:[1,5633],220:[1,5645]}),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5647,121:$VW2,148:$VX2,194:$VY2}),o($VO9,$VA2),o($VO9,$Vw),o($VO9,$Vx),o($VO9,$Vn),o($VO9,$Vo),o($VO9,$Vy),o($VO9,$Vp),o($VO9,$Vq),o($VO9,$Vs2,{99:5348,95:5648,101:$Vha,102:$VR,103:$VS,104:$VT}),o($V8a,$Vt2),o($V8a,$V13),o($VO9,$VK8),o($VZ9,$VP3),o($V$9,$VQ3),o($V$9,$VR3),o($V$9,$VS3),{100:[1,5649]},o($V$9,$VT1),{100:[1,5651],106:5650,108:[1,5652],109:[1,5653],110:5654,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5655]},o($V$9,$VU3),{121:[1,5656]},{19:[1,5659],21:[1,5662],22:5658,87:5657,219:5660,220:[1,5661]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5663,121:$VW2,148:$VX2,194:$VY2}),o($VO9,$VA2),o($VO9,$Vw),o($VO9,$Vx),o($VO9,$Vn),o($VO9,$Vo),o($VO9,$Vy),o($VO9,$Vp),o($VO9,$Vq),o($VO9,$Vs2,{99:5390,95:5664,101:$Via,102:$VR,103:$VS,104:$VT}),o($V8a,$Vt2),o($V8a,$V13),o($VO9,$VK8),o($VZ9,$VP3),o($V$9,$VQ3),o($V$9,$VR3),o($V$9,$VS3),{100:[1,5665]},o($V$9,$VT1),{100:[1,5667],106:5666,108:[1,5668],109:[1,5669],110:5670,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5671]},o($V$9,$VU3),{121:[1,5672]},{19:[1,5675],21:[1,5678],22:5674,87:5673,219:5676,220:[1,5677]},o($V$9,$VD5),o($V$9,$VK1),o($V$9,$Vn),o($V$9,$Vo),o($V$9,$Vp),o($V$9,$Vq),{121:[1,5679]},o($Va9,$VP3),o($VQ8,$V13),o($VQ8,$V23),o($VQ8,$V33),o($VQ8,$V43),o($VQ8,$V53),{111:[1,5680]},o($VQ8,$Va3),o($VR8,$Vk5),o($VS8,$VD5),o($VS8,$VK1),o($VS8,$Vn),o($VS8,$Vo),o($VS8,$Vp),o($VS8,$Vq),o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5681,121:$VW2,148:$VX2,194:$VY2}),o($V59,$VA2),o($V59,$Vw),o($V59,$Vx),o($V59,$Vn),o($V59,$Vo),o($V59,$Vy),o($V59,$Vp),o($V59,$Vq),o($V59,$Vs2,{99:5470,95:5682,101:$Vka,102:$VR,103:$VS,104:$VT}),o($VK9,$Vt2),o($VK9,$V13),o($V59,$VK8),o($Vp9,$VP3),o($Vr9,$VQ3),o($Vr9,$VR3),o($Vr9,$VS3),{100:[1,5683]},o($Vr9,$VT1),{100:[1,5685],106:5684,108:[1,5686],109:[1,5687],110:5688,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5689]},o($Vr9,$VU3),{121:[1,5690]},{19:[1,5693],21:[1,5696],22:5692,87:5691,219:5694,220:[1,5695]},o($Vr9,$VD5),o($Vr9,$VK1),o($Vr9,$Vn),o($Vr9,$Vo),o($Vr9,$Vp),o($Vr9,$Vq),o($Vr9,$VD5),o($Vr9,$VK1),o($Vr9,$Vn),o($Vr9,$Vo),o($Vr9,$Vp),o($Vr9,$Vq),o($VO9,$Vs7),o($VO9,$Vt7,{74:5697,76:5698,78:5699,44:5700,118:5701,79:[1,5702],80:[1,5703],81:[1,5704],119:$VJ,125:$VJ,127:$VJ,194:$VJ,223:$VJ}),o($VO9,$Vu7),o($VO9,$Vv7,{77:5705,73:5706,92:5707,94:5708,95:5712,99:5713,96:[1,5709],97:[1,5710],98:[1,5711],101:$Vpa,102:$VR,103:$VS,104:$VT}),o($V11,$Vs,{40:169,44:171,38:5715,43:$Vp1,79:$V21,80:$V31,81:$V41}),o($VO9,$Vx7),o($VZ9,$Vy1,{93:5716}),o($V_9,$Vz1,{99:5639,95:5717,101:$Voa,102:$VR,103:$VS,104:$VT}),o($V$9,$VB1,{86:5718}),o($V$9,$VB1,{86:5719}),o($V$9,$VB1,{86:5720}),o($VO9,$VC1,{105:5643,107:5644,91:5721,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V0a,$VC7),o($V0a,$VD7),o($VZ9,$VG1),o($VZ9,$VH1),o($VZ9,$VI1),o($VZ9,$VJ1),o($V$9,$VK1),o($VL1,$VM1,{167:5722}),o($V1a,$VO1),{119:[1,5723],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($V0a,$VE1),o($V0a,$VF1),{19:[1,5727],21:[1,5731],22:5725,33:5724,205:5726,219:5728,220:[1,5730],221:[1,5729]},{100:[1,5732]},o($VZ9,$VT1),o($V$9,$Vn),o($V$9,$Vo),{100:[1,5734],106:5733,108:[1,5735],109:[1,5736],110:5737,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5738]},o($V$9,$Vp),o($V$9,$Vq),{121:[1,5739]},o($V8a,$VP3),o($V$9,$V13),o($V$9,$V23),o($V$9,$V33),o($V$9,$V43),o($V$9,$V53),{111:[1,5740]},o($V$9,$Va3),o($V0a,$Vk5),o($V1a,$VD5),o($V1a,$VK1),o($V1a,$Vn),o($V1a,$Vo),o($V1a,$Vp),o($V1a,$Vq),{121:[1,5741]},o($V8a,$VP3),o($V$9,$V13),o($V$9,$V23),o($V$9,$V33),o($V$9,$V43),o($V$9,$V53),{111:[1,5742]},o($V$9,$Va3),o($V0a,$Vk5),o($V1a,$VD5),o($V1a,$VK1),o($V1a,$Vn),o($V1a,$Vo),o($V1a,$Vp),o($V1a,$Vq),o($Vh8,$Vk5),{19:[1,5745],21:[1,5748],22:5744,87:5743,219:5746,220:[1,5747]},{121:[1,5749]},o($VK9,$VP3),o($Vr9,$V13),o($Vr9,$V23),o($Vr9,$V33),o($Vr9,$V43),o($Vr9,$V53),{111:[1,5750]},o($Vr9,$Va3),o($Vs9,$Vk5),o($Vt9,$VD5),o($Vt9,$VK1),o($Vt9,$Vn),o($Vt9,$Vo),o($Vt9,$Vp),o($Vt9,$Vq),o($VO9,$V48),o($VO9,$V58),o($VO9,$VC7),o($VO9,$VD7),{119:[1,5751],122:191,123:192,124:193,125:$VP1,127:$VQ1,194:$VR1,222:195,223:$VS1},o($VO9,$VE1),o($VO9,$VF1),{19:[1,5755],21:[1,5759],22:5753,33:5752,205:5754,219:5756,220:[1,5758],221:[1,5757]},o($VO9,$V68),o($VO9,$V78),o($V8a,$Vy1,{93:5760}),o($VO9,$Vz1,{99:5713,95:5761,101:$Vpa,102:$VR,103:$VS,104:$VT}),o($V8a,$VG1),o($V8a,$VH1),o($V8a,$VI1),o($V8a,$VJ1),{100:[1,5762]},o($V8a,$VT1),{70:[1,5763]},o($V_9,$Vs2,{99:5639,95:5764,101:$Voa,102:$VR,103:$VS,104:$VT}),o($VZ9,$Vt2),o($VO9,$Vu2,{90:5765,95:5766,91:5767,99:5768,105:5770,107:5771,101:$Vqa,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vw2,{90:5765,95:5766,91:5767,99:5768,105:5770,107:5771,101:$Vqa,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($VO9,$Vx2,{90:5765,95:5766,91:5767,99:5768,105:5770,107:5771,101:$Vqa,102:$VR,103:$VS,104:$VT,112:$VU,113:$VV,114:$VW,115:$VX,116:$VY,117:$VZ}),o($V1a,$Vy2),{19:$VB2,21:$VC2,22:370,71:$VD2,81:$VE2,100:$VF2,108:$VG2,109:$VH2,110:382,168:[1,5772],169:365,170:366,171:367,172:368,186:371,190:$VI2,201:376,202:377,203:378,206:381,209:$VJ2,210:$VK2,211:$VL2,212:$VM2,213:$VN2,214:$VO2,215:$VP2,216:$VQ2,217:$VR2,218:$VS2,219:375,220:$VT2},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5773,121:$VW2,148:$VX2,194:$VY2}),o($V0a,$VA2),o($V0a,$Vw),o($V0a,$Vx),o($V0a,$Vn),o($V0a,$Vo),o($V0a,$Vy),o($V0a,$Vp),o($V0a,$Vq),o($VZ9,$V13),o($V1a,$V23),o($V1a,$V33),o($V1a,$V43),o($V1a,$V53),{111:[1,5774]},o($V1a,$Va3),o($VO9,$Vk5),{19:[1,5777],21:[1,5780],22:5776,87:5775,219:5778,220:[1,5779]},o($VO9,$Vk5),{19:[1,5783],21:[1,5786],22:5782,87:5781,219:5784,220:[1,5785]},o($VQ8,$VD5),o($VQ8,$VK1),o($VQ8,$Vn),o($VQ8,$Vo),o($VQ8,$Vp),o($VQ8,$Vq),o($V59,$Vk5),{19:[1,5789],21:[1,5792],22:5788,87:5787,219:5790,220:[1,5791]},o($VU2,$VV2,{126:397,130:398,131:399,132:400,136:401,137:402,138:403,144:404,146:405,147:406,120:5793,121:$VW2,148:$VX2,194:$VY2}),o($VO9,$VA2),o($VO9,$Vw),o($VO9,$Vx),o($VO9,$Vn),o($VO9,$Vo),o($VO9,$Vy),o($VO9,$Vp),o($VO9,$Vq),o($VO9,$Vs2,{99:5713,95:5794,101:$Vpa,102:$VR,103:$VS,104:$VT}),o($V8a,$Vt2),o($V8a,$V13),o($VO9,$VK8),o($VZ9,$VP3),o($V$9,$VQ3),o($V$9,$VR3),o($V$9,$VS3),{100:[1,5795]},o($V$9,$VT1),{100:[1,5797],106:5796,108:[1,5798],109:[1,5799],110:5800,211:$VU1,212:$VV1,213:$VW1,214:$VX1},{100:[1,5801]},o($V$9,$VU3),{121:[1,5802]},{19:[1,5805],21:[1,5808],22:5804,87:5803,219:5806,220:[1,5807]},o($V$9,$VD5),o($V$9,$VK1),o($V$9,$Vn),o($V$9,$Vo),o($V$9,$Vp),o($V$9,$Vq),o($V$9,$VD5),o($V$9,$VK1),o($V$9,$Vn),o($V$9,$Vo),o($V$9,$Vp),o($V$9,$Vq),o($Vr9,$VD5),o($Vr9,$VK1),o($Vr9,$Vn),o($Vr9,$Vo),o($Vr9,$Vp),o($Vr9,$Vq),{121:[1,5809]},o($V8a,$VP3),o($V$9,$V13),o($V$9,$V23),o($V$9,$V33),o($V$9,$V43),o($V$9,$V53),{111:[1,5810]},o($V$9,$Va3),o($V0a,$Vk5),o($V1a,$VD5),o($V1a,$VK1),o($V1a,$Vn),o($V1a,$Vo),o($V1a,$Vp),o($V1a,$Vq),o($VO9,$Vk5),{19:[1,5813],21:[1,5816],22:5812,87:5811,219:5814,220:[1,5815]},o($V$9,$VD5),o($V$9,$VK1),o($V$9,$Vn),o($V$9,$Vo),o($V$9,$Vp),o($V$9,$Vq)],
defaultActions: {6:[2,11],24:[2,1],115:[2,119],116:[2,120],117:[2,121],124:[2,132],125:[2,133],205:[2,256],206:[2,257],207:[2,258],208:[2,259],337:[2,35],397:[2,142],398:[2,146],400:[2,148],585:[2,33],586:[2,37],623:[2,34],1120:[2,146],1122:[2,148]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: lexer.yylloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

  /*
    ShEx parser in the Jison parser generator format.
  */

  var UNBOUNDED = -1;

  var ShExUtil = __webpack_require__(11);

  // Common namespaces and entities
  var RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
      RDF_TYPE  = RDF + 'type',
      RDF_FIRST = RDF + 'first',
      RDF_REST  = RDF + 'rest',
      RDF_NIL   = RDF + 'nil',
      XSD = 'http://www.w3.org/2001/XMLSchema#',
      XSD_INTEGER  = XSD + 'integer',
      XSD_DECIMAL  = XSD + 'decimal',
      XSD_FLOAT   = XSD + 'float',
      XSD_DOUBLE   = XSD + 'double',
      XSD_BOOLEAN  = XSD + 'boolean',
      XSD_TRUE =  '"true"^^'  + XSD_BOOLEAN,
      XSD_FALSE = '"false"^^' + XSD_BOOLEAN,
      XSD_PATTERN        = XSD + 'pattern',
      XSD_MININCLUSIVE   = XSD + 'minInclusive',
      XSD_MINEXCLUSIVE   = XSD + 'minExclusive',
      XSD_MAXINCLUSIVE   = XSD + 'maxInclusive',
      XSD_MAXEXCLUSIVE   = XSD + 'maxExclusive',
      XSD_LENGTH         = XSD + 'length',
      XSD_MINLENGTH      = XSD + 'minLength',
      XSD_MAXLENGTH      = XSD + 'maxLength',
      XSD_TOTALDIGITS    = XSD + 'totalDigits',
      XSD_FRACTIONDIGITS = XSD + 'fractionDigits';

  var numericDatatypes = [
      XSD + "integer",
      XSD + "decimal",
      XSD + "float",
      XSD + "double",
      XSD + "string",
      XSD + "boolean",
      XSD + "dateTime",
      XSD + "nonPositiveInteger",
      XSD + "negativeInteger",
      XSD + "long",
      XSD + "int",
      XSD + "short",
      XSD + "byte",
      XSD + "nonNegativeInteger",
      XSD + "unsignedLong",
      XSD + "unsignedInt",
      XSD + "unsignedShort",
      XSD + "unsignedByte",
      XSD + "positiveInteger"
  ];

  var absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  var numericFacets = ["mininclusive", "minexclusive",
                       "maxinclusive", "maxexclusive"];

  // Returns a lowercase version of the given string
  function lowercase(string) {
    return string.toLowerCase();
  }

  // Appends the item to the array and returns the array
  function appendTo(array, item) {
    return array.push(item), array;
  }

  // Appends the items to the array and returns the array
  function appendAllTo(array, items) {
    return array.push.apply(array, items), array;
  }

  // Extends a base object with properties of other objects
  function extend(base) {
    if (!base) base = {};
    for (var i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (var name in arg)
        base[name] = arg[name];
    return base;
  }

  // Creates an array that contains all items of the given arrays
  function unionAll() {
    var union = [];
    for (var i = 0, l = arguments.length; i < l; i++)
      union = union.concat.apply(union, arguments[i]);
    return union;
  }

  // N3.js:lib/N3Parser.js<0.4.5>:58 with
  //   s/this\./Parser./g
  // ### `_setBase` sets the base IRI to resolve relative IRIs.
  Parser._setBase = function (baseIRI) {
    if (!baseIRI)
      baseIRI = null;

    // baseIRI '#' check disabled to allow -x 'data:text/shex,...#'
    // else if (baseIRI.indexOf('#') >= 0)
    //   throw new Error('Invalid base IRI ' + baseIRI);

    // Set base IRI and its components
    if (Parser._base = baseIRI) {
      Parser._basePath   = baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(schemeAuthority);
      Parser._baseRoot   = baseIRI[0];
      Parser._baseScheme = baseIRI[1];
    }
  }

  // N3.js:lib/N3Parser.js<0.4.5>:576 with
  //   s/this\./Parser./g
  //   s/token/iri/
  // ### `_resolveIRI` resolves a relative IRI token against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative.
  function _resolveIRI (iri) {
    switch (iri[0]) {
    // An empty relative IRI indicates the base IRI
    case undefined: return Parser._base;
    // Resolve relative fragment IRIs against the base IRI
    case '#': return Parser._base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return Parser._base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? Parser._baseScheme : Parser._baseRoot) + _removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default: {
      return _removeDotSegments(Parser._basePath + iri);
    }
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986.
  function _removeDotSegments (iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!dotSegments.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    var result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  // Creates an expression with the given type and attributes
  function expression(expr, attr) {
    var expression = { expression: expr };
    if (attr)
      for (var a in attr)
        expression[a] = attr[a];
    return expression;
  }

  // Creates a path with the given type and items
  function path(type, items) {
    return { type: 'path', pathType: type, items: items };
  }

  // Creates a literal with the given value and type
  function createLiteral(value, type) {
    return { value: value, type: type };
  }

  // Creates a new blank node identifier
  function blank() {
    return '_:b' + blankId++;
  };
  var blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser._sourceMap = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._base = Parser._baseIRI = Parser._baseIRIPath = Parser._baseIRIRoot = null;
  }
  var _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  var stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
                                   't': '\t', 'b': '\b', 'n': '\n', 'r': '\r', 'f': '\f' },
      semactEscapeReplacements = { '\\': '\\', '%': '%' },
      pnameEscapeReplacements = {
        '\\': '\\', "'": "'", '"': '"',
        'n': '\n', 'r': '\r', 't': '\t', 'f': '\f', 'b': '\b',
        '_': '_', '~': '~', '.': '.', '-': '-', '!': '!', '$': '$', '&': '&',
        '(': '(', ')': ')', '*': '*', '+': '+', ',': ',', ';': ';', '=': '=',
        '/': '/', '?': '?', '#': '#', '@': '@', '%': '%',
      };


  // Translates string escape codes in the string into their textual equivalent
  function unescapeString(string, trimLength) {
    string = string.substring(trimLength, string.length - trimLength);
    return { value: ShExUtil.unescapeText(string, stringEscapeReplacements) };
  }

  function unescapeLangString(string, trimLength) {
    var at = string.lastIndexOf("@");
    var lang = string.substr(at);
    string = string.substr(0, at);
    var u = unescapeString(string, trimLength);
    return extend(u, { language: lowercase(lang.substr(1)) });
  }

  // Translates regular expression escape codes in the string into their textual equivalent
  function unescapeRegexp (regexp) {
    var end = regexp.lastIndexOf("/");
    var s = regexp.substr(1, end-1);
    var regexpEscapeReplacements = {
      '.': "\\.", '\\': "\\\\", '?': "\\?", '*': "\\*", '+': "\\+",
      '{': "\\{", '}': "\\}", '(': "\\(", ')': "\\)", '|': "\\|",
      '^': "\\^", '$': "\\$", '[': "\\[", ']': "\\]", '/': "\\/",
      't': '\\t', 'n': '\\n', 'r': '\\r', '-': "\\-", '/': '/'
    };
    s = ShExUtil.unescapeText(s, regexpEscapeReplacements)
    var ret = {
      pattern: s
    };
    if (regexp.length > end+1)
      ret.flags = regexp.substr(end+1);
    return ret;
  }

  // Convenience function to return object with p1 key, value p2
  function keyValObject(key, val) {
    var ret = {};
    ret[key] = val;
    return ret;
  }

  // Return object with p1 key, p2 string value
  function unescapeSemanticAction(key, string) {
    string = string.substring(1, string.length - 2);
    return {
      type: "SemAct",
      name: key,
      code: ShExUtil.unescapeText(string, semactEscapeReplacements)
    };
  }

  function error (e, yy) {
    const hash = {
      text: yy.lexer.match,
      // token: this.terminals_[symbol] || symbol,
      line: yy.lexer.yylineno,
      loc: yy.lexer.yylloc,
      // expected: expected
      pos: yy.lexer.showPosition()
    }
    e.hash = hash;
    if (Parser.recoverable) {
      Parser.recoverable(e)
    } else {
      throw e;
      Parser.reset();
    }
  }

  // Expand declared prefix or throw Error
  function expandPrefix (prefix, yy) {
    if (!(prefix in Parser._prefixes))
      error(new Error('Parse error; unknown prefix "' + prefix + ':"'), yy);
    return Parser._prefixes[prefix];
  }

  // Add a shape to the map
  function addShape (label, shape, yy) {
    if (shape === EmptyShape)
      shape = { type: "Shape" };
    if (Parser.productions && label in Parser.productions)
      error(new Error("Structural error: "+label+" is a triple expression"), yy);
    if (!Parser.shapes)
      Parser.shapes = new Map();
    if (label in Parser.shapes) {
      if (Parser.options.duplicateShape === "replace")
        Parser.shapes[label] = shape;
      else if (Parser.options.duplicateShape !== "ignore")
        error(new Error("Parse error: "+label+" already defined"), yy);
    } else {
      shape.id = label;
      Parser.shapes[label] = shape;
    }
  }

  // Add a production to the map
  function addProduction (label, production, yy) {
    if (Parser.shapes && label in Parser.shapes)
      error(new Error("Structural error: "+label+" is a shape expression"), yy);
    if (!Parser.productions)
      Parser.productions = new Map();
    if (label in Parser.productions) {
      if (Parser.options.duplicateShape === "replace")
        Parser.productions[label] = production;
      else if (Parser.options.duplicateShape !== "ignore")
        error(new Error("Parse error: "+label+" already defined"), yy);
    } else
      Parser.productions[label] = production;
  }

  function addSourceMap (obj, yy) {
    if (!Parser._sourceMap)
      Parser._sourceMap = new Map();
    let list = Parser._sourceMap.get(obj)
    if (!list)
      Parser._sourceMap.set(obj, list = []);
    list.push(yy.lexer.yylloc);
    return obj;
  }

  // shapeJunction judiciously takes a shapeAtom and an optional list of con/disjuncts.
  // No created Shape{And,Or,Not} will have a `nested` shapeExpr.
  // Don't nonest arguments to shapeJunction.
  // shapeAtom emits `nested` so nonest every argument that can be a shapeAtom, i.e.
  //   shapeAtom, inlineShapeAtom, shapeAtomNoRef
  //   {,inline}shape{And,Or,Not}
  //   this does NOT include shapeOrRef or nodeConstraint.
  function shapeJunction (type, shapeAtom, juncts) {
    if (juncts.length === 0) {
      return nonest(shapeAtom);
    } else if (shapeAtom.type === type && !shapeAtom.nested) {
      nonest(shapeAtom).shapeExprs = nonest(shapeAtom).shapeExprs.concat(juncts);
      return shapeAtom;
    } else {
      return { type: type, shapeExprs: [nonest(shapeAtom)].concat(juncts) };
    }
  }

  // strip out .nested attribute
  function nonest (shapeAtom) {
    delete shapeAtom.nested;
    return shapeAtom;
  }

  var EmptyObject = {  };
  var EmptyShape = { type: "Shape" };
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/**/
break;
case 1:return 79;
break;
case 2:return 80;
break;
case 3: yy_.yytext = yy_.yytext.substr(1); return 190; 
break;
case 4:return 81;
break;
case 5:return 220;
break;
case 6:return 164;
break;
case 7:return 109;
break;
case 8:return 108;
break;
case 9:return 100;
break;
case 10:return 'ANON';
break;
case 11:return 19;
break;
case 12:return 21;
break;
case 13:return 204;
break;
case 14:return 101;
break;
case 15:return 221;
break;
case 16:return 200;
break;
case 17:return 216;
break;
case 18:return 218;
break;
case 19:return 215;
break;
case 20:return 217;
break;
case 21:return 212;
break;
case 22:return 214;
break;
case 23:return 211;
break;
case 24:return 213;
break;
case 25:return 18;
break;
case 26:return 20;
break;
case 27:return 23;
break;
case 28:return 26;
break;
case 29:return 39;
break;
case 30:return 36;
break;
case 31:return 225;
break;
case 32:return 223;
break;
case 33:return 125;
break;
case 34:return 127;
break;
case 35:return 85;
break;
case 36:return 97;
break;
case 37:return 96;
break;
case 38:return 98;
break;
case 39:return 53;
break;
case 40:return 51;
break;
case 41:return 43;
break;
case 42:return 155;
break;
case 43:return 157;
break;
case 44:return 158;
break;
case 45:return 112;
break;
case 46:return 113;
break;
case 47:return 114;
break;
case 48:return 115;
break;
case 49:return 102;
break;
case 50:return 103;
break;
case 51:return 104;
break;
case 52:return 116;
break;
case 53:return 117;
break;
case 54:return 27;
break;
case 55:return 195;
break;
case 56:return 119;
break;
case 57:return 121;
break;
case 58:return 194;
break;
case 59:return '||';
break;
case 60:return 135;
break;
case 61:return 140;
break;
case 62:return 69;
break;
case 63:return 70;
break;
case 64:return 166;
break;
case 65:return 168;
break;
case 66:return 148;
break;
case 67:return '!';
break;
case 68:return 111;
break;
case 69:return 165;
break;
case 70:return 71;
break;
case 71:return 183;
break;
case 72:return 141;
break;
case 73:return 161;
break;
case 74:return 162;
break;
case 75:return 163;
break;
case 76:return 184;
break;
case 77:return 198;
break;
case 78:return 209;
break;
case 79:return 210;
break;
case 80:return 7;
break;
case 81:return 'unexpected word "'+yy_.yytext+'"';
break;
case 82:return 'invalid character '+yy_.yytext;
break;
}
},
rules: [/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^\/]|\\\/))*\*\/))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:@)/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(\{((([+-])?([0-9])+))((,(((([+-])?([0-9])+))|\*)?))?\}))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:{ANON})/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:a\b)/,/^(?:(\/([^\u002f\u005C\u000A\u000D]|\\[nrt\\|.?*+(){}$\u002D\u005B\u005D\u005E\/]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))+\/[smix]*))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:(\{([^%\\]|\\[%\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*%\}))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:([Bb][Aa][Ss][Ee]))/,/^(?:([Pp][Rr][Ee][Ff][Ii][Xx]))/,/^(?:([iI][mM][pP][oO][rR][tT]))/,/^(?:([sS][tT][aA][rR][tT]))/,/^(?:([eE][xX][tT][eE][rR][nN][aA][lL]))/,/^(?:([Aa][Bb][Ss][Tt][Rr][Aa][Cc][Tt]))/,/^(?:([Rr][Ee][Ss][Tt][Rr][Ii][Cc][Tt][Ss]))/,/^(?:([Ee][Xx][Tt][Ee][Nn][Dd][Ss]))/,/^(?:([Cc][Ll][Oo][Ss][Ee][Dd]))/,/^(?:([Ee][Xx][Tt][Rr][Aa]))/,/^(?:([Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Bb][Nn][Oo][Dd][Ee]))/,/^(?:([Ii][Rr][Ii]))/,/^(?:([Nn][Oo][Nn][Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Aa][Nn][Dd]))/,/^(?:([Oo][Rr]))/,/^(?:([No][Oo][Tt]))/,/^(?:([Oo][Nn]))/,/^(?:([Ss][Hh][Aa][Pp][Ee]))/,/^(?:([Ee][Xx][Pp][Rr][Ee][Ss][Ss][Ii][Oo][Nn]))/,/^(?:([Mm][Ii][Nn][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Ii][Nn][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Ii][Nn][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Aa][Xx][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Tt][Oo][Tt][Aa][Ll][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:([Ff][Rr][Aa][Cc][Tt][Ii][Oo][Nn][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:=)/,/^(?:\/\/)/,/^(?:\{)/,/^(?:\})/,/^(?:&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\$)/,/^(?:!)/,/^(?:\^\^)/,/^(?:\^)/,/^(?:\.)/,/^(?:~)/,/^(?:;)/,/^(?:\*)/,/^(?:\+)/,/^(?:\?)/,/^(?:-)/,/^(?:%)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (true) {
exports.parser = ShExJison;
exports.Parser = ShExJison.Parser;
exports.parse = function () { return ShExJison.parse.apply(ShExJison, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = __webpack_require__(3).readFileSync(__webpack_require__(2).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(19)(module)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var pathModule = __webpack_require__(2);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(3);

// JavaScript implementation of realpath, ported from node pre-v6

var DEBUG = process.env.NODE_DEBUG && /fs/.test(process.env.NODE_DEBUG);

function rethrow() {
  // Only enable in debug mode. A backtrace uses ~1000 bytes of heap space and
  // is fairly slow to generate.
  var callback;
  if (DEBUG) {
    var backtrace = new Error;
    callback = debugCallback;
  } else
    callback = missingCallback;

  return callback;

  function debugCallback(err) {
    if (err) {
      backtrace.message = err.message;
      err = backtrace;
      missingCallback(err);
    }
  }

  function missingCallback(err) {
    if (err) {
      if (process.throwDeprecation)
        throw err;  // Forgot a callback but don't know where? Use NODE_DEBUG=fs
      else if (!process.noDeprecation) {
        var msg = 'fs: missing callback ' + (err.stack || err.message);
        if (process.traceDeprecation)
          console.trace(msg);
        else
          console.error(msg);
      }
    }
  }
}

function maybeCallback(cb) {
  return typeof cb === 'function' ? cb : rethrow();
}

var normalize = pathModule.normalize;

// Regexp that finds the next partion of a (partial) path
// result is [base_with_slash, base], e.g. ['somedir/', 'somedir']
if (isWindows) {
  var nextPartRe = /(.*?)(?:[\/\\]+|$)/g;
} else {
  var nextPartRe = /(.*?)(?:[\/]+|$)/g;
}

// Regex to find the device root, including trailing slash. E.g. 'c:\\'.
if (isWindows) {
  var splitRootRe = /^(?:[a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/][^\\\/]+)?[\\\/]*/;
} else {
  var splitRootRe = /^[\/]*/;
}

exports.realpathSync = function realpathSync(p, cache) {
  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return cache[p];
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstatSync(base);
      knownHard[base] = true;
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  // NB: p.length changes.
  while (pos < p.length) {
    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      continue;
    }

    var resolvedLink;
    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // some known symbolic link.  no need to stat again.
      resolvedLink = cache[base];
    } else {
      var stat = fs.lstatSync(base);
      if (!stat.isSymbolicLink()) {
        knownHard[base] = true;
        if (cache) cache[base] = base;
        continue;
      }

      // read the link if it wasn't read before
      // dev/ino always return 0 on windows, so skip the check.
      var linkTarget = null;
      if (!isWindows) {
        var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
        if (seenLinks.hasOwnProperty(id)) {
          linkTarget = seenLinks[id];
        }
      }
      if (linkTarget === null) {
        fs.statSync(base);
        linkTarget = fs.readlinkSync(base);
      }
      resolvedLink = pathModule.resolve(previous, linkTarget);
      // track this, if given a cache.
      if (cache) cache[base] = resolvedLink;
      if (!isWindows) seenLinks[id] = linkTarget;
    }

    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }

  if (cache) cache[original] = p;

  return p;
};


exports.realpath = function realpath(p, cache, cb) {
  if (typeof cb !== 'function') {
    cb = maybeCallback(cache);
    cache = null;
  }

  // make p is absolute
  p = pathModule.resolve(p);

  if (cache && Object.prototype.hasOwnProperty.call(cache, p)) {
    return process.nextTick(cb.bind(null, null, cache[p]));
  }

  var original = p,
      seenLinks = {},
      knownHard = {};

  // current character position in p
  var pos;
  // the partial path so far, including a trailing slash if any
  var current;
  // the partial path without a trailing slash (except when pointing at a root)
  var base;
  // the partial path scanned in the previous round, with slash
  var previous;

  start();

  function start() {
    // Skip over roots
    var m = splitRootRe.exec(p);
    pos = m[0].length;
    current = m[0];
    base = m[0];
    previous = '';

    // On windows, check that the root exists. On unix there is no need.
    if (isWindows && !knownHard[base]) {
      fs.lstat(base, function(err) {
        if (err) return cb(err);
        knownHard[base] = true;
        LOOP();
      });
    } else {
      process.nextTick(LOOP);
    }
  }

  // walk down the path, swapping out linked pathparts for their real
  // values
  function LOOP() {
    // stop if scanned past end of path
    if (pos >= p.length) {
      if (cache) cache[original] = p;
      return cb(null, p);
    }

    // find the next part
    nextPartRe.lastIndex = pos;
    var result = nextPartRe.exec(p);
    previous = current;
    current += result[0];
    base = previous + result[1];
    pos = nextPartRe.lastIndex;

    // continue if not a symlink
    if (knownHard[base] || (cache && cache[base] === base)) {
      return process.nextTick(LOOP);
    }

    if (cache && Object.prototype.hasOwnProperty.call(cache, base)) {
      // known symbolic link.  no need to stat again.
      return gotResolvedLink(cache[base]);
    }

    return fs.lstat(base, gotStat);
  }

  function gotStat(err, stat) {
    if (err) return cb(err);

    // if not a symlink, skip to the next path part
    if (!stat.isSymbolicLink()) {
      knownHard[base] = true;
      if (cache) cache[base] = base;
      return process.nextTick(LOOP);
    }

    // stat & read the link if not read before
    // call gotTarget as soon as the link target is known
    // dev/ino always return 0 on windows, so skip the check.
    if (!isWindows) {
      var id = stat.dev.toString(32) + ':' + stat.ino.toString(32);
      if (seenLinks.hasOwnProperty(id)) {
        return gotTarget(null, seenLinks[id], base);
      }
    }
    fs.stat(base, function(err) {
      if (err) return cb(err);

      fs.readlink(base, function(err, target) {
        if (!isWindows) seenLinks[id] = target;
        gotTarget(err, target);
      });
    });
  }

  function gotTarget(err, target, base) {
    if (err) return cb(err);

    var resolvedLink = pathModule.resolve(previous, target);
    if (cache) cache[base] = resolvedLink;
    gotResolvedLink(resolvedLink);
  }

  function gotResolvedLink(resolvedLink) {
    // resolve the link, then start over
    p = pathModule.resolve(resolvedLink, p.slice(pos));
    start();
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(51);
var balanced = __webpack_require__(52);

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),
/* 53 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = globSync
globSync.GlobSync = GlobSync

var fs = __webpack_require__(3)
var rp = __webpack_require__(24)
var minimatch = __webpack_require__(14)
var Minimatch = minimatch.Minimatch
var Glob = __webpack_require__(23).Glob
var util = __webpack_require__(12)
var path = __webpack_require__(2)
var assert = __webpack_require__(25)
var isAbsolute = __webpack_require__(16)
var common = __webpack_require__(26)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

function globSync (pattern, options) {
  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  return new GlobSync(pattern, options).found
}

function GlobSync (pattern, options) {
  if (!pattern)
    throw new Error('must provide pattern')

  if (typeof options === 'function' || arguments.length === 3)
    throw new TypeError('callback provided to sync glob\n'+
                        'See: https://github.com/isaacs/node-glob/issues/167')

  if (!(this instanceof GlobSync))
    return new GlobSync(pattern, options)

  setopts(this, pattern, options)

  if (this.noprocess)
    return this

  var n = this.minimatch.set.length
  this.matches = new Array(n)
  for (var i = 0; i < n; i ++) {
    this._process(this.minimatch.set[i], i, false)
  }
  this._finish()
}

GlobSync.prototype._finish = function () {
  assert(this instanceof GlobSync)
  if (this.realpath) {
    var self = this
    this.matches.forEach(function (matchset, index) {
      var set = self.matches[index] = Object.create(null)
      for (var p in matchset) {
        try {
          p = self._makeAbs(p)
          var real = rp.realpathSync(p, self.realpathCache)
          set[real] = true
        } catch (er) {
          if (er.syscall === 'stat')
            set[self._makeAbs(p)] = true
          else
            throw er
        }
      }
    })
  }
  common.finish(this)
}


GlobSync.prototype._process = function (pattern, index, inGlobStar) {
  assert(this instanceof GlobSync)

  // Get the first [n] parts of pattern that are all strings.
  var n = 0
  while (typeof pattern[n] === 'string') {
    n ++
  }
  // now n is the index of the first one that is *not* a string.

  // See if there's anything else
  var prefix
  switch (n) {
    // if not, then this is rather simple
    case pattern.length:
      this._processSimple(pattern.join('/'), index)
      return

    case 0:
      // pattern *starts* with some non-trivial item.
      // going to readdir(cwd), but not include the prefix in matches.
      prefix = null
      break

    default:
      // pattern has some string bits in the front.
      // whatever it starts with, whether that's 'absolute' like /foo/bar,
      // or 'relative' like '../baz'
      prefix = pattern.slice(0, n).join('/')
      break
  }

  var remain = pattern.slice(n)

  // get the list of entries.
  var read
  if (prefix === null)
    read = '.'
  else if (isAbsolute(prefix) || isAbsolute(pattern.join('/'))) {
    if (!prefix || !isAbsolute(prefix))
      prefix = '/' + prefix
    read = prefix
  } else
    read = prefix

  var abs = this._makeAbs(read)

  //if ignored, skip processing
  if (childrenIgnored(this, read))
    return

  var isGlobStar = remain[0] === minimatch.GLOBSTAR
  if (isGlobStar)
    this._processGlobStar(prefix, read, abs, remain, index, inGlobStar)
  else
    this._processReaddir(prefix, read, abs, remain, index, inGlobStar)
}


GlobSync.prototype._processReaddir = function (prefix, read, abs, remain, index, inGlobStar) {
  var entries = this._readdir(abs, inGlobStar)

  // if the abs isn't a dir, then nothing can match!
  if (!entries)
    return

  // It will only match dot entries if it starts with a dot, or if
  // dot is set.  Stuff like @(.foo|.bar) isn't allowed.
  var pn = remain[0]
  var negate = !!this.minimatch.negate
  var rawGlob = pn._glob
  var dotOk = this.dot || rawGlob.charAt(0) === '.'

  var matchedEntries = []
  for (var i = 0; i < entries.length; i++) {
    var e = entries[i]
    if (e.charAt(0) !== '.' || dotOk) {
      var m
      if (negate && !prefix) {
        m = !e.match(pn)
      } else {
        m = e.match(pn)
      }
      if (m)
        matchedEntries.push(e)
    }
  }

  var len = matchedEntries.length
  // If there are no matched entries, then nothing matches.
  if (len === 0)
    return

  // if this is the last remaining pattern bit, then no need for
  // an additional stat *unless* the user has specified mark or
  // stat explicitly.  We know they exist, since readdir returned
  // them.

  if (remain.length === 1 && !this.mark && !this.stat) {
    if (!this.matches[index])
      this.matches[index] = Object.create(null)

    for (var i = 0; i < len; i ++) {
      var e = matchedEntries[i]
      if (prefix) {
        if (prefix.slice(-1) !== '/')
          e = prefix + '/' + e
        else
          e = prefix + e
      }

      if (e.charAt(0) === '/' && !this.nomount) {
        e = path.join(this.root, e)
      }
      this._emitMatch(index, e)
    }
    // This was the last one, and no stats were needed
    return
  }

  // now test all matched entries as stand-ins for that part
  // of the pattern.
  remain.shift()
  for (var i = 0; i < len; i ++) {
    var e = matchedEntries[i]
    var newPattern
    if (prefix)
      newPattern = [prefix, e]
    else
      newPattern = [e]
    this._process(newPattern.concat(remain), index, inGlobStar)
  }
}


GlobSync.prototype._emitMatch = function (index, e) {
  if (isIgnored(this, e))
    return

  var abs = this._makeAbs(e)

  if (this.mark)
    e = this._mark(e)

  if (this.absolute) {
    e = abs
  }

  if (this.matches[index][e])
    return

  if (this.nodir) {
    var c = this.cache[abs]
    if (c === 'DIR' || Array.isArray(c))
      return
  }

  this.matches[index][e] = true

  if (this.stat)
    this._stat(e)
}


GlobSync.prototype._readdirInGlobStar = function (abs) {
  // follow all symlinked directories forever
  // just proceed as if this is a non-globstar situation
  if (this.follow)
    return this._readdir(abs, false)

  var entries
  var lstat
  var stat
  try {
    lstat = fs.lstatSync(abs)
  } catch (er) {
    if (er.code === 'ENOENT') {
      // lstat failed, doesn't exist
      return null
    }
  }

  var isSym = lstat && lstat.isSymbolicLink()
  this.symlinks[abs] = isSym

  // If it's not a symlink or a dir, then it's definitely a regular file.
  // don't bother doing a readdir in that case.
  if (!isSym && lstat && !lstat.isDirectory())
    this.cache[abs] = 'FILE'
  else
    entries = this._readdir(abs, false)

  return entries
}

GlobSync.prototype._readdir = function (abs, inGlobStar) {
  var entries

  if (inGlobStar && !ownProp(this.symlinks, abs))
    return this._readdirInGlobStar(abs)

  if (ownProp(this.cache, abs)) {
    var c = this.cache[abs]
    if (!c || c === 'FILE')
      return null

    if (Array.isArray(c))
      return c
  }

  try {
    return this._readdirEntries(abs, fs.readdirSync(abs))
  } catch (er) {
    this._readdirError(abs, er)
    return null
  }
}

GlobSync.prototype._readdirEntries = function (abs, entries) {
  // if we haven't asked to stat everything, then just
  // assume that everything in there exists, so we can avoid
  // having to stat it a second time.
  if (!this.mark && !this.stat) {
    for (var i = 0; i < entries.length; i ++) {
      var e = entries[i]
      if (abs === '/')
        e = abs + e
      else
        e = abs + '/' + e
      this.cache[e] = true
    }
  }

  this.cache[abs] = entries

  // mark and cache dir-ness
  return entries
}

GlobSync.prototype._readdirError = function (f, er) {
  // handle errors, and cache the information
  switch (er.code) {
    case 'ENOTSUP': // https://github.com/isaacs/node-glob/issues/205
    case 'ENOTDIR': // totally normal. means it *does* exist.
      var abs = this._makeAbs(f)
      this.cache[abs] = 'FILE'
      if (abs === this.cwdAbs) {
        var error = new Error(er.code + ' invalid cwd ' + this.cwd)
        error.path = this.cwd
        error.code = er.code
        throw error
      }
      break

    case 'ENOENT': // not terribly unusual
    case 'ELOOP':
    case 'ENAMETOOLONG':
    case 'UNKNOWN':
      this.cache[this._makeAbs(f)] = false
      break

    default: // some unusual error.  Treat as failure.
      this.cache[this._makeAbs(f)] = false
      if (this.strict)
        throw er
      if (!this.silent)
        console.error('glob error', er)
      break
  }
}

GlobSync.prototype._processGlobStar = function (prefix, read, abs, remain, index, inGlobStar) {

  var entries = this._readdir(abs, inGlobStar)

  // no entries means not a dir, so it can never have matches
  // foo.txt/** doesn't match foo.txt
  if (!entries)
    return

  // test without the globstar, and with every child both below
  // and replacing the globstar.
  var remainWithoutGlobStar = remain.slice(1)
  var gspref = prefix ? [ prefix ] : []
  var noGlobStar = gspref.concat(remainWithoutGlobStar)

  // the noGlobStar pattern exits the inGlobStar state
  this._process(noGlobStar, index, false)

  var len = entries.length
  var isSym = this.symlinks[abs]

  // If it's a symlink, and we're in a globstar, then stop
  if (isSym && inGlobStar)
    return

  for (var i = 0; i < len; i++) {
    var e = entries[i]
    if (e.charAt(0) === '.' && !this.dot)
      continue

    // these two cases enter the inGlobStar state
    var instead = gspref.concat(entries[i], remainWithoutGlobStar)
    this._process(instead, index, true)

    var below = gspref.concat(entries[i], remain)
    this._process(below, index, true)
  }
}

GlobSync.prototype._processSimple = function (prefix, index) {
  // XXX review this.  Shouldn't it be doing the mounting etc
  // before doing stat?  kinda weird?
  var exists = this._stat(prefix)

  if (!this.matches[index])
    this.matches[index] = Object.create(null)

  // If it doesn't exist, then just mark the lack of results
  if (!exists)
    return

  if (prefix && isAbsolute(prefix) && !this.nomount) {
    var trail = /[\/\\]$/.test(prefix)
    if (prefix.charAt(0) === '/') {
      prefix = path.join(this.root, prefix)
    } else {
      prefix = path.resolve(this.root, prefix)
      if (trail)
        prefix += '/'
    }
  }

  if (process.platform === 'win32')
    prefix = prefix.replace(/\\/g, '/')

  // Mark this as a match
  this._emitMatch(index, prefix)
}

// Returns either 'DIR', 'FILE', or false
GlobSync.prototype._stat = function (f) {
  var abs = this._makeAbs(f)
  var needDir = f.slice(-1) === '/'

  if (f.length > this.maxLength)
    return false

  if (!this.stat && ownProp(this.cache, abs)) {
    var c = this.cache[abs]

    if (Array.isArray(c))
      c = 'DIR'

    // It exists, but maybe not how we need it
    if (!needDir || c === 'DIR')
      return c

    if (needDir && c === 'FILE')
      return false

    // otherwise we have to stat, because maybe c=true
    // if we know it exists, but not what it is.
  }

  var exists
  var stat = this.statCache[abs]
  if (!stat) {
    var lstat
    try {
      lstat = fs.lstatSync(abs)
    } catch (er) {
      if (er && (er.code === 'ENOENT' || er.code === 'ENOTDIR')) {
        this.statCache[abs] = false
        return false
      }
    }

    if (lstat && lstat.isSymbolicLink()) {
      try {
        stat = fs.statSync(abs)
      } catch (er) {
        stat = lstat
      }
    } else {
      stat = lstat
    }
  }

  this.statCache[abs] = stat

  var c = true
  if (stat)
    c = stat.isDirectory() ? 'DIR' : 'FILE'

  this.cache[abs] = this.cache[abs] || c

  if (needDir && c === 'FILE')
    return false

  return c
}

GlobSync.prototype._mark = function (p) {
  return common.mark(this, p)
}

GlobSync.prototype._makeAbs = function (f) {
  return common.makeAbs(this, f)
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var wrappy = __webpack_require__(27)
var reqs = Object.create(null)
var once = __webpack_require__(28)

module.exports = wrappy(inflight)

function inflight (key, cb) {
  if (reqs[key]) {
    reqs[key].push(cb)
    return null
  } else {
    reqs[key] = [cb]
    return makeres(key)
  }
}

function makeres (key) {
  return once(function RES () {
    var cbs = reqs[key]
    var len = cbs.length
    var args = slice(arguments)

    // XXX It's somewhat ambiguous whether a new callback added in this
    // pass should be queued for later execution if something in the
    // list of callbacks throws, or if it should just be discarded.
    // However, it's such an edge case that it hardly matters, and either
    // choice is likely as surprising as the other.
    // As it happens, we do go ahead and schedule it for later execution.
    try {
      for (var i = 0; i < len; i++) {
        cbs[i].apply(null, args)
      }
    } finally {
      if (cbs.length > len) {
        // added more in the interim.
        // de-zalgo, just in case, but don't call again.
        cbs.splice(0, len)
        process.nextTick(function () {
          RES.apply(null, args)
        })
      } else {
        delete reqs[key]
      }
    }
  })
}

function slice (args) {
  var length = args.length
  var array = []

  for (var i = 0; i < length; i++) array[i] = args[i]
  return array
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 57;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 59 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(8),
    Buffer = _require.Buffer;

var _require2 = __webpack_require__(63),
    inspect = _require2.inspect;

var custom = inspect && inspect.custom || 'inspect';

function copyBuffer(src, target, offset) {
  Buffer.prototype.copy.call(src, target, offset);
}

module.exports =
/*#__PURE__*/
function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(BufferList, [{
    key: "push",
    value: function push(v) {
      var entry = {
        data: v,
        next: null
      };
      if (this.length > 0) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
      ++this.length;
    }
  }, {
    key: "unshift",
    value: function unshift(v) {
      var entry = {
        data: v,
        next: this.head
      };
      if (this.length === 0) this.tail = entry;
      this.head = entry;
      ++this.length;
    }
  }, {
    key: "shift",
    value: function shift() {
      if (this.length === 0) return;
      var ret = this.head.data;
      if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
      --this.length;
      return ret;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = this.tail = null;
      this.length = 0;
    }
  }, {
    key: "join",
    value: function join(s) {
      if (this.length === 0) return '';
      var p = this.head;
      var ret = '' + p.data;

      while (p = p.next) {
        ret += s + p.data;
      }

      return ret;
    }
  }, {
    key: "concat",
    value: function concat(n) {
      if (this.length === 0) return Buffer.alloc(0);
      var ret = Buffer.allocUnsafe(n >>> 0);
      var p = this.head;
      var i = 0;

      while (p) {
        copyBuffer(p.data, ret, i);
        i += p.data.length;
        p = p.next;
      }

      return ret;
    } // Consumes a specified amount of bytes or characters from the buffered data.

  }, {
    key: "consume",
    value: function consume(n, hasStrings) {
      var ret;

      if (n < this.head.data.length) {
        // `slice` is the same for buffers and strings.
        ret = this.head.data.slice(0, n);
        this.head.data = this.head.data.slice(n);
      } else if (n === this.head.data.length) {
        // First chunk is a perfect match.
        ret = this.shift();
      } else {
        // Result spans more than one buffer.
        ret = hasStrings ? this._getString(n) : this._getBuffer(n);
      }

      return ret;
    }
  }, {
    key: "first",
    value: function first() {
      return this.head.data;
    } // Consumes a specified amount of characters from the buffered data.

  }, {
    key: "_getString",
    value: function _getString(n) {
      var p = this.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;

      while (p = p.next) {
        var str = p.data;
        var nb = n > str.length ? str.length : n;
        if (nb === str.length) ret += str;else ret += str.slice(0, n);
        n -= nb;

        if (n === 0) {
          if (nb === str.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = str.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Consumes a specified amount of bytes from the buffered data.

  }, {
    key: "_getBuffer",
    value: function _getBuffer(n) {
      var ret = Buffer.allocUnsafe(n);
      var p = this.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;

      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;

        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) this.head = p.next;else this.head = this.tail = null;
          } else {
            this.head = p;
            p.data = buf.slice(nb);
          }

          break;
        }

        ++c;
      }

      this.length -= c;
      return ret;
    } // Make sure the linked list only shows the minimal necessary information.

  }, {
    key: custom,
    value: function value(_, options) {
      return inspect(this, _objectSpread({}, options, {
        // Only inspect one level.
        depth: 0,
        // It should not recurse.
        customInspect: false
      }));
    }
  }]);

  return BufferList;
}();

/***/ }),
/* 63 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(8)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _Object$setPrototypeO;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var finished = __webpack_require__(17);

var kLastResolve = Symbol('lastResolve');
var kLastReject = Symbol('lastReject');
var kError = Symbol('error');
var kEnded = Symbol('ended');
var kLastPromise = Symbol('lastPromise');
var kHandlePromise = Symbol('handlePromise');
var kStream = Symbol('stream');

function createIterResult(value, done) {
  return {
    value: value,
    done: done
  };
}

function readAndResolve(iter) {
  var resolve = iter[kLastResolve];

  if (resolve !== null) {
    var data = iter[kStream].read(); // we defer if data is null
    // we can be expecting either 'end' or
    // 'error'

    if (data !== null) {
      iter[kLastPromise] = null;
      iter[kLastResolve] = null;
      iter[kLastReject] = null;
      resolve(createIterResult(data, false));
    }
  }
}

function onReadable(iter) {
  // we wait for the next tick, because it might
  // emit an error with process.nextTick
  process.nextTick(readAndResolve, iter);
}

function wrapForNext(lastPromise, iter) {
  return function (resolve, reject) {
    lastPromise.then(function () {
      if (iter[kEnded]) {
        resolve(createIterResult(undefined, true));
        return;
      }

      iter[kHandlePromise](resolve, reject);
    }, reject);
  };
}

var AsyncIteratorPrototype = Object.getPrototypeOf(function () {});
var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
  get stream() {
    return this[kStream];
  },

  next: function next() {
    var _this = this;

    // if we have detected an error in the meanwhile
    // reject straight away
    var error = this[kError];

    if (error !== null) {
      return Promise.reject(error);
    }

    if (this[kEnded]) {
      return Promise.resolve(createIterResult(undefined, true));
    }

    if (this[kStream].destroyed) {
      // We need to defer via nextTick because if .destroy(err) is
      // called, the error will be emitted via nextTick, and
      // we cannot guarantee that there is no error lingering around
      // waiting to be emitted.
      return new Promise(function (resolve, reject) {
        process.nextTick(function () {
          if (_this[kError]) {
            reject(_this[kError]);
          } else {
            resolve(createIterResult(undefined, true));
          }
        });
      });
    } // if we have multiple next() calls
    // we will wait for the previous Promise to finish
    // this logic is optimized to support for await loops,
    // where next() is only called once at a time


    var lastPromise = this[kLastPromise];
    var promise;

    if (lastPromise) {
      promise = new Promise(wrapForNext(lastPromise, this));
    } else {
      // fast path needed to support multiple this.push()
      // without triggering the next() queue
      var data = this[kStream].read();

      if (data !== null) {
        return Promise.resolve(createIterResult(data, false));
      }

      promise = new Promise(this[kHandlePromise]);
    }

    this[kLastPromise] = promise;
    return promise;
  }
}, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function () {
  return this;
}), _defineProperty(_Object$setPrototypeO, "return", function _return() {
  var _this2 = this;

  // destroy(err, cb) is a private API
  // we can guarantee we have that here, because we control the
  // Readable class this is attached to
  return new Promise(function (resolve, reject) {
    _this2[kStream].destroy(null, function (err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(createIterResult(undefined, true));
    });
  });
}), _Object$setPrototypeO), AsyncIteratorPrototype);

var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator(stream) {
  var _Object$create;

  var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
    value: stream,
    writable: true
  }), _defineProperty(_Object$create, kLastResolve, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kLastReject, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kError, {
    value: null,
    writable: true
  }), _defineProperty(_Object$create, kEnded, {
    value: stream._readableState.endEmitted,
    writable: true
  }), _defineProperty(_Object$create, kHandlePromise, {
    value: function value(resolve, reject) {
      var data = iterator[kStream].read();

      if (data) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(data, false));
      } else {
        iterator[kLastResolve] = resolve;
        iterator[kLastReject] = reject;
      }
    },
    writable: true
  }), _Object$create));
  iterator[kLastPromise] = null;
  finished(stream, function (err) {
    if (err && err.code !== 'ERR_STREAM_PREMATURE_CLOSE') {
      var reject = iterator[kLastReject]; // reject if we are waiting for data in the Promise
      // returned by next() and store the error

      if (reject !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        reject(err);
      }

      iterator[kError] = err;
      return;
    }

    var resolve = iterator[kLastResolve];

    if (resolve !== null) {
      iterator[kLastPromise] = null;
      iterator[kLastResolve] = null;
      iterator[kLastReject] = null;
      resolve(createIterResult(undefined, true));
    }

    iterator[kEnded] = true;
  });
  stream.on('readable', onReadable.bind(null, iterator));
  return iterator;
};

module.exports = createReadableStreamAsyncIterator;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function () {
  throw new Error('Readable.from is not available in the browser')
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.


module.exports = PassThrough;

var Transform = __webpack_require__(35);

__webpack_require__(9)(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);
  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Ported from https://github.com/mafintosh/pump with
// permission from the author, Mathias Buus (@mafintosh).


var eos;

function once(callback) {
  var called = false;
  return function () {
    if (called) return;
    called = true;
    callback.apply(void 0, arguments);
  };
}

var _require$codes = __webpack_require__(4).codes,
    ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS,
    ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;

function noop(err) {
  // Rethrow the error if it exists to avoid swallowing it
  if (err) throw err;
}

function isRequest(stream) {
  return stream.setHeader && typeof stream.abort === 'function';
}

function destroyer(stream, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream.on('close', function () {
    closed = true;
  });
  if (eos === undefined) eos = __webpack_require__(17);
  eos(stream, {
    readable: reading,
    writable: writing
  }, function (err) {
    if (err) return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function (err) {
    if (closed) return;
    if (destroyed) return;
    destroyed = true; // request.destroy just do .end - .abort is what we want

    if (isRequest(stream)) return stream.abort();
    if (typeof stream.destroy === 'function') return stream.destroy();
    callback(err || new ERR_STREAM_DESTROYED('pipe'));
  };
}

function call(fn) {
  fn();
}

function pipe(from, to) {
  return from.pipe(to);
}

function popCallback(streams) {
  if (!streams.length) return noop;
  if (typeof streams[streams.length - 1] !== 'function') return noop;
  return streams.pop();
}

function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }

  var callback = popCallback(streams);
  if (Array.isArray(streams[0])) streams = streams[0];

  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS('streams');
  }

  var error;
  var destroys = streams.map(function (stream, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream, reading, writing, function (err) {
      if (!error) error = err;
      if (err) destroys.forEach(call);
      if (reading) return;
      destroys.forEach(call);
      callback(error);
    });
  });
  return streams.reduce(pipe);
}

module.exports = pipeline;

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Lexer", function() { return /* reexport */ N3Lexer["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Parser", function() { return /* reexport */ N3Parser_N3Parser; });
__webpack_require__.d(__webpack_exports__, "Writer", function() { return /* reexport */ N3Writer_N3Writer; });
__webpack_require__.d(__webpack_exports__, "Store", function() { return /* reexport */ N3Store_N3Store; });
__webpack_require__.d(__webpack_exports__, "StreamParser", function() { return /* reexport */ N3StreamParser_N3StreamParser; });
__webpack_require__.d(__webpack_exports__, "StreamWriter", function() { return /* reexport */ N3StreamWriter_N3StreamWriter; });
__webpack_require__.d(__webpack_exports__, "Util", function() { return /* reexport */ N3Util_namespaceObject; });
__webpack_require__.d(__webpack_exports__, "DataFactory", function() { return /* reexport */ N3DataFactory; });
__webpack_require__.d(__webpack_exports__, "Term", function() { return /* reexport */ Term; });
__webpack_require__.d(__webpack_exports__, "NamedNode", function() { return /* reexport */ NamedNode; });
__webpack_require__.d(__webpack_exports__, "Literal", function() { return /* reexport */ Literal; });
__webpack_require__.d(__webpack_exports__, "BlankNode", function() { return /* reexport */ BlankNode; });
__webpack_require__.d(__webpack_exports__, "Variable", function() { return /* reexport */ Variable; });
__webpack_require__.d(__webpack_exports__, "DefaultGraph", function() { return /* reexport */ DefaultGraph; });
__webpack_require__.d(__webpack_exports__, "Quad", function() { return /* reexport */ Quad; });
__webpack_require__.d(__webpack_exports__, "Triple", function() { return /* reexport */ Quad; });
__webpack_require__.d(__webpack_exports__, "termFromId", function() { return /* reexport */ termFromId; });
__webpack_require__.d(__webpack_exports__, "termToId", function() { return /* reexport */ termToId; });

// NAMESPACE OBJECT: ./node_modules/n3/src/N3Util.js
var N3Util_namespaceObject = {};
__webpack_require__.r(N3Util_namespaceObject);
__webpack_require__.d(N3Util_namespaceObject, "isNamedNode", function() { return isNamedNode; });
__webpack_require__.d(N3Util_namespaceObject, "isBlankNode", function() { return isBlankNode; });
__webpack_require__.d(N3Util_namespaceObject, "isLiteral", function() { return isLiteral; });
__webpack_require__.d(N3Util_namespaceObject, "isVariable", function() { return isVariable; });
__webpack_require__.d(N3Util_namespaceObject, "isDefaultGraph", function() { return isDefaultGraph; });
__webpack_require__.d(N3Util_namespaceObject, "inDefaultGraph", function() { return inDefaultGraph; });
__webpack_require__.d(N3Util_namespaceObject, "prefix", function() { return N3Util_prefix; });
__webpack_require__.d(N3Util_namespaceObject, "prefixes", function() { return N3Util_prefixes; });

// EXTERNAL MODULE: ./node_modules/n3/src/N3Lexer.js
var N3Lexer = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/n3/src/IRIs.js
var IRIs = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/n3/src/N3Util.js
// **N3Util** provides N3 utility functions.



// Tests whether the given term represents an IRI
function isNamedNode(term) {
  return !!term && term.termType === 'NamedNode';
}

// Tests whether the given term represents a blank node
function isBlankNode(term) {
  return !!term && term.termType === 'BlankNode';
}

// Tests whether the given term represents a literal
function isLiteral(term) {
  return !!term && term.termType === 'Literal';
}

// Tests whether the given term represents a variable
function isVariable(term) {
  return !!term && term.termType === 'Variable';
}

// Tests whether the given term represents the default graph
function isDefaultGraph(term) {
  return !!term && term.termType === 'DefaultGraph';
}

// Tests whether the given quad is in the default graph
function inDefaultGraph(quad) {
  return isDefaultGraph(quad.graph);
}

// Creates a function that prepends the given IRI to a local name
function N3Util_prefix(iri, factory) {
  return N3Util_prefixes({ '': iri }, factory)('');
}

// Creates a function that allows registering and expanding prefixes
function N3Util_prefixes(defaultPrefixes, factory) {
  // Add all of the default prefixes
  var prefixes = Object.create(null);
  for (var prefix in defaultPrefixes)
    processPrefix(prefix, defaultPrefixes[prefix]);
  // Set the default factory if none was specified
  factory = factory || N3DataFactory;

  // Registers a new prefix (if an IRI was specified)
  // or retrieves a function that expands an existing prefix (if no IRI was specified)
  function processPrefix(prefix, iri) {
    // Create a new prefix if an IRI is specified or the prefix doesn't exist
    if (typeof iri === 'string') {
      // Create a function that expands the prefix
      var cache = Object.create(null);
      prefixes[prefix] = function (local) {
        return cache[local] || (cache[local] = factory.namedNode(iri + local));
      };
    }
    else if (!(prefix in prefixes)) {
      throw new Error('Unknown prefix: ' + prefix);
    }
    return prefixes[prefix];
  }
  return processPrefix;
}

// CONCATENATED MODULE: ./node_modules/n3/src/N3DataFactory.js
// N3.js implementations of the RDF/JS core data types
// See https://github.com/rdfjs/representation-task-force/blob/master/interface-spec.md



const { rdf, xsd } = IRIs["a" /* default */];

let DEFAULTGRAPH;
let _blankNodeCounter = 0;

const escapedLiteral = /^"(.*".*)(?="[^"]*$)/;
const quadId = /^<<("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ("(?:""|[^"])*"[^ ]*|[^ ]+) ?("(?:""|[^"])*"[^ ]*|[^ ]+)?>>$/;

// ## DataFactory singleton
const DataFactory = {
  namedNode: N3DataFactory_namedNode,
  blankNode,
  variable,
  literal,
  defaultGraph,
  quad: N3DataFactory_quad,
  triple: N3DataFactory_quad,
};
/* harmony default export */ var N3DataFactory = (DataFactory);

// ## Term constructor
class Term {
  constructor(id) {
    this.id = id;
  }

  // ### The value of this term
  get value() {
    return this.id;
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through ids
    if (other instanceof Term)
      return this.id === other.id;
    // Otherwise, compare term type and value
    return !!other && this.termType === other.termType &&
                      this.value    === other.value;
  }

  // ### Returns a plain object representation of this term
  toJSON() {
    return {
      termType: this.termType,
      value:    this.value,
    };
  }
}


// ## NamedNode constructor
class NamedNode extends Term {
  // ### The term type of this term
  get termType() {
    return 'NamedNode';
  }
}

// ## Literal constructor
class Literal extends Term {
  // ### The term type of this term
  get termType() {
    return 'Literal';
  }

  // ### The text value of this literal
  get value() {
    return this.id.substring(1, this.id.lastIndexOf('"'));
  }

  // ### The language of this literal
  get language() {
    // Find the last quotation mark (e.g., '"abc"@en-us')
    var id = this.id, atPos = id.lastIndexOf('"') + 1;
    // If "@" it follows, return the remaining substring; empty otherwise
    return atPos < id.length && id[atPos++] === '@' ? id.substr(atPos).toLowerCase() : '';
  }

  // ### The datatype IRI of this literal
  get datatype() {
    return new NamedNode(this.datatypeString);
  }

  // ### The datatype string of this literal
  get datatypeString() {
    // Find the last quotation mark (e.g., '"abc"^^http://ex.org/types#t')
    var id = this.id, dtPos = id.lastIndexOf('"') + 1, ch;
    // If "^" it follows, return the remaining substring
    return dtPos < id.length && (ch = id[dtPos]) === '^' ? id.substr(dtPos + 2) :
           // If "@" follows, return rdf:langString; xsd:string otherwise
           (ch !== '@' ? xsd.string : rdf.langString);
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both literals were created by this library,
    // equality can be computed through ids
    if (other instanceof Literal)
      return this.id === other.id;
    // Otherwise, compare term type, value, language, and datatype
    return !!other && !!other.datatype &&
                      this.termType === other.termType &&
                      this.value    === other.value    &&
                      this.language === other.language &&
                      this.datatype.value === other.datatype.value;
  }

  toJSON() {
    return {
      termType: this.termType,
      value:    this.value,
      language: this.language,
      datatype: { termType: 'NamedNode', value: this.datatypeString },
    };
  }
}

// ## BlankNode constructor
class BlankNode extends Term {
  constructor(name) {
    super('_:' + name);
  }

  // ### The term type of this term
  get termType() {
    return 'BlankNode';
  }

  // ### The name of this blank node
  get value() {
    return this.id.substr(2);
  }
}

class Variable extends Term {
  constructor(name) {
    super('?' + name);
  }

  // ### The term type of this term
  get termType() {
    return 'Variable';
  }

  // ### The name of this variable
  get value() {
    return this.id.substr(1);
  }
}

// ## DefaultGraph constructor
class DefaultGraph extends Term {
  constructor() {
    super('');
    return DEFAULTGRAPH || this;
  }

  // ### The term type of this term
  get termType() {
    return 'DefaultGraph';
  }

  // ### Returns whether this object represents the same term as the other
  equals(other) {
    // If both terms were created by this library,
    // equality can be computed through strict equality;
    // otherwise, compare term types.
    return (this === other) || (!!other && (this.termType === other.termType));
  }
}

// ## DefaultGraph singleton
DEFAULTGRAPH = new DefaultGraph();


// ### Constructs a term from the given internal string ID
function termFromId(id, factory) {
  factory = factory || DataFactory;

  // Falsy value or empty string indicate the default graph
  if (!id)
    return factory.defaultGraph();

  // Identify the term type based on the first character
  switch (id[0]) {
  case '?':
    return factory.variable(id.substr(1));
  case '_':
    return factory.blankNode(id.substr(2));
  case '"':
    // Shortcut for internal literals
    if (factory === DataFactory)
      return new Literal(id);
    // Literal without datatype or language
    if (id[id.length - 1] === '"')
      return factory.literal(id.substr(1, id.length - 2));
    // Literal with datatype or language
    var endPos = id.lastIndexOf('"', id.length - 1);
    return factory.literal(id.substr(1, endPos - 1),
            id[endPos + 1] === '@' ? id.substr(endPos + 2)
                                   : factory.namedNode(id.substr(endPos + 3)));
  case '<':
    const components = quadId.exec(id);
    return factory.quad(
      termFromId(unescapeQuotes(components[1]), factory),
      termFromId(unescapeQuotes(components[2]), factory),
      termFromId(unescapeQuotes(components[3]), factory),
      components[4] && termFromId(unescapeQuotes(components[4]), factory)
    );
  default:
    return factory.namedNode(id);
  }
}

// ### Constructs an internal string ID from the given term or ID string
function termToId(term) {
  if (typeof term === 'string')
    return term;
  if (term instanceof Term && term.termType !== 'Quad')
    return term.id;
  if (!term)
    return DEFAULTGRAPH.id;

  // Term instantiated with another library
  switch (term.termType) {
  case 'NamedNode':    return term.value;
  case 'BlankNode':    return '_:' + term.value;
  case 'Variable':     return '?' + term.value;
  case 'DefaultGraph': return '';
  case 'Literal':      return '"' + term.value + '"' +
    (term.language ? '@' + term.language :
      (term.datatype && term.datatype.value !== xsd.string ? '^^' + term.datatype.value : ''));
  case 'Quad':
    // To identify RDF* quad components, we escape quotes by doubling them.
    // This avoids the overhead of backslash parsing of Turtle-like syntaxes.
    return `<<${
        escapeQuotes(termToId(term.subject))
      } ${
        escapeQuotes(termToId(term.predicate))
      } ${
        escapeQuotes(termToId(term.object))
      }${
        (isDefaultGraph(term.graph)) ? '' : ` ${termToId(term.graph)}`
      }>>`;
  default: throw new Error('Unexpected termType: ' + term.termType);
  }
}


// ## Quad constructor
class Quad extends Term {
  constructor(subject, predicate, object, graph) {
    super('');
    this.subject   = subject;
    this.predicate = predicate;
    this.object    = object;
    this.graph     = graph || DEFAULTGRAPH;
  }

  // ### The term type of this term
  get termType() {
    return 'Quad';
  }

  // ### Returns a plain object representation of this quad
  toJSON() {
    return {
      termType:  this.termType,
      subject:   this.subject.toJSON(),
      predicate: this.predicate.toJSON(),
      object:    this.object.toJSON(),
      graph:     this.graph.toJSON(),
    };
  }

  // ### Returns whether this object represents the same quad as the other
  equals(other) {
    return !!other && this.subject.equals(other.subject)     &&
                      this.predicate.equals(other.predicate) &&
                      this.object.equals(other.object)       &&
                      this.graph.equals(other.graph);
  }
}


// ### Escapes the quotes within the given literal
function escapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/"/g, '""')}`);
}

// ### Unescapes the quotes within the given literal
function unescapeQuotes(id) {
  return id.replace(escapedLiteral, (_, quoted) => `"${quoted.replace(/""/g, '"')}`);
}

// ### Creates an IRI
function N3DataFactory_namedNode(iri) {
  return new NamedNode(iri);
}

// ### Creates a blank node
function blankNode(name) {
  return new BlankNode(name || `n3-${_blankNodeCounter++}`);
}

// ### Creates a literal
function literal(value, languageOrDataType) {
  // Create a language-tagged string
  if (typeof languageOrDataType === 'string')
    return new Literal('"' + value + '"@' + languageOrDataType.toLowerCase());

  // Automatically determine datatype for booleans and numbers
  let datatype = languageOrDataType ? languageOrDataType.value : '';
  if (datatype === '') {
    // Convert a boolean
    if (typeof value === 'boolean')
      datatype = xsd.boolean;
    // Convert an integer or double
    else if (typeof value === 'number') {
      if (Number.isFinite(value))
        datatype = Number.isInteger(value) ? xsd.integer : xsd.double;
      else {
        datatype = xsd.double;
        if (!Number.isNaN(value))
          value = value > 0 ? 'INF' : '-INF';
      }
    }
  }

  // Create a datatyped literal
  return (datatype === '' || datatype === xsd.string) ?
    new Literal('"' + value + '"') :
    new Literal('"' + value + '"^^' + datatype);
}

// ### Creates a variable
function variable(name) {
  return new Variable(name);
}

// ### Returns the default graph
function defaultGraph() {
  return DEFAULTGRAPH;
}

// ### Creates a quad
function N3DataFactory_quad(subject, predicate, object, graph) {
  return new Quad(subject, predicate, object, graph);
}

// CONCATENATED MODULE: ./node_modules/n3/src/N3Parser.js
// **N3Parser** parses N3 documents.




let blankNodePrefix = 0;

// ## Constructor
class N3Parser_N3Parser {
  constructor(options) {
    this._contextStack = [];
    this._graph = null;

    // Set the document IRI
    options = options || {};
    this._setBase(options.baseIRI);
    options.factory && initDataFactory(this, options.factory);

    // Set supported features depending on the format
    var format = (typeof options.format === 'string') ?
                 options.format.match(/\w*$/)[0].toLowerCase() : '',
        isTurtle = /turtle/.test(format), isTriG = /trig/.test(format),
        isNTriples = /triple/.test(format), isNQuads = /quad/.test(format),
        isN3 = this._n3Mode = /n3/.test(format),
        isLineMode = isNTriples || isNQuads;
    if (!(this._supportsNamedGraphs = !(isTurtle || isN3)))
      this._readPredicateOrNamedGraph = this._readPredicate;
    // Support triples in other graphs
    this._supportsQuads = !(isTurtle || isTriG || isNTriples || isN3);
    // Support nesting of triples
    this._supportsRDFStar = format === '' || /star|\*$/.test(format);
    // Disable relative IRIs in N-Triples or N-Quads mode
    if (isLineMode)
      this._resolveRelativeIRI = function (iri) { return null; };
    this._blankNodePrefix = typeof options.blankNodePrefix !== 'string' ? '' :
                              options.blankNodePrefix.replace(/^(?!_:)/, '_:');
    this._lexer = options.lexer || new N3Lexer["a" /* default */]({ lineMode: isLineMode, n3: isN3 });
    // Disable explicit quantifiers by default
    this._explicitQuantifiers = !!options.explicitQuantifiers;
  }

  // ## Static class methods

  // ### `_resetBlankNodePrefix` restarts blank node prefix identification
  static _resetBlankNodePrefix() {
    blankNodePrefix = 0;
  }

  // ## Private methods

  // ### `_setBase` sets the base IRI to resolve relative IRIs
  _setBase(baseIRI) {
    if (!baseIRI) {
      this._base = '';
      this._basePath = '';
    }
    else {
      // Remove fragment if present
      var fragmentPos = baseIRI.indexOf('#');
      if (fragmentPos >= 0)
        baseIRI = baseIRI.substr(0, fragmentPos);
      // Set base IRI and its components
      this._base = baseIRI;
      this._basePath   = baseIRI.indexOf('/') < 0 ? baseIRI :
                         baseIRI.replace(/[^\/?]*(?:\?.*)?$/, '');
      baseIRI = baseIRI.match(/^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i);
      this._baseRoot   = baseIRI[0];
      this._baseScheme = baseIRI[1];
    }
  }

  // ### `_saveContext` stores the current parsing context
  // when entering a new scope (list, blank node, formula)
  _saveContext(type, graph, subject, predicate, object) {
    var n3Mode = this._n3Mode;
    this._contextStack.push({
      subject: subject, predicate: predicate, object: object,
      graph: graph, type: type,
      inverse: n3Mode ? this._inversePredicate : false,
      blankPrefix: n3Mode ? this._prefixes._ : '',
      quantified: n3Mode ? this._quantified : null,
    });
    // The settings below only apply to N3 streams
    if (n3Mode) {
      // Every new scope resets the predicate direction
      this._inversePredicate = false;
      // In N3, blank nodes are scoped to a formula
      // (using a dot as separator, as a blank node label cannot start with it)
      this._prefixes._ = (this._graph ? this._graph.id.substr(2) + '.' : '.');
      // Quantifiers are scoped to a formula
      this._quantified = Object.create(this._quantified);
    }
  }

  // ### `_restoreContext` restores the parent context
  // when leaving a scope (list, blank node, formula)
  _restoreContext() {
    var context = this._contextStack.pop(), n3Mode = this._n3Mode;
    this._subject   = context.subject;
    this._predicate = context.predicate;
    this._object    = context.object;
    this._graph     = context.graph;
    // The settings below only apply to N3 streams
    if (n3Mode) {
      this._inversePredicate = context.inverse;
      this._prefixes._ = context.blankPrefix;
      this._quantified = context.quantified;
    }
  }

  // ### `_readInTopContext` reads a token when in the top context
  _readInTopContext(token) {
    switch (token.type) {
    // If an EOF token arrives in the top context, signal that we're done
    case 'eof':
      if (this._graph !== null)
        return this._error('Unclosed graph', token);
      delete this._prefixes._;
      return this._callback(null, null, this._prefixes);
    // It could be a prefix declaration
    case 'PREFIX':
      this._sparqlStyle = true;
    case '@prefix':
      return this._readPrefix;
    // It could be a base declaration
    case 'BASE':
      this._sparqlStyle = true;
    case '@base':
      return this._readBaseIRI;
    // It could be a graph
    case '{':
      if (this._supportsNamedGraphs) {
        this._graph = '';
        this._subject = null;
        return this._readSubject;
      }
    case 'GRAPH':
      if (this._supportsNamedGraphs)
        return this._readNamedGraphLabel;
    // Otherwise, the next token must be a subject
    default:
      return this._readSubject(token);
    }
  }

  // ### `_readEntity` reads an IRI, prefixed name, blank node, or variable
  _readEntity(token, quantifier) {
    var value;
    switch (token.type) {
    // Read a relative or absolute IRI
    case 'IRI':
    case 'typeIRI':
      var iri = this._resolveIRI(token.value);
      if (iri === null)
        return this._error('Invalid IRI', token);
      value = this._namedNode(iri);
      break;
    // Read a prefixed name
    case 'type':
    case 'prefixed':
      var prefix = this._prefixes[token.prefix];
      if (prefix === undefined)
        return this._error('Undefined prefix "' + token.prefix + ':"', token);
      value = this._namedNode(prefix + token.value);
      break;
    // Read a blank node
    case 'blank':
      value = this._blankNode(this._prefixes[token.prefix] + token.value);
      break;
    // Read a variable
    case 'var':
      value = this._variable(token.value.substr(1));
      break;
    // Everything else is not an entity
    default:
      return this._error('Expected entity but got ' + token.type, token);
    }
    // In N3 mode, replace the entity if it is quantified
    if (!quantifier && this._n3Mode && (value.id in this._quantified))
      value = this._quantified[value.id];
    return value;
  }

  // ### `_readSubject` reads a quad's subject
  _readSubject(token) {
    this._predicate = null;
    switch (token.type) {
    case '[':
      // Start a new quad with a new blank node as subject
      this._saveContext('blank', this._graph,
                        this._subject = this._blankNode(), null, null);
      return this._readBlankNodeHead;
    case '(':
      // Start a new list
      this._saveContext('list', this._graph, this.RDF_NIL, null, null);
      this._subject = null;
      return this._readListItem;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph,
                        this._graph = this._blankNode(), null, null);
      return this._readSubject;
    case '}':
       // No subject; the graph in which we are reading is closed instead
      return this._readPunctuation(token);
    case '@forSome':
      if (!this._n3Mode)
        return this._error('Unexpected "@forSome"', token);
      this._subject = null;
      this._predicate = this.N3_FORSOME;
      this._quantifier = this._blankNode;
      return this._readQuantifierList;
    case '@forAll':
      if (!this._n3Mode)
        return this._error('Unexpected "@forAll"', token);
      this._subject = null;
      this._predicate = this.N3_FORALL;
      this._quantifier = this._variable;
      return this._readQuantifierList;
    case 'literal':
      if (!this._n3Mode)
        return this._error('Unexpected literal', token);

      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        return this._completeSubjectLiteral;
      }
      else
        this._subject = this._literal(token.value, this._namedNode(token.prefix));

      break;
    case '<<':
      if (!this._supportsRDFStar)
        return this._error('Unexpected RDF* syntax', token);
      this._saveContext('<<', this._graph, null, null, null);
      this._graph = null;
      return this._readSubject;
    default:
      // Read the subject entity
      if ((this._subject = this._readEntity(token)) === undefined)
        return;
      // In N3 mode, the subject might be a path
      if (this._n3Mode)
        return this._getPathReader(this._readPredicateOrNamedGraph);
    }

    // The next token must be a predicate,
    // or, if the subject was actually a graph IRI, a named graph
    return this._readPredicateOrNamedGraph;
  }

  // ### `_readPredicate` reads a quad's predicate
  _readPredicate(token) {
    var type = token.type;
    switch (type) {
    case 'inverse':
      this._inversePredicate = true;
    case 'abbreviation':
      this._predicate = this.ABBREVIATIONS[token.value];
      break;
    case '.':
    case ']':
    case '}':
      // Expected predicate didn't come, must have been trailing semicolon
      if (this._predicate === null)
        return this._error('Unexpected ' + type, token);
      this._subject = null;
      return type === ']' ? this._readBlankNodeTail(token) : this._readPunctuation(token);
    case ';':
      // Additional semicolons can be safely ignored
      return this._predicate !== null ? this._readPredicate :
             this._error('Expected predicate but got ;', token);
    case 'blank':
      if (!this._n3Mode)
        return this._error('Disallowed blank node as predicate', token);
    default:
      if ((this._predicate = this._readEntity(token)) === undefined)
        return;
    }
    // The next token must be an object
    return this._readObject;
  }

  // ### `_readObject` reads a quad's object
  _readObject(token) {
    switch (token.type) {
    case 'literal':
      // Regular literal, can still get a datatype or language
      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        return this._readDataTypeOrLang;
      }
      // Pre-datatyped string literal (prefix stores the datatype)
      else
        this._object = this._literal(token.value, this._namedNode(token.prefix));
      break;
    case '[':
      // Start a new quad with a new blank node as subject
      this._saveContext('blank', this._graph, this._subject, this._predicate,
                        this._subject = this._blankNode());
      return this._readBlankNodeHead;
    case '(':
      // Start a new list
      this._saveContext('list', this._graph, this._subject, this._predicate, this.RDF_NIL);
      this._subject = null;
      return this._readListItem;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph, this._subject, this._predicate,
                        this._graph = this._blankNode());
      return this._readSubject;
    case '<<':
      if (!this._supportsRDFStar)
        return this._error('Unexpected RDF* syntax', token);
      this._saveContext('<<', this._graph, this._subject, this._predicate, null);
      this._graph = null;
      return this._readSubject;
    default:
      // Read the object entity
      if ((this._object = this._readEntity(token)) === undefined)
        return;
      // In N3 mode, the object might be a path
      if (this._n3Mode)
        return this._getPathReader(this._getContextEndReader());
    }
    return this._getContextEndReader();
  }

  // ### `_readPredicateOrNamedGraph` reads a quad's predicate, or a named graph
  _readPredicateOrNamedGraph(token) {
    return token.type === '{' ? this._readGraph(token) : this._readPredicate(token);
  }

  // ### `_readGraph` reads a graph
  _readGraph(token) {
    if (token.type !== '{')
      return this._error('Expected graph but got ' + token.type, token);
    // The "subject" we read is actually the GRAPH's label
    this._graph = this._subject, this._subject = null;
    return this._readSubject;
  }

  // ### `_readBlankNodeHead` reads the head of a blank node
  _readBlankNodeHead(token) {
    if (token.type === ']') {
      this._subject = null;
      return this._readBlankNodeTail(token);
    }
    else {
      this._predicate = null;
      return this._readPredicate(token);
    }
  }

  // ### `_readBlankNodeTail` reads the end of a blank node
  _readBlankNodeTail(token) {
    if (token.type !== ']')
      return this._readBlankNodePunctuation(token);

    // Store blank node quad
    if (this._subject !== null)
      this._emit(this._subject, this._predicate, this._object, this._graph);

    // Restore the parent context containing this blank node
    var empty = this._predicate === null;
    this._restoreContext();
    // If the blank node was the subject, continue reading the predicate
    if (this._object === null)
      // If the blank node was empty, it could be a named graph label
      return empty ? this._readPredicateOrNamedGraph : this._readPredicateAfterBlank;
    // If the blank node was the object, restore previous context and read punctuation
    else
      return this._getContextEndReader();
  }

  // ### `_readPredicateAfterBlank` reads a predicate after an anonymous blank node
  _readPredicateAfterBlank(token) {
    switch (token.type) {
    case '.':
    case '}':
      // No predicate is coming if the triple is terminated here
      this._subject = null;
      return this._readPunctuation(token);
    default:
      return this._readPredicate(token);
    }
  }

  // ### `_readListItem` reads items from a list
  _readListItem(token) {
    var item = null,                      // The item of the list
        list = null,                      // The list itself
        previousList = this._subject,     // The previous list that contains this list
        stack = this._contextStack,       // The stack of parent contexts
        parent = stack[stack.length - 1], // The parent containing the current list
        next = this._readListItem;        // The next function to execute

    switch (token.type) {
    case '[':
      // Stack the current list quad and start a new quad with a blank node as subject
      this._saveContext('blank', this._graph,
                        list = this._blankNode(), this.RDF_FIRST,
                        this._subject = item = this._blankNode());
      next = this._readBlankNodeHead;
      break;
    case '(':
      // Stack the current list quad and start a new list
      this._saveContext('list', this._graph,
                        list = this._blankNode(), this.RDF_FIRST, this.RDF_NIL);
      this._subject = null;
      break;
    case ')':
      // Closing the list; restore the parent context
      this._restoreContext();
      // If this list is contained within a parent list, return the membership quad here.
      // This will be `<parent list element> rdf:first <this list>.`.
      if (stack.length !== 0 && stack[stack.length - 1].type === 'list')
        this._emit(this._subject, this._predicate, this._object, this._graph);
      // Was this list the parent's subject?
      if (this._predicate === null) {
        // The next token is the predicate
        next = this._readPredicate;
        // No list tail if this was an empty list
        if (this._subject === this.RDF_NIL)
          return next;
      }
      // The list was in the parent context's object
      else {
        next = this._getContextEndReader();
        // No list tail if this was an empty list
        if (this._object === this.RDF_NIL)
          return next;
      }
      // Close the list by making the head nil
      list = this.RDF_NIL;
      break;
    case 'literal':
      // Regular literal, can still get a datatype or language
      if (token.prefix.length === 0) {
        this._literalValue = token.value;
        next = this._readListItemDataTypeOrLang;
      }
      // Pre-datatyped string literal (prefix stores the datatype)
      else {
        item = this._literal(token.value, this._namedNode(token.prefix));
        next = this._getContextEndReader();
      }
      break;
    case '{':
      // Start a new formula
      if (!this._n3Mode)
        return this._error('Unexpected graph', token);
      this._saveContext('formula', this._graph, this._subject, this._predicate,
                        this._graph = this._blankNode());
      return this._readSubject;
    default:
      if ((item = this._readEntity(token)) === undefined)
        return;
    }

     // Create a new blank node if no item head was assigned yet
    if (list === null)
      this._subject = list = this._blankNode();

    // Is this the first element of the list?
    if (previousList === null) {
      // This list is either the subject or the object of its parent
      if (parent.predicate === null)
        parent.subject = list;
      else
        parent.object = list;
    }
    else {
      // Continue the previous list with the current list
      this._emit(previousList, this.RDF_REST, list, this._graph);
    }
    // If an item was read, add it to the list
    if (item !== null) {
      // In N3 mode, the item might be a path
      if (this._n3Mode && (token.type === 'IRI' || token.type === 'prefixed')) {
        // Create a new context to add the item's path
        this._saveContext('item', this._graph, list, this.RDF_FIRST, item);
        this._subject = item, this._predicate = null;
        // _readPath will restore the context and output the item
        return this._getPathReader(this._readListItem);
      }
      // Output the item
      this._emit(list, this.RDF_FIRST, item, this._graph);
    }
    return next;
  }

  // ### `_readDataTypeOrLang` reads an _optional_ datatype or language
  _readDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, false);
  }


  // ### `_readListItemDataTypeOrLang` reads an _optional_ datatype or language in a list
  _readListItemDataTypeOrLang(token) {
    return this._completeObjectLiteral(token, true);
  }

  // ### `_completeLiteral` completes a literal with an optional datatype or language
  _completeLiteral(token) {
    // Create a simple string literal by default
    let literal = this._literal(this._literalValue);

    switch (token.type) {
    // Create a datatyped literal
    case 'type':
    case 'typeIRI':
      var datatype = this._readEntity(token);
      if (datatype === undefined) return; // No datatype means an error occurred
      literal = this._literal(this._literalValue, datatype);
      token = null;
      break;
    // Create a language-tagged string
    case 'langcode':
      literal = this._literal(this._literalValue, token.value);
      token = null;
      break;
    }

    return { token, literal };
  }

  // Completes a literal in subject position
  _completeSubjectLiteral(token) {
    this._subject = this._completeLiteral(token).literal;
    return this._readPredicateOrNamedGraph;
  }

  // Completes a literal in object position
  _completeObjectLiteral(token, listItem) {
    const completed = this._completeLiteral(token);
    if (!completed)
      return;
    this._object = completed.literal;

    // If this literal was part of a list, write the item
    // (we could also check the context stack, but passing in a flag is faster)
    if (listItem)
      this._emit(this._subject, this.RDF_FIRST, this._object, this._graph);
    // If the token was consumed, continue with the rest of the input
    if (completed.token === null)
      return this._getContextEndReader();
    // Otherwise, consume the token now
    else {
      this._readCallback = this._getContextEndReader();
      return this._readCallback(completed.token);
    }
  }

  // ### `_readFormulaTail` reads the end of a formula
  _readFormulaTail(token) {
    if (token.type !== '}')
      return this._readPunctuation(token);

    // Store the last quad of the formula
    if (this._subject !== null)
      this._emit(this._subject, this._predicate, this._object, this._graph);

    // Restore the parent context containing this formula
    this._restoreContext();
    // If the formula was the subject, continue reading the predicate.
    // If the formula was the object, read punctuation.
    return this._object === null ? this._readPredicate : this._getContextEndReader();
  }

  // ### `_readPunctuation` reads punctuation between quads or quad parts
  _readPunctuation(token) {
    var next, subject = this._subject, graph = this._graph,
        inversePredicate = this._inversePredicate;
    switch (token.type) {
    // A closing brace ends a graph
    case '}':
      if (this._graph === null)
        return this._error('Unexpected graph closing', token);
      if (this._n3Mode)
        return this._readFormulaTail(token);
      this._graph = null;
    // A dot just ends the statement, without sharing anything with the next
    case '.':
      this._subject = null;
      next = this._contextStack.length ? this._readSubject : this._readInTopContext;
      if (inversePredicate) this._inversePredicate = false;
      break;
    // Semicolon means the subject is shared; predicate and object are different
    case ';':
      next = this._readPredicate;
      break;
    // Comma means both the subject and predicate are shared; the object is different
    case ',':
      next = this._readObject;
      break;
    default:
      // An entity means this is a quad (only allowed if not already inside a graph)
      if (this._supportsQuads && this._graph === null && (graph = this._readEntity(token)) !== undefined) {
        next = this._readQuadPunctuation;
        break;
      }
      return this._error('Expected punctuation to follow "' + this._object.id + '"', token);
    }
    // A quad has been completed now, so return it
    if (subject !== null) {
      var predicate = this._predicate, object = this._object;
      if (!inversePredicate)
        this._emit(subject, predicate, object,  graph);
      else
        this._emit(object,  predicate, subject, graph);
    }
    return next;
  }

    // ### `_readBlankNodePunctuation` reads punctuation in a blank node
  _readBlankNodePunctuation(token) {
    var next;
    switch (token.type) {
    // Semicolon means the subject is shared; predicate and object are different
    case ';':
      next = this._readPredicate;
      break;
    // Comma means both the subject and predicate are shared; the object is different
    case ',':
      next = this._readObject;
      break;
    default:
      return this._error('Expected punctuation to follow "' + this._object.id + '"', token);
    }
    // A quad has been completed now, so return it
    this._emit(this._subject, this._predicate, this._object, this._graph);
    return next;
  }

  // ### `_readQuadPunctuation` reads punctuation after a quad
  _readQuadPunctuation(token) {
    if (token.type !== '.')
      return this._error('Expected dot to follow quad', token);
    return this._readInTopContext;
  }

  // ### `_readPrefix` reads the prefix of a prefix declaration
  _readPrefix(token) {
    if (token.type !== 'prefix')
      return this._error('Expected prefix to follow @prefix', token);
    this._prefix = token.value;
    return this._readPrefixIRI;
  }

  // ### `_readPrefixIRI` reads the IRI of a prefix declaration
  _readPrefixIRI(token) {
    if (token.type !== 'IRI')
      return this._error('Expected IRI to follow prefix "' + this._prefix + ':"', token);
    var prefixNode = this._readEntity(token);
    this._prefixes[this._prefix] = prefixNode.value;
    this._prefixCallback(this._prefix, prefixNode);
    return this._readDeclarationPunctuation;
  }

  // ### `_readBaseIRI` reads the IRI of a base declaration
  _readBaseIRI(token) {
    var iri = token.type === 'IRI' && this._resolveIRI(token.value);
    if (!iri)
      return this._error('Expected valid IRI to follow base declaration', token);
    this._setBase(iri);
    return this._readDeclarationPunctuation;
  }

  // ### `_readNamedGraphLabel` reads the label of a named graph
  _readNamedGraphLabel(token) {
    switch (token.type) {
    case 'IRI':
    case 'blank':
    case 'prefixed':
      return this._readSubject(token), this._readGraph;
    case '[':
      return this._readNamedGraphBlankLabel;
    default:
      return this._error('Invalid graph label', token);
    }
  }

  // ### `_readNamedGraphLabel` reads a blank node label of a named graph
  _readNamedGraphBlankLabel(token) {
    if (token.type !== ']')
      return this._error('Invalid graph label', token);
    this._subject = this._blankNode();
    return this._readGraph;
  }

  // ### `_readDeclarationPunctuation` reads the punctuation of a declaration
  _readDeclarationPunctuation(token) {
    // SPARQL-style declarations don't have punctuation
    if (this._sparqlStyle) {
      this._sparqlStyle = false;
      return this._readInTopContext(token);
    }

    if (token.type !== '.')
      return this._error('Expected declaration to end with a dot', token);
    return this._readInTopContext;
  }

  // Reads a list of quantified symbols from a @forSome or @forAll statement
  _readQuantifierList(token) {
    var entity;
    switch (token.type) {
    case 'IRI':
    case 'prefixed':
      if ((entity = this._readEntity(token, true)) !== undefined)
        break;
    default:
      return this._error('Unexpected ' + token.type, token);
    }
    // Without explicit quantifiers, map entities to a quantified entity
    if (!this._explicitQuantifiers)
      this._quantified[entity.id] = this._quantifier(this._blankNode().value);
    // With explicit quantifiers, output the reified quantifier
    else {
      // If this is the first item, start a new quantifier list
      if (this._subject === null)
        this._emit(this._graph || this.DEFAULTGRAPH, this._predicate,
                   this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
      // Otherwise, continue the previous list
      else
        this._emit(this._subject, this.RDF_REST,
                   this._subject = this._blankNode(), this.QUANTIFIERS_GRAPH);
      // Output the list item
      this._emit(this._subject, this.RDF_FIRST, entity, this.QUANTIFIERS_GRAPH);
    }
    return this._readQuantifierPunctuation;
  }

  // Reads punctuation from a @forSome or @forAll statement
  _readQuantifierPunctuation(token) {
    // Read more quantifiers
    if (token.type === ',')
      return this._readQuantifierList;
    // End of the quantifier list
    else {
      // With explicit quantifiers, close the quantifier list
      if (this._explicitQuantifiers) {
        this._emit(this._subject, this.RDF_REST, this.RDF_NIL, this.QUANTIFIERS_GRAPH);
        this._subject = null;
      }
      // Read a dot
      this._readCallback = this._getContextEndReader();
      return this._readCallback(token);
    }
  }

  // ### `_getPathReader` reads a potential path and then resumes with the given function
  _getPathReader(afterPath) {
    this._afterPath = afterPath;
    return this._readPath;
  }

  // ### `_readPath` reads a potential path
  _readPath(token) {
    switch (token.type) {
    // Forward path
    case '!': return this._readForwardPath;
    // Backward path
    case '^': return this._readBackwardPath;
    // Not a path; resume reading where we left off
    default:
      var stack = this._contextStack, parent = stack.length && stack[stack.length - 1];
      // If we were reading a list item, we still need to output it
      if (parent && parent.type === 'item') {
        // The list item is the remaining subejct after reading the path
        var item = this._subject;
        // Switch back to the context of the list
        this._restoreContext();
        // Output the list item
        this._emit(this._subject, this.RDF_FIRST, item, this._graph);
      }
      return this._afterPath(token);
    }
  }

  // ### `_readForwardPath` reads a '!' path
  _readForwardPath(token) {
    var subject, predicate, object = this._blankNode();
    // The next token is the predicate
    if ((predicate = this._readEntity(token)) === undefined)
      return;
    // If we were reading a subject, replace the subject by the path's object
    if (this._predicate === null)
      subject = this._subject, this._subject = object;
    // If we were reading an object, replace the subject by the path's object
    else
      subject = this._object,  this._object  = object;
    // Emit the path's current quad and read its next section
    this._emit(subject, predicate, object, this._graph);
    return this._readPath;
  }

  // ### `_readBackwardPath` reads a '^' path
  _readBackwardPath(token) {
    var subject = this._blankNode(), predicate, object;
    // The next token is the predicate
    if ((predicate = this._readEntity(token)) === undefined)
      return;
    // If we were reading a subject, replace the subject by the path's subject
    if (this._predicate === null)
      object = this._subject, this._subject = subject;
    // If we were reading an object, replace the subject by the path's subject
    else
      object = this._object,  this._object  = subject;
    // Emit the path's current quad and read its next section
    this._emit(subject, predicate, object, this._graph);
    return this._readPath;
  }

  // ### `_readRDFStarTailOrGraph` reads the graph of a nested RDF* quad or the end of a nested RDF* triple
  _readRDFStarTailOrGraph(token) {
    if (token.type !== '>>') {
      // An entity means this is a quad (only allowed if not already inside a graph)
      if (this._supportsQuads && this._graph === null && (this._graph = this._readEntity(token)) !== undefined)
        return this._readRDFStarTail;
      return this._error('Expected >> to follow "' + this._object.id + '"', token);
    }
    return this._readRDFStarTail(token);
  }

  // ### `_readRDFStarTail` reads the end of a nested RDF* triple
  _readRDFStarTail(token) {
    if (token.type !== '>>')
      return this._error(`Expected >> but got ${token.type}`, token);
    // Read the quad and restore the previous context
    const quad = this._quad(this._subject, this._predicate, this._object,
      this._graph || this.DEFAULTGRAPH);
    this._restoreContext();
    // If the triple was the subject, continue by reading the predicate.
    if (this._subject === null) {
      this._subject = quad;
      return this._readPredicate;
    }
    // If the triple was the object, read context end.
    else {
      this._object = quad;
      return this._getContextEndReader();
    }
  }

  // ### `_getContextEndReader` gets the next reader function at the end of a context
  _getContextEndReader() {
    var contextStack = this._contextStack;
    if (!contextStack.length)
      return this._readPunctuation;

    switch (contextStack[contextStack.length - 1].type) {
    case 'blank':
      return this._readBlankNodeTail;
    case 'list':
      return this._readListItem;
    case 'formula':
      return this._readFormulaTail;
    case '<<':
      return this._readRDFStarTailOrGraph;
    }
  }

  // ### `_emit` sends a quad through the callback
  _emit(subject, predicate, object, graph) {
    this._callback(null, this._quad(subject, predicate, object, graph || this.DEFAULTGRAPH));
  }

  // ### `_error` emits an error message through the callback
  _error(message, token) {
    var err = new Error(message + ' on line ' + token.line + '.');
    err.context = {
      token: token,
      line: token.line,
      previousToken: this._lexer.previousToken,
    };
    this._callback(err);
    this._callback = noop;
  }

  // ### `_resolveIRI` resolves an IRI against the base path
  _resolveIRI(iri) {
    return /^[a-z][a-z0-9+.-]*:/i.test(iri) ? iri : this._resolveRelativeIRI(iri);
  }

  // ### `_resolveRelativeIRI` resolves an IRI against the base path,
  // assuming that a base path has been set and that the IRI is indeed relative
  _resolveRelativeIRI(iri) {
    // An empty relative IRI indicates the base IRI
    if (!iri.length)
      return this._base;
    // Decide resolving strategy based in the first character
    switch (iri[0]) {
    // Resolve relative fragment IRIs against the base IRI
    case '#': return this._base + iri;
    // Resolve relative query string IRIs by replacing the query string
    case '?': return this._base.replace(/(?:\?.*)?$/, iri);
    // Resolve root-relative IRIs at the root of the base IRI
    case '/':
      // Resolve scheme-relative IRIs to the scheme
      return (iri[1] === '/' ? this._baseScheme : this._baseRoot) + this._removeDotSegments(iri);
    // Resolve all other IRIs at the base IRI's path
    default:
      // Relative IRIs cannot contain a colon in the first path segment
      return (/^[^/:]*:/.test(iri)) ? null : this._removeDotSegments(this._basePath + iri);
    }
  }

  // ### `_removeDotSegments` resolves './' and '../' path segments in an IRI as per RFC3986
  _removeDotSegments(iri) {
    // Don't modify the IRI if it does not contain any dot segments
    if (!/(^|\/)\.\.?($|[/#?])/.test(iri))
      return iri;

    // Start with an imaginary slash before the IRI in order to resolve trailing './' and '../'
    var result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

    while (i < length) {
      switch (next) {
      // The path starts with the first slash after the authority
      case ':':
        if (pathStart < 0) {
          // Skip two slashes before the authority
          if (iri[++i] === '/' && iri[++i] === '/')
            // Skip to slash after the authority
            while ((pathStart = i + 1) < length && iri[pathStart] !== '/')
              i = pathStart;
        }
        break;
      // Don't modify a query string or fragment
      case '?':
      case '#':
        i = length;
        break;
      // Handle '/.' or '/..' path segments
      case '/':
        if (iri[i + 1] === '.') {
          next = iri[++i + 1];
          switch (next) {
          // Remove a '/.' segment
          case '/':
            result += iri.substring(segmentStart, i - 1);
            segmentStart = i + 1;
            break;
          // Remove a trailing '/.' segment
          case undefined:
          case '?':
          case '#':
            return result + iri.substring(segmentStart, i) + iri.substr(i + 1);
          // Remove a '/..' segment
          case '.':
            next = iri[++i + 1];
            if (next === undefined || next === '/' || next === '?' || next === '#') {
              result += iri.substring(segmentStart, i - 2);
              // Try to remove the parent path from result
              if ((segmentStart = result.lastIndexOf('/')) >= pathStart)
                result = result.substr(0, segmentStart);
              // Remove a trailing '/..' segment
              if (next !== '/')
                return result + '/' + iri.substr(i + 1);
              segmentStart = i + 1;
            }
          }
        }
      }
      next = iri[++i];
    }
    return result + iri.substring(segmentStart);
  }

  // ## Public methods

  // ### `parse` parses the N3 input and emits each parsed quad through the callback
  parse(input, quadCallback, prefixCallback) {
    var self = this;
    // The read callback is the next function to be executed when a token arrives.
    // We start reading in the top context.
    this._readCallback = this._readInTopContext;
    this._sparqlStyle = false;
    this._prefixes = Object.create(null);
    this._prefixes._ = this._blankNodePrefix ? this._blankNodePrefix.substr(2)
                                             : 'b' + blankNodePrefix++ + '_';
    this._prefixCallback = prefixCallback || noop;
    this._inversePredicate = false;
    this._quantified = Object.create(null);

    // Parse synchronously if no quad callback is given
    if (!quadCallback) {
      var quads = [], error;
      this._callback = function (e, t) { e ? (error = e) : t && quads.push(t); };
      this._lexer.tokenize(input).every(function (token) {
        return self._readCallback = self._readCallback(token);
      });
      if (error) throw error;
      return quads;
    }

    // Parse asynchronously otherwise, executing the read callback when a token arrives
    this._callback = quadCallback;
    this._lexer.tokenize(input, function (error, token) {
      if (error !== null)
        self._callback(error), self._callback = noop;
      else if (self._readCallback)
        self._readCallback = self._readCallback(token);
    });
  }
}

// The empty function
function noop() {}

// Initializes the parser with the given data factory
function initDataFactory(parser, factory) {
  // Set factory methods
  var namedNode = factory.namedNode;
  parser._namedNode   = namedNode;
  parser._blankNode   = factory.blankNode;
  parser._literal     = factory.literal;
  parser._variable    = factory.variable;
  parser._quad        = factory.quad;
  parser.DEFAULTGRAPH = factory.defaultGraph();

  // Set common named nodes
  parser.RDF_FIRST  = namedNode(IRIs["a" /* default */].rdf.first);
  parser.RDF_REST   = namedNode(IRIs["a" /* default */].rdf.rest);
  parser.RDF_NIL    = namedNode(IRIs["a" /* default */].rdf.nil);
  parser.N3_FORALL  = namedNode(IRIs["a" /* default */].r.forAll);
  parser.N3_FORSOME = namedNode(IRIs["a" /* default */].r.forSome);
  parser.ABBREVIATIONS = {
    'a': namedNode(IRIs["a" /* default */].rdf.type),
    '=': namedNode(IRIs["a" /* default */].owl.sameAs),
    '>': namedNode(IRIs["a" /* default */].log.implies),
  };
  parser.QUANTIFIERS_GRAPH = namedNode('urn:n3:quantifiers');
}
initDataFactory(N3Parser_N3Parser.prototype, N3DataFactory);

// CONCATENATED MODULE: ./node_modules/n3/src/N3Writer.js
// **N3Writer** writes N3 documents.




const N3Writer_DEFAULTGRAPH = N3DataFactory.defaultGraph();

const { rdf: N3Writer_rdf, xsd: N3Writer_xsd } = IRIs["a" /* default */];

// Characters in literals that require escaping
var N3Writer_escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    escapedCharacters = {
      '\\': '\\\\', '"': '\\"', '\t': '\\t',
      '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
    };

// ## Placeholder class to represent already pretty-printed terms
class N3Writer_SerializedTerm extends Term {
  // Pretty-printed nodes are not equal to any other node
  // (e.g., [] does not equal [])
  equals() {
    return false;
  }
}

// ## Constructor
class N3Writer_N3Writer {
  constructor(outputStream, options) {
    // ### `_prefixRegex` matches a prefixed name or IRI that begins with one of the added prefixes
    this._prefixRegex = /$0^/;

    // Shift arguments if the first argument is not a stream
    if (outputStream && typeof outputStream.write !== 'function')
      options = outputStream, outputStream = null;
    options = options || {};
    this._lists = options.lists;

    // If no output stream given, send the output as string through the end callback
    if (!outputStream) {
      var output = '';
      this._outputStream = {
        write(chunk, encoding, done) { output += chunk; done && done(); },
        end:   function (done) { done && done(null, output); },
      };
      this._endStream = true;
    }
    else {
      this._outputStream = outputStream;
      this._endStream = options.end === undefined ? true : !!options.end;
    }

    // Initialize writer, depending on the format
    this._subject = null;
    if (!(/triple|quad/i).test(options.format)) {
      this._graph = N3Writer_DEFAULTGRAPH;
      this._prefixIRIs = Object.create(null);
      options.prefixes && this.addPrefixes(options.prefixes);
    }
    else {
      this._writeQuad = this._writeQuadLine;
    }
  }

  // ## Private methods

  // ### Whether the current graph is the default graph
  get _inDefaultGraph() {
    return N3Writer_DEFAULTGRAPH.equals(this._graph);
  }

  // ### `_write` writes the argument to the output stream
  _write(string, callback) {
    this._outputStream.write(string, 'utf8', callback);
  }

  // ### `_writeQuad` writes the quad to the output stream
  _writeQuad(subject, predicate, object, graph, done) {
    try {
      // Write the graph's label if it has changed
      if (!graph.equals(this._graph)) {
        // Close the previous graph and start the new one
        this._write((this._subject === null ? '' : (this._inDefaultGraph ? '.\n' : '\n}\n')) +
                    (N3Writer_DEFAULTGRAPH.equals(graph) ? '' : this._encodeIriOrBlank(graph) + ' {\n'));
        this._graph = graph;
        this._subject = null;
      }
      // Don't repeat the subject if it's the same
      if (subject.equals(this._subject)) {
        // Don't repeat the predicate if it's the same
        if (predicate.equals(this._predicate))
          this._write(', ' + this._encodeObject(object), done);
        // Same subject, different predicate
        else
          this._write(';\n    ' +
                      this._encodePredicate(this._predicate = predicate) + ' ' +
                      this._encodeObject(object), done);
      }
      // Different subject; write the whole quad
      else
        this._write((this._subject === null ? '' : '.\n') +
                    this._encodeSubject(this._subject = subject) + ' ' +
                    this._encodePredicate(this._predicate = predicate) + ' ' +
                    this._encodeObject(object), done);
    }
    catch (error) { done && done(error); }
  }

  // ### `_writeQuadLine` writes the quad to the output stream as a single line
  _writeQuadLine(subject, predicate, object, graph, done) {
    // Write the quad without prefixes
    delete this._prefixMatch;
    this._write(this.quadToString(subject, predicate, object, graph), done);
  }

  // ### `quadToString` serializes a quad as a string
  quadToString(subject, predicate, object, graph) {
    return  this._encodeSubject(subject)   + ' ' +
            this._encodeIriOrBlank(predicate) + ' ' +
            this._encodeObject(object) +
            (graph && graph.value ? ' ' + this._encodeIriOrBlank(graph) + ' .\n' : ' .\n');
  }

  // ### `quadsToString` serializes an array of quads as a string
  quadsToString(quads) {
    return quads.map(function (t) {
      return this.quadToString(t.subject, t.predicate, t.object, t.graph);
    }, this).join('');
  }

  // ### `_encodeSubject` represents a subject
  _encodeSubject(entity) {
    return entity.termType === 'Quad' ?
      this._encodeQuad(entity) : this._encodeIriOrBlank(entity);
  }

  // ### `_encodeIriOrBlank` represents an IRI or blank node
  _encodeIriOrBlank(entity) {
    // A blank node or list is represented as-is
    if (entity.termType !== 'NamedNode') {
      // If it is a list head, pretty-print it
      if (this._lists && (entity.value in this._lists))
        entity = this.list(this._lists[entity.value]);
      return 'id' in entity ? entity.id : '_:' + entity.value;
    }
    // Escape special characters
    var iri = entity.value;
    if (N3Writer_escape.test(iri))
      iri = iri.replace(escapeAll, characterReplacer);
    // Try to represent the IRI as prefixed name
    var prefixMatch = this._prefixRegex.exec(iri);
    return !prefixMatch ? '<' + iri + '>' :
           (!prefixMatch[1] ? iri : this._prefixIRIs[prefixMatch[1]] + prefixMatch[2]);
  }

  // ### `_encodeLiteral` represents a literal
  _encodeLiteral(literal) {
    // Escape special characters
    var value = literal.value;
    if (N3Writer_escape.test(value))
      value = value.replace(escapeAll, characterReplacer);
    // Write the literal, possibly with type or language
    if (literal.language)
      return '"' + value + '"@' + literal.language;
    else if (literal.datatype.value !== N3Writer_xsd.string)
      return '"' + value + '"^^' + this._encodeIriOrBlank(literal.datatype);
    else
      return '"' + value + '"';
  }

  // ### `_encodePredicate` represents a predicate
  _encodePredicate(predicate) {
    return predicate.value === N3Writer_rdf.type ? 'a' : this._encodeIriOrBlank(predicate);
  }

  // ### `_encodeObject` represents an object
  _encodeObject(object) {
    switch (object.termType) {
    case 'Quad':
      return this._encodeQuad(object);
    case 'Literal':
      return this._encodeLiteral(object);
    default:
      return this._encodeIriOrBlank(object);
    }
  }

  // ### `_encodeQuad` encodes an RDF* quad
  _encodeQuad({ subject, predicate, object, graph }) {
    return `<<${
      this._encodeSubject(subject)} ${
      this._encodePredicate(predicate)} ${
      this._encodeObject(object)}${
      isDefaultGraph(graph) ? '' : ` ${this._encodeIriOrBlank(graph)}`}>>`;
  }

  // ### `_blockedWrite` replaces `_write` after the writer has been closed
  _blockedWrite() {
    throw new Error('Cannot write because the writer has been closed.');
  }

  // ### `addQuad` adds the quad to the output stream
  addQuad(subject, predicate, object, graph, done) {
    // The quad was given as an object, so shift parameters
    if (object === undefined)
      this._writeQuad(subject.subject, subject.predicate, subject.object, subject.graph, predicate);
    // The optional `graph` parameter was not provided
    else if (typeof graph === 'function')
      this._writeQuad(subject, predicate, object, N3Writer_DEFAULTGRAPH, graph);
    // The `graph` parameter was provided
    else
      this._writeQuad(subject, predicate, object, graph || N3Writer_DEFAULTGRAPH, done);
  }

  // ### `addQuads` adds the quads to the output stream
  addQuads(quads) {
    for (var i = 0; i < quads.length; i++)
      this.addQuad(quads[i]);
  }

  // ### `addPrefix` adds the prefix to the output stream
  addPrefix(prefix, iri, done) {
    var prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  }

  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes(prefixes, done) {
    var prefixIRIs = this._prefixIRIs, hasPrefixes = false;
    for (var prefix in prefixes) {
      var iri = prefixes[prefix];
      if (typeof iri !== 'string')
        iri = iri.value;
      hasPrefixes = true;
      // Finish a possible pending quad
      if (this._subject !== null) {
        this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
        this._subject = null, this._graph = '';
      }
      // Store and write the prefix
      prefixIRIs[iri] = (prefix += ':');
      this._write('@prefix ' + prefix + ' <' + iri + '>.\n');
    }
    // Recreate the prefix matcher
    if (hasPrefixes) {
      var IRIlist = '', prefixList = '';
      for (var prefixIRI in prefixIRIs) {
        IRIlist += IRIlist ? '|' + prefixIRI : prefixIRI;
        prefixList += (prefixList ? '|' : '') + prefixIRIs[prefixIRI];
      }
      IRIlist = IRIlist.replace(/[\]\/\(\)\*\+\?\.\\\$]/g, '\\$&');
      this._prefixRegex = new RegExp('^(?:' + prefixList + ')[^\/]*$|' +
                                     '^(' + IRIlist + ')([a-zA-Z][\\-_a-zA-Z0-9]*)$');
    }
    // End a prefix block with a newline
    this._write(hasPrefixes ? '\n' : '', done);
  }

  // ### `blank` creates a blank node with the given content
  blank(predicate, object) {
    var children = predicate, child, length;
    // Empty blank node
    if (predicate === undefined)
      children = [];
    // Blank node passed as blank(Term("predicate"), Term("object"))
    else if (predicate.termType)
      children = [{ predicate: predicate, object: object }];
    // Blank node passed as blank({ predicate: predicate, object: object })
    else if (!('length' in predicate))
      children = [predicate];

    switch (length = children.length) {
    // Generate an empty blank node
    case 0:
      return new N3Writer_SerializedTerm('[]');
    // Generate a non-nested one-triple blank node
    case 1:
      child = children[0];
      if (!(child.object instanceof N3Writer_SerializedTerm))
        return new N3Writer_SerializedTerm('[ ' + this._encodePredicate(child.predicate) + ' ' +
                                  this._encodeObject(child.object) + ' ]');
    // Generate a multi-triple or nested blank node
    default:
      var contents = '[';
      // Write all triples in order
      for (var i = 0; i < length; i++) {
        child = children[i];
        // Write only the object is the predicate is the same as the previous
        if (child.predicate.equals(predicate))
          contents += ', ' + this._encodeObject(child.object);
        // Otherwise, write the predicate and the object
        else {
          contents += (i ? ';\n  ' : '\n  ') +
                      this._encodePredicate(child.predicate) + ' ' +
                      this._encodeObject(child.object);
          predicate = child.predicate;
        }
      }
      return new N3Writer_SerializedTerm(contents + '\n]');
    }
  }

  // ### `list` creates a list node with the given content
  list(elements) {
    var length = elements && elements.length || 0, contents = new Array(length);
    for (var i = 0; i < length; i++)
      contents[i] = this._encodeObject(elements[i]);
    return new N3Writer_SerializedTerm('(' + contents.join(' ') + ')');
  }

  // ### `end` signals the end of the output stream
  end(done) {
    // Finish a possible pending quad
    if (this._subject !== null) {
      this._write(this._inDefaultGraph ? '.\n' : '\n}\n');
      this._subject = null;
    }
    // Disallow further writing
    this._write = this._blockedWrite;

    // Try to end the underlying stream, ensuring done is called exactly one time
    var singleDone = done && function (error, result) { singleDone = null, done(error, result); };
    if (this._endStream) {
      try { return this._outputStream.end(singleDone); }
      catch (error) { /* error closing stream */ }
    }
    singleDone && singleDone();
  }
}

// Replaces a character by its escaped version
function characterReplacer(character) {
  // Replace a single character by its escaped version
  var result = escapedCharacters[character];
  if (result === undefined) {
    // Replace a single character with its 4-bit unicode escape sequence
    if (character.length === 1) {
      result = character.charCodeAt(0).toString(16);
      result = '\\u0000'.substr(0, 6 - result.length) + result;
    }
    // Replace a surrogate pair with its 8-bit unicode escape sequence
    else {
      result = ((character.charCodeAt(0) - 0xD800) * 0x400 +
                 character.charCodeAt(1) + 0x2400).toString(16);
      result = '\\U00000000'.substr(0, 10 - result.length) + result;
    }
  }
  return result;
}

// EXTERNAL MODULE: ./node_modules/readable-stream/readable-browser.js
var readable_browser = __webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/n3/src/N3Store.js
// **N3Store** objects store N3 quads by graph in memory.




// ## Constructor
class N3Store_N3Store {
  constructor(quads, options) {
    // The number of quads is initially zero
    this._size = 0;
    // `_graphs` contains subject, predicate, and object indexes per graph
    this._graphs = Object.create(null);
    // `_ids` maps entities such as `http://xmlns.com/foaf/0.1/name` to numbers,
    // saving memory by using only numbers as keys in `_graphs`
    this._id = 0;
    this._ids = Object.create(null);
    this._ids['><'] = 0; // dummy entry, so the first actual key is non-zero
    this._entities = Object.create(null); // inverse of `_ids`
    // `_blankNodeIndex` is the index of the last automatically named blank node
    this._blankNodeIndex = 0;

    // Shift parameters if `quads` is not given
    if (!options && quads && !quads[0])
      options = quads, quads = null;
    options = options || {};
    this._factory = options.factory || N3DataFactory;

    // Add quads if passed
    if (quads)
      this.addQuads(quads);
  }

  // ## Public properties

  // ### `size` returns the number of quads in the store
  get size() {
    // Return the quad count if if was cached
    var size = this._size;
    if (size !== null)
      return size;

    // Calculate the number of quads by counting to the deepest level
    size = 0;
    var graphs = this._graphs, subjects, subject;
    for (var graphKey in graphs)
      for (var subjectKey in (subjects = graphs[graphKey].subjects))
        for (var predicateKey in (subject = subjects[subjectKey]))
          size += Object.keys(subject[predicateKey]).length;
    return this._size = size;
  }

  // ## Private methods

  // ### `_addToIndex` adds a quad to a three-layered index.
  // Returns if the index has changed, if the entry did not already exist.
  _addToIndex(index0, key0, key1, key2) {
    // Create layers as necessary
    var index1 = index0[key0] || (index0[key0] = {});
    var index2 = index1[key1] || (index1[key1] = {});
    // Setting the key to _any_ value signals the presence of the quad
    var existed = key2 in index2;
    if (!existed)
      index2[key2] = null;
    return !existed;
  }

  // ### `_removeFromIndex` removes a quad from a three-layered index
  _removeFromIndex(index0, key0, key1, key2) {
    // Remove the quad from the index
    var index1 = index0[key0], index2 = index1[key1], key;
    delete index2[key2];

    // Remove intermediary index layers if they are empty
    for (key in index2) return;
    delete index1[key1];
    for (key in index1) return;
    delete index0[key0];
  }

  // ### `_findInIndex` finds a set of quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  // `name0`, `name1`, and `name2` are the names of the keys at each level,
  // used when reconstructing the resulting quad
  // (for instance: _subject_, _predicate_, and _object_).
  // Finally, `graph` will be the graph of the created quads.
  // If `callback` is given, each result is passed through it
  // and iteration halts when it returns truthy for any quad.
  // If instead `array` is given, each result is added to the array.
  _findInIndex(index0, key0, key1, key2, name0, name1, name2, graph, callback, array) {
    var tmp, index1, index2, varCount = !key0 + !key1 + !key2,
        // depending on the number of variables, keys or reverse index are faster
        entityKeys = varCount > 1 ? Object.keys(this._ids) : this._entities;

    // If a key is specified, use only that part of index 0.
    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
    for (var value0 in index0) {
      var entity0 = entityKeys[value0];

      if (index1 = index0[value0]) {
        // If a key is specified, use only that part of index 1.
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
        for (var value1 in index1) {
          var entity1 = entityKeys[value1];

          if (index2 = index1[value1]) {
            // If a key is specified, use only that part of index 2, if it exists.
            var values = key2 ? (key2 in index2 ? [key2] : []) : Object.keys(index2);
            // Create quads for all items found in index 2.
            for (var l = 0; l < values.length; l++) {
              var parts = { subject: null, predicate: null, object: null };
              parts[name0] = termFromId(entity0, this._factory);
              parts[name1] = termFromId(entity1, this._factory);
              parts[name2] = termFromId(entityKeys[values[l]], this._factory);
              var quad = this._factory.quad(
                parts.subject, parts.predicate, parts.object, termFromId(graph, this._factory));
              if (array)
                array.push(quad);
              else if (callback(quad))
                return true;
            }
          }
        }
      }
    }
    return array;
  }

  // ### `_loop` executes the callback on all keys of index 0
  _loop(index0, callback) {
    for (var key0 in index0)
      callback(key0);
  }

  // ### `_loopByKey0` executes the callback on all keys of a certain entry in index 0
  _loopByKey0(index0, key0, callback) {
    var index1, key1;
    if (index1 = index0[key0]) {
      for (key1 in index1)
        callback(key1);
    }
  }

  // ### `_loopByKey1` executes the callback on given keys of all entries in index 0
  _loopByKey1(index0, key1, callback) {
    var key0, index1;
    for (key0 in index0) {
      index1 = index0[key0];
      if (index1[key1])
        callback(key0);
    }
  }

  // ### `_loopBy2Keys` executes the callback on given keys of certain entries in index 2
  _loopBy2Keys(index0, key0, key1, callback) {
    var index1, index2, key2;
    if ((index1 = index0[key0]) && (index2 = index1[key1])) {
      for (key2 in index2)
        callback(key2);
    }
  }

  // ### `_countInIndex` counts matching quads in a three-layered index.
  // The index base is `index0` and the keys at each level are `key0`, `key1`, and `key2`.
  // Any of these keys can be undefined, which is interpreted as a wildcard.
  _countInIndex(index0, key0, key1, key2) {
    var count = 0, tmp, index1, index2;

    // If a key is specified, count only that part of index 0
    if (key0) (tmp = index0, index0 = {})[key0] = tmp[key0];
    for (var value0 in index0) {
      if (index1 = index0[value0]) {
        // If a key is specified, count only that part of index 1
        if (key1) (tmp = index1, index1 = {})[key1] = tmp[key1];
        for (var value1 in index1) {
          if (index2 = index1[value1]) {
            // If a key is specified, count the quad if it exists
            if (key2) (key2 in index2) && count++;
            // Otherwise, count all quads
            else count += Object.keys(index2).length;
          }
        }
      }
    }
    return count;
  }

  // ### `_getGraphs` returns an array with the given graph,
  // or all graphs if the argument is null or undefined.
  _getGraphs(graph) {
    if (!isString(graph))
      return this._graphs;
    var graphs = {};
    graphs[graph] = this._graphs[graph];
    return graphs;
  }

  // ### `_uniqueEntities` returns a function that accepts an entity ID
  // and passes the corresponding entity to callback if it hasn't occurred before.
  _uniqueEntities(callback) {
    var uniqueIds = Object.create(null), entities = this._entities;
    return function (id) {
      if (!(id in uniqueIds)) {
        uniqueIds[id] = true;
        callback(termFromId(entities[id]));
      }
    };
  }

  // ## Public methods

  // ### `addQuad` adds a new quad to the store.
  // Returns if the quad index has changed, if the quad did not already exist.
  addQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate)
      graph = subject.graph, object = subject.object,
        predicate = subject.predicate, subject = subject.subject;

    // Convert terms to internal string representation
    subject = termToId(subject);
    predicate = termToId(predicate);
    object = termToId(object);
    graph = termToId(graph);

    // Find the graph that will contain the triple
    var graphItem = this._graphs[graph];
    // Create the graph if it doesn't exist yet
    if (!graphItem) {
      graphItem = this._graphs[graph] = { subjects: {}, predicates: {}, objects: {} };
      // Freezing a graph helps subsequent `add` performance,
      // and properties will never be modified anyway
      Object.freeze(graphItem);
    }

    // Since entities can often be long IRIs, we avoid storing them in every index.
    // Instead, we have a separate index that maps entities to numbers,
    // which are then used as keys in the other indexes.
    var ids = this._ids;
    var entities = this._entities;
    subject   = ids[subject]   || (ids[entities[++this._id] = subject]   = this._id);
    predicate = ids[predicate] || (ids[entities[++this._id] = predicate] = this._id);
    object    = ids[object]    || (ids[entities[++this._id] = object]    = this._id);

    var changed = this._addToIndex(graphItem.subjects,   subject,   predicate, object);
    this._addToIndex(graphItem.predicates, predicate, object,    subject);
    this._addToIndex(graphItem.objects,    object,    subject,   predicate);

    // The cached quad count is now invalid
    this._size = null;
    return changed;
  }

  // ### `addQuads` adds multiple quads to the store
  addQuads(quads) {
    for (var i = 0; i < quads.length; i++)
      this.addQuad(quads[i]);
  }

  // ### `import` adds a stream of quads to the store
  import(stream) {
    var self = this;
    stream.on('data', function (quad) { self.addQuad(quad); });
    return stream;
  }

  // ### `removeQuad` removes a quad from the store if it exists
  removeQuad(subject, predicate, object, graph) {
    // Shift arguments if a quad object is given instead of components
    if (!predicate)
      graph = subject.graph, object = subject.object,
        predicate = subject.predicate, subject = subject.subject;

    // Convert terms to internal string representation
    subject = termToId(subject);
    predicate = termToId(predicate);
    object = termToId(object);
    graph = termToId(graph);

    // Find internal identifiers for all components
    // and verify the quad exists.
    var graphItem, ids = this._ids, graphs = this._graphs, subjects, predicates;
    if (!(subject    = ids[subject]) || !(predicate = ids[predicate]) ||
        !(object     = ids[object])  || !(graphItem = graphs[graph])  ||
        !(subjects   = graphItem.subjects[subject]) ||
        !(predicates = subjects[predicate]) ||
        !(object in predicates))
      return false;

    // Remove it from all indexes
    this._removeFromIndex(graphItem.subjects,   subject,   predicate, object);
    this._removeFromIndex(graphItem.predicates, predicate, object,    subject);
    this._removeFromIndex(graphItem.objects,    object,    subject,   predicate);
    if (this._size !== null) this._size--;

    // Remove the graph if it is empty
    for (subject in graphItem.subjects) return true;
    delete graphs[graph];
    return true;
  }

  // ### `removeQuads` removes multiple quads from the store
  removeQuads(quads) {
    for (var i = 0; i < quads.length; i++)
      this.removeQuad(quads[i]);
  }

  // ### `remove` removes a stream of quads from the store
  remove(stream) {
    var self = this;
    stream.on('data', function (quad) { self.removeQuad(quad); });
    return stream;
  }

  // ### `removeMatches` removes all matching quads from the store
  // Setting any field to `undefined` or `null` indicates a wildcard.
  removeMatches(subject, predicate, object, graph) {
    return this.remove(this.match(subject, predicate, object, graph));
  }

  // ### `deleteGraph` removes all triples with the given graph from the store
  deleteGraph(graph) {
    return this.removeMatches(null, null, null, graph);
  }

  // ### `getQuads` returns an array of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && termToId(subject);
    predicate = predicate && termToId(predicate);
    object = object && termToId(object);
    graph = graph && termToId(graph);

    var quads = [], graphs = this._getGraphs(graph), content,
        ids = this._ids, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return quads;

    for (var graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId)
            // If subject and object are given, the object index will be the fastest
            this._findInIndex(content.objects, objectId, subjectId, predicateId,
                              'object', 'subject', 'predicate', graphId, null, quads);
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            this._findInIndex(content.subjects, subjectId, predicateId, null,
                              'subject', 'predicate', 'object', graphId, null, quads);
        }
        else if (predicateId)
          // If only predicate and possibly object are given, the predicate index will be the fastest
          this._findInIndex(content.predicates, predicateId, objectId, null,
                            'predicate', 'object', 'subject', graphId, null, quads);
        else if (objectId)
          // If only object is given, the object index will be the fastest
          this._findInIndex(content.objects, objectId, null, null,
                            'object', 'subject', 'predicate', graphId, null, quads);
        else
          // If nothing is given, iterate subjects and predicates first
          this._findInIndex(content.subjects, null, null, null,
                            'subject', 'predicate', 'object', graphId, null, quads);
      }
    }
    return quads;
  }

  // ### `match` returns a stream of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  match(subject, predicate, object, graph) {
    var stream = new readable_browser["Readable"]({ objectMode: true });

    // Initialize stream once it is being read
    stream._read = () => {
      for (var quad of this.getQuads(subject, predicate, object, graph))
        stream.push(quad);
      stream.push(null);
    };

    return stream;
  }

  // ### `countQuads` returns the number of quads matching a pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  countQuads(subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && termToId(subject);
    predicate = predicate && termToId(predicate);
    object = object && termToId(object);
    graph = graph && termToId(graph);

    var count = 0, graphs = this._getGraphs(graph), content,
        ids = this._ids, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return 0;

    for (var graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subject) {
          if (object)
            // If subject and object are given, the object index will be the fastest
            count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            count += this._countInIndex(content.subjects, subjectId, predicateId, objectId);
        }
        else if (predicate) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          count += this._countInIndex(content.predicates, predicateId, objectId, subjectId);
        }
        else {
          // If only object is possibly given, the object index will be the fastest
          count += this._countInIndex(content.objects, objectId, subjectId, predicateId);
        }
      }
    }
    return count;
  }

  // ### `forEach` executes the callback on all quads.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forEach(callback, subject, predicate, object, graph) {
    this.some(function (quad) {
      callback(quad);
      return false;
    }, subject, predicate, object, graph);
  }

  // ### `every` executes the callback on all quads,
  // and returns `true` if it returns truthy for all them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  every(callback, subject, predicate, object, graph) {
    var some = false;
    var every = !this.some(function (quad) {
      some = true;
      return !callback(quad);
    }, subject, predicate, object, graph);
    return some && every;
  }

  // ### `some` executes the callback on all quads,
  // and returns `true` if it returns truthy for any of them.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  some(callback, subject, predicate, object, graph) {
    // Convert terms to internal string representation
    subject = subject && termToId(subject);
    predicate = predicate && termToId(predicate);
    object = object && termToId(object);
    graph = graph && termToId(graph);

    var graphs = this._getGraphs(graph), content,
        ids = this._ids, subjectId, predicateId, objectId;

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject])   ||
        isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return false;

    for (var graphId in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graphId]) {
        // Choose the optimal index, based on what fields are present
        if (subjectId) {
          if (objectId) {
          // If subject and object are given, the object index will be the fastest
            if (this._findInIndex(content.objects, objectId, subjectId, predicateId,
                                  'object', 'subject', 'predicate', graphId, callback, null))
              return true;
          }
          else
            // If only subject and possibly predicate are given, the subject index will be the fastest
            if (this._findInIndex(content.subjects, subjectId, predicateId, null,
                                  'subject', 'predicate', 'object', graphId, callback, null))
              return true;
        }
        else if (predicateId) {
          // If only predicate and possibly object are given, the predicate index will be the fastest
          if (this._findInIndex(content.predicates, predicateId, objectId, null,
                                'predicate', 'object', 'subject', graphId, callback, null)) {
            return true;
          }
        }
        else if (objectId) {
          // If only object is given, the object index will be the fastest
          if (this._findInIndex(content.objects, objectId, null, null,
                                'object', 'subject', 'predicate', graphId, callback, null)) {
            return true;
          }
        }
        else
        // If nothing is given, iterate subjects and predicates first
        if (this._findInIndex(content.subjects, null, null, null,
                              'subject', 'predicate', 'object', graphId, callback, null)) {
          return true;
        }
      }
    }
    return false;
  }

  // ### `getSubjects` returns all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getSubjects(predicate, object, graph) {
    var results = [];
    this.forSubjects(function (s) { results.push(s); }, predicate, object, graph);
    return results;
  }

  // ### `forSubjects` executes the callback on all subjects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forSubjects(callback, predicate, object, graph) {
    // Convert terms to internal string representation
    predicate = predicate && termToId(predicate);
    object = object && termToId(object);
    graph = graph && termToId(graph);

    var ids = this._ids, graphs = this._getGraphs(graph), content, predicateId, objectId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(predicate) && !(predicateId = ids[predicate]) ||
        isString(object)    && !(objectId    = ids[object]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (predicateId) {
          if (objectId)
            // If predicate and object are given, the POS index is best.
            this._loopBy2Keys(content.predicates, predicateId, objectId, callback);
          else
            // If only predicate is given, the SPO index is best.
            this._loopByKey1(content.subjects, predicateId, callback);
        }
        else if (objectId)
          // If only object is given, the OSP index is best.
          this._loopByKey0(content.objects, objectId, callback);
        else
          // If no params given, iterate all the subjects
          this._loop(content.subjects, callback);
      }
    }
  }

  // ### `getPredicates` returns all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getPredicates(subject, object, graph) {
    var results = [];
    this.forPredicates(function (p) { results.push(p); }, subject, object, graph);
    return results;
  }

  // ### `forPredicates` executes the callback on all predicates that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forPredicates(callback, subject, object, graph) {
    // Convert terms to internal string representation
    subject = subject && termToId(subject);
    object = object && termToId(object);
    graph = graph && termToId(graph);

    var ids = this._ids, graphs = this._getGraphs(graph), content, subjectId, objectId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(subject) && !(subjectId = ids[subject]) ||
        isString(object)  && !(objectId  = ids[object]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (objectId)
            // If subject and object are given, the OSP index is best.
            this._loopBy2Keys(content.objects, objectId, subjectId, callback);
          else
            // If only subject is given, the SPO index is best.
            this._loopByKey0(content.subjects, subjectId, callback);
        }
        else if (objectId)
          // If only object is given, the POS index is best.
          this._loopByKey1(content.predicates, objectId, callback);
        else
          // If no params given, iterate all the predicates.
          this._loop(content.predicates, callback);
      }
    }
  }

  // ### `getObjects` returns all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getObjects(subject, predicate, graph) {
    var results = [];
    this.forObjects(function (o) { results.push(o); }, subject, predicate, graph);
    return results;
  }

  // ### `forObjects` executes the callback on all objects that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forObjects(callback, subject, predicate, graph) {
    // Convert terms to internal string representation
    subject = subject && termToId(subject);
    predicate = predicate && termToId(predicate);
    graph = graph && termToId(graph);

    var ids = this._ids, graphs = this._getGraphs(graph), content, subjectId, predicateId;
    callback = this._uniqueEntities(callback);

    // Translate IRIs to internal index keys.
    if (isString(subject)   && !(subjectId   = ids[subject]) ||
        isString(predicate) && !(predicateId = ids[predicate]))
      return;

    for (graph in graphs) {
      // Only if the specified graph contains triples, there can be results
      if (content = graphs[graph]) {
        // Choose optimal index based on which fields are wildcards
        if (subjectId) {
          if (predicateId)
            // If subject and predicate are given, the SPO index is best.
            this._loopBy2Keys(content.subjects, subjectId, predicateId, callback);
          else
            // If only subject is given, the OSP index is best.
            this._loopByKey1(content.objects, subjectId, callback);
        }
        else if (predicateId)
          // If only predicate is given, the POS index is best.
          this._loopByKey0(content.predicates, predicateId, callback);
        else
          // If no params given, iterate all the objects.
          this._loop(content.objects, callback);
      }
    }
  }

  // ### `getGraphs` returns all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  getGraphs(subject, predicate, object) {
    var results = [];
    this.forGraphs(function (g) { results.push(g); }, subject, predicate, object);
    return results;
  }

  // ### `forGraphs` executes the callback on all graphs that match the pattern.
  // Setting any field to `undefined` or `null` indicates a wildcard.
  forGraphs(callback, subject, predicate, object) {
    for (var graph in this._graphs) {
      this.some(function (quad) {
        callback(quad.graph);
        return true; // Halt iteration of some()
      }, subject, predicate, object, graph);
    }
  }

  // ### `createBlankNode` creates a new blank node, returning its name
  createBlankNode(suggestedName) {
    var name, index;
    // Generate a name based on the suggested name
    if (suggestedName) {
      name = suggestedName = '_:' + suggestedName, index = 1;
      while (this._ids[name])
        name = suggestedName + index++;
    }
    // Generate a generic blank node name
    else {
      do { name = '_:b' + this._blankNodeIndex++; }
      while (this._ids[name]);
    }
    // Add the blank node to the entities, avoiding the generation of duplicates
    this._ids[name] = ++this._id;
    this._entities[this._id] = name;
    return this._factory.blankNode(name.substr(2));
  }

  // ### `extractLists` finds and removes all list triples
  // and returns the items per list.
  extractLists({ remove = false, ignoreErrors = false } = {}) {
    var lists = {}; // has scalar keys so could be a simple Object
    var onError = ignoreErrors ? (() => true) :
                  ((node, message) => { throw new Error(`${node.value} ${message}`); });

    // Traverse each list from its tail
    var tails = this.getQuads(null, IRIs["a" /* default */].rdf.rest, IRIs["a" /* default */].rdf.nil, null);
    var toRemove = remove ? [...tails] : [];
    tails.forEach(tailQuad => {
      var items = [];             // the members found as objects of rdf:first quads
      var malformed = false;      // signals whether the current list is malformed
      var head;                   // the head of the list (_:b1 in above example)
      var headPos;                // set to subject or object when head is set
      var graph = tailQuad.graph; // make sure list is in exactly one graph

      // Traverse the list from tail to end
      var current = tailQuad.subject;
      while (current && !malformed) {
        var objectQuads = this.getQuads(null, null, current, null);
        var subjectQuads = this.getQuads(current, null, null, null);
        var i, quad, first = null, rest = null, parent = null;

        // Find the first and rest of this list node
        for (i = 0; i < subjectQuads.length && !malformed; i++) {
          quad = subjectQuads[i];
          if (!quad.graph.equals(graph))
            malformed = onError(current, 'not confined to single graph');
          else if (head)
            malformed = onError(current, 'has non-list arcs out');

          // one rdf:first
          else if (quad.predicate.value === IRIs["a" /* default */].rdf.first) {
            if (first)
              malformed = onError(current, 'has multiple rdf:first arcs');
            else
              toRemove.push(first = quad);
          }

          // one rdf:rest
          else if (quad.predicate.value === IRIs["a" /* default */].rdf.rest) {
            if (rest)
              malformed = onError(current, 'has multiple rdf:rest arcs');
            else
              toRemove.push(rest = quad);
          }

          // alien triple
          else if (objectQuads.length)
            malformed = onError(current, 'can\'t be subject and object');
          else {
            head = quad; // e.g. { (1 2 3) :p :o }
            headPos = 'subject';
          }
        }

        // { :s :p (1 2) } arrives here with no head
        // { (1 2) :p :o } arrives here with head set to the list.
        for (i = 0; i < objectQuads.length && !malformed; ++i) {
          quad = objectQuads[i];
          if (head)
            malformed = onError(current, 'can\'t have coreferences');
          // one rdf:rest
          else if (quad.predicate.value === IRIs["a" /* default */].rdf.rest) {
            if (parent)
              malformed = onError(current, 'has incoming rdf:rest arcs');
            else
              parent = quad;
          }
          else {
            head = quad; // e.g. { :s :p (1 2) }
            headPos = 'object';
          }
        }

        // Store the list item and continue with parent
        if (!first)
          malformed = onError(current, 'has no list head');
        else
          items.unshift(first.object);
        current = parent && parent.subject;
      }

      // Don't remove any quads if the list is malformed
      if (malformed)
        remove = false;
      // Store the list under the value of its head
      else if (head)
        lists[head[headPos].value] = items;
    });

    // Remove list quads if requested
    if (remove)
      this.removeQuads(toRemove);
    return lists;
  }
}

// Determines whether the argument is a string
function isString(s) {
  return typeof s === 'string' || s instanceof String;
}

// CONCATENATED MODULE: ./node_modules/n3/src/N3StreamParser.js
// **N3StreamParser** parses a text stream into a quad stream.



// ## Constructor
class N3StreamParser_N3StreamParser extends readable_browser["Transform"] {
  constructor(options) {
    super({ decodeStrings: true });
    this._readableState.objectMode = true;

    // Set up parser with dummy stream to obtain `data` and `end` callbacks
    var self = this, parser = new N3Parser_N3Parser(options), onData, onEnd;
    parser.parse({
      on: function (event, callback) {
        switch (event) {
        case 'data': onData = callback; break;
        case 'end':   onEnd = callback; break;
        }
      },
    },
      // Handle quads by pushing them down the pipeline
      function (error, quad) { error && self.emit('error', error) || quad && self.push(quad); },
      // Emit prefixes through the `prefix` event
      function (prefix, uri) { self.emit('prefix', prefix, uri); }
    );

    // Implement Transform methods through parser callbacks
    this._transform = function (chunk, encoding, done) { onData(chunk); done(); };
    this._flush = function (done) { onEnd(); done(); };
  }

  // ### Parses a stream of strings
  import(stream) {
    var self = this;
    stream.on('data',  function (chunk) { self.write(chunk); });
    stream.on('end',   function ()      { self.end(); });
    stream.on('error', function (error) { self.emit('error', error); });
    return this;
  }
}

// CONCATENATED MODULE: ./node_modules/n3/src/N3StreamWriter.js
// **N3StreamWriter** serializes a quad stream into a text stream.



// ## Constructor
class N3StreamWriter_N3StreamWriter extends readable_browser["Transform"] {
  constructor(options) {
    super({ encoding: 'utf8' });
    this._writableState.objectMode = true;

    // Set up writer with a dummy stream object
    var self = this;
    var writer = this._writer = new N3Writer_N3Writer({
      write: function (quad, encoding, callback) { self.push(quad); callback && callback(); },
      end: function (callback) { self.push(null); callback && callback(); },
    }, options);

    // Implement Transform methods on top of writer
    this._transform = function (quad, encoding, done) { writer.addQuad(quad, done); };
    this._flush = function (done) { writer.end(done); };
  }

// ### Serializes a stream of quads
  import(stream) {
    var self = this;
    stream.on('data',   function (quad)  { self.write(quad); });
    stream.on('end',    function ()      { self.end(); });
    stream.on('error',  function (error) { self.emit('error', error); });
    stream.on('prefix', function (prefix, iri) { self._writer.addPrefix(prefix, iri); });
    return this;
  }
}

// CONCATENATED MODULE: ./node_modules/n3/src/index.js













/***/ })
/******/ ]);