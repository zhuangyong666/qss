var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

!function(e, i) {
    "object" == ("undefined" == typeof exports ? "undefined" : t(exports)) && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define([ "exports" ], i) : i(e.echarts = {});
}(void 0, function(e) {
    function i(t, e) {
        "createCanvas" === t && (qu = null), Yu[t] = e;
    }
    function n(e) {
        if (null == e || "object" != (void 0 === e ? "undefined" : t(e))) return e;
        var i = e, r = Nu.call(e);
        if ("[object Array]" === r) {
            if (!B(e)) {
                i = [];
                for (var o = 0, a = e.length; a > o; o++) i[o] = n(e[o]);
            }
        } else if (Ru[r]) {
            if (!B(e)) {
                var s = e.constructor;
                if (e.constructor.from) i = s.from(e); else {
                    i = new s(e.length);
                    for (var o = 0, a = e.length; a > o; o++) i[o] = n(e[o]);
                }
            }
        } else if (!zu[r] && !B(e) && !T(e)) {
            i = {};
            for (var l in e) e.hasOwnProperty(l) && (i[l] = n(e[l]));
        }
        return i;
    }
    function r(t, e, i) {
        if (!b(e) || !b(t)) return i ? n(e) : t;
        for (var o in e) if (e.hasOwnProperty(o)) {
            var a = t[o], s = e[o];
            !b(s) || !b(a) || _(s) || _(a) || T(s) || T(a) || S(s) || S(a) || B(s) || B(a) ? !i && o in t || (t[o] = n(e[o], !0)) : r(a, s, i);
        }
        return t;
    }
    function o(t, e) {
        for (var i = t[0], n = 1, o = t.length; o > n; n++) i = r(i, t[n], e);
        return i;
    }
    function a(t, e) {
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t;
    }
    function s(t, e, i) {
        for (var n in e) e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
        return t;
    }
    function l() {
        return qu || (qu = Uu().getContext("2d")), qu;
    }
    function h(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        }
        return -1;
    }
    function u(t, e) {
        function i() {}
        var n = t.prototype;
        i.prototype = e.prototype, t.prototype = new i();
        for (var r in n) t.prototype[r] = n[r];
        t.prototype.constructor = t, t.superClass = e;
    }
    function c(t, e, i) {
        s(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, i);
    }
    function d(t) {
        return t ? "string" != typeof t && "number" == typeof t.length : void 0;
    }
    function f(t, e, i) {
        if (t && e) if (t.forEach && t.forEach === Hu) t.forEach(e, i); else if (t.length === +t.length) for (var n = 0, r = t.length; r > n; n++) e.call(i, t[n], n, t); else for (var o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t);
    }
    function p(t, e, i) {
        if (t && e) {
            if (t.map && t.map === Gu) return t.map(e, i);
            for (var n = [], r = 0, o = t.length; o > r; r++) n.push(e.call(i, t[r], r, t));
            return n;
        }
    }
    function g(t, e, i, n) {
        if (t && e) {
            if (t.reduce && t.reduce === Xu) return t.reduce(e, i, n);
            for (var r = 0, o = t.length; o > r; r++) i = e.call(n, i, t[r], r, t);
            return i;
        }
    }
    function v(t, e, i) {
        if (t && e) {
            if (t.filter && t.filter === Vu) return t.filter(e, i);
            for (var n = [], r = 0, o = t.length; o > r; r++) e.call(i, t[r], r, t) && n.push(t[r]);
            return n;
        }
    }
    function m(t, e) {
        var i = Wu.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(Wu.call(arguments)));
        };
    }
    function y(t) {
        var e = Wu.call(arguments, 1);
        return function() {
            return t.apply(this, e.concat(Wu.call(arguments)));
        };
    }
    function _(t) {
        return "[object Array]" === Nu.call(t);
    }
    function x(t) {
        return "function" == typeof t;
    }
    function w(t) {
        return "[object String]" === Nu.call(t);
    }
    function b(e) {
        var i = void 0 === e ? "undefined" : t(e);
        return "function" === i || !!e && "object" === i;
    }
    function S(t) {
        return !!zu[Nu.call(t)];
    }
    function M(t) {
        return !!Ru[Nu.call(t)];
    }
    function T(e) {
        return "object" == (void 0 === e ? "undefined" : t(e)) && "number" == typeof e.nodeType && "object" == t(e.ownerDocument);
    }
    function I(t) {
        return t !== t;
    }
    function C() {
        for (var t = 0, e = arguments.length; e > t; t++) if (null != arguments[t]) return arguments[t];
    }
    function k(t, e) {
        return null != t ? t : e;
    }
    function D(t, e, i) {
        return null != t ? t : null != e ? e : i;
    }
    function A() {
        return Function.call.apply(Wu, arguments);
    }
    function P(t) {
        if ("number" == typeof t) return [ t, t, t, t ];
        var e = t.length;
        return 2 === e ? [ t[0], t[1], t[0], t[1] ] : 3 === e ? [ t[0], t[1], t[2], t[1] ] : t;
    }
    function O(t, e) {
        if (!t) throw new Error(e);
    }
    function L(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    }
    function E(t) {
        t[ju] = !0;
    }
    function B(t) {
        return t[ju];
    }
    function z(t) {
        function e(t, e) {
            i ? n.set(t, e) : n.set(e, t);
        }
        var i = _(t);
        this.data = {};
        var n = this;
        t instanceof z ? t.each(e) : t && f(t, e);
    }
    function R(t) {
        return new z(t);
    }
    function N() {}
    function F(t, e) {
        var i = new Zu(2);
        return null == t && (t = 0), null == e && (e = 0), i[0] = t, i[1] = e, i;
    }
    function H(t) {
        var e = new Zu(2);
        return e[0] = t[0], e[1] = t[1], e;
    }
    function V(t, e, i) {
        return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t;
    }
    function W(t, e, i) {
        return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t;
    }
    function G(t) {
        return Math.sqrt(X(t));
    }
    function X(t) {
        return t[0] * t[0] + t[1] * t[1];
    }
    function Y(t, e, i) {
        return t[0] = e[0] * i, t[1] = e[1] * i, t;
    }
    function U(t, e) {
        var i = G(e);
        return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t;
    }
    function q(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]));
    }
    function j(t, e, i) {
        var n = e[0], r = e[1];
        return t[0] = i[0] * n + i[2] * r + i[4], t[1] = i[1] * n + i[3] * r + i[5], t;
    }
    function Z(t, e, i) {
        return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t;
    }
    function K(t, e, i) {
        return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t;
    }
    function $() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), 
        this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this);
    }
    function Q(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        };
    }
    function J(t, e) {
        var i = t._$eventProcessor;
        return null != e && i && i.normalizeQuery && (e = i.normalizeQuery(e)), e;
    }
    function tt(t, e, i, n, r, o) {
        var a = t._$handlers;
        if ("function" == typeof i && (r = n, n = i, i = null), !n || !e) return t;
        i = J(t, i), a[e] || (a[e] = []);
        for (var s = 0; s < a[e].length; s++) if (a[e][s].h === n) return t;
        var l = {
            h: n,
            one: o,
            query: i,
            ctx: r || t,
            callAtLast: n.zrEventfulCallAtLast
        }, h = a[e].length - 1, u = a[e][h];
        return u && u.callAtLast ? a[e].splice(h, 0, l) : a[e].push(l), t;
    }
    function et(t, e, i, n, r, o) {
        var a = n + "-" + r, s = t.length;
        if (o.hasOwnProperty(a)) return o[a];
        if (1 === e) {
            var l = Math.round(Math.log((1 << s) - 1 & ~r) / tc);
            return t[i][l];
        }
        for (var h = n | 1 << i, u = i + 1; n & 1 << u; ) u++;
        for (var c = 0, d = 0, f = 0; s > d; d++) {
            var p = 1 << d;
            p & r || (c += (f % 2 ? -1 : 1) * t[i][d] * et(t, e - 1, u, h, r | p, o), f++);
        }
        return o[a] = c, c;
    }
    function it(t, e) {
        var i = [ [ t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1] ], [ 0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1] ], [ t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3] ], [ 0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3] ], [ t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5] ], [ 0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5] ], [ t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7] ], [ 0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7] ] ], n = {}, r = et(i, 8, 0, 0, 0, n);
        if (0 !== r) {
            for (var o = [], a = 0; 8 > a; a++) for (var s = 0; 8 > s; s++) null == o[s] && (o[s] = 0), 
            o[s] += ((a + s) % 2 ? -1 : 1) * et(i, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, n) / r * e[a];
            return function(t, e, i) {
                var n = e * o[6] + i * o[7] + 1;
                t[0] = (e * o[0] + i * o[1] + o[2]) / n, t[1] = (e * o[3] + i * o[4] + o[5]) / n;
            };
        }
    }
    function nt(t, e, i, n) {
        return i = i || {}, n || !Bu.canvasSupported ? rt(t, e, i) : Bu.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (i.zrX = e.layerX, 
        i.zrY = e.layerY) : null != e.offsetX ? (i.zrX = e.offsetX, i.zrY = e.offsetY) : rt(t, e, i), 
        i;
    }
    function rt(t, e, i) {
        if (t.getBoundingClientRect && Bu.domSupported) {
            var n = e.clientX, r = e.clientY;
            if ("CANVAS" === t.nodeName.toUpperCase()) {
                var o = t.getBoundingClientRect();
                return i.zrX = n - o.left, void (i.zrY = r - o.top);
            }
            var a = t[nc] || (t[nc] = {}), s = at(ot(t, a), a);
            if (s) return s(rc, n, r), i.zrX = rc[0], void (i.zrY = rc[1]);
        }
        i.zrX = i.zrY = 0;
    }
    function ot(t, e) {
        var i = e.markers;
        if (i) return i;
        i = e.markers = [];
        for (var n = [ "left", "right" ], r = [ "top", "bottom" ], o = 0; 4 > o; o++) {
            var a = document.createElement("div"), s = o % 2, l = (o >> 1) % 2;
            a.style.cssText = [ "position:absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "width:0", "height:0", n[s] + ":0", r[l] + ":0", n[1 - s] + ":auto", r[1 - l] + ":auto", "" ].join("!important;"), 
            t.appendChild(a), i.push(a);
        }
        return i;
    }
    function at(t, e) {
        for (var i = e.transformer, n = e.srcCoords, r = !0, o = [], a = [], s = 0; 4 > s; s++) {
            var l = t[s].getBoundingClientRect(), h = 2 * s, u = l.left, c = l.top;
            o.push(u, c), r &= n && u === n[h] && c === n[h + 1], a.push(t[s].offsetLeft, t[s].offsetTop);
        }
        return r ? i : (e.srcCoords = o, e.transformer = it(o, a));
    }
    function st(t, e, i) {
        if (null != (e = e || window.event).zrX) return e;
        var n = e.type;
        if (n && n.indexOf("touch") >= 0) {
            var r = "touchend" !== n ? e.targetTouches[0] : e.changedTouches[0];
            r && nt(t, r, e, i);
        } else nt(t, e, e, i), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var o = e.button;
        return null == e.which && void 0 !== o && ic.test(e.type) && (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
        e;
    }
    function lt(t, e, i) {
        ec ? t.addEventListener(e, i) : t.attachEvent("on" + e, i);
    }
    function ht(t, e, i) {
        ec ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i);
    }
    function ut(t) {
        var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
        return Math.sqrt(e * e + i * i);
    }
    function ct(t) {
        return [ (t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2 ];
    }
    function dt(t, e, i) {
        return {
            type: t,
            event: i,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: i.zrX,
            offsetY: i.zrY,
            gestureEvent: i.gestureEvent,
            pinchX: i.pinchX,
            pinchY: i.pinchY,
            pinchScale: i.pinchScale,
            wheelDelta: i.zrDelta,
            zrByTouch: i.zrByTouch,
            which: i.which,
            stop: ft
        };
    }
    function ft() {
        oc(this.event);
    }
    function pt() {}
    function gt(t, e, i) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
            for (var n, r = t; r; ) {
                if (r.clipPath && !r.clipPath.contain(e, i)) return !1;
                r.silent && (n = !0), r = r.parent;
            }
            return !n || lc;
        }
        return !1;
    }
    function vt() {
        var t = new cc(6);
        return mt(t), t;
    }
    function mt(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t;
    }
    function yt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], 
        t;
    }
    function _t(t, e, i) {
        var n = e[0] * i[0] + e[2] * i[1], r = e[1] * i[0] + e[3] * i[1], o = e[0] * i[2] + e[2] * i[3], a = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
        return t[0] = n, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t;
    }
    function xt(t, e, i) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], 
        t;
    }
    function wt(t, e, i) {
        var n = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
        return t[0] = n * u + a * h, t[1] = -n * h + a * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, 
        t[4] = u * o + h * l, t[5] = u * l - h * o, t;
    }
    function bt(t, e, i) {
        var n = i[0], r = i[1];
        return t[0] = e[0] * n, t[1] = e[1] * r, t[2] = e[2] * n, t[3] = e[3] * r, t[4] = e[4] * n, 
        t[5] = e[5] * r, t;
    }
    function St(t, e) {
        var i = e[0], n = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = i * a - o * n;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -n * l, t[3] = i * l, 
        t[4] = (n * s - a * r) * l, t[5] = (o * r - i * s) * l, t) : null;
    }
    function Mt(t) {
        return t > fc || -fc > t;
    }
    function Tt(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, 
        this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, 
        this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, 
        this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1;
    }
    function It(t) {
        return 0 > (t = Math.round(t)) ? 0 : t > 255 ? 255 : t;
    }
    function Ct(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t;
    }
    function kt(t) {
        return It(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10));
    }
    function Dt(t) {
        return Ct(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t));
    }
    function At(t, e, i) {
        return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }
    function Pt(t, e, i, n, r) {
        return t[0] = e, t[1] = i, t[2] = n, t[3] = r, t;
    }
    function Ot(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t;
    }
    function Lt(t, e) {
        Cc && Ot(Cc, e), Cc = Ic.put(t, Cc || e.slice());
    }
    function Et(t, e) {
        if (t) {
            e = e || [];
            var i = Ic.get(t);
            if (i) return Ot(e, i);
            var n = (t += "").replace(/ /g, "").toLowerCase();
            if (n in Tc) return Ot(e, Tc[n]), Lt(t, e), e;
            if ("#" !== n.charAt(0)) {
                var r = n.indexOf("("), o = n.indexOf(")");
                if (-1 !== r && o + 1 === n.length) {
                    var a = n.substr(0, r), s = n.substr(r + 1, o - (r + 1)).split(","), l = 1;
                    switch (a) {
                      case "rgba":
                        if (4 !== s.length) return void Pt(e, 0, 0, 0, 1);
                        l = Dt(s.pop());

                      case "rgb":
                        return 3 !== s.length ? void Pt(e, 0, 0, 0, 1) : (Pt(e, kt(s[0]), kt(s[1]), kt(s[2]), l), 
                        Lt(t, e), e);

                      case "hsla":
                        return 4 !== s.length ? void Pt(e, 0, 0, 0, 1) : (s[3] = Dt(s[3]), Bt(s, e), Lt(t, e), 
                        e);

                      case "hsl":
                        return 3 !== s.length ? void Pt(e, 0, 0, 0, 1) : (Bt(s, e), Lt(t, e), e);

                      default:
                        return;
                    }
                }
                Pt(e, 0, 0, 0, 1);
            } else {
                if (4 === n.length) return (h = parseInt(n.substr(1), 16)) >= 0 && 4095 >= h ? (Pt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), 
                Lt(t, e), e) : void Pt(e, 0, 0, 0, 1);
                if (7 === n.length) {
                    var h = parseInt(n.substr(1), 16);
                    return h >= 0 && 16777215 >= h ? (Pt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), 
                    Lt(t, e), e) : void Pt(e, 0, 0, 0, 1);
                }
            }
        }
    }
    function Bt(t, e) {
        var i = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = Dt(t[1]), r = Dt(t[2]), o = .5 >= r ? r * (n + 1) : r + n - r * n, a = 2 * r - o;
        return e = e || [], Pt(e, It(255 * At(a, o, i + 1 / 3)), It(255 * At(a, o, i)), It(255 * At(a, o, i - 1 / 3)), 1), 
        4 === t.length && (e[3] = t[3]), e;
    }
    function zt(t, e) {
        var i = Et(t);
        if (i) {
            for (var n = 0; 3 > n; n++) i[n] = 0 > e ? i[n] * (1 - e) | 0 : (255 - i[n]) * e + i[n] | 0, 
            i[n] > 255 ? i[n] = 255 : t[n] < 0 && (i[n] = 0);
            return Nt(i, 4 === i.length ? "rgba" : "rgb");
        }
    }
    function Rt(t) {
        var e = Et(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0;
    }
    function Nt(t, e) {
        if (t && t.length) {
            var i = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (i += "," + t[3]), e + "(" + i + ")";
        }
    }
    function Ft(t, e) {
        return t[e];
    }
    function Ht(t, e, i) {
        t[e] = i;
    }
    function Vt(t, e, i) {
        return (e - t) * i + t;
    }
    function Wt(t, e, i) {
        return i > .5 ? e : t;
    }
    function Gt(t, e, i, n, r) {
        var o = t.length;
        if (1 === r) for (s = 0; o > s; s++) n[s] = Vt(t[s], e[s], i); else for (var a = o && t[0].length, s = 0; o > s; s++) for (var l = 0; a > l; l++) n[s][l] = Vt(t[s][l], e[s][l], i);
    }
    function Xt(t, e, i) {
        var n = t.length, r = e.length;
        if (n !== r) if (n > r) t.length = r; else for (a = n; r > a; a++) t.push(1 === i ? e[a] : kc.call(e[a]));
        for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === i) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; o > s; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s]);
    }
    function Yt(t, e, i) {
        if (t === e) return !0;
        var n = t.length;
        if (n !== e.length) return !1;
        if (1 === i) {
            for (o = 0; n > o; o++) if (t[o] !== e[o]) return !1;
        } else for (var r = t[0].length, o = 0; n > o; o++) for (var a = 0; r > a; a++) if (t[o][a] !== e[o][a]) return !1;
        return !0;
    }
    function Ut(t, e, i, n, r, o, a, s, l) {
        var h = t.length;
        if (1 === l) for (c = 0; h > c; c++) s[c] = qt(t[c], e[c], i[c], n[c], r, o, a); else for (var u = t[0].length, c = 0; h > c; c++) for (var d = 0; u > d; d++) s[c][d] = qt(t[c][d], e[c][d], i[c][d], n[c][d], r, o, a);
    }
    function qt(t, e, i, n, r, o, a) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e;
    }
    function jt(t) {
        if (d(t)) {
            var e = t.length;
            if (d(t[0])) {
                for (var i = [], n = 0; e > n; n++) i.push(kc.call(t[n]));
                return i;
            }
            return kc.call(t);
        }
        return t;
    }
    function Zt(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), 
        "rgba(" + t.join(",") + ")";
    }
    function Kt(t) {
        var e = t[t.length - 1].value;
        return d(e && e[0]) ? 2 : 1;
    }
    function $t(t, e, i, n, r, o) {
        var a = t._getter, s = t._setter, l = "spline" === e, h = n.length;
        if (h) {
            var u, c = d(n[0].value), f = !1, p = !1, g = c ? Kt(n) : 0;
            n.sort(function(t, e) {
                return t.time - e.time;
            }), u = n[h - 1].time;
            for (var v = [], m = [], y = n[0].value, _ = !0, x = 0; h > x; x++) {
                v.push(n[x].time / u);
                var w = n[x].value;
                if (c && Yt(w, y, g) || !c && w === y || (_ = !1), y = w, "string" == typeof w) {
                    var b = Et(w);
                    b ? (w = b, f = !0) : p = !0;
                }
                m.push(w);
            }
            if (o || !_) {
                for (var S = m[h - 1], x = 0; h - 1 > x; x++) c ? Xt(m[x], S, g) : !isNaN(m[x]) || isNaN(S) || p || f || (m[x] = S);
                c && Xt(a(t._target, r), S, g);
                var M, T, I, C, k, D, A = 0, P = 0;
                if (f) var O = [ 0, 0, 0, 0 ];
                var L = new Tt({
                    target: t._target,
                    life: u,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function(t, e) {
                        var i;
                        if (0 > e) i = 0; else if (P > e) {
                            for (i = M = Math.min(A + 1, h - 1); i >= 0 && !(v[i] <= e); i--) ;
                            i = Math.min(i, h - 2);
                        } else {
                            for (i = A; h > i && !(v[i] > e); i++) ;
                            i = Math.min(i - 1, h - 2);
                        }
                        A = i, P = e;
                        var n = v[i + 1] - v[i];
                        if (0 !== n) if (T = (e - v[i]) / n, l) if (C = m[i], I = m[0 === i ? i : i - 1], 
                        k = m[i > h - 2 ? h - 1 : i + 1], D = m[i > h - 3 ? h - 1 : i + 2], c) Ut(I, C, k, D, T, T * T, T * T * T, a(t, r), g); else {
                            if (f) o = Ut(I, C, k, D, T, T * T, T * T * T, O, 1), o = Zt(O); else {
                                if (p) return Wt(C, k, T);
                                o = qt(I, C, k, D, T, T * T, T * T * T);
                            }
                            s(t, r, o);
                        } else if (c) Gt(m[i], m[i + 1], T, a(t, r), g); else {
                            var o;
                            if (f) Gt(m[i], m[i + 1], T, O, 1), o = Zt(O); else {
                                if (p) return Wt(m[i], m[i + 1], T);
                                o = Vt(m[i], m[i + 1], T);
                            }
                            s(t, r, o);
                        }
                    },
                    ondestroy: i
                });
                return e && "spline" !== e && (L.easing = e), L;
            }
        }
    }
    function Qt(t, e, i, n, r, o, a, s) {
        w(n) ? (o = r, r = n, n = 0) : x(r) ? (o = r, r = "linear", n = 0) : x(n) ? (o = n, 
        n = 0) : x(i) ? (o = i, i = 500) : i || (i = 500), t.stopAnimation(), Jt(t, "", t, e, i, n, s);
        var l = t.animators.slice(), h = l.length;
        h || o && o();
        for (var u = 0; u < l.length; u++) l[u].done(function() {
            --h || o && o();
        }).start(r, a);
    }
    function Jt(t, e, i, n, r, o, a) {
        var s = {}, l = 0;
        for (var h in n) n.hasOwnProperty(h) && (null != i[h] ? b(n[h]) && !d(n[h]) ? Jt(t, e ? e + "." + h : h, i[h], n[h], r, o, a) : (a ? (s[h] = i[h], 
        te(t, e, h, n[h])) : s[h] = n[h], l++) : null == n[h] || a || te(t, e, h, n[h]));
        l > 0 && t.animate(e, !1).when(null == r ? 500 : r, s).delay(o || 0);
    }
    function te(t, e, i, n) {
        if (e) {
            var r = {};
            r[e] = {}, r[e][i] = n, t.attr(r);
        } else t.attr(i, n);
    }
    function ee(t, e, i, n) {
        0 > i && (t += i, i = -i), 0 > n && (e += n, n = -n), this.x = t, this.y = e, this.width = i, 
        this.height = n;
    }
    function ie(t) {
        for (var e = 0; t >= Hc; ) e |= 1 & t, t >>= 1;
        return t + e;
    }
    function ne(t, e, i, n) {
        var r = e + 1;
        if (r === i) return 1;
        if (n(t[r++], t[e]) < 0) {
            for (;i > r && n(t[r], t[r - 1]) < 0; ) r++;
            re(t, e, r);
        } else for (;i > r && n(t[r], t[r - 1]) >= 0; ) r++;
        return r - e;
    }
    function re(t, e, i) {
        for (i--; i > e; ) {
            var n = t[e];
            t[e++] = t[i], t[i--] = n;
        }
    }
    function oe(t, e, i, n, r) {
        for (n === e && n++; i > n; n++) {
            for (var o, a = t[n], s = e, l = n; l > s; ) r(a, t[o = s + l >>> 1]) < 0 ? l = o : s = o + 1;
            var h = n - s;
            switch (h) {
              case 3:
                t[s + 3] = t[s + 2];

              case 2:
                t[s + 2] = t[s + 1];

              case 1:
                t[s + 1] = t[s];
                break;

              default:
                for (;h > 0; ) t[s + h] = t[s + h - 1], h--;
            }
            t[s] = a;
        }
    }
    function ae(t, e, i, n, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[i + r]) > 0) {
            for (s = n - r; s > l && o(t, e[i + r + l]) > 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), a += r, l += r;
        } else {
            for (s = r + 1; s > l && o(t, e[i + r - l]) <= 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h;
        }
        for (a++; l > a; ) {
            var u = a + (l - a >>> 1);
            o(t, e[i + u]) > 0 ? a = u + 1 : l = u;
        }
        return l;
    }
    function se(t, e, i, n, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[i + r]) < 0) {
            for (s = r + 1; s > l && o(t, e[i + r - l]) < 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s);
            var h = a;
            a = r - l, l = r - h;
        } else {
            for (s = n - r; s > l && o(t, e[i + r + l]) >= 0; ) a = l, 0 >= (l = 1 + (l << 1)) && (l = s);
            l > s && (l = s), a += r, l += r;
        }
        for (a++; l > a; ) {
            var u = a + (l - a >>> 1);
            o(t, e[i + u]) < 0 ? l = u : a = u + 1;
        }
        return l;
    }
    function le(t, e) {
        function i(i) {
            var s = o[i], h = a[i], u = o[i + 1], c = a[i + 1];
            a[i] = h + c, i === l - 3 && (o[i + 1] = o[i + 2], a[i + 1] = a[i + 2]), l--;
            var d = se(t[u], t, s, h, 0, e);
            s += d, 0 != (h -= d) && 0 !== (c = ae(t[s + h - 1], t, u, c, c - 1, e)) && (c >= h ? n(s, h, u, c) : r(s, h, u, c));
        }
        function n(i, n, r, o) {
            var a = 0;
            for (a = 0; n > a; a++) h[a] = t[i + a];
            var l = 0, u = r, c = i;
            if (t[c++] = t[u++], 0 != --o) {
                if (1 === n) {
                    for (a = 0; o > a; a++) t[c + a] = t[u + a];
                    return void (t[c + o] = h[l]);
                }
                for (var d, f, p, g = s; ;) {
                    d = 0, f = 0, p = !1;
                    do {
                        if (e(t[u], h[l]) < 0) {
                            if (t[c++] = t[u++], f++, d = 0, 0 == --o) {
                                p = !0;
                                break;
                            }
                        } else if (t[c++] = h[l++], d++, f = 0, 1 == --n) {
                            p = !0;
                            break;
                        }
                    } while (g > (d | f));
                    if (p) break;
                    do {
                        if (0 !== (d = se(t[u], h, l, n, 0, e))) {
                            for (a = 0; d > a; a++) t[c + a] = h[l + a];
                            if (c += d, l += d, 1 >= (n -= d)) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = t[u++], 0 == --o) {
                            p = !0;
                            break;
                        }
                        if (0 !== (f = ae(h[l], t, u, o, 0, e))) {
                            for (a = 0; f > a; a++) t[c + a] = t[u + a];
                            if (c += f, u += f, 0 === (o -= f)) {
                                p = !0;
                                break;
                            }
                        }
                        if (t[c++] = h[l++], 1 == --n) {
                            p = !0;
                            break;
                        }
                        g--;
                    } while (d >= Vc || f >= Vc);
                    if (p) break;
                    0 > g && (g = 0), g += 2;
                }
                if (1 > (s = g) && (s = 1), 1 === n) {
                    for (a = 0; o > a; a++) t[c + a] = t[u + a];
                    t[c + o] = h[l];
                } else {
                    if (0 === n) throw new Error();
                    for (a = 0; n > a; a++) t[c + a] = h[l + a];
                }
            } else for (a = 0; n > a; a++) t[c + a] = h[l + a];
        }
        function r(i, n, r, o) {
            var a = 0;
            for (a = 0; o > a; a++) h[a] = t[r + a];
            var l = i + n - 1, u = o - 1, c = r + o - 1, d = 0, f = 0;
            if (t[c--] = t[l--], 0 != --n) {
                if (1 === o) {
                    for (f = (c -= n) + 1, d = (l -= n) + 1, a = n - 1; a >= 0; a--) t[f + a] = t[d + a];
                    return void (t[c] = h[u]);
                }
                for (var p = s; ;) {
                    var g = 0, v = 0, m = !1;
                    do {
                        if (e(h[u], t[l]) < 0) {
                            if (t[c--] = t[l--], g++, v = 0, 0 == --n) {
                                m = !0;
                                break;
                            }
                        } else if (t[c--] = h[u--], v++, g = 0, 1 == --o) {
                            m = !0;
                            break;
                        }
                    } while (p > (g | v));
                    if (m) break;
                    do {
                        if (0 != (g = n - se(h[u], t, i, n, n - 1, e))) {
                            for (n -= g, f = (c -= g) + 1, d = (l -= g) + 1, a = g - 1; a >= 0; a--) t[f + a] = t[d + a];
                            if (0 === n) {
                                m = !0;
                                break;
                            }
                        }
                        if (t[c--] = h[u--], 1 == --o) {
                            m = !0;
                            break;
                        }
                        if (0 != (v = o - ae(t[l], h, 0, o, o - 1, e))) {
                            for (o -= v, f = (c -= v) + 1, d = (u -= v) + 1, a = 0; v > a; a++) t[f + a] = h[d + a];
                            if (1 >= o) {
                                m = !0;
                                break;
                            }
                        }
                        if (t[c--] = t[l--], 0 == --n) {
                            m = !0;
                            break;
                        }
                        p--;
                    } while (g >= Vc || v >= Vc);
                    if (m) break;
                    0 > p && (p = 0), p += 2;
                }
                if (1 > (s = p) && (s = 1), 1 === o) {
                    for (f = (c -= n) + 1, d = (l -= n) + 1, a = n - 1; a >= 0; a--) t[f + a] = t[d + a];
                    t[c] = h[u];
                } else {
                    if (0 === o) throw new Error();
                    for (d = c - (o - 1), a = 0; o > a; a++) t[d + a] = h[a];
                }
            } else for (d = c - (o - 1), a = 0; o > a; a++) t[d + a] = h[a];
        }
        var o, a, s = Vc, l = 0, h = [];
        o = [], a = [], this.mergeRuns = function() {
            for (;l > 1; ) {
                var t = l - 2;
                if (t >= 1 && a[t - 1] <= a[t] + a[t + 1] || t >= 2 && a[t - 2] <= a[t] + a[t - 1]) a[t - 1] < a[t + 1] && t--; else if (a[t] > a[t + 1]) break;
                i(t);
            }
        }, this.forceMergeRuns = function() {
            for (;l > 1; ) {
                var t = l - 2;
                t > 0 && a[t - 1] < a[t + 1] && t--, i(t);
            }
        }, this.pushRun = function(t, e) {
            o[l] = t, a[l] = e, l += 1;
        };
    }
    function he(t, e, i, n) {
        i || (i = 0), n || (n = t.length);
        var r = n - i;
        if (!(2 > r)) {
            var o = 0;
            if (Hc > r) return o = ne(t, i, n, e), void oe(t, i, n, i + o, e);
            var a = new le(t, e), s = ie(r);
            do {
                if (o = ne(t, i, n, e), s > o) {
                    var l = r;
                    l > s && (l = s), oe(t, i, i + l, i + o, e), o = l;
                }
                a.pushRun(i, o), a.mergeRuns(), r -= o, i += o;
            } while (0 !== r);
            a.forceMergeRuns();
        }
    }
    function ue(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel;
    }
    function ce(t, e, i) {
        var n = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y, a = null == e.y2 ? 0 : e.y2;
        return e.global || (n = n * i.width + i.x, r = r * i.width + i.x, o = o * i.height + i.y, 
        a = a * i.height + i.y), n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, 
        a = isNaN(a) ? 0 : a, t.createLinearGradient(n, o, r, a);
    }
    function de(t, e, i) {
        var n = i.width, r = i.height, o = Math.min(n, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y, l = null == e.r ? .5 : e.r;
        return e.global || (a = a * n + i.x, s = s * r + i.y, l *= o), t.createRadialGradient(a, s, 0, a, s, l);
    }
    function fe() {
        return !1;
    }
    function pe(t, e, i) {
        var n = Uu(), r = e.getWidth(), o = e.getHeight(), a = n.style;
        return a && (a.position = "absolute", a.left = 0, a.top = 0, a.width = r + "px", 
        a.height = o + "px", n.setAttribute("data-zr-dom-id", t)), n.width = r * i, n.height = o * i, 
        n;
    }
    function ge(t) {
        if ("string" == typeof t) {
            var e = ed.get(t);
            return e && e.image;
        }
        return t;
    }
    function ve(t, e, i, n, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !i) return e;
                var o = ed.get(t), a = {
                    hostEl: i,
                    cb: n,
                    cbPayload: r
                };
                return o ? (e = o.image, !ye(e) && o.pending.push(a)) : (e = new Image(), e.onload = e.onerror = me, 
                ed.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [ a ]
                }), e.src = e.__zrImageSrc = t), e;
            }
            return t;
        }
        return e;
    }
    function me() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var i = t.pending[e], n = i.cb;
            n && n(this, i.cbPayload), i.hostEl.dirty();
        }
        t.pending.length = 0;
    }
    function ye(t) {
        return t && t.width && t.height;
    }
    function _e(t, e) {
        var i = t + ":" + (e = e || ad);
        if (id[i]) return id[i];
        for (var n = (t + "").split("\n"), r = 0, o = 0, a = n.length; a > o; o++) r = Math.max(Pe(n[o], e).width, r);
        return nd > rd && (nd = 0, id = {}), nd++, id[i] = r, r;
    }
    function xe(t, e, i, n, r, o, a, s) {
        return a ? be(t, e, i, n, r, o, a, s) : we(t, e, i, n, r, o, s);
    }
    function we(t, e, i, n, r, o, a) {
        var s = Oe(t, e, r, o, a), l = _e(t, e);
        r && (l += r[1] + r[3]);
        var h = s.outerHeight, u = new ee(Se(0, l, i), Me(0, h, n), l, h);
        return u.lineHeight = s.lineHeight, u;
    }
    function be(t, e, i, n, r, o, a, s) {
        var l = Le(t, {
            rich: a,
            truncate: s,
            font: e,
            textAlign: i,
            textPadding: r,
            textLineHeight: o
        }), h = l.outerWidth, u = l.outerHeight;
        return new ee(Se(0, h, i), Me(0, u, n), h, u);
    }
    function Se(t, e, i) {
        return "right" === i ? t -= e : "center" === i && (t -= e / 2), t;
    }
    function Me(t, e, i) {
        return "middle" === i ? t -= e / 2 : "bottom" === i && (t -= e), t;
    }
    function Te(t, e, i) {
        var n = e.textPosition, r = e.textDistance, o = i.x, a = i.y, s = i.height, l = i.width, h = s / 2, u = "left", c = "top";
        switch (n) {
          case "left":
            o -= r, a += h, u = "right", c = "middle";
            break;

          case "right":
            o += r + l, a += h, c = "middle";
            break;

          case "top":
            o += l / 2, a -= r, u = "center", c = "bottom";
            break;

          case "bottom":
            o += l / 2, a += s + r, u = "center";
            break;

          case "inside":
            o += l / 2, a += h, u = "center", c = "middle";
            break;

          case "insideLeft":
            o += r, a += h, c = "middle";
            break;

          case "insideRight":
            o += l - r, a += h, u = "right", c = "middle";
            break;

          case "insideTop":
            o += l / 2, a += r, u = "center";
            break;

          case "insideBottom":
            o += l / 2, a += s - r, u = "center", c = "bottom";
            break;

          case "insideTopLeft":
            o += r, a += r;
            break;

          case "insideTopRight":
            o += l - r, a += r, u = "right";
            break;

          case "insideBottomLeft":
            o += r, a += s - r, c = "bottom";
            break;

          case "insideBottomRight":
            o += l - r, a += s - r, u = "right", c = "bottom";
        }
        return t = t || {}, t.x = o, t.y = a, t.textAlign = u, t.textVerticalAlign = c, 
        t;
    }
    function Ie(t, e, i, n, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = Ce(e, i, n, r);
        for (var a = 0, s = o.length; s > a; a++) o[a] = ke(o[a], r);
        return o.join("\n");
    }
    function Ce(t, e, i, n) {
        (n = a({}, n)).font = e;
        var i = k(i, "...");
        n.maxIterations = k(n.maxIterations, 2);
        var r = n.minChar = k(n.minChar, 0);
        n.cnCharWidth = _e("国", e);
        var o = n.ascCharWidth = _e("a", e);
        n.placeholder = k(n.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; r > l && s >= o; l++) s -= o;
        var h = _e(i, e);
        return h > s && (i = "", h = 0), s = t - h, n.ellipsis = i, n.ellipsisWidth = h, 
        n.contentWidth = s, n.containerWidth = t, n;
    }
    function ke(t, e) {
        var i = e.containerWidth, n = e.font, r = e.contentWidth;
        if (!i) return "";
        var o = _e(t, n);
        if (i >= o) return t;
        for (var a = 0; ;a++) {
            if (r >= o || a >= e.maxIterations) {
                t += e.ellipsis;
                break;
            }
            var s = 0 === a ? De(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            o = _e(t = t.substr(0, s), n);
        }
        return "" === t && (t = e.placeholder), t;
    }
    function De(t, e, i, n) {
        for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
            var s = t.charCodeAt(o);
            r += s >= 0 && 127 >= s ? i : n;
        }
        return o;
    }
    function Ae(t) {
        return _e("国", t);
    }
    function Pe(t, e) {
        return sd.measureText(t, e);
    }
    function Oe(t, e, i, n, r) {
        null != t && (t += "");
        var o = k(n, Ae(e)), a = t ? t.split("\n") : [], s = a.length * o, l = s;
        if (i && (l += i[0] + i[2]), t && r) {
            var h = r.outerHeight, u = r.outerWidth;
            if (null != h && l > h) t = "", a = []; else if (null != u) for (var c = Ce(u - (i ? i[1] + i[3] : 0), e, r.ellipsis, {
                minChar: r.minChar,
                placeholder: r.placeholder
            }), d = 0, f = a.length; f > d; d++) a[d] = ke(a[d], c);
        }
        return {
            lines: a,
            height: s,
            outerHeight: l,
            lineHeight: o
        };
    }
    function Le(t, e) {
        var i = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return i;
        for (var n, r = od.lastIndex = 0; null != (n = od.exec(t)); ) {
            var o = n.index;
            o > r && Ee(i, t.substring(r, o)), Ee(i, n[2], n[1]), r = od.lastIndex;
        }
        r < t.length && Ee(i, t.substring(r, t.length));
        var a = i.lines, s = 0, l = 0, h = [], u = e.textPadding, c = e.truncate, d = c && c.outerWidth, f = c && c.outerHeight;
        u && (null != d && (d -= u[1] + u[3]), null != f && (f -= u[0] + u[2]));
        for (A = 0; A < a.length; A++) {
            for (var p = a[A], g = 0, v = 0, m = 0; m < p.tokens.length; m++) {
                var y = (P = p.tokens[m]).styleName && e.rich[P.styleName] || {}, _ = P.textPadding = y.textPadding, x = P.font = y.font || e.font, w = P.textHeight = k(y.textHeight, Ae(x));
                if (_ && (w += _[0] + _[2]), P.height = w, P.lineHeight = D(y.textLineHeight, e.textLineHeight, w), 
                P.textAlign = y && y.textAlign || e.textAlign, P.textVerticalAlign = y && y.textVerticalAlign || "middle", 
                null != f && s + P.lineHeight > f) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                P.textWidth = _e(P.text, x);
                var b = y.textWidth, S = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1)) P.percentWidth = b, 
                h.push(P), b = 0; else {
                    if (S) {
                        b = P.textWidth;
                        var M = y.textBackgroundColor, T = M && M.image;
                        T && (T = ge(T), ye(T) && (b = Math.max(b, T.width * w / T.height)));
                    }
                    var I = _ ? _[1] + _[3] : 0;
                    b += I;
                    var C = null != d ? d - v : null;
                    null != C && b > C && (!S || I > C ? (P.text = "", P.textWidth = b = 0) : (P.text = Ie(P.text, C - I, x, c.ellipsis, {
                        minChar: c.minChar
                    }), P.textWidth = _e(P.text, x), b = P.textWidth + I));
                }
                v += P.width = b, y && (g = Math.max(g, P.lineHeight));
            }
            p.width = v, p.lineHeight = g, s += g, l = Math.max(l, v);
        }
        i.outerWidth = i.width = k(e.textWidth, l), i.outerHeight = i.height = k(e.textHeight, s), 
        u && (i.outerWidth += u[1] + u[3], i.outerHeight += u[0] + u[2]);
        for (var A = 0; A < h.length; A++) {
            var P = h[A], O = P.percentWidth;
            P.width = parseInt(O, 10) / 100 * l;
        }
        return i;
    }
    function Ee(t, e, i) {
        for (var n = "" === e, r = e.split("\n"), o = t.lines, a = 0; a < r.length; a++) {
            var s = r[a], l = {
                styleName: i,
                text: s,
                isLineHolder: !s && !n
            };
            if (a) o.push({
                tokens: [ l ]
            }); else {
                var h = (o[o.length - 1] || (o[0] = {
                    tokens: []
                })).tokens, u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l);
            }
        }
    }
    function Be(t) {
        var e = (t.fontSize || t.fontFamily) && [ t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif" ].join(" ");
        return e && L(e) || t.textFont || t.font;
    }
    function ze(t, e) {
        var i, n, r, o, a = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
        0 > l && (a += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = r = o = u : u instanceof Array ? 1 === u.length ? i = n = r = o = u[0] : 2 === u.length ? (i = r = u[0], 
        n = o = u[1]) : 3 === u.length ? (i = u[0], n = o = u[1], r = u[2]) : (i = u[0], 
        n = u[1], r = u[2], o = u[3]) : i = n = r = o = 0;
        var c;
        i + n > l && (c = i + n, i *= l / c, n *= l / c), r + o > l && (c = r + o, r *= l / c, 
        o *= l / c), n + r > h && (c = n + r, n *= h / c, r *= h / c), i + o > h && (c = i + o, 
        i *= h / c, o *= h / c), t.moveTo(a + i, s), t.lineTo(a + l - n, s), 0 !== n && t.arc(a + l - n, s + n, n, -Math.PI / 2, 0), 
        t.lineTo(a + l, s + h - r), 0 !== r && t.arc(a + l - r, s + h - r, r, 0, Math.PI / 2), 
        t.lineTo(a + o, s + h), 0 !== o && t.arc(a + o, s + h - o, o, Math.PI / 2, Math.PI), 
        t.lineTo(a, s + i), 0 !== i && t.arc(a + i, s + i, i, Math.PI, 1.5 * Math.PI);
    }
    function Re(t) {
        return Ne(t), f(t.rich, Ne), t;
    }
    function Ne(t) {
        if (t) {
            t.font = Be(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || hd[e] ? e : "left";
            var i = t.textVerticalAlign || t.textBaseline;
            "center" === i && (i = "middle"), t.textVerticalAlign = null == i || ud[i] ? i : "top", 
            t.textPadding && (t.textPadding = P(t.textPadding));
        }
    }
    function Fe(t, e, i, n, r, o) {
        n.rich ? Ve(t, e, i, n, r, o) : He(t, e, i, n, r, o);
    }
    function He(t, e, i, n, r, o) {
        var a, s = Ye(n), l = !1, h = e.__attrCachedBy === Yc.PLAIN_TEXT;
        o !== Uc ? (o && (a = o.style, l = !s && h && a), e.__attrCachedBy = s ? Yc.NONE : Yc.PLAIN_TEXT) : h && (e.__attrCachedBy = Yc.NONE);
        var u = n.font || ld;
        l && u === (a.font || ld) || (e.font = u);
        var c = t.__computedFont;
        t.__styleFont !== u && (t.__styleFont = u, c = t.__computedFont = e.font);
        var d = n.textPadding, f = n.textLineHeight, p = t.__textCotentBlock;
        (!p || t.__dirtyText) && (p = t.__textCotentBlock = Oe(i, c, d, f, n.truncate));
        var g = p.outerHeight, v = p.lines, m = p.lineHeight, y = je(fd, t, n, r), _ = y.baseX, x = y.baseY, w = y.textAlign || "left", b = y.textVerticalAlign;
        Ge(e, n, r, _, x);
        var S = Me(x, g, b), M = _, T = S;
        if (s || d) {
            var I = _e(i, c);
            d && (I += d[1] + d[3]);
            var C = Se(_, I, w);
            s && Ue(t, e, n, C, S, I, g), d && (M = Je(_, w, d), T += d[0]);
        }
        e.textAlign = w, e.textBaseline = "middle", e.globalAlpha = n.opacity || 1;
        for (N = 0; N < cd.length; N++) {
            var k = cd[N], D = k[0], A = k[1], P = n[D];
            l && P === a[D] || (e[A] = Xc(e, A, P || k[2]));
        }
        T += m / 2;
        var O = n.textStrokeWidth, L = l ? a.textStrokeWidth : null, E = !l || O !== L, B = !l || E || n.textStroke !== a.textStroke, z = Ke(n.textStroke, O), R = $e(n.textFill);
        if (z && (E && (e.lineWidth = O), B && (e.strokeStyle = z)), R && (l && n.textFill === a.textFill || (e.fillStyle = R)), 
        1 === v.length) z && e.strokeText(v[0], M, T), R && e.fillText(v[0], M, T); else for (var N = 0; N < v.length; N++) z && e.strokeText(v[N], M, T), 
        R && e.fillText(v[N], M, T), T += m;
    }
    function Ve(t, e, i, n, r, o) {
        o !== Uc && (e.__attrCachedBy = Yc.NONE);
        var a = t.__textCotentBlock;
        (!a || t.__dirtyText) && (a = t.__textCotentBlock = Le(i, n)), We(t, e, a, n, r);
    }
    function We(t, e, i, n, r) {
        var o = i.width, a = i.outerWidth, s = i.outerHeight, l = n.textPadding, h = je(fd, t, n, r), u = h.baseX, c = h.baseY, d = h.textAlign, f = h.textVerticalAlign;
        Ge(e, n, r, u, c);
        var p = Se(u, a, d), g = Me(c, s, f), v = p, m = g;
        l && (v += l[3], m += l[0]);
        var y = v + o;
        Ye(n) && Ue(t, e, n, p, g, a, s);
        for (var _ = 0; _ < i.lines.length; _++) {
            for (var x, w = i.lines[_], b = w.tokens, S = b.length, M = w.lineHeight, T = w.width, I = 0, C = v, k = y, D = S - 1; S > I && (!(x = b[I]).textAlign || "left" === x.textAlign); ) Xe(t, e, x, n, M, m, C, "left"), 
            T -= x.width, C += x.width, I++;
            for (;D >= 0 && "right" === (x = b[D]).textAlign; ) Xe(t, e, x, n, M, m, k, "right"), 
            T -= x.width, k -= x.width, D--;
            for (C += (o - (C - v) - (y - k) - T) / 2; D >= I; ) Xe(t, e, x = b[I], n, M, m, C + x.width / 2, "center"), 
            C += x.width, I++;
            m += M;
        }
    }
    function Ge(t, e, i, n, r) {
        if (i && e.textRotation) {
            var o = e.textOrigin;
            "center" === o ? (n = i.width / 2 + i.x, r = i.height / 2 + i.y) : o && (n = o[0] + i.x, 
            r = o[1] + i.y), t.translate(n, r), t.rotate(-e.textRotation), t.translate(-n, -r);
        }
    }
    function Xe(t, e, i, n, r, o, a, s) {
        var l = n.rich[i.styleName] || {};
        l.text = i.text;
        var h = i.textVerticalAlign, u = o + r / 2;
        "top" === h ? u = o + i.height / 2 : "bottom" === h && (u = o + r - i.height / 2), 
        !i.isLineHolder && Ye(l) && Ue(t, e, l, "right" === s ? a - i.width : "center" === s ? a - i.width / 2 : a, u - i.height / 2, i.width, i.height);
        var c = i.textPadding;
        c && (a = Je(a, s, c), u -= i.height / 2 - c[2] - i.textHeight / 2), Ze(e, "shadowBlur", D(l.textShadowBlur, n.textShadowBlur, 0)), 
        Ze(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), Ze(e, "shadowOffsetX", D(l.textShadowOffsetX, n.textShadowOffsetX, 0)), 
        Ze(e, "shadowOffsetY", D(l.textShadowOffsetY, n.textShadowOffsetY, 0)), Ze(e, "textAlign", s), 
        Ze(e, "textBaseline", "middle"), Ze(e, "font", i.font || ld);
        var d = Ke(l.textStroke || n.textStroke, p), f = $e(l.textFill || n.textFill), p = k(l.textStrokeWidth, n.textStrokeWidth);
        d && (Ze(e, "lineWidth", p), Ze(e, "strokeStyle", d), e.strokeText(i.text, a, u)), 
        f && (Ze(e, "fillStyle", f), e.fillText(i.text, a, u));
    }
    function Ye(t) {
        return !!(t.textBackgroundColor || t.textBorderWidth && t.textBorderColor);
    }
    function Ue(t, e, i, n, r, o, a) {
        var s = i.textBackgroundColor, l = i.textBorderWidth, h = i.textBorderColor, u = w(s);
        if (Ze(e, "shadowBlur", i.textBoxShadowBlur || 0), Ze(e, "shadowColor", i.textBoxShadowColor || "transparent"), 
        Ze(e, "shadowOffsetX", i.textBoxShadowOffsetX || 0), Ze(e, "shadowOffsetY", i.textBoxShadowOffsetY || 0), 
        u || l && h) {
            e.beginPath();
            var c = i.textBorderRadius;
            c ? ze(e, {
                x: n,
                y: r,
                width: o,
                height: a,
                r: c
            }) : e.rect(n, r, o, a), e.closePath();
        }
        if (u) if (Ze(e, "fillStyle", s), null != i.fillOpacity) {
            f = e.globalAlpha;
            e.globalAlpha = i.fillOpacity * i.opacity, e.fill(), e.globalAlpha = f;
        } else e.fill(); else if (b(s)) {
            var d = s.image;
            (d = ve(d, null, t, qe, s)) && ye(d) && e.drawImage(d, n, r, o, a);
        }
        if (l && h) if (Ze(e, "lineWidth", l), Ze(e, "strokeStyle", h), null != i.strokeOpacity) {
            var f = e.globalAlpha;
            e.globalAlpha = i.strokeOpacity * i.opacity, e.stroke(), e.globalAlpha = f;
        } else e.stroke();
    }
    function qe(t, e) {
        e.image = t;
    }
    function je(t, e, i, n) {
        var r = i.x || 0, o = i.y || 0, a = i.textAlign, s = i.textVerticalAlign;
        if (n) {
            var l = i.textPosition;
            if (l instanceof Array) r = n.x + Qe(l[0], n.width), o = n.y + Qe(l[1], n.height); else {
                var h = e && e.calculateTextPosition ? e.calculateTextPosition(dd, i, n) : Te(dd, i, n);
                r = h.x, o = h.y, a = a || h.textAlign, s = s || h.textVerticalAlign;
            }
            var u = i.textOffset;
            u && (r += u[0], o += u[1]);
        }
        return t = t || {}, t.baseX = r, t.baseY = o, t.textAlign = a, t.textVerticalAlign = s, 
        t;
    }
    function Ze(t, e, i) {
        return t[e] = Xc(t, e, i), t[e];
    }
    function Ke(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function $e(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t;
    }
    function Qe(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t;
    }
    function Je(t, e, i) {
        return "right" === e ? t - i[1] : "center" === e ? t + i[3] / 2 - i[1] / 2 : t + i[3];
    }
    function ti(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding);
    }
    function ei(t) {
        t = t || {}, Bc.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new jc(t.style, this), this._rect = null, this.__clipPaths = null;
    }
    function ii(t) {
        ei.call(this, t);
    }
    function ni(t) {
        return parseInt(t, 10);
    }
    function ri(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh);
    }
    function oi(t, e, i) {
        return md.copy(t.getBoundingRect()), t.transform && md.applyTransform(t.transform), 
        yd.width = e, yd.height = i, !md.intersect(yd);
    }
    function ai(t, e) {
        if (t === e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var i = 0; i < t.length; i++) if (t[i] !== e[i]) return !0;
        return !1;
    }
    function si(t, e) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.setTransform(e), e.beginPath(), n.buildPath(e, n.shape), e.clip(), n.restoreTransform(e);
        }
    }
    function li(t, e) {
        var i = document.createElement("div");
        return i.style.cssText = [ "position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0" ].join(";") + ";", 
        i;
    }
    function hi(t) {
        return "mousewheel" === t && Bu.browser.firefox ? "DOMMouseScroll" : t;
    }
    function ui(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function() {
            t._touching = !1;
        }, 700);
    }
    function ci(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e;
    }
    function di(t) {
        function e(t, e) {
            return function() {
                return e._touching ? void 0 : t.apply(e, arguments);
            };
        }
        f(bd, function(e) {
            t._handlers[e] = m(Td[e], t);
        }), f(Md, function(e) {
            t._handlers[e] = m(Td[e], t);
        }), f(wd, function(i) {
            t._handlers[i] = e(Td[i], t);
        });
    }
    function fi(t) {
        function e(e, i) {
            f(e, function(e) {
                lt(t, hi(e), i._handlers[e]);
            }, i);
        }
        Ju.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._handlers = {}, 
        di(this), Bu.pointerEventsSupported ? e(Md, this) : (Bu.touchEventsSupported && e(bd, this), 
        e(wd, this));
    }
    function pi(t, e) {
        return new Ad(Lu(), t, e);
    }
    function gi(t) {
        return t instanceof Array ? t : null == t ? [] : [ t ];
    }
    function vi(t, e, i) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var n = 0, r = i.length; r > n; n++) {
                var o = i[n];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o]);
            }
        }
    }
    function mi(t) {
        return !Od(t) || Ld(t) || t instanceof Date ? t : t.value;
    }
    function yi(t) {
        return Od(t) && !(t instanceof Array);
    }
    function _i(t, e) {
        e = (e || []).slice();
        var i = p(t || [], function(t) {
            return {
                exist: t
            };
        });
        return Pd(e, function(t, n) {
            if (Od(t)) {
                for (r = 0; r < i.length; r++) if (!i[r].option && null != t.id && i[r].exist.id === t.id + "") return i[r].option = t, 
                void (e[n] = null);
                for (var r = 0; r < i.length; r++) {
                    var o = i[r].exist;
                    if (!(i[r].option || null != o.id && null != t.id || null == t.name || bi(t) || bi(o) || o.name !== t.name + "")) return i[r].option = t, 
                    void (e[n] = null);
                }
            }
        }), Pd(e, function(t) {
            if (Od(t)) {
                for (var e = 0; e < i.length; e++) {
                    var n = i[e].exist;
                    if (!i[e].option && !bi(n) && null == t.id) {
                        i[e].option = t;
                        break;
                    }
                }
                e >= i.length && i.push({
                    option: t
                });
            }
        }), i;
    }
    function xi(t) {
        var e = R();
        Pd(t, function(t) {
            var i = t.exist;
            i && e.set(i.id, t);
        }), Pd(t, function(t) {
            var i = t.option;
            O(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), 
            i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {});
        }), Pd(t, function(t, i) {
            var n = t.exist, r = t.option, o = t.keyInfo;
            if (Od(r)) {
                if (o.name = null != r.name ? r.name + "" : n ? n.name : Ed + i, n) o.id = n.id; else if (null != r.id) o.id = r.id + ""; else {
                    var a = 0;
                    do {
                        o.id = "\0" + o.name + "\0" + a++;
                    } while (e.get(o.id));
                }
                e.set(o.id, t);
            }
        });
    }
    function wi(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Ed));
    }
    function bi(t) {
        return Od(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0");
    }
    function Si(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? _(e.dataIndex) ? p(e.dataIndex, function(e) {
            return t.indexOfRawIndex(e);
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? _(e.name) ? p(e.name, function(e) {
            return t.indexOfName(e);
        }) : t.indexOfName(e.name) : void 0;
    }
    function Mi() {
        var t = "__\0ec_inner_" + zd++ + "_" + Math.random().toFixed(5);
        return function(e) {
            return e[t] || (e[t] = {});
        };
    }
    function Ti(t, e, i) {
        if (w(e)) {
            var n = {};
            n[e + "Index"] = 0, e = n;
        }
        var r = i && i.defaultMainType;
        !r || Ii(e, r + "Index") || Ii(e, r + "Id") || Ii(e, r + "Name") || (e[r + "Index"] = 0);
        var o = {};
        return Pd(e, function(n, r) {
            var n = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var a = r.match(/^(\w+)(Index|Id|Name)$/) || [], s = a[1], l = (a[2] || "").toLowerCase();
                if (!(!s || !l || null == n || "index" === l && "none" === n || i && i.includeMainTypes && h(i.includeMainTypes, s) < 0)) {
                    var u = {
                        mainType: s
                    };
                    ("index" !== l || "all" !== n) && (u[l] = n);
                    var c = t.queryComponents(u);
                    o[s + "Models"] = c, o[s + "Model"] = c[0];
                }
            } else o[r] = n;
        }), o;
    }
    function Ii(t, e) {
        return t && t.hasOwnProperty(e);
    }
    function Ci(t, e, i) {
        t.setAttribute ? t.setAttribute(e, i) : t[e] = i;
    }
    function ki(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e];
    }
    function Di(t) {
        return "auto" === t ? Bu.domSupported ? "html" : "richText" : t || "html";
    }
    function Ai(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(Rd), e.main = t[0] || "", e.sub = t[1] || ""), e;
    }
    function Pi(t) {
        O(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal');
    }
    function Oi(t, e) {
        t.$constructor = t, t.extend = function(t) {
            Pu && f(e, function(e) {
                t[e] || console.warn("Method `" + e + "` should be implemented" + (t.type ? " in " + t.type : "") + ".");
            });
            var i = this, n = function() {
                t.$constructor ? t.$constructor.apply(this, arguments) : i.apply(this, arguments);
            };
            return a(n.prototype, t), n.extend = this.extend, n.superCall = Ei, n.superApply = Bi, 
            u(n, this), n.superClass = i, n;
        };
    }
    function Li(t) {
        var e = [ "__\0is_clz", Fd++, Math.random().toFixed(3) ].join("_");
        t.prototype[e] = !0, Pu && O(!t.isInstance, 'The method "is" can not be defined.'), 
        t.isInstance = function(t) {
            return !(!t || !t[e]);
        };
    }
    function Ei(t, e) {
        var i = A(arguments, 2);
        return this.superClass.prototype[e].apply(t, i);
    }
    function Bi(t, e, i) {
        return this.superClass.prototype[e].apply(t, i);
    }
    function zi(t, e) {
        function i(t) {
            var e = n[t.main];
            return e && e[Nd] || (e = n[t.main] = {}, e[Nd] = !0), e;
        }
        e = e || {};
        var n = {};
        if (t.registerClass = function(t, e) {
            return e && (Pi(e), (e = Ai(e)).sub ? e.sub !== Nd && (i(e)[e.sub] = t) : (Pu && n[e.main] && console.warn(e.main + " exists."), 
            n[e.main] = t)), t;
        }, t.getClass = function(t, e, i) {
            var r = n[t];
            if (r && r[Nd] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r;
        }, t.getClassesByMainType = function(t) {
            t = Ai(t);
            var e = [], i = n[t.main];
            return i && i[Nd] ? f(i, function(t, i) {
                i !== Nd && e.push(t);
            }) : e.push(i), e;
        }, t.hasClass = function(t) {
            return t = Ai(t), !!n[t.main];
        }, t.getAllClassMainTypes = function() {
            var t = [];
            return f(n, function(e, i) {
                t.push(i);
            }), t;
        }, t.hasSubTypes = function(t) {
            t = Ai(t);
            var e = n[t.main];
            return e && e[Nd];
        }, t.parseClassType = Ai, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function(e) {
                var i = r.call(this, e);
                return t.registerClass(i, e.type);
            });
        }
        return t;
    }
    function Ri(t) {
        return t > -qd && qd > t;
    }
    function Ni(t) {
        return t > qd || -qd > t;
    }
    function Fi(t, e, i, n, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * n + 3 * o * i);
    }
    function Hi(t, e, i, n, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (i - e) * r) * o + (n - i) * r * r);
    }
    function Vi(t, e, i, n, r, o) {
        var a = n + 3 * (e - i) - t, s = 3 * (i - 2 * e + t), l = 3 * (e - t), h = t - r, u = s * s - 3 * a * l, c = s * l - 9 * a * h, d = l * l - 3 * s * h, f = 0;
        if (Ri(u) && Ri(c)) Ri(s) ? o[0] = 0 : (M = -l / s) >= 0 && 1 >= M && (o[f++] = M); else {
            var p = c * c - 4 * u * d;
            if (Ri(p)) {
                var g = c / u, v = -g / 2;
                (M = -s / a + g) >= 0 && 1 >= M && (o[f++] = M), v >= 0 && 1 >= v && (o[f++] = v);
            } else if (p > 0) {
                var m = Ud(p), y = u * s + 1.5 * a * (-c + m), _ = u * s + 1.5 * a * (-c - m);
                (M = (-s - ((y = 0 > y ? -Yd(-y, Kd) : Yd(y, Kd)) + (_ = 0 > _ ? -Yd(-_, Kd) : Yd(_, Kd)))) / (3 * a)) >= 0 && 1 >= M && (o[f++] = M);
            } else {
                var x = (2 * u * s - 3 * a * c) / (2 * Ud(u * u * u)), w = Math.acos(x) / 3, b = Ud(u), S = Math.cos(w), M = (-s - 2 * b * S) / (3 * a), v = (-s + b * (S + Zd * Math.sin(w))) / (3 * a), T = (-s + b * (S - Zd * Math.sin(w))) / (3 * a);
                M >= 0 && 1 >= M && (o[f++] = M), v >= 0 && 1 >= v && (o[f++] = v), T >= 0 && 1 >= T && (o[f++] = T);
            }
        }
        return f;
    }
    function Wi(t, e, i, n, r) {
        var o = 6 * i - 12 * e + 6 * t, a = 9 * e + 3 * n - 3 * t - 9 * i, s = 3 * e - 3 * t, l = 0;
        if (Ri(a)) Ni(o) && (c = -s / o) >= 0 && 1 >= c && (r[l++] = c); else {
            var h = o * o - 4 * a * s;
            if (Ri(h)) r[0] = -o / (2 * a); else if (h > 0) {
                var u = Ud(h), c = (-o + u) / (2 * a), d = (-o - u) / (2 * a);
                c >= 0 && 1 >= c && (r[l++] = c), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function Gi(t, e, i, n, r, o) {
        var a = (e - t) * r + t, s = (i - e) * r + e, l = (n - i) * r + i, h = (s - a) * r + a, u = (l - s) * r + s, c = (u - h) * r + h;
        o[0] = t, o[1] = a, o[2] = h, o[3] = c, o[4] = c, o[5] = u, o[6] = l, o[7] = n;
    }
    function Xi(t, e, i, n, r, o, a, s, l, h, u) {
        var c, d, f, p, g, v = .005, m = 1 / 0;
        $d[0] = l, $d[1] = h;
        for (var y = 0; 1 > y; y += .05) Qd[0] = Fi(t, i, r, a, y), Qd[1] = Fi(e, n, o, s, y), 
        m > (p = $u($d, Qd)) && (c = y, m = p);
        m = 1 / 0;
        for (var _ = 0; 32 > _ && !(jd > v); _++) d = c - v, f = c + v, Qd[0] = Fi(t, i, r, a, d), 
        Qd[1] = Fi(e, n, o, s, d), p = $u(Qd, $d), d >= 0 && m > p ? (c = d, m = p) : (Jd[0] = Fi(t, i, r, a, f), 
        Jd[1] = Fi(e, n, o, s, f), g = $u(Jd, $d), 1 >= f && m > g ? (c = f, m = g) : v *= .5);
        return u && (u[0] = Fi(t, i, r, a, c), u[1] = Fi(e, n, o, s, c)), Ud(m);
    }
    function Yi(t, e, i, n) {
        var r = 1 - n;
        return r * (r * t + 2 * n * e) + n * n * i;
    }
    function Ui(t, e, i, n) {
        return 2 * ((1 - n) * (e - t) + n * (i - e));
    }
    function qi(t, e, i, n, r) {
        var o = t - 2 * e + i, a = 2 * (e - t), s = t - n, l = 0;
        if (Ri(o)) Ni(a) && (c = -s / a) >= 0 && 1 >= c && (r[l++] = c); else {
            var h = a * a - 4 * o * s;
            if (Ri(h)) (c = -a / (2 * o)) >= 0 && 1 >= c && (r[l++] = c); else if (h > 0) {
                var u = Ud(h), c = (-a + u) / (2 * o), d = (-a - u) / (2 * o);
                c >= 0 && 1 >= c && (r[l++] = c), d >= 0 && 1 >= d && (r[l++] = d);
            }
        }
        return l;
    }
    function ji(t, e, i) {
        var n = t + i - 2 * e;
        return 0 === n ? .5 : (t - e) / n;
    }
    function Zi(t, e, i, n, r) {
        var o = (e - t) * n + t, a = (i - e) * n + e, s = (a - o) * n + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = i;
    }
    function Ki(t, e, i, n, r, o, a, s, l) {
        var h, u = .005, c = 1 / 0;
        $d[0] = a, $d[1] = s;
        for (var d = 0; 1 > d; d += .05) Qd[0] = Yi(t, i, r, d), Qd[1] = Yi(e, n, o, d), 
        c > (v = $u($d, Qd)) && (h = d, c = v);
        c = 1 / 0;
        for (var f = 0; 32 > f && !(jd > u); f++) {
            var p = h - u, g = h + u;
            Qd[0] = Yi(t, i, r, p), Qd[1] = Yi(e, n, o, p);
            var v = $u(Qd, $d);
            if (p >= 0 && c > v) h = p, c = v; else {
                Jd[0] = Yi(t, i, r, g), Jd[1] = Yi(e, n, o, g);
                var m = $u(Jd, $d);
                1 >= g && c > m ? (h = g, c = m) : u *= .5;
            }
        }
        return l && (l[0] = Yi(t, i, r, h), l[1] = Yi(e, n, o, h)), Ud(c);
    }
    function $i(t, e, i, n, r, o) {
        r[0] = tf(t, i), r[1] = tf(e, n), o[0] = ef(t, i), o[1] = ef(e, n);
    }
    function Qi(t, e, i, n, r, o, a, s, l, h) {
        var u, c = Wi, d = Fi, f = c(t, i, r, a, hf);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; f > u; u++) {
            var p = d(t, i, r, a, hf[u]);
            l[0] = tf(p, l[0]), h[0] = ef(p, h[0]);
        }
        for (f = c(e, n, o, s, uf), u = 0; f > u; u++) {
            var g = d(e, n, o, s, uf[u]);
            l[1] = tf(g, l[1]), h[1] = ef(g, h[1]);
        }
        l[0] = tf(t, l[0]), h[0] = ef(t, h[0]), l[0] = tf(a, l[0]), h[0] = ef(a, h[0]), 
        l[1] = tf(e, l[1]), h[1] = ef(e, h[1]), l[1] = tf(s, l[1]), h[1] = ef(s, h[1]);
    }
    function Ji(t, e, i, n, r, o, a, s) {
        var l = ji, h = Yi, u = ef(tf(l(t, i, r), 1), 0), c = ef(tf(l(e, n, o), 1), 0), d = h(t, i, r, u), f = h(e, n, o, c);
        a[0] = tf(t, r, d), a[1] = tf(e, o, f), s[0] = ef(t, r, d), s[1] = ef(e, o, f);
    }
    function tn(t, e, i, n, r, o, a, s, l) {
        var h = Z, u = K, c = Math.abs(r - o);
        if (1e-4 > c % of && c > 1e-4) return s[0] = t - i, s[1] = e - n, l[0] = t + i, 
        void (l[1] = e + n);
        if (af[0] = rf(r) * i + t, af[1] = nf(r) * n + e, sf[0] = rf(o) * i + t, sf[1] = nf(o) * n + e, 
        h(s, af, sf), u(l, af, sf), 0 > (r %= of) && (r += of), 0 > (o %= of) && (o += of), 
        r > o && !a ? o += of : o > r && a && (r += of), a) {
            var d = o;
            o = r, r = d;
        }
        for (var f = 0; o > f; f += Math.PI / 2) f > r && (lf[0] = rf(f) * i + t, lf[1] = nf(f) * n + e, 
        h(s, lf, s), u(l, lf, l));
    }
    function en(t, e, i, n, r, o, a) {
        if (0 === r) return !1;
        var s = r, l = 0, h = t;
        if (a > e + s && a > n + s || e - s > a && n - s > a || o > t + s && o > i + s || t - s > o && i - s > o) return !1;
        if (t === i) return Math.abs(o - t) <= s / 2;
        var u = (l = (e - n) / (t - i)) * o - a + (h = (t * n - i * e) / (t - i));
        return s / 2 * s / 2 >= u * u / (l * l + 1);
    }
    function nn(t, e, i, n, r, o, a, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        return !(u > e + c && u > n + c && u > o + c && u > s + c || e - c > u && n - c > u && o - c > u && s - c > u || h > t + c && h > i + c && h > r + c && h > a + c || t - c > h && i - c > h && r - c > h && a - c > h) && c / 2 >= Xi(t, e, i, n, r, o, a, s, h, u, null);
    }
    function rn(t, e, i, n, r, o, a, s, l) {
        if (0 === a) return !1;
        var h = a;
        return !(l > e + h && l > n + h && l > o + h || e - h > l && n - h > l && o - h > l || s > t + h && s > i + h && s > r + h || t - h > s && i - h > s && r - h > s) && h / 2 >= Ki(t, e, i, n, r, o, s, l, null);
    }
    function on(t) {
        return 0 > (t %= Mf) && (t += Mf), t;
    }
    function an(t, e, i, n, r, o, a, s, l) {
        if (0 === a) return !1;
        var h = a;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > i || i > u + h) return !1;
        if (Math.abs(n - r) % Tf < 1e-4) return !0;
        if (o) {
            var c = n;
            n = on(r), r = on(c);
        } else n = on(n), r = on(r);
        n > r && (r += Tf);
        var d = Math.atan2(l, s);
        return 0 > d && (d += Tf), d >= n && r >= d || d + Tf >= n && r >= d + Tf;
    }
    function sn(t, e, i, n, r, o) {
        if (o > e && o > n || e > o && n > o) return 0;
        if (n === e) return 0;
        var a = e > n ? 1 : -1, s = (o - e) / (n - e);
        (1 === s || 0 === s) && (a = e > n ? .5 : -.5);
        var l = s * (i - t) + t;
        return l === r ? 1 / 0 : l > r ? a : 0;
    }
    function ln(t, e) {
        return Math.abs(t - e) < kf;
    }
    function hn() {
        var t = Af[0];
        Af[0] = Af[1], Af[1] = t;
    }
    function un(t, e, i, n, r, o, a, s, l, h) {
        if (h > e && h > n && h > o && h > s || e > h && n > h && o > h && s > h) return 0;
        var u = Vi(e, n, o, s, h, Df);
        if (0 === u) return 0;
        for (var c, d, f = 0, p = -1, g = 0; u > g; g++) {
            var v = Df[g], m = 0 === v || 1 === v ? .5 : 1;
            l > Fi(t, i, r, a, v) || (0 > p && (p = Wi(e, n, o, s, Af), Af[1] < Af[0] && p > 1 && hn(), 
            c = Fi(e, n, o, s, Af[0]), p > 1 && (d = Fi(e, n, o, s, Af[1]))), f += 2 === p ? v < Af[0] ? e > c ? m : -m : v < Af[1] ? c > d ? m : -m : d > s ? m : -m : v < Af[0] ? e > c ? m : -m : c > s ? m : -m);
        }
        return f;
    }
    function cn(t, e, i, n, r, o, a, s) {
        if (s > e && s > n && s > o || e > s && n > s && o > s) return 0;
        var l = qi(e, n, o, s, Df);
        if (0 === l) return 0;
        var h = ji(e, n, o);
        if (h >= 0 && 1 >= h) {
            for (var u = 0, c = Yi(e, n, o, h), d = 0; l > d; d++) {
                f = 0 === Df[d] || 1 === Df[d] ? .5 : 1;
                a > (p = Yi(t, i, r, Df[d])) || (u += Df[d] < h ? e > c ? f : -f : c > o ? f : -f);
            }
            return u;
        }
        var f = 0 === Df[0] || 1 === Df[0] ? .5 : 1, p = Yi(t, i, r, Df[0]);
        return a > p ? 0 : e > o ? f : -f;
    }
    function dn(t, e, i, n, r, o, a, s) {
        if ((s -= e) > i || -i > s) return 0;
        h = Math.sqrt(i * i - s * s);
        Df[0] = -h, Df[1] = h;
        var l = Math.abs(n - r);
        if (1e-4 > l) return 0;
        if (1e-4 > l % Cf) {
            n = 0, r = Cf;
            p = o ? 1 : -1;
            return a >= Df[0] + t && a <= Df[1] + t ? p : 0;
        }
        if (o) {
            var h = n;
            n = on(r), r = on(h);
        } else n = on(n), r = on(r);
        n > r && (r += Cf);
        for (var u = 0, c = 0; 2 > c; c++) {
            var d = Df[c];
            if (d + t > a) {
                var f = Math.atan2(s, d), p = o ? 1 : -1;
                0 > f && (f = Cf + f), (f >= n && r >= f || f + Cf >= n && r >= f + Cf) && (f > Math.PI / 2 && f < 1.5 * Math.PI && (p = -p), 
                u += p);
            }
        }
        return u;
    }
    function fn(t, e, i, n, r) {
        for (var o = 0, a = 0, s = 0, l = 0, h = 0, u = 0; u < t.length; ) {
            var c = t[u++];
            switch (c === If.M && u > 1 && (i || (o += sn(a, s, l, h, n, r))), 1 === u && (a = t[u], 
            s = t[u + 1], l = a, h = s), c) {
              case If.M:
                a = l = t[u++], s = h = t[u++];
                break;

              case If.L:
                if (i) {
                    if (en(a, s, t[u], t[u + 1], e, n, r)) return !0;
                } else o += sn(a, s, t[u], t[u + 1], n, r) || 0;
                a = t[u++], s = t[u++];
                break;

              case If.C:
                if (i) {
                    if (nn(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
                } else o += un(a, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                a = t[u++], s = t[u++];
                break;

              case If.Q:
                if (i) {
                    if (rn(a, s, t[u++], t[u++], t[u], t[u + 1], e, n, r)) return !0;
                } else o += cn(a, s, t[u++], t[u++], t[u], t[u + 1], n, r) || 0;
                a = t[u++], s = t[u++];
                break;

              case If.A:
                var d = t[u++], f = t[u++], p = t[u++], g = t[u++], v = t[u++], m = t[u++];
                u += 1;
                var y = 1 - t[u++], _ = Math.cos(v) * p + d, x = Math.sin(v) * g + f;
                u > 1 ? o += sn(a, s, _, x, n, r) : (l = _, h = x);
                var w = (n - d) * g / p + d;
                if (i) {
                    if (an(d, f, g, v, v + m, y, e, w, r)) return !0;
                } else o += dn(d, f, g, v, v + m, y, w, r);
                a = Math.cos(v + m) * p + d, s = Math.sin(v + m) * g + f;
                break;

              case If.R:
                l = a = t[u++], h = s = t[u++];
                var _ = l + t[u++], x = h + t[u++];
                if (i) {
                    if (en(l, h, _, h, e, n, r) || en(_, h, _, x, e, n, r) || en(_, x, l, x, e, n, r) || en(l, x, l, h, e, n, r)) return !0;
                } else o += sn(_, h, _, x, n, r), o += sn(l, x, l, h, n, r);
                break;

              case If.Z:
                if (i) {
                    if (en(a, s, l, h, e, n, r)) return !0;
                } else o += sn(a, s, l, h, n, r);
                a = l, s = h;
            }
        }
        return i || ln(s, h) || (o += sn(a, s, l, h, n, r) || 0), 0 !== o;
    }
    function pn(t, e, i) {
        return fn(t, 0, !1, e, i);
    }
    function gn(t, e, i, n) {
        return fn(t, e, !0, i, n);
    }
    function vn(t) {
        ei.call(this, t), this.path = null;
    }
    function mn(t, e, i, n, r, o, a, s, l, h, u) {
        var c = l * (Wf / 180), d = Vf(c) * (t - i) / 2 + Hf(c) * (e - n) / 2, f = -1 * Hf(c) * (t - i) / 2 + Vf(c) * (e - n) / 2, p = d * d / (a * a) + f * f / (s * s);
        p > 1 && (a *= Ff(p), s *= Ff(p));
        var g = (r === o ? -1 : 1) * Ff((a * a * s * s - a * a * f * f - s * s * d * d) / (a * a * f * f + s * s * d * d)) || 0, v = g * a * f / s, m = g * -s * d / a, y = (t + i) / 2 + Vf(c) * v - Hf(c) * m, _ = (e + n) / 2 + Hf(c) * v + Vf(c) * m, x = Yf([ 1, 0 ], [ (d - v) / a, (f - m) / s ]), w = [ (d - v) / a, (f - m) / s ], b = [ (-1 * d - v) / a, (-1 * f - m) / s ], S = Yf(w, b);
        Xf(w, b) <= -1 && (S = Wf), Xf(w, b) >= 1 && (S = 0), 0 === o && S > 0 && (S -= 2 * Wf), 
        1 === o && 0 > S && (S += 2 * Wf), u.addData(h, y, _, a, s, x, S, c, o);
    }
    function yn(t) {
        if (!t) return new Sf();
        for (var e, i = 0, n = 0, r = i, o = n, a = new Sf(), s = Sf.CMD, l = t.match(Uf), h = 0; h < l.length; h++) {
            for (var u, c = l[h], d = c.charAt(0), f = c.match(qf) || [], p = f.length, g = 0; p > g; g++) f[g] = parseFloat(f[g]);
            for (var v = 0; p > v; ) {
                var m, y, _, x, w, b, S, M = i, T = n;
                switch (d) {
                  case "l":
                    i += f[v++], n += f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "L":
                    i = f[v++], n = f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "m":
                    i += f[v++], n += f[v++], u = s.M, a.addData(u, i, n), r = i, o = n, d = "l";
                    break;

                  case "M":
                    i = f[v++], n = f[v++], u = s.M, a.addData(u, i, n), r = i, o = n, d = "L";
                    break;

                  case "h":
                    i += f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "H":
                    i = f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "v":
                    n += f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "V":
                    n = f[v++], u = s.L, a.addData(u, i, n);
                    break;

                  case "C":
                    u = s.C, a.addData(u, f[v++], f[v++], f[v++], f[v++], f[v++], f[v++]), i = f[v - 2], 
                    n = f[v - 1];
                    break;

                  case "c":
                    u = s.C, a.addData(u, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n, f[v++] + i, f[v++] + n), 
                    i += f[v - 2], n += f[v - 1];
                    break;

                  case "S":
                    m = i, y = n;
                    var I = a.len(), C = a.data;
                    e === s.C && (m += i - C[I - 4], y += n - C[I - 3]), u = s.C, M = f[v++], T = f[v++], 
                    i = f[v++], n = f[v++], a.addData(u, m, y, M, T, i, n);
                    break;

                  case "s":
                    m = i, y = n;
                    var I = a.len(), C = a.data;
                    e === s.C && (m += i - C[I - 4], y += n - C[I - 3]), u = s.C, M = i + f[v++], T = n + f[v++], 
                    i += f[v++], n += f[v++], a.addData(u, m, y, M, T, i, n);
                    break;

                  case "Q":
                    M = f[v++], T = f[v++], i = f[v++], n = f[v++], u = s.Q, a.addData(u, M, T, i, n);
                    break;

                  case "q":
                    M = f[v++] + i, T = f[v++] + n, i += f[v++], n += f[v++], u = s.Q, a.addData(u, M, T, i, n);
                    break;

                  case "T":
                    m = i, y = n;
                    var I = a.len(), C = a.data;
                    e === s.Q && (m += i - C[I - 4], y += n - C[I - 3]), i = f[v++], n = f[v++], u = s.Q, 
                    a.addData(u, m, y, i, n);
                    break;

                  case "t":
                    m = i, y = n;
                    var I = a.len(), C = a.data;
                    e === s.Q && (m += i - C[I - 4], y += n - C[I - 3]), i += f[v++], n += f[v++], u = s.Q, 
                    a.addData(u, m, y, i, n);
                    break;

                  case "A":
                    _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], mn(M = i, T = n, i = f[v++], n = f[v++], b, S, _, x, w, u = s.A, a);
                    break;

                  case "a":
                    _ = f[v++], x = f[v++], w = f[v++], b = f[v++], S = f[v++], mn(M = i, T = n, i += f[v++], n += f[v++], b, S, _, x, w, u = s.A, a);
                }
            }
            ("z" === d || "Z" === d) && (u = s.Z, a.addData(u), i = r, n = o), e = u;
        }
        return a.toStatic(), a;
    }
    function _n(t, e) {
        var i = yn(t);
        return e = e || {}, e.buildPath = function(t) {
            if (t.setData) t.setData(i.data), (e = t.getContext()) && t.rebuildPath(e); else {
                var e = t;
                i.rebuildPath(e);
            }
        }, e.applyTransform = function(t) {
            Nf(i, t), this.dirty(!0);
        }, e;
    }
    function xn(t, e) {
        return new vn(_n(t, e));
    }
    function wn(t, e) {
        return vn.extend(_n(t, e));
    }
    function bn(t, e, i, n, r, o, a) {
        var s = .5 * (i - t), l = .5 * (n - e);
        return (2 * (e - i) + s + l) * a + (-3 * (e - i) - 2 * s - l) * o + s * r + e;
    }
    function Sn(t, e, i) {
        var n = e.points, r = e.smooth;
        if (n && n.length >= 2) {
            if (r && "spline" !== r) {
                var o = ep(n, r, i, e.smoothConstraint);
                t.moveTo(n[0][0], n[0][1]);
                for (var a = n.length, s = 0; (i ? a : a - 1) > s; s++) {
                    var l = o[2 * s], h = o[2 * s + 1], u = n[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1]);
                }
            } else {
                "spline" === r && (n = tp(n, i)), t.moveTo(n[0][0], n[0][1]);
                for (var s = 1, c = n.length; c > s; s++) t.lineTo(n[s][0], n[s][1]);
            }
            i && t.closePath();
        }
    }
    function Mn(t, e, i) {
        var n = i && i.lineWidth;
        if (e && n) {
            var r = e.x1, o = e.x2, a = e.y1, s = e.y2;
            rp(2 * r) === rp(2 * o) ? t.x1 = t.x2 = In(r, n, !0) : (t.x1 = r, t.x2 = o), rp(2 * a) === rp(2 * s) ? t.y1 = t.y2 = In(a, n, !0) : (t.y1 = a, 
            t.y2 = s);
        }
    }
    function Tn(t, e, i) {
        var n = i && i.lineWidth;
        if (e && n) {
            var r = e.x, o = e.y, a = e.width, s = e.height;
            t.x = In(r, n, !0), t.y = In(o, n, !0), t.width = Math.max(In(r + a, n, !1) - t.x, 0 === a ? 0 : 1), 
            t.height = Math.max(In(o + s, n, !1) - t.y, 0 === s ? 0 : 1);
        }
    }
    function In(t, e, i) {
        var n = rp(2 * t);
        return (n + rp(e)) % 2 == 0 ? n / 2 : (n + (i ? 1 : -1)) / 2;
    }
    function Cn(t, e, i) {
        var n = t.cpx2, r = t.cpy2;
        return null === n || null === r ? [ (i ? Hi : Fi)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? Hi : Fi)(t.y1, t.cpy1, t.cpy2, t.y2, e) ] : [ (i ? Ui : Yi)(t.x1, t.cpx1, t.x2, e), (i ? Ui : Yi)(t.y1, t.cpy1, t.y2, e) ];
    }
    function kn(t) {
        ei.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, 
        this.notClear = !0;
    }
    function Dn(t) {
        return vn.extend(t);
    }
    function An(t, e, i, n) {
        var r = xn(t, e);
        return i && ("center" === n && (i = On(i, r.getBoundingRect())), Ln(r, i)), r;
    }
    function Pn(t, e, i) {
        var n = new ii({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function(t) {
                if ("center" === i) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    n.setStyle(On(e, r));
                }
            }
        });
        return n;
    }
    function On(t, e) {
        var i, n = e.width / e.height, r = t.height * n;
        return r <= t.width ? i = t.height : (r = t.width, i = r / n), {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - i / 2,
            width: r,
            height: i
        };
    }
    function Ln(t, e) {
        if (t.applyTransform) {
            var i = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(i);
        }
    }
    function En(t) {
        return null != t && "none" !== t;
    }
    function Bn(t) {
        if ("string" != typeof t) return t;
        var e = Cp.get(t);
        return e || (e = zt(t, -.1), 1e4 > kp && (Cp.set(t, e), kp++)), e;
    }
    function zn(t) {
        if (t.__hoverStlDirty) {
            t.__hoverStlDirty = !1;
            var e = t.__hoverStl;
            if (!e) return void (t.__cachedNormalStl = t.__cachedNormalZ2 = null);
            var i = t.__cachedNormalStl = {};
            t.__cachedNormalZ2 = t.z2;
            var n = t.style;
            for (var r in e) null != e[r] && (i[r] = n[r]);
            i.fill = n.fill, i.stroke = n.stroke;
        }
    }
    function Rn(t) {
        var e = t.__hoverStl;
        if (e && !t.__highlighted) {
            var i = t.useHoverLayer;
            t.__highlighted = i ? "layer" : "plain";
            var n = t.__zr;
            if (!(t.isGroup || !n && i)) {
                var r = t, o = t.style;
                i && (r = n.addHover(t), o = r.style), rr(o), i || zn(r), o.extendFrom(e), Nn(o, e, "fill"), 
                Nn(o, e, "stroke"), nr(o), i || (t.dirty(!1), t.z2 += xp);
            }
        }
    }
    function Nn(t, e, i) {
        !En(e[i]) && En(t[i]) && (t[i] = Bn(t[i]));
    }
    function Fn(t) {
        var e = t.__highlighted;
        if (e && (t.__highlighted = !1, !t.isGroup)) if ("layer" === e) t.__zr && t.__zr.removeHover(t); else {
            var i = t.style, n = t.__cachedNormalStl;
            n && (rr(i), t.setStyle(n), nr(i));
            var r = t.__cachedNormalZ2;
            null != r && t.z2 - r === xp && (t.z2 = r);
        }
    }
    function Hn(t, e, i) {
        var n, r = Sp, o = Sp;
        t.__highlighted && (r = bp, n = !0), e(t, i), t.__highlighted && (o = bp, n = !0), 
        t.isGroup && t.traverse(function(t) {
            !t.isGroup && e(t, i);
        }), n && t.__highDownOnUpdate && t.__highDownOnUpdate(r, o);
    }
    function Vn(t, e) {
        e = t.__hoverStl = !1 !== e && (t.hoverStyle || e || {}), t.__hoverStlDirty = !0, 
        t.__highlighted && (t.__cachedNormalStl = null, Fn(t), Rn(t));
    }
    function Wn(t) {
        !Un(this, t) && !this.__highByOuter && Hn(this, Rn);
    }
    function Gn(t) {
        !Un(this, t) && !this.__highByOuter && Hn(this, Fn);
    }
    function Xn(t) {
        this.__highByOuter |= 1 << (t || 0), Hn(this, Rn);
    }
    function Yn(t) {
        !(this.__highByOuter &= ~(1 << (t || 0))) && Hn(this, Fn);
    }
    function Un(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch;
    }
    function qn(t, e) {
        jn(t, !0), Hn(t, Vn, e);
    }
    function jn(t, e) {
        var i = !1 === e;
        if (t.__highDownSilentOnTouch = t.highDownSilentOnTouch, t.__highDownOnUpdate = t.highDownOnUpdate, 
        !i || t.__highDownDispatcher) {
            var n = i ? "off" : "on";
            t[n]("mouseover", Wn)[n]("mouseout", Gn), t[n]("emphasis", Xn)[n]("normal", Yn), 
            t.__highByOuter = t.__highByOuter || 0, t.__highDownDispatcher = !i;
        }
    }
    function Zn(t) {
        return !(!t || !t.__highDownDispatcher);
    }
    function Kn(t) {
        var e = Tp[t];
        return null == e && 32 >= Mp && (e = Tp[t] = Mp++), e;
    }
    function $n(t, e, i, n, r, o, a) {
        var s, l = (r = r || _p).labelFetcher, h = r.labelDataIndex, u = r.labelDimIndex, c = i.getShallow("show"), d = n.getShallow("show");
        (c || d) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = x(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var f = c ? s : null, p = d ? k(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        (null != f || null != p) && (Qn(t, i, o, r), Qn(e, n, a, r, !0)), t.text = f, e.text = p;
    }
    function Qn(t, e, i, n, r) {
        return Jn(t, e, n, r), i && a(t, i), t;
    }
    function Jn(t, e, i, n) {
        if ((i = i || _p).isRectText) {
            var r = e.getShallow("position") || (n ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var o = e.getShallow("rotate");
            null != o && (o *= Math.PI / 180), t.textRotation = o, t.textDistance = k(e.getShallow("distance"), n ? null : 5);
        }
        var a, s = e.ecModel, l = s && s.option.textStyle, h = tr(e);
        if (h) {
            a = {};
            for (var u in h) if (h.hasOwnProperty(u)) {
                var c = e.getModel([ "rich", u ]);
                er(a[u] = {}, c, l, i, n);
            }
        }
        return t.rich = a, er(t, e, l, i, n, !0), i.forceRich && !i.textStyle && (i.textStyle = {}), 
        t;
    }
    function tr(t) {
        for (var e; t && t !== t.ecModel; ) {
            var i = (t.option || _p).rich;
            if (i) {
                e = e || {};
                for (var n in i) i.hasOwnProperty(n) && (e[n] = 1);
            }
            t = t.parentModel;
        }
        return e;
    }
    function er(t, e, i, n, r, o) {
        i = !r && i || _p, t.textFill = ir(e.getShallow("color"), n) || i.color, t.textStroke = ir(e.getShallow("textBorderColor"), n) || i.textBorderColor, 
        t.textStrokeWidth = k(e.getShallow("textBorderWidth"), i.textBorderWidth), r || (o && (t.insideRollbackOpt = n, 
        nr(t)), null == t.textFill && (t.textFill = n.autoColor)), t.fontStyle = e.getShallow("fontStyle") || i.fontStyle, 
        t.fontWeight = e.getShallow("fontWeight") || i.fontWeight, t.fontSize = e.getShallow("fontSize") || i.fontSize, 
        t.fontFamily = e.getShallow("fontFamily") || i.fontFamily, t.textAlign = e.getShallow("align"), 
        t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), 
        t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), 
        t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), o && n.disableBox || (t.textBackgroundColor = ir(e.getShallow("backgroundColor"), n), 
        t.textPadding = e.getShallow("padding"), t.textBorderColor = ir(e.getShallow("borderColor"), n), 
        t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), 
        t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), 
        t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), 
        t.textShadowColor = e.getShallow("textShadowColor") || i.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || i.textShadowBlur, 
        t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || i.textShadowOffsetX, 
        t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || i.textShadowOffsetY;
    }
    function ir(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null;
    }
    function nr(t) {
        var e, i = t.textPosition, n = t.insideRollbackOpt;
        if (n && null == t.textFill) {
            var r = n.autoColor, o = n.isRectText, a = n.useInsideStyle, s = !1 !== a && (!0 === a || o && i && "string" == typeof i && i.indexOf("inside") >= 0), l = !s && null != r;
            (s || l) && (e = {
                textFill: t.textFill,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }), s && (t.textFill = "#fff", null == t.textStroke && (t.textStroke = r, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), 
            l && (t.textFill = r);
        }
        t.insideRollback = e;
    }
    function rr(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth, 
        t.insideRollback = null);
    }
    function or(t, e) {
        var i = e || e.getModel("textStyle");
        return L([ t.fontStyle || i && i.getShallow("fontStyle") || "", t.fontWeight || i && i.getShallow("fontWeight") || "", (t.fontSize || i && i.getShallow("fontSize") || 12) + "px", t.fontFamily || i && i.getShallow("fontFamily") || "sans-serif" ].join(" "));
    }
    function ar(t, e, i, n, r, o) {
        if ("function" == typeof r && (o = r, r = null), n && n.isAnimationEnabled()) {
            var a = t ? "Update" : "", s = n.getShallow("animationDuration" + a), l = n.getShallow("animationEasing" + a), h = n.getShallow("animationDelay" + a);
            "function" == typeof h && (h = h(r, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, r) : null)), 
            "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(i, s, h || 0, l, o, !!o) : (e.stopAnimation(), 
            e.attr(i), o && o());
        } else e.stopAnimation(), e.attr(i), o && o();
    }
    function sr(t, e, i, n, r) {
        ar(!0, t, e, i, n, r);
    }
    function lr(t, e, i, n, r) {
        ar(!1, t, e, i, n, r);
    }
    function hr(t, e, i) {
        return e && !d(e) && (e = pc.getLocalTransform(e)), i && (e = St([], e)), j([], t, e);
    }
    function ur(t, e, i) {
        function n(t) {
            var e = {
                position: H(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = a({}, t.shape)), e;
        }
        if (t && e) {
            var r = function(t) {
                var e = {};
                return t.traverse(function(t) {
                    !t.isGroup && t.anid && (e[t.anid] = t);
                }), e;
            }(t);
            e.traverse(function(t) {
                if (!t.isGroup && t.anid) {
                    var e = r[t.anid];
                    if (e) {
                        var o = n(t);
                        t.attr(n(e)), sr(t, o, i, t.dataIndex);
                    }
                }
            });
        }
    }
    function cr(t, e, i) {
        var n = (e = a({
            rectHover: !0
        }, e)).style = {
            strokeNoScale: !0
        };
        return i = i || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (n.image = t.slice(8), s(n, i), new ii(e)) : An(t.replace("path://", ""), e, i, "center") : void 0;
    }
    function dr(t, e, i, n, r, o, a, s) {
        var l = i - t, h = n - e, u = a - r, c = s - o, d = fr(u, c, l, h);
        if (pr(d)) return !1;
        var f = t - r, p = e - o, g = fr(f, p, l, h) / d;
        if (0 > g || g > 1) return !1;
        var v = fr(f, p, u, c) / d;
        return !(0 > v || v > 1);
    }
    function fr(t, e, i, n) {
        return t * n - i * e;
    }
    function pr(t) {
        return 1e-6 >= t && t >= -1e-6;
    }
    function gr(t, e, i) {
        this.parentModel = e, this.ecModel = i, this.option = t;
    }
    function vr(e, i, n) {
        for (var r = 0; r < i.length && (!i[r] || null != (e = e && "object" == (void 0 === e ? "undefined" : t(e)) ? e[i[r]] : null)); r++) ;
        return null == e && n && (e = n.get(i)), e;
    }
    function mr(t, e) {
        var i = Bp(t).getParent;
        return i ? i.call(t, e) : t.parentModel;
    }
    function yr(t) {
        return [ t || "", zp++, Math.random().toFixed(5) ].join("_");
    }
    function _r(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "");
    }
    function xr(t, e, i, n) {
        var r = e[1] - e[0], o = i[1] - i[0];
        if (0 === r) return 0 === o ? i[0] : (i[0] + i[1]) / 2;
        if (n) if (r > 0) {
            if (t <= e[0]) return i[0];
            if (t >= e[1]) return i[1];
        } else {
            if (t >= e[0]) return i[0];
            if (t <= e[1]) return i[1];
        } else {
            if (t === e[0]) return i[0];
            if (t === e[1]) return i[1];
        }
        return (t - e[0]) / r * o + i[0];
    }
    function wr(t, e) {
        switch (t) {
          case "center":
          case "middle":
            t = "50%";
            break;

          case "left":
          case "top":
            t = "0%";
            break;

          case "right":
          case "bottom":
            t = "100%";
        }
        return "string" == typeof t ? _r(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t;
    }
    function br(t, e, i) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), 
        i ? t : +t;
    }
    function Sr(t) {
        var e = t.toString(), i = e.indexOf("e");
        if (i > 0) {
            var n = +e.slice(i + 1);
            return 0 > n ? -n : 0;
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r;
    }
    function Mr(t, e) {
        var i = Math.log, n = Math.LN10, r = Math.floor(i(t[1] - t[0]) / n), o = Math.round(i(Math.abs(e[1] - e[0])) / n), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20;
    }
    function Tr(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e;
    }
    function Ir(t) {
        return t > -Rp && Rp > t;
    }
    function Cr(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = Np.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var i = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (i -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, i, +(e[5] || 0), +e[6] || 0, +e[7] || 0));
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0);
        }
        return new Date(null == t ? NaN : Math.round(t));
    }
    function kr(t) {
        return Math.pow(10, Dr(t));
    }
    function Dr(t) {
        return Math.floor(Math.log(t) / Math.LN10);
    }
    function Ar(t, e) {
        var i, n = Dr(t), r = Math.pow(10, n), o = t / r;
        return i = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, 
        t = i * r, n >= -20 ? +t.toFixed(0 > n ? -n : 0) : t;
    }
    function Pr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "");
    }
    function Or(t) {
        return null == t ? "" : (t + "").replace(Hp, function(t, e) {
            return Vp[e];
        });
    }
    function Lr(t, e, i) {
        _(e) || (e = [ e ]);
        var n = e.length;
        if (!n) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = Wp[o];
            t = t.replace(Gp(a), Gp(a, 0));
        }
        for (var s = 0; n > s; s++) for (var l = 0; l < r.length; l++) {
            var h = e[s][r[l]];
            t = t.replace(Gp(Wp[l], s), i ? Or(h) : h);
        }
        return t;
    }
    function Er(t, e) {
        var i = (t = w(t) ? {
            color: t,
            extraCssText: e
        } : t || {}).color, n = t.type, e = t.extraCssText, r = t.renderMode || "html", o = t.markerId || "X";
        return i ? "html" === r ? "subItem" === n ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + Or(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + Or(i) + ";" + (e || "") + '"></span>' : {
            renderMode: r,
            content: "{marker" + o + "|}  ",
            style: {
                color: i
            }
        } : "";
    }
    function Br(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t;
    }
    function zr(t, e, i) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var n = Cr(e), r = i ? "UTC" : "", o = n["get" + r + "FullYear"](), a = n["get" + r + "Month"]() + 1, s = n["get" + r + "Date"](), l = n["get" + r + "Hours"](), h = n["get" + r + "Minutes"](), u = n["get" + r + "Seconds"](), c = n["get" + r + "Milliseconds"]();
        return t = t.replace("MM", Br(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100).replace("dd", Br(s, 2)).replace("d", s).replace("hh", Br(l, 2)).replace("h", l).replace("mm", Br(h, 2)).replace("m", h).replace("ss", Br(u, 2)).replace("s", u).replace("SSS", Br(c, 3));
    }
    function Rr(t, e, i, n, r) {
        var o = 0, a = 0;
        null == n && (n = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function(l, h) {
            var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var v = f.width + (g ? -g.x + f.x : 0);
                (u = o + v) > n || l.newline ? (o = 0, u = v, a += s + i, s = f.height) : s = Math.max(s, f.height);
            } else {
                var m = f.height + (g ? -g.y + f.y : 0);
                (c = a + m) > r || l.newline ? (o += s + i, a = 0, c = m, s = f.width) : s = Math.max(s, f.width);
            }
            l.newline || (d[0] = o, d[1] = a, "horizontal" === t ? o = u + i : a = c + i);
        });
    }
    function Nr(t, e, i) {
        i = Fp(i || 0);
        var n = e.width, r = e.height, o = wr(t.left, n), a = wr(t.top, r), s = wr(t.right, n), l = wr(t.bottom, r), h = wr(t.width, n), u = wr(t.height, r), c = i[2] + i[0], d = i[1] + i[3], f = t.aspect;
        switch (isNaN(h) && (h = n - s - d - o), isNaN(u) && (u = r - l - c - a), null != f && (isNaN(h) && isNaN(u) && (f > n / r ? h = .8 * n : u = .8 * r), 
        isNaN(h) && (h = f * u), isNaN(u) && (u = h / f)), isNaN(o) && (o = n - s - h - d), 
        isNaN(a) && (a = r - l - u - c), t.left || t.right) {
          case "center":
            o = n / 2 - h / 2 - i[3];
            break;

          case "right":
            o = n - h - d;
        }
        switch (t.top || t.bottom) {
          case "middle":
          case "center":
            a = r / 2 - u / 2 - i[0];
            break;

          case "bottom":
            a = r - u - c;
        }
        o = o || 0, a = a || 0, isNaN(h) && (h = n - d - o - (s || 0)), isNaN(u) && (u = r - c - a - (l || 0));
        var p = new ee(o + i[3], a + i[0], h, u);
        return p.margin = i, p;
    }
    function Fr(t, e, i) {
        function n(i, n) {
            var a = {}, l = 0, h = {}, u = 0;
            if (Yp(i, function(e) {
                h[e] = t[e];
            }), Yp(i, function(t) {
                r(e, t) && (a[t] = h[t] = e[t]), o(a, t) && l++, o(h, t) && u++;
            }), s[n]) return o(e, i[1]) ? h[i[2]] = null : o(e, i[2]) && (h[i[1]] = null), h;
            if (2 !== u && l) {
                if (l >= 2) return a;
                for (var c = 0; c < i.length; c++) {
                    var d = i[c];
                    if (!r(a, d) && r(t, d)) {
                        a[d] = t[d];
                        break;
                    }
                }
                return a;
            }
            return h;
        }
        function r(t, e) {
            return t.hasOwnProperty(e);
        }
        function o(t, e) {
            return null != t[e] && "auto" !== t[e];
        }
        function a(t, e, i) {
            Yp(t, function(t) {
                e[t] = i[t];
            });
        }
        !b(i) && (i = {});
        var s = i.ignoreSize;
        !_(s) && (s = [ s, s ]);
        var l = n(qp[0], 0), h = n(qp[1], 1);
        a(qp[0], t, l), a(qp[1], t, h);
    }
    function Hr(t) {
        return Vr({}, t);
    }
    function Vr(t, e) {
        return e && t && Yp(Up, function(i) {
            e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t;
    }
    function Wr(t, e) {
        for (var i = t.length, n = 0; i > n; n++) if (t[n].length > e) return t[n];
        return t[i - 1];
    }
    function Gr(t) {
        var e = t.get("coordinateSystem"), i = {
            coordSysName: e,
            coordSysDims: [],
            axisMap: R(),
            categoryAxisMap: R()
        }, n = eg[e];
        return n ? (n(t, i, i.axisMap, i.categoryAxisMap), i) : void 0;
    }
    function Xr(t) {
        return "category" === t.get("type");
    }
    function Yr(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === og ? {} : []), 
        this.sourceFormat = t.sourceFormat || ag, this.seriesLayoutBy = t.seriesLayoutBy || lg, 
        this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), 
        this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount;
    }
    function Ur(t) {
        var e = t.option.source, i = ag;
        if (M(e)) i = sg; else if (_(e)) {
            0 === e.length && (i = ng);
            for (var n = 0, r = e.length; r > n; n++) {
                var o = e[n];
                if (null != o) {
                    if (_(o)) {
                        i = ng;
                        break;
                    }
                    if (b(o)) {
                        i = rg;
                        break;
                    }
                }
            }
        } else if (b(e)) {
            for (var a in e) if (e.hasOwnProperty(a) && d(e[a])) {
                i = og;
                break;
            }
        } else if (null != e) throw new Error("Invalid data");
        ug(t).sourceFormat = i;
    }
    function qr(t) {
        return ug(t).source;
    }
    function jr(t) {
        ug(t).datasetMap = R();
    }
    function Zr(t) {
        var e = t.option, i = e.data, n = M(i) ? sg : ig, r = !1, o = e.seriesLayoutBy, a = e.sourceHeader, s = e.dimensions, l = eo(t);
        if (l) {
            var h = l.option;
            i = h.source, n = ug(l).sourceFormat, r = !0, o = o || h.seriesLayoutBy, null == a && (a = h.sourceHeader), 
            s = s || h.dimensions;
        }
        var u = Kr(i, n, o, a, s), c = e.encode;
        !c && l && (c = to(t, l, i, n, o, u)), ug(t).source = new Yr({
            data: i,
            fromDataset: r,
            seriesLayoutBy: o,
            sourceFormat: n,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        });
    }
    function Kr(t, e, i, n, r) {
        if (!t) return {
            dimensionsDefine: $r(r)
        };
        var o, a, s;
        if (e === ng) "auto" === n || null == n ? Qr(function(t) {
            null != t && "-" !== t && (w(t) ? null == a && (a = 1) : a = 0);
        }, i, t, 10) : a = n ? 1 : 0, r || 1 !== a || (r = [], Qr(function(t, e) {
            r[e] = null != t ? t : "";
        }, i, t)), o = r ? r.length : i === hg ? t.length : t[0] ? t[0].length : null; else if (e === rg) r || (r = Jr(t), 
        s = !0); else if (e === og) r || (r = [], s = !0, f(t, function(t, e) {
            r.push(e);
        })); else if (e === ig) {
            var l = mi(t[0]);
            o = _(l) && l.length || 1;
        } else e === sg && Pu && O(!!r, "dimensions must be given if data is TypedArray.");
        var h;
        return s && f(r, function(t, e) {
            "name" === (b(t) ? t.name : t) && (h = e);
        }), {
            startIndex: a,
            dimensionsDefine: $r(r),
            dimensionsDetectCount: o,
            potentialNameDimIndex: h
        };
    }
    function $r(t) {
        if (t) {
            var e = R();
            return p(t, function(t) {
                if (null == (t = a({}, b(t) ? t : {
                    name: t
                })).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {
                    count: 1
                }), t;
            });
        }
    }
    function Qr(t, e, i, n) {
        if (null == n && (n = 1 / 0), e === hg) for (o = 0; o < i.length && n > o; o++) t(i[o] ? i[o][0] : null, o); else for (var r = i[0] || [], o = 0; o < r.length && n > o; o++) t(r[o], o);
    }
    function Jr(t) {
        for (var e, i = 0; i < t.length && !(e = t[i++]); ) ;
        if (e) {
            var n = [];
            return f(e, function(t, e) {
                n.push(e);
            }), n;
        }
    }
    function to(t, e, i, n, r, o) {
        var a = Gr(t), s = {}, l = [], h = [], u = t.subType, c = R([ "pie", "map", "funnel" ]), d = R([ "line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot" ]);
        if (a && null != d.get(u)) {
            var p = t.ecModel, g = ug(p).datasetMap, v = e.uid + "_" + r, m = g.get(v) || g.set(v, {
                categoryWayDim: 1,
                valueWayDim: 0
            });
            f(a.coordSysDims, function(t) {
                if (null == a.firstCategoryDimIndex) {
                    e = m.valueWayDim++;
                    s[t] = e, h.push(e);
                } else if (a.categoryAxisMap.get(t)) s[t] = 0, l.push(0); else {
                    var e = m.categoryWayDim++;
                    s[t] = e, h.push(e);
                }
            });
        } else if (null != c.get(u)) {
            for (var y, _ = 0; 5 > _ && null == y; _++) no(i, n, r, o.dimensionsDefine, o.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = o.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(x), l.push(x);
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s;
    }
    function eo(t) {
        var e = t.option;
        return e.data ? void 0 : t.ecModel.getComponent("dataset", e.datasetIndex || 0);
    }
    function io(t, e) {
        return no(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e);
    }
    function no(t, e, i, n, r, o) {
        function a(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!w(t) || "-" === t) || void 0);
        }
        var s;
        if (M(t)) return !1;
        var l;
        if (n && (l = n[o], l = b(l) ? l.name : l), e === ng) if (i === hg) {
            for (var h = t[o], u = 0; u < (h || []).length && 5 > u; u++) if (null != (s = a(h[r + u]))) return s;
        } else for (u = 0; u < t.length && 5 > u; u++) {
            var c = t[r + u];
            if (c && null != (s = a(c[o]))) return s;
        } else if (e === rg) {
            if (!l) return;
            for (u = 0; u < t.length && 5 > u; u++) if ((d = t[u]) && null != (s = a(d[l]))) return s;
        } else if (e === og) {
            if (!l) return;
            if (!(h = t[l]) || M(h)) return !1;
            for (u = 0; u < h.length && 5 > u; u++) if (null != (s = a(h[u]))) return s;
        } else if (e === ig) for (u = 0; u < t.length && 5 > u; u++) {
            var d = t[u], f = mi(d);
            if (!_(f)) return !1;
            if (null != (s = a(f[o]))) return s;
        }
        return !1;
    }
    function ro(t, e) {
        if (e) {
            var i = e.seiresIndex, n = e.seriesId, r = e.seriesName;
            return null != i && t.componentIndex !== i || null != n && t.id !== n || null != r && t.name !== r;
        }
    }
    function oo(e, i) {
        var o = e.color && !e.colorLayer;
        f(i, function(i, a) {
            "colorLayer" === a && o || Kp.hasClass(a) || ("object" == (void 0 === i ? "undefined" : t(i)) ? e[a] = e[a] ? r(e[a], i, !1) : n(i) : null == e[a] && (e[a] = i));
        });
    }
    function ao(t) {
        t = t, this.option = {}, this.option[cg] = 1, this._componentsMap = R({
            series: []
        }), this._seriesIndices, this._seriesIndicesMap, oo(t, this._theme.option), r(t, Qp, !1), 
        this.mergeOption(t);
    }
    function so(t, e) {
        _(e) || (e = e ? [ e ] : []);
        var i = {};
        return f(e, function(e) {
            i[e] = (t.get(e) || []).slice();
        }), i;
    }
    function lo(t, e, i) {
        return e.type ? e.type : i ? i.subType : Kp.determineSubType(t, e);
    }
    function ho(t, e) {
        t._seriesIndicesMap = R(t._seriesIndices = p(e, function(t) {
            return t.componentIndex;
        }) || []);
    }
    function uo(t, e) {
        return e.hasOwnProperty("subType") ? v(t, function(t) {
            return t.subType === e.subType;
        }) : t;
    }
    function co(t) {
        if (Pu && !t._seriesIndices) throw new Error("Option should contains series.");
    }
    function fo(t) {
        f(fg, function(e) {
            this[e] = m(t[e], t);
        }, this);
    }
    function po() {
        this._coordinateSystems = [];
    }
    function go(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, 
        this._currentMediaIndices = [], this._optionBackup, this._newBaseOption;
    }
    function vo(t, e, i) {
        var n, r, o = [], a = [], s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, o = (t.options || []).slice()), 
        t.media) {
            r = r || {};
            var l = t.media;
            gg(l, function(t) {
                t && t.option && (t.query ? a.push(t) : n || (n = t));
            });
        }
        return r || (r = t), r.timeline || (r.timeline = s), gg([ r ].concat(o).concat(p(a, function(t) {
            return t.option;
        })), function(t) {
            gg(e, function(e) {
                e(t, i);
            });
        }), {
            baseOption: r,
            timelineOptions: o,
            mediaDefault: n,
            mediaList: a
        };
    }
    function mo(t, e, i) {
        var n = {
            width: e,
            height: i,
            aspectratio: e / i
        }, r = !0;
        return f(t, function(t, e) {
            var i = e.match(_g);
            if (i && i[1] && i[2]) {
                var o = i[1], a = i[2].toLowerCase();
                yo(n[a], t, o) || (r = !1);
            }
        }), r;
    }
    function yo(t, e, i) {
        return "min" === i ? t >= e : "max" === i ? e >= t : t === e;
    }
    function _o(t, e) {
        return t.join(",") === e.join(",");
    }
    function xo(t, e) {
        gg(e = e || {}, function(e, i) {
            if (null != e) {
                var n = t[i];
                if (Kp.hasClass(i)) {
                    e = gi(e);
                    var r = _i(n = gi(n), e);
                    t[i] = mg(r, function(t) {
                        return t.option && t.exist ? yg(t.exist, t.option, !0) : t.exist || t.option;
                    });
                } else t[i] = yg(n, e, !0);
            }
        });
    }
    function wo(t) {
        var e = t && t.itemStyle;
        if (e) for (var i = 0, n = bg.length; n > i; i++) {
            var o = bg[i], a = e.normal, s = e.emphasis;
            a && a[o] && (t[o] = t[o] || {}, t[o].normal ? r(t[o].normal, a[o]) : t[o].normal = a[o], 
            a[o] = null), s && s[o] && (t[o] = t[o] || {}, t[o].emphasis ? r(t[o].emphasis, s[o]) : t[o].emphasis = s[o], 
            s[o] = null);
        }
    }
    function bo(t, e, i) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var n = t[e].normal, r = t[e].emphasis;
            n && (i ? (t[e].normal = t[e].emphasis = null, s(t[e], n)) : t[e] = n), r && (t.emphasis = t.emphasis || {}, 
            t.emphasis[e] = r);
        }
    }
    function So(t) {
        bo(t, "itemStyle"), bo(t, "lineStyle"), bo(t, "areaStyle"), bo(t, "label"), bo(t, "labelLine"), 
        bo(t, "upperLabel"), bo(t, "edgeLabel");
    }
    function Mo(t, e) {
        var i = wg(t) && t[e], n = wg(i) && i.textStyle;
        if (n) for (var r = 0, o = Bd.length; o > r; r++) {
            var e = Bd[r];
            n.hasOwnProperty(e) && (i[e] = n[e]);
        }
    }
    function To(t) {
        t && (So(t), Mo(t, "label"), t.emphasis && Mo(t.emphasis, "label"));
    }
    function Io(t) {
        if (wg(t)) {
            wo(t), So(t), Mo(t, "label"), Mo(t, "upperLabel"), Mo(t, "edgeLabel"), t.emphasis && (Mo(t.emphasis, "label"), 
            Mo(t.emphasis, "upperLabel"), Mo(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (wo(e), To(e));
            var i = t.markLine;
            i && (wo(i), To(i));
            var n = t.markArea;
            n && To(n);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var o = t.links || t.edges;
                if (o && !M(o)) for (s = 0; s < o.length; s++) To(o[s]);
                f(t.categories, function(t) {
                    So(t);
                });
            }
            if (r && !M(r)) for (s = 0; s < r.length; s++) To(r[s]);
            if ((e = t.markPoint) && e.data) for (var a = e.data, s = 0; s < a.length; s++) To(a[s]);
            if ((i = t.markLine) && i.data) for (var l = i.data, s = 0; s < l.length; s++) _(l[s]) ? (To(l[s][0]), 
            To(l[s][1])) : To(l[s]);
            "gauge" === t.type ? (Mo(t, "axisLabel"), Mo(t, "title"), Mo(t, "detail")) : "treemap" === t.type ? (bo(t.breadcrumb, "itemStyle"), 
            f(t.levels, function(t) {
                So(t);
            })) : "tree" === t.type && So(t.leaves);
        }
    }
    function Co(t) {
        return _(t) ? t : t ? [ t ] : [];
    }
    function ko(t) {
        return (_(t) ? t[0] : t) || {};
    }
    function Do(t, e) {
        e = e.split(",");
        for (var i = t, n = 0; n < e.length && null != (i = i && i[e[n]]); n++) ;
        return i;
    }
    function Ao(t, e, i, n) {
        e = e.split(",");
        for (var r, o = t, a = 0; a < e.length - 1; a++) null == o[r = e[a]] && (o[r] = {}), 
        o = o[r];
        (n || null == o[e[a]]) && (o[e[a]] = i);
    }
    function Po(t) {
        f(Mg, function(e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]]);
        });
    }
    function Oo(t) {
        f(t, function(e, i) {
            var n = [], r = [ NaN, NaN ], o = [ e.stackResultDimension, e.stackedOverDimension ], a = e.data, s = e.isStackedByIndex, l = a.map(o, function(o, l, h) {
                var u = a.get(e.stackedDimension, h);
                if (isNaN(u)) return r;
                var c, d;
                s ? d = a.getRawIndex(h) : c = a.get(e.stackedByDimension, h);
                for (var f = NaN, p = i - 1; p >= 0; p--) {
                    var g = t[p];
                    if (s || (d = g.data.rawIndexOf(g.stackedByDimension, c)), d >= 0) {
                        var v = g.data.getByRawIndex(g.stackResultDimension, d);
                        if (u >= 0 && v > 0 || 0 >= u && 0 > v) {
                            u += v, f = v;
                            break;
                        }
                    }
                }
                return n[0] = u, n[1] = f, n;
            });
            a.hostModel.setData(l), e.data = l;
        });
    }
    function Lo(t, e) {
        Yr.isInstance(t) || (t = Yr.seriesDataToSource(t)), this._source = t;
        var i = this._data = t.data, n = t.sourceFormat;
        if (n === sg) {
            if (Pu && null == e) throw new Error("Typed array data must specify dimension size");
            this._offset = 0, this._dimSize = e, this._data = i;
        }
        var r = kg[n === ng ? n + "_" + t.seriesLayoutBy : n];
        Pu && O(r, "Invalide sourceFormat: " + n), a(this, r);
    }
    function Eo() {
        return this._data.length;
    }
    function Bo(t) {
        return this._data[t];
    }
    function zo(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e]);
    }
    function Ro(t, e, i) {
        return null != i ? t[i] : t;
    }
    function No(t, e, i, n) {
        return Fo(t[n], this._dimensionInfos[e]);
    }
    function Fo(t, e) {
        var i = e && e.type;
        if ("ordinal" === i) {
            var n = e && e.ordinalMeta;
            return n ? n.parseAndCollect(t) : t;
        }
        return "time" === i && "number" != typeof t && null != t && "-" !== t && (t = +Cr(t)), 
        null == t || "" === t ? NaN : +t;
    }
    function Ho(t, e, i) {
        if (t) {
            var n = t.getRawDataItem(e);
            if (null != n) {
                var r, o, a = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(i);
                return s && (r = s.name, o = s.index), Dg[a](n, e, o, r);
            }
        }
    }
    function Vo(t) {
        return new Wo(t);
    }
    function Wo(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, 
        this._onDirty = t.onDirty, this._dirty = !0, this.context;
    }
    function Go(t, e, i, n, r, o) {
        Eg.reset(i, n, r, o), t._callingProgress = e, t._callingProgress({
            start: i,
            end: n,
            count: n - i,
            next: Eg.next
        }, t.context);
    }
    function Xo(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var i, n;
        !e && t._reset && ((i = t._reset(t.context)) && i.progress && (n = i.forceFirstProgress, 
        i = i.progress), _(i) && !i.length && (i = null)), t._progress = i, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), n;
    }
    function Yo(t) {
        var e = t.name;
        wi(t) || (t.name = Uo(t) || e);
    }
    function Uo(t) {
        var e = t.getRawData(), i = [];
        return f(e.mapDimension("seriesName", !0), function(t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName);
        }), i.join(" ");
    }
    function qo(t) {
        return t.model.getRawData().count();
    }
    function jo(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), Zo;
    }
    function Zo(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData);
    }
    function Ko(t, e) {
        f(t.CHANGABLE_METHODS, function(i) {
            t.wrapMethod(i, y($o, e));
        });
    }
    function $o(t) {
        var e = Qo(t);
        e && e.setOutputEnd(this.count());
    }
    function Qo(t) {
        var e = (t.ecModel || {}).scheduler, i = e && e.getPipeline(t.uid);
        if (i) {
            var n = i.currentTask;
            if (n) {
                var r = n.agentStubMap;
                r && (n = r.get(t.uid));
            }
            return n;
        }
    }
    function Jo() {
        this.group = new Fc(), this.uid = yr("viewChart"), this.renderTask = Vo({
            plan: ia,
            reset: na
        }), this.renderTask.context = {
            view: this
        };
    }
    function ta(t, e, i) {
        if (t && (t.trigger(e, i), t.isGroup && !Zn(t))) for (var n = 0, r = t.childCount(); r > n; n++) ta(t.childAt(n), e, i);
    }
    function ea(t, e, i) {
        var n = Si(t, e), r = e && null != e.highlightKey ? Kn(e.highlightKey) : null;
        null != n ? f(gi(n), function(e) {
            ta(t.getItemGraphicEl(e), i, r);
        }) : t.eachItemGraphicEl(function(t) {
            ta(t, i, r);
        });
    }
    function ia(t) {
        return Vg(t.model);
    }
    function na(t) {
        var e = t.model, i = t.ecModel, n = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view, s = r && Hg(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, i, n, r), Gg[l];
    }
    function ra(t, e, i) {
        function n() {
            u = new Date().getTime(), c = null, t.apply(a, s || []);
        }
        var r, o, a, s, l, h = 0, u = 0, c = null;
        e = e || 0;
        var d = function() {
            r = new Date().getTime(), a = this, s = arguments;
            var t = l || e, d = l || i;
            l = null, o = r - (d ? h : u) - t, clearTimeout(c), d ? c = setTimeout(n, t) : o >= 0 ? n() : c = setTimeout(n, -o), 
            h = r;
        };
        return d.clear = function() {
            c && (clearTimeout(c), c = null);
        }, d.debounceNextCall = function(t) {
            l = t;
        }, d;
    }
    function oa(t, e, i, n) {
        var r = t[e];
        if (r) {
            var o = r[Xg] || r, a = r[Ug];
            if (r[Yg] !== i || a !== n) {
                if (null == i || !n) return t[e] = o;
                (r = t[e] = ra(o, i, "debounce" === n))[Xg] = o, r[Ug] = n, r[Yg] = i;
            }
            return r;
        }
    }
    function aa(t, e, i, n) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var i = this._dataProcessorHandlers = i.slice(), n = this._visualHandlers = n.slice();
        this._allHandlers = i.concat(n), this._stageTaskMap = R();
    }
    function sa(t, e, i, n, r) {
        function o(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
        }
        r = r || {};
        var a;
        f(e, function(e) {
            if (!r.visualType || r.visualType === e.visualType) {
                var s = t._stageTaskMap.get(e.uid), l = s.seriesTaskMap, h = s.overallTask;
                if (h) {
                    var u, c = h.agentStubMap;
                    c.each(function(t) {
                        o(r, t) && (t.dirty(), u = !0);
                    }), u && h.dirty(), Qg(h, n);
                    var d = t.getPerformArgs(h, r.block);
                    c.each(function(t) {
                        t.perform(d);
                    }), a |= h.perform(d);
                } else l && l.each(function(s) {
                    o(r, s) && s.dirty();
                    var l = t.getPerformArgs(s, r.block);
                    l.skip = !e.performRawSeries && i.isSeriesFiltered(s.context.model), Qg(s, n), a |= s.perform(l);
                });
            }
        }), t.unfinished |= a;
    }
    function la(t, e, i, n, r) {
        function o(i) {
            var o = i.uid, s = a.get(o) || a.set(o, Vo({
                plan: pa,
                reset: ga,
                count: ma
            }));
            s.context = {
                model: i,
                ecModel: n,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, ya(t, i, s);
        }
        var a = i.seriesTaskMap || (i.seriesTaskMap = R()), s = e.seriesType, l = e.getTargetSeries;
        e.createOnAllSeries ? n.eachRawSeries(o) : s ? n.eachRawSeriesByType(s, o) : l && l(n, r).each(o);
        var h = t._pipelineMap;
        a.each(function(t, e) {
            h.get(e) || (t.dispose(), a.removeKey(e));
        });
    }
    function ha(t, e, i, n, r) {
        function o(e) {
            var i = e.uid, n = s.get(i);
            n || (n = s.set(i, Vo({
                reset: ca,
                onDirty: fa
            })), a.dirty()), n.context = {
                model: e,
                overallProgress: u,
                modifyOutputEnd: c
            }, n.agent = a, n.__block = u, ya(t, e, n);
        }
        var a = i.overallTask = i.overallTask || Vo({
            reset: ua
        });
        a.context = {
            ecModel: n,
            api: r,
            overallReset: e.overallReset,
            scheduler: t
        };
        var s = a.agentStubMap = a.agentStubMap || R(), l = e.seriesType, h = e.getTargetSeries, u = !0, c = e.modifyOutputEnd;
        l ? n.eachRawSeriesByType(l, o) : h ? h(n, r).each(o) : (u = !1, f(n.getSeries(), o));
        var d = t._pipelineMap;
        s.each(function(t, e) {
            d.get(e) || (t.dispose(), a.dirty(), s.removeKey(e));
        });
    }
    function ua(t) {
        t.overallReset(t.ecModel, t.api, t.payload);
    }
    function ca(t) {
        return t.overallProgress && da;
    }
    function da() {
        this.agent.dirty(), this.getDownstream().dirty();
    }
    function fa() {
        this.agent && this.agent.dirty();
    }
    function pa(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload);
    }
    function ga(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = gi(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? p(e, function(t, e) {
            return va(e);
        }) : Jg;
    }
    function va(t) {
        return function(e, i) {
            var n = i.data, r = i.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(n, o); else r && r.progress && r.progress(e, n);
        };
    }
    function ma(t) {
        return t.data.count();
    }
    function ya(t, e, i) {
        var n = e.uid, r = t._pipelineMap.get(n);
        !r.head && (r.head = i), r.tail && r.tail.pipe(i), r.tail = i, i.__idxInPipeline = r.count++, 
        i.__pipeline = r;
    }
    function _a(t) {
        tv = null;
        try {
            t(ev, iv);
        } catch (t) {}
        return tv;
    }
    function xa(t, e) {
        for (var i in e.prototype) t[i] = N;
    }
    function wa(t) {
        for (w(t) && (t = new DOMParser().parseFromString(t, "text/xml")), 9 === t.nodeType && (t = t.firstChild); "svg" !== t.nodeName.toLowerCase() || 1 !== t.nodeType; ) t = t.nextSibling;
        return t;
    }
    function ba() {
        this._defs = {}, this._root = null, this._isDefine = !1, this._isText = !1;
    }
    function Sa(t, e) {
        for (var i = t.firstChild; i; ) {
            if (1 === i.nodeType) {
                var n = i.getAttribute("offset");
                n = n.indexOf("%") > 0 ? parseInt(n, 10) / 100 : n ? parseFloat(n) : 0;
                var r = i.getAttribute("stop-color") || "#000000";
                e.addColorStop(n, r);
            }
            i = i.nextSibling;
        }
    }
    function Ma(t, e) {
        t && t.__inheritedStyle && (e.__inheritedStyle || (e.__inheritedStyle = {}), s(e.__inheritedStyle, t.__inheritedStyle));
    }
    function Ta(t) {
        for (var e = L(t).split(uv), i = [], n = 0; n < e.length; n += 2) {
            var r = parseFloat(e[n]), o = parseFloat(e[n + 1]);
            i.push([ r, o ]);
        }
        return i;
    }
    function Ia(t, e, i, n) {
        var r = e.__inheritedStyle || {}, o = "text" === e.type;
        if (1 === t.nodeType && (ka(t, e), a(r, Da(t)), !n)) for (var s in fv) if (fv.hasOwnProperty(s)) {
            var l = t.getAttribute(s);
            null != l && (r[fv[s]] = l);
        }
        var h = o ? "textFill" : "fill", u = o ? "textStroke" : "stroke";
        e.style = e.style || new jc();
        var c = e.style;
        null != r.fill && c.set(h, Ca(r.fill, i)), null != r.stroke && c.set(u, Ca(r.stroke, i)), 
        f([ "lineWidth", "opacity", "fillOpacity", "strokeOpacity", "miterLimit", "fontSize" ], function(t) {
            var e = "lineWidth" === t && o ? "textStrokeWidth" : t;
            null != r[t] && c.set(e, parseFloat(r[t]));
        }), r.textBaseline && "auto" !== r.textBaseline || (r.textBaseline = "alphabetic"), 
        "alphabetic" === r.textBaseline && (r.textBaseline = "bottom"), "start" === r.textAlign && (r.textAlign = "left"), 
        "end" === r.textAlign && (r.textAlign = "right"), f([ "lineDashOffset", "lineCap", "lineJoin", "fontWeight", "fontFamily", "fontStyle", "textAlign", "textBaseline" ], function(t) {
            null != r[t] && c.set(t, r[t]);
        }), r.lineDash && (e.style.lineDash = L(r.lineDash).split(uv)), c[u] && "none" !== c[u] && (e[u] = !0), 
        e.__inheritedStyle = r;
    }
    function Ca(t, e) {
        var i = e && t && t.match(pv);
        return i ? e[L(i[1])] : t;
    }
    function ka(t, e) {
        var i = t.getAttribute("transform");
        if (i) {
            var n = null, r = [];
            (i = i.replace(/,/g, " ")).replace(gv, function(t, e, i) {
                r.push(e, i);
            });
            for (var o = r.length - 1; o > 0; o -= 2) {
                var a = r[o], s = r[o - 1];
                switch (n = n || vt(), s) {
                  case "translate":
                    a = L(a).split(uv), xt(n, n, [ parseFloat(a[0]), parseFloat(a[1] || 0) ]);
                    break;

                  case "scale":
                    a = L(a).split(uv), bt(n, n, [ parseFloat(a[0]), parseFloat(a[1] || a[0]) ]);
                    break;

                  case "rotate":
                    a = L(a).split(uv), wt(n, n, parseFloat(a[0]));
                    break;

                  case "skew":
                    a = L(a).split(uv), console.warn("Skew transform is not supported yet");
                    break;

                  case "matrix":
                    a = L(a).split(uv);
                    n[0] = parseFloat(a[0]), n[1] = parseFloat(a[1]), n[2] = parseFloat(a[2]), n[3] = parseFloat(a[3]), 
                    n[4] = parseFloat(a[4]), n[5] = parseFloat(a[5]);
                }
            }
            e.setLocalTransform(n);
        }
    }
    function Da(t) {
        var e = t.getAttribute("style"), i = {};
        if (!e) return i;
        var n = {};
        vv.lastIndex = 0;
        for (var r; null != (r = vv.exec(e)); ) n[r[1]] = r[2];
        for (var o in fv) fv.hasOwnProperty(o) && null != n[o] && (i[fv[o]] = n[o]);
        return i;
    }
    function Aa(t, e, i) {
        var n = e / t.width, r = i / t.height, o = Math.min(n, r);
        return {
            scale: [ o, o ],
            position: [ -(t.x + t.width / 2) * o + e / 2, -(t.y + t.height / 2) * o + i / 2 ]
        };
    }
    function Pa(t) {
        return function(e, i, n) {
            e = e && e.toLowerCase(), Ju.prototype[t].call(this, e, i, n);
        };
    }
    function Oa() {
        Ju.call(this);
    }
    function La(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio;
        }
        i = i || {}, "string" == typeof e && (e = Gv[e]), this.id, this.group, this._dom = t;
        var o = "canvas";
        Pu && (o = ("undefined" == typeof window ? global : window).__ECHARTS__DEFAULT__RENDERER__ || o);
        var a = this._zr = pi(t, {
            renderer: i.renderer || o,
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = ra(m(a.flush, a), 17), (e = n(e)) && Ig(e, !0), this._theme = e, 
        this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, 
        this._coordSysMgr = new po();
        var s = this._api = $a(this);
        he(Wv, r), he(Fv, r), this._scheduler = new aa(this, s, Fv, Wv), Ju.call(this, this._ecEventProcessor = new Qa()), 
        this._messageCenter = new Oa(), this._initEvents(), this.resize = m(this.resize, this), 
        this._pendingActions = [], a.animation.on("frame", this._onframe, this), Va(a, this), 
        E(this);
    }
    function Ea(t, e, i) {
        var n, r = this._model, o = this._coordSysMgr.getCoordinateSystems();
        e = Ti(r, e);
        for (var a = 0; a < o.length; a++) {
            var s = o[a];
            if (s[t] && null != (n = s[t](r, e, i))) return n;
        }
        Pu && console.warn("No coordinate system that supports " + t + " found by the given finder.");
    }
    function Ba(t) {
        var e = t._model, i = t._scheduler;
        i.restorePipelines(e), i.prepareStageTasks(), Wa(t, "component", e, i), Wa(t, "chart", e, i), 
        i.plan();
    }
    function za(t, e, i, n, r) {
        function o(n) {
            n && n.__alive && n[e] && n[e](n.__model, a, t._api, i);
        }
        var a = t._model;
        if (n) {
            var s = {};
            s[n + "Id"] = i[n + "Id"], s[n + "Index"] = i[n + "Index"], s[n + "Name"] = i[n + "Name"];
            var l = {
                mainType: n,
                query: s
            };
            r && (l.subType = r);
            var h = i.excludeSeriesId;
            null != h && (h = R(gi(h))), a && a.eachComponent(l, function(e) {
                h && null != h.get(e.id) || o(t["series" === n ? "_chartsMap" : "_componentsMap"][e.__viewId]);
            }, t);
        } else wv(t._componentsViews.concat(t._chartsViews), o);
    }
    function Ra(t, e) {
        var i = t._chartsMap, n = t._scheduler;
        e.eachSeries(function(t) {
            n.updateStreamModes(t, i[t.__viewId]);
        });
    }
    function Na(t, e) {
        var i = t.type, n = t.escapeConnect, r = Rv[i], o = r.actionInfo, l = (o.update || "update").split(":"), h = l.pop();
        l = null != l[0] && Mv(l[0]), this[Pv] = !0;
        var u = [ t ], c = !1;
        t.batch && (c = !0, u = p(t.batch, function(e) {
            return e = s(a({}, e), t), e.batch = null, e;
        }));
        var d, f = [], g = "highlight" === i || "downplay" === i;
        wv(u, function(t) {
            d = r.action(t, this._model, this._api), (d = d || a({}, t)).type = o.event || d.type, 
            f.push(d), g ? za(this, h, t, "series") : l && za(this, h, t, l.main, l.sub);
        }, this), "none" === h || g || l || (this[Ov] ? (Ba(this), Bv.update.call(this, t), 
        this[Ov] = !1) : Bv[h].call(this, t)), d = c ? {
            type: o.event || i,
            escapeConnect: n,
            batch: f
        } : f[0], this[Pv] = !1, !e && this._messageCenter.trigger(d.type, d);
    }
    function Fa(t) {
        for (var e = this._pendingActions; e.length; ) {
            var i = e.shift();
            Na.call(this, i, t);
        }
    }
    function Ha(t) {
        !t && this.trigger("updated");
    }
    function Va(t, e) {
        t.on("rendered", function() {
            e.trigger("rendered"), !t.animation.isFinished() || e[Ov] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished");
        });
    }
    function Wa(t, e, i, n) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type, r = s[e];
            if (!r) {
                var u = Mv(t.type), c = o ? Rg.getClass(u.main, u.sub) : Jo.getClass(u.sub);
                Pu && xv(c, u.sub + " does not exist."), (r = new c()).init(i, h), s[e] = r, a.push(r), 
                l.add(r.group);
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !o && n.prepareView(r, t, i, h);
        }
        for (var o = "component" === e, a = o ? t._componentsViews : t._chartsViews, s = o ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < a.length; u++) a[u].__alive = !1;
        o ? i.eachComponent(function(t, e) {
            "series" !== t && r(e);
        }) : i.eachSeries(r);
        for (u = 0; u < a.length; ) {
            var c = a[u];
            c.__alive ? u++ : (!o && c.renderTask.dispose(), l.remove(c.group), c.dispose(i, h), 
            a.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null);
        }
    }
    function Ga(t) {
        t.clearColorPalette(), t.eachSeries(function(t) {
            t.clearColorPalette();
        });
    }
    function Xa(t, e, i, n) {
        Ya(t, e, i, n), wv(t._chartsViews, function(t) {
            t.__alive = !1;
        }), Ua(t, e, i, n), wv(t._chartsViews, function(t) {
            t.__alive || t.remove(e, i);
        });
    }
    function Ya(t, e, i, n, r) {
        wv(r || t._componentsViews, function(t) {
            var r = t.__model;
            t.render(r, e, i, n), Ka(r, t);
        });
    }
    function Ua(t, e, i, n, r) {
        var o, a = t._scheduler;
        e.eachSeries(function(e) {
            var i = t._chartsMap[e.__viewId];
            i.__alive = !0;
            var s = i.renderTask;
            a.updatePayload(s, n), r && r.get(e.uid) && s.dirty(), o |= s.perform(a.getPerformArgs(s)), 
            i.group.silent = !!e.get("silent"), Ka(e, i), Za(e, i);
        }), a.unfinished |= o, ja(t, e), Zg(t._zr.dom, e);
    }
    function qa(t, e) {
        wv(Vv, function(i) {
            i(t, e);
        });
    }
    function ja(t, e) {
        var i = 0;
        t._zr.storage.traverse(function() {
            i++;
        }), i > e.get("hoverLayerThreshold") && !Bu.node && e.eachSeries(function(e) {
            if (!e.preventUsingHoverLayer) {
                var i = t._chartsMap[e.__viewId];
                i.__alive && i.group.traverse(function(t) {
                    t.useHoverLayer = !0;
                });
            }
        });
    }
    function Za(t, e) {
        var i = t.get("blendMode") || null;
        Pu && !Bu.canvasSupported && i && "source-over" !== i && console.warn("Only canvas support blendMode"), 
        e.group.traverse(function(t) {
            t.isGroup || t.style.blend !== i && t.setStyle("blend", i), t.eachPendingDisplayable && t.eachPendingDisplayable(function(t) {
                t.setStyle("blend", i);
            });
        });
    }
    function Ka(t, e) {
        var i = t.get("z"), n = t.get("zlevel");
        e.group.traverse(function(t) {
            "group" !== t.type && (null != i && (t.z = i), null != n && (t.zlevel = n));
        });
    }
    function $a(t) {
        var e = t._coordSysMgr;
        return a(new fo(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e),
            getComponentByElement: function(e) {
                for (;e; ) {
                    var i = e.__ecComponentInfo;
                    if (null != i) return t._model.getComponent(i.mainType, i.index);
                    e = e.parent;
                }
            }
        });
    }
    function Qa() {
        this.eventInfo;
    }
    function Ja(t) {
        function e(t, e) {
            for (var n = 0; n < t.length; n++) t[n][i] = e;
        }
        var i = "__connectUpdateStatus";
        wv(Nv, function(n, r) {
            t._messageCenter.on(r, function(n) {
                if (Uv[t.group] && 0 !== t[i]) {
                    if (n && n.escapeConnect) return;
                    var r = t.makeActionFromEvent(n), o = [];
                    wv(Yv, function(e) {
                        e !== t && e.group === t.group && o.push(e);
                    }), e(o, 0), wv(o, function(t) {
                        1 !== t[i] && t.dispatchAction(r);
                    }), e(o, 2);
                }
            });
        });
    }
    function ts(t) {
        Uv[t] = !1;
    }
    function es(t) {
        return Yv[ki(t, Zv)];
    }
    function is(t, e) {
        Gv[t] = e;
    }
    function ns(t) {
        Hv.push(t);
    }
    function rs(t, e) {
        ls(Fv, t, e, Cv);
    }
    function os(t, e, i) {
        "function" == typeof e && (i = e, e = "");
        var n = Sv(t) ? t.type : [ t, t = {
            event: e
        } ][0];
        t.event = (t.event || n).toLowerCase(), e = t.event, xv(Lv.test(n) && Lv.test(e)), 
        Rv[n] || (Rv[n] = {
            action: i,
            actionInfo: t
        }), Nv[e] = n;
    }
    function as(t, e) {
        ls(Wv, t, e, kv, "layout");
    }
    function ss(t, e) {
        ls(Wv, t, e, Dv, "visual");
    }
    function ls(t, e, i, n, r) {
        if ((bv(e) || Sv(e)) && (i = e, e = n), Pu) {
            if (isNaN(e) || null == e) throw new Error("Illegal priority");
            wv(t, function(t) {
                xv(t.__raw !== i);
            });
        }
        var o = aa.wrapStageHandler(i, r);
        return o.__prio = e, o.__raw = i, t.push(o), o;
    }
    function hs(t, e) {
        Xv[t] = e;
    }
    function us(t) {
        return Kp.extend(t);
    }
    function cs(t) {
        return Rg.extend(t);
    }
    function ds(t) {
        return t;
    }
    function fs(t, e, i, n, r) {
        this._old = t, this._new = e, this._oldKeyGetter = i || ds, this._newKeyGetter = n || ds, 
        this.context = r;
    }
    function ps(t, e, i, n, r) {
        for (var o = 0; o < t.length; o++) {
            var a = "_ec_" + r[n](t[o], o), s = e[a];
            null == s ? (i.push(a), e[a] = o) : (s.length || (e[a] = s = [ s ]), s.push(o));
        }
    }
    function gs(t) {
        var e = {}, i = e.encode = {}, n = R(), r = [], o = [], a = e.userOutput = {
            dimensionNames: t.dimensions.slice(),
            encode: {}
        };
        f(t.dimensions, function(e) {
            var s = t.getDimensionInfo(e), l = s.coordDim;
            if (l) {
                Pu && O(null == Qv.get(l));
                var h = s.coordDimIndex;
                vs(i, l)[h] = e, s.isExtraCoord || (n.set(l, 1), ys(s.type) && (r[0] = e), vs(a.encode, l)[h] = s.index), 
                s.defaultTooltip && o.push(e);
            }
            Qv.each(function(t, e) {
                var n = vs(i, e), r = s.otherDims[e];
                null != r && !1 !== r && (n[r] = s.name);
            });
        });
        var s = [], l = {};
        n.each(function(t, e) {
            var n = i[e];
            l[e] = n[0], s = s.concat(n);
        }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;
        var h = i.label;
        h && h.length && (r = h.slice());
        var u = i.tooltip;
        return u && u.length ? o = u.slice() : o.length || (o = r.slice()), i.defaultedLabel = r, 
        i.defaultedTooltip = o, e;
    }
    function vs(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e];
    }
    function ms(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float";
    }
    function ys(t) {
        return !("ordinal" === t || "time" === t);
    }
    function _s(t) {
        return t._rawCount > 65535 ? rm : am;
    }
    function xs(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t);
    }
    function ws(t, e) {
        f(sm.concat(e.__wrappedMethods || []), function(i) {
            e.hasOwnProperty(i) && (t[i] = e[i]);
        }), t.__wrappedMethods = e.__wrappedMethods, f(lm, function(i) {
            t[i] = n(e[i]);
        }), t._calculationInfo = a(e._calculationInfo);
    }
    function bs(t, e, i, n, r) {
        var o = nm[e.type], a = n - 1, s = e.name, l = t[s][a];
        if (l && l.length < i) {
            for (var h = new o(Math.min(r - a * i, i)), u = 0; u < l.length; u++) h[u] = l[u];
            t[s][a] = h;
        }
        for (var c = n * i; r > c; c += i) t[s].push(new o(Math.min(r - c, i)));
    }
    function Ss(t) {
        var e = t._invertedIndicesMap;
        f(e, function(i, n) {
            var r = t._dimensionInfos[n].ordinalMeta;
            if (r) {
                i = e[n] = new om(r.categories.length);
                for (o = 0; o < i.length; o++) i[o] = em;
                for (var o = 0; o < t._count; o++) i[t.get(n, o)] = o;
            }
        });
    }
    function Ms(t, e, i) {
        var n;
        if (null != e) {
            var r = t._chunkSize, o = Math.floor(i / r), a = i % r, s = t.dimensions[e], l = t._storage[s][o];
            if (l) {
                n = l[a];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (n = h.categories[n]);
            }
        }
        return n;
    }
    function Ts(t) {
        return t;
    }
    function Is(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1;
    }
    function Cs(t, e) {
        var i = t._idList[e];
        return null == i && (i = Ms(t, t._idDimIdx, e)), null == i && (i = im + e), i;
    }
    function ks(t) {
        return _(t) || (t = [ t ]), t;
    }
    function Ds(t, e) {
        for (var i = 0; i < e.length; i++) t._dimensionInfos[e[i]] || console.error("Unkown dimension " + e[i]);
    }
    function As(t, e) {
        var i = t.dimensions, n = new hm(p(i, t.getDimensionInfo, t), t.hostModel);
        ws(n, t);
        for (var r = n._storage = {}, o = t._storage, a = 0; a < i.length; a++) {
            var s = i[a];
            o[s] && (h(e, s) >= 0 ? (r[s] = Ps(o[s]), n._rawExtent[s] = [ 1 / 0, -1 / 0 ], n._extent[s] = null) : r[s] = o[s]);
        }
        return n;
    }
    function Ps(t) {
        for (var e = new Array(t.length), i = 0; i < t.length; i++) e[i] = xs(t[i]);
        return e;
    }
    function Os(t, e, i) {
        function r(t, e, i) {
            null != Qv.get(e) ? t.otherDims[e] = i : (t.coordDim = e, t.coordDimIndex = i, u.set(e, !0));
        }
        Yr.isInstance(e) || (e = Yr.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var o = (i.dimsDef || []).slice(), l = R(i.encodeDef), h = R(), u = R(), c = [], d = Ls(e, t, o, i.dimCount), p = 0; d > p; p++) {
            var g = o[p] = a({}, b(o[p]) ? o[p] : {
                name: o[p]
            }), v = g.name, m = c[p] = {
                otherDims: {}
            };
            null != v && null == h.get(v) && (m.name = m.displayName = v, h.set(v, p)), null != g.type && (m.type = g.type), 
            null != g.displayName && (m.displayName = g.displayName);
        }
        l.each(function(t, e) {
            if (1 === (t = gi(t).slice()).length && !w(t[0]) && t[0] < 0) l.set(e, !1); else {
                var i = l.set(e, []);
                f(t, function(t, n) {
                    w(t) && (t = h.get(t)), null != t && d > t && (i[n] = t, r(c[t], e, n));
                });
            }
        });
        var y = 0;
        f(t, function(t) {
            var e, t, i, o;
            if (w(t)) e = t, t = {}; else {
                e = t.name;
                var a = t.ordinalMeta;
                t.ordinalMeta = null, (t = n(t)).ordinalMeta = a, i = t.dimsDef, o = t.otherDims, 
                t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null;
            }
            var h = l.get(e);
            if (!1 !== h) {
                if (!(h = gi(h)).length) for (var u = 0; u < (i && i.length || 1); u++) {
                    for (;y < c.length && null != c[y].coordDim; ) y++;
                    y < c.length && h.push(y++);
                }
                f(h, function(n, a) {
                    var l = c[n];
                    if (r(s(l, t), e, a), null == l.name && i) {
                        var h = i[a];
                        !b(h) && (h = {
                            name: h
                        }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip;
                    }
                    o && s(l.otherDims, o);
                });
            }
        });
        var _ = i.generateCoord, x = i.generateCoordCount, S = null != x;
        x = _ ? x || 1 : 0;
        for (var M = _ || "value", T = 0; d > T; T++) null == (m = c[T] = c[T] || {}).coordDim && (m.coordDim = Es(M, u, S), 
        m.coordDimIndex = 0, (!_ || 0 >= x) && (m.isExtraCoord = !0), x--), null == m.name && (m.name = Es(m.coordDim, h)), 
        null == m.type && io(e, T, m.name) && (m.type = "ordinal");
        return c;
    }
    function Ls(t, e, i, n) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, i.length, n || 0);
        return f(e, function(t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length));
        }), r;
    }
    function Es(t, e, i) {
        if (i || null != e.get(t)) {
            for (var n = 0; null != e.get(t + n); ) n++;
            t += n;
        }
        return e.set(t, !0), t;
    }
    function Bs(t, e, i) {
        var n, r, o, a, s = (i = i || {}).byIndex, l = i.stackedCoordDimension, h = !(!t || !t.get("stack"));
        if (f(e, function(t, i) {
            w(t) && (e[i] = t = {
                name: t
            }), h && !t.isExtraCoord && (s || n || !t.ordinalMeta || (n = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t));
        }), !r || s || n || (s = !0), r) {
            o = "__\0ecstackresult", a = "__\0ecstackedover", n && (n.createInvertedIndices = !0);
            var u = r.coordDim, c = r.type, d = 0;
            f(e, function(t) {
                t.coordDim === u && d++;
            }), e.push({
                name: o,
                coordDim: u,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({
                name: a,
                coordDim: a,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            });
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: n && n.name,
            isStackedByIndex: s,
            stackedOverDimension: a,
            stackResultDimension: o
        };
    }
    function zs(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension");
    }
    function Rs(t, e) {
        return zs(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
    }
    function Ns(t, e, i) {
        i = i || {}, Yr.isInstance(t) || (t = Yr.seriesDataToSource(t));
        var n, r = e.get("coordinateSystem"), o = po.get(r), a = Gr(e);
        a && (n = p(a.coordSysDims, function(t) {
            var e = {
                name: t
            }, i = a.axisMap.get(t);
            if (i) {
                var n = i.get("type");
                e.type = ms(n);
            }
            return e;
        })), n || (n = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || [ "x", "y" ]);
        var s, l, h = dm(t, {
            coordDimensions: n,
            generateCoord: i.generateCoord
        });
        a && f(h, function(t, e) {
            var i = t.coordDim, n = a.categoryAxisMap.get(i);
            n && (null == s && (s = e), t.ordinalMeta = n.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0);
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = Bs(e, h), c = new hm(h, e);
        c.setCalculationInfo(u);
        var d = null != s && Fs(t) ? function(t, e, i, n) {
            return n === s ? i : this.defaultDimValueGetter(t, e, i, n);
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, d), c;
    }
    function Fs(t) {
        if (t.sourceFormat === ig) {
            var e = Hs(t.data || []);
            return null != e && !_(mi(e));
        }
    }
    function Hs(t) {
        for (var e = 0; e < t.length && null == t[e]; ) e++;
        return t[e];
    }
    function Vs(t, e) {
        if ("image" !== this.type) {
            var i = this.style, n = this.shape;
            n && "line" === n.symbolType ? i.stroke = t : this.__isEmptyBrush ? (i.stroke = t, 
            i.fill = e || "#fff") : (i.fill && (i.fill = t), i.stroke && (i.stroke = t)), this.dirty(!1);
        }
    }
    function Ws(t, e, i, n, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Pn(t.slice(8), new ee(e, i, n, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? An(t.slice(7), {}, new ee(e, i, n, r), a ? "center" : "cover") : new _m({
            shape: {
                symbolType: t,
                x: e,
                y: i,
                width: n,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = Vs, l.setColor(o), l;
    }
    function Gs(t, e) {
        var i = t.mapDimension("defaultedLabel", !0), n = i.length;
        if (1 === n) return Ho(t, e, i[0]);
        if (n) {
            for (var r = [], o = 0; o < i.length; o++) {
                var a = Ho(t, e, i[o]);
                r.push(a);
            }
            return r.join(" ");
        }
    }
    function Xs(t, e, i) {
        Fc.call(this), this.updateData(t, e, i);
    }
    function Ys(t) {
        return [ t[0] / 2, t[1] / 2 ];
    }
    function Us(t, e) {
        this.parent.drift(t, e);
    }
    function qs(t, e) {
        if (!this.incremental && !this.useHoverLayer) if ("emphasis" === e) {
            var i = this.__symbolOriginalScale, n = i[1] / i[0], r = {
                scale: [ Math.max(1.1 * i[0], i[0] + 3), Math.max(1.1 * i[1], i[1] + 3 * n) ]
            };
            this.animateTo(r, 400, "elasticOut");
        } else "normal" === e && this.animateTo({
            scale: this.__symbolOriginalScale
        }, 400, "elasticOut");
    }
    function js(t) {
        this.group = new Fc(), this._symbolCtor = t || Xs;
    }
    function Zs(t, e, i, n) {
        return !(!e || isNaN(e[0]) || isNaN(e[1]) || n.isIgnore && n.isIgnore(i) || n.clipShape && !n.clipShape.contain(e[0], e[1]) || "none" === t.getItemVisual(i, "symbol"));
    }
    function Ks(t) {
        return null == t || b(t) || (t = {
            isIgnore: t
        }), t || {};
    }
    function $s(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle([ "color" ]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        };
    }
    function Qs(t, e, i) {
        var n, r = t.getBaseAxis(), o = t.getOtherAxis(r), a = Js(o, i), s = r.dim, l = o.dim, h = e.mapDimension(l), u = e.mapDimension(s), c = "x" === l || "radius" === l ? 1 : 0, d = p(t.dimensions, function(t) {
            return e.mapDimension(t);
        }), f = e.getCalculationInfo("stackResultDimension");
        return (n |= zs(e, d[0])) && (d[0] = f), (n |= zs(e, d[1])) && (d[1] = f), {
            dataDimsForPoint: d,
            valueStart: a,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!n,
            valueDim: h,
            baseDim: u,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        };
    }
    function Js(t, e) {
        var i = 0, n = t.scale.getExtent();
        return "start" === e ? i = n[0] : "end" === e ? i = n[1] : n[0] > 0 ? i = n[0] : n[1] < 0 && (i = n[1]), 
        i;
    }
    function tl(t, e, i, n) {
        var r = NaN;
        t.stacked && (r = i.get(i.getCalculationInfo("stackedOverDimension"), n)), isNaN(r) && (r = t.valueStart);
        var o = t.baseDataOffset, a = [];
        return a[o] = i.get(t.baseDim, n), a[1 - o] = r, e.dataToPoint(a);
    }
    function el(t, e) {
        var i = [];
        return e.diff(t).add(function(t) {
            i.push({
                cmd: "+",
                idx: t
            });
        }).update(function(t, e) {
            i.push({
                cmd: "=",
                idx: e,
                idx1: t
            });
        }).remove(function(t) {
            i.push({
                cmd: "-",
                idx: t
            });
        }).execute(), i;
    }
    function il(t) {
        return isNaN(t[0]) || isNaN(t[1]);
    }
    function nl(t, e, i, n, r, o, a, s, l, h) {
        return "none" !== h && h ? rl.apply(this, arguments) : ol.apply(this, arguments);
    }
    function rl(t, e, i, n, r, o, a, s, l, h, u) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (il(p)) {
                if (u) {
                    d += o;
                    continue;
                }
                break;
            }
            if (d === i) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]); else if (l > 0) {
                var g = e[c], v = "y" === h ? 1 : 0, m = (p[v] - g[v]) * l;
                Pm(Lm, g), Lm[v] = g[v] + m, Pm(Em, p), Em[v] = p[v] - m, t.bezierCurveTo(Lm[0], Lm[1], Em[0], Em[1], p[0], p[1]);
            } else t.lineTo(p[0], p[1]);
            c = d, d += o;
        }
        return f;
    }
    function ol(t, e, i, n, r, o, a, s, l, h, u) {
        for (var c = 0, d = i, f = 0; n > f; f++) {
            var p = e[d];
            if (d >= r || 0 > d) break;
            if (il(p)) {
                if (u) {
                    d += o;
                    continue;
                }
                break;
            }
            if (d === i) t[o > 0 ? "moveTo" : "lineTo"](p[0], p[1]), Pm(Lm, p); else if (l > 0) {
                var g = d + o, v = e[g];
                if (u) for (;v && il(e[g]); ) v = e[g += o];
                var m = .5, y = e[c];
                if (!(v = e[g]) || il(v)) Pm(Em, p); else {
                    il(v) && !u && (v = p), W(Om, v, y);
                    var _, x;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        _ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - v[w]);
                    } else _ = Ku(p, y), x = Ku(p, v);
                    Am(Em, p, Om, -l * (1 - (m = x / (x + _))));
                }
                km(Lm, Lm, s), Dm(Lm, Lm, a), km(Em, Em, s), Dm(Em, Em, a), t.bezierCurveTo(Lm[0], Lm[1], Em[0], Em[1], p[0], p[1]), 
                Am(Lm, p, Om, l * m);
            } else t.lineTo(p[0], p[1]);
            c = d, d += o;
        }
        return f;
    }
    function al(t, e) {
        var i = [ 1 / 0, 1 / 0 ], n = [ -1 / 0, -1 / 0 ];
        if (e) for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o[0] < i[0] && (i[0] = o[0]), o[1] < i[1] && (i[1] = o[1]), o[0] > n[0] && (n[0] = o[0]), 
            o[1] > n[1] && (n[1] = o[1]);
        }
        return {
            min: e ? i : n,
            max: e ? n : i
        };
    }
    function sl(t, e) {
        if (t.length === e.length) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i], r = e[i];
                if (n[0] !== r[0] || n[1] !== r[1]) return;
            }
            return !0;
        }
    }
    function ll(t) {
        return "number" == typeof t ? t : t ? .5 : 0;
    }
    function hl(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
            e[0] += n * i, e[1] -= n * i;
        }
        return e;
    }
    function ul(t, e, i) {
        if (!i.valueDim) return [];
        for (var n = [], r = 0, o = e.count(); o > r; r++) n.push(tl(i, t, e, r));
        return n;
    }
    function cl(t, e, i, n) {
        var r = hl(t.getAxis("x")), o = hl(t.getAxis("y")), a = t.getBaseAxis().isHorizontal(), s = Math.min(r[0], r[1]), l = Math.min(o[0], o[1]), h = Math.max(r[0], r[1]) - s, u = Math.max(o[0], o[1]) - l;
        if (i) s -= .5, h += .5, l -= .5, u += .5; else {
            var c = n.get("lineStyle.width") || 2, d = n.get("clipOverflow") ? c / 2 : Math.max(h, u);
            a ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
        }
        var f = new ap({
            shape: {
                x: s,
                y: l,
                width: h,
                height: u
            }
        });
        return e && (f.shape[a ? "width" : "height"] = 0, lr(f, {
            shape: {
                width: h,
                height: u
            }
        }, n)), f;
    }
    function dl(t, e, i, n) {
        var r = t.getAngleAxis(), o = t.getRadiusAxis().getExtent().slice();
        o[0] > o[1] && o.reverse();
        var a = r.getExtent(), s = Math.PI / 180;
        i && (o[0] -= .5, o[1] += .5);
        var l = new Qf({
            shape: {
                cx: br(t.cx, 1),
                cy: br(t.cy, 1),
                r0: br(o[0], 1),
                r: br(o[1], 1),
                startAngle: -a[0] * s,
                endAngle: -a[1] * s,
                clockwise: r.inverse
            }
        });
        return e && (l.shape.endAngle = -a[0] * s, lr(l, {
            shape: {
                endAngle: -a[1] * s
            }
        }, n)), l;
    }
    function fl(t, e, i, n) {
        return "polar" === t.type ? dl(t, e, i, n) : cl(t, e, i, n);
    }
    function pl(t, e, i) {
        for (var n = e.getBaseAxis(), r = "x" === n.dim || "radius" === n.dim ? 0 : 1, o = [], a = 0; a < t.length - 1; a++) {
            var s = t[a + 1], l = t[a];
            o.push(l);
            var h = [];
            switch (i) {
              case "end":
                h[r] = s[r], h[1 - r] = l[1 - r], o.push(h);
                break;

              case "middle":
                var u = (l[r] + s[r]) / 2, c = [];
                h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], o.push(h), o.push(c);
                break;

              default:
                h[r] = l[r], h[1 - r] = s[1 - r], o.push(h);
            }
        }
        return t[a] && o.push(t[a]), o;
    }
    function gl(t, e) {
        var i = t.getVisual("visualMeta");
        if (i && i.length && t.count()) {
            if ("cartesian2d" !== e.type) return void (Pu && console.warn("Visual map on line style is only supported on cartesian2d."));
            for (var n, r, o = i.length - 1; o >= 0; o--) {
                var a = i[o].dimension, s = t.dimensions[a], l = t.getDimensionInfo(s);
                if ("x" === (n = l && l.coordDim) || "y" === n) {
                    r = i[o];
                    break;
                }
            }
            if (!r) return void (Pu && console.warn("Visual map on line style only support x or y dimension."));
            var h = e.getAxis(n), u = p(r.stops, function(t) {
                return {
                    coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                    color: t.color
                };
            }), c = u.length, d = r.outerColors.slice();
            c && u[0].coord > u[c - 1].coord && (u.reverse(), d.reverse());
            var g = u[0].coord - 10, v = u[c - 1].coord + 10, m = v - g;
            if (.001 > m) return "transparent";
            f(u, function(t) {
                t.offset = (t.coord - g) / m;
            }), u.push({
                offset: c ? u[c - 1].offset : .5,
                color: d[1] || "transparent"
            }), u.unshift({
                offset: c ? u[0].offset : .5,
                color: d[0] || "transparent"
            });
            var y = new pp(0, 0, 0, 0, u, !0);
            return y[n] = g, y[n + "2"] = v, y;
        }
    }
    function vl(t, e, i) {
        var n = t.get("showAllSymbol"), r = "auto" === n;
        if (!n || r) {
            var o = i.getAxesByScale("ordinal")[0];
            if (o && (!r || !ml(o, e))) {
                var a = e.mapDimension(o.dim), s = {};
                return f(o.getViewLabels(), function(t) {
                    s[t.tickValue] = 1;
                }), function(t) {
                    return !s.hasOwnProperty(e.get(a, t));
                };
            }
        }
    }
    function ml(t, e) {
        var i = t.getExtent(), n = Math.abs(i[1] - i[0]) / t.scale.count();
        isNaN(n) && (n = 0);
        for (var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0; r > a; a += o) if (1.5 * Xs.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > n) return !1;
        return !0;
    }
    function yl(t) {
        this._setting = t || {}, this._extent = [ 1 / 0, -1 / 0 ], this._interval = 0, this.init && this.init.apply(this, arguments);
    }
    function _l(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, 
        this._map;
    }
    function xl(t) {
        return t._map || (t._map = R(t.categories));
    }
    function wl(t) {
        return b(t) && null != t.value ? t.value : t + "";
    }
    function bl(t, e, i, n) {
        var r = {}, o = t[1] - t[0], a = r.interval = Ar(o / e, !0);
        null != i && i > a && (a = r.interval = i), null != n && a > n && (a = r.interval = n);
        var s = r.intervalPrecision = Sl(a);
        return Tl(r.niceTickExtent = [ Wm(Math.ceil(t[0] / a) * a, s), Wm(Math.floor(t[1] / a) * a, s) ], t), 
        r;
    }
    function Sl(t) {
        return Sr(t) + 2;
    }
    function Ml(t, e, i) {
        t[e] = Math.max(Math.min(t[e], i[1]), i[0]);
    }
    function Tl(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Ml(t, 0, e), 
        Ml(t, 1, e), t[0] > t[1] && (t[0] = t[1]);
    }
    function Il(t, e, i, n) {
        var r = [];
        if (!t) return r;
        e[0] < i[0] && r.push(e[0]);
        for (var o = i[0]; o <= i[1] && (r.push(o), (o = Wm(o + t, n)) !== r[r.length - 1]); ) if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : i[1]) && r.push(e[1]), r;
    }
    function Cl(t) {
        return t.get("stack") || Ym + t.seriesIndex;
    }
    function kl(t) {
        return t.dim + t.index;
    }
    function Dl(t, e) {
        var i = [];
        return e.eachSeriesByType(t, function(t) {
            Ll(t) && !El(t) && i.push(t);
        }), i;
    }
    function Al(t) {
        var e = [];
        return f(t, function(t) {
            var i = t.getData(), n = t.coordinateSystem.getBaseAxis(), r = n.getExtent(), o = "category" === n.type ? n.getBandWidth() : Math.abs(r[1] - r[0]) / i.count(), a = wr(t.get("barWidth"), o), s = wr(t.get("barMaxWidth"), o), l = t.get("barGap"), h = t.get("barCategoryGap");
            e.push({
                bandWidth: o,
                barWidth: a,
                barMaxWidth: s,
                barGap: l,
                barCategoryGap: h,
                axisKey: kl(n),
                stackId: Cl(t)
            });
        }), Pl(e);
    }
    function Pl(t) {
        var e = {};
        f(t, function(t) {
            var i = t.axisKey, n = t.bandWidth, r = e[i] || {
                bandWidth: n,
                remainedWidth: n,
                autoWidthCount: 0,
                categoryGap: "20%",
                gap: "30%",
                stacks: {}
            }, o = r.stacks;
            e[i] = r;
            var a = t.stackId;
            o[a] || r.autoWidthCount++, o[a] = o[a] || {
                width: 0,
                maxWidth: 0
            };
            var s = t.barWidth;
            s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (o[a].maxWidth = l);
            var h = t.barGap;
            null != h && (r.gap = h);
            var u = t.barCategoryGap;
            null != u && (r.categoryGap = u);
        });
        var i = {};
        return f(e, function(t, e) {
            i[e] = {};
            var n = t.stacks, r = t.bandWidth, o = wr(t.categoryGap, r), a = wr(t.gap, 1), s = t.remainedWidth, l = t.autoWidthCount, h = (s - o) / (l + (l - 1) * a);
            h = Math.max(h, 0), f(n, function(t) {
                var e = t.maxWidth;
                e && h > e && (e = Math.min(e, s), t.width && (e = Math.min(e, t.width)), s -= e, 
                t.width = e, l--);
            }), h = (s - o) / (l + (l - 1) * a), h = Math.max(h, 0);
            var u, c = 0;
            f(n, function(t) {
                t.width || (t.width = h), u = t, c += t.width * (1 + a);
            }), u && (c -= u.width * a);
            var d = -c / 2;
            f(n, function(t, n) {
                i[e][n] = i[e][n] || {
                    offset: d,
                    width: t.width
                }, d += t.width * (1 + a);
            });
        }), i;
    }
    function Ol(t, e, i) {
        if (t && e) {
            var n = t[kl(e)];
            return null != n && null != i && (n = n[Cl(i)]), n;
        }
    }
    function Ll(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
    }
    function El(t) {
        return t.pipelineContext && t.pipelineContext.large;
    }
    function Bl(t, e) {
        return ny(t, iy(e));
    }
    function zl(t, e) {
        var i, n, r, o = t.type, a = e.getMin(), s = e.getMax(), l = null != a, h = null != s, u = t.getExtent();
        "ordinal" === o ? i = e.getCategories().length : (n = e.get("boundaryGap"), _(n) || (n = [ n || 0, n || 0 ]), 
        "boolean" == typeof n[0] && (Pu && console.warn('Boolean type for boundaryGap is only allowed for ordinal axis. Please use string in percentage instead, e.g., "20%". Currently, boundaryGap is set to be 0.'), 
        n = [ 0, 0 ]), n[0] = wr(n[0], 1), n[1] = wr(n[1], 1), r = u[1] - u[0] || Math.abs(u[0])), 
        null == a && (a = "ordinal" === o ? i ? 0 : NaN : u[0] - n[0] * r), null == s && (s = "ordinal" === o ? i ? i - 1 : NaN : u[1] + n[1] * r), 
        "dataMin" === a ? a = u[0] : "function" == typeof a && (a = a({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == a || !isFinite(a)) && (a = NaN), (null == s || !isFinite(s)) && (s = NaN), 
        t.setBlank(I(a) || I(s) || "ordinal" === o && !t.getOrdinalMeta().categories.length), 
        e.getNeedCrossZero() && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === o) {
            var d, p = Dl("bar", c);
            if (f(p, function(t) {
                d |= t.getBaseAxis() === e.axis;
            }), d) {
                var g = Al(p), v = Rl(a, s, e, g);
                a = v.min, s = v.max;
            }
        }
        return [ a, s ];
    }
    function Rl(t, e, i, n) {
        var r = i.axis.getExtent(), o = r[1] - r[0], a = Ol(n, i.axis);
        if (void 0 === a) return {
            min: t,
            max: e
        };
        var s = 1 / 0;
        f(a, function(t) {
            s = Math.min(t.offset, s);
        });
        var l = -1 / 0;
        f(a, function(t) {
            l = Math.max(t.offset + t.width, l);
        }), s = Math.abs(s), l = Math.abs(l);
        var h = s + l, u = e - t, c = u / (1 - (s + l) / o) - u;
        return e += c * (l / h), t -= c * (s / h), {
            min: t,
            max: e
        };
    }
    function Nl(t, e) {
        var i = zl(t, e), n = null != e.getMin(), r = null != e.getMax(), o = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var a = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: o,
            fixMin: n,
            fixMax: r,
            minInterval: "interval" === a || "time" === a ? e.get("minInterval") : null,
            maxInterval: "interval" === a || "time" === a ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s);
    }
    function Fl(t, e) {
        if (e = e || t.get("type")) switch (e) {
          case "category":
            return new Vm(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [ 1 / 0, -1 / 0 ]);

          case "value":
            return new Xm();

          default:
            return (yl.getClass(e) || Xm).create(t);
        }
    }
    function Hl(t) {
        var e = t.scale.getExtent(), i = e[0], n = e[1];
        return !(i > 0 && n > 0 || 0 > i && 0 > n);
    }
    function Vl(t) {
        var e = t.getLabelModel().get("formatter"), i = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function(e) {
            return function(i) {
                return i = t.scale.getLabel(i), e.replace("{value}", null != i ? i : "");
            };
        }(e) : "function" == typeof e ? function(n, r) {
            return null != i && (r = n - i), e(Wl(t, n), r);
        } : function(e) {
            return t.scale.getLabel(e);
        };
    }
    function Wl(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e;
    }
    function Gl(t) {
        var e = t.model, i = t.scale;
        if (e.get("axisLabel.show") && !i.isBlank()) {
            var n, r, o = "category" === t.type, a = i.getExtent();
            o ? r = i.count() : (n = i.getTicks(), r = n.length);
            var s, l = t.getLabelModel(), h = Vl(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; r > c; c += u) {
                var d = h(n ? n[c] : a[0] + c), f = Xl(l.getTextRect(d), l.get("rotate") || 0);
                s ? s.union(f) : s = f;
            }
            return s;
        }
    }
    function Xl(t, e) {
        var i = e * Math.PI / 180, n = t.plain(), r = n.width, o = n.height, a = r * Math.cos(i) + o * Math.sin(i), s = r * Math.sin(i) + o * Math.cos(i);
        return new ee(n.x, n.y, a, s);
    }
    function Yl(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e;
    }
    function Ul(t) {
        return "category" === t.type && 0 === Yl(t.getLabelModel());
    }
    function ql(t) {
        return this._axes[t];
    }
    function jl(t) {
        hy.call(this, t);
    }
    function Zl(t) {
        return "category" === t.type ? $l(t) : th(t);
    }
    function Kl(t, e) {
        return "category" === t.type ? Jl(t, e) : {
            ticks: t.scale.getTicks()
        };
    }
    function $l(t) {
        var e = t.getLabelModel(), i = Ql(t, e);
        return !e.get("show") || t.scale.isBlank() ? {
            labels: [],
            labelCategoryInterval: i.labelCategoryInterval
        } : i;
    }
    function Ql(t, e) {
        var i = eh(t, "labels"), n = Yl(e), r = ih(i, n);
        if (r) return r;
        var o, a;
        return x(n) ? o = lh(t, n) : (a = "auto" === n ? rh(t) : n, o = sh(t, a)), nh(i, n, {
            labels: o,
            labelCategoryInterval: a
        });
    }
    function Jl(t, e) {
        var i = eh(t, "ticks"), n = Yl(e), r = ih(i, n);
        if (r) return r;
        var o, a;
        if ((!e.get("show") || t.scale.isBlank()) && (o = []), x(n)) o = lh(t, n, !0); else if ("auto" === n) {
            var s = Ql(t, t.getLabelModel());
            a = s.labelCategoryInterval, o = p(s.labels, function(t) {
                return t.tickValue;
            });
        } else a = n, o = sh(t, a, !0);
        return nh(i, n, {
            ticks: o,
            tickCategoryInterval: a
        });
    }
    function th(t) {
        var e = t.scale.getTicks(), i = Vl(t);
        return {
            labels: p(e, function(e, n) {
                return {
                    formattedLabel: i(e, n),
                    rawLabel: t.scale.getLabel(e),
                    tickValue: e
                };
            })
        };
    }
    function eh(t, e) {
        return uy(t)[e] || (uy(t)[e] = []);
    }
    function ih(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i].key === e) return t[i].value;
    }
    function nh(t, e, i) {
        return t.push({
            key: e,
            value: i
        }), i;
    }
    function rh(t) {
        var e = uy(t).autoInterval;
        return null != e ? e : uy(t).autoInterval = t.calculateCategoryInterval();
    }
    function oh(t) {
        var e = ah(t), i = Vl(t), n = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(), a = r.count();
        if (o[1] - o[0] < 1) return 0;
        var s = 1;
        a > 40 && (s = Math.max(1, Math.floor(a / 40)));
        for (var l = o[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(n)), c = Math.abs(h * Math.sin(n)), d = 0, f = 0; l <= o[1]; l += s) {
            var p = 0, g = 0, v = xe(i(l), e.font, "center", "top");
            p = 1.3 * v.width, g = 1.3 * v.height, d = Math.max(d, p, 7), f = Math.max(f, g, 7);
        }
        var m = d / u, y = f / c;
        isNaN(m) && (m = 1 / 0), isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(m, y))), x = uy(t.model), w = x.lastAutoInterval, b = x.lastTickCount;
        return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - a) <= 1 && w > _ ? _ = w : (x.lastTickCount = a, 
        x.lastAutoInterval = _), _;
    }
    function ah(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        };
    }
    function sh(t, e, i) {
        function n(t) {
            l.push(i ? t : {
                formattedLabel: r(t),
                rawLabel: o.getLabel(t),
                tickValue: t
            });
        }
        var r = Vl(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], h = Math.max((e || 0) + 1, 1), u = a[0], c = o.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var d = Ul(t), f = s.get("showMinLabel") || d, p = s.get("showMaxLabel") || d;
        f && u !== a[0] && n(a[0]);
        for (var g = u; g <= a[1]; g += h) n(g);
        return p && g - h !== a[1] && n(a[1]), l;
    }
    function lh(t, e, i) {
        var n = t.scale, r = Vl(t), o = [];
        return f(n.getTicks(), function(t) {
            var a = n.getLabel(t);
            e(t, a) && o.push(i ? t : {
                formattedLabel: r(t),
                rawLabel: a,
                tickValue: t
            });
        }), o;
    }
    function hh(t, e) {
        var i = (t[1] - t[0]) / e / 2;
        t[0] += i, t[1] -= i;
    }
    function uh(t, e, i, n, r) {
        function o(t, e) {
            return u ? t > e : e > t;
        }
        var a = e.length;
        if (t.onBand && !n && a) {
            var s, l = t.getExtent();
            if (1 === a) e[0].coord = l[0], s = e[1] = {
                coord: l[0]
            }; else {
                var h = e[1].coord - e[0].coord;
                f(e, function(t) {
                    t.coord -= h / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= h / (2 * (e + 1)));
                }), s = {
                    coord: e[a - 1].coord + h
                }, e.push(s);
            }
            var u = l[0] > l[1];
            o(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && o(l[0], e[0].coord) && e.unshift({
                coord: l[0]
            }), o(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && o(s.coord, l[1]) && e.push({
                coord: l[1]
            });
        }
    }
    function ch(t, e) {
        return e.type || (e.data ? "category" : "value");
    }
    function dh(t, e) {
        return t.getCoordSysModel() === e;
    }
    function fh(t, e, i) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], 
        this._initCartesian(t, e, i), this.model = t;
    }
    function ph(t, e, i, n) {
        function r(t) {
            return t.dim + "_" + t.index;
        }
        i.getAxesOnZeroOf = function() {
            return o ? [ o ] : [];
        };
        var o, a = t[e], s = i.model, l = s.get("axisLine.onZero"), h = s.get("axisLine.onZeroAxisIndex");
        if (l) {
            if (null != h) gh(a[h]) && (o = a[h]); else for (var u in a) if (a.hasOwnProperty(u) && gh(a[u]) && !n[r(a[u])]) {
                o = a[u];
                break;
            }
            o && (n[r(o)] = !0);
        }
    }
    function gh(t) {
        return t && "category" !== t.type && "time" !== t.type && Hl(t);
    }
    function vh(t, e) {
        var i = t.getExtent(), n = i[0] + i[1];
        t.toGlobalCoord = "x" === t.dim ? function(t) {
            return t + e;
        } : function(t) {
            return n - t + e;
        }, t.toLocalCoord = "x" === t.dim ? function(t) {
            return t - e;
        } : function(t) {
            return n - t + e;
        };
    }
    function mh(t) {
        return p(by, function(e) {
            var i = t.getReferringComponents(e)[0];
            if (Pu && !i) throw new Error(e + ' "' + C(t.get(e + "Index"), t.get(e + "Id"), 0) + '" not found');
            return i;
        });
    }
    function yh(t) {
        return "cartesian2d" === t.get("coordinateSystem");
    }
    function _h(t, e, i, n) {
        var r, o, a = Tr(i - t.rotation), s = n[0] > n[1], l = "start" === e && !s || "start" !== e && s;
        return Ir(a - Sy / 2) ? (o = l ? "bottom" : "top", r = "center") : Ir(a - 1.5 * Sy) ? (o = l ? "top" : "bottom", 
        r = "center") : (o = "middle", r = 1.5 * Sy > a && a > Sy / 2 ? l ? "left" : "right" : l ? "right" : "left"), 
        {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        };
    }
    function xh(t, e, i) {
        if (!Ul(t.axis)) {
            var n = t.get("axisLabel.showMinLabel"), r = t.get("axisLabel.showMaxLabel");
            e = e || [], i = i || [];
            var o = e[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], h = i[0], u = i[1], c = i[i.length - 1], d = i[i.length - 2];
            !1 === n ? (wh(o), wh(h)) : bh(o, a) && (n ? (wh(a), wh(u)) : (wh(o), wh(h))), !1 === r ? (wh(s), 
            wh(c)) : bh(l, s) && (r ? (wh(l), wh(d)) : (wh(s), wh(c)));
        }
    }
    function wh(t) {
        t && (t.ignore = !0);
    }
    function bh(t, e) {
        var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
        if (i && n) {
            var r = mt([]);
            return wt(r, r, -t.rotation), i.applyTransform(_t([], r, t.getLocalTransform())), 
            n.applyTransform(_t([], r, e.getLocalTransform())), i.intersect(n);
        }
    }
    function Sh(t) {
        return "middle" === t || "center" === t;
    }
    function Mh(t, e, i) {
        var n = e.axis;
        if (e.get("axisTick.show") && !n.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), o = r.getModel("lineStyle"), a = r.get("length"), l = n.getTicksCoords(), h = [], u = [], c = t._transform, d = [], f = 0; f < l.length; f++) {
                var p = l[f].coord;
                h[0] = p, h[1] = 0, u[0] = p, u[1] = i.tickDirection * a, c && (j(h, h, c), j(u, u, c));
                var g = new lp({
                    anid: "tick_" + l[f].tickValue,
                    subPixelOptimize: !0,
                    shape: {
                        x1: h[0],
                        y1: h[1],
                        x2: u[0],
                        y2: u[1]
                    },
                    style: s(o.getLineStyle(), {
                        stroke: e.get("axisLine.lineStyle.color")
                    }),
                    z2: 2,
                    silent: !0
                });
                t.group.add(g), d.push(g);
            }
            return d;
        }
    }
    function Th(t, e, i) {
        var n = e.axis;
        if (C(i.axisLabelShow, e.get("axisLabel.show")) && !n.scale.isBlank()) {
            var r = e.getModel("axisLabel"), o = r.get("margin"), a = n.getViewLabels(), s = (C(i.labelRotate, r.get("rotate")) || 0) * Sy / 180, l = Cy(i.rotation, s, i.labelDirection), h = e.getCategories && e.getCategories(!0), u = [], c = ky(e), d = e.get("triggerEvent");
            return f(a, function(a, s) {
                var f = a.tickValue, p = a.formattedLabel, g = a.rawLabel, v = r;
                h && h[f] && h[f].textStyle && (v = new gr(h[f].textStyle, r, e.ecModel));
                var m = v.getTextColor() || e.get("axisLine.lineStyle.color"), y = [ n.dataToCoord(f), i.labelOffset + i.labelDirection * o ], _ = new jf({
                    anid: "label_" + f,
                    position: y,
                    rotation: l.rotation,
                    silent: c,
                    z2: 10
                });
                Qn(_.style, v, {
                    text: p,
                    textAlign: v.getShallow("align", !0) || l.textAlign,
                    textVerticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || l.textVerticalAlign,
                    textFill: "function" == typeof m ? m("category" === n.type ? g : "value" === n.type ? f + "" : f, s) : m
                }), d && (_.eventData = Iy(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), 
                t._dumbGroup.add(_), _.updateTransform(), u.push(_), t.group.add(_), _.decomposeTransform();
            }), u;
        }
    }
    function Ih(t, e) {
        var i = {
            axesInfo: {},
            seriesInvolved: !1,
            coordSysAxesInfo: {},
            coordSysMap: {}
        };
        return Ch(i, t, e), i.seriesInvolved && Dh(i, t), i;
    }
    function Ch(t, e, i) {
        var n = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
        Dy(i.getCoordinateSystems(), function(i) {
            function s(n, s, l) {
                var c = l.model.getModel("axisPointer", r), d = c.get("show");
                if (d && ("auto" !== d || n || Bh(c))) {
                    null == s && (s = c.get("triggerTooltip"));
                    var f = (c = n ? kh(l, u, r, e, n, s) : c).get("snap"), p = zh(l.model), g = s || f || "category" === l.type, v = t.axesInfo[p] = {
                        key: p,
                        axis: l,
                        coordSys: i,
                        axisPointerModel: c,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: Bh(c),
                        seriesModels: []
                    };
                    h[p] = v, t.seriesInvolved |= g;
                    var m = Ah(o, l);
                    if (null != m) {
                        var y = a[m] || (a[m] = {
                            axesInfo: {}
                        });
                        y.axesInfo[p] = v, y.mapper = o[m].mapper, v.linkGroup = y;
                    }
                }
            }
            if (i.axisPointerEnabled) {
                var l = zh(i.model), h = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = i;
                var u = i.model.getModel("tooltip", n);
                if (Dy(i.getAxes(), Ay(s, !1, null)), i.getTooltipAxes && n && u.get("show")) {
                    var c = "axis" === u.get("trigger"), d = "cross" === u.get("axisPointer.type"), f = i.getTooltipAxes(u.get("axisPointer.axis"));
                    (c || d) && Dy(f.baseAxes, Ay(s, !d || "cross", c)), d && Dy(f.otherAxes, Ay(s, "cross", !1));
                }
            }
        });
    }
    function kh(t, e, i, r, o, a) {
        var l = e.getModel("axisPointer"), h = {};
        Dy([ "type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z" ], function(t) {
            h[t] = n(l.get(t));
        }), h.snap = "category" !== t.type && !!a, "cross" === l.get("type") && (h.type = "line");
        var u = h.label || (h.label = {});
        if (null == u.show && (u.show = !1), "cross" === o) {
            var c = l.get("label.show");
            if (u.show = null == c || c, !a) {
                var d = h.lineStyle = l.get("crossStyle");
                d && s(u, d.textStyle);
            }
        }
        return t.model.getModel("axisPointer", new gr(h, i, r));
    }
    function Dh(t, e) {
        e.eachSeries(function(e) {
            var i = e.coordinateSystem, n = e.get("tooltip.trigger", !0), r = e.get("tooltip.show", !0);
            i && "none" !== n && !1 !== n && "item" !== n && !1 !== r && !1 !== e.get("axisPointer.show", !0) && Dy(t.coordSysAxesInfo[zh(i.model)], function(t) {
                var n = t.axis;
                i.getAxis(n.dim) === n && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), 
                t.seriesDataCount += e.getData().count());
            });
        }, this);
    }
    function Ah(t, e) {
        for (var i = e.model, n = e.dim, r = 0; r < t.length; r++) {
            var o = t[r] || {};
            if (Ph(o[n + "AxisId"], i.id) || Ph(o[n + "AxisIndex"], i.componentIndex) || Ph(o[n + "AxisName"], i.name)) return r;
        }
    }
    function Ph(t, e) {
        return "all" === t || _(t) && h(t, e) >= 0 || t === e;
    }
    function Oh(t) {
        var e = Lh(t);
        if (e) {
            var i = e.axisPointerModel, n = e.axis.scale, r = i.option, o = i.get("status"), a = i.get("value");
            null != a && (a = n.parse(a));
            var s = Bh(i);
            null == o && (r.status = s ? "show" : "hide");
            var l = n.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), 
            r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show");
        }
    }
    function Lh(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[zh(t)];
    }
    function Eh(t) {
        var e = Lh(t);
        return e && e.axisPointerModel;
    }
    function Bh(t) {
        return !!t.get("handle.show");
    }
    function zh(t) {
        return t.type + "||" + t.id;
    }
    function Rh(t, e, i, n, r, o) {
        var a = Py.getAxisPointerClass(t.axisPointerClass);
        if (a) {
            var s = Eh(e);
            s ? (t._axisPointer || (t._axisPointer = new a())).render(e, s, n, o) : Nh(t, n);
        }
    }
    function Nh(t, e, i) {
        var n = t._axisPointer;
        n && n.dispose(e, i), t._axisPointer = null;
    }
    function Fh(t, e, i) {
        i = i || {};
        var n = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position, l = a ? "onZero" : s, h = r.dim, u = n.getRect(), c = [ u.x, u.x + u.width, u.y, u.y + u.height ], d = {
            left: 0,
            right: 1,
            top: 0,
            bottom: 1,
            onZero: 2
        }, f = e.get("offset") || 0, p = "x" === h ? [ c[2] - f, c[3] + f ] : [ c[0] - f, c[1] + f ];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            p[d.onZero] = Math.max(Math.min(g, p[1]), p[0]);
        }
        o.position = [ "y" === h ? p[d[l]] : c[0], "x" === h ? p[d[l]] : c[3] ], o.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
        var v = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        };
        o.labelDirection = o.tickDirection = o.nameDirection = v[s], o.labelOffset = a ? p[d[s]] - p[d.onZero] : 0, 
        e.get("axisTick.inside") && (o.tickDirection = -o.tickDirection), C(i.labelInside, e.get("axisLabel.inside")) && (o.labelDirection = -o.labelDirection);
        var m = e.get("axisLabel.rotate");
        return o.labelRotate = "top" === l ? -m : m, o.z2 = 1, o;
    }
    function Hh(t, e, i, n, r) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e)) {
            if (!t.involveSeries) return void i.showPointer(t, e);
            var s = Vh(e, t), l = s.payloadBatch, h = s.snapToValue;
            l[0] && null == r.seriesIndex && a(r, l[0]), !n && t.snap && o.containData(h) && null != h && (e = h), 
            i.showPointer(t, e, l, r), i.showTooltip(t, s, h);
        }
    }
    function Vh(t, e) {
        var i = e.axis, n = i.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
        return Ry(e.seriesModels, function(e) {
            var l, h, u = e.getData().mapDimension(n, !0);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(u, t, i);
                h = c.dataIndices, l = c.nestestValue;
            } else {
                if (!(h = e.getData().indicesOfNearest(u[0], t, "category" === i.type ? .5 : null)).length) return;
                l = e.getData().get(u[0], h[0]);
            }
            if (null != l && isFinite(l)) {
                var d = t - l, f = Math.abs(d);
                a >= f && ((a > f || d >= 0 && 0 > s) && (a = f, s = d, r = l, o.length = 0), Ry(h, function(t) {
                    o.push({
                        seriesIndex: e.seriesIndex,
                        dataIndexInside: t,
                        dataIndex: e.getData().getRawIndex(t)
                    });
                }));
            }
        }), {
            payloadBatch: o,
            snapToValue: r
        };
    }
    function Wh(t, e, i, n) {
        t[e.key] = {
            value: i,
            payloadBatch: n
        };
    }
    function Gh(t, e, i, n) {
        var r = i.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, h = zh(l), u = t.map[h];
            u || (u = t.map[h] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(u)), u.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: n,
                valueLabelOpt: {
                    precision: s.get("label.precision"),
                    formatter: s.get("label.formatter")
                },
                seriesDataIndices: r.slice()
            });
        }
    }
    function Xh(t, e, i) {
        var n = i.axesInfo = [];
        Ry(e, function(e, i) {
            var r = e.axisPointerModel.option, o = t[i];
            o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), 
            "show" === r.status && n.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            });
        });
    }
    function Yh(t, e, i, n) {
        if (!Zh(e) && t.list.length) {
            var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
            n({
                type: "showTip",
                escapeConnect: !0,
                x: e[0],
                y: e[1],
                tooltipOption: i.tooltipOption,
                position: i.position,
                dataIndexInside: r.dataIndexInside,
                dataIndex: r.dataIndex,
                seriesIndex: r.seriesIndex,
                dataByCoordSys: t.list
            });
        } else n({
            type: "hideTip"
        });
    }
    function Uh(t, e, i) {
        var n = i.getZr(), r = "axisPointerLastHighlights", o = Fy(n)[r] || {}, a = Fy(n)[r] = {};
        Ry(t, function(t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && Ry(e.seriesDataIndices, function(t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                a[e] = t;
            });
        });
        var s = [], l = [];
        f(o, function(t, e) {
            !a[e] && l.push(t);
        }), f(a, function(t, e) {
            !o[e] && s.push(t);
        }), l.length && i.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            batch: l
        }), s.length && i.dispatchAction({
            type: "highlight",
            escapeConnect: !0,
            batch: s
        });
    }
    function qh(t, e) {
        for (var i = 0; i < (t || []).length; i++) {
            var n = t[i];
            if (e.axis.dim === n.axisDim && e.axis.model.componentIndex === n.axisIndex) return n;
        }
    }
    function jh(t) {
        var e = t.axis.model, i = {}, n = i.axisDim = t.axis.dim;
        return i.axisIndex = i[n + "AxisIndex"] = e.componentIndex, i.axisName = i[n + "AxisName"] = e.name, 
        i.axisId = i[n + "AxisId"] = e.id, i;
    }
    function Zh(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
    }
    function Kh(t, e, i) {
        if (!Bu.node) {
            var n = e.getZr();
            Hy(n).records || (Hy(n).records = {}), $h(n, e), (Hy(n).records[t] || (Hy(n).records[t] = {})).handler = i;
        }
    }
    function $h(t, e) {
        function i(i, n) {
            t.on(i, function(i) {
                var r = eu(e);
                Vy(Hy(t).records, function(t) {
                    t && n(t, i, r.dispatchAction);
                }), Qh(r.pendings, e);
            });
        }
        Hy(t).initialized || (Hy(t).initialized = !0, i("click", y(tu, "click")), i("mousemove", y(tu, "mousemove")), 
        i("globalout", Jh));
    }
    function Qh(t, e) {
        var i, n = t.showTip.length, r = t.hideTip.length;
        n ? i = t.showTip[n - 1] : r && (i = t.hideTip[r - 1]), i && (i.dispatchAction = null, 
        e.dispatchAction(i));
    }
    function Jh(t, e, i) {
        t.handler("leave", null, i);
    }
    function tu(t, e, i, n) {
        e.handler(t, i, n);
    }
    function eu(t) {
        var e = {
            showTip: [],
            hideTip: []
        };
        return {
            dispatchAction: function i(n) {
                var r = e[n.type];
                r ? r.push(n) : (n.dispatchAction = i, t.dispatchAction(n));
            },
            pendings: e
        };
    }
    function iu(t, e) {
        if (!Bu.node) {
            var i = e.getZr();
            (Hy(i).records || {})[t] && (Hy(i).records[t] = null);
        }
    }
    function nu() {}
    function ru(t, e, i, n) {
        ou(Gy(i).lastProp, n) || (Gy(i).lastProp = n, e ? sr(i, n, t) : (i.stopAnimation(), 
        i.attr(n)));
    }
    function ou(t, e) {
        if (b(t) && b(e)) {
            var i = !0;
            return f(e, function(e, n) {
                i = i && ou(t[n], e);
            }), !!i;
        }
        return t === e;
    }
    function au(t, e) {
        t[e.get("label.show") ? "show" : "hide"]();
    }
    function su(t) {
        return {
            position: t.position.slice(),
            rotation: t.rotation || 0
        };
    }
    function lu(t, e, i) {
        var n = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function(t) {
            "group" !== t.type && (null != n && (t.z = n), null != r && (t.zlevel = r), t.silent = i);
        });
    }
    function hu(t) {
        var e, i = t.get("type"), n = t.getModel(i + "Style");
        return "line" === i ? (e = n.getLineStyle(), e.fill = null) : "shadow" === i && (e = n.getAreaStyle(), 
        e.stroke = null), e;
    }
    function uu(t, e, i, n, r) {
        var o = du(i.get("value"), e.axis, e.ecModel, i.get("seriesDataIndices"), {
            precision: i.get("label.precision"),
            formatter: i.get("label.formatter")
        }), a = i.getModel("label"), s = Fp(a.get("padding") || 0), l = a.getFont(), h = xe(o, l), u = r.position, c = h.width + s[1] + s[3], d = h.height + s[0] + s[2], f = r.align;
        "right" === f && (u[0] -= c), "center" === f && (u[0] -= c / 2);
        var p = r.verticalAlign;
        "bottom" === p && (u[1] -= d), "middle" === p && (u[1] -= d / 2), cu(u, c, d, n);
        var g = a.get("backgroundColor");
        g && "auto" !== g || (g = e.get("axisLine.lineStyle.color")), t.label = {
            shape: {
                x: 0,
                y: 0,
                width: c,
                height: d,
                r: a.get("borderRadius")
            },
            position: u.slice(),
            style: {
                text: o,
                textFont: l,
                textFill: a.getTextColor(),
                textPosition: "inside",
                textPadding: s,
                fill: g,
                stroke: a.get("borderColor") || "transparent",
                lineWidth: a.get("borderWidth") || 0,
                shadowBlur: a.get("shadowBlur"),
                shadowColor: a.get("shadowColor"),
                shadowOffsetX: a.get("shadowOffsetX"),
                shadowOffsetY: a.get("shadowOffsetY")
            },
            z2: 10
        };
    }
    function cu(t, e, i, n) {
        var r = n.getWidth(), o = n.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + i, o) - i, t[0] = Math.max(t[0], 0), 
        t[1] = Math.max(t[1], 0);
    }
    function du(t, e, i, n, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel(t, {
            precision: r.precision
        }), a = r.formatter;
        if (a) {
            var s = {
                value: Wl(e, t),
                axisDimension: e.dim,
                axisIndex: e.index,
                seriesData: []
            };
            f(n, function(t) {
                var e = i.getSeriesByIndex(t.seriesIndex), n = t.dataIndexInside, r = e && e.getDataParams(n);
                r && s.seriesData.push(r);
            }), w(a) ? o = a.replace("{value}", o) : x(a) && (o = a(s));
        }
        return o;
    }
    function fu(t, e, i) {
        var n = vt();
        return wt(n, n, i.rotation), xt(n, n, i.position), hr([ t.dataToCoord(e), (i.labelOffset || 0) + (i.labelDirection || 1) * (i.labelMargin || 0) ], n);
    }
    function pu(t, e, i, n, r, o) {
        var a = My.innerTextLayout(i.rotation, 0, i.labelDirection);
        i.labelMargin = r.get("label.margin"), uu(e, n, r, o, {
            position: fu(n.axis, t, i),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
        });
    }
    function gu(t, e, i) {
        return i = i || 0, {
            x1: t[i],
            y1: t[1 - i],
            x2: e[i],
            y2: e[1 - i]
        };
    }
    function vu(t, e, i) {
        return i = i || 0, {
            x: t[i],
            y: t[1 - i],
            width: e[i],
            height: e[1 - i]
        };
    }
    function mu(t, e) {
        var i = {};
        return i[e.dim + "AxisIndex"] = e.index, t.getCartesian(i);
    }
    function yu(t) {
        return "x" === t.dim ? 0 : 1;
    }
    function _u(t) {
        var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
        return p(Ky, function(t) {
            return t + "transition:" + i;
        }).join(";");
    }
    function xu(t) {
        var e = [], i = t.get("fontSize"), n = t.getTextColor();
        return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), 
        jy([ "decoration", "align" ], function(i) {
            var n = t.get(i);
            n && e.push("text-" + i + ":" + n);
        }), e.join(";");
    }
    function wu(t) {
        var e = [], i = t.get("transitionDuration"), n = t.get("backgroundColor"), r = t.getModel("textStyle"), o = t.get("padding");
        return i && e.push(_u(i)), n && (Bu.canvasSupported ? e.push("background-Color:" + n) : (e.push("background-Color:#" + Rt(n)), 
        e.push("filter:alpha(opacity=70)"))), jy([ "width", "color", "radius" ], function(i) {
            var n = "border-" + i, r = Zy(n), o = t.get(r);
            null != o && e.push(n + ":" + o + ("color" === i ? "" : "px"));
        }), e.push(xu(r)), null != o && e.push("padding:" + Fp(o).join("px ") + "px"), e.join(";") + ";";
    }
    function bu(t, e) {
        if (Bu.wxa) return null;
        var i = document.createElement("div"), n = this._zr = e.getZr();
        this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), 
        this._container = t, this._show = !1, this._hideTimeout;
        var r = this;
        i.onmouseenter = function() {
            r._enterable && (clearTimeout(r._hideTimeout), r._show = !0), r._inContent = !0;
        }, i.onmousemove = function(e) {
            if (e = e || window.event, !r._enterable) {
                var i = n.handler;
                st(t, e, !0), i.dispatch("mousemove", e);
            }
        }, i.onmouseleave = function() {
            r._enterable && r._show && r.hideLater(r._hideDelay), r._inContent = !1;
        };
    }
    function Su(t) {
        this._zr = t.getZr(), this._show = !1, this._hideTimeout;
    }
    function Mu(t) {
        for (var e = t.pop(); t.length; ) {
            var i = t.pop();
            i && (gr.isInstance(i) && (i = i.get("tooltip", !0)), "string" == typeof i && (i = {
                formatter: i
            }), e = new gr(i, e, e.ecModel));
        }
        return e;
    }
    function Tu(t, e) {
        return t.dispatchAction || m(e.dispatchAction, e);
    }
    function Iu(t, e, i, n, r, o, a) {
        var s = i.getOuterSize(), l = s.width, h = s.height;
        return null != o && (t + l + o > n ? t -= l + o : t += o), null != a && (e + h + a > r ? e -= h + a : e += a), 
        [ t, e ];
    }
    function Cu(t, e, i, n, r) {
        var o = i.getOuterSize(), a = o.width, s = o.height;
        return t = Math.min(t + a, n) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), 
        e = Math.max(e, 0), [ t, e ];
    }
    function ku(t, e, i) {
        var n = i[0], r = i[1], o = 0, a = 0, s = e.width, l = e.height;
        switch (t) {
          case "inside":
            o = e.x + s / 2 - n / 2, a = e.y + l / 2 - r / 2;
            break;

          case "top":
            o = e.x + s / 2 - n / 2, a = e.y - r - 5;
            break;

          case "bottom":
            o = e.x + s / 2 - n / 2, a = e.y + l + 5;
            break;

          case "left":
            o = e.x - n - 5, a = e.y + l / 2 - r / 2;
            break;

          case "right":
            o = e.x + s + 5, a = e.y + l / 2 - r / 2;
        }
        return [ o, a ];
    }
    function Du(t) {
        return "center" === t || "middle" === t;
    }
    var Au;
    "undefined" != typeof window ? Au = window.__DEV__ : "undefined" != typeof global && (Au = global.__DEV__), 
    void 0 === Au && (Au = !0);
    var Pu = Au, Ou = 2311, Lu = function() {
        return Ou++;
    }, Eu = {}, Bu = Eu = "object" == ("undefined" == typeof wx ? "undefined" : t(wx)) && "function" == typeof wx.getSystemInfoSync ? {
        browser: {},
        os: {},
        node: !1,
        wxa: !0,
        canvasSupported: !0,
        svgSupported: !1,
        touchEventsSupported: !0,
        domSupported: !1
    } : "undefined" == typeof document && "undefined" != typeof self ? {
        browser: {},
        os: {},
        node: !1,
        worker: !0,
        canvasSupported: !0,
        domSupported: !1
    } : "undefined" == typeof navigator ? {
        browser: {},
        os: {},
        node: !0,
        worker: !1,
        canvasSupported: !0,
        svgSupported: !0,
        domSupported: !1
    } : function(t) {
        var e = {}, i = {}, n = t.match(/Firefox\/([\d.]+)/), r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge\/([\d.]+)/), a = /micromessenger/i.test(t);
        return n && (i.firefox = !0, i.version = n[1]), r && (i.ie = !0, i.version = r[1]), 
        o && (i.edge = !0, i.version = o[1]), a && (i.weChat = !0), {
            browser: i,
            os: e,
            node: !1,
            canvasSupported: !!document.createElement("canvas").getContext,
            svgSupported: "undefined" != typeof SVGRect,
            touchEventsSupported: "ontouchstart" in window && !i.ie && !i.edge,
            pointerEventsSupported: "onpointerdown" in window && (i.edge || i.ie && i.version >= 11),
            domSupported: "undefined" != typeof document
        };
    }(navigator.userAgent), zu = {
        "[object Function]": 1,
        "[object RegExp]": 1,
        "[object Date]": 1,
        "[object Error]": 1,
        "[object CanvasGradient]": 1,
        "[object CanvasPattern]": 1,
        "[object Image]": 1,
        "[object Canvas]": 1
    }, Ru = {
        "[object Int8Array]": 1,
        "[object Uint8Array]": 1,
        "[object Uint8ClampedArray]": 1,
        "[object Int16Array]": 1,
        "[object Uint16Array]": 1,
        "[object Int32Array]": 1,
        "[object Uint32Array]": 1,
        "[object Float32Array]": 1,
        "[object Float64Array]": 1
    }, Nu = Object.prototype.toString, Fu = Array.prototype, Hu = Fu.forEach, Vu = Fu.filter, Wu = Fu.slice, Gu = Fu.map, Xu = Fu.reduce, Yu = {}, Uu = function() {
        return Yu.createCanvas();
    };
    Yu.createCanvas = function() {
        return document.createElement("canvas");
    };
    var qu, ju = "__ec_primitive__";
    z.prototype = {
        constructor: z,
        get: function(t) {
            return this.data.hasOwnProperty(t) ? this.data[t] : null;
        },
        set: function(t, e) {
            return this.data[t] = e;
        },
        each: function(t, e) {
            void 0 !== e && (t = m(t, e));
            for (var i in this.data) this.data.hasOwnProperty(i) && t(this.data[i], i);
        },
        removeKey: function(t) {
            delete this.data[t];
        }
    };
    var Zu = "undefined" == typeof Float32Array ? Array : Float32Array, Ku = q, $u = function(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
    };
    $.prototype = {
        constructor: $,
        _dragStart: function(t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, 
            this._y = t.offsetY, this.dispatchToElement(Q(e, t), "dragstart", t.event));
        },
        _drag: function(t) {
            var e = this._draggingTarget;
            if (e) {
                var i = t.offsetX, n = t.offsetY, r = i - this._x, o = n - this._y;
                this._x = i, this._y = n, e.drift(r, o, t), this.dispatchToElement(Q(e, t), "drag", t.event);
                var a = this.findHover(i, n, e).target, s = this._dropTarget;
                this._dropTarget = a, e !== a && (s && a !== s && this.dispatchToElement(Q(s, t), "dragleave", t.event), 
                a && a !== s && this.dispatchToElement(Q(a, t), "dragenter", t.event));
            }
        },
        _dragEnd: function(t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(Q(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(Q(this._dropTarget, t), "drop", t.event), 
            this._draggingTarget = null, this._dropTarget = null;
        }
    };
    var Qu = Array.prototype.slice, Ju = function(t) {
        this._$handlers = {}, this._$eventProcessor = t;
    };
    Ju.prototype = {
        constructor: Ju,
        one: function(t, e, i, n) {
            return tt(this, t, e, i, n, !0);
        },
        on: function(t, e, i, n) {
            return tt(this, t, e, i, n, !1);
        },
        isSilent: function(t) {
            var e = this._$handlers;
            return !e[t] || !e[t].length;
        },
        off: function(t, e) {
            var i = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (i[t]) {
                    for (var n = [], r = 0, o = i[t].length; o > r; r++) i[t][r].h !== e && n.push(i[t][r]);
                    i[t] = n;
                }
                i[t] && 0 === i[t].length && delete i[t];
            } else delete i[t];
            return this;
        },
        trigger: function(t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 3 && (n = Qu.call(n, 1));
                for (var o = e.length, a = 0; o > a; ) {
                    var s = e[a];
                    if (i && i.filter && null != s.query && !i.filter(t, s.query)) a++; else {
                        switch (r) {
                          case 1:
                            s.h.call(s.ctx);
                            break;

                          case 2:
                            s.h.call(s.ctx, n[1]);
                            break;

                          case 3:
                            s.h.call(s.ctx, n[1], n[2]);
                            break;

                          default:
                            s.h.apply(s.ctx, n);
                        }
                        s.one ? (e.splice(a, 1), o--) : a++;
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this;
        },
        triggerWithContext: function(t) {
            var e = this._$handlers[t], i = this._$eventProcessor;
            if (e) {
                var n = arguments, r = n.length;
                r > 4 && (n = Qu.call(n, 1, n.length - 1));
                for (var o = n[n.length - 1], a = e.length, s = 0; a > s; ) {
                    var l = e[s];
                    if (i && i.filter && null != l.query && !i.filter(t, l.query)) s++; else {
                        switch (r) {
                          case 1:
                            l.h.call(o);
                            break;

                          case 2:
                            l.h.call(o, n[1]);
                            break;

                          case 3:
                            l.h.call(o, n[1], n[2]);
                            break;

                          default:
                            l.h.apply(o, n);
                        }
                        l.one ? (e.splice(s, 1), a--) : s++;
                    }
                }
            }
            return i && i.afterTrigger && i.afterTrigger(t), this;
        }
    };
    var tc = Math.log(2), ec = "undefined" != typeof window && !!window.addEventListener, ic = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, nc = "___zrEVENTSAVED", rc = [], oc = ec ? function(t) {
        t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0;
    } : function(t) {
        t.returnValue = !1, t.cancelBubble = !0;
    }, ac = function() {
        this._track = [];
    };
    ac.prototype = {
        constructor: ac,
        recognize: function(t, e, i) {
            return this._doTrack(t, e, i), this._recognize(t);
        },
        clear: function() {
            return this._track.length = 0, this;
        },
        _doTrack: function(t, e, i) {
            var n = t.touches;
            if (n) {
                for (var r = {
                    points: [],
                    touches: [],
                    target: e,
                    event: t
                }, o = 0, a = n.length; a > o; o++) {
                    var s = n[o], l = nt(i, s, {});
                    r.points.push([ l.zrX, l.zrY ]), r.touches.push(s);
                }
                this._track.push(r);
            }
        },
        _recognize: function(t) {
            for (var e in sc) if (sc.hasOwnProperty(e)) {
                var i = sc[e](this._track, t);
                if (i) return i;
            }
        }
    };
    var sc = {
        pinch: function(t, e) {
            var i = t.length;
            if (i) {
                var n = (t[i - 1] || {}).points, r = (t[i - 2] || {}).points || n;
                if (r && r.length > 1 && n && n.length > 1) {
                    var o = ut(n) / ut(r);
                    !isFinite(o) && (o = 1), e.pinchScale = o;
                    var a = ct(n);
                    return e.pinchX = a[0], e.pinchY = a[1], {
                        type: "pinch",
                        target: t[0].target,
                        event: e
                    };
                }
            }
        }
    }, lc = "silent";
    pt.prototype.dispose = function() {};
    var hc = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], uc = function(t, e, i, n) {
        Ju.call(this), this.storage = t, this.painter = e, this.painterRoot = n, i = i || new pt(), 
        this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, 
        this._gestureMgr, $.call(this), this.setHandlerProxy(i);
    };
    uc.prototype = {
        constructor: uc,
        setHandlerProxy: function(t) {
            this.proxy && this.proxy.dispose(), t && (f(hc, function(e) {
                t.on && t.on(e, this[e], this);
            }, this), t.handler = this), this.proxy = t;
        },
        mousemove: function(t) {
            var e = t.zrX, i = t.zrY, n = this._hovered, r = n.target;
            r && !r.__zr && (n = this.findHover(n.x, n.y), r = n.target);
            var o = this._hovered = this.findHover(e, i), a = o.target, s = this.proxy;
            s.setCursor && s.setCursor(a ? a.cursor : "default"), r && a !== r && this.dispatchToElement(n, "mouseout", t), 
            this.dispatchToElement(o, "mousemove", t), a && a !== r && this.dispatchToElement(o, "mouseover", t);
        },
        mouseout: function(t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, i = t.toElement || t.relatedTarget;
            do {
                i = i && i.parentNode;
            } while (i && 9 !== i.nodeType && !(e = i === this.painterRoot));
            !e && this.trigger("globalout", {
                event: t
            });
        },
        resize: function() {
            this._hovered = {};
        },
        dispatch: function(t, e) {
            var i = this[t];
            i && i.call(this, e);
        },
        dispose: function() {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null;
        },
        setCursorStyle: function(t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t);
        },
        dispatchToElement: function(t, e, i) {
            var n = (t = t || {}).target;
            if (!n || !n.silent) {
                for (var r = "on" + e, o = dt(e, t, i); n && (n[r] && (o.cancelBubble = n[r].call(n, o)), 
                n.trigger(e, o), n = n.parent, !o.cancelBubble); ) ;
                o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer(function(t) {
                    "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o);
                }));
            }
        },
        findHover: function(t, e, i) {
            for (var n = this.storage.getDisplayList(), r = {
                x: t,
                y: e
            }, o = n.length - 1; o >= 0; o--) {
                var a;
                if (n[o] !== i && !n[o].ignore && (a = gt(n[o], t, e)) && (!r.topTarget && (r.topTarget = n[o]), 
                a !== lc)) {
                    r.target = n[o];
                    break;
                }
            }
            return r;
        },
        processGesture: function(t, e) {
            this._gestureMgr || (this._gestureMgr = new ac());
            var i = this._gestureMgr;
            "start" === e && i.clear();
            var n = i.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
            if ("end" === e && i.clear(), n) {
                var r = n.type;
                t.gestureEvent = r, this.dispatchToElement({
                    target: n.target
                }, r, n.event);
            }
        }
    }, f([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        uc.prototype[t] = function(e) {
            var i = this.findHover(e.zrX, e.zrY), n = i.target;
            if ("mousedown" === t) this._downEl = n, this._downPoint = [ e.zrX, e.zrY ], this._upEl = n; else if ("mouseup" === t) this._upEl = n; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Ku(this._downPoint, [ e.zrX, e.zrY ]) > 4) return;
                this._downPoint = null;
            }
            this.dispatchToElement(i, t, e);
        };
    }), c(uc, Ju), c(uc, $);
    var cc = "undefined" == typeof Float32Array ? Array : Float32Array, dc = mt, fc = 5e-5, pc = function(t) {
        (t = t || {}).position || (this.position = [ 0, 0 ]), null == t.rotation && (this.rotation = 0), 
        t.scale || (this.scale = [ 1, 1 ]), this.origin = this.origin || null;
    }, gc = pc.prototype;
    gc.transform = null, gc.needLocalTransform = function() {
        return Mt(this.rotation) || Mt(this.position[0]) || Mt(this.position[1]) || Mt(this.scale[0] - 1) || Mt(this.scale[1] - 1);
    };
    var vc = [];
    gc.updateTransform = function() {
        var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
        if (i || e) {
            n = n || vt(), i ? this.getLocalTransform(n) : dc(n), e && (i ? _t(n, t.transform, n) : yt(n, t.transform)), 
            this.transform = n;
            var r = this.globalScaleRatio;
            if (null != r && 1 !== r) {
                this.getGlobalScale(vc);
                var o = vc[0] < 0 ? -1 : 1, a = vc[1] < 0 ? -1 : 1, s = ((vc[0] - o) * r + o) / vc[0] || 0, l = ((vc[1] - a) * r + a) / vc[1] || 0;
                n[0] *= s, n[1] *= s, n[2] *= l, n[3] *= l;
            }
            this.invTransform = this.invTransform || vt(), St(this.invTransform, n);
        } else n && dc(n);
    }, gc.getLocalTransform = function(t) {
        return pc.getLocalTransform(this, t);
    }, gc.setTransform = function(t) {
        var e = this.transform, i = t.dpr || 1;
        e ? t.setTransform(i * e[0], i * e[1], i * e[2], i * e[3], i * e[4], i * e[5]) : t.setTransform(i, 0, 0, i, 0, 0);
    }, gc.restoreTransform = function(t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0);
    };
    var mc = [], yc = vt();
    gc.setLocalTransform = function(t) {
        if (t) {
            var e = t[0] * t[0] + t[1] * t[1], i = t[2] * t[2] + t[3] * t[3], n = this.position, r = this.scale;
            Mt(e - 1) && (e = Math.sqrt(e)), Mt(i - 1) && (i = Math.sqrt(i)), t[0] < 0 && (e = -e), 
            t[3] < 0 && (i = -i), n[0] = t[4], n[1] = t[5], r[0] = e, r[1] = i, this.rotation = Math.atan2(-t[1] / i, t[0] / e);
        }
    }, gc.decomposeTransform = function() {
        if (this.transform) {
            var t = this.parent, e = this.transform;
            t && t.transform && (_t(mc, t.invTransform, e), e = mc);
            var i = this.origin;
            i && (i[0] || i[1]) && (yc[4] = i[0], yc[5] = i[1], _t(mc, e, yc), mc[4] -= i[0], 
            mc[5] -= i[1], e = mc), this.setLocalTransform(e);
        }
    }, gc.getGlobalScale = function(t) {
        var e = this.transform;
        return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), 
        e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, 
        t);
    }, gc.transformCoordToLocal = function(t, e) {
        var i = [ t, e ], n = this.invTransform;
        return n && j(i, i, n), i;
    }, gc.transformCoordToGlobal = function(t, e) {
        var i = [ t, e ], n = this.transform;
        return n && j(i, i, n), i;
    }, pc.getLocalTransform = function(t, e) {
        dc(e = e || []);
        var i = t.origin, n = t.scale || [ 1, 1 ], r = t.rotation || 0, o = t.position || [ 0, 0 ];
        return i && (e[4] -= i[0], e[5] -= i[1]), bt(e, e, n), r && wt(e, e, r), i && (e[4] += i[0], 
        e[5] += i[1]), e[4] += o[0], e[5] += o[1], e;
    };
    var _c = {
        linear: function(t) {
            return t;
        },
        quadraticIn: function(t) {
            return t * t;
        },
        quadraticOut: function(t) {
            return t * (2 - t);
        },
        quadraticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1);
        },
        cubicIn: function(t) {
            return t * t * t;
        },
        cubicOut: function(t) {
            return --t * t * t + 1;
        },
        cubicInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2);
        },
        quarticIn: function(t) {
            return t * t * t * t;
        },
        quarticOut: function(t) {
            return 1 - --t * t * t * t;
        },
        quarticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2);
        },
        quinticIn: function(t) {
            return t * t * t * t * t;
        },
        quinticOut: function(t) {
            return --t * t * t * t * t + 1;
        },
        quinticInOut: function(t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2);
        },
        sinusoidalIn: function(t) {
            return 1 - Math.cos(t * Math.PI / 2);
        },
        sinusoidalOut: function(t) {
            return Math.sin(t * Math.PI / 2);
        },
        sinusoidalInOut: function(t) {
            return .5 * (1 - Math.cos(Math.PI * t));
        },
        exponentialIn: function(t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1);
        },
        exponentialOut: function(t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
        },
        exponentialInOut: function(t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
        },
        circularIn: function(t) {
            return 1 - Math.sqrt(1 - t * t);
        },
        circularOut: function(t) {
            return Math.sqrt(1 - --t * t);
        },
        circularInOut: function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
        },
        elasticIn: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            -i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4));
        },
        elasticOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            i * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / .4) + 1);
        },
        elasticInOut: function(t) {
            var e, i = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = .1) : e = .4 * Math.asin(1 / i) / (2 * Math.PI), 
            (t *= 2) < 1 ? -.5 * i * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / .4) * .5 + 1);
        },
        backIn: function(t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e);
        },
        backOut: function(t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1;
        },
        backInOut: function(t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
        },
        bounceIn: function(t) {
            return 1 - _c.bounceOut(1 - t);
        },
        bounceOut: function(t) {
            return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        },
        bounceInOut: function(t) {
            return .5 > t ? .5 * _c.bounceIn(2 * t) : .5 * _c.bounceOut(2 * t - 1) + .5;
        }
    };
    Tt.prototype = {
        constructor: Tt,
        step: function(t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), 
            this._paused) this._pausedTime += e; else {
                var i = (t - this._startTime - this._pausedTime) / this._life;
                if (!(0 > i)) {
                    i = Math.min(i, 1);
                    var n = this.easing, r = "string" == typeof n ? _c[n] : n, o = "function" == typeof r ? r(i) : i;
                    return this.fire("frame", o), 1 === i ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, 
                    "destroy") : null;
                }
            }
        },
        restart: function(t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1;
        },
        fire: function(t, e) {
            this[t = "on" + t] && this[t](this._target, e);
        },
        pause: function() {
            this._paused = !0;
        },
        resume: function() {
            this._paused = !1;
        }
    };
    var xc = function() {
        this.head = null, this.tail = null, this._len = 0;
    }, wc = xc.prototype;
    wc.insert = function(t) {
        var e = new bc(t);
        return this.insertEntry(e), e;
    }, wc.insertEntry = function(t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, 
        this._len++;
    }, wc.remove = function(t) {
        var e = t.prev, i = t.next;
        e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, 
        this._len--;
    }, wc.len = function() {
        return this._len;
    }, wc.clear = function() {
        this.head = this.tail = null, this._len = 0;
    };
    var bc = function(t) {
        this.value = t, this.next, this.prev;
    }, Sc = function(t) {
        this._list = new xc(), this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null;
    }, Mc = Sc.prototype;
    Mc.put = function(t, e) {
        var i = this._list, n = this._map, r = null;
        if (null == n[t]) {
            var o = i.len(), a = this._lastRemovedEntry;
            if (o >= this._maxSize && o > 0) {
                var s = i.head;
                i.remove(s), delete n[s.key], r = s.value, this._lastRemovedEntry = s;
            }
            a ? a.value = e : a = new bc(e), a.key = t, i.insertEntry(a), n[t] = a;
        }
        return r;
    }, Mc.get = function(t) {
        var e = this._map[t], i = this._list;
        return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0;
    }, Mc.clear = function() {
        this._list.clear(), this._map = {};
    };
    var Tc = {
        transparent: [ 0, 0, 0, 0 ],
        aliceblue: [ 240, 248, 255, 1 ],
        antiquewhite: [ 250, 235, 215, 1 ],
        aqua: [ 0, 255, 255, 1 ],
        aquamarine: [ 127, 255, 212, 1 ],
        azure: [ 240, 255, 255, 1 ],
        beige: [ 245, 245, 220, 1 ],
        bisque: [ 255, 228, 196, 1 ],
        black: [ 0, 0, 0, 1 ],
        blanchedalmond: [ 255, 235, 205, 1 ],
        blue: [ 0, 0, 255, 1 ],
        blueviolet: [ 138, 43, 226, 1 ],
        brown: [ 165, 42, 42, 1 ],
        burlywood: [ 222, 184, 135, 1 ],
        cadetblue: [ 95, 158, 160, 1 ],
        chartreuse: [ 127, 255, 0, 1 ],
        chocolate: [ 210, 105, 30, 1 ],
        coral: [ 255, 127, 80, 1 ],
        cornflowerblue: [ 100, 149, 237, 1 ],
        cornsilk: [ 255, 248, 220, 1 ],
        crimson: [ 220, 20, 60, 1 ],
        cyan: [ 0, 255, 255, 1 ],
        darkblue: [ 0, 0, 139, 1 ],
        darkcyan: [ 0, 139, 139, 1 ],
        darkgoldenrod: [ 184, 134, 11, 1 ],
        darkgray: [ 169, 169, 169, 1 ],
        darkgreen: [ 0, 100, 0, 1 ],
        darkgrey: [ 169, 169, 169, 1 ],
        darkkhaki: [ 189, 183, 107, 1 ],
        darkmagenta: [ 139, 0, 139, 1 ],
        darkolivegreen: [ 85, 107, 47, 1 ],
        darkorange: [ 255, 140, 0, 1 ],
        darkorchid: [ 153, 50, 204, 1 ],
        darkred: [ 139, 0, 0, 1 ],
        darksalmon: [ 233, 150, 122, 1 ],
        darkseagreen: [ 143, 188, 143, 1 ],
        darkslateblue: [ 72, 61, 139, 1 ],
        darkslategray: [ 47, 79, 79, 1 ],
        darkslategrey: [ 47, 79, 79, 1 ],
        darkturquoise: [ 0, 206, 209, 1 ],
        darkviolet: [ 148, 0, 211, 1 ],
        deeppink: [ 255, 20, 147, 1 ],
        deepskyblue: [ 0, 191, 255, 1 ],
        dimgray: [ 105, 105, 105, 1 ],
        dimgrey: [ 105, 105, 105, 1 ],
        dodgerblue: [ 30, 144, 255, 1 ],
        firebrick: [ 178, 34, 34, 1 ],
        floralwhite: [ 255, 250, 240, 1 ],
        forestgreen: [ 34, 139, 34, 1 ],
        fuchsia: [ 255, 0, 255, 1 ],
        gainsboro: [ 220, 220, 220, 1 ],
        ghostwhite: [ 248, 248, 255, 1 ],
        gold: [ 255, 215, 0, 1 ],
        goldenrod: [ 218, 165, 32, 1 ],
        gray: [ 128, 128, 128, 1 ],
        green: [ 0, 128, 0, 1 ],
        greenyellow: [ 173, 255, 47, 1 ],
        grey: [ 128, 128, 128, 1 ],
        honeydew: [ 240, 255, 240, 1 ],
        hotpink: [ 255, 105, 180, 1 ],
        indianred: [ 205, 92, 92, 1 ],
        indigo: [ 75, 0, 130, 1 ],
        ivory: [ 255, 255, 240, 1 ],
        khaki: [ 240, 230, 140, 1 ],
        lavender: [ 230, 230, 250, 1 ],
        lavenderblush: [ 255, 240, 245, 1 ],
        lawngreen: [ 124, 252, 0, 1 ],
        lemonchiffon: [ 255, 250, 205, 1 ],
        lightblue: [ 173, 216, 230, 1 ],
        lightcoral: [ 240, 128, 128, 1 ],
        lightcyan: [ 224, 255, 255, 1 ],
        lightgoldenrodyellow: [ 250, 250, 210, 1 ],
        lightgray: [ 211, 211, 211, 1 ],
        lightgreen: [ 144, 238, 144, 1 ],
        lightgrey: [ 211, 211, 211, 1 ],
        lightpink: [ 255, 182, 193, 1 ],
        lightsalmon: [ 255, 160, 122, 1 ],
        lightseagreen: [ 32, 178, 170, 1 ],
        lightskyblue: [ 135, 206, 250, 1 ],
        lightslategray: [ 119, 136, 153, 1 ],
        lightslategrey: [ 119, 136, 153, 1 ],
        lightsteelblue: [ 176, 196, 222, 1 ],
        lightyellow: [ 255, 255, 224, 1 ],
        lime: [ 0, 255, 0, 1 ],
        limegreen: [ 50, 205, 50, 1 ],
        linen: [ 250, 240, 230, 1 ],
        magenta: [ 255, 0, 255, 1 ],
        maroon: [ 128, 0, 0, 1 ],
        mediumaquamarine: [ 102, 205, 170, 1 ],
        mediumblue: [ 0, 0, 205, 1 ],
        mediumorchid: [ 186, 85, 211, 1 ],
        mediumpurple: [ 147, 112, 219, 1 ],
        mediumseagreen: [ 60, 179, 113, 1 ],
        mediumslateblue: [ 123, 104, 238, 1 ],
        mediumspringgreen: [ 0, 250, 154, 1 ],
        mediumturquoise: [ 72, 209, 204, 1 ],
        mediumvioletred: [ 199, 21, 133, 1 ],
        midnightblue: [ 25, 25, 112, 1 ],
        mintcream: [ 245, 255, 250, 1 ],
        mistyrose: [ 255, 228, 225, 1 ],
        moccasin: [ 255, 228, 181, 1 ],
        navajowhite: [ 255, 222, 173, 1 ],
        navy: [ 0, 0, 128, 1 ],
        oldlace: [ 253, 245, 230, 1 ],
        olive: [ 128, 128, 0, 1 ],
        olivedrab: [ 107, 142, 35, 1 ],
        orange: [ 255, 165, 0, 1 ],
        orangered: [ 255, 69, 0, 1 ],
        orchid: [ 218, 112, 214, 1 ],
        palegoldenrod: [ 238, 232, 170, 1 ],
        palegreen: [ 152, 251, 152, 1 ],
        paleturquoise: [ 175, 238, 238, 1 ],
        palevioletred: [ 219, 112, 147, 1 ],
        papayawhip: [ 255, 239, 213, 1 ],
        peachpuff: [ 255, 218, 185, 1 ],
        peru: [ 205, 133, 63, 1 ],
        pink: [ 255, 192, 203, 1 ],
        plum: [ 221, 160, 221, 1 ],
        powderblue: [ 176, 224, 230, 1 ],
        purple: [ 128, 0, 128, 1 ],
        red: [ 255, 0, 0, 1 ],
        rosybrown: [ 188, 143, 143, 1 ],
        royalblue: [ 65, 105, 225, 1 ],
        saddlebrown: [ 139, 69, 19, 1 ],
        salmon: [ 250, 128, 114, 1 ],
        sandybrown: [ 244, 164, 96, 1 ],
        seagreen: [ 46, 139, 87, 1 ],
        seashell: [ 255, 245, 238, 1 ],
        sienna: [ 160, 82, 45, 1 ],
        silver: [ 192, 192, 192, 1 ],
        skyblue: [ 135, 206, 235, 1 ],
        slateblue: [ 106, 90, 205, 1 ],
        slategray: [ 112, 128, 144, 1 ],
        slategrey: [ 112, 128, 144, 1 ],
        snow: [ 255, 250, 250, 1 ],
        springgreen: [ 0, 255, 127, 1 ],
        steelblue: [ 70, 130, 180, 1 ],
        tan: [ 210, 180, 140, 1 ],
        teal: [ 0, 128, 128, 1 ],
        thistle: [ 216, 191, 216, 1 ],
        tomato: [ 255, 99, 71, 1 ],
        turquoise: [ 64, 224, 208, 1 ],
        violet: [ 238, 130, 238, 1 ],
        wheat: [ 245, 222, 179, 1 ],
        white: [ 255, 255, 255, 1 ],
        whitesmoke: [ 245, 245, 245, 1 ],
        yellow: [ 255, 255, 0, 1 ],
        yellowgreen: [ 154, 205, 50, 1 ]
    }, Ic = new Sc(20), Cc = null, kc = Array.prototype.slice, Dc = function(t, e, i, n) {
        this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || Ft, 
        this._setter = n || Ht, this._clipCount = 0, this._delay = 0, this._doneList = [], 
        this._onframeList = [], this._clipList = [];
    };
    Dc.prototype = {
        when: function(t, e) {
            var i = this._tracks;
            for (var n in e) if (e.hasOwnProperty(n)) {
                if (!i[n]) {
                    i[n] = [];
                    var r = this._getter(this._target, n);
                    if (null == r) continue;
                    0 !== t && i[n].push({
                        time: 0,
                        value: jt(r)
                    });
                }
                i[n].push({
                    time: t,
                    value: e[n]
                });
            }
            return this;
        },
        during: function(t) {
            return this._onframeList.push(t), this;
        },
        pause: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0;
        },
        resume: function() {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1;
        },
        isPaused: function() {
            return !!this._paused;
        },
        _doneCallback: function() {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, i = 0; e > i; i++) t[i].call(this);
        },
        start: function(t, e) {
            var i, n = this, r = 0;
            for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                var a = $t(this, t, function() {
                    --r || n._doneCallback();
                }, this._tracks[o], o, e);
                a && (this._clipList.push(a), r++, this.animation && this.animation.addClip(a), 
                i = a);
            }
            if (i) {
                var s = i.onframe;
                i.onframe = function(t, e) {
                    s(t, e);
                    for (var i = 0; i < n._onframeList.length; i++) n._onframeList[i](t, e);
                };
            }
            return r || this._doneCallback(), this;
        },
        stop: function(t) {
            for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                var r = e[n];
                t && r.onframe(this._target, 1), i && i.removeClip(r);
            }
            e.length = 0;
        },
        delay: function(t) {
            return this._delay = t, this;
        },
        done: function(t) {
            return t && this._doneList.push(t), this;
        },
        getClips: function() {
            return this._clipList;
        }
    };
    var Ac = 1;
    "undefined" != typeof window && (Ac = Math.max(window.devicePixelRatio || 1, 1));
    var Pc = Ac, Oc = function() {}, Lc = Oc, Ec = function() {
        this.animators = [];
    };
    Ec.prototype = {
        constructor: Ec,
        animate: function(t, e) {
            var i, n = !1, r = this, o = this.__zr;
            if (t) {
                var a = t.split("."), s = r;
                n = "shape" === a[0];
                for (var l = 0, u = a.length; u > l; l++) s && (s = s[a[l]]);
                s && (i = s);
            } else i = r;
            {
                if (i) {
                    var c = r.animators, d = new Dc(i, e);
                    return d.during(function() {
                        r.dirty(n);
                    }).done(function() {
                        c.splice(h(c, d), 1);
                    }), c.push(d), o && o.animation.addAnimator(d), d;
                }
                Lc('Property "' + t + '" is not existed in element ' + r.id);
            }
        },
        stopAnimation: function(t) {
            for (var e = this.animators, i = e.length, n = 0; i > n; n++) e[n].stop(t);
            return e.length = 0, this;
        },
        animateTo: function(t, e, i, n, r, o) {
            Qt(this, t, e, i, n, r, o);
        },
        animateFrom: function(t, e, i, n, r, o) {
            Qt(this, t, e, i, n, r, o, !0);
        }
    };
    var Bc = function(t) {
        pc.call(this, t), Ju.call(this, t), Ec.call(this, t), this.id = t.id || Lu();
    };
    Bc.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function(t, e) {
            switch (this.draggable) {
              case "horizontal":
                e = 0;
                break;

              case "vertical":
                t = 0;
            }
            var i = this.transform;
            i || (i = this.transform = [ 1, 0, 0, 1, 0, 0 ]), i[4] += t, i[5] += e, this.decomposeTransform(), 
            this.dirty(!1);
        },
        beforeUpdate: function() {},
        afterUpdate: function() {},
        update: function() {
            this.updateTransform();
        },
        traverse: function() {},
        attrKV: function(t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var i = this[t];
                    i || (i = this[t] = []), i[0] = e[0], i[1] = e[1];
                }
            } else this[t] = e;
        },
        hide: function() {
            this.ignore = !0, this.__zr && this.__zr.refresh();
        },
        show: function() {
            this.ignore = !1, this.__zr && this.__zr.refresh();
        },
        attr: function(t, e) {
            if ("string" == typeof t) this.attrKV(t, e); else if (b(t)) for (var i in t) t.hasOwnProperty(i) && this.attrKV(i, t[i]);
            return this.dirty(!1), this;
        },
        setClipPath: function(t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), 
            this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1);
        },
        removeClipPath: function() {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, 
            this.clipPath = null, this.dirty(!1));
        },
        addSelfToZr: function(t) {
            this.__zr = t;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.addAnimator(e[i]);
            this.clipPath && this.clipPath.addSelfToZr(t);
        },
        removeSelfFromZr: function(t) {
            this.__zr = null;
            var e = this.animators;
            if (e) for (var i = 0; i < e.length; i++) t.animation.removeAnimator(e[i]);
            this.clipPath && this.clipPath.removeSelfFromZr(t);
        }
    }, c(Bc, Ec), c(Bc, pc), c(Bc, Ju);
    var zc = j, Rc = Math.min, Nc = Math.max;
    ee.prototype = {
        constructor: ee,
        union: function(t) {
            var e = Rc(t.x, this.x), i = Rc(t.y, this.y);
            this.width = Nc(t.x + t.width, this.x + this.width) - e, this.height = Nc(t.y + t.height, this.y + this.height) - i, 
            this.x = e, this.y = i;
        },
        applyTransform: function() {
            var t = [], e = [], i = [], n = [];
            return function(r) {
                if (r) {
                    t[0] = i[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = i[1] = this.y + this.height, 
                    zc(t, t, r), zc(e, e, r), zc(i, i, r), zc(n, n, r), this.x = Rc(t[0], e[0], i[0], n[0]), 
                    this.y = Rc(t[1], e[1], i[1], n[1]);
                    var o = Nc(t[0], e[0], i[0], n[0]), a = Nc(t[1], e[1], i[1], n[1]);
                    this.width = o - this.x, this.height = a - this.y;
                }
            };
        }(),
        calculateTransform: function(t) {
            var e = this, i = t.width / e.width, n = t.height / e.height, r = vt();
            return xt(r, r, [ -e.x, -e.y ]), bt(r, r, [ i, n ]), xt(r, r, [ t.x, t.y ]), r;
        },
        intersect: function(t) {
            if (!t) return !1;
            t instanceof ee || (t = ee.create(t));
            var e = this, i = e.x, n = e.x + e.width, r = e.y, o = e.y + e.height, a = t.x, s = t.x + t.width, l = t.y, h = t.y + t.height;
            return !(a > n || i > s || l > o || r > h);
        },
        contain: function(t, e) {
            var i = this;
            return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height;
        },
        clone: function() {
            return new ee(this.x, this.y, this.width, this.height);
        },
        copy: function(t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height;
        },
        plain: function() {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            };
        }
    }, ee.create = function(t) {
        return new ee(t.x, t.y, t.width, t.height);
    };
    var Fc = function(t) {
        t = t || {}, Bc.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0;
    };
    Fc.prototype = {
        constructor: Fc,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function() {
            return this._children.slice();
        },
        childAt: function(t) {
            return this._children[t];
        },
        childOfName: function(t) {
            for (var e = this._children, i = 0; i < e.length; i++) if (e[i].name === t) return e[i];
        },
        childCount: function() {
            return this._children.length;
        },
        add: function(t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), 
            this;
        },
        addBefore: function(t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var i = this._children, n = i.indexOf(e);
                n >= 0 && (i.splice(n, 0, t), this._doAdd(t));
            }
            return this;
        },
        _doAdd: function(t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage, i = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof Fc && t.addChildrenToStorage(e)), 
            i && i.refresh();
        },
        remove: function(t) {
            var e = this.__zr, i = this.__storage, n = this._children, r = h(n, t);
            return 0 > r ? this : (n.splice(r, 1), t.parent = null, i && (i.delFromStorage(t), 
            t instanceof Fc && t.delChildrenFromStorage(i)), e && e.refresh(), this);
        },
        removeAll: function() {
            var t, e, i = this._children, n = this.__storage;
            for (e = 0; e < i.length; e++) t = i[e], n && (n.delFromStorage(t), t instanceof Fc && t.delChildrenFromStorage(n)), 
            t.parent = null;
            return i.length = 0, this;
        },
        eachChild: function(t, e) {
            for (var i = this._children, n = 0; n < i.length; n++) {
                var r = i[n];
                t.call(e, r, n);
            }
            return this;
        },
        traverse: function(t, e) {
            for (var i = 0; i < this._children.length; i++) {
                var n = this._children[i];
                t.call(e, n), "group" === n.type && n.traverse(t, e);
            }
            return this;
        },
        addChildrenToStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.addToStorage(i), i instanceof Fc && i.addChildrenToStorage(t);
            }
        },
        delChildrenFromStorage: function(t) {
            for (var e = 0; e < this._children.length; e++) {
                var i = this._children[e];
                t.delFromStorage(i), i instanceof Fc && i.delChildrenFromStorage(t);
            }
        },
        dirty: function() {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this;
        },
        getBoundingRect: function(t) {
            for (var e = null, i = new ee(0, 0, 0, 0), n = t || this._children, r = [], o = 0; o < n.length; o++) {
                var a = n[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(r);
                    l ? (i.copy(s), i.applyTransform(l), (e = e || i.clone()).union(i)) : (e = e || s.clone()).union(s);
                }
            }
            return e || i;
        }
    }, u(Fc, Bc);
    var Hc = 32, Vc = 7, Wc = function() {
        this._roots = [], this._displayList = [], this._displayListLen = 0;
    };
    Wc.prototype = {
        constructor: Wc,
        traverse: function(t, e) {
            for (var i = 0; i < this._roots.length; i++) this._roots[i].traverse(t, e);
        },
        getDisplayList: function(t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList;
        },
        updateDisplayList: function(t) {
            this._displayListLen = 0;
            for (var e = this._roots, i = this._displayList, n = 0, r = e.length; r > n; n++) this._updateAndAddDisplayable(e[n], null, t);
            i.length = this._displayListLen, Bu.canvasSupported && he(i, ue);
        },
        _updateAndAddDisplayable: function(t, e, i) {
            if (!t.ignore || i) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var n = t.clipPath;
                if (n) {
                    e = e ? e.slice() : [];
                    for (var r = n, o = t; r; ) r.parent = o, r.updateTransform(), e.push(r), o = r, 
                    r = r.clipPath;
                }
                if (t.isGroup) {
                    for (var a = t._children, s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, i);
                    }
                    t.__dirty = !1;
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t;
            }
        },
        addRoot: function(t) {
            t.__storage !== this && (t instanceof Fc && t.addChildrenToStorage(this), this.addToStorage(t), 
            this._roots.push(t));
        },
        delRoot: function(t) {
            if (null == t) {
                for (i = 0; i < this._roots.length; i++) {
                    var e = this._roots[i];
                    e instanceof Fc && e.delChildrenFromStorage(this);
                }
                return this._roots = [], this._displayList = [], void (this._displayListLen = 0);
            }
            if (t instanceof Array) for (var i = 0, n = t.length; n > i; i++) this.delRoot(t[i]); else {
                var r = h(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof Fc && t.delChildrenFromStorage(this));
            }
        },
        addToStorage: function(t) {
            return t && (t.__storage = this, t.dirty(!1)), this;
        },
        delFromStorage: function(t) {
            return t && (t.__storage = null), this;
        },
        dispose: function() {
            this._renderList = this._roots = null;
        },
        displayableSortFunc: ue
    };
    var Gc = {
        shadowBlur: 1,
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        textShadowBlur: 1,
        textShadowOffsetX: 1,
        textShadowOffsetY: 1,
        textBoxShadowBlur: 1,
        textBoxShadowOffsetX: 1,
        textBoxShadowOffsetY: 1
    }, Xc = function(t, e, i) {
        return Gc.hasOwnProperty(e) ? i *= t.dpr : i;
    }, Yc = {
        NONE: 0,
        STYLE_BIND: 1,
        PLAIN_TEXT: 2
    }, Uc = 9, qc = [ [ "shadowBlur", 0 ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ], [ "shadowColor", "#000" ], [ "lineCap", "butt" ], [ "lineJoin", "miter" ], [ "miterLimit", 10 ] ], jc = function(t) {
        this.extendFrom(t, !1);
    };
    jc.prototype = {
        constructor: jc,
        fill: "#000",
        stroke: null,
        opacity: 1,
        fillOpacity: null,
        strokeOpacity: null,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function(t, e, i) {
            var n = this, r = i && i.style, o = !r || t.__attrCachedBy !== Yc.STYLE_BIND;
            t.__attrCachedBy = Yc.STYLE_BIND;
            for (var a = 0; a < qc.length; a++) {
                var s = qc[a], l = s[0];
                (o || n[l] !== r[l]) && (t[l] = Xc(t, l, n[l] || s[1]));
            }
            if ((o || n.fill !== r.fill) && (t.fillStyle = n.fill), (o || n.stroke !== r.stroke) && (t.strokeStyle = n.stroke), 
            (o || n.opacity !== r.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), 
            (o || n.blend !== r.blend) && (t.globalCompositeOperation = n.blend || "source-over"), 
            this.hasStroke()) {
                var h = n.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            }
        },
        hasFill: function() {
            var t = this.fill;
            return null != t && "none" !== t;
        },
        hasStroke: function() {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0;
        },
        extendFrom: function(t, e) {
            if (t) for (var i in t) !t.hasOwnProperty(i) || !0 !== e && (!1 === e ? this.hasOwnProperty(i) : null == t[i]) || (this[i] = t[i]);
        },
        set: function(t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
        },
        clone: function() {
            var t = new this.constructor();
            return t.extendFrom(this, !0), t;
        },
        getGradient: function(t, e, i) {
            for (var n = ("radial" === e.type ? de : ce)(t, e, i), r = e.colorStops, o = 0; o < r.length; o++) n.addColorStop(r[o].offset, r[o].color);
            return n;
        }
    };
    for (var Zc = jc.prototype, Kc = 0; Kc < qc.length; Kc++) {
        var $c = qc[Kc];
        $c[0] in Zc || (Zc[$c[0]] = $c[1]);
    }
    jc.getGradient = Zc.getGradient;
    var Qc = function(t, e) {
        this.image = t, this.repeat = e, this.type = "pattern";
    };
    Qc.prototype.getCanvasPattern = function(t) {
        return t.createPattern(this.image, this.repeat || "repeat");
    };
    var Jc = function(t, e, i) {
        var n;
        i = i || Pc, "string" == typeof t ? n = pe(t, e, i) : b(t) && (n = t, t = n.id), 
        this.id = t, this.dom = n;
        var r = n.style;
        r && (n.onselectstart = fe, r["-webkit-user-select"] = "none", r["user-select"] = "none", 
        r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", 
        r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, 
        this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, 
        this.lastFrameAlpha = .7, this.dpr = i;
    };
    Jc.prototype = {
        constructor: Jc,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function() {
            return this.__endIndex - this.__startIndex;
        },
        initContext: function() {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr;
        },
        createBackBuffer: function() {
            var t = this.dpr;
            this.domBack = pe("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 
            1 !== t && this.ctxBack.scale(t, t);
        },
        resize: function(t, e) {
            var i = this.dpr, n = this.dom, r = n.style, o = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), n.width = t * i, n.height = e * i, 
            o && (o.width = t * i, o.height = e * i, 1 !== i && this.ctxBack.scale(i, i));
        },
        clear: function(t, e) {
            var i = this.dom, n = this.ctx, r = i.width, o = i.height, e = e || this.clearColor, a = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
            if (a && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", 
            this.ctxBack.drawImage(i, 0, 0, r / l, o / l)), n.clearRect(0, 0, r, o), e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || jc.getGradient(n, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: o
                }), e.__canvasGradient = h) : e.image && (h = Qc.prototype.getCanvasPattern.call(e, n)), 
                n.save(), n.fillStyle = h || e, n.fillRect(0, 0, r, o), n.restore();
            }
            if (a) {
                var u = this.domBack;
                n.save(), n.globalAlpha = s, n.drawImage(u, 0, 0, r, o), n.restore();
            }
        }
    };
    var td = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function(t) {
        setTimeout(t, 16);
    }, ed = new Sc(50), id = {}, nd = 0, rd = 5e3, od = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, ad = "12px sans-serif", sd = {};
    sd.measureText = function(t, e) {
        var i = l();
        return i.font = e || ad, i.measureText(t);
    };
    var ld = ad, hd = {
        left: 1,
        right: 1,
        center: 1
    }, ud = {
        top: 1,
        bottom: 1,
        middle: 1
    }, cd = [ [ "textShadowBlur", "shadowBlur", 0 ], [ "textShadowOffsetX", "shadowOffsetX", 0 ], [ "textShadowOffsetY", "shadowOffsetY", 0 ], [ "textShadowColor", "shadowColor", "transparent" ] ], dd = {}, fd = {}, pd = new ee(), gd = function() {};
    gd.prototype = {
        constructor: gd,
        drawRectText: function(t, e) {
            var i = this.style;
            e = i.textRect || e, this.__dirty && Re(i);
            var n = i.text;
            if (null != n && (n += ""), ti(n, i)) {
                t.save();
                var r = this.transform;
                i.transformText ? this.setTransform(t) : r && (pd.copy(e), pd.applyTransform(r), 
                e = pd), Fe(this, t, n, i, e, Uc), t.restore();
            }
        }
    }, ei.prototype = {
        constructor: ei,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        globalScaleRatio: 1,
        beforeBrush: function() {},
        afterBrush: function() {},
        brush: function() {},
        getBoundingRect: function() {},
        contain: function(t, e) {
            return this.rectContain(t, e);
        },
        traverse: function(t, e) {
            t.call(e, this);
        },
        rectContain: function(t, e) {
            var i = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(i[0], i[1]);
        },
        dirty: function() {
            this.__dirty = this.__dirtyText = !0, this._rect = null, this.__zr && this.__zr.refresh();
        },
        animateStyle: function(t) {
            return this.animate("style", t);
        },
        attrKV: function(t, e) {
            "style" !== t ? Bc.prototype.attrKV.call(this, t, e) : this.style.set(e);
        },
        setStyle: function(t, e) {
            return this.style.set(t, e), this.dirty(!1), this;
        },
        useStyle: function(t) {
            return this.style = new jc(t, this), this.dirty(!1), this;
        },
        calculateTextPosition: null
    }, u(ei, Bc), c(ei, gd), ii.prototype = {
        constructor: ii,
        type: "image",
        brush: function(t, e) {
            var i = this.style, n = i.image;
            i.bind(t, this, e);
            var r = this._image = ve(n, this._image, this, this.onload);
            if (r && ye(r)) {
                var o = i.x || 0, a = i.y || 0, s = i.width, l = i.height, h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, 
                l = r.height), this.setTransform(t), i.sWidth && i.sHeight) {
                    var u = i.sx || 0, c = i.sy || 0;
                    t.drawImage(r, u, c, i.sWidth, i.sHeight, o, a, s, l);
                } else if (i.sx && i.sy) {
                    var d = s - (u = i.sx), f = l - (c = i.sy);
                    t.drawImage(r, u, c, d, f, o, a, s, l);
                } else t.drawImage(r, o, a, s, l);
                null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
            }
        },
        getBoundingRect: function() {
            var t = this.style;
            return this._rect || (this._rect = new ee(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), 
            this._rect;
        }
    }, u(ii, ei);
    var vd = 314159, md = new ee(0, 0, 0, 0), yd = new ee(0, 0, 0, 0), _d = function(t, e, i) {
        this.type = "canvas";
        var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
        this._opts = i = a({}, i || {}), this.dpr = i.devicePixelRatio || Pc, this._singleCanvas = n, 
        this.root = t;
        var r = t.style;
        r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", 
        t.innerHTML = ""), this.storage = e;
        var o = this._zlevelList = [], s = this._layers = {};
        if (this._layerConfig = {}, this._needsManuallyCompositing = !1, n) {
            var l = t.width, h = t.height;
            null != i.width && (l = i.width), null != i.height && (h = i.height), this.dpr = i.devicePixelRatio || 1, 
            t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
            var u = new Jc(t, this, this.dpr);
            u.__builtin__ = !0, u.initContext(), s[vd] = u, u.zlevel = vd, o.push(vd), this._domRoot = t;
        } else {
            this._width = this._getSize(0), this._height = this._getSize(1);
            var c = this._domRoot = li(this._width, this._height);
            t.appendChild(c);
        }
        this._hoverlayer = null, this._hoverElements = [];
    };
    _d.prototype = {
        constructor: _d,
        getType: function() {
            return "canvas";
        },
        isSingleCanvas: function() {
            return this._singleCanvas;
        },
        getViewportRoot: function() {
            return this._domRoot;
        },
        getViewportRootOffset: function() {
            var t = this.getViewportRoot();
            return t ? {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            } : void 0;
        },
        refresh: function(t) {
            var e = this.storage.getDisplayList(!0), i = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var n = 0; n < i.length; n++) {
                var r = i[n], o = this._layers[r];
                if (!o.__builtin__ && o.refresh) {
                    var a = 0 === n ? this._backgroundColor : null;
                    o.refresh(a);
                }
            }
            return this.refreshHover(), this;
        },
        addHover: function(t, e) {
            if (!t.__hoverMir) {
                var i = new t.constructor({
                    style: t.style,
                    shape: t.shape,
                    z: t.z,
                    z2: t.z2,
                    silent: t.silent
                });
                return i.__from = t, t.__hoverMir = i, e && i.setStyle(e), this._hoverElements.push(i), 
                i;
            }
        },
        removeHover: function(t) {
            var e = t.__hoverMir, i = this._hoverElements, n = h(i, e);
            n >= 0 && i.splice(n, 1), t.__hoverMir = null;
        },
        clearHover: function() {
            for (var t = this._hoverElements, e = 0; e < t.length; e++) {
                var i = t[e].__from;
                i && (i.__hoverMir = null);
            }
            t.length = 0;
        },
        refreshHover: function() {
            var t = this._hoverElements, e = t.length, i = this._hoverlayer;
            if (i && i.clear(), e) {
                he(t, this.storage.displayableSortFunc), i || (i = this._hoverlayer = this.getLayer(1e5));
                var n = {};
                i.ctx.save();
                for (var r = 0; e > r; ) {
                    var o = t[r], a = o.__from;
                    a && a.__zr ? (r++, a.invisible || (o.transform = a.transform, o.invTransform = a.invTransform, 
                    o.__clipPaths = a.__clipPaths, this._doPaintEl(o, i, !0, n))) : (t.splice(r, 1), 
                    a.__hoverMir = null, e--);
                }
                i.ctx.restore();
            }
        },
        getHoverLayer: function() {
            return this.getLayer(1e5);
        },
        _paintList: function(t, e, i) {
            if (this._redrawId === i) {
                e = e || !1, this._updateLayerStatus(t);
                var n = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !n) {
                    var r = this;
                    td(function() {
                        r._paintList(t, e, i);
                    });
                }
            }
        },
        _compositeManually: function() {
            var t = this.getLayer(vd).ctx, e = this._domRoot.width, i = this._domRoot.height;
            t.clearRect(0, 0, e, i), this.eachBuiltinLayer(function(n) {
                n.virtual && t.drawImage(n.dom, 0, 0, e, i);
            });
        },
        _doPaintList: function(t, e) {
            for (var i = [], n = 0; n < this._zlevelList.length; n++) {
                var r = this._zlevelList[n];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && i.push(s);
            }
            for (var o = !0, a = 0; a < i.length; a++) {
                var s = i[a], l = s.ctx, h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex, c = !e && s.incremental && Date.now, d = c && Date.now(), p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p); else if (u === s.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || s.clear(!1, p);
                }
                -1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var v = u; v < s.__endIndex; v++) {
                    var m = t[v];
                    if (this._doPaintEl(m, s, e, h), m.__dirty = m.__dirtyText = !1, c && Date.now() - d > 15) break;
                }
                s.__drawIndex = v, s.__drawIndex < s.__endIndex && (o = !1), h.prevElClipPaths && l.restore(), 
                l.restore();
            }
            return Bu.wxa && f(this._layers, function(t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw();
            }), o;
        },
        _doPaintEl: function(t, e, i, n) {
            var r = e.ctx, o = t.transform;
            if (!(!e.__dirty && !i || t.invisible || 0 === t.style.opacity || o && !o[0] && !o[3] || t.culling && oi(t, this._width, this._height))) {
                var a = t.__clipPaths, s = n.prevElClipPaths;
                (!s || ai(a, s)) && (s && (r.restore(), n.prevElClipPaths = null, n.prevEl = null), 
                a && (r.save(), si(a, r), n.prevElClipPaths = a)), t.beforeBrush && t.beforeBrush(r), 
                t.brush(r, n.prevEl || null), n.prevEl = t, t.afterBrush && t.afterBrush(r);
            }
        },
        getLayer: function(t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = vd);
            var i = this._layers[t];
            return i || (i = new Jc("zr_" + t, this, this.dpr), i.zlevel = t, i.__builtin__ = !0, 
            this._layerConfig[t] && r(i, this._layerConfig[t], !0), e && (i.virtual = e), this.insertLayer(t, i), 
            i.initContext()), i;
        },
        insertLayer: function(t, e) {
            var i = this._layers, n = this._zlevelList, r = n.length, o = null, a = -1, s = this._domRoot;
            if (i[t]) Lc("ZLevel " + t + " has been used already"); else if (ri(e)) {
                if (r > 0 && t > n[0]) {
                    for (a = 0; r - 1 > a && !(n[a] < t && n[a + 1] > t); a++) ;
                    o = i[n[a]];
                }
                if (n.splice(a + 1, 0, t), i[t] = e, !e.virtual) if (o) {
                    var l = o.dom;
                    l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom);
                } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom);
            } else Lc("Layer of zlevel " + t + " is not valid");
        },
        eachLayer: function(t, e) {
            var i, n, r = this._zlevelList;
            for (n = 0; n < r.length; n++) i = r[n], t.call(e, this._layers[i], i);
        },
        eachBuiltinLayer: function(t, e) {
            var i, n, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) n = o[r], (i = this._layers[n]).__builtin__ && t.call(e, i, n);
        },
        eachOtherLayer: function(t, e) {
            var i, n, r, o = this._zlevelList;
            for (r = 0; r < o.length; r++) n = o[r], (i = this._layers[n]).__builtin__ || t.call(e, i, n);
        },
        getLayers: function() {
            return this._layers;
        },
        _updateLayerStatus: function(t) {
            function e(t) {
                i && (i.__endIndex !== t && (i.__dirty = !0), i.__endIndex = t);
            }
            if (this.eachBuiltinLayer(function(t) {
                t.__dirty = t.__used = !1;
            }), this._singleCanvas) for (r = 1; r < t.length; r++) if ((a = t[r]).zlevel !== t[r - 1].zlevel || a.incremental) {
                this._needsManuallyCompositing = !0;
                break;
            }
            for (var i = null, n = 0, r = 0; r < t.length; r++) {
                var o, a = t[r], s = a.zlevel;
                a.incremental ? (o = this.getLayer(s + .001, this._needsManuallyCompositing), o.incremental = !0, 
                n = 1) : o = this.getLayer(s + (n > 0 ? .01 : 0), this._needsManuallyCompositing), 
                o.__builtin__ || Lc("ZLevel " + s + " has been used by unkown layer " + o.id), o !== i && (o.__used = !0, 
                o.__startIndex !== r && (o.__dirty = !0), o.__startIndex = r, o.__drawIndex = o.incremental ? -1 : r, 
                e(r), i = o), a.__dirty && (o.__dirty = !0, o.incremental && o.__drawIndex < 0 && (o.__drawIndex = r));
            }
            e(r), this.eachBuiltinLayer(function(t) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), 
                t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
            });
        },
        clear: function() {
            return this.eachBuiltinLayer(this._clearLayer), this;
        },
        _clearLayer: function(t) {
            t.clear();
        },
        setBackgroundColor: function(t) {
            this._backgroundColor = t;
        },
        configLayer: function(t, e) {
            if (e) {
                var i = this._layerConfig;
                i[t] ? r(i[t], e, !0) : i[t] = e;
                for (var n = 0; n < this._zlevelList.length; n++) {
                    var o = this._zlevelList[n];
                    o !== t && o !== t + .01 || r(this._layers[o], i[t], !0);
                }
            }
        },
        delLayer: function(t) {
            var e = this._layers, i = this._zlevelList, n = e[t];
            n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(h(i, t), 1));
        },
        resize: function(t, e) {
            if (this._domRoot.style) {
                var i = this._domRoot;
                i.style.display = "none";
                var n = this._opts;
                if (null != t && (n.width = t), null != e && (n.height = e), t = this._getSize(0), 
                e = this._getSize(1), i.style.display = "", this._width !== t || e !== this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function(i) {
                        i.resize(t, e);
                    }), this.refresh(!0);
                }
                this._width = t, this._height = e;
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(vd).resize(t, e);
            }
            return this;
        },
        clearLayer: function(t) {
            var e = this._layers[t];
            e && e.clear();
        },
        dispose: function() {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null;
        },
        getRenderedCanvas: function(t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[vd].dom;
            var e = new Jc("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var i = e.dom.width, n = e.dom.height, r = e.ctx;
                this.eachLayer(function(t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, i, n) : t.renderToCanvas && (e.ctx.save(), 
                    t.renderToCanvas(e.ctx), e.ctx.restore());
                });
            } else for (var o = {}, a = this.storage.getDisplayList(!0), s = 0; s < a.length; s++) {
                var l = a[s];
                this._doPaintEl(l, e, !0, o);
            }
            return e.dom;
        },
        getWidth: function() {
            return this._width;
        },
        getHeight: function() {
            return this._height;
        },
        _getSize: function(t) {
            var e = this._opts, i = [ "width", "height" ][t], n = [ "clientWidth", "clientHeight" ][t], r = [ "paddingLeft", "paddingTop" ][t], o = [ "paddingRight", "paddingBottom" ][t];
            if (null != e[i] && "auto" !== e[i]) return parseFloat(e[i]);
            var a = this.root, s = document.defaultView.getComputedStyle(a);
            return (a[n] || ni(s[i]) || ni(a.style[i])) - (ni(s[r]) || 0) - (ni(s[o]) || 0) | 0;
        },
        pathToImage: function(t, e) {
            e = e || this.dpr;
            var i = document.createElement("canvas"), n = i.getContext("2d"), r = t.getBoundingRect(), o = t.style, a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e, h = o.hasStroke() ? o.lineWidth : 0, u = Math.max(h / 2, -s + a), c = Math.max(h / 2, s + a), d = Math.max(h / 2, -l + a), f = Math.max(h / 2, l + a), p = r.width + u + c, g = r.height + d + f;
            i.width = p * e, i.height = g * e, n.scale(e, e), n.clearRect(0, 0, p, g), n.dpr = e;
            var v = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [ u - r.x, d - r.y ], t.rotation = 0, t.scale = [ 1, 1 ], t.updateTransform(), 
            t && t.brush(n);
            var m = new ii({
                style: {
                    x: 0,
                    y: 0,
                    image: i
                }
            });
            return null != v.position && (m.position = t.position = v.position), null != v.rotation && (m.rotation = t.rotation = v.rotation), 
            null != v.scale && (m.scale = t.scale = v.scale), m;
        }
    };
    var xd = function(t) {
        t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function() {}, 
        this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, 
        this._paused = !1, Ju.call(this);
    };
    xd.prototype = {
        constructor: xd,
        addClip: function(t) {
            this._clips.push(t);
        },
        addAnimator: function(t) {
            t.animation = this;
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.addClip(e[i]);
        },
        removeClip: function(t) {
            var e = h(this._clips, t);
            e >= 0 && this._clips.splice(e, 1);
        },
        removeAnimator: function(t) {
            for (var e = t.getClips(), i = 0; i < e.length; i++) this.removeClip(e[i]);
            t.animation = null;
        },
        _update: function() {
            for (var t = new Date().getTime() - this._pausedTime, e = t - this._time, i = this._clips, n = i.length, r = [], o = [], a = 0; n > a; a++) {
                var s = i[a], l = s.step(t, e);
                l && (r.push(l), o.push(s));
            }
            for (a = 0; n > a; ) i[a]._needsRemove ? (i[a] = i[n - 1], i.pop(), n--) : a++;
            n = r.length;
            for (a = 0; n > a; a++) o[a].fire(r[a]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update();
        },
        _startLoop: function() {
            function t() {
                e._running && (td(t), !e._paused && e._update());
            }
            var e = this;
            this._running = !0, td(t);
        },
        start: function() {
            this._time = new Date().getTime(), this._pausedTime = 0, this._startLoop();
        },
        stop: function() {
            this._running = !1;
        },
        pause: function() {
            this._paused || (this._pauseStart = new Date().getTime(), this._paused = !0);
        },
        resume: function() {
            this._paused && (this._pausedTime += new Date().getTime() - this._pauseStart, this._paused = !1);
        },
        clear: function() {
            this._clips = [];
        },
        isFinished: function() {
            return !this._clips.length;
        },
        animate: function(t, e) {
            var i = new Dc(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(i), i;
        }
    }, c(xd, Ju);
    var wd = [ "click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu" ], bd = [ "touchstart", "touchend", "touchmove" ], Sd = {
        pointerdown: 1,
        pointerup: 1,
        pointermove: 1,
        pointerout: 1
    }, Md = p(wd, function(t) {
        var e = t.replace("mouse", "pointer");
        return Sd[e] ? e : t;
    }), Td = {
        mousemove: function(t) {
            t = st(this.dom, t), this.trigger("mousemove", t);
        },
        mouseout: function(t) {
            var e = (t = st(this.dom, t)).toElement || t.relatedTarget;
            if (e !== this.dom) for (;e && 9 !== e.nodeType; ) {
                if (e === this.dom) return;
                e = e.parentNode;
            }
            this.trigger("mouseout", t);
        },
        touchstart: function(t) {
            (t = st(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date(), this.handler.processGesture(this, t, "start"), 
            Td.mousemove.call(this, t), Td.mousedown.call(this, t), ui(this);
        },
        touchmove: function(t) {
            (t = st(this.dom, t)).zrByTouch = !0, this.handler.processGesture(this, t, "change"), 
            Td.mousemove.call(this, t), ui(this);
        },
        touchend: function(t) {
            (t = st(this.dom, t)).zrByTouch = !0, this.handler.processGesture(this, t, "end"), 
            Td.mouseup.call(this, t), +new Date() - this._lastTouchMoment < 300 && Td.click.call(this, t), 
            ui(this);
        },
        pointerdown: function(t) {
            Td.mousedown.call(this, t);
        },
        pointermove: function(t) {
            ci(t) || Td.mousemove.call(this, t);
        },
        pointerup: function(t) {
            Td.mouseup.call(this, t);
        },
        pointerout: function(t) {
            ci(t) || Td.mouseout.call(this, t);
        }
    };
    f([ "click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu" ], function(t) {
        Td[t] = function(e) {
            e = st(this.dom, e), this.trigger(t, e);
        };
    });
    var Id = fi.prototype;
    Id.dispose = function() {
        for (var t = wd.concat(bd), e = 0; e < t.length; e++) {
            var i = t[e];
            ht(this.dom, hi(i), this._handlers[i]);
        }
    }, Id.setCursor = function(t) {
        this.dom.style && (this.dom.style.cursor = t || "default");
    }, c(fi, Ju);
    var Cd = !Bu.canvasSupported, kd = {
        canvas: _d
    }, Dd = "4.1.0", Ad = function(t, e, i) {
        i = i || {}, this.dom = e, this.id = t;
        var n = this, r = new Wc(), o = i.renderer;
        if (Cd) {
            if (!kd.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
            o = "vml";
        } else o && kd[o] || (o = "canvas");
        var a = new kd[o](e, r, i, t);
        this.storage = r, this.painter = a;
        var s = Bu.node || Bu.worker ? null : new fi(a.getViewportRoot());
        this.handler = new uc(r, a, s, a.root), this.animation = new xd({
            stage: {
                update: m(this.flush, this)
            }
        }), this.animation.start(), this._needsRefresh;
        var l = r.delFromStorage, h = r.addToStorage;
        r.delFromStorage = function(t) {
            l.call(r, t), t && t.removeSelfFromZr(n);
        }, r.addToStorage = function(t) {
            h.call(r, t), t.addSelfToZr(n);
        };
    };
    Ad.prototype = {
        constructor: Ad,
        getId: function() {
            return this.id;
        },
        add: function(t) {
            this.storage.addRoot(t), this._needsRefresh = !0;
        },
        remove: function(t) {
            this.storage.delRoot(t), this._needsRefresh = !0;
        },
        configLayer: function(t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0;
        },
        setBackgroundColor: function(t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0;
        },
        refreshImmediately: function() {
            this._needsRefresh = this._needsRefreshHover = !1, this.painter.refresh(), this._needsRefresh = this._needsRefreshHover = !1;
        },
        refresh: function() {
            this._needsRefresh = !0;
        },
        flush: function() {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, 
            this.refreshHoverImmediately()), t && this.trigger("rendered");
        },
        addHover: function(t, e) {
            if (this.painter.addHover) {
                var i = this.painter.addHover(t, e);
                return this.refreshHover(), i;
            }
        },
        removeHover: function(t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover());
        },
        clearHover: function() {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover());
        },
        refreshHover: function() {
            this._needsRefreshHover = !0;
        },
        refreshHoverImmediately: function() {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover();
        },
        resize: function(t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize();
        },
        clearAnimation: function() {
            this.animation.clear();
        },
        getWidth: function() {
            return this.painter.getWidth();
        },
        getHeight: function() {
            return this.painter.getHeight();
        },
        pathToImage: function(t, e) {
            return this.painter.pathToImage(t, e);
        },
        setCursorStyle: function(t) {
            this.handler.setCursorStyle(t);
        },
        findHover: function(t, e) {
            return this.handler.findHover(t, e);
        },
        on: function(t, e, i) {
            this.handler.on(t, e, i);
        },
        off: function(t, e) {
            this.handler.off(t, e);
        },
        trigger: function(t, e) {
            this.handler.trigger(t, e);
        },
        clear: function() {
            this.storage.delRoot(), this.painter.clear();
        },
        dispose: function() {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), 
            this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null;
        }
    };
    var Pd = f, Od = b, Ld = _, Ed = "series\0", Bd = [ "fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding" ], zd = 0, Rd = ".", Nd = "___EC__COMPONENT__CONTAINER___", Fd = 0, Hd = function(t) {
        for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
        return function(e, i, n) {
            for (var r = {}, o = 0; o < t.length; o++) {
                var a = t[o][1];
                if (!(i && h(i, a) >= 0 || n && h(n, a) < 0)) {
                    var s = e.getShallow(a);
                    null != s && (r[t[o][0]] = s);
                }
            }
            return r;
        };
    }, Vd = Hd([ [ "lineWidth", "width" ], [ "stroke", "color" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ] ]), Wd = {
        getLineStyle: function(t) {
            var e = Vd(this, t);
            return e.lineDash = this.getLineDash(e.lineWidth), e;
        },
        getLineDash: function(t) {
            null == t && (t = 1);
            var e = this.get("type"), i = Math.max(t, 2), n = 4 * t;
            return "solid" !== e && null != e && ("dashed" === e ? [ n, n ] : [ i, i ]);
        }
    }, Gd = Hd([ [ "fill", "color" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "opacity" ], [ "shadowColor" ] ]), Xd = {
        getAreaStyle: function(t, e) {
            return Gd(this, t, e);
        }
    }, Yd = Math.pow, Ud = Math.sqrt, qd = 1e-8, jd = 1e-4, Zd = Ud(3), Kd = 1 / 3, $d = F(), Qd = F(), Jd = F(), tf = Math.min, ef = Math.max, nf = Math.sin, rf = Math.cos, of = 2 * Math.PI, af = F(), sf = F(), lf = F(), hf = [], uf = [], cf = {
        M: 1,
        L: 2,
        C: 3,
        Q: 4,
        A: 5,
        Z: 6,
        R: 7
    }, df = [], ff = [], pf = [], gf = [], vf = Math.min, mf = Math.max, yf = Math.cos, _f = Math.sin, xf = Math.sqrt, wf = Math.abs, bf = "undefined" != typeof Float32Array, Sf = function(t) {
        this._saveData = !t, this._saveData && (this.data = []), this._ctx = null;
    };
    Sf.prototype = {
        constructor: Sf,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function(t, e, i) {
            i = i || 0, this._ux = wf(i / Pc / t) || 0, this._uy = wf(i / Pc / e) || 0;
        },
        getContext: function() {
            return this._ctx;
        },
        beginPath: function(t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), 
            this._lineDash && (this._lineDash = null, this._dashOffset = 0), this;
        },
        moveTo: function(t, e) {
            return this.addData(cf.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, 
            this._y0 = e, this._xi = t, this._yi = e, this;
        },
        lineTo: function(t, e) {
            var i = wf(t - this._xi) > this._ux || wf(e - this._yi) > this._uy || this._len < 5;
            return this.addData(cf.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), 
            i && (this._xi = t, this._yi = e), this;
        },
        bezierCurveTo: function(t, e, i, n, r, o) {
            return this.addData(cf.C, t, e, i, n, r, o), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, r, o) : this._ctx.bezierCurveTo(t, e, i, n, r, o)), 
            this._xi = r, this._yi = o, this;
        },
        quadraticCurveTo: function(t, e, i, n) {
            return this.addData(cf.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), 
            this._xi = i, this._yi = n, this;
        },
        arc: function(t, e, i, n, r, o) {
            return this.addData(cf.A, t, e, i, i, n, r - n, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, r, o), 
            this._xi = yf(r) * i + t, this._yi = _f(r) * i + e, this;
        },
        arcTo: function(t, e, i, n, r) {
            return this._ctx && this._ctx.arcTo(t, e, i, n, r), this;
        },
        rect: function(t, e, i, n) {
            return this._ctx && this._ctx.rect(t, e, i, n), this.addData(cf.R, t, e, i, n), 
            this;
        },
        closePath: function() {
            this.addData(cf.Z);
            var t = this._ctx, e = this._x0, i = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, 
            this._yi = i, this;
        },
        fill: function(t) {
            t && t.fill(), this.toStatic();
        },
        stroke: function(t) {
            t && t.stroke(), this.toStatic();
        },
        setLineDash: function(t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, i = 0; i < t.length; i++) e += t[i];
                this._dashSum = e;
            }
            return this;
        },
        setLineDashOffset: function(t) {
            return this._dashOffset = t, this;
        },
        len: function() {
            return this._len;
        },
        setData: function(t) {
            var e = t.length;
            this.data && this.data.length === e || !bf || (this.data = new Float32Array(e));
            for (var i = 0; e > i; i++) this.data[i] = t[i];
            this._len = e;
        },
        appendPath: function(t) {
            t instanceof Array || (t = [ t ]);
            for (var e = t.length, i = 0, n = this._len, r = 0; e > r; r++) i += t[r].len();
            bf && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
            for (r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[n++] = o[a];
            this._len = n;
        },
        addData: function(t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++) e[this._len++] = arguments[i];
                this._prevCmd = t;
            }
        },
        _expandData: function() {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t;
            }
        },
        _needsDash: function() {
            return this._lineDash;
        },
        _dashedLineTo: function(t, e) {
            var i, n, r = this._dashSum, o = this._dashOffset, a = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, d = xf(u * u + c * c), f = l, p = h, g = a.length;
            for (u /= d, c /= d, 0 > o && (o = r + o), f -= (o %= r) * u, p -= o * c; u > 0 && t >= f || 0 > u && f >= t || 0 === u && (c > 0 && e >= p || 0 > c && p >= e); ) f += u * (i = a[n = this._dashIdx]), 
            p += c * i, this._dashIdx = (n + 1) % g, u > 0 && l > f || 0 > u && f > l || c > 0 && h > p || 0 > c && p > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? vf(f, t) : mf(f, t), c >= 0 ? vf(p, e) : mf(p, e));
            u = f - t, c = p - e, this._dashOffset = -xf(u * u + c * c);
        },
        _dashedBezierTo: function(t, e, i, n, r, o) {
            var a, s, l, h, u, c = this._dashSum, d = this._dashOffset, f = this._lineDash, p = this._ctx, g = this._xi, v = this._yi, m = Fi, y = 0, _ = this._dashIdx, x = f.length, w = 0;
            for (0 > d && (d = c + d), d %= c, a = 0; 1 > a; a += .1) s = m(g, t, i, r, a + .1) - m(g, t, i, r, a), 
            l = m(v, e, n, o, a + .1) - m(v, e, n, o, a), y += xf(s * s + l * l);
            for (;x > _ && !((w += f[_]) > d); _++) ;
            for (a = (w - d) / y; 1 >= a; ) h = m(g, t, i, r, a), u = m(v, e, n, o, a), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), 
            a += f[_] / y, _ = (_ + 1) % x;
            _ % 2 != 0 && p.lineTo(r, o), s = r - h, l = o - u, this._dashOffset = -xf(s * s + l * l);
        },
        _dashedQuadraticTo: function(t, e, i, n) {
            var r = i, o = n;
            i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, 
            this._dashedBezierTo(t, e, i, n, r, o);
        },
        toStatic: function() {
            var t = this.data;
            t instanceof Array && (t.length = this._len, bf && (this.data = new Float32Array(t)));
        },
        getBoundingRect: function() {
            df[0] = df[1] = pf[0] = pf[1] = Number.MAX_VALUE, ff[0] = ff[1] = gf[0] = gf[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, i = 0, n = 0, r = 0, o = 0; o < t.length; ) {
                var a = t[o++];
                switch (1 === o && (e = t[o], i = t[o + 1], n = e, r = i), a) {
                  case cf.M:
                    e = n = t[o++], i = r = t[o++], pf[0] = n, pf[1] = r, gf[0] = n, gf[1] = r;
                    break;

                  case cf.L:
                    $i(e, i, t[o], t[o + 1], pf, gf), e = t[o++], i = t[o++];
                    break;

                  case cf.C:
                    Qi(e, i, t[o++], t[o++], t[o++], t[o++], t[o], t[o + 1], pf, gf), e = t[o++], i = t[o++];
                    break;

                  case cf.Q:
                    Ji(e, i, t[o++], t[o++], t[o], t[o + 1], pf, gf), e = t[o++], i = t[o++];
                    break;

                  case cf.A:
                    var s = t[o++], l = t[o++], h = t[o++], u = t[o++], c = t[o++], d = t[o++] + c;
                    o += 1;
                    var f = 1 - t[o++];
                    1 === o && (n = yf(c) * h + s, r = _f(c) * u + l), tn(s, l, h, u, c, d, f, pf, gf), 
                    e = yf(d) * h + s, i = _f(d) * u + l;
                    break;

                  case cf.R:
                    $i(n = e = t[o++], r = i = t[o++], n + t[o++], r + t[o++], pf, gf);
                    break;

                  case cf.Z:
                    e = n, i = r;
                }
                Z(df, df, pf), K(ff, ff, gf);
            }
            return 0 === o && (df[0] = df[1] = ff[0] = ff[1] = 0), new ee(df[0], df[1], ff[0] - df[0], ff[1] - df[1]);
        },
        rebuildPath: function(t) {
            for (var e, i, n, r, o, a, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; u > c; ) {
                var d = s[c++];
                switch (1 === c && (n = s[c], r = s[c + 1], e = n, i = r), d) {
                  case cf.M:
                    e = n = s[c++], i = r = s[c++], t.moveTo(n, r);
                    break;

                  case cf.L:
                    o = s[c++], a = s[c++], (wf(o - n) > l || wf(a - r) > h || c === u - 1) && (t.lineTo(o, a), 
                    n = o, r = a);
                    break;

                  case cf.C:
                    t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                    break;

                  case cf.Q:
                    t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), n = s[c - 2], r = s[c - 1];
                    break;

                  case cf.A:
                    var f = s[c++], p = s[c++], g = s[c++], v = s[c++], m = s[c++], y = s[c++], _ = s[c++], x = s[c++], w = g > v ? g : v, b = g > v ? 1 : g / v, S = g > v ? v / g : 1, M = m + y;
                    Math.abs(g - v) > .001 ? (t.translate(f, p), t.rotate(_), t.scale(b, S), t.arc(0, 0, w, m, M, 1 - x), 
                    t.scale(1 / b, 1 / S), t.rotate(-_), t.translate(-f, -p)) : t.arc(f, p, w, m, M, 1 - x), 
                    1 === c && (e = yf(m) * g + f, i = _f(m) * v + p), n = yf(M) * g + f, r = _f(M) * v + p;
                    break;

                  case cf.R:
                    e = n = s[c], i = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                    break;

                  case cf.Z:
                    t.closePath(), n = e, r = i;
                }
            }
        }
    }, Sf.CMD = cf;
    var Mf = 2 * Math.PI, Tf = 2 * Math.PI, If = Sf.CMD, Cf = 2 * Math.PI, kf = 1e-4, Df = [ -1, -1, -1 ], Af = [ -1, -1 ], Pf = Qc.prototype.getCanvasPattern, Of = Math.abs, Lf = new Sf(!0);
    vn.prototype = {
        constructor: vn,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        segmentIgnoreThreshold: 0,
        subPixelOptimize: !1,
        brush: function(t, e) {
            var i = this.style, n = this.path || Lf, r = i.hasStroke(), o = i.hasFill(), a = i.fill, s = i.stroke, l = o && !!a.colorStops, h = r && !!s.colorStops, u = o && !!a.image, c = r && !!s.image;
            if (i.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var d;
                l && (d = d || this.getBoundingRect(), this._fillGradient = i.getGradient(t, a, d)), 
                h && (d = d || this.getBoundingRect(), this._strokeGradient = i.getGradient(t, s, d));
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = Pf.call(a, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = Pf.call(s, t));
            var f = i.lineDash, p = i.lineDashOffset, g = !!t.setLineDash, v = this.getGlobalScale();
            if (n.setScale(v[0], v[1], this.segmentIgnoreThreshold), this.__dirtyPath || f && !g && r ? (n.beginPath(t), 
            f && !g && (n.setLineDash(f), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), 
            this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), 
            o) if (null != i.fillOpacity) {
                m = t.globalAlpha;
                t.globalAlpha = i.fillOpacity * i.opacity, n.fill(t), t.globalAlpha = m;
            } else n.fill(t);
            if (f && g && (t.setLineDash(f), t.lineDashOffset = p), r) if (null != i.strokeOpacity) {
                var m = t.globalAlpha;
                t.globalAlpha = i.strokeOpacity * i.opacity, n.stroke(t), t.globalAlpha = m;
            } else n.stroke(t);
            f && g && t.setLineDash([]), null != i.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()));
        },
        buildPath: function() {},
        createPathProxy: function() {
            this.path = new Sf();
        },
        getBoundingRect: function() {
            var t = this._rect, e = this.style, i = !t;
            if (i) {
                var n = this.path;
                n || (n = this.path = new Sf()), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), 
                t = n.getBoundingRect();
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || i) {
                    r.copy(t);
                    var o = e.lineWidth, a = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (o = Math.max(o, this.strokeContainThreshold || 4)), a > 1e-10 && (r.width += o / a, 
                    r.height += o / a, r.x -= o / a / 2, r.y -= o / a / 2);
                }
                return r;
            }
            return t;
        },
        contain: function(t, e) {
            var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), r = this.style;
            if (t = i[0], e = i[1], n.contain(t, e)) {
                var o = this.path.data;
                if (r.hasStroke()) {
                    var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), 
                    gn(o, a / s, t, e))) return !0;
                }
                if (r.hasFill()) return pn(o, t, e);
            }
            return !1;
        },
        dirty: function(t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = this.__dirtyText = !0, 
            this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty();
        },
        animateShape: function(t) {
            return this.animate("shape", t);
        },
        attrKV: function(t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : ei.prototype.attrKV.call(this, t, e);
        },
        setShape: function(t, e) {
            var i = this.shape;
            if (i) {
                if (b(t)) for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]); else i[t] = e;
                this.dirty(!0);
            }
            return this;
        },
        getLineScale: function() {
            var t = this.transform;
            return t && Of(t[0] - 1) > 1e-10 && Of(t[3] - 1) > 1e-10 ? Math.sqrt(Of(t[0] * t[3] - t[2] * t[1])) : 1;
        }
    }, vn.extend = function(t) {
        var e = function(e) {
            vn.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var i = t.shape;
            if (i) {
                this.shape = this.shape || {};
                var n = this.shape;
                for (var r in i) !n.hasOwnProperty(r) && i.hasOwnProperty(r) && (n[r] = i[r]);
            }
            t.init && t.init.call(this, e);
        };
        u(e, vn);
        for (var i in t) "style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
        return e;
    }, u(vn, ei);
    var Ef = Sf.CMD, Bf = [ [], [], [] ], zf = Math.sqrt, Rf = Math.atan2, Nf = function(t, e) {
        var i, n, r, o, a, s, l = t.data, h = Ef.M, u = Ef.C, c = Ef.L, d = Ef.R, f = Ef.A, p = Ef.Q;
        for (r = 0, o = 0; r < l.length; ) {
            switch (i = l[r++], o = r, n = 0, i) {
              case h:
              case c:
                n = 1;
                break;

              case u:
                n = 3;
                break;

              case p:
                n = 2;
                break;

              case f:
                var g = e[4], v = e[5], m = zf(e[0] * e[0] + e[1] * e[1]), y = zf(e[2] * e[2] + e[3] * e[3]), _ = Rf(-e[1] / y, e[0] / m);
                l[r] *= m, l[r++] += g, l[r] *= y, l[r++] += v, l[r++] *= m, l[r++] *= y, l[r++] += _, 
                l[r++] += _, o = r += 2;
                break;

              case d:
                s[0] = l[r++], s[1] = l[r++], j(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], 
                s[1] += l[r++], j(s, s, e), l[o++] = s[0], l[o++] = s[1];
            }
            for (a = 0; n > a; a++) (s = Bf[a])[0] = l[r++], s[1] = l[r++], j(s, s, e), l[o++] = s[0], 
            l[o++] = s[1];
        }
    }, Ff = Math.sqrt, Hf = Math.sin, Vf = Math.cos, Wf = Math.PI, Gf = function(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
    }, Xf = function(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Gf(t) * Gf(e));
    }, Yf = function(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Xf(t, e));
    }, Uf = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, qf = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, jf = function(t) {
        ei.call(this, t);
    };
    jf.prototype = {
        constructor: jf,
        type: "text",
        brush: function(t, e) {
            var i = this.style;
            this.__dirty && Re(i), i.fill = i.stroke = i.shadowBlur = i.shadowColor = i.shadowOffsetX = i.shadowOffsetY = null;
            var n = i.text;
            return null != n && (n += ""), ti(n, i) ? (this.setTransform(t), Fe(this, t, n, i, null, e), 
            void this.restoreTransform(t)) : void (t.__attrCachedBy = Yc.NONE);
        },
        getBoundingRect: function() {
            var t = this.style;
            if (this.__dirty && Re(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var i = xe(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.textLineHeight, t.rich);
                if (i.x += t.x || 0, i.y += t.y || 0, Ke(t.textStroke, t.textStrokeWidth)) {
                    var n = t.textStrokeWidth;
                    i.x -= n / 2, i.y -= n / 2, i.width += n, i.height += n;
                }
                this._rect = i;
            }
            return this._rect;
        }
    }, u(jf, ei);
    var Zf = vn.extend({
        type: "circle",
        shape: {
            cx: 0,
            cy: 0,
            r: 0
        },
        buildPath: function(t, e, i) {
            i && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0);
        }
    }), Kf = [ [ "shadowBlur", 0 ], [ "shadowColor", "#000" ], [ "shadowOffsetX", 0 ], [ "shadowOffsetY", 0 ] ], $f = function(t) {
        return Bu.browser.ie && Bu.browser.version >= 11 ? function() {
            var e, i = this.__clipPaths, n = this.style;
            if (i) for (var r = 0; r < i.length; r++) {
                var o = i[r], a = o && o.shape, s = o && o.type;
                if (a && ("sector" === s && a.startAngle === a.endAngle || "rect" === s && (!a.width || !a.height))) {
                    for (l = 0; l < Kf.length; l++) Kf[l][2] = n[Kf[l][0]], n[Kf[l][0]] = Kf[l][1];
                    e = !0;
                    break;
                }
            }
            if (t.apply(this, arguments), e) for (var l = 0; l < Kf.length; l++) n[Kf[l][0]] = Kf[l][2];
        } : t;
    }, Qf = vn.extend({
        type: "sector",
        shape: {
            cx: 0,
            cy: 0,
            r0: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        brush: $f(vn.prototype.brush),
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(a), u = Math.sin(a);
            t.moveTo(h * r + i, u * r + n), t.lineTo(h * o + i, u * o + n), t.arc(i, n, o, a, s, !l), 
            t.lineTo(Math.cos(s) * r + i, Math.sin(s) * r + n), 0 !== r && t.arc(i, n, r, s, a, l), 
            t.closePath();
        }
    }), Jf = vn.extend({
        type: "ring",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            r0: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = 2 * Math.PI;
            t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, r, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, r, !0);
        }
    }), tp = function(t, e) {
        for (var i = t.length, n = [], r = 0, o = 1; i > o; o++) r += q(t[o - 1], t[o]);
        var a = r / 2;
        a = i > a ? i : a;
        for (o = 0; a > o; o++) {
            var s, l, h, u = o / (a - 1) * (e ? i : i - 1), c = Math.floor(u), d = u - c, f = t[c % i];
            e ? (s = t[(c - 1 + i) % i], l = t[(c + 1) % i], h = t[(c + 2) % i]) : (s = t[0 === c ? c : c - 1], 
            l = t[c > i - 2 ? i - 1 : c + 1], h = t[c > i - 3 ? i - 1 : c + 2]);
            var p = d * d, g = d * p;
            n.push([ bn(s[0], f[0], l[0], h[0], d, p, g), bn(s[1], f[1], l[1], h[1], d, p, g) ]);
        }
        return n;
    }, ep = function(t, e, i, n) {
        var r, o, a, s, l = [], h = [], u = [], c = [];
        if (n) {
            a = [ 1 / 0, 1 / 0 ], s = [ -1 / 0, -1 / 0 ];
            for (var d = 0, f = t.length; f > d; d++) Z(a, a, t[d]), K(s, s, t[d]);
            Z(a, a, n[0]), K(s, s, n[1]);
        }
        for (var d = 0, f = t.length; f > d; d++) {
            var p = t[d];
            if (i) r = t[d ? d - 1 : f - 1], o = t[(d + 1) % f]; else {
                if (0 === d || d === f - 1) {
                    l.push(H(t[d]));
                    continue;
                }
                r = t[d - 1], o = t[d + 1];
            }
            W(h, o, r), Y(h, h, e);
            var g = q(p, r), v = q(p, o), m = g + v;
            0 !== m && (g /= m, v /= m), Y(u, h, -g), Y(c, h, v);
            var y = V([], p, u), _ = V([], p, c);
            n && (K(y, y, a), Z(y, y, s), K(_, _, a), Z(_, _, s)), l.push(y), l.push(_);
        }
        return i && l.push(l.shift()), l;
    }, ip = vn.extend({
        type: "polygon",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        buildPath: function(t, e) {
            Sn(t, e, !0);
        }
    }), np = vn.extend({
        type: "polyline",
        shape: {
            points: null,
            smooth: !1,
            smoothConstraint: null
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            Sn(t, e, !1);
        }
    }), rp = Math.round, op = {}, ap = vn.extend({
        type: "rect",
        shape: {
            r: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i, n, r, o;
            this.subPixelOptimize ? (Tn(op, e, this.style), i = op.x, n = op.y, r = op.width, 
            o = op.height, op.r = e.r, e = op) : (i = e.x, n = e.y, r = e.width, o = e.height), 
            e.r ? ze(t, e) : t.rect(i, n, r, o), t.closePath();
        }
    }), sp = {}, lp = vn.extend({
        type: "line",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i, n, r, o;
            this.subPixelOptimize ? (Mn(sp, e, this.style), i = sp.x1, n = sp.y1, r = sp.x2, 
            o = sp.y2) : (i = e.x1, n = e.y1, r = e.x2, o = e.y2);
            var a = e.percent;
            0 !== a && (t.moveTo(i, n), 1 > a && (r = i * (1 - a) + r * a, o = n * (1 - a) + o * a), 
            t.lineTo(r, o));
        },
        pointAt: function(t) {
            var e = this.shape;
            return [ e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t ];
        }
    }), hp = [], up = vn.extend({
        type: "bezier-curve",
        shape: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            cpx1: 0,
            cpy1: 0,
            percent: 1
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.x1, n = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, h = e.cpy2, u = e.percent;
            0 !== u && (t.moveTo(i, n), null == l || null == h ? (1 > u && (Zi(i, a, r, u, hp), 
            a = hp[1], r = hp[2], Zi(n, s, o, u, hp), s = hp[1], o = hp[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > u && (Gi(i, a, l, r, u, hp), 
            a = hp[1], l = hp[2], r = hp[3], Gi(n, s, h, o, u, hp), s = hp[1], h = hp[2], o = hp[3]), 
            t.bezierCurveTo(a, s, l, h, r, o)));
        },
        pointAt: function(t) {
            return Cn(this.shape, t, !1);
        },
        tangentAt: function(t) {
            var e = Cn(this.shape, t, !0);
            return U(e, e);
        }
    }), cp = vn.extend({
        type: "arc",
        shape: {
            cx: 0,
            cy: 0,
            r: 0,
            startAngle: 0,
            endAngle: 2 * Math.PI,
            clockwise: !0
        },
        style: {
            stroke: "#000",
            fill: null
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise, l = Math.cos(o), h = Math.sin(o);
            t.moveTo(l * r + i, h * r + n), t.arc(i, n, r, o, a, !s);
        }
    }), dp = vn.extend({
        type: "compound",
        shape: {
            paths: null
        },
        _updatePathDirty: function() {
            for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++) t = t || e[i].__dirtyPath;
            this.__dirtyPath = t, this.__dirty = this.__dirty || t;
        },
        beforeBrush: function() {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++) t[i].path || t[i].createPathProxy(), 
            t[i].path.setScale(e[0], e[1], t[i].segmentIgnoreThreshold);
        },
        buildPath: function(t, e) {
            for (var i = e.paths || [], n = 0; n < i.length; n++) i[n].buildPath(t, i[n].shape, !0);
        },
        afterBrush: function() {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1;
        },
        getBoundingRect: function() {
            return this._updatePathDirty(), vn.prototype.getBoundingRect.call(this);
        }
    }), fp = function(t) {
        this.colorStops = t || [];
    };
    fp.prototype = {
        constructor: fp,
        addColorStop: function(t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            });
        }
    };
    var pp = function(t, e, i, n, r, o) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, 
        this.y2 = null == n ? 0 : n, this.type = "linear", this.global = o || !1, fp.call(this, r);
    };
    pp.prototype = {
        constructor: pp
    }, u(pp, fp);
    var gp = function(t, e, i, n, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, 
        this.type = "radial", this.global = r || !1, fp.call(this, n);
    };
    gp.prototype = {
        constructor: gp
    }, u(gp, fp), kn.prototype.incremental = !0, kn.prototype.clearDisplaybles = function() {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), 
        this.notClear = !1;
    }, kn.prototype.addDisplayable = function(t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty();
    }, kn.prototype.addDisplayables = function(t, e) {
        e = e || !1;
        for (var i = 0; i < t.length; i++) this.addDisplayable(t[i], e);
    }, kn.prototype.eachPendingDisplayable = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e]);
    }, kn.prototype.update = function() {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++) (e = this._displayables[t]).parent = this, 
        e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null;
        }
    }, kn.prototype.brush = function(t) {
        for (e = this._cursor; e < this._displayables.length; e++) (i = this._displayables[e]).beforeBrush && i.beforeBrush(t), 
        i.brush(t, e === this._cursor ? null : this._displayables[e - 1]), i.afterBrush && i.afterBrush(t);
        this._cursor = e;
        for (var e = 0; e < this._temporaryDisplayables.length; e++) {
            var i = this._temporaryDisplayables[e];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === e ? null : this._temporaryDisplayables[e - 1]), 
            i.afterBrush && i.afterBrush(t);
        }
        this._temporaryDisplayables = [], this.notClear = !0;
    };
    var vp = [];
    kn.prototype.getBoundingRect = function() {
        if (!this._rect) {
            for (var t = new ee(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var i = this._displayables[e], n = i.getBoundingRect().clone();
                i.needLocalTransform() && n.applyTransform(i.getLocalTransform(vp)), t.union(n);
            }
            this._rect = t;
        }
        return this._rect;
    }, kn.prototype.contain = function(t, e) {
        var i = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(i[0], i[1])) for (var n = 0; n < this._displayables.length; n++) if (this._displayables[n].contain(t, e)) return !0;
        return !1;
    }, u(kn, ei);
    var mp = Math.max, yp = Math.min, _p = {}, xp = 1, wp = {
        color: "textFill",
        textBorderColor: "textStroke",
        textBorderWidth: "textStrokeWidth"
    }, bp = "emphasis", Sp = "normal", Mp = 1, Tp = {}, Ip = In, Cp = R(), kp = 0, Dp = (Object.freeze || Object)({
        Z2_EMPHASIS_LIFT: xp,
        CACHED_LABEL_STYLE_PROPERTIES: wp,
        extendShape: Dn,
        extendPath: function(t, e) {
            return wn(t, e);
        },
        makePath: An,
        makeImage: Pn,
        mergePath: function(t, e) {
            for (var i = [], n = t.length, r = 0; n > r; r++) {
                var o = t[r];
                o.path || o.createPathProxy(), o.__dirtyPath && o.buildPath(o.path, o.shape, !0), 
                i.push(o.path);
            }
            var a = new vn(e);
            return a.createPathProxy(), a.buildPath = function(t) {
                t.appendPath(i);
                var e = t.getContext();
                e && t.rebuildPath(e);
            }, a;
        },
        resizePath: Ln,
        subPixelOptimizeLine: function(t) {
            return Mn(t.shape, t.shape, t.style), t;
        },
        subPixelOptimizeRect: function(t) {
            return Tn(t.shape, t.shape, t.style), t;
        },
        subPixelOptimize: Ip,
        setElementHoverStyle: Vn,
        setHoverStyle: qn,
        setAsHighDownDispatcher: jn,
        isHighDownDispatcher: Zn,
        getHighlightDigit: Kn,
        setLabelStyle: $n,
        modifyLabelStyle: function(t, e, i) {
            var n = t.style;
            e && (rr(n), t.setStyle(e), nr(n)), n = t.__hoverStl, i && n && (rr(n), a(n, i), 
            nr(n));
        },
        setTextStyle: Qn,
        setText: function(t, e, i) {
            var n, r = {
                isRectText: !0
            };
            !1 === i ? n = !0 : r.autoColor = i, Jn(t, e, r, n);
        },
        getFont: or,
        updateProps: sr,
        initProps: lr,
        getTransform: function(t, e) {
            for (var i = mt([]); t && t !== e; ) _t(i, t.getLocalTransform(), i), t = t.parent;
            return i;
        },
        applyTransform: hr,
        transformDirection: function(t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), o = [ "left" === t ? -n : "right" === t ? n : 0, "top" === t ? -r : "bottom" === t ? r : 0 ];
            return o = hr(o, e, i), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top";
        },
        groupTransition: ur,
        clipPointsByRect: function(t, e) {
            return p(t, function(t) {
                var i = t[0];
                i = mp(i, e.x), i = yp(i, e.x + e.width);
                var n = t[1];
                return n = mp(n, e.y), n = yp(n, e.y + e.height), [ i, n ];
            });
        },
        clipRectByRect: function(t, e) {
            var i = mp(t.x, e.x), n = yp(t.x + t.width, e.x + e.width), r = mp(t.y, e.y), o = yp(t.y + t.height, e.y + e.height);
            return n >= i && o >= r ? {
                x: i,
                y: r,
                width: n - i,
                height: o - r
            } : void 0;
        },
        createIcon: cr,
        linePolygonIntersect: function(t, e, i, n, r) {
            for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
                var s = r[o];
                if (dr(t, e, i, n, s[0], s[1], a[0], a[1])) return !0;
                a = s;
            }
        },
        lineLineIntersect: dr,
        Group: Fc,
        Image: ii,
        Text: jf,
        Circle: Zf,
        Sector: Qf,
        Ring: Jf,
        Polygon: ip,
        Polyline: np,
        Rect: ap,
        Line: lp,
        BezierCurve: up,
        Arc: cp,
        IncrementalDisplayable: kn,
        CompoundPath: dp,
        LinearGradient: pp,
        RadialGradient: gp,
        BoundingRect: ee
    }), Ap = [ "textStyle", "color" ], Pp = {
        getTextColor: function(t) {
            var e = this.ecModel;
            return this.getShallow("color") || (!t && e ? e.get(Ap) : null);
        },
        getFont: function() {
            return or({
                fontStyle: this.getShallow("fontStyle"),
                fontWeight: this.getShallow("fontWeight"),
                fontSize: this.getShallow("fontSize"),
                fontFamily: this.getShallow("fontFamily")
            }, this.ecModel);
        },
        getTextRect: function(t) {
            return xe(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("lineHeight"), this.getShallow("rich"), this.getShallow("truncateText"));
        }
    }, Op = Hd([ [ "fill", "color" ], [ "stroke", "borderColor" ], [ "lineWidth", "borderWidth" ], [ "opacity" ], [ "shadowBlur" ], [ "shadowOffsetX" ], [ "shadowOffsetY" ], [ "shadowColor" ], [ "textPosition" ], [ "textAlign" ] ]), Lp = {
        getItemStyle: function(t, e) {
            var i = Op(this, t, e), n = this.getBorderLineDash();
            return n && (i.lineDash = n), i;
        },
        getBorderLineDash: function() {
            var t = this.get("borderType");
            return "solid" === t || null == t ? null : "dashed" === t ? [ 5, 5 ] : [ 1, 1 ];
        }
    }, Ep = c, Bp = Mi();
    gr.prototype = {
        constructor: gr,
        init: null,
        mergeOption: function(t) {
            r(this.option, t, !0);
        },
        get: function(t, e) {
            return null == t ? this.option : vr(this.option, this.parsePath(t), !e && mr(this, t));
        },
        getShallow: function(t, e) {
            var i = this.option, n = null == i ? i : i[t], r = !e && mr(this, t);
            return null == n && r && (n = r.getShallow(t)), n;
        },
        getModel: function(t, e) {
            var i, n = null == t ? this.option : vr(this.option, t = this.parsePath(t));
            return e = e || (i = mr(this, t)) && i.getModel(t), new gr(n, e, this.ecModel);
        },
        isEmpty: function() {
            return null == this.option;
        },
        restoreData: function() {},
        clone: function() {
            return new (0, this.constructor)(n(this.option));
        },
        setReadOnly: function() {},
        parsePath: function(t) {
            return "string" == typeof t && (t = t.split(".")), t;
        },
        customizeGetParent: function(t) {
            Bp(this).getParent = t;
        },
        isAnimationEnabled: function() {
            if (!Bu.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled();
            }
        }
    }, Oi(gr), Li(gr), Ep(gr, Wd), Ep(gr, Xd), Ep(gr, Pp), Ep(gr, Lp);
    var zp = 0, Rp = 1e-4, Np = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/, Fp = P, Hp = /([&<>"'])/g, Vp = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }, Wp = [ "a", "b", "c", "d", "e", "f", "g" ], Gp = function(t, e) {
        return "{" + t + (null == e ? "" : e) + "}";
    }, Xp = Ie, Yp = f, Up = [ "left", "right", "top", "bottom", "width", "height" ], qp = [ [ "width", "left", "right" ], [ "height", "top", "bottom" ] ], jp = (y(Rr, "vertical"), 
    y(Rr, "horizontal"), {
        getBoxLayoutParams: function() {
            return {
                left: this.get("left"),
                top: this.get("top"),
                right: this.get("right"),
                bottom: this.get("bottom"),
                width: this.get("width"),
                height: this.get("height")
            };
        }
    }), Zp = Mi(), Kp = gr.extend({
        type: "component",
        id: "",
        name: "",
        mainType: "",
        subType: "",
        componentIndex: 0,
        defaultOption: null,
        ecModel: null,
        dependentModels: [],
        uid: null,
        layoutMode: null,
        $constructor: function(t, e, i, n) {
            gr.call(this, t, e, i, n), this.uid = yr("ec_cpt_model");
        },
        init: function(t, e, i) {
            this.mergeDefaultAndTheme(t, i);
        },
        mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode, n = i ? Hr(t) : {};
            r(t, e.getTheme().get(this.mainType)), r(t, this.getDefaultOption()), i && Fr(t, n, i);
        },
        mergeOption: function(t) {
            r(this.option, t, !0);
            var e = this.layoutMode;
            e && Fr(this.option, t, e);
        },
        optionUpdated: function() {},
        getDefaultOption: function() {
            var t = Zp(this);
            if (!t.defaultOption) {
                for (var e = [], i = this.constructor; i; ) {
                    var n = i.prototype.defaultOption;
                    n && e.push(n), i = i.superClass;
                }
                for (var o = {}, a = e.length - 1; a >= 0; a--) o = r(o, e[a], !0);
                t.defaultOption = o;
            }
            return t.defaultOption;
        },
        getReferringComponents: function(t) {
            return this.ecModel.queryComponents({
                mainType: t,
                index: this.get(t + "Index", !0),
                id: this.get(t + "Id", !0)
            });
        }
    });
    zi(Kp, {
        registerWhenExtend: !0
    }), function(t) {
        var e = {};
        t.registerSubTypeDefaulter = function(t, i) {
            t = Ai(t), e[t.main] = i;
        }, t.determineSubType = function(i, n) {
            var r = n.type;
            if (!r) {
                var o = Ai(i).main;
                t.hasSubTypes(i) && e[o] && (r = e[o](n));
            }
            return r;
        };
    }(Kp), function(t, e) {
        function i(t) {
            var i = {}, o = [];
            return f(t, function(a) {
                var s = n(i, a), l = r(s.originalDeps = e(a), t);
                s.entryCount = l.length, 0 === s.entryCount && o.push(a), f(l, function(t) {
                    h(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = n(i, t);
                    h(e.successor, t) < 0 && e.successor.push(a);
                });
            }), {
                graph: i,
                noEntryList: o
            };
        }
        function n(t, e) {
            return t[e] || (t[e] = {
                predecessor: [],
                successor: []
            }), t[e];
        }
        function r(t, e) {
            var i = [];
            return f(t, function(t) {
                h(e, t) >= 0 && i.push(t);
            }), i;
        }
        t.topologicalTravel = function(t, e, n, r) {
            function o(t) {
                s[t].entryCount--, 0 === s[t].entryCount && l.push(t);
            }
            if (t.length) {
                var a = i(e), s = a.graph, l = a.noEntryList, h = {};
                for (f(t, function(t) {
                    h[t] = !0;
                }); l.length; ) {
                    var u = l.pop(), c = s[u], d = !!h[u];
                    d && (n.call(r, u, c.originalDeps.slice()), delete h[u]), f(c.successor, d ? function(t) {
                        h[t] = !0, o(t);
                    } : o);
                }
                f(h, function() {
                    throw new Error("Circle dependency may exists");
                });
            }
        };
    }(Kp, function(t) {
        var e = [];
        return f(Kp.getClassesByMainType(t), function(t) {
            e = e.concat(t.prototype.dependencies || []);
        }), e = p(e, function(t) {
            return Ai(t).main;
        }), "dataset" !== t && h(e, "dataset") <= 0 && e.unshift("dataset"), e;
    }), c(Kp, jp);
    var $p = "";
    "undefined" != typeof navigator && ($p = navigator.platform || "");
    var Qp = {
        color: [ "#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3" ],
        gradientColor: [ "#f6efa6", "#d88273", "#bf444c" ],
        textStyle: {
            fontFamily: $p.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
            fontSize: 12,
            fontStyle: "normal",
            fontWeight: "normal"
        },
        blendMode: null,
        animation: "auto",
        animationDuration: 1e3,
        animationDurationUpdate: 300,
        animationEasing: "exponentialOut",
        animationEasingUpdate: "cubicOut",
        animationThreshold: 2e3,
        progressiveThreshold: 3e3,
        progressive: 400,
        hoverLayerThreshold: 3e3,
        useUTC: !1
    }, Jp = Mi(), tg = {
        clearColorPalette: function() {
            Jp(this).colorIdx = 0, Jp(this).colorNameMap = {};
        },
        getColorFromPalette: function(t, e, i) {
            var n = Jp(e = e || this), r = n.colorIdx || 0, o = n.colorNameMap = n.colorNameMap || {};
            if (o.hasOwnProperty(t)) return o[t];
            var a = gi(this.get("color", !0)), s = this.get("colorLayer", !0), l = null != i && s ? Wr(s, i) : a;
            if ((l = l || a) && l.length) {
                var h = l[r];
                return t && (o[t] = h), n.colorIdx = (r + 1) % l.length, h;
            }
        }
    }, eg = {
        cartesian2d: function(t, e, i, n) {
            var r = t.getReferringComponents("xAxis")[0], o = t.getReferringComponents("yAxis")[0];
            if (Pu) {
                if (!r) throw new Error('xAxis "' + C(t.get("xAxisIndex"), t.get("xAxisId"), 0) + '" not found');
                if (!o) throw new Error('yAxis "' + C(t.get("xAxisIndex"), t.get("yAxisId"), 0) + '" not found');
            }
            e.coordSysDims = [ "x", "y" ], i.set("x", r), i.set("y", o), Xr(r) && (n.set("x", r), 
            e.firstCategoryDimIndex = 0), Xr(o) && (n.set("y", o), e.firstCategoryDimIndex = 1);
        },
        singleAxis: function(t, e, i, n) {
            var r = t.getReferringComponents("singleAxis")[0];
            if (Pu && !r) throw new Error("singleAxis should be specified.");
            e.coordSysDims = [ "single" ], i.set("single", r), Xr(r) && (n.set("single", r), 
            e.firstCategoryDimIndex = 0);
        },
        polar: function(t, e, i, n) {
            var r = t.getReferringComponents("polar")[0], o = r.findAxisModel("radiusAxis"), a = r.findAxisModel("angleAxis");
            if (Pu) {
                if (!a) throw new Error("angleAxis option not found");
                if (!o) throw new Error("radiusAxis option not found");
            }
            e.coordSysDims = [ "radius", "angle" ], i.set("radius", o), i.set("angle", a), Xr(o) && (n.set("radius", o), 
            e.firstCategoryDimIndex = 0), Xr(a) && (n.set("angle", a), e.firstCategoryDimIndex = 1);
        },
        geo: function(t, e) {
            e.coordSysDims = [ "lng", "lat" ];
        },
        parallel: function(t, e, i, n) {
            var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")), a = e.coordSysDims = o.dimensions.slice();
            f(o.parallelAxisIndex, function(t, o) {
                var s = r.getComponent("parallelAxis", t), l = a[o];
                i.set(l, s), Xr(s) && null == e.firstCategoryDimIndex && (n.set(l, s), e.firstCategoryDimIndex = o);
            });
        }
    }, ig = "original", ng = "arrayRows", rg = "objectRows", og = "keyedColumns", ag = "unknown", sg = "typedArray", lg = "column", hg = "row";
    Yr.seriesDataToSource = function(t) {
        return new Yr({
            data: t,
            sourceFormat: M(t) ? sg : ig,
            fromDataset: !1
        });
    }, Li(Yr);
    var ug = Mi(), cg = "\0_ec_inner", dg = gr.extend({
        init: function(t, e, i, n) {
            i = i || {}, this.option = null, this._theme = new gr(i), this._optionManager = n;
        },
        setOption: function(t, e) {
            O(!(cg in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), 
            this.resetOption(null);
        },
        resetOption: function(t) {
            var e = !1, i = this._optionManager;
            if (!t || "recreate" === t) {
                var n = i.mountOption("recreate" === t);
                this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : ao.call(this, n), 
                e = !0;
            }
            if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                var r = i.getTimelineOption(this);
                r && (this.mergeOption(r), e = !0);
            }
            if (!t || "recreate" === t || "media" === t) {
                var o = i.getMediaOption(this, this._api);
                o.length && f(o, function(t) {
                    this.mergeOption(t, e = !0);
                }, this);
            }
            return e;
        },
        mergeOption: function(t) {
            var e = this.option, i = this._componentsMap, o = [];
            jr(this), f(t, function(t, i) {
                null != t && (Kp.hasClass(i) ? i && o.push(i) : e[i] = null == e[i] ? n(t) : r(e[i], t, !0));
            }), Kp.topologicalTravel(o, Kp.getAllClassMainTypes(), function(n, r) {
                var o = gi(t[n]), s = _i(i.get(n), o);
                xi(s), f(s, function(t) {
                    var e = t.option;
                    b(e) && (t.keyInfo.mainType = n, t.keyInfo.subType = lo(n, e, t.exist));
                });
                var l = so(i, r);
                e[n] = [], i.set(n, []), f(s, function(t, r) {
                    var o = t.exist, s = t.option;
                    if (O(b(s) || o, "Empty component definition"), s) {
                        var h = Kp.getClass(n, t.keyInfo.subType, !0);
                        if (o && o instanceof h) o.name = t.keyInfo.name, o.mergeOption(s, this), o.optionUpdated(s, !1); else {
                            var u = a({
                                dependentModels: l,
                                componentIndex: r
                            }, t.keyInfo);
                            a(o = new h(s, this, this, u), u), o.init(s, this, this, u), o.optionUpdated(null, !0);
                        }
                    } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                    i.get(n)[r] = o, e[n][r] = o.option;
                }, this), "series" === n && ho(this, i.get("series"));
            }, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || []);
        },
        getOption: function() {
            var t = n(this.option);
            return f(t, function(e, i) {
                if (Kp.hasClass(i)) {
                    for (var n = (e = gi(e)).length - 1; n >= 0; n--) bi(e[n]) && e.splice(n, 1);
                    t[i] = e;
                }
            }), delete t[cg], t;
        },
        getTheme: function() {
            return this._theme;
        },
        getComponent: function(t, e) {
            var i = this._componentsMap.get(t);
            return i ? i[e || 0] : void 0;
        },
        queryComponents: function(t) {
            var e = t.mainType;
            if (!e) return [];
            var i = t.index, n = t.id, r = t.name, o = this._componentsMap.get(e);
            if (!o || !o.length) return [];
            var a;
            if (null != i) _(i) || (i = [ i ]), a = v(p(i, function(t) {
                return o[t];
            }), function(t) {
                return !!t;
            }); else if (null != n) {
                var s = _(n);
                a = v(o, function(t) {
                    return s && h(n, t.id) >= 0 || !s && t.id === n;
                });
            } else if (null != r) {
                var l = _(r);
                a = v(o, function(t) {
                    return l && h(r, t.name) >= 0 || !l && t.name === r;
                });
            } else a = o.slice();
            return uo(a, t);
        },
        findComponents: function(t) {
            var e = t.query, i = t.mainType, n = function(t) {
                var e = i + "Index", n = i + "Id", r = i + "Name";
                return !t || null == t[e] && null == t[n] && null == t[r] ? null : {
                    mainType: i,
                    index: t[e],
                    id: t[n],
                    name: t[r]
                };
            }(e);
            return function(e) {
                return t.filter ? v(e, t.filter) : e;
            }(uo(n ? this.queryComponents(n) : this._componentsMap.get(i), t));
        },
        eachComponent: function(t, e, i) {
            var n = this._componentsMap;
            "function" == typeof t ? (i = e, e = t, n.each(function(t, n) {
                f(t, function(t, r) {
                    e.call(i, n, t, r);
                });
            })) : w(t) ? f(n.get(t), e, i) : b(t) && f(this.findComponents(t), e, i);
        },
        getSeriesByName: function(t) {
            return v(this._componentsMap.get("series"), function(e) {
                return e.name === t;
            });
        },
        getSeriesByIndex: function(t) {
            return this._componentsMap.get("series")[t];
        },
        getSeriesByType: function(t) {
            return v(this._componentsMap.get("series"), function(e) {
                return e.subType === t;
            });
        },
        getSeries: function() {
            return this._componentsMap.get("series").slice();
        },
        getSeriesCount: function() {
            return this._componentsMap.get("series").length;
        },
        eachSeries: function(t, e) {
            co(this), f(this._seriesIndices, function(i) {
                var n = this._componentsMap.get("series")[i];
                t.call(e, n, i);
            }, this);
        },
        eachRawSeries: function(t, e) {
            f(this._componentsMap.get("series"), t, e);
        },
        eachSeriesByType: function(t, e, i) {
            co(this), f(this._seriesIndices, function(n) {
                var r = this._componentsMap.get("series")[n];
                r.subType === t && e.call(i, r, n);
            }, this);
        },
        eachRawSeriesByType: function(t, e, i) {
            return f(this.getSeriesByType(t), e, i);
        },
        isSeriesFiltered: function(t) {
            return co(this), null == this._seriesIndicesMap.get(t.componentIndex);
        },
        getCurrentSeriesIndices: function() {
            return (this._seriesIndices || []).slice();
        },
        filterSeries: function(t, e) {
            co(this), ho(this, v(this._componentsMap.get("series"), t, e));
        },
        restoreData: function(t) {
            var e = this._componentsMap;
            ho(this, e.get("series"));
            var i = [];
            e.each(function(t, e) {
                i.push(e);
            }), Kp.topologicalTravel(i, Kp.getAllClassMainTypes(), function(i) {
                f(e.get(i), function(e) {
                    ("series" !== i || !ro(e, t)) && e.restoreData();
                });
            });
        }
    });
    c(dg, tg);
    var fg = [ "getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel" ], pg = {};
    po.prototype = {
        constructor: po,
        create: function(t, e) {
            var i = [];
            f(pg, function(n) {
                var r = n.create(t, e);
                i = i.concat(r || []);
            }), this._coordinateSystems = i;
        },
        update: function(t, e) {
            f(this._coordinateSystems, function(i) {
                i.update && i.update(t, e);
            });
        },
        getCoordinateSystems: function() {
            return this._coordinateSystems.slice();
        }
    }, po.register = function(t, e) {
        pg[t] = e;
    }, po.get = function(t) {
        return pg[t];
    };
    var gg = f, vg = n, mg = p, yg = r, _g = /^(min|max)?(.+)$/;
    go.prototype = {
        constructor: go,
        setOption: function(t, e) {
            t && f(gi(t.series), function(t) {
                t && t.data && M(t.data) && E(t.data);
            }), t = vg(t);
            var i = this._optionBackup, n = vo.call(this, t, e, !i);
            this._newBaseOption = n.baseOption, i ? (xo(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), 
            n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n;
        },
        mountOption: function(t) {
            var e = this._optionBackup;
            return this._timelineOptions = mg(e.timelineOptions, vg), this._mediaList = mg(e.mediaList, vg), 
            this._mediaDefault = vg(e.mediaDefault), this._currentMediaIndices = [], vg(t ? e.baseOption : this._newBaseOption);
        },
        getTimelineOption: function(t) {
            var e, i = this._timelineOptions;
            if (i.length) {
                var n = t.getComponent("timeline");
                n && (e = vg(i[n.getCurrentIndex()], !0));
            }
            return e;
        },
        getMediaOption: function() {
            var t = this._api.getWidth(), e = this._api.getHeight(), i = this._mediaList, n = this._mediaDefault, r = [], o = [];
            if (!i.length && !n) return o;
            for (var a = 0, s = i.length; s > a; a++) mo(i[a].query, t, e) && r.push(a);
            return !r.length && n && (r = [ -1 ]), r.length && !_o(r, this._currentMediaIndices) && (o = mg(r, function(t) {
                return vg(-1 === t ? n.option : i[t].option);
            })), this._currentMediaIndices = r, o;
        }
    };
    var xg = f, wg = b, bg = [ "areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine" ], Sg = function(t, e) {
        xg(Co(t.series), function(t) {
            wg(t) && Io(t);
        });
        var i = [ "xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar" ];
        e && i.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), xg(i, function(e) {
            xg(Co(t[e]), function(t) {
                t && (Mo(t, "axisLabel"), Mo(t.axisPointer, "label"));
            });
        }), xg(Co(t.parallel), function(t) {
            var e = t && t.parallelAxisDefault;
            Mo(e, "axisLabel"), Mo(e && e.axisPointer, "label");
        }), xg(Co(t.calendar), function(t) {
            bo(t, "itemStyle"), Mo(t, "dayLabel"), Mo(t, "monthLabel"), Mo(t, "yearLabel");
        }), xg(Co(t.radar), function(t) {
            Mo(t, "name");
        }), xg(Co(t.geo), function(t) {
            wg(t) && (To(t), xg(Co(t.regions), function(t) {
                To(t);
            }));
        }), xg(Co(t.timeline), function(t) {
            To(t), bo(t, "label"), bo(t, "itemStyle"), bo(t, "controlStyle", !0);
            var e = t.data;
            _(e) && f(e, function(t) {
                b(t) && (bo(t, "label"), bo(t, "itemStyle"));
            });
        }), xg(Co(t.toolbox), function(t) {
            bo(t, "iconStyle"), xg(t.feature, function(t) {
                bo(t, "iconStyle");
            });
        }), Mo(ko(t.axisPointer), "label"), Mo(ko(t.tooltip).axisPointer, "label");
    }, Mg = [ [ "x", "left" ], [ "y", "top" ], [ "x2", "right" ], [ "y2", "bottom" ] ], Tg = [ "grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline" ], Ig = function(t, e) {
        Sg(t, e), t.series = gi(t.series), f(t.series, function(t) {
            if (b(t)) {
                var e = t.type;
                if (("pie" === e || "gauge" === e) && null != t.clockWise && (t.clockwise = t.clockWise), 
                "gauge" === e) {
                    var i = Do(t, "pointer.color");
                    null != i && Ao(t, "itemStyle.color", i);
                }
                Po(t);
            }
        }), t.dataRange && (t.visualMap = t.dataRange), f(Tg, function(e) {
            var i = t[e];
            i && (_(i) || (i = [ i ]), f(i, function(t) {
                Po(t);
            }));
        });
    }, Cg = Lo.prototype;
    Cg.pure = !1, Cg.persistent = !0, Cg.getSource = function() {
        return this._source;
    };
    var kg = {
        arrayRows_column: {
            pure: !0,
            count: function() {
                return Math.max(0, this._data.length - this._source.startIndex);
            },
            getItem: function(t) {
                return this._data[t + this._source.startIndex];
            },
            appendData: zo
        },
        arrayRows_row: {
            pure: !0,
            count: function() {
                var t = this._data[0];
                return t ? Math.max(0, t.length - this._source.startIndex) : 0;
            },
            getItem: function(t) {
                t += this._source.startIndex;
                for (var e = [], i = this._data, n = 0; n < i.length; n++) {
                    var r = i[n];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function() {
                throw new Error('Do not support appendData when set seriesLayoutBy: "row".');
            }
        },
        objectRows: {
            pure: !0,
            count: Eo,
            getItem: Bo,
            appendData: zo
        },
        keyedColumns: {
            pure: !0,
            count: function() {
                var t = this._source.dimensionsDefine[0].name, e = this._data[t];
                return e ? e.length : 0;
            },
            getItem: function(t) {
                for (var e = [], i = this._source.dimensionsDefine, n = 0; n < i.length; n++) {
                    var r = this._data[i[n].name];
                    e.push(r ? r[t] : null);
                }
                return e;
            },
            appendData: function(t) {
                var e = this._data;
                f(t, function(t, i) {
                    for (var n = e[i] || (e[i] = []), r = 0; r < (t || []).length; r++) n.push(t[r]);
                });
            }
        },
        original: {
            count: Eo,
            getItem: Bo,
            appendData: zo
        },
        typedArray: {
            persistent: !1,
            pure: !0,
            count: function() {
                return this._data ? this._data.length / this._dimSize : 0;
            },
            getItem: function(t, e) {
                t -= this._offset, e = e || [];
                for (var i = this._dimSize * t, n = 0; n < this._dimSize; n++) e[n] = this._data[i + n];
                return e;
            },
            appendData: function(t) {
                Pu && O(M(t), "Added data must be TypedArray if data in initialization is TypedArray"), 
                this._data = t;
            },
            clean: function() {
                this._offset += this.count(), this._data = null;
            }
        }
    }, Dg = {
        arrayRows: Ro,
        objectRows: function(t, e, i, n) {
            return null != i ? t[n] : t;
        },
        keyedColumns: Ro,
        original: function(t, e, i) {
            var n = mi(t);
            return null != i && n instanceof Array ? n[i] : n;
        },
        typedArray: Ro
    }, Ag = {
        arrayRows: No,
        objectRows: function(t, e) {
            return Fo(t[e], this._dimensionInfos[e]);
        },
        keyedColumns: No,
        original: function(t, e, i, n) {
            var r = t && (null == t.value ? t : t.value);
            return !this._rawData.pure && yi(t) && (this.hasItemOption = !0), Fo(r instanceof Array ? r[n] : r, this._dimensionInfos[e]);
        },
        typedArray: function(t, e, i, n) {
            return t[n];
        }
    }, Pg = /\{@(.+?)\}/g, Og = {
        getDataParams: function(t, e) {
            var i = this.getData(e), n = this.getRawValue(t, e), r = i.getRawIndex(t), o = i.getName(t), a = i.getRawDataItem(t), s = i.getItemVisual(t, "color"), l = this.ecModel.getComponent("tooltip"), h = Di(l && l.get("renderMode")), u = this.mainType, c = "series" === u, d = i.userOutput;
            return {
                componentType: u,
                componentSubType: this.subType,
                componentIndex: this.componentIndex,
                seriesType: c ? this.subType : null,
                seriesIndex: this.seriesIndex,
                seriesId: c ? this.id : null,
                seriesName: c ? this.name : null,
                name: o,
                dataIndex: r,
                data: a,
                dataType: e,
                value: n,
                color: s,
                dimensionNames: d ? d.dimensionNames : null,
                encode: d ? d.encode : null,
                marker: Er({
                    color: s,
                    renderMode: h
                }),
                $vars: [ "seriesName", "name", "value" ]
            };
        },
        getFormattedLabel: function(t, e, i, n, r) {
            e = e || "normal";
            var o = this.getData(i), a = o.getItemModel(t), s = this.getDataParams(t, i);
            null != n && s.value instanceof Array && (s.value = s.value[n]);
            var l = a.get("normal" === e ? [ r || "label", "formatter" ] : [ e, r || "label", "formatter" ]);
            return "function" == typeof l ? (s.status = e, s.dimensionIndex = n, l(s)) : "string" == typeof l ? Lr(l, s).replace(Pg, function(e, i) {
                var n = i.length;
                return "[" === i.charAt(0) && "]" === i.charAt(n - 1) && (i = +i.slice(1, n - 1)), 
                Ho(o, t, i);
            }) : void 0;
        },
        getRawValue: function(t, e) {
            return Ho(this.getData(e), t);
        },
        formatTooltip: function() {}
    }, Lg = Wo.prototype;
    Lg.perform = function(t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t;
        }
        var i = this._upstream, n = t && t.skip;
        if (this._dirty && i) {
            var r = this.context;
            r.data = r.outputData = i.context.outputData;
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var o;
        this._plan && !n && (o = this._plan(this.context));
        var a = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), h = t && t.modDataCount || 0;
        (a !== l || s !== h) && (o = "reset");
        var u;
        (this._dirty || "reset" === o) && (this._dirty = !1, u = Xo(this, n)), this._modBy = l, 
        this._modDataCount = h;
        var c = t && t.step;
        if (i ? (Pu && O(null != i._outputDueEnd), this._dueEnd = i._outputDueEnd) : (Pu && O(!this._progress || this._count), 
        this._dueEnd = this._count ? this._count(this.context) : 1 / 0), this._progress) {
            var d = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!n && (u || f > d)) {
                var p = this._progress;
                if (_(p)) for (var g = 0; g < p.length; g++) Go(this, p[g], d, f, l, h); else Go(this, p, d, f, l, h);
            }
            this._dueIndex = f;
            var v = null != this._settedOutputEnd ? this._settedOutputEnd : f;
            Pu && O(v >= this._outputDueEnd), this._outputDueEnd = v;
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished();
    };
    var Eg = function() {
        function t() {
            return i > n ? n++ : null;
        }
        function e() {
            var t = n % a * r + Math.ceil(n / a), e = n >= i ? null : o > t ? t : n;
            return n++, e;
        }
        var i, n, r, o, a, s = {
            reset: function(l, h, u, c) {
                n = l, i = h, r = u, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t;
            }
        };
        return s;
    }();
    Lg.dirty = function() {
        this._dirty = !0, this._onDirty && this._onDirty(this.context);
    }, Lg.unfinished = function() {
        return this._progress && this._dueIndex < this._dueEnd;
    }, Lg.pipe = function(t) {
        Pu && O(t && !t._disposed && t !== this), (this._downstream !== t || this._dirty) && (this._downstream = t, 
        t._upstream = this, t.dirty());
    }, Lg.dispose = function() {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), 
        this._dirty = !1, this._disposed = !0);
    }, Lg.getUpstream = function() {
        return this._upstream;
    }, Lg.getDownstream = function() {
        return this._downstream;
    }, Lg.setOutputEnd = function(t) {
        this._outputDueEnd = this._settedOutputEnd = t;
    };
    var Bg = Mi(), zg = Kp.extend({
        type: "series.__base__",
        seriesIndex: 0,
        coordinateSystem: null,
        defaultOption: null,
        legendDataProvider: null,
        visualColorAccessPath: "itemStyle.color",
        layoutMode: null,
        init: function(t, e, i) {
            this.seriesIndex = this.componentIndex, this.dataTask = Vo({
                count: qo,
                reset: jo
            }), this.dataTask.context = {
                model: this
            }, this.mergeDefaultAndTheme(t, i), Zr(this);
            var n = this.getInitialData(t, i);
            Ko(n, this), this.dataTask.context.data = n, Pu && O(n, "getInitialData returned invalid data."), 
            Bg(this).dataBeforeProcessed = n, Yo(this);
        },
        mergeDefaultAndTheme: function(t, e) {
            var i = this.layoutMode, n = i ? Hr(t) : {}, o = this.subType;
            Kp.hasClass(o) && (o += "Series"), r(t, e.getTheme().get(this.subType)), r(t, this.getDefaultOption()), 
            vi(t, "label", [ "show" ]), this.fillDataTextStyle(t.data), i && Fr(t, n, i);
        },
        mergeOption: function(t, e) {
            t = r(this.option, t, !0), this.fillDataTextStyle(t.data);
            var i = this.layoutMode;
            i && Fr(this.option, t, i), Zr(this);
            var n = this.getInitialData(t, e);
            Ko(n, this), this.dataTask.dirty(), this.dataTask.context.data = n, Bg(this).dataBeforeProcessed = n, 
            Yo(this);
        },
        fillDataTextStyle: function(t) {
            if (t && !M(t)) for (var e = [ "show" ], i = 0; i < t.length; i++) t[i] && t[i].label && vi(t[i], "label", e);
        },
        getInitialData: function() {},
        appendData: function(t) {
            this.getRawData().appendData(t.data);
        },
        getData: function(t) {
            var e = Qo(this);
            if (e) {
                var i = e.context.data;
                return null == t ? i : i.getLinkedData(t);
            }
            return Bg(this).data;
        },
        setData: function(t) {
            var e = Qo(this);
            if (e) {
                var i = e.context;
                i.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), i.outputData = t, 
                e !== this.dataTask && (i.data = t);
            }
            Bg(this).data = t;
        },
        getSource: function() {
            return qr(this);
        },
        getRawData: function() {
            return Bg(this).dataBeforeProcessed;
        },
        getBaseAxis: function() {
            var t = this.coordinateSystem;
            return t && t.getBaseAxis && t.getBaseAxis();
        },
        formatTooltip: function(t, e, i, n) {
            var r = this, o = "html" === (n = n || "html") ? "<br/>" : "\n", a = "richText" === n, s = {}, l = 0, h = this.getData(), u = h.mapDimension("defaultedTooltip", !0), c = u.length, d = this.getRawValue(t), p = _(d), v = h.getItemVisual(t, "color");
            b(v) && v.colorStops && (v = (v.colorStops[0] || {}).color), v = v || "transparent";
            var m = (c > 1 || p && !c ? function(i) {
                function o(t, i) {
                    var o = h.getDimensionInfo(i);
                    if (o && !1 !== o.otherDims.tooltip) {
                        var u = o.type, f = "sub" + r.seriesIndex + "at" + l, p = Er({
                            color: v,
                            type: "subItem",
                            renderMode: n,
                            markerId: f
                        }), g = "string" == typeof p ? p : p.content, m = (c ? g + Or(o.displayName || "-") + ": " : "") + Or("ordinal" === u ? t + "" : "time" === u ? e ? "" : zr("yyyy/MM/dd hh:mm:ss", t) : Pr(t));
                        m && d.push(m), a && (s[f] = v, ++l);
                    }
                }
                var c = g(i, function(t, e, i) {
                    var n = h.getDimensionInfo(i);
                    return t |= n && !1 !== n.tooltip && null != n.displayName;
                }, 0), d = [];
                u.length ? f(u, function(e) {
                    o(Ho(h, t, e), e);
                }) : f(i, o);
                var p = c ? a ? "\n" : "<br/>" : "", m = p + d.join(p || ", ");
                return {
                    renderMode: n,
                    content: m,
                    style: s
                };
            }(d) : function(t) {
                return {
                    renderMode: n,
                    content: Or(Pr(t)),
                    style: s
                };
            }(c ? Ho(h, t, u[0]) : p ? d[0] : d)).content, y = r.seriesIndex + "at" + l, x = Er({
                color: v,
                type: "item",
                renderMode: n,
                markerId: y
            });
            s[y] = v, ++l;
            var w = h.getName(t), S = this.name;
            wi(this) || (S = ""), S = S ? Or(S) + (e ? ": " : o) : "";
            var M = "string" == typeof x ? x : x.content;
            return {
                html: e ? M + S + m : S + M + (w ? Or(w) + ": " + m : m),
                markers: s
            };
        },
        isAnimationEnabled: function() {
            if (Bu.node) return !1;
            var t = this.getShallow("animation");
            return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), 
            t;
        },
        restoreData: function() {
            this.dataTask.dirty();
        },
        getColorFromPalette: function(t, e, i) {
            var n = this.ecModel, r = tg.getColorFromPalette.call(this, t, e, i);
            return r || (r = n.getColorFromPalette(t, e, i)), r;
        },
        coordDimToDataDim: function(t) {
            return this.getRawData().mapDimension(t, !0);
        },
        getProgressive: function() {
            return this.get("progressive");
        },
        getProgressiveThreshold: function() {
            return this.get("progressiveThreshold");
        },
        getAxisTooltipData: null,
        getTooltipPosition: null,
        pipeTask: null,
        preventIncremental: null,
        pipelineContext: null
    });
    c(zg, Og), c(zg, tg);
    var Rg = function() {
        this.group = new Fc(), this.uid = yr("viewComponent");
    };
    Rg.prototype = {
        constructor: Rg,
        init: function() {},
        render: function() {},
        dispose: function() {},
        filterForExposedEvent: null
    };
    var Ng = Rg.prototype;
    Ng.updateView = Ng.updateLayout = Ng.updateVisual = function() {}, Oi(Rg), zi(Rg, {
        registerWhenExtend: !0
    });
    var Fg = function() {
        var t = Mi();
        return function(e) {
            var i = t(e), n = e.pipelineContext, r = i.large, o = i.progressiveRender, a = i.large = n.large, s = i.progressiveRender = n.progressiveRender;
            return !!(r ^ a || o ^ s) && "reset";
        };
    }, Hg = Mi(), Vg = Fg();
    Jo.prototype = {
        type: "chart",
        init: function() {},
        render: function() {},
        highlight: function(t, e, i, n) {
            ea(t.getData(), n, "emphasis");
        },
        downplay: function(t, e, i, n) {
            ea(t.getData(), n, "normal");
        },
        remove: function() {
            this.group.removeAll();
        },
        dispose: function() {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null,
        filterForExposedEvent: null
    };
    var Wg = Jo.prototype;
    Wg.updateView = Wg.updateLayout = Wg.updateVisual = function(t, e, i, n) {
        this.render(t, e, i, n);
    }, Oi(Jo, [ "dispose" ]), zi(Jo, {
        registerWhenExtend: !0
    }), Jo.markUpdateMethod = function(t, e) {
        Hg(t).updateMethod = e;
    };
    var Gg = {
        incrementalPrepareRender: {
            progress: function(t, e) {
                e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
            }
        },
        render: {
            forceFirstProgress: !0,
            progress: function(t, e) {
                e.view.render(e.model, e.ecModel, e.api, e.payload);
            }
        }
    }, Xg = "\0__throttleOriginMethod", Yg = "\0__throttleRate", Ug = "\0__throttleType", qg = {
        createOnAllSeries: !0,
        performRawSeries: !0,
        reset: function(t, e) {
            var i = t.getData(), n = (t.visualColorAccessPath || "itemStyle.color").split("."), r = t.get(n) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
            if (i.setVisual("color", r), !e.isSeriesFiltered(t)) {
                "function" != typeof r || r instanceof fp || i.each(function(e) {
                    i.setItemVisual(e, "color", r(t.getDataParams(e)));
                });
                return {
                    dataEach: i.hasItemOption ? function(t, e) {
                        var i = t.getItemModel(e).get(n, !0);
                        null != i && t.setItemVisual(e, "color", i);
                    } : null
                };
            }
        }
    }, jg = {
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {
                title: "数据视图",
                lang: [ "数据视图", "关闭", "刷新" ]
            },
            dataZoom: {
                title: {
                    zoom: "区域缩放",
                    back: "区域缩放还原"
                }
            },
            magicType: {
                title: {
                    line: "切换为折线图",
                    bar: "切换为柱状图",
                    stack: "切换为堆叠",
                    tiled: "切换为平铺"
                }
            },
            restore: {
                title: "还原"
            },
            saveAsImage: {
                title: "保存为图片",
                lang: [ "右键另存为图片" ]
            }
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {
                withTitle: "这是一个关于“{title}”的图表。",
                withoutTitle: "这是一个图表，"
            },
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {
                        middle: "；",
                        end: "。"
                    }
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {
                    middle: "，",
                    end: ""
                }
            }
        }
    }, Zg = function(t, e) {
        function i(t, e) {
            if ("string" != typeof t) return t;
            var i = t;
            return f(e, function(t, e) {
                i = i.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t);
            }), i;
        }
        function n(t) {
            var e = o.get(t);
            if (null == e) {
                for (var i = t.split("."), n = jg.aria, r = 0; r < i.length; ++r) n = n[i[r]];
                return n;
            }
            return e;
        }
        function r(t) {
            return jg.series.typeNames[t] || "自定义图";
        }
        var o = e.getModel("aria");
        if (o.get("show")) {
            if (o.get("description")) return void t.setAttribute("aria-label", o.get("description"));
            var a = 0;
            e.eachSeries(function() {
                ++a;
            }, this);
            var s, l = o.get("data.maxCount") || 10, h = o.get("series.maxCount") || 10, u = Math.min(a, h);
            if (!(1 > a)) {
                var c = function() {
                    var t = e.getModel("title").option;
                    return t && t.length && (t = t[0]), t && t.text;
                }();
                s = c ? i(n("general.withTitle"), {
                    title: c
                }) : n("general.withoutTitle");
                var d = [];
                s += i(n(a > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                    seriesCount: a
                }), e.eachSeries(function(t, e) {
                    if (u > e) {
                        var o, s = t.get("name"), h = "series." + (a > 1 ? "multiple" : "single") + ".";
                        o = i(o = n(s ? h + "withName" : h + "withoutName"), {
                            seriesId: t.seriesIndex,
                            seriesName: t.get("name"),
                            seriesType: r(t.subType)
                        });
                        var c = t.getData();
                        window.data = c, o += c.count() > l ? i(n("data.partialData"), {
                            displayCnt: l
                        }) : n("data.allData");
                        for (var f = [], p = 0; p < c.count(); p++) if (l > p) {
                            var g = c.getName(p), v = Ho(c, p);
                            f.push(i(n(g ? "data.withName" : "data.withoutName"), {
                                name: g,
                                value: v
                            }));
                        }
                        o += f.join(n("data.separator.middle")) + n("data.separator.end"), d.push(o);
                    }
                }), s += d.join(n("series.multiple.separator.middle")) + n("series.multiple.separator.end"), 
                t.setAttribute("aria-label", s);
            }
        }
    }, Kg = Math.PI, $g = aa.prototype;
    $g.restoreData = function(t, e) {
        t.restoreData(e), this._stageTaskMap.each(function(t) {
            var e = t.overallTask;
            e && e.dirty();
        });
    }, $g.getPerformArgs = function(t, e) {
        if (t.__pipeline) {
            var i = this._pipelineMap.get(t.__pipeline.id), n = i.context, r = !e && i.progressiveEnabled && (!n || n.progressiveRender) && t.__idxInPipeline > i.blockIndex ? i.step : null, o = n && n.modDataCount;
            return {
                step: r,
                modBy: null != o ? Math.ceil(o / r) : null,
                modDataCount: o
            };
        }
    }, $g.getPipeline = function(t) {
        return this._pipelineMap.get(t);
    }, $g.updateStreamModes = function(t, e) {
        var i = this._pipelineMap.get(t.uid), n = t.getData().count(), r = i.progressiveEnabled && e.incrementalPrepareRender && n >= i.threshold, o = t.get("large") && n >= t.get("largeThreshold"), a = "mod" === t.get("progressiveChunkMode") ? n : null;
        t.pipelineContext = i.context = {
            progressiveRender: r,
            modDataCount: a,
            large: o
        };
    }, $g.restorePipelines = function(t) {
        var e = this, i = e._pipelineMap = R();
        t.eachSeries(function(t) {
            var n = t.getProgressive(), r = t.uid;
            i.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: n && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(n || 700),
                count: 0
            }), ya(e, t, t.dataTask);
        });
    }, $g.prepareStageTasks = function() {
        var t = this._stageTaskMap, e = this.ecInstance.getModel(), i = this.api;
        f(this._allHandlers, function(n) {
            var r = t.get(n.uid) || t.set(n.uid, []);
            n.reset && la(this, n, r, e, i), n.overallReset && ha(this, n, r, e, i);
        }, this);
    }, $g.prepareView = function(t, e, i, n) {
        var r = t.renderTask, o = r.context;
        o.model = e, o.ecModel = i, o.api = n, r.__block = !t.incrementalPrepareRender, 
        ya(this, e, r);
    }, $g.performDataProcessorTasks = function(t, e) {
        sa(this, this._dataProcessorHandlers, t, e, {
            block: !0
        });
    }, $g.performVisualTasks = function(t, e, i) {
        sa(this, this._visualHandlers, t, e, i);
    }, $g.performSeriesTasks = function(t) {
        var e;
        t.eachSeries(function(t) {
            e |= t.dataTask.perform();
        }), this.unfinished |= e;
    }, $g.plan = function() {
        this._pipelineMap.each(function(t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break;
                }
                e = e.getUpstream();
            } while (e);
        });
    };
    var Qg = $g.updatePayload = function(t, e) {
        "remain" !== e && (t.context.payload = e);
    }, Jg = va(0);
    aa.wrapStageHandler = function(t, e) {
        return x(t) && (t = {
            overallReset: t,
            seriesType: _a(t)
        }), t.uid = yr("stageHandler"), e && (t.visualType = e), t;
    };
    var tv, ev = {}, iv = {};
    xa(ev, dg), xa(iv, fo), ev.eachSeriesByType = ev.eachRawSeriesByType = function(t) {
        tv = t;
    }, ev.eachComponent = function(t) {
        "series" === t.mainType && t.subType && (tv = t.subType);
    };
    var nv = [ "#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF" ], rv = {
        color: nv,
        colorLayer: [ [ "#37A2DA", "#ffd85c", "#fd7b5f" ], [ "#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5" ], [ "#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF" ], nv ]
    }, ov = "#eee", av = function() {
        return {
            axisLine: {
                lineStyle: {
                    color: ov
                }
            },
            axisTick: {
                lineStyle: {
                    color: ov
                }
            },
            axisLabel: {
                textStyle: {
                    color: ov
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dashed",
                    color: "#aaa"
                }
            },
            splitArea: {
                areaStyle: {
                    color: ov
                }
            }
        };
    }, sv = [ "#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42" ], lv = {
        color: sv,
        backgroundColor: "#333",
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: ov
                },
                crossStyle: {
                    color: ov
                }
            }
        },
        legend: {
            textStyle: {
                color: ov
            }
        },
        textStyle: {
            color: ov
        },
        title: {
            textStyle: {
                color: ov
            }
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: ov
                }
            }
        },
        dataZoom: {
            textStyle: {
                color: ov
            }
        },
        visualMap: {
            textStyle: {
                color: ov
            }
        },
        timeline: {
            lineStyle: {
                color: ov
            },
            itemStyle: {
                normal: {
                    color: sv[1]
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: ov
                    }
                }
            },
            controlStyle: {
                normal: {
                    color: ov,
                    borderColor: ov
                }
            }
        },
        timeAxis: av(),
        logAxis: av(),
        valueAxis: av(),
        categoryAxis: av(),
        line: {
            symbol: "circle"
        },
        graph: {
            color: sv
        },
        gauge: {
            title: {
                textStyle: {
                    color: ov
                }
            }
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: "#FD1050",
                    color0: "#0CF49B",
                    borderColor: "#FD1050",
                    borderColor0: "#0CF49B"
                }
            }
        }
    };
    lv.categoryAxis.splitLine.show = !1, Kp.extend({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: lg,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function() {
            Ur(this);
        }
    }), Rg.extend({
        type: "dataset"
    });
    var hv = vn.extend({
        type: "ellipse",
        shape: {
            cx: 0,
            cy: 0,
            rx: 0,
            ry: 0
        },
        buildPath: function(t, e) {
            var i = .5522848, n = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * i, l = a * i;
            t.moveTo(n - o, r), t.bezierCurveTo(n - o, r - l, n - s, r - a, n, r - a), t.bezierCurveTo(n + s, r - a, n + o, r - l, n + o, r), 
            t.bezierCurveTo(n + o, r + l, n + s, r + a, n, r + a), t.bezierCurveTo(n - s, r + a, n - o, r + l, n - o, r), 
            t.closePath();
        }
    }), uv = /[\s,]+/;
    ba.prototype.parse = function(t, e) {
        e = e || {};
        var i = wa(t);
        if (!i) throw new Error("Illegal svg");
        var n = new Fc();
        this._root = n;
        var r = i.getAttribute("viewBox") || "", o = parseFloat(i.getAttribute("width") || e.width), a = parseFloat(i.getAttribute("height") || e.height);
        isNaN(o) && (o = null), isNaN(a) && (a = null), Ia(i, n, null, !0);
        for (var s = i.firstChild; s; ) this._parseNode(s, n), s = s.nextSibling;
        var l, h;
        if (r) {
            var u = L(r).split(uv);
            u.length >= 4 && (l = {
                x: parseFloat(u[0] || 0),
                y: parseFloat(u[1] || 0),
                width: parseFloat(u[2]),
                height: parseFloat(u[3])
            });
        }
        if (l && null != o && null != a && (h = Aa(l, o, a), !e.ignoreViewBox)) {
            var c = n;
            (n = new Fc()).add(c), c.scale = h.scale.slice(), c.position = h.position.slice();
        }
        return e.ignoreRootClip || null == o || null == a || n.setClipPath(new ap({
            shape: {
                x: 0,
                y: 0,
                width: o,
                height: a
            }
        })), {
            root: n,
            width: o,
            height: a,
            viewBoxRect: l,
            viewBoxTransform: h
        };
    }, ba.prototype._parseNode = function(t, e) {
        var i = t.nodeName.toLowerCase();
        "defs" === i ? this._isDefine = !0 : "text" === i && (this._isText = !0);
        var n;
        if (this._isDefine) {
            if (a = dv[i]) {
                var r = a.call(this, t), o = t.getAttribute("id");
                o && (this._defs[o] = r);
            }
        } else {
            var a = cv[i];
            a && (n = a.call(this, t, e), e.add(n));
        }
        for (var s = t.firstChild; s; ) 1 === s.nodeType && this._parseNode(s, n), 3 === s.nodeType && this._isText && this._parseText(s, n), 
        s = s.nextSibling;
        "defs" === i ? this._isDefine = !1 : "text" === i && (this._isText = !1);
    }, ba.prototype._parseText = function(t, e) {
        if (1 === t.nodeType) {
            var i = t.getAttribute("dx") || 0, n = t.getAttribute("dy") || 0;
            this._textX += parseFloat(i), this._textY += parseFloat(n);
        }
        var r = new jf({
            style: {
                text: t.textContent,
                transformText: !0
            },
            position: [ this._textX || 0, this._textY || 0 ]
        });
        Ma(e, r), Ia(t, r, this._defs);
        var o = r.style.fontSize;
        o && 9 > o && (r.style.fontSize = 9, r.scale = r.scale || [ 1, 1 ], r.scale[0] *= o / 9, 
        r.scale[1] *= o / 9);
        var a = r.getBoundingRect();
        return this._textX += a.width, e.add(r), r;
    };
    var cv = {
        g: function(t, e) {
            var i = new Fc();
            return Ma(e, i), Ia(t, i, this._defs), i;
        },
        rect: function(t, e) {
            var i = new ap();
            return Ma(e, i), Ia(t, i, this._defs), i.setShape({
                x: parseFloat(t.getAttribute("x") || 0),
                y: parseFloat(t.getAttribute("y") || 0),
                width: parseFloat(t.getAttribute("width") || 0),
                height: parseFloat(t.getAttribute("height") || 0)
            }), i;
        },
        circle: function(t, e) {
            var i = new Zf();
            return Ma(e, i), Ia(t, i, this._defs), i.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                r: parseFloat(t.getAttribute("r") || 0)
            }), i;
        },
        line: function(t, e) {
            var i = new lp();
            return Ma(e, i), Ia(t, i, this._defs), i.setShape({
                x1: parseFloat(t.getAttribute("x1") || 0),
                y1: parseFloat(t.getAttribute("y1") || 0),
                x2: parseFloat(t.getAttribute("x2") || 0),
                y2: parseFloat(t.getAttribute("y2") || 0)
            }), i;
        },
        ellipse: function(t, e) {
            var i = new hv();
            return Ma(e, i), Ia(t, i, this._defs), i.setShape({
                cx: parseFloat(t.getAttribute("cx") || 0),
                cy: parseFloat(t.getAttribute("cy") || 0),
                rx: parseFloat(t.getAttribute("rx") || 0),
                ry: parseFloat(t.getAttribute("ry") || 0)
            }), i;
        },
        polygon: function(t, e) {
            var i = t.getAttribute("points");
            i && (i = Ta(i));
            var n = new ip({
                shape: {
                    points: i || []
                }
            });
            return Ma(e, n), Ia(t, n, this._defs), n;
        },
        polyline: function(t, e) {
            var i = new vn();
            Ma(e, i), Ia(t, i, this._defs);
            var n = t.getAttribute("points");
            return n && (n = Ta(n)), new np({
                shape: {
                    points: n || []
                }
            });
        },
        image: function(t, e) {
            var i = new ii();
            return Ma(e, i), Ia(t, i, this._defs), i.setStyle({
                image: t.getAttribute("xlink:href"),
                x: t.getAttribute("x"),
                y: t.getAttribute("y"),
                width: t.getAttribute("width"),
                height: t.getAttribute("height")
            }), i;
        },
        text: function(t, e) {
            var i = t.getAttribute("x") || 0, n = t.getAttribute("y") || 0, r = t.getAttribute("dx") || 0, o = t.getAttribute("dy") || 0;
            this._textX = parseFloat(i) + parseFloat(r), this._textY = parseFloat(n) + parseFloat(o);
            var a = new Fc();
            return Ma(e, a), Ia(t, a, this._defs), a;
        },
        tspan: function(t, e) {
            var i = t.getAttribute("x"), n = t.getAttribute("y");
            null != i && (this._textX = parseFloat(i)), null != n && (this._textY = parseFloat(n));
            var r = t.getAttribute("dx") || 0, o = t.getAttribute("dy") || 0, a = new Fc();
            return Ma(e, a), Ia(t, a, this._defs), this._textX += r, this._textY += o, a;
        },
        path: function(t, e) {
            var i = xn(t.getAttribute("d") || "");
            return Ma(e, i), Ia(t, i, this._defs), i;
        }
    }, dv = {
        lineargradient: function(t) {
            var e = parseInt(t.getAttribute("x1") || 0, 10), i = parseInt(t.getAttribute("y1") || 0, 10), n = parseInt(t.getAttribute("x2") || 10, 10), r = parseInt(t.getAttribute("y2") || 0, 10), o = new pp(e, i, n, r);
            return Sa(t, o), o;
        },
        radialgradient: function() {}
    }, fv = {
        fill: "fill",
        stroke: "stroke",
        "stroke-width": "lineWidth",
        opacity: "opacity",
        "fill-opacity": "fillOpacity",
        "stroke-opacity": "strokeOpacity",
        "stroke-dasharray": "lineDash",
        "stroke-dashoffset": "lineDashOffset",
        "stroke-linecap": "lineCap",
        "stroke-linejoin": "lineJoin",
        "stroke-miterlimit": "miterLimit",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "font-style": "fontStyle",
        "font-weight": "fontWeight",
        "text-align": "textAlign",
        "alignment-baseline": "textBaseline"
    }, pv = /url\(\s*#(.*?)\)/, gv = /(translate|scale|rotate|skewX|skewY|matrix)\(([\-\s0-9\.e,]*)\)/g, vv = /([^\s:;]+)\s*:\s*([^:;]+)/g, mv = R(), yv = {
        registerMap: function(t, e, i) {
            var n;
            return _(e) ? n = e : e.svg ? n = [ {
                type: "svg",
                source: e.svg,
                specialAreas: e.specialAreas
            } ] : (e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), n = [ {
                type: "geoJSON",
                source: e,
                specialAreas: i
            } ]), f(n, function(t) {
                var e = t.type;
                "geoJson" === e && (e = t.type = "geoJSON");
                var i = _v[e];
                Pu && O(i, "Illegal map type: " + e), i(t);
            }), mv.set(t, n);
        },
        retrieveMap: function(t) {
            return mv.get(t);
        }
    }, _v = {
        geoJSON: function(t) {
            var e = t.source;
            t.geoJSON = w(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e;
        },
        svg: function(t) {
            t.svgXML = wa(t.source);
        }
    }, xv = O, wv = f, bv = x, Sv = b, Mv = Kp.parseClassType, Tv = "4.3.0", Iv = {
        zrender: "4.1.0"
    }, Cv = 1e3, kv = 1e3, Dv = 3e3, Av = {
        PROCESSOR: {
            FILTER: Cv,
            STATISTIC: 5e3
        },
        VISUAL: {
            LAYOUT: kv,
            PROGRESSIVE_LAYOUT: 1100,
            GLOBAL: 2e3,
            CHART: Dv,
            POST_CHART_LAYOUT: 3500,
            COMPONENT: 4e3,
            BRUSH: 5e3
        }
    }, Pv = "__flagInMainProcess", Ov = "__optionUpdated", Lv = /^[a-zA-Z0-9_]+$/;
    Oa.prototype.on = Pa("on"), Oa.prototype.off = Pa("off"), Oa.prototype.one = Pa("one"), 
    c(Oa, Ju);
    var Ev = La.prototype;
    Ev._onframe = function() {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Ov]) {
                var e = this[Ov].silent;
                this[Pv] = !0, Ba(this), Bv.update.call(this), this[Pv] = !1, this[Ov] = !1, Fa.call(this, e), 
                Ha.call(this, e);
            } else if (t.unfinished) {
                var i = 1, n = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date();
                    t.performSeriesTasks(n), t.performDataProcessorTasks(n), Ra(this, n), t.performVisualTasks(n), 
                    Ua(this, this._model, 0, "remain"), i -= +new Date() - r;
                } while (i > 0 && t.unfinished);
                t.unfinished || this._zr.flush();
            }
        }
    }, Ev.getDom = function() {
        return this._dom;
    }, Ev.getZr = function() {
        return this._zr;
    }, Ev.setOption = function(t, e, i) {
        Pu && xv(!this[Pv], "`setOption` should not be called during main process.");
        var n;
        if (Sv(e) && (i = e.lazyUpdate, n = e.silent, e = e.notMerge), this[Pv] = !0, !this._model || e) {
            var r = new go(this._api), o = this._theme, a = this._model = new dg();
            a.scheduler = this._scheduler, a.init(null, null, o, r);
        }
        this._model.setOption(t, Hv), i ? (this[Ov] = {
            silent: n
        }, this[Pv] = !1) : (Ba(this), Bv.update.call(this), this._zr.flush(), this[Ov] = !1, 
        this[Pv] = !1, Fa.call(this, n), Ha.call(this, n));
    }, Ev.setTheme = function() {
        console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0");
    }, Ev.getModel = function() {
        return this._model;
    }, Ev.getOption = function() {
        return this._model && this._model.getOption();
    }, Ev.getWidth = function() {
        return this._zr.getWidth();
    }, Ev.getHeight = function() {
        return this._zr.getHeight();
    }, Ev.getDevicePixelRatio = function() {
        return this._zr.painter.dpr || window.devicePixelRatio || 1;
    }, Ev.getRenderedCanvas = function(t) {
        if (Bu.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), 
        this._zr.painter.getRenderedCanvas(t);
    }, Ev.getSvgDataUrl = function() {
        if (Bu.svgSupported) {
            var t = this._zr;
            return f(t.storage.getDisplayList(), function(t) {
                t.stopAnimation(!0);
            }), t.painter.pathToDataUrl();
        }
    }, Ev.getDataURL = function(t) {
        var e = (t = t || {}).excludeComponents, i = this._model, n = [], r = this;
        wv(e, function(t) {
            i.eachComponent({
                mainType: t
            }, function(t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (n.push(e), e.group.ignore = !0);
            });
        });
        var o = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return wv(n, function(t) {
            t.group.ignore = !1;
        }), o;
    }, Ev.getConnectedDataURL = function(t) {
        if (Bu.canvasSupported) {
            var e = this.group, i = Math.min, r = Math.max, o = 1 / 0;
            if (Uv[e]) {
                var a = o, s = o, l = -o, h = -o, u = [], c = t && t.pixelRatio || 1;
                f(Yv, function(o) {
                    if (o.group === e) {
                        var c = o.getRenderedCanvas(n(t)), d = o.getDom().getBoundingClientRect();
                        a = i(d.left, a), s = i(d.top, s), l = r(d.right, l), h = r(d.bottom, h), u.push({
                            dom: c,
                            left: d.left,
                            top: d.top
                        });
                    }
                });
                var d = (l *= c) - (a *= c), p = (h *= c) - (s *= c), g = Uu();
                g.width = d, g.height = p;
                var v = pi(g);
                return t.connectedBackgroundColor && v.add(new ap({
                    shape: {
                        x: 0,
                        y: 0,
                        width: d,
                        height: p
                    },
                    style: {
                        fill: t.connectedBackgroundColor
                    }
                })), wv(u, function(t) {
                    var e = new ii({
                        style: {
                            x: t.left * c - a,
                            y: t.top * c - s,
                            image: t.dom
                        }
                    });
                    v.add(e);
                }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"));
            }
            return this.getDataURL(t);
        }
    }, Ev.convertToPixel = y(Ea, "convertToPixel"), Ev.convertFromPixel = y(Ea, "convertFromPixel"), 
    Ev.containPixel = function(t, e) {
        var i;
        return t = Ti(this._model, t), f(t, function(t, n) {
            n.indexOf("Models") >= 0 && f(t, function(t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) i |= !!r.containPoint(e); else if ("seriesModels" === n) {
                    var o = this._chartsMap[t.__viewId];
                    o && o.containPoint ? i |= o.containPoint(e, t) : Pu && console.warn(n + ": " + (o ? "The found component do not support containPoint." : "No view mapping to the found component."));
                } else Pu && console.warn(n + ": containPoint is not supported");
            }, this);
        }, this), !!i;
    }, Ev.getVisual = function(t, e) {
        var i = (t = Ti(this._model, t, {
            defaultMainType: "series"
        })).seriesModel;
        Pu && (i || console.warn("There is no specified seires model"));
        var n = i.getData(), r = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != r ? n.getItemVisual(r, e) : n.getVisual(e);
    }, Ev.getViewOfComponentModel = function(t) {
        return this._componentsMap[t.__viewId];
    }, Ev.getViewOfSeriesModel = function(t) {
        return this._chartsMap[t.__viewId];
    };
    var Bv = {
        prepareAndUpdate: function(t) {
            Ba(this), Bv.update.call(this, t);
        },
        update: function(t) {
            var e = this._model, i = this._api, n = this._zr, r = this._coordSysMgr, o = this._scheduler;
            if (e) {
                o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, i), o.performDataProcessorTasks(e, t), 
                Ra(this, e), r.update(e, i), Ga(e), o.performVisualTasks(e, t), Xa(this, e, i, t);
                var a = e.get("backgroundColor") || "transparent";
                if (Bu.canvasSupported) n.setBackgroundColor(a); else {
                    var s = Et(a);
                    a = Nt(s, "rgb"), 0 === s[3] && (a = "transparent");
                }
                qa(e, i);
            }
        },
        updateTransform: function(t) {
            var e = this._model, i = this, n = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function(o, a) {
                    var s = i.getViewOfComponentModel(a);
                    if (s && s.__alive) if (s.updateTransform) {
                        var l = s.updateTransform(a, e, n, t);
                        l && l.update && r.push(s);
                    } else r.push(s);
                });
                var o = R();
                e.eachSeries(function(r) {
                    var a = i._chartsMap[r.__viewId];
                    if (a.updateTransform) {
                        var s = a.updateTransform(r, e, n, t);
                        s && s.update && o.set(r.uid, 1);
                    } else o.set(r.uid, 1);
                }), Ga(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: o
                }), Ua(i, e, 0, t, o), qa(e, this._api);
            }
        },
        updateView: function(t) {
            var e = this._model;
            e && (Jo.markUpdateMethod(t, "updateView"), Ga(e), this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }), Xa(this, this._model, this._api, t), qa(e, this._api));
        },
        updateVisual: function(t) {
            Bv.update.call(this, t);
        },
        updateLayout: function(t) {
            Bv.update.call(this, t);
        }
    };
    Ev.resize = function(t) {
        Pu && xv(!this[Pv], "`resize` should not be called during main process."), this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var i = e.resetOption("media"), n = t && t.silent;
            this[Pv] = !0, i && Ba(this), Bv.update.call(this), this[Pv] = !1, Fa.call(this, n), 
            Ha.call(this, n);
        }
    }, Ev.showLoading = function(t, e) {
        if (Sv(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Xv[t]) {
            var i = Xv[t](this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i);
        } else Pu && console.warn("Loading effects " + t + " not exists.");
    }, Ev.hideLoading = function() {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null;
    }, Ev.makeActionFromEvent = function(t) {
        var e = a({}, t);
        return e.type = Nv[t.type], e;
    }, Ev.dispatchAction = function(t, e) {
        if (Sv(e) || (e = {
            silent: !!e
        }), Rv[t.type] && this._model) {
            if (this[Pv]) return void this._pendingActions.push(t);
            Na.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && Bu.browser.weChat && this._throttledZrFlush(), 
            Fa.call(this, e.silent), Ha.call(this, e.silent);
        }
    }, Ev.appendData = function(t) {
        var e = t.seriesIndex, i = this.getModel().getSeriesByIndex(e);
        Pu && xv(t.data && i), i.appendData(t), this._scheduler.unfinished = !0;
    }, Ev.on = Pa("on"), Ev.off = Pa("off"), Ev.one = Pa("one");
    var zv = [ "click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu" ];
    Ev._initEvents = function() {
        wv(zv, function(t) {
            var e = function(e) {
                var i, n = this.getModel(), r = e.target, o = "globalout" === t;
                if (o) i = {}; else if (r && null != r.dataIndex) {
                    var s = r.dataModel || n.getSeriesByIndex(r.seriesIndex);
                    i = s && s.getDataParams(r.dataIndex, r.dataType, r) || {};
                } else r && r.eventData && (i = a({}, r.eventData));
                if (i) {
                    var l = i.componentType, h = i.componentIndex;
                    ("markLine" === l || "markPoint" === l || "markArea" === l) && (l = "series", h = i.seriesIndex);
                    var u = l && null != h && n.getComponent(l, h), c = u && this["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                    Pu && (o || u && c || console.warn("model or view can not be found by params")), 
                    i.event = e, i.type = t, this._ecEventProcessor.eventInfo = {
                        targetEl: r,
                        packedEvent: i,
                        model: u,
                        view: c
                    }, this.trigger(t, i);
                }
            };
            e.zrEventfulCallAtLast = !0, this._zr.on(t, e, this);
        }, this), wv(Nv, function(t, e) {
            this._messageCenter.on(e, function(t) {
                this.trigger(e, t);
            }, this);
        }, this);
    }, Ev.isDisposed = function() {
        return this._disposed;
    }, Ev.clear = function() {
        this.setOption({
            series: []
        }, !0);
    }, Ev.dispose = function() {
        if (this._disposed) Pu && console.warn("Instance " + this.id + " has been disposed"); else {
            this._disposed = !0, Ci(this.getDom(), Zv, "");
            var t = this._api, e = this._model;
            wv(this._componentsViews, function(i) {
                i.dispose(e, t);
            }), wv(this._chartsViews, function(i) {
                i.dispose(e, t);
            }), this._zr.dispose(), delete Yv[this.id];
        }
    }, c(La, Ju), Qa.prototype = {
        constructor: Qa,
        normalizeQuery: function(t) {
            var e = {}, i = {}, n = {};
            if (w(t)) {
                var r = Mv(t);
                e.mainType = r.main || null, e.subType = r.sub || null;
            } else {
                var o = [ "Index", "Name", "Id" ], a = {
                    name: 1,
                    dataIndex: 1,
                    dataType: 1
                };
                f(t, function(t, r) {
                    for (var s = !1, l = 0; l < o.length; l++) {
                        var h = o[l], u = r.lastIndexOf(h);
                        if (u > 0 && u === r.length - h.length) {
                            var c = r.slice(0, u);
                            "data" !== c && (e.mainType = c, e[h.toLowerCase()] = t, s = !0);
                        }
                    }
                    a.hasOwnProperty(r) && (i[r] = t, s = !0), s || (n[r] = t);
                });
            }
            return {
                cptQuery: e,
                dataQuery: i,
                otherQuery: n
            };
        },
        filter: function(t, e) {
            function i(t, e, i, n) {
                return null == t[i] || e[n || i] === t[i];
            }
            var n = this.eventInfo;
            if (!n) return !0;
            var r = n.targetEl, o = n.packedEvent, a = n.model, s = n.view;
            if (!a || !s) return !0;
            var l = e.cptQuery, h = e.dataQuery;
            return i(l, a, "mainType") && i(l, a, "subType") && i(l, a, "index", "componentIndex") && i(l, a, "name") && i(l, a, "id") && i(h, o, "name") && i(h, o, "dataIndex") && i(h, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o));
        },
        afterTrigger: function() {
            this.eventInfo = null;
        }
    };
    var Rv = {}, Nv = {}, Fv = [], Hv = [], Vv = [], Wv = [], Gv = {}, Xv = {}, Yv = {}, Uv = {}, qv = new Date() - 0, jv = new Date() - 0, Zv = "_echarts_instance_", Kv = ts;
    ss(2e3, qg), ns(Ig), rs(5e3, function(t) {
        var e = R();
        t.eachSeries(function(t) {
            var i = t.get("stack");
            if (i) {
                var n = e.get(i) || e.set(i, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                n.length && r.setCalculationInfo("stackedOnSeries", n[n.length - 1].seriesModel), 
                n.push(o);
            }
        }), e.each(Oo);
    }), hs("default", function(t, e) {
        s(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var i = new ap({
            style: {
                fill: e.maskColor
            },
            zlevel: e.zlevel,
            z: 1e4
        }), n = new cp({
            shape: {
                startAngle: -Kg / 2,
                endAngle: -Kg / 2 + .1,
                r: 10
            },
            style: {
                stroke: e.color,
                lineCap: "round",
                lineWidth: 5
            },
            zlevel: e.zlevel,
            z: 10001
        }), r = new ap({
            style: {
                fill: "none",
                text: e.text,
                textPosition: "right",
                textDistance: 10,
                textFill: e.textColor
            },
            zlevel: e.zlevel,
            z: 10001
        });
        n.animateShape(!0).when(1e3, {
            endAngle: 3 * Kg / 2
        }).start("circularInOut"), n.animateShape(!0).when(1e3, {
            startAngle: 3 * Kg / 2
        }).delay(300).start("circularInOut");
        var o = new Fc();
        return o.add(n), o.add(r), o.add(i), o.resize = function() {
            var e = t.getWidth() / 2, o = t.getHeight() / 2;
            n.setShape({
                cx: e,
                cy: o
            });
            var a = n.shape.r;
            r.setShape({
                x: e - a,
                y: o - a,
                width: 2 * a,
                height: 2 * a
            }), i.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            });
        }, o.resize(), o;
    }), os({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, N), os({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, N), is("light", rv), is("dark", lv);
    var $v = {};
    fs.prototype = {
        constructor: fs,
        add: function(t) {
            return this._add = t, this;
        },
        update: function(t) {
            return this._update = t, this;
        },
        remove: function(t) {
            return this._remove = t, this;
        },
        execute: function() {
            var t = this._old, e = this._new, i = {}, n = [], r = [];
            for (ps(t, {}, n, "_oldKeyGetter", this), ps(e, i, r, "_newKeyGetter", this), o = 0; o < t.length; o++) null != (s = i[a = n[o]]) ? ((h = s.length) ? (1 === h && (i[a] = null), 
            s = s.unshift()) : i[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o);
            for (var o = 0; o < r.length; o++) {
                var a = r[o];
                if (i.hasOwnProperty(a)) {
                    var s = i[a];
                    if (null == s) continue;
                    if (s.length) for (var l = 0, h = s.length; h > l; l++) this._add && this._add(s[l]); else this._add && this._add(s);
                }
            }
        }
    };
    var Qv = R([ "tooltip", "label", "itemName", "itemId", "seriesName" ]), Jv = b, tm = "undefined", em = -1, im = "e\0\0", nm = {
        float: ("undefined" == typeof Float64Array ? "undefined" : t(Float64Array)) === tm ? Array : Float64Array,
        int: ("undefined" == typeof Int32Array ? "undefined" : t(Int32Array)) === tm ? Array : Int32Array,
        ordinal: Array,
        number: Array,
        time: Array
    }, rm = ("undefined" == typeof Uint32Array ? "undefined" : t(Uint32Array)) === tm ? Array : Uint32Array, om = ("undefined" == typeof Int32Array ? "undefined" : t(Int32Array)) === tm ? Array : Int32Array, am = ("undefined" == typeof Uint16Array ? "undefined" : t(Uint16Array)) === tm ? Array : Uint16Array, sm = [ "hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx" ], lm = [ "_extent", "_approximateExtent", "_rawExtent" ], hm = function(t, e) {
        t = t || [ "x", "y" ];
        for (var i = {}, n = [], r = {}, o = 0; o < t.length; o++) {
            var a = t[o];
            w(a) && (a = {
                name: a
            });
            var s = a.name;
            a.type = a.type || "float", a.coordDim || (a.coordDim = s, a.coordDimIndex = 0), 
            a.otherDims = a.otherDims || {}, n.push(s), i[s] = a, a.index = o, a.createInvertedIndices && (r[s] = []);
        }
        this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, 
        this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], 
        this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, 
        this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], 
        this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, 
        this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = gs(this), 
        this._invertedIndicesMap = r, this._calculationInfo = {}, this.userOutput = this._dimensionsSummary.userOutput;
    }, um = hm.prototype;
    um.type = "list", um.hasItemOption = !0, um.getDimension = function(t) {
        return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), 
        t;
    }, um.getDimensionInfo = function(t) {
        return this._dimensionInfos[this.getDimension(t)];
    }, um.getDimensionsOnCoord = function() {
        return this._dimensionsSummary.dataDimsOnCoord.slice();
    }, um.mapDimension = function(t, e) {
        var i = this._dimensionsSummary;
        if (null == e) return i.encodeFirstDimNotExtra[t];
        var n = i.encode[t];
        return !0 === e ? (n || []).slice() : n && n[e];
    }, um.initData = function(t, e, i) {
        var n = Yr.isInstance(t) || d(t);
        if (n && (t = new Lo(t, this.dimensions.length)), Pu && !n && ("function" != typeof t.getItem || "function" != typeof t.count)) throw new Error("Inavlid data provider.");
        this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], 
        this._idList = [], this._nameRepeatCount = {}, i || (this.hasItemOption = !1), this.defaultDimValueGetter = Ag[this._rawData.getSource().sourceFormat], 
        this._dimValueGetter = i = i || this.defaultDimValueGetter, this._dimValueGetterArrayRows = Ag.arrayRows, 
        this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1);
    }, um.getProvider = function() {
        return this._rawData;
    }, um.appendData = function(t) {
        Pu && O(!this._indices, "appendData can only be called on raw data.");
        var e = this._rawData, i = this.count();
        e.appendData(t);
        var n = e.count();
        e.persistent || (n += i), this._initDataFromProvider(i, n);
    }, um.appendValues = function(t, e) {
        for (var i = this._chunkSize, n = this._storage, r = this.dimensions, o = r.length, a = this._rawExtent, s = this.count(), l = s + Math.max(t.length, e ? e.length : 0), h = this._chunkCount, u = 0; o > u; u++) a[m = r[u]] || (a[m] = [ 1 / 0, -1 / 0 ]), 
        n[m] || (n[m] = []), bs(n, this._dimensionInfos[m], i, h, l), this._chunkCount = n[m].length;
        for (var c = new Array(o), d = s; l > d; d++) {
            for (var f = d - s, p = Math.floor(d / i), g = d % i, v = 0; o > v; v++) {
                var m = r[v], y = this._dimValueGetterArrayRows(t[f] || c, m, f, v);
                n[m][p][g] = y;
                var _ = a[m];
                y < _[0] && (_[0] = y), y > _[1] && (_[1] = y);
            }
            e && (this._nameList[d] = e[f]);
        }
        this._rawCount = this._count = l, this._extent = {}, Ss(this);
    }, um._initDataFromProvider = function(t, e) {
        if (!(t >= e)) {
            for (var i, n = this._chunkSize, r = this._rawData, o = this._storage, a = this.dimensions, s = a.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, d = this._nameRepeatCount = {}, f = this._chunkCount, p = 0; s > p; p++) {
                c[w = a[p]] || (c[w] = [ 1 / 0, -1 / 0 ]);
                var g = l[w];
                0 === g.otherDims.itemName && (i = this._nameDimIdx = p), 0 === g.otherDims.itemId && (this._idDimIdx = p), 
                o[w] || (o[w] = []), bs(o, g, n, f, e), this._chunkCount = o[w].length;
            }
            for (var v = new Array(s), m = t; e > m; m++) {
                v = r.getItem(m, v);
                for (var y = Math.floor(m / n), _ = m % n, x = 0; s > x; x++) {
                    var w = a[x], b = o[w][y], S = this._dimValueGetter(v, w, m, x);
                    b[_] = S;
                    var M = c[w];
                    S < M[0] && (M[0] = S), S > M[1] && (M[1] = S);
                }
                if (!r.pure) {
                    var T = h[m];
                    if (v && null == T) if (null != v.name) h[m] = T = v.name; else if (null != i) {
                        var I = a[i], C = o[I][y];
                        if (C) {
                            T = C[_];
                            var k = l[I].ordinalMeta;
                            k && k.categories.length && (T = k.categories[T]);
                        }
                    }
                    var D = null == v ? null : v.id;
                    null == D && null != T && (d[T] = d[T] || 0, D = T, d[T] > 0 && (D += "__ec__" + d[T]), 
                    d[T]++), null != D && (u[m] = D);
                }
            }
            !r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, 
            Ss(this);
        }
    }, um.count = function() {
        return this._count;
    }, um.getIndices = function() {
        var t = this._indices;
        if (t) {
            var e = t.constructor, i = this._count;
            if (e === Array) {
                n = new e(i);
                for (r = 0; i > r; r++) n[r] = t[r];
            } else n = new e(t.buffer, 0, i);
        } else for (var e = _s(this), n = new e(this.count()), r = 0; r < n.length; r++) n[r] = r;
        return n;
    }, um.get = function(t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var i = this._storage;
        if (!i[t]) return NaN;
        e = this.getRawIndex(e);
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return i[t][n][r];
    }, um.getByRawIndex = function(t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var i = this._storage[t];
        if (!i) return NaN;
        var n = Math.floor(e / this._chunkSize), r = e % this._chunkSize;
        return i[n][r];
    }, um._getFast = function(t, e) {
        var i = Math.floor(e / this._chunkSize), n = e % this._chunkSize;
        return this._storage[t][i][n];
    }, um.getValues = function(t, e) {
        var i = [];
        _(t) || (e = t, t = this.dimensions);
        for (var n = 0, r = t.length; r > n; n++) i.push(this.get(t[n], e));
        return i;
    }, um.hasValue = function(t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, i = 0, n = e.length; n > i; i++) if (isNaN(this.get(e[i], t))) return !1;
        return !0;
    }, um.getDataExtent = function(t) {
        t = this.getDimension(t);
        var e = [ 1 / 0, -1 / 0 ];
        if (!this._storage[t]) return e;
        var i, n = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (i = this._extent[t]) return i.slice();
        for (var r = (i = e)[0], o = i[1], a = 0; n > a; a++) {
            var s = this._getFast(t, this.getRawIndex(a));
            r > s && (r = s), s > o && (o = s);
        }
        return i = [ r, o ], this._extent[t] = i, i;
    }, um.getApproximateExtent = function(t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t);
    }, um.setApproximateExtent = function(t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice();
    }, um.getCalculationInfo = function(t) {
        return this._calculationInfo[t];
    }, um.setCalculationInfo = function(t, e) {
        Jv(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e;
    }, um.getSum = function(t) {
        var e = 0;
        if (this._storage[t]) for (var i = 0, n = this.count(); n > i; i++) {
            var r = this.get(t, i);
            isNaN(r) || (e += r);
        }
        return e;
    }, um.getMedian = function(t) {
        var e = [];
        this.each(t, function(t) {
            isNaN(t) || e.push(t);
        });
        var i = [].concat(e).sort(function(t, e) {
            return t - e;
        }), n = this.count();
        return 0 === n ? 0 : n % 2 == 1 ? i[(n - 1) / 2] : (i[n / 2] + i[n / 2 - 1]) / 2;
    }, um.rawIndexOf = function(t, e) {
        var i = t && this._invertedIndicesMap[t];
        if (Pu && !i) throw new Error("Do not supported yet");
        var n = i[e];
        return null == n || isNaN(n) ? em : n;
    }, um.indexOfName = function(t) {
        for (var e = 0, i = this.count(); i > e; e++) if (this.getName(e) === t) return e;
        return -1;
    }, um.indexOfRawIndex = function(t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || 0 > t) return -1;
        var e = this._indices, i = e[t];
        if (null != i && i < this._count && i === t) return t;
        for (var n = 0, r = this._count - 1; r >= n; ) {
            var o = (n + r) / 2 | 0;
            if (e[o] < t) n = o + 1; else {
                if (!(e[o] > t)) return o;
                r = o - 1;
            }
        }
        return -1;
    }, um.indicesOfNearest = function(t, e, i) {
        var n = [];
        if (!this._storage[t]) return n;
        null == i && (i = 1 / 0);
        for (var r = Number.MAX_VALUE, o = -1, a = 0, s = this.count(); s > a; a++) {
            var l = e - this.get(t, a), h = Math.abs(l);
            i >= l && r >= h && ((r > h || l >= 0 && 0 > o) && (r = h, o = l, n.length = 0), 
            n.push(a));
        }
        return n;
    }, um.getRawIndex = Ts, um.getRawDataItem = function(t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], i = 0; i < this.dimensions.length; i++) {
            var n = this.dimensions[i];
            e.push(this.get(n, t));
        }
        return e;
    }, um.getName = function(t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Ms(this, this._nameDimIdx, e) || "";
    }, um.getId = function(t) {
        return Cs(this, this.getRawIndex(t));
    }, um.each = function(t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(ks(t), this.getDimension, this), 
            Pu && Ds(this, t);
            for (var r = t.length, o = 0; o < this.count(); o++) switch (r) {
              case 0:
                e.call(i, o);
                break;

              case 1:
                e.call(i, this.get(t[0], o), o);
                break;

              case 2:
                e.call(i, this.get(t[0], o), this.get(t[1], o), o);
                break;

              default:
                for (var a = 0, s = []; r > a; a++) s[a] = this.get(t[a], o);
                s[a] = o, e.apply(i, s);
            }
        }
    }, um.filterSelf = function(t, e, i, n) {
        if (this._count) {
            "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this, t = p(ks(t), this.getDimension, this), 
            Pu && Ds(this, t);
            for (var r = this.count(), o = new (_s(this))(r), a = [], s = t.length, l = 0, h = t[0], u = 0; r > u; u++) {
                var c, d = this.getRawIndex(u);
                if (0 === s) c = e.call(i, u); else if (1 === s) {
                    var f = this._getFast(h, d);
                    c = e.call(i, f, u);
                } else {
                    for (var g = 0; s > g; g++) a[g] = this._getFast(h, d);
                    a[g] = u, c = e.apply(i, a);
                }
                c && (o[l++] = d);
            }
            return r > l && (this._indices = o), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? Is : Ts, 
            this;
        }
    }, um.selectRange = function(t) {
        if (this._count) {
            var e = [];
            for (var i in t) t.hasOwnProperty(i) && e.push(i);
            Pu && Ds(this, e);
            var n = e.length;
            if (n) {
                var r = this.count(), o = new (_s(this))(r), a = 0, s = e[0], l = t[s][0], h = t[s][1], u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === n) {
                        for (var d = this._storage[e[0]], f = 0; f < this._chunkCount; f++) for (var p = d[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; g > v; v++) ((w = p[v]) >= l && h >= w || isNaN(w)) && (o[a++] = c), 
                        c++;
                        u = !0;
                    } else if (2 === n) {
                        for (var d = this._storage[s], m = this._storage[e[1]], y = t[e[1]][0], _ = t[e[1]][1], f = 0; f < this._chunkCount; f++) for (var p = d[f], x = m[f], g = Math.min(this._count - f * this._chunkSize, this._chunkSize), v = 0; g > v; v++) {
                            var w = p[v], b = x[v];
                            (w >= l && h >= w || isNaN(w)) && (b >= y && _ >= b || isNaN(b)) && (o[a++] = c), 
                            c++;
                        }
                        u = !0;
                    }
                }
                if (!u) if (1 === n) for (v = 0; r > v; v++) {
                    M = this.getRawIndex(v);
                    ((w = this._getFast(s, M)) >= l && h >= w || isNaN(w)) && (o[a++] = M);
                } else for (v = 0; r > v; v++) {
                    for (var S = !0, M = this.getRawIndex(v), f = 0; n > f; f++) {
                        var T = e[f];
                        ((w = this._getFast(i, M)) < t[T][0] || w > t[T][1]) && (S = !1);
                    }
                    S && (o[a++] = this.getRawIndex(v));
                }
                return r > a && (this._indices = o), this._count = a, this._extent = {}, this.getRawIndex = this._indices ? Is : Ts, 
                this;
            }
        }
    }, um.mapArray = function(t, e, i, n) {
        "function" == typeof t && (n = i, i = e, e = t, t = []), i = i || n || this;
        var r = [];
        return this.each(t, function() {
            r.push(e && e.apply(this, arguments));
        }, i), r;
    }, um.map = function(e, i, n, r) {
        n = n || r || this, e = p(ks(e), this.getDimension, this), Pu && Ds(this, e);
        var o = As(this, e);
        o._indices = this._indices, o.getRawIndex = o._indices ? Is : Ts;
        for (var a = o._storage, s = [], l = this._chunkSize, h = e.length, u = this.count(), c = [], d = o._rawExtent, f = 0; u > f; f++) {
            for (var g = 0; h > g; g++) c[g] = this.get(e[g], f);
            c[h] = f;
            var v = i && i.apply(n, c);
            if (null != v) {
                "object" != (void 0 === v ? "undefined" : t(v)) && (s[0] = v, v = s);
                for (var m = this.getRawIndex(f), y = Math.floor(m / l), _ = m % l, x = 0; x < v.length; x++) {
                    var w = e[x], b = v[x], S = d[w], M = a[w];
                    M && (M[y][_] = b), b < S[0] && (S[0] = b), b > S[1] && (S[1] = b);
                }
            }
        }
        return o;
    }, um.downSample = function(t, e, i, n) {
        for (var r = As(this, [ t ]), o = r._storage, a = [], s = Math.floor(1 / e), l = o[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], d = new (_s(this))(h), f = 0, p = 0; h > p; p += s) {
            s > h - p && (s = h - p, a.length = s);
            for (var g = 0; s > g; g++) {
                var v = this.getRawIndex(p + g), m = Math.floor(v / u), y = v % u;
                a[g] = l[m][y];
            }
            var _ = i(a), x = this.getRawIndex(Math.min(p + n(a, _) || 0, h - 1)), w = x % u;
            l[Math.floor(x / u)][w] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), d[f++] = x;
        }
        return r._count = f, r._indices = d, r.getRawIndex = Is, r;
    }, um.getItemModel = function(t) {
        var e = this.hostModel;
        return new gr(this.getRawDataItem(t), e, e && e.ecModel);
    }, um.diff = function(t) {
        var e = this;
        return new fs(t ? t.getIndices() : [], this.getIndices(), function(e) {
            return Cs(t, e);
        }, function(t) {
            return Cs(e, t);
        });
    }, um.getVisual = function(t) {
        var e = this._visual;
        return e && e[t];
    }, um.setVisual = function(t, e) {
        if (Jv(t)) for (var i in t) t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, 
        this._visual[t] = e;
    }, um.setLayout = function(t, e) {
        if (Jv(t)) for (var i in t) t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e;
    }, um.getLayout = function(t) {
        return this._layout[t];
    }, um.getItemLayout = function(t) {
        return this._itemLayouts[t];
    }, um.setItemLayout = function(t, e, i) {
        this._itemLayouts[t] = i ? a(this._itemLayouts[t] || {}, e) : e;
    }, um.clearItemLayouts = function() {
        this._itemLayouts.length = 0;
    }, um.getItemVisual = function(t, e, i) {
        var n = this._itemVisuals[t], r = n && n[e];
        return null != r || i ? r : this.getVisual(e);
    }, um.setItemVisual = function(t, e, i) {
        var n = this._itemVisuals[t] || {}, r = this.hasItemVisual;
        if (this._itemVisuals[t] = n, Jv(e)) for (var o in e) e.hasOwnProperty(o) && (n[o] = e[o], 
        r[o] = !0); else n[e] = i, r[e] = !0;
    }, um.clearAllVisual = function() {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {};
    };
    var cm = function(t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType;
    };
    um.setItemGraphicEl = function(t, e) {
        var i = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, 
        "group" === e.type && e.traverse(cm, e)), this._graphicEls[t] = e;
    }, um.getItemGraphicEl = function(t) {
        return this._graphicEls[t];
    }, um.eachItemGraphicEl = function(t, e) {
        f(this._graphicEls, function(i, n) {
            i && t && t.call(e, i, n);
        });
    }, um.cloneShallow = function(t) {
        if (!t) {
            var e = p(this.dimensions, this.getDimensionInfo, this);
            t = new hm(e, this.hostModel);
        }
        if (t._storage = this._storage, ws(t, this), this._indices) {
            var i = this._indices.constructor;
            t._indices = new i(this._indices);
        } else t._indices = null;
        return t.getRawIndex = t._indices ? Is : Ts, t;
    }, um.wrapMethod = function(t, e) {
        var i = this[t];
        "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], 
        this.__wrappedMethods.push(t), this[t] = function() {
            var t = i.apply(this, arguments);
            return e.apply(this, [ t ].concat(A(arguments)));
        });
    }, um.TRANSFERABLE_METHODS = [ "cloneShallow", "downSample", "map" ], um.CHANGABLE_METHODS = [ "filterSelf", "selectRange" ];
    var dm = function(t, e) {
        return e = e || {}, Os(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        });
    };
    zg.extend({
        type: "series.line",
        dependencies: [ "grid", "polar" ],
        getInitialData: function(t) {
            if (Pu) {
                var e = t.coordinateSystem;
                if ("polar" !== e && "cartesian2d" !== e) throw new Error("Line not support coordinateSystem besides cartesian and polar");
            }
            return Ns(this.getSource(), this);
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var fm = Dn({
        type: "triangle",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(i, n - o), t.lineTo(i + r, n + o), t.lineTo(i - r, n + o), t.closePath();
        }
    }), pm = Dn({
        type: "diamond",
        shape: {
            cx: 0,
            cy: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.cx, n = e.cy, r = e.width / 2, o = e.height / 2;
            t.moveTo(i, n - o), t.lineTo(i + r, n), t.lineTo(i, n + o), t.lineTo(i - r, n), 
            t.closePath();
        }
    }), gm = Dn({
        type: "pin",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.x, n = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a), l = n - o + a + s, h = Math.asin(s / a), u = Math.cos(h) * a, c = Math.sin(h), d = Math.cos(h), f = .6 * a, p = .7 * a;
            t.moveTo(i - u, l + s), t.arc(i, l, a, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), 
            t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath();
        }
    }), vm = Dn({
        type: "arrow",
        shape: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        buildPath: function(t, e) {
            var i = e.height, n = e.width, r = e.x, o = e.y, a = n / 3 * 2;
            t.moveTo(r, o), t.lineTo(r + a, o + i), t.lineTo(r, o + i / 4 * 3), t.lineTo(r - a, o + i), 
            t.lineTo(r, o), t.closePath();
        }
    }), mm = {
        line: function(t, e, i, n, r) {
            r.x1 = t, r.y1 = e + n / 2, r.x2 = t + i, r.y2 = e + n / 2;
        },
        rect: function(t, e, i, n, r) {
            r.x = t, r.y = e, r.width = i, r.height = n;
        },
        roundRect: function(t, e, i, n, r) {
            r.x = t, r.y = e, r.width = i, r.height = n, r.r = Math.min(i, n) / 4;
        },
        square: function(t, e, i, n, r) {
            var o = Math.min(i, n);
            r.x = t, r.y = e, r.width = o, r.height = o;
        },
        circle: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.r = Math.min(i, n) / 2;
        },
        diamond: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
        },
        pin: function(t, e, i, n, r) {
            r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
        },
        arrow: function(t, e, i, n, r) {
            r.x = t + i / 2, r.y = e + n / 2, r.width = i, r.height = n;
        },
        triangle: function(t, e, i, n, r) {
            r.cx = t + i / 2, r.cy = e + n / 2, r.width = i, r.height = n;
        }
    }, ym = {};
    f({
        line: lp,
        rect: ap,
        roundRect: ap,
        square: ap,
        circle: Zf,
        diamond: pm,
        pin: gm,
        arrow: vm,
        triangle: fm
    }, function(t, e) {
        ym[e] = new t();
    });
    var _m = Dn({
        type: "symbol",
        shape: {
            symbolType: "",
            x: 0,
            y: 0,
            width: 0,
            height: 0
        },
        calculateTextPosition: function(t, e, i) {
            var n = Te(t, e, i), r = this.shape;
            return r && "pin" === r.symbolType && "inside" === e.textPosition && (n.y = i.y + .4 * i.height), 
            n;
        },
        buildPath: function(t, e, i) {
            var n = e.symbolType;
            if ("none" !== n) {
                var r = ym[n];
                r || (n = "rect", r = ym[n]), mm[n](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, i);
            }
        }
    }), xm = Xs.prototype, wm = Xs.getSymbolSize = function(t, e) {
        var i = t.getItemVisual(e, "symbolSize");
        return i instanceof Array ? i.slice() : [ +i, +i ];
    };
    xm._createSymbol = function(t, e, i, n, r) {
        this.removeAll();
        var o = Ws(t, -1, -1, 2, 2, e.getItemVisual(i, "color"), r);
        o.attr({
            z2: 100,
            culling: !0,
            scale: Ys(n)
        }), o.drift = Us, this._symbolType = t, this.add(o);
    }, xm.stopSymbolAnimation = function(t) {
        this.childAt(0).stopAnimation(t);
    }, xm.getSymbolPath = function() {
        return this.childAt(0);
    }, xm.getScale = function() {
        return this.childAt(0).scale;
    }, xm.highlight = function() {
        this.childAt(0).trigger("emphasis");
    }, xm.downplay = function() {
        this.childAt(0).trigger("normal");
    }, xm.setZ = function(t, e) {
        var i = this.childAt(0);
        i.zlevel = t, i.z = e;
    }, xm.setDraggable = function(t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : e.cursor;
    }, xm.updateData = function(t, e, i) {
        this.silent = !1;
        var n = t.getItemVisual(e, "symbol") || "circle", r = t.hostModel, o = wm(t, e), a = n !== this._symbolType;
        if (a) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(n, t, e, o, s);
        } else (l = this.childAt(0)).silent = !1, sr(l, {
            scale: Ys(o)
        }, r, e);
        if (this._updateCommon(t, e, o, i), a) {
            var l = this.childAt(0), h = i && i.fadeIn, u = {
                scale: l.scale.slice()
            };
            h && (u.style = {
                opacity: l.style.opacity
            }), l.scale = [ 0, 0 ], h && (l.style.opacity = 0), lr(l, u, r, e);
        }
        this._seriesModel = r;
    };
    var bm = [ "itemStyle" ], Sm = [ "emphasis", "itemStyle" ], Mm = [ "label" ], Tm = [ "emphasis", "label" ];
    xm._updateCommon = function(t, e, i, n) {
        var r = this.childAt(0), o = t.hostModel, s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({
            strokeNoScale: !0
        });
        var l = n && n.itemStyle, h = n && n.hoverItemStyle, u = n && n.symbolRotate, c = n && n.symbolOffset, d = n && n.labelModel, f = n && n.hoverLabelModel, p = n && n.hoverAnimation, g = n && n.cursorStyle;
        if (!n || t.hasItemOption) {
            var v = n && n.itemModel ? n.itemModel : t.getItemModel(e);
            l = v.getModel(bm).getItemStyle([ "color" ]), h = v.getModel(Sm).getItemStyle(), 
            u = v.getShallow("symbolRotate"), c = v.getShallow("symbolOffset"), d = v.getModel(Mm), 
            f = v.getModel(Tm), p = v.getShallow("hoverAnimation"), g = v.getShallow("cursor");
        } else h = a({}, h);
        var m = r.style;
        r.attr("rotation", (u || 0) * Math.PI / 180 || 0), c && r.attr("position", [ wr(c[0], i[0]), wr(c[1], i[1]) ]), 
        g && r.attr("cursor", g), r.setColor(s, n && n.symbolInnerColor), r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (m.opacity = y);
        var _ = t.getItemVisual(e, "liftZ"), x = r.__z2Origin;
        null != _ ? null == x && (r.__z2Origin = r.z2, r.z2 += _) : null != x && (r.z2 = x, 
        r.__z2Origin = null);
        var w = n && n.useNameLabel;
        $n(m, h, d, f, {
            labelFetcher: o,
            labelDataIndex: e,
            defaultText: function(e) {
                return w ? t.getName(e) : Gs(t, e);
            },
            isRectText: !0,
            autoColor: s
        }), r.__symbolOriginalScale = Ys(i), r.hoverStyle = h, r.highDownOnUpdate = p && o.isAnimationEnabled() ? qs : null, 
        qn(r);
    }, xm.fadeOut = function(t, e) {
        var i = this.childAt(0);
        this.silent = i.silent = !0, !(e && e.keepLabel) && (i.style.text = null), sr(i, {
            style: {
                opacity: 0
            },
            scale: [ 0, 0 ]
        }, this._seriesModel, this.dataIndex, t);
    }, u(Xs, Fc);
    var Im = js.prototype;
    Im.updateData = function(t, e) {
        e = Ks(e);
        var i = this.group, n = t.hostModel, r = this._data, o = this._symbolCtor, a = $s(t);
        r || i.removeAll(), t.diff(r).add(function(n) {
            var r = t.getItemLayout(n);
            if (Zs(t, r, n, e)) {
                var s = new o(t, n, a);
                s.attr("position", r), t.setItemGraphicEl(n, s), i.add(s);
            }
        }).update(function(s, l) {
            var h = r.getItemGraphicEl(l), u = t.getItemLayout(s);
            return Zs(t, u, s, e) ? (h ? (h.updateData(t, s, a), sr(h, {
                position: u
            }, n)) : (h = new o(t, s)).attr("position", u), i.add(h), void t.setItemGraphicEl(s, h)) : void i.remove(h);
        }).remove(function(t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function() {
                i.remove(e);
            });
        }).execute(), this._data = t;
    }, Im.isPersistent = function() {
        return !0;
    }, Im.updateLayout = function() {
        var t = this._data;
        t && t.eachItemGraphicEl(function(e, i) {
            var n = t.getItemLayout(i);
            e.attr("position", n);
        });
    }, Im.incrementalPrepareUpdate = function(t) {
        this._seriesScope = $s(t), this._data = null, this.group.removeAll();
    }, Im.incrementalUpdate = function(t, e, i) {
        i = Ks(i);
        for (var n = t.start; n < t.end; n++) {
            var r = e.getItemLayout(n);
            if (Zs(e, r, n, i)) {
                var o = new this._symbolCtor(e, n, this._seriesScope);
                o.traverse(function(t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0);
                }), o.attr("position", r), this.group.add(o), e.setItemGraphicEl(n, o);
            }
        }
    }, Im.remove = function(t) {
        var e = this.group, i = this._data;
        i && t ? i.eachItemGraphicEl(function(t) {
            t.fadeOut(function() {
                e.remove(t);
            });
        }) : e.removeAll();
    };
    var Cm = function(t, e, i, n, r, o, a, s) {
        for (var l = el(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], v = Qs(r, e, a), m = Qs(o, t, s), y = 0; y < l.length; y++) {
            var _ = l[y], x = !0;
            switch (_.cmd) {
              case "=":
                var w = t.getItemLayout(_.idx), b = e.getItemLayout(_.idx1);
                (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(i[_.idx]), 
                d.push(n[_.idx1]), g.push(e.getRawIndex(_.idx1));
                break;

              case "+":
                S = _.idx;
                h.push(r.dataToPoint([ e.get(v.dataDimsForPoint[0], S), e.get(v.dataDimsForPoint[1], S) ])), 
                u.push(e.getItemLayout(S).slice()), c.push(tl(v, r, e, S)), d.push(n[S]), g.push(e.getRawIndex(S));
                break;

              case "-":
                var S = _.idx, M = t.getRawIndex(S);
                M !== S ? (h.push(t.getItemLayout(S)), u.push(o.dataToPoint([ t.get(m.dataDimsForPoint[0], S), t.get(m.dataDimsForPoint[1], S) ])), 
                c.push(i[S]), d.push(tl(m, o, t, S)), g.push(M)) : x = !1;
            }
            x && (f.push(_), p.push(p.length));
        }
        p.sort(function(t, e) {
            return g[t] - g[e];
        });
        for (var T = [], I = [], C = [], k = [], D = [], y = 0; y < p.length; y++) {
            S = p[y];
            T[y] = h[S], I[y] = u[S], C[y] = c[S], k[y] = d[S], D[y] = f[S];
        }
        return {
            current: T,
            next: I,
            stackedOnCurrent: C,
            stackedOnNext: k,
            status: D
        };
    }, km = Z, Dm = K, Am = function(t, e, i, n) {
        return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t;
    }, Pm = function(t, e) {
        return t[0] = e[0], t[1] = e[1], t;
    }, Om = [], Lm = [], Em = [], Bm = vn.extend({
        type: "ec-polyline",
        shape: {
            points: [],
            smooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        style: {
            fill: null,
            stroke: "#000"
        },
        brush: $f(vn.prototype.brush),
        buildPath: function(t, e) {
            var i = e.points, n = 0, r = i.length, o = al(i, e.smoothConstraint);
            if (e.connectNulls) {
                for (;r > 0 && il(i[r - 1]); r--) ;
                for (;r > n && il(i[n]); n++) ;
            }
            for (;r > n; ) n += nl(t, i, n, r, r, 1, o.min, o.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
        }
    }), zm = vn.extend({
        type: "ec-polygon",
        shape: {
            points: [],
            stackedOnPoints: [],
            smooth: 0,
            stackedOnSmooth: 0,
            smoothConstraint: !0,
            smoothMonotone: null,
            connectNulls: !1
        },
        brush: $f(vn.prototype.brush),
        buildPath: function(t, e) {
            var i = e.points, n = e.stackedOnPoints, r = 0, o = i.length, a = e.smoothMonotone, s = al(i, e.smoothConstraint), l = al(n, e.smoothConstraint);
            if (e.connectNulls) {
                for (;o > 0 && il(i[o - 1]); o--) ;
                for (;o > r && il(i[r]); r++) ;
            }
            for (;o > r; ) {
                var h = nl(t, i, r, o, o, 1, s.min, s.max, e.smooth, a, e.connectNulls);
                nl(t, n, r + h - 1, h, o, -1, l.min, l.max, e.stackedOnSmooth, a, e.connectNulls), 
                r += h + 1, t.closePath();
            }
        }
    });
    Jo.extend({
        type: "line",
        init: function() {
            var t = new Fc(), e = new js();
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t;
        },
        render: function(t, e, i) {
            var n = t.coordinateSystem, r = this.group, o = t.getData(), a = t.getModel("lineStyle"), l = t.getModel("areaStyle"), h = o.mapArray(o.getItemLayout), u = "polar" === n.type, c = this._coordSys, d = this._symbolDraw, f = this._polyline, p = this._polygon, g = this._lineGroup, v = t.get("animation"), m = !l.isEmpty(), y = l.get("origin"), _ = ul(n, o, Qs(n, o, y)), x = t.get("showSymbol"), w = x && !u && vl(t, o, n), b = this._data;
            b && b.eachItemGraphicEl(function(t, e) {
                t.__temp && (r.remove(t), b.setItemGraphicEl(e, null));
            }), x || d.remove(), r.add(g);
            var S = !u && t.get("step");
            f && c.type === n.type && S === this._step ? (m && !p ? p = this._newPolygon(h, _, n, v) : p && !m && (g.remove(p), 
            p = this._polygon = null), g.setClipPath(fl(n, !1, !1, t)), x && d.updateData(o, {
                isIgnore: w,
                clipShape: fl(n, !1, !0, t)
            }), o.eachItemGraphicEl(function(t) {
                t.stopAnimation(!0);
            }), sl(this._stackedOnPoints, _) && sl(this._points, h) || (v ? this._updateAnimation(o, _, n, i, S, y) : (S && (h = pl(h, n, S), 
            _ = pl(_, n, S)), f.setShape({
                points: h
            }), p && p.setShape({
                points: h,
                stackedOnPoints: _
            })))) : (x && d.updateData(o, {
                isIgnore: w,
                clipShape: fl(n, !1, !0, t)
            }), S && (h = pl(h, n, S), _ = pl(_, n, S)), f = this._newPolyline(h, n, v), m && (p = this._newPolygon(h, _, n, v)), 
            g.setClipPath(fl(n, !0, !1, t)));
            var M = gl(o, n) || o.getVisual("color");
            f.useStyle(s(a.getLineStyle(), {
                fill: "none",
                stroke: M,
                lineJoin: "bevel"
            }));
            var T = t.get("smooth");
            if (T = ll(t.get("smooth")), f.setShape({
                smooth: T,
                smoothMonotone: t.get("smoothMonotone"),
                connectNulls: t.get("connectNulls")
            }), p) {
                var I = o.getCalculationInfo("stackedOnSeries"), C = 0;
                p.useStyle(s(l.getAreaStyle(), {
                    fill: M,
                    opacity: .7,
                    lineJoin: "bevel"
                })), I && (C = ll(I.get("smooth"))), p.setShape({
                    smooth: T,
                    stackedOnSmooth: C,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                });
            }
            this._data = o, this._coordSys = n, this._stackedOnPoints = _, this._points = h, 
            this._step = S, this._valueOrigin = y;
        },
        dispose: function() {},
        highlight: function(t, e, i, n) {
            var r = t.getData(), o = Si(r, n);
            if (!(o instanceof Array) && null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                if (!a) {
                    var s = r.getItemLayout(o);
                    if (!s) return;
                    (a = new Xs(r, o)).position = s, a.setZ(t.get("zlevel"), t.get("z")), a.ignore = isNaN(s[0]) || isNaN(s[1]), 
                    a.__temp = !0, r.setItemGraphicEl(o, a), a.stopSymbolAnimation(!0), this.group.add(a);
                }
                a.highlight();
            } else Jo.prototype.highlight.call(this, t, e, i, n);
        },
        downplay: function(t, e, i, n) {
            var r = t.getData(), o = Si(r, n);
            if (null != o && o >= 0) {
                var a = r.getItemGraphicEl(o);
                a && (a.__temp ? (r.setItemGraphicEl(o, null), this.group.remove(a)) : a.downplay());
            } else Jo.prototype.downplay.call(this, t, e, i, n);
        },
        _newPolyline: function(t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new Bm({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e;
        },
        _newPolygon: function(t, e) {
            var i = this._polygon;
            return i && this._lineGroup.remove(i), i = new zm({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }), this._lineGroup.add(i), this._polygon = i, i;
        },
        _updateAnimation: function(t, e, i, n, r, o) {
            var a = this._polyline, s = this._polygon, l = t.hostModel, h = Cm(this._data, t, this._stackedOnPoints, e, this._coordSys, i, this._valueOrigin, o), u = h.current, c = h.stackedOnCurrent, d = h.next, f = h.stackedOnNext;
            r && (u = pl(h.current, i, r), c = pl(h.stackedOnCurrent, i, r), d = pl(h.next, i, r), 
            f = pl(h.stackedOnNext, i, r)), a.shape.__points = h.current, a.shape.points = u, 
            sr(a, {
                shape: {
                    points: d
                }
            }, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), sr(s, {
                shape: {
                    points: d,
                    stackedOnPoints: f
                }
            }, l));
            for (var p = [], g = h.status, v = 0; v < g.length; v++) if ("=" === g[v].cmd) {
                var m = t.getItemGraphicEl(g[v].idx1);
                m && p.push({
                    el: m,
                    ptIdx: v
                });
            }
            a.animators && a.animators.length && a.animators[0].during(function() {
                for (var t = 0; t < p.length; t++) p[t].el.attr("position", a.shape.__points[p[t].ptIdx]);
            });
        },
        remove: function() {
            var t = this.group, e = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), e && e.eachItemGraphicEl(function(i, n) {
                i.__temp && (t.remove(i), e.setItemGraphicEl(n, null));
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null;
        }
    });
    var Rm = {
        average: function(t) {
            for (var e = 0, i = 0, n = 0; n < t.length; n++) isNaN(t[n]) || (e += t[n], i++);
            return 0 === i ? NaN : e / i;
        },
        sum: function(t) {
            for (var e = 0, i = 0; i < t.length; i++) e += t[i] || 0;
            return e;
        },
        max: function(t) {
            for (var e = -1 / 0, i = 0; i < t.length; i++) t[i] > e && (e = t[i]);
            return isFinite(e) ? e : NaN;
        },
        min: function(t) {
            for (var e = 1 / 0, i = 0; i < t.length; i++) t[i] < e && (e = t[i]);
            return isFinite(e) ? e : NaN;
        },
        nearest: function(t) {
            return t[0];
        }
    }, Nm = function(t) {
        return Math.round(t.length / 2);
    };
    yl.prototype.parse = function(t) {
        return t;
    }, yl.prototype.getSetting = function(t) {
        return this._setting[t];
    }, yl.prototype.contain = function(t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1];
    }, yl.prototype.normalize = function(t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0]);
    }, yl.prototype.scale = function(t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0];
    }, yl.prototype.unionExtent = function(t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }, yl.prototype.unionExtentFromData = function(t, e) {
        this.unionExtent(t.getApproximateExtent(e));
    }, yl.prototype.getExtent = function() {
        return this._extent.slice();
    }, yl.prototype.setExtent = function(t, e) {
        var i = this._extent;
        isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e);
    }, yl.prototype.isBlank = function() {
        return this._isBlank;
    }, yl.prototype.setBlank = function(t) {
        this._isBlank = t;
    }, yl.prototype.getLabel = null, Oi(yl), zi(yl, {
        registerWhenExtend: !0
    }), _l.createByAxisModel = function(t) {
        var e = t.option, i = e.data, n = i && p(i, wl);
        return new _l({
            categories: n,
            needCollect: !n,
            deduplication: !1 !== e.dedplication
        });
    };
    var Fm = _l.prototype;
    Fm.getOrdinal = function(t) {
        return xl(this).get(t);
    }, Fm.parseAndCollect = function(t) {
        var e, i = this._needCollect;
        if ("string" != typeof t && !i) return t;
        if (i && !this._deduplication) return e = this.categories.length, this.categories[e] = t, 
        e;
        var n = xl(this);
        return null == (e = n.get(t)) && (i ? (e = this.categories.length, this.categories[e] = t, 
        n.set(t, e)) : e = NaN), e;
    };
    var Hm = yl.prototype, Vm = yl.extend({
        type: "ordinal",
        init: function(t, e) {
            (!t || _(t)) && (t = new _l({
                categories: t
            })), this._ordinalMeta = t, this._extent = e || [ 0, t.categories.length - 1 ];
        },
        parse: function(t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t);
        },
        contain: function(t) {
            return t = this.parse(t), Hm.contain.call(this, t) && null != this._ordinalMeta.categories[t];
        },
        normalize: function(t) {
            return Hm.normalize.call(this, this.parse(t));
        },
        scale: function(t) {
            return Math.round(Hm.scale.call(this, t));
        },
        getTicks: function() {
            for (var t = [], e = this._extent, i = e[0]; i <= e[1]; ) t.push(i), i++;
            return t;
        },
        getLabel: function(t) {
            return this.isBlank() ? void 0 : this._ordinalMeta.categories[t];
        },
        count: function() {
            return this._extent[1] - this._extent[0] + 1;
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        getOrdinalMeta: function() {
            return this._ordinalMeta;
        },
        niceTicks: N,
        niceExtent: N
    });
    Vm.create = function() {
        return new Vm();
    };
    var Wm = br, Gm = br, Xm = yl.extend({
        type: "interval",
        _interval: 0,
        _intervalPrecision: 2,
        setExtent: function(t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e));
        },
        unionExtent: function(t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Xm.prototype.setExtent.call(this, e[0], e[1]);
        },
        getInterval: function() {
            return this._interval;
        },
        setInterval: function(t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Sl(t);
        },
        getTicks: function() {
            return Il(this._interval, this._extent, this._niceExtent, this._intervalPrecision);
        },
        getLabel: function(t, e) {
            if (null == t) return "";
            var i = e && e.precision;
            return null == i ? i = Sr(t) || 0 : "auto" === i && (i = this._intervalPrecision), 
            t = Gm(t, i, !0), Pr(t);
        },
        niceTicks: function(t, e, i) {
            t = t || 5;
            var n = this._extent, r = n[1] - n[0];
            if (isFinite(r)) {
                0 > r && (r = -r, n.reverse());
                var o = bl(n, t, e, i);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent;
            }
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var i = e[0];
                t.fixMax ? e[0] -= i / 2 : (e[1] += i / 2, e[0] -= i / 2);
            } else e[1] = 1;
            var n = e[1] - e[0];
            isFinite(n) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = Gm(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Gm(Math.ceil(e[1] / r) * r));
        }
    });
    Xm.create = function() {
        return new Xm();
    };
    var Ym = "__ec_stack_", Um = ("undefined" != typeof Float32Array ? Float32Array : Array, 
    Fg(), Xm.prototype), qm = Math.ceil, jm = Math.floor, Zm = 36e5, Km = 864e5, $m = function(t, e, i, n) {
        for (;n > i; ) {
            var r = i + n >>> 1;
            t[r][1] < e ? i = r + 1 : n = r;
        }
        return i;
    }, Qm = Xm.extend({
        type: "time",
        getLabel: function(t) {
            var e = this._stepLvl, i = new Date(t);
            return zr(e[0], i, this.getSetting("useUTC"));
        },
        niceExtent: function(t) {
            var e = this._extent;
            if (e[0] === e[1] && (e[0] -= Km, e[1] += Km), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                var i = new Date();
                e[1] = +new Date(i.getFullYear(), i.getMonth(), i.getDate()), e[0] = e[1] - Km;
            }
            this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var n = this._interval;
            t.fixMin || (e[0] = br(jm(e[0] / n) * n)), t.fixMax || (e[1] = br(qm(e[1] / n) * n));
        },
        niceTicks: function(t, e, i) {
            t = t || 10;
            var n = this._extent, r = n[1] - n[0], o = r / t;
            null != e && e > o && (o = e), null != i && o > i && (o = i);
            var a = Jm.length, s = $m(Jm, o, 0, a), l = Jm[Math.min(s, a - 1)], h = l[1];
            "year" === l[0] && (h *= Ar(r / h / t, !0));
            var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+n[0] || +n[1]).getTimezoneOffset() * 1e3, c = [ Math.round(qm((n[0] - u) / h) * h + u), Math.round(jm((n[1] - u) / h) * h + u) ];
            Tl(c, n), this._stepLvl = l, this._interval = h, this._niceExtent = c;
        },
        parse: function(t) {
            return +Cr(t);
        }
    });
    f([ "contain", "normalize" ], function(t) {
        Qm.prototype[t] = function(e) {
            return Um[t].call(this, this.parse(e));
        };
    });
    var Jm = [ [ "hh:mm:ss", 1e3 ], [ "hh:mm:ss", 5e3 ], [ "hh:mm:ss", 1e4 ], [ "hh:mm:ss", 15e3 ], [ "hh:mm:ss", 3e4 ], [ "hh:mm\nMM-dd", 6e4 ], [ "hh:mm\nMM-dd", 3e5 ], [ "hh:mm\nMM-dd", 6e5 ], [ "hh:mm\nMM-dd", 9e5 ], [ "hh:mm\nMM-dd", 18e5 ], [ "hh:mm\nMM-dd", Zm ], [ "hh:mm\nMM-dd", 72e5 ], [ "hh:mm\nMM-dd", 6 * Zm ], [ "hh:mm\nMM-dd", 432e5 ], [ "MM-dd\nyyyy", Km ], [ "MM-dd\nyyyy", 2 * Km ], [ "MM-dd\nyyyy", 3 * Km ], [ "MM-dd\nyyyy", 4 * Km ], [ "MM-dd\nyyyy", 5 * Km ], [ "MM-dd\nyyyy", 6 * Km ], [ "week", 7 * Km ], [ "MM-dd\nyyyy", 864e6 ], [ "week", 14 * Km ], [ "week", 21 * Km ], [ "month", 31 * Km ], [ "week", 42 * Km ], [ "month", 62 * Km ], [ "week", 70 * Km ], [ "quarter", 95 * Km ], [ "month", 31 * Km * 4 ], [ "month", 13392e6 ], [ "half-year", 16416e6 ], [ "month", 31 * Km * 8 ], [ "month", 26784e6 ], [ "year", 380 * Km ] ];
    Qm.create = function(t) {
        return new Qm({
            useUTC: t.ecModel.get("useUTC")
        });
    };
    var ty = yl.prototype, ey = Xm.prototype, iy = Sr, ny = br, ry = Math.floor, oy = Math.ceil, ay = Math.pow, sy = Math.log, ly = yl.extend({
        type: "log",
        base: 10,
        $constructor: function() {
            yl.apply(this, arguments), this._originalScale = new Xm();
        },
        getTicks: function() {
            var t = this._originalScale, e = this._extent, i = t.getExtent();
            return p(ey.getTicks.call(this), function(n) {
                var r = br(ay(this.base, n));
                return r = n === e[0] && t.__fixMin ? Bl(r, i[0]) : r, r = n === e[1] && t.__fixMax ? Bl(r, i[1]) : r;
            }, this);
        },
        getLabel: ey.getLabel,
        scale: function(t) {
            return t = ty.scale.call(this, t), ay(this.base, t);
        },
        setExtent: function(t, e) {
            var i = this.base;
            t = sy(t) / sy(i), e = sy(e) / sy(i), ey.setExtent.call(this, t, e);
        },
        getExtent: function() {
            var t = this.base, e = ty.getExtent.call(this);
            e[0] = ay(t, e[0]), e[1] = ay(t, e[1]);
            var i = this._originalScale, n = i.getExtent();
            return i.__fixMin && (e[0] = Bl(e[0], n[0])), i.__fixMax && (e[1] = Bl(e[1], n[1])), 
            e;
        },
        unionExtent: function(t) {
            this._originalScale.unionExtent(t);
            var e = this.base;
            t[0] = sy(t[0]) / sy(e), t[1] = sy(t[1]) / sy(e), ty.unionExtent.call(this, t);
        },
        unionExtentFromData: function(t, e) {
            this.unionExtent(t.getApproximateExtent(e));
        },
        niceTicks: function(t) {
            t = t || 10;
            var e = this._extent, i = e[1] - e[0];
            if (!(1 / 0 === i || 0 >= i)) {
                var n = kr(i);
                for (.5 >= t / i * n && (n *= 10); !isNaN(n) && Math.abs(n) < 1 && Math.abs(n) > 0; ) n *= 10;
                var r = [ br(oy(e[0] / n) * n), br(ry(e[1] / n) * n) ];
                this._interval = n, this._niceExtent = r;
            }
        },
        niceExtent: function(t) {
            ey.niceExtent.call(this, t);
            var e = this._originalScale;
            e.__fixMin = t.fixMin, e.__fixMax = t.fixMax;
        }
    });
    f([ "contain", "normalize" ], function(t) {
        ly.prototype[t] = function(e) {
            return e = sy(e) / sy(this.base), ty[t].call(this, e);
        };
    }), ly.create = function() {
        return new ly();
    };
    var hy = function(t) {
        this._axes = {}, this._dimList = [], this.name = t || "";
    };
    hy.prototype = {
        constructor: hy,
        type: "cartesian",
        getAxis: function(t) {
            return this._axes[t];
        },
        getAxes: function() {
            return p(this._dimList, ql, this);
        },
        getAxesByScale: function(t) {
            return t = t.toLowerCase(), v(this.getAxes(), function(e) {
                return e.scale.type === t;
            });
        },
        addAxis: function(t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e);
        },
        dataToCoord: function(t) {
            return this._dataCoordConvert(t, "dataToCoord");
        },
        coordToData: function(t) {
            return this._dataCoordConvert(t, "coordToData");
        },
        _dataCoordConvert: function(t, e) {
            for (var i = this._dimList, n = t instanceof Array ? [] : {}, r = 0; r < i.length; r++) {
                var o = i[r], a = this._axes[o];
                n[o] = a[e](t[o]);
            }
            return n;
        }
    }, jl.prototype = {
        constructor: jl,
        type: "cartesian2d",
        dimensions: [ "x", "y" ],
        getBaseAxis: function() {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x");
        },
        containPoint: function(t) {
            var e = this.getAxis("x"), i = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]));
        },
        containData: function(t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1]);
        },
        dataToPoint: function(t, e, i) {
            var n = this.getAxis("x"), r = this.getAxis("y");
            return i = i || [], i[0] = n.toGlobalCoord(n.dataToCoord(t[0])), i[1] = r.toGlobalCoord(r.dataToCoord(t[1])), 
            i;
        },
        clampData: function(t, e) {
            var i = this.getAxis("x").scale, n = this.getAxis("y").scale, r = i.getExtent(), o = n.getExtent(), a = i.parse(t[0]), s = n.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), 
            e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e;
        },
        pointToData: function(t, e) {
            var i = this.getAxis("x"), n = this.getAxis("y");
            return e = e || [], e[0] = i.coordToData(i.toLocalCoord(t[0])), e[1] = n.coordToData(n.toLocalCoord(t[1])), 
            e;
        },
        getOtherAxis: function(t) {
            return this.getAxis("x" === t.dim ? "y" : "x");
        }
    }, u(jl, hy);
    var uy = Mi(), cy = [ 0, 1 ], dy = function(t, e, i) {
        this.dim = t, this.scale = e, this._extent = i || [ 0, 0 ], this.inverse = !1, this.onBand = !1;
    };
    dy.prototype = {
        constructor: dy,
        contain: function(t) {
            var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
            return t >= i && n >= t;
        },
        containData: function(t) {
            return this.contain(this.dataToCoord(t));
        },
        getExtent: function() {
            return this._extent.slice();
        },
        getPixelPrecision: function(t) {
            return Mr(t || this.scale.getExtent(), this._extent);
        },
        setExtent: function(t, e) {
            var i = this._extent;
            i[0] = t, i[1] = e;
        },
        dataToCoord: function(t, e) {
            var i = this._extent, n = this.scale;
            return t = n.normalize(t), this.onBand && "ordinal" === n.type && (i = i.slice(), 
            hh(i, n.count())), xr(t, cy, i, e);
        },
        coordToData: function(t, e) {
            var i = this._extent, n = this.scale;
            this.onBand && "ordinal" === n.type && (i = i.slice(), hh(i, n.count()));
            var r = xr(t, i, cy, e);
            return this.scale.scale(r);
        },
        pointToData: function() {},
        getTicksCoords: function(t) {
            var e = (t = t || {}).tickModel || this.getTickModel(), i = Kl(this, e), n = p(i.ticks, function(t) {
                return {
                    coord: this.dataToCoord(t),
                    tickValue: t
                };
            }, this), r = e.get("alignWithLabel");
            return uh(this, n, i.tickCategoryInterval, r, t.clamp), n;
        },
        getViewLabels: function() {
            return Zl(this).labels;
        },
        getLabelModel: function() {
            return this.model.getModel("axisLabel");
        },
        getTickModel: function() {
            return this.model.getModel("axisTick");
        },
        getBandWidth: function() {
            var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === i && (i = 1);
            var n = Math.abs(t[1] - t[0]);
            return Math.abs(n) / i;
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function() {
            return oh(this);
        }
    };
    var fy = function(t, e, i, n, r) {
        dy.call(this, t, e, i), this.type = n || "value", this.position = r || "bottom";
    };
    fy.prototype = {
        constructor: fy,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function() {
            var t = this.position;
            return "top" === t || "bottom" === t;
        },
        getGlobalExtent: function(t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), 
            e;
        },
        getOtherAxis: function() {
            this.grid.getOtherAxis();
        },
        pointToData: function(t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e);
        },
        toLocalCoord: null,
        toGlobalCoord: null
    }, u(fy, dy);
    var py = {
        show: !0,
        zlevel: 0,
        z: 0,
        inverse: !1,
        name: "",
        nameLocation: "end",
        nameRotate: null,
        nameTruncate: {
            maxWidth: null,
            ellipsis: "...",
            placeholder: "."
        },
        nameTextStyle: {},
        nameGap: 15,
        silent: !1,
        triggerEvent: !1,
        tooltip: {
            show: !1
        },
        axisPointer: {},
        axisLine: {
            show: !0,
            onZero: !0,
            onZeroAxisIndex: null,
            lineStyle: {
                color: "#333",
                width: 1,
                type: "solid"
            },
            symbol: [ "none", "none" ],
            symbolSize: [ 10, 15 ]
        },
        axisTick: {
            show: !0,
            inside: !1,
            length: 5,
            lineStyle: {
                width: 1
            }
        },
        axisLabel: {
            show: !0,
            inside: !1,
            rotate: 0,
            showMinLabel: null,
            showMaxLabel: null,
            margin: 8,
            fontSize: 12
        },
        splitLine: {
            show: !0,
            lineStyle: {
                color: [ "#ccc" ],
                width: 1,
                type: "solid"
            }
        },
        splitArea: {
            show: !1,
            areaStyle: {
                color: [ "rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)" ]
            }
        }
    }, gy = {};
    gy.categoryAxis = r({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, py), gy.valueAxis = r({
        boundaryGap: [ 0, 0 ],
        splitNumber: 5
    }, py), gy.timeAxis = s({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, gy.valueAxis), gy.logAxis = s({
        scale: !0,
        logBase: 10
    }, gy.valueAxis);
    var vy = [ "value", "category", "time", "log" ], my = function(t, e, i, n) {
        f(vy, function(a) {
            e.extend({
                type: t + "Axis." + a,
                mergeDefaultAndTheme: function(e, n) {
                    var o = this.layoutMode, s = o ? Hr(e) : {};
                    r(e, n.getTheme().get(a + "Axis")), r(e, this.getDefaultOption()), e.type = i(t, e), 
                    o && Fr(e, s, o);
                },
                optionUpdated: function() {
                    "category" === this.option.type && (this.__ordinalMeta = _l.createByAxisModel(this));
                },
                getCategories: function(t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0;
                },
                getOrdinalMeta: function() {
                    return this.__ordinalMeta;
                },
                defaultOption: o([ {}, gy[a + "Axis"], n ], !0)
            });
        }), Kp.registerSubTypeDefaulter(t + "Axis", y(i, t));
    }, yy = {
        getMin: function(t) {
            var e = this.option, i = t || null == e.rangeStart ? e.min : e.rangeStart;
            return this.axis && null != i && "dataMin" !== i && "function" != typeof i && !I(i) && (i = this.axis.scale.parse(i)), 
            i;
        },
        getMax: function(t) {
            var e = this.option, i = t || null == e.rangeEnd ? e.max : e.rangeEnd;
            return this.axis && null != i && "dataMax" !== i && "function" != typeof i && !I(i) && (i = this.axis.scale.parse(i)), 
            i;
        },
        getNeedCrossZero: function() {
            var t = this.option;
            return null == t.rangeStart && null == t.rangeEnd && !t.scale;
        },
        getCoordSysModel: N,
        setRange: function(t, e) {
            this.option.rangeStart = t, this.option.rangeEnd = e;
        },
        resetRange: function() {
            this.option.rangeStart = this.option.rangeEnd = null;
        }
    }, _y = Kp.extend({
        type: "cartesian2dAxis",
        axis: null,
        init: function() {
            _y.superApply(this, "init", arguments), this.resetRange();
        },
        mergeOption: function() {
            _y.superApply(this, "mergeOption", arguments), this.resetRange();
        },
        restoreData: function() {
            _y.superApply(this, "restoreData", arguments), this.resetRange();
        },
        getCoordSysModel: function() {
            return this.ecModel.queryComponents({
                mainType: "grid",
                index: this.option.gridIndex,
                id: this.option.gridId
            })[0];
        }
    });
    r(_y.prototype, yy);
    var xy = {
        offset: 0
    };
    my("x", _y, ch, xy), my("y", _y, ch, xy), Kp.extend({
        type: "grid",
        dependencies: [ "xAxis", "yAxis" ],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var wy = fh.prototype;
    wy.type = "grid", wy.axisPointerEnabled = !0, wy.getRect = function() {
        return this._rect;
    }, wy.update = function(t, e) {
        var i = this._axesMap;
        this._updateScale(t, this.model), f(i.x, function(t) {
            Nl(t.scale, t.model);
        }), f(i.y, function(t) {
            Nl(t.scale, t.model);
        });
        var n = {};
        f(i.x, function(t) {
            ph(i, "y", t, n);
        }), f(i.y, function(t) {
            ph(i, "x", t, n);
        }), this.resize(this.model, e);
    }, wy.resize = function(t, e, i) {
        function n() {
            f(o, function(t) {
                var e = t.isHorizontal(), i = e ? [ 0, r.width ] : [ 0, r.height ], n = t.inverse ? 1 : 0;
                t.setExtent(i[n], i[1 - n]), vh(t, e ? r.x : r.y);
            });
        }
        var r = Nr(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = r;
        var o = this._axesList;
        n(), !i && t.get("containLabel") && (f(o, function(t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = Gl(t);
                if (e) {
                    var i = t.isHorizontal() ? "height" : "width", n = t.model.get("axisLabel.margin");
                    r[i] -= e[i] + n, "top" === t.position ? r.y += e.height + n : "left" === t.position && (r.x += e.width + n);
                }
            }
        }), n());
    }, wy.getAxis = function(t, e) {
        var i = this._axesMap[t];
        if (null != i) {
            if (null == e) for (var n in i) if (i.hasOwnProperty(n)) return i[n];
            return i[e];
        }
    }, wy.getAxes = function() {
        return this._axesList.slice();
    }, wy.getCartesian = function(t, e) {
        if (null != t && null != e) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i];
        }
        b(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var n = 0, r = this._coordsList; n < r.length; n++) if (r[n].getAxis("x").index === t || r[n].getAxis("y").index === e) return r[n];
    }, wy.getCartesians = function() {
        return this._coordsList.slice();
    }, wy.convertToPixel = function(t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.dataToPoint(i) : n.axis ? n.axis.toGlobalCoord(n.axis.dataToCoord(i)) : null;
    }, wy.convertFromPixel = function(t, e, i) {
        var n = this._findConvertTarget(t, e);
        return n.cartesian ? n.cartesian.pointToData(i) : n.axis ? n.axis.coordToData(n.axis.toLocalCoord(i)) : null;
    }, wy._findConvertTarget = function(t, e) {
        var i, n, r = e.seriesModel, o = e.xAxisModel || r && r.getReferringComponents("xAxis")[0], a = e.yAxisModel || r && r.getReferringComponents("yAxis")[0], s = e.gridModel, l = this._coordsList;
        return r ? (i = r.coordinateSystem, h(l, i) < 0 && (i = null)) : o && a ? i = this.getCartesian(o.componentIndex, a.componentIndex) : o ? n = this.getAxis("x", o.componentIndex) : a ? n = this.getAxis("y", a.componentIndex) : s && s.coordinateSystem === this && (i = this._coordsList[0]), 
        {
            cartesian: i,
            axis: n
        };
    }, wy.containPoint = function(t) {
        var e = this._coordsList[0];
        return e ? e.containPoint(t) : void 0;
    }, wy._initCartesian = function(t, e) {
        function i(i) {
            return function(a, s) {
                if (dh(a, t, e)) {
                    var l = a.get("position");
                    "x" === i ? "top" !== l && "bottom" !== l && (l = n.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = n.left ? "right" : "left"), 
                    n[l] = !0;
                    var h = new fy(i, Fl(a), [ 0, 0 ], a.get("type"), l), u = "category" === h.type;
                    h.onBand = u && a.get("boundaryGap"), h.inverse = a.get("inverse"), a.axis = h, 
                    h.model = a, h.grid = this, h.index = s, this._axesList.push(h), r[i][s] = h, o[i]++;
                }
            };
        }
        var n = {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        }, r = {
            x: {},
            y: {}
        }, o = {
            x: 0,
            y: 0
        };
        return e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), 
        o.x && o.y ? (this._axesMap = r, void f(r.x, function(e, i) {
            f(r.y, function(n, r) {
                var o = "x" + i + "y" + r, a = new jl(o);
                a.grid = this, a.model = t, this._coordsMap[o] = a, this._coordsList.push(a), a.addAxis(e), 
                a.addAxis(n);
            }, this);
        }, this)) : (this._axesMap = {}, void (this._axesList = []));
    }, wy._updateScale = function(t, e) {
        function i(t, e) {
            f(t.mapDimension(e.dim, !0), function(i) {
                e.scale.unionExtentFromData(t, Rs(t, i));
            });
        }
        f(this._axesList, function(t) {
            t.scale.setExtent(1 / 0, -1 / 0);
        }), t.eachSeries(function(n) {
            if (yh(n)) {
                var r = mh(n), o = r[0], a = r[1];
                if (!dh(o, e, t) || !dh(a, e, t)) return;
                var s = this.getCartesian(o.componentIndex, a.componentIndex), l = n.getData(), h = s.getAxis("x"), u = s.getAxis("y");
                "list" === l.type && (i(l, h), i(l, u));
            }
        }, this);
    }, wy.getTooltipAxes = function(t) {
        var e = [], i = [];
        return f(this.getCartesians(), function(n) {
            var r = null != t && "auto" !== t ? n.getAxis(t) : n.getBaseAxis(), o = n.getOtherAxis(r);
            h(e, r) < 0 && e.push(r), h(i, o) < 0 && i.push(o);
        }), {
            baseAxes: e,
            otherAxes: i
        };
    };
    var by = [ "xAxis", "yAxis" ];
    fh.create = function(t, e) {
        var i = [];
        return t.eachComponent("grid", function(n, r) {
            var o = new fh(n, t, e);
            o.name = "grid_" + r, o.resize(n, e, !0), n.coordinateSystem = o, i.push(o);
        }), t.eachSeries(function(t) {
            if (yh(t)) {
                var e = mh(t), i = e[0], n = e[1], r = i.getCoordSysModel();
                if (Pu) {
                    if (!r) throw new Error('Grid "' + C(i.get("gridIndex"), i.get("gridId"), 0) + '" not found');
                    if (i.getCoordSysModel() !== n.getCoordSysModel()) throw new Error("xAxis and yAxis must use the same grid");
                }
                var o = r.coordinateSystem;
                t.coordinateSystem = o.getCartesian(i.componentIndex, n.componentIndex);
            }
        }), i;
    }, fh.dimensions = fh.prototype.dimensions = jl.prototype.dimensions, po.register("cartesian2d", fh);
    var Sy = Math.PI, My = function(t, e) {
        this.opt = e, this.axisModel = t, s(e, {
            labelOffset: 0,
            nameDirection: 1,
            tickDirection: 1,
            labelDirection: 1,
            silent: !0
        }), this.group = new Fc();
        var i = new Fc({
            position: e.position.slice(),
            rotation: e.rotation
        });
        i.updateTransform(), this._transform = i.transform, this._dumbGroup = i;
    };
    My.prototype = {
        constructor: My,
        hasBuilder: function(t) {
            return !!Ty[t];
        },
        add: function(t) {
            Ty[t].call(this);
        },
        getGroup: function() {
            return this.group;
        }
    };
    var Ty = {
        axisLine: function() {
            var t = this.opt, e = this.axisModel;
            if (e.get("axisLine.show")) {
                var i = this.axisModel.axis.getExtent(), n = this._transform, r = [ i[0], 0 ], o = [ i[1], 0 ];
                n && (j(r, r, n), j(o, o, n));
                var s = a({
                    lineCap: "round"
                }, e.getModel("axisLine.lineStyle").getLineStyle());
                this.group.add(new lp({
                    anid: "line",
                    subPixelOptimize: !0,
                    shape: {
                        x1: r[0],
                        y1: r[1],
                        x2: o[0],
                        y2: o[1]
                    },
                    style: s,
                    strokeContainThreshold: t.strokeContainThreshold || 5,
                    silent: !0,
                    z2: 1
                }));
                var l = e.get("axisLine.symbol"), h = e.get("axisLine.symbolSize"), u = e.get("axisLine.symbolOffset") || 0;
                if ("number" == typeof u && (u = [ u, u ]), null != l) {
                    "string" == typeof l && (l = [ l, l ]), ("string" == typeof h || "number" == typeof h) && (h = [ h, h ]);
                    var c = h[0], d = h[1];
                    f([ {
                        rotate: t.rotation + Math.PI / 2,
                        offset: u[0],
                        r: 0
                    }, {
                        rotate: t.rotation - Math.PI / 2,
                        offset: u[1],
                        r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1]))
                    } ], function(e, i) {
                        if ("none" !== l[i] && null != l[i]) {
                            var n = Ws(l[i], -c / 2, -d / 2, c, d, s.stroke, !0), o = e.r + e.offset, a = [ r[0] + o * Math.cos(t.rotation), r[1] - o * Math.sin(t.rotation) ];
                            n.attr({
                                rotation: e.rotate,
                                position: a,
                                silent: !0,
                                z2: 11
                            }), this.group.add(n);
                        }
                    }, this);
                }
            }
        },
        axisTickLabel: function() {
            var t = this.axisModel, e = this.opt, i = Mh(this, t, e);
            xh(t, Th(this, t, e), i);
        },
        axisName: function() {
            var t = this.opt, e = this.axisModel, i = C(t.axisName, e.get("name"));
            if (i) {
                var n, r = e.get("nameLocation"), o = t.nameDirection, s = e.getModel("nameTextStyle"), l = e.get("nameGap") || 0, h = this.axisModel.axis.getExtent(), u = h[0] > h[1] ? -1 : 1, c = [ "start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Sh(r) ? t.labelOffset + o * l : 0 ], d = e.get("nameRotate");
                null != d && (d = d * Sy / 180);
                var f;
                Sh(r) ? n = Cy(t.rotation, null != d ? d : t.rotation, o) : (n = _h(t, r, d || 0, h), 
                null != (f = t.axisNameAvailableWidth) && (f = Math.abs(f / Math.sin(n.rotation)), 
                !isFinite(f) && (f = null)));
                var p = s.getFont(), g = e.get("nameTruncate", !0) || {}, v = g.ellipsis, m = C(t.nameTruncateMaxWidth, g.maxWidth, f), y = null != v && null != m ? Xp(i, m, p, v, {
                    minChar: 2,
                    placeholder: g.placeholder
                }) : i, _ = e.get("tooltip", !0), x = e.mainType, w = {
                    componentType: x,
                    name: i,
                    $vars: [ "name" ]
                };
                w[x + "Index"] = e.componentIndex;
                var b = new jf({
                    anid: "name",
                    __fullText: i,
                    __truncatedText: y,
                    position: c,
                    rotation: n.rotation,
                    silent: ky(e),
                    z2: 1,
                    tooltip: _ && _.show ? a({
                        content: i,
                        formatter: function() {
                            return i;
                        },
                        formatterParams: w
                    }, _) : null
                });
                Qn(b.style, s, {
                    text: y,
                    textFont: p,
                    textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                    textAlign: s.get("align") || n.textAlign,
                    textVerticalAlign: s.get("verticalAlign") || n.textVerticalAlign
                }), e.get("triggerEvent") && (b.eventData = Iy(e), b.eventData.targetType = "axisName", 
                b.eventData.name = i), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), 
                b.decomposeTransform();
            }
        }
    }, Iy = My.makeAxisEventDataBase = function(t) {
        var e = {
            componentType: t.mainType,
            componentIndex: t.componentIndex
        };
        return e[t.mainType + "Index"] = t.componentIndex, e;
    }, Cy = My.innerTextLayout = function(t, e, i) {
        var n, r, o = Tr(e - t);
        return Ir(o) ? (r = i > 0 ? "top" : "bottom", n = "center") : Ir(o - Sy) ? (r = i > 0 ? "bottom" : "top", 
        n = "center") : (r = "middle", n = o > 0 && Sy > o ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), 
        {
            rotation: o,
            textAlign: n,
            textVerticalAlign: r
        };
    }, ky = My.isLabelSilent = function(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show);
    }, Dy = f, Ay = y, Py = cs({
        type: "axis",
        _axisPointer: null,
        axisPointerClass: null,
        render: function(t, e, i, n) {
            this.axisPointerClass && Oh(t), Py.superApply(this, "render", arguments), Rh(this, t, 0, i, 0, !0);
        },
        updateAxisPointer: function(t, e, i, n) {
            Rh(this, t, 0, i, 0, !1);
        },
        remove: function(t, e) {
            var i = this._axisPointer;
            i && i.remove(e), Py.superApply(this, "remove", arguments);
        },
        dispose: function(t, e) {
            Nh(this, e), Py.superApply(this, "dispose", arguments);
        }
    }), Oy = [];
    Py.registerAxisPointerClass = function(t, e) {
        if (Pu && Oy[t]) throw new Error("axisPointer " + t + " exists");
        Oy[t] = e;
    }, Py.getAxisPointerClass = function(t) {
        return t && Oy[t];
    };
    var Ly = [ "axisLine", "axisTickLabel", "axisName" ], Ey = [ "splitArea", "splitLine" ], By = Py.extend({
        type: "cartesianAxis",
        axisPointerClass: "CartesianAxisPointer",
        render: function(t, e, i, n) {
            this.group.removeAll();
            var r = this._axisGroup;
            if (this._axisGroup = new Fc(), this.group.add(this._axisGroup), t.get("show")) {
                var o = t.getCoordSysModel(), a = Fh(o, t), s = new My(t, a);
                f(Ly, s.add, s), this._axisGroup.add(s.getGroup()), f(Ey, function(e) {
                    t.get(e + ".show") && this["_" + e](t, o);
                }, this), ur(r, this._axisGroup, t), By.superCall(this, "render", t, e, i, n);
            }
        },
        remove: function() {
            this._splitAreaColors = null;
        },
        _splitLine: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitLine"), r = n.getModel("lineStyle"), o = r.get("color");
                o = _(o) ? o : [ o ];
                for (var a = e.coordinateSystem.getRect(), l = i.isHorizontal(), h = 0, u = i.getTicksCoords({
                    tickModel: n
                }), c = [], d = [], f = r.getLineStyle(), p = 0; p < u.length; p++) {
                    var g = i.toGlobalCoord(u[p].coord);
                    l ? (c[0] = g, c[1] = a.y, d[0] = g, d[1] = a.y + a.height) : (c[0] = a.x, c[1] = g, 
                    d[0] = a.x + a.width, d[1] = g);
                    var v = h++ % o.length, m = u[p].tickValue;
                    this._axisGroup.add(new lp({
                        anid: null != m ? "line_" + u[p].tickValue : null,
                        subPixelOptimize: !0,
                        shape: {
                            x1: c[0],
                            y1: c[1],
                            x2: d[0],
                            y2: d[1]
                        },
                        style: s({
                            stroke: o[v]
                        }, f),
                        silent: !0
                    }));
                }
            }
        },
        _splitArea: function(t, e) {
            var i = t.axis;
            if (!i.scale.isBlank()) {
                var n = t.getModel("splitArea"), r = n.getModel("areaStyle"), o = r.get("color"), a = e.coordinateSystem.getRect(), l = i.getTicksCoords({
                    tickModel: n,
                    clamp: !0
                });
                if (l.length) {
                    var h = o.length, u = this._splitAreaColors, c = R(), d = 0;
                    if (u) for (v = 0; v < l.length; v++) {
                        var f = u.get(l[v].tickValue);
                        if (null != f) {
                            d = (f + (h - 1) * v) % h;
                            break;
                        }
                    }
                    var p = i.toGlobalCoord(l[0].coord), g = r.getAreaStyle();
                    o = _(o) ? o : [ o ];
                    for (var v = 1; v < l.length; v++) {
                        var m, y, x, w, b = i.toGlobalCoord(l[v].coord);
                        i.isHorizontal() ? (m = p, y = a.y, x = b - m, w = a.height, p = m + x) : (m = a.x, 
                        y = p, x = a.width, w = b - y, p = y + w);
                        var S = l[v - 1].tickValue;
                        null != S && c.set(S, d), this._axisGroup.add(new ap({
                            anid: null != S ? "area_" + S : null,
                            shape: {
                                x: m,
                                y: y,
                                width: x,
                                height: w
                            },
                            style: s({
                                fill: o[d]
                            }, g),
                            silent: !0
                        })), d = (d + 1) % h;
                    }
                    this._splitAreaColors = c;
                }
            }
        }
    });
    By.extend({
        type: "xAxis"
    }), By.extend({
        type: "yAxis"
    }), cs({
        type: "grid",
        render: function(t) {
            this.group.removeAll(), t.get("show") && this.group.add(new ap({
                shape: t.coordinateSystem.getRect(),
                style: s({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }));
        }
    }), ns(function(t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
    }), ss(function(t, e, i) {
        return {
            seriesType: t,
            performRawSeries: !0,
            reset: function(t, n) {
                var r = t.getData(), o = t.get("symbol"), a = t.get("symbolSize"), s = t.get("symbolKeepAspect"), l = x(o), h = x(a), u = l || h, c = !l && o ? o : e, d = h ? null : a;
                return r.setVisual({
                    legendSymbol: i || c,
                    symbol: c,
                    symbolSize: d,
                    symbolKeepAspect: s
                }), n.isSeriesFiltered(t) ? void 0 : {
                    dataEach: r.hasItemOption || u ? function(e, i) {
                        if (u) {
                            var n = t.getRawValue(i), r = t.getDataParams(i);
                            l && e.setItemVisual(i, "symbol", o(n, r)), h && e.setItemVisual(i, "symbolSize", a(n, r));
                        }
                        if (e.hasItemOption) {
                            var s = e.getItemModel(i), c = s.getShallow("symbol", !0), d = s.getShallow("symbolSize", !0), f = s.getShallow("symbolKeepAspect", !0);
                            null != c && e.setItemVisual(i, "symbol", c), null != d && e.setItemVisual(i, "symbolSize", d), 
                            null != f && e.setItemVisual(i, "symbolKeepAspect", f);
                        }
                    } : null
                };
            }
        };
    }("line", "circle", "line")), as(function(t) {
        return {
            seriesType: t,
            plan: Fg(),
            reset: function(t) {
                var e = t.getData(), i = t.coordinateSystem, n = t.pipelineContext.large;
                if (i) {
                    var r = p(i.dimensions, function(t) {
                        return e.mapDimension(t);
                    }).slice(0, 2), o = r.length, a = e.getCalculationInfo("stackResultDimension");
                    return zs(e, r[0]) && (r[0] = a), zs(e, r[1]) && (r[1] = a), o && {
                        progress: function(t, e) {
                            for (var a = t.end - t.start, s = n && new Float32Array(a * o), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                                var d;
                                if (1 === o) f = e.get(r[0], l), d = !isNaN(f) && i.dataToPoint(f, null, c); else {
                                    var f = u[0] = e.get(r[0], l), p = u[1] = e.get(r[1], l);
                                    d = !isNaN(f) && !isNaN(p) && i.dataToPoint(u, null, c);
                                }
                                n ? (s[h++] = d ? d[0] : NaN, s[h++] = d ? d[1] : NaN) : e.setItemLayout(l, d && d.slice() || [ NaN, NaN ]);
                            }
                            n && e.setLayout("symbolPoints", s);
                        }
                    };
                }
            }
        };
    }("line")), rs(Av.PROCESSOR.STATISTIC, function(t) {
        return {
            seriesType: t,
            modifyOutputEnd: !0,
            reset: function(t) {
                var e = t.getData(), i = t.get("sampling"), n = t.coordinateSystem;
                if ("cartesian2d" === n.type && i) {
                    var r = n.getBaseAxis(), o = n.getOtherAxis(r), a = r.getExtent(), s = a[1] - a[0], l = Math.round(e.count() / s);
                    if (l > 1) {
                        var h;
                        "string" == typeof i ? h = Rm[i] : "function" == typeof i && (h = i), h && t.setData(e.downSample(e.mapDimension(o.dim), 1 / l, h, Nm));
                    }
                }
            }
        };
    }("line"));
    var zy = function(t, e) {
        var i, n = [], r = t.seriesIndex;
        if (null == r || !(i = e.getSeriesByIndex(r))) return {
            point: []
        };
        var o = i.getData(), a = Si(o, t);
        if (null == a || 0 > a || _(a)) return {
            point: []
        };
        var s = o.getItemGraphicEl(a), l = i.coordinateSystem;
        if (i.getTooltipPosition) n = i.getTooltipPosition(a) || []; else if (l && l.dataToPoint) n = l.dataToPoint(o.getValues(p(l.dimensions, function(t) {
            return o.mapDimension(t);
        }), a, !0)) || []; else if (s) {
            var h = s.getBoundingRect().clone();
            h.applyTransform(s.transform), n = [ h.x + h.width / 2, h.y + h.height / 2 ];
        }
        return {
            point: n,
            el: s
        };
    }, Ry = f, Ny = y, Fy = Mi(), Hy = (us({
        type: "axisPointer",
        coordSysAxesInfo: null,
        defaultOption: {
            show: "auto",
            triggerOn: null,
            zlevel: 0,
            z: 50,
            type: "line",
            snap: !1,
            triggerTooltip: !0,
            value: null,
            status: null,
            link: [],
            animation: null,
            animationDurationUpdate: 200,
            lineStyle: {
                color: "#aaa",
                width: 1,
                type: "solid"
            },
            shadowStyle: {
                color: "rgba(150,150,150,0.3)"
            },
            label: {
                show: !0,
                formatter: null,
                precision: "auto",
                margin: 3,
                color: "#fff",
                padding: [ 5, 7, 5, 7 ],
                backgroundColor: "auto",
                borderColor: null,
                borderWidth: 0,
                shadowBlur: 3,
                shadowColor: "#aaa"
            },
            handle: {
                show: !1,
                icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                size: 45,
                margin: 50,
                color: "#333",
                shadowBlur: 3,
                shadowColor: "#aaa",
                shadowOffsetX: 0,
                shadowOffsetY: 2,
                throttle: 40
            }
        }
    }), Mi()), Vy = f, Wy = cs({
        type: "axisPointer",
        render: function(t, e, i) {
            var n = e.getComponent("tooltip"), r = t.get("triggerOn") || n && n.get("triggerOn") || "mousemove|click";
            Kh("axisPointer", i, function(t, e, i) {
                "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && i({
                    type: "updateAxisPointer",
                    currTrigger: t,
                    x: e && e.offsetX,
                    y: e && e.offsetY
                });
            });
        },
        remove: function(t, e) {
            iu(e.getZr(), "axisPointer"), Wy.superApply(this._model, "remove", arguments);
        },
        dispose: function(t, e) {
            iu("axisPointer", e), Wy.superApply(this._model, "dispose", arguments);
        }
    }), Gy = Mi(), Xy = n, Yy = m;
    (nu.prototype = {
        _group: null,
        _lastGraphicKey: null,
        _handle: null,
        _dragging: !1,
        _lastValue: null,
        _lastStatus: null,
        _payloadInfo: null,
        animationThreshold: 15,
        render: function(t, e, i, n) {
            var r = e.get("value"), o = e.get("status");
            if (this._axisModel = t, this._axisPointerModel = e, this._api = i, n || this._lastValue !== r || this._lastStatus !== o) {
                this._lastValue = r, this._lastStatus = o;
                var a = this._group, s = this._handle;
                if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());
                a && a.show(), s && s.show();
                var l = {};
                this.makeElOption(l, r, t, e, i);
                var h = l.graphicKey;
                h !== this._lastGraphicKey && this.clear(i), this._lastGraphicKey = h;
                var u = this._moveAnimation = this.determineAnimation(t, e);
                if (a) {
                    var c = y(ru, e, u);
                    this.updatePointerEl(a, l, c, e), this.updateLabelEl(a, l, c, e);
                } else a = this._group = new Fc(), this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), 
                i.getZr().add(a);
                lu(a, e, !0), this._renderHandle(r);
            }
        },
        remove: function(t) {
            this.clear(t);
        },
        dispose: function(t) {
            this.clear(t);
        },
        determineAnimation: function(t, e) {
            var i = e.get("animation"), n = t.axis, r = "category" === n.type, o = e.get("snap");
            if (!o && !r) return !1;
            if ("auto" === i || null == i) {
                var a = this.animationThreshold;
                if (r && n.getBandWidth() > a) return !0;
                if (o) {
                    var s = Lh(t).seriesDataCount, l = n.getExtent();
                    return Math.abs(l[0] - l[1]) / s > a;
                }
                return !1;
            }
            return !0 === i;
        },
        makeElOption: function() {},
        createPointerEl: function(t, e) {
            var i = e.pointer;
            if (i) {
                var n = Gy(t).pointerEl = new Dp[i.type](Xy(e.pointer));
                t.add(n);
            }
        },
        createLabelEl: function(t, e, i, n) {
            if (e.label) {
                var r = Gy(t).labelEl = new ap(Xy(e.label));
                t.add(r), au(r, n);
            }
        },
        updatePointerEl: function(t, e, i) {
            var n = Gy(t).pointerEl;
            n && e.pointer && (n.setStyle(e.pointer.style), i(n, {
                shape: e.pointer.shape
            }));
        },
        updateLabelEl: function(t, e, i, n) {
            var r = Gy(t).labelEl;
            r && (r.setStyle(e.label.style), i(r, {
                shape: e.label.shape,
                position: e.label.position
            }), au(r, n));
        },
        _renderHandle: function(t) {
            if (!this._dragging && this.updateHandleTransform) {
                var e = this._axisPointerModel, i = this._api.getZr(), n = this._handle, r = e.getModel("handle"), o = e.get("status");
                if (!r.get("show") || !o || "hide" === o) return n && i.remove(n), void (this._handle = null);
                var a;
                this._handle || (a = !0, n = this._handle = cr(r.get("icon"), {
                    cursor: "move",
                    draggable: !0,
                    onmousemove: function(t) {
                        oc(t.event);
                    },
                    onmousedown: Yy(this._onHandleDragMove, this, 0, 0),
                    drift: Yy(this._onHandleDragMove, this),
                    ondragend: Yy(this._onHandleDragEnd, this)
                }), i.add(n)), lu(n, e, !1);
                var s = [ "color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY" ];
                n.setStyle(r.getItemStyle(null, s));
                var l = r.get("size");
                _(l) || (l = [ l, l ]), n.attr("scale", [ l[0] / 2, l[1] / 2 ]), oa(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), 
                this._moveHandleToValue(t, a);
            }
        },
        _moveHandleToValue: function(t, e) {
            ru(this._axisPointerModel, !e && this._moveAnimation, this._handle, su(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)));
        },
        _onHandleDragMove: function(t, e) {
            var i = this._handle;
            if (i) {
                this._dragging = !0;
                var n = this.updateHandleTransform(su(i), [ t, e ], this._axisModel, this._axisPointerModel);
                this._payloadInfo = n, i.stopAnimation(), i.attr(su(n)), Gy(i).lastProp = null, 
                this._doDispatchAxisPointer();
            }
        },
        _doDispatchAxisPointer: function() {
            if (this._handle) {
                var t = this._payloadInfo, e = this._axisModel;
                this._api.dispatchAction({
                    type: "updateAxisPointer",
                    x: t.cursorPoint[0],
                    y: t.cursorPoint[1],
                    tooltipOption: t.tooltipOption,
                    axesInfo: [ {
                        axisDim: e.axis.dim,
                        axisIndex: e.componentIndex
                    } ]
                });
            }
        },
        _onHandleDragEnd: function() {
            if (this._dragging = !1, this._handle) {
                var t = this._axisPointerModel.get("value");
                this._moveHandleToValue(t), this._api.dispatchAction({
                    type: "hideTip"
                });
            }
        },
        getHandleTransform: null,
        updateHandleTransform: null,
        clear: function(t) {
            this._lastValue = null, this._lastStatus = null;
            var e = t.getZr(), i = this._group, n = this._handle;
            e && i && (this._lastGraphicKey = null, i && e.remove(i), n && e.remove(n), this._group = null, 
            this._handle = null, this._payloadInfo = null);
        },
        doClear: function() {},
        buildLabel: function(t, e, i) {
            return i = i || 0, {
                x: t[i],
                y: t[1 - i],
                width: e[i],
                height: e[1 - i]
            };
        }
    }).constructor = nu, Oi(nu);
    var Uy = nu.extend({
        makeElOption: function(t, e, i, n, r) {
            var o = i.axis, a = o.grid, s = n.get("type"), l = mu(a, o).getOtherAxis(o).getGlobalExtent(), h = o.toGlobalCoord(o.dataToCoord(e, !0));
            if (s && "none" !== s) {
                var u = hu(n), c = qy[s](o, h, l);
                c.style = u, t.graphicKey = c.type, t.pointer = c;
            }
            pu(e, t, Fh(a.model, i), i, n, r);
        },
        getHandleTransform: function(t, e, i) {
            var n = Fh(e.axis.grid.model, e, {
                labelInside: !1
            });
            return n.labelMargin = i.get("handle.margin"), {
                position: fu(e.axis, t, n),
                rotation: n.rotation + (n.labelDirection < 0 ? Math.PI : 0)
            };
        },
        updateHandleTransform: function(t, e, i) {
            var n = i.axis, r = n.grid, o = n.getGlobalExtent(!0), a = mu(r, n).getOtherAxis(n).getGlobalExtent(), s = "x" === n.dim ? 0 : 1, l = t.position;
            l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
            var h = (a[1] + a[0]) / 2, u = [ h, h ];
            u[s] = l[s];
            var c = [ {
                verticalAlign: "middle"
            }, {
                align: "center"
            } ];
            return {
                position: l,
                rotation: t.rotation,
                cursorPoint: u,
                tooltipOption: c[s]
            };
        }
    }), qy = {
        line: function(t, e, i) {
            return {
                type: "Line",
                subPixelOptimize: !0,
                shape: gu([ e, i[0] ], [ e, i[1] ], yu(t))
            };
        },
        shadow: function(t, e, i) {
            var n = Math.max(1, t.getBandWidth()), r = i[1] - i[0];
            return {
                type: "Rect",
                shape: vu([ e - n / 2, i[0] ], [ n, r ], yu(t))
            };
        }
    };
    Py.registerAxisPointerClass("CartesianAxisPointer", Uy), ns(function(t) {
        if (t) {
            (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
            var e = t.axisPointer.link;
            e && !_(e) && (t.axisPointer.link = [ e ]);
        }
    }), rs(Av.PROCESSOR.STATISTIC, function(t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = Ih(t, e);
    }), os({
        type: "updateAxisPointer",
        event: "updateAxisPointer",
        update: ":updateAxisPointer"
    }, function(t, e, i) {
        var n = t.currTrigger, r = [ t.x, t.y ], o = t, a = t.dispatchAction || m(i.dispatchAction, i), s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Zh(r) && (r = zy({
                seriesIndex: o.seriesIndex,
                dataIndex: o.dataIndex
            }, e).point);
            var l = Zh(r), h = o.axesInfo, u = s.axesInfo, c = "leave" === n || Zh(r), d = {}, f = {}, p = {
                list: [],
                map: {}
            }, g = {
                showPointer: Ny(Wh, f),
                showTooltip: Ny(Gh, p)
            };
            Ry(s.coordSysMap, function(t, e) {
                var i = l || t.containPoint(r);
                Ry(s.coordSysAxesInfo[e], function(t) {
                    var e = t.axis, n = qh(h, t);
                    if (!c && i && (!h || n)) {
                        var o = n && n.value;
                        null != o || l || (o = e.pointToData(r)), null != o && Hh(t, o, g, !1, d);
                    }
                });
            });
            var v = {};
            return Ry(u, function(t, e) {
                var i = t.linkGroup;
                i && !f[e] && Ry(i.axesInfo, function(e, n) {
                    var r = f[n];
                    if (e !== t && r) {
                        var o = r.value;
                        i.mapper && (o = t.axis.scale.parse(i.mapper(o, jh(e), jh(t)))), v[t.key] = o;
                    }
                });
            }), Ry(v, function(t, e) {
                Hh(u[e], t, g, !0, d);
            }), Xh(f, u, d), Yh(p, r, t, a), Uh(u, 0, i), d;
        }
    }), us({
        type: "tooltip",
        dependencies: [ "axisPointer" ],
        defaultOption: {
            zlevel: 0,
            z: 60,
            show: !0,
            showContent: !0,
            trigger: "item",
            triggerOn: "mousemove|click",
            alwaysShowContent: !1,
            displayMode: "single",
            renderMode: "auto",
            confine: !1,
            showDelay: 0,
            hideDelay: 100,
            transitionDuration: .4,
            enterable: !1,
            backgroundColor: "rgba(50,50,50,0.7)",
            borderColor: "#333",
            borderRadius: 4,
            borderWidth: 0,
            padding: 5,
            extraCssText: "",
            axisPointer: {
                type: "line",
                axis: "auto",
                animation: "auto",
                animationDurationUpdate: 200,
                animationEasingUpdate: "exponentialOut",
                crossStyle: {
                    color: "#999",
                    width: 1,
                    type: "dashed",
                    textStyle: {}
                }
            },
            textStyle: {
                color: "#fff",
                fontSize: 14
            }
        }
    });
    var jy = f, Zy = function(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function(t, e) {
            return e.toUpperCase();
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t;
    }, Ky = [ "", "-webkit-", "-moz-", "-o-" ];
    bu.prototype = {
        constructor: bu,
        _enterable: !0,
        update: function() {
            var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
            "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative");
        },
        show: function(t) {
            clearTimeout(this._hideTimeout);
            var e = this.el;
            e.style.cssText = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" + wu(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), 
            e.style.display = e.innerHTML ? "block" : "none", e.style.pointerEvents = this._enterable ? "auto" : "none", 
            this._show = !0;
        },
        setContent: function(t) {
            this.el.innerHTML = null == t ? "" : t;
        },
        setEnterable: function(t) {
            this._enterable = t;
        },
        getSize: function() {
            var t = this.el;
            return [ t.clientWidth, t.clientHeight ];
        },
        moveTo: function(t, e) {
            var i, n = this._zr;
            n && n.painter && (i = n.painter.getViewportRootOffset()) && (t += i.offsetLeft, 
            e += i.offsetTop);
            var r = this.el.style;
            r.left = t + "px", r.top = e + "px", this._x = t, this._y = e;
        },
        hide: function() {
            this.el.style.display = "none", this._show = !1;
        },
        hideLater: function(t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, 
            this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
        },
        isShow: function() {
            return this._show;
        },
        getOuterSize: function() {
            var t = this.el.clientWidth, e = this.el.clientHeight;
            if (document.defaultView && document.defaultView.getComputedStyle) {
                var i = document.defaultView.getComputedStyle(this.el);
                i && (t += parseInt(i.borderLeftWidth, 10) + parseInt(i.borderRightWidth, 10), e += parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10));
            }
            return {
                width: t,
                height: e
            };
        }
    }, Su.prototype = {
        constructor: Su,
        _enterable: !0,
        update: function() {},
        show: function() {
            this._hideTimeout && clearTimeout(this._hideTimeout), this.el.attr("show", !0), 
            this._show = !0;
        },
        setContent: function(t, e, i) {
            this.el && this._zr.remove(this.el);
            for (var n = {}, r = t, o = "{marker", a = r.indexOf(o); a >= 0; ) {
                var s = r.indexOf("|}"), l = r.substr(a + o.length, s - a - o.length);
                n["marker" + l] = l.indexOf("sub") > -1 ? {
                    textWidth: 4,
                    textHeight: 4,
                    textBorderRadius: 2,
                    textBackgroundColor: e[l],
                    textOffset: [ 3, 0 ]
                } : {
                    textWidth: 10,
                    textHeight: 10,
                    textBorderRadius: 5,
                    textBackgroundColor: e[l]
                }, a = (r = r.substr(s + 1)).indexOf("{marker");
            }
            this.el = new jf({
                style: {
                    rich: n,
                    text: t,
                    textLineHeight: 20,
                    textBackgroundColor: i.get("backgroundColor"),
                    textBorderRadius: i.get("borderRadius"),
                    textFill: i.get("textStyle.color"),
                    textPadding: i.get("padding")
                },
                z: i.get("z")
            }), this._zr.add(this.el);
            var h = this;
            this.el.on("mouseover", function() {
                h._enterable && (clearTimeout(h._hideTimeout), h._show = !0), h._inContent = !0;
            }), this.el.on("mouseout", function() {
                h._enterable && h._show && h.hideLater(h._hideDelay), h._inContent = !1;
            });
        },
        setEnterable: function(t) {
            this._enterable = t;
        },
        getSize: function() {
            var t = this.el.getBoundingRect();
            return [ t.width, t.height ];
        },
        moveTo: function(t, e) {
            this.el && this.el.attr("position", [ t, e ]);
        },
        hide: function() {
            this.el && this.el.hide(), this._show = !1;
        },
        hideLater: function(t) {
            !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, 
            this._show = !1, this._hideTimeout = setTimeout(m(this.hide, this), t)) : this.hide());
        },
        isShow: function() {
            return this._show;
        },
        getOuterSize: function() {
            var t = this.getSize();
            return {
                width: t[0],
                height: t[1]
            };
        }
    };
    var $y = m, Qy = f, Jy = wr, t_ = new ap({
        shape: {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }
    });
    cs({
        type: "tooltip",
        init: function(t, e) {
            if (!Bu.node) {
                var i = t.getComponent("tooltip").get("renderMode");
                this._renderMode = Di(i);
                var n;
                "html" === this._renderMode ? (n = new bu(e.getDom(), e), this._newLine = "<br/>") : (n = new Su(e), 
                this._newLine = "\n"), this._tooltipContent = n;
            }
        },
        render: function(t, e, i) {
            if (!Bu.node) {
                this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = i, 
                this._lastDataByCoordSys = null, this._alwaysShowContent = t.get("alwaysShowContent");
                var n = this._tooltipContent;
                n.update(), n.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow();
            }
        },
        _initGlobalListener: function() {
            var t = this._tooltipModel.get("triggerOn");
            Kh("itemTooltip", this._api, $y(function(e, i, n) {
                "none" !== t && (t.indexOf(e) >= 0 ? this._tryShow(i, n) : "leave" === e && this._hide(n));
            }, this));
        },
        _keepShow: function() {
            var t = this._tooltipModel, e = this._ecModel, i = this._api;
            if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                var n = this;
                clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function() {
                    !i.isDisposed() && n.manuallyShowTip(t, e, i, {
                        x: n._lastX,
                        y: n._lastY
                    });
                });
            }
        },
        manuallyShowTip: function(t, e, i, n) {
            if (n.from !== this.uid && !Bu.node) {
                var r = Tu(n, i);
                this._ticket = "";
                var o = n.dataByCoordSys;
                if (n.tooltip && null != n.x && null != n.y) {
                    var a = t_;
                    a.position = [ n.x, n.y ], a.update(), a.tooltip = n.tooltip, this._tryShow({
                        offsetX: n.x,
                        offsetY: n.y,
                        target: a
                    }, r);
                } else if (o) this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    event: {},
                    dataByCoordSys: n.dataByCoordSys,
                    tooltipOption: n.tooltipOption
                }, r); else if (null != n.seriesIndex) {
                    if (this._manuallyAxisShowTip(t, e, i, n)) return;
                    var s = zy(n, e), l = s.point[0], h = s.point[1];
                    null != l && null != h && this._tryShow({
                        offsetX: l,
                        offsetY: h,
                        position: n.position,
                        target: s.el,
                        event: {}
                    }, r);
                } else null != n.x && null != n.y && (i.dispatchAction({
                    type: "updateAxisPointer",
                    x: n.x,
                    y: n.y
                }), this._tryShow({
                    offsetX: n.x,
                    offsetY: n.y,
                    position: n.position,
                    target: i.getZr().findHover(n.x, n.y).target,
                    event: {}
                }, r));
            }
        },
        manuallyHideTip: function(t, e, i, n) {
            var r = this._tooltipContent;
            !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), 
            this._lastX = this._lastY = null, n.from !== this.uid && this._hide(Tu(n, i));
        },
        _manuallyAxisShowTip: function(t, e, i, n) {
            var r = n.seriesIndex, o = n.dataIndex, a = e.getComponent("axisPointer").coordSysAxesInfo;
            if (null != r && null != o && null != a) {
                var s = e.getSeriesByIndex(r);
                if (s && "axis" === (t = Mu([ s.getData().getItemModel(o), s, (s.coordinateSystem || {}).model, t ])).get("trigger")) return i.dispatchAction({
                    type: "updateAxisPointer",
                    seriesIndex: r,
                    dataIndex: o,
                    position: n.position
                }), !0;
            }
        },
        _tryShow: function(t, e) {
            var i = t.target;
            if (this._tooltipModel) {
                this._lastX = t.offsetX, this._lastY = t.offsetY;
                var n = t.dataByCoordSys;
                n && n.length ? this._showAxisTooltip(n, t) : i && null != i.dataIndex ? (this._lastDataByCoordSys = null, 
                this._showSeriesItemTooltip(t, i, e)) : i && i.tooltip ? (this._lastDataByCoordSys = null, 
                this._showComponentItemTooltip(t, i, e)) : (this._lastDataByCoordSys = null, this._hide(e));
            }
        },
        _showOrMove: function(t, e) {
            var i = t.get("showDelay");
            e = m(e, this), clearTimeout(this._showTimout), i > 0 ? this._showTimout = setTimeout(e, i) : e();
        },
        _showAxisTooltip: function(t, e) {
            var i = this._ecModel, n = this._tooltipModel, o = [ e.offsetX, e.offsetY ], a = [], s = [], l = Mu([ e.tooltipOption, n ]), h = this._renderMode, u = this._newLine, c = {};
            Qy(t, function(t) {
                Qy(t.dataByAxis, function(t) {
                    var e = i.getComponent(t.axisDim + "Axis", t.axisIndex), n = t.value, o = [];
                    if (e && null != n) {
                        var l = du(n, e.axis, i, t.seriesDataIndices, t.valueLabelOpt);
                        f(t.seriesDataIndices, function(a) {
                            var u = i.getSeriesByIndex(a.seriesIndex), d = a.dataIndexInside, f = u && u.getDataParams(d);
                            if (f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, 
                            f.axisValue = Wl(e.axis, n), f.axisValueLabel = l, f) {
                                s.push(f);
                                var p, g = u.formatTooltip(d, !0, null, h);
                                if (b(g)) {
                                    p = g.html;
                                    var v = g.markers;
                                    r(c, v);
                                } else p = g;
                                o.push(p);
                            }
                        });
                        var d = l;
                        a.push("html" !== h ? o.join(u) : (d ? Or(d) + u : "") + o.join(u));
                    }
                });
            }, this), a.reverse(), a = a.join(this._newLine + this._newLine);
            var d = e.position;
            this._showOrMove(l, function() {
                this._updateContentNotChangedOnAxis(t) ? this._updatePosition(l, d, o[0], o[1], this._tooltipContent, s) : this._showTooltipContent(l, a, s, Math.random(), o[0], o[1], d, void 0, c);
            });
        },
        _showSeriesItemTooltip: function(t, e, i) {
            var n = this._ecModel, r = e.seriesIndex, o = n.getSeriesByIndex(r), a = e.dataModel || o, s = e.dataIndex, l = e.dataType, h = a.getData(), u = Mu([ h.getItemModel(s), a, o && (o.coordinateSystem || {}).model, this._tooltipModel ]), c = u.get("trigger");
            if (null == c || "item" === c) {
                var d, f, p = a.getDataParams(s, l), g = a.formatTooltip(s, !1, l, this._renderMode);
                b(g) ? (d = g.html, f = g.markers) : (d = g, f = null);
                var v = "item_" + a.name + "_" + s;
                this._showOrMove(u, function() {
                    this._showTooltipContent(u, d, p, v, t.offsetX, t.offsetY, t.position, t.target, f);
                }), i({
                    type: "showTip",
                    dataIndexInside: s,
                    dataIndex: h.getRawIndex(s),
                    seriesIndex: r,
                    from: this.uid
                });
            }
        },
        _showComponentItemTooltip: function(t, e, i) {
            var n = e.tooltip;
            if ("string" == typeof n) {
                var r = n;
                n = {
                    content: r,
                    formatter: r
                };
            }
            var o = new gr(n, this._tooltipModel, this._ecModel), a = o.get("content"), s = Math.random();
            this._showOrMove(o, function() {
                this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e);
            }), i({
                type: "showTip",
                from: this.uid
            });
        },
        _showTooltipContent: function(t, e, i, n, r, o, a, s, l) {
            if (this._ticket = "", t.get("showContent") && t.get("show")) {
                var h = this._tooltipContent, u = t.get("formatter");
                a = a || t.get("position");
                var c = e;
                if (u && "string" == typeof u) c = Lr(u, i, !0); else if ("function" == typeof u) {
                    var d = $y(function(e, n) {
                        e === this._ticket && (h.setContent(n, l, t), this._updatePosition(t, a, r, o, h, i, s));
                    }, this);
                    this._ticket = n, c = u(i, n, d);
                }
                h.setContent(c, l, t), h.show(t), this._updatePosition(t, a, r, o, h, i, s);
            }
        },
        _updatePosition: function(t, e, i, n, r, o, a) {
            var s = this._api.getWidth(), l = this._api.getHeight();
            e = e || t.get("position");
            var h = r.getSize(), u = t.get("align"), c = t.get("verticalAlign"), d = a && a.getBoundingRect().clone();
            if (a && d.applyTransform(a.transform), "function" == typeof e && (e = e([ i, n ], o, r.el, d, {
                viewSize: [ s, l ],
                contentSize: h.slice()
            })), _(e)) i = Jy(e[0], s), n = Jy(e[1], l); else if (b(e)) {
                e.width = h[0], e.height = h[1];
                var f = Nr(e, {
                    width: s,
                    height: l
                });
                i = f.x, n = f.y, u = null, c = null;
            } else "string" == typeof e && a ? (i = (p = ku(e, d, h))[0], n = p[1]) : (i = (p = Iu(i, n, r, s, l, u ? null : 20, c ? null : 20))[0], 
            n = p[1]);
            if (u && (i -= Du(u) ? h[0] / 2 : "right" === u ? h[0] : 0), c && (n -= Du(c) ? h[1] / 2 : "bottom" === c ? h[1] : 0), 
            t.get("confine")) {
                var p = Cu(i, n, r, s, l);
                i = p[0], n = p[1];
            }
            r.moveTo(i, n);
        },
        _updateContentNotChangedOnAxis: function(t) {
            var e = this._lastDataByCoordSys, i = !!e && e.length === t.length;
            return i && Qy(e, function(e, n) {
                var r = e.dataByAxis || {}, o = (t[n] || {}).dataByAxis || [];
                (i &= r.length === o.length) && Qy(r, function(t, e) {
                    var n = o[e] || {}, r = t.seriesDataIndices || [], a = n.seriesDataIndices || [];
                    (i &= t.value === n.value && t.axisType === n.axisType && t.axisId === n.axisId && r.length === a.length) && Qy(r, function(t, e) {
                        var n = a[e];
                        i &= t.seriesIndex === n.seriesIndex && t.dataIndex === n.dataIndex;
                    });
                });
            }), this._lastDataByCoordSys = t, !!i;
        },
        _hide: function(t) {
            this._lastDataByCoordSys = null, t({
                type: "hideTip",
                from: this.uid
            });
        },
        dispose: function(t, e) {
            Bu.node || (this._tooltipContent.hide(), iu("itemTooltip", e));
        }
    }), os({
        type: "showTip",
        event: "showTip",
        update: "tooltip:manuallyShowTip"
    }, function() {}), os({
        type: "hideTip",
        event: "hideTip",
        update: "tooltip:manuallyHideTip"
    }, function() {}), e.version = Tv, e.dependencies = Iv, e.PRIORITY = Av, e.init = function(t, e, i) {
        if (Pu) {
            if (Dd.replace(".", "") - 0 < Iv.zrender.replace(".", "") - 0) throw new Error("zrender/src " + Dd + " is too old for ECharts " + Tv + ". Current version need ZRender " + Iv.zrender + "+");
            if (!t) throw new Error("Initialize failed: invalid dom.");
        }
        var n = es(t);
        if (n) return Pu && console.warn("There is a chart instance already initialized on the dom."), 
        n;
        Pu && (!T(t) || "CANVAS" === t.nodeName.toUpperCase() || (t.clientWidth || i && null != i.width) && (t.clientHeight || i && null != i.height) || console.warn("Can't get DOM width or height. Please check dom.clientWidth and dom.clientHeight. They should not be 0.For example, you may need to call this in the callback of window.onload."));
        var r = new La(t, e, i);
        return r.id = "ec_" + qv++, Yv[r.id] = r, Ci(t, Zv, r.id), Ja(r), r;
    }, e.connect = function(t) {
        if (_(t)) {
            var e = t;
            t = null, wv(e, function(e) {
                null != e.group && (t = e.group);
            }), t = t || "g_" + jv++, wv(e, function(e) {
                e.group = t;
            });
        }
        return Uv[t] = !0, t;
    }, e.disConnect = ts, e.disconnect = Kv, e.dispose = function(t) {
        "string" == typeof t ? t = Yv[t] : t instanceof La || (t = es(t)), t instanceof La && !t.isDisposed() && t.dispose();
    }, e.getInstanceByDom = es, e.getInstanceById = function(t) {
        return Yv[t];
    }, e.registerTheme = is, e.registerPreprocessor = ns, e.registerProcessor = rs, 
    e.registerPostUpdate = function(t) {
        Vv.push(t);
    }, e.registerAction = os, e.registerCoordinateSystem = function(t, e) {
        po.register(t, e);
    }, e.getCoordinateSystemDimensions = function(t) {
        var e = po.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0;
    }, e.registerLayout = as, e.registerVisual = ss, e.registerLoading = hs, e.extendComponentModel = us, 
    e.extendComponentView = cs, e.extendSeriesModel = function(t) {
        return zg.extend(t);
    }, e.extendChartView = function(t) {
        return Jo.extend(t);
    }, e.setCanvasCreator = function(t) {
        i("createCanvas", t);
    }, e.registerMap = function(t, e, i) {
        yv.registerMap(t, e, i);
    }, e.getMap = function(t) {
        var e = yv.retrieveMap(t);
        return e && e[0] && {
            geoJson: e[0].geoJSON,
            specialAreas: e[0].specialAreas
        };
    }, e.dataTool = $v;
});