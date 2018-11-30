/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  http://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      http://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * FUELED BY:
 *  - the wonderful Constructive Solid Geometry library by Evan Wallace (http://madebyevan.com)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/csg/LICENSE
 *
 *  - parts of the Google Closure Library (http://code.google.com/closure/library)
 *    LICENSE: https://raw.github.com/xtk/google-closure-library/master/LICENSE
 *
 *  - zlib.js, the ultimate gzip/zlib javascript implementation (https://github.com/imaya/zlib.js)
 *    LICENSE: https://raw.github.com/imaya/zlib.js/master/LICENSE
 *
 * MORE CREDITS: https://raw.github.com/xtk/X/master/LICENSE
 *
 */
function m(a) { throw a; }
var n = void 0,
    q = !0,
    r = null,
    s = !1;

function aa() { return function() {} }

function ba(a) { return function(b) { this[a] = b } }

function u(a) { return function() { return this[a] } }
var w, ca = this;

function ea() {}

function fa(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) { if (a instanceof Array) return "array"; if (a instanceof Object) return b; var c = Object.prototype.toString.call(a); if ("[object Window]" == c) return "object"; if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function" } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function ga(a) { return a !== n }

function ha(a) { return "array" == fa(a) }

function ja(a) { var b = fa(a); return "array" == b || "object" == b && "number" == typeof a.length }

function la(a) { return "string" == typeof a }

function y(a) { return "number" == typeof a }

function ma(a) { return "function" == fa(a) }

function na(a) { var b = typeof a; return "object" == b && a != r || "function" == b }

function oa(a) { return a[pa] || (a[pa] = ++qa) }
var pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
    qa = 0;

function ra(a, b, c) { return a.call.apply(a.bind, arguments) }

function sa(a, b, c) { a || m(Error()); if (2 < arguments.length) { var d = Array.prototype.slice.call(arguments, 2); return function() { var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d); return a.apply(b, c) } } return function() { return a.apply(b, arguments) } }

function ua(a, b, c) { ua = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ra : sa; return ua.apply(r, arguments) }

function va(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function() { var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c); return a.apply(this, b) } }
var wa = Date.now || function() { return +new Date };

function D(a, b) { var c = a.split("."),
        d = ca;!(c[0] in d) && d.execScript && d.execScript("var " + c[0]); for (var e; c.length && (e = c.shift());) !c.length && ga(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {} }

function F(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.s = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a };

function xa(a, b, c) { this.Da = this.Ca = this.Ba = 0;
    3 == arguments.length ? (this.Ba = Number(a), this.Ca = Number(b), this.Da = Number(c)) : a instanceof xa ? (this.Ba = Number(a.x()), this.Ca = Number(a.y()), this.Da = Number(a.b())) : (this.Ba = Number(a[0]), this.Ca = Number(a[1]), this.Da = Number(a[2])) }
xa.prototype = { h: function() { return new xa(this.Ba, this.Ca, this.Da) }, Cb: function(a) { return this.Ba * a.x() + this.Ca * a.y() + this.Da * a.b() }, Bd: function(a, b) { return ya(this, za(Aa(a, this), b)) }, length: function() { return Math.sqrt(this.Cb(this)) }, Yb: function(a) { return new xa(this.Ca * a.b() - this.Da * a.y(), this.Da * a.x() - this.Ba * a.b(), this.Ba * a.y() - this.Ca * a.x()) }, x: u("Ba"), y: u("Ca"), b: u("Da") };

function Ba(a) { var b = a.length(); return new xa(a.Ba / b, a.Ca / b, a.Da / b) }

function za(a, b) { return new xa(a.Ba * b, a.Ca * b, a.Da * b) }

function Aa(a, b) { return new xa(a.Ba - b.x(), a.Ca - b.y(), a.Da - b.b()) }

function ya(a, b) { return new xa(a.Ba + b.x(), a.Ca + b.y(), a.Da + b.b()) }

function Ca(a) { return new xa(-a.Ba, -a.Ca, -a.Da) };
var H = H || {};
H.Si = q;
H.Ea = function(a) { eval("X.DEV === undefined") || window.console.time(a) };
H.qa = function(a) { eval("X.DEV === undefined") || window.console.timeEnd(a) };
window["X.counter"] = new function() { this.yg = 0;
    this.Oi = function() { return this.yg++ } };

function Ea(a, b) { for (var c in b) { var d = b.__lookupGetter__(c),
            e = b.__lookupSetter__(c);
        d || e ? (d && a.__defineGetter__(c, d), e && a.__defineSetter__(c, e)) : a[c] = b[c] } }
var Fa = window.pg;
Function.prototype.bind || (Function.prototype.bind = function(a) {
    function b() { return f.apply(this instanceof c ? this : a || window, e.concat(d.call(arguments))) }

    function c() {} "function" !== typeof this && m(new TypeError("Function.prototype.bind - what is trying to be bound is not callable")); var d = Array.prototype.slice,
        e = d.call(arguments, 1),
        f = this;
    c.prototype = this.prototype;
    b.prototype = new c; return b });
for (var Ga = 0, Ha = ["ms", "moz", "webkit", "o"], Ia = 0; Ia < Ha.length && !window.requestAnimationFrame; ++Ia) window.requestAnimationFrame = window[Ha[Ia] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[Ha[Ia] + "CancelAnimationFrame"] || window[Ha[Ia] + "CancelRequestAnimationFrame"];
window.requestAnimationFrame || (window.requestAnimationFrame = function(a) { var b = Date.now(),
        c = Math.max(0, 16 - (b - Ga)),
        d = window.setTimeout(function() { a(b + c) }, c);
    Ga = b + c; return d });
window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) { clearTimeout(a) });
"slice" in ArrayBuffer.prototype || (ArrayBuffer.prototype.slice = function(a, b) { a === n && m(Error("Not enough arguments.")); var c = b || this.byteLength;
    0 > a && (a = this.byteLength + a);
    0 > c && (c = this.byteLength + c);
    c < a && (c = a = 0);
    0 > a && (a = 0);
    0 > c && (c = 0);
    a > this.byteLength && (a = this.byteLength);
    c > this.byteLength && (c = this.byteLength); for (var d = new ArrayBuffer(c - a), e = new Uint8Array(this), f = new Uint8Array(d), g = a, h = 0; g < c; ++g, ++h) f[h] = e[g]; return d });
D("$", Fa);
D("Function.prototype.bind", Function.prototype.bind);
D("window.requestAnimationFrame", window.requestAnimationFrame);
D("window.cancelAnimationFrame", window.cancelAnimationFrame);

function Ja(a) { if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(La, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ma, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Na, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Oa, "&quot;")); return a }
var La = /&/g,
    Ma = /</g,
    Na = />/g,
    Oa = /\"/g,
    Ka = /[&<>\"]/;
var Pa, Qa, Ra, Sa, Ta, Va, Wa;

function Xa() { return ca.navigator ? ca.navigator.userAgent : r }

function Ya() { return ca.navigator }
Sa = Ra = Qa = Pa = s;
var Za;
if (Za = Xa()) { var $a = Ya();
    Pa = 0 == Za.indexOf("Opera");
    Qa = !Pa && -1 != Za.indexOf("MSIE");
    Ra = !Pa && -1 != Za.indexOf("WebKit");
    Sa = !Pa && !Ra && "Gecko" == $a.product }
var ab = Pa,
    L = Qa,
    bb = Sa,
    db = Ra,
    eb, fb = Ya();
eb = fb && fb.platform || "";
Ta = -1 != eb.indexOf("Mac");
Va = -1 != eb.indexOf("Win");
Wa = -1 != eb.indexOf("Linux");
var gb = !!Ya() && -1 != (Ya().appVersion || "").indexOf("X11");

function hb() { var a = ca.document; return a ? a.documentMode : n }
var ib;
a: { var jb = "",
        kb; if (ab && ca.opera) var lb = ca.opera.version,
        jb = "function" == typeof lb ? lb() : lb;
    else if (bb ? kb = /rv\:([^\);]+)(\)|;)/ : L ? kb = /MSIE\s+([^\);]+)(\)|;)/ : db && (kb = /WebKit\/(\S+)/), kb) var mb = kb.exec(Xa()),
        jb = mb ? mb[1] : ""; if (L) { var nb = hb(); if (nb > parseFloat(jb)) { ib = String(nb); break a } }
    ib = jb }
var ob = {};

function pb(a) {
    var b;
    if (!(b = ob[a])) {
        b = 0;
        for (var c = String(ib).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "",
                h = d[f] || "",
                l = RegExp("(\\d*)(\\D*)", "g"),
                j = RegExp("(\\d*)(\\D*)", "g");
            do {
                var k = l.exec(g) || ["", "", ""],
                    p = j.exec(h) || ["", "", ""];
                if (0 == k[0].length && 0 == p[0].length) break;
                b = ((0 == k[1].length ? 0 : parseInt(k[1], 10)) < (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? -1 : (0 == k[1].length ? 0 : parseInt(k[1],
                    10)) > (0 == p[1].length ? 0 : parseInt(p[1], 10)) ? 1 : 0) || ((0 == k[2].length) < (0 == p[2].length) ? -1 : (0 == k[2].length) > (0 == p[2].length) ? 1 : 0) || (k[2] < p[2] ? -1 : k[2] > p[2] ? 1 : 0)
            } while (0 == b)
        }
        b = ob[a] = 0 <= b
    }
    return b
}
var qb = ca.document,
    rb = !qb || !L ? n : hb() || ("CSS1Compat" == qb.compatMode ? parseInt(ib, 10) : 5);

function sb() { 0 != tb && (this.Jj = Error().stack, oa(this)) }
var tb = 0;

function ub(a, b) { this.type = a;
    this.currentTarget = this.target = b }
w = ub.prototype;
w.ac = s;
w.defaultPrevented = s;
w.Gd = q;
w.stopPropagation = function() { this.ac = q };
w.preventDefault = function() { this.defaultPrevented = q;
    this.Gd = s };
var vb = 0;

function wb() {}
w = wb.prototype;
w.key = 0;
w.bc = s;
w.od = s;
w.ea = function(a, b, c, d, e, f) { ma(a) ? this.Pf = q : a && a.handleEvent && ma(a.handleEvent) ? this.Pf = s : m(Error("Invalid listener argument"));
    this.Db = a;
    this.hg = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.ye = f;
    this.od = s;
    this.key = ++vb;
    this.bc = s };
w.handleEvent = function(a) { return this.Pf ? this.Db.call(this.ye || this.src, a) : this.Db.handleEvent.call(this.Db, a) };

function xb(a) { var b = [],
        c = 0,
        d; for (d in a) b[c++] = a[d]; return b }
var yb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function zb(a, b) { for (var c, d, e = 1; e < arguments.length; e++) { d = arguments[e]; for (c in d) a[c] = d[c]; for (var f = 0; f < yb.length; f++) c = yb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]) } };
var Ab = !L || L && 9 <= rb,
    Bb = L && !pb("9");
!db || pb("528");
bb && pb("1.9b") || L && pb("8") || ab && pb("9.5") || db && pb("528");
bb && !pb("8") || L && pb("9");
var Cb = Array.prototype,
    Db = Cb.indexOf ? function(a, b, c) { return Cb.indexOf.call(a, b, c) } : function(a, b, c) { c = c == r ? 0 : 0 > c ? Math.max(0, a.length + c) : c; if (la(a)) return !la(b) || 1 != b.length ? -1 : a.indexOf(b, c); for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1 },
    Eb = Cb.forEach ? function(a, b, c) { Cb.forEach.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = la(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a) },
    Fb = Cb.map ? function(a, b, c) { return Cb.map.call(a, b, c) } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f =
                la(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    Gb = Cb.some ? function(a, b, c) { return Cb.some.call(a, b, c) } : function(a, b, c) { for (var d = a.length, e = la(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return q;
        return s };

function Hb(a, b) { var c = Db(a, b);
    0 <= c && Cb.splice.call(a, c, 1) }

function Ib(a, b, c) { return 2 >= arguments.length ? Cb.slice.call(a, b) : Cb.slice.call(a, b, c) };

function Jb(a) { Jb[" "](a); return a }
Jb[" "] = ea;

function Kb(a, b) { a && this.ea(a, b) }
F(Kb, ub);
w = Kb.prototype;
w.target = r;
w.relatedTarget = r;
w.offsetX = 0;
w.offsetY = 0;
w.clientX = 0;
w.clientY = 0;
w.screenX = 0;
w.screenY = 0;
w.button = 0;
w.keyCode = 0;
w.charCode = 0;
w.ctrlKey = s;
w.altKey = s;
w.shiftKey = s;
w.metaKey = s;
w.hi = s;
w.Ma = r;
w.ea = function(a, b) {
    var c = this.type = a.type;
    ub.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) { if (bb) { var e;
            a: { try { Jb(d.nodeName);
                    e = q; break a } catch (f) {}
                e = s }
            e || (d = r) } } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = db || a.offsetX !== n ? a.offsetX : a.layerX;
    this.offsetY = db || a.offsetY !== n ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== n ? a.clientX : a.pageX;
    this.clientY = a.clientY !== n ? a.clientY : a.pageY;
    this.screenX =
        a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.hi = Ta ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.Ma = a;
    a.defaultPrevented && this.preventDefault();
    delete this.ac
};
w.stopPropagation = function() { Kb.s.stopPropagation.call(this);
    this.Ma.stopPropagation ? this.Ma.stopPropagation() : this.Ma.cancelBubble = q };
w.preventDefault = function() { Kb.s.preventDefault.call(this); var a = this.Ma; if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = s, Bb) try { if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1 } catch (b) {} };
w.dh = u("Ma");
var Lb = {},
    Nb = {},
    Ob = {},
    Pb = {};

function O(a, b, c, d, e) { if (ha(b)) { for (var f = 0; f < b.length; f++) O(a, b[f], c, d, e); return r }
    a = Qb(a, b, c, s, d, e);
    b = a.key;
    Lb[b] = a; return b }

function Qb(a, b, c, d, e, f) {
    b || m(Error("Invalid event type"));
    e = !!e;
    var g = Nb;
    b in g || (g[b] = { V: 0, pa: 0 });
    g = g[b];
    e in g || (g[e] = { V: 0, pa: 0 }, g.V++);
    var g = g[e],
        h = oa(a),
        l;
    g.pa++;
    if (g[h]) { l = g[h]; for (var j = 0; j < l.length; j++)
            if (g = l[j], g.Db == c && g.ye == f) { if (g.bc) break;
                d || (l[j].od = s); return l[j] } } else l = g[h] = [], g.V++;
    var k = Rb,
        p = Ab ? function(a) { return k.call(p.src, p.Db, a) } : function(a) { a = k.call(p.src, p.Db, a); if (!a) return a },
        j = p,
        g = new wb;
    g.ea(c, j, a, b, e, f);
    g.od = d;
    j.src = a;
    j.Db = g;
    l.push(g);
    Ob[h] || (Ob[h] = []);
    Ob[h].push(g);
    a.addEventListener ? (a == ca || !a.Bf) && a.addEventListener(b, j, e) : a.attachEvent(b in Pb ? Pb[b] : Pb[b] = "on" + b, j);
    return g
}

function Sb(a, b, c, d, e) { if (ha(b))
        for (var f = 0; f < b.length; f++) Sb(a, b[f], c, d, e);
    else a = Qb(a, b, c, q, d, e), Lb[a.key] = a }

function Vb(a, b, c, d, e) { if (ha(b))
        for (var f = 0; f < b.length; f++) Vb(a, b[f], c, d, e);
    else { d = !!d;
        a: { f = Nb; if (b in f && (f = f[b], d in f && (f = f[d], a = oa(a), f[a]))) { a = f[a]; break a }
            a = r }
        if (a)
            for (f = 0; f < a.length; f++)
                if (a[f].Db == c && a[f].capture == d && a[f].ye == e) { Wb(a[f].key); break } } }

function Wb(a) { var b = Lb[a]; if (!b || b.bc) return s; var c = b.src,
        d = b.type,
        e = b.hg,
        f = b.capture;
    c.removeEventListener ? (c == ca || !c.Bf) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in Pb ? Pb[d] : Pb[d] = "on" + d, e);
    c = oa(c);
    Ob[c] && (e = Ob[c], Hb(e, b), 0 == e.length && delete Ob[c]);
    b.bc = q; if (b = Nb[d][f][c]) b.Xf = q, Xb(d, f, c, b);
    delete Lb[a]; return q }

function Xb(a, b, c, d) { if (!d.Dd && d.Xf) { for (var e = 0, f = 0; e < d.length; e++) d[e].bc ? d[e].hg.src = r : (e != f && (d[f] = d[e]), f++);
        d.length = f;
        d.Xf = s;
        0 == f && (delete Nb[a][b][c], Nb[a][b].V--, 0 == Nb[a][b].V && (delete Nb[a][b], Nb[a].V--), 0 == Nb[a].V && delete Nb[a]) } }

function Yb(a, b, c, d, e) { var f = 1;
    b = oa(b); if (a[b]) { var g = --a.pa,
            h = a[b];
        h.Dd ? h.Dd++ : h.Dd = 1; try { for (var l = h.length, j = 0; j < l; j++) { var k = h[j];
                k && !k.bc && (f &= Zb(k, e) !== s) } } finally { a.pa = Math.max(g, a.pa), h.Dd--, Xb(c, d, b, h) } } return Boolean(f) }

function Zb(a, b) { a.od && Wb(a.key); return a.handleEvent(b) }

function Rb(a, b) {
    if (a.bc) return q;
    var c = a.type,
        d = Nb;
    if (!(c in d)) return q;
    var d = d[c],
        e, f;
    if (!Ab) {
        var g;
        if (!(g = b)) a: { g = ["window", "event"]; for (var h = ca; e = g.shift();)
                if (h[e] != r) h = h[e];
                else { g = r; break a }
            g = h }
        e = g;
        g = q in d;
        h = s in d;
        if (g) { if (0 > e.keyCode || e.returnValue != n) return q;
            a: { var l = s; if (0 == e.keyCode) try { e.keyCode = -1; break a } catch (j) { l = q }
                if (l || e.returnValue == n) e.returnValue = q } }
        l = new Kb;
        l.ea(e, this);
        e = q;
        try {
            if (g) {
                for (var k = [], p = l.currentTarget; p; p = p.parentNode) k.push(p);
                f = d[q];
                f.pa = f.V;
                for (var t = k.length -
                        1; !l.ac && 0 <= t && f.pa; t--) l.currentTarget = k[t], e &= Yb(f, k[t], c, q, l);
                if (h) { f = d[s];
                    f.pa = f.V; for (t = 0; !l.ac && t < k.length && f.pa; t++) l.currentTarget = k[t], e &= Yb(f, k[t], c, s, l) }
            } else e = Zb(a, l)
        } finally { k && (k.length = 0) }
        return e
    }
    c = new Kb(b, this);
    return e = Zb(a, c)
}
var $b = 0;

function ac(a) { return a + "_" + $b++ };

function bc() { sb.call(this) }
F(bc, sb);
w = bc.prototype;
w.Bf = q;
w.Le = r;
w.Pe = ba("Le");
w.addEventListener = function(a, b, c, d) { O(this, a, b, c, d) };
w.removeEventListener = function(a, b, c, d) { Vb(this, a, b, c, d) };
w.dispatchEvent = function(a) {
    var b = a.type || a,
        c = Nb;
    if (b in c) {
        if (la(a)) a = new ub(a, this);
        else if (a instanceof ub) a.target = a.target || this;
        else { var d = a;
            a = new ub(b, this);
            zb(a, d) }
        var d = 1,
            e, c = c[b],
            b = q in c,
            f;
        if (b) { e = []; for (f = this; f; f = f.Le) e.push(f);
            f = c[q];
            f.pa = f.V; for (var g = e.length - 1; !a.ac && 0 <= g && f.pa; g--) a.currentTarget = e[g], d &= Yb(f, e[g], a.type, q, a) && a.Gd != s }
        if (s in c)
            if (f = c[s], f.pa = f.V, b)
                for (g = 0; !a.ac && g < e.length && f.pa; g++) a.currentTarget = e[g], d &= Yb(f, e[g], a.type, s, a) && a.Gd != s;
            else
                for (e = this; !a.ac && e &&
                    f.pa; e = e.Le) a.currentTarget = e, d &= Yb(f, e, a.type, s, a) && a.Gd != s;
        a = Boolean(d)
    } else a = q;
    return a
};

function Q() { sb.call(this);
    this.c = "base";
    this.sa = window["X.counter"].Oi();
    this.g = s }
F(Q, bc);
Q.prototype.__defineGetter__("classname", u("c"));
Q.prototype.__defineGetter__("id", u("sa"));
D("X.base", Q);

function cc(a, b) { this.Aa = new xa(a);
    this.ba = new xa(b) }
cc.prototype = { h: function() { return new cc(this.Aa.h(), this.ba.h()) }, $b: function() { this.ba = Ca(this.ba) } };

function dc(a, b) { this.ba = a;
    this.Uc = b }
dc.prototype = { h: function() { return new dc(this.ba.h(), this.Uc) }, $b: function() { this.ba = Ca(this.ba);
        this.Uc = -this.Uc } };

function ec(a, b) { this.hb = a;
    this.Nd = b; var c = a[0].Aa,
        d = a[2].Aa,
        d = Ba(Aa(a[1].Aa, c).Yb(Aa(d, c)));
    this.za = new dc(d, d.Cb(c)) }
ec.prototype = { h: function() { var a = this.hb.map(function(a) { return a.h() }); return new ec(a, this.Nd) }, $b: function() { this.hb.reverse().map(function(a) { a.$b() });
        this.za.$b() } };

function fc(a, b, c, d, e, f) {
    for (var g = 0, h = [], l = 0; l < a.hb.length; l++) { var j = b.ba.Cb(a.hb[l].Aa) - b.Uc,
            j = -1E-5 > j ? 2 : 1E-5 < j ? 1 : 0,
            g = g | j;
        h.push(j) }
    switch (g) {
        case 0:
            (0 < b.ba.Cb(a.za.ba) ? c : d).push(a);
            break;
        case 1:
            e.push(a);
            break;
        case 2:
            f.push(a);
            break;
        case 3:
            c = [];
            d = [];
            for (l = 0; l < a.hb.length; l++) { var k = (l + 1) % a.hb.length,
                    j = h[l],
                    p = h[k],
                    g = a.hb[l],
                    k = a.hb[k];
                2 != j && c.push(g);
                1 != j && d.push(2 != j ? g.h() : g);
                3 == (j | p) && (j = (b.Uc - b.ba.Cb(g.Aa)) / b.ba.Cb(Aa(k.Aa, g.Aa)), j = new cc(g.Aa.Bd(k.Aa, j), g.ba.Bd(k.ba, j)), c.push(j), d.push(j.h())) }
            3 <=
                c.length && e.push(new ec(c, a.Nd));
            3 <= d.length && f.push(new ec(d, a.Nd))
    }
};

function gc(a) { this.ca = this.da = this.za = r;
    this.A = [];
    a && hc(this, a) }
gc.prototype = { h: function() { var a = new gc,
            b = this.za && this.za.h();
        a.za = b;
        b = this.da && this.da.h();
        a.da = b;
        b = this.ca && this.ca.h();
        a.ca = b;
        a.Ld(this.A.map(function(a) { return a.h() })); return a }, D: function() { for (var a = 0; a < this.A.length; a++) this.A[a].$b();
        this.za.$b();
        this.da && this.da.D();
        this.ca && this.ca.D();
        a = this.da;
        this.da = this.ca;
        this.ca = a }, Ld: ba("A") };

function hc(a, b) { if (b.length) { a.za || (a.za = b[0].za.h()); for (var c = [], d = [], e = 0; e < b.length; e++) fc(b[e], a.za, a.A, a.A, c, d);
        c.length && (a.da || (a.da = new gc), hc(a.da, c));
        d.length && (a.ca || (a.ca = new gc), hc(a.ca, d)) } }

function ic(a) { var b = a.A.slice();
    a.da && (b = b.concat(ic(a.da)));
    a.ca && (b = b.concat(ic(a.ca))); return b }

function jc(a, b) { a.A = kc(b, a.A);
    a.da && jc(a.da, b);
    a.ca && jc(a.ca, b) }

function kc(a, b) { if (!a.za) return b.slice(); for (var c = [], d = [], e = 0; e < b.length; e++) fc(b[e], a.za, c, d, c, d);
    a.da && (c = kc(a.da, c));
    d = a.ca ? kc(a.ca, d) : []; return c.concat(d) };

function lc() { this.A = [] }

function mc(a) { var b = new lc;
    b.Ld(a); return b }
lc.prototype = {
    h: function() { var a = new lc;
        a.Ld(this.A.map(function(a) { return a.h() })); return a },
    We: function(a) { var b = new gc(this.h().A);
        a = new gc(a.h().A);
        jc(b, a);
        jc(a, b);
        a.D();
        jc(a, b);
        a.D();
        hc(b, ic(a)); return mc(ic(b)) },
    la: function(a) { var b = new gc(this.h().A);
        a = new gc(a.h().A);
        b.D();
        jc(b, a);
        jc(a, b);
        a.D();
        jc(a, b);
        a.D();
        hc(b, ic(a));
        b.D(); return mc(ic(b)) },
    Ae: function(a) { var b = new gc(this.h().A);
        a = new gc(a.h().A);
        b.D();
        jc(a, b);
        a.D();
        jc(b, a);
        jc(a, b);
        hc(b, ic(a));
        b.D(); return mc(ic(b)) },
    inverse: function() {
        var a =
            this.h();
        a.A.map(function(a) { a.$b() });
        return a
    },
    Ld: ba("A")
};

function nc() { Q.call(this);
    this.c = "indexer";
    this.ke = [];
    this.Fj = [];
    this.pb = {} }
F(nc, Q);
nc.prototype.add = function(a) { a == r && m(Error("Invalid object.")); var b = window.JSON.stringify(a);
    b in this.pb || (this.pb[b] = this.ke.length, this.ke.push(a)); return this.pb[b] };
nc.prototype.unique = u("ke");

function oc(a) { Q.call(this);
    this.c = "file";
    this.dd = a;
    this.g = q }
F(oc, Q);

function pc() { this.Ib = this.o = r }
pc.prototype.__defineSetter__("file", function(a) { this.o = a == r || ha(a) && 0 == a.length ? r : ha(a) ? 1 == a.length ? new oc(a[0]) : Fb(a, function(a) { var c = new R;
        c.o = new oc(a); return c }) : new oc(a) });
pc.prototype.__defineGetter__("file", function() { return !this.o ? "" : ha(this.o) ? this.o.map(function(a) { return a.o.dd }) : this.o.dd });
pc.prototype.__defineGetter__("filedata", u("Ib"));
pc.prototype.__defineSetter__("filedata", function(a) { if (a == r || ha(a) && 0 == a.length) this.Ib = r; if (ha(a))
        if (1 == a.length) this.Ib = a[0];
        else { var b = this.o.length,
                c; for (c = 0; c < b; c++) this.o[c].Ib = a[c] }
    else this.Ib = a });

function qc(a) { if ("function" == typeof a.bb) return a.bb(); if (la(a)) return a.split(""); if (ja(a)) { for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]); return b } return xb(a) };

function rc(a, b) { this.J = {};
    this.w = []; var c = arguments.length; if (1 < c) { c % 2 && m(Error("Uneven number of arguments")); for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]) } else a && this.me(a) }
w = rc.prototype;
w.V = 0;
w.Ye = 0;
w.ud = u("V");
w.bb = function() { sc(this); for (var a = [], b = 0; b < this.w.length; b++) a.push(this.J[this.w[b]]); return a };

function tc(a) { for (var b = 0; b < a.w.length; b++) { var c = a.w[b]; if (uc(a.J, c) && a.J[c] == s) return q } return s }
w.clear = function() { this.J = {};
    this.Ye = this.V = this.w.length = 0 };
w.remove = function(a) { return uc(this.J, a) ? (delete this.J[a], this.V--, this.Ye++, this.w.length > 2 * this.V && sc(this), q) : s };

function sc(a) { if (a.V != a.w.length) { for (var b = 0, c = 0; b < a.w.length;) { var d = a.w[b];
            uc(a.J, d) && (a.w[c++] = d);
            b++ }
        a.w.length = c } if (a.V != a.w.length) { for (var e = {}, c = b = 0; b < a.w.length;) d = a.w[b], uc(e, d) || (a.w[c++] = d, e[d] = 1), b++;
        a.w.length = c } }
w.get = function(a, b) { return uc(this.J, a) ? this.J[a] : b };
w.set = function(a, b) { uc(this.J, a) || (this.V++, this.w.push(a), this.Ye++);
    this.J[a] = b };
w.me = function(a) { var b; if (a instanceof rc) sc(a), b = a.w.concat(), a = a.bb();
    else { b = []; var c = 0,
            d; for (d in a) b[c++] = d;
        a = xb(a) } for (c = 0; c < b.length; c++) this.set(b[c], a[c]) };
w.h = function() { return new rc(this) };
w.kg = function() { for (var a = new rc, b = 0; b < this.w.length; b++) { var c = this.w[b];
        a.set(this.J[c], c) } return a };

function uc(a, b) { return Object.prototype.hasOwnProperty.call(a, b) };

function vc() { Q.call(this);
    this.c = "colortable";
    this.pb = new rc;
    Ea(this, new pc) }
F(vc, Q);
vc.prototype.add = function(a, b, c, d, e, f) {
    (!y(a) || !y(c) || !y(d) || !y(e) || !y(f)) && m(Error("Invalid color table entry."));
    this.pb.set(a, [b, c, d, e, f]);
    this.g = q };

function wc(a, b, c) { this.x = ga(a) ? a : 0;
    this.y = ga(b) ? b : 0;
    this.b = ga(c) ? c : 0 }
wc.prototype.h = function() { return new wc(this.x, this.y, this.b) };

function S(a, b, c) { this.x = a;
    this.y = b;
    this.b = c }
F(S, wc);
w = S.prototype;
w.h = function() { return new S(this.x, this.y, this.b) };
w.eb = function() { return Math.sqrt(this.x * this.x + this.y * this.y + this.b * this.b) };
w.scale = function(a) { this.x *= a;
    this.y *= a;
    this.b *= a; return this };
