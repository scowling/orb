/**
 * orb v1.1.0, Pivot table javascript library.
 *
 * Copyright (c) 2014-2016 Najmeddine Nouri <devnajm@gmail.com>.
 *
 * @version v1.1.0
 * @link http://orbjs.net/
 * @license MIT
 */

/* global module, require, define, window, document, global, React */
/*jshint node: true, eqnull: true*/

'use strict';
(function(f) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = f()
  } else if (typeof define === "function" && define.amd) {
    define([], f)
  } else {
    var g;
    if (typeof window !== "undefined") {
      g = window
    } else if (typeof global !== "undefined") {
      g = global
    } else if (typeof self !== "undefined") {
      g = self
    } else {
      g = this
    }
    g.orb = f()
  }
})(function() {
  var define, module, exports;
  return (function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f
        }
        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e)
        }, l, l.exports, e, t, n, r)
      }
      return n[o].exports
    }
    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++) s(r[o]);
    return s
  })({
    1: [function(_dereq_, module, exports) {
      module.exports = {
        "default": _dereq_("core-js/library/fn/json/stringify"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/json/stringify": 5
    }],
    2: [function(_dereq_, module, exports) {
      module.exports = {
        "default": _dereq_("core-js/library/fn/symbol"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/symbol": 6
    }],
    3: [function(_dereq_, module, exports) {
      module.exports = {
        "default": _dereq_("core-js/library/fn/symbol/iterator"),
        __esModule: true
      };
    }, {
      "core-js/library/fn/symbol/iterator": 7
    }],
    4: [function(_dereq_, module, exports) {

      exports.__esModule = true;

      var _iterator = _dereq_("../core-js/symbol/iterator");

      var _iterator2 = _interopRequireDefault(_iterator);

      var _symbol = _dereq_("../core-js/symbol");

      var _symbol2 = _interopRequireDefault(_symbol);

      var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function(obj) {
        return typeof obj;
      } : function(obj) {
        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj;
      };

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function(obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
      } : function(obj) {
        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
      };
    }, {
      "../core-js/symbol": 2,
      "../core-js/symbol/iterator": 3
    }],
    5: [function(_dereq_, module, exports) {
      var core = _dereq_('../../modules/_core'),
        $JSON = core.JSON || (core.JSON = {
          stringify: JSON.stringify
        });
      module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
        return $JSON.stringify.apply($JSON, arguments);
      };
    }, {
      "../../modules/_core": 13
    }],
    6: [function(_dereq_, module, exports) {
      _dereq_('../../modules/es6.symbol');
      _dereq_('../../modules/es6.object.to-string');
      _dereq_('../../modules/es7.symbol.async-iterator');
      _dereq_('../../modules/es7.symbol.observable');
      module.exports = _dereq_('../../modules/_core').Symbol;
    }, {
      "../../modules/_core": 13,
      "../../modules/es6.object.to-string": 65,
      "../../modules/es6.symbol": 67,
      "../../modules/es7.symbol.async-iterator": 68,
      "../../modules/es7.symbol.observable": 69
    }],
    7: [function(_dereq_, module, exports) {
      _dereq_('../../modules/es6.string.iterator');
      _dereq_('../../modules/web.dom.iterable');
      module.exports = _dereq_('../../modules/_wks-ext').f('iterator');
    }, {
      "../../modules/_wks-ext": 62,
      "../../modules/es6.string.iterator": 66,
      "../../modules/web.dom.iterable": 70
    }],
    8: [function(_dereq_, module, exports) {
      module.exports = function(it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };
    }, {}],
    9: [function(_dereq_, module, exports) {
      module.exports = function() {};
    }, {}],
    10: [function(_dereq_, module, exports) {
      var isObject = _dereq_('./_is-object');
      module.exports = function(it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };
    }, {
      "./_is-object": 29
    }],
    11: [function(_dereq_, module, exports) {
      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = _dereq_('./_to-iobject'),
        toLength = _dereq_('./_to-length'),
        toIndex = _dereq_('./_to-index');
      module.exports = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
          var O = toIObject($this),
            length = toLength(O.length),
            index = toIndex(fromIndex, length),
            value;
          // Array#includes uses SameValueZero equality algorithm
          if (IS_INCLUDES && el != el)
            while (length > index) {
              value = O[index++];
              if (value != value) return true;
              // Array#toIndex ignores holes, Array#includes - not
            } else
              for (; length > index; index++)
                if (IS_INCLUDES || index in O) {
                  if (O[index] === el) return IS_INCLUDES || index || 0;
                }
          return !IS_INCLUDES && -1;
        };
      };
    }, {
      "./_to-index": 54,
      "./_to-iobject": 56,
      "./_to-length": 57
    }],
    12: [function(_dereq_, module, exports) {
      var toString = {}.toString;

      module.exports = function(it) {
        return toString.call(it).slice(8, -1);
      };
    }, {}],
    13: [function(_dereq_, module, exports) {
      var core = module.exports = {
        version: '2.4.0'
      };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
    }, {}],
    14: [function(_dereq_, module, exports) {
      // optional / simple context binding
      var aFunction = _dereq_('./_a-function');
      module.exports = function(fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function(a) {
              return fn.call(that, a);
            };
          case 2:
            return function(a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function(a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function() {
          return fn.apply(that, arguments);
        };
      };
    }, {
      "./_a-function": 8
    }],
    15: [function(_dereq_, module, exports) {
      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function(it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };
    }, {}],
    16: [function(_dereq_, module, exports) {
      // Thank's IE8 for his funny defineProperty
      module.exports = !_dereq_('./_fails')(function() {
        return Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }, {
      "./_fails": 21
    }],
    17: [function(_dereq_, module, exports) {
      var isObject = _dereq_('./_is-object'),
        document = _dereq_('./_global').document
        // in old IE typeof document.createElement is 'object'
        ,
        is = isObject(document) && isObject(document.createElement);
      module.exports = function(it) {
        return is ? document.createElement(it) : {};
      };
    }, {
      "./_global": 22,
      "./_is-object": 29
    }],
    18: [function(_dereq_, module, exports) {
      // IE 8- don't enum bug keys
      module.exports = (
        'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
      ).split(',');
    }, {}],
    19: [function(_dereq_, module, exports) {
      // all enumerable object keys, includes symbols
      var getKeys = _dereq_('./_object-keys'),
        gOPS = _dereq_('./_object-gops'),
        pIE = _dereq_('./_object-pie');
      module.exports = function(it) {
        var result = getKeys(it),
          getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it),
            isEnum = pIE.f,
            i = 0,
            key;
          while (symbols.length > i)
            if (isEnum.call(it, key = symbols[i++])) result.push(key);
        }
        return result;
      };
    }, {
      "./_object-gops": 43,
      "./_object-keys": 46,
      "./_object-pie": 47
    }],
    20: [function(_dereq_, module, exports) {
      var global = _dereq_('./_global'),
        core = _dereq_('./_core'),
        ctx = _dereq_('./_ctx'),
        hide = _dereq_('./_hide'),
        PROTOTYPE = 'prototype';

      var $export = function(type, name, source) {
        var IS_FORCED = type & $export.F,
          IS_GLOBAL = type & $export.G,
          IS_STATIC = type & $export.S,
          IS_PROTO = type & $export.P,
          IS_BIND = type & $export.B,
          IS_WRAP = type & $export.W,
          exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
          expProto = exports[PROTOTYPE],
          target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
          key, own, out;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          if (own && key in exports) continue;
          // export native or passed
          out = own ? target[key] : source[key];
          // prevent global pollution for namespaces
          exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
            // bind timers to global for call from export context
            :
            IS_BIND && own ? ctx(out, global)
            // wrap global constructors for prevent change them in library
            :
            IS_WRAP && target[key] == out ? (function(C) {
              var F = function(a, b, c) {
                if (this instanceof C) {
                  switch (arguments.length) {
                    case 0:
                      return new C;
                    case 1:
                      return new C(a);
                    case 2:
                      return new C(a, b);
                  }
                  return new C(a, b, c);
                }
                return C.apply(this, arguments);
              };
              F[PROTOTYPE] = C[PROTOTYPE];
              return F;
              // make static versions for prototype methods
            })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
          if (IS_PROTO) {
            (exports.virtual || (exports.virtual = {}))[key] = out;
            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
            if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
          }
        }
      };
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library` 
      module.exports = $export;
    }, {
      "./_core": 13,
      "./_ctx": 14,
      "./_global": 22,
      "./_hide": 24
    }],
    21: [function(_dereq_, module, exports) {
      module.exports = function(exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };
    }, {}],
    22: [function(_dereq_, module, exports) {
      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
        window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
    }, {}],
    23: [function(_dereq_, module, exports) {
      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function(it, key) {
        return hasOwnProperty.call(it, key);
      };
    }, {}],
    24: [function(_dereq_, module, exports) {
      var dP = _dereq_('./_object-dp'),
        createDesc = _dereq_('./_property-desc');
      module.exports = _dereq_('./_descriptors') ? function(object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function(object, key, value) {
        object[key] = value;
        return object;
      };
    }, {
      "./_descriptors": 16,
      "./_object-dp": 38,
      "./_property-desc": 48
    }],
    25: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./_global').document && document.documentElement;
    }, {
      "./_global": 22
    }],
    26: [function(_dereq_, module, exports) {
      module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function() {
        return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', {
          get: function() {
            return 7;
          }
        }).a != 7;
      });
    }, {
      "./_descriptors": 16,
      "./_dom-create": 17,
      "./_fails": 21
    }],
    27: [function(_dereq_, module, exports) {
      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = _dereq_('./_cof');
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };
    }, {
      "./_cof": 12
    }],
    28: [function(_dereq_, module, exports) {
      // 7.2.2 IsArray(argument)
      var cof = _dereq_('./_cof');
      module.exports = Array.isArray || function isArray(arg) {
        return cof(arg) == 'Array';
      };
    }, {
      "./_cof": 12
    }],
    29: [function(_dereq_, module, exports) {
      module.exports = function(it) {
        return typeof it === 'object' ? it !== null : typeof it === 'function';
      };
    }, {}],
    30: [function(_dereq_, module, exports) {

      var create = _dereq_('./_object-create'),
        descriptor = _dereq_('./_property-desc'),
        setToStringTag = _dereq_('./_set-to-string-tag'),
        IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      _dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function() {
        return this;
      });

      module.exports = function(Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, {
          next: descriptor(1, next)
        });
        setToStringTag(Constructor, NAME + ' Iterator');
      };
    }, {
      "./_hide": 24,
      "./_object-create": 37,
      "./_property-desc": 48,
      "./_set-to-string-tag": 50,
      "./_wks": 63
    }],
    31: [function(_dereq_, module, exports) {

      var LIBRARY = _dereq_('./_library'),
        $export = _dereq_('./_export'),
        redefine = _dereq_('./_redefine'),
        hide = _dereq_('./_hide'),
        has = _dereq_('./_has'),
        Iterators = _dereq_('./_iterators'),
        $iterCreate = _dereq_('./_iter-create'),
        setToStringTag = _dereq_('./_set-to-string-tag'),
        getPrototypeOf = _dereq_('./_object-gpo'),
        ITERATOR = _dereq_('./_wks')('iterator'),
        BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
        ,
        FF_ITERATOR = '@@iterator',
        KEYS = 'keys',
        VALUES = 'values';

      var returnThis = function() {
        return this;
      };

      module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function(kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }
          return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + ' Iterator',
          DEF_VALUES = DEFAULT == VALUES,
          VALUES_BUG = false,
          proto = Base.prototype,
          $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
          $default = $native || getMethod(DEFAULT),
          $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
          $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
          methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
          if (IteratorPrototype !== Object.prototype) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED)
            for (key in methods) {
              if (!(key in proto)) redefine(proto, key, methods[key]);
            } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
      };
    }, {
      "./_export": 20,
      "./_has": 23,
      "./_hide": 24,
      "./_iter-create": 30,
      "./_iterators": 33,
      "./_library": 35,
      "./_object-gpo": 44,
      "./_redefine": 49,
      "./_set-to-string-tag": 50,
      "./_wks": 63
    }],
    32: [function(_dereq_, module, exports) {
      module.exports = function(done, value) {
        return {
          value: value,
          done: !!done
        };
      };
    }, {}],
    33: [function(_dereq_, module, exports) {
      module.exports = {};
    }, {}],
    34: [function(_dereq_, module, exports) {
      var getKeys = _dereq_('./_object-keys'),
        toIObject = _dereq_('./_to-iobject');
      module.exports = function(object, el) {
        var O = toIObject(object),
          keys = getKeys(O),
          length = keys.length,
          index = 0,
          key;
        while (length > index)
          if (O[key = keys[index++]] === el) return key;
      };
    }, {
      "./_object-keys": 46,
      "./_to-iobject": 56
    }],
    35: [function(_dereq_, module, exports) {
      module.exports = true;
    }, {}],
    36: [function(_dereq_, module, exports) {
      var META = _dereq_('./_uid')('meta'),
        isObject = _dereq_('./_is-object'),
        has = _dereq_('./_has'),
        setDesc = _dereq_('./_object-dp').f,
        id = 0;
      var isExtensible = Object.isExtensible || function() {
        return true;
      };
      var FREEZE = !_dereq_('./_fails')(function() {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function(it) {
        setDesc(it, META, {
          value: {
            i: 'O' + ++id, // object ID
            w: {} // weak collections IDs
          }
        });
      };
      var fastKey = function(it, create) {
        // return primitive with prefix
        if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F';
          // not necessary to add metadata
          if (!create) return 'E';
          // add missing metadata
          setMeta(it);
          // return object ID
        }
        return it[META].i;
      };
      var getWeak = function(it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true;
          // not necessary to add metadata
          if (!create) return false;
          // add missing metadata
          setMeta(it);
          // return hash weak collections IDs
        }
        return it[META].w;
      };
      // add metadata on freeze-family methods calling
      var onFreeze = function(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      };
    }, {
      "./_fails": 21,
      "./_has": 23,
      "./_is-object": 29,
      "./_object-dp": 38,
      "./_uid": 60
    }],
    37: [function(_dereq_, module, exports) {
      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = _dereq_('./_an-object'),
        dPs = _dereq_('./_object-dps'),
        enumBugKeys = _dereq_('./_enum-bug-keys'),
        IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
        Empty = function() {},
        PROTOTYPE = 'prototype';

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var createDict = function() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = _dereq_('./_dom-create')('iframe'),
          i = enumBugKeys.length,
          gt = '>',
          iframeDocument;
        iframe.style.display = 'none';
        _dereq_('./_html').appendChild(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write('<script>document.F=Object</script' + gt);
        iframeDocument.close();
        createDict = iframeDocument.F;
        while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
        return createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty;
          Empty[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = createDict();
        return Properties === undefined ? result : dPs(result, Properties);
      };
    }, {
      "./_an-object": 10,
      "./_dom-create": 17,
      "./_enum-bug-keys": 18,
      "./_html": 25,
      "./_object-dps": 39,
      "./_shared-key": 51
    }],
    38: [function(_dereq_, module, exports) {
      var anObject = _dereq_('./_an-object'),
        IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
        toPrimitive = _dereq_('./_to-primitive'),
        dP = Object.defineProperty;

      exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {}
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };
    }, {
      "./_an-object": 10,
      "./_descriptors": 16,
      "./_ie8-dom-define": 26,
      "./_to-primitive": 59
    }],
    39: [function(_dereq_, module, exports) {
      var dP = _dereq_('./_object-dp'),
        anObject = _dereq_('./_an-object'),
        getKeys = _dereq_('./_object-keys');

      module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties),
          length = keys.length,
          i = 0,
          P;
        while (length > i) dP.f(O, P = keys[i++], Properties[P]);
        return O;
      };
    }, {
      "./_an-object": 10,
      "./_descriptors": 16,
      "./_object-dp": 38,
      "./_object-keys": 46
    }],
    40: [function(_dereq_, module, exports) {
      var pIE = _dereq_('./_object-pie'),
        createDesc = _dereq_('./_property-desc'),
        toIObject = _dereq_('./_to-iobject'),
        toPrimitive = _dereq_('./_to-primitive'),
        has = _dereq_('./_has'),
        IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
        gOPD = Object.getOwnPropertyDescriptor;

      exports.f = _dereq_('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return gOPD(O, P);
        } catch (e) {}
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };
    }, {
      "./_descriptors": 16,
      "./_has": 23,
      "./_ie8-dom-define": 26,
      "./_object-pie": 47,
      "./_property-desc": 48,
      "./_to-iobject": 56,
      "./_to-primitive": 59
    }],
    41: [function(_dereq_, module, exports) {
      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = _dereq_('./_to-iobject'),
        gOPN = _dereq_('./_object-gopn').f,
        toString = {}.toString;

      var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
        Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
      };

    }, {
      "./_object-gopn": 42,
      "./_to-iobject": 56
    }],
    42: [function(_dereq_, module, exports) {
      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = _dereq_('./_object-keys-internal'),
        hiddenKeys = _dereq_('./_enum-bug-keys').concat('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };
    }, {
      "./_enum-bug-keys": 18,
      "./_object-keys-internal": 45
    }],
    43: [function(_dereq_, module, exports) {
      exports.f = Object.getOwnPropertySymbols;
    }, {}],
    44: [function(_dereq_, module, exports) {
      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = _dereq_('./_has'),
        toObject = _dereq_('./_to-object'),
        IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
        ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function(O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }
        return O instanceof Object ? ObjectProto : null;
      };
    }, {
      "./_has": 23,
      "./_shared-key": 51,
      "./_to-object": 58
    }],
    45: [function(_dereq_, module, exports) {
      var has = _dereq_('./_has'),
        toIObject = _dereq_('./_to-iobject'),
        arrayIndexOf = _dereq_('./_array-includes')(false),
        IE_PROTO = _dereq_('./_shared-key')('IE_PROTO');

      module.exports = function(object, names) {
        var O = toIObject(object),
          i = 0,
          result = [],
          key;
        for (key in O)
          if (key != IE_PROTO) has(O, key) && result.push(key);
          // Don't enum bug & hidden keys
        while (names.length > i)
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        return result;
      };
    }, {
      "./_array-includes": 11,
      "./_has": 23,
      "./_shared-key": 51,
      "./_to-iobject": 56
    }],
    46: [function(_dereq_, module, exports) {
      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = _dereq_('./_object-keys-internal'),
        enumBugKeys = _dereq_('./_enum-bug-keys');

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };
    }, {
      "./_enum-bug-keys": 18,
      "./_object-keys-internal": 45
    }],
    47: [function(_dereq_, module, exports) {
      exports.f = {}.propertyIsEnumerable;
    }, {}],
    48: [function(_dereq_, module, exports) {
      module.exports = function(bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };
    }, {}],
    49: [function(_dereq_, module, exports) {
      module.exports = _dereq_('./_hide');
    }, {
      "./_hide": 24
    }],
    50: [function(_dereq_, module, exports) {
      var def = _dereq_('./_object-dp').f,
        has = _dereq_('./_has'),
        TAG = _dereq_('./_wks')('toStringTag');

      module.exports = function(it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
          configurable: true,
          value: tag
        });
      };
    }, {
      "./_has": 23,
      "./_object-dp": 38,
      "./_wks": 63
    }],
    51: [function(_dereq_, module, exports) {
      var shared = _dereq_('./_shared')('keys'),
        uid = _dereq_('./_uid');
      module.exports = function(key) {
        return shared[key] || (shared[key] = uid(key));
      };
    }, {
      "./_shared": 52,
      "./_uid": 60
    }],
    52: [function(_dereq_, module, exports) {
      var global = _dereq_('./_global'),
        SHARED = '__core-js_shared__',
        store = global[SHARED] || (global[SHARED] = {});
      module.exports = function(key) {
        return store[key] || (store[key] = {});
      };
    }, {
      "./_global": 22
    }],
    53: [function(_dereq_, module, exports) {
      var toInteger = _dereq_('./_to-integer'),
        defined = _dereq_('./_defined');
      // true  -> String#at
      // false -> String#codePointAt
      module.exports = function(TO_STRING) {
        return function(that, pos) {
          var s = String(defined(that)),
            i = toInteger(pos),
            l = s.length,
            a, b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
            TO_STRING ? s.charAt(i) : a :
            TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };
    }, {
      "./_defined": 15,
      "./_to-integer": 55
    }],
    54: [function(_dereq_, module, exports) {
      var toInteger = _dereq_('./_to-integer'),
        max = Math.max,
        min = Math.min;
      module.exports = function(index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };
    }, {
      "./_to-integer": 55
    }],
    55: [function(_dereq_, module, exports) {
      // 7.1.4 ToInteger
      var ceil = Math.ceil,
        floor = Math.floor;
      module.exports = function(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };
    }, {}],
    56: [function(_dereq_, module, exports) {
      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = _dereq_('./_iobject'),
        defined = _dereq_('./_defined');
      module.exports = function(it) {
        return IObject(defined(it));
      };
    }, {
      "./_defined": 15,
      "./_iobject": 27
    }],
    57: [function(_dereq_, module, exports) {
      // 7.1.15 ToLength
      var toInteger = _dereq_('./_to-integer'),
        min = Math.min;
      module.exports = function(it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };
    }, {
      "./_to-integer": 55
    }],
    58: [function(_dereq_, module, exports) {
      // 7.1.13 ToObject(argument)
      var defined = _dereq_('./_defined');
      module.exports = function(it) {
        return Object(defined(it));
      };
    }, {
      "./_defined": 15
    }],
    59: [function(_dereq_, module, exports) {
      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = _dereq_('./_is-object');
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function(it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };
    }, {
      "./_is-object": 29
    }],
    60: [function(_dereq_, module, exports) {
      var id = 0,
        px = Math.random();
      module.exports = function(key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };
    }, {}],
    61: [function(_dereq_, module, exports) {
      var global = _dereq_('./_global'),
        core = _dereq_('./_core'),
        LIBRARY = _dereq_('./_library'),
        wksExt = _dereq_('./_wks-ext'),
        defineProperty = _dereq_('./_object-dp').f;
      module.exports = function(name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
          value: wksExt.f(name)
        });
      };
    }, {
      "./_core": 13,
      "./_global": 22,
      "./_library": 35,
      "./_object-dp": 38,
      "./_wks-ext": 62
    }],
    62: [function(_dereq_, module, exports) {
      exports.f = _dereq_('./_wks');
    }, {
      "./_wks": 63
    }],
    63: [function(_dereq_, module, exports) {
      var store = _dereq_('./_shared')('wks'),
        uid = _dereq_('./_uid'),
        Symbol = _dereq_('./_global').Symbol,
        USE_SYMBOL = typeof Symbol == 'function';

      var $exports = module.exports = function(name) {
        return store[name] || (store[name] =
          USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
      };

      $exports.store = store;
    }, {
      "./_global": 22,
      "./_shared": 52,
      "./_uid": 60
    }],
    64: [function(_dereq_, module, exports) {

      var addToUnscopables = _dereq_('./_add-to-unscopables'),
        step = _dereq_('./_iter-step'),
        Iterators = _dereq_('./_iterators'),
        toIObject = _dereq_('./_to-iobject');

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = _dereq_('./_iter-define')(Array, 'Array', function(iterated, kind) {
        this._t = toIObject(iterated); // target
        this._i = 0; // next index
        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function() {
        var O = this._t,
          kind = this._k,
          index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');
    }, {
      "./_add-to-unscopables": 9,
      "./_iter-define": 31,
      "./_iter-step": 32,
      "./_iterators": 33,
      "./_to-iobject": 56
    }],
    65: [function(_dereq_, module, exports) {

    }, {}],
    66: [function(_dereq_, module, exports) {

      var $at = _dereq_('./_string-at')(true);

      // 21.1.3.27 String.prototype[@@iterator]()
      _dereq_('./_iter-define')(String, 'String', function(iterated) {
        this._t = String(iterated); // target
        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function() {
        var O = this._t,
          index = this._i,
          point;
        if (index >= O.length) return {
          value: undefined,
          done: true
        };
        point = $at(O, index);
        this._i += point.length;
        return {
          value: point,
          done: false
        };
      });
    }, {
      "./_iter-define": 31,
      "./_string-at": 53
    }],
    67: [function(_dereq_, module, exports) {

      // ECMAScript 6 symbols shim
      var global = _dereq_('./_global'),
        has = _dereq_('./_has'),
        DESCRIPTORS = _dereq_('./_descriptors'),
        $export = _dereq_('./_export'),
        redefine = _dereq_('./_redefine'),
        META = _dereq_('./_meta').KEY,
        $fails = _dereq_('./_fails'),
        shared = _dereq_('./_shared'),
        setToStringTag = _dereq_('./_set-to-string-tag'),
        uid = _dereq_('./_uid'),
        wks = _dereq_('./_wks'),
        wksExt = _dereq_('./_wks-ext'),
        wksDefine = _dereq_('./_wks-define'),
        keyOf = _dereq_('./_keyof'),
        enumKeys = _dereq_('./_enum-keys'),
        isArray = _dereq_('./_is-array'),
        anObject = _dereq_('./_an-object'),
        toIObject = _dereq_('./_to-iobject'),
        toPrimitive = _dereq_('./_to-primitive'),
        createDesc = _dereq_('./_property-desc'),
        _create = _dereq_('./_object-create'),
        gOPNExt = _dereq_('./_object-gopn-ext'),
        $GOPD = _dereq_('./_object-gopd'),
        $DP = _dereq_('./_object-dp'),
        $keys = _dereq_('./_object-keys'),
        gOPD = $GOPD.f,
        dP = $DP.f,
        gOPN = gOPNExt.f,
        $Symbol = global.Symbol,
        $JSON = global.JSON,
        _stringify = $JSON && $JSON.stringify,
        PROTOTYPE = 'prototype',
        HIDDEN = wks('_hidden'),
        TO_PRIMITIVE = wks('toPrimitive'),
        isEnum = {}.propertyIsEnumerable,
        SymbolRegistry = shared('symbol-registry'),
        AllSymbols = shared('symbols'),
        OPSymbols = shared('op-symbols'),
        ObjectProto = Object[PROTOTYPE],
        USE_NATIVE = typeof $Symbol == 'function',
        QObject = global.QObject;
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc = DESCRIPTORS && $fails(function() {
        return _create(dP({}, 'a', {
          get: function() {
            return dP(this, 'a', {
              value: 7
            }).a;
          }
        })).a != 7;
      }) ? function(it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
      } : dP;

      var wrap = function(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
      };

      var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
        return typeof it == 'symbol';
      } : function(it) {
        return it instanceof $Symbol;
      };

      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, {
              enumerable: createDesc(0, false)
            });
          }
          return setSymbolDesc(it, key, D);
        }
        return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P)),
          i = 0,
          l = keys.length,
          key;
        while (l > i) $defineProperty(it, key = keys[i++], P[key]);
        return it;
      };
      var $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it)),
          result = [],
          i = 0,
          key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        }
        return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto,
          names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
          result = [],
          i = 0,
          key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        }
        return result;
      };

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function Symbol() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
          var $set = function(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
            configurable: true,
            set: $set
          });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return this._k;
        });

        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        _dereq_('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
        _dereq_('./_object-pie').f = $propertyIsEnumerable;
        _dereq_('./_object-gops').f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !_dereq_('./_library')) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }

        wksExt.f = function(name) {
          return wrap(wks(name));
        }
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, {
        Symbol: $Symbol
      });

      for (var symbols = (
          // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
          'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
        ).split(','), i = 0; symbols.length > i;) wks(symbols[i++]);

      for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);

      $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        'for': function(key) {
          return has(SymbolRegistry, key += '') ?
            SymbolRegistry[key] :
            SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(key) {
          if (isSymbol(key)) return keyOf(SymbolRegistry, key);
          throw TypeError(key + ' is not a symbol!');
        },
        useSetter: function() {
          setter = true;
        },
        useSimple: function() {
          setter = false;
        }
      });

      $export($export.S + $export.F * !USE_NATIVE, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
        var S = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
        return _stringify([S]) != '[null]' || _stringify({
          a: S
        }) != '{}' || _stringify(Object(S)) != '{}';
      })), 'JSON', {
        stringify: function stringify(it) {
          if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
          var args = [it],
            i = 1,
            replacer, $replacer;
          while (arguments.length > i) args.push(arguments[i++]);
          replacer = args[1];
          if (typeof replacer == 'function') $replacer = replacer;
          if ($replacer || !isArray(replacer)) replacer = function(key, value) {
            if ($replacer) value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        }
      });

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || _dereq_('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, 'Symbol');
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, 'Math', true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, 'JSON', true);
    }, {
      "./_an-object": 10,
      "./_descriptors": 16,
      "./_enum-keys": 19,
      "./_export": 20,
      "./_fails": 21,
      "./_global": 22,
      "./_has": 23,
      "./_hide": 24,
      "./_is-array": 28,
      "./_keyof": 34,
      "./_library": 35,
      "./_meta": 36,
      "./_object-create": 37,
      "./_object-dp": 38,
      "./_object-gopd": 40,
      "./_object-gopn": 42,
      "./_object-gopn-ext": 41,
      "./_object-gops": 43,
      "./_object-keys": 46,
      "./_object-pie": 47,
      "./_property-desc": 48,
      "./_redefine": 49,
      "./_set-to-string-tag": 50,
      "./_shared": 52,
      "./_to-iobject": 56,
      "./_to-primitive": 59,
      "./_uid": 60,
      "./_wks": 63,
      "./_wks-define": 61,
      "./_wks-ext": 62
    }],
    68: [function(_dereq_, module, exports) {
      _dereq_('./_wks-define')('asyncIterator');
    }, {
      "./_wks-define": 61
    }],
    69: [function(_dereq_, module, exports) {
      _dereq_('./_wks-define')('observable');
    }, {
      "./_wks-define": 61
    }],
    70: [function(_dereq_, module, exports) {
      _dereq_('./es6.array.iterator');
      var global = _dereq_('./_global'),
        hide = _dereq_('./_hide'),
        Iterators = _dereq_('./_iterators'),
        TO_STRING_TAG = _dereq_('./_wks')('toStringTag');

      for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
        var NAME = collections[i],
          Collection = global[NAME],
          proto = Collection && Collection.prototype;
        if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
        Iterators[NAME] = Iterators.Array;
      }
    }, {
      "./_global": 22,
      "./_hide": 24,
      "./_iterators": 33,
      "./_wks": 63,
      "./es6.array.iterator": 64
    }],
    71: [function(_dereq_, module, exports) {

      var Aggregations = module.exports = {
        toAggregateFunc: function toAggregateFunc(func) {
          if (func) {
            if (typeof func === 'string' && Aggregations[func]) {
              return Aggregations[func];
            } else if (typeof func === 'function') {
              return func;
            } else {
              return Aggregations.sum;
            }
          } else {
            return Aggregations.sum;
          }
        },
        count: function count(datafield, intersection, datasource) {
          return intersection === 'all' ? datasource.length : intersection.length;
        },
        sum: function sum(datafield, intersection, datasource) {
          var sum = 0;
          forEachIntersection(datafield, intersection, datasource, function(val) {
            sum += val;
          });
          return sum;
        },
        min: function min(datafield, intersection, datasource) {
          var min = null;
          forEachIntersection(datafield, intersection, datasource, function(val) {
            if (min == null || val < min) {
              min = val;
            }
          });
          return min;
        },
        max: function max(datafield, intersection, datasource) {
          var max = null;
          forEachIntersection(datafield, intersection, datasource, function(val) {
            if (max == null || val > max) {
              max = val;
            }
          });
          return max;
        },
        avg: function avg(datafield, intersection, datasource) {
          var avg = 0;
          var len = (intersection === 'all' ? datasource : intersection).length;
          if (len > 0) {
            forEachIntersection(datafield, intersection, datasource, function(val) {
              avg += val;
            });
            avg /= len;
          }
          return avg;
        },
        prod: function prod(datafield, intersection, datasource) {
          var prod;
          var len = (intersection === 'all' ? datasource : intersection).length;
          if (len > 0) {
            prod = 1;
            forEachIntersection(datafield, intersection, datasource, function(val) {
              prod *= val;
            });
          }
          return prod;
        },
        stdev: function stdev(datafield, intersection, datasource) {
          return Math.sqrt(calcVariance(datafield, intersection, datasource, false));
        },
        stdevp: function stdevp(datafield, intersection, datasource) {
          return Math.sqrt(calcVariance(datafield, intersection, datasource, true));
        },
        'var': function _var(datafield, intersection, datasource) {
          return calcVariance(datafield, intersection, datasource, false);
        },
        varp: function varp(datafield, intersection, datasource) {
          return calcVariance(datafield, intersection, datasource, true);
        }
      };

      function calcVariance(datafield, intersection, datasource, population) {
        var variance = 0;
        var avg = 0;
        var len = (intersection === 'all' ? datasource : intersection).length;
        if (len > 0) {
          if (population || len > 1) {
            forEachIntersection(datafield, intersection, datasource, function(val) {
              avg += val;
            });
            avg /= len;
            forEachIntersection(datafield, intersection, datasource, function(val) {
              variance += (val - avg) * (val - avg);
            });
            variance = variance / (population ? len : len - 1);
          } else {
            variance = NaN;
          }
        }
        return variance;
      }

      function forEachIntersection(datafield, intersection, datasource, callback) {
        var all = intersection === 'all';
        intersection = all ? datasource : intersection;
        if (intersection.length > 0) {
          for (var i = 0; i < intersection.length; i++) {
            callback((all ? intersection[i] : datasource[intersection[i]])[datafield]);
          }
        }
      }

    }, {}],
    72: [function(_dereq_, module, exports) {

      var utils = _dereq_('./orb.utils');
      var Dimension = _dereq_('./orb.dimension');

      var AxeType = {
        COLUMNS: 1,
        ROWS: 2,
        DATA: 3
      };

      module.exports = function(pgrid, type) {

        var self = this;
        var dimid = 0;

        if (pgrid != null && pgrid.config != null) {


          this.pgrid = pgrid;


          this.type = type;


          this.fields = function() {
            switch (type) {
              case AxeType.COLUMNS:
                return self.pgrid.config.columnFields;
              case AxeType.ROWS:
                return self.pgrid.config.rowFields;
              case AxeType.DATA:
                return self.pgrid.config.dataFields;
              default:
                return [];
            }
          }();


          this.dimensionsCount = null;


          this.root = null;


          this.dimensionsByDepth = null;

          this.update = function() {
            self.dimensionsCount = self.fields.length;
            self.root = new Dimension(++dimid, null, null, null, self.dimensionsCount + 1, true);

            self.dimensionsByDepth = {};
            for (var depth = 1; depth <= self.dimensionsCount; depth++) {
              self.dimensionsByDepth[depth] = [];
            }

            // fill data
            fill();

            // initial sort
            for (var findex = 0; findex < self.fields.length; findex++) {
              var ffield = self.fields[findex];
              if (ffield.sort.order === 'asc' || ffield.sort.order === 'desc') {
                self.sort(ffield, true);
              }
            }
          };

          this.sort = function(field, donottoggle) {
            if (field != null) {
              if (donottoggle !== true) {
                if (field.sort.order !== 'asc') {
                  field.sort.order = 'asc';
                } else {
                  field.sort.order = 'desc';
                }
              }

              var depth = self.dimensionsCount - getfieldindex(field);
              var parents = depth === self.dimensionsCount ? [self.root] : self.dimensionsByDepth[depth + 1];
              for (var i = 0; i < parents.length; i++) {
                if (field.sort.customfunc != null) {
                  parents[i].values.sort(field.sort.customfunc);
                } else {
                  parents[i].values.sort();
                }
                if (field.sort.order === 'desc') {
                  parents[i].values.reverse();
                }
              }
            }
          };

          this.flattenValues = function() {
            return self.dimensionsByDepth[1].map(function(dim) {
              var name = '';
              var currDim = dim;
              while (!currDim.isRoot) {
                name = currDim.value + (name !== '' ? '-' + name : '');
                currDim = currDim.parent;
              }
              return {
                name: name,
                dim: dim
              };
            }).sort(function(a, b) {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            });
          };
        }

        function getfieldindex(field) {
          for (var i = 0; i < self.fields.length; i++) {
            if (self.fields[i].name === field.name) {
              return i;
            }
          }
          return -1;
        }


        function fill() {

          if (self.pgrid.filteredDataSource != null && self.dimensionsCount > 0) {

            var datasource = self.pgrid.filteredDataSource;
            if (datasource != null && utils.isArray(datasource) && datasource.length > 0) {
              for (var rowIndex = 0, dataLength = datasource.length; rowIndex < dataLength; rowIndex++) {
                var row = datasource[rowIndex];
                var dim = self.root;
                for (var findex = 0; findex < self.dimensionsCount; findex++) {
                  var depth = self.dimensionsCount - findex;
                  var subfield = self.fields[findex];
                  var subvalue = row[subfield.name];
                  var subdimvals = dim.subdimvals;

                  if (subdimvals[subvalue] !== undefined) {
                    dim = subdimvals[subvalue];
                  } else {
                    dim.values.push(subvalue);
                    dim = new Dimension(++dimid, dim, subvalue, subfield, depth, false, findex == self.dimensionsCount - 1);
                    subdimvals[subvalue] = dim;
                    dim.rowIndexes = [];
                    self.dimensionsByDepth[depth].push(dim);
                  }

                  dim.rowIndexes.push(rowIndex);
                }
              }
            }
          }
        }
      };

      module.exports.Type = AxeType;

    }, {
      "./orb.dimension": 74,
      "./orb.utils": 89
    }],
    73: [function(_dereq_, module, exports) {

      var utils = _dereq_('./orb.utils');
      var axe = _dereq_('./orb.axe');
      var aggregation = _dereq_('./orb.aggregation');
      var filtering = _dereq_('./orb.filtering');
      var themeManager = _dereq_('./orb.themes');

      function getpropertyvalue(property, configs, defaultvalue) {
        for (var i = 0; i < configs.length; i++) {
          if (configs[i][property] != null) {
            return configs[i][property];
          }
        }
        return defaultvalue;
      }

      function mergefieldconfigs() {

        var merged = {
          configs: [],
          sorts: [],
          subtotals: [],
          functions: []
        };

        for (var i = 0; i < arguments.length; i++) {
          var nnconfig = arguments[i] || {};
          merged.configs.push(nnconfig);
          merged.sorts.push(nnconfig.sort || {});
          merged.subtotals.push(nnconfig.subTotal || {});
          merged.functions.push({
            aggregateFuncName: nnconfig.aggregateFuncName,
            aggregateFunc: i === 0 ? nnconfig.aggregateFunc : nnconfig.aggregateFunc ? nnconfig.aggregateFunc() : null,
            formatFunc: i === 0 ? nnconfig.formatFunc : nnconfig.formatFunc ? nnconfig.formatFunc() : null
          });
        }

        return merged;
      }

      function createfield(rootconfig, axetype, fieldconfig, defaultfieldconfig) {

        var axeconfig;
        var fieldAxeconfig;

        if (defaultfieldconfig) {
          switch (axetype) {
            case axe.Type.ROWS:
              axeconfig = rootconfig.rowSettings;
              fieldAxeconfig = defaultfieldconfig.rowSettings;
              break;
            case axe.Type.COLUMNS:
              axeconfig = rootconfig.columnSettings;
              fieldAxeconfig = defaultfieldconfig.columnSettings;
              break;
            case axe.Type.DATA:
              axeconfig = rootconfig.dataSettings;
              fieldAxeconfig = defaultfieldconfig.dataSettings;
              break;
            default:
              axeconfig = null;
              fieldAxeconfig = null;
              break;
          }
        } else {
          axeconfig = null;
          fieldAxeconfig = null;
        }

        var merged = mergefieldconfigs(fieldconfig, fieldAxeconfig, axeconfig, defaultfieldconfig, rootconfig);

        return new Field({
          name: getpropertyvalue('name', merged.configs, ''),

          caption: getpropertyvalue('caption', merged.configs, ''),

          sort: {
            order: getpropertyvalue('order', merged.sorts, null),
            customfunc: getpropertyvalue('customfunc', merged.sorts, null)
          },
          subTotal: {
            visible: getpropertyvalue('visible', merged.subtotals, true),
            collapsible: getpropertyvalue('collapsible', merged.subtotals, true),
            collapsed: getpropertyvalue('collapsed', merged.subtotals, false) && getpropertyvalue('collapsible', merged.subtotals, true)
          },

          aggregateFuncName: getpropertyvalue('aggregateFuncName', merged.functions, 'sum'),
          aggregateFunc: getpropertyvalue('aggregateFunc', merged.functions, aggregation.sum),
          formatFunc: getpropertyvalue('formatFunc', merged.functions, null)
        }, false);
      }

      function GrandTotalConfig(options) {

        options = options || {};

        this.rowsvisible = options.rowsvisible !== undefined ? options.rowsvisible : true;
        this.columnsvisible = options.columnsvisible !== undefined ? options.columnsvisible : true;
      }

      function SubTotalConfig(options, setdefaults) {

        var defaults = {
          visible: setdefaults === true ? true : undefined,
          collapsible: setdefaults === true ? true : undefined,
          collapsed: setdefaults === true ? false : undefined
        };
        options = options || {};

        this.visible = options.visible !== undefined ? options.visible : defaults.visible;
        this.collapsible = options.collapsible !== undefined ? options.collapsible : defaults.collapsible;
        this.collapsed = options.collapsed !== undefined ? options.collapsed : defaults.collapsed;
      }

      function SortConfig(options) {
        options = options || {};

        this.order = options.order || (options.customfunc ? 'asc' : null);
        this.customfunc = options.customfunc;
      }

      function ChartConfig(options) {
        options = options || {};

        this.enabled = options.enabled || false;
        // type can be: 'LineChart', 'AreaChart', 'ColumnChart', 'BarChart', 'SteppedAreaChart'
        this.type = options.type || 'LineChart';
      }

      var Field = module.exports.field = function(options, createSubOptions) {

        options = options || {};

        // field name
        this.name = options.name;

        // shared settings
        this.caption = options.caption || this.name;

        // rows & columns settings
        this.sort = new SortConfig(options.sort);
        this.subTotal = new SubTotalConfig(options.subTotal);

        // data settings
        var _aggregatefunc;
        var _formatfunc;

        function defaultFormatFunc(val) {
          return val != null ? val.toString() : '';
        }

        this.aggregateFunc = function(func) {
          if (func) {
            _aggregatefunc = aggregation.toAggregateFunc(func);
          } else {
            return _aggregatefunc;
          }
        };

        this.formatFunc = function(func) {
          if (func) {
            _formatfunc = func;
          } else {
            return _formatfunc;
          }
        };

        this.aggregateFuncName = options.aggregateFuncName || (options.aggregateFunc ? utils.isString(options.aggregateFunc) ? options.aggregateFunc : 'custom' : null);

        this.aggregateFunc(options.aggregateFunc);
        this.formatFunc(options.formatFunc || defaultFormatFunc);

        if (createSubOptions !== false) {
          (this.rowSettings = new Field(options.rowSettings, false)).name = this.name;
          (this.columnSettings = new Field(options.columnSettings, false)).name = this.name;
          (this.dataSettings = new Field(options.dataSettings, false)).name = this.name;
        }
      };

      module.exports.config = function(config) {

        var self = this;

        this.dataSource = config.dataSource || [];
        this.canMoveFields = config.canMoveFields !== undefined ? !!config.canMoveFields : true;
        this.dataHeadersLocation = config.dataHeadersLocation === 'columns' ? 'columns' : 'rows';
        this.grandTotal = new GrandTotalConfig(config.grandTotal);
        this.subTotal = new SubTotalConfig(config.subTotal, true);
        this.width = config.width;
        this.height = config.height;
        this.toolbar = config.toolbar;
        this.theme = themeManager;
        this.chartMode = new ChartConfig(config.chartMode);

        themeManager.current(config.theme);

        this.rowSettings = new Field(config.rowSettings, false);
        this.columnSettings = new Field(config.columnSettings, false);
        this.dataSettings = new Field(config.dataSettings, false);

        // datasource field names
        this.dataSourceFieldNames = [];
        // datasource field captions
        this.dataSourceFieldCaptions = [];

        this.captionToName = function(caption) {
          var fcaptionIndex = self.dataSourceFieldCaptions.indexOf(caption);
          return fcaptionIndex >= 0 ? self.dataSourceFieldNames[fcaptionIndex] : caption;
        };

        this.nameToCaption = function(name) {
          var fnameIndex = self.dataSourceFieldNames.indexOf(name);
          return fnameIndex >= 0 ? self.dataSourceFieldCaptions[fnameIndex] : name;
        };

        this.setTheme = function(newTheme) {
          return self.theme.current() !== self.theme.current(newTheme);
        };

        this.allFields = (config.fields || []).map(function(fieldconfig) {
          var f = new Field(fieldconfig);
          // map fields names to captions
          self.dataSourceFieldNames.push(f.name);
          self.dataSourceFieldCaptions.push(f.caption);
          return f;
        });

        function ensureFieldConfig(obj) {
          if (typeof obj === 'string') {
            return {
              name: self.captionToName(obj)
            };
          }
          return obj;
        }

        this.rowFields = (config.rows || []).map(function(fieldconfig) {
          fieldconfig = ensureFieldConfig(fieldconfig);
          return createfield(self, axe.Type.ROWS, fieldconfig, getfield(self.allFields, fieldconfig.name));
        });

        this.columnFields = (config.columns || []).map(function(fieldconfig) {
          fieldconfig = ensureFieldConfig(fieldconfig);
          return createfield(self, axe.Type.COLUMNS, fieldconfig, getfield(self.allFields, fieldconfig.name));
        });

        this.dataFields = (config.data || []).map(function(fieldconfig) {
          fieldconfig = ensureFieldConfig(fieldconfig);
          return createfield(self, axe.Type.DATA, fieldconfig, getfield(self.allFields, fieldconfig.name));
        });

        this.dataFieldsCount = this.dataFields ? this.dataFields.length || 1 : 1;

        var runtimeVisibility = {
          subtotals: {
            rows: self.rowSettings.subTotal.visible !== undefined ? self.rowSettings.subTotal.visible : true,
            columns: self.columnSettings.subTotal.visible !== undefined ? self.columnSettings.subTotal.visible : true
          }
        };

        function getfield(axefields, fieldname) {
          var fieldindex = getfieldindex(axefields, fieldname);
          if (fieldindex > -1) {
            return axefields[fieldindex];
          }
          return null;
        }

        function getfieldindex(axefields, fieldname) {
          for (var fi = 0; fi < axefields.length; fi++) {
            if (axefields[fi].name === fieldname) {
              return fi;
            }
          }
          return -1;
        }

        this.getField = function(fieldname) {
          return getfield(self.allFields, fieldname);
        };

        this.getRowField = function(fieldname) {
          return getfield(self.rowFields, fieldname);
        };

        this.getColumnField = function(fieldname) {
          return getfield(self.columnFields, fieldname);
        };

        this.getDataField = function(fieldname) {
          return getfield(self.dataFields, fieldname);
        };

        this.availablefields = function() {
          return self.allFields.filter(function(field) {
            var notequalfield = function notequalfield(otherfield) {
              return field.name !== otherfield.name;
            };

            return self.dataFields.every(notequalfield) && self.rowFields.every(notequalfield) && self.columnFields.every(notequalfield);
          });
        };

        this.getDataSourceFieldCaptions = function() {
          var row0;
          if (self.dataSource && (row0 = self.dataSource[0])) {
            var fieldNames = utils.ownProperties(row0);
            var headers = [];
            for (var i = 0; i < fieldNames.length; i++) {
              headers.push(self.nameToCaption(fieldNames[i]));
            }
            return headers;
          }
          return null;
        };

        this.getPreFilters = function() {
          var prefilters = {};
          if (config.preFilters) {
            utils.forEach(utils.ownProperties(config.preFilters), function(filteredField) {
              var prefilterConfig = config.preFilters[filteredField];
              if (utils.isArray(prefilterConfig)) {
                prefilters[self.captionToName(filteredField)] = new filtering.expressionFilter(null, null, prefilterConfig, false);
              } else {
                var opname = utils.ownProperties(prefilterConfig)[0];
                if (opname) {
                  prefilters[self.captionToName(filteredField)] = new filtering.expressionFilter(opname, prefilterConfig[opname]);
                }
              }
            });
          }

          return prefilters;
        };

        this.moveField = function(fieldname, oldaxetype, newaxetype, position) {

          var oldaxe, oldposition;
          var newaxe;
          var fieldConfig;
          var defaultFieldConfig = getfield(self.allFields, fieldname);

          if (defaultFieldConfig) {

            switch (oldaxetype) {
              case axe.Type.ROWS:
                oldaxe = self.rowFields;
                break;
              case axe.Type.COLUMNS:
                oldaxe = self.columnFields;
                break;
              case axe.Type.DATA:
                oldaxe = self.dataFields;
                break;
              default:
                break;
            }

            switch (newaxetype) {
              case axe.Type.ROWS:
                newaxe = self.rowFields;
                fieldConfig = self.getRowField(fieldname);
                break;
              case axe.Type.COLUMNS:
                newaxe = self.columnFields;
                fieldConfig = self.getColumnField(fieldname);
                break;
              case axe.Type.DATA:
                newaxe = self.dataFields;
                fieldConfig = self.getDataField(fieldname);
                break;
              default:
                break;
            }

            if (oldaxe || newaxe) {

              var newAxeSubtotalsState = self.areSubtotalsVisible(newaxetype);

              if (oldaxe) {
                oldposition = getfieldindex(oldaxe, fieldname);
                if (oldaxetype === newaxetype) {
                  if (oldposition == oldaxe.length - 1 && position == null || oldposition === position - 1) {
                    return false;
                  }
                }
                oldaxe.splice(oldposition, 1);
              }

              var field = createfield(self, newaxetype, fieldConfig, defaultFieldConfig);

              if (!newAxeSubtotalsState && field.subTotal.visible !== false) {
                field.subTotal.visible = null;
              }

              if (newaxe) {
                if (position != null) {
                  newaxe.splice(position, 0, field);
                } else {
                  newaxe.push(field);
                }
              }

              // update data fields count
              self.dataFieldsCount = self.dataFields ? self.dataFields.length || 1 : 1;

              return true;
            }
          }
        };

        this.toggleSubtotals = function(axetype) {

          var i;
          var axeFields;
          var newState = !self.areSubtotalsVisible(axetype);

          if (axetype === axe.Type.ROWS) {
            runtimeVisibility.subtotals.rows = newState;
            axeFields = self.rowFields;
          } else if (axetype === axe.Type.COLUMNS) {
            runtimeVisibility.subtotals.columns = newState;
            axeFields = self.columnFields;
          } else {
            return false;
          }

          newState = newState === false ? null : true;
          for (i = 0; i < axeFields.length; i++) {
            if (axeFields[i].subTotal.visible !== false) {
              axeFields[i].subTotal.visible = newState;
            }
          }
          return true;
        };

        this.areSubtotalsVisible = function(axetype) {
          if (axetype === axe.Type.ROWS) {
            return runtimeVisibility.subtotals.rows;
          } else if (axetype === axe.Type.COLUMNS) {
            return runtimeVisibility.subtotals.columns;
          } else {
            return null;
          }
        };

        this.toggleGrandtotal = function(axetype) {
          var newState = !self.isGrandtotalVisible(axetype);

          if (axetype === axe.Type.ROWS) {
            self.grandTotal.rowsvisible = newState;
          } else if (axetype === axe.Type.COLUMNS) {
            self.grandTotal.columnsvisible = newState;
          } else {
            return false;
          }
          return true;
        };

        this.isGrandtotalVisible = function(axetype) {
          if (axetype === axe.Type.ROWS) {
            return self.grandTotal.rowsvisible;
          } else if (axetype === axe.Type.COLUMNS) {
            return self.grandTotal.columnsvisible;
          } else {
            return false;
          }
        };
      };

    }, {
      "./orb.aggregation": 71,
      "./orb.axe": 72,
      "./orb.filtering": 76,
      "./orb.themes": 82,
      "./orb.utils": 89
    }],
    74: [function(_dereq_, module, exports) {

      module.exports = function(id, parent, value, field, depth, isRoot, isLeaf) {

        var self = this;

        this.id = id;

        this.parent = parent;

        this.value = value;

        this.isRoot = isRoot;

        this.isLeaf = isLeaf;

        this.field = field;

        this.depth = depth;

        this.values = [];

        this.subdimvals = {};

        this.rowIndexes = null;

        this.getRowIndexes = function(result) {
          if (self.rowIndexes == null) {
            self.rowIndexes = [];
            for (var i = 0; i < self.values.length; i++) {
              self.subdimvals[self.values[i]].getRowIndexes(self.rowIndexes);
            }
          }
          if (result != null) {
            for (var j = 0; j < self.rowIndexes.length; j++) {
              result.push(self.rowIndexes[j]);
            }
            return result;
          } else {
            return self.rowIndexes;
          }
        };
      };

    }, {}],
    75: [function(_dereq_, module, exports) {

      var utils = _dereq_('./orb.utils');
      var uiheaders = _dereq_('./orb.ui.header');
      var themeManager = _dereq_('./orb.themes');

      var uriHeader = 'data:application/vnd.ms-excel;base64,';
      var docHeader = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">' + '<head>' + '<meta http-equiv=Content-Type content="text/html; charset=UTF-8">' + '<!--[if gte mso 9]><xml>' + ' <x:ExcelWorkbook>' + '  <x:ExcelWorksheets>' + '   <x:ExcelWorksheet>' + '    <x:Name>###sheetname###</x:Name>' + '    <x:WorksheetOptions>' + '     <x:ProtectContents>False</x:ProtectContents>' + '     <x:ProtectObjects>False</x:ProtectObjects>' + '     <x:ProtectScenarios>False</x:ProtectScenarios>' + '    </x:WorksheetOptions>' + '   </x:ExcelWorksheet>' + '  </x:ExcelWorksheets>' + '  <x:ProtectStructure>False</x:ProtectStructure>' + '  <x:ProtectWindows>False</x:ProtectWindows>' + ' </x:ExcelWorkbook>' + '</xml><![endif]-->' + '</head>' + '<body>';
      var docFooter = '</body></html>';

      module.exports = function(pgridwidget) {

        var config = pgridwidget.pgrid.config;

        var currTheme = themeManager.current();
        currTheme = currTheme === 'bootstrap' ? 'white' : currTheme;
        var override = currTheme === 'white';

        var buttonTextColor = override ? 'black' : 'white';
        var themeColor = themeManager.themes[currTheme];
        var themeFadeout = themeManager.utils.fadeoutColor(themeColor, 0.1);

        var buttonStyle = 'style="font-weight: bold; color: ' + buttonTextColor + '; background-color: ' + themeColor + ';" bgcolor="' + themeColor + '"';
        var headerStyle = 'style="background-color: ' + themeFadeout + ';" bgcolor="' + themeFadeout + '"';

        function createButtonCell(caption) {
          return '<td ' + buttonStyle + '><font color="' + buttonTextColor + '">' + caption + '</font></td>';
        }

        function createButtons(buttons, cellsCountBefore, cellsCountAfter, prefix) {
          var i;
          var str = prefix || '<tr>';
          for (i = 0; i < cellsCountBefore; i++) {
            str += '<td></td>';
          }

          str += buttons.reduce(function(tr, field) {
            return tr += createButtonCell(field.caption);
          }, '');

          for (i = 0; i < cellsCountAfter; i++) {
            str += '<td></td>';
          }
          return str + '</tr>';
        }

        var cellsHorizontalCount = Math.max(config.dataFields.length + 1, pgridwidget.layout.pivotTable.width);

        var dataFields = createButtons(config.dataFields, 0, cellsHorizontalCount - config.dataFields.length, '<tr><td><font color="#ccc">Data</font></td>');

        var sep = '<tr><td style="height: 22px;" colspan="' + cellsHorizontalCount + '"></td></tr>';

        var columnFields = createButtons(config.columnFields, pgridwidget.layout.rowHeaders.width, cellsHorizontalCount - (pgridwidget.layout.rowHeaders.width + config.columnFields.length));

        var columnHeaders = function() {
          var str = '';
          var j;
          for (var i = 0; i < pgridwidget.columns.headers.length; i++) {
            var currRow = pgridwidget.columns.headers[i];
            var rowStr = '<tr>';
            if (i < pgridwidget.columns.headers.length - 1) {
              for (j = 0; j < pgridwidget.layout.rowHeaders.width; j++) {
                rowStr += '<td></td>';
              }
            } else {
              rowStr += config.rowFields.reduce(function(tr, field) {
                return tr += createButtonCell(field.caption);
              }, '');
            }

            rowStr += currRow.reduce(function(tr, header) {
              var value = header.type === uiheaders.HeaderType.DATA_HEADER ? header.value.caption : header.value;
              return tr += '<td ' + headerStyle + ' colspan="' + header.hspan(true) + '" rowspan="' + header.vspan(true) + '">' + value + '</td>';
            }, '');
            str += rowStr + '</tr>';
          }
          return str;
        }();

        var rowHeadersAndDataCells = function() {
          var str = '';
          var j;
          for (var i = 0; i < pgridwidget.rows.headers.length; i++) {
            var currRow = pgridwidget.rows.headers[i];
            var rowStr = '<tr>';
            rowStr += currRow.reduce(function(tr, header) {
              return tr += '<td ' + headerStyle + ' colspan="' + header.hspan(true) + '" rowspan="' + header.vspan(true) + '">' + header.value + '</td>';
            }, '');
            var dataRow = pgridwidget.dataRows[i];
            rowStr += dataRow.reduce(function(tr, dataCell, index) {
              var formatFunc = config.dataFields[index = index % config.dataFields.length].formatFunc;
              var value = dataCell.value == null ? '' : formatFunc ? formatFunc()(dataCell.value) : dataCell.value;
              return tr += '<td>' + value + '</td>';
            }, '');
            str += rowStr + '</tr>';
          }
          return str;
        }();

        function toBase64(str) {
          return utils.btoa(unescape(encodeURIComponent(str)));
        }

        return uriHeader + toBase64(docHeader + '<table>' + dataFields + sep + columnFields + columnHeaders + rowHeadersAndDataCells + '</table>' + docFooter);
      };

    }, {
      "./orb.themes": 82,
      "./orb.ui.header": 85,
      "./orb.utils": 89
    }],
    76: [function(_dereq_, module, exports) {

      var utils = _dereq_('./orb.utils');

      var filtering = module.exports = {
        ALL: '#All#',
        NONE: '#None#',
        BLANK: '#Blank#"'
      };

      filtering.expressionFilter = function(operator, term, staticValue, excludeStatic) {
        var self = this;

        this.operator = ops.get(operator);
        this.regexpMode = false;
        this.term = term || null;
        if (this.term && this.operator && this.operator.regexpSupported) {
          if (utils.isRegExp(this.term)) {
            this.regexpMode = true;
            if (!this.term.ignoreCase) {
              this.term = new RegExp(this.term.source, 'i');
            }
          }
        }

        this.staticValue = staticValue;
        this.excludeStatic = excludeStatic;

        this.test = function(value) {
          if (utils.isArray(self.staticValue)) {
            var found = self.staticValue.indexOf(value) >= 0;
            return self.excludeStatic && !found || !self.excludeStatic && found;
          } else if (self.term) {
            return self.operator.func(value, self.term);
          } else if (self.staticValue === true || self.staticValue === filtering.ALL) {
            return true;
          } else if (self.staticValue === false || self.staticValue === filtering.NONE) {
            return false;
          } else {
            return true;
          }
        };

        this.isAlwaysTrue = function() {
          return !(self.term || utils.isArray(self.staticValue) || self.staticValue === filtering.NONE || self.staticValue === false);
        };
      };

      var ops = filtering.Operators = {
        get: function get(opname) {
          switch (opname) {
            case ops.MATCH.name:
              return ops.MATCH;
            case ops.NOTMATCH.name:
              return ops.NOTMATCH;
            case ops.EQ.name:
              return ops.EQ;
            case ops.NEQ.name:
              return ops.NEQ;
            case ops.GT.name:
              return ops.GT;
            case ops.GTE.name:
              return ops.GTE;
            case ops.LT.name:
              return ops.LT;
            case ops.LTE.name:
              return ops.LTE;
            default:
              return ops.NONE;
          }
        },
        NONE: null,
        MATCH: {
          name: 'Matches',
          func: function func(value, term) {
            if (value) {
              return value.toString().search(utils.isRegExp(term) ? term : new RegExp(term, 'i')) >= 0;
            } else {
              return !!!term;
            }
          },
          regexpSupported: true
        },
        NOTMATCH: {
          name: 'Does Not Match',
          func: function func(value, term) {
            if (value) {
              return value.toString().search(utils.isRegExp(term) ? term : new RegExp(term, 'i')) < 0;
            } else {
              return !!term;
            }
          },
          regexpSupported: true
        },
        EQ: {
          name: '=',
          func: function func(value, term) {
            return value == term;
          },
          regexpSupported: false
        },
        NEQ: {
          name: '<>',
          func: function func(value, term) {
            return value != term;
          },
          regexpSupported: false
        },
        GT: {
          name: '>',
          func: function func(value, term) {
            return value > term;
          },
          regexpSupported: false
        },
        GTE: {
          name: '>=',
          func: function func(value, term) {
            return value >= term;
          },
          regexpSupported: false
        },
        LT: {
          name: '<',
          func: function func(value, term) {
            return value < term;
          },
          regexpSupported: false
        },
        LTE: {
          name: '<=',
          func: function func(value, term) {
            return value <= term;
          },
          regexpSupported: false
        }
      };

    }, {
      "./orb.utils": 89
    }],
    77: [function(_dereq_, module, exports) {

      module.exports.utils = _dereq_('./orb.utils');
      module.exports.pgrid = _dereq_('./orb.pgrid');
      module.exports.pgridwidget = _dereq_('./orb.ui.pgridwidget');
      module.exports.query = _dereq_('./orb.query');
      module.exports['export'] = _dereq_('./orb.export.excel');

    }, {
      "./orb.export.excel": 75,
      "./orb.pgrid": 78,
      "./orb.query": 80,
      "./orb.ui.pgridwidget": 86,
      "./orb.utils": 89
    }],
    78: [function(_dereq_, module, exports) {

      var PubSub = _dereq_('./orb.pubsub'),
        axe = _dereq_('./orb.axe'),
        configuration = _dereq_('./orb.config').config,
        filtering = _dereq_('./orb.filtering'),
        query = _dereq_('./orb.query'),
        utils = _dereq_('./orb.utils');

      var pgrid = module.exports = function(config) {

        var self = this,
          defaultfield = {
            name: '#undefined#'
          },
          _iCache;

        // inherit PubSub
        PubSub.call(this);

        this.config = new configuration(config);
        this.filters = self.config.getPreFilters();
        this.filteredDataSource = self.config.dataSource;

        this.rows = new axe(self, axe.Type.ROWS);
        this.columns = new axe(self, axe.Type.COLUMNS);
        this.dataMatrix = {};

        function refresh(refreshFilters) {
          if (refreshFilters !== false) {
            refreshFilteredDataSource();
          }
          self.rows.update();
          self.columns.update();
          computeValues();

          // publish updated event
          self.publish(pgrid.EVENT_UPDATED);
        }

        function refreshFilteredDataSource() {
          var filterFields = utils.ownProperties(self.filters);
          if (filterFields.length > 0) {
            self.filteredDataSource = [];

            for (var i = 0; i < self.config.dataSource.length; i++) {
              var row = self.config.dataSource[i];
              var exclude = false;
              for (var fi = 0; fi < filterFields.length; fi++) {
                var fieldname = filterFields[fi];
                var fieldFilter = self.filters[fieldname];

                if (fieldFilter && !fieldFilter.test(row[fieldname])) {
                  exclude = true;
                  break;
                }
              }
              if (!exclude) {
                self.filteredDataSource.push(row);
              }
            }
          } else {
            self.filteredDataSource = self.config.dataSource;
          }
        }

        this.sort = function(axetype, field) {
          if (axetype === axe.Type.ROWS) {
            self.rows.sort(field);
          } else if (axetype === axe.Type.COLUMNS) {
            self.columns.sort(field);
          } else {
            return;
          }

          self.publish(pgrid.EVENT_SORT_CHANGED);
        };

        this.moveField = function(fieldname, oldaxetype, newaxetype, position) {
          if (self.config.moveField(fieldname, oldaxetype, newaxetype, position)) {
            refresh(false);
            return true;
          }
          return false;
        };

        this.applyFilter = function(fieldname, operator, term, staticValue, excludeStatic) {
          self.filters[fieldname] = new filtering.expressionFilter(operator, term, staticValue, excludeStatic);
          refresh();
        };

        this.refreshData = function(data) {
          self.config.dataSource = data;
          refresh();
        };

        this.toggleSubtotals = function(axetype) {
          if (self.config.toggleSubtotals(axetype)) {
            self.publish(pgrid.EVENT_CONFIG_CHANGED);
          }
        };

        this.toggleGrandtotal = function(axetype) {
          if (self.config.toggleGrandtotal(axetype)) {
            self.publish(pgrid.EVENT_CONFIG_CHANGED);
          }
        };

        this.areSubtotalsVisible = function(axetype) {
          return self.config.areSubtotalsVisible(axetype);
        };

        this.isGrandtotalVisible = function(axetype) {
          return self.config.isGrandtotalVisible(axetype);
        };

        this.getFieldValues = function(field, filterFunc) {
          var values1 = [];
          var values = [];
          var containsBlank = false;
          for (var i = 0; i < self.config.dataSource.length; i++) {
            var row = self.config.dataSource[i];
            var val = row[field];
            if (filterFunc !== undefined) {
              if (filterFunc === true || typeof filterFunc === 'function' && filterFunc(val)) {
                values1.push(val);
              }
            } else {
              if (val != null) {
                values1.push(val);
              } else {
                containsBlank = true;
              }
            }
          }
          if (values1.length > 1) {
            if (utils.isNumber(values1[0]) || utils.isDate(values1[0])) {
              values1.sort(function(a, b) {
                return a ? b ? a - b : 1 : b ? -1 : 0;
              });
            } else {
              values1.sort();
            }

            for (var vi = 0; vi < values1.length; vi++) {
              if (vi === 0 || values1[vi] !== values[values.length - 1]) {
                values.push(values1[vi]);
              }
            }
          } else {
            values = values1;
          }
          if (containsBlank) {
            values.unshift(null);
          }
          return values;
        };

        this.getFieldFilter = function(field) {
          return self.filters[field];
        };

        this.isFieldFiltered = function(field) {
          var filter = self.getFieldFilter(field);
          return filter != null && !filter.isAlwaysTrue();
        };

        this.getData = function(field, rowdim, coldim, aggregateFunc) {
          var value;
          if (rowdim && coldim) {

            var datafieldName = field || (self.config.dataFields[0] || defaultfield).name;
            var datafield = self.config.getDataField(datafieldName);

            if (!datafield || aggregateFunc && datafield.aggregateFunc != aggregateFunc) {
              value = self.calcAggregation(rowdim.isRoot ? null : rowdim.getRowIndexes().slice(0), coldim.isRoot ? null : coldim.getRowIndexes().slice(0), [datafieldName], aggregateFunc)[datafieldName];
            } else {
              if (self.dataMatrix[rowdim.id] && self.dataMatrix[rowdim.id][coldim.id]) {
                value = self.dataMatrix[rowdim.id][coldim.id][datafieldName];
              } else {
                value = null;
              }
            }
          }

          return value === undefined ? null : value;
        };

        this.calcAggregation = function(rowIndexes, colIndexes, fieldNames, aggregateFunc) {
          return computeValue(rowIndexes, colIndexes, rowIndexes, fieldNames, aggregateFunc);
        };

        this.getChartData = function() {

          var config = self.config;

          function getAxisLabel(axisFields) {
            var str = '';
            for (var ti = 0; ti < axisFields.length; ti++) {
              str += (ti > 0 ? ' - ' : '') + axisFields[ti].caption;
            }
            return str;
          }

          var hAxisLabel = getAxisLabel(config.columnFields);
          var vAxisLabel = config.dataFields[0].aggregateFuncName + '(' + config.dataFields[0].caption + ')';
          var legendsLabel = getAxisLabel(config.rowFields);

          var rowLeafDimensions = self.rows.flattenValues();
          var colLeafDimensions = self.columns.flattenValues();
          var data = [];

          for (var ci = 0; ci < colLeafDimensions.length; ci++) {
            var cdim = colLeafDimensions[ci];
            var currData = [cdim.name];
            for (var rri = 0; rri < rowLeafDimensions.length; rri++) {
              currData.push(self.getData(config.dataFields[0].name, rowLeafDimensions[rri].dim, cdim.dim));
            }
            data.push(currData);
          }

          return {
            title: vAxisLabel + ': ' + hAxisLabel + ' by ' + legendsLabel,
            hAxisLabel: hAxisLabel,
            vAxisLabel: vAxisLabel,
            legendsLabel: legendsLabel,
            colNames: rowLeafDimensions.map(function(d) {
              return d.name;
            }),
            dataTable: data
          };
        };

        this.query = query(self);

        refresh();

        function computeValue(rowIndexes, colIndexes, origRowIndexes, fieldNames, aggregateFunc) {

          var res = {};

          if (self.config.dataFieldsCount > 0) {

            var intersection;

            if (rowIndexes == null) {
              intersection = colIndexes;
            } else if (colIndexes == null) {
              intersection = rowIndexes;
            } else {
              intersection = [];
              for (var ri = 0; ri < rowIndexes.length; ri++) {
                var rowindex = rowIndexes[ri];
                if (rowindex >= 0) {
                  var colrowindex = colIndexes.indexOf(rowindex);
                  if (colrowindex >= 0) {
                    rowIndexes[ri] = 0 - (rowindex + 2);
                    intersection.push(rowindex);
                  }
                }
              }
            }

            var emptyIntersection = intersection && intersection.length === 0;
            var datasource = self.filteredDataSource;
            var datafield;
            var datafields = [];

            if (fieldNames) {
              for (var fieldnameIndex = 0; fieldnameIndex < fieldNames.length; fieldnameIndex++) {
                datafield = self.config.getDataField(fieldNames[fieldnameIndex]);
                if (!aggregateFunc) {
                  if (!datafield) {
                    datafield = self.config.getField(fieldNames[fieldnameIndex]);
                    if (datafield) {
                      aggregateFunc = datafield.dataSettings ? datafield.dataSettings.aggregateFunc() : datafield.aggregateFunc();
                    }
                  } else {
                    aggregateFunc = datafield.aggregateFunc();
                  }
                }

                if (datafield && aggregateFunc) {
                  datafields.push({
                    field: datafield,
                    aggregateFunc: aggregateFunc
                  });
                }
              }
            } else {
              for (var datafieldIndex = 0; datafieldIndex < self.config.dataFieldsCount; datafieldIndex++) {
                datafield = self.config.dataFields[datafieldIndex] || defaultfield;
                if (aggregateFunc || datafield.aggregateFunc) {
                  datafields.push({
                    field: datafield,
                    aggregateFunc: aggregateFunc || datafield.aggregateFunc()
                  });
                }
              }
            }

            for (var dfi = 0; dfi < datafields.length; dfi++) {
              datafield = datafields[dfi];
              // no data
              if (emptyIntersection) {
                res[datafield.field.name] = null;
              } else {
                res[datafield.field.name] = datafield.aggregateFunc(datafield.field.name, intersection || 'all', self.filteredDataSource, origRowIndexes || rowIndexes, colIndexes);
              }
            }
          }

          return res;
        }

        function computeRowValues(rowDim) {

          if (rowDim) {
            var data = {};
            var rid = 'r' + rowDim.id;

            // set cached row indexes for current row dimension
            if (_iCache[rid] === undefined) {
              _iCache[rid] = rowDim.isRoot ? null : _iCache[rowDim.parent.id] || rowDim.getRowIndexes();
            }

            // calc grand-total cell
            data[self.columns.root.id] = computeValue(rowDim.isRoot ? null : _iCache[rid].slice(0), null);

            if (self.columns.dimensionsCount > 0) {
              var p = 0;
              var parents = [self.columns.root];

              while (p < parents.length) {
                var parent = parents[p];
                var rowindexes = rowDim.isRoot ? null : parent.isRoot ? _iCache[rid].slice(0) : _iCache['c' + parent.id].slice(0);

                for (var i = 0; i < parent.values.length; i++) {
                  var subdim = parent.subdimvals[parent.values[i]];
                  var cid = 'c' + subdim.id;

                  // set cached row indexes for this column leaf dimension
                  if (_iCache[cid] === undefined) {
                    _iCache[cid] = _iCache[cid] || subdim.getRowIndexes().slice(0);
                  }

                  data[subdim.id] = computeValue(rowindexes, _iCache[cid], rowDim.isRoot ? null : rowDim.getRowIndexes());

                  if (!subdim.isLeaf) {
                    parents.push(subdim);
                    if (rowindexes) {
                      _iCache[cid] = [];
                      for (var ur = 0; ur < rowindexes.length; ur++) {
                        var vr = rowindexes[ur];
                        if (vr != -1 && vr < 0) {
                          _iCache[cid].push(0 - (vr + 2));
                          rowindexes[ur] = -1;
                        }
                      }
                    }
                  }
                }
                _iCache['c' + parent.id] = undefined;
                p++;
              }
            }

            return data;
          }
        }

        function computeValues() {
          self.dataMatrix = {};
          _iCache = {};

          // calc grand total row
          self.dataMatrix[self.rows.root.id] = computeRowValues(self.rows.root);

          if (self.rows.dimensionsCount > 0) {
            var parents = [self.rows.root];
            var p = 0;
            var parent;
            while (p < parents.length) {
              parent = parents[p];
              // calc children rows
              for (var i = 0; i < parent.values.length; i++) {
                var subdim = parent.subdimvals[parent.values[i]];
                // calc child row
                self.dataMatrix[subdim.id] = computeRowValues(subdim);
                // if row is not a leaf, add it to parents array to process its children
                if (!subdim.isLeaf) {
                  parents.push(subdim);
                }
              }
              // next parent
              p++;
            }
          }
        }
      };

      // pgrid events
      pgrid.EVENT_UPDATED = 'pgrid:updated';
      pgrid.EVENT_SORT_CHANGED = 'pgrid:sort-changed';
      pgrid.EVENT_CONFIG_CHANGED = 'pgrid:config-changed';

    }, {
      "./orb.axe": 72,
      "./orb.config": 73,
      "./orb.filtering": 76,
      "./orb.pubsub": 79,
      "./orb.query": 80,
      "./orb.utils": 89
    }],
    79: [function(_dereq_, module, exports) {

      var utils = _dereq_('./orb.utils');

      module.exports = function() {
        var _topics = {};

        this.subscribe = function(topic, callback) {
          if (utils.isString(topic) && utils.isFunction(callback)) {
            _topics[topic] = _topics[topic] || [];
            _topics[topic].push(callback);
          }
        };

        this.publish = function(topic) {
          if (utils.isString(topic)) {
            utils.forEach(_topics[topic], function(callback) {
              callback.apply(null, [topic].concat(Array.prototype.slice.call(arguments, 1)));
            });
          }
        };
      };

    }, {
      "./orb.utils": 89
    }],
    80: [function(_dereq_, module, exports) {

      var _typeof2 = _dereq_('babel-runtime/helpers/typeof');

      var _typeof3 = _interopRequireDefault(_typeof2);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      var utils = _dereq_('./orb.utils');
      var axe = _dereq_('./orb.axe');
      var aggregation = _dereq_('./orb.aggregation');

      var queryBase = function queryBase(source, query, filters) {

        var self = this;

        this.source = source;
        this.query = query;
        this.filters = filters;

        this.extractResult = function(aggs, options, outerArgs) {
          if (outerArgs.multi === true) {
            var res = {};
            for (var ai = 0; ai < options.multiFieldNames.length; ai++) {
              res[options.multiFieldNames[ai]] = aggs[self.getCaptionName(options.multiFieldNames[ai])];
            }
            return res;
          } else {
            return aggs[outerArgs.datafieldname];
          }
        };

        this.measureFunc = function(datafieldname, multi, aggregateFunc, fieldsConfig) {

          var outerArgs = {
            datafieldname: self.getCaptionName(datafieldname),
            multi: multi,
            aggregateFunc: aggregateFunc
          };

          return function(options) {
            options = self.cleanOptions(options, arguments, outerArgs);
            var aggs = self.compute(options, fieldsConfig, multi);
            return self.extractResult(aggs, options, outerArgs);
          };
        };

        this.setDefaultAggFunctions = function(param) {

          // if there is a registered field with a name or caption 'val', use 'val_'
          var valname = self.query.val ? 'val_' : 'val';
          self.query[valname] = self.measureFunc(undefined, true, undefined, param);


          var aggFunctions = utils.ownProperties(aggregation);
          for (var funcIndex = 0; funcIndex < aggFunctions.length; funcIndex++) {
            var funcName = aggFunctions[funcIndex];
            if (funcName !== 'toAggregateFunc') {
              self.query[funcName] = self.measureFunc(undefined, true, aggregation[funcName], param);
            }
          }
        };
      };

      var pgridQuery = function pgridQuery(pgrid) {

        queryBase.call(this, pgrid, {}, {});

        var self = this;

        this.getCaptionName = function(caption) {
          return self.source.config.captionToName(caption);
        };

        this.cleanOptions = function(options, innerArgs, outerArgs) {
          var opts = {
            fieldNames: []
          };

          if (outerArgs.multi === true) {
            if (options && (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object') {
              opts.aggregateFunc = options.aggregateFunc;
              opts.multiFieldNames = options.fields;
            } else {
              opts.aggregateFunc = outerArgs.aggregateFunc;
              opts.multiFieldNames = innerArgs;
            }

            for (var ai = 0; ai < opts.multiFieldNames.length; ai++) {
              opts.fieldNames.push(self.getCaptionName(opts.multiFieldNames[ai]));
            }
          } else {
            opts.aggregateFunc = options;
            opts.fieldNames.push(outerArgs.datafieldname);
          }

          if (opts.aggregateFunc) {
            opts.aggregateFunc = aggregation.toAggregateFunc(opts.aggregateFunc);
          }

          return opts;
        };

        this.setup = function(parameters) {
          var rowFields = self.source.config.rowFields;
          var colFields = self.source.config.columnFields;
          var datafields = self.source.config.dataFields;
          var fIndex;

          // row fields setup
          for (fIndex = 0; fIndex < rowFields.length; fIndex++) {
            self.slice(rowFields[fIndex], axe.Type.ROWS, rowFields.length - fIndex);
          }

          // column fields setup
          for (fIndex = 0; fIndex < colFields.length; fIndex++) {
            self.slice(colFields[fIndex], axe.Type.COLUMNS, colFields.length - fIndex);
          }

          // data fields setup
          for (fIndex = 0; fIndex < datafields.length; fIndex++) {
            var df = datafields[fIndex];
            var dfname = df.name;
            var dfcaption = df.caption || dfname;

            self.query[dfname] = self.query[dfcaption] = self.measureFunc(dfname);
          }

          if (parameters) {
            for (var param in parameters) {
              if (parameters.hasOwnProperty(param)) {
                self.query[param](parameters[param]);
              }
            }
          }

          self.setDefaultAggFunctions();

          return self.query;
        };

        this.slice = function(field, axetype, depth) {
          self.query[field.name] = self.query[field.caption || field.name] = function(val) {
            var f = {
              name: field.name,
              val: val,
              depth: depth
            };
            (self.filters[axetype] = self.filters[axetype] || []).push(f);
            return self.query;
          };
        };

        function filterDimensions(upperDims, filter) {
          return function(dim) {
            return dim.value === filter.val && (!upperDims || upperDims.some(function(upperDim) {
              var parent = dim.parent;
              if (parent) {
                while (parent.depth < upperDim.depth) {
                  parent = parent.parent;
                }
              }
              return parent === upperDim;
            }));
          };
        }

        this.applyFilters = function(axetype) {
          if (self.filters[axetype]) {
            var sortedFilters = self.filters[axetype].sort(function(f1, f2) {
              return f2.depth - f1.depth;
            });

            var currAxe = self.source[axetype === axe.Type.ROWS ? 'rows' : 'columns'];
            var filterIndex = 0;
            var filtered = null;
            while (filterIndex < sortedFilters.length) {
              var filter = sortedFilters[filterIndex];
              filtered = currAxe.dimensionsByDepth[filter.depth].filter(filterDimensions(filtered, filter));
              filterIndex++;
            }
            return filtered;
          }
          return null;
        };

        this.compute = function(options) {
          var rowdims = self.applyFilters(axe.Type.ROWS) || [self.source.rows.root];
          var coldims = self.applyFilters(axe.Type.COLUMNS) || [self.source.columns.root];

          var aggs;

          if (rowdims.length === 1 && coldims.length === 1) {
            aggs = {};
            for (var ai = 0; ai < options.fieldNames.length; ai++) {
              aggs[options.fieldNames[ai]] = self.source.getData(options.fieldNames[ai], rowdims[0], coldims[0], options.aggregateFunc);
            }
          } else {
            var rowIndexes = [];
            var colIndexes = [];

            for (var rdi = 0; rdi < rowdims.length; rdi++) {
              rowIndexes = rowIndexes.concat(rowdims[rdi].getRowIndexes());
            }
            for (var cdi = 0; cdi < coldims.length; cdi++) {
              colIndexes = colIndexes.concat(coldims[cdi].getRowIndexes());
            }

            aggs = self.source.calcAggregation(rowIndexes, colIndexes, options.fieldNames, options.aggregateFunc);
          }

          return aggs;
        };
      };

      var arrayQuery = function arrayQuery(array) {

        queryBase.call(this, array, {}, []);

        var self = this;
        var captionToName = {};

        this.setCaptionName = function(caption, name) {
          captionToName[caption || name] = name;
        };

        this.getCaptionName = function(caption) {
          return captionToName[caption] || caption;
        };

        this.cleanOptions = function(options, innerArgs, outerArgs) {
          var opts = {
            fieldNames: []
          };

          if (outerArgs.multi === true) {
            if (options && (typeof options === 'undefined' ? 'undefined' : (0, _typeof3.default)(options)) === 'object') {
              opts.aggregateFunc = options.aggregateFunc;
              opts.multiFieldNames = options.fields;
            } else {
              opts.aggregateFunc = outerArgs.aggregateFunc;
              opts.multiFieldNames = innerArgs;
            }

            for (var ai = 0; ai < opts.multiFieldNames.length; ai++) {
              opts.fieldNames.push(self.getCaptionName(opts.multiFieldNames[ai]));
            }
          } else {
            opts.aggregateFunc = options || outerArgs.aggregateFunc;
            opts.fieldNames.push(outerArgs.datafieldname);
          }

          return opts;
        };

        this.setup = function(fieldsConfig) {

          self.query.slice = function(field, val) {
            var f = {
              name: field,
              val: val
            };
            self.filters.push(f);
            return self.query;
          };

          if (fieldsConfig) {

            var fieldNames = utils.ownProperties(fieldsConfig);

            for (var fi = 0; fi < fieldNames.length; fi++) {
              var fname = fieldNames[fi];
              var f = fieldsConfig[fname];
              var fcaption = f.caption || f.name;
              f.name = fname;

              self.setCaptionName(fcaption, fname);

              if (f.toAggregate) {
                self.query[fname] = self.query[fcaption] = self.measureFunc(fname, false, f.aggregateFunc);
              } else {
                self.slice(f);
              }
            }
          }

          self.setDefaultAggFunctions(fieldsConfig);

          return self.query;
        };

        this.slice = function(field) {
          self.query[field.name] = self.query[field.caption || field.name] = function(val) {
            return self.query.slice(field.name, val);
          };
        };

        this.applyFilters = function() {
          var rowIndexes = [];

          for (var i = 0; i < self.source.length; i++) {
            var row = self.source[i];
            var include = true;
            for (var j = 0; j < self.filters.length; j++) {
              var filter = self.filters[j];
              if (row[filter.name] !== filter.val) {
                include = false;
                break;
              }
            }
            if (include) {
              rowIndexes.push(i);
            }
          }

          return rowIndexes;
        };

        this.compute = function(options, fieldsConfig, multi) {
          var rowIndexes = self.applyFilters();

          var aggs = {};

          for (var ai = 0; ai < options.fieldNames.length; ai++) {
            var datafield = options.fieldNames[ai];
            var aggFunc = aggregation.toAggregateFunc(multi === true ? options.aggregateFunc || (fieldsConfig && fieldsConfig[datafield] ? fieldsConfig[datafield].aggregateFunc : undefined) : options.aggregateFunc);

            aggs[datafield] = aggFunc(datafield, rowIndexes || 'all', self.source, rowIndexes, null);
          }

          return aggs;
        };
      };

      module.exports = function(source, fieldsConfig) {
        if (utils.isArray(source)) {
          return new arrayQuery(source).setup(fieldsConfig);
        } else {
          // assume it's a pgrid
          return function(parameters) {
            return new pgridQuery(source).setup(parameters);
          };
        }
      };

    }, {
      "./orb.aggregation": 71,
      "./orb.axe": 72,
      "./orb.utils": 89,
      "babel-runtime/helpers/typeof": 4
    }],
    81: [function(_dereq_, module, exports) {

      module.exports = function() {
        var states = {};

        this.set = function(key, state) {
          states[key] = state;
        };

        this.get = function(key) {
          return states[key];
        };
      };

    }, {}],
    82: [function(_dereq_, module, exports) {

      module.exports = function() {

        var currentTheme = 'blue';
        var themeManager = {};

        function isBootstrap() {
          return currentTheme === 'bootstrap';
        }

        themeManager.themes = {
          red: '#C72C48',
          blue: '#5bc0de',
          green: '#3fb618',
          orange: '#df691a',
          flower: '#A74AC7',
          gray: '#808080',
          black: '#000000',
          white: '#FFFFFF'
        };

        themeManager.current = function(newTheme) {
          if (newTheme) {
            currentTheme = themeManager.validateTheme(newTheme);
          }

          return currentTheme;
        };

        themeManager.validateTheme = function(themeName) {
          themeName = (themeName || '').toString().trim();
          if (!themeManager.themes[themeName] && themeName !== 'bootstrap') {
            return 'blue';
          } else {
            return themeName;
          }
        };

        themeManager.getPivotClasses = function() {
          return {
            container: 'orb-container orb-' + currentTheme,
            table: 'orb' + (isBootstrap() ? ' table' : '')
          };
        };

        themeManager.getButtonClasses = function() {
          return {
            pivotButton: 'fld-btn' + (isBootstrap() ? ' btn btn-default btn-xs' : ''),
            orbButton: 'orb-btn' + (isBootstrap() ? ' btn btn-default btn-xs' : ''),
            scrollBar: isBootstrap() ? ' btn btn-default btn-xs' : ''
          };
        };

        themeManager.getFilterClasses = function() {
          return {
            container: 'orb-' + currentTheme + ' orb fltr-cntnr'
          };
        };

        themeManager.getGridClasses = function() {
          return {
            table: isBootstrap() ? 'table table-condensed' : 'orb-table'
          };
        };

        themeManager.getDialogClasses = function(visible) {
          var classes = {
            overlay: 'orb-overlay orb-overlay-' + (visible ? 'visible' : 'hidden') + ' orb-' + currentTheme,
            dialog: 'orb-dialog',
            content: '',
            header: 'orb-dialog-header',
            title: '',
            body: 'orb-dialog-body'
          };

          if (isBootstrap()) {
            classes.overlay += ' modal';
            classes.dialog += ' modal-dialog';
            classes.content = 'modal-content';
            classes.header += ' modal-header';
            classes.title = 'modal-title';
            classes.body += ' modal-body';
          }
          return classes;
        };

        var utils = themeManager.utils = {
          hexToRgb: function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16)
            } : null;
          },
          rgbaToHex: function rgbaToHex(rgba) {
            var matches = rgba.match(/rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+(?:\.\d+)?)\s*\)/);
            if (matches) {
              var alpha = parseFloat(matches[4]);
              return '#' + utils.applyAlphaAndToHex(matches[1], alpha) + utils.applyAlphaAndToHex(matches[2], alpha) + utils.applyAlphaAndToHex(matches[3], alpha);
            }
            return null;
          },
          rgbaToHexA: function rgbaToHexA(rgba) {
            var matches = rgba.match(/rgba\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+(?:\.\d+)?)\s*\)/);
            if (matches) {
              var alpha = parseFloat(matches[4]);
              return '#' + utils.applyAlphaAndToHex(0, alpha) + utils.applyAlphaAndToHex(matches[1], 1) + utils.applyAlphaAndToHex(matches[2], 1) + utils.applyAlphaAndToHex(matches[3], 1);
            }
            return null;
          },
          applyAlphaAndToHex: function applyAlphaAndToHex(value, alpha) {
            return (Math.floor(alpha * parseInt(value) + (1 - alpha) * 255) + 256).toString(16).substr(1, 2);
          },
          fadeoutColor: function fadeoutColor(color, alpha) {
            color = utils.hexToRgb(color);
            return '#' + utils.applyAlphaAndToHex(color.r, alpha) + utils.applyAlphaAndToHex(color.g, alpha) + utils.applyAlphaAndToHex(color.b, alpha);
          }
        };

        return themeManager;
      }();

    }, {}],
    83: [function(_dereq_, module, exports) {

      var axe = _dereq_('./orb.axe');
      var uiheaders = _dereq_('./orb.ui.header');

      module.exports = function(axeModel) {

        var self = this;


        this.axe = axeModel;


        this.headers = [];

        this.dataFieldsCount = function() {
          return self.axe.pgrid.config.dataHeadersLocation === 'columns' && self.axe.type === axe.Type.COLUMNS || self.axe.pgrid.config.dataHeadersLocation === 'rows' && self.axe.type === axe.Type.ROWS ? self.axe.pgrid.config.dataFieldsCount : 1;
        };

        this.isMultiDataFields = function() {
          return self.dataFieldsCount() > 1;
        };

        this.toggleFieldExpansion = function(field, newState) {
          var toToggle = [];
          var allExpanded = true;
          var hIndex;

          for (var i = 0; i < this.headers.length; i++) {
            for (hIndex = 0; hIndex < this.headers[i].length; hIndex++) {
              var header = this.headers[i][hIndex];
              if (header.type === uiheaders.HeaderType.SUB_TOTAL && (field == null || header.dim.field.name == field.name)) {
                toToggle.push(header);
                allExpanded = allExpanded && header.expanded;
              }
            }
          }

          if (newState !== undefined) {
            allExpanded = !newState;
          }

          if (toToggle.length > 0) {
            for (hIndex = 0; hIndex < toToggle.length; hIndex++) {
              if (allExpanded) {
                toToggle[hIndex].collapse();
              } else {
                toToggle[hIndex].expand();
              }
            }
            return true;
          }

          return false;
        };
      };

    }, {
      "./orb.axe": 72,
      "./orb.ui.header": 85
    }],
    84: [function(_dereq_, module, exports) {

      var axe = _dereq_('./orb.axe');
      var axeUi = _dereq_('./orb.ui.axe');
      var uiheaders = _dereq_('./orb.ui.header');

      module.exports = function(columnsAxe) {

        var self = this;

        axeUi.call(self, columnsAxe);

        this.leafsHeaders = null;

        this.build = function() {
          self.headers = [];

          if (self.axe != null) {
            // Fill columns layout infos
            if (self.axe.root.values.length > 0 || self.axe.pgrid.config.grandTotal.columnsvisible) {
              for (var depth = self.axe.root.depth; depth > 1; depth--) {
                self.headers.push([]);
                getUiInfo(depth, self.headers);
              }

              if (self.axe.pgrid.config.grandTotal.columnsvisible) {
                // add grandtotal header
                (self.headers[0] = self.headers[0] || []).push(new uiheaders.header(axe.Type.COLUMNS, uiheaders.HeaderType.GRAND_TOTAL, self.axe.root, null, self.dataFieldsCount()));
              }
            }

            if (self.headers.length === 0) {
              self.headers.push([new uiheaders.header(axe.Type.COLUMNS, uiheaders.HeaderType.INNER, self.axe.root, null, self.dataFieldsCount())]);
            }

            // generate leafs headers
            generateLeafsHeaders();
          }
        };

        function generateLeafsHeaders() {

          var leafsHeaders = [];

          function pushsubtotal(pheader) {
            if (pheader && pheader.dim.field.subTotal.visible) {
              leafsHeaders.push(pheader.subtotalHeader);
            }
          }

          if (self.headers.length > 0) {
            // last headers row
            var infos = self.headers[self.headers.length - 1];
            var header = infos[0];

            if (header) {
              var currparent,
                prevpar = header.parent;

              for (var i = 0; i < infos.length; i++) {
                header = infos[i];
                currparent = header.parent;
                // if current header parent is different than previous header parent,
                // add previous parent
                if (currparent != prevpar) {
                  pushsubtotal(prevpar);
                  if (currparent != null) {
                    // walk up parent hierarchy and add grand parents if different
                    // than current header grand parents
                    var grandpar = currparent.parent;
                    var prevgrandpar = prevpar ? prevpar.parent : null;
                    while (grandpar != prevgrandpar && prevgrandpar != null) {
                      pushsubtotal(prevgrandpar);
                      grandpar = grandpar ? grandpar.parent : null;
                      prevgrandpar = prevgrandpar ? prevgrandpar.parent : null;
                    }
                  }
                  // update previous parent variable
                  prevpar = currparent;
                }
                // push current header
                leafsHeaders.push(infos[i]);

                // if it's the last header, add all of its parents up to the top
                if (i === infos.length - 1) {
                  while (prevpar != null) {
                    pushsubtotal(prevpar);
                    prevpar = prevpar.parent;
                  }
                }
              }
              // grandtotal is visible for columns and if there is more than one dimension in this axe
              if (self.axe.pgrid.config.grandTotal.columnsvisible && self.axe.dimensionsCount > 1) {
                // push also grand total header
                leafsHeaders.push(self.headers[0][self.headers[0].length - 1]);
              }
            }
          }

          // add data headers if more than 1 data field and they willbe the leaf headers
          if (self.isMultiDataFields()) {
            self.leafsHeaders = [];
            for (var leafIndex = 0; leafIndex < leafsHeaders.length; leafIndex++) {
              for (var datafieldindex = 0; datafieldindex < self.dataFieldsCount(); datafieldindex++) {
                self.leafsHeaders.push(new uiheaders.dataHeader(self.axe.pgrid.config.dataFields[datafieldindex], leafsHeaders[leafIndex]));
              }
            }
            self.headers.push(self.leafsHeaders);
          } else {
            self.leafsHeaders = leafsHeaders;
          }
        }

        this.build();


        function getUiInfo(depth, headers) {

          var infos = headers[headers.length - 1];
          var parents = self.axe.root.depth === depth ? [null] : headers[self.axe.root.depth - depth - 1].filter(function(p) {
            return p.type !== uiheaders.HeaderType.SUB_TOTAL;
          });

          for (var pi = 0; pi < parents.length; pi++) {

            var parent = parents[pi];
            var parentDim = parent == null ? self.axe.root : parent.dim;

            for (var di = 0; di < parentDim.values.length; di++) {

              var subvalue = parentDim.values[di];
              var subdim = parentDim.subdimvals[subvalue];

              var subtotalHeader;
              if (!subdim.isLeaf && subdim.field.subTotal.visible) {
                subtotalHeader = new uiheaders.header(axe.Type.COLUMNS, uiheaders.HeaderType.SUB_TOTAL, subdim, parent, self.dataFieldsCount());
              } else {
                subtotalHeader = null;
              }

              var header = new uiheaders.header(axe.Type.COLUMNS, null, subdim, parent, self.dataFieldsCount(), subtotalHeader);
              infos.push(header);

              if (!subdim.isLeaf && subdim.field.subTotal.visible) {
                infos.push(subtotalHeader);
              }
            }
          }
        }
      };

    }, {
      "./orb.axe": 72,
      "./orb.ui.axe": 83,
      "./orb.ui.header": 85
    }],
    85: [function(_dereq_, module, exports) {

      var axe = _dereq_('./orb.axe'),
        state = new(_dereq_('./orb.state'))();

      var HeaderType = module.exports.HeaderType = {
        EMPTY: 1,
        DATA_HEADER: 2,
        DATA_VALUE: 3,
        FIELD_BUTTON: 4,
        INNER: 5,
        WRAPPER: 6,
        SUB_TOTAL: 7,
        GRAND_TOTAL: 8,
        getHeaderClass: function getHeaderClass(headerType, axetype) {
          var cssclass = axetype === axe.Type.ROWS ? 'header-row' : axetype === axe.Type.COLUMNS ? 'header-col' : '';
          switch (headerType) {
            case HeaderType.EMPTY:
            case HeaderType.FIELD_BUTTON:
              cssclass = 'empty';
              break;
            case HeaderType.INNER:
              cssclass = 'header ' + cssclass;
              break;
            case HeaderType.WRAPPER:
              cssclass = 'header ' + cssclass;
              break;
            case HeaderType.SUB_TOTAL:
              cssclass = 'header header-st ' + cssclass;
              break;
            case HeaderType.GRAND_TOTAL:
              cssclass = 'header header-gt ' + cssclass;
              break;
          }

          return cssclass;
        },
        getCellClass: function getCellClass(rowHeaderType, colHeaderType) {
          var cssclass = '';
          switch (rowHeaderType) {
            case HeaderType.GRAND_TOTAL:
              cssclass = 'cell-gt';
              break;
            case HeaderType.SUB_TOTAL:
              if (colHeaderType === HeaderType.GRAND_TOTAL) {
                cssclass = 'cell-gt';
              } else {
                cssclass = 'cell-st';
              }
              break;
            default:
              if (colHeaderType === HeaderType.GRAND_TOTAL) {
                cssclass = 'cell-gt';
              } else if (colHeaderType === HeaderType.SUB_TOTAL) {
                cssclass = 'cell-st';
              } else {
                cssclass = '';
              }
          }
          return cssclass;
        }
      };

      function CellBase(options) {

        this.axetype = options.axetype;

        this.type = options.type;

        this.template = options.template;

        this.value = options.value;

        this.expanded = true;

        this.cssclass = options.cssclass;

        this.hspan = options.hspan || function() {
          return 1;
        };

        this.vspan = options.vspan || function() {
          return 1;
        };

        this.visible = options.isvisible || function() {
          return true;
        };

        this.key = this.axetype + this.type + this.value;
        this.getState = function() {
          return state.get(this.key);
        };
        this.setState = function(newState) {
          state.set(this.key, newState);
        };
      }

      module.exports.header = function(axetype, headerType, dim, parent, datafieldscount, subtotalHeader) {

        var self = this;

        var hspan;
        var vspan;
        var value;

        var isRowsAxe = axetype === axe.Type.ROWS;
        headerType = headerType || (dim.depth === 1 ? HeaderType.INNER : HeaderType.WRAPPER);

        switch (headerType) {
          case HeaderType.GRAND_TOTAL:
            value = 'Grand Total';
            hspan = isRowsAxe ? dim.depth - 1 || 1 : datafieldscount;
            vspan = isRowsAxe ? datafieldscount : dim.depth - 1 || 1;
            break;
          case HeaderType.SUB_TOTAL:
            value = dim.value;
            hspan = isRowsAxe ? dim.depth : datafieldscount;
            vspan = isRowsAxe ? datafieldscount : dim.depth;
            break;
          default:
            value = dim.value;
            hspan = isRowsAxe ? 1 : null;
            vspan = isRowsAxe ? null : 1;
            break;
        }

        CellBase.call(this, {
          axetype: axetype,
          type: headerType,
          template: isRowsAxe ? 'cell-template-row-header' : 'cell-template-column-header',
          value: value,
          cssclass: HeaderType.getHeaderClass(headerType, axetype),
          hspan: hspan != null ? function() {
            return hspan;
          } : calcSpan,
          vspan: vspan != null ? function() {
            return vspan;
          } : calcSpan,
          isvisible: isParentExpanded
        });

        this.subtotalHeader = subtotalHeader;
        this.parent = parent;
        this.subheaders = [];
        this.dim = dim;
        this.expanded = this.getState() ? this.getState().expanded : headerType !== HeaderType.SUB_TOTAL || !dim.field.subTotal.collapsed;

        this.expand = function() {
          self.expanded = true;
          this.setState({
            expanded: self.expanded
          });
        };
        this.collapse = function() {
          self.expanded = false;
          this.setState({
            expanded: self.expanded
          });
        };

        if (parent != null) {
          parent.subheaders.push(this);
        }

        function isParentExpanded() {
          if (self.type === HeaderType.SUB_TOTAL) {
            var hparent = self.parent;
            while (hparent != null) {
              if (hparent.subtotalHeader && !hparent.subtotalHeader.expanded) {
                return false;
              }
              hparent = hparent.parent;
            }
            return true;
          } else {

            var isexpanded = self.dim.isRoot || self.dim.isLeaf || !self.dim.field.subTotal.visible || self.subtotalHeader.expanded;
            if (!isexpanded) {
              return false;
            }

            var par = self.parent;
            while (par != null && (!par.dim.field.subTotal.visible || par.subtotalHeader != null && par.subtotalHeader.expanded)) {
              par = par.parent;
            }
            return par == null || par.subtotalHeader == null ? isexpanded : par.subtotalHeader.expanded;
          }
        }

        function calcSpan(ignoreVisibility) {
          var tspan = 0;
          var subSpan;
          var addone = false;

          if (isRowsAxe || ignoreVisibility || self.visible()) {
            if (!self.dim.isLeaf) {
              // subdimvals 'own' properties are the set of values for this dimension
              if (self.subheaders.length > 0) {
                for (var i = 0; i < self.subheaders.length; i++) {
                  var subheader = self.subheaders[i];
                  // if its not an array
                  if (!subheader.dim.isLeaf) {
                    subSpan = isRowsAxe ? subheader.vspan() : subheader.hspan();
                    tspan += subSpan;
                    if (i === 0 && subSpan === 0) {
                      addone = true;
                    }
                  } else {
                    tspan += datafieldscount;
                  }
                }
              } else {
                tspan += datafieldscount;
              }
            } else {
              return datafieldscount;
            }
            return tspan + (addone ? 1 : 0);
          }
          return tspan;
        }
      };

      module.exports.dataHeader = function(datafield, parent) {

        CellBase.call(this, {
          axetype: null,
          type: HeaderType.DATA_HEADER,
          template: 'cell-template-dataheader',
          value: datafield,
          cssclass: HeaderType.getHeaderClass(parent.type, parent.axetype),
          isvisible: parent.visible
        });

        this.parent = parent;
      };

      module.exports.dataCell = function(pgrid, isvisible, rowinfo, colinfo) {

        this.rowDimension = rowinfo.type === HeaderType.DATA_HEADER ? rowinfo.parent.dim : rowinfo.dim;
        this.columnDimension = colinfo.type === HeaderType.DATA_HEADER ? colinfo.parent.dim : colinfo.dim;
        this.rowType = rowinfo.type === HeaderType.DATA_HEADER ? rowinfo.parent.type : rowinfo.type;
        this.colType = colinfo.type === HeaderType.DATA_HEADER ? colinfo.parent.type : colinfo.type;

        this.datafield = pgrid.config.dataFieldsCount > 1 ? pgrid.config.dataHeadersLocation === 'rows' ? rowinfo.value : colinfo.value : pgrid.config.dataFields[0];

        CellBase.call(this, {
          axetype: null,
          type: HeaderType.DATA_VALUE,
          template: 'cell-template-datavalue',
          value: pgrid.getData(this.datafield ? this.datafield.name : null, this.rowDimension, this.columnDimension),
          cssclass: 'cell ' + HeaderType.getCellClass(this.rowType, this.colType),
          isvisible: isvisible
        });
      };

      module.exports.buttonCell = function(field) {

        CellBase.call(this, {
          axetype: null,
          type: HeaderType.FIELD_BUTTON,
          template: 'cell-template-fieldbutton',
          value: field,
          cssclass: HeaderType.getHeaderClass(HeaderType.FIELD_BUTTON)
        });
      };

      module.exports.emptyCell = function(_hspan, _vspan) {

        CellBase.call(this, {
          axetype: null,
          type: HeaderType.EMPTY,
          template: 'cell-template-empty',
          value: null,
          cssclass: HeaderType.getHeaderClass(HeaderType.EMPTY),
          hspan: function hspan() {
            return _hspan;
          },
          vspan: function vspan() {
            return _vspan;
          }
        });
      };

    }, {
      "./orb.axe": 72,
      "./orb.state": 81
    }],
    86: [function(_dereq_, module, exports) {

      var ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        axe = _dereq_('./orb.axe'),
        pgrid = _dereq_('./orb.pgrid'),
        uiheaders = _dereq_('./orb.ui.header'),
        uirows = _dereq_('./orb.ui.rows'),
        uicols = _dereq_('./orb.ui.cols'),
        Dialog = _dereq_('./react/orb.react.Dialog.jsx'),
        PivotChart = _dereq_('./react/orb.react.PivotChart.jsx'),
        PivotTable = _dereq_('./react/orb.react.PivotTable.jsx'),
        Grid = _dereq_('./react/orb.react.Grid.jsx');

      module.exports = function(config) {

        var self = this;
        var renderElement;
        var pivotComponent;
        var dialog = Dialog.create();


        this.pgrid = new pgrid(config);


        this.rows = null;

        this.columns = null;


        this.dataRows = [];

        this.layout = {
          rowHeaders: {

            width: null,

            height: null
          },
          columnHeaders: {

            width: null,

            height: null
          },
          pivotTable: {

            width: null,

            height: null
          }
        };

        this.expandRow = function(cell) {
          cell.expand();
          this.render();
        };

        this.collapseRow = function(cell) {
          cell.subtotalHeader.collapse();
          this.render();
        };

        this.sort = function(axetype, field) {
          self.pgrid.sort(axetype, field);
        };

        this.refreshData = function(data) {
          self.pgrid.refreshData(data);
        };

        this.applyFilter = function(fieldname, operator, term, staticValue, excludeStatic) {
          self.pgrid.applyFilter(fieldname, operator, term, staticValue, excludeStatic);
        };

        this.moveField = function(field, oldAxeType, newAxeType, position) {
          self.pgrid.moveField(field, oldAxeType, newAxeType, position);
        };

        this.toggleFieldExpansion = function(axetype, field, newState) {
          var axeToExpand = axetype === axe.Type.ROWS ? self.rows : axetype === axe.Type.COLUMNS ? self.columns : null;

          if (axeToExpand && axeToExpand.toggleFieldExpansion(field, newState)) {
            self.render();
          }
        };

        this.toggleSubtotals = function(axetype) {
          self.pgrid.toggleSubtotals(axetype);
        };

        this.areSubtotalsVisible = function(axetype) {
          return self.pgrid.areSubtotalsVisible(axetype);
        };

        this.toggleGrandtotal = function(axetype) {
          self.pgrid.toggleGrandtotal(axetype);
        };

        this.isGrandtotalVisible = function(axetype) {
          return self.pgrid.isGrandtotalVisible(axetype);
        };

        this.changeTheme = function(newTheme) {
          pivotComponent.changeTheme(newTheme);
        };

        this.render = function(element) {
          renderElement = element || renderElement;
          if (renderElement) {
            var pivotTableFactory = React.createFactory(self.pgrid.config.chartMode.enabled ? PivotChart : PivotTable);
            var pivottable = pivotTableFactory({
              pgridwidget: self
            });

            pivotComponent = ReactDOM.render(pivottable, renderElement);
          }
        };

        this.drilldown = function(dataCell, pivotId) {
          if (dataCell) {
            var colIndexes = dataCell.columnDimension.getRowIndexes();
            var data = dataCell.rowDimension.getRowIndexes().filter(function(index) {
              return colIndexes.indexOf(index) >= 0;
            }).map(function(index) {
              return self.pgrid.filteredDataSource[index];
            });

            var title;
            if (dataCell.rowType === uiheaders.HeaderType.GRAND_TOTAL && dataCell.colType === uiheaders.HeaderType.GRAND_TOTAL) {
              title = 'Grand total';
            } else {
              if (dataCell.rowType === uiheaders.HeaderType.GRAND_TOTAL) {
                title = dataCell.columnDimension.value + '/Grand total ';
              } else if (dataCell.colType === uiheaders.HeaderType.GRAND_TOTAL) {
                title = dataCell.rowDimension.value + '/Grand total ';
              } else {
                title = dataCell.rowDimension.value + '/' + dataCell.columnDimension.value;
              }
            }

            dialog.show({
              title: title,
              comp: {
                type: Grid,
                props: {
                  headers: self.pgrid.config.getDataSourceFieldCaptions(),
                  data: data,
                  theme: self.pgrid.config.theme
                }
              },
              theme: self.pgrid.config.theme,
              style: pivotComponent.fontStyle
            });
          }
        };

        function init() {
          self.pgrid.subscribe(pgrid.EVENT_UPDATED, buildUiAndRender);
          self.pgrid.subscribe(pgrid.EVENT_SORT_CHANGED, buildUiAndRender);
          self.pgrid.subscribe(pgrid.EVENT_CONFIG_CHANGED, buildUiAndRender);

          buildUi();
        }

        function buildUi() {

          // build row and column headers
          self.rows = new uirows(self.pgrid.rows);
          self.columns = new uicols(self.pgrid.columns);

          var rowsHeaders = self.rows.headers;
          var columnsLeafHeaders = self.columns.leafsHeaders;

          // set control layout infos		
          self.layout = {
            rowHeaders: {
              width: (self.pgrid.rows.fields.length || 1) + (self.pgrid.config.dataHeadersLocation === 'rows' && self.pgrid.config.dataFieldsCount > 1 ? 1 : 0),
              height: rowsHeaders.length
            },
            columnHeaders: {
              width: self.columns.leafsHeaders.length,
              height: (self.pgrid.columns.fields.length || 1) + (self.pgrid.config.dataHeadersLocation === 'columns' && self.pgrid.config.dataFieldsCount > 1 ? 1 : 0)
            }
          };

          self.layout.pivotTable = {
            width: self.layout.rowHeaders.width + self.layout.columnHeaders.width,
            height: self.layout.rowHeaders.height + self.layout.columnHeaders.height
          };

          var dataRows = [];
          var arr;

          function createVisibleFunc(rowvisible, colvisible) {
            return function() {
              return rowvisible() && colvisible();
            };
          }
          if (rowsHeaders.length > 0) {
            for (var ri = 0; ri < rowsHeaders.length; ri++) {
              var rowHeadersRow = rowsHeaders[ri];
              var rowLeafHeader = rowHeadersRow[rowHeadersRow.length - 1];

              arr = [];
              for (var colHeaderIndex = 0; colHeaderIndex < columnsLeafHeaders.length; colHeaderIndex++) {
                var columnLeafHeader = columnsLeafHeaders[colHeaderIndex];
                var isvisible = createVisibleFunc(rowLeafHeader.visible, columnLeafHeader.visible);
                arr[colHeaderIndex] = new uiheaders.dataCell(self.pgrid, isvisible, rowLeafHeader, columnLeafHeader);
              }
              dataRows.push(arr);
            }
          }
          self.dataRows = dataRows;
        }

        function buildUiAndRender() {
          buildUi();
          self.render();
        }

        init();
      };

    }, {
      "./orb.axe": 72,
      "./orb.pgrid": 78,
      "./orb.ui.cols": 84,
      "./orb.ui.header": 85,
      "./orb.ui.rows": 87,
      "./react/orb.react.Dialog.jsx": 91,
      "./react/orb.react.Grid.jsx": 98,
      "./react/orb.react.PivotChart.jsx": 101,
      "./react/orb.react.PivotTable.jsx": 110,
      "react-dom": "react-dom"
    }],
    87: [function(_dereq_, module, exports) {

      var axe = _dereq_('./orb.axe');
      var axeUi = _dereq_('./orb.ui.axe');
      var uiheaders = _dereq_('./orb.ui.header');

      module.exports = function(rowsAxe) {

        var self = this;

        axeUi.call(self, rowsAxe);

        this.build = function() {
          var headers = [];
          var grandtotalHeader;

          if (self.axe != null) {
            if (self.axe.root.values.length > 0 || self.axe.pgrid.config.grandTotal.rowsvisible) {
              headers.push([]);

              // Fill Rows layout infos
              getUiInfo(headers, self.axe.root);

              if (self.axe.pgrid.config.grandTotal.rowsvisible) {
                var lastrow = headers[headers.length - 1];
                grandtotalHeader = new uiheaders.header(axe.Type.ROWS, uiheaders.HeaderType.GRAND_TOTAL, self.axe.root, null, self.dataFieldsCount());
                if (lastrow.length === 0) {
                  lastrow.push(grandtotalHeader);
                } else {
                  headers.push([grandtotalHeader]);
                }
              }
            }

            if (headers.length === 0) {
              headers.push([grandtotalHeader = new uiheaders.header(axe.Type.ROWS, uiheaders.HeaderType.INNER, self.axe.root, null, self.dataFieldsCount())]);
            }

            if (grandtotalHeader) {
              // add grand-total data headers if more than 1 data field and they will be the leaf headers
              addDataHeaders(headers, grandtotalHeader);
            }
          }
          self.headers = headers;
        };

        this.build();

        function addDataHeaders(infos, parent) {
          if (self.isMultiDataFields()) {
            var lastInfosArray = infos[infos.length - 1];
            for (var datafieldindex = 0; datafieldindex < self.dataFieldsCount(); datafieldindex++) {
              lastInfosArray.push(new uiheaders.dataHeader(self.axe.pgrid.config.dataFields[datafieldindex], parent));
              if (datafieldindex < self.dataFieldsCount() - 1) {
                infos.push(lastInfosArray = []);
              }
            }
          }
        }


        function getUiInfo(infos, dimension) {
          if (dimension.values.length > 0) {

            var infosMaxIndex = infos.length - 1;
            var lastInfosArray = infos[infosMaxIndex];
            var parent = lastInfosArray.length > 0 ? lastInfosArray[lastInfosArray.length - 1] : null;

            for (var valIndex = 0; valIndex < dimension.values.length; valIndex++) {
              var subvalue = dimension.values[valIndex];
              var subdim = dimension.subdimvals[subvalue];

              var subTotalHeader;
              if (!subdim.isLeaf && subdim.field.subTotal.visible) {
                subTotalHeader = new uiheaders.header(axe.Type.ROWS, uiheaders.HeaderType.SUB_TOTAL, subdim, parent, self.dataFieldsCount());
              } else {
                subTotalHeader = null;
              }

              var newHeader = new uiheaders.header(axe.Type.ROWS, null, subdim, parent, self.dataFieldsCount(), subTotalHeader);

              if (valIndex > 0) {
                infos.push(lastInfosArray = []);
              }

              lastInfosArray.push(newHeader);

              if (!subdim.isLeaf) {
                getUiInfo(infos, subdim);
                if (subdim.field.subTotal.visible) {
                  infos.push([subTotalHeader]);

                  // add sub-total data headers if more than 1 data field and they will be the leaf headers
                  addDataHeaders(infos, subTotalHeader);
                }
              } else {
                // add data headers if more than 1 data field and they will be the leaf headers
                addDataHeaders(infos, newHeader);
              }
            }
          }
        }
      };

    }, {
      "./orb.axe": 72,
      "./orb.ui.axe": 83,
      "./orb.ui.header": 85
    }],
    88: [function(_dereq_, module, exports) {

      module.exports.removeClass = function(element, classname) {
        if (element && classname) {
          while (element.className.indexOf(classname) >= 0) {
            element.className = element.className.replace(classname, '');
          }
        }
      };

      module.exports.addClass = function(element, classname) {
        if (element && classname) {
          if (element.className.indexOf(classname) < 0) {
            element.className += ' ' + classname;
          }
        }
      };

      module.exports.getOffset = function(element) {
        if (element) {
          var rect = element.getBoundingClientRect();
          return {
            x: rect.left,
            y: rect.top
          };
        }
        return {
          x: 0,
          y: 0
        };
      };

      module.exports.getParentOffset = function(element) {
        if (element) {
          var rect = element.getBoundingClientRect();
          var rectParent = element.parentNode != null ? element.parentNode.getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            x: rect.left - rectParent.left,
            y: rect.top - rectParent.top
          };
        }
        return {
          x: 0,
          y: 0
        };
      };

      module.exports.getSize = function(element) {
        if (element) {
          var rect = element.getBoundingClientRect();
          return {
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
          };
        }
        return {
          width: 0,
          height: 0
        };
      };

      var reHyphenToUcase = /\-(\w)/g;

      function replaceHyphenByUcase(val) {
        return val.replace(reHyphenToUcase, function(m, m1) {
          return m1.toUpperCase();
        });
      }

      module.exports.getStyle = function(element, styleProps, keepString) {
        var values = [];
        if (element && styleProps) {
          var currStyle, f, fixProp;
          if (element.currentStyle) {
            currStyle = element.currentStyle;
            f = function f(prop) {
              return currStyle[prop];
            };
            fixProp = true;
          } else if (window && window.getComputedStyle) {
            currStyle = window.getComputedStyle(element, null);
            f = function f(prop) {
              return currStyle.getPropertyValue(prop);
            };
          }

          for (var i = 0; i < styleProps.length; i++) {
            var val = f(fixProp ? replaceHyphenByUcase(styleProps[i]) : styleProps[i]);
            values.push(val && keepString !== true ? Math.ceil(parseFloat(val)) : val);
          }
        }
        return values;
      };

      module.exports.isVisible = function(element) {
        if (element) {
          return element.style.display !== 'none' && (element.offsetWidth !== 0 || element.offsetHeight !== 0);
        }
        return false;
      };

      module.exports.updateTableColGroup = function(tableNode, widths) {
        if (tableNode) {
          var colGroupNode = tableNode.firstChild;
          if (colGroupNode && colGroupNode.nodeName === 'COLGROUP') {
            tableNode.style.tableLayout = 'auto';
            tableNode.style.width = '';

            while (colGroupNode.firstChild) {
              colGroupNode.removeChild(colGroupNode.firstChild);
            }
            for (var i = 0; i < widths.length; i++) {
              var col = document.createElement('col');
              col.style.width = widths[i] + 'px';
              colGroupNode.appendChild(col);
            }
            tableNode.style.tableLayout = 'fixed';
          }
        }
      };

    }, {}],
    89: [function(_dereq_, module, exports) {
      (function(global) {

        var _stringify = _dereq_('babel-runtime/core-js/json/stringify');

        var _stringify2 = _interopRequireDefault(_stringify);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : {
            default: obj
          };
        }

        module.exports = {

          ns: function ns(identifier, parent) {
            var parts = identifier.split('.');
            var i = 0;
            parent = parent || window;
            while (i < parts.length) {
              parent[parts[i]] = parent[parts[i]] || {};
              parent = parent[parts[i]];
              i++;
            }
            return parent;
          },

          ownProperties: function ownProperties(obj) {
            var arr = [];
            for (var prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                arr.push(prop);
              }
            }
            return arr;
          },

          forEach: function forEach(list, callback, forceContinue) {
            var ret;
            if (list) {
              for (var i = 0, l = list.length; i < l; i++) {
                ret = callback(list[i], i);
                if (ret && forceContinue !== true) {
                  break;
                }
              }
            }
            return ret;
          },

          isArray: function isArray(obj) {
            return Object.prototype.toString.apply(obj) === '[object Array]';
          },

          isNumber: function isNumber(obj) {
            return Object.prototype.toString.apply(obj) === '[object Number]';
          },

          isDate: function isDate(obj) {
            return Object.prototype.toString.apply(obj) === '[object Date]';
          },

          isString: function isString(obj) {
            return Object.prototype.toString.apply(obj) === '[object String]';
          },

          isRegExp: function isRegExp(obj) {
            return Object.prototype.toString.apply(obj) === '[object RegExp]';
          },

          isFunction: function isFunction(obj) {
            return Object.prototype.toString.apply(obj) === '[object Function]';
          },

          escapeRegex: function escapeRegex(re) {
            return re.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
          },

          findInArray: function findInArray(array, predicate) {
            if (this.isArray(array) && predicate) {
              for (var i = 0; i < array.length; i++) {
                var item = array[i];
                if (predicate(item)) {
                  return item;
                }
              }
            }
            return undefined;
          },

          jsonStringify: function jsonStringify(obj, censorKeywords) {
            function censor(key, value) {
              return censorKeywords && censorKeywords.indexOf(key) > -1 ? undefined : value;
            }
            return (0, _stringify2.default)(obj, censor, 2);
          },
          addEventListener: function addEventListener(element, eventName, handler) {
            if (element.addEventListener) {
              element.addEventListener(eventName, handler, false);
            } else if (element.attachEvent) {
              element.attachEvent('on' + eventName, handler);
            } else {
              element["on" + eventName] = handler;
            }
          },
          removeEventListener: function removeEventListener(element, eventName, handler) {
            if (element.removeEventListener) {
              element.removeEventListener(eventName, handler, false);
            } else if (element.detachEvent) {
              element.detachEvent("on" + eventName, handler);
            } else {
              element["on" + eventName] = null;
            }
          },
          preventDefault: function preventDefault(e) {
            e = e || window.event;

            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          },
          stopPropagation: function stopPropagation(e) {
            e = e || window.event;

            if (e.stopPropagation) {
              e.stopPropagation();
            } else {
              e.cancelBubble = true;
            }
          },
          getEventButton: function getEventButton(e) {
            var button = e.button;
            if ('which' in e) {
              return button;
            }
            // IE 8
            return button === 1 ? 0 : // left
              button === 4 ? 1 : // middle
              2; // right
          },
          getMousePageXY: function getMousePageXY(e) {
            e = e || window.event;

            var pageX = e.pageX;
            var pageY = e.pageY;
            if (pageX === undefined) {
              pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
              pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            return {
              pageX: pageX,
              pageY: pageY
            };
          }
        };

        // from: https://github.com/davidchambers/Base64.js

        (function(object) {
          var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

          function InvalidCharacterError(message) {
            this.message = message;
          }
          InvalidCharacterError.prototype = new Error();
          InvalidCharacterError.prototype.name = 'InvalidCharacterError';
          // encoder
          // [https://gist.github.com/999166] by [https://github.com/nignag]
          object.btoa = global && global.btoa ? function(str) {
            return global.btoa(str);
          } : function(input) {
            var str = String(input);
            for (
              // initialize result and counter
              var block, charCode, idx = 0, map = chars, output = '';
              // if the next str index does not exist:
              // change the mapping table to "="
              // check if d has no fractional digits
              str.charAt(idx | 0) || (map = '=', idx % 1);
              // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
              output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
              charCode = str.charCodeAt(idx += 3 / 4);
              if (charCode > 0xFF) {
                throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
              }
              block = block << 8 | charCode;
            }
            return output;
          };

          // decoder
          // [https://gist.github.com/1020396] by [https://github.com/atk]
          object.atob = global && global.atob ? function(str) {
            return global.atob(str);
          } : function(input) {
            var str = String(input).replace(/=+$/, '');
            if (str.length % 4 == 1) {
              throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");
            }
            for (
              // initialize result and counters
              var bc = 0, bs, buffer, idx = 0, output = '';
              // get next character
              buffer = str.charAt(idx++);
              // character found in table? initialize bit storage and add its ascii value;
              ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0) {
              // try to find character in table (0-63, not found => -1)
              buffer = chars.indexOf(buffer);
            }
            return output;
          };
        })(module.exports);

      }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {
      "babel-runtime/core-js/json/stringify": 1
    }],
    90: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM;

      module.exports = React.createClass({
        displayName: 'exports',

        getInitialState: function getInitialState() {
          return {
            canRender: false
          };
        },
        canRender: function canRender() {
          return this.state.canRender && typeof this.props.chartMode.type === 'string' && typeof google.visualization[this.props.chartMode.type] === 'function';
        },
        drawChart: function drawChart() {
          if (this.canRender()) {
            var chartData = this.props.pivotTableComp.pgridwidget.pgrid.getChartData();
            var data = new google.visualization.DataTable();

            data.addColumn('string', chartData.hAxisLabel);
            for (var ri = 0; ri < chartData.colNames.length; ri++) {
              data.addColumn('number', chartData.colNames[ri]);
            }

            data.addRows(chartData.dataTable);

            var options = {
              title: chartData.title,
              //isStacked: true,
              fontName: this.state.chartStyle.fontFamily,
              fontSize: parseFloat(this.state.chartStyle.fontSize),
              hAxis: {
                title: chartData.hAxisLabel
              },
              vAxis: {
                title: chartData.vAxisLabel
              }
            };

            if (typeof google.visualization[this.props.chartMode.type] === 'function') {
              var chart = new google.visualization[this.props.chartMode.type](ReactDOM.findDOMNode(this));
              chart.draw(data, options);
            }
          }
        },
        componentDidMount: function componentDidMount() {
          this.drawChart();
        },
        componentDidUpdate: function componentDidUpdate() {
          this.drawChart();
        },
        render: function render() {
          if (this.canRender()) {
            return React.createElement('div', {
              className: 'chart',
              style: this.state.chartStyle
            });
          }
          return null;
        }
      });

    }, {
      "react": "react",
      "react-dom": "react-dom"
    }],
    91: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        utils = _dereq_('../orb.utils');

      function createOverlay() {
        var overlayElement = document.createElement('div');
        overlayElement.className = 'orb-overlay orb-overlay-hidden';
        document.body.appendChild(overlayElement);
        return overlayElement;
      }

      var Dialog = module.exports = React.createClass({
        displayName: 'exports',

        statics: {
          create: function create() {
            var dialogFactory = React.createFactory(Dialog);
            var overlay = createOverlay();

            return {
              show: function show(props) {
                ReactDOM.render(dialogFactory(props), overlay);
              }
            };
          }
        },
        overlayElement: null,
        setOverlayClass: function setOverlayClass(visible) {
          this.overlayElement.className = this.props.theme.getDialogClasses(visible).overlay;
        },
        componentDidMount: function componentDidMount() {
          this.overlayElement = ReactDOM.findDOMNode(this).parentNode;
          this.setOverlayClass(true);
          utils.addEventListener(this.overlayElement, 'click', this.close);

          var dialogElement = this.overlayElement.children[0];
          var dialogBodyElement = dialogElement.children[0].children[1];

          var screenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          var screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          var maxHeight = 2 * screenHeight / 3;
          maxHeight = maxHeight < 301 ? 301 : maxHeight;
          var dWidth = dialogElement.offsetWidth + (dialogElement.offsetHeight > maxHeight ? 11 : 0);
          var dHeight = dialogElement.offsetHeight > maxHeight ? maxHeight : dialogElement.offsetHeight;

          dialogElement.style.top = (screenHeight > dHeight ? (screenHeight - dHeight) / 2 : 0) + 'px';
          dialogElement.style.left = (screenWidth > dWidth ? (screenWidth - dWidth) / 2 : 0) + 'px';
          dialogElement.style.height = dHeight + 'px';
          dialogBodyElement.style.width = dWidth + 'px';
          dialogBodyElement.style.height = dHeight - 45 + 'px';
        },
        close: function close(e) {
          var target = e.target || e.srcElement;
          if (target == this.overlayElement || target.className === 'button-close') {
            utils.removeEventListener(this.overlayElement, 'click', this.close);
            ReactDOM.unmountComponentAtNode(this.overlayElement);
            this.setOverlayClass(false);
          }
        },
        render: function render() {
          if (this.props.comp) {
            var comp = React.createElement(this.props.comp.type, this.props.comp.props);
            var classes = this.props.theme.getDialogClasses();

            return React.createElement(
              'div', {
                className: classes.dialog,
                style: this.props.style || {}
              },
              React.createElement(
                'div', {
                  className: classes.content
                },
                React.createElement(
                  'div', {
                    className: classes.header
                  },
                  React.createElement('div', {
                    className: 'button-close',
                    onClick: this.close
                  }),
                  React.createElement(
                    'div', {
                      className: classes.title
                    },
                    this.props.title
                  )
                ),
                React.createElement(
                  'div', {
                    className: classes.body
                  },
                  comp
                )
              )
            );
          }
        }
      });

    }, {
      "../orb.utils": 89,
      "react": "react",
      "react-dom": "react-dom"
    }],
    92: [function(_dereq_, module, exports) {

      var ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        utils = _dereq_('../orb.utils');

      module.exports = function() {

        var _pivotComp = null;

        var _currDragElement = null;
        var _currDropTarget = null;
        var _currDropIndicator = null;

        var _dragNode = null;
        var _dropTargets = [];
        var _dropIndicators = [];

        function doElementsOverlap(elem1Rect, elem2Rect) {
          return !(elem1Rect.right < elem2Rect.left || elem1Rect.left > elem2Rect.right || elem1Rect.bottom < elem2Rect.top || elem1Rect.top > elem2Rect.bottom);
        }

        function setCurrDropTarget(dropTarget, callback) {
          if (_currDropTarget) {
            signalDragEnd(_currDropTarget, function() {
              _currDropTarget = dropTarget;
              signalDragOver(dropTarget, callback);
            });
          } else {
            _currDropTarget = dropTarget;
            signalDragOver(dropTarget, callback);
          }
        }

        function setCurrDropIndicator(dropIndicator) {
          if (_currDropIndicator) {
            signalDragEnd(_currDropIndicator, function() {
              _currDropIndicator = dropIndicator;
              signalDragOver(dropIndicator);
            });
          } else {
            _currDropIndicator = dropIndicator;
            signalDragOver(dropIndicator);
          }
        }

        function signalDragOver(target, callback) {
          if (target && target.onDragOver) {
            target.onDragOver(callback);
          } else if (callback) {
            callback();
          }
        }

        function signalDragEnd(target, callback) {
          if (target && target.onDragEnd) {
            target.onDragEnd(callback);
          } else if (callback) {
            callback();
          }
        }

        function getDropTarget() {
          return utils.forEach(_dropTargets, function(target) {
            if (target.component.state.isover) {
              return target;
            }
          });
        }

        function getDropIndicator() {
          return utils.forEach(_dropIndicators, function(indicator) {
            if (indicator.component.state.isover) {
              return indicator;
            }
          });
        }

        var _initialized = false;

        return {
          init: function init(pivotComp) {
            _initialized = true;
            _pivotComp = pivotComp;
          },
          setDragElement: function setDragElement(elem) {

            var prevDragElement = _currDragElement;
            _currDragElement = elem;
            if (_currDragElement != prevDragElement) {
              if (elem == null) {

                if (_currDropTarget) {
                  var position = _currDropIndicator != null ? _currDropIndicator.position : null;
                  _pivotComp.moveButton(prevDragElement, _currDropTarget.component.props.axetype, position);
                }

                _dragNode = null;
                setCurrDropTarget(null);
                setCurrDropIndicator(null);
              } else {
                _dragNode = ReactDOM.findDOMNode(_currDragElement);
              }
            }
          },
          registerTarget: function registerTarget(target, axetype, dragOverHandler, dargEndHandler) {
            _dropTargets.push({
              component: target,
              axetype: axetype,
              onDragOver: dragOverHandler,
              onDragEnd: dargEndHandler
            });
          },
          unregisterTarget: function unregisterTarget(target) {
            var tindex;
            for (var i = 0; i < _dropTargets.length; i++) {
              if (_dropTargets[i].component == target) {
                tindex = i;
                break;
              }
            }
            if (tindex != null) {
              _dropTargets.splice(tindex, 1);
            }
          },
          registerIndicator: function registerIndicator(indicator, axetype, position, dragOverHandler, dargEndHandler) {
            _dropIndicators.push({
              component: indicator,
              axetype: axetype,
              position: position,
              onDragOver: dragOverHandler,
              onDragEnd: dargEndHandler
            });
          },
          unregisterIndicator: function unregisterIndicator(indicator) {
            var iindex;
            for (var i = 0; i < _dropIndicators.length; i++) {
              if (_dropIndicators[i].component == indicator) {
                iindex = i;
                break;
              }
            }
            if (iindex != null) {
              _dropIndicators.splice(iindex, 1);
            }
          },
          elementMoved: function elementMoved() {
            if (_currDragElement != null) {
              var dragNodeRect = _dragNode.getBoundingClientRect();
              var foundTarget;

              utils.forEach(_dropTargets, function(target) {
                if (!foundTarget) {
                  var tnodeRect = ReactDOM.findDOMNode(target.component).getBoundingClientRect();
                  var isOverlap = doElementsOverlap(dragNodeRect, tnodeRect);
                  if (isOverlap) {
                    foundTarget = target;
                    return;
                  }
                }
              });

              if (foundTarget) {
                setCurrDropTarget(foundTarget, function() {
                  var foundIndicator = null;

                  utils.forEach(_dropIndicators, function(indicator, index) {
                    if (!foundIndicator) {
                      var elementOwnIndicator = indicator.component.props.axetype === _currDragElement.props.axetype && indicator.component.props.position === _currDragElement.props.position;

                      var targetIndicator = indicator.component.props.axetype === foundTarget.component.props.axetype;
                      if (targetIndicator && !elementOwnIndicator) {
                        var tnodeRect = ReactDOM.findDOMNode(indicator.component).getBoundingClientRect();
                        var isOverlap = doElementsOverlap(dragNodeRect, tnodeRect);
                        if (isOverlap) {
                          foundIndicator = indicator;
                          return true;
                        }
                      }
                    }
                  });

                  if (!foundIndicator) {
                    var axeIndicators = _dropIndicators.filter(function(indicator) {
                      return indicator.component.props.axetype === foundTarget.component.props.axetype;
                    });
                    if (axeIndicators.length > 0) {
                      foundIndicator = axeIndicators[axeIndicators.length - 1];
                    }
                  }
                  setCurrDropIndicator(foundIndicator);
                });
              }
            }
          }
        };
      }();

    }, {
      "../orb.utils": 89,
      "react-dom": "react-dom"
    }],
    93: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        DragManager = _dereq_('./orb.react.DragManager.jsx');

      module.exports = React.createClass({
        displayName: 'DropIndicator',
        getInitialState: function getInitialState() {
          DragManager.registerIndicator(this, this.props.axetype, this.props.position, this.onDragOver, this.onDragEnd);
          return {
            isover: false
          };
        },
        componentWillUnmount: function componentWillUnmount() {
          DragManager.unregisterIndicator(this);
        },
        onDragOver: function onDragOver(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: true
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        onDragEnd: function onDragEnd(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: false
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        render: function render() {
          var classname = 'drp-indic' + (this.props.isVertical ? '-vertical' : '');

          if (this.props.isFirst) {
            classname += ' drp-indic-first';
          }

          if (this.props.isLast) {
            classname += ' drp-indic-last';
          }

          var style = {};
          if (this.state.isover) {
            classname += ' drp-indic-over';
          }

          return React.createElement('div', {
            style: style,
            className: classname
          });
        }
      });

    }, {
      "./orb.react.DragManager.jsx": 92,
      "react": "react"
    }],
    94: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        DragManager = _dereq_('./orb.react.DragManager.jsx'),
        DropIndicator = _dereq_('./orb.react.DropIndicator.jsx'),
        axe = _dereq_('../orb.axe'),
        dtid = 0;

      module.exports = React.createClass({
        displayName: 'exports',

        getInitialState: function getInitialState() {
          this.dtid = ++dtid;
          return {
            isover: false
          };
        },
        componentDidMount: function componentDidMount() {
          DragManager.registerTarget(this, this.props.axetype, this.onDragOver, this.onDragEnd);
        },
        componentWillUnmount: function componentWillUnmount() {
          DragManager.unregisterTarget(this);
        },
        onDragOver: function onDragOver(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: true
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        onDragEnd: function onDragEnd(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: false
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        render: function render() {
          var self = this;

          var buttons = this.props.buttons.map(function(button, index) {
            if (index < self.props.buttons.length - 1) {
              return [React.createElement(
                'td',
                null,
                React.createElement(DropIndicator, {
                  isFirst: index === 0,
                  position: index,
                  axetype: self.props.axetype
                })
              ), React.createElement(
                'td',
                null,
                button
              )];
            } else {
              return [React.createElement(
                'td',
                null,
                React.createElement(DropIndicator, {
                  isFirst: index === 0,
                  position: index,
                  axetype: self.props.axetype
                })
              ), React.createElement(
                'td',
                null,
                button
              ), React.createElement(
                'td',
                null,
                React.createElement(DropIndicator, {
                  isLast: true,
                  position: null,
                  axetype: self.props.axetype
                })
              )];
            }
          });

          var style = self.props.axetype === axe.Type.ROWS ? {
            position: 'absolute',
            left: 0,
            bottom: 11
          } : null;

          return React.createElement(
            'div', {
              className: 'drp-trgt' + (this.state.isover ? ' drp-trgt-over' : '') + (buttons.length === 0 ? ' drp-trgt-empty' : ''),
              style: style
            },
            React.createElement(
              'table',
              null,
              React.createElement(
                'tbody',
                null,
                React.createElement(
                  'tr',
                  null,
                  buttons
                )
              )
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.DragManager.jsx": 92,
      "./orb.react.DropIndicator.jsx": 93,
      "react": "react"
    }],
    95: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        DragManager = _dereq_('./orb.react.DragManager.jsx'),
        DropIndicator = _dereq_('./orb.react.DropIndicator.jsx'),
        dtid = 0;

      module.exports = React.createClass({
        displayName: 'exports',

        getInitialState: function getInitialState() {
          this.dtid = ++dtid;
          return {
            isover: false
          };
        },
        componentDidMount: function componentDidMount() {
          DragManager.registerTarget(this, this.props.axetype, this.onDragOver, this.onDragEnd);
        },
        componentWillUnmount: function componentWillUnmount() {
          DragManager.unregisterTarget(this);
        },
        onDragOver: function onDragOver(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: true
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        onDragEnd: function onDragEnd(callback) {
          if (this.isMounted()) {
            this.setState({
              isover: false
            }, callback);
          } else if (callback) {
            callback();
          }
        },
        render: function render() {
          var self = this;

          var buttons = this.props.buttons.map(function(button, index) {
            var currButton = [React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(DropIndicator, {
                  isFirst: index === 0,
                  position: index,
                  axetype: self.props.axetype,
                  isVertical: true
                })
              )
            ), React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                button
              )
            )];

            if (index == self.props.buttons.length - 1) {
              currButton.push(React.createElement(
                'tr',
                null,
                React.createElement(
                  'td',
                  null,
                  React.createElement(DropIndicator, {
                    isLast: true,
                    position: null,
                    axetype: self.props.axetype,
                    isVertical: true
                  })
                )
              ));
            }

            return currButton;
          });

          return React.createElement(
            'div', {
              className: 'drp-trgt-vertical' + (this.state.isover ? ' drp-trgt-over' : '') + (buttons.length === 0 ? ' drp-trgt-vertical-empty' : '')
            },
            React.createElement(
              'table',
              null,
              React.createElement(
                'tbody',
                null,
                buttons
              )
            )
          );
        }
      });

    }, {
      "./orb.react.DragManager.jsx": 92,
      "./orb.react.DropIndicator.jsx": 93,
      "react": "react"
    }],
    96: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        utils = _dereq_('../orb.utils');

      module.exports = React.createClass({
        displayName: 'exports',

        openOrClose: function openOrClose(e) {
          var valueNode = this.refs.valueElement;
          var valuesListNode = this.refs.valuesList;
          var target = e.target || e.srcElement;

          if (target === valueNode && valuesListNode.style.display === 'none') {
            valuesListNode.style.display = 'block';
          } else {
            valuesListNode.style.display = 'none';
          }
        },
        onMouseEnter: function onMouseEnter() {
          var valueNode = this.refs.valueElement;
          valueNode.className = "orb-tgl-btn-down";
          valueNode.style.backgroundPosition = 'right center';
        },
        onMouseLeave: function onMouseLeave() {
          this.refs.valueElement.className = "";
        },
        componentDidMount: function componentDidMount() {
          utils.addEventListener(document, 'click', this.openOrClose);
        },
        componentWillUnmount: function componentWillUnmount() {
          utils.removeEventListener(document, 'click', this.openOrClose);
        },
        selectValue: function selectValue(e) {
          var listNode = this.refs.valuesList;
          var target = e.target || e.srcElement;
          var isli = false;
          while (!isli && target != null) {
            if (target.parentNode == listNode) {
              isli = true;
              break;
            }
            target = target.parentNode;
          }

          if (isli) {
            var value = target.textContent;
            var valueElement = this.refs.valueElement;
            if (valueElement.textContent != value) {
              valueElement.textContent = value;
              if (this.props.onValueChanged) {
                this.props.onValueChanged(value);
              }
            }
          }
        },
        render: function render() {
          function createSelectValueFunc(value) {
            return function() {
              this.selectValue(value);
            };
          }

          var values = [];
          for (var i = 0; i < this.props.values.length; i++) {
            values.push(React.createElement('li', {
              key: 'item' + i,
              dangerouslySetInnerHTML: {
                __html: this.props.values[i]
              }
            }));
          }

          return React.createElement(
            'div', {
              className: 'orb-select'
            },
            React.createElement('div', {
              ref: 'valueElement',
              dangerouslySetInnerHTML: {
                __html: this.props.selectedValue
              },
              onMouseEnter: this.onMouseEnter,
              onMouseLeave: this.onMouseLeave
            }),
            React.createElement(
              'ul', {
                ref: 'valuesList',
                style: {
                  display: 'none'
                },
                onClick: this.selectValue
              },
              values
            )
          );
        }
      });

    }, {
      "../orb.utils": 89,
      "react": "react"
    }],
    97: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        Dropdown = _dereq_('./orb.react.Dropdown.jsx'),
        utils = _dereq_('../orb.utils'),
        filtering = _dereq_('../orb.filtering'),
        domUtils = _dereq_('../orb.utils.dom');

      module.exports = React.createClass({
        displayName: 'exports',

        pgridwidget: null,
        values: null,
        filterManager: null,
        getInitialState: function getInitialState() {
          this.pgridwidget = this.props.pivotTableComp.pgridwidget;
          return {};
        },
        destroy: function destroy() {
          var container = ReactDOM.findDOMNode(this).parentNode;
          ReactDOM.unmountComponentAtNode(container);
          container.parentNode.removeChild(container);
        },
        onFilter: function onFilter(operator, term, staticValue, excludeStatic) {
          this.props.pivotTableComp.applyFilter(this.props.field, operator, term, staticValue, excludeStatic);
          this.destroy();
        },
        onMouseDown: function onMouseDown(e) {
          var container = ReactDOM.findDOMNode(this).parentNode;
          var target = e.target || e.srcElement;
          while (target != null) {
            if (target == container) {
              return true;
            }
            target = target.parentNode;
          }

          this.destroy();
        },
        onMouseWheel: function onMouseWheel(e) {
          var valuesTable = this.refs.valuesTable;
          var target = e.target || e.srcElement;
          while (target != null) {
            if (target == valuesTable) {
              if (valuesTable.scrollHeight <= valuesTable.clientHeight) {
                utils.stopPropagation(e);
                utils.preventDefault(e);
              }
              return;
            }
            target = target.parentNode;
          }

          this.destroy();
        },
        componentWillMount: function componentWillMount() {
          utils.addEventListener(document, 'mousedown', this.onMouseDown);
          utils.addEventListener(document, 'wheel', this.onMouseWheel);
          utils.addEventListener(window, 'resize', this.destroy);
        },
        componentDidMount: function componentDidMount() {
          this.filterManager.init(ReactDOM.findDOMNode(this));
        },
        componentWillUnmount: function componentWillUnmount() {
          utils.removeEventListener(document, 'mousedown', this.onMouseDown);
          utils.removeEventListener(document, 'wheel', this.onMouseWheel);
          utils.removeEventListener(window, 'resize', this.destroy);
        },
        render: function render() {
          var checkboxes = [];

          this.filterManager = new FilterManager(this, this.pgridwidget.pgrid.getFieldFilter(this.props.field));
          this.values = this.pgridwidget.pgrid.getFieldValues(this.props.field);

          function addCheckboxRow(value, text) {
            return checkboxes.push(React.createElement(
              'tr', {
                key: value
              },
              React.createElement(
                'td', {
                  className: 'fltr-chkbox'
                },
                React.createElement('input', {
                  type: 'checkbox',
                  value: value,
                  defaultChecked: 'checked'
                })
              ),
              React.createElement(
                'td', {
                  className: 'fltr-val',
                  title: text || value
                },
                text || value
              )
            ));
          }

          addCheckboxRow(filtering.ALL, '(Show All)');

          for (var i = 0; i < this.values.length; i++) {
            if (this.values[i] != null) {
              addCheckboxRow(this.values[i]);
            } else {
              addCheckboxRow(filtering.BLANK, '(Blank)');
            }
          }

          var buttonClass = this.props.pivotTableComp.pgrid.config.theme.getButtonClasses().orbButton;
          var style = this.props.pivotTableComp.fontStyle;

          var currentFilter = this.pgridwidget.pgrid.getFieldFilter(this.props.field);

          return React.createElement(
            'table', {
              className: 'fltr-scntnr',
              style: style
            },
            React.createElement(
              'tbody',
              null,
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td', {
                    className: 'srchop-col'
                  },
                  React.createElement(Dropdown, {
                    values: [filtering.Operators.MATCH.name, filtering.Operators.NOTMATCH.name, filtering.Operators.EQ.name, filtering.Operators.NEQ.name, filtering.Operators.GT.name, filtering.Operators.GTE.name, filtering.Operators.LT.name, filtering.Operators.LTE.name],
                    selectedValue: currentFilter && currentFilter.operator ? currentFilter.operator.name : filtering.Operators.MATCH.name,
                    onValueChanged: this.filterManager.onOperatorChanged
                  })
                ),
                React.createElement(
                  'td', {
                    className: 'srchtyp-col',
                    title: 'Enable/disable Regular expressions'
                  },
                  '.*'
                ),
                React.createElement(
                  'td', {
                    className: 'srchbox-col'
                  },
                  React.createElement(
                    'table', {
                      style: {
                        width: '100%'
                      }
                    },
                    React.createElement(
                      'tbody',
                      null,
                      React.createElement(
                        'tr',
                        null,
                        React.createElement(
                          'td',
                          null,
                          React.createElement('input', {
                            type: 'text',
                            placeholder: 'search'
                          })
                        ),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(
                            'div', {
                              className: 'srchclear-btn',
                              onClick: this.clearFilter
                            },
                            'x'
                          )
                        )
                      )
                    )
                  )
                )
              ),
              React.createElement(
                'tr',
                null,
                React.createElement(
                  'td', {
                    colSpan: '3',
                    className: 'fltr-vals-col'
                  },
                  React.createElement(
                    'table', {
                      className: 'fltr-vals-tbl',
                      ref: 'valuesTable'
                    },
                    React.createElement(
                      'tbody',
                      null,
                      checkboxes
                    )
                  )
                )
              ),
              React.createElement(
                'tr', {
                  className: 'bottom-row'
                },
                React.createElement(
                  'td', {
                    className: 'cnfrm-btn-col',
                    colSpan: '2'
                  },
                  React.createElement('input', {
                    type: 'button',
                    className: buttonClass,
                    value: 'Ok',
                    style: {
                      float: 'left'
                    }
                  }),
                  React.createElement('input', {
                    type: 'button',
                    className: buttonClass,
                    value: 'Cancel',
                    style: {
                      float: 'left'
                    }
                  })
                ),
                React.createElement(
                  'td', {
                    className: 'resize-col'
                  },
                  React.createElement('div', null)
                )
              )
            )
          );
        }
      });

      function FilterManager(reactComp, initialFilterObject) {

        var self = this;
        var INDETERMINATE = 'indeterminate';

        var savedCheckedValues;
        var isSearchMode = false;
        var isRegexMode = false;
        var operator = filtering.Operators.MATCH;
        var lastSearchTerm = '';

        var elems = {
          filterContainer: null,
          checkboxes: {},
          searchBox: null,
          operatorBox: null,
          allCheckbox: null,
          addCheckbox: null,
          enableRegexButton: null,
          clearSearchButton: null,
          okButton: null,
          cancelButton: null,
          resizeGrip: null
        };

        var resizeManager;

        this.init = function(filterContainerElement) {

          elems.filterContainer = filterContainerElement;
          elems.checkboxes = {};
          elems.searchBox = elems.filterContainer.rows[0].cells[2].children[0].rows[0].cells[0].children[0];
          elems.clearSearchButton = elems.filterContainer.rows[0].cells[2].children[0].rows[0].cells[1].children[0];
          elems.operatorBox = elems.filterContainer.rows[0].cells[0].children[0];
          elems.okButton = elems.filterContainer.rows[2].cells[0].children[0];
          elems.cancelButton = elems.filterContainer.rows[2].cells[0].children[1];
          elems.resizeGrip = elems.filterContainer.rows[2].cells[1].children[0];

          var rows = elems.filterContainer.rows[1].cells[0].children[0].rows;
          for (var i = 0; i < rows.length; i++) {
            var checkbox = rows[i].cells[0].children[0];
            elems.checkboxes[checkbox.value] = checkbox;
          }

          elems.allCheckbox = elems.checkboxes[filtering.ALL];
          elems.blanckCheckbox = elems.checkboxes[filtering.BLANK];
          elems.addCheckbox = null;
          elems.enableRegexButton = elems.filterContainer.rows[0].cells[1];

          resizeManager = new ResizeManager(elems.filterContainer.parentNode, elems.filterContainer.rows[1].cells[0].children[0], elems.resizeGrip);

          applyInitialFilterObject();
          addEventListeners();
        };

        this.onOperatorChanged = function(newOperator) {
          if (operator.name !== newOperator) {
            operator = filtering.Operators.get(newOperator);
            self.toggleRegexpButtonVisibility();
            self.searchChanged('operatorChanged');
          }
        };

        function checkboxVisible(checkbox, isVisible) {
          if (isVisible != null) {
            checkbox.parentNode.parentNode.style.display = isVisible ? '' : 'none';
          } else {
            return checkbox.parentNode.parentNode.style.display != 'none';
          }
        }

        function applyInitialFilterObject() {
          if (initialFilterObject) {
            var staticInfos = {
              values: initialFilterObject.staticValue,
              toExclude: initialFilterObject.excludeStatic
            };

            if (initialFilterObject.term) {
              isSearchMode = true;

              operator = initialFilterObject.operator;
              self.toggleRegexpButtonVisibility();

              if (initialFilterObject.regexpMode) {
                isRegexMode = true;
                self.toggleRegexpButtonState();
                lastSearchTerm = initialFilterObject.term.source;
              } else {
                lastSearchTerm = initialFilterObject.term;
              }

              elems.searchBox.value = lastSearchTerm;

              self.applyFilterTerm(initialFilterObject.operator, initialFilterObject.term);
            } else {
              savedCheckedValues = staticInfos;
            }

            self.updateCheckboxes(staticInfos);
            self.updateAllCheckbox();
          }
        }

        function addEventListeners() {
          self.toggleRegexpButtonVisibility();

          utils.addEventListener(elems.filterContainer, 'click', self.valueChecked);
          utils.addEventListener(elems.searchBox, 'keyup', self.searchChanged);

          utils.addEventListener(elems.clearSearchButton, 'click', self.clearSearchBox);

          utils.addEventListener(elems.okButton, 'click', function() {
            var checkedObj = self.getCheckedValues();
            reactComp.onFilter(operator.name, operator.regexpSupported && isSearchMode && isRegexMode ? new RegExp(lastSearchTerm, 'i') : lastSearchTerm, checkedObj.values, checkedObj.toExclude);
          });
          utils.addEventListener(elems.cancelButton, 'click', function() {
            reactComp.destroy();
          });
        }

        function ResizeManager(outerContainerElem, valuesTableElem, resizeGripElem) {

          var minContainerWidth = 301;
          var minContainerHeight = 223;

          var mousedownpos = {
            x: 0,
            y: 0
          };
          var isMouseDown = false;

          this.resizeMouseDown = function(e) {
            // drag/sort with left mouse button
            if (utils.getEventButton(e) !== 0) return;

            var mousePageXY = utils.getMousePageXY(e);

            isMouseDown = true;
            document.body.style.cursor = 'se-resize';

            mousedownpos.x = mousePageXY.pageX;
            mousedownpos.y = mousePageXY.pageY;

            // prevent event bubbling (to prevent text selection while dragging for example)
            utils.stopPropagation(e);
            utils.preventDefault(e);
          };

          this.resizeMouseUp = function() {
            isMouseDown = false;
            document.body.style.cursor = 'auto';
            return true;
          };

          this.resizeMouseMove = function(e) {
            // if the mouse is not down while moving, return (no drag)
            if (!isMouseDown) return;

            var mousePageXY = utils.getMousePageXY(e);

            var resizeGripSize = resizeGripElem.getBoundingClientRect();
            var outerContainerSize = outerContainerElem.getBoundingClientRect();
            var valuesTableSize = valuesTableElem.tBodies[0].getBoundingClientRect();

            var outerContainerWidth = outerContainerSize.right - outerContainerSize.left;
            var outerContainerHeight = outerContainerSize.bottom - outerContainerSize.top;

            var offset = {
              x: outerContainerWidth <= minContainerWidth && mousePageXY.pageX < resizeGripSize.left ? 0 : mousePageXY.pageX - mousedownpos.x,
              y: outerContainerHeight <= minContainerHeight && mousePageXY.pageY < resizeGripSize.top ? 0 : mousePageXY.pageY - mousedownpos.y
            };

            var newContainerWidth = outerContainerWidth + offset.x;
            var newContainerHeight = outerContainerHeight + offset.y;

            mousedownpos.x = mousePageXY.pageX;
            mousedownpos.y = mousePageXY.pageY;

            if (newContainerWidth >= minContainerWidth) {
              outerContainerElem.style.width = newContainerWidth + 'px';
            }

            if (newContainerHeight >= minContainerHeight) {
              outerContainerElem.style.height = newContainerHeight + 'px';
              valuesTableElem.tBodies[0].style.height = valuesTableSize.bottom - valuesTableSize.top + offset.y + 'px';
            }

            utils.stopPropagation(e);
            utils.preventDefault(e);
          };

          utils.addEventListener(resizeGripElem, 'mousedown', this.resizeMouseDown);
          utils.addEventListener(document, 'mouseup', this.resizeMouseUp);
          utils.addEventListener(document, 'mousemove', this.resizeMouseMove);
        }

        this.clearSearchBox = function() {
          elems.searchBox.value = '';
          self.searchChanged();
        };

        this.toggleRegexpButtonVisibility = function() {
          if (operator.regexpSupported) {
            utils.addEventListener(elems.enableRegexButton, 'click', self.regexpActiveChanged);
            domUtils.removeClass(elems.enableRegexButton, 'srchtyp-col-hidden');
          } else {
            utils.removeEventListener(elems.enableRegexButton, 'click', self.regexpActiveChanged);
            domUtils.addClass(elems.enableRegexButton, 'srchtyp-col-hidden');
          }
        };

        this.toggleRegexpButtonState = function() {
          elems.enableRegexButton.className = elems.enableRegexButton.className.replace('srchtyp-col-active', '');
          if (isRegexMode) {
            domUtils.addClass(elems.enableRegexButton, 'srchtyp-col-active');
          } else {
            domUtils.removeClass(elems.enableRegexButton, 'srchtyp-col-active');
          }
        };

        this.regexpActiveChanged = function() {
          isRegexMode = !isRegexMode;
          self.toggleRegexpButtonState();
          self.searchChanged('regexModeChanged');
        };

        this.valueChecked = function(e) {
          var target = e.target || e.srcElement;
          if (target && target.type && target.type === 'checkbox') {
            if (target == elems.allCheckbox) {
              self.updateCheckboxes({
                values: elems.allCheckbox.checked
              });
            } else {
              self.updateAllCheckbox();
            }
          }
        };

        this.applyFilterTerm = function(operator, term) {
          var defaultVisible = term ? false : true;
          var opterm = operator.regexpSupported && isSearchMode ? isRegexMode ? term : utils.escapeRegex(term) : term;
          checkboxVisible(elems.allCheckbox, defaultVisible);
          for (var i = 0; i < reactComp.values.length; i++) {
            var val = reactComp.values[i];
            var checkbox = val != null ? elems.checkboxes[val] : elems.blanckCheckbox;
            var visible = !isSearchMode || operator.func(val, opterm);
            checkboxVisible(checkbox, visible);
            checkbox.checked = visible;
          }
        };

        this.searchChanged = function(e) {
          var search = (elems.searchBox.value || '').trim();
          if (e === 'operatorChanged' || e === 'regexModeChanged' && search || search != lastSearchTerm) {
            lastSearchTerm = search;

            var previousIsSearchMode = isSearchMode;
            isSearchMode = search !== '';

            if (isSearchMode && !previousIsSearchMode) {
              savedCheckedValues = self.getCheckedValues();
            }

            //var searchTerm = operator.regexpSupported && isSearchMode ? new RegExp(isRegexMode ? search : utils.escapeRegex(search), 'i') : search;
            if (e !== 'operatorChanged' || isSearchMode) {
              self.applyFilterTerm(operator, search);
            }

            if (!isSearchMode && previousIsSearchMode) {
              self.updateCheckboxes(savedCheckedValues);
            }

            self.updateAllCheckbox();
          }
        };

        this.getCheckedValues = function() {
          if (!isSearchMode && !elems.allCheckbox.indeterminate) {
            return {
              values: elems.allCheckbox.checked ? filtering.ALL : filtering.NONE,
              toExclude: false
            };
          } else {
            var staticValue;
            var i, val, checkbox;
            var valuesCount = 0,
              checkedCount = 0;

            for (i = 0; i < reactComp.values.length; i++) {
              val = reactComp.values[i];
              checkbox = val != null ? elems.checkboxes[val] : elems.blanckCheckbox;
              if (checkboxVisible(checkbox)) {
                valuesCount++;
                if (checkbox.checked) {
                  checkedCount++;
                }
              }
            }

            var excludeUnchecked = false;

            if (checkedCount === 0) {
              staticValue = filtering.NONE;
            } else if (checkedCount == valuesCount) {
              staticValue = filtering.ALL;
            } else {
              staticValue = [];
              excludeUnchecked = checkedCount > valuesCount / 2 + 1;

              for (i = 0; i < reactComp.values.length; i++) {
                val = reactComp.values[i];
                checkbox = val != null ? elems.checkboxes[val] : elems.blanckCheckbox;
                if (checkboxVisible(checkbox)) {
                  if (!excludeUnchecked && checkbox.checked || excludeUnchecked && !checkbox.checked) {
                    staticValue.push(val);
                  }
                }
              }
            }
            return {
              values: staticValue,
              toExclude: excludeUnchecked
            };
          }
        };

        this.updateCheckboxes = function(checkedList) {
          var values = checkedList ? checkedList.values : null;
          var allchecked = utils.isArray(values) ? null : values == null || values === filtering.ALL ? true : values === filtering.NONE ? false : !!values;
          for (var i = 0; i < reactComp.values.length; i++) {
            var val = reactComp.values[i];
            var checkbox = val != null ? elems.checkboxes[val] : elems.blanckCheckbox;
            if (checkboxVisible(checkbox)) {
              if (allchecked != null) {
                checkbox.checked = allchecked;
              } else {
                var valInList = values.indexOf(val) >= 0;
                checkbox.checked = checkedList.toExclude ? !valInList : valInList;
              }
            }
          }
        };

        this.updateAllCheckbox = function() {
          if (!isSearchMode) {
            var allchecked = null;
            for (var i = 0; i < reactComp.values.length; i++) {
              var val = reactComp.values[i];
              var checkbox = val != null ? elems.checkboxes[val] : elems.blanckCheckbox;
              if (allchecked == null) {
                allchecked = checkbox.checked;
              } else {
                if (allchecked !== checkbox.checked) {
                  allchecked = INDETERMINATE;
                  break;
                }
              }
            }

            if (allchecked === INDETERMINATE) {
              elems.allCheckbox.indeterminate = true;
              elems.allCheckbox.checked = false;
            } else {
              elems.allCheckbox.indeterminate = false;
              elems.allCheckbox.checked = allchecked;
            }
          }
        };
      }

    }, {
      "../orb.filtering": 76,
      "../orb.utils": 89,
      "../orb.utils.dom": 88,
      "./orb.react.Dropdown.jsx": 96,
      "react": "react",
      "react-dom": "react-dom"
    }],
    98: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        utils = _dereq_('../orb.utils');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var data = this.props.data;
          var headers = this.props.headers;
          var tableClasses = this.props.theme.getGridClasses();

          var rows = [];

          if (headers && headers.length > 0) {
            var headerRow = [];
            for (var h = 0; h < headers.length; h++) {
              headerRow.push(React.createElement(
                'th', {
                  key: 'h' + h
                },
                headers[h]
              ));
            }
            rows.push(React.createElement(
              'tr', {
                key: 'h'
              },
              headerRow
            ));
          }

          if (data && data.length > 0) {
            for (var i = 0; i < data.length; i++) {
              var row = [];
              if (utils.isArray(data[i])) {
                for (var j = 0; j < data[i].length; j++) {
                  row.push(React.createElement(
                    'td', {
                      key: i + '' + j
                    },
                    data[i][j]
                  ));
                }
              } else {
                for (var prop in data[i]) {
                  if (data[i].hasOwnProperty(prop)) {
                    row.push(React.createElement(
                      'td', {
                        key: i + '' + prop
                      },
                      data[i][prop]
                    ));
                  }
                }
              }
              rows.push(React.createElement(
                'tr', {
                  key: i
                },
                row
              ));
            }
          }

          return React.createElement(
            'table', {
              className: tableClasses.table
            },
            React.createElement(
              'tbody',
              null,
              rows
            )
          );
        }
      });

    }, {
      "../orb.utils": 89,
      "react": "react"
    }],
    99: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        FilterPanel = _dereq_('./orb.react.FilterPanel.jsx'),
        DragManager = _dereq_('./orb.react.DragManager.jsx'),
        utils = _dereq_('../orb.utils'),
        axe = _dereq_('../orb.axe'),
        domUtils = _dereq_('../orb.utils.dom'),
        pbid = 0;

      module.exports = React.createClass({
        displayName: 'PivotButton',
        getInitialState: function getInitialState() {
          this.pbid = ++pbid;

          // initial state, all zero.
          return {
            pos: {
              x: 0,
              y: 0
            },
            startpos: {
              x: 0,
              y: 0
            },
            mousedown: false,
            dragging: false
          };
        },
        onFilterMouseDown: function onFilterMouseDown(e) {
          // left mouse button only
          if (e.button !== 0) return;

          var filterButton = this.refs.filterButton;
          var filterButtonPos = domUtils.getOffset(filterButton);
          var filterContainer = document.createElement('div');

          var filterPanelFactory = React.createFactory(FilterPanel);
          var filterPanel = filterPanelFactory({
            field: this.props.field.name,
            pivotTableComp: this.props.pivotTableComp
          });

          filterContainer.className = this.props.pivotTableComp.pgrid.config.theme.getFilterClasses().container;
          filterContainer.style.top = filterButtonPos.y + 'px';
          filterContainer.style.left = filterButtonPos.x + 'px';
          document.body.appendChild(filterContainer);

          ReactDOM.render(filterPanel, filterContainer);

          // prevent event bubbling (to prevent text selection while dragging for example)
          utils.stopPropagation(e);
          utils.preventDefault(e);
        },
        componentDidUpdate: function componentDidUpdate() {
          if (this.props.pivotTableComp.pgrid.config.canMoveFields) {
            if (!this.state.mousedown) {
              // mouse not down, don't care about mouse up/move events.
              DragManager.setDragElement(null);
              utils.removeEventListener(document, 'mousemove', this.onMouseMove);
            } else if (this.state.mousedown) {
              // mouse down, interested by mouse up/move events.
              DragManager.setDragElement(this);
              utils.addEventListener(document, 'mousemove', this.onMouseMove);
            }
          }
        },
        componentDidMount: function componentDidMount() {
          this.props.pivotTableComp.registerThemeChanged(this.updateClasses);
        },
        componentWillUnmount: function componentWillUnmount() {
          this.props.pivotTableComp.unregisterThemeChanged(this.updateClasses);
          utils.removeEventListener(document, 'mousemove', this.onMouseMove);
        },
        onMouseDown: function onMouseDown(e) {
          // drag/sort with left mouse button
          if (e.button !== 0) return;

          if (e.ctrlKey) {
            this.props.pivotTableComp.pgridwidget.toggleFieldExpansion(this.props.axetype, this.props.field);
          } else {

            var thispos = domUtils.getOffset(ReactDOM.findDOMNode(this));
            var mousePageXY = utils.getMousePageXY(e);

            // inform mousedown, save start pos
            this.setState({
              mousedown: true,
              mouseoffset: {
                x: thispos.x - mousePageXY.pageX,
                y: thispos.y - mousePageXY.pageY
              },
              startpos: {
                x: mousePageXY.pageX,
                y: mousePageXY.pageY
              }
            });
          }

          // prevent event bubbling (to prevent text selection while dragging for example)
          utils.stopPropagation(e);
          utils.preventDefault(e);
        },
        onMouseUp: function onMouseUp(e) {

          var isdragged = this.state.dragging;

          this.setState({
            mousedown: false,
            dragging: false,
            size: null,
            pos: {
              x: 0,
              y: 0
            }
          });

          if (!e.ctrlKey && !isdragged) {
            // if button was not dragged, proceed as a click
            this.props.pivotTableComp.sort(this.props.axetype, this.props.field);
          }
        },
        onMouseMove: function onMouseMove(e) {
          // if the mouse is not down while moving, return (no drag)
          if (!this.props.pivotTableComp.pgrid.config.canMoveFields || !this.state.mousedown) return;

          var size = null;
          var mousePageXY = utils.getMousePageXY(e);

          if (!this.state.dragging) {
            size = domUtils.getSize(ReactDOM.findDOMNode(this));
          } else {
            size = this.state.size;
          }

          var newpos = {
            x: mousePageXY.pageX + this.state.mouseoffset.x,
            y: mousePageXY.pageY + this.state.mouseoffset.y
          };

          if (!this.state.dragging || newpos.x != this.state.pos.x || newpos.y != this.state.pos.y) {
            this.setState({
              dragging: true,
              size: size,
              pos: newpos
            });

            DragManager.elementMoved();
          }

          utils.stopPropagation(e);
          utils.preventDefault(e);
        },
        updateClasses: function updateClasses() {
          ReactDOM.findDOMNode(this).className = this.props.pivotTableComp.pgrid.config.theme.getButtonClasses().pivotButton;
        },
        render: function render() {
          var self = this;
          var divstyle = {
            left: self.state.pos.x + 'px',
            top: self.state.pos.y + 'px',
            position: self.state.dragging ? 'fixed' : '',
            zIndex: 101
          };

          if (self.state.size) {
            divstyle.width = self.state.size.width + 'px';
          }

          var sortDirectionClass = self.props.field.sort.order === 'asc' ? 'sort-asc' :
            //' \u2191' :
            self.props.field.sort.order === 'desc' ? 'sort-desc' :
            //' \u2193' :
            '';
          var filterClass = (self.state.dragging ? '' : 'fltr-btn') + (this.props.pivotTableComp.pgrid.isFieldFiltered(this.props.field.name) ? ' fltr-btn-active' : '');
          var fieldAggFunc = '';
          if (self.props.axetype === axe.Type.DATA) {
            fieldAggFunc = React.createElement(
              'small',
              null,
              ' (' + self.props.field.aggregateFuncName + ')'
            );
          }

          return React.createElement(
            'div', {
              key: self.props.field.name,
              className: this.props.pivotTableComp.pgrid.config.theme.getButtonClasses().pivotButton,
              onMouseDown: this.onMouseDown,
              onMouseUp: this.onMouseUp,
              style: divstyle
            },
            React.createElement(
              'table',
              null,
              React.createElement(
                'tbody',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'td', {
                      className: 'caption'
                    },
                    self.props.field.caption,
                    fieldAggFunc
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement('div', {
                      className: 'sort-indicator ' + sortDirectionClass
                    })
                  ),
                  React.createElement(
                    'td', {
                      className: 'filter'
                    },
                    React.createElement('div', {
                      ref: 'filterButton',
                      className: filterClass,
                      onMouseDown: self.state.dragging ? null : this.onFilterMouseDown
                    })
                  )
                )
              )
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "../orb.utils": 89,
      "../orb.utils.dom": 88,
      "./orb.react.DragManager.jsx": 92,
      "./orb.react.FilterPanel.jsx": 97,
      "react": "react",
      "react-dom": "react-dom"
    }],
    100: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        uiheaders = _dereq_('../orb.ui.header'),
        domUtils = _dereq_('../orb.utils.dom'),
        _paddingLeft = null,
        _borderLeft = null;

      module.exports = React.createClass({
        displayName: 'exports',

        expand: function expand() {
          this.props.pivotTableComp.pgridwidget.expandRow(this.props.cell);
        },
        collapse: function collapse() {
          this.props.pivotTableComp.pgridwidget.collapseRow(this.props.cell);
        },
        updateCellInfos: function updateCellInfos() {
          var node = ReactDOM.findDOMNode(this);
          var cell = this.props.cell;
          node.__orb = node.__orb || {};

          if (!cell.visible()) {

            node.__orb._visible = false;
          } else {
            var cellContentNode = this.refs.cellContent;

            var propList = [];
            var retPaddingLeft = _paddingLeft == null;
            var retBorderLeft = !this.props.leftmost && _borderLeft == null;
            var text = node.textContent || node.innerText;

            if (retPaddingLeft) {
              propList.push('padding-left');
            }

            if (retBorderLeft) {
              propList.push('border-left-width');
            }

            if (propList.length > 0) {
              var nodeStyle = domUtils.getStyle(node, propList, true);

              if (retPaddingLeft) {
                _paddingLeft = parseFloat(nodeStyle[0]);
              }

              if (retBorderLeft) {
                _borderLeft = parseFloat(nodeStyle[retPaddingLeft ? 1 : 0]);
              }
            }

            domUtils.removeClass(node, 'cell-hidden');

            node.__orb._visible = true;
            if (text != node.__orb._lastText || !node.__orb._textWidth) {
              node.__orb._lastText = text;
              node.__orb._textWidth = domUtils.getSize(cellContentNode).width;
            }
            node.__orb._colSpan = this.props.cell.hspan(true) || 1;
            node.__orb._rowSpan = this.props.cell.vspan(true) || 1;
            node.__orb._paddingLeft = _paddingLeft;
            node.__orb._paddingRight = _paddingLeft;
            node.__orb._borderLeftWidth = this.props.leftmost ? 0 : _borderLeft;
            node.__orb._borderRightWidth = 0;
          }
        },
        componentDidMount: function componentDidMount() {
          this.updateCellInfos();
        },
        componentDidUpdate: function componentDidUpdate() {
          this.updateCellInfos();
        },
        shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
          if (nextProps.cell && nextProps.cell == this.props.cell && !this._latestVisibleState && !nextProps.cell.visible()) {
            return false;
          }
          return true;
        },
        _latestVisibleState: false,
        render: function render() {
          var self = this;
          var cell = this.props.cell;
          var divcontent = [];
          var value;
          var cellClick;
          var headerPushed = false;

          this._latestVisibleState = cell.visible();

          switch (cell.template) {
            case 'cell-template-row-header':
            case 'cell-template-column-header':
              var isWrapper = cell.type === uiheaders.HeaderType.WRAPPER && cell.dim.field.subTotal.visible && cell.dim.field.subTotal.collapsible;
              var isSubtotal = cell.type === uiheaders.HeaderType.SUB_TOTAL && !cell.expanded;
              if (isWrapper || isSubtotal) {
                headerPushed = true;

                divcontent.push(React.createElement(
                  'table', {
                    key: 'header-value',
                    ref: 'cellContent'
                  },
                  React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                      'tr',
                      null,
                      React.createElement(
                        'td', {
                          className: 'orb-tgl-btn'
                        },
                        React.createElement('div', {
                          className: 'orb-tgl-btn-' + (isWrapper ? 'down' : 'right'),
                          onClick: isWrapper ? this.collapse : this.expand
                        })
                      ),
                      React.createElement(
                        'td', {
                          className: 'hdr-val'
                        },
                        React.createElement('div', {
                          dangerouslySetInnerHTML: {
                            __html: cell.value || '&#160;'
                          }
                        })
                      )
                    )
                  )
                ));
              } else {
                value = (cell.value || '&#160;') + (cell.type === uiheaders.HeaderType.SUB_TOTAL ? ' Total' : '');
              }
              break;
            case 'cell-template-dataheader':
              value = cell.value.caption;
              break;
            case 'cell-template-datavalue':
              value = cell.datafield && cell.datafield.formatFunc ? cell.datafield.formatFunc()(cell.value) : cell.value;
              cellClick = function cellClick() {
                self.props.pivotTableComp.pgridwidget.drilldown(cell, self.props.pivotTableComp.id);
              };
              break;
            default:
              break;
          }

          if (!headerPushed) {
            var headerClassName;
            switch (cell.template) {
              case 'cell-template-datavalue':
                headerClassName = 'cell-data';
                break;
              default:
                if (cell.template != 'cell-template-dataheader' && cell.type !== uiheaders.HeaderType.GRAND_TOTAL) {
                  headerClassName = 'hdr-val';
                }
            }
            divcontent.push(React.createElement(
              'div', {
                key: 'cell-value',
                ref: 'cellContent',
                className: headerClassName
              },
              React.createElement('div', {
                dangerouslySetInnerHTML: {
                  __html: value || '&#160;'
                }
              })
            ));
          }

          return React.createElement(
            'td', {
              className: getClassname(this.props),
              onDoubleClick: cellClick,
              colSpan: cell.hspan(),
              rowSpan: cell.vspan()
            },
            React.createElement(
              'div',
              null,
              divcontent
            )
          );
        }
      });

      function getClassname(compProps) {
        var cell = compProps.cell;
        var classname = cell.cssclass;
        var isEmpty = cell.template === 'cell-template-empty';

        if (!cell.visible()) {
          classname += ' cell-hidden';
        }

        if (cell.type === uiheaders.HeaderType.SUB_TOTAL && cell.expanded) {
          classname += ' header-st-exp';
        }

        if (cell.type === uiheaders.HeaderType.GRAND_TOTAL) {
          if (cell.dim.depth === 1) {
            classname += ' header-nofields';
          } else if (cell.dim.depth > 2) {
            classname += ' header-gt-exp';
          }
        }

        if (compProps.leftmost) {
          classname += ' ' + (cell.template === 'cell-template-datavalue' ? 'cell' : 'header') + '-leftmost';
        }

        if (compProps.topmost) {
          classname += ' cell-topmost';
        }

        return classname;
      }

    }, {
      "../orb.ui.header": 85,
      "../orb.utils.dom": 88,
      "react": "react",
      "react-dom": "react-dom"
    }],
    101: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        DragManager = _dereq_('./orb.react.DragManager.jsx'),
        SizingManager = _dereq_('./orb.react.PivotTable.SizingManager.jsx'),
        Toolbar = _dereq_('./orb.react.Toolbar.jsx'),
        UpperButtons = _dereq_('./orb.react.PivotTable.UpperButtons.jsx'),
        ColumnButtons = _dereq_('./orb.react.PivotTable.ColumnButtons.jsx'),
        RowButtons = _dereq_('./orb.react.PivotTable.RowButtons.jsx'),
        Chart = _dereq_('./orb.react.Chart.jsx'),
        domUtils = _dereq_('../orb.utils.dom'),
        pivotId = 1,
        themeChangeCallbacks = {};

      module.exports = React.createClass({
        displayName: 'exports',

        id: pivotId++,
        pgrid: null,
        pgridwidget: null,
        fontStyle: null,
        getInitialState: function getInitialState() {
          DragManager.init(this);

          themeChangeCallbacks[this.id] = [];
          this.registerThemeChanged(this.updateClasses);

          this.pgridwidget = this.props.pgridwidget;
          this.pgrid = this.pgridwidget.pgrid;
          return {};
        },
        sort: function sort(axetype, field) {
          this.pgridwidget.sort(axetype, field);
        },
        moveButton: function moveButton(button, newAxeType, position) {
          this.pgridwidget.moveField(button.props.field.name, button.props.axetype, newAxeType, position);
        },
        applyFilter: function applyFilter(fieldname, operator, term, staticValue, excludeStatic) {
          this.pgridwidget.applyFilter(fieldname, operator, term, staticValue, excludeStatic);
        },
        registerThemeChanged: function registerThemeChanged(compCallback) {
          if (compCallback) {
            themeChangeCallbacks[this.id].push(compCallback);
          }
        },
        unregisterThemeChanged: function unregisterThemeChanged(compCallback) {
          var i;
          if (compCallback && (i = themeChangeCallbacks[this.id].indexOf(compCallback)) >= 0) {
            themeChangeCallbacks[this.id].splice(i, 1);
          }
        },
        changeTheme: function changeTheme(newTheme) {
          if (this.pgridwidget.pgrid.config.setTheme(newTheme)) {
            // notify self/sub-components of the theme change
            for (var i = 0; i < themeChangeCallbacks[this.id].length; i++) {
              themeChangeCallbacks[this.id][i]();
            }
          }
        },
        updateClasses: function updateClasses() {
          var thisnode = ReactDOM.findDOMNode(this);
          var classes = this.pgridwidget.pgrid.config.theme.getPivotClasses();
          thisnode.className = classes.container;
          thisnode.children[1].className = classes.table;
        },
        componentDidUpdate: function componentDidUpdate() {
          this.synchronizeWidths();
        },
        componentDidMount: function componentDidMount() {
          var fontInfos = domUtils.getStyle(ReactDOM.findDOMNode(this), ['font-family', 'font-size'], true);
          this.fontStyle = {
            fontFamily: fontInfos[0],
            fontSize: fontInfos[1]
          };

          this.synchronizeWidths();
        },
        synchronizeWidths: function synchronizeWidths() {
          var chartStyle = SizingManager.synchronizeWidths(this);
          chartStyle.fontFamily = this.fontStyle.fontFamily;
          chartStyle.fontSize = this.fontStyle.fontSize;

          this.refs.chart.setState({
            canRender: true,
            chartStyle: chartStyle
          });
        },
        render: function render() {

          var self = this;

          var config = this.pgridwidget.pgrid.config;
          var classes = config.theme.getPivotClasses();

          var tblStyle = {};
          if (config.width) {
            tblStyle.width = config.width;
          }
          if (config.height) {
            tblStyle.height = config.height;
          }

          return React.createElement(
            'div', {
              className: classes.container,
              style: tblStyle,
              ref: 'pivot'
            },
            React.createElement(
              'table', {
                id: 'tbl-' + self.id,
                ref: 'pivotWrapperTable',
                className: classes.table
              },
              React.createElement(
                'colgroup',
                null,
                React.createElement('col', {
                  ref: 'column1'
                }),
                React.createElement('col', {
                  ref: 'column2'
                })
              ),
              React.createElement(
                'tbody',
                null,
                React.createElement(
                  'tr', {
                    ref: 'upperButtons'
                  },
                  React.createElement(
                    'td', {
                      colSpan: '2'
                    },
                    React.createElement(UpperButtons, {
                      pivotTableComp: self
                    })
                  )
                ),
                React.createElement(
                  'tr', {
                    ref: 'colButtons'
                  },
                  React.createElement('td', null),
                  React.createElement(
                    'td', {
                      style: {
                        padding: '11px 4px !important'
                      }
                    },
                    React.createElement(ColumnButtons, {
                      pivotTableComp: self
                    })
                  )
                ),
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'td', {
                      style: {
                        position: 'relative'
                      }
                    },
                    React.createElement(RowButtons, {
                      pivotTableComp: self,
                      ref: 'rowButtons'
                    })
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(Chart, {
                      pivotTableComp: self,
                      chartMode: config.chartMode,
                      ref: 'chart'
                    })
                  )
                )
              )
            )
          );
        }
      });

    }, {
      "../orb.utils.dom": 88,
      "./orb.react.Chart.jsx": 90,
      "./orb.react.DragManager.jsx": 92,
      "./orb.react.PivotTable.ColumnButtons.jsx": 103,
      "./orb.react.PivotTable.RowButtons.jsx": 106,
      "./orb.react.PivotTable.SizingManager.jsx": 108,
      "./orb.react.PivotTable.UpperButtons.jsx": 109,
      "./orb.react.Toolbar.jsx": 112,
      "react": "react",
      "react-dom": "react-dom"
    }],
    102: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        PivotCell = _dereq_('./orb.react.PivotCell.jsx'),
        axe = _dereq_('../orb.axe');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;

          var lastCellIndex = this.props.row.length - 1;
          var cell0 = this.props.row[0];
          var leftmostCellFound = false;
          var layoutInfos = self.props.layoutInfos;
          var cells;

          var rowstyle = {};

          var istopmost = false;

          cells = this.props.row.map(function(cell, index) {

            var isleftmost = false;

            // If current cells are column/data headers and left most cell is not found yet
            // and last row left most cell does not span vertically over the current one and current one is visible
            // then mark IT as the left most cell
            if (cell.visible() && layoutInfos) {
              if (cell.dim) {
                if (cell.dim.isRoot && layoutInfos.topMostCells[cell.dim.depth - 1] === undefined || !cell.dim.isRoot && layoutInfos.topMostCells[cell.dim.depth] === undefined && (cell.dim.parent.isRoot || layoutInfos.topMostCells[cell.dim.depth + 1] === cell.dim.parent)) {
                  istopmost = true;
                  layoutInfos.topMostCells[cell.dim.depth] = cell.dim;
                }
              } else if (!layoutInfos.topMostCells['0']) {
                istopmost = layoutInfos.topMostCells['0'] = true;
              }

              if (!leftmostCellFound && (self.props.axetype === axe.Type.DATA || self.props.axetype === axe.Type.COLUMNS) && layoutInfos.lastLeftMostCellVSpan === 0) {

                isleftmost = leftmostCellFound = true;
                layoutInfos.lastLeftMostCellVSpan = cell.vspan() - 1;
              }
            }

            return React.createElement(PivotCell, {
              key: index,
              cell: cell,
              leftmost: isleftmost,
              topmost: istopmost,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          // decrement lastLeftMostCellVSpan
          if (layoutInfos && layoutInfos.lastLeftMostCellVSpan > 0 && !leftmostCellFound) {
            layoutInfos.lastLeftMostCellVSpan--;
          }

          return React.createElement(
            'tr', {
              style: rowstyle
            },
            cells
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.PivotCell.jsx": 100,
      "react": "react"
    }],
    103: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        axe = _dereq_('../orb.axe'),
        PivotButton = _dereq_('./orb.react.PivotButton.jsx'),
        DropTarget = _dereq_('./orb.react.DropTarget.jsx');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;
          var config = this.props.pivotTableComp.pgridwidget.pgrid.config;

          var columnButtons = config.columnFields.map(function(field, index) {
            return React.createElement(PivotButton, {
              key: field.name,
              field: field,
              axetype: axe.Type.COLUMNS,
              position: index,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          return React.createElement(DropTarget, {
            buttons: columnButtons,
            axetype: axe.Type.COLUMNS
          });
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.DropTarget.jsx": 94,
      "./orb.react.PivotButton.jsx": 99,
      "react": "react"
    }],
    104: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        axe = _dereq_('../orb.axe'),
        PivotRow = _dereq_('./orb.react.PivotRow.jsx');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;
          var pgridwidget = this.props.pivotTableComp.pgridwidget;
          var cntrClass = pgridwidget.columns.headers.length === 0 ? '' : ' columns-cntr';

          var layoutInfos = {
            lastLeftMostCellVSpan: 0,
            topMostCells: {}
          };

          var columnHeaders = pgridwidget.columns.headers.map(function(headerRow, index) {
            return React.createElement(PivotRow, {
              key: index,
              row: headerRow,
              axetype: axe.Type.COLUMNS,
              pivotTableComp: self.props.pivotTableComp,
              layoutInfos: layoutInfos
            });
          });

          return React.createElement(
            'div', {
              className: 'inner-table-container' + cntrClass,
              onWheel: this.props.pivotTableComp.onWheel
            },
            React.createElement(
              'table', {
                className: 'inner-table'
              },
              React.createElement('colgroup', null),
              React.createElement(
                'tbody',
                null,
                columnHeaders
              )
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.PivotRow.jsx": 102,
      "react": "react"
    }],
    105: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        axe = _dereq_('../orb.axe'),
        PivotRow = _dereq_('./orb.react.PivotRow.jsx');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;
          var pgridwidget = this.props.pivotTableComp.pgridwidget;
          var layoutInfos = {
            lastLeftMostCellVSpan: 0,
            topMostCells: {}
          };

          var dataCells = pgridwidget.dataRows.map(function(dataRow, index) {
            return React.createElement(PivotRow, {
              key: index,
              row: dataRow,
              axetype: axe.Type.DATA,
              layoutInfos: layoutInfos,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          return React.createElement(
            'div', {
              className: 'inner-table-container data-cntr',
              onWheel: this.props.pivotTableComp.onWheel
            },
            React.createElement(
              'table', {
                className: 'inner-table'
              },
              React.createElement('colgroup', null),
              React.createElement(
                'tbody',
                null,
                dataCells
              )
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.PivotRow.jsx": 102,
      "react": "react"
    }],
    106: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        PivotButton = _dereq_('./orb.react.PivotButton.jsx'),
        DropTarget = _dereq_('./orb.react.DropTarget.jsx'),
        DropTargetVertical = _dereq_('./orb.react.DropTargetVertical.jsx'),
        axe = _dereq_('../orb.axe');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;
          var config = this.props.pivotTableComp.pgridwidget.pgrid.config;

          var rowButtons = config.rowFields.map(function(field, index) {
            return React.createElement(PivotButton, {
              key: field.name,
              field: field,
              axetype: axe.Type.ROWS,
              position: index,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          if (config.chartMode.enabled) {
            return React.createElement(DropTargetVertical, {
              buttons: rowButtons,
              axetype: axe.Type.ROWS
            });
          } else {
            return React.createElement(DropTarget, {
              buttons: rowButtons,
              axetype: axe.Type.ROWS
            });
          }
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.DropTarget.jsx": 94,
      "./orb.react.DropTargetVertical.jsx": 95,
      "./orb.react.PivotButton.jsx": 99,
      "react": "react"
    }],
    107: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        PivotRow = _dereq_('./orb.react.PivotRow.jsx'),
        axe = _dereq_('../orb.axe');

      module.exports = React.createClass({
        displayName: 'exports',

        setColGroup: function setColGroup(widths) {
          var node = ReactDOM.findDOMNode(this);
          var colGroupNode = this.refs.colgroup;
          node.style.tableLayout = 'auto';

          colGroupNode.innerHTML = '';
          for (var i = 0; i < widths.length; i++) {
            var col = document.createElement('col');
            col.style.width = widths[i] + 8 + 'px';
            colGroupNode.appendChild(col);
          }
          node.style.tableLayout = 'fixed';
        },
        render: function render() {
          var self = this;
          var pgridwidget = this.props.pivotTableComp.pgridwidget;
          var cntrClass = pgridwidget.rows.headers.length === 0 ? '' : ' rows-cntr';

          var layoutInfos = {
            lastLeftMostCellVSpan: 0,
            topMostCells: {}
          };

          var rowHeaders = pgridwidget.rows.headers.map(function(headerRow, index) {
            return React.createElement(PivotRow, {
              key: index,
              row: headerRow,
              axetype: axe.Type.ROWS,
              layoutInfos: layoutInfos,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          return React.createElement(
            'div', {
              className: 'inner-table-container' + cntrClass,
              onWheel: this.props.pivotTableComp.onWheel
            },
            React.createElement(
              'table', {
                className: 'inner-table'
              },
              React.createElement('colgroup', {
                ref: 'colgroup'
              }),
              React.createElement(
                'tbody',
                null,
                rowHeaders
              )
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.PivotRow.jsx": 102,
      "react": "react",
      "react-dom": "react-dom"
    }],
    108: [function(_dereq_, module, exports) {

      var ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        domUtils = _dereq_('../orb.utils.dom');

      var SizingManager = module.exports = {
        synchronizeWidths: function synchronizeWidths(pivotComp) {
          if (pivotComp.pgridwidget.pgrid.config.chartMode.enabled) {
            return SizingManager.synchronizePivotChartWidths(pivotComp);
          } else {
            SizingManager.synchronizePivotTableWidths(pivotComp);
          }
        },
        synchronizePivotChartWidths: function synchronizePivotChartWidths(pivotComp) {
          var pivotWrapperTable = pivotComp.refs.pivotWrapperTable,
            pivot = new ComponentSizeInfo(pivotComp.refs.pivot),
            topBtns = new ComponentSizeInfo(pivotComp.refs.upperButtons),
            cBtns = new ComponentSizeInfo(pivotComp.refs.colButtons),
            rBtnsTbl = new ComponentSizeInfo(pivotComp.refs.rowButtons),
            chart = new ComponentSizeInfo(pivotComp.refs.chart),
            rBtnsWidth = Math.max(rBtnsTbl.w, 67),
            chartWidth = pivot.w - rBtnsWidth,
            pivotHeight = pivotComp.pgridwidget.pgrid.config.height,
            chartHeight = !pivotHeight ? null : pivotHeight - (topBtns.h + cBtns.h);

          // set pivotWrapperTable columns width to fixed value
          domUtils.updateTableColGroup(pivotWrapperTable, [rBtnsWidth, chartWidth]);

          return {
            width: chartWidth,
            height: chartHeight
          };
        },
        synchronizePivotTableWidths: function synchronizePivotTableWidths(pivotComp) {

          var pivotWrapperTable = pivotComp.refs.pivotWrapperTable,
            pivot = new ComponentSizeInfo(pivotComp.refs.pivot),
            toolbar = new ComponentSizeInfo(pivotComp.refs.toolbar),
            cHeadersTbl = new ComponentSizeInfo(pivotComp.refs.colHeaders, true, 'table'),
            rHeadersTbl = new ComponentSizeInfo(pivotComp.refs.rowHeaders, true, 'table'),
            dataCellsTbl = new ComponentSizeInfo(pivotComp.refs.dataCells, true, 'table'),
            topBtns = new ComponentSizeInfo(pivotComp.refs.upperButtons),
            cBtns = new ComponentSizeInfo(pivotComp.refs.colButtons),
            rBtnsTbl = new ComponentSizeInfo(pivotComp.refs.rowButtons, true),
            hScroll = new ComponentSizeInfo(pivotComp.refs.horizontalScrollBar),
            vScroll = new ComponentSizeInfo(pivotComp.refs.verticalScrollBar),
            dataCellsWidths = dataCellsTbl.getLargestWidths(cHeadersTbl),
            rHeadersWidth = Math.max(rHeadersTbl.w, rBtnsTbl.w, 67),
            dataCellsContainerWidth = Math.min(dataCellsWidths.total + 1, pivot.w - rHeadersWidth - vScroll.w),
            pivotHeight = pivotComp.pgridwidget.pgrid.config.height,
            dataCellsRemHeight = !pivotHeight ? null : pivotHeight - (toolbar ? toolbar.h + 17 : 0) - (topBtns.h + cBtns.h + cHeadersTbl.h + hScroll.h),
            dataCellsTableHeight = !dataCellsRemHeight ? null : Math.ceil(Math.min(dataCellsRemHeight, dataCellsTbl.h));

          // get rowHeaders table width to match with rowButtons table width
          rHeadersTbl.addToWidth(rHeadersWidth - rHeadersTbl.w);

          // Set dataCellsTable cells widths according to the computed dataCellsWidths
          domUtils.updateTableColGroup(dataCellsTbl.node, dataCellsWidths.max);

          // Set colHeadersTable cells widths according to the computed dataCellsWidths
          domUtils.updateTableColGroup(cHeadersTbl.node, dataCellsWidths.max);

          // Set rowHeadersTable cells widths
          domUtils.updateTableColGroup(rHeadersTbl.node, rHeadersTbl.colWidths);

          dataCellsTbl.setStyle('width', dataCellsWidths.total);
          cHeadersTbl.setStyle('width', dataCellsWidths.total);
          rHeadersTbl.setStyle('width', rHeadersWidth);

          // Adjust data cells container and column headers container width
          dataCellsTbl.setParentStyle('width', dataCellsContainerWidth);
          cHeadersTbl.setParentStyle('width', dataCellsContainerWidth);

          if (dataCellsTableHeight) {
            // Adjust data cells container and row headers container height
            dataCellsTbl.setParentStyle('height', dataCellsTableHeight);
            rHeadersTbl.setParentStyle('height', dataCellsTableHeight);
          }

          // set pivotWrapperTable columns width to fixed value
          domUtils.updateTableColGroup(pivotWrapperTable, [rHeadersWidth, dataCellsContainerWidth, vScroll.w, Math.max(pivot.w - (rHeadersWidth + dataCellsContainerWidth + vScroll.w), 0)]);

          pivotComp.refs.horizontalScrollBar.refresh();
          pivotComp.refs.verticalScrollBar.refresh();
        }
      };

      function ComponentSizeInfo(component, isWrapper, childType) {
        var self = this,
          node = ReactDOM.findDOMNode(component),
          size;

        this.node = isWrapper ? node.children[0] : node;

        size = domUtils.getSize(this.node);
        this.w = size.width;
        this.h = size.height;

        this.setStyle = function(styleProp, value) {
          self.node.style[styleProp] = value + 'px';
        };

        this.setParentStyle = function(styleProp, value) {
          self.node.parentNode.style[styleProp] = value + 'px';
        };

        this.getLargestWidths = function(otherCompInfo) {
          var result = {
            max: [],
            total: 0
          };

          // get the array of max widths between dataCellsTable and colHeadersTable
          for (var i = 0; i < self.colWidths.length; i++) {
            result.max.push(Math.max(self.colWidths[i], otherCompInfo.colWidths[i]));
            result.total += result.max[i];
          }

          return result;
        };

        this.addToWidth = function(value) {
          if (value > 0) {
            self.w += value;
            self.colWidths[self.colWidths.length - 1] += value;
          }
        };

        if (childType === 'table') {
          // get array of column widths
          getAllColumnsWidth(this);
        }
      }

      function getAllColumnsWidth(tblObject) {
        if (tblObject && tblObject.node) {

          var tbl = tblObject.node;
          var colWidths = [];

          for (var rowIndex = 0; rowIndex < tbl.rows.length; rowIndex++) {
            // current row
            var currRow = tbl.rows[rowIndex];
            // reset colWidths index
            var arrayIndex = 0;
            var currWidth = null;

            // get the width of each cell within current row
            for (var cellIndex = 0; cellIndex < currRow.cells.length; cellIndex++) {
              // current cell
              var currCell = currRow.cells[cellIndex];

              if (currCell.__orb._visible) {
                // cell width
                //var cellwidth = Math.ceil(domUtils.getSize(currCell.children[0]).width/currCell.colSpan);
                var cellwidth = Math.ceil(currCell.__orb._textWidth / currCell.__orb._colSpan + currCell.__orb._paddingLeft + currCell.__orb._paddingRight + currCell.__orb._borderLeftWidth + currCell.__orb._borderRightWidth);
                // whether current cell spans vertically to the last row
                var rowsSpan = currCell.__orb._rowSpan > 1 && currCell.__orb._rowSpan >= tbl.rows.length - rowIndex;

                // if current cell spans over more than one column, add its width (its) 'colSpan' number of times
                for (var cspan = 0; cspan < currCell.__orb._colSpan; cspan++) {
                  // If cell span over more than 1 row: insert its width into colWidths at arrayIndex
                  // Else: either expand colWidths if necessary or replace the width if its smaller than current cell width

                  currWidth = colWidths[arrayIndex];
                  // skip inhibited widths (width that belongs to an upper cell than spans vertically to current row)
                  while (currWidth && currWidth.inhibit > 0) {
                    currWidth.inhibit--;
                    arrayIndex++;
                    currWidth = colWidths[arrayIndex];
                  }

                  if (colWidths.length - 1 < arrayIndex) {
                    colWidths.push({
                      width: cellwidth
                    });
                  } else if (cellwidth > colWidths[arrayIndex].width) {
                    colWidths[arrayIndex].width = cellwidth;
                  }

                  colWidths[arrayIndex].inhibit = currCell.__orb._rowSpan - 1;

                  // increment colWidths index
                  arrayIndex++;
                }
              }
            }

            // decrement inhibited state of all widths unsed in colWidths (not reached by current row cells)
            currWidth = colWidths[arrayIndex];
            while (currWidth) {
              if (currWidth.inhibit > 0) {
                currWidth.inhibit--;
              }
              arrayIndex++;
              currWidth = colWidths[arrayIndex];
            }
          }

          // set colWidths to the tblObject
          tblObject.w = 0;
          tblObject.colWidths = colWidths.map(function(item, index) {
            tblObject.w += item.width;
            return item.width;
          });
        }
      }

      function setTableWidths(tblObject, colWidths) {
        if (tblObject && tblObject.node) {

          // reset table width
          (tblObject.size = tblObject.size || {}).width = 0;

          var tbl = tblObject.node;

          // for each row, set its cells width
          for (var rowIndex = 0; rowIndex < tbl.rows.length; rowIndex++) {

            // current row
            var currRow = tbl.rows[rowIndex];
            // index in colWidths
            var arrayIndex = 0;
            var currWidth = null;

            // set width of each cell
            for (var cellIndex = 0; cellIndex < currRow.cells.length; cellIndex++) {

              // current cell
              var currCell = currRow.cells[cellIndex];
              if (currCell.__orb._visible) {
                // cell width
                var newCellWidth = 0;
                // whether current cell spans vertically more than 1 row
                var rowsSpan = currCell.__orb._rowSpan > 1 && rowIndex < tbl.rows.length - 1;

                // current cell width is the sum of (its) "colspan" items in colWidths starting at 'arrayIndex'
                // 'arrayIndex' should be incremented by an amount equal to current cell 'colspan' but should also skip 'inhibited' cells
                for (var cspan = 0; cspan < currCell.__orb._colSpan; cspan++) {
                  currWidth = colWidths[arrayIndex];
                  // skip inhibited widths (width that belongs to an upper cell than spans vertically to current row)
                  while (currWidth && currWidth.inhibit > 0) {
                    currWidth.inhibit--;
                    arrayIndex++;
                    currWidth = colWidths[arrayIndex];
                  }

                  if (currWidth) {
                    // add width of cells participating in the span
                    newCellWidth += currWidth.width;
                    // if current cell spans vertically more than 1 row, mark its width as inhibited for all cells participating in this span
                    if (rowsSpan) {
                      currWidth.inhibit = currCell.__orb._rowSpan - 1;
                    }

                    // advance colWidths index
                    arrayIndex++;
                  }
                }

                currCell.children[0].style.width = newCellWidth + 'px';

                // set table width (only in first iteration)
                if (rowIndex === 0) {
                  var outerCellWidth = 0;
                  if (currCell.__orb) {
                    outerCellWidth = currCell.__orb._colSpan * Math.ceil(currCell.__orb._paddingLeft + currCell.__orb._paddingRight + currCell.__orb._borderLeftWidth + currCell.__orb._borderRightWidth);
                  }
                  tblObject.w += newCellWidth + outerCellWidth;
                }
              }
            }

            // decrement inhibited state of all widths unsed in colWidths (not reached by current row cells)
            currWidth = colWidths[arrayIndex];
            while (currWidth) {
              if (currWidth.inhibit > 0) {
                currWidth.inhibit--;
              }
              arrayIndex++;
              currWidth = colWidths[arrayIndex];
            }
          }
        }
      }

    }, {
      "../orb.utils.dom": 88,
      "react-dom": "react-dom"
    }],
    109: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        PivotButton = _dereq_('./orb.react.PivotButton.jsx'),
        DropTarget = _dereq_('./orb.react.DropTarget.jsx'),
        axe = _dereq_('../orb.axe');

      module.exports = React.createClass({
        displayName: 'exports',

        render: function render() {
          var self = this;
          var config = this.props.pivotTableComp.pgridwidget.pgrid.config;

          var fieldsDropTarget;
          if (config.canMoveFields) {
            var fieldsButtons = config.availablefields().map(function(field, index) {
              return React.createElement(PivotButton, {
                key: field.name,
                field: field,
                axetype: null,
                position: index,
                pivotTableComp: self.props.pivotTableComp
              });
            });
            fieldsDropTarget = React.createElement(
              'tr',
              null,
              React.createElement(
                'td', {
                  className: 'flds-grp-cap av-flds text-muted'
                },
                React.createElement(
                  'div',
                  null,
                  'Fields'
                )
              ),
              React.createElement(
                'td', {
                  className: 'av-flds'
                },
                React.createElement(DropTarget, {
                  buttons: fieldsButtons,
                  axetype: null
                })
              )
            );
          } else {
            fieldsDropTarget = null;
          }

          var dataButtons = config.dataFields.map(function(field, index) {
            return React.createElement(PivotButton, {
              key: field.name,
              field: field,
              axetype: axe.Type.DATA,
              position: index,
              pivotTableComp: self.props.pivotTableComp
            });
          });

          var dataDropTarget = React.createElement(
            'tr',
            null,
            React.createElement(
              'td', {
                className: 'flds-grp-cap text-muted'
              },
              React.createElement(
                'div',
                null,
                'Data'
              )
            ),
            React.createElement(
              'td', {
                className: 'empty'
              },
              React.createElement(DropTarget, {
                buttons: dataButtons,
                axetype: axe.Type.DATA
              })
            )
          );

          return React.createElement(
            'table', {
              className: 'inner-table upper-buttons'
            },
            React.createElement(
              'tbody',
              null,
              fieldsDropTarget,
              dataDropTarget
            )
          );
        }
      });

    }, {
      "../orb.axe": 72,
      "./orb.react.DropTarget.jsx": 94,
      "./orb.react.PivotButton.jsx": 99,
      "react": "react"
    }],
    110: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        DragManager = _dereq_('./orb.react.DragManager.jsx'),
        SizingManager = _dereq_('./orb.react.PivotTable.SizingManager.jsx'),
        Toolbar = _dereq_('./orb.react.Toolbar.jsx'),
        UpperButtons = _dereq_('./orb.react.PivotTable.UpperButtons.jsx'),
        ColumnButtons = _dereq_('./orb.react.PivotTable.ColumnButtons.jsx'),
        RowButtons = _dereq_('./orb.react.PivotTable.RowButtons.jsx'),
        RowHeaders = _dereq_('./orb.react.PivotTable.RowHeaders.jsx'),
        ColumnHeaders = _dereq_('./orb.react.PivotTable.ColumnHeaders.jsx'),
        DataCells = _dereq_('./orb.react.PivotTable.DataCells.jsx'),
        ScrollBars = _dereq_('./orb.react.ScrollBars.jsx'),
        HorizontalScrollBar = ScrollBars.HorizontalScrollBar,
        VerticalScrollBar = ScrollBars.VerticalScrollBar,
        utils = _dereq_('../orb.utils'),
        domUtils = _dereq_('../orb.utils.dom'),
        pivotId = 1,
        themeChangeCallbacks = {};

      module.exports = React.createClass({
        displayName: 'exports',

        id: pivotId++,
        pgrid: null,
        pgridwidget: null,
        fontStyle: null,
        getInitialState: function getInitialState() {
          DragManager.init(this);

          themeChangeCallbacks[this.id] = [];
          this.registerThemeChanged(this.updateClasses);

          this.pgridwidget = this.props.pgridwidget;
          this.pgrid = this.pgridwidget.pgrid;
          return {};
        },
        sort: function sort(axetype, field) {
          this.pgridwidget.sort(axetype, field);
        },
        moveButton: function moveButton(button, newAxeType, position) {
          this.pgridwidget.moveField(button.props.field.name, button.props.axetype, newAxeType, position);
        },
        toggleSubtotals: function toggleSubtotals(axetype) {
          this.pgridwidget.toggleSubtotals(axetype);
        },
        toggleGrandtotal: function toggleGrandtotal(axetype) {
          this.pgridwidget.toggleGrandtotal(axetype);
        },
        applyFilter: function applyFilter(fieldname, operator, term, staticValue, excludeStatic) {
          this.pgridwidget.applyFilter(fieldname, operator, term, staticValue, excludeStatic);
        },
        registerThemeChanged: function registerThemeChanged(compCallback) {
          if (compCallback) {
            themeChangeCallbacks[this.id].push(compCallback);
          }
        },
        unregisterThemeChanged: function unregisterThemeChanged(compCallback) {
          var i;
          if (compCallback && (i = themeChangeCallbacks[this.id].indexOf(compCallback)) >= 0) {
            themeChangeCallbacks[this.id].splice(i, 1);
          }
        },
        changeTheme: function changeTheme(newTheme) {
          if (this.pgridwidget.pgrid.config.setTheme(newTheme)) {
            // notify self/sub-components of the theme change
            for (var i = 0; i < themeChangeCallbacks[this.id].length; i++) {
              themeChangeCallbacks[this.id][i]();
            }
          }
        },
        updateClasses: function updateClasses() {
          var thisnode = ReactDOM.findDOMNode(this);
          var classes = this.pgridwidget.pgrid.config.theme.getPivotClasses();
          thisnode.className = classes.container;
          thisnode.children[1].className = classes.table;
        },
        componentDidUpdate: function componentDidUpdate() {
          this.synchronizeWidths();
        },
        componentDidMount: function componentDidMount() {
          var fontInfos = domUtils.getStyle(ReactDOM.findDOMNode(this), ['font-family', 'font-size'], true);
          this.fontStyle = {
            fontFamily: fontInfos[0],
            fontSize: fontInfos[1]
          };

          var dataCellsNode = ReactDOM.findDOMNode(this.refs.dataCells);
          var dataCellsTableNode = dataCellsNode.children[0];
          var colHeadersNode = ReactDOM.findDOMNode(this.refs.colHeaders);
          var rowHeadersNode = ReactDOM.findDOMNode(this.refs.rowHeaders);

          this.refs.horizontalScrollBar.setScrollClient(dataCellsNode, function(scrollPercent) {
            var scrollAmount = Math.ceil(scrollPercent * (domUtils.getSize(dataCellsTableNode).width - domUtils.getSize(dataCellsNode).width));
            colHeadersNode.scrollLeft = scrollAmount;
            dataCellsNode.scrollLeft = scrollAmount;
          });

          this.refs.verticalScrollBar.setScrollClient(dataCellsNode, function(scrollPercent) {
            var scrollAmount = Math.ceil(scrollPercent * (domUtils.getSize(dataCellsTableNode).height - domUtils.getSize(dataCellsNode).height));
            rowHeadersNode.scrollTop = scrollAmount;
            dataCellsNode.scrollTop = scrollAmount;
          });

          this.synchronizeWidths();
        },
        onWheel: function onWheel(e) {
          var elem;
          var scrollbar;
          var amount;

          if (e.currentTarget == (elem = ReactDOM.findDOMNode(this.refs.colHeaders))) {
            scrollbar = this.refs.horizontalScrollBar;
            amount = e.deltaX || e.deltaY;
          } else if (e.currentTarget == (elem = ReactDOM.findDOMNode(this.refs.rowHeaders)) || e.currentTarget == (elem = ReactDOM.findDOMNode(this.refs.dataCells))) {
            scrollbar = this.refs.verticalScrollBar;
            amount = e.deltaY;
          }

          if (scrollbar && scrollbar.scroll(amount, e.deltaMode)) {
            utils.stopPropagation(e);
            utils.preventDefault(e);
          }
        },
        synchronizeWidths: function synchronizeWidths() {
          SizingManager.synchronizeWidths(this);
          this.refs.horizontalScrollBar.refresh();
          this.refs.verticalScrollBar.refresh();
        },
        render: function render() {

          var self = this;

          var config = this.pgridwidget.pgrid.config;
          var classes = config.theme.getPivotClasses();

          var tblStyle = {};
          if (config.width) {
            tblStyle.width = config.width;
          }
          if (config.height) {
            tblStyle.height = config.height;
          }

          return React.createElement(
            'div', {
              className: classes.container,
              style: tblStyle,
              ref: 'pivot'
            },
            config.toolbar && config.toolbar.visible ? React.createElement(
              'div', {
                ref: 'toolbar',
                className: 'orb-toolbar'
              },
              React.createElement(Toolbar, {
                pivotTableComp: self
              })
            ) : null,
            React.createElement(
              'table', {
                id: 'tbl-' + self.id,
                ref: 'pivotWrapperTable',
                className: classes.table,
                style: {
                  tableLayout: 'fixed'
                }
              },
              React.createElement(
                'colgroup',
                null,
                React.createElement('col', {
                  ref: 'column1'
                }),
                React.createElement('col', {
                  ref: 'column2'
                }),
                React.createElement('col', {
                  ref: 'column3'
                }),
                React.createElement('col', {
                  ref: 'column4'
                })
              ),
              React.createElement(
                'tbody',
                null,
                React.createElement(
                  'tr', {
                    ref: 'upperButtons'
                  },
                  React.createElement(
                    'td', {
                      colSpan: '4'
                    },
                    React.createElement(UpperButtons, {
                      pivotTableComp: self
                    })
                  )
                ),
                React.createElement(
                  'tr', {
                    ref: 'colButtons'
                  },
                  React.createElement('td', null),
                  React.createElement(
                    'td', {
                      style: {
                        padding: '11px 4px !important'
                      }
                    },
                    React.createElement(ColumnButtons, {
                      pivotTableComp: self
                    })
                  ),
                  React.createElement('td', {
                    colSpan: '2'
                  })
                ),
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'td', {
                      style: {
                        position: 'relative'
                      }
                    },
                    React.createElement(RowButtons, {
                      pivotTableComp: self,
                      ref: 'rowButtons'
                    })
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(ColumnHeaders, {
                      pivotTableComp: self,
                      ref: 'colHeaders'
                    })
                  ),
                  React.createElement('td', {
                    colSpan: '2'
                  })
                ),
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'td',
                    null,
                    React.createElement(RowHeaders, {
                      pivotTableComp: self,
                      ref: 'rowHeaders'
                    })
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(DataCells, {
                      pivotTableComp: self,
                      ref: 'dataCells'
                    })
                  ),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(VerticalScrollBar, {
                      pivotTableComp: self,
                      ref: 'verticalScrollBar'
                    })
                  ),
                  React.createElement('td', null)
                ),
                React.createElement(
                  'tr',
                  null,
                  React.createElement('td', null),
                  React.createElement(
                    'td',
                    null,
                    React.createElement(HorizontalScrollBar, {
                      pivotTableComp: self,
                      ref: 'horizontalScrollBar'
                    })
                  ),
                  React.createElement('td', {
                    colSpan: '2'
                  })
                )
              )
            ),
            React.createElement('div', {
              className: 'orb-overlay orb-overlay-hidden',
              id: 'drilldialog' + self.id
            })
          );
        }
      });

    }, {
      "../orb.utils": 89,
      "../orb.utils.dom": 88,
      "./orb.react.DragManager.jsx": 92,
      "./orb.react.PivotTable.ColumnButtons.jsx": 103,
      "./orb.react.PivotTable.ColumnHeaders.jsx": 104,
      "./orb.react.PivotTable.DataCells.jsx": 105,
      "./orb.react.PivotTable.RowButtons.jsx": 106,
      "./orb.react.PivotTable.RowHeaders.jsx": 107,
      "./orb.react.PivotTable.SizingManager.jsx": 108,
      "./orb.react.PivotTable.UpperButtons.jsx": 109,
      "./orb.react.ScrollBars.jsx": 111,
      "./orb.react.Toolbar.jsx": 112,
      "react": "react",
      "react-dom": "react-dom"
    }],
    111: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        ReactDOM = typeof window === 'undefined' ? _dereq_('react-dom') : window.ReactDOM,
        utils = _dereq_('../orb.utils'),
        domUtils = _dereq_('../orb.utils.dom');

      var scrollBarMixin = {
        scrollEvent: null,
        scrollClient: null,
        getInitialState: function getInitialState() {
          // initial state, all zero.
          return {
            size: 16,
            mousedown: false,
            thumbOffset: 0
          };
        },
        componentDidMount: function componentDidMount() {
          this.scrollEvent = new ScrollEvent(this);
        },
        componentDidUpdate: function componentDidUpdate() {
          if (!this.state.mousedown) {
            // mouse not down, don't care about mouse up/move events.
            utils.removeEventListener(document, 'mousemove', this.onMouseMove);
            utils.removeEventListener(document, 'mouseup', this.onMouseUp);
          } else if (this.state.mousedown) {
            // mouse down, interested by mouse up/move events.
            utils.addEventListener(document, 'mousemove', this.onMouseMove);
            utils.addEventListener(document, 'mouseup', this.onMouseUp);
          }
        },
        componentWillUnmount: function componentWillUnmount() {
          utils.removeEventListener(document, 'mousemove', this.onMouseMove);
          utils.removeEventListener(document, 'mouseup', this.onMouseUp);
        },
        onMouseDown: function onMouseDown(e) {
          // drag with left mouse button
          if (e.button !== 0) return;

          var thumbElem = this.refs.scrollThumb;
          var thumbposInParent = domUtils.getParentOffset(thumbElem);
          var mousePageXY = utils.getMousePageXY(e);

          domUtils.addClass(thumbElem, 'orb-scrollthumb-hover');

          // inform mousedown, save start pos
          this.setState({
            mousedown: true,
            mouseoffset: mousePageXY[this.mousePosProp],
            thumbOffset: thumbposInParent[this.posProp]
          });

          // prevent event bubbling (to prevent text selection while dragging for example)
          utils.stopPropagation(e);
          utils.preventDefault(e);
        },
        onMouseUp: function onMouseUp() {

          if (this.state.mousedown) {
            var thumbElem = this.refs.scrollThumb;
            domUtils.removeClass(thumbElem, 'orb-scrollthumb-hover');
          }

          this.setState({
            mousedown: false
          });
        },
        onMouseMove: function onMouseMove(e) {

          // if the mouse is not down while moving, return (no drag)
          if (!this.state.mousedown) return;

          utils.stopPropagation(e);
          utils.preventDefault(e);

          var mousePageXY = utils.getMousePageXY(e);
          var amount = mousePageXY[this.mousePosProp] - this.state.mouseoffset;
          this.state.mouseoffset = mousePageXY[this.mousePosProp];

          this.scroll(amount);
        },
        getScrollSize: function getScrollSize() {
          if (this.scrollClient != null) {
            return domUtils.getSize(this.scrollClient)[this.sizeProp];
          } else {
            return domUtils.getSize(ReactDOM.findDOMNode(this))[this.sizeProp];
          }
        },
        setScrollClient: function setScrollClient(scrollClient, scrollCallback) {
          this.scrollClient = scrollClient;
          this.scrollEvent.callback = scrollCallback;
        },
        getScrollPercent: function getScrollPercent() {
          var maxOffset = this.getScrollSize() - this.state.size;
          return maxOffset <= 0 ? 0 : this.state.thumbOffset / maxOffset;
        },
        refresh: function refresh() {
          if (this.scrollClient) {
            var scrolledElement = this.scrollClient.children[0];

            var clientSize = domUtils.getSize(this.scrollClient);
            var elementSize = domUtils.getSize(scrolledElement);

            var scrollBarContainerSize = this.getScrollSize();
            var newSize = clientSize[this.sizeProp] >= elementSize[this.sizeProp] ? 0 : clientSize[this.sizeProp] / elementSize[this.sizeProp] * scrollBarContainerSize;

            this.setState({
              containerSize: scrollBarContainerSize,
              size: newSize,
              thumbOffset: Math.min(this.state.thumbOffset, scrollBarContainerSize - newSize)
            }, this.scrollEvent.raise);
          }
        },
        scroll: function scroll(amount, mode) {
          if (this.state.size > 0) {
            if (mode == 1) amount *= 8;

            var maxOffset = this.getScrollSize() - this.state.size;
            var newOffset = this.state.thumbOffset + amount;
            if (newOffset < 0) newOffset = 0;
            if (newOffset > maxOffset) newOffset = maxOffset;

            if (this.state.thumbOffset != newOffset) {
              this.setState({
                thumbOffset: newOffset
              }, this.scrollEvent.raise);
              return true;
            }
          }
          return false;
        },
        onWheel: function onWheel(e) {
          this.scroll(e.deltaY, e.deltaMode);
          utils.stopPropagation(e);
          utils.preventDefault(e);
        },
        render: function render() {
          var self = this;

          var thumbStyle = {
            padding: 0
          };
          thumbStyle[this.sizeProp] = this.state.size;
          thumbStyle[this.offsetCssProp] = this.state.thumbOffset;

          var thisStyle = {};
          thisStyle[this.sizeProp] = this.state.containerSize;

          var thumbClass = "orb-scrollthumb " + this.props.pivotTableComp.pgrid.config.theme.getButtonClasses().scrollBar;

          var scrollThumb = this.state.size <= 0 ? null : React.createElement('div', {
            className: thumbClass,
            style: thumbStyle,
            ref: 'scrollThumb',
            onMouseDown: this.onMouseDown
          });

          return React.createElement(
            'div', {
              className: this.cssClass,
              style: thisStyle,
              onWheel: this.onWheel
            },
            scrollThumb
          );
        }
      };

      function ScrollEvent(scrollBarComp) {
        var self = this;
        this.scrollBarComp = scrollBarComp;
        this.callback = null;
        this.raise = function() {
          if (self.callback) {
            self.callback(self.scrollBarComp.getScrollPercent());
          }
        };
      }

      module.exports.HorizontalScrollBar = React.createClass({
        displayName: 'HorizontalScrollBar',

        mixins: [scrollBarMixin],
        posProp: 'x',
        mousePosProp: 'pageX',
        sizeProp: 'width',
        offsetCssProp: 'left',
        cssClass: 'orb-h-scrollbar'
      });

      module.exports.VerticalScrollBar = React.createClass({
        displayName: 'VerticalScrollBar',

        mixins: [scrollBarMixin],
        posProp: 'y',
        mousePosProp: 'pageY',
        sizeProp: 'height',
        offsetCssProp: 'top',
        cssClass: 'orb-v-scrollbar'
      });

    }, {
      "../orb.utils": 89,
      "../orb.utils.dom": 88,
      "react": "react",
      "react-dom": "react-dom"
    }],
    112: [function(_dereq_, module, exports) {

      var React = typeof window === 'undefined' ? _dereq_('react') : window.React,
        axe = _dereq_('../orb.axe'),
        domUtils = _dereq_('../orb.utils.dom');

      module.exports = React.createClass({
        displayName: 'exports',

        _toInit: [],
        componentDidMount: function componentDidMount() {
          for (var i = 0; i < this._toInit.length; i++) {
            var btn = this._toInit[i];
            btn.init(this.props.pivotTableComp, this.refs[btn.ref]);
          }
        },
        componentDidUpdate: function componentDidUpdate() {
          for (var i = 0; i < this._toInit.length; i++) {
            var btn = this._toInit[i];
            btn.init(this.props.pivotTableComp, this.refs[btn.ref]);
          }
        },
        createCallback: function createCallback(action) {
          if (action != null) {
            var pgridComponent = this.props.pivotTableComp;
            return function(e) {
              action(pgridComponent, e.target || e.srcElement);
            };
          }
          return null;
        },
        render: function render() {

          var config = this.props.pivotTableComp.pgridwidget.pgrid.config;

          if (config.toolbar && config.toolbar.visible) {

            var configButtons = config.toolbar.buttons ? defaultToolbarConfig.buttons.concat(config.toolbar.buttons) : defaultToolbarConfig.buttons;

            var buttons = [];
            for (var i = 0; i < configButtons.length; i++) {
              var btnConfig = configButtons[i];
              var refName = 'btn' + i;

              if (btnConfig.type == 'separator') {
                buttons.push(React.createElement('div', {
                  key: i,
                  className: 'orb-tlbr-sep'
                }));
              } else if (btnConfig.type == 'label') {
                buttons.push(React.createElement(
                  'div', {
                    key: i,
                    className: 'orb-tlbr-lbl'
                  },
                  btnConfig.text
                ));
              } else {
                buttons.push(React.createElement('div', {
                  key: i,
                  className: 'orb-tlbr-btn ' + btnConfig.cssClass,
                  title: btnConfig.tooltip,
                  ref: refName,
                  onClick: this.createCallback(btnConfig.action)
                }));
              }
              if (btnConfig.init) {
                this._toInit.push({
                  ref: refName,
                  init: btnConfig.init
                });
              }
            }

            return React.createElement(
              'div',
              null,
              buttons
            );
          }

          return React.createElement('div', null);
        }
      });

      var excelExport = _dereq_('../orb.export.excel');

      var defaultToolbarConfig = {
        exportToExcel: function exportToExcel(pgridComponent, button) {
          var a = document.createElement('a');
          a.download = "orbpivotgrid.xls";
          a.href = excelExport(pgridComponent.props.pgridwidget);
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
        expandAllRows: function expandAllRows(pgridComponent, button) {
          pgridComponent.pgridwidget.toggleFieldExpansion(axe.Type.ROWS, null, true);
        },
        collapseAllRows: function collapseAllRows(pgridComponent, button) {
          pgridComponent.pgridwidget.toggleFieldExpansion(axe.Type.ROWS, null, false);
        },
        expandAllColumns: function expandAllColumns(pgridComponent, button) {
          pgridComponent.pgridwidget.toggleFieldExpansion(axe.Type.COLUMNS, null, true);
        },
        collapseAllColumns: function collapseAllColumns(pgridComponent, button) {
          pgridComponent.pgridwidget.toggleFieldExpansion(axe.Type.COLUMNS, null, false);
        },
        updateSubtotalsButton: function updateSubtotalsButton(axetype, pgridComponent, button) {
          var subTotalsState = pgridComponent.pgridwidget.areSubtotalsVisible(axetype);
          button.style.display = subTotalsState === null ? 'none' : '';

          var classToAdd = '';
          var classToRemove = '';
          if (subTotalsState) {
            classToAdd = 'subtotals-visible';
            classToRemove = 'subtotals-hidden';
          } else {
            classToAdd = 'subtotals-hidden';
            classToRemove = 'subtotals-visible';
          }

          domUtils.removeClass(button, classToRemove);
          domUtils.addClass(button, classToAdd);
        },
        initSubtotals: function initSubtotals(axetype) {
          var self = this;
          return function(pgridComponent, button) {
            self.updateSubtotalsButton(axetype, pgridComponent, button);
          };
        },
        toggleSubtotals: function toggleSubtotals(axetype) {
          var self = this;
          return function(pgridComponent, button) {
            pgridComponent.toggleSubtotals(axetype);
            self.updateSubtotalsButton(axetype, pgridComponent, button);
          };
        },
        updateGrandtotalButton: function updateGrandtotalButton(axetype, pgridComponent, button) {
          var subTotalsState = pgridComponent.pgridwidget.isGrandtotalVisible(axetype);
          button.style.display = subTotalsState === null ? 'none' : '';

          var classToAdd = '';
          var classToRemove = '';
          if (subTotalsState) {
            classToAdd = 'grndtotal-visible';
            classToRemove = 'grndtotal-hidden';
          } else {
            classToAdd = 'grndtotal-hidden';
            classToRemove = 'grndtotal-visible';
          }

          domUtils.removeClass(button, classToRemove);
          domUtils.addClass(button, classToAdd);
        },
        initGrandtotal: function initGrandtotal(axetype) {
          var self = this;
          return function(pgridComponent, button) {
            self.updateGrandtotalButton(axetype, pgridComponent, button);
          };
        },
        toggleGrandtotal: function toggleGrandtotal(axetype) {
          var self = this;
          return function(pgridComponent, button) {
            pgridComponent.toggleGrandtotal(axetype);
            self.updateGrandtotalButton(axetype, pgridComponent, button);
          };
        }
      };

      defaultToolbarConfig.buttons = [{
        type: 'label',
        text: 'Rows:'
      }, {
        type: 'button',
        tooltip: 'Expand all rows',
        cssClass: 'expand-all',
        action: defaultToolbarConfig.expandAllRows
      }, {
        type: 'button',
        tooltip: 'Collapse all rows',
        cssClass: 'collapse-all',
        action: defaultToolbarConfig.collapseAllRows
      }, {
        type: 'button',
        tooltip: 'Toggle rows sub totals',
        init: defaultToolbarConfig.initSubtotals(axe.Type.ROWS),
        action: defaultToolbarConfig.toggleSubtotals(axe.Type.ROWS)
      }, {
        type: 'button',
        tooltip: 'Toggle rows grand total',
        init: defaultToolbarConfig.initGrandtotal(axe.Type.ROWS),
        action: defaultToolbarConfig.toggleGrandtotal(axe.Type.ROWS)
      }, {
        type: 'separator'
      }, {
        type: 'label',
        text: 'Columns:'
      }, {
        type: 'button',
        tooltip: 'Expand all columns',
        cssClass: 'expand-all',
        action: defaultToolbarConfig.expandAllColumns
      }, {
        type: 'button',
        tooltip: 'Collapse all columns',
        cssClass: 'collapse-all',
        action: defaultToolbarConfig.collapseAllColumns
      }, {
        type: 'button',
        tooltip: 'Toggle columns sub totals',
        init: defaultToolbarConfig.initSubtotals(axe.Type.COLUMNS),
        action: defaultToolbarConfig.toggleSubtotals(axe.Type.COLUMNS)
      }, {
        type: 'button',
        tooltip: 'Toggle columns grand total',
        init: defaultToolbarConfig.initGrandtotal(axe.Type.COLUMNS),
        action: defaultToolbarConfig.toggleGrandtotal(axe.Type.COLUMNS)
      }, {
        type: 'separator'
      }, {
        type: 'label',
        text: 'Export:'
      }, {
        type: 'button',
        tooltip: 'Export to Excel',
        cssClass: 'export-xls',
        action: defaultToolbarConfig.exportToExcel
      }];

    }, {
      "../orb.axe": 72,
      "../orb.export.excel": 75,
      "../orb.utils.dom": 88,
      "react": "react"
    }]
  }, {}, [77])(77)
});