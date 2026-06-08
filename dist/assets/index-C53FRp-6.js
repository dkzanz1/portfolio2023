(function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) u(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const m of d.addedNodes)
          m.tagName === "LINK" && m.rel === "modulepreload" && u(m);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function u(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = o(f);
    fetch(f.href, d);
  }
})();
function Xs(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
var cs = { exports: {} },
  Ei = {},
  fs = { exports: {} },
  de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zf;
function b0() {
  if (Zf) return de;
  Zf = 1;
  var r = Symbol.for("react.element"),
    a = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.provider"),
    m = Symbol.for("react.context"),
    v = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    F = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    j = Symbol.iterator;
  function V(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (j && w[j]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var ce = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    fe = Object.assign,
    te = {};
  function G(w, N, oe) {
    ((this.props = w),
      (this.context = N),
      (this.refs = te),
      (this.updater = oe || ce));
  }
  ((G.prototype.isReactComponent = {}),
    (G.prototype.setState = function (w, N) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, N, "setState");
    }),
    (G.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function me() {}
  me.prototype = G.prototype;
  function Q(w, N, oe) {
    ((this.props = w),
      (this.context = N),
      (this.refs = te),
      (this.updater = oe || ce));
  }
  var pe = (Q.prototype = new me());
  ((pe.constructor = Q), fe(pe, G.prototype), (pe.isPureReactComponent = !0));
  var he = Array.isArray,
    le = Object.prototype.hasOwnProperty,
    Ie = { current: null },
    Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function be(w, N, oe) {
    var ue,
      ve = {},
      ge = null,
      _e = null;
    if (N != null)
      for (ue in (N.ref !== void 0 && (_e = N.ref),
      N.key !== void 0 && (ge = "" + N.key),
      N))
        le.call(N, ue) && !Le.hasOwnProperty(ue) && (ve[ue] = N[ue]);
    var we = arguments.length - 2;
    if (we === 1) ve.children = oe;
    else if (1 < we) {
      for (var Pe = Array(we), ut = 0; ut < we; ut++)
        Pe[ut] = arguments[ut + 2];
      ve.children = Pe;
    }
    if (w && w.defaultProps)
      for (ue in ((we = w.defaultProps), we))
        ve[ue] === void 0 && (ve[ue] = we[ue]);
    return {
      $$typeof: r,
      type: w,
      key: ge,
      ref: _e,
      props: ve,
      _owner: Ie.current,
    };
  }
  function st(w, N) {
    return {
      $$typeof: r,
      type: w.type,
      key: N,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function Ve(w) {
    return typeof w == "object" && w !== null && w.$$typeof === r;
  }
  function Nt(w) {
    var N = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (oe) {
        return N[oe];
      })
    );
  }
  var ne = /\/+/g;
  function ie(w, N) {
    return typeof w == "object" && w !== null && w.key != null
      ? Nt("" + w.key)
      : N.toString(36);
  }
  function Se(w, N, oe, ue, ve) {
    var ge = typeof w;
    (ge === "undefined" || ge === "boolean") && (w = null);
    var _e = !1;
    if (w === null) _e = !0;
    else
      switch (ge) {
        case "string":
        case "number":
          _e = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case r:
            case a:
              _e = !0;
          }
      }
    if (_e)
      return (
        (_e = w),
        (ve = ve(_e)),
        (w = ue === "" ? "." + ie(_e, 0) : ue),
        he(ve)
          ? ((oe = ""),
            w != null && (oe = w.replace(ne, "$&/") + "/"),
            Se(ve, N, oe, "", function (ut) {
              return ut;
            }))
          : ve != null &&
            (Ve(ve) &&
              (ve = st(
                ve,
                oe +
                  (!ve.key || (_e && _e.key === ve.key)
                    ? ""
                    : ("" + ve.key).replace(ne, "$&/") + "/") +
                  w,
              )),
            N.push(ve)),
        1
      );
    if (((_e = 0), (ue = ue === "" ? "." : ue + ":"), he(w)))
      for (var we = 0; we < w.length; we++) {
        ge = w[we];
        var Pe = ue + ie(ge, we);
        _e += Se(ge, N, oe, Pe, ve);
      }
    else if (((Pe = V(w)), typeof Pe == "function"))
      for (w = Pe.call(w), we = 0; !(ge = w.next()).done; )
        ((ge = ge.value),
          (Pe = ue + ie(ge, we++)),
          (_e += Se(ge, N, oe, Pe, ve)));
    else if (ge === "object")
      throw (
        (N = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (N === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : N) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    return _e;
  }
  function Ce(w, N, oe) {
    if (w == null) return w;
    var ue = [],
      ve = 0;
    return (
      Se(w, ue, "", "", function (ge) {
        return N.call(oe, ge, ve++);
      }),
      ue
    );
  }
  function Ne(w) {
    if (w._status === -1) {
      var N = w._result;
      ((N = N()),
        N.then(
          function (oe) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = oe));
          },
          function (oe) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = oe));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = N)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ye = { current: null },
    D = { transition: null },
    q = {
      ReactCurrentDispatcher: ye,
      ReactCurrentBatchConfig: D,
      ReactCurrentOwner: Ie,
    };
  function U() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (de.Children = {
      map: Ce,
      forEach: function (w, N, oe) {
        Ce(
          w,
          function () {
            N.apply(this, arguments);
          },
          oe,
        );
      },
      count: function (w) {
        var N = 0;
        return (
          Ce(w, function () {
            N++;
          }),
          N
        );
      },
      toArray: function (w) {
        return (
          Ce(w, function (N) {
            return N;
          }) || []
        );
      },
      only: function (w) {
        if (!Ve(w))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return w;
      },
    }),
    (de.Component = G),
    (de.Fragment = o),
    (de.Profiler = f),
    (de.PureComponent = Q),
    (de.StrictMode = u),
    (de.Suspense = P),
    (de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
    (de.act = U),
    (de.cloneElement = function (w, N, oe) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            ".",
        );
      var ue = fe({}, w.props),
        ve = w.key,
        ge = w.ref,
        _e = w._owner;
      if (N != null) {
        if (
          (N.ref !== void 0 && ((ge = N.ref), (_e = Ie.current)),
          N.key !== void 0 && (ve = "" + N.key),
          w.type && w.type.defaultProps)
        )
          var we = w.type.defaultProps;
        for (Pe in N)
          le.call(N, Pe) &&
            !Le.hasOwnProperty(Pe) &&
            (ue[Pe] = N[Pe] === void 0 && we !== void 0 ? we[Pe] : N[Pe]);
      }
      var Pe = arguments.length - 2;
      if (Pe === 1) ue.children = oe;
      else if (1 < Pe) {
        we = Array(Pe);
        for (var ut = 0; ut < Pe; ut++) we[ut] = arguments[ut + 2];
        ue.children = we;
      }
      return {
        $$typeof: r,
        type: w.type,
        key: ve,
        ref: ge,
        props: ue,
        _owner: _e,
      };
    }),
    (de.createContext = function (w) {
      return (
        (w = {
          $$typeof: m,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: d, _context: w }),
        (w.Consumer = w)
      );
    }),
    (de.createElement = be),
    (de.createFactory = function (w) {
      var N = be.bind(null, w);
      return ((N.type = w), N);
    }),
    (de.createRef = function () {
      return { current: null };
    }),
    (de.forwardRef = function (w) {
      return { $$typeof: v, render: w };
    }),
    (de.isValidElement = Ve),
    (de.lazy = function (w) {
      return { $$typeof: A, _payload: { _status: -1, _result: w }, _init: Ne };
    }),
    (de.memo = function (w, N) {
      return { $$typeof: F, type: w, compare: N === void 0 ? null : N };
    }),
    (de.startTransition = function (w) {
      var N = D.transition;
      D.transition = {};
      try {
        w();
      } finally {
        D.transition = N;
      }
    }),
    (de.unstable_act = U),
    (de.useCallback = function (w, N) {
      return ye.current.useCallback(w, N);
    }),
    (de.useContext = function (w) {
      return ye.current.useContext(w);
    }),
    (de.useDebugValue = function () {}),
    (de.useDeferredValue = function (w) {
      return ye.current.useDeferredValue(w);
    }),
    (de.useEffect = function (w, N) {
      return ye.current.useEffect(w, N);
    }),
    (de.useId = function () {
      return ye.current.useId();
    }),
    (de.useImperativeHandle = function (w, N, oe) {
      return ye.current.useImperativeHandle(w, N, oe);
    }),
    (de.useInsertionEffect = function (w, N) {
      return ye.current.useInsertionEffect(w, N);
    }),
    (de.useLayoutEffect = function (w, N) {
      return ye.current.useLayoutEffect(w, N);
    }),
    (de.useMemo = function (w, N) {
      return ye.current.useMemo(w, N);
    }),
    (de.useReducer = function (w, N, oe) {
      return ye.current.useReducer(w, N, oe);
    }),
    (de.useRef = function (w) {
      return ye.current.useRef(w);
    }),
    (de.useState = function (w) {
      return ye.current.useState(w);
    }),
    (de.useSyncExternalStore = function (w, N, oe) {
      return ye.current.useSyncExternalStore(w, N, oe);
    }),
    (de.useTransition = function () {
      return ye.current.useTransition();
    }),
    (de.version = "18.3.1"),
    de
  );
}
var Jf;
function qs() {
  return (Jf || ((Jf = 1), (fs.exports = b0())), fs.exports);
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed;
function V0() {
  if (ed) return Ei;
  ed = 1;
  var r = qs(),
    a = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(v, P, F) {
    var A,
      j = {},
      V = null,
      ce = null;
    (F !== void 0 && (V = "" + F),
      P.key !== void 0 && (V = "" + P.key),
      P.ref !== void 0 && (ce = P.ref));
    for (A in P) u.call(P, A) && !d.hasOwnProperty(A) && (j[A] = P[A]);
    if (v && v.defaultProps)
      for (A in ((P = v.defaultProps), P)) j[A] === void 0 && (j[A] = P[A]);
    return {
      $$typeof: a,
      type: v,
      key: V,
      ref: ce,
      props: j,
      _owner: f.current,
    };
  }
  return ((Ei.Fragment = o), (Ei.jsx = m), (Ei.jsxs = m), Ei);
}
var td;
function U0() {
  return (td || ((td = 1), (cs.exports = V0())), cs.exports);
}
var C = U0(),
  Bt = qs();
const De = Xs(Bt);
var Gl = {},
  ds = { exports: {} },
  wt = {},
  ps = { exports: {} },
  ms = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nd;
function W0() {
  return (
    nd ||
      ((nd = 1),
      (function (r) {
        function a(D, q) {
          var U = D.length;
          D.push(q);
          e: for (; 0 < U; ) {
            var w = (U - 1) >>> 1,
              N = D[w];
            if (0 < f(N, q)) ((D[w] = q), (D[U] = N), (U = w));
            else break e;
          }
        }
        function o(D) {
          return D.length === 0 ? null : D[0];
        }
        function u(D) {
          if (D.length === 0) return null;
          var q = D[0],
            U = D.pop();
          if (U !== q) {
            D[0] = U;
            e: for (var w = 0, N = D.length, oe = N >>> 1; w < oe; ) {
              var ue = 2 * (w + 1) - 1,
                ve = D[ue],
                ge = ue + 1,
                _e = D[ge];
              if (0 > f(ve, U))
                ge < N && 0 > f(_e, ve)
                  ? ((D[w] = _e), (D[ge] = U), (w = ge))
                  : ((D[w] = ve), (D[ue] = U), (w = ue));
              else if (ge < N && 0 > f(_e, U))
                ((D[w] = _e), (D[ge] = U), (w = ge));
              else break e;
            }
          }
          return q;
        }
        function f(D, q) {
          var U = D.sortIndex - q.sortIndex;
          return U !== 0 ? U : D.id - q.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var d = performance;
          r.unstable_now = function () {
            return d.now();
          };
        } else {
          var m = Date,
            v = m.now();
          r.unstable_now = function () {
            return m.now() - v;
          };
        }
        var P = [],
          F = [],
          A = 1,
          j = null,
          V = 3,
          ce = !1,
          fe = !1,
          te = !1,
          G = typeof setTimeout == "function" ? setTimeout : null,
          me = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function pe(D) {
          for (var q = o(F); q !== null; ) {
            if (q.callback === null) u(F);
            else if (q.startTime <= D)
              (u(F), (q.sortIndex = q.expirationTime), a(P, q));
            else break;
            q = o(F);
          }
        }
        function he(D) {
          if (((te = !1), pe(D), !fe))
            if (o(P) !== null) ((fe = !0), Ne(le));
            else {
              var q = o(F);
              q !== null && ye(he, q.startTime - D);
            }
        }
        function le(D, q) {
          ((fe = !1), te && ((te = !1), me(be), (be = -1)), (ce = !0));
          var U = V;
          try {
            for (
              pe(q), j = o(P);
              j !== null && (!(j.expirationTime > q) || (D && !Nt()));

            ) {
              var w = j.callback;
              if (typeof w == "function") {
                ((j.callback = null), (V = j.priorityLevel));
                var N = w(j.expirationTime <= q);
                ((q = r.unstable_now()),
                  typeof N == "function"
                    ? (j.callback = N)
                    : j === o(P) && u(P),
                  pe(q));
              } else u(P);
              j = o(P);
            }
            if (j !== null) var oe = !0;
            else {
              var ue = o(F);
              (ue !== null && ye(he, ue.startTime - q), (oe = !1));
            }
            return oe;
          } finally {
            ((j = null), (V = U), (ce = !1));
          }
        }
        var Ie = !1,
          Le = null,
          be = -1,
          st = 5,
          Ve = -1;
        function Nt() {
          return !(r.unstable_now() - Ve < st);
        }
        function ne() {
          if (Le !== null) {
            var D = r.unstable_now();
            Ve = D;
            var q = !0;
            try {
              q = Le(!0, D);
            } finally {
              q ? ie() : ((Ie = !1), (Le = null));
            }
          } else Ie = !1;
        }
        var ie;
        if (typeof Q == "function")
          ie = function () {
            Q(ne);
          };
        else if (typeof MessageChannel < "u") {
          var Se = new MessageChannel(),
            Ce = Se.port2;
          ((Se.port1.onmessage = ne),
            (ie = function () {
              Ce.postMessage(null);
            }));
        } else
          ie = function () {
            G(ne, 0);
          };
        function Ne(D) {
          ((Le = D), Ie || ((Ie = !0), ie()));
        }
        function ye(D, q) {
          be = G(function () {
            D(r.unstable_now());
          }, q);
        }
        ((r.unstable_IdlePriority = 5),
          (r.unstable_ImmediatePriority = 1),
          (r.unstable_LowPriority = 4),
          (r.unstable_NormalPriority = 3),
          (r.unstable_Profiling = null),
          (r.unstable_UserBlockingPriority = 2),
          (r.unstable_cancelCallback = function (D) {
            D.callback = null;
          }),
          (r.unstable_continueExecution = function () {
            fe || ce || ((fe = !0), Ne(le));
          }),
          (r.unstable_forceFrameRate = function (D) {
            0 > D || 125 < D
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (st = 0 < D ? Math.floor(1e3 / D) : 5);
          }),
          (r.unstable_getCurrentPriorityLevel = function () {
            return V;
          }),
          (r.unstable_getFirstCallbackNode = function () {
            return o(P);
          }),
          (r.unstable_next = function (D) {
            switch (V) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = V;
            }
            var U = V;
            V = q;
            try {
              return D();
            } finally {
              V = U;
            }
          }),
          (r.unstable_pauseExecution = function () {}),
          (r.unstable_requestPaint = function () {}),
          (r.unstable_runWithPriority = function (D, q) {
            switch (D) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                D = 3;
            }
            var U = V;
            V = D;
            try {
              return q();
            } finally {
              V = U;
            }
          }),
          (r.unstable_scheduleCallback = function (D, q, U) {
            var w = r.unstable_now();
            switch (
              (typeof U == "object" && U !== null
                ? ((U = U.delay),
                  (U = typeof U == "number" && 0 < U ? w + U : w))
                : (U = w),
              D)
            ) {
              case 1:
                var N = -1;
                break;
              case 2:
                N = 250;
                break;
              case 5:
                N = 1073741823;
                break;
              case 4:
                N = 1e4;
                break;
              default:
                N = 5e3;
            }
            return (
              (N = U + N),
              (D = {
                id: A++,
                callback: q,
                priorityLevel: D,
                startTime: U,
                expirationTime: N,
                sortIndex: -1,
              }),
              U > w
                ? ((D.sortIndex = U),
                  a(F, D),
                  o(P) === null &&
                    D === o(F) &&
                    (te ? (me(be), (be = -1)) : (te = !0), ye(he, U - w)))
                : ((D.sortIndex = N), a(P, D), fe || ce || ((fe = !0), Ne(le))),
              D
            );
          }),
          (r.unstable_shouldYield = Nt),
          (r.unstable_wrapCallback = function (D) {
            var q = V;
            return function () {
              var U = V;
              V = q;
              try {
                return D.apply(this, arguments);
              } finally {
                V = U;
              }
            };
          }));
      })(ms)),
    ms
  );
}
var rd;
function B0() {
  return (rd || ((rd = 1), (ps.exports = W0())), ps.exports);
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var id;
function H0() {
  if (id) return wt;
  id = 1;
  var r = qs(),
    a = B0();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    f = {};
  function d(e, t) {
    (m(e, t), m(e + "Capture", t));
  }
  function m(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var v = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    P = Object.prototype.hasOwnProperty,
    F =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    A = {},
    j = {};
  function V(e) {
    return P.call(j, e)
      ? !0
      : P.call(A, e)
        ? !1
        : F.test(e)
          ? (j[e] = !0)
          : ((A[e] = !0), !1);
  }
  function ce(e, t, n, i) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return i
          ? !1
          : n !== null
            ? !n.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function fe(e, t, n, i) {
    if (t === null || typeof t > "u" || ce(e, t, n, i)) return !0;
    if (i) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function te(e, t, n, i, l, s, c) {
    ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = i),
      (this.attributeNamespace = l),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = c));
  }
  var G = {};
  ("children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      G[e] = new te(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      G[t] = new te(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        G[e] = new te(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    ),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      G[e] = new te(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        G[e] = new te(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      G[e] = new te(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      G[e] = new te(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      G[e] = new te(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      G[e] = new te(e, 5, !1, e.toLowerCase(), null, !1, !1);
    }));
  var me = /[\-:]([a-z])/g;
  function Q(e) {
    return e[1].toUpperCase();
  }
  ("accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(me, Q);
      G[t] = new te(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(me, Q);
        G[t] = new te(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(me, Q);
      G[t] = new te(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      G[e] = new te(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (G.xlinkHref = new te(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      G[e] = new te(e, 1, !1, e.toLowerCase(), null, !0, !0);
    }));
  function pe(e, t, n, i) {
    var l = G.hasOwnProperty(t) ? G[t] : null;
    (l !== null
      ? l.type !== 0
      : i ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (fe(t, n, l, i) && (n = null),
      i || l === null
        ? V(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : l.mustUseProperty
          ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
          : ((t = l.attributeName),
            (i = l.attributeNamespace),
            n === null
              ? e.removeAttribute(t)
              : ((l = l.type),
                (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
                i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
  }
  var he = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    le = Symbol.for("react.element"),
    Ie = Symbol.for("react.portal"),
    Le = Symbol.for("react.fragment"),
    be = Symbol.for("react.strict_mode"),
    st = Symbol.for("react.profiler"),
    Ve = Symbol.for("react.provider"),
    Nt = Symbol.for("react.context"),
    ne = Symbol.for("react.forward_ref"),
    ie = Symbol.for("react.suspense"),
    Se = Symbol.for("react.suspense_list"),
    Ce = Symbol.for("react.memo"),
    Ne = Symbol.for("react.lazy"),
    ye = Symbol.for("react.offscreen"),
    D = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (D && e[D]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var U = Object.assign,
    w;
  function N(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || "";
      }
    return (
      `
` +
      w +
      e
    );
  }
  var oe = !1;
  function ue(e, t) {
    if (!e || oe) return "";
    oe = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (_) {
            var i = _;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (_) {
            i = _;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (_) {
          i = _;
        }
        e();
      }
    } catch (_) {
      if (_ && i && typeof _.stack == "string") {
        for (
          var l = _.stack.split(`
`),
            s = i.stack.split(`
`),
            c = l.length - 1,
            p = s.length - 1;
          1 <= c && 0 <= p && l[c] !== s[p];

        )
          p--;
        for (; 1 <= c && 0 <= p; c--, p--)
          if (l[c] !== s[p]) {
            if (c !== 1 || p !== 1)
              do
                if ((c--, p--, 0 > p || l[c] !== s[p])) {
                  var h =
                    `
` + l[c].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      h.includes("<anonymous>") &&
                      (h = h.replace("<anonymous>", e.displayName)),
                    h
                  );
                }
              while (1 <= c && 0 <= p);
            break;
          }
      }
    } finally {
      ((oe = !1), (Error.prepareStackTrace = n));
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function ve(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return ((e = ue(e.type, !1)), e);
      case 11:
        return ((e = ue(e.type.render, !1)), e);
      case 1:
        return ((e = ue(e.type, !0)), e);
      default:
        return "";
    }
  }
  function ge(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case Ie:
        return "Portal";
      case st:
        return "Profiler";
      case be:
        return "StrictMode";
      case ie:
        return "Suspense";
      case Se:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Nt:
          return (e.displayName || "Context") + ".Consumer";
        case Ve:
          return (e._context.displayName || "Context") + ".Provider";
        case ne:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case Ce:
          return (
            (t = e.displayName || null),
            t !== null ? t : ge(e.type) || "Memo"
          );
        case Ne:
          ((t = e._payload), (e = e._init));
          try {
            return ge(e(t));
          } catch {}
      }
    return null;
  }
  function _e(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ge(t);
      case 8:
        return t === be ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function we(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Pe(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ut(e) {
    var t = Pe(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      i = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        s = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (c) {
            ((i = "" + c), s.call(this, c));
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (c) {
            i = "" + c;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Wn(e) {
    e._valueTracker || (e._valueTracker = ut(e));
  }
  function Mi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      i = "";
    return (
      e && (i = Pe(e) ? (e.checked ? "true" : "false") : e.value),
      (e = i),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Bn(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function sr(e, t) {
    var n = t.checked;
    return U({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function wo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      i = t.checked != null ? t.checked : t.defaultChecked;
    ((n = we(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: i,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      }));
  }
  function xo(e, t) {
    ((t = t.checked), t != null && pe(e, "checked", t, !1));
  }
  function Di(e, t) {
    xo(e, t);
    var n = we(t.value),
      i = t.type;
    if (n != null)
      i === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (i === "submit" || i === "reset") {
      e.removeAttribute("value");
      return;
    }
    (t.hasOwnProperty("value")
      ? S(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && S(e, t.type, we(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked));
  }
  function g(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var i = t.type;
      if (
        !(
          (i !== "submit" && i !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      ((t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n));
  }
  function S(e, t, n) {
    (t !== "number" || Bn(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var E = Array.isArray;
  function b(e, t, n, i) {
    if (((e = e.options), t)) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        ((l = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== l && (e[n].selected = l),
          l && i && (e[n].defaultSelected = !0));
    } else {
      for (n = "" + we(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          ((e[l].selected = !0), i && (e[l].defaultSelected = !0));
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function M(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return U({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function R(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (E(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      (t == null && (t = ""), (n = t));
    }
    e._wrapperState = { initialValue: we(n) };
  }
  function Z(e, t) {
    var n = we(t.value),
      i = we(t.defaultValue);
    (n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      i != null && (e.defaultValue = "" + i));
  }
  function ae(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function Be(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ue(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? Be(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
        ? "http://www.w3.org/1999/xhtml"
        : e;
  }
  var kt,
    bi = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, i, l) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, i, l);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          kt = kt || document.createElement("div"),
            kt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = kt.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function nn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var rn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    ko = ["Webkit", "ms", "Moz", "O"];
  Object.keys(rn).forEach(function (e) {
    ko.forEach(function (t) {
      ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (rn[t] = rn[e]));
    });
  });
  function Ur(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (rn.hasOwnProperty(e) && rn[e])
        ? ("" + t).trim()
        : t + "px";
  }
  function Vi(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var i = n.indexOf("--") === 0,
          l = Ur(n, t[n], i);
        (n === "float" && (n = "cssFloat"),
          i ? e.setProperty(n, l) : (e[n] = l));
      }
  }
  var Ui = U(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function So(e, t) {
    if (t) {
      if (Ui[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function _o(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Eo = null;
  function Co(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Po = null,
    ur = null,
    cr = null;
  function mu(e) {
    if ((e = ui(e))) {
      if (typeof Po != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = cl(t)), Po(e.stateNode, e.type, t));
    }
  }
  function hu(e) {
    ur ? (cr ? cr.push(e) : (cr = [e])) : (ur = e);
  }
  function gu() {
    if (ur) {
      var e = ur,
        t = cr;
      if (((cr = ur = null), mu(e), t)) for (e = 0; e < t.length; e++) mu(t[e]);
    }
  }
  function yu(e, t) {
    return e(t);
  }
  function vu() {}
  var No = !1;
  function wu(e, t, n) {
    if (No) return e(t, n);
    No = !0;
    try {
      return yu(e, t, n);
    } finally {
      ((No = !1), (ur !== null || cr !== null) && (vu(), gu()));
    }
  }
  function Wr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = cl(n);
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((i = !i.disabled) ||
          ((e = e.type),
          (i = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !i));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var Oo = !1;
  if (v)
    try {
      var Br = {};
      (Object.defineProperty(Br, "passive", {
        get: function () {
          Oo = !0;
        },
      }),
        window.addEventListener("test", Br, Br),
        window.removeEventListener("test", Br, Br));
    } catch {
      Oo = !1;
    }
  function $1(e, t, n, i, l, s, c, p, h) {
    var _ = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, _);
    } catch (T) {
      this.onError(T);
    }
  }
  var Hr = !1,
    Wi = null,
    Bi = !1,
    Ao = null,
    Y1 = {
      onError: function (e) {
        ((Hr = !0), (Wi = e));
      },
    };
  function Q1(e, t, n, i, l, s, c, p, h) {
    ((Hr = !1), (Wi = null), $1.apply(Y1, arguments));
  }
  function K1(e, t, n, i, l, s, c, p, h) {
    if ((Q1.apply(this, arguments), Hr)) {
      if (Hr) {
        var _ = Wi;
        ((Hr = !1), (Wi = null));
      } else throw Error(o(198));
      Bi || ((Bi = !0), (Ao = _));
    }
  }
  function Hn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function ku(e) {
    if (Hn(e) !== e) throw Error(o(188));
  }
  function G1(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Hn(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var s = l.alternate;
      if (s === null) {
        if (((i = l.return), i !== null)) {
          n = i;
          continue;
        }
        break;
      }
      if (l.child === s.child) {
        for (s = l.child; s; ) {
          if (s === n) return (ku(l), e);
          if (s === i) return (ku(l), t);
          s = s.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== i.return) ((n = l), (i = s));
      else {
        for (var c = !1, p = l.child; p; ) {
          if (p === n) {
            ((c = !0), (n = l), (i = s));
            break;
          }
          if (p === i) {
            ((c = !0), (i = l), (n = s));
            break;
          }
          p = p.sibling;
        }
        if (!c) {
          for (p = s.child; p; ) {
            if (p === n) {
              ((c = !0), (n = s), (i = l));
              break;
            }
            if (p === i) {
              ((c = !0), (i = s), (n = l));
              break;
            }
            p = p.sibling;
          }
          if (!c) throw Error(o(189));
        }
      }
      if (n.alternate !== i) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function Su(e) {
    return ((e = G1(e)), e !== null ? _u(e) : null);
  }
  function _u(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = _u(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Eu = a.unstable_scheduleCallback,
    Cu = a.unstable_cancelCallback,
    X1 = a.unstable_shouldYield,
    q1 = a.unstable_requestPaint,
    He = a.unstable_now,
    Z1 = a.unstable_getCurrentPriorityLevel,
    To = a.unstable_ImmediatePriority,
    Pu = a.unstable_UserBlockingPriority,
    Hi = a.unstable_NormalPriority,
    J1 = a.unstable_LowPriority,
    Nu = a.unstable_IdlePriority,
    $i = null,
    Ht = null;
  function ep(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function")
      try {
        Ht.onCommitFiberRoot($i, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Lt = Math.clz32 ? Math.clz32 : rp,
    tp = Math.log,
    np = Math.LN2;
  function rp(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((tp(e) / np) | 0)) | 0);
  }
  var Yi = 64,
    Qi = 4194304;
  function $r(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ki(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var i = 0,
      l = e.suspendedLanes,
      s = e.pingedLanes,
      c = n & 268435455;
    if (c !== 0) {
      var p = c & ~l;
      p !== 0 ? (i = $r(p)) : ((s &= c), s !== 0 && (i = $r(s)));
    } else ((c = n & ~l), c !== 0 ? (i = $r(c)) : s !== 0 && (i = $r(s)));
    if (i === 0) return 0;
    if (
      t !== 0 &&
      t !== i &&
      (t & l) === 0 &&
      ((l = i & -i), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
    )
      return t;
    if (((i & 4) !== 0 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= i; 0 < t; )
        ((n = 31 - Lt(t)), (l = 1 << n), (i |= e[n]), (t &= ~l));
    return i;
  }
  function ip(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lp(e, t) {
    for (
      var n = e.suspendedLanes,
        i = e.pingedLanes,
        l = e.expirationTimes,
        s = e.pendingLanes;
      0 < s;

    ) {
      var c = 31 - Lt(s),
        p = 1 << c,
        h = l[c];
      (h === -1
        ? ((p & n) === 0 || (p & i) !== 0) && (l[c] = ip(p, t))
        : h <= t && (e.expiredLanes |= p),
        (s &= ~p));
    }
  }
  function Fo(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Ou() {
    var e = Yi;
    return ((Yi <<= 1), (Yi & 4194240) === 0 && (Yi = 64), e);
  }
  function jo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yr(e, t, n) {
    ((e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Lt(t)),
      (e[t] = n));
  }
  function op(e, t) {
    var n = e.pendingLanes & ~t;
    ((e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements));
    var i = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - Lt(n),
        s = 1 << l;
      ((t[l] = 0), (i[l] = -1), (e[l] = -1), (n &= ~s));
    }
  }
  function Io(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var i = 31 - Lt(n),
        l = 1 << i;
      ((l & t) | (e[i] & t) && (e[i] |= t), (n &= ~l));
    }
  }
  var Ee = 0;
  function Au(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Tu,
    zo,
    Fu,
    ju,
    Iu,
    Lo = !1,
    Gi = [],
    yn = null,
    vn = null,
    wn = null,
    Qr = new Map(),
    Kr = new Map(),
    xn = [],
    ap =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " ",
      );
  function zu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        yn = null;
        break;
      case "dragenter":
      case "dragleave":
        vn = null;
        break;
      case "mouseover":
      case "mouseout":
        wn = null;
        break;
      case "pointerover":
      case "pointerout":
        Qr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kr.delete(t.pointerId);
    }
  }
  function Gr(e, t, n, i, l, s) {
    return e === null || e.nativeEvent !== s
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: i,
          nativeEvent: s,
          targetContainers: [l],
        }),
        t !== null && ((t = ui(t)), t !== null && zo(t)),
        e)
      : ((e.eventSystemFlags |= i),
        (t = e.targetContainers),
        l !== null && t.indexOf(l) === -1 && t.push(l),
        e);
  }
  function sp(e, t, n, i, l) {
    switch (t) {
      case "focusin":
        return ((yn = Gr(yn, e, t, n, i, l)), !0);
      case "dragenter":
        return ((vn = Gr(vn, e, t, n, i, l)), !0);
      case "mouseover":
        return ((wn = Gr(wn, e, t, n, i, l)), !0);
      case "pointerover":
        var s = l.pointerId;
        return (Qr.set(s, Gr(Qr.get(s) || null, e, t, n, i, l)), !0);
      case "gotpointercapture":
        return (
          (s = l.pointerId),
          Kr.set(s, Gr(Kr.get(s) || null, e, t, n, i, l)),
          !0
        );
    }
    return !1;
  }
  function Lu(e) {
    var t = $n(e.target);
    if (t !== null) {
      var n = Hn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = xu(n)), t !== null)) {
            ((e.blockedOn = t),
              Iu(e.priority, function () {
                Fu(n);
              }));
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Xi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(n.type, n);
        ((Eo = i), n.target.dispatchEvent(i), (Eo = null));
      } else return ((t = ui(n)), t !== null && zo(t), (e.blockedOn = n), !1);
      t.shift();
    }
    return !0;
  }
  function Ru(e, t, n) {
    Xi(e) && n.delete(t);
  }
  function up() {
    ((Lo = !1),
      yn !== null && Xi(yn) && (yn = null),
      vn !== null && Xi(vn) && (vn = null),
      wn !== null && Xi(wn) && (wn = null),
      Qr.forEach(Ru),
      Kr.forEach(Ru));
  }
  function Xr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Lo ||
        ((Lo = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, up)));
  }
  function qr(e) {
    function t(l) {
      return Xr(l, e);
    }
    if (0 < Gi.length) {
      Xr(Gi[0], e);
      for (var n = 1; n < Gi.length; n++) {
        var i = Gi[n];
        i.blockedOn === e && (i.blockedOn = null);
      }
    }
    for (
      yn !== null && Xr(yn, e),
        vn !== null && Xr(vn, e),
        wn !== null && Xr(wn, e),
        Qr.forEach(t),
        Kr.forEach(t),
        n = 0;
      n < xn.length;
      n++
    )
      ((i = xn[n]), i.blockedOn === e && (i.blockedOn = null));
    for (; 0 < xn.length && ((n = xn[0]), n.blockedOn === null); )
      (Lu(n), n.blockedOn === null && xn.shift());
  }
  var fr = he.ReactCurrentBatchConfig,
    qi = !0;
  function cp(e, t, n, i) {
    var l = Ee,
      s = fr.transition;
    fr.transition = null;
    try {
      ((Ee = 1), Ro(e, t, n, i));
    } finally {
      ((Ee = l), (fr.transition = s));
    }
  }
  function fp(e, t, n, i) {
    var l = Ee,
      s = fr.transition;
    fr.transition = null;
    try {
      ((Ee = 4), Ro(e, t, n, i));
    } finally {
      ((Ee = l), (fr.transition = s));
    }
  }
  function Ro(e, t, n, i) {
    if (qi) {
      var l = Mo(e, t, n, i);
      if (l === null) (ea(e, t, i, Zi, n), zu(e, i));
      else if (sp(l, e, t, n, i)) i.stopPropagation();
      else if ((zu(e, i), t & 4 && -1 < ap.indexOf(e))) {
        for (; l !== null; ) {
          var s = ui(l);
          if (
            (s !== null && Tu(s),
            (s = Mo(e, t, n, i)),
            s === null && ea(e, t, i, Zi, n),
            s === l)
          )
            break;
          l = s;
        }
        l !== null && i.stopPropagation();
      } else ea(e, t, i, null, n);
    }
  }
  var Zi = null;
  function Mo(e, t, n, i) {
    if (((Zi = null), (e = Co(i)), (e = $n(e)), e !== null))
      if (((t = Hn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = xu(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return ((Zi = e), null);
  }
  function Mu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Z1()) {
          case To:
            return 1;
          case Pu:
            return 4;
          case Hi:
          case J1:
            return 16;
          case Nu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var kn = null,
    Do = null,
    Ji = null;
  function Du() {
    if (Ji) return Ji;
    var e,
      t = Do,
      n = t.length,
      i,
      l = "value" in kn ? kn.value : kn.textContent,
      s = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var c = n - e;
    for (i = 1; i <= c && t[n - i] === l[s - i]; i++);
    return (Ji = l.slice(e, 1 < i ? 1 - i : void 0));
  }
  function el(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function tl() {
    return !0;
  }
  function bu() {
    return !1;
  }
  function St(e) {
    function t(n, i, l, s, c) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = i),
        (this.nativeEvent = s),
        (this.target = c),
        (this.currentTarget = null));
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(s) : s[p]));
      return (
        (this.isDefaultPrevented = (
          s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
        )
          ? tl
          : bu),
        (this.isPropagationStopped = bu),
        this
      );
    }
    return (
      U(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = tl));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = tl));
        },
        persist: function () {},
        isPersistent: tl,
      }),
      t
    );
  }
  var dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    bo = St(dr),
    Zr = U({}, dr, { view: 0, detail: 0 }),
    dp = St(Zr),
    Vo,
    Uo,
    Jr,
    nl = U({}, Zr, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Bo,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Jr &&
              (Jr && e.type === "mousemove"
                ? ((Vo = e.screenX - Jr.screenX), (Uo = e.screenY - Jr.screenY))
                : (Uo = Vo = 0),
              (Jr = e)),
            Vo);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : Uo;
      },
    }),
    Vu = St(nl),
    pp = U({}, nl, { dataTransfer: 0 }),
    mp = St(pp),
    hp = U({}, Zr, { relatedTarget: 0 }),
    Wo = St(hp),
    gp = U({}, dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    yp = St(gp),
    vp = U({}, dr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    wp = St(vp),
    xp = U({}, dr, { data: 0 }),
    Uu = St(xp),
    kp = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Sp = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    _p = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ep(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = _p[e])
        ? !!t[e]
        : !1;
  }
  function Bo() {
    return Ep;
  }
  var Cp = U({}, Zr, {
      key: function (e) {
        if (e.key) {
          var t = kp[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = el(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Sp[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Bo,
      charCode: function (e) {
        return e.type === "keypress" ? el(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? el(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Pp = St(Cp),
    Np = U({}, nl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Wu = St(Np),
    Op = U({}, Zr, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Bo,
    }),
    Ap = St(Op),
    Tp = U({}, dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fp = St(Tp),
    jp = U({}, nl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Ip = St(jp),
    zp = [9, 13, 27, 32],
    Ho = v && "CompositionEvent" in window,
    ei = null;
  v && "documentMode" in document && (ei = document.documentMode);
  var Lp = v && "TextEvent" in window && !ei,
    Bu = v && (!Ho || (ei && 8 < ei && 11 >= ei)),
    Hu = " ",
    $u = !1;
  function Yu(e, t) {
    switch (e) {
      case "keyup":
        return zp.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qu(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var pr = !1;
  function Rp(e, t) {
    switch (e) {
      case "compositionend":
        return Qu(t);
      case "keypress":
        return t.which !== 32 ? null : (($u = !0), Hu);
      case "textInput":
        return ((e = t.data), e === Hu && $u ? null : e);
      default:
        return null;
    }
  }
  function Mp(e, t) {
    if (pr)
      return e === "compositionend" || (!Ho && Yu(e, t))
        ? ((e = Du()), (Ji = Do = kn = null), (pr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Bu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Dp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Ku(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Dp[e.type] : t === "textarea";
  }
  function Gu(e, t, n, i) {
    (hu(i),
      (t = al(t, "onChange")),
      0 < t.length &&
        ((n = new bo("onChange", "change", null, n, i)),
        e.push({ event: n, listeners: t })));
  }
  var ti = null,
    ni = null;
  function bp(e) {
    pc(e, 0);
  }
  function rl(e) {
    var t = vr(e);
    if (Mi(t)) return e;
  }
  function Vp(e, t) {
    if (e === "change") return t;
  }
  var Xu = !1;
  if (v) {
    var $o;
    if (v) {
      var Yo = "oninput" in document;
      if (!Yo) {
        var qu = document.createElement("div");
        (qu.setAttribute("oninput", "return;"),
          (Yo = typeof qu.oninput == "function"));
      }
      $o = Yo;
    } else $o = !1;
    Xu = $o && (!document.documentMode || 9 < document.documentMode);
  }
  function Zu() {
    ti && (ti.detachEvent("onpropertychange", Ju), (ni = ti = null));
  }
  function Ju(e) {
    if (e.propertyName === "value" && rl(ni)) {
      var t = [];
      (Gu(t, ni, e, Co(e)), wu(bp, t));
    }
  }
  function Up(e, t, n) {
    e === "focusin"
      ? (Zu(), (ti = t), (ni = n), ti.attachEvent("onpropertychange", Ju))
      : e === "focusout" && Zu();
  }
  function Wp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return rl(ni);
  }
  function Bp(e, t) {
    if (e === "click") return rl(t);
  }
  function Hp(e, t) {
    if (e === "input" || e === "change") return rl(t);
  }
  function $p(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var Rt = typeof Object.is == "function" ? Object.is : $p;
  function ri(e, t) {
    if (Rt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var l = n[i];
      if (!P.call(t, l) || !Rt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function ec(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function tc(e, t) {
    var n = ec(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (((i = e + n.textContent.length), e <= t && i >= t))
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ec(n);
    }
  }
  function nc(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? nc(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function rc() {
    for (var e = window, t = Bn(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Bn(e.document);
    }
    return t;
  }
  function Qo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Yp(e) {
    var t = rc(),
      n = e.focusedElem,
      i = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      nc(n.ownerDocument.documentElement, n)
    ) {
      if (i !== null && Qo(n)) {
        if (
          ((t = i.start),
          (e = i.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          ((n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length)));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var l = n.textContent.length,
            s = Math.min(i.start, l);
          ((i = i.end === void 0 ? s : Math.min(i.end, l)),
            !e.extend && s > i && ((l = i), (i = s), (s = l)),
            (l = tc(n, s)));
          var c = tc(n, i);
          l &&
            c &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== l.node ||
              e.anchorOffset !== l.offset ||
              e.focusNode !== c.node ||
              e.focusOffset !== c.offset) &&
            ((t = t.createRange()),
            t.setStart(l.node, l.offset),
            e.removeAllRanges(),
            s > i
              ? (e.addRange(t), e.extend(c.node, c.offset))
              : (t.setEnd(c.node, c.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        ((e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top));
    }
  }
  var Qp = v && "documentMode" in document && 11 >= document.documentMode,
    mr = null,
    Ko = null,
    ii = null,
    Go = !1;
  function ic(e, t, n) {
    var i =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Go ||
      mr == null ||
      mr !== Bn(i) ||
      ((i = mr),
      "selectionStart" in i && Qo(i)
        ? (i = { start: i.selectionStart, end: i.selectionEnd })
        : ((i = (
            (i.ownerDocument && i.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset,
          })),
      (ii && ri(ii, i)) ||
        ((ii = i),
        (i = al(Ko, "onSelect")),
        0 < i.length &&
          ((t = new bo("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: i }),
          (t.target = mr))));
  }
  function il(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hr = {
      animationend: il("Animation", "AnimationEnd"),
      animationiteration: il("Animation", "AnimationIteration"),
      animationstart: il("Animation", "AnimationStart"),
      transitionend: il("Transition", "TransitionEnd"),
    },
    Xo = {},
    lc = {};
  v &&
    ((lc = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hr.animationend.animation,
      delete hr.animationiteration.animation,
      delete hr.animationstart.animation),
    "TransitionEvent" in window || delete hr.transitionend.transition);
  function ll(e) {
    if (Xo[e]) return Xo[e];
    if (!hr[e]) return e;
    var t = hr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in lc) return (Xo[e] = t[n]);
    return e;
  }
  var oc = ll("animationend"),
    ac = ll("animationiteration"),
    sc = ll("animationstart"),
    uc = ll("transitionend"),
    cc = new Map(),
    fc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  function Sn(e, t) {
    (cc.set(e, t), d(t, [e]));
  }
  for (var qo = 0; qo < fc.length; qo++) {
    var Zo = fc[qo],
      Kp = Zo.toLowerCase(),
      Gp = Zo[0].toUpperCase() + Zo.slice(1);
    Sn(Kp, "on" + Gp);
  }
  (Sn(oc, "onAnimationEnd"),
    Sn(ac, "onAnimationIteration"),
    Sn(sc, "onAnimationStart"),
    Sn("dblclick", "onDoubleClick"),
    Sn("focusin", "onFocus"),
    Sn("focusout", "onBlur"),
    Sn(uc, "onTransitionEnd"),
    m("onMouseEnter", ["mouseout", "mouseover"]),
    m("onMouseLeave", ["mouseout", "mouseover"]),
    m("onPointerEnter", ["pointerout", "pointerover"]),
    m("onPointerLeave", ["pointerout", "pointerover"]),
    d(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    d(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    d("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    d(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    d(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var li =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Xp = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(li),
    );
  function dc(e, t, n) {
    var i = e.type || "unknown-event";
    ((e.currentTarget = n), K1(i, t, void 0, e), (e.currentTarget = null));
  }
  function pc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n],
        l = i.event;
      i = i.listeners;
      e: {
        var s = void 0;
        if (t)
          for (var c = i.length - 1; 0 <= c; c--) {
            var p = i[c],
              h = p.instance,
              _ = p.currentTarget;
            if (((p = p.listener), h !== s && l.isPropagationStopped()))
              break e;
            (dc(l, p, _), (s = h));
          }
        else
          for (c = 0; c < i.length; c++) {
            if (
              ((p = i[c]),
              (h = p.instance),
              (_ = p.currentTarget),
              (p = p.listener),
              h !== s && l.isPropagationStopped())
            )
              break e;
            (dc(l, p, _), (s = h));
          }
      }
    }
    if (Bi) throw ((e = Ao), (Bi = !1), (Ao = null), e);
  }
  function Ae(e, t) {
    var n = t[oa];
    n === void 0 && (n = t[oa] = new Set());
    var i = e + "__bubble";
    n.has(i) || (mc(t, e, 2, !1), n.add(i));
  }
  function Jo(e, t, n) {
    var i = 0;
    (t && (i |= 4), mc(n, e, i, t));
  }
  var ol = "_reactListening" + Math.random().toString(36).slice(2);
  function oi(e) {
    if (!e[ol]) {
      ((e[ol] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (Xp.has(n) || Jo(n, !1, e), Jo(n, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ol] || ((t[ol] = !0), Jo("selectionchange", !1, t));
    }
  }
  function mc(e, t, n, i) {
    switch (Mu(t)) {
      case 1:
        var l = cp;
        break;
      case 4:
        l = fp;
        break;
      default:
        l = Ro;
    }
    ((n = l.bind(null, t, n, e)),
      (l = void 0),
      !Oo ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (l = !0),
      i
        ? l !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: l })
          : e.addEventListener(t, n, !0)
        : l !== void 0
          ? e.addEventListener(t, n, { passive: l })
          : e.addEventListener(t, n, !1));
  }
  function ea(e, t, n, i, l) {
    var s = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (;;) {
        if (i === null) return;
        var c = i.tag;
        if (c === 3 || c === 4) {
          var p = i.stateNode.containerInfo;
          if (p === l || (p.nodeType === 8 && p.parentNode === l)) break;
          if (c === 4)
            for (c = i.return; c !== null; ) {
              var h = c.tag;
              if (
                (h === 3 || h === 4) &&
                ((h = c.stateNode.containerInfo),
                h === l || (h.nodeType === 8 && h.parentNode === l))
              )
                return;
              c = c.return;
            }
          for (; p !== null; ) {
            if (((c = $n(p)), c === null)) return;
            if (((h = c.tag), h === 5 || h === 6)) {
              i = s = c;
              continue e;
            }
            p = p.parentNode;
          }
        }
        i = i.return;
      }
    wu(function () {
      var _ = s,
        T = Co(n),
        I = [];
      e: {
        var O = cc.get(e);
        if (O !== void 0) {
          var W = bo,
            H = e;
          switch (e) {
            case "keypress":
              if (el(n) === 0) break e;
            case "keydown":
            case "keyup":
              W = Pp;
              break;
            case "focusin":
              ((H = "focus"), (W = Wo));
              break;
            case "focusout":
              ((H = "blur"), (W = Wo));
              break;
            case "beforeblur":
            case "afterblur":
              W = Wo;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              W = Vu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              W = mp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              W = Ap;
              break;
            case oc:
            case ac:
            case sc:
              W = yp;
              break;
            case uc:
              W = Fp;
              break;
            case "scroll":
              W = dp;
              break;
            case "wheel":
              W = Ip;
              break;
            case "copy":
            case "cut":
            case "paste":
              W = wp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              W = Wu;
          }
          var Y = (t & 4) !== 0,
            $e = !Y && e === "scroll",
            x = Y ? (O !== null ? O + "Capture" : null) : O;
          Y = [];
          for (var y = _, k; y !== null; ) {
            k = y;
            var L = k.stateNode;
            if (
              (k.tag === 5 &&
                L !== null &&
                ((k = L),
                x !== null &&
                  ((L = Wr(y, x)), L != null && Y.push(ai(y, L, k)))),
              $e)
            )
              break;
            y = y.return;
          }
          0 < Y.length &&
            ((O = new W(O, H, null, n, T)), I.push({ event: O, listeners: Y }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (W = e === "mouseout" || e === "pointerout"),
            O &&
              n !== Eo &&
              (H = n.relatedTarget || n.fromElement) &&
              ($n(H) || H[ln]))
          )
            break e;
          if (
            (W || O) &&
            ((O =
              T.window === T
                ? T
                : (O = T.ownerDocument)
                  ? O.defaultView || O.parentWindow
                  : window),
            W
              ? ((H = n.relatedTarget || n.toElement),
                (W = _),
                (H = H ? $n(H) : null),
                H !== null &&
                  (($e = Hn(H)), H !== $e || (H.tag !== 5 && H.tag !== 6)) &&
                  (H = null))
              : ((W = null), (H = _)),
            W !== H)
          ) {
            if (
              ((Y = Vu),
              (L = "onMouseLeave"),
              (x = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((Y = Wu),
                (L = "onPointerLeave"),
                (x = "onPointerEnter"),
                (y = "pointer")),
              ($e = W == null ? O : vr(W)),
              (k = H == null ? O : vr(H)),
              (O = new Y(L, y + "leave", W, n, T)),
              (O.target = $e),
              (O.relatedTarget = k),
              (L = null),
              $n(T) === _ &&
                ((Y = new Y(x, y + "enter", H, n, T)),
                (Y.target = k),
                (Y.relatedTarget = $e),
                (L = Y)),
              ($e = L),
              W && H)
            )
              t: {
                for (Y = W, x = H, y = 0, k = Y; k; k = gr(k)) y++;
                for (k = 0, L = x; L; L = gr(L)) k++;
                for (; 0 < y - k; ) ((Y = gr(Y)), y--);
                for (; 0 < k - y; ) ((x = gr(x)), k--);
                for (; y--; ) {
                  if (Y === x || (x !== null && Y === x.alternate)) break t;
                  ((Y = gr(Y)), (x = gr(x)));
                }
                Y = null;
              }
            else Y = null;
            (W !== null && hc(I, O, W, Y, !1),
              H !== null && $e !== null && hc(I, $e, H, Y, !0));
          }
        }
        e: {
          if (
            ((O = _ ? vr(_) : window),
            (W = O.nodeName && O.nodeName.toLowerCase()),
            W === "select" || (W === "input" && O.type === "file"))
          )
            var K = Vp;
          else if (Ku(O))
            if (Xu) K = Hp;
            else {
              K = Wp;
              var J = Up;
            }
          else
            (W = O.nodeName) &&
              W.toLowerCase() === "input" &&
              (O.type === "checkbox" || O.type === "radio") &&
              (K = Bp);
          if (K && (K = K(e, _))) {
            Gu(I, K, n, T);
            break e;
          }
          (J && J(e, O, _),
            e === "focusout" &&
              (J = O._wrapperState) &&
              J.controlled &&
              O.type === "number" &&
              S(O, "number", O.value));
        }
        switch (((J = _ ? vr(_) : window), e)) {
          case "focusin":
            (Ku(J) || J.contentEditable === "true") &&
              ((mr = J), (Ko = _), (ii = null));
            break;
          case "focusout":
            ii = Ko = mr = null;
            break;
          case "mousedown":
            Go = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((Go = !1), ic(I, n, T));
            break;
          case "selectionchange":
            if (Qp) break;
          case "keydown":
          case "keyup":
            ic(I, n, T);
        }
        var ee;
        if (Ho)
          e: {
            switch (e) {
              case "compositionstart":
                var re = "onCompositionStart";
                break e;
              case "compositionend":
                re = "onCompositionEnd";
                break e;
              case "compositionupdate":
                re = "onCompositionUpdate";
                break e;
            }
            re = void 0;
          }
        else
          pr
            ? Yu(e, n) && (re = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (re = "onCompositionStart");
        (re &&
          (Bu &&
            n.locale !== "ko" &&
            (pr || re !== "onCompositionStart"
              ? re === "onCompositionEnd" && pr && (ee = Du())
              : ((kn = T),
                (Do = "value" in kn ? kn.value : kn.textContent),
                (pr = !0))),
          (J = al(_, re)),
          0 < J.length &&
            ((re = new Uu(re, e, null, n, T)),
            I.push({ event: re, listeners: J }),
            ee
              ? (re.data = ee)
              : ((ee = Qu(n)), ee !== null && (re.data = ee)))),
          (ee = Lp ? Rp(e, n) : Mp(e, n)) &&
            ((_ = al(_, "onBeforeInput")),
            0 < _.length &&
              ((T = new Uu("onBeforeInput", "beforeinput", null, n, T)),
              I.push({ event: T, listeners: _ }),
              (T.data = ee))));
      }
      pc(I, t);
    });
  }
  function ai(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function al(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var l = e,
        s = l.stateNode;
      (l.tag === 5 &&
        s !== null &&
        ((l = s),
        (s = Wr(e, n)),
        s != null && i.unshift(ai(e, s, l)),
        (s = Wr(e, t)),
        s != null && i.push(ai(e, s, l))),
        (e = e.return));
    }
    return i;
  }
  function gr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function hc(e, t, n, i, l) {
    for (var s = t._reactName, c = []; n !== null && n !== i; ) {
      var p = n,
        h = p.alternate,
        _ = p.stateNode;
      if (h !== null && h === i) break;
      (p.tag === 5 &&
        _ !== null &&
        ((p = _),
        l
          ? ((h = Wr(n, s)), h != null && c.unshift(ai(n, h, p)))
          : l || ((h = Wr(n, s)), h != null && c.push(ai(n, h, p)))),
        (n = n.return));
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var qp = /\r\n?/g,
    Zp = /\u0000|\uFFFD/g;
  function gc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        qp,
        `
`,
      )
      .replace(Zp, "");
  }
  function sl(e, t, n) {
    if (((t = gc(t)), gc(e) !== t && n)) throw Error(o(425));
  }
  function ul() {}
  var ta = null,
    na = null;
  function ra(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ia = typeof setTimeout == "function" ? setTimeout : void 0,
    Jp = typeof clearTimeout == "function" ? clearTimeout : void 0,
    yc = typeof Promise == "function" ? Promise : void 0,
    e0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof yc < "u"
          ? function (e) {
              return yc.resolve(null).then(e).catch(t0);
            }
          : ia;
  function t0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function la(e, t) {
    var n = t,
      i = 0;
    do {
      var l = n.nextSibling;
      if ((e.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$")) {
          if (i === 0) {
            (e.removeChild(l), qr(t));
            return;
          }
          i--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
      n = l;
    } while (n);
    qr(t);
  }
  function _n(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function vc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yr = Math.random().toString(36).slice(2),
    $t = "__reactFiber$" + yr,
    si = "__reactProps$" + yr,
    ln = "__reactContainer$" + yr,
    oa = "__reactEvents$" + yr,
    n0 = "__reactListeners$" + yr,
    r0 = "__reactHandles$" + yr;
  function $n(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[ln] || n[$t])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = vc(e); e !== null; ) {
            if ((n = e[$t])) return n;
            e = vc(e);
          }
        return t;
      }
      ((e = n), (n = e.parentNode));
    }
    return null;
  }
  function ui(e) {
    return (
      (e = e[$t] || e[ln]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function vr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function cl(e) {
    return e[si] || null;
  }
  var aa = [],
    wr = -1;
  function En(e) {
    return { current: e };
  }
  function Te(e) {
    0 > wr || ((e.current = aa[wr]), (aa[wr] = null), wr--);
  }
  function Oe(e, t) {
    (wr++, (aa[wr] = e.current), (e.current = t));
  }
  var Cn = {},
    rt = En(Cn),
    mt = En(!1),
    Yn = Cn;
  function xr(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Cn;
    var i = e.stateNode;
    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
      return i.__reactInternalMemoizedMaskedChildContext;
    var l = {},
      s;
    for (s in n) l[s] = t[s];
    return (
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      l
    );
  }
  function ht(e) {
    return ((e = e.childContextTypes), e != null);
  }
  function fl() {
    (Te(mt), Te(rt));
  }
  function wc(e, t, n) {
    if (rt.current !== Cn) throw Error(o(168));
    (Oe(rt, t), Oe(mt, n));
  }
  function xc(e, t, n) {
    var i = e.stateNode;
    if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
      return n;
    i = i.getChildContext();
    for (var l in i) if (!(l in t)) throw Error(o(108, _e(e) || "Unknown", l));
    return U({}, n, i);
  }
  function dl(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Cn),
      (Yn = rt.current),
      Oe(rt, e),
      Oe(mt, mt.current),
      !0
    );
  }
  function kc(e, t, n) {
    var i = e.stateNode;
    if (!i) throw Error(o(169));
    (n
      ? ((e = xc(e, t, Yn)),
        (i.__reactInternalMemoizedMergedChildContext = e),
        Te(mt),
        Te(rt),
        Oe(rt, e))
      : Te(mt),
      Oe(mt, n));
  }
  var on = null,
    pl = !1,
    sa = !1;
  function Sc(e) {
    on === null ? (on = [e]) : on.push(e);
  }
  function i0(e) {
    ((pl = !0), Sc(e));
  }
  function Pn() {
    if (!sa && on !== null) {
      sa = !0;
      var e = 0,
        t = Ee;
      try {
        var n = on;
        for (Ee = 1; e < n.length; e++) {
          var i = n[e];
          do i = i(!0);
          while (i !== null);
        }
        ((on = null), (pl = !1));
      } catch (l) {
        throw (on !== null && (on = on.slice(e + 1)), Eu(To, Pn), l);
      } finally {
        ((Ee = t), (sa = !1));
      }
    }
    return null;
  }
  var kr = [],
    Sr = 0,
    ml = null,
    hl = 0,
    Ot = [],
    At = 0,
    Qn = null,
    an = 1,
    sn = "";
  function Kn(e, t) {
    ((kr[Sr++] = hl), (kr[Sr++] = ml), (ml = e), (hl = t));
  }
  function _c(e, t, n) {
    ((Ot[At++] = an), (Ot[At++] = sn), (Ot[At++] = Qn), (Qn = e));
    var i = an;
    e = sn;
    var l = 32 - Lt(i) - 1;
    ((i &= ~(1 << l)), (n += 1));
    var s = 32 - Lt(t) + l;
    if (30 < s) {
      var c = l - (l % 5);
      ((s = (i & ((1 << c) - 1)).toString(32)),
        (i >>= c),
        (l -= c),
        (an = (1 << (32 - Lt(t) + l)) | (n << l) | i),
        (sn = s + e));
    } else ((an = (1 << s) | (n << l) | i), (sn = e));
  }
  function ua(e) {
    e.return !== null && (Kn(e, 1), _c(e, 1, 0));
  }
  function ca(e) {
    for (; e === ml; )
      ((ml = kr[--Sr]), (kr[Sr] = null), (hl = kr[--Sr]), (kr[Sr] = null));
    for (; e === Qn; )
      ((Qn = Ot[--At]),
        (Ot[At] = null),
        (sn = Ot[--At]),
        (Ot[At] = null),
        (an = Ot[--At]),
        (Ot[At] = null));
  }
  var _t = null,
    Et = null,
    ze = !1,
    Mt = null;
  function Ec(e, t) {
    var n = It(5, null, null, 0);
    ((n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
  }
  function Cc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (_t = e), (Et = _n(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (_t = e), (Et = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Qn !== null ? { id: an, overflow: sn } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = It(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (_t = e),
              (Et = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function fa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function da(e) {
    if (ze) {
      var t = Et;
      if (t) {
        var n = t;
        if (!Cc(e, t)) {
          if (fa(e)) throw Error(o(418));
          t = _n(n.nextSibling);
          var i = _t;
          t && Cc(e, t)
            ? Ec(i, n)
            : ((e.flags = (e.flags & -4097) | 2), (ze = !1), (_t = e));
        }
      } else {
        if (fa(e)) throw Error(o(418));
        ((e.flags = (e.flags & -4097) | 2), (ze = !1), (_t = e));
      }
    }
  }
  function Pc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    _t = e;
  }
  function gl(e) {
    if (e !== _t) return !1;
    if (!ze) return (Pc(e), (ze = !0), !1);
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ra(e.type, e.memoizedProps))),
      t && (t = Et))
    ) {
      if (fa(e)) throw (Nc(), Error(o(418)));
      for (; t; ) (Ec(e, t), (t = _n(t.nextSibling)));
    }
    if ((Pc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Et = _n(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        Et = null;
      }
    } else Et = _t ? _n(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Nc() {
    for (var e = Et; e; ) e = _n(e.nextSibling);
  }
  function _r() {
    ((Et = _t = null), (ze = !1));
  }
  function pa(e) {
    Mt === null ? (Mt = [e]) : Mt.push(e);
  }
  var l0 = he.ReactCurrentBatchConfig;
  function ci(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var i = n.stateNode;
        }
        if (!i) throw Error(o(147, e));
        var l = i,
          s = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === s
          ? t.ref
          : ((t = function (c) {
              var p = l.refs;
              c === null ? delete p[s] : (p[s] = c);
            }),
            (t._stringRef = s),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function yl(e, t) {
    throw (
      (e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e,
        ),
      )
    );
  }
  function Oc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ac(e) {
    function t(x, y) {
      if (e) {
        var k = x.deletions;
        k === null ? ((x.deletions = [y]), (x.flags |= 16)) : k.push(y);
      }
    }
    function n(x, y) {
      if (!e) return null;
      for (; y !== null; ) (t(x, y), (y = y.sibling));
      return null;
    }
    function i(x, y) {
      for (x = new Map(); y !== null; )
        (y.key !== null ? x.set(y.key, y) : x.set(y.index, y), (y = y.sibling));
      return x;
    }
    function l(x, y) {
      return ((x = zn(x, y)), (x.index = 0), (x.sibling = null), x);
    }
    function s(x, y, k) {
      return (
        (x.index = k),
        e
          ? ((k = x.alternate),
            k !== null
              ? ((k = k.index), k < y ? ((x.flags |= 2), y) : k)
              : ((x.flags |= 2), y))
          : ((x.flags |= 1048576), y)
      );
    }
    function c(x) {
      return (e && x.alternate === null && (x.flags |= 2), x);
    }
    function p(x, y, k, L) {
      return y === null || y.tag !== 6
        ? ((y = is(k, x.mode, L)), (y.return = x), y)
        : ((y = l(y, k)), (y.return = x), y);
    }
    function h(x, y, k, L) {
      var K = k.type;
      return K === Le
        ? T(x, y, k.props.children, L, k.key)
        : y !== null &&
            (y.elementType === K ||
              (typeof K == "object" &&
                K !== null &&
                K.$$typeof === Ne &&
                Oc(K) === y.type))
          ? ((L = l(y, k.props)), (L.ref = ci(x, y, k)), (L.return = x), L)
          : ((L = Ul(k.type, k.key, k.props, null, x.mode, L)),
            (L.ref = ci(x, y, k)),
            (L.return = x),
            L);
    }
    function _(x, y, k, L) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== k.containerInfo ||
        y.stateNode.implementation !== k.implementation
        ? ((y = ls(k, x.mode, L)), (y.return = x), y)
        : ((y = l(y, k.children || [])), (y.return = x), y);
    }
    function T(x, y, k, L, K) {
      return y === null || y.tag !== 7
        ? ((y = nr(k, x.mode, L, K)), (y.return = x), y)
        : ((y = l(y, k)), (y.return = x), y);
    }
    function I(x, y, k) {
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return ((y = is("" + y, x.mode, k)), (y.return = x), y);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case le:
            return (
              (k = Ul(y.type, y.key, y.props, null, x.mode, k)),
              (k.ref = ci(x, null, y)),
              (k.return = x),
              k
            );
          case Ie:
            return ((y = ls(y, x.mode, k)), (y.return = x), y);
          case Ne:
            var L = y._init;
            return I(x, L(y._payload), k);
        }
        if (E(y) || q(y))
          return ((y = nr(y, x.mode, k, null)), (y.return = x), y);
        yl(x, y);
      }
      return null;
    }
    function O(x, y, k, L) {
      var K = y !== null ? y.key : null;
      if ((typeof k == "string" && k !== "") || typeof k == "number")
        return K !== null ? null : p(x, y, "" + k, L);
      if (typeof k == "object" && k !== null) {
        switch (k.$$typeof) {
          case le:
            return k.key === K ? h(x, y, k, L) : null;
          case Ie:
            return k.key === K ? _(x, y, k, L) : null;
          case Ne:
            return ((K = k._init), O(x, y, K(k._payload), L));
        }
        if (E(k) || q(k)) return K !== null ? null : T(x, y, k, L, null);
        yl(x, k);
      }
      return null;
    }
    function W(x, y, k, L, K) {
      if ((typeof L == "string" && L !== "") || typeof L == "number")
        return ((x = x.get(k) || null), p(y, x, "" + L, K));
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case le:
            return (
              (x = x.get(L.key === null ? k : L.key) || null),
              h(y, x, L, K)
            );
          case Ie:
            return (
              (x = x.get(L.key === null ? k : L.key) || null),
              _(y, x, L, K)
            );
          case Ne:
            var J = L._init;
            return W(x, y, k, J(L._payload), K);
        }
        if (E(L) || q(L)) return ((x = x.get(k) || null), T(y, x, L, K, null));
        yl(y, L);
      }
      return null;
    }
    function H(x, y, k, L) {
      for (
        var K = null, J = null, ee = y, re = (y = 0), et = null;
        ee !== null && re < k.length;
        re++
      ) {
        ee.index > re ? ((et = ee), (ee = null)) : (et = ee.sibling);
        var ke = O(x, ee, k[re], L);
        if (ke === null) {
          ee === null && (ee = et);
          break;
        }
        (e && ee && ke.alternate === null && t(x, ee),
          (y = s(ke, y, re)),
          J === null ? (K = ke) : (J.sibling = ke),
          (J = ke),
          (ee = et));
      }
      if (re === k.length) return (n(x, ee), ze && Kn(x, re), K);
      if (ee === null) {
        for (; re < k.length; re++)
          ((ee = I(x, k[re], L)),
            ee !== null &&
              ((y = s(ee, y, re)),
              J === null ? (K = ee) : (J.sibling = ee),
              (J = ee)));
        return (ze && Kn(x, re), K);
      }
      for (ee = i(x, ee); re < k.length; re++)
        ((et = W(ee, x, re, k[re], L)),
          et !== null &&
            (e &&
              et.alternate !== null &&
              ee.delete(et.key === null ? re : et.key),
            (y = s(et, y, re)),
            J === null ? (K = et) : (J.sibling = et),
            (J = et)));
      return (
        e &&
          ee.forEach(function (Ln) {
            return t(x, Ln);
          }),
        ze && Kn(x, re),
        K
      );
    }
    function Y(x, y, k, L) {
      var K = q(k);
      if (typeof K != "function") throw Error(o(150));
      if (((k = K.call(k)), k == null)) throw Error(o(151));
      for (
        var J = (K = null), ee = y, re = (y = 0), et = null, ke = k.next();
        ee !== null && !ke.done;
        re++, ke = k.next()
      ) {
        ee.index > re ? ((et = ee), (ee = null)) : (et = ee.sibling);
        var Ln = O(x, ee, ke.value, L);
        if (Ln === null) {
          ee === null && (ee = et);
          break;
        }
        (e && ee && Ln.alternate === null && t(x, ee),
          (y = s(Ln, y, re)),
          J === null ? (K = Ln) : (J.sibling = Ln),
          (J = Ln),
          (ee = et));
      }
      if (ke.done) return (n(x, ee), ze && Kn(x, re), K);
      if (ee === null) {
        for (; !ke.done; re++, ke = k.next())
          ((ke = I(x, ke.value, L)),
            ke !== null &&
              ((y = s(ke, y, re)),
              J === null ? (K = ke) : (J.sibling = ke),
              (J = ke)));
        return (ze && Kn(x, re), K);
      }
      for (ee = i(x, ee); !ke.done; re++, ke = k.next())
        ((ke = W(ee, x, re, ke.value, L)),
          ke !== null &&
            (e &&
              ke.alternate !== null &&
              ee.delete(ke.key === null ? re : ke.key),
            (y = s(ke, y, re)),
            J === null ? (K = ke) : (J.sibling = ke),
            (J = ke)));
      return (
        e &&
          ee.forEach(function (D0) {
            return t(x, D0);
          }),
        ze && Kn(x, re),
        K
      );
    }
    function $e(x, y, k, L) {
      if (
        (typeof k == "object" &&
          k !== null &&
          k.type === Le &&
          k.key === null &&
          (k = k.props.children),
        typeof k == "object" && k !== null)
      ) {
        switch (k.$$typeof) {
          case le:
            e: {
              for (var K = k.key, J = y; J !== null; ) {
                if (J.key === K) {
                  if (((K = k.type), K === Le)) {
                    if (J.tag === 7) {
                      (n(x, J.sibling),
                        (y = l(J, k.props.children)),
                        (y.return = x),
                        (x = y));
                      break e;
                    }
                  } else if (
                    J.elementType === K ||
                    (typeof K == "object" &&
                      K !== null &&
                      K.$$typeof === Ne &&
                      Oc(K) === J.type)
                  ) {
                    (n(x, J.sibling),
                      (y = l(J, k.props)),
                      (y.ref = ci(x, J, k)),
                      (y.return = x),
                      (x = y));
                    break e;
                  }
                  n(x, J);
                  break;
                } else t(x, J);
                J = J.sibling;
              }
              k.type === Le
                ? ((y = nr(k.props.children, x.mode, L, k.key)),
                  (y.return = x),
                  (x = y))
                : ((L = Ul(k.type, k.key, k.props, null, x.mode, L)),
                  (L.ref = ci(x, y, k)),
                  (L.return = x),
                  (x = L));
            }
            return c(x);
          case Ie:
            e: {
              for (J = k.key; y !== null; ) {
                if (y.key === J)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === k.containerInfo &&
                    y.stateNode.implementation === k.implementation
                  ) {
                    (n(x, y.sibling),
                      (y = l(y, k.children || [])),
                      (y.return = x),
                      (x = y));
                    break e;
                  } else {
                    n(x, y);
                    break;
                  }
                else t(x, y);
                y = y.sibling;
              }
              ((y = ls(k, x.mode, L)), (y.return = x), (x = y));
            }
            return c(x);
          case Ne:
            return ((J = k._init), $e(x, y, J(k._payload), L));
        }
        if (E(k)) return H(x, y, k, L);
        if (q(k)) return Y(x, y, k, L);
        yl(x, k);
      }
      return (typeof k == "string" && k !== "") || typeof k == "number"
        ? ((k = "" + k),
          y !== null && y.tag === 6
            ? (n(x, y.sibling), (y = l(y, k)), (y.return = x), (x = y))
            : (n(x, y), (y = is(k, x.mode, L)), (y.return = x), (x = y)),
          c(x))
        : n(x, y);
    }
    return $e;
  }
  var Er = Ac(!0),
    Tc = Ac(!1),
    vl = En(null),
    wl = null,
    Cr = null,
    ma = null;
  function ha() {
    ma = Cr = wl = null;
  }
  function ga(e) {
    var t = vl.current;
    (Te(vl), (e._currentValue = t));
  }
  function ya(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
          : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function Pr(e, t) {
    ((wl = e),
      (ma = Cr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (gt = !0), (e.firstContext = null)));
  }
  function Tt(e) {
    var t = e._currentValue;
    if (ma !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Cr === null)) {
        if (wl === null) throw Error(o(308));
        ((Cr = e), (wl.dependencies = { lanes: 0, firstContext: e }));
      } else Cr = Cr.next = e;
    return t;
  }
  var Gn = null;
  function va(e) {
    Gn === null ? (Gn = [e]) : Gn.push(e);
  }
  function Fc(e, t, n, i) {
    var l = t.interleaved;
    return (
      l === null ? ((n.next = n), va(t)) : ((n.next = l.next), (l.next = n)),
      (t.interleaved = n),
      un(e, i)
    );
  }
  function un(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      ((e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return));
    return n.tag === 3 ? n.stateNode : null;
  }
  var Nn = !1;
  function wa(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function jc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        }));
  }
  function cn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function On(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (((i = i.shared), (xe & 2) !== 0)) {
      var l = i.pending;
      return (
        l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
        (i.pending = t),
        un(e, n)
      );
    }
    return (
      (l = i.interleaved),
      l === null ? ((t.next = t), va(i)) : ((t.next = l.next), (l.next = t)),
      (i.interleaved = t),
      un(e, n)
    );
  }
  function xl(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Io(e, n));
    }
  }
  function Ic(e, t) {
    var n = e.updateQueue,
      i = e.alternate;
    if (i !== null && ((i = i.updateQueue), n === i)) {
      var l = null,
        s = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var c = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          (s === null ? (l = s = c) : (s = s.next = c), (n = n.next));
        } while (n !== null);
        s === null ? (l = s = t) : (s = s.next = t);
      } else l = s = t;
      ((n = {
        baseState: i.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: s,
        shared: i.shared,
        effects: i.effects,
      }),
        (e.updateQueue = n));
      return;
    }
    ((e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t));
  }
  function kl(e, t, n, i) {
    var l = e.updateQueue;
    Nn = !1;
    var s = l.firstBaseUpdate,
      c = l.lastBaseUpdate,
      p = l.shared.pending;
    if (p !== null) {
      l.shared.pending = null;
      var h = p,
        _ = h.next;
      ((h.next = null), c === null ? (s = _) : (c.next = _), (c = h));
      var T = e.alternate;
      T !== null &&
        ((T = T.updateQueue),
        (p = T.lastBaseUpdate),
        p !== c &&
          (p === null ? (T.firstBaseUpdate = _) : (p.next = _),
          (T.lastBaseUpdate = h)));
    }
    if (s !== null) {
      var I = l.baseState;
      ((c = 0), (T = _ = h = null), (p = s));
      do {
        var O = p.lane,
          W = p.eventTime;
        if ((i & O) === O) {
          T !== null &&
            (T = T.next =
              {
                eventTime: W,
                lane: 0,
                tag: p.tag,
                payload: p.payload,
                callback: p.callback,
                next: null,
              });
          e: {
            var H = e,
              Y = p;
            switch (((O = t), (W = n), Y.tag)) {
              case 1:
                if (((H = Y.payload), typeof H == "function")) {
                  I = H.call(W, I, O);
                  break e;
                }
                I = H;
                break e;
              case 3:
                H.flags = (H.flags & -65537) | 128;
              case 0:
                if (
                  ((H = Y.payload),
                  (O = typeof H == "function" ? H.call(W, I, O) : H),
                  O == null)
                )
                  break e;
                I = U({}, I, O);
                break e;
              case 2:
                Nn = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (O = l.effects),
            O === null ? (l.effects = [p]) : O.push(p));
        } else
          ((W = {
            eventTime: W,
            lane: O,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            T === null ? ((_ = T = W), (h = I)) : (T = T.next = W),
            (c |= O));
        if (((p = p.next), p === null)) {
          if (((p = l.shared.pending), p === null)) break;
          ((O = p),
            (p = O.next),
            (O.next = null),
            (l.lastBaseUpdate = O),
            (l.shared.pending = null));
        }
      } while (!0);
      if (
        (T === null && (h = I),
        (l.baseState = h),
        (l.firstBaseUpdate = _),
        (l.lastBaseUpdate = T),
        (t = l.shared.interleaved),
        t !== null)
      ) {
        l = t;
        do ((c |= l.lane), (l = l.next));
        while (l !== t);
      } else s === null && (l.shared.lanes = 0);
      ((Zn |= c), (e.lanes = c), (e.memoizedState = I));
    }
  }
  function zc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var i = e[t],
          l = i.callback;
        if (l !== null) {
          if (((i.callback = null), (i = n), typeof l != "function"))
            throw Error(o(191, l));
          l.call(i);
        }
      }
  }
  var fi = {},
    Yt = En(fi),
    di = En(fi),
    pi = En(fi);
  function Xn(e) {
    if (e === fi) throw Error(o(174));
    return e;
  }
  function xa(e, t) {
    switch ((Oe(pi, t), Oe(di, e), Oe(Yt, fi), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ue(null, "");
        break;
      default:
        ((e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ue(t, e)));
    }
    (Te(Yt), Oe(Yt, t));
  }
  function Nr() {
    (Te(Yt), Te(di), Te(pi));
  }
  function Lc(e) {
    Xn(pi.current);
    var t = Xn(Yt.current),
      n = Ue(t, e.type);
    t !== n && (Oe(di, e), Oe(Yt, n));
  }
  function ka(e) {
    di.current === e && (Te(Yt), Te(di));
  }
  var Re = En(0);
  function Sl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Sa = [];
  function _a() {
    for (var e = 0; e < Sa.length; e++)
      Sa[e]._workInProgressVersionPrimary = null;
    Sa.length = 0;
  }
  var _l = he.ReactCurrentDispatcher,
    Ea = he.ReactCurrentBatchConfig,
    qn = 0,
    Me = null,
    Ge = null,
    Ze = null,
    El = !1,
    mi = !1,
    hi = 0,
    o0 = 0;
  function it() {
    throw Error(o(321));
  }
  function Ca(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Rt(e[n], t[n])) return !1;
    return !0;
  }
  function Pa(e, t, n, i, l, s) {
    if (
      ((qn = s),
      (Me = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_l.current = e === null || e.memoizedState === null ? c0 : f0),
      (e = n(i, l)),
      mi)
    ) {
      s = 0;
      do {
        if (((mi = !1), (hi = 0), 25 <= s)) throw Error(o(301));
        ((s += 1),
          (Ze = Ge = null),
          (t.updateQueue = null),
          (_l.current = d0),
          (e = n(i, l)));
      } while (mi);
    }
    if (
      ((_l.current = Nl),
      (t = Ge !== null && Ge.next !== null),
      (qn = 0),
      (Ze = Ge = Me = null),
      (El = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function Na() {
    var e = hi !== 0;
    return ((hi = 0), e);
  }
  function Qt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e), Ze);
  }
  function Ft() {
    if (Ge === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = Ze === null ? Me.memoizedState : Ze.next;
    if (t !== null) ((Ze = t), (Ge = e));
    else {
      if (e === null) throw Error(o(310));
      ((Ge = e),
        (e = {
          memoizedState: Ge.memoizedState,
          baseState: Ge.baseState,
          baseQueue: Ge.baseQueue,
          queue: Ge.queue,
          next: null,
        }),
        Ze === null ? (Me.memoizedState = Ze = e) : (Ze = Ze.next = e));
    }
    return Ze;
  }
  function gi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Oa(e) {
    var t = Ft(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = Ge,
      l = i.baseQueue,
      s = n.pending;
    if (s !== null) {
      if (l !== null) {
        var c = l.next;
        ((l.next = s.next), (s.next = c));
      }
      ((i.baseQueue = l = s), (n.pending = null));
    }
    if (l !== null) {
      ((s = l.next), (i = i.baseState));
      var p = (c = null),
        h = null,
        _ = s;
      do {
        var T = _.lane;
        if ((qn & T) === T)
          (h !== null &&
            (h = h.next =
              {
                lane: 0,
                action: _.action,
                hasEagerState: _.hasEagerState,
                eagerState: _.eagerState,
                next: null,
              }),
            (i = _.hasEagerState ? _.eagerState : e(i, _.action)));
        else {
          var I = {
            lane: T,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          };
          (h === null ? ((p = h = I), (c = i)) : (h = h.next = I),
            (Me.lanes |= T),
            (Zn |= T));
        }
        _ = _.next;
      } while (_ !== null && _ !== s);
      (h === null ? (c = i) : (h.next = p),
        Rt(i, t.memoizedState) || (gt = !0),
        (t.memoizedState = i),
        (t.baseState = c),
        (t.baseQueue = h),
        (n.lastRenderedState = i));
    }
    if (((e = n.interleaved), e !== null)) {
      l = e;
      do ((s = l.lane), (Me.lanes |= s), (Zn |= s), (l = l.next));
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Aa(e) {
    var t = Ft(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch,
      l = n.pending,
      s = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = (l = l.next);
      do ((s = e(s, c.action)), (c = c.next));
      while (c !== l);
      (Rt(s, t.memoizedState) || (gt = !0),
        (t.memoizedState = s),
        t.baseQueue === null && (t.baseState = s),
        (n.lastRenderedState = s));
    }
    return [s, i];
  }
  function Rc() {}
  function Mc(e, t) {
    var n = Me,
      i = Ft(),
      l = t(),
      s = !Rt(i.memoizedState, l);
    if (
      (s && ((i.memoizedState = l), (gt = !0)),
      (i = i.queue),
      Ta(Vc.bind(null, n, i, e), [e]),
      i.getSnapshot !== t || s || (Ze !== null && Ze.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        yi(9, bc.bind(null, n, i, l, t), void 0, null),
        Je === null)
      )
        throw Error(o(349));
      (qn & 30) !== 0 || Dc(n, t, l);
    }
    return l;
  }
  function Dc(e, t, n) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
  }
  function bc(e, t, n, i) {
    ((t.value = n), (t.getSnapshot = i), Uc(t) && Wc(e));
  }
  function Vc(e, t, n) {
    return n(function () {
      Uc(t) && Wc(e);
    });
  }
  function Uc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Rt(e, n);
    } catch {
      return !0;
    }
  }
  function Wc(e) {
    var t = un(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function Bc(e) {
    var t = Qt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: gi,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = u0.bind(null, Me, e)),
      [t.memoizedState, e]
    );
  }
  function yi(e, t, n, i) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
      (t = Me.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Me.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
      e
    );
  }
  function Hc() {
    return Ft().memoizedState;
  }
  function Cl(e, t, n, i) {
    var l = Qt();
    ((Me.flags |= e),
      (l.memoizedState = yi(1 | t, n, void 0, i === void 0 ? null : i)));
  }
  function Pl(e, t, n, i) {
    var l = Ft();
    i = i === void 0 ? null : i;
    var s = void 0;
    if (Ge !== null) {
      var c = Ge.memoizedState;
      if (((s = c.destroy), i !== null && Ca(i, c.deps))) {
        l.memoizedState = yi(t, n, s, i);
        return;
      }
    }
    ((Me.flags |= e), (l.memoizedState = yi(1 | t, n, s, i)));
  }
  function $c(e, t) {
    return Cl(8390656, 8, e, t);
  }
  function Ta(e, t) {
    return Pl(2048, 8, e, t);
  }
  function Yc(e, t) {
    return Pl(4, 2, e, t);
  }
  function Qc(e, t) {
    return Pl(4, 4, e, t);
  }
  function Kc(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Gc(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null),
      Pl(4, 4, Kc.bind(null, t, e), n)
    );
  }
  function Fa() {}
  function Xc(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ca(t, i[1])
      ? i[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function qc(e, t) {
    var n = Ft();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return i !== null && t !== null && Ca(t, i[1])
      ? i[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Zc(e, t, n) {
    return (qn & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (gt = !0)), (e.memoizedState = n))
      : (Rt(n, t) ||
          ((n = Ou()), (Me.lanes |= n), (Zn |= n), (e.baseState = !0)),
        t);
  }
  function a0(e, t) {
    var n = Ee;
    ((Ee = n !== 0 && 4 > n ? n : 4), e(!0));
    var i = Ea.transition;
    Ea.transition = {};
    try {
      (e(!1), t());
    } finally {
      ((Ee = n), (Ea.transition = i));
    }
  }
  function Jc() {
    return Ft().memoizedState;
  }
  function s0(e, t, n) {
    var i = jn(e);
    if (
      ((n = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      ef(e))
    )
      tf(t, n);
    else if (((n = Fc(e, t, n, i)), n !== null)) {
      var l = ft();
      (Ut(n, e, i, l), nf(n, t, i));
    }
  }
  function u0(e, t, n) {
    var i = jn(e),
      l = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (ef(e)) tf(t, l);
    else {
      var s = e.alternate;
      if (
        e.lanes === 0 &&
        (s === null || s.lanes === 0) &&
        ((s = t.lastRenderedReducer), s !== null)
      )
        try {
          var c = t.lastRenderedState,
            p = s(c, n);
          if (((l.hasEagerState = !0), (l.eagerState = p), Rt(p, c))) {
            var h = t.interleaved;
            (h === null
              ? ((l.next = l), va(t))
              : ((l.next = h.next), (h.next = l)),
              (t.interleaved = l));
            return;
          }
        } catch {
        } finally {
        }
      ((n = Fc(e, t, l, i)),
        n !== null && ((l = ft()), Ut(n, e, i, l), nf(n, t, i)));
    }
  }
  function ef(e) {
    var t = e.alternate;
    return e === Me || (t !== null && t === Me);
  }
  function tf(e, t) {
    mi = El = !0;
    var n = e.pending;
    (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t));
  }
  function nf(e, t, n) {
    if ((n & 4194240) !== 0) {
      var i = t.lanes;
      ((i &= e.pendingLanes), (n |= i), (t.lanes = n), Io(e, n));
    }
  }
  var Nl = {
      readContext: Tt,
      useCallback: it,
      useContext: it,
      useEffect: it,
      useImperativeHandle: it,
      useInsertionEffect: it,
      useLayoutEffect: it,
      useMemo: it,
      useReducer: it,
      useRef: it,
      useState: it,
      useDebugValue: it,
      useDeferredValue: it,
      useTransition: it,
      useMutableSource: it,
      useSyncExternalStore: it,
      useId: it,
      unstable_isNewReconciler: !1,
    },
    c0 = {
      readContext: Tt,
      useCallback: function (e, t) {
        return ((Qt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: Tt,
      useEffect: $c,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          Cl(4194308, 4, Kc.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return Cl(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return Cl(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Qt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var i = Qt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (i.memoizedState = i.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (i.queue = e),
          (e = e.dispatch = s0.bind(null, Me, e)),
          [i.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Qt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: Bc,
      useDebugValue: Fa,
      useDeferredValue: function (e) {
        return (Qt().memoizedState = e);
      },
      useTransition: function () {
        var e = Bc(!1),
          t = e[0];
        return ((e = a0.bind(null, e[1])), (Qt().memoizedState = e), [t, e]);
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var i = Me,
          l = Qt();
        if (ze) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), Je === null)) throw Error(o(349));
          (qn & 30) !== 0 || Dc(i, t, n);
        }
        l.memoizedState = n;
        var s = { value: n, getSnapshot: t };
        return (
          (l.queue = s),
          $c(Vc.bind(null, i, s, e), [e]),
          (i.flags |= 2048),
          yi(9, bc.bind(null, i, s, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Qt(),
          t = Je.identifierPrefix;
        if (ze) {
          var n = sn,
            i = an;
          ((n = (i & ~(1 << (32 - Lt(i) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = hi++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":"));
        } else ((n = o0++), (t = ":" + t + "r" + n.toString(32) + ":"));
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    f0 = {
      readContext: Tt,
      useCallback: Xc,
      useContext: Tt,
      useEffect: Ta,
      useImperativeHandle: Gc,
      useInsertionEffect: Yc,
      useLayoutEffect: Qc,
      useMemo: qc,
      useReducer: Oa,
      useRef: Hc,
      useState: function () {
        return Oa(gi);
      },
      useDebugValue: Fa,
      useDeferredValue: function (e) {
        var t = Ft();
        return Zc(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Oa(gi)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Rc,
      useSyncExternalStore: Mc,
      useId: Jc,
      unstable_isNewReconciler: !1,
    },
    d0 = {
      readContext: Tt,
      useCallback: Xc,
      useContext: Tt,
      useEffect: Ta,
      useImperativeHandle: Gc,
      useInsertionEffect: Yc,
      useLayoutEffect: Qc,
      useMemo: qc,
      useReducer: Aa,
      useRef: Hc,
      useState: function () {
        return Aa(gi);
      },
      useDebugValue: Fa,
      useDeferredValue: function (e) {
        var t = Ft();
        return Ge === null ? (t.memoizedState = e) : Zc(t, Ge.memoizedState, e);
      },
      useTransition: function () {
        var e = Aa(gi)[0],
          t = Ft().memoizedState;
        return [e, t];
      },
      useMutableSource: Rc,
      useSyncExternalStore: Mc,
      useId: Jc,
      unstable_isNewReconciler: !1,
    };
  function Dt(e, t) {
    if (e && e.defaultProps) {
      ((t = U({}, t)), (e = e.defaultProps));
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ja(e, t, n, i) {
    ((t = e.memoizedState),
      (n = n(i, t)),
      (n = n == null ? t : U({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n));
  }
  var Ol = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Hn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var i = ft(),
        l = jn(e),
        s = cn(i, l);
      ((s.payload = t),
        n != null && (s.callback = n),
        (t = On(e, s, l)),
        t !== null && (Ut(t, e, l, i), xl(t, e, l)));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var i = ft(),
        l = jn(e),
        s = cn(i, l);
      ((s.tag = 1),
        (s.payload = t),
        n != null && (s.callback = n),
        (t = On(e, s, l)),
        t !== null && (Ut(t, e, l, i), xl(t, e, l)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = ft(),
        i = jn(e),
        l = cn(n, i);
      ((l.tag = 2),
        t != null && (l.callback = t),
        (t = On(e, l, i)),
        t !== null && (Ut(t, e, i, n), xl(t, e, i)));
    },
  };
  function rf(e, t, n, i, l, s, c) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(i, s, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !ri(n, i) || !ri(l, s)
          : !0
    );
  }
  function lf(e, t, n) {
    var i = !1,
      l = Cn,
      s = t.contextType;
    return (
      typeof s == "object" && s !== null
        ? (s = Tt(s))
        : ((l = ht(t) ? Yn : rt.current),
          (i = t.contextTypes),
          (s = (i = i != null) ? xr(e, l) : Cn)),
      (t = new t(n, s)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Ol),
      (e.stateNode = t),
      (t._reactInternals = e),
      i &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = l),
        (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
    );
  }
  function of(e, t, n, i) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, i),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, i),
      t.state !== e && Ol.enqueueReplaceState(t, t.state, null));
  }
  function Ia(e, t, n, i) {
    var l = e.stateNode;
    ((l.props = n), (l.state = e.memoizedState), (l.refs = {}), wa(e));
    var s = t.contextType;
    (typeof s == "object" && s !== null
      ? (l.context = Tt(s))
      : ((s = ht(t) ? Yn : rt.current), (l.context = xr(e, s))),
      (l.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (ja(e, t, s, n), (l.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function" ||
        (typeof l.UNSAFE_componentWillMount != "function" &&
          typeof l.componentWillMount != "function") ||
        ((t = l.state),
        typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" &&
          l.UNSAFE_componentWillMount(),
        t !== l.state && Ol.enqueueReplaceState(l, l.state, null),
        kl(e, n, l, i),
        (l.state = e.memoizedState)),
      typeof l.componentDidMount == "function" && (e.flags |= 4194308));
  }
  function Or(e, t) {
    try {
      var n = "",
        i = t;
      do ((n += ve(i)), (i = i.return));
      while (i);
      var l = n;
    } catch (s) {
      l =
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function za(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function La(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var p0 = typeof WeakMap == "function" ? WeakMap : Map;
  function af(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
    var i = t.value;
    return (
      (n.callback = function () {
        (Ll || ((Ll = !0), (Xa = i)), La(e, t));
      }),
      n
    );
  }
  function sf(e, t, n) {
    ((n = cn(-1, n)), (n.tag = 3));
    var i = e.type.getDerivedStateFromError;
    if (typeof i == "function") {
      var l = t.value;
      ((n.payload = function () {
        return i(l);
      }),
        (n.callback = function () {
          La(e, t);
        }));
    }
    var s = e.stateNode;
    return (
      s !== null &&
        typeof s.componentDidCatch == "function" &&
        (n.callback = function () {
          (La(e, t),
            typeof i != "function" &&
              (Tn === null ? (Tn = new Set([this])) : Tn.add(this)));
          var c = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: c !== null ? c : "",
          });
        }),
      n
    );
  }
  function uf(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new p0();
      var l = new Set();
      i.set(t, l);
    } else ((l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l)));
    l.has(n) || (l.add(n), (e = N0.bind(null, e, t, n)), t.then(e, e));
  }
  function cf(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ff(e, t, n, i, l) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = cn(-1, 1)), (t.tag = 2), On(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = l), e);
  }
  var m0 = he.ReactCurrentOwner,
    gt = !1;
  function ct(e, t, n, i) {
    t.child = e === null ? Tc(t, null, n, i) : Er(t, e.child, n, i);
  }
  function df(e, t, n, i, l) {
    n = n.render;
    var s = t.ref;
    return (
      Pr(t, l),
      (i = Pa(e, t, n, i, s, l)),
      (n = Na()),
      e !== null && !gt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          fn(e, t, l))
        : (ze && n && ua(t), (t.flags |= 1), ct(e, t, i, l), t.child)
    );
  }
  function pf(e, t, n, i, l) {
    if (e === null) {
      var s = n.type;
      return typeof s == "function" &&
        !rs(s) &&
        s.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = s), mf(e, t, s, i, l))
        : ((e = Ul(n.type, null, i, t, t.mode, l)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((s = e.child), (e.lanes & l) === 0)) {
      var c = s.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ri), n(c, i) && e.ref === t.ref)
      )
        return fn(e, t, l);
    }
    return (
      (t.flags |= 1),
      (e = zn(s, i)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function mf(e, t, n, i, l) {
    if (e !== null) {
      var s = e.memoizedProps;
      if (ri(s, i) && e.ref === t.ref)
        if (((gt = !1), (t.pendingProps = i = s), (e.lanes & l) !== 0))
          (e.flags & 131072) !== 0 && (gt = !0);
        else return ((t.lanes = e.lanes), fn(e, t, l));
    }
    return Ra(e, t, n, i, l);
  }
  function hf(e, t, n) {
    var i = t.pendingProps,
      l = i.children,
      s = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden")
      if ((t.mode & 1) === 0)
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          Oe(Tr, Ct),
          (Ct |= n));
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = s !== null ? s.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            Oe(Tr, Ct),
            (Ct |= e),
            null
          );
        ((t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (i = s !== null ? s.baseLanes : n),
          Oe(Tr, Ct),
          (Ct |= i));
      }
    else
      (s !== null ? ((i = s.baseLanes | n), (t.memoizedState = null)) : (i = n),
        Oe(Tr, Ct),
        (Ct |= i));
    return (ct(e, t, l, n), t.child);
  }
  function gf(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Ra(e, t, n, i, l) {
    var s = ht(n) ? Yn : rt.current;
    return (
      (s = xr(t, s)),
      Pr(t, l),
      (n = Pa(e, t, n, i, s, l)),
      (i = Na()),
      e !== null && !gt
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~l),
          fn(e, t, l))
        : (ze && i && ua(t), (t.flags |= 1), ct(e, t, n, l), t.child)
    );
  }
  function yf(e, t, n, i, l) {
    if (ht(n)) {
      var s = !0;
      dl(t);
    } else s = !1;
    if ((Pr(t, l), t.stateNode === null))
      (Tl(e, t), lf(t, n, i), Ia(t, n, i, l), (i = !0));
    else if (e === null) {
      var c = t.stateNode,
        p = t.memoizedProps;
      c.props = p;
      var h = c.context,
        _ = n.contextType;
      typeof _ == "object" && _ !== null
        ? (_ = Tt(_))
        : ((_ = ht(n) ? Yn : rt.current), (_ = xr(t, _)));
      var T = n.getDerivedStateFromProps,
        I =
          typeof T == "function" ||
          typeof c.getSnapshotBeforeUpdate == "function";
      (I ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== i || h !== _) && of(t, c, i, _)),
        (Nn = !1));
      var O = t.memoizedState;
      ((c.state = O),
        kl(t, i, c, l),
        (h = t.memoizedState),
        p !== i || O !== h || mt.current || Nn
          ? (typeof T == "function" && (ja(t, n, T, i), (h = t.memoizedState)),
            (p = Nn || rf(t, n, p, i, O, h, _))
              ? (I ||
                  (typeof c.UNSAFE_componentWillMount != "function" &&
                    typeof c.componentWillMount != "function") ||
                  (typeof c.componentWillMount == "function" &&
                    c.componentWillMount(),
                  typeof c.UNSAFE_componentWillMount == "function" &&
                    c.UNSAFE_componentWillMount()),
                typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof c.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = i),
                (t.memoizedState = h)),
            (c.props = i),
            (c.state = h),
            (c.context = _),
            (i = p))
          : (typeof c.componentDidMount == "function" && (t.flags |= 4194308),
            (i = !1)));
    } else {
      ((c = t.stateNode),
        jc(e, t),
        (p = t.memoizedProps),
        (_ = t.type === t.elementType ? p : Dt(t.type, p)),
        (c.props = _),
        (I = t.pendingProps),
        (O = c.context),
        (h = n.contextType),
        typeof h == "object" && h !== null
          ? (h = Tt(h))
          : ((h = ht(n) ? Yn : rt.current), (h = xr(t, h))));
      var W = n.getDerivedStateFromProps;
      ((T =
        typeof W == "function" ||
        typeof c.getSnapshotBeforeUpdate == "function") ||
        (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
          typeof c.componentWillReceiveProps != "function") ||
        ((p !== I || O !== h) && of(t, c, i, h)),
        (Nn = !1),
        (O = t.memoizedState),
        (c.state = O),
        kl(t, i, c, l));
      var H = t.memoizedState;
      p !== I || O !== H || mt.current || Nn
        ? (typeof W == "function" && (ja(t, n, W, i), (H = t.memoizedState)),
          (_ = Nn || rf(t, n, _, i, O, H, h) || !1)
            ? (T ||
                (typeof c.UNSAFE_componentWillUpdate != "function" &&
                  typeof c.componentWillUpdate != "function") ||
                (typeof c.componentWillUpdate == "function" &&
                  c.componentWillUpdate(i, H, h),
                typeof c.UNSAFE_componentWillUpdate == "function" &&
                  c.UNSAFE_componentWillUpdate(i, H, h)),
              typeof c.componentDidUpdate == "function" && (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof c.componentDidUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof c.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = i),
              (t.memoizedState = H)),
          (c.props = i),
          (c.state = H),
          (c.context = h),
          (i = _))
        : (typeof c.componentDidUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof c.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (i = !1));
    }
    return Ma(e, t, n, i, s, l);
  }
  function Ma(e, t, n, i, l, s) {
    gf(e, t);
    var c = (t.flags & 128) !== 0;
    if (!i && !c) return (l && kc(t, n, !1), fn(e, t, s));
    ((i = t.stateNode), (m0.current = t));
    var p =
      c && typeof n.getDerivedStateFromError != "function" ? null : i.render();
    return (
      (t.flags |= 1),
      e !== null && c
        ? ((t.child = Er(t, e.child, null, s)), (t.child = Er(t, null, p, s)))
        : ct(e, t, p, s),
      (t.memoizedState = i.state),
      l && kc(t, n, !0),
      t.child
    );
  }
  function vf(e) {
    var t = e.stateNode;
    (t.pendingContext
      ? wc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && wc(e, t.context, !1),
      xa(e, t.containerInfo));
  }
  function wf(e, t, n, i, l) {
    return (_r(), pa(l), (t.flags |= 256), ct(e, t, n, i), t.child);
  }
  var Da = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ba(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xf(e, t, n) {
    var i = t.pendingProps,
      l = Re.current,
      s = !1,
      c = (t.flags & 128) !== 0,
      p;
    if (
      ((p = c) ||
        (p = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
      p
        ? ((s = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (l |= 1),
      Oe(Re, l & 1),
      e === null)
    )
      return (
        da(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824),
            null)
          : ((c = i.children),
            (e = i.fallback),
            s
              ? ((i = t.mode),
                (s = t.child),
                (c = { mode: "hidden", children: c }),
                (i & 1) === 0 && s !== null
                  ? ((s.childLanes = 0), (s.pendingProps = c))
                  : (s = Wl(c, i, 0, null)),
                (e = nr(e, i, n, null)),
                (s.return = t),
                (e.return = t),
                (s.sibling = e),
                (t.child = s),
                (t.child.memoizedState = ba(n)),
                (t.memoizedState = Da),
                e)
              : Va(t, c))
      );
    if (((l = e.memoizedState), l !== null && ((p = l.dehydrated), p !== null)))
      return h0(e, t, c, i, p, l, n);
    if (s) {
      ((s = i.fallback), (c = t.mode), (l = e.child), (p = l.sibling));
      var h = { mode: "hidden", children: i.children };
      return (
        (c & 1) === 0 && t.child !== l
          ? ((i = t.child),
            (i.childLanes = 0),
            (i.pendingProps = h),
            (t.deletions = null))
          : ((i = zn(l, h)), (i.subtreeFlags = l.subtreeFlags & 14680064)),
        p !== null ? (s = zn(p, s)) : ((s = nr(s, c, n, null)), (s.flags |= 2)),
        (s.return = t),
        (i.return = t),
        (i.sibling = s),
        (t.child = i),
        (i = s),
        (s = t.child),
        (c = e.child.memoizedState),
        (c =
          c === null
            ? ba(n)
            : {
                baseLanes: c.baseLanes | n,
                cachePool: null,
                transitions: c.transitions,
              }),
        (s.memoizedState = c),
        (s.childLanes = e.childLanes & ~n),
        (t.memoizedState = Da),
        i
      );
    }
    return (
      (s = e.child),
      (e = s.sibling),
      (i = zn(s, { mode: "visible", children: i.children })),
      (t.mode & 1) === 0 && (i.lanes = n),
      (i.return = t),
      (i.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = i),
      (t.memoizedState = null),
      i
    );
  }
  function Va(e, t) {
    return (
      (t = Wl({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Al(e, t, n, i) {
    return (
      i !== null && pa(i),
      Er(t, e.child, null, n),
      (e = Va(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function h0(e, t, n, i, l, s, c) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (i = za(Error(o(422)))), Al(e, t, c, i))
        : t.memoizedState !== null
          ? ((t.child = e.child), (t.flags |= 128), null)
          : ((s = i.fallback),
            (l = t.mode),
            (i = Wl({ mode: "visible", children: i.children }, l, 0, null)),
            (s = nr(s, l, c, null)),
            (s.flags |= 2),
            (i.return = t),
            (s.return = t),
            (i.sibling = s),
            (t.child = i),
            (t.mode & 1) !== 0 && Er(t, e.child, null, c),
            (t.child.memoizedState = ba(c)),
            (t.memoizedState = Da),
            s);
    if ((t.mode & 1) === 0) return Al(e, t, c, null);
    if (l.data === "$!") {
      if (((i = l.nextSibling && l.nextSibling.dataset), i)) var p = i.dgst;
      return (
        (i = p),
        (s = Error(o(419))),
        (i = za(s, i, void 0)),
        Al(e, t, c, i)
      );
    }
    if (((p = (c & e.childLanes) !== 0), gt || p)) {
      if (((i = Je), i !== null)) {
        switch (c & -c) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        ((l = (l & (i.suspendedLanes | c)) !== 0 ? 0 : l),
          l !== 0 &&
            l !== s.retryLane &&
            ((s.retryLane = l), un(e, l), Ut(i, e, l, -1)));
      }
      return (ns(), (i = za(Error(o(421)))), Al(e, t, c, i));
    }
    return l.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = O0.bind(null, e)),
        (l._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (Et = _n(l.nextSibling)),
        (_t = t),
        (ze = !0),
        (Mt = null),
        e !== null &&
          ((Ot[At++] = an),
          (Ot[At++] = sn),
          (Ot[At++] = Qn),
          (an = e.id),
          (sn = e.overflow),
          (Qn = t)),
        (t = Va(t, i.children)),
        (t.flags |= 4096),
        t);
  }
  function kf(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    (i !== null && (i.lanes |= t), ya(e.return, t, n));
  }
  function Ua(e, t, n, i, l) {
    var s = e.memoizedState;
    s === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: i,
          tail: n,
          tailMode: l,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = i),
        (s.tail = n),
        (s.tailMode = l));
  }
  function Sf(e, t, n) {
    var i = t.pendingProps,
      l = i.revealOrder,
      s = i.tail;
    if ((ct(e, t, i.children, n), (i = Re.current), (i & 2) !== 0))
      ((i = (i & 1) | 2), (t.flags |= 128));
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && kf(e, n, t);
          else if (e.tag === 19) kf(e, n, t);
          else if (e.child !== null) {
            ((e.child.return = e), (e = e.child));
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          ((e.sibling.return = e.return), (e = e.sibling));
        }
      i &= 1;
    }
    if ((Oe(Re, i), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (n = t.child, l = null; n !== null; )
            ((e = n.alternate),
              e !== null && Sl(e) === null && (l = n),
              (n = n.sibling));
          ((n = l),
            n === null
              ? ((l = t.child), (t.child = null))
              : ((l = n.sibling), (n.sibling = null)),
            Ua(t, !1, l, n, s));
          break;
        case "backwards":
          for (n = null, l = t.child, t.child = null; l !== null; ) {
            if (((e = l.alternate), e !== null && Sl(e) === null)) {
              t.child = l;
              break;
            }
            ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
          }
          Ua(t, !0, n, null, s);
          break;
        case "together":
          Ua(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Tl(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function fn(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Zn |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = zn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        ((e = e.sibling),
          (n = n.sibling = zn(e, e.pendingProps)),
          (n.return = t));
      n.sibling = null;
    }
    return t.child;
  }
  function g0(e, t, n) {
    switch (t.tag) {
      case 3:
        (vf(t), _r());
        break;
      case 5:
        Lc(t);
        break;
      case 1:
        ht(t.type) && dl(t);
        break;
      case 4:
        xa(t, t.stateNode.containerInfo);
        break;
      case 10:
        var i = t.type._context,
          l = t.memoizedProps.value;
        (Oe(vl, i._currentValue), (i._currentValue = l));
        break;
      case 13:
        if (((i = t.memoizedState), i !== null))
          return i.dehydrated !== null
            ? (Oe(Re, Re.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
              ? xf(e, t, n)
              : (Oe(Re, Re.current & 1),
                (e = fn(e, t, n)),
                e !== null ? e.sibling : null);
        Oe(Re, Re.current & 1);
        break;
      case 19:
        if (((i = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (i) return Sf(e, t, n);
          t.flags |= 128;
        }
        if (
          ((l = t.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Oe(Re, Re.current),
          i)
        )
          break;
        return null;
      case 22:
      case 23:
        return ((t.lanes = 0), hf(e, t, n));
    }
    return fn(e, t, n);
  }
  var _f, Wa, Ef, Cf;
  ((_f = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        ((n.child.return = n), (n = n.child));
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      ((n.sibling.return = n.return), (n = n.sibling));
    }
  }),
    (Wa = function () {}),
    (Ef = function (e, t, n, i) {
      var l = e.memoizedProps;
      if (l !== i) {
        ((e = t.stateNode), Xn(Yt.current));
        var s = null;
        switch (n) {
          case "input":
            ((l = sr(e, l)), (i = sr(e, i)), (s = []));
            break;
          case "select":
            ((l = U({}, l, { value: void 0 })),
              (i = U({}, i, { value: void 0 })),
              (s = []));
            break;
          case "textarea":
            ((l = M(e, l)), (i = M(e, i)), (s = []));
            break;
          default:
            typeof l.onClick != "function" &&
              typeof i.onClick == "function" &&
              (e.onclick = ul);
        }
        So(n, i);
        var c;
        n = null;
        for (_ in l)
          if (!i.hasOwnProperty(_) && l.hasOwnProperty(_) && l[_] != null)
            if (_ === "style") {
              var p = l[_];
              for (c in p) p.hasOwnProperty(c) && (n || (n = {}), (n[c] = ""));
            } else
              _ !== "dangerouslySetInnerHTML" &&
                _ !== "children" &&
                _ !== "suppressContentEditableWarning" &&
                _ !== "suppressHydrationWarning" &&
                _ !== "autoFocus" &&
                (f.hasOwnProperty(_)
                  ? s || (s = [])
                  : (s = s || []).push(_, null));
        for (_ in i) {
          var h = i[_];
          if (
            ((p = l != null ? l[_] : void 0),
            i.hasOwnProperty(_) && h !== p && (h != null || p != null))
          )
            if (_ === "style")
              if (p) {
                for (c in p)
                  !p.hasOwnProperty(c) ||
                    (h && h.hasOwnProperty(c)) ||
                    (n || (n = {}), (n[c] = ""));
                for (c in h)
                  h.hasOwnProperty(c) &&
                    p[c] !== h[c] &&
                    (n || (n = {}), (n[c] = h[c]));
              } else (n || (s || (s = []), s.push(_, n)), (n = h));
            else
              _ === "dangerouslySetInnerHTML"
                ? ((h = h ? h.__html : void 0),
                  (p = p ? p.__html : void 0),
                  h != null && p !== h && (s = s || []).push(_, h))
                : _ === "children"
                  ? (typeof h != "string" && typeof h != "number") ||
                    (s = s || []).push(_, "" + h)
                  : _ !== "suppressContentEditableWarning" &&
                    _ !== "suppressHydrationWarning" &&
                    (f.hasOwnProperty(_)
                      ? (h != null && _ === "onScroll" && Ae("scroll", e),
                        s || p === h || (s = []))
                      : (s = s || []).push(_, h));
        }
        n && (s = s || []).push("style", n);
        var _ = s;
        (t.updateQueue = _) && (t.flags |= 4);
      }
    }),
    (Cf = function (e, t, n, i) {
      n !== i && (t.flags |= 4);
    }));
  function vi(e, t) {
    if (!ze)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            (t.alternate !== null && (n = t), (t = t.sibling));
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            (n.alternate !== null && (i = n), (n = n.sibling));
          i === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (i.sibling = null);
      }
  }
  function lt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      i = 0;
    if (t)
      for (var l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags & 14680064),
          (i |= l.flags & 14680064),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (i |= l.subtreeFlags),
          (i |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= i), (e.childLanes = n), t);
  }
  function y0(e, t, n) {
    var i = t.pendingProps;
    switch ((ca(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (lt(t), null);
      case 1:
        return (ht(t.type) && fl(), lt(t), null);
      case 3:
        return (
          (i = t.stateNode),
          Nr(),
          Te(mt),
          Te(rt),
          _a(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (gl(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Mt !== null && (Ja(Mt), (Mt = null)))),
          Wa(e, t),
          lt(t),
          null
        );
      case 5:
        ka(t);
        var l = Xn(pi.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          (Ef(e, t, n, i, l),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
        else {
          if (!i) {
            if (t.stateNode === null) throw Error(o(166));
            return (lt(t), null);
          }
          if (((e = Xn(Yt.current)), gl(t))) {
            ((i = t.stateNode), (n = t.type));
            var s = t.memoizedProps;
            switch (((i[$t] = t), (i[si] = s), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                (Ae("cancel", i), Ae("close", i));
                break;
              case "iframe":
              case "object":
              case "embed":
                Ae("load", i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < li.length; l++) Ae(li[l], i);
                break;
              case "source":
                Ae("error", i);
                break;
              case "img":
              case "image":
              case "link":
                (Ae("error", i), Ae("load", i));
                break;
              case "details":
                Ae("toggle", i);
                break;
              case "input":
                (wo(i, s), Ae("invalid", i));
                break;
              case "select":
                ((i._wrapperState = { wasMultiple: !!s.multiple }),
                  Ae("invalid", i));
                break;
              case "textarea":
                (R(i, s), Ae("invalid", i));
            }
            (So(n, s), (l = null));
            for (var c in s)
              if (s.hasOwnProperty(c)) {
                var p = s[c];
                c === "children"
                  ? typeof p == "string"
                    ? i.textContent !== p &&
                      (s.suppressHydrationWarning !== !0 &&
                        sl(i.textContent, p, e),
                      (l = ["children", p]))
                    : typeof p == "number" &&
                      i.textContent !== "" + p &&
                      (s.suppressHydrationWarning !== !0 &&
                        sl(i.textContent, p, e),
                      (l = ["children", "" + p]))
                  : f.hasOwnProperty(c) &&
                    p != null &&
                    c === "onScroll" &&
                    Ae("scroll", i);
              }
            switch (n) {
              case "input":
                (Wn(i), g(i, s, !0));
                break;
              case "textarea":
                (Wn(i), ae(i));
                break;
              case "select":
              case "option":
                break;
              default:
                typeof s.onClick == "function" && (i.onclick = ul);
            }
            ((i = l), (t.updateQueue = i), i !== null && (t.flags |= 4));
          } else {
            ((c = l.nodeType === 9 ? l : l.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = Be(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = c.createElement("div")),
                    (e.innerHTML = "<script><\/script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof i.is == "string"
                    ? (e = c.createElement(n, { is: i.is }))
                    : ((e = c.createElement(n)),
                      n === "select" &&
                        ((c = e),
                        i.multiple
                          ? (c.multiple = !0)
                          : i.size && (c.size = i.size)))
                : (e = c.createElementNS(e, n)),
              (e[$t] = t),
              (e[si] = i),
              _f(e, t, !1, !1),
              (t.stateNode = e));
            e: {
              switch (((c = _o(n, i)), n)) {
                case "dialog":
                  (Ae("cancel", e), Ae("close", e), (l = i));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  (Ae("load", e), (l = i));
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < li.length; l++) Ae(li[l], e);
                  l = i;
                  break;
                case "source":
                  (Ae("error", e), (l = i));
                  break;
                case "img":
                case "image":
                case "link":
                  (Ae("error", e), Ae("load", e), (l = i));
                  break;
                case "details":
                  (Ae("toggle", e), (l = i));
                  break;
                case "input":
                  (wo(e, i), (l = sr(e, i)), Ae("invalid", e));
                  break;
                case "option":
                  l = i;
                  break;
                case "select":
                  ((e._wrapperState = { wasMultiple: !!i.multiple }),
                    (l = U({}, i, { value: void 0 })),
                    Ae("invalid", e));
                  break;
                case "textarea":
                  (R(e, i), (l = M(e, i)), Ae("invalid", e));
                  break;
                default:
                  l = i;
              }
              (So(n, l), (p = l));
              for (s in p)
                if (p.hasOwnProperty(s)) {
                  var h = p[s];
                  s === "style"
                    ? Vi(e, h)
                    : s === "dangerouslySetInnerHTML"
                      ? ((h = h ? h.__html : void 0), h != null && bi(e, h))
                      : s === "children"
                        ? typeof h == "string"
                          ? (n !== "textarea" || h !== "") && nn(e, h)
                          : typeof h == "number" && nn(e, "" + h)
                        : s !== "suppressContentEditableWarning" &&
                          s !== "suppressHydrationWarning" &&
                          s !== "autoFocus" &&
                          (f.hasOwnProperty(s)
                            ? h != null && s === "onScroll" && Ae("scroll", e)
                            : h != null && pe(e, s, h, c));
                }
              switch (n) {
                case "input":
                  (Wn(e), g(e, i, !1));
                  break;
                case "textarea":
                  (Wn(e), ae(e));
                  break;
                case "option":
                  i.value != null && e.setAttribute("value", "" + we(i.value));
                  break;
                case "select":
                  ((e.multiple = !!i.multiple),
                    (s = i.value),
                    s != null
                      ? b(e, !!i.multiple, s, !1)
                      : i.defaultValue != null &&
                        b(e, !!i.multiple, i.defaultValue, !0));
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
            }
            i && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return (lt(t), null);
      case 6:
        if (e && t.stateNode != null) Cf(e, t, e.memoizedProps, i);
        else {
          if (typeof i != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = Xn(pi.current)), Xn(Yt.current), gl(t))) {
            if (
              ((i = t.stateNode),
              (n = t.memoizedProps),
              (i[$t] = t),
              (s = i.nodeValue !== n) && ((e = _t), e !== null))
            )
              switch (e.tag) {
                case 3:
                  sl(i.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    sl(i.nodeValue, n, (e.mode & 1) !== 0);
              }
            s && (t.flags |= 4);
          } else
            ((i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
              (i[$t] = t),
              (t.stateNode = i));
        }
        return (lt(t), null);
      case 13:
        if (
          (Te(Re),
          (i = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ze && Et !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            (Nc(), _r(), (t.flags |= 98560), (s = !1));
          else if (((s = gl(t)), i !== null && i.dehydrated !== null)) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (
                ((s = t.memoizedState),
                (s = s !== null ? s.dehydrated : null),
                !s)
              )
                throw Error(o(317));
              s[$t] = t;
            } else
              (_r(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (lt(t), (s = !1));
          } else (Mt !== null && (Ja(Mt), (Mt = null)), (s = !0));
          if (!s) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((i = i !== null),
            i !== (e !== null && e.memoizedState !== null) &&
              i &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (Re.current & 1) !== 0
                  ? Xe === 0 && (Xe = 3)
                  : ns())),
            t.updateQueue !== null && (t.flags |= 4),
            lt(t),
            null);
      case 4:
        return (
          Nr(),
          Wa(e, t),
          e === null && oi(t.stateNode.containerInfo),
          lt(t),
          null
        );
      case 10:
        return (ga(t.type._context), lt(t), null);
      case 17:
        return (ht(t.type) && fl(), lt(t), null);
      case 19:
        if ((Te(Re), (s = t.memoizedState), s === null)) return (lt(t), null);
        if (((i = (t.flags & 128) !== 0), (c = s.rendering), c === null))
          if (i) vi(s, !1);
          else {
            if (Xe !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((c = Sl(e)), c !== null)) {
                  for (
                    t.flags |= 128,
                      vi(s, !1),
                      i = c.updateQueue,
                      i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      i = n,
                      n = t.child;
                    n !== null;

                  )
                    ((s = n),
                      (e = i),
                      (s.flags &= 14680066),
                      (c = s.alternate),
                      c === null
                        ? ((s.childLanes = 0),
                          (s.lanes = e),
                          (s.child = null),
                          (s.subtreeFlags = 0),
                          (s.memoizedProps = null),
                          (s.memoizedState = null),
                          (s.updateQueue = null),
                          (s.dependencies = null),
                          (s.stateNode = null))
                        : ((s.childLanes = c.childLanes),
                          (s.lanes = c.lanes),
                          (s.child = c.child),
                          (s.subtreeFlags = 0),
                          (s.deletions = null),
                          (s.memoizedProps = c.memoizedProps),
                          (s.memoizedState = c.memoizedState),
                          (s.updateQueue = c.updateQueue),
                          (s.type = c.type),
                          (e = c.dependencies),
                          (s.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling));
                  return (Oe(Re, (Re.current & 1) | 2), t.child);
                }
                e = e.sibling;
              }
            s.tail !== null &&
              He() > Fr &&
              ((t.flags |= 128), (i = !0), vi(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!i)
            if (((e = Sl(c)), e !== null)) {
              if (
                ((t.flags |= 128),
                (i = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                vi(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !c.alternate &&
                  !ze)
              )
                return (lt(t), null);
            } else
              2 * He() - s.renderingStartTime > Fr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (i = !0), vi(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((c.sibling = t.child), (t.child = c))
            : ((n = s.last),
              n !== null ? (n.sibling = c) : (t.child = c),
              (s.last = c));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = He()),
            (t.sibling = null),
            (n = Re.current),
            Oe(Re, i ? (n & 1) | 2 : n & 1),
            t)
          : (lt(t), null);
      case 22:
      case 23:
        return (
          ts(),
          (i = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
          i && (t.mode & 1) !== 0
            ? (Ct & 1073741824) !== 0 &&
              (lt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : lt(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function v0(e, t) {
    switch ((ca(t), t.tag)) {
      case 1:
        return (
          ht(t.type) && fl(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nr(),
          Te(mt),
          Te(rt),
          _a(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return (ka(t), null);
      case 13:
        if (
          (Te(Re), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          _r();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (Te(Re), null);
      case 4:
        return (Nr(), null);
      case 10:
        return (ga(t.type._context), null);
      case 22:
      case 23:
        return (ts(), null);
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fl = !1,
    ot = !1,
    w0 = typeof WeakSet == "function" ? WeakSet : Set,
    B = null;
  function Ar(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (i) {
          We(e, t, i);
        }
      else n.current = null;
  }
  function Ba(e, t, n) {
    try {
      n();
    } catch (i) {
      We(e, t, i);
    }
  }
  var Pf = !1;
  function x0(e, t) {
    if (((ta = qi), (e = rc()), Qo(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var l = i.anchorOffset,
              s = i.focusNode;
            i = i.focusOffset;
            try {
              (n.nodeType, s.nodeType);
            } catch {
              n = null;
              break e;
            }
            var c = 0,
              p = -1,
              h = -1,
              _ = 0,
              T = 0,
              I = e,
              O = null;
            t: for (;;) {
              for (
                var W;
                I !== n || (l !== 0 && I.nodeType !== 3) || (p = c + l),
                  I !== s || (i !== 0 && I.nodeType !== 3) || (h = c + i),
                  I.nodeType === 3 && (c += I.nodeValue.length),
                  (W = I.firstChild) !== null;

              )
                ((O = I), (I = W));
              for (;;) {
                if (I === e) break t;
                if (
                  (O === n && ++_ === l && (p = c),
                  O === s && ++T === i && (h = c),
                  (W = I.nextSibling) !== null)
                )
                  break;
                ((I = O), (O = I.parentNode));
              }
              I = W;
            }
            n = p === -1 || h === -1 ? null : { start: p, end: h };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      na = { focusedElem: e, selectionRange: n }, qi = !1, B = t;
      B !== null;

    )
      if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        ((e.return = t), (B = e));
      else
        for (; B !== null; ) {
          t = B;
          try {
            var H = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (H !== null) {
                    var Y = H.memoizedProps,
                      $e = H.memoizedState,
                      x = t.stateNode,
                      y = x.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? Y : Dt(t.type, Y),
                        $e,
                      );
                    x.__reactInternalSnapshotBeforeUpdate = y;
                  }
                  break;
                case 3:
                  var k = t.stateNode.containerInfo;
                  k.nodeType === 1
                    ? (k.textContent = "")
                    : k.nodeType === 9 &&
                      k.documentElement &&
                      k.removeChild(k.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (L) {
            We(t, t.return, L);
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (B = e));
            break;
          }
          B = t.return;
        }
    return ((H = Pf), (Pf = !1), H);
  }
  function wi(e, t, n) {
    var i = t.updateQueue;
    if (((i = i !== null ? i.lastEffect : null), i !== null)) {
      var l = (i = i.next);
      do {
        if ((l.tag & e) === e) {
          var s = l.destroy;
          ((l.destroy = void 0), s !== void 0 && Ba(t, n, s));
        }
        l = l.next;
      } while (l !== i);
    }
  }
  function jl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var i = n.create;
          n.destroy = i();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ha(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Nf(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), Nf(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[$t],
          delete t[si],
          delete t[oa],
          delete t[n0],
          delete t[r0])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  function Of(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Af(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Of(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function $a(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ul)));
    else if (i !== 4 && ((e = e.child), e !== null))
      for ($a(e, t, n), e = e.sibling; e !== null; )
        ($a(e, t, n), (e = e.sibling));
  }
  function Ya(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
    else if (i !== 4 && ((e = e.child), e !== null))
      for (Ya(e, t, n), e = e.sibling; e !== null; )
        (Ya(e, t, n), (e = e.sibling));
  }
  var tt = null,
    bt = !1;
  function An(e, t, n) {
    for (n = n.child; n !== null; ) (Tf(e, t, n), (n = n.sibling));
  }
  function Tf(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function")
      try {
        Ht.onCommitFiberUnmount($i, n);
      } catch {}
    switch (n.tag) {
      case 5:
        ot || Ar(n, t);
      case 6:
        var i = tt,
          l = bt;
        ((tt = null),
          An(e, t, n),
          (tt = i),
          (bt = l),
          tt !== null &&
            (bt
              ? ((e = tt),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : tt.removeChild(n.stateNode)));
        break;
      case 18:
        tt !== null &&
          (bt
            ? ((e = tt),
              (n = n.stateNode),
              e.nodeType === 8
                ? la(e.parentNode, n)
                : e.nodeType === 1 && la(e, n),
              qr(e))
            : la(tt, n.stateNode));
        break;
      case 4:
        ((i = tt),
          (l = bt),
          (tt = n.stateNode.containerInfo),
          (bt = !0),
          An(e, t, n),
          (tt = i),
          (bt = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !ot &&
          ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
        ) {
          l = i = i.next;
          do {
            var s = l,
              c = s.destroy;
            ((s = s.tag),
              c !== void 0 && ((s & 2) !== 0 || (s & 4) !== 0) && Ba(n, t, c),
              (l = l.next));
          } while (l !== i);
        }
        An(e, t, n);
        break;
      case 1:
        if (
          !ot &&
          (Ar(n, t),
          (i = n.stateNode),
          typeof i.componentWillUnmount == "function")
        )
          try {
            ((i.props = n.memoizedProps),
              (i.state = n.memoizedState),
              i.componentWillUnmount());
          } catch (p) {
            We(n, t, p);
          }
        An(e, t, n);
        break;
      case 21:
        An(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((ot = (i = ot) || n.memoizedState !== null), An(e, t, n), (ot = i))
          : An(e, t, n);
        break;
      default:
        An(e, t, n);
    }
  }
  function Ff(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      (n === null && (n = e.stateNode = new w0()),
        t.forEach(function (i) {
          var l = A0.bind(null, e, i);
          n.has(i) || (n.add(i), i.then(l, l));
        }));
    }
  }
  function Vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var l = n[i];
        try {
          var s = e,
            c = t,
            p = c;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                ((tt = p.stateNode), (bt = !1));
                break e;
              case 3:
                ((tt = p.stateNode.containerInfo), (bt = !0));
                break e;
              case 4:
                ((tt = p.stateNode.containerInfo), (bt = !0));
                break e;
            }
            p = p.return;
          }
          if (tt === null) throw Error(o(160));
          (Tf(s, c, l), (tt = null), (bt = !1));
          var h = l.alternate;
          (h !== null && (h.return = null), (l.return = null));
        } catch (_) {
          We(l, t, _);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) (jf(t, e), (t = t.sibling));
  }
  function jf(e, t) {
    var n = e.alternate,
      i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((Vt(t, e), Kt(e), i & 4)) {
          try {
            (wi(3, e, e.return), jl(3, e));
          } catch (Y) {
            We(e, e.return, Y);
          }
          try {
            wi(5, e, e.return);
          } catch (Y) {
            We(e, e.return, Y);
          }
        }
        break;
      case 1:
        (Vt(t, e), Kt(e), i & 512 && n !== null && Ar(n, n.return));
        break;
      case 5:
        if (
          (Vt(t, e),
          Kt(e),
          i & 512 && n !== null && Ar(n, n.return),
          e.flags & 32)
        ) {
          var l = e.stateNode;
          try {
            nn(l, "");
          } catch (Y) {
            We(e, e.return, Y);
          }
        }
        if (i & 4 && ((l = e.stateNode), l != null)) {
          var s = e.memoizedProps,
            c = n !== null ? n.memoizedProps : s,
            p = e.type,
            h = e.updateQueue;
          if (((e.updateQueue = null), h !== null))
            try {
              (p === "input" &&
                s.type === "radio" &&
                s.name != null &&
                xo(l, s),
                _o(p, c));
              var _ = _o(p, s);
              for (c = 0; c < h.length; c += 2) {
                var T = h[c],
                  I = h[c + 1];
                T === "style"
                  ? Vi(l, I)
                  : T === "dangerouslySetInnerHTML"
                    ? bi(l, I)
                    : T === "children"
                      ? nn(l, I)
                      : pe(l, T, I, _);
              }
              switch (p) {
                case "input":
                  Di(l, s);
                  break;
                case "textarea":
                  Z(l, s);
                  break;
                case "select":
                  var O = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!s.multiple;
                  var W = s.value;
                  W != null
                    ? b(l, !!s.multiple, W, !1)
                    : O !== !!s.multiple &&
                      (s.defaultValue != null
                        ? b(l, !!s.multiple, s.defaultValue, !0)
                        : b(l, !!s.multiple, s.multiple ? [] : "", !1));
              }
              l[si] = s;
            } catch (Y) {
              We(e, e.return, Y);
            }
        }
        break;
      case 6:
        if ((Vt(t, e), Kt(e), i & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((l = e.stateNode), (s = e.memoizedProps));
          try {
            l.nodeValue = s;
          } catch (Y) {
            We(e, e.return, Y);
          }
        }
        break;
      case 3:
        if (
          (Vt(t, e), Kt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            qr(t.containerInfo);
          } catch (Y) {
            We(e, e.return, Y);
          }
        break;
      case 4:
        (Vt(t, e), Kt(e));
        break;
      case 13:
        (Vt(t, e),
          Kt(e),
          (l = e.child),
          l.flags & 8192 &&
            ((s = l.memoizedState !== null),
            (l.stateNode.isHidden = s),
            !s ||
              (l.alternate !== null && l.alternate.memoizedState !== null) ||
              (Ga = He())),
          i & 4 && Ff(e));
        break;
      case 22:
        if (
          ((T = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((ot = (_ = ot) || T), Vt(t, e), (ot = _)) : Vt(t, e),
          Kt(e),
          i & 8192)
        ) {
          if (
            ((_ = e.memoizedState !== null),
            (e.stateNode.isHidden = _) && !T && (e.mode & 1) !== 0)
          )
            for (B = e, T = e.child; T !== null; ) {
              for (I = B = T; B !== null; ) {
                switch (((O = B), (W = O.child), O.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    wi(4, O, O.return);
                    break;
                  case 1:
                    Ar(O, O.return);
                    var H = O.stateNode;
                    if (typeof H.componentWillUnmount == "function") {
                      ((i = O), (n = O.return));
                      try {
                        ((t = i),
                          (H.props = t.memoizedProps),
                          (H.state = t.memoizedState),
                          H.componentWillUnmount());
                      } catch (Y) {
                        We(i, n, Y);
                      }
                    }
                    break;
                  case 5:
                    Ar(O, O.return);
                    break;
                  case 22:
                    if (O.memoizedState !== null) {
                      Lf(I);
                      continue;
                    }
                }
                W !== null ? ((W.return = O), (B = W)) : Lf(I);
              }
              T = T.sibling;
            }
          e: for (T = null, I = e; ; ) {
            if (I.tag === 5) {
              if (T === null) {
                T = I;
                try {
                  ((l = I.stateNode),
                    _
                      ? ((s = l.style),
                        typeof s.setProperty == "function"
                          ? s.setProperty("display", "none", "important")
                          : (s.display = "none"))
                      : ((p = I.stateNode),
                        (h = I.memoizedProps.style),
                        (c =
                          h != null && h.hasOwnProperty("display")
                            ? h.display
                            : null),
                        (p.style.display = Ur("display", c))));
                } catch (Y) {
                  We(e, e.return, Y);
                }
              }
            } else if (I.tag === 6) {
              if (T === null)
                try {
                  I.stateNode.nodeValue = _ ? "" : I.memoizedProps;
                } catch (Y) {
                  We(e, e.return, Y);
                }
            } else if (
              ((I.tag !== 22 && I.tag !== 23) ||
                I.memoizedState === null ||
                I === e) &&
              I.child !== null
            ) {
              ((I.child.return = I), (I = I.child));
              continue;
            }
            if (I === e) break e;
            for (; I.sibling === null; ) {
              if (I.return === null || I.return === e) break e;
              (T === I && (T = null), (I = I.return));
            }
            (T === I && (T = null),
              (I.sibling.return = I.return),
              (I = I.sibling));
          }
        }
        break;
      case 19:
        (Vt(t, e), Kt(e), i & 4 && Ff(e));
        break;
      case 21:
        break;
      default:
        (Vt(t, e), Kt(e));
    }
  }
  function Kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Of(n)) {
              var i = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (i.tag) {
          case 5:
            var l = i.stateNode;
            i.flags & 32 && (nn(l, ""), (i.flags &= -33));
            var s = Af(e);
            Ya(e, s, l);
            break;
          case 3:
          case 4:
            var c = i.stateNode.containerInfo,
              p = Af(e);
            $a(e, p, c);
            break;
          default:
            throw Error(o(161));
        }
      } catch (h) {
        We(e, e.return, h);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function k0(e, t, n) {
    ((B = e), If(e));
  }
  function If(e, t, n) {
    for (var i = (e.mode & 1) !== 0; B !== null; ) {
      var l = B,
        s = l.child;
      if (l.tag === 22 && i) {
        var c = l.memoizedState !== null || Fl;
        if (!c) {
          var p = l.alternate,
            h = (p !== null && p.memoizedState !== null) || ot;
          p = Fl;
          var _ = ot;
          if (((Fl = c), (ot = h) && !_))
            for (B = l; B !== null; )
              ((c = B),
                (h = c.child),
                c.tag === 22 && c.memoizedState !== null
                  ? Rf(l)
                  : h !== null
                    ? ((h.return = c), (B = h))
                    : Rf(l));
          for (; s !== null; ) ((B = s), If(s), (s = s.sibling));
          ((B = l), (Fl = p), (ot = _));
        }
        zf(e);
      } else
        (l.subtreeFlags & 8772) !== 0 && s !== null
          ? ((s.return = l), (B = s))
          : zf(e);
    }
  }
  function zf(e) {
    for (; B !== null; ) {
      var t = B;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                ot || jl(5, t);
                break;
              case 1:
                var i = t.stateNode;
                if (t.flags & 4 && !ot)
                  if (n === null) i.componentDidMount();
                  else {
                    var l =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : Dt(t.type, n.memoizedProps);
                    i.componentDidUpdate(
                      l,
                      n.memoizedState,
                      i.__reactInternalSnapshotBeforeUpdate,
                    );
                  }
                var s = t.updateQueue;
                s !== null && zc(t, s, i);
                break;
              case 3:
                var c = t.updateQueue;
                if (c !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  zc(t, c, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var h = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      h.autoFocus && n.focus();
                      break;
                    case "img":
                      h.src && (n.src = h.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var _ = t.alternate;
                  if (_ !== null) {
                    var T = _.memoizedState;
                    if (T !== null) {
                      var I = T.dehydrated;
                      I !== null && qr(I);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          ot || (t.flags & 512 && Ha(t));
        } catch (O) {
          We(t, t.return, O);
        }
      }
      if (t === e) {
        B = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        ((n.return = t.return), (B = n));
        break;
      }
      B = t.return;
    }
  }
  function Lf(e) {
    for (; B !== null; ) {
      var t = B;
      if (t === e) {
        B = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        ((n.return = t.return), (B = n));
        break;
      }
      B = t.return;
    }
  }
  function Rf(e) {
    for (; B !== null; ) {
      var t = B;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              jl(4, t);
            } catch (h) {
              We(t, n, h);
            }
            break;
          case 1:
            var i = t.stateNode;
            if (typeof i.componentDidMount == "function") {
              var l = t.return;
              try {
                i.componentDidMount();
              } catch (h) {
                We(t, l, h);
              }
            }
            var s = t.return;
            try {
              Ha(t);
            } catch (h) {
              We(t, s, h);
            }
            break;
          case 5:
            var c = t.return;
            try {
              Ha(t);
            } catch (h) {
              We(t, c, h);
            }
        }
      } catch (h) {
        We(t, t.return, h);
      }
      if (t === e) {
        B = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        ((p.return = t.return), (B = p));
        break;
      }
      B = t.return;
    }
  }
  var S0 = Math.ceil,
    Il = he.ReactCurrentDispatcher,
    Qa = he.ReactCurrentOwner,
    jt = he.ReactCurrentBatchConfig,
    xe = 0,
    Je = null,
    Qe = null,
    nt = 0,
    Ct = 0,
    Tr = En(0),
    Xe = 0,
    xi = null,
    Zn = 0,
    zl = 0,
    Ka = 0,
    ki = null,
    yt = null,
    Ga = 0,
    Fr = 1 / 0,
    dn = null,
    Ll = !1,
    Xa = null,
    Tn = null,
    Rl = !1,
    Fn = null,
    Ml = 0,
    Si = 0,
    qa = null,
    Dl = -1,
    bl = 0;
  function ft() {
    return (xe & 6) !== 0 ? He() : Dl !== -1 ? Dl : (Dl = He());
  }
  function jn(e) {
    return (e.mode & 1) === 0
      ? 1
      : (xe & 2) !== 0 && nt !== 0
        ? nt & -nt
        : l0.transition !== null
          ? (bl === 0 && (bl = Ou()), bl)
          : ((e = Ee),
            e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Mu(e.type))),
            e);
  }
  function Ut(e, t, n, i) {
    if (50 < Si) throw ((Si = 0), (qa = null), Error(o(185)));
    (Yr(e, n, i),
      ((xe & 2) === 0 || e !== Je) &&
        (e === Je && ((xe & 2) === 0 && (zl |= n), Xe === 4 && In(e, nt)),
        vt(e, i),
        n === 1 &&
          xe === 0 &&
          (t.mode & 1) === 0 &&
          ((Fr = He() + 500), pl && Pn())));
  }
  function vt(e, t) {
    var n = e.callbackNode;
    lp(e, t);
    var i = Ki(e, e === Je ? nt : 0);
    if (i === 0)
      (n !== null && Cu(n), (e.callbackNode = null), (e.callbackPriority = 0));
    else if (((t = i & -i), e.callbackPriority !== t)) {
      if ((n != null && Cu(n), t === 1))
        (e.tag === 0 ? i0(Df.bind(null, e)) : Sc(Df.bind(null, e)),
          e0(function () {
            (xe & 6) === 0 && Pn();
          }),
          (n = null));
      else {
        switch (Au(i)) {
          case 1:
            n = To;
            break;
          case 4:
            n = Pu;
            break;
          case 16:
            n = Hi;
            break;
          case 536870912:
            n = Nu;
            break;
          default:
            n = Hi;
        }
        n = Yf(n, Mf.bind(null, e));
      }
      ((e.callbackPriority = t), (e.callbackNode = n));
    }
  }
  function Mf(e, t) {
    if (((Dl = -1), (bl = 0), (xe & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (jr() && e.callbackNode !== n) return null;
    var i = Ki(e, e === Je ? nt : 0);
    if (i === 0) return null;
    if ((i & 30) !== 0 || (i & e.expiredLanes) !== 0 || t) t = Vl(e, i);
    else {
      t = i;
      var l = xe;
      xe |= 2;
      var s = Vf();
      (Je !== e || nt !== t) && ((dn = null), (Fr = He() + 500), er(e, t));
      do
        try {
          C0();
          break;
        } catch (p) {
          bf(e, p);
        }
      while (!0);
      (ha(),
        (Il.current = s),
        (xe = l),
        Qe !== null ? (t = 0) : ((Je = null), (nt = 0), (t = Xe)));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((l = Fo(e)), l !== 0 && ((i = l), (t = Za(e, l)))),
        t === 1)
      )
        throw ((n = xi), er(e, 0), In(e, i), vt(e, He()), n);
      if (t === 6) In(e, i);
      else {
        if (
          ((l = e.current.alternate),
          (i & 30) === 0 &&
            !_0(l) &&
            ((t = Vl(e, i)),
            t === 2 && ((s = Fo(e)), s !== 0 && ((i = s), (t = Za(e, s)))),
            t === 1))
        )
          throw ((n = xi), er(e, 0), In(e, i), vt(e, He()), n);
        switch (((e.finishedWork = l), (e.finishedLanes = i), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            tr(e, yt, dn);
            break;
          case 3:
            if (
              (In(e, i),
              (i & 130023424) === i && ((t = Ga + 500 - He()), 10 < t))
            ) {
              if (Ki(e, 0) !== 0) break;
              if (((l = e.suspendedLanes), (l & i) !== i)) {
                (ft(), (e.pingedLanes |= e.suspendedLanes & l));
                break;
              }
              e.timeoutHandle = ia(tr.bind(null, e, yt, dn), t);
              break;
            }
            tr(e, yt, dn);
            break;
          case 4:
            if ((In(e, i), (i & 4194240) === i)) break;
            for (t = e.eventTimes, l = -1; 0 < i; ) {
              var c = 31 - Lt(i);
              ((s = 1 << c), (c = t[c]), c > l && (l = c), (i &= ~s));
            }
            if (
              ((i = l),
              (i = He() - i),
              (i =
                (120 > i
                  ? 120
                  : 480 > i
                    ? 480
                    : 1080 > i
                      ? 1080
                      : 1920 > i
                        ? 1920
                        : 3e3 > i
                          ? 3e3
                          : 4320 > i
                            ? 4320
                            : 1960 * S0(i / 1960)) - i),
              10 < i)
            ) {
              e.timeoutHandle = ia(tr.bind(null, e, yt, dn), i);
              break;
            }
            tr(e, yt, dn);
            break;
          case 5:
            tr(e, yt, dn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return (vt(e, He()), e.callbackNode === n ? Mf.bind(null, e) : null);
  }
  function Za(e, t) {
    var n = ki;
    return (
      e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
      (e = Vl(e, t)),
      e !== 2 && ((t = yt), (yt = n), t !== null && Ja(t)),
      e
    );
  }
  function Ja(e) {
    yt === null ? (yt = e) : yt.push.apply(yt, e);
  }
  function _0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var i = 0; i < n.length; i++) {
            var l = n[i],
              s = l.getSnapshot;
            l = l.value;
            try {
              if (!Rt(s(), l)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        ((n.return = t), (t = n));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function In(e, t) {
    for (
      t &= ~Ka,
        t &= ~zl,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Lt(t),
        i = 1 << n;
      ((e[n] = -1), (t &= ~i));
    }
  }
  function Df(e) {
    if ((xe & 6) !== 0) throw Error(o(327));
    jr();
    var t = Ki(e, 0);
    if ((t & 1) === 0) return (vt(e, He()), null);
    var n = Vl(e, t);
    if (e.tag !== 0 && n === 2) {
      var i = Fo(e);
      i !== 0 && ((t = i), (n = Za(e, i)));
    }
    if (n === 1) throw ((n = xi), er(e, 0), In(e, t), vt(e, He()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      tr(e, yt, dn),
      vt(e, He()),
      null
    );
  }
  function es(e, t) {
    var n = xe;
    xe |= 1;
    try {
      return e(t);
    } finally {
      ((xe = n), xe === 0 && ((Fr = He() + 500), pl && Pn()));
    }
  }
  function Jn(e) {
    Fn !== null && Fn.tag === 0 && (xe & 6) === 0 && jr();
    var t = xe;
    xe |= 1;
    var n = jt.transition,
      i = Ee;
    try {
      if (((jt.transition = null), (Ee = 1), e)) return e();
    } finally {
      ((Ee = i), (jt.transition = n), (xe = t), (xe & 6) === 0 && Pn());
    }
  }
  function ts() {
    ((Ct = Tr.current), Te(Tr));
  }
  function er(e, t) {
    ((e.finishedWork = null), (e.finishedLanes = 0));
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Jp(n)), Qe !== null))
      for (n = Qe.return; n !== null; ) {
        var i = n;
        switch ((ca(i), i.tag)) {
          case 1:
            ((i = i.type.childContextTypes), i != null && fl());
            break;
          case 3:
            (Nr(), Te(mt), Te(rt), _a());
            break;
          case 5:
            ka(i);
            break;
          case 4:
            Nr();
            break;
          case 13:
            Te(Re);
            break;
          case 19:
            Te(Re);
            break;
          case 10:
            ga(i.type._context);
            break;
          case 22:
          case 23:
            ts();
        }
        n = n.return;
      }
    if (
      ((Je = e),
      (Qe = e = zn(e.current, null)),
      (nt = Ct = t),
      (Xe = 0),
      (xi = null),
      (Ka = zl = Zn = 0),
      (yt = ki = null),
      Gn !== null)
    ) {
      for (t = 0; t < Gn.length; t++)
        if (((n = Gn[t]), (i = n.interleaved), i !== null)) {
          n.interleaved = null;
          var l = i.next,
            s = n.pending;
          if (s !== null) {
            var c = s.next;
            ((s.next = l), (i.next = c));
          }
          n.pending = i;
        }
      Gn = null;
    }
    return e;
  }
  function bf(e, t) {
    do {
      var n = Qe;
      try {
        if ((ha(), (_l.current = Nl), El)) {
          for (var i = Me.memoizedState; i !== null; ) {
            var l = i.queue;
            (l !== null && (l.pending = null), (i = i.next));
          }
          El = !1;
        }
        if (
          ((qn = 0),
          (Ze = Ge = Me = null),
          (mi = !1),
          (hi = 0),
          (Qa.current = null),
          n === null || n.return === null)
        ) {
          ((Xe = 1), (xi = t), (Qe = null));
          break;
        }
        e: {
          var s = e,
            c = n.return,
            p = n,
            h = t;
          if (
            ((t = nt),
            (p.flags |= 32768),
            h !== null && typeof h == "object" && typeof h.then == "function")
          ) {
            var _ = h,
              T = p,
              I = T.tag;
            if ((T.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var O = T.alternate;
              O
                ? ((T.updateQueue = O.updateQueue),
                  (T.memoizedState = O.memoizedState),
                  (T.lanes = O.lanes))
                : ((T.updateQueue = null), (T.memoizedState = null));
            }
            var W = cf(c);
            if (W !== null) {
              ((W.flags &= -257),
                ff(W, c, p, s, t),
                W.mode & 1 && uf(s, _, t),
                (t = W),
                (h = _));
              var H = t.updateQueue;
              if (H === null) {
                var Y = new Set();
                (Y.add(h), (t.updateQueue = Y));
              } else H.add(h);
              break e;
            } else {
              if ((t & 1) === 0) {
                (uf(s, _, t), ns());
                break e;
              }
              h = Error(o(426));
            }
          } else if (ze && p.mode & 1) {
            var $e = cf(c);
            if ($e !== null) {
              (($e.flags & 65536) === 0 && ($e.flags |= 256),
                ff($e, c, p, s, t),
                pa(Or(h, p)));
              break e;
            }
          }
          ((s = h = Or(h, p)),
            Xe !== 4 && (Xe = 2),
            ki === null ? (ki = [s]) : ki.push(s),
            (s = c));
          do {
            switch (s.tag) {
              case 3:
                ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                var x = af(s, h, t);
                Ic(s, x);
                break e;
              case 1:
                p = h;
                var y = s.type,
                  k = s.stateNode;
                if (
                  (s.flags & 128) === 0 &&
                  (typeof y.getDerivedStateFromError == "function" ||
                    (k !== null &&
                      typeof k.componentDidCatch == "function" &&
                      (Tn === null || !Tn.has(k))))
                ) {
                  ((s.flags |= 65536), (t &= -t), (s.lanes |= t));
                  var L = sf(s, p, t);
                  Ic(s, L);
                  break e;
                }
            }
            s = s.return;
          } while (s !== null);
        }
        Wf(n);
      } catch (K) {
        ((t = K), Qe === n && n !== null && (Qe = n = n.return));
        continue;
      }
      break;
    } while (!0);
  }
  function Vf() {
    var e = Il.current;
    return ((Il.current = Nl), e === null ? Nl : e);
  }
  function ns() {
    ((Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
      Je === null ||
        ((Zn & 268435455) === 0 && (zl & 268435455) === 0) ||
        In(Je, nt));
  }
  function Vl(e, t) {
    var n = xe;
    xe |= 2;
    var i = Vf();
    (Je !== e || nt !== t) && ((dn = null), er(e, t));
    do
      try {
        E0();
        break;
      } catch (l) {
        bf(e, l);
      }
    while (!0);
    if ((ha(), (xe = n), (Il.current = i), Qe !== null)) throw Error(o(261));
    return ((Je = null), (nt = 0), Xe);
  }
  function E0() {
    for (; Qe !== null; ) Uf(Qe);
  }
  function C0() {
    for (; Qe !== null && !X1(); ) Uf(Qe);
  }
  function Uf(e) {
    var t = $f(e.alternate, e, Ct);
    ((e.memoizedProps = e.pendingProps),
      t === null ? Wf(e) : (Qe = t),
      (Qa.current = null));
  }
  function Wf(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = y0(n, t, Ct)), n !== null)) {
          Qe = n;
          return;
        }
      } else {
        if (((n = v0(n, t)), n !== null)) {
          ((n.flags &= 32767), (Qe = n));
          return;
        }
        if (e !== null)
          ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
        else {
          ((Xe = 6), (Qe = null));
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    Xe === 0 && (Xe = 5);
  }
  function tr(e, t, n) {
    var i = Ee,
      l = jt.transition;
    try {
      ((jt.transition = null), (Ee = 1), P0(e, t, n, i));
    } finally {
      ((jt.transition = l), (Ee = i));
    }
    return null;
  }
  function P0(e, t, n, i) {
    do jr();
    while (Fn !== null);
    if ((xe & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    ((e.callbackNode = null), (e.callbackPriority = 0));
    var s = n.lanes | n.childLanes;
    if (
      (op(e, s),
      e === Je && ((Qe = Je = null), (nt = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Rl ||
        ((Rl = !0),
        Yf(Hi, function () {
          return (jr(), null);
        })),
      (s = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || s)
    ) {
      ((s = jt.transition), (jt.transition = null));
      var c = Ee;
      Ee = 1;
      var p = xe;
      ((xe |= 4),
        (Qa.current = null),
        x0(e, n),
        jf(n, e),
        Yp(na),
        (qi = !!ta),
        (na = ta = null),
        (e.current = n),
        k0(n),
        q1(),
        (xe = p),
        (Ee = c),
        (jt.transition = s));
    } else e.current = n;
    if (
      (Rl && ((Rl = !1), (Fn = e), (Ml = l)),
      (s = e.pendingLanes),
      s === 0 && (Tn = null),
      ep(n.stateNode),
      vt(e, He()),
      t !== null)
    )
      for (i = e.onRecoverableError, n = 0; n < t.length; n++)
        ((l = t[n]), i(l.value, { componentStack: l.stack, digest: l.digest }));
    if (Ll) throw ((Ll = !1), (e = Xa), (Xa = null), e);
    return (
      (Ml & 1) !== 0 && e.tag !== 0 && jr(),
      (s = e.pendingLanes),
      (s & 1) !== 0 ? (e === qa ? Si++ : ((Si = 0), (qa = e))) : (Si = 0),
      Pn(),
      null
    );
  }
  function jr() {
    if (Fn !== null) {
      var e = Au(Ml),
        t = jt.transition,
        n = Ee;
      try {
        if (((jt.transition = null), (Ee = 16 > e ? 16 : e), Fn === null))
          var i = !1;
        else {
          if (((e = Fn), (Fn = null), (Ml = 0), (xe & 6) !== 0))
            throw Error(o(331));
          var l = xe;
          for (xe |= 4, B = e.current; B !== null; ) {
            var s = B,
              c = s.child;
            if ((B.flags & 16) !== 0) {
              var p = s.deletions;
              if (p !== null) {
                for (var h = 0; h < p.length; h++) {
                  var _ = p[h];
                  for (B = _; B !== null; ) {
                    var T = B;
                    switch (T.tag) {
                      case 0:
                      case 11:
                      case 15:
                        wi(8, T, s);
                    }
                    var I = T.child;
                    if (I !== null) ((I.return = T), (B = I));
                    else
                      for (; B !== null; ) {
                        T = B;
                        var O = T.sibling,
                          W = T.return;
                        if ((Nf(T), T === _)) {
                          B = null;
                          break;
                        }
                        if (O !== null) {
                          ((O.return = W), (B = O));
                          break;
                        }
                        B = W;
                      }
                  }
                }
                var H = s.alternate;
                if (H !== null) {
                  var Y = H.child;
                  if (Y !== null) {
                    H.child = null;
                    do {
                      var $e = Y.sibling;
                      ((Y.sibling = null), (Y = $e));
                    } while (Y !== null);
                  }
                }
                B = s;
              }
            }
            if ((s.subtreeFlags & 2064) !== 0 && c !== null)
              ((c.return = s), (B = c));
            else
              e: for (; B !== null; ) {
                if (((s = B), (s.flags & 2048) !== 0))
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      wi(9, s, s.return);
                  }
                var x = s.sibling;
                if (x !== null) {
                  ((x.return = s.return), (B = x));
                  break e;
                }
                B = s.return;
              }
          }
          var y = e.current;
          for (B = y; B !== null; ) {
            c = B;
            var k = c.child;
            if ((c.subtreeFlags & 2064) !== 0 && k !== null)
              ((k.return = c), (B = k));
            else
              e: for (c = y; B !== null; ) {
                if (((p = B), (p.flags & 2048) !== 0))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        jl(9, p);
                    }
                  } catch (K) {
                    We(p, p.return, K);
                  }
                if (p === c) {
                  B = null;
                  break e;
                }
                var L = p.sibling;
                if (L !== null) {
                  ((L.return = p.return), (B = L));
                  break e;
                }
                B = p.return;
              }
          }
          if (
            ((xe = l),
            Pn(),
            Ht && typeof Ht.onPostCommitFiberRoot == "function")
          )
            try {
              Ht.onPostCommitFiberRoot($i, e);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        ((Ee = n), (jt.transition = t));
      }
    }
    return !1;
  }
  function Bf(e, t, n) {
    ((t = Or(n, t)),
      (t = af(e, t, 1)),
      (e = On(e, t, 1)),
      (t = ft()),
      e !== null && (Yr(e, 1, t), vt(e, t)));
  }
  function We(e, t, n) {
    if (e.tag === 3) Bf(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Bf(t, e, n);
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof i.componentDidCatch == "function" &&
              (Tn === null || !Tn.has(i)))
          ) {
            ((e = Or(n, e)),
              (e = sf(t, e, 1)),
              (t = On(t, e, 1)),
              (e = ft()),
              t !== null && (Yr(t, 1, e), vt(t, e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function N0(e, t, n) {
    var i = e.pingCache;
    (i !== null && i.delete(t),
      (t = ft()),
      (e.pingedLanes |= e.suspendedLanes & n),
      Je === e &&
        (nt & n) === n &&
        (Xe === 4 || (Xe === 3 && (nt & 130023424) === nt && 500 > He() - Ga)
          ? er(e, 0)
          : (Ka |= n)),
      vt(e, t));
  }
  function Hf(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Qi), (Qi <<= 1), (Qi & 130023424) === 0 && (Qi = 4194304)));
    var n = ft();
    ((e = un(e, t)), e !== null && (Yr(e, t, n), vt(e, n)));
  }
  function O0(e) {
    var t = e.memoizedState,
      n = 0;
    (t !== null && (n = t.retryLane), Hf(e, n));
  }
  function A0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode,
          l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    (i !== null && i.delete(t), Hf(e, n));
  }
  var $f;
  $f = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || mt.current) gt = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return ((gt = !1), g0(e, t, n));
        gt = (e.flags & 131072) !== 0;
      }
    else ((gt = !1), ze && (t.flags & 1048576) !== 0 && _c(t, hl, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var i = t.type;
        (Tl(e, t), (e = t.pendingProps));
        var l = xr(t, rt.current);
        (Pr(t, n), (l = Pa(null, t, i, e, l, n)));
        var s = Na();
        return (
          (t.flags |= 1),
          typeof l == "object" &&
          l !== null &&
          typeof l.render == "function" &&
          l.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              ht(i) ? ((s = !0), dl(t)) : (s = !1),
              (t.memoizedState =
                l.state !== null && l.state !== void 0 ? l.state : null),
              wa(t),
              (l.updater = Ol),
              (t.stateNode = l),
              (l._reactInternals = t),
              Ia(t, i, e, n),
              (t = Ma(null, t, i, !0, s, n)))
            : ((t.tag = 0), ze && s && ua(t), ct(null, t, l, n), (t = t.child)),
          t
        );
      case 16:
        i = t.elementType;
        e: {
          switch (
            (Tl(e, t),
            (e = t.pendingProps),
            (l = i._init),
            (i = l(i._payload)),
            (t.type = i),
            (l = t.tag = F0(i)),
            (e = Dt(i, e)),
            l)
          ) {
            case 0:
              t = Ra(null, t, i, e, n);
              break e;
            case 1:
              t = yf(null, t, i, e, n);
              break e;
            case 11:
              t = df(null, t, i, e, n);
              break e;
            case 14:
              t = pf(null, t, i, Dt(i.type, e), n);
              break e;
          }
          throw Error(o(306, i, ""));
        }
        return t;
      case 0:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Dt(i, l)),
          Ra(e, t, i, l, n)
        );
      case 1:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Dt(i, l)),
          yf(e, t, i, l, n)
        );
      case 3:
        e: {
          if ((vf(t), e === null)) throw Error(o(387));
          ((i = t.pendingProps),
            (s = t.memoizedState),
            (l = s.element),
            jc(e, t),
            kl(t, i, null, n));
          var c = t.memoizedState;
          if (((i = c.element), s.isDehydrated))
            if (
              ((s = {
                element: i,
                isDehydrated: !1,
                cache: c.cache,
                pendingSuspenseBoundaries: c.pendingSuspenseBoundaries,
                transitions: c.transitions,
              }),
              (t.updateQueue.baseState = s),
              (t.memoizedState = s),
              t.flags & 256)
            ) {
              ((l = Or(Error(o(423)), t)), (t = wf(e, t, i, n, l)));
              break e;
            } else if (i !== l) {
              ((l = Or(Error(o(424)), t)), (t = wf(e, t, i, n, l)));
              break e;
            } else
              for (
                Et = _n(t.stateNode.containerInfo.firstChild),
                  _t = t,
                  ze = !0,
                  Mt = null,
                  n = Tc(t, null, i, n),
                  t.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((_r(), i === l)) {
              t = fn(e, t, n);
              break e;
            }
            ct(e, t, i, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          Lc(t),
          e === null && da(t),
          (i = t.type),
          (l = t.pendingProps),
          (s = e !== null ? e.memoizedProps : null),
          (c = l.children),
          ra(i, l) ? (c = null) : s !== null && ra(i, s) && (t.flags |= 32),
          gf(e, t),
          ct(e, t, c, n),
          t.child
        );
      case 6:
        return (e === null && da(t), null);
      case 13:
        return xf(e, t, n);
      case 4:
        return (
          xa(t, t.stateNode.containerInfo),
          (i = t.pendingProps),
          e === null ? (t.child = Er(t, null, i, n)) : ct(e, t, i, n),
          t.child
        );
      case 11:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Dt(i, l)),
          df(e, t, i, l, n)
        );
      case 7:
        return (ct(e, t, t.pendingProps, n), t.child);
      case 8:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 12:
        return (ct(e, t, t.pendingProps.children, n), t.child);
      case 10:
        e: {
          if (
            ((i = t.type._context),
            (l = t.pendingProps),
            (s = t.memoizedProps),
            (c = l.value),
            Oe(vl, i._currentValue),
            (i._currentValue = c),
            s !== null)
          )
            if (Rt(s.value, c)) {
              if (s.children === l.children && !mt.current) {
                t = fn(e, t, n);
                break e;
              }
            } else
              for (s = t.child, s !== null && (s.return = t); s !== null; ) {
                var p = s.dependencies;
                if (p !== null) {
                  c = s.child;
                  for (var h = p.firstContext; h !== null; ) {
                    if (h.context === i) {
                      if (s.tag === 1) {
                        ((h = cn(-1, n & -n)), (h.tag = 2));
                        var _ = s.updateQueue;
                        if (_ !== null) {
                          _ = _.shared;
                          var T = _.pending;
                          (T === null
                            ? (h.next = h)
                            : ((h.next = T.next), (T.next = h)),
                            (_.pending = h));
                        }
                      }
                      ((s.lanes |= n),
                        (h = s.alternate),
                        h !== null && (h.lanes |= n),
                        ya(s.return, n, t),
                        (p.lanes |= n));
                      break;
                    }
                    h = h.next;
                  }
                } else if (s.tag === 10) c = s.type === t.type ? null : s.child;
                else if (s.tag === 18) {
                  if (((c = s.return), c === null)) throw Error(o(341));
                  ((c.lanes |= n),
                    (p = c.alternate),
                    p !== null && (p.lanes |= n),
                    ya(c, n, t),
                    (c = s.sibling));
                } else c = s.child;
                if (c !== null) c.return = s;
                else
                  for (c = s; c !== null; ) {
                    if (c === t) {
                      c = null;
                      break;
                    }
                    if (((s = c.sibling), s !== null)) {
                      ((s.return = c.return), (c = s));
                      break;
                    }
                    c = c.return;
                  }
                s = c;
              }
          (ct(e, t, l.children, n), (t = t.child));
        }
        return t;
      case 9:
        return (
          (l = t.type),
          (i = t.pendingProps.children),
          Pr(t, n),
          (l = Tt(l)),
          (i = i(l)),
          (t.flags |= 1),
          ct(e, t, i, n),
          t.child
        );
      case 14:
        return (
          (i = t.type),
          (l = Dt(i, t.pendingProps)),
          (l = Dt(i.type, l)),
          pf(e, t, i, l, n)
        );
      case 15:
        return mf(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (i = t.type),
          (l = t.pendingProps),
          (l = t.elementType === i ? l : Dt(i, l)),
          Tl(e, t),
          (t.tag = 1),
          ht(i) ? ((e = !0), dl(t)) : (e = !1),
          Pr(t, n),
          lf(t, i, l),
          Ia(t, i, l, n),
          Ma(null, t, i, !0, e, n)
        );
      case 19:
        return Sf(e, t, n);
      case 22:
        return hf(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Yf(e, t) {
    return Eu(e, t);
  }
  function T0(e, t, n, i) {
    ((this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = i),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function It(e, t, n, i) {
    return new T0(e, t, n, i);
  }
  function rs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function F0(e) {
    if (typeof e == "function") return rs(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === ne)) return 11;
      if (e === Ce) return 14;
    }
    return 2;
  }
  function zn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = It(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ul(e, t, n, i, l, s) {
    var c = 2;
    if (((i = e), typeof e == "function")) rs(e) && (c = 1);
    else if (typeof e == "string") c = 5;
    else
      e: switch (e) {
        case Le:
          return nr(n.children, l, s, t);
        case be:
          ((c = 8), (l |= 8));
          break;
        case st:
          return (
            (e = It(12, n, t, l | 2)),
            (e.elementType = st),
            (e.lanes = s),
            e
          );
        case ie:
          return (
            (e = It(13, n, t, l)),
            (e.elementType = ie),
            (e.lanes = s),
            e
          );
        case Se:
          return (
            (e = It(19, n, t, l)),
            (e.elementType = Se),
            (e.lanes = s),
            e
          );
        case ye:
          return Wl(n, l, s, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case Ve:
                c = 10;
                break e;
              case Nt:
                c = 9;
                break e;
              case ne:
                c = 11;
                break e;
              case Ce:
                c = 14;
                break e;
              case Ne:
                ((c = 16), (i = null));
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = It(c, n, t, l)),
      (t.elementType = e),
      (t.type = i),
      (t.lanes = s),
      t
    );
  }
  function nr(e, t, n, i) {
    return ((e = It(7, e, i, t)), (e.lanes = n), e);
  }
  function Wl(e, t, n, i) {
    return (
      (e = It(22, e, i, t)),
      (e.elementType = ye),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function is(e, t, n) {
    return ((e = It(6, e, null, t)), (e.lanes = n), e);
  }
  function ls(e, t, n) {
    return (
      (t = It(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function j0(e, t, n, i, l) {
    ((this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = jo(0)),
      (this.expirationTimes = jo(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jo(0)),
      (this.identifierPrefix = i),
      (this.onRecoverableError = l),
      (this.mutableSourceEagerHydrationData = null));
  }
  function os(e, t, n, i, l, s, c, p, h) {
    return (
      (e = new j0(e, t, n, p, h)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = It(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
        element: i,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      wa(s),
      e
    );
  }
  function I0(e, t, n) {
    var i =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ie,
      key: i == null ? null : "" + i,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Qf(e) {
    if (!e) return Cn;
    e = e._reactInternals;
    e: {
      if (Hn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ht(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (ht(n)) return xc(e, n, t);
    }
    return t;
  }
  function Kf(e, t, n, i, l, s, c, p, h) {
    return (
      (e = os(n, i, !0, e, l, s, c, p, h)),
      (e.context = Qf(null)),
      (n = e.current),
      (i = ft()),
      (l = jn(n)),
      (s = cn(i, l)),
      (s.callback = t ?? null),
      On(n, s, l),
      (e.current.lanes = l),
      Yr(e, l, i),
      vt(e, i),
      e
    );
  }
  function Bl(e, t, n, i) {
    var l = t.current,
      s = ft(),
      c = jn(l);
    return (
      (n = Qf(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = cn(s, c)),
      (t.payload = { element: e }),
      (i = i === void 0 ? null : i),
      i !== null && (t.callback = i),
      (e = On(l, t, c)),
      e !== null && (Ut(e, l, c, s), xl(e, l, c)),
      c
    );
  }
  function Hl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Gf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function as(e, t) {
    (Gf(e, t), (e = e.alternate) && Gf(e, t));
  }
  function z0() {
    return null;
  }
  var Xf =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function ss(e) {
    this._internalRoot = e;
  }
  (($l.prototype.render = ss.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      Bl(e, t, null, null);
    }),
    ($l.prototype.unmount = ss.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (Jn(function () {
            Bl(null, e, null, null);
          }),
            (t[ln] = null));
        }
      }));
  function $l(e) {
    this._internalRoot = e;
  }
  $l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = ju();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xn.length && t !== 0 && t < xn[n].priority; n++);
      (xn.splice(n, 0, e), n === 0 && Lu(e));
    }
  };
  function us(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function Yl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function qf() {}
  function L0(e, t, n, i, l) {
    if (l) {
      if (typeof i == "function") {
        var s = i;
        i = function () {
          var _ = Hl(c);
          s.call(_);
        };
      }
      var c = Kf(t, i, e, 0, null, !1, !1, "", qf);
      return (
        (e._reactRootContainer = c),
        (e[ln] = c.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        Jn(),
        c
      );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof i == "function") {
      var p = i;
      i = function () {
        var _ = Hl(h);
        p.call(_);
      };
    }
    var h = os(e, 0, !1, null, null, !1, !1, "", qf);
    return (
      (e._reactRootContainer = h),
      (e[ln] = h.current),
      oi(e.nodeType === 8 ? e.parentNode : e),
      Jn(function () {
        Bl(t, h, n, i);
      }),
      h
    );
  }
  function Ql(e, t, n, i, l) {
    var s = n._reactRootContainer;
    if (s) {
      var c = s;
      if (typeof l == "function") {
        var p = l;
        l = function () {
          var h = Hl(c);
          p.call(h);
        };
      }
      Bl(t, c, e, l);
    } else c = L0(n, t, e, l, i);
    return Hl(c);
  }
  ((Tu = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = $r(t.pendingLanes);
          n !== 0 &&
            (Io(t, n | 1),
            vt(t, He()),
            (xe & 6) === 0 && ((Fr = He() + 500), Pn()));
        }
        break;
      case 13:
        (Jn(function () {
          var i = un(e, 1);
          if (i !== null) {
            var l = ft();
            Ut(i, e, 1, l);
          }
        }),
          as(e, 1));
    }
  }),
    (zo = function (e) {
      if (e.tag === 13) {
        var t = un(e, 134217728);
        if (t !== null) {
          var n = ft();
          Ut(t, e, 134217728, n);
        }
        as(e, 134217728);
      }
    }),
    (Fu = function (e) {
      if (e.tag === 13) {
        var t = jn(e),
          n = un(e, t);
        if (n !== null) {
          var i = ft();
          Ut(n, e, t, i);
        }
        as(e, t);
      }
    }),
    (ju = function () {
      return Ee;
    }),
    (Iu = function (e, t) {
      var n = Ee;
      try {
        return ((Ee = e), t());
      } finally {
        Ee = n;
      }
    }),
    (Po = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Di(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var l = cl(i);
                if (!l) throw Error(o(90));
                (Mi(i), Di(i, l));
              }
            }
          }
          break;
        case "textarea":
          Z(e, n);
          break;
        case "select":
          ((t = n.value), t != null && b(e, !!n.multiple, t, !1));
      }
    }),
    (yu = es),
    (vu = Jn));
  var R0 = { usingClientEntryPoint: !1, Events: [ui, vr, cl, hu, gu, es] },
    _i = {
      findFiberByHostInstance: $n,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    M0 = {
      bundleType: _i.bundleType,
      version: _i.version,
      rendererPackageName: _i.rendererPackageName,
      rendererConfig: _i.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: he.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return ((e = Su(e)), e === null ? null : e.stateNode);
      },
      findFiberByHostInstance: _i.findFiberByHostInstance || z0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Kl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Kl.isDisabled && Kl.supportsFiber)
      try {
        (($i = Kl.inject(M0)), (Ht = Kl));
      } catch {}
  }
  return (
    (wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R0),
    (wt.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!us(t)) throw Error(o(200));
      return I0(e, t, null, n);
    }),
    (wt.createRoot = function (e, t) {
      if (!us(e)) throw Error(o(299));
      var n = !1,
        i = "",
        l = Xf;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = os(e, 1, !1, null, null, n, !1, i, l)),
        (e[ln] = t.current),
        oi(e.nodeType === 8 ? e.parentNode : e),
        new ss(t)
      );
    }),
    (wt.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return ((e = Su(t)), (e = e === null ? null : e.stateNode), e);
    }),
    (wt.flushSync = function (e) {
      return Jn(e);
    }),
    (wt.hydrate = function (e, t, n) {
      if (!Yl(t)) throw Error(o(200));
      return Ql(null, e, t, !0, n);
    }),
    (wt.hydrateRoot = function (e, t, n) {
      if (!us(e)) throw Error(o(405));
      var i = (n != null && n.hydratedSources) || null,
        l = !1,
        s = "",
        c = Xf;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (l = !0),
          n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (c = n.onRecoverableError)),
        (t = Kf(t, null, e, 1, n ?? null, l, !1, s, c)),
        (e[ln] = t.current),
        oi(e),
        i)
      )
        for (e = 0; e < i.length; e++)
          ((n = i[e]),
            (l = n._getVersion),
            (l = l(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, l])
              : t.mutableSourceEagerHydrationData.push(n, l));
      return new $l(t);
    }),
    (wt.render = function (e, t, n) {
      if (!Yl(t)) throw Error(o(200));
      return Ql(null, e, t, !1, n);
    }),
    (wt.unmountComponentAtNode = function (e) {
      if (!Yl(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (Jn(function () {
            Ql(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[ln] = null));
            });
          }),
          !0)
        : !1;
    }),
    (wt.unstable_batchedUpdates = es),
    (wt.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
      if (!Yl(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ql(e, t, n, !1, i);
    }),
    (wt.version = "18.3.1-next-f1338f8080-20240426"),
    wt
  );
}
var ld;
function $0() {
  if (ld) return ds.exports;
  ld = 1;
  function r() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return (r(), (ds.exports = H0()), ds.exports);
}
var od;
function Y0() {
  if (od) return Gl;
  od = 1;
  var r = $0();
  return ((Gl.createRoot = r.createRoot), (Gl.hydrateRoot = r.hydrateRoot), Gl);
}
var Q0 = Y0();
const K0 = Xs(Q0),
  G0 = "_outerContainer_1ilk4_2",
  X0 = "_container_1ilk4_6",
  q0 = "_visuallyHidden_1ilk4_21",
  Z0 = "_darkModeToggle_1ilk4_34",
  Jl = {
    outerContainer: G0,
    container: X0,
    visuallyHidden: q0,
    darkModeToggle: Z0,
  },
  J0 = "_aboutContainer_1n8t6_9",
  em = "_imageWrapper_1n8t6_19",
  tm = "_pictureContainer_1n8t6_29",
  nm = "_stickerImg_1n8t6_35",
  rm = "_Aboutblurb_1n8t6_56",
  im = "_sectionTitle_1n8t6_68",
  lm = "_blurb_1n8t6_74",
  rr = {
    aboutContainer: J0,
    imageWrapper: em,
    pictureContainer: tm,
    stickerImg: nm,
    Aboutblurb: rm,
    sectionTitle: im,
    blurb: lm,
  },
  om = "/assets/aboutphoto-CMgBJ5xP.avif",
  am = "/assets/aboutphoto-_vvs2OKt.webp",
  sm = "/assets/aboutphoto-DCye14fY.jpeg";
function um() {
  return C.jsx(C.Fragment, {
    children: C.jsxs("section", {
      className: rr.aboutContainer,
      "aria-labelledby": "about-title",
      children: [
        C.jsx("div", {
          className: rr.imageWrapper,
          children: C.jsxs("picture", {
            className: rr.pictureContainer,
            children: [
              C.jsx("source", { srcSet: om, type: "image/avif" }),
              C.jsx("source", { srcSet: am, type: "image/webp" }),
              C.jsx("img", {
                src: sm,
                alt: "Paul -Full stack web developer",
                className: rr.stickerImg,
                width: "340",
                height: "425",
                loading: "lazy",
              }),
            ],
          }),
        }),
        C.jsxs("article", {
          className: rr.Aboutblurb,
          children: [
            C.jsx("h2", {
              id: "about-title",
              className: rr.sectionTitle,
              children: "About",
            }),
            C.jsx("p", {
              className: rr.blurb,
              children: `"I'm a full-stack developer specializing in building production-ready web applications with React, Vite, and rigid modern architectures, currently transitioning my ecosystem to TypeScript. Coming from a high-pressure background managing complex operational environments, I translate rigorous systems management and calm problem-solving into clean, optimized, and semantic code. Beyond technical execution, I bring a mature perspective that serves as a force multiplier for engineering teams,reducing management overhead through strict workflow discipline and effective communication.""`,
            }),
          ],
        }),
      ],
    }),
  });
}
const cm = "_desktopNav_o369k_2",
  fm = "_mobileWrapper_o369k_29",
  dm = "_burgerTrigger_o369k_43",
  pm = "_bar_o369k_58",
  mm = "_btnActive_o369k_79",
  hm = "_topDownMenu_o369k_95",
  gm = "_menuVisible_o369k_123",
  ym = "_curtainLinks_o369k_130",
  Gt = {
    desktopNav: cm,
    mobileWrapper: fm,
    burgerTrigger: dm,
    bar: pm,
    btnActive: mm,
    topDownMenu: hm,
    menuVisible: gm,
    curtainLinks: ym,
  };
function vm() {
  const [r, a] = Bt.useState(!1),
    o = () => a(!r);
  return C.jsxs(C.Fragment, {
    children: [
      C.jsxs("nav", {
        className: Gt.desktopNav,
        "aria-label": "Main Navigation",
        children: [
          C.jsx("a", { href: "/contact", children: "Contact" }),
          C.jsx("a", { href: "/info", children: "Info" }),
          C.jsx("a", { href: "/about", children: "About" }),
          C.jsx("a", { href: "/settings", children: "Settings" }),
        ],
      }),
      C.jsxs("div", {
        className: Gt.mobileWrapper,
        children: [
          C.jsxs("button", {
            className: `${Gt.burgerTrigger} ${r ? Gt.btnActive : ""}`,
            onClick: o,
            "aria-expanded": r,
            "aria-label": "Toggle Navigation",
            children: [
              C.jsx("div", { className: Gt.bar }),
              C.jsx("div", { className: Gt.bar }),
              C.jsx("div", { className: Gt.bar }),
            ],
          }),
          C.jsx("div", {
            className: `${Gt.topDownMenu} ${r ? Gt.menuVisible : ""}`,
            children: C.jsxs("nav", {
              className: Gt.curtainLinks,
              children: [
                C.jsx("a", {
                  href: "/contact",
                  onClick: o,
                  children: "Contact",
                }),
                C.jsx("a", { href: "/info", onClick: o, children: "Info" }),
                C.jsx("a", { href: "/about", onClick: o, children: "About" }),
                C.jsx("a", {
                  href: "/settings",
                  onClick: o,
                  children: "Settings",
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
const wm = "/assets/herophoto-OBdrkNlF.jpeg",
  xm =
    "data:image/svg+xml,%3csvg%20width='200'%20height='150'%20viewBox='0%200%20200%20130'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10%20100%20C%2030%20200,%20350%20130,%2080%20100%20C%20200%20300,%20130%2050,%20150%20100%20C%20170%20290,%20290%20200,%20210%20100%20Z'%20fill='%23ADD8E6'/%3e%3cpath%20d='M85%2010%20L%20200%2030%20L%2090%20100%20Z'%20fill='%23FFFFFF'%20stroke='%238B4513'%20stroke-width='2'%20/%3e%3cline%20x1='80'%20y1='20'%20x2='80'%20y2='100'%20stroke='%238B4513'%20stroke-width='8'/%3e%3ccircle%20cx='85'%20cy='20'%20r='12'%20fill='%238B4513'%20/%3e%3c/svg%3e",
  km = "_srOnly_1kxha_2",
  Sm = "_heroSection_1kxha_17",
  _m = "_watervideo_1kxha_33",
  Em = "_overlay_1kxha_45",
  Cm = "_name_1kxha_66",
  Pm = "_HeroBlurb_1kxha_83",
  Nm = "_HeroInfo_1kxha_118",
  Om = "_boat_1kxha_125",
  Am = "_scrollIndicator_1kxha_162",
  Tm = "_mouse_1kxha_176",
  Fm = "_wheel_1kxha_184",
  jm = "_arrow_1kxha_196",
  dt = {
    srOnly: km,
    heroSection: Sm,
    watervideo: _m,
    overlay: Em,
    name: Cm,
    HeroBlurb: Pm,
    "circle-img": "_circle-img_1kxha_95",
    HeroInfo: Nm,
    "boat-container": "_boat-container_1kxha_125",
    "boat-animation-wrapper": "_boat-animation-wrapper_1kxha_137",
    boat: Om,
    scrollIndicator: Am,
    mouse: Tm,
    wheel: Fm,
    arrow: jm,
  },
  Im = "/assets/videobg-BHdKQg8U.mp4",
  zm = "_videobgWrapper_1y15y_1",
  Lm = "_waterVideo_1y15y_14",
  Rm = "_videoElement_1y15y_22",
  hs = { videobgWrapper: zm, waterVideo: Lm, videoElement: Rm },
  Mm = () =>
    C.jsx("div", {
      className: hs.videobgWrapper,
      children: C.jsx("div", {
        className: hs.waterVideo,
        children: C.jsxs("video", {
          autoPlay: !0,
          loop: !0,
          muted: !0,
          playsInline: !0,
          className: hs.videoElement,
          children: [
            C.jsx("source", { src: Im, type: "video/mp4" }),
            "Your browser does not support the video tag.",
          ],
        }),
      }),
    });
function Dm() {
  const r = Bt.useRef(null),
    a = Bt.useRef(null);
  return (
    Bt.useEffect(() => {
      const o = r.current,
        u = a.current;
      if (!o || !u) return;
      let f = 0,
        d = 0,
        m = 0,
        v = 0;
      const P = 0.0095,
        F = (V) => {
          const ce = window.innerWidth / 2,
            fe = window.innerHeight / 2;
          ((f = (V.clientX - ce) * 0.75), (d = (V.clientY - fe) * 0.75));
        },
        A = () => {
          ((m += (f - m) * P),
            (v += (d - v) * P),
            r.current &&
              (r.current.style.transform = `translate3d(calc(-50% + ${m}px), calc(-50% + ${v}px), 0)`),
            requestAnimationFrame(A));
        },
        j = requestAnimationFrame(A);
      return (
        u.addEventListener("mousemove", F),
        () => {
          (cancelAnimationFrame(j), u.removeEventListener("mousemove", F));
        }
      );
    }, []),
    C.jsxs("section", {
      className: dt.heroSection,
      "aria-labelledby": "hero-heading",
      ref: a,
      children: [
        C.jsx(vm, {}),
        C.jsxs("div", {
          className: dt.scrollIndicator,
          "aria-hidden": "true",
          children: [
            C.jsx("div", {
              className: dt.mouse,
              children: C.jsx("div", { className: dt.wheel }),
            }),
            C.jsxs("div", {
              className: dt.arrow,
              children: [C.jsx("span", {}), C.jsx("span", {})],
            }),
          ],
        }),
        C.jsx("h1", {
          id: "hero-heading",
          className: dt.srOnly,
          children: "Paul - Full Stack Web Developer Portfolio",
        }),
        C.jsx(Mm, { className: dt.watervideo }),
        C.jsxs("div", {
          className: dt.overlay,
          children: [
            C.jsx("img", {
              src: wm,
              alt: "Paul's Avatar",
              className: dt["circle-img"],
            }),
            C.jsxs("h2", {
              className: dt.name,
              children: [
                C.jsx("span", { children: "Hi, " }),
                C.jsx("span", { children: "Im Paul" }),
              ],
            }),
            C.jsxs("article", {
              className: dt.HeroBlurb,
              children: [
                C.jsx("h3", {
                  children:
                    "Web Developer who lives by the Sea, I build websites that are as refreshing as the sea breeze Dorset",
                }),
                C.jsxs("p", {
                  className: dt.HeroInfo,
                  children: [
                    "I build Crafted Bespoke Webpages",
                    C.jsx("br", {}),
                    "using ",
                    C.jsx("strong", { children: "full stack development" }),
                  ],
                }),
              ],
            }),
            C.jsx("div", {
              className: dt["boat-container"],
              "aria-hidden": "true",
              children: C.jsx("div", {
                className: dt["boat-animation-wrapper"],
                ref: r,
                children: C.jsx("img", {
                  src: xm,
                  alt: "",
                  className: dt.boat,
                }),
              }),
            }),
          ],
        }),
      ],
    })
  );
}
var Zd = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  ad = De.createContext && De.createContext(Zd),
  bm = ["attr", "size", "title"];
function Vm(r, a) {
  if (r == null) return {};
  var o,
    u,
    f = Um(r, a);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    for (u = 0; u < d.length; u++)
      ((o = d[u]),
        a.indexOf(o) === -1 &&
          {}.propertyIsEnumerable.call(r, o) &&
          (f[o] = r[o]));
  }
  return f;
}
function Um(r, a) {
  if (r == null) return {};
  var o = {};
  for (var u in r)
    if ({}.hasOwnProperty.call(r, u)) {
      if (a.indexOf(u) !== -1) continue;
      o[u] = r[u];
    }
  return o;
}
function io() {
  return (
    (io = Object.assign
      ? Object.assign.bind()
      : function (r) {
          for (var a = 1; a < arguments.length; a++) {
            var o = arguments[a];
            for (var u in o) ({}).hasOwnProperty.call(o, u) && (r[u] = o[u]);
          }
          return r;
        }),
    io.apply(null, arguments)
  );
}
function sd(r, a) {
  var o = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    (a &&
      (u = u.filter(function (f) {
        return Object.getOwnPropertyDescriptor(r, f).enumerable;
      })),
      o.push.apply(o, u));
  }
  return o;
}
function lo(r) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? sd(Object(o), !0).forEach(function (u) {
          Wm(r, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : sd(Object(o)).forEach(function (u) {
            Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return r;
}
function Wm(r, a, o) {
  return (
    (a = Bm(a)) in r
      ? Object.defineProperty(r, a, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[a] = o),
    r
  );
}
function Bm(r) {
  var a = Hm(r, "string");
  return typeof a == "symbol" ? a : a + "";
}
function Hm(r, a) {
  if (typeof r != "object" || !r) return r;
  var o = r[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(r, a);
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(r);
}
function Jd(r) {
  return (
    r &&
    r.map((a, o) =>
      De.createElement(a.tag, lo({ key: o }, a.attr), Jd(a.child)),
    )
  );
}
function Un(r) {
  return (a) =>
    De.createElement($m, io({ attr: lo({}, r.attr) }, a), Jd(r.child));
}
function $m(r) {
  var a = (o) => {
    var { attr: u, size: f, title: d } = r,
      m = Vm(r, bm),
      v = f || o.size || "1em",
      P;
    return (
      o.className && (P = o.className),
      r.className && (P = (P ? P + " " : "") + r.className),
      De.createElement(
        "svg",
        io(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          o.attr,
          u,
          m,
          {
            className: P,
            style: lo(lo({ color: r.color || o.color }, o.style), r.style),
            height: v,
            width: v,
            xmlns: "http://www.w3.org/2000/svg",
          },
        ),
        d && De.createElement("title", null, d),
        r.children,
      )
    );
  };
  return ad !== void 0
    ? De.createElement(ad.Consumer, null, (o) => a(o))
    : a(Zd);
}
function Ym(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z",
        },
        child: [],
      },
    ],
  })(r);
}
function Qm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z",
        },
        child: [],
      },
    ],
  })(r);
}
function Km(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z",
        },
        child: [],
      },
    ],
  })(r);
}
function Gm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z",
        },
        child: [],
      },
    ],
  })(r);
}
function Xm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z",
        },
        child: [],
      },
    ],
  })(r);
}
function qm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z",
        },
        child: [],
      },
    ],
  })(r);
}
function Zm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187",
        },
        child: [],
      },
    ],
  })(r);
}
function Jm(r) {
  return Un({
    attr: { role: "img", viewBox: "0 0 24 24" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M19.705 2.147v19.706H0V2.147h19.705ZM.141 21.712h19.423V2.288H.141v19.424Zm2.561-10.444c.428 0 .76.113.996.338.236.225.367.482.393.768h-.446a.926.926 0 0 0-.303-.517c-.15-.128-.362-.191-.635-.191-.333 0-.602.117-.808.352-.204.233-.306.59-.306 1.074 0 .396.092.717.276.964.186.245.462.368.828.368.338 0 .595-.13.771-.389.094-.136.163-.316.21-.538h.446c-.04.356-.172.654-.396.895-.268.29-.63.434-1.086.434-.392 0-.722-.118-.989-.356-.35-.315-.527-.8-.527-1.456 0-.499.132-.907.396-1.226.285-.347.679-.52 1.18-.52Zm2.28 2.38c.01.192.056.348.135.467.152.224.42.336.803.336.172 0 .328-.024.47-.073.272-.095.409-.266.409-.511 0-.184-.058-.315-.173-.393-.116-.077-.299-.144-.547-.2l-.458-.104c-.299-.067-.51-.142-.635-.223-.214-.141-.322-.352-.322-.633 0-.303.105-.553.315-.747.21-.195.508-.292.893-.292.354 0 .655.085.902.257.248.17.372.443.372.82h-.43a.847.847 0 0 0-.147-.417c-.14-.177-.377-.265-.71-.265-.27 0-.465.057-.583.17a.533.533 0 0 0-.177.396c0 .166.07.287.207.364.09.049.295.11.614.184l.474.108c.229.052.405.123.53.214.214.158.321.387.321.687 0 .375-.136.642-.41.803a1.822 1.822 0 0 1-.947.242c-.42 0-.75-.108-.987-.322-.237-.213-.354-.502-.35-.867h.43Zm3.137 0c.011.192.056.348.136.467.152.224.42.336.803.336.171 0 .328-.024.469-.073.273-.095.41-.266.41-.511 0-.184-.058-.315-.173-.393-.117-.077-.3-.144-.548-.2l-.457-.104c-.3-.067-.511-.142-.635-.223-.215-.141-.322-.352-.322-.633 0-.303.105-.553.315-.747.21-.195.508-.292.892-.292.355 0 .655.085.902.257.249.17.373.443.373.82h-.43a.847.847 0 0 0-.148-.417c-.14-.177-.376-.265-.71-.265-.27 0-.464.057-.582.17a.533.533 0 0 0-.177.396c0 .166.069.287.207.364.09.049.295.11.614.184l.474.108c.228.052.404.123.529.214.214.158.322.387.322.687 0 .375-.137.642-.41.803a1.822 1.822 0 0 1-.947.242c-.42 0-.75-.108-.987-.322-.238-.213-.355-.502-.35-.867h.43Zm-6.197 3.6.97 2.857.965-2.857h.648v3.38h-.434v-1.995c0-.07.001-.183.004-.343.003-.16.005-.33.005-.513l-.964 2.85h-.453l-.97-2.85v.104c0 .083 0 .21.004.38.004.168.007.292.007.372v1.994h-.437v-3.379h.655Zm4.743-.091c.597 0 1.038.191 1.325.575.224.299.336.681.336 1.147 0 .505-.128.924-.384 1.259-.3.392-.73.589-1.286.589-.52 0-.929-.172-1.226-.516-.265-.33-.398-.75-.398-1.256 0-.457.113-.848.34-1.173.292-.417.723-.625 1.293-.625Zm.046 3.16c.403 0 .695-.144.874-.432.181-.29.272-.623.272-.999 0-.397-.105-.717-.313-.959-.207-.242-.49-.363-.851-.363-.35 0-.635.12-.856.36-.22.24-.331.594-.331 1.061 0 .375.094.69.283.948.19.256.497.384.922.384Zm3.455-.08c.155 0 .283-.017.382-.049a.84.84 0 0 0 .437-.345c.09-.136.156-.311.196-.524a2 2 0 0 0 .034-.355c0-.418-.083-.743-.25-.975-.166-.231-.434-.347-.803-.347H9.35v2.595h.816ZM8.89 17.247h1.368c.465 0 .825.165 1.081.495.229.297.343.679.343 1.143 0 .36-.067.683-.202.973-.238.512-.647.769-1.226.769H8.89v-3.38Zm3.88 0v2.089c0 .245.046.45.138.612.136.245.367.368.69.368.388 0 .652-.133.791-.398.076-.144.113-.338.113-.582v-2.089h.465v1.898c0 .415-.056.735-.168.96-.206.407-.594.61-1.164.61s-.958-.203-1.162-.61c-.112-.225-.168-.545-.168-.96v-1.898h.465Zm2.899 0Zm.458 0v2.977h1.711v.402h-2.17v-3.379h.459Zm2.208 0h2.463v.414h-2.017v1.026h1.865v.391h-1.865v1.146h2.052v.402h-2.498v-3.379Zm3.402 2.29c.01.19.056.347.135.466.152.224.42.336.803.336.172 0 .328-.025.47-.074.272-.095.409-.265.409-.51 0-.184-.058-.315-.173-.394-.116-.076-.299-.143-.547-.2l-.458-.103c-.299-.068-.51-.142-.635-.223-.215-.141-.322-.352-.322-.633 0-.304.105-.553.315-.748.21-.194.508-.292.893-.292.354 0 .655.086.901.258.249.17.373.443.373.819h-.43a.847.847 0 0 0-.147-.416c-.14-.177-.377-.265-.711-.265-.27 0-.464.057-.582.17a.533.533 0 0 0-.177.396c0 .165.069.287.207.363.09.05.295.11.614.184l.474.108c.228.053.405.124.529.214.215.158.322.388.322.688 0 .374-.136.642-.41.803a1.822 1.822 0 0 1-.947.241c-.42 0-.75-.107-.987-.322-.238-.213-.354-.502-.35-.867h.43Z",
        },
        child: [],
      },
    ],
  })(r);
}
const eh = "_skillsSection_hgm8o_1",
  th = "_title_hgm8o_7",
  nh = "_grid_hgm8o_14",
  rh = "_skillCard_hgm8o_21",
  ih = "_iconWrapper_hgm8o_84",
  lh = "_skillName_hgm8o_102",
  Ir = {
    skillsSection: eh,
    title: th,
    grid: nh,
    skillCard: rh,
    iconWrapper: ih,
    skillName: lh,
  },
  oh = () => {
    const r = [
      { id: 1, name: "React", icon: C.jsx(Km, {}), color: "#61DAFB" },
      { id: 2, name: "JavaScript", icon: C.jsx(Xm, {}), color: "#F7DF1E" },
      {
        id: 3,
        name: "TypeScript (Transitioning)",
        icon: C.jsx(Qm, {}),
        color: "#3178C6",
      },
      { id: 4, name: "Vite", icon: C.jsx(Ym, {}), color: "#646CFF" },
      { id: 5, name: "CSS Modules", icon: C.jsx(Jm, {}), color: "#000000" },
      { id: 6, name: "HTML5 / A11y", icon: C.jsx(qm, {}), color: "#E34F26" },
      { id: 7, name: "Git Workflow", icon: C.jsx(Zm, {}), color: "#F05032" },
      { id: 8, name: "Node.js", icon: C.jsx(Gm, {}), color: "#339933" },
    ];
    return C.jsxs("section", {
      className: Ir.skillsSection,
      children: [
        C.jsx("h2", { className: Ir.title, children: "Professional Stack" }),
        C.jsx("div", {
          className: Ir.grid,
          children: r.map((a) =>
            C.jsxs(
              "div",
              {
                className: `${Ir.skillCard} modularBox`,
                style: { "--hover-color": a.color },
                children: [
                  C.jsx("div", { className: Ir.iconWrapper, children: a.icon }),
                  C.jsx("span", { className: Ir.skillName, children: a.name }),
                ],
              },
              a.id,
            ),
          ),
        }),
      ],
    });
  },
  ah = "_projectCardContainer_xeblm_2",
  sh = "_projectCardContentWrapper_xeblm_9",
  uh = "_projectCardTitle_xeblm_27",
  ch = "_projectCardImg_xeblm_45",
  fh = "_projectCardInfo_xeblm_57",
  zr = {
    projectCardContainer: ah,
    projectCardContentWrapper: sh,
    projectCardTitle: uh,
    projectCardImg: ch,
    projectCardInfo: fh,
  };
var gs = { exports: {} },
  ys,
  ud;
function dh() {
  if (ud) return ys;
  ud = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ((ys = r), ys);
}
var vs, cd;
function ph() {
  if (cd) return vs;
  cd = 1;
  var r = dh();
  function a() {}
  function o() {}
  return (
    (o.resetWarningCache = a),
    (vs = function () {
      function u(m, v, P, F, A, j) {
        if (j !== r) {
          var V = new Error(
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
          );
          throw ((V.name = "Invariant Violation"), V);
        }
      }
      u.isRequired = u;
      function f() {
        return u;
      }
      var d = {
        array: u,
        bigint: u,
        bool: u,
        func: u,
        number: u,
        object: u,
        string: u,
        symbol: u,
        any: u,
        arrayOf: f,
        element: u,
        elementType: u,
        instanceOf: f,
        node: u,
        objectOf: f,
        oneOf: f,
        oneOfType: f,
        shape: f,
        exact: f,
        checkPropTypes: o,
        resetWarningCache: a,
      };
      return ((d.PropTypes = d), d);
    }),
    vs
  );
}
var fd;
function mh() {
  return (fd || ((fd = 1), (gs.exports = ph()())), gs.exports);
}
var hh = mh();
const se = Xs(hh),
  e1 = ({ title: r, img: a, url: o, description: u }) => {
    const f = Bt.useRef(null),
      [d, m] = Bt.useState(0);
    return (
      Bt.useEffect(() => {
        const v = () => {
          if (!f.current) return;
          const P = f.current.getBoundingClientRect(),
            F = window.innerHeight,
            A = P.top + P.height / 2,
            j = F / 2,
            V = (A - j) * 0.03;
          m(V);
        };
        return (
          window.addEventListener("scroll", v, { passive: !0 }),
          v(),
          () => window.removeEventListener("scroll", v)
        );
      }, []),
      C.jsx("div", {
        ref: f,
        className: zr.projectCardContainer,
        children: C.jsxs("div", {
          className: zr.projectCardContentWrapper,
          style: { "--parallax-offset": `${d}px` },
          children: [
            C.jsx("img", {
              className: zr.projectCardImg,
              src: a,
              alt: r,
              style: {
                transform: `scale(1.6) translateY(${-d}px)`,
                willChange: "transform",
              },
            }),
            C.jsx("h2", { className: zr.projectCardTitle, children: r }),
            C.jsx("p", { className: zr.projectCardInfo, children: u }),
            C.jsx("a", {
              className: zr.projectCardLink,
              href: o,
              target: "_blank",
              rel: "noopener noreferrer",
              children: "Visit Project",
            }),
          ],
        }),
      })
    );
  };
e1.propTypes = {
  title: se.string.isRequired,
  img: se.string.isRequired,
  url: se.string.isRequired,
  description: se.string.isRequired,
};
const gh = [
    {
      id: 1,
      title: "YelpCamp Deployment",
      url: "https://github.com/dkzanz1/YelpCamp.git",
      imgURL:
        "https://images.pexels.com/photos/1462011/pexels-photo-1462011.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Built through the industry-standard Colt Steele full-stack training pipeline. Executed line-by-line engineering of complex relational database schemas, RESTful routing systems, and secure user authorization protocols.",
    },
    {
      id: 2,
      title: "Telephone Commerce site",
      url: "https://github.com/dkzanz1/e-commerce.git",
      imgURL:
        "https://images.pexels.com/photos/372787/pexels-photo-372787.jpeg?auto=compress&cs=tinysrgb&w=400",
      description:
        "An intensive frontend UI study capturing complex interactive layouts. Modeled after structural video design patterns to master localized asset state control, multi-image carousel components, and fluid product gallery logic.",
    },
    {
      id: 3,
      title: "The Aldgate Fire Project",
      url: "https://github.com/dkzanz1/The-Aldgate-Project-main.git",
      imgURL:
        "https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "A bespoke, from-scratch business landing page built for a commercial enterprise. Features a semantic HTML document structure and strict responsive layouts engineered to host complex industrial service datasets.",
    },
    {
      id: 4,
      title: "Classic Anya Apparel",
      url: "https://github.com/dkzanz1/e-commerce.git",
      imgURL:
        "https://images.pexels.com/photos/157040/pexels-photo-157040.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "A custom e-commerce prototype designed for a startup mail-order fashion brand. Implements modular UI components, high-resolution product inventory grids, and fluid media-query overrides to handle seamless apparel browsing.",
    },
  ],
  yh = "_projectsGrid_1pnrq_3",
  vh = "_card_1pnrq_20",
  wh = "_heroCard_1pnrq_124",
  Xl = { projectsGrid: yh, card: vh, heroCard: wh },
  xh = () =>
    C.jsx("section", {
      className: Xl.projectsGrid,
      children: gh.map((r, a) => {
        const o = a === 0 ? `${Xl.card} ${Xl.heroCard}` : Xl.card;
        return C.jsx(
          "div",
          {
            className: o,
            children: C.jsx(
              e1,
              {
                id: r.id,
                title: r.title,
                img: r.imgURL,
                url: r.url,
                description: r.description,
              },
              r.id,
            ),
          },
          r.id,
        );
      }),
    }),
  kh = "_footer_zognf_5",
  Sh = "_footerContents_zognf_15",
  _h = "_dynocopy_zognf_21",
  ws = { footer: kh, footerContents: Sh, dynocopy: _h },
  xs = {
    "icon-container": "_icon-container_ru708_1",
    "social-container-title": "_social-container-title_ru708_11",
    "social-container-icon-link": "_social-container-icon-link_ru708_20",
  };
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ function Eh(r, a, o) {
  return (
    (a = Ph(a)) in r
      ? Object.defineProperty(r, a, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[a] = o),
    r
  );
}
function dd(r, a) {
  var o = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    (a &&
      (u = u.filter(function (f) {
        return Object.getOwnPropertyDescriptor(r, f).enumerable;
      })),
      o.push.apply(o, u));
  }
  return o;
}
function z(r) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? dd(Object(o), !0).forEach(function (u) {
          Eh(r, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : dd(Object(o)).forEach(function (u) {
            Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return r;
}
function Ch(r, a) {
  if (typeof r != "object" || !r) return r;
  var o = r[Symbol.toPrimitive];
  if (o !== void 0) {
    var u = o.call(r, a);
    if (typeof u != "object") return u;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (a === "string" ? String : Number)(r);
}
function Ph(r) {
  var a = Ch(r, "string");
  return typeof a == "symbol" ? a : a + "";
}
const pd = () => {};
let Zs = {},
  t1 = {},
  n1 = null,
  r1 = { mark: pd, measure: pd };
try {
  (typeof window < "u" && (Zs = window),
    typeof document < "u" && (t1 = document),
    typeof MutationObserver < "u" && (n1 = MutationObserver),
    typeof performance < "u" && (r1 = performance));
} catch {}
const { userAgent: md = "" } = Zs.navigator || {},
  Dn = Zs,
  je = t1,
  hd = n1,
  ql = r1;
Dn.document;
const gn =
    !!je.documentElement &&
    !!je.head &&
    typeof je.addEventListener == "function" &&
    typeof je.createElement == "function",
  i1 = ~md.indexOf("MSIE") || ~md.indexOf("Trident/");
var Nh = /fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,
  Oh =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,
  l1 = {
    classic: {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fab: "brands",
      "fa-brands": "brands",
    },
    duotone: {
      fa: "solid",
      fad: "solid",
      "fa-solid": "solid",
      "fa-duotone": "solid",
      fadr: "regular",
      "fa-regular": "regular",
      fadl: "light",
      "fa-light": "light",
      fadt: "thin",
      "fa-thin": "thin",
    },
    sharp: {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    },
    "sharp-duotone": {
      fa: "solid",
      fasds: "solid",
      "fa-solid": "solid",
      fasdr: "regular",
      "fa-regular": "regular",
      fasdl: "light",
      "fa-light": "light",
      fasdt: "thin",
      "fa-thin": "thin",
    },
  },
  Ah = { GROUP: "duotone-group", PRIMARY: "primary", SECONDARY: "secondary" },
  o1 = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  at = "classic",
  po = "duotone",
  Th = "sharp",
  Fh = "sharp-duotone",
  a1 = [at, po, Th, Fh],
  jh = {
    classic: { 900: "fas", 400: "far", normal: "far", 300: "fal", 100: "fat" },
    duotone: { 900: "fad", 400: "fadr", 300: "fadl", 100: "fadt" },
    sharp: { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" },
    "sharp-duotone": { 900: "fasds", 400: "fasdr", 300: "fasdl", 100: "fasdt" },
  },
  Ih = {
    "Font Awesome 6 Free": { 900: "fas", 400: "far" },
    "Font Awesome 6 Pro": {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    },
    "Font Awesome 6 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 6 Duotone": {
      900: "fad",
      400: "fadr",
      normal: "fadr",
      300: "fadl",
      100: "fadt",
    },
    "Font Awesome 6 Sharp": {
      900: "fass",
      400: "fasr",
      normal: "fasr",
      300: "fasl",
      100: "fast",
    },
    "Font Awesome 6 Sharp Duotone": {
      900: "fasds",
      400: "fasdr",
      normal: "fasdr",
      300: "fasdl",
      100: "fasdt",
    },
  },
  zh = new Map([
    [
      "classic",
      {
        defaultShortPrefixId: "fas",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin", "brands"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp",
      {
        defaultShortPrefixId: "fass",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "duotone",
      {
        defaultShortPrefixId: "fad",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
    [
      "sharp-duotone",
      {
        defaultShortPrefixId: "fasds",
        defaultStyleId: "solid",
        styleIds: ["solid", "regular", "light", "thin"],
        futureStyleIds: [],
        defaultFontWeight: 900,
      },
    ],
  ]),
  Lh = {
    classic: {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      brands: "fab",
    },
    duotone: { solid: "fad", regular: "fadr", light: "fadl", thin: "fadt" },
    sharp: { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" },
    "sharp-duotone": {
      solid: "fasds",
      regular: "fasdr",
      light: "fasdl",
      thin: "fasdt",
    },
  },
  Rh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  gd = {
    kit: { fak: "kit", "fa-kit": "kit" },
    "kit-duotone": { fakd: "kit-duotone", "fa-kit-duotone": "kit-duotone" },
  },
  Mh = ["kit"],
  Dh = { kit: { "fa-kit": "fak" } },
  bh = ["fak", "fakd"],
  Vh = { kit: { fak: "fa-kit" } },
  yd = { kit: { kit: "fak" }, "kit-duotone": { "kit-duotone": "fakd" } },
  Zl = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Uh = ["fa-classic", "fa-duotone", "fa-sharp", "fa-sharp-duotone"],
  Wh = ["fak", "fa-kit", "fakd", "fa-kit-duotone"],
  Bh = {
    "Font Awesome Kit": { 400: "fak", normal: "fak" },
    "Font Awesome Kit Duotone": { 400: "fakd", normal: "fakd" },
  },
  Hh = {
    classic: {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    },
    duotone: { "fa-regular": "fadr", "fa-light": "fadl", "fa-thin": "fadt" },
    sharp: {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    },
    "sharp-duotone": {
      "fa-solid": "fasds",
      "fa-regular": "fasdr",
      "fa-light": "fasdl",
      "fa-thin": "fasdt",
    },
  },
  $h = {
    classic: ["fas", "far", "fal", "fat", "fad"],
    duotone: ["fadr", "fadl", "fadt"],
    sharp: ["fass", "fasr", "fasl", "fast"],
    "sharp-duotone": ["fasds", "fasdr", "fasdl", "fasdt"],
  },
  Ts = {
    classic: {
      fab: "fa-brands",
      fad: "fa-duotone",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    },
    duotone: { fadr: "fa-regular", fadl: "fa-light", fadt: "fa-thin" },
    sharp: {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    },
    "sharp-duotone": {
      fasds: "fa-solid",
      fasdr: "fa-regular",
      fasdl: "fa-light",
      fasdt: "fa-thin",
    },
  },
  Yh = [
    "fa-solid",
    "fa-regular",
    "fa-light",
    "fa-thin",
    "fa-duotone",
    "fa-brands",
  ],
  Fs = [
    "fa",
    "fas",
    "far",
    "fal",
    "fat",
    "fad",
    "fadr",
    "fadl",
    "fadt",
    "fab",
    "fass",
    "fasr",
    "fasl",
    "fast",
    "fasds",
    "fasdr",
    "fasdl",
    "fasdt",
    ...Uh,
    ...Yh,
  ],
  Qh = ["solid", "regular", "light", "thin", "duotone", "brands"],
  s1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  Kh = s1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  Gh = [
    ...Object.keys($h),
    ...Qh,
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "beat",
    "border",
    "fade",
    "beat-fade",
    "bounce",
    "flip-both",
    "flip-horizontal",
    "flip-vertical",
    "flip",
    "fw",
    "inverse",
    "layers-counter",
    "layers-text",
    "layers",
    "li",
    "pull-left",
    "pull-right",
    "pulse",
    "rotate-180",
    "rotate-270",
    "rotate-90",
    "rotate-by",
    "shake",
    "spin-pulse",
    "spin-reverse",
    "spin",
    "stack-1x",
    "stack-2x",
    "stack",
    "ul",
    Zl.GROUP,
    Zl.SWAP_OPACITY,
    Zl.PRIMARY,
    Zl.SECONDARY,
  ]
    .concat(s1.map((r) => "".concat(r, "x")))
    .concat(Kh.map((r) => "w-".concat(r))),
  Xh = {
    "Font Awesome 5 Free": { 900: "fas", 400: "far" },
    "Font Awesome 5 Pro": { 900: "fas", 400: "far", normal: "far", 300: "fal" },
    "Font Awesome 5 Brands": { 400: "fab", normal: "fab" },
    "Font Awesome 5 Duotone": { 900: "fad" },
  };
const mn = "___FONT_AWESOME___",
  js = 16,
  u1 = "fa",
  c1 = "svg-inline--fa",
  or = "data-fa-i2svg",
  Is = "data-fa-pseudo-element",
  qh = "data-fa-pseudo-element-pending",
  Js = "data-prefix",
  eu = "data-icon",
  vd = "fontawesome-i2svg",
  Zh = "async",
  Jh = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  f1 = (() => {
    try {
      return !0;
    } catch {
      return !1;
    }
  })();
function zi(r) {
  return new Proxy(r, {
    get(a, o) {
      return o in a ? a[o] : a[at];
    },
  });
}
const d1 = z({}, l1);
d1[at] = z(
  z(z(z({}, { "fa-duotone": "duotone" }), l1[at]), gd.kit),
  gd["kit-duotone"],
);
const e2 = zi(d1),
  zs = z({}, Lh);
zs[at] = z(z(z(z({}, { duotone: "fad" }), zs[at]), yd.kit), yd["kit-duotone"]);
const wd = zi(zs),
  Ls = z({}, Ts);
Ls[at] = z(z({}, Ls[at]), Vh.kit);
const tu = zi(Ls),
  Rs = z({}, Hh);
Rs[at] = z(z({}, Rs[at]), Dh.kit);
zi(Rs);
const t2 = Nh,
  p1 = "fa-layers-text",
  n2 = Oh,
  r2 = z({}, jh);
zi(r2);
const i2 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  ks = Ah,
  l2 = [...Mh, ...Gh],
  Ai = Dn.FontAwesomeConfig || {};
function o2(r) {
  var a = je.querySelector("script[" + r + "]");
  if (a) return a.getAttribute(r);
}
function a2(r) {
  return r === "" ? !0 : r === "false" ? !1 : r === "true" ? !0 : r;
}
je &&
  typeof je.querySelector == "function" &&
  [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ].forEach((a) => {
    let [o, u] = a;
    const f = a2(o2(o));
    f != null && (Ai[u] = f);
  });
const m1 = {
  styleDefault: "solid",
  familyDefault: at,
  cssPrefix: u1,
  replacementClass: c1,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
Ai.familyPrefix && (Ai.cssPrefix = Ai.familyPrefix);
const br = z(z({}, m1), Ai);
br.autoReplaceSvg || (br.observeMutations = !1);
const X = {};
Object.keys(m1).forEach((r) => {
  Object.defineProperty(X, r, {
    enumerable: !0,
    set: function (a) {
      ((br[r] = a), Ti.forEach((o) => o(X)));
    },
    get: function () {
      return br[r];
    },
  });
});
Object.defineProperty(X, "familyPrefix", {
  enumerable: !0,
  set: function (r) {
    ((br.cssPrefix = r), Ti.forEach((a) => a(X)));
  },
  get: function () {
    return br.cssPrefix;
  },
});
Dn.FontAwesomeConfig = X;
const Ti = [];
function s2(r) {
  return (
    Ti.push(r),
    () => {
      Ti.splice(Ti.indexOf(r), 1);
    }
  );
}
const Rn = js,
  Jt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function u2(r) {
  if (!r || !gn) return;
  const a = je.createElement("style");
  (a.setAttribute("type", "text/css"), (a.innerHTML = r));
  const o = je.head.childNodes;
  let u = null;
  for (let f = o.length - 1; f > -1; f--) {
    const d = o[f],
      m = (d.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(m) > -1 && (u = d);
  }
  return (je.head.insertBefore(a, u), r);
}
const c2 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ji() {
  let r = 12,
    a = "";
  for (; r-- > 0; ) a += c2[(Math.random() * 62) | 0];
  return a;
}
function Vr(r) {
  const a = [];
  for (let o = (r || []).length >>> 0; o--; ) a[o] = r[o];
  return a;
}
function nu(r) {
  return r.classList
    ? Vr(r.classList)
    : (r.getAttribute("class") || "").split(" ").filter((a) => a);
}
function h1(r) {
  return ""
    .concat(r)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function f2(r) {
  return Object.keys(r || {})
    .reduce((a, o) => a + "".concat(o, '="').concat(h1(r[o]), '" '), "")
    .trim();
}
function mo(r) {
  return Object.keys(r || {}).reduce(
    (a, o) => a + "".concat(o, ": ").concat(r[o].trim(), ";"),
    "",
  );
}
function ru(r) {
  return (
    r.size !== Jt.size ||
    r.x !== Jt.x ||
    r.y !== Jt.y ||
    r.rotate !== Jt.rotate ||
    r.flipX ||
    r.flipY
  );
}
function d2(r) {
  let { transform: a, containerWidth: o, iconWidth: u } = r;
  const f = { transform: "translate(".concat(o / 2, " 256)") },
    d = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
    m = "scale("
      .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
      .concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
    v = "rotate(".concat(a.rotate, " 0 0)"),
    P = { transform: "".concat(d, " ").concat(m, " ").concat(v) },
    F = { transform: "translate(".concat((u / 2) * -1, " -256)") };
  return { outer: f, inner: P, path: F };
}
function p2(r) {
  let {
      transform: a,
      width: o = js,
      height: u = js,
      startCentered: f = !1,
    } = r,
    d = "";
  return (
    f && i1
      ? (d += "translate("
          .concat(a.x / Rn - o / 2, "em, ")
          .concat(a.y / Rn - u / 2, "em) "))
      : f
        ? (d += "translate(calc(-50% + "
            .concat(a.x / Rn, "em), calc(-50% + ")
            .concat(a.y / Rn, "em)) "))
        : (d += "translate(".concat(a.x / Rn, "em, ").concat(a.y / Rn, "em) ")),
    (d += "scale("
      .concat((a.size / Rn) * (a.flipX ? -1 : 1), ", ")
      .concat((a.size / Rn) * (a.flipY ? -1 : 1), ") ")),
    (d += "rotate(".concat(a.rotate, "deg) ")),
    d
  );
}
var m2 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;
function g1() {
  const r = u1,
    a = c1,
    o = X.cssPrefix,
    u = X.replacementClass;
  let f = m2;
  if (o !== r || u !== a) {
    const d = new RegExp("\\.".concat(r, "\\-"), "g"),
      m = new RegExp("\\--".concat(r, "\\-"), "g"),
      v = new RegExp("\\.".concat(a), "g");
    f = f
      .replace(d, ".".concat(o, "-"))
      .replace(m, "--".concat(o, "-"))
      .replace(v, ".".concat(u));
  }
  return f;
}
let xd = !1;
function Ss() {
  X.autoAddCss && !xd && (u2(g1()), (xd = !0));
}
var h2 = {
  mixout() {
    return { dom: { css: g1, insertCss: Ss } };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Ss();
      },
      beforeI2svg() {
        Ss();
      },
    };
  },
};
const hn = Dn || {};
hn[mn] || (hn[mn] = {});
hn[mn].styles || (hn[mn].styles = {});
hn[mn].hooks || (hn[mn].hooks = {});
hn[mn].shims || (hn[mn].shims = []);
var en = hn[mn];
const y1 = [],
  v1 = function () {
    (je.removeEventListener("DOMContentLoaded", v1),
      (oo = 1),
      y1.map((r) => r()));
  };
let oo = !1;
gn &&
  ((oo = (je.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    je.readyState,
  )),
  oo || je.addEventListener("DOMContentLoaded", v1));
function g2(r) {
  gn && (oo ? setTimeout(r, 0) : y1.push(r));
}
function Li(r) {
  const { tag: a, attributes: o = {}, children: u = [] } = r;
  return typeof r == "string"
    ? h1(r)
    : "<"
        .concat(a, " ")
        .concat(f2(o), ">")
        .concat(u.map(Li).join(""), "</")
        .concat(a, ">");
}
function kd(r, a, o) {
  if (r && r[a] && r[a][o]) return { prefix: a, iconName: o, icon: r[a][o] };
}
var _s = function (a, o, u, f) {
  var d = Object.keys(a),
    m = d.length,
    v = o,
    P,
    F,
    A;
  for (u === void 0 ? ((P = 1), (A = a[d[0]])) : ((P = 0), (A = u)); P < m; P++)
    ((F = d[P]), (A = v(A, a[F], F, a)));
  return A;
};
function y2(r) {
  const a = [];
  let o = 0;
  const u = r.length;
  for (; o < u; ) {
    const f = r.charCodeAt(o++);
    if (f >= 55296 && f <= 56319 && o < u) {
      const d = r.charCodeAt(o++);
      (d & 64512) == 56320
        ? a.push(((f & 1023) << 10) + (d & 1023) + 65536)
        : (a.push(f), o--);
    } else a.push(f);
  }
  return a;
}
function Ms(r) {
  const a = y2(r);
  return a.length === 1 ? a[0].toString(16) : null;
}
function v2(r, a) {
  const o = r.length;
  let u = r.charCodeAt(a),
    f;
  return u >= 55296 &&
    u <= 56319 &&
    o > a + 1 &&
    ((f = r.charCodeAt(a + 1)), f >= 56320 && f <= 57343)
    ? (u - 55296) * 1024 + f - 56320 + 65536
    : u;
}
function Sd(r) {
  return Object.keys(r).reduce((a, o) => {
    const u = r[o];
    return (!!u.icon ? (a[u.iconName] = u.icon) : (a[o] = u), a);
  }, {});
}
function Ds(r, a) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const { skipHooks: u = !1 } = o,
    f = Sd(a);
  (typeof en.hooks.addPack == "function" && !u
    ? en.hooks.addPack(r, Sd(a))
    : (en.styles[r] = z(z({}, en.styles[r] || {}), f)),
    r === "fas" && Ds("fa", a));
}
const { styles: Ii, shims: w2 } = en,
  w1 = Object.keys(tu),
  x2 = w1.reduce((r, a) => ((r[a] = Object.keys(tu[a])), r), {});
let iu = null,
  x1 = {},
  k1 = {},
  S1 = {},
  _1 = {},
  E1 = {};
function k2(r) {
  return ~l2.indexOf(r);
}
function S2(r, a) {
  const o = a.split("-"),
    u = o[0],
    f = o.slice(1).join("-");
  return u === r && f !== "" && !k2(f) ? f : null;
}
const C1 = () => {
  const r = (u) => _s(Ii, (f, d, m) => ((f[m] = _s(d, u, {})), f), {});
  ((x1 = r(
    (u, f, d) => (
      f[3] && (u[f[3]] = d),
      f[2] &&
        f[2]
          .filter((v) => typeof v == "number")
          .forEach((v) => {
            u[v.toString(16)] = d;
          }),
      u
    ),
  )),
    (k1 = r(
      (u, f, d) => (
        (u[d] = d),
        f[2] &&
          f[2]
            .filter((v) => typeof v == "string")
            .forEach((v) => {
              u[v] = d;
            }),
        u
      ),
    )),
    (E1 = r((u, f, d) => {
      const m = f[2];
      return (
        (u[d] = d),
        m.forEach((v) => {
          u[v] = d;
        }),
        u
      );
    })));
  const a = "far" in Ii || X.autoFetchSvg,
    o = _s(
      w2,
      (u, f) => {
        const d = f[0];
        let m = f[1];
        const v = f[2];
        return (
          m === "far" && !a && (m = "fas"),
          typeof d == "string" && (u.names[d] = { prefix: m, iconName: v }),
          typeof d == "number" &&
            (u.unicodes[d.toString(16)] = { prefix: m, iconName: v }),
          u
        );
      },
      { names: {}, unicodes: {} },
    );
  ((S1 = o.names),
    (_1 = o.unicodes),
    (iu = ho(X.styleDefault, { family: X.familyDefault })));
};
s2((r) => {
  iu = ho(r.styleDefault, { family: X.familyDefault });
});
C1();
function lu(r, a) {
  return (x1[r] || {})[a];
}
function _2(r, a) {
  return (k1[r] || {})[a];
}
function ir(r, a) {
  return (E1[r] || {})[a];
}
function P1(r) {
  return S1[r] || { prefix: null, iconName: null };
}
function E2(r) {
  const a = _1[r],
    o = lu("fas", r);
  return (
    a ||
    (o ? { prefix: "fas", iconName: o } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function bn() {
  return iu;
}
const N1 = () => ({ prefix: null, iconName: null, rest: [] });
function C2(r) {
  let a = at;
  const o = w1.reduce(
    (u, f) => ((u[f] = "".concat(X.cssPrefix, "-").concat(f)), u),
    {},
  );
  return (
    a1.forEach((u) => {
      (r.includes(o[u]) || r.some((f) => x2[u].includes(f))) && (a = u);
    }),
    a
  );
}
function ho(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { family: o = at } = a,
    u = e2[o][r];
  if (o === po && !r) return "fad";
  const f = wd[o][r] || wd[o][u],
    d = r in en.styles ? r : null;
  return f || d || null;
}
function P2(r) {
  let a = [],
    o = null;
  return (
    r.forEach((u) => {
      const f = S2(X.cssPrefix, u);
      f ? (o = f) : u && a.push(u);
    }),
    { iconName: o, rest: a }
  );
}
function _d(r) {
  return r.sort().filter((a, o, u) => u.indexOf(a) === o);
}
function go(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { skipLookups: o = !1 } = a;
  let u = null;
  const f = Fs.concat(Wh),
    d = _d(r.filter((j) => f.includes(j))),
    m = _d(r.filter((j) => !Fs.includes(j))),
    v = d.filter((j) => ((u = j), !o1.includes(j))),
    [P = null] = v,
    F = C2(d),
    A = z(z({}, P2(m)), {}, { prefix: ho(P, { family: F }) });
  return z(
    z(
      z({}, A),
      T2({
        values: r,
        family: F,
        styles: Ii,
        config: X,
        canonical: A,
        givenPrefix: u,
      }),
    ),
    N2(o, u, A),
  );
}
function N2(r, a, o) {
  let { prefix: u, iconName: f } = o;
  if (r || !u || !f) return { prefix: u, iconName: f };
  const d = a === "fa" ? P1(f) : {},
    m = ir(u, f);
  return (
    (f = d.iconName || m || f),
    (u = d.prefix || u),
    u === "far" && !Ii.far && Ii.fas && !X.autoFetchSvg && (u = "fas"),
    { prefix: u, iconName: f }
  );
}
const O2 = a1.filter((r) => r !== at || r !== po),
  A2 = Object.keys(Ts)
    .filter((r) => r !== at)
    .map((r) => Object.keys(Ts[r]))
    .flat();
function T2(r) {
  const {
      values: a,
      family: o,
      canonical: u,
      givenPrefix: f = "",
      styles: d = {},
      config: m = {},
    } = r,
    v = o === po,
    P = a.includes("fa-duotone") || a.includes("fad"),
    F = m.familyDefault === "duotone",
    A = u.prefix === "fad" || u.prefix === "fa-duotone";
  if (
    (!v && (P || F || A) && (u.prefix = "fad"),
    (a.includes("fa-brands") || a.includes("fab")) && (u.prefix = "fab"),
    !u.prefix &&
      O2.includes(o) &&
      (Object.keys(d).find((V) => A2.includes(V)) || m.autoFetchSvg))
  ) {
    const V = zh.get(o).defaultShortPrefixId;
    ((u.prefix = V), (u.iconName = ir(u.prefix, u.iconName) || u.iconName));
  }
  return ((u.prefix === "fa" || f === "fa") && (u.prefix = bn() || "fas"), u);
}
class F2 {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    const f = o.reduce(this._pullDefinitions, {});
    Object.keys(f).forEach((d) => {
      ((this.definitions[d] = z(z({}, this.definitions[d] || {}), f[d])),
        Ds(d, f[d]));
      const m = tu[at][d];
      (m && Ds(m, f[d]), C1());
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(a, o) {
    const u = o.prefix && o.iconName && o.icon ? { 0: o } : o;
    return (
      Object.keys(u).map((f) => {
        const { prefix: d, iconName: m, icon: v } = u[f],
          P = v[2];
        (a[d] || (a[d] = {}),
          P.length > 0 &&
            P.forEach((F) => {
              typeof F == "string" && (a[d][F] = v);
            }),
          (a[d][m] = v));
      }),
      a
    );
  }
}
let Ed = [],
  Rr = {};
const Dr = {},
  j2 = Object.keys(Dr);
function I2(r, a) {
  let { mixoutsTo: o } = a;
  return (
    (Ed = r),
    (Rr = {}),
    Object.keys(Dr).forEach((u) => {
      j2.indexOf(u) === -1 && delete Dr[u];
    }),
    Ed.forEach((u) => {
      const f = u.mixout ? u.mixout() : {};
      if (
        (Object.keys(f).forEach((d) => {
          (typeof f[d] == "function" && (o[d] = f[d]),
            typeof f[d] == "object" &&
              Object.keys(f[d]).forEach((m) => {
                (o[d] || (o[d] = {}), (o[d][m] = f[d][m]));
              }));
        }),
        u.hooks)
      ) {
        const d = u.hooks();
        Object.keys(d).forEach((m) => {
          (Rr[m] || (Rr[m] = []), Rr[m].push(d[m]));
        });
      }
      u.provides && u.provides(Dr);
    }),
    o
  );
}
function bs(r, a) {
  for (
    var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), f = 2;
    f < o;
    f++
  )
    u[f - 2] = arguments[f];
  return (
    (Rr[r] || []).forEach((m) => {
      a = m.apply(null, [a, ...u]);
    }),
    a
  );
}
function ar(r) {
  for (
    var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1;
    u < a;
    u++
  )
    o[u - 1] = arguments[u];
  (Rr[r] || []).forEach((d) => {
    d.apply(null, o);
  });
}
function Vn() {
  const r = arguments[0],
    a = Array.prototype.slice.call(arguments, 1);
  return Dr[r] ? Dr[r].apply(null, a) : void 0;
}
function Vs(r) {
  r.prefix === "fa" && (r.prefix = "fas");
  let { iconName: a } = r;
  const o = r.prefix || bn();
  if (a)
    return (
      (a = ir(o, a) || a),
      kd(O1.definitions, o, a) || kd(en.styles, o, a)
    );
}
const O1 = new F2(),
  z2 = () => {
    ((X.autoReplaceSvg = !1), (X.observeMutations = !1), ar("noAuto"));
  },
  L2 = {
    i2svg: function () {
      let r =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return gn
        ? (ar("beforeI2svg", r), Vn("pseudoElements2svg", r), Vn("i2svg", r))
        : Promise.reject(new Error("Operation requires a DOM of some kind."));
    },
    watch: function () {
      let r =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      const { autoReplaceSvgRoot: a } = r;
      (X.autoReplaceSvg === !1 && (X.autoReplaceSvg = !0),
        (X.observeMutations = !0),
        g2(() => {
          (M2({ autoReplaceSvgRoot: a }), ar("watch", r));
        }));
    },
  },
  R2 = {
    icon: (r) => {
      if (r === null) return null;
      if (typeof r == "object" && r.prefix && r.iconName)
        return {
          prefix: r.prefix,
          iconName: ir(r.prefix, r.iconName) || r.iconName,
        };
      if (Array.isArray(r) && r.length === 2) {
        const a = r[1].indexOf("fa-") === 0 ? r[1].slice(3) : r[1],
          o = ho(r[0]);
        return { prefix: o, iconName: ir(o, a) || a };
      }
      if (
        typeof r == "string" &&
        (r.indexOf("".concat(X.cssPrefix, "-")) > -1 || r.match(t2))
      ) {
        const a = go(r.split(" "), { skipLookups: !0 });
        return {
          prefix: a.prefix || bn(),
          iconName: ir(a.prefix, a.iconName) || a.iconName,
        };
      }
      if (typeof r == "string") {
        const a = bn();
        return { prefix: a, iconName: ir(a, r) || r };
      }
    },
  },
  Pt = {
    noAuto: z2,
    config: X,
    dom: L2,
    parse: R2,
    library: O1,
    findIconDefinition: Vs,
    toHtml: Li,
  },
  M2 = function () {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const { autoReplaceSvgRoot: a = je } = r;
    (Object.keys(en.styles).length > 0 || X.autoFetchSvg) &&
      gn &&
      X.autoReplaceSvg &&
      Pt.dom.i2svg({ node: a });
  };
function yo(r, a) {
  return (
    Object.defineProperty(r, "abstract", { get: a }),
    Object.defineProperty(r, "html", {
      get: function () {
        return r.abstract.map((o) => Li(o));
      },
    }),
    Object.defineProperty(r, "node", {
      get: function () {
        if (!gn) return;
        const o = je.createElement("div");
        return ((o.innerHTML = r.html), o.children);
      },
    }),
    r
  );
}
function D2(r) {
  let {
    children: a,
    main: o,
    mask: u,
    attributes: f,
    styles: d,
    transform: m,
  } = r;
  if (ru(m) && o.found && !u.found) {
    const { width: v, height: P } = o,
      F = { x: v / P / 2, y: 0.5 };
    f.style = mo(
      z(
        z({}, d),
        {},
        {
          "transform-origin": ""
            .concat(F.x + m.x / 16, "em ")
            .concat(F.y + m.y / 16, "em"),
        },
      ),
    );
  }
  return [{ tag: "svg", attributes: f, children: a }];
}
function b2(r) {
  let { prefix: a, iconName: o, children: u, attributes: f, symbol: d } = r;
  const m = d === !0 ? "".concat(a, "-").concat(X.cssPrefix, "-").concat(o) : d;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: z(z({}, f), {}, { id: m }), children: u },
      ],
    },
  ];
}
function ou(r) {
  const {
      icons: { main: a, mask: o },
      prefix: u,
      iconName: f,
      transform: d,
      symbol: m,
      title: v,
      maskId: P,
      titleId: F,
      extra: A,
      watchable: j = !1,
    } = r,
    { width: V, height: ce } = o.found ? o : a,
    fe = bh.includes(u),
    te = [X.replacementClass, f ? "".concat(X.cssPrefix, "-").concat(f) : ""]
      .filter((le) => A.classes.indexOf(le) === -1)
      .filter((le) => le !== "" || !!le)
      .concat(A.classes)
      .join(" ");
  let G = {
    children: [],
    attributes: z(
      z({}, A.attributes),
      {},
      {
        "data-prefix": u,
        "data-icon": f,
        class: te,
        role: A.attributes.role || "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 ".concat(V, " ").concat(ce),
      },
    ),
  };
  const me =
    fe && !~A.classes.indexOf("fa-fw")
      ? { width: "".concat((V / ce) * 16 * 0.0625, "em") }
      : {};
  (j && (G.attributes[or] = ""),
    v &&
      (G.children.push({
        tag: "title",
        attributes: {
          id: G.attributes["aria-labelledby"] || "title-".concat(F || ji()),
        },
        children: [v],
      }),
      delete G.attributes.title));
  const Q = z(
      z({}, G),
      {},
      {
        prefix: u,
        iconName: f,
        main: a,
        mask: o,
        maskId: P,
        transform: d,
        symbol: m,
        styles: z(z({}, me), A.styles),
      },
    ),
    { children: pe, attributes: he } =
      o.found && a.found
        ? Vn("generateAbstractMask", Q) || { children: [], attributes: {} }
        : Vn("generateAbstractIcon", Q) || { children: [], attributes: {} };
  return ((Q.children = pe), (Q.attributes = he), m ? b2(Q) : D2(Q));
}
function Cd(r) {
  const {
      content: a,
      width: o,
      height: u,
      transform: f,
      title: d,
      extra: m,
      watchable: v = !1,
    } = r,
    P = z(
      z(z({}, m.attributes), d ? { title: d } : {}),
      {},
      { class: m.classes.join(" ") },
    );
  v && (P[or] = "");
  const F = z({}, m.styles);
  ru(f) &&
    ((F.transform = p2({
      transform: f,
      startCentered: !0,
      width: o,
      height: u,
    })),
    (F["-webkit-transform"] = F.transform));
  const A = mo(F);
  A.length > 0 && (P.style = A);
  const j = [];
  return (
    j.push({ tag: "span", attributes: P, children: [a] }),
    d &&
      j.push({ tag: "span", attributes: { class: "sr-only" }, children: [d] }),
    j
  );
}
function V2(r) {
  const { content: a, title: o, extra: u } = r,
    f = z(
      z(z({}, u.attributes), o ? { title: o } : {}),
      {},
      { class: u.classes.join(" ") },
    ),
    d = mo(u.styles);
  d.length > 0 && (f.style = d);
  const m = [];
  return (
    m.push({ tag: "span", attributes: f, children: [a] }),
    o &&
      m.push({ tag: "span", attributes: { class: "sr-only" }, children: [o] }),
    m
  );
}
const { styles: Es } = en;
function Us(r) {
  const a = r[0],
    o = r[1],
    [u] = r.slice(4);
  let f = null;
  return (
    Array.isArray(u)
      ? (f = {
          tag: "g",
          attributes: { class: "".concat(X.cssPrefix, "-").concat(ks.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(X.cssPrefix, "-").concat(ks.SECONDARY),
                fill: "currentColor",
                d: u[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(X.cssPrefix, "-").concat(ks.PRIMARY),
                fill: "currentColor",
                d: u[1],
              },
            },
          ],
        })
      : (f = { tag: "path", attributes: { fill: "currentColor", d: u } }),
    { found: !0, width: a, height: o, icon: f }
  );
}
const U2 = { found: !1, width: 512, height: 512 };
function W2(r, a) {
  !f1 &&
    !X.showMissingIcons &&
    r &&
    console.error(
      'Icon with name "'.concat(r, '" and prefix "').concat(a, '" is missing.'),
    );
}
function Ws(r, a) {
  let o = a;
  return (
    a === "fa" && X.styleDefault !== null && (a = bn()),
    new Promise((u, f) => {
      if (o === "fa") {
        const d = P1(r) || {};
        ((r = d.iconName || r), (a = d.prefix || a));
      }
      if (r && a && Es[a] && Es[a][r]) {
        const d = Es[a][r];
        return u(Us(d));
      }
      (W2(r, a),
        u(
          z(
            z({}, U2),
            {},
            {
              icon:
                X.showMissingIcons && r ? Vn("missingIconAbstract") || {} : {},
            },
          ),
        ));
    })
  );
}
const Pd = () => {},
  Bs =
    X.measurePerformance && ql && ql.mark && ql.measure
      ? ql
      : { mark: Pd, measure: Pd },
  Oi = 'FA "6.7.2"',
  B2 = (r) => (Bs.mark("".concat(Oi, " ").concat(r, " begins")), () => A1(r)),
  A1 = (r) => {
    (Bs.mark("".concat(Oi, " ").concat(r, " ends")),
      Bs.measure(
        "".concat(Oi, " ").concat(r),
        "".concat(Oi, " ").concat(r, " begins"),
        "".concat(Oi, " ").concat(r, " ends"),
      ));
  };
var au = { begin: B2, end: A1 };
const eo = () => {};
function Nd(r) {
  return typeof (r.getAttribute ? r.getAttribute(or) : null) == "string";
}
function H2(r) {
  const a = r.getAttribute ? r.getAttribute(Js) : null,
    o = r.getAttribute ? r.getAttribute(eu) : null;
  return a && o;
}
function $2(r) {
  return (
    r &&
    r.classList &&
    r.classList.contains &&
    r.classList.contains(X.replacementClass)
  );
}
function Y2() {
  return X.autoReplaceSvg === !0
    ? to.replace
    : to[X.autoReplaceSvg] || to.replace;
}
function Q2(r) {
  return je.createElementNS("http://www.w3.org/2000/svg", r);
}
function K2(r) {
  return je.createElement(r);
}
function T1(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { ceFn: o = r.tag === "svg" ? Q2 : K2 } = a;
  if (typeof r == "string") return je.createTextNode(r);
  const u = o(r.tag);
  return (
    Object.keys(r.attributes || []).forEach(function (d) {
      u.setAttribute(d, r.attributes[d]);
    }),
    (r.children || []).forEach(function (d) {
      u.appendChild(T1(d, { ceFn: o }));
    }),
    u
  );
}
function G2(r) {
  let a = " ".concat(r.outerHTML, " ");
  return ((a = "".concat(a, "Font Awesome fontawesome.com ")), a);
}
const to = {
  replace: function (r) {
    const a = r[0];
    if (a.parentNode)
      if (
        (r[1].forEach((o) => {
          a.parentNode.insertBefore(T1(o), a);
        }),
        a.getAttribute(or) === null && X.keepOriginalSource)
      ) {
        let o = je.createComment(G2(a));
        a.parentNode.replaceChild(o, a);
      } else a.remove();
  },
  nest: function (r) {
    const a = r[0],
      o = r[1];
    if (~nu(a).indexOf(X.replacementClass)) return to.replace(r);
    const u = new RegExp("".concat(X.cssPrefix, "-.*"));
    if ((delete o[0].attributes.id, o[0].attributes.class)) {
      const d = o[0].attributes.class
        .split(" ")
        .reduce(
          (m, v) => (
            v === X.replacementClass || v.match(u)
              ? m.toSvg.push(v)
              : m.toNode.push(v),
            m
          ),
          { toNode: [], toSvg: [] },
        );
      ((o[0].attributes.class = d.toSvg.join(" ")),
        d.toNode.length === 0
          ? a.removeAttribute("class")
          : a.setAttribute("class", d.toNode.join(" ")));
    }
    const f = o.map((d) => Li(d)).join(`
`);
    (a.setAttribute(or, ""), (a.innerHTML = f));
  },
};
function Od(r) {
  r();
}
function F1(r, a) {
  const o = typeof a == "function" ? a : eo;
  if (r.length === 0) o();
  else {
    let u = Od;
    (X.mutateApproach === Zh && (u = Dn.requestAnimationFrame || Od),
      u(() => {
        const f = Y2(),
          d = au.begin("mutate");
        (r.map(f), d(), o());
      }));
  }
}
let su = !1;
function j1() {
  su = !0;
}
function Hs() {
  su = !1;
}
let ao = null;
function Ad(r) {
  if (!hd || !X.observeMutations) return;
  const {
    treeCallback: a = eo,
    nodeCallback: o = eo,
    pseudoElementsCallback: u = eo,
    observeMutationsRoot: f = je,
  } = r;
  ((ao = new hd((d) => {
    if (su) return;
    const m = bn();
    Vr(d).forEach((v) => {
      if (
        (v.type === "childList" &&
          v.addedNodes.length > 0 &&
          !Nd(v.addedNodes[0]) &&
          (X.searchPseudoElements && u(v.target), a(v.target)),
        v.type === "attributes" &&
          v.target.parentNode &&
          X.searchPseudoElements &&
          u(v.target.parentNode),
        v.type === "attributes" && Nd(v.target) && ~i2.indexOf(v.attributeName))
      )
        if (v.attributeName === "class" && H2(v.target)) {
          const { prefix: P, iconName: F } = go(nu(v.target));
          (v.target.setAttribute(Js, P || m),
            F && v.target.setAttribute(eu, F));
        } else $2(v.target) && o(v.target);
    });
  })),
    gn &&
      ao.observe(f, {
        childList: !0,
        attributes: !0,
        characterData: !0,
        subtree: !0,
      }));
}
function X2() {
  ao && ao.disconnect();
}
function q2(r) {
  const a = r.getAttribute("style");
  let o = [];
  return (
    a &&
      (o = a.split(";").reduce((u, f) => {
        const d = f.split(":"),
          m = d[0],
          v = d.slice(1);
        return (m && v.length > 0 && (u[m] = v.join(":").trim()), u);
      }, {})),
    o
  );
}
function Z2(r) {
  const a = r.getAttribute("data-prefix"),
    o = r.getAttribute("data-icon"),
    u = r.innerText !== void 0 ? r.innerText.trim() : "";
  let f = go(nu(r));
  return (
    f.prefix || (f.prefix = bn()),
    a && o && ((f.prefix = a), (f.iconName = o)),
    (f.iconName && f.prefix) ||
      (f.prefix &&
        u.length > 0 &&
        (f.iconName =
          _2(f.prefix, r.innerText) || lu(f.prefix, Ms(r.innerText))),
      !f.iconName &&
        X.autoFetchSvg &&
        r.firstChild &&
        r.firstChild.nodeType === Node.TEXT_NODE &&
        (f.iconName = r.firstChild.data)),
    f
  );
}
function J2(r) {
  const a = Vr(r.attributes).reduce(
      (f, d) => (
        f.name !== "class" && f.name !== "style" && (f[d.name] = d.value),
        f
      ),
      {},
    ),
    o = r.getAttribute("title"),
    u = r.getAttribute("data-fa-title-id");
  return (
    X.autoA11y &&
      (o
        ? (a["aria-labelledby"] = ""
            .concat(X.replacementClass, "-title-")
            .concat(u || ji()))
        : ((a["aria-hidden"] = "true"), (a.focusable = "false"))),
    a
  );
}
function eg() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Jt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Td(r) {
  let a =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : { styleParser: !0 };
  const { iconName: o, prefix: u, rest: f } = Z2(r),
    d = J2(r),
    m = bs("parseNodeAttributes", {}, r);
  let v = a.styleParser ? q2(r) : [];
  return z(
    {
      iconName: o,
      title: r.getAttribute("title"),
      titleId: r.getAttribute("data-fa-title-id"),
      prefix: u,
      transform: Jt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: f, styles: v, attributes: d },
    },
    m,
  );
}
const { styles: tg } = en;
function I1(r) {
  const a = X.autoReplaceSvg === "nest" ? Td(r, { styleParser: !1 }) : Td(r);
  return ~a.extra.classes.indexOf(p1)
    ? Vn("generateLayersText", r, a)
    : Vn("generateSvgReplacementMutation", r, a);
}
function ng() {
  return [...Rh, ...Fs];
}
function Fd(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!gn) return Promise.resolve();
  const o = je.documentElement.classList,
    u = (A) => o.add("".concat(vd, "-").concat(A)),
    f = (A) => o.remove("".concat(vd, "-").concat(A)),
    d = X.autoFetchSvg ? ng() : o1.concat(Object.keys(tg));
  d.includes("fa") || d.push("fa");
  const m = [".".concat(p1, ":not([").concat(or, "])")]
    .concat(d.map((A) => ".".concat(A, ":not([").concat(or, "])")))
    .join(", ");
  if (m.length === 0) return Promise.resolve();
  let v = [];
  try {
    v = Vr(r.querySelectorAll(m));
  } catch {}
  if (v.length > 0) (u("pending"), f("complete"));
  else return Promise.resolve();
  const P = au.begin("onTree"),
    F = v.reduce((A, j) => {
      try {
        const V = I1(j);
        V && A.push(V);
      } catch (V) {
        f1 || (V.name === "MissingIcon" && console.error(V));
      }
      return A;
    }, []);
  return new Promise((A, j) => {
    Promise.all(F)
      .then((V) => {
        F1(V, () => {
          (u("active"),
            u("complete"),
            f("pending"),
            typeof a == "function" && a(),
            P(),
            A());
        });
      })
      .catch((V) => {
        (P(), j(V));
      });
  });
}
function rg(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  I1(r).then((o) => {
    o && F1([o], a);
  });
}
function ig(r) {
  return function (a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const u = (a || {}).icon ? a : Vs(a || {});
    let { mask: f } = o;
    return (
      f && (f = (f || {}).icon ? f : Vs(f || {})),
      r(u, z(z({}, o), {}, { mask: f }))
    );
  };
}
const lg = function (r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: o = Jt,
    symbol: u = !1,
    mask: f = null,
    maskId: d = null,
    title: m = null,
    titleId: v = null,
    classes: P = [],
    attributes: F = {},
    styles: A = {},
  } = a;
  if (!r) return;
  const { prefix: j, iconName: V, icon: ce } = r;
  return yo(
    z({ type: "icon" }, r),
    () => (
      ar("beforeDOMElementCreation", { iconDefinition: r, params: a }),
      X.autoA11y &&
        (m
          ? (F["aria-labelledby"] = ""
              .concat(X.replacementClass, "-title-")
              .concat(v || ji()))
          : ((F["aria-hidden"] = "true"), (F.focusable = "false"))),
      ou({
        icons: {
          main: Us(ce),
          mask: f
            ? Us(f.icon)
            : { found: !1, width: null, height: null, icon: {} },
        },
        prefix: j,
        iconName: V,
        transform: z(z({}, Jt), o),
        symbol: u,
        title: m,
        maskId: d,
        titleId: v,
        extra: { attributes: F, styles: A, classes: P },
      })
    ),
  );
};
var og = {
    mixout() {
      return { icon: ig(lg) };
    },
    hooks() {
      return {
        mutationObserverCallbacks(r) {
          return ((r.treeCallback = Fd), (r.nodeCallback = rg), r);
        },
      };
    },
    provides(r) {
      ((r.i2svg = function (a) {
        const { node: o = je, callback: u = () => {} } = a;
        return Fd(o, u);
      }),
        (r.generateSvgReplacementMutation = function (a, o) {
          const {
            iconName: u,
            title: f,
            titleId: d,
            prefix: m,
            transform: v,
            symbol: P,
            mask: F,
            maskId: A,
            extra: j,
          } = o;
          return new Promise((V, ce) => {
            Promise.all([
              Ws(u, m),
              F.iconName
                ? Ws(F.iconName, F.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then((fe) => {
                let [te, G] = fe;
                V([
                  a,
                  ou({
                    icons: { main: te, mask: G },
                    prefix: m,
                    iconName: u,
                    transform: v,
                    symbol: P,
                    maskId: A,
                    title: f,
                    titleId: d,
                    extra: j,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(ce);
          });
        }),
        (r.generateAbstractIcon = function (a) {
          let {
            children: o,
            attributes: u,
            main: f,
            transform: d,
            styles: m,
          } = a;
          const v = mo(m);
          v.length > 0 && (u.style = v);
          let P;
          return (
            ru(d) &&
              (P = Vn("generateAbstractTransformGrouping", {
                main: f,
                transform: d,
                containerWidth: f.width,
                iconWidth: f.width,
              })),
            o.push(P || f.icon),
            { children: o, attributes: u }
          );
        }));
    },
  },
  ag = {
    mixout() {
      return {
        layer(r) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const { classes: o = [] } = a;
          return yo({ type: "layer" }, () => {
            ar("beforeDOMElementCreation", { assembler: r, params: a });
            let u = [];
            return (
              r((f) => {
                Array.isArray(f)
                  ? f.map((d) => {
                      u = u.concat(d.abstract);
                    })
                  : (u = u.concat(f.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(X.cssPrefix, "-layers"), ...o].join(" "),
                  },
                  children: u,
                },
              ]
            );
          });
        },
      };
    },
  },
  sg = {
    mixout() {
      return {
        counter(r) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            title: o = null,
            classes: u = [],
            attributes: f = {},
            styles: d = {},
          } = a;
          return yo(
            { type: "counter", content: r },
            () => (
              ar("beforeDOMElementCreation", { content: r, params: a }),
              V2({
                content: r.toString(),
                title: o,
                extra: {
                  attributes: f,
                  styles: d,
                  classes: ["".concat(X.cssPrefix, "-layers-counter"), ...u],
                },
              })
            ),
          );
        },
      };
    },
  },
  ug = {
    mixout() {
      return {
        text(r) {
          let a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const {
            transform: o = Jt,
            title: u = null,
            classes: f = [],
            attributes: d = {},
            styles: m = {},
          } = a;
          return yo(
            { type: "text", content: r },
            () => (
              ar("beforeDOMElementCreation", { content: r, params: a }),
              Cd({
                content: r,
                transform: z(z({}, Jt), o),
                title: u,
                extra: {
                  attributes: d,
                  styles: m,
                  classes: ["".concat(X.cssPrefix, "-layers-text"), ...f],
                },
              })
            ),
          );
        },
      };
    },
    provides(r) {
      r.generateLayersText = function (a, o) {
        const { title: u, transform: f, extra: d } = o;
        let m = null,
          v = null;
        if (i1) {
          const P = parseInt(getComputedStyle(a).fontSize, 10),
            F = a.getBoundingClientRect();
          ((m = F.width / P), (v = F.height / P));
        }
        return (
          X.autoA11y && !u && (d.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            a,
            Cd({
              content: a.innerHTML,
              width: m,
              height: v,
              transform: f,
              title: u,
              extra: d,
              watchable: !0,
            }),
          ])
        );
      };
    },
  };
const cg = new RegExp('"', "ug"),
  jd = [1105920, 1112319],
  Id = z(
    z(z(z({}, { FontAwesome: { normal: "fas", 400: "fas" } }), Ih), Xh),
    Bh,
  ),
  $s = Object.keys(Id).reduce((r, a) => ((r[a.toLowerCase()] = Id[a]), r), {}),
  fg = Object.keys($s).reduce((r, a) => {
    const o = $s[a];
    return ((r[a] = o[900] || [...Object.entries(o)][0][1]), r);
  }, {});
function dg(r) {
  const a = r.replace(cg, ""),
    o = v2(a, 0),
    u = o >= jd[0] && o <= jd[1],
    f = a.length === 2 ? a[0] === a[1] : !1;
  return { value: Ms(f ? a[0] : a), isSecondary: u || f };
}
function pg(r, a) {
  const o = r.replace(/^['"]|['"]$/g, "").toLowerCase(),
    u = parseInt(a),
    f = isNaN(u) ? "normal" : u;
  return ($s[o] || {})[f] || fg[o];
}
function zd(r, a) {
  const o = "".concat(qh).concat(a.replace(":", "-"));
  return new Promise((u, f) => {
    if (r.getAttribute(o) !== null) return u();
    const m = Vr(r.children).filter((V) => V.getAttribute(Is) === a)[0],
      v = Dn.getComputedStyle(r, a),
      P = v.getPropertyValue("font-family"),
      F = P.match(n2),
      A = v.getPropertyValue("font-weight"),
      j = v.getPropertyValue("content");
    if (m && !F) return (r.removeChild(m), u());
    if (F && j !== "none" && j !== "") {
      const V = v.getPropertyValue("content");
      let ce = pg(P, A);
      const { value: fe, isSecondary: te } = dg(V),
        G = F[0].startsWith("FontAwesome");
      let me = lu(ce, fe),
        Q = me;
      if (G) {
        const pe = E2(fe);
        pe.iconName && pe.prefix && ((me = pe.iconName), (ce = pe.prefix));
      }
      if (
        me &&
        !te &&
        (!m || m.getAttribute(Js) !== ce || m.getAttribute(eu) !== Q)
      ) {
        (r.setAttribute(o, Q), m && r.removeChild(m));
        const pe = eg(),
          { extra: he } = pe;
        ((he.attributes[Is] = a),
          Ws(me, ce)
            .then((le) => {
              const Ie = ou(
                  z(
                    z({}, pe),
                    {},
                    {
                      icons: { main: le, mask: N1() },
                      prefix: ce,
                      iconName: Q,
                      extra: he,
                      watchable: !0,
                    },
                  ),
                ),
                Le = je.createElementNS("http://www.w3.org/2000/svg", "svg");
              (a === "::before"
                ? r.insertBefore(Le, r.firstChild)
                : r.appendChild(Le),
                (Le.outerHTML = Ie.map((be) => Li(be)).join(`
`)),
                r.removeAttribute(o),
                u());
            })
            .catch(f));
      } else u();
    } else u();
  });
}
function mg(r) {
  return Promise.all([zd(r, "::before"), zd(r, "::after")]);
}
function hg(r) {
  return (
    r.parentNode !== document.head &&
    !~Jh.indexOf(r.tagName.toUpperCase()) &&
    !r.getAttribute(Is) &&
    (!r.parentNode || r.parentNode.tagName !== "svg")
  );
}
function Ld(r) {
  if (gn)
    return new Promise((a, o) => {
      const u = Vr(r.querySelectorAll("*")).filter(hg).map(mg),
        f = au.begin("searchPseudoElements");
      (j1(),
        Promise.all(u)
          .then(() => {
            (f(), Hs(), a());
          })
          .catch(() => {
            (f(), Hs(), o());
          }));
    });
}
var gg = {
  hooks() {
    return {
      mutationObserverCallbacks(r) {
        return ((r.pseudoElementsCallback = Ld), r);
      },
    };
  },
  provides(r) {
    r.pseudoElements2svg = function (a) {
      const { node: o = je } = a;
      X.searchPseudoElements && Ld(o);
    };
  },
};
let Rd = !1;
var yg = {
  mixout() {
    return {
      dom: {
        unwatch() {
          (j1(), (Rd = !0));
        },
      },
    };
  },
  hooks() {
    return {
      bootstrap() {
        Ad(bs("mutationObserverCallbacks", {}));
      },
      noAuto() {
        X2();
      },
      watch(r) {
        const { observeMutationsRoot: a } = r;
        Rd
          ? Hs()
          : Ad(bs("mutationObserverCallbacks", { observeMutationsRoot: a }));
      },
    };
  },
};
const Md = (r) => {
  let a = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
  return r
    .toLowerCase()
    .split(" ")
    .reduce((o, u) => {
      const f = u.toLowerCase().split("-"),
        d = f[0];
      let m = f.slice(1).join("-");
      if (d && m === "h") return ((o.flipX = !0), o);
      if (d && m === "v") return ((o.flipY = !0), o);
      if (((m = parseFloat(m)), isNaN(m))) return o;
      switch (d) {
        case "grow":
          o.size = o.size + m;
          break;
        case "shrink":
          o.size = o.size - m;
          break;
        case "left":
          o.x = o.x - m;
          break;
        case "right":
          o.x = o.x + m;
          break;
        case "up":
          o.y = o.y - m;
          break;
        case "down":
          o.y = o.y + m;
          break;
        case "rotate":
          o.rotate = o.rotate + m;
          break;
      }
      return o;
    }, a);
};
var vg = {
  mixout() {
    return { parse: { transform: (r) => Md(r) } };
  },
  hooks() {
    return {
      parseNodeAttributes(r, a) {
        const o = a.getAttribute("data-fa-transform");
        return (o && (r.transform = Md(o)), r);
      },
    };
  },
  provides(r) {
    r.generateAbstractTransformGrouping = function (a) {
      let { main: o, transform: u, containerWidth: f, iconWidth: d } = a;
      const m = { transform: "translate(".concat(f / 2, " 256)") },
        v = "translate(".concat(u.x * 32, ", ").concat(u.y * 32, ") "),
        P = "scale("
          .concat((u.size / 16) * (u.flipX ? -1 : 1), ", ")
          .concat((u.size / 16) * (u.flipY ? -1 : 1), ") "),
        F = "rotate(".concat(u.rotate, " 0 0)"),
        A = { transform: "".concat(v, " ").concat(P, " ").concat(F) },
        j = { transform: "translate(".concat((d / 2) * -1, " -256)") },
        V = { outer: m, inner: A, path: j };
      return {
        tag: "g",
        attributes: z({}, V.outer),
        children: [
          {
            tag: "g",
            attributes: z({}, V.inner),
            children: [
              {
                tag: o.icon.tag,
                children: o.icon.children,
                attributes: z(z({}, o.icon.attributes), V.path),
              },
            ],
          },
        ],
      };
    };
  },
};
const Cs = { x: 0, y: 0, width: "100%", height: "100%" };
function Dd(r) {
  let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    r.attributes && (r.attributes.fill || a) && (r.attributes.fill = "black"),
    r
  );
}
function wg(r) {
  return r.tag === "g" ? r.children : [r];
}
var xg = {
    hooks() {
      return {
        parseNodeAttributes(r, a) {
          const o = a.getAttribute("data-fa-mask"),
            u = o ? go(o.split(" ").map((f) => f.trim())) : N1();
          return (
            u.prefix || (u.prefix = bn()),
            (r.mask = u),
            (r.maskId = a.getAttribute("data-fa-mask-id")),
            r
          );
        },
      };
    },
    provides(r) {
      r.generateAbstractMask = function (a) {
        let {
          children: o,
          attributes: u,
          main: f,
          mask: d,
          maskId: m,
          transform: v,
        } = a;
        const { width: P, icon: F } = f,
          { width: A, icon: j } = d,
          V = d2({ transform: v, containerWidth: A, iconWidth: P }),
          ce = { tag: "rect", attributes: z(z({}, Cs), {}, { fill: "white" }) },
          fe = F.children ? { children: F.children.map(Dd) } : {},
          te = {
            tag: "g",
            attributes: z({}, V.inner),
            children: [
              Dd(
                z(
                  { tag: F.tag, attributes: z(z({}, F.attributes), V.path) },
                  fe,
                ),
              ),
            ],
          },
          G = { tag: "g", attributes: z({}, V.outer), children: [te] },
          me = "mask-".concat(m || ji()),
          Q = "clip-".concat(m || ji()),
          pe = {
            tag: "mask",
            attributes: z(
              z({}, Cs),
              {},
              {
                id: me,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              },
            ),
            children: [ce, G],
          },
          he = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: Q }, children: wg(j) },
              pe,
            ],
          };
        return (
          o.push(he, {
            tag: "rect",
            attributes: z(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(Q, ")"),
                mask: "url(#".concat(me, ")"),
              },
              Cs,
            ),
          }),
          { children: o, attributes: u }
        );
      };
    },
  },
  kg = {
    provides(r) {
      let a = !1;
      (Dn.matchMedia &&
        (a = Dn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (r.missingIconAbstract = function () {
          const o = [],
            u = { fill: "currentColor" },
            f = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          o.push({
            tag: "path",
            attributes: z(
              z({}, u),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              },
            ),
          });
          const d = z(z({}, f), {}, { attributeName: "opacity" }),
            m = {
              tag: "circle",
              attributes: z(z({}, u), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            a ||
              m.children.push(
                {
                  tag: "animate",
                  attributes: z(
                    z({}, f),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" },
                  ),
                },
                {
                  tag: "animate",
                  attributes: z(z({}, d), {}, { values: "1;0;1;1;0;1;" }),
                },
              ),
            o.push(m),
            o.push({
              tag: "path",
              attributes: z(
                z({}, u),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                },
              ),
              children: a
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: z(z({}, d), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            a ||
              o.push({
                tag: "path",
                attributes: z(
                  z({}, u),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  },
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: z(z({}, d), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: o }
          );
        }));
    },
  },
  Sg = {
    hooks() {
      return {
        parseNodeAttributes(r, a) {
          const o = a.getAttribute("data-fa-symbol"),
            u = o === null ? !1 : o === "" ? !0 : o;
          return ((r.symbol = u), r);
        },
      };
    },
  },
  _g = [h2, og, ag, sg, ug, gg, yg, vg, xg, kg, Sg];
I2(_g, { mixoutsTo: Pt });
Pt.noAuto;
Pt.config;
Pt.library;
Pt.dom;
const Ys = Pt.parse;
Pt.findIconDefinition;
Pt.toHtml;
const Eg = Pt.icon;
Pt.layer;
Pt.text;
Pt.counter;
function bd(r, a) {
  var o = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    (a &&
      (u = u.filter(function (f) {
        return Object.getOwnPropertyDescriptor(r, f).enumerable;
      })),
      o.push.apply(o, u));
  }
  return o;
}
function qt(r) {
  for (var a = 1; a < arguments.length; a++) {
    var o = arguments[a] != null ? arguments[a] : {};
    a % 2
      ? bd(Object(o), !0).forEach(function (u) {
          Mr(r, u, o[u]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o))
        : bd(Object(o)).forEach(function (u) {
            Object.defineProperty(r, u, Object.getOwnPropertyDescriptor(o, u));
          });
  }
  return r;
}
function so(r) {
  "@babel/helpers - typeof";
  return (
    (so =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (a) {
            return typeof a;
          }
        : function (a) {
            return a &&
              typeof Symbol == "function" &&
              a.constructor === Symbol &&
              a !== Symbol.prototype
              ? "symbol"
              : typeof a;
          }),
    so(r)
  );
}
function Mr(r, a, o) {
  return (
    a in r
      ? Object.defineProperty(r, a, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (r[a] = o),
    r
  );
}
function Cg(r, a) {
  if (r == null) return {};
  var o = {},
    u = Object.keys(r),
    f,
    d;
  for (d = 0; d < u.length; d++)
    ((f = u[d]), !(a.indexOf(f) >= 0) && (o[f] = r[f]));
  return o;
}
function Pg(r, a) {
  if (r == null) return {};
  var o = Cg(r, a),
    u,
    f;
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(r);
    for (f = 0; f < d.length; f++)
      ((u = d[f]),
        !(a.indexOf(u) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(r, u) &&
          (o[u] = r[u]));
  }
  return o;
}
function Qs(r) {
  return Ng(r) || Og(r) || Ag(r) || Tg();
}
function Ng(r) {
  if (Array.isArray(r)) return Ks(r);
}
function Og(r) {
  if (
    (typeof Symbol < "u" && r[Symbol.iterator] != null) ||
    r["@@iterator"] != null
  )
    return Array.from(r);
}
function Ag(r, a) {
  if (r) {
    if (typeof r == "string") return Ks(r, a);
    var o = Object.prototype.toString.call(r).slice(8, -1);
    if (
      (o === "Object" && r.constructor && (o = r.constructor.name),
      o === "Map" || o === "Set")
    )
      return Array.from(r);
    if (o === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return Ks(r, a);
  }
}
function Ks(r, a) {
  (a == null || a > r.length) && (a = r.length);
  for (var o = 0, u = new Array(a); o < a; o++) u[o] = r[o];
  return u;
}
function Tg() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Fg(r) {
  var a,
    o = r.beat,
    u = r.fade,
    f = r.beatFade,
    d = r.bounce,
    m = r.shake,
    v = r.flash,
    P = r.spin,
    F = r.spinPulse,
    A = r.spinReverse,
    j = r.pulse,
    V = r.fixedWidth,
    ce = r.inverse,
    fe = r.border,
    te = r.listItem,
    G = r.flip,
    me = r.size,
    Q = r.rotation,
    pe = r.pull,
    he =
      ((a = {
        "fa-beat": o,
        "fa-fade": u,
        "fa-beat-fade": f,
        "fa-bounce": d,
        "fa-shake": m,
        "fa-flash": v,
        "fa-spin": P,
        "fa-spin-reverse": A,
        "fa-spin-pulse": F,
        "fa-pulse": j,
        "fa-fw": V,
        "fa-inverse": ce,
        "fa-border": fe,
        "fa-li": te,
        "fa-flip": G === !0,
        "fa-flip-horizontal": G === "horizontal" || G === "both",
        "fa-flip-vertical": G === "vertical" || G === "both",
      }),
      Mr(a, "fa-".concat(me), typeof me < "u" && me !== null),
      Mr(a, "fa-rotate-".concat(Q), typeof Q < "u" && Q !== null && Q !== 0),
      Mr(a, "fa-pull-".concat(pe), typeof pe < "u" && pe !== null),
      Mr(a, "fa-swap-opacity", r.swapOpacity),
      a);
  return Object.keys(he)
    .map(function (le) {
      return he[le] ? le : null;
    })
    .filter(function (le) {
      return le;
    });
}
function jg(r) {
  return ((r = r - 0), r === r);
}
function z1(r) {
  return jg(r)
    ? r
    : ((r = r.replace(/[\-_\s]+(.)?/g, function (a, o) {
        return o ? o.toUpperCase() : "";
      })),
      r.substr(0, 1).toLowerCase() + r.substr(1));
}
var Ig = ["style"];
function zg(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function Lg(r) {
  return r
    .split(";")
    .map(function (a) {
      return a.trim();
    })
    .filter(function (a) {
      return a;
    })
    .reduce(function (a, o) {
      var u = o.indexOf(":"),
        f = z1(o.slice(0, u)),
        d = o.slice(u + 1).trim();
      return (f.startsWith("webkit") ? (a[zg(f)] = d) : (a[f] = d), a);
    }, {});
}
function L1(r, a) {
  var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof a == "string") return a;
  var u = (a.children || []).map(function (P) {
      return L1(r, P);
    }),
    f = Object.keys(a.attributes || {}).reduce(
      function (P, F) {
        var A = a.attributes[F];
        switch (F) {
          case "class":
            ((P.attrs.className = A), delete a.attributes.class);
            break;
          case "style":
            P.attrs.style = Lg(A);
            break;
          default:
            F.indexOf("aria-") === 0 || F.indexOf("data-") === 0
              ? (P.attrs[F.toLowerCase()] = A)
              : (P.attrs[z1(F)] = A);
        }
        return P;
      },
      { attrs: {} },
    ),
    d = o.style,
    m = d === void 0 ? {} : d,
    v = Pg(o, Ig);
  return (
    (f.attrs.style = qt(qt({}, f.attrs.style), m)),
    r.apply(void 0, [a.tag, qt(qt({}, f.attrs), v)].concat(Qs(u)))
  );
}
var R1 = !1;
try {
  R1 = !0;
} catch {}
function Rg() {
  if (!R1 && console && typeof console.error == "function") {
    var r;
    (r = console).error.apply(r, arguments);
  }
}
function Vd(r) {
  if (r && so(r) === "object" && r.prefix && r.iconName && r.icon) return r;
  if (Ys.icon) return Ys.icon(r);
  if (r === null) return null;
  if (r && so(r) === "object" && r.prefix && r.iconName) return r;
  if (Array.isArray(r) && r.length === 2)
    return { prefix: r[0], iconName: r[1] };
  if (typeof r == "string") return { prefix: "fas", iconName: r };
}
function Ps(r, a) {
  return (Array.isArray(a) && a.length > 0) || (!Array.isArray(a) && a)
    ? Mr({}, r, a)
    : {};
}
var Ud = {
    border: !1,
    className: "",
    mask: null,
    maskId: null,
    fixedWidth: !1,
    inverse: !1,
    flip: !1,
    icon: null,
    listItem: !1,
    pull: null,
    pulse: !1,
    rotation: null,
    size: null,
    spin: !1,
    spinPulse: !1,
    spinReverse: !1,
    beat: !1,
    fade: !1,
    beatFade: !1,
    bounce: !1,
    shake: !1,
    symbol: !1,
    title: "",
    titleId: null,
    transform: null,
    swapOpacity: !1,
  },
  uu = De.forwardRef(function (r, a) {
    var o = qt(qt({}, Ud), r),
      u = o.icon,
      f = o.mask,
      d = o.symbol,
      m = o.className,
      v = o.title,
      P = o.titleId,
      F = o.maskId,
      A = Vd(u),
      j = Ps("classes", [].concat(Qs(Fg(o)), Qs((m || "").split(" ")))),
      V = Ps(
        "transform",
        typeof o.transform == "string"
          ? Ys.transform(o.transform)
          : o.transform,
      ),
      ce = Ps("mask", Vd(f)),
      fe = Eg(
        A,
        qt(
          qt(qt(qt({}, j), V), ce),
          {},
          { symbol: d, title: v, titleId: P, maskId: F },
        ),
      );
    if (!fe) return (Rg("Could not find icon", A), null);
    var te = fe.abstract,
      G = { ref: a };
    return (
      Object.keys(o).forEach(function (me) {
        Ud.hasOwnProperty(me) || (G[me] = o[me]);
      }),
      Mg(te[0], G)
    );
  });
uu.displayName = "FontAwesomeIcon";
uu.propTypes = {
  beat: se.bool,
  border: se.bool,
  beatFade: se.bool,
  bounce: se.bool,
  className: se.string,
  fade: se.bool,
  flash: se.bool,
  mask: se.oneOfType([se.object, se.array, se.string]),
  maskId: se.string,
  fixedWidth: se.bool,
  inverse: se.bool,
  flip: se.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: se.oneOfType([se.object, se.array, se.string]),
  listItem: se.bool,
  pull: se.oneOf(["right", "left"]),
  pulse: se.bool,
  rotation: se.oneOf([0, 90, 180, 270]),
  shake: se.bool,
  size: se.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: se.bool,
  spinPulse: se.bool,
  spinReverse: se.bool,
  symbol: se.oneOfType([se.bool, se.string]),
  title: se.string,
  titleId: se.string,
  transform: se.oneOfType([se.string, se.object]),
  swapOpacity: se.bool,
};
var Mg = L1.bind(null, De.createElement);
/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */ const Dg = {
    prefix: "fab",
    iconName: "instagram",
    icon: [
      448,
      512,
      [],
      "f16d",
      "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    ],
  },
  bg = {
    prefix: "fab",
    iconName: "facebook",
    icon: [
      512,
      512,
      [62e3],
      "f09a",
      "M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z",
    ],
  },
  Vg = {
    prefix: "fab",
    iconName: "github",
    icon: [
      496,
      512,
      [],
      "f09b",
      "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
    ],
  },
  Ug = {
    prefix: "fab",
    iconName: "youtube",
    icon: [
      576,
      512,
      [61802],
      "f167",
      "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
    ],
  },
  Wg = {
    prefix: "fab",
    iconName: "twitter",
    icon: [
      512,
      512,
      [],
      "f099",
      "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    ],
  };
function Bg() {
  const r = [
    {
      id: 1,
      href: "https://www.youtube.com/c/learnbuildteach",
      icon: Ug,
      label: "YouTube",
    },
    {
      id: 2,
      href: "https://www.facebook.com/learnbuildteach",
      icon: bg,
      label: "Facebook",
    },
    {
      id: 3,
      href: "https://www.twitter.com/jamesqquick",
      icon: Wg,
      label: "Twitter",
    },
    {
      id: 4,
      href: "https://www.instagram.com/c/learnbuildteach",
      icon: Dg,
      label: "Instagram",
    },
    {
      id: 5,
      href: "https://www.github.com/c/learnbuildteach",
      icon: Vg,
      label: "GitHub",
    },
  ];
  return C.jsx(C.Fragment, {
    children: C.jsxs("nav", {
      className: xs["icon-container"],
      children: [
        C.jsx("h3", {
          className: xs["social-container-title"],
          children: "Social media Links",
        }),
        r.map((a) =>
          C.jsx(
            "a",
            {
              href: a.href,
              className: xs["social-container-icon-link"],
              target: "_blank",
              rel: "noopener noreferrer",
              children: C.jsx(uu, { icon: a.icon, size: "2x" }),
            },
            a.id,
          ),
        ),
      ],
    }),
  });
}
function Hg() {
  return C.jsx(C.Fragment, {
    children: C.jsx("footer", {
      className: ws.footer,
      children: C.jsxs("div", {
        className: ws.footerContents,
        children: [
          C.jsx(Bg, {}),
          C.jsxs("p", {
            className: ws.dynocopy,
            children: [
              "@",
              C.jsx("time", { children: new Date().getFullYear() }),
              " All rights reserved",
            ],
          }),
        ],
      }),
    }),
  });
}
var Ri = (r) => r.type === "checkbox",
  lr = (r) => r instanceof Date,
  pt = (r) => r == null;
const M1 = (r) => typeof r == "object";
var Ye = (r) => !pt(r) && !Array.isArray(r) && M1(r) && !lr(r),
  $g = (r) =>
    Ye(r) && r.target ? (Ri(r.target) ? r.target.checked : r.target.value) : r,
  Yg = (r) => r.substring(0, r.search(/\.\d+(\.|$)/)) || r,
  Qg = (r, a) => r.has(Yg(a)),
  Kg = (r) => {
    const a = r.constructor && r.constructor.prototype;
    return Ye(a) && a.hasOwnProperty("isPrototypeOf");
  },
  cu =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function zt(r) {
  let a;
  const o = Array.isArray(r),
    u = typeof FileList < "u" ? r instanceof FileList : !1;
  if (r instanceof Date) a = new Date(r);
  else if (r instanceof Set) a = new Set(r);
  else if (!(cu && (r instanceof Blob || u)) && (o || Ye(r)))
    if (((a = o ? [] : {}), !o && !Kg(r))) a = r;
    else for (const f in r) r.hasOwnProperty(f) && (a[f] = zt(r[f]));
  else return r;
  return a;
}
var vo = (r) => (Array.isArray(r) ? r.filter(Boolean) : []),
  Ke = (r) => r === void 0,
  $ = (r, a, o) => {
    if (!a || !Ye(r)) return o;
    const u = vo(a.split(/[,[\].]+?/)).reduce((f, d) => (pt(f) ? f : f[d]), r);
    return Ke(u) || u === r ? (Ke(r[a]) ? o : r[a]) : u;
  },
  Xt = (r) => typeof r == "boolean",
  fu = (r) => /^\w*$/.test(r),
  D1 = (r) => vo(r.replace(/["|']|\]/g, "").split(/\.|\[/)),
  Fe = (r, a, o) => {
    let u = -1;
    const f = fu(a) ? [a] : D1(a),
      d = f.length,
      m = d - 1;
    for (; ++u < d; ) {
      const v = f[u];
      let P = o;
      if (u !== m) {
        const F = r[v];
        P = Ye(F) || Array.isArray(F) ? F : isNaN(+f[u + 1]) ? {} : [];
      }
      if (v === "__proto__" || v === "constructor" || v === "prototype") return;
      ((r[v] = P), (r = r[v]));
    }
    return r;
  };
const Wd = { BLUR: "blur", FOCUS_OUT: "focusout" },
  Wt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  pn = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  };
De.createContext(null);
var Gg = (r, a, o, u = !0) => {
    const f = { defaultValues: a._defaultValues };
    for (const d in r)
      Object.defineProperty(f, d, {
        get: () => {
          const m = d;
          return (
            a._proxyFormState[m] !== Wt.all &&
              (a._proxyFormState[m] = !u || Wt.all),
            r[m]
          );
        },
      });
    return f;
  },
  xt = (r) => Ye(r) && !Object.keys(r).length,
  Xg = (r, a, o, u) => {
    o(r);
    const { name: f, ...d } = r;
    return (
      xt(d) ||
      Object.keys(d).length >= Object.keys(a).length ||
      Object.keys(d).find((m) => a[m] === Wt.all)
    );
  },
  no = (r) => (Array.isArray(r) ? r : [r]);
function qg(r) {
  const a = De.useRef(r);
  ((a.current = r),
    De.useEffect(() => {
      const o =
        !r.disabled &&
        a.current.subject &&
        a.current.subject.subscribe({ next: a.current.next });
      return () => {
        o && o.unsubscribe();
      };
    }, [r.disabled]));
}
var tn = (r) => typeof r == "string",
  Zg = (r, a, o, u, f) =>
    tn(r)
      ? (u && a.watch.add(r), $(o, r, f))
      : Array.isArray(r)
        ? r.map((d) => (u && a.watch.add(d), $(o, d)))
        : (u && (a.watchAll = !0), o),
  Jg = (r, a, o, u, f) =>
    a
      ? {
          ...o[r],
          types: { ...(o[r] && o[r].types ? o[r].types : {}), [u]: f || !0 },
        }
      : {},
  Bd = (r) => ({
    isOnSubmit: !r || r === Wt.onSubmit,
    isOnBlur: r === Wt.onBlur,
    isOnChange: r === Wt.onChange,
    isOnAll: r === Wt.all,
    isOnTouch: r === Wt.onTouched,
  }),
  Hd = (r, a, o) =>
    !o &&
    (a.watchAll ||
      a.watch.has(r) ||
      [...a.watch].some(
        (u) => r.startsWith(u) && /^\.\w+/.test(r.slice(u.length)),
      ));
const Fi = (r, a, o, u) => {
  for (const f of o || Object.keys(r)) {
    const d = $(r, f);
    if (d) {
      const { _f: m, ...v } = d;
      if (m) {
        if (m.refs && m.refs[0] && a(m.refs[0], f) && !u) return !0;
        if (m.ref && a(m.ref, m.name) && !u) return !0;
        if (Fi(v, a)) break;
      } else if (Ye(v) && Fi(v, a)) break;
    }
  }
};
var ey = (r, a, o) => {
    const u = no($(r, o));
    return (Fe(u, "root", a[o]), Fe(r, o, u), r);
  },
  du = (r) => r.type === "file",
  Zt = (r) => typeof r == "function",
  uo = (r) => {
    if (!cu) return !1;
    const a = r ? r.ownerDocument : 0;
    return (
      r instanceof
      (a && a.defaultView ? a.defaultView.HTMLElement : HTMLElement)
    );
  },
  ro = (r) => tn(r),
  pu = (r) => r.type === "radio",
  co = (r) => r instanceof RegExp;
const $d = { value: !1, isValid: !1 },
  Yd = { value: !0, isValid: !0 };
var b1 = (r) => {
  if (Array.isArray(r)) {
    if (r.length > 1) {
      const a = r
        .filter((o) => o && o.checked && !o.disabled)
        .map((o) => o.value);
      return { value: a, isValid: !!a.length };
    }
    return r[0].checked && !r[0].disabled
      ? r[0].attributes && !Ke(r[0].attributes.value)
        ? Ke(r[0].value) || r[0].value === ""
          ? Yd
          : { value: r[0].value, isValid: !0 }
        : Yd
      : $d;
  }
  return $d;
};
const Qd = { isValid: !1, value: null };
var V1 = (r) =>
  Array.isArray(r)
    ? r.reduce(
        (a, o) =>
          o && o.checked && !o.disabled ? { isValid: !0, value: o.value } : a,
        Qd,
      )
    : Qd;
function Kd(r, a, o = "validate") {
  if (ro(r) || (Array.isArray(r) && r.every(ro)) || (Xt(r) && !r))
    return { type: o, message: ro(r) ? r : "", ref: a };
}
var Lr = (r) => (Ye(r) && !co(r) ? r : { value: r, message: "" }),
  Gd = async (r, a, o, u, f, d) => {
    const {
        ref: m,
        refs: v,
        required: P,
        maxLength: F,
        minLength: A,
        min: j,
        max: V,
        pattern: ce,
        validate: fe,
        name: te,
        valueAsNumber: G,
        mount: me,
      } = r._f,
      Q = $(o, te);
    if (!me || a.has(te)) return {};
    const pe = v ? v[0] : m,
      he = (ne) => {
        f &&
          pe.reportValidity &&
          (pe.setCustomValidity(Xt(ne) ? "" : ne || ""), pe.reportValidity());
      },
      le = {},
      Ie = pu(m),
      Le = Ri(m),
      be = Ie || Le,
      st =
        ((G || du(m)) && Ke(m.value) && Ke(Q)) ||
        (uo(m) && m.value === "") ||
        Q === "" ||
        (Array.isArray(Q) && !Q.length),
      Ve = Jg.bind(null, te, u, le),
      Nt = (ne, ie, Se, Ce = pn.maxLength, Ne = pn.minLength) => {
        const ye = ne ? ie : Se;
        le[te] = {
          type: ne ? Ce : Ne,
          message: ye,
          ref: m,
          ...Ve(ne ? Ce : Ne, ye),
        };
      };
    if (
      d
        ? !Array.isArray(Q) || !Q.length
        : P &&
          ((!be && (st || pt(Q))) ||
            (Xt(Q) && !Q) ||
            (Le && !b1(v).isValid) ||
            (Ie && !V1(v).isValid))
    ) {
      const { value: ne, message: ie } = ro(P)
        ? { value: !!P, message: P }
        : Lr(P);
      if (
        ne &&
        ((le[te] = {
          type: pn.required,
          message: ie,
          ref: pe,
          ...Ve(pn.required, ie),
        }),
        !u)
      )
        return (he(ie), le);
    }
    if (!st && (!pt(j) || !pt(V))) {
      let ne, ie;
      const Se = Lr(V),
        Ce = Lr(j);
      if (!pt(Q) && !isNaN(Q)) {
        const Ne = m.valueAsNumber || (Q && +Q);
        (pt(Se.value) || (ne = Ne > Se.value),
          pt(Ce.value) || (ie = Ne < Ce.value));
      } else {
        const Ne = m.valueAsDate || new Date(Q),
          ye = (U) => new Date(new Date().toDateString() + " " + U),
          D = m.type == "time",
          q = m.type == "week";
        (tn(Se.value) &&
          Q &&
          (ne = D
            ? ye(Q) > ye(Se.value)
            : q
              ? Q > Se.value
              : Ne > new Date(Se.value)),
          tn(Ce.value) &&
            Q &&
            (ie = D
              ? ye(Q) < ye(Ce.value)
              : q
                ? Q < Ce.value
                : Ne < new Date(Ce.value)));
      }
      if ((ne || ie) && (Nt(!!ne, Se.message, Ce.message, pn.max, pn.min), !u))
        return (he(le[te].message), le);
    }
    if ((F || A) && !st && (tn(Q) || (d && Array.isArray(Q)))) {
      const ne = Lr(F),
        ie = Lr(A),
        Se = !pt(ne.value) && Q.length > +ne.value,
        Ce = !pt(ie.value) && Q.length < +ie.value;
      if ((Se || Ce) && (Nt(Se, ne.message, ie.message), !u))
        return (he(le[te].message), le);
    }
    if (ce && !st && tn(Q)) {
      const { value: ne, message: ie } = Lr(ce);
      if (
        co(ne) &&
        !Q.match(ne) &&
        ((le[te] = {
          type: pn.pattern,
          message: ie,
          ref: m,
          ...Ve(pn.pattern, ie),
        }),
        !u)
      )
        return (he(ie), le);
    }
    if (fe) {
      if (Zt(fe)) {
        const ne = await fe(Q, o),
          ie = Kd(ne, pe);
        if (ie && ((le[te] = { ...ie, ...Ve(pn.validate, ie.message) }), !u))
          return (he(ie.message), le);
      } else if (Ye(fe)) {
        let ne = {};
        for (const ie in fe) {
          if (!xt(ne) && !u) break;
          const Se = Kd(await fe[ie](Q, o), pe, ie);
          Se &&
            ((ne = { ...Se, ...Ve(ie, Se.message) }),
            he(Se.message),
            u && (le[te] = ne));
        }
        if (!xt(ne) && ((le[te] = { ref: pe, ...ne }), !u)) return le;
      }
    }
    return (he(!0), le);
  };
function ty(r, a) {
  const o = a.slice(0, -1).length;
  let u = 0;
  for (; u < o; ) r = Ke(r) ? u++ : r[a[u++]];
  return r;
}
function ny(r) {
  for (const a in r) if (r.hasOwnProperty(a) && !Ke(r[a])) return !1;
  return !0;
}
function qe(r, a) {
  const o = Array.isArray(a) ? a : fu(a) ? [a] : D1(a),
    u = o.length === 1 ? r : ty(r, o),
    f = o.length - 1,
    d = o[f];
  return (
    u && delete u[d],
    f !== 0 &&
      ((Ye(u) && xt(u)) || (Array.isArray(u) && ny(u))) &&
      qe(r, o.slice(0, -1)),
    r
  );
}
var Ns = () => {
    let r = [];
    return {
      get observers() {
        return r;
      },
      next: (f) => {
        for (const d of r) d.next && d.next(f);
      },
      subscribe: (f) => (
        r.push(f),
        {
          unsubscribe: () => {
            r = r.filter((d) => d !== f);
          },
        }
      ),
      unsubscribe: () => {
        r = [];
      },
    };
  },
  Gs = (r) => pt(r) || !M1(r);
function Mn(r, a) {
  if (Gs(r) || Gs(a)) return r === a;
  if (lr(r) && lr(a)) return r.getTime() === a.getTime();
  const o = Object.keys(r),
    u = Object.keys(a);
  if (o.length !== u.length) return !1;
  for (const f of o) {
    const d = r[f];
    if (!u.includes(f)) return !1;
    if (f !== "ref") {
      const m = a[f];
      if (
        (lr(d) && lr(m)) ||
        (Ye(d) && Ye(m)) ||
        (Array.isArray(d) && Array.isArray(m))
          ? !Mn(d, m)
          : d !== m
      )
        return !1;
    }
  }
  return !0;
}
var U1 = (r) => r.type === "select-multiple",
  ry = (r) => pu(r) || Ri(r),
  Os = (r) => uo(r) && r.isConnected,
  W1 = (r) => {
    for (const a in r) if (Zt(r[a])) return !0;
    return !1;
  };
function fo(r, a = {}) {
  const o = Array.isArray(r);
  if (Ye(r) || o)
    for (const u in r)
      Array.isArray(r[u]) || (Ye(r[u]) && !W1(r[u]))
        ? ((a[u] = Array.isArray(r[u]) ? [] : {}), fo(r[u], a[u]))
        : pt(r[u]) || (a[u] = !0);
  return a;
}
function B1(r, a, o) {
  const u = Array.isArray(r);
  if (Ye(r) || u)
    for (const f in r)
      Array.isArray(r[f]) || (Ye(r[f]) && !W1(r[f]))
        ? Ke(a) || Gs(o[f])
          ? (o[f] = Array.isArray(r[f]) ? fo(r[f], []) : { ...fo(r[f]) })
          : B1(r[f], pt(a) ? {} : a[f], o[f])
        : (o[f] = !Mn(r[f], a[f]));
  return o;
}
var Ci = (r, a) => B1(r, a, fo(a)),
  H1 = (r, { valueAsNumber: a, valueAsDate: o, setValueAs: u }) =>
    Ke(r)
      ? r
      : a
        ? r === ""
          ? NaN
          : r && +r
        : o && tn(r)
          ? new Date(r)
          : u
            ? u(r)
            : r;
function As(r) {
  const a = r.ref;
  return du(a)
    ? a.files
    : pu(a)
      ? V1(r.refs).value
      : U1(a)
        ? [...a.selectedOptions].map(({ value: o }) => o)
        : Ri(a)
          ? b1(r.refs).value
          : H1(Ke(a.value) ? r.ref.value : a.value, r);
}
var iy = (r, a, o, u) => {
    const f = {};
    for (const d of r) {
      const m = $(a, d);
      m && Fe(f, d, m._f);
    }
    return {
      criteriaMode: o,
      names: [...r],
      fields: f,
      shouldUseNativeValidation: u,
    };
  },
  Pi = (r) =>
    Ke(r)
      ? r
      : co(r)
        ? r.source
        : Ye(r)
          ? co(r.value)
            ? r.value.source
            : r.value
          : r;
const Xd = "AsyncFunction";
var ly = (r) =>
    !!r &&
    !!r.validate &&
    !!(
      (Zt(r.validate) && r.validate.constructor.name === Xd) ||
      (Ye(r.validate) &&
        Object.values(r.validate).find((a) => a.constructor.name === Xd))
    ),
  oy = (r) =>
    r.mount &&
    (r.required ||
      r.min ||
      r.max ||
      r.maxLength ||
      r.minLength ||
      r.pattern ||
      r.validate);
function qd(r, a, o) {
  const u = $(r, o);
  if (u || fu(o)) return { error: u, name: o };
  const f = o.split(".");
  for (; f.length; ) {
    const d = f.join("."),
      m = $(a, d),
      v = $(r, d);
    if (m && !Array.isArray(m) && o !== d) return { name: o };
    if (v && v.type) return { name: d, error: v };
    f.pop();
  }
  return { name: o };
}
var ay = (r, a, o, u, f) =>
    f.isOnAll
      ? !1
      : !o && f.isOnTouch
        ? !(a || r)
        : (o ? u.isOnBlur : f.isOnBlur)
          ? !r
          : (o ? u.isOnChange : f.isOnChange)
            ? r
            : !0,
  sy = (r, a) => !vo($(r, a)).length && qe(r, a);
const uy = {
  mode: Wt.onSubmit,
  reValidateMode: Wt.onChange,
  shouldFocusError: !0,
};
function cy(r = {}) {
  let a = { ...uy, ...r },
    o = {
      submitCount: 0,
      isDirty: !1,
      isLoading: Zt(a.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: a.errors || {},
      disabled: a.disabled || !1,
    },
    u = {},
    f =
      Ye(a.defaultValues) || Ye(a.values)
        ? zt(a.defaultValues || a.values) || {}
        : {},
    d = a.shouldUnregister ? {} : zt(f),
    m = { action: !1, mount: !1, watch: !1 },
    v = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    P,
    F = 0;
  const A = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    j = { values: Ns(), array: Ns(), state: Ns() },
    V = Bd(a.mode),
    ce = Bd(a.reValidateMode),
    fe = a.criteriaMode === Wt.all,
    te = (g) => (S) => {
      (clearTimeout(F), (F = setTimeout(g, S)));
    },
    G = async (g) => {
      if (!a.disabled && (A.isValid || g)) {
        const S = a.resolver ? xt((await be()).errors) : await Ve(u, !0);
        S !== o.isValid && j.state.next({ isValid: S });
      }
    },
    me = (g, S) => {
      !a.disabled &&
        (A.isValidating || A.validatingFields) &&
        ((g || Array.from(v.mount)).forEach((E) => {
          E && (S ? Fe(o.validatingFields, E, S) : qe(o.validatingFields, E));
        }),
        j.state.next({
          validatingFields: o.validatingFields,
          isValidating: !xt(o.validatingFields),
        }));
    },
    Q = (g, S = [], E, b, M = !0, R = !0) => {
      if (b && E && !a.disabled) {
        if (((m.action = !0), R && Array.isArray($(u, g)))) {
          const Z = E($(u, g), b.argA, b.argB);
          M && Fe(u, g, Z);
        }
        if (R && Array.isArray($(o.errors, g))) {
          const Z = E($(o.errors, g), b.argA, b.argB);
          (M && Fe(o.errors, g, Z), sy(o.errors, g));
        }
        if (A.touchedFields && R && Array.isArray($(o.touchedFields, g))) {
          const Z = E($(o.touchedFields, g), b.argA, b.argB);
          M && Fe(o.touchedFields, g, Z);
        }
        (A.dirtyFields && (o.dirtyFields = Ci(f, d)),
          j.state.next({
            name: g,
            isDirty: ne(g, S),
            dirtyFields: o.dirtyFields,
            errors: o.errors,
            isValid: o.isValid,
          }));
      } else Fe(d, g, S);
    },
    pe = (g, S) => {
      (Fe(o.errors, g, S), j.state.next({ errors: o.errors }));
    },
    he = (g) => {
      ((o.errors = g), j.state.next({ errors: o.errors, isValid: !1 }));
    },
    le = (g, S, E, b) => {
      const M = $(u, g);
      if (M) {
        const R = $(d, g, Ke(E) ? $(f, g) : E);
        (Ke(R) || (b && b.defaultChecked) || S
          ? Fe(d, g, S ? R : As(M._f))
          : Ce(g, R),
          m.mount && G());
      }
    },
    Ie = (g, S, E, b, M) => {
      let R = !1,
        Z = !1;
      const ae = { name: g };
      if (!a.disabled) {
        const Be = !!($(u, g) && $(u, g)._f && $(u, g)._f.disabled);
        if (!E || b) {
          A.isDirty &&
            ((Z = o.isDirty),
            (o.isDirty = ae.isDirty = ne()),
            (R = Z !== ae.isDirty));
          const Ue = Be || Mn($(f, g), S);
          ((Z = !!(!Be && $(o.dirtyFields, g))),
            Ue || Be ? qe(o.dirtyFields, g) : Fe(o.dirtyFields, g, !0),
            (ae.dirtyFields = o.dirtyFields),
            (R = R || (A.dirtyFields && Z !== !Ue)));
        }
        if (E) {
          const Ue = $(o.touchedFields, g);
          Ue ||
            (Fe(o.touchedFields, g, E),
            (ae.touchedFields = o.touchedFields),
            (R = R || (A.touchedFields && Ue !== E)));
        }
        R && M && j.state.next(ae);
      }
      return R ? ae : {};
    },
    Le = (g, S, E, b) => {
      const M = $(o.errors, g),
        R = A.isValid && Xt(S) && o.isValid !== S;
      if (
        (a.delayError && E
          ? ((P = te(() => pe(g, E))), P(a.delayError))
          : (clearTimeout(F),
            (P = null),
            E ? Fe(o.errors, g, E) : qe(o.errors, g)),
        (E ? !Mn(M, E) : M) || !xt(b) || R)
      ) {
        const Z = {
          ...b,
          ...(R && Xt(S) ? { isValid: S } : {}),
          errors: o.errors,
          name: g,
        };
        ((o = { ...o, ...Z }), j.state.next(Z));
      }
    },
    be = async (g) => {
      me(g, !0);
      const S = await a.resolver(
        d,
        a.context,
        iy(g || v.mount, u, a.criteriaMode, a.shouldUseNativeValidation),
      );
      return (me(g), S);
    },
    st = async (g) => {
      const { errors: S } = await be(g);
      if (g)
        for (const E of g) {
          const b = $(S, E);
          b ? Fe(o.errors, E, b) : qe(o.errors, E);
        }
      else o.errors = S;
      return S;
    },
    Ve = async (g, S, E = { valid: !0 }) => {
      for (const b in g) {
        const M = g[b];
        if (M) {
          const { _f: R, ...Z } = M;
          if (R) {
            const ae = v.array.has(R.name),
              Be = M._f && ly(M._f);
            Be && A.validatingFields && me([b], !0);
            const Ue = await Gd(
              M,
              v.disabled,
              d,
              fe,
              a.shouldUseNativeValidation && !S,
              ae,
            );
            if (
              (Be && A.validatingFields && me([b]),
              Ue[R.name] && ((E.valid = !1), S))
            )
              break;
            !S &&
              ($(Ue, R.name)
                ? ae
                  ? ey(o.errors, Ue, R.name)
                  : Fe(o.errors, R.name, Ue[R.name])
                : qe(o.errors, R.name));
          }
          !xt(Z) && (await Ve(Z, S, E));
        }
      }
      return E.valid;
    },
    Nt = () => {
      for (const g of v.unMount) {
        const S = $(u, g);
        S &&
          (S._f.refs ? S._f.refs.every((E) => !Os(E)) : !Os(S._f.ref)) &&
          ge(g);
      }
      v.unMount = new Set();
    },
    ne = (g, S) => !a.disabled && (g && S && Fe(d, g, S), !Mn(w(), f)),
    ie = (g, S, E) =>
      Zg(g, v, { ...(m.mount ? d : Ke(S) ? f : tn(g) ? { [g]: S } : S) }, E, S),
    Se = (g) =>
      vo($(m.mount ? d : f, g, a.shouldUnregister ? $(f, g, []) : [])),
    Ce = (g, S, E = {}) => {
      const b = $(u, g);
      let M = S;
      if (b) {
        const R = b._f;
        R &&
          (!R.disabled && Fe(d, g, H1(S, R)),
          (M = uo(R.ref) && pt(S) ? "" : S),
          U1(R.ref)
            ? [...R.ref.options].forEach(
                (Z) => (Z.selected = M.includes(Z.value)),
              )
            : R.refs
              ? Ri(R.ref)
                ? R.refs.length > 1
                  ? R.refs.forEach(
                      (Z) =>
                        (!Z.defaultChecked || !Z.disabled) &&
                        (Z.checked = Array.isArray(M)
                          ? !!M.find((ae) => ae === Z.value)
                          : M === Z.value),
                    )
                  : R.refs[0] && (R.refs[0].checked = !!M)
                : R.refs.forEach((Z) => (Z.checked = Z.value === M))
              : du(R.ref)
                ? (R.ref.value = "")
                : ((R.ref.value = M),
                  R.ref.type || j.values.next({ name: g, values: { ...d } })));
      }
      ((E.shouldDirty || E.shouldTouch) &&
        Ie(g, M, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && U(g));
    },
    Ne = (g, S, E) => {
      for (const b in S) {
        const M = S[b],
          R = `${g}.${b}`,
          Z = $(u, R);
        (v.array.has(g) || Ye(M) || (Z && !Z._f)) && !lr(M)
          ? Ne(R, M, E)
          : Ce(R, M, E);
      }
    },
    ye = (g, S, E = {}) => {
      const b = $(u, g),
        M = v.array.has(g),
        R = zt(S);
      (Fe(d, g, R),
        M
          ? (j.array.next({ name: g, values: { ...d } }),
            (A.isDirty || A.dirtyFields) &&
              E.shouldDirty &&
              j.state.next({
                name: g,
                dirtyFields: Ci(f, d),
                isDirty: ne(g, R),
              }))
          : b && !b._f && !pt(R)
            ? Ne(g, R, E)
            : Ce(g, R, E),
        Hd(g, v) && j.state.next({ ...o }),
        j.values.next({ name: m.mount ? g : void 0, values: { ...d } }));
    },
    D = async (g) => {
      m.mount = !0;
      const S = g.target;
      let E = S.name,
        b = !0;
      const M = $(u, E),
        R = () => (S.type ? As(M._f) : $g(g)),
        Z = (ae) => {
          b =
            Number.isNaN(ae) ||
            (lr(ae) && isNaN(ae.getTime())) ||
            Mn(ae, $(d, E, ae));
        };
      if (M) {
        let ae, Be;
        const Ue = R(),
          kt = g.type === Wd.BLUR || g.type === Wd.FOCUS_OUT,
          bi =
            (!oy(M._f) && !a.resolver && !$(o.errors, E) && !M._f.deps) ||
            ay(kt, $(o.touchedFields, E), o.isSubmitted, ce, V),
          nn = Hd(E, v, kt);
        (Fe(d, E, Ue),
          kt
            ? (M._f.onBlur && M._f.onBlur(g), P && P(0))
            : M._f.onChange && M._f.onChange(g));
        const rn = Ie(E, Ue, kt, !1),
          ko = !xt(rn) || nn;
        if (
          (!kt && j.values.next({ name: E, type: g.type, values: { ...d } }),
          bi)
        )
          return (
            A.isValid && (a.mode === "onBlur" && kt ? G() : kt || G()),
            ko && j.state.next({ name: E, ...(nn ? {} : rn) })
          );
        if ((!kt && nn && j.state.next({ ...o }), a.resolver)) {
          const { errors: Ur } = await be([E]);
          if ((Z(Ue), b)) {
            const Vi = qd(o.errors, u, E),
              Ui = qd(Ur, u, Vi.name || E);
            ((ae = Ui.error), (E = Ui.name), (Be = xt(Ur)));
          }
        } else
          (me([E], !0),
            (ae = (await Gd(M, v.disabled, d, fe, a.shouldUseNativeValidation))[
              E
            ]),
            me([E]),
            Z(Ue),
            b && (ae ? (Be = !1) : A.isValid && (Be = await Ve(u, !0))));
        b && (M._f.deps && U(M._f.deps), Le(E, Be, ae, rn));
      }
    },
    q = (g, S) => {
      if ($(o.errors, S) && g.focus) return (g.focus(), 1);
    },
    U = async (g, S = {}) => {
      let E, b;
      const M = no(g);
      if (a.resolver) {
        const R = await st(Ke(g) ? g : M);
        ((E = xt(R)), (b = g ? !M.some((Z) => $(R, Z)) : E));
      } else
        g
          ? ((b = (
              await Promise.all(
                M.map(async (R) => {
                  const Z = $(u, R);
                  return await Ve(Z && Z._f ? { [R]: Z } : Z);
                }),
              )
            ).every(Boolean)),
            !(!b && !o.isValid) && G())
          : (b = E = await Ve(u));
      return (
        j.state.next({
          ...(!tn(g) || (A.isValid && E !== o.isValid) ? {} : { name: g }),
          ...(a.resolver || !g ? { isValid: E } : {}),
          errors: o.errors,
        }),
        S.shouldFocus && !b && Fi(u, q, g ? M : v.mount),
        b
      );
    },
    w = (g) => {
      const S = { ...(m.mount ? d : f) };
      return Ke(g) ? S : tn(g) ? $(S, g) : g.map((E) => $(S, E));
    },
    N = (g, S) => ({
      invalid: !!$((S || o).errors, g),
      isDirty: !!$((S || o).dirtyFields, g),
      error: $((S || o).errors, g),
      isValidating: !!$(o.validatingFields, g),
      isTouched: !!$((S || o).touchedFields, g),
    }),
    oe = (g) => {
      (g && no(g).forEach((S) => qe(o.errors, S)),
        j.state.next({ errors: g ? o.errors : {} }));
    },
    ue = (g, S, E) => {
      const b = ($(u, g, { _f: {} })._f || {}).ref,
        M = $(o.errors, g) || {},
        { ref: R, message: Z, type: ae, ...Be } = M;
      (Fe(o.errors, g, { ...Be, ...S, ref: b }),
        j.state.next({ name: g, errors: o.errors, isValid: !1 }),
        E && E.shouldFocus && b && b.focus && b.focus());
    },
    ve = (g, S) =>
      Zt(g)
        ? j.values.subscribe({ next: (E) => g(ie(void 0, S), E) })
        : ie(g, S, !0),
    ge = (g, S = {}) => {
      for (const E of g ? no(g) : v.mount)
        (v.mount.delete(E),
          v.array.delete(E),
          S.keepValue || (qe(u, E), qe(d, E)),
          !S.keepError && qe(o.errors, E),
          !S.keepDirty && qe(o.dirtyFields, E),
          !S.keepTouched && qe(o.touchedFields, E),
          !S.keepIsValidating && qe(o.validatingFields, E),
          !a.shouldUnregister && !S.keepDefaultValue && qe(f, E));
      (j.values.next({ values: { ...d } }),
        j.state.next({ ...o, ...(S.keepDirty ? { isDirty: ne() } : {}) }),
        !S.keepIsValid && G());
    },
    _e = ({ disabled: g, name: S, field: E, fields: b }) => {
      ((Xt(g) && m.mount) || g || v.disabled.has(S)) &&
        (g ? v.disabled.add(S) : v.disabled.delete(S),
        Ie(S, As(E ? E._f : $(b, S)._f), !1, !1, !0));
    },
    we = (g, S = {}) => {
      let E = $(u, g);
      const b = Xt(S.disabled) || Xt(a.disabled);
      return (
        Fe(u, g, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: g } }),
            name: g,
            mount: !0,
            ...S,
          },
        }),
        v.mount.add(g),
        E
          ? _e({
              field: E,
              disabled: Xt(S.disabled) ? S.disabled : a.disabled,
              name: g,
            })
          : le(g, !0, S.value),
        {
          ...(b ? { disabled: S.disabled || a.disabled } : {}),
          ...(a.progressive
            ? {
                required: !!S.required,
                min: Pi(S.min),
                max: Pi(S.max),
                minLength: Pi(S.minLength),
                maxLength: Pi(S.maxLength),
                pattern: Pi(S.pattern),
              }
            : {}),
          name: g,
          onChange: D,
          onBlur: D,
          ref: (M) => {
            if (M) {
              (we(g, S), (E = $(u, g)));
              const R =
                  (Ke(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                Z = ry(R),
                ae = E._f.refs || [];
              if (Z ? ae.find((Be) => Be === R) : R === E._f.ref) return;
              (Fe(u, g, {
                _f: {
                  ...E._f,
                  ...(Z
                    ? {
                        refs: [
                          ...ae.filter(Os),
                          R,
                          ...(Array.isArray($(f, g)) ? [{}] : []),
                        ],
                        ref: { type: R.type, name: g },
                      }
                    : { ref: R }),
                },
              }),
                le(g, !1, void 0, R));
            } else
              ((E = $(u, g, {})),
                E._f && (E._f.mount = !1),
                (a.shouldUnregister || S.shouldUnregister) &&
                  !(Qg(v.array, g) && m.action) &&
                  v.unMount.add(g));
          },
        }
      );
    },
    Pe = () => a.shouldFocusError && Fi(u, q, v.mount),
    ut = (g) => {
      Xt(g) &&
        (j.state.next({ disabled: g }),
        Fi(
          u,
          (S, E) => {
            const b = $(u, E);
            b &&
              ((S.disabled = b._f.disabled || g),
              Array.isArray(b._f.refs) &&
                b._f.refs.forEach((M) => {
                  M.disabled = b._f.disabled || g;
                }));
          },
          0,
          !1,
        ));
    },
    Wn = (g, S) => async (E) => {
      let b;
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let M = zt(d);
      if (v.disabled.size) for (const R of v.disabled) Fe(M, R, void 0);
      if ((j.state.next({ isSubmitting: !0 }), a.resolver)) {
        const { errors: R, values: Z } = await be();
        ((o.errors = R), (M = Z));
      } else await Ve(u);
      if ((qe(o.errors, "root"), xt(o.errors))) {
        j.state.next({ errors: {} });
        try {
          await g(M, E);
        } catch (R) {
          b = R;
        }
      } else (S && (await S({ ...o.errors }, E)), Pe(), setTimeout(Pe));
      if (
        (j.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: xt(o.errors) && !b,
          submitCount: o.submitCount + 1,
          errors: o.errors,
        }),
        b)
      )
        throw b;
    },
    Mi = (g, S = {}) => {
      $(u, g) &&
        (Ke(S.defaultValue)
          ? ye(g, zt($(f, g)))
          : (ye(g, S.defaultValue), Fe(f, g, zt(S.defaultValue))),
        S.keepTouched || qe(o.touchedFields, g),
        S.keepDirty ||
          (qe(o.dirtyFields, g),
          (o.isDirty = S.defaultValue ? ne(g, zt($(f, g))) : ne())),
        S.keepError || (qe(o.errors, g), A.isValid && G()),
        j.state.next({ ...o }));
    },
    Bn = (g, S = {}) => {
      const E = g ? zt(g) : f,
        b = zt(E),
        M = xt(g),
        R = M ? f : b;
      if ((S.keepDefaultValues || (f = E), !S.keepValues)) {
        if (S.keepDirtyValues) {
          const Z = new Set([...v.mount, ...Object.keys(Ci(f, d))]);
          for (const ae of Array.from(Z))
            $(o.dirtyFields, ae) ? Fe(R, ae, $(d, ae)) : ye(ae, $(R, ae));
        } else {
          if (cu && Ke(g))
            for (const Z of v.mount) {
              const ae = $(u, Z);
              if (ae && ae._f) {
                const Be = Array.isArray(ae._f.refs)
                  ? ae._f.refs[0]
                  : ae._f.ref;
                if (uo(Be)) {
                  const Ue = Be.closest("form");
                  if (Ue) {
                    Ue.reset();
                    break;
                  }
                }
              }
            }
          u = {};
        }
        ((d = a.shouldUnregister ? (S.keepDefaultValues ? zt(f) : {}) : zt(R)),
          j.array.next({ values: { ...R } }),
          j.values.next({ values: { ...R } }));
      }
      ((v = {
        mount: S.keepDirtyValues ? v.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (m.mount = !A.isValid || !!S.keepIsValid || !!S.keepDirtyValues),
        (m.watch = !!a.shouldUnregister),
        j.state.next({
          submitCount: S.keepSubmitCount ? o.submitCount : 0,
          isDirty: M
            ? !1
            : S.keepDirty
              ? o.isDirty
              : !!(S.keepDefaultValues && !Mn(g, f)),
          isSubmitted: S.keepIsSubmitted ? o.isSubmitted : !1,
          dirtyFields: M
            ? {}
            : S.keepDirtyValues
              ? S.keepDefaultValues && d
                ? Ci(f, d)
                : o.dirtyFields
              : S.keepDefaultValues && g
                ? Ci(f, g)
                : S.keepDirty
                  ? o.dirtyFields
                  : {},
          touchedFields: S.keepTouched ? o.touchedFields : {},
          errors: S.keepErrors ? o.errors : {},
          isSubmitSuccessful: S.keepIsSubmitSuccessful
            ? o.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        }));
    },
    sr = (g, S) => Bn(Zt(g) ? g(d) : g, S);
  return {
    control: {
      register: we,
      unregister: ge,
      getFieldState: N,
      handleSubmit: Wn,
      setError: ue,
      _executeSchema: be,
      _getWatch: ie,
      _getDirty: ne,
      _updateValid: G,
      _removeUnmounted: Nt,
      _updateFieldArray: Q,
      _updateDisabledField: _e,
      _getFieldArray: Se,
      _reset: Bn,
      _resetDefaultValues: () =>
        Zt(a.defaultValues) &&
        a.defaultValues().then((g) => {
          (sr(g, a.resetOptions), j.state.next({ isLoading: !1 }));
        }),
      _updateFormState: (g) => {
        o = { ...o, ...g };
      },
      _disableForm: ut,
      _subjects: j,
      _proxyFormState: A,
      _setErrors: he,
      get _fields() {
        return u;
      },
      get _formValues() {
        return d;
      },
      get _state() {
        return m;
      },
      set _state(g) {
        m = g;
      },
      get _defaultValues() {
        return f;
      },
      get _names() {
        return v;
      },
      set _names(g) {
        v = g;
      },
      get _formState() {
        return o;
      },
      set _formState(g) {
        o = g;
      },
      get _options() {
        return a;
      },
      set _options(g) {
        a = { ...a, ...g };
      },
    },
    trigger: U,
    register: we,
    handleSubmit: Wn,
    watch: ve,
    setValue: ye,
    getValues: w,
    reset: sr,
    resetField: Mi,
    clearErrors: oe,
    unregister: ge,
    setError: ue,
    setFocus: (g, S = {}) => {
      const E = $(u, g),
        b = E && E._f;
      if (b) {
        const M = b.refs ? b.refs[0] : b.ref;
        M.focus && (M.focus(), S.shouldSelect && Zt(M.select) && M.select());
      }
    },
    getFieldState: N,
  };
}
function fy(r = {}) {
  const a = De.useRef(void 0),
    o = De.useRef(void 0),
    [u, f] = De.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: Zt(r.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: r.errors || {},
      disabled: r.disabled || !1,
      defaultValues: Zt(r.defaultValues) ? void 0 : r.defaultValues,
    });
  a.current || (a.current = { ...cy(r), formState: u });
  const d = a.current.control;
  return (
    (d._options = r),
    qg({
      subject: d._subjects.state,
      next: (m) => {
        Xg(m, d._proxyFormState, d._updateFormState) && f({ ...d._formState });
      },
    }),
    De.useEffect(() => d._disableForm(r.disabled), [d, r.disabled]),
    De.useEffect(() => {
      if (d._proxyFormState.isDirty) {
        const m = d._getDirty();
        m !== u.isDirty && d._subjects.state.next({ isDirty: m });
      }
    }, [d, u.isDirty]),
    De.useEffect(() => {
      r.values && !Mn(r.values, o.current)
        ? (d._reset(r.values, d._options.resetOptions),
          (o.current = r.values),
          f((m) => ({ ...m })))
        : d._resetDefaultValues();
    }, [r.values, d]),
    De.useEffect(() => {
      r.errors && d._setErrors(r.errors);
    }, [r.errors, d]),
    De.useEffect(() => {
      (d._state.mount || (d._updateValid(), (d._state.mount = !0)),
        d._state.watch &&
          ((d._state.watch = !1), d._subjects.state.next({ ...d._formState })),
        d._removeUnmounted());
    }),
    De.useEffect(() => {
      r.shouldUnregister && d._subjects.values.next({ values: d._getWatch() });
    }, [r.shouldUnregister, d]),
    (a.current.formState = Gg(u, d)),
    a.current
  );
}
const dy = "_contactForm_1h4jv_5",
  py = "_contactInput_1h4jv_29",
  my = "_button_1h4jv_70",
  Ni = { contactForm: dy, contactInput: py, button: my };
function hy() {
  const {
      register: r,
      handleSubmit: a,
      formState: { errors: o },
      reset: u,
    } = fy(),
    [f, d] = De.useState(null),
    m = async (v) => {
      d(null);
      try {
        const P = JSON.stringify(v),
          F = await fetch("http://localhost:8000/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: P,
          });
        if (!F.ok) throw new Error(`HTTP error! status: ${F.status}`);
        const A = await F.json();
        (console.log(A), d("success"), u());
      } catch (P) {
        (console.error("Error submitting form:", P), d("error"));
      }
    };
  return C.jsxs("form", {
    onSubmit: a(m),
    className: Ni.contactForm,
    children: [
      C.jsx("h3", { children: "Contact form" }),
      C.jsx("div", {
        children: C.jsxs("label", {
          children: [
            "Name",
            C.jsx("input", {
              className: Ni.contactInput,
              type: "text",
              autoComplete: "on",
              ...r("name", { required: "Name is required" }),
            }),
            o.name && C.jsx("span", { children: o.name.message }),
          ],
        }),
      }),
      C.jsx("div", {
        children: C.jsxs("label", {
          children: [
            "Email",
            C.jsx("input", {
              className: Ni.contactInput,
              type: "email",
              autoComplete: "on",
              ...r("email", {
                required: "Email is required",
                pattern: /^\S+@\S+$/i,
              }),
            }),
          ],
        }),
      }),
      C.jsx("div", {
        children: C.jsxs("label", {
          children: [
            "Message",
            C.jsx("textarea", {
              className: Ni.contactInput,
              ...r("message", { required: "Message is required" }),
            }),
          ],
        }),
      }),
      C.jsx("button", {
        type: "submit",
        className: Ni.button,
        children: "Submit",
      }),
      f === "success" &&
        C.jsx("div", {
          style: { color: "green", marginTop: "10px" },
          children: "Thank you! Your message has been sent.",
        }),
      f === "error" &&
        C.jsx("div", {
          style: { color: "red", marginTop: "10px" },
          children:
            "An error occurred while sending your message. Please try again.",
        }),
    ],
  });
}
const gy = () => {
    const [r, a] = Bt.useState(() => localStorage.getItem("theme") || "light"),
      o = () => {
        a((u) => (u === "light" ? "dark" : "light"));
      };
    return (
      Bt.useEffect(() => {
        (document.body.setAttribute("data-theme", r),
          localStorage.setItem("theme", r));
      }, [r]),
      [r, o]
    );
  },
  yy = ({ toggleTheme: r, theme: a }) =>
    C.jsxs("button", {
      onClick: r,
      className: Jl.darkModeToggle,
      children: ["Switch to ", a === "light" ? "Dark" : "Light", " Mode"],
    });
function vy() {
  const [r, a] = gy();
  return C.jsxs(Bt.Fragment, {
    children: [
      C.jsx("h1", {
        className: Jl.visuallyHidden,
        children: "Paul Zolik Aspiring Software Engineer Portfolio",
      }),
      C.jsx("div", {
        id: "outer-container",
        className: Jl.outerContainer,
        children: C.jsxs("div", {
          id: "page-wrap",
          className: Jl.container,
          children: [
            C.jsx(Dm, {}),
            C.jsx(yy, { toggleTheme: a, theme: r }),
            C.jsx(um, {}),
            C.jsx(oh, {}),
            C.jsx(xh, {}),
            C.jsx(hy, {}),
            C.jsx(Hg, {}),
          ],
        }),
      }),
    ],
  });
}
const wy = K0.createRoot(document.getElementById("root"));
wy.render(C.jsx(De.StrictMode, { children: C.jsx(vy, {}) }));