w.D = function() { this.x = -this.x;
    this.y = -this.y;
    this.b = -this.b; return this };
w.normalize = function() { return this.scale(1 / this.eb()) };
w.add = function(a) { this.x += a.x;
    this.y += a.y;
    this.b += a.b; return this };
w.la = function(a) { this.x -= a.x;
    this.y -= a.y;
    this.b -= a.b; return this };

function xc(a, b) { var c = a.x - b.x,
        d = a.y - b.y,
        e = a.b - b.b; return c * c + d * d + e * e }

function yc(a, b) { return new S(a.x + b.x, a.y + b.y, a.b + b.b) }

function zc(a, b) { return new S(a.y * b.b - a.b * b.y, a.b * b.x - a.x * b.b, a.x * b.y - a.y * b.x) };
H.f = S;
w = H.f.prototype;
w.h = S.prototype.h;
w.eb = S.prototype.eb;
w.scale = S.prototype.scale;
w.D = S.prototype.D;
w.add = S.prototype.add;
w.la = S.prototype.la;
w.normalize = function() { var a = this.eb(); return 0 == a ? this.scale(0) : this.scale(1 / a) };
H.f.Cb = function(a, b) { return a.x * b.x + a.y * b.y + a.b * b.b };
H.f.Yb = zc;
H.f.Ab = function(a, b) { var c = a.x - b.x,
        d = a.y - b.y,
        e = a.b - b.b; return Math.sqrt(c * c + d * d + e * e) };
H.f.Bd = function(a, b, c) { return new S(a.x + c * (b.x - a.x), a.y + c * (b.y - a.y), a.b + c * (b.b - a.b)) };
H.f.prototype.__defineGetter__("xx", u("x"));
H.f.prototype.__defineGetter__("yy", u("y"));
H.f.prototype.__defineGetter__("zz", u("b"));
D("X.vector", H.f);
D("X.vector.prototype.clone", H.f.prototype.h);
D("X.vector.prototype.magnitude", H.f.prototype.eb);
D("X.vector.prototype.scale", H.f.prototype.scale);
D("X.vector.prototype.invert", H.f.prototype.D);
D("X.vector.prototype.normalize", H.f.prototype.normalize);
D("X.vector.prototype.add", H.f.prototype.add);
D("X.vector.prototype.subtract", H.f.prototype.la);
D("X.vector.dot", H.f.Cb);
D("X.vector.cross", H.f.Yb);
D("X.vector.distance", H.f.Ab);
D("X.vector.lerp", H.f.Bd);

function Ac(a) { this.length = a.length || a; for (var b = 0; b < this.length; b++) this[b] = a[b] || 0 }
Ac.prototype.BYTES_PER_ELEMENT = 8;
Ac.prototype.set = function(a, b) { b = b || 0; for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c] };
Ac.prototype.toString = Array.prototype.join;
if ("undefined" == typeof Float64Array) { try { Ac.BYTES_PER_ELEMENT = 8 } catch (Bc) {}
    Ac.prototype.BYTES_PER_ELEMENT = Ac.prototype.BYTES_PER_ELEMENT;
    Ac.prototype.set = Ac.prototype.set;
    Ac.prototype.toString = Ac.prototype.toString;
    D("Float64Array", Ac) };

function Cc(a) { this.length = a.length || a; for (var b = 0; b < this.length; b++) this[b] = a[b] || 0 }
Cc.prototype.BYTES_PER_ELEMENT = 4;
Cc.prototype.set = function(a, b) { b = b || 0; for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c] };
Cc.prototype.toString = Array.prototype.join;
"undefined" == typeof Float32Array && (Cc.BYTES_PER_ELEMENT = 4, Cc.prototype.BYTES_PER_ELEMENT = Cc.prototype.BYTES_PER_ELEMENT, Cc.prototype.set = Cc.prototype.set, Cc.prototype.toString = Cc.prototype.toString, D("Float32Array", Cc));

function Dc(a, b, c, d, e, f, g, h, l, j, k, p, t, v, z, A, C) { a[0] = b;
    a[1] = c;
    a[2] = d;
    a[3] = e;
    a[4] = f;
    a[5] = g;
    a[6] = h;
    a[7] = l;
    a[8] = j;
    a[9] = k;
    a[10] = p;
    a[11] = t;
    a[12] = v;
    a[13] = z;
    a[14] = A;
    a[15] = C; return a }

function Ec(a, b, c) { b *= 4;
    a[b] = c[0];
    a[b + 1] = c[1];
    a[b + 2] = c[2];
    a[b + 3] = c[3] }

function Fc(a, b, c) { b *= 4;
    c[0] = a[b];
    c[1] = a[b + 1];
    c[2] = a[b + 2];
    c[3] = a[b + 3] }

function Gc(a, b, c, d, e) { a[b] = c;
    a[b + 4] = d;
    a[b + 8] = e;
    a[b + 12] = 0 }

function Hc(a, b, c) { a[b] = c[0];
    a[b + 4] = c[1];
    a[b + 8] = c[2];
    a[b + 12] = c[3] }

function Ic(a, b, c) { c[0] = a[b];
    c[1] = a[b + 4];
    c[2] = a[b + 8];
    c[3] = a[b + 12] }

function Jc(a, b, c, d) { var e = a[1] * b + a[5] * c + a[9] * d + a[13],
        f = a[2] * b + a[6] * c + a[10] * d + a[14],
        g = a[3] * b + a[7] * c + a[11] * d + a[15];
    a[12] = a[0] * b + a[4] * c + a[8] * d + a[12];
    a[13] = e;
    a[14] = f;
    a[15] = g; return a }
new Float64Array(3);
new Float64Array(3);
new Float64Array(4);
new Float64Array(4);
new Float64Array(4);
new Float64Array(16);
H.d = {};
H.d.Tf = function(a, b, c, d) { c = c.la(b);
    c.normalize();
    d = H.f.Yb(c, d);
    d.normalize(); var e = H.f.Yb(d, c);
    e.normalize();
    c.D();
    Gc(a, 0, d.x, d.y, d.b);
    Gc(a, 1, e.x, e.y, e.b);
    Gc(a, 2, c.x, c.y, c.b);
    Jc(a, -b.x, -b.y, -b.b); return a };
H.d.Na = function(a, b, c, d) { var e = 1 / (b * a[3] + c * a[7] + d * a[11] + a[15]); return new H.f((b * a[0] + c * a[4] + d * a[8] + a[12]) * e, (b * a[1] + c * a[5] + d * a[9] + a[13]) * e, (b * a[2] + c * a[6] + d * a[10] + a[14]) * e) };
H.d.Ji = function(a, b, c) { var d = new Float32Array(4),
        e = new Float32Array(4);
    Ic(a, b, d);
    Ic(a, c, e);
    Hc(a, b, e);
    Hc(a, c, d); return a };
H.d.Ii = function(a, b, c) { var d = new Float32Array(4),
        e = new Float32Array(4);
    Fc(a, b, d);
    Fc(a, c, e);
    Ec(a, b, e);
    Ec(a, c, d); return a };
H.d.Oc = function() { var a = new Float32Array(16);
    a[0] = a[5] = a[10] = a[15] = 1; return a };
H.d.h = function(a) { var b = new Float32Array(16);
    b[0] = a[0];
    b[1] = a[1];
    b[2] = a[2];
    b[3] = a[3];
    b[4] = a[4];
    b[5] = a[5];
    b[6] = a[6];
    b[7] = a[7];
    b[8] = a[8];
    b[9] = a[9];
    b[10] = a[10];
    b[11] = a[11];
    b[12] = a[12];
    b[13] = a[13];
    b[14] = a[14];
    b[15] = a[15]; return b };
H.d.kg = function(a, b) { if (b == a) { var c = a[1],
            d = a[2],
            e = a[3],
            f = a[6],
            g = a[7],
            h = a[11];
        b[1] = a[4];
        b[2] = a[8];
        b[3] = a[12];
        b[4] = c;
        b[6] = a[9];
        b[7] = a[13];
        b[8] = d;
        b[9] = f;
        b[11] = a[14];
        b[12] = e;
        b[13] = g;
        b[14] = h } else b[0] = a[0], b[1] = a[4], b[2] = a[8], b[3] = a[12], b[4] = a[1], b[5] = a[5], b[6] = a[9], b[7] = a[13], b[8] = a[2], b[9] = a[6], b[10] = a[10], b[11] = a[14], b[12] = a[3], b[13] = a[7], b[14] = a[11], b[15] = a[15]; return b };
H.d.Sg = function(a) { var b = a[0],
        c = a[1],
        d = a[2],
        e = a[3],
        f = a[4],
        g = a[5],
        h = a[6],
        l = a[7],
        j = a[8],
        k = a[9],
        p = a[10],
        t = a[11],
        v = a[12],
        z = a[13],
        A = a[14];
    a = a[15]; return (b * g - c * f) * (p * a - t * A) - (b * h - d * f) * (k * a - t * z) + (b * l - e * f) * (k * A - p * z) + (c * h - d * g) * (j * a - t * v) - (c * l - e * g) * (j * A - p * v) + (d * l - e * h) * (j * z - k * v) };
H.d.D = function(a, b) {
    var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = a[4],
        h = a[5],
        l = a[6],
        j = a[7],
        k = a[8],
        p = a[9],
        t = a[10],
        v = a[11],
        z = a[12],
        A = a[13],
        C = a[14],
        E = a[15],
        x = c * h - d * g,
        B = c * l - e * g,
        G = c * j - f * g,
        I = d * l - e * h,
        N = d * j - f * h,
        J = e * j - f * l,
        K = k * A - p * z,
        P = k * C - t * z,
        V = k * E - v * z,
        T = p * C - t * A,
        ia = p * E - v * A,
        ka = t * E - v * C,
        M = x * ka - B * ia + G * T + I * V - N * P + J * K;
    if (0 == M) return s;
    M = 1 / M;
    b[0] = (h * ka - l * ia + j * T) * M;
    b[1] = (-d * ka + e * ia - f * T) * M;
    b[2] = (A * J - C * N + E * I) * M;
    b[3] = (-p * J + t * N - v * I) * M;
    b[4] = (-g * ka + l * V - j * P) * M;
    b[5] = (c * ka - e * V + f * P) * M;
    b[6] = (-z * J + C * G - E * B) * M;
    b[7] = (k * J - t * G + v * B) * M;
    b[8] = (g *
        ia - h * V + j * K) * M;
    b[9] = (-c * ia + d * V - f * K) * M;
    b[10] = (z * N - A * G + E * x) * M;
    b[11] = (-k * N + p * G - v * x) * M;
    b[12] = (-g * T + h * P - l * K) * M;
    b[13] = (c * T - d * P + e * K) * M;
    b[14] = (-z * I + A * B - C * x) * M;
    b[15] = (k * I - p * B + t * x) * M;
    return q
};
H.d.Ce = function(a, b, c, d, e) { var f = b / 2;
    b = e - d; var g = Math.sin(f); if (0 == b || 0 == g || 0 == c) return a;
    f = Math.cos(f) / g; return Dc(a, f / c, 0, 0, 0, 0, f, 0, 0, 0, 0, -(e + d) / b, -1, 0, 0, -(2 * d * e) / b, 0) };
H.d.yh = function(a, b, c, d, e, f, g) { return Dc(a, 2 * f / (c - b), 0, 0, 0, 0, 2 * f / (e - d), 0, 0, (c + b) / (c - b), (e + d) / (e - d), -(g + f) / (g - f), -1, 0, 0, -(2 * g * f) / (g - f), 0) };
H.d.zh = function(a, b, c, d, e, f, g) { return Dc(a, 2 / (c - b), 0, 0, 0, 0, 2 / (e - d), 0, 0, 0, 0, -2 / (g - f), 0, -(c + b) / (c - b), -(e + d) / (e - d), -(g + f) / (g - f), 1) };
H.d.multiply = function(a, b, c) {
    var d = a[0],
        e = a[1],
        f = a[2],
        g = a[3],
        h = a[4],
        l = a[5],
        j = a[6],
        k = a[7],
        p = a[8],
        t = a[9],
        v = a[10],
        z = a[11],
        A = a[12],
        C = a[13],
        E = a[14];
    a = a[15];
    var x = b[0],
        B = b[1],
        G = b[2],
        I = b[3],
        N = b[4],
        J = b[5],
        K = b[6],
        P = b[7],
        V = b[8],
        T = b[9],
        ia = b[10],
        ka = b[11],
        M = b[12],
        Tb = b[13],
        Ub = b[14];
    b = b[15];
    c[0] = d * x + h * B + p * G + A * I;
    c[1] = e * x + l * B + t * G + C * I;
    c[2] = f * x + j * B + v * G + E * I;
    c[3] = g * x + k * B + z * G + a * I;
    c[4] = d * N + h * J + p * K + A * P;
    c[5] = e * N + l * J + t * K + C * P;
    c[6] = f * N + j * J + v * K + E * P;
    c[7] = g * N + k * J + z * K + a * P;
    c[8] = d * V + h * T + p * ia + A * ka;
    c[9] = e * V + l * T + t * ia + C * ka;
    c[10] = f * V +
        j * T + v * ia + E * ka;
    c[11] = g * V + k * T + z * ia + a * ka;
    c[12] = d * M + h * Tb + p * Ub + A * b;
    c[13] = e * M + l * Tb + t * Ub + C * b;
    c[14] = f * M + j * Tb + v * Ub + E * b;
    c[15] = g * M + k * Tb + z * Ub + a * b;
    return c
};
H.d.translate = Jc;
H.d.scale = function(a, b, c, d) { return Dc(a, a[0] * b, a[1] * b, a[2] * b, a[3] * b, a[4] * c, a[5] * c, a[6] * c, a[7] * c, a[8] * d, a[9] * d, a[10] * d, a[11] * d, a[12], a[13], a[14], a[15]) };
H.d.rotate = function(a, b, c, d, e) { var f = a[0],
        g = a[1],
        h = a[2],
        l = a[3],
        j = a[4],
        k = a[5],
        p = a[6],
        t = a[7],
        v = a[8],
        z = a[9],
        A = a[10],
        C = a[11],
        E = Math.cos(b),
        x = Math.sin(b),
        B = 1 - E;
    b = c * c * B + E; var G = c * d * B + e * x,
        I = c * e * B - d * x,
        N = c * d * B - e * x,
        J = d * d * B + E,
        K = d * e * B + c * x,
        P = c * e * B + d * x;
    c = d * e * B - c * x;
    e = e * e * B + E; return Dc(a, f * b + j * G + v * I, g * b + k * G + z * I, h * b + p * G + A * I, l * b + t * G + C * I, f * N + j * J + v * K, g * N + k * J + z * K, h * N + p * J + A * K, l * N + t * J + C * K, f * P + j * c + v * e, g * P + k * c + z * e, h * P + p * c + A * e, l * P + t * c + C * e, a[12], a[13], a[14], a[15]) };
H.d.Hd = function(a, b) { var c = a[4],
        d = a[5],
        e = a[6],
        f = a[7],
        g = a[8],
        h = a[9],
        l = a[10],
        j = a[11],
        k = Math.cos(b),
        p = Math.sin(b);
    a[4] = c * k + g * p;
    a[5] = d * k + h * p;
    a[6] = e * k + l * p;
    a[7] = f * k + j * p;
    a[8] = c * -p + g * k;
    a[9] = d * -p + h * k;
    a[10] = e * -p + l * k;
    a[11] = f * -p + j * k; return a };
H.d.Id = function(a, b) { var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = a[8],
        h = a[9],
        l = a[10],
        j = a[11],
        k = Math.cos(b),
        p = Math.sin(b);
    a[0] = c * k + g * -p;
    a[1] = d * k + h * -p;
    a[2] = e * k + l * -p;
    a[3] = f * k + j * -p;
    a[8] = c * p + g * k;
    a[9] = d * p + h * k;
    a[10] = e * p + l * k;
    a[11] = f * p + j * k; return a };
H.d.Jd = function(a, b) { var c = a[0],
        d = a[1],
        e = a[2],
        f = a[3],
        g = a[4],
        h = a[5],
        l = a[6],
        j = a[7],
        k = Math.cos(b),
        p = Math.sin(b);
    a[0] = c * k + g * p;
    a[1] = d * k + h * p;
    a[2] = e * k + l * p;
    a[3] = f * k + j * p;
    a[4] = c * -p + g * k;
    a[5] = d * -p + h * k;
    a[6] = e * -p + l * k;
    a[7] = f * -p + j * k; return a };
D("X.matrix.identity", H.d.Oc);
D("X.matrix.clone", H.d.h);
D("X.matrix.transpose", H.d.kg);
D("X.matrix.determinant", H.d.Sg);
D("X.matrix.invert", H.d.D);
D("X.matrix.multiply", H.d.multiply);
D("X.matrix.multiplyByVector", H.d.Na);
D("X.matrix.makePerspective", H.d.Ce);
D("X.matrix.makeFrustum", H.d.yh);
D("X.matrix.makeOrtho", H.d.zh);
D("X.matrix.makeLookAt", H.d.Tf);
D("X.matrix.translate", H.d.translate);
D("X.matrix.scale", H.d.scale);
D("X.matrix.rotate", H.d.rotate);
D("X.matrix.rotateX", H.d.Hd);
D("X.matrix.rotateY", H.d.Id);
D("X.matrix.rotateZ", H.d.Jd);
D("X.matrix.swapRows", H.d.Ji);
D("X.matrix.swapCols", H.d.Ii);

function Kc() { Q.call(this);
    this.c = "transform";
    this.ia = H.d.Oc() }
F(Kc, Q);
Kc.prototype.__defineGetter__("matrix", u("ia"));
Kc.prototype.__defineSetter__("matrix", function(a) {
    (a == r || !(a instanceof Float32Array)) && m(Error("Invalid matrix."));
    this.ia = a;
    this.n() });
