/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.0.4 | Mon Jul 11 2022
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("tui-date-picker")))
    : "function" == typeof define && define.amd
    ? define(["tui-date-picker"], t)
    : "object" == typeof exports
    ? (exports.tui = t(require("tui-date-picker")))
    : ((e.tui = e.tui || {}), (e.tui.Calendar = t(e.tui.DatePicker)));
})(this, function (e) {
  return (function () {
    var t = {
        7111: function (e, t, n) {
          var r = n(6733),
            o = n(9821),
            i = TypeError;
          e.exports = function (e) {
            if (r(e)) return e;
            throw i(o(e) + " is not a function");
          };
        },
        8505: function (e, t, n) {
          var r = n(6733),
            o = String,
            i = TypeError;
          e.exports = function (e) {
            if ("object" == typeof e || r(e)) return e;
            throw i("Can't set " + o(e) + " as a prototype");
          };
        },
        9736: function (e, t, n) {
          var r = n(95),
            o = n(2391),
            i = n(1787).f,
            a = r("unscopables"),
            l = Array.prototype;
          null == l[a] && i(l, a, { configurable: !0, value: o(null) }),
            (e.exports = function (e) {
              l[a][e] = !0;
            });
        },
        6637: function (e, t, n) {
          "use strict";
          var r = n(966).charAt;
          e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1);
          };
        },
        1176: function (e, t, n) {
          var r = n(5052),
            o = String,
            i = TypeError;
          e.exports = function (e) {
            if (r(e)) return e;
            throw i(o(e) + " is not an object");
          };
        },
        9540: function (e, t, n) {
          var r = n(905),
            o = n(3231),
            i = n(9646),
            a = function (e) {
              return function (t, n, a) {
                var l,
                  c = r(t),
                  s = i(c),
                  u = o(a, s);
                if (e && n != n) {
                  for (; s > u; ) if ((l = c[u++]) != l) return !0;
                } else
                  for (; s > u; u++)
                    if ((e || u in c) && c[u] === n) return e || u || 0;
                return !e && -1;
              };
            };
          e.exports = { includes: a(!0), indexOf: a(!1) };
        },
        7079: function (e, t, n) {
          var r = n(5968),
            o = r({}.toString),
            i = r("".slice);
          e.exports = function (e) {
            return i(o(e), 8, -1);
          };
        },
        1589: function (e, t, n) {
          var r = n(1601),
            o = n(6733),
            i = n(7079),
            a = n(95)("toStringTag"),
            l = Object,
            c =
              "Arguments" ==
              i(
                (function () {
                  return arguments;
                })()
              );
          e.exports = r
            ? i
            : function (e) {
                var t, n, r;
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (n = (function (e, t) {
                      try {
                        return e[t];
                      } catch (e) {}
                    })((t = l(e)), a))
                  ? n
                  : c
                  ? i(t)
                  : "Object" == (r = i(t)) && o(t.callee)
                  ? "Arguments"
                  : r;
              };
        },
        1590: function (e, t, n) {
          var r = n(5968),
            o = Error,
            i = r("".replace),
            a = String(o("zxcasd").stack),
            l = /\n\s*at [^:]*:[^\n]*/,
            c = l.test(a);
          e.exports = function (e, t) {
            if (c && "string" == typeof e && !o.prepareStackTrace)
              for (; t--; ) e = i(e, l, "");
            return e;
          };
        },
        7081: function (e, t, n) {
          var r = n(8270),
            o = n(4826),
            i = n(7933),
            a = n(1787);
          e.exports = function (e, t, n) {
            for (var l = o(t), c = a.f, s = i.f, u = 0; u < l.length; u++) {
              var d = l[u];
              r(e, d) || (n && r(n, d)) || c(e, d, s(t, d));
            }
          };
        },
        7528: function (e, t, n) {
          var r = n(4229);
          e.exports = !r(function () {
            function e() {}
            return (
              (e.prototype.constructor = null),
              Object.getPrototypeOf(new e()) !== e.prototype
            );
          });
        },
        3723: function (e, t, n) {
          "use strict";
          var r = n(693).IteratorPrototype,
            o = n(2391),
            i = n(5358),
            a = n(4555),
            l = n(5495),
            c = function () {
              return this;
            };
          e.exports = function (e, t, n, s) {
            var u = t + " Iterator";
            return (
              (e.prototype = o(r, { next: i(+!s, n) })),
              a(e, u, !1, !0),
              (l[u] = c),
              e
            );
          };
        },
        5762: function (e, t, n) {
          var r = n(7400),
            o = n(1787),
            i = n(5358);
          e.exports = r
            ? function (e, t, n) {
                return o.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                return (e[t] = n), e;
              };
        },
        5358: function (e) {
          e.exports = function (e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t,
            };
          };
        },
        4768: function (e, t, n) {
          var r = n(6733),
            o = n(1787),
            i = n(6039),
            a = n(8400);
          e.exports = function (e, t, n, l) {
            l || (l = {});
            var c = l.enumerable,
              s = void 0 !== l.name ? l.name : t;
            if ((r(n) && i(n, s, l), l.global)) c ? (e[t] = n) : a(t, n);
            else {
              try {
                l.unsafe ? e[t] && (c = !0) : delete e[t];
              } catch (e) {}
              c
                ? (e[t] = n)
                : o.f(e, t, {
                    value: n,
                    enumerable: !1,
                    configurable: !l.nonConfigurable,
                    writable: !l.nonWritable,
                  });
            }
            return e;
          };
        },
        8400: function (e, t, n) {
          var r = n(9859),
            o = Object.defineProperty;
          e.exports = function (e, t) {
            try {
              o(r, e, { value: t, configurable: !0, writable: !0 });
            } catch (n) {
              r[e] = t;
            }
            return t;
          };
        },
        7675: function (e, t, n) {
          "use strict";
          var r = n(3103),
            o = n(266),
            i = n(4231),
            a = n(1805),
            l = n(6733),
            c = n(3723),
            s = n(7567),
            u = n(6540),
            d = n(4555),
            f = n(5762),
            p = n(4768),
            h = n(95),
            m = n(5495),
            g = n(693),
            v = a.PROPER,
            y = a.CONFIGURABLE,
            w = g.IteratorPrototype,
            _ = g.BUGGY_SAFARI_ITERATORS,
            b = h("iterator"),
            x = "keys",
            D = "values",
            k = "entries",
            S = function () {
              return this;
            };
          e.exports = function (e, t, n, a, h, g, C) {
            c(n, t, a);
            var E,
              I,
              M,
              N = function (e) {
                if (e === h && R) return R;
                if (!_ && e in P) return P[e];
                switch (e) {
                  case x:
                  case D:
                  case k:
                    return function () {
                      return new n(this, e);
                    };
                }
                return function () {
                  return new n(this);
                };
              },
              T = t + " Iterator",
              O = !1,
              P = e.prototype,
              A = P[b] || P["@@iterator"] || (h && P[h]),
              R = (!_ && A) || N(h),
              L = ("Array" == t && P.entries) || A;
            if (
              (L &&
                (E = s(L.call(new e()))) !== Object.prototype &&
                E.next &&
                (i || s(E) === w || (u ? u(E, w) : l(E[b]) || p(E, b, S)),
                d(E, T, !0, !0),
                i && (m[T] = S)),
              v &&
                h == D &&
                A &&
                A.name !== D &&
                (!i && y
                  ? f(P, "name", D)
                  : ((O = !0),
                    (R = function () {
                      return o(A, this);
                    }))),
              h)
            )
              if (
                ((I = { values: N(D), keys: g ? R : N(x), entries: N(k) }), C)
              )
                for (M in I) (_ || O || !(M in P)) && p(P, M, I[M]);
              else r({ target: t, proto: !0, forced: _ || O }, I);
            return (
              (i && !C) || P[b] === R || p(P, b, R, { name: h }), (m[t] = R), I
            );
          };
        },
        7400: function (e, t, n) {
          var r = n(4229);
          e.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7;
                },
              })[1]
            );
          });
        },
        2635: function (e, t, n) {
          var r = n(9859),
            o = n(5052),
            i = r.document,
            a = o(i) && o(i.createElement);
          e.exports = function (e) {
            return a ? i.createElement(e) : {};
          };
        },
        5694: function (e) {
          e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          };
        },
        8865: function (e, t, n) {
          var r = n(2635)("span").classList,
            o = r && r.constructor && r.constructor.prototype;
          e.exports = o === Object.prototype ? void 0 : o;
        },
        598: function (e, t, n) {
          var r = n(1333);
          e.exports = r("navigator", "userAgent") || "";
        },
        6358: function (e, t, n) {
          var r,
            o,
            i = n(9859),
            a = n(598),
            l = i.process,
            c = i.Deno,
            s = (l && l.versions) || (c && c.version),
            u = s && s.v8;
          u && (o = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !o &&
              a &&
              (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
              (r = a.match(/Chrome\/(\d+)/)) &&
              (o = +r[1]),
            (e.exports = o);
        },
        3837: function (e) {
          e.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
          ];
        },
        373: function (e, t, n) {
          var r = n(4229),
            o = n(5358);
          e.exports = !r(function () {
            var e = Error("a");
            return (
              !("stack" in e) ||
              (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
            );
          });
        },
        3103: function (e, t, n) {
          var r = n(9859),
            o = n(7933).f,
            i = n(5762),
            a = n(4768),
            l = n(8400),
            c = n(7081),
            s = n(6541);
          e.exports = function (e, t) {
            var n,
              u,
              d,
              f,
              p,
              h = e.target,
              m = e.global,
              g = e.stat;
            if ((n = m ? r : g ? r[h] || l(h, {}) : (r[h] || {}).prototype))
              for (u in t) {
                if (
                  ((f = t[u]),
                  (d = e.dontCallGetSet ? (p = o(n, u)) && p.value : n[u]),
                  !s(m ? u : h + (g ? "." : "#") + u, e.forced) && void 0 !== d)
                ) {
                  if (typeof f == typeof d) continue;
                  c(f, d);
                }
                (e.sham || (d && d.sham)) && i(f, "sham", !0), a(n, u, f, e);
              }
          };
        },
        4229: function (e) {
          e.exports = function (e) {
            try {
              return !!e();
            } catch (e) {
              return !0;
            }
          };
        },
        4954: function (e, t, n) {
          "use strict";
          n(7950);
          var r = n(5968),
            o = n(4768),
            i = n(3466),
            a = n(4229),
            l = n(95),
            c = n(5762),
            s = l("species"),
            u = RegExp.prototype;
          e.exports = function (e, t, n, d) {
            var f = l(e),
              p = !a(function () {
                var t = {};
                return (
                  (t[f] = function () {
                    return 7;
                  }),
                  7 != ""[e](t)
                );
              }),
              h =
                p &&
                !a(function () {
                  var t = !1,
                    n = /a/;
                  return (
                    "split" === e &&
                      (((n = {}).constructor = {}),
                      (n.constructor[s] = function () {
                        return n;
                      }),
                      (n.flags = ""),
                      (n[f] = /./[f])),
                    (n.exec = function () {
                      return (t = !0), null;
                    }),
                    n[f](""),
                    !t
                  );
                });
            if (!p || !h || n) {
              var m = r(/./[f]),
                g = t(f, ""[e], function (e, t, n, o, a) {
                  var l = r(e),
                    c = t.exec;
                  return c === i || c === u.exec
                    ? p && !a
                      ? { done: !0, value: m(t, n, o) }
                      : { done: !0, value: l(n, t, o) }
                    : { done: !1 };
                });
              o(String.prototype, e, g[0]), o(u, f, g[1]);
            }
            d && c(u[f], "sham", !0);
          };
        },
        3171: function (e, t, n) {
          var r = n(7188),
            o = Function.prototype,
            i = o.apply,
            a = o.call;
          e.exports =
            ("object" == typeof Reflect && Reflect.apply) ||
            (r
              ? a.bind(i)
              : function () {
                  return a.apply(i, arguments);
                });
        },
        7188: function (e, t, n) {
          var r = n(4229);
          e.exports = !r(function () {
            var e = function () {}.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype");
          });
        },
        266: function (e, t, n) {
          var r = n(7188),
            o = Function.prototype.call;
          e.exports = r
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments);
              };
        },
        1805: function (e, t, n) {
          var r = n(7400),
            o = n(8270),
            i = Function.prototype,
            a = r && Object.getOwnPropertyDescriptor,
            l = o(i, "name"),
            c = l && "something" === function () {}.name,
            s = l && (!r || (r && a(i, "name").configurable));
          e.exports = { EXISTS: l, PROPER: c, CONFIGURABLE: s };
        },
        5968: function (e, t, n) {
          var r = n(7188),
            o = Function.prototype,
            i = o.bind,
            a = o.call,
            l = r && i.bind(a, a);
          e.exports = r
            ? function (e) {
                return e && l(e);
              }
            : function (e) {
                return (
                  e &&
                  function () {
                    return a.apply(e, arguments);
                  }
                );
              };
        },
        1333: function (e, t, n) {
          var r = n(9859),
            o = n(6733),
            i = function (e) {
              return o(e) ? e : void 0;
            };
          e.exports = function (e, t) {
            return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t];
          };
        },
        5300: function (e, t, n) {
          var r = n(7111);
          e.exports = function (e, t) {
            var n = e[t];
            return null == n ? void 0 : r(n);
          };
        },
        17: function (e, t, n) {
          var r = n(5968),
            o = n(2991),
            i = Math.floor,
            a = r("".charAt),
            l = r("".replace),
            c = r("".slice),
            s = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            u = /\$([$&'`]|\d{1,2})/g;
          e.exports = function (e, t, n, r, d, f) {
            var p = n + e.length,
              h = r.length,
              m = u;
            return (
              void 0 !== d && ((d = o(d)), (m = s)),
              l(f, m, function (o, l) {
                var s;
                switch (a(l, 0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e;
                  case "`":
                    return c(t, 0, n);
                  case "'":
                    return c(t, p);
                  case "<":
                    s = d[c(l, 1, -1)];
                    break;
                  default:
                    var u = +l;
                    if (0 === u) return o;
                    if (u > h) {
                      var f = i(u / 10);
                      return 0 === f
                        ? o
                        : f <= h
                        ? void 0 === r[f - 1]
                          ? a(l, 1)
                          : r[f - 1] + a(l, 1)
                        : o;
                    }
                    s = r[u - 1];
                }
                return void 0 === s ? "" : s;
              })
            );
          };
        },
        9859: function (e, t, n) {
          var r = function (e) {
            return e && e.Math == Math && e;
          };
          e.exports =
            r("object" == typeof globalThis && globalThis) ||
            r("object" == typeof window && window) ||
            r("object" == typeof self && self) ||
            r("object" == typeof n.g && n.g) ||
            (function () {
              return this;
            })() ||
            Function("return this")();
        },
        8270: function (e, t, n) {
          var r = n(5968),
            o = n(2991),
            i = r({}.hasOwnProperty);
          e.exports =
            Object.hasOwn ||
            function (e, t) {
              return i(o(e), t);
            };
        },
        5977: function (e) {
          e.exports = {};
        },
        3777: function (e, t, n) {
          var r = n(1333);
          e.exports = r("document", "documentElement");
        },
        4394: function (e, t, n) {
          var r = n(7400),
            o = n(4229),
            i = n(2635);
          e.exports =
            !r &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i("div"), "a", {
                  get: function () {
                    return 7;
                  },
                }).a
              );
            });
        },
        9337: function (e, t, n) {
          var r = n(5968),
            o = n(4229),
            i = n(7079),
            a = Object,
            l = r("".split);
          e.exports = o(function () {
            return !a("z").propertyIsEnumerable(0);
          })
            ? function (e) {
                return "String" == i(e) ? l(e, "") : a(e);
              }
            : a;
        },
        835: function (e, t, n) {
          var r = n(6733),
            o = n(5052),
            i = n(6540);
          e.exports = function (e, t, n) {
            var a, l;
            return (
              i &&
                r((a = t.constructor)) &&
                a !== n &&
                o((l = a.prototype)) &&
                l !== n.prototype &&
                i(e, l),
              e
            );
          };
        },
        8511: function (e, t, n) {
          var r = n(5968),
            o = n(6733),
            i = n(5353),
            a = r(Function.toString);
          o(i.inspectSource) ||
            (i.inspectSource = function (e) {
              return a(e);
            }),
            (e.exports = i.inspectSource);
        },
        9679: function (e, t, n) {
          var r = n(5052),
            o = n(5762);
          e.exports = function (e, t) {
            r(t) && "cause" in t && o(e, "cause", t.cause);
          };
        },
        6407: function (e, t, n) {
          var r,
            o,
            i,
            a = n(8694),
            l = n(9859),
            c = n(5968),
            s = n(5052),
            u = n(5762),
            d = n(8270),
            f = n(5353),
            p = n(4399),
            h = n(5977),
            m = "Object already initialized",
            g = l.TypeError,
            v = l.WeakMap;
          if (a || f.state) {
            var y = f.state || (f.state = new v()),
              w = c(y.get),
              _ = c(y.has),
              b = c(y.set);
            (r = function (e, t) {
              if (_(y, e)) throw new g(m);
              return (t.facade = e), b(y, e, t), t;
            }),
              (o = function (e) {
                return w(y, e) || {};
              }),
              (i = function (e) {
                return _(y, e);
              });
          } else {
            var x = p("state");
            (h[x] = !0),
              (r = function (e, t) {
                if (d(e, x)) throw new g(m);
                return (t.facade = e), u(e, x, t), t;
              }),
              (o = function (e) {
                return d(e, x) ? e[x] : {};
              }),
              (i = function (e) {
                return d(e, x);
              });
          }
          e.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : r(e, {});
            },
            getterFor: function (e) {
              return function (t) {
                var n;
                if (!s(t) || (n = o(t)).type !== e)
                  throw g("Incompatible receiver, " + e + " required");
                return n;
              };
            },
          };
        },
        6733: function (e) {
          e.exports = function (e) {
            return "function" == typeof e;
          };
        },
        6541: function (e, t, n) {
          var r = n(4229),
            o = n(6733),
            i = /#|\.prototype\./,
            a = function (e, t) {
              var n = c[l(e)];
              return n == u || (n != s && (o(t) ? r(t) : !!t));
            },
            l = (a.normalize = function (e) {
              return String(e).replace(i, ".").toLowerCase();
            }),
            c = (a.data = {}),
            s = (a.NATIVE = "N"),
            u = (a.POLYFILL = "P");
          e.exports = a;
        },
        5052: function (e, t, n) {
          var r = n(6733);
          e.exports = function (e) {
            return "object" == typeof e ? null !== e : r(e);
          };
        },
        4231: function (e) {
          e.exports = !1;
        },
        9395: function (e, t, n) {
          var r = n(1333),
            o = n(6733),
            i = n(1321),
            a = n(6969),
            l = Object;
          e.exports = a
            ? function (e) {
                return "symbol" == typeof e;
              }
            : function (e) {
                var t = r("Symbol");
                return o(t) && i(t.prototype, l(e));
              };
        },
        693: function (e, t, n) {
          "use strict";
          var r,
            o,
            i,
            a = n(4229),
            l = n(6733),
            c = n(2391),
            s = n(7567),
            u = n(4768),
            d = n(95),
            f = n(4231),
            p = d("iterator"),
            h = !1;
          [].keys &&
            ("next" in (i = [].keys())
              ? (o = s(s(i))) !== Object.prototype && (r = o)
              : (h = !0)),
            null == r ||
            a(function () {
              var e = {};
              return r[p].call(e) !== e;
            })
              ? (r = {})
              : f && (r = c(r)),
            l(r[p]) ||
              u(r, p, function () {
                return this;
              }),
            (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: h });
        },
        5495: function (e) {
          e.exports = {};
        },
        9646: function (e, t, n) {
          var r = n(4237);
          e.exports = function (e) {
            return r(e.length);
          };
        },
        6039: function (e, t, n) {
          var r = n(4229),
            o = n(6733),
            i = n(8270),
            a = n(7400),
            l = n(1805).CONFIGURABLE,
            c = n(8511),
            s = n(6407),
            u = s.enforce,
            d = s.get,
            f = Object.defineProperty,
            p =
              a &&
              !r(function () {
                return 8 !== f(function () {}, "length", { value: 8 }).length;
              }),
            h = String(String).split("String"),
            m = (e.exports = function (e, t, n) {
              "Symbol(" === String(t).slice(0, 7) &&
                (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
                n && n.getter && (t = "get " + t),
                n && n.setter && (t = "set " + t),
                (!i(e, "name") || (l && e.name !== t)) &&
                  (a
                    ? f(e, "name", { value: t, configurable: !0 })
                    : (e.name = t)),
                p &&
                  n &&
                  i(n, "arity") &&
                  e.length !== n.arity &&
                  f(e, "length", { value: n.arity });
              try {
                n && i(n, "constructor") && n.constructor
                  ? a && f(e, "prototype", { writable: !1 })
                  : e.prototype && (e.prototype = void 0);
              } catch (e) {}
              var r = u(e);
              return (
                i(r, "source") ||
                  (r.source = h.join("string" == typeof t ? t : "")),
                e
              );
            });
          Function.prototype.toString = m(function () {
            return (o(this) && d(this).source) || c(this);
          }, "toString");
        },
        917: function (e) {
          var t = Math.ceil,
            n = Math.floor;
          e.exports =
            Math.trunc ||
            function (e) {
              var r = +e;
              return (r > 0 ? n : t)(r);
            };
        },
        3839: function (e, t, n) {
          var r = n(6358),
            o = n(4229);
          e.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var e = Symbol();
              return (
                !String(e) ||
                !(Object(e) instanceof Symbol) ||
                (!Symbol.sham && r && r < 41)
              );
            });
        },
        8694: function (e, t, n) {
          var r = n(9859),
            o = n(6733),
            i = n(8511),
            a = r.WeakMap;
          e.exports = o(a) && /native code/.test(i(a));
        },
        635: function (e, t, n) {
          var r = n(3326);
          e.exports = function (e, t) {
            return void 0 === e ? (arguments.length < 2 ? "" : t) : r(e);
          };
        },
        2391: function (e, t, n) {
          var r,
            o = n(1176),
            i = n(219),
            a = n(3837),
            l = n(5977),
            c = n(3777),
            s = n(2635),
            u = n(4399),
            d = u("IE_PROTO"),
            f = function () {},
            p = function (e) {
              return "<script>" + e + "</" + "script>";
            },
            h = function (e) {
              e.write(p("")), e.close();
              var t = e.parentWindow.Object;
              return (e = null), t;
            },
            m = function () {
              try {
                r = new ActiveXObject("htmlfile");
              } catch (e) {}
              var e, t;
              m =
                "undefined" != typeof document
                  ? document.domain && r
                    ? h(r)
                    : (((t = s("iframe")).style.display = "none"),
                      c.appendChild(t),
                      (t.src = String("javascript:")),
                      (e = t.contentWindow.document).open(),
                      e.write(p("document.F=Object")),
                      e.close(),
                      e.F)
                  : h(r);
              for (var n = a.length; n--; ) delete m.prototype[a[n]];
              return m();
            };
          (l[d] = !0),
            (e.exports =
              Object.create ||
              function (e, t) {
                var n;
                return (
                  null !== e
                    ? ((f.prototype = o(e)),
                      (n = new f()),
                      (f.prototype = null),
                      (n[d] = e))
                    : (n = m()),
                  void 0 === t ? n : i.f(n, t)
                );
              });
        },
        219: function (e, t, n) {
          var r = n(7400),
            o = n(7137),
            i = n(1787),
            a = n(1176),
            l = n(905),
            c = n(5632);
          t.f =
            r && !o
              ? Object.defineProperties
              : function (e, t) {
                  a(e);
                  for (var n, r = l(t), o = c(t), s = o.length, u = 0; s > u; )
                    i.f(e, (n = o[u++]), r[n]);
                  return e;
                };
        },
        1787: function (e, t, n) {
          var r = n(7400),
            o = n(4394),
            i = n(7137),
            a = n(1176),
            l = n(9310),
            c = TypeError,
            s = Object.defineProperty,
            u = Object.getOwnPropertyDescriptor,
            d = "enumerable",
            f = "configurable",
            p = "writable";
          t.f = r
            ? i
              ? function (e, t, n) {
                  if (
                    (a(e),
                    (t = l(t)),
                    a(n),
                    "function" == typeof e &&
                      "prototype" === t &&
                      "value" in n &&
                      p in n &&
                      !n.writable)
                  ) {
                    var r = u(e, t);
                    r &&
                      r.writable &&
                      ((e[t] = n.value),
                      (n = {
                        configurable: f in n ? n.configurable : r.configurable,
                        enumerable: d in n ? n.enumerable : r.enumerable,
                        writable: !1,
                      }));
                  }
                  return s(e, t, n);
                }
              : s
            : function (e, t, n) {
                if ((a(e), (t = l(t)), a(n), o))
                  try {
                    return s(e, t, n);
                  } catch (e) {}
                if ("get" in n || "set" in n)
                  throw c("Accessors not supported");
                return "value" in n && (e[t] = n.value), e;
              };
        },
        7933: function (e, t, n) {
          var r = n(7400),
            o = n(266),
            i = n(9195),
            a = n(5358),
            l = n(905),
            c = n(9310),
            s = n(8270),
            u = n(4394),
            d = Object.getOwnPropertyDescriptor;
          t.f = r
            ? d
            : function (e, t) {
                if (((e = l(e)), (t = c(t)), u))
                  try {
                    return d(e, t);
                  } catch (e) {}
                if (s(e, t)) return a(!o(i.f, e, t), e[t]);
              };
        },
        8151: function (e, t, n) {
          var r = n(140),
            o = n(3837).concat("length", "prototype");
          t.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return r(e, o);
            };
        },
        894: function (e, t) {
          t.f = Object.getOwnPropertySymbols;
        },
        7567: function (e, t, n) {
          var r = n(8270),
            o = n(6733),
            i = n(2991),
            a = n(4399),
            l = n(7528),
            c = a("IE_PROTO"),
            s = Object,
            u = s.prototype;
          e.exports = l
            ? s.getPrototypeOf
            : function (e) {
                var t = i(e);
                if (r(t, c)) return t[c];
                var n = t.constructor;
                return o(n) && t instanceof n
                  ? n.prototype
                  : t instanceof s
                  ? u
                  : null;
              };
        },
        1321: function (e, t, n) {
          var r = n(5968);
          e.exports = r({}.isPrototypeOf);
        },
        140: function (e, t, n) {
          var r = n(5968),
            o = n(8270),
            i = n(905),
            a = n(9540).indexOf,
            l = n(5977),
            c = r([].push);
          e.exports = function (e, t) {
            var n,
              r = i(e),
              s = 0,
              u = [];
            for (n in r) !o(l, n) && o(r, n) && c(u, n);
            for (; t.length > s; ) o(r, (n = t[s++])) && (~a(u, n) || c(u, n));
            return u;
          };
        },
        5632: function (e, t, n) {
          var r = n(140),
            o = n(3837);
          e.exports =
            Object.keys ||
            function (e) {
              return r(e, o);
            };
        },
        9195: function (e, t) {
          "use strict";
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o = r && !n.call({ 1: 2 }, 1);
          t.f = o
            ? function (e) {
                var t = r(this, e);
                return !!t && t.enumerable;
              }
            : n;
        },
        6540: function (e, t, n) {
          var r = n(5968),
            o = n(1176),
            i = n(8505);
          e.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
              ? (function () {
                  var e,
                    t = !1,
                    n = {};
                  try {
                    (e = r(
                      Object.getOwnPropertyDescriptor(
                        Object.prototype,
                        "__proto__"
                      ).set
                    ))(n, []),
                      (t = n instanceof Array);
                  } catch (e) {}
                  return function (n, r) {
                    return o(n), i(r), t ? e(n, r) : (n.__proto__ = r), n;
                  };
                })()
              : void 0);
        },
        2914: function (e, t, n) {
          var r = n(266),
            o = n(6733),
            i = n(5052),
            a = TypeError;
          e.exports = function (e, t) {
            var n, l;
            if ("string" === t && o((n = e.toString)) && !i((l = r(n, e))))
              return l;
            if (o((n = e.valueOf)) && !i((l = r(n, e)))) return l;
            if ("string" !== t && o((n = e.toString)) && !i((l = r(n, e))))
              return l;
            throw a("Can't convert object to primitive value");
          };
        },
        4826: function (e, t, n) {
          var r = n(1333),
            o = n(5968),
            i = n(8151),
            a = n(894),
            l = n(1176),
            c = o([].concat);
          e.exports =
            r("Reflect", "ownKeys") ||
            function (e) {
              var t = i.f(l(e)),
                n = a.f;
              return n ? c(t, n(e)) : t;
            };
        },
        6060: function (e, t, n) {
          var r = n(1787).f;
          e.exports = function (e, t, n) {
            n in e ||
              r(e, n, {
                configurable: !0,
                get: function () {
                  return t[n];
                },
                set: function (e) {
                  t[n] = e;
                },
              });
          };
        },
        8115: function (e, t, n) {
          var r = n(266),
            o = n(1176),
            i = n(6733),
            a = n(7079),
            l = n(3466),
            c = TypeError;
          e.exports = function (e, t) {
            var n = e.exec;
            if (i(n)) {
              var s = r(n, e, t);
              return null !== s && o(s), s;
            }
            if ("RegExp" === a(e)) return r(l, e, t);
            throw c("RegExp#exec called on incompatible receiver");
          };
        },
        3466: function (e, t, n) {
          "use strict";
          var r,
            o,
            i = n(266),
            a = n(5968),
            l = n(3326),
            c = n(895),
            s = n(5650),
            u = n(3036),
            d = n(2391),
            f = n(6407).get,
            p = n(2926),
            h = n(461),
            m = u("native-string-replace", String.prototype.replace),
            g = RegExp.prototype.exec,
            v = g,
            y = a("".charAt),
            w = a("".indexOf),
            _ = a("".replace),
            b = a("".slice),
            x =
              ((o = /b*/g),
              i(g, (r = /a/), "a"),
              i(g, o, "a"),
              0 !== r.lastIndex || 0 !== o.lastIndex),
            D = s.BROKEN_CARET,
            k = void 0 !== /()??/.exec("")[1];
          (x || k || D || p || h) &&
            (v = function (e) {
              var t,
                n,
                r,
                o,
                a,
                s,
                u,
                p = this,
                h = f(p),
                S = l(e),
                C = h.raw;
              if (C)
                return (
                  (C.lastIndex = p.lastIndex),
                  (t = i(v, C, S)),
                  (p.lastIndex = C.lastIndex),
                  t
                );
              var E = h.groups,
                I = D && p.sticky,
                M = i(c, p),
                N = p.source,
                T = 0,
                O = S;
              if (
                (I &&
                  ((M = _(M, "y", "")),
                  -1 === w(M, "g") && (M += "g"),
                  (O = b(S, p.lastIndex)),
                  p.lastIndex > 0 &&
                    (!p.multiline ||
                      (p.multiline && "\n" !== y(S, p.lastIndex - 1))) &&
                    ((N = "(?: " + N + ")"), (O = " " + O), T++),
                  (n = new RegExp("^(?:" + N + ")", M))),
                k && (n = new RegExp("^" + N + "$(?!\\s)", M)),
                x && (r = p.lastIndex),
                (o = i(g, I ? n : p, O)),
                I
                  ? o
                    ? ((o.input = b(o.input, T)),
                      (o[0] = b(o[0], T)),
                      (o.index = p.lastIndex),
                      (p.lastIndex += o[0].length))
                    : (p.lastIndex = 0)
                  : x &&
                    o &&
                    (p.lastIndex = p.global ? o.index + o[0].length : r),
                k &&
                  o &&
                  o.length > 1 &&
                  i(m, o[0], n, function () {
                    for (a = 1; a < arguments.length - 2; a++)
                      void 0 === arguments[a] && (o[a] = void 0);
                  }),
                o && E)
              )
                for (o.groups = s = d(null), a = 0; a < E.length; a++)
                  s[(u = E[a])[0]] = o[u[1]];
              return o;
            }),
            (e.exports = v);
        },
        895: function (e, t, n) {
          "use strict";
          var r = n(1176);
          e.exports = function () {
            var e = r(this),
              t = "";
            return (
              e.hasIndices && (t += "d"),
              e.global && (t += "g"),
              e.ignoreCase && (t += "i"),
              e.multiline && (t += "m"),
              e.dotAll && (t += "s"),
              e.unicode && (t += "u"),
              e.unicodeSets && (t += "v"),
              e.sticky && (t += "y"),
              t
            );
          };
        },
        5650: function (e, t, n) {
          var r = n(4229),
            o = n(9859).RegExp,
            i = r(function () {
              var e = o("a", "y");
              return (e.lastIndex = 2), null != e.exec("abcd");
            }),
            a =
              i ||
              r(function () {
                return !o("a", "y").sticky;
              }),
            l =
              i ||
              r(function () {
                var e = o("^r", "gy");
                return (e.lastIndex = 2), null != e.exec("str");
              });
          e.exports = { BROKEN_CARET: l, MISSED_STICKY: a, UNSUPPORTED_Y: i };
        },
        2926: function (e, t, n) {
          var r = n(4229),
            o = n(9859).RegExp;
          e.exports = r(function () {
            var e = o(".", "s");
            return !(e.dotAll && e.exec("\n") && "s" === e.flags);
          });
        },
        461: function (e, t, n) {
          var r = n(4229),
            o = n(9859).RegExp;
          e.exports = r(function () {
            var e = o("(?<a>b)", "g");
            return (
              "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            );
          });
        },
        8885: function (e) {
          var t = TypeError;
          e.exports = function (e) {
            if (null == e) throw t("Can't call method on " + e);
            return e;
          };
        },
        4555: function (e, t, n) {
          var r = n(1787).f,
            o = n(8270),
            i = n(95)("toStringTag");
          e.exports = function (e, t, n) {
            e && !n && (e = e.prototype),
              e && !o(e, i) && r(e, i, { configurable: !0, value: t });
          };
        },
        4399: function (e, t, n) {
          var r = n(3036),
            o = n(1441),
            i = r("keys");
          e.exports = function (e) {
            return i[e] || (i[e] = o(e));
          };
        },
        5353: function (e, t, n) {
          var r = n(9859),
            o = n(8400),
            i = "__core-js_shared__",
            a = r[i] || o(i, {});
          e.exports = a;
        },
        3036: function (e, t, n) {
          var r = n(4231),
            o = n(5353);
          (e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {});
          })("versions", []).push({
            version: "3.23.3",
            mode: r ? "pure" : "global",
            copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE",
            source: "https://github.com/zloirock/core-js",
          });
        },
        966: function (e, t, n) {
          var r = n(5968),
            o = n(3329),
            i = n(3326),
            a = n(8885),
            l = r("".charAt),
            c = r("".charCodeAt),
            s = r("".slice),
            u = function (e) {
              return function (t, n) {
                var r,
                  u,
                  d = i(a(t)),
                  f = o(n),
                  p = d.length;
                return f < 0 || f >= p
                  ? e
                    ? ""
                    : void 0
                  : (r = c(d, f)) < 55296 ||
                    r > 56319 ||
                    f + 1 === p ||
                    (u = c(d, f + 1)) < 56320 ||
                    u > 57343
                  ? e
                    ? l(d, f)
                    : r
                  : e
                  ? s(d, f, f + 2)
                  : u - 56320 + ((r - 55296) << 10) + 65536;
              };
            };
          e.exports = { codeAt: u(!1), charAt: u(!0) };
        },
        3231: function (e, t, n) {
          var r = n(3329),
            o = Math.max,
            i = Math.min;
          e.exports = function (e, t) {
            var n = r(e);
            return n < 0 ? o(n + t, 0) : i(n, t);
          };
        },
        905: function (e, t, n) {
          var r = n(9337),
            o = n(8885);
          e.exports = function (e) {
            return r(o(e));
          };
        },
        3329: function (e, t, n) {
          var r = n(917);
          e.exports = function (e) {
            var t = +e;
            return t != t || 0 === t ? 0 : r(t);
          };
        },
        4237: function (e, t, n) {
          var r = n(3329),
            o = Math.min;
          e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0;
          };
        },
        2991: function (e, t, n) {
          var r = n(8885),
            o = Object;
          e.exports = function (e) {
            return o(r(e));
          };
        },
        2066: function (e, t, n) {
          var r = n(266),
            o = n(5052),
            i = n(9395),
            a = n(5300),
            l = n(2914),
            c = n(95),
            s = TypeError,
            u = c("toPrimitive");
          e.exports = function (e, t) {
            if (!o(e) || i(e)) return e;
            var n,
              c = a(e, u);
            if (c) {
              if (
                (void 0 === t && (t = "default"),
                (n = r(c, e, t)),
                !o(n) || i(n))
              )
                return n;
              throw s("Can't convert object to primitive value");
            }
            return void 0 === t && (t = "number"), l(e, t);
          };
        },
        9310: function (e, t, n) {
          var r = n(2066),
            o = n(9395);
          e.exports = function (e) {
            var t = r(e, "string");
            return o(t) ? t : t + "";
          };
        },
        1601: function (e, t, n) {
          var r = {};
          (r[n(95)("toStringTag")] = "z"),
            (e.exports = "[object z]" === String(r));
        },
        3326: function (e, t, n) {
          var r = n(1589),
            o = String;
          e.exports = function (e) {
            if ("Symbol" === r(e))
              throw TypeError("Cannot convert a Symbol value to a string");
            return o(e);
          };
        },
        9821: function (e) {
          var t = String;
          e.exports = function (e) {
            try {
              return t(e);
            } catch (e) {
              return "Object";
            }
          };
        },
        1441: function (e, t, n) {
          var r = n(5968),
            o = 0,
            i = Math.random(),
            a = r((1).toString);
          e.exports = function (e) {
            return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36);
          };
        },
        6969: function (e, t, n) {
          var r = n(3839);
          e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
        },
        7137: function (e, t, n) {
          var r = n(7400),
            o = n(4229);
          e.exports =
            r &&
            o(function () {
              return (
                42 !=
                Object.defineProperty(function () {}, "prototype", {
                  value: 42,
                  writable: !1,
                }).prototype
              );
            });
        },
        95: function (e, t, n) {
          var r = n(9859),
            o = n(3036),
            i = n(8270),
            a = n(1441),
            l = n(3839),
            c = n(6969),
            s = o("wks"),
            u = r.Symbol,
            d = u && u.for,
            f = c ? u : (u && u.withoutSetter) || a;
          e.exports = function (e) {
            if (!i(s, e) || (!l && "string" != typeof s[e])) {
              var t = "Symbol." + e;
              l && i(u, e) ? (s[e] = u[e]) : (s[e] = c && d ? d(t) : f(t));
            }
            return s[e];
          };
        },
        3949: function (e, t, n) {
          "use strict";
          var r = n(1333),
            o = n(8270),
            i = n(5762),
            a = n(1321),
            l = n(6540),
            c = n(7081),
            s = n(6060),
            u = n(835),
            d = n(635),
            f = n(9679),
            p = n(1590),
            h = n(373),
            m = n(7400),
            g = n(4231);
          e.exports = function (e, t, n, v) {
            var y = "stackTraceLimit",
              w = v ? 2 : 1,
              _ = e.split("."),
              b = _[_.length - 1],
              x = r.apply(null, _);
            if (x) {
              var D = x.prototype;
              if ((!g && o(D, "cause") && delete D.cause, !n)) return x;
              var k = r("Error"),
                S = t(function (e, t) {
                  var n = d(v ? t : e, void 0),
                    r = v ? new x(e) : new x();
                  return (
                    void 0 !== n && i(r, "message", n),
                    h && i(r, "stack", p(r.stack, 2)),
                    this && a(D, this) && u(r, this, S),
                    arguments.length > w && f(r, arguments[w]),
                    r
                  );
                });
              if (
                ((S.prototype = D),
                "Error" !== b
                  ? l
                    ? l(S, k)
                    : c(S, k, { name: !0 })
                  : m && y in x && (s(S, x, y), s(S, x, "prepareStackTrace")),
                c(S, x),
                !g)
              )
                try {
                  D.name !== b && i(D, "name", b), (D.constructor = S);
                } catch (e) {}
              return S;
            }
          };
        },
        9529: function (e, t, n) {
          "use strict";
          var r = n(3103),
            o = n(9540).includes,
            i = n(4229),
            a = n(9736);
          r(
            {
              target: "Array",
              proto: !0,
              forced: i(function () {
                return !Array(1).includes();
              }),
            },
            {
              includes: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
              },
            }
          ),
            a("includes");
        },
        5735: function (e, t, n) {
          "use strict";
          var r = n(905),
            o = n(9736),
            i = n(5495),
            a = n(6407),
            l = n(1787).f,
            c = n(7675),
            s = n(4231),
            u = n(7400),
            d = "Array Iterator",
            f = a.set,
            p = a.getterFor(d);
          e.exports = c(
            Array,
            "Array",
            function (e, t) {
              f(this, { type: d, target: r(e), index: 0, kind: t });
            },
            function () {
              var e = p(this),
                t = e.target,
                n = e.kind,
                r = e.index++;
              return !t || r >= t.length
                ? ((e.target = void 0), { value: void 0, done: !0 })
                : "keys" == n
                ? { value: r, done: !1 }
                : "values" == n
                ? { value: t[r], done: !1 }
                : { value: [r, t[r]], done: !1 };
            },
            "values"
          );
          var h = (i.Arguments = i.Array);
          if (
            (o("keys"),
            o("values"),
            o("entries"),
            !s && u && "values" !== h.name)
          )
            try {
              l(h, "name", { value: "values" });
            } catch (e) {}
        },
        3985: function (e, t, n) {
          n(9736)("flatMap");
        },
        7694: function (e, t, n) {
          n(9736)("flat");
        },
        1372: function (e, t, n) {
          var r = n(3103),
            o = n(9859),
            i = n(3171),
            a = n(3949),
            l = "WebAssembly",
            c = o.WebAssembly,
            s = 7 !== Error("e", { cause: 7 }).cause,
            u = function (e, t) {
              var n = {};
              (n[e] = a(e, t, s)),
                r({ global: !0, constructor: !0, arity: 1, forced: s }, n);
            },
            d = function (e, t) {
              if (c && c[e]) {
                var n = {};
                (n[e] = a("WebAssembly." + e, t, s)),
                  r(
                    {
                      target: l,
                      stat: !0,
                      constructor: !0,
                      arity: 1,
                      forced: s,
                    },
                    n
                  );
              }
            };
          u("Error", function (e) {
            return function (t) {
              return i(e, this, arguments);
            };
          }),
            u("EvalError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            u("RangeError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            u("ReferenceError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            u("SyntaxError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            u("TypeError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            u("URIError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            d("CompileError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            d("LinkError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            }),
            d("RuntimeError", function (e) {
              return function (t) {
                return i(e, this, arguments);
              };
            });
        },
        7950: function (e, t, n) {
          "use strict";
          var r = n(3103),
            o = n(3466);
          r(
            { target: "RegExp", proto: !0, forced: /./.exec !== o },
            { exec: o }
          );
        },
        5940: function (e, t, n) {
          "use strict";
          var r = n(3171),
            o = n(266),
            i = n(5968),
            a = n(4954),
            l = n(4229),
            c = n(1176),
            s = n(6733),
            u = n(3329),
            d = n(4237),
            f = n(3326),
            p = n(8885),
            h = n(6637),
            m = n(5300),
            g = n(17),
            v = n(8115),
            y = n(95)("replace"),
            w = Math.max,
            _ = Math.min,
            b = i([].concat),
            x = i([].push),
            D = i("".indexOf),
            k = i("".slice),
            S = "$0" === "a".replace(/./, "$0"),
            C = !!/./[y] && "" === /./[y]("a", "$0");
          a(
            "replace",
            function (e, t, n) {
              var i = C ? "$" : "$0";
              return [
                function (e, n) {
                  var r = p(this),
                    i = null == e ? void 0 : m(e, y);
                  return i ? o(i, e, r, n) : o(t, f(r), e, n);
                },
                function (e, o) {
                  var a = c(this),
                    l = f(e);
                  if (
                    "string" == typeof o &&
                    -1 === D(o, i) &&
                    -1 === D(o, "$<")
                  ) {
                    var p = n(t, a, l, o);
                    if (p.done) return p.value;
                  }
                  var m = s(o);
                  m || (o = f(o));
                  var y = a.global;
                  if (y) {
                    var S = a.unicode;
                    a.lastIndex = 0;
                  }
                  for (var C = []; ; ) {
                    var E = v(a, l);
                    if (null === E) break;
                    if ((x(C, E), !y)) break;
                    "" === f(E[0]) && (a.lastIndex = h(l, d(a.lastIndex), S));
                  }
                  for (var I, M = "", N = 0, T = 0; T < C.length; T++) {
                    for (
                      var O = f((E = C[T])[0]),
                        P = w(_(u(E.index), l.length), 0),
                        A = [],
                        R = 1;
                      R < E.length;
                      R++
                    )
                      x(A, void 0 === (I = E[R]) ? I : String(I));
                    var L = E.groups;
                    if (m) {
                      var H = b([O], A, P, l);
                      void 0 !== L && x(H, L);
                      var F = f(r(o, void 0, H));
                    } else F = g(O, l, P, A, L, o);
                    P >= N && ((M += k(l, N, P) + F), (N = P + O.length));
                  }
                  return M + k(l, N);
                },
              ];
            },
            !!l(function () {
              var e = /./;
              return (
                (e.exec = function () {
                  var e = [];
                  return (e.groups = { a: "7" }), e;
                }),
                "7" !== "".replace(e, "$<a>")
              );
            }) ||
              !S ||
              C
          );
        },
        6886: function (e, t, n) {
          var r = n(9859),
            o = n(5694),
            i = n(8865),
            a = n(5735),
            l = n(5762),
            c = n(95),
            s = c("iterator"),
            u = c("toStringTag"),
            d = a.values,
            f = function (e, t) {
              if (e) {
                if (e[s] !== d)
                  try {
                    l(e, s, d);
                  } catch (t) {
                    e[s] = d;
                  }
                if ((e[u] || l(e, u, t), o[t]))
                  for (var n in a)
                    if (e[n] !== a[n])
                      try {
                        l(e, n, a[n]);
                      } catch (t) {
                        e[n] = a[n];
                      }
              }
            };
          for (var p in o) f(r[p] && r[p].prototype, p);
          f(i, "DOMTokenList");
        },
        5368: function (e) {
          /*! @license DOMPurify 2.3.8 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.3.8/LICENSE */
          e.exports = (function () {
            "use strict";
            function e(t) {
              return (
                (e =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                      }
                    : function (e) {
                        return e &&
                          "function" == typeof Symbol &&
                          e.constructor === Symbol &&
                          e !== Symbol.prototype
                          ? "symbol"
                          : typeof e;
                      }),
                e(t)
              );
            }
            function t(e, n) {
              return (
                (t =
                  Object.setPrototypeOf ||
                  function (e, t) {
                    return (e.__proto__ = t), e;
                  }),
                t(e, n)
              );
            }
            function n() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
              if (Reflect.construct.sham) return !1;
              if ("function" == typeof Proxy) return !0;
              try {
                return (
                  Boolean.prototype.valueOf.call(
                    Reflect.construct(Boolean, [], function () {})
                  ),
                  !0
                );
              } catch (e) {
                return !1;
              }
            }
            function r(e, o, i) {
              return (
                (r = n()
                  ? Reflect.construct
                  : function (e, n, r) {
                      var o = [null];
                      o.push.apply(o, n);
                      var i = new (Function.bind.apply(e, o))();
                      return r && t(i, r.prototype), i;
                    }),
                r.apply(null, arguments)
              );
            }
            function o(e) {
              return i(e) || a(e) || l(e) || s();
            }
            function i(e) {
              if (Array.isArray(e)) return c(e);
            }
            function a(e) {
              if (
                ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
                null != e["@@iterator"]
              )
                return Array.from(e);
            }
            function l(e, t) {
              if (e) {
                if ("string" == typeof e) return c(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                  "Object" === n && e.constructor && (n = e.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(e)
                    : "Arguments" === n ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? c(e, t)
                    : void 0
                );
              }
            }
            function c(e, t) {
              (null == t || t > e.length) && (t = e.length);
              for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
              return r;
            }
            function s() {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            }
            var u = Object.hasOwnProperty,
              d = Object.setPrototypeOf,
              f = Object.isFrozen,
              p = Object.getPrototypeOf,
              h = Object.getOwnPropertyDescriptor,
              m = Object.freeze,
              g = Object.seal,
              v = Object.create,
              y = "undefined" != typeof Reflect && Reflect,
              w = y.apply,
              _ = y.construct;
            w ||
              (w = function (e, t, n) {
                return e.apply(t, n);
              }),
              m ||
                (m = function (e) {
                  return e;
                }),
              g ||
                (g = function (e) {
                  return e;
                }),
              _ ||
                (_ = function (e, t) {
                  return r(e, o(t));
                });
            var b = T(Array.prototype.forEach),
              x = T(Array.prototype.pop),
              D = T(Array.prototype.push),
              k = T(String.prototype.toLowerCase),
              S = T(String.prototype.match),
              C = T(String.prototype.replace),
              E = T(String.prototype.indexOf),
              I = T(String.prototype.trim),
              M = T(RegExp.prototype.test),
              N = O(TypeError);
            function T(e) {
              return function (t) {
                for (
                  var n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                return w(e, t, r);
              };
            }
            function O(e) {
              return function () {
                for (
                  var t = arguments.length, n = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  n[r] = arguments[r];
                return _(e, n);
              };
            }
            function P(e, t) {
              d && d(e, null);
              for (var n = t.length; n--; ) {
                var r = t[n];
                if ("string" == typeof r) {
                  var o = k(r);
                  o !== r && (f(t) || (t[n] = o), (r = o));
                }
                e[r] = !0;
              }
              return e;
            }
            function A(e) {
              var t,
                n = v(null);
              for (t in e) w(u, e, [t]) && (n[t] = e[t]);
              return n;
            }
            function R(e, t) {
              for (; null !== e; ) {
                var n = h(e, t);
                if (n) {
                  if (n.get) return T(n.get);
                  if ("function" == typeof n.value) return T(n.value);
                }
                e = p(e);
              }
              function r(e) {
                return console.warn("fallback value for", e), null;
              }
              return r;
            }
            var L = m([
                "a",
                "abbr",
                "acronym",
                "address",
                "area",
                "article",
                "aside",
                "audio",
                "b",
                "bdi",
                "bdo",
                "big",
                "blink",
                "blockquote",
                "body",
                "br",
                "button",
                "canvas",
                "caption",
                "center",
                "cite",
                "code",
                "col",
                "colgroup",
                "content",
                "data",
                "datalist",
                "dd",
                "decorator",
                "del",
                "details",
                "dfn",
                "dialog",
                "dir",
                "div",
                "dl",
                "dt",
                "element",
                "em",
                "fieldset",
                "figcaption",
                "figure",
                "font",
                "footer",
                "form",
                "h1",
                "h2",
                "h3",
                "h4",
                "h5",
                "h6",
                "head",
                "header",
                "hgroup",
                "hr",
                "html",
                "i",
                "img",
                "input",
                "ins",
                "kbd",
                "label",
                "legend",
                "li",
                "main",
                "map",
                "mark",
                "marquee",
                "menu",
                "menuitem",
                "meter",
                "nav",
                "nobr",
                "ol",
                "optgroup",
                "option",
                "output",
                "p",
                "picture",
                "pre",
                "progress",
                "q",
                "rp",
                "rt",
                "ruby",
                "s",
                "samp",
                "section",
                "select",
                "shadow",
                "small",
                "source",
                "spacer",
                "span",
                "strike",
                "strong",
                "style",
                "sub",
                "summary",
                "sup",
                "table",
                "tbody",
                "td",
                "template",
                "textarea",
                "tfoot",
                "th",
                "thead",
                "time",
                "tr",
                "track",
                "tt",
                "u",
                "ul",
                "var",
                "video",
                "wbr",
              ]),
              H = m([
                "svg",
                "a",
                "altglyph",
                "altglyphdef",
                "altglyphitem",
                "animatecolor",
                "animatemotion",
                "animatetransform",
                "circle",
                "clippath",
                "defs",
                "desc",
                "ellipse",
                "filter",
                "font",
                "g",
                "glyph",
                "glyphref",
                "hkern",
                "image",
                "line",
                "lineargradient",
                "marker",
                "mask",
                "metadata",
                "mpath",
                "path",
                "pattern",
                "polygon",
                "polyline",
                "radialgradient",
                "rect",
                "stop",
                "style",
                "switch",
                "symbol",
                "text",
                "textpath",
                "title",
                "tref",
                "tspan",
                "view",
                "vkern",
              ]),
              F = m([
                "feBlend",
                "feColorMatrix",
                "feComponentTransfer",
                "feComposite",
                "feConvolveMatrix",
                "feDiffuseLighting",
                "feDisplacementMap",
                "feDistantLight",
                "feFlood",
                "feFuncA",
                "feFuncB",
                "feFuncG",
                "feFuncR",
                "feGaussianBlur",
                "feImage",
                "feMerge",
                "feMergeNode",
                "feMorphology",
                "feOffset",
                "fePointLight",
                "feSpecularLighting",
                "feSpotLight",
                "feTile",
                "feTurbulence",
              ]),
              z = m([
                "animate",
                "color-profile",
                "cursor",
                "discard",
                "fedropshadow",
                "font-face",
                "font-face-format",
                "font-face-name",
                "font-face-src",
                "font-face-uri",
                "foreignobject",
                "hatch",
                "hatchpath",
                "mesh",
                "meshgradient",
                "meshpatch",
                "meshrow",
                "missing-glyph",
                "script",
                "set",
                "solidcolor",
                "unknown",
                "use",
              ]),
              B = m([
                "math",
                "menclose",
                "merror",
                "mfenced",
                "mfrac",
                "mglyph",
                "mi",
                "mlabeledtr",
                "mmultiscripts",
                "mn",
                "mo",
                "mover",
                "mpadded",
                "mphantom",
                "mroot",
                "mrow",
                "ms",
                "mspace",
                "msqrt",
                "mstyle",
                "msub",
                "msup",
                "msubsup",
                "mtable",
                "mtd",
                "mtext",
                "mtr",
                "munder",
                "munderover",
              ]),
              j = m([
                "maction",
                "maligngroup",
                "malignmark",
                "mlongdiv",
                "mscarries",
                "mscarry",
                "msgroup",
                "mstack",
                "msline",
                "msrow",
                "semantics",
                "annotation",
                "annotation-xml",
                "mprescripts",
                "none",
              ]),
              G = m(["#text"]),
              W = m([
                "accept",
                "action",
                "align",
                "alt",
                "autocapitalize",
                "autocomplete",
                "autopictureinpicture",
                "autoplay",
                "background",
                "bgcolor",
                "border",
                "capture",
                "cellpadding",
                "cellspacing",
                "checked",
                "cite",
                "class",
                "clear",
                "color",
                "cols",
                "colspan",
                "controls",
                "controlslist",
                "coords",
                "crossorigin",
                "datetime",
                "decoding",
                "default",
                "dir",
                "disabled",
                "disablepictureinpicture",
                "disableremoteplayback",
                "download",
                "draggable",
                "enctype",
                "enterkeyhint",
                "face",
                "for",
                "headers",
                "height",
                "hidden",
                "high",
                "href",
                "hreflang",
                "id",
                "inputmode",
                "integrity",
                "ismap",
                "kind",
                "label",
                "lang",
                "list",
                "loading",
                "loop",
                "low",
                "max",
                "maxlength",
                "media",
                "method",
                "min",
                "minlength",
                "multiple",
                "muted",
                "name",
                "nonce",
                "noshade",
                "novalidate",
                "nowrap",
                "open",
                "optimum",
                "pattern",
                "placeholder",
                "playsinline",
                "poster",
                "preload",
                "pubdate",
                "radiogroup",
                "readonly",
                "rel",
                "required",
                "rev",
                "reversed",
                "role",
                "rows",
                "rowspan",
                "spellcheck",
                "scope",
                "selected",
                "shape",
                "size",
                "sizes",
                "span",
                "srclang",
                "start",
                "src",
                "srcset",
                "step",
                "style",
                "summary",
                "tabindex",
                "title",
                "translate",
                "type",
                "usemap",
                "valign",
                "value",
                "width",
                "xmlns",
                "slot",
              ]),
              U = m([
                "accent-height",
                "accumulate",
                "additive",
                "alignment-baseline",
                "ascent",
                "attributename",
                "attributetype",
                "azimuth",
                "basefrequency",
                "baseline-shift",
                "begin",
                "bias",
                "by",
                "class",
                "clip",
                "clippathunits",
                "clip-path",
                "clip-rule",
                "color",
                "color-interpolation",
                "color-interpolation-filters",
                "color-profile",
                "color-rendering",
                "cx",
                "cy",
                "d",
                "dx",
                "dy",
                "diffuseconstant",
                "direction",
                "display",
                "divisor",
                "dur",
                "edgemode",
                "elevation",
                "end",
                "fill",
                "fill-opacity",
                "fill-rule",
                "filter",
                "filterunits",
                "flood-color",
                "flood-opacity",
                "font-family",
                "font-size",
                "font-size-adjust",
                "font-stretch",
                "font-style",
                "font-variant",
                "font-weight",
                "fx",
                "fy",
                "g1",
                "g2",
                "glyph-name",
                "glyphref",
                "gradientunits",
                "gradienttransform",
                "height",
                "href",
                "id",
                "image-rendering",
                "in",
                "in2",
                "k",
                "k1",
                "k2",
                "k3",
                "k4",
                "kerning",
                "keypoints",
                "keysplines",
                "keytimes",
                "lang",
                "lengthadjust",
                "letter-spacing",
                "kernelmatrix",
                "kernelunitlength",
                "lighting-color",
                "local",
                "marker-end",
                "marker-mid",
                "marker-start",
                "markerheight",
                "markerunits",
                "markerwidth",
                "maskcontentunits",
                "maskunits",
                "max",
                "mask",
                "media",
                "method",
                "mode",
                "min",
                "name",
                "numoctaves",
                "offset",
                "operator",
                "opacity",
                "order",
                "orient",
                "orientation",
                "origin",
                "overflow",
                "paint-order",
                "path",
                "pathlength",
                "patterncontentunits",
                "patterntransform",
                "patternunits",
                "points",
                "preservealpha",
                "preserveaspectratio",
                "primitiveunits",
                "r",
                "rx",
                "ry",
                "radius",
                "refx",
                "refy",
                "repeatcount",
                "repeatdur",
                "restart",
                "result",
                "rotate",
                "scale",
                "seed",
                "shape-rendering",
                "specularconstant",
                "specularexponent",
                "spreadmethod",
                "startoffset",
                "stddeviation",
                "stitchtiles",
                "stop-color",
                "stop-opacity",
                "stroke-dasharray",
                "stroke-dashoffset",
                "stroke-linecap",
                "stroke-linejoin",
                "stroke-miterlimit",
                "stroke-opacity",
                "stroke",
                "stroke-width",
                "style",
                "surfacescale",
                "systemlanguage",
                "tabindex",
                "targetx",
                "targety",
                "transform",
                "transform-origin",
                "text-anchor",
                "text-decoration",
                "text-rendering",
                "textlength",
                "type",
                "u1",
                "u2",
                "unicode",
                "values",
                "viewbox",
                "visibility",
                "version",
                "vert-adv-y",
                "vert-origin-x",
                "vert-origin-y",
                "width",
                "word-spacing",
                "wrap",
                "writing-mode",
                "xchannelselector",
                "ychannelselector",
                "x",
                "x1",
                "x2",
                "xmlns",
                "y",
                "y1",
                "y2",
                "z",
                "zoomandpan",
              ]),
              Y = m([
                "accent",
                "accentunder",
                "align",
                "bevelled",
                "close",
                "columnsalign",
                "columnlines",
                "columnspan",
                "denomalign",
                "depth",
                "dir",
                "display",
                "displaystyle",
                "encoding",
                "fence",
                "frame",
                "height",
                "href",
                "id",
                "largeop",
                "length",
                "linethickness",
                "lspace",
                "lquote",
                "mathbackground",
                "mathcolor",
                "mathsize",
                "mathvariant",
                "maxsize",
                "minsize",
                "movablelimits",
                "notation",
                "numalign",
                "open",
                "rowalign",
                "rowlines",
                "rowspacing",
                "rowspan",
                "rspace",
                "rquote",
                "scriptlevel",
                "scriptminsize",
                "scriptsizemultiplier",
                "selection",
                "separator",
                "separators",
                "stretchy",
                "subscriptshift",
                "supscriptshift",
                "symmetric",
                "voffset",
                "width",
                "xmlns",
              ]),
              V = m([
                "xlink:href",
                "xml:id",
                "xlink:title",
                "xml:space",
                "xmlns:xlink",
              ]),
              $ = g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
              X = g(/<%[\w\W]*|[\w\W]*%>/gm),
              q = g(/^data-[\-\w.\u00B7-\uFFFF]/),
              K = g(/^aria-[\-\w]+$/),
              Z = g(
                /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
              ),
              J = g(/^(?:\w+script|data):/i),
              Q = g(
                /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
              ),
              ee = g(/^html$/i),
              te = function () {
                return "undefined" == typeof window ? null : window;
              },
              ne = function (t, n) {
                if ("object" !== e(t) || "function" != typeof t.createPolicy)
                  return null;
                var r = null,
                  o = "data-tt-policy-suffix";
                n.currentScript &&
                  n.currentScript.hasAttribute(o) &&
                  (r = n.currentScript.getAttribute(o));
                var i = "dompurify" + (r ? "#" + r : "");
                try {
                  return t.createPolicy(i, {
                    createHTML: function (e) {
                      return e;
                    },
                  });
                } catch (e) {
                  return (
                    console.warn(
                      "TrustedTypes policy " + i + " could not be created."
                    ),
                    null
                  );
                }
              };
            function re() {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : te(),
                n = function (e) {
                  return re(e);
                };
              if (
                ((n.version = "2.3.8"),
                (n.removed = []),
                !t || !t.document || 9 !== t.document.nodeType)
              )
                return (n.isSupported = !1), n;
              var r = t.document,
                i = t.document,
                a = t.DocumentFragment,
                l = t.HTMLTemplateElement,
                c = t.Node,
                s = t.Element,
                u = t.NodeFilter,
                d = t.NamedNodeMap,
                f = void 0 === d ? t.NamedNodeMap || t.MozNamedAttrMap : d,
                p = t.HTMLFormElement,
                h = t.DOMParser,
                g = t.trustedTypes,
                v = s.prototype,
                y = R(v, "cloneNode"),
                w = R(v, "nextSibling"),
                _ = R(v, "childNodes"),
                T = R(v, "parentNode");
              if ("function" == typeof l) {
                var O = i.createElement("template");
                O.content &&
                  O.content.ownerDocument &&
                  (i = O.content.ownerDocument);
              }
              var oe = ne(g, r),
                ie = oe ? oe.createHTML("") : "",
                ae = i,
                le = ae.implementation,
                ce = ae.createNodeIterator,
                se = ae.createDocumentFragment,
                ue = ae.getElementsByTagName,
                de = r.importNode,
                fe = {};
              try {
                fe = A(i).documentMode ? i.documentMode : {};
              } catch (e) {}
              var pe = {};
              n.isSupported =
                "function" == typeof T &&
                le &&
                void 0 !== le.createHTMLDocument &&
                9 !== fe;
              var he,
                me,
                ge = $,
                ve = X,
                ye = q,
                we = K,
                _e = J,
                be = Q,
                xe = Z,
                De = null,
                ke = P({}, [].concat(o(L), o(H), o(F), o(B), o(G))),
                Se = null,
                Ce = P({}, [].concat(o(W), o(U), o(Y), o(V))),
                Ee = Object.seal(
                  Object.create(null, {
                    tagNameCheck: {
                      writable: !0,
                      configurable: !1,
                      enumerable: !0,
                      value: null,
                    },
                    attributeNameCheck: {
                      writable: !0,
                      configurable: !1,
                      enumerable: !0,
                      value: null,
                    },
                    allowCustomizedBuiltInElements: {
                      writable: !0,
                      configurable: !1,
                      enumerable: !0,
                      value: !1,
                    },
                  })
                ),
                Ie = null,
                Me = null,
                Ne = !0,
                Te = !0,
                Oe = !1,
                Pe = !1,
                Ae = !1,
                Re = !1,
                Le = !1,
                He = !1,
                Fe = !1,
                ze = !1,
                Be = !0,
                je = !0,
                Ge = !1,
                We = {},
                Ue = null,
                Ye = P({}, [
                  "annotation-xml",
                  "audio",
                  "colgroup",
                  "desc",
                  "foreignobject",
                  "head",
                  "iframe",
                  "math",
                  "mi",
                  "mn",
                  "mo",
                  "ms",
                  "mtext",
                  "noembed",
                  "noframes",
                  "noscript",
                  "plaintext",
                  "script",
                  "style",
                  "svg",
                  "template",
                  "thead",
                  "title",
                  "video",
                  "xmp",
                ]),
                Ve = null,
                $e = P({}, [
                  "audio",
                  "video",
                  "img",
                  "source",
                  "image",
                  "track",
                ]),
                Xe = null,
                qe = P({}, [
                  "alt",
                  "class",
                  "for",
                  "id",
                  "label",
                  "name",
                  "pattern",
                  "placeholder",
                  "role",
                  "summary",
                  "title",
                  "value",
                  "style",
                  "xmlns",
                ]),
                Ke = "http://www.w3.org/1998/Math/MathML",
                Ze = "http://www.w3.org/2000/svg",
                Je = "http://www.w3.org/1999/xhtml",
                Qe = Je,
                et = !1,
                tt = ["application/xhtml+xml", "text/html"],
                nt = "text/html",
                rt = null,
                ot = i.createElement("form"),
                it = function (e) {
                  return e instanceof RegExp || e instanceof Function;
                },
                at = function (t) {
                  (rt && rt === t) ||
                    ((t && "object" === e(t)) || (t = {}),
                    (t = A(t)),
                    (De = "ALLOWED_TAGS" in t ? P({}, t.ALLOWED_TAGS) : ke),
                    (Se = "ALLOWED_ATTR" in t ? P({}, t.ALLOWED_ATTR) : Ce),
                    (Xe =
                      "ADD_URI_SAFE_ATTR" in t
                        ? P(A(qe), t.ADD_URI_SAFE_ATTR)
                        : qe),
                    (Ve =
                      "ADD_DATA_URI_TAGS" in t
                        ? P(A($e), t.ADD_DATA_URI_TAGS)
                        : $e),
                    (Ue =
                      "FORBID_CONTENTS" in t ? P({}, t.FORBID_CONTENTS) : Ye),
                    (Ie = "FORBID_TAGS" in t ? P({}, t.FORBID_TAGS) : {}),
                    (Me = "FORBID_ATTR" in t ? P({}, t.FORBID_ATTR) : {}),
                    (We = "USE_PROFILES" in t && t.USE_PROFILES),
                    (Ne = !1 !== t.ALLOW_ARIA_ATTR),
                    (Te = !1 !== t.ALLOW_DATA_ATTR),
                    (Oe = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                    (Pe = t.SAFE_FOR_TEMPLATES || !1),
                    (Ae = t.WHOLE_DOCUMENT || !1),
                    (He = t.RETURN_DOM || !1),
                    (Fe = t.RETURN_DOM_FRAGMENT || !1),
                    (ze = t.RETURN_TRUSTED_TYPE || !1),
                    (Le = t.FORCE_BODY || !1),
                    (Be = !1 !== t.SANITIZE_DOM),
                    (je = !1 !== t.KEEP_CONTENT),
                    (Ge = t.IN_PLACE || !1),
                    (xe = t.ALLOWED_URI_REGEXP || xe),
                    (Qe = t.NAMESPACE || Je),
                    t.CUSTOM_ELEMENT_HANDLING &&
                      it(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                      (Ee.tagNameCheck =
                        t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                    t.CUSTOM_ELEMENT_HANDLING &&
                      it(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                      (Ee.attributeNameCheck =
                        t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                    t.CUSTOM_ELEMENT_HANDLING &&
                      "boolean" ==
                        typeof t.CUSTOM_ELEMENT_HANDLING
                          .allowCustomizedBuiltInElements &&
                      (Ee.allowCustomizedBuiltInElements =
                        t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                    (he = he =
                      -1 === tt.indexOf(t.PARSER_MEDIA_TYPE)
                        ? nt
                        : t.PARSER_MEDIA_TYPE),
                    (me =
                      "application/xhtml+xml" === he
                        ? function (e) {
                            return e;
                          }
                        : k),
                    Pe && (Te = !1),
                    Fe && (He = !0),
                    We &&
                      ((De = P({}, o(G))),
                      (Se = []),
                      !0 === We.html && (P(De, L), P(Se, W)),
                      !0 === We.svg && (P(De, H), P(Se, U), P(Se, V)),
                      !0 === We.svgFilters && (P(De, F), P(Se, U), P(Se, V)),
                      !0 === We.mathMl && (P(De, B), P(Se, Y), P(Se, V))),
                    t.ADD_TAGS &&
                      (De === ke && (De = A(De)), P(De, t.ADD_TAGS)),
                    t.ADD_ATTR &&
                      (Se === Ce && (Se = A(Se)), P(Se, t.ADD_ATTR)),
                    t.ADD_URI_SAFE_ATTR && P(Xe, t.ADD_URI_SAFE_ATTR),
                    t.FORBID_CONTENTS &&
                      (Ue === Ye && (Ue = A(Ue)), P(Ue, t.FORBID_CONTENTS)),
                    je && (De["#text"] = !0),
                    Ae && P(De, ["html", "head", "body"]),
                    De.table && (P(De, ["tbody"]), delete Ie.tbody),
                    m && m(t),
                    (rt = t));
                },
                lt = P({}, ["mi", "mo", "mn", "ms", "mtext"]),
                ct = P({}, [
                  "foreignobject",
                  "desc",
                  "title",
                  "annotation-xml",
                ]),
                st = P({}, ["title", "style", "font", "a", "script"]),
                ut = P({}, H);
              P(ut, F), P(ut, z);
              var dt = P({}, B);
              P(dt, j);
              var ft = function (e) {
                  var t = T(e);
                  (t && t.tagName) ||
                    (t = { namespaceURI: Je, tagName: "template" });
                  var n = k(e.tagName),
                    r = k(t.tagName);
                  return e.namespaceURI === Ze
                    ? t.namespaceURI === Je
                      ? "svg" === n
                      : t.namespaceURI === Ke
                      ? "svg" === n && ("annotation-xml" === r || lt[r])
                      : Boolean(ut[n])
                    : e.namespaceURI === Ke
                    ? t.namespaceURI === Je
                      ? "math" === n
                      : t.namespaceURI === Ze
                      ? "math" === n && ct[r]
                      : Boolean(dt[n])
                    : e.namespaceURI === Je &&
                      !(t.namespaceURI === Ze && !ct[r]) &&
                      !(t.namespaceURI === Ke && !lt[r]) &&
                      !dt[n] &&
                      (st[n] || !ut[n]);
                },
                pt = function (e) {
                  D(n.removed, { element: e });
                  try {
                    e.parentNode.removeChild(e);
                  } catch (t) {
                    try {
                      e.outerHTML = ie;
                    } catch (t) {
                      e.remove();
                    }
                  }
                },
                ht = function (e, t) {
                  try {
                    D(n.removed, { attribute: t.getAttributeNode(e), from: t });
                  } catch (e) {
                    D(n.removed, { attribute: null, from: t });
                  }
                  if ((t.removeAttribute(e), "is" === e && !Se[e]))
                    if (He || Fe)
                      try {
                        pt(t);
                      } catch (e) {}
                    else
                      try {
                        t.setAttribute(e, "");
                      } catch (e) {}
                },
                mt = function (e) {
                  var t, n;
                  if (Le) e = "<remove></remove>" + e;
                  else {
                    var r = S(e, /^[\r\n\t ]+/);
                    n = r && r[0];
                  }
                  "application/xhtml+xml" === he &&
                    (e =
                      '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                      e +
                      "</body></html>");
                  var o = oe ? oe.createHTML(e) : e;
                  if (Qe === Je)
                    try {
                      t = new h().parseFromString(o, he);
                    } catch (e) {}
                  if (!t || !t.documentElement) {
                    t = le.createDocument(Qe, "template", null);
                    try {
                      t.documentElement.innerHTML = et ? "" : o;
                    } catch (e) {}
                  }
                  var a = t.body || t.documentElement;
                  return (
                    e &&
                      n &&
                      a.insertBefore(
                        i.createTextNode(n),
                        a.childNodes[0] || null
                      ),
                    Qe === Je
                      ? ue.call(t, Ae ? "html" : "body")[0]
                      : Ae
                      ? t.documentElement
                      : a
                  );
                },
                gt = function (e) {
                  return ce.call(
                    e.ownerDocument || e,
                    e,
                    u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT,
                    null,
                    !1
                  );
                },
                vt = function (e) {
                  return (
                    e instanceof p &&
                    ("string" != typeof e.nodeName ||
                      "string" != typeof e.textContent ||
                      "function" != typeof e.removeChild ||
                      !(e.attributes instanceof f) ||
                      "function" != typeof e.removeAttribute ||
                      "function" != typeof e.setAttribute ||
                      "string" != typeof e.namespaceURI ||
                      "function" != typeof e.insertBefore)
                  );
                },
                yt = function (t) {
                  return "object" === e(c)
                    ? t instanceof c
                    : t &&
                        "object" === e(t) &&
                        "number" == typeof t.nodeType &&
                        "string" == typeof t.nodeName;
                },
                wt = function (e, t, r) {
                  pe[e] &&
                    b(pe[e], function (e) {
                      e.call(n, t, r, rt);
                    });
                },
                _t = function (e) {
                  var t;
                  if ((wt("beforeSanitizeElements", e, null), vt(e)))
                    return pt(e), !0;
                  if (M(/[\u0080-\uFFFF]/, e.nodeName)) return pt(e), !0;
                  var r = me(e.nodeName);
                  if (
                    (wt("uponSanitizeElement", e, {
                      tagName: r,
                      allowedTags: De,
                    }),
                    e.hasChildNodes() &&
                      !yt(e.firstElementChild) &&
                      (!yt(e.content) || !yt(e.content.firstElementChild)) &&
                      M(/<[/\w]/g, e.innerHTML) &&
                      M(/<[/\w]/g, e.textContent))
                  )
                    return pt(e), !0;
                  if ("select" === r && M(/<template/i, e.innerHTML))
                    return pt(e), !0;
                  if (!De[r] || Ie[r]) {
                    if (!Ie[r] && xt(r)) {
                      if (
                        Ee.tagNameCheck instanceof RegExp &&
                        M(Ee.tagNameCheck, r)
                      )
                        return !1;
                      if (
                        Ee.tagNameCheck instanceof Function &&
                        Ee.tagNameCheck(r)
                      )
                        return !1;
                    }
                    if (je && !Ue[r]) {
                      var o = T(e) || e.parentNode,
                        i = _(e) || e.childNodes;
                      if (i && o)
                        for (var a = i.length - 1; a >= 0; --a)
                          o.insertBefore(y(i[a], !0), w(e));
                    }
                    return pt(e), !0;
                  }
                  return e instanceof s && !ft(e)
                    ? (pt(e), !0)
                    : ("noscript" !== r && "noembed" !== r) ||
                      !M(/<\/no(script|embed)/i, e.innerHTML)
                    ? (Pe &&
                        3 === e.nodeType &&
                        ((t = e.textContent),
                        (t = C(t, ge, " ")),
                        (t = C(t, ve, " ")),
                        e.textContent !== t &&
                          (D(n.removed, { element: e.cloneNode() }),
                          (e.textContent = t))),
                      wt("afterSanitizeElements", e, null),
                      !1)
                    : (pt(e), !0);
                },
                bt = function (e, t, n) {
                  if (Be && ("id" === t || "name" === t) && (n in i || n in ot))
                    return !1;
                  if (Te && !Me[t] && M(ye, t));
                  else if (Ne && M(we, t));
                  else if (!Se[t] || Me[t]) {
                    if (
                      !(
                        (xt(e) &&
                          ((Ee.tagNameCheck instanceof RegExp &&
                            M(Ee.tagNameCheck, e)) ||
                            (Ee.tagNameCheck instanceof Function &&
                              Ee.tagNameCheck(e))) &&
                          ((Ee.attributeNameCheck instanceof RegExp &&
                            M(Ee.attributeNameCheck, t)) ||
                            (Ee.attributeNameCheck instanceof Function &&
                              Ee.attributeNameCheck(t)))) ||
                        ("is" === t &&
                          Ee.allowCustomizedBuiltInElements &&
                          ((Ee.tagNameCheck instanceof RegExp &&
                            M(Ee.tagNameCheck, n)) ||
                            (Ee.tagNameCheck instanceof Function &&
                              Ee.tagNameCheck(n))))
                      )
                    )
                      return !1;
                  } else if (Xe[t]);
                  else if (M(xe, C(n, be, "")));
                  else if (
                    ("src" !== t && "xlink:href" !== t && "href" !== t) ||
                    "script" === e ||
                    0 !== E(n, "data:") ||
                    !Ve[e]
                  )
                    if (Oe && !M(_e, C(n, be, "")));
                    else if (n) return !1;
                  return !0;
                },
                xt = function (e) {
                  return e.indexOf("-") > 0;
                },
                Dt = function (e) {
                  var t, r, o, i;
                  wt("beforeSanitizeAttributes", e, null);
                  var a = e.attributes;
                  if (a) {
                    var l = {
                      attrName: "",
                      attrValue: "",
                      keepAttr: !0,
                      allowedAttributes: Se,
                    };
                    for (i = a.length; i--; ) {
                      var c = (t = a[i]),
                        s = c.name,
                        u = c.namespaceURI;
                      if (
                        ((r = "value" === s ? t.value : I(t.value)),
                        (o = me(s)),
                        (l.attrName = o),
                        (l.attrValue = r),
                        (l.keepAttr = !0),
                        (l.forceKeepAttr = void 0),
                        wt("uponSanitizeAttribute", e, l),
                        (r = l.attrValue),
                        !l.forceKeepAttr && (ht(s, e), l.keepAttr))
                      )
                        if (M(/\/>/i, r)) ht(s, e);
                        else {
                          Pe && ((r = C(r, ge, " ")), (r = C(r, ve, " ")));
                          var d = me(e.nodeName);
                          if (bt(d, o, r))
                            try {
                              u
                                ? e.setAttributeNS(u, s, r)
                                : e.setAttribute(s, r),
                                x(n.removed);
                            } catch (e) {}
                        }
                    }
                    wt("afterSanitizeAttributes", e, null);
                  }
                },
                kt = function e(t) {
                  var n,
                    r = gt(t);
                  for (
                    wt("beforeSanitizeShadowDOM", t, null);
                    (n = r.nextNode());

                  )
                    wt("uponSanitizeShadowNode", n, null),
                      _t(n) || (n.content instanceof a && e(n.content), Dt(n));
                  wt("afterSanitizeShadowDOM", t, null);
                };
              return (
                (n.sanitize = function (o, i) {
                  var l, s, u, d, f;
                  if (
                    ((et = !o) && (o = "\x3c!--\x3e"),
                    "string" != typeof o && !yt(o))
                  ) {
                    if ("function" != typeof o.toString)
                      throw N("toString is not a function");
                    if ("string" != typeof (o = o.toString()))
                      throw N("dirty is not a string, aborting");
                  }
                  if (!n.isSupported) {
                    if (
                      "object" === e(t.toStaticHTML) ||
                      "function" == typeof t.toStaticHTML
                    ) {
                      if ("string" == typeof o) return t.toStaticHTML(o);
                      if (yt(o)) return t.toStaticHTML(o.outerHTML);
                    }
                    return o;
                  }
                  if (
                    (Re || at(i),
                    (n.removed = []),
                    "string" == typeof o && (Ge = !1),
                    Ge)
                  ) {
                    if (o.nodeName) {
                      var p = me(o.nodeName);
                      if (!De[p] || Ie[p])
                        throw N(
                          "root node is forbidden and cannot be sanitized in-place"
                        );
                    }
                  } else if (o instanceof c)
                    (1 ===
                      (s = (l = mt("\x3c!----\x3e")).ownerDocument.importNode(
                        o,
                        !0
                      )).nodeType &&
                      "BODY" === s.nodeName) ||
                    "HTML" === s.nodeName
                      ? (l = s)
                      : l.appendChild(s);
                  else {
                    if (!He && !Pe && !Ae && -1 === o.indexOf("<"))
                      return oe && ze ? oe.createHTML(o) : o;
                    if (!(l = mt(o))) return He ? null : ze ? ie : "";
                  }
                  l && Le && pt(l.firstChild);
                  for (var h = gt(Ge ? o : l); (u = h.nextNode()); )
                    (3 === u.nodeType && u === d) ||
                      _t(u) ||
                      (u.content instanceof a && kt(u.content), Dt(u), (d = u));
                  if (((d = null), Ge)) return o;
                  if (He) {
                    if (Fe)
                      for (f = se.call(l.ownerDocument); l.firstChild; )
                        f.appendChild(l.firstChild);
                    else f = l;
                    return Se.shadowroot && (f = de.call(r, f, !0)), f;
                  }
                  var m = Ae ? l.outerHTML : l.innerHTML;
                  return (
                    Ae &&
                      De["!doctype"] &&
                      l.ownerDocument &&
                      l.ownerDocument.doctype &&
                      l.ownerDocument.doctype.name &&
                      M(ee, l.ownerDocument.doctype.name) &&
                      (m =
                        "<!DOCTYPE " +
                        l.ownerDocument.doctype.name +
                        ">\n" +
                        m),
                    Pe && ((m = C(m, ge, " ")), (m = C(m, ve, " "))),
                    oe && ze ? oe.createHTML(m) : m
                  );
                }),
                (n.setConfig = function (e) {
                  at(e), (Re = !0);
                }),
                (n.clearConfig = function () {
                  (rt = null), (Re = !1);
                }),
                (n.isValidAttribute = function (e, t, n) {
                  rt || at({});
                  var r = me(e),
                    o = me(t);
                  return bt(r, o, n);
                }),
                (n.addHook = function (e, t) {
                  "function" == typeof t &&
                    ((pe[e] = pe[e] || []), D(pe[e], t));
                }),
                (n.removeHook = function (e) {
                  if (pe[e]) return x(pe[e]);
                }),
                (n.removeHooks = function (e) {
                  pe[e] && (pe[e] = []);
                }),
                (n.removeAllHooks = function () {
                  pe = {};
                }),
                n
              );
            }
            return re();
          })();
        },
        4304: function (e, t, n) {
          e.exports =
            window.DOMPurify || (window.DOMPurify = n(5368).default || n(5368));
        },
        7386: function (e, t, n) {
          "use strict";
          var r = n(3929);
          e.exports = function (e, t, n) {
            var o,
              i = [];
            for (
              r(t) && ((t = e || 0), (e = 0)),
                t *= o = (n = n || 1) < 0 ? -1 : 1;
              e * o < t;
              e += n
            )
              i.push(e);
            return i;
          };
        },
        1690: function (e, t, n) {
          "use strict";
          var r = n(7322),
            o = n(893),
            i = n(6956);
          e.exports = function (e, t, n) {
            r(e) ? o(e, t, n) : i(e, t, n);
          };
        },
        893: function (e) {
          "use strict";
          e.exports = function (e, t, n) {
            var r = 0,
              o = e.length;
            for (n = n || null; r < o && !1 !== t.call(n, e[r], r, e); r += 1);
          };
        },
        6956: function (e) {
          "use strict";
          e.exports = function (e, t, n) {
            var r;
            for (r in ((n = n || null), e))
              if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) break;
          };
        },
        2278: function (e, t, n) {
          "use strict";
          var r = n(7969),
            o = n(7065),
            i = n(758),
            a = n(5758),
            l = n(7322),
            c = n(4294),
            s = n(1690),
            u = /\s+/g;
          function d() {
            (this.events = null), (this.contexts = null);
          }
          (d.mixin = function (e) {
            r(e.prototype, d.prototype);
          }),
            (d.prototype._getHandlerItem = function (e, t) {
              var n = { handler: e };
              return t && (n.context = t), n;
            }),
            (d.prototype._safeEvent = function (e) {
              var t,
                n = this.events;
              return (
                n || (n = this.events = {}),
                e && ((t = n[e]) || ((t = []), (n[e] = t)), (n = t)),
                n
              );
            }),
            (d.prototype._safeContext = function () {
              var e = this.contexts;
              return e || (e = this.contexts = []), e;
            }),
            (d.prototype._indexOfContext = function (e) {
              for (var t = this._safeContext(), n = 0; t[n]; ) {
                if (e === t[n][0]) return n;
                n += 1;
              }
              return -1;
            }),
            (d.prototype._memorizeContext = function (e) {
              var t, n;
              o(e) &&
                ((t = this._safeContext()),
                (n = this._indexOfContext(e)) > -1
                  ? (t[n][1] += 1)
                  : t.push([e, 1]));
            }),
            (d.prototype._forgetContext = function (e) {
              var t, n;
              o(e) &&
                ((t = this._safeContext()),
                (n = this._indexOfContext(e)) > -1 &&
                  ((t[n][1] -= 1), t[n][1] <= 0 && t.splice(n, 1)));
            }),
            (d.prototype._bindEvent = function (e, t, n) {
              var r = this._safeEvent(e);
              this._memorizeContext(n), r.push(this._getHandlerItem(t, n));
            }),
            (d.prototype.on = function (e, t, n) {
              var r = this;
              i(e)
                ? ((e = e.split(u)),
                  s(e, function (e) {
                    r._bindEvent(e, t, n);
                  }))
                : a(e) &&
                  ((n = t),
                  s(e, function (e, t) {
                    r.on(t, e, n);
                  }));
            }),
            (d.prototype.once = function (e, t, n) {
              var r = this;
              if (a(e))
                return (
                  (n = t),
                  void s(e, function (e, t) {
                    r.once(t, e, n);
                  })
                );
              this.on(
                e,
                function o() {
                  t.apply(n, arguments), r.off(e, o, n);
                },
                n
              );
            }),
            (d.prototype._spliceMatches = function (e, t) {
              var n,
                r = 0;
              if (l(e))
                for (n = e.length; r < n; r += 1)
                  !0 === t(e[r]) && (e.splice(r, 1), (n -= 1), (r -= 1));
            }),
            (d.prototype._matchHandler = function (e) {
              var t = this;
              return function (n) {
                var r = e === n.handler;
                return r && t._forgetContext(n.context), r;
              };
            }),
            (d.prototype._matchContext = function (e) {
              var t = this;
              return function (n) {
                var r = e === n.context;
                return r && t._forgetContext(n.context), r;
              };
            }),
            (d.prototype._matchHandlerAndContext = function (e, t) {
              var n = this;
              return function (r) {
                var o = e === r.handler,
                  i = t === r.context,
                  a = o && i;
                return a && n._forgetContext(r.context), a;
              };
            }),
            (d.prototype._offByEventName = function (e, t) {
              var n = this,
                r = c(t),
                o = n._matchHandler(t);
              (e = e.split(u)),
                s(e, function (e) {
                  var t = n._safeEvent(e);
                  r
                    ? n._spliceMatches(t, o)
                    : (s(t, function (e) {
                        n._forgetContext(e.context);
                      }),
                      (n.events[e] = []));
                });
            }),
            (d.prototype._offByHandler = function (e) {
              var t = this,
                n = this._matchHandler(e);
              s(this._safeEvent(), function (e) {
                t._spliceMatches(e, n);
              });
            }),
            (d.prototype._offByObject = function (e, t) {
              var n,
                r = this;
              this._indexOfContext(e) < 0
                ? s(e, function (e, t) {
                    r.off(t, e);
                  })
                : i(t)
                ? ((n = this._matchContext(e)),
                  r._spliceMatches(this._safeEvent(t), n))
                : c(t)
                ? ((n = this._matchHandlerAndContext(t, e)),
                  s(this._safeEvent(), function (e) {
                    r._spliceMatches(e, n);
                  }))
                : ((n = this._matchContext(e)),
                  s(this._safeEvent(), function (e) {
                    r._spliceMatches(e, n);
                  }));
            }),
            (d.prototype.off = function (e, t) {
              i(e)
                ? this._offByEventName(e, t)
                : arguments.length
                ? c(e)
                  ? this._offByHandler(e)
                  : a(e) && this._offByObject(e, t)
                : ((this.events = {}), (this.contexts = []));
            }),
            (d.prototype.fire = function (e) {
              this.invoke.apply(this, arguments);
            }),
            (d.prototype.invoke = function (e) {
              var t, n, r, o;
              if (!this.hasListener(e)) return !0;
              for (
                t = this._safeEvent(e),
                  n = Array.prototype.slice.call(arguments, 1),
                  r = 0;
                t[r];

              ) {
                if (!1 === (o = t[r]).handler.apply(o.context, n)) return !1;
                r += 1;
              }
              return !0;
            }),
            (d.prototype.hasListener = function (e) {
              return this.getListenerLength(e) > 0;
            }),
            (d.prototype.getListenerLength = function (e) {
              return this._safeEvent(e).length;
            }),
            (e.exports = d);
        },
        7969: function (e) {
          "use strict";
          e.exports = function (e, t) {
            var n,
              r,
              o,
              i,
              a = Object.prototype.hasOwnProperty;
            for (o = 1, i = arguments.length; o < i; o += 1)
              for (r in (n = arguments[o])) a.call(n, r) && (e[r] = n[r]);
            return e;
          };
        },
        4254: function (e, t, n) {
          "use strict";
          var r = n(6956);
          e.exports = function (e, t) {
            var n = document.createElement("img"),
              o = "";
            return (
              r(t, function (e, t) {
                o += "&" + t + "=" + e;
              }),
              (o = o.substring(1)),
              (n.src = e + "?" + o),
              (n.style.display = "none"),
              document.body.appendChild(n),
              document.body.removeChild(n),
              n
            );
          };
        },
        1391: function (e, t, n) {
          "use strict";
          var r = n(3929),
            o = n(4254);
          e.exports = function (e, t) {
            var n = location.hostname,
              i = "TOAST UI " + e + " for " + n + ": Statistics",
              a = window.localStorage.getItem(i);
            (r(window.tui) || !1 !== window.tui.usageStatistics) &&
              ((a &&
                !(function (e) {
                  return new Date().getTime() - e > 6048e5;
                })(a)) ||
                (window.localStorage.setItem(i, new Date().getTime()),
                setTimeout(function () {
                  ("interactive" !== document.readyState &&
                    "complete" !== document.readyState) ||
                    o("https://www.google-analytics.com/collect", {
                      v: 1,
                      t: "event",
                      tid: t,
                      cid: n,
                      dp: n,
                      dh: e,
                      el: e,
                      ec: "use",
                    });
                }, 1e3)));
          };
        },
        7322: function (e) {
          "use strict";
          e.exports = function (e) {
            return e instanceof Array;
          };
        },
        1326: function (e) {
          "use strict";
          e.exports = function (e) {
            return "boolean" == typeof e || e instanceof Boolean;
          };
        },
        7065: function (e, t, n) {
          "use strict";
          var r = n(3929),
            o = n(2934);
          e.exports = function (e) {
            return !r(e) && !o(e);
          };
        },
        4294: function (e) {
          "use strict";
          e.exports = function (e) {
            return e instanceof Function;
          };
        },
        2934: function (e) {
          "use strict";
          e.exports = function (e) {
            return null === e;
          };
        },
        321: function (e) {
          "use strict";
          e.exports = function (e) {
            return "number" == typeof e || e instanceof Number;
          };
        },
        5758: function (e) {
          "use strict";
          e.exports = function (e) {
            return e === Object(e);
          };
        },
        758: function (e) {
          "use strict";
          e.exports = function (e) {
            return "string" == typeof e || e instanceof String;
          };
        },
        3929: function (e) {
          "use strict";
          e.exports = function (e) {
            return void 0 === e;
          };
        },
        4268: function (t) {
          "use strict";
          t.exports = e;
        },
      },
      n = {};
    function r(e) {
      var o = n[e];
      if (void 0 !== o) return o.exports;
      var i = (n[e] = { exports: {} });
      return t[e].call(i.exports, i, i.exports, r), i.exports;
    }
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, { a: t }), t;
    }),
      (r.d = function (e, t) {
        for (var n in t)
          r.o(t, n) &&
            !r.o(e, n) &&
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
      }),
      (r.g = (function () {
        if ("object" == typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" == typeof window) return window;
        }
      })()),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      });
    var o = {};
    return (
      (function () {
        "use strict";
        r.d(o, {
          default: function () {
            return Os;
          },
        });
        var e,
          t,
          n,
          i,
          a,
          l,
          c,
          s = {},
          u = [],
          d =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
        function f(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function p(e) {
          var t = e.parentNode;
          t && t.removeChild(e);
        }
        function h(t, n, r) {
          var o,
            i,
            a,
            l = {};
          for (a in n)
            "key" == a ? (o = n[a]) : "ref" == a ? (i = n[a]) : (l[a] = n[a]);
          if (
            (arguments.length > 2 &&
              (l.children = arguments.length > 3 ? e.call(arguments, 2) : r),
            "function" == typeof t && null != t.defaultProps)
          )
            for (a in t.defaultProps)
              void 0 === l[a] && (l[a] = t.defaultProps[a]);
          return m(t, l, o, i, null);
        }
        function m(e, r, o, i, a) {
          var l = {
            type: e,
            props: r,
            key: o,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++n : a,
          };
          return null == a && null != t.vnode && t.vnode(l), l;
        }
        function g(e) {
          return e.children;
        }
        function v(e, t) {
          (this.props = e), (this.context = t);
        }
        function y(e, t) {
          if (null == t) return e.__ ? y(e.__, e.__.__k.indexOf(e) + 1) : null;
          for (var n; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
          return "function" == typeof e.type ? y(e) : null;
        }
        function w(e) {
          var t, n;
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
              }
            return w(e);
          }
        }
        function _(e) {
          ((!e.__d && (e.__d = !0) && i.push(e) && !b.__r++) ||
            l !== t.debounceRendering) &&
            ((l = t.debounceRendering) || a)(b);
        }
        function b() {
          for (var e; (b.__r = i.length); )
            (e = i.sort(function (e, t) {
              return e.__v.__b - t.__v.__b;
            })),
              (i = []),
              e.some(function (e) {
                var t, n, r, o, i, a;
                e.__d &&
                  ((i = (o = (t = e).__v).__e),
                  (a = t.__P) &&
                    ((n = []),
                    ((r = f({}, o)).__v = o.__v + 1),
                    N(
                      a,
                      o,
                      r,
                      t.__n,
                      void 0 !== a.ownerSVGElement,
                      null != o.__h ? [i] : null,
                      n,
                      null == i ? y(o) : i,
                      o.__h
                    ),
                    T(n, o),
                    o.__e != i && w(o)));
              });
        }
        function x(e, t, n, r, o, i, a, l, c, d) {
          var f,
            p,
            h,
            v,
            w,
            _,
            b,
            x = (r && r.__k) || u,
            k = x.length;
          for (n.__k = [], f = 0; f < t.length; f++)
            if (
              null !=
              (v = n.__k[f] =
                null == (v = t[f]) || "boolean" == typeof v
                  ? null
                  : "string" == typeof v ||
                    "number" == typeof v ||
                    "bigint" == typeof v
                  ? m(null, v, null, null, v)
                  : Array.isArray(v)
                  ? m(g, { children: v }, null, null, null)
                  : v.__b > 0
                  ? m(v.type, v.props, v.key, null, v.__v)
                  : v)
            ) {
              if (
                ((v.__ = n),
                (v.__b = n.__b + 1),
                null === (h = x[f]) ||
                  (h && v.key == h.key && v.type === h.type))
              )
                x[f] = void 0;
              else
                for (p = 0; p < k; p++) {
                  if ((h = x[p]) && v.key == h.key && v.type === h.type) {
                    x[p] = void 0;
                    break;
                  }
                  h = null;
                }
              N(e, v, (h = h || s), o, i, a, l, c, d),
                (w = v.__e),
                (p = v.ref) &&
                  h.ref != p &&
                  (b || (b = []),
                  h.ref && b.push(h.ref, null, v),
                  b.push(p, v.__c || w, v)),
                null != w
                  ? (null == _ && (_ = w),
                    "function" == typeof v.type && v.__k === h.__k
                      ? (v.__d = c = D(v, c, e))
                      : (c = S(e, v, h, x, w, c)),
                    "function" == typeof n.type && (n.__d = c))
                  : c && h.__e == c && c.parentNode != e && (c = y(h));
            }
          for (n.__e = _, f = k; f--; )
            null != x[f] &&
              ("function" == typeof n.type &&
                null != x[f].__e &&
                x[f].__e == n.__d &&
                (n.__d = y(r, f + 1)),
              A(x[f], x[f]));
          if (b) for (f = 0; f < b.length; f++) P(b[f], b[++f], b[++f]);
        }
        function D(e, t, n) {
          for (var r, o = e.__k, i = 0; o && i < o.length; i++)
            (r = o[i]) &&
              ((r.__ = e),
              (t =
                "function" == typeof r.type
                  ? D(r, t, n)
                  : S(n, r, r, o, r.__e, t)));
          return t;
        }
        function k(e, t) {
          return (
            (t = t || []),
            null == e ||
              "boolean" == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    k(e, t);
                  })
                : t.push(e)),
            t
          );
        }
        function S(e, t, n, r, o, i) {
          var a, l, c;
          if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
          else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e)
              e.appendChild(o), (a = null);
            else {
              for (l = i, c = 0; (l = l.nextSibling) && c < r.length; c += 2)
                if (l == o) break e;
              e.insertBefore(o, i), (a = i);
            }
          return void 0 !== a ? a : o.nextSibling;
        }
        function C(e, t, n) {
          "-" === t[0]
            ? e.setProperty(t, n)
            : (e[t] =
                null == n
                  ? ""
                  : "number" != typeof n || d.test(t)
                  ? n
                  : n + "px");
        }
        function E(e, t, n, r, o) {
          var i;
          e: if ("style" === t)
            if ("string" == typeof n) e.style.cssText = n;
            else {
              if (("string" == typeof r && (e.style.cssText = r = ""), r))
                for (t in r) (n && t in n) || C(e.style, t, "");
              if (n) for (t in n) (r && n[t] === r[t]) || C(e.style, t, n[t]);
            }
          else if ("o" === t[0] && "n" === t[1])
            (i = t !== (t = t.replace(/Capture$/, ""))),
              (t =
                t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = n),
              n
                ? r || e.addEventListener(t, i ? M : I, i)
                : e.removeEventListener(t, i ? M : I, i);
          else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
            else if (
              "href" !== t &&
              "list" !== t &&
              "form" !== t &&
              "tabIndex" !== t &&
              "download" !== t &&
              t in e
            )
              try {
                e[t] = null == n ? "" : n;
                break e;
              } catch (e) {}
            "function" == typeof n ||
              (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1]))
                ? e.setAttribute(t, n)
                : e.removeAttribute(t));
          }
        }
        function I(e) {
          this.l[e.type + !1](t.event ? t.event(e) : e);
        }
        function M(e) {
          this.l[e.type + !0](t.event ? t.event(e) : e);
        }
        function N(e, n, r, o, i, a, l, c, s) {
          var u,
            d,
            p,
            h,
            m,
            y,
            w,
            _,
            b,
            D,
            k,
            S,
            C,
            E = n.type;
          if (void 0 !== n.constructor) return null;
          null != r.__h &&
            ((s = r.__h), (c = n.__e = r.__e), (n.__h = null), (a = [c])),
            (u = t.__b) && u(n);
          try {
            e: if ("function" == typeof E) {
              if (
                ((_ = n.props),
                (b = (u = E.contextType) && o[u.__c]),
                (D = u ? (b ? b.props.value : u.__) : o),
                r.__c
                  ? (w = (d = n.__c = r.__c).__ = d.__E)
                  : ("prototype" in E && E.prototype.render
                      ? (n.__c = d = new E(_, D))
                      : ((n.__c = d = new v(_, D)),
                        (d.constructor = E),
                        (d.render = R)),
                    b && b.sub(d),
                    (d.props = _),
                    d.state || (d.state = {}),
                    (d.context = D),
                    (d.__n = o),
                    (p = d.__d = !0),
                    (d.__h = [])),
                null == d.__s && (d.__s = d.state),
                null != E.getDerivedStateFromProps &&
                  (d.__s == d.state && (d.__s = f({}, d.__s)),
                  f(d.__s, E.getDerivedStateFromProps(_, d.__s))),
                (h = d.props),
                (m = d.state),
                p)
              )
                null == E.getDerivedStateFromProps &&
                  null != d.componentWillMount &&
                  d.componentWillMount(),
                  null != d.componentDidMount &&
                    d.__h.push(d.componentDidMount);
              else {
                if (
                  (null == E.getDerivedStateFromProps &&
                    _ !== h &&
                    null != d.componentWillReceiveProps &&
                    d.componentWillReceiveProps(_, D),
                  (!d.__e &&
                    null != d.shouldComponentUpdate &&
                    !1 === d.shouldComponentUpdate(_, d.__s, D)) ||
                    n.__v === r.__v)
                ) {
                  (d.props = _),
                    (d.state = d.__s),
                    n.__v !== r.__v && (d.__d = !1),
                    (d.__v = n),
                    (n.__e = r.__e),
                    (n.__k = r.__k),
                    n.__k.forEach(function (e) {
                      e && (e.__ = n);
                    }),
                    d.__h.length && l.push(d);
                  break e;
                }
                null != d.componentWillUpdate &&
                  d.componentWillUpdate(_, d.__s, D),
                  null != d.componentDidUpdate &&
                    d.__h.push(function () {
                      d.componentDidUpdate(h, m, y);
                    });
              }
              if (
                ((d.context = D),
                (d.props = _),
                (d.__v = n),
                (d.__P = e),
                (k = t.__r),
                (S = 0),
                "prototype" in E && E.prototype.render)
              )
                (d.state = d.__s),
                  (d.__d = !1),
                  k && k(n),
                  (u = d.render(d.props, d.state, d.context));
              else
                do {
                  (d.__d = !1),
                    k && k(n),
                    (u = d.render(d.props, d.state, d.context)),
                    (d.state = d.__s);
                } while (d.__d && ++S < 25);
              (d.state = d.__s),
                null != d.getChildContext &&
                  (o = f(f({}, o), d.getChildContext())),
                p ||
                  null == d.getSnapshotBeforeUpdate ||
                  (y = d.getSnapshotBeforeUpdate(h, m)),
                (C =
                  null != u && u.type === g && null == u.key
                    ? u.props.children
                    : u),
                x(e, Array.isArray(C) ? C : [C], n, r, o, i, a, l, c, s),
                (d.base = n.__e),
                (n.__h = null),
                d.__h.length && l.push(d),
                w && (d.__E = d.__ = null),
                (d.__e = !1);
            } else
              null == a && n.__v === r.__v
                ? ((n.__k = r.__k), (n.__e = r.__e))
                : (n.__e = O(r.__e, n, r, o, i, a, l, s));
            (u = t.diffed) && u(n);
          } catch (e) {
            (n.__v = null),
              (s || null != a) &&
                ((n.__e = c), (n.__h = !!s), (a[a.indexOf(c)] = null)),
              t.__e(e, n, r);
          }
        }
        function T(e, n) {
          t.__c && t.__c(n, e),
            e.some(function (n) {
              try {
                (e = n.__h),
                  (n.__h = []),
                  e.some(function (e) {
                    e.call(n);
                  });
              } catch (e) {
                t.__e(e, n.__v);
              }
            });
        }
        function O(t, n, r, o, i, a, l, c) {
          var u,
            d,
            f,
            h = r.props,
            m = n.props,
            g = n.type,
            v = 0;
          if (("svg" === g && (i = !0), null != a))
            for (; v < a.length; v++)
              if (
                (u = a[v]) &&
                "setAttribute" in u == !!g &&
                (g ? u.localName === g : 3 === u.nodeType)
              ) {
                (t = u), (a[v] = null);
                break;
              }
          if (null == t) {
            if (null === g) return document.createTextNode(m);
            (t = i
              ? document.createElementNS("http://www.w3.org/2000/svg", g)
              : document.createElement(g, m.is && m)),
              (a = null),
              (c = !1);
          }
          if (null === g) h === m || (c && t.data === m) || (t.data = m);
          else {
            if (
              ((a = a && e.call(t.childNodes)),
              (d = (h = r.props || s).dangerouslySetInnerHTML),
              (f = m.dangerouslySetInnerHTML),
              !c)
            ) {
              if (null != a)
                for (h = {}, v = 0; v < t.attributes.length; v++)
                  h[t.attributes[v].name] = t.attributes[v].value;
              (f || d) &&
                ((f &&
                  ((d && f.__html == d.__html) || f.__html === t.innerHTML)) ||
                  (t.innerHTML = (f && f.__html) || ""));
            }
            if (
              ((function (e, t, n, r, o) {
                var i;
                for (i in n)
                  "children" === i ||
                    "key" === i ||
                    i in t ||
                    E(e, i, null, n[i], r);
                for (i in t)
                  (o && "function" != typeof t[i]) ||
                    "children" === i ||
                    "key" === i ||
                    "value" === i ||
                    "checked" === i ||
                    n[i] === t[i] ||
                    E(e, i, t[i], n[i], r);
              })(t, m, h, i, c),
              f)
            )
              n.__k = [];
            else if (
              ((v = n.props.children),
              x(
                t,
                Array.isArray(v) ? v : [v],
                n,
                r,
                o,
                i && "foreignObject" !== g,
                a,
                l,
                a ? a[0] : r.__k && y(r, 0),
                c
              ),
              null != a)
            )
              for (v = a.length; v--; ) null != a[v] && p(a[v]);
            c ||
              ("value" in m &&
                void 0 !== (v = m.value) &&
                (v !== t.value ||
                  ("progress" === g && !v) ||
                  ("option" === g && v !== h.value)) &&
                E(t, "value", v, h.value, !1),
              "checked" in m &&
                void 0 !== (v = m.checked) &&
                v !== t.checked &&
                E(t, "checked", v, h.checked, !1));
          }
          return t;
        }
        function P(e, n, r) {
          try {
            "function" == typeof e ? e(n) : (e.current = n);
          } catch (e) {
            t.__e(e, r);
          }
        }
        function A(e, n, r) {
          var o, i;
          if (
            (t.unmount && t.unmount(e),
            (o = e.ref) &&
              ((o.current && o.current !== e.__e) || P(o, null, n)),
            null != (o = e.__c))
          ) {
            if (o.componentWillUnmount)
              try {
                o.componentWillUnmount();
              } catch (e) {
                t.__e(e, n);
              }
            o.base = o.__P = null;
          }
          if ((o = e.__k))
            for (i = 0; i < o.length; i++)
              o[i] && A(o[i], n, "function" != typeof e.type);
          r || null == e.__e || p(e.__e), (e.__e = e.__d = void 0);
        }
        function R(e, t, n) {
          return this.constructor(e, n);
        }
        function L(n, r, o) {
          var i, a, l;
          t.__ && t.__(n, r),
            (a = (i = "function" == typeof o) ? null : (o && o.__k) || r.__k),
            (l = []),
            N(
              r,
              (n = ((!i && o) || r).__k = h(g, null, [n])),
              a || s,
              s,
              void 0 !== r.ownerSVGElement,
              !i && o
                ? [o]
                : a
                ? null
                : r.firstChild
                ? e.call(r.childNodes)
                : null,
              l,
              !i && o ? o : a ? a.__e : r.firstChild,
              i
            ),
            T(l, n);
        }
        function H(t, n, r) {
          var o,
            i,
            a,
            l = f({}, t.props);
          for (a in n)
            "key" == a ? (o = n[a]) : "ref" == a ? (i = n[a]) : (l[a] = n[a]);
          return (
            arguments.length > 2 &&
              (l.children = arguments.length > 3 ? e.call(arguments, 2) : r),
            m(t.type, l, o || t.key, i || t.ref, null)
          );
        }
        function F(e, t) {
          var n = {
            __c: (t = "__cC" + c++),
            __: e,
            Consumer: function (e, t) {
              return e.children(t);
            },
            Provider: function (e) {
              var n, r;
              return (
                this.getChildContext ||
                  ((n = []),
                  ((r = {})[t] = this),
                  (this.getChildContext = function () {
                    return r;
                  }),
                  (this.shouldComponentUpdate = function (e) {
                    this.props.value !== e.value && n.some(_);
                  }),
                  (this.sub = function (e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function () {
                      n.splice(n.indexOf(e), 1), t && t.call(e);
                    };
                  })),
                e.children
              );
            },
          };
          return (n.Provider.__ = n.Consumer.contextType = n);
        }
        (e = u.slice),
          (t = {
            __e: function (e, t, n, r) {
              for (var o, i, a; (t = t.__); )
                if ((o = t.__c) && !o.__)
                  try {
                    if (
                      ((i = o.constructor) &&
                        null != i.getDerivedStateFromError &&
                        (o.setState(i.getDerivedStateFromError(e)),
                        (a = o.__d)),
                      null != o.componentDidCatch &&
                        (o.componentDidCatch(e, r || {}), (a = o.__d)),
                      a)
                    )
                      return (o.__E = o);
                  } catch (t) {
                    e = t;
                  }
              throw e;
            },
          }),
          (n = 0),
          (v.prototype.setState = function (e, t) {
            var n;
            (n =
              null != this.__s && this.__s !== this.state
                ? this.__s
                : (this.__s = f({}, this.state))),
              "function" == typeof e && (e = e(f({}, n), this.props)),
              e && f(n, e),
              null != e && this.__v && (t && this.__h.push(t), _(this));
          }),
          (v.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), _(this));
          }),
          (v.prototype.render = g),
          (i = []),
          (a =
            "function" == typeof Promise
              ? Promise.prototype.then.bind(Promise.resolve())
              : setTimeout),
          (b.__r = 0),
          (c = 0);
        var z,
          B,
          j,
          G,
          W = 0,
          U = [],
          Y = [],
          V = t.__b,
          $ = t.__r,
          X = t.diffed,
          q = t.__c,
          K = t.unmount;
        function Z(e, n) {
          t.__h && t.__h(B, e, W || n), (W = 0);
          var r = B.__H || (B.__H = { __: [], __h: [] });
          return e >= r.__.length && r.__.push({ __V: Y }), r.__[e];
        }
        function J(e) {
          return (W = 1), Q(de, e);
        }
        function Q(e, t, n) {
          var r = Z(z++, 2);
          return (
            (r.t = e),
            r.__c ||
              ((r.__ = [
                n ? n(t) : de(void 0, t),
                function (e) {
                  var t = r.t(r.__[0], e);
                  r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}));
                },
              ]),
              (r.__c = B)),
            r.__
          );
        }
        function ee(e, n) {
          var r = Z(z++, 3);
          !t.__s && ue(r.__H, n) && ((r.__ = e), (r.u = n), B.__H.__h.push(r));
        }
        function te(e, n) {
          var r = Z(z++, 4);
          !t.__s && ue(r.__H, n) && ((r.__ = e), (r.u = n), B.__h.push(r));
        }
        function ne(e) {
          return (
            (W = 5),
            re(function () {
              return { current: e };
            }, [])
          );
        }
        function re(e, t) {
          var n = Z(z++, 7);
          return ue(n.__H, t)
            ? ((n.__V = e()), (n.u = t), (n.__h = e), n.__V)
            : n.__;
        }
        function oe(e, t) {
          return (
            (W = 8),
            re(function () {
              return e;
            }, t)
          );
        }
        function ie(e) {
          var t = B.context[e.__c],
            n = Z(z++, 9);
          return (
            (n.c = e),
            t ? (null == n.__ && ((n.__ = !0), t.sub(B)), t.props.value) : e.__
          );
        }
        function ae() {
          for (var e; (e = U.shift()); )
            if (e.__P)
              try {
                e.__H.__h.forEach(ce), e.__H.__h.forEach(se), (e.__H.__h = []);
              } catch (n) {
                (e.__H.__h = []), t.__e(n, e.__v);
              }
        }
        (t.__b = function (e) {
          (B = null), V && V(e);
        }),
          (t.__r = function (e) {
            $ && $(e), (z = 0);
            var t = (B = e.__c).__H;
            t &&
              (j === B
                ? ((t.__h = []),
                  (B.__h = []),
                  t.__.forEach(function (e) {
                    (e.__V = Y), (e.u = void 0);
                  }))
                : (t.__h.forEach(ce), t.__h.forEach(se), (t.__h = []))),
              (j = B);
          }),
          (t.diffed = function (e) {
            X && X(e);
            var n = e.__c;
            n &&
              n.__H &&
              (n.__H.__h.length &&
                ((1 !== U.push(n) && G === t.requestAnimationFrame) ||
                  (
                    (G = t.requestAnimationFrame) ||
                    function (e) {
                      var t,
                        n = function () {
                          clearTimeout(r),
                            le && cancelAnimationFrame(t),
                            setTimeout(e);
                        },
                        r = setTimeout(n, 100);
                      le && (t = requestAnimationFrame(n));
                    }
                  )(ae)),
              n.__H.__.forEach(function (e) {
                e.u && (e.__H = e.u),
                  e.__V !== Y && (e.__ = e.__V),
                  (e.u = void 0),
                  (e.__V = Y);
              })),
              (j = B = null);
          }),
          (t.__c = function (e, n) {
            n.some(function (e) {
              try {
                e.__h.forEach(ce),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || se(e);
                  }));
              } catch (r) {
                n.some(function (e) {
                  e.__h && (e.__h = []);
                }),
                  (n = []),
                  t.__e(r, e.__v);
              }
            }),
              q && q(e, n);
          }),
          (t.unmount = function (e) {
            K && K(e);
            var n,
              r = e.__c;
            r &&
              r.__H &&
              (r.__H.__.forEach(function (e) {
                try {
                  ce(e);
                } catch (e) {
                  n = e;
                }
              }),
              n && t.__e(n, r.__v));
          });
        var le = "function" == typeof requestAnimationFrame;
        function ce(e) {
          var t = B,
            n = e.__c;
          "function" == typeof n && ((e.__c = void 0), n()), (B = t);
        }
        function se(e) {
          var t = B;
          (e.__c = e.__()), (B = t);
        }
        function ue(e, t) {
          return (
            !e ||
            e.length !== t.length ||
            t.some(function (t, n) {
              return t !== e[n];
            })
          );
        }
        function de(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        r(6886), r(9529);
        function fe(e) {
          for (
            var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          throw Error(
            "[Immer] minified error nr: " +
              e +
              (n.length
                ? " " +
                  n
                    .map(function (e) {
                      return "'" + e + "'";
                    })
                    .join(",")
                : "") +
              ". Find the full error at: https://bit.ly/3cXEKWf"
          );
        }
        function pe(e) {
          return !!e && !!e[Qe];
        }
        function he(e) {
          return (
            !!e &&
            ((function (e) {
              if (!e || "object" != typeof e) return !1;
              var t = Object.getPrototypeOf(e);
              if (null === t) return !0;
              var n =
                Object.hasOwnProperty.call(t, "constructor") && t.constructor;
              return (
                n === Object ||
                ("function" == typeof n && Function.toString.call(n) === et)
              );
            })(e) ||
              Array.isArray(e) ||
              !!e[Je] ||
              !!e.constructor[Je] ||
              be(e) ||
              xe(e))
          );
        }
        function me(e, t, n) {
          void 0 === n && (n = !1),
            0 === ge(e)
              ? (n ? Object.keys : tt)(e).forEach(function (r) {
                  (n && "symbol" == typeof r) || t(r, e[r], e);
                })
              : e.forEach(function (n, r) {
                  return t(r, n, e);
                });
        }
        function ge(e) {
          var t = e[Qe];
          return t
            ? t.i > 3
              ? t.i - 4
              : t.i
            : Array.isArray(e)
            ? 1
            : be(e)
            ? 2
            : xe(e)
            ? 3
            : 0;
        }
        function ve(e, t) {
          return 2 === ge(e)
            ? e.has(t)
            : Object.prototype.hasOwnProperty.call(e, t);
        }
        function ye(e, t) {
          return 2 === ge(e) ? e.get(t) : e[t];
        }
        function we(e, t, n) {
          var r = ge(e);
          2 === r
            ? e.set(t, n)
            : 3 === r
            ? (e.delete(t), e.add(n))
            : (e[t] = n);
        }
        function _e(e, t) {
          return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
        }
        function be(e) {
          return Xe && e instanceof Map;
        }
        function xe(e) {
          return qe && e instanceof Set;
        }
        function De(e) {
          return e.o || e.t;
        }
        function ke(e) {
          if (Array.isArray(e)) return Array.prototype.slice.call(e);
          var t = nt(e);
          delete t[Qe];
          for (var n = tt(t), r = 0; r < n.length; r++) {
            var o = n[r],
              i = t[o];
            !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
              (i.get || i.set) &&
                (t[o] = {
                  configurable: !0,
                  writable: !0,
                  enumerable: i.enumerable,
                  value: e[o],
                });
          }
          return Object.create(Object.getPrototypeOf(e), t);
        }
        function Se(e, t) {
          return (
            void 0 === t && (t = !1),
            Ee(e) ||
              pe(e) ||
              !he(e) ||
              (ge(e) > 1 && (e.set = e.add = e.clear = e.delete = Ce),
              Object.freeze(e),
              t &&
                me(
                  e,
                  function (e, t) {
                    return Se(t, !0);
                  },
                  !0
                )),
            e
          );
        }
        function Ce() {
          fe(2);
        }
        function Ee(e) {
          return null == e || "object" != typeof e || Object.isFrozen(e);
        }
        function Ie(e) {
          var t = rt[e];
          return t || fe(18, e), t;
        }
        function Me() {
          return Ve;
        }
        function Ne(e, t) {
          t && (Ie("Patches"), (e.u = []), (e.s = []), (e.v = t));
        }
        function Te(e) {
          Oe(e), e.p.forEach(Ae), (e.p = null);
        }
        function Oe(e) {
          e === Ve && (Ve = e.l);
        }
        function Pe(e) {
          return (Ve = { p: [], l: Ve, h: e, m: !0, _: 0 });
        }
        function Ae(e) {
          var t = e[Qe];
          0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
        }
        function Re(e, t) {
          t._ = t.p.length;
          var n = t.p[0],
            r = void 0 !== e && e !== n;
          return (
            t.h.g || Ie("ES5").S(t, e, r),
            r
              ? (n[Qe].P && (Te(t), fe(4)),
                he(e) && ((e = Le(t, e)), t.l || Fe(t, e)),
                t.u && Ie("Patches").M(n[Qe].t, e, t.u, t.s))
              : (e = Le(t, n, [])),
            Te(t),
            t.u && t.v(t.u, t.s),
            e !== Ze ? e : void 0
          );
        }
        function Le(e, t, n) {
          if (Ee(t)) return t;
          var r = t[Qe];
          if (!r)
            return (
              me(
                t,
                function (o, i) {
                  return He(e, r, t, o, i, n);
                },
                !0
              ),
              t
            );
          if (r.A !== e) return t;
          if (!r.P) return Fe(e, r.t, !0), r.t;
          if (!r.I) {
            (r.I = !0), r.A._--;
            var o = 4 === r.i || 5 === r.i ? (r.o = ke(r.k)) : r.o;
            me(3 === r.i ? new Set(o) : o, function (t, i) {
              return He(e, r, o, t, i, n);
            }),
              Fe(e, o, !1),
              n && e.u && Ie("Patches").R(r, n, e.u, e.s);
          }
          return r.o;
        }
        function He(e, t, n, r, o, i) {
          if (pe(o)) {
            var a = Le(
              e,
              o,
              i && t && 3 !== t.i && !ve(t.D, r) ? i.concat(r) : void 0
            );
            if ((we(n, r, a), !pe(a))) return;
            e.m = !1;
          }
          if (he(o) && !Ee(o)) {
            if (!e.h.F && e._ < 1) return;
            Le(e, o), (t && t.A.l) || Fe(e, o);
          }
        }
        function Fe(e, t, n) {
          void 0 === n && (n = !1), e.h.F && e.m && Se(t, n);
        }
        function ze(e, t) {
          var n = e[Qe];
          return (n ? De(n) : e)[t];
        }
        function Be(e, t) {
          if (t in e)
            for (var n = Object.getPrototypeOf(e); n; ) {
              var r = Object.getOwnPropertyDescriptor(n, t);
              if (r) return r;
              n = Object.getPrototypeOf(n);
            }
        }
        function je(e) {
          e.P || ((e.P = !0), e.l && je(e.l));
        }
        function Ge(e) {
          e.o || (e.o = ke(e.t));
        }
        function We(e, t, n) {
          var r = be(t)
            ? Ie("MapSet").N(t, n)
            : xe(t)
            ? Ie("MapSet").T(t, n)
            : e.g
            ? (function (e, t) {
                var n = Array.isArray(e),
                  r = {
                    i: n ? 1 : 0,
                    A: t ? t.A : Me(),
                    P: !1,
                    I: !1,
                    D: {},
                    l: t,
                    t: e,
                    k: null,
                    o: null,
                    j: null,
                    C: !1,
                  },
                  o = r,
                  i = ot;
                n && ((o = [r]), (i = it));
                var a = Proxy.revocable(o, i),
                  l = a.revoke,
                  c = a.proxy;
                return (r.k = c), (r.j = l), c;
              })(t, n)
            : Ie("ES5").J(t, n);
          return (n ? n.A : Me()).p.push(r), r;
        }
        function Ue(e, t) {
          switch (t) {
            case 2:
              return new Map(e);
            case 3:
              return Array.from(e);
          }
          return ke(e);
        }
        var Ye,
          Ve,
          $e = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
          Xe = "undefined" != typeof Map,
          qe = "undefined" != typeof Set,
          Ke =
            "undefined" != typeof Proxy &&
            void 0 !== Proxy.revocable &&
            "undefined" != typeof Reflect,
          Ze = $e
            ? Symbol.for("immer-nothing")
            : (((Ye = {})["immer-nothing"] = !0), Ye),
          Je = $e ? Symbol.for("immer-draftable") : "__$immer_draftable",
          Qe = $e ? Symbol.for("immer-state") : "__$immer_state",
          et =
            ("undefined" != typeof Symbol && Symbol.iterator,
            "" + Object.prototype.constructor),
          tt =
            "undefined" != typeof Reflect && Reflect.ownKeys
              ? Reflect.ownKeys
              : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e)
                  );
                }
              : Object.getOwnPropertyNames,
          nt =
            Object.getOwnPropertyDescriptors ||
            function (e) {
              var t = {};
              return (
                tt(e).forEach(function (n) {
                  t[n] = Object.getOwnPropertyDescriptor(e, n);
                }),
                t
              );
            },
          rt = {},
          ot = {
            get: function (e, t) {
              if (t === Qe) return e;
              var n = De(e);
              if (!ve(n, t))
                return (function (e, t, n) {
                  var r,
                    o = Be(t, n);
                  return o
                    ? "value" in o
                      ? o.value
                      : null === (r = o.get) || void 0 === r
                      ? void 0
                      : r.call(e.k)
                    : void 0;
                })(e, n, t);
              var r = n[t];
              return e.I || !he(r)
                ? r
                : r === ze(e.t, t)
                ? (Ge(e), (e.o[t] = We(e.A.h, r, e)))
                : r;
            },
            has: function (e, t) {
              return t in De(e);
            },
            ownKeys: function (e) {
              return Reflect.ownKeys(De(e));
            },
            set: function (e, t, n) {
              var r = Be(De(e), t);
              if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
              if (!e.P) {
                var o = ze(De(e), t),
                  i = null == o ? void 0 : o[Qe];
                if (i && i.t === n) return (e.o[t] = n), (e.D[t] = !1), !0;
                if (_e(n, o) && (void 0 !== n || ve(e.t, t))) return !0;
                Ge(e), je(e);
              }
              return (
                (e.o[t] === n &&
                  "number" != typeof n &&
                  (void 0 !== n || t in e.o)) ||
                ((e.o[t] = n), (e.D[t] = !0), !0)
              );
            },
            deleteProperty: function (e, t) {
              return (
                void 0 !== ze(e.t, t) || t in e.t
                  ? ((e.D[t] = !1), Ge(e), je(e))
                  : delete e.D[t],
                e.o && delete e.o[t],
                !0
              );
            },
            getOwnPropertyDescriptor: function (e, t) {
              var n = De(e),
                r = Reflect.getOwnPropertyDescriptor(n, t);
              return r
                ? {
                    writable: !0,
                    configurable: 1 !== e.i || "length" !== t,
                    enumerable: r.enumerable,
                    value: n[t],
                  }
                : r;
            },
            defineProperty: function () {
              fe(11);
            },
            getPrototypeOf: function (e) {
              return Object.getPrototypeOf(e.t);
            },
            setPrototypeOf: function () {
              fe(12);
            },
          },
          it = {};
        me(ot, function (e, t) {
          it[e] = function () {
            return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
          };
        }),
          (it.deleteProperty = function (e, t) {
            return it.set.call(this, e, t, void 0);
          }),
          (it.set = function (e, t, n) {
            return ot.set.call(this, e[0], t, n, e[0]);
          });
        var at = (function () {
            function e(e) {
              var t = this;
              (this.g = Ke),
                (this.F = !0),
                (this.produce = function (e, n, r) {
                  if ("function" == typeof e && "function" != typeof n) {
                    var o = n;
                    n = e;
                    var i = t;
                    return function (e) {
                      var t = this;
                      void 0 === e && (e = o);
                      for (
                        var r = arguments.length,
                          a = Array(r > 1 ? r - 1 : 0),
                          l = 1;
                        l < r;
                        l++
                      )
                        a[l - 1] = arguments[l];
                      return i.produce(e, function (e) {
                        var r;
                        return (r = n).call.apply(r, [t, e].concat(a));
                      });
                    };
                  }
                  var a;
                  if (
                    ("function" != typeof n && fe(6),
                    void 0 !== r && "function" != typeof r && fe(7),
                    he(e))
                  ) {
                    var l = Pe(t),
                      c = We(t, e, void 0),
                      s = !0;
                    try {
                      (a = n(c)), (s = !1);
                    } finally {
                      s ? Te(l) : Oe(l);
                    }
                    return "undefined" != typeof Promise && a instanceof Promise
                      ? a.then(
                          function (e) {
                            return Ne(l, r), Re(e, l);
                          },
                          function (e) {
                            throw (Te(l), e);
                          }
                        )
                      : (Ne(l, r), Re(a, l));
                  }
                  if (!e || "object" != typeof e) {
                    if (
                      (void 0 === (a = n(e)) && (a = e),
                      a === Ze && (a = void 0),
                      t.F && Se(a, !0),
                      r)
                    ) {
                      var u = [],
                        d = [];
                      Ie("Patches").M(e, a, u, d), r(u, d);
                    }
                    return a;
                  }
                  fe(21, e);
                }),
                (this.produceWithPatches = function (e, n) {
                  if ("function" == typeof e)
                    return function (n) {
                      for (
                        var r = arguments.length,
                          o = Array(r > 1 ? r - 1 : 0),
                          i = 1;
                        i < r;
                        i++
                      )
                        o[i - 1] = arguments[i];
                      return t.produceWithPatches(n, function (t) {
                        return e.apply(void 0, [t].concat(o));
                      });
                    };
                  var r,
                    o,
                    i = t.produce(e, n, function (e, t) {
                      (r = e), (o = t);
                    });
                  return "undefined" != typeof Promise && i instanceof Promise
                    ? i.then(function (e) {
                        return [e, r, o];
                      })
                    : [i, r, o];
                }),
                "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                  this.setUseProxies(e.useProxies),
                "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                  this.setAutoFreeze(e.autoFreeze);
            }
            var t = e.prototype;
            return (
              (t.createDraft = function (e) {
                he(e) || fe(8),
                  pe(e) &&
                    (e = (function (e) {
                      return (
                        pe(e) || fe(22, e),
                        (function e(t) {
                          if (!he(t)) return t;
                          var n,
                            r = t[Qe],
                            o = ge(t);
                          if (r) {
                            if (!r.P && (r.i < 4 || !Ie("ES5").K(r)))
                              return r.t;
                            (r.I = !0), (n = Ue(t, o)), (r.I = !1);
                          } else n = Ue(t, o);
                          return (
                            me(n, function (t, o) {
                              (r && ye(r.t, t) === o) || we(n, t, e(o));
                            }),
                            3 === o ? new Set(n) : n
                          );
                        })(e)
                      );
                    })(e));
                var t = Pe(this),
                  n = We(this, e, void 0);
                return (n[Qe].C = !0), Oe(t), n;
              }),
              (t.finishDraft = function (e, t) {
                var n = (e && e[Qe]).A;
                return Ne(n, t), Re(void 0, n);
              }),
              (t.setAutoFreeze = function (e) {
                this.F = e;
              }),
              (t.setUseProxies = function (e) {
                e && !Ke && fe(20), (this.g = e);
              }),
              (t.applyPatches = function (e, t) {
                var n;
                for (n = t.length - 1; n >= 0; n--) {
                  var r = t[n];
                  if (0 === r.path.length && "replace" === r.op) {
                    e = r.value;
                    break;
                  }
                }
                n > -1 && (t = t.slice(n + 1));
                var o = Ie("Patches").$;
                return pe(e)
                  ? o(e, t)
                  : this.produce(e, function (e) {
                      return o(e, t);
                    });
              }),
              e
            );
          })(),
          lt = new at(),
          ct = lt.produce,
          st =
            (lt.produceWithPatches.bind(lt),
            lt.setAutoFreeze.bind(lt),
            lt.setUseProxies.bind(lt),
            lt.applyPatches.bind(lt),
            lt.createDraft.bind(lt),
            lt.finishDraft.bind(lt),
            ct),
          ut = (r(5940), r(7386)),
          dt = r.n(ut);
        const ft = "0",
          pt = 24,
          ht = 72,
          mt = {
            color: "#000",
            backgroundColor: "#a1b56c",
            dragBackgroundColor: "#a1b56c",
            borderColor: "#000",
          };
        var gt = r(758),
          vt = r.n(gt);
        const yt = "toastui-calendar-";
        function wt() {
          const e = [];
          for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
          return (
            n.forEach((t) => {
              t &&
                (vt()(t)
                  ? e.push(t)
                  : Object.keys(t).forEach((n) => {
                      t[n] && e.push(n);
                    }));
            }),
            e.map((e) => "".concat(yt).concat(e)).join(" ")
          );
        }
        function _t(e) {
          return "".concat(e, "%");
        }
        function bt(e, t) {
          const n = e.model.getColors();
          return Object.keys(mt).reduce((e, r) => {
            var o, i;
            const a = r;
            return (
              (e[a] =
                null !== (o = null !== (i = n[a]) && void 0 !== i ? i : t[a]) &&
                void 0 !== o
                  ? o
                  : mt[a]),
              e
            );
          }, {});
        }
        r(1372);
        const xt =
          /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
        function Dt() {
          throw new Error("This operation is not supported.");
        }
        function kt(e) {
          const t = (function (e) {
            const t = xt.exec(e);
            if (t) {
              const [, e, n, r, o, i, a, , l, c] = t;
              return {
                y: Number(e),
                M: Number(n) - 1,
                d: Number(r),
                h: Number(o),
                m: Number(i),
                s: Number(a),
                ms: Number(l) || 0,
                zoneInfo: c,
              };
            }
            return null;
          })(e);
          if (t && !t.zoneInfo) {
            const { y: e, M: n, d: r, h: o, m: i, s: a, ms: l } = t;
            return new Date(e, n, r, o, i, a, l);
          }
          return null;
        }
        class St {
          constructor() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const [r] = t;
            r instanceof Date
              ? (this.d = new Date(r.getTime()))
              : vt()(r) && 1 === t.length && (this.d = kt(r)),
              this.d || (this.d = new Date(...t));
          }
          setTimezoneOffset() {
            Dt();
          }
          setTimezoneName() {
            Dt();
          }
          clone() {
            return new St(this.d);
          }
          toDate() {
            return new Date(this.d.getTime());
          }
          toString() {
            return this.d.toString();
          }
        }
        [
          "getTime",
          "getTimezoneOffset",
          "getFullYear",
          "getMonth",
          "getDate",
          "getHours",
          "getMinutes",
          "getSeconds",
          "getMilliseconds",
          "getDay",
        ].forEach((e) => {
          St.prototype[e] = function () {
            return this.d[e](...arguments);
          };
        }),
          [
            "setTime",
            "setFullYear",
            "setMonth",
            "setDate",
            "setHours",
            "setMinutes",
            "setSeconds",
            "setMilliseconds",
          ].forEach((e) => {
            St.prototype[e] = function () {
              return this.d[e](...arguments);
            };
          });
        class Ct extends St {
          clone() {
            return new Ct(this.d);
          }
          getTimezoneOffset() {
            return 0;
          }
        }
        [
          "FullYear",
          "Month",
          "Date",
          "Hours",
          "Minutes",
          "Seconds",
          "Milliseconds",
          "Day",
        ].forEach((e) => {
          const t = "get".concat(e);
          Ct.prototype[t] = function () {
            return this.d["getUTC".concat(e)](...arguments);
          };
        }),
          [
            "FullYear",
            "Month",
            "Date",
            "Hours",
            "Minutes",
            "Seconds",
            "Milliseconds",
          ].forEach((e) => {
            const t = "set".concat(e);
            Ct.prototype[t] = function () {
              return this.d["setUTC".concat(e)](...arguments);
            };
          });
        const Et = "@toast-ui/calendar: ";
        class It extends Error {
          constructor(e) {
            super(
              ""
                .concat(Et)
                .concat("Invalid IANA Timezone Name", " - ")
                .concat(e)
            ),
              (this.name = "InvalidTimezoneNameError");
          }
        }
        class Mt extends Error {
          constructor(e) {
            super(
              "".concat(Et).concat("Invalid DateTime Format", " - ").concat(e)
            ),
              (this.name = "InvalidDateTimeFormatError");
          }
        }
        class Nt extends Error {
          constructor(e) {
            super("".concat(Et).concat("Invalid View Type", " - ").concat(e)),
              (this.name = "InvalidViewTypeError");
          }
        }
        const Tt = function (e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          console.warn("".concat(Et).concat(e), ...n);
        };
        var Ot = r(3929),
          Pt = r.n(Ot),
          At = r(1326),
          Rt = r.n(At),
          Lt = r(321),
          Ht = r.n(Lt),
          Ft = r(5758),
          zt = r.n(Ft);
        function Bt(e) {
          return Pt()(e) || null === e;
        }
        function jt(e) {
          return !Bt(e);
        }
        function Gt(e) {
          return "function" == typeof e;
        }
        let Wt = St;
        function Ut() {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return new Wt(...t);
        }
        function Yt(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new en();
          if (!Xt())
            return (
              Tt(
                "Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue."
              ),
              -t.getTimezoneOffset()
            );
          qt(e);
          const n = Zt(t, e),
            r = Jt(n);
          return Math.round((r.getTime() - t.getTime()) / 60 / 1e3);
        }
        const Vt = {},
          $t = {};
        function Xt() {
          var e, t, n;
          return Gt(
            null === (e = Intl) ||
              void 0 === e ||
              null === (t = e.DateTimeFormat) ||
              void 0 === t ||
              null === (n = t.prototype) ||
              void 0 === n
              ? void 0
              : n.formatToParts
          );
        }
        function qt(e) {
          if ($t[e]) return !0;
          try {
            return (
              Intl.DateTimeFormat("en-US", { timeZone: e }), ($t[e] = !0), !0
            );
          } catch {
            throw new It(e);
          }
        }
        const Kt = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
        function Zt(e, t) {
          const n = (function (e) {
            if (Vt[e]) return Vt[e];
            const t = new Intl.DateTimeFormat("en-US", {
              timeZone: e,
              hourCycle: "h23",
              hour12: !1,
              year: "numeric",
              month: "numeric",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
            });
            return (Vt[e] = t), t;
          })(t);
          return n.formatToParts(e.toDate()).reduce((e, t) => {
            const n = Kt[t.type];
            return jt(n) && (e[n] = parseInt(t.value, 10)), e;
          }, []);
        }
        function Jt(e) {
          const [t, n, r, o, i, a] = e,
            l = n - 1;
          return new Date(Date.UTC(t, l, r, o % 24, i, a));
        }
        function Qt(e) {
          return (-new Date().getTimezoneOffset() - e) * wn;
        }
        class en {
          constructor() {
            var e, t, n;
            (n = null),
              (t = "tzOffset") in (e = this)
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = n);
            for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
              o[i] = arguments[i];
            o[0] instanceof en
              ? (this.d = Ut(o[0].getTime()))
              : (this.d = Ut(...o));
          }
          toString() {
            return this.d.toString();
          }
          addFullYear(e) {
            return this.setFullYear(this.getFullYear() + e), this;
          }
          addMonth(e) {
            return this.setMonth(this.getMonth() + e), this;
          }
          addDate(e) {
            return this.setDate(this.getDate() + e), this;
          }
          addHours(e) {
            return this.setHours(this.getHours() + e), this;
          }
          addMinutes(e) {
            return this.setMinutes(this.getMinutes() + e), this;
          }
          addSeconds(e) {
            return this.setSeconds(this.getSeconds() + e), this;
          }
          addMilliseconds(e) {
            return this.setMilliseconds(this.getMilliseconds() + e), this;
          }
          setWithRaw(e, t, n, r, o, i, a) {
            return this.setFullYear(e, t, n), this.setHours(r, o, i, a), this;
          }
          toDate() {
            return this.d.toDate();
          }
          valueOf() {
            return this.getTime();
          }
          getTimezoneOffset() {
            var e;
            return null !== (e = this.tzOffset) && void 0 !== e
              ? e
              : this.d.getTimezoneOffset();
          }
          getTime() {
            return this.d.getTime();
          }
          getFullYear() {
            return this.d.getFullYear();
          }
          getMonth() {
            return this.d.getMonth();
          }
          getDate() {
            return this.d.getDate();
          }
          getHours() {
            return this.d.getHours();
          }
          getMinutes() {
            return this.d.getMinutes();
          }
          getSeconds() {
            return this.d.getSeconds();
          }
          getMilliseconds() {
            return this.d.getMilliseconds();
          }
          getDay() {
            return this.d.getDay();
          }
          setTime(e) {
            return this.d.setTime(e);
          }
          setFullYear(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.getMonth(),
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.getDate();
            return this.d.setFullYear(e, t, n);
          }
          setMonth(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.getDate();
            return this.d.setMonth(e, t);
          }
          setDate(e) {
            return this.d.setDate(e);
          }
          setHours(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.getMinutes(),
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.getSeconds(),
              r =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : this.getMilliseconds();
            return this.d.setHours(e, t, n, r);
          }
          setMinutes(e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.getSeconds(),
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.getMilliseconds();
            return this.d.setMinutes(e, t, n);
          }
          setSeconds(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : this.getMilliseconds();
            return this.d.setSeconds(e, t);
          }
          setMilliseconds(e) {
            return this.d.setMilliseconds(e);
          }
          tz(e) {
            if ("Local" === e) return new en(this.getTime());
            const t = vt()(e) ? Yt(e, this) : e,
              n = new en(this.getTime() - Qt(t));
            return (n.tzOffset = t), n;
          }
          local(e) {
            if (jt(e)) {
              const t = vt()(e) ? Yt(e, this) : e;
              return new en(this.getTime() + Qt(t));
            }
            return new en(
              this.getTime() + (jt(this.tzOffset) ? Qt(this.tzOffset) : 0)
            );
          }
        }
        function tn(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return zt()(t)
            ? (Object.keys(t).forEach((n) => {
                const r = n,
                  o = n;
                Array.isArray(t[o]) ||
                !zt()(e[r]) ||
                !zt()(t[o]) ||
                t[o] instanceof en
                  ? (e[r] = t[o])
                  : (e[r] = tn(e[r], t[o]));
              }),
              e)
            : e;
        }
        function nn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        const rn = [
          "top",
          "left",
          "width",
          "height",
          "hasCollide",
          "extraSpace",
          "hidden",
          "exceedLeft",
          "exceedRight",
          "croppedStart",
          "croppedEnd",
          "goingDurationHeight",
          "modelDurationHeight",
          "comingDurationHeight",
        ];
        class on {
          constructor(e) {
            nn(this, "top", 0),
              nn(this, "left", 0),
              nn(this, "width", 0),
              nn(this, "height", 0),
              nn(this, "hasCollide", !1),
              nn(this, "extraSpace", 0),
              nn(this, "hidden", !1),
              nn(this, "exceedLeft", !1),
              nn(this, "exceedRight", !1),
              nn(this, "croppedStart", !1),
              nn(this, "croppedEnd", !1),
              nn(this, "goingDurationHeight", 0),
              nn(this, "modelDurationHeight", 100),
              nn(this, "comingDurationHeight", 0),
              (this.model = e);
          }
          getUIProps() {
            return (function (e) {
              for (
                var t = arguments.length,
                  n = new Array(t > 1 ? t - 1 : 0),
                  r = 1;
                r < t;
                r++
              )
                n[r - 1] = arguments[r];
              return n.reduce(
                (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
                {}
              );
            })(this, ...rn);
          }
          setUIProps(e) {
            Object.assign(this, e);
          }
          getStarts() {
            return this.renderStarts
              ? this.renderStarts
              : this.model.getStarts();
          }
          getEnds() {
            return this.renderEnds ? this.renderEnds : this.model.getEnds();
          }
          cid() {
            return this.model.cid();
          }
          valueOf() {
            return this.model;
          }
          duration() {
            return this.model.duration();
          }
          collidesWith(e) {
            let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return Gn({
              start: this.getStarts().getTime(),
              end: this.getEnds().getTime(),
              targetStart: e.getStarts().getTime(),
              targetEnd: e.getEnds().getTime(),
              goingDuration: this.model.goingDuration,
              comingDuration: this.model.comingDuration,
              targetGoingDuration: e.valueOf().goingDuration,
              targetComingDuration: e.valueOf().comingDuration,
              usingTravelTime: t,
            });
          }
          clone() {
            const e = this.getUIProps(),
              t = new on(this.model);
            return (
              t.setUIProps(e),
              this.renderStarts && (t.renderStarts = new en(this.renderStarts)),
              this.renderEnds && (t.renderEnds = new en(this.renderEnds)),
              t
            );
          }
        }
        function an(e, t) {
          const n = String(e),
            r = String(t);
          return n === r ? 0 : n > r ? 1 : -1;
        }
        var ln = {
          bsearch: function (e, t, n, r) {
            let o,
              i,
              a,
              l = 0,
              c = e.length - 1;
            for (r = r || an; l <= c; )
              if (
                ((o = ((l + c) / 2) | 0),
                (i = n ? n(e[o]) : e[o]),
                (a = r(i, t)),
                a < 0)
              )
                l = o + 1;
              else {
                if (!(a > 0)) return o;
                c = o - 1;
              }
            return ~c;
          },
          compare: {
            event: {
              asc: function (e, t) {
                const n = e instanceof on ? e.model : e,
                  r = t instanceof on ? t.model : t,
                  o = (function (e, t) {
                    return e !== t ? (e ? -1 : 1) : 0;
                  })(
                    n.isAllday || n.hasMultiDates,
                    r.isAllday || r.hasMultiDates
                  );
                if (o) return o;
                const i = En(e.getStarts(), t.getStarts());
                if (i) return i;
                const a = e.duration(),
                  l = t.duration();
                return a < l ? 1 : a > l ? -1 : n.cid() - r.cid();
              },
            },
            num: {
              asc: function (e, t) {
                return Number(e) - Number(t);
              },
            },
          },
        };
        function cn(e) {
          return e[e.length - 1];
        }
        function sn(e, t) {
          for (let n = e.length - 1; n >= 0; n -= 1) if (t(e[n])) return n;
          return -1;
        }
        function un(e, t) {
          return e > 0
            ? Array.from({ length: e }, () =>
                Array.isArray(t) ? t.slice() : t
              )
            : [];
        }
        let dn;
        !(function (e) {
          (e[(e.SUN = 0)] = "SUN"),
            (e[(e.MON = 1)] = "MON"),
            (e[(e.TUE = 2)] = "TUE"),
            (e[(e.WED = 3)] = "WED"),
            (e[(e.THU = 4)] = "THU"),
            (e[(e.FRI = 5)] = "FRI"),
            (e[(e.SAT = 6)] = "SAT");
        })(dn || (dn = {}));
        const fn = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/,
          pn = {},
          hn = [24, 60, 60, 1e3];
        function mn(e, t) {
          let n = "",
            r = 0;
          if (String(e).length > t) return String(e);
          for (; r < t - 1; r += 1) n += "0";
          return (n + e).slice(-1 * t);
        }
        function gn(e) {
          let t = e.getHours();
          return 0 === t && (t = 12), t > 12 && (t %= 12), t;
        }
        const vn = {
            YYYYMMDD: (e) =>
              [
                e.getFullYear(),
                mn(e.getMonth() + 1, 2),
                mn(e.getDate(), 2),
              ].join(""),
            YYYY: (e) => String(e.getFullYear()),
            MM: (e) => mn(e.getMonth() + 1, 2),
            DD: (e) => mn(e.getDate(), 2),
            "HH:mm": function (e) {
              const t = e.getHours(),
                n = e.getMinutes();
              return "".concat(mn(t, 2), ":").concat(mn(n, 2));
            },
            "hh:mm": function (e) {
              const t = gn(e),
                n = e.getMinutes();
              return "".concat(mn(t, 2), ":").concat(mn(n, 2));
            },
            hh(e) {
              const t = gn(e);
              return String(t);
            },
            tt: (e) => (e.getHours() < 12 ? "am" : "pm"),
          },
          yn = 864e5,
          wn = 6e4,
          _n = 20 * wn,
          bn = 18e5;
        function xn(e, t) {
          let n = t;
          return (
            Object.entries(vn).forEach((t) => {
              let [r, o] = t;
              n = n.replace(r, o(e));
            }),
            n
          );
        }
        function Dn(e, t) {
          const n = pn,
            r = e + t;
          if (n[r]) return n[r];
          const o = (function (e, t, n) {
            const r = { date: 0, hour: 1, minute: 2, second: 3 };
            return !(e in r) || isNaN(t)
              ? 0
              : [t].concat(hn.slice(r[e])).reduce(n);
          })(e, t, (e, t) => e * t);
          return o ? ((n[r] = o), n[r]) : 0;
        }
        function kn(e) {
          const t = e ? new en(e) : new en();
          return t.setHours(0, 0, 0, 0), t;
        }
        function Sn(e, t, n) {
          const r = e.getTime(),
            o = t.getTime(),
            i = new en(e),
            a = [];
          let l = r;
          for (; l <= o && o >= i.getTime(); )
            a.push(new en(i)), (l += n), i.addMilliseconds(n);
          return a;
        }
        function Cn(e) {
          return new en(e);
        }
        function En(e, t) {
          const n = e.getTime(),
            r = t.getTime();
          return n < r ? -1 : n > r ? 1 : 0;
        }
        function In(e, t) {
          return (
            (function (e, t) {
              return (
                (function (e, t) {
                  return e.getFullYear() === t.getFullYear();
                })(e, t) && e.getMonth() === t.getMonth()
              );
            })(e, t) && e.getDate() === t.getDate()
          );
        }
        function Mn(e, t) {
          return 1 === En(e, t) ? e : t;
        }
        function Nn(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
          const n = e.match(fn);
          let r, o, i;
          if (!n) throw new Mt(e);
          if (e.length > 8) {
            r = ~e.indexOf("/") ? "/" : "-";
            const t = n.splice(1);
            (o = t[0].split(r)), (i = t[1] ? t[1].split(":") : [0, 0, 0]);
          } else {
            const [e] = n;
            (o = [e.substr(0, 4), e.substr(4, 2), e.substr(6, 2)]),
              (i = [0, 0, 0]);
          }
          return new en().setWithRaw(
            Number(o[0]),
            Number(o[1]) + t,
            Number(o[2]),
            Number(i[0]),
            Number(i[1]),
            Number(i[2]),
            0
          );
        }
        function Tn(e) {
          const t = e ? new en(e) : new en();
          return t.setHours(23, 59, 59, 999), t;
        }
        function On(e) {
          return e === dn.SUN || e === dn.SAT;
        }
        function Pn(e) {
          return e === dn.SUN;
        }
        function An(e) {
          return e === dn.SAT;
        }
        function Rn(e) {
          const t = new en(e);
          return t.setDate(1), t.setHours(0, 0, 0, 0), t;
        }
        function Ln(e, t, n, r) {
          const o = 100 / e,
            i = e > 5 ? 100 / (e - 1) : o;
          let a = 0;
          const l = dt()(n, 7).concat(dt()(e)).slice(0, 7);
          t = !r && t;
          const c = l.map((n) => {
              let r = t ? i : o;
              e > 5 && t && On(n) && (r = i / 2);
              const l = { width: r, left: a };
              return (a += r), l;
            }),
            { length: s } = c,
            u = un(s, un(s, 0));
          return (
            c.forEach((e, t) => {
              let { width: n } = e;
              for (let e = 0; e <= t; e += 1)
                for (let r = t; r < s; r += 1) u[e][r] += n;
            }),
            (u[0][s - 1] = 100),
            { rowStyleInfo: c, cellWidthMap: u.map((e) => e.map(_t)) }
          );
        }
        function Hn(e, t) {
          const n = Cn(e);
          return n.setMilliseconds(e.getMilliseconds() + t), n;
        }
        function Fn(e, t) {
          const n = Cn(e);
          return n.setMinutes(e.getMinutes() + t), n;
        }
        function zn(e, t) {
          const n = Cn(e);
          return n.setHours(...t.split(":").map(Number)), n;
        }
        function Bn(e, t) {
          const n = Cn(e);
          return n.setDate(e.getDate() + t), n;
        }
        function jn(e, t) {
          const n = new en(
              e.getFullYear(),
              e.getMonth(),
              e.getDate()
            ).getTime(),
            r = new en(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
          return Math.round((n - r) / yn);
        }
        function Gn(e) {
          let {
            start: t,
            end: n,
            targetStart: r,
            targetEnd: o,
            goingDuration: i,
            comingDuration: a,
            targetGoingDuration: l,
            targetComingDuration: c,
            usingTravelTime: s,
          } = e;
          return (
            Math.abs(n - t) < _n && (n += _n),
            Math.abs(n - t) < _n && (n += _n),
            s &&
              ((t -= Dn("minute", i)),
              (n += Dn("minute", a)),
              (r -= Dn("minute", l)),
              (o += Dn("minute", c))),
            (function (e, t, n, r) {
              return (n > e && n < t) || (r > e && r < t) || (n <= e && r >= t);
            })(t, n, r, o)
          );
        }
        const Wn = (function () {
          const e = (function () {
            let e = 0;
            return { next: () => ((e += 1), e) };
          })();
          return () => e.next();
        })();
        function Un(e) {
          return e.__fe_id || (e.__fe_id = Wn()), e.__fe_id;
        }
        function Yn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        class Vn {
          constructor() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            Yn(this, "id", ""),
              Yn(this, "calendarId", ""),
              Yn(this, "title", ""),
              Yn(this, "body", ""),
              Yn(this, "isAllday", !1),
              Yn(this, "start", new en()),
              Yn(this, "end", new en()),
              Yn(this, "goingDuration", 0),
              Yn(this, "comingDuration", 0),
              Yn(this, "location", ""),
              Yn(this, "attendees", []),
              Yn(this, "category", "time"),
              Yn(this, "dueDateClass", ""),
              Yn(this, "recurrenceRule", ""),
              Yn(this, "state", "Busy"),
              Yn(this, "isVisible", !0),
              Yn(this, "isPending", !1),
              Yn(this, "isFocused", !1),
              Yn(this, "isReadOnly", !1),
              Yn(this, "isPrivate", !1),
              Yn(this, "customStyle", {}),
              Yn(this, "raw", null),
              Yn(this, "hasMultiDates", !1),
              Un(this),
              this.init(e);
          }
          init() {
            let {
              id: e = "",
              calendarId: t = "",
              title: n = "",
              body: r = "",
              isAllday: o = !1,
              start: i = new en(),
              end: a = new en(),
              goingDuration: l = 0,
              comingDuration: c = 0,
              location: s = "",
              attendees: u = [],
              category: d = "time",
              dueDateClass: f = "",
              recurrenceRule: p = "",
              state: h = "Busy",
              isVisible: m = !0,
              isPending: g = !1,
              isFocused: v = !1,
              isReadOnly: y = !1,
              isPrivate: w = !1,
              color: _,
              backgroundColor: b,
              dragBackgroundColor: x,
              borderColor: D,
              customStyle: k = {},
              raw: S = null,
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {};
            (this.id = e),
              (this.calendarId = t),
              (this.title = n),
              (this.body = r),
              (this.isAllday = "allday" === d || o),
              (this.goingDuration = l),
              (this.comingDuration = c),
              (this.location = s),
              (this.attendees = u),
              (this.category = d),
              (this.dueDateClass = f),
              (this.recurrenceRule = p),
              (this.state = h),
              (this.isVisible = m),
              (this.isPending = g),
              (this.isFocused = v),
              (this.isReadOnly = y),
              (this.isPrivate = w),
              (this.color = _),
              (this.backgroundColor = b),
              (this.dragBackgroundColor = x),
              (this.borderColor = D),
              (this.customStyle = k),
              (this.raw = S),
              this.isAllday
                ? this.setAlldayPeriod(i, a)
                : this.setTimePeriod(i, a),
              ("milestone" !== d && "task" !== d) ||
                (this.start = new en(this.end));
          }
          setAlldayPeriod(e, t) {
            let n, r;
            (n = vt()(e) ? Nn(e.substring(0, 10)) : new en(e || Date.now())),
              (r = vt()(t) ? Nn(t.substring(0, 10)) : new en(t || this.start)),
              (this.start = n),
              this.start.setHours(0, 0, 0),
              (this.end = r || new en(this.start)),
              this.end.setHours(23, 59, 59);
          }
          setTimePeriod(e, t) {
            (this.start = new en(e || Date.now())),
              (this.end = new en(t || this.start)),
              t || this.end.setMinutes(this.end.getMinutes() + 30),
              (this.hasMultiDates =
                this.end.getTime() - this.start.getTime() > yn);
          }
          getStarts() {
            return this.start;
          }
          getEnds() {
            return this.end;
          }
          cid() {
            return Un(this);
          }
          equals(e) {
            return (
              this.id === e.id &&
              this.title === e.title &&
              this.body === e.body &&
              this.isAllday === e.isAllday &&
              0 === En(this.getStarts(), e.getStarts()) &&
              0 === En(this.getEnds(), e.getEnds()) &&
              this.color === e.color &&
              this.backgroundColor === e.backgroundColor &&
              this.dragBackgroundColor === e.dragBackgroundColor &&
              this.borderColor === e.borderColor
            );
          }
          duration() {
            const e = Number(this.getStarts()),
              t = Number(this.getEnds());
            let n;
            return (
              (n = this.isAllday ? Number(Tn(t)) - Number(kn(e)) : t - e), n
            );
          }
          valueOf() {
            return this;
          }
          collidesWith(e) {
            let t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return (
              (e = e instanceof on ? e.model : e),
              Gn({
                start: Number(this.getStarts()),
                end: Number(this.getEnds()),
                targetStart: Number(e.getStarts()),
                targetEnd: Number(e.getEnds()),
                goingDuration: this.goingDuration,
                comingDuration: this.comingDuration,
                targetGoingDuration: e.goingDuration,
                targetComingDuration: e.comingDuration,
                usingTravelTime: t,
              })
            );
          }
          toEventObject() {
            return {
              id: this.id,
              calendarId: this.calendarId,
              title: this.title,
              body: this.body,
              isAllday: this.isAllday,
              start: this.start,
              end: this.end,
              goingDuration: this.goingDuration,
              comingDuration: this.comingDuration,
              location: this.location,
              attendees: this.attendees,
              category: this.category,
              dueDateClass: this.dueDateClass,
              recurrenceRule: this.recurrenceRule,
              state: this.state,
              isVisible: this.isVisible,
              isPending: this.isPending,
              isFocused: this.isFocused,
              isReadOnly: this.isReadOnly,
              isPrivate: this.isPrivate,
              color: this.color,
              backgroundColor: this.backgroundColor,
              dragBackgroundColor: this.dragBackgroundColor,
              borderColor: this.borderColor,
              customStyle: this.customStyle,
              raw: this.raw,
            };
          }
          getColors() {
            return {
              color: this.color,
              backgroundColor: this.backgroundColor,
              dragBackgroundColor: this.dragBackgroundColor,
              borderColor: this.borderColor,
            };
          }
        }
        function $n(e) {
          let { model: t } = e;
          const { category: n, isAllday: r, hasMultiDates: o } = t;
          return "time" === n && !r && !o;
        }
        Yn(Vn, "schema", { required: ["title"], dateRange: ["start", "end"] });
        class Xn {
          constructor(e) {
            var t, n, r;
            (t = this),
              (n = "internalMap"),
              (r = new Map()),
              n in t
                ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = r),
              Gt(e) && (this.getItemID = e);
          }
          static and() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const { length: r } = t;
            return (e) => {
              for (let n = 0; n < r; n += 1) if (!t[n].call(null, e)) return !1;
              return !0;
            };
          }
          static or() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            const { length: r } = t;
            return r
              ? (e) => {
                  let n = t[0].call(null, e);
                  for (let o = 1; o < r; o += 1) n = n || t[o].call(null, e);
                  return n;
                }
              : () => !1;
          }
          getItemID(e) {
            var t;
            return null !== (t = null == e ? void 0 : e._id) && void 0 !== t
              ? t
              : "";
          }
          getFirstItem() {
            return this.internalMap.values().next().value;
          }
          add() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            return (
              t.forEach((e) => {
                const t = this.getItemID(e);
                this.internalMap.set(t, e);
              }),
              this
            );
          }
          remove() {
            const e = [];
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              n.forEach((t) => {
                const n = vt()(t) || Ht()(t) ? t : this.getItemID(t);
                this.internalMap.has(n) &&
                  (e.push(this.internalMap.get(n)), this.internalMap.delete(n));
              }),
              1 === e.length ? e[0] : e
            );
          }
          has(e) {
            const t = vt()(e) || Ht()(e) ? e : this.getItemID(e);
            return this.internalMap.has(t);
          }
          get(e) {
            var t;
            const n = vt()(e) || Ht()(e) ? e : this.getItemID(e);
            return null !== (t = this.internalMap.get(n)) && void 0 !== t
              ? t
              : null;
          }
          doWhenHas(e, t) {
            const n = this.internalMap.get(e);
            Bt(n) || t(n);
          }
          filter(e) {
            const t = new Xn();
            return (
              this.hasOwnProperty("getItemID") &&
                (t.getItemID = this.getItemID),
              this.internalMap.forEach((n) => {
                !0 === e(n) && t.add(n);
              }),
              t
            );
          }
          groupBy(e) {
            const t = {};
            return (
              this.internalMap.forEach((n) => {
                var r, o;
                let i = Gt(e) ? e(n) : n[e];
                Gt(i) && (i = i.call(n)),
                  (null !== (o = t[(r = i)]) && void 0 !== o) ||
                    (t[r] = new Xn(this.getItemID)),
                  t[i].add(n);
              }),
              t
            );
          }
          find(e) {
            let t = null;
            const n = this.internalMap.values();
            let r = n.next();
            for (; !1 === r.done; ) {
              if (e(r.value)) {
                t = r.value;
                break;
              }
              r = n.next();
            }
            return t;
          }
          sort(e) {
            return this.toArray().sort(e);
          }
          each(e) {
            const t = this.internalMap.entries();
            let n = t.next();
            for (; !1 === n.done; ) {
              const [r, o] = n.value;
              if (!1 === e(o, r)) break;
              n = t.next();
            }
          }
          clear() {
            this.internalMap.clear();
          }
          toArray() {
            return Array.from(this.internalMap.values());
          }
          get size() {
            return this.internalMap.size;
          }
        }
        function qn() {
          const e = new Xn((e) => e.cid());
          return arguments.length && e.add(...arguments), e;
        }
        function Kn(e, t) {
          return Sn(kn(e), Tn(t), yn);
        }
        function Zn(e) {
          const { model: t } = e;
          return (n = t).isAllday ||
            ("time" === n.category && Number(n.end) - Number(n.start) > yn)
            ? "allday"
            : t.category;
          var n;
        }
        function Jn(e, t) {
          Kn(t.getStarts(), t.getEnds()).forEach((n) => {
            const r = xn(n, "YYYYMMDD");
            (e[r] = e[r] || []).push(t.cid());
          });
        }
        function Qn(e, t) {
          const n = t.cid();
          Object.values(e).forEach((e) => {
            const t = e.indexOf(n);
            ~t && e.splice(t, 1);
          });
        }
        function er(e, t) {
          return (function (e, t) {
            return e.events.add(t), Jn(e.idsOfDay, t), t;
          })(e, new Vn(t));
        }
        function tr() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return { calendar: { calendars: e, events: qn(), idsOfDay: {} } };
        }
        function nr(e) {
          return {
            createEvents: (t) =>
              e(
                st((e) => {
                  !(function (e) {
                    (arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : []
                    ).map((t) => er(e, t));
                  })(e.calendar, t);
                })
              ),
            updateEvent: (t) => {
              let { event: n, eventData: r } = t;
              return e(
                st((e) => {
                  !(function (e, t, n, r) {
                    const { idsOfDay: o } = e,
                      i = e.events.find((e) =>
                        (function (e, t, n) {
                          return e.id === t && e.calendarId === n;
                        })(e, t, n)
                      );
                    !!i && (i.init({ ...i, ...r }), Qn(o, i), Jn(o, i));
                  })(e.calendar, n.id, n.calendarId, r);
                })
              );
            },
            deleteEvent: (t) =>
              e(
                st((e) => {
                  !(function (e, t) {
                    Qn(e.idsOfDay, t), e.events.remove(t);
                  })(e.calendar, t);
                })
              ),
            clearEvents: () =>
              e(
                st((e) => {
                  var t;
                  ((t = e.calendar).idsOfDay = {}), t.events.clear();
                })
              ),
            setCalendars: (t) =>
              e(
                st((e) => {
                  e.calendar.calendars = t;
                })
              ),
            setCalendarColor: (t, n) =>
              e(
                st((e) => {
                  const r = e.calendar.calendars.map((e) =>
                      e.id === t ? { ...e, ...n } : e
                    ),
                    o = qn(
                      ...e.calendar.events.toArray().map((e) => {
                        var r, o, i, a;
                        e.calendarId === t &&
                          ((e.color =
                            null !== (r = n.color) && void 0 !== r
                              ? r
                              : e.color),
                          (e.backgroundColor =
                            null !== (o = n.backgroundColor) && void 0 !== o
                              ? o
                              : e.backgroundColor),
                          (e.borderColor =
                            null !== (i = n.borderColor) && void 0 !== i
                              ? i
                              : e.borderColor),
                          (e.dragBackgroundColor =
                            null !== (a = n.dragBackgroundColor) && void 0 !== a
                              ? a
                              : e.dragBackgroundColor));
                        return e;
                      })
                    );
                  (e.calendar.calendars = r), (e.calendar.events = o);
                })
              ),
            setCalendarVisibility: (t, n) =>
              e(
                st((e) => {
                  const r = e.calendar.events.toArray();
                  e.calendar.events = qn(
                    ...r.map(
                      (e) => (t.includes(e.calendarId) && (e.isVisible = n), e)
                    )
                  );
                })
              ),
          };
        }
        let rr;
        function or() {
          return {
            dnd: {
              draggingItemType: null,
              draggingState: rr.IDLE,
              initX: null,
              initY: null,
              x: null,
              y: null,
              draggingEventUIModel: null,
            },
          };
        }
        function ir(e) {
          return {
            initDrag: (t) => {
              e(
                st((e) => {
                  e.dnd = { ...e.dnd, ...t, draggingState: rr.INIT };
                })
              );
            },
            setDragging: (t) => {
              e(
                st((e) => {
                  e.dnd = { ...e.dnd, ...t, draggingState: rr.DRAGGING };
                })
              );
            },
            cancelDrag: () => {
              e(
                st((e) => {
                  (e.dnd = or().dnd), (e.dnd.draggingState = rr.CANCELED);
                })
              );
            },
            reset: () => {
              e(
                st((e) => {
                  e.dnd = or().dnd;
                })
              );
            },
            setDraggingEventUIModel: (t) => {
              e(
                st((e) => {
                  var n;
                  e.dnd.draggingEventUIModel =
                    null !== (n = null == t ? void 0 : t.clone()) &&
                    void 0 !== n
                      ? n
                      : null;
                })
              );
            },
          };
        }
        function ar(e) {
          return {
            setGridSelection: (t, n) => {
              e(
                st((e) => {
                  e.gridSelection[t] = n;
                })
              );
            },
            addGridSelection: (t, n) => {
              e(
                st((e) => {
                  "dayGridMonth" === t &&
                    n &&
                    ((e.gridSelection.accumulated[t] = [
                      ...e.gridSelection.accumulated[t],
                      n,
                    ]),
                    (e.gridSelection.dayGridMonth = null));
                })
              );
            },
            clearAll: () =>
              e(
                st((e) => {
                  e.gridSelection = {
                    dayGridMonth: null,
                    dayGridWeek: null,
                    timeGrid: null,
                    accumulated: { dayGridMonth: [] },
                  };
                })
              ),
          };
        }
        !(function (e) {
          (e[(e.IDLE = 0)] = "IDLE"),
            (e[(e.INIT = 1)] = "INIT"),
            (e[(e.DRAGGING = 2)] = "DRAGGING"),
            (e[(e.CANCELED = 3)] = "CANCELED");
        })(rr || (rr = {}));
        const lr = 3;
        function cr(e, t, n) {
          return Object.keys(e).reduce(
            (n, r) => (r === t ? n : n - e[r].height - lr),
            n
          );
        }
        function sr(e) {
          return {
            setLastPanelType: (t) => {
              e(
                st((e) => {
                  (e.weekViewLayout.lastPanelType = t),
                    t &&
                      (e.weekViewLayout.dayGridRows[t].height = cr(
                        e.weekViewLayout.dayGridRows,
                        t,
                        e.layout
                      ));
                })
              );
            },
            updateLayoutHeight: (t) =>
              e(
                st((e) => {
                  const { lastPanelType: n } = e.weekViewLayout;
                  (e.layout = t),
                    n &&
                      (e.weekViewLayout.dayGridRows[n].height = cr(
                        e.weekViewLayout.dayGridRows,
                        n,
                        t
                      ));
                })
              ),
            updateDayGridRowHeight: (t) => {
              let { rowName: n, height: r } = t;
              return e(
                st((e) => {
                  const { lastPanelType: t } = e.weekViewLayout;
                  (e.weekViewLayout.dayGridRows[n] = { height: r }),
                    t &&
                      (e.weekViewLayout.dayGridRows[t].height = cr(
                        e.weekViewLayout.dayGridRows,
                        t,
                        e.layout
                      ));
                })
              );
            },
            updateDayGridRowHeightByDiff: (t) => {
              let { rowName: n, diff: r } = t;
              return e(
                st((e) => {
                  var t, o, i;
                  const { lastPanelType: a } = e.weekViewLayout,
                    l =
                      null !==
                        (t =
                          null === (o = e.weekViewLayout.dayGridRows) ||
                          void 0 === o ||
                          null === (i = o[n]) ||
                          void 0 === i
                            ? void 0
                            : i.height) && void 0 !== t
                        ? t
                        : ht;
                  (e.weekViewLayout.dayGridRows[n] = { height: l + r }),
                    a &&
                      (e.weekViewLayout.dayGridRows[a].height = cr(
                        e.weekViewLayout.dayGridRows,
                        a,
                        e.layout
                      ));
                })
              );
            },
          };
        }
        function ur(e) {
          return e.charAt(0).toUpperCase() + e.slice(1);
        }
        const dr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
          fr = (e) => dr[e];
        function pr(e, t) {
          return e.map((e) => {
            const n = e.getDay(),
              r = t.length > 0 ? t[n] : ur(fr(n));
            return {
              date: e.getDate(),
              day: e.getDay(),
              dayName: r,
              isToday: !0,
              renderDate: "date",
              dateInstance: e,
            };
          });
        }
        function hr() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            startDayOfWeek: dn.SUN,
            dayNames: [],
            narrowWeekend: !1,
            workweek: !1,
            showNowIndicator: !0,
            showTimezoneCollapseButton: !1,
            timezonesCollapsed: !1,
            hourStart: 0,
            hourEnd: 24,
            eventView: !0,
            taskView: !0,
            ...e,
          };
        }
        function mr() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return { zones: [], ...e };
        }
        function gr() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = {
            dayNames: [],
            visibleWeeksCount: 0,
            workweek: !1,
            narrowWeekend: !1,
            startDayOfWeek: dn.SUN,
            isAlways6Weeks: !0,
            visibleEventCount: 6,
            ...e,
          };
          return 0 === t.dayNames.length && (t.dayNames = dr.slice()), t;
        }
        function vr(e) {
          return Rt()(e)
            ? { enableDblClick: e, enableClick: e }
            : { enableDblClick: !0, enableClick: !0, ...e };
        }
        const yr = (e) => !!e.isVisible;
        function wr() {
          var e, t, n, r, o, i;
          let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            options: {
              defaultView:
                null !== (e = a.defaultView) && void 0 !== e ? e : "week",
              useFormPopup: null !== (t = a.useFormPopup) && void 0 !== t && t,
              useDetailPopup:
                null !== (n = a.useDetailPopup) && void 0 !== n && n,
              isReadOnly: null !== (r = a.isReadOnly) && void 0 !== r && r,
              week: hr(a.week),
              month: gr(a.month),
              gridSelection: vr(a.gridSelection),
              usageStatistics:
                null === (o = a.usageStatistics) || void 0 === o || o,
              eventFilter:
                null !== (i = a.eventFilter) && void 0 !== i ? i : yr,
              timezone: mr(a.timezone),
            },
          };
        }
        function _r(e) {
          return {
            setOptions: function () {
              let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              return e(
                st((e) => {
                  tn(e.options, t);
                })
              );
            },
          };
        }
        let br;
        function xr(e) {
          return {
            showSeeMorePopup: (t) =>
              e(
                st((e) => {
                  (e.popup[br.SeeMore] = t),
                    (e.popup[br.Form] = null),
                    (e.popup[br.Detail] = null);
                })
              ),
            showFormPopup: (t) =>
              e(
                st((e) => {
                  (e.popup[br.Form] = t),
                    (e.popup[br.SeeMore] = null),
                    (e.popup[br.Detail] = null);
                })
              ),
            showDetailPopup: (t, n) =>
              e(
                st((e) => {
                  (e.popup[br.Detail] = t),
                    (e.popup[br.Form] = null),
                    n || (e.popup[br.SeeMore] = null);
                })
              ),
            hideSeeMorePopup: () =>
              e(
                st((e) => {
                  e.popup[br.SeeMore] = null;
                })
              ),
            hideFormPopup: () =>
              e(
                st((e) => {
                  e.popup[br.Form] = null;
                })
              ),
            hideDetailPopup: () =>
              e(
                st((e) => {
                  e.popup[br.Detail] = null;
                })
              ),
            hideAllPopup: () =>
              e(
                st((e) => {
                  (e.popup[br.SeeMore] = null),
                    (e.popup[br.Form] = null),
                    (e.popup[br.Detail] = null);
                })
              ),
          };
        }
        !(function (e) {
          (e.SeeMore = "seeMore"), (e.Form = "form"), (e.Detail = "detail");
        })(br || (br = {}));
        const Dr = () => {},
          kr = /^auto$|^$|%/;
        function Sr(e, t) {
          let n = e.style[t];
          if ((!n || "auto" === n) && document.defaultView) {
            const r = document.defaultView.getComputedStyle(e, null);
            n = r ? r[t] : null;
          }
          return "auto" === n ? null : n;
        }
        function Cr(e) {
          return vt()(e) ? kr.test(e) : null === e;
        }
        function Er(e) {
          const t = Sr(e, "width"),
            n = Sr(e, "height");
          if ((Cr(t) || Cr(n)) && e.getBoundingClientRect) {
            const { width: t, height: n } = e.getBoundingClientRect();
            return { width: t || e.offsetWidth, height: n || e.offsetHeight };
          }
          return {
            width: parseFloat(null != t ? t : "0"),
            height: parseFloat(null != n ? n : "0"),
          };
        }
        const Ir = ("undefined" == typeof Element ? Dr : Element).prototype;
        Ir.matches || Ir.webkitMatchesSelector || Ir.msMatchesSelector;
        function Mr(e) {
          return e.replace(/<([^>]+)>/gi, "");
        }
        const Nr = 60,
          Tr = {
            milestone: (e) =>
              h(
                g,
                null,
                h("span", { className: wt("icon", "ic-milestone") }),
                h(
                  "span",
                  { style: { backgroundColor: e.backgroundColor } },
                  Mr(e.title)
                )
              ),
            milestoneTitle: () =>
              h("span", { className: wt("left-content") }, "Milestone"),
            task: (e) => "#".concat(e.title),
            taskTitle: () =>
              h("span", { className: wt("left-content") }, "Task"),
            alldayTitle: () =>
              h("span", { className: wt("left-content") }, "All Day"),
            allday: (e) => Mr(e.title),
            time(e) {
              const { start: t, title: n } = e;
              return t
                ? h(
                    "span",
                    null,
                    h("strong", null, xn(t, "HH:mm")),
                    " ",
                    h("span", null, Mr(n))
                  )
                : Mr(n);
            },
            goingDuration(e) {
              const { goingDuration: t } = e,
                n = Math.floor(t / Nr),
                r = t % Nr;
              return "GoingTime ".concat(mn(n, 2), ":").concat(mn(r, 2));
            },
            comingDuration(e) {
              const { comingDuration: t } = e,
                n = Math.floor(t / Nr),
                r = t % Nr;
              return "ComingTime ".concat(mn(n, 2), ":").concat(mn(r, 2));
            },
            monthMoreTitleDate(e) {
              const { date: t, day: n } = e,
                r = wt("more-title-date"),
                o = wt("more-title-day"),
                i = ur(fr(n));
              return h(
                g,
                null,
                h("span", { className: r }, t),
                h("span", { className: o }, i)
              );
            },
            monthMoreClose: () => "",
            monthGridHeader(e) {
              const t = parseInt(e.date.split("-")[2], 10);
              return h(
                "span",
                {
                  className: wt("weekday-grid-date", {
                    "weekday-grid-date-decorator": e.isToday,
                  }),
                },
                t
              );
            },
            monthGridHeaderExceed: (e) =>
              h(
                "span",
                { className: wt("weekday-grid-more-events") },
                e,
                " more"
              ),
            monthGridFooter: (e) => "",
            monthGridFooterExceed: (e) => "",
            monthDayName: (e) => e.label,
            weekDayName(e) {
              const t = wt("day-name__date"),
                n = wt("day-name__name");
              return h(
                g,
                null,
                h("span", { className: t }, e.date),
                " ",
                h("span", { className: n }, e.dayName)
              );
            },
            weekGridFooterExceed: (e) => "+".concat(e),
            collapseBtnTitle: () =>
              h("span", { className: wt("collapse-btn-icon") }),
            timezoneDisplayLabel(e) {
              let { displayLabel: t, timezoneOffset: n } = e;
              if (Bt(t) && jt(n)) {
                const e = n < 0 ? "-" : "+",
                  t = Math.abs(n / Nr),
                  r = Math.abs(n % Nr);
                return "GMT".concat(e).concat(mn(t, 2), ":").concat(mn(r, 2));
              }
              return t;
            },
            timegridDisplayPrimaryTime(e) {
              const { time: t } = e;
              return xn(t, "hh tt");
            },
            timegridDisplayTime(e) {
              const { time: t } = e;
              return xn(t, "HH:mm");
            },
            timegridNowIndicatorLabel(e) {
              const { time: t, format: n = "HH:mm" } = e;
              return xn(t, n);
            },
            popupIsAllday: () => "All day",
            popupStateFree: () => "Free",
            popupStateBusy: () => "Busy",
            titlePlaceholder: () => "Subject",
            locationPlaceholder: () => "Location",
            startDatePlaceholder: () => "Start date",
            endDatePlaceholder: () => "End date",
            popupSave: () => "Save",
            popupUpdate: () => "Update",
            popupEdit: () => "Edit",
            popupDelete: () => "Delete",
            popupDetailTitle(e) {
              let { title: t } = e;
              return t;
            },
            popupDetailDate(e) {
              let { isAllday: t, start: n, end: r } = e;
              const o = "YYYY.MM.DD",
                i = "hh:mm tt",
                a = "".concat(o, " ").concat(i),
                l = xn(n, t ? o : i),
                c = In(n, r) ? i : a;
              return t
                ? "".concat(l).concat(In(n, r) ? "" : " - ".concat(xn(r, o)))
                : "".concat(xn(n, a), " - ").concat(xn(r, c));
            },
            popupDetailLocation(e) {
              let { location: t } = e;
              return t;
            },
            popupDetailAttendees(e) {
              let { attendees: t = [] } = e;
              return t.join(", ");
            },
            popupDetailState(e) {
              let { state: t } = e;
              return t || "Busy";
            },
            popupDetailRecurrenceRule(e) {
              let { recurrenceRule: t } = e;
              return t;
            },
            popupDetailBody(e) {
              let { body: t } = e;
              return t;
            },
          };
        function Or() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return { template: { ...Tr, ...e } };
        }
        function Pr(e) {
          return {
            setTemplate: (t) =>
              e(
                st((e) => {
                  e.template = { ...e.template, ...t };
                })
              ),
          };
        }
        function Ar() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "week";
          const t = new en();
          return (
            t.setHours(0, 0, 0, 0), { view: { currentView: e, renderDate: t } }
          );
        }
        function Rr(e) {
          return {
            changeView: (t) =>
              e(
                st((e) => {
                  e.view.currentView = t;
                })
              ),
            setRenderDate: (t) =>
              e(
                st((e) => {
                  e.view.renderDate = kn(t);
                })
              ),
          };
        }
        const Lr = Pt()(window) || !window.navigator ? ee : te;
        function Hr() {
          const e = F(null);
          return {
            StoreProvider: function (t) {
              let { children: n, store: r } = t;
              return h(e.Provider, { value: r, children: n });
            },
            useStore: function (t) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Object.is;
              const r = ie(e);
              if (Bt(r)) throw new Error("StoreProvider is not found");
              const [, o] = Q((e) => e + 1, 0),
                i = r.getState(),
                a = ne(i),
                l = ne(t),
                c = ne(n),
                s = ne(!1),
                u = ne();
              let d;
              Pt()(u.current) && (u.current = t(i));
              let f = !1;
              const p =
                a.current !== i ||
                l.current !== t ||
                c.current !== n ||
                s.current;
              p && ((d = t(i)), (f = !n(u.current, d))),
                Lr(() => {
                  f && (u.current = d),
                    (a.current = i),
                    (l.current = t),
                    (c.current = n),
                    (s.current = !1);
                });
              const h = ne(i);
              return (
                Lr(() => {
                  const e = () => {
                      try {
                        const e = r.getState(),
                          t = l.current(e);
                        !c.current(u.current, t) &&
                          ((a.current = e), (u.current = d), o());
                      } catch (e) {
                        console.error(
                          "[toastui-calendar] failed to update state",
                          null == e ? void 0 : e.message
                        ),
                          (s.current = !0),
                          o();
                      }
                    },
                    t = r.subscribe(e);
                  return r.getState() !== h.current && e(), t;
                }, []),
                f ? d : u.current
              );
            },
            useInternalStore: () => {
              const t = ie(e);
              if (Bt(t)) throw new Error("StoreProvider is not found");
              return re(() => t, [t]);
            },
          };
        }
        function Fr(e) {
          let t;
          const n = new Set(),
            r = (e) => {
              const r = e(t);
              if (r !== t) {
                const e = t;
                (t = { ...t, ...r }), n.forEach((n) => n(t, e));
              }
            },
            o = () => t,
            i = {
              setState: r,
              getState: o,
              subscribe: (e, r, o) => {
                let i = e;
                if (r) {
                  let n = r(t);
                  const a = null != o ? o : Object.is;
                  i = () => {
                    const o = r(t);
                    if (!a(n, o)) {
                      const t = n;
                      (n = o), e(n, t);
                    }
                  };
                }
                return n.add(i), () => n.delete(i);
              },
              clearListeners: () => n.clear(),
            };
          return (t = e(r, o, i)), i;
        }
        const zr = (e) => (t) => ({
            ...wr(e),
            ...Or(e.template),
            popup: { [br.SeeMore]: null, [br.Form]: null, [br.Detail]: null },
            layout: 500,
            weekViewLayout: { lastPanelType: null, dayGridRows: {} },
            ...tr(e.calendars),
            ...Ar(e.defaultView),
            ...or(),
            gridSelection: {
              dayGridMonth: null,
              dayGridWeek: null,
              timeGrid: null,
              accumulated: { dayGridMonth: [] },
            },
            dispatch: {
              options: _r(t),
              popup: xr(t),
              weekViewLayout: sr(t),
              calendar: nr(t),
              view: Rr(t),
              dnd: ir(t),
              gridSelection: ar(t),
              template: Pr(t),
            },
          }),
          { StoreProvider: Br, useStore: jr, useInternalStore: Gr } = Hr();
        function Wr(e) {
          return jr(oe((t) => (e ? t.dispatch[e] : t.dispatch), [e]));
        }
        function Ur(e) {
          return (t) => t[e];
        }
        Ur("popup");
        const Yr = Ur("calendar"),
          Vr = Ur("weekViewLayout"),
          $r = Ur("template"),
          Xr = Ur("view"),
          qr = Ur("options"),
          Kr = Ur("dnd");
        var Zr = r(4304),
          Jr = r.n(Zr);
        const Qr = "data-target-temp";
        function eo(e) {
          var t;
          let { template: n, param: r, as: o = "div" } = e;
          const i = jr($r)[n];
          if (Bt(i)) return null;
          const a = i(r);
          return vt()(a)
            ? h(o, {
                className: wt("template-".concat(n)),
                dangerouslySetInnerHTML: {
                  __html: ((l = a), Jr().sanitize(l)),
                },
              })
            : H(a, {
                className: ""
                  .concat(
                    null !== (t = a.props.className) && void 0 !== t ? t : "",
                    " "
                  )
                  .concat(wt("template-".concat(n))),
              });
          var l;
        }
        const to = F(null),
          no = to.Provider,
          ro = () => {
            const e = ie(to);
            if (!e)
              throw new Error(
                "useEventBus must be used within a EventBusProvider"
              );
            return e;
          },
          oo = (e) => {
            var t, n, r, o, i;
            return null !==
              (t =
                null === (n = e.options) ||
                void 0 === n ||
                null === (r = n.timezone) ||
                void 0 === r ||
                null === (o = r.zones) ||
                void 0 === o ||
                null === (i = o[0]) ||
                void 0 === i
                  ? void 0
                  : i.timezoneName) && void 0 !== t
              ? t
              : "Local";
          },
          io = (e) => {
            var t, n;
            return null === (t = e.options) ||
              void 0 === t ||
              null === (n = t.timezone) ||
              void 0 === n
              ? void 0
              : n.customOffsetCalculator;
          },
          ao = (e) => {
            var t;
            return null !== (t = e.options.timezone.zones) && void 0 !== t
              ? t
              : [];
          };
        function lo() {
          const e = jr(io),
            t = jt(e);
          return oe(
            function (n) {
              let r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : new en();
              return r.tz(t ? e(n, r.getTime()) : n);
            },
            [e, t]
          );
        }
        function co() {
          const e = jr(oo),
            t = lo(),
            n = oe(() => t(e), [e, t]);
          return [e, n];
        }
        function so(e) {
          let { dayName: t, style: n, type: r, theme: o } = e;
          const i = ro(),
            [, a] = co(),
            l = a(),
            { day: c } = t,
            s =
              "week" === r
                ? (function (e) {
                    let { dayName: t, theme: n, today: r } = e;
                    const { day: o, dateInstance: i } = t,
                      a = In(r, i),
                      l = !a && i < r;
                    return Pn(o)
                      ? n.common.holiday.color
                      : l
                      ? null === (c = n.week) || void 0 === c
                        ? void 0
                        : c.pastDay.color
                      : An(o)
                      ? n.common.saturday.color
                      : a
                      ? null === (s = n.week) || void 0 === s
                        ? void 0
                        : s.today.color
                      : n.common.dayName.color;
                    var c, s;
                  })({ dayName: t, theme: o, today: l })
                : (function (e) {
                    let { dayName: t, theme: n } = e;
                    const { day: r } = t;
                    return Pn(r)
                      ? n.common.holiday.color
                      : An(r)
                      ? n.common.saturday.color
                      : n.common.dayName.color;
                  })({ dayName: t, theme: o }),
            u = "".concat(r, "DayName");
          return h(
            "div",
            { className: wt("day-name-item", r), style: n },
            h(
              "span",
              {
                className: wt({ ["holiday-".concat(fr(c))]: On(c) }),
                style: { color: s },
                onClick: () => {
                  (function (e, t) {
                    return "week" === e;
                  })(r) &&
                    i.fire("clickDayName", {
                      date: xn(t.dateInstance, "YYYY-MM-DD"),
                    });
                },
                "data-testid": "dayName-".concat(r, "-").concat(fr(c)),
              },
              h(eo, { template: u, param: t })
            )
          );
        }
        const uo = Ur("common"),
          fo = (Ur("week"), Ur("month")),
          po = (e) => e.week.dayGridLeft,
          ho = (e) => e.week.timeGridLeft,
          mo = (e) => e.month.moreView,
          go = (e) => e.month.gridCell,
          vo = {
            border: "1px solid #e5e5e5",
            backgroundColor: "white",
            holiday: { color: "#ff4040" },
            saturday: { color: "#333" },
            dayName: { color: "#333" },
            today: { color: "#fff" },
            gridSelection: {
              backgroundColor: "rgba(81, 92, 230, 0.05)",
              border: "1px solid #515ce6",
            },
          },
          yo = {
            dayName: {
              borderLeft: "none",
              borderTop: "1px solid #e5e5e5",
              borderBottom: "1px solid #e5e5e5",
              backgroundColor: "inherit",
            },
            weekend: { backgroundColor: "inherit" },
            today: {
              color: "inherit",
              backgroundColor: "rgba(81, 92, 230, 0.05)",
            },
            pastDay: { color: "#bbb" },
            panelResizer: { border: "1px solid #e5e5e5" },
            dayGrid: {
              borderRight: "1px solid #e5e5e5",
              backgroundColor: "inherit",
            },
            dayGridLeft: {
              borderRight: "1px solid #e5e5e5",
              backgroundColor: "inherit",
              width: "72px",
            },
            timeGrid: { borderRight: "1px solid #e5e5e5" },
            timeGridLeft: {
              backgroundColor: "inherit",
              borderRight: "1px solid #e5e5e5",
              width: "72px",
            },
            timeGridLeftAdditionalTimezone: { backgroundColor: "white" },
            timeGridHalfHourLine: { borderBottom: "none" },
            timeGridHourLine: { borderBottom: "1px solid #e5e5e5" },
            nowIndicatorLabel: { color: "#515ce6" },
            nowIndicatorPast: { border: "1px dashed #515ce6" },
            nowIndicatorBullet: { backgroundColor: "#515ce6" },
            nowIndicatorToday: { border: "1px solid #515ce6" },
            nowIndicatorFuture: { border: "none" },
            pastTime: { color: "#bbb" },
            futureTime: { color: "#333" },
            gridSelection: { color: "#515ce6" },
          },
          wo = {
            dayName: { borderLeft: "none", backgroundColor: "inherit" },
            holidayExceptThisMonth: { color: "rgba(255, 64, 64, 0.4)" },
            dayExceptThisMonth: { color: "rgba(51, 51, 51, 0.4)" },
            weekend: { backgroundColor: "inherit" },
            moreView: {
              border: "1px solid #d5d5d5",
              boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
              backgroundColor: "white",
              width: null,
              height: null,
            },
            gridCell: { headerHeight: 31, footerHeight: null },
            moreViewTitle: { backgroundColor: "inherit" },
          };
        function _o() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return { common: tn(vo, e) };
        }
        function bo(e) {
          return {
            setTheme: (t) => {
              e(
                st((e) => {
                  (e.common = tn(e.common, t.common)),
                    (e.week = tn(e.week, t.week)),
                    (e.month = tn(e.month, t.month));
                })
              );
            },
            setCommonTheme: (t) => {
              e(
                st((e) => {
                  e.common = tn(e.common, t);
                })
              );
            },
            setWeekTheme: (t) => {
              e(
                st((e) => {
                  e.week = tn(e.week, t);
                })
              );
            },
            setMonthTheme: (t) => {
              e(
                st((e) => {
                  e.month = tn(e.month, t);
                })
              );
            },
          };
        }
        function xo() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return { month: tn(wo, e) };
        }
        function Do() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return { week: tn(yo, e) };
        }
        const ko = function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            return (t) => ({
              ..._o(null == e ? void 0 : e.common),
              ...Do(null == e ? void 0 : e.week),
              ...xo(null == e ? void 0 : e.month),
              dispatch: { ...bo(t) },
            });
          },
          { StoreProvider: So, useInternalStore: Co, useStore: Eo } = Hr();
        function Io() {
          return Eo(fo);
        }
        function Mo(e) {
          return {
            common: {
              saturday: e.common.saturday,
              holiday: e.common.holiday,
              today: e.common.today,
              dayName: e.common.dayName,
            },
            week: {
              pastDay: e.week.pastDay,
              today: e.week.today,
              dayName: e.week.dayName,
            },
          };
        }
        function No(e) {
          return {
            common: {
              saturday: e.common.saturday,
              holiday: e.common.holiday,
              today: e.common.today,
              dayName: e.common.dayName,
            },
            month: { dayName: e.month.dayName },
          };
        }
        function To(e) {
          var t, n;
          let {
            dayNames: r,
            marginLeft: o = ft,
            rowStyleInfo: i,
            type: a = "month",
          } = e;
          const l = Eo("month" === a ? No : Mo),
            {
              backgroundColor: c = "white",
              borderLeft: s = null,
              ...u
            } = null !==
              (t = null === (n = l[a]) || void 0 === n ? void 0 : n.dayName) &&
            void 0 !== t
              ? t
              : {},
            { borderTop: d = null, borderBottom: f = null } = u;
          return h(
            "div",
            {
              "data-testid": "grid-header-".concat(a),
              className: wt("day-names", a),
              style: { backgroundColor: c, borderTop: d, borderBottom: f },
            },
            h(
              "div",
              { className: wt("day-name-container"), style: { marginLeft: o } },
              r.map((e, t) =>
                h(so, {
                  type: a,
                  key: "dayNames-".concat(e.day),
                  dayName: e,
                  style: {
                    width: _t(i[t].width),
                    left: _t(i[t].left),
                    borderLeft: s,
                  },
                  theme: l,
                })
              )
            )
          );
        }
        r(3985);
        let Oo;
        function Po(e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const n = [];
          let r;
          return e.length
            ? ((n[0] = [e[0].cid()]),
              e.slice(1).forEach((o, i) => {
                r = e.slice(0, i + 1).reverse();
                const a = r.find((e) => o.collidesWith(e, t));
                a
                  ? n
                      .slice()
                      .reverse()
                      .some(
                        (e) => !!~e.indexOf(a.cid()) && (e.push(o.cid()), !0)
                      )
                  : n.push([o.cid()]);
              }),
              n)
            : n;
        }
        function Ao(e, t) {
          let { length: n } = e;
          for (; n > 0; ) if (((n -= 1), !Pt()(e[n][t]))) return n;
          return -1;
        }
        function Ro(e, t) {
          let n =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const r = [];
          return (
            t.forEach((t) => {
              const o = [[]];
              t.forEach((t) => {
                const r = e.get(t);
                let i,
                  a,
                  l = 0,
                  c = !1;
                for (; !c; )
                  (a = Ao(o, l)),
                    -1 === a
                      ? (o[0].push(r), (c = !0))
                      : r.collidesWith(o[a][l], n) ||
                        ((i = a + 1),
                        Pt()(o[i]) && (o[i] = []),
                        (o[i][l] = r),
                        (c = !0)),
                    (l += 1);
              }),
                r.push(o);
            }),
            r
          );
        }
        function Lo(e, t) {
          return (n) => {
            const r = n.getStarts();
            return !(n.getEnds() < e || r > t);
          };
        }
        function Ho(e, t, n, r) {
          const o = Sn(e, t, yn).map((e) => xn(e, "YYYYMMDD"));
          n.forEach((e) => {
            e.forEach((e) => {
              e.forEach((e, t) => {
                if (!e) return;
                const n = xn(e.getStarts(), "YYYYMMDD"),
                  i = Sn(kn(e.getStarts()), Tn(e.getEnds()), yn).length;
                (e.top = t),
                  (e.left = o.indexOf(n)),
                  (e.width = i),
                  null == r || r(e);
              });
            });
          });
        }
        function Fo(e, t, n) {
          return (
            n.getStarts() < e &&
              ((n.exceedLeft = !0), (n.renderStarts = new en(e))),
            n.getEnds() > t &&
              ((n.exceedRight = !0), (n.renderEnds = new en(t))),
            n
          );
        }
        function zo(e, t, n) {
          return n instanceof Xn
            ? (n.each((n) => (Fo(e, t, n), !0)), null)
            : Fo(e, t, n);
        }
        function Bo(e) {
          const t = new Xn((e) => e.cid());
          return (
            e.each(function (e) {
              t.add(new on(e));
            }),
            t
          );
        }
        function jo(e) {
          let { model: t } = e;
          return t.isAllday || t.hasMultiDates;
        }
        function Go(e) {
          return !jo(e);
        }
        function Wo(e) {
          (e.top = e.top || 0), (e.top += 1);
        }
        function Uo(e, t) {
          const n = t.filter(jo),
            r = t.filter(Go).sort(ln.compare.event.asc),
            o = {};
          r.forEach((t) => {
            const r = xn(t.getStarts(), "YYYYMMDD");
            let i = o[r];
            Pt()(i) &&
              (i = o[r] =
                (function (e, t, n) {
                  const r = [];
                  return (
                    e[t].forEach((e) => {
                      n.doWhenHas(e, (e) => {
                        r.push(e.top);
                      });
                    }),
                    r.length > 0 ? Math.max(...r) : 0
                  );
                })(e, r, n)),
              (o[r] = t.top = i + 1);
          });
        }
        function Yo(e, t) {
          const {
              start: n,
              end: r,
              andFilters: o = [],
              alldayFirstMode: i = !1,
            } = t,
            { events: a, idsOfDay: l } = e,
            c = Xn.and(...[Lo(n, r)].concat(o)),
            s = Bo(a.filter(c));
          !(function (e) {
            e.each((e) => {
              const { model: t } = e,
                n = t.getStarts(),
                r = t.getEnds();
              (t.hasMultiDates = !In(n, r)),
                !t.isAllday &&
                  t.hasMultiDates &&
                  ((e.renderStarts = kn(n)), (e.renderEnds = Tn(r)));
            });
          })(s),
            (function (e, t, n) {
              n.each((n) => {
                (n.model.isAllday || n.model.hasMultiDates) &&
                  zo(kn(e), Tn(t), n);
              });
            })(n, r, s);
          const u = s.sort(ln.compare.event.asc),
            d = Ro(s, Po(u, false), false);
          return (
            Ho(n, r, d, Wo),
            i
              ? Uo(l, s)
              : (function (e, t) {
                  const n = t.filter(jo),
                    r = t.filter(Go).sort(ln.compare.event.asc),
                    o = {};
                  r.forEach((t) => {
                    const r = xn(t.getStarts(), "YYYYMMDD");
                    let i = o[r];
                    if (
                      (Pt()(i) &&
                        ((i = o[r] = []),
                        e[r].forEach((e) => {
                          n.doWhenHas(e, (e) => {
                            i.push(e.top);
                          });
                        })),
                      i.indexOf(t.top) >= 0)
                    ) {
                      const e = Math.max(...i) + 1;
                      for (
                        let n = 1;
                        n <= e && ((t.top = n), !(i.indexOf(t.top) < 0));
                        n += 1
                      );
                    }
                    i.push(t.top);
                  });
                })(l, s),
            d
          );
        }
        function Vo(e) {
          return (t) => t[e];
        }
        function $o(e, t, n) {
          if (null == e || !e.length) return !1;
          const r = ln.compare.num.asc,
            o = Math.abs(ln.bsearch(e, t, Vo(0), r)),
            i = Math.abs(ln.bsearch(e, t, Vo(1), r)),
            a = Math.abs(ln.bsearch(e, n, Vo(0), r)),
            l = Math.abs(ln.bsearch(e, n, Vo(1), r));
          return !(o === i && i === a && a === l);
        }
        function Xo(e) {
          return (
            e.forEach((e) => {
              const t = (function (e) {
                  const t = [],
                    n = Math.max(...e.map((e) => e.length));
                  let r,
                    o,
                    i,
                    a,
                    l,
                    c = [];
                  for (o = 1; o < n; o += 1) {
                    var s;
                    for (
                      r = 0,
                        i =
                          null == e || null === (s = e[r]) || void 0 === s
                            ? void 0
                            : s[o];
                      i;

                    ) {
                      var u;
                      const { goingDuration: t, comingDuration: n } =
                        i.valueOf();
                      (a = i.getStarts().getTime() - Dn("minute", t)),
                        (l = i.getEnds().getTime() + Dn("minute", n)),
                        Math.abs(l - a) < _n && (l += _n),
                        c.push([a, l]),
                        (r += 1),
                        (i =
                          null == e || null === (u = e[r]) || void 0 === u
                            ? void 0
                            : u[o]);
                    }
                    t.push(c), (c = []);
                  }
                  return t;
                })(e),
                n = Math.max(...e.map((e) => e.length));
              e.forEach((e) => {
                e.forEach((e, r) => {
                  if (!e) return;
                  const { goingDuration: o, comingDuration: i } = e.model;
                  let a = e.getStarts().getTime(),
                    l = e.getEnds().getTime();
                  Math.abs(l - a) < _n && (l += _n),
                    (a -= Dn("minute", o)),
                    (l += Dn("minute", i)),
                    (l -= 1);
                  for (let o = r + 1; o < n; o += 1) {
                    if ($o(t[o - 1], a, l)) {
                      e.hasCollide = !0;
                      break;
                    }
                    e.extraSpace += 1;
                  }
                });
              });
            }),
            e
          );
        }
        function qo(e, t) {
          return 0 === e && 24 === t
            ? (e) => e.sort(ln.compare.event.asc)
            : (n) => {
                return n
                  .filter(
                    ((r = e),
                    (o = t),
                    (e) => {
                      const t = e.getStarts(),
                        n = e.getEnds(),
                        i = t.getTime(),
                        a = n.getTime(),
                        l = t.getFullYear(),
                        c = t.getMonth(),
                        s = t.getDate(),
                        u = new en(l, c, s).setHours(r),
                        d = new en(l, c, s).setHours(o);
                      return (
                        (i >= u && i < d) ||
                        (a > u && a <= d) ||
                        (i < u && a > u) ||
                        (a > d && i < d)
                      );
                    })
                  )
                  .sort(ln.compare.event.asc);
                var r, o;
              };
        }
        function Ko(e, t) {
          const {
              start: n,
              end: r,
              uiModelTimeColl: o,
              hourStart: i,
              hourEnd: a,
            } = t,
            l = (function (e, t, n, r) {
              const o = {};
              return (
                Kn(t, n).forEach((t) => {
                  const n = xn(t, "YYYYMMDD"),
                    i = e[n],
                    a = (o[n] = new Xn((e) => e.cid()));
                  i &&
                    i.length &&
                    i.forEach((e) => {
                      r.doWhenHas(e, (e) => {
                        a.add(e);
                      });
                    });
                }, {}),
                o
              );
            })(e, n, r, o),
            c = {},
            s = qo(i, a);
          return (
            Object.entries(l).forEach((e) => {
              let [t, n] = e;
              const r = Ro(n, Po(s(n), true), true);
              c[t] = Xo(r);
            }),
            c
          );
        }
        function Zo(e, t, n) {
          if (!n || !n.size) return [];
          !(function (e) {
            e.each((e) => {
              const { model: t } = e;
              (t.hasMultiDates = !0),
                (e.renderStarts = kn(t.getStarts())),
                (e.renderEnds = Tn(t.getEnds()));
            });
          })(n),
            zo(e, t, n);
          const r = n.sort(ln.compare.event.asc),
            o = Ro(n, Po(r, true), true);
          return Ho(e, t, o), o;
        }
        function Jo(e, t, n) {
          const r = Math.max(e, ...t);
          return Math.min(r, ...n);
        }
        function Qo(e, t, n) {
          return (t * n) / e;
        }
        function ei(e, t, n) {
          return t <= e && e <= n;
        }
        !(function (e) {
          (e.header = "header"), (e.footer = "footer");
        })(Oo || (Oo = {}));
        const ti = 22;
        function ni(e, t) {
          e.forEach((e) => {
            e.forEach((e) => {
              e.forEach((e, n) => {
                t(e, n);
              });
            });
          });
        }
        function ri(e, t) {
          return (n) => {
            let { top: r } = n;
            return e >= r * t;
          };
        }
        function oi(e, t, n) {
          return e.filter(
            (function (e, t) {
              return (n) => {
                let { top: r } = n;
                return e < r * t;
              };
            })(t, n)
          ).length;
        }
        function ii(e, t, n) {
          const r = ((e) => e.filter((e) => On(e.getDay())).length)(e),
            o = e.length,
            i = r === o,
            a = n / (t && !i ? 2 * o - r : o),
            l = e.map((e) => {
              const n = e.getDay();
              return !t || i || On(n) ? a : 2 * a;
            }),
            c = l.reduce(
              (e, t, n) => (n ? [...e, e[n - 1] + l[n - 1]] : [0]),
              []
            );
          return { widthList: l, leftList: c };
        }
        function ai(e, t, n) {
          return e.reduce((e, r, o) => (t <= o && o <= n ? e + r : e), 0);
        }
        function li(e, t) {
          return t.findIndex((t) => e >= kn(t) && e <= Tn(t));
        }
        const ci = (e, t, n, r) => {
          const { widthList: o } = ii(n, r, 100);
          let i = 0,
            a = n.length - 1;
          return (
            n.forEach((n, r) => {
              n <= e && (i = r), n <= t && (a = r);
            }),
            { width: ai(o, i, a), left: i ? ai(o, 0, i - 1) : 0 }
          );
        };
        function si(e, t, n) {
          const { idsOfDay: r } = t,
            o = Yo(t, { start: e[0], end: Tn(e[e.length - 1]) }),
            i = [];
          ni(o, (t) => {
            const r = t.model.cid();
            i[r] = (function (e, t) {
              let n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              const r = e.getStarts(),
                o = e.getEnds(),
                { width: i, left: a } = ci(r, o, t, n);
              return (e.width = i), (e.left = a), e;
            })(t, e, n);
          });
          const a = Object.keys(r).reduce((e, t) => {
            const n = r[t];
            return (e[t] = n.map((e) => i[e]).filter((e) => !!e)), e;
          }, {});
          return { uiModels: Object.values(i), gridDateEventModelMap: a };
        }
        const ui = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return (
            ni(e, (e) => {
              const r = e.getStarts(),
                o = e.getEnds(),
                { width: i, left: a } = ci(r, o, t, n);
              (e.width = i), (e.left = a), (e.top += 1);
            }),
            di(e)
          );
        };
        function di(e) {
          return e.flatMap((e) =>
            e.flatMap((e) => ((e) => e.filter((e) => !!e))(e))
          );
        }
        const fi = (e, t, n) => {
          let { narrowWeekend: r, hourStart: o, hourEnd: i } = n;
          const a = (function (e, t) {
            var n, r;
            const {
                start: o,
                end: i,
                panels: a,
                andFilters: l = [],
                options: c,
              } = t,
              { events: s, idsOfDay: u } = e,
              d =
                null !== (n = null == c ? void 0 : c.hourStart) && void 0 !== n
                  ? n
                  : 0,
              f =
                null !== (r = null == c ? void 0 : c.hourEnd) && void 0 !== r
                  ? r
                  : 24,
              p = Xn.and(...[Lo(o, i)].concat(l)),
              h = Bo(s.filter(p)).groupBy(Zn);
            return a.reduce(
              (e, t) => {
                const { name: n, type: r } = t;
                return Bt(h[n])
                  ? e
                  : {
                      ...e,
                      [n]:
                        "daygrid" === r
                          ? Zo(o, i, h[n])
                          : Ko(u, {
                              start: o,
                              end: i,
                              uiModelTimeColl: h[n],
                              hourStart: d,
                              hourEnd: f,
                            }),
                    };
              },
              { milestone: [], task: [], allday: [], time: {} }
            );
          })(t, {
            start: kn(e[0]),
            end: Tn(e[e.length - 1]),
            panels: [
              { name: "milestone", type: "daygrid", show: !0 },
              { name: "task", type: "daygrid", show: !0 },
              { name: "allday", type: "daygrid", show: !0 },
              { name: "time", type: "timegrid", show: !0 },
            ],
            andFilters: [],
            options: { hourStart: o, hourEnd: i },
          });
          return Object.keys(a).reduce(
            (t, n) => {
              const o = a[n];
              return {
                ...t,
                [n]: Array.isArray(o)
                  ? ui(o, e, r)
                  : ((i = o),
                    Array.from(
                      new Set(
                        Object.values(i).reduce(
                          (e, t) => e.concat(...di(t)),
                          []
                        )
                      )
                    )),
              };
              var i;
            },
            { milestone: [], allday: [], task: [], time: [] }
          );
        };
        function pi(e, t) {
          let {
            workweek: n = !1,
            visibleWeeksCount: r = 0,
            startDayOfWeek: o = 0,
            isAlways6Weeks: i = !0,
          } = t;
          const a = new en(e),
            l = r > 0,
            c = l ? a : Rn(a),
            s = (function (e, t) {
              const n = Cn(e);
              return n.setDate(e.getDate() - t), n;
            })(c, c.getDay() - o + (c.getDay() < o ? 7 : 0)),
            u = s.getDay(),
            d = (function (e) {
              const t = Rn(e);
              return (
                t.setMonth(t.getMonth() + 1),
                t.setDate(t.getDate() - 1),
                t.setHours(23, 59, 59, 999),
                t
              );
            })(a).getDate(),
            f = jn(s, c),
            p = d + Math.abs(f);
          let h = 6;
          return (
            l ? (h = r) : !1 === i && (h = Math.ceil(p / 7)),
            dt()(0, h).map((e) =>
              dt()(0, 7).reduce((t, r) => {
                const o = 7 * e + r;
                if (!n || (n && !On((o + u) % 7))) {
                  const e = Bn(s, o);
                  t.push(e);
                }
                return t;
              }, [])
            )
          );
        }
        function hi(e, t) {
          let { startDayOfWeek: n = dn.SUN, workweek: r } = t;
          const o = e.getDay(),
            i = kn(e),
            a = i.getDay(),
            l = n - 7;
          return dt()(n, 7 + n).reduce((e, t) => {
            const c = Bn(i, t - a + (n > o ? l : 0));
            return (r && On(c.getDay())) || e.push(c), e;
          }, []);
        }
        function mi(e, t) {
          var n;
          const r = (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const n = e.length,
                r = n > 5 && t,
                o = r ? 100 / (n - 1) : 100 / n;
              return e
                .map((e) => {
                  const t = r && On(e.getDay()) ? o / 2 : o;
                  return { date: e, width: t };
                })
                .reduce((e, t, n) => {
                  const r = e[n - 1];
                  return (
                    e.push({ ...t, left: 0 === n ? 0 : r.left + r.width }), e
                  );
                }, []);
            })(e, null !== (n = t.narrowWeekend) && void 0 !== n && n),
            o = 2 * (t.hourEnd - t.hourStart),
            i = 100 / o;
          return {
            columns: r,
            rows: dt()(o).map((e, n) => {
              const r = n % 2 == 1,
                o = t.hourStart + Math.floor(e / 2),
                a = ""
                  .concat(o, ":")
                  .concat(r ? "30" : "00")
                  .padStart(5, "0"),
                l = (
                  r ? "".concat(o + 1, ":00") : "".concat(o, ":30")
                ).padStart(5, "0");
              return { top: i * n, height: i, startTime: a, endTime: l };
            }),
          };
        }
        function gi(e, t, n) {
          return Jo(Math.floor(Qo(t, e, n)), [0], [e - 1]);
        }
        function vi(e) {
          let { rowsCount: t, columnsCount: n, container: r } = e;
          return Bt(r)
            ? () => null
            : function (e) {
                const {
                    left: o,
                    top: i,
                    width: a,
                    height: l,
                  } = r.getBoundingClientRect(),
                  [c, s] = (function (e, t) {
                    let { clientX: n, clientY: r } = e,
                      { left: o, top: i, clientLeft: a, clientTop: l } = t;
                    return [n - o - a, r - i - l];
                  })(e, {
                    left: o,
                    top: i,
                    clientLeft: r.clientLeft,
                    clientTop: r.clientTop,
                  });
                return c < 0 || s < 0 || c > a || s > l
                  ? null
                  : { columnIndex: gi(n, a, c), rowIndex: gi(t, l, s) };
              };
        }
        function yi(e) {
          return e.common.gridSelection;
        }
        function wi(e) {
          let {
            type: t,
            gridSelectionData: n,
            weekDates: r,
            narrowWeekend: o,
          } = e;
          const { backgroundColor: i, border: a } = Eo(yi),
            { startCellIndex: l, endCellIndex: c } = n,
            { left: s, width: u } = ((e, t, n, r) => {
              const { widthList: o } = ii(n, r, 100);
              return {
                left: e ? ai(o, 0, e - 1) : 0,
                width: ai(o, null != e ? e : 0, t < 0 ? n.length - 1 : t),
              };
            })(Math.min(l, c), Math.max(l, c), r, o),
            d = {
              left: _t(s),
              width: _t(u),
              height: _t(100),
              backgroundColor: i,
              border: a,
            };
          return u > 0
            ? h("div", { className: wt(t, "grid-selection"), style: d })
            : null;
        }
        function _i(e, t, n) {
          return {
            startColumnIndex: n ? t.columnIndex : e.columnIndex,
            startRowIndex: n ? t.rowIndex : e.rowIndex,
            endColumnIndex: n ? e.columnIndex : t.columnIndex,
            endRowIndex: n ? e.rowIndex : t.rowIndex,
          };
        }
        const bi = {
          sortSelection: (e, t) =>
            _i(
              e,
              t,
              e.columnIndex > t.columnIndex ||
                (e.columnIndex === t.columnIndex && e.rowIndex > t.rowIndex)
            ),
          getDateFromCollection: (e, t) => {
            const n = e;
            return [
              zn(
                n.columns[t.startColumnIndex].date,
                n.rows[t.startRowIndex].startTime
              ),
              zn(
                n.columns[t.endColumnIndex].date,
                n.rows[t.endRowIndex].endTime
              ),
            ];
          },
          calculateSelection: function (e, t) {
            if (Bt(e)) return null;
            const {
              startColumnIndex: n,
              endColumnIndex: r,
              endRowIndex: o,
              startRowIndex: i,
            } = e;
            if (!ei(t, n, r)) return null;
            const a = {
              startRowIndex: i,
              endRowIndex: o,
              isSelectingMultipleColumns: n !== r,
              isStartingColumn: t === n,
            };
            return (
              n < t && t < r
                ? ((a.startRowIndex = 0), (a.endRowIndex = 47))
                : n !== r &&
                  (n === t
                    ? (a.endRowIndex = 47)
                    : r === t && (a.startRowIndex = 0)),
              a
            );
          },
        };
        const xi = {
          sortSelection: (e, t) =>
            _i(
              e,
              t,
              e.rowIndex > t.rowIndex ||
                (e.rowIndex === t.rowIndex && e.columnIndex > t.columnIndex)
            ),
          getDateFromCollection: (e, t) => {
            const n = e;
            return [
              n[t.startRowIndex][t.startColumnIndex],
              n[t.endRowIndex][t.endColumnIndex],
            ];
          },
          calculateSelection: function (e, t, n) {
            if (!(jt(e) && jt(t) && jt(n))) return null;
            const {
              startRowIndex: r,
              startColumnIndex: o,
              endRowIndex: i,
              endColumnIndex: a,
            } = e;
            if (!ei(t, Math.min(r, i), Math.max(r, i))) return null;
            let l = o,
              c = a;
            return (
              r < t && (l = 0),
              i > t && (c = n - 1),
              { startCellIndex: l, endCellIndex: c }
            );
          },
        };
        const Di = {
          sortSelection: (e, t) => _i(e, t, e.columnIndex > t.columnIndex),
          getDateFromCollection: (e, t) => {
            const n = e;
            return [n[t.startColumnIndex], n[t.endColumnIndex]];
          },
          calculateSelection: function (e) {
            return jt(e)
              ? {
                  startCellIndex: e.startColumnIndex,
                  endCellIndex: e.endColumnIndex,
                }
              : null;
          },
        };
        function ki(e) {
          return Di.calculateSelection(e.gridSelection.dayGridWeek);
        }
        function Si(e) {
          let { weekDates: t, narrowWeekend: n } = e;
          const r = jr(ki);
          return Bt(r)
            ? null
            : h(wi, {
                type: "allday",
                gridSelectionData: r,
                weekDates: t,
                narrowWeekend: n,
              });
        }
        function Ci(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function Ei(e, t) {
          for (var n in e) if ("__source" !== n && !(n in t)) return !0;
          for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
          return !1;
        }
        function Ii(e) {
          this.props = e;
        }
        function Mi(e, t) {
          function n(e) {
            var n = this.props.ref,
              r = n == e.ref;
            return (
              !r && n && (n.call ? n(null) : (n.current = null)),
              t ? !t(this.props, e) || !r : Ei(this.props, e)
            );
          }
          function r(t) {
            return (this.shouldComponentUpdate = n), h(e, t);
          }
          return (
            (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
            (r.prototype.isReactComponent = !0),
            (r.__f = !0),
            r
          );
        }
        ((Ii.prototype = new v()).isPureReactComponent = !0),
          (Ii.prototype.shouldComponentUpdate = function (e, t) {
            return Ei(this.props, e) || Ei(this.state, t);
          });
        var Ni = t.__b;
        t.__b = function (e) {
          e.type &&
            e.type.__f &&
            e.ref &&
            ((e.props.ref = e.ref), (e.ref = null)),
            Ni && Ni(e);
        };
        var Ti =
          ("undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.forward_ref")) ||
          3911;
        function Oi(e) {
          function t(t) {
            var n = Ci({}, t);
            return delete n.ref, e(n, t.ref || null);
          }
          return (
            (t.$$typeof = Ti),
            (t.render = t),
            (t.prototype.isReactComponent = t.__f = !0),
            (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
            t
          );
        }
        var Pi = t.__e;
        t.__e = function (e, t, n, r) {
          if (e.then)
            for (var o, i = t; (i = i.__); )
              if ((o = i.__c) && o.__c)
                return (
                  null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)),
                  o.__c(e, t)
                );
          Pi(e, t, n, r);
        };
        var Ai = t.unmount;
        function Ri() {
          (this.__u = 0), (this.t = null), (this.__b = null);
        }
        function Li(e) {
          var t = e.__.__c;
          return t && t.__e && t.__e(e);
        }
        function Hi() {
          (this.u = null), (this.o = null);
        }
        (t.unmount = function (e) {
          var t = e.__c;
          t && t.__R && t.__R(),
            t && !0 === e.__h && (e.type = null),
            Ai && Ai(e);
        }),
          ((Ri.prototype = new v()).__c = function (e, t) {
            var n = t.__c,
              r = this;
            null == r.t && (r.t = []), r.t.push(n);
            var o = Li(r.__v),
              i = !1,
              a = function () {
                i || ((i = !0), (n.__R = null), o ? o(l) : l());
              };
            n.__R = a;
            var l = function () {
                if (!--r.__u) {
                  if (r.state.__e) {
                    var e = r.state.__e;
                    r.__v.__k[0] = (function e(t, n, r) {
                      return (
                        t &&
                          ((t.__v = null),
                          (t.__k =
                            t.__k &&
                            t.__k.map(function (t) {
                              return e(t, n, r);
                            })),
                          t.__c &&
                            t.__c.__P === n &&
                            (t.__e && r.insertBefore(t.__e, t.__d),
                            (t.__c.__e = !0),
                            (t.__c.__P = r))),
                        t
                      );
                    })(e, e.__c.__P, e.__c.__O);
                  }
                  var t;
                  for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); )
                    t.forceUpdate();
                }
              },
              c = !0 === t.__h;
            r.__u++ || c || r.setState({ __e: (r.__b = r.__v.__k[0]) }),
              e.then(a, a);
          }),
          (Ri.prototype.componentWillUnmount = function () {
            this.t = [];
          }),
          (Ri.prototype.render = function (e, t) {
            if (this.__b) {
              if (this.__v.__k) {
                var n = document.createElement("div"),
                  r = this.__v.__k[0].__c;
                this.__v.__k[0] = (function e(t, n, r) {
                  return (
                    t &&
                      (t.__c &&
                        t.__c.__H &&
                        (t.__c.__H.__.forEach(function (e) {
                          "function" == typeof e.__c && e.__c();
                        }),
                        (t.__c.__H = null)),
                      null != (t = Ci({}, t)).__c &&
                        (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                      (t.__k =
                        t.__k &&
                        t.__k.map(function (t) {
                          return e(t, n, r);
                        }))),
                    t
                  );
                })(this.__b, n, (r.__O = r.__P));
              }
              this.__b = null;
            }
            var o = t.__e && h(g, null, e.fallback);
            return (
              o && (o.__h = null), [h(g, null, t.__e ? null : e.children), o]
            );
          });
        var Fi = function (e, t, n) {
          if (
            (++n[1] === n[0] && e.o.delete(t),
            e.props.revealOrder &&
              ("t" !== e.props.revealOrder[0] || !e.o.size))
          )
            for (n = e.u; n; ) {
              for (; n.length > 3; ) n.pop()();
              if (n[1] < n[0]) break;
              e.u = n = n[2];
            }
        };
        function zi(e) {
          return (
            (this.getChildContext = function () {
              return e.context;
            }),
            e.children
          );
        }
        function Bi(e) {
          var t = this,
            n = e.i;
          (t.componentWillUnmount = function () {
            L(null, t.l), (t.l = null), (t.i = null);
          }),
            t.i && t.i !== n && t.componentWillUnmount(),
            e.__v
              ? (t.l ||
                  ((t.i = n),
                  (t.l = {
                    nodeType: 1,
                    parentNode: n,
                    childNodes: [],
                    appendChild: function (e) {
                      this.childNodes.push(e), t.i.appendChild(e);
                    },
                    insertBefore: function (e, n) {
                      this.childNodes.push(e), t.i.appendChild(e);
                    },
                    removeChild: function (e) {
                      this.childNodes.splice(
                        this.childNodes.indexOf(e) >>> 1,
                        1
                      ),
                        t.i.removeChild(e);
                    },
                  })),
                L(h(zi, { context: t.context }, e.__v), t.l))
              : t.l && t.componentWillUnmount();
        }
        function ji(e, t) {
          var n = h(Bi, { __v: e, i: t });
          return (n.containerInfo = t), n;
        }
        ((Hi.prototype = new v()).__e = function (e) {
          var t = this,
            n = Li(t.__v),
            r = t.o.get(e);
          return (
            r[0]++,
            function (o) {
              var i = function () {
                t.props.revealOrder ? (r.push(o), Fi(t, e, r)) : o();
              };
              n ? n(i) : i();
            }
          );
        }),
          (Hi.prototype.render = function (e) {
            (this.u = null), (this.o = new Map());
            var t = k(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--; )
              this.o.set(t[n], (this.u = [1, 0, this.u]));
            return e.children;
          }),
          (Hi.prototype.componentDidUpdate = Hi.prototype.componentDidMount =
            function () {
              var e = this;
              this.o.forEach(function (t, n) {
                Fi(e, n, t);
              });
            });
        var Gi =
            ("undefined" != typeof Symbol &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            60103,
          Wi =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|shape|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          Ui = "undefined" != typeof document,
          Yi = function (e) {
            return (
              "undefined" != typeof Symbol && "symbol" == typeof Symbol()
                ? /fil|che|rad/i
                : /fil|che|ra/i
            ).test(e);
          };
        (v.prototype.isReactComponent = {}),
          [
            "componentWillMount",
            "componentWillReceiveProps",
            "componentWillUpdate",
          ].forEach(function (e) {
            Object.defineProperty(v.prototype, e, {
              configurable: !0,
              get: function () {
                return this["UNSAFE_" + e];
              },
              set: function (t) {
                Object.defineProperty(this, e, {
                  configurable: !0,
                  writable: !0,
                  value: t,
                });
              },
            });
          });
        var Vi = t.event;
        function $i() {}
        function Xi() {
          return this.cancelBubble;
        }
        function qi() {
          return this.defaultPrevented;
        }
        t.event = function (e) {
          return (
            Vi && (e = Vi(e)),
            (e.persist = $i),
            (e.isPropagationStopped = Xi),
            (e.isDefaultPrevented = qi),
            (e.nativeEvent = e)
          );
        };
        var Ki = {
            configurable: !0,
            get: function () {
              return this.class;
            },
          },
          Zi = t.vnode;
        t.vnode = function (e) {
          var t = e.type,
            n = e.props,
            r = n;
          if ("string" == typeof t) {
            var o = -1 === t.indexOf("-");
            for (var i in ((r = {}), n)) {
              var a = n[i];
              (Ui && "children" === i && "noscript" === t) ||
                ("value" === i && "defaultValue" in n && null == a) ||
                ("defaultValue" === i && "value" in n && null == n.value
                  ? (i = "value")
                  : "download" === i && !0 === a
                  ? (a = "")
                  : /ondoubleclick/i.test(i)
                  ? (i = "ondblclick")
                  : /^onchange(textarea|input)/i.test(i + t) && !Yi(n.type)
                  ? (i = "oninput")
                  : /^onfocus$/i.test(i)
                  ? (i = "onfocusin")
                  : /^onblur$/i.test(i)
                  ? (i = "onfocusout")
                  : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
                  ? (i = i.toLowerCase())
                  : o && Wi.test(i)
                  ? (i = i.replace(/[A-Z0-9]/, "-$&").toLowerCase())
                  : null === a && (a = void 0),
                /^oninput$/i.test(i) &&
                  ((i = i.toLowerCase()), r[i] && (i = "oninputCapture")),
                (r[i] = a));
            }
            "select" == t &&
              r.multiple &&
              Array.isArray(r.value) &&
              (r.value = k(n.children).forEach(function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value);
              })),
              "select" == t &&
                null != r.defaultValue &&
                (r.value = k(n.children).forEach(function (e) {
                  e.props.selected = r.multiple
                    ? -1 != r.defaultValue.indexOf(e.props.value)
                    : r.defaultValue == e.props.value;
                })),
              (e.props = r),
              n.class != n.className &&
                ((Ki.enumerable = "className" in n),
                null != n.className && (r.class = n.className),
                Object.defineProperty(r, "className", Ki));
          }
          (e.$$typeof = Gi), Zi && Zi(e);
        };
        var Ji = t.__r;
        t.__r = function (e) {
          Ji && Ji(e), e.__c;
        };
        function Qi(e) {
          return !!e.__k && (L(null, e), !0);
        }
        function ea(e) {
          let {
            index: t,
            exceedCount: n,
            isClicked: r,
            onClickExceedCount: o,
          } = e;
          const i = { display: r ? "none" : "" };
          return n && !r
            ? h(
                "span",
                {
                  className: wt("weekday-exceed-in-week"),
                  onClick: () => o(t),
                  style: i,
                },
                h(eo, { template: "weekGridFooterExceed", param: n })
              )
            : null;
        }
        function ta(e) {
          let { isClicked: t, isClickedIndex: n, onClickCollapseButton: r } = e;
          return t && n
            ? h(
                "span",
                { className: wt("weekday-exceed-in-week"), onClick: r },
                h(eo, { template: "collapseBtnTitle" })
              )
            : null;
        }
        function na(e) {
          let {
            width: t,
            left: n,
            index: r,
            exceedCount: o,
            isClicked: i,
            onClickExceedCount: a,
            isClickedIndex: l,
            onClickCollapseButton: c,
            isLastCell: s,
          } = e;
          const { borderRight: u, backgroundColor: d } = Eo(
              oe((e) => e.week.dayGrid, [])
            ),
            f = {
              width: t,
              left: n,
              borderRight: s ? "none" : u,
              backgroundColor: d,
            };
          return h(
            "div",
            { className: wt("panel-grid"), style: f },
            h(ea, {
              index: r,
              exceedCount: o,
              isClicked: i,
              onClickExceedCount: a,
            }),
            h(ta, { isClickedIndex: l, isClicked: i, onClickCollapseButton: c })
          );
        }
        const ra = Mi(function (e) {
          let {
            uiModels: t,
            weekDates: n,
            narrowWeekend: r,
            height: o,
            clickedIndex: i,
            isClickedCount: a,
            onClickExceedCount: l,
            onClickCollapseButton: c,
          } = e;
          const { widthList: s, leftList: u } = ii(n, r, 100),
            d = n.length - 1;
          return h(
            g,
            null,
            n.map((e, n) => {
              const r = _t(s[n]),
                f = _t(u[n]);
              var p;
              const m = oi(
                  t.filter(
                    ((p = e),
                    (e) => {
                      const t = kn(e.getStarts()),
                        n = kn(e.getEnds());
                      return t <= p && p <= n;
                    })
                  ),
                  o,
                  ti + 2
                ),
                g = n === i,
                v = n === d;
              return h(na, {
                key: "panel-grid-".concat(e.getDate()),
                width: r,
                left: f,
                index: n,
                exceedCount: m,
                isClicked: a,
                onClickExceedCount: l,
                isClickedIndex: g,
                onClickCollapseButton: c,
                isLastCell: v,
              });
            })
          );
        });
        r(7694);
        function oa(e) {
          let { onMouseDown: t } = e;
          return h(
            "span",
            {
              className: ""
                .concat(wt("weekday-resize-handle"), " ")
                .concat(wt("handle-y")),
              onMouseDown: t,
              "data-testid": "horizontal-event-resize-icon",
            },
            h("i", {
              className: "".concat(wt("icon"), " ").concat(wt("ic-handle-y")),
            })
          );
        }
        const ia = F(null),
          aa = ia.Provider,
          la = () => {
            const e = ie(ia);
            if (Pt()(e))
              throw new Error("LayoutContainerProvider is not found");
            return e;
          },
          ca = "panelResizer",
          sa = (e, t) => "event/".concat(e, "/resize/").concat(t),
          ua = (e, t) => "event/".concat(e, "/move/").concat(t),
          da = (e) => "gridSelection/".concat(e);
        function fa(e) {
          return jr(
            oe((t) => t.calendar.calendars.find((t) => t.id === e), [e])
          );
        }
        function pa(e) {
          var t;
          const n = fa(
            null !== (t = null == e ? void 0 : e.calendarId) && void 0 !== t
              ? t
              : null
          );
          return re(
            () => ({
              color: null == n ? void 0 : n.color,
              borderColor: null == n ? void 0 : n.borderColor,
              backgroundColor: null == n ? void 0 : n.backgroundColor,
              dragBackgroundColor: null == n ? void 0 : n.dragBackgroundColor,
            }),
            [n]
          );
        }
        let ha;
        !(function (e) {
          e.ESCAPE = "Escape";
        })(ha || (ha = {}));
        const ma = { [ha.ESCAPE]: 27 };
        function ga(e, t) {
          const n = Gr(),
            r = ne(e),
            o = ne(t);
          ee(() => {
            (r.current = e), (o.current = t);
          }, [e, t]),
            ee(
              () =>
                n.subscribe(
                  (e) => o.current(e),
                  (e) => r.current(e)
                ),
              [e, n]
            );
        }
        function va(e, t) {
          return e.key ? e.key === t : e.keyCode === ma[t];
        }
        function ya(e) {
          return 0 === e;
        }
        function wa(e, t, n, r) {
          return Math.abs(e - n) >= 3 || Math.abs(t - r) >= 3;
        }
        function _a(e) {
          let {
            onInit: t,
            onDragStart: n,
            onDrag: r,
            onMouseUp: o,
            onPressESCKey: i,
          } = arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {};
          const {
              initDrag: a,
              setDragging: l,
              cancelDrag: c,
              reset: s,
            } = Wr("dnd"),
            u = Gr(),
            d = ne(u.getState().dnd);
          ga(Kr, (e) => {
            d.current = e;
          });
          const [f, p] = J(!1),
            h = ne(null),
            m = ne(null),
            g = ne(null),
            v = oe(
              (n) => {
                ya(n.button) &&
                  (n.currentTarget &&
                    (n.currentTarget.ondragstart = function () {
                      return !1;
                    }),
                  n.preventDefault(),
                  p(!0),
                  a({
                    draggingItemType: e,
                    initX: n.clientX,
                    initY: n.clientY,
                  }),
                  null == t || t(n, d.current));
              },
              [t, e, a]
            ),
            y = oe(
              (t) => {
                const {
                  initX: o,
                  initY: i,
                  draggingState: a,
                  draggingItemType: c,
                } = d.current;
                if (c !== e) return p(!1), void s();
                if (!jt(o) || !jt(i) || wa(o, i, t.clientX, t.clientY)) {
                  if (a <= rr.INIT)
                    return (
                      l({ x: t.clientX, y: t.clientY }),
                      void (null == n || n(t, d.current))
                    );
                  l({ x: t.clientX, y: t.clientY }),
                    null == r || r(t, d.current);
                }
              },
              [e, r, n, l, s]
            ),
            w = oe(
              (e) => {
                e.stopPropagation(),
                  f && (null == o || o(e, d.current), p(!1), s());
              },
              [f, o, s]
            ),
            _ = oe(
              (e) => {
                va(e, ha.ESCAPE) && (p(!1), c(), null == i || i(e, d.current));
              },
              [i, c]
            );
          return (
            ee(() => {
              (h.current = y), (m.current = w), (g.current = _);
            }, [_, y, w]),
            ee(() => {
              const e = (e) => {
                  var t;
                  return null === (t = h.current) || void 0 === t
                    ? void 0
                    : t.call(h, e);
                },
                t = (e) => {
                  var t;
                  return null === (t = m.current) || void 0 === t
                    ? void 0
                    : t.call(m, e);
                },
                n = (e) => {
                  var t;
                  return null === (t = g.current) || void 0 === t
                    ? void 0
                    : t.call(g, e);
                };
              return f
                ? (document.addEventListener("mousemove", e),
                  document.addEventListener("mouseup", t),
                  document.addEventListener("keydown", n),
                  () => {
                    document.removeEventListener("mousemove", e),
                      document.removeEventListener("mouseup", t),
                      document.removeEventListener("keydown", n);
                  })
                : Dr;
            }, [f, s]),
            v
          );
        }
        function ba(e, t) {
          return e ? t : void 0;
        }
        function xa(e) {
          return { vertical: e ? 5 : 2, horizontal: 8 };
        }
        function Da(e, t) {
          const n = e ? 0 : "2px",
            r = t ? 0 : "2px";
          return "".concat(n, " ").concat(r, " ").concat(r, " ").concat(n);
        }
        function ka(e) {
          let { model: t } = e;
          const n = t.calendarId ? "".concat(t.calendarId, "-") : "",
            r = t.id ? "".concat(t.id, "-") : "";
          return "".concat(n).concat(r).concat(t.title);
        }
        const Sa = {
          eventBody: wt("weekday-event"),
          eventTitle: wt("weekday-event-title"),
          eventDot: wt("weekday-event-dot"),
          moveEvent: wt("dragging--move-event"),
          resizeEvent: wt("dragging--resize-horizontal-event"),
        };
        function Ca(e) {
          let {
            flat: t = !1,
            uiModel: n,
            eventHeight: r,
            headerHeight: o,
            resizingWidth: i = null,
            movingLeft: a = null,
          } = e;
          const { currentView: l } = jr(Xr),
            { useDetailPopup: c, isReadOnly: s } = jr(qr),
            { setDraggingEventUIModel: u } = Wr("dnd"),
            { showDetailPopup: d } = Wr("popup"),
            f = la(),
            p = ro(),
            m = pa(n.model),
            [g, v] = J(!1),
            y = ne(null),
            { isReadOnly: w, id: _, calendarId: b } = n.model,
            x = !s && !w && Bt(i) && Bt(a),
            D = (e) => {
              u(n), null == f || f.classList.add(e);
            },
            k = (e) => {
              v(!1), null == f || f.classList.remove(e);
            };
          ga(Kr, (e) => {
            let { draggingEventUIModel: t, draggingState: r } = e;
            r === rr.DRAGGING &&
            (null == t ? void 0 : t.cid()) === n.cid() &&
            Bt(i) &&
            Bt(a)
              ? v(!0)
              : v(!1);
          }),
            ee(() => {
              x && p.fire("afterRenderEvent", n.model.toEventObject());
            }, []);
          const S = _a(sa("dayGrid", "".concat(n.cid())), {
              onDragStart: () => D(Sa.resizeEvent),
              onMouseUp: () => k(Sa.resizeEvent),
              onPressESCKey: () => k(Sa.resizeEvent),
            }),
            C = _a(ua("dayGrid", "".concat(n.cid())), {
              onDragStart: () => {
                x && D(Sa.moveEvent);
              },
              onMouseUp: (e, r) => {
                let { draggingState: o } = r;
                k(Sa.moveEvent);
                o <= rr.INIT &&
                  c &&
                  y.current &&
                  d(
                    {
                      event: n.model,
                      eventRect: y.current.getBoundingClientRect(),
                    },
                    t
                  ),
                  p.fire("clickEvent", {
                    event: n.model.toEventObject(),
                    nativeEvent: e,
                  });
              },
              onPressESCKey: () => k(Sa.moveEvent),
            }),
            E =
              !g &&
              "month" === l &&
              "time" === n.model.category &&
              In(n.model.start, n.model.end),
            I = !x || t || g || n.exceedRight,
            M = (function (e) {
              let {
                flat: t,
                uiModel: n,
                resizingWidth: r,
                movingLeft: o,
                eventHeight: i,
                headerHeight: a,
              } = e;
              const { top: l, left: c, width: s, model: u } = n,
                d = xa(t),
                f = t
                  ? {}
                  : {
                      width: r || _t(s),
                      left: _t(null != o ? o : c),
                      top: (l - 1) * (i + d.vertical) + a,
                      position: "absolute",
                    };
              return Object.assign(f, u.customStyle);
            })({
              uiModel: n,
              eventHeight: r,
              headerHeight: o,
              flat: t,
              movingLeft: a,
              resizingWidth: i,
            }),
            N = (function (e) {
              let {
                uiModel: t,
                flat: n,
                eventHeight: r,
                isDraggingTarget: o,
                calendarColor: i,
              } = e;
              const { exceedLeft: a, exceedRight: l } = t,
                {
                  color: c,
                  backgroundColor: s,
                  dragBackgroundColor: u,
                  borderColor: d,
                } = bt(t, i),
                f = {
                  color: c,
                  backgroundColor: o ? u : s,
                  borderLeft: a ? "none" : "3px solid ".concat(d),
                  borderRadius: Da(a, l),
                  overflow: "hidden",
                  height: r,
                  lineHeight: ((p = r), "".concat(p, "px")),
                  opacity: o ? 0.5 : 1,
                };
              var p;
              const h = xa(n);
              return n
                ? { marginTop: h.vertical, ...f }
                : {
                    marginLeft: a ? 0 : h.horizontal,
                    marginRight: l ? 0 : h.horizontal,
                    ...f,
                  };
            })({
              uiModel: n,
              flat: t,
              eventHeight: r,
              isDraggingTarget: g,
              calendarColor: m,
            });
          return h(
            "div",
            {
              className: wt("weekday-event-block", {
                "weekday-exceed-left": n.exceedLeft,
                "weekday-exceed-right": n.exceedRight,
              }),
              style: M,
              "data-testid": ba(x, ka(n)),
              "data-calendar-id": b,
              "data-event-id": _,
              ref: y,
            },
            h(
              "div",
              {
                className: Sa.eventBody,
                style: {
                  ...N,
                  backgroundColor: E ? null : N.backgroundColor,
                  borderLeft: E ? null : N.borderLeft,
                },
                onMouseDown: (e) => {
                  e.stopPropagation(), C(e);
                },
              },
              E
                ? h("span", {
                    className: Sa.eventDot,
                    style: { backgroundColor: N.backgroundColor },
                  })
                : null,
              h(
                "span",
                { className: Sa.eventTitle },
                h(eo, { template: n.model.category, param: n.model })
              ),
              I
                ? null
                : h(oa, {
                    onMouseDown: (e) => {
                      e.stopPropagation(), x && S(e);
                    },
                  })
            )
          );
        }
        function Ea(e, t) {
          const n = ne(e);
          ee(() => {
            n.current = e;
          }, [e]),
            ee(() => {
              t && n.current();
            }, [t]);
        }
        function Ia(e) {
          const [t, n] = J(null);
          ga(Kr, (t) => {
            if (jt(t.x) && jt(t.y)) {
              const r = e({ clientX: t.x, clientY: t.y });
              r && n(r);
            }
          });
          return [t, oe(() => n(null), [])];
        }
        function Ma(e, t) {
          const [n, r] = J(!1),
            [o, i] = J(!1),
            [a, l] = J(null);
          ga(Kr, (n) => {
            let {
              draggingItemType: o,
              draggingEventUIModel: c,
              draggingState: s,
            } = n;
            const u = ((e, t, n) => {
                return Bt(e)
                  ? null
                  : ((r = e),
                    new RegExp(
                      "^event/".concat(t, "/").concat(n, "/\\d+$")
                    ).test(r)
                      ? cn(e.split("/"))
                      : null);
                var r;
              })(o, e, t),
              d = Number(u) === (null == c ? void 0 : c.cid()),
              f = s === rr.IDLE,
              p = s === rr.CANCELED;
            Bt(a) && d && l(c), jt(a) && (f || p) && (r(!0), i(p));
          });
          return {
            isDraggingEnd: n,
            isDraggingCanceled: o,
            draggingEvent: a,
            clearDraggingEvent: () => {
              l(null), r(!1), i(!1);
            },
          };
        }
        function Na(e) {
          let { rowStyleInfo: t, gridPositionFinder: n } = e;
          const { movingEvent: r, movingLeft: o } = (function (e) {
            let { rowStyleInfo: t, gridPositionFinder: n } = e;
            const r = ro(),
              {
                isDraggingEnd: o,
                isDraggingCanceled: i,
                draggingEvent: a,
                clearDraggingEvent: l,
              } = Ma("dayGrid", "move"),
              c = ne(null),
              [s, u] = Ia(n),
              { columnIndex: d } = null != s ? s : {},
              f = re(
                () =>
                  Bt(a)
                    ? null
                    : t.findIndex((e) => {
                        let { left: t } = e;
                        return t === a.left;
                      }),
                [t, a]
              ),
              p = re(() => {
                if (Bt(d) || Bt(c.current) || Bt(f)) return null;
                const e = f + d - c.current;
                return e < 0 ? -t[-e].left : t[e].left;
              }, [d, t, f]);
            return (
              ee(() => {
                Bt(c.current) && jt(d) && (c.current = d);
              }, [d]),
              Ea(() => {
                if (
                  !i &&
                  jt(a) &&
                  jt(d) &&
                  jt(p) &&
                  d !== c.current &&
                  jt(c.current)
                ) {
                  const e = d - c.current,
                    t = new en(a.model.getStarts()),
                    n = new en(a.model.getEnds());
                  t.addDate(e),
                    n.addDate(e),
                    r.fire("beforeUpdateEvent", {
                      event: a.model.toEventObject(),
                      changes: { start: t, end: n },
                    });
                }
                l(), u(), (c.current = null);
              }, o),
              re(() => ({ movingEvent: a, movingLeft: p }), [p, a])
            );
          })({ rowStyleInfo: t, gridPositionFinder: n });
          return Bt(r)
            ? null
            : h(Ca, {
                uiModel: r,
                eventHeight: ti,
                headerHeight: 0,
                movingLeft: o,
              });
        }
        function Ta(e) {
          let { weekDates: t, gridColWidthMap: n, gridPositionFinder: r } = e;
          const o = ro(),
            {
              isDraggingEnd: i,
              isDraggingCanceled: a,
              draggingEvent: l,
              clearDraggingEvent: c,
            } = Ma("dayGrid", "resize"),
            [s, u] = Ia(r),
            { columnIndex: d } = null != s ? s : {},
            f = re(() => {
              return l
                ? ((n = t),
                  {
                    start: li((e = l).getStarts(), n),
                    end: li(e.getEnds(), n),
                  })
                : { start: -1, end: -1 };
              var e, n;
            }, [t, l]),
            p = re(
              () => (f.start > -1 && jt(d) ? n[f.start][d] : null),
              [d, n, f.start]
            );
          return (
            Ea(() => {
              if (!a && jt(l) && jt(d) && f.start <= d && f.end !== d) {
                const e = t[d];
                o.fire("beforeUpdateEvent", {
                  event: l.model.toEventObject(),
                  changes: { end: e },
                });
              }
              u(), c();
            }, i),
            re(() => ({ resizingEvent: l, resizingWidth: p }), [p, l])
          );
        }
        function Oa(e) {
          let { weekDates: t, gridColWidthMap: n, gridPositionFinder: r } = e;
          const { resizingEvent: o, resizingWidth: i } = Ta({
            weekDates: t,
            gridColWidthMap: n,
            gridPositionFinder: r,
          });
          return Bt(o)
            ? null
            : h(Ca, {
                uiModel: o,
                eventHeight: ti,
                headerHeight: 0,
                resizingWidth: i,
              });
        }
        function Pa() {
          const [e, t] = J(null);
          return [
            e,
            oe((e) => {
              e && t(e);
            }, []),
          ];
        }
        function Aa(e, t) {
          const [n, r] = J(0),
            [o, i] = J(!1),
            { updateDayGridRowHeight: a } = Wr("weekViewLayout");
          return {
            clickedIndex: n,
            isClickedCount: o,
            onClickExceedCount: oe(
              (n) => {
                i(!0), r(n), a({ rowName: t, height: (e + 1) * ti });
              },
              [t, e, a]
            ),
            onClickCollapseButton: oe(() => {
              i(!1), a({ rowName: t, height: ht });
            }, [t, a]),
          };
        }
        function Ra(e) {
          let { onClick: t, onDblClick: n, delay: r = 300 } = e;
          const o = ne(Dr),
            i = (e) => {
              o.current = e;
            },
            a = () => {
              o.current();
            };
          ee(() => a, []);
          return [
            (e) => {
              a(),
                (function (e, t, n) {
                  let r;
                  const o = (i) => {
                      if ((r || (r = i), i - r >= t)) return e(), void n(Dr);
                      const a = requestAnimationFrame(o);
                      n(() => cancelAnimationFrame(a));
                    },
                    i = requestAnimationFrame(o);
                  n(() => cancelAnimationFrame(i));
                })(t.bind(null, e), r, i);
            },
            (e) => {
              a(), n(e);
            },
          ];
        }
        const La = {
          dayGridMonth: "month",
          dayGridWeek: "allday",
          timeGrid: "time",
        };
        function Ha(e) {
          let {
            type: t,
            selectionSorter: n,
            dateGetter: r,
            dateCollection: o,
            gridPositionFinder: i,
          } = e;
          const { useFormPopup: a, gridSelection: l } = jr(qr),
            { enableDblClick: c, enableClick: s } = l,
            {
              setGridSelection: u,
              addGridSelection: d,
              clearAll: f,
            } = Wr("gridSelection"),
            { hideAllPopup: p, showFormPopup: h } = Wr("popup"),
            m = ro(),
            g = la(),
            [v, y] = J(null),
            [w, _] = J(null),
            b = ne(!1),
            x = ne(null);
          ga(
            oe((e) => e.gridSelection[t], [t]),
            (e) => {
              x.current = e;
            }
          ),
            ga(Kr, (e) => {
              let { draggingState: t, draggingItemType: n } = e;
              b.current = n === D && t >= rr.INIT;
            });
          const D = da(t),
            k = (e) => {
              const r = i(e);
              jt(w) && jt(r) && u(t, n(w, r));
            },
            [S, C] = Ra({
              onClick: (e) => {
                s && E(e, !0);
              },
              onDblClick: (e) => {
                c && E(e, !0);
              },
              delay: 250,
            }),
            E = (e, n) => {
              if ((n && k(e), jt(x.current))) {
                var i;
                const [n, l] = (function (e, t) {
                  return e < t ? [e, t] : [t, e];
                })(...r(o, x.current));
                if (a && jt(v)) {
                  const r = {
                    top: (e.clientY + v.y) / 2,
                    left: (e.clientX + v.x) / 2,
                  };
                  h({
                    isCreationPopup: !0,
                    title: "",
                    location: "",
                    start: n,
                    end: l,
                    isAllday: "timeGrid" !== t,
                    isPrivate: !1,
                    popupArrowPointPosition: r,
                    close: f,
                  });
                }
                const c = "."
                    .concat(wt(La[t]), ".")
                    .concat(wt("grid-selection")),
                  s = Array.from(
                    null !== (i = null == g ? void 0 : g.querySelectorAll(c)) &&
                      void 0 !== i
                      ? i
                      : []
                  );
                m.fire("selectDateTime", {
                  start: n.toDate(),
                  end: l.toDate(),
                  isAllday: "timeGrid" !== t,
                  nativeEvent: e,
                  gridSelectionElements: s,
                });
              }
            },
            I = oe(() => {
              y(null), _(null), u(t, null);
            }, [u, t]),
            M = _a(D, {
              onInit: (e) => {
                a && (y({ x: e.clientX, y: e.clientY }), p());
                const n = i(e);
                jt(n) && _(n), a || d(t, x.current);
              },
              onDragStart: (e) => {
                k(e);
              },
              onDrag: (e) => {
                b.current && k(e);
              },
              onMouseUp: (e, t) => {
                let { draggingState: n } = t;
                e.stopPropagation();
                const r = n <= rr.INIT;
                r
                  ? ((e) => {
                      const t = e.detail <= 1;
                      (s || (c && !t)) && (s ? (t ? S(e) : C(e)) : E(e, !0));
                    })(e)
                  : E(e, r);
              },
              onPressESCKey: I,
            });
          return ee(() => I, [I]), M;
        }
        function Fa(e) {
          let {
            events: t,
            weekDates: n,
            height: r = ht,
            options: o = {},
            rowStyleInfo: i,
            gridColWidthMap: a,
          } = e;
          const { isReadOnly: l } = jr(qr),
            c = Eo(po),
            [s, u] = Pa(),
            { narrowWeekend: d = !1 } = o,
            f = re(
              () =>
                Math.max(
                  0,
                  ...t.map((e) => {
                    let { top: t } = e;
                    return t;
                  })
                ),
              [t]
            ),
            p = re(
              () => vi({ container: s, rowsCount: 1, columnsCount: n.length }),
              [n, s]
            ),
            {
              clickedIndex: m,
              isClickedCount: v,
              onClickExceedCount: y,
              onClickCollapseButton: w,
            } = Aa(f, "allday"),
            _ = re(
              () =>
                t.filter(ri(r, ti + 2)).map((e) =>
                  h(Ca, {
                    key: "allday-DayEvent-".concat(e.cid()),
                    uiModel: e,
                    eventHeight: ti,
                    headerHeight: 0,
                  })
                ),
              [t, r]
            ),
            b = Ha({
              type: "dayGridWeek",
              gridPositionFinder: p,
              dateCollection: n,
              selectionSorter: Di.sortSelection,
              dateGetter: Di.getDateFromCollection,
            });
          return h(
            g,
            null,
            h(
              "div",
              { className: wt("panel-title"), style: c },
              h(eo, { template: "alldayTitle", param: "alldayTitle" })
            ),
            h(
              "div",
              {
                className: wt("allday-panel"),
                ref: u,
                onMouseDown: (e) => {
                  const t = e.target;
                  !l && t.classList.contains(wt("panel-grid")) && b(e);
                },
              },
              h(
                "div",
                { className: wt("panel-grid-wrapper") },
                h(ra, {
                  uiModels: t,
                  weekDates: n,
                  narrowWeekend: d,
                  height: r,
                  clickedIndex: m,
                  isClickedCount: v,
                  onClickExceedCount: y,
                  onClickCollapseButton: w,
                })
              ),
              h("div", { className: wt("panel-allday-events") }, _),
              h(Oa, {
                weekDates: n,
                gridPositionFinder: p,
                gridColWidthMap: a,
              }),
              h(Na, { rowStyleInfo: i, gridPositionFinder: p }),
              h(Si, { weekDates: n, narrowWeekend: d })
            )
          );
        }
        function za(e) {
          let {
            events: t,
            weekDates: n,
            category: r,
            height: o = ht,
            options: i = {},
          } = e;
          const a = Eo(po),
            l = re(
              () =>
                Math.max(
                  0,
                  ...t.map((e) => {
                    let { top: t } = e;
                    return t;
                  })
                ),
              [t]
            ),
            { narrowWeekend: c = !1 } = i,
            s = "".concat(r, "Title"),
            {
              clickedIndex: u,
              isClickedCount: d,
              onClickExceedCount: f,
              onClickCollapseButton: p,
            } = Aa(l, r),
            m = re(
              () =>
                t.filter(ri(o, ti + 2)).map((e) =>
                  h(Ca, {
                    key: "".concat(r, "-DayEvent-").concat(e.cid()),
                    uiModel: e,
                    eventHeight: ti,
                    headerHeight: 0,
                  })
                ),
              [r, t, o]
            );
          return h(
            g,
            null,
            h(
              "div",
              { className: wt("panel-title"), style: a },
              h(eo, { template: s, param: r })
            ),
            h(
              "div",
              { className: wt("allday-panel") },
              h(
                "div",
                { className: wt("panel-grid-wrapper") },
                h(ra, {
                  uiModels: t,
                  weekDates: n,
                  narrowWeekend: c,
                  height: o,
                  clickedIndex: u,
                  isClickedCount: d,
                  onClickExceedCount: f,
                  onClickCollapseButton: p,
                })
              ),
              h("div", { className: wt("panel-".concat(r, "-events")) }, m)
            )
          );
        }
        const Ba = {
          detailItem: wt("detail-item"),
          detailItemIndent: wt("detail-item", "detail-item-indent"),
          detailItemSeparate: wt("detail-item", "detail-item-separate"),
          sectionDetail: wt("popup-section", "section-detail"),
          content: wt("content"),
          locationIcon: wt("icon", "ic-location-b"),
          repeatIcon: wt("icon", "ic-repeat-b"),
          userIcon: wt("icon", "ic-user-b"),
          stateIcon: wt("icon", "ic-state-b"),
          calendarDotIcon: wt("icon", "calendar-dot"),
        };
        function ja(e) {
          var t, n;
          let { event: r } = e;
          const {
              location: o,
              recurrenceRule: i,
              attendees: a,
              state: l,
              calendarId: c,
              body: s,
            } = r,
            u = fa(c);
          return h(
            "div",
            { className: Ba.sectionDetail },
            o &&
              h(
                "div",
                { className: Ba.detailItem },
                h("span", { className: Ba.locationIcon }),
                h(
                  "span",
                  { className: Ba.content },
                  h(eo, {
                    template: "popupDetailLocation",
                    param: r,
                    as: "span",
                  })
                )
              ),
            i &&
              h(
                "div",
                { className: Ba.detailItem },
                h("span", { className: Ba.repeatIcon }),
                h(
                  "span",
                  { className: Ba.content },
                  h(eo, {
                    template: "popupDetailRecurrenceRule",
                    param: r,
                    as: "span",
                  })
                )
              ),
            a &&
              h(
                "div",
                { className: Ba.detailItemIndent },
                h("span", { className: Ba.userIcon }),
                h(
                  "span",
                  { className: Ba.content },
                  h(eo, {
                    template: "popupDetailAttendees",
                    param: r,
                    as: "span",
                  })
                )
              ),
            l &&
              h(
                "div",
                { className: Ba.detailItem },
                h("span", { className: Ba.stateIcon }),
                h(
                  "span",
                  { className: Ba.content },
                  h(eo, { template: "popupDetailState", param: r, as: "span" })
                )
              ),
            u &&
              h(
                "div",
                { className: Ba.detailItem },
                h("span", {
                  className: Ba.calendarDotIcon,
                  style: {
                    backgroundColor:
                      null !== (t = null == u ? void 0 : u.backgroundColor) &&
                      void 0 !== t
                        ? t
                        : "",
                  },
                }),
                h(
                  "span",
                  { className: Ba.content },
                  null !== (n = null == u ? void 0 : u.name) && void 0 !== n
                    ? n
                    : ""
                )
              ),
            s &&
              h(
                "div",
                { className: Ba.detailItemSeparate },
                h(
                  "span",
                  { className: Ba.content },
                  h(eo, { template: "popupDetailBody", param: r, as: "span" })
                )
              )
          );
        }
        const Ga = {
          sectionHeader: wt("popup-section", "section-header"),
          content: wt("content"),
          eventTitle: wt("event-title"),
        };
        function Wa(e) {
          let { event: t } = e;
          return h(
            "div",
            { className: Ga.sectionHeader },
            h(
              "div",
              { className: Ga.eventTitle },
              h(eo, { template: "popupDetailTitle", param: t, as: "span" })
            ),
            h(
              "div",
              { className: Ga.content },
              h(eo, { template: "popupDetailDate", param: t, as: "span" })
            )
          );
        }
        const Ua = wt("see-more-popup-slot"),
          Ya = wt("event-form-popup-slot"),
          Va = wt("event-detail-popup-slot"),
          $a = [
            "isPrivate",
            "isAllday",
            "isPending",
            "isFocused",
            "isVisible",
            "isReadOnly",
          ];
        let Xa, qa;
        !(function (e) {
          (e.right = "right"), (e.left = "left");
        })(Xa || (Xa = {})),
          (function (e) {
            (e.top = "top"), (e.bottom = "bottom");
          })(qa || (qa = {}));
        const Ka = F(null);
        function Za(e) {
          let { children: t } = e;
          const [n, r] = Pa(),
            [o, i] = Pa(),
            [a, l] = Pa(),
            [c, s] = Pa(),
            u = {
              container: n,
              seeMorePopupSlot: o,
              formPopupSlot: a,
              detailPopupSlot: c,
            };
          return h(
            Ka.Provider,
            { value: u },
            t,
            h(
              "div",
              { ref: r, className: wt("floating-layer") },
              h("div", { ref: i, className: Ua }),
              h("div", { ref: l, className: Ya }),
              h("div", { ref: s, className: Va })
            )
          );
        }
        const Ja = (e) => {
          var t;
          const n = ie(Ka);
          if (Pt()(n)) throw new Error("FloatingLayerProvider is not found");
          return null !== (t = null == n ? void 0 : n[e]) && void 0 !== t
            ? t
            : null;
        };
        function Qa(e, t, n) {
          return e + n.height > t.top + t.height;
        }
        function el(e, t, n) {
          return e + n.width > t.left + t.width;
        }
        const tl = (e) => e.popup[br.Form],
          nl = (e) => e.popup[br.Detail],
          rl = (e) => e.popup[br.SeeMore],
          ol = {
            popupContainer: wt("popup-container"),
            detailContainer: wt("detail-container"),
            topLine: wt("popup-top-line"),
            border: wt("popup-arrow-border"),
            fill: wt("popup-arrow-fill"),
            sectionButton: wt("popup-section", "section-button"),
            content: wt("content"),
            editIcon: wt("icon", "ic-edit"),
            deleteIcon: wt("icon", "ic-delete"),
            editButton: wt("edit-button"),
            deleteButton: wt("delete-button"),
            verticalLine: wt("vertical-line"),
          };
        function il() {
          const e = jr(nl),
            { event: t, eventRect: n } = null != e ? e : {},
            { showFormPopup: r, hideDetailPopup: o } = Wr("popup"),
            i = pa(t),
            a = la(),
            l = Ja("detailPopupSlot"),
            c = ro(),
            s = ne(null),
            [u, d] = J({}),
            [f, p] = J(0),
            [m, g] = J(Xa.left),
            v = re(
              () =>
                wt("popup-arrow", {
                  right: m === Xa.right,
                  left: m === Xa.left,
                }),
              [m]
            );
          if (
            (te(() => {
              if (s.current && n && a) {
                const e = a.getBoundingClientRect(),
                  t = s.current.getBoundingClientRect(),
                  [r, o] = (function (e, t, n) {
                    let r = e.top + e.height / 2 - n.height / 2,
                      o = e.left + e.width;
                    return (
                      Qa(r, t, n) && (r = t.top + t.height - n.height),
                      el(o, t, n) && (o = e.left - n.width),
                      [
                        Math.max(r, t.top) + window.scrollY,
                        Math.max(o, t.left) + window.scrollX,
                      ]
                    );
                  })(n, e, t),
                  { top: i, direction: l } = (function (e, t, n) {
                    return {
                      top: e.top + e.height / 2 + window.scrollY,
                      direction:
                        e.left + e.width + n.width > t.left + t.width
                          ? Xa.right
                          : Xa.left,
                    };
                  })(n, e, t);
                d({ top: r, left: o }), p(i - r - 8), g(l);
              }
            }, [n, a]),
            Bt(t) || Bt(n) || Bt(l))
          )
            return null;
          const {
              title: y = "",
              isAllday: w = !1,
              start: _ = new en(),
              end: b = new en(),
              location: x,
              state: D,
              isReadOnly: k,
              isPrivate: S,
            } = t,
            C = { top: n.top + n.height / 2, left: n.left + n.width / 2 };
          return ji(
            h(
              "div",
              {
                role: "dialog",
                className: ol.popupContainer,
                ref: s,
                style: u,
              },
              h(
                "div",
                { className: ol.detailContainer },
                h(Wa, { event: t }),
                h(ja, { event: t }),
                !k &&
                  h(
                    "div",
                    { className: ol.sectionButton },
                    h(
                      "button",
                      {
                        type: "button",
                        className: ol.editButton,
                        onClick: () =>
                          r({
                            isCreationPopup: !1,
                            event: t,
                            title: y,
                            location: x,
                            start: _,
                            end: b,
                            isAllday: w,
                            isPrivate: S,
                            eventState: D,
                            popupArrowPointPosition: C,
                          }),
                      },
                      h("span", { className: ol.editIcon }),
                      h(
                        "span",
                        { className: ol.content },
                        h(eo, { template: "popupEdit", as: "span" })
                      )
                    ),
                    h("div", { className: ol.verticalLine }),
                    h(
                      "button",
                      {
                        type: "button",
                        className: ol.deleteButton,
                        onClick: () => {
                          c.fire("beforeDeleteEvent", t.toEventObject()), o();
                        },
                      },
                      h("span", { className: ol.deleteIcon }),
                      h(
                        "span",
                        { className: ol.content },
                        h(eo, { template: "popupDelete", as: "span" })
                      )
                    )
                  )
              ),
              h("div", {
                className: ol.topLine,
                style: { backgroundColor: i.backgroundColor },
              }),
              h(
                "div",
                { className: v },
                h(
                  "div",
                  { className: ol.border, style: { top: f } },
                  h("div", { className: ol.fill })
                )
              )
            ),
            l
          );
        }
        const al = {
          dropdownMenu: wt("dropdown-menu"),
          dropdownMenuItem: wt("dropdown-menu-item"),
          dotIcon: wt("icon", "dot"),
          content: wt("content"),
        };
        function ll(e) {
          let { index: t, name: n, backgroundColor: r, onClick: o } = e;
          return h(
            "li",
            { className: al.dropdownMenuItem, onClick: (e) => o(e, t) },
            h("span", { className: al.dotIcon, style: { backgroundColor: r } }),
            h("span", { className: al.content }, n)
          );
        }
        function cl(e) {
          let { calendars: t, setOpened: n, onChangeIndex: r } = e;
          const o = (e, t) => {
            e.stopPropagation(), n(!1), r(t);
          };
          return h(
            "ul",
            { className: al.dropdownMenu },
            t.map((e, t) => {
              let { name: n, backgroundColor: r = "000" } = e;
              return h(ll, {
                key: "dropdown-".concat(n, "-").concat(t),
                index: t,
                name: n,
                backgroundColor: r,
                onClick: o,
              });
            })
          );
        }
        function sl(e) {
          let { children: t, classNames: n = [], onClick: r = Dr } = e;
          return h(
            "div",
            { className: wt("popup-section", ...n), onClick: r },
            t
          );
        }
        function ul() {
          const [e, t] = J(!1);
          return {
            isOpened: e,
            setOpened: t,
            toggleDropdown: () => t((e) => !e),
          };
        }
        let dl;
        function fl(e, t) {
          switch (t.type) {
            case dl.setCalendarId:
              return { ...e, calendarId: t.calendarId };
            case dl.setPrivate:
              return { ...e, isPrivate: t.isPrivate };
            case dl.setAllday:
              return { ...e, isAllday: t.isAllday };
            case dl.setState:
              return { ...e, state: t.state };
            default:
              return e;
          }
        }
        !(function (e) {
          (e.setCalendarId = "setCalendarId"),
            (e.setPrivate = "setPrivate"),
            (e.setAllday = "setAllday"),
            (e.setState = "setState");
        })(dl || (dl = {}));
        const pl = {
          popupSection: ["dropdown-section", "calendar-section"],
          popupSectionItem: wt("popup-section-item", "popup-button"),
          dotIcon: wt("icon", "dot"),
          content: wt("content", "event-calendar"),
        };
        function hl(e) {
          let { calendars: t, selectedCalendarId: n, formStateDispatch: r } = e;
          const { isOpened: o, setOpened: i, toggleDropdown: a } = ul(),
            l = t.find((e) => e.id === n),
            { backgroundColor: c = "", name: s = "" } = null != l ? l : {};
          return h(
            sl,
            { onClick: a, classNames: pl.popupSection },
            h(
              "button",
              { type: "button", className: pl.popupSectionItem },
              h("span", {
                className: pl.dotIcon,
                style: { backgroundColor: c },
              }),
              h("span", { className: pl.content }, s),
              h("span", {
                className: wt("icon", "ic-dropdown-arrow", { open: o }),
              })
            ),
            o &&
              h(cl, {
                calendars: t,
                setOpened: i,
                onChangeIndex: (e) =>
                  r({ type: dl.setCalendarId, calendarId: t[e].id }),
              })
          );
        }
        const ml = {
          closeButton: wt("popup-button", "popup-close"),
          closeIcon: wt("icon", "ic-close"),
        };
        function gl(e) {
          let { type: t, close: n } = e;
          const { hideAllPopup: r } = Wr("popup");
          return h(
            "button",
            {
              type: "button",
              className: ml.closeButton,
              onClick: () => {
                r(), Gt(n) && n();
              },
            },
            "moreEvents" === t
              ? h(eo, { template: "monthMoreClose" })
              : h("i", { className: ml.closeIcon })
          );
        }
        const vl = { confirmButton: wt("popup-button", "popup-confirm") };
        function yl(e) {
          let { children: t } = e;
          return h(
            "button",
            { type: "submit", className: vl.confirmButton },
            h("span", null, t)
          );
        }
        var wl = r(4268),
          _l = r.n(wl);
        function bl(e) {
          let { template: t, model: n, defaultValue: r = "" } = e;
          const o = jr($r)[t];
          if (Bt(o)) return r;
          let i = o(n);
          return vt()(i) || (i = r), i;
        }
        const xl = {
            datePickerContainer: wt("datepicker-container"),
            datePicker: wt("popup-section-item", "popup-date-picker"),
            allday: wt("popup-section-item", "popup-section-allday"),
            dateIcon: wt("icon", "ic-date"),
            dateDash: wt("popup-date-dash"),
            content: wt("content"),
          },
          Dl = Oi(function (e, t) {
            let {
              start: n,
              end: r,
              isAllday: o = !1,
              formStateDispatch: i,
            } = e;
            const { usageStatistics: a } = jr(qr),
              l = ne(null),
              c = ne(null),
              s = ne(null),
              u = ne(null),
              d = bl({
                template: "startDatePlaceholder",
                defaultValue: "Start Date",
              }),
              f = bl({
                template: "endDatePlaceholder",
                defaultValue: "End Date",
              });
            return (
              ee(() => {
                if (l.current && c.current && s.current && u.current) {
                  const e = new en(n),
                    i = new en(r);
                  o && (e.setHours(12, 0, 0), i.setHours(13, 0, 0)),
                    (t.current = _l().createRangePicker({
                      startpicker: {
                        date: e.toDate(),
                        input: c.current,
                        container: l.current,
                      },
                      endpicker: {
                        date: i.toDate(),
                        input: u.current,
                        container: s.current,
                      },
                      format: o ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
                      timePicker: !o && {
                        showMeridiem: !1,
                        usageStatistics: a,
                      },
                      usageStatistics: a,
                    }));
                }
              }, [n, r, o, a, t]),
              h(
                sl,
                null,
                h(
                  "div",
                  { className: xl.datePicker },
                  h("span", { className: xl.dateIcon }),
                  h("input", {
                    name: "start",
                    className: xl.content,
                    placeholder: d,
                    ref: c,
                  }),
                  h("div", { className: xl.datePickerContainer, ref: l })
                ),
                h("span", { className: xl.dateDash }, "-"),
                h(
                  "div",
                  { className: xl.datePicker },
                  h("span", { className: xl.dateIcon }),
                  h("input", {
                    name: "end",
                    className: xl.content,
                    placeholder: f,
                    ref: u,
                  }),
                  h("div", { className: xl.datePickerContainer, ref: s })
                ),
                h(
                  "div",
                  {
                    className: xl.allday,
                    onClick: () => i({ type: dl.setAllday, isAllday: !o }),
                  },
                  h("span", {
                    className: wt("icon", {
                      "ic-checkbox-normal": !o,
                      "ic-checkbox-checked": o,
                    }),
                  }),
                  h(
                    "span",
                    { className: xl.content },
                    h(eo, { template: "popupIsAllday" })
                  ),
                  h("input", {
                    name: "isAllday",
                    type: "checkbox",
                    className: wt("hidden-input"),
                    value: o ? "true" : "false",
                    checked: o,
                  })
                )
              )
            );
          }),
          kl = ["Busy", "Free"],
          Sl = {
            popupSectionItem: wt("popup-section-item", "dropdown-menu-item"),
            dropdownMenu: wt("dropdown-menu"),
            icon: wt("icon"),
            content: wt("content"),
          };
        function Cl(e) {
          let { setOpened: t, setEventState: n } = e;
          return h(
            "ul",
            { className: Sl.dropdownMenu },
            kl.map((e) =>
              h(
                "li",
                {
                  key: e,
                  className: Sl.popupSectionItem,
                  onClick: (r) =>
                    ((e, r) => {
                      e.stopPropagation(), t(!1), n(r);
                    })(r, e),
                },
                h("span", { className: Sl.icon }),
                h(
                  "span",
                  { className: Sl.content },
                  h(
                    eo,
                    "Busy" === e
                      ? { template: "popupStateBusy" }
                      : { template: "popupStateFree" }
                  )
                )
              )
            )
          );
        }
        const El = {
          popupSection: ["dropdown-section", "state-section"],
          popupSectionItem: wt("popup-section-item", "popup-button"),
          stateIcon: wt("icon", "ic-state"),
          arrowIcon: wt("icon", "ic-dropdown-arrow"),
          content: wt("content", "event-state"),
        };
        function Il(e) {
          let { eventState: t = "Busy", formStateDispatch: n } = e;
          const { isOpened: r, setOpened: o, toggleDropdown: i } = ul();
          return h(
            sl,
            { onClick: i, classNames: El.popupSection },
            h(
              "button",
              { type: "button", className: El.popupSectionItem },
              h("span", { className: El.stateIcon }),
              h(
                "span",
                { className: El.content },
                h(
                  eo,
                  "Busy" === t
                    ? { template: "popupStateBusy" }
                    : { template: "popupStateFree" }
                )
              ),
              h("span", { className: El.arrowIcon })
            ),
            r &&
              h(Cl, {
                setOpened: o,
                setEventState: (e) => n({ type: dl.setState, state: e }),
              })
          );
        }
        const Ml = {
          popupSectionItem: wt("popup-section-item", "popup-section-location"),
          locationIcon: wt("icon", "ic-location"),
          content: wt("content"),
        };
        function Nl(e) {
          let { location: t } = e;
          const n = bl({
            template: "locationPlaceholder",
            defaultValue: "Location",
          });
          return h(
            sl,
            null,
            h(
              "div",
              { className: Ml.popupSectionItem },
              h("span", { className: Ml.locationIcon }),
              h("input", {
                name: "location",
                className: Ml.content,
                placeholder: n,
                value: t,
              })
            )
          );
        }
        const Tl = {
          popupSectionItem: wt("popup-section-item", "popup-section-title"),
          privateButton: wt(
            "popup-section-item",
            "popup-section-private",
            "popup-button"
          ),
          titleIcon: wt("icon", "ic-title"),
          content: wt("content"),
        };
        function Ol(e) {
          let { title: t, isPrivate: n = !1, formStateDispatch: r } = e;
          const o = bl({
            template: "titlePlaceholder",
            defaultValue: "Subject",
          });
          return h(
            sl,
            null,
            h(
              "div",
              { className: Tl.popupSectionItem },
              h("span", { className: Tl.titleIcon }),
              h("input", {
                name: "title",
                className: Tl.content,
                placeholder: o,
                value: t,
                required: !0,
              })
            ),
            h(
              "button",
              {
                type: "button",
                className: Tl.privateButton,
                onClick: () => r({ type: dl.setPrivate, isPrivate: !n }),
              },
              h("span", {
                className: wt("icon", { "ic-private": n, "ic-public": !n }),
              }),
              h("input", {
                name: "isPrivate",
                type: "checkbox",
                className: wt("hidden-input"),
                value: n ? "true" : "false",
                checked: n,
              })
            )
          );
        }
        const Pl = {
          popupContainer: wt("popup-container"),
          formContainer: wt("form-container"),
          popupArrowBorder: wt("popup-arrow-border"),
          popupArrowFill: wt("popup-arrow-fill"),
        };
        function Al() {
          var e, t;
          const { calendars: n } = jr(Yr),
            { hideAllPopup: r } = Wr("popup"),
            o = jr(tl),
            {
              title: i,
              location: a,
              start: l,
              end: c,
              isAllday: s = !1,
              isPrivate: u = !1,
              eventState: d = "Busy",
              popupArrowPointPosition: f,
              close: p,
              isCreationPopup: m,
              event: g,
            } = null != o ? o : {},
            v = ro(),
            y = Ja("formPopupSlot"),
            [w, _] = Q(fl, {
              title: i,
              location: a,
              start: l,
              end: c,
              isAllday: s,
              isPrivate: u,
              calendarId:
                null !== (e = null == g ? void 0 : g.calendarId) && void 0 !== e
                  ? e
                  : null === (t = n[0]) || void 0 === t
                  ? void 0
                  : t.id,
              state: d,
            });
          const b = ne(null),
            x = ne(null),
            [D, k] = J({}),
            [S, C] = J(0),
            [E, I] = J(qa.bottom),
            M = la(),
            N = re(
              () =>
                wt("popup-arrow", {
                  top: E === qa.top,
                  bottom: E === qa.bottom,
                }),
              [E]
            );
          if (
            (te(() => {
              if (x.current && f && M) {
                const e = M.getBoundingClientRect(),
                  t = x.current.getBoundingClientRect(),
                  {
                    top: n,
                    left: r,
                    direction: o,
                  } = (function (e, t, n) {
                    let r = e.top - n.height - 8,
                      o = e.left - n.width / 2,
                      i = qa.bottom;
                    return (
                      r < t.top && ((i = qa.top), (r = e.top + 8)),
                      Qa(r, t, n) && (r = t.top + t.height - n.height),
                      el(o, t, n) && (o = t.left + t.width - n.width),
                      {
                        top: r + window.scrollY,
                        left: Math.max(o, t.left) + window.scrollX,
                        direction: i,
                      }
                    );
                  })(f, e, t),
                  i = f.left - r;
                k({ left: r, top: n }), C(i), I(o);
              }
            }, [M, f]),
            Bt(l) || Bt(c) || Bt(y))
          )
            return null;
          return ji(
            h(
              "div",
              {
                role: "dialog",
                className: Pl.popupContainer,
                ref: x,
                style: D,
              },
              h(
                "form",
                {
                  onSubmit: (e) => {
                    var t, n;
                    e.preventDefault();
                    const o = new FormData(e.target),
                      i = { ...w };
                    if (
                      (o.forEach((e, t) => {
                        i[t] = (function (e) {
                          return -1 !== $a.indexOf(e);
                        })(t)
                          ? "true" === e
                          : e;
                      }),
                      (i.start = new en(
                        null === (t = b.current) || void 0 === t
                          ? void 0
                          : t.getStartDate()
                      )),
                      (i.end = new en(
                        null === (n = b.current) || void 0 === n
                          ? void 0
                          : n.getEndDate()
                      )),
                      m)
                    )
                      v.fire("beforeCreateEvent", i);
                    else if (g) {
                      const e = (function (e, t) {
                        return Object.entries(t).reduce((t, n) => {
                          let [r, o] = n;
                          const i = r;
                          return (
                            e[i] instanceof en
                              ? 0 !== En(e[i], o) && (t[i] = o)
                              : e[i] !== o && (t[i] = o),
                            t
                          );
                        }, {});
                      })(g, i);
                      v.fire("beforeUpdateEvent", {
                        event: g.toEventObject(),
                        changes: e,
                      });
                    }
                    r();
                  },
                },
                h(
                  "div",
                  { className: Pl.formContainer },
                  null != n && n.length
                    ? h(hl, {
                        selectedCalendarId: w.calendarId,
                        calendars: n,
                        formStateDispatch: _,
                      })
                    : h(sl, null),
                  h(Ol, {
                    title: i,
                    isPrivate: w.isPrivate,
                    formStateDispatch: _,
                  }),
                  h(Nl, { location: a }),
                  h(Dl, {
                    start: l,
                    end: c,
                    isAllday: w.isAllday,
                    formStateDispatch: _,
                    ref: b,
                  }),
                  h(Il, { eventState: w.state, formStateDispatch: _ }),
                  h(gl, { type: "form", close: p }),
                  h(
                    sl,
                    null,
                    h(
                      yl,
                      null,
                      h(
                        eo,
                        m
                          ? { template: "popupSave" }
                          : { template: "popupUpdate" }
                      )
                    )
                  )
                ),
                h(
                  "div",
                  { className: N },
                  h(
                    "div",
                    { className: Pl.popupArrowBorder, style: { left: S } },
                    h("div", { className: Pl.popupArrowFill })
                  )
                )
              )
            ),
            y
          );
        }
        function Rl(e) {
          return Object.values(e.popup).find((e) => jt(e));
        }
        function Ll() {
          const e = jr(Rl),
            { hideAllPopup: t } = Wr("popup"),
            n = jt(e);
          return h("div", {
            className: wt("popup-overlay"),
            style: { display: n ? "block" : "none" },
            onClick: (n) => {
              var r;
              n.stopPropagation(),
                null == e ||
                  null === (r = e.close) ||
                  void 0 === r ||
                  r.call(e),
                t();
            },
          });
        }
        const Hl = {
          container: wt("see-more-container"),
          seeMore: wt("see-more"),
          header: wt("see-more-header"),
          list: wt("month-more-list"),
        };
        function Fl() {
          const e = jr(rl),
            { date: t, events: n = [], popupPosition: r } = null != e ? e : {},
            { moreView: o, moreViewTitle: i } = Io(),
            a = Ja("seeMorePopupSlot"),
            l = ro(),
            c = ne(null),
            s = Bt(t) || Bt(r) || Bt(a);
          if (
            (ee(() => {
              !s &&
                c.current &&
                l.fire("clickMoreEventsBtn", {
                  date: t.toDate(),
                  target: c.current,
                });
            }, [t, l, s]),
            s)
          )
            return null;
          const u = {
              height: 44,
              marginBottom: 12,
              padding: "12px 17px 0",
              backgroundColor: i.backgroundColor,
            },
            d = {
              ymd: xn(t, "YYYY-MM-DD"),
              day: t.getDay(),
              date: t.getDate().toString().padStart(2, "0"),
            },
            f = { height: "calc(100% - ".concat(68, "px)") };
          return ji(
            h(
              "div",
              { role: "dialog", className: Hl.container, style: r, ref: c },
              h(
                "div",
                { className: Hl.seeMore, style: o },
                h(
                  "div",
                  { className: Hl.header, style: u },
                  h(eo, { template: "monthMoreTitleDate", param: d }),
                  h(gl, { type: "moreEvents" })
                ),
                h(
                  "div",
                  { className: Hl.list, style: f },
                  n.map((e) =>
                    h(Ca, {
                      key: "see-more-event-item-".concat(e.cid()),
                      uiModel: e,
                      eventHeight: pt,
                      headerHeight: 44,
                      flat: !0,
                    })
                  )
                )
              )
            ),
            a
          );
        }
        function zl(e, t) {
          const n = { height: _t(100) };
          return e && (n.width = e), t && (n.height = t), n;
        }
        function Bl(e) {
          let {
            children: t,
            width: n,
            height: r,
            className: o = "",
            autoAdjustPanels: i = !1,
          } = e;
          const { backgroundColor: a } = Eo(uo),
            [l, c] = Pa(),
            { setLastPanelType: s, updateLayoutHeight: u } =
              Wr("weekViewLayout"),
            d = re(() => "".concat(wt("layout"), " ").concat(o), [o]);
          return (
            te(() => {
              if (l) {
                const e = () => u(l.offsetHeight);
                return (
                  e(),
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }
              return Dr;
            }, [l, u]),
            te(() => {
              if (l && i) {
                const e = k(t),
                  n = e[e.length - 1];
                vt()(n) || Ht()(n) || Bt(n) || s(n.props.name);
              }
            }, [t, s, i, l]),
            h(
              aa,
              { value: l },
              h(
                "div",
                {
                  ref: c,
                  className: d,
                  style: { ...zl(n, r), backgroundColor: a },
                },
                l ? t : null
              ),
              h(Al, null),
              h(il, null),
              h(Fl, null),
              h(Ll, null)
            )
          );
        }
        function jl(e) {
          let { name: t, height: n } = e;
          const r = (function (e, t) {
              return {
                height: e,
                width: "100%",
                cursor: "row-resize",
                borderTop: t,
                borderBottom: t,
              };
            })(n, Eo(oe((e) => e.week.panelResizer.border, []))),
            o = {
              ...r,
              display: "none",
              border: "none",
              backgroundColor: "#999",
            },
            [i, a] = J(o),
            l = ne(null),
            { updateDayGridRowHeightByDiff: c } = Wr("weekViewLayout"),
            s = _a(ca, {
              onDragStart: (e) => {
                l.current = { left: e.pageX, top: e.pageY };
              },
              onDrag: (e) => {
                if (l.current) {
                  const t = e.pageY - l.current.top;
                  a((e) => ({ ...e, top: t, display: null }));
                }
              },
              onMouseUp: (e) => {
                if (l.current) {
                  const n = e.pageY - l.current.top;
                  (l.current = null), a(o), c({ rowName: t, diff: n });
                }
              },
            });
          return h(
            "div",
            { style: { position: "relative" } },
            h("div", {
              className: wt("panel-resizer"),
              style: r,
              onMouseDown: s,
            }),
            h("div", { className: wt("panel-resizer-guide"), style: i })
          );
        }
        function Gl(e, t) {
          return t ? Math.min(t, e) : e;
        }
        const Wl = Oi(function (e, t) {
            let {
              name: n,
              initialWidth: r = ht,
              initialHeight: o = ht,
              overflowX: i,
              overflowY: a,
              maxExpandableWidth: l,
              maxExpandableHeight: c,
              minHeight: s,
              maxHeight: u,
              minWidth: d,
              maxWidth: f,
              resizerWidth: p = lr,
              resizerHeight: m = lr,
              resizable: v,
              children: y,
            } = e;
            const { updateDayGridRowHeight: w } = Wr("weekViewLayout"),
              { height: _ } = jr(
                oe(
                  (e) => {
                    var t;
                    return null !== (t = e.weekViewLayout.dayGridRows[n]) &&
                      void 0 !== t
                      ? t
                      : {};
                  },
                  [n]
                )
              ),
              b = null != _ ? _ : o;
            te(() => {
              w({ rowName: n, height: o });
            }, [o, n, w]);
            const x = (function (e) {
                let {
                  initialHeight: t,
                  initialWidth: n,
                  overflowX: r,
                  overflowY: o,
                  maxExpandableWidth: i,
                  maxExpandableHeight: a,
                  minHeight: l,
                  maxHeight: c,
                  minWidth: s,
                  maxWidth: u,
                } = e;
                const d = {};
                return (
                  n && ((d.width = Gl(n, i)), (d.height = "100%")),
                  t && ((d.width = "100%"), (d.height = Gl(t, a))),
                  r && (d.overflowX = "auto"),
                  o && (d.overflowY = "auto"),
                  { ...d, minHeight: l, maxHeight: c, minWidth: s, maxWidth: u }
                );
              })({
                initialWidth: r,
                initialHeight: b,
                overflowX: i,
                overflowY: a,
                maxExpandableWidth: l,
                maxExpandableHeight: c,
                minHeight: s,
                maxHeight: u,
                minWidth: d,
                maxWidth: f,
              }),
              D = re(() => (Bt(v) || Rt()(v) ? !!v : v.includes(n)), [v, n]);
            return h(
              g,
              null,
              h("div", { className: wt("panel", n), style: x, ref: t }, y),
              D ? h(jl, { name: n, width: p, height: m }) : null
            );
          }),
          Ul = "timegrid",
          Yl = (e) => "".concat(Ul, "-").concat(e),
          Vl = {
            second: "HH:mm:ss",
            minute: "HH:mm",
            hour: "HH:mm",
            date: "HH:mm",
            month: "MM.DD",
            year: "YYYY.MM.DD",
          },
          $l = {
            time: wt("event-time"),
            content: wt("event-time-content"),
            travelTime: wt("travel-time"),
            resizeHandleX: wt("resize-handler-x"),
            moveEvent: wt("dragging--move-event"),
            resizeEvent: wt("dragging--resize-vertical-event"),
          };
        function Xl(e) {
          let {
            uiModel: t,
            nextStartTime: n,
            isResizingGuide: r = !1,
            minHeight: o = 0,
          } = e;
          const { useDetailPopup: i, isReadOnly: a } = jr(qr),
            l = pa(t.model),
            c = la(),
            { showDetailPopup: s } = Wr("popup"),
            { setDraggingEventUIModel: u } = Wr("dnd"),
            d = ro(),
            f = ne(null),
            [p, m] = J(!1),
            {
              model: g,
              goingDurationHeight: v,
              modelDurationHeight: y,
              comingDurationHeight: w,
              croppedEnd: _,
            } = t,
            { id: b, calendarId: x, customStyle: D } = g,
            k = jt(n),
            {
              containerStyle: S,
              goingDurationStyle: C,
              modelDurationStyle: E,
              comingDurationStyle: I,
            } = (function (e) {
              let {
                uiModel: t,
                isDraggingTarget: n,
                hasNextStartTime: r,
                calendarColor: o,
                minHeight: i,
              } = e;
              const {
                  top: a,
                  left: l,
                  height: c,
                  width: s,
                  goingDurationHeight: u,
                  modelDurationHeight: d,
                  comingDurationHeight: f,
                  croppedStart: p,
                  croppedEnd: h,
                } = t,
                m = "white",
                g = l > 0 ? 2 : 0,
                {
                  color: v,
                  backgroundColor: y,
                  borderColor: w,
                  dragBackgroundColor: _,
                } = bt(t, o),
                b = {
                  width:
                    s >= 0 ? "calc(".concat(_t(s), " - ").concat(g, "px)") : "",
                  height: "calc("
                    .concat(_t(Math.max(c, i)), " - ")
                    .concat(2, "px)"),
                  top: _t(a),
                  left: _t(l),
                  borderRadius: 2,
                  borderLeft: "3px solid ".concat(w),
                  marginLeft: g,
                  color: v,
                  backgroundColor: n ? _ : y,
                  opacity: n ? 0.5 : 1,
                  zIndex: r ? 1 : 0,
                },
                x = { height: _t(u), borderBottom: "1px dashed ".concat(m) },
                D = { height: _t(d) },
                k = { height: _t(f), borderTop: "1px dashed ".concat(m) };
              return (
                p &&
                  ((b.borderTopLeftRadius = 0), (b.borderTopRightRadius = 0)),
                h &&
                  ((b.borderBottomLeftRadius = 0),
                  (b.borderBottomRightRadius = 0)),
                {
                  containerStyle: b,
                  goingDurationStyle: x,
                  modelDurationStyle: D,
                  comingDurationStyle: k,
                }
              );
            })({
              uiModel: t,
              isDraggingTarget: p,
              hasNextStartTime: k,
              calendarColor: l,
              minHeight: o,
            }),
            M = k || r;
          ga(Kr, (e) => {
            let { draggingEventUIModel: n, draggingState: o } = e;
            o !== rr.DRAGGING ||
            (null == n ? void 0 : n.cid()) !== t.cid() ||
            k ||
            r
              ? m(!1)
              : m(!0);
          }),
            ee(() => {
              r || d.fire("afterRenderEvent", t.model.toEventObject());
            }, []);
          const N = (e) => {
              u(t), null == c || c.classList.add(e);
            },
            T = (e) => {
              m(!1), null == c || c.classList.remove(e);
            },
            O = _a(ua("timeGrid", "".concat(t.cid())), {
              onDragStart: () => {
                A && N($l.moveEvent);
              },
              onMouseUp: (e, n) => {
                let { draggingState: r } = n;
                T($l.moveEvent);
                r <= rr.INIT &&
                  i &&
                  f.current &&
                  s(
                    {
                      event: t.model,
                      eventRect: f.current.getBoundingClientRect(),
                    },
                    !1
                  ),
                  d.fire("clickEvent", {
                    event: t.model.toEventObject(),
                    nativeEvent: e,
                  });
              },
              onPressESCKey: () => T($l.moveEvent),
            }),
            P = _a(sa("timeGrid", "".concat(t.cid())), {
              onDragStart: () => N($l.resizeEvent),
              onMouseUp: () => T($l.resizeEvent),
              onPressESCKey: () => T($l.resizeEvent),
            }),
            A = (function (e) {
              let {
                uiModel: t,
                isReadOnlyCalendar: n,
                isDraggingTarget: r,
                hasNextStartTime: o,
              } = e;
              const { model: i } = t;
              return !(n || i.isReadOnly || r || o);
            })({
              uiModel: t,
              isReadOnlyCalendar: a,
              isDraggingTarget: p,
              hasNextStartTime: k,
            }),
            R = A && !_;
          return h(
            "div",
            {
              "data-testid": ""
                .concat(M ? "guide-" : "", "time-event-")
                .concat(g.title, "-")
                .concat(t.cid()),
              "data-calendar-id": x,
              "data-event-id": b,
              className: $l.time,
              style: { ...S, ...D },
              onMouseDown: (e) => {
                e.stopPropagation(), O(e);
              },
              ref: f,
            },
            v
              ? h(
                  "div",
                  { className: $l.travelTime, style: C },
                  h(eo, { template: "goingDuration", param: g })
                )
              : null,
            y
              ? h(
                  "div",
                  { className: $l.content, style: E },
                  h(eo, {
                    template: "time",
                    param: { ...g.toEventObject(), start: k ? n : g.start },
                  })
                )
              : null,
            w
              ? h(
                  "div",
                  { className: $l.travelTime, style: I },
                  h(eo, { template: "comingDuration", param: g })
                )
              : null,
            R
              ? h("div", {
                  className: $l.resizeHandleX,
                  onMouseDown: (e) => {
                    e.stopPropagation(), P(e);
                  },
                })
              : null
          );
        }
        function ql(e) {
          let { top: t, height: n, text: r } = e;
          const { backgroundColor: o, border: i } = Eo(
              oe((e) => e.common.gridSelection, [])
            ),
            a = Eo(oe((e) => e.week.gridSelection.color, [])),
            l = { top: _t(t), height: _t(n), backgroundColor: o, border: i };
          return h(
            "div",
            {
              className: wt("time", "grid-selection"),
              style: l,
              "data-testid": "time-grid-selection-".concat(t, "-").concat(n),
            },
            r.length > 0
              ? h(
                  "span",
                  {
                    className: wt("grid-selection-label"),
                    style: { color: a },
                  },
                  r
                )
              : null
          );
        }
        function Kl(e) {
          let { columnIndex: t, timeGridRows: n } = e;
          const r = jr(
              oe((e) => bi.calculateSelection(e.gridSelection.timeGrid, t), [t])
            ),
            o = re(() => {
              if (!r) return null;
              const {
                  startRowIndex: e,
                  endRowIndex: t,
                  isStartingColumn: o,
                  isSelectingMultipleColumns: i,
                } = r,
                { top: a, startTime: l } = n[e],
                { top: c, height: s, endTime: u } = n[t],
                d = c + s - a;
              let f = "".concat(l, " - ").concat(u);
              return i && (f = o ? l : ""), { top: a, height: d, text: f };
            }, [r, n]);
          return Bt(o) ? null : h(ql, o);
        }
        function Zl(e) {
          let {
            gridPositionFinder: t,
            totalUIModels: n,
            columnIndex: r,
            timeGridData: o,
          } = e;
          const i = (function (e) {
            let {
              gridPositionFinder: t,
              totalUIModels: n,
              columnIndex: r,
              timeGridData: o,
            } = e;
            const i = ro(),
              {
                isDraggingEnd: a,
                isDraggingCanceled: l,
                draggingEvent: c,
                clearDraggingEvent: s,
              } = Ma("timeGrid", "resize"),
              [u, d] = Ia(t),
              [f, p] = J(null),
              h = oe(() => {
                p(null), s(), d();
              }, [d, s]),
              m = re(() => {
                if (Bt(c)) return null;
                const { columns: e, rows: t } = o,
                  r = n.map((e) => e.filter((e) => e.cid() === c.cid())),
                  i = (t, n) => (r) => {
                    const i = zn(e[n].date, r.startTime),
                      a = zn(o.columns[n].date, r.endTime);
                    return i <= t && t < a;
                  },
                  a = r.findIndex((e) => e.length > 0),
                  l = r[a][0],
                  { goingDuration: s = 0 } = l.model,
                  u = Fn(l.getStarts(), -s),
                  d = Math.max(t.findIndex(i(u, a)), 0),
                  f = sn(r, (e) => e.length > 0),
                  p = r[f][0],
                  { comingDuration: h = 0 } = p.model,
                  m = Fn(p.getStarts(), h);
                let g = t.findIndex(i(m, f));
                return (
                  (g = g >= 0 ? g : t.length - 1),
                  {
                    eventStartDateColumnIndex: a,
                    eventStartDateRowIndex: d,
                    eventEndDateColumnIndex: f,
                    eventEndDateRowIndex: g,
                    resizeTargetUIModelColumns: r,
                  }
                );
              }, [c, o, n]),
              g = jt(m) && jt(c) && jt(u),
              v = re(() => (m ? o.rows[0].height : 0), [m, o.rows]);
            return (
              ee(() => {
                if (g) {
                  const {
                    eventStartDateRowIndex: e,
                    eventStartDateColumnIndex: t,
                    eventEndDateColumnIndex: n,
                  } = m;
                  if (r === n && t === n) {
                    const t = c.clone(),
                      {
                        height: n,
                        goingDurationHeight: r,
                        comingDurationHeight: i,
                      } = t,
                      a = Math.max(
                        v + (r * n) / 100 + (i * n) / 100,
                        o.rows[u.rowIndex].top - o.rows[e].top + v
                      ),
                      l = (r * n) / a,
                      s = (i * n) / a;
                    t.setUIProps({
                      height: a,
                      goingDurationHeight: l,
                      comingDurationHeight: s,
                      modelDurationHeight: 100 - (l + s),
                    }),
                      p(t);
                  }
                }
              }, [m, g, r, u, c, o.rows, v]),
              ee(() => {
                if (g) {
                  const {
                    resizeTargetUIModelColumns: e,
                    eventStartDateColumnIndex: t,
                    eventEndDateColumnIndex: n,
                  } = m;
                  if ((r === t || r === n) && t !== n) {
                    let n;
                    r === t
                      ? (n = e[r][0].clone())
                      : ((n = c.clone()),
                        n.setUIProps({ height: o.rows[u.rowIndex].top + v })),
                      p(n);
                  }
                }
              }, [m, g, r, u, c, o.rows, v]),
              Ea(() => {
                if (
                  !l &&
                  jt(m) &&
                  jt(u) &&
                  jt(c) &&
                  m.eventEndDateColumnIndex === r
                ) {
                  const { comingDuration: e = 0 } = c.model,
                    t = Fn(
                      zn(o.columns[r].date, o.rows[u.rowIndex].endTime),
                      -e
                    ),
                    n = Fn(c.getStarts(), 30);
                  i.fire("beforeUpdateEvent", {
                    event: c.model.toEventObject(),
                    changes: { end: Mn(n, t) },
                  });
                }
                h();
              }, a),
              f
            );
          })({
            gridPositionFinder: t,
            totalUIModels: n,
            columnIndex: r,
            timeGridData: o,
          });
          return Bt(i) ? null : h(Xl, { uiModel: i, isResizingGuide: !0 });
        }
        const Jl = {
          column: wt("column"),
          backgrounds: wt("background-events"),
          events: wt("events"),
        };
        function Ql(e) {
          let { eventUIModels: t, minEventHeight: n } = e;
          return h(
            "div",
            { className: Jl.events, style: { marginRight: 8 } },
            t.map((e) =>
              h(Xl, {
                key: "".concat(e.valueOf(), "-").concat(e.cid()),
                uiModel: e,
                minHeight: n,
              })
            )
          );
        }
        function ec(e) {
          return {
            defaultBackgroundColor: e.week.dayGrid.backgroundColor,
            todayBackgroundColor: e.week.today.backgroundColor,
            weekendBackgroundColor: e.week.weekend.backgroundColor,
          };
        }
        const tc = Mi(function (e) {
          let {
            columnDate: t,
            columnWidth: n,
            columnIndex: r,
            totalUIModels: o,
            gridPositionFinder: i,
            timeGridData: a,
            isLastColumn: l,
          } = e;
          const { rows: c } = a,
            s = Eo(oe((e) => e.week.timeGrid.borderRight, [])),
            u = Eo(ec),
            [, d] = co(),
            f = (function (e) {
              let {
                today: t,
                columnDate: n,
                defaultBackgroundColor: r,
                todayBackgroundColor: o,
                weekendBackgroundColor: i,
              } = e;
              const a = In(t, n),
                l = On(n.getDay());
              return a ? o : l ? i : r;
            })({ today: d(), columnDate: t, ...u }),
            p = { width: n, backgroundColor: f, borderRight: l ? "none" : s },
            m = o[r],
            g = c[0].height;
          return h(
            "div",
            {
              className: Jl.column,
              style: p,
              "data-testid": "timegrid-column-".concat(t.getDay()),
            },
            h(Ql, { eventUIModels: m, minEventHeight: g }),
            h(Zl, {
              gridPositionFinder: i,
              totalUIModels: o,
              columnIndex: r,
              timeGridData: a,
            }),
            h(Kl, { columnIndex: r, timeGridRows: c })
          );
        });
        function nc(e) {
          return {
            halfHourLineBorder: e.week.timeGridHalfHourLine.borderBottom,
            hourLineBorder: e.week.timeGridHourLine.borderBottom,
          };
        }
        const rc = Mi(function (e) {
          let { timeGridRows: t } = e;
          const { halfHourLineBorder: n, hourLineBorder: r } = Eo(nc);
          return h(
            "div",
            { className: wt("gridlines") },
            t.map((e, t) => {
              const o = t % 2 == 0;
              return h("div", {
                key: "gridline-".concat(e.startTime, "-").concat(e.endTime),
                className: wt("gridline-half"),
                style: {
                  top: _t(e.top),
                  height: _t(e.height),
                  borderBottom: o ? n : r,
                },
                "data-testid": "gridline-"
                  .concat(e.startTime, "-")
                  .concat(e.endTime),
              });
            })
          );
        });
        function oc(e) {
          const t = e.getHours(),
            n = e.getMinutes();
          return 2 * t + Math.floor(n / 30);
        }
        const ic = (e) => e.dnd.initX,
          ac = (e) => e.dnd.initY;
        function lc(e) {
          let { gridPositionFinder: t, timeGridData: n } = e;
          const r = jr(ic),
            o = jr(ac),
            i = ro(),
            {
              isDraggingEnd: a,
              isDraggingCanceled: l,
              draggingEvent: c,
              clearDraggingEvent: s,
            } = Ma("timeGrid", "move"),
            [u, d] = Ia(t),
            f = ne(null);
          ee(() => {
            jt(r) && jt(o) && (f.current = t({ clientX: r, clientY: o }));
          }, [t, r, o]);
          const p = re(
              () =>
                Bt(f.current) || Bt(u)
                  ? null
                  : {
                      columnDiff: u.columnIndex - f.current.columnIndex,
                      rowDiff: u.rowIndex - f.current.rowIndex,
                    },
              [u]
            ),
            h = re(() => (Bt(c) ? null : c.getStarts()), [c]),
            m = oe(() => {
              d(), s(), (f.current = null);
            }, [d, s]),
            g = re(
              () =>
                Bt(p) || Bt(h)
                  ? null
                  : Hn(h, p.rowDiff * bn + p.columnDiff * yn),
              [p, h]
            ),
            v = re(() => {
              if (Bt(c) || Bt(u) || Bt(p)) return null;
              const e = c.clone(),
                { top: t, height: r } = (function (e) {
                  let {
                    draggingEvent: t,
                    columnDiff: n,
                    rowDiff: r,
                    timeGridDataRows: o,
                    currentDate: i,
                  } = e;
                  const a = o[0].height,
                    l = a * o.length,
                    c = r * bn + n * yn,
                    { goingDuration: s = 0, comingDuration: u = 0 } = t.model,
                    d = Fn(t.getStarts(), -s),
                    f = Fn(t.getEnds(), u),
                    p = Hn(d, c),
                    h = Hn(f, c),
                    m = oc(p),
                    g = oc(h),
                    v = p.getDate() < i.getDate(),
                    y = h.getDate() > i.getDate(),
                    w = g - (v ? 0 : m);
                  return {
                    top: v ? 0 : o[m].top,
                    height: y ? l : Math.max(w, 1) * a,
                  };
                })({
                  draggingEvent: e,
                  columnDiff: p.columnDiff,
                  rowDiff: p.rowDiff,
                  timeGridDataRows: n.rows,
                  currentDate: n.columns[u.columnIndex].date,
                });
              return (
                e.setUIProps({
                  left: n.columns[u.columnIndex].left,
                  width: n.columns[u.columnIndex].width,
                  top: t,
                  height: r,
                }),
                e
              );
            }, [u, c, p, n.columns, n.rows]);
          return (
            Ea(() => {
              if (
                !l &&
                jt(c) &&
                jt(u) &&
                jt(p) &&
                jt(g) &&
                (0 !== p.rowDiff || 0 !== p.columnDiff)
              ) {
                const e = c.duration(),
                  t = Hn(g, e);
                i.fire("beforeUpdateEvent", {
                  event: c.model.toEventObject(),
                  changes: { start: g, end: t },
                });
              }
              m();
            }, a),
            { movingEvent: v, nextStartTime: g }
          );
        }
        function cc(e) {
          let { gridPositionFinder: t, timeGridData: n } = e;
          const { movingEvent: r, nextStartTime: o } = lc({
            gridPositionFinder: t,
            timeGridData: n,
          });
          return Bt(r) ? null : h(Xl, { uiModel: r, nextStartTime: o });
        }
        const sc = "timegrid-now-indicator",
          uc = "timegrid-now-indicator-label",
          dc = {
            line: wt(Yl("now-indicator")),
            left: wt(Yl("now-indicator-left")),
            marker: wt(Yl("now-indicator-marker")),
            today: wt(Yl("now-indicator-today")),
            right: wt(Yl("now-indicator-right")),
          };
        function fc(e) {
          return {
            pastBorder: e.week.nowIndicatorPast.border,
            todayBorder: e.week.nowIndicatorToday.border,
            futureBorder: e.week.nowIndicatorFuture.border,
            bulletBackgroundColor: e.week.nowIndicatorBullet.backgroundColor,
          };
        }
        function pc(e) {
          let { top: t, columnWidth: n, columnCount: r, columnIndex: o } = e;
          const {
              pastBorder: i,
              todayBorder: a,
              futureBorder: l,
              bulletBackgroundColor: c,
            } = Eo(fc),
            s = la(),
            u = ro(),
            d = ne(null),
            f = { left: _t(n * o), width: _t(n * o) },
            p = { left: _t(n * (o + 1)), width: _t(n * (r - o + 1)) };
          return (
            ee(() => {
              const e = (e) => {
                var t;
                const n =
                  null !==
                    (t =
                      null == s
                        ? void 0
                        : s.querySelector(
                            ".".concat(wt("panel"), ".").concat(wt("time"))
                          )) && void 0 !== t
                    ? t
                    : null;
                if (n && d.current) {
                  const { offsetHeight: t } = n,
                    { offsetTop: r } = d.current,
                    o = r - t / 2;
                  n.scrollTo
                    ? n.scrollTo({ top: o, behavior: e })
                    : (n.scrollTop = o);
                }
              };
              return u.on("scrollToNow", e), () => u.off("scrollToNow", e);
            }, [u, s]),
            ee(() => {
              u.fire("scrollToNow", "smooth");
            }, [u]),
            h(
              "div",
              {
                ref: d,
                className: dc.line,
                style: { top: _t(t) },
                "data-testid": sc,
              },
              h("div", {
                className: dc.left,
                style: { width: f.width, borderTop: i },
              }),
              h("div", {
                className: dc.marker,
                style: { left: f.left, backgroundColor: c },
              }),
              h("div", {
                className: dc.today,
                style: { left: f.left, width: _t(n), borderTop: a },
              }),
              h("div", {
                className: dc.right,
                style: { left: p.left, borderTop: l },
              })
            )
          );
        }
        const hc = {
          now: Yl("current-time"),
          dayDifference: Yl("day-difference"),
        };
        function mc(e) {
          let { unit: t, top: n, now: r, zonedNow: o } = e;
          const i = Eo(oe((e) => e.week.nowIndicatorLabel.color, [])),
            a = re(() => jn(o, r), [o, r]),
            l = { unit: t, time: o, format: Vl[t] };
          return h(
            "div",
            {
              className: wt(hc.now),
              style: { top: _t(n), color: i },
              "data-testid": uc,
            },
            0 !== a &&
              h(
                "span",
                { className: wt(hc.dayDifference) },
                "[".concat(a > 0 ? "+" : "-").concat(Math.abs(a), "]")
              ),
            h(eo, {
              template: "timegridNowIndicatorLabel",
              param: l,
              as: "span",
            })
          );
        }
        const gc = (e) => {
            var t;
            return null !== (t = e.options.month.visibleEventCount) &&
              void 0 !== t
              ? t
              : 6;
          },
          vc = (e) => e.options.week.showNowIndicator,
          yc = (e) => {
            var t;
            return (
              null !== (t = e.options.week.showTimezoneCollapseButton) &&
              void 0 !== t &&
              t
            );
          },
          wc = (e) => {
            var t;
            return (
              null !== (t = e.options.week.timezonesCollapsed) &&
              void 0 !== t &&
              t
            );
          },
          _c = {
            timeColumn: Yl("time-column"),
            hourRows: Yl("hour-rows"),
            time: Yl("time"),
            timeLabel: Yl("time-label"),
            first: Yl("time-first"),
            last: Yl("time-last"),
            hidden: Yl("time-hidden"),
          };
        function bc(e) {
          return {
            primaryTimezoneBackgroundColor: e.week.timeGridLeft.backgroundColor,
            subTimezoneBackgroundColor:
              e.week.timeGridLeftAdditionalTimezone.backgroundColor,
          };
        }
        function xc(e) {
          return {
            pastTimeColor: e.week.pastTime.color,
            futureTimeColor: e.week.futureTime.color,
          };
        }
        function Dc(e) {
          var t;
          let {
            rowsInfo: n,
            isPrimary: r,
            borderRight: o,
            width: i,
            nowIndicatorState: a,
          } = e;
          const l = jr(vc),
            {
              primaryTimezoneBackgroundColor: c,
              subTimezoneBackgroundColor: s,
            } = Eo(bc),
            { pastTimeColor: u, futureTimeColor: d } = Eo(xc),
            f = jt(a)
              ? Fn(
                  a.now,
                  null !== (t = n[0].diffFromPrimaryTimezone) && void 0 !== t
                    ? t
                    : 0
                )
              : null,
            p = r ? c : s;
          return h(
            "div",
            {
              role: "rowgroup",
              className: wt(_c.hourRows),
              style: { width: _t(i), borderRight: o, backgroundColor: p },
            },
            n.map((e) => {
              let { date: t, top: n, className: o } = e;
              const i = jt(f) && t < f ? u : d;
              return h(
                "div",
                {
                  key: t.getTime(),
                  className: o,
                  style: { top: _t(n), color: i },
                  role: "row",
                },
                h(eo, {
                  template: "timegridDisplay".concat(
                    r ? "Primary" : "",
                    "Time"
                  ),
                  param: { time: t },
                  as: "span",
                })
              );
            }),
            l &&
              jt(a) &&
              jt(f) &&
              h(mc, { unit: "hour", top: a.top, now: a.now, zonedNow: f })
          );
        }
        const kc = Mi(function (e) {
          let { timeGridRows: t, nowIndicatorState: n } = e;
          const r = jr(vc),
            o = jr(ao),
            i = jr(wc),
            a = lo(),
            { width: l, borderRight: c } = Eo(ho),
            s = re(
              () => t.filter((e, n) => n % 2 == 0 || n === t.length - 1),
              [t]
            ),
            u = oe(
              (e, t, o) => {
                const i = 0 === t,
                  a = t === s.length - 1,
                  l = wt(_c.time, {
                    [_c.first]: i,
                    [_c.last]: a,
                    [_c.hidden]: ((e) => {
                      let { top: t, height: o } = e;
                      if (!r || Bt(n)) return !1;
                      const i = n.top;
                      return t - o <= i && i <= t + o;
                    })(e),
                  });
                let c = zn(new en(), a ? e.endTime : e.startTime);
                return (
                  jt(o) && (c = Fn(c, o)),
                  {
                    date: c,
                    top: e.top,
                    className: l,
                    diffFromPrimaryTimezone: o,
                  }
                );
              },
              [s, n, r]
            ),
            [d, ...f] = o,
            p = f.length > 0 ? 100 / (f.length + 1) : 100,
            m = s.map((e, t) => u(e, t)),
            g = re(
              () =>
                0 === f.length
                  ? []
                  : f.reverse().map((e) => {
                      const { timezoneName: t } = e,
                        n = a(d.timezoneName).getTimezoneOffset(),
                        r = a(t).getTimezoneOffset() - n;
                      return s.map((e, t) => u(e, t, r));
                    }),
              [u, f, d, s, a]
            );
          return h(
            "div",
            {
              className: wt(_c.timeColumn),
              style: { width: l },
              "data-testid": "timegrid-time-column",
            },
            !i &&
              g.map((e) =>
                h(Dc, {
                  key: e[0].diffFromPrimaryTimezone,
                  rowsInfo: e,
                  isPrimary: !1,
                  borderRight: c,
                  width: p,
                  nowIndicatorState: n,
                })
              ),
            h(Dc, {
              rowsInfo: m,
              isPrimary: !0,
              borderRight: c,
              width: i ? 100 : p,
              nowIndicatorState: n,
            })
          );
        });
        function Sc(e, t, n) {
          const r = t.getTime(),
            o = n.getTime(),
            i = Jo(e.getTime(), [r], [o]) - r;
          return Jo(Qo(o - r, 100, i), [0], [100]);
        }
        function Cc(e, t, n, r) {
          const o = Sc(e, n, r);
          return { top: o, height: Sc(t, n, r) - o };
        }
        function Ec(e, t) {
          return (n) => {
            const { goingDuration: r = 0, comingDuration: o = 0 } = n.model,
              i = Fn(n.getStarts(), -r);
            return !(Fn(n.getEnds(), o) <= e || i >= t);
          };
        }
        function Ic(e, t, n, r, o) {
          const { goingDuration: i = 0, comingDuration: a = 0 } = e.model,
            l = e.getStarts(),
            c = e.getEnds(),
            s = Fn(l, -i),
            u = Fn(c, a);
          var d, f;
          const p = {
            baseWidth: n,
            columnIndex: t,
            modelStart: l,
            modelEnd: c,
            renderStart: Mn(s, r),
            renderEnd: -1 === En((d = u), (f = o)) ? d : f,
            goingStart: s,
            comingEnd: u,
            startColumnTime: r,
            endColumnTime: o,
          };
          !(function (e, t) {
            const {
                renderStart: n,
                renderEnd: r,
                startColumnTime: o,
                endColumnTime: i,
                baseWidth: a,
                columnIndex: l,
              } = t,
              { top: c, height: s } = Cc(n, r, o, i),
              u = a * l;
            (e.top = c),
              (e.left = u),
              (e.width = a),
              (e.height = s < 1 ? 1 : s);
          })(e, p),
            (function (e, t) {
              const {
                renderStart: n,
                renderEnd: r,
                modelStart: o,
                modelEnd: i,
              } = t;
              let a = 100;
              if (
                (function (e, t) {
                  const { goingStart: n, startColumnTime: r } = t,
                    { goingDuration: o = 0 } = e.model;
                  return o && r <= n;
                })(e, t)
              ) {
                const { height: t } = Cc(n, o, n, r);
                (e.goingDurationHeight = t), (a -= t);
              }
              if (
                (function (e, t) {
                  const { comingEnd: n, endColumnTime: r } = t,
                    { comingDuration: o = 0 } = e.model;
                  return o && r >= n;
                })(e, t)
              ) {
                const { height: t } = Cc(i, r, n, r);
                (e.comingDurationHeight = t), (a -= t);
              }
              a <= 20 && n < i && (a = 20), (e.modelDurationHeight = a);
            })(e, p),
            (function (e, t) {
              const {
                goingStart: n,
                comingEnd: r,
                startColumnTime: o,
                endColumnTime: i,
              } = t;
              n < o && (e.croppedStart = !0), r > i && (e.croppedEnd = !0);
            })(e, p);
        }
        const Mc = { timegrid: wt(Ul), scrollArea: wt(Yl("scroll-area")) };
        function Nc(e) {
          let { timeGridData: t, events: n } = e;
          const { isReadOnly: r } = jr(qr),
            o = jr(vc),
            [, i] = co(),
            a = (function () {
              const e = ne(!0);
              return (
                ee(
                  () => () => {
                    e.current = !1;
                  },
                  []
                ),
                oe(() => e.current, [])
              );
            })(),
            { width: l } = Eo(ho),
            [c, s] = J(null),
            { columns: u, rows: d } = t,
            f = u.length - 1,
            p = re(
              () =>
                u
                  .map((e) => {
                    let { date: t } = e;
                    return n.filter(Ec(kn(t), Tn(t))).map((e) => e.clone());
                  })
                  .map((e, t) =>
                    (function (e, t, n) {
                      const r = e
                        .filter($n)
                        .filter(Ec(t, n))
                        .sort(ln.compare.event.asc);
                      return (
                        Xo(Ro(qn(...r), Po(r, !0), !0)).forEach((e) => {
                          const r = 100 / Math.max(...e.map((e) => e.length));
                          e.forEach((e) => {
                            e.forEach((e, o) => {
                              Ic(e, o, r, t, n);
                            });
                          });
                        }),
                        r
                      );
                    })(
                      e,
                      zn(
                        u[t].date,
                        (function (e) {
                          return e[0];
                        })(d).startTime
                      ),
                      zn(u[t].date, cn(d).endTime)
                    )
                  ),
              [u, d, n]
            ),
            m = re(() => {
              const e = i(),
                n = u.findIndex((t) => In(t.date, e));
              if (n < 0) return null;
              return {
                startTime: zn(u[n].date, t.rows[0].startTime),
                endTime: zn(u[n].date, cn(t.rows).endTime),
                currentDateIndex: n,
              };
            }, [u, i, t.rows]),
            [g, v] = Pa(),
            y = re(
              () =>
                vi({
                  rowsCount: d.length,
                  columnsCount: u.length,
                  container: g,
                }),
              [u.length, g, d.length]
            ),
            w = Ha({
              type: "timeGrid",
              gridPositionFinder: y,
              selectionSorter: bi.sortSelection,
              dateGetter: bi.getDateFromCollection,
              dateCollection: t,
            }),
            _ = oe(() => {
              if (jt(m)) {
                const { startTime: e, endTime: t } = m,
                  n = i();
                e <= n && n <= t && s({ top: Sc(n, e, t), now: n });
              }
            }, [m, i]);
          return (
            te(() => {
              var e;
              a() &&
                ((null !== (e = null == m ? void 0 : m.currentDateIndex) &&
                void 0 !== e
                  ? e
                  : -1) >= 0
                  ? _()
                  : s(null));
            }, [m, a, _]),
            (function (e, t) {
              const n = ne(e);
              ee(() => {
                n.current = e;
              }, [e]),
                ee(() => {
                  const e = null != t ? t : -1;
                  if (e > 0) {
                    const t = setInterval(() => n.current(), e);
                    return () => clearInterval(t);
                  }
                }, [t]);
            })(_, jt(m) ? wn : null),
            h(
              "div",
              { className: Mc.timegrid },
              h(
                "div",
                { className: Mc.scrollArea },
                h(kc, { timeGridRows: d, nowIndicatorState: c }),
                h(
                  "div",
                  {
                    className: wt("columns"),
                    style: { left: l },
                    ref: v,
                    onMouseDown: ba(!r, w),
                  },
                  h(rc, { timeGridRows: d }),
                  h(cc, { gridPositionFinder: y, timeGridData: t }),
                  u.map((e, n) =>
                    h(tc, {
                      key: e.date.toString(),
                      timeGridData: t,
                      columnDate: e.date,
                      columnWidth: _t(e.width),
                      columnIndex: n,
                      totalUIModels: p,
                      gridPositionFinder: y,
                      isLastColumn: n === f,
                    })
                  ),
                  o && jt(m) && jt(c)
                    ? h(pc, {
                        top: c.top,
                        columnWidth: u[0].width,
                        columnCount: u.length,
                        columnIndex: m.currentDateIndex,
                      })
                    : null
                )
              )
            )
          );
        }
        function Tc(e) {
          let { isCollapsed: t } = e;
          const n = ro(),
            r = wt("icon", { "ic-arrow-right": t, "ic-arrow-left": !t });
          return h(
            "button",
            {
              className: wt(Yl("timezone-collapse-button")),
              "aria-expanded": !t,
              onClick: () => n.fire("clickTimezonesCollapseBtn", t),
            },
            h("span", { className: r, role: "img" })
          );
        }
        function Oc() {
          return (
            (Oc = Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
            Oc.apply(this, arguments)
          );
        }
        function Pc(e) {
          let { label: t, offset: n, tooltip: r, width: o = 100, left: i } = e;
          return h(
            "div",
            {
              title: r,
              className: wt(Yl("timezone-label")),
              style: { width: _t(o), height: _t(100), left: _t(i) },
              role: "gridcell",
            },
            h(eo, {
              template: "timezoneDisplayLabel",
              param: { displayLabel: t, timezoneOffset: n },
              as: "span",
            })
          );
        }
        function Ac(e) {
          let { top: t } = e;
          const n = jr(ao),
            { width: r } = Eo(ho),
            o = lo(),
            { showTimezoneCollapseButton: i, timezonesCollapsed: a } =
              (function () {
                const e = jr(yc),
                  t = jr(wc);
                return re(
                  () => ({
                    showTimezoneCollapseButton: e,
                    timezonesCollapsed: t,
                  }),
                  [e, t]
                );
              })();
          if (n.length <= 1) return null;
          const l = n.map((e) => {
              let { displayLabel: t, timezoneName: n, tooltip: r } = e;
              return Pt()(t)
                ? {
                    label: null,
                    offset: o(n).getTimezoneOffset(),
                    tooltip: null != r ? r : n,
                  }
                : { label: t, offset: null, tooltip: null != r ? r : n };
            }),
            [c, ...s] = l,
            u = s.reverse(),
            d = 100 / (a ? 1 : n.length);
          return h(
            "div",
            {
              style: { top: t, width: r },
              role: "columnheader",
              className: wt("timezone-labels-slot"),
            },
            !a &&
              u.map((e, t) => {
                var n;
                return h(
                  Pc,
                  Oc(
                    {
                      key: "subTimezone-".concat(
                        null !== (n = e.label) && void 0 !== n ? n : e.offset
                      ),
                      width: d,
                      left: d * t,
                    },
                    e
                  )
                );
              }),
            i && h(Tc, { isCollapsed: a }),
            h(Pc, Oc({ width: d, left: d * u.length }, c))
          );
        }
        const Rc = { MONTH: "month", WEEK: "week", DAY: "day" },
          Lc = ["milestone", "task"],
          Hc = ["allday", "time"];
        function Fc(e, t) {
          const n = [];
          return (
            !0 === e ? n.push(...Lc) : Array.isArray(e) && n.push(...e),
            !0 === t ? n.push(...Hc) : Array.isArray(t) && n.push(...t),
            n
          );
        }
        function zc(e) {
          const t = jr(oo),
            n = lo();
          return re(() => {
            if ("Local" === t) return e;
            const { timedEvents: r = qn(), totalEvents: o = qn() } = e.groupBy(
              (e) => ("time" === e.category ? "timedEvents" : "totalEvents")
            );
            return (
              r.each((e) => {
                const r =
                  ((i = e),
                  Object.assign(Object.create(Object.getPrototypeOf(i)), i));
                var i;
                (r.start = n(t, r.start)), (r.end = n(t, r.end)), o.add(r);
              }),
              o
            );
          }, [e, t, n]);
        }
        function Bc(e) {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          const o = re(() => e.events.filter(Xn.and(...n)), [e.events, n]),
            i = zc(o);
          return re(() => ({ ...e, events: i }), [e, i]);
        }
        function jc(e, t) {
          ga(Kr, (n) => {
            let { y: r, draggingItemType: o, draggingState: i } = n;
            if (
              jt(e) &&
              (function (e) {
                return /^(event|gridSelection)\/timeGrid/.test(
                  null != e ? e : ""
                );
              })(o) &&
              i === rr.DRAGGING &&
              jt(r)
            ) {
              const { offsetTop: n, offsetHeight: o, scrollHeight: i } = e,
                a = Math.floor(i / t),
                l = n + o;
              if (r < n + a) {
                const t = r - (n + a);
                e.scrollTop = Math.max(0, e.scrollTop + t);
              } else if (r > l - a) {
                const t = r - (l - a);
                e.scrollTop = Math.min(o, e.scrollTop + t);
              }
            }
          });
        }
        function Gc(e) {
          var t, n, r;
          return null === (t = e.weekViewLayout) ||
            void 0 === t ||
            null === (n = t.dayGridRows) ||
            void 0 === n ||
            null === (r = n.time) ||
            void 0 === r
            ? void 0
            : r.height;
        }
        function Wc(e) {
          const t = jr(Gc),
            [n, r] = J(null);
          return (
            te(() => {
              jt(t) && e && r(e.offsetTop);
            }, [t, e]),
            n
          );
        }
        function Uc(e) {
          let { rowIndex: t, weekDates: n, narrowWeekend: r } = e;
          const o = jr(
            oe(
              (e) =>
                e.gridSelection.accumulated.dayGridMonth.map((e) =>
                  xi.calculateSelection(e, t, n.length)
                ),
              [t, n]
            )
          );
          return h(
            "div",
            { className: wt("accumulated-grid-selection") },
            o.map((e) =>
              e
                ? h(wi, {
                    type: "accumulated",
                    gridSelectionData: e,
                    weekDates: n,
                    narrowWeekend: r,
                  })
                : null
            )
          );
        }
        function Yc(e) {
          let { type: t, number: n, onClickButton: r, className: o } = e;
          const { reset: i } = Wr("dnd");
          return h(
            "button",
            {
              type: "button",
              onMouseDown: (e) => {
                e.stopPropagation();
              },
              onClick: () => {
                i(), r();
              },
              className: o,
            },
            h(eo, {
              template: "monthGrid".concat(
                t === Oo.header ? "Header" : "Footer",
                "Exceed"
              ),
              param: n,
            })
          );
        }
        function Vc(e) {
          let { date: t, theme: n, renderDate: r, isToday: o } = e;
          const i = t.getDay(),
            a = r.getMonth() === t.getMonth(),
            {
              common: { holiday: l, saturday: c, today: s, dayName: u },
              month: { dayExceptThisMonth: d, holidayExceptThisMonth: f },
            } = n;
          return o
            ? s.color
            : Pn(i)
            ? a
              ? l.color
              : f.color
            : An(i)
            ? a
              ? c.color
              : d.color
            : a
            ? u.color
            : d.color;
        }
        function $c() {
          const e = Eo(uo),
            t = Io();
          return re(() => ({ common: e, month: t }), [e, t]);
        }
        function Xc(e) {
          let {
            type: t = Oo.header,
            exceedCount: n = 0,
            date: r,
            onClickExceedCount: o,
          } = e;
          const { renderDate: i } = jr(Xr),
            [, a] = co(),
            l = $c(),
            c = l.month.gridCell["".concat(t, "Height")],
            s = xn(r, "YYYYMMDD"),
            u = xn(a(), "YYYYMMDD"),
            d = s === u,
            f = {
              date: xn(r, "YYYY-MM-DD"),
              day: r.getDay(),
              hiddenEventCount: n,
              isOtherMonth: r.getMonth() !== i.getMonth(),
              isToday: s === u,
              month: r.getMonth(),
              ymd: s,
            },
            p = { color: Vc({ date: r, theme: l, isToday: d, renderDate: i }) },
            m = "monthGrid".concat(ur(t));
          return Bt(c)
            ? null
            : h(
                "div",
                { className: wt("grid-cell-".concat(t)), style: { height: c } },
                h(
                  "span",
                  { className: wt("grid-cell-date"), style: p },
                  h(eo, { template: m, param: f })
                ),
                n
                  ? h(Yc, {
                      type: t,
                      number: n,
                      onClickButton: o,
                      className: wt("grid-cell-more-events"),
                    })
                  : null
              );
        }
        function qc(e) {
          let { layoutContainer: t, cell: n, popupSize: r } = e;
          const o = (function (e, t, n) {
            const { width: r, height: o, left: i, top: a } = t,
              { width: l, height: c } = e,
              s = i + r,
              u = a + o;
            let d = n.left + n.width / 2 - l / 2,
              { top: f } = n;
            const p = d + l > s,
              h = f + c > u;
            return (
              d < i && (d = i),
              p && (d = s - l),
              f < a && (f = a),
              h && (f = u - c),
              { top: f + window.scrollY, left: d + window.scrollX }
            );
          })(r, t.getBoundingClientRect(), n.getBoundingClientRect());
          return { ...r, ...o };
        }
        function Kc(e, t, n) {
          const { width: r, height: o } = Eo(mo),
            [i, a] = Pa(),
            [l, c] = J(null);
          return (
            ee(() => {
              if (n && t && i) {
                const a = (function (e) {
                    let {
                      grid: t,
                      offsetWidth: n,
                      eventLength: r,
                      layerSize: o,
                    } = e;
                    const i = Er(t).height + 10;
                    let a = n + 10;
                    const { width: l, height: c } = o;
                    a = Math.max(a, 280);
                    let s = 61;
                    return (
                      (s += r <= 10 ? 26 * r : 260),
                      l && (a = l),
                      c && (s = c),
                      (isNaN(s) || s < i) && (s = i),
                      { width: a, height: s }
                    );
                  })({
                    grid: t,
                    offsetWidth: i.offsetWidth,
                    eventLength: e,
                    layerSize: { width: r, height: o },
                  }),
                  l = qc({ cell: i, layoutContainer: n, popupSize: a });
                c(l);
              }
            }, [n, i, e, t, r, o]),
            { popupPosition: l, containerRefCallback: a }
          );
        }
        function Zc(e) {
          return e.month.weekend.backgroundColor;
        }
        function Jc(e) {
          let {
            date: t,
            events: n = [],
            style: r,
            parentContainer: o,
            contentAreaHeight: i,
          } = e;
          const a = la(),
            { showSeeMorePopup: l } = Wr("popup"),
            c = Eo(Zc),
            { popupPosition: s, containerRefCallback: u } = Kc(n.length, o, a),
            d = oe(() => {
              s && l({ date: t, popupPosition: s, events: n });
            }, [t, n, s, l]),
            f = oi(n, i, 26);
          return h(
            "div",
            {
              className: wt("daygrid-cell"),
              style: { ...r, backgroundColor: On(t.getDay()) ? c : "inherit" },
              ref: u,
            },
            h(Xc, {
              type: Oo.header,
              exceedCount: f,
              date: t,
              onClickExceedCount: d,
            }),
            h(Xc, {
              type: Oo.footer,
              exceedCount: f,
              date: t,
              onClickExceedCount: d,
            })
          );
        }
        const Qc = Mi(function (e) {
          let {
            week: t,
            rowInfo: n,
            gridDateEventModelMap: r = {},
            contentAreaHeight: o,
          } = e;
          const [i, a] = Pa(),
            l = Eo(oe((e) => e.common.border, []));
          return h(
            "div",
            { className: wt("weekday-grid"), style: { borderTop: l }, ref: a },
            t.map((e, t) => {
              const a = e.getDay(),
                { width: l, left: c } = n[t],
                s = xn(kn(e), "YYYYMMDD");
              return h(Jc, {
                key: "daygrid-cell-".concat(a),
                date: e,
                style: { width: _t(l), left: _t(c) },
                parentContainer: i,
                events: r[s],
                contentAreaHeight: o,
              });
            })
          );
        });
        function es(e) {
          let { weekDates: t, narrowWeekend: n, rowIndex: r } = e;
          const o = jr(
            oe(
              (e) =>
                xi.calculateSelection(
                  e.gridSelection.dayGridMonth,
                  r,
                  t.length
                ),
              [r, t.length]
            )
          );
          return Bt(o)
            ? null
            : h(wi, {
                type: "month",
                gridSelectionData: o,
                weekDates: t,
                narrowWeekend: n,
              });
        }
        const ts = Mi(function (e) {
          let {
            contentAreaHeight: t,
            eventHeight: n = ti,
            events: r,
            name: o,
            className: i,
          } = e;
          const { headerHeight: a } = Eo(go),
            l = r.filter(ri(t, n + 2)).map((e) =>
              h(Ca, {
                key: "".concat(o, "-DayEvent-").concat(e.cid()),
                uiModel: e,
                eventHeight: n,
                headerHeight: null != a ? a : 27,
              })
            );
          return h("div", { className: i }, l);
        });
        function ns(e) {
          let {
            dateMatrix: t,
            gridPositionFinder: n,
            rowInfo: r,
            rowIndex: o,
          } = e;
          const i = (function (e) {
            let {
              dateMatrix: t,
              rowInfo: n,
              gridPositionFinder: r,
              rowIndex: o,
            } = e;
            const i = ro(),
              {
                isDraggingEnd: a,
                isDraggingCanceled: l,
                draggingEvent: c,
                clearDraggingEvent: s,
              } = Ma("dayGrid", "move"),
              [u, d] = Ia(r),
              f = re(() => {
                let e = null;
                var t, r;
                return (
                  c &&
                    (null == u ? void 0 : u.rowIndex) === o &&
                    ((e = c),
                    (e.left =
                      n[
                        null !== (t = null == u ? void 0 : u.columnIndex) &&
                        void 0 !== t
                          ? t
                          : 0
                      ].left),
                    (e.width =
                      n[
                        null !== (r = null == u ? void 0 : u.columnIndex) &&
                        void 0 !== r
                          ? r
                          : 0
                      ].width)),
                  e
                );
              }, [
                c,
                null == u ? void 0 : u.rowIndex,
                null == u ? void 0 : u.columnIndex,
                o,
                n,
              ]);
            return (
              Ea(() => {
                if (!l && jt(f) && jt(u)) {
                  const e = f.model.getStarts(),
                    n = f.duration(),
                    r = jn(t[u.rowIndex][u.columnIndex], e) * yn,
                    o = new en(e.getTime() + r),
                    a = new en(o.getTime() + n);
                  i.fire("beforeUpdateEvent", {
                    event: f.model.toEventObject(),
                    changes: { start: o, end: a },
                  });
                }
                s(), d();
              }, a),
              f
            );
          })({ dateMatrix: t, rowInfo: r, gridPositionFinder: n, rowIndex: o });
          return Bt(i)
            ? null
            : h(Ca, {
                uiModel: i,
                movingLeft: i.left,
                eventHeight: ti,
                headerHeight: 30,
              });
        }
        function rs(e, t) {
          return {
            startColumnIndex: Math.max(li(e.getStarts(), t), 0),
            endColumnIndex: li(e.getEnds(), t),
          };
        }
        function os(e) {
          let {
            dateMatrix: t,
            cellWidthMap: n,
            gridPositionFinder: r,
            renderedUIModels: o,
            rowIndex: i,
          } = e;
          const a = (function (e) {
            let {
              dateMatrix: t,
              gridPositionFinder: n,
              renderedUIModels: r,
              cellWidthMap: o,
              rowIndex: i,
            } = e;
            const a = ro(),
              {
                isDraggingEnd: l,
                isDraggingCanceled: c,
                draggingEvent: s,
                clearDraggingEvent: u,
              } = Ma("dayGrid", "resize"),
              [d, f] = Ia(n),
              [p, h] = J(null),
              m = oe(() => {
                h(null), f(), u();
              }, [f, u]),
              g = re(() => {
                if (Bt(s)) return null;
                const e = r.map((e) => {
                    let { uiModels: t } = e;
                    return t.filter((e) => e.cid() === s.cid());
                  }),
                  n = e.findIndex((e) => e.length > 0),
                  o = sn(e, (e) => e.length > 0),
                  i = rs(e[n][0], t[n]),
                  a = rs(e[o][0], t[o]);
                return {
                  eventStartDateColumnIndex: i.startColumnIndex,
                  eventStartDateRowIndex: n,
                  eventEndDateColumnIndex: a.endColumnIndex,
                  eventEndDateRowIndex: o,
                  resizeTargetUIModelRows: e,
                };
              }, [t, r, s]),
              v = jt(g) && jt(s) && jt(d);
            return (
              ee(() => {
                if (v && i === g.eventStartDateRowIndex) {
                  const {
                      eventStartDateRowIndex: e,
                      eventStartDateColumnIndex: n,
                    } = g,
                    r = g.resizeTargetUIModelRows[e][0].clone();
                  let a;
                  e === d.rowIndex
                    ? (a = o[n][Math.max(n, d.columnIndex)])
                    : e > d.rowIndex
                    ? (a = o[n][n])
                    : ((a = o[n][t[i].length - 1]),
                      r.setUIProps({ exceedRight: !0 })),
                    h([r, a]);
                }
              }, [g, v, o, d, t, i]),
              ee(() => {
                if (v && g.eventStartDateRowIndex < i && i < d.rowIndex) {
                  const e = s.clone();
                  e.setUIProps({ left: 0, exceedLeft: !0, exceedRight: !0 }),
                    h([e, "100%"]);
                }
              }, [g, v, d, s, i]),
              ee(() => {
                if (
                  v &&
                  g.eventStartDateRowIndex < d.rowIndex &&
                  i === d.rowIndex
                ) {
                  const e = s.clone();
                  e.setUIProps({ left: 0, exceedLeft: !0 }),
                    h([e, o[0][d.columnIndex]]);
                }
              }, [g, v, o, d, s, i]),
              ee(() => {
                v && i > g.eventStartDateRowIndex && i > d.rowIndex && h(null);
              }, [v, d, g, i]),
              Ea(() => {
                if (v) {
                  const {
                    eventStartDateColumnIndex: e,
                    eventStartDateRowIndex: n,
                  } = g;
                  if (
                    !c &&
                    ((d.rowIndex === n && d.columnIndex >= e) || d.rowIndex > n)
                  ) {
                    const e = t[d.rowIndex][d.columnIndex];
                    a.fire("beforeUpdateEvent", {
                      event: s.model.toEventObject(),
                      changes: { end: e },
                    });
                  }
                }
                m();
              }, l),
              p
            );
          })({
            dateMatrix: t,
            gridPositionFinder: r,
            cellWidthMap: n,
            renderedUIModels: o,
            rowIndex: i,
          });
          if (Bt(a)) return null;
          const [l, c] = a;
          return h(
            "div",
            { className: wt("weekday-events") },
            h(Ca, {
              key: "resizing-event-".concat(l.cid()),
              uiModel: l,
              eventHeight: pt,
              headerHeight: 30,
              resizingWidth: c,
            })
          );
        }
        function is(e) {
          let { dateMatrix: t = [], rowInfo: n = [], cellWidthMap: r = [] } = e;
          const [o, i] = Pa(),
            a = jr(Yr),
            { ref: l, cellContentAreaHeight: c } = (function (e) {
              const t = jr(gc),
                { headerHeight: n, footerHeight: r } = Eo(go),
                o = ne(null),
                [i, a] = J(0);
              return (
                ee(() => {
                  if (o.current) {
                    const i =
                        Er(o.current).height -
                        (3 + (null != n ? n : 27)) -
                        (null != r ? r : 0),
                      l = t * (e + 2);
                    a(Math.min(i, l));
                  }
                }, [r, n, e, t]),
                { ref: o, cellContentAreaHeight: i }
              );
            })(pt),
            { eventFilter: s, month: u, isReadOnly: d } = jr(qr),
            { narrowWeekend: f } = u,
            p = 100 / t.length,
            m = re(
              () =>
                vi({
                  container: o,
                  rowsCount: t.length,
                  columnsCount: t[0].length,
                }),
              [t, o]
            ),
            g = Bc(a, s),
            v = re(() => t.map((e) => si(e, g, f)), [g, t, f]);
          return h(
            "div",
            {
              ref: i,
              onMouseDown: ba(
                !d,
                Ha({
                  type: "dayGridMonth",
                  gridPositionFinder: m,
                  dateCollection: t,
                  dateGetter: xi.getDateFromCollection,
                  selectionSorter: xi.sortSelection,
                })
              ),
              className: wt("month-daygrid"),
            },
            t.map((e, o) => {
              const { uiModels: i, gridDateEventModelMap: a } = v[o];
              return h(
                "div",
                {
                  key: "dayGrid-events-".concat(o),
                  className: wt("month-week-item"),
                  style: { height: _t(p) },
                  ref: l,
                },
                h(
                  "div",
                  { className: wt("weekday") },
                  h(Qc, {
                    gridDateEventModelMap: a,
                    week: e,
                    rowInfo: n,
                    contentAreaHeight: c,
                  }),
                  h(ts, {
                    name: "month",
                    events: i,
                    contentAreaHeight: c,
                    eventHeight: pt,
                    className: wt("weekday-events"),
                  }),
                  h(es, { weekDates: e, narrowWeekend: f, rowIndex: o }),
                  h(Uc, { rowIndex: o, weekDates: e, narrowWeekend: f })
                ),
                h(os, {
                  dateMatrix: t,
                  gridPositionFinder: m,
                  rowIndex: o,
                  cellWidthMap: r,
                  renderedUIModels: v,
                }),
                h(ns, {
                  dateMatrix: t,
                  gridPositionFinder: m,
                  rowIndex: o,
                  rowInfo: n,
                })
              );
            })
          );
        }
        const as = {
          month: function () {
            const e = jr(qr),
              { renderDate: t } = jr(Xr),
              n = (function (e) {
                const { dayNames: t, startDayOfWeek: n, workweek: r } = e.month,
                  o = [...Array(7)].map((e, t) => (n + t) % 7),
                  i = o.map((e) => ({ day: e, label: ur(t[e]) }));
                return i.filter((e) => !r || !On(e.day));
              })(e),
              r = e.month,
              { narrowWeekend: o, startDayOfWeek: i, workweek: a } = r,
              l = re(() => pi(t, r), [r, t]),
              { rowStyleInfo: c, cellWidthMap: s } = re(
                () => Ln(n.length, o, i, a),
                [n.length, o, i, a]
              ),
              u = c.map((e, t) => ({ ...e, date: l[0][t] }));
            return h(
              Bl,
              { className: wt("month") },
              h(To, {
                type: "month",
                dayNames: n,
                options: r,
                rowStyleInfo: c,
              }),
              h(is, { dateMatrix: l, rowInfo: u, cellWidthMap: s })
            );
          },
          week: function () {
            var e, t;
            const {
                options: n,
                calendar: r,
                gridRowLayout: o,
                lastPanelType: i,
                renderDate: a,
              } = (function () {
                const e = jr(qr),
                  t = jr(Yr),
                  { dayGridRows: n, lastPanelType: r } = jr(Vr),
                  { renderDate: o } = jr(Xr);
                return re(
                  () => ({
                    options: e,
                    calendar: t,
                    gridRowLayout: n,
                    lastPanelType: r,
                    renderDate: o,
                  }),
                  [t, n, r, e, o]
                );
              })(),
              l = Eo(oe((e) => e.week.dayGridLeft.width, [])),
              [c, s] = Pa(),
              u = n.week,
              {
                narrowWeekend: d,
                startDayOfWeek: f,
                workweek: p,
                hourStart: m,
                hourEnd: g,
                eventView: v,
                taskView: y,
              } = u,
              w = re(() => hi(a, u), [a, u]),
              _ = pr(
                w,
                null !==
                  (e =
                    null === (t = n.week) || void 0 === t
                      ? void 0
                      : t.dayNames) && void 0 !== e
                  ? e
                  : []
              ),
              { rowStyleInfo: b, cellWidthMap: x } = Ln(w.length, d, f, p),
              D = Bc(r, n.eventFilter),
              k = re(
                () => fi(w, D, { narrowWeekend: d, hourStart: m, hourEnd: g }),
                [D, g, m, d, w]
              ),
              S = re(
                () => mi(w, { hourStart: m, hourEnd: g, narrowWeekend: d }),
                [g, m, d, w]
              ),
              C = Fc(y, v),
              E = C.map((e) => {
                var t, n;
                if ("time" === e) return null;
                const r = e;
                return h(
                  Wl,
                  { name: r, key: r, resizable: r !== i },
                  "allday" === r
                    ? h(Fa, {
                        events: k[r],
                        rowStyleInfo: b,
                        gridColWidthMap: x,
                        weekDates: w,
                        height:
                          null === (t = o[r]) || void 0 === t
                            ? void 0
                            : t.height,
                        options: u,
                      })
                    : h(za, {
                        category: r,
                        events: k[r],
                        weekDates: w,
                        height:
                          null === (n = o[r]) || void 0 === n
                            ? void 0
                            : n.height,
                        options: u,
                        gridColWidthMap: x,
                      })
                );
              }),
              I = re(() => C.includes("time"), [C]);
            jc(c, S.rows.length);
            const M = Wc(c);
            return h(
              Bl,
              { className: wt("week-view"), autoAdjustPanels: !0 },
              h(
                Wl,
                { name: "week-view-day-names", initialHeight: 44 },
                h(To, {
                  type: "week",
                  dayNames: _,
                  marginLeft: l,
                  options: u,
                  rowStyleInfo: b,
                })
              ),
              E,
              I
                ? h(
                    Wl,
                    { name: "time", autoSize: 1, ref: s },
                    h(Nc, { events: k.time, timeGridData: S }),
                    h(Ac, { top: M })
                  )
                : null
            );
          },
          day: function () {
            var e, t;
            const {
                calendar: n,
                options: r,
                gridRowLayout: o,
                lastPanelType: i,
                renderDate: a,
              } = (function () {
                const e = jr(Yr),
                  t = jr(qr),
                  { dayGridRows: n, lastPanelType: r } = jr(Vr),
                  { renderDate: o } = jr(Xr);
                return re(
                  () => ({
                    calendar: e,
                    options: t,
                    gridRowLayout: n,
                    lastPanelType: r,
                    renderDate: o,
                  }),
                  [e, t, n, r, o]
                );
              })(),
              l = Eo(oe((e) => e.week.dayGridLeft.width, [])),
              [c, s] = Pa(),
              u = r.week,
              {
                narrowWeekend: d,
                startDayOfWeek: f,
                workweek: p,
                hourStart: m,
                hourEnd: g,
                eventView: v,
                taskView: y,
              } = u,
              w = re(() => [a], [a]),
              _ = pr(
                w,
                null !==
                  (e =
                    null === (t = r.week) || void 0 === t
                      ? void 0
                      : t.dayNames) && void 0 !== e
                  ? e
                  : []
              ),
              { rowStyleInfo: b, cellWidthMap: x } = Ln(w.length, d, f, p),
              D = Bc(n, r.eventFilter),
              k = fi(w, D, { narrowWeekend: d, hourStart: m, hourEnd: g }),
              S = re(
                () => mi(w, { hourStart: m, hourEnd: g, narrowWeekend: d }),
                [w, g, m, d]
              ),
              C = Fc(y, v),
              E = C.map((e) => {
                var t, n;
                if ("time" === e) return null;
                const r = e;
                return h(
                  Wl,
                  { key: r, name: r, resizable: r !== i },
                  "allday" === r
                    ? h(Fa, {
                        events: k[r],
                        rowStyleInfo: b,
                        gridColWidthMap: x,
                        weekDates: w,
                        height:
                          null === (t = o[r]) || void 0 === t
                            ? void 0
                            : t.height,
                        options: u,
                      })
                    : h(za, {
                        category: r,
                        events: k[r],
                        weekDates: w,
                        height:
                          null === (n = o[r]) || void 0 === n
                            ? void 0
                            : n.height,
                        options: u,
                        gridColWidthMap: x,
                      })
                );
              });
            jc(c, S.rows.length);
            const I = Wc(c);
            return h(
              Bl,
              { className: wt("day-view"), autoAdjustPanels: !0 },
              h(
                Wl,
                { name: "day-view-day-names", initialHeight: 43 },
                h(To, {
                  type: "week",
                  dayNames: _,
                  marginLeft: l,
                  rowStyleInfo: b,
                })
              ),
              E,
              C.includes("time")
                ? h(
                    Wl,
                    { name: "time", autoSize: 1, ref: s },
                    h(Nc, { events: k.time, timeGridData: S }),
                    h(Ac, { top: I })
                  )
                : null
            );
          },
        };
        function ls() {
          const { currentView: e } = jr(Xr);
          return h(
            re(() => as[e] || (() => null), [e]),
            null
          );
        }
        var cs =
            /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,
          ss = /[&<>"]/;
        function us(e) {
          var t = String(e);
          return ss.test(t)
            ? t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
            : t;
        }
        var ds = function (e, t) {
            return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
          },
          fs = function (e, t, n) {
            return (
              String(e).length > (t || 40) ||
              (!n && -1 !== String(e).indexOf("\n")) ||
              -1 !== String(e).indexOf("<")
            );
          },
          ps = {};
        function hs(e) {
          var t = "";
          for (var n in e) {
            var r = e[n];
            null != r &&
              "" !== r &&
              (t && (t += " "),
              (t +=
                "-" == n[0]
                  ? n
                  : ps[n] ||
                    (ps[n] = n.replace(/([A-Z])/g, "-$1").toLowerCase())),
              (t += ": "),
              (t += r),
              "number" == typeof r && !1 === cs.test(n) && (t += "px"),
              (t += ";"));
          }
          return t || void 0;
        }
        function ms(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function gs(e, t) {
          return (
            Array.isArray(t)
              ? t.reduce(gs, e)
              : null != t && !1 !== t && e.push(t),
            e
          );
        }
        var vs = { shallow: !0 },
          ys = [],
          ws =
            /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,
          _s = /[\s\n\\/='"\0<>]/;
        function bs() {
          this.__d = !0;
        }
        Ds.render = Ds;
        var xs = [];
        function Ds(e, n, r) {
          (n = n || {}), (r = r || {});
          var o = t.__s;
          t.__s = !0;
          var i = ks(e, n, r);
          return t.__c && t.__c(e, xs), (xs.length = 0), (t.__s = o), i;
        }
        function ks(e, n, r, o, i, a) {
          if (null == e || "boolean" == typeof e) return "";
          if ("object" != typeof e) return us(e);
          var l = r.pretty,
            c = l && "string" == typeof l ? l : "\t";
          if (Array.isArray(e)) {
            for (var s = "", u = 0; u < e.length; u++)
              l && u > 0 && (s += "\n"), (s += ks(e[u], n, r, o, i, a));
            return s;
          }
          var d,
            f = e.type,
            p = e.props,
            h = !1;
          if ("function" == typeof f) {
            if (
              ((h = !0), !r.shallow || (!o && !1 !== r.renderRootComponent))
            ) {
              if (f === g) {
                var m = [];
                return (
                  gs(m, e.props.children),
                  ks(m, n, r, !1 !== r.shallowHighOrder, i, a)
                );
              }
              var v,
                y = (e.__c = {
                  __v: e,
                  context: n,
                  props: e.props,
                  setState: bs,
                  forceUpdate: bs,
                  __d: !0,
                  __h: [],
                });
              t.__b && t.__b(e);
              var w = t.__r;
              if (f.prototype && "function" == typeof f.prototype.render) {
                var _ = f.contextType,
                  b = _ && n[_.__c],
                  x = null != _ ? (b ? b.props.value : _.__) : n;
                ((y = e.__c = new f(p, x)).__v = e),
                  (y._dirty = y.__d = !0),
                  (y.props = p),
                  null == y.state && (y.state = {}),
                  null == y._nextState &&
                    null == y.__s &&
                    (y._nextState = y.__s = y.state),
                  (y.context = x),
                  f.getDerivedStateFromProps
                    ? (y.state = ms(
                        ms({}, y.state),
                        f.getDerivedStateFromProps(y.props, y.state)
                      ))
                    : y.componentWillMount &&
                      (y.componentWillMount(),
                      (y.state =
                        y._nextState !== y.state
                          ? y._nextState
                          : y.__s !== y.state
                          ? y.__s
                          : y.state)),
                  w && w(e),
                  (v = y.render(y.props, y.state, y.context));
              } else
                for (
                  var D = f.contextType,
                    k = D && n[D.__c],
                    S = null != D ? (k ? k.props.value : D.__) : n,
                    C = 0;
                  y.__d && C++ < 25;

                )
                  (y.__d = !1), w && w(e), (v = f.call(e.__c, p, S));
              return (
                y.getChildContext && (n = ms(ms({}, n), y.getChildContext())),
                t.diffed && t.diffed(e),
                ks(v, n, r, !1 !== r.shallowHighOrder, i, a)
              );
            }
            f =
              (d = f).displayName ||
              (d !== Function && d.name) ||
              (function (e) {
                var t = (Function.prototype.toString
                  .call(e)
                  .match(/^\s*function\s+([^( ]+)/) || "")[1];
                if (!t) {
                  for (var n = -1, r = ys.length; r--; )
                    if (ys[r] === e) {
                      n = r;
                      break;
                    }
                  n < 0 && (n = ys.push(e) - 1), (t = "UnnamedComponent" + n);
                }
                return t;
              })(d);
          }
          var E,
            I,
            M = "<" + f;
          if (p) {
            var N = Object.keys(p);
            r && !0 === r.sortAttributes && N.sort();
            for (var T = 0; T < N.length; T++) {
              var O = N[T],
                P = p[O];
              if ("children" !== O) {
                if (
                  !_s.test(O) &&
                  ((r && r.allAttributes) ||
                    ("key" !== O &&
                      "ref" !== O &&
                      "__self" !== O &&
                      "__source" !== O))
                ) {
                  if ("defaultValue" === O) O = "value";
                  else if ("className" === O) {
                    if (void 0 !== p.class) continue;
                    O = "class";
                  } else
                    i &&
                      O.match(/^xlink:?./) &&
                      (O = O.toLowerCase().replace(/^xlink:?/, "xlink:"));
                  if ("htmlFor" === O) {
                    if (p.for) continue;
                    O = "for";
                  }
                  "style" === O && P && "object" == typeof P && (P = hs(P)),
                    "a" === O[0] &&
                      "r" === O[1] &&
                      "boolean" == typeof P &&
                      (P = String(P));
                  var A = r.attributeHook && r.attributeHook(O, P, n, r, h);
                  if (A || "" === A) M += A;
                  else if ("dangerouslySetInnerHTML" === O) I = P && P.__html;
                  else if ("textarea" === f && "value" === O) E = P;
                  else if (
                    (P || 0 === P || "" === P) &&
                    "function" != typeof P
                  ) {
                    if (!((!0 !== P && "" !== P) || ((P = O), r && r.xml))) {
                      M += " " + O;
                      continue;
                    }
                    if ("value" === O) {
                      if ("select" === f) {
                        a = P;
                        continue;
                      }
                      "option" === f &&
                        a == P &&
                        void 0 === p.selected &&
                        (M += " selected");
                    }
                    M += " " + O + '="' + us(P) + '"';
                  }
                }
              } else E = P;
            }
          }
          if (l) {
            var R = M.replace(/\n\s*/, " ");
            R === M || ~R.indexOf("\n")
              ? l && ~M.indexOf("\n") && (M += "\n")
              : (M = R);
          }
          if (((M += ">"), _s.test(f)))
            throw new Error(f + " is not a valid HTML tag name in " + M);
          var L,
            H = ws.test(f) || (r.voidElements && r.voidElements.test(f)),
            F = [];
          if (I) l && fs(I) && (I = "\n" + c + ds(I, c)), (M += I);
          else if (null != E && gs((L = []), E).length) {
            for (
              var z = l && ~M.indexOf("\n"), B = !1, j = 0;
              j < L.length;
              j++
            ) {
              var G = L[j];
              if (null != G && !1 !== G) {
                var W = ks(
                  G,
                  n,
                  r,
                  !0,
                  "svg" === f || ("foreignObject" !== f && i),
                  a
                );
                if ((l && !z && fs(W) && (z = !0), W))
                  if (l) {
                    var U = W.length > 0 && "<" != W[0];
                    B && U ? (F[F.length - 1] += W) : F.push(W), (B = U);
                  } else F.push(W);
              }
            }
            if (l && z)
              for (var Y = F.length; Y--; ) F[Y] = "\n" + c + ds(F[Y], c);
          }
          if (F.length || I) M += F.join("");
          else if (r && r.xml) return M.substring(0, M.length - 1) + " />";
          return (
            !H || L || I
              ? (l && ~M.indexOf("\n") && (M += "\n"), (M += "</" + f + ">"))
              : (M = M.replace(/>$/, " />")),
            M
          );
        }
        Ds.shallowRender = function (e, t) {
          return Ds(e, t, vs);
        };
        var Ss = Ds,
          Cs = r(1391),
          Es = r.n(Cs);
        function Is(e) {
          let { theme: t, store: n, eventBus: r, children: o } = e;
          return h(
            no,
            { value: r },
            h(So, { store: t }, h(Br, { store: n }, h(Za, null, o)))
          );
        }
        var Ms = r(2278),
          Ns = r.n(Ms);
        class Ts extends Ns() {
          on(e, t) {
            return super.on(e, t), this;
          }
          off(e, t) {
            return super.off(e, t), this;
          }
          fire(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return super.fire(e, ...n), this;
          }
          once(e, t) {
            return super.once(e, t), this;
          }
        }
        var Os = class extends class {
          constructor(e) {
            var t, n;
            let r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            (this.container = vt()(e)
              ? null !==
                  (t =
                    null === (n = document) || void 0 === n
                      ? void 0
                      : n.querySelector(e)) && void 0 !== t
                ? t
                : null
              : e),
              (this.theme = (function () {
                return Fr(
                  ko(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  )
                );
              })(r.theme)),
              (this.eventBus = new Ts()),
              (this.store = (function () {
                return Fr(
                  zr(
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                  )
                );
              })(r)),
              (this.renderRange = this.calculateRenderRange(kn())),
              Jr().addHook("beforeSanitizeAttributes", (e) => {
                if ("A" === e.tagName) {
                  const t = e.getAttribute("target");
                  t ? e.setAttribute(Qr, t) : e.setAttribute("target", "_self");
                }
              }),
              Jr().addHook("afterSanitizeAttributes", (e) => {
                "A" === e.tagName &&
                  e.hasAttribute(Qr) &&
                  (e.setAttribute("target", e.getAttribute(Qr)),
                  e.removeAttribute(Qr),
                  "_blank" === e.getAttribute("target") &&
                    e.setAttribute("rel", "noopener"));
              }),
              !0 === this.getStoreState().options.usageStatistics &&
                Es()("calendar", "UA-129951699-1");
          }
          getStoreState(e) {
            const t = this.store.getState();
            return e ? t[e] : t;
          }
          getStoreDispatchers(e) {
            const t = this.store.getState().dispatch;
            return e ? t[e] : t;
          }
          destroy() {
            this.container && Qi(this.container),
              this.store.clearListeners(),
              this.theme.clearListeners(),
              this.eventBus.off(),
              Jr().removeAllHooks();
            for (const e in this) this.hasOwnProperty(e) && delete this[e];
          }
          calculateMonthRenderDate(e) {
            let { renderDate: t, offset: n, monthOptions: r } = e,
              o = new en(t);
            const { visibleWeeksCount: i } = r;
            o =
              i > 0
                ? Bn(o, 7 * n * i)
                : (function (e) {
                    let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 1;
                    const n = Cn(e);
                    if (0 !== t) {
                      const e = n.getDate(),
                        r = new en(n.getTime());
                      if (
                        (r.setMonth(n.getMonth() + t + 1, 0), e >= r.getDate())
                      )
                        return r;
                      n.setFullYear(r.getFullYear(), r.getMonth(), e);
                    }
                    return n;
                  })(o, n);
            const a = pi(o, r),
              [[l]] = a;
            return { renderDate: o, renderRange: { start: l, end: cn(cn(a)) } };
          }
          calculateWeekRenderDate(e) {
            let { renderDate: t, offset: n, weekOptions: r } = e;
            const o = new en(t);
            o.addDate(7 * n);
            const i = hi(o, r),
              [a] = i;
            return { renderDate: o, renderRange: { start: a, end: cn(i) } };
          }
          calculateDayRenderDate(e) {
            let { renderDate: t, offset: n } = e;
            const r = new en(t);
            r.addDate(n);
            return { renderDate: r, renderRange: { start: kn(r), end: Tn(r) } };
          }
          move(e) {
            if (Bt(e)) return;
            const { currentView: t, renderDate: n } = this.getStoreState().view,
              { options: r } = this.getStoreState(),
              { setRenderDate: o } = this.getStoreDispatchers().view,
              i = new en(n);
            let a = {
              renderDate: i,
              renderRange: { start: new en(i), end: new en(i) },
            };
            "month" === t
              ? (a = this.calculateMonthRenderDate({
                  renderDate: n,
                  offset: e,
                  monthOptions: r.month,
                }))
              : "week" === t
              ? (a = this.calculateWeekRenderDate({
                  renderDate: n,
                  offset: e,
                  weekOptions: r.week,
                }))
              : "day" === t &&
                (a = this.calculateDayRenderDate({ renderDate: n, offset: e })),
              o(a.renderDate),
              (this.renderRange = a.renderRange);
          }
          createEvents(e) {
            const { createEvents: t } = this.getStoreDispatchers("calendar");
            t(e);
          }
          getEventModel(e, t) {
            const { events: n } = this.getStoreState("calendar");
            return n.find((n) => {
              let { id: r, calendarId: o } = n;
              return r === e && o === t;
            });
          }
          getEvent(e, t) {
            var n, r;
            return null !==
              (n =
                null === (r = this.getEventModel(e, t)) || void 0 === r
                  ? void 0
                  : r.toEventObject()) && void 0 !== n
              ? n
              : null;
          }
          updateEvent(e, t, n) {
            const { updateEvent: r } = this.getStoreDispatchers("calendar"),
              o = this.getEventModel(e, t);
            o && r({ event: o, eventData: n });
          }
          deleteEvent(e, t) {
            const { deleteEvent: n } = this.getStoreDispatchers("calendar"),
              r = this.getEventModel(e, t);
            r && n(r);
          }
          setCalendarVisibility(e, t) {
            const { setCalendarVisibility: n } =
              this.getStoreDispatchers("calendar");
            n(Array.isArray(e) ? e : [e], t);
          }
          render() {
            return (
              jt(this.container) &&
                L(
                  h(
                    Is,
                    {
                      theme: this.theme,
                      store: this.store,
                      eventBus: this.eventBus,
                    },
                    this.getComponent()
                  ),
                  this.container
                ),
              this
            );
          }
          renderToString() {
            return Ss(
              h(
                Is,
                {
                  theme: this.theme,
                  store: this.store,
                  eventBus: this.eventBus,
                },
                this.getComponent()
              )
            );
          }
          clear() {
            const { clearEvents: e } = this.getStoreDispatchers("calendar");
            e();
          }
          scrollToNow() {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "auto";
            this.eventBus.fire("scrollToNow", e);
          }
          calculateRenderRange(e) {
            const { currentView: t } = this.getStoreState().view,
              { options: n } = this.getStoreState(),
              r = new en(e);
            let o = { start: new en(r), end: new en(r) };
            return (
              "month" === t
                ? (o = this.calculateMonthRenderDate({
                    renderDate: e,
                    offset: 0,
                    monthOptions: n.month,
                  }).renderRange)
                : "week" === t
                ? (o = this.calculateWeekRenderDate({
                    renderDate: e,
                    offset: 0,
                    weekOptions: n.week,
                  }).renderRange)
                : "day" === t &&
                  (o = this.calculateDayRenderDate({
                    renderDate: e,
                    offset: 0,
                  }).renderRange),
              o
            );
          }
          today() {
            const { setRenderDate: e } = this.getStoreDispatchers().view,
              t = new en();
            e(t), (this.renderRange = this.calculateRenderRange(t));
          }
          setDate(e) {
            const { setRenderDate: t } = this.getStoreDispatchers("view"),
              n = new en(e);
            t(n), (this.renderRange = this.calculateRenderRange(n));
          }
          next() {
            this.move(1);
          }
          prev() {
            this.move(-1);
          }
          setCalendarColor(e, t) {
            const { setCalendarColor: n } = this.getStoreDispatchers().calendar;
            n(e, t);
          }
          changeView(e) {
            const { changeView: t } = this.getStoreDispatchers("view");
            t(e),
              (this.renderRange = this.calculateRenderRange(this.getDate()));
          }
          getElement(e, t) {
            return this.getEvent(e, t) && this.container
              ? this.container.querySelector(
                  '[data-event-id="'
                    .concat(e, '"][data-calendar-id="')
                    .concat(t, '"]')
                )
              : null;
          }
          setTheme(e) {
            const { setTheme: t } = this.theme.getState().dispatch;
            t(e);
          }
          getOptions() {
            const { options: e, template: t } = this.getStoreState(),
              { dispatch: n, ...r } = this.theme.getState();
            return { ...e, template: t, theme: r };
          }
          setOptions(e) {
            const { theme: t, template: n, ...r } = e,
              { setTheme: o } = this.theme.getState().dispatch,
              {
                options: { setOptions: i },
                template: { setTemplate: a },
              } = this.getStoreDispatchers();
            jt(t) && o(t), jt(n) && a(n), i(r);
          }
          getDate() {
            const { renderDate: e } = this.getStoreState().view;
            return e;
          }
          getDateRangeStart() {
            return this.renderRange.start;
          }
          getDateRangeEnd() {
            return this.renderRange.end;
          }
          getViewName() {
            const { currentView: e } = this.getStoreState("view");
            return e;
          }
          setCalendars(e) {
            const { setCalendars: t } = this.getStoreDispatchers().calendar;
            t(e);
          }
          openFormPopup(e) {
            const { showFormPopup: t } = this.getStoreDispatchers().popup,
              n = new Vn(e),
              {
                title: r,
                location: o,
                start: i,
                end: a,
                isAllday: l,
                isPrivate: c,
                state: s,
              } = n;
            t({
              isCreationPopup: !0,
              event: n,
              title: r,
              location: o,
              start: i,
              end: a,
              isAllday: l,
              isPrivate: c,
              eventState: s,
            });
          }
          clearGridSelections() {
            const { clearAll: e } = this.getStoreDispatchers().gridSelection;
            e();
          }
          fire(e) {
            for (
              var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return this.eventBus.fire(e, ...n), this;
          }
          off(e, t) {
            return this.eventBus.off(e, t), this;
          }
          on(e, t) {
            return this.eventBus.on(e, t), this;
          }
          once(e, t) {
            return this.eventBus.once(e, t), this;
          }
        } {
          constructor(e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            super(e, t);
            const { defaultView: n = "week" } = t;
            if (((r = n), !Object.values(Rc).find((e) => e === r)))
              throw new Nt(n);
            var r;
            this.render();
          }
          getComponent() {
            return h(ls, null);
          }
        };
      })(),
      (o = o.default)
    );
  })();
});
