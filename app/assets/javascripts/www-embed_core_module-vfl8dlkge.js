function EMBa(a) {
    throw a;
}
var EMBb = void 0, EMBc = !0, EMBd = null, EMBe = !1, EMB, EMBaa = EMBaa || {}, EMBf = this;
function EMBg(a) {
    a = a.split(".");
    for (var b = EMBf, c; c = a.shift();)if (b[c] != EMBd)b = b[c]; else return EMBd;
    return b
}
function EMBba() {
}
function EMBca(a) {
    a.getInstance = function () {
        return a.md ? a.md : a.md = new a
    }
}
function EMBda(a) {
    var b = typeof a;
    if ("object" == b)if (a) {
        if (a instanceof Array)return"array";
        if (a instanceof Object)return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c)return"object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))return"array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))return"function"
    } else return"null";
    else if ("function" == b && "undefined" == typeof a.call)return"object";
    return b
}
function EMBh(a) {
    return a !== EMBb
}
function EMBi(a) {
    return"array" == EMBda(a)
}
function EMBj(a) {
    var b = EMBda(a);
    return"array" == b || "object" == b && "number" == typeof a.length
}
function EMBk(a) {
    return"string" == typeof a
}
function EMBea(a) {
    return"number" == typeof a
}
function EMBfa(a) {
    return"function" == EMBda(a)
}
function EMBga(a) {
    var b = typeof a;
    return"object" == b && a != EMBd || "function" == b
}
function EMBha(a) {
    return a[EMBia] || (a[EMBia] = ++EMBja)
}
var EMBia = "closure_uid_" + (1E9 * Math.random() >>> 0), EMBja = 0;
function EMBka(a, b, c) {
    return a.call.apply(a.bind, arguments)
}
function EMBla(a, b, c) {
    a || EMBa(Error());
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function () {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function () {
        return a.apply(b, arguments)
    }
}
function EMBl(a, b, c) {
    EMBl = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? EMBka : EMBla;
    return EMBl.apply(EMBd, arguments)
}
function EMBma(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var EMBm = Date.now || function () {
    return+new Date
};
function EMBn(a, b) {
    var c = a.split("."), d = EMBf;
    !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());)!c.length && EMBh(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}
function EMBo(a, b) {
    function c() {
    }

    c.prototype = b.prototype;
    a.Q = b.prototype;
    a.prototype = new c
}
Function.prototype.bind = Function.prototype.bind || function (a, b) {
    if (1 < arguments.length) {
        var c = Array.prototype.slice.call(arguments, 1);
        c.unshift(this, a);
        return EMBl.apply(EMBd, c)
    }
    return EMBl(this, a)
};
function EMBna(a) {
    return decodeURIComponent(a.replace(/\+/g, " "))
}
function EMBp(a) {
    if (!EMBoa.test(a))return a;
    -1 != a.indexOf("&") && (a = a.replace(EMBpa, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(EMBqa, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(EMBra, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(EMBsa, "&quot;"));
    return a
}
var EMBpa = /&/g, EMBqa = /</g, EMBra = />/g, EMBsa = /\"/g, EMBoa = /[&<>\"]/;
function EMBta(a, b) {
    for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
        var h = d[g] || "", k = e[g] || "", m = RegExp("(\\d*)(\\D*)", "g"), l = RegExp("(\\d*)(\\D*)", "g");
        do {
            var p = m.exec(h) || ["", "", ""], n = l.exec(k) || ["", "", ""];
            if (0 == p[0].length && 0 == n[0].length)break;
            c = ((0 == p[1].length ? 0 : parseInt(p[1], 10)) < (0 == n[1].length ? 0 : parseInt(n[1], 10)) ? -1 : (0 == p[1].length ? 0 : parseInt(p[1], 10)) > (0 ==
                n[1].length ? 0 : parseInt(n[1], 10)) ? 1 : 0) || ((0 == p[2].length) < (0 == n[2].length) ? -1 : (0 == p[2].length) > (0 == n[2].length) ? 1 : 0) || (p[2] < n[2] ? -1 : p[2] > n[2] ? 1 : 0)
        } while (0 == c)
    }
    return c
}
function EMBua(a) {
    return String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    })
}
function EMBva(a) {
    var b = EMBk(EMBb) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function (a, b, e) {
        return b + e.toUpperCase()
    })
};
var EMBq = Array.prototype, EMBwa = EMBq.indexOf ? function (a, b, c) {
    return EMBq.indexOf.call(a, b, c)
} : function (a, b, c) {
    c = c == EMBd ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if (EMBk(a))return!EMBk(b) || 1 != b.length ? -1 : a.indexOf(b, c);
    for (; c < a.length; c++)if (c in a && a[c] === b)return c;
    return-1
}, EMBr = EMBq.forEach ? function (a, b, c) {
    EMBq.forEach.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = EMBk(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c, e[f], f, a)
}, EMBxa = EMBq.filter ? function (a, b, c) {
    return EMBq.filter.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = [], f = 0, g = EMBk(a) ? a.split("") : a, h = 0; h < d; h++)if (h in g) {
        var k = g[h];
        b.call(c, k, h, a) && (e[f++] = k)
    }
    return e
}, EMBya = EMBq.map ? function (a, b, c) {
    return EMBq.map.call(a, b, c)
} : function (a, b, c) {
    for (var d = a.length, e = Array(d), f = EMBk(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c, f[g], g, a));
    return e
};
function EMBza(a, b, c) {
    a:{
        for (var d = a.length, e = EMBk(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c, e[f], f, a)) {
            b = f;
            break a
        }
        b = -1
    }
    return 0 > b ? EMBd : EMBk(a) ? a.charAt(b) : a[b]
}
function EMBs(a, b) {
    return 0 <= EMBwa(a, b)
}
function EMBAa(a, b) {
    var c = EMBwa(a, b);
    0 <= c && EMBq.splice.call(a, c, 1)
}
function EMBBa(a) {
    return EMBq.concat.apply(EMBq, arguments)
}
function EMBCa(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++)c[d] = a[d];
        return c
    }
    return[]
}
function EMBDa(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c], e;
        if (EMBi(d) || (e = EMBj(d)) && Object.prototype.hasOwnProperty.call(d, "callee"))a.push.apply(a, d); else if (e)for (var f = a.length, g = d.length, h = 0; h < g; h++)a[f + h] = d[h]; else a.push(d)
    }
}
function EMBEa(a, b, c, d) {
    EMBq.splice.apply(a, EMBFa(arguments, 1))
}
function EMBFa(a, b, c) {
    return 2 >= arguments.length ? EMBq.slice.call(a, b) : EMBq.slice.call(a, b, c)
}
function EMBGa(a, b, c) {
    if (!EMBj(a) || !EMBj(b) || a.length != b.length)return EMBe;
    var d = a.length;
    c = c || EMBHa;
    for (var e = 0; e < d; e++)if (!c(a[e], b[e]))return EMBe;
    return EMBc
}
function EMBHa(a, b) {
    return a === b
};
var EMBIa;
function EMBJa(a) {
    a = a.className;
    return EMBk(a) && a.match(/\S+/g) || []
}
function EMBt(a, b) {
    for (var c = EMBJa(a), d = EMBFa(arguments, 1), e = c.length + d.length, f = c, g = 0; g < d.length; g++)EMBs(f, d[g]) || f.push(d[g]);
    a.className = c.join(" ");
    return c.length == e
}
function EMBu(a, b) {
    var c = EMBJa(a), d = EMBFa(arguments, 1), c = EMBKa(c, d);
    a.className = c.join(" ")
}
function EMBKa(a, b) {
    return EMBxa(a, function (a) {
        return!EMBs(b, a)
    })
}
function EMBv(a, b) {
    return EMBs(EMBJa(a), b)
}
function EMBLa(a, b, c) {
    c ? EMBt(a, b) : EMBu(a, b)
}
function EMBMa(a, b) {
    var c = !EMBv(a, b);
    EMBLa(a, b, c)
};
function EMBw(a, b) {
    this.x = EMBh(a) ? a : 0;
    this.y = EMBh(b) ? b : 0
}
EMBw.prototype.u = function () {
    return new EMBw(this.x, this.y)
};
function EMBNa(a, b) {
    return new EMBw(a.x - b.x, a.y - b.y)
}
EMBw.prototype.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
EMBw.prototype.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
EMBw.prototype.scale = function (a, b) {
    var c = EMBea(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};
function EMBx(a, b) {
    this.width = a;
    this.height = b
}
EMBx.prototype.u = function () {
    return new EMBx(this.width, this.height)
};
EMBx.prototype.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
EMBx.prototype.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
EMBx.prototype.scale = function (a, b) {
    var c = EMBea(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};
function EMBOa(a, b) {
    for (var c in a)b.call(EMBb, a[c], c, a)
}
function EMBPa(a) {
    for (var b in a)return a[b]
}
function EMBQa(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = a[d];
    return b
}
function EMBRa(a) {
    var b = [], c = 0, d;
    for (d in a)b[c++] = d;
    return b
}
function EMBSa(a, b, c) {
    for (var d in a)if (b.call(c, a[d], d, a))return d
}
function EMBTa(a, b) {
    var c = EMBSa(a, b, EMBb);
    return c && a[c]
}
function EMBUa(a) {
    var b = {}, c;
    for (c in a)b[c] = a[c];
    return b
}
var EMBVa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function EMBWa(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d)a[c] = d[c];
        for (var f = 0; f < EMBVa.length; f++)c = EMBVa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var EMBXa, EMBYa, EMBZa, EMB_a, EMB0a, EMB1a;
function EMB2a() {
    return EMBf.navigator ? EMBf.navigator.userAgent : EMBd
}
function EMB3a() {
    return EMBf.navigator
}
EMB_a = EMBZa = EMBYa = EMBXa = EMBe;
var EMB4a;
if (EMB4a = EMB2a()) {
    var EMB5a = EMB3a();
    EMBXa = 0 == EMB4a.indexOf("Opera");
    EMBYa = !EMBXa && -1 != EMB4a.indexOf("MSIE");
    EMBZa = !EMBXa && -1 != EMB4a.indexOf("WebKit");
    EMB_a = !EMBXa && !EMBZa && "Gecko" == EMB5a.product
}
var EMB6a = EMBXa, EMBy = EMBYa, EMBz = EMB_a, EMBA = EMBZa, EMB7a = EMB3a(), EMB8a = EMB7a && EMB7a.platform || "";
EMB0a = -1 != EMB8a.indexOf("Mac");
EMB1a = -1 != EMB8a.indexOf("Win");
var EMB9a = !!EMB3a() && -1 != (EMB3a().appVersion || "").indexOf("X11");
function EMB$a() {
    var a = EMBf.document;
    return a ? a.documentMode : EMBb
}
var EMBab;
a:{
    var EMBbb = "", EMBcb;
    if (EMB6a && EMBf.opera)var EMBdb = EMBf.opera.version, EMBbb = "function" == typeof EMBdb ? EMBdb() : EMBdb; else if (EMBz ? EMBcb = /rv\:([^\);]+)(\)|;)/ : EMBy ? EMBcb = /MSIE\s+([^\);]+)(\)|;)/ : EMBA && (EMBcb = /WebKit\/(\S+)/), EMBcb)var EMBeb = EMBcb.exec(EMB2a()), EMBbb = EMBeb ? EMBeb[1] : "";
    if (EMBy) {
        var EMBfb = EMB$a();
        if (EMBfb > parseFloat(EMBbb)) {
            EMBab = String(EMBfb);
            break a
        }
    }
    EMBab = EMBbb
}
var EMBgb = EMBab, EMBhb = {};
function EMBB(a) {
    return EMBhb[a] || (EMBhb[a] = 0 <= EMBta(EMBgb, a))
}
function EMBC(a) {
    return EMBy && EMBib >= a
}
var EMBjb = EMBf.document, EMBib = !EMBjb || !EMBy ? EMBb : EMB$a() || ("CSS1Compat" == EMBjb.compatMode ? parseInt(EMBgb, 10) : 5);
var EMBkb = !EMBy || EMBC(9);
!EMBz && !EMBy || EMBy && EMBC(9) || EMBz && EMBB("1.9.1");
var EMBlb = EMBy && !EMBB("9");
function EMBmb(a) {
    return a ? new EMBnb(EMBD(a)) : EMBIa || (EMBIa = new EMBnb)
}
function EMBE(a) {
    return EMBk(a) ? document.getElementById(a) : a
}
function EMBob(a, b) {
    var c = b || document;
    return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : c.getElementsByClassName ? c.getElementsByClassName(a) : EMBpb("*", a, b)
}
function EMBF(a, b) {
    var c = b || document, d = EMBd;
    return(d = c.querySelectorAll && c.querySelector ? c.querySelector("." + a) : EMBob(a, b)[0]) || EMBd
}
function EMBpb(a, b, c) {
    var d = document;
    c = c || d;
    a = a && "*" != a ? a.toUpperCase() : "";
    if (c.querySelectorAll && c.querySelector && (a || b))return c.querySelectorAll(a + (b ? "." + b : ""));
    if (b && c.getElementsByClassName) {
        c = c.getElementsByClassName(b);
        if (a) {
            for (var d = {}, e = 0, f = 0, g; g = c[f]; f++)a == g.nodeName && (d[e++] = g);
            d.length = e;
            return d
        }
        return c
    }
    c = c.getElementsByTagName(a || "*");
    if (b) {
        d = {};
        for (f = e = 0; g = c[f]; f++)a = g.className, "function" == typeof a.split && EMBs(a.split(/\s+/), b) && (d[e++] = g);
        d.length = e;
        return d
    }
    return c
}
function EMBqb(a, b) {
    EMBOa(b, function (b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in EMBrb ? a.setAttribute(EMBrb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var EMBrb = {cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width"};
function EMBsb(a, b, c) {
    var d = arguments, e = document, f = d[0], g = d[1];
    if (!EMBkb && g && (g.name || g.type)) {
        f = ["<", f];
        g.name && f.push(' name="', EMBp(g.name), '"');
        if (g.type) {
            f.push(' type="', EMBp(g.type), '"');
            var h = {};
            EMBWa(h, g);
            delete h.type;
            g = h
        }
        f.push(">");
        f = f.join("")
    }
    f = e.createElement(f);
    g && (EMBk(g) ? f.className = g : EMBi(g) ? EMBt.apply(EMBd, [f].concat(g)) : EMBqb(f, g));
    2 < d.length && EMBtb(e, f, d, 2);
    return f
}
function EMBtb(a, b, c, d) {
    function e(c) {
        c && b.appendChild(EMBk(c) ? a.createTextNode(c) : c)
    }

    for (; d < c.length; d++) {
        var f = c[d];
        EMBj(f) && !(EMBga(f) && 0 < f.nodeType) ? EMBr(EMBub(f) ? EMBCa(f) : f, e) : e(f)
    }
}
function EMBvb(a) {
    return"CSS1Compat" == a.compatMode
}
function EMBwb(a, b) {
    EMBtb(EMBD(a), a, arguments, 1)
}
function EMBxb(a) {
    for (var b; b = a.firstChild;)a.removeChild(b)
}
function EMByb(a) {
    if (!a)return EMBd;
    if (a.firstChild)return a.firstChild;
    for (; a && !a.nextSibling;)a = a.parentNode;
    return a ? a.nextSibling : EMBd
}
function EMBzb(a) {
    if (!a)return EMBd;
    if (!a.previousSibling)return a.parentNode;
    for (a = a.previousSibling; a && a.lastChild;)a = a.lastChild;
    return a
}
function EMBD(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}
function EMBAb(a, b) {
    var c = [];
    return EMBBb(a, b, c, EMBc) ? c[0] : EMBb
}
function EMBBb(a, b, c, d) {
    if (a != EMBd)for (a = a.firstChild; a;) {
        if (b(a) && (c.push(a), d) || EMBBb(a, b, c, d))return EMBc;
        a = a.nextSibling
    }
    return EMBe
}
var EMBCb = {SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1}, EMBDb = {IMG: " ", BR: "\n"};
function EMBEb(a, b, c) {
    if (!(a.nodeName in EMBCb))if (3 == a.nodeType)c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue); else if (a.nodeName in EMBDb)b.push(EMBDb[a.nodeName]); else for (a = a.firstChild; a;)EMBEb(a, b, c), a = a.nextSibling
}
function EMBub(a) {
    if (a && "number" == typeof a.length) {
        if (EMBga(a))return"function" == typeof a.item || "string" == typeof a.item;
        if (EMBfa(a))return"function" == typeof a.item
    }
    return EMBe
}
function EMBG(a, b, c) {
    if (!b && !c)return EMBd;
    var d = b ? b.toUpperCase() : EMBd;
    return EMBFb(a, function (a) {
        return(!d || a.nodeName == d) && (!c || EMBv(a, c))
    })
}
function EMBFb(a, b, c) {
    for (var d = c == EMBd, e = 0; a && (d || e <= c);) {
        if (b(a))return a;
        a = a.parentNode;
        e++
    }
    return EMBd
}
function EMBnb(a) {
    this.a = a || EMBf.document || document
}
EMBnb.prototype.createElement = function (a) {
    return this.a.createElement(a)
};
function EMBGb(a) {
    return EMBvb(a.a)
}
function EMBHb(a) {
    var b = a.a;
    a = !EMBA && EMBvb(b) ? b.documentElement : b.body;
    b = b.parentWindow || b.defaultView;
    return EMBy && EMBB("10") && b.pageYOffset != a.scrollTop ? new EMBw(a.scrollLeft, a.scrollTop) : new EMBw(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
EMBnb.prototype.appendChild = function (a, b) {
    a.appendChild(b)
};
function EMBH(a, b) {
    return a.dataset ? a.dataset[EMBIb(b)] : a.getAttribute("data-" + b)
}
function EMBJb(a, b) {
    a.dataset ? delete a.dataset[EMBIb(b)] : a.removeAttribute("data-" + b)
}
var EMBKb = {};
function EMBIb(a) {
    return EMBKb[a] || (EMBKb[a] = String(a).replace(/\-([a-z])/g, function (a, c) {
        return c.toUpperCase()
    }))
};
var EMBLb = EMBg("yt.dom.getNextId_");
if (!EMBLb) {
    EMBLb = function () {
        return++EMBMb
    };
    EMBn("yt.dom.getNextId_", EMBLb);
    var EMBMb = 0
}
function EMBNb(a, b) {
    var c = EMBpb(a, EMBd, b);
    return c.length ? c[0] : EMBd
};
function EMBOb(a) {
    if (a = a || window.event) {
        for (var b in a)b in EMBPb || (this[b] = a[b]);
        this.scale = a.scale;
        this.rotation = a.rotation;
        this.Rb = a;
        if ((b = a.target || a.srcElement) && 3 == b.nodeType)b = b.parentNode;
        this.target = b;
        if (b = a.relatedTarget)try {
            b = b.nodeName && b
        } catch (c) {
            b = EMBd
        } else"mouseover" == this.type ? b = a.fromElement : "mouseout" == this.type && (b = a.toElement);
        this.relatedTarget = b;
        this.clientX = a.clientX != EMBb ? a.clientX : a.pageX;
        this.clientY = a.clientY != EMBb ? a.clientY : a.pageY;
        if (document.body && document.documentElement) {
            b =
                document.body.scrollLeft + document.documentElement.scrollLeft;
            var d = document.body.scrollTop + document.documentElement.scrollTop;
            this.pageX = a.pageX != EMBb ? a.pageX : a.clientX + b;
            this.pageY = a.pageY != EMBb ? a.pageY : a.clientY + d
        }
        this.keyCode = a.keyCode ? a.keyCode : a.which;
        this.charCode = a.charCode || ("keypress" == this.type ? this.keyCode : 0);
        this.altKey = a.altKey;
        this.ctrlKey = a.ctrlKey;
        this.shiftKey = a.shiftKey;
        "MozMousePixelScroll" == this.type ? (this.wheelDeltaX = a.axis == a.HORIZONTAL_AXIS ? a.detail : 0, this.wheelDeltaY = a.axis ==
            a.HORIZONTAL_AXIS ? 0 : a.detail) : window.opera ? (this.wheelDeltaX = 0, this.wheelDeltaY = a.detail) : 0 == a.wheelDelta % 120 ? "WebkitTransform"in document.documentElement.style ? window.a && 0 == navigator.platform.indexOf("Mac") ? (this.wheelDeltaX = a.wheelDeltaX / -30, this.wheelDeltaY = a.wheelDeltaY / -30) : (this.wheelDeltaX = a.wheelDeltaX / -1.2, this.wheelDeltaY = a.wheelDeltaY / -1.2) : (this.wheelDeltaX = 0, this.wheelDeltaY = a.wheelDelta / -1.6) : (this.wheelDeltaX = a.wheelDeltaX / -3, this.wheelDeltaY = a.wheelDeltaY / -3)
    }
}
EMB = EMBOb.prototype;
EMB.Rb = EMBd;
EMB.type = "";
EMB.target = EMBd;
EMB.relatedTarget = EMBd;
EMB.currentTarget = EMBd;
EMB.data = EMBd;
EMB.source = EMBd;
EMB.keyCode = 0;
EMB.charCode = 0;
EMB.altKey = EMBe;
EMB.ctrlKey = EMBe;
EMB.shiftKey = EMBe;
EMB.clientX = 0;
EMB.clientY = 0;
EMB.pageX = 0;
EMB.pageY = 0;
EMB.wheelDeltaX = 0;
EMB.wheelDeltaY = 0;
EMB.rotation = 0;
EMB.scale = 1;
EMB.preventDefault = function () {
    this.Rb.returnValue = EMBe;
    this.Rb.preventDefault && this.Rb.preventDefault()
};
var EMBPb = {stopPropagation: 1, preventMouseEvent: 1, preventManipulation: 1, preventDefault: 1, layerX: 1, layerY: 1, scale: 1, rotation: 1};
var EMBQb = EMBg("yt.events.listeners_") || {};
EMBn("yt.events.listeners_", EMBQb);
var EMBRb = EMBg("yt.events.counter_") || {count: 0};
EMBn("yt.events.counter_", EMBRb);
function EMBSb(a, b, c, d) {
    return EMBSa(EMBQb, function (e) {
        return e[0] == a && e[1] == b && e[2] == c && e[4] == !!d
    })
}
function EMBI(a, b, c, d) {
    if (!a || !a.addEventListener && !a.attachEvent)return"";
    d = !!d;
    var e = EMBSb(a, b, c, d);
    if (e)return e;
    var e = ++EMBRb.count + "", f = !(!("mouseenter" == b || "mouseleave" == b) || !a.addEventListener || "onmouseenter"in document), g;
    g = f ? function (d) {
        d = new EMBOb(d);
        if (!EMBFb(d.relatedTarget, function (b) {
            return b == a
        }))return d.currentTarget = a, d.type = b, c.call(a, d)
    } : function (b) {
        b = new EMBOb(b);
        b.currentTarget = a;
        return c.call(a, b)
    };
    EMBQb[e] = [a, b, c, g, d];
    a.addEventListener ? "mouseenter" == b && f ? a.addEventListener("mouseover",
        g, d) : "mouseleave" == b && f ? a.addEventListener("mouseout", g, d) : "mousewheel" == b && "MozBoxSizing"in document.documentElement.style ? a.addEventListener("MozMousePixelScroll", g, d) : a.addEventListener(b, g, d) : a.attachEvent("on" + b, g);
    return e
}
function EMBTb(a, b, c) {
    EMBUb(a, b, function (a) {
        return EMBv(a, c)
    })
}
function EMBUb(a, b, c) {
    var d = a || document;
    EMBI(d, "click", function (a) {
        var f = EMBFb(a.target, function (a) {
            return a === d || c(a)
        });
        f && (f !== d && !f.disabled) && (a.currentTarget = f, b.call(f, a))
    })
}
function EMBVb(a) {
    "string" == typeof a && (a = [a]);
    EMBr(a, function (a) {
        if (a in EMBQb) {
            var c = EMBQb[a], d = c[0], e = c[1], f = c[3], c = c[4];
            d.removeEventListener ? d.removeEventListener(e, f, c) : d.detachEvent("on" + e, f);
            delete EMBQb[a]
        }
    })
}
function EMBWb(a) {
    if (document.createEvent) {
        var b = document.createEvent("HTMLEvents");
        b.initEvent("click", EMBc, EMBc);
        a.dispatchEvent(b)
    } else b = document.createEventObject(), a.fireEvent("onclick", b)
};
function EMBXb() {
    this.a = EMBm()
}
new EMBXb;
EMBXb.prototype.get = function () {
    return this.a
};
var EMBYb = "StopIteration"in EMBf ? EMBf.StopIteration : Error("StopIteration");
function EMBZb() {
}
EMBZb.prototype.a = function () {
    EMBa(EMBYb)
};
EMBZb.prototype.ca = function () {
    return this
};
function EMB_b(a) {
    if (a instanceof EMBZb)return a;
    if ("function" == typeof a.ca)return a.ca(EMBe);
    if (EMBj(a)) {
        var b = 0, c = new EMBZb;
        c.a = function () {
            for (; ;) {
                b >= a.length && EMBa(EMBYb);
                if (b in a)return a[b++];
                b++
            }
        };
        return c
    }
    EMBa(Error("Not implemented"))
}
function EMB0b(a, b) {
    if (EMBj(a))try {
        EMBr(a, b, EMBb)
    } catch (c) {
        c !== EMBYb && EMBa(c)
    } else {
        a = EMB_b(a);
        try {
            for (; ;)b.call(EMBb, a.a(), EMBb, a)
        } catch (d) {
            d !== EMBYb && EMBa(d)
        }
    }
}
function EMB1b(a) {
    if (EMBj(a))return EMBCa(a);
    a = EMB_b(a);
    var b = [];
    EMB0b(a, function (a) {
        b.push(a)
    });
    return b
};
function EMB2b(a) {
    if ("function" == typeof a.Y)return a.Y();
    if (EMBk(a))return a.split("");
    if (EMBj(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++)b.push(a[d]);
        return b
    }
    return EMBQa(a)
}
function EMB3b(a, b, c) {
    if ("function" == typeof a.forEach)a.forEach(b, c); else if (EMBj(a) || EMBk(a))EMBr(a, b, c); else {
        var d;
        if ("function" == typeof a.ka)d = a.ka(); else if ("function" != typeof a.Y)if (EMBj(a) || EMBk(a)) {
            d = [];
            for (var e = a.length, f = 0; f < e; f++)d.push(f)
        } else d = EMBRa(a); else d = EMBb;
        for (var e = EMB2b(a), f = e.length, g = 0; g < f; g++)b.call(c, e[g], d && d[g], a)
    }
};
function EMB4b(a, b) {
    this.b = {};
    this.a = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && EMBa(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2)EMB5b(this, arguments[d], arguments[d + 1])
    } else if (a) {
        a instanceof EMB4b ? (c = a.ka(), d = a.Y()) : (c = EMBRa(a), d = EMBQa(a));
        for (var e = 0; e < c.length; e++)EMB5b(this, c[e], d[e])
    }
}
EMB = EMB4b.prototype;
EMB.o = 0;
EMB.tb = 0;
EMB.ma = function () {
    return this.o
};
EMB.Y = function () {
    EMB6b(this);
    for (var a = [], b = 0; b < this.a.length; b++)a.push(this.b[this.a[b]]);
    return a
};
EMB.ka = function () {
    EMB6b(this);
    return this.a.concat()
};
EMB.equals = function (a, b) {
    if (this === a)return EMBc;
    if (this.o != a.ma())return EMBe;
    var c = b || EMB7b;
    EMB6b(this);
    for (var d, e = 0; d = this.a[e]; e++)if (!c(this.get(d), a.get(d)))return EMBe;
    return EMBc
};
function EMB7b(a, b) {
    return a === b
}
EMB.clear = function () {
    this.b = {};
    this.tb = this.o = this.a.length = 0
};
function EMB6b(a) {
    if (a.o != a.a.length) {
        for (var b = 0, c = 0; b < a.a.length;) {
            var d = a.a[b];
            EMB8b(a.b, d) && (a.a[c++] = d);
            b++
        }
        a.a.length = c
    }
    if (a.o != a.a.length) {
        for (var e = {}, c = b = 0; b < a.a.length;)d = a.a[b], EMB8b(e, d) || (a.a[c++] = d, e[d] = 1), b++;
        a.a.length = c
    }
}
EMB.get = function (a, b) {
    return EMB8b(this.b, a) ? this.b[a] : b
};
function EMB5b(a, b, c) {
    EMB8b(a.b, b) || (a.o++, a.a.push(b), a.tb++);
    a.b[b] = c
}
EMB.u = function () {
    return new EMB4b(this)
};
EMB.ca = function (a) {
    EMB6b(this);
    var b = 0, c = this.a, d = this.b, e = this.tb, f = this, g = new EMBZb;
    g.a = function () {
        for (; ;) {
            e != f.tb && EMBa(Error("The map has changed since the iterator was created"));
            b >= c.length && EMBa(EMBYb);
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};
function EMB8b(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};
function EMB9b(a) {
    return EMB$b(a || arguments.callee.caller, [])
}
function EMB$b(a, b) {
    var c = [];
    if (EMBs(b, a))c.push("[...circular reference...]"); else if (a && 50 > b.length) {
        c.push(EMBac(a) + "(");
        for (var d = a.arguments, e = 0; e < d.length; e++) {
            0 < e && c.push(", ");
            var f;
            f = d[e];
            switch (typeof f) {
                case "object":
                    f = f ? "object" : "null";
                    break;
                case "string":
                    break;
                case "number":
                    f = String(f);
                    break;
                case "boolean":
                    f = f ? "true" : "false";
                    break;
                case "function":
                    f = (f = EMBac(f)) ? f : "[fn]";
                    break;
                default:
                    f = typeof f
            }
            40 < f.length && (f = f.substr(0, 40) + "...");
            c.push(f)
        }
        b.push(a);
        c.push(")\n");
        try {
            c.push(EMB$b(a.caller,
                b))
        } catch (g) {
            c.push("[exception trying to get caller]\n")
        }
    } else a ? c.push("[...long stack...]") : c.push("[end]");
    return c.join("")
}
function EMBac(a) {
    if (EMBbc[a])return EMBbc[a];
    a = String(a);
    if (!EMBbc[a]) {
        var b = /function ([^\(]+)/.exec(a);
        EMBbc[a] = b ? b[1] : "[Anonymous]"
    }
    return EMBbc[a]
}
var EMBbc = {};
function EMBcc(a, b, c, d, e) {
    "number" == typeof e || EMBdc++;
    d || EMBm();
    this.e = b;
    delete this.b;
    delete this.a
}
EMBcc.prototype.b = EMBd;
EMBcc.prototype.a = EMBd;
var EMBdc = 0;
function EMBec() {
}
EMBec.prototype.a = EMBd;
EMBec.prototype.e = EMBd;
EMBec.prototype.b = EMBd;
function EMBfc(a, b) {
    this.name = a;
    this.value = b
}
EMBfc.prototype.toString = function () {
    return this.name
};
var EMBgc = new EMBfc("SEVERE", 1E3), EMBhc = new EMBfc("WARNING", 900), EMBic = new EMBfc("INFO", 800), EMBjc = new EMBfc("CONFIG", 700), EMBkc = new EMBfc("FINE", 500);
function EMBlc(a) {
    return a.e ? a.e : a.a ? EMBlc(a.a) : EMBd
}
EMBec.prototype.log = function (a, b, c) {
    if (a.value >= EMBlc(this).value) {
        a = "log:" + this.g(a, b, c).e;
        EMBf.console && (EMBf.console.timeStamp ? EMBf.console.timeStamp(a) : EMBf.console.markTimeline && EMBf.console.markTimeline(a));
        EMBf.msWriteProfilerMark && EMBf.msWriteProfilerMark(a);
        for (a = this; a;)a = a.a
    }
};
EMBec.prototype.g = function (a, b, c) {
    var d = new EMBcc(0, String(b));
    if (c) {
        d.b = c;
        var e;
        var f = arguments.callee.caller;
        try {
            var g;
            var h = EMBg("window.location.href");
            if (EMBk(c))g = {message: c, name: "Unknown error", lineNumber: "Not available", fileName: h, stack: "Not available"}; else {
                var k, m, l = EMBe;
                try {
                    k = c.lineNumber || c.Fe || "Not available"
                } catch (p) {
                    k = "Not available", l = EMBc
                }
                try {
                    m = c.fileName || c.filename || c.sourceURL || EMBf.$googDebugFname || h
                } catch (n) {
                    m = "Not available", l = EMBc
                }
                g = l || !c.lineNumber || !c.fileName || !c.stack ?
                {message: c.message, name: c.name, lineNumber: k, fileName: m, stack: c.stack || "Not available"} : c
            }
            e = "Message: " + EMBp(g.message) + '\nUrl: <a href="view-source:' + g.fileName + '" target="_new">' + g.fileName + "</a>\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + EMBp(g.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + EMBp(EMB9b(f) + "-> ")
        } catch (u) {
            e = "Exception trying to expose exception! You win, we lose. " + u
        }
        d.a = e
    }
    return d
};
EMBec.prototype.info = function (a, b) {
    this.log(EMBic, a, b)
};
function EMBJ(a, b) {
    a.log(EMBkc, b, EMBb)
}
var EMBmc = {}, EMBnc = EMBd;
function EMBoc(a) {
    EMBnc || (EMBnc = new EMBec, EMBmc[""] = EMBnc, EMBnc.e = EMBjc);
    var b;
    if (!(b = EMBmc[a])) {
        b = new EMBec;
        var c = a.lastIndexOf("."), d = a.substr(c + 1), c = EMBoc(a.substr(0, c));
        c.b || (c.b = {});
        c.b[d] = b;
        b.a = c;
        EMBmc[a] = b
    }
    return b
};
function EMBpc(a) {
    a = String(a);
    if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))try {
        return eval("(" + a + ")")
    } catch (b) {
    }
    EMBa(Error("Invalid JSON string: " + a))
}
function EMBqc(a) {
    return eval("(" + a + ")")
}
function EMBrc(a) {
    return EMBsc(new EMBtc(EMBb), a)
}
function EMBtc(a) {
    this.a = a
}
function EMBsc(a, b) {
    var c = [];
    EMBuc(a, b, c);
    return c.join("")
}
function EMBuc(a, b, c) {
    switch (typeof b) {
        case "string":
            EMBvc(b, c);
            break;
        case "number":
            c.push(isFinite(b) && !isNaN(b) ? b : "null");
            break;
        case "boolean":
            c.push(b);
            break;
        case "undefined":
            c.push("null");
            break;
        case "object":
            if (b == EMBd) {
                c.push("null");
                break
            }
            if (EMBi(b)) {
                var d = b.length;
                c.push("[");
                for (var e = "", f = 0; f < d; f++)c.push(e), e = b[f], EMBuc(a, a.a ? a.a.call(b, String(f), e) : e, c), e = ",";
                c.push("]");
                break
            }
            c.push("{");
            d = "";
            for (f in b)Object.prototype.hasOwnProperty.call(b, f) && (e = b[f], "function" != typeof e && (c.push(d),
                EMBvc(f, c), c.push(":"), EMBuc(a, a.a ? a.a.call(b, f, e) : e, c), d = ","));
            c.push("}");
            break;
        case "function":
            break;
        default:
            EMBa(Error("Unknown type: " + typeof b))
    }
}
var EMBwc = {'"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\x0B": "\\u000b"}, EMBxc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
function EMBvc(a, b) {
    b.push('"', a.replace(EMBxc, function (a) {
        if (a in EMBwc)return EMBwc[a];
        var b = a.charCodeAt(0), e = "\\u";
        16 > b ? e += "000" : 256 > b ? e += "00" : 4096 > b && (e += "0");
        return EMBwc[a] = e + b.toString(16)
    }), '"')
};
var EMByc = window.yt && window.yt.config_ || {};
EMBn("yt.config_", EMByc);
var EMBzc = window.yt && window.yt.tokens_ || {};
EMBn("yt.tokens_", EMBzc);
EMBn("yt.globals_", window.yt && window.yt.globals_ || {});
var EMBAc = window.yt && window.yt.msgs_ || {};
EMBn("yt.msgs_", EMBAc);
var EMBBc = window.yt && window.yt.timeouts_ || [];
EMBn("yt.timeouts_", EMBBc);
EMBn("yt.intervals_", window.yt && window.yt.intervals_ || []);
function EMBCc(a) {
    EMBDc(EMByc, arguments)
}
function EMBK(a, b) {
    return a in EMByc ? EMByc[a] : b
}
function EMBL(a, b) {
    var c = window.setTimeout(a, b);
    EMBBc.push(c);
    return c
}
function EMBEc(a, b, c) {
    var d = b || {};
    if (a = a in EMBAc ? EMBAc[a] : c)for (var e in d)a = a.replace(RegExp("\\$" + e, "gi"), function () {
        return d[e]
    });
    return a
}
function EMBDc(a, b) {
    if (1 < b.length) {
        var c = b[0];
        a[c] = b[1]
    } else {
        var d = b[0];
        for (c in d)a[c] = d[c]
    }
}
var EMBFc = "Microsoft Internet Explorer" == navigator.appName;
function EMBGc(a, b) {
    this.source = EMBd;
    this.g = a || EMBd;
    this.origin = "*";
    this.p = window.document.location.protocol + "//" + window.document.location.hostname;
    this.q = b;
    this.e = this.a = this.b = this.i = EMBd;
    EMBI(window, "message", EMBl(this.j, this))
}
EMBGc.prototype.j = function (a) {
    var b = this.q || EMBK("POST_MESSAGE_ORIGIN") || this.p;
    if (!("*" != b && a.origin != b) && !(this.g && a.source != this.g))switch (this.source = a.source, this.origin = "null" == a.origin ? this.origin : a.origin, a = EMBpc(a.data), this.i = a.id, a.event) {
        case "listening":
            this.a && (this.a(), this.a = EMBd);
            break;
        case "command":
            this.b && (!this.e || EMBs(this.e, a.func)) && this.b(a.func, a.args)
    }
};
function EMBHc(a) {
    var b = EMBIc;
    b.source && (a.id = b.i, a = EMBrc(a), b.source.postMessage(a, b.origin))
};
function EMBJc(a) {
    a = a || {};
    this.url = a.url || "";
    this.urlV8 = a.url_v8 || "";
    this.urlV9As2 = a.url_v9as2 || "";
    this.args = a.args || EMBUa(EMBKc);
    this.assets = a.assets || {};
    this.attrs = a.attrs || EMBUa(EMBLc);
    this.params = a.params || EMBUa(EMBMc);
    this.minVersion = a.min_version || "8.0.0";
    this.fallback = a.fallback || EMBd;
    this.fallbackMessage = a.fallbackMessage || EMBd;
    this.html5 = !!a.html5;
    this.disable = a.disable || {}
}
var EMBKc = {enablejsapi: 1}, EMBLc = {}, EMBMc = {allowscriptaccess: "always", allowfullscreen: "true", bgcolor: "#000000"};
function EMBNc(a) {
    a instanceof EMBJc || (a = new EMBJc(a));
    return a
}
EMBJc.prototype.u = function () {
    var a = new EMBJc, b;
    for (b in this) {
        var c = this[b];
        "object" == EMBda(c) ? a[b] = EMBUa(c) : a[b] = c
    }
    return a
};
function EMBOc(a, b, c, d, e, f, g) {
    var h = "";
    a && (h += a + ":");
    c && (h += "//", b && (h += b + "@"), h += c, d && (h += ":" + d));
    e && (h += e);
    f && (h += "?" + f);
    g && (h += "#" + g);
    return h
}
var EMBPc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function EMBQc(a) {
    if (EMBRc) {
        EMBRc = EMBe;
        var b = EMBf.location;
        if (b) {
            var c = b.href;
            if (c && (c = EMBSc(c)) && c != b.hostname)EMBRc = EMBc, EMBa(Error())
        }
    }
    return a.match(EMBPc)
}
var EMBRc = EMBA;
function EMBSc(a) {
    return(a = EMBQc(a)[3] || EMBd) && decodeURIComponent(a)
}
function EMBTc() {
    var a = EMBQc(document.location.href);
    return EMBOc(a[1], a[2], a[3], a[4])
}
function EMBUc(a) {
    a = EMBQc(a);
    return EMBOc(EMBd, EMBd, EMBd, EMBd, a[5], a[6], a[7])
}
function EMBVc(a) {
    if (a[1]) {
        var b = a[0], c = b.indexOf("#");
        0 <= c && (a.push(b.substr(c)), a[0] = b = b.substr(0, c));
        c = b.indexOf("?");
        0 > c ? a[1] = "?" : c == b.length - 1 && (a[1] = EMBb)
    }
    return a.join("")
}
function EMBWc(a, b, c) {
    if (EMBi(b))for (var d = 0; d < b.length; d++)EMBWc(a, String(b[d]), c); else b != EMBd && c.push("&", a, "" === b ? "" : "=", encodeURIComponent(String(b)))
}
function EMBXc(a, b, c) {
    Math.max(b.length - (c || 0), 0);
    for (c = c || 0; c < b.length; c += 2)EMBWc(b[c], b[c + 1], a);
    return a
}
function EMBYc(a, b) {
    for (var c in b)EMBWc(c, b[c], a);
    return a
}
function EMBZc(a, b) {
    return EMBVc(2 == arguments.length ? EMBXc([a], arguments[1], 0) : EMBXc([a], arguments, 1))
};
function EMB_c(a, b) {
    var c;
    if (a instanceof EMB_c)this.Ia = EMBh(b) ? b : a.Ia, EMB0c(this, a.bb), this.ab = a.ab, EMB1c(this, a.Ha), EMB2c(this, a.$a), this.vb = a.vb, EMB3c(this, a.a.u()), this.Qb = a.Qb; else if (a && (c = EMBQc(String(a)))) {
        this.Ia = !!b;
        EMB0c(this, c[1] || "", EMBc);
        var d = c[2] || "";
        this.ab = d ? decodeURIComponent(d) : "";
        EMB1c(this, c[3] || "", EMBc);
        EMB2c(this, c[4]);
        this.vb = (d = c[5] || "") ? decodeURIComponent(d) : "";
        EMB3c(this, c[6] || "", EMBc);
        this.Qb = (c = c[7] || "") ? decodeURIComponent(c) : ""
    } else this.Ia = !!b, this.a = new EMB4c(EMBd,
        0, this.Ia)
}
EMB = EMB_c.prototype;
EMB.bb = "";
EMB.ab = "";
EMB.Ha = "";
EMB.$a = EMBd;
EMB.vb = "";
EMB.Qb = "";
EMB.Ia = EMBe;
EMB.toString = function () {
    var a = [], b = this.bb;
    b && a.push(EMB5c(b, EMB6c), ":");
    if (b = this.Ha) {
        a.push("//");
        var c = this.ab;
        c && a.push(EMB5c(c, EMB6c), "@");
        a.push(encodeURIComponent(String(b)));
        b = this.$a;
        b != EMBd && a.push(":", String(b))
    }
    if (b = this.vb)this.Ha && "/" != b.charAt(0) && a.push("/"), a.push(EMB5c(b, "/" == b.charAt(0) ? EMB7c : EMB8c));
    (b = this.a.toString()) && a.push("?", b);
    (b = this.Qb) && a.push("#", EMB5c(b, EMB9c));
    return a.join("")
};
EMB.u = function () {
    return new EMB_c(this)
};
function EMB0c(a, b, c) {
    a.bb = c ? b ? decodeURIComponent(b) : "" : b;
    a.bb && (a.bb = a.bb.replace(/:$/, ""))
}
function EMB1c(a, b, c) {
    a.Ha = c ? b ? decodeURIComponent(b) : "" : b
}
function EMB2c(a, b) {
    b ? (b = Number(b), (isNaN(b) || 0 > b) && EMBa(Error("Bad port number " + b)), a.$a = b) : a.$a = EMBd
}
function EMB3c(a, b, c) {
    b instanceof EMB4c ? (a.a = b, EMB$c(a.a, a.Ia)) : (c || (b = EMB5c(b, EMBad)), a.a = new EMB4c(b, 0, a.Ia))
}
function EMBM(a, b, c) {
    a = a.a;
    EMBbd(a);
    a.a = EMBd;
    b = EMBcd(a, b);
    EMBdd(a, b) && (a.o -= a.z.get(b).length);
    EMB5b(a.z, b, [c]);
    a.o++
}
function EMBed(a, b, c) {
    EMBi(c) || (c = [String(c)]);
    EMBfd(a.a, b, c)
}
function EMBgd(a) {
    EMBM(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ EMBm()).toString(36));
    return a
}
function EMBhd(a, b, c, d, e) {
    var f = new EMB_c(EMBd, EMBb);
    a && EMB0c(f, a);
    b && (f.ab = b);
    c && EMB1c(f, c);
    d && EMB2c(f, d);
    e && (f.vb = e);
    return f
}
function EMB5c(a, b) {
    return EMBk(a) ? encodeURI(a).replace(b, EMBid) : EMBd
}
function EMBid(a) {
    a = a.charCodeAt(0);
    return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
}
var EMB6c = /[#\/\?@]/g, EMB8c = /[\#\?:]/g, EMB7c = /[\#\?]/g, EMBad = /[\#\?@]/g, EMB9c = /#/g;
function EMB4c(a, b, c) {
    this.a = a || EMBd;
    this.b = !!c
}
function EMBbd(a) {
    if (!a.z && (a.z = new EMB4b, a.o = 0, a.a))for (var b = a.a.split("&"), c = 0; c < b.length; c++) {
        var d = b[c].indexOf("="), e = EMBd, f = EMBd;
        0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
        e = EMBna(e);
        e = EMBcd(a, e);
        d = a;
        f = f ? EMBna(f) : "";
        EMBbd(d);
        d.a = EMBd;
        var e = EMBcd(d, e), g = d.z.get(e);
        g || EMB5b(d.z, e, g = []);
        g.push(f);
        d.o++
    }
}
EMB = EMB4c.prototype;
EMB.z = EMBd;
EMB.o = EMBd;
EMB.ma = function () {
    EMBbd(this);
    return this.o
};
function EMBjd(a, b) {
    EMBbd(a);
    b = EMBcd(a, b);
    if (EMB8b(a.z.b, b)) {
        a.a = EMBd;
        a.o -= a.z.get(b).length;
        var c = a.z;
        EMB8b(c.b, b) && (delete c.b[b], c.o--, c.tb++, c.a.length > 2 * c.o && EMB6b(c))
    }
}
EMB.clear = function () {
    this.z = this.a = EMBd;
    this.o = 0
};
function EMBdd(a, b) {
    EMBbd(a);
    b = EMBcd(a, b);
    return EMB8b(a.z.b, b)
}
EMB.ka = function () {
    EMBbd(this);
    for (var a = this.z.Y(), b = this.z.ka(), c = [], d = 0; d < b.length; d++)for (var e = a[d], f = 0; f < e.length; f++)c.push(b[d]);
    return c
};
EMB.Y = function (a) {
    EMBbd(this);
    var b = [];
    if (a)EMBdd(this, a) && (b = EMBBa(b, this.z.get(EMBcd(this, a)))); else {
        a = this.z.Y();
        for (var c = 0; c < a.length; c++)b = EMBBa(b, a[c])
    }
    return b
};
EMB.get = function (a, b) {
    var c = a ? this.Y(a) : [];
    return 0 < c.length ? String(c[0]) : b
};
function EMBfd(a, b, c) {
    EMBjd(a, b);
    0 < c.length && (a.a = EMBd, EMB5b(a.z, EMBcd(a, b), EMBCa(c)), a.o += c.length)
}
EMB.toString = function () {
    if (this.a)return this.a;
    if (!this.z)return"";
    for (var a = [], b = this.z.ka(), c = 0; c < b.length; c++)for (var d = b[c], e = encodeURIComponent(String(d)), d = this.Y(d), f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g)
    }
    return this.a = a.join("&")
};
EMB.u = function () {
    var a = new EMB4c;
    a.a = this.a;
    this.z && (a.z = this.z.u(), a.o = this.o);
    return a
};
function EMBcd(a, b) {
    var c = String(b);
    a.b && (c = c.toLowerCase());
    return c
}
function EMB$c(a, b) {
    b && !a.b && (EMBbd(a), a.a = EMBd, EMB3b(a.z, function (a, b) {
        var e = b.toLowerCase();
        b != e && (EMBjd(this, b), EMBfd(this, e, a))
    }, a));
    a.b = b
};
var EMBkd = "corp.google.com youtube.com youtube-nocookie.com prod.google.com docs.google.com drive.google.com play.google.com".split(" ");
var EMBld = {}, EMBmd = 0;
function EMBnd(a) {
    if (a) {
        var b = new Image, c = "" + EMBmd++;
        EMBld[c] = b;
        b.onload = b.onerror = function () {
            delete EMBld[c]
        };
        b.src = a;
        b = eval("null")
    }
};
function EMBod() {
    var a = {v: 2, s: "youtube", action: EMBK("TIMING_ACTION")}, b = EMBpd("tick"), c = EMBpd("info"), d = EMBK("TIMING_INFO") || {}, e;
    for (e in c)a[e] = c[e];
    for (var f in d)a[f] = d[f];
    d = b.start;
    delete b.start;
    e = b.nav;
    delete b.nav;
    var g;
    if (e)g = Math.max(Math.round(d - e), 0); else {
        var h;
        try {
            h = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance
        } catch (k) {
        }
        h ? g = h.timing.responseStart - h.timing.navigationStart : c.pt && (g = c.pt)
    }
    g && (a.srt = g);
    b.vr && b.gv && (b.vl = Math.round(b.vr - b.gv + d));
    b.aft || (b.aft = b.vr && b.cl && b.cl > b.vr ? b.cl : b.vr ? b.vr : b.ol);
    b.aft && b.plev && (b.aft = Math.min(b.aft, b.plev));
    c = {};
    h = [];
    for (var m in b)e = Math.max(Math.round(b[m] - d), 0), c[m] = e, h.push(m + "." + e);
    a.rt = h.join(",");
    var b = "https:" == window.location.protocol ? "https://gg.google.com/csi" : "http://csi.gstatic.com/csi", d = "", l;
    for (l in a)d += "&" + l + "=" + a[l];
    EMBnd(b + "?" + d.substring(1));
    if (a = document.getElementById("debug-csi-data")) {
        l = [];
        g && l.push("<tr><td>srt</td><td>" + g + "</td></tr>");
        for (m in c)l.push("<tr><td>" + m + "</td><td>" +
            c[m] + "</td></tr>");
        a.innerHTML = "<table>" + l.join("") + "</table>"
    }
}
function EMBpd(a) {
    var b = EMBg("yt.timing.data_") || {}, c = b[a] || {};
    b[a] = c;
    EMBn("yt.timing.data_", b);
    return c
};
function EMBqd(a) {
    this.a = a
}
var EMBrd = /\s*;\s*/;
function EMBsd(a, b, c, d, e, f) {
    /[;=\s]/.test(b) && EMBa(Error('Invalid cookie name "' + b + '"'));
    /[;\r\n]/.test(c) && EMBa(Error('Invalid cookie value "' + c + '"'));
    EMBh(d) || (d = -1);
    f = f ? ";domain=" + f : "";
    e = e ? ";path=" + e : "";
    d = 0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(EMBm() + 1E3 * d)).toUTCString();
    a.a.cookie = b + "=" + c + f + e + d + ""
}
EMB = EMBqd.prototype;
EMB.get = function (a, b) {
    for (var c = a + "=", d = (this.a.cookie || "").split(EMBrd), e = 0, f; f = d[e]; e++) {
        if (0 == f.lastIndexOf(c, 0))return f.substr(c.length);
        if (f == a)return""
    }
    return b
};
EMB.ka = function () {
    return EMBtd(this).keys
};
EMB.Y = function () {
    return EMBtd(this).ee
};
EMB.ma = function () {
    return!this.a.cookie ? 0 : (this.a.cookie || "").split(EMBrd).length
};
EMB.clear = function () {
    for (var a = EMBtd(this).keys, b = a.length - 1; 0 <= b; b--) {
        var c = a[b];
        this.get(c);
        EMBsd(this, c, "", 0, EMBb, EMBb)
    }
};
function EMBtd(a) {
    a = (a.a.cookie || "").split(EMBrd);
    for (var b = [], c = [], d, e, f = 0; e = a[f]; f++)d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
    return{keys: b, ee: c}
}
var EMBud = new EMBqd(document);
EMBud.b = 3950;
function EMBvd(a, b, c) {
    EMBsd(EMBud, "" + a, b, c, "/", "youtube.com")
}
function EMBwd(a, b) {
    return EMBud.get("" + a, b)
}
function EMBxd(a) {
    a = "" + a;
    EMBud.get(a);
    EMBsd(EMBud, a, "", 0, "/", "youtube.com")
};
function EMBN() {
}
EMBN.prototype.q = EMBe;
EMBN.prototype.ub = function () {
    this.q || (this.q = EMBc, this.G())
};
function EMByd(a, b) {
    a.F || (a.F = []);
    a.F.push(EMBl(b, EMBb))
}
EMBN.prototype.G = function () {
    if (this.F)for (; this.F.length;)this.F.shift()()
};
function EMBzd(a) {
    a && "function" == typeof a.ub && a.ub()
};
function EMBAd() {
};
function EMBBd() {
}
EMBo(EMBBd, EMBAd);
EMBBd.prototype.ma = function () {
    var a = 0;
    EMB0b(this.ca(EMBc), function () {
        a++
    });
    return a
};
EMBBd.prototype.clear = function () {
    var a = EMB1b(this.ca(EMBc)), b = this;
    EMBr(a, function (a) {
        b.fb(a)
    })
};
function EMBCd(a) {
    this.a = a
}
EMBo(EMBCd, EMBBd);
EMB = EMBCd.prototype;
EMB.eb = function () {
    if (!this.a)return EMBe;
    try {
        return this.a.setItem("__sak", "1"), this.a.removeItem("__sak"), EMBc
    } catch (a) {
        return EMBe
    }
};
EMB.Ub = function (a, b) {
    try {
        this.a.setItem(a, b)
    } catch (c) {
        0 == this.a.length && EMBa("Storage mechanism: Storage disabled"), EMBa("Storage mechanism: Quota exceeded")
    }
};
EMB.get = function (a) {
    a = this.a.getItem(a);
    !EMBk(a) && a !== EMBd && EMBa("Storage mechanism: Invalid value was encountered");
    return a
};
EMB.fb = function (a) {
    this.a.removeItem(a)
};
EMB.ma = function () {
    return this.a.length
};
EMB.ca = function (a) {
    var b = 0, c = this.a, d = new EMBZb;
    d.a = function () {
        b >= c.length && EMBa(EMBYb);
        var d;
        d = c.key(b++);
        if (a)return d;
        d = c.getItem(d);
        EMBk(d) || EMBa("Storage mechanism: Invalid value was encountered");
        return d
    };
    return d
};
EMB.clear = function () {
    this.a.clear()
};
EMB.key = function (a) {
    return this.a.key(a)
};
function EMBDd() {
    var a = EMBd;
    try {
        a = window.localStorage || EMBd
    } catch (b) {
    }
    this.a = a
}
EMBo(EMBDd, EMBCd);
function EMBEd(a) {
    this.Na = a;
    this.fd = new EMBtc
}
EMB = EMBEd.prototype;
EMB.Na = EMBd;
EMB.fd = EMBd;
EMB.Ka = function (a, b) {
    EMBh(b) ? this.Na.Ub(a, EMBsc(this.fd, b)) : this.Na.fb(a)
};
EMB.get = function (a) {
    a = this.Na.get(a);
    if (a !== EMBd)try {
        return EMBpc(a)
    } catch (b) {
        EMBa("Storage: Invalid value was encountered")
    }
};
EMB.ba = function (a) {
    this.Na.fb(a)
};
function EMBFd() {
    var a = new EMBDd;
    a && a.eb() && (this.a = new EMBEd(a))
}
EMBo(EMBFd, EMBN);
EMBFd.prototype.a = EMBd;
function EMBGd(a) {
    var b = {volume: 100, muted: EMBe, nonNormalized: 100};
    if (a.a) {
        var c = {};
        try {
            c = a.a.get("yt-player-volume") || {}
        } catch (d) {
            a.a.ba("yt-player-volume")
        }
        b.volume = isNaN(c.volume) ? 100 : Math.min(Math.max(c.volume, 0), 100);
        b.nonNormalized = isNaN(c.nonNormalized) ? b.volume : c.nonNormalized;
        b.muted = c.muted == EMBb ? EMBe : c.muted
    }
    return b
}
EMBFd.prototype.G = function () {
    this.a = EMBd;
    EMBFd.Q.G.call(this)
};
function EMBO() {
    this.a = [];
    this.S = {}
}
EMBo(EMBO, EMBN);
EMB = EMBO.prototype;
EMB.Vc = 1;
EMB.Ob = 0;
EMB.W = function (a, b, c) {
    var d = this.S[a];
    d || (d = this.S[a] = []);
    var e = this.Vc;
    this.a[e] = a;
    this.a[e + 1] = b;
    this.a[e + 2] = c;
    this.Vc = e + 3;
    d.push(e);
    return e
};
EMB.sc = function (a) {
    if (0 != this.Ob)return this.b || (this.b = []), this.b.push(a), EMBe;
    var b = this.a[a];
    if (b) {
        var c = this.S[b];
        c && EMBAa(c, a);
        delete this.a[a];
        delete this.a[a + 1];
        delete this.a[a + 2]
    }
    return!!b
};
EMB.C = function (a, b) {
    var c = this.S[a];
    if (c) {
        this.Ob++;
        for (var d = EMBFa(arguments, 1), e = 0, f = c.length; e < f; e++) {
            var g = c[e];
            this.a[g + 1].apply(this.a[g + 2], d)
        }
        this.Ob--;
        if (this.b && 0 == this.Ob)for (; c = this.b.pop();)this.sc(c);
        return 0 != e
    }
    return EMBe
};
EMB.clear = function (a) {
    if (a) {
        var b = this.S[a];
        b && (EMBr(b, this.sc, this), delete this.S[a])
    } else this.a.length = 0, this.S = {}
};
EMB.ma = function (a) {
    if (a) {
        var b = this.S[a];
        return b ? b.length : 0
    }
    a = 0;
    for (b in this.S)a += this.ma(b);
    return a
};
EMB.G = function () {
    EMBO.Q.G.call(this);
    delete this.a;
    delete this.S;
    delete this.b
};
function EMBP(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
EMBP.prototype.u = function () {
    return new EMBP(this.top, this.right, this.bottom, this.left)
};
EMBP.prototype.floor = function () {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
EMBP.prototype.round = function () {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
EMBP.prototype.scale = function (a, b) {
    var c = EMBea(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};
function EMBHd(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
EMBHd.prototype.u = function () {
    return new EMBHd(this.left, this.top, this.width, this.height)
};
EMBHd.prototype.floor = function () {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
EMBHd.prototype.round = function () {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
EMBHd.prototype.scale = function (a, b) {
    var c = EMBea(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};
function EMBId(a, b, c) {
    var d;
    a:if (d = EMBua(c), a.style[d] === EMBb && (c = (EMBA ? "Webkit" : EMBz ? "Moz" : EMBy ? "ms" : EMB6a ? "O" : EMBd) + EMBva(c), a.style[c] !== EMBb)) {
        d = c;
        break a
    }
    d && (a.style[d] = b)
}
function EMBQ(a, b) {
    var c = EMBD(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, EMBd)) ? c[b] || c.getPropertyValue(b) || "" : ""
}
function EMBR(a, b) {
    return EMBQ(a, b) || (a.currentStyle ? a.currentStyle[b] : EMBd) || a.style && a.style[b]
}
function EMBJd(a) {
    var b = a.getBoundingClientRect();
    EMBy && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}
function EMBKd(a) {
    if (EMBy && !EMBC(8))return a.offsetParent;
    var b = EMBD(a), c = EMBR(a, "position"), d = "fixed" == c || "absolute" == c;
    for (a = a.parentNode; a && a != b; a = a.parentNode)if (c = EMBR(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c))return a;
    return EMBd
}
function EMBLd(a) {
    for (var b = new EMBP(0, Infinity, Infinity, 0), c = EMBmb(a), d = c.a.body, e = c.a.documentElement, f = !EMBA && EMBvb(c.a) ? c.a.documentElement : c.a.body; a = EMBKd(a);)if ((!EMBy || 0 != a.clientWidth) && (!EMBA || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != EMBR(a, "overflow")) {
        var g = EMBMd(a), h;
        h = a;
        if (EMBz && !EMBB("1.9")) {
            var k = parseFloat(EMBQ(h, "borderLeftWidth"));
            if (EMBNd(h))var m = h.offsetWidth - h.clientWidth - k - parseFloat(EMBQ(h, "borderRightWidth")), k = k + m;
            h = new EMBw(k, parseFloat(EMBQ(h, "borderTopWidth")))
        } else h =
            new EMBw(h.clientLeft, h.clientTop);
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
    c = (c.a.parentWindow || c.a.defaultView || window).document;
    c = EMBvb(c) ? c.documentElement : c.body;
    c = new EMBx(c.clientWidth, c.clientHeight);
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top &&
        0 <= b.left && b.bottom > b.top && b.right > b.left ? b : EMBd
}
function EMBMd(a) {
    var b, c = EMBD(a), d = EMBR(a, "position"), e = EMBz && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new EMBw(0, 0), g;
    b = c ? EMBD(c) : document;
    g = EMBy && !EMBC(9) && !EMBGb(EMBmb(b)) ? b.body : b.documentElement;
    if (a == g)return f;
    if (a.getBoundingClientRect)b = EMBJd(a), a = EMBHb(EMBmb(c)), f.x = b.left + a.x, f.y = b.top + a.y; else if (c.getBoxObjectFor && !e)b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (EMBA && "fixed" == EMBR(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (EMB6a || EMBA && "absolute" == d)f.y -= c.body.offsetTop;
        for (b = a; (b = EMBKd(b)) && b != c.body && b != g;)if (f.x -= b.scrollLeft, !EMB6a || "TR" != b.tagName)f.y -= b.scrollTop
    }
    return f
}
function EMBOd(a) {
    var b = "100%", c;
    b instanceof EMBx ? (c = b.height, b = b.width) : c = "100%";
    a.style.width = EMBPd(b, EMBc);
    a.style.height = EMBPd(c, EMBc)
}
function EMBPd(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}
function EMBQd(a) {
    if ("none" != EMBR(a, "display"))return EMBRd(a);
    var b = a.style, c = b.display, d = b.visibility, e = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = EMBRd(a);
    b.display = c;
    b.position = e;
    b.visibility = d;
    return a
}
function EMBRd(a) {
    var b = a.offsetWidth, c = a.offsetHeight, d = EMBA && !b && !c;
    return(!EMBh(b) || d) && a.getBoundingClientRect ? (a = EMBJd(a), new EMBx(a.right - a.left, a.bottom - a.top)) : new EMBx(b, c)
}
function EMBSd(a) {
    var b = EMBMd(a);
    a = EMBQd(a);
    return new EMBHd(b.x, b.y, a.width, a.height)
}
function EMBNd(a) {
    return"rtl" == EMBR(a, "direction")
}
function EMBTd(a, b) {
    if (/^\d+px?$/.test(b))return parseInt(b, 10);
    var c = a.style.left, d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}
function EMBUd(a, b) {
    var c = a.currentStyle ? a.currentStyle[b] : EMBd;
    return c ? EMBTd(a, c) : 0
}
var EMBVd = {thin: 2, medium: 4, thick: 6};
function EMBWd(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : EMBd))return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : EMBd;
    return c in EMBVd ? EMBVd[c] : EMBTd(a, c)
}
var EMBXd = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
function EMBS() {
    var a = EMBwd("PREF");
    if (a)for (var a = unescape(a).split("&"), b = 0; b < a.length; b++) {
        var c = a[b].split("="), d = c[0];
        (c = c[1]) && (EMBT[d] = c.toString())
    }
}
EMBca(EMBS);
var EMBT = EMBg("yt.prefs.UserPrefs.prefs_") || {};
EMBn("yt.prefs.UserPrefs.prefs_", EMBT);
function EMBYd(a) {
    /^f([1-9][0-9]*)$/.test(a) && EMBa("ExpectedRegexMatch: " + a)
}
function EMBZd(a) {
    /^\w+$/.test(a) || EMBa("ExpectedRegexMismatch: " + a)
}
function EMB_d(a) {
    a = EMBT[a] !== EMBb ? EMBT[a].toString() : EMBd;
    return a != EMBd && /^[A-Fa-f0-9]+$/.test(a) ? parseInt(a, 16) : EMBd
}
EMBS.prototype.get = function (a, b) {
    EMBZd(a);
    EMBYd(a);
    var c = EMBT[a] !== EMBb ? EMBT[a].toString() : EMBd;
    return c != EMBd ? c : b ? b : ""
};
function EMB0d(a, b) {
    EMBZd(a);
    EMBYd(a);
    b == EMBd && EMBa("ExpectedNotNull");
    EMBT[a] = b.toString()
}
function EMB1d(a, b) {
    return!!((EMB_d("f" + (Math.floor(b / 31) + 1)) || 0) & 1 << b % 31)
}
function EMB2d(a, b) {
    var c = "f" + (Math.floor(a / 31) + 1), d = 1 << a % 31, e = EMB_d(c) || 0, e = b ? e | d : e & ~d;
    0 == e ? delete EMBT[c] : (d = e.toString(16), EMBT[c] = d.toString())
}
function EMB3d() {
    var a = [], b;
    for (b in EMBT)a.push(b + "=" + escape(EMBT[b]));
    EMBvd("PREF", a.join("&"), 31536E4)
}
EMBS.prototype.clear = function () {
    EMBT = {}
};
var EMB4d = {jg: 0, Xe: 1, ad: 2, Lf: 3, Ye: 4, Lg: 5, Ng: 6, Kg: 7, Ig: 8, Jg: 9, Mg: 10, Hg: 11, qg: 12, pg: 13, og: 14, tf: 15, Yf: 16, ag: 17, bg: 18, $f: 19, Zf: 20, rg: 21, bf: 22, Gg: 23, af: 24, Ie: 25, cf: 26, rf: 27, mg: 28, $e: 29, lg: 30, yg: 31, xg: 32, of: 33, vg: 34, sg: 35, tg: 36, ug: 37, wg: 38, Mf: 39, eg: 40, Je: 41, dg: 42, Le: 43, $c: 44, ff: 45, Vf: 46, Ag: 47, Og: 48, Pg: 49, Rg: 50, ng: 51, Re: 52, Te: 53, Wf: 54, Hf: 55, df: 56, kg: 57, hg: 58, qf: 59, Sf: 60, If: 61, Nf: 62, Ke: 63, Dg: 64, Oe: 65, Ne: 66, Of: 67, We: 68, hf: 69, Bf: 70, Tf: 71, sf: 72, ig: 73, Pf: 74, bd: 75, Me: 76, cg: 77, jf: 78, Bg: 79, Jf: 80, Se: 81, Rf: 82, Cf: 83,
    Ef: 84, Df: 85, Ff: 86, Gf: 87, Pe: 88, He: 89, Qe: 90, Xf: 91, Uf: 92, Ve: 93, Qg: 94, nf: 95, mf: 96, pf: 97, Kf: 98, gf: 99, Qf: 100, vf: 101, uf: 102, xf: 103, yf: 104, wf: 105, Cg: 106, Be: 107, kf: 108, gg: 109, lf: 110, zf: 111, Af: 112, fg: 113, Ze: 114, Fg: 115, Eg: 116, zg: 117, Ue: 118, ef: 119};
function EMB5d(a, b) {
    if ((a = EMBE(a)) && a.style)a.style.display = b ? "" : "none", EMBLa(a, "hid", !b)
}
function EMB6d(a) {
    a = EMBE(a);
    return!a ? EMBe : !("none" == a.style.display || EMBv(a, "hid"))
}
function EMB7d(a) {
    if (a = EMBE(a))EMB6d(a) ? (a.style.display = "none", EMBt(a, "hid")) : (a.style.display = "", EMBu(a, "hid"))
}
function EMBU(a) {
    EMBr(arguments, function (a) {
        EMB5d(a, EMBc)
    })
}
function EMBV(a) {
    EMBr(arguments, function (a) {
        EMB5d(a, EMBe)
    })
};
function EMB8d(a) {
    "?" == a.charAt(0) && (a = a.substr(1));
    a = a.split("&");
    for (var b = {}, c = 0, d = a.length; c < d; c++) {
        var e = a[c].split("=");
        if (1 == e.length && e[0] || 2 == e.length) {
            var f = EMBna(e[0] || ""), e = EMBna(e[1] || "");
            f in b ? EMBi(b[f]) ? EMBDa(b[f], e) : b[f] = [b[f], e] : b[f] = e
        }
    }
    return b
}
function EMB9d(a) {
    "#" == a.charAt(0) && (a = "!" == a.charAt(1) ? a.substr(2) : a.substr(1));
    return EMB8d(a)
}
function EMB$d(a) {
    a = EMBYc([], a);
    a[0] = "";
    return a.join("")
}
var EMBae = EMBSc;
function EMBbe(a, b) {
    var c = a.split("?", 2);
    a = c[0];
    var c = EMB8d(c[1] || ""), d;
    for (d in b)c[d] = b[d];
    return EMBVc(EMBYc([a], c))
}
function EMBce(a) {
    a = EMBae(a);
    a = a === EMBd ? EMBd : a.split(".").reverse();
    return(a === EMBd ? EMBe : "com" == a[0] && a[1].match(/^youtube(?:-nocookie)?$/) ? EMBc : EMBe) || (a === EMBd ? EMBe : "google" == a[1] ? EMBc : "google" == a[2] ? "au" == a[0] && "com" == a[1] ? EMBc : "uk" == a[0] && "co" == a[1] ? EMBc : EMBe : EMBe)
};
function EMBde() {
    this.a = [];
    EMBee(this)
}
EMBca(EMBde);
EMB = EMBde.prototype;
EMB.R = 0;
EMB.Ma = 0;
EMB.yb = 0;
EMB.uc = "";
EMB.na = 0;
EMB.load = function (a) {
    3 <= this.na ? a(this) : this.a.push(a)
};
EMB.getVersion = function () {
    return[this.R, this.Ma, this.yb]
};
function EMBfe(a, b, c, d) {
    b = "string" == typeof b ? b.split(".") : [b, c, d];
    b[0] = parseInt(b[0], 10) || 0;
    b[1] = parseInt(b[1], 10) || 0;
    b[2] = parseInt(b[2], 10) || 0;
    return a.R > b[0] || a.R == b[0] && a.Ma > b[1] || a.R == b[0] && a.Ma == b[1] && a.yb >= b[2]
}
function EMBge(a) {
    return-1 < a.uc.indexOf("Gnash") && -1 == a.uc.indexOf("AVM2") || 9 == a.R && 1 == a.Ma || 9 == a.R && 0 == a.Ma && 1 == a.yb ? EMBe : 9 <= a.R
}
function EMBhe(a) {
    return-1 < navigator.userAgent.indexOf("Sony/COM2") && !EMBfe(a, 9, 1, 58) ? EMBe : EMBc
}
function EMBee(a) {
    if (3 > a.na)if (1 > a.na) {
        var b = EMBg("window.navigator.plugins"), c = EMBg("window.navigator.mimeTypes"), b = b && b["Shockwave Flash"], c = c && c["application/x-shockwave-flash"], c = b && c && c.enabledPlugin && b.description || "";
        if (b = c) {
            var d = b.indexOf("Shockwave Flash");
            0 <= d && (b = b.substr(d + 15));
            for (var d = b.split(" "), e = "", b = "", f = 0, g = d.length; f < g; f++)if (e)if (b)break; else b = d[f]; else e = d[f];
            e = e.split(".");
            d = parseInt(e[0], 10) || 0;
            e = parseInt(e[1], 10) || 0;
            f = 0;
            if ("r" == b.charAt(0) || "d" == b.charAt(0))f = parseInt(b.substr(1),
                10) || 0;
            b = [d, e, f]
        } else b = [0, 0, 0];
        a.uc = c;
        c = b;
        a.R = c[0];
        a.Ma = c[1];
        a.yb = c[2];
        a.na = 1;
        0 < a.R ? EMBie(a) : EMBee(a)
    } else 2 > a.na ? EMBje(a) : EMBie(a)
}
EMB.ld = function (a) {
    a ? (a = a.split(" ")[1].split(","), a = [parseInt(a[0], 10) || 0, parseInt(a[1], 10) || 0, parseInt(a[2], 10) || 0]) : a = [0, 0, 0];
    this.R = a[0];
    this.Ma = a[1];
    this.yb = a[2];
    this.na = 2;
    0 < this.R ? EMBie(this) : EMBee(this)
};
function EMBie(a) {
    if (3 > a.na) {
        a.na = 3;
        for (var b = 0, c = a.a.length; b < c; b++)a.a[b](a);
        a.a = []
    }
}
function EMBje(a) {
    function b() {
        if (c && "GetVariable"in c)try {
            d = c.GetVariable("$version")
        } catch (a) {
            d = ""
        }
        d || 10 <= k ? (e && f && e.removeChild(f), h(d || "")) : (k++, EMBL(b, 10))
    }

    var c, d, e, f;
    if (EMBFc) {
        try {
            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
        } catch (g) {
            c = EMBd
        }
        c || a.ld("")
    } else e = document.getElementsByTagName("body")[0], f = document.createElement("object"), f.setAttribute("type", "application/x-shockwave-flash"), c = e.appendChild(f);
    var h = EMBl(a.ld, a), k = 0;
    EMBL(b, 0)
};
function EMBke(a, b, c) {
    if ((a = EMBE(a)) && b && c) {
        c = EMBNc(c);
        var d = EMBUa(c.attrs);
        d.tabindex = 0;
        var e = EMBUa(c.params);
        e.flashvars = EMB$d(c.args);
        if (EMBFc) {
            d.classid = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000";
            e.movie = b;
            b = document.createElement("object");
            for (var f in d)b.setAttribute(f, d[f]);
            for (f in e)d = document.createElement("param"), d.setAttribute("name", f), d.setAttribute("value", e[f]), b.appendChild(d)
        } else {
            d.type = "application/x-shockwave-flash";
            d.src = b;
            b = document.createElement("embed");
            for (f in d)b.setAttribute(f,
                d[f]);
            for (f in e)b.setAttribute(f, e[f])
        }
        e = document.createElement("div");
        e.appendChild(b);
        a.innerHTML = e.innerHTML
    }
}
function EMBle(a, b) {
    a = EMBE(a);
    b = EMBNc(b);
    if (window != window.top) {
        var c = EMBd;
        document.referrer && (c = document.referrer.substring(0, 128));
        b.args.framer = c
    }
    EMBme(function (c) {
        EMBfe(c, b.minVersion) || EMBK("IS_OPERA_MINI") ? (c = EMBge(c) && b.url || EMBhe(c) && b.urlV9As2 || b.urlV8 || b.url, EMBke(a, c, b)) : EMBne(a, b, c)
    })
}
function EMBoe(a, b, c) {
    if (a) {
        a = EMBNc(a);
        var d = !!b, e = EMBE(a.attrs.id), f = e ? e.parentNode : EMBd;
        if (!e || !f)EMBL(function () {
            EMBoe(a, b, c)
        }, 50); else {
            if (window != window.top) {
                var g = EMBd;
                if (document.referrer) {
                    var h = document.referrer.substring(0, 128);
                    EMBce(h) || (g = h)
                } else g = "unknown";
                g && (d = EMBc, a.args.framer = g)
            }
            EMBme(function (b) {
                if (EMBfe(b, a.minVersion) || EMBK("IS_OPERA_MINI")) {
                    var g = EMBge(b) && a.url || EMBhe(b) && a.urlV9As2 || a.urlV8 || a.url, h = "";
                    -1 < navigator.userAgent.indexOf("Sony/COM2") || (h = e.getAttribute("src") || e.movie);
                    (h != g || d) && EMBke(f, g, a);
                    if (EMB1a ? !EMBfe(b, 11, 2) : EMB0a ? !EMBfe(b, 11, 3) : !EMBge(b))b = EMBE("flash10-promo-div"), g = EMB1d(EMBS.getInstance(), EMB4d.Be), b && !g && EMBU(b)
                } else EMBne(f, a, b);
                c && c()
            })
        }
    }
}
function EMBne(a, b, c) {
    0 == c.R && b.fallback ? b.fallback() : 0 == c.R && b.fallbackMessage ? b.fallbackMessage() : a.innerHTML = '<div id="flash-upgrade">' + EMBEc("FLASH_UPGRADE", EMBb, 'You need to upgrade your Adobe Flash Player to watchthis video. <br> <a href="http://get.adobe.com/flashplayer/">Download it from Adobe.</a>') + "</div>"
}
function EMBme(a) {
    EMBde.getInstance().load(function (b) {
        EMBS.getInstance();
        EMB0d("fv", b.getVersion().join("."));
        EMB3d();
        a(b)
    })
};
function EMBpe(a) {
    return a.dataset ? a.dataset.loaded : a.getAttribute("data-" + EMBqe())
};
function EMBre(a, b) {
    a in EMBse || (EMBse[a] = []);
    EMBse[a].push([b, EMBb])
}
function EMBte(a, b) {
    if (a in EMBse)for (var c = EMBse[a], d = Array.prototype.slice.call(arguments, 1), e = 0, f = c.length; e < f; e++)c[e] && c[e][0].apply(c[e][1], d)
}
var EMBse = {};
function EMBue(a) {
    for (var b = 0, c = 0, d = a.length; c < d; ++c)b = 31 * b + a.charCodeAt(c), b %= 4294967296;
    return b
}
function EMBqe() {
    return"loaded".replace(/([A-Z])/g, "-$1").toLowerCase()
};
function EMBve(a, b) {
    var c = "js-" + EMBue(a), d = document.getElementById(c), e = d && EMBpe(d), d = d && !e;
    if (e)b && b(); else if (b && EMBre(c, b), !d)var f = EMBwe(a, c, function () {
        if (!EMBpe(f)) {
            var a = f;
            a.dataset ? a.dataset.loaded = "true" : a.setAttribute("data-" + EMBqe(), "true");
            EMBte(c);
            c ? c in EMBse && delete EMBse[c] : EMBse = {}
        }
    })
}
function EMBwe(a, b, c) {
    var d = document.createElement("script");
    d.id = b;
    d.onload = function () {
        setTimeout(c, 0)
    };
    d.onreadystatechange = function () {
        switch (d.readyState) {
            case "loaded":
            case "complete":
                d.onload()
        }
    };
    d.src = a;
    a = document.getElementsByTagName("head")[0] || document.body;
    a.insertBefore(d, a.firstChild);
    return d
};
function EMBxe(a, b) {
    EMBve(a, b)
};
function EMBye() {
    var a = EMB2a();
    if (!a ? 0 : 0 <= a.toLowerCase().indexOf("android 2.2"))return EMBc;
    a = EMBg("yt.player.utils.videoElement_");
    a || (a = document.createElement("video"), EMBn("yt.player.utils.videoElement_", a));
    try {
        return!(!a || !a.canPlayType || !a.canPlayType('video/mp4; codecs="avc1.42001E, mp4a.40.2"') && !a.canPlayType('video/webm; codecs="vp8.0, vorbis"'))
    } catch (b) {
        return EMBe
    }
};
var EMBze = EMBg("yt.pubsub.instance_") || new EMBO;
EMBO.prototype.subscribe = EMBO.prototype.W;
EMBO.prototype.unsubscribeByKey = EMBO.prototype.sc;
EMBO.prototype.publish = EMBO.prototype.C;
EMBO.prototype.clear = EMBO.prototype.clear;
EMBn("yt.pubsub.instance_", EMBze);
function EMBAe(a) {
    var b = EMBg("yt.pubsub.instance_");
    return b ? b.subscribe("LOGGED_IN", function () {
        var b = arguments;
        EMBL(function () {
            a.apply(EMBf, b)
        }, 0)
    }, EMBb) : 0
}
function EMBBe(a) {
    var b = EMBg("yt.pubsub.instance_");
    b && ("number" == typeof a ? a = [a] : "string" == typeof a && (a = [parseInt(a, 10)]), EMBr(a, function (a) {
        b.unsubscribeByKey(a)
    }))
}
function EMBCe(a, b) {
    var c = EMBg("yt.pubsub.instance_");
    return c ? c.publish.apply(c, arguments) : EMBe
};
function EMBDe() {
    var a = EMBd;
    try {
        a = window.sessionStorage || EMBd
    } catch (b) {
    }
    this.a = a
}
EMBo(EMBDe, EMBCd);
function EMBEe(a, b) {
    if (EMBy && !EMBC(9)) {
        EMBFe || (EMBFe = new EMB4b);
        this.I = EMBFe.get(a);
        this.I || (b ? this.I = document.getElementById(b) : (this.I = document.createElement("userdata"), this.I.addBehavior("#default#userData"), document.body.appendChild(this.I)), EMB5b(EMBFe, a, this.I));
        this.xc = a;
        try {
            this.I.load(this.xc)
        } catch (c) {
            this.I = EMBd
        }
    }
}
EMBo(EMBEe, EMBBd);
var EMBGe = {".": ".2E", "!": ".21", "~": ".7E", "*": ".2A", "'": ".27", "(": ".28", ")": ".29", "%": "."}, EMBFe = EMBd;
EMB = EMBEe.prototype;
EMB.I = EMBd;
EMB.xc = EMBd;
function EMBHe(a) {
    return"_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function (a) {
        return EMBGe[a]
    })
}
EMB.eb = function () {
    return!!this.I
};
EMB.Ub = function (a, b) {
    this.I.setAttribute(EMBHe(a), b);
    EMBIe(this)
};
EMB.get = function (a) {
    a = this.I.getAttribute(EMBHe(a));
    !EMBk(a) && a !== EMBd && EMBa("Storage mechanism: Invalid value was encountered");
    return a
};
EMB.fb = function (a) {
    this.I.removeAttribute(EMBHe(a));
    EMBIe(this)
};
EMB.ma = function () {
    return EMBJe(this).attributes.length
};
EMB.ca = function (a) {
    var b = 0, c = EMBJe(this).attributes, d = new EMBZb;
    d.a = function () {
        b >= c.length && EMBa(EMBYb);
        var d;
        d = c[b++];
        if (a)return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
        d = d.nodeValue;
        EMBk(d) || EMBa("Storage mechanism: Invalid value was encountered");
        return d
    };
    return d
};
EMB.clear = function () {
    for (var a = EMBJe(this), b = a.attributes.length; 0 < b; b--)a.removeAttribute(a.attributes[b - 1].nodeName);
    EMBIe(this)
};
function EMBIe(a) {
    try {
        a.I.save(a.xc)
    } catch (b) {
        EMBa("Storage mechanism: Quota exceeded")
    }
}
function EMBJe(a) {
    return a.I.XMLDocument.documentElement
};
function EMBKe(a, b) {
    this.cb = a;
    this.Ja = b + "::"
}
EMBo(EMBKe, EMBBd);
EMB = EMBKe.prototype;
EMB.cb = EMBd;
EMB.Ja = "";
EMB.Ub = function (a, b) {
    this.cb.Ub(this.Ja + a, b)
};
EMB.get = function (a) {
    return this.cb.get(this.Ja + a)
};
EMB.fb = function (a) {
    this.cb.fb(this.Ja + a)
};
EMB.ca = function (a) {
    var b = this.cb.ca(EMBc), c = this, d = new EMBZb;
    d.a = function () {
        for (var d = b.a(); d.substr(0, c.Ja.length) != c.Ja;)d = b.a();
        return a ? d.substr(c.Ja.length) : c.cb.get(d)
    };
    return d
};
function EMBLe(a) {
    EMBEd.call(this, a)
}
EMBo(EMBLe, EMBEd);
function EMBMe(a) {
    this.data = a
}
function EMBNe(a) {
    return!EMBh(a) || a instanceof EMBMe ? a : new EMBMe(a)
}
EMBLe.prototype.Ka = function (a, b) {
    EMBLe.Q.Ka.call(this, a, EMBNe(b))
};
EMBLe.prototype.a = function (a) {
    a = EMBLe.Q.get.call(this, a);
    if (!EMBh(a) || a instanceof Object)return a;
    EMBa("Storage: Invalid value was encountered")
};
EMBLe.prototype.get = function (a) {
    (a = this.a(a)) ? (a = a.data, EMBh(a) || EMBa("Storage: Invalid value was encountered")) : a = EMBb;
    return a
};
function EMBW(a) {
    EMBEd.call(this, a)
}
EMBo(EMBW, EMBLe);
EMBW.prototype.Ka = function (a, b, c) {
    if (b = EMBNe(b)) {
        if (c) {
            if (c < EMBm()) {
                EMBW.prototype.ba.call(this, a);
                return
            }
            b.expiration = c
        }
        b.creation = EMBm()
    }
    EMBW.Q.Ka.call(this, a, b)
};
EMBW.prototype.a = function (a, b) {
    var c = EMBW.Q.a.call(this, a);
    if (c) {
        var d;
        if (d = !b) {
            d = c.creation;
            var e = c.expiration;
            d = !!e && e < EMBm() || !!d && d > EMBm()
        }
        if (d)EMBW.prototype.ba.call(this, a); else return c
    }
};
function EMBOe(a) {
    var b = new EMBDd;
    if (!(b = b.eb() ? a ? new EMBKe(b, a) : b : EMBd))a = new EMBEe(a || "UserDataSharedStore"), b = a.eb() ? a : EMBd;
    this.a = (a = b) ? new EMBW(a) : EMBd
}
function EMBPe(a, b, c, d, e) {
    d = d || 31104E3;
    if (a.a)try {
        a.a.Ka(b, c, EMBm() + 1E3 * d);
        return
    } catch (f) {
    }
    EMBQe(a, b);
    a = "";
    if (e)try {
        a = escape(EMBrc(c))
    } catch (g) {
        return
    } else a = escape(c);
    EMBvd(b, a, d)
}
EMBOe.prototype.get = function (a, b) {
    var c = "";
    if (this.a)try {
        c = this.a.get(a)
    } catch (d) {
    }
    if (!c && (c = EMBwd(a, "")))if (c = unescape(c), b)try {
        c = EMBpc(c)
    } catch (e) {
        EMBQe(this, a), c = ""
    }
    return c
};
function EMBQe(a, b) {
    a.a && a.a.ba(b);
    EMBxd(b)
};
function EMBRe(a) {
    a && (this.name = a.name, this.P = a.screenId, this.loungeToken = a.loungeToken, this.za = a.expiration)
}
EMB = EMBRe.prototype;
EMB.name = "";
EMB.P = "";
EMB.loungeToken = "";
EMB.za = 0;
function EMBSe(a, b) {
    a.loungeToken = b;
    a.za = a.P ? EMBm() + 11232E5 : EMBm() + 18E6
}
EMB.equals = function (a) {
    return!a ? EMBe : !!this.P && this.P == a.P || this.loungeToken == a.loungeToken
};
function EMBTe() {
}
function EMBUe(a) {
    var b = {name: a.name, loungeToken: a.loungeToken, expiration: a.za};
    a.P && (b.screenId = a.P);
    return b
}
function EMBVe(a) {
    var b = new EMBRe;
    b.name = a.name;
    b.P = a.screenId || "";
    b.loungeToken = a.loungeToken;
    b.za = a.expiration;
    return b
}
function EMBWe(a, b) {
    b && a.e("remote-conn-screen", EMBUe(b))
}
function EMBXe(a) {
    return(a = a.get("remote-conn-screen")) ? EMBVe(a) : EMBd
}
function EMBYe(a, b, c) {
    c = EMBya(c, function (a) {
        return EMBUe(a)
    }, a);
    a.e(b, c)
}
function EMBZe(a, b) {
    var c = a.get(b);
    if (!EMBi(c))return[];
    var d = [];
    EMBr(c, function (a) {
        d.push(EMBVe(a))
    }, a);
    return d
};
function EMB_e(a) {
    this.a = a
}
EMBo(EMB_e, EMBTe);
EMB_e.prototype.get = function (a) {
    return this.a.get(a, EMBc)
};
EMB_e.prototype.e = function (a, b) {
    EMBPe(this.a, a, b, 0, EMBc)
};
EMB_e.prototype.b = function (a) {
    EMBQe(this.a, a)
};
function EMB0e() {
    this.p = new EMBO;
    EMByd(this, EMBma(EMBzd, this.p))
}
EMBo(EMB0e, EMBN);
EMB0e.prototype.W = function (a, b, c) {
    this.q || this.p.W(a, b, c)
};
EMB0e.prototype.C = function (a, b) {
    this.q || this.p.C.apply(this.p, arguments)
};
function EMBX(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
EMBX.prototype.ub = function () {
};
EMBX.prototype.a = EMBe;
EMBX.prototype.b = EMBc;
EMBX.prototype.preventDefault = function () {
    this.b = EMBe
};
function EMB1e(a) {
    EMB1e[" "](a);
    return a
}
EMB1e[" "] = EMBba;
var EMB2e = !EMBy || EMBC(9), EMB3e = EMBy && !EMBB("9");
!EMBA || EMBB("528");
EMBz && EMBB("1.9b") || EMBy && EMBB("8") || EMB6a && EMBB("9.5") || EMBA && EMBB("528");
EMBz && !EMBB("8") || EMBy && EMBB("9");
function EMB4e(a, b) {
    a && this.init(a, b)
}
EMBo(EMB4e, EMBX);
EMB = EMB4e.prototype;
EMB.target = EMBd;
EMB.relatedTarget = EMBd;
EMB.clientX = 0;
EMB.clientY = 0;
EMB.keyCode = 0;
EMB.charCode = 0;
EMB.ctrlKey = EMBe;
EMB.altKey = EMBe;
EMB.shiftKey = EMBe;
EMB.wb = EMBd;
EMB.init = function (a, b) {
    var c = this.type = a.type;
    EMBX.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (EMBz) {
            var e;
            a:{
                try {
                    EMB1e(d.nodeName);
                    e = EMBc;
                    break a
                } catch (f) {
                }
                e = EMBe
            }
            e || (d = EMBd)
        }
    } else"mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.clientX = a.clientX !== EMBb ? a.clientX : a.pageX;
    this.clientY = a.clientY !== EMBb ? a.clientY : a.pageY;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey =
        a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.wb = a;
    a.defaultPrevented && this.preventDefault();
    delete this.a
};
EMB.preventDefault = function () {
    EMB4e.Q.preventDefault.call(this);
    var a = this.wb;
    if (a.preventDefault)a.preventDefault(); else if (a.returnValue = EMBe, EMB3e)try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)a.keyCode = -1
    } catch (b) {
    }
};
EMB.Zd = function () {
    return this.wb
};
var EMB5e = 0;
function EMB6e() {
}
EMB = EMB6e.prototype;
EMB.key = 0;
EMB.Ca = EMBe;
EMB.Mb = EMBe;
EMB.init = function (a, b, c, d, e, f) {
    EMBfa(a) ? this.a = EMBc : a && a.handleEvent && EMBfa(a.handleEvent) ? this.a = EMBe : EMBa(Error("Invalid listener argument"));
    this.la = a;
    this.b = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.nc = f;
    this.Mb = EMBe;
    this.key = ++EMB5e;
    this.Ca = EMBe
};
EMB.handleEvent = function (a) {
    return this.a ? this.la.call(this.nc || this.src, a) : this.la.handleEvent.call(this.la, a)
};
var EMB7e = {}, EMBY = {}, EMB8e = {}, EMB9e = {};
function EMB$e(a, b, c, d, e) {
    if (EMBi(b)) {
        for (var f = 0; f < b.length; f++)EMB$e(a, b[f], c, d, e);
        return EMBd
    }
    a:{
        b || EMBa(Error("Invalid event type"));
        d = !!d;
        var g = EMBY;
        b in g || (g[b] = {o: 0, K: 0});
        g = g[b];
        d in g || (g[d] = {o: 0, K: 0}, g.o++);
        var g = g[d], f = EMBha(a), h;
        g.K++;
        if (g[f]) {
            h = g[f];
            for (var k = 0; k < h.length; k++)if (g = h[k], g.la == c && g.nc == e) {
                if (g.Ca)break;
                h[k].Mb = EMBe;
                a = h[k];
                break a
            }
        } else h = g[f] = [], g.o++;
        k = EMBaf();
        g = new EMB6e;
        g.init(c, k, a, b, d, e);
        g.Mb = EMBe;
        k.src = a;
        k.la = g;
        h.push(g);
        EMB8e[f] || (EMB8e[f] = []);
        EMB8e[f].push(g);
        a.addEventListener ?
            (a == EMBf || !a.Xc) && a.addEventListener(b, k, d) : a.attachEvent(b in EMB9e ? EMB9e[b] : EMB9e[b] = "on" + b, k);
        a = g
    }
    b = a.key;
    EMB7e[b] = a;
    return b
}
function EMBaf() {
    var a = EMBbf, b = EMB2e ? function (c) {
        return a.call(b.src, b.la, c)
    } : function (c) {
        c = a.call(b.src, b.la, c);
        if (!c)return c
    };
    return b
}
function EMBcf(a, b, c, d, e) {
    if (EMBi(b))for (var f = 0; f < b.length; f++)EMBcf(a, b[f], c, d, e); else {
        d = !!d;
        a:{
            f = EMBY;
            if (b in f && (f = f[b], d in f && (f = f[d], a = EMBha(a), f[a]))) {
                a = f[a];
                break a
            }
            a = EMBd
        }
        if (a)for (f = 0; f < a.length; f++)if (a[f].la == c && a[f].capture == d && a[f].nc == e) {
            EMBdf(a[f].key);
            break
        }
    }
}
function EMBdf(a) {
    var b = EMB7e[a];
    if (!b || b.Ca)return EMBe;
    var c = b.src, d = b.type, e = b.b, f = b.capture;
    c.removeEventListener ? (c == EMBf || !c.Xc) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in EMB9e ? EMB9e[d] : EMB9e[d] = "on" + d, e);
    c = EMBha(c);
    EMB8e[c] && (e = EMB8e[c], EMBAa(e, b), 0 == e.length && delete EMB8e[c]);
    b.Ca = EMBc;
    if (b = EMBY[d][f][c])b.Yc = EMBc, EMBef(d, f, c, b);
    delete EMB7e[a];
    return EMBc
}
function EMBef(a, b, c, d) {
    if (!d.Tb && d.Yc) {
        for (var e = 0, f = 0; e < d.length; e++)d[e].Ca ? d[e].b.src = EMBd : (e != f && (d[f] = d[e]), f++);
        d.length = f;
        d.Yc = EMBe;
        0 == f && (delete EMBY[a][b][c], EMBY[a][b].o--, 0 == EMBY[a][b].o && (delete EMBY[a][b], EMBY[a].o--), 0 == EMBY[a].o && delete EMBY[a])
    }
}
function EMBff(a) {
    var b = 0;
    if (a != EMBd) {
        if (a = EMBha(a), EMB8e[a]) {
            a = EMB8e[a];
            for (var c = a.length - 1; 0 <= c; c--)EMBdf(a[c].key), b++
        }
    } else EMBOa(EMB7e, function (a, c) {
        EMBdf(c);
        b++
    })
}
function EMBgf(a, b, c, d, e) {
    var f = 1;
    b = EMBha(b);
    if (a[b]) {
        var g = --a.K, h = a[b];
        h.Tb ? h.Tb++ : h.Tb = 1;
        try {
            for (var k = h.length, m = 0; m < k; m++) {
                var l = h[m];
                l && !l.Ca && (f &= EMBhf(l, e) !== EMBe)
            }
        } finally {
            a.K = Math.max(g, a.K), h.Tb--, EMBef(c, d, b, h)
        }
    }
    return Boolean(f)
}
function EMBhf(a, b) {
    a.Mb && EMBdf(a.key);
    return a.handleEvent(b)
}
function EMBbf(a, b) {
    if (a.Ca)return EMBc;
    var c = a.type, d = EMBY;
    if (!(c in d))return EMBc;
    var d = d[c], e, f;
    if (!EMB2e) {
        e = b || EMBg("window.event");
        var g = EMBc in d, h = EMBe in d;
        if (g) {
            if (0 > e.keyCode || e.returnValue != EMBb)return EMBc;
            a:{
                var k = EMBe;
                if (0 == e.keyCode)try {
                    e.keyCode = -1;
                    break a
                } catch (m) {
                    k = EMBc
                }
                if (k || e.returnValue == EMBb)e.returnValue = EMBc
            }
        }
        k = new EMB4e;
        k.init(e, this);
        e = EMBc;
        try {
            if (g) {
                for (var l = [], p = k.currentTarget; p; p = p.parentNode)l.push(p);
                f = d[EMBc];
                f.K = f.o;
                for (var n = l.length - 1; !k.a && 0 <= n && f.K; n--)k.currentTarget =
                    l[n], e &= EMBgf(f, l[n], c, EMBc, k);
                if (h) {
                    f = d[EMBe];
                    f.K = f.o;
                    for (n = 0; !k.a && n < l.length && f.K; n++)k.currentTarget = l[n], e &= EMBgf(f, l[n], c, EMBe, k)
                }
            } else e = EMBhf(a, k)
        } finally {
            l && (l.length = 0)
        }
        return e
    }
    c = new EMB4e(b, this);
    return e = EMBhf(a, c)
};
function EMBif() {
}
EMBo(EMBif, EMBN);
EMB = EMBif.prototype;
EMB.Xc = EMBc;
EMB.oc = EMBd;
EMB.addEventListener = function (a, b, c, d) {
    EMB$e(this, a, b, c, d)
};
EMB.removeEventListener = function (a, b, c, d) {
    EMBcf(this, a, b, c, d)
};
function EMBZ(a, b) {
    var c = b, d = c.type || c, e = EMBY;
    if (d in e) {
        if (EMBk(c))c = new EMBX(c, a); else if (c instanceof EMBX)c.target = c.target || a; else {
            var f = c, c = new EMBX(d, a);
            EMBWa(c, f)
        }
        var f = 1, g, e = e[d], d = EMBc in e, h;
        if (d) {
            g = [];
            for (h = a; h; h = h.oc)g.push(h);
            h = e[EMBc];
            h.K = h.o;
            for (var k = g.length - 1; !c.a && 0 <= k && h.K; k--)c.currentTarget = g[k], f &= EMBgf(h, g[k], c.type, EMBc, c) && c.b != EMBe
        }
        if (EMBe in e)if (h = e[EMBe], h.K = h.o, d)for (k = 0; !c.a && k < g.length && h.K; k++)c.currentTarget = g[k], f &= EMBgf(h, g[k], c.type, EMBe, c) && c.b != EMBe; else for (e =
                                                                                                                                                                                            a; !c.a && e && h.K; e = e.oc)c.currentTarget = e, f &= EMBgf(h, e, c.type, EMBe, c) && c.b != EMBe
    }
}
EMB.G = function () {
    EMBif.Q.G.call(this);
    EMBff(this);
    this.oc = EMBd
};
function EMBjf(a, b) {
    this.b = new EMBtc(a);
    this.a = b ? EMBqc : EMBpc
}
EMBjf.prototype.stringify = function (a) {
    return EMBsc(this.b, a)
};
EMBjf.prototype.parse = function (a) {
    return this.a(a)
};
function EMB_(a, b) {
    this.b = a || 1;
    this.g = b || EMBkf;
    this.i = EMBl(this.D, this);
    this.j = EMBm()
}
EMBo(EMB_, EMBif);
EMB_.prototype.e = EMBe;
var EMBkf = EMBf;
EMB_.prototype.a = EMBd;
function EMBlf(a, b) {
    a.b = b;
    a.a && a.e ? (EMB0(a), a.start()) : a.a && EMB0(a)
}
EMB_.prototype.D = function () {
    if (this.e) {
        var a = EMBm() - this.j;
        0 < a && a < 0.8 * this.b ? this.a = this.g.setTimeout(this.i, this.b - a) : (EMBZ(this, "tick"), this.e && (this.a = this.g.setTimeout(this.i, this.b), this.j = EMBm()))
    }
};
EMB_.prototype.start = function () {
    this.e = EMBc;
    this.a || (this.a = this.g.setTimeout(this.i, this.b), this.j = EMBm())
};
function EMB0(a) {
    a.e = EMBe;
    a.a && (a.g.clearTimeout(a.a), a.a = EMBd)
}
EMB_.prototype.G = function () {
    EMB_.Q.G.call(this);
    EMB0(this);
    delete this.g
};
function EMBmf(a, b, c) {
    this.j = a;
    this.i = b;
    this.g = c;
    this.e = EMBl(this.p, this)
}
EMBo(EMBmf, EMBN);
EMBmf.prototype.b = EMBe;
EMBmf.prototype.a = EMBd;
EMBmf.prototype.G = function () {
    EMBmf.Q.G.call(this);
    this.a && (EMBkf.clearTimeout(this.a), this.a = EMBd, this.b = EMBe)
};
EMBmf.prototype.p = function () {
    this.a = EMBd;
    this.b && (this.b = EMBe, EMBnf(this))
};
function EMBnf(a) {
    var b;
    b = a.e;
    var c = a.i;
    EMBfa(b) || (b && "function" == typeof b.handleEvent ? b = EMBl(b.handleEvent, b) : EMBa(Error("Invalid listener argument")));
    b = 2147483647 < c ? -1 : EMBkf.setTimeout(b, c || 0);
    a.a = b;
    a.j.call(a.g)
};
function EMBof(a) {
    this.b = a;
    this.a = []
}
EMBo(EMBof, EMBN);
var EMBpf = [];
function EMBqf(a, b, c, d) {
    EMBi(c) || (EMBpf[0] = c, c = EMBpf);
    for (var e = 0; e < c.length; e++) {
        var f = EMB$e(b, c[e], d || a, EMBe, a.b || a);
        a.a.push(f)
    }
}
EMBof.prototype.G = function () {
    EMBof.Q.G.call(this);
    EMBr(this.a, EMBdf);
    this.a.length = 0
};
EMBof.prototype.handleEvent = function () {
    EMBa(Error("EventHandler.handleEvent not implemented"))
};
function EMBrf() {
}
EMBrf.prototype.a = EMBd;
var EMBsf;
function EMBtf() {
}
EMBo(EMBtf, EMBrf);
function EMBuf(a) {
    return(a = EMBvf(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function EMBwf(a) {
    var b = {};
    EMBvf(a) && (b[0] = EMBc, b[1] = EMBc);
    return b
}
function EMBvf(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d
            } catch (e) {
            }
        }
        EMBa(Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
    }
    return a.b
}
EMBsf = new EMBtf;
function EMBxf(a, b, c, d, e) {
    this.b = a;
    this.a = b;
    this.i = c;
    this.e = d;
    this.g = e || 1;
    this.p = 45E3;
    this.j = new EMBof(this);
    this.q = new EMB_;
    EMBlf(this.q, 250)
}
EMB = EMBxf.prototype;
EMB.pa = EMBd;
EMB.U = EMBe;
EMB.Za = EMBd;
EMB.mc = EMBd;
EMB.hb = EMBd;
EMB.Ta = EMBd;
EMB.da = EMBd;
EMB.M = EMBd;
EMB.Qa = EMBd;
EMB.B = EMBd;
EMB.mb = 0;
EMB.V = EMBd;
EMB.Ra = EMBd;
EMB.ea = EMBd;
EMB.gb = -1;
EMB.zc = EMBc;
EMB.xa = EMBe;
EMB.Yb = 0;
EMB.Bb = EMBd;
function EMByf(a, b) {
    switch (a) {
        case 0:
            return"Non-200 return code (" + b + ")";
        case 1:
            return"XMLHTTP failure (no data)";
        case 2:
            return"HttpConnection timeout";
        default:
            return"Unknown error"
    }
}
var EMBzf = {}, EMBAf = {};
EMB = EMBxf.prototype;
EMB.setTimeout = function (a) {
    this.p = a
};
function EMBBf(a, b, c) {
    a.Ta = 1;
    a.da = EMBgd(b.u());
    a.Qa = c;
    a.F = EMBc;
    EMBCf(a, EMBd)
}
function EMBDf(a, b, c, d, e) {
    a.Ta = 1;
    a.da = EMBgd(b.u());
    a.Qa = EMBd;
    a.F = c;
    e && (a.zc = EMBe);
    EMBCf(a, d)
}
function EMBCf(a, b) {
    a.hb = EMBm();
    EMBEf(a);
    a.M = a.da.u();
    EMBed(a.M, "t", a.g);
    a.mb = 0;
    a.B = a.b.$b(a.b.Eb() ? b : EMBd);
    0 < a.Yb && (a.Bb = new EMBmf(EMBl(a.Ac, a, a.B), a.Yb));
    EMBqf(a.j, a.B, "readystatechange", a.od);
    var c = a.pa ? EMBUa(a.pa) : {};
    a.Qa ? (a.Ra = "POST", c["Content-Type"] = "application/x-www-form-urlencoded", EMBFf(a.B, a.M, a.Ra, a.Qa, c)) : (a.Ra = "GET", a.zc && !EMBA && (c.Connection = "close"), EMBFf(a.B, a.M, a.Ra, EMBd, c));
    a.b.T(1);
    var d = a.Qa;
    if (d)for (var c = "", d = d.split("&"), e = 0; e < d.length; e++) {
        var f = d[e].split("=");
        if (1 < f.length)var g =
            f[0], f = f[1], h = g.split("_"), c = 2 <= h.length && "type" == h[1] ? c + (g + "=" + f + "&") : c + (g + "=redacted&")
    } else c = EMBd;
    a.a.info("XMLHTTP REQ (" + a.e + ") [attempt " + a.g + "]: " + a.Ra + "\n" + a.M + "\n" + c)
}
EMB.od = function (a) {
    a = a.target;
    var b = this.Bb;
    b && 3 == EMBGf(a) ? (this.a.info("Throttling readystatechange."), !b.a ? EMBnf(b) : b.b = EMBc) : this.Ac(a)
};
EMB.Ac = function (a) {
    try {
        if (a == this.B)a:{
            var b = EMBGf(this.B), c = this.B.jb, d = EMBHf(this.B);
            if (EMBy && !EMBC(10) || EMBA && !EMBB("420+")) {
                if (4 > b)break a
            } else if (3 > b || 3 == b && !EMB6a && !EMBIf(this.B))break a;
            !this.xa && (4 == b && 7 != c) && (8 == c || 0 >= d ? this.b.T(3) : this.b.T(2));
            EMBJf(this);
            var e = EMBHf(this.B);
            this.gb = e;
            var f = EMBIf(this.B);
            f || this.a.info("No response text for uri " + this.M + " status " + e);
            this.U = 200 == e;
            this.a.info("XMLHTTP RESP (" + this.e + ") [ attempt " + this.g + "]: " + this.Ra + "\n" + this.M + "\n" + b + " " + e);
            this.U ? (4 ==
                b && EMBKf(this), this.F ? (EMBLf(this, b, f), EMB6a && 3 == b && (EMBqf(this.j, this.q, "tick", this.nd), this.q.start())) : (EMBMf(this.a, this.e, f, EMBd), EMBNf(this, f)), this.U && !this.xa && (4 == b ? this.b.Db(this) : (this.U = EMBe, EMBEf(this)))) : (400 == e && 0 < f.indexOf("Unknown SID") ? (this.ea = 3, EMB1(), EMBOf(this.a, "XMLHTTP Unknown SID (" + this.e + ")")) : (this.ea = 0, EMB1(), EMBOf(this.a, "XMLHTTP Bad status " + e + " (" + this.e + ")")), EMBKf(this), EMBPf(this))
        } else EMBOf(this.a, "Called back with an unexpected xmlhttp")
    } catch (g) {
        this.a.info("Failed call to OnXmlHttpReadyStateChanged_"),
            this.B && EMBIf(this.B) ? EMBQf(this.a, g, "ResponseText: " + EMBIf(this.B)) : EMBQf(this.a, g, "No response text")
    } finally {
    }
};
function EMBLf(a, b, c) {
    for (var d = EMBc; !a.xa && a.mb < c.length;) {
        var e = EMBRf(a, c);
        if (e == EMBAf) {
            4 == b && (a.ea = 4, EMB1(), d = EMBe);
            EMBMf(a.a, a.e, EMBd, "[Incomplete Response]");
            break
        } else if (e == EMBzf) {
            a.ea = 4;
            EMB1();
            EMBMf(a.a, a.e, c, "[Invalid Chunk]");
            d = EMBe;
            break
        } else EMBMf(a.a, a.e, e, EMBd), EMBNf(a, e)
    }
    4 == b && 0 == c.length && (a.ea = 1, EMB1(), d = EMBe);
    a.U = a.U && d;
    d || (EMBMf(a.a, a.e, c, "[Invalid Chunked Response]"), EMBKf(a), EMBPf(a))
}
EMB.nd = function () {
    var a = EMBGf(this.B), b = EMBIf(this.B);
    this.mb < b.length && (EMBJf(this), EMBLf(this, a, b), this.U && 4 != a && EMBEf(this))
};
function EMBRf(a, b) {
    var c = a.mb, d = b.indexOf("\n", c);
    if (-1 == d)return EMBAf;
    c = Number(b.substring(c, d));
    if (isNaN(c))return EMBzf;
    d += 1;
    if (d + c > b.length)return EMBAf;
    var e = b.substr(d, c);
    a.mb = d + c;
    return e
}
function EMBSf(a, b) {
    a.hb = EMBm();
    EMBEf(a);
    var c = b ? window.location.hostname : "";
    a.M = a.da.u();
    EMBM(a.M, "DOMAIN", c);
    EMBM(a.M, "t", a.g);
    try {
        a.V = new ActiveXObject("htmlfile")
    } catch (d) {
        EMBTf(a.a, "ActiveX blocked");
        EMBKf(a);
        a.ea = 7;
        EMB1();
        EMBPf(a);
        return
    }
    var e = "<html><body>";
    b && (e += '<script>document.domain="' + c + '"\x3c/script>');
    e += "</body></html>";
    a.V.open();
    a.V.write(e);
    a.V.close();
    a.V.parentWindow.m = EMBl(a.sd, a);
    a.V.parentWindow.d = EMBl(a.Dc, a, EMBc);
    a.V.parentWindow.rpcClose = EMBl(a.Dc, a, EMBe);
    c = a.V.createElement("div");
    a.V.parentWindow.document.body.appendChild(c);
    c.innerHTML = '<iframe src="' + a.M + '"></iframe>';
    a.a.info("TRIDENT REQ (" + a.e + ") [ attempt " + a.g + "]: GET\n" + a.M);
    a.b.T(1)
}
EMB.sd = function (a) {
    EMBUf(EMBl(this.De, this, a), 0)
};
EMB.De = function (a) {
    if (!this.xa) {
        var b = this.a;
        b.info("TRIDENT TEXT (" + this.e + "): " + EMBVf(b, a));
        EMBJf(this);
        EMBNf(this, a);
        EMBEf(this)
    }
};
EMB.Dc = function (a) {
    EMBUf(EMBl(this.Ce, this, a), 0)
};
EMB.Ce = function (a) {
    this.xa || (this.a.info("TRIDENT TEXT (" + this.e + "): " + a ? "success" : "failure"), EMBKf(this), this.U = a, this.b.Db(this), this.b.T(4))
};
function EMBWf(a) {
    a.xa = EMBc;
    EMBKf(a)
}
function EMBEf(a) {
    a.mc = EMBm() + a.p;
    EMBXf(a, a.p)
}
function EMBXf(a, b) {
    a.Za != EMBd && EMBa(Error("WatchDog timer not null"));
    a.Za = EMBUf(EMBl(a.ve, a), b)
}
function EMBJf(a) {
    a.Za && (EMBf.clearTimeout(a.Za), a.Za = EMBd)
}
EMB.ve = function () {
    this.Za = EMBd;
    var a = EMBm();
    0 <= a - this.mc ? (this.U && EMBTf(this.a, "Received watchdog timeout even though request loaded successfully"), this.a.info("TIMEOUT: " + this.M), 2 != this.Ta && this.b.T(3), EMBKf(this), this.ea = 2, EMB1(), EMBPf(this)) : (EMBOf(this.a, "WatchDog timer called too early"), EMBXf(this, this.mc - a))
};
function EMBPf(a) {
    !a.b.Zc() && !a.xa && a.b.Db(a)
}
function EMBKf(a) {
    EMBJf(a);
    EMBzd(a.Bb);
    a.Bb = EMBd;
    EMB0(a.q);
    var b = a.j;
    EMBr(b.a, EMBdf);
    b.a.length = 0;
    a.B && (b = a.B, a.B = EMBd, b.w && b.ia && (EMBJ(b.a, EMBYf(b, "Aborting")), b.ia = EMBe, b.Ga = EMBc, b.w.abort(), b.Ga = EMBe, b.jb = 7, EMBZ(b, "complete"), EMBZ(b, "abort"), EMBZf(b)), b.ub());
    a.V && (a.V = EMBd)
}
function EMBNf(a, b) {
    try {
        a.b.Qc(a, b), a.b.T(4)
    } catch (c) {
        EMBQf(a.a, c, "Error in httprequest callback")
    }
};
function EMB_f() {
    this.a = EMBoc("goog.net.BrowserChannel")
}
function EMBMf(a, b, c, d) {
    a.info("XMLHTTP TEXT (" + b + "): " + EMBVf(a, c) + (d ? " " + d : ""))
}
function EMB0f(a, b) {
    a.info(b)
}
function EMBQf(a, b, c) {
    EMBTf(a, (c || "Exception") + b)
}
EMB_f.prototype.info = function (a) {
    this.a.info(a)
};
function EMBOf(a, b) {
    a.a.log(EMBhc, b, EMBb)
}
function EMBTf(a, b) {
    a.a.log(EMBgc, b, EMBb)
}
function EMBVf(a, b) {
    if (!b || "y2f%" == b)return b;
    try {
        var c = EMBqc(b);
        if (c)for (var d = 0; d < c.length; d++)if (EMBi(c[d])) {
            var e = c[d];
            if (!(2 > e.length)) {
                var f = e[1];
                if (EMBi(f) && !(1 > f.length)) {
                    var g = f[0];
                    if ("noop" != g && "stop" != g)for (var h = 1; h < f.length; h++)f[h] = ""
                }
            }
        }
        return EMBrc(c)
    } catch (k) {
        return a.info("Exception parsing expected JS array - probably was not JS"), b
    }
};
function EMB1f(a, b, c, d, e) {
    EMB0f(new EMB_f, "TestLoadImageWithRetries: " + e);
    if (0 == d)c(EMBe); else {
        var f = e || 0;
        d--;
        EMB2f(a, b, function (e) {
            e ? c(EMBc) : EMBf.setTimeout(function () {
                EMB1f(a, b, c, d, f)
            }, f)
        })
    }
}
function EMB2f(a, b, c) {
    var d = new EMB_f;
    d.info("TestLoadImage: loading " + a);
    var e = new Image;
    e.onload = function () {
        try {
            d.info("TestLoadImage: loaded"), EMB3f(e), c(EMBc)
        } catch (a) {
            EMBQf(d, a)
        }
    };
    e.onerror = function () {
        try {
            d.info("TestLoadImage: error"), EMB3f(e), c(EMBe)
        } catch (a) {
            EMBQf(d, a)
        }
    };
    e.onabort = function () {
        try {
            d.info("TestLoadImage: abort"), EMB3f(e), c(EMBe)
        } catch (a) {
            EMBQf(d, a)
        }
    };
    e.ontimeout = function () {
        try {
            d.info("TestLoadImage: timeout"), EMB3f(e), c(EMBe)
        } catch (a) {
            EMBQf(d, a)
        }
    };
    EMBf.setTimeout(function () {
            if (e.ontimeout)e.ontimeout()
        },
        b);
    e.src = a
}
function EMB3f(a) {
    a.onload = EMBd;
    a.onerror = EMBd;
    a.onabort = EMBd;
    a.ontimeout = EMBd
};
function EMB4f(a, b) {
    this.a = a;
    this.b = b;
    this.e = new EMBjf(EMBd, EMBc)
}
EMB = EMB4f.prototype;
EMB.bc = EMBd;
EMB.N = EMBd;
EMB.Ib = EMBe;
EMB.Ec = EMBd;
EMB.Hb = EMBd;
EMB.gc = EMBd;
EMB.cc = EMBd;
EMB.O = EMBd;
EMB.ya = -1;
EMB.nb = EMBd;
EMB.pb = EMBd;
function EMB5f(a) {
    var b = EMB6f(a.a, a.pb, "/mail/images/cleardot.gif");
    EMBgd(b);
    EMB1f(b.toString(), 5E3, EMBl(a.$d, a), 3, 2E3);
    a.T(1)
}
EMB.$d = function (a) {
    if (a)this.O = 2, EMB7f(this); else {
        EMB1();
        var b = this.a;
        b.a.info("Test Connection Blocked");
        b.$ = b.ha.ya;
        EMB2(b, 9)
    }
    a && this.T(2)
};
function EMB7f(a) {
    a.b.info("TestConnection: starting stage 2");
    var b = a.a.D;
    if (b != EMBd)a.b.info("TestConnection: skipping stage 2, precomputed result is " + b ? "Buffered" : "Unbuffered"), EMB1(), b ? (EMB1(), EMB8f(a.a, a, EMBe)) : (EMB1(), EMB8f(a.a, a, EMBc)); else if (a.N = new EMBxf(a, a.b, EMBb, EMBb, EMBb), a.N.pa = a.bc, b = EMB9f(a.a, a.nb, a.cc), EMB1(), !EMBy || EMBC(10))EMBed(b, "TYPE", "xmlhttp"), EMBDf(a.N, b, EMBe, a.nb, EMBe); else {
        EMBed(b, "TYPE", "html");
        var c = a.N;
        a = Boolean(a.nb);
        c.Ta = 3;
        c.da = EMBgd(b.u());
        EMBSf(c, a)
    }
}
EMB.$b = function (a) {
    return this.a.$b(a)
};
EMB.Zc = function () {
    return EMBe
};
EMB.Qc = function (a, b) {
    this.ya = a.gb;
    if (0 == this.O)if (this.b.info("TestConnection: Got data for stage 1"), b) {
        try {
            var c = this.e.parse(b)
        } catch (d) {
            EMBQf(this.b, d);
            EMB$f(this.a, this);
            return
        }
        this.nb = c[0];
        this.pb = c[1]
    } else this.b.info("TestConnection: Null responseText"), EMB$f(this.a, this); else if (2 == this.O)if (this.Ib)EMB1(), this.gc = EMBm(); else if ("11111" == b) {
        if (EMB1(), this.Ib = EMBc, this.Hb = EMBm(), c = this.Hb - this.Ec, !EMBy || EMBC(10) || 500 > c)this.ya = 200, EMBWf(this.N), this.b.info("Test connection succeeded; using streaming connection"), EMB1(),
            EMB8f(this.a, this, EMBc)
    } else EMB1(), this.Hb = this.gc = EMBm(), this.Ib = EMBe
};
EMB.Db = function () {
    this.ya = this.N.gb;
    if (this.N.U)if (0 == this.O)this.b.info("TestConnection: request complete for initial check"), this.pb ? (this.O = 1, EMB5f(this)) : (this.O = 2, EMB7f(this)); else {
        if (2 == this.O) {
            this.b.info("TestConnection: request complete for stage 2");
            var a = EMBe;
            (a = !EMBy || EMBC(10) ? this.Ib : 200 > this.gc - this.Hb ? EMBe : EMBc) ? (this.b.info("Test connection succeeded; using streaming connection"), EMB1(), EMB8f(this.a, this, EMBc)) : (this.b.info("Test connection failed; not using streaming"), EMB1(), EMB8f(this.a,
                this, EMBe))
        }
    } else this.b.info("TestConnection: request failed, in state " + this.O), 0 == this.O ? EMB1() : 2 == this.O && EMB1(), EMB$f(this.a, this)
};
EMB.Eb = function () {
    return this.a.Eb()
};
EMB.T = function (a) {
    this.a.T(a)
};
function EMBag(a) {
    this.headers = new EMB4b;
    this.b = a || EMBd
}
EMBo(EMBag, EMBif);
EMBag.prototype.a = EMBoc("goog.net.XhrIo");
var EMBbg = /^https?$/i;
EMB = EMBag.prototype;
EMB.ia = EMBe;
EMB.w = EMBd;
EMB.Kb = EMBd;
EMB.Lb = "";
EMB.Lc = "";
EMB.jb = 0;
EMB.ic = "";
EMB.kc = EMBe;
EMB.Jb = EMBe;
EMB.jc = EMBe;
EMB.Ga = EMBe;
EMB.Xa = EMBd;
EMB.Mc = "";
EMB.Nc = EMBe;
function EMBFf(a, b, c, d, e) {
    a.w && EMBa(Error("[goog.net.XhrIo] Object is active with another request=" + a.Lb + "; newUri=" + b));
    c = c ? c.toUpperCase() : "GET";
    a.Lb = b;
    a.ic = "";
    a.jb = 0;
    a.Lc = c;
    a.kc = EMBe;
    a.ia = EMBc;
    a.w = a.b ? EMBuf(a.b) : EMBuf(EMBsf);
    a.Kb = a.b ? a.b.a || (a.b.a = EMBwf(a.b)) : EMBsf.a || (EMBsf.a = EMBwf(EMBsf));
    a.w.onreadystatechange = EMBl(a.Kc, a);
    try {
        EMBJ(a.a, EMBYf(a, "Opening Xhr")), a.jc = EMBc, a.w.open(c, b, EMBc), a.jc = EMBe
    } catch (f) {
        EMBJ(a.a, EMBYf(a, "Error opening Xhr: " + f.message));
        EMBcg(a, f);
        return
    }
    b = d || "";
    var g = a.headers.u();
    e && EMB3b(e, function (a, b) {
        EMB5b(g, b, a)
    });
    e = EMBza(g.ka(), EMBdg);
    d = EMBf.FormData && b instanceof EMBf.FormData;
    "POST" == c && (!e && !d) && EMB5b(g, "Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    EMB3b(g, function (a, b) {
        this.w.setRequestHeader(b, a)
    }, a);
    a.Mc && (a.w.responseType = a.Mc);
    "withCredentials"in a.w && (a.w.withCredentials = a.Nc);
    try {
        a.Xa && (EMBkf.clearTimeout(a.Xa), a.Xa = EMBd), EMBJ(a.a, EMBYf(a, "Sending request")), a.Jb = EMBc, a.w.send(b), a.Jb = EMBe
    } catch (h) {
        EMBJ(a.a, EMBYf(a, "Send error: " + h.message)),
            EMBcg(a, h)
    }
}
function EMBdg(a) {
    return"content-type" == a.toLowerCase()
}
function EMBcg(a, b) {
    a.ia = EMBe;
    a.w && (a.Ga = EMBc, a.w.abort(), a.Ga = EMBe);
    a.ic = b;
    a.jb = 5;
    EMBeg(a);
    EMBZf(a)
}
function EMBeg(a) {
    a.kc || (a.kc = EMBc, EMBZ(a, "complete"), EMBZ(a, "error"))
}
EMB.G = function () {
    this.w && (this.ia && (this.ia = EMBe, this.Ga = EMBc, this.w.abort(), this.Ga = EMBe), EMBZf(this, EMBc));
    EMBag.Q.G.call(this)
};
EMB.Kc = function () {
    !this.jc && !this.Jb && !this.Ga ? this.te() : EMBfg(this)
};
EMB.te = function () {
    EMBfg(this)
};
function EMBfg(a) {
    if (a.ia && "undefined" != typeof EMBaa)if (a.Kb[1] && 4 == EMBGf(a) && 2 == EMBHf(a))EMBJ(a.a, EMBYf(a, "Local request error detected and ignored")); else if (a.Jb && 4 == EMBGf(a))EMBkf.setTimeout(EMBl(a.Kc, a), 0); else if (EMBZ(a, "readystatechange"), 4 == EMBGf(a)) {
        EMBJ(a.a, EMBYf(a, "Request complete"));
        a.ia = EMBe;
        try {
            var b = EMBHf(a), c, d;
            a:switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    d = EMBc;
                    break a;
                default:
                    d = EMBe
            }
            if (!(c = d)) {
                var e;
                if (e = 0 === b) {
                    var f = EMBQc(String(a.Lb))[1] || EMBd;
                    if (!f &&
                        self.location)var g = self.location.protocol, f = g.substr(0, g.length - 1);
                    e = !EMBbg.test(f ? f.toLowerCase() : "")
                }
                c = e
            }
            if (c)EMBZ(a, "complete"), EMBZ(a, "success"); else {
                a.jb = 6;
                var h;
                try {
                    h = 2 < EMBGf(a) ? a.w.statusText : ""
                } catch (k) {
                    EMBJ(a.a, "Can not get status: " + k.message), h = ""
                }
                a.ic = h + " [" + EMBHf(a) + "]";
                EMBeg(a)
            }
        } finally {
            EMBZf(a)
        }
    }
}
function EMBZf(a, b) {
    if (a.w) {
        var c = a.w, d = a.Kb[0] ? EMBba : EMBd;
        a.w = EMBd;
        a.Kb = EMBd;
        a.Xa && (EMBkf.clearTimeout(a.Xa), a.Xa = EMBd);
        b || EMBZ(a, "ready");
        try {
            c.onreadystatechange = d
        } catch (e) {
            a.a.log(EMBgc, "Problem encountered resetting onreadystatechange: " + e.message, EMBb)
        }
    }
}
function EMBGf(a) {
    return a.w ? a.w.readyState : 0
}
function EMBHf(a) {
    try {
        return 2 < EMBGf(a) ? a.w.status : -1
    } catch (b) {
        return a.a.log(EMBhc, "Can not get status: " + b.message, EMBb), -1
    }
}
function EMBIf(a) {
    try {
        return a.w ? a.w.responseText : ""
    } catch (b) {
        return EMBJ(a.a, "Can not get responseText: " + b.message), ""
    }
}
function EMBYf(a, b) {
    return b + " [" + a.Lc + " " + a.Lb + " " + EMBHf(a) + "]"
};
function EMBgg(a, b, c) {
    this.p = a || EMBd;
    this.b = 1;
    this.e = [];
    this.g = [];
    this.a = new EMB_f;
    this.q = new EMBjf(EMBd, EMBc);
    this.F = b || EMBd;
    this.D = c != EMBd ? c : EMBd
}
function EMBhg(a, b) {
    this.a = a;
    this.map = b;
    this.Ba = EMBd
}
EMB = EMBgg.prototype;
EMB.qb = EMBd;
EMB.J = EMBd;
EMB.A = EMBd;
EMB.Zb = EMBd;
EMB.Cb = EMBd;
EMB.Bc = EMBd;
EMB.Fb = EMBd;
EMB.kb = 0;
EMB.Cd = 0;
EMB.H = EMBd;
EMB.ga = EMBd;
EMB.aa = EMBd;
EMB.Aa = EMBd;
EMB.ha = EMBd;
EMB.ac = EMBd;
EMB.ib = -1;
EMB.Ic = -1;
EMB.$ = -1;
EMB.lb = 0;
EMB.Wa = 0;
EMB.ua = 8;
var EMBig = new EMBif;
function EMBjg(a) {
    EMBX.call(this, "statevent", a)
}
EMBo(EMBjg, EMBX);
function EMBkg(a) {
    EMBX.call(this, "timingevent", a)
}
EMBo(EMBkg, EMBX);
function EMBlg(a) {
    EMBX.call(this, "serverreachability", a)
}
EMBo(EMBlg, EMBX);
function EMBmg(a, b, c, d, e, f) {
    a.a.info("connect()");
    EMB1();
    a.Zb = c;
    a.qb = d || {};
    e && EMBh(f) && (a.qb.OSID = e, a.qb.OAID = f);
    a.a.info("connectTest_()");
    a.ha = new EMB4f(a, a.a);
    a.ha.bc = EMBd;
    a.ha.e = a.q;
    a = a.ha;
    a.cc = b;
    b = EMBng(a.a, a.cc);
    EMB1();
    a.Ec = EMBm();
    c = a.a.F;
    c != EMBd ? (a.nb = c[0], a.pb = c[1], a.pb ? (a.O = 1, EMB5f(a)) : (a.O = 2, EMB7f(a))) : (EMBed(b, "MODE", "init"), a.N = new EMBxf(a, a.b, EMBb, EMBb, EMBb), a.N.pa = a.bc, EMBDf(a.N, b, EMBe, EMBd, EMBc), a.O = 0)
}
function EMBog(a) {
    if (a.ha) {
        var b = a.ha;
        b.N && (EMBWf(b.N), b.N = EMBd);
        b.ya = -1;
        a.ha = EMBd
    }
    a.A && (EMBWf(a.A), a.A = EMBd);
    a.aa && (EMBf.clearTimeout(a.aa), a.aa = EMBd);
    EMBpg(a);
    a.J && (EMBWf(a.J), a.J = EMBd);
    a.ga && (EMBf.clearTimeout(a.ga), a.ga = EMBd)
}
EMB = EMBgg.prototype;
EMB.Zc = function () {
    return 0 == this.b
};
function EMBqg(a) {
    !a.J && !a.ga && (a.ga = EMBUf(EMBl(a.Jc, a), 0), a.lb = 0)
}
EMB.Jc = function (a) {
    this.ga = EMBd;
    this.a.info("startForwardChannel_");
    if (1 == this.b)if (a)EMBTf(this.a, "Not supposed to retry the open"); else {
        this.a.info("open_()");
        this.kb = Math.floor(1E5 * Math.random());
        a = this.kb++;
        var b = new EMBxf(this, this.a, "", a, EMBb);
        b.pa = EMBd;
        var c = EMBrg(this), d = this.Cb.u();
        EMBM(d, "RID", a);
        this.p && EMBM(d, "CVER", this.p);
        EMBsg(this, d);
        EMBBf(b, d, c);
        this.J = b;
        this.b = 2
    } else 3 == this.b && (a ? EMBtg(this, a) : 0 == this.e.length ? this.a.info("startForwardChannel_ returned: nothing to send") : this.J ?
        EMBTf(this.a, "startForwardChannel_ returned: connection already in progress") : (EMBtg(this), this.a.info("startForwardChannel_ finished, sent request")))
};
function EMBtg(a, b) {
    var c, d;
    b ? 6 < a.ua ? (a.e = a.g.concat(a.e), a.g.length = 0, c = a.kb - 1, d = EMBrg(a)) : (c = b.e, d = b.Qa) : (c = a.kb++, d = EMBrg(a));
    var e = a.Cb.u();
    EMBM(e, "SID", a.i);
    EMBM(e, "RID", c);
    EMBM(e, "AID", a.ib);
    EMBsg(a, e);
    c = new EMBxf(a, a.a, a.i, c, a.lb + 1);
    c.pa = EMBd;
    c.setTimeout(Math.round(1E4) + Math.round(1E4 * Math.random()));
    a.J = c;
    EMBBf(c, e, d)
}
function EMBsg(a, b) {
    if (a.H) {
        var c = a.H.jd(a);
        c && EMB3b(c, function (a, c) {
            EMBM(b, c, a)
        })
    }
}
function EMBrg(a) {
    var b = Math.min(a.e.length, 1E3), c = ["count=" + b], d;
    6 < a.ua && 0 < b ? (d = a.e[0].a, c.push("ofs=" + d)) : d = 0;
    for (var e = 0; e < b; e++) {
        var f = a.e[e].a, g = a.e[e].map, f = 6 >= a.ua ? e : f - d;
        try {
            EMB3b(g, function (a, b) {
                c.push("req" + f + "_" + b + "=" + encodeURIComponent(a))
            })
        } catch (h) {
            c.push("req" + f + "_type=" + encodeURIComponent("_badmap"))
        }
    }
    a.g = a.g.concat(a.e.splice(0, b));
    return c.join("&")
}
function EMBug(a) {
    !a.A && !a.aa && (a.j = 1, a.aa = EMBUf(EMBl(a.Sc, a), 0), a.Wa = 0)
}
function EMBvg(a) {
    if (a.A || a.aa)return EMBTf(a.a, "Request already in progress"), EMBe;
    if (3 <= a.Wa)return EMBe;
    a.a.info("Going to retry GET");
    a.j++;
    a.aa = EMBUf(EMBl(a.Sc, a), EMBwg(a, a.Wa));
    a.Wa++;
    return EMBc
}
EMB.Sc = function () {
    this.aa = EMBd;
    this.a.info("Creating new HttpRequest");
    this.A = new EMBxf(this, this.a, this.i, "rpc", this.j);
    this.A.pa = EMBd;
    this.A.Yb = 0;
    var a = this.Bc.u();
    EMBM(a, "RID", "rpc");
    EMBM(a, "SID", this.i);
    EMBM(a, "CI", this.ac ? "0" : "1");
    EMBM(a, "AID", this.ib);
    EMBsg(this, a);
    if (!EMBy || EMBC(10))EMBM(a, "TYPE", "xmlhttp"), EMBDf(this.A, a, EMBc, this.Fb, EMBe); else {
        EMBM(a, "TYPE", "html");
        var b = this.A, c = Boolean(this.Fb);
        b.Ta = 3;
        b.da = EMBgd(a.u());
        EMBSf(b, c)
    }
    this.a.info("New Request created")
};
function EMB8f(a, b, c) {
    a.a.info("Test Connection Finished");
    a.ac = c;
    a.$ = b.ya;
    a.a.info("connectChannel_()");
    a.Yd(1, 0);
    a.Cb = EMBng(a, a.Zb);
    EMBqg(a)
}
function EMB$f(a, b) {
    a.a.info("Test Connection Failed");
    a.$ = b.ya;
    EMB2(a, 2)
}
EMB.Qc = function (a, b) {
    if (!(0 == this.b || this.A != a && this.J != a))if (this.$ = a.gb, this.J == a && 3 == this.b)if (7 < this.ua) {
        var c;
        try {
            c = this.q.parse(b)
        } catch (d) {
            c = EMBd
        }
        if (EMBi(c) && 3 == c.length) {
            var e = c;
            if (0 == e[0])a:if (this.a.info("Server claims our backchannel is missing."), this.aa)this.a.info("But we are currently starting the request."); else {
                if (this.A)if (this.A.hb + 3E3 < this.J.hb)EMBpg(this), EMBWf(this.A), this.A = EMBd; else break a; else EMBOf(this.a, "We do not have a BackChannel established");
                EMBvg(this);
                EMB1()
            } else this.Ic =
                e[1], c = this.Ic - this.ib, 0 < c && (e = e[2], this.a.info(e + " bytes (in " + c + " arrays) are outstanding on the BackChannel"), 37500 > e && (this.ac && 0 == this.Wa) && !this.Aa && (this.Aa = EMBUf(EMBl(this.zd, this), 6E3)))
        } else this.a.info("Bad POST response data returned"), EMB2(this, 11)
    } else"y2f%" != b && (this.a.info("Bad data returned - missing/invald magic cookie"), EMB2(this, 11)); else if (this.A == a && EMBpg(this), !/^[\s\xa0]*$/.test(b)) {
        c = this.q.parse(b);
        EMBi(c);
        for (e = 0; e < c.length; e++) {
            var f = c[e];
            this.ib = f[0];
            f = f[1];
            2 == this.b ?
                "c" == f[0] ? (this.i = f[1], this.Fb = f[2], f = f[3], f != EMBd ? this.ua = f : this.ua = 6, this.b = 3, this.H && this.H.Hc(this), this.Bc = EMB9f(this, this.Fb, this.Zb), EMBug(this)) : "stop" == f[0] && EMB2(this, 7) : 3 == this.b && ("stop" == f[0] ? EMB2(this, 7) : "noop" != f[0] && this.H && this.H.Gc(this, f), this.Wa = 0)
        }
    }
};
EMB.zd = function () {
    this.Aa != EMBd && (this.Aa = EMBd, EMBWf(this.A), this.A = EMBd, EMBvg(this), EMB1())
};
function EMBpg(a) {
    a.Aa != EMBd && (EMBf.clearTimeout(a.Aa), a.Aa = EMBd)
}
EMB.Db = function (a) {
    this.a.info("Request complete");
    var b;
    if (this.A == a)EMBpg(this), this.A = EMBd, b = 2; else if (this.J == a)this.J = EMBd, b = 1; else return;
    this.$ = a.gb;
    if (0 != this.b)if (a.U)1 == b ? (EMBm(), EMBZ(EMBig, new EMBkg(EMBig)), EMBqg(this), this.g.length = 0) : EMBug(this); else {
        var c = a.ea;
        if (3 == c || 7 == c || 0 == c && 0 < this.$)this.a.info("Not retrying due to error type"); else {
            this.a.info("Maybe retrying, last error: " + EMByf(c, this.$));
            var d;
            if (d = 1 == b)this.J || this.ga ? (EMBTf(this.a, "Request already in progress"), d = EMBe) :
                1 == this.b || 2 <= this.lb ? d = EMBe : (this.a.info("Going to retry POST"), this.ga = EMBUf(EMBl(this.Jc, this, a), EMBwg(this, this.lb)), this.lb++, d = EMBc);
            if (d || 2 == b && EMBvg(this))return;
            this.a.info("Exceeded max number of retries")
        }
        this.a.info("Error: HTTP request failed");
        switch (c) {
            case 1:
                EMB2(this, 5);
                break;
            case 4:
                EMB2(this, 10);
                break;
            case 3:
                EMB2(this, 6);
                break;
            case 7:
                EMB2(this, 12);
                break;
            default:
                EMB2(this, 2)
        }
    }
};
function EMBwg(a, b) {
    var c = 5E3 + Math.floor(1E4 * Math.random());
    a.H || (a.a.info("Inactive channel"), c *= 2);
    return c * b
}
EMB.Yd = function (a) {
    EMBs(arguments, this.b) || EMBa(Error("Unexpected channel state: " + this.b))
};
function EMB2(a, b) {
    a.a.info("Error code " + b);
    if (2 == b || 9 == b) {
        var c = EMBd;
        a.H && (c = EMBd);
        var d = EMBl(a.ae, a);
        c || (c = new EMB_c("//www.google.com/images/cleardot.gif"), EMBgd(c));
        EMB2f(c.toString(), 1E4, d)
    } else EMB1();
    EMBxg(a, b)
}
EMB.ae = function (a) {
    a ? (this.a.info("Successfully pinged google.com"), EMB1()) : (this.a.info("Failed to ping google.com"), EMB1(), EMBxg(this, 8))
};
function EMBxg(a, b) {
    a.a.info("HttpChannel: error - " + b);
    a.b = 0;
    a.H && a.H.Pc(a, b);
    EMByg(a);
    EMBog(a)
}
function EMByg(a) {
    a.b = 0;
    a.$ = -1;
    if (a.H)if (0 == a.g.length && 0 == a.e.length)a.H.fc(a); else {
        a.a.info("Number of undelivered maps, pending: " + a.g.length + ", outgoing: " + a.e.length);
        var b = EMBCa(a.g), c = EMBCa(a.e);
        a.g.length = 0;
        a.e.length = 0;
        a.H.fc(a, b, c)
    }
}
function EMBng(a, b) {
    var c = EMB6f(a, EMBd, b);
    a.a.info("GetForwardChannelUri: " + c);
    return c
}
function EMB9f(a, b, c) {
    b = EMB6f(a, a.Eb() ? b : EMBd, c);
    a.a.info("GetBackChannelUri: " + b);
    return b
}
function EMB6f(a, b, c) {
    var d = c instanceof EMB_c ? c.u() : new EMB_c(c, EMBb);
    if ("" != d.Ha)b && EMB1c(d, b + "." + d.Ha), EMB2c(d, d.$a); else var e = window.location, d = EMBhd(e.protocol, EMBd, b ? b + "." + e.hostname : e.hostname, e.port, c);
    a.qb && EMB3b(a.qb, function (a, b) {
        EMBM(d, b, a)
    });
    EMBM(d, "VER", a.ua);
    EMBsg(a, d);
    return d
}
EMB.$b = function (a) {
    a && EMBa(Error("Can't create secondary domain capable XhrIo object."));
    a = new EMBag;
    a.Nc = EMBe;
    return a
};
function EMBUf(a, b) {
    EMBfa(a) || EMBa(Error("Fn must not be null and must be a function"));
    return EMBf.setTimeout(function () {
        a()
    }, b)
}
EMB.T = function () {
    EMBZ(EMBig, new EMBlg(EMBig))
};
function EMB1() {
    EMBZ(EMBig, new EMBjg(EMBig))
}
EMB.Eb = function () {
    return!(!EMBy || EMBC(10))
};
function EMBzg() {
}
EMB = EMBzg.prototype;
EMB.Hc = function () {
};
EMB.Gc = function () {
};
EMB.Pc = function () {
};
EMB.fc = function () {
};
EMB.jd = function () {
    return{}
};
function EMBAg(a, b) {
    EMB_.call(this);
    EMBfa(a) ? b && (a = EMBl(a, b)) : a && EMBfa(a.handleEvent) ? a = EMBl(a.handleEvent, a) : EMBa(Error("Invalid listener argument"));
    this.L = a;
    EMB$e(this, "tick", EMBl(this.p, this));
    EMB0(this);
    EMBlf(this, 5E3 + 2E4 * Math.random())
}
EMBo(EMBAg, EMB_);
EMBAg.prototype.p = function () {
    if (500 < this.b) {
        EMB0(this);
        var a = this.b;
        24E4 > 2 * a && (a *= 2);
        EMBlf(this, a);
        this.start()
    }
    this.L()
};
function EMBBg(a, b) {
    this.action = a;
    this.params = b || EMBd
};
function EMBCg(a, b) {
    this.q = a;
    this.e = b;
    this.i = new EMBO;
    this.b = new EMBAg(this.Bd, this);
    this.a = EMBd
}
EMBo(EMBCg, EMBzg);
EMB = EMBCg.prototype;
EMB.Gb = "";
EMB.lc = EMBe;
EMB.W = function (a, b, c) {
    this.i.W(a, b, c)
};
EMB.C = function (a, b) {
    this.i.C.apply(this.i, arguments)
};
function EMBDg(a, b) {
    if (!(a.a && 2 == a.a.b)) {
        a.Gb = "";
        EMB0(a.b);
        a.g = b || EMBd;
        var c = a.q + "/test", d = a.q + "/bind", e = new EMBgg("1"), f = a.a;
        f && (f.H = EMBd);
        e.H = a;
        a.a = e;
        e = {};
        EMBWa(e, a.e);
        a.g && EMBWa(e, a.g);
        f ? EMBmg(a.a, c, d, e, f.i, f.ib) : EMBmg(a.a, c, d, e)
    }
}
function EMBEg(a) {
    a.lc = EMBc;
    EMB0(a.b);
    if (a.a && 0 != a.a.b) {
        var b = a.a;
        b.a.info("disconnect()");
        EMBog(b);
        if (3 == b.b) {
            var c = b.kb++, d = b.Cb.u();
            EMBM(d, "SID", b.i);
            EMBM(d, "RID", c);
            EMBM(d, "TYPE", "terminate");
            EMBsg(b, d);
            c = new EMBxf(b, b.a, b.i, c, EMBb);
            c.Ta = 2;
            c.da = EMBgd(d.u());
            (new Image).src = c.da;
            c.hb = EMBm();
            EMBEf(c)
        }
        EMByg(b)
    }
    a.lc = EMBe
}
function EMBFg(a, b) {
    if (a.a && !(0 == a.a.b || !(2 == a.a.b || 3 == a.a.b) && !a.b.e)) {
        var c = {_sc: b};
        EMBrc(c);
        var d = a.a;
        0 == d.b && EMBa(Error("Invalid operation: sending map when state is closed"));
        1E3 == d.e.length && EMBTf(d.a, "Already have 1000 queued maps upon queueing " + EMBrc(c));
        d.e.push(new EMBhg(d.Cd++, c));
        (2 == d.b || 3 == d.b) && EMBqg(d)
    }
}
EMB.Hc = function () {
    var a = this.b;
    EMB0(a);
    EMBlf(a, 5E3 + 2E4 * Math.random());
    this.g = EMBd;
    this.C("onStateOpened")
};
EMB.Pc = function (a, b) {
    this.C("onError", b);
    if (!(4 == b || 2 == b && 401 == this.a.$)) {
        if (6 == b) {
            var c = this.b;
            EMB0(c);
            EMBlf(c, 500)
        }
        this.b.start()
    }
};
EMB.fc = function () {
    this.C("onStateClosed")
};
EMB.jd = function () {
    var a = {v: 2};
    this.Gb && (a.gsessionid = this.Gb);
    this.lc && (a.ui = "");
    return a
};
EMB.Gc = function (a, b) {
    "S" == b[0] ? this.Gb = b[1] : this.i.C("onMessage", new EMBBg(b[0], b[1]))
};
EMB.Bd = function () {
    EMB0(this.b);
    var a = this.a, b = 0;
    a.A && b++;
    a.J && b++;
    0 != b ? this.b.start() : EMBDg(this, this.g)
};
function EMBGg(a) {
    this.a = [];
    this.index = -1;
    EMBHg(this);
    a && (this.b = new EMBRe(a.screen), this.a = a.videoIds, this.index = a.index, this.e = a.playerState, this.volume = a.volume, this.i = a.playerTime, this.g = a.playerTimeAt)
}
function EMBHg(a) {
    a.volume = -1;
    a.e = -1;
    a.i = 0;
    a.g = EMBm()
}
function EMBIg(a, b) {
    var c = a.index;
    a.index = EMBwa(a.a, b);
    c != a.index && EMBHg(a)
}
function EMBJg(a, b, c) {
    c = c || a.a[a.index];
    if (EMBGa(a.a, b) && c == a.a[a.index])return EMBe;
    a.a = EMBCa(b);
    EMBIg(a, c);
    return EMBc
};
function EMBKg(a) {
    for (var b = [], c = EMBLg, d = a.elements, e, f = 0; e = d[f]; f++)if (!(e.form != a || e.disabled || "fieldset" == e.tagName.toLowerCase())) {
        var g = e.name;
        switch (e.type.toLowerCase()) {
            case "file":
            case "submit":
            case "reset":
            case "button":
                break;
            case "select-multiple":
                e = EMBMg(e);
                if (e != EMBd)for (var h, k = 0; h = e[k]; k++)c(b, g, h);
                break;
            default:
                h = EMBMg(e), h != EMBd && c(b, g, h)
        }
    }
    d = a.getElementsByTagName("input");
    for (f = 0; e = d[f]; f++)e.form == a && "image" == e.type.toLowerCase() && (g = e.name, c(b, g, e.value), c(b, g + ".x", "0"), c(b, g +
        ".y", "0"));
    return b.join("&")
}
function EMBLg(a, b, c) {
    a.push(encodeURIComponent(b) + "=" + encodeURIComponent(c))
}
function EMBMg(a) {
    var b = a.type;
    if (!EMBh(b))return EMBd;
    switch (b.toLowerCase()) {
        case "checkbox":
        case "radio":
            return a.checked ? a.value : EMBd;
        case "select-one":
            return b = a.selectedIndex, 0 <= b ? a.options[b].value : EMBd;
        case "select-multiple":
            for (var b = [], c, d = 0; c = a.options[d]; d++)c.selected && b.push(c.value);
            return b.length ? b : EMBd;
        default:
            return EMBh(a.value) ? a.value : EMBd
    }
};
var EMBNg = EMBd;
"undefined" != typeof XMLHttpRequest ? EMBNg = function () {
    return new XMLHttpRequest
} : "undefined" != typeof ActiveXObject && (EMBNg = function () {
    return new ActiveXObject("Microsoft.XMLHTTP")
});
function EMBOg(a, b, c, d, e, f, g) {
    var h = EMBNg && EMBNg();
    if ("open"in h) {
        h.onreadystatechange = function () {
            4 == (h && "readyState"in h ? h.readyState : 0) && b && b(h)
        };
        c = (c || "GET").toUpperCase();
        d = d || "";
        h.open(c, a, EMBc);
        f && (h.responseType = f);
        g && (h.withCredentials = EMBc);
        a = "POST" == c;
        if (e)for (var k in e)h.setRequestHeader(k, e[k]), "content-type" == k.toLowerCase() && (a = EMBe);
        a && h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        h.send(d);
        return h
    }
}
function EMBPg(a, b) {
    var c = b.format || "JSON";
    b.Ge && (a = document.location.protocol + "//" + document.location.hostname + (document.location.port ? ":" + document.location.port : "") + a);
    var d = b.Sb;
    d && (a = EMBbe(a, d));
    var e = b.ke || "";
    if (d = b.dd)e = EMB8d(e), EMBWa(e, d), e = EMB$d(e);
    var f = EMBe, g, h = EMBOg(a, function (a) {
        if (!f) {
            f = EMBc;
            g && window.clearTimeout(g);
            var d;
            a:switch (a && "status"in a ? a.status : -1) {
                case 0:
                case 200:
                case 204:
                case 304:
                    d = EMBc;
                    break a;
                default:
                    d = EMBe
            }
            var e = EMBd;
            if (d || 400 <= a.status && 500 > a.status)e = EMBQg(c, a);
            if (d)a:{
                switch (c) {
                    case "XML":
                        d =
                            0 == parseInt(e && e.return_code, 10);
                        break a;
                    case "RAW":
                        d = EMBc;
                        break a
                }
                d = !!e
            }
            var e = e || {}, h = b.Ba || EMBf;
            d ? b.oa && b.oa.call(h, a, e) : b.onError && b.onError.call(h, a, e);
            b.cd && b.cd.call(h, a, e)
        }
    }, b.method, e, b.headers, b.responseType, b.withCredentials);
    b.oe && 0 < b.timeout && (g = EMBL(function () {
        f || (f = EMBc, h.abort(), window.clearTimeout(g), b.oe.call(b.Ba || EMBf, h))
    }, b.timeout))
}
function EMBQg(a, b) {
    var c = EMBd;
    switch (a) {
        case "JSON":
            var d = b.responseText, e = b.getResponseHeader("Content-Type") || "";
            d && 0 <= e.indexOf("json") && (c = EMBqc(d));
            break;
        case "XML":
            if (d = (d = b.responseXML) ? EMBRg(d) : EMBd)c = {}, EMBr(d.getElementsByTagName("*"), function (a) {
                c[a.tagName] = EMBSg(a)
            })
    }
    return c
}
function EMBRg(a) {
    return!a ? EMBd : (a = ("responseXML"in a ? a.responseXML : a).getElementsByTagName("root")) && 0 < a.length ? a[0] : EMBd
}
function EMBSg(a) {
    var b = "";
    EMBr(a.childNodes, function (a) {
        b += a.nodeValue
    });
    return b
};
function EMBTg() {
}
function EMBUg(a) {
    var b = navigator.userAgent;
    if (0 <= b.search("MSIE") && (b = b.match(/MSIE ([\d.]+)/)[1], 0 > EMBta(b, "10.0")))return a;
    b = new EMB_c(document.location.href);
    return EMBhd("https", b.ab, b.Ha, b.$a, a).toString()
}
function EMBVg(a, b) {
    var c = {method: "POST", dd: {lounge_token: EMBya(a,function (a) {
        return a.loungeToken
    }).join(",")}, oa: function (c) {
        c = EMBpc(c.responseText).screens || [];
        var e = [];
        EMBr(c, function (a) {
            "online" == a.status && e.push(a.loungeToken)
        });
        c = EMBxa(a, function (a) {
            return EMBs(e, a.loungeToken)
        });
        b(c)
    }, onError: EMBma(b, [])};
    EMBPg(EMBUg("/api/lounge/pairing/get_screen_availability"), c)
}
function EMBWg(a, b) {
    var c = EMBya(a, function (a) {
        return a.P
    });
    EMBPg(EMBUg("/api/lounge/pairing/get_lounge_token_batch"), {dd: {screen_ids: c.join(",")}, method: "POST", oa: function (c) {
        c = EMBpc(c.responseText).screens || [];
        EMBr(c, function (b) {
            var c = EMBza(a, function (a) {
                return a.P == b.screenId
            });
            c && EMBSe(c, b.loungeToken)
        });
        b(a)
    }, onError: EMBma(b, [])})
}
function EMBXg(a, b, c) {
    if (0 == b.length)c([]); else {
        var d = EMBxa(b, function (a) {
            return!!a.P && (!a.loungeToken || a.za < EMBm())
        });
        0 == d.length ? EMBVg(b, c) : EMBWg(d, EMBl(function (a) {
            EMBVg(a, c)
        }, a))
    }
};
function EMBYg(a) {
    EMBEd.call(this, a)
}
EMBo(EMBYg, EMBW);
function EMBZg(a, b) {
    var c = EMB3;
    if (c) {
        EMBk(b) || (b = JSON.stringify(b, EMBb));
        try {
            c.Ka(a, b, 0)
        } catch (d) {
            c.ba(a)
        }
    }
}
function EMB_g(a) {
    if (!EMB3 && !EMB0g)return EMBd;
    var b;
    try {
        b = EMB3.get(a), b = EMBk(b) ? b : EMB0g.get(a)
    } catch (c) {
        return EMBd
    }
    if (!EMBk(b))return EMBd;
    try {
        b = JSON.parse(b, EMBb)
    } catch (d) {
    }
    return b
}
var EMB0g = new EMBYg(new EMBDd);
EMB0g.Na.eb() || (EMB0g = EMBd);
var EMB3 = new EMBYg(new EMBDe);
EMB3.Na.eb() || (EMB3 = EMBd);
function EMB1g() {
}
EMBo(EMB1g, EMBTe);
EMB1g.prototype.get = function (a) {
    return EMB_g(a)
};
EMB1g.prototype.e = function (a, b) {
    EMBZg(a, b)
};
EMB1g.prototype.b = function (a) {
    EMB3 && EMB3.ba(a);
    EMB0g && EMB0g.ba(a)
};
function EMB2g(a) {
    EMB0e.call(this);
    var b = this.D.get("deviceid");
    b || (b = EMB3g(), EMBPe(this.D, "deviceid", b));
    this.e = new EMBCg("/api/lounge/bc", {device: "REMOTE_CONTROL", id: b, name: "Desktop", app: "youtube-desktop"});
    this.Z = new EMBTg;
    this.i = a;
    this.g = new EMB1g;
    this.a = EMBd;
    EMB4g(this);
    this.e.W("onStateOpened", this.rd, this);
    this.e.W("onStateClosed", this.Cc, this);
    this.e.W("onError", this.pd, this);
    this.e.W("onMessage", this.qd, this);
    a = EMBXe(this.g);
    b = EMB_g("remote-conn-context");
    if (this.a = !b ? EMBd : new EMBGg(b))this.a.b =
        EMB5g(this, this.a.b.loungeToken), this.a.b || (this.a = EMBd);
    this.a && !this.a.b.equals(a) && (EMB3 && EMB3.ba("remote-conn-context"), EMB0g && EMB0g.ba("remote-conn-context"), this.a = EMBd);
    a && EMB6g(this, a)
}
EMBo(EMB2g, EMB0e);
EMB = EMB2g.prototype;
EMB.Ua = NaN;
function EMB3g() {
    return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
        var b = 16 * Math.random() | 0;
        return("x" == a ? b : b & 3 | 8).toString(16)
    })
}
function EMB6g(a, b) {
    var c = EMBXe(a.g);
    b.equals(c) ? EMBEg(a.e) : EMB7g(a);
    a.e.e.loungeIdToken = b.loungeToken;
    if (a.j) {
        var c = a.j.b(), d = c[a.j.e()], c = {method: "setPlaylist", params: EMBrc({videoIds: c.join(","), videoId: d, videoSources: a.j.g().join(","), currentTime: a.j.a()})};
        EMBDg(a.e, c)
    } else EMBDg(a.e);
    a.Ua = EMBL(EMBl(function () {
        this.a = EMBd;
        EMB8g(this);
        this.C("connectionError")
    }, a), 1E4)
}
function EMB7g(a) {
    a.g.b("remote-conn-screen");
    EMBEg(a.e)
}
function EMB9g(a) {
    return EMB5g(a, a.e.e.loungeIdToken)
}
function EMB5g(a, b) {
    return EMBza(a.b, function (a) {
        return a.loungeToken == b
    }, a)
}
function EMB$g(a) {
    5 < a.b.length && (a.b = a.b.slice(a.b.length - 5));
    EMBYe(a.i, "screens", a.b);
    EMB9g(a) && EMBXe(a.g) && EMBWe(a.g, EMB9g(a));
    var b = EMBah(a), c = EMBxa(a.b, function (a) {
        return!!EMBza(b, function (b) {
            return a.equals(b)
        })
    });
    EMBbh(a, c)
}
function EMBah(a) {
    return EMBZe(a.i, "remote-online-screens")
}
function EMBbh(a, b) {
    b.length ? EMBYe(a.i, "remote-online-screens", b) : a.i.b("remote-online-screens")
}
function EMBch(a, b) {
    EMB4g(a);
    a.b = EMBxa(a.b, function (a) {
        return!!a.P || !(!a.loungeToken || a.za < EMBm())
    });
    EMBXg(a.Z, a.b, EMBl(function (a) {
        EMBah(this);
        var d = !EMBGa(EMBah(this), a, function (a, b) {
            return a.equals(b)
        });
        EMBbh(this, a);
        EMB$g(this);
        d && this.C("onlineScreenUpdate", a);
        b(a)
    }, a))
}
function EMB4g(a) {
    a.b = a.b || [];
    var b = EMBZe(a.i, "screens");
    a.b = 0 < b.length ? b : a.b;
    5 < a.b.length && EMB$g(a)
}
function EMB8g(a) {
    window.clearTimeout(a.Ua);
    a.Ua = NaN
}
EMB.rd = function () {
    EMBWe(this.g, EMB9g(this))
};
EMB.Cc = function () {
    var a = !!EMB9g(this) && !this.Ua;
    this.e.e.loungeIdToken = "";
    if (a) {
        this.C("connectionChange", EMBe);
        var a = this.a, b = {};
        b.screen = {name: a.b.name, screenId: a.b.P, loungeToken: a.b.loungeToken, expiration: a.b.za};
        b.videoIds = a.a;
        b.index = a.index;
        b.playerState = a.e;
        b.volume = a.volume;
        b.playerTime = a.i;
        b.playerTimeAt = a.g;
        EMBZg("remote-conn-context", b)
    }
};
EMB.pd = function () {
    this.Cc();
    EMB8g(this);
    this.C("connectionError")
};
function EMBdh(a, b) {
    var c = EMBe;
    if ("loungeStatus" == b.action)c = EMBpc(b.params.devices), c = !!EMBza(c, function (a) {
        return"LOUNGE_SCREEN" == a.type
    }); else if ("loungeScreenConnected" == b.action)c = EMBc; else if ("loungeScreenDisconnected" == b.action)c = EMBe; else return;
    c != (!!EMB9g(a) && !a.Ua) && (c ? (EMB8g(a), c = EMB9g(a), a.a = new EMBGg, a.a.b = c, EMBFg(a.e, "getNowPlaying"), a.C("connectionChange", EMBc)) : EMB7g(a))
}
EMB.qd = function (a) {
    EMBdh(this, a);
    if (EMB9g(this) && !this.Ua) {
        var b = EMBe, c = EMBe, d, e, f, g, h;
        a.params && (d = a.params.videoId || a.params.video_id, e = a.params.videoIds || a.params.video_ids, f = a.params.state, g = a.params.currentTime || a.params.current_time, h = a.params.volume);
        a.params && !e && ("videoIds"in a.params || "video_ids"in a.params) ? (EMBJg(this.a, []), b = EMBc) : (!d && ("nowPlaying" == a.action || "nowPlayingPlaylist" == a.action) ? (EMBIg(this.a, ""), b = EMBc) : d ? d != this.a.a[this.a.index] && (b = EMBc) : d = this.a.a[this.a.index], e && (e =
            e.split(","), EMBJg(this.a, e, d) && (b = EMBc)));
        a = this.a;
        (e = d) && !EMBs(a.a, e) ? (a.a.push(e), a = EMBc) : a = EMBe;
        a && EMBFg(this.e, "getPlaylist");
        d && EMBIg(this.a, d);
        b && this.C("playlistUpdate");
        f && (b = parseInt(f, 10), b = isNaN(b) ? -1 : b, c = c || b != this.a.e, this.a.e = b);
        g && (b = parseInt(g, 10), c = this.a, c.i = isNaN(b) ? 0 : b, c.g = EMBm(), c = EMBc);
        h && 2E3 < EMBm() && (b = parseInt(h, 10), isNaN(b) || (c = c || this.a.volume != b, this.a.volume = b));
        c && this.C("stateUpdate")
    }
};
function EMBeh() {
    this.D = new EMBOe("yt.desktop");
    EMB2g.call(this, new EMB_e(this.D));
    EMBI(window, "unload", EMBl(this.L, this));
    EMBI(window, "beforeunload", EMBl(this.L, this))
}
EMBo(EMBeh, EMB2g);
EMBca(EMBeh);
EMBeh.prototype.L = function () {
    EMBEg(this.e)
};
function EMBfh(a) {
    return EMBya(a, function (a) {
        return{loungeToken: a.loungeToken, name: a.name}
    })
};
function EMBgh(a, b, c, d) {
    a = {name: a, locale: c, feature: d};
    for (var e in b)a[e] = b[e];
    b = EMBVc(EMBYc(["/sharing_services"], a));
    EMBnd(b)
}
function EMBhh(a, b, c, d) {
    EMBgh(a, {v: b}, c, d)
}
function EMBih(a, b, c, d, e) {
    EMBgh(a, {list: b, v: c}, d, e)
};
function EMBjh(a, b, c, d, e, f) {
    var g, h;
    if (g = c.offsetParent) {
        var k = "HTML" == g.tagName || "BODY" == g.tagName;
        if (!k || "static" != EMBR(g, "position"))h = EMBMd(g), k || (k = (k = EMBNd(g)) && EMBz ? -g.scrollLeft : k && (!EMBy || !EMBB("8")) && "visible" != EMBR(g, "overflowX") ? g.scrollWidth - g.clientWidth - g.scrollLeft : g.scrollLeft, h = EMBNa(h, new EMBw(k, g.scrollTop)))
    }
    g = h || new EMBw;
    h = EMBSd(a);
    if (k = EMBLd(a)) {
        var m = new EMBHd(k.left, k.top, k.right - k.left, k.bottom - k.top), k = Math.max(h.left, m.left), l = Math.min(h.left + h.width, m.left + m.width);
        if (k <=
            l) {
            var p = Math.max(h.top, m.top), m = Math.min(h.top + h.height, m.top + m.height);
            p <= m && (h.left = k, h.top = p, h.width = l - k, h.height = m - p)
        }
    }
    k = EMBmb(a);
    p = EMBmb(c);
    if (k.a != p.a) {
        var l = k.a.body, p = p.a.parentWindow || p.a.defaultView, m = new EMBw(0, 0), n = EMBD(l) ? EMBD(l).parentWindow || EMBD(l).defaultView : window, u = l;
        do {
            var q;
            if (n == p)q = EMBMd(u); else {
                q = u;
                var t = new EMBw;
                if (1 == q.nodeType) {
                    if (q.getBoundingClientRect) {
                        var r = EMBJd(q);
                        t.x = r.left;
                        t.y = r.top
                    } else {
                        var r = EMBHb(EMBmb(q)), s = EMBMd(q);
                        t.x = s.x - r.x;
                        t.y = s.y - r.y
                    }
                    EMBz && !EMBB(12) &&
                    (r = EMBb, r = EMBb, EMBy ? r = "-ms-transform" : EMBA ? r = "-webkit-transform" : EMB6a ? r = "-o-transform" : EMBz && (r = "-moz-transform"), s = EMBb, r && (s = EMBR(q, r)), s || (s = EMBR(q, "transform")), s ? (q = s.match(EMBXd), r = !q ? new EMBw(0, 0) : new EMBw(parseFloat(q[1]), parseFloat(q[2]))) : r = new EMBw(0, 0), t = new EMBw(t.x + r.x, t.y + r.y))
                } else r = EMBfa(q.Zd), s = q, q.targetTouches ? s = q.targetTouches[0] : r && q.wb.targetTouches && (s = q.wb.targetTouches[0]), t.x = s.clientX, t.y = s.clientY;
                q = t
            }
            m.x += q.x;
            m.y += q.y
        } while (n && n != p && (u = n.frameElement) && (n = n.parent));
        l = EMBNa(m, EMBMd(l));
        EMBy && !EMBGb(k) && (l = EMBNa(l, EMBHb(k)));
        h.left += l.x;
        h.top += l.y
    }
    a = (b & 4 && EMBNd(a) ? b ^ 2 : b) & -5;
    b = new EMBw(a & 2 ? h.left + h.width : h.left, a & 1 ? h.top + h.height : h.top);
    b = EMBNa(b, g);
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    if (a = EMBLd(c))a.top -= g.y, a.right -= g.x, a.bottom -= g.y, a.left -= g.x;
    b = b.u();
    g = (d & 4 && EMBNd(c) ? d ^ 2 : d) & -5;
    e = EMBQd(c);
    d = e.u();
    if (f || 0 != g)g & 2 ? b.x -= d.width + (f ? f.right : 0) : f && (b.x += f.left), g & 1 ? b.y -= d.height + (f ? f.bottom : 0) : f && (b.y += f.top);
    if (a) {
        f = b;
        g = 65;
        h = 0;
        if (65 == (g & 65) && (f.x < a.left ||
            f.x >= a.right))g &= -2;
        if (132 == (g & 132) && (f.y < a.top || f.y >= a.bottom))g &= -5;
        f.x < a.left && g & 1 && (f.x = a.left, h |= 1);
        f.x < a.left && (f.x + d.width > a.right && g & 16) && (d.width = Math.max(d.width - (f.x + d.width - a.right), 0), h |= 4);
        f.x + d.width > a.right && g & 1 && (f.x = Math.max(a.right - d.width, a.left), h |= 1);
        g & 2 && (h |= (f.x < a.left ? 16 : 0) | (f.x + d.width > a.right ? 32 : 0));
        f.y < a.top && g & 4 && (f.y = a.top, h |= 2);
        f.y <= a.top && (f.y + d.height < a.bottom && g & 32) && (d.height = Math.max(d.height - (a.top - f.y), 0), f.y = 0, h |= 8);
        f.y >= a.top && (f.y + d.height > a.bottom && g & 32) &&
        (d.height = Math.max(d.height - (f.y + d.height - a.bottom), 0), h |= 8);
        f.y + d.height > a.bottom && g & 4 && (f.y = Math.max(a.bottom - d.height, a.top), h |= 2);
        g & 8 && (h |= (f.y < a.top ? 64 : 0) | (f.y + d.height > a.bottom ? 128 : 0));
        f = h
    } else f = 256;
    if (!(f & 496) && (a = EMBz && (EMB0a || EMB9a) && EMBB("1.9"), b instanceof EMBw ? (f = b.x, b = b.y) : (f = b, b = EMBb), c.style.left = EMBPd(f, a), c.style.top = EMBPd(b, a), !(e == d || (!e || !d ? 0 : e.width == d.width && e.height == d.height))))e = EMBGb(EMBmb(EMBD(c))), EMBy && (!e || !EMBB("8")) ? (f = c.style, e ? (EMBy ? (e = EMBUd(c, "paddingLeft"), a = EMBUd(c,
        "paddingRight"), b = EMBUd(c, "paddingTop"), g = EMBUd(c, "paddingBottom"), e = new EMBP(b, a, g, e)) : (e = EMBQ(c, "paddingLeft"), a = EMBQ(c, "paddingRight"), b = EMBQ(c, "paddingTop"), g = EMBQ(c, "paddingBottom"), e = new EMBP(parseFloat(b), parseFloat(a), parseFloat(g), parseFloat(e))), EMBy ? (a = EMBWd(c, "borderLeft"), b = EMBWd(c, "borderRight"), g = EMBWd(c, "borderTop"), c = EMBWd(c, "borderBottom"), c = new EMBP(g, b, c, a)) : (a = EMBQ(c, "borderLeftWidth"), b = EMBQ(c, "borderRightWidth"), g = EMBQ(c, "borderTopWidth"), c = EMBQ(c, "borderBottomWidth"), c = new EMBP(parseFloat(g),
        parseFloat(b), parseFloat(c), parseFloat(a))), f.pixelWidth = d.width - c.left - e.left - e.right - c.right, f.pixelHeight = d.height - c.top - e.top - e.bottom - c.bottom) : (f.pixelWidth = d.width, f.pixelHeight = d.height)) : (c = c.style, EMBz ? c.MozBoxSizing = "border-box" : EMBA ? c.WebkitBoxSizing = "border-box" : c.boxSizing = "border-box", c.width = Math.max(d.width, 0) + "px", c.height = Math.max(d.height, 0) + "px")
};
var EMBkh = {}, EMBlh = "ontouchstart"in document;
function EMBmh(a, b, c) {
    var d;
    switch (a) {
        case "mouseover":
        case "mouseout":
            d = 3;
            break;
        case "mouseenter":
        case "mouseleave":
            d = 9
    }
    return EMBFb(c, function (a) {
        return EMBv(a, b)
    }, d)
}
function EMB4(a) {
    var b = "mouseover" == a.type && "mouseenter"in EMBkh || "mouseout" == a.type && "mouseleave"in EMBkh, c = a.type in EMBkh || b;
    if ("HTML" != a.target.tagName && c) {
        if (b) {
            var b = "mouseover" == a.type ? "mouseenter" : "mouseleave", c = EMBkh[b], d;
            for (d in c.S) {
                var e = EMBmh(b, d, a.target);
                e && !EMBFb(a.relatedTarget, function (a) {
                    return a == e
                }) && c.C(d, e, b, a)
            }
        }
        if (b = EMBkh[a.type])for (d in b.S)(e = EMBmh(a.type, d, a.target)) && b.C(d, e, a.type, a)
    }
}
EMBI(document, "blur", EMB4, EMBc);
EMBI(document, "change", EMB4, EMBc);
EMBI(document, "click", EMB4);
EMBI(document, "focus", EMB4, EMBc);
EMBI(document, "mouseover", EMB4);
EMBI(document, "mouseout", EMB4);
EMBI(document, "mousedown", EMB4);
EMBI(document, "keydown", EMB4);
EMBI(document, "keyup", EMB4);
EMBI(document, "keypress", EMB4);
EMBI(document, "cut", EMB4);
EMBI(document, "paste", EMB4);
EMBlh && (EMBI(document, "touchstart", EMB4), EMBI(document, "touchend", EMB4), EMBI(document, "touchcancel", EMB4));
var EMBnh = window.yt && window.yt.uix && window.yt.uix.widgets_ || {};
EMBn("yt.uix.widgets_", EMBnh);
function EMBoh(a) {
    a = a.getInstance();
    var b = EMB5(a);
    b in EMBnh || (a.register(), EMBnh[b] = a)
};
function EMBph() {
    this.b = {}
}
function EMB6(a, b, c, d) {
    d = EMB5(a, d);
    var e = EMBl(c, a);
    b in EMBkh || (EMBkh[b] = new EMBO);
    EMBkh[b].W(d, e);
    a.b[c] = e
}
EMBph.prototype.a = function (a, b, c) {
    var d = EMBH(a, b);
    if (d && (d = EMBg(d))) {
        var e = EMBFa(arguments, 2);
        EMBEa(e, 0, 0, a);
        d.apply(EMBd, e)
    }
};
function EMB5(a, b) {
    return"yt-uix" + (a.Xb ? "-" + a.Xb : "") + (b ? "-" + b : "")
};
function EMBqh() {
    this.b = {}
}
EMBo(EMBqh, EMBph);
EMBca(EMBqh);
EMB = EMBqh.prototype;
EMB.Xb = "button";
EMB.register = function () {
    EMB6(this, "click", this.xe);
    EMB6(this, "keydown", this.we);
    EMB6(this, "keypress", this.ye)
};
EMB.xe = function (a) {
    if (a && !a.disabled) {
        EMBrh(this, a);
        if (EMBsh(this, a)) {
            var b = EMBsh(this, a), c = EMBG(b.activeButtonNode || b.parentNode, EMBd, EMB5(this));
            c && c != a ? (EMBth(this, c), EMBL(EMBl(this.Wc, this, a), 1)) : EMB6d(b) ? EMBth(this, a) : this.Wc(a);
            a.focus()
        }
        this.a(a, "button-action")
    }
};
EMB.we = function (a, b, c) {
    if (!c.altKey && (!c.ctrlKey && !c.shiftKey) && (b = EMBsh(this, a))) {
        var d = function (a) {
            var b = "";
            a.tagName && (b = a.tagName.toLowerCase());
            return"ul" == b || "table" == b
        };
        if (d = d(b) ? b : EMBAb(b, d)) {
            var d = d.tagName.toLowerCase(), e;
            "ul" == d ? e = this.Ae : "table" == d && (e = this.ze);
            e && EMBuh(this, a, b, c, EMBl(e, this))
        }
    }
};
function EMBuh(a, b, c, d, e) {
    var f = EMB6d(c), g = 9 == d.keyCode;
    if (g || 32 == d.keyCode || 13 == d.keyCode)if (d = EMBvh(a, c)) {
        if (d.firstElementChild != EMBb)b = d.firstElementChild; else for (b = d.firstChild; b && 1 != b.nodeType;)b = b.nextSibling;
        "a" == b.tagName.toLowerCase() ? window.location = b.href : EMBWb(b)
    } else g && EMBth(a, b); else f ? 27 == d.keyCode ? (EMBvh(a, c), EMBth(a, b)) : e(b, c, d) : (a = EMBv(b, EMB5(a, "reverse")) ? 38 : 40, d.keyCode == a && (EMBWb(b), d.preventDefault()))
}
EMB.ye = function (a, b, c) {
    !c.altKey && (!c.ctrlKey && !c.shiftKey) && (a = EMBsh(this, a), EMB6d(a) && c.preventDefault())
};
function EMBvh(a, b) {
    var c = EMB5(a, "menu-item-highlight"), d = EMBF(c, b);
    d && EMBu(d, c);
    return d
}
function EMBwh(a, b, c) {
    EMBt(c, EMB5(a, "menu-item-highlight"));
    b.setAttribute("aria-activedescendant", c.getAttribute("id"))
}
EMB.ze = function (a, b, c) {
    var d = EMBvh(this, b);
    b = EMBNb("table", b);
    var e = EMBNb("tr", b), e = EMBpb("td", EMBd, e).length;
    b = EMBpb("td", EMBd, b);
    d = EMBxh(d, b, e, c);
    -1 != d && (EMBwh(this, a, b[d]), c.preventDefault())
};
EMB.Ae = function (a, b, c) {
    if (40 == c.keyCode || 38 == c.keyCode) {
        var d = EMBvh(this, b);
        b = EMBpb("li", EMBd, b);
        d = EMBxh(d, b, 1, c);
        EMBwh(this, a, b[d]);
        c.preventDefault()
    }
};
function EMBxh(a, b, c, d) {
    var e = b.length;
    a = EMBwa(b, a);
    if (-1 == a)if (38 == d.keyCode)a = e - c; else {
        if (37 == d.keyCode || 38 == d.keyCode || 40 == d.keyCode)a = 0
    } else 39 == d.keyCode ? (a % c == c - 1 && (a -= c), a += 1) : 37 == d.keyCode ? (0 == a % c && (a += c), a -= 1) : 38 == d.keyCode ? (a < c && (a += e), a -= c) : 40 == d.keyCode && (a >= e - c && (a -= e), a += c);
    return a
}
function EMByh(a, b) {
    var c = b.iframeMask;
    c || (c = document.createElement("iframe"), c.src = 'javascript:""', c.className = EMB5(a, "menu-mask"), b.iframeMask = c);
    return c
}
function EMBzh(a) {
    if (EMBH(a, "button-menu-root-container")) {
        var b = EMBH(a, "button-menu-root-container");
        return EMBG(a, EMBd, b)
    }
    return document.body
}
EMB.Wc = function (a) {
    if (a) {
        var b = EMBsh(this, a);
        if (b) {
            a.setAttribute("aria-pressed", "true");
            a.setAttribute("aria-expanded", "true");
            b.originalParentNode = b.parentNode;
            b.activeButtonNode = a;
            b.parentNode.removeChild(b);
            var c;
            c = EMBH(a, "button-has-sibling-menu") ? a.parentNode : EMBzh(a);
            c.appendChild(b);
            b.style.minWidth = a.offsetWidth - 2 + "px";
            var d = EMByh(this, a);
            d && c.appendChild(d);
            c = EMBG(a, EMBd, EMB5(this, "group"));
            d = !!EMBH(a, "button-menu-ignore-group");
            c = c && !d ? c : a;
            var d = 5, e = 4, f = EMBSd(a);
            if (EMBv(a, EMB5(this, "reverse"))) {
                d =
                    4;
                e = 5;
                f = f.top + "px";
                try {
                    b.style.maxHeight = f
                } catch (g) {
                }
            }
            EMBv(a, "flip") && (EMBv(a, EMB5(this, "reverse")) ? (d = 6, e = 7) : (d = 7, e = 6));
            var h;
            EMBH(a, "button-has-sibling-menu") ? h = EMBKd(c) : EMBH(a, "button-menu-root-container") && (h = EMBzh(a));
            EMBy && !EMBB("8") && (h = EMBd);
            var k;
            h && (k = EMBSd(h), k = new EMBP(-k.top, k.left, k.top, -k.left));
            h = new EMBw(0, 1);
            EMBv(a, EMB5(this, "center-menu")) && (h.x -= Math.round((EMBQd(b).width - EMBQd(a).width) / 2));
            if (f = EMByh(this, a)) {
                var m = EMBQd(b);
                f.style.width = m.width + "px";
                f.style.height = m.height +
                    "px";
                EMBjh(c, d, f, e, h, k)
            }
            EMBjh(c, d, b, e, h, k);
            EMBU(b);
            this.a(a, "button-menu-action", EMBc);
            EMBt(a, EMB5(this, "active"));
            k = EMBl(this.de, this, a);
            b = EMBI(document, "click", k);
            k = EMBI(document, "contextmenu", k);
            a.dataset ? a.dataset[EMBIb("button-listener")] = b : a.setAttribute("data-button-listener", b);
            a.dataset ? a.dataset[EMBIb("button-context-menu-listener")] = k : a.setAttribute("data-button-context-menu-listener", k)
        }
    }
};
function EMBth(a, b) {
    if (b) {
        var c = EMBsh(a, b);
        if (c) {
            b.setAttribute("aria-pressed", "false");
            b.setAttribute("aria-expanded", "false");
            b.removeAttribute("aria-activedescendant");
            EMBV(c);
            a.a(b, "button-menu-action", EMBe);
            var d = EMByh(a, b);
            EMBL(function () {
                d && d.parentNode && d.parentNode.removeChild(d);
                c.originalParentNode && (c.parentNode.removeChild(c), c.originalParentNode.appendChild(c), c.originalParentNode = EMBd, c.activeButtonNode = EMBd)
            }, 1)
        }
        var e = EMBG(b, EMBd, EMB5(a, "group"));
        EMBu(b, EMB5(a, "active"));
        e && EMBu(e,
            EMB5(a, "group-active"));
        if (e = EMBH(b, "button-listener"))EMBVb(e), EMBJb(b, "button-listener");
        if (e = EMBH(b, "button-context-menu-listener"))EMBVb(e), EMBJb(b, "button-context-menu-listener")
    }
}
EMB.de = function (a, b) {
    var c;
    c = b || window.event;
    c = c.target || c.srcElement;
    3 == c.nodeType && (c = c.parentNode);
    var d = EMBG(c, EMBd, EMB5(this));
    if (d) {
        var d = EMBsh(this, d), e = EMBsh(this, a);
        if (d == e)return
    }
    if (!EMBG(c, EMBd, EMB5(this, "menu")) || EMBv(c, EMB5(this, "menu-item")) || EMBv(c, EMB5(this, "menu-close")))if (EMBth(this, a), (d = EMBG(c, EMBd, EMB5(this, "menu"))) && EMBH(a, "button-menu-indicate-selected")) {
        if (e = EMBF(EMB5(this, "content"), a)) {
            var f;
            EMBlb && "innerText"in c ? f = c.innerText.replace(/(\r\n|\r|\n)/g, "\n") : (f = [], EMBEb(c,
                f, EMBc), f = f.join(""));
            f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
            f = f.replace(/\u200B/g, "");
            EMBlb || (f = f.replace(/ +/g, " "));
            " " != f && (f = f.replace(/^\s*/, ""));
            if ("textContent"in e)e.textContent = f; else if (e.firstChild && 3 == e.firstChild.nodeType) {
                for (; e.lastChild != e.firstChild;)e.removeChild(e.lastChild);
                e.firstChild.data = f
            } else EMBxb(e), e.appendChild(EMBD(e).createTextNode(String(f)))
        }
        e = EMB5(this, "menu-item-selected");
        (d = EMBF(e, d)) && EMBu(d, e);
        EMBt(c.parentNode, e)
    }
};
function EMBsh(a, b) {
    if (!b.widgetMenu) {
        var c = EMBH(b, "button-menu-id"), c = c && EMBE(c), d = EMB5(a, "menu");
        c ? (EMBt(c, d), EMBt(c, EMB5(a, "menu-external"))) : c = EMBF(d, b);
        b.widgetMenu = c
    }
    return b.widgetMenu
}
function EMBrh(a, b) {
    if (EMBH(b, "button-toggle")) {
        var c = EMBG(b, EMBd, EMB5(a, "group"));
        if (c && EMBH(c, "button-toggle-group")) {
            var d = EMBH(c, "button-toggle-group"), c = EMBob(EMB5(a), c), e = EMB5(a, "toggled"), f = EMBv(b, e);
            EMBr(c, function (a) {
                a != b || "optional" == d && f ? EMBu(a, e) : EMBt(b, e)
            })
        } else EMBMa(b, EMB5(a, "toggled"))
    }
};
function EMB7() {
    this.b = {}
}
EMBo(EMB7, EMBph);
EMBca(EMB7);
EMB7.prototype.Xb = "expander";
EMB7.prototype.register = function () {
    EMB6(this, "click", this.e, "head");
    EMB6(this, "keypress", this.g, "head")
};
EMB7.prototype.e = function (a) {
    EMBAh(this, a)
};
EMB7.prototype.g = function (a, b, c) {
    c && 13 == c.keyCode && EMBAh(this, a)
};
function EMBAh(a, b) {
    var c = EMBG(b, EMBd, EMB5(a));
    c && (EMBMa(c, EMB5(a, "collapsed")), a.a(c, "expander-action"))
}
function EMBBh(a, b) {
    var c = EMBG(b, EMBd, EMB5(a));
    c && (EMBt(c, EMB5(a, "collapsed")), a.a(c, "expander-action"))
};
function EMBCh(a, b) {
    var c = b || {};
    c.target = c.target || a.target || "YouTube";
    c.width = c.width || 600;
    c.height = c.height || 600;
    var d = c;
    d || (d = {});
    var e = window, c = "undefined" != typeof a.href ? a.href : String(a), f = d.target || a.target, g = [], h;
    for (h in d)switch (h) {
        case "width":
        case "height":
        case "top":
        case "left":
            g.push(h + "=" + d[h]);
            break;
        case "target":
        case "noreferrer":
            break;
        default:
            g.push(h + "=" + (d[h] ? 1 : 0))
    }
    h = g.join(",");
    if (d.noreferrer) {
        if (d = e.open("", f, h))EMBy && -1 != c.indexOf(";") && (c = "'" + c.replace(/'/g, "%27") + "'"), d.opener =
            EMBd, c = EMBp(c), d.document.write('<META HTTP-EQUIV="refresh" content="0; url=' + c + '">'), d.document.close()
    } else d = e.open(c, f, h);
    c = d;
    if (!c)return EMBd;
    c.opener || (c.opener = window);
    c.focus();
    return c
}
function EMBDh(a, b) {
    return!EMBCh(a, b)
};
function EMBEh(a) {
    var b = EMBd;
    "transition"in a.style ? b = "transition-duration" : "webkitTransition"in a.style ? b = "-webkit-transition-duration" : "MozTransition"in a.style ? b = "-moz-transition-duration" : "OTransition"in a.style ? b = "-o-transition-duration" : "msTransition"in a.style && (b = "-ms-transition-duration");
    a = b ? (document.defaultView ? document.defaultView.getComputedStyle(a, EMBd) : document.parentWindow.getComputedStyle(a, EMBd)).getPropertyValue(b) : "0";
    return 1E3 * parseFloat(a)
};
function EMBFh(a) {
    var b = EMBK("CONVERSION_CONFIG_DICT");
    if (b) {
        var c = "followon_" + a;
        if (!b.baseUrl || !b.uid)a = EMBd; else {
            var d = b.rmktEnabled, e = b.focEnabled && !b.isAd;
            if (!d && !e)a = EMBd; else {
                c = {label: e ? c : "default"};
                if (d) {
                    d = {utuid: b.uid, type: a};
                    b.vid && (d.utvid = b.vid);
                    b.eventLabel && (d.el = b.eventLabel);
                    b.playerStyle && (d.ps = b.playerStyle);
                    b.feature && (d.feature = b.feature);
                    b.ppe && (d.ppe = b.ppe);
                    var f = [], g;
                    for (g in d)f.push(encodeURIComponent(g) + "=" + encodeURIComponent(d[g]));
                    c.data = f.join(";")
                }
                if (e && "view" == a && b.vid &&
                    b.uid && (b.oeid || b.ieid))b.oeid && (c.oeid = b.oeid), b.ieid && (c.ieid = b.ieid), c.evid = b.vid;
                e && (c.foc_id = b.uid);
                a = EMBVc(EMBYc([b.baseUrl], c))
            }
        }
        a && EMBnd(a)
    }
};
function EMBGh(a, b, c, d, e) {
    this.k = a;
    this.hc = EMBe;
    a = EMBTc() + "/share_ajax";
    c = {action_get_email: 1, video_id: c, list: d};
    e && (c.new_share = 1);
    EMBPg(a, {format: "JSON", Sb: c, oa: function (a, c) {
        this.k.innerHTML = c.email_html;
        this.xb();
        this.focus();
        var d = c.sharing_binary_url;
        d && EMBHh(this, d, c.contacts, b)
    }, Ba: this})
}
EMB = EMBGh.prototype;
EMB.xb = function () {
    this.ja = this.k.getElementsByTagName("form")[0];
    EMBI(this.ja, "submit", EMBl(this.yd, this));
    EMBF("share-email-send", this.ja);
    this.ec = EMBF("share-email-success", this.k);
    this.g = EMBF("share-email-remail", this.ec);
    EMBI(this.g, "click", EMBl(function () {
        EMBIh(this);
        this.focus()
    }, this));
    this.b = EMBF("share-email-recipients", this.k);
    this.a = EMBF("share-email-note", this.k);
    this.e = EMBF("share-email-preview-note", this.k);
    EMBI(this.a, "keyup", EMBl(this.xd, this))
};
function EMBHh(a, b, c, d) {
    EMBxe(b, EMBl(function () {
        var a = EMBg("yt.sharing.ContactTools");
        a && a.createContactTools(this.b, EMBd, c, d)
    }, a))
}
EMB.wa = function () {
    this.ja && (this.hc && EMBIh(this), this.focus())
};
EMB.focus = function () {
    this.b.focus()
};
function EMBIh(a) {
    a.hc = EMBe;
    a.b.value = "";
    a.a.value = "";
    a.e.innerHTML = "";
    EMBV(a.ec);
    EMBU(a.ja)
}
EMB.xd = function () {
    var a = this.a.value, a = a.substring(0, 300), a = EMBp(a), a = a.replace(/\n/g, "<br>");
    this.e.innerHTML = a
};
EMB.yd = function (a) {
    a.preventDefault();
    var b = EMBpb("button", EMBd, this.ja)[0];
    b.disabled = EMBc;
    var c = EMBF("share-email-captcha", this.k), d = EMBF("share-email-error", this.k), e = EMBF("yt-alert-content", d);
    a = EMBTc() + EMBUc(this.ja.action);
    EMBPg(a, {format: "JSON", method: "POST", ke: EMBKg(this.ja), oa: function () {
        this.hc = EMBc;
        EMBU(this.ec);
        EMBV(this.ja);
        EMBV(d);
        EMBV(c)
    }, onError: function (a, b) {
        b.captcha_html && (c.innerHTML = b.captcha_html, EMBU(c));
        b.errors && (e.innerHTML = b.errors.join("<br>"), EMBU(d))
    }, cd: function () {
        b.disabled =
            EMBe
    }, Ba: this})
};
var EMBJh = RegExp("^[^\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]*[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), EMBKh = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\ufb1d-\ufdff\ufe70-\ufefc]");
function EMBLh() {
    this.b = {}
}
EMBo(EMBLh, EMBph);
EMBca(EMBLh);
EMB = EMBLh.prototype;
EMB.Xb = "form-input";
EMB.register = function () {
    EMBy && !EMBB(9) && (EMB6(this, "click", this.Wb, "checkbox"), EMB6(this, "keypressed", this.Wb, "checkbox"), EMB6(this, "click", this.ed, "radio"), EMB6(this, "keypressed", this.ed, "radio"));
    EMB6(this, "change", this.Wb, "checkbox");
    EMB6(this, "blur", this.pe, "select-element");
    EMB6(this, "change", this.La, "select-element");
    EMB6(this, "keyup", this.La, "select-element");
    EMB6(this, "focus", this.qe, "select-element");
    EMB6(this, "keyup", this.vc, "text");
    EMB6(this, "keyup", this.vc, "textarea");
    EMB6(this, "keyup",
        this.vc, "bidi");
    EMB6(this, "click", this.re, "reset")
};
EMB.Wb = function (a) {
    var b = EMBG(a, EMBd, EMB5(this, "checkbox-container"));
    a.checked && EMBv(b, "partial") && (a.checked = EMBe, a.e = EMBe, EMBu(b, "partial"));
    EMBLa(b, "checked", a.checked)
};
EMB.Ee = function (a) {
    var b = EMBG(a, EMBd, EMB5(this, "radio-container"));
    b && EMBLa(b, "checked", a.checked)
};
EMB.ed = function () {
    EMBMh()
};
EMB.vc = function (a) {
    var b = a.value, c = "";
    EMBKh.test(b) ? c = "rtl" : EMBJh.test(b) && (c = "ltr");
    a.dir = c
};
EMB.qe = function (a) {
    var b = EMBG(a, EMBd, EMB5(this, "select"));
    EMBt(b, "focused");
    this.La(a)
};
EMB.pe = function (a) {
    var b = EMBG(a, EMBd, EMB5(this, "select"));
    EMBu(b, "focused");
    this.La(a)
};
EMB.La = function (a) {
    var b = EMBG(a, EMBd, EMB5(this, "select")), b = EMBF(EMB5(this, "select-value"), b), c = a.options[Math.max(a.selectedIndex, 0)];
    c && ("" != b.innerHTML && c.innerHTML != b.innerHTML && this.a(a, "onchange-callback"), b.innerHTML = c.innerHTML)
};
EMB.re = function () {
    var a = EMBLh.getInstance(), b = EMBob(EMB5(a, "checkbox"));
    EMBr(b, a.Wb, a);
    EMBMh();
    a = EMBLh.getInstance();
    b = EMBob(EMB5(a, "select-element"));
    EMBr(b, a.La, a)
};
function EMBMh() {
    var a = EMBLh.getInstance(), b = EMBob(EMB5(a, "radio"));
    EMBr(b, a.Ee, a)
};
function EMBNh(a, b, c, d) {
    this.k = a;
    this.rb = d || EMBe;
    a = EMBTc() + "/share_ajax";
    b = {action_get_embed: 1, video_id: b, list: c};
    this.rb && (b.new_share = 1);
    EMBPg(a, {format: "JSON", Sb: b, oa: function (a, b) {
        this.k.innerHTML = b.embed_html;
        this.Fd = b.legacy_url;
        this.Ed = b.legacy_code;
        this.Fa = b.iframe_url;
        this.Dd = b.iframe_code;
        this.tc = b.alternate_embed_urls;
        this.xb();
        var c = EMBS.getInstance();
        this.Ea && (this.Ea.checked = !EMB1d(0, EMB4d.ad));
        this.Nb.checked = EMB1d(0, EMB4d.$c);
        this.Da && (this.Da.checked = EMB1d(0, EMB4d.bd));
        a:if (c = c.get("ems"),
            this.rb) {
            "custom" == c && EMBU(EMBE("share-embed-customize"));
            for (var d = 0; d < this.va.length; d++) {
                var k = this.va[d];
                if (k.value == c) {
                    k.selected = EMBc;
                    EMBLh.getInstance().La(this.fa);
                    break a
                }
            }
            this.va[0].selected = EMBc;
            EMBLh.getInstance().La(this.fa)
        } else(c in this.X ? this.X[c] : EMBPa(this.X)).select();
        EMB8(this);
        this.wa()
    }, Ba: this})
}
EMB = EMBNh.prototype;
EMB.Va = 0;
EMB.ob = 0;
EMB.xb = function () {
    this.a = EMBF("share-embed-code", this.k);
    EMBI(this.a, "click", EMBl(this.Gd, this));
    this.rb ? (EMBOh(this), EMBI(EMBE("embed-with-playlist"), "click", EMBl(this.F, this)), EMBI(EMBE("embed-with-playlist-current"), "click", EMBl(this.j, this)), EMBI(EMBE("embed-with-playlist-first"), "click", EMBl(this.p, this))) : EMBPh(this);
    EMBQh(this)
};
function EMBPh(a) {
    var b = EMBF("share-embed-size-list", a.k), c = EMBob("share-embed-size-radio", b);
    a.X = {};
    EMBr(c, function (a) {
        EMBv(a, "share-embed-size-radio-custom") || (a = new EMBRh(a), this.X[a.name] = a)
    }, a);
    var c = EMBPa(a.X).width / EMBPa(a.X).height, d = EMBF("share-embed-size-radio-custom", b), c = new EMBSh(d, c);
    a.X[c.name] = c;
    a.q = c;
    EMBTb(b, EMBl(a.le, a), "share-embed-size");
    b = EMBF("share-embed-customize", b);
    EMBI(b, "keyup", EMBl(a.ne, a))
}
function EMBOh(a) {
    a.fa = EMBE("embed-layout-options");
    a.va = EMBpb("option", EMBd, a.fa);
    var b = parseInt(EMBH(a.va[0], "width"), 10), c = parseInt(EMBH(a.va[0], "height"), 10);
    a.e = b / c;
    EMBI(a.fa, "change", EMBl(function () {
        var a = this.fa.options[Math.max(this.fa.selectedIndex, 0)], a = !a ? EMBd : a.value || a.text;
        EMBS.getInstance();
        EMB0d("ems", a);
        EMB3d();
        EMB8(this);
        var b = EMBE("share-embed-customize");
        "custom" == a ? EMBU(b) : (EMBV(b), this.focus())
    }, a));
    b = EMBE("share-embed-customize");
    a.g = EMBF("share-embed-size-custom-width", b);
    a.b = EMBF("share-embed-size-custom-height", b);
    EMBI(a.g, "keyup", EMBl(a.ce, a));
    EMBI(a.b, "keyup", EMBl(a.be, a))
}
EMB.ce = function () {
    this.Va = parseInt(this.g.value, 10);
    this.ob = Math.round(this.Va / this.e) || 0;
    this.b.value = this.ob + "";
    EMB8(this)
};
EMB.be = function () {
    this.ob = parseInt(this.b.value, 10);
    this.Va = Math.round(this.ob * this.e) || 0;
    this.Va.value = this.Va + "";
    EMB8(this)
};
function EMBQh(a) {
    var b = {}, c = EMBob("share-embed-option", a.k);
    EMBr(c, function (a) {
        b[a.name] = a
    });
    a.Ea = b["show-related"];
    a.Ea && EMBI(a.Ea, "click", EMBl(a.he, a));
    a.Nb = b["delayed-cookies"];
    EMBI(a.Nb, "click", EMBl(a.ge, a));
    a.i = b["use-https"];
    EMBI(a.i, "click", EMBl(a.je, a));
    a.Da = b["use-flash-code"] || EMBd;
    a.Da && EMBI(a.Da, "click", EMBl(a.ie, a))
}
EMB.wa = function () {
    this.focus()
};
EMB.focus = function () {
    this.a && (this.a.focus(), this.a.select())
};
function EMB8(a) {
    var b = a.Dd, c = a.Fa;
    a.Da && a.Da.checked && (b = a.Ed, c = a.Fd);
    a.Nb.checked && (c = c.replace("youtube.com", "youtube-nocookie.com"));
    a.i.checked && (c = c.split("//"), c[0] = "https:", c = c.join("//"));
    var d = {};
    a.Ea && !a.Ea.checked && (d.rel = 0);
    c = EMBbe(c, d);
    if (a.rb) {
        var e = a.fa.options[Math.max(a.fa.selectedIndex, 0)];
        e ? "custom" == e.value ? d = {width: a.Va, height: a.ob} : (d = parseInt(EMBH(e, "width"), 10), e = parseInt(EMBH(e, "height"), 10), d = {width: d, height: e}) : d = {width: 0, height: 0}
    } else d = EMBTh(a);
    if (!d.width || 200 > d.width)a.rb ?
        (d = parseInt(EMBH(a.va[0], "width"), 10), e = parseInt(EMBH(a.va[0], "height"), 10), d = {width: d, height: e}) : d = EMBPa(a.X);
    b = b.replace(/__url__/g, EMBp(c));
    b = b.replace(/__width__/g, d.width + "");
    b = b.replace(/__height__/g, d.height + "");
    b = EMBp(b);
    b != a.a.innerHTML && (a.a.innerHTML = b)
}
function EMBTh(a) {
    a = EMBTa(a.X, function (a) {
        return a.a.checked
    });
    return!a ? {width: 0, height: 0} : {width: a.width, height: a.height}
}
EMB.he = function () {
    var a = this.Ea.checked;
    EMBS.getInstance();
    EMB2d(EMB4d.ad, !a);
    EMB3d();
    EMB8(this)
};
EMB.ge = function () {
    var a = this.Nb.checked;
    EMBS.getInstance();
    EMB2d(EMB4d.$c, a);
    EMB3d();
    EMB8(this)
};
EMB.je = function () {
    EMB8(this)
};
EMB.ie = function () {
    var a = this.Da.checked;
    EMBS.getInstance();
    EMB2d(EMB4d.bd, a);
    EMB3d();
    EMB8(this)
};
EMB.Gd = function () {
    this.focus()
};
EMB.le = function (a) {
    a = EMBF("share-embed-size-radio", a.currentTarget);
    a = this.X[a.value];
    a.select();
    EMBS.getInstance();
    EMB0d("ems", a.name);
    EMB3d();
    EMB8(this);
    a != this.q && this.focus()
};
EMB.ne = function () {
    EMB8(this)
};
function EMBRh(a) {
    this.name = a.value;
    this.a = a;
    this.width = parseInt(EMBH(this.a, "width"), 10);
    this.height = parseInt(EMBH(this.a, "height"), 10)
}
EMBRh.prototype.select = function () {
    this.a.checked = EMBc;
    var a = EMBG(this.a, "li"), b = EMBG(a, "ul"), b = EMBpb("li", "selected", b);
    EMBr(b, function (a) {
        EMBu(a, "selected")
    });
    EMBt(a, "selected")
};
function EMBSh(a, b) {
    EMBRh.call(this, a);
    this.g = b;
    var c = EMBG(a, "li");
    this.e = EMBF("share-embed-size-custom-width", c);
    this.b = EMBF("share-embed-size-custom-height", c);
    EMBI(this.e, "keyup", EMBl(this.q, this));
    EMBI(this.b, "keyup", EMBl(this.i, this))
}
EMBo(EMBSh, EMBRh);
EMBSh.prototype.q = function () {
    this.width = parseInt(this.e.value, 10);
    this.height = Math.round(this.width / this.g) || 0;
    this.b.value = this.height + ""
};
EMBSh.prototype.i = function () {
    this.height = parseInt(this.b.value, 10);
    this.width = Math.round(this.height * this.g) || 0;
    this.e.value = this.width + ""
};
EMBNh.prototype.F = function (a) {
    a.target.checked ? (a = EMBG(EMBE("embed-with-playlist-first"), "li"), a = EMBv(a, "yt-uix-button-menu-item-selected") ? "first" : "default") : a = "nolist";
    this.Fa = this.tc[a] || this.Fa;
    EMB8(this)
};
EMBNh.prototype.j = function () {
    this.Fa = this.tc["default"] || this.Fa;
    EMB8(this)
};
EMBNh.prototype.p = function () {
    this.Fa = this.tc.first || this.Fa;
    EMB8(this)
};
function EMBUh(a, b, c, d, e, f, g, h) {
    this.k = a;
    this.q = b || EMBd;
    this.F = c || EMBd;
    this.p = g || EMBe;
    this.Ab = h || EMBd;
    EMBVh(this, d)
}
var EMBWh = {FACEBOOK: "share_facebook", BLOGGER: "share_blogger", TWITTER: "share_twitter", GOOGLEPLUS: "share_gplus"};
function EMBXh(a) {
    var b = ["h", "m", "s"], c = EMBCa(b);
    c.reverse();
    var d = {};
    a = a.toLowerCase().match(/\d+\s*[hms]?/g) || [];
    a = EMBxa(a, function (a) {
        var b = (a.match(/[hms]/) || [""])[0];
        return b ? (d[b] = parseInt(a.match(/\d+/)[0], 10), EMBe) : EMBc
    });
    for (a.reverse(); a.length && c.length;) {
        var e = c.shift();
        e in d || (d[e] = parseInt(a.shift(), 10))
    }
    if (a.length || 59 < d.s || 59 < d.m || 9 < d.h)return EMBd;
    var f = "";
    EMBr(b, function (a) {
        d[a] && (f += d[a] + a)
    });
    return f || EMBd
}
function EMBVh(a, b) {
    var c = EMBTc() + "/share_ajax", d = {action_get_share_box: 1, video_id: a.q, list: a.F, feature: a.Ab};
    a.p && (d.new_share = 1);
    EMBPg(c, {format: "JSON", Sb: d, oa: function (a, c) {
        this.k.innerHTML = c.share_html;
        this.Uc = c.url_short;
        this.Tc = c.url_long;
        this.fe = c.lang;
        this.dc = EMBd;
        "session_index"in c && (this.dc = c.session_index);
        this.xb();
        b && b();
        this.wa()
    }, Ba: a})
}
EMB = EMBUh.prototype;
EMB.xb = function () {
    var a = EMBF("share-panel-show-url-options");
    EMBI(a, "click", EMBl(this.Qd, this));
    a = EMBF("share-panel-show-more");
    EMBI(a, "click", EMBl(this.Ld, this));
    a = EMBF("share-panel-services", this.k);
    EMBI(a, "click", EMBl(this.Md, this));
    a = EMBF("share-panel-embed", this.k);
    EMBI(a, "click", EMBl(this.Jd, this));
    a = EMBF("share-panel-email", this.k);
    EMBI(a, "click", EMBl(this.Id, this));
    (a = EMBF("share-panel-hangout", this.k)) && EMBI(a, "click", EMBl(this.Kd, this));
    this.e = EMBF("share-panel-url", this.k);
    EMBI(this.e,
        "click", EMBl(this.Rd, this));
    EMBI(this.e, "focus", EMBl(function () {
        EMBt(this.e, "focused")
    }, this));
    EMBI(this.e, "blur", EMBl(function () {
        EMBu(this.e, "focused")
    }, this));
    this.Oa = EMBF("share-panel-long-url", this.k);
    this.Pa = EMBF("share-panel-start-at-container", this.k);
    this.j = EMBF("share-panel-start-at", this.k);
    this.g = EMBF("share-panel-start-at-time", this.k);
    EMBI(this.g, "change", EMBl(this.Hd, this));
    EMBI(this.g, "click", EMBl(this.Pd, this));
    EMBI(this.g, "focus", EMBl(function () {
        EMBt(this.g, "focused")
    }, this));
    EMBI(this.g,
        "blur", EMBl(function () {
            EMBu(this.g, "focused")
        }, this));
    this.ta = EMBF("share-panel-hd", this.k);
    this.D = EMBF("share-panel-url-options", this.k);
    EMBI(this.D, "click", EMBl(this.Pb, this));
    this.L = EMBF("share-panel-services", this.k);
    this.Z = EMBF("share-panel-buttons", this.k);
    a = EMBF("share-panel-show-more", this.k);
    EMBI(a, "click", EMBl(this.Od, this));
    EMBTb(this.k, EMBl(this.Nd, this), "share-service-button");
    this.p && (EMBTb(this.k, EMBl(this.Sd, this), "share-service-expand-arrow"), this.i = EMBF("share-panel-services-container",
        this.k), EMBI(EMBE("share-with-playlist"), "click", EMBl(this.Vd, this)), EMBI(EMBE("share-with-playlist-current"), "click", EMBl(this.Td, this)), EMBI(EMBE("share-with-playlist-first"), "click", EMBl(this.Ud, this)))
};
EMB.Sd = function (a) {
    var b = EMBG(a.target, EMBd, "secondary");
    a = EMBF("overlay", b);
    var c = EMBv(b, "expanded"), d = "rtl" == document.body.getAttribute("dir") ? "right" : "left", e = c ? "0px" : EMBQd(b).width + "px";
    a.style[d] = e;
    a = c ? EMBEh(a) : 0;
    EMBL(function () {
        EMBMa(b, "expanded")
    }, a)
};
EMB.wa = function () {
    this.Pb();
    this.e && !EMBv(this.e, "focused") && (this.e.focus(), this.e.select())
};
EMB.Pb = function () {
    if (!EMBv(this.e, "focused")) {
        var a = this.Uc;
        this.Oa && this.Oa.checked && (a = this.Tc);
        var b = {};
        this.ta && this.ta.checked && (b.hd = 1);
        var c = !this.j.disabled && this.j.checked && EMBXh(this.g.value);
        c && (b.t = c);
        a = EMBVc(EMBYc([a], b));
        (b = EMBK("CONVERSION_CONFIG_DICT")) ? (b = EMB_g("aid-" + b.uid), b = !EMBga(b) ? EMBd : b) : b = EMBd;
        c = window.location.hash;
        !c || 5 > c.length ? c = EMBd : (c = EMB9d(c).aid, c = EMBk(c) ? c : EMBd);
        if (b = c ? c : b && b.aid ? b.aid : EMBd) {
            var d, b = {aid: b}, c = "", c = "!" == "#".charAt(1) ? "#".substr(0, 2) : "#", e = EMB9d("#");
            for (d in b)e[d] = b[d];
            d = c + EMB$d(e);
            a = a + d
        }
        this.e.value != a && (this.e.value = a)
    }
};
EMB.Hd = function () {
    this.j.checked = EMBc;
    this.Pb()
};
EMB.Pd = function () {
    this.j.checked = EMBc;
    this.g.value.match(/[1-9]/) || (this.g.value = "")
};
EMB.Rd = function () {
    this.e.select()
};
EMB.Id = function () {
    var a = EMB7.getInstance();
    EMBBh(a, this.Z);
    EMBBh(a, this.D);
    EMBBh(a, this.L);
    this.b && EMBV(this.b);
    this.i && EMBV(this.i);
    this.a || (this.a = EMBF("share-panel-email-container", this.k));
    EMB7d(this.a);
    !EMBH(this.a, "disabled") && EMB6d(this.a) && (this.qa ? this.qa.wa() : this.qa = new EMBGh(this.a, this.dc, this.q, this.F, this.p));
    EMBFh("share_mail")
};
EMB.Kd = function () {
    var a = EMBK("PLAYER_REFERENCE");
    a && a.pauseVideo && a.pauseVideo();
    var a = EMBVc(EMBYc(["https://talkgadget.google.com/hangouts"], {hl: this.fe, authuser: this.dc, gid: "youtube", gd: this.q, hs: 5})), b = window.screen.height, c = Math.min(0.9 * window.screen.width, 1E3), b = Math.min(0.9 * b, 800);
    EMBhh("HANGOUT", this.q + "");
    EMBCh(a, {width: c, height: b})
};
EMB.Jd = function () {
    var a = EMB7.getInstance();
    EMBBh(a, this.Z);
    EMBBh(a, this.D);
    EMBBh(a, this.L);
    this.a && EMBV(this.a);
    this.i && EMBV(this.i);
    this.b || (this.b = EMBF("share-panel-embed-container", this.k));
    EMB7d(this.b);
    !EMBH(this.b, "disabled") && EMB6d(this.b) && (this.ra ? this.ra.wa() : this.ra = new EMBNh(this.b, this.q, this.F, this.p));
    EMBFh("share_embed")
};
EMB.Nd = function (a) {
    a = EMBH(a.currentTarget, "service-name") || "";
    (a = EMBWh[a]) && EMBFh(a)
};
EMB.Qd = function () {
    EMBBh(EMB7.getInstance(), this.L);
    this.a && EMBV(this.a);
    this.b && EMBV(this.b)
};
EMB.Ld = function () {
    EMBBh(EMB7.getInstance(), this.D);
    this.a && EMBV(this.a);
    this.b && EMBV(this.b)
};
EMB.Od = function () {
    EMBYh(this)
};
EMB.Md = function () {
    EMBYh(this);
    this.i && EMBU(this.i)
};
function EMBYh(a) {
    a.a && EMBV(a.a);
    a.b && EMBV(a.b)
}
EMB.Vd = function (a) {
    EMBZh(this);
    var b = EMBe;
    a.target.checked && (b = EMBG(EMBE("share-with-playlist-first"), "li"), b = EMBv(b, "yt-uix-button-menu-item-selected"));
    EMB_h(this, a.target.checked, b)
};
function EMB0h(a) {
    EMBE("share-with-playlist").checked = EMBc;
    EMBZh(a)
}
function EMBZh(a) {
    var b = EMBE("share-with-playlist").checked;
    a.j.disabled = b;
    a.g.disabled = b;
    a.p && a.Pa && EMB5d(a.Pa, !b)
}
EMB.Td = function () {
    EMB0h(this);
    EMB_h(this, EMBc)
};
EMB.Ud = function () {
    EMB0h(this);
    EMB_h(this, EMBc, EMBc)
};
function EMB_h(a, b, c) {
    var d = {action_get_share_urls: 1, video_id: a.q};
    b && (d.list = a.F);
    c && (d.use_first_video = EMBc);
    EMBPg("share_ajax", {format: "JSON", Sb: d, oa: function (a, b) {
        this.Uc = b.url_short;
        this.Tc = b.url_long;
        this.Pb();
        EMBE("share-services-container").innerHTML = b.share_services_html
    }, Ba: a})
};
function EMB1h() {
}
EMB = EMB1h.prototype;
EMB.kd = EMBe;
EMB.zb = EMBd;
EMB.Vb = EMBd;
EMB.init = function () {
    if (!this.kd) {
        this.kd = EMBc;
        this.zb = EMBF("player-root");
        this.Vb = EMBF("player-actions-container", this.zb);
        var a = EMBF("player-actions-close", this.Vb);
        EMBI(a, "click", EMBl(this.ue, this));
        EMBoh(EMBqh);
        EMBoh(EMB7);
        EMBg("yt.tracking.shareVideo") || (EMBn("yt.tracking.shareVideo", EMBhh), EMBn("yt.tracking.shareList", EMBih));
        EMBg("yt.window.popup") || EMBn("yt.window.popup", EMBDh)
    }
};
EMB.ue = function () {
    EMBLa(this.zb, "actions-mode", EMBe)
};
EMB.se = function () {
    600 > this.zb.clientWidth && EMBt(this.Vb, "small-view")
};
EMB.wc = EMBd;
EMB.wd = function (a) {
    a = a || {};
    this.init();
    EMBLa(this.zb, "actions-mode", EMBc);
    if (this.wc)this.wc.wa(); else {
        var b = EMBF("player-actions-share", this.Vb);
        this.wc = new EMBUh(b, a.videoId, a.listId, EMBl(this.se, this), 0, 0, EMBe, a.feature)
    }
};
var EMB2h = {};
function EMB3h(a, b, c) {
    a = EMBE(a);
    if (!a)return EMBd;
    b = EMBNc(b);
    var d = "player" + EMBha(a), e = EMB2h[d];
    e && (EMBE(e.e) && EMBE(e.e).loadVideoByPlayerVars ? EMB4h(e, b) : (e.yc(), e = EMBd));
    e || (e = new EMB5h(a, d, b, c), EMB2h[d] = e, EMBL(function () {
        EMB6h(e);
        EMBCe("player-added", e.b)
    }, 0));
    return e.b
}
function EMB7h(a, b, c) {
    return EMB3h(a, b, {force: c})
}
function EMB8h(a) {
    if (a = EMBE(a)) {
        a = "player" + EMBha(a);
        var b = EMB2h[a];
        b && b.ub();
        EMB2h[a] = EMBd
    }
}
function EMB9h(a) {
    a = EMB2h[a];
    if (!a.ra) {
        a.ra = EMBc;
        for (var b = EMBE(a.e), c = b.getApiInterface(), d = 0; d < c.length; d++) {
            var e = c[d];
            "addEventListener" == e ? a.b.nativeAddEventListener = EMBl(b[e], b) : "destroy" == e ? a.b.a = EMBl(b[e], b) : a.b[e] = EMBl(b[e], b)
        }
        for (var f in a.j)a.b.nativeAddEventListener(f, a.j[f]);
        a.L && !a.Ab && a.Sa("SHARE_CLICKED", EMBl(a.L.wd, a.L));
        a.Sa("onTabOrderChange", EMBl(a.td, a));
        a.Sa("onNavigate", EMBl(a.vd, a));
        "flash" == a.i && (a.Sa("onRemoteScreenSelected", EMBl(a.ud, a)), a.Sa("onScreenUpdateRequested",
            EMBl(a.Fc, a)));
        a.ta && a.ta(a.b)
    }
    EMBCe("player-ready", a.b)
}
function EMB5h(a, b, c, d) {
    this.D = this.g = a;
    this.Oa = b;
    this.b = {addEventListener: EMBl(this.Sa, this), destroy: EMBl(this.yc, this)};
    this.Pa = new EMBO;
    EMByd(this, EMBma(EMBzd, this.Pa));
    this.j = {};
    this.Ab = EMBe;
    c.args.hasOwnProperty("fexp") && -1 != c.args.fexp.indexOf("913422") && (this.Ab = EMBc);
    this.L = EMBd;
    this.ra = this.qa = EMBe;
    this.ta = this.Z = this.e = this.p = this.a = EMBd;
    this.i = "flash";
    EMB$h(this, c, d);
    EMBt(this.g, "player-root");
    if (a = this.a.attrs.width)this.g.style.width = EMBPd(Number(a) || a, EMBc);
    if (a = this.a.attrs.height)this.g.style.height =
        EMBPd(Number(a) || a, EMBc);
    a = this.g;
    EMBk("overflow") ? EMBId(a, "hidden", "overflow") : EMBOa("overflow", EMBma(EMBId, a));
    if (!("embedded" != this.Z && "profilepage" != this.Z)) {
        this.L = new EMB1h;
        if (a = this.a.assets.css_actions)a = EMBsb("div", {"class": "player-actions-loaded"}), document.body.appendChild(a), b = "none" == EMBQ(a, "display"), a && a.parentNode && a.parentNode.removeChild(a), a = !b;
        a && (b = this.a.assets.css_actions, c = "css-" + EMBue(b), document.getElementById(c) || (a = document.createElement("link"), a.id = c, a.rel = "stylesheet",
            a.href = b, b = document, (b.getElementsByTagName("head")[0] || b.body).appendChild(a)));
        a = EMBsb("div", "player-container");
        EMBOd(a);
        this.a.params.bgcolor && (EMBk("background-color") ? EMBId(a, this.a.params.bgcolor, "background-color") : EMBOa("background-color", EMBma(EMBId, a)));
        b = EMBsb("div", "player-actions-container", EMBsb("div", "player-actions-share"), EMBsb("div", "player-actions-close", EMBsb("div", "player-actions-close-button")));
        EMBOd(b);
        EMBwb(this.g, a, b);
        this.D = a
    }
}
EMBo(EMB5h, EMBN);
function EMB$h(a, b, c) {
    a.a = b.u();
    a.e = a.a.attrs.id;
    a.g.id == a.e && (a.e = a.e + "-player", a.a.attrs.id = a.e);
    a.Z = a.a.args.el;
    a.p = c || EMBd;
    if (!(b = a.a.args.eurl))b = document.location.toString(), b = -1 != b.indexOf("/embed/") ? document.referrer && document.referrer.substring(0, 128) || "unknown" : b;
    a.a.args.eurl = b;
    a.a.args.enablejsapi = "1";
    a.a.args.playerapiid = a.Oa;
    if (!EMBye() || !EMBg("yt.player.Application") && !a.a.assets.js)a.a.args.html5_unavailable = "1", a.a.disable.html5 = EMBc;
    a.a.fallback = EMBl(a.Oc, a);
    a.ta || (a.ta = EMBai(a.a.args.jsapicallback ||
        "onYouTubePlayerReady"));
    a.a.args.jsapicallback = "ytPlayerOnYouTubePlayerReady"
}
function EMB4h(a, b) {
    EMB$h(a, b);
    "0" != b.args.autoplay ? a.b.loadVideoByPlayerVars(a.a.args) : a.b.cueVideoByPlayerVars(a.a.args)
}
EMB = EMB5h.prototype;
EMB.Fc = function () {
    this.b.updateRemoteScreens && EMBch(EMBeh.getInstance(), EMBl(function (a) {
        this.b.updateRemoteScreens(EMBfh(a))
    }, this))
};
EMB.ud = function (a) {
    var b = EMBeh.getInstance();
    (a = EMB5g(b, a)) ? (EMB6g(b, a), "html5" != this.i && EMB6h(this, "html5")) : this.Fc()
};
EMB.Oc = function (a) {
    a = EMBNc(a || this.a);
    var b = EMBc;
    "flash" == this.i ? (a.disable.flash = EMBc, this.qa && (b = EMBe)) : "html5" == this.i && (a.disable.flash ? b = EMBe : (a.args.autoplay = 1, a.args.html5_unavailable = "1", a.disable.html5 = EMBc));
    b && (EMB$h(this, a), EMB6h(this))
};
function EMB6h(a, b) {
    if (!a.q) {
        if (!b) {
            var c = !!a.a.disable.html5, d = !!a.a.disable.flash;
            b = (a.a.html5 || d) && !c ? "html5" : d ? "unsupported" : "flash"
        }
        ("flash" == b ? a.Xd : "html5" == b ? a.Rc : a.Wd).call(a)
    }
}
EMB.Rc = function () {
    this.i = "html5";
    var a = this.a.u();
    this.qa = EMBc;
    var b = EMBg("yt.player.Application");
    b ? this.p ? (this.qc(), this.p = EMBd) : (this.qa = EMBe, EMBxb(this.D), this.ra = EMBe, new b(this.D, a)) : (a = EMBl(this.Rc, this), EMBve(this.a.assets.js, a))
};
EMB.Xd = function () {
    this.i = "flash";
    var a = this.a.u();
    a.attrs.width = a.attrs.width || "100%";
    a.attrs.height = a.attrs.height || "100%";
    this.p ? (EMBoe(a, !!this.p.force, EMBl(this.qc, this)), this.p = EMBd) : (this.ra = EMBe, EMBle(this.D, a))
};
EMB.qc = function () {
    var a = EMBE(this.e);
    try {
        a.getApiInterface()
    } catch (b) {
        EMBL(EMBl(this.qc, this), 50);
        return
    }
    a.hasFallbackHappened && a.hasFallbackHappened() ? this.Oc() : EMB9h(this.Oa)
};
EMB.Sa = function (a, b) {
    var c = EMBai(b);
    if (c) {
        if (!this.j[a]) {
            var d = EMBbi(this, a);
            this.b.nativeAddEventListener && this.b.nativeAddEventListener(a, d)
        }
        this.Pa.W(a, c)
    }
};
function EMBai(a) {
    var b = a;
    "string" == typeof a && (b = function () {
        var b = EMBg(a);
        b && b.apply(EMBf, arguments)
    });
    return!b ? EMBd : b
}
function EMBbi(a, b) {
    var c = "ytPlayer" + b + a.Oa;
    a.j[b] = c;
    EMBf[c] = function (c) {
        EMBL(function () {
            a.q || a.Pa.C(b, c)
        }, 0)
    };
    return c
}
EMB.td = function (a) {
    a = a ? EMBzb : EMByb;
    for (var b = a(document.activeElement); b && !(1 == b.nodeType && (b.focus(), b == document.activeElement));)b = a(b)
};
EMB.vd = function (a) {
    var b = EMBK("EVENT_ID");
    if (b) {
        var c = a.url;
        a = {ei: b, feature: a.feature};
        b = EMBSc(c);
        if (b == EMBSc(window.location.href) || !b && 0 == c.lastIndexOf("/", 0))if (c = EMBUc(c), b = c.indexOf("#"), c = 0 > b ? c : c.substr(0, b)) {
            for (var d = b = 0; d < c.length; ++d)b = 31 * b + c.charCodeAt(d), b %= 4294967296;
            c = "s_tempdata-" + b;
            a = a ? EMB$d(a) : "";
            EMBvd(c, a, 5)
        }
    }
};
EMB.Wd = function () {
    var a = EMBEc("PLAYER_FALLBACK_OVERRIDE");
    if (!a) {
        var a = EMBEc("PLAYER_FALLBACK", EMBb, 'The Adobe Flash Player or an HTML5 supported browser is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="/html5">Learn more about upgrading to an HTML5 browser</a>'), b = navigator.userAgent.match(/Version\/(\d).*Safari/);
        b && 5 <= parseInt(b[1], 10) && (a = EMBEc("QUICKTIME_FALLBACK", EMBb, 'The Adobe Flash Player or QuickTime is required for video playback. <br> <a href="http://get.adobe.com/flashplayer/">Get the latest Flash Player</a> <br> <a href="http://www.apple.com/quicktime/download/">Get the latest version of QuickTime</a>'))
    }
    this.g.innerHTML =
        '<div class="fallback-message">' + a + "</div>";
    if ("embedded" == this.Z) {
        a = this.g.getElementsByTagName("a");
        for (b = 0; b < a.length; b++)a[b].setAttribute("target", "_blank")
    }
};
EMB.yc = function () {
    EMBci(this.g)
};
EMB.G = function () {
    this.b.a && this.b.a();
    this.b = EMBd;
    this.a = this.a.fallback = EMBd;
    for (var a in this.j)delete EMBf[this.j[a]];
    this.qa = EMBe;
    EMBxb(this.D);
    EMB5h.Q.G.call(this)
};
var EMBdi = EMBg("yt.player.embed") || EMB3h;
EMBn("yt.player.embed", EMBdi);
var EMBei = EMBg("yt.player.update") || EMB7h;
EMBn("yt.player.update", EMBei);
var EMBci = EMBg("yt.player.destroy") || EMB8h;
EMBn("yt.player.destroy", EMBci);
EMBg("ytPlayerOnYouTubePlayerReady") || EMBn("ytPlayerOnYouTubePlayerReady", EMB9h);
function EMBfi(a, b) {
    var c = EMBgi();
    if (c) {
        var d = EMBwd(c, "").split(","), d = EMBxa(d, function (b) {
            return 0 != b.indexOf(a) && !!b.length
        });
        4 <= d.length && d.shift();
        d.push(a + ":" + b);
        EMBvd(c, d.join(","), 1814400)
    }
}
function EMBhi(a) {
    var b = EMBgi();
    if (b) {
        var c = EMBwd(b, "").split(","), c = EMBxa(c, function (b) {
            return 0 != b.indexOf(a)
        });
        0 == c.length ? EMBxd(b) : EMBvd(b, c.join(","), 1814400)
    }
}
function EMBii() {
    var a = EMBK("PLAYER_REFERENCE");
    if (a) {
        var b = EMBK("VIDEO_ID"), c = a.getDuration(), a = Math.floor(a.getCurrentTime());
        0 == c || 120 >= a || a + 120 >= c ? EMBhi(b) : EMBfi(b, Math.floor(a))
    }
}
function EMBji() {
    EMBgi() && EMBI(window, "beforeunload", EMBii);
    new EMBFd;
    EMBeh.getInstance().b.length && EMBch(EMBeh.getInstance(), EMBki)
}
function EMBki() {
}
function EMBgi() {
    return EMBK("RESUME_COOKIE_NAME")
};
function EMBli(a) {
    var b = EMBZc("/signin?context=popup", "next", document.location.protocol + "//" + document.domain + "/post_login");
    if (b = window.open(b, "loginPopup", "width=375,height=440,resizable=yes,scrollbars=yes", EMBc)) {
        var c = EMBAe(function (b) {
            EMBBe(EMBK("LOGGED_IN_PUBSUB_KEY", c));
            a(b)
        });
        EMBCc("LOGGED_IN_PUBSUB_KEY", c);
        b.moveTo((screen.width - 375) / 2, (screen.height - 440) / 2)
    }
}
EMBn("yt.pubsub.publish", EMBCe);
var EMBmi = {}, EMB9, EMBni, EMBIc = new EMBGc, EMBoi = EMBd;
EMBmi.Ya = EMBd;
var EMBpi = EMBe, EMBqi = {};
function EMBri(a, b) {
    var c = EMB9;
    EMBni && EMBni != EMBIc.origin ? c && c.destroy() : "addEventListener" == a && b ? (c = b[0], EMB$(c, EMBsi(c))) : c[a] && (c[a].apply(c, b || []), (0 == a.search("cue") || 0 == a.search("load")) && EMBti())
}
function EMBsi(a) {
    return function (b) {
        EMBHc({event: a, info: b})
    }
}
function EMBui() {
    var a = document.documentElement.clientHeight || document.body.clientHeight, a = Math.round(100 * (a - EMBE("watch-longform-ad").offsetHeight) / a) + "%";
    EMBE("player").style.height = a
}
function EMBvi() {
    EMBoi = new EMBFd;
    EMBmi.Ya = [];
    EMBIc.a = EMBwi;
    var a = EMBIc;
    a.b = EMBri;
    a.e = EMBd;
    EMB$("onStateChange", EMBxi);
    EMB$("onPlaybackQualityChange", EMByi);
    EMB$("onFullScreenToggleRequest", EMBzi);
    EMB$("onError", EMBAi);
    EMB$("onVideoProgress", EMBBi);
    EMB$("onVolumeChange", EMBCi);
    EMB$("onApiChange", EMBDi);
    EMB$("onPlaybackRateChange", EMBEi);
    EMB$("onNewLicenseSession", EMBFi)
}
function EMB$(a, b) {
    EMBqi[a] || (EMB9.addEventListener(a, b), EMBqi[a] = 1)
}
function EMBti() {
    var a = EMB9.getApiInterface();
    EMBAa(a, "getVideoData");
    for (var b = {event: "initialDelivery", apiInterface: a, info: {}}, c = 0, d = a.length; c < d; c++) {
        var e = a[c];
        if (0 == e.search("get") || 0 == e.search("is")) {
            var f;
            f = e;
            var g = 0;
            0 == f.search("get") ? g = 3 : 0 == f.search("is") && (g = 2);
            f = f.charAt(g).toLowerCase() + f.substr(g + 1);
            try {
                var h = EMB9[e]();
                b.info[f] = h
            } catch (k) {
            }
        }
    }
    b.info.videoData = EMBGi();
    EMBHc(b)
}
function EMBGi() {
    return{video_id: EMB9.getVideoData().video_id}
}
function EMBxi(a) {
    a = {event: "onStateChange", info: {playerState: a, currentTime: EMB9.getCurrentTime(), duration: EMB9.getDuration(), videoData: EMBGi(), videoStartBytes: EMB9.getVideoStartBytes(), videoBytesTotal: EMB9.getVideoBytesTotal(), videoLoadedFraction: EMB9.getVideoLoadedFraction(), playbackQuality: EMB9.getPlaybackQuality(), availableQualityLevels: EMB9.getAvailableQualityLevels(), videoUrl: EMB9.getVideoUrl(), playlist: EMB9.getPlaylist(), playlistIndex: EMB9.getPlaylistIndex()}};
    EMBHi(a)
}
function EMBCi(a) {
    var b = EMBoi;
    if (b.a) {
        var c = {};
        c.volume = isNaN(a.volume) ? EMBGd(b).volume : Math.min(Math.max(a.volume, 0), 100);
        c.nonNormalized = a.nonNormalized;
        c.muted = a.muted == EMBb ? EMBGd(b).muted : a.muted;
        try {
            b.a.Ka("yt-player-volume", c)
        } catch (d) {
        }
    }
    a = {event: "infoDelivery", info: {muted: EMB9.isMuted(), volume: EMB9.getVolume()}};
    EMBHi(a)
}
function EMByi(a) {
    EMBHi({event: "onPlaybackQualityChange", info: {playbackQuality: a}})
}
function EMBEi(a) {
    EMBHi({event: "onPlaybackRateChange", info: {playbackRate: a}})
}
function EMBFi(a) {
    EMBHi({event: "onNewLicenseSession", sessionInfo: a})
}
function EMBzi() {
    EMBHi({event: "onFullScreenToggleRequest"})
}
function EMBBi(a) {
    a = {event: "infoDelivery", info: {currentTime: a, videoBytesLoaded: EMB9.getVideoBytesLoaded(), videoLoadedFraction: EMB9.getVideoLoadedFraction()}};
    EMBHi(a)
}
function EMBDi() {
    for (var a = EMB9.getOptions(), b = {event: "onApiChange", info: {namespaces: a}}, c = 0, d = a.length; c < d; c++) {
        var e = a[c], f = EMB9.getOptions(e);
        b.info[e] = {options: f};
        for (var g = 0, h = f.length; g < h; g++) {
            var k = f[g], m = EMB9.getOption(e, k);
            b.info[e][k] = m
        }
    }
    EMBHi(b)
}
function EMBAi(a) {
    EMBHc({event: "onError", error: a})
}
function EMBwi() {
    EMBti();
    EMBHc({event: "onReady"});
    EMBpi = EMBc;
    EMBmi.Ya && (EMBr(EMBmi.Ya, EMBIi), delete EMBmi.Ya)
}
function EMBIi(a) {
    EMBHc(a)
}
function EMBHi(a) {
    EMBpi ? EMBHc(a) : EMBmi.Ya && EMBmi.Ya.push(a)
};
EMBn("yt.embed.openLoginDialog", function () {
    EMBli(function (a) {
        EMB9.b && EMB9.b(a)
    })
});
EMBn("yt.embed.writeEmbed", function () {
    var a = new EMBJc(EMBK("PLAYER_CONFIG"));
    a.args.jsapicallback = EMBji;
    var b;
    b = EMB9d(window.location.hash);
    if (b = b.t || b.at) {
        var c = window.location.hash.replace(/\bat=[^&]*&?/, "");
        window.location.hash = c && "#" != c ? c : "#!";
        c = b;
        b = 0;
        -1 != c.indexOf("h") && (c = c.split("h"), b = 3600 * c[0], c = c[1]);
        -1 != c.indexOf("m") && (c = c.split("m"), b = 60 * c[0] + b, c = c[1]);
        -1 != c.indexOf("s") ? (c = c.split("s"), b = 1 * c[0] + b) : b = 1 * c + b
    } else b = 0;
    b && (a.args.start = b, a.args.resume = 1);
    a.args.origin && RegExp("^https?://([a-z0-9-]{1,63}\\.)*(" +
        EMBkd.join("|").replace(/\./g, ".") + ")(:[0-9]+)?([/?#]|$)", "i").test(a.args.origin) && (EMBni = a.args.origin);
    !EMBni && window != window.top && (a.args.el = "embedded");
    EMBK("CUED_AUTOPLAY") && (a.args.autoplay = 1);
    a.args.jsapicallback = EMBvi;
    EMB9 = EMBdi("player", a)
});
EMBn("yt.setAjaxToken", function (a) {
    EMBDc(EMBzc, arguments)
});
EMBn("yt.setConfig", EMBCc);
EMBn("yt.setMsg", function (a) {
    EMBDc(EMBAc, arguments)
});
EMBI(window, "load", function () {
    EMBpd("tick").ol = EMBm();
    var a = EMBK("TIMING_ACTION"), b = !!EMBK("TIMING_WFF"), c = EMBpd("tick");
    a && c.start && (b && c.vr ? EMBod() : !b && (c.ol || c.aft) && EMBod())
});
EMBI(window, "resize", EMBui);
EMBI(EMBE("watch-longform-ad-placeholder"), "resize", EMBui);