w = Kc.prototype;
w.Hd = function(a) {
    (!y(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    H.d.Hd(this.ia, a * Math.PI / 180);
    this.n() };
w.Id = function(a) {
    (!y(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    H.d.Id(this.ia, a * Math.PI / 180);
    this.n() };
w.Jd = function(a) {
    (!y(a) || -360 > a || 360 < a) && m(Error("Invalid angle."));
    H.d.Jd(this.ia, a * Math.PI / 180);
    this.n() };
w.Li = function(a) { y(a) || m(Error("Invalid distance."));
    H.d.translate(this.ia, a, 0, 0);
    this.n() };
w.Mi = function(a) { y(a) || m(Error("Invalid distance."));
    H.d.translate(this.ia, 0, a, 0);
    this.n() };
w.Ni = function(a) { y(a) || m(Error("Invalid distance."));
    H.d.translate(this.ia, 0, 0, a);
    this.n() };

function Lc(a, b, c) { a.ia[b + 4 * c] *= -1;
    a.n() }
w.Zg = function() { Lc(this, 0, 0) };
w.$g = function() { Lc(this, 1, 1) };
w.ah = function() { Lc(this, 2, 2) };
w.n = function() { this.g = q };
D("X.transform", Kc);
D("X.transform.prototype.rotateX", Kc.prototype.Hd);
D("X.transform.prototype.rotateY", Kc.prototype.Id);
D("X.transform.prototype.rotateZ", Kc.prototype.Jd);
D("X.transform.prototype.translateX", Kc.prototype.Li);
D("X.transform.prototype.translateY", Kc.prototype.Mi);
D("X.transform.prototype.translateZ", Kc.prototype.Ni);
D("X.transform.prototype.flipX", Kc.prototype.Zg);
D("X.transform.prototype.flipY", Kc.prototype.$g);
D("X.transform.prototype.flipZ", Kc.prototype.ah);
D("X.transform.prototype.modified", Kc.prototype.n);

function Mc() { Q.call(this);
    this.c = "texture";
    this.va = this.jb = this.o = r;
    this.wb = this.xb = 0;
    Ea(this, new pc) }
F(Mc, Q);
D("X.texture", Mc);

function U(a, b) { Q.call(this);
    this.c = "triplets";
    this.Ob = Infinity;
    this.Lb = -Infinity;
    this.Pb = Infinity;
    this.Mb = -Infinity;
    this.Qb = Infinity;
    this.Nb = -Infinity;
    this.Vc = [0, 0, 0];
    this.ef = q;
    this.B = 0;
    this.L = new Float32Array(a);
    b != r && (this.L = b.L.subarray(0, b.L.length), this.B = this.L.length, this.Ob = b.Ob, this.Lb = b.Lb, this.Pb = b.Pb, this.Mb = b.Mb, this.Qb = b.Qb, this.Nb = b.Nb, this.Vc = b.Vc.slice(), this.ef = s) }
F(U, Q);
w = U.prototype;
w.add = function(a, b, c) { this.Ob = Math.min(this.Ob, a);
    this.Lb = Math.max(this.Lb, a);
    this.Pb = Math.min(this.Pb, b);
    this.Mb = Math.max(this.Mb, b);
    this.Qb = Math.min(this.Qb, c);
    this.Nb = Math.max(this.Nb, c);
    this.Vc = [(this.Ob + this.Lb) / 2, (this.Pb + this.Mb) / 2, (this.Qb + this.Nb) / 2];
    this.ef = s;
    this.g = q;
    this.L[this.B++] = a;
    this.L[this.B++] = b;
    this.L[this.B++] = c; return this.B / 3 };
w.fb = function() { if (this.B != this.L.length) { var a = new Float32Array(this.B);
        a.set(this.L.subarray(0, this.B));
        this.L = a } };
w.get = function(a) { a *= 3; return [this.L[a], this.L[a + 1], this.L[a + 2]] };
w.remove = function() { m(Error("Not implemented.")) };
w.clear = function() { this.L = new Float32Array(this.L.length);
    this.g = q };
U.prototype.__defineGetter__("count", function() { this.fb(); return this.L.length / 3 });
U.prototype.__defineGetter__("length", function() { this.fb(); return this.L.length });
D("X.triplets", U);
D("X.triplets.prototype.add", U.prototype.add);
D("X.triplets.prototype.resize", U.prototype.fb);
D("X.triplets.prototype.get", U.prototype.get);
D("X.triplets.prototype.remove", U.prototype.remove);
D("X.triplets.prototype.clear", U.prototype.clear);

function Nc() { this.ja = Oc;
    this.Wb = new Kc;
    this.Gb = [1, 1, 1];
    this.Vb = this.z = this.W = this.j = this.i = r;
    this.kc = [];
    this.Ja = q;
    this.jc = this.Ec = 1;
    this.fc = r;
    this.xc = s;
    this.Z = 1;
    this.K = 0 }
var Oc = "TRIANGLES";
Nc.prototype.__defineSetter__("type", function(a) { return this.ja = a });
Nc.prototype.__defineGetter__("type", u("ja"));
Nc.prototype.__defineGetter__("texture", function() { this.z || (this.z = new Mc); return this.z });
Nc.prototype.__defineGetter__("transform", u("Wb"));
Nc.prototype.__defineGetter__("points", u("i"));
Nc.prototype.__defineSetter__("points", ba("i"));
Nc.prototype.__defineGetter__("normals", u("j"));
Nc.prototype.__defineSetter__("normals", ba("j"));
Nc.prototype.__defineGetter__("colors", u("W"));
Nc.prototype.__defineSetter__("colors", ba("W"));
Nc.prototype.__defineGetter__("color", u("Gb"));
Nc.prototype.__defineSetter__("color", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid color.")); for (var b = this.e, c = b.length, d = 0, d = 0; d < c; d++) b[d].color = a;
    this.Gb = a;
    this.g = q });
Nc.prototype.__defineGetter__("opacity", u("Z"));
Nc.prototype.__defineSetter__("opacity", function(a) {
    (!y(a) || 1 < a || 0 > a) && m(Error("Invalid opacity.")); for (var b = this.e, c = b.length, d = 0, d = 0; d < c; d++) b[d].opacity = a;
    this.Z = a;
    this.g = q });
Nc.prototype.__defineGetter__("caption", u("fc"));
Nc.prototype.__defineSetter__("caption", function(a) { this.fc = a;
    this.g = q });
Nc.prototype.__defineGetter__("visible", u("Ja"));
Nc.prototype.__defineSetter__("visible", function(a) { for (var b = this.e, c = b.length, d = 0, d = 0; d < c; d++) b[d].visible = a;
    this.Ja = a;
    this.g = q });
Nc.prototype.__defineGetter__("pointsize", u("Ec"));
Nc.prototype.__defineSetter__("pointsize", function(a) { y(a) || m(Error("Invalid point size."));
    this.Ec = a;
    this.g = q });
Nc.prototype.__defineGetter__("magicmode", u("xc"));
Nc.prototype.__defineSetter__("magicmode", function(a) { "boolean" != typeof a && m(Error("Invalid magic mode setting."));
    this.xc = a;
    this.g = q });
Nc.prototype.__defineGetter__("linewidth", u("jc"));
Nc.prototype.__defineSetter__("linewidth", function(a) { y(a) || m(Error("Invalid line width."));
    this.jc = a;
    this.g = q });

function Pc() { this.Ia = Infinity;
    this.P = this.Fa = -Infinity;
    this.S = Infinity;
    this.sb = [0, 0, 0];
    this.qb = [1, 1, 1] }
Pc.prototype.__defineGetter__("lowerThreshold", u("P"));
Pc.prototype.__defineSetter__("lowerThreshold", ba("P"));
Pc.prototype.__defineGetter__("upperThreshold", u("S"));
Pc.prototype.__defineSetter__("upperThreshold", ba("S"));
Pc.prototype.__defineGetter__("min", u("Ia"));
Pc.prototype.__defineGetter__("max", u("Fa"));
Pc.prototype.__defineGetter__("minColor", u("sb"));
Pc.prototype.__defineSetter__("minColor", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid min. color."));
    this.sb = a });
Pc.prototype.__defineGetter__("maxColor", u("qb"));
Pc.prototype.__defineSetter__("maxColor", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid max. color."));
    this.qb = a });

function Qc() { Q.call(this);
    this.c = "scalars";
    this.sc = this.v = r;
    this.qf = q;
    this.Td = 0;
    Ea(this, new pc);
    Ea(this, new Pc);
    this.sb = [0, 1, 0];
    this.qb = [1, 0, 0] }
F(Qc, Q);
Qc.prototype.__defineGetter__("array", u("v"));
Qc.prototype.__defineSetter__("array", function(a) { this.sc = this.v = a;
    this.g = q });
Qc.prototype.__defineGetter__("interpolation", u("Td"));
Qc.prototype.__defineSetter__("interpolation", ba("Td"));
D("X.scalars", Qc);

function W(a) { Q.call(this);
    this.c = "object";
    this.e = [];
    this.u = this.$ = r;
    Ea(this, new Nc);
    a != r && this.Xb(a) }
F(W, Q);
W.prototype.Xb = function(a) {
    this.ja = a.ja;
    this.Wb = new Kc;
    this.Wb.ia = new Float32Array(a.Wb.ia);
    this.Gb = a.Gb.slice();
    a.i && (this.i = new U(a.i.length, a.i));
    a.j && (this.j = new U(a.j.length, a.j));
    a.W && (this.W = new U(a.W.length, a.W));
    this.z = a.z;
    this.Vb = a.Vb;
    a.o && (this.o = new oc((new String(a.o.dd)).toString()));
    this.Z = a.Z;
    this.e.length = 0;
    var b = a.e;
    if (b)
        for (var c = b.length, d = 0, d = 0; d < c; d++) this.e.push(new H[b[d].c](b[d]));
    this.Ja = a.Ja;
    this.Ec = a.Ec;
    this.jc = a.jc;
    a.fc && (this.fc = (new String(a.fc)).toString());
    this.xc =
        a.xc;
    this.kc = a.kc.slice();
    this.g = q
};
W.prototype.__defineGetter__("colortable", function() { this.$ || (this.$ = new vc); return this.$ });
W.prototype.__defineGetter__("scalars", function() { this.u || (this.u = new Qc); return this.u });
W.prototype.__defineGetter__("children", u("e"));
W.prototype.n = function() { var a = new Rc;
    a.Y = this;
    this.dispatchEvent(a) };

function Sc(a, b) {
    (a == r || b == r || !(a instanceof W) || !(b instanceof W)) && m(Error("Fatal: Two valid X.objects are required for comparison.")); return 1 == a.Z ? -1 : 1 == b.Z ? 1 : a.K != r && b.K != r && a.K > b.K ? -1 : 1 }
D("X.object", W);
D("X.object.prototype.modified", W.prototype.n);

function Tc() {}

function Uc(a) { for (var b = a.i.count, c = [], d = 0, d = 0; d < b; d += 3) { var e = a.i.get(d),
            f = a.i.get(d + 1),
            g = a.i.get(d + 2),
            h = a.j.get(d),
            l = a.j.get(d + 1),
            j = a.j.get(d + 2),
            k = a.Gb;
        a.W && 0 < a.W.length && (k = a.W.get(d)); var p = [];
        p.push(new cc(e, h));
        p.push(new cc(f, l));
        p.push(new cc(g, j));
        c.push(new ec(p, k)) } return mc(c) }

function Vc(a, b) {
    (b == r || !(b instanceof lc)) && m(Error("Invalid CSG object."));
    var c = new nc,
        d = [];
    Fb(b.A, function(a) { var b = [],
            g = a.Nd,
            b = Fb(a.hb, function(a) { a.color = g; return c.add(a) }); for (a = a = 2; a < b.length; a++) d.push([b[0], b[a - 1], b[a]]) }.bind(a));
    a.xg = Fb(c.unique(), function(a) { return [a.Aa.x(), a.Aa.y(), a.Aa.b()] });
    a.wg = Fb(c.unique(), function(a) { return [a.ba.x(), a.ba.y(), a.ba.b()] });
    a.vg = Fb(c.unique(), function(a) { return !a.color ? r : [a.color[0], a.color[1], a.color[2]] });
    a.i = new U(9 * d.length);
    a.j = new U(9 * d.length);
    a.W = new U(9 * d.length);
    Fb(d, function(a) { var b = a[0],
            c = a[1];
        a = a[2]; var d = this.xg,
            l = this.wg,
            j = this.vg;
        this.i.add(d[b][0], d[b][1], d[b][2]);
        this.i.add(d[c][0], d[c][1], d[c][2]);
        this.i.add(d[a][0], d[a][1], d[a][2]);
        this.j.add(l[b][0], l[b][1], l[b][2]);
        this.j.add(l[c][0], l[c][1], l[c][2]);
        this.j.add(l[a][0], l[a][1], l[a][2]);
        j[b] && this.W.add(j[b][0], j[b][1], j[b][2]);
        j[c] && this.W.add(j[c][0], j[c][1], j[c][2]);
        j[a] && this.W.add(j[a][0], j[a][1], j[a][2]) }.bind(a));
    0 == a.W.B && (a.W = r);
    a.ja = Oc
}
Tc.prototype.We = function(a) {
    (a == r || !(a instanceof lc) && !(a instanceof W)) && m(Error("Invalid object.")); var b = a;
    a instanceof W && (b = Uc(b));
    a = new W;
    Ea(a, new Tc);
    Vc(a, Uc(this).We(b)); return a };
Tc.prototype.la = function(a) {
    (a == r || !(a instanceof lc) && !(a instanceof W)) && m(Error("Invalid object.")); var b = a;
    a instanceof W && (b = Uc(b));
    a = new W;
    Ea(a, new Tc);
    Vc(a, Uc(this).la(b)); return a };
Tc.prototype.Ae = function(a) {
    (a == r || !(a instanceof lc) && !(a instanceof W)) && m(Error("Invalid object.")); var b = a;
    a instanceof W && (b = Uc(b));
    a = new W;
    Ea(a, new Tc);
    Vc(a, Uc(this).Ae(b)); return a };
Tc.prototype.inverse = function() { var a = new W;
    Ea(a, new Tc);
    Vc(a, Uc(this).inverse()); return a };
D("X.constructable", Tc);
D("X.constructable.prototype.intersect", Tc.prototype.Ae);
D("X.constructable.prototype.inverse", Tc.prototype.inverse);
D("X.constructable.prototype.subtract", Tc.prototype.la);
D("X.constructable.prototype.union", Tc.prototype.We);

function Wc(a) { ub.call(this, a);
    this.c = "event" }
F(Wc, ub);
var Xc = ac("pan"),
    Yc = ac("rotate"),
    Zc = ac("zoom"),
    $c = ac("scroll");
ac("render");
var ad = ac("resetview"),
    bd = ac("windowlevel"),
    cd = ac("modified"),
    dd = ac("progress"),
    ed = ac("hover"),
    fd = ac("hover_end");

function gd() { Wc.call(this, bd);
    this.Zd = this.le = 0 }
F(gd, Wc);

function hd() { Wc.call(this, Xc);
    this.K = new H.f(0, 0, 0) }
F(hd, Wc);

function id() { Wc.call(this, Yc);
    this.K = new H.f(0, 0, 0) }
F(id, Wc);

function jd() { Wc.call(this, Zc);
    this.Ha = this.Qa = s }
F(jd, Wc);

function kd() { Wc.call(this, $c);
    this.I = s }
F(kd, Wc);

function ld() { Wc.call(this, ed);
    this.nd = this.md = 0 }
F(ld, Wc);

function md() { Wc.call(this, fd) }
F(md, Wc);

function nd() { Wc.call(this, ad) }
F(nd, Wc);

function Rc() { Wc.call(this, cd);
    this.q = this.Y = r }
F(Rc, Wc);

function od() { Wc.call(this, dd);
    this.sf = 0 }
F(od, Wc);

function pd() { Q.call(this);
    this.c = "parser";
    this.X = r;
    this.B = 0;
    this.Ag = 0 < (new Int8Array((new Int16Array([1])).buffer))[0];
    this.$c = q;
    this.Hj = -Infinity;
    this.Gj = Infinity }
F(pd, Q);
pd.prototype.parse = function() { m(Error("The function parse() should be overloaded.")) };

function qd(a) { for (var b = Infinity, c = -Infinity, d = a.length, e = 0, e = 0; e < d; e++) var f = a[e],
        b = Math.min(b, f),
        c = Math.max(c, f); return [b, c] }

function rd(a, b, c) { b === n && (b = 0);
    c === n && (c = a.length); for (var d = "", e = 0, e = b; e < c; ++e) d += String.fromCharCode(a[e]); return d }

function Y(a, b, c) { c != r || (c = 1); var d = 1,
        e = Uint8Array; switch (b) {
        case "schar":
            e = Int8Array; break;
        case "ushort":
            e = Uint16Array;
            d = 2; break;
        case "sshort":
            e = Int16Array;
            d = 2; break;
        case "uint":
            e = Uint32Array;
            d = 4; break;
        case "sint":
            e = Int32Array;
            d = 4; break;
        case "float":
            e = Float32Array, d = 4 }
    b = new e(a.X.slice(a.B, a.B += c * d)); if (a.Ag != a.$c) { a = b;
        b = new Uint8Array(a.buffer, a.byteOffset, a.byteLength); for (e = 0; e < a.byteLength; e += d)
            for (var f = e + d - 1, g = e; f > g; f--, g++) { var h = b[g];
                b[g] = b[f];
                b[f] = h }
        b = a } return 1 == c ? b[0] : b }

function sd(a, b, c) {
    H.Ea(a.c + ".reslice");
    var d = b.aa,
        e = c.max,
        f = c.data,
        g = d[2],
        h = d[1],
        d = d[0],
        l = b.m != r,
        j = h * d,
        k = Array(g),
        p = Array(g),
        t = 0,
        v = r;
    b.$ && (v = b.$.pb);
    for (var z = 0, A = 0, C = 0, E = 0, x = 4 * j, z = 0; z < g; z++) {
        k[z] = Array(h);
        p[z] = Array(h);
        for (var B = f.subarray(z * j, (z + 1) * j), G = new Uint8Array(x), A = E = 0; A < h; A++) {
            k[z][A] = new c.data.constructor(d);
            p[z][A] = new c.data.constructor(d);
            for (C = 0; C < d; C++) {
                var t = B[E],
                    I = 0,
                    N = 0,
                    J = 0,
                    K = 0;
                v ? (K = v.get(Math.floor(t)), K || (I = v.bb(), K = I[I.length - 1]), I = 255 * K[1], N = 255 * K[2], J = 255 * K[3], K = 255 * K[4]) :
                    (I = N = J = 255 * (t / e), K = 255);
                var P = 4 * E;
                G[P] = I;
                G[++P] = N;
                G[++P] = J;
                G[++P] = K;
                k[z][A][C] = 255 * (t / e);
                p[z][A][C] = t;
                E++
            }
        }
        t = new Mc;
        t.va = G;
        t.xb = d;
        t.wb = h;
        B = b.Za.e[z];
        B.z = t;
        l && (B.m = b.m.Za.e[z].z)
    }
    b.ee && (d != h ? l ? b.$ ? (td(g, d, h, p, b.$, b.R, b.m.R, q), td(g, h, d, p, b.$, b.Q, b.m.Q, s)) : (ud(g, d, h, k, b.R, b.m.R, q), ud(g, h, d, k, b.Q, b.m.Q, s)) : b.$ ? (td(g, d, h, p, b.$, b.R, r, q), td(g, h, d, p, b.$, b.Q, r, s)) : (ud(g, d, h, k, b.R, r, q), ud(g, h, d, k, b.Q, r, s)) : l ? b.$ ? vd(g, d, h, k, b.$, b.Q, b.m.Q, b.R, b.m.R) : wd(g, d, h, k, b.Q, b.m.Q, b.R, b.m.R) : b.$ ? vd(g, d, h, p, b.$, b.Q, r, b.R,
        r) : wd(g, d, h, k, b.Q, r, b.R, r));
    H.qa(a.c + ".reslice");
    return p
}

function ud(a, b, c, d, e, f, g) { for (var h = 4 * a * b, l = 0, l = 0; l < c; l++) { for (var j = new Uint8Array(h), k = 0, p = 0, k = 0; k < a; k++)
            for (var t = 0, v = d[k], t = 0; t < b; t++) { var z, A = z = g ? v[l][t] : v[t][l],
                    C = z,
                    E = 4 * p;
                j[E] = z;
                j[++E] = A;
                j[++E] = C;
                j[++E] = 255;
                p++ }
        k = new Mc;
        k.va = j;
        k.xb = b;
        k.wb = a;
        j = e.e[l];
        j.z = k;
        f && (j.m = f.e[l].z) } }

function td(a, b, c, d, e, f, g, h) { e = e.pb; for (var l = 4 * a * b, j = 0, j = 0; j < c; j++) { for (var k = new Uint8Array(l), p = 0, t = 0, p = 0; p < a; p++)
            for (var v = d[p], z = 0, z = 0; z < b; z++) { var A = e.get(Math.floor(h ? v[j][z] : v[z][j]));
                A || (A = e.bb(), A = A[A.length - 1]); var C = 255 * A[2],
                    E = 255 * A[3],
                    x = 255 * A[4],
                    B = 4 * t;
                k[B] = 255 * A[1];
                k[++B] = C;
                k[++B] = E;
                k[++B] = x;
                t++ }
        p = new Mc;
        p.va = k;
        p.xb = b;
        p.wb = a;
        k = f.e[j];
        k.z = p;
        g && (k.m = g.e[j].z) } }

function wd(a, b, c, d, e, f, g, h) { for (var l = 4 * a * b, j = 0, j = 0; j < c; j++) { for (var k = new Uint8Array(l), p = new Uint8Array(l), t = 0, v = 0, v = 0; v < a; v++)
            for (var z = d[v], A = 0, A = 0; A < b; A++) { var C = z[A][j],
                    E = C,
                    x = C,
                    B = 4 * t;
                k[B] = C;
                k[++B] = E;
                k[++B] = x;
                k[++B] = 255;
                x = E = C = B = z[j][A];
                B = 4 * t;
                p[B] = C;
                p[++B] = E;
                p[++B] = x;
                p[++B] = 255;
                t++ }
        t = new Mc;
        t.va = k;
        t.xb = b;
        t.wb = a;
        k = e.e[j];
        k.z = t;
        f && (k.m = f.e[j].z);
        k = new Mc;
        k.va = p;
        k.xb = b;
        k.wb = a;
        p = g.e[j];
        p.z = k;
        h && (p.m = h.e[j].z) } }

function vd(a, b, c, d, e, f, g, h, l) {
    e = e.pb;
    for (var j = 4 * a * b, k = 0, k = 0; k < c; k++) {
        for (var p = new Uint8Array(j), t = new Uint8Array(j), v = 0, z = 0, z = 0; z < a; z++)
            for (var A = d[z], C = 0, C = 0; C < b; C++) { var E = e.get(Math.floor(A[C][k])); if (!E) var x = e.bb(),
                    E = x[x.length - 1]; var B = 255 * E[2],
                    G = 255 * E[3],
                    I = 255 * E[4],
                    x = 4 * v;
                p[x] = 255 * E[1];
                p[++x] = B;
                p[++x] = G;
                p[++x] = I;
                x = e.get(Math.floor(A[k][C]));
                x || (x = e.bb(), x = x[x.length - 1]);
                E = 255 * x[1];
                B = 255 * x[2];
                G = 255 * x[3];
                I = 255 * x[4];
                x = 4 * v;
                t[x] = E;
                t[++x] = B;
                t[++x] = G;
                t[++x] = I;
                v++ }
        v = new Mc;
        v.va = p;
        v.xb = b;
        v.wb = a;
        p =
            f.e[k];
        p.z = v;
        g && (p.m = g.e[k].z);
        p = new Mc;
        p.va = t;
        p.xb = b;
        p.wb = a;
        t = h.e[k];
        t.z = p;
        l && (t.m = l.e[k].z)
    }
};

function xd() { pd.call(this);
    this.c = "parserLBL" }
F(xd, pd);
xd.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    var d = b.kc,
        e = d.length;
    0 == e && m(Error("No _pointIndices defined on the X.object."));
    this.X = c;
    var f = [],
        g = Y(this, "uchar", c.byteLength),
        h = g.length,
        l = s,
        j = 0;
    for (c = 1; c < h; c++) 10 == g[c - 1] ? (j = c, l = q) : l && 32 == g[c] && (f.push(parseInt(rd(g, j, c), 10)), l = s);
    g = b.u.v ? b.u.v : new Float32Array(e);
    h = f.length;
    for (c = 0; c < h; c++) g[f[c]] = 1;
    f = new Float32Array(3 * e);
    for (c = h = 0; c < e; c++) l = d[c], l > e && m(Error("Could not find scalar for vertex.")), l = g[l], f[h++] = l, f[h++] = l, f[h++] = l;
    b.u.v =
        g;
    b.u.sc = f;
    b.u.g = q;
    H.qa(this.c + ".parse");
    d = new Rc;
    d.Y = b;
    d.q = a;
    this.dispatchEvent(d)
};
D("X.parserLBL", xd);
D("X.parserLBL.prototype.parse", xd.prototype.parse);

function yd(a, b) { this.x = ga(a) ? a : 0;
    this.y = ga(b) ? b : 0 }
w = yd.prototype;
w.h = function() { return new yd(this.x, this.y) };

function zd(a, b) { return new yd(a.x - b.x, a.y - b.y) }
w.floor = function() { this.x = Math.floor(this.x);
    this.y = Math.floor(this.y); return this };
w.round = function() { this.x = Math.round(this.x);
    this.y = Math.round(this.y); return this };
w.translate = function(a, b) { a instanceof yd ? (this.x += a.x, this.y += a.y) : (this.x += a, y(b) && (this.y += b)); return this };
w.scale = function(a, b) { var c = y(b) ? b : a;
    this.x *= a;
    this.y *= c; return this };

function Ad(a, b, c, d) { this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d }
w = Ad.prototype;
w.h = function() { return new Ad(this.top, this.right, this.bottom, this.left) };
w.contains = function(a) { return !this || !a ? s : a instanceof Ad ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom };
w.floor = function() { this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left); return this };
w.round = function() { this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left); return this };
w.translate = function(a, b) { a instanceof yd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, y(b) && (this.top += b, this.bottom += b)); return this };
w.scale = function(a, b) { var c = y(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c; return this };

function Bd(a, b) { this.width = a;
    this.height = b }
Bd.prototype.h = function() { return new Bd(this.width, this.height) };
Bd.prototype.floor = function() { this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
Bd.prototype.round = function() { this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
Bd.prototype.scale = function(a, b) { var c = y(b) ? b : a;
    this.width *= a;
    this.height *= c; return this };

function Cd(a, b, c, d) { this.left = a;
    this.top = b;
    this.width = c;
    this.height = d }
w = Cd.prototype;
w.h = function() { return new Cd(this.left, this.top, this.width, this.height) };
w.Of = function(a) { var b = Math.max(this.left, a.left),
        c = Math.min(this.left + this.width, a.left + a.width); if (b <= c) { var d = Math.max(this.top, a.top);
        a = Math.min(this.top + this.height, a.top + a.height); if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, q } return s };
w.contains = function(a) { return a instanceof Cd ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height };
w.floor = function() { this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height); return this };
w.round = function() { this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height); return this };
w.translate = function(a, b) { a instanceof yd ? (this.left += a.x, this.top += a.y) : (this.left += a, y(b) && (this.top += b)); return this };
w.scale = function(a, b) { var c = y(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c; return this };
var Dd;

function Ed(a, b) { var c;
    c = a.className;
    c = la(c) && c.match(/\S+/g) || []; for (var d = Ib(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++) 0 <= Db(f, d[g]) || f.push(d[g]);
    a.className = c.join(" "); return c.length == e };
var Fd = !L || L && 9 <= rb;
!bb && !L || L && L && 9 <= rb || bb && pb("1.9.1");
L && pb("9");

function Gd(a) { return a ? new Hd(Id(a)) : Dd || (Dd = new Hd) }

function Jd(a) { return la(a) ? document.getElementById(a) : a }
var Kd = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

function Ld(a, b, c) { return Md(document, arguments) }

function Md(a, b) {
    var c = b[0],
        d = b[1];
    if (!Fd && d && (d.name || d.type)) { c = ["<", c];
        d.name && c.push(' name="', Ja(d.name), '"'); if (d.type) { c.push(' type="', Ja(d.type), '"'); var e = {};
            zb(e, d);
            delete e.type;
            d = e }
        c.push(">");
        c = c.join("") }
    var f = a.createElement(c);
    if (d)
        if (la(d)) f.className = d;
        else if (ha(d)) Ed.apply(r, [f].concat(d));
    else {
        var c = function(a, b) {
                "style" == b ? f.style.cssText = a : "class" == b ? f.className = a : "for" == b ? f.htmlFor = a : b in Kd ? f.setAttribute(Kd[b], a) : 0 == b.lastIndexOf("aria-", 0) || 0 == b.lastIndexOf("data-", 0) ?
                    f.setAttribute(b, a) : f[b] = a
            },
            g;
        for (g in d) c.call(n, d[g], g)
    }
    if (2 < b.length) { g = function(b) { b && f.appendChild(la(b) ? a.createTextNode(b) : b) }; for (d = 2; d < b.length; d++)
            if (e = b[d], ja(e) && !(na(e) && 0 < e.nodeType)) { var c = Eb,
                    h;
                a: { if ((h = e) && "number" == typeof h.length) { if (na(h)) { h = "function" == typeof h.item || "string" == typeof h.item; break a } if (ma(h)) { h = "function" == typeof h.item; break a } }
                    h = s }
                if (h)
                    if (h = e.length, 0 < h) { for (var l = Array(h), j = 0; j < h; j++) l[j] = e[j];
                        e = l } else e = [];
                c(e, g) } else g(e) }
    return f
}

function Nd(a) { a && a.parentNode && a.parentNode.removeChild(a) }

function Od(a) { for (; a && 1 != a.nodeType;) a = a.nextSibling; return a }

function Pd(a, b) { if (a.contains && 1 == b.nodeType) return a == b || a.contains(b); if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16); for (; b && a != b;) b = b.parentNode; return b == a }

function Id(a) { return 9 == a.nodeType ? a : a.ownerDocument || a.document }

function Hd(a) { this.N = a || ca.document || document }
w = Hd.prototype;
w.vd = Gd;
w.l = function(a) { return la(a) ? this.N.getElementById(a) : a };
w.pg = Hd.prototype.l;
w.lc = function(a, b, c) { return Md(this.N, arguments) };
w.createElement = function(a) { return this.N.createElement(a) };
w.createTextNode = function(a) { return this.N.createTextNode(String(a)) };

function Qd(a) { return "CSS1Compat" == a.N.compatMode }

function Rd(a) { var b = a.N;
    a = !db && "CSS1Compat" == b.compatMode ? b.documentElement : b.body;
    b = b.parentWindow || b.defaultView; return new yd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop) }
w.appendChild = function(a, b) { a.appendChild(b) };
w.contains = Pd;

function Sd(a, b) { var c = Id(a); return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, r)) ? c[b] || c.getPropertyValue(b) || "" : "" }

function Td(a, b) { return Sd(a, b) || (a.currentStyle ? a.currentStyle[b] : r) || a.style && a.style[b] }

function Ud(a) { a = a ? Id(a) : document; return L && !(L && 9 <= rb) && !Qd(Gd(a)) ? a.body : a.documentElement }

function Vd(a) { var b = a.getBoundingClientRect();
    L && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop); return b }

