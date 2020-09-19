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
/******/ 	__webpack_require__.p = "webpacks/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 *
 * isIRI, isBlank, getLiteralType, getLiteralValue
 */

const ShExTermCjsModule = (function () {

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
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
    const result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

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
      const pref = Object.keys(prefixes).find(pref => node.startsWith(prefixes[pref]));
      if (pref) {
        const rest = node.substr(prefixes[pref].length);
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
      const value = getLiteralValue(node);
      const type = getLiteralType(node);
      const language = getLiteralLanguage(node);
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
      const firstChar = entity[0];
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
    const match = /^"([^]*)"/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1];
  }

  // Gets the type of a literal in the N3 library
  function getLiteralType (literal) {
    const match = /^"[^]*"(?:\^\^([^"]+)|(@)[^@"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] || (match[2] ? RdfLangString : XsdString);
  }

  // Gets the language of a literal in the N3 library
  function getLiteralLanguage (literal) {
    const match = /^"[^]*"(?:@([^@"]+)|\^\^[^"]+)?$/.exec(literal);
    if (!match)
      throw new Error(literal + ' is not a literal');
    return match[1] ? match[1].toLowerCase() : '';
  }


// rdf:type predicate (for 'a' abbreviation)
const RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
const escape    = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    escapeAll = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    escapeReplacements = {
      '\\': '\\\\', '"': '\\"', '\t': '\\t',
      '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f',
    };

  // Replaces a character by its escaped version
  function characterReplacer (character) {
    // Replace a single character by its escaped version
    const result = escapeReplacements[character];
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
  module.exports = ShExTermCjsModule; // node environment


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExUtil** provides ShEx utility functions

const ShExUtilCjsModule = (function () {
const ShExTerm = __webpack_require__(3);
const Visitor = __webpack_require__(10)
const Hierarchy = __webpack_require__(23)

const SX = {};
SX._namespace = "http://www.w3.org/ns/shex#";
["Schema", "@context", "imports", "startActs", "start", "shapes",
 "ShapeOr", "ShapeAnd", "shapeExprs", "nodeKind",
 "NodeConstraint", "iri", "bnode", "nonliteral", "literal", "datatype", "length", "minlength", "maxlength", "pattern", "flags", "mininclusive", "minexclusive", "maxinclusive", "maxexclusive", "totaldigits", "fractiondigits", "values",
 "ShapeNot", "shapeExpr",
 "Shape", "virtual", "closed", "extra", "expression", "inherit", "semActs",
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
const UNBOUNDED = -1;

function extend (base) {
  if (!base) base = {};
  for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
    for (let name in arg)
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
          const ret = { value: ShExTerm.getLiteralValue(term) };
          const dt = ShExTerm.getLiteralType(term);
          if (dt &&
              dt !== "http://www.w3.org/2001/XMLSchema#string" &&
              dt !== "http://www.w3.org/1999/02/22-rdf-syntax-ns#langString")
            ret.type = dt;
          const lang = ShExTerm.getLiteralLanguage(term)
          if (lang)
            ret.language = lang;
          return ret;
        }
const ShExUtil = {

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
    const _ShExUtil = this;
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
    const v = ShExUtil.Visitor();
    const knownExpressions = {};
    const oldVisitShapeExpr = v.visitShapeExpr,
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
      const ret = oldVisitExpression.call(this, expr);
      // Everything from RDF has an ID, usually a BNode.
      knownExpressions[expr.id] = { refCount: 1, expr: ret };
      return ret;
    }

    v.cleanIds = function () {
      for (let k in knownExpressions) {
        const known = knownExpressions[k];
        if (known.refCount === 1 && ShExTerm.isBlank(known.expr.id))
          delete known.expr.id;
      };
    }

    return v;
  },


  // tests
  // const shexr = ShExUtil.ShExRtoShExJ({ "type": "Schema", "shapes": [
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
    const knownShapeExprs = [];
    if ("shapes" in schema)
      [].push.apply(knownShapeExprs, schema.shapes.map(sh => { return sh.id; }));

    // normalize references to those shapeExprs
    const v = this.ShExRVisitor(knownShapeExprs);
    if ("start" in schema)
      schema.start = v.visitShapeExpr(schema.start);
    if ("shapes" in schema)
      schema.shapes = schema.shapes.map(sh => {
        return v.keepShapeExpr(sh);
      });

    // remove extraneous BNode IDs
    v.cleanIds();
    return schema;
  },

  valGrep: function (obj, type, f) {
    const _ShExUtil = this;
    const ret = [];
    for (let i in obj) {
      const o = obj[i];
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
      const ret = JSON.parse(JSON.stringify(t));
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
      const t = ShExTerm.getLiteralType(node);
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
    const ret = JSON.parse(JSON.stringify(schema));
    ret["@context"] = ret["@context"] || "http://www.w3.org/ns/shex.jsonld";
    delete ret._prefixes;
    delete ret._base;
    let index = ret._index || this.index(schema);
    delete ret._index;
    let sourceMap = ret._sourceMap;
    delete ret._sourceMap;
    // Don't delete ret.productions as it's part of the AS.
    const v = ShExUtil.Visitor();
    const knownExpressions = [];
    const oldVisitInclusion = v.visitInclusion, oldVisitExpression = v.visitExpression;
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
        return v.visitShapeExpr(index.shapeExprs[k]);
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
        function expect (l, r) { const ls = JSON.stringify(l), rs = JSON.stringify(r); if (ls !== rs) throw Error(ls+" !== "+rs); }
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
        const r = this;
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
          for (let i = a.length-1; i > -1; --i)
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
    const _ShExUtil = this;
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
    const _ShExUtil = this;

    // populate shapeHierarchy
    let shapeHierarchy = Hierarchy.create()
    Object.keys(schema.shapes).forEach(label => {
      let shapeExpr = _ShExUtil.skipDecl(schema.shapes[label])
      if (shapeExpr.type === 'Shape') {
        (shapeExpr.extends || []).forEach(
          superShape => shapeHierarchy.add(superShape, label)
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
            } else if (shapeHierarchy.parents[curType].indexOf(newType) !== -1) {
              predicates[tc.predicate].polymorphic = true; // already covered by current commonType
            } else {
              let idx = shapeHierarchy.parents[newType].indexOf(curType)
              if (idx === -1) {
                let intersection = shapeHierarchy.parents[curType].filter(
                  lab => -1 !== shapeHierarchy.parents[newType].indexOf(lab)
                )
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
            _walkShapeExpression(expr, negated ^ !!expr.negated);
          });
        } else if (shapeExpr.type === "ShapeNot") {
          _walkShapeExpression(shapeExpr.shapeExpr, negated ^ 1); // !!! test negation
        } else if (shapeExpr.type === "Shape") {
          _walkShape(shapeExpr, negated ^ !!shapeExpr.negated);
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
              _walkTripleExpression(nested, negated ^ !!nested.negated) // ?? negation allowed?
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
              _walkTripleConstraint(tripleExpr, negated ^ !!tripleExpr.negated);
            } else if (tripleExpr.type === "OneOf" || tripleExpr.type === "EachOf") {
              _exprGroup(tripleExpr.expressions);
            } else {
              throw Error("expected {TripleConstraint,OneOf,EachOf,Inclusion} in " + tripleExpr);
            }
          }
        }

        if (shape.inherit && shape.inherit.length > 0)
          shape.inherit.forEach(function (i) {
            ret.add(shape.id, i);
          });
        if (shape.expression)
          _walkTripleExpression(shape.expression, negated ^ !!shape.negated);
      }
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
    const partition = {};
    for (let k in schema)
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
    const v = this.Visitor();
    return v.visitSchema(schema);
  },

  // @@ put predicateUsage here

  emptySchema: function () {
    return {
      type: "Schema"
    };
  },
  merge: function (left, right, overwrite, inPlace) {
    const ret = inPlace ? left : this.emptySchema();

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
    // !! duplicate of Validation-test.js:84: const referenceResult = parseJSONFile(resultsFile...)
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
          const s2 = s;
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
    const _ShExUtil = this;
    const visitor = this.Visitor();
    let currentLabel = currentExtra = null;
    let currentNegated = false;
    const dependsOn = { };
    let inTE = false;
    const oldVisitShape = visitor.visitShape;
    const negativeDeps = Hierarchy.create();
    const positiveDeps = Hierarchy.create();
    let index = schema.index || this.index(schema);

    visitor.visitShape = function (shape, label) {
      const lastExtra = currentExtra;
      currentExtra = shape.extra;
      const ret = oldVisitShape.call(visitor, shape, label);
      currentExtra = lastExtra;
      return ret;
    }

    const oldVisitShapeNot = visitor.visitShapeNot;
    visitor.visitShapeNot = function (shapeNot, label) {
      const lastNegated = currentNegated;
      currentNegated ^= true;
      const ret = oldVisitShapeNot.call(visitor, shapeNot, label);
      currentNegated = lastNegated;
      return ret;
    }

    const oldVisitTripleConstraint = visitor.visitTripleConstraint;
    visitor.visitTripleConstraint = function (expr) {
      const lastNegated = currentNegated;
      if (currentExtra && currentExtra.indexOf(expr.predicate) !== -1)
        currentNegated ^= true;
      inTE = true;
      const ret = oldVisitTripleConstraint.call(visitor, expr);
      inTE = false;
      currentNegated = lastNegated;
      return ret;
    };

    const oldVisitShapeRef = visitor.visitShapeRef;
    visitor.visitShapeRef = function (shapeRef) {
      if (!(shapeRef in index.shapeExprs))
        throw firstError(Error("Structural error: reference to " + JSON.stringify(shapeRef) + " not found in schema shape expressions:\n" + dumpKeys(index.shapeExprs) + "."), shapeRef);
      if (!inTE && shapeRef === currentLabel)
        throw firstError(Error("Structural error: circular reference to " + currentLabel + "."), shapeRef);
      (currentNegated ? negativeDeps : positiveDeps).add(currentLabel, shapeRef)
      return oldVisitShapeRef.call(visitor, shapeRef);
    }

    const oldVisitInclusion = visitor.visitInclusion;
    visitor.visitInclusion = function (inclusion) {
      let refd;
      if (!(refd = index.tripleExprs[inclusion]))
        throw firstError(Error("Structural error: included shape " + inclusion + " not found in schema triple expressions:\n" + dumpKeys(index.tripleExprs) + "."), inclusion);
      // if (refd.type !== "Shape")
      //   throw Error("Structural error: " + inclusion + " is not a simple shape.");
      return oldVisitInclusion.call(visitor, inclusion);
    };

    (schema.shapes || []).forEach(function (shape) {
      currentLabel = shape.id;
      visitor.visitShapeExpr(shape, shape.id);
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
    // const deps = this.getDependencies(schema);
    return schema;
  },

  walkVal: function (val, cb) {
    const _ShExUtil = this;
    if (val.type === "NodeConstraintTest") {
      return null;
    } else if (val.type === "ShapeTest") {
      return "solution" in val ? _ShExUtil.walkVal(val.solution, cb) : null;
    } else if (val.type === "ShapeOrResults") {
      return _ShExUtil.walkVal(val.solution || val.solutions, cb);
    } else if (val.type === "ShapeAndResults") {
      return val.solutions.reduce((ret, exp) => {
        const n = _ShExUtil.walkVal(exp, cb);
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
          const n = _ShExUtil.walkVal(exp, cb);
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
        const ret = {};
        const vals = [];
        ret[val.predicate] = vals;
        val.solutions.forEach(sln => {
          const toAdd = [];
          if (chaseList(sln.referenced, toAdd)) {
            [].push.apply(vals, toAdd);
          } else {
            const newElt = cb(sln);
            if ("referenced" in sln) {
              const t = _ShExUtil.walkVal(sln.referenced, cb);
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
              const expressions = li.solution.solutions[0].expressions;
              const ent = expressions[0];
              const rest = expressions[1].solutions[0];
              const member = ent.solutions[0];
              const newElt = cb(member);
              if ("referenced" in member) {
                const t = _ShExUtil.walkVal(member.referenced, cb);
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
    const map = this.walkVal (val, function (sln) {
      return { extensions: sln.extensions };
    });
    function extensions (obj) {
      const list = [];
      let crushed = {};
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
      for (let k in obj) {
        if (k === "extensions") {
          if (obj[k])
            list.push(crush(ldify(obj[k][lookfor])));
        } else if (k === "nested") {
          const nested = extensions(obj[k]);
          if (nested.constructor === Array)
            nested.forEach(crush);
          else
            crush(nested);
          list.push(nested);
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
    const v = values;
    const t = values[RDF.type][0].ldterm;
    if (t === SX.Schema) {
      /* Schema { "@context":"http://www.w3.org/ns/shex.jsonld"
       *           startActs:[SemAct+]? start:(shapeExpr|labeledShapeExpr)?
       *           shapes:[labeledShapeExpr+]? }
       */
      const ret = {
        "@context": "http://www.w3.org/ns/shex.jsonld",
        type: "Schema"
      }
      if (SX.startActs in v)
        ret.startActs = v[SX.startActs].map(e => {
          const ret = {
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
      const shapes = values[SX.shapes];
      if (shapes) {
        ret.shapes = shapes.map(v => {
          return extend({id: v.ldterm}, shapeExpr(v.nested));
        });
      }
      // console.log(ret);
      return ret;
    } else {
      throw Error("unknown schema type in " + JSON.stringify(values));
    }
    function findType (v, elts, f) {
      const t = v[RDF.type][0].ldterm.substr(SX._namespace.length);
      const elt = elts[t];
      if (!elt)
        return Missed;
      if (elt.nary) {
        const ret = {
          type: t,
        };
        ret[elt.prop] = v[SX[elt.prop]].map(e => {
          return valueOf(e);
        });
        return ret;
      } else {
        const ret = {
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
      const elts = { "ShapeAnd"     : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeOr"      : { nary: true , expr: true , prop: "shapeExprs" },
                   "ShapeNot"     : { nary: false, expr: true , prop: "shapeExpr"  },
                   "ShapeRef"     : { nary: false, expr: false, prop: "reference"  },
                   "ShapeExternal": { nary: false, expr: false, prop: null         } };
      const ret = findType(v, elts, shapeExpr);
      if (ret !== Missed)
        return ret;

      const t = v[RDF.type][0].ldterm;
      if (t === SX.Shape) {
        const ret = { type: "Shape" };
        ["closed"].forEach(a => {
          if (SX[a] in v)
            ret[a] = !!v[SX[a]][0].ldterm.value;
        });
        if (SX.extra in v)
          ret.extra = v[SX.extra].map(e => { return e.ldterm; });
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
            const ret = {
              type: "SemAct",
              name: e.nested[SX.name][0].ldterm
            };
            if (SX.code in e.nested)
              ret.code = e.nested[SX.code][0].ldterm.value;
            return ret;
          });
        return ret;
      } else if (t === SX.NodeConstraint) {
        const ret = { type: "NodeConstraint" };
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
        const t = v.nested[RDF.type][0].ldterm;
        if ([SX.IriStem, SX.LiteralStem, SX.LanguageStem].indexOf(t) !== -1) {
          const ldterm = v.nested[SX.stem][0].ldterm.value;
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
          const st = v.nested[SX.stem][0];
          let stem = st;
          if (typeof st === "object") {
            if (typeof st.ldterm === "object") {
              stem = st.ldterm;
            } else if (st.ldterm.startsWith("_:")) {
              stem = { type: "Wildcard" };
            }
          }
          const ret = {
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
      const elts = { "EachOf"   : { nary: true , expr: true , prop: "expressions" },
                   "OneOf"    : { nary: true , expr: true , prop: "expressions" },
                   "Inclusion": { nary: false, expr: false, prop: "include"     } };
      const ret = findType(v, elts, tripleExpr);
      if (ret !== Missed) {
        minMaxAnnotSemActs(v, ret);
        return ret;
      }

      const t = v[RDF.type][0].ldterm;
      if (t === SX.TripleConstraint) {
        const ret = {
          type: "TripleConstraint",
          predicate: v[SX.predicate][0].ldterm
        };
        ["inverse", "negated"].forEach(a => {
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
          const ret = {
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
    const _ShExUtil = this;
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
          const toAdd = {};
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
              const expressions = li.solution.solutions[0].expressions;
              const ent = expressions[0];
              const rest = expressions[1].solutions[0];
              const member = ent.solutions[0];
              const newElt = { ldterm: member.object };
              if ("referenced" in member) {
                const t = _ShExUtil.valToSimple(member.referenced);
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
      const thisNode = {  };
      thisNode[n3ify(val.node)] = [val.shape];
      return thisNode;
    } else if (val.type === "ShapeTest") {
      const thisNode = {  };
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
    const _ShExUtil = this;
    if (val.type === "FailureList") {
      return val.errors.reduce((ret, e) => {
        return ret.concat(_ShExUtil.errsToSimple(e));
      }, []);
    } else if (val.type === "Failure") {
      return ["validating " + val.node + " as " + val.shape + ":"].concat(errorList(val.errors).reduce((ret, e) => {
        const nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length > 0 ? ret.concat(["  OR"]).concat(nested) : nested.map(s => "  " + s);
      }, []));
    } else if (val.type === "TypeMismatch") {
      const nested = val.errors.constructor === Array ?
          val.errors.reduce((ret, e) => {
            return ret.concat((typeof e === "string" ? [e] : _ShExUtil.errsToSimple(e)).map(s => "  " + s));
          }, []) :
          "  " + (typeof e === "string" ? [val.errors] : _ShExUtil.errsToSimple(val.errors));
      return ["validating " + n3ify(val.triple.object) + ":"].concat(nested);
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
      const w = __webpack_require__(11)();
      w._write(w._writeNodeConstraint(val.shapeExpr).join(""));
      let txt;
      w.end((err, res) => {
        txt = res;
      });
      return ["NodeConstraintError: expected to match " + txt];
    } else if (val.type === "MissingProperty") {
      return ["Missing property: " + val.property];
    } else if (val.type === "NegatedProperty") {
      return ["Unexpected property: " + val.property];
    } else if (val.constructor === Array) {debugger;
      return val.reduce((ret, e) => {
        const nested = _ShExUtil.errsToSimple(e).map(s => "  " + s);
        return ret.length ? ret.concat(["AND"]).concat(nested) : nested;
      }, []);
    } else if (val.type === "SemActFailure") {
      const nested = val.errors.constructor === Array ?
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
        const attrs = Object.keys(e);
        return acc.concat(
          (attrs.length === 1 && attrs[0] === "errors")
            ? errorList(e.errors)
            : e);
      }, []);
    }
  },

  resolveRelativeIRI: ShExTerm.resolveRelativeIRI,

  resolvePrefixedIRI: function (prefixedIri, prefixes) {
    const colon = prefixedIri.indexOf(":");
    if (colon === -1)
      return null;
    const prefix = prefixes[prefixedIri.substr(0, colon)];
    return prefix === undefined ? null : prefix + prefixedIri.substr(colon+1);
  },

  parsePassedNode: function (passedValue, meta, deflt, known, reportUnknown) {
    if (passedValue === undefined || passedValue.length === 0)
      return known && known(meta.base) ? meta.base : deflt ? deflt() : this.NotSupplied;
    if (passedValue[0] === "_" && passedValue[1] === ":")
      return passedValue;
    if (passedValue[0] === "\"") {
      const m = passedValue.match(/^"((?:[^"\\]|\\")*)"(?:@(.+)|\^\^(?:<(.*)>|([^:]*):(.*)))?$/);
      if (!m)
        throw Error("malformed literal: " + passedValue);
      const lex = m[1], lang = m[2], rel = m[3], pre = m[4], local = m[5];
      // Turn the literal into an N3.js atom.
      const quoted = "\""+lex+"\"";
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
    const relIRI = passedValue[0] === "<" && passedValue[passedValue.length-1] === ">";
    if (relIRI)
      passedValue = passedValue.substr(1, passedValue.length-2);
    const t = ShExTerm.resolveRelativeIRI(meta.base || "", passedValue); // fall back to base-less mode
    if (known(t))
      return t;
    if (!relIRI) {
      const t2 = this.resolvePrefixedIRI(passedValue, meta.prefixes);
      if (t2 !== null && known(t2))
        return t2;
    }
    return reportUnknown ? reportUnknown(t) : this.UnknownIRI;
  },

  executeQueryPromise: function (query, endpoint) {
    let rows;

    const queryURL = endpoint + "?query=" + encodeURIComponent(query);
    return fetch(queryURL, {
      headers: {
        'Accept': 'application/sparql-results+json'
      }}).then(resp => resp.json()).then(t => {
        const selects = t.head.vars;
        return t.results.bindings.map(row => {
          return selects.map(sel => {
            const elt = row[sel];
            switch (elt.type) {
            case "uri": return elt.value;
            case "bnode": return "_:" + elt.value;
            case "literal":
              const datatype = elt.datatype;
              const lang = elt["xml:lang"];
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
    let rows;
    const queryURL = endpoint + "?query=" + encodeURIComponent(query);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", queryURL, false);
    xhr.setRequestHeader('Accept', 'application/sparql-results+json');
    xhr.send();
    // const selectsBlock = query.match(/SELECT\s*(.*?)\s*{/)[1];
    // const selects = selectsBlock.match(/\?[^\s?]+/g);
    const t = JSON.parse(xhr.responseText);
    const selects = t.head.vars;
    return t.results.bindings.map(row => {
      return selects.map(sel => {
        const elt = row[sel];
        switch (elt.type) {
        case "uri": return elt.value;
        case "bnode": return "_:" + elt.value;
        case "literal":
          const datatype = elt.datatype;
          const lang = elt["xml:lang"];
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
                const text = elt.text();
                switch (elt.prop("tagName")) {
                case "uri": return text;
                case "bnode": return "_:" + text;
                case "literal":
                  const datatype = elt.attr("datatype");
                  const lang = elt.attr("xml:lang");
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

  rdfjsDB: function (db, queryTracker) {

    function getSubjects () { return db.getSubjects().map(ShExTerm.internalTerm); }
    function getPredicates () { return db.getPredicates().map(ShExTerm.internalTerm); }
    function getObjects () { return db.getObjects().map(ShExTerm.internalTerm); }
    function getQuads () { return db.getQuads.apply(db, arguments).map(ShExTerm.internalTriple); }

    function getNeighborhood (point, shapeLabel/*, shape */) {
      // I'm guessing a local DB doesn't benefit from shape optimization.
      let startTime;
      if (queryTracker) {
        startTime = new Date();
        queryTracker.start(false, point, shapeLabel);
      }
      const outgoing = db.getQuads(point, null, null, null).map(ShExTerm.internalTriple);
      if (queryTracker) {
        const time = new Date();
        queryTracker.end(outgoing, time - startTime);
        startTime = time;
      }
      if (queryTracker) {
        queryTracker.start(true, point, shapeLabel);
      }
      const incoming = db.getQuads(null, null, point, null).map(ShExTerm.internalTriple);
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
      //   const quads = db.getQuads(s, p, o, graph)
      //   if (queryTracker)
      //     queryTracker.end(quads, new Date() - startTime);
      //   return quads;
      // }
    }
  },

  NotSupplied: "-- not supplied --", UnknownIRI: "-- not found --",

  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  unescapeText: function (string, replacements) {
    const regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        let charCode;
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
          const replacement = replacements[escapedChar];
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
  const ret = "\"" + ldterm.value + "\"";
  if ("language" in ldterm)
    return ret + "@" + ldterm.language;
  if ("type" in ldterm)
    return ret + "^^" + ldterm.type;
  return ret;
}

// Add the ShExUtil functions to the given object or its prototype
function AddShExUtil(parent, toPrototype) {
  for (let name in ShExUtil)
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
  module.exports = ShExUtilCjsModule; // node environment


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(1)
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(29)

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
/* 6 */
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

exports.isBuffer = __webpack_require__(36);

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
exports.inherits = __webpack_require__(37);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 7 */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * Status: Early implementation
 *
 * TODO:
 *   testing.
 */

const ShapeMapSymbols = (function () {
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
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


function ShExVisitor () {

    function isTerm (t) {
      return typeof t !== "object" || "value" in t && Object.keys(t).reduce((r, k) => {
        return r === false ? r : ["value", "type", "language"].indexOf(k) !== -1;
      }, true);
    }

  function isShapeRef (expr) {
    return typeof expr === "string" // test for JSON-LD @ID
  }
  let isInclusion = isShapeRef;

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
          _Visitor.visitShapeExpr(shapeExpr)
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
                       // "virtual", "inherit", -- futureWork
                       "closed",
                       "expression", "extra", "semActs", "annotations"]);
      return ret;
    },

    // ### `visitNodeConstraint` deep-copies the structure of a shape
    visitNodeConstraint: function (shape, label) {
      var ret = { type: "NodeConstraint" };
      _expect(shape, "type", "NodeConstraint");

      this._maybeSet(shape, ret, "NodeConstraint",
                     [ "id",
                       // "virtual", "inherit", -- futureWork
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
                            ["id", "inverse", "negated", "predicate", "valueExpr",
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
  r.visitInherit = r.visitExtra = r.visitAnnotations = r._visitList;
  r.visitInverse = r.visitNegated = r.visitPredicate = r._visitValue;
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

  v.visitSchema(schema);
  return index;
}

if (true)
  module.exports = ShExVisitor;



/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExWriter** writes ShEx documents.

const ShExWriterCjsModule = (function () {
const UNBOUNDED = -1;

// Matches a literal as represented in memory by the ShEx library
const ShExLiteralMatcher = /^"([^]*)"(?:\^\^(.+)|@([\-a-z]+))?$/i;

// rdf:type predicate (for 'a' abbreviation)
const RDF_PREFIX = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
    RDF_TYPE   = RDF_PREFIX + 'type';

// Characters in literals that require escaping
const ESCAPE_1 = /["\\\t\n\r\b\f\u0000-\u0019\ud800-\udbff]/,
    ESCAPE_g = /["\\\t\n\r\b\f\u0000-\u0019]|[\ud800-\udbff][\udc00-\udfff]/g,
    ESCAPE_replacements = { '\\': '\\\\', '"': '\\"', '/': '\\/', '\t': '\\t',
                            '\n': '\\n', '\r': '\\r', '\b': '\\b', '\f': '\\f' };

const nodeKinds = {
  'iri': "IRI",
  'bnode': "BNODE",
  'literal': "LITERAL",
  'nonliteral': "NONLITERAL"
};
const nonLitNodeKinds = {
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
    let output = '';
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
    const _ShExWriter = this;
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
        _ShExWriter._write(
          _ShExWriter._encodeShapeName(shapeExpr.id, false) +
            " " +
            _ShExWriter._writeShapeExpr(shapeExpr, done, true, 0).join("")+"\n",
          done
        );
      })
  },

  _writeShapeExpr: function (shapeExpr, done, forceBraces, parentPrec) {
    const _ShExWriter = this;
    const pieces = [];
    if (typeof shapeExpr === "string") // ShapeRef
      pieces.push("@", _ShExWriter._encodeShapeName(shapeExpr));
    // !!! []s for precedence!
    else if (shapeExpr.type === "ShapeExternal")
      pieces.push("EXTERNAL");
    else if (shapeExpr.type === "ShapeAnd") {
      if (parentPrec >= 3)
        pieces.push("(");
      let lastAndElided = false;
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
        [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr, done, false, 3));
      });
      if (parentPrec >= 3)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeOr") {
      if (parentPrec >= 2)
        pieces.push("(");
      shapeExpr.shapeExprs.forEach(function (expr, ord) {
        if (ord > 0)
          pieces.push(" OR ");
        [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr, done, forceBraces, 2));
      });
      if (parentPrec >= 2)
        pieces.push(")");
    } else if (shapeExpr.type === "ShapeNot") {
      if (parentPrec >= 4)
        pieces.push("(");
      pieces.push("NOT ");
      [].push.apply(pieces, _ShExWriter._writeShapeExpr(shapeExpr.shapeExpr, done, forceBraces, 4));
      if (parentPrec >= 4)
        pieces.push(")");
    } else if (shapeExpr.type === "Shape") {
      [].push.apply(pieces, _ShExWriter._writeShape(shapeExpr, done, forceBraces));
    } else if (shapeExpr.type === "NodeConstraint") {
      [].push.apply(pieces, _ShExWriter._writeNodeConstraint(shapeExpr, done, forceBraces));
    } else
      throw Error("expected Shape{,And,Or,Ref} or NodeConstraint in " + JSON.stringify(shapeExpr));
    return pieces;
  },

  // ### `_writeShape` writes the shape to the output stream
  _writeShape: function (shape, done, forceBraces) {
    const _ShExWriter = this;
    try {
      const pieces = []; // guessing push/join is faster than concat
      this._expect(shape, "type", "Shape");

      if (shape.closed) pieces.push("CLOSED ");

      // if (shape.inherit && shape.inherit.length > 0) { futureWork
      //   pieces.push("&");
      //   shape.inherit.forEach(function (i, ord) {
      //     if (ord)
      //       pieces.push(" ")
      //     pieces.push(_ShExWriter._encodeShapeName(i, ord > 0));
      //   });
      //   pieces.push(" ");
      // }

      if (shape.extra && shape.extra.length > 0) {
        pieces.push("EXTRA ");
        shape.extra.forEach(function (i, ord) {
          pieces.push(_ShExWriter._encodeShapeName(i, false)+" ");
        });
        pieces.push(" ");
      }
      const empties = ["values", "length", "minlength", "maxlength", "pattern", "flags"];
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
          const needsParens = precedence < parentPrecedence || forceParens;
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
            [].push.apply(pieces, _ShExWriter._writeShapeExpr(expr.valueExpr, done, true, 0));
          else
            pieces.push(". ");

          _writeCardinality(expr.min, expr.max);
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "OneOf") {
          const needsParens = "id" in expr || "min" in expr || "max" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, "\n"+indent+"| ", 1, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else if (expr.type === "EachOf") {
          const needsParens = "id" in expr || "min" in expr || "max" in expr || "annotations" in expr || "semActs" in expr;
          _exprGroup(expr.expressions, ";\n"+indent, 2, needsParens || _ShExWriter.forceParens);
          _writeCardinality(expr.min, expr.max); // t: open1dotclosecardOpt
          _ShExWriter._annotations(pieces, expr.annotations, indent);
          _writeExpressionActions(expr.semActs);
        }

        else throw Error("unexpected expr type: " + expr.type);
        }
      }

      if (shape.expression) // t: 0, 0Inherit1
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
    const _ShExWriter = this;
    try {
      _ShExWriter._expect(v, "type", "NodeConstraint");

      const pieces = [];
      if (v.nodeKind in nodeKinds)       pieces.push(nodeKinds[v.nodeKind], " ");
      else if (v.nodeKind !== undefined) _ShExWriter._error("unexpected nodeKind: " + v.nodeKind); // !!!!

      this._fillNodeConstraint(pieces, v, done);
      this._annotations(pieces, v.annotations, "  ");
      return pieces;
    }
    catch (error) { done && done(error); }

  },

  _annotations: function (pieces, annotations, indent) {
    const _ShExWriter = this;
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
    const _ShExWriter = this;
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
          const stemRangeTypes = ["Language", "IriStem", "LiteralStem", "LanguageStem", "IriStemRange", "LiteralStemRange", "LanguageStemRange"];
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
                    const stemTypes = ["IriStem", "LiteralStem", "LanguageStem"];
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
      const pattern = v.pattern.
          replace(/\//g, "\\/");
      // if (ESCAPE_1.test(pattern))
      //   pattern = pattern.replace(ESCAPE_g, characterReplacer);
      const flags = 'flags' in v ? v.flags : "";
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
    const prefixMatch = this._prefixRegex.exec(iri);
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
    for (let i = 0; i < shapes.length; i++)
      this.addShape(shapes[i]);
  },

  // ### `addPrefix` adds the prefix to the output stream
  addPrefix: function (prefix, iri, done) {
    const prefixes = {};
    prefixes[prefix] = iri;
    this.addPrefixes(prefixes, done);
  },

  // ### `addPrefixes` adds the prefixes to the output stream
  addPrefixes: function (prefixes, done) {
    // Add all useful prefixes
    const prefixIRIs = this._prefixIRIs;
    let hasPrefixes = false;
    for (let prefix in prefixes) {
      // Verify whether the prefix can be used and does not exist yet
      const iri = prefixes[prefix];
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
      let IRIlist = '', prefixList = '';
      for (let prefixIRI in prefixIRIs) {
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
    let singleDone = done && function (error, result) { singleDone = null, done(error, result); };
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
  let result = ESCAPE_replacements[character];
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
  const e = new Error(str);
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
  module.exports = ShExWriterCjsModule; // node environment


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const ShExParserCjsModule = (function () {

const ShExJison = __webpack_require__(27).Parser;

// Creates a ShEx parser with the given pre-defined prefixes
const prepareParser = function (baseIRI, prefixes, schemaOptions) {
  schemaOptions = schemaOptions || {};
  // Create a copy of the prefixes
  const prefixesCopy = {};
  for (const prefix in prefixes || {})
    prefixesCopy[prefix] = prefixes[prefix];

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  const parser = new ShExJison();

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
    const line = e.location.first_line;
    const col  = e.location.first_column + 1;
    const posStr = "pos" in e.hash ? "\n" + e.hash.pos : ""
    return `${baseIRI}\n line: ${line}, column: ${col}: ${e.message}${posStr}`;
  }
}

return {
  construct: prepareParser
};
})();

if (true)
  module.exports = ShExParserCjsModule;


/***/ }),
/* 13 */
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

var fs = __webpack_require__(2)
var rp = __webpack_require__(14)
var minimatch = __webpack_require__(5)
var Minimatch = minimatch.Minimatch
var inherits = __webpack_require__(32)
var EE = __webpack_require__(33).EventEmitter
var path = __webpack_require__(1)
var assert = __webpack_require__(15)
var isAbsolute = __webpack_require__(7)
var globSync = __webpack_require__(38)
var common = __webpack_require__(16)
var alphasort = common.alphasort
var alphasorti = common.alphasorti
var setopts = common.setopts
var ownProp = common.ownProp
var inflight = __webpack_require__(39)
var util = __webpack_require__(6)
var childrenIgnored = common.childrenIgnored
var isIgnored = common.isIgnored

var once = __webpack_require__(18)

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = realpath
realpath.realpath = realpath
realpath.sync = realpathSync
realpath.realpathSync = realpathSync
realpath.monkeypatch = monkeypatch
realpath.unmonkeypatch = unmonkeypatch

var fs = __webpack_require__(2)
var origRealpath = fs.realpath
var origRealpathSync = fs.realpathSync

var version = process.version
var ok = /^v[0-5]\./.test(version)
var old = __webpack_require__(28)

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var objectAssign = __webpack_require__(35);

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

var util = __webpack_require__(6);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(34)))

/***/ }),
/* 16 */
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

var path = __webpack_require__(1)
var minimatch = __webpack_require__(5)
var isAbsolute = __webpack_require__(7)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var wrappy = __webpack_require__(17)
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

ShExWebApp = (function () {
  let shapeMap = __webpack_require__(20)
  return Object.assign({}, {
    ShExTerm:       __webpack_require__(3),
    Util:           __webpack_require__(4),
    Validator:      __webpack_require__(24),
    Writer:         __webpack_require__(11),
    Api:            __webpack_require__(26),
    Parser:         __webpack_require__(12),
    ShapeMap:       shapeMap,
    ShapeMapParser: shapeMap.Parser,
  })
})()

if (true)
  module.exports = ShExWebApp;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* ShapeMap - javascript module to associate RDF nodes with labeled shapes.
 *
 * See README for description.
 */

const ShapeMapCjsModule = (function () {
  const symbols = __webpack_require__(8)

  // Write the parser object directly into the symbols so the caller shares a
  // symbol space with ShapeMapJison for e.g. start and focus.
  symbols.Parser = __webpack_require__(21)
  return symbols
})();

// Export the `ShExValidator` class as a whole.
if (true)
  module.exports = ShapeMapCjsModule;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

const ShapeMapParser = (function () {

// stolen as much as possible from SPARQL.js
if (true) {
  ShapeMapJison = __webpack_require__(22).Parser; // node environment
} else {}

// Creates a ShEx parser with the given pre-defined prefixes
const prepareParser = function (baseIRI, schemaMeta, dataMeta) {
  // Create a copy of the prefixes
  const schemaBase = schemaMeta.base;
  const schemaPrefixesCopy = {};
  for (const prefix in schemaMeta.prefixes || {})
    schemaPrefixesCopy[prefix] = schemaMeta.prefixes[prefix];
  const dataBase = dataMeta.base;
  const dataPrefixesCopy = {};
  for (const prefix in dataMeta.prefixes || {})
    dataPrefixesCopy[prefix] = dataMeta.prefixes[prefix];

  // Create a new parser with the given prefixes
  // (Workaround for https://github.com/zaach/jison/issues/241)
  const parser = new ShapeMapJison();

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
      const lineNo = "lexer" in parser.yy ? parser.yy.lexer.yylineno + 1 : 1;
      const pos = "lexer" in parser.yy ? parser.yy.lexer.showPosition() : "";
      const t = Error(`${baseIRI}(${lineNo}): ${e.message}\n${pos}`);
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
/* 22 */
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
        const namePos = $$[$0].indexOf(':');
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
        const t = $$[$0-1].substr(0, $$[$0-1].length - 1).trim(); // remove trailing ':' and spaces
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

        const node = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._dataBase === null || absoluteIRI.test(node) ? node : _resolveDataIRI(node)
      
break;
case 85: case 86:
this.$ = parsePName($$[$0], Parser._dataPrefixes);
break;
case 87:
this.$ = expandPrefix(Parser._dataPrefixes, $$[$0].substr(0, $$[$0].length - 1));;
break;
case 88:

        const shape = unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._schemaBase === null || absoluteIRI.test(shape) ? shape : _resolveSchemaIRI(shape)
      
break;
case 89: case 90:
this.$ = parsePName($$[$0], Parser._schemaPrefixes);
break;
case 91:
this.$ = expandPrefix(Parser._schemaPrefixes, $$[$0].substr(0, $$[$0].length - 1));;
break;
}
},
table: [{3:1,4:[1,2],5:3,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},{1:[3]},{1:[2,1]},o($Vg,[2,4],{6:30}),{11:31,16:[1,32],19:[1,33],20:[1,34],21:[1,35]},o($Vh,[2,19]),o($Vh,[2,20]),{26:36,56:$V9,76:$Va,77:$Vb,78:$Vc},o($Vh,$Vi,{26:37,56:$V9,76:$Va,77:$Vb,78:$Vc}),o($Vj,[2,27]),o($Vj,[2,28]),{27:42,30:40,31:$V1,34:[1,38],38:39,39:[1,41],46:$V3,80:$Vd,81:$Ve,82:$Vf},o($Vk,[2,84]),o($Vk,[2,85]),o($Vk,[2,86]),o($Vk,[2,87]),o([16,19,20,21,37,46,79,80,81,82],[2,26]),o($Vj,[2,65]),o($Vj,[2,66]),o($Vj,[2,67]),o($Vj,[2,74],{72:43,73:44,74:[1,45],75:[1,46]}),o($Vj,[2,68]),o($Vj,[2,69]),o($Vj,[2,70]),o($Vj,[2,76]),o($Vj,[2,77]),o($Vl,[2,78]),o($Vl,[2,79]),o($Vl,[2,80]),o($Vl,[2,81]),{4:[2,6],7:47,8:48,9:[1,49]},o($Vm,[2,9],{12:50,14:51,42:[1,52]}),o($Vn,[2,17],{17:53,22:54,40:[1,55],41:[1,56]}),o($Vo,[2,14]),o($Vo,[2,15]),o($Vo,[2,16]),o($Vh,[2,21]),o($Vh,[2,22]),{27:58,35:57,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},{27:58,35:60,46:$V3,79:$Vp,80:$Vd,81:$Ve,82:$Vf},o($Vq,[2,33]),o($Vq,[2,34]),o([37,46,79,80,81,82],$Vi),o($Vj,[2,71]),o($Vj,[2,75]),o($Vj,[2,72]),{27:61,46:$V3,80:$Vd,81:$Ve,82:$Vf},{4:[1,62]},o($Vg,[2,5]),{4:[2,7],5:63,10:4,23:5,24:6,25:$V0,26:20,27:8,30:9,31:$V1,32:10,33:$V2,46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vg,[2,11],{13:64,15:65,43:[1,66]}),o($Vm,[2,10]),{26:67,56:$V9,76:$Va,77:$Vb,78:$Vc},{18:68,28:69,29:[1,70],46:[1,73],80:[1,71],81:[1,72],82:[1,74]},o($Vn,[2,18]),o($Vn,[2,35]),o($Vn,[2,36]),{23:76,26:20,27:42,30:9,31:$V1,32:10,36:75,39:[1,77],46:$V3,48:$V4,50:$V5,53:$V6,54:$V7,55:$V8,56:$V9,69:17,70:18,71:19,76:$Va,77:$Vb,78:$Vc,80:$Vd,81:$Ve,82:$Vf},o($Vr,[2,82]),o($Vr,[2,83]),{34:[1,78]},o($Vj,[2,73]),{1:[2,2]},o($Vg,[2,3]),o($Vg,[2,8]),o($Vg,[2,12]),{44:79,46:[1,80],47:[1,81]},o($Vm,[2,37]),o($Vo,[2,13]),o($Vo,[2,23]),o($Vo,[2,24]),o($Vo,[2,88]),o($Vo,[2,89]),o($Vo,[2,90]),o($Vo,[2,91]),{37:[1,82]},{37:[2,31]},{37:[2,32]},{37:[1,83]},{33:$Vs,45:84,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VB,[2,39]),o($VB,[2,40]),o($Vh,[2,29]),o($Vh,[2,30]),o($Vg,[2,38]),o($VC,[2,41]),o($VC,[2,42]),o($VC,[2,43]),o($VC,[2,44]),o($VC,[2,45]),o($VC,[2,46]),o($VC,[2,47]),o($VC,[2,48]),o($VC,[2,49]),{37:[2,55],57:96,59:98,61:97,62:$VD},{33:$Vs,45:102,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA,64:100,65:[2,63],68:101},{37:[1,103]},{37:[2,56]},o($VE,[2,52],{60:104}),{33:$Vs,45:105,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},{65:[1,106]},{65:[2,64]},o($VF,[2,60],{67:107}),o($VC,[2,50]),{9:[1,109],37:[2,54],58:108},o($VE,[2,57]),o($VC,[2,58]),{9:[1,111],65:[2,62],66:110},o($VE,[2,53]),{59:112,62:$VD},o($VF,[2,61]),{33:$Vs,45:113,48:$Vt,49:$Vu,50:$Vv,51:88,52:89,53:$Vw,54:$Vx,55:$Vy,56:$Vz,63:$VA},o($VE,[2,51]),o($VF,[2,59])],
defaultActions: {2:[2,1],62:[2,2],76:[2,31],77:[2,32],97:[2,56],101:[2,64]},
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
    ShapeMap parser in the Jison parser generator format.
  */

  const ShapeMap = __webpack_require__(8);

  // Common namespaces and entities
  const XSD = 'http://www.w3.org/2001/XMLSchema#',
      XSD_INTEGER  = XSD + 'integer',
      XSD_DECIMAL  = XSD + 'decimal',
      XSD_FLOAT   = XSD + 'float',
      XSD_DOUBLE   = XSD + 'double',
      XSD_BOOLEAN  = XSD + 'boolean';

  const numericDatatypes = [
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

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const numericFacets = ["mininclusive", "minexclusive",
                       "maxinclusive", "maxexclusive"];

  // Extends a base object with properties of other objects
  function extend (base) {
    if (!base) base = {};
    for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (let name in arg)
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
    const result = '', length = iri.length, i = -1, pathStart = -1, segmentStart = 0, next = '/';

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
    const ret = {  };
    for (let i = 0; i < arguments.length; i+= 2) {
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
  const blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser.valueExprDefns = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._schemaBase = Parser._schemaBasePath = Parser._schemaBaseRoot = Parser._schemaBaseIRIScheme = null;
  }
  let _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  const stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
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
    const at = string.lastIndexOf("@");
    const lang = string.substr(at);
    string = string.substr(0, at);
    const u = unescapeString(string, trimLength);
    return extend(u, obj("@language", lang.substr(1).toLowerCase()));
  }

  function error (msg) {
    Parser.reset();
    throw new Error(msg);
  }

  // Parse a prefix out of a PName or throw Error
  function parsePName (pname, prefixes) {
    const namePos = pname.indexOf(':');
    return expandPrefix(prefixes, pname.substr(0, namePos)) + unescapeText(pname.substr(namePos + 1), pnameEscapeReplacements);
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

  const EmptyObject = {  };
  const EmptyShape = { type: "Shape" };

  // <?INCLUDE from ShExUtil. Factor into `rdf-token` module? ?>
  /**
   * unescape numerics and allowed single-character escapes.
   * throws: if there are any unallowed sequences
   */
  function unescapeText (string, replacements) {
    const regex = /\\u([a-fA-F0-9]{4})|\\U([a-fA-F0-9]{8})|\\(.)/g;
    try {
      string = string.replace(regex, function (sequence, unicode4, unicode8, escapedChar) {
        let charCode;
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
          const replacement = replacements[escapedChar];
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
rules: [/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^/]|\\\/))*\*\/))/,/^(?:(appinfo[\u0020\u000A\u0009]+:))/,/^(?:("([^\u0022\u005C\u000A\u000D]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"[\u0020\u000A\u0009]*:))/,/^(?:([Ff][Oo][Cc][Uu][Ss]))/,/^(?:([Ss][Tt][Aa][Rr][Tt]))/,/^(?:(@[Ss][Tt][Aa][Rr][Tt]))/,/^(?:([Ss][Pp][Aa][Rr][Qq][Ll]))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(appinfo:))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:a\b)/,/^(?:,)/,/^(?:\{)/,/^(?:\})/,/^(?:@)/,/^(?:!)/,/^(?:\?)/,/^(?:\/)/,/^(?:\$)/,/^(?:\[)/,/^(?:\])/,/^(?:\^\^)/,/^(?:_\b)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:null\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
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
    var source = __webpack_require__(2).readFileSync(__webpack_require__(1).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(9)(module)))

/***/ }),
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/* ShExValidator - javascript module to validate a graph with respect to Shape Expressions
 *
 * Status: 1/2 tested, no known bugs.
 *
 * TODO:
 *   constraint violation reporting.
 */

const ShExValidatorCjsModule = (function () {
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

var ShExTerm = __webpack_require__(3);
let ShExVisitor = __webpack_require__(10);

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

function testRange (value, datatype, parseError) {
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
  var regexModule = this.options.regexModule || __webpack_require__(25);

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
  this.validate = function (db, point, label, tracker, seen) {
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
        var res = this.validate(db, pair.node, pair.shape, label, tracker); // really tracker and seen
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
      return this._validateShapeExpr(db, point, shape, Start, tracker, seen);

    if (seen === undefined)
      seen = {};
    var seenKey = point + "@" + (label === Start ? "_: -start-" : label);
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
    var ret = this._validateShapeExpr(db, point, shape, label, tracker, seen);
    tracker.exit(point, label, ret);
    delete seen[seenKey];
    if ("known" in this)
      this.known[seenKey] = ret;
    if ("startActs" in schema && outside) {
      ret.startActs = schema.startActs;
    }
    return ret;
  }

  this._validateShapeExpr = function (db, point, shapeExpr, shapeLabel, tracker, seen) {
    if (point === "")
      throw Error("validation needs a valid focus node");
    if (typeof shapeExpr === "string") { // ShapeRef
      return this._validateShapeExpr(db, point, index.shapeExprs[shapeExpr], shapeExpr, tracker, seen);
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
      return this._validateShape(db, point, shapeExpr, shapeLabel, tracker, seen);
    } else if (shapeExpr.type === "ShapeExternal") {
      return this.options.validateExtern(db, point, shapeLabel, tracker, seen);
    } else if (shapeExpr.type === "ShapeOr") {
      var errors = [];
      for (var i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        var nested = shapeExpr.shapeExprs[i];
        var sub = this._validateShapeExpr(db, point, nested, shapeLabel, tracker, seen);
        if ("errors" in sub)
          errors.push(sub);
        else
          return { type: "ShapeOrResults", solution: sub };
      }
      return { type: "ShapeOrFailure", errors: errors };
    } else if (shapeExpr.type === "ShapeNot") {
      var sub = this._validateShapeExpr(db, point, shapeExpr.shapeExpr, shapeLabel, tracker, seen);
      if ("errors" in sub)
          return { type: "ShapeNotResults", solution: sub };
        else
          return { type: "ShapeNotFailure", errors: sub };
    } else if (shapeExpr.type === "ShapeAnd") {
      var passes = [];
      var errors = [];
      for (var i = 0; i < shapeExpr.shapeExprs.length; ++i) {
        var nested = shapeExpr.shapeExprs[i];
        var sub = this._validateShapeExpr(db, point, nested, shapeLabel, tracker, seen);
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

  this._validateShape = function (db, point, shape, shapeLabel, tracker, seen) {
    const _ShExValidator = this;
    const valParms = { db, shapeLabel, tracker, seen };

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

    const fromDB  = db.getNeighborhood(point, shapeLabel, shape);
    const outgoingLength = fromDB.outgoing.length;
    const neighborhood = fromDB.outgoing.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ).concat(fromDB.incoming.sort(
      (l, r) => l.predicate.localeCompare(r.predicate) || sparqlOrder(l.object, r.object)
    ));

    const constraintList = this.indexTripleConstraints(shape.expression);
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
      const t2tcForThisShape = xp.get(); // [0,1,0,3] mapping from triple to constraint

      // Triples not mapped to triple constraints are not allowed in closed shapes.
      if (shape.closed) {
        const unexpectedTriples = neighborhood.slice(0, outgoingLength).filter((t, i) => {
          return t2tcForThisShape[i] === "NO_TRIPLE_CONSTRAINT" && // didn't match a constraint
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

      const results = regexEngine.match(db, point, constraintList, tc2t, t2tcForThisShape, neighborhood, this.semActHandler, null);
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
  this._errorsMatchingShapeExpr = function (value, valueExpr, valParms) {
    var _ShExValidator = this;
    if (typeof valueExpr === "string") { // ShapeRef
      return _ShExValidator.validate(valParms.db, value, valueExpr, valParms.tracker, valParms.seen);
    } else if (valueExpr.type === "NodeConstraint") {
      return this._errorsMatchingNodeConstraint(value, valueExpr, null);
    } else if (valueExpr.type === "Shape") {
      return _ShExValidator._validateShapeExpr(valParms.db, value, valueExpr, valParms.shapeLabel, valParms.tracker, valParms.seen)
    } else if (valueExpr.type === "ShapeOr") {
      var errors = [];
      for (var i = 0; i < valueExpr.shapeExprs.length; ++i) {
        var nested = valueExpr.shapeExprs[i];
        var sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms);
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
        var sub = _ShExValidator._errorsMatchingShapeExpr(value, nested, valParms);
        if ("errors" in sub)
          return { type: "ShapeAndFailure", errors: [sub] };
        else
          passes.push(sub);
      }
      return { type: "ShapeAndResults", solutions: passes };
    } else if (valueExpr.type === "ShapeNot") {
      var sub = _ShExValidator._errorsMatchingShapeExpr(value, valueExpr.shapeExpr, valParms);
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
  module.exports = ShExValidatorCjsModule;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

const EvalThreadedNErrCjsModule = (function () {
const ShExTerm = __webpack_require__(3);
const UNBOUNDED = -1;

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
                    "id" in expr ? { productionLabel: expr.id } : {},
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
  module.exports = EvalThreadedNErrCjsModule;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// **ShExLoader** return promise to load ShExC, ShExJ and N3 (Turtle) files.

const ShExApiCjsModule = function (config) {

  const ShExUtil = __webpack_require__(4);
  const ShExParser = __webpack_require__(12);

  const api = { load: LoadPromise, loadExtensions: LoadExtensions, GET: GET, loadShExImports_NotUsed: loadShExImports_NotUsed };
  return api
  
  async function GET (url, mediaType) {
    let m;
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
      const meta = addMeta(obj.url, mediaType)
      try {
        ShExUtil.merge(target, obj.schema, true, true)
        meta._prefixes = target._prefixes || {}
        meta.base = target._base
        loadImports(obj.schema)
        return [mediaType, obj.url]
      } catch (e) {
        const e2 = Error("error merging schema object " + obj.schema + ": " + e)
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
      const meta = {
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
    const returns = {
      schema: ShExUtil.emptySchema(),
      data: new config.rdfjs.Store(),
      schemaMeta: [],
      dataMeta: []
    }
    const promises = []
    const schemasSeen = shex.concat(json).map(p => {
      // might be already loaded objects with a url property.
      return typeof p === "object" ? p.url : p
    })
    let transform = null
    if (schemaOptions && "iriTransform" in schemaOptions) {
      transform = schemaOptions.iriTransform
      delete schemaOptions.iriTransform
    }

    const allLoaded = DynamicPromise()
    function loadImports (schema) {
      if (!("imports" in schema))
        return schema
      if (schemaOptions.keepImports) {
        return schema
      }
      const ret = Object.assign({}, schema)
      const imports = ret.imports
      delete ret.imports
      schema.imports.map(function (i) {
        return transform ? transform(i) : i
      }).filter(function (i) {
        return schemasSeen.indexOf(i) === -1
      }).map(i => {
        schemasSeen.push(i)
        allLoaded.add(api.GET(i).then(function (loaded) {
          const meta = {
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
    [].push.apply(promises, [
      loadList(shex, returns.schemaMeta, "text/shex",
               parseShExC, returns.schema, schemaOptions, loadImports),
      loadList(json, returns.schemaMeta, "text/json",
               parseShExJ, returns.schema, schemaOptions, loadImports),
      loadList(turtle, returns.dataMeta, "text/turtle",
               parseTurtle, returns.data, dataOptions),
      loadList(jsonld, returns.dataMeta, "application/ld+json",
               parseJSONLD, returns.data, dataOptions)
    ].reduce((acc, l) => acc.concat(l), [])) // .flat() in node > 8.x
    return allLoaded.all(promises).then(function (resources) {
      if (returns.schemaMeta.length > 0)
        ShExUtil.isWellDefined(returns.schema)
      return returns
    })
  }

  function DynamicPromise () {
    const promises = []
    const results = []
    let completedPromises = 0
    let resolveSelf, rejectSelf
    const self = new Promise(function (resolve, reject) {
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
    const parser = schemaOptions && "parser" in schemaOptions ?
        schemaOptions.parser :
        ShExParser.construct(url, {}, schemaOptions)
    try {
      const s = parser.parse(text)
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
    const schemasSeen = [from]
    const ret = { type: "Schema" }
    return api.GET(from).then(load999Imports).then(function () {
      ShExUtil.isWellDefined(ret)
      return ret
    })
    function load999Imports (loaded) {
      const schema = parser.parse(loaded.text)
      const imports = schema.imports
      delete schema.imports
      ShExUtil.merge(ret, schema, false, true)
      if (imports) {
        const rest = imports
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
      const s = ShExUtil.ShExJtoAS(JSON.parse(text))
      ShExUtil.merge(schema, s, true, true)
      meta.prefixes = schema._prefixes
      meta.base = schema.base
      loadImports(s)
      return Promise.resolve([mediaType, url])
    } catch (e) {
      const e2 = Error("error parsing JSON " + url + ": " + e)
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
      const p = new config.rdfjs.Parser({baseIRI: url, blankNodePrefix: "", format: "text/turtle"})
      const triples = p.parse(text)
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
      const struct = JSON.parse(text)
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
        list.concat(__webpack_require__(13).glob.sync(glob))
      , []).
      reduce(function (ret, path) {
        try {
	  const t = __webpack_require__(40)(path)
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
  module.exports = ShExApiCjsModule


/***/ }),
/* 27 */
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
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[7,18,19,20,21,23,26,190,212,213],$V1=[1,25],$V2=[1,29],$V3=[1,24],$V4=[1,28],$V5=[1,27],$V6=[2,12],$V7=[2,13],$V8=[2,14],$V9=[7,18,19,20,21,23,26,212,213],$Va=[1,35],$Vb=[1,38],$Vc=[1,37],$Vd=[2,18],$Ve=[2,19],$Vf=[19,21,65,67,81,92,93,94,97,98,99,100,108,109,110,111,112,113,115,121,123,158,186,212,216],$Vg=[2,57],$Vh=[1,47],$Vi=[1,48],$Vj=[1,49],$Vk=[19,21,35,39,65,67,75,76,77,81,92,93,94,97,98,99,100,108,109,110,111,112,113,115,121,123,158,186,212,216],$Vl=[2,237],$Vm=[2,238],$Vn=[1,51],$Vo=[1,54],$Vp=[1,53],$Vq=[2,259],$Vr=[2,260],$Vs=[2,263],$Vt=[2,261],$Vu=[2,262],$Vv=[2,15],$Vw=[2,17],$Vx=[19,21,65,67,75,76,77,81,92,93,94,97,98,99,100,108,109,110,111,112,113,115,121,123,158,186,212,216],$Vy=[1,72],$Vz=[2,26],$VA=[2,27],$VB=[2,28],$VC=[115,121,123,186,216],$VD=[2,135],$VE=[1,98],$VF=[1,106],$VG=[1,84],$VH=[1,89],$VI=[1,90],$VJ=[1,91],$VK=[1,97],$VL=[1,102],$VM=[1,103],$VN=[1,104],$VO=[1,107],$VP=[1,108],$VQ=[1,109],$VR=[1,110],$VS=[1,111],$VT=[1,112],$VU=[1,94],$VV=[1,105],$VW=[2,58],$VX=[1,114],$VY=[1,115],$VZ=[1,116],$V_=[1,122],$V$=[1,123],$V01=[47,49],$V11=[2,87],$V21=[2,88],$V31=[190,192],$V41=[1,138],$V51=[1,141],$V61=[1,140],$V71=[2,16],$V81=[7,18,19,20,21,23,26,47,212,213],$V91=[2,43],$Va1=[7,18,19,20,21,23,26,47,49,212,213],$Vb1=[2,50],$Vc1=[2,32],$Vd1=[2,65],$Ve1=[2,70],$Vf1=[2,67],$Vg1=[1,175],$Vh1=[1,176],$Vi1=[1,177],$Vj1=[1,180],$Vk1=[1,183],$Vl1=[2,73],$Vm1=[7,18,19,20,21,23,26,47,49,75,76,77,115,121,123,186,187,190,212,213,216],$Vn1=[2,91],$Vo1=[7,18,19,20,21,23,26,47,49,187,190,212,213],$Vp1=[7,18,19,20,21,23,26,47,49,92,93,94,97,98,99,100,187,190,212,213],$Vq1=[7,18,19,20,21,23,26,47,49,75,76,77,97,98,99,100,115,121,123,186,187,190,212,213,216],$Vr1=[2,104],$Vs1=[2,103],$Vt1=[7,18,19,20,21,23,26,47,49,97,98,99,100,108,109,110,111,112,113,187,190,212,213],$Vu1=[2,98],$Vv1=[2,97],$Vw1=[1,198],$Vx1=[1,200],$Vy1=[1,202],$Vz1=[1,201],$VA1=[2,108],$VB1=[2,109],$VC1=[2,110],$VD1=[2,106],$VE1=[2,236],$VF1=[19,21,67,77,96,104,105,160,182,201,202,203,204,205,206,207,208,209,210,212],$VG1=[2,182],$VH1=[7,18,19,20,21,23,26,47,49,108,109,110,111,112,113,187,190,212,213],$VI1=[2,100],$VJ1=[2,114],$VK1=[1,210],$VL1=[1,211],$VM1=[1,212],$VN1=[1,213],$VO1=[96,104,105,203,204,205,206],$VP1=[2,31],$VQ1=[2,35],$VR1=[2,38],$VS1=[2,41],$VT1=[2,89],$VU1=[2,228],$VV1=[2,229],$VW1=[2,230],$VX1=[1,261],$VY1=[1,266],$VZ1=[1,247],$V_1=[1,252],$V$1=[1,253],$V02=[1,254],$V12=[1,260],$V22=[1,257],$V32=[1,265],$V42=[1,268],$V52=[1,269],$V62=[1,270],$V72=[1,276],$V82=[1,277],$V92=[2,20],$Va2=[2,49],$Vb2=[2,56],$Vc2=[2,61],$Vd2=[2,64],$Ve2=[7,18,19,20,21,23,26,47,49,92,93,94,97,98,99,100,212,213],$Vf2=[2,83],$Vg2=[2,84],$Vh2=[2,29],$Vi2=[2,33],$Vj2=[2,69],$Vk2=[2,66],$Vl2=[2,71],$Vm2=[2,68],$Vn2=[7,18,19,20,21,23,26,47,49,97,98,99,100,187,190,212,213],$Vo2=[1,322],$Vp2=[1,330],$Vq2=[1,331],$Vr2=[1,332],$Vs2=[1,338],$Vt2=[1,339],$Vu2=[7,18,19,20,21,23,26,47,49,75,76,77,115,121,123,186,190,212,213,216],$Vv2=[2,226],$Vw2=[7,18,19,20,21,23,26,47,49,190,212,213],$Vx2=[1,347],$Vy2=[7,18,19,20,21,23,26,47,49,92,93,94,97,98,99,100,190,212,213],$Vz2=[2,102],$VA2=[2,107],$VB2=[2,94],$VC2=[1,357],$VD2=[2,95],$VE2=[2,96],$VF2=[2,101],$VG2=[19,21,65,156,157,196,212],$VH2=[2,163],$VI2=[2,137],$VJ2=[1,372],$VK2=[1,371],$VL2=[1,377],$VM2=[1,381],$VN2=[1,380],$VO2=[1,379],$VP2=[1,386],$VQ2=[1,389],$VR2=[1,385],$VS2=[1,388],$VT2=[19,21,212,213],$VU2=[1,400],$VV2=[1,406],$VW2=[1,395],$VX2=[1,399],$VY2=[1,409],$VZ2=[1,410],$V_2=[1,411],$V$2=[1,398],$V03=[1,412],$V13=[1,413],$V23=[1,418],$V33=[1,419],$V43=[1,420],$V53=[1,421],$V63=[1,414],$V73=[1,415],$V83=[1,416],$V93=[1,417],$Va3=[1,405],$Vb3=[2,113],$Vc3=[2,118],$Vd3=[2,120],$Ve3=[2,121],$Vf3=[2,122],$Vg3=[2,251],$Vh3=[2,252],$Vi3=[2,253],$Vj3=[2,254],$Vk3=[2,119],$Vl3=[2,30],$Vm3=[2,39],$Vn3=[2,36],$Vo3=[2,42],$Vp3=[2,37],$Vq3=[1,453],$Vr3=[2,40],$Vs3=[1,489],$Vt3=[1,522],$Vu3=[1,523],$Vv3=[1,524],$Vw3=[1,527],$Vx3=[2,44],$Vy3=[2,51],$Vz3=[2,60],$VA3=[2,62],$VB3=[2,72],$VC3=[47,49,66],$VD3=[1,587],$VE3=[47,49,66,75,76,77,115,121,123,186,187,190,216],$VF3=[47,49,66,187,190],$VG3=[47,49,66,92,93,94,97,98,99,100,187,190],$VH3=[47,49,66,75,76,77,97,98,99,100,115,121,123,186,187,190,216],$VI3=[47,49,66,97,98,99,100,108,109,110,111,112,113,187,190],$VJ3=[47,49,66,108,109,110,111,112,113,187,190],$VK3=[47,66],$VL3=[7,18,19,20,21,23,26,47,49,75,76,77,115,121,123,186,212,213,216],$VM3=[2,93],$VN3=[2,92],$VO3=[2,225],$VP3=[1,629],$VQ3=[1,632],$VR3=[1,628],$VS3=[1,631],$VT3=[2,90],$VU3=[2,130],$VV3=[2,105],$VW3=[2,99],$VX3=[2,111],$VY3=[2,112],$VZ3=[2,142],$V_3=[2,143],$V$3=[1,649],$V04=[2,144],$V14=[117,131],$V24=[2,149],$V34=[2,150],$V44=[2,152],$V54=[1,652],$V64=[1,653],$V74=[19,21,196,212],$V84=[2,171],$V94=[1,661],$Va4=[1,662],$Vb4=[117,131,136,137],$Vc4=[2,161],$Vd4=[19,21,115,121,123,186,212,213,216],$Ve4=[19,21,115,121,123,186,196,212,216],$Vf4=[2,234],$Vg4=[2,235],$Vh4=[2,181],$Vi4=[1,697],$Vj4=[19,21,67,77,96,104,105,160,175,182,201,202,203,204,205,206,207,208,209,210,212],$Vk4=[2,231],$Vl4=[2,232],$Vm4=[2,233],$Vn4=[2,244],$Vo4=[2,247],$Vp4=[2,241],$Vq4=[2,242],$Vr4=[2,243],$Vs4=[2,249],$Vt4=[2,250],$Vu4=[2,255],$Vv4=[2,256],$Vw4=[2,257],$Vx4=[2,258],$Vy4=[19,21,67,77,96,104,105,107,160,175,182,201,202,203,204,205,206,207,208,209,210,212],$Vz4=[1,729],$VA4=[1,776],$VB4=[1,831],$VC4=[1,841],$VD4=[1,877],$VE4=[1,913],$VF4=[2,63],$VG4=[47,49,66,97,98,99,100,187,190],$VH4=[47,49,66,75,76,77,115,121,123,186,190,216],$VI4=[47,49,66,190],$VJ4=[1,935],$VK4=[47,49,66,92,93,94,97,98,99,100,190],$VL4=[1,945],$VM4=[1,982],$VN4=[1,1018],$VO4=[2,227],$VP4=[1,1029],$VQ4=[1,1035],$VR4=[1,1034],$VS4=[19,21,96,104,105,201,202,203,204,205,206,207,208,209,210,212],$VT4=[1,1055],$VU4=[1,1061],$VV4=[1,1060],$VW4=[1,1081],$VX4=[1,1087],$VY4=[1,1086],$VZ4=[2,131],$V_4=[2,145],$V$4=[2,147],$V05=[2,151],$V15=[2,153],$V25=[2,154],$V35=[2,158],$V45=[2,160],$V55=[2,165],$V65=[2,166],$V75=[1,1113],$V85=[1,1116],$V95=[1,1112],$Va5=[1,1115],$Vb5=[1,1126],$Vc5=[2,221],$Vd5=[2,239],$Ve5=[2,240],$Vf5=[1,1130],$Vg5=[1,1132],$Vh5=[1,1134],$Vi5=[19,21,67,77,96,104,105,160,176,182,201,202,203,204,205,206,207,208,209,210,212],$Vj5=[1,1138],$Vk5=[1,1144],$Vl5=[1,1147],$Vm5=[1,1148],$Vn5=[1,1149],$Vo5=[1,1137],$Vp5=[1,1150],$Vq5=[1,1151],$Vr5=[1,1156],$Vs5=[1,1157],$Vt5=[1,1158],$Vu5=[1,1159],$Vv5=[1,1152],$Vw5=[1,1153],$Vx5=[1,1154],$Vy5=[1,1155],$Vz5=[1,1143],$VA5=[2,245],$VB5=[2,248],$VC5=[2,123],$VD5=[1,1189],$VE5=[1,1195],$VF5=[1,1227],$VG5=[1,1233],$VH5=[1,1292],$VI5=[1,1339],$VJ5=[47,49,66,75,76,77,115,121,123,186,216],$VK5=[47,49,66,92,93,94,97,98,99,100],$VL5=[1,1415],$VM5=[1,1462],$VN5=[2,222],$VO5=[2,223],$VP5=[2,224],$VQ5=[7,18,19,20,21,23,26,47,49,75,76,77,107,115,121,123,186,187,190,212,213,216],$VR5=[7,18,19,20,21,23,26,47,49,107,187,190,212,213],$VS5=[7,18,19,20,21,23,26,47,49,92,93,94,97,98,99,100,107,187,190,212,213],$VT5=[2,148],$VU5=[2,146],$VV5=[2,155],$VW5=[2,159],$VX5=[2,156],$VY5=[2,157],$VZ5=[19,21,39,65,67,75,76,77,81,92,93,94,97,98,99,100,108,109,110,111,112,113,115,121,123,158,186,212,216],$V_5=[1,1522],$V$5=[66,131],$V06=[1,1525],$V16=[1,1526],$V26=[66,131,136,137],$V36=[2,204],$V46=[1,1542],$V56=[19,21,67,77,96,104,105,160,175,176,182,201,202,203,204,205,206,207,208,209,210,212],$V66=[19,21,67,77,96,104,105,107,160,175,176,182,201,202,203,204,205,206,207,208,209,210,212],$V76=[2,246],$V86=[1,1580],$V96=[1,1646],$Va6=[1,1652],$Vb6=[1,1651],$Vc6=[1,1672],$Vd6=[1,1678],$Ve6=[1,1677],$Vf6=[1,1698],$Vg6=[1,1704],$Vh6=[1,1703],$Vi6=[1,1745],$Vj6=[1,1751],$Vk6=[1,1783],$Vl6=[1,1789],$Vm6=[1,1804],$Vn6=[1,1810],$Vo6=[1,1809],$Vp6=[1,1830],$Vq6=[1,1836],$Vr6=[1,1835],$Vs6=[1,1856],$Vt6=[1,1862],$Vu6=[1,1861],$Vv6=[1,1903],$Vw6=[1,1909],$Vx6=[1,1941],$Vy6=[1,1947],$Vz6=[117,131,136,137,187,190],$VA6=[2,168],$VB6=[1,1965],$VC6=[1,1966],$VD6=[1,1967],$VE6=[1,1968],$VF6=[117,131,136,137,152,153,154,155,187,190],$VG6=[2,34],$VH6=[47,117,131,136,137,152,153,154,155,187,190],$VI6=[2,47],$VJ6=[47,49,117,131,136,137,152,153,154,155,187,190],$VK6=[2,54],$VL6=[1,1997],$VM6=[1,2034],$VN6=[1,2067],$VO6=[1,2073],$VP6=[1,2072],$VQ6=[1,2093],$VR6=[1,2099],$VS6=[1,2098],$VT6=[1,2120],$VU6=[1,2126],$VV6=[1,2125],$VW6=[1,2147],$VX6=[1,2153],$VY6=[1,2152],$VZ6=[1,2173],$V_6=[1,2179],$V$6=[1,2178],$V07=[1,2200],$V17=[1,2206],$V27=[1,2205],$V37=[1,2275],$V47=[47,49,66,75,76,77,107,115,121,123,186,187,190,216],$V57=[47,49,66,107,187,190],$V67=[47,49,66,92,93,94,97,98,99,100,107,187,190],$V77=[1,2389],$V87=[2,169],$V97=[2,173],$Va7=[2,174],$Vb7=[2,175],$Vc7=[2,176],$Vd7=[2,45],$Ve7=[2,52],$Vf7=[2,59],$Vg7=[2,79],$Vh7=[2,75],$Vi7=[2,81],$Vj7=[1,2472],$Vk7=[2,78],$Vl7=[47,49,75,76,77,97,98,99,100,115,117,121,123,131,136,137,152,153,154,155,186,187,190,216],$Vm7=[47,49,75,76,77,115,117,121,123,131,136,137,152,153,154,155,186,187,190,216],$Vn7=[47,49,97,98,99,100,108,109,110,111,112,113,117,131,136,137,152,153,154,155,187,190],$Vo7=[47,49,92,93,94,97,98,99,100,117,131,136,137,152,153,154,155,187,190],$Vp7=[2,85],$Vq7=[2,86],$Vr7=[47,49,108,109,110,111,112,113,117,131,136,137,152,153,154,155,187,190],$Vs7=[1,2526],$Vt7=[1,2532],$Vu7=[1,2615],$Vv7=[1,2648],$Vw7=[1,2654],$Vx7=[1,2653],$Vy7=[1,2674],$Vz7=[1,2680],$VA7=[1,2679],$VB7=[1,2701],$VC7=[1,2707],$VD7=[1,2706],$VE7=[1,2728],$VF7=[1,2734],$VG7=[1,2733],$VH7=[1,2754],$VI7=[1,2760],$VJ7=[1,2759],$VK7=[1,2781],$VL7=[1,2787],$VM7=[1,2786],$VN7=[1,2828],$VO7=[1,2861],$VP7=[1,2867],$VQ7=[1,2866],$VR7=[1,2887],$VS7=[1,2893],$VT7=[1,2892],$VU7=[1,2914],$VV7=[1,2920],$VW7=[1,2919],$VX7=[1,2941],$VY7=[1,2947],$VZ7=[1,2946],$V_7=[1,2967],$V$7=[1,2973],$V08=[1,2972],$V18=[1,2994],$V28=[1,3000],$V38=[1,2999],$V48=[117,131,136,137,190],$V58=[1,3019],$V68=[2,48],$V78=[2,55],$V88=[2,74],$V98=[2,80],$Va8=[2,76],$Vb8=[2,82],$Vc8=[47,49,97,98,99,100,117,131,136,137,152,153,154,155,187,190],$Vd8=[1,3043],$Ve8=[66,131,136,137,187,190],$Vf8=[1,3052],$Vg8=[1,3053],$Vh8=[1,3054],$Vi8=[1,3055],$Vj8=[66,131,136,137,152,153,154,155,187,190],$Vk8=[47,66,131,136,137,152,153,154,155,187,190],$Vl8=[47,49,66,131,136,137,152,153,154,155,187,190],$Vm8=[1,3084],$Vn8=[1,3153],$Vo8=[1,3159],$Vp8=[1,3239],$Vq8=[1,3245],$Vr8=[2,170],$Vs8=[2,46],$Vt8=[1,3333],$Vu8=[2,53],$Vv8=[1,3366],$Vw8=[2,77],$Vx8=[2,167],$Vy8=[1,3411],$Vz8=[47,49,66,75,76,77,97,98,99,100,115,121,123,131,136,137,152,153,154,155,186,187,190,216],$VA8=[47,49,66,75,76,77,115,121,123,131,136,137,152,153,154,155,186,187,190,216],$VB8=[47,49,66,97,98,99,100,108,109,110,111,112,113,131,136,137,152,153,154,155,187,190],$VC8=[47,49,66,92,93,94,97,98,99,100,131,136,137,152,153,154,155,187,190],$VD8=[47,49,66,108,109,110,111,112,113,131,136,137,152,153,154,155,187,190],$VE8=[1,3442],$VF8=[1,3448],$VG8=[1,3447],$VH8=[1,3468],$VI8=[1,3474],$VJ8=[1,3473],$VK8=[1,3495],$VL8=[1,3501],$VM8=[1,3500],$VN8=[1,3599],$VO8=[1,3605],$VP8=[1,3604],$VQ8=[1,3640],$VR8=[1,3682],$VS8=[66,131,136,137,190],$VT8=[1,3712],$VU8=[47,49,66,97,98,99,100,131,136,137,152,153,154,155,187,190],$VV8=[1,3736],$VW8=[1,3772],$VX8=[1,3778],$VY8=[1,3777],$VZ8=[1,3798],$V_8=[1,3804],$V$8=[1,3803],$V09=[1,3825],$V19=[1,3831],$V29=[1,3830],$V39=[1,3852],$V49=[1,3858],$V59=[1,3857],$V69=[1,3878],$V79=[1,3884],$V89=[1,3883],$V99=[1,3905],$Va9=[1,3911],$Vb9=[1,3910],$Vc9=[107,117,131,136,137,187,190],$Vd9=[1,3953],$Ve9=[1,3977],$Vf9=[1,4019],$Vg9=[1,4052],$Vh9=[1,4157],$Vi9=[1,4200],$Vj9=[1,4206],$Vk9=[1,4205],$Vl9=[1,4241],$Vm9=[1,4283],$Vn9=[1,4339],$Vo9=[66,107,131,136,137,187,190],$Vp9=[1,4394],$Vq9=[1,4418],$Vr9=[1,4448],$Vs9=[1,4494],$Vt9=[1,4566],$Vu9=[1,4615];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"shexDoc":3,"initParser":4,"Qdirective_E_Star":5,"Q_O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C_E_Opt":6,"EOF":7,"directive":8,"O_QnotStartAction_E_Or_QstartActions_E_C":9,"notStartAction":10,"startActions":11,"Qstatement_E_Star":12,"statement":13,"O_QnotStartAction_E_Or_QstartActions_E_S_Qstatement_E_Star_C":14,"baseDecl":15,"prefixDecl":16,"importDecl":17,"IT_BASE":18,"IRIREF":19,"IT_PREFIX":20,"PNAME_NS":21,"iri":22,"IT_IMPORT":23,"start":24,"shapeExprDecl":25,"IT_start":26,"=":27,"shapeAnd":28,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Star":29,"QcodeDecl_E_Plus":30,"codeDecl":31,"shapeExprLabel":32,"O_QshapeExpression_E_Or_QIT_EXTERNAL_E_C":33,"shapeExpression":34,"IT_EXTERNAL":35,"QIT_NOT_E_Opt":36,"shapeAtomNoRef":37,"QshapeOr_E_Opt":38,"IT_NOT":39,"shapeRef":40,"shapeOr":41,"inlineShapeExpression":42,"inlineShapeOr":43,"Q_O_QIT_OR_E_S_QshapeAnd_E_C_E_Plus":44,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Plus":45,"O_QIT_OR_E_S_QshapeAnd_E_C":46,"IT_OR":47,"O_QIT_AND_E_S_QshapeNot_E_C":48,"IT_AND":49,"shapeNot":50,"inlineShapeAnd":51,"Q_O_QIT_OR_E_S_QinlineShapeAnd_E_C_E_Star":52,"O_QIT_OR_E_S_QinlineShapeAnd_E_C":53,"Q_O_QIT_AND_E_S_QshapeNot_E_C_E_Star":54,"inlineShapeNot":55,"Q_O_QIT_AND_E_S_QinlineShapeNot_E_C_E_Star":56,"O_QIT_AND_E_S_QinlineShapeNot_E_C":57,"shapeAtom":58,"inlineShapeAtom":59,"nonLitNodeConstraint":60,"QshapeOrRef_E_Opt":61,"litNodeConstraint":62,"shapeOrRef":63,"QnonLitNodeConstraint_E_Opt":64,"(":65,")":66,".":67,"shapeDefinition":68,"nonLitInlineNodeConstraint":69,"QinlineShapeOrRef_E_Opt":70,"litInlineNodeConstraint":71,"inlineShapeOrRef":72,"QnonLitInlineNodeConstraint_E_Opt":73,"inlineShapeDefinition":74,"ATPNAME_LN":75,"ATPNAME_NS":76,"@":77,"Qannotation_E_Star":78,"semanticActions":79,"annotation":80,"IT_LITERAL":81,"QxsFacet_E_Star":82,"datatype":83,"valueSet":84,"QnumericFacet_E_Plus":85,"xsFacet":86,"numericFacet":87,"nonLiteralKind":88,"QstringFacet_E_Star":89,"QstringFacet_E_Plus":90,"stringFacet":91,"IT_IRI":92,"IT_BNODE":93,"IT_NONLITERAL":94,"stringLength":95,"INTEGER":96,"REGEXP":97,"IT_LENGTH":98,"IT_MINLENGTH":99,"IT_MAXLENGTH":100,"numericRange":101,"rawNumeric":102,"numericLength":103,"DECIMAL":104,"DOUBLE":105,"string":106,"^^":107,"IT_MININCLUSIVE":108,"IT_MINEXCLUSIVE":109,"IT_MAXINCLUSIVE":110,"IT_MAXEXCLUSIVE":111,"IT_TOTALDIGITS":112,"IT_FRACTIONDIGITS":113,"Q_O_Qextension_E_Or_QextraPropertySet_E_Or_QIT_CLOSED_E_C_E_Star":114,"{":115,"QtripleExpression_E_Opt":116,"}":117,"O_Qextension_E_Or_QextraPropertySet_E_Or_QIT_CLOSED_E_C":118,"extension":119,"extraPropertySet":120,"IT_CLOSED":121,"tripleExpression":122,"IT_EXTRA":123,"Qpredicate_E_Plus":124,"predicate":125,"oneOfTripleExpr":126,"groupTripleExpr":127,"multiElementOneOf":128,"Q_O_QGT_PIPE_E_S_QgroupTripleExpr_E_C_E_Plus":129,"O_QGT_PIPE_E_S_QgroupTripleExpr_E_C":130,"|":131,"singleElementGroup":132,"multiElementGroup":133,"unaryTripleExpr":134,"QGT_SEMI_E_Opt":135,",":136,";":137,"Q_O_QGT_SEMI_E_S_QunaryTripleExpr_E_C_E_Plus":138,"O_QGT_SEMI_E_S_QunaryTripleExpr_E_C":139,"Q_O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C_E_Opt":140,"O_QtripleConstraint_E_Or_QbracketedTripleExpr_E_C":141,"include":142,"O_QGT_DOLLAR_E_S_QtripleExprLabel_E_C":143,"$":144,"tripleExprLabel":145,"tripleConstraint":146,"bracketedTripleExpr":147,"Qcardinality_E_Opt":148,"cardinality":149,"QsenseFlags_E_Opt":150,"senseFlags":151,"*":152,"+":153,"?":154,"REPEAT_RANGE":155,"^":156,"!":157,"[":158,"QvalueSetValue_E_Star":159,"]":160,"valueSetValue":161,"iriRange":162,"literalRange":163,"languageRange":164,"O_QiriExclusion_E_Plus_Or_QliteralExclusion_E_Plus_Or_QlanguageExclusion_E_Plus_C":165,"QiriExclusion_E_Plus":166,"iriExclusion":167,"QliteralExclusion_E_Plus":168,"literalExclusion":169,"QlanguageExclusion_E_Plus":170,"languageExclusion":171,"Q_O_QGT_TILDE_E_S_QiriExclusion_E_Star_C_E_Opt":172,"QiriExclusion_E_Star":173,"O_QGT_TILDE_E_S_QiriExclusion_E_Star_C":174,"~":175,"-":176,"QGT_TILDE_E_Opt":177,"literal":178,"Q_O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C_E_Opt":179,"QliteralExclusion_E_Star":180,"O_QGT_TILDE_E_S_QliteralExclusion_E_Star_C":181,"LANGTAG":182,"Q_O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C_E_Opt":183,"O_QGT_TILDE_E_S_QlanguageExclusion_E_Star_C":184,"QlanguageExclusion_E_Star":185,"&":186,"//":187,"O_Qiri_E_Or_Qliteral_E_C":188,"QcodeDecl_E_Star":189,"%":190,"O_QCODE_E_Or_QGT_MODULO_E_C":191,"CODE":192,"rdfLiteral":193,"numericLiteral":194,"booleanLiteral":195,"a":196,"blankNode":197,"langString":198,"Q_O_QGT_DTYPE_E_S_Qdatatype_E_C_E_Opt":199,"O_QGT_DTYPE_E_S_Qdatatype_E_C":200,"IT_true":201,"IT_false":202,"STRING_LITERAL1":203,"STRING_LITERAL_LONG1":204,"STRING_LITERAL2":205,"STRING_LITERAL_LONG2":206,"LANG_STRING_LITERAL1":207,"LANG_STRING_LITERAL_LONG1":208,"LANG_STRING_LITERAL2":209,"LANG_STRING_LITERAL_LONG2":210,"prefixedName":211,"PNAME_LN":212,"BLANK_NODE_LABEL":213,"O_QIT_EXTENDS_E_Or_QGT_AMP_E_C":214,"QshapeExprLabel_E_Plus":215,"IT_EXTENDS":216,"$accept":0,"$end":1},
terminals_: {2:"error",7:"EOF",18:"IT_BASE",19:"IRIREF",20:"IT_PREFIX",21:"PNAME_NS",23:"IT_IMPORT",26:"IT_start",27:"=",35:"IT_EXTERNAL",39:"IT_NOT",47:"IT_OR",49:"IT_AND",65:"(",66:")",67:".",75:"ATPNAME_LN",76:"ATPNAME_NS",77:"@",81:"IT_LITERAL",92:"IT_IRI",93:"IT_BNODE",94:"IT_NONLITERAL",96:"INTEGER",97:"REGEXP",98:"IT_LENGTH",99:"IT_MINLENGTH",100:"IT_MAXLENGTH",104:"DECIMAL",105:"DOUBLE",107:"^^",108:"IT_MININCLUSIVE",109:"IT_MINEXCLUSIVE",110:"IT_MAXINCLUSIVE",111:"IT_MAXEXCLUSIVE",112:"IT_TOTALDIGITS",113:"IT_FRACTIONDIGITS",115:"{",117:"}",121:"IT_CLOSED",123:"IT_EXTRA",131:"|",136:",",137:";",144:"$",152:"*",153:"+",154:"?",155:"REPEAT_RANGE",156:"^",157:"!",158:"[",160:"]",175:"~",176:"-",182:"LANGTAG",186:"&",187:"//",190:"%",192:"CODE",196:"a",201:"IT_true",202:"IT_false",203:"STRING_LITERAL1",204:"STRING_LITERAL_LONG1",205:"STRING_LITERAL2",206:"STRING_LITERAL_LONG2",207:"LANG_STRING_LITERAL1",208:"LANG_STRING_LITERAL_LONG1",209:"LANG_STRING_LITERAL2",210:"LANG_STRING_LITERAL_LONG2",212:"PNAME_LN",213:"BLANK_NODE_LABEL",216:"IT_EXTENDS"},
productions_: [0,[3,4],[4,0],[5,0],[5,2],[9,1],[9,1],[12,0],[12,2],[14,2],[6,0],[6,1],[8,1],[8,1],[8,1],[15,2],[16,3],[17,2],[10,1],[10,1],[24,4],[11,1],[30,1],[30,2],[13,1],[13,1],[25,2],[33,1],[33,1],[34,3],[34,3],[34,2],[38,0],[38,1],[42,1],[41,1],[41,2],[46,2],[44,1],[44,2],[48,2],[45,1],[45,2],[29,0],[29,2],[43,2],[53,2],[52,0],[52,2],[28,2],[54,0],[54,2],[51,2],[57,2],[56,0],[56,2],[50,2],[36,0],[36,1],[55,2],[58,2],[58,1],[58,2],[58,3],[58,1],[61,0],[61,1],[64,0],[64,1],[37,2],[37,1],[37,2],[37,3],[37,1],[59,2],[59,1],[59,2],[59,3],[59,1],[70,0],[70,1],[73,0],[73,1],[63,1],[63,1],[72,1],[72,1],[40,1],[40,1],[40,2],[62,3],[78,0],[78,2],[60,3],[71,2],[71,2],[71,2],[71,1],[82,0],[82,2],[85,1],[85,2],[69,2],[69,1],[89,0],[89,2],[90,1],[90,2],[88,1],[88,1],[88,1],[86,1],[86,1],[91,2],[91,1],[95,1],[95,1],[95,1],[87,2],[87,2],[102,1],[102,1],[102,1],[102,3],[101,1],[101,1],[101,1],[101,1],[103,1],[103,1],[68,3],[74,4],[118,1],[118,1],[118,1],[114,0],[114,2],[116,0],[116,1],[120,2],[124,1],[124,2],[122,1],[126,1],[126,1],[128,2],[130,2],[129,1],[129,2],[127,1],[127,1],[132,2],[135,0],[135,1],[135,1],[133,3],[139,2],[139,2],[138,1],[138,2],[134,2],[134,1],[143,2],[140,0],[140,1],[141,1],[141,1],[147,6],[148,0],[148,1],[146,6],[150,0],[150,1],[149,1],[149,1],[149,1],[149,1],[151,1],[151,2],[151,1],[151,2],[84,3],[159,0],[159,2],[161,1],[161,1],[161,1],[161,2],[166,1],[166,2],[168,1],[168,2],[170,1],[170,2],[165,1],[165,1],[165,1],[162,2],[173,0],[173,2],[174,2],[172,0],[172,1],[167,3],[177,0],[177,1],[163,2],[180,0],[180,2],[181,2],[179,0],[179,1],[169,3],[164,2],[164,2],[185,0],[185,2],[184,2],[183,0],[183,1],[171,3],[142,2],[80,3],[188,1],[188,1],[79,1],[189,0],[189,2],[31,3],[191,1],[191,1],[178,1],[178,1],[178,1],[125,1],[125,1],[83,1],[32,1],[32,1],[145,1],[145,1],[194,1],[194,1],[194,1],[193,1],[193,2],[200,2],[199,0],[199,1],[195,1],[195,1],[106,1],[106,1],[106,1],[106,1],[198,1],[198,1],[198,1],[198,1],[22,1],[22,1],[211,1],[211,1],[197,1],[119,2],[214,1],[214,1],[215,1],[215,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        let imports = Object.keys(Parser._imports).length ? { imports: Parser._imports } : {}
        const startObj = Parser.start ? { start: Parser.start } : {};
        const startActs = Parser.startActs ? { startActs: Parser.startActs } : {};
        let shapes = Parser.shapes ? { shapes: Object.values(Parser.shapes) } : {};
        const shexj = Object.assign(
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
        addShape($$[$0-1],  $$[$0], yy);
      
break;
case 27:

        this.$ = nonest($$[$0]);
      
break;
case 28:
this.$ = { type: "ShapeExternal" };
break;
case 29:

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
case 30:

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
case 31:

        $$[$0].needsAtom.unshift(nonest($$[$0-1]));
        delete $$[$0].needsAtom;
        this.$ = $$[$0]; // { type: "ShapeOr", "shapeExprs": [$$[$0-1]].concat($$[$0]) };
      
break;
case 32: case 230: case 247:
this.$ = null;
break;
case 33: case 37: case 40: case 46: case 53: case 187: case 246:
this.$ = $$[$0];
break;
case 35:
 // returns a ShapeOr
        const disjuncts = $$[$0].map(nonest);
        this.$ = { type: "ShapeOr", shapeExprs: disjuncts, needsAtom: disjuncts }; // t: @@
      
break;
case 36:
 // returns a ShapeAnd
        // $$[$0-1] could have implicit conjuncts and explicit nested ANDs (will have .nested: true)
        $$[$0-1].filter(c => c.type === "ShapeAnd").length === $$[$0-1].length
        const and = {
          type: "ShapeAnd",
          shapeExprs: $$[$0-1].reduce(
            (acc, elt) =>
              acc.concat(elt.type === 'ShapeAnd' && !elt.nested ? elt.shapeExprs : nonest(elt)), []
          )
        };
        this.$ = $$[$0].length > 0 ? { type: "ShapeOr", shapeExprs: [and].concat($$[$0].map(nonest)) } : and; // t: @@
        this.$.needsAtom = and.shapeExprs;
      
break;
case 38: case 41:
this.$ = [$$[$0]];
break;
case 39: case 42: case 44: case 48: case 51: case 55:
this.$ = $$[$0-1].concat($$[$0]);
break;
case 43: case 47: case 50: case 54:
this.$ = [];
break;
case 45:
this.$ = shapeJunction("ShapeOr", $$[$0-1], $$[$0]);
break;
case 49: case 52:
this.$ = shapeJunction("ShapeAnd", $$[$0-1], $$[$0]) // t: @@;
break;
case 56:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t:@@ */ : $$[$0];
break;
case 57:
this.$ = false;
break;
case 58:
this.$ = true;
break;
case 59:
this.$ = $$[$0-1] ? { type: "ShapeNot", "shapeExpr": nonest($$[$0]) } /* t: 1NOTNOTdot, 1NOTNOTIRI, 1NOTNOTvs */ : $$[$0];
break;
case 60: case 69: case 74:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1];
break;
case 62:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t: 1dotRef1 */ : $$[$0-1] // t:@@;
break;
case 63: case 72: case 77:
this.$ = Object.assign($$[$0-1], {nested: true}) // t: 1val1vsMinusiri3;
break;
case 64: case 73: case 78:
this.$ = EmptyShape // t: 1dot;
break;
case 71:
this.$ = $$[$0] ? shapeJunction("ShapeAnd", $$[$0-1], [$$[$0]]) /* t:@@ */ : $$[$0-1]	 // t: 1dotRef1 -- use _QnonLitNodeConstraint_E_Opt like below?;
break;
case 76:
this.$ = $$[$0] ? { type: "ShapeAnd", shapeExprs: [ extend({ type: "NodeConstraint" }, $$[$0-1]), $$[$0] ] } : $$[$0-1] // t: !! look to 1dotRef1;
break;
case 87:
 // t: 1dotRefLNex@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        const namePos = $$[$0].indexOf(':');
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, namePos), yy) + $$[$0].substr(namePos + 1), yy); // ShapeRef
      
break;
case 88:
 // t: 1dotRefNS1@@
        $$[$0] = $$[$0].substr(1, $$[$0].length-1);
        this.$ = addSourceMap(expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy), yy); // ShapeRef
      
break;
case 89:
this.$ = addSourceMap($$[$0], yy) // ShapeRef // t: 1dotRef1, 1dotRefSpaceLNex, 1dotRefSpaceNS1;
break;
case 90: case 93:
 // t: !!
        this.$ = $$[$0-2]
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !!
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !!
      
break;
case 91:
this.$ = [] // t: 1dot, 1dotAnnot3;
break;
case 92:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotAnnot3;
break;
case 94:
this.$ = extend({ type: "NodeConstraint", nodeKind: "literal" }, $$[$0]) // t: 1literalPattern;
break;
case 95:

        if (numericDatatypes.indexOf($$[$0-1]) === -1)
          numericFacets.forEach(function (facet) {
            if (facet in $$[$0])
              error(new Error("Parse error: facet " + facet + " not allowed for unknown datatype " + $$[$0-1]), yy);
          });
        this.$ = extend({ type: "NodeConstraint", datatype: $$[$0-1] }, $$[$0]) // t: 1datatype
      
break;
case 96:
this.$ = { type: "NodeConstraint", values: $$[$0-1] } // t: 1val1IRIREF;
break;
case 97:
this.$ = extend({ type: "NodeConstraint"}, $$[$0]);
break;
case 98:
this.$ = {} // t: 1literalPattern;
break;
case 99:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: 1literalLength
      
break;
case 101: case 107:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0]) // t: !! look to 1literalLength
      
break;
case 102:
this.$ = extend({ type: "NodeConstraint" }, $$[$0-1], $$[$0] ? $$[$0] : {}) // t: 1iriPattern;
break;
case 103:
this.$ = extend({ type: "NodeConstraint" }, $$[$0]) // t: @@;
break;
case 104:
this.$ = {};
break;
case 105:

        if (Object.keys($$[$0-1]).indexOf(Object.keys($$[$0])[0]) !== -1) {
          error(new Error("Parse error: facet "+Object.keys($$[$0])[0]+" defined multiple times"), yy);
        }
        this.$ = extend($$[$0-1], $$[$0])
      
break;
case 108:
this.$ = { nodeKind: "iri" } // t: 1iriPattern;
break;
case 109:
this.$ = { nodeKind: "bnode" } // t: 1bnodeLength;
break;
case 110:
this.$ = { nodeKind: "nonliteral" } // t: 1nonliteralLength;
break;
case 113:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalLength;
break;
case 114:
this.$ = unescapeRegexp($$[$0]) // t: 1literalPattern;
break;
case 115:
this.$ = "length" // t: 1literalLength;
break;
case 116:
this.$ = "minlength" // t: 1literalMinlength;
break;
case 117:
this.$ = "maxlength" // t: 1literalMaxlength;
break;
case 118:
this.$ = keyValObject($$[$0-1], $$[$0]) // t: 1literalMininclusive;
break;
case 119:
this.$ = keyValObject($$[$0-1], parseInt($$[$0], 10)) // t: 1literalTotaldigits;
break;
case 120:
this.$ = parseInt($$[$0], 10);
break;
case 121: case 122:
this.$ = parseFloat($$[$0]);
break;
case 123:
 // ## deprecated
        if ($$[$0] === XSD_DECIMAL || $$[$0] === XSD_FLOAT || $$[$0] === XSD_DOUBLE)
          this.$ = parseFloat($$[$0-2].value);
        else if (numericDatatypes.indexOf($$[$0]) !== -1)
          this.$ = parseInt($$[$0-2].value)
        else
          error(new Error("Parse error: numeric range facet expected numeric datatype instead of " + $$[$0]), yy);
      
break;
case 124:
this.$ = "mininclusive" // t: 1literalMininclusive;
break;
case 125:
this.$ = "minexclusive" // t: 1literalMinexclusive;
break;
case 126:
this.$ = "maxinclusive" // t: 1literalMaxinclusive;
break;
case 127:
this.$ = "maxexclusive" // t: 1literalMaxexclusive;
break;
case 128:
this.$ = "totaldigits" // t: 1literalTotaldigits;
break;
case 129:
this.$ = "fractiondigits" // t: 1literalFractiondigits;
break;
case 130:
 // t: 1dotInherit3
        this.$ = $$[$0-2] === EmptyShape ? { type: "Shape" } : $$[$0-2]; // t: 0
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: !! look to open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = $$[$0].semActs; } // t: !! look to open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 131:
 // t: 1dotInherit3
        const exprObj = $$[$0-1] ? { expression: $$[$0-1] } : EmptyObject; // t: 0, 0Inherit1
        this.$ = (exprObj === EmptyObject && $$[$0-3] === EmptyObject) ?
	  EmptyShape :
	  extend({ type: "Shape" }, exprObj, $$[$0-3]);
      
break;
case 132:
this.$ = [ "inherit", $$[$0] ] // t: 1dotInherit1;
break;
case 133:
this.$ = [ "extra", $$[$0] ] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 134:
this.$ = [ "closed", true ] // t: 1dotClosed;
break;
case 135:
this.$ = EmptyObject;
break;
case 136:

        if ($$[$0-1] === EmptyObject)
          $$[$0-1] = {};
        if ($$[$0][0] === "closed")
          $$[$0-1]["closed"] = true; // t: 1dotClosed
        else if ($$[$0][0] in $$[$0-1])
          $$[$0-1][$$[$0][0]] = unionAll($$[$0-1][$$[$0][0]], $$[$0][1]); // t: 1dotInherit3, 3groupdot3Extra, 3groupdotExtra3
        else
          $$[$0-1][$$[$0][0]] = $$[$0][1]; // t: 1dotInherit1
        this.$ = $$[$0-1];
      
break;
case 139:
this.$ = $$[$0] // t: 1dotExtra1, 3groupdot3Extra;
break;
case 140:
this.$ = [$$[$0]] // t: 1dotExtra1, 3groupdot3Extra, 3groupdotExtra3;
break;
case 141:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 3groupdotExtra3;
break;
case 145:
this.$ = { type: "OneOf", expressions: unionAll([$$[$0-1]], $$[$0]) } // t: 2oneOfdot;
break;
case 146:
this.$ = $$[$0] // t: 2oneOfdot;
break;
case 147:
this.$ = [$$[$0]] // t: 2oneOfdot;
break;
case 148:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2oneOfdot;
break;
case 151:
this.$ = $$[$0-1];
break;
case 155:
this.$ = { type: "EachOf", expressions: unionAll([$$[$0-2]], $$[$0-1]) } // t: 2groupOfdot;
break;
case 156:
this.$ = $$[$0] // ## deprecated // t: 2groupOfdot;
break;
case 157:
this.$ = $$[$0] // t: 2groupOfdot;
break;
case 158:
this.$ = [$$[$0]] // t: 2groupOfdot;
break;
case 159:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 2groupOfdot;
break;
case 160:

        if ($$[$0-1]) {
          this.$ = extend({ id: $$[$0-1] }, $$[$0]);
          addProduction($$[$0-1],  this.$, yy);
        } else {
          this.$ = $$[$0]
        }
      
break;
case 162:
this.$ = addSourceMap($$[$0], yy);
break;
case 167:

        // t: open1dotOr1dot, !openopen1dotcloseCode1closeCode2
        this.$ = $$[$0-4];
        // Copy all of the new attributes into the encapsulated shape.
        if ("min" in $$[$0-2]) { this.$.min = $$[$0-2].min; } // t: open3groupdotclosecard23Annot3Code2
        if ("max" in $$[$0-2]) { this.$.max = $$[$0-2].max; } // t: open3groupdotclosecard23Annot3Code2
        if ($$[$0-1].length) { this.$.annotations = $$[$0-1]; } // t: open3groupdotcloseAnnot3, open3groupdotclosecard23Annot3Code2
        if ($$[$0]) { this.$.semActs = "semActs" in $$[$0-4] ? $$[$0-4].semActs.concat($$[$0].semActs) : $$[$0].semActs; } // t: open3groupdotcloseCode1, !open1dotOr1dot
      
break;
case 168:
this.$ = {} // t: 1dot;
break;
case 170:

        // $$[$0]: t: 1dotCode1
	if ($$[$0-3] !== EmptyShape && false) {
	  const t = blank();
	  addShape(t, $$[$0-3], yy);
	  $$[$0-3] = t; // ShapeRef
	}
        // %6: t: 1inversedotCode1
        this.$ = extend({ type: "TripleConstraint" }, $$[$0-5] ? $$[$0-5] : {}, { predicate: $$[$0-4] }, ($$[$0-3] === EmptyShape ? {} : { valueExpr: $$[$0-3] }), $$[$0-2], $$[$0]); // t: 1dot // t: 1inversedot, 1negatedinversedot
        if ($$[$0-1].length)
          this.$["annotations"] = $$[$0-1]; // t: 1dotAnnot3 // t: 1inversedotAnnot3
      
break;
case 173:
this.$ = { min:0, max:UNBOUNDED } // t: 1cardStar;
break;
case 174:
this.$ = { min:1, max:UNBOUNDED } // t: 1cardPlus;
break;
case 175:
this.$ = { min:0, max:1 } // t: 1cardOpt;
break;
case 176:

        $$[$0] = $$[$0].substr(1, $$[$0].length-2);
        const nums = $$[$0].match(/(\d+)/g);
        this.$ = { min: parseInt(nums[0], 10) }; // t: 1card2blank, 1card2Star
        if (nums.length === 2)
            this.$["max"] = parseInt(nums[1], 10); // t: 1card23
        else if ($$[$0].indexOf(',') === -1) // t: 1card2
            this.$["max"] = parseInt(nums[0], 10);
        else
            this.$["max"] = UNBOUNDED;
      
break;
case 177:
this.$ = { inverse: true } // t: 1inversedot;
break;
case 178:
this.$ = { inverse: true, negated: true } // t: 1negatedinversedot;
break;
case 179:
this.$ = { negated: true } // t: 1negateddot;
break;
case 180:
this.$ = { inverse: true, negated: true } // t: 1inversenegateddot;
break;
case 181:
this.$ = $$[$0-1] // t: 1val1IRIREF;
break;
case 182:
this.$ = [] // t: 1val1IRIREF;
break;
case 183:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1IRIREF;
break;
case 188:
this.$ = [$$[$0]] // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 189:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusiri3, 1val1dotMinusiriStem3;
break;
case 190:
this.$ = [$$[$0]] // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 191:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinusliteral3, 1val1dotMinusliteralStem3;
break;
case 192:
this.$ = [$$[$0]] // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 193:
this.$ = appendTo($$[$0-1], $$[$0]) // t:1val1dotMinuslanguage3, 1val1dotMinuslanguageStem3;
break;
case 194:
this.$ = { type: "IriStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 195:
this.$ = { type: "LiteralStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 196:
this.$ = { type: "LanguageStemRange", stem: { type: "Wildcard" }, exclusions: $$[$0] };
break;
case 197:

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
case 198:
this.$ = [] // t: 1val1iriStem, 1val1iriStemMinusiri3;
break;
case 199:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1iriStemMinusiri3;
break;
case 200:
this.$ = $$[$0] // t: 1val1iriStemMinusiri3;
break;
case 203:
this.$ = $$[$0] ? { type: "IriStem", stem: $$[$0-1] } /* t: 1val1iriStemMinusiriStem3 */ : $$[$0-1] // t: 1val1iriStemMinusiri3;
break;
case 206:

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
case 207:
this.$ = [] // t: 1val1literalStem, 1val1literalStemMinusliteral3;
break;
case 208:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1literalStemMinusliteral3;
break;
case 209:
this.$ = $$[$0] // t: 1val1literalStemMinusliteral3;
break;
case 212:
this.$ = $$[$0] ? { type: "LiteralStem", stem: $$[$0-1].value } /* t: 1val1literalStemMinusliteral3 */ : $$[$0-1].value // t: 1val1literalStemMinusliteralStem3;
break;
case 213:

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
case 214:

        this.$ = {  // t: @@
          type: $$[$0].length ? "LanguageStemRange" : "LanguageStem",
          stem: ""
        };
        if ($$[$0].length)
          this.$["exclusions"] = $$[$0]; // t: @@
      
break;
case 215:
this.$ = [] // t: 1val1languageStem, 1val1languageStemMinuslanguage3;
break;
case 216:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1val1languageStemMinuslanguage3;
break;
case 217:
this.$ = $$[$0] // t: 1val1languageStemMinuslanguage3;
break;
case 220:
this.$ = $$[$0] ? { type: "LanguageStem", stem: $$[$0-1] } /* t: 1val1languageStemMinuslanguageStem3 */ : $$[$0-1] // t: 1val1languageStemMinuslanguage3;
break;
case 221:
this.$ = addSourceMap($$[$0], yy) // Inclusion // t: 2groupInclude1;
break;
case 222:
this.$ = { type: "Annotation", predicate: $$[$0-1], object: $$[$0] } // t: 1dotAnnotIRIREF;
break;
case 225:
this.$ = $$[$0].length ? { semActs: $$[$0] } : null // t: 1dotCode1/2oneOfDot;
break;
case 226:
this.$ = [] // t: 1dot, 1dotCode1;
break;
case 227:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotCode1;
break;
case 228:
this.$ = $$[$0] ? unescapeSemanticAction($$[$0-1], $$[$0]) /* t: 1dotCode1 */ : { type: "SemAct", name: $$[$0-1] } // t: 1dotNoCode1;
break;
case 235:
this.$ = RDF_TYPE // t: 1AvalA;
break;
case 241:
this.$ = createLiteral($$[$0], XSD_INTEGER) // t: 1val1INTEGER;
break;
case 242:
this.$ = createLiteral($$[$0], XSD_DECIMAL) // t: 1val1DECIMAL;
break;
case 243:
this.$ = createLiteral($$[$0], XSD_DOUBLE) // t: 1val1DOUBLE;
break;
case 245:
this.$ = $$[$0] ? extend($$[$0-1], { type: $$[$0] }) : $$[$0-1] // t: 1val1Datatype;
break;
case 249:
this.$ = { value: "true", type: XSD_BOOLEAN } // t: 1val1true;
break;
case 250:
this.$ = { value: "false", type: XSD_BOOLEAN } // t: 1val1false;
break;
case 251:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL2;
break;
case 252:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL1;
break;
case 253:
this.$ = unescapeString($$[$0], 1)	// t: 1val1STRING_LITERAL_LONG2;
break;
case 254:
this.$ = unescapeString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG1;
break;
case 255:
this.$ = unescapeLangString($$[$0], 1)	// t: @@;
break;
case 256:
this.$ = unescapeLangString($$[$0], 3)	// t: @@;
break;
case 257:
this.$ = unescapeLangString($$[$0], 1)	// t: 1val1LANGTAG;
break;
case 258:
this.$ = unescapeLangString($$[$0], 3)	// t: 1val1STRING_LITERAL_LONG2_with_LANGTAG;
break;
case 259:
 // t: 1dot
        const unesc = ShExUtil.unescapeText($$[$0].slice(1,-1), {});
        this.$ = Parser._base === null || absoluteIRI.test(unesc) ? unesc : _resolveIRI(unesc)
      
break;
case 261:
 // t:1dotPNex, 1dotPNdefault, ShExParser-test.js/with pre-defined prefixes
        const namePos1 = $$[$0].indexOf(':');
        this.$ = expandPrefix($$[$0].substr(0, namePos1), yy) + ShExUtil.unescapeText($$[$0].substr(namePos1 + 1), pnameEscapeReplacements);
      
break;
case 262:
 // t: 1dotNS2, 1dotNSdefault, ShExParser-test.js/PNAME_NS with pre-defined prefixes
        this.$ = expandPrefix($$[$0].substr(0, $$[$0].length - 1), yy);
      
break;
case 264:
this.$ = $$[$0] // t: 1dotInherit1, 1dot3Inherit, 1dotInherit3;
break;
case 267:
this.$ = [$$[$0]] // t: 1dotInherit1, 1dot3Inherit, 1dotInherit3;
break;
case 268:
this.$ = appendTo($$[$0-1], $$[$0]) // t: 1dotInherit3;
break;
}
},
table: [o($V0,[2,2],{3:1,4:2}),{1:[3]},o($V0,[2,3],{5:3}),{6:4,7:[2,10],8:5,9:10,10:14,11:15,14:6,15:7,16:8,17:9,18:[1,11],19:$V1,20:[1,12],21:$V2,22:22,23:[1,13],24:16,25:17,26:[1,19],30:18,31:21,32:20,190:$V3,197:23,211:26,212:$V4,213:$V5},{7:[1,30]},o($V0,[2,4]),{7:[2,11]},o($V0,$V6),o($V0,$V7),o($V0,$V8),o($V9,[2,7],{12:31}),{19:[1,32]},{21:[1,33]},{19:$Va,21:$Vb,22:34,211:36,212:$Vc},o($V9,[2,5]),o($V9,[2,6]),o($V9,$Vd),o($V9,$Ve),o($V9,[2,21],{31:39,190:$V3}),{27:[1,40]},o($Vf,$Vg,{33:41,34:42,36:44,40:46,35:[1,43],39:[1,45],75:$Vh,76:$Vi,77:$Vj}),o($V0,[2,22]),o($Vk,$Vl),o($Vk,$Vm),{19:$Vn,21:$Vo,22:50,211:52,212:$Vp},o($Vk,$Vq),o($Vk,$Vr),o($Vk,$Vs),o($Vk,$Vt),o($Vk,$Vu),{1:[2,1]},{7:[2,9],8:56,10:57,13:55,15:58,16:59,17:60,18:[1,63],19:$V1,20:[1,64],21:$V2,22:22,23:[1,65],24:61,25:62,26:[1,66],32:67,197:23,211:26,212:$V4,213:$V5},o($V0,$Vv),{19:$Va,21:$Vb,22:68,211:36,212:$Vc},o($V0,$Vw),o($V0,$Vq),o($V0,$Vr),o($V0,$Vt),o($V0,$Vu),o($V0,[2,23]),o($Vx,$Vg,{28:69,50:70,36:71,39:$Vy}),o($V9,$Vz),o($V9,$VA),o($V9,$VB),o($VC,$VD,{37:73,60:74,62:75,68:76,69:79,71:80,74:81,88:82,90:83,83:85,84:86,85:87,114:88,91:92,22:93,87:95,95:96,211:99,101:100,103:101,19:$VE,21:$VF,65:[1,77],67:[1,78],81:$VG,92:$VH,93:$VI,94:$VJ,97:$VK,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:$VU,212:$VV}),o($Vf,$VW,{40:113,75:$VX,76:$VY,77:$VZ}),{41:117,44:118,45:119,46:120,47:$V_,48:121,49:$V$},o($V01,$V11),o($V01,$V21),{19:[1,127],21:[1,131],22:125,32:124,197:126,211:128,212:[1,130],213:[1,129]},{190:[1,134],191:132,192:[1,133]},o($V31,$Vq),o($V31,$Vr),o($V31,$Vt),o($V31,$Vu),o($V9,[2,8]),o($V9,[2,24]),o($V9,[2,25]),o($V9,$V6),o($V9,$V7),o($V9,$V8),o($V9,$Vd),o($V9,$Ve),{19:[1,135]},{21:[1,136]},{19:$V41,21:$V51,22:137,211:139,212:$V61},{27:[1,142]},o($Vf,$Vg,{33:143,34:144,36:146,40:148,35:[1,145],39:[1,147],75:$Vh,76:$Vi,77:$Vj}),o($V0,$V71),o($V81,$V91,{29:149}),o($Va1,$Vb1,{54:150}),o($VC,$VD,{69:79,71:80,74:81,88:82,90:83,83:85,84:86,85:87,114:88,91:92,22:93,87:95,95:96,211:99,101:100,103:101,58:151,60:152,62:153,63:154,68:157,40:158,19:$VE,21:$VF,65:[1,155],67:[1,156],75:[1,159],76:[1,160],77:[1,161],81:$VG,92:$VH,93:$VI,94:$VJ,97:$VK,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:$VU,212:$VV}),o($Vx,$VW),o($V9,$Vc1,{44:118,45:119,46:120,48:121,38:162,41:163,47:$V_,49:$V$}),o($Va1,$Vd1,{61:164,63:165,68:166,40:167,74:168,114:169,75:$VX,76:$VY,77:$VZ,115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Ve1),o($Va1,$Vf1,{64:170,60:171,69:172,88:173,90:174,91:178,95:179,92:$Vg1,93:$Vh1,94:$Vi1,97:$Vj1,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{34:181,36:182,40:184,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vl1),o($Vm1,$Vn1,{78:185}),o($Vo1,$Vn1,{78:186}),o($Vp1,$Vn1,{78:187}),o($Vq1,$Vr1,{89:188}),o($Vm1,$Vs1,{95:96,91:189,97:$VK,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:190}),o($Vt1,$Vu1,{82:191}),o($Vt1,$Vu1,{82:192}),o($Vo1,$Vv1,{101:100,103:101,87:193,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),{115:[1,194],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:203}),o($VH1,$VI1),{96:[1,204]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,206],102:205,104:[1,207],105:[1,208],106:209,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,214]},{96:[2,115]},{96:[2,116]},{96:[2,117]},o($Vt1,$Vt),o($Vt1,$Vu),o($VO1,[2,124]),o($VO1,[2,125]),o($VO1,[2,126]),o($VO1,[2,127]),{96:[2,128]},{96:[2,129]},o($V9,$Vc1,{44:118,45:119,46:120,48:121,41:163,38:215,47:$V_,49:$V$}),o($Va1,$V11),o($Va1,$V21),{19:[1,219],21:[1,223],22:217,32:216,197:218,211:220,212:[1,222],213:[1,221]},o($V9,$VP1),o($V9,$VQ1,{46:224,47:$V_}),o($V81,$V91,{29:225,48:226,49:$V$}),o($V81,$VR1),o($Va1,$VS1),o($Vx,$Vg,{28:227,50:228,36:229,39:$Vy}),o($Vx,$Vg,{50:230,36:231,39:$Vy}),o($V01,$VT1),o($V01,$Vl),o($V01,$Vm),o($V01,$Vq),o($V01,$Vr),o($V01,$Vs),o($V01,$Vt),o($V01,$Vu),o($V0,$VU1),o($V0,$VV1),o($V0,$VW1),o($V9,$Vv),{19:$V41,21:$V51,22:232,211:139,212:$V61},o($V9,$Vw),o($V9,$Vq),o($V9,$Vr),o($V9,$Vt),o($V9,$Vu),o($Vx,$Vg,{28:233,50:234,36:235,39:$Vy}),o($V9,$Vz),o($V9,$VA),o($V9,$VB),o($VC,$VD,{37:236,60:237,62:238,68:239,69:242,71:243,74:244,88:245,90:246,83:248,84:249,85:250,114:251,91:255,22:256,87:258,95:259,211:262,101:263,103:264,19:$VX1,21:$VY1,65:[1,240],67:[1,241],81:$VZ1,92:$V_1,93:$V$1,94:$V02,97:$V12,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:$V22,212:$V32}),o($Vf,$VW,{40:267,75:$V42,76:$V52,77:$V62}),{41:271,44:272,45:273,46:274,47:$V72,48:275,49:$V82},o($V9,$V92,{46:278,47:$V_}),o($V81,$Va2,{48:279,49:$V$}),o($Va1,$Vb2),o($Va1,$Vd1,{63:165,68:166,40:167,74:168,114:169,61:280,75:$VX,76:$VY,77:$VZ,115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{60:171,69:172,88:173,90:174,91:178,95:179,64:281,92:$Vg1,93:$Vh1,94:$Vi1,97:$Vj1,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:282,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Ve2,$V11),o($Ve2,$V21),{19:[1,286],21:[1,290],22:284,32:283,197:285,211:287,212:[1,289],213:[1,288]},o($V9,$Vh2),o($V9,$Vi2),o($Va1,$Vj2),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:291}),{115:[1,292],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$Vl2),o($Va1,$Vm2),o($Vo1,$Vn1,{78:293}),o($Vn2,$Vr1,{89:294}),o($Vo1,$Vs1,{95:179,91:295,97:$Vj1,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,296]},o($Vn2,$VJ1),{66:[1,297]},o($VC,$VD,{37:298,60:299,62:300,68:301,69:304,71:305,74:306,88:307,90:308,83:310,84:311,85:312,114:313,91:317,22:318,87:320,95:321,211:324,101:325,103:326,19:[1,323],21:[1,328],65:[1,302],67:[1,303],81:[1,309],92:[1,314],93:[1,315],94:[1,316],97:$Vo2,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,319],212:[1,327]}),o($Vf,$VW,{40:329,75:$Vp2,76:$Vq2,77:$Vr2}),{41:333,44:334,45:335,46:336,47:$Vs2,48:337,49:$Vt2},o($Vu2,$Vv2,{79:340,80:341,189:342,187:[1,343]}),o($Vw2,$Vv2,{79:344,80:345,189:346,187:$Vx2}),o($Vy2,$Vv2,{79:348,80:349,189:350,187:[1,351]}),o($Vm1,$Vz2,{95:96,91:352,97:$VK,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:353,91:354,87:355,95:356,101:358,103:359,97:$VC2,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:353,91:354,87:355,95:356,101:358,103:359,97:$VC2,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:353,91:354,87:355,95:356,101:358,103:359,97:$VC2,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($VG2,$VH2,{116:360,122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,117:$VI2,144:$VJ2,186:$VK2}),o($VC,[2,136]),o($VC,[2,132]),o($VC,[2,133]),o($VC,[2,134]),{19:$VL2,21:$VM2,22:375,32:374,197:376,211:378,212:$VN2,213:$VO2,215:373},{19:$VP2,21:$VQ2,22:384,124:382,125:383,196:$VR2,211:387,212:$VS2},o($VT2,[2,265]),o($VT2,[2,266]),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,390],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,422]},{107:$Vg3},{107:$Vh3},{107:$Vi3},{107:$Vj3},o($VH1,$Vk3),o($V9,$Vl3),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($V81,$Vm3),o($V9,$Vn3,{46:278,47:$V_}),o($Va1,$Vo3),o($V81,$Vp3),o($Va1,$Vb1,{54:423}),o($VC,$VD,{58:424,60:425,62:426,63:427,69:430,71:431,68:432,40:433,88:434,90:435,83:437,84:438,85:439,74:440,91:447,22:448,87:450,114:451,95:452,211:455,101:456,103:457,19:[1,454],21:[1,459],65:[1,428],67:[1,429],75:[1,441],76:[1,442],77:[1,443],81:[1,436],92:[1,444],93:[1,445],94:[1,446],97:$Vq3,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,449],212:[1,458]}),o($Va1,$Vr3),o($VC,$VD,{58:460,60:461,62:462,63:463,69:466,71:467,68:468,40:469,88:470,90:471,83:473,84:474,85:475,74:476,91:483,22:484,87:486,114:487,95:488,211:491,101:492,103:493,19:[1,490],21:[1,495],65:[1,464],67:[1,465],75:[1,477],76:[1,478],77:[1,479],81:[1,472],92:[1,480],93:[1,481],94:[1,482],97:$Vs3,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,485],212:[1,494]}),o($V9,$V71),o($V81,$V91,{29:496}),o($Va1,$Vb1,{54:497}),o($VC,$VD,{69:242,71:243,74:244,88:245,90:246,83:248,84:249,85:250,114:251,91:255,22:256,87:258,95:259,211:262,101:263,103:264,58:498,60:499,62:500,63:501,68:504,40:505,19:$VX1,21:$VY1,65:[1,502],67:[1,503],75:[1,506],76:[1,507],77:[1,508],81:$VZ1,92:$V_1,93:$V$1,94:$V02,97:$V12,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:$V22,212:$V32}),o($V9,$Vc1,{44:272,45:273,46:274,48:275,38:509,41:510,47:$V72,49:$V82}),o($Va1,$Vd1,{61:511,63:512,68:513,40:514,74:515,114:516,75:$V42,76:$V52,77:$V62,115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Ve1),o($Va1,$Vf1,{64:517,60:518,69:519,88:520,90:521,91:525,95:526,92:$Vt3,93:$Vu3,94:$Vv3,97:$Vw3,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:528,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vl1),o($Vm1,$Vn1,{78:529}),o($Vo1,$Vn1,{78:530}),o($Vp1,$Vn1,{78:531}),o($Vq1,$Vr1,{89:532}),o($Vm1,$Vs1,{95:259,91:533,97:$V12,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:534}),o($Vt1,$Vu1,{82:535}),o($Vt1,$Vu1,{82:536}),o($Vo1,$Vv1,{101:263,103:264,87:537,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),{115:[1,538],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:539}),o($VH1,$VI1),{96:[1,540]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,542],102:541,104:[1,543],105:[1,544],106:545,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,546]},o($Vt1,$Vt),o($Vt1,$Vu),o($V9,$Vc1,{44:272,45:273,46:274,48:275,41:510,38:547,47:$V72,49:$V82}),o($Va1,$V11),o($Va1,$V21),{19:[1,551],21:[1,555],22:549,32:548,197:550,211:552,212:[1,554],213:[1,553]},o($V9,$VP1),o($V9,$VQ1,{46:556,47:$V72}),o($V81,$V91,{29:557,48:558,49:$V82}),o($V81,$VR1),o($Va1,$VS1),o($Vx,$Vg,{28:559,50:560,36:561,39:$Vy}),o($Vx,$Vg,{50:562,36:563,39:$Vy}),o($V81,$Vx3),o($Va1,$Vy3),o($Va1,$Vz3),o($Va1,$VA3),{66:[1,564]},o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),o($Vw2,$Vv2,{80:345,189:346,79:565,187:$Vx2}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:566,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:345,189:346,79:567,187:$Vx2}),o($Vo1,$Vz2,{95:179,91:568,97:$Vj1,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VB3),{38:569,41:570,44:334,45:335,46:336,47:$Vs2,48:337,49:$Vt2,66:$Vc1},o($VC,$VD,{61:571,63:572,68:573,40:574,74:575,114:576,47:$Vd1,49:$Vd1,66:$Vd1,75:$Vp2,76:$Vq2,77:$Vr2}),o($VC3,$Ve1),o($VC3,$Vf1,{64:577,60:578,69:579,88:580,90:581,91:585,95:586,92:[1,582],93:[1,583],94:[1,584],97:$VD3,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:588,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VC3,$Vl1),o($VE3,$Vn1,{78:589}),o($VF3,$Vn1,{78:590}),o($VG3,$Vn1,{78:591}),o($VH3,$Vr1,{89:592}),o($VE3,$Vs1,{95:321,91:593,97:$Vo2,98:$VL,99:$VM,100:$VN}),o($VI3,$Vu1,{82:594}),o($VI3,$Vu1,{82:595}),o($VI3,$Vu1,{82:596}),o($VF3,$Vv1,{101:325,103:326,87:597,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),{115:[1,598],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VH3,$VA1),o($VH3,$VB1),o($VH3,$VC1),o($VH3,$VD1),o($VI3,$VE1),o($VF1,$VG1,{159:599}),o($VJ3,$VI1),{96:[1,600]},o($VH3,$VJ1),o($VI3,$Vq),o($VI3,$Vr),{96:[1,602],102:601,104:[1,603],105:[1,604],106:605,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,606]},o($VI3,$Vt),o($VI3,$Vu),{38:607,41:570,44:334,45:335,46:336,47:$Vs2,48:337,49:$Vt2,66:$Vc1},o($VC3,$V11),o($VC3,$V21),{19:[1,611],21:[1,615],22:609,32:608,197:610,211:612,212:[1,614],213:[1,613]},{66:$VP1},{46:616,47:$Vs2,66:$VQ1},o($VK3,$V91,{29:617,48:618,49:$Vt2}),o($VK3,$VR1),o($VC3,$VS1),o($Vx,$Vg,{28:619,50:620,36:621,39:$Vy}),o($Vx,$Vg,{50:622,36:623,39:$Vy}),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:624,190:[1,625]}),{19:$VP3,21:$VQ3,22:627,125:626,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:633,190:[1,634]}),{19:$VP3,21:$VQ3,22:627,125:635,196:$VR3,211:630,212:$VS3},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:636,190:[1,637]}),{19:$VP3,21:$VQ3,22:627,125:638,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,639]},o($Vt1,$VJ1),{96:[1,641],102:640,104:[1,642],105:[1,643],106:644,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,645]},{117:[1,646]},{117:[2,138]},{117:$VZ3},{117:$V_3,129:647,130:648,131:$V$3},{117:$V04},o($V14,$V24),o($V14,$V34),o($V14,$V44,{135:650,138:651,139:654,136:$V54,137:$V64}),o($V74,$V84,{141:655,146:656,147:657,150:658,151:660,65:[1,659],156:$V94,157:$Va4}),o($Vb4,$Vc4),o($VG2,[2,164]),{19:[1,666],21:[1,670],22:664,145:663,197:665,211:667,212:[1,669],213:[1,668]},{19:[1,674],21:[1,678],22:672,145:671,197:673,211:675,212:[1,677],213:[1,676]},o($VC,[2,264],{22:375,197:376,211:378,32:679,19:$VL2,21:$VM2,212:$VN2,213:$VO2}),o($Vd4,[2,267]),o($Vd4,$Vl),o($Vd4,$Vm),o($Vd4,$Vq),o($Vd4,$Vr),o($Vd4,$Vs),o($Vd4,$Vt),o($Vd4,$Vu),o($VC,[2,139],{22:384,211:387,125:680,19:$VP2,21:$VQ2,196:$VR2,212:$VS2}),o($Ve4,[2,140]),o($Ve4,$Vf4),o($Ve4,$Vg4),o($Ve4,$Vq),o($Ve4,$Vr),o($Ve4,$Vt),o($Ve4,$Vu),o($Vt1,$Vh4),o($VF1,[2,183]),o($VF1,[2,184]),o($VF1,[2,185]),o($VF1,[2,186]),{165:681,166:682,167:685,168:683,169:686,170:684,171:687,176:[1,688]},o($VF1,[2,201],{172:689,174:690,175:[1,691]}),o($VF1,[2,210],{179:692,181:693,175:[1,694]}),o($VF1,[2,218],{183:695,184:696,175:$Vi4}),{175:$Vi4,184:698},o($Vj4,$Vq),o($Vj4,$Vr),o($Vj4,$Vk4),o($Vj4,$Vl4),o($Vj4,$Vm4),o($Vj4,$Vt),o($Vj4,$Vu),o($Vj4,$Vn4),o($Vj4,$Vo4,{199:699,200:700,107:[1,701]}),o($Vj4,$Vp4),o($Vj4,$Vq4),o($Vj4,$Vr4),o($Vj4,$Vs4),o($Vj4,$Vt4),o($Vj4,$Vu4),o($Vj4,$Vv4),o($Vj4,$Vw4),o($Vj4,$Vx4),o($Vy4,$Vg3),o($Vy4,$Vh3),o($Vy4,$Vi3),o($Vy4,$Vj3),{19:[1,704],21:[1,707],22:703,83:702,211:705,212:[1,706]},o($V81,$Va2,{48:708,49:[1,709]}),o($Va1,$Vb2),o($Va1,$Vd1,{61:710,63:711,68:712,40:713,74:714,114:718,75:[1,715],76:[1,716],77:[1,717],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:719,60:720,69:721,88:722,90:723,91:727,95:728,92:[1,724],93:[1,725],94:[1,726],97:$Vz4,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:730,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:731}),o($Vo1,$Vn1,{78:732}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:733}),o($Vm1,$Vs1,{95:452,91:734,97:$Vq3,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:735}),o($Vt1,$Vu1,{82:736}),o($Vt1,$Vu1,{82:737}),o($Vo1,$Vv1,{101:456,103:457,87:738,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:739}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,743],21:[1,747],22:741,32:740,197:742,211:744,212:[1,746],213:[1,745]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:748}),o($VH1,$VI1),{115:[1,749],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,750]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,752],102:751,104:[1,753],105:[1,754],106:755,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,756]},o($Vt1,$Vt),o($Vt1,$Vu),o($Va1,$Vb2),o($Va1,$Vd1,{61:757,63:758,68:759,40:760,74:761,114:765,75:[1,762],76:[1,763],77:[1,764],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:766,60:767,69:768,88:769,90:770,91:774,95:775,92:[1,771],93:[1,772],94:[1,773],97:$VA4,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:777,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:778}),o($Vo1,$Vn1,{78:779}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:780}),o($Vm1,$Vs1,{95:488,91:781,97:$Vs3,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:782}),o($Vt1,$Vu1,{82:783}),o($Vt1,$Vu1,{82:784}),o($Vo1,$Vv1,{101:492,103:493,87:785,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:786}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,790],21:[1,794],22:788,32:787,197:789,211:791,212:[1,793],213:[1,792]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:795}),o($VH1,$VI1),{115:[1,796],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,797]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,799],102:798,104:[1,800],105:[1,801],106:802,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,803]},o($Vt1,$Vt),o($Vt1,$Vu),o($V9,$V92,{46:804,47:$V72}),o($V81,$Va2,{48:805,49:$V82}),o($Va1,$Vb2),o($Va1,$Vd1,{63:512,68:513,40:514,74:515,114:516,61:806,75:$V42,76:$V52,77:$V62,115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{60:518,69:519,88:520,90:521,91:525,95:526,64:807,92:$Vt3,93:$Vu3,94:$Vv3,97:$Vw3,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:808,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Ve2,$V11),o($Ve2,$V21),{19:[1,812],21:[1,816],22:810,32:809,197:811,211:813,212:[1,815],213:[1,814]},o($V9,$Vh2),o($V9,$Vi2),o($Va1,$Vj2),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:817}),{115:[1,818],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$Vl2),o($Va1,$Vm2),o($Vo1,$Vn1,{78:819}),o($Vn2,$Vr1,{89:820}),o($Vo1,$Vs1,{95:526,91:821,97:$Vw3,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,822]},o($Vn2,$VJ1),{66:[1,823]},o($Vu2,$Vv2,{79:824,80:825,189:826,187:[1,827]}),o($Vw2,$Vv2,{79:828,80:829,189:830,187:$VB4}),o($Vy2,$Vv2,{79:832,80:833,189:834,187:[1,835]}),o($Vm1,$Vz2,{95:259,91:836,97:$V12,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:837,91:838,87:839,95:840,101:842,103:843,97:$VC4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:837,91:838,87:839,95:840,101:842,103:843,97:$VC4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:837,91:838,87:839,95:840,101:842,103:843,97:$VC4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:844,117:$VI2,144:$VJ2,186:$VK2}),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,845],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,846]},o($VH1,$Vk3),o($V9,$Vl3),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($V81,$Vm3),o($V9,$Vn3,{46:804,47:$V72}),o($Va1,$Vo3),o($V81,$Vp3),o($Va1,$Vb1,{54:847}),o($VC,$VD,{58:848,60:849,62:850,63:851,69:854,71:855,68:856,40:857,88:858,90:859,83:861,84:862,85:863,74:864,91:871,22:872,87:874,114:875,95:876,211:879,101:880,103:881,19:[1,878],21:[1,883],65:[1,852],67:[1,853],75:[1,865],76:[1,866],77:[1,867],81:[1,860],92:[1,868],93:[1,869],94:[1,870],97:$VD4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,873],212:[1,882]}),o($Va1,$Vr3),o($VC,$VD,{58:884,60:885,62:886,63:887,69:890,71:891,68:892,40:893,88:894,90:895,83:897,84:898,85:899,74:900,91:907,22:908,87:910,114:911,95:912,211:915,101:916,103:917,19:[1,914],21:[1,919],65:[1,888],67:[1,889],75:[1,901],76:[1,902],77:[1,903],81:[1,896],92:[1,904],93:[1,905],94:[1,906],97:$VE4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,909],212:[1,918]}),o($Va1,$VF4),o($Va1,$VU3),{117:[1,920]},o($Va1,$VM3),o($Vn2,$VV3),{66:$Vh2},{66:$Vi2},o($VC3,$Vj2),o($VC3,$Vk2),o($VC3,$Vf2),o($VC3,$Vg2),o($VF3,$Vn1,{78:921}),{115:[1,922],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC3,$Vl2),o($VC3,$Vm2),o($VF3,$Vn1,{78:923}),o($VG4,$Vr1,{89:924}),o($VF3,$Vs1,{95:586,91:925,97:$VD3,98:$VL,99:$VM,100:$VN}),o($VG4,$VA1),o($VG4,$VB1),o($VG4,$VC1),o($VG4,$VD1),{96:[1,926]},o($VG4,$VJ1),{66:[1,927]},o($VH4,$Vv2,{79:928,80:929,189:930,187:[1,931]}),o($VI4,$Vv2,{79:932,80:933,189:934,187:$VJ4}),o($VK4,$Vv2,{79:936,80:937,189:938,187:[1,939]}),o($VE3,$Vz2,{95:321,91:940,97:$Vo2,98:$VL,99:$VM,100:$VN}),o($VH3,$VA2),o($VF3,$VB2,{86:941,91:942,87:943,95:944,101:946,103:947,97:$VL4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VD2,{86:941,91:942,87:943,95:944,101:946,103:947,97:$VL4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VE2,{86:941,91:942,87:943,95:944,101:946,103:947,97:$VL4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ3,$VF2),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:948,117:$VI2,144:$VJ2,186:$VK2}),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,949],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VH3,$Vb3),o($VJ3,$Vc3),o($VJ3,$Vd3),o($VJ3,$Ve3),o($VJ3,$Vf3),{107:[1,950]},o($VJ3,$Vk3),{66:$Vl3},o($VC3,$VT1),o($VC3,$Vl),o($VC3,$Vm),o($VC3,$Vq),o($VC3,$Vr),o($VC3,$Vs),o($VC3,$Vt),o($VC3,$Vu),o($VK3,$Vm3),{46:951,47:$Vs2,66:$Vn3},o($VC3,$Vo3),o($VK3,$Vp3),o($VC3,$Vb1,{54:952}),o($VC,$VD,{58:953,60:954,62:955,63:956,69:959,71:960,68:961,40:962,88:963,90:964,83:966,84:967,85:968,74:969,91:976,22:977,87:979,114:980,95:981,211:984,101:985,103:986,19:[1,983],21:[1,988],65:[1,957],67:[1,958],75:[1,970],76:[1,971],77:[1,972],81:[1,965],92:[1,973],93:[1,974],94:[1,975],97:$VM4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,978],212:[1,987]}),o($VC3,$Vr3),o($VC,$VD,{58:989,60:990,62:991,63:992,69:995,71:996,68:997,40:998,88:999,90:1000,83:1002,84:1003,85:1004,74:1005,91:1012,22:1013,87:1015,114:1016,95:1017,211:1020,101:1021,103:1022,19:[1,1019],21:[1,1024],65:[1,993],67:[1,994],75:[1,1006],76:[1,1007],77:[1,1008],81:[1,1001],92:[1,1009],93:[1,1010],94:[1,1011],97:$VN4,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,1014],212:[1,1023]}),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:1025,211:52,212:$Vp},{19:$VP4,21:$VQ4,22:1027,96:[1,1038],104:[1,1039],105:[1,1040],106:1037,178:1028,188:1026,193:1031,194:1032,195:1033,198:1036,201:[1,1041],202:[1,1042],203:[1,1047],204:[1,1048],205:[1,1049],206:[1,1050],207:[1,1043],208:[1,1044],209:[1,1045],210:[1,1046],211:1030,212:$VR4},o($VS4,$Vf4),o($VS4,$Vg4),o($VS4,$Vq),o($VS4,$Vr),o($VS4,$Vt),o($VS4,$Vu),o($Vw2,$VO4),{19:$Vn,21:$Vo,22:1051,211:52,212:$Vp},{19:$VT4,21:$VU4,22:1053,96:[1,1064],104:[1,1065],105:[1,1066],106:1063,178:1054,188:1052,193:1057,194:1058,195:1059,198:1062,201:[1,1067],202:[1,1068],203:[1,1073],204:[1,1074],205:[1,1075],206:[1,1076],207:[1,1069],208:[1,1070],209:[1,1071],210:[1,1072],211:1056,212:$VV4},o($Vy2,$VO4),{19:$Vn,21:$Vo,22:1077,211:52,212:$Vp},{19:$VW4,21:$VX4,22:1079,96:[1,1090],104:[1,1091],105:[1,1092],106:1089,178:1080,188:1078,193:1083,194:1084,195:1085,198:1088,201:[1,1093],202:[1,1094],203:[1,1099],204:[1,1100],205:[1,1101],206:[1,1102],207:[1,1095],208:[1,1096],209:[1,1097],210:[1,1098],211:1082,212:$VY4},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,1103]},o($Vt1,$Vk3),o($Vp1,$VZ4),{117:$V_4,130:1104,131:$V$3},o($V14,$V$4),o($VG2,$VH2,{132:365,133:366,134:367,140:368,142:369,143:370,127:1105,144:$VJ2,186:$VK2}),o($V14,$V05),o($V14,$V44,{135:1106,139:1107,136:$V54,137:$V64}),o($VG2,$VH2,{140:368,142:369,143:370,134:1108,117:$V15,131:$V15,144:$VJ2,186:$VK2}),o($VG2,$VH2,{140:368,142:369,143:370,134:1109,117:$V25,131:$V25,144:$VJ2,186:$VK2}),o($Vb4,$V35),o($Vb4,$V45),o($Vb4,$V55),o($Vb4,$V65),{19:$V75,21:$V85,22:1111,125:1110,196:$V95,211:1114,212:$Va5},o($VG2,$VH2,{143:370,122:1117,126:1118,127:1119,128:1120,132:1121,133:1122,134:1123,140:1124,142:1125,144:$VJ2,186:$Vb5}),o($V74,[2,172]),o($V74,[2,177],{157:[1,1127]}),o($V74,[2,179],{156:[1,1128]}),o($Vb4,$Vc5),o($Vb4,$Vd5),o($Vb4,$Ve5),o($Vb4,$Vq),o($Vb4,$Vr),o($Vb4,$Vs),o($Vb4,$Vt),o($Vb4,$Vu),o($VG2,[2,162]),o($VG2,$Vd5),o($VG2,$Ve5),o($VG2,$Vq),o($VG2,$Vr),o($VG2,$Vs),o($VG2,$Vt),o($VG2,$Vu),o($Vd4,[2,268]),o($Ve4,[2,141]),o($VF1,[2,187]),o($VF1,[2,194],{167:1129,176:$Vf5}),o($VF1,[2,195],{169:1131,176:$Vg5}),o($VF1,[2,196],{171:1133,176:$Vh5}),o($Vi5,[2,188]),o($Vi5,[2,190]),o($Vi5,[2,192]),{19:$Vj5,21:$Vk5,22:1135,96:$Vl5,104:$Vm5,105:$Vn5,106:1146,178:1136,182:$Vo5,193:1140,194:1141,195:1142,198:1145,201:$Vp5,202:$Vq5,203:$Vr5,204:$Vs5,205:$Vt5,206:$Vu5,207:$Vv5,208:$Vw5,209:$Vx5,210:$Vy5,211:1139,212:$Vz5},o($VF1,[2,197]),o($VF1,[2,202]),o($Vi5,[2,198],{173:1160}),o($VF1,[2,206]),o($VF1,[2,211]),o($Vi5,[2,207],{180:1161}),o($VF1,[2,213]),o($VF1,[2,219]),o($Vi5,[2,215],{185:1162}),o($VF1,[2,214]),o($Vj4,$VA5),o($Vj4,$VB5),{19:$VU2,21:$VV2,22:1164,83:1163,211:401,212:$Va3},o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Va1,$Vy3),o($Vx,$Vg,{50:1165,36:1166,39:$Vy}),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:1167}),o($Va1,$V11),o($Va1,$V21),{19:[1,1171],21:[1,1175],22:1169,32:1168,197:1170,211:1172,212:[1,1174],213:[1,1173]},{115:[1,1176],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:1177}),o($Vn2,$Vr1,{89:1178}),o($Vo1,$Vs1,{95:728,91:1179,97:$Vz4,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,1180]},o($Vn2,$VJ1),{66:[1,1181]},o($Vu2,$Vv2,{79:1182,80:1183,189:1184,187:[1,1185]}),o($Vw2,$Vv2,{79:1186,80:1187,189:1188,187:$VD5}),o($Vm1,$Vz2,{95:452,91:1190,97:$Vq3,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:1191,91:1192,87:1193,95:1194,101:1196,103:1197,97:$VE5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:1191,91:1192,87:1193,95:1194,101:1196,103:1197,97:$VE5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:1191,91:1192,87:1193,95:1194,101:1196,103:1197,97:$VE5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:1198,80:1199,189:1200,187:[1,1201]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1202],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1203,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,1204]},o($VH1,$Vk3),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:1205}),o($Va1,$V11),o($Va1,$V21),{19:[1,1209],21:[1,1213],22:1207,32:1206,197:1208,211:1210,212:[1,1212],213:[1,1211]},{115:[1,1214],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:1215}),o($Vn2,$Vr1,{89:1216}),o($Vo1,$Vs1,{95:775,91:1217,97:$VA4,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,1218]},o($Vn2,$VJ1),{66:[1,1219]},o($Vu2,$Vv2,{79:1220,80:1221,189:1222,187:[1,1223]}),o($Vw2,$Vv2,{79:1224,80:1225,189:1226,187:$VF5}),o($Vm1,$Vz2,{95:488,91:1228,97:$Vs3,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:1229,91:1230,87:1231,95:1232,101:1234,103:1235,97:$VG5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:1229,91:1230,87:1231,95:1232,101:1234,103:1235,97:$VG5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:1229,91:1230,87:1231,95:1232,101:1234,103:1235,97:$VG5,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:1236,80:1237,189:1238,187:[1,1239]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1240],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1241,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,1242]},o($VH1,$Vk3),o($V81,$Vx3),o($Va1,$Vy3),o($Va1,$Vz3),o($Va1,$VA3),{66:[1,1243]},o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),o($Vw2,$Vv2,{80:829,189:830,79:1244,187:$VB4}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1245,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:829,189:830,79:1246,187:$VB4}),o($Vo1,$Vz2,{95:526,91:1247,97:$Vw3,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VB3),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:1248,190:[1,1249]}),{19:$VP3,21:$VQ3,22:627,125:1250,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:1251,190:[1,1252]}),{19:$VP3,21:$VQ3,22:627,125:1253,196:$VR3,211:630,212:$VS3},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:1254,190:[1,1255]}),{19:$VP3,21:$VQ3,22:627,125:1256,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,1257]},o($Vt1,$VJ1),{96:[1,1259],102:1258,104:[1,1260],105:[1,1261],106:1262,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1263]},{117:[1,1264]},o($Vt1,$Vh4),{19:[1,1267],21:[1,1270],22:1266,83:1265,211:1268,212:[1,1269]},o($V81,$Va2,{48:1271,49:[1,1272]}),o($Va1,$Vb2),o($Va1,$Vd1,{61:1273,63:1274,68:1275,40:1276,74:1277,114:1281,75:[1,1278],76:[1,1279],77:[1,1280],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:1282,60:1283,69:1284,88:1285,90:1286,91:1290,95:1291,92:[1,1287],93:[1,1288],94:[1,1289],97:$VH5,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:1293,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:1294}),o($Vo1,$Vn1,{78:1295}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:1296}),o($Vm1,$Vs1,{95:876,91:1297,97:$VD4,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:1298}),o($Vt1,$Vu1,{82:1299}),o($Vt1,$Vu1,{82:1300}),o($Vo1,$Vv1,{101:880,103:881,87:1301,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:1302}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,1306],21:[1,1310],22:1304,32:1303,197:1305,211:1307,212:[1,1309],213:[1,1308]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:1311}),o($VH1,$VI1),{115:[1,1312],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,1313]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,1315],102:1314,104:[1,1316],105:[1,1317],106:1318,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1319]},o($Vt1,$Vt),o($Vt1,$Vu),o($Va1,$Vb2),o($Va1,$Vd1,{61:1320,63:1321,68:1322,40:1323,74:1324,114:1328,75:[1,1325],76:[1,1326],77:[1,1327],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:1329,60:1330,69:1331,88:1332,90:1333,91:1337,95:1338,92:[1,1334],93:[1,1335],94:[1,1336],97:$VI5,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:1340,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:1341}),o($Vo1,$Vn1,{78:1342}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:1343}),o($Vm1,$Vs1,{95:912,91:1344,97:$VE4,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:1345}),o($Vt1,$Vu1,{82:1346}),o($Vt1,$Vu1,{82:1347}),o($Vo1,$Vv1,{101:916,103:917,87:1348,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:1349}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,1353],21:[1,1357],22:1351,32:1350,197:1352,211:1354,212:[1,1356],213:[1,1355]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:1358}),o($VH1,$VI1),{115:[1,1359],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,1360]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,1362],102:1361,104:[1,1363],105:[1,1364],106:1365,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1366]},o($Vt1,$Vt),o($Vt1,$Vu),o($Vo1,$VZ4),o($VI4,$Vv2,{80:933,189:934,79:1367,187:$VJ4}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1368,117:$VI2,144:$VJ2,186:$VK2}),o($VI4,$Vv2,{80:933,189:934,79:1369,187:$VJ4}),o($VF3,$Vz2,{95:586,91:1370,97:$VD3,98:$VL,99:$VM,100:$VN}),o($VG4,$VA2),o($VG4,$Vb3),o($VC3,$VB3),o($VJ5,$VM3),o($VE3,$VN3),o($VJ5,$VO3,{31:1371,190:[1,1372]}),{19:$VP3,21:$VQ3,22:627,125:1373,196:$VR3,211:630,212:$VS3},o($VC3,$VT3),o($VF3,$VN3),o($VC3,$VO3,{31:1374,190:[1,1375]}),{19:$VP3,21:$VQ3,22:627,125:1376,196:$VR3,211:630,212:$VS3},o($VK5,$VU3),o($VG3,$VN3),o($VK5,$VO3,{31:1377,190:[1,1378]}),{19:$VP3,21:$VQ3,22:627,125:1379,196:$VR3,211:630,212:$VS3},o($VH3,$VV3),o($VI3,$VW3),o($VI3,$VX3),o($VI3,$VY3),{96:[1,1380]},o($VI3,$VJ1),{96:[1,1382],102:1381,104:[1,1383],105:[1,1384],106:1385,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1386]},{117:[1,1387]},o($VI3,$Vh4),{19:[1,1390],21:[1,1393],22:1389,83:1388,211:1391,212:[1,1392]},o($VK3,$Vx3),o($VK3,$Va2,{48:1394,49:[1,1395]}),o($VC3,$Vb2),o($VC,$VD,{61:1396,63:1397,68:1398,40:1399,74:1400,114:1404,47:$Vd1,49:$Vd1,66:$Vd1,75:[1,1401],76:[1,1402],77:[1,1403]}),o($VC3,$Vc2),o($VC3,$Vf1,{64:1405,60:1406,69:1407,88:1408,90:1409,91:1413,95:1414,92:[1,1410],93:[1,1411],94:[1,1412],97:$VL5,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:1416,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VC3,$Vd2),o($VE3,$Vn1,{78:1417}),o($VF3,$Vn1,{78:1418}),o($VK5,$Vf2),o($VK5,$Vg2),o($VH3,$Vr1,{89:1419}),o($VE3,$Vs1,{95:981,91:1420,97:$VM4,98:$VL,99:$VM,100:$VN}),o($VI3,$Vu1,{82:1421}),o($VI3,$Vu1,{82:1422}),o($VI3,$Vu1,{82:1423}),o($VF3,$Vv1,{101:985,103:986,87:1424,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VG3,$Vn1,{78:1425}),o($VK5,$V11),o($VK5,$V21),{19:[1,1429],21:[1,1433],22:1427,32:1426,197:1428,211:1430,212:[1,1432],213:[1,1431]},o($VH3,$VA1),o($VH3,$VB1),o($VH3,$VC1),o($VH3,$VD1),o($VI3,$VE1),o($VF1,$VG1,{159:1434}),o($VJ3,$VI1),{115:[1,1435],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,1436]},o($VH3,$VJ1),o($VI3,$Vq),o($VI3,$Vr),{96:[1,1438],102:1437,104:[1,1439],105:[1,1440],106:1441,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1442]},o($VI3,$Vt),o($VI3,$Vu),o($VC3,$Vb2),o($VC,$VD,{61:1443,63:1444,68:1445,40:1446,74:1447,114:1451,47:$Vd1,49:$Vd1,66:$Vd1,75:[1,1448],76:[1,1449],77:[1,1450]}),o($VC3,$Vc2),o($VC3,$Vf1,{64:1452,60:1453,69:1454,88:1455,90:1456,91:1460,95:1461,92:[1,1457],93:[1,1458],94:[1,1459],97:$VM5,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:1463,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VC3,$Vd2),o($VE3,$Vn1,{78:1464}),o($VF3,$Vn1,{78:1465}),o($VK5,$Vf2),o($VK5,$Vg2),o($VH3,$Vr1,{89:1466}),o($VE3,$Vs1,{95:1017,91:1467,97:$VN4,98:$VL,99:$VM,100:$VN}),o($VI3,$Vu1,{82:1468}),o($VI3,$Vu1,{82:1469}),o($VI3,$Vu1,{82:1470}),o($VF3,$Vv1,{101:1021,103:1022,87:1471,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VG3,$Vn1,{78:1472}),o($VK5,$V11),o($VK5,$V21),{19:[1,1476],21:[1,1480],22:1474,32:1473,197:1475,211:1477,212:[1,1479],213:[1,1478]},o($VH3,$VA1),o($VH3,$VB1),o($VH3,$VC1),o($VH3,$VD1),o($VI3,$VE1),o($VF1,$VG1,{159:1481}),o($VJ3,$VI1),{115:[1,1482],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,1483]},o($VH3,$VJ1),o($VI3,$Vq),o($VI3,$Vr),{96:[1,1485],102:1484,104:[1,1486],105:[1,1487],106:1488,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1489]},o($VI3,$Vt),o($VI3,$Vu),{190:[1,1492],191:1490,192:[1,1491]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:1493,200:1494,107:[1,1495]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,1498],191:1496,192:[1,1497]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:1499,200:1500,107:[1,1501]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{190:[1,1504],191:1502,192:[1,1503]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:1505,200:1506,107:[1,1507]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),{19:[1,1510],21:[1,1513],22:1509,83:1508,211:1511,212:[1,1512]},o($V14,$VT5),o($V14,$VU5),o($V14,$VV5),o($Vb4,$VW5),o($Vb4,$VX5),o($Vb4,$VY5),o($Vx,$Vg,{42:1514,43:1515,51:1516,55:1517,36:1518,39:$Vy}),o($VZ5,$Vf4),o($VZ5,$Vg4),o($VZ5,$Vq),o($VZ5,$Vr),o($VZ5,$Vt),o($VZ5,$Vu),{66:[1,1519]},{66:$VZ3},{66:$V_3,129:1520,130:1521,131:$V_5},{66:$V04},o($V$5,$V24),o($V$5,$V34),o($V$5,$V44,{135:1523,138:1524,139:1527,136:$V06,137:$V16}),o($V74,$V84,{151:660,141:1528,146:1529,147:1530,150:1531,65:[1,1532],156:$V94,157:$Va4}),o($V26,$Vc4),{19:[1,1536],21:[1,1540],22:1534,145:1533,197:1535,211:1537,212:[1,1539],213:[1,1538]},o($V74,[2,178]),o($V74,[2,180]),o($Vi5,[2,189]),{19:$Vj5,21:$Vk5,22:1135,211:1139,212:$Vz5},o($Vi5,[2,191]),{96:$Vl5,104:$Vm5,105:$Vn5,106:1146,178:1136,193:1140,194:1141,195:1142,198:1145,201:$Vp5,202:$Vq5,203:$Vr5,204:$Vs5,205:$Vt5,206:$Vu5,207:$Vv5,208:$Vw5,209:$Vx5,210:$Vy5},o($Vi5,[2,193]),{182:$Vo5},o($Vi5,$V36,{177:1541,175:$V46}),o($Vi5,$V36,{177:1543,175:$V46}),o($Vi5,$V36,{177:1544,175:$V46}),o($V56,$Vq),o($V56,$Vr),o($V56,$Vk4),o($V56,$Vl4),o($V56,$Vm4),o($V56,$Vt),o($V56,$Vu),o($V56,$Vn4),o($V56,$Vo4,{199:1545,200:1546,107:[1,1547]}),o($V56,$Vp4),o($V56,$Vq4),o($V56,$Vr4),o($V56,$Vs4),o($V56,$Vt4),o($V56,$Vu4),o($V56,$Vv4),o($V56,$Vw4),o($V56,$Vx4),o($V66,$Vg3),o($V66,$Vh3),o($V66,$Vi3),o($V66,$Vj3),o($VF1,[2,200],{167:1548,176:$Vf5}),o($VF1,[2,209],{169:1549,176:$Vg5}),o($VF1,[2,217],{171:1550,176:$Vh5}),o($Vj4,$V76),o($Vj4,$VE1),o($Va1,$Vr3),o($VC,$VD,{58:1551,60:1552,62:1553,63:1554,69:1557,71:1558,68:1559,40:1560,88:1561,90:1562,83:1564,84:1565,85:1566,74:1567,91:1574,22:1575,87:1577,114:1578,95:1579,211:1582,101:1583,103:1584,19:[1,1581],21:[1,1586],65:[1,1555],67:[1,1556],75:[1,1568],76:[1,1569],77:[1,1570],81:[1,1563],92:[1,1571],93:[1,1572],94:[1,1573],97:$V86,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,1576],212:[1,1585]}),o($Vw2,$Vv2,{80:1187,189:1188,79:1587,187:$VD5}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1588,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:1187,189:1188,79:1589,187:$VD5}),o($Vo1,$Vz2,{95:728,91:1590,97:$Vz4,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:1591,190:[1,1592]}),{19:$VP3,21:$VQ3,22:627,125:1593,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:1594,190:[1,1595]}),{19:$VP3,21:$VQ3,22:627,125:1596,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,1597]},o($Vt1,$VJ1),{96:[1,1599],102:1598,104:[1,1600],105:[1,1601],106:1602,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1603]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:1604,190:[1,1605]}),{19:$VP3,21:$VQ3,22:627,125:1606,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,1607]},{19:[1,1610],21:[1,1613],22:1609,83:1608,211:1611,212:[1,1612]},o($Vw2,$Vv2,{80:1225,189:1226,79:1614,187:$VF5}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1615,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:1225,189:1226,79:1616,187:$VF5}),o($Vo1,$Vz2,{95:775,91:1617,97:$VA4,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:1618,190:[1,1619]}),{19:$VP3,21:$VQ3,22:627,125:1620,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:1621,190:[1,1622]}),{19:$VP3,21:$VQ3,22:627,125:1623,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,1624]},o($Vt1,$VJ1),{96:[1,1626],102:1625,104:[1,1627],105:[1,1628],106:1629,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,1630]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:1631,190:[1,1632]}),{19:$VP3,21:$VQ3,22:627,125:1633,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,1634]},{19:[1,1637],21:[1,1640],22:1636,83:1635,211:1638,212:[1,1639]},o($Va1,$VF4),o($Va1,$VU3),{117:[1,1641]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:1642,211:52,212:$Vp},{19:$V96,21:$Va6,22:1644,96:[1,1655],104:[1,1656],105:[1,1657],106:1654,178:1645,188:1643,193:1648,194:1649,195:1650,198:1653,201:[1,1658],202:[1,1659],203:[1,1664],204:[1,1665],205:[1,1666],206:[1,1667],207:[1,1660],208:[1,1661],209:[1,1662],210:[1,1663],211:1647,212:$Vb6},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:1668,211:52,212:$Vp},{19:$Vc6,21:$Vd6,22:1670,96:[1,1681],104:[1,1682],105:[1,1683],106:1680,178:1671,188:1669,193:1674,194:1675,195:1676,198:1679,201:[1,1684],202:[1,1685],203:[1,1690],204:[1,1691],205:[1,1692],206:[1,1693],207:[1,1686],208:[1,1687],209:[1,1688],210:[1,1689],211:1673,212:$Ve6},o($Vy2,$VO4),{19:$Vn,21:$Vo,22:1694,211:52,212:$Vp},{19:$Vf6,21:$Vg6,22:1696,96:[1,1707],104:[1,1708],105:[1,1709],106:1706,178:1697,188:1695,193:1700,194:1701,195:1702,198:1705,201:[1,1710],202:[1,1711],203:[1,1716],204:[1,1717],205:[1,1718],206:[1,1719],207:[1,1712],208:[1,1713],209:[1,1714],210:[1,1715],211:1699,212:$Vh6},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,1720]},o($Vt1,$Vk3),o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Va1,$Vy3),o($Vx,$Vg,{50:1721,36:1722,39:$Vy}),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:1723}),o($Va1,$V11),o($Va1,$V21),{19:[1,1727],21:[1,1731],22:1725,32:1724,197:1726,211:1728,212:[1,1730],213:[1,1729]},{115:[1,1732],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:1733}),o($Vn2,$Vr1,{89:1734}),o($Vo1,$Vs1,{95:1291,91:1735,97:$VH5,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,1736]},o($Vn2,$VJ1),{66:[1,1737]},o($Vu2,$Vv2,{79:1738,80:1739,189:1740,187:[1,1741]}),o($Vw2,$Vv2,{79:1742,80:1743,189:1744,187:$Vi6}),o($Vm1,$Vz2,{95:876,91:1746,97:$VD4,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:1747,91:1748,87:1749,95:1750,101:1752,103:1753,97:$Vj6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:1747,91:1748,87:1749,95:1750,101:1752,103:1753,97:$Vj6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:1747,91:1748,87:1749,95:1750,101:1752,103:1753,97:$Vj6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:1754,80:1755,189:1756,187:[1,1757]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1758],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1759,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,1760]},o($VH1,$Vk3),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:1761}),o($Va1,$V11),o($Va1,$V21),{19:[1,1765],21:[1,1769],22:1763,32:1762,197:1764,211:1766,212:[1,1768],213:[1,1767]},{115:[1,1770],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:1771}),o($Vn2,$Vr1,{89:1772}),o($Vo1,$Vs1,{95:1338,91:1773,97:$VI5,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,1774]},o($Vn2,$VJ1),{66:[1,1775]},o($Vu2,$Vv2,{79:1776,80:1777,189:1778,187:[1,1779]}),o($Vw2,$Vv2,{79:1780,80:1781,189:1782,187:$Vk6}),o($Vm1,$Vz2,{95:912,91:1784,97:$VE4,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:1785,91:1786,87:1787,95:1788,101:1790,103:1791,97:$Vl6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:1785,91:1786,87:1787,95:1788,101:1790,103:1791,97:$Vl6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:1785,91:1786,87:1787,95:1788,101:1790,103:1791,97:$Vl6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:1792,80:1793,189:1794,187:[1,1795]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1796],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1797,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,1798]},o($VH1,$Vk3),o($VC3,$VU3),{117:[1,1799]},o($VC3,$VM3),o($VG4,$VV3),o($VH4,$VO4),{19:$Vn,21:$Vo,22:1800,211:52,212:$Vp},{19:$Vm6,21:$Vn6,22:1802,96:[1,1813],104:[1,1814],105:[1,1815],106:1812,178:1803,188:1801,193:1806,194:1807,195:1808,198:1811,201:[1,1816],202:[1,1817],203:[1,1822],204:[1,1823],205:[1,1824],206:[1,1825],207:[1,1818],208:[1,1819],209:[1,1820],210:[1,1821],211:1805,212:$Vo6},o($VI4,$VO4),{19:$Vn,21:$Vo,22:1826,211:52,212:$Vp},{19:$Vp6,21:$Vq6,22:1828,96:[1,1839],104:[1,1840],105:[1,1841],106:1838,178:1829,188:1827,193:1832,194:1833,195:1834,198:1837,201:[1,1842],202:[1,1843],203:[1,1848],204:[1,1849],205:[1,1850],206:[1,1851],207:[1,1844],208:[1,1845],209:[1,1846],210:[1,1847],211:1831,212:$Vr6},o($VK4,$VO4),{19:$Vn,21:$Vo,22:1852,211:52,212:$Vp},{19:$Vs6,21:$Vt6,22:1854,96:[1,1865],104:[1,1866],105:[1,1867],106:1864,178:1855,188:1853,193:1858,194:1859,195:1860,198:1863,201:[1,1868],202:[1,1869],203:[1,1874],204:[1,1875],205:[1,1876],206:[1,1877],207:[1,1870],208:[1,1871],209:[1,1872],210:[1,1873],211:1857,212:$Vu6},o($VI3,$Vb3),o($VI3,$Vc3),o($VI3,$Vd3),o($VI3,$Ve3),o($VI3,$Vf3),{107:[1,1878]},o($VI3,$Vk3),o($VG3,$VZ4),o($VJ3,$VC5),o($VJ3,$VE1),o($VJ3,$Vq),o($VJ3,$Vr),o($VJ3,$Vt),o($VJ3,$Vu),o($VC3,$Vy3),o($Vx,$Vg,{50:1879,36:1880,39:$Vy}),o($VC3,$Vz3),o($VC3,$Vk2),o($VC3,$Vf2),o($VC3,$Vg2),o($VF3,$Vn1,{78:1881}),o($VC3,$V11),o($VC3,$V21),{19:[1,1885],21:[1,1889],22:1883,32:1882,197:1884,211:1886,212:[1,1888],213:[1,1887]},{115:[1,1890],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC3,$VA3),o($VC3,$Vm2),o($VF3,$Vn1,{78:1891}),o($VG4,$Vr1,{89:1892}),o($VF3,$Vs1,{95:1414,91:1893,97:$VL5,98:$VL,99:$VM,100:$VN}),o($VG4,$VA1),o($VG4,$VB1),o($VG4,$VC1),o($VG4,$VD1),{96:[1,1894]},o($VG4,$VJ1),{66:[1,1895]},o($VH4,$Vv2,{79:1896,80:1897,189:1898,187:[1,1899]}),o($VI4,$Vv2,{79:1900,80:1901,189:1902,187:$Vv6}),o($VE3,$Vz2,{95:981,91:1904,97:$VM4,98:$VL,99:$VM,100:$VN}),o($VH3,$VA2),o($VF3,$VB2,{86:1905,91:1906,87:1907,95:1908,101:1910,103:1911,97:$Vw6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VD2,{86:1905,91:1906,87:1907,95:1908,101:1910,103:1911,97:$Vw6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VE2,{86:1905,91:1906,87:1907,95:1908,101:1910,103:1911,97:$Vw6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ3,$VF2),o($VK4,$Vv2,{79:1912,80:1913,189:1914,187:[1,1915]}),o($VK5,$VT1),o($VK5,$Vl),o($VK5,$Vm),o($VK5,$Vq),o($VK5,$Vr),o($VK5,$Vs),o($VK5,$Vt),o($VK5,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1916],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1917,117:$VI2,144:$VJ2,186:$VK2}),o($VH3,$Vb3),o($VJ3,$Vc3),o($VJ3,$Vd3),o($VJ3,$Ve3),o($VJ3,$Vf3),{107:[1,1918]},o($VJ3,$Vk3),o($VC3,$Vz3),o($VC3,$Vk2),o($VC3,$Vf2),o($VC3,$Vg2),o($VF3,$Vn1,{78:1919}),o($VC3,$V11),o($VC3,$V21),{19:[1,1923],21:[1,1927],22:1921,32:1920,197:1922,211:1924,212:[1,1926],213:[1,1925]},{115:[1,1928],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC3,$VA3),o($VC3,$Vm2),o($VF3,$Vn1,{78:1929}),o($VG4,$Vr1,{89:1930}),o($VF3,$Vs1,{95:1461,91:1931,97:$VM5,98:$VL,99:$VM,100:$VN}),o($VG4,$VA1),o($VG4,$VB1),o($VG4,$VC1),o($VG4,$VD1),{96:[1,1932]},o($VG4,$VJ1),{66:[1,1933]},o($VH4,$Vv2,{79:1934,80:1935,189:1936,187:[1,1937]}),o($VI4,$Vv2,{79:1938,80:1939,189:1940,187:$Vx6}),o($VE3,$Vz2,{95:1017,91:1942,97:$VN4,98:$VL,99:$VM,100:$VN}),o($VH3,$VA2),o($VF3,$VB2,{86:1943,91:1944,87:1945,95:1946,101:1948,103:1949,97:$Vy6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VD2,{86:1943,91:1944,87:1945,95:1946,101:1948,103:1949,97:$Vy6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VE2,{86:1943,91:1944,87:1945,95:1946,101:1948,103:1949,97:$Vy6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ3,$VF2),o($VK4,$Vv2,{79:1950,80:1951,189:1952,187:[1,1953]}),o($VK5,$VT1),o($VK5,$Vl),o($VK5,$Vm),o($VK5,$Vq),o($VK5,$Vr),o($VK5,$Vs),o($VK5,$Vt),o($VK5,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,1954],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:1955,117:$VI2,144:$VJ2,186:$VK2}),o($VH3,$Vb3),o($VJ3,$Vc3),o($VJ3,$Vd3),o($VJ3,$Ve3),o($VJ3,$Vf3),{107:[1,1956]},o($VJ3,$Vk3),o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VP4,21:$VQ4,22:1958,83:1957,211:1030,212:$VR4},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VT4,21:$VU4,22:1960,83:1959,211:1056,212:$VV4},o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$VW4,21:$VX4,22:1962,83:1961,211:1082,212:$VY4},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vz6,$VA6,{148:1963,149:1964,152:$VB6,153:$VC6,154:$VD6,155:$VE6}),o($VF6,$VG6),o($VH6,$VI6,{52:1969}),o($VJ6,$VK6,{56:1970}),o($VC,$VD,{59:1971,69:1972,71:1973,72:1974,88:1977,90:1978,83:1980,84:1981,85:1982,74:1983,40:1984,91:1988,22:1989,87:1991,114:1992,95:1996,211:1999,101:2000,103:2001,19:[1,1998],21:[1,2003],65:[1,1975],67:[1,1976],75:[1,1993],76:[1,1994],77:[1,1995],81:[1,1979],92:[1,1985],93:[1,1986],94:[1,1987],97:$VL6,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,1990],212:[1,2002]}),o($Vz6,$VA6,{149:1964,148:2004,152:$VB6,153:$VC6,154:$VD6,155:$VE6}),{66:$V_4,130:2005,131:$V_5},o($V$5,$V$4),o($VG2,$VH2,{143:370,132:1121,133:1122,134:1123,140:1124,142:1125,127:2006,144:$VJ2,186:$Vb5}),o($V$5,$V05),o($V$5,$V44,{135:2007,139:2008,136:$V06,137:$V16}),o($VG2,$VH2,{143:370,140:1124,142:1125,134:2009,66:$V15,131:$V15,144:$VJ2,186:$Vb5}),o($VG2,$VH2,{143:370,140:1124,142:1125,134:2010,66:$V25,131:$V25,144:$VJ2,186:$Vb5}),o($V26,$V35),o($V26,$V45),o($V26,$V55),o($V26,$V65),{19:$V75,21:$V85,22:1111,125:2011,196:$V95,211:1114,212:$Va5},o($VG2,$VH2,{143:370,126:1118,127:1119,128:1120,132:1121,133:1122,134:1123,140:1124,142:1125,122:2012,144:$VJ2,186:$Vb5}),o($V26,$Vc5),o($V26,$Vd5),o($V26,$Ve5),o($V26,$Vq),o($V26,$Vr),o($V26,$Vs),o($V26,$Vt),o($V26,$Vu),o($Vi5,[2,203]),o($Vi5,[2,205]),o($Vi5,[2,212]),o($Vi5,[2,220]),o($V56,$VA5),o($V56,$VB5),{19:$Vj5,21:$Vk5,22:2014,83:2013,211:1139,212:$Vz5},o($Vi5,[2,199]),o($Vi5,[2,208]),o($Vi5,[2,216]),o($Va1,$Vb2),o($Va1,$Vd1,{61:2015,63:2016,68:2017,40:2018,74:2019,114:2023,75:[1,2020],76:[1,2021],77:[1,2022],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:2024,60:2025,69:2026,88:2027,90:2028,91:2032,95:2033,92:[1,2029],93:[1,2030],94:[1,2031],97:$VM6,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:2035,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:2036}),o($Vo1,$Vn1,{78:2037}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:2038}),o($Vm1,$Vs1,{95:1579,91:2039,97:$V86,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:2040}),o($Vt1,$Vu1,{82:2041}),o($Vt1,$Vu1,{82:2042}),o($Vo1,$Vv1,{101:1583,103:1584,87:2043,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:2044}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,2048],21:[1,2052],22:2046,32:2045,197:2047,211:2049,212:[1,2051],213:[1,2050]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:2053}),o($VH1,$VI1),{115:[1,2054],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,2055]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,2057],102:2056,104:[1,2058],105:[1,2059],106:2060,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2061]},o($Vt1,$Vt),o($Vt1,$Vu),o($Va1,$VU3),{117:[1,2062]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:2063,211:52,212:$Vp},{19:$VN6,21:$VO6,22:2065,96:[1,2076],104:[1,2077],105:[1,2078],106:2075,178:2066,188:2064,193:2069,194:2070,195:2071,198:2074,201:[1,2079],202:[1,2080],203:[1,2085],204:[1,2086],205:[1,2087],206:[1,2088],207:[1,2081],208:[1,2082],209:[1,2083],210:[1,2084],211:2068,212:$VP6},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:2089,211:52,212:$Vp},{19:$VQ6,21:$VR6,22:2091,96:[1,2102],104:[1,2103],105:[1,2104],106:2101,178:2092,188:2090,193:2095,194:2096,195:2097,198:2100,201:[1,2105],202:[1,2106],203:[1,2111],204:[1,2112],205:[1,2113],206:[1,2114],207:[1,2107],208:[1,2108],209:[1,2109],210:[1,2110],211:2094,212:$VS6},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,2115]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:2116,211:52,212:$Vp},{19:$VT6,21:$VU6,22:2118,96:[1,2129],104:[1,2130],105:[1,2131],106:2128,178:2119,188:2117,193:2122,194:2123,195:2124,198:2127,201:[1,2132],202:[1,2133],203:[1,2138],204:[1,2139],205:[1,2140],206:[1,2141],207:[1,2134],208:[1,2135],209:[1,2136],210:[1,2137],211:2121,212:$VV6},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Va1,$VU3),{117:[1,2142]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:2143,211:52,212:$Vp},{19:$VW6,21:$VX6,22:2145,96:[1,2156],104:[1,2157],105:[1,2158],106:2155,178:2146,188:2144,193:2149,194:2150,195:2151,198:2154,201:[1,2159],202:[1,2160],203:[1,2165],204:[1,2166],205:[1,2167],206:[1,2168],207:[1,2161],208:[1,2162],209:[1,2163],210:[1,2164],211:2148,212:$VY6},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:2169,211:52,212:$Vp},{19:$VZ6,21:$V_6,22:2171,96:[1,2182],104:[1,2183],105:[1,2184],106:2181,178:2172,188:2170,193:2175,194:2176,195:2177,198:2180,201:[1,2185],202:[1,2186],203:[1,2191],204:[1,2192],205:[1,2193],206:[1,2194],207:[1,2187],208:[1,2188],209:[1,2189],210:[1,2190],211:2174,212:$V$6},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,2195]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:2196,211:52,212:$Vp},{19:$V07,21:$V17,22:2198,96:[1,2209],104:[1,2210],105:[1,2211],106:2208,178:2199,188:2197,193:2202,194:2203,195:2204,198:2207,201:[1,2212],202:[1,2213],203:[1,2218],204:[1,2219],205:[1,2220],206:[1,2221],207:[1,2214],208:[1,2215],209:[1,2216],210:[1,2217],211:2201,212:$V27},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Vo1,$VZ4),{190:[1,2224],191:2222,192:[1,2223]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:2225,200:2226,107:[1,2227]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,2230],191:2228,192:[1,2229]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:2231,200:2232,107:[1,2233]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{190:[1,2236],191:2234,192:[1,2235]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:2237,200:2238,107:[1,2239]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),{19:[1,2242],21:[1,2245],22:2241,83:2240,211:2243,212:[1,2244]},o($Va1,$Vr3),o($VC,$VD,{58:2246,60:2247,62:2248,63:2249,69:2252,71:2253,68:2254,40:2255,88:2256,90:2257,83:2259,84:2260,85:2261,74:2262,91:2269,22:2270,87:2272,114:2273,95:2274,211:2277,101:2278,103:2279,19:[1,2276],21:[1,2281],65:[1,2250],67:[1,2251],75:[1,2263],76:[1,2264],77:[1,2265],81:[1,2258],92:[1,2266],93:[1,2267],94:[1,2268],97:$V37,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,2271],212:[1,2280]}),o($Vw2,$Vv2,{80:1743,189:1744,79:2282,187:$Vi6}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:2283,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:1743,189:1744,79:2284,187:$Vi6}),o($Vo1,$Vz2,{95:1291,91:2285,97:$VH5,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:2286,190:[1,2287]}),{19:$VP3,21:$VQ3,22:627,125:2288,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:2289,190:[1,2290]}),{19:$VP3,21:$VQ3,22:627,125:2291,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,2292]},o($Vt1,$VJ1),{96:[1,2294],102:2293,104:[1,2295],105:[1,2296],106:2297,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2298]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:2299,190:[1,2300]}),{19:$VP3,21:$VQ3,22:627,125:2301,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,2302]},{19:[1,2305],21:[1,2308],22:2304,83:2303,211:2306,212:[1,2307]},o($Vw2,$Vv2,{80:1781,189:1782,79:2309,187:$Vk6}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:2310,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:1781,189:1782,79:2311,187:$Vk6}),o($Vo1,$Vz2,{95:1338,91:2312,97:$VI5,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:2313,190:[1,2314]}),{19:$VP3,21:$VQ3,22:627,125:2315,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:2316,190:[1,2317]}),{19:$VP3,21:$VQ3,22:627,125:2318,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,2319]},o($Vt1,$VJ1),{96:[1,2321],102:2320,104:[1,2322],105:[1,2323],106:2324,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2325]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:2326,190:[1,2327]}),{19:$VP3,21:$VQ3,22:627,125:2328,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,2329]},{19:[1,2332],21:[1,2335],22:2331,83:2330,211:2333,212:[1,2334]},o($VF3,$VZ4),{190:[1,2338],191:2336,192:[1,2337]},o($VE3,$VN5),o($VE3,$VO5),o($VE3,$VP5),o($VE3,$Vq),o($VE3,$Vr),o($VE3,$Vk4),o($VE3,$Vl4),o($VE3,$Vm4),o($VE3,$Vt),o($VE3,$Vu),o($VE3,$Vn4),o($VE3,$Vo4,{199:2339,200:2340,107:[1,2341]}),o($VE3,$Vp4),o($VE3,$Vq4),o($VE3,$Vr4),o($VE3,$Vs4),o($VE3,$Vt4),o($VE3,$Vu4),o($VE3,$Vv4),o($VE3,$Vw4),o($VE3,$Vx4),o($V47,$Vg3),o($V47,$Vh3),o($V47,$Vi3),o($V47,$Vj3),{190:[1,2344],191:2342,192:[1,2343]},o($VF3,$VN5),o($VF3,$VO5),o($VF3,$VP5),o($VF3,$Vq),o($VF3,$Vr),o($VF3,$Vk4),o($VF3,$Vl4),o($VF3,$Vm4),o($VF3,$Vt),o($VF3,$Vu),o($VF3,$Vn4),o($VF3,$Vo4,{199:2345,200:2346,107:[1,2347]}),o($VF3,$Vp4),o($VF3,$Vq4),o($VF3,$Vr4),o($VF3,$Vs4),o($VF3,$Vt4),o($VF3,$Vu4),o($VF3,$Vv4),o($VF3,$Vw4),o($VF3,$Vx4),o($V57,$Vg3),o($V57,$Vh3),o($V57,$Vi3),o($V57,$Vj3),{190:[1,2350],191:2348,192:[1,2349]},o($VG3,$VN5),o($VG3,$VO5),o($VG3,$VP5),o($VG3,$Vq),o($VG3,$Vr),o($VG3,$Vk4),o($VG3,$Vl4),o($VG3,$Vm4),o($VG3,$Vt),o($VG3,$Vu),o($VG3,$Vn4),o($VG3,$Vo4,{199:2351,200:2352,107:[1,2353]}),o($VG3,$Vp4),o($VG3,$Vq4),o($VG3,$Vr4),o($VG3,$Vs4),o($VG3,$Vt4),o($VG3,$Vu4),o($VG3,$Vv4),o($VG3,$Vw4),o($VG3,$Vx4),o($V67,$Vg3),o($V67,$Vh3),o($V67,$Vi3),o($V67,$Vj3),{19:[1,2356],21:[1,2359],22:2355,83:2354,211:2357,212:[1,2358]},o($VC3,$Vr3),o($VC,$VD,{58:2360,60:2361,62:2362,63:2363,69:2366,71:2367,68:2368,40:2369,88:2370,90:2371,83:2373,84:2374,85:2375,74:2376,91:2383,22:2384,87:2386,114:2387,95:2388,211:2391,101:2392,103:2393,19:[1,2390],21:[1,2395],65:[1,2364],67:[1,2365],75:[1,2377],76:[1,2378],77:[1,2379],81:[1,2372],92:[1,2380],93:[1,2381],94:[1,2382],97:$V77,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,2385],212:[1,2394]}),o($VI4,$Vv2,{80:1901,189:1902,79:2396,187:$Vv6}),o($VC3,$VT1),o($VC3,$Vl),o($VC3,$Vm),o($VC3,$Vq),o($VC3,$Vr),o($VC3,$Vs),o($VC3,$Vt),o($VC3,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:2397,117:$VI2,144:$VJ2,186:$VK2}),o($VI4,$Vv2,{80:1901,189:1902,79:2398,187:$Vv6}),o($VF3,$Vz2,{95:1414,91:2399,97:$VL5,98:$VL,99:$VM,100:$VN}),o($VG4,$VA2),o($VG4,$Vb3),o($VC3,$VF4),o($VJ5,$VM3),o($VE3,$VN3),o($VJ5,$VO3,{31:2400,190:[1,2401]}),{19:$VP3,21:$VQ3,22:627,125:2402,196:$VR3,211:630,212:$VS3},o($VC3,$VT3),o($VF3,$VN3),o($VC3,$VO3,{31:2403,190:[1,2404]}),{19:$VP3,21:$VQ3,22:627,125:2405,196:$VR3,211:630,212:$VS3},o($VH3,$VV3),o($VI3,$VW3),o($VI3,$VX3),o($VI3,$VY3),{96:[1,2406]},o($VI3,$VJ1),{96:[1,2408],102:2407,104:[1,2409],105:[1,2410],106:2411,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2412]},o($VK5,$VU3),o($VG3,$VN3),o($VK5,$VO3,{31:2413,190:[1,2414]}),{19:$VP3,21:$VQ3,22:627,125:2415,196:$VR3,211:630,212:$VS3},o($VI3,$Vh4),{117:[1,2416]},{19:[1,2419],21:[1,2422],22:2418,83:2417,211:2420,212:[1,2421]},o($VI4,$Vv2,{80:1939,189:1940,79:2423,187:$Vx6}),o($VC3,$VT1),o($VC3,$Vl),o($VC3,$Vm),o($VC3,$Vq),o($VC3,$Vr),o($VC3,$Vs),o($VC3,$Vt),o($VC3,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:2424,117:$VI2,144:$VJ2,186:$VK2}),o($VI4,$Vv2,{80:1939,189:1940,79:2425,187:$Vx6}),o($VF3,$Vz2,{95:1461,91:2426,97:$VM5,98:$VL,99:$VM,100:$VN}),o($VG4,$VA2),o($VG4,$Vb3),o($VC3,$VF4),o($VJ5,$VM3),o($VE3,$VN3),o($VJ5,$VO3,{31:2427,190:[1,2428]}),{19:$VP3,21:$VQ3,22:627,125:2429,196:$VR3,211:630,212:$VS3},o($VC3,$VT3),o($VF3,$VN3),o($VC3,$VO3,{31:2430,190:[1,2431]}),{19:$VP3,21:$VQ3,22:627,125:2432,196:$VR3,211:630,212:$VS3},o($VH3,$VV3),o($VI3,$VW3),o($VI3,$VX3),o($VI3,$VY3),{96:[1,2433]},o($VI3,$VJ1),{96:[1,2435],102:2434,104:[1,2436],105:[1,2437],106:2438,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2439]},o($VK5,$VU3),o($VG3,$VN3),o($VK5,$VO3,{31:2440,190:[1,2441]}),{19:$VP3,21:$VQ3,22:627,125:2442,196:$VR3,211:630,212:$VS3},o($VI3,$Vh4),{117:[1,2443]},{19:[1,2446],21:[1,2449],22:2445,83:2444,211:2447,212:[1,2448]},o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Vz6,$Vn1,{78:2450}),o($Vz6,$V87),o($Vz6,$V97),o($Vz6,$Va7),o($Vz6,$Vb7),o($Vz6,$Vc7),o($VF6,$Vd7,{53:2451,47:[1,2452]}),o($VH6,$Ve7,{57:2453,49:[1,2454]}),o($VJ6,$Vf7),o($VJ6,$Vg7,{70:2455,72:2456,74:2457,40:2458,114:2459,75:[1,2460],76:[1,2461],77:[1,2462],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($VJ6,$Vh7),o($VJ6,$Vi7,{73:2463,69:2464,88:2465,90:2466,91:2470,95:2471,92:[1,2467],93:[1,2468],94:[1,2469],97:$Vj7,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:2473,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VJ6,$Vk7),o($Vl7,$Vr1,{89:2474}),o($Vm7,$Vs1,{95:1996,91:2475,97:$VL6,98:$VL,99:$VM,100:$VN}),o($Vn7,$Vu1,{82:2476}),o($Vn7,$Vu1,{82:2477}),o($Vn7,$Vu1,{82:2478}),o($VJ6,$Vv1,{101:2000,103:2001,87:2479,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo7,$Vp7),o($Vo7,$Vq7),o($Vl7,$VA1),o($Vl7,$VB1),o($Vl7,$VC1),o($Vl7,$VD1),o($Vn7,$VE1),o($VF1,$VG1,{159:2480}),o($Vr7,$VI1),{115:[1,2481],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vo7,$V11),o($Vo7,$V21),{19:[1,2485],21:[1,2489],22:2483,32:2482,197:2484,211:2486,212:[1,2488],213:[1,2487]},{96:[1,2490]},o($Vl7,$VJ1),o($Vn7,$Vq),o($Vn7,$Vr),{96:[1,2492],102:2491,104:[1,2493],105:[1,2494],106:2495,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2496]},o($Vn7,$Vt),o($Vn7,$Vu),o($Vz6,$Vn1,{78:2497}),o($V$5,$VT5),o($V$5,$VU5),o($V$5,$VV5),o($V26,$VW5),o($V26,$VX5),o($V26,$VY5),o($Vx,$Vg,{42:2498,43:2499,51:2500,55:2501,36:2502,39:$Vy}),{66:[1,2503]},o($V56,$V76),o($V56,$VE1),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:2504}),o($Va1,$V11),o($Va1,$V21),{19:[1,2508],21:[1,2512],22:2506,32:2505,197:2507,211:2509,212:[1,2511],213:[1,2510]},{115:[1,2513],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:2514}),o($Vn2,$Vr1,{89:2515}),o($Vo1,$Vs1,{95:2033,91:2516,97:$VM6,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,2517]},o($Vn2,$VJ1),{66:[1,2518]},o($Vu2,$Vv2,{79:2519,80:2520,189:2521,187:[1,2522]}),o($Vw2,$Vv2,{79:2523,80:2524,189:2525,187:$Vs7}),o($Vm1,$Vz2,{95:1579,91:2527,97:$V86,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:2528,91:2529,87:2530,95:2531,101:2533,103:2534,97:$Vt7,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:2528,91:2529,87:2530,95:2531,101:2533,103:2534,97:$Vt7,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:2528,91:2529,87:2530,95:2531,101:2533,103:2534,97:$Vt7,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:2535,80:2536,189:2537,187:[1,2538]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,2539],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:2540,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,2541]},o($VH1,$Vk3),o($Vo1,$VZ4),{190:[1,2544],191:2542,192:[1,2543]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:2545,200:2546,107:[1,2547]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,2550],191:2548,192:[1,2549]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:2551,200:2552,107:[1,2553]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,2556],21:[1,2559],22:2555,83:2554,211:2557,212:[1,2558]},{190:[1,2562],191:2560,192:[1,2561]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:2563,200:2564,107:[1,2565]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($Vo1,$VZ4),{190:[1,2568],191:2566,192:[1,2567]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:2569,200:2570,107:[1,2571]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,2574],191:2572,192:[1,2573]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:2575,200:2576,107:[1,2577]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,2580],21:[1,2583],22:2579,83:2578,211:2581,212:[1,2582]},{190:[1,2586],191:2584,192:[1,2585]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:2587,200:2588,107:[1,2589]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$V96,21:$Va6,22:2591,83:2590,211:1647,212:$Vb6},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$Vc6,21:$Vd6,22:2593,83:2592,211:1673,212:$Ve6},o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$Vf6,21:$Vg6,22:2595,83:2594,211:1699,212:$Vh6},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Va1,$Vb2),o($Va1,$Vd1,{61:2596,63:2597,68:2598,40:2599,74:2600,114:2604,75:[1,2601],76:[1,2602],77:[1,2603],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Va1,$Vc2),o($Va1,$Vf1,{64:2605,60:2606,69:2607,88:2608,90:2609,91:2613,95:2614,92:[1,2610],93:[1,2611],94:[1,2612],97:$Vu7,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:2616,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Va1,$Vd2),o($Vm1,$Vn1,{78:2617}),o($Vo1,$Vn1,{78:2618}),o($Ve2,$Vf2),o($Ve2,$Vg2),o($Vq1,$Vr1,{89:2619}),o($Vm1,$Vs1,{95:2274,91:2620,97:$V37,98:$VL,99:$VM,100:$VN}),o($Vt1,$Vu1,{82:2621}),o($Vt1,$Vu1,{82:2622}),o($Vt1,$Vu1,{82:2623}),o($Vo1,$Vv1,{101:2278,103:2279,87:2624,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vp1,$Vn1,{78:2625}),o($Ve2,$V11),o($Ve2,$V21),{19:[1,2629],21:[1,2633],22:2627,32:2626,197:2628,211:2630,212:[1,2632],213:[1,2631]},o($Vq1,$VA1),o($Vq1,$VB1),o($Vq1,$VC1),o($Vq1,$VD1),o($Vt1,$VE1),o($VF1,$VG1,{159:2634}),o($VH1,$VI1),{115:[1,2635],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,2636]},o($Vq1,$VJ1),o($Vt1,$Vq),o($Vt1,$Vr),{96:[1,2638],102:2637,104:[1,2639],105:[1,2640],106:2641,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2642]},o($Vt1,$Vt),o($Vt1,$Vu),o($Va1,$VU3),{117:[1,2643]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:2644,211:52,212:$Vp},{19:$Vv7,21:$Vw7,22:2646,96:[1,2657],104:[1,2658],105:[1,2659],106:2656,178:2647,188:2645,193:2650,194:2651,195:2652,198:2655,201:[1,2660],202:[1,2661],203:[1,2666],204:[1,2667],205:[1,2668],206:[1,2669],207:[1,2662],208:[1,2663],209:[1,2664],210:[1,2665],211:2649,212:$Vx7},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:2670,211:52,212:$Vp},{19:$Vy7,21:$Vz7,22:2672,96:[1,2683],104:[1,2684],105:[1,2685],106:2682,178:2673,188:2671,193:2676,194:2677,195:2678,198:2681,201:[1,2686],202:[1,2687],203:[1,2692],204:[1,2693],205:[1,2694],206:[1,2695],207:[1,2688],208:[1,2689],209:[1,2690],210:[1,2691],211:2675,212:$VA7},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,2696]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:2697,211:52,212:$Vp},{19:$VB7,21:$VC7,22:2699,96:[1,2710],104:[1,2711],105:[1,2712],106:2709,178:2700,188:2698,193:2703,194:2704,195:2705,198:2708,201:[1,2713],202:[1,2714],203:[1,2719],204:[1,2720],205:[1,2721],206:[1,2722],207:[1,2715],208:[1,2716],209:[1,2717],210:[1,2718],211:2702,212:$VD7},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Va1,$VU3),{117:[1,2723]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:2724,211:52,212:$Vp},{19:$VE7,21:$VF7,22:2726,96:[1,2737],104:[1,2738],105:[1,2739],106:2736,178:2727,188:2725,193:2730,194:2731,195:2732,198:2735,201:[1,2740],202:[1,2741],203:[1,2746],204:[1,2747],205:[1,2748],206:[1,2749],207:[1,2742],208:[1,2743],209:[1,2744],210:[1,2745],211:2729,212:$VG7},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:2750,211:52,212:$Vp},{19:$VH7,21:$VI7,22:2752,96:[1,2763],104:[1,2764],105:[1,2765],106:2762,178:2753,188:2751,193:2756,194:2757,195:2758,198:2761,201:[1,2766],202:[1,2767],203:[1,2772],204:[1,2773],205:[1,2774],206:[1,2775],207:[1,2768],208:[1,2769],209:[1,2770],210:[1,2771],211:2755,212:$VJ7},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,2776]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:2777,211:52,212:$Vp},{19:$VK7,21:$VL7,22:2779,96:[1,2790],104:[1,2791],105:[1,2792],106:2789,178:2780,188:2778,193:2783,194:2784,195:2785,198:2788,201:[1,2793],202:[1,2794],203:[1,2799],204:[1,2800],205:[1,2801],206:[1,2802],207:[1,2795],208:[1,2796],209:[1,2797],210:[1,2798],211:2782,212:$VM7},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($VH4,$VU1),o($VH4,$VV1),o($VH4,$VW1),o($VE3,$VA5),o($VE3,$VB5),{19:$Vm6,21:$Vn6,22:2804,83:2803,211:1805,212:$Vo6},o($VI4,$VU1),o($VI4,$VV1),o($VI4,$VW1),o($VF3,$VA5),o($VF3,$VB5),{19:$Vp6,21:$Vq6,22:2806,83:2805,211:1831,212:$Vr6},o($VK4,$VU1),o($VK4,$VV1),o($VK4,$VW1),o($VG3,$VA5),o($VG3,$VB5),{19:$Vs6,21:$Vt6,22:2808,83:2807,211:1857,212:$Vu6},o($VI3,$VC5),o($VI3,$VE1),o($VI3,$Vq),o($VI3,$Vr),o($VI3,$Vt),o($VI3,$Vu),o($VC3,$Vb2),o($VC,$VD,{61:2809,63:2810,68:2811,40:2812,74:2813,114:2817,47:$Vd1,49:$Vd1,66:$Vd1,75:[1,2814],76:[1,2815],77:[1,2816]}),o($VC3,$Vc2),o($VC3,$Vf1,{64:2818,60:2819,69:2820,88:2821,90:2822,91:2826,95:2827,92:[1,2823],93:[1,2824],94:[1,2825],97:$VN7,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:2829,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VC3,$Vd2),o($VE3,$Vn1,{78:2830}),o($VF3,$Vn1,{78:2831}),o($VK5,$Vf2),o($VK5,$Vg2),o($VH3,$Vr1,{89:2832}),o($VE3,$Vs1,{95:2388,91:2833,97:$V77,98:$VL,99:$VM,100:$VN}),o($VI3,$Vu1,{82:2834}),o($VI3,$Vu1,{82:2835}),o($VI3,$Vu1,{82:2836}),o($VF3,$Vv1,{101:2392,103:2393,87:2837,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VG3,$Vn1,{78:2838}),o($VK5,$V11),o($VK5,$V21),{19:[1,2842],21:[1,2846],22:2840,32:2839,197:2841,211:2843,212:[1,2845],213:[1,2844]},o($VH3,$VA1),o($VH3,$VB1),o($VH3,$VC1),o($VH3,$VD1),o($VI3,$VE1),o($VF1,$VG1,{159:2847}),o($VJ3,$VI1),{115:[1,2848],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},{96:[1,2849]},o($VH3,$VJ1),o($VI3,$Vq),o($VI3,$Vr),{96:[1,2851],102:2850,104:[1,2852],105:[1,2853],106:2854,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,2855]},o($VI3,$Vt),o($VI3,$Vu),o($VC3,$VU3),{117:[1,2856]},o($VC3,$VM3),o($VG4,$VV3),o($VH4,$VO4),{19:$Vn,21:$Vo,22:2857,211:52,212:$Vp},{19:$VO7,21:$VP7,22:2859,96:[1,2870],104:[1,2871],105:[1,2872],106:2869,178:2860,188:2858,193:2863,194:2864,195:2865,198:2868,201:[1,2873],202:[1,2874],203:[1,2879],204:[1,2880],205:[1,2881],206:[1,2882],207:[1,2875],208:[1,2876],209:[1,2877],210:[1,2878],211:2862,212:$VQ7},o($VI4,$VO4),{19:$Vn,21:$Vo,22:2883,211:52,212:$Vp},{19:$VR7,21:$VS7,22:2885,96:[1,2896],104:[1,2897],105:[1,2898],106:2895,178:2886,188:2884,193:2889,194:2890,195:2891,198:2894,201:[1,2899],202:[1,2900],203:[1,2905],204:[1,2906],205:[1,2907],206:[1,2908],207:[1,2901],208:[1,2902],209:[1,2903],210:[1,2904],211:2888,212:$VT7},o($VI3,$Vb3),o($VI3,$Vc3),o($VI3,$Vd3),o($VI3,$Ve3),o($VI3,$Vf3),{107:[1,2909]},o($VI3,$Vk3),o($VK4,$VO4),{19:$Vn,21:$Vo,22:2910,211:52,212:$Vp},{19:$VU7,21:$VV7,22:2912,96:[1,2923],104:[1,2924],105:[1,2925],106:2922,178:2913,188:2911,193:2916,194:2917,195:2918,198:2921,201:[1,2926],202:[1,2927],203:[1,2932],204:[1,2933],205:[1,2934],206:[1,2935],207:[1,2928],208:[1,2929],209:[1,2930],210:[1,2931],211:2915,212:$VW7},o($VG3,$VZ4),o($VJ3,$VC5),o($VJ3,$VE1),o($VJ3,$Vq),o($VJ3,$Vr),o($VJ3,$Vt),o($VJ3,$Vu),o($VC3,$VU3),{117:[1,2936]},o($VC3,$VM3),o($VG4,$VV3),o($VH4,$VO4),{19:$Vn,21:$Vo,22:2937,211:52,212:$Vp},{19:$VX7,21:$VY7,22:2939,96:[1,2950],104:[1,2951],105:[1,2952],106:2949,178:2940,188:2938,193:2943,194:2944,195:2945,198:2948,201:[1,2953],202:[1,2954],203:[1,2959],204:[1,2960],205:[1,2961],206:[1,2962],207:[1,2955],208:[1,2956],209:[1,2957],210:[1,2958],211:2942,212:$VZ7},o($VI4,$VO4),{19:$Vn,21:$Vo,22:2963,211:52,212:$Vp},{19:$V_7,21:$V$7,22:2965,96:[1,2976],104:[1,2977],105:[1,2978],106:2975,178:2966,188:2964,193:2969,194:2970,195:2971,198:2974,201:[1,2979],202:[1,2980],203:[1,2985],204:[1,2986],205:[1,2987],206:[1,2988],207:[1,2981],208:[1,2982],209:[1,2983],210:[1,2984],211:2968,212:$V08},o($VI3,$Vb3),o($VI3,$Vc3),o($VI3,$Vd3),o($VI3,$Ve3),o($VI3,$Vf3),{107:[1,2989]},o($VI3,$Vk3),o($VK4,$VO4),{19:$Vn,21:$Vo,22:2990,211:52,212:$Vp},{19:$V18,21:$V28,22:2992,96:[1,3003],104:[1,3004],105:[1,3005],106:3002,178:2993,188:2991,193:2996,194:2997,195:2998,198:3001,201:[1,3006],202:[1,3007],203:[1,3012],204:[1,3013],205:[1,3014],206:[1,3015],207:[1,3008],208:[1,3009],209:[1,3010],210:[1,3011],211:2995,212:$V38},o($VG3,$VZ4),o($VJ3,$VC5),o($VJ3,$VE1),o($VJ3,$Vq),o($VJ3,$Vr),o($VJ3,$Vt),o($VJ3,$Vu),o($V48,$Vv2,{79:3016,80:3017,189:3018,187:$V58}),o($VH6,$V68),o($Vx,$Vg,{51:3020,55:3021,36:3022,39:$Vy}),o($VJ6,$V78),o($Vx,$Vg,{55:3023,36:3024,39:$Vy}),o($VJ6,$V88),o($VJ6,$V98),o($VJ6,$Vp7),o($VJ6,$Vq7),{115:[1,3025],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VJ6,$V11),o($VJ6,$V21),{19:[1,3029],21:[1,3033],22:3027,32:3026,197:3028,211:3030,212:[1,3032],213:[1,3031]},o($VJ6,$Va8),o($VJ6,$Vb8),o($Vc8,$Vr1,{89:3034}),o($VJ6,$Vs1,{95:2471,91:3035,97:$Vj7,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA1),o($Vc8,$VB1),o($Vc8,$VC1),o($Vc8,$VD1),{96:[1,3036]},o($Vc8,$VJ1),{66:[1,3037]},o($Vm7,$Vz2,{95:1996,91:3038,97:$VL6,98:$VL,99:$VM,100:$VN}),o($Vl7,$VA2),o($VJ6,$VB2,{86:3039,91:3040,87:3041,95:3042,101:3044,103:3045,97:$Vd8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VD2,{86:3039,91:3040,87:3041,95:3042,101:3044,103:3045,97:$Vd8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VE2,{86:3039,91:3040,87:3041,95:3042,101:3044,103:3045,97:$Vd8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vr7,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3046],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3047,117:$VI2,144:$VJ2,186:$VK2}),o($Vo7,$VT1),o($Vo7,$Vl),o($Vo7,$Vm),o($Vo7,$Vq),o($Vo7,$Vr),o($Vo7,$Vs),o($Vo7,$Vt),o($Vo7,$Vu),o($Vl7,$Vb3),o($Vr7,$Vc3),o($Vr7,$Vd3),o($Vr7,$Ve3),o($Vr7,$Vf3),{107:[1,3048]},o($Vr7,$Vk3),o($V48,$Vv2,{80:3017,189:3018,79:3049,187:$V58}),o($Ve8,$VA6,{148:3050,149:3051,152:$Vf8,153:$Vg8,154:$Vh8,155:$Vi8}),o($Vj8,$VG6),o($Vk8,$VI6,{52:3056}),o($Vl8,$VK6,{56:3057}),o($VC,$VD,{59:3058,69:3059,71:3060,72:3061,88:3064,90:3065,83:3067,84:3068,85:3069,74:3070,40:3071,91:3075,22:3076,87:3078,114:3079,95:3083,211:3086,101:3087,103:3088,19:[1,3085],21:[1,3090],65:[1,3062],67:[1,3063],75:[1,3080],76:[1,3081],77:[1,3082],81:[1,3066],92:[1,3072],93:[1,3073],94:[1,3074],97:$Vm8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,3077],212:[1,3089]}),o($Ve8,$VA6,{149:3051,148:3091,152:$Vf8,153:$Vg8,154:$Vh8,155:$Vi8}),o($Vw2,$Vv2,{80:2524,189:2525,79:3092,187:$Vs7}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3093,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:2524,189:2525,79:3094,187:$Vs7}),o($Vo1,$Vz2,{95:2033,91:3095,97:$VM6,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:3096,190:[1,3097]}),{19:$VP3,21:$VQ3,22:627,125:3098,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:3099,190:[1,3100]}),{19:$VP3,21:$VQ3,22:627,125:3101,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,3102]},o($Vt1,$VJ1),{96:[1,3104],102:3103,104:[1,3105],105:[1,3106],106:3107,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3108]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:3109,190:[1,3110]}),{19:$VP3,21:$VQ3,22:627,125:3111,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,3112]},{19:[1,3115],21:[1,3118],22:3114,83:3113,211:3116,212:[1,3117]},o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VN6,21:$VO6,22:3120,83:3119,211:2068,212:$VP6},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VQ6,21:$VR6,22:3122,83:3121,211:2094,212:$VS6},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$VT6,21:$VU6,22:3124,83:3123,211:2121,212:$VV6},o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VW6,21:$VX6,22:3126,83:3125,211:2148,212:$VY6},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VZ6,21:$V_6,22:3128,83:3127,211:2174,212:$V$6},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$V07,21:$V17,22:3130,83:3129,211:2201,212:$V27},o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Va1,$Vz3),o($Va1,$Vk2),o($Va1,$Vf2),o($Va1,$Vg2),o($Vo1,$Vn1,{78:3131}),o($Va1,$V11),o($Va1,$V21),{19:[1,3135],21:[1,3139],22:3133,32:3132,197:3134,211:3136,212:[1,3138],213:[1,3137]},{115:[1,3140],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Va1,$VA3),o($Va1,$Vm2),o($Vo1,$Vn1,{78:3141}),o($Vn2,$Vr1,{89:3142}),o($Vo1,$Vs1,{95:2614,91:3143,97:$Vu7,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA1),o($Vn2,$VB1),o($Vn2,$VC1),o($Vn2,$VD1),{96:[1,3144]},o($Vn2,$VJ1),{66:[1,3145]},o($Vu2,$Vv2,{79:3146,80:3147,189:3148,187:[1,3149]}),o($Vw2,$Vv2,{79:3150,80:3151,189:3152,187:$Vn8}),o($Vm1,$Vz2,{95:2274,91:3154,97:$V37,98:$VL,99:$VM,100:$VN}),o($Vq1,$VA2),o($Vo1,$VB2,{86:3155,91:3156,87:3157,95:3158,101:3160,103:3161,97:$Vo8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VD2,{86:3155,91:3156,87:3157,95:3158,101:3160,103:3161,97:$Vo8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo1,$VE2,{86:3155,91:3156,87:3157,95:3158,101:3160,103:3161,97:$Vo8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VH1,$VF2),o($Vy2,$Vv2,{79:3162,80:3163,189:3164,187:[1,3165]}),o($Ve2,$VT1),o($Ve2,$Vl),o($Ve2,$Vm),o($Ve2,$Vq),o($Ve2,$Vr),o($Ve2,$Vs),o($Ve2,$Vt),o($Ve2,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3166],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3167,117:$VI2,144:$VJ2,186:$VK2}),o($Vq1,$Vb3),o($VH1,$Vc3),o($VH1,$Vd3),o($VH1,$Ve3),o($VH1,$Vf3),{107:[1,3168]},o($VH1,$Vk3),o($Vo1,$VZ4),{190:[1,3171],191:3169,192:[1,3170]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:3172,200:3173,107:[1,3174]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,3177],191:3175,192:[1,3176]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:3178,200:3179,107:[1,3180]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,3183],21:[1,3186],22:3182,83:3181,211:3184,212:[1,3185]},{190:[1,3189],191:3187,192:[1,3188]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:3190,200:3191,107:[1,3192]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($Vo1,$VZ4),{190:[1,3195],191:3193,192:[1,3194]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:3196,200:3197,107:[1,3198]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,3201],191:3199,192:[1,3200]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:3202,200:3203,107:[1,3204]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,3207],21:[1,3210],22:3206,83:3205,211:3208,212:[1,3209]},{190:[1,3213],191:3211,192:[1,3212]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:3214,200:3215,107:[1,3216]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($VE3,$V76),o($VE3,$VE1),o($VF3,$V76),o($VF3,$VE1),o($VG3,$V76),o($VG3,$VE1),o($VC3,$Vz3),o($VC3,$Vk2),o($VC3,$Vf2),o($VC3,$Vg2),o($VF3,$Vn1,{78:3217}),o($VC3,$V11),o($VC3,$V21),{19:[1,3221],21:[1,3225],22:3219,32:3218,197:3220,211:3222,212:[1,3224],213:[1,3223]},{115:[1,3226],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC3,$VA3),o($VC3,$Vm2),o($VF3,$Vn1,{78:3227}),o($VG4,$Vr1,{89:3228}),o($VF3,$Vs1,{95:2827,91:3229,97:$VN7,98:$VL,99:$VM,100:$VN}),o($VG4,$VA1),o($VG4,$VB1),o($VG4,$VC1),o($VG4,$VD1),{96:[1,3230]},o($VG4,$VJ1),{66:[1,3231]},o($VH4,$Vv2,{79:3232,80:3233,189:3234,187:[1,3235]}),o($VI4,$Vv2,{79:3236,80:3237,189:3238,187:$Vp8}),o($VE3,$Vz2,{95:2388,91:3240,97:$V77,98:$VL,99:$VM,100:$VN}),o($VH3,$VA2),o($VF3,$VB2,{86:3241,91:3242,87:3243,95:3244,101:3246,103:3247,97:$Vq8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VD2,{86:3241,91:3242,87:3243,95:3244,101:3246,103:3247,97:$Vq8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VF3,$VE2,{86:3241,91:3242,87:3243,95:3244,101:3246,103:3247,97:$Vq8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ3,$VF2),o($VK4,$Vv2,{79:3248,80:3249,189:3250,187:[1,3251]}),o($VK5,$VT1),o($VK5,$Vl),o($VK5,$Vm),o($VK5,$Vq),o($VK5,$Vr),o($VK5,$Vs),o($VK5,$Vt),o($VK5,$Vu),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3252],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3253,117:$VI2,144:$VJ2,186:$VK2}),o($VH3,$Vb3),o($VJ3,$Vc3),o($VJ3,$Vd3),o($VJ3,$Ve3),o($VJ3,$Vf3),{107:[1,3254]},o($VJ3,$Vk3),o($VF3,$VZ4),{190:[1,3257],191:3255,192:[1,3256]},o($VE3,$VN5),o($VE3,$VO5),o($VE3,$VP5),o($VE3,$Vq),o($VE3,$Vr),o($VE3,$Vk4),o($VE3,$Vl4),o($VE3,$Vm4),o($VE3,$Vt),o($VE3,$Vu),o($VE3,$Vn4),o($VE3,$Vo4,{199:3258,200:3259,107:[1,3260]}),o($VE3,$Vp4),o($VE3,$Vq4),o($VE3,$Vr4),o($VE3,$Vs4),o($VE3,$Vt4),o($VE3,$Vu4),o($VE3,$Vv4),o($VE3,$Vw4),o($VE3,$Vx4),o($V47,$Vg3),o($V47,$Vh3),o($V47,$Vi3),o($V47,$Vj3),{190:[1,3263],191:3261,192:[1,3262]},o($VF3,$VN5),o($VF3,$VO5),o($VF3,$VP5),o($VF3,$Vq),o($VF3,$Vr),o($VF3,$Vk4),o($VF3,$Vl4),o($VF3,$Vm4),o($VF3,$Vt),o($VF3,$Vu),o($VF3,$Vn4),o($VF3,$Vo4,{199:3264,200:3265,107:[1,3266]}),o($VF3,$Vp4),o($VF3,$Vq4),o($VF3,$Vr4),o($VF3,$Vs4),o($VF3,$Vt4),o($VF3,$Vu4),o($VF3,$Vv4),o($VF3,$Vw4),o($VF3,$Vx4),o($V57,$Vg3),o($V57,$Vh3),o($V57,$Vi3),o($V57,$Vj3),{19:[1,3269],21:[1,3272],22:3268,83:3267,211:3270,212:[1,3271]},{190:[1,3275],191:3273,192:[1,3274]},o($VG3,$VN5),o($VG3,$VO5),o($VG3,$VP5),o($VG3,$Vq),o($VG3,$Vr),o($VG3,$Vk4),o($VG3,$Vl4),o($VG3,$Vm4),o($VG3,$Vt),o($VG3,$Vu),o($VG3,$Vn4),o($VG3,$Vo4,{199:3276,200:3277,107:[1,3278]}),o($VG3,$Vp4),o($VG3,$Vq4),o($VG3,$Vr4),o($VG3,$Vs4),o($VG3,$Vt4),o($VG3,$Vu4),o($VG3,$Vv4),o($VG3,$Vw4),o($VG3,$Vx4),o($V67,$Vg3),o($V67,$Vh3),o($V67,$Vi3),o($V67,$Vj3),o($VF3,$VZ4),{190:[1,3281],191:3279,192:[1,3280]},o($VE3,$VN5),o($VE3,$VO5),o($VE3,$VP5),o($VE3,$Vq),o($VE3,$Vr),o($VE3,$Vk4),o($VE3,$Vl4),o($VE3,$Vm4),o($VE3,$Vt),o($VE3,$Vu),o($VE3,$Vn4),o($VE3,$Vo4,{199:3282,200:3283,107:[1,3284]}),o($VE3,$Vp4),o($VE3,$Vq4),o($VE3,$Vr4),o($VE3,$Vs4),o($VE3,$Vt4),o($VE3,$Vu4),o($VE3,$Vv4),o($VE3,$Vw4),o($VE3,$Vx4),o($V47,$Vg3),o($V47,$Vh3),o($V47,$Vi3),o($V47,$Vj3),{190:[1,3287],191:3285,192:[1,3286]},o($VF3,$VN5),o($VF3,$VO5),o($VF3,$VP5),o($VF3,$Vq),o($VF3,$Vr),o($VF3,$Vk4),o($VF3,$Vl4),o($VF3,$Vm4),o($VF3,$Vt),o($VF3,$Vu),o($VF3,$Vn4),o($VF3,$Vo4,{199:3288,200:3289,107:[1,3290]}),o($VF3,$Vp4),o($VF3,$Vq4),o($VF3,$Vr4),o($VF3,$Vs4),o($VF3,$Vt4),o($VF3,$Vu4),o($VF3,$Vv4),o($VF3,$Vw4),o($VF3,$Vx4),o($V57,$Vg3),o($V57,$Vh3),o($V57,$Vi3),o($V57,$Vj3),{19:[1,3293],21:[1,3296],22:3292,83:3291,211:3294,212:[1,3295]},{190:[1,3299],191:3297,192:[1,3298]},o($VG3,$VN5),o($VG3,$VO5),o($VG3,$VP5),o($VG3,$Vq),o($VG3,$Vr),o($VG3,$Vk4),o($VG3,$Vl4),o($VG3,$Vm4),o($VG3,$Vt),o($VG3,$Vu),o($VG3,$Vn4),o($VG3,$Vo4,{199:3300,200:3301,107:[1,3302]}),o($VG3,$Vp4),o($VG3,$Vq4),o($VG3,$Vr4),o($VG3,$Vs4),o($VG3,$Vt4),o($VG3,$Vu4),o($VG3,$Vv4),o($VG3,$Vw4),o($VG3,$Vx4),o($V67,$Vg3),o($V67,$Vh3),o($V67,$Vi3),o($V67,$Vj3),o($Vb4,$Vr8),o($Vz6,$VN3),o($Vb4,$VO3,{31:3303,190:[1,3304]}),{19:$VP3,21:$VQ3,22:627,125:3305,196:$VR3,211:630,212:$VS3},o($VH6,$Vs8),o($VJ6,$VK6,{56:3306}),o($VC,$VD,{59:3307,69:3308,71:3309,72:3310,88:3313,90:3314,83:3316,84:3317,85:3318,74:3319,40:3320,91:3324,22:3325,87:3327,114:3328,95:3332,211:3335,101:3336,103:3337,19:[1,3334],21:[1,3339],65:[1,3311],67:[1,3312],75:[1,3329],76:[1,3330],77:[1,3331],81:[1,3315],92:[1,3321],93:[1,3322],94:[1,3323],97:$Vt8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,3326],212:[1,3338]}),o($VJ6,$Vu8),o($VC,$VD,{59:3340,69:3341,71:3342,72:3343,88:3346,90:3347,83:3349,84:3350,85:3351,74:3352,40:3353,91:3357,22:3358,87:3360,114:3361,95:3365,211:3368,101:3369,103:3370,19:[1,3367],21:[1,3372],65:[1,3344],67:[1,3345],75:[1,3362],76:[1,3363],77:[1,3364],81:[1,3348],92:[1,3354],93:[1,3355],94:[1,3356],97:$Vv8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,3359],212:[1,3371]}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3373,117:$VI2,144:$VJ2,186:$VK2}),o($VJ6,$VT1),o($VJ6,$Vl),o($VJ6,$Vm),o($VJ6,$Vq),o($VJ6,$Vr),o($VJ6,$Vs),o($VJ6,$Vt),o($VJ6,$Vu),o($VJ6,$Vz2,{95:2471,91:3374,97:$Vj7,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA2),o($Vc8,$Vb3),o($VJ6,$Vw8),o($Vl7,$VV3),o($Vn7,$VW3),o($Vn7,$VX3),o($Vn7,$VY3),{96:[1,3375]},o($Vn7,$VJ1),{96:[1,3377],102:3376,104:[1,3378],105:[1,3379],106:3380,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3381]},o($Vn7,$Vh4),{117:[1,3382]},{19:[1,3385],21:[1,3388],22:3384,83:3383,211:3386,212:[1,3387]},o($Vb4,$Vx8),o($Ve8,$Vn1,{78:3389}),o($Ve8,$V87),o($Ve8,$V97),o($Ve8,$Va7),o($Ve8,$Vb7),o($Ve8,$Vc7),o($Vj8,$Vd7,{53:3390,47:[1,3391]}),o($Vk8,$Ve7,{57:3392,49:[1,3393]}),o($Vl8,$Vf7),o($Vl8,$Vg7,{70:3394,72:3395,74:3396,40:3397,114:3398,75:[1,3399],76:[1,3400],77:[1,3401],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Vl8,$Vh7),o($Vl8,$Vi7,{73:3402,69:3403,88:3404,90:3405,91:3409,95:3410,92:[1,3406],93:[1,3407],94:[1,3408],97:$Vy8,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:3412,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Vl8,$Vk7),o($Vz8,$Vr1,{89:3413}),o($VA8,$Vs1,{95:3083,91:3414,97:$Vm8,98:$VL,99:$VM,100:$VN}),o($VB8,$Vu1,{82:3415}),o($VB8,$Vu1,{82:3416}),o($VB8,$Vu1,{82:3417}),o($Vl8,$Vv1,{101:3087,103:3088,87:3418,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VC8,$Vp7),o($VC8,$Vq7),o($Vz8,$VA1),o($Vz8,$VB1),o($Vz8,$VC1),o($Vz8,$VD1),o($VB8,$VE1),o($VF1,$VG1,{159:3419}),o($VD8,$VI1),{115:[1,3420],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC8,$V11),o($VC8,$V21),{19:[1,3424],21:[1,3428],22:3422,32:3421,197:3423,211:3425,212:[1,3427],213:[1,3426]},{96:[1,3429]},o($Vz8,$VJ1),o($VB8,$Vq),o($VB8,$Vr),{96:[1,3431],102:3430,104:[1,3432],105:[1,3433],106:3434,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3435]},o($VB8,$Vt),o($VB8,$Vu),o($Ve8,$Vn1,{78:3436}),o($Va1,$VU3),{117:[1,3437]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:3438,211:52,212:$Vp},{19:$VE8,21:$VF8,22:3440,96:[1,3451],104:[1,3452],105:[1,3453],106:3450,178:3441,188:3439,193:3444,194:3445,195:3446,198:3449,201:[1,3454],202:[1,3455],203:[1,3460],204:[1,3461],205:[1,3462],206:[1,3463],207:[1,3456],208:[1,3457],209:[1,3458],210:[1,3459],211:3443,212:$VG8},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:3464,211:52,212:$Vp},{19:$VH8,21:$VI8,22:3466,96:[1,3477],104:[1,3478],105:[1,3479],106:3476,178:3467,188:3465,193:3470,194:3471,195:3472,198:3475,201:[1,3480],202:[1,3481],203:[1,3486],204:[1,3487],205:[1,3488],206:[1,3489],207:[1,3482],208:[1,3483],209:[1,3484],210:[1,3485],211:3469,212:$VJ8},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,3490]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:3491,211:52,212:$Vp},{19:$VK8,21:$VL8,22:3493,96:[1,3504],104:[1,3505],105:[1,3506],106:3503,178:3494,188:3492,193:3497,194:3498,195:3499,198:3502,201:[1,3507],202:[1,3508],203:[1,3513],204:[1,3514],205:[1,3515],206:[1,3516],207:[1,3509],208:[1,3510],209:[1,3511],210:[1,3512],211:3496,212:$VM8},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Vw2,$Vv2,{80:3151,189:3152,79:3517,187:$Vn8}),o($Va1,$VT1),o($Va1,$Vl),o($Va1,$Vm),o($Va1,$Vq),o($Va1,$Vr),o($Va1,$Vs),o($Va1,$Vt),o($Va1,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3518,117:$VI2,144:$VJ2,186:$VK2}),o($Vw2,$Vv2,{80:3151,189:3152,79:3519,187:$Vn8}),o($Vo1,$Vz2,{95:2614,91:3520,97:$Vu7,98:$VL,99:$VM,100:$VN}),o($Vn2,$VA2),o($Vn2,$Vb3),o($Va1,$VF4),o($VL3,$VM3),o($Vm1,$VN3),o($VL3,$VO3,{31:3521,190:[1,3522]}),{19:$VP3,21:$VQ3,22:627,125:3523,196:$VR3,211:630,212:$VS3},o($Va1,$VT3),o($Vo1,$VN3),o($Va1,$VO3,{31:3524,190:[1,3525]}),{19:$VP3,21:$VQ3,22:627,125:3526,196:$VR3,211:630,212:$VS3},o($Vq1,$VV3),o($Vt1,$VW3),o($Vt1,$VX3),o($Vt1,$VY3),{96:[1,3527]},o($Vt1,$VJ1),{96:[1,3529],102:3528,104:[1,3530],105:[1,3531],106:3532,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3533]},o($Ve2,$VU3),o($Vp1,$VN3),o($Ve2,$VO3,{31:3534,190:[1,3535]}),{19:$VP3,21:$VQ3,22:627,125:3536,196:$VR3,211:630,212:$VS3},o($Vt1,$Vh4),{117:[1,3537]},{19:[1,3540],21:[1,3543],22:3539,83:3538,211:3541,212:[1,3542]},o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$Vv7,21:$Vw7,22:3545,83:3544,211:2649,212:$Vx7},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$Vy7,21:$Vz7,22:3547,83:3546,211:2675,212:$VA7},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$VB7,21:$VC7,22:3549,83:3548,211:2702,212:$VD7},o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VE7,21:$VF7,22:3551,83:3550,211:2729,212:$VG7},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VH7,21:$VI7,22:3553,83:3552,211:2755,212:$VJ7},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$VK7,21:$VL7,22:3555,83:3554,211:2782,212:$VM7},o($VI4,$Vv2,{80:3237,189:3238,79:3556,187:$Vp8}),o($VC3,$VT1),o($VC3,$Vl),o($VC3,$Vm),o($VC3,$Vq),o($VC3,$Vr),o($VC3,$Vs),o($VC3,$Vt),o($VC3,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3557,117:$VI2,144:$VJ2,186:$VK2}),o($VI4,$Vv2,{80:3237,189:3238,79:3558,187:$Vp8}),o($VF3,$Vz2,{95:2827,91:3559,97:$VN7,98:$VL,99:$VM,100:$VN}),o($VG4,$VA2),o($VG4,$Vb3),o($VC3,$VF4),o($VJ5,$VM3),o($VE3,$VN3),o($VJ5,$VO3,{31:3560,190:[1,3561]}),{19:$VP3,21:$VQ3,22:627,125:3562,196:$VR3,211:630,212:$VS3},o($VC3,$VT3),o($VF3,$VN3),o($VC3,$VO3,{31:3563,190:[1,3564]}),{19:$VP3,21:$VQ3,22:627,125:3565,196:$VR3,211:630,212:$VS3},o($VH3,$VV3),o($VI3,$VW3),o($VI3,$VX3),o($VI3,$VY3),{96:[1,3566]},o($VI3,$VJ1),{96:[1,3568],102:3567,104:[1,3569],105:[1,3570],106:3571,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3572]},o($VK5,$VU3),o($VG3,$VN3),o($VK5,$VO3,{31:3573,190:[1,3574]}),{19:$VP3,21:$VQ3,22:627,125:3575,196:$VR3,211:630,212:$VS3},o($VI3,$Vh4),{117:[1,3576]},{19:[1,3579],21:[1,3582],22:3578,83:3577,211:3580,212:[1,3581]},o($VH4,$VU1),o($VH4,$VV1),o($VH4,$VW1),o($VE3,$VA5),o($VE3,$VB5),{19:$VO7,21:$VP7,22:3584,83:3583,211:2862,212:$VQ7},o($VI4,$VU1),o($VI4,$VV1),o($VI4,$VW1),o($VF3,$VA5),o($VF3,$VB5),{19:$VR7,21:$VS7,22:3586,83:3585,211:2888,212:$VT7},o($VI3,$VC5),o($VI3,$VE1),o($VI3,$Vq),o($VI3,$Vr),o($VI3,$Vt),o($VI3,$Vu),o($VK4,$VU1),o($VK4,$VV1),o($VK4,$VW1),o($VG3,$VA5),o($VG3,$VB5),{19:$VU7,21:$VV7,22:3588,83:3587,211:2915,212:$VW7},o($VH4,$VU1),o($VH4,$VV1),o($VH4,$VW1),o($VE3,$VA5),o($VE3,$VB5),{19:$VX7,21:$VY7,22:3590,83:3589,211:2942,212:$VZ7},o($VI4,$VU1),o($VI4,$VV1),o($VI4,$VW1),o($VF3,$VA5),o($VF3,$VB5),{19:$V_7,21:$V$7,22:3592,83:3591,211:2968,212:$V08},o($VI3,$VC5),o($VI3,$VE1),o($VI3,$Vq),o($VI3,$Vr),o($VI3,$Vt),o($VI3,$Vu),o($VK4,$VU1),o($VK4,$VV1),o($VK4,$VW1),o($VG3,$VA5),o($VG3,$VB5),{19:$V18,21:$V28,22:3594,83:3593,211:2995,212:$V38},o($V48,$VO4),{19:$Vn,21:$Vo,22:3595,211:52,212:$Vp},{19:$VN8,21:$VO8,22:3597,96:[1,3608],104:[1,3609],105:[1,3610],106:3607,178:3598,188:3596,193:3601,194:3602,195:3603,198:3606,201:[1,3611],202:[1,3612],203:[1,3617],204:[1,3618],205:[1,3619],206:[1,3620],207:[1,3613],208:[1,3614],209:[1,3615],210:[1,3616],211:3600,212:$VP8},o($VH6,$Ve7,{57:3621,49:[1,3622]}),o($VJ6,$Vf7),o($VJ6,$Vg7,{70:3623,72:3624,74:3625,40:3626,114:3627,75:[1,3628],76:[1,3629],77:[1,3630],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($VJ6,$Vh7),o($VJ6,$Vi7,{73:3631,69:3632,88:3633,90:3634,91:3638,95:3639,92:[1,3635],93:[1,3636],94:[1,3637],97:$VQ8,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:3641,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VJ6,$Vk7),o($Vl7,$Vr1,{89:3642}),o($Vm7,$Vs1,{95:3332,91:3643,97:$Vt8,98:$VL,99:$VM,100:$VN}),o($Vn7,$Vu1,{82:3644}),o($Vn7,$Vu1,{82:3645}),o($Vn7,$Vu1,{82:3646}),o($VJ6,$Vv1,{101:3336,103:3337,87:3647,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo7,$Vp7),o($Vo7,$Vq7),o($Vl7,$VA1),o($Vl7,$VB1),o($Vl7,$VC1),o($Vl7,$VD1),o($Vn7,$VE1),o($VF1,$VG1,{159:3648}),o($Vr7,$VI1),{115:[1,3649],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vo7,$V11),o($Vo7,$V21),{19:[1,3653],21:[1,3657],22:3651,32:3650,197:3652,211:3654,212:[1,3656],213:[1,3655]},{96:[1,3658]},o($Vl7,$VJ1),o($Vn7,$Vq),o($Vn7,$Vr),{96:[1,3660],102:3659,104:[1,3661],105:[1,3662],106:3663,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3664]},o($Vn7,$Vt),o($Vn7,$Vu),o($VJ6,$Vf7),o($VJ6,$Vg7,{70:3665,72:3666,74:3667,40:3668,114:3669,75:[1,3670],76:[1,3671],77:[1,3672],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($VJ6,$Vh7),o($VJ6,$Vi7,{73:3673,69:3674,88:3675,90:3676,91:3680,95:3681,92:[1,3677],93:[1,3678],94:[1,3679],97:$VR8,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:3683,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VJ6,$Vk7),o($Vl7,$Vr1,{89:3684}),o($Vm7,$Vs1,{95:3365,91:3685,97:$Vv8,98:$VL,99:$VM,100:$VN}),o($Vn7,$Vu1,{82:3686}),o($Vn7,$Vu1,{82:3687}),o($Vn7,$Vu1,{82:3688}),o($VJ6,$Vv1,{101:3369,103:3370,87:3689,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo7,$Vp7),o($Vo7,$Vq7),o($Vl7,$VA1),o($Vl7,$VB1),o($Vl7,$VC1),o($Vl7,$VD1),o($Vn7,$VE1),o($VF1,$VG1,{159:3690}),o($Vr7,$VI1),{115:[1,3691],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vo7,$V11),o($Vo7,$V21),{19:[1,3695],21:[1,3699],22:3693,32:3692,197:3694,211:3696,212:[1,3698],213:[1,3697]},{96:[1,3700]},o($Vl7,$VJ1),o($Vn7,$Vq),o($Vn7,$Vr),{96:[1,3702],102:3701,104:[1,3703],105:[1,3704],106:3705,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,3706]},o($Vn7,$Vt),o($Vn7,$Vu),{117:[1,3707]},o($Vc8,$VV3),o($Vn7,$Vb3),o($Vn7,$Vc3),o($Vn7,$Vd3),o($Vn7,$Ve3),o($Vn7,$Vf3),{107:[1,3708]},o($Vn7,$Vk3),o($Vo7,$VZ4),o($Vr7,$VC5),o($Vr7,$VE1),o($Vr7,$Vq),o($Vr7,$Vr),o($Vr7,$Vt),o($Vr7,$Vu),o($VS8,$Vv2,{79:3709,80:3710,189:3711,187:$VT8}),o($Vk8,$V68),o($Vx,$Vg,{51:3713,55:3714,36:3715,39:$Vy}),o($Vl8,$V78),o($Vx,$Vg,{55:3716,36:3717,39:$Vy}),o($Vl8,$V88),o($Vl8,$V98),o($Vl8,$Vp7),o($Vl8,$Vq7),{115:[1,3718],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vl8,$V11),o($Vl8,$V21),{19:[1,3722],21:[1,3726],22:3720,32:3719,197:3721,211:3723,212:[1,3725],213:[1,3724]},o($Vl8,$Va8),o($Vl8,$Vb8),o($VU8,$Vr1,{89:3727}),o($Vl8,$Vs1,{95:3410,91:3728,97:$Vy8,98:$VL,99:$VM,100:$VN}),o($VU8,$VA1),o($VU8,$VB1),o($VU8,$VC1),o($VU8,$VD1),{96:[1,3729]},o($VU8,$VJ1),{66:[1,3730]},o($VA8,$Vz2,{95:3083,91:3731,97:$Vm8,98:$VL,99:$VM,100:$VN}),o($Vz8,$VA2),o($Vl8,$VB2,{86:3732,91:3733,87:3734,95:3735,101:3737,103:3738,97:$VV8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VD2,{86:3732,91:3733,87:3734,95:3735,101:3737,103:3738,97:$VV8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VE2,{86:3732,91:3733,87:3734,95:3735,101:3737,103:3738,97:$VV8,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VD8,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3739],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3740,117:$VI2,144:$VJ2,186:$VK2}),o($VC8,$VT1),o($VC8,$Vl),o($VC8,$Vm),o($VC8,$Vq),o($VC8,$Vr),o($VC8,$Vs),o($VC8,$Vt),o($VC8,$Vu),o($Vz8,$Vb3),o($VD8,$Vc3),o($VD8,$Vd3),o($VD8,$Ve3),o($VD8,$Vf3),{107:[1,3741]},o($VD8,$Vk3),o($VS8,$Vv2,{80:3710,189:3711,79:3742,187:$VT8}),o($Vo1,$VZ4),{190:[1,3745],191:3743,192:[1,3744]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:3746,200:3747,107:[1,3748]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,3751],191:3749,192:[1,3750]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:3752,200:3753,107:[1,3754]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,3757],21:[1,3760],22:3756,83:3755,211:3758,212:[1,3759]},{190:[1,3763],191:3761,192:[1,3762]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:3764,200:3765,107:[1,3766]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($Va1,$VU3),{117:[1,3767]},o($Va1,$VM3),o($Vn2,$VV3),o($Vu2,$VO4),{19:$Vn,21:$Vo,22:3768,211:52,212:$Vp},{19:$VW8,21:$VX8,22:3770,96:[1,3781],104:[1,3782],105:[1,3783],106:3780,178:3771,188:3769,193:3774,194:3775,195:3776,198:3779,201:[1,3784],202:[1,3785],203:[1,3790],204:[1,3791],205:[1,3792],206:[1,3793],207:[1,3786],208:[1,3787],209:[1,3788],210:[1,3789],211:3773,212:$VY8},o($Vw2,$VO4),{19:$Vn,21:$Vo,22:3794,211:52,212:$Vp},{19:$VZ8,21:$V_8,22:3796,96:[1,3807],104:[1,3808],105:[1,3809],106:3806,178:3797,188:3795,193:3800,194:3801,195:3802,198:3805,201:[1,3810],202:[1,3811],203:[1,3816],204:[1,3817],205:[1,3818],206:[1,3819],207:[1,3812],208:[1,3813],209:[1,3814],210:[1,3815],211:3799,212:$V$8},o($Vt1,$Vb3),o($Vt1,$Vc3),o($Vt1,$Vd3),o($Vt1,$Ve3),o($Vt1,$Vf3),{107:[1,3820]},o($Vt1,$Vk3),o($Vy2,$VO4),{19:$Vn,21:$Vo,22:3821,211:52,212:$Vp},{19:$V09,21:$V19,22:3823,96:[1,3834],104:[1,3835],105:[1,3836],106:3833,178:3824,188:3822,193:3827,194:3828,195:3829,198:3832,201:[1,3837],202:[1,3838],203:[1,3843],204:[1,3844],205:[1,3845],206:[1,3846],207:[1,3839],208:[1,3840],209:[1,3841],210:[1,3842],211:3826,212:$V29},o($Vp1,$VZ4),o($VH1,$VC5),o($VH1,$VE1),o($VH1,$Vq),o($VH1,$Vr),o($VH1,$Vt),o($VH1,$Vu),o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($VC3,$VU3),{117:[1,3847]},o($VC3,$VM3),o($VG4,$VV3),o($VH4,$VO4),{19:$Vn,21:$Vo,22:3848,211:52,212:$Vp},{19:$V39,21:$V49,22:3850,96:[1,3861],104:[1,3862],105:[1,3863],106:3860,178:3851,188:3849,193:3854,194:3855,195:3856,198:3859,201:[1,3864],202:[1,3865],203:[1,3870],204:[1,3871],205:[1,3872],206:[1,3873],207:[1,3866],208:[1,3867],209:[1,3868],210:[1,3869],211:3853,212:$V59},o($VI4,$VO4),{19:$Vn,21:$Vo,22:3874,211:52,212:$Vp},{19:$V69,21:$V79,22:3876,96:[1,3887],104:[1,3888],105:[1,3889],106:3886,178:3877,188:3875,193:3880,194:3881,195:3882,198:3885,201:[1,3890],202:[1,3891],203:[1,3896],204:[1,3897],205:[1,3898],206:[1,3899],207:[1,3892],208:[1,3893],209:[1,3894],210:[1,3895],211:3879,212:$V89},o($VI3,$Vb3),o($VI3,$Vc3),o($VI3,$Vd3),o($VI3,$Ve3),o($VI3,$Vf3),{107:[1,3900]},o($VI3,$Vk3),o($VK4,$VO4),{19:$Vn,21:$Vo,22:3901,211:52,212:$Vp},{19:$V99,21:$Va9,22:3903,96:[1,3914],104:[1,3915],105:[1,3916],106:3913,178:3904,188:3902,193:3907,194:3908,195:3909,198:3912,201:[1,3917],202:[1,3918],203:[1,3923],204:[1,3924],205:[1,3925],206:[1,3926],207:[1,3919],208:[1,3920],209:[1,3921],210:[1,3922],211:3906,212:$Vb9},o($VG3,$VZ4),o($VJ3,$VC5),o($VJ3,$VE1),o($VJ3,$Vq),o($VJ3,$Vr),o($VJ3,$Vt),o($VJ3,$Vu),o($VE3,$V76),o($VE3,$VE1),o($VF3,$V76),o($VF3,$VE1),o($VG3,$V76),o($VG3,$VE1),o($VE3,$V76),o($VE3,$VE1),o($VF3,$V76),o($VF3,$VE1),o($VG3,$V76),o($VG3,$VE1),{190:[1,3929],191:3927,192:[1,3928]},o($Vz6,$VN5),o($Vz6,$VO5),o($Vz6,$VP5),o($Vz6,$Vq),o($Vz6,$Vr),o($Vz6,$Vk4),o($Vz6,$Vl4),o($Vz6,$Vm4),o($Vz6,$Vt),o($Vz6,$Vu),o($Vz6,$Vn4),o($Vz6,$Vo4,{199:3930,200:3931,107:[1,3932]}),o($Vz6,$Vp4),o($Vz6,$Vq4),o($Vz6,$Vr4),o($Vz6,$Vs4),o($Vz6,$Vt4),o($Vz6,$Vu4),o($Vz6,$Vv4),o($Vz6,$Vw4),o($Vz6,$Vx4),o($Vc9,$Vg3),o($Vc9,$Vh3),o($Vc9,$Vi3),o($Vc9,$Vj3),o($VJ6,$V78),o($Vx,$Vg,{55:3933,36:3934,39:$Vy}),o($VJ6,$V88),o($VJ6,$V98),o($VJ6,$Vp7),o($VJ6,$Vq7),{115:[1,3935],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VJ6,$V11),o($VJ6,$V21),{19:[1,3939],21:[1,3943],22:3937,32:3936,197:3938,211:3940,212:[1,3942],213:[1,3941]},o($VJ6,$Va8),o($VJ6,$Vb8),o($Vc8,$Vr1,{89:3944}),o($VJ6,$Vs1,{95:3639,91:3945,97:$VQ8,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA1),o($Vc8,$VB1),o($Vc8,$VC1),o($Vc8,$VD1),{96:[1,3946]},o($Vc8,$VJ1),{66:[1,3947]},o($Vm7,$Vz2,{95:3332,91:3948,97:$Vt8,98:$VL,99:$VM,100:$VN}),o($Vl7,$VA2),o($VJ6,$VB2,{86:3949,91:3950,87:3951,95:3952,101:3954,103:3955,97:$Vd9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VD2,{86:3949,91:3950,87:3951,95:3952,101:3954,103:3955,97:$Vd9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VE2,{86:3949,91:3950,87:3951,95:3952,101:3954,103:3955,97:$Vd9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vr7,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3956],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3957,117:$VI2,144:$VJ2,186:$VK2}),o($Vo7,$VT1),o($Vo7,$Vl),o($Vo7,$Vm),o($Vo7,$Vq),o($Vo7,$Vr),o($Vo7,$Vs),o($Vo7,$Vt),o($Vo7,$Vu),o($Vl7,$Vb3),o($Vr7,$Vc3),o($Vr7,$Vd3),o($Vr7,$Ve3),o($Vr7,$Vf3),{107:[1,3958]},o($Vr7,$Vk3),o($VJ6,$V88),o($VJ6,$V98),o($VJ6,$Vp7),o($VJ6,$Vq7),{115:[1,3959],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VJ6,$V11),o($VJ6,$V21),{19:[1,3963],21:[1,3967],22:3961,32:3960,197:3962,211:3964,212:[1,3966],213:[1,3965]},o($VJ6,$Va8),o($VJ6,$Vb8),o($Vc8,$Vr1,{89:3968}),o($VJ6,$Vs1,{95:3681,91:3969,97:$VR8,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA1),o($Vc8,$VB1),o($Vc8,$VC1),o($Vc8,$VD1),{96:[1,3970]},o($Vc8,$VJ1),{66:[1,3971]},o($Vm7,$Vz2,{95:3365,91:3972,97:$Vv8,98:$VL,99:$VM,100:$VN}),o($Vl7,$VA2),o($VJ6,$VB2,{86:3973,91:3974,87:3975,95:3976,101:3978,103:3979,97:$Ve9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VD2,{86:3973,91:3974,87:3975,95:3976,101:3978,103:3979,97:$Ve9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VE2,{86:3973,91:3974,87:3975,95:3976,101:3978,103:3979,97:$Ve9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vr7,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,3980],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:3981,117:$VI2,144:$VJ2,186:$VK2}),o($Vo7,$VT1),o($Vo7,$Vl),o($Vo7,$Vm),o($Vo7,$Vq),o($Vo7,$Vr),o($Vo7,$Vs),o($Vo7,$Vt),o($Vo7,$Vu),o($Vl7,$Vb3),o($Vr7,$Vc3),o($Vr7,$Vd3),o($Vr7,$Ve3),o($Vr7,$Vf3),{107:[1,3982]},o($Vr7,$Vk3),o($VJ6,$VZ4),{19:[1,3985],21:[1,3988],22:3984,83:3983,211:3986,212:[1,3987]},o($V26,$Vr8),o($Ve8,$VN3),o($V26,$VO3,{31:3989,190:[1,3990]}),{19:$VP3,21:$VQ3,22:627,125:3991,196:$VR3,211:630,212:$VS3},o($Vk8,$Vs8),o($Vl8,$VK6,{56:3992}),o($VC,$VD,{59:3993,69:3994,71:3995,72:3996,88:3999,90:4000,83:4002,84:4003,85:4004,74:4005,40:4006,91:4010,22:4011,87:4013,114:4014,95:4018,211:4021,101:4022,103:4023,19:[1,4020],21:[1,4025],65:[1,3997],67:[1,3998],75:[1,4015],76:[1,4016],77:[1,4017],81:[1,4001],92:[1,4007],93:[1,4008],94:[1,4009],97:$Vf9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,4012],212:[1,4024]}),o($Vl8,$Vu8),o($VC,$VD,{59:4026,69:4027,71:4028,72:4029,88:4032,90:4033,83:4035,84:4036,85:4037,74:4038,40:4039,91:4043,22:4044,87:4046,114:4047,95:4051,211:4054,101:4055,103:4056,19:[1,4053],21:[1,4058],65:[1,4030],67:[1,4031],75:[1,4048],76:[1,4049],77:[1,4050],81:[1,4034],92:[1,4040],93:[1,4041],94:[1,4042],97:$Vg9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,4045],212:[1,4057]}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4059,117:$VI2,144:$VJ2,186:$VK2}),o($Vl8,$VT1),o($Vl8,$Vl),o($Vl8,$Vm),o($Vl8,$Vq),o($Vl8,$Vr),o($Vl8,$Vs),o($Vl8,$Vt),o($Vl8,$Vu),o($Vl8,$Vz2,{95:3410,91:4060,97:$Vy8,98:$VL,99:$VM,100:$VN}),o($VU8,$VA2),o($VU8,$Vb3),o($Vl8,$Vw8),o($Vz8,$VV3),o($VB8,$VW3),o($VB8,$VX3),o($VB8,$VY3),{96:[1,4061]},o($VB8,$VJ1),{96:[1,4063],102:4062,104:[1,4064],105:[1,4065],106:4066,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4067]},o($VB8,$Vh4),{117:[1,4068]},{19:[1,4071],21:[1,4074],22:4070,83:4069,211:4072,212:[1,4073]},o($V26,$Vx8),o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VE8,21:$VF8,22:4076,83:4075,211:3443,212:$VG8},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VH8,21:$VI8,22:4078,83:4077,211:3469,212:$VJ8},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$VK8,21:$VL8,22:4080,83:4079,211:3496,212:$VM8},o($Vo1,$VZ4),{190:[1,4083],191:4081,192:[1,4082]},o($Vm1,$VN5),o($Vm1,$VO5),o($Vm1,$VP5),o($Vm1,$Vq),o($Vm1,$Vr),o($Vm1,$Vk4),o($Vm1,$Vl4),o($Vm1,$Vm4),o($Vm1,$Vt),o($Vm1,$Vu),o($Vm1,$Vn4),o($Vm1,$Vo4,{199:4084,200:4085,107:[1,4086]}),o($Vm1,$Vp4),o($Vm1,$Vq4),o($Vm1,$Vr4),o($Vm1,$Vs4),o($Vm1,$Vt4),o($Vm1,$Vu4),o($Vm1,$Vv4),o($Vm1,$Vw4),o($Vm1,$Vx4),o($VQ5,$Vg3),o($VQ5,$Vh3),o($VQ5,$Vi3),o($VQ5,$Vj3),{190:[1,4089],191:4087,192:[1,4088]},o($Vo1,$VN5),o($Vo1,$VO5),o($Vo1,$VP5),o($Vo1,$Vq),o($Vo1,$Vr),o($Vo1,$Vk4),o($Vo1,$Vl4),o($Vo1,$Vm4),o($Vo1,$Vt),o($Vo1,$Vu),o($Vo1,$Vn4),o($Vo1,$Vo4,{199:4090,200:4091,107:[1,4092]}),o($Vo1,$Vp4),o($Vo1,$Vq4),o($Vo1,$Vr4),o($Vo1,$Vs4),o($Vo1,$Vt4),o($Vo1,$Vu4),o($Vo1,$Vv4),o($Vo1,$Vw4),o($Vo1,$Vx4),o($VR5,$Vg3),o($VR5,$Vh3),o($VR5,$Vi3),o($VR5,$Vj3),{19:[1,4095],21:[1,4098],22:4094,83:4093,211:4096,212:[1,4097]},{190:[1,4101],191:4099,192:[1,4100]},o($Vp1,$VN5),o($Vp1,$VO5),o($Vp1,$VP5),o($Vp1,$Vq),o($Vp1,$Vr),o($Vp1,$Vk4),o($Vp1,$Vl4),o($Vp1,$Vm4),o($Vp1,$Vt),o($Vp1,$Vu),o($Vp1,$Vn4),o($Vp1,$Vo4,{199:4102,200:4103,107:[1,4104]}),o($Vp1,$Vp4),o($Vp1,$Vq4),o($Vp1,$Vr4),o($Vp1,$Vs4),o($Vp1,$Vt4),o($Vp1,$Vu4),o($Vp1,$Vv4),o($Vp1,$Vw4),o($Vp1,$Vx4),o($VS5,$Vg3),o($VS5,$Vh3),o($VS5,$Vi3),o($VS5,$Vj3),o($VF3,$VZ4),{190:[1,4107],191:4105,192:[1,4106]},o($VE3,$VN5),o($VE3,$VO5),o($VE3,$VP5),o($VE3,$Vq),o($VE3,$Vr),o($VE3,$Vk4),o($VE3,$Vl4),o($VE3,$Vm4),o($VE3,$Vt),o($VE3,$Vu),o($VE3,$Vn4),o($VE3,$Vo4,{199:4108,200:4109,107:[1,4110]}),o($VE3,$Vp4),o($VE3,$Vq4),o($VE3,$Vr4),o($VE3,$Vs4),o($VE3,$Vt4),o($VE3,$Vu4),o($VE3,$Vv4),o($VE3,$Vw4),o($VE3,$Vx4),o($V47,$Vg3),o($V47,$Vh3),o($V47,$Vi3),o($V47,$Vj3),{190:[1,4113],191:4111,192:[1,4112]},o($VF3,$VN5),o($VF3,$VO5),o($VF3,$VP5),o($VF3,$Vq),o($VF3,$Vr),o($VF3,$Vk4),o($VF3,$Vl4),o($VF3,$Vm4),o($VF3,$Vt),o($VF3,$Vu),o($VF3,$Vn4),o($VF3,$Vo4,{199:4114,200:4115,107:[1,4116]}),o($VF3,$Vp4),o($VF3,$Vq4),o($VF3,$Vr4),o($VF3,$Vs4),o($VF3,$Vt4),o($VF3,$Vu4),o($VF3,$Vv4),o($VF3,$Vw4),o($VF3,$Vx4),o($V57,$Vg3),o($V57,$Vh3),o($V57,$Vi3),o($V57,$Vj3),{19:[1,4119],21:[1,4122],22:4118,83:4117,211:4120,212:[1,4121]},{190:[1,4125],191:4123,192:[1,4124]},o($VG3,$VN5),o($VG3,$VO5),o($VG3,$VP5),o($VG3,$Vq),o($VG3,$Vr),o($VG3,$Vk4),o($VG3,$Vl4),o($VG3,$Vm4),o($VG3,$Vt),o($VG3,$Vu),o($VG3,$Vn4),o($VG3,$Vo4,{199:4126,200:4127,107:[1,4128]}),o($VG3,$Vp4),o($VG3,$Vq4),o($VG3,$Vr4),o($VG3,$Vs4),o($VG3,$Vt4),o($VG3,$Vu4),o($VG3,$Vv4),o($VG3,$Vw4),o($VG3,$Vx4),o($V67,$Vg3),o($V67,$Vh3),o($V67,$Vi3),o($V67,$Vj3),o($V48,$VU1),o($V48,$VV1),o($V48,$VW1),o($Vz6,$VA5),o($Vz6,$VB5),{19:$VN8,21:$VO8,22:4130,83:4129,211:3600,212:$VP8},o($VJ6,$Vu8),o($VC,$VD,{59:4131,69:4132,71:4133,72:4134,88:4137,90:4138,83:4140,84:4141,85:4142,74:4143,40:4144,91:4148,22:4149,87:4151,114:4152,95:4156,211:4159,101:4160,103:4161,19:[1,4158],21:[1,4163],65:[1,4135],67:[1,4136],75:[1,4153],76:[1,4154],77:[1,4155],81:[1,4139],92:[1,4145],93:[1,4146],94:[1,4147],97:$Vh9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,4150],212:[1,4162]}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4164,117:$VI2,144:$VJ2,186:$VK2}),o($VJ6,$VT1),o($VJ6,$Vl),o($VJ6,$Vm),o($VJ6,$Vq),o($VJ6,$Vr),o($VJ6,$Vs),o($VJ6,$Vt),o($VJ6,$Vu),o($VJ6,$Vz2,{95:3639,91:4165,97:$VQ8,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA2),o($Vc8,$Vb3),o($VJ6,$Vw8),o($Vl7,$VV3),o($Vn7,$VW3),o($Vn7,$VX3),o($Vn7,$VY3),{96:[1,4166]},o($Vn7,$VJ1),{96:[1,4168],102:4167,104:[1,4169],105:[1,4170],106:4171,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4172]},o($Vn7,$Vh4),{117:[1,4173]},{19:[1,4176],21:[1,4179],22:4175,83:4174,211:4177,212:[1,4178]},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4180,117:$VI2,144:$VJ2,186:$VK2}),o($VJ6,$VT1),o($VJ6,$Vl),o($VJ6,$Vm),o($VJ6,$Vq),o($VJ6,$Vr),o($VJ6,$Vs),o($VJ6,$Vt),o($VJ6,$Vu),o($VJ6,$Vz2,{95:3681,91:4181,97:$VR8,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA2),o($Vc8,$Vb3),o($VJ6,$Vw8),o($Vl7,$VV3),o($Vn7,$VW3),o($Vn7,$VX3),o($Vn7,$VY3),{96:[1,4182]},o($Vn7,$VJ1),{96:[1,4184],102:4183,104:[1,4185],105:[1,4186],106:4187,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4188]},o($Vn7,$Vh4),{117:[1,4189]},{19:[1,4192],21:[1,4195],22:4191,83:4190,211:4193,212:[1,4194]},o($Vn7,$VC5),o($Vn7,$VE1),o($Vn7,$Vq),o($Vn7,$Vr),o($Vn7,$Vt),o($Vn7,$Vu),o($VS8,$VO4),{19:$Vn,21:$Vo,22:4196,211:52,212:$Vp},{19:$Vi9,21:$Vj9,22:4198,96:[1,4209],104:[1,4210],105:[1,4211],106:4208,178:4199,188:4197,193:4202,194:4203,195:4204,198:4207,201:[1,4212],202:[1,4213],203:[1,4218],204:[1,4219],205:[1,4220],206:[1,4221],207:[1,4214],208:[1,4215],209:[1,4216],210:[1,4217],211:4201,212:$Vk9},o($Vk8,$Ve7,{57:4222,49:[1,4223]}),o($Vl8,$Vf7),o($Vl8,$Vg7,{70:4224,72:4225,74:4226,40:4227,114:4228,75:[1,4229],76:[1,4230],77:[1,4231],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Vl8,$Vh7),o($Vl8,$Vi7,{73:4232,69:4233,88:4234,90:4235,91:4239,95:4240,92:[1,4236],93:[1,4237],94:[1,4238],97:$Vl9,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:4242,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Vl8,$Vk7),o($Vz8,$Vr1,{89:4243}),o($VA8,$Vs1,{95:4018,91:4244,97:$Vf9,98:$VL,99:$VM,100:$VN}),o($VB8,$Vu1,{82:4245}),o($VB8,$Vu1,{82:4246}),o($VB8,$Vu1,{82:4247}),o($Vl8,$Vv1,{101:4022,103:4023,87:4248,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VC8,$Vp7),o($VC8,$Vq7),o($Vz8,$VA1),o($Vz8,$VB1),o($Vz8,$VC1),o($Vz8,$VD1),o($VB8,$VE1),o($VF1,$VG1,{159:4249}),o($VD8,$VI1),{115:[1,4250],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC8,$V11),o($VC8,$V21),{19:[1,4254],21:[1,4258],22:4252,32:4251,197:4253,211:4255,212:[1,4257],213:[1,4256]},{96:[1,4259]},o($Vz8,$VJ1),o($VB8,$Vq),o($VB8,$Vr),{96:[1,4261],102:4260,104:[1,4262],105:[1,4263],106:4264,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4265]},o($VB8,$Vt),o($VB8,$Vu),o($Vl8,$Vf7),o($Vl8,$Vg7,{70:4266,72:4267,74:4268,40:4269,114:4270,75:[1,4271],76:[1,4272],77:[1,4273],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Vl8,$Vh7),o($Vl8,$Vi7,{73:4274,69:4275,88:4276,90:4277,91:4281,95:4282,92:[1,4278],93:[1,4279],94:[1,4280],97:$Vm9,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:4284,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Vl8,$Vk7),o($Vz8,$Vr1,{89:4285}),o($VA8,$Vs1,{95:4051,91:4286,97:$Vg9,98:$VL,99:$VM,100:$VN}),o($VB8,$Vu1,{82:4287}),o($VB8,$Vu1,{82:4288}),o($VB8,$Vu1,{82:4289}),o($Vl8,$Vv1,{101:4055,103:4056,87:4290,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VC8,$Vp7),o($VC8,$Vq7),o($Vz8,$VA1),o($Vz8,$VB1),o($Vz8,$VC1),o($Vz8,$VD1),o($VB8,$VE1),o($VF1,$VG1,{159:4291}),o($VD8,$VI1),{115:[1,4292],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC8,$V11),o($VC8,$V21),{19:[1,4296],21:[1,4300],22:4294,32:4293,197:4295,211:4297,212:[1,4299],213:[1,4298]},{96:[1,4301]},o($Vz8,$VJ1),o($VB8,$Vq),o($VB8,$Vr),{96:[1,4303],102:4302,104:[1,4304],105:[1,4305],106:4306,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4307]},o($VB8,$Vt),o($VB8,$Vu),{117:[1,4308]},o($VU8,$VV3),o($VB8,$Vb3),o($VB8,$Vc3),o($VB8,$Vd3),o($VB8,$Ve3),o($VB8,$Vf3),{107:[1,4309]},o($VB8,$Vk3),o($VC8,$VZ4),o($VD8,$VC5),o($VD8,$VE1),o($VD8,$Vq),o($VD8,$Vr),o($VD8,$Vt),o($VD8,$Vu),o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($Vu2,$VU1),o($Vu2,$VV1),o($Vu2,$VW1),o($Vm1,$VA5),o($Vm1,$VB5),{19:$VW8,21:$VX8,22:4311,83:4310,211:3773,212:$VY8},o($Vw2,$VU1),o($Vw2,$VV1),o($Vw2,$VW1),o($Vo1,$VA5),o($Vo1,$VB5),{19:$VZ8,21:$V_8,22:4313,83:4312,211:3799,212:$V$8},o($Vt1,$VC5),o($Vt1,$VE1),o($Vt1,$Vq),o($Vt1,$Vr),o($Vt1,$Vt),o($Vt1,$Vu),o($Vy2,$VU1),o($Vy2,$VV1),o($Vy2,$VW1),o($Vp1,$VA5),o($Vp1,$VB5),{19:$V09,21:$V19,22:4315,83:4314,211:3826,212:$V29},o($VH4,$VU1),o($VH4,$VV1),o($VH4,$VW1),o($VE3,$VA5),o($VE3,$VB5),{19:$V39,21:$V49,22:4317,83:4316,211:3853,212:$V59},o($VI4,$VU1),o($VI4,$VV1),o($VI4,$VW1),o($VF3,$VA5),o($VF3,$VB5),{19:$V69,21:$V79,22:4319,83:4318,211:3879,212:$V89},o($VI3,$VC5),o($VI3,$VE1),o($VI3,$Vq),o($VI3,$Vr),o($VI3,$Vt),o($VI3,$Vu),o($VK4,$VU1),o($VK4,$VV1),o($VK4,$VW1),o($VG3,$VA5),o($VG3,$VB5),{19:$V99,21:$Va9,22:4321,83:4320,211:3906,212:$Vb9},o($Vz6,$V76),o($Vz6,$VE1),o($VJ6,$Vf7),o($VJ6,$Vg7,{70:4322,72:4323,74:4324,40:4325,114:4326,75:[1,4327],76:[1,4328],77:[1,4329],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($VJ6,$Vh7),o($VJ6,$Vi7,{73:4330,69:4331,88:4332,90:4333,91:4337,95:4338,92:[1,4334],93:[1,4335],94:[1,4336],97:$Vn9,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:4340,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($VJ6,$Vk7),o($Vl7,$Vr1,{89:4341}),o($Vm7,$Vs1,{95:4156,91:4342,97:$Vh9,98:$VL,99:$VM,100:$VN}),o($Vn7,$Vu1,{82:4343}),o($Vn7,$Vu1,{82:4344}),o($Vn7,$Vu1,{82:4345}),o($VJ6,$Vv1,{101:4160,103:4161,87:4346,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vo7,$Vp7),o($Vo7,$Vq7),o($Vl7,$VA1),o($Vl7,$VB1),o($Vl7,$VC1),o($Vl7,$VD1),o($Vn7,$VE1),o($VF1,$VG1,{159:4347}),o($Vr7,$VI1),{115:[1,4348],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vo7,$V11),o($Vo7,$V21),{19:[1,4352],21:[1,4356],22:4350,32:4349,197:4351,211:4353,212:[1,4355],213:[1,4354]},{96:[1,4357]},o($Vl7,$VJ1),o($Vn7,$Vq),o($Vn7,$Vr),{96:[1,4359],102:4358,104:[1,4360],105:[1,4361],106:4362,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4363]},o($Vn7,$Vt),o($Vn7,$Vu),{117:[1,4364]},o($Vc8,$VV3),o($Vn7,$Vb3),o($Vn7,$Vc3),o($Vn7,$Vd3),o($Vn7,$Ve3),o($Vn7,$Vf3),{107:[1,4365]},o($Vn7,$Vk3),o($Vo7,$VZ4),o($Vr7,$VC5),o($Vr7,$VE1),o($Vr7,$Vq),o($Vr7,$Vr),o($Vr7,$Vt),o($Vr7,$Vu),{117:[1,4366]},o($Vc8,$VV3),o($Vn7,$Vb3),o($Vn7,$Vc3),o($Vn7,$Vd3),o($Vn7,$Ve3),o($Vn7,$Vf3),{107:[1,4367]},o($Vn7,$Vk3),o($Vo7,$VZ4),o($Vr7,$VC5),o($Vr7,$VE1),o($Vr7,$Vq),o($Vr7,$Vr),o($Vr7,$Vt),o($Vr7,$Vu),{190:[1,4370],191:4368,192:[1,4369]},o($Ve8,$VN5),o($Ve8,$VO5),o($Ve8,$VP5),o($Ve8,$Vq),o($Ve8,$Vr),o($Ve8,$Vk4),o($Ve8,$Vl4),o($Ve8,$Vm4),o($Ve8,$Vt),o($Ve8,$Vu),o($Ve8,$Vn4),o($Ve8,$Vo4,{199:4371,200:4372,107:[1,4373]}),o($Ve8,$Vp4),o($Ve8,$Vq4),o($Ve8,$Vr4),o($Ve8,$Vs4),o($Ve8,$Vt4),o($Ve8,$Vu4),o($Ve8,$Vv4),o($Ve8,$Vw4),o($Ve8,$Vx4),o($Vo9,$Vg3),o($Vo9,$Vh3),o($Vo9,$Vi3),o($Vo9,$Vj3),o($Vl8,$V78),o($Vx,$Vg,{55:4374,36:4375,39:$Vy}),o($Vl8,$V88),o($Vl8,$V98),o($Vl8,$Vp7),o($Vl8,$Vq7),{115:[1,4376],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vl8,$V11),o($Vl8,$V21),{19:[1,4380],21:[1,4384],22:4378,32:4377,197:4379,211:4381,212:[1,4383],213:[1,4382]},o($Vl8,$Va8),o($Vl8,$Vb8),o($VU8,$Vr1,{89:4385}),o($Vl8,$Vs1,{95:4240,91:4386,97:$Vl9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA1),o($VU8,$VB1),o($VU8,$VC1),o($VU8,$VD1),{96:[1,4387]},o($VU8,$VJ1),{66:[1,4388]},o($VA8,$Vz2,{95:4018,91:4389,97:$Vf9,98:$VL,99:$VM,100:$VN}),o($Vz8,$VA2),o($Vl8,$VB2,{86:4390,91:4391,87:4392,95:4393,101:4395,103:4396,97:$Vp9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VD2,{86:4390,91:4391,87:4392,95:4393,101:4395,103:4396,97:$Vp9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VE2,{86:4390,91:4391,87:4392,95:4393,101:4395,103:4396,97:$Vp9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VD8,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,4397],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4398,117:$VI2,144:$VJ2,186:$VK2}),o($VC8,$VT1),o($VC8,$Vl),o($VC8,$Vm),o($VC8,$Vq),o($VC8,$Vr),o($VC8,$Vs),o($VC8,$Vt),o($VC8,$Vu),o($Vz8,$Vb3),o($VD8,$Vc3),o($VD8,$Vd3),o($VD8,$Ve3),o($VD8,$Vf3),{107:[1,4399]},o($VD8,$Vk3),o($Vl8,$V88),o($Vl8,$V98),o($Vl8,$Vp7),o($Vl8,$Vq7),{115:[1,4400],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vl8,$V11),o($Vl8,$V21),{19:[1,4404],21:[1,4408],22:4402,32:4401,197:4403,211:4405,212:[1,4407],213:[1,4406]},o($Vl8,$Va8),o($Vl8,$Vb8),o($VU8,$Vr1,{89:4409}),o($Vl8,$Vs1,{95:4282,91:4410,97:$Vm9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA1),o($VU8,$VB1),o($VU8,$VC1),o($VU8,$VD1),{96:[1,4411]},o($VU8,$VJ1),{66:[1,4412]},o($VA8,$Vz2,{95:4051,91:4413,97:$Vg9,98:$VL,99:$VM,100:$VN}),o($Vz8,$VA2),o($Vl8,$VB2,{86:4414,91:4415,87:4416,95:4417,101:4419,103:4420,97:$Vq9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VD2,{86:4414,91:4415,87:4416,95:4417,101:4419,103:4420,97:$Vq9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VE2,{86:4414,91:4415,87:4416,95:4417,101:4419,103:4420,97:$Vq9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VD8,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,4421],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4422,117:$VI2,144:$VJ2,186:$VK2}),o($VC8,$VT1),o($VC8,$Vl),o($VC8,$Vm),o($VC8,$Vq),o($VC8,$Vr),o($VC8,$Vs),o($VC8,$Vt),o($VC8,$Vu),o($Vz8,$Vb3),o($VD8,$Vc3),o($VD8,$Vd3),o($VD8,$Ve3),o($VD8,$Vf3),{107:[1,4423]},o($VD8,$Vk3),o($Vl8,$VZ4),{19:[1,4426],21:[1,4429],22:4425,83:4424,211:4427,212:[1,4428]},o($Vm1,$V76),o($Vm1,$VE1),o($Vo1,$V76),o($Vo1,$VE1),o($Vp1,$V76),o($Vp1,$VE1),o($VE3,$V76),o($VE3,$VE1),o($VF3,$V76),o($VF3,$VE1),o($VG3,$V76),o($VG3,$VE1),o($VJ6,$V88),o($VJ6,$V98),o($VJ6,$Vp7),o($VJ6,$Vq7),{115:[1,4430],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VJ6,$V11),o($VJ6,$V21),{19:[1,4434],21:[1,4438],22:4432,32:4431,197:4433,211:4435,212:[1,4437],213:[1,4436]},o($VJ6,$Va8),o($VJ6,$Vb8),o($Vc8,$Vr1,{89:4439}),o($VJ6,$Vs1,{95:4338,91:4440,97:$Vn9,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA1),o($Vc8,$VB1),o($Vc8,$VC1),o($Vc8,$VD1),{96:[1,4441]},o($Vc8,$VJ1),{66:[1,4442]},o($Vm7,$Vz2,{95:4156,91:4443,97:$Vh9,98:$VL,99:$VM,100:$VN}),o($Vl7,$VA2),o($VJ6,$VB2,{86:4444,91:4445,87:4446,95:4447,101:4449,103:4450,97:$Vr9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VD2,{86:4444,91:4445,87:4446,95:4447,101:4449,103:4450,97:$Vr9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VJ6,$VE2,{86:4444,91:4445,87:4446,95:4447,101:4449,103:4450,97:$Vr9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vr7,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,4451],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4452,117:$VI2,144:$VJ2,186:$VK2}),o($Vo7,$VT1),o($Vo7,$Vl),o($Vo7,$Vm),o($Vo7,$Vq),o($Vo7,$Vr),o($Vo7,$Vs),o($Vo7,$Vt),o($Vo7,$Vu),o($Vl7,$Vb3),o($Vr7,$Vc3),o($Vr7,$Vd3),o($Vr7,$Ve3),o($Vr7,$Vf3),{107:[1,4453]},o($Vr7,$Vk3),o($VJ6,$VZ4),{19:[1,4456],21:[1,4459],22:4455,83:4454,211:4457,212:[1,4458]},o($VJ6,$VZ4),{19:[1,4462],21:[1,4465],22:4461,83:4460,211:4463,212:[1,4464]},o($VS8,$VU1),o($VS8,$VV1),o($VS8,$VW1),o($Ve8,$VA5),o($Ve8,$VB5),{19:$Vi9,21:$Vj9,22:4467,83:4466,211:4201,212:$Vk9},o($Vl8,$Vu8),o($VC,$VD,{59:4468,69:4469,71:4470,72:4471,88:4474,90:4475,83:4477,84:4478,85:4479,74:4480,40:4481,91:4485,22:4486,87:4488,114:4489,95:4493,211:4496,101:4497,103:4498,19:[1,4495],21:[1,4500],65:[1,4472],67:[1,4473],75:[1,4490],76:[1,4491],77:[1,4492],81:[1,4476],92:[1,4482],93:[1,4483],94:[1,4484],97:$Vs9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT,158:[1,4487],212:[1,4499]}),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4501,117:$VI2,144:$VJ2,186:$VK2}),o($Vl8,$VT1),o($Vl8,$Vl),o($Vl8,$Vm),o($Vl8,$Vq),o($Vl8,$Vr),o($Vl8,$Vs),o($Vl8,$Vt),o($Vl8,$Vu),o($Vl8,$Vz2,{95:4240,91:4502,97:$Vl9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA2),o($VU8,$Vb3),o($Vl8,$Vw8),o($Vz8,$VV3),o($VB8,$VW3),o($VB8,$VX3),o($VB8,$VY3),{96:[1,4503]},o($VB8,$VJ1),{96:[1,4505],102:4504,104:[1,4506],105:[1,4507],106:4508,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4509]},o($VB8,$Vh4),{117:[1,4510]},{19:[1,4513],21:[1,4516],22:4512,83:4511,211:4514,212:[1,4515]},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4517,117:$VI2,144:$VJ2,186:$VK2}),o($Vl8,$VT1),o($Vl8,$Vl),o($Vl8,$Vm),o($Vl8,$Vq),o($Vl8,$Vr),o($Vl8,$Vs),o($Vl8,$Vt),o($Vl8,$Vu),o($Vl8,$Vz2,{95:4282,91:4518,97:$Vm9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA2),o($VU8,$Vb3),o($Vl8,$Vw8),o($Vz8,$VV3),o($VB8,$VW3),o($VB8,$VX3),o($VB8,$VY3),{96:[1,4519]},o($VB8,$VJ1),{96:[1,4521],102:4520,104:[1,4522],105:[1,4523],106:4524,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4525]},o($VB8,$Vh4),{117:[1,4526]},{19:[1,4529],21:[1,4532],22:4528,83:4527,211:4530,212:[1,4531]},o($VB8,$VC5),o($VB8,$VE1),o($VB8,$Vq),o($VB8,$Vr),o($VB8,$Vt),o($VB8,$Vu),o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4533,117:$VI2,144:$VJ2,186:$VK2}),o($VJ6,$VT1),o($VJ6,$Vl),o($VJ6,$Vm),o($VJ6,$Vq),o($VJ6,$Vr),o($VJ6,$Vs),o($VJ6,$Vt),o($VJ6,$Vu),o($VJ6,$Vz2,{95:4338,91:4534,97:$Vn9,98:$VL,99:$VM,100:$VN}),o($Vc8,$VA2),o($Vc8,$Vb3),o($VJ6,$Vw8),o($Vl7,$VV3),o($Vn7,$VW3),o($Vn7,$VX3),o($Vn7,$VY3),{96:[1,4535]},o($Vn7,$VJ1),{96:[1,4537],102:4536,104:[1,4538],105:[1,4539],106:4540,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4541]},o($Vn7,$Vh4),{117:[1,4542]},{19:[1,4545],21:[1,4548],22:4544,83:4543,211:4546,212:[1,4547]},o($Vn7,$VC5),o($Vn7,$VE1),o($Vn7,$Vq),o($Vn7,$Vr),o($Vn7,$Vt),o($Vn7,$Vu),o($Vn7,$VC5),o($Vn7,$VE1),o($Vn7,$Vq),o($Vn7,$Vr),o($Vn7,$Vt),o($Vn7,$Vu),o($Ve8,$V76),o($Ve8,$VE1),o($Vl8,$Vf7),o($Vl8,$Vg7,{70:4549,72:4550,74:4551,40:4552,114:4553,75:[1,4554],76:[1,4555],77:[1,4556],115:$VD,121:$VD,123:$VD,186:$VD,216:$VD}),o($Vl8,$Vh7),o($Vl8,$Vi7,{73:4557,69:4558,88:4559,90:4560,91:4564,95:4565,92:[1,4561],93:[1,4562],94:[1,4563],97:$Vt9,98:$VL,99:$VM,100:$VN}),o($Vf,$Vg,{36:182,40:184,34:4567,39:$Vk1,75:$Vh,76:$Vi,77:$Vj}),o($Vl8,$Vk7),o($Vz8,$Vr1,{89:4568}),o($VA8,$Vs1,{95:4493,91:4569,97:$Vs9,98:$VL,99:$VM,100:$VN}),o($VB8,$Vu1,{82:4570}),o($VB8,$Vu1,{82:4571}),o($VB8,$Vu1,{82:4572}),o($Vl8,$Vv1,{101:4497,103:4498,87:4573,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VC8,$Vp7),o($VC8,$Vq7),o($Vz8,$VA1),o($Vz8,$VB1),o($Vz8,$VC1),o($Vz8,$VD1),o($VB8,$VE1),o($VF1,$VG1,{159:4574}),o($VD8,$VI1),{115:[1,4575],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($VC8,$V11),o($VC8,$V21),{19:[1,4579],21:[1,4583],22:4577,32:4576,197:4578,211:4580,212:[1,4582],213:[1,4581]},{96:[1,4584]},o($Vz8,$VJ1),o($VB8,$Vq),o($VB8,$Vr),{96:[1,4586],102:4585,104:[1,4587],105:[1,4588],106:4589,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4590]},o($VB8,$Vt),o($VB8,$Vu),{117:[1,4591]},o($VU8,$VV3),o($VB8,$Vb3),o($VB8,$Vc3),o($VB8,$Vd3),o($VB8,$Ve3),o($VB8,$Vf3),{107:[1,4592]},o($VB8,$Vk3),o($VC8,$VZ4),o($VD8,$VC5),o($VD8,$VE1),o($VD8,$Vq),o($VD8,$Vr),o($VD8,$Vt),o($VD8,$Vu),{117:[1,4593]},o($VU8,$VV3),o($VB8,$Vb3),o($VB8,$Vc3),o($VB8,$Vd3),o($VB8,$Ve3),o($VB8,$Vf3),{107:[1,4594]},o($VB8,$Vk3),o($VC8,$VZ4),o($VD8,$VC5),o($VD8,$VE1),o($VD8,$Vq),o($VD8,$Vr),o($VD8,$Vt),o($VD8,$Vu),{117:[1,4595]},o($Vc8,$VV3),o($Vn7,$Vb3),o($Vn7,$Vc3),o($Vn7,$Vd3),o($Vn7,$Ve3),o($Vn7,$Vf3),{107:[1,4596]},o($Vn7,$Vk3),o($Vo7,$VZ4),o($Vr7,$VC5),o($Vr7,$VE1),o($Vr7,$Vq),o($Vr7,$Vr),o($Vr7,$Vt),o($Vr7,$Vu),o($Vl8,$V88),o($Vl8,$V98),o($Vl8,$Vp7),o($Vl8,$Vq7),{115:[1,4597],118:195,119:196,120:197,121:$Vw1,123:$Vx1,186:$Vy1,214:199,216:$Vz1},o($Vl8,$V11),o($Vl8,$V21),{19:[1,4601],21:[1,4605],22:4599,32:4598,197:4600,211:4602,212:[1,4604],213:[1,4603]},o($Vl8,$Va8),o($Vl8,$Vb8),o($VU8,$Vr1,{89:4606}),o($Vl8,$Vs1,{95:4565,91:4607,97:$Vt9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA1),o($VU8,$VB1),o($VU8,$VC1),o($VU8,$VD1),{96:[1,4608]},o($VU8,$VJ1),{66:[1,4609]},o($VA8,$Vz2,{95:4493,91:4610,97:$Vs9,98:$VL,99:$VM,100:$VN}),o($Vz8,$VA2),o($Vl8,$VB2,{86:4611,91:4612,87:4613,95:4614,101:4616,103:4617,97:$Vu9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VD2,{86:4611,91:4612,87:4613,95:4614,101:4616,103:4617,97:$Vu9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($Vl8,$VE2,{86:4611,91:4612,87:4613,95:4614,101:4616,103:4617,97:$Vu9,98:$VL,99:$VM,100:$VN,108:$VO,109:$VP,110:$VQ,111:$VR,112:$VS,113:$VT}),o($VD8,$VF2),{19:$VU2,21:$VV2,22:396,67:$VW2,77:$VX2,96:$VY2,104:$VZ2,105:$V_2,106:408,160:[1,4618],161:391,162:392,163:393,164:394,178:397,182:$V$2,193:402,194:403,195:404,198:407,201:$V03,202:$V13,203:$V23,204:$V33,205:$V43,206:$V53,207:$V63,208:$V73,209:$V83,210:$V93,211:401,212:$Va3},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4619,117:$VI2,144:$VJ2,186:$VK2}),o($VC8,$VT1),o($VC8,$Vl),o($VC8,$Vm),o($VC8,$Vq),o($VC8,$Vr),o($VC8,$Vs),o($VC8,$Vt),o($VC8,$Vu),o($Vz8,$Vb3),o($VD8,$Vc3),o($VD8,$Vd3),o($VD8,$Ve3),o($VD8,$Vf3),{107:[1,4620]},o($VD8,$Vk3),o($Vl8,$VZ4),{19:[1,4623],21:[1,4626],22:4622,83:4621,211:4624,212:[1,4625]},o($Vl8,$VZ4),{19:[1,4629],21:[1,4632],22:4628,83:4627,211:4630,212:[1,4631]},o($VJ6,$VZ4),{19:[1,4635],21:[1,4638],22:4634,83:4633,211:4636,212:[1,4637]},o($VG2,$VH2,{122:361,126:362,127:363,128:364,132:365,133:366,134:367,140:368,142:369,143:370,116:4639,117:$VI2,144:$VJ2,186:$VK2}),o($Vl8,$VT1),o($Vl8,$Vl),o($Vl8,$Vm),o($Vl8,$Vq),o($Vl8,$Vr),o($Vl8,$Vs),o($Vl8,$Vt),o($Vl8,$Vu),o($Vl8,$Vz2,{95:4565,91:4640,97:$Vt9,98:$VL,99:$VM,100:$VN}),o($VU8,$VA2),o($VU8,$Vb3),o($Vl8,$Vw8),o($Vz8,$VV3),o($VB8,$VW3),o($VB8,$VX3),o($VB8,$VY3),{96:[1,4641]},o($VB8,$VJ1),{96:[1,4643],102:4642,104:[1,4644],105:[1,4645],106:4646,203:$VK1,204:$VL1,205:$VM1,206:$VN1},{96:[1,4647]},o($VB8,$Vh4),{117:[1,4648]},{19:[1,4651],21:[1,4654],22:4650,83:4649,211:4652,212:[1,4653]},o($VB8,$VC5),o($VB8,$VE1),o($VB8,$Vq),o($VB8,$Vr),o($VB8,$Vt),o($VB8,$Vu),o($VB8,$VC5),o($VB8,$VE1),o($VB8,$Vq),o($VB8,$Vr),o($VB8,$Vt),o($VB8,$Vu),o($Vn7,$VC5),o($Vn7,$VE1),o($Vn7,$Vq),o($Vn7,$Vr),o($Vn7,$Vt),o($Vn7,$Vu),{117:[1,4655]},o($VU8,$VV3),o($VB8,$Vb3),o($VB8,$Vc3),o($VB8,$Vd3),o($VB8,$Ve3),o($VB8,$Vf3),{107:[1,4656]},o($VB8,$Vk3),o($VC8,$VZ4),o($VD8,$VC5),o($VD8,$VE1),o($VD8,$Vq),o($VD8,$Vr),o($VD8,$Vt),o($VD8,$Vu),o($Vl8,$VZ4),{19:[1,4659],21:[1,4662],22:4658,83:4657,211:4660,212:[1,4661]},o($VB8,$VC5),o($VB8,$VE1),o($VB8,$Vq),o($VB8,$Vr),o($VB8,$Vt),o($VB8,$Vu)],
defaultActions: {6:[2,11],30:[2,1],102:[2,115],103:[2,116],104:[2,117],111:[2,128],112:[2,129],210:[2,251],211:[2,252],212:[2,253],213:[2,254],333:[2,31],361:[2,138],362:[2,142],364:[2,144],569:[2,29],570:[2,33],607:[2,30],1118:[2,142],1120:[2,144]},
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

  const UNBOUNDED = -1;

  const ShExUtil = __webpack_require__(4);

  // Common namespaces and entities
  const RDF = 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
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

  const numericDatatypes = [
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

  const absoluteIRI = /^[a-z][a-z0-9+.-]*:/i,
    schemeAuthority = /^(?:([a-z][a-z0-9+.-]*:))?(?:\/\/[^\/]*)?/i,
    dotSegments = /(?:^|\/)\.\.?(?:$|[\/#?])/;

  const numericFacets = ["mininclusive", "minexclusive",
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
    for (let i = 1, l = arguments.length, arg; i < l && (arg = arguments[i] || {}); i++)
      for (let name in arg)
        base[name] = arg[name];
    return base;
  }

  // Creates an array that contains all items of the given arrays
  function unionAll() {
    let union = [];
    for (let i = 0, l = arguments.length; i < l; i++)
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
    const length = iri.length;
    let result = '', i = -1, pathStart = -1, next = '/', segmentStart = 0;

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
    const expression = { expression: expr };
    if (attr)
      for (let a in attr)
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
  let blankId = 0;
  Parser._resetBlanks = function () { blankId = 0; }
  Parser.reset = function () {
    Parser._prefixes = Parser._imports = Parser._sourceMap = Parser.shapes = Parser.productions = Parser.start = Parser.startActs = null; // Reset state.
    Parser._base = Parser._baseIRI = Parser._baseIRIPath = Parser._baseIRIRoot = null;
  }
  let _fileName; // for debugging
  Parser._setFileName = function (fn) { _fileName = fn; }

  // Regular expression and replacement strings to escape strings
  const stringEscapeReplacements = { '\\': '\\', "'": "'", '"': '"',
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
    const at = string.lastIndexOf("@");
    const lang = string.substr(at);
    string = string.substr(0, at);
    const u = unescapeString(string, trimLength);
    return extend(u, { language: lowercase(lang.substr(1)) });
  }

  // Translates regular expression escape codes in the string into their textual equivalent
  function unescapeRegexp (regexp) {
    const end = regexp.lastIndexOf("/");
    let s = regexp.substr(1, end-1);
    const regexpEscapeReplacements = {
      '.': "\\.", '\\': "\\\\", '?': "\\?", '*': "\\*", '+': "\\+",
      '{': "\\{", '}': "\\}", '(': "\\(", ')': "\\)", '|': "\\|",
      '^': "\\^", '$': "\\$", '[': "\\[", ']': "\\]", '/': "\\/",
      't': '\\t', 'n': '\\n', 'r': '\\r', '-': "\\-", '/': '/'
    };
    s = ShExUtil.unescapeText(s, regexpEscapeReplacements)
    const ret = {
      pattern: s
    };
    if (regexp.length > end+1)
      ret.flags = regexp.substr(end+1);
    return ret;
  }

  // Convenience function to return object with p1 key, value p2
  function keyValObject(key, val) {
    const ret = {};
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

  const EmptyObject = {  };
  const EmptyShape = { type: "Shape" };
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
case 1:return 75;
break;
case 2:return 76;
break;
case 3: yy_.yytext = yy_.yytext.substr(1); return 182; 
break;
case 4:return 77;
break;
case 5:return 212;
break;
case 6:return 155;
break;
case 7:return 105;
break;
case 8:return 104;
break;
case 9:return 96;
break;
case 10:return 'ANON';
break;
case 11:return 19;
break;
case 12:return 21;
break;
case 13:return 196;
break;
case 14:return 97;
break;
case 15:return 213;
break;
case 16:return 192;
break;
case 17:return 208;
break;
case 18:return 210;
break;
case 19:return 207;
break;
case 20:return 209;
break;
case 21:return 204;
break;
case 22:return 206;
break;
case 23:return 203;
break;
case 24:return 205;
break;
case 25:return 18;
break;
case 26:return 20;
break;
case 27:return 23;
break;
case 28:return 26;
break;
case 29:return 35;
break;
case 30:return 'IT_VIRTUAL';
break;
case 31:return 121;
break;
case 32:return 123;
break;
case 33:return 81;
break;
case 34:return 93;
break;
case 35:return 92;
break;
case 36:return 94;
break;
case 37:return 49;
break;
case 38:return 47;
break;
case 39:return 39;
break;
case 40:return 108;
break;
case 41:return 109;
break;
case 42:return 110;
break;
case 43:return 111;
break;
case 44:return 98;
break;
case 45:return 99;
break;
case 46:return 100;
break;
case 47:return 112;
break;
case 48:return 113;
break;
case 49:return 27;
break;
case 50:return 187;
break;
case 51:return 115;
break;
case 52:return 117;
break;
case 53:return 186;
break;
case 54:return '||';
break;
case 55:return 131;
break;
case 56:return 136;
break;
case 57:return 65;
break;
case 58:return 66;
break;
case 59:return 158;
break;
case 60:return 160;
break;
case 61:return 144;
break;
case 62:return 157;
break;
case 63:return 107;
break;
case 64:return 156;
break;
case 65:return 67;
break;
case 66:return 175;
break;
case 67:return 137;
break;
case 68:return 152;
break;
case 69:return 153;
break;
case 70:return 154;
break;
case 71:return 176;
break;
case 72:return 190;
break;
case 73:return 201;
break;
case 74:return 202;
break;
case 75:return 7;
break;
case 76:return 'unexpected word "'+yy_.yytext+'"';
break;
case 77:return 'invalid character '+yy_.yytext;
break;
}
},
rules: [/^(?:\s+|(#[^\u000a\u000d]*|\/\*([^*]|\*([^/]|\\\/))*\*\/))/,/^(?:(@(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*))))/,/^(?:(@((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)))/,/^(?:(@([A-Za-z])+((-([0-9A-Za-z])+))*))/,/^(?:@)/,/^(?:(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:)(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|:|[0-9]|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))(((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.|:|((%([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))|(\\(_|~|\.|-|!|\$|&|'|\(|\)|\*|\+|,|;|=|\/|\?|#|@|%))))*)))/,/^(?:(\{((([+-])?([0-9])+))((,(((([+-])?([0-9])+))|\*)?))?\}))/,/^(?:(([+-])?((([0-9])+\.([0-9])*(([Ee]([+-])?([0-9])+)))|((\.)?([0-9])+(([Ee]([+-])?([0-9])+))))))/,/^(?:(([+-])?([0-9])*\.([0-9])+))/,/^(?:(([+-])?([0-9])+))/,/^(?:{ANON})/,/^(?:(<([^\u0000-\u0020<>\"{}|^`\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*>))/,/^(?:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?)?:))/,/^(?:a\b)/,/^(?:(\/([^\u002f\u005C\u000A\u000D]|\\[nrt\\|.?*+(){}$\u002D\u005B\u005D\u005E/]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))+\/[smix]*))/,/^(?:(_:((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|[0-9])((((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040])|\.)*((([A-Z]|[a-z]|[\u00c0-\u00d6]|[\u00d8-\u00f6]|[\u00f8-\u02ff]|[\u0370-\u037d]|[\u037f-\u1fff]|[\u200c-\u200d]|[\u2070-\u218f]|[\u2c00-\u2fef]|[\u3001-\ud7ff]|[\uf900-\ufdcf]|[\ufdf0-\ufffd]|[\uD800-\uDB7F][\uDC00-\uDFFF])|_|_\b)|-|[0-9]|[\u00b7]|[\u0300-\u036f]|[\u203f-\u2040]))?))/,/^(?:(\{([^%\\]|\\[%\\]|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*%\}))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"(@([A-Za-z])+((-([0-9A-Za-z])+))*)))/,/^(?:('''(('|'')?([^\'\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*'''))/,/^(?:("""(("|"")?([^\"\\]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f]))))*"""))/,/^(?:('([^\u0027\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*'))/,/^(?:("([^\u0022\u005c\u000a\u000d]|(\\[\"\'\\bfnrt])|(\\u([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])|\\U([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])([0-9]|[A-F]|[a-f])))*"))/,/^(?:([Bb][Aa][Ss][Ee]))/,/^(?:([Pp][Rr][Ee][Ff][Ii][Xx]))/,/^(?:([iI][mM][pP][oO][rR][tT]))/,/^(?:([sS][tT][aA][rR][tT]))/,/^(?:([eE][xX][tT][eE][rR][nN][aA][lL]))/,/^(?:([Vv][Ii][Rr][Tt][Uu][Aa][Ll]))/,/^(?:([Cc][Ll][Oo][Ss][Ee][Dd]))/,/^(?:([Ee][Xx][Tt][Rr][Aa]))/,/^(?:([Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Bb][Nn][Oo][Dd][Ee]))/,/^(?:([Ii][Rr][Ii]))/,/^(?:([Nn][Oo][Nn][Ll][Ii][Tt][Ee][Rr][Aa][Ll]))/,/^(?:([Aa][Nn][Dd]))/,/^(?:([Oo][Rr]))/,/^(?:([No][Oo][Tt]))/,/^(?:([Mm][Ii][Nn][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Ii][Nn][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ii][Nn][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Mm][Aa][Xx][Ee][Xx][Cc][Ll][Uu][Ss][Ii][Vv][Ee]))/,/^(?:([Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Ii][Nn][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Mm][Aa][Xx][Ll][Ee][Nn][Gg][Tt][Hh]))/,/^(?:([Tt][Oo][Tt][Aa][Ll][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:([Ff][Rr][Aa][Cc][Tt][Ii][Oo][Nn][Dd][Ii][Gg][Ii][Tt][Ss]))/,/^(?:=)/,/^(?:\/\/)/,/^(?:\{)/,/^(?:\})/,/^(?:&)/,/^(?:\|\|)/,/^(?:\|)/,/^(?:,)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\$)/,/^(?:!)/,/^(?:\^\^)/,/^(?:\^)/,/^(?:\.)/,/^(?:~)/,/^(?:;)/,/^(?:\*)/,/^(?:\+)/,/^(?:\?)/,/^(?:-)/,/^(?:%)/,/^(?:true\b)/,/^(?:false\b)/,/^(?:$)/,/^(?:[a-zA-Z0-9_-]+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77],"inclusive":true}}
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
    var source = __webpack_require__(2).readFileSync(__webpack_require__(1).normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if ( true && __webpack_require__.c[__webpack_require__.s] === module) {
  exports.main(process.argv.slice(1));
}
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0), __webpack_require__(9)(module)))

/***/ }),
/* 28 */
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

var pathModule = __webpack_require__(1);
var isWindows = process.platform === 'win32';
var fs = __webpack_require__(2);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(30);
var balanced = __webpack_require__(31);

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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {module.exports = globSync
globSync.GlobSync = GlobSync

var fs = __webpack_require__(2)
var rp = __webpack_require__(14)
var minimatch = __webpack_require__(5)
var Minimatch = minimatch.Minimatch
var Glob = __webpack_require__(13).Glob
var util = __webpack_require__(6)
var path = __webpack_require__(1)
var assert = __webpack_require__(15)
var isAbsolute = __webpack_require__(7)
var common = __webpack_require__(16)
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var wrappy = __webpack_require__(17)
var reqs = Object.create(null)
var once = __webpack_require__(18)

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 40;

/***/ })
/******/ ]);