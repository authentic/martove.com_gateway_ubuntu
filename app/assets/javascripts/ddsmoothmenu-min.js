//** Smooth Navigational Menu- By Dynamic Drive DHTML code library: http://www.dynamicdrive.com
//** Script Download/ instructions page: http://www.dynamicdrive.com/dynamicindex1/ddlevelsmenu/
//removed arrow images showing empty image holder
//minified with: http://www.refresh-sf.com/yui/
var ddsmoothmenu = {arrowimages: {down: [], right: []}, transition: {overtime: 300, outtime: 300}, shadow: {enable: false, offsetx: 5, offsety: 5}, showhidedelay: {showdelay: 100, hidedelay: 200}, detectwebkit: navigator.userAgent.toLowerCase().indexOf("applewebkit") != -1, detectie6: document.all && !window.XMLHttpRequest, css3support: window.msPerformance || (!document.all && document.querySelector), ismobile: navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null, getajaxmenu: function (c, b) {
    var a = c("#" + b.contentsource[0]);
    a.html("Loading Menu...");
    c.ajax({url: b.contentsource[1], async: true, error: function (d) {
        a.html("Error fetching content. Server Response: " + d.responseText)
    }, success: function (d) {
        a.html(d);
        ddsmoothmenu.buildmenu(c, b)
    }})
}, buildmenu: function (d, j) {
    var f = ddsmoothmenu;
    var b = d("#" + j.mainmenuid + ">ul");
    b.parent().get(0).className = j.classname || "ddsmoothmenu";
    var g = b.find("ul").parent();
    g.hover(function (i) {
        d(this).children("a:eq(0)").addClass("selected")
    }, function (i) {
        d(this).children("a:eq(0)").removeClass("selected")
    });
    g.each(function (l) {
        var n = d(this).css({zIndex: 100 - l});
        var k = d(this).find("ul:eq(0)").css({display: "block"});
        k.data("timers", {});
        this._dimensions = {w: this.offsetWidth, h: this.offsetHeight, subulw: k.outerWidth(), subulh: k.outerHeight()};
        this.istopheader = n.parents("ul").length == 1 ? true : false;
        k.css({top: this.istopheader && j.orientation != "v" ? this._dimensions.h + "px" : 0});
        if (f.shadow.enable && !f.css3support) {
            this._shadowoffset = {x: (this.istopheader ? k.offset().left + f.shadow.offsetx : this._dimensions.w), y: (this.istopheader ? k.offset().top + f.shadow.offsety : n.position().top)};
            if (this.istopheader) {
                $parentshadow = d(document.body)
            } else {
                var m = n.parents("li:eq(0)");
                $parentshadow = m.get(0).$shadow
            }
            this.$shadow = d('<div class="ddshadow' + (this.istopheader ? " toplevelshadow" : "") + '"></div>').prependTo($parentshadow).css({left: this._shadowoffset.x + "px", top: this._shadowoffset.y + "px"})
        }
        n.hover(function (o) {
            var i = k;
            var p = n.get(0);
            clearTimeout(i.data("timers").hidetimer);
            i.data("timers").showtimer = setTimeout(function () {
                p._offsets = {left: n.offset().left, top: n.offset().top};
                var s = p.istopheader && j.orientation != "v" ? 0 : p._dimensions.w;
                s = (p._offsets.left + s + p._dimensions.subulw > d(window).width()) ? (p.istopheader && j.orientation != "v" ? -p._dimensions.subulw + p._dimensions.w : -p._dimensions.w) : s;
                if (i.queue().length <= 1) {
                    i.css({left: s + "px", width: p._dimensions.subulw + "px"}).animate({height: "show", opacity: "show"}, ddsmoothmenu.transition.overtime);
                    if (f.shadow.enable && !f.css3support) {
                        var r = p.istopheader ? i.offset().left + ddsmoothmenu.shadow.offsetx : s;
                        var q = p.istopheader ? i.offset().top + f.shadow.offsety : p._shadowoffset.y;
                        if (!p.istopheader && ddsmoothmenu.detectwebkit) {
                            p.$shadow.css({opacity: 1})
                        }
                        p.$shadow.css({overflow: "", width: p._dimensions.subulw + "px", left: r + "px", top: q + "px"}).animate({height: p._dimensions.subulh + "px"}, ddsmoothmenu.transition.overtime)
                    }
                }
            }, ddsmoothmenu.showhidedelay.showdelay)
        }, function (o) {
            var i = k;
            var p = n.get(0);
            clearTimeout(i.data("timers").showtimer);
            i.data("timers").hidetimer = setTimeout(function () {
                i.animate({height: "hide", opacity: "hide"}, ddsmoothmenu.transition.outtime);
                if (f.shadow.enable && !f.css3support) {
                    if (ddsmoothmenu.detectwebkit) {
                        p.$shadow.children("div:eq(0)").css({opacity: 0})
                    }
                    p.$shadow.css({overflow: "hidden"}).animate({height: 0}, ddsmoothmenu.transition.outtime)
                }
            }, ddsmoothmenu.showhidedelay.hidedelay)
        })
    });
    if (f.shadow.enable && f.css3support) {
        var a = d("#" + j.mainmenuid + " ul li ul");
        var e = parseInt(f.shadow.offsetx) + "px " + parseInt(f.shadow.offsety) + "px 5px #aaa";
        var h = ["boxShadow", "MozBoxShadow", "WebkitBoxShadow", "MsBoxShadow"];
        for (var c = 0; c < h.length; c++) {
            a.css(h[c], e)
        }
    }
    b.find("ul").css({display: "none", visibility: "visible"})
}, init: function (c) {
    if (typeof c.customtheme == "object" && c.customtheme.length == 2) {
        var b = "#" + c.mainmenuid;
        var a = (c.orientation == "v") ? b : b + ", " + b;
        document.write('<style type="text/css">\n' + a + " ul li a {background:" + c.customtheme[0] + ";}\n" + b + " ul li a:hover {background:" + c.customtheme[1] + ";}\n</style>")
    }
    this.shadow.enable = (document.all && !window.XMLHttpRequest) ? false : this.shadow.enable;
    jQuery(document).ready(function (d) {
        if (typeof c.contentsource == "object") {
            ddsmoothmenu.getajaxmenu(d, c)
        } else {
            ddsmoothmenu.buildmenu(d, c)
        }
    })
}};