function Wd(a) { if (L && !(L && 8 <= rb)) return a.offsetParent; var b = Id(a),
        c = Td(a, "position"),
        d = "fixed" == c || "absolute" == c; for (a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = Td(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return r }

function Xd(a) {
    for (var b = new Ad(0, Infinity, Infinity, 0), c = Gd(a), d = c.N.body, e = c.N.documentElement, f = !db && "CSS1Compat" == c.N.compatMode ? c.N.documentElement : c.N.body; a = Wd(a);)
        if ((!L || 0 != a.clientWidth) && (!db || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != Td(a, "overflow")) {
            var g = Yd(a),
                h;
            h = a;
            if (bb && !pb("1.9")) { var l = parseFloat(Sd(h, "borderLeftWidth")); if (Zd(h)) var j = h.offsetWidth - h.clientWidth - l - parseFloat(Sd(h, "borderRightWidth")),
                    l = l + j;
                h = new yd(l, parseFloat(Sd(h, "borderTopWidth"))) } else h = new yd(h.clientLeft,
                h.clientTop);
            g.x += h.x;
            g.y += h.y;
            b.top = Math.max(b.top, g.y);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = (c.N.parentWindow || c.N.defaultView || window).document;
    c = "CSS1Compat" == c.compatMode ? c.documentElement : c.body;
    c = new Bd(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left &&
        b.bottom > b.top && b.right > b.left ? b : r
}

function Yd(a) {
    var b, c = Id(a),
        d = Td(a, "position"),
        e = bb && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new yd(0, 0),
        g = Ud(c);
    if (a == g) return f;
    if (a.getBoundingClientRect) b = Vd(a), a = Rd(Gd(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (db && "fixed" == Td(b, "position")) { f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop; break }
            b = b.offsetParent
        } while (b && b != a);
        if (ab || db && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
            (b = Wd(b)) && b != c.body && b != g;)
            if (f.x -= b.scrollLeft, !ab || "TR" != b.tagName) f.y -= b.scrollTop
    }
    return f
}

function $d(a, b) { "number" == typeof a && (a = (b ? Math.round(a) : a) + "px"); return a }

function ae(a) { if ("none" != Td(a, "display")) return be(a); var b = a.style,
        c = b.display,
        d = b.visibility,
        e = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = be(a);
    b.display = c;
    b.position = e;
    b.visibility = d; return a }

function be(a) { var b = a.offsetWidth,
        c = a.offsetHeight,
        d = db && !b && !c; return (!ga(b) || d) && a.getBoundingClientRect ? (a = Vd(a), new Bd(a.right - a.left, a.bottom - a.top)) : new Bd(b, c) }

function ce(a, b) { a.style.display = b ? "" : "none" }

function Zd(a) { return "rtl" == Td(a, "direction") }

function de(a, b) { if (/^\d+px?$/.test(b)) return parseInt(b, 10); var c = a.style.left,
        d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b; var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d; return e }

function ee(a, b) { var c = a.currentStyle ? a.currentStyle[b] : r; return c ? de(a, c) : 0 }
var fe = { thin: 2, medium: 4, thick: 6 };

function ge(a, b) { if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : r)) return 0; var c = a.currentStyle ? a.currentStyle[b + "Width"] : r; return c in fe ? fe[c] : de(a, c) }
var he = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;

function ie(a, b) { sb.call(this);
    this.r = a; var c = na(this.r) && 1 == this.r.nodeType ? this.r : this.r ? this.r.body : r;
    this.wh = !!c && Zd(c);
    this.Nj = O(this.r, bb ? "DOMMouseScroll" : "mousewheel", this, b) }
F(ie, bc);
ie.prototype.handleEvent = function(a) { var b = 0,
        c = 0,
        d = 0;
    a = a.Ma; if ("mousewheel" == a.type) { c = 1; if (L || db && (Va || pb("532.0"))) c = 40;
        d = je(-a.wheelDelta, c);
        ga(a.wheelDeltaX) ? (b = je(-a.wheelDeltaX, c), c = je(-a.wheelDeltaY, c)) : c = d } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), ga(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    y(this.Uf) && (b = Math.min(Math.max(b, -this.Uf), this.Uf));
    y(this.Vf) && (c = Math.min(Math.max(c, -this.Vf), this.Vf));
    this.wh && (b = -b);
    b = new ke(d, a, b, c);
    this.dispatchEvent(b) };

function je(a, b) { return db && (Ta || Wa) && 0 != a % b ? a : a / b }

function ke(a, b, c, d) { b && this.ea(b, n);
    this.type = "mousewheel";
    this.detail = a;
    this.Kj = c;
    this.nc = d }
F(ke, Kb);
L || db && pb("525");

function le(a) {
    (a == r || !(a instanceof Element)) && m(Error("Could not add interactor to the given element."));
    Q.call(this);
    this.c = "interactor";
    this.ra = a;
    this.ae = this.jf = this.hf = this.kf = this.gf = this.lf = r;
    this.$d = q;
    this.yb = this.rb = this.Xa = s;
    this.cd = [0, 0];
    this.Vd = new H.f(0, 0, 0);
    this.wc = new H.f(0, 0, 0);
    this.Qf = 0;
    this.rf = this.Zc = r;
    this.F = { MOUSEWHEEL_ENABLED: q, MOUSECLICKS_ENABLED: q, KEYBOARD_ENABLED: q, HOVERING_ENABLED: q, CONTEXTMENU_ENABLED: s, TOUCH_ENABLED: q, TOUCH_BOUNCING_ENABLED: s } }
F(le, Q);
le.prototype.__defineGetter__("config", u("F"));
le.prototype.__defineGetter__("leftButtonDown", u("Xa"));
le.prototype.__defineGetter__("middleButtonDown", u("rb"));
le.prototype.__defineGetter__("rightButtonDown", u("yb"));
le.prototype.ea = function() {
    this.F.MOUSEWHEEL_ENABLED ? (this.ae = new ie(this.ra), this.lf = O(this.ae, "mousewheel", this.Qc.bind(this))) : (Wb(this.lf), this.ae = r);
    this.F.MOUSECLICKS_ENABLED ? (this.gf = O(this.ra, "mousedown", this.Jh.bind(this)), this.kf = O(this.ra, "mouseup", this.Oh.bind(this))) : (Wb(this.gf), Wb(this.kf));
    this.ra.oncontextmenu = this.F.CONTEXTMENU_ENABLED ? r : function() { return s };
    window.onkeydown = this.F.KEYBOARD_ENABLED ? this.$f.bind(this) : r;
    this.F.TOUCH_ENABLED ? (this.F.TOUCH_BOUNCING_ENABLED || document.body.addEventListener("touchmove",
        function(a) { a.preventDefault() }, s), this.Eg = O(this.ra, "touchstart", this.bi.bind(this)), this.Dg = O(this.ra, "touchmove", this.$h.bind(this)), this.Cg = O(this.ra, "touchend", this.Wh.bind(this))) : (Wb(this.Eg), Wb(this.Dg), Wb(this.Cg));
    Wb(this.hf);
    Wb(this.jf);
    this.hf = O(this.ra, "mousemove", this.Lh.bind(this));
    this.jf = O(this.ra, "mouseout", this.Mh.bind(this))
};
le.prototype.Jh = function(a) { 0 == a.button ? this.Xa = q : 1 == a.button ? this.rb = q : 2 == a.button && (this.yb = q);
    eval("this.onMouseDown(" + this.Xa + "," + this.rb + "," + this.yb + ")");
    me(this);
    a.preventDefault() };
le.prototype.Ih = aa();
le.prototype.Oh = function(a) { 0 == a.button ? this.Xa = s : 1 == a.button ? this.rb = s : 2 == a.button && (this.yb = s);
    eval("this.onMouseUp(" + this.Xa + "," + this.rb + "," + this.yb + ")");
    me(this);
    a.preventDefault() };
le.prototype.__defineGetter__("mousePosition", u("cd"));
w = le.prototype;
w.Nh = aa();
w.Mh = function(a) { this.$d = s;
    this.F.KEYBOARD_ENABLED && (window.onkeydown = r);
    this.yb = this.rb = this.Xa = s;
    me(this);
    this.Vd = new H.f(0, 0, 0);
    a.preventDefault() };
w.Kh = aa();
w.bi = function(a) { a.preventDefault();
    a.ea(a.Ma.targetTouches[0], a.currentTarget);
    eval("this.onTouchStart(" + a.clientX + "," + a.clientY + ")");
    this.wc = new H.f(a.clientX, a.clientY, 0);
    this.rf = setTimeout(this.Yh.bind(this, a), 500) };
w.ai = aa();
w.Yh = function(a) { eval("this.onTouchHover(" + a.clientX + "," + a.clientY + ")");
    a = new jd;
    a.Qa = q;
    a.Ha = this instanceof ne;
    this.dispatchEvent(a);
    this.jd = q };
w.Xh = aa();

function oe(a) { clearTimeout(a.rf); if (a.jd) { var b = new jd;
        b.Qa = s;
        b.Ha = a instanceof ne;
        a.dispatchEvent(b) }
    a.jd = s }
w.Wh = function(a) { a.preventDefault();
    eval("this.onTouchEnd()");
    oe(this) };
w.Vh = aa();
w.$h = function(a) {
    a.preventDefault();
    this.jd || oe(this);
    this.touchmoveEvent = a = a.Ma;
    eval("this.onTouchMove(this['touchmoveEvent'])");
    var b = a.targetTouches;
    if (1 == b.length) {
        a = b[0];
        var c = [a.clientX, a.clientY];
        a = new H.f(c[0], c[1], 0);
        var b = c[0] > 3 * this.ra.clientWidth / 4,
            d = c[0] < this.ra.clientWidth / 4,
            e = c[1] < this.ra.clientHeight / 4,
            c = c[1] > 3 * this.ra.clientHeight / 4,
            c = !b && !d && !e && !c,
            e = this.wc.la(a);
        this.wc = a.h();
        if (this.jd) a = new hd, 5 < e.x ? e.x = 1 : -5 > e.x && (e.x = -1), 5 < e.y ? e.y = 1 : -5 > e.y && (e.y = -1), a.K = e, this.dispatchEvent(a);
        else if (this instanceof pe && (b || d)) a = new kd, a.I = 0 > e.y, this.dispatchEvent(a);
        else if (this instanceof ne || c) e.scale(3), a = new id, a.K = e, this.dispatchEvent(a)
    } else 2 == b.length && (a = b[0], b = b[1], a = [a.clientX, a.clientY], b = [b.clientX, b.clientY], a = new H.f(a[0], a[1], 0), b = new H.f(b[0], b[1], 0), e = xc(a, b), b = e - this.Qf, this.Qf = e, this.wc.la(a), this.wc = a.h(), 10 < Math.abs(b) && (a = new jd, a.Qa = 0 < b, a.Ha = this instanceof ne, this.dispatchEvent(a)))
};
w.Zh = aa();
w.Lh = function(a) {
    this.mousemoveEvent = a;
    eval("this.onMouseMove(this['mousemoveEvent'])");
    this.$d = q;
    this.F.KEYBOARD_ENABLED && window.onkeydown == r && (window.onkeydown = this.$f.bind(this));
    a.preventDefault();
    var b = a.shiftKey;
    this.cd = [a.offsetX, a.offsetY];
    var c = new H.f(this.cd[0], this.cd[1], 0);
    a = this.Vd.la(c);
    this.Vd = c.h();
    this.F.HOVERING_ENABLED && ((0 < Math.abs(a.x) || 0 < Math.abs(a.y) || this.rb || this.Xa || this.yb) && me(this), this.Zc = setTimeout(function() {
        me(this);
        var a = new ld;
        a.md = c.x;
        a.nd = c.y;
        this.dispatchEvent(a);
        this.Zc = r
    }.bind(this), 300));
    2 > Math.abs(a.x) && (a.x = 0);
    2 > Math.abs(a.y) && (a.y = 0);
    0 != a.eb() && (this.Xa && !b ? (b = new id, a.scale(3), b.K = a, this.dispatchEvent(b)) : this.rb || this.Xa && b ? (b = new hd, 5 < a.x ? a.x = 5 : -5 > a.x && (a.x = -5), 5 < a.y ? a.y = 5 : -5 > a.y && (a.y = -5), b.K = a, this.dispatchEvent(b)) : this.yb && (b = new jd, b.Qa = 0 < a.y, b.Ha = s, this.dispatchEvent(b)))
};

function me(a) { a.Zc && clearTimeout(a.Zc);
    a.dispatchEvent(new md) }
w.Ph = aa();
w.Qc = function(a) { this.mouseWheelEvent = a;
    eval("this.onMouseWheel(this['mouseWheelEvent'])");
    me(this);
    a.preventDefault() };
w.Gh = aa();
w.$f = function(a) {
    if (this.$d) {
        this.keyEvent = a;
        eval("this.onKey(this['keyEvent'])");
        me(this);
        var b = a.altKey,
            c = a.ctrlKey,
            d = a.metaKey,
            e = a.shiftKey,
            f = a.keyCode;
        82 == f && !b && !c && !d && !e ? (a.preventDefault(), a = new nd, this.dispatchEvent(a)) : 37 <= f && 40 >= f && (a.preventDefault(), e ? a = new hd : b ? a = new jd : (a = new id, this instanceof pe && (a = new kd)), a && (c = new H.f(0, 0, 0), 37 == f ? (c.x = 5, a.I = s, b && (a.I = q, a.Qa = q, a.Ha = s)) : 39 == f ? (c.x = -5, a.I = q, b && (a.Qa = s, a.Ha = s)) : 38 == f ? (c.y = 5, a.I = q, b && (a.Qa = q, a.Ha = q)) : 40 == f && (c.y = -5, a.I = s, b && (a.Qa =
            s, a.Ha = q)), a.K = c, this.dispatchEvent(a)))
    }
};
D("X.interactor", le);
D("X.interactor.prototype.init", le.prototype.ea);
D("X.interactor.prototype.onMouseDown", le.prototype.Ih);
D("X.interactor.prototype.onMouseUp", le.prototype.Nh);
D("X.interactor.prototype.onMouseMove", le.prototype.Kh);
D("X.interactor.prototype.onMouseWheel", le.prototype.Ph);
D("X.interactor.prototype.onKey", le.prototype.Gh);
D("X.interactor.prototype.onTouchStart", le.prototype.ai);
D("X.interactor.prototype.onTouchMove", le.prototype.Zh);
D("X.interactor.prototype.onTouchEnd", le.prototype.Vh);
D("X.interactor.prototype.onTouchHover", le.prototype.Xh);

function pe(a) { le.call(this, a);
    this.c = "interactor2D" }
F(pe, le);
pe.prototype.Qc = function(a) { pe.s.Qc.call(this, a); var b = new kd;
    a.nc == r && (a.nc = 0);
    b.I = 0 > a.nc;
    this.dispatchEvent(b) };

function qe(a) { W.call(this);
    this.c = "slice";
    this.k = [0, 0, 0];
    this.hc = [0, 0, 1];
    this.I = [0, 1, 0];
    this.G = this.M = 10;
    this.Vb = [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
    this.m = this.ab = r;
    this.Pa = q;
    this.ec = [1, 1, 1];
    a != r && this.Xb(a) }
F(qe, W);
qe.prototype.Xb = function(a) { this.k = a.k.slice();
    this.hc = a.hc.slice();
    this.I = a.I.slice();
    this.M = a.M;
    this.G = a.G;
    this.ab = a.ab;
    this.m = a.m;
    this.Pa = a.Pa;
    this.ec = a.ec;
    this.zg = a.zg;
    qe.s.Xb.call(this, a) };
qe.prototype.mc = function() {
    var a = new S(this.hc[0], this.hc[1], this.hc[2]),
        b = new S(this.I[0], this.I[1], this.I[2]),
        c = zc(b, a),
        d = new S(this.k[0], this.k[1], this.k[2]),
        e = new S(1, 1, 1);
    1 == a.x ? (e = new S(this.k[0], this.G / 2, this.M / 2), this.Vb = [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]) : 1 == a.y ? (e = new S(this.M / 2, this.k[1], this.G / 2), this.Vb = [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1]) : 1 == a.b && (e = new S(this.M / 2, this.G / 2, this.k[2]));
    var f = yc(c.h().D(), b.h().D()),
        f = new S(f.x * e.x, f.y * e.y, f.b * e.b);
    f.add(d);
    var g = yc(c.h().D(), b),
        g = new S(g.x * e.x, g.y * e.y,
            g.b * e.b);
    g.add(d);
    var h = yc(c, b.h().D()),
        h = new S(h.x * e.x, h.y * e.y, h.b * e.b);
    h.add(d);
    var l = h,
        b = yc(c, b),
        b = new S(b.x * e.x, b.y * e.y, b.b * e.b);
    b.add(d);
    d = g;
    this.i = new U(18);
    this.j = new U(18);
    this.i.add(f.x, f.y, f.b);
    this.i.add(g.x, g.y, g.b);
    this.i.add(h.x, h.y, h.b);
    this.i.add(l.x, l.y, l.b);
    this.i.add(b.x, b.y, b.b);
    this.i.add(d.x, d.y, d.b);
    this.j.add(a.x, a.y, a.b);
    this.j.add(a.x, a.y, a.b);
    this.j.add(a.x, a.y, a.b);
    this.j.add(a.x, a.y, a.b);
    this.j.add(a.x, a.y, a.b);
    this.j.add(a.x, a.y, a.b);
    this.Pa && (a = new W, a.i = new U(24), a.j =
        new U(24), a.i.add(f.x, f.y, f.b), a.i.add(g.x, g.y, g.b), a.i.add(g.x, g.y, g.b), a.i.add(b.x, b.y, b.b), a.i.add(b.x, b.y, b.b), a.i.add(h.x, h.y, h.b), a.i.add(h.x, h.y, h.b), a.i.add(f.x, f.y, f.b), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.j.add(0, 0, 0), a.Gb = [this.ec[0], this.ec[1], this.ec[2]], a.ja = "LINES", a.jc = 2, this.e.push(a))
};
D("X.slice", qe);

function R(a) { W.call(this);
    this.c = "volume";
    this.k = [0, 0, 0];
    this.aa = [10, 10, 10];
    this.H = [1, 1, 1];
    this.jb = [];
    this.vc = this.mb = this.uc = this.lb = this.tc = this.kb = 0;
    this.Q = new W;
    this.R = new W;
    this.Za = new W;
    this.ld = this.Ka = s;
    this.zb = 0;
    this.m = r;
    this.Pa = q;
    this.U = Infinity;
    this.T = -Infinity;
    this.ee = q;
    Ea(this, new pc);
    Ea(this, new Pc);
    a != r && this.Xb(a) }
F(R, W);
R.prototype.Xb = function(a) { window.console.log(a);
    this.k = a.k.slice();
    this.aa = a.aa.slice();
    this.H = a.H.slice();
    this.kb = a.kb;
    this.tc = a.tc;
    this.lb = a.lb;
    this.uc = a.uc;
    this.mb = a.mb;
    this.vc = a.vc;
    this.Q = new W(a.Q);
    this.R = new W(a.R);
    this.Za = new W(a.Za);
    this.Ka = a.Ka;
    this.ld = a.ld;
    this.zb = a.zb;
    this.m = a.m;
    this.Pa = a.Pa;
    R.s.Xb.call(this, a) };
R.prototype.mc = function() {
    this.e.length = 0;
    this.Q.e.length = 0;
    this.R.e.length = 0;
    this.Za.e.length = 0;
    this.e.push(this.Q);
    this.e.push(this.R);
    this.e.push(this.Za);
    for (var a = 0, a = 0; 3 > a; a++) {
        for (var b = (this.aa[a] - 1) / 2, c = b, d = 0, d = 0; d < this.aa[a]; d++) {
            var e = -b * this.H[a] + d * this.H[a],
                f = [
                    [this.k[0] + e, this.k[1], this.k[2]],
                    [this.k[0], this.k[1] + e, this.k[2]],
                    [this.k[0], this.k[1], this.k[2] + e]
                ],
                e = this.e[a].e,
                g = 0,
                h = 0,
                l = [1, 1, 1],
                j = this.Pa;
            0 == a ? (g = this.aa[2] * this.H[2] - this.H[2], h = this.aa[1] * this.H[1] - this.H[1], l = [1, 1, 0]) :
                1 == a ? (g = this.aa[0] * this.H[0] - this.H[0], h = this.aa[2] * this.H[2] - this.H[2], l = [1, 0, 0]) : 2 == a && (g = this.aa[0] * this.H[0] - this.H[0], h = this.aa[1] * this.H[1] - this.H[1], l = [0, 1, 0]);
            this.ab != r && (j = s);
            var k = new qe,
                p = k,
                f = f[a],
                t = [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1]
                ][a],
                v = [
                    [0, 1, 0],
                    [0, 0, -1],
                    [0, 1, 0]
                ][a];
            (f == r || !ha(f) || 3 != f.length) && m(Error("Invalid center."));
            (t == r || !ha(t) || 3 != t.length) && m(Error("Invalid front direction."));
            (v == r || !ha(v) || 3 != v.length) && m(Error("Invalid up direction."));
            y(g) || m(Error("Invalid width."));
            y(h) || m(Error("Invalid height."));
            var z = s;
            j != r && (z = j);
            j = [1, 1, 1];
            l != r && (j = l);
            p.k = f;
            p.hc = t;
            p.I = v;
            p.M = g;
            p.G = h;
            p.Pa = z;
            p.ec = j;
            p.mc();
            k.ab = this;
            k.visible = d == Math.floor(c);
            e.push(k)
        }
        0 == a ? this.tc = this.kb = c : 1 == a ? this.uc = this.lb = c : 2 == a && (this.vc = this.mb = c)
    }
    this.g = q
};
R.prototype.n = function(a) {
    a = "undefined" !== typeof a ? a : q;
    if (0 < this.e.length)
        if (this.Ka != this.ld && (this.Ka ? (this.e[0].e[parseInt(this.kb, 10)].visible = s, this.e[1].e[parseInt(this.lb, 10)].visible = s, this.e[2].e[parseInt(this.mb, 10)].visible = s) : this.e[this.zb].visible = s, this.g = q, this.ld = this.Ka), this.Ka) re(this, this.zb);
        else
            for (var b = 0, b = 0; 3 > b; b++) {
                var c = this.e[b],
                    d = 0,
                    e = 0;
                0 == b ? (d = this.kb, e = this.tc, this.tc = this.kb) : 1 == b ? (d = this.lb, e = this.uc, this.uc = this.lb) : 2 == b && (d = this.mb, e = this.vc, this.vc = this.mb);
                c.e[parseInt(e,
                    10)].visible = s;
                c = c.e[parseInt(d, 10)];
                c.visible = q;
                c.Z = 1
            }
        a && R.s.n.call(this)
};
R.prototype.__defineGetter__("dimensions", u("aa"));
R.prototype.__defineGetter__("volumeRendering", u("Ka"));
R.prototype.__defineSetter__("volumeRendering", function(a) { this.Ka = a;
    this.n(s) });
R.prototype.__defineSetter__("visible", ba("Ja"));
R.prototype.__defineGetter__("center", u("k"));
R.prototype.__defineSetter__("center", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid center."));
    this.k = a });
R.prototype.__defineGetter__("image", u("jb"));
R.prototype.__defineGetter__("labelmap", function() { this.m || (this.m = new ue(this)); return this.m });
R.prototype.__defineGetter__("indexX", u("kb"));
R.prototype.__defineSetter__("indexX", function(a) { y(a) && (0 <= a && a < this.Q.e.length) && (this.kb = a, this.n(s)) });
R.prototype.__defineGetter__("indexY", u("lb"));
R.prototype.__defineSetter__("indexY", function(a) { y(a) && (0 <= a && a < this.R.e.length) && (this.lb = a, this.n(s)) });
R.prototype.__defineGetter__("indexZ", u("mb"));
R.prototype.__defineSetter__("indexZ", function(a) { y(a) && (0 <= a && a < this.Za.e.length) && (this.mb = a, this.n(s)) });
R.prototype.__defineGetter__("windowLow", u("U"));
R.prototype.__defineSetter__("windowLow", ba("U"));
R.prototype.__defineGetter__("windowHigh", u("T"));
R.prototype.__defineSetter__("windowHigh", ba("T"));
R.prototype.__defineGetter__("borders", u("Pa"));
R.prototype.__defineSetter__("borders", ba("Pa"));
R.prototype.__defineGetter__("reslicing", u("ee"));
R.prototype.__defineSetter__("reslicing", ba("ee"));

function re(a, b) { if (a.Ka && (a.g || b != a.zb)) { var c = a.e[a.zb];
        c.visible = s; var c = a.e[b],
            d = c.e.length,
            e; for (e = 0; e < d; e++) c.e[e].Ja = q;
        a.zb = b;
        a.g = s } }
D("X.volume", R);
D("X.volume.prototype.modified", R.prototype.n);

function ve() { pd.call(this);
    this.c = "parserSTL" }
F(ve, pd);
ve.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    this.X = c;
    var d = b.i,
        e = b.j;
    if ("solid" == rd(Y(this, "uchar", 5))) { b.i = d = new U(c.byteLength);
        b.j = e = new U(c.byteLength); var f = d,
            d = e,
            e = Y(this, "uchar", c.byteLength - 5);
        c = e.length; var g = s,
            h = s,
            l = 0,
            j; for (j = 0; j < c; j++)
            if (10 == e[j]) { if (g || h) { var k = rd(e, l, j).split(" "),
                        h = parseFloat(k[0]),
                        p = parseFloat(k[1]),
                        k = parseFloat(k[2]);
                    g ? (d.add(h, p, k), d.add(h, p, k), d.add(h, p, k)) : f.add(h, p, k);
                    h = g = s } } else 32 == e[j - 1] && (102 == e[j] ? (l = j += 13, g = q) : 118 == e[j] && (l = j += 7, h = q)) } else {
        this.B =
            80;
        f = Y(this, "uint");
        b.i = d = new U(9 * f);
        b.j = e = new U(9 * f);
        for (c = c = 0; c < f; c++) g = Y(this, "float", 12), l = g[0], j = g[1], h = g[2], e.add(l, j, h), e.add(l, j, h), e.add(l, j, h), d.add(g[3], g[4], g[5]), d.add(g[6], g[7], g[8]), d.add(g[9], g[10], g[11]), this.B += 2
    }
    H.qa(this.c + ".parse");
    f = new Rc;
    f.Y = b;
    f.q = a;
    this.dispatchEvent(f)
};
D("X.parserSTL", ve);
D("X.parserSTL.prototype.parse", ve.prototype.parse);

function we() { pd.call(this);
    this.c = "parserDCM" }
F(we, pd);
we.prototype.parse = function(a, b, c) { c = this.Sc(c, b); if (c.Cd == c.Sa) { var d = c.Se.length,
            e, f = 0; for (e = 0; e < d; e++) { var g = c.Se[e];
            g !== n && (g *= c.Wa, c.data.set(c.Mc.subarray(g, g + c.Wa), f * c.Wa), f++) }
        b.aa = [c.xa[0], c.xa[1], c.xa[2]];
        Infinity == c.ka[2] && (c.ka[2] = 1);
        b.H = [c.ka[0], c.ka[1], c.ka[2]];
        e = qd(c.data);
        d = e[0];
        e = e[1];
        c.min = b.Ia = b.U = d;
        c.max = b.Fa = b.T = e; - Infinity == b.P && (b.P = d);
        Infinity == b.S && (b.S = e);
        b.mc();
        b.jb = sd(this, b, c) }
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c) };
we.prototype.Sc = function(a, b) {
    this.X = a;
    var c = 0;
    if (b.dc != r) {
        g = b.dc;
        h = Y(this, "ushort", this.X.byteLength - 2 * g.Wa);
        l = 0;
        for (j = 2; 0 < j;)
            if (d = h[l++], 32 == d)
                if (f = h[l++], 19 == f) { l++;
                    d = h[l++]; for (f = 0; f < d / 2; f++) k = h[l++], p = k & 255, k = (k & 65280) >> 8, c += String.fromCharCode(p), c += String.fromCharCode(k), c = parseInt(c, 10);
                    j-- } else if (4161 == f) {
            l++;
            for (var d = h[l++], e = "", f = 0; f < d / 2; f++) k = h[l++], p = k & 255, k = (k & 65280) >> 8, e += String.fromCharCode(p), e += String.fromCharCode(k);
            g.ka = [g.ka[0], g.ka[1], Math.min(Math.abs(g.Sf - e), g.ka[2])];
            g.Sf =
                e;
            j--
        }
        g.xa[2]++
    } else {
        var g = { rows: 0, cols: 0, ka: r, ne: 0, Jg: 0, Sa: 1, Eh: 1, Sf: r, Cd: 0, Wa: 0, Mc: r, Me: 0, Se: [], data: r, min: Infinity, max: -Infinity };
        g.Sa = b.o.length;
        g.Sa == r && (g.Sa = 1);
        for (var h = Y(this, "ushort", this.X.byteLength), l = 66, d = r, f = r, d = r, j = 7; 0 < j;)
            if (d = h[l++], 40 == d) switch (f = h[l++], l++, d = h[l++], f) {
                case 16:
                    g.rows = h[l++];
                    j--;
                    break;
                case 17:
                    g.cols = h[l++];
                    j--;
                    break;
                case 256:
                    g.ne = h[l++];
                    j--;
                    break;
                case 257:
                    g.Jg = h[l++];
                    j--;
                    break;
                case 2:
                    g.Eh = h[l++];
                    j--;
                    break;
                case 48:
                    e = "";
                    for (f = f = 0; f < d / 2; f++) var k = h[l++],
                        p = k & 255,
                        k = (k &
                            65280) >> 8,
                        e = e + String.fromCharCode(p),
                        e = e + String.fromCharCode(k);
                    e = e.split("\\");
                    g.ka = [+e[0], +e[1], Infinity];
                    j--
            } else if (32 == d && (f = h[l++], 19 == f)) { l++;
                d = h[l++]; for (f = 0; f < d / 2; f++) k = h[l++], p = k & 255, k = (k & 65280) >> 8, c += String.fromCharCode(p), c += String.fromCharCode(k), c = parseInt(c, 10);
                j-- }
        b.dc = g;
        g.xa = [g.cols, g.rows, 1];
        g.Wa = g.rows * g.cols;
        switch (g.ne) {
            case 8:
                g.Mc = new Uint8Array(g.cols * g.rows * g.Sa);
                g.data = new Uint8Array(g.cols * g.rows * g.Sa);
                break;
            case 16:
                g.Mc = new Uint16Array(g.cols * g.rows * g.Sa);
                g.data = new Uint16Array(g.cols *
                    g.rows * g.Sa);
                break;
            case 32:
                g.Mc = new Uint32Array(g.cols * g.rows * g.Sa), g.data = new Uint32Array(g.cols * g.rows * g.Sa)
        }
    }
    this.B = this.X.byteLength - 2 * g.Wa;
    h = r;
    switch (g.ne) {
        case 8:
            h = Y(this, "uchar", g.Wa); break;
        case 16:
            h = Y(this, "ushort", g.Wa); break;
        case 32:
            h = Y(this, "uint", g.Wa) }
    g.Se[c] = g.Me;
    g.Mc.set(h, g.Me * g.Wa);
    g.Me++;
    ++g.Cd;
    return g
};
D("X.parserDCM", we);
D("X.parserDCM.prototype.parse", we.prototype.parse);

function xe() { pd.call(this);
    this.c = "parserVTK" }
F(xe, pd);
xe.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    var d = b.i,
        e = b.j,
        f = new Uint8Array(c),
        g = "";
    b.i = d = new U(c.byteLength);
    b.j = e = new U(c.byteLength);
    c = 0;
    for (var h = f.length; c < h; c += 32768) g += rd(f, c, Math.min(c + 32768, h));
    f = g.split("\n");
    g = f.length;
    this.Hc = this.Ic = r;
    this.Jb = [];
    this.ta = Oc;
    this.ce = this.ub = this.ib = this.vb = s;
    c = 0;
    for (h = g % 8; h--;) ye(this, f[c]), c++;
    for (h = 0.125 * g ^ 0; h--;) ye(this, f[c]), c++, ye(this, f[c]), c++, ye(this, f[c]), c++, ye(this, f[c]), c++, ye(this, f[c]), c++, ye(this, f[c]), c++, ye(this, f[c]), c++,
        ye(this, f[c]), c++;
    c = this.Ic;
    var f = this.Hc,
        g = f.length,
        l = h = this.Jb.length;
    do {
        var j = this.Jb[h - l],
            k = j.length,
            p;
        for (p = 0; p < k && !("LINES" == this.ta && p + 1 >= k); p++) {
            var t = parseInt(j[p], 10),
                v = c.get(t);
            d.add(v[0], v[1], v[2]);
            var z = t,
                A = v;
            "LINES" == this.ta ? (z = parseInt(j[p + 1], 10), A = c.get(z), d.add(A[0], A[1], A[2])) : "TRIANGLE_STRIPS" == this.ta && (0 == p || p == k - 1) && d.add(v[0], v[1], v[2]);
            t < g ? (A = f.get(t), e.add(A[0], A[1], A[2]), "LINES" == this.ta ? (z = f.get(z), e.add(z[0], z[1], z[2])) : "TRIANGLE_STRIPS" == this.ta && (0 == p || p == k - 1) && e.add(A[0],
                A[1], A[2])) : (z = new S(v[0], v[1], v[2]), z.normalize(), e.add(z.x, z.y, z.b), "LINES" == this.ta ? (z = new S(A[0], A[1], A[2]), z.normalize(), e.add(z.x, z.y, z.b)) : "TRIANGLE_STRIPS" == this.ta && (0 == p || p == k - 1) && e.add(z.x, z.y, z.b))
        }
        l--
    } while (0 < l);
    b.ja = this.ta;
    H.qa(this.c + ".parse");
    d = new Rc;
    d.Y = b;
    d.q = a;
    this.dispatchEvent(d)
};

function ye(a, b) {
    b = b.replace(/^\s+|\s+$/g, "");
    var c = b.split(" "),
        d = c.length,
        e = c[0];
    switch (e) {
        case "POINTS":
            a.vb = q;
            a.ib = s;
            a.ub = s;
            c = parseInt(c[1], 10);
            a.Ic = new U(3 * c);
            a.Hc = new U(3 * c);
            return;
        case "VERTICES":
            a.ib = q;
            a.vb = s;
            a.ub = s;
            c = parseInt(c[1], 10);
            3 <= c ? a.ta = Oc : 1 == c ? a.ta = "POINTS" : m(Error("This VTK file is not supported!"));
            a.Jb = [];
            return;
        case "TRIANGLE_STRIPS":
            a.ib = q;
            a.vb = s;
            a.ub = s;
            a.ta = "TRIANGLE_STRIPS";
            a.Jb = [];
            return;
        case "LINES":
            a.ib = q;
            a.vb = s;
            a.ub = s;
            a.ta = "LINES";
            a.Jb = [];
            return;
        case "POLYGONS":
            a.ib = q;
            a.vb = s;
            a.ub = s;
            a.ta = "POLYGONS";
            a.Jb = [];
            return;
        case "POINT_DATA":
            a.ub = q;
            a.vb = s;
            a.ib = s;
            return
    }
    if (a.vb)
        if (1 == d || isNaN(parseFloat(e))) a.vb = s;
        else { if (3 <= d) { var e = parseFloat(c[0]),
                    f = parseFloat(c[1]),
                    g = parseFloat(c[2]);
                a.Ic.add(e, f, g) }
            6 <= d && (e = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.Ic.add(e, f, g));
            9 <= d && (d = parseFloat(c[6]), e = parseFloat(c[7]), c = parseFloat(c[8]), a.Ic.add(d, e, c)) }
    else a.ib ? 1 == d || isNaN(parseFloat(e)) ? a.ib = s : (c = c.slice(1), a.Jb.push(c)) : a.ub && ("NORMALS" == e ? a.ce = q : 1 == d || isNaN(parseFloat(e)) ?
        (a.ub = s, a.ce = s) : a.ce && (3 <= d && (e = parseFloat(c[0]), f = parseFloat(c[1]), g = parseFloat(c[2]), a.Hc.add(e, f, g)), 6 <= d && (e = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.Hc.add(e, f, g)), 9 <= d && (d = parseFloat(c[6]), e = parseFloat(c[7]), c = parseFloat(c[8]), a.Hc.add(d, e, c))))
}
D("X.parserVTK", xe);
D("X.parserVTK.prototype.parse", xe.prototype.parse);

function ze() { pd.call(this);
    this.c = "parserFSM";
    this.$c = s }
F(ze, pd);
ze.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    this.X = c;
    var d = b.i,
        e = b.j;
    b.kc = [];
    var f = b.kc;
    c = 0;
    var g;
    do g = Y(this, "uchar"), c++; while (200 > c && 10 != g);
    Y(this, "uchar");
    e = Y(this, "uint");
    c = Y(this, "uint");
    var h = Y(this, "float", 3 * e);
    g = Y(this, "uint", 3 * c);
    var l = new Uint32Array(e),
        j = new Float32Array(9 * c);
    b.i = d = new U(9 * c);
    b.j = e = new U(9 * c);
    var k;
    for (k = 0; k < c; k++) {
        var p = 3 * k,
            t = g[p],
            v = g[p + 1],
            z = g[p + 2];
        f.push(t);
        f.push(v);
        f.push(z);
        l[t] += 1;
        l[v] += 1;
        l[z] += 1;
        var p = 3 * t,
            A = 3 * v,
            C = 3 * z,
            E = h[p],
            x = h[p + 1],
            B = h[p + 2],
            v = h[A],
            z = h[A + 1],
            t = h[A + 2],
            G = h[C],
            I = h[C + 1],
            N = h[C + 2];
        d.add(E, x, B);
        d.add(v, z, t);
        d.add(G, I, N);
        E = new S(E, x, B);
        G = new S(G, I, N);
        v = (new S(v, z, t)).h().la(E);
        z = G.h().la(E);
        v = zc(v, z).normalize();
        j[p] += v.x;
        j[p + 1] += v.y;
        j[p + 2] += v.b;
        j[A] += v.x;
        j[A + 1] += v.y;
        j[A + 2] += v.b;
        j[C] += v.x;
        j[C + 1] += v.y;
        j[C + 2] += v.b
    }
    for (k = 0; k < c; k++) p = 3 * k, t = g[p], v = g[p + 1], z = g[p + 2], p = 3 * t, A = 3 * v, C = 3 * z, f = new S(j[A], j[A + 1], j[A + 2]), h = new S(j[C], j[C + 1], j[C + 2]), p = (new S(j[p], j[p + 1], j[p + 2])).scale(1 / l[t]).normalize(), f = f.scale(1 / l[v]).normalize(), h = h.scale(1 / l[z]).normalize(),
        e.add(p.x, p.y, p.b), e.add(f.x, f.y, f.b), e.add(h.x, h.y, h.b);
    b.ja = Oc;
    H.qa(this.c + ".parse");
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c)
};
D("X.parserFSM", ze);
D("X.parserFSM.prototype.parse", ze.prototype.parse);
var Ae = { re: function(a, b, c) { return Ae.update(a, 0, b, c) }, update: function(a, b, c, d) { var e = Ae.rg,
            f = "number" === typeof c ? c : c = 0;
        d = "number" === typeof d ? d : a.length;
        b ^= 4294967295; for (f = d & 7; f--; ++c) b = b >>> 8 ^ e[(b ^ a[c]) & 255]; for (f = d >> 3; f--; c += 8) b = b >>> 8 ^ e[(b ^ a[c]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 1]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 2]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 3]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 4]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 5]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 6]) & 255], b = b >>> 8 ^ e[(b ^ a[c + 7]) & 255]; return (b ^ 4294967295) >>> 0 } };
Ae.rg = new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101,
    3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271,
    366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376,
    3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
    1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836,
    1088359270, 936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
]);

function Be(a) { var b = a.length,
        c = 0,
        d = Number.POSITIVE_INFINITY,
        e, f, g, h, l, j, k, p, t; for (p = 0; p < b; ++p) a[p] > c && (c = a[p]), a[p] < d && (d = a[p]);
    e = 1 << c;
    f = new Uint32Array(e);
    g = 1;
    h = 0; for (l = 2; g <= c;) { for (p = 0; p < b; ++p)
            if (a[p] === g) { j = 0;
                k = h; for (t = 0; t < g; ++t) j = j << 1 | k & 1, k >>= 1; for (t = j; t < e; t += l) f[t] = g << 16 | p;++h }++g;
        h <<= 1;
        l <<= 1 } return [f, c, d] };

function Ce(a, b) { this.oe = [];
    this.pe = 32768;
    this.La = this.Kc = this.fa = this.Ve = 0;
    this.input = new Uint8Array(a);
    this.uf = s;
    this.qe = De;
    this.fb = s; if (b || !(b = {})) b.index && (this.fa = b.index), b.bufferSize && (this.pe = b.bufferSize), b.bufferType && (this.qe = b.bufferType), b.resize && (this.fb = b.resize); switch (this.qe) {
        case Ee:
            this.O = 32768;
            this.ya = new Uint8Array(32768 + this.pe + 258); break;
        case De:
            this.O = 0;
            this.ya = new Uint8Array(this.pe);
            this.Zb = this.Wg;
            this.xf = this.Mg;
            this.xe = this.Qg; break;
        default:
            m(Error("invalid inflate mode")) } }
