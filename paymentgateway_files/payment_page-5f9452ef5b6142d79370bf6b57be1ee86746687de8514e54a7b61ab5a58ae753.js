/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
!(function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  "use strict";
  function n(t, e, n) {
    var r,
      i,
      o = (n = n || xt).createElement("script");
    if (((o.text = t), e))
      for (r in Tt)
        (i = e[r] || (e.getAttribute && e.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function r(t) {
    return null == t
      ? t + ""
      : "object" == typeof t || "function" == typeof t
      ? ht[dt.call(t)] || "object"
      : typeof t;
  }
  function i(t) {
    var e = !!t && "length" in t && t.length,
      n = r(t);
    return (
      !bt(t) &&
      !wt(t) &&
      ("array" === n ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  function o(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }
  function a(t, e, n) {
    return bt(e)
      ? Ct.grep(t, function (t, r) {
          return !!e.call(t, r, t) !== n;
        })
      : e.nodeType
      ? Ct.grep(t, function (t) {
          return (t === e) !== n;
        })
      : "string" != typeof e
      ? Ct.grep(t, function (t) {
          return pt.call(e, t) > -1 !== n;
        })
      : Ct.filter(e, t, n);
  }
  function s(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function u(t) {
    var e = {};
    return (
      Ct.each(t.match($t) || [], function (t, n) {
        e[n] = !0;
      }),
      e
    );
  }
  function c(t) {
    return t;
  }
  function l(t) {
    throw t;
  }
  function f(t, e, n, r) {
    var i;
    try {
      t && bt((i = t.promise))
        ? i.call(t).done(e).fail(n)
        : t && bt((i = t.then))
        ? i.call(t, e, n)
        : e.apply(void 0, [t].slice(r));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }
  function p() {
    xt.removeEventListener("DOMContentLoaded", p),
      t.removeEventListener("load", p),
      Ct.ready();
  }
  function h(t, e) {
    return e.toUpperCase();
  }
  function d(t) {
    return t.replace(qt, "ms-").replace(Mt, h);
  }
  function v() {
    this.expando = Ct.expando + v.uid++;
  }
  function g(t) {
    return (
      "true" === t ||
      ("false" !== t &&
        ("null" === t
          ? null
          : t === +t + ""
          ? +t
          : Wt.test(t)
          ? JSON.parse(t)
          : t))
    );
  }
  function y(t, e, n) {
    var r;
    if (void 0 === n && 1 === t.nodeType)
      if (
        ((r = "data-" + e.replace(Ut, "-$&").toLowerCase()),
        "string" == typeof (n = t.getAttribute(r)))
      ) {
        try {
          n = g(n);
        } catch (t) {}
        Bt.set(t, e, n);
      } else n = void 0;
    return n;
  }
  function m(t, e, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return Ct.css(t, e, "");
          },
      u = s(),
      c = (n && n[3]) || (Ct.cssNumber[e] ? "" : "px"),
      l =
        t.nodeType &&
        (Ct.cssNumber[e] || ("px" !== c && +u)) &&
        zt.exec(Ct.css(t, e));
    if (l && l[3] !== c) {
      for (u /= 2, c = c || l[3], l = +u || 1; a--; )
        Ct.style(t, e, l + c),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (l /= o);
      (l *= 2), Ct.style(t, e, l + c), (n = n || []);
    }
    return (
      n &&
        ((l = +l || +u || 0),
        (i = n[1] ? l + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = c), (r.start = l), (r.end = i))),
      i
    );
  }
  function b(t) {
    var e,
      n = t.ownerDocument,
      r = t.nodeName,
      i = Yt[r];
    return (
      i ||
      ((e = n.body.appendChild(n.createElement(r))),
      (i = Ct.css(e, "display")),
      e.parentNode.removeChild(e),
      "none" === i && (i = "block"),
      (Yt[r] = i),
      i)
    );
  }
  function w(t, e) {
    for (var n, r, i = [], o = 0, a = t.length; o < a; o++)
      (r = t[o]).style &&
        ((n = r.style.display),
        e
          ? ("none" === n &&
              ((i[o] = Ft.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && Kt(r) && (i[o] = b(r)))
          : "none" !== n && ((i[o] = "none"), Ft.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
    return t;
  }
  function x(t, e) {
    var n;
    return (
      (n =
        void 0 !== t.getElementsByTagName
          ? t.getElementsByTagName(e || "*")
          : void 0 !== t.querySelectorAll
          ? t.querySelectorAll(e || "*")
          : []),
      void 0 === e || (e && o(t, e)) ? Ct.merge([t], n) : n
    );
  }
  function T(t, e) {
    for (var n = 0, r = t.length; n < r; n++)
      Ft.set(t[n], "globalEval", !e || Ft.get(e[n], "globalEval"));
  }
  function k(t, e, n, i, o) {
    for (
      var a,
        s,
        u,
        c,
        l,
        f,
        p = e.createDocumentFragment(),
        h = [],
        d = 0,
        v = t.length;
      d < v;
      d++
    )
      if ((a = t[d]) || 0 === a)
        if ("object" === r(a)) Ct.merge(h, a.nodeType ? [a] : a);
        else if (oe.test(a)) {
          for (
            s = s || p.appendChild(e.createElement("div")),
              u = (ne.exec(a) || ["", ""])[1].toLowerCase(),
              c = ie[u] || ie._default,
              s.innerHTML = c[1] + Ct.htmlPrefilter(a) + c[2],
              f = c[0];
            f--;

          )
            s = s.lastChild;
          Ct.merge(h, s.childNodes), ((s = p.firstChild).textContent = "");
        } else h.push(e.createTextNode(a));
    for (p.textContent = "", d = 0; (a = h[d++]); )
      if (i && Ct.inArray(a, i) > -1) o && o.push(a);
      else if (((l = Gt(a)), (s = x(p.appendChild(a), "script")), l && T(s), n))
        for (f = 0; (a = s[f++]); ) re.test(a.type || "") && n.push(a);
    return p;
  }
  function C() {
    return !0;
  }
  function S() {
    return !1;
  }
  function E(t, e) {
    return (t === j()) == ("focus" === e);
  }
  function j() {
    try {
      return xt.activeElement;
    } catch (t) {}
  }
  function P(t, e, n, r, i, o) {
    var a, s;
    if ("object" == typeof e) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), e))
        P(t, s, n, r, e[s], o);
      return t;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = S;
    else if (!i) return t;
    return (
      1 === o &&
        ((a = i),
        ((i = function (t) {
          return Ct().off(t), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = Ct.guid++))),
      t.each(function () {
        Ct.event.add(this, e, i, r, n);
      })
    );
  }
  function _(t, e, n) {
    n
      ? (Ft.set(t, e, !1),
        Ct.event.add(t, e, {
          namespace: !1,
          handler: function (t) {
            var r,
              i,
              o = Ft.get(this, e);
            if (1 & t.isTrigger && this[e]) {
              if (o.length)
                (Ct.event.special[e] || {}).delegateType && t.stopPropagation();
              else if (
                ((o = ct.call(arguments)),
                Ft.set(this, e, o),
                (r = n(this, e)),
                this[e](),
                o !== (i = Ft.get(this, e)) || r
                  ? Ft.set(this, e, !1)
                  : (i = {}),
                o !== i)
              )
                return (
                  t.stopImmediatePropagation(), t.preventDefault(), i && i.value
                );
            } else
              o.length &&
                (Ft.set(this, e, {
                  value: Ct.event.trigger(
                    Ct.extend(o[0], Ct.Event.prototype),
                    o.slice(1),
                    this
                  ),
                }),
                t.stopImmediatePropagation());
          },
        }))
      : void 0 === Ft.get(t, e) && Ct.event.add(t, e, C);
  }
  function A(t, e) {
    return (
      (o(t, "table") &&
        o(11 !== e.nodeType ? e : e.firstChild, "tr") &&
        Ct(t).children("tbody")[0]) ||
      t
    );
  }
  function N(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function D(t) {
    return (
      "true/" === (t.type || "").slice(0, 5)
        ? (t.type = t.type.slice(5))
        : t.removeAttribute("type"),
      t
    );
  }
  function O(t, e) {
    var n, r, i, o, a, s;
    if (1 === e.nodeType) {
      if (Ft.hasData(t) && (s = Ft.get(t).events))
        for (i in (Ft.remove(e, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) Ct.event.add(e, i, s[i][n]);
      Bt.hasData(t) &&
        ((o = Bt.access(t)), (a = Ct.extend({}, o)), Bt.set(e, a));
    }
  }
  function $(t, e) {
    var n = e.nodeName.toLowerCase();
    "input" === n && ee.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== n && "textarea" !== n) ||
        (e.defaultValue = t.defaultValue);
  }
  function L(t, e, r, i) {
    e = lt(e);
    var o,
      a,
      s,
      u,
      c,
      l,
      f = 0,
      p = t.length,
      h = p - 1,
      d = e[0],
      v = bt(d);
    if (v || (p > 1 && "string" == typeof d && !mt.checkClone && ue.test(d)))
      return t.each(function (n) {
        var o = t.eq(n);
        v && (e[0] = d.call(this, n, o.html())), L(o, e, r, i);
      });
    if (
      p &&
      ((a = (o = k(e, t[0].ownerDocument, !1, t, i)).firstChild),
      1 === o.childNodes.length && (o = a),
      a || i)
    ) {
      for (u = (s = Ct.map(x(o, "script"), N)).length; f < p; f++)
        (c = o),
          f !== h &&
            ((c = Ct.clone(c, !0, !0)), u && Ct.merge(s, x(c, "script"))),
          r.call(t[f], c, f);
      if (u)
        for (l = s[s.length - 1].ownerDocument, Ct.map(s, D), f = 0; f < u; f++)
          (c = s[f]),
            re.test(c.type || "") &&
              !Ft.access(c, "globalEval") &&
              Ct.contains(l, c) &&
              (c.src && "module" !== (c.type || "").toLowerCase()
                ? Ct._evalUrl &&
                  !c.noModule &&
                  Ct._evalUrl(
                    c.src,
                    {
                      nonce: c.nonce || c.getAttribute("nonce"),
                    },
                    l
                  )
                : n(c.textContent.replace(ce, ""), c, l));
    }
    return t;
  }
  function I(t, e, n) {
    for (var r, i = e ? Ct.filter(e, t) : t, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || Ct.cleanData(x(r)),
        r.parentNode &&
          (n && Gt(r) && T(x(r, "script")), r.parentNode.removeChild(r));
    return t;
  }
  function R(t, e, n) {
    var r,
      i,
      o,
      a,
      s = t.style;
    return (
      (n = n || fe(t)) &&
        ("" !== (a = n.getPropertyValue(e) || n[e]) ||
          Gt(t) ||
          (a = Ct.style(t, e)),
        !mt.pixelBoxStyles() &&
          le.test(a) &&
          he.test(e) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function q(t, e) {
    return {
      get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);
        delete this.get;
      },
    };
  }
  function M(t) {
    for (var e = t[0].toUpperCase() + t.slice(1), n = de.length; n--; )
      if ((t = de[n] + e) in ve) return t;
  }
  function H(t) {
    var e = Ct.cssProps[t] || ge[t];
    return e || (t in ve ? t : (ge[t] = M(t) || t));
  }
  function F(t, e, n) {
    var r = zt.exec(e);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e;
  }
  function B(t, e, n, r, i, o) {
    var a = "width" === e ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += Ct.css(t, n + Xt[a], !0, i)),
        r
          ? ("content" === n && (u -= Ct.css(t, "padding" + Xt[a], !0, i)),
            "margin" !== n &&
              (u -= Ct.css(t, "border" + Xt[a] + "Width", !0, i)))
          : ((u += Ct.css(t, "padding" + Xt[a], !0, i)),
            "padding" !== n
              ? (u += Ct.css(t, "border" + Xt[a] + "Width", !0, i))
              : (s += Ct.css(t, "border" + Xt[a] + "Width", !0, i)));
    return (
      !r &&
        o >= 0 &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              t["offset" + e[0].toUpperCase() + e.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function W(t, e, n) {
    var r = fe(t),
      i =
        (!mt.boxSizingReliable() || n) &&
        "border-box" === Ct.css(t, "boxSizing", !1, r),
      a = i,
      s = R(t, e, r),
      u = "offset" + e[0].toUpperCase() + e.slice(1);
    if (le.test(s)) {
      if (!n) return s;
      s = "auto";
    }
    return (
      ((!mt.boxSizingReliable() && i) ||
        (!mt.reliableTrDimensions() && o(t, "tr")) ||
        "auto" === s ||
        (!parseFloat(s) && "inline" === Ct.css(t, "display", !1, r))) &&
        t.getClientRects().length &&
        ((i = "border-box" === Ct.css(t, "boxSizing", !1, r)),
        (a = u in t) && (s = t[u])),
      (s = parseFloat(s) || 0) +
        B(t, e, n || (i ? "border" : "content"), a, r, s) +
        "px"
    );
  }
  function U(t, e, n, r, i) {
    return new U.prototype.init(t, e, n, r, i);
  }
  function V() {
    Te &&
      (!1 === xt.hidden && t.requestAnimationFrame
        ? t.requestAnimationFrame(V)
        : t.setTimeout(V, Ct.fx.interval),
      Ct.fx.tick());
  }
  function z() {
    return (
      t.setTimeout(function () {
        xe = void 0;
      }),
      (xe = Date.now())
    );
  }
  function X(t, e) {
    var n,
      r = 0,
      i = {
        height: t,
      };
    for (e = e ? 1 : 0; r < 4; r += 2 - e)
      i["margin" + (n = Xt[r])] = i["padding" + n] = t;
    return e && (i.opacity = i.width = t), i;
  }
  function J(t, e, n) {
    for (
      var r,
        i = (K.tweeners[e] || []).concat(K.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, e, t))) return r;
  }
  function G(t, e, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      c,
      l,
      f = "width" in e || "height" in e,
      p = this,
      h = {},
      d = t.style,
      v = t.nodeType && Kt(t),
      g = Ft.get(t, "fxshow");
    for (r in (n.queue ||
      (null == (a = Ct._queueHooks(t, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || s();
        })),
      a.unqueued++,
      p.always(function () {
        p.always(function () {
          a.unqueued--, Ct.queue(t, "fx").length || a.empty.fire();
        });
      })),
    e))
      if (((i = e[r]), ke.test(i))) {
        if (
          (delete e[r], (o = o || "toggle" === i), i === (v ? "hide" : "show"))
        ) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          v = !0;
        }
        h[r] = (g && g[r]) || Ct.style(t, r);
      }
    if ((u = !Ct.isEmptyObject(e)) || !Ct.isEmptyObject(h))
      for (r in (f &&
        1 === t.nodeType &&
        ((n.overflow = [d.overflow, d.overflowX, d.overflowY]),
        null == (c = g && g.display) && (c = Ft.get(t, "display")),
        "none" === (l = Ct.css(t, "display")) &&
          (c
            ? (l = c)
            : (w([t], !0),
              (c = t.style.display || c),
              (l = Ct.css(t, "display")),
              w([t]))),
        ("inline" === l || ("inline-block" === l && null != c)) &&
          "none" === Ct.css(t, "float") &&
          (u ||
            (p.done(function () {
              d.display = c;
            }),
            null == c && ((l = d.display), (c = "none" === l ? "" : l))),
          (d.display = "inline-block"))),
      n.overflow &&
        ((d.overflow = "hidden"),
        p.always(function () {
          (d.overflow = n.overflow[0]),
            (d.overflowX = n.overflow[1]),
            (d.overflowY = n.overflow[2]);
        })),
      (u = !1),
      h))
        u ||
          (g
            ? "hidden" in g && (v = g.hidden)
            : (g = Ft.access(t, "fxshow", {
                display: c,
              })),
          o && (g.hidden = !v),
          v && w([t], !0),
          p.done(function () {
            for (r in (v || w([t]), Ft.remove(t, "fxshow"), h))
              Ct.style(t, r, h[r]);
          })),
          (u = J(v ? g[r] : 0, r, p)),
          r in g || ((g[r] = u.start), v && ((u.end = u.start), (u.start = 0)));
  }
  function Q(t, e) {
    var n, r, i, o, a;
    for (n in t)
      if (
        ((i = e[(r = d(n))]),
        (o = t[n]),
        Array.isArray(o) && ((i = o[1]), (o = t[n] = o[0])),
        n !== r && ((t[r] = o), delete t[n]),
        (a = Ct.cssHooks[r]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete t[r], o))
          n in t || ((t[n] = o[n]), (e[n] = i));
      else e[r] = i;
  }
  function K(t, e, n) {
    var r,
      i,
      o = 0,
      a = K.prefilters.length,
      s = Ct.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var e = xe || z(),
            n = Math.max(0, c.startTime + c.duration - e),
            r = 1 - (n / c.duration || 0),
            o = 0,
            a = c.tweens.length;
          o < a;
          o++
        )
          c.tweens[o].run(r);
        return (
          s.notifyWith(t, [c, r, n]),
          r < 1 && a
            ? n
            : (a || s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c]), !1)
        );
      },
      c = s.promise({
        elem: t,
        props: Ct.extend({}, e),
        opts: Ct.extend(
          !0,
          {
            specialEasing: {},
            easing: Ct.easing._default,
          },
          n
        ),
        originalProperties: e,
        originalOptions: n,
        startTime: xe || z(),
        duration: n.duration,
        tweens: [],
        createTween: function (e, n) {
          var r = Ct.Tween(
            t,
            c.opts,
            e,
            n,
            c.opts.specialEasing[e] || c.opts.easing
          );
          return c.tweens.push(r), r;
        },
        stop: function (e) {
          var n = 0,
            r = e ? c.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) c.tweens[n].run(1);
          return (
            e
              ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e]))
              : s.rejectWith(t, [c, e]),
            this
          );
        },
      }),
      l = c.props;
    for (Q(l, c.opts.specialEasing); o < a; o++)
      if ((r = K.prefilters[o].call(c, t, l, c.opts)))
        return (
          bt(r.stop) &&
            (Ct._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
          r
        );
    return (
      Ct.map(l, J, c),
      bt(c.opts.start) && c.opts.start.call(t, c),
      c
        .progress(c.opts.progress)
        .done(c.opts.done, c.opts.complete)
        .fail(c.opts.fail)
        .always(c.opts.always),
      Ct.fx.timer(
        Ct.extend(u, {
          elem: t,
          anim: c,
          queue: c.opts.queue,
        })
      ),
      c
    );
  }
  function Y(t) {
    return (t.match($t) || []).join(" ");
  }
  function Z(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function tt(t) {
    return Array.isArray(t) ? t : ("string" == typeof t && t.match($t)) || [];
  }
  function et(t, e, n, i) {
    var o;
    if (Array.isArray(e))
      Ct.each(e, function (e, r) {
        n || Le.test(t)
          ? i(t, r)
          : et(
              t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
              r,
              n,
              i
            );
      });
    else if (n || "object" !== r(e)) i(t, e);
    else for (o in e) et(t + "[" + o + "]", e[o], n, i);
  }
  function nt(t) {
    return function (e, n) {
      "string" != typeof e && ((n = e), (e = "*"));
      var r,
        i = 0,
        o = e.toLowerCase().match($t) || [];
      if (bt(n))
        for (; (r = o[i++]); )
          "+" === r[0]
            ? ((r = r.slice(1) || "*"), (t[r] = t[r] || []).unshift(n))
            : (t[r] = t[r] || []).push(n);
    };
  }
  function rt(t, e, n, r) {
    function i(s) {
      var u;
      return (
        (o[s] = !0),
        Ct.each(t[s] || [], function (t, s) {
          var c = s(e, n, r);
          return "string" != typeof c || a || o[c]
            ? a
              ? !(u = c)
              : void 0
            : (e.dataTypes.unshift(c), i(c), !1);
        }),
        u
      );
    }
    var o = {},
      a = t === Xe;
    return i(e.dataTypes[0]) || (!o["*"] && i("*"));
  }
  function it(t, e) {
    var n,
      r,
      i = Ct.ajaxSettings.flatOptions || {};
    for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
    return r && Ct.extend(!0, t, r), t;
  }
  function ot(t, e, n) {
    for (var r, i, o, a, s = t.contents, u = t.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || t.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function at(t, e, n, r) {
    var i,
      o,
      a,
      s,
      u,
      c = {},
      l = t.dataTypes.slice();
    if (l[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
    for (o = l.shift(); o; )
      if (
        (t.responseFields[o] && (n[t.responseFields[o]] = e),
        !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (u = o),
        (o = l.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = c[u + " " + o] || c["* " + o]))
            for (i in c)
              if (
                (s = i.split(" "))[1] === o &&
                (a = c[u + " " + s[0]] || c["* " + s[0]])
              ) {
                !0 === a
                  ? (a = c[i])
                  : !0 !== c[i] && ((o = s[0]), l.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && t.throws) e = a(e);
            else
              try {
                e = a(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: a ? t : "No conversion from " + u + " to " + o,
                };
              }
        }
    return {
      state: "success",
      data: e,
    };
  }
  var st = [],
    ut = Object.getPrototypeOf,
    ct = st.slice,
    lt = st.flat
      ? function (t) {
          return st.flat.call(t);
        }
      : function (t) {
          return st.concat.apply([], t);
        },
    ft = st.push,
    pt = st.indexOf,
    ht = {},
    dt = ht.toString,
    vt = ht.hasOwnProperty,
    gt = vt.toString,
    yt = gt.call(Object),
    mt = {},
    bt = function (t) {
      return (
        "function" == typeof t &&
        "number" != typeof t.nodeType &&
        "function" != typeof t.item
      );
    },
    wt = function (t) {
      return null != t && t === t.window;
    },
    xt = t.document,
    Tt = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0,
    },
    kt = "3.6.0",
    Ct = function (t, e) {
      return new Ct.fn.init(t, e);
    };
  (Ct.fn = Ct.prototype =
    {
      jquery: kt,
      constructor: Ct,
      length: 0,
      toArray: function () {
        return ct.call(this);
      },
      get: function (t) {
        return null == t
          ? ct.call(this)
          : t < 0
          ? this[t + this.length]
          : this[t];
      },
      pushStack: function (t) {
        var e = Ct.merge(this.constructor(), t);
        return (e.prevObject = this), e;
      },
      each: function (t) {
        return Ct.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          Ct.map(this, function (e, n) {
            return t.call(e, n, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(ct.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          Ct.grep(this, function (t, e) {
            return (e + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          Ct.grep(this, function (t, e) {
            return e % 2;
          })
        );
      },
      eq: function (t) {
        var e = this.length,
          n = +t + (t < 0 ? e : 0);
        return this.pushStack(n >= 0 && n < e ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: ft,
      sort: st.sort,
      splice: st.splice,
    }),
    (Ct.extend = Ct.fn.extend =
      function () {
        var t,
          e,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && ((c = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || bt(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (t = arguments[s]))
            for (e in t)
              (r = t[e]),
                "__proto__" !== e &&
                  a !== r &&
                  (c && r && (Ct.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[e]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || Ct.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[e] = Ct.extend(c, o, r)))
                    : void 0 !== r && (a[e] = r));
        return a;
      }),
    Ct.extend({
      expando: "jQuery" + (kt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isPlainObject: function (t) {
        var e, n;
        return (
          !(!t || "[object Object]" !== dt.call(t)) &&
          (!(e = ut(t)) ||
            ("function" ==
              typeof (n = vt.call(e, "constructor") && e.constructor) &&
              gt.call(n) === yt))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      globalEval: function (t, e, r) {
        n(
          t,
          {
            nonce: e && e.nonce,
          },
          r
        );
      },
      each: function (t, e) {
        var n,
          r = 0;
        if (i(t))
          for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
        else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
        return t;
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? Ct.merge(n, "string" == typeof t ? [t] : t)
              : ft.call(n, t)),
          n
        );
      },
      inArray: function (t, e, n) {
        return null == e ? -1 : pt.call(e, t, n);
      },
      merge: function (t, e) {
        for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
        return (t.length = i), t;
      },
      grep: function (t, e, n) {
        for (var r = [], i = 0, o = t.length, a = !n; i < o; i++)
          !e(t[i], i) !== a && r.push(t[i]);
        return r;
      },
      map: function (t, e, n) {
        var r,
          o,
          a = 0,
          s = [];
        if (i(t))
          for (r = t.length; a < r; a++)
            null != (o = e(t[a], a, n)) && s.push(o);
        else for (a in t) null != (o = e(t[a], a, n)) && s.push(o);
        return lt(s);
      },
      guid: 1,
      support: mt,
    }),
    "function" == typeof Symbol &&
      (Ct.fn[Symbol.iterator] = st[Symbol.iterator]),
    Ct.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        ht["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var St =
    /*!
     * Sizzle CSS Selector Engine v2.3.6
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2021-02-16
     */
    (function (t) {
      function e(t, e, n, r) {
        var i,
          o,
          a,
          s,
          u,
          c,
          l,
          p = e && e.ownerDocument,
          d = e ? e.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof t || !t || (1 !== d && 9 !== d && 11 !== d))
        )
          return n;
        if (!r && (D(e), (e = e || O), L)) {
          if (11 !== d && (u = bt.exec(t)))
            if ((i = u[1])) {
              if (9 === d) {
                if (!(a = e.getElementById(i))) return n;
                if (a.id === i) return n.push(a), n;
              } else if (
                p &&
                (a = p.getElementById(i)) &&
                M(e, a) &&
                a.id === i
              )
                return n.push(a), n;
            } else {
              if (u[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
              if (
                (i = u[3]) &&
                T.getElementsByClassName &&
                e.getElementsByClassName
              )
                return Z.apply(n, e.getElementsByClassName(i)), n;
            }
          if (
            T.qsa &&
            !X[t + " "] &&
            (!I || !I.test(t)) &&
            (1 !== d || "object" !== e.nodeName.toLowerCase())
          ) {
            if (((l = t), (p = e), 1 === d && (ft.test(t) || lt.test(t)))) {
              for (
                ((p = (wt.test(t) && f(e.parentNode)) || e) === e && T.scope) ||
                  ((s = e.getAttribute("id"))
                    ? (s = s.replace(kt, Ct))
                    : e.setAttribute("id", (s = H))),
                  o = (c = E(t)).length;
                o--;

              )
                c[o] = (s ? "#" + s : ":scope") + " " + h(c[o]);
              l = c.join(",");
            }
            try {
              return Z.apply(n, p.querySelectorAll(l)), n;
            } catch (e) {
              X(t, !0);
            } finally {
              s === H && e.removeAttribute("id");
            }
          }
        }
        return P(t.replace(ut, "$1"), e, n, r);
      }
      function n() {
        function t(n, r) {
          return (
            e.push(n + " ") > k.cacheLength && delete t[e.shift()],
            (t[n + " "] = r)
          );
        }
        var e = [];
        return t;
      }
      function r(t) {
        return (t[H] = !0), t;
      }
      function i(t) {
        var e = O.createElement("fieldset");
        try {
          return !!t(e);
        } catch (t) {
          return !1;
        } finally {
          e.parentNode && e.parentNode.removeChild(e), (e = null);
        }
      }
      function o(t, e) {
        for (var n = t.split("|"), r = n.length; r--; ) k.attrHandle[n[r]] = e;
      }
      function a(t, e) {
        var n = e && t,
          r =
            n &&
            1 === t.nodeType &&
            1 === e.nodeType &&
            t.sourceIndex - e.sourceIndex;
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === e) return -1;
        return t ? 1 : -1;
      }
      function s(t) {
        return function (e) {
          return "input" === e.nodeName.toLowerCase() && e.type === t;
        };
      }
      function u(t) {
        return function (e) {
          var n = e.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && e.type === t;
        };
      }
      function c(t) {
        return function (e) {
          return "form" in e
            ? e.parentNode && !1 === e.disabled
              ? "label" in e
                ? "label" in e.parentNode
                  ? e.parentNode.disabled === t
                  : e.disabled === t
                : e.isDisabled === t || (e.isDisabled !== !t && Et(e) === t)
              : e.disabled === t
            : "label" in e && e.disabled === t;
        };
      }
      function l(t) {
        return r(function (e) {
          return (
            (e = +e),
            r(function (n, r) {
              for (var i, o = t([], n.length, e), a = o.length; a--; )
                n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function f(t) {
        return t && void 0 !== t.getElementsByTagName && t;
      }
      function p() {}
      function h(t) {
        for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
        return r;
      }
      function d(t, e, n) {
        var r = e.dir,
          i = e.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = W++;
        return e.first
          ? function (e, n, i) {
              for (; (e = e[r]); ) if (1 === e.nodeType || a) return t(e, n, i);
              return !1;
            }
          : function (e, n, u) {
              var c,
                l,
                f,
                p = [B, s];
              if (u) {
                for (; (e = e[r]); )
                  if ((1 === e.nodeType || a) && t(e, n, u)) return !0;
              } else
                for (; (e = e[r]); )
                  if (1 === e.nodeType || a)
                    if (
                      ((l =
                        (f = e[H] || (e[H] = {}))[e.uniqueID] ||
                        (f[e.uniqueID] = {})),
                      i && i === e.nodeName.toLowerCase())
                    )
                      e = e[r] || e;
                    else {
                      if ((c = l[o]) && c[0] === B && c[1] === s)
                        return (p[2] = c[2]);
                      if (((l[o] = p), (p[2] = t(e, n, u)))) return !0;
                    }
              return !1;
            };
      }
      function v(t) {
        return t.length > 1
          ? function (e, n, r) {
              for (var i = t.length; i--; ) if (!t[i](e, n, r)) return !1;
              return !0;
            }
          : t[0];
      }
      function g(t, n, r) {
        for (var i = 0, o = n.length; i < o; i++) e(t, n[i], r);
        return r;
      }
      function y(t, e, n, r, i) {
        for (var o, a = [], s = 0, u = t.length, c = null != e; s < u; s++)
          (o = t[s]) && ((n && !n(o, r, i)) || (a.push(o), c && e.push(s)));
        return a;
      }
      function m(t, e, n, i, o, a) {
        return (
          i && !i[H] && (i = m(i)),
          o && !o[H] && (o = m(o, a)),
          r(function (r, a, s, u) {
            var c,
              l,
              f,
              p = [],
              h = [],
              d = a.length,
              v = r || g(e || "*", s.nodeType ? [s] : s, []),
              m = !t || (!r && e) ? v : y(v, p, t, s, u),
              b = n ? (o || (r ? t : d || i) ? [] : a) : m;
            if ((n && n(m, b, s, u), i))
              for (c = y(b, h), i(c, [], s, u), l = c.length; l--; )
                (f = c[l]) && (b[h[l]] = !(m[h[l]] = f));
            if (r) {
              if (o || t) {
                if (o) {
                  for (c = [], l = b.length; l--; )
                    (f = b[l]) && c.push((m[l] = f));
                  o(null, (b = []), c, u);
                }
                for (l = b.length; l--; )
                  (f = b[l]) &&
                    (c = o ? et(r, f) : p[l]) > -1 &&
                    (r[c] = !(a[c] = f));
              }
            } else (b = y(b === a ? b.splice(d, b.length) : b)), o ? o(null, a, b, u) : Z.apply(a, b);
          })
        );
      }
      function b(t) {
        for (
          var e,
            n,
            r,
            i = t.length,
            o = k.relative[t[0].type],
            a = o || k.relative[" "],
            s = o ? 1 : 0,
            u = d(
              function (t) {
                return t === e;
              },
              a,
              !0
            ),
            c = d(
              function (t) {
                return et(e, t) > -1;
              },
              a,
              !0
            ),
            l = [
              function (t, n, r) {
                var i =
                  (!o && (r || n !== _)) ||
                  ((e = n).nodeType ? u(t, n, r) : c(t, n, r));
                return (e = null), i;
              },
            ];
          s < i;
          s++
        )
          if ((n = k.relative[t[s].type])) l = [d(v(l), n)];
          else {
            if ((n = k.filter[t[s].type].apply(null, t[s].matches))[H]) {
              for (r = ++s; r < i && !k.relative[t[r].type]; r++);
              return m(
                s > 1 && v(l),
                s > 1 &&
                  h(
                    t.slice(0, s - 1).concat({
                      value: " " === t[s - 2].type ? "*" : "",
                    })
                  ).replace(ut, "$1"),
                n,
                s < r && b(t.slice(s, r)),
                r < i && b((t = t.slice(r))),
                r < i && h(t)
              );
            }
            l.push(n);
          }
        return v(l);
      }
      function w(t, n) {
        var i = n.length > 0,
          o = t.length > 0,
          a = function (r, a, s, u, c) {
            var l,
              f,
              p,
              h = 0,
              d = "0",
              v = r && [],
              g = [],
              m = _,
              b = r || (o && k.find.TAG("*", c)),
              w = (B += null == m ? 1 : Math.random() || 0.1),
              x = b.length;
            for (
              c && (_ = a == O || a || c);
              d !== x && null != (l = b[d]);
              d++
            ) {
              if (o && l) {
                for (
                  f = 0, a || l.ownerDocument == O || (D(l), (s = !L));
                  (p = t[f++]);

                )
                  if (p(l, a || O, s)) {
                    u.push(l);
                    break;
                  }
                c && (B = w);
              }
              i && ((l = !p && l) && h--, r && v.push(l));
            }
            if (((h += d), i && d !== h)) {
              for (f = 0; (p = n[f++]); ) p(v, g, a, s);
              if (r) {
                if (h > 0) for (; d--; ) v[d] || g[d] || (g[d] = K.call(u));
                g = y(g);
              }
              Z.apply(u, g),
                c && !r && g.length > 0 && h + n.length > 1 && e.uniqueSort(u);
            }
            return c && ((B = w), (_ = m)), v;
          };
        return i ? r(a) : a;
      }
      var x,
        T,
        k,
        C,
        S,
        E,
        j,
        P,
        _,
        A,
        N,
        D,
        O,
        $,
        L,
        I,
        R,
        q,
        M,
        H = "sizzle" + 1 * new Date(),
        F = t.document,
        B = 0,
        W = 0,
        U = n(),
        V = n(),
        z = n(),
        X = n(),
        J = function (t, e) {
          return t === e && (N = !0), 0;
        },
        G = {}.hasOwnProperty,
        Q = [],
        K = Q.pop,
        Y = Q.push,
        Z = Q.push,
        tt = Q.slice,
        et = function (t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        },
        nt =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        rt = "[\\x20\\t\\r\\n\\f]",
        it =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          rt +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        ot =
          "\\[" +
          rt +
          "*(" +
          it +
          ")(?:" +
          rt +
          "*([*^$|!~]?=)" +
          rt +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          it +
          "))|)" +
          rt +
          "*\\]",
        at =
          ":(" +
          it +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ot +
          ")*)|.*)\\)|)",
        st = new RegExp(rt + "+", "g"),
        ut = new RegExp(
          "^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$",
          "g"
        ),
        ct = new RegExp("^" + rt + "*," + rt + "*"),
        lt = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
        ft = new RegExp(rt + "|>"),
        pt = new RegExp(at),
        ht = new RegExp("^" + it + "$"),
        dt = {
          ID: new RegExp("^#(" + it + ")"),
          CLASS: new RegExp("^\\.(" + it + ")"),
          TAG: new RegExp("^(" + it + "|[*])"),
          ATTR: new RegExp("^" + ot),
          PSEUDO: new RegExp("^" + at),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              rt +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              rt +
              "*(?:([+-]|)" +
              rt +
              "*(\\d+)|))" +
              rt +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + nt + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              rt +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              rt +
              "*((?:-\\d)?\\d*)" +
              rt +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        vt = /HTML$/i,
        gt = /^(?:input|select|textarea|button)$/i,
        yt = /^h\d$/i,
        mt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /[+~]/,
        xt = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + rt + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        Tt = function (t, e) {
          var n = "0x" + t.slice(1) - 65536;
          return (
            e ||
            (n < 0
              ? String.fromCharCode(n + 65536)
              : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
          );
        },
        kt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        Ct = function (t, e) {
          return e
            ? "\0" === t
              ? "\ufffd"
              : t.slice(0, -1) +
                "\\" +
                t.charCodeAt(t.length - 1).toString(16) +
                " "
            : "\\" + t;
        },
        St = function () {
          D();
        },
        Et = d(
          function (t) {
            return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase();
          },
          {
            dir: "parentNode",
            next: "legend",
          }
        );
      try {
        Z.apply((Q = tt.call(F.childNodes)), F.childNodes),
          Q[F.childNodes.length].nodeType;
      } catch (t) {
        Z = {
          apply: Q.length
            ? function (t, e) {
                Y.apply(t, tt.call(e));
              }
            : function (t, e) {
                for (var n = t.length, r = 0; (t[n++] = e[r++]); );
                t.length = n - 1;
              },
        };
      }
      for (x in ((T = e.support = {}),
      (S = e.isXML =
        function (t) {
          var e = t && t.namespaceURI,
            n = t && (t.ownerDocument || t).documentElement;
          return !vt.test(e || (n && n.nodeName) || "HTML");
        }),
      (D = e.setDocument =
        function (t) {
          var e,
            n,
            r = t ? t.ownerDocument || t : F;
          return r != O && 9 === r.nodeType && r.documentElement
            ? (($ = (O = r).documentElement),
              (L = !S(O)),
              F != O &&
                (n = O.defaultView) &&
                n.top !== n &&
                (n.addEventListener
                  ? n.addEventListener("unload", St, !1)
                  : n.attachEvent && n.attachEvent("onunload", St)),
              (T.scope = i(function (t) {
                return (
                  $.appendChild(t).appendChild(O.createElement("div")),
                  void 0 !== t.querySelectorAll &&
                    !t.querySelectorAll(":scope fieldset div").length
                );
              })),
              (T.attributes = i(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (T.getElementsByTagName = i(function (t) {
                return (
                  t.appendChild(O.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (T.getElementsByClassName = mt.test(O.getElementsByClassName)),
              (T.getById = i(function (t) {
                return (
                  ($.appendChild(t).id = H),
                  !O.getElementsByName || !O.getElementsByName(H).length
                );
              })),
              T.getById
                ? ((k.filter.ID = function (t) {
                    var e = t.replace(xt, Tt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }),
                  (k.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && L) {
                      var n = e.getElementById(t);
                      return n ? [n] : [];
                    }
                  }))
                : ((k.filter.ID = function (t) {
                    var e = t.replace(xt, Tt);
                    return function (t) {
                      var n =
                        void 0 !== t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return n && n.value === e;
                    };
                  }),
                  (k.find.ID = function (t, e) {
                    if (void 0 !== e.getElementById && L) {
                      var n,
                        r,
                        i,
                        o = e.getElementById(t);
                      if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === t)
                          return [o];
                        for (i = e.getElementsByName(t), r = 0; (o = i[r++]); )
                          if ((n = o.getAttributeNode("id")) && n.value === t)
                            return [o];
                      }
                      return [];
                    }
                  })),
              (k.find.TAG = T.getElementsByTagName
                ? function (t, e) {
                    return void 0 !== e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : T.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var n,
                      r = [],
                      i = 0,
                      o = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                      return r;
                    }
                    return o;
                  }),
              (k.find.CLASS =
                T.getElementsByClassName &&
                function (t, e) {
                  if (void 0 !== e.getElementsByClassName && L)
                    return e.getElementsByClassName(t);
                }),
              (R = []),
              (I = []),
              (T.qsa = mt.test(O.querySelectorAll)) &&
                (i(function (t) {
                  var e;
                  ($.appendChild(t).innerHTML =
                    "<a id='" +
                    H +
                    "'></a><select id='" +
                    H +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      I.push("[*^$]=" + rt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      I.push("\\[" + rt + "*(?:value|" + nt + ")"),
                    t.querySelectorAll("[id~=" + H + "-]").length ||
                      I.push("~="),
                    (e = O.createElement("input")).setAttribute("name", ""),
                    t.appendChild(e),
                    t.querySelectorAll("[name='']").length ||
                      I.push(
                        "\\[" + rt + "*name" + rt + "*=" + rt + "*(?:''|\"\")"
                      ),
                    t.querySelectorAll(":checked").length || I.push(":checked"),
                    t.querySelectorAll("a#" + H + "+*").length ||
                      I.push(".#.+[+~]"),
                    t.querySelectorAll("\\\f"),
                    I.push("[\\r\\n\\f]");
                }),
                i(function (t) {
                  t.innerHTML =
                    "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                  var e = O.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      I.push("name" + rt + "*[*^$|!~]?="),
                    2 !== t.querySelectorAll(":enabled").length &&
                      I.push(":enabled", ":disabled"),
                    ($.appendChild(t).disabled = !0),
                    2 !== t.querySelectorAll(":disabled").length &&
                      I.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    I.push(",.*:");
                })),
              (T.matchesSelector = mt.test(
                (q =
                  $.matches ||
                  $.webkitMatchesSelector ||
                  $.mozMatchesSelector ||
                  $.oMatchesSelector ||
                  $.msMatchesSelector)
              )) &&
                i(function (t) {
                  (T.disconnectedMatch = q.call(t, "*")),
                    q.call(t, "[s!='']:x"),
                    R.push("!=", at);
                }),
              (I = I.length && new RegExp(I.join("|"))),
              (R = R.length && new RegExp(R.join("|"))),
              (e = mt.test($.compareDocumentPosition)),
              (M =
                e || mt.test($.contains)
                  ? function (t, e) {
                      var n = 9 === t.nodeType ? t.documentElement : t,
                        r = e && e.parentNode;
                      return (
                        t === r ||
                        !(
                          !r ||
                          1 !== r.nodeType ||
                          !(n.contains
                            ? n.contains(r)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(r))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (J = e
                ? function (t, e) {
                    if (t === e) return (N = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (t.ownerDocument || t) == (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1) ||
                      (!T.sortDetached && e.compareDocumentPosition(t) === n)
                        ? t == O || (t.ownerDocument == F && M(F, t))
                          ? -1
                          : e == O || (e.ownerDocument == F && M(F, e))
                          ? 1
                          : A
                          ? et(A, t) - et(A, e)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }
                : function (t, e) {
                    if (t === e) return (N = !0), 0;
                    var n,
                      r = 0,
                      i = t.parentNode,
                      o = e.parentNode,
                      s = [t],
                      u = [e];
                    if (!i || !o)
                      return t == O
                        ? -1
                        : e == O
                        ? 1
                        : i
                        ? -1
                        : o
                        ? 1
                        : A
                        ? et(A, t) - et(A, e)
                        : 0;
                    if (i === o) return a(t, e);
                    for (n = t; (n = n.parentNode); ) s.unshift(n);
                    for (n = e; (n = n.parentNode); ) u.unshift(n);
                    for (; s[r] === u[r]; ) r++;
                    return r
                      ? a(s[r], u[r])
                      : s[r] == F
                      ? -1
                      : u[r] == F
                      ? 1
                      : 0;
                  }),
              O)
            : O;
        }),
      (e.matches = function (t, n) {
        return e(t, null, null, n);
      }),
      (e.matchesSelector = function (t, n) {
        if (
          (D(t),
          T.matchesSelector &&
            L &&
            !X[n + " "] &&
            (!R || !R.test(n)) &&
            (!I || !I.test(n)))
        )
          try {
            var r = q.call(t, n);
            if (
              r ||
              T.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return r;
          } catch (t) {
            X(n, !0);
          }
        return e(n, O, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) != O && D(t), M(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) != O && D(t);
        var n = k.attrHandle[e.toLowerCase()],
          r = n && G.call(k.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
        return void 0 !== r
          ? r
          : T.attributes || !L
          ? t.getAttribute(e)
          : (r = t.getAttributeNode(e)) && r.specified
          ? r.value
          : null;
      }),
      (e.escape = function (t) {
        return (t + "").replace(kt, Ct);
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          n = [],
          r = 0,
          i = 0;
        if (
          ((N = !T.detectDuplicates),
          (A = !T.sortStable && t.slice(0)),
          t.sort(J),
          N)
        ) {
          for (; (e = t[i++]); ) e === t[i] && (r = n.push(i));
          for (; r--; ) t.splice(n[r], 1);
        }
        return (A = null), t;
      }),
      (C = e.getText =
        function (t) {
          var e,
            n = "",
            r = 0,
            i = t.nodeType;
          if (i) {
            if (1 === i || 9 === i || 11 === i) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) n += C(t);
            } else if (3 === i || 4 === i) return t.nodeValue;
          } else for (; (e = t[r++]); ) n += C(e);
          return n;
        }),
      ((k = e.selectors =
        {
          cacheLength: 50,
          createPseudo: r,
          match: dt,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(xt, Tt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Tt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || e.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && e.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                n = !t[6] && t[2];
              return dt.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : n &&
                      pt.test(n) &&
                      (e = E(n, !0)) &&
                      (e = n.indexOf(")", n.length - e) - n.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = n.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(xt, Tt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = U[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + rt + ")" + t + "(" + rt + "|$)")) &&
                  U(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (void 0 !== t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, n, r) {
              return function (i) {
                var o = e.attr(i, t);
                return null == o
                  ? "!=" === n
                  : !n ||
                      ((o += ""),
                      "=" === n
                        ? o === r
                        : "!=" === n
                        ? o !== r
                        : "^=" === n
                        ? r && 0 === o.indexOf(r)
                        : "*=" === n
                        ? r && o.indexOf(r) > -1
                        : "$=" === n
                        ? r && o.slice(-r.length) === r
                        : "~=" === n
                        ? (" " + o.replace(st, " ") + " ").indexOf(r) > -1
                        : "|=" === n &&
                          (o === r || o.slice(0, r.length + 1) === r + "-"));
              };
            },
            CHILD: function (t, e, n, r, i) {
              var o = "nth" !== t.slice(0, 3),
                a = "last" !== t.slice(-4),
                s = "of-type" === e;
              return 1 === r && 0 === i
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, n, u) {
                    var c,
                      l,
                      f,
                      p,
                      h,
                      d,
                      v = o !== a ? "nextSibling" : "previousSibling",
                      g = e.parentNode,
                      y = s && e.nodeName.toLowerCase(),
                      m = !u && !s,
                      b = !1;
                    if (g) {
                      if (o) {
                        for (; v; ) {
                          for (p = e; (p = p[v]); )
                            if (
                              s
                                ? p.nodeName.toLowerCase() === y
                                : 1 === p.nodeType
                            )
                              return !1;
                          d = v = "only" === t && !d && "nextSibling";
                        }
                        return !0;
                      }
                      if (((d = [a ? g.firstChild : g.lastChild]), a && m)) {
                        for (
                          b =
                            (h =
                              (c =
                                (l =
                                  (f = (p = g)[H] || (p[H] = {}))[p.uniqueID] ||
                                  (f[p.uniqueID] = {}))[t] || [])[0] === B &&
                              c[1]) && c[2],
                            p = h && g.childNodes[h];
                          (p = (++h && p && p[v]) || (b = h = 0) || d.pop());

                        )
                          if (1 === p.nodeType && ++b && p === e) {
                            l[t] = [B, h, b];
                            break;
                          }
                      } else if (
                        (m &&
                          (b = h =
                            (c =
                              (l =
                                (f = (p = e)[H] || (p[H] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[t] || [])[0] === B &&
                            c[1]),
                        !1 === b)
                      )
                        for (
                          ;
                          (p = (++h && p && p[v]) || (b = h = 0) || d.pop()) &&
                          ((s
                            ? p.nodeName.toLowerCase() !== y
                            : 1 !== p.nodeType) ||
                            !++b ||
                            (m &&
                              ((l =
                                (f = p[H] || (p[H] = {}))[p.uniqueID] ||
                                (f[p.uniqueID] = {}))[t] = [B, b]),
                            p !== e));

                        );
                      return (b -= i) === r || (b % r == 0 && b / r >= 0);
                    }
                  };
            },
            PSEUDO: function (t, n) {
              var i,
                o =
                  k.pseudos[t] ||
                  k.setFilters[t.toLowerCase()] ||
                  e.error("unsupported pseudo: " + t);
              return o[H]
                ? o(n)
                : o.length > 1
                ? ((i = [t, t, "", n]),
                  k.setFilters.hasOwnProperty(t.toLowerCase())
                    ? r(function (t, e) {
                        for (var r, i = o(t, n), a = i.length; a--; )
                          t[(r = et(t, i[a]))] = !(e[r] = i[a]);
                      })
                    : function (t) {
                        return o(t, 0, i);
                      })
                : o;
            },
          },
          pseudos: {
            not: r(function (t) {
              var e = [],
                n = [],
                i = j(t.replace(ut, "$1"));
              return i[H]
                ? r(function (t, e, n, r) {
                    for (var o, a = i(t, null, r, []), s = t.length; s--; )
                      (o = a[s]) && (t[s] = !(e[s] = o));
                  })
                : function (t, r, o) {
                    return (
                      (e[0] = t), i(e, null, o, n), (e[0] = null), !n.pop()
                    );
                  };
            }),
            has: r(function (t) {
              return function (n) {
                return e(t, n).length > 0;
              };
            }),
            contains: r(function (t) {
              return (
                (t = t.replace(xt, Tt)),
                function (e) {
                  return (e.textContent || C(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: r(function (t) {
              return (
                ht.test(t || "") || e.error("unsupported lang: " + t),
                (t = t.replace(xt, Tt).toLowerCase()),
                function (e) {
                  var n;
                  do {
                    if (
                      (n = L
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                      );
                  } while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var n = t.location && t.location.hash;
              return n && n.slice(1) === e.id;
            },
            root: function (t) {
              return t === $;
            },
            focus: function (t) {
              return (
                t === O.activeElement &&
                (!O.hasFocus || O.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: c(!1),
            disabled: c(!0),
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !k.pseudos.empty(t);
            },
            header: function (t) {
              return yt.test(t.nodeName);
            },
            input: function (t) {
              return gt.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: l(function () {
              return [0];
            }),
            last: l(function (t, e) {
              return [e - 1];
            }),
            eq: l(function (t, e, n) {
              return [n < 0 ? n + e : n];
            }),
            even: l(function (t, e) {
              for (var n = 0; n < e; n += 2) t.push(n);
              return t;
            }),
            odd: l(function (t, e) {
              for (var n = 1; n < e; n += 2) t.push(n);
              return t;
            }),
            lt: l(function (t, e, n) {
              for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0; ) t.push(r);
              return t;
            }),
            gt: l(function (t, e, n) {
              for (var r = n < 0 ? n + e : n; ++r < e; ) t.push(r);
              return t;
            }),
          },
        }).pseudos.nth = k.pseudos.eq),
      {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0,
      }))
        k.pseudos[x] = s(x);
      for (x in {
        submit: !0,
        reset: !0,
      })
        k.pseudos[x] = u(x);
      return (
        (p.prototype = k.filters = k.pseudos),
        (k.setFilters = new p()),
        (E = e.tokenize =
          function (t, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l = V[t + " "];
            if (l) return n ? 0 : l.slice(0);
            for (s = t, u = [], c = k.preFilter; s; ) {
              for (a in ((r && !(i = ct.exec(s))) ||
                (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = lt.exec(s)) &&
                ((r = i.shift()),
                o.push({
                  value: r,
                  type: i[0].replace(ut, " "),
                }),
                (s = s.slice(r.length))),
              k.filter))
                !(i = dt[a].exec(s)) ||
                  (c[a] && !(i = c[a](i))) ||
                  ((r = i.shift()),
                  o.push({
                    value: r,
                    type: a,
                    matches: i,
                  }),
                  (s = s.slice(r.length)));
              if (!r) break;
            }
            return n ? s.length : s ? e.error(t) : V(t, u).slice(0);
          }),
        (j = e.compile =
          function (t, e) {
            var n,
              r = [],
              i = [],
              o = z[t + " "];
            if (!o) {
              for (e || (e = E(t)), n = e.length; n--; )
                (o = b(e[n]))[H] ? r.push(o) : i.push(o);
              (o = z(t, w(i, r))).selector = t;
            }
            return o;
          }),
        (P = e.select =
          function (t, e, n, r) {
            var i,
              o,
              a,
              s,
              u,
              c = "function" == typeof t && t,
              l = !r && E((t = c.selector || t));
            if (((n = n || []), 1 === l.length)) {
              if (
                (o = l[0] = l[0].slice(0)).length > 2 &&
                "ID" === (a = o[0]).type &&
                9 === e.nodeType &&
                L &&
                k.relative[o[1].type]
              ) {
                if (
                  !(e = (k.find.ID(a.matches[0].replace(xt, Tt), e) || [])[0])
                )
                  return n;
                c && (e = e.parentNode), (t = t.slice(o.shift().value.length));
              }
              for (
                i = dt.needsContext.test(t) ? 0 : o.length;
                i-- && ((a = o[i]), !k.relative[(s = a.type)]);

              )
                if (
                  (u = k.find[s]) &&
                  (r = u(
                    a.matches[0].replace(xt, Tt),
                    (wt.test(o[0].type) && f(e.parentNode)) || e
                  ))
                ) {
                  if ((o.splice(i, 1), !(t = r.length && h(o))))
                    return Z.apply(n, r), n;
                  break;
                }
            }
            return (
              (c || j(t, l))(
                r,
                e,
                !L,
                n,
                !e || (wt.test(t) && f(e.parentNode)) || e
              ),
              n
            );
          }),
        (T.sortStable = H.split("").sort(J).join("") === H),
        (T.detectDuplicates = !!N),
        D(),
        (T.sortDetached = i(function (t) {
          return 1 & t.compareDocumentPosition(O.createElement("fieldset"));
        })),
        i(function (t) {
          return (
            (t.innerHTML = "<a href='#'></a>"),
            "#" === t.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (t, e, n) {
            if (!n)
              return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
          }),
        (T.attributes &&
          i(function (t) {
            return (
              (t.innerHTML = "<input/>"),
              t.firstChild.setAttribute("value", ""),
              "" === t.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
              return t.defaultValue;
          }),
        i(function (t) {
          return null == t.getAttribute("disabled");
        }) ||
          o(nt, function (t, e, n) {
            var r;
            if (!n)
              return !0 === t[e]
                ? e.toLowerCase()
                : (r = t.getAttributeNode(e)) && r.specified
                ? r.value
                : null;
          }),
        e
      );
    })(t);
  (Ct.find = St),
    (Ct.expr = St.selectors),
    (Ct.expr[":"] = Ct.expr.pseudos),
    (Ct.uniqueSort = Ct.unique = St.uniqueSort),
    (Ct.text = St.getText),
    (Ct.isXMLDoc = St.isXML),
    (Ct.contains = St.contains),
    (Ct.escapeSelector = St.escape);
  var Et = function (t, e, n) {
      for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (i && Ct(t).is(n)) break;
          r.push(t);
        }
      return r;
    },
    jt = function (t, e) {
      for (var n = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && n.push(t);
      return n;
    },
    Pt = Ct.expr.match.needsContext,
    _t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  (Ct.filter = function (t, e, n) {
    var r = e[0];
    return (
      n && (t = ":not(" + t + ")"),
      1 === e.length && 1 === r.nodeType
        ? Ct.find.matchesSelector(r, t)
          ? [r]
          : []
        : Ct.find.matches(
            t,
            Ct.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    Ct.fn.extend({
      find: function (t) {
        var e,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof t)
          return this.pushStack(
            Ct(t).filter(function () {
              for (e = 0; e < r; e++) if (Ct.contains(i[e], this)) return !0;
            })
          );
        for (n = this.pushStack([]), e = 0; e < r; e++) Ct.find(t, i[e], n);
        return r > 1 ? Ct.uniqueSort(n) : n;
      },
      filter: function (t) {
        return this.pushStack(a(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(a(this, t || [], !0));
      },
      is: function (t) {
        return !!a(
          this,
          "string" == typeof t && Pt.test(t) ? Ct(t) : t || [],
          !1
        ).length;
      },
    });
  var At,
    Nt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((Ct.fn.init = function (t, e, n) {
    var r, i;
    if (!t) return this;
    if (((n = n || At), "string" == typeof t)) {
      if (
        !(r =
          "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
            ? [null, t, null]
            : Nt.exec(t)) ||
        (!r[1] && e)
      )
        return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
      if (r[1]) {
        if (
          ((e = e instanceof Ct ? e[0] : e),
          Ct.merge(
            this,
            Ct.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : xt, !0)
          ),
          _t.test(r[1]) && Ct.isPlainObject(e))
        )
          for (r in e) bt(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
        return this;
      }
      return (
        (i = xt.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
        this
      );
    }
    return t.nodeType
      ? ((this[0] = t), (this.length = 1), this)
      : bt(t)
      ? void 0 !== n.ready
        ? n.ready(t)
        : t(Ct)
      : Ct.makeArray(t, this);
  }).prototype = Ct.fn),
    (At = Ct(xt));
  var Dt = /^(?:parents|prev(?:Until|All))/,
    Ot = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  Ct.fn.extend({
    has: function (t) {
      var e = Ct(t, this),
        n = e.length;
      return this.filter(function () {
        for (var t = 0; t < n; t++) if (Ct.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof t && Ct(t);
      if (!Pt.test(t))
        for (; r < i; r++)
          for (n = this[r]; n && n !== e; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? a.index(n) > -1
                : 1 === n.nodeType && Ct.find.matchesSelector(n, t))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? Ct.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? pt.call(Ct(t), this[0])
          : pt.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(Ct.uniqueSort(Ct.merge(this.get(), Ct(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    Ct.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return Et(t, "parentNode");
        },
        parentsUntil: function (t, e, n) {
          return Et(t, "parentNode", n);
        },
        next: function (t) {
          return s(t, "nextSibling");
        },
        prev: function (t) {
          return s(t, "previousSibling");
        },
        nextAll: function (t) {
          return Et(t, "nextSibling");
        },
        prevAll: function (t) {
          return Et(t, "previousSibling");
        },
        nextUntil: function (t, e, n) {
          return Et(t, "nextSibling", n);
        },
        prevUntil: function (t, e, n) {
          return Et(t, "previousSibling", n);
        },
        siblings: function (t) {
          return jt((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return jt(t.firstChild);
        },
        contents: function (t) {
          return null != t.contentDocument && ut(t.contentDocument)
            ? t.contentDocument
            : (o(t, "template") && (t = t.content || t),
              Ct.merge([], t.childNodes));
        },
      },
      function (t, e) {
        Ct.fn[t] = function (n, r) {
          var i = Ct.map(this, e, n);
          return (
            "Until" !== t.slice(-5) && (r = n),
            r && "string" == typeof r && (i = Ct.filter(r, i)),
            this.length > 1 &&
              (Ot[t] || Ct.uniqueSort(i), Dt.test(t) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var $t = /[^\x20\t\r\n\f]+/g;
  (Ct.Callbacks = function (t) {
    t = "string" == typeof t ? u(t) : Ct.extend({}, t);
    var e,
      n,
      i,
      o,
      a = [],
      s = [],
      c = -1,
      l = function () {
        for (o = o || t.once, i = e = !0; s.length; c = -1)
          for (n = s.shift(); ++c < a.length; )
            !1 === a[c].apply(n[0], n[1]) &&
              t.stopOnFalse &&
              ((c = a.length), (n = !1));
        t.memory || (n = !1), (e = !1), o && (a = n ? [] : "");
      },
      f = {
        add: function () {
          return (
            a &&
              (n && !e && ((c = a.length - 1), s.push(n)),
              (function e(n) {
                Ct.each(n, function (n, i) {
                  bt(i)
                    ? (t.unique && f.has(i)) || a.push(i)
                    : i && i.length && "string" !== r(i) && e(i);
                });
              })(arguments),
              n && !e && l()),
            this
          );
        },
        remove: function () {
          return (
            Ct.each(arguments, function (t, e) {
              for (var n; (n = Ct.inArray(e, a, n)) > -1; )
                a.splice(n, 1), n <= c && c--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? Ct.inArray(t, a) > -1 : a.length > 0;
        },
        empty: function () {
          return a && (a = []), this;
        },
        disable: function () {
          return (o = s = []), (a = n = ""), this;
        },
        disabled: function () {
          return !a;
        },
        lock: function () {
          return (o = s = []), n || e || (a = n = ""), this;
        },
        locked: function () {
          return !!o;
        },
        fireWith: function (t, n) {
          return (
            o ||
              ((n = [t, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              e || l()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return f;
  }),
    Ct.extend({
      Deferred: function (e) {
        var n = [
            [
              "notify",
              "progress",
              Ct.Callbacks("memory"),
              Ct.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              Ct.Callbacks("once memory"),
              Ct.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              Ct.Callbacks("once memory"),
              Ct.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (t) {
              return i.then(null, t);
            },
            pipe: function () {
              var t = arguments;
              return Ct.Deferred(function (e) {
                Ct.each(n, function (n, r) {
                  var i = bt(t[r[4]]) && t[r[4]];
                  o[r[1]](function () {
                    var t = i && i.apply(this, arguments);
                    t && bt(t.promise)
                      ? t
                          .promise()
                          .progress(e.notify)
                          .done(e.resolve)
                          .fail(e.reject)
                      : e[r[0] + "With"](this, i ? [t] : arguments);
                  });
                }),
                  (t = null);
              }).promise();
            },
            then: function (e, r, i) {
              function o(e, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    f = function () {
                      var t, f;
                      if (!(e < a)) {
                        if ((t = r.apply(s, u)) === n.promise())
                          throw new TypeError("Thenable self-resolution");
                        (f =
                          t &&
                          ("object" == typeof t || "function" == typeof t) &&
                          t.then),
                          bt(f)
                            ? i
                              ? f.call(t, o(a, n, c, i), o(a, n, l, i))
                              : (a++,
                                f.call(
                                  t,
                                  o(a, n, c, i),
                                  o(a, n, l, i),
                                  o(a, n, c, n.notifyWith)
                                ))
                            : (r !== c && ((s = void 0), (u = [t])),
                              (i || n.resolveWith)(s, u));
                      }
                    },
                    p = i
                      ? f
                      : function () {
                          try {
                            f();
                          } catch (t) {
                            Ct.Deferred.exceptionHook &&
                              Ct.Deferred.exceptionHook(t, p.stackTrace),
                              e + 1 >= a &&
                                (r !== l && ((s = void 0), (u = [t])),
                                n.rejectWith(s, u));
                          }
                        };
                  e
                    ? p()
                    : (Ct.Deferred.getStackHook &&
                        (p.stackTrace = Ct.Deferred.getStackHook()),
                      t.setTimeout(p));
                };
              }
              var a = 0;
              return Ct.Deferred(function (t) {
                n[0][3].add(o(0, t, bt(i) ? i : c, t.notifyWith)),
                  n[1][3].add(o(0, t, bt(e) ? e : c)),
                  n[2][3].add(o(0, t, bt(r) ? r : l));
              }).promise();
            },
            promise: function (t) {
              return null != t ? Ct.extend(t, i) : i;
            },
          },
          o = {};
        return (
          Ct.each(n, function (t, e) {
            var a = e[2],
              s = e[5];
            (i[e[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - t][2].disable,
                  n[3 - t][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(e[3].fire),
              (o[e[0]] = function () {
                return (
                  o[e[0] + "With"](this === o ? void 0 : this, arguments), this
                );
              }),
              (o[e[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          e && e.call(o, o),
          o
        );
      },
      when: function (t) {
        var e = arguments.length,
          n = e,
          r = Array(n),
          i = ct.call(arguments),
          o = Ct.Deferred(),
          a = function (t) {
            return function (n) {
              (r[t] = this),
                (i[t] = arguments.length > 1 ? ct.call(arguments) : n),
                --e || o.resolveWith(r, i);
            };
          };
        if (
          e <= 1 &&
          (f(t, o.done(a(n)).resolve, o.reject, !e),
          "pending" === o.state() || bt(i[n] && i[n].then))
        )
          return o.then();
        for (; n--; ) f(i[n], a(n), o.reject);
        return o.promise();
      },
    });
  var Lt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (Ct.Deferred.exceptionHook = function (e, n) {
    t.console &&
      t.console.warn &&
      e &&
      Lt.test(e.name) &&
      t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n);
  }),
    (Ct.readyException = function (e) {
      t.setTimeout(function () {
        throw e;
      });
    });
  var It = Ct.Deferred();
  (Ct.fn.ready = function (t) {
    return (
      It.then(t).catch(function (t) {
        Ct.readyException(t);
      }),
      this
    );
  }),
    Ct.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (t) {
        (!0 === t ? --Ct.readyWait : Ct.isReady) ||
          ((Ct.isReady = !0),
          (!0 !== t && --Ct.readyWait > 0) || It.resolveWith(xt, [Ct]));
      },
    }),
    (Ct.ready.then = It.then),
    "complete" === xt.readyState ||
    ("loading" !== xt.readyState && !xt.documentElement.doScroll)
      ? t.setTimeout(Ct.ready)
      : (xt.addEventListener("DOMContentLoaded", p),
        t.addEventListener("load", p));
  var Rt = function (t, e, n, i, o, a, s) {
      var u = 0,
        c = t.length,
        l = null == n;
      if ("object" === r(n))
        for (u in ((o = !0), n)) Rt(t, e, u, n[u], !0, a, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        bt(i) || (s = !0),
        l &&
          (s
            ? (e.call(t, i), (e = null))
            : ((l = e),
              (e = function (t, e, n) {
                return l.call(Ct(t), n);
              }))),
        e)
      )
        for (; u < c; u++) e(t[u], n, s ? i : i.call(t[u], u, e(t[u], n)));
      return o ? t : l ? e.call(t) : c ? e(t[0], n) : a;
    },
    qt = /^-ms-/,
    Mt = /-([a-z])/g,
    Ht = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  (v.uid = 1),
    (v.prototype = {
      cache: function (t) {
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Ht(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, n) {
        var r,
          i = this.cache(t);
        if ("string" == typeof e) i[d(e)] = n;
        else for (r in e) i[d(r)] = e[r];
        return i;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][d(e)];
      },
      access: function (t, e, n) {
        return void 0 === e || (e && "string" == typeof e && void 0 === n)
          ? this.get(t, e)
          : (this.set(t, e, n), void 0 !== n ? n : e);
      },
      remove: function (t, e) {
        var n,
          r = t[this.expando];
        if (void 0 !== r) {
          if (void 0 !== e) {
            n = (e = Array.isArray(e)
              ? e.map(d)
              : (e = d(e)) in r
              ? [e]
              : e.match($t) || []).length;
            for (; n--; ) delete r[e[n]];
          }
          (void 0 === e || Ct.isEmptyObject(r)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !Ct.isEmptyObject(e);
      },
    });
  var Ft = new v(),
    Bt = new v(),
    Wt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ut = /[A-Z]/g;
  Ct.extend({
    hasData: function (t) {
      return Bt.hasData(t) || Ft.hasData(t);
    },
    data: function (t, e, n) {
      return Bt.access(t, e, n);
    },
    removeData: function (t, e) {
      Bt.remove(t, e);
    },
    _data: function (t, e, n) {
      return Ft.access(t, e, n);
    },
    _removeData: function (t, e) {
      Ft.remove(t, e);
    },
  }),
    Ct.fn.extend({
      data: function (t, e) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((i = Bt.get(o)), 1 === o.nodeType && !Ft.get(o, "hasDataAttrs"))
          ) {
            for (n = a.length; n--; )
              a[n] &&
                0 === (r = a[n].name).indexOf("data-") &&
                ((r = d(r.slice(5))), y(o, r, i[r]));
            Ft.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof t
          ? this.each(function () {
              Bt.set(this, t);
            })
          : Rt(
              this,
              function (e) {
                var n;
                if (o && void 0 === e)
                  return void 0 !== (n = Bt.get(o, t)) ||
                    void 0 !== (n = y(o, t))
                    ? n
                    : void 0;
                this.each(function () {
                  Bt.set(this, t, e);
                });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          Bt.remove(this, t);
        });
      },
    }),
    Ct.extend({
      queue: function (t, e, n) {
        var r;
        if (t)
          return (
            (e = (e || "fx") + "queue"),
            (r = Ft.get(t, e)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Ft.access(t, e, Ct.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var n = Ct.queue(t, e),
          r = n.length,
          i = n.shift(),
          o = Ct._queueHooks(t, e),
          a = function () {
            Ct.dequeue(t, e);
          };
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === e && n.unshift("inprogress"),
            delete o.stop,
            i.call(t, a, o)),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var n = e + "queueHooks";
        return (
          Ft.get(t, n) ||
          Ft.access(t, n, {
            empty: Ct.Callbacks("once memory").add(function () {
              Ft.remove(t, [e + "queue", n]);
            }),
          })
        );
      },
    }),
    Ct.fn.extend({
      queue: function (t, e) {
        var n = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), n--),
          arguments.length < n
            ? Ct.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var n = Ct.queue(this, t, e);
                Ct._queueHooks(this, t),
                  "fx" === t && "inprogress" !== n[0] && Ct.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          Ct.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var n,
          r = 1,
          i = Ct.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          a--;

        )
          (n = Ft.get(o[a], t + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(e);
      },
    });
  var Vt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    zt = new RegExp("^(?:([+-])=|)(" + Vt + ")([a-z%]*)$", "i"),
    Xt = ["Top", "Right", "Bottom", "Left"],
    Jt = xt.documentElement,
    Gt = function (t) {
      return Ct.contains(t.ownerDocument, t);
    },
    Qt = {
      composed: !0,
    };
  Jt.getRootNode &&
    (Gt = function (t) {
      return (
        Ct.contains(t.ownerDocument, t) || t.getRootNode(Qt) === t.ownerDocument
      );
    });
  var Kt = function (t, e) {
      return (
        "none" === (t = e || t).style.display ||
        ("" === t.style.display && Gt(t) && "none" === Ct.css(t, "display"))
      );
    },
    Yt = {};
  Ct.fn.extend({
    show: function () {
      return w(this, !0);
    },
    hide: function () {
      return w(this);
    },
    toggle: function (t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function () {
            Kt(this) ? Ct(this).show() : Ct(this).hide();
          });
    },
  });
  var Zt,
    te,
    ee = /^(?:checkbox|radio)$/i,
    ne = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    re = /^$|^module$|\/(?:java|ecma)script/i;
  (Zt = xt.createDocumentFragment().appendChild(xt.createElement("div"))),
    (te = xt.createElement("input")).setAttribute("type", "radio"),
    te.setAttribute("checked", "checked"),
    te.setAttribute("name", "t"),
    Zt.appendChild(te),
    (mt.checkClone = Zt.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Zt.innerHTML = "<textarea>x</textarea>"),
    (mt.noCloneChecked = !!Zt.cloneNode(!0).lastChild.defaultValue),
    (Zt.innerHTML = "<option></option>"),
    (mt.option = !!Zt.lastChild);
  var ie = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  (ie.tbody = ie.tfoot = ie.colgroup = ie.caption = ie.thead),
    (ie.th = ie.td),
    mt.option ||
      (ie.optgroup = ie.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var oe = /<|&#?\w+;/,
    ae = /^([^.]*)(?:\.(.+)|)/;
  (Ct.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        h,
        d,
        v,
        g = Ft.get(t);
      if (Ht(t))
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && Ct.find.matchesSelector(Jt, i),
            n.guid || (n.guid = Ct.guid++),
            (u = g.events) || (u = g.events = Object.create(null)),
            (a = g.handle) ||
              (a = g.handle =
                function (e) {
                  return void 0 !== Ct && Ct.event.triggered !== e.type
                    ? Ct.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            c = (e = (e || "").match($t) || [""]).length;
          c--;

        )
          (h = v = (s = ae.exec(e[c]) || [])[1]),
            (d = (s[2] || "").split(".").sort()),
            h &&
              ((f = Ct.event.special[h] || {}),
              (h = (i ? f.delegateType : f.bindType) || h),
              (f = Ct.event.special[h] || {}),
              (l = Ct.extend(
                {
                  type: h,
                  origType: v,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && Ct.expr.match.needsContext.test(i),
                  namespace: d.join("."),
                },
                o
              )),
              (p = u[h]) ||
                (((p = u[h] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, d, a)) ||
                  (t.addEventListener && t.addEventListener(h, a))),
              f.add &&
                (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, l) : p.push(l),
              (Ct.event.global[h] = !0));
    },
    remove: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        h,
        d,
        v,
        g = Ft.hasData(t) && Ft.get(t);
      if (g && (u = g.events)) {
        for (c = (e = (e || "").match($t) || [""]).length; c--; )
          if (
            ((h = v = (s = ae.exec(e[c]) || [])[1]),
            (d = (s[2] || "").split(".").sort()),
            h)
          ) {
            for (
              f = Ct.event.special[h] || {},
                p = u[(h = (r ? f.delegateType : f.bindType) || h)] || [],
                s =
                  s[2] &&
                  new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (l = p[o]),
                (!i && v !== l.origType) ||
                  (n && n.guid !== l.guid) ||
                  (s && !s.test(l.namespace)) ||
                  (r && r !== l.selector && ("**" !== r || !l.selector)) ||
                  (p.splice(o, 1),
                  l.selector && p.delegateCount--,
                  f.remove && f.remove.call(t, l));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(t, d, g.handle)) ||
                Ct.removeEvent(t, h, g.handle),
              delete u[h]);
          } else for (h in u) Ct.event.remove(t, h + e[c], n, r, !0);
        Ct.isEmptyObject(u) && Ft.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      var e,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = Ct.event.fix(t),
        c = (Ft.get(this, "events") || Object.create(null))[u.type] || [],
        l = Ct.event.special[u.type] || {};
      for (s[0] = u, e = 1; e < arguments.length; e++) s[e] = arguments[e];
      if (
        ((u.delegateTarget = this),
        !l.preDispatch || !1 !== l.preDispatch.call(this, u))
      ) {
        for (
          a = Ct.event.handlers.call(this, u, c), e = 0;
          (i = a[e++]) && !u.isPropagationStopped();

        )
          for (
            u.currentTarget = i.elem, n = 0;
            (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

          )
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (Ct.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        return l.postDispatch && l.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (t, e) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = e.delegateCount,
        c = t.target;
      if (u && c.nodeType && !("click" === t.type && t.button >= 1))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = e[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? Ct(i, this).index(c) > -1
                  : Ct.find(i, this, null, [c]).length),
                a[i] && o.push(r);
            o.length &&
              s.push({
                elem: c,
                handlers: o,
              });
          }
      return (
        (c = this),
        u < e.length &&
          s.push({
            elem: c,
            handlers: e.slice(u),
          }),
        s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(Ct.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: bt(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (t) {
      return t[Ct.expando] ? t : new Ct.Event(t);
    },
    special: {
      load: {
        noBubble: !0,
      },
      click: {
        setup: function (t) {
          var e = this || t;
          return (
            ee.test(e.type) && e.click && o(e, "input") && _(e, "click", C), !1
          );
        },
        trigger: function (t) {
          var e = this || t;
          return (
            ee.test(e.type) && e.click && o(e, "input") && _(e, "click"), !0
          );
        },
        _default: function (t) {
          var e = t.target;
          return (
            (ee.test(e.type) &&
              e.click &&
              o(e, "input") &&
              Ft.get(e, "click")) ||
            o(e, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (Ct.removeEvent = function (t, e, n) {
      t.removeEventListener && t.removeEventListener(e, n);
    }),
    (Ct.Event = function (t, e) {
      if (!(this instanceof Ct.Event)) return new Ct.Event(t, e);
      t && t.type
        ? ((this.originalEvent = t),
          (this.type = t.type),
          (this.isDefaultPrevented =
            t.defaultPrevented ||
            (void 0 === t.defaultPrevented && !1 === t.returnValue)
              ? C
              : S),
          (this.target =
            t.target && 3 === t.target.nodeType
              ? t.target.parentNode
              : t.target),
          (this.currentTarget = t.currentTarget),
          (this.relatedTarget = t.relatedTarget))
        : (this.type = t),
        e && Ct.extend(this, e),
        (this.timeStamp = (t && t.timeStamp) || Date.now()),
        (this[Ct.expando] = !0);
    }),
    (Ct.Event.prototype = {
      constructor: Ct.Event,
      isDefaultPrevented: S,
      isPropagationStopped: S,
      isImmediatePropagationStopped: S,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = C),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = C),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = C),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    Ct.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      Ct.event.addProp
    ),
    Ct.each(
      {
        focus: "focusin",
        blur: "focusout",
      },
      function (t, e) {
        Ct.event.special[t] = {
          setup: function () {
            return _(this, t, E), !1;
          },
          trigger: function () {
            return _(this, t), !0;
          },
          _default: function () {
            return !0;
          },
          delegateType: e,
        };
      }
    ),
    Ct.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        Ct.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var n,
              r = this,
              i = t.relatedTarget,
              o = t.handleObj;
            return (
              (i && (i === r || Ct.contains(r, i))) ||
                ((t.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (t.type = e)),
              n
            );
          },
        };
      }
    ),
    Ct.fn.extend({
      on: function (t, e, n, r) {
        return P(this, t, e, n, r);
      },
      one: function (t, e, n, r) {
        return P(this, t, e, n, r, 1);
      },
      off: function (t, e, n) {
        var r, i;
        if (t && t.preventDefault && t.handleObj)
          return (
            (r = t.handleObj),
            Ct(t.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (i in t) this.off(i, e, t[i]);
          return this;
        }
        return (
          (!1 !== e && "function" != typeof e) || ((n = e), (e = void 0)),
          !1 === n && (n = S),
          this.each(function () {
            Ct.event.remove(this, t, n, e);
          })
        );
      },
    });
  var se = /<script|<style|<link/i,
    ue = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ce = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  Ct.extend({
    htmlPrefilter: function (t) {
      return t;
    },
    clone: function (t, e, n) {
      var r,
        i,
        o,
        a,
        s = t.cloneNode(!0),
        u = Gt(t);
      if (
        !(
          mt.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          Ct.isXMLDoc(t)
        )
      )
        for (a = x(s), r = 0, i = (o = x(t)).length; r < i; r++) $(o[r], a[r]);
      if (e)
        if (n)
          for (o = o || x(t), a = a || x(s), r = 0, i = o.length; r < i; r++)
            O(o[r], a[r]);
        else O(t, s);
      return (a = x(s, "script")).length > 0 && T(a, !u && x(t, "script")), s;
    },
    cleanData: function (t) {
      for (var e, n, r, i = Ct.event.special, o = 0; void 0 !== (n = t[o]); o++)
        if (Ht(n)) {
          if ((e = n[Ft.expando])) {
            if (e.events)
              for (r in e.events)
                i[r] ? Ct.event.remove(n, r) : Ct.removeEvent(n, r, e.handle);
            n[Ft.expando] = void 0;
          }
          n[Bt.expando] && (n[Bt.expando] = void 0);
        }
    },
  }),
    Ct.fn.extend({
      detach: function (t) {
        return I(this, t, !0);
      },
      remove: function (t) {
        return I(this, t);
      },
      text: function (t) {
        return Rt(
          this,
          function (t) {
            return void 0 === t
              ? Ct.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return L(this, arguments, function (t) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            A(this, t).appendChild(t);
        });
      },
      prepend: function () {
        return L(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = A(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return L(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return L(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (Ct.cleanData(x(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return Ct.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return Rt(
          this,
          function (t) {
            var e = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !se.test(t) &&
              !ie[(ne.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = Ct.htmlPrefilter(t);
              try {
                for (; n < r; n++)
                  1 === (e = this[n] || {}).nodeType &&
                    (Ct.cleanData(x(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return L(
          this,
          arguments,
          function (e) {
            var n = this.parentNode;
            Ct.inArray(this, t) < 0 &&
              (Ct.cleanData(x(this)), n && n.replaceChild(e, this));
          },
          t
        );
      },
    }),
    Ct.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        Ct.fn[t] = function (t) {
          for (var n, r = [], i = Ct(t), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)),
              Ct(i[a])[e](n),
              ft.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var le = new RegExp("^(" + Vt + ")(?!px)[a-z%]+$", "i"),
    fe = function (e) {
      var n = e.ownerDocument.defaultView;
      return (n && n.opener) || (n = t), n.getComputedStyle(e);
    },
    pe = function (t, e, n) {
      var r,
        i,
        o = {};
      for (i in e) (o[i] = t.style[i]), (t.style[i] = e[i]);
      for (i in ((r = n.call(t)), e)) t.style[i] = o[i];
      return r;
    },
    he = new RegExp(Xt.join("|"), "i");
  !(function () {
    function e() {
      if (l) {
        (c.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          Jt.appendChild(c).appendChild(l);
        var e = t.getComputedStyle(l);
        (r = "1%" !== e.top),
          (u = 12 === n(e.marginLeft)),
          (l.style.right = "60%"),
          (a = 36 === n(e.right)),
          (i = 36 === n(e.width)),
          (l.style.position = "absolute"),
          (o = 12 === n(l.offsetWidth / 3)),
          Jt.removeChild(c),
          (l = null);
      }
    }
    function n(t) {
      return Math.round(parseFloat(t));
    }
    var r,
      i,
      o,
      a,
      s,
      u,
      c = xt.createElement("div"),
      l = xt.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (mt.clearCloneStyle = "content-box" === l.style.backgroundClip),
      Ct.extend(mt, {
        boxSizingReliable: function () {
          return e(), i;
        },
        pixelBoxStyles: function () {
          return e(), a;
        },
        pixelPosition: function () {
          return e(), r;
        },
        reliableMarginLeft: function () {
          return e(), u;
        },
        scrollboxSize: function () {
          return e(), o;
        },
        reliableTrDimensions: function () {
          var e, n, r, i;
          return (
            null == s &&
              ((e = xt.createElement("table")),
              (n = xt.createElement("tr")),
              (r = xt.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (n.style.cssText = "border:1px solid"),
              (n.style.height = "1px"),
              (r.style.height = "9px"),
              (r.style.display = "block"),
              Jt.appendChild(e).appendChild(n).appendChild(r),
              (i = t.getComputedStyle(n)),
              (s =
                parseInt(i.height, 10) +
                  parseInt(i.borderTopWidth, 10) +
                  parseInt(i.borderBottomWidth, 10) ===
                n.offsetHeight),
              Jt.removeChild(e)),
            s
          );
        },
      }));
  })();
  var de = ["Webkit", "Moz", "ms"],
    ve = xt.createElement("div").style,
    ge = {},
    ye = /^(none|table(?!-c[ea]).+)/,
    me = /^--/,
    be = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    we = {
      letterSpacing: "0",
      fontWeight: "400",
    };
  Ct.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var n = R(t, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (t, e, n, r) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var i,
          o,
          a,
          s = d(e),
          u = me.test(e),
          c = t.style;
        if (
          (u || (e = H(s)),
          (a = Ct.cssHooks[e] || Ct.cssHooks[s]),
          void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : c[e];
        "string" === (o = typeof n) &&
          (i = zt.exec(n)) &&
          i[1] &&
          ((n = m(t, e, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (Ct.cssNumber[s] ? "" : "px")),
            mt.clearCloneStyle ||
              "" !== n ||
              0 !== e.indexOf("background") ||
              (c[e] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(t, n, r))) ||
              (u ? c.setProperty(e, n) : (c[e] = n)));
      }
    },
    css: function (t, e, n, r) {
      var i,
        o,
        a,
        s = d(e);
      return (
        me.test(e) || (e = H(s)),
        (a = Ct.cssHooks[e] || Ct.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(t, !0, n)),
        void 0 === i && (i = R(t, e, r)),
        "normal" === i && e in we && (i = we[e]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    Ct.each(["height", "width"], function (t, e) {
      Ct.cssHooks[e] = {
        get: function (t, n, r) {
          if (n)
            return !ye.test(Ct.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? W(t, e, r)
              : pe(t, be, function () {
                  return W(t, e, r);
                });
        },
        set: function (t, n, r) {
          var i,
            o = fe(t),
            a = !mt.scrollboxSize() && "absolute" === o.position,
            s = (a || r) && "border-box" === Ct.css(t, "boxSizing", !1, o),
            u = r ? B(t, e, r, s, o) : 0;
          return (
            s &&
              a &&
              (u -= Math.ceil(
                t["offset" + e[0].toUpperCase() + e.slice(1)] -
                  parseFloat(o[e]) -
                  B(t, e, "border", !1, o) -
                  0.5
              )),
            u &&
              (i = zt.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((t.style[e] = n), (n = Ct.css(t, e))),
            F(t, n, u)
          );
        },
      };
    }),
    (Ct.cssHooks.marginLeft = q(mt.reliableMarginLeft, function (t, e) {
      if (e)
        return (
          (parseFloat(R(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              pe(
                t,
                {
                  marginLeft: 0,
                },
                function () {
                  return t.getBoundingClientRect().left;
                }
              )) + "px"
        );
    })),
    Ct.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (t, e) {
        (Ct.cssHooks[t + e] = {
          expand: function (n) {
            for (
              var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
              r < 4;
              r++
            )
              i[t + Xt[r] + e] = o[r] || o[r - 2] || o[0];
            return i;
          },
        }),
          "margin" !== t && (Ct.cssHooks[t + e].set = F);
      }
    ),
    Ct.fn.extend({
      css: function (t, e) {
        return Rt(
          this,
          function (t, e, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(e)) {
              for (r = fe(t), i = e.length; a < i; a++)
                o[e[a]] = Ct.css(t, e[a], !1, r);
              return o;
            }
            return void 0 !== n ? Ct.style(t, e, n) : Ct.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
    }),
    (Ct.Tween = U),
    (U.prototype = {
      constructor: U,
      init: function (t, e, n, r, i, o) {
        (this.elem = t),
          (this.prop = n),
          (this.easing = i || Ct.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (Ct.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var t = U.propHooks[this.prop];
        return t && t.get ? t.get(this) : U.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          n = U.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                Ct.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : U.propHooks._default.set(this),
          this
        );
      },
    }),
    (U.prototype.init.prototype = U.prototype),
    (U.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (e = Ct.css(t.elem, t.prop, "")) && "auto" !== e
            ? e
            : 0;
        },
        set: function (t) {
          Ct.fx.step[t.prop]
            ? Ct.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (!Ct.cssHooks[t.prop] && null == t.elem.style[H(t.prop)])
            ? (t.elem[t.prop] = t.now)
            : Ct.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (U.propHooks.scrollTop = U.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (Ct.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (Ct.fx = U.prototype.init),
    (Ct.fx.step = {});
  var xe,
    Te,
    ke = /^(?:toggle|show|hide)$/,
    Ce = /queueHooks$/;
  (Ct.Animation = Ct.extend(K, {
    tweeners: {
      "*": [
        function (t, e) {
          var n = this.createTween(t, e);
          return m(n.elem, t, zt.exec(e), n), n;
        },
      ],
    },
    tweener: function (t, e) {
      bt(t) ? ((e = t), (t = ["*"])) : (t = t.match($t));
      for (var n, r = 0, i = t.length; r < i; r++)
        (n = t[r]),
          (K.tweeners[n] = K.tweeners[n] || []),
          K.tweeners[n].unshift(e);
    },
    prefilters: [G],
    prefilter: function (t, e) {
      e ? K.prefilters.unshift(t) : K.prefilters.push(t);
    },
  })),
    (Ct.speed = function (t, e, n) {
      var r =
        t && "object" == typeof t
          ? Ct.extend({}, t)
          : {
              complete: n || (!n && e) || (bt(t) && t),
              duration: t,
              easing: (n && e) || (e && !bt(e) && e),
            };
      return (
        Ct.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in Ct.fx.speeds
              ? (r.duration = Ct.fx.speeds[r.duration])
              : (r.duration = Ct.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          bt(r.old) && r.old.call(this), r.queue && Ct.dequeue(this, r.queue);
        }),
        r
      );
    }),
    Ct.fn.extend({
      fadeTo: function (t, e, n, r) {
        return this.filter(Kt).css("opacity", 0).show().end().animate(
          {
            opacity: e,
          },
          t,
          n,
          r
        );
      },
      animate: function (t, e, n, r) {
        var i = Ct.isEmptyObject(t),
          o = Ct.speed(e, n, r),
          a = function () {
            var e = K(this, Ct.extend({}, t), o);
            (i || Ft.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (t, e, n) {
        var r = function (t) {
          var e = t.stop;
          delete t.stop, e(n);
        };
        return (
          "string" != typeof t && ((n = e), (e = t), (t = void 0)),
          e && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              i = null != t && t + "queueHooks",
              o = Ct.timers,
              a = Ft.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && Ce.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this ||
                (null != t && o[i].queue !== t) ||
                (o[i].anim.stop(n), (e = !1), o.splice(i, 1));
            (!e && n) || Ct.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          !1 !== t && (t = t || "fx"),
          this.each(function () {
            var e,
              n = Ft.get(this),
              r = n[t + "queue"],
              i = n[t + "queueHooks"],
              o = Ct.timers,
              a = r ? r.length : 0;
            for (
              n.finish = !0,
                Ct.queue(this, t, []),
                i && i.stop && i.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; e < a; e++)
              r[e] && r[e].finish && r[e].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    Ct.each(["toggle", "show", "hide"], function (t, e) {
      var n = Ct.fn[e];
      Ct.fn[e] = function (t, r, i) {
        return null == t || "boolean" == typeof t
          ? n.apply(this, arguments)
          : this.animate(X(e, !0), t, r, i);
      };
    }),
    Ct.each(
      {
        slideDown: X("show"),
        slideUp: X("hide"),
        slideToggle: X("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (t, e) {
        Ct.fn[t] = function (t, n, r) {
          return this.animate(e, t, n, r);
        };
      }
    ),
    (Ct.timers = []),
    (Ct.fx.tick = function () {
      var t,
        e = 0,
        n = Ct.timers;
      for (xe = Date.now(); e < n.length; e++)
        (t = n[e])() || n[e] !== t || n.splice(e--, 1);
      n.length || Ct.fx.stop(), (xe = void 0);
    }),
    (Ct.fx.timer = function (t) {
      Ct.timers.push(t), Ct.fx.start();
    }),
    (Ct.fx.interval = 13),
    (Ct.fx.start = function () {
      Te || ((Te = !0), V());
    }),
    (Ct.fx.stop = function () {
      Te = null;
    }),
    (Ct.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (Ct.fn.delay = function (e, n) {
      return (
        (e = (Ct.fx && Ct.fx.speeds[e]) || e),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = t.setTimeout(n, e);
          r.stop = function () {
            t.clearTimeout(i);
          };
        })
      );
    }),
    (function () {
      var t = xt.createElement("input"),
        e = xt.createElement("select").appendChild(xt.createElement("option"));
      (t.type = "checkbox"),
        (mt.checkOn = "" !== t.value),
        (mt.optSelected = e.selected),
        ((t = xt.createElement("input")).value = "t"),
        (t.type = "radio"),
        (mt.radioValue = "t" === t.value);
    })();
  var Se,
    Ee = Ct.expr.attrHandle;
  Ct.fn.extend({
    attr: function (t, e) {
      return Rt(this, Ct.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        Ct.removeAttr(this, t);
      });
    },
  }),
    Ct.extend({
      attr: function (t, e, n) {
        var r,
          i,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === t.getAttribute
            ? Ct.prop(t, e, n)
            : ((1 === o && Ct.isXMLDoc(t)) ||
                (i =
                  Ct.attrHooks[e.toLowerCase()] ||
                  (Ct.expr.match.bool.test(e) ? Se : void 0)),
              void 0 !== n
                ? null === n
                  ? void Ct.removeAttr(t, e)
                  : i && "set" in i && void 0 !== (r = i.set(t, n, e))
                  ? r
                  : (t.setAttribute(e, n + ""), n)
                : i && "get" in i && null !== (r = i.get(t, e))
                ? r
                : null == (r = Ct.find.attr(t, e))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!mt.radioValue && "radio" === e && o(t, "input")) {
              var n = t.value;
              return t.setAttribute("type", e), n && (t.value = n), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var n,
          r = 0,
          i = e && e.match($t);
        if (i && 1 === t.nodeType) for (; (n = i[r++]); ) t.removeAttribute(n);
      },
    }),
    (Se = {
      set: function (t, e, n) {
        return !1 === e ? Ct.removeAttr(t, n) : t.setAttribute(n, n), n;
      },
    }),
    Ct.each(Ct.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var n = Ee[e] || Ct.find.attr;
      Ee[e] = function (t, e, r) {
        var i,
          o,
          a = e.toLowerCase();
        return (
          r ||
            ((o = Ee[a]),
            (Ee[a] = i),
            (i = null != n(t, e, r) ? a : null),
            (Ee[a] = o)),
          i
        );
      };
    });
  var je = /^(?:input|select|textarea|button)$/i,
    Pe = /^(?:a|area)$/i;
  Ct.fn.extend({
    prop: function (t, e) {
      return Rt(this, Ct.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[Ct.propFix[t] || t];
      });
    },
  }),
    Ct.extend({
      prop: function (t, e, n) {
        var r,
          i,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && Ct.isXMLDoc(t)) ||
              ((e = Ct.propFix[e] || e), (i = Ct.propHooks[e])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(t, n, e))
                ? r
                : (t[e] = n)
              : i && "get" in i && null !== (r = i.get(t, e))
              ? r
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = Ct.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : je.test(t.nodeName) || (Pe.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    mt.optSelected ||
      (Ct.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    Ct.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        Ct.propFix[this.toLowerCase()] = this;
      }
    ),
    Ct.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (bt(t))
          return this.each(function (e) {
            Ct(this).addClass(t.call(this, e, Z(this)));
          });
        if ((e = tt(t)).length)
          for (; (n = this[u++]); )
            if (((i = Z(n)), (r = 1 === n.nodeType && " " + Y(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = Y(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (bt(t))
          return this.each(function (e) {
            Ct(this).removeClass(t.call(this, e, Z(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = tt(t)).length)
          for (; (n = this[u++]); )
            if (((i = Z(n)), (r = 1 === n.nodeType && " " + Y(i) + " "))) {
              for (a = 0; (o = e[a++]); )
                for (; r.indexOf(" " + o + " ") > -1; )
                  r = r.replace(" " + o + " ", " ");
              i !== (s = Y(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (t, e) {
        var n = typeof t,
          r = "string" === n || Array.isArray(t);
        return "boolean" == typeof e && r
          ? e
            ? this.addClass(t)
            : this.removeClass(t)
          : bt(t)
          ? this.each(function (n) {
              Ct(this).toggleClass(t.call(this, n, Z(this), e), e);
            })
          : this.each(function () {
              var e, i, o, a;
              if (r)
                for (i = 0, o = Ct(this), a = tt(t); (e = a[i++]); )
                  o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
              else
                (void 0 !== t && "boolean" !== n) ||
                  ((e = Z(this)) && Ft.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === t ? "" : Ft.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function (t) {
        var e,
          n,
          r = 0;
        for (e = " " + t + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + Y(Z(n)) + " ").indexOf(e) > -1)
            return !0;
        return !1;
      },
    });
  var _e = /\r/g;
  Ct.fn.extend({
    val: function (t) {
      var e,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = bt(t)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? t.call(this, n, Ct(this).val()) : t)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = Ct.map(i, function (t) {
                    return null == t ? "" : t + "";
                  })),
              ((e =
                Ct.valHooks[this.type] ||
                Ct.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in e &&
                void 0 !== e.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (e = Ct.valHooks[i.type] || Ct.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in e &&
          void 0 !== (n = e.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(_e, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    Ct.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = Ct.find.attr(t, "value");
            return null != e ? e : Y(Ct.text(t));
          },
        },
        select: {
          get: function (t) {
            var e,
              n,
              r,
              i = t.options,
              a = t.selectedIndex,
              s = "select-one" === t.type,
              u = s ? null : [],
              c = s ? a + 1 : i.length;
            for (r = a < 0 ? c : s ? a : 0; r < c; r++)
              if (
                ((n = i[r]).selected || r === a) &&
                !n.disabled &&
                (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))
              ) {
                if (((e = Ct(n).val()), s)) return e;
                u.push(e);
              }
            return u;
          },
          set: function (t, e) {
            for (
              var n, r, i = t.options, o = Ct.makeArray(e), a = i.length;
              a--;

            )
              ((r = i[a]).selected =
                Ct.inArray(Ct.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    Ct.each(["radio", "checkbox"], function () {
      (Ct.valHooks[this] = {
        set: function (t, e) {
          if (Array.isArray(e))
            return (t.checked = Ct.inArray(Ct(t).val(), e) > -1);
        },
      }),
        mt.checkOn ||
          (Ct.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    (mt.focusin = "onfocusin" in t);
  var Ae = /^(?:focusinfocus|focusoutblur)$/,
    Ne = function (t) {
      t.stopPropagation();
    };
  Ct.extend(Ct.event, {
    trigger: function (e, n, r, i) {
      var o,
        a,
        s,
        u,
        c,
        l,
        f,
        p,
        h = [r || xt],
        d = vt.call(e, "type") ? e.type : e,
        v = vt.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((a = p = s = r = r || xt),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Ae.test(d + Ct.event.triggered) &&
          (d.indexOf(".") > -1 &&
            ((v = d.split(".")), (d = v.shift()), v.sort()),
          (c = d.indexOf(":") < 0 && "on" + d),
          ((e = e[Ct.expando]
            ? e
            : new Ct.Event(d, "object" == typeof e && e)).isTrigger = i
            ? 2
            : 3),
          (e.namespace = v.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = r),
          (n = null == n ? [e] : Ct.makeArray(n, [e])),
          (f = Ct.event.special[d] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !wt(r)) {
          for (
            u = f.delegateType || d, Ae.test(u + d) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            h.push(a), (s = a);
          s === (r.ownerDocument || xt) &&
            h.push(s.defaultView || s.parentWindow || t);
        }
        for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
          (p = a),
            (e.type = o > 1 ? u : f.bindType || d),
            (l =
              (Ft.get(a, "events") || Object.create(null))[e.type] &&
              Ft.get(a, "handle")) && l.apply(a, n),
            (l = c && a[c]) &&
              l.apply &&
              Ht(a) &&
              ((e.result = l.apply(a, n)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          i ||
            e.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(h.pop(), n)) ||
            !Ht(r) ||
            (c &&
              bt(r[d]) &&
              !wt(r) &&
              ((s = r[c]) && (r[c] = null),
              (Ct.event.triggered = d),
              e.isPropagationStopped() && p.addEventListener(d, Ne),
              r[d](),
              e.isPropagationStopped() && p.removeEventListener(d, Ne),
              (Ct.event.triggered = void 0),
              s && (r[c] = s))),
          e.result
        );
      }
    },
    simulate: function (t, e, n) {
      var r = Ct.extend(new Ct.Event(), n, {
        type: t,
        isSimulated: !0,
      });
      Ct.event.trigger(r, null, e);
    },
  }),
    Ct.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          Ct.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var n = this[0];
        if (n) return Ct.event.trigger(t, e, n, !0);
      },
    }),
    mt.focusin ||
      Ct.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (t, e) {
          var n = function (t) {
            Ct.event.simulate(e, t.target, Ct.event.fix(t));
          };
          Ct.event.special[e] = {
            setup: function () {
              var r = this.ownerDocument || this.document || this,
                i = Ft.access(r, e);
              i || r.addEventListener(t, n, !0), Ft.access(r, e, (i || 0) + 1);
            },
            teardown: function () {
              var r = this.ownerDocument || this.document || this,
                i = Ft.access(r, e) - 1;
              i
                ? Ft.access(r, e, i)
                : (r.removeEventListener(t, n, !0), Ft.remove(r, e));
            },
          };
        }
      );
  var De = t.location,
    Oe = {
      guid: Date.now(),
    },
    $e = /\?/;
  Ct.parseXML = function (e) {
    var n, r;
    if (!e || "string" != typeof e) return null;
    try {
      n = new t.DOMParser().parseFromString(e, "text/xml");
    } catch (t) {}
    return (
      (r = n && n.getElementsByTagName("parsererror")[0]),
      (n && !r) ||
        Ct.error(
          "Invalid XML: " +
            (r
              ? Ct.map(r.childNodes, function (t) {
                  return t.textContent;
                }).join("\n")
              : e)
        ),
      n
    );
  };
  var Le = /\[\]$/,
    Ie = /\r?\n/g,
    Re = /^(?:submit|button|image|reset|file)$/i,
    qe = /^(?:input|select|textarea|keygen)/i;
  (Ct.param = function (t, e) {
    var n,
      r = [],
      i = function (t, e) {
        var n = bt(e) ? e() : e;
        r[r.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == t) return "";
    if (Array.isArray(t) || (t.jquery && !Ct.isPlainObject(t)))
      Ct.each(t, function () {
        i(this.name, this.value);
      });
    else for (n in t) et(n, t[n], e, i);
    return r.join("&");
  }),
    Ct.fn.extend({
      serialize: function () {
        return Ct.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = Ct.prop(this, "elements");
          return t ? Ct.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !Ct(this).is(":disabled") &&
              qe.test(this.nodeName) &&
              !Re.test(t) &&
              (this.checked || !ee.test(t))
            );
          })
          .map(function (t, e) {
            var n = Ct(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? Ct.map(n, function (t) {
                  return {
                    name: e.name,
                    value: t.replace(Ie, "\r\n"),
                  };
                })
              : {
                  name: e.name,
                  value: n.replace(Ie, "\r\n"),
                };
          })
          .get();
      },
    });
  var Me = /%20/g,
    He = /#.*$/,
    Fe = /([?&])_=[^&]*/,
    Be = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    We = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ue = /^(?:GET|HEAD)$/,
    Ve = /^\/\//,
    ze = {},
    Xe = {},
    Je = "*/".concat("*"),
    Ge = xt.createElement("a");
  (Ge.href = De.href),
    Ct.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: De.href,
        type: "GET",
        isLocal: We.test(De.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Je,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": Ct.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (t, e) {
        return e ? it(it(t, Ct.ajaxSettings), e) : it(Ct.ajaxSettings, t);
      },
      ajaxPrefilter: nt(ze),
      ajaxTransport: nt(Xe),
      ajax: function (e, n) {
        function r(e, n, r, s) {
          var c,
            p,
            h,
            w,
            x,
            T = n;
          l ||
            ((l = !0),
            u && t.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (k.readyState = e > 0 ? 4 : 0),
            (c = (e >= 200 && e < 300) || 304 === e),
            r && (w = ot(d, k, r)),
            !c &&
              Ct.inArray("script", d.dataTypes) > -1 &&
              Ct.inArray("json", d.dataTypes) < 0 &&
              (d.converters["text script"] = function () {}),
            (w = at(d, w, k, c)),
            c
              ? (d.ifModified &&
                  ((x = k.getResponseHeader("Last-Modified")) &&
                    (Ct.lastModified[o] = x),
                  (x = k.getResponseHeader("etag")) && (Ct.etag[o] = x)),
                204 === e || "HEAD" === d.type
                  ? (T = "nocontent")
                  : 304 === e
                  ? (T = "notmodified")
                  : ((T = w.state), (p = w.data), (c = !(h = w.error))))
              : ((h = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
            (k.status = e),
            (k.statusText = (n || T) + ""),
            c ? y.resolveWith(v, [p, T, k]) : y.rejectWith(v, [k, T, h]),
            k.statusCode(b),
            (b = void 0),
            f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [k, d, c ? p : h]),
            m.fireWith(v, [k, T]),
            f &&
              (g.trigger("ajaxComplete", [k, d]),
              --Ct.active || Ct.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((n = e), (e = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          c,
          l,
          f,
          p,
          h,
          d = Ct.ajaxSetup({}, n),
          v = d.context || d,
          g = d.context && (v.nodeType || v.jquery) ? Ct(v) : Ct.event,
          y = Ct.Deferred(),
          m = Ct.Callbacks("once memory"),
          b = d.statusCode || {},
          w = {},
          x = {},
          T = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (l) {
                if (!s)
                  for (s = {}; (e = Be.exec(a)); )
                    s[e[1].toLowerCase() + " "] = (
                      s[e[1].toLowerCase() + " "] || []
                    ).concat(e[2]);
                e = s[t.toLowerCase() + " "];
              }
              return null == e ? null : e.join(", ");
            },
            getAllResponseHeaders: function () {
              return l ? a : null;
            },
            setRequestHeader: function (t, e) {
              return (
                null == l &&
                  ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t),
                  (w[t] = e)),
                this
              );
            },
            overrideMimeType: function (t) {
              return null == l && (d.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (l) k.always(t[k.status]);
                else for (e in t) b[e] = [b[e], t[e]];
              return this;
            },
            abort: function (t) {
              var e = t || T;
              return i && i.abort(e), r(0, e), this;
            },
          };
        if (
          (y.promise(k),
          (d.url = ((e || d.url || De.href) + "").replace(
            Ve,
            De.protocol + "//"
          )),
          (d.type = n.method || n.type || d.method || d.type),
          (d.dataTypes = (d.dataType || "*").toLowerCase().match($t) || [""]),
          null == d.crossDomain)
        ) {
          c = xt.createElement("a");
          try {
            (c.href = d.url),
              (c.href = c.href),
              (d.crossDomain =
                Ge.protocol + "//" + Ge.host != c.protocol + "//" + c.host);
          } catch (t) {
            d.crossDomain = !0;
          }
        }
        if (
          (d.data &&
            d.processData &&
            "string" != typeof d.data &&
            (d.data = Ct.param(d.data, d.traditional)),
          rt(ze, d, n, k),
          l)
        )
          return k;
        for (p in ((f = Ct.event && d.global) &&
          0 == Ct.active++ &&
          Ct.event.trigger("ajaxStart"),
        (d.type = d.type.toUpperCase()),
        (d.hasContent = !Ue.test(d.type)),
        (o = d.url.replace(He, "")),
        d.hasContent
          ? d.data &&
            d.processData &&
            0 ===
              (d.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (d.data = d.data.replace(Me, "+"))
          : ((h = d.url.slice(o.length)),
            d.data &&
              (d.processData || "string" == typeof d.data) &&
              ((o += ($e.test(o) ? "&" : "?") + d.data), delete d.data),
            !1 === d.cache &&
              ((o = o.replace(Fe, "$1")),
              (h = ($e.test(o) ? "&" : "?") + "_=" + Oe.guid++ + h)),
            (d.url = o + h)),
        d.ifModified &&
          (Ct.lastModified[o] &&
            k.setRequestHeader("If-Modified-Since", Ct.lastModified[o]),
          Ct.etag[o] && k.setRequestHeader("If-None-Match", Ct.etag[o])),
        ((d.data && d.hasContent && !1 !== d.contentType) || n.contentType) &&
          k.setRequestHeader("Content-Type", d.contentType),
        k.setRequestHeader(
          "Accept",
          d.dataTypes[0] && d.accepts[d.dataTypes[0]]
            ? d.accepts[d.dataTypes[0]] +
                ("*" !== d.dataTypes[0] ? ", " + Je + "; q=0.01" : "")
            : d.accepts["*"]
        ),
        d.headers))
          k.setRequestHeader(p, d.headers[p]);
        if (d.beforeSend && (!1 === d.beforeSend.call(v, k, d) || l))
          return k.abort();
        if (
          ((T = "abort"),
          m.add(d.complete),
          k.done(d.success),
          k.fail(d.error),
          (i = rt(Xe, d, n, k)))
        ) {
          if (((k.readyState = 1), f && g.trigger("ajaxSend", [k, d]), l))
            return k;
          d.async &&
            d.timeout > 0 &&
            (u = t.setTimeout(function () {
              k.abort("timeout");
            }, d.timeout));
          try {
            (l = !1), i.send(w, r);
          } catch (t) {
            if (l) throw t;
            r(-1, t);
          }
        } else r(-1, "No Transport");
        return k;
      },
      getJSON: function (t, e, n) {
        return Ct.get(t, e, n, "json");
      },
      getScript: function (t, e) {
        return Ct.get(t, void 0, e, "script");
      },
    }),
    Ct.each(["get", "post"], function (t, e) {
      Ct[e] = function (t, n, r, i) {
        return (
          bt(n) && ((i = i || r), (r = n), (n = void 0)),
          Ct.ajax(
            Ct.extend(
              {
                url: t,
                type: e,
                dataType: i,
                data: n,
                success: r,
              },
              Ct.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    Ct.ajaxPrefilter(function (t) {
      var e;
      for (e in t.headers)
        "content-type" === e.toLowerCase() &&
          (t.contentType = t.headers[e] || "");
    }),
    (Ct._evalUrl = function (t, e, n) {
      return Ct.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function () {},
        },
        dataFilter: function (t) {
          Ct.globalEval(t, e, n);
        },
      });
    }),
    Ct.fn.extend({
      wrapAll: function (t) {
        var e;
        return (
          this[0] &&
            (bt(t) && (t = t.call(this[0])),
            (e = Ct(t, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && e.insertBefore(this[0]),
            e
              .map(function () {
                for (var t = this; t.firstElementChild; )
                  t = t.firstElementChild;
                return t;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (t) {
        return bt(t)
          ? this.each(function (e) {
              Ct(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = Ct(this),
                n = e.contents();
              n.length ? n.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = bt(t);
        return this.each(function (n) {
          Ct(this).wrapAll(e ? t.call(this, n) : t);
        });
      },
      unwrap: function (t) {
        return (
          this.parent(t)
            .not("body")
            .each(function () {
              Ct(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (Ct.expr.pseudos.hidden = function (t) {
      return !Ct.expr.pseudos.visible(t);
    }),
    (Ct.expr.pseudos.visible = function (t) {
      return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
    }),
    (Ct.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Qe = {
      0: 200,
      1223: 204,
    },
    Ke = Ct.ajaxSettings.xhr();
  (mt.cors = !!Ke && "withCredentials" in Ke),
    (mt.ajax = Ke = !!Ke),
    Ct.ajaxTransport(function (e) {
      var n, r;
      if (mt.cors || (Ke && !e.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = e.xhr();
            if (
              (s.open(e.type, e.url, e.async, e.username, e.password),
              e.xhrFields)
            )
              for (a in e.xhrFields) s[a] = e.xhrFields[a];
            for (a in (e.mimeType &&
              s.overrideMimeType &&
              s.overrideMimeType(e.mimeType),
            e.crossDomain ||
              i["X-Requested-With"] ||
              (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (t) {
              return function () {
                n &&
                  ((n =
                    r =
                    s.onload =
                    s.onerror =
                    s.onabort =
                    s.ontimeout =
                    s.onreadystatechange =
                      null),
                  "abort" === t
                    ? s.abort()
                    : "error" === t
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Qe[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") ||
                          "string" != typeof s.responseText
                          ? {
                              binary: s.response,
                            }
                          : {
                              text: s.responseText,
                            },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      t.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((e.hasContent && e.data) || null);
            } catch (t) {
              if (n) throw t;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    Ct.ajaxPrefilter(function (t) {
      t.crossDomain && (t.contents.script = !1);
    }),
    Ct.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (t) {
          return Ct.globalEval(t), t;
        },
      },
    }),
    Ct.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    Ct.ajaxTransport("script", function (t) {
      var e, n;
      if (t.crossDomain || t.scriptAttrs)
        return {
          send: function (r, i) {
            (e = Ct("<script>")
              .attr(t.scriptAttrs || {})
              .prop({
                charset: t.scriptCharset,
                src: t.url,
              })
              .on(
                "load error",
                (n = function (t) {
                  e.remove(),
                    (n = null),
                    t && i("error" === t.type ? 404 : 200, t.type);
                })
              )),
              xt.head.appendChild(e[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var Ye,
    Ze = [],
    tn = /(=)\?(?=&|$)|\?\?/;
  Ct.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ze.pop() || Ct.expando + "_" + Oe.guid++;
      return (this[t] = !0), t;
    },
  }),
    Ct.ajaxPrefilter("json jsonp", function (e, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== e.jsonp &&
          (tn.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              tn.test(e.data) &&
              "data");
      if (s || "jsonp" === e.dataTypes[0])
        return (
          (i = e.jsonpCallback =
            bt(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          s
            ? (e[s] = e[s].replace(tn, "$1" + i))
            : !1 !== e.jsonp &&
              (e.url += ($e.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
          (e.converters["script json"] = function () {
            return a || Ct.error(i + " was not called"), a[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[i]),
          (t[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? Ct(t).removeProp(i) : (t[i] = o),
              e[i] && ((e.jsonpCallback = n.jsonpCallback), Ze.push(i)),
              a && bt(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (mt.createHTMLDocument =
      (((Ye = xt.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ye.childNodes.length)),
    (Ct.parseHTML = function (t, e, n) {
      return "string" != typeof t
        ? []
        : ("boolean" == typeof e && ((n = e), (e = !1)),
          e ||
            (mt.createHTMLDocument
              ? (((r = (e =
                  xt.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = xt.location.href),
                e.head.appendChild(r))
              : (e = xt)),
          (o = !n && []),
          (i = _t.exec(t))
            ? [e.createElement(i[1])]
            : ((i = k([t], e, o)),
              o && o.length && Ct(o).remove(),
              Ct.merge([], i.childNodes)));
      var r, i, o;
    }),
    (Ct.fn.load = function (t, e, n) {
      var r,
        i,
        o,
        a = this,
        s = t.indexOf(" ");
      return (
        s > -1 && ((r = Y(t.slice(s))), (t = t.slice(0, s))),
        bt(e)
          ? ((n = e), (e = void 0))
          : e && "object" == typeof e && (i = "POST"),
        a.length > 0 &&
          Ct.ajax({
            url: t,
            type: i || "GET",
            dataType: "html",
            data: e,
          })
            .done(function (t) {
              (o = arguments),
                a.html(r ? Ct("<div>").append(Ct.parseHTML(t)).find(r) : t);
            })
            .always(
              n &&
                function (t, e) {
                  a.each(function () {
                    n.apply(this, o || [t.responseText, e, t]);
                  });
                }
            ),
        this
      );
    }),
    (Ct.expr.pseudos.animated = function (t) {
      return Ct.grep(Ct.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (Ct.offset = {
      setOffset: function (t, e, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          c = Ct.css(t, "position"),
          l = Ct(t),
          f = {};
        "static" === c && (t.style.position = "relative"),
          (s = l.offset()),
          (o = Ct.css(t, "top")),
          (u = Ct.css(t, "left")),
          ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1
            ? ((a = (r = l.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          bt(e) && (e = e.call(t, n, Ct.extend({}, s))),
          null != e.top && (f.top = e.top - s.top + a),
          null != e.left && (f.left = e.left - s.left + i),
          "using" in e ? e.using.call(t, f) : l.css(f);
      },
    }),
    Ct.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                Ct.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset,
              })
            : {
                top: 0,
                left: 0,
              }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            n,
            r = this[0],
            i = {
              top: 0,
              left: 0,
            };
          if ("fixed" === Ct.css(r, "position")) e = r.getBoundingClientRect();
          else {
            for (
              e = this.offset(),
                n = r.ownerDocument,
                t = r.offsetParent || n.documentElement;
              t &&
              (t === n.body || t === n.documentElement) &&
              "static" === Ct.css(t, "position");

            )
              t = t.parentNode;
            t &&
              t !== r &&
              1 === t.nodeType &&
              (((i = Ct(t).offset()).top += Ct.css(t, "borderTopWidth", !0)),
              (i.left += Ct.css(t, "borderLeftWidth", !0)));
          }
          return {
            top: e.top - i.top - Ct.css(r, "marginTop", !0),
            left: e.left - i.left - Ct.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === Ct.css(t, "position");

          )
            t = t.offsetParent;
          return t || Jt;
        });
      },
    }),
    Ct.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, e) {
        var n = "pageYOffset" === e;
        Ct.fn[t] = function (r) {
          return Rt(
            this,
            function (t, r, i) {
              var o;
              if (
                (wt(t) ? (o = t) : 9 === t.nodeType && (o = t.defaultView),
                void 0 === i)
              )
                return o ? o[e] : t[r];
              o
                ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                : (t[r] = i);
            },
            t,
            r,
            arguments.length
          );
        };
      }
    ),
    Ct.each(["top", "left"], function (t, e) {
      Ct.cssHooks[e] = q(mt.pixelPosition, function (t, n) {
        if (n)
          return (n = R(t, e)), le.test(n) ? Ct(t).position()[e] + "px" : n;
      });
    }),
    Ct.each(
      {
        Height: "height",
        Width: "width",
      },
      function (t, e) {
        Ct.each(
          {
            padding: "inner" + t,
            content: e,
            "": "outer" + t,
          },
          function (n, r) {
            Ct.fn[r] = function (i, o) {
              var a = arguments.length && (n || "boolean" != typeof i),
                s = n || (!0 === i || !0 === o ? "margin" : "border");
              return Rt(
                this,
                function (e, n, i) {
                  var o;
                  return wt(e)
                    ? 0 === r.indexOf("outer")
                      ? e["inner" + t]
                      : e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((o = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        o["scroll" + t],
                        e.body["offset" + t],
                        o["offset" + t],
                        o["client" + t]
                      ))
                    : void 0 === i
                    ? Ct.css(e, n, s)
                    : Ct.style(e, n, i, s);
                },
                e,
                a ? i : void 0,
                a
              );
            };
          }
        );
      }
    ),
    Ct.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        Ct.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    Ct.fn.extend({
      bind: function (t, e, n) {
        return this.on(t, null, e, n);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, n, r) {
        return this.on(e, t, n, r);
      },
      undelegate: function (t, e, n) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", n);
      },
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    Ct.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (t, e) {
        Ct.fn[e] = function (t, n) {
          return arguments.length > 0
            ? this.on(e, null, t, n)
            : this.trigger(e);
        };
      }
    );
  var en = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (Ct.proxy = function (t, e) {
    var n, r, i;
    if (("string" == typeof e && ((n = t[e]), (e = t), (t = n)), bt(t)))
      return (
        (r = ct.call(arguments, 2)),
        ((i = function () {
          return t.apply(e || this, r.concat(ct.call(arguments)));
        }).guid = t.guid =
          t.guid || Ct.guid++),
        i
      );
  }),
    (Ct.holdReady = function (t) {
      t ? Ct.readyWait++ : Ct.ready(!0);
    }),
    (Ct.isArray = Array.isArray),
    (Ct.parseJSON = JSON.parse),
    (Ct.nodeName = o),
    (Ct.isFunction = bt),
    (Ct.isWindow = wt),
    (Ct.camelCase = d),
    (Ct.type = r),
    (Ct.now = Date.now),
    (Ct.isNumeric = function (t) {
      var e = Ct.type(t);
      return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
    }),
    (Ct.trim = function (t) {
      return null == t ? "" : (t + "").replace(en, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return Ct;
      });
  var nn = t.jQuery,
    rn = t.$;
  return (
    (Ct.noConflict = function (e) {
      return (
        t.$ === Ct && (t.$ = rn), e && t.jQuery === Ct && (t.jQuery = nn), Ct
      );
    }),
    void 0 === e && (t.jQuery = t.$ = Ct),
    Ct
  );
}),
  function () {
    var t,
      e,
      n,
      r,
      i,
      o,
      a,
      s,
      u,
      c,
      l,
      f,
      p,
      h,
      d,
      v,
      g,
      y,
      m,
      b,
      w,
      x,
      T,
      k,
      C = [].slice,
      S =
        [].indexOf ||
        function (t) {
          for (var e = 0, n = this.length; e < n; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        };
    ((t = window.jQuery || window.Zepto || window.$).payment = {}),
      (t.payment.fn = {}),
      (t.fn.payment = function () {
        var e, n;
        return (
          (n = arguments[0]),
          (e = 2 <= arguments.length ? C.call(arguments, 1) : []),
          t.payment.fn[n].apply(this, e)
        );
      }),
      (i = /(\d{1,4})/g),
      (t.payment.cards = r =
        [
          {
            type: "elo",
            patterns: [
              401178, 401179, 431274, 438935, 451416, 457393, 457631, 457632,
              504175, 506699, 5067, 509, 627780, 636297, 636368, 650, 6516,
              6550,
            ],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "visaelectron",
            patterns: [4026, 417500, 4405, 4508, 4844, 4913, 4917],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "maestro",
            patterns: [5018, 502, 503, 506, 56, 58, 639, 6220, 67],
            format: i,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "forbrugsforeningen",
            patterns: [600],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "dankort",
            patterns: [5019],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "visa",
            patterns: [4],
            format: i,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "mastercard",
            patterns: [51, 52, 53, 54, 55, 22, 23, 24, 25, 26, 27],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "amex",
            patterns: [34, 37],
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0,
          },
          {
            type: "dinersclub",
            patterns: [30, 36, 38, 39],
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "discover",
            patterns: [60, 64, 65, 622],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
          {
            type: "unionpay",
            patterns: [62, 88],
            format: i,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1,
          },
          {
            type: "jcb",
            patterns: [35],
            format: i,
            length: [16],
            cvcLength: [3],
            luhn: !0,
          },
        ]),
      (e = function (t) {
        var e, n, i, o, a, s, u;
        for (t = (t + "").replace(/\D/g, ""), i = 0, a = r.length; i < a; i++)
          for (o = 0, s = (u = (e = r[i]).patterns).length; o < s; o++)
            if (((n = u[o] + ""), t.substr(0, n.length) === n)) return e;
      }),
      (n = function (t) {
        var e, n, i;
        for (n = 0, i = r.length; n < i; n++)
          if ((e = r[n]).type === t) return e;
      }),
      (p = function (t) {
        var e, n, r, i, o, a;
        for (
          r = !0, i = 0, o = 0, a = (n = (t + "").split("").reverse()).length;
          o < a;
          o++
        )
          (e = n[o]),
            (e = parseInt(e, 10)),
            (r = !r) && (e *= 2),
            e > 9 && (e -= 9),
            (i += e);
        return i % 10 == 0;
      }),
      (f = function (t) {
        var e;
        return (
          (null != t.prop("selectionStart") &&
            t.prop("selectionStart") !== t.prop("selectionEnd")) ||
          !(
            null ==
              ("undefined" != typeof document &&
              null !== document &&
              null != (e = document.selection)
                ? e.createRange
                : void 0) || !document.selection.createRange().text
          )
        );
      }),
      (T = function (t, e) {
        var n, r, i, o, a;
        try {
          r = e.prop("selectionStart");
        } catch (t) {
          t, (r = null);
        }
        if (((o = e.val()), e.val(t), null !== r && e.is(":focus")))
          return (
            r === o.length && (r = t.length),
            o !== t &&
              ((a = o.slice(r - 1, +r + 1 || 9e9)),
              (n = t.slice(r - 1, +r + 1 || 9e9)),
              (i = t[r]),
              /\d/.test(i) && a === i + " " && n === " " + i && (r += 1)),
            e.prop("selectionStart", r),
            e.prop("selectionEnd", r)
          );
      }),
      (y = function (t) {
        var e, n, r, i, o, a, s, u;
        for (
          null == t && (t = ""),
            r = "\uff10\uff11\uff12\uff13\uff14\uff15\uff16\uff17\uff18\uff19",
            i = "0123456789",
            a = "",
            s = 0,
            u = (e = t.split("")).length;
          s < u;
          s++
        )
          (n = e[s]), (o = r.indexOf(n)) > -1 && (n = i[o]), (a += n);
        return a;
      }),
      (g = function (e) {
        var n;
        return (
          (n = t(e.currentTarget)),
          setTimeout(function () {
            var t;
            return (t = n.val()), (t = (t = y(t)).replace(/\D/g, "")), T(t, n);
          })
        );
      }),
      (d = function (e) {
        var n;
        return (
          (n = t(e.currentTarget)),
          setTimeout(function () {
            var e;
            return (
              (e = n.val()),
              (e = y(e)),
              (e = t.payment.formatCardNumber(e)),
              T(e, n)
            );
          })
        );
      }),
      (s = function (n) {
        var r, i, o, a, s, u, c;
        if (
          ((o = String.fromCharCode(n.which)),
          /^\d+$/.test(o) &&
            ((r = t(n.currentTarget)),
            (c = r.val()),
            (i = e(c + o)),
            (a = (c.replace(/\D/g, "") + o).length),
            (u = 16),
            i && (u = i.length[i.length.length - 1]),
            !(
              a >= u ||
              (null != r.prop("selectionStart") &&
                r.prop("selectionStart") !== c.length)
            )))
        )
          return (s =
            i && "amex" === i.type
              ? /^(\d{4}|\d{4}\s\d{6})$/
              : /(?:^|\s)(\d{4})$/).test(c)
            ? (n.preventDefault(),
              setTimeout(function () {
                return r.val(c + " " + o);
              }))
            : s.test(c + o)
            ? (n.preventDefault(),
              setTimeout(function () {
                return r.val(c + o + " ");
              }))
            : void 0;
      }),
      (o = function (e) {
        var n, r;
        if (
          ((n = t(e.currentTarget)),
          (r = n.val()),
          8 === e.which &&
            (null == n.prop("selectionStart") ||
              n.prop("selectionStart") === r.length))
        )
          return /\d\s$/.test(r)
            ? (e.preventDefault(),
              setTimeout(function () {
                return n.val(r.replace(/\d\s$/, ""));
              }))
            : /\s\d?$/.test(r)
            ? (e.preventDefault(),
              setTimeout(function () {
                return n.val(r.replace(/\d$/, ""));
              }))
            : void 0;
      }),
      (v = function (e) {
        var n;
        return (
          (n = t(e.currentTarget)),
          setTimeout(function () {
            var e;
            return (
              (e = n.val()),
              (e = y(e)),
              (e = t.payment.formatExpiry(e)),
              T(e, n)
            );
          })
        );
      }),
      (u = function (e) {
        var n, r, i;
        if (((r = String.fromCharCode(e.which)), /^\d+$/.test(r)))
          return (
            (n = t(e.currentTarget)),
            (i = n.val() + r),
            /^\d$/.test(i) && "0" !== i && "1" !== i
              ? (e.preventDefault(),
                setTimeout(function () {
                  return n.val("0" + i + " / ");
                }))
              : /^\d\d$/.test(i)
              ? (e.preventDefault(),
                setTimeout(function () {
                  var t, e;
                  return (
                    (t = parseInt(i[0], 10)),
                    (e = parseInt(i[1], 10)) > 2 && 0 !== t
                      ? n.val("0" + t + " / " + e)
                      : n.val(i + " / ")
                  );
                }))
              : void 0
          );
      }),
      (c = function (e) {
        var n, r, i;
        if (((r = String.fromCharCode(e.which)), /^\d+$/.test(r)))
          return (
            (i = (n = t(e.currentTarget)).val()),
            /^\d\d$/.test(i) ? n.val(i + " / ") : void 0
          );
      }),
      (l = function (e) {
        var n, r, i;
        if ("/" === (i = String.fromCharCode(e.which)) || " " === i)
          return (
            (r = (n = t(e.currentTarget)).val()),
            /^\d$/.test(r) && "0" !== r ? n.val("0" + r + " / ") : void 0
          );
      }),
      (a = function (e) {
        var n, r;
        if (
          ((n = t(e.currentTarget)),
          (r = n.val()),
          8 === e.which &&
            (null == n.prop("selectionStart") ||
              n.prop("selectionStart") === r.length))
        )
          return /\d\s\/\s$/.test(r)
            ? (e.preventDefault(),
              setTimeout(function () {
                return n.val(r.replace(/\d\s\/\s$/, ""));
              }))
            : void 0;
      }),
      (h = function (e) {
        var n;
        return (
          (n = t(e.currentTarget)),
          setTimeout(function () {
            var t;
            return (
              (t = n.val()),
              (t = (t = y(t)).replace(/\D/g, "").slice(0, 4)),
              T(t, n)
            );
          })
        );
      }),
      (x = function (t) {
        var e;
        return (
          !(!t.metaKey && !t.ctrlKey) ||
          (32 !== t.which &&
            (0 === t.which ||
              t.which < 33 ||
              ((e = String.fromCharCode(t.which)), !!/[\d\s]/.test(e))))
        );
      }),
      (b = function (n) {
        var r, i, o, a;
        if (
          ((r = t(n.currentTarget)),
          (o = String.fromCharCode(n.which)),
          /^\d+$/.test(o) && !f(r))
        )
          return (
            (a = (r.val() + o).replace(/\D/g, "")),
            (i = e(a))
              ? a.length <= i.length[i.length.length - 1]
              : a.length <= 16
          );
      }),
      (w = function (e) {
        var n, r;
        if (
          ((n = t(e.currentTarget)),
          (r = String.fromCharCode(e.which)),
          /^\d+$/.test(r) && !f(n))
        )
          return !((n.val() + r).replace(/\D/g, "").length > 6) && void 0;
      }),
      (m = function (e) {
        var n, r;
        if (
          ((n = t(e.currentTarget)),
          (r = String.fromCharCode(e.which)),
          /^\d+$/.test(r) && !f(n))
        )
          return (n.val() + r).length <= 4;
      }),
      (k = function (e) {
        var n, i, o, a, s;
        if (
          ((s = (n = t(e.currentTarget)).val()),
          (a = t.payment.cardType(s) || "unknown"),
          !n.hasClass(a))
        )
          return (
            (i = (function () {
              var t, e, n;
              for (n = [], t = 0, e = r.length; t < e; t++)
                (o = r[t]), n.push(o.type);
              return n;
            })()),
            n.removeClass("unknown"),
            n.removeClass(i.join(" ")),
            n.addClass(a),
            n.toggleClass("identified", "unknown" !== a),
            n.trigger("payment.cardType", a)
          );
      }),
      (t.payment.fn.formatCardCVC = function () {
        return (
          this.on("keypress", x),
          this.on("keypress", m),
          this.on("paste", h),
          this.on("change", h),
          this.on("input", h),
          this
        );
      }),
      (t.payment.fn.formatCardExpiry = function () {
        return (
          this.on("keypress", x),
          this.on("keypress", w),
          this.on("keypress", u),
          this.on("keypress", l),
          this.on("keypress", c),
          this.on("keydown", a),
          this.on("change", v),
          this.on("input", v),
          this
        );
      }),
      (t.payment.fn.formatCardNumber = function () {
        return (
          this.on("keypress", x),
          this.on("keypress", b),
          this.on("keypress", s),
          this.on("keydown", o),
          this.on("keyup", k),
          this.on("paste", d),
          this.on("change", d),
          this.on("input", d),
          this.on("input", k),
          this
        );
      }),
      (t.payment.fn.restrictNumeric = function () {
        return (
          this.on("keypress", x),
          this.on("paste", g),
          this.on("change", g),
          this.on("input", g),
          this
        );
      }),
      (t.payment.fn.cardExpiryVal = function () {
        return t.payment.cardExpiryVal(t(this).val());
      }),
      (t.payment.cardExpiryVal = function (t) {
        var e, n, r;
        return (
          (e = (r = t.split(/[\s\/]+/, 2))[0]),
          2 === (null != (n = r[1]) ? n.length : void 0) &&
            /^\d+$/.test(n) &&
            (n = new Date().getFullYear().toString().slice(0, 2) + n),
          {
            month: (e = parseInt(e, 10)),
            year: (n = parseInt(n, 10)),
          }
        );
      }),
      (t.payment.validateCardNumber = function (t) {
        var n, r;
        return (
          (t = (t + "").replace(/\s+|-/g, "")),
          !!/^\d+$/.test(t) &&
            !!(n = e(t)) &&
            ((r = t.length),
            S.call(n.length, r) >= 0 && (!1 === n.luhn || p(t)))
        );
      }),
      (t.payment.validateCardExpiry = function (e, n) {
        var r, i, o;
        return (
          "object" == typeof e &&
            "month" in e &&
            ((e = (o = e).month), (n = o.year)),
          !(!e || !n) &&
            ((e = t.trim(e)),
            (n = t.trim(n)),
            !!/^\d+$/.test(e) &&
              !!/^\d+$/.test(n) &&
              1 <= e &&
              e <= 12 &&
              (2 === n.length && (n = n < 70 ? "20" + n : "19" + n),
              4 === n.length &&
                ((i = new Date(n, e)),
                (r = new Date()),
                i.setMonth(i.getMonth() - 1),
                i.setMonth(i.getMonth() + 1, 1),
                i > r)))
        );
      }),
      (t.payment.validateCardCVC = function (e, r) {
        var i, o;
        return (
          (e = t.trim(e)),
          !!/^\d+$/.test(e) &&
            (null != (i = n(r))
              ? ((o = e.length), S.call(i.cvcLength, o) >= 0)
              : e.length >= 3 && e.length <= 4)
        );
      }),
      (t.payment.cardType = function (t) {
        var n;
        return (t && (null != (n = e(t)) ? n.type : void 0)) || null;
      }),
      (t.payment.formatCardNumber = function (n) {
        var r, i, o, a;
        return (
          (n = n.replace(/\D/g, "")),
          (r = e(n))
            ? ((o = r.length[r.length.length - 1]),
              (n = n.slice(0, o)),
              r.format.global
                ? null != (a = n.match(r.format))
                  ? a.join(" ")
                  : void 0
                : null != (i = r.format.exec(n))
                ? (i.shift(),
                  (i = t.grep(i, function (t) {
                    return t;
                  })).join(" "))
                : void 0)
            : n
        );
      }),
      (t.payment.formatExpiry = function (t) {
        var e, n, r, i;
        return (n = t.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/))
          ? ((e = n[1] || ""),
            (r = n[2] || ""),
            (i = n[3] || "").length > 0
              ? (r = " / ")
              : " /" === r
              ? ((e = e.substring(0, 1)), (r = ""))
              : 2 === e.length || r.length > 0
              ? (r = " / ")
              : 1 === e.length &&
                "0" !== e &&
                "1" !== e &&
                ((e = "0" + e), (r = " / ")),
            e + r + i)
          : "";
      });
  }.call(this),
  function () {
    var t = this,
      e = t._,
      n = {},
      r = Array.prototype,
      i = Object.prototype,
      o = Function.prototype,
      a = r.push,
      s = r.slice,
      u = r.concat,
      c = i.toString,
      l = i.hasOwnProperty,
      f = r.forEach,
      p = r.map,
      h = r.reduce,
      d = r.reduceRight,
      v = r.filter,
      g = r.every,
      y = r.some,
      m = r.indexOf,
      b = r.lastIndexOf,
      w = Array.isArray,
      x = Object.keys,
      T = o.bind,
      k = function (t) {
        return t instanceof k
          ? t
          : this instanceof k
          ? void (this._wrapped = t)
          : new k(t);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = k),
        (exports._ = k))
      : (t._ = k),
      (k.VERSION = "1.5.2");
    var C =
      (k.each =
      k.forEach =
        function (t, e, r) {
          if (null != t)
            if (f && t.forEach === f) t.forEach(e, r);
            else if (t.length === +t.length) {
              for (var i = 0, o = t.length; i < o; i++)
                if (e.call(r, t[i], i, t) === n) return;
            } else {
              var a = k.keys(t);
              for (i = 0, o = a.length; i < o; i++)
                if (e.call(r, t[a[i]], a[i], t) === n) return;
            }
        });
    k.map = k.collect = function (t, e, n) {
      var r = [];
      return null == t
        ? r
        : p && t.map === p
        ? t.map(e, n)
        : (C(t, function (t, i, o) {
            r.push(e.call(n, t, i, o));
          }),
          r);
    };
    var S = "Reduce of empty array with no initial value";
    (k.reduce =
      k.foldl =
      k.inject =
        function (t, e, n, r) {
          var i = arguments.length > 2;
          if ((null == t && (t = []), h && t.reduce === h))
            return r && (e = k.bind(e, r)), i ? t.reduce(e, n) : t.reduce(e);
          if (
            (C(t, function (t, o, a) {
              i ? (n = e.call(r, n, t, o, a)) : ((n = t), (i = !0));
            }),
            !i)
          )
            throw new TypeError(S);
          return n;
        }),
      (k.reduceRight = k.foldr =
        function (t, e, n, r) {
          var i = arguments.length > 2;
          if ((null == t && (t = []), d && t.reduceRight === d))
            return (
              r && (e = k.bind(e, r)),
              i ? t.reduceRight(e, n) : t.reduceRight(e)
            );
          var o = t.length;
          if (o !== +o) {
            var a = k.keys(t);
            o = a.length;
          }
          if (
            (C(t, function (s, u, c) {
              (u = a ? a[--o] : --o),
                i ? (n = e.call(r, n, t[u], u, c)) : ((n = t[u]), (i = !0));
            }),
            !i)
          )
            throw new TypeError(S);
          return n;
        }),
      (k.find = k.detect =
        function (t, e, n) {
          var r;
          return (
            E(t, function (t, i, o) {
              if (e.call(n, t, i, o)) return (r = t), !0;
            }),
            r
          );
        }),
      (k.filter = k.select =
        function (t, e, n) {
          var r = [];
          return null == t
            ? r
            : v && t.filter === v
            ? t.filter(e, n)
            : (C(t, function (t, i, o) {
                e.call(n, t, i, o) && r.push(t);
              }),
              r);
        }),
      (k.reject = function (t, e, n) {
        return k.filter(
          t,
          function (t, r, i) {
            return !e.call(n, t, r, i);
          },
          n
        );
      }),
      (k.every = k.all =
        function (t, e, r) {
          e || (e = k.identity);
          var i = !0;
          return null == t
            ? i
            : g && t.every === g
            ? t.every(e, r)
            : (C(t, function (t, o, a) {
                if (!(i = i && e.call(r, t, o, a))) return n;
              }),
              !!i);
        });
    var E =
      (k.some =
      k.any =
        function (t, e, r) {
          e || (e = k.identity);
          var i = !1;
          return null == t
            ? i
            : y && t.some === y
            ? t.some(e, r)
            : (C(t, function (t, o, a) {
                if (i || (i = e.call(r, t, o, a))) return n;
              }),
              !!i);
        });
    (k.contains = k.include =
      function (t, e) {
        return (
          null != t &&
          (m && t.indexOf === m
            ? -1 != t.indexOf(e)
            : E(t, function (t) {
                return t === e;
              }))
        );
      }),
      (k.invoke = function (t, e) {
        var n = s.call(arguments, 2),
          r = k.isFunction(e);
        return k.map(t, function (t) {
          return (r ? e : t[e]).apply(t, n);
        });
      }),
      (k.pluck = function (t, e) {
        return k.map(t, function (t) {
          return t[e];
        });
      }),
      (k.where = function (t, e, n) {
        return k.isEmpty(e)
          ? n
            ? void 0
            : []
          : k[n ? "find" : "filter"](t, function (t) {
              for (var n in e) if (e[n] !== t[n]) return !1;
              return !0;
            });
      }),
      (k.findWhere = function (t, e) {
        return k.where(t, e, !0);
      }),
      (k.max = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535)
          return Math.max.apply(Math, t);
        if (!e && k.isEmpty(t)) return -1 / 0;
        var r = {
          computed: -1 / 0,
          value: -1 / 0,
        };
        return (
          C(t, function (t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a > r.computed &&
              (r = {
                value: t,
                computed: a,
              });
          }),
          r.value
        );
      }),
      (k.min = function (t, e, n) {
        if (!e && k.isArray(t) && t[0] === +t[0] && t.length < 65535)
          return Math.min.apply(Math, t);
        if (!e && k.isEmpty(t)) return 1 / 0;
        var r = {
          computed: 1 / 0,
          value: 1 / 0,
        };
        return (
          C(t, function (t, i, o) {
            var a = e ? e.call(n, t, i, o) : t;
            a < r.computed &&
              (r = {
                value: t,
                computed: a,
              });
          }),
          r.value
        );
      }),
      (k.shuffle = function (t) {
        var e,
          n = 0,
          r = [];
        return (
          C(t, function (t) {
            (e = k.random(n++)), (r[n - 1] = r[e]), (r[e] = t);
          }),
          r
        );
      }),
      (k.sample = function (t, e, n) {
        return arguments.length < 2 || n
          ? t[k.random(t.length - 1)]
          : k.shuffle(t).slice(0, Math.max(0, e));
      });
    var j = function (t) {
      return k.isFunction(t)
        ? t
        : function (e) {
            return e[t];
          };
    };
    k.sortBy = function (t, e, n) {
      var r = j(e);
      return k.pluck(
        k
          .map(t, function (t, e, i) {
            return {
              value: t,
              index: e,
              criteria: r.call(n, t, e, i),
            };
          })
          .sort(function (t, e) {
            var n = t.criteria,
              r = e.criteria;
            if (n !== r) {
              if (n > r || void 0 === n) return 1;
              if (n < r || void 0 === r) return -1;
            }
            return t.index - e.index;
          }),
        "value"
      );
    };
    var P = function (t) {
      return function (e, n, r) {
        var i = {},
          o = null == n ? k.identity : j(n);
        return (
          C(e, function (n, a) {
            var s = o.call(r, n, a, e);
            t(i, s, n);
          }),
          i
        );
      };
    };
    (k.groupBy = P(function (t, e, n) {
      (k.has(t, e) ? t[e] : (t[e] = [])).push(n);
    })),
      (k.indexBy = P(function (t, e, n) {
        t[e] = n;
      })),
      (k.countBy = P(function (t, e) {
        k.has(t, e) ? t[e]++ : (t[e] = 1);
      })),
      (k.sortedIndex = function (t, e, n, r) {
        for (
          var i = (n = null == n ? k.identity : j(n)).call(r, e),
            o = 0,
            a = t.length;
          o < a;

        ) {
          var s = (o + a) >>> 1;
          n.call(r, t[s]) < i ? (o = s + 1) : (a = s);
        }
        return o;
      }),
      (k.toArray = function (t) {
        return t
          ? k.isArray(t)
            ? s.call(t)
            : t.length === +t.length
            ? k.map(t, k.identity)
            : k.values(t)
          : [];
      }),
      (k.size = function (t) {
        return null == t
          ? 0
          : t.length === +t.length
          ? t.length
          : k.keys(t).length;
      }),
      (k.first =
        k.head =
        k.take =
          function (t, e, n) {
            if (null != t) return null == e || n ? t[0] : s.call(t, 0, e);
          }),
      (k.initial = function (t, e, n) {
        return s.call(t, 0, t.length - (null == e || n ? 1 : e));
      }),
      (k.last = function (t, e, n) {
        if (null != t)
          return null == e || n
            ? t[t.length - 1]
            : s.call(t, Math.max(t.length - e, 0));
      }),
      (k.rest =
        k.tail =
        k.drop =
          function (t, e, n) {
            return s.call(t, null == e || n ? 1 : e);
          }),
      (k.compact = function (t) {
        return k.filter(t, k.identity);
      });
    var _ = function (t, e, n) {
      return e && k.every(t, k.isArray)
        ? u.apply(n, t)
        : (C(t, function (t) {
            k.isArray(t) || k.isArguments(t)
              ? e
                ? a.apply(n, t)
                : _(t, e, n)
              : n.push(t);
          }),
          n);
    };
    (k.flatten = function (t, e) {
      return _(t, e, []);
    }),
      (k.without = function (t) {
        return k.difference(t, s.call(arguments, 1));
      }),
      (k.uniq = k.unique =
        function (t, e, n, r) {
          k.isFunction(e) && ((r = n), (n = e), (e = !1));
          var i = n ? k.map(t, n, r) : t,
            o = [],
            a = [];
          return (
            C(i, function (n, r) {
              (e ? r && a[a.length - 1] === n : k.contains(a, n)) ||
                (a.push(n), o.push(t[r]));
            }),
            o
          );
        }),
      (k.union = function () {
        return k.uniq(k.flatten(arguments, !0));
      }),
      (k.intersection = function (t) {
        var e = s.call(arguments, 1);
        return k.filter(k.uniq(t), function (t) {
          return k.every(e, function (e) {
            return k.indexOf(e, t) >= 0;
          });
        });
      }),
      (k.difference = function (t) {
        var e = u.apply(r, s.call(arguments, 1));
        return k.filter(t, function (t) {
          return !k.contains(e, t);
        });
      }),
      (k.zip = function () {
        for (
          var t = k.max(k.pluck(arguments, "length").concat(0)),
            e = new Array(t),
            n = 0;
          n < t;
          n++
        )
          e[n] = k.pluck(arguments, "" + n);
        return e;
      }),
      (k.object = function (t, e) {
        if (null == t) return {};
        for (var n = {}, r = 0, i = t.length; r < i; r++)
          e ? (n[t[r]] = e[r]) : (n[t[r][0]] = t[r][1]);
        return n;
      }),
      (k.indexOf = function (t, e, n) {
        if (null == t) return -1;
        var r = 0,
          i = t.length;
        if (n) {
          if ("number" != typeof n)
            return t[(r = k.sortedIndex(t, e))] === e ? r : -1;
          r = n < 0 ? Math.max(0, i + n) : n;
        }
        if (m && t.indexOf === m) return t.indexOf(e, n);
        for (; r < i; r++) if (t[r] === e) return r;
        return -1;
      }),
      (k.lastIndexOf = function (t, e, n) {
        if (null == t) return -1;
        var r = null != n;
        if (b && t.lastIndexOf === b)
          return r ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
        for (var i = r ? n : t.length; i--; ) if (t[i] === e) return i;
        return -1;
      }),
      (k.range = function (t, e, n) {
        arguments.length <= 1 && ((e = t || 0), (t = 0)),
          (n = arguments[2] || 1);
        for (
          var r = Math.max(Math.ceil((e - t) / n), 0), i = 0, o = new Array(r);
          i < r;

        )
          (o[i++] = t), (t += n);
        return o;
      });
    var A = function () {};
    (k.bind = function (t, e) {
      var n, r;
      if (T && t.bind === T) return T.apply(t, s.call(arguments, 1));
      if (!k.isFunction(t)) throw new TypeError();
      return (
        (n = s.call(arguments, 2)),
        (r = function () {
          if (!(this instanceof r))
            return t.apply(e, n.concat(s.call(arguments)));
          A.prototype = t.prototype;
          var i = new A();
          A.prototype = null;
          var o = t.apply(i, n.concat(s.call(arguments)));
          return Object(o) === o ? o : i;
        })
      );
    }),
      (k.partial = function (t) {
        var e = s.call(arguments, 1);
        return function () {
          return t.apply(this, e.concat(s.call(arguments)));
        };
      }),
      (k.bindAll = function (t) {
        var e = s.call(arguments, 1);
        if (0 === e.length)
          throw new Error("bindAll must be passed function names");
        return (
          C(e, function (e) {
            t[e] = k.bind(t[e], t);
          }),
          t
        );
      }),
      (k.memoize = function (t, e) {
        var n = {};
        return (
          e || (e = k.identity),
          function () {
            var r = e.apply(this, arguments);
            return k.has(n, r) ? n[r] : (n[r] = t.apply(this, arguments));
          }
        );
      }),
      (k.delay = function (t, e) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
          return t.apply(null, n);
        }, e);
      }),
      (k.defer = function (t) {
        return k.delay.apply(k, [t, 1].concat(s.call(arguments, 1)));
      }),
      (k.throttle = function (t, e, n) {
        var r,
          i,
          o,
          a = null,
          s = 0;
        n || (n = {});
        var u = function () {
          (s = !1 === n.leading ? 0 : new Date()),
            (a = null),
            (o = t.apply(r, i));
        };
        return function () {
          var c = new Date();
          s || !1 !== n.leading || (s = c);
          var l = e - (c - s);
          return (
            (r = this),
            (i = arguments),
            l <= 0
              ? (clearTimeout(a), (a = null), (s = c), (o = t.apply(r, i)))
              : a || !1 === n.trailing || (a = setTimeout(u, l)),
            o
          );
        };
      }),
      (k.debounce = function (t, e, n) {
        var r, i, o, a, s;
        return function () {
          (o = this), (i = arguments), (a = new Date());
          var u = function () {
              var c = new Date() - a;
              c < e
                ? (r = setTimeout(u, e - c))
                : ((r = null), n || (s = t.apply(o, i)));
            },
            c = n && !r;
          return r || (r = setTimeout(u, e)), c && (s = t.apply(o, i)), s;
        };
      }),
      (k.once = function (t) {
        var e,
          n = !1;
        return function () {
          return n || ((n = !0), (e = t.apply(this, arguments)), (t = null)), e;
        };
      }),
      (k.wrap = function (t, e) {
        return function () {
          var n = [t];
          return a.apply(n, arguments), e.apply(this, n);
        };
      }),
      (k.compose = function () {
        var t = arguments;
        return function () {
          for (var e = arguments, n = t.length - 1; n >= 0; n--)
            e = [t[n].apply(this, e)];
          return e[0];
        };
      }),
      (k.after = function (t, e) {
        return function () {
          if (--t < 1) return e.apply(this, arguments);
        };
      }),
      (k.keys =
        x ||
        function (t) {
          if (t !== Object(t)) throw new TypeError("Invalid object");
          var e = [];
          for (var n in t) k.has(t, n) && e.push(n);
          return e;
        }),
      (k.values = function (t) {
        for (
          var e = k.keys(t), n = e.length, r = new Array(n), i = 0;
          i < n;
          i++
        )
          r[i] = t[e[i]];
        return r;
      }),
      (k.pairs = function (t) {
        for (
          var e = k.keys(t), n = e.length, r = new Array(n), i = 0;
          i < n;
          i++
        )
          r[i] = [e[i], t[e[i]]];
        return r;
      }),
      (k.invert = function (t) {
        for (var e = {}, n = k.keys(t), r = 0, i = n.length; r < i; r++)
          e[t[n[r]]] = n[r];
        return e;
      }),
      (k.functions = k.methods =
        function (t) {
          var e = [];
          for (var n in t) k.isFunction(t[n]) && e.push(n);
          return e.sort();
        }),
      (k.extend = function (t) {
        return (
          C(s.call(arguments, 1), function (e) {
            if (e) for (var n in e) t[n] = e[n];
          }),
          t
        );
      }),
      (k.pick = function (t) {
        var e = {},
          n = u.apply(r, s.call(arguments, 1));
        return (
          C(n, function (n) {
            n in t && (e[n] = t[n]);
          }),
          e
        );
      }),
      (k.omit = function (t) {
        var e = {},
          n = u.apply(r, s.call(arguments, 1));
        for (var i in t) k.contains(n, i) || (e[i] = t[i]);
        return e;
      }),
      (k.defaults = function (t) {
        return (
          C(s.call(arguments, 1), function (e) {
            if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n]);
          }),
          t
        );
      }),
      (k.clone = function (t) {
        return k.isObject(t) ? (k.isArray(t) ? t.slice() : k.extend({}, t)) : t;
      }),
      (k.tap = function (t, e) {
        return e(t), t;
      });
    var N = function (t, e, n, r) {
      if (t === e) return 0 !== t || 1 / t == 1 / e;
      if (null == t || null == e) return t === e;
      t instanceof k && (t = t._wrapped), e instanceof k && (e = e._wrapped);
      var i = c.call(t);
      if (i != c.call(e)) return !1;
      switch (i) {
        case "[object String]":
          return t == String(e);

        case "[object Number]":
          return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;

        case "[object Date]":
        case "[object Boolean]":
          return +t == +e;

        case "[object RegExp]":
          return (
            t.source == e.source &&
            t.global == e.global &&
            t.multiline == e.multiline &&
            t.ignoreCase == e.ignoreCase
          );
      }
      if ("object" != typeof t || "object" != typeof e) return !1;
      for (var o = n.length; o--; ) if (n[o] == t) return r[o] == e;
      var a = t.constructor,
        s = e.constructor;
      if (
        a !== s &&
        !(
          k.isFunction(a) &&
          a instanceof a &&
          k.isFunction(s) &&
          s instanceof s
        )
      )
        return !1;
      n.push(t), r.push(e);
      var u = 0,
        l = !0;
      if ("[object Array]" == i) {
        if ((l = (u = t.length) == e.length))
          for (; u-- && (l = N(t[u], e[u], n, r)); );
      } else {
        for (var f in t)
          if (k.has(t, f) && (u++, !(l = k.has(e, f) && N(t[f], e[f], n, r))))
            break;
        if (l) {
          for (f in e) if (k.has(e, f) && !u--) break;
          l = !u;
        }
      }
      return n.pop(), r.pop(), l;
    };
    (k.isEqual = function (t, e) {
      return N(t, e, [], []);
    }),
      (k.isEmpty = function (t) {
        if (null == t) return !0;
        if (k.isArray(t) || k.isString(t)) return 0 === t.length;
        for (var e in t) if (k.has(t, e)) return !1;
        return !0;
      }),
      (k.isElement = function (t) {
        return !(!t || 1 !== t.nodeType);
      }),
      (k.isArray =
        w ||
        function (t) {
          return "[object Array]" == c.call(t);
        }),
      (k.isObject = function (t) {
        return t === Object(t);
      }),
      C(
        ["Arguments", "Function", "String", "Number", "Date", "RegExp"],
        function (t) {
          k["is" + t] = function (e) {
            return c.call(e) == "[object " + t + "]";
          };
        }
      ),
      k.isArguments(arguments) ||
        (k.isArguments = function (t) {
          return !(!t || !k.has(t, "callee"));
        }),
      "function" != typeof /./ &&
        (k.isFunction = function (t) {
          return "function" == typeof t;
        }),
      (k.isFinite = function (t) {
        return isFinite(t) && !isNaN(parseFloat(t));
      }),
      (k.isNaN = function (t) {
        return k.isNumber(t) && t != +t;
      }),
      (k.isBoolean = function (t) {
        return !0 === t || !1 === t || "[object Boolean]" == c.call(t);
      }),
      (k.isNull = function (t) {
        return null === t;
      }),
      (k.isUndefined = function (t) {
        return void 0 === t;
      }),
      (k.has = function (t, e) {
        return l.call(t, e);
      }),
      (k.noConflict = function () {
        return (t._ = e), this;
      }),
      (k.identity = function (t) {
        return t;
      }),
      (k.times = function (t, e, n) {
        for (var r = Array(Math.max(0, t)), i = 0; i < t; i++)
          r[i] = e.call(n, i);
        return r;
      }),
      (k.random = function (t, e) {
        return (
          null == e && ((e = t), (t = 0)),
          t + Math.floor(Math.random() * (e - t + 1))
        );
      });
    var D = {
      escape: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
      },
    };
    D.unescape = k.invert(D.escape);
    var O = {
      escape: new RegExp("[" + k.keys(D.escape).join("") + "]", "g"),
      unescape: new RegExp("(" + k.keys(D.unescape).join("|") + ")", "g"),
    };
    k.each(["escape", "unescape"], function (t) {
      k[t] = function (e) {
        return null == e
          ? ""
          : ("" + e).replace(O[t], function (e) {
              return D[t][e];
            });
      };
    }),
      (k.result = function (t, e) {
        if (null != t) {
          var n = t[e];
          return k.isFunction(n) ? n.call(t) : n;
        }
      }),
      (k.mixin = function (t) {
        C(k.functions(t), function (e) {
          var n = (k[e] = t[e]);
          k.prototype[e] = function () {
            var t = [this._wrapped];
            return a.apply(t, arguments), q.call(this, n.apply(k, t));
          };
        });
      });
    var $ = 0;
    (k.uniqueId = function (t) {
      var e = ++$ + "";
      return t ? t + e : e;
    }),
      (k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var L = /(.)^/,
      I = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      R = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    (k.template = function (t, e, n) {
      var r;
      n = k.defaults({}, n, k.templateSettings);
      var i = new RegExp(
          [
            (n.escape || L).source,
            (n.interpolate || L).source,
            (n.evaluate || L).source,
          ].join("|") + "|$",
          "g"
        ),
        o = 0,
        a = "__p+='";
      t.replace(i, function (e, n, r, i, s) {
        return (
          (a += t.slice(o, s).replace(R, function (t) {
            return "\\" + I[t];
          })),
          n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
          r && (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'"),
          i && (a += "';\n" + i + "\n__p+='"),
          (o = s + e.length),
          e
        );
      }),
        (a += "';\n"),
        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          a +
          "return __p;\n");
      try {
        r = new Function(n.variable || "obj", "_", a);
      } catch (t) {
        throw ((t.source = a), t);
      }
      if (e) return r(e, k);
      var s = function (t) {
        return r.call(this, t, k);
      };
      return (
        (s.source = "function(" + (n.variable || "obj") + "){\n" + a + "}"), s
      );
    }),
      (k.chain = function (t) {
        return k(t).chain();
      });
    var q = function (t) {
      return this._chain ? k(t).chain() : t;
    };
    k.mixin(k),
      C(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (t) {
          var e = r[t];
          k.prototype[t] = function () {
            var n = this._wrapped;
            return (
              e.apply(n, arguments),
              ("shift" != t && "splice" != t) || 0 !== n.length || delete n[0],
              q.call(this, n)
            );
          };
        }
      ),
      C(["concat", "join", "slice"], function (t) {
        var e = r[t];
        k.prototype[t] = function () {
          return q.call(this, e.apply(this._wrapped, arguments));
        };
      }),
      k.extend(k.prototype, {
        chain: function () {
          return (this._chain = !0), this;
        },
        value: function () {
          return this._wrapped;
        },
      });
  }.call(this),
  function () {
    var t,
      e = this,
      n = e.Backbone,
      r = [],
      i = (r.push, r.slice);
    r.splice;
    (t = "undefined" != typeof exports ? exports : (e.Backbone = {})).VERSION =
      "1.1.0";
    var o = e._;
    o || "undefined" == typeof require || (o = require("underscore")),
      (t.$ = e.jQuery || e.Zepto || e.ender || e.$),
      (t.noConflict = function () {
        return (e.Backbone = n), this;
      }),
      (t.emulateHTTP = !1),
      (t.emulateJSON = !1);
    var a = (t.Events = {
        on: function (t, e, n) {
          return u(this, "on", t, [e, n]) && e
            ? (this._events || (this._events = {}),
              (this._events[t] || (this._events[t] = [])).push({
                callback: e,
                context: n,
                ctx: n || this,
              }),
              this)
            : this;
        },
        once: function (t, e, n) {
          if (!u(this, "once", t, [e, n]) || !e) return this;
          var r = this,
            i = o.once(function () {
              r.off(t, i), e.apply(this, arguments);
            });
          return (i._callback = e), this.on(t, i, n);
        },
        off: function (t, e, n) {
          var r, i, a, s, c, l, f, p;
          if (!this._events || !u(this, "off", t, [e, n])) return this;
          if (!t && !e && !n) return (this._events = {}), this;
          for (
            c = 0, l = (s = t ? [t] : o.keys(this._events)).length;
            c < l;
            c++
          )
            if (((t = s[c]), (a = this._events[t]))) {
              if (((this._events[t] = r = []), e || n))
                for (f = 0, p = a.length; f < p; f++)
                  (i = a[f]),
                    ((e && e !== i.callback && e !== i.callback._callback) ||
                      (n && n !== i.context)) &&
                      r.push(i);
              r.length || delete this._events[t];
            }
          return this;
        },
        trigger: function (t) {
          if (!this._events) return this;
          var e = i.call(arguments, 1);
          if (!u(this, "trigger", t, e)) return this;
          var n = this._events[t],
            r = this._events.all;
          return n && c(n, e), r && c(r, arguments), this;
        },
        stopListening: function (t, e, n) {
          var r = this._listeningTo;
          if (!r) return this;
          var i = !e && !n;
          for (var a in (n || "object" != typeof e || (n = this),
          t && ((r = {})[t._listenId] = t),
          r))
            (t = r[a]).off(e, n, this),
              (i || o.isEmpty(t._events)) && delete this._listeningTo[a];
          return this;
        },
      }),
      s = /\s+/,
      u = function (t, e, n, r) {
        if (!n) return !0;
        if ("object" == typeof n) {
          for (var i in n) t[e].apply(t, [i, n[i]].concat(r));
          return !1;
        }
        if (s.test(n)) {
          for (var o = n.split(s), a = 0, u = o.length; a < u; a++)
            t[e].apply(t, [o[a]].concat(r));
          return !1;
        }
        return !0;
      },
      c = function (t, e) {
        var n,
          r = -1,
          i = t.length,
          o = e[0],
          a = e[1],
          s = e[2];
        switch (e.length) {
          case 0:
            for (; ++r < i; ) (n = t[r]).callback.call(n.ctx);
            return;

          case 1:
            for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o);
            return;

          case 2:
            for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, a);
            return;

          case 3:
            for (; ++r < i; ) (n = t[r]).callback.call(n.ctx, o, a, s);
            return;

          default:
            for (; ++r < i; ) (n = t[r]).callback.apply(n.ctx, e);
        }
      },
      l = {
        listenTo: "on",
        listenToOnce: "once",
      };
    o.each(l, function (t, e) {
      a[e] = function (e, n, r) {
        return (
          ((this._listeningTo || (this._listeningTo = {}))[
            e._listenId || (e._listenId = o.uniqueId("l"))
          ] = e),
          r || "object" != typeof n || (r = this),
          e[t](n, r, this),
          this
        );
      };
    }),
      (a.bind = a.on),
      (a.unbind = a.off),
      o.extend(t, a);
    var f = (t.Model = function (t, e) {
      var n = t || {};
      e || (e = {}),
        (this.cid = o.uniqueId("c")),
        (this.attributes = {}),
        e.collection && (this.collection = e.collection),
        e.parse && (n = this.parse(n, e) || {}),
        (n = o.defaults({}, n, o.result(this, "defaults"))),
        this.set(n, e),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    o.extend(f.prototype, a, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      initialize: function () {},
      toJSON: function () {
        return o.clone(this.attributes);
      },
      sync: function () {
        return t.sync.apply(this, arguments);
      },
      get: function (t) {
        return this.attributes[t];
      },
      escape: function (t) {
        return o.escape(this.get(t));
      },
      has: function (t) {
        return null != this.get(t);
      },
      set: function (t, e, n) {
        var r, i, a, s, u, c, l, f;
        if (null == t) return this;
        if (
          ("object" == typeof t ? ((i = t), (n = e)) : ((i = {})[t] = e),
          n || (n = {}),
          !this._validate(i, n))
        )
          return !1;
        for (r in ((a = n.unset),
        (u = n.silent),
        (s = []),
        (c = this._changing),
        (this._changing = !0),
        c ||
          ((this._previousAttributes = o.clone(this.attributes)),
          (this.changed = {})),
        (f = this.attributes),
        (l = this._previousAttributes),
        this.idAttribute in i && (this.id = i[this.idAttribute]),
        i))
          (e = i[r]),
            o.isEqual(f[r], e) || s.push(r),
            o.isEqual(l[r], e) ? delete this.changed[r] : (this.changed[r] = e),
            a ? delete f[r] : (f[r] = e);
        if (!u) {
          s.length && (this._pending = !0);
          for (var p = 0, h = s.length; p < h; p++)
            this.trigger("change:" + s[p], this, f[s[p]], n);
        }
        if (c) return this;
        if (!u)
          for (; this._pending; )
            (this._pending = !1), this.trigger("change", this, n);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (t, e) {
        return this.set(
          t,
          void 0,
          o.extend({}, e, {
            unset: !0,
          })
        );
      },
      clear: function (t) {
        var e = {};
        for (var n in this.attributes) e[n] = void 0;
        return this.set(
          e,
          o.extend({}, t, {
            unset: !0,
          })
        );
      },
      hasChanged: function (t) {
        return null == t ? !o.isEmpty(this.changed) : o.has(this.changed, t);
      },
      changedAttributes: function (t) {
        if (!t) return !!this.hasChanged() && o.clone(this.changed);
        var e,
          n = !1,
          r = this._changing ? this._previousAttributes : this.attributes;
        for (var i in t)
          o.isEqual(r[i], (e = t[i])) || ((n || (n = {}))[i] = e);
        return n;
      },
      previous: function (t) {
        return null != t && this._previousAttributes
          ? this._previousAttributes[t]
          : null;
      },
      previousAttributes: function () {
        return o.clone(this._previousAttributes);
      },
      fetch: function (t) {
        void 0 === (t = t ? o.clone(t) : {}).parse && (t.parse = !0);
        var e = this,
          n = t.success;
        return (
          (t.success = function (r) {
            if (!e.set(e.parse(r, t), t)) return !1;
            n && n(e, r, t), e.trigger("sync", e, r, t);
          }),
          I(this, t),
          this.sync("read", this, t)
        );
      },
      save: function (t, e, n) {
        var r,
          i,
          a,
          s = this.attributes;
        if (
          (null == t || "object" == typeof t
            ? ((r = t), (n = e))
            : ((r = {})[t] = e),
          (n = o.extend(
            {
              validate: !0,
            },
            n
          )),
          r && !n.wait)
        ) {
          if (!this.set(r, n)) return !1;
        } else if (!this._validate(r, n)) return !1;
        r && n.wait && (this.attributes = o.extend({}, s, r)),
          void 0 === n.parse && (n.parse = !0);
        var u = this,
          c = n.success;
        return (
          (n.success = function (t) {
            u.attributes = s;
            var e = u.parse(t, n);
            if (
              (n.wait && (e = o.extend(r || {}, e)),
              o.isObject(e) && !u.set(e, n))
            )
              return !1;
            c && c(u, t, n), u.trigger("sync", u, t, n);
          }),
          I(this, n),
          "patch" ===
            (i = this.isNew() ? "create" : n.patch ? "patch" : "update") &&
            (n.attrs = r),
          (a = this.sync(i, this, n)),
          r && n.wait && (this.attributes = s),
          a
        );
      },
      destroy: function (t) {
        t = t ? o.clone(t) : {};
        var e = this,
          n = t.success,
          r = function () {
            e.trigger("destroy", e, e.collection, t);
          };
        if (
          ((t.success = function (i) {
            (t.wait || e.isNew()) && r(),
              n && n(e, i, t),
              e.isNew() || e.trigger("sync", e, i, t);
          }),
          this.isNew())
        )
          return t.success(), !1;
        I(this, t);
        var i = this.sync("delete", this, t);
        return t.wait || r(), i;
      },
      url: function () {
        var t =
          o.result(this, "urlRoot") || o.result(this.collection, "url") || L();
        return this.isNew()
          ? t
          : t +
              ("/" === t.charAt(t.length - 1) ? "" : "/") +
              encodeURIComponent(this.id);
      },
      parse: function (t) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return null == this.id;
      },
      isValid: function (t) {
        return this._validate(
          {},
          o.extend(t || {}, {
            validate: !0,
          })
        );
      },
      _validate: function (t, e) {
        if (!e.validate || !this.validate) return !0;
        t = o.extend({}, this.attributes, t);
        var n = (this.validationError = this.validate(t, e) || null);
        return (
          !n ||
          (this.trigger(
            "invalid",
            this,
            n,
            o.extend(e, {
              validationError: n,
            })
          ),
          !1)
        );
      },
    });
    var p = ["keys", "values", "pairs", "invert", "pick", "omit"];
    o.each(p, function (t) {
      f.prototype[t] = function () {
        var e = i.call(arguments);
        return e.unshift(this.attributes), o[t].apply(o, e);
      };
    });
    var h = (t.Collection = function (t, e) {
        e || (e = {}),
          e.model && (this.model = e.model),
          void 0 !== e.comparator && (this.comparator = e.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          t &&
            this.reset(
              t,
              o.extend(
                {
                  silent: !0,
                },
                e
              )
            );
      }),
      d = {
        add: !0,
        remove: !0,
        merge: !0,
      },
      v = {
        add: !0,
        remove: !1,
      };
    o.extend(h.prototype, a, {
      model: f,
      initialize: function () {},
      toJSON: function (t) {
        return this.map(function (e) {
          return e.toJSON(t);
        });
      },
      sync: function () {
        return t.sync.apply(this, arguments);
      },
      add: function (t, e) {
        return this.set(
          t,
          o.extend(
            {
              merge: !1,
            },
            e,
            v
          )
        );
      },
      remove: function (t, e) {
        var n,
          r,
          i,
          a,
          s = !o.isArray(t);
        for (
          e || (e = {}), n = 0, r = (t = s ? [t] : o.clone(t)).length;
          n < r;
          n++
        )
          (a = t[n] = this.get(t[n])) &&
            (delete this._byId[a.id],
            delete this._byId[a.cid],
            (i = this.indexOf(a)),
            this.models.splice(i, 1),
            this.length--,
            e.silent || ((e.index = i), a.trigger("remove", a, this, e)),
            this._removeReference(a));
        return s ? t[0] : t;
      },
      set: function (t, e) {
        (e = o.defaults({}, e, d)).parse && (t = this.parse(t, e));
        var n,
          r,
          i,
          a,
          s,
          u,
          c,
          l = !o.isArray(t);
        t = l ? (t ? [t] : []) : o.clone(t);
        var p = e.at,
          h = this.model,
          v = this.comparator && null == p && !1 !== e.sort,
          g = o.isString(this.comparator) ? this.comparator : null,
          y = [],
          m = [],
          b = {},
          w = e.add,
          x = e.merge,
          T = e.remove,
          k = !(v || !w || !T) && [];
        for (n = 0, r = t.length; n < r; n++) {
          if (
            ((i =
              (s = t[n]) instanceof f ? (a = s) : s[h.prototype.idAttribute]),
            (u = this.get(i)))
          )
            T && (b[u.cid] = !0),
              x &&
                ((s = s === a ? a.attributes : s),
                e.parse && (s = u.parse(s, e)),
                u.set(s, e),
                v && !c && u.hasChanged(g) && (c = !0)),
              (t[n] = u);
          else if (w) {
            if (!(a = t[n] = this._prepareModel(s, e))) continue;
            y.push(a),
              a.on("all", this._onModelEvent, this),
              (this._byId[a.cid] = a),
              null != a.id && (this._byId[a.id] = a);
          }
          k && k.push(u || a);
        }
        if (T) {
          for (n = 0, r = this.length; n < r; ++n)
            b[(a = this.models[n]).cid] || m.push(a);
          m.length && this.remove(m, e);
        }
        if (y.length || (k && k.length))
          if ((v && (c = !0), (this.length += y.length), null != p))
            for (n = 0, r = y.length; n < r; n++)
              this.models.splice(p + n, 0, y[n]);
          else {
            k && (this.models.length = 0);
            var C = k || y;
            for (n = 0, r = C.length; n < r; n++) this.models.push(C[n]);
          }
        if (
          (c &&
            this.sort({
              silent: !0,
            }),
          !e.silent)
        ) {
          for (n = 0, r = y.length; n < r; n++)
            (a = y[n]).trigger("add", a, this, e);
          (c || (k && k.length)) && this.trigger("sort", this, e);
        }
        return l ? t[0] : t;
      },
      reset: function (t, e) {
        e || (e = {});
        for (var n = 0, r = this.models.length; n < r; n++)
          this._removeReference(this.models[n]);
        return (
          (e.previousModels = this.models),
          this._reset(),
          (t = this.add(
            t,
            o.extend(
              {
                silent: !0,
              },
              e
            )
          )),
          e.silent || this.trigger("reset", this, e),
          t
        );
      },
      push: function (t, e) {
        return this.add(
          t,
          o.extend(
            {
              at: this.length,
            },
            e
          )
        );
      },
      pop: function (t) {
        var e = this.at(this.length - 1);
        return this.remove(e, t), e;
      },
      unshift: function (t, e) {
        return this.add(
          t,
          o.extend(
            {
              at: 0,
            },
            e
          )
        );
      },
      shift: function (t) {
        var e = this.at(0);
        return this.remove(e, t), e;
      },
      slice: function () {
        return i.apply(this.models, arguments);
      },
      get: function (t) {
        if (null != t)
          return this._byId[t.id] || this._byId[t.cid] || this._byId[t];
      },
      at: function (t) {
        return this.models[t];
      },
      where: function (t, e) {
        return o.isEmpty(t)
          ? e
            ? void 0
            : []
          : this[e ? "find" : "filter"](function (e) {
              for (var n in t) if (t[n] !== e.get(n)) return !1;
              return !0;
            });
      },
      findWhere: function (t) {
        return this.where(t, !0);
      },
      sort: function (t) {
        if (!this.comparator)
          throw new Error("Cannot sort a set without a comparator");
        return (
          t || (t = {}),
          o.isString(this.comparator) || 1 === this.comparator.length
            ? (this.models = this.sortBy(this.comparator, this))
            : this.models.sort(o.bind(this.comparator, this)),
          t.silent || this.trigger("sort", this, t),
          this
        );
      },
      pluck: function (t) {
        return o.invoke(this.models, "get", t);
      },
      fetch: function (t) {
        void 0 === (t = t ? o.clone(t) : {}).parse && (t.parse = !0);
        var e = t.success,
          n = this;
        return (
          (t.success = function (r) {
            var i = t.reset ? "reset" : "set";
            n[i](r, t), e && e(n, r, t), n.trigger("sync", n, r, t);
          }),
          I(this, t),
          this.sync("read", this, t)
        );
      },
      create: function (t, e) {
        if (((e = e ? o.clone(e) : {}), !(t = this._prepareModel(t, e))))
          return !1;
        e.wait || this.add(t, e);
        var n = this,
          r = e.success;
        return (
          (e.success = function (t, e, i) {
            i.wait && n.add(t, i), r && r(t, e, i);
          }),
          t.save(null, e),
          t
        );
      },
      parse: function (t) {
        return t;
      },
      clone: function () {
        return new this.constructor(this.models);
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (t, e) {
        if (t instanceof f) return t.collection || (t.collection = this), t;
        (e = e ? o.clone(e) : {}).collection = this;
        var n = new this.model(t, e);
        return n.validationError
          ? (this.trigger("invalid", this, n.validationError, e), !1)
          : n;
      },
      _removeReference: function (t) {
        this === t.collection && delete t.collection,
          t.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (t, e, n, r) {
        (("add" !== t && "remove" !== t) || n === this) &&
          ("destroy" === t && this.remove(e, r),
          e &&
            t === "change:" + e.idAttribute &&
            (delete this._byId[e.previous(e.idAttribute)],
            null != e.id && (this._byId[e.id] = e)),
          this.trigger.apply(this, arguments));
      },
    });
    var g = [
      "forEach",
      "each",
      "map",
      "collect",
      "reduce",
      "foldl",
      "inject",
      "reduceRight",
      "foldr",
      "find",
      "detect",
      "filter",
      "select",
      "reject",
      "every",
      "all",
      "some",
      "any",
      "include",
      "contains",
      "invoke",
      "max",
      "min",
      "toArray",
      "size",
      "first",
      "head",
      "take",
      "initial",
      "rest",
      "tail",
      "drop",
      "last",
      "without",
      "difference",
      "indexOf",
      "shuffle",
      "lastIndexOf",
      "isEmpty",
      "chain",
    ];
    o.each(g, function (t) {
      h.prototype[t] = function () {
        var e = i.call(arguments);
        return e.unshift(this.models), o[t].apply(o, e);
      };
    });
    var y = ["groupBy", "countBy", "sortBy"];
    o.each(y, function (t) {
      h.prototype[t] = function (e, n) {
        var r = o.isFunction(e)
          ? e
          : function (t) {
              return t.get(e);
            };
        return o[t](this.models, r, n);
      };
    });
    var m = (t.View = function (t) {
        (this.cid = o.uniqueId("view")),
          t || (t = {}),
          o.extend(this, o.pick(t, w)),
          this._ensureElement(),
          this.initialize.apply(this, arguments),
          this.delegateEvents();
      }),
      b = /^(\S+)\s*(.*)$/,
      w = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    o.extend(m.prototype, a, {
      tagName: "div",
      $: function (t) {
        return this.$el.find(t);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this.$el.remove(), this.stopListening(), this;
      },
      setElement: function (e, n) {
        return (
          this.$el && this.undelegateEvents(),
          (this.$el = e instanceof t.$ ? e : t.$(e)),
          (this.el = this.$el[0]),
          !1 !== n && this.delegateEvents(),
          this
        );
      },
      delegateEvents: function (t) {
        if (!t && !(t = o.result(this, "events"))) return this;
        for (var e in (this.undelegateEvents(), t)) {
          var n = t[e];
          if ((o.isFunction(n) || (n = this[t[e]]), n)) {
            var r = e.match(b),
              i = r[1],
              a = r[2];
            (n = o.bind(n, this)),
              (i += ".delegateEvents" + this.cid),
              "" === a ? this.$el.on(i, n) : this.$el.on(i, a, n);
          }
        }
        return this;
      },
      undelegateEvents: function () {
        return this.$el.off(".delegateEvents" + this.cid), this;
      },
      _ensureElement: function () {
        if (this.el) this.setElement(o.result(this, "el"), !1);
        else {
          var e = o.extend({}, o.result(this, "attributes"));
          this.id && (e.id = o.result(this, "id")),
            this.className && (e.class = o.result(this, "className"));
          var n = t.$("<" + o.result(this, "tagName") + ">").attr(e);
          this.setElement(n, !1);
        }
      },
    }),
      (t.sync = function (e, n, r) {
        var i = T[e];
        o.defaults(r || (r = {}), {
          emulateHTTP: t.emulateHTTP,
          emulateJSON: t.emulateJSON,
        });
        var a = {
          type: i,
          dataType: "json",
        };
        if (
          (r.url || (a.url = o.result(n, "url") || L()),
          null != r.data ||
            !n ||
            ("create" !== e && "update" !== e && "patch" !== e) ||
            ((a.contentType = "application/json"),
            (a.data = JSON.stringify(r.attrs || n.toJSON(r)))),
          r.emulateJSON &&
            ((a.contentType = "application/x-www-form-urlencoded"),
            (a.data = a.data
              ? {
                  model: a.data,
                }
              : {})),
          r.emulateHTTP && ("PUT" === i || "DELETE" === i || "PATCH" === i))
        ) {
          (a.type = "POST"), r.emulateJSON && (a.data._method = i);
          var s = r.beforeSend;
          r.beforeSend = function (t) {
            if ((t.setRequestHeader("X-HTTP-Method-Override", i), s))
              return s.apply(this, arguments);
          };
        }
        "GET" === a.type || r.emulateJSON || (a.processData = !1),
          "PATCH" === a.type &&
            x &&
            (a.xhr = function () {
              return new ActiveXObject("Microsoft.XMLHTTP");
            });
        var u = (r.xhr = t.ajax(o.extend(a, r)));
        return n.trigger("request", n, u, r), u;
      });
    var x = !(
        "undefined" == typeof window ||
        !window.ActiveXObject ||
        (window.XMLHttpRequest && new XMLHttpRequest().dispatchEvent)
      ),
      T = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET",
      };
    t.ajax = function () {
      return t.$.ajax.apply(t.$, arguments);
    };
    var k = (t.Router = function (t) {
        t || (t = {}),
          t.routes && (this.routes = t.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      C = /\((.*?)\)/g,
      S = /(\(\?)?:\w+/g,
      E = /\*\w+/g,
      j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    o.extend(k.prototype, a, {
      initialize: function () {},
      route: function (e, n, r) {
        o.isRegExp(e) || (e = this._routeToRegExp(e)),
          o.isFunction(n) && ((r = n), (n = "")),
          r || (r = this[n]);
        var i = this;
        return (
          t.history.route(e, function (o) {
            var a = i._extractParameters(e, o);
            r && r.apply(i, a),
              i.trigger.apply(i, ["route:" + n].concat(a)),
              i.trigger("route", n, a),
              t.history.trigger("route", i, n, a);
          }),
          this
        );
      },
      navigate: function (e, n) {
        return t.history.navigate(e, n), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = o.result(this, "routes");
          for (var t, e = o.keys(this.routes); null != (t = e.pop()); )
            this.route(t, this.routes[t]);
        }
      },
      _routeToRegExp: function (t) {
        return (
          (t = t
            .replace(j, "\\$&")
            .replace(C, "(?:$1)?")
            .replace(S, function (t, e) {
              return e ? t : "([^/]+)";
            })
            .replace(E, "(.*?)")),
          new RegExp("^" + t + "$")
        );
      },
      _extractParameters: function (t, e) {
        var n = t.exec(e).slice(1);
        return o.map(n, function (t) {
          return t ? decodeURIComponent(t) : null;
        });
      },
    });
    var P = (t.History = function () {
        (this.handlers = []),
          o.bindAll(this, "checkUrl"),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      _ = /^[#\/]|\s+$/g,
      A = /^\/+|\/+$/g,
      N = /msie [\w.]+/,
      D = /\/$/,
      O = /[?#].*$/;
    (P.started = !1),
      o.extend(P.prototype, a, {
        interval: 50,
        getHash: function (t) {
          var e = (t || this).location.href.match(/#(.*)$/);
          return e ? e[1] : "";
        },
        getFragment: function (t, e) {
          if (null == t)
            if (this._hasPushState || !this._wantsHashChange || e) {
              t = this.location.pathname;
              var n = this.root.replace(D, "");
              t.indexOf(n) || (t = t.slice(n.length));
            } else t = this.getHash();
          return t.replace(_, "");
        },
        start: function (e) {
          if (P.started)
            throw new Error("Backbone.history has already been started");
          (P.started = !0),
            (this.options = o.extend(
              {
                root: "/",
              },
              this.options,
              e
            )),
            (this.root = this.options.root),
            (this._wantsHashChange = !1 !== this.options.hashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !!(
              this.options.pushState &&
              this.history &&
              this.history.pushState
            ));
          var n = this.getFragment(),
            r = document.documentMode,
            i = N.exec(navigator.userAgent.toLowerCase()) && (!r || r <= 7);
          (this.root = ("/" + this.root + "/").replace(A, "/")),
            i &&
              this._wantsHashChange &&
              ((this.iframe = t
                .$('<iframe src="javascript:0" tabindex="-1" />')
                .hide()
                .appendTo("body")[0].contentWindow),
              this.navigate(n)),
            this._hasPushState
              ? t.$(window).on("popstate", this.checkUrl)
              : this._wantsHashChange && "onhashchange" in window && !i
              ? t.$(window).on("hashchange", this.checkUrl)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval
                )),
            (this.fragment = n);
          var a = this.location,
            s = a.pathname.replace(/[^\/]$/, "$&/") === this.root;
          if (this._wantsHashChange && this._wantsPushState) {
            if (!this._hasPushState && !s)
              return (
                (this.fragment = this.getFragment(null, !0)),
                this.location.replace(
                  this.root + this.location.search + "#" + this.fragment
                ),
                !0
              );
            this._hasPushState &&
              s &&
              a.hash &&
              ((this.fragment = this.getHash().replace(_, "")),
              this.history.replaceState(
                {},
                document.title,
                this.root + this.fragment + a.search
              ));
          }
          if (!this.options.silent) return this.loadUrl();
        },
        stop: function () {
          t
            .$(window)
            .off("popstate", this.checkUrl)
            .off("hashchange", this.checkUrl),
            clearInterval(this._checkUrlInterval),
            (P.started = !1);
        },
        route: function (t, e) {
          this.handlers.unshift({
            route: t,
            callback: e,
          });
        },
        checkUrl: function () {
          var t = this.getFragment();
          if (
            (t === this.fragment &&
              this.iframe &&
              (t = this.getFragment(this.getHash(this.iframe))),
            t === this.fragment)
          )
            return !1;
          this.iframe && this.navigate(t), this.loadUrl();
        },
        loadUrl: function (t) {
          return (
            (t = this.fragment = this.getFragment(t)),
            o.any(this.handlers, function (e) {
              if (e.route.test(t)) return e.callback(t), !0;
            })
          );
        },
        navigate: function (t, e) {
          if (!P.started) return !1;
          (e && !0 !== e) ||
            (e = {
              trigger: !!e,
            });
          var n = this.root + (t = this.getFragment(t || ""));
          if (((t = t.replace(O, "")), this.fragment !== t)) {
            if (
              ((this.fragment = t),
              "" === t && "/" !== n && (n = n.slice(0, -1)),
              this._hasPushState)
            )
              this.history[e.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                n
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(n);
              this._updateHash(this.location, t, e.replace),
                this.iframe &&
                  t !== this.getFragment(this.getHash(this.iframe)) &&
                  (e.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, t, e.replace));
            }
            return e.trigger ? this.loadUrl(t) : void 0;
          }
        },
        _updateHash: function (t, e, n) {
          if (n) {
            var r = t.href.replace(/(javascript:|#).*$/, "");
            t.replace(r + "#" + e);
          } else t.hash = "#" + e;
        },
      }),
      (t.history = new P());
    var $ = function (t, e) {
      var n,
        r = this;
      (n =
        t && o.has(t, "constructor")
          ? t.constructor
          : function () {
              return r.apply(this, arguments);
            }),
        o.extend(n, r, e);
      var i = function () {
        this.constructor = n;
      };
      return (
        (i.prototype = r.prototype),
        (n.prototype = new i()),
        t && o.extend(n.prototype, t),
        (n.__super__ = r.prototype),
        n
      );
    };
    f.extend = h.extend = k.extend = m.extend = P.extend = $;
    var L = function () {
        throw new Error('A "url" property or function must be specified');
      },
      I = function (t, e) {
        var n = e.error;
        e.error = function (r) {
          n && n(t, r, e), t.trigger("error", t, r, e);
        };
      };
  }.call(this),
  function () {
    window.Pin || (window.Pin = {}),
      window.Pin.PaymentPage || (window.Pin.PaymentPage = {}),
      window.Pin.PaymentPage.Views || (window.Pin.PaymentPage.Views = {}),
      window.Pin.PaymentPage.Validators ||
        (window.Pin.PaymentPage.Validators = {});
  }.call(this),
  (function (t) {
    t.extend(t, {
      placeholder: {
        browser_supported: function () {
          return void 0 !== this._supported
            ? this._supported
            : (this._supported = !!(
                "placeholder" in t('<input type="text">')[0]
              ));
        },
        shim: function (e) {
          var n = {
            color: "#888",
            cls: "placeholder",
            selector: "input[placeholder], textarea[placeholder]",
          };
          return (
            t.extend(n, e),
            !this.browser_supported() && t(n.selector)._placeholder_shim(n)
          );
        },
      },
    }),
      t.extend(t.fn, {
        _placeholder_shim: function (e) {
          function n(e) {
            var n = t(e).offsetParent().offset(),
              r = t(e).offset();
            return {
              top: r.top - n.top,
              left: r.left - n.left,
              width: t(e).width(),
            };
          }
          function r(e) {
            var i = e.data("target");
            void 0 !== i &&
              (e.css(n(i)),
              t(window).one("resize", function () {
                r(e);
              }));
          }
          return this.each(function () {
            var i = t(this);
            if (i.is(":visible")) {
              if (i.data("placeholder"))
                return i.data("placeholder").css(n(i)), !0;
              var o = {};
              i.is("textarea") ||
                "auto" == i.css("height") ||
                (o = {
                  lineHeight: i.css("height"),
                  whiteSpace: "nowrap",
                });
              var a = t("<label />")
                .text(i.attr("placeholder"))
                .addClass(e.cls)
                .css(
                  t.extend(
                    {
                      position: "absolute",
                      display: "inline",
                      float: "none",
                      overflow: "hidden",
                      textAlign: "left",
                      color: e.color,
                      cursor: "text",
                      paddingTop: i.css("padding-top"),
                      paddingRight: i.css("padding-right"),
                      paddingBottom: i.css("padding-bottom"),
                      paddingLeft: i.css("padding-left"),
                      fontSize: i.css("font-size"),
                      fontFamily: i.css("font-family"),
                      fontStyle: i.css("font-style"),
                      fontWeight: i.css("font-weight"),
                      textTransform: i.css("text-transform"),
                      backgroundColor: "transparent",
                      zIndex: 99,
                    },
                    o
                  )
                )
                .css(n(this))
                .attr("for", this.id)
                .data("target", i)
                .click(function () {
                  t(this).data("target").focus();
                })
                .insertBefore(this);
              i
                .data("placeholder", a)
                .focus(function () {
                  a.hide();
                })
                .blur(function () {
                  a[i.val().length ? "hide" : "show"]();
                })
                .triggerHandler("blur"),
                t(window).one("resize", function () {
                  r(a);
                });
            }
          });
        },
      });
  })(jQuery),
  jQuery(document)
    .add(window)
    .bind("ready load", function () {
      jQuery.placeholder && jQuery.placeholder.shim();
    }),
  function () {
    var t, e, n, r;
    for (t = 0, e = (n = ["header", "section"]).length; t < e; t++)
      (r = n[t]), document.createElement(r);
  }.call(this),
  function () {
    Pin.env = "production";
  }.call(this),
  (window.GoogleMaps = (function () {
    if (window.GoogleMaps) return window.GoogleMaps;
    var t,
      e = {};
    return (
      (e.load = function () {
        return (
          t ||
            ((e.apiLoadedCallback = function () {
              t.resolve();
            }),
            (t = new $.Deferred(function () {
              var t = document.createElement("script");
              (t.type = "text/javascript"),
                (t.src =
                  "https://maps.googleapis.com/maps/api/js?v=3.24&key=AIzaSyBjbXJXXbgZuj6CGnIhiPGr8GmbYW4ufA8&callback=GoogleMaps.apiLoadedCallback"),
                document.body.appendChild(t);
            }))),
          t.promise()
        );
      }),
      e
    );
  })()),
  function () {
    $(function () {
      return $("a.new-window").click(function (t) {
        return t.preventDefault(), window.open($(this).attr("href"));
      });
    });
  }.call(this),
  function () {
    $(function () {
      return $(document).on(
        "submit",
        "form.prevent-multiple-submit",
        function (t) {
          var e;
          return $(this).is(".submitting")
            ? t.preventDefault()
            : ($(this).addClass("submitting"),
              (e = function () {
                return $(this).data("submit-text") || "Submitting...";
              }),
              $(this).find("input:submit").attr({
                value: e,
              }),
              $(this).find("button:submit").text(e));
        }
      );
    });
  }.call(this),
  (function (t) {
    (Pin.Q = t()), Pin.Q.stopUnhandledRejectionTracking();
  })(function () {
    "use strict";
    function t(t) {
      return function () {
        return G.apply(t, arguments);
      };
    }
    function e(t) {
      return t === Object(t);
    }
    function n(t) {
      return "[object StopIteration]" === rt(t) || t instanceof U;
    }
    function r(t, e) {
      if (
        B &&
        e.stack &&
        "object" == typeof t &&
        null !== t &&
        t.stack &&
        -1 === t.stack.indexOf(it)
      ) {
        for (var n = [], r = e; r; r = r.source) r.stack && n.unshift(r.stack);
        n.unshift(t.stack);
        var o = n.join("\n" + it + "\n");
        t.stack = i(o);
      }
    }
    function i(t) {
      for (var e = t.split("\n"), n = [], r = 0; r < e.length; ++r) {
        var i = e[r];
        s(i) || o(i) || !i || n.push(i);
      }
      return n.join("\n");
    }
    function o(t) {
      return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:");
    }
    function a(t) {
      var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
      if (e) return [e[1], Number(e[2])];
      var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
      if (n) return [n[1], Number(n[2])];
      var r = /.*@(.+):(\d+)$/.exec(t);
      return r ? [r[1], Number(r[2])] : void 0;
    }
    function s(t) {
      var e = a(t);
      if (!e) return !1;
      var n = e[0],
        r = e[1];
      return n === W && r >= z && r <= ct;
    }
    function u() {
      if (B)
        try {
          throw new Error();
        } catch (n) {
          var t = n.stack.split("\n"),
            e = a(t[0].indexOf("@") > 0 ? t[1] : t[2]);
          if (!e) return;
          return (W = e[0]), e[1];
        }
    }
    function c(t, e, n) {
      return function () {
        return (
          "undefined" != typeof console &&
            "function" == typeof console.warn &&
            console.warn(
              e + " is deprecated, use " + n + " instead.",
              new Error("").stack
            ),
          t.apply(t, arguments)
        );
      };
    }
    function l(t) {
      return y(t) ? t : m(t) ? _(t) : P(t);
    }
    function f() {
      function t(t) {
        (e = t),
          (o.source = t),
          K(
            n,
            function (e, n) {
              J(function () {
                t.promiseDispatch.apply(t, n);
              });
            },
            void 0
          ),
          (n = void 0),
          (r = void 0);
      }
      var e,
        n = [],
        r = [],
        i = tt(f.prototype),
        o = tt(d.prototype);
      if (
        ((o.promiseDispatch = function (t, i, o) {
          var a = Q(arguments);
          n
            ? (n.push(a), "when" === i && o[1] && r.push(o[1]))
            : J(function () {
                e.promiseDispatch.apply(e, a);
              });
        }),
        (o.valueOf = function () {
          if (n) return o;
          var t = g(e);
          return y(t) && (e = t), t;
        }),
        (o.inspect = function () {
          return e
            ? e.inspect()
            : {
                state: "pending",
              };
        }),
        l.longStackSupport && B)
      )
        try {
          throw new Error();
        } catch (t) {
          o.stack = t.stack.substring(t.stack.indexOf("\n") + 1);
        }
      return (
        (i.promise = o),
        (i.resolve = function (n) {
          e || t(l(n));
        }),
        (i.fulfill = function (n) {
          e || t(P(n));
        }),
        (i.reject = function (n) {
          e || t(j(n));
        }),
        (i.notify = function (t) {
          e ||
            K(
              r,
              function (e, n) {
                J(function () {
                  n(t);
                });
              },
              void 0
            );
        }),
        i
      );
    }
    function p(t) {
      if ("function" != typeof t)
        throw new TypeError("resolver must be a function.");
      var e = f();
      try {
        t(e.resolve, e.reject, e.notify);
      } catch (t) {
        e.reject(t);
      }
      return e.promise;
    }
    function h(t) {
      return p(function (e, n) {
        for (var r = 0, i = t.length; r < i; r++) l(t[r]).then(e, n);
      });
    }
    function d(t, e, n) {
      void 0 === e &&
        (e = function (t) {
          return j(new Error("Promise does not support operation: " + t));
        }),
        void 0 === n &&
          (n = function () {
            return {
              state: "unknown",
            };
          });
      var r = tt(d.prototype);
      if (
        ((r.promiseDispatch = function (n, i, o) {
          var a;
          try {
            a = t[i] ? t[i].apply(r, o) : e.call(r, i, o);
          } catch (t) {
            a = j(t);
          }
          n && n(a);
        }),
        (r.inspect = n),
        n)
      ) {
        var i = n();
        "rejected" === i.state && (r.exception = i.reason),
          (r.valueOf = function () {
            var t = n();
            return "pending" === t.state || "rejected" === t.state
              ? r
              : t.value;
          });
      }
      return r;
    }
    function v(t, e, n, r) {
      return l(t).then(e, n, r);
    }
    function g(t) {
      if (y(t)) {
        var e = t.inspect();
        if ("fulfilled" === e.state) return e.value;
      }
      return t;
    }
    function y(t) {
      return (
        e(t) &&
        "function" == typeof t.promiseDispatch &&
        "function" == typeof t.inspect
      );
    }
    function m(t) {
      return e(t) && "function" == typeof t.then;
    }
    function b(t) {
      return y(t) && "pending" === t.inspect().state;
    }
    function w(t) {
      return !y(t) || "fulfilled" === t.inspect().state;
    }
    function x(t) {
      return y(t) && "rejected" === t.inspect().state;
    }
    function T() {
      !st &&
        "undefined" != typeof window &&
        window.console &&
        console.warn("[Q] Unhandled rejection reasons (should be empty):", ot),
        (st = !0);
    }
    function k() {
      for (var t = 0; t < ot.length; t++) {
        var e = ot[t];
        console.warn("Unhandled rejection reason:", e);
      }
    }
    function C() {
      (ot.length = 0),
        (at.length = 0),
        (st = !1),
        ut ||
          ((ut = !0),
          "undefined" != typeof process && process.on && process.on("exit", k));
    }
    function S(t, e) {
      ut &&
        (at.push(t),
        e && void 0 !== e.stack ? ot.push(e.stack) : ot.push("(no stack) " + e),
        T());
    }
    function E(t) {
      if (ut) {
        var e = Y(at, t);
        -1 !== e && (at.splice(e, 1), ot.splice(e, 1));
      }
    }
    function j(t) {
      var e = d(
        {
          when: function (e) {
            return e && E(this), e ? e(t) : this;
          },
        },
        function () {
          return this;
        },
        function () {
          return {
            state: "rejected",
            reason: t,
          };
        }
      );
      return S(e, t), e;
    }
    function P(t) {
      return d(
        {
          when: function () {
            return t;
          },
          get: function (e) {
            return t[e];
          },
          set: function (e, n) {
            t[e] = n;
          },
          delete: function (e) {
            delete t[e];
          },
          post: function (e, n) {
            return null == e ? t.apply(void 0, n) : t[e].apply(t, n);
          },
          apply: function (e, n) {
            return t.apply(e, n);
          },
          keys: function () {
            return nt(t);
          },
        },
        void 0,
        function () {
          return {
            state: "fulfilled",
            value: t,
          };
        }
      );
    }
    function _(t) {
      var e = f();
      return (
        J(function () {
          try {
            t.then(e.resolve, e.reject, e.notify);
          } catch (t) {
            e.reject(t);
          }
        }),
        e.promise
      );
    }
    function A(t) {
      return d(
        {
          isDef: function () {},
        },
        function (e, n) {
          return I(t, e, n);
        },
        function () {
          return l(t).inspect();
        }
      );
    }
    function N(t, e, n) {
      return l(t).spread(e, n);
    }
    function D(t) {
      return function () {
        function e(t, e) {
          var a;
          if (V) {
            try {
              a = r[t](e);
            } catch (t) {
              return j(t);
            }
            return a.done ? a.value : v(a.value, i, o);
          }
          try {
            a = r[t](e);
          } catch (t) {
            return n(t) ? t.value : j(t);
          }
          return v(a, i, o);
        }
        var r = t.apply(this, arguments),
          i = e.bind(e, "next"),
          o = e.bind(e, "throw");
        return i();
      };
    }
    function O(t) {
      l.done(l.async(t)());
    }
    function $(t) {
      throw new U(t);
    }
    function L(t) {
      return function () {
        return N([this, R(arguments)], function (e, n) {
          return t.apply(e, n);
        });
      };
    }
    function I(t, e, n) {
      return l(t).dispatch(e, n);
    }
    function R(t) {
      return v(t, function (t) {
        var e = 0,
          n = f();
        return (
          K(
            t,
            function (r, i, o) {
              var a;
              y(i) && "fulfilled" === (a = i.inspect()).state
                ? (t[o] = a.value)
                : (++e,
                  v(
                    i,
                    function (r) {
                      (t[o] = r), 0 == --e && n.resolve(t);
                    },
                    n.reject,
                    function (t) {
                      n.notify({
                        index: o,
                        value: t,
                      });
                    }
                  ));
            },
            void 0
          ),
          0 === e && n.resolve(t),
          n.promise
        );
      });
    }
    function q(t) {
      return v(t, function (t) {
        return (
          (t = Z(t, l)),
          v(
            R(
              Z(t, function (t) {
                return v(t, X, X);
              })
            ),
            function () {
              return t;
            }
          )
        );
      });
    }
    function M(t) {
      return l(t).allSettled();
    }
    function H(t, e) {
      return l(t).then(void 0, void 0, e);
    }
    function F(t, e) {
      return l(t).nodeify(e);
    }
    var B = !1;
    try {
      throw new Error();
    } catch (t) {
      B = !!t.stack;
    }
    var W,
      U,
      V,
      z = u(),
      X = function () {},
      J = (function () {
        function t() {
          for (; e.next; ) {
            var n = (e = e.next).task;
            e.task = void 0;
            var i = e.domain;
            i && ((e.domain = void 0), i.enter());
            try {
              n();
            } catch (e) {
              if (o) throw (i && i.exit(), setTimeout(t, 0), i && i.enter(), e);
              setTimeout(function () {
                throw e;
              }, 0);
            }
            i && i.exit();
          }
          r = !1;
        }
        var e = {
            task: void 0,
            next: null,
          },
          n = e,
          r = !1,
          i = void 0,
          o = !1;
        if (
          ((J = function (t) {
            (n = n.next =
              {
                task: t,
                domain: o && process.domain,
                next: null,
              }),
              r || ((r = !0), i());
          }),
          "undefined" != typeof process && process.nextTick)
        )
          (o = !0),
            (i = function () {
              process.nextTick(t);
            });
        else if ("function" == typeof setImmediate)
          i =
            "undefined" != typeof window
              ? setImmediate.bind(window, t)
              : function () {
                  setImmediate(t);
                };
        else if ("undefined" != typeof MessageChannel) {
          var a = new MessageChannel();
          a.port1.onmessage = function () {
            (i = s), (a.port1.onmessage = t), t();
          };
          var s = function () {
            a.port2.postMessage(0);
          };
          i = function () {
            setTimeout(t, 0), s();
          };
        } else
          i = function () {
            setTimeout(t, 0);
          };
        return J;
      })(),
      G = Function.call,
      Q = t(Array.prototype.slice),
      K = t(
        Array.prototype.reduce ||
          function (t, e) {
            var n = 0,
              r = this.length;
            if (1 === arguments.length)
              for (;;) {
                if (n in this) {
                  e = this[n++];
                  break;
                }
                if (++n >= r) throw new TypeError();
              }
            for (; n < r; n++) n in this && (e = t(e, this[n], n));
            return e;
          }
      ),
      Y = t(
        Array.prototype.indexOf ||
          function (t) {
            for (var e = 0; e < this.length; e++) if (this[e] === t) return e;
            return -1;
          }
      ),
      Z = t(
        Array.prototype.map ||
          function (t, e) {
            var n = this,
              r = [];
            return (
              K(
                n,
                function (i, o, a) {
                  r.push(t.call(e, o, a, n));
                },
                void 0
              ),
              r
            );
          }
      ),
      tt =
        Object.create ||
        function (t) {
          function e() {}
          return (e.prototype = t), new e();
        },
      et = t(Object.prototype.hasOwnProperty),
      nt =
        Object.keys ||
        function (t) {
          var e = [];
          for (var n in t) et(t, n) && e.push(n);
          return e;
        },
      rt = t(Object.prototype.toString);
    U =
      "undefined" != typeof ReturnValue
        ? ReturnValue
        : function (t) {
            this.value = t;
          };
    try {
      new Function("(function* (){ yield 1; })"), (V = !0);
    } catch (t) {
      V = !1;
    }
    var it = "From previous event:";
    (l.resolve = l),
      (l.nextTick = J),
      (l.longStackSupport = !1),
      (l.defer = f),
      (f.prototype.makeNodeResolver = function () {
        var t = this;
        return function (e, n) {
          e
            ? t.reject(e)
            : arguments.length > 2
            ? t.resolve(Q(arguments, 1))
            : t.resolve(n);
        };
      }),
      (l.promise = p),
      (l.passByCopy = function (t) {
        return t;
      }),
      (d.prototype.passByCopy = function () {
        return this;
      }),
      (l.join = function (t, e) {
        return l(t).join(e);
      }),
      (d.prototype.join = function (t) {
        return l([this, t]).spread(function (t, e) {
          if (t === e) return t;
          throw new Error("Can't join: not the same: " + t + " " + e);
        });
      }),
      (l.race = h),
      (d.prototype.race = function () {
        return this.then(l.race);
      }),
      (l.makePromise = d),
      (d.prototype.toString = function () {
        return "[object Promise]";
      }),
      (d.prototype.then = function (t, e, n) {
        function i(e) {
          try {
            return "function" == typeof t ? t(e) : e;
          } catch (t) {
            return j(t);
          }
        }
        function o(t) {
          if ("function" == typeof e) {
            r(t, s);
            try {
              return e(t);
            } catch (t) {
              return j(t);
            }
          }
          return j(t);
        }
        function a(t) {
          return "function" == typeof n ? n(t) : t;
        }
        var s = this,
          u = f(),
          c = !1;
        return (
          J(function () {
            s.promiseDispatch(
              function (t) {
                c || ((c = !0), u.resolve(i(t)));
              },
              "when",
              [
                function (t) {
                  c || ((c = !0), u.resolve(o(t)));
                },
              ]
            );
          }),
          s.promiseDispatch(void 0, "when", [
            void 0,
            function (t) {
              var e,
                n = !1;
              try {
                e = a(t);
              } catch (t) {
                if (((n = !0), !l.onerror)) throw t;
                l.onerror(t);
              }
              n || u.notify(e);
            },
          ]),
          u.promise
        );
      }),
      (l.when = v),
      (d.prototype.thenResolve = function (t) {
        return this.then(function () {
          return t;
        });
      }),
      (l.thenResolve = function (t, e) {
        return l(t).thenResolve(e);
      }),
      (d.prototype.thenReject = function (t) {
        return this.then(function () {
          throw t;
        });
      }),
      (l.thenReject = function (t, e) {
        return l(t).thenReject(e);
      }),
      (l.nearer = g),
      (l.isPromise = y),
      (l.isPromiseAlike = m),
      (l.isPending = b),
      (d.prototype.isPending = function () {
        return "pending" === this.inspect().state;
      }),
      (l.isFulfilled = w),
      (d.prototype.isFulfilled = function () {
        return "fulfilled" === this.inspect().state;
      }),
      (l.isRejected = x),
      (d.prototype.isRejected = function () {
        return "rejected" === this.inspect().state;
      });
    var ot = [],
      at = [],
      st = !1,
      ut = !0;
    (l.resetUnhandledRejections = C),
      (l.getUnhandledReasons = function () {
        return ot.slice();
      }),
      (l.stopUnhandledRejectionTracking = function () {
        C(),
          "undefined" != typeof process &&
            process.on &&
            process.removeListener("exit", k),
          (ut = !1);
      }),
      C(),
      (l.reject = j),
      (l.fulfill = P),
      (l.master = A),
      (l.spread = N),
      (d.prototype.spread = function (t, e) {
        return this.all().then(function (e) {
          return t.apply(void 0, e);
        }, e);
      }),
      (l.async = D),
      (l.spawn = O),
      (l.return = $),
      (l.promised = L),
      (l.dispatch = I),
      (d.prototype.dispatch = function (t, e) {
        var n = this,
          r = f();
        return (
          J(function () {
            n.promiseDispatch(r.resolve, t, e);
          }),
          r.promise
        );
      }),
      (l.get = function (t, e) {
        return l(t).dispatch("get", [e]);
      }),
      (d.prototype.get = function (t) {
        return this.dispatch("get", [t]);
      }),
      (l.set = function (t, e, n) {
        return l(t).dispatch("set", [e, n]);
      }),
      (d.prototype.set = function (t, e) {
        return this.dispatch("set", [t, e]);
      }),
      (l.del = l.delete =
        function (t, e) {
          return l(t).dispatch("delete", [e]);
        }),
      (d.prototype.del = d.prototype.delete =
        function (t) {
          return this.dispatch("delete", [t]);
        }),
      (l.mapply = l.post =
        function (t, e, n) {
          return l(t).dispatch("post", [e, n]);
        }),
      (d.prototype.mapply = d.prototype.post =
        function (t, e) {
          return this.dispatch("post", [t, e]);
        }),
      (l.send =
        l.mcall =
        l.invoke =
          function (t, e) {
            return l(t).dispatch("post", [e, Q(arguments, 2)]);
          }),
      (d.prototype.send =
        d.prototype.mcall =
        d.prototype.invoke =
          function (t) {
            return this.dispatch("post", [t, Q(arguments, 1)]);
          }),
      (l.fapply = function (t, e) {
        return l(t).dispatch("apply", [void 0, e]);
      }),
      (d.prototype.fapply = function (t) {
        return this.dispatch("apply", [void 0, t]);
      }),
      (l.try = l.fcall =
        function (t) {
          return l(t).dispatch("apply", [void 0, Q(arguments, 1)]);
        }),
      (d.prototype.fcall = function () {
        return this.dispatch("apply", [void 0, Q(arguments)]);
      }),
      (l.fbind = function (t) {
        var e = l(t),
          n = Q(arguments, 1);
        return function () {
          return e.dispatch("apply", [this, n.concat(Q(arguments))]);
        };
      }),
      (d.prototype.fbind = function () {
        var t = this,
          e = Q(arguments);
        return function () {
          return t.dispatch("apply", [this, e.concat(Q(arguments))]);
        };
      }),
      (l.keys = function (t) {
        return l(t).dispatch("keys", []);
      }),
      (d.prototype.keys = function () {
        return this.dispatch("keys", []);
      }),
      (l.all = R),
      (d.prototype.all = function () {
        return R(this);
      }),
      (l.allResolved = c(q, "allResolved", "allSettled")),
      (d.prototype.allResolved = function () {
        return q(this);
      }),
      (l.allSettled = M),
      (d.prototype.allSettled = function () {
        return this.then(function (t) {
          return R(
            Z(t, function (t) {
              function e() {
                return t.inspect();
              }
              return (t = l(t)).then(e, e);
            })
          );
        });
      }),
      (l.fail = l.catch =
        function (t, e) {
          return l(t).then(void 0, e);
        }),
      (d.prototype.fail = d.prototype.catch =
        function (t) {
          return this.then(void 0, t);
        }),
      (l.progress = H),
      (d.prototype.progress = function (t) {
        return this.then(void 0, void 0, t);
      }),
      (l.fin = l.finally =
        function (t, e) {
          return l(t).finally(e);
        }),
      (d.prototype.fin = d.prototype.finally =
        function (t) {
          return (
            (t = l(t)),
            this.then(
              function (e) {
                return t.fcall().then(function () {
                  return e;
                });
              },
              function (e) {
                return t.fcall().then(function () {
                  throw e;
                });
              }
            )
          );
        }),
      (l.done = function (t, e, n, r) {
        return l(t).done(e, n, r);
      }),
      (d.prototype.done = function (t, e, n) {
        var i = function (t) {
            J(function () {
              if ((r(t, o), !l.onerror)) throw t;
              l.onerror(t);
            });
          },
          o = t || e || n ? this.then(t, e, n) : this;
        "object" == typeof process &&
          process &&
          process.domain &&
          (i = process.domain.bind(i)),
          o.then(void 0, i);
      }),
      (l.timeout = function (t, e, n) {
        return l(t).timeout(e, n);
      }),
      (d.prototype.timeout = function (t, e) {
        var n = f(),
          r = setTimeout(function () {
            n.reject(new Error(e || "Timed out after " + t + " ms"));
          }, t);
        return (
          this.then(
            function (t) {
              clearTimeout(r), n.resolve(t);
            },
            function (t) {
              clearTimeout(r), n.reject(t);
            },
            n.notify
          ),
          n.promise
        );
      }),
      (l.delay = function (t, e) {
        return void 0 === e && ((e = t), (t = void 0)), l(t).delay(e);
      }),
      (d.prototype.delay = function (t) {
        return this.then(function (e) {
          var n = f();
          return (
            setTimeout(function () {
              n.resolve(e);
            }, t),
            n.promise
          );
        });
      }),
      (l.nfapply = function (t, e) {
        return l(t).nfapply(e);
      }),
      (d.prototype.nfapply = function (t) {
        var e = f(),
          n = Q(t);
        return (
          n.push(e.makeNodeResolver()), this.fapply(n).fail(e.reject), e.promise
        );
      }),
      (l.nfcall = function (t) {
        var e = Q(arguments, 1);
        return l(t).nfapply(e);
      }),
      (d.prototype.nfcall = function () {
        var t = Q(arguments),
          e = f();
        return (
          t.push(e.makeNodeResolver()), this.fapply(t).fail(e.reject), e.promise
        );
      }),
      (l.nfbind = l.denodeify =
        function (t) {
          var e = Q(arguments, 1);
          return function () {
            var n = e.concat(Q(arguments)),
              r = f();
            return (
              n.push(r.makeNodeResolver()),
              l(t).fapply(n).fail(r.reject),
              r.promise
            );
          };
        }),
      (d.prototype.nfbind = d.prototype.denodeify =
        function () {
          var t = Q(arguments);
          return t.unshift(this), l.denodeify.apply(void 0, t);
        }),
      (l.nbind = function (t, e) {
        var n = Q(arguments, 2);
        return function () {
          function r() {
            return t.apply(e, arguments);
          }
          var i = n.concat(Q(arguments)),
            o = f();
          return (
            i.push(o.makeNodeResolver()),
            l(r).fapply(i).fail(o.reject),
            o.promise
          );
        };
      }),
      (d.prototype.nbind = function () {
        var t = Q(arguments, 0);
        return t.unshift(this), l.nbind.apply(void 0, t);
      }),
      (l.nmapply = l.npost =
        function (t, e, n) {
          return l(t).npost(e, n);
        }),
      (d.prototype.nmapply = d.prototype.npost =
        function (t, e) {
          var n = Q(e || []),
            r = f();
          return (
            n.push(r.makeNodeResolver()),
            this.dispatch("post", [t, n]).fail(r.reject),
            r.promise
          );
        }),
      (l.nsend =
        l.nmcall =
        l.ninvoke =
          function (t, e) {
            var n = Q(arguments, 2),
              r = f();
            return (
              n.push(r.makeNodeResolver()),
              l(t).dispatch("post", [e, n]).fail(r.reject),
              r.promise
            );
          }),
      (d.prototype.nsend =
        d.prototype.nmcall =
        d.prototype.ninvoke =
          function (t) {
            var e = Q(arguments, 1),
              n = f();
            return (
              e.push(n.makeNodeResolver()),
              this.dispatch("post", [t, e]).fail(n.reject),
              n.promise
            );
          }),
      (l.nodeify = F),
      (d.prototype.nodeify = function (t) {
        if (!t) return this;
        this.then(
          function (e) {
            J(function () {
              t(null, e);
            });
          },
          function (e) {
            J(function () {
              t(e);
            });
          }
        );
      });
    var ct = u();
    return l;
  }),
  (function () {
    function t(t, e) {
      if (0 == t[e].length) return (t[e] = {});
      var n = {};
      for (var r in t[e]) d.call(t[e], r) && (n[r] = t[e][r]);
      return (t[e] = n), n;
    }
    function e(n, r, i, o) {
      var a = n.shift();
      if (!d.call(Object.prototype, i))
        if (a) {
          var s = (r[i] = r[i] || []);
          "]" == a
            ? g(s)
              ? "" != o && s.push(o)
              : "object" == typeof s
              ? (s[y(s).length] = o)
              : (s = r[i] = [r[i], o])
            : ~v(a, "]")
            ? ((a = a.substr(0, a.length - 1)),
              !w.test(a) && g(s) && (s = t(r, i)),
              e(n, s, a, o))
            : (!w.test(a) && g(s) && (s = t(r, i)), e(n, s, a, o));
        } else
          g(r[i])
            ? r[i].push(o)
            : "object" == typeof r[i] || void 0 === r[i]
            ? (r[i] = o)
            : (r[i] = [r[i], o]);
    }
    function n(t, n, r) {
      if (~v(n, "]")) {
        var i = n.split("[");
        i.length;
        e(i, t, "base", r);
      } else {
        if (!w.test(n) && g(t.base)) {
          var o = {};
          for (var a in t.base) o[a] = t.base[a];
          t.base = o;
        }
        c(t.base, n, r);
      }
      return t;
    }
    function r(t) {
      if ("object" != typeof t) return t;
      if (g(t)) {
        var e = [];
        for (var n in t) d.call(t, n) && e.push(t[n]);
        return e;
      }
      for (var i in t) t[i] = r(t[i]);
      return t;
    }
    function i(t) {
      var e = {
        base: {},
      };
      return (
        m(y(t), function (r) {
          n(e, r, t[r]);
        }),
        r(e.base)
      );
    }
    function o(t) {
      return r(
        b(
          String(t).split("&"),
          function (t, e) {
            var r = v(e, "="),
              i = l(e),
              o = e.substr(0, i || r),
              a = (a = e.substr(i || r, e.length)).substr(
                v(a, "=") + 1,
                a.length
              );
            return (
              "" == o && ((o = e), (a = "")), "" == o ? t : n(t, f(o), f(a))
            );
          },
          {
            base: {},
          }
        ).base
      );
    }
    function a(t, e) {
      if (!e) throw new TypeError("stringify expects an object");
      return e + "=" + encodeURIComponent(t);
    }
    function s(t, e) {
      var n = [];
      if (!e) throw new TypeError("stringify expects an object");
      for (var r = 0; r < t.length; r++) n.push(x(t[r], e + "[" + r + "]"));
      return n.join("&");
    }
    function u(t, e) {
      for (var n, r = [], i = y(t), o = 0, a = i.length; o < a; ++o)
        "" != (n = i[o]) &&
          (null == t[n]
            ? r.push(encodeURIComponent(n) + "=")
            : r.push(
                x(
                  t[n],
                  e
                    ? e + "[" + encodeURIComponent(n) + "]"
                    : encodeURIComponent(n)
                )
              ));
      return r.join("&");
    }
    function c(t, e, n) {
      var r = t[e];
      d.call(Object.prototype, e) ||
        (void 0 === r ? (t[e] = n) : g(r) ? r.push(n) : (t[e] = [r, n]));
    }
    function l(t) {
      for (var e, n, r = t.length, i = 0; i < r; ++i)
        if (
          ("]" == (n = t[i]) && (e = !1), "[" == n && (e = !0), "=" == n && !e)
        )
          return i;
    }
    function f(t) {
      try {
        return decodeURIComponent(t.replace(/\+/g, " "));
      } catch (e) {
        return t;
      }
    }
    Pin.QueryString = {};
    var p = Pin.QueryString,
      h = Object.prototype.toString,
      d = Object.prototype.hasOwnProperty,
      v =
        "function" == typeof Array.prototype.indexOf
          ? function (t, e) {
              return t.indexOf(e);
            }
          : function (t, e) {
              for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
              return -1;
            },
      g =
        Array.isArray ||
        function (t) {
          return "[object Array]" == h.call(t);
        },
      y =
        Object.keys ||
        function (t) {
          var e = [];
          for (var n in t) t.hasOwnProperty(n) && e.push(n);
          return e;
        },
      m =
        "function" == typeof Array.prototype.forEach
          ? function (t, e) {
              return t.forEach(e);
            }
          : function (t, e) {
              for (var n = 0; n < t.length; n++) e(t[n]);
            },
      b = function (t, e, n) {
        if ("function" == typeof t.reduce) return t.reduce(e, n);
        for (var r = n, i = 0; i < t.length; i++) r = e(r, t[i]);
        return r;
      },
      w = /^[0-9]+$/;
    p.parse = function (t) {
      return null == t || "" == t ? {} : "object" == typeof t ? i(t) : o(t);
    };
    var x = (p.stringify = function (t, e) {
      return g(t)
        ? s(t, e)
        : "[object Object]" == h.call(t)
        ? u(t, e)
        : "string" == typeof t
        ? a(t, e)
        : e + "=" + encodeURIComponent(String(t));
    });
  })(),
  function () {
    $(function () {
      return $("body").addClass("ready");
    });
  }.call(this),
  function () {
    Pin.PaymentPage.Validators.InputFormatValidator = (function () {
      function t(t) {
        this.input = $(t);
      }
      return (
        (t.prototype.validations = {
          "[required]": function (t) {
            return 0 !== t.length;
          },
          "[data-validate=amount]": function (t) {
            var e, n;
            if ((n = t.match(/^([^\d])?([\d+,]+)(\.\d+)?$/)))
              return (
                n[1] && (t = t.replace(n[1], "")),
                (e = parseFloat(n[2] + n[3])) && e >= 1
              );
          },
          "[data-validate=cc-name]": function (t) {
            return t.match(/^.+\s.+$/);
          },
          "[data-validate=cc-number]": function (t) {
            return $.payment.validateCardNumber(t);
          },
          "[data-validate=cc-exp]": function (t) {
            var e;
            return (
              (e = t.match(/^(\d+)\s*\/\s*(\d+)$/)) &&
              $.payment.validateCardExpiry(e[1], e[2])
            );
          },
          "[data-validate=email]": function (t) {
            return t.match(/^.+@.+\..+$/);
          },
        }),
        (t.prototype.validate = function () {
          var t, e;
          return (
            (t = $.trim(this.input.val())),
            _.each(
              this.validations,
              ((e = this),
              function (n, r) {
                if (e.input.is(r) && !n(t)) return e.input.addClass("error");
              })
            )
          );
        }),
        t
      );
    })();
  }.call(this),
  function () {
    var t = function (t, n) {
        function r() {
          this.constructor = t;
        }
        for (var i in n) e.call(n, i) && (t[i] = n[i]);
        return (
          (r.prototype = n.prototype),
          (t.prototype = new r()),
          (t.__super__ = n.prototype),
          t
        );
      },
      e = {}.hasOwnProperty;
    Pin.PaymentPage.Views.StepView = (function (e) {
      function n() {
        return n.__super__.constructor.apply(this, arguments);
      }
      return (
        t(n, e),
        (n.prototype.events = {
          "keyup  :input": "inputKeyup",
          "change :input": "inputChanged",
        }),
        (n.prototype.initialize = function () {
          return (
            this.$("[data-validate=cc-number]").payment("formatCardNumber"),
            this.$("[data-validate=cc-exp]").payment("formatCardExpiry"),
            this.$("[data-validate=cc-cvc]").payment("formatCardCVC")
          );
        }),
        (n.prototype.inputKeyup = function (t) {
          var e, n;
          if ((e = $(t.target)).is(".error"))
            return (
              this.keyUpTimeout && clearTimeout(this.keyUpTimeout),
              (this.keyUpTimeout = setTimeout(
                ((n = this),
                function () {
                  return n.validate(e);
                }),
                300
              ))
            );
        }),
        (n.prototype.inputChanged = function (t) {
          if (this.hasError()) return this.validate($(t.target));
        }),
        (n.prototype.isActive = function () {
          return this.$el.is(".active");
        }),
        (n.prototype.validate = function (t) {
          return (
            null == t && (t = this.inputs()),
            t.removeClass("error"),
            this.validateInputs(t),
            !this.hasError()
          );
        }),
        (n.prototype.animateOut = function () {
          return (
            this.$el.removeClass("active").addClass("after-active"),
            setTimeout(
              ((t = this),
              function () {
                return t.$el.addClass("hidden");
              }),
              600
            )
          );
          var t;
        }),
        (n.prototype.animateIn = function () {
          var t;
          return (
            this.$el.removeClass("hidden").addClass("before-active"),
            setTimeout(
              ((t = this),
              function () {
                return t.$el.addClass("active");
              }),
              1
            ),
            setTimeout(
              (function (t) {
                return function () {
                  return t.focusFirstInput();
                };
              })(this),
              500
            )
          );
        }),
        (n.prototype.focusFirstInput = function () {
          return this.nextInputForFocus().focus();
        }),
        (n.prototype.nextInputForFocus = function () {
          return (
            this.errorInputs().get(0) ||
            this.emptyInputs().get(0) ||
            this.inputs().get(0)
          );
        }),
        (n.prototype.hasError = function () {
          return 0 !== this.errorInputs().length;
        }),
        (n.prototype.inputs = function () {
          return this.$(":input").not("[type='hidden']");
        }),
        (n.prototype.errorInputs = function () {
          return this.inputs().filter(".error");
        }),
        (n.prototype.firstErrorInput = function () {
          return this.errorInputs().filter(":first");
        }),
        (n.prototype.emptyInputs = function () {
          return this.inputs().filter(function () {
            return 0 === $.trim($(this).val()).length;
          });
        }),
        (n.prototype.validateInputs = function (t) {
          return this.validateInputFormats(t);
        }),
        (n.prototype.validateInputFormats = function (t) {
          return _(t).each(function (t) {
            return new Pin.PaymentPage.Validators.InputFormatValidator(
              t
            ).validate();
          });
        }),
        n
      );
    })(Backbone.View);
  }.call(this),
  function () {
    Pin.PaymentPage.LocalStorageMessageProxy = (function () {
      function t(t) {
        (this.namespace = t), (this.listeners = []);
      }
      return (
        (t.prototype.postMessage = function (t, e) {
          var n;
          return (
            (n = {
              message: t,
              origin: e,
            }),
            this._storeItem(n)
          );
        }),
        (t.prototype.listen = function (t) {
          return (this.interval = setInterval(
            ((e = this),
            function () {
              return e._fetchAndNotify(t);
            }),
            100
          ));
          var e;
        }),
        (t.prototype.remove = function () {
          if (this.interval) return clearInterval(this.interval);
        }),
        (t.prototype.addMessageListener = function (t) {
          return this.listeners.push(t);
        }),
        (t.prototype._fetchAndNotify = function (t) {
          var e;
          if ((e = this._fetchAndDeleteItem()) && e.origin === t)
            return _.each(this.listeners, function (t) {
              return t(e.message);
            });
        }),
        (t.prototype._storeItem = function (t) {
          var e;
          return (
            (e = JSON.stringify(t)),
            window.localStorage.setItem(this.namespace, e)
          );
        }),
        (t.prototype._fetchAndDeleteItem = function () {
          var t;
          if ((t = window.localStorage.getItem(this.namespace)))
            return (
              window.localStorage.removeItem(this.namespace), JSON.parse(t)
            );
        }),
        t
      );
    })();
  }.call(this),
  function () {
    var t =
        [].indexOf ||
        function (t) {
          for (var e = 0, n = this.length; e < n; e++)
            if (e in this && this[e] === t) return e;
          return -1;
        },
      e = [].slice;
    Pin.PaymentPage.CrossWindowMessagePoster = (function () {
      function n(e) {
        null == e && (e = {}),
          (this.options = e),
          (this.origin =
            $("meta[name='overlay-origin']").attr("content") || "*"),
          t.call(this.options, "disableLocalStorageProxy") >= 0 ||
            (this._ios9orLater()
              ? ((this.options.disableLocalStorageProxy = !0),
                (this.origin = "*"))
              : (this.options.disableLocalStorageProxy = !1)),
          (this.popupWindowName =
            $("meta[name='popup-window-name']").attr("content") || !1);
      }
      return (
        (n.prototype.postShowingPaymentForm = function (t, e) {
          return this.postMessage(
            t,
            this._buildMessage("ShowingPaymentForm", e)
          );
        }),
        (n.prototype.postSubmittingPayment = function (t) {
          return this.postMessage(t, this._buildMessage("SubmittingPayment"));
        }),
        (n.prototype.postEscapeKeyUp = function (t) {
          return this.postMessage(t, this._buildMessage("EscapeKeyUp"));
        }),
        (n.prototype.postPaymentFinished = function (t, e) {
          return this.postMessage(t, this._buildMessage("PaymentFinished", e));
        }),
        (n.prototype.postMessage = function (t, e, n) {
          return (
            null == n && (n = {}),
            !this.popupWindowName ||
              this.options.disableLocalStorageProxy ||
              n.disableLocalStorageProxy ||
              (t = new Pin.PaymentPage.LocalStorageMessageProxy(
                this.popupWindowName
              )),
            t.postMessage(e, this.origin)
          );
        }),
        (n.prototype._buildMessage = function () {
          var t, n;
          return (
            (n = arguments[0]),
            (t = 2 <= arguments.length ? e.call(arguments, 1) : []),
            ["Pin." + n].concat(e.call(t)).join(":")
          );
        }),
        (n.prototype._ios9orLater = function () {
          return new RegExp("iPhone OS ([89]|1\\d)_(\\d)+").test(
            navigator.userAgent
          );
        }),
        n
      );
    })();
  }.call(this),
  function () {
    Pin.PaymentPage.OverlayEscapeKeyListener = (function () {
      function t() {}
      return (
        (t.prototype.listen = function () {
          return $(document).on(
            "keyup",
            ((t = this),
            function (e) {
              return t._keyUp(e);
            })
          );
          var t;
        }),
        (t.prototype._keyUp = function (t) {
          var e;
          if (((e = 27), t.keyCode === e)) return this._postMessage();
        }),
        (t.prototype._postMessage = function () {
          return new Pin.PaymentPage.CrossWindowMessagePoster().postEscapeKeyUp(
            window.parent
          );
        }),
        t
      );
    })();
  }.call(this),
  function () {
    var t = function (t, n) {
        function r() {
          this.constructor = t;
        }
        for (var i in n) e.call(n, i) && (t[i] = n[i]);
        return (
          (r.prototype = n.prototype),
          (t.prototype = new r()),
          (t.__super__ = n.prototype),
          t
        );
      },
      e = {}.hasOwnProperty;
    Pin.PaymentPage.Views.FormView = (function (e) {
      function n() {
        return n.__super__.constructor.apply(this, arguments);
      }
      return (
        t(n, e),
        (n.prototype.initialize = function () {
          return (
            (this.steps = _.map(this.$("form.pay .step"), function (t) {
              return new Pin.PaymentPage.Views.StepView({
                el: t,
              });
            })),
            this.$el.is(".overlay") &&
              (new Pin.PaymentPage.OverlayEscapeKeyListener().listen(),
              this.notifyShowingPaymentForm()),
            setTimeout(
              ((t = this),
              function () {
                return t.currentStep().focusFirstInput();
              }),
              100
            )
          );
          var t;
        }),
        (n.prototype.events = {
          "submit form.pay:not(.submitting)": "formSubmitted",
        }),
        (n.prototype.currentStep = function () {
          return _.find(this.steps, function (t) {
            return t.isActive();
          });
        }),
        (n.prototype.nextStep = function () {
          var t;
          return (
            (t = _.indexOf(this.steps, this.currentStep()) + 1), this.steps[t]
          );
        }),
        (n.prototype.formSubmitted = function (t) {
          return this.currentStep().validate()
            ? this.completeStep(t)
            : (t.preventDefault(), this.showValidationErrors());
        }),
        (n.prototype.completeStep = function (t) {
          var e, n;
          return (n = this.nextStep())
            ? (t.preventDefault(),
              this.currentStep().animateOut(),
              n.animateIn())
            : ((e = this.$("form").addClass("prevent-multiple-submit")),
              new Pin.PaymentPage.CrossWindowMessagePoster().postSubmittingPayment(
                window.parent
              ),
              setTimeout(function () {
                return e.submit();
              }, 1));
        }),
        (n.prototype.showValidationErrors = function () {
          return this.isOverlay()
            ? this.shakeForm()
            : this.scrollToFirstErrorInput();
        }),
        (n.prototype.isOverlay = function () {
          return this.$el.is(".overlay");
        }),
        (n.prototype.shakeForm = function () {
          return (
            this.$el.removeClass("error"),
            setTimeout(
              ((t = this),
              function () {
                return t.$el.addClass("error");
              }),
              1
            )
          );
          var t;
        }),
        (n.prototype.scrollToFirstErrorInput = function () {
          var t, e;
          return (
            (t = this.currentStep().firstErrorInput().get(0)),
            (e = $("[for='" + $(t).attr("id") + "']").get(0)),
            this.scrollToElement(e || t)
          );
        }),
        (n.prototype.scrollToElement = function (t) {
          if (t && t.scrollIntoView) return t.scrollIntoView();
        }),
        (n.prototype.notifyShowingPaymentForm = function () {
          var t;
          return (
            (t = this.calculateExtraHeight()),
            new Pin.PaymentPage.CrossWindowMessagePoster().postShowingPaymentForm(
              window.parent,
              t
            )
          );
        }),
        (n.prototype.calculateExtraHeight = function () {
          var t, e, n, r;
          return (
            (r = 50),
            (e = $("p.description")).length && (r += e.outerHeight(!0)),
            (n = $("p.error")).length &&
              (r += n.next().position().top - n.position().top),
            (t = $("div.custom_fields")).length && (r += t.outerHeight(!0)),
            r
          );
        }),
        n
      );
    })(Backbone.View);
  }.call(this),
  function () {
    var t = function (t, n) {
        function r() {
          this.constructor = t;
        }
        for (var i in n) e.call(n, i) && (t[i] = n[i]);
        return (
          (r.prototype = n.prototype),
          (t.prototype = new r()),
          (t.__super__ = n.prototype),
          t
        );
      },
      e = {}.hasOwnProperty;
    Pin.PaymentPage.Views.ThanksOverlayView = (function (e) {
      function n() {
        return n.__super__.constructor.apply(this, arguments);
      }
      return (
        t(n, e),
        (n.prototype.initialize = function () {
          var t;
          if (
            ((this.chargeToken = this.$el.data("charge-token")),
            (this.immediate = this.$el.data("immediate")),
            this.immediate)
          )
            return (
              (t = this.chargeToken),
              setTimeout(function () {
                return new Pin.PaymentPage.CrossWindowMessagePoster().postPaymentFinished(
                  window.parent,
                  t
                );
              }, 1e3)
            );
        }),
        (n.prototype.events = {
          click: "clicked",
        }),
        (n.prototype.clicked = function (t) {
          return (
            t.preventDefault(),
            new Pin.PaymentPage.CrossWindowMessagePoster().postPaymentFinished(
              window.parent,
              this.chargeToken
            )
          );
        }),
        n
      );
    })(Backbone.View);
  }.call(this),
  function () {
    var t = function (t, n) {
        function r() {
          this.constructor = t;
        }
        for (var i in n) e.call(n, i) && (t[i] = n[i]);
        return (
          (r.prototype = n.prototype),
          (t.prototype = new r()),
          (t.__super__ = n.prototype),
          t
        );
      },
      e = {}.hasOwnProperty;
    Pin.PaymentPage.Views.ThanksPopupView = (function (e) {
      function n() {
        return n.__super__.constructor.apply(this, arguments);
      }
      return (
        t(n, e),
        (n.prototype.initialize = function () {
          var t;
          if (
            ((this.chargeToken = this.$el.data("charge-token")),
            (this.immediate = this.$el.data("immediate")),
            this.immediate)
          )
            return (
              (t = this.chargeToken),
              setTimeout(function () {
                return (
                  new Pin.PaymentPage.CrossWindowMessagePoster().postPaymentFinished(
                    window.opener,
                    t
                  ),
                  window.close()
                );
              }, 1e3)
            );
        }),
        (n.prototype.events = {
          click: "clicked",
        }),
        (n.prototype.clicked = function (t) {
          return (
            t.preventDefault(),
            new Pin.PaymentPage.CrossWindowMessagePoster().postPaymentFinished(
              window.opener,
              this.chargeToken
            ),
            window.close()
          );
        }),
        n
      );
    })(Backbone.View);
  }.call(this),
  function () {
    Pin.PaymentPage.PopupMessageRelay = (function () {
      function t(t) {
        var e;
        (this.messagePoster = new Pin.PaymentPage.CrossWindowMessagePoster()),
          (this.proxy = new Pin.PaymentPage.LocalStorageMessageProxy(t)),
          this.proxy.addMessageListener(
            ((e = this),
            function (t) {
              return e.messagePoster.postMessage(parent, t, {
                disableLocalStorageProxy: !0,
              });
            })
          );
      }
      return (
        (t.prototype.listen = function () {
          return this.proxy.listen(this.messagePoster.origin);
        }),
        t
      );
    })();
  }.call(this),
  function () {
    $(function () {
      return (
        $(".payment-page-form").each(function () {
          return new Pin.PaymentPage.Views.FormView({
            el: this,
          });
        }),
        $(".payment-page-thanks-overlay-view").each(function () {
          return new Pin.PaymentPage.Views.ThanksOverlayView({
            el: this,
          });
        }),
        $(".payment-page-thanks-popup-view").each(function () {
          return new Pin.PaymentPage.Views.ThanksPopupView({
            el: this,
          });
        }),
        $(".popup-message-relay").each(function () {
          var t;
          return (
            (t = $("meta[name='popup-window-name']").attr("content")),
            new Pin.PaymentPage.PopupMessageRelay(t).listen()
          );
        })
      );
    });
  }.call(this);