var Ee = 0,
    De = 1;
Ce.prototype.Nc = function() {
    for (; !this.uf;) {
        var a = Fe(this, 3);
        a & 1 && (this.uf = q);
        a >>>= 1;
        switch (a) {
            case 0:
                var a = this.input,
                    b = this.fa,
                    c = this.ya,
                    d = this.O,
                    e = n,
                    f = n,
                    g = n,
                    h = c.length,
                    e = n;
                this.La = this.Kc = 0;
                e = a[b++];
                e === n && m(Error("invalid uncompressed block header: LEN (first byte)"));
                f = e;
                e = a[b++];
                e === n && m(Error("invalid uncompressed block header: LEN (second byte)"));
                f |= e << 8;
                e = a[b++];
                e === n && m(Error("invalid uncompressed block header: NLEN (first byte)"));
                g = e;
                e = a[b++];
                e === n && m(Error("invalid uncompressed block header: NLEN (second byte)"));
                g |=
                    e << 8;
                f === ~g && m(Error("invalid uncompressed block header: length verify"));
                b + f > a.length && m(Error("input buffer is broken"));
                switch (this.qe) {
                    case Ee:
                        for (; d + f > c.length;) e = h - d, f -= e, c.set(a.subarray(b, b + e), d), d += e, b += e, this.O = d, c = this.Zb(), d = this.O; break;
                    case De:
                        for (; d + f > c.length;) c = this.Zb({ Ef: 2 }); break;
                    default:
                        m(Error("invalid inflate mode")) }
                c.set(a.subarray(b, b + f), d);
                d += f;
                this.fa = b += f;
                this.O = d;
                this.ya = c;
                break;
            case 1:
                this.xe(Ge, He);
                break;
            case 2:
                Ie(this);
                break;
            default:
                m(Error("unknown BTYPE: " + a))
        }
    }
    return this.xf()
};
var Je = new Uint16Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
    Ke = new Uint16Array([3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258]),
    Le = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0]),
    Me = new Uint16Array([1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577]),
    Ne = new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
    Oe = new Uint8Array(288),
    Pe, Qe;
Pe = 0;
for (Qe = Oe.length; Pe < Qe; ++Pe) Oe[Pe] = 143 >= Pe ? 8 : 255 >= Pe ? 9 : 279 >= Pe ? 7 : 8;
var Ge = Be(Oe),
    Re = new Uint8Array(30),
    Se, Te;
Se = 0;
for (Te = Re.length; Se < Te; ++Se) Re[Se] = 5;
var He = Be(Re);

function Fe(a, b) { for (var c = a.Kc, d = a.La, e = a.input, f = a.fa, g; d < b;) g = e[f++], g === n && m(Error("input buffer is broken")), c |= g << d, d += 8;
    g = c & (1 << b) - 1;
    a.Kc = c >>> b;
    a.La = d - b;
    a.fa = f; return g }

function Ue(a, b) { for (var c = a.Kc, d = a.La, e = a.input, f = a.fa, g = b[0], h = b[1], l; d < h;) l = e[f++], l === n && m(Error("input buffer is broken")), c |= l << d, d += 8;
    e = g[c & (1 << h) - 1];
    g = e >>> 16;
    a.Kc = c >> g;
    a.La = d - g;
    a.fa = f; return e & 65535 }

function Ie(a) {
    function b(a, b, c) { var d, e, f; for (f = 0; f < a;) switch (d = Ue(this, b), d) {
            case 16:
                for (d = 3 + Fe(this, 2); d--;) c[f++] = e; break;
            case 17:
                for (d = 3 + Fe(this, 3); d--;) c[f++] = 0;
                e = 0; break;
            case 18:
                for (d = 11 + Fe(this, 7); d--;) c[f++] = 0;
                e = 0; break;
            default:
                e = c[f++] = d }
        return c } var c = Fe(a, 5) + 257,
        d = Fe(a, 5) + 1,
        e = Fe(a, 4) + 4,
        f = new Uint8Array(Je.length),
        g; for (g = 0; g < e; ++g) f[Je[g]] = Fe(a, 3);
    e = Be(f);
    f = new Uint8Array(c);
    g = new Uint8Array(d);
    a.xe(Be(b.call(a, c, e, f)), Be(b.call(a, d, e, g))) }
w = Ce.prototype;
w.xe = function(a, b) { var c = this.ya,
        d = this.O;
    this.Af = a; for (var e = c.length - 258, f, g, h; 256 !== (f = Ue(this, a));)
        if (256 > f) d >= e && (this.O = d, c = this.Zb(), d = this.O), c[d++] = f;
        else { f -= 257;
            h = Ke[f];
            0 < Le[f] && (h += Fe(this, Le[f]));
            f = Ue(this, b);
            g = Me[f];
            0 < Ne[f] && (g += Fe(this, Ne[f]));
            d >= e && (this.O = d, c = this.Zb(), d = this.O); for (; h--;) c[d] = c[d++ - g] }
    for (; 8 <= this.La;) this.La -= 8, this.fa--;
    this.O = d };
w.Qg = function(a, b) { var c = this.ya,
        d = this.O;
    this.Af = a; for (var e = c.length, f, g, h; 256 !== (f = Ue(this, a));)
        if (256 > f) d >= e && (c = this.Zb(), e = c.length), c[d++] = f;
        else { f -= 257;
            h = Ke[f];
            0 < Le[f] && (h += Fe(this, Le[f]));
            f = Ue(this, b);
            g = Me[f];
            0 < Ne[f] && (g += Fe(this, Ne[f]));
            d + h > e && (c = this.Zb(), e = c.length); for (; h--;) c[d] = c[d++ - g] }
    for (; 8 <= this.La;) this.La -= 8, this.fa--;
    this.O = d };
w.Zb = function() { var a = new Uint8Array(this.O - 32768),
        b = this.O - 32768,
        c = this.ya;
    a.set(c.subarray(32768, a.length));
    this.oe.push(a);
    this.Ve += a.length;
    c.set(c.subarray(b, b + 32768));
    this.O = 32768; return c };
w.Wg = function(a) { var b = this.input.length / this.fa + 1 | 0,
        c = this.input,
        d = this.ya;
    a && ("number" === typeof a.Ef && (b = a.Ef), "number" === typeof a.Fg && (b += a.Fg));
    2 > b ? (a = (c.length - this.fa) / this.Af[2], a = 258 * (a / 2) | 0, a = a < d.length ? d.length + a : d.length << 1) : a = d.length * b;
    a = new Uint8Array(a);
    a.set(d); return this.ya = a };
w.xf = function() { var a = 0,
        b = this.ya,
        c = this.oe,
        d, e = new Uint8Array(this.Ve + (this.O - 32768)),
        f, g, h, l; if (0 === c.length) return this.ya.subarray(32768, this.O);
    f = 0; for (g = c.length; f < g; ++f) { d = c[f];
        h = 0; for (l = d.length; h < l; ++h) e[a++] = d[h] }
    f = 32768; for (g = this.O; f < g; ++f) e[a++] = b[f];
    this.oe = []; return this.buffer = e };
w.Mg = function() { var a, b = this.O;
    this.fb ? (a = new Uint8Array(b), a.set(this.ya.subarray(0, b))) : a = this.ya.subarray(0, b); return this.buffer = a };
new Uint8Array(256);
var Ve;
for (Ve = 0; 256 > Ve; ++Ve)
    for (var We = Ve, Xe = 7, We = We >>> 1; We; We >>>= 1) --Xe;
var Ye = [],
    Ze;
for (Ze = 0; 288 > Ze; Ze++) switch (q) {
    case 143 >= Ze:
        Ye.push([Ze + 48, 8]); break;
    case 255 >= Ze:
        Ye.push([Ze - 144 + 400, 9]); break;
    case 279 >= Ze:
        Ye.push([Ze - 256 + 0, 7]); break;
    case 287 >= Ze:
        Ye.push([Ze - 280 + 192, 8]); break;
    default:
        m("invalid literal: " + Ze) }

function $e() {
    var a = af;
    switch (q) {
        case 3 === a:
            return [257, a - 3, 0];
        case 4 === a:
            return [258, a - 4, 0];
        case 5 === a:
            return [259, a - 5, 0];
        case 6 === a:
            return [260, a - 6, 0];
        case 7 === a:
            return [261, a - 7, 0];
        case 8 === a:
            return [262, a - 8, 0];
        case 9 === a:
            return [263, a - 9, 0];
        case 10 === a:
            return [264, a - 10, 0];
        case 12 >= a:
            return [265, a - 11, 1];
        case 14 >= a:
            return [266, a - 13, 1];
        case 16 >= a:
            return [267, a - 15, 1];
        case 18 >= a:
            return [268, a - 17, 1];
        case 22 >= a:
            return [269, a - 19, 2];
        case 26 >= a:
            return [270, a - 23, 2];
        case 30 >= a:
            return [271, a - 27, 2];
        case 34 >= a:
            return [272, a -
                31, 2
            ];
        case 42 >= a:
            return [273, a - 35, 3];
        case 50 >= a:
            return [274, a - 43, 3];
        case 58 >= a:
            return [275, a - 51, 3];
        case 66 >= a:
            return [276, a - 59, 3];
        case 82 >= a:
            return [277, a - 67, 4];
        case 98 >= a:
            return [278, a - 83, 4];
        case 114 >= a:
            return [279, a - 99, 4];
        case 130 >= a:
            return [280, a - 115, 4];
        case 162 >= a:
            return [281, a - 131, 5];
        case 194 >= a:
            return [282, a - 163, 5];
        case 226 >= a:
            return [283, a - 195, 5];
        case 257 >= a:
            return [284, a - 227, 5];
        case 258 === a:
            return [285, a - 258, 0];
        default:
            m("invalid length: " + a)
    }
}
var bf = [],
    af, cf;
for (af = 3; 258 >= af; af++) cf = $e(), bf[af] = cf[2] << 24 | cf[1] << 16 | cf[0];
new Uint32Array(bf);

function df() {};

function ef(a) { this.input = a;
    this.fa = 0;
    this.member = [] }
ef.prototype.Nc = function() {
    for (var a = this.input.length; this.fa < a;) {
        var b = new df,
            c = n,
            d = n,
            e = n,
            f = c = e = n,
            g = n,
            c = c = n,
            h = this.input,
            d = this.fa;
        b.Kf = h[d++];
        b.Lf = h[d++];
        (31 !== b.Kf || 139 !== b.Lf) && m(Error("invalid file signature:", b.Kf, b.Lf));
        b.wf = h[d++];
        switch (b.wf) {
            case 8:
                break;
            default:
                m(Error("unknown compression method: " + b.wf)) }
        b.td = h[d++];
        c = h[d++] | h[d++] << 8 | h[d++] << 16 | h[d++] << 24;
        b.Pj = new Date(1E3 * c);
        b.Sj = h[d++];
        b.Qj = h[d++];
        0 < (b.td & 4) && (b.Pi = h[d++] | h[d++] << 8, d += b.Pi);
        if (0 < (b.td & 8)) {
            g = [];
            for (f = 0; 0 < (c = h[d++]);) g[f++] =
                String.fromCharCode(c);
            b.name = g.join("")
        }
        if (0 < (b.td & 16)) { g = []; for (f = 0; 0 < (c = h[d++]);) g[f++] = String.fromCharCode(c);
            b.comment = g.join("") }
        0 < (b.td & 2) && (b.Ng = Ae.re(h, 0, d) & 65535, b.Ng !== (h[d++] | h[d++] << 8) && m(Error("invalid header crc16")));
        c = h[h.length - 4] | h[h.length - 3] << 8 | h[h.length - 2] << 16 | h[h.length - 1] << 24;
        h.length - d - 4 - 4 < 512 * c && (e = c);
        d = new Ce(h, { index: d, bufferSize: e });
        b.data = e = d.Nc();
        d = d.fa;
        b.Ij = c = (h[d++] | h[d++] << 8 | h[d++] << 16 | h[d++] << 24) >>> 0;
        Ae.re(e) !== c && m(Error("invalid CRC-32 checksum: 0x" + Ae.re(e).toString(16) +
            " / 0x" + c.toString(16)));
        b.Mj = c = (h[d++] | h[d++] << 8 | h[d++] << 16 | h[d++] << 24) >>> 0;
        (e.length & 4294967295) !== c && m(Error("invalid input size: " + (e.length & 4294967295) + " / " + c));
        this.member.push(b);
        this.fa = d
    }
    a = this.member;
    b = e = d = 0;
    for (h = a.length; b < h; ++b) e += a[b].data.length;
    e = new Uint8Array(e);
    for (b = 0; b < h; ++b) e.set(a[b].data, d), d += a[b].data.length;
    return e
};

function ff() { pd.call(this);
    this.c = "parserMGZ";
    this.$c = s }
F(ff, pd);
ff.prototype.parse = function(a, b, c, d) { H.Ea(this.c + ".parse");
    d && (c = (new ef(new Uint8Array(c))).Nc(), c = c.buffer);
    d = this.Sc(c);
    b.aa = [d.Ee, d.Fe, d.Ge];
    b.H = d.lg;
    c = d.min; var e = d.max;
    b.Ia = b.U = c;
    b.Fa = b.T = e; - Infinity == b.P && (b.P = c);
    Infinity == b.S && (b.S = e);
    b.mc();
    H.qa(this.c + ".parse");
    b.jb = sd(this, b, d);
    d = new Rc;
    d.Y = b;
    d.q = a;
    this.dispatchEvent(d) };
ff.prototype.Sc = function(a) {
    this.X = a;
    a = { version: 0, ug: 0, sg: 0, bh: 0, tg: 0, Ee: 0, Fe: 0, Ge: 0, Dh: 0, type: 0, Ug: 0, ig: 0, Ui: r, qg: r, lg: r, data: r, min: Infinity, max: -Infinity };
    a.version = Y(this, "uint");
    a.Ee = Y(this, "uint");
    a.Fe = Y(this, "uint");
    a.Ge = Y(this, "uint");
    a.Dh = Y(this, "uint");
    a.type = Y(this, "uint");
    a.Ug = Y(this, "uint");
    a.ig = Y(this, "ushort");
    if (0 < a.ig) { a.lg = Y(this, "float", 3); var b = [];
        b.push(Y(this, "float", 3));
        b.push(Y(this, "float", 3));
        b.push(Y(this, "float", 3));
        b.push(Y(this, "float", 3));
        a.qg = b }
    this.B = 284;
    b = a.Ee * a.Fe *
        a.Ge;
    switch (a.type) {
        case 0:
            a.data = Y(this, "uchar", b); break;
        case 1:
            a.data = Y(this, "uint", b); break;
        case 3:
            a.data = Y(this, "float", b); break;
        case 4:
            a.data = Y(this, "ushort", b); break;
        default:
            m(Error("Unsupported MGH/MGZ data type: " + a.type)) }
    b = qd(a.data);
    a.min = b[0];
    a.max = b[1];
    this.B + 16 < this.X.byteLength && (a.ug = Y(this, "float"), a.bh = Y(this, "float"), a.sg = Y(this, "float"), a.tg = Y(this, "float"));
    return a
};
D("X.parserMGZ", ff);
D("X.parserMGZ.prototype.parse", ff.prototype.parse);

function gf() { pd.call(this);
    this.c = "parserCRV";
    this.$c = s }
F(gf, pd);
gf.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    var d = b.kc;
    0 == d.length && m(Error("No _pointIndices defined on the X.object."));
    this.X = c;
    this.B = 3;
    var e = Y(this, "uint");
    Y(this, "uint");
    Y(this, "uint");
    var f = 0,
        g = 0,
        h = 0,
        l = 0,
        j = 0,
        k = 0,
        p = 0,
        t = 0,
        v = 0,
        z = 0,
        A = 0;
    c = Array(2);
    var C = Array(2),
        E = Y(this, "float", e),
        x;
    for (x = 0; x < e; x++) { var B = E[x];
        0 == x && (c[0] = C[0] = B);
        0 <= B ? (f++, l += B) : (g++, h += B);
        v += B;
        A++;
        C[0] = Math.max(B, C[0]);
        c[0] = Math.min(B, c[0]);
        E[x] = B }
    0 != f && (j = l / f);
    0 != g && (k = h / g);
    0 != A && (z = v / A);
    for (A = v = h = l = 0; A < e; A++) B =
        E[A], x = 0, 0 <= B ? (x = Math.pow(B - j, 2), l += x) : (x = Math.pow(B - k, 2), h += x), x = Math.pow(B - z, 2), v += x;
    1 < f && (p = Math.sqrt(l / (f - 1)));
    1 < g && (t = Math.sqrt(h / (g - 1)));
    c[1] = k - 2.5 * t;
    C[1] = j + 2.5 * p;
    e = d.length;
    f = new Float32Array(3 * e);
    for (A = 0; A < e; A++) g = E[d[A]], h = 3 * A, f[h] = g, f[h + 1] = g, f[h + 2] = g;
    b.u.Ia = c[1];
    b.u.Fa = C[1]; - Infinity == b.u.P && (b.u.P = c[1]);
    Infinity == b.u.S && (b.u.S = C[1]);
    b.u.v = E;
    b.u.sc = f;
    b.u.g = q;
    H.qa(this.c + ".parse");
    d = new Rc;
    d.Y = b;
    d.q = a;
    this.dispatchEvent(d)
};
D("X.parserCRV", gf);
D("X.parserCRV.prototype.parse", gf.prototype.parse);

function hf() { pd.call(this);
    this.c = "parserTRK" }
F(hf, pd);
hf.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    var d = b.i,
        e = b.j,
        f = b.W;
    this.X = c;
    Y(this, "uchar", 6);
    Y(this, "ushort", 3);
    var g = Y(this, "float", 3);
    Y(this, "float", 3);
    var h = Y(this, "ushort");
    Y(this, "uchar", 200);
    Y(this, "ushort");
    Y(this, "uchar", 200);
    Y(this, "float", 16);
    Y(this, "uchar", 444);
    Y(this, "uchar", 4);
    Y(this, "uchar", 4);
    Y(this, "float", 6);
    Y(this, "uchar", 2);
    Y(this, "uchar");
    Y(this, "uchar");
    Y(this, "uchar");
    Y(this, "uchar");
    Y(this, "uchar");
    Y(this, "uchar");
    var l = Y(this, "uint");
    Y(this, "uint");
    var j = Y(this,
            "uint"),
        k = [],
        p = [];
    c = Infinity;
    var t = -Infinity,
        v = r,
        z = r,
        A = r,
        C = r,
        e = d = r,
        E = Y(this, "uint", (this.X.byteLength - 1E3) / 4);
    this.B = j;
    for (var x = Y(this, "float", (this.X.byteLength - 1E3) / 4), B = 0, j = f = 0; j < l; j++) {
        for (var G = E[B], I = new U(3 * G), N = 0, J = 0; J < G; J++) { var K = x[B + 3 * J + J * h + 1],
                P = x[B + 3 * J + J * h + 2],
                V = x[B + 3 * J + J * h + 3],
                K = K / g[0],
                P = P / g[1],
                V = V / g[2];
            I.add(K, P, V); if (0 < J) var T = I.get(J - 1),
                N = N + Math.sqrt(Math.pow(K - T[0], 2) + Math.pow(P - T[1], 2) + Math.pow(V - T[2], 2));
            J < G - 1 && (f += 6) }
        B += 3 * G + G * h + 1;
        J = I.Ob;
        G = I.Lb;
        K = I.Pb;
        P = I.Mb;
        V = I.Qb;
        T = I.Nb;
        if (!v ||
            J < v) v = J;
        if (!z || G > z) z = G;
        if (!A || K < A) A = K;
        if (!C || P > C) C = P;
        if (!d || V < d) d = V;
        if (!e || T > e) e = T;
        k.push(I);
        p.push(N)
    }
    g = (v + z) / 2;
    A = (A + C) / 2;
    h = (d + e) / 2;
    C = new Float32Array(f);
    b.i = d = new U(f);
    b.j = e = new U(f);
    b.W = f = new U(f);
    for (j = v = 0; j < l; j++) {
        z = k[j];
        E = z.count;
        N = p[j];
        c = Math.min(c, N);
        t = Math.max(t, N);
        for (J = 0; J < E - 1; J++) {
            B = z.get(J);
            x = z.get(J + 1);
            d.add(B[0], B[1], B[2]);
            d.add(x[0], x[1], x[2]);
            var I = B[0] - g,
                G = B[1] - A,
                K = B[2] - h,
                P = Math.sqrt(I * I + G * G + K * K),
                V = x[0] - g,
                T = x[1] - A,
                ia = x[2] - h,
                ka = Math.sqrt(V * V + T * T + ia * ia);
            e.add(I / P, G / P, K / P);
            e.add(V /
                ka, T / ka, ia / ka);
            x = [Math.abs(x[0] - B[0]), Math.abs(x[1] - B[1]), Math.abs(x[2] - B[2])];
            B = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
            x[0] /= B;
            x[1] /= B;
            x[2] /= B;
            f.add(x[0], x[1], x[2]);
            f.add(x[0], x[1], x[2]);
            C[v++] = N;
            C[v++] = N;
            C[v++] = N;
            C[v++] = N;
            C[v++] = N;
            C[v++] = N
        }
    }
    b.ja = "LINES";
    l = new Qc;
    l.Ia = c;
    l.Fa = t;
    l.P = c;
    l.S = t;
    l.sc = C;
    l.qf = s;
    l.g = q;
    b.u = l;
    H.qa(this.c + ".parse");
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c)
};
D("X.parserTRK", hf);
D("X.parserTRK.prototype.parse", hf.prototype.parse);

function jf() { pd.call(this);
    this.c = "parserIMAGE" }
F(jf, pd);
jf.prototype.parse = function(a, b, c, d) { c instanceof ArrayBuffer || m(Error()); for (var e = new Uint8Array(c), f = e.length, g = Array(f); f--;) g[f] = String.fromCharCode(e[f]);
    e = window.btoa(g.join(""));
    f = new Image;
    Sb(f, "load", this.gi.bind(this, f, a, b, c, d));
    f.src = "data:image/" + d + ";base64," + e };
jf.prototype.gi = function(a, b, c) { b.jb = a;
    b.va = r;
    a = new Rc;
    a.Y = c;
    a.q = b;
    this.dispatchEvent(a) };
D("X.parserIMAGE", jf);
D("X.parserIMAGE.prototype.parse", jf.prototype.parse);

function kf() { pd.call(this);
    this.c = "parserLUT" }
F(kf, pd);
kf.prototype.parse = function(a, b, c) { H.Ea(this.c + ".parse");
    this.X = c;
    c = Y(this, "uchar", c.byteLength); var d = c.length,
        e = 0,
        f; for (f = 0; f < d; f++)
        if (10 == c[f]) { var g = rd(c, e, f),
                e = f + 1,
                g = g.replace(/^\s+|\s+$/g, ""); "#" != g[0] && (g = g.split(" "), g = g.filter(function(a) { return "" != a }), 6 == g.length && (g[2] = parseInt(g[2], 10) / 255, g[3] = parseInt(g[3], 10) / 255, g[4] = parseInt(g[4], 10) / 255, g[5] = parseInt(g[5], 10) / 255, a.add(parseInt(g[0], 10), g[1], g[2], g[3], g[4], g[5], 10))) }
    H.qa(this.c + ".parse");
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c) };
D("X.parserLUT", kf);
D("X.parserLUT.prototype.parse", kf.prototype.parse);

function lf() { pd.call(this);
    this.c = "parserNRRD" }
F(lf, pd);
lf.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    this.X = c;
    c = Y(this, "uchar", c.byteLength);
    var d = c.length,
        e = r,
        f = 0,
        g;
    for (g = 1; g < d; g++)
        if (10 == c[g - 1] && 10 == c[g]) { e = rd(c, 0, g - 2);
            f = g + 1; break }
    var h, l, j, k, d = e.split(/\r?\n/),
        e = 0;
    for (g = d.length; e < g; e++)
        if (h = d[e], h.match(/NRRD\d+/)) this.vh = q;
        else if (!h.match(/^#/) && (k = h.match(/(.*):(.*)/))) l = k[1].trim(), h = k[2].trim(), (j = this.Yg[l]) ? j.call(this, h) : this[l] = h;
    this.vh || m(Error("Not an NRRD file"));
    "raw" !== this.encoding && ("gzip" !== this.encoding && "gz" !== this.encoding) &&
        m(Error("Only raw or gz/gzip encoding is allowed"));
    if (!this.Ga && (this.Ga = [new S(1, 0, 0), new S(0, 1, 0), new S(0, 0, 1)], this.Te)) { d = []; for (k = 0; 2 >= k; k++) d.push(!isNaN(this.Te[k]) ? this.Ga[k].scale(this.Te[k]) : n) }
    f = c.subarray(f);
    if ("gzip" == this.encoding || "gz" == this.encoding) f = (new ef(new Uint8Array(f))).Nc();
    f = f.buffer;
    c = { data: r, min: Infinity, max: -Infinity };
    c.data = new this.Fb(f);
    k = qd(c.data);
    f = c.min = k[0];
    k = c.max = k[1];
    b.aa = [this.Qe[0], this.Qe[1], this.Qe[2]];
    d = (new S(this.Ga[0][0], this.Ga[0][1], this.Ga[0][2])).eb();
    e = (new S(this.Ga[1][0], this.Ga[1][1], this.Ga[1][2])).eb();
    g = (new S(this.Ga[2][0], this.Ga[2][1], this.Ga[2][2])).eb();
    b.H = [d, e, g];
    b.Ia = b.U = f;
    b.Fa = b.T = k; - Infinity == b.P && (b.P = f);
    Infinity == b.S && (b.S = k);
    b.mc();
    H.qa(this.c + ".parse");
    b.jb = sd(this, b, c);
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c)
};
lf.prototype.Yg = {
    type: function(a) {
        switch (a) {
            case "uchar":
            case "unsigned char":
            case "uint8":
            case "uint8_t":
                this.Fb = Uint8Array;
                break;
            case "signed char":
            case "int8":
            case "int8_t":
                this.Fb = Int8Array;
                break;
            case "short":
            case "short int":
            case "signed short":
            case "signed short int":
            case "int16":
            case "int16_t":
                this.Fb = Int16Array;
                break;
            case "ushort":
            case "unsigned short":
            case "unsigned short int":
            case "uint16":
            case "uint16_t":
                this.Fb = Uint16Array;
                break;
            case "int":
            case "signed int":
            case "int32":
            case "int32_t":
                this.Fb =
                    Int32Array;
                break;
            case "uint":
            case "unsigned int":
            case "uint32":
            case "uint32_t":
                this.Fb = Uint32Array;
                break;
            case "float":
                this.Fb = Float32Array;
                break;
            default:
                m(Error("Unsupported NRRD data type: " + a))
        }
        return this.type = a
    },
    endian: function(a) { return this.Lj = a },
    encoding: function(a) { return this.encoding = a },
    dimension: function(a) { return this.xa = parseInt(a, 10) },
    sizes: function(a) { var b, c, d, e;
        d = a.split(/\s+/);
        e = [];
        b = 0; for (c = d.length; b < c; b++) a = d[b], e.push(parseInt(a, 10)); return this.Qe = e },
    "space directions": function(a) {
        var b,
            c;
        a = a.match(/\(.*?\)/g);
        var d, e, f;
        f = [];
        d = 0;
        for (e = a.length; d < e; d++) c = a[d], f.push(function() { var a, d, e, f;
            e = c.slice(1, -1).split(/,/);
            f = [];
            a = 0; for (d = e.length; a < d; a++) b = e[a], f.push(parseFloat(b)); return f }());
        return this.Ga = f
    },
    spacings: function(a) { var b;
        b = a.split(/\s+/); var c, d, e;
        e = [];
        c = 0; for (d = b.length; c < d; c++) a = b[c], e.push(parseFloat(a)); return this.Te = e }
};
D("X.parserNRRD", lf);
D("X.parserNRRD.prototype.parse", lf.prototype.parse);

function mf() { pd.call(this);
    this.c = "parserNII" }
F(mf, pd);
mf.prototype.parse = function(a, b, c) { H.Ea(this.c + ".parse"); var d = c,
        e = -1,
        e = "undefined" == typeof DataView ? (new Int32Array(c, 0, 1))[0] : (new DataView(c, 0)).getInt32(0, q);
    348 != e && (d = (new ef(new Uint8Array(d))).Nc(), d = d.buffer);
    c = this.Sc(d);
    b.aa = [c.xa[1], c.xa[2], c.xa[3]];
    b.H = [c.ka[1], c.ka[2], c.ka[3]];
    d = c.min;
    e = c.max;
    b.Ia = b.U = d;
    b.Fa = b.T = e; - Infinity == b.P && (b.P = d);
    Infinity == b.S && (b.S = e);
    b.mc();
    H.qa(this.c + ".parse");
    b.jb = sd(this, b, c);
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c) };
mf.prototype.Sc = function(a) {
    this.X = a;
    a = { zi: 0, Og: r, Pg: r, Xg: 0, wi: 0, qi: 0, Tg: r, xa: r, rh: 0, sh: 0, th: 0, ph: 0, we: 0, Ig: 0, Di: 0, ka: r, mg: 0, vi: 0, ui: 0, Ci: 0, Ai: r, Qi: r, Kg: 0, Lg: 0, Bi: 0, Ki: 0, eh: 0, fh: 0, Rg: r, Hg: r, ji: 0, xi: 0, ni: 0, oi: 0, pi: 0, ki: 0, li: 0, mi: 0, Ei: r, Fi: r, Gi: r, qh: r, xh: r, data: r, min: Infinity, max: -Infinity };
    a.zi = Y(this, "uint");
    a.Og = Y(this, "uchar", 10);
    a.Pg = Y(this, "uchar", 18);
    a.Xg = Y(this, "uint");
    a.wi = Y(this, "ushort");
    a.qi = Y(this, "uchar");
    a.Tg = Y(this, "uchar");
    a.xa = Y(this, "ushort", 8);
    a.rh = Y(this, "float");
    a.sh = Y(this, "float");
    a.th = Y(this, "float");
    a.ph = Y(this, "ushort");
    a.we = Y(this, "ushort");
    a.Ig = Y(this, "ushort");
    a.Di = Y(this, "ushort");
    a.ka = Y(this, "float", 8);
    a.mg = Y(this, "float");
    a.vi = Y(this, "float");
    a.ui = Y(this, "float");
    a.Ci = Y(this, "ushort");
    a.Ai = Y(this, "uchar");
    a.Qi = Y(this, "uchar");
    a.Kg = Y(this, "float");
    a.Lg = Y(this, "float");
    a.Bi = Y(this, "float");
    a.Ki = Y(this, "float");
    a.eh = Y(this, "uint", 1);
    a.fh = Y(this, "uint", 1);
    a.Rg = Y(this, "uchar", 80);
    a.Hg = Y(this, "uchar", 24);
    a.ji = Y(this, "ushort");
    a.xi = Y(this, "ushort");
    a.ni = Y(this, "float");
    a.oi =
        Y(this, "float");
    a.pi = Y(this, "float");
    a.ki = Y(this, "float");
    a.li = Y(this, "float");
    a.mi = Y(this, "float");
    a.Ei = Y(this, "float", 4);
    a.Fi = Y(this, "float", 4);
    a.Gi = Y(this, "float", 4);
    a.qh = Y(this, "uchar", 16);
    a.xh = Y(this, "uchar", 4);
    this.B = parseInt(a.mg, 10);
    var b = a.xa[1] * a.xa[2] * a.xa[3];
    switch (a.we) {
        case 2:
            a.data = Y(this, "uchar", b);
            break;
        case 4:
            a.data = Y(this, "sshort", b);
            break;
        case 8:
            a.data = Y(this, "sint", b);
            break;
        case 16:
            a.data = Y(this, "float", b);
            break;
        case 256:
            a.data = Y(this, "schar", b);
            break;
        case 512:
            a.data = Y(this, "ushort",
                b);
            break;
        case 768:
            a.data = Y(this, "uint", b);
            break;
        default:
            m(Error("Unsupported NII data type: " + a.we))
    }
    b = qd(a.data);
    a.min = b[0];
    a.max = b[1];
    return a
};
D("X.parserNII", mf);
D("X.parserNII.prototype.parse", mf.prototype.parse);

function nf() { pd.call(this);
    this.c = "parserOBJ" }
F(nf, pd);
nf.prototype.parse = function(a, b, c) {
    H.Ea(this.c + ".parse");
    this.X = c;
    c = c.byteLength;
    var d = Y(this, "uchar", c),
        e = [];
    b.i = new U(c);
    b.j = new U(c);
    var f = b.i,
        g = b.j,
        h = 0,
        l;
    for (l = 0; l < c; ++l)
        if (10 == d[l]) {
            var j = rd(d, h, l).replace(/\s{2,}/g, " ").split(" ");
            if ("v" == j[0]) e.push([parseFloat(j[1]), parseFloat(j[2]), parseFloat(j[3])]);
            else if ("f" == j[0]) {
                var k = e[parseInt(j[1], 10) - 1],
                    h = e[parseInt(j[2], 10) - 1],
                    j = e[parseInt(j[3], 10) - 1];
                f.add(k[0], k[1], k[2]);
                f.add(h[0], h[1], h[2]);
                f.add(j[0], j[1], j[2]);
                k = new S(k[0], k[1], k[2]);
                j =
                    new S(j[0], j[1], j[2]);
                h = zc((new S(h[0], h[1], h[2])).la(k), j.la(k));
                h.normalize();
                g.add(h.x, h.y, h.b);
                g.add(h.x, h.y, h.b);
                g.add(h.x, h.y, h.b)
            }
            h = l + 1
        }
    H.qa(this.c + ".parse");
    c = new Rc;
    c.Y = b;
    c.q = a;
    this.dispatchEvent(c)
};
D("X.parserOBJ", nf);
D("X.parserOBJ.prototype.parse", nf.prototype.parse);

function of() { Q.call(this);
    this.c = "loader";
    this.ic = new rc;
    this.Fc = 0 }
F(of, Q);

function pf(a, b) { a.Fc += b / a.ic.ud() / 3;
    a.Fc = Math.min(1, a.Fc); var c = new od;
    c.sf = a.Fc;
    a.dispatchEvent(c) }

function qf(a) { a = a.o.dd; var b = a.split(".").pop().toUpperCase();
    b == a.toUpperCase() && (b = "");
    b in rf || m(Error("The " + b + " file format is not supported.")); return [a, b, rf[b][0], rf[b][1], rf[b][2]] }
of.prototype.load = function(a, b) {
    (!a || !b) && m(Error("No container or object to load.")); if (!uc(this.ic.J, a.sa) || this.ic.get(a.sa)) { this.ic.set(a.sa, s); var c = qf(a)[0]; if (a.Ib != r) this.parse(r, a, b);
        else { var d = new XMLHttpRequest;
            O(d, "abort", this.Df.bind(this, d, a, b));
            O(d, "error", this.Df.bind(this, d, a, b));
            O(d, "load", this.parse.bind(this, d, a, b));
            d.open("GET", c, q);
            d.responseType = "arraybuffer";
            d.send(r) } } };
of.prototype.parse = function(a, b, c) { pf(this, 1);
    setTimeout(function() { var d = qf(b),
            e = d[3],
            d = new d[2];
        Sb(d, cd, this.complete.bind(this)); var f = b.Ib;
        f == r && (f = a.response);
        d.parse(b, c, f, e) }.bind(this), 100) };
of.prototype.complete = function(a) { pf(this, 1);
    setTimeout(function() { var b = a.q,
            c = a.Y;
        b.o.g = s;
        b.g = q;
        c.n();
        this.ic.set(b.sa, q) }.bind(this), 100) };
of.prototype.Df = function(a, b, c) { m(Error("Loading failed: ", b, c)) };
var rf = { OBJ: [nf, r], STL: [ve, r], VTK: [xe, r], TRK: [hf, r], FSM: [ze, r], INFLATED: [ze, r], SMOOTHWM: [ze, r], SPHERE: [ze, r], PIAL: [ze, r], ORIG: [ze, r], NRRD: [lf, r], NII: [mf, r], GZ: [mf, r], DCM: [we, r], DICOM: [we, r], "": [we, r], CRV: [gf, r], LABEL: [xd, r], MGH: [ff, s], MGZ: [ff, q], TXT: [kf, r], LUT: [kf, r], PNG: [jf, "png"], JPG: [jf, "jpeg"], JPEG: [jf, "jpeg"], GIF: [jf, "gif"] };

function sf(a, b) {
    (!y(a) || !y(b)) && m(Error("A camera needs valid width and height values."));
    Q.call(this);
    this.c = "camera";
    this.ua = new H.f(0, 0, 100);
    this.gc = new H.f(0, 0, 0);
    this.I = new H.f(0, 1, 0);
    this.p = this.Ed(this.ua, this.gc) }
F(sf, Q);
sf.prototype.observe = function(a) {
    (a == r || !(a instanceof le)) && m(Error("Could not observe the interactor."));
    O(a, Yc, this.Th.bind(this));
    O(a, Xc, this.Qh.bind(this));
    O(a, Zc, this.ei.bind(this)) };
sf.prototype.Th = function(a) { a instanceof id || m(Error("Received no valid rotate event."));
    this.rotate(a.K) };
sf.prototype.ei = function(a) { a instanceof jd || m(Error("Received no valid zoom event."));
    a.Qa ? this.ng(a.Ha) : this.og(a.Ha) };
sf.prototype.Qh = function(a) { a instanceof hd || m(Error("Received no valid pan event."));
    this.eg(a.K) };
sf.prototype.__defineGetter__("view", u("p"));
sf.prototype.__defineSetter__("view", function(a) {
    (a == r || !(a instanceof Float32Array)) && m(Error("Invalid view matrix."));
    this.p = a });
sf.prototype.__defineGetter__("position", function() { return [this.ua.x, this.ua.y, this.ua.b] });
sf.prototype.__defineSetter__("position", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid position."));
    this.ua = new H.f(a[0], a[1], a[2]);
    this.reset() });
sf.prototype.__defineGetter__("focus", function() { return [this.gc.x, this.gc.y, this.gc.b] });
sf.prototype.__defineSetter__("focus", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid focus"));
    this.gc = new H.f(a[0], a[1], a[2]);
    this.reset() });
sf.prototype.__defineGetter__("up", function() { return [this.I.x, this.I.y, this.I.b] });
sf.prototype.__defineSetter__("up", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid up vector."));
    this.I = new H.f(a[0], a[1], a[2]);
    this.reset() });
w = sf.prototype;
w.reset = function() { this.p = this.Ed(this.ua, this.gc) };
w.rotate = function(a) { ha(a) && 2 == a.length ? a = new H.f(a[0], a[1], 0) : a instanceof H.f || m(Error("Invalid distance vector for rotate operation.")); return a };
w.eg = function(a) { ha(a) && 2 == a.length ? a = new H.f(a[0], a[1], 0) : a instanceof H.f || m(Error("Invalid distance vector for pan operation."));
    this.p[12] -= a.x;
    this.p[13] += a.y };
w.ng = function(a) { var b = 20;
    a != r && !a && (b = 1);
    this.p[14] += b };
w.og = function(a) { var b = 30;
    a != r && !a && (b = 1);
    this.p[14] -= b };
w.Ed = function(a, b) {
    (!(a instanceof H.f) || !(b instanceof H.f)) && m(Error("3D vectors required for calculating the view.")); return H.d.Oc() };
D("X.camera", sf);
D("X.camera.prototype.pan", sf.prototype.eg);
D("X.camera.prototype.rotate", sf.prototype.rotate);
D("X.camera.prototype.zoomIn", sf.prototype.ng);
D("X.camera.prototype.zoomOut", sf.prototype.og);

function tf(a) {
    function b(a, b, d) { b = 2 * b * Math.PI;
        b = ya(za(l, Math.cos(b)), za(j, Math.sin(b)));
        a = ya(ya(c, za(e, a)), za(b, f));
        d = ya(za(b, 1 - Math.abs(d)), za(g, d)); return new cc(a, d) }
    this.A = [];
    a = a || {};
    var c = new xa(a.start || [0, -1, 0]),
        d = new xa(a.end || [0, 1, 0]),
        e = Aa(d, c),
        f = a.Ta || 1;
    a = a.Re || 16;
    for (var g = Ba(e), h = 0.5 < Math.abs(g.y()), l = Ba((new xa(h, !h, 0)).Yb(g)), j = Ba(l.Yb(g)), h = new cc(c, Ca(g)), d = new cc(d, Ba(g)), k = [], p = 0; p < a; p++) {
        var t = p / a,
            v = (p + 1) / a;
        k.push(new ec([h, b(0, t, -1), b(0, v, -1)]));
        k.push(new ec([b(0, v, 0), b(0, t,
            0), b(1, t, 0), b(1, v, 0)]));
        k.push(new ec([d, b(1, v, 1), b(1, t, 1)]))
    }
    return mc(k)
}
F(tf, lc);

function uf() { W.call(this);
    this.c = "cylinder";
    this.je = [-10, -10, -10];
    this.Rd = [10, 10, 10];
    this.Rb = 10;
    this.Ub = 32;
    Ea(this, new Tc) }
F(uf, W);
uf.prototype.__defineGetter__("start", u("je"));
uf.prototype.__defineSetter__("start", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid start"));
    this.je = a });
uf.prototype.__defineGetter__("end", u("Rd"));
uf.prototype.__defineSetter__("end", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid end"));
    this.Rd = a });
uf.prototype.__defineGetter__("radius", u("Rb"));
uf.prototype.__defineSetter__("radius", function(a) { y(a) || m(Error("Invalid radius."));
    this.Rb = a });
uf.prototype.n = function() { Vc(this, new tf({ start: this.je, end: this.Rd, Ta: this.Rb, Re: this.Ub }));
    uf.s.n.call(this) };
D("X.cylinder", uf);
D("X.cylinder.prototype.modified", uf.prototype.n);

function vf(a) {
    function b(a, b) { a *= 2 * Math.PI;
        b *= Math.PI; var e = new xa(Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b));
        g.push(new cc(ya(c, za(e, d)), e)) }
    this.A = [];
    a = a || {}; var c = new xa(a.se || [0, 0, 0]),
        d = a.Ta || 1,
        e = a.Re || 16;
    a = a.Hi || 8; for (var f = [], g = [], h = 0; h < e; h++)
        for (var l = 0; l < a; l++) g = [], b(h / e, l / a), 0 < l && b((h + 1) / e, l / a), l < a - 1 && b((h + 1) / e, (l + 1) / a), b(h / e, (l + 1) / a), f.push(new ec(g)); return mc(f) }
F(vf, lc);

function wf() { W.call(this);
    this.c = "sphere";
    this.k = [0, 0, 0];
    this.Rb = 5;
    this.Ub = 32;
    this.Bg = 16;
    Ea(this, new Tc) }
F(wf, W);
wf.prototype.__defineGetter__("center", u("k"));
wf.prototype.__defineSetter__("center", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid center"));
    this.k = a });
wf.prototype.__defineGetter__("radius", u("Rb"));
wf.prototype.__defineSetter__("radius", function(a) { y(a) || m(Error("Invalid radius."));
    this.Rb = a });
wf.prototype.n = function() { Vc(this, new vf({ se: this.k, Ta: this.Rb, Re: this.Ub, Hi: this.Bg }));
    wf.s.n.call(this) };
D("X.sphere", wf);
D("X.sphere.prototype.modified", wf.prototype.n);

function ue(a) { R.call(this);
    this.c = "labelmap";
    this.ab = a }
F(ue, R);
ue.prototype.n = function() { var a = new Rc;
    a.Y = this;
    this.dispatchEvent(a);
    this.ab.n() };
D("X.labelmap", ue);

function xf(a) { this.A = [];
    a = a || {}; var b = new xa(a.se || [0, 0, 0]),
        c = !a.Ta ? [1, 1, 1] : a.Ta.length ? a.Ta : [a.Ta, a.Ta, a.Ta]; return mc([
        [
            [0, 4, 6, 2],
            [-1, 0, 0]
        ],
        [
            [1, 3, 7, 5],
            [1, 0, 0]
        ],
        [
            [0, 1, 5, 4],
            [0, -1, 0]
        ],
        [
            [2, 6, 7, 3],
            [0, 1, 0]
        ],
        [
            [0, 2, 3, 1],
            [0, 0, -1]
        ],
        [
            [4, 5, 7, 6],
            [0, 0, 1]
        ]
    ].map(function(a) { return new ec(a[0].map(function(e) { e = new xa(b.x() + c[0] * (2 * !!(e & 1) - 1), b.y() + c[1] * (2 * !!(e & 2) - 1), b.b() + c[2] * (2 * !!(e & 4) - 1)); return new cc(e, new xa(a[1])) })) })) }
F(xf, lc);

function yf() { W.call(this);
    this.c = "cube";
    this.k = [0, 0, 0];
    this.Yd = this.Xd = this.Wd = 20;
    this.Vb = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    Ea(this, new Tc) }
F(yf, W);
yf.prototype.__defineGetter__("center", u("k"));
yf.prototype.__defineSetter__("center", function(a) {
    (a == r || !ha(a) || 3 != a.length) && m(Error("Invalid center"));
    this.k = a });
yf.prototype.__defineGetter__("lengthX", u("Wd"));
yf.prototype.__defineSetter__("lengthX", function(a) { y(a) || m(Error("Invalid lengthX."));
    this.Wd = a });
yf.prototype.__defineGetter__("lengthY", u("Xd"));
yf.prototype.__defineSetter__("lengthY", function(a) { y(a) || m(Error("Invalid lengthY."));
    this.Xd = a });
yf.prototype.__defineGetter__("lengthZ", u("Yd"));
yf.prototype.__defineSetter__("lengthZ", function(a) { y(a) || m(Error("Invalid lengthZ."));
    this.Yd = a });
yf.prototype.n = function() { Vc(this, new xf({ se: this.k, Ta: [this.Wd / 2, this.Xd / 2, this.Yd / 2] }));
    yf.s.n.call(this) };
D("X.cube", yf);
D("X.cube.prototype.modified", yf.prototype.n);

function ne(a) { le.call(this, a);
    this.c = "interactor3D";
    this.Ej = s }
F(ne, le);
ne.prototype.Qc = function(a) { ne.s.Qc.call(this, a); var b = new jd;
    a.nc == r && (a.nc = 0);
    b.Qa = 0 > a.nc;
    b.Ha = q;
    this.dispatchEvent(b) };

function zf(a) { Q.call(this);
    this.c = "array";
    this.v = [];
    this.af = a }
F(zf, Q);
zf.prototype.add = function(a) { this.v.push(a); return q };
zf.prototype.clear = function() { this.v.length = 0 };

function Af(a, b, c) { var d = c - b; if (!(2 > d)) { d = b + Math.floor(d / 2);
        Af(a, b, d); for (Af(a, d, c); b < d; ++b)
            if (0 < a.af(a.v[b], a.v[d])) { var e = a.v[b];
                a.v[b] = a.v[d]; for (var f = a, g = d, h = c; g + 1 < h && 0 > f.af(f.v[g + 1], e);) { var l = f,
                        j = g + 1,
                        k = l.v[g];
                    l.v[g] = l.v[j];
                    l.v[j] = k;++g }
                f.v[g] = e } } }
zf.prototype.sort = function() { Af(this, 0, this.v.length) };

function Bf(a, b) { sf.call(this, a, b);
    this.c = "camera2D" }
F(Bf, sf);
Bf.prototype.rotate = function(a) { a = Bf.s.rotate.call(this, a); var b = new gd;
    0 < a.x ? b.le-- : 0 > a.x && b.le++;
    0 < a.y ? b.Zd++ : 0 > a.y && b.Zd--;
    this.dispatchEvent(b) };

function Cf(a, b) { sf.call(this, a, b);
    this.c = "camera3D";
    this.cf = 45;
    this.nf = H.d.Ce(H.d.Oc(), this.cf, a / b, 1, 1E4) }
F(Cf, sf);
Cf.prototype.rotate = function(a) { a = Cf.s.rotate.call(this, a); var b = -a.x / 5 * Math.PI / 180;
    a = -a.y / 5 * Math.PI / 180; var c = new H.f(this.p[1], this.p[5], this.p[9]),
        d = new H.f(this.p[0], this.p[4], this.p[8]);
    c.normalize();
    d.normalize();
    H.d.rotate(this.p, b, c.x, c.y, c.b);
    H.d.rotate(this.p, a, d.x, d.y, d.b) };
Cf.prototype.Ed = function(a, b) { var c = Cf.s.Ed.call(this, a, b);
    H.d.Tf(c, a, b, this.I); return c };
D("X.camera3D", Cf);

function Df(a) { sb.call(this);
    this.cb = a;
    this.w = [] }
F(Df, sb);
var Ef = [];

function Ff(a, b, c, d, e) { ha(c) || (Ef[0] = c, c = Ef); for (var f = 0; f < c.length; f++) { var g = O(b, c[f], d || a, e || s, a.cb || a);
        a.w.push(g) } }
Df.prototype.Ne = function() { Eb(this.w, Wb);
    this.w.length = 0 };
Df.prototype.handleEvent = function() { m(Error("EventHandler.handleEvent not implemented")) };

function Gf() {}
Gf.Ff = function() { return Gf.Nf ? Gf.Nf : Gf.Nf = new Gf };
Gf.prototype.Ch = 0;
Gf.Ff();

function Hf(a) { sb.call(this);
    this.Bb = a || Gd();
    this.si = If }
F(Hf, bc);
Hf.prototype.nh = Gf.Ff();
var If = r;
w = Hf.prototype;
w.Mf = r;
w.pc = s;
w.r = r;
w.si = r;
w.Rc = r;
w.Lc = r;
w.te = r;
w.l = u("r");
w.Pe = function(a) { this.Rc && this.Rc != a && m(Error("Method not supported"));
    Hf.s.Pe.call(this, a) };
w.vd = u("Bb");
w.lc = function() { this.r = this.Bb.createElement("div") };
w.cc = function(a) { this.Eb(a) };
w.Eb = function(a, b) { this.pc && m(Error("Component already rendered"));
    this.r || this.lc();
    a ? a.insertBefore(this.r, b || r) : this.Bb.N.body.appendChild(this.r);
    (!this.Rc || this.Rc.pc) && this.rd() };
w.rd = function() {
    function a(a) {!a.pc && a.l() && a.rd() }
    this.pc = q;
    this.Lc && Eb(this.Lc, a, n) };
w.sd = function() {
    function a(a) { a.pc && a.sd() }
    this.Lc && Eb(this.Lc, a, n);
    this.gh && this.gh.Ne();
    this.pc = s };
w.removeChild = function(a, b) { if (a) { var c = la(a) ? a : a.Mf || (a.Mf = ":" + (a.nh.Ch++).toString(36)),
            d;
        this.te && c ? (d = this.te, d = (c in d ? d[c] : n) || r) : d = r;
        a = d;
        c && a && (d = this.te, c in d && delete d[c], Hb(this.Lc, a), b && (a.sd(), a.r && Nd(a.r)), c = a, c == r && m(Error("Unable to set parent component")), c.Rc = r, Hf.s.Pe.call(c, r)) }
    a || m(Error("Child is not in parent component")); return a };

function Jf() { sb.call(this) }
F(Jf, bc);
w = Jf.prototype;
w.Xe = 0;
w.Pc = 0;
w.De = 100;
w.Cf = 0;
w.Ue = 1;
w.uh = s;
w.Bh = s;
w.Md = function(a) { a = Kf(this, a);
    this.Xe != a && (this.Xe = a + this.Cf > this.De ? this.De - this.Cf : a < this.Pc ? this.Pc : a, !this.uh && !this.Bh && this.dispatchEvent("change")) };
w.yd = function() { return Kf(this, this.Xe) };
w.xd = function() { return Kf(this, this.Pc) };
w.wd = function() { return Kf(this, this.De) };

function Kf(a, b) { return a.Ue == r ? b : a.Pc + Math.round((b - a.Pc) / a.Ue) * a.Ue };

function Lf(a) { Hf.call(this, a);
    this.Tc = new Jf;
    O(this.Tc, "change", this.hh, s, this) }
F(Lf, Hf);
var Mf = { vertical: "progress-bar-vertical", horizontal: "progress-bar-horizontal" };
w = Lf.prototype;
w.lc = function() { this.Ua = this.vd().lc("div", "progress-bar-thumb"); var a = Mf[this.dg];
    this.r = this.vd().lc("div", a, this.Ua);
    Of(this);
    a = this.xd();
    this.l().setAttribute("aria-valuemin", a);
    a = this.wd();
    this.l().setAttribute("aria-valuemax", a) };
w.rd = function() { Lf.s.rd.call(this);
    L && 7 > ib && O(this.l(), "resize", this.Pd, s, this);
    this.Pd(); var a = this.l();
    a.setAttribute("role", "progressbar");
    a.setAttribute("aria-live", "polite") };
w.sd = function() { Lf.s.sd.call(this);
    L && 7 > ib && Vb(this.l(), "resize", this.Pd, s, this) };
w.yd = function() { return this.Tc.yd() };
w.Md = function(a) { this.Tc.Md(a);
    this.l() && Of(this) };

function Of(a) { var b = a.yd();
    a.l().setAttribute("aria-valuenow", b) }
w.xd = function() { return this.Tc.xd() };
w.wd = function() { return this.Tc.wd() };
w.dg = "horizontal";
w.hh = function() { this.Pd();
    this.dispatchEvent("change") };
w.Pd = function() { if (this.Ua) { var a = this.xd(),
            b = this.wd(),
            a = (this.yd() - a) / (b - a),
            b = Math.round(100 * a); "vertical" == this.dg ? L && 7 > ib ? (this.Ua.style.top = 0, this.Ua.style.height = "100%", b = this.Ua.offsetHeight, a = Math.round(a * b), this.Ua.style.top = b - a + "px", this.Ua.style.height = a + "px") : (this.Ua.style.top = 100 - b + "%", this.Ua.style.height = b + "%") : this.Ua.style.width = b + "%" } };

function Pf(a, b) {
    a == r && m(Error("No valid parent element."));
    b == r && m(Error("Invalid initial value."));
    Lf.call(this);
    this.c = "progressbar";
    this.ma = a;
    this.mf = "";
    this.Xc = this.$a = r;
    this.Hb = [];
    var c;
    c = ".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n";
    c += "  background: white;\n";
    c += "  padding: 1px;\n";
    c += "  overflow: hidden;\n";
    c += "  margin: 2px;\n";
    c += "  width: 100px;\n";
    c += "  height: 5px;\n";
    c += "}";
    var d;
    d = ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n";
    d += "  overflow: hidden;\n";
    d += "  width: 0%;\n";
    d += "  height: 100%;\n";
    d += "}";
    var e;
    e = ".progress-bar-thumb-done {\n  background: #57E964;\n}";
    this.Hb = [c, d, e];
    this.Md(b);
    this.ze()
}
F(Pf, Lf);
Pf.prototype.ze = function() {
    if ("static" == this.ma.style.position || "" == this.ma.style.position) this.mf = this.ma.style.position, this.ma.style.position = "relative";
    var a = document.getElementsByTagName("head")[0],
        b = Ld("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(String(this.Hb[0])),
        d = document.createTextNode(String(this.Hb[1])),
        e = document.createTextNode(String(this.Hb[2]));
    a.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    this.$a = b;
    this.cc(this.ma);
    a = this.l();
    a.style.position =
        "absolute";
    a.style.top = (this.ma.clientHeight - 5) / 2 + "px";
    a.style.left = (this.ma.clientWidth - 100) / 2 + "px";
    a.classList.add("xtk-progress-bar")
};

function Qf(a) { var b = a.l().style.top,
        c = a.l().style.left;
    Nd(a.l()); var d = new Pf(a.ma, 100),
        e = d.l();
    e.style.position = "absolute";
    e.style.top = b;
    e.style.left = c;
    e.classList.add("xtk-progress-bar");
    (e.firstElementChild != n ? e.firstElementChild : Od(e.firstChild)).classList.add("progress-bar-thumb-done");
    a.Xc = d }
Pf.prototype.Ad = function() { this.$a && Nd(this.$a);
    this.l() && Nd(this.l());
    this.Xc && Nd(this.Xc.l());
    this.Xc = this.$a = r;
    this.ma.style.position = this.mf };

function Rf(a, b, c) { ma(a) ? c && (a = ua(a, c)) : a && "function" == typeof a.handleEvent ? a = ua(a.handleEvent, a) : m(Error("Invalid listener argument")); return 2147483647 < b ? -1 : ca.setTimeout(a, b || 0) };

function Sf() { Q.call(this);
    this.c = "renderer";
    this.q = window.document.body;
    this.M = this.q.clientWidth;
    this.G = this.q.clientHeight;
    this.Kb = this.t = this.ga = r;
    this.Ya = new zf(Sc);
    this.Ra = [];
    this.C = r;
    this.de = this.ad = this.bd = s;
    this.a = this.na = r;
    this.F = { PROGRESSBAR_ENABLED: q, INTERMEDIATE_RENDERING: s };
    this.Ze = -1;
    window.console.log("XTK release 10 -- 2013-02-14 16:30:17 -- http://www.goXTK.com -- @goXTK") }
F(Sf, Q);
w = Sf.prototype;
w.Rh = function(a) { this.na && this.na.Md(100 * a.sf) };
w.Hh = function(a) { a != r && a instanceof Rc && a.Y && this.Va(a.Y) };
w.Je = function(a) {
    (a == r || !(a instanceof ld)) && m(Error("Invalid hover event.")) };
w.Sh = function() { var a = Jd(this.q);
    this.M = a.clientWidth;
    this.G = a.clientHeight;
    a = Jd(this.ga);
    a.width = this.M;
    a.height = this.G; "renderer3D" == this.c && (this.a.viewport(0, 0, this.M, this.G), this.t.nf = H.d.Ce(H.d.Oc(), this.t.cf, this.ga.width / this.ga.height, 1, 1E4));
    this.qc() };
w.Ke = function(a) {
    (a == r || !(a instanceof kd)) && m(Error("Invalid scroll event.")) };
Sf.prototype.__defineGetter__("config", u("F"));
Sf.prototype.__defineGetter__("interactor", u("Kb"));
Sf.prototype.__defineGetter__("camera", u("t"));
Sf.prototype.__defineGetter__("loadingCompleted", u("ad"));
Sf.prototype.__defineGetter__("container", u("q"));
Sf.prototype.__defineSetter__("container", function(a) { a == r && m(Error("An ID to a valid container (<div>..) is required.")); var b = a;
    la(b) && (b = Jd(a));
    na(b) && 1 == b.nodeType || m(Error("Could not find the given container."));
    this.q = b });
w = Sf.prototype;
w.qc = function() { this.t.reset() };
w.ea = function(a) {
    var b = Ld("canvas");
    this.q.appendChild(b);
    this.M = this.q.clientWidth;
    this.G = this.q.clientHeight;
    b.width = this.M;
    b.height = this.G;
    try { var c = b.getContext(a);
        c || m(Error()) } catch (d) {
        var e = "Sorry, " + a + ' context is <strong>not supported</strong> on this machine! See <a href="http://crash.goXTK.com" target="_blank">http://crash.goXTK.com</a> for requirements..';
        this.q.innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">' + e + "</p>";
        m(Error(e))
    }
    this.C = new of;
    O(this.C, dd, this.Rh.bind(this));
    this.ga = b;
    this.a = c;
    b = new ne(this.ga);
    "2d" == a && (b = new pe(this.ga));
    b.ea();
    O(b, ad, this.qc.bind(this));
    O(b, ed, this.Je.bind(this));
    O(b, $c, this.Ke.bind(this));
    this.Kb = b;
    b = new Cf(this.M, this.G);
    "2d" == a && (b = new Bf(this.M, this.G));
    b.observe(this.Kb);
    this.t = b;
    O(window, "resize", this.Sh, s, this)
};
w.add = function(a) {
    (a instanceof yf || a instanceof wf || a instanceof uf) && a.n();
    this.Ra.push(a);
    this.Va(a) };
w.Va = function(a) {
    (!this.ga || !this.a) && m(Error("The renderer was not initialized properly."));
    a == r && (window.console.log(a), m(Error("Illegal object."))); var b;
    b = oa(a); var c = Ob[b]; if (c) { var d = ga(cd),
            e = ga(n);
        d && e ? (c = Nb[cd], b = !!c && !!c[n] && b in c[n]) : b = !d && !e ? q : Gb(c, function(a) { return d && a.type == cd || e && a.capture == n }) } else b = s;
    b || O(a, cd, this.Hh.bind(this)) };
w.get = function(a) { a == r && m(Error("Invalid object id.")); for (var b = this.Ya.v, c = b.length, d = 0, d = 0; d < c; d++)
        if (b[d].sa == a) return b[d];
    return r };
w.cc = function() {
    (!this.ga || !this.a) && m(Error("The renderer was not initialized properly."));
    if (this.pf == r) {
        if (tc(this.C.ic)) { if (this.F.PROGRESSBAR_ENABLED && !this.na && (this.na = new Pf(this.q, 3)), this.de = this.ad = s, this.pf = Rf(function() { this.pf = r;
                    this.cc() }.bind(this), 100), !this.F.INTERMEDIATE_RENDERING) return } else if (!this.ad && !this.de && (this.de = q, eval("this.onShowtime()"), this.ad = q), this.na) {
            this.F.PROGRESSBAR_ENABLED && (this.na && !this.$e) && (Qf(this.na), this.$e = Rf(function() {
                this.$e = r;
                this.na && (this.na.Ad(),
                    this.na = r);
                this.cc()
            }.bind(this), 700));
            return
        }
        this.Ze = window.requestAnimationFrame(this.cc.bind(this), this.ga);
        eval("this.onRender()");
        this.Eb(s, q)
    }
};
w.cg = aa();
w.ag = aa();
w.Eb = aa();
w.pd = function() { window.cancelAnimationFrame(this.Ze);
    this.C && (delete this.C, this.C = r);
    this.na && (this.na.Ad(), delete this.na, this.na = r);
    this.Ya.clear();
    delete this.Ya;
    this.Ra.length = 0;
    delete this.Ra;
    delete this.C;
    this.C = r;
    delete this.t;
    this.t = r;
    delete this.Kb;
    this.Kb = r;
    delete this.a;
    this.a = r;
    Nd(this.ga);
    delete this.ga;
    this.ga = r };

function Tf() {
    Q.call(this);
    this.c = "shaders";
    this.kd = "";
    var a;
    a = "precision mediump float;\n\n";
    a += "attribute vec3 vertexPosition;\n";
    a += "attribute vec3 vertexNormal;\n";
    a += "attribute vec3 vertexColor;\n";
    a += "attribute vec2 vertexTexturePos;\n";
    a += "attribute float vertexScalar;\n";
    a += "\n";
    a += "uniform mat4 view;\n";
    a += "uniform mat4 perspective;\n";
    a += "uniform vec3 center;\n";
    a += "uniform mat4 objectTransform;\n";
    a += "uniform bool useObjectColor;\n";
    a += "uniform bool useScalars;\n";
    a += "uniform bool scalarsReplaceMode;\n";
    a += "uniform float scalarsMin;\n";
    a += "uniform float scalarsMax;\n";
    a += "uniform vec3 scalarsMinColor;\n";
    a += "uniform vec3 scalarsMaxColor;\n";
    a += "uniform float scalarsMinThreshold;\n";
    a += "uniform float scalarsMaxThreshold;\n";
    a += "uniform int scalarsInterpolation;\n";
    a += "uniform vec3 objectColor;\n";
    a += "uniform float pointSize;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += "  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * ";
    a += "mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * ";
    a += "vertexNormal;\n";
    a += "  fVertexNormal = vertexNormal;\n";
    a += "  fDiscardNow = 0.0;\n";
    a += "  vec3 vertexPosition2 = vertexPosition - center;\n";
    a += "  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n";
    a += "  fragmentTexturePos = vertexTexturePos;\n";
    a += "  if (useScalars) {\n";
    a += "    float scalarValue = vertexScalar;\n";
    a += "    if (scalarValue < scalarsMinThreshold || scalarValue > scalarsMaxThreshold) {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        fragmentColor = objectColor;\n";
    a += "      } else {\n";
    a += "        fDiscardNow = 1.0;\n";
    a += "      }\n";
    a += "    } else {\n";
    a += "      if (scalarsReplaceMode) {\n";
    a += "        if (scalarsInterpolation == 1) {\n";
    a += "            vec3 zeroMaxColor;\n";
    a += "            vec3 zeroMinColor;\n";
    a +=
        "            zeroMaxColor[0] = scalarsMaxColor[0]*0.33;\n";
    a += "            zeroMaxColor[1] = scalarsMaxColor[1]*0.33;\n";
    a += "            zeroMaxColor[2] = scalarsMaxColor[2]*0.33;\n";
    a += "            zeroMinColor[0] = scalarsMinColor[0]*0.33;\n";
    a += "            zeroMinColor[1] = scalarsMinColor[1]*0.33;\n";
    a += "            zeroMinColor[2] = scalarsMinColor[2]*0.33;\n";
    a += "            if(scalarValue < 0.0) {fragmentColor = scalarValue/(scalarsMin) * scalarsMinColor + (1.0 - scalarValue/(scalarsMin)) * (zeroMinColor);}\n";
    a += "            else {fragmentColor = scalarValue/(scalarsMax) * scalarsMaxColor + (1.0 - scalarValue/(scalarsMax)) * (zeroMaxColor);}\n";
    a += "        } else {\n";
    a += "            fragmentColor = scalarValue * scalarsMaxColor + (1.0 - scalarValue) * scalarsMinColor;\n";
    a += "          }\n";
    a += "      } else {\n";
    a += "        fragmentColor = vertexColor;\n";
    a += "      }\n";
    a += "    }\n";
    a += "  } else if (useObjectColor) {\n";
    a += "    fragmentColor = objectColor;\n";
    a += "  } else {\n";
    a += "    fragmentColor = vertexColor;\n";
    a += "  }\n";
    a += "  gl_PointSize = pointSize;\n";
    a += "  gl_Position = perspective * fVertexPosition;\n";
    this.kd = a += "}\n";
    this.Yc = "";
    a = "precision mediump float;\n\n";
    a += "uniform bool usePicking;\n";
    a += "uniform bool useTexture;\n";
    a += "uniform bool volumeTexture;\n";
    a += "uniform bool useLabelMapTexture;\n";
    a += "uniform sampler2D textureSampler;\n";
    a += "uniform sampler2D textureSampler2;\n";
    a += "uniform float objectOpacity;\n";
    a += "uniform float labelmapOpacity;\n";
    a += "uniform float volumeLowerThreshold;\n";
    a +=
        "uniform float volumeUpperThreshold;\n";
    a += "uniform float volumeScalarMin;\n";
    a += "uniform float volumeScalarMax;\n";
    a += "uniform vec3 volumeScalarMinColor;\n";
    a += "uniform vec3 volumeScalarMaxColor;\n";
    a += "uniform float volumeWindowLow;\n";
    a += "uniform float volumeWindowHigh;\n";
    a += "\n";
    a += "varying float fDiscardNow;\n";
    a += "varying vec4 fVertexPosition;\n";
    a += "varying vec3 fragmentColor;\n";
    a += "varying vec2 fragmentTexturePos;\n";
    a += "varying vec3 fVertexNormal;\n";
    a += "varying vec3 fTransformedVertexNormal;\n";
    a += "\n";
    a += "void main(void) {\n";
    a += " if (fDiscardNow > 0.0) {\n";
    a += "   discard;\n";
    a += " }\n";
    a += " if (usePicking) {\n";
    a += "   gl_FragColor = vec4(fragmentColor, 1.0);\n";
    a += " } else if (useTexture) {\n";
    a += "   vec4 texture1 = texture2D(textureSampler,fragmentTexturePos);\n";
    a += "   vec4 textureSum = texture1;\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _windowLow = (volumeWindowLow / volumeScalarMax);\n";
    a += "     float _windowHigh = (volumeWindowHigh / volumeScalarMax);\n";
    a += "     vec3 _minrange = vec3(_windowLow,_windowLow,_windowLow);\n";
    a += "     vec3 _maxrange = vec3(_windowHigh,_windowHigh,_windowHigh);\n";
    a += "     vec3 fac = _maxrange - _minrange;\n";
    a += "     textureSum = vec4((textureSum.r - _minrange)/fac,1);\n";
    a += "     textureSum = textureSum.r * vec4(volumeScalarMaxColor,1) + (1.0 - textureSum.r) * vec4(volumeScalarMinColor,1);\n";
    a += "   }\n";
    a += "   if (useLabelMapTexture) {\n";
    a += "     vec4 texture2 = texture2D(textureSampler2,fragmentTexturePos);\n";
    a += "     if (texture2.a > 0.0) {\n";
    a += "       if (labelmapOpacity < 1.0) {\n";
    a += "         textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n";
    a += "       } else {\n";
    a += "         textureSum = texture2;\n";
    a += "       }\n";
    a += "     }\n";
    a += "   }\n";
    a += "   if (volumeTexture) {\n";
    a += "     float _volumeLowerThreshold = (volumeLowerThreshold / volumeScalarMax);\n";
    a += "     float _volumeUpperThreshold = (volumeUpperThreshold / volumeScalarMax);\n";
    a += "     if (texture1.r < _volumeLowerThreshold ||\n";
    a += "         texture1.r > _volumeUpperThreshold) {\n";
    a += "       discard;\n";
    a += "     };\n";
    a += "   };\n";
    a += "   gl_FragColor = textureSum;\n";
    a += "   gl_FragColor.a = objectOpacity;\n";
    a += " } else {\n";
    a += "   vec3 nNormal = normalize(fTransformedVertexNormal);\n";
    a += "   if (fVertexNormal == vec3(0.0,0.0,0.0)) {\n";
    a += "     gl_FragColor = vec4(fragmentColor,1.0);\n";
    a += "     return;\n";
    a += "   }\n";
    a += "   vec3 light = vec3(0.0, 0.0, 1.0);\n";
    a += "   vec3 lightDirection = vec3(0,0,-10);\n";
    a += "   lightDirection = normalize(lightDirection);\n";
    a += "   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n";
    a += "   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n";
    a += "   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n";
    a += "   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n";
    a += "   float ambient = 0.3;\n";
    a += "   gl_FragColor = vec4(fragmentColor * ambient +\n";
    a += "                       fragmentColor * diffuse +\n";
    a += "                       vec3(0.2, 0.2, 0.2) * specular,\n";
    a += "                       objectOpacity);\n";
    a += " }\n";
    this.Yc = a += "}\n"
}
F(Tf, Q);
var Uf = { rj: "vertexPosition", qj: "vertexNormal", pj: "vertexColor", tj: "vertexTexturePos", sj: "vertexScalar" },
    Vf = {
        uj: "view",
        Zi: "perspective",
        Ri: "center",
        Yi: "objectTransform",
        lj: "useObjectColor",
        Wi: "objectColor",
        nj: "useScalars",
        hj: "scalarsReplaceMode",
        ej: "scalarsMin",
        bj: "scalarsMax",
        fj: "scalarsMinColor",
        cj: "scalarsMaxColor",
        gj: "scalarsMinThreshold",
        dj: "scalarsMaxThreshold",
        aj: "scalarsInterpolation",
        $i: "pointSize",
        Xi: "objectOpacity",
        Vi: "normal",
        mj: "usePicking",
        oj: "useTexture",
        kj: "useLabelMapTexture",
        Ti: "labelmapOpacity",
        ij: "textureSampler",
        jj: "textureSampler2",
        vj: "volumeLowerThreshold",
        Bj: "volumeUpperThreshold",
        yj: "volumeScalarMin",
        wj: "volumeScalarMax",
        zj: "volumeScalarMinColor",
        xj: "volumeScalarMaxColor",
        Dj: "volumeWindowLow",
        Cj: "volumeWindowHigh",
        Aj: "volumeTexture"
    };

function Wf(a, b, c) { a == r && m(Error("Invalid GL Buffer."));
    b == r && m(Error("Invalid number of items."));
    c == r && m(Error("Invalid item size."));
    Q.call(this);
    this.c = "buffer";
    this.ha = a;
    this.nb = b;
    this.ob = c }
F(Wf, Q);

function Xf(a, b, c, d, e, f, g, h) {
    var l, j;
    if (l = c.offsetParent) { var k = "HTML" == l.tagName || "BODY" == l.tagName; if (!k || "static" != Td(l, "position")) j = Yd(l), k || (k = (k = Zd(l)) && bb ? -l.scrollLeft : k && (!L || !pb("8")) && "visible" != Td(l, "overflowX") ? l.scrollWidth - l.clientWidth - l.scrollLeft : l.scrollLeft, j = zd(j, new yd(k, l.scrollTop))) }
    l = j || new yd;
    j = Yd(a);
    k = ae(a);
    j = new Cd(j.x, j.y, k.width, k.height);
    (k = Xd(a)) && j.Of(new Cd(k.left, k.top, k.right - k.left, k.bottom - k.top));
    var k = Gd(a),
        p = Gd(c);
    if (k.N != p.N) {
        var t = k.N.body,
            p = p.N.parentWindow ||
            p.N.defaultView,
            v = new yd(0, 0),
            z = Id(t) ? Id(t).parentWindow || Id(t).defaultView : window,
            A = t;
        do {
            var C;
            if (z == p) C = Yd(A);
            else {
                C = A;
                var E = new yd;
                if (1 == C.nodeType) {
                    if (C.getBoundingClientRect) { var x = Vd(C);
                        E.x = x.left;
                        E.y = x.top } else { var x = Rd(Gd(C)),
                            B = Yd(C);
                        E.x = B.x - x.x;
                        E.y = B.y - x.y }
                    bb && !pb(12) && (x = n, x = n, L ? x = "-ms-transform" : db ? x = "-webkit-transform" : ab ? x = "-o-transform" : bb && (x = "-moz-transform"), B = n, x && (B = Td(C, x)), B || (B = Td(C, "transform")), B ? (C = B.match(he), x = !C ? new yd(0, 0) : new yd(parseFloat(C[1]), parseFloat(C[2]))) : x =
                        new yd(0, 0), E = new yd(E.x + x.x, E.y + x.y))
                } else x = ma(C.dh), B = C, C.targetTouches ? B = C.targetTouches[0] : x && C.Ma.targetTouches && (B = C.Ma.targetTouches[0]), E.x = B.clientX, E.y = B.clientY;
                C = E
            }
            v.x += C.x;
            v.y += C.y
        } while (z && z != p && (A = z.frameElement) && (z = z.parent));
        t = zd(v, Yd(t));
        L && !Qd(k) && (t = zd(t, Rd(k)));
        j.left += t.x;
        j.top += t.y
    }
    a = (b & 4 && Zd(a) ? b ^ 2 : b) & -5;
    b = new yd(a & 2 ? j.left + j.width : j.left, a & 1 ? j.top + j.height : j.top);
    b = zd(b, l);
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    var G;
    if (g && (G = Xd(c))) G.top -= l.y, G.right -= l.x, G.bottom -=
        l.y, G.left -= l.x;
    return Yf(b, c, d, f, G, g, h)
}

function Yf(a, b, c, d, e, f, g) {
    a = a.h();
    var h = 0,
        l = (c & 4 && Zd(b) ? c ^ 2 : c) & -5;
    c = ae(b);
    g = g ? g.h() : c.h();
    if (d || 0 != l) l & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left), l & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
    if (f) {
        if (e) {
            h = a;
            d = 0;
            if (65 == (f & 65) && (h.x < e.left || h.x >= e.right)) f &= -2;
            if (132 == (f & 132) && (h.y < e.top || h.y >= e.bottom)) f &= -5;
            h.x < e.left && f & 1 && (h.x = e.left, d |= 1);
            h.x < e.left && (h.x + g.width > e.right && f & 16) && (g.width = Math.max(g.width - (h.x + g.width - e.right), 0), d |= 4);
            h.x + g.width > e.right && f & 1 && (h.x = Math.max(e.right - g.width,
                e.left), d |= 1);
            f & 2 && (d |= (h.x < e.left ? 16 : 0) | (h.x + g.width > e.right ? 32 : 0));
            h.y < e.top && f & 4 && (h.y = e.top, d |= 2);
            h.y <= e.top && (h.y + g.height < e.bottom && f & 32) && (g.height = Math.max(g.height - (e.top - h.y), 0), h.y = 0, d |= 8);
            h.y >= e.top && (h.y + g.height > e.bottom && f & 32) && (g.height = Math.max(g.height - (h.y + g.height - e.bottom), 0), d |= 8);
            h.y + g.height > e.bottom && f & 4 && (h.y = Math.max(e.bottom - g.height, e.top), d |= 2);
            f & 8 && (d |= (h.y < e.top ? 64 : 0) | (h.y + g.height > e.bottom ? 128 : 0));
            h = d
        } else h = 256;
        if (h & 496) return h
    }
    f = a;
    e = bb && (Ta || gb) && pb("1.9");
    f instanceof
    yd ? (a = f.x, f = f.y) : (a = f, f = n);
    b.style.left = $d(a, e);
    b.style.top = $d(f, e);
    if (!(c == g || (!c || !g ? 0 : c.width == g.width && c.height == g.height))) a = Qd(Gd(Id(b))), L && (!a || !pb("8")) ? (c = b.style, a ? (L ? (a = ee(b, "paddingLeft"), e = ee(b, "paddingRight"), f = ee(b, "paddingTop"), d = ee(b, "paddingBottom"), a = new Ad(f, e, d, a)) : (a = Sd(b, "paddingLeft"), e = Sd(b, "paddingRight"), f = Sd(b, "paddingTop"), d = Sd(b, "paddingBottom"), a = new Ad(parseFloat(f), parseFloat(e), parseFloat(d), parseFloat(a))), L ? (e = ge(b, "borderLeft"), f = ge(b, "borderRight"), d = ge(b, "borderTop"),
        b = ge(b, "borderBottom"), b = new Ad(d, f, b, e)) : (e = Sd(b, "borderLeftWidth"), f = Sd(b, "borderRightWidth"), d = Sd(b, "borderTopWidth"), b = Sd(b, "borderBottomWidth"), b = new Ad(parseFloat(d), parseFloat(f), parseFloat(b), parseFloat(e))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height)) : (b = b.style, bb ? b.MozBoxSizing = "border-box" : db ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(g.width, 0) + "px",
        b.height = Math.max(g.height, 0) + "px");
    return h
};

function Zf() {}
Zf.prototype.Oa = aa();

function $f(a, b, c) { this.element = a;
    this.zf = b;
    this.fi = c }
F($f, Zf);
$f.prototype.Oa = function(a, b, c) { Xf(this.element, this.zf, a, b, n, c, this.fi) };

function ag(a, b) { sb.call(this);
    this.cb = new Df(this);
    this.Oe(a || r);
    b && (this.rc = b) }
F(ag, bc);
w = ag.prototype;
w.r = r;
w.Gg = q;
w.tf = r;
w.oa = s;
w.yi = s;
w.Be = -1;
w.Rf = -1;
w.mh = s;
w.Vg = q;
w.rc = "toggle_display";
w.l = u("r");
w.Oe = function(a) { this.oa && m(Error("Can not change this state of the popup while showing."));
    this.r = a };

function bg(a, b) {
    a.Od && a.Od.stop();
    a.zd && a.zd.stop();
    if (b) {
        if (!a.oa && a.He()) {
            a.r || m(Error("Caller must call setElement before trying to show the popup"));
            a.Oa();
            var c = Id(a.r);
            a.mh && Ff(a.cb, c, "keydown", a.Fh, q);
            if (a.Gg)
                if (Ff(a.cb, c, "mousedown", a.Zf, q), L) { var d; try { d = c.activeElement } catch (e) {} for (; d && "IFRAME" == d.nodeName;) { try { var f = d.contentDocument || d.contentWindow.document } catch (g) { break }
                        c = f;
                        d = c.activeElement }
                    Ff(a.cb, c, "mousedown", a.Zf, q);
                    Ff(a.cb, c, "deactivate", a.Yf) } else Ff(a.cb, c, "blur", a.Yf);
                "toggle_display" ==
            a.rc ? (a.r.style.visibility = "visible", ce(a.r, q)) : "move_offscreen" == a.rc && a.Oa();
            a.oa = q;
            a.Od ? (Sb(a.Od, "end", a.bg, s, a), a.Od.play()) : a.bg()
        }
    } else cg(a)
}
w.Oa = ea;

function cg(a, b) { if (!a.oa || !a.dispatchEvent({ type: "beforehide", target: b })) return s;
    a.cb && a.cb.Ne();
    a.oa = s;
    a.Rf = wa();
    a.zd ? (Sb(a.zd, "end", va(a.yf, b), s, a), a.zd.play()) : a.yf(b); return q }
w.yf = function(a) { "toggle_display" == this.rc ? this.yi ? Rf(this.Jf, 0, this) : this.Jf() : "move_offscreen" == this.rc && (this.r.style.top = "-10000px");
    this.Ie(a) };
w.Jf = function() { this.r.style.visibility = "hidden";
    ce(this.r, s) };
w.He = function() { return this.dispatchEvent("beforeshow") };
w.bg = function() { this.Be = wa();
    this.Rf = -1;
    this.dispatchEvent("show") };
w.Ie = function(a) { this.dispatchEvent({ type: "hide", target: a }) };
w.Zf = function(a) { a = a.target;!Pd(this.r, a) && ((!this.tf || Pd(this.tf, a)) && !(150 > wa() - this.Be)) && cg(this, a) };
w.Fh = function(a) { 27 == a.keyCode && cg(this, a.target) && (a.preventDefault(), a.stopPropagation()) };
w.Yf = function(a) { if (this.Vg) { var b = Id(this.r); if (L || ab) { if (a = b.activeElement, !a || Pd(this.r, a) || "BODY" == a.tagName) return } else if (a.target != b) return;
        150 > wa() - this.Be || cg(this) } };

function dg(a, b) { this.ue = a instanceof yd ? a : new yd(a, b) }
F(dg, Zf);
dg.prototype.Oa = function(a, b, c, d) { Xf(Ud(a), 0, a, b, this.ue, c, r, d) };

function eg(a, b) { this.ii = 4;
    this.Fd = b || n;
    ag.call(this, a) }
F(eg, ag);
eg.prototype.Oa = function() { if (this.Fd) { var a = !this.oa && "move_offscreen" != this.rc,
            b = this.l();
        a && (b.style.visibility = "hidden", ce(b, q));
        this.Fd.Oa(b, this.ii, this.Oj);
        a && ce(b, s) } };

function fg(a) { this.J = new rc;
    a && this.me(a) }

function gg(a) { var b = typeof a; return "object" == b && a || "function" == b ? "o" + oa(a) : b.substr(0, 1) + a }
w = fg.prototype;
w.ud = function() { return this.J.ud() };
w.add = function(a) { this.J.set(gg(a), a) };
w.me = function(a) { a = qc(a); for (var b = a.length, c = 0; c < b; c++) this.add(a[c]) };
w.Ne = function(a) { a = qc(a); for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]) };
w.remove = function(a) { return this.J.remove(gg(a)) };
w.clear = function() { this.J.clear() };
w.contains = function(a) { a = gg(a); return uc(this.J.J, a) };
w.Of = function(a) { var b = new fg;
    a = qc(a); for (var c = 0; c < a.length; c++) { var d = a[c];
        this.contains(d) && b.add(d) } return b };
w.bb = function() { return this.J.bb() };
w.h = function() { return new fg(this) };

function hg(a, b, c) { this.Bb = c || (a ? Gd(Jd(a)) : Gd());
    eg.call(this, this.Bb.lc("div", { style: "position:absolute;display:none;" }));
    this.ve = new yd(1, 1);
    this.qd = new fg;
    a && ig(this, a); if (b != r)
        if (a = this.l(), "textContent" in a) a.textContent = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) { for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b } else { for (; c = a.firstChild;) a.removeChild(c);
        a.appendChild(Id(a).createTextNode(String(b))) } }
F(hg, eg);
var jg = [];
w = hg.prototype;
w.wa = r;
w.className = "goog-tooltip";
w.jg = 500;
w.lh = 0;
w.vd = u("Bb");

function ig(a, b) { b = Jd(b);
    a.qd.add(b);
    O(b, "mouseover", a.kh, s, a);
    O(b, "mouseout", a.Gf, s, a);
    O(b, "mousemove", a.jh, s, a);
    O(b, "focus", a.ih, s, a);
    O(b, "blur", a.Gf, s, a) }
w.Oe = function(a) { var b = this.l();
    b && Nd(b);
    hg.s.Oe.call(this, a);
    a && (b = this.Bb.N.body, b.insertBefore(a, b.lastChild)) };
w.He = function() { if (!ag.prototype.He.call(this)) return s; if (this.anchor)
        for (var a, b = 0; a = jg[b]; b++) Pd(a.l(), this.anchor) || bg(a, s);
    0 <= Db(jg, this) || jg.push(this);
    a = this.l();
    a.className = this.className;
    kg(this);
    O(a, "mouseover", this.If, s, this);
    O(a, "mouseout", this.Hf, s, this);
    lg(this); return q };
w.Ie = function() { Hb(jg, this); for (var a = this.l(), b, c = 0; b = jg[c]; c++) b.anchor && Pd(a, b.anchor) && bg(b, s);
    this.fg && mg(this.fg);
    Vb(a, "mouseover", this.If, s, this);
    Vb(a, "mouseout", this.Hf, s, this);
    this.anchor = n; if (0 == (this.gb ? this.oa ? 4 : 1 : this.oc ? 3 : this.oa ? 2 : 0)) this.Kd = s;
    ag.prototype.Ie.call(this) };
w.Wf = function(a, b) { this.anchor == a && this.qd.contains(this.anchor) && (this.Kd || !this.Rj ? (bg(this, s), this.oa || (this.anchor = a, this.Fd = b || ng(this, 0) || n, this.oa && this.Oa(), bg(this, q))) : this.anchor = n);
    this.gb = n };
w.Ah = function(a) { this.oc = n;
    a == this.anchor && (this.wa == r || this.wa != this.l() && !this.qd.contains(this.wa)) && (!this.vf || !this.vf.wa) && bg(this, s) };

function og(a, b) { var c = Rd(a.Bb);
    a.ve.x = b.clientX + c.x;
    a.ve.y = b.clientY + c.y }
w.kh = function(a) { var b = qg(this, a.target);
    this.wa = b;
    kg(this);
    b != this.anchor && (this.anchor = b, this.gb || (this.gb = Rf(ua(this.Wf, this, b, n), this.jg)), rg(this), og(this, a)) };

function qg(a, b) { try { for (; b && !a.qd.contains(b);) b = b.parentNode; return b } catch (c) { return r } }
w.jh = function(a) { og(this, a);
    this.Kd = q };
w.ih = function(a) { this.wa = a = qg(this, a.target);
    this.Kd = q; if (this.anchor != a) { this.anchor = a; var b = ng(this, 1);
        kg(this);
        this.gb || (this.gb = Rf(ua(this.Wf, this, a, b), this.jg));
        rg(this) } };

function ng(a, b) { if (0 == b) { var c = a.ve.h(); return new sg(c) } return new tg(a.wa) }

function rg(a) { if (a.anchor)
        for (var b, c = 0; b = jg[c]; c++) Pd(b.l(), a.anchor) && (b.vf = a, a.fg = b) }
w.Gf = function(a) { var b = qg(this, a.target),
        c = qg(this, a.relatedTarget);
    b != c && (b == this.wa && (this.wa = r), lg(this), this.Kd = s, this.oa && (!a.relatedTarget || !Pd(this.l(), a.relatedTarget)) ? mg(this) : this.anchor = n) };
w.If = function() { var a = this.l();
    this.wa != a && (kg(this), this.wa = a) };
w.Hf = function(a) { var b = this.l(); if (this.wa == b && (!a.relatedTarget || !Pd(b, a.relatedTarget))) this.wa = r, mg(this) };

function lg(a) { a.gb && (ca.clearTimeout(a.gb), a.gb = n) }

function mg(a) { if (2 == (a.gb ? a.oa ? 4 : 1 : a.oc ? 3 : a.oa ? 2 : 0)) a.oc = Rf(ua(a.Ah, a, a.anchor), a.lh) }

function kg(a) { a.oc && (ca.clearTimeout(a.oc), a.oc = n) }

function sg(a, b) { dg.call(this, a, b) }
F(sg, dg);
sg.prototype.Oa = function(a, b, c) { b = Ud(a);
    b = Xd(b);
    c = c ? new Ad(c.top + 10, c.right, c.bottom, c.left + 10) : new Ad(10, 0, 0, 10);
    Yf(this.ue, a, 4, c, b, 9) & 496 && Yf(this.ue, a, 4, c, b, 5) };

function tg(a) { $f.call(this, a, 3) }
F(tg, $f);
tg.prototype.Oa = function(a, b, c) { var d = new yd(10, 0);
    Xf(this.element, this.zf, a, b, d, c, 9) & 496 && Xf(this.element, 2, a, 1, d, c, 5) };

function ug(a, b, c, d) { a == r && m(Error("No valid parent element."));
    (!y(b) || !y(c)) && m(Error("Invalid coordinates."));
    (d == r || !(d instanceof le)) && m(Error("Invalid interactor."));
    hg.call(this);
    this.c = "caption";
    this.ma = a;
    this.md = b;
    this.nd = c;
    this.Kb = d;
    this.$a = r;
    this.Hb = [];
    a = ".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n";
    a += "  border: 1px solid infotext;\n";
    a += "  padding: 1px;\n";
    a += "  font-family: sans-serif;\n";
    a += "}";
    this.Hb = [a];
    Sb(d, fd, this.Ad.bind(this));
    this.ze() }
F(ug, hg);
ug.prototype.ze = function() { if ("static" == this.ma.style.position || "" == this.ma.style.position) this.ma.style.position = "relative"; var a = document.getElementsByTagName("head")[0],
        b = Ld("style");
    b.type = "text/css";
    b.media = "screen"; var c = document.createTextNode(String(this.Hb[0]));
    a.appendChild(b);
    b.appendChild(c);
    this.$a = b;
    this.Fd = new dg(this.md, this.nd) || n;
    this.oa && this.Oa();
    bg(this, q);
    ig(this, this.ma);
    this.l().classList.add("x-tooltip") };
ug.prototype.Ad = function() { bg(this, s);
    this.$a && Nd(this.$a);
    this.l() && Nd(this.l());
    this.$a = r };

function vg() { Sf.call(this);
    this.c = "renderer3D";
    this.Ac = this.Dc = this.zc = this.Cc = this.yc = this.Bc = this.fe = this.ge = r;
    this.k = [0, 0, 0];
    this.of = r;
    this.Qd = new rc;
    this.Gc = new rc;
    this.Jc = new rc;
    this.be = new rc;
    this.Wc = new rc;
    this.fd = new rc;
    this.gd = new rc;
    this.hd = new rc;
    this.F = { PROGRESSBAR_ENABLED: q, PICKING_ENABLED: q, ORDERING_ENABLED: q, STATISTICS_ENABLED: s, INTERMEDIATE_RENDERING: s } }
F(vg, Sf);
vg.prototype.__defineGetter__("config", u("F"));
w = vg.prototype;
w.ri = function() { this.Ac = this.Dc = this.zc = this.Cc = this.yc = this.Bc = r;
    this.k = [0, 0, 0] };
w.Je = function(a) { vg.s.Je.call(this, a); var b = a.md;
    a = a.nd; var c = this.gg(b, a); if (c = this.get(c))
        if (c = c.fc)(new ug(this.q, this.q.offsetLeft + b + 10, this.q.offsetTop + a + 10, this.Kb)).l().innerHTML = c };
w.ea = function() {
    vg.s.ea.call(this, "experimental-webgl");
    try {
        if (this.a.viewport(0, 0, this.M, this.G), this.a.clearColor(0, 0, 0, 0), this.a.enable(this.a.BLEND), this.a.blendEquation(this.a.FUNC_ADD), this.a.blendFunc(this.a.SRC_ALPHA, this.a.ONE_MINUS_SRC_ALPHA), this.a.enable(this.a.DEPTH_TEST), this.a.depthFunc(this.a.LEQUAL), this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT), this.F.PICKING_ENABLED) {
            var a = this.a.createFramebuffer(),
                b = this.a.createRenderbuffer(),
                c = this.a.createTexture();
            this.a.bindTexture(this.a.TEXTURE_2D,
                c);
            this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, this.M, this.G, 0, this.a.RGB, this.a.UNSIGNED_BYTE, r);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST);
            this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, a);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER,
                b);
            this.a.renderbufferStorage(this.a.RENDERBUFFER, this.a.DEPTH_COMPONENT16, this.M, this.G);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, r);
            this.a.framebufferTexture2D(this.a.FRAMEBUFFER, this.a.COLOR_ATTACHMENT0, this.a.TEXTURE_2D, c, 0);
            this.a.framebufferRenderbuffer(this.a.FRAMEBUFFER, this.a.DEPTH_ATTACHMENT, this.a.RENDERBUFFER, b);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, r);
            this.of = a
        }
    } catch (d) { m(Error("Exception while accessing GL Context!\n" + d)) }
    a = new Tf;
    (this.ga == r || this.a == r || this.t == r) && m(Error("Renderer was not initialized properly."));
    (a == r || !(a instanceof Tf)) && m(Error("Could not add shaders."));
    b = Object.keys(Vf);
    Object.keys(Uf).every(function(a) { a = Uf[a]; return -1 != this.kd.search(a) || -1 != this.Yc.search(a) }.bind(a)) || m(Error("Could not find all attributes in the shader sources."));
    b.every(function(a) { a = Vf[a]; return -1 != this.kd.search(a) || -1 != this.Yc.search(a) }.bind(a)) || m(Error("Could not find all uniforms in the shader sources."));
    b = this.a.createShader(this.a.FRAGMENT_SHADER);
    c = this.a.createShader(this.a.VERTEX_SHADER);
    this.a.shaderSource(b,
        a.Yc);
    this.a.shaderSource(c, a.kd);
    this.a.compileShader(b);
    this.a.compileShader(c);
    this.a.getShaderParameter(b, this.a.COMPILE_STATUS) || m(Error("Fragement Shader compilation failed!\n" + this.a.getShaderInfoLog(b)));
    this.a.getShaderParameter(c, this.a.COMPILE_STATUS) || m(Error("Vertex Shader compilation failed!\n" + this.a.getShaderInfoLog(c)));
    var e = this.a.createProgram();
    this.a.attachShader(e, c);
    this.a.attachShader(e, b);
    this.a.linkProgram(e);
    this.a.getProgramParameter(e, this.a.LINK_STATUS) || m(Error("Could not create shader program!\n" +
        this.a.getShaderInfoLog(b) + "\n" + this.a.getShaderInfoLog(c) + "\n" + this.a.getProgramInfoLog(e)));
    this.a.useProgram(e);
    this.fe = e;
    Object.keys(Uf).forEach(function(a) { a = Uf[a];
        this.Qd.set(a, this.a.getAttribLocation(this.fe, a));
        this.a.enableVertexAttribArray(this.Qd.get(a)) }.bind(this));
    Object.keys(Vf).forEach(function(a) { a = Vf[a];
        this.Gc.set(a, this.a.getUniformLocation(this.fe, a)) }.bind(this));
    this.ge = a
};
w.Va = function(a) {
    vg.s.Va.call(this, a);
    var b = s;
    this.get(a.sa) && (b = q);
    var c = a.sa,
        d = a.i,
        e = a.j,
        f = a.W,
        g = a.z,
        h = a.o,
        l = a.Wb,
        j = a.$,
        k = a.m,
        p = a.u;
    if (k != r && k.o != r && k.o.g) this.Va(k);
    else if (k != r && k.g && this.Va(k), j != r && j.o != r && j.o.g) this.C.load(j, a);
    else if (g != r && g.o != r && g.o.g) this.C.load(g, a);
    else {
        if (h != r && ha(h))
            if (a.dc != r) { if (a.dc.Cd != h.length || !a.g) return } else { b = 0;
                c = h.length; for (b = 0; b < c; b++) this.C.load(h[b], a); return }
        else { if (h != r && h.g) { this.C.load(a, a); return } if (p != r && p.o != r && p.o.g) { this.C.load(p, a); return } }
        if (0 <
            a.e.length) { h = a.e;
            j = h.length; for (k = k = 0; k < j; k++) this.Va(h[k]) }
        if (d) {
            for (h = 0; this.bd;) h++, window.console.log("Possible thread lock avoided: " + h);
            this.bd = q;
            j = a instanceof qe && a.ab instanceof ue;
            b && (g != r && g.g) && (h = this.gd.get(c), h != r && this.a.isBuffer(h.ha) && this.a.deleteBuffer(h.ha));
            h = r;
            g != r && (!b || g.g ? (h = a.Vb, h == r && m(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), k = s, g.va && (k = q), this.a.pixelStorei(this.a.UNPACK_FLIP_Y_WEBGL, k), k = this.a.createTexture(),
                k.oh = g.jb, this.hd.set(g.sa, k), this.a.bindTexture(this.a.TEXTURE_2D, k), g.va ? this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, g.xb, g.wb, 0, this.a.RGBA, this.a.UNSIGNED_BYTE, g.va) : this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, this.a.RGBA, this.a.UNSIGNED_BYTE, k.oh), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE), j ? (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST),
                    this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST)) : (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR)), this.a.bindTexture(this.a.TEXTURE_2D, r), k = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, k), this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(h), this.a.STATIC_DRAW), h = new Wf(k, h.length, 2), g.g = s) : h = this.gd.get(c));
            pf(this.C, 0.1);
            if (j) this.bd =
                s, H.qa(this.c + ".update"), pf(this.C, 0.9);
            else {
                if (!b || d.g || l.g) { j = l.ia;
                    g = H.d.Na(j, d.Ob, d.Pb, d.Qb);
                    j = H.d.Na(j, d.Lb, d.Mb, d.Nb); if (this.Bc === r || g.x < this.Bc) this.Bc = g.x; if (this.yc === r || j.x > this.yc) this.yc = j.x; if (this.Cc === r || g.y < this.Cc) this.Cc = g.y; if (this.zc === r || j.y > this.zc) this.zc = j.y; if (this.Dc === r || g.b < this.Dc) this.Dc = g.b; if (this.Ac === r || j.b > this.Ac) this.Ac = j.b;
                    this.k = [(this.Bc + this.yc) / 2, (this.Cc + this.zc) / 2, (this.Dc + this.Ac) / 2];
                    l.g = s }
                b && d.g && (l = this.Jc.get(c), l != r && this.a.isBuffer(l.ha) && this.a.deleteBuffer(l.ha));
                l = r;
                !b || d.g ? (l = this.a.createBuffer(), d.fb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, l), this.a.bufferData(this.a.ARRAY_BUFFER, d.L, this.a.STATIC_DRAW), l = new Wf(l, d.count, 3), d.g = s) : l = this.Jc.get(c);
                pf(this.C, 0.3);
                b && e.g && (g = this.Jc.get(c), g != r && this.a.isBuffer(g.ha) && this.a.deleteBuffer(g.ha));
                g = r;
                !b || e.g ? (g = this.a.createBuffer(), e.fb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, g), this.a.bufferData(this.a.ARRAY_BUFFER, e.L, this.a.STATIC_DRAW), g = new Wf(g, e.count, 3), e.g = s) : g = this.be.get(c);
                pf(this.C, 0.3);
                b &&
                    (f && f.g) && (e = this.Wc.get(c), e != r && this.a.isBuffer(e.ha) && this.a.deleteBuffer(e.ha));
                e = r;
                f && (!b || f.g ? (f.length != d.length && m(Error("Mismatch between points and point colors.")), e = this.a.createBuffer(), f.fb(), this.a.bindBuffer(this.a.ARRAY_BUFFER, e), this.a.bufferData(this.a.ARRAY_BUFFER, f.L, this.a.STATIC_DRAW), e = new Wf(e, f.count, 3), f.g = s) : e = this.Wc.get(c));
                pf(this.C, 0.2);
                b && (p && p.g) && (f = this.fd.get(c), f != r && this.a.isBuffer(f.ha) && this.a.deleteBuffer(f.ha));
                f = r;
                p && (f = p.sc, !b || p.g ? (f.length != d.length &&
                    m(Error("Mismatch between points and scalars.")), d = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, d), this.a.bufferData(this.a.ARRAY_BUFFER, f, this.a.STATIC_DRAW), f = new Wf(d, f.length, 3), p.g = s) : f = this.fd.get(c));
                pf(this.C, 0.1);
                b || this.Ya.add(a);
                this.Jc.set(c, l);
                this.be.set(c, g);
                this.Wc.set(c, e);
                this.gd.set(c, h);
                this.fd.set(c, f);
                this.bd = a.g = s
            }
        } else a.g = s
    }
};

function wg(a, b) { var c = b.i.Vc,
        c = H.d.Na(b.Wb.ia, c[0], c[1], c[2]),
        c = H.d.Na(a.t.p, c.x, c.y, c.b),
        c = H.f.Ab(a.t.ua, c); return Math.round(1E3 * c) / 1E3 }
w.gg = function(a, b) { if (this.F.PICKING_ENABLED) { this.Eb(q, s); var c = new Uint8Array(4);
        this.a.readPixels(a, this.G - b, 1, 1, this.a.RGBA, this.a.UNSIGNED_BYTE, c); return c[0] + 255 * c[1] + 65025 * c[2] } return -1 };
w.Eb = function(a, b) {
    vg.s.Eb.call(this, a, b);
    var c = this.Ya.v,
        d = c.length;
    if (0 != d) {
        a ? this.a.bindFramebuffer(this.a.FRAMEBUFFER, this.of) : this.a.bindFramebuffer(this.a.FRAMEBUFFER, r);
        this.a.viewport(0, 0, this.M, this.G);
        this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
        var e = this.t.nf,
            f = this.t.p;
        this.a.uniformMatrix4fv(this.Gc.get("perspective"), s, e);
        this.a.uniformMatrix4fv(this.Gc.get("view"), s, f);
        e = this.k;
        this.a.uniform3f(this.Gc.get("center"), parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]));
        f = this.Ra.length;
        for (e = 0; e < f; ++e) { var g = this.Ra[e]; if (g instanceof R) { var h = H.d.Na(this.t.p, 1, 0, 0),
                    l = H.f.Ab(this.t.ua, h),
                    h = H.d.Na(this.t.p, -1, 0, 0),
                    j = H.f.Ab(this.t.ua, h),
                    h = H.d.Na(this.t.p, 0, 1, 0),
                    k = H.f.Ab(this.t.ua, h),
                    h = H.d.Na(this.t.p, 0, -1, 0),
                    p = H.f.Ab(this.t.ua, h),
                    h = H.d.Na(this.t.p, 0, 0, 1),
                    t = H.f.Ab(this.t.ua, h),
                    h = H.d.Na(this.t.p, 0, 0, -1),
                    h = H.f.Ab(this.t.ua, h),
                    v = Math.max(l, k, t, j, p, h);
                v == l || v == j ? re(g, 0) : v == k || v == p ? re(g, 1) : (v == t || v == h) && re(g, 2) } }
        if (this.F.ORDERING_ENABLED) {
            l = s;
            f = this.Ra;
            g = f.length - 1;
            do
                if (e =
                    f[g], e instanceof R && e.Ka) { j = e.zb;
                    l = e.Q.e;
                    1 == j ? l = e.R.e : 2 == j && (l = e.Za.e);
                    j = l.length;
                    k = l[0];
                    k.K = wg(this, k);
                    k.Z = e.Z;
                    p = l[j - 1];
                    p.K = wg(this, p);
                    p.Z = e.Z;
                    p = Math.round(1E3 * ((p.K - k.K) / j)) / 1E3; for (t = t = 1; t < j - 1; t++) h = Math.round(1E3 * (k.K + t * p)) / 1E3, l[t].K = h, l[t].Z = e.Z;
                    l = q }
            while (g--);
            f = this.Ya.v;
            g = f.length - 1;
            do
                if (e = f[g], e.Ja && !(1 == e.Z || e instanceof qe)) e.K = wg(this, e), l = q;
            while (g--);
            l && this.Ya.sort()
        }
        if (f = !a && b != r && b && this.F.STATISTICS_ENABLED) var z = 0,
            A = 0,
            C = 0,
            E = 0;
        var e = this.Qd,
            g = e.get("vertexPosition"),
            l = e.get("vertexNormal"),
            j = e.get("vertexColor"),
            k = e.get("vertexTexturePos"),
            p = e.get("vertexScalar"),
            e = this.Gc,
            t = e.get("usePicking"),
            h = e.get("useObjectColor"),
            v = e.get("objectColor"),
            x = e.get("useScalars"),
            B = e.get("scalarsReplaceMode"),
            G = e.get("scalarsMin"),
            I = e.get("scalarsMax"),
            N = e.get("scalarsMinColor"),
            J = e.get("scalarsMaxColor"),
            K = e.get("scalarsInterpolation"),
            P = e.get("scalarsMinThreshold"),
            V = e.get("scalarsMaxThreshold"),
            T = e.get("objectOpacity"),
            ia = e.get("labelmapOpacity"),
            ka = e.get("useTexture"),
            M = e.get("useLabelMapTexture"),
            Tb = e.get("textureSampler"),
            Ub = e.get("textureSampler2"),
            Ag = e.get("volumeLowerThreshold"),
            Bg = e.get("volumeUpperThreshold"),
            Cg = e.get("volumeScalarMin"),
            Dg = e.get("volumeScalarMax"),
            Eg = e.get("volumeWindowLow"),
            Fg = e.get("volumeWindowHigh"),
            Gg = e.get("volumeScalarMinColor"),
            Hg = e.get("volumeScalarMaxColor"),
            Nf = e.get("volumeTexture"),
            Ig = e.get("objectTransform"),
            Jg = e.get("pointSize"),
            e = d;
        do {
            var Z = c[d - e];
            if (Z) {
                var da = r;
                Z instanceof qe && Z.ab && (da = Z.ab);
                if (Z.Ja && (!da || da.Ja)) {
                    var ta = Z.sa,
                        Ua = Z.xc,
                        Da = this.Jc.get(ta),
                        cb = this.be.get(ta),
                        se = this.Wc.get(ta),
                        Mb = this.fd.get(ta),
                        te = this.gd.get(ta);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, Da.ha);
                    this.a.vertexAttribPointer(g, Da.ob, this.a.FLOAT, s, 0, 0);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, cb.ha);
                    this.a.vertexAttribPointer(l, cb.ob, this.a.FLOAT, s, 0, 0);
                    a ? this.a.uniform1i(t, q) : this.a.uniform1i(t, s);
                    se && !a && !Ua ? (this.a.uniform1i(h, s), this.a.bindBuffer(this.a.ARRAY_BUFFER, se.ha), this.a.vertexAttribPointer(j, se.ob, this.a.FLOAT, s, 0, 0)) : (cb = 1, Ua && !a && (cb = 0), this.a.uniform1i(h, cb),
                        cb = Z.Gb, a && (cb = [Math.floor(ta % 65025 % 255) / 255, Math.floor(ta % 65025 / 255) / 255, Math.floor(ta / 65025) / 255]), this.a.uniform3f(v, parseFloat(cb[0]), parseFloat(cb[1]), parseFloat(cb[2])), this.a.vertexAttribPointer(j, Da.ob, this.a.FLOAT, s, 0, 0));
                    Mb && !a && !Ua ? (this.a.uniform1i(x, q), this.a.uniform1i(B, Z.u.qf), ta = Z.u.sb, Ua = Z.u.qb, this.a.uniform3f(N, parseFloat(ta[0]), parseFloat(ta[1]), parseFloat(ta[2])), this.a.uniform3f(J, parseFloat(Ua[0]), parseFloat(Ua[1]), parseFloat(Ua[2])), this.a.uniform1f(P, parseFloat(Z.u.P)), this.a.uniform1f(V,
                        parseFloat(Z.u.S)), this.a.uniform1f(G, parseFloat(Z.u.Ia)), this.a.uniform1f(I, parseFloat(Z.u.Fa)), this.a.uniform1i(K, parseInt(Z.u.Td, 10)), this.a.bindBuffer(this.a.ARRAY_BUFFER, Mb.ha), this.a.vertexAttribPointer(p, Mb.ob, this.a.FLOAT, s, 0, 0)) : (this.a.uniform1i(x, s), this.a.vertexAttribPointer(p, Da.ob, this.a.FLOAT, s, 0, 0));
                    this.a.uniform1f(T, parseFloat(Z.Z));
                    Z.z && te && !a ? (this.a.uniform1i(ka, q), this.a.activeTexture(this.a.TEXTURE0), this.a.bindTexture(this.a.TEXTURE_2D, this.hd.get(Z.z.sa)), this.a.uniform1i(Tb,
                        0), this.a.bindBuffer(this.a.ARRAY_BUFFER, te.ha), this.a.vertexAttribPointer(k, te.ob, this.a.FLOAT, s, 0, 0), this.a.uniform1i(Nf, s)) : (this.a.uniform1i(ka, s), this.a.vertexAttribPointer(k, Da.ob, this.a.FLOAT, s, 0, 0));
                    da && (this.a.uniform1i(Nf, q), this.a.uniform1f(Ag, da.P), this.a.uniform1f(Bg, da.S), this.a.uniform1f(Cg, da.Ia), this.a.uniform1f(Dg, da.Fa), ta = da.sb, Ua = da.qb, this.a.uniform3f(Gg, parseFloat(ta[0]), parseFloat(ta[1]), parseFloat(ta[2])), this.a.uniform3f(Hg, parseFloat(Ua[0]), parseFloat(Ua[1]), parseFloat(Ua[2])),
                        this.a.uniform1f(Eg, da.U), this.a.uniform1f(Fg, da.T), Mb = da.m, this.a.uniform1i(M, s), da.Ka ? this.a.uniform1f(T, parseFloat(da.Z)) : Mb && Mb.Ja && (da = Z.m.sa, this.a.uniform1i(M, q), this.a.activeTexture(this.a.TEXTURE1), this.a.bindTexture(this.a.TEXTURE_2D, this.hd.get(da)), this.a.uniform1i(Ub, 1), this.a.uniform1f(ia, Mb.Z)));
                    this.a.uniformMatrix4fv(Ig, s, Z.Wb.ia);
                    da = 1;
                    "POINTS" == Z.ja && (da = Z.Ec);
                    this.a.uniform1f(Jg, da);
                    da = -1;
                    Z.ja == Oc ? (da = this.a.TRIANGLES, f && (A += Da.nb / 3)) : "LINES" == Z.ja ? (this.a.lineWidth(Z.jc), da = this.a.LINES,
                        f && (C += Da.nb / 2)) : "POINTS" == Z.ja ? (da = this.a.POINTS, f && (E += Da.nb)) : "TRIANGLE_STRIPS" == Z.ja ? (da = this.a.TRIANGLE_STRIP, f && (A += Da.nb / 3)) : "POLYGONS" == Z.ja && (da = 0 == Da.nb % 3 ? this.a.TRIANGLES : this.a.TRIANGLE_FAN, f && (A += Da.nb / 3));
                    f && (z += Da.nb);
                    this.a.drawArrays(da, 0, Da.nb)
                }
            }
        } while (--e);
        f && (c = "Objects: " + d + " | " + ("Vertices: " + z + " | "), c += "Triangles: " + Math.round(A) + " | ", c += "Lines: " + C + " | ", c += "Points: " + E + " | ", c += "Textures: " + this.hd.ud(), window.console.log(c))
    }
};
w.pd = function() { this.ge = r;
    delete this.ge;
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    vg.s.pd.call(this) };
D("X.renderer3D", vg);
D("X.renderer3D.prototype.init", vg.prototype.ea);
D("X.renderer3D.prototype.add", vg.prototype.add);
D("X.renderer3D.prototype.onShowtime", vg.prototype.cg);
D("X.renderer3D.prototype.onRender", vg.prototype.ag);
D("X.renderer3D.prototype.get", vg.prototype.get);
D("X.renderer3D.prototype.render", vg.prototype.cc);
D("X.renderer3D.prototype.destroy", vg.prototype.pd);
D("X.renderer3D.prototype.resetBoundingBox", vg.prototype.ri);
D("X.renderer3D.prototype.resetViewAndRender", vg.prototype.qc);
D("X.renderer3D.prototype.pick", vg.prototype.gg);

function xg() { Sf.call(this);
    this.c = "renderer2D";
    this.ff = this.Ud = this.df = this.Sd = this.tb = r;
    this.ed = this.Sb = this.Tb = this.he = this.ie = 0;
    this.T = this.U = this.S = this.P = this.bf = -1 }
F(xg, Sf);
xg.prototype.Uh = aa();
xg.prototype.ci = aa();
xg.prototype.Ke = function(a) { xg.s.Ke.call(this, a); var b = this.Ra[0]; if (b) { var c = this.tb;
        b["index" + c] = a.I ? b["index" + c] + 1 : b["index" + c] - 1;
        eval("this.onScroll();") } };
xg.prototype.di = function(a) { var b = this.Ra[0]; if (b) { var c = b.T - b.U,
            d = c / 2,
            e = parseInt(c + c / 15 * -a.le, 10);
        a = parseInt(d + d / 15 * a.Zd, 10);
        c == e && e++;
        d == a && a++;
        b.U -= parseInt(d - a, 10);
        b.U -= parseInt(c - e, 10);
        b.U = Math.max(b.U, b.Ia);
        b.T -= parseInt(d - a, 10);
        b.T += parseInt(c - e, 10);
        b.T = Math.min(b.T, b.Fa);
        eval("this.onWindowLevel();") } };
xg.prototype.__defineGetter__("orientation", u("tb"));
xg.prototype.__defineSetter__("orientation", function(a) { a = a.toUpperCase(); "X" != a && ("Y" != a && "Z" != a) && m(Error("Invalid orientation."));
    this.tb = a });
w = xg.prototype;
w.ea = function() { this.tb || m(Error("No 2D orientation set."));
    xg.s.ea.call(this, "2d");
    this.a.fillStyle = "rgba(0,0,0,0)";
    this.a.fillRect(0, 0, this.ga.width, this.ga.height);
    this.Sd = Ld("canvas");
    this.Ud = Ld("canvas");
    O(this.t, bd, this.di.bind(this)) };
w.rotate = function() { this.ed++ };
w.ti = function() { this.ed-- };
w.qc = function() { xg.s.qc.call(this);
    yg(this); var a = this.Ra[0];
    a && (a.T = a.Fa, a.U = a.Ia) };
w.Va = function(a) {
    xg.s.Va.call(this, a);
    var b = s;
    this.get(a.sa) && (b = q);
    if (a instanceof R) {
        var c = a.o,
            d = a.m,
            e = a.$;
        if (d != r && d.o != r && d.o.g) this.Va(d);
        else if (e != r && e.o != r && e.o.g) this.C.load(e, a);
        else {
            if (c != r && ha(c))
                if (a.dc != r) { if (a.dc.Cd != c.length || b && !a.g) return } else { b = 0;
                    d = c.length; for (b = 0; b < d; b++) this.C.load(c[b], a); return }
            else if (c != r && c.g) { this.C.load(a, a); return }
            var d = c = 0,
                e = a.aa,
                f = a.H;
            "X" == this.tb ? (this.Ub = a.Q.e, c = e[1], d = e[2], this.Tb = f[1], this.Sb = f[2]) : "Y" == this.tb ? (this.Ub = a.R.e, c = e[0], d = e[2], this.Tb =
                f[0], this.Sb = f[2]) : "Z" == this.tb && (this.Ub = a.Za.e, c = e[0], d = e[1], this.Tb = f[0], this.Sb = f[1]);
            this.ie = c;
            this.he = d;
            e = this.Sd;
            e.width = c;
            e.height = d;
            f = this.Ud;
            f.width = c;
            f.height = d;
            this.df = e.getContext("2d");
            this.ff = f.getContext("2d");
            b || (this.Ya.add(a), yg(this))
        }
    }
};

function yg(a) { var b = Math.min(a.M / (a.ie * a.Tb), a.G / (a.he * a.Sb));
    a.t.p[14] = b }
w.Eb = function(a, b) {
    xg.s.Eb.call(this, a, b);
    if (0 != this.Ya.v.length) {
        var c = this.M,
            d = this.G,
            e = this.t.p;
        this.a.save();
        this.a.clearRect(-c, -d, 2 * c, 2 * d);
        this.a.restore();
        var f = 1 * e[12],
            g = -1 * e[13],
            h = Math.max(e[14], 0.6);
        this.a.setTransform(h, 0, 0, h, f, g);
        var e = this.Ra[0],
            l = e["index" + this.tb],
            j = this.Ub[parseInt(l, 10)],
            k = j.z.va,
            j = j.m,
            p = r;
        j && (p = j.va);
        var t = this.ie,
            v = this.he,
            z = this.df,
            A = this.ff,
            C = z.getImageData(0, 0, t, v),
            E = A.getImageData(0, 0, t, v),
            x = C.data,
            B = E.data,
            G = x.length,
            I = e.Fa,
            N = e.P,
            J = e.S,
            K = e.U / I,
            P = e.T / I;
        if (this.bf !=
            l || this.P != N || this.S != J || this.U != K || this.T != P) {
            var V = 0;
            do { var T = [0, 0, 0, 0],
                    ia = [0, 0, 0, 0],
                    ka = k[V] / 255 * I,
                    M = k[V],
                    M = (M / 255 - K) / (P - K),
                    M = 255 * M;
                ka >= N && ka <= J && (T = new S(e.sb[0], e.sb[1], e.sb[2]), T = (new S(e.qb[0], e.qb[1], e.qb[2])).scale(M).add(T.scale(255 - M)), T = [Math.floor(T.x), Math.floor(T.y), Math.floor(T.b), 255], j && (ia = [p[V], p[V + 1], p[V + 2], p[V + 3]]));
                M = G - 1 - V;
                x[M - 3] = T[0];
                x[M - 2] = T[1];
                x[M - 1] = T[2];
                x[M] = T[3];
                B[M - 3] = ia[0];
                B[M - 2] = ia[1];
                B[M - 1] = ia[2];
                B[M] = ia[3];
                V += 4 } while (V < G);
            z.putImageData(C, 0, 0);
            A.putImageData(E, 0, 0);
            this.bf = l;
            this.P = N;
            this.S = J;
            this.U = K;
            this.T = P
        }
        this.a.globalAlpha = 1;
        this.a.translate(c / 2 / h, d / 2 / h);
        this.a.rotate(0.5 * Math.PI * this.ed);
        switch (this.ed % 4) {
            case 1:
                c = f;
                f = g;
                g = -c; break;
            case 2:
                f *= -1;
                g *= -1; break;
            case 3:
                c = f, f = -g, g = c }
        f = -t * this.Tb / 2 + f;
        g = -v * this.Sb / 2 + g;
        this.a.drawImage(this.Sd, f, g, t * this.Tb, v * this.Sb);
        j && e.m.Ja && (this.a.globalAlpha = e.m.Z, this.a.drawImage(this.Ud, f, g, t * this.Tb, v * this.Sb))
    }
};
D("X.renderer2D", xg);
D("X.renderer2D.prototype.init", xg.prototype.ea);
D("X.renderer2D.prototype.add", xg.prototype.add);
D("X.renderer2D.prototype.onShowtime", xg.prototype.cg);
D("X.renderer2D.prototype.onRender", xg.prototype.ag);
D("X.renderer2D.prototype.onScroll", xg.prototype.Uh);
D("X.renderer2D.prototype.onWindowLevel", xg.prototype.ci);
D("X.renderer2D.prototype.get", xg.prototype.get);
D("X.renderer2D.prototype.rotate", xg.prototype.rotate);
D("X.renderer2D.prototype.rotateCounter", xg.prototype.ti);
D("X.renderer2D.prototype.resetViewAndRender", xg.prototype.qc);
D("X.renderer2D.prototype.render", xg.prototype.cc);
D("X.renderer2D.prototype.destroy", xg.prototype.pd);

function zg() { W.call(this);
    this.c = "fibers";
    Ea(this, new pc) }
F(zg, W);
D("X.fibers", zg);

function Kg() { W.call(this);
    this.c = "mesh";
    Ea(this, new pc) }
F(Kg, W);
D("X.mesh", Kg);