(function(g) {
    function d(m, a) {
        var i = m.data("settings");
        if (typeof a === "undefined") {
            a = false
        }
        if (a) {
            f(m)
        }
        var n = b(m);
        m.animate(n.css, n.time, "linear", function() {
            m.css(i.direction, "0");
            d(m, true)
        })
    }

    function b(q) {
        var m = q.data("settings");
        var u = q.children().first();
        var p = Math.abs(-q.css(m.direction).replace("px", "").replace("auto", "0") - u.outerWidth(true));
        var m = q.data("settings");
        var a = p * 1000 / m.speed;
        var o = {};
        o[m.direction] = q.css(m.direction).replace("px", "").replace("auto", "0") - p;
        return {
            css: o,
            time: a
        }
    }

    function f(i) {
        var a = i.data("settings");
        i.css("transition-duration", "0s").css(a.direction, "0");
        var m = i.children().first();
        if (m.hasClass("webticker-init")) {
            m.remove()
        } else {
            i.children().last().after(m)
        }
    }

    function l(m, a) {
        if (typeof a === "undefined") {
            a = false
        }
        if (a) {
            f(m)
        }
        var o = b(m);
        var i = o.time / 1000;
        i += "s";
        m.css(o.css).css("transition-duration", i)
    }

    function c(e, o, m) {
        var a;
        g.get(e, function(i) {
            var n = g(i);
            n.find("item").each(function() {
                var p = g(this),
                    q = {
                        title: p.find("title").text(),
                        link: p.find("link").text()
                    };
                listItem = "<li><a href='" + q.link + "'>" + q.title + "</a></li>";
                a += listItem
            });
            m.webTicker("update", a, o)
        })
    }

    function j(e) {
        var u = e.data("settings");
        e.width("auto");
        var p = 0;
        e.children("li").each(function() {
            p += g(this).outerWidth(true)
        });
        if (p < e.parent().width() || e.children().length == 1) {
            if (u.duplicate) {
                itemWidth = Math.max.apply(Math, e.children().map(function() {
                    return g(this).width()
                }).get());
                while (p - itemWidth < e.parent().width() || e.children().length == 1) {
                    var a = e.children().clone();
                    e.append(a);
                    p = 0;
                    e.children("li").each(function() {
                        p += g(this).outerWidth(true)
                    });
                    itemWidth = Math.max.apply(Math, e.children().map(function() {
                        return g(this).width()
                    }).get())
                }
            } else {
                var m = e.parent().width() - p;
                m += e.find("li:first").width();
                var q = e.find("li:first").height();
                e.append('<li class="ticker-spacer" style="width:' + m + "px;				height:" + q + 'px;				"></li>')
            }
        }
        if (u.startEmpty) {
            var q = e.find("li:first").height();
            e.prepend('<li class="webticker-init" style="width:' + e.parent().width() + "px;			height:" + q + 'px;			"></li>')
        }
        p = 0;
        e.children("li").each(function() {
            p += g(this).outerWidth(true)
        });
        e.width(p + 200);
        widthCompare = 0;
        e.children("li").each(function() {
            widthCompare += g(this).outerWidth(true)
        });
        while (widthCompare >= e.width()) {
            e.width(e.width() + 200);
            widthCompare = 0;
            e.children("li").each(function() {
                widthCompare += g(this).outerWidth(true)
            })
        }
    }
    var k = function() {
        var i = document.createElement("p").style,
            a = ["ms", "O", "Moz", "Webkit"];
        if (i.transition == "") {
            return true
        }
        while (a.length) {
            if (a.pop() + "Transition" in i) {
                return true
            }
        }
        return false
    }();
    var h = {
        init: function(a) {
            a = jQuery.extend({
                speed: 50,
                direction: "left",
                moving: true,
                startEmpty: true,
                duplicate: false,
                rssurl: false,
                hoverpause: true,
                rssfrequency: 0,
                updatetype: "reset"
            }, a);
            return this.each(function() {
                jQuery(this).data("settings", a);
                var m = jQuery(this);
                m.addClass("newsticker");
                var e = m.wrap("<div class='mask'></div>");
                e.after("<span class='tickeroverlay-left'>&nbsp;				</span><span class='tickeroverlay-right'>&nbsp;				</span>");
                var n = m.parent().wrap("<div class='tickercontainer'></div>");
                j(m);
                if (a.rssurl) {
                    c(a.rssurl, a.type, m);
                    if (a.rssfrequency > 0) {
                        window.setInterval(function() {
                            c(a.rssurl, a.type, m)
                        }, a.rssfrequency * 1000 * 60)
                    }
                }
                if (k) {
                    m.css("transition-duration", "0s").css(a.direction, "0");
                    l(m, false);
                    m.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function(i) {
                        if (!m.is(i.target)) {
                            return false
                        }
                        l(g(this), true)
                    })
                } else {
                    d(g(this))
                }
                if (a.hoverpause) {
                    m.hover(function() {
                        if (k) {
                            var i = g(this).css(a.direction);
                            g(this).css("transition-duration", "0s").css(a.direction, i)
                        } else {
                            jQuery(this).stop()
                        }
                    }, function() {
                        if (jQuery(this).data("settings").moving) {
                            if (k) {
                                l(g(this), false)
                            } else {
                                d(m)
                            }
                        }
                    })
                }
            })
        },
        stop: function() {
            var a = g(this).data("settings");
            if (a.moving) {
                a.moving = false;
                return this.each(function() {
                    if (k) {
                        var e = g(this).css(a.direction);
                        g(this).css("transition-duration", "0s").css(a.direction, e)
                    } else {
                        g(this).stop()
                    }
                })
            }
        },
        cont: function() {
            var a = g(this).data("settings");
            if (!a.moving) {
                a.moving = true;
                return this.each(function() {
                    if (k) {
                        l(g(this), false)
                    } else {
                        d(g(this))
                    }
                })
            }
        },
        update: function(p, w, u, m) {
            w = w || "reset";
            if (typeof u === "undefined") {
                u = true
            }
            if (typeof m === "undefined") {
                m = false
            }
            if (typeof p === "string") {
                p = g(p)
            }
            var q = g(this);
            q.webTicker("stop");
            var v = g(this).data("settings");
            if (w == "reset") {
                q.html(p);
                q.css(v.direction, "0");
                j(q)
            } else {
                if (w == "swap") {
                    q.children("li").addClass("old");
                    for (var e = 0; e < p.length; e++) {
                        id = g(p[e]).data("update");
                        match = q.find('[data-update="' + id + '"]');
                        if (match.length < 1) {
                            if (u) {
                                if (q.find(".ticker-spacer:first-child").length == 0 && q.find(".ticker-spacer").length > 0) {
                                    q.children("li.ticker-spacer").before(p[e])
                                } else {
                                    q.append(p[e])
                                }
                            }
                        } else {
                            q.find('[data-update="' + id + '"]').replaceWith(p[e])
                        }
                    }
                    q.children("li.webticker-init, li.ticker-spacer").removeClass("old");
                    if (m) {
                        q.children("li").remove(".old")
                    }
                    stripWidth = 0;
                    q.children("li").each(function() {
                        stripWidth += g(this).outerWidth(true)
                    });
                    q.width(stripWidth + 200)
                }
            }
            q.webTicker("cont")
        }
    };
    g.fn.webTicker = function(a) {
        if (h[a]) {
            return h[a].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof a === "object" || !a) {
                return h.init.apply(this, arguments)
            } else {
                g.error("Method " + a + " does not exist on jQuery.webTicker")
            }
        }
    }
})(jQuery);
(function(a) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], a)
    } else {
        a(jQuery)
    }
})(function(f) {
    function d() {
        var i = b(this);
        var e = a.settings;
        if (!isNaN(i.datetime)) {
            if (e.cutoff == 0 || Math.abs(g(i.datetime)) < e.cutoff) {
                f(this).text(c(i.datetime))
            }
        }
        return this
    }

    function b(i) {
        i = f(i);
        if (!i.data("timeago")) {
            i.data("timeago", {
                datetime: a.datetime(i)
            });
            var e = f.trim(i.text());
            if (a.settings.localeTitle) {
                i.attr("title", i.data("timeago").datetime.toLocaleString())
            } else {
                if (e.length > 0 && !(a.isTime(i) && i.attr("title"))) {
                    i.attr("title", e)
                }
            }
        }
        return i.data("timeago")
    }

    function c(i) {
        return a.inWords(g(i))
    }

    function g(i) {
        return (new Date).getTime() - i.getTime()
    }
    f.timeago = function(e) {
        if (e instanceof Date) {
            return c(e)
        } else {
            if (typeof e === "string") {
                return c(f.timeago.parse(e))
            } else {
                if (typeof e === "number") {
                    return c(new Date(e))
                } else {
                    return c(f.timeago.datetime(e))
                }
            }
        }
    };
    var a = f.timeago;
    f.extend(f.timeago, {
        settings: {
            refreshMillis: 60000,
            allowPast: true,
            allowFuture: false,
            localeTitle: false,
            cutoff: 0,
            strings: {
                prefixAgo: null,
                prefixFromNow: null,
                suffixAgo: "trước",
                suffixFromNow: "từ giờ",
                inPast: "in a moment",
                seconds: "một vài giây",
                minute: "phút",
                minutes: "%d phút",
                hour: "giờ",
                hours: "%d giờ",
                day: "ngày",
                days: "%d ngày",
                month: "tháng",
                months: "%d tháng",
                year: "năm",
                years: "%d năm",
                wordSeparator: " ",
                numbers: []
            }
        },
        inWords: function(z) {
            function m(t, l) {
                var n = f.isFunction(t) ? t(l, z) : t;
                var u = k.numbers && k.numbers[l] || l;
                return n.replace(/%d/i, u)
            }
            if (!this.settings.allowPast && !this.settings.allowFuture) {
                throw "timeago allowPast and allowFuture settings can not both be set to false."
            }
            var k = this.settings.strings;
            var e = k.prefixAgo;
            var p = k.suffixAgo;
            if (this.settings.allowFuture) {
                if (z < 0) {
                    e = k.prefixFromNow;
                    p = k.suffixFromNow
                }
            }
            if (!this.settings.allowPast && z >= 0) {
                return this.settings.strings.inPast
            }
            var A = Math.abs(z) / 1000;
            var j = A / 60;
            var y = j / 60;
            var x = y / 24;
            var v = x / 365;
            var w = A < 45 && m(k.seconds, Math.round(A)) || A < 90 && m(k.minute, 1) || j < 45 && m(k.minutes, Math.round(j)) || j < 90 && m(k.hour, 1) || y < 24 && m(k.hours, Math.round(y)) || y < 42 && m(k.day, 1) || x < 30 && m(k.days, Math.round(x)) || x < 45 && m(k.month, 1) || x < 365 && m(k.months, Math.round(x / 30)) || v < 1.5 && m(k.year, 1) || m(k.years, Math.round(v));
            var q = k.wordSeparator || "";
            if (k.wordSeparator === undefined) {
                q = " "
            }
            return f.trim([e, w, p].join(q))
        },
        parse: function(e) {
            var i = f.trim(e);
            i = i.replace(/\.\d+/, "");
            i = i.replace(/-/, "/").replace(/-/, "/");
            i = i.replace(/T/, " ").replace(/Z/, " UTC");
            i = i.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2");
            i = i.replace(/([\+\-]\d\d)$/, " $100");
            return new Date(i)
        },
        datetime: function(i) {
            var e = a.isTime(i) ? f(i).attr("datetime") : f(i).attr("title");
            return a.parse(e)
        },
        isTime: function(e) {
            return f(e).get(0).tagName.toLowerCase() === "time"
        }
    });
    var h = {
        init: function() {
            var j = f.proxy(d, this);
            j();
            var e = a.settings;
            if (e.refreshMillis > 0) {
                this._timeagoInterval = setInterval(j, e.refreshMillis)
            }
        },
        update: function(j) {
            var e = a.parse(j);
            f(this).data("timeago", {
                datetime: e
            });
            if (a.settings.localeTitle) {
                f(this).attr("title", e.toLocaleString())
            }
            d.apply(this)
        },
        updateFromDOM: function() {
            f(this).data("timeago", {
                datetime: a.parse(a.isTime(this) ? f(this).attr("datetime") : f(this).attr("title"))
            });
            d.apply(this)
        },
        dispose: function() {
            if (this._timeagoInterval) {
                window.clearInterval(this._timeagoInterval);
                this._timeagoInterval = null
            }
        }
    };
    f.fn.timeago = function(k, i) {
        var j = k ? h[k] : h.init;
        if (!j) {
            throw new Error("Unknown function name '" + k + "' for timeago")
        }
        this.each(function() {
            j.call(this, i)
        });
        return this
    };
    document.createElement("abbr");
    document.createElement("time")
});
(function(a) {
    a.fn.hoverTimeout = function(i, h, c, b) {
        return this.each(function() {
            var e = null,
                d = a(this);
            d.hover(function() {
                clearTimeout(e);
                e = setTimeout(function() {
                    h.call(d)
                }, i)
            }, function() {
                clearTimeout(e);
                e = setTimeout(function() {
                    b.call(d)
                }, c)
            })
        })
    }
})(jQuery);
(function(a) {
    a.fn.replaceText = function(b, d, c) {
        return this.each(function() {
            var f = this.firstChild,
                g, h, e = [];
            if (f) {
                do {
                    if (f.nodeType === 3) {
                        g = f.nodeValue;
                        h = g.replace(b, d);
                        if (h !== g) {
                            if (!c && /</.test(h)) {
                                a(f).before(h);
                                e.push(f)
                            } else {
                                f.nodeValue = h
                            }
                        }
                    }
                } while (f = f.nextSibling)
            }
            e.length && a(e).remove()
        })
    }
})(jQuery);
(function($, window, undefined) {
    $.fn.tabslet = function(options) {
        var defaults = {
            mouseevent: "click",
            attribute: "href",
            animation: false,
            autorotate: false,
            pauseonhover: true,
            delay: 2000,
            active: 1,
            controls: {
                prev: ".prev",
                next: ".next"
            }
        };
        var options = $.extend(defaults, options);
        return this.each(function() {
            var $this = $(this);
            options.mouseevent = $this.data("mouseevent") || options.mouseevent;
            options.attribute = $this.data("attribute") || options.attribute;
            options.animation = $this.data("animation") || options.animation;
            options.autorotate = $this.data("autorotate") || options.autorotate;
            options.pauseonhover = $this.data("pauseonhover") || options.pauseonhover;
            options.delay = $this.data("delay") || options.delay;
            options.active = $this.data("active") || options.active;
            $this.find("> div").hide();
            $this.find("> div").eq(options.active - 1).show();
            $this.find("> ul li").eq(options.active - 1).addClass("active");
            var fn = eval(function() {
                $(this).trigger("_before");
                $this.find("> ul li").removeClass("active");
                $(this).addClass("active");
                $this.find("> div").hide();
                var currentTab = $(this).find("a").attr(options.attribute);
                if (options.animation) {
                    $this.find(currentTab).animate({
                        opacity: "show"
                    }, "slow", function() {
                        $(this).trigger("_after")
                    })
                } else {
                    $this.find(currentTab).show();
                    $(this).trigger("_after")
                }
                return false
            });
            var init = eval("$this.find('> ul li')." + options.mouseevent + "(fn)");
            init;
            var elements = $this.find("> ul li"),
                i = options.active - 1;

            function forward() {
                i = ++i % elements.length;
                options.mouseevent == "hover" ? elements.eq(i).trigger("mouseover") : elements.eq(i).click();
                var t = setTimeout(forward, options.delay);
                $this.mouseover(function() {
                    if (options.pauseonhover) {
                        clearTimeout(t)
                    }
                })
            }
            if (options.autorotate) {
                setTimeout(forward, 0);
                if (options.pauseonhover) {
                    $this.on("mouseleave", function() {
                        setTimeout(forward, 1000)
                    })
                }
            }

            function move(direction) {
                if (direction == "forward") {
                    i = ++i % elements.length
                }
                if (direction == "backward") {
                    i = --i % elements.length
                }
                elements.eq(i).click()
            }
            $this.find(options.controls.next).click(function() {
                move("forward")
            });
            $this.find(options.controls.prev).click(function() {
                move("backward")
            });
            $this.on("destroy", function() {
                $(this).removeData()
            })
        })
    };
    $(document).ready(function() {
        $('[data-toggle="tabslet"]').tabslet()
    })
})(jQuery);
(function(b) {
    b.fn.simpleTab = function(a) {
        a = jQuery.extend({
            active: 1,
            fx: null,
            showSpeed: 400,
            hideSpeed: 400,
            showEasing: null,
            hideEasing: null,
            show: function() {},
            hide: function() {},
            change: function() {}
        }, a);
        return this.each(function() {
            var f = b(this),
                h = f.children("[data-tab]"),
                g = a.active - 1;
            f.addClass("simpleTab").prepend('<ul class="tab-wrapper"></ul>');
            h.addClass("tab-content").each(function() {
                b(this).hide();
                f.find(".tab-wrapper").append('<li><a href="#">' + b(this).data("tab") + "</a></li>")
            }).eq(g).show();
            f.find(".tab-wrapper a").on("click", function() {
                var c = b(this).parent().index();
                b(this).closest(".tab-wrapper").find(".activeTab").removeClass("activeTab");
                b(this).addClass("activeTab");
                if (a.fx == "slide") {
                    if (h.eq(c).is(":hidden")) {
                        h.slideUp(a.hideSpeed, a.hideEasing, function() {
                            a.hide.call(f)
                        }).eq(c).slideDown(a.showSpeed, a.showEasing, function() {
                            a.show.call(f)
                        })
                    }
                } else {
                    if (a.fx == "fade") {
                        if (h.eq(c).is(":hidden")) {
                            h.hide().eq(c).fadeIn(a.showSpeed, a.showEasing, function() {
                                a.show.call(f)
                            })
                        }
                    } else {
                        if (a.fx == "fancyslide") {
                            if (h.eq(c).is(":hidden")) {
                                h.slideUp(a.hideSpeed, a.hideEasing, function() {
                                    a.hide.call(f)
                                }).eq(c).delay(a.hideSpeed).slideDown(a.showSpeed, a.showEasing, function() {
                                    a.show.call(f)
                                })
                            }
                        } else {
                            if (h.eq(c).is(":hidden")) {
                                h.hide().eq(c).show()
                            }
                        }
                    }
                }
                a.change.call(f);
                return false
            }).eq(g).addClass("activeTab")
        })
    }
})(jQuery);
(function() {
    var f = document.getElementsByTagName("pre"),
        b = f.length;
    for (var g = 0; g < b; g++) {
        f[g].innerHTML = '<span class="line-number"></span><span class="pre-place">' + f[g].innerHTML + '</span><span class="cl"></span>';
        var d = f[g].innerHTML.split(/\n/).length;
        for (var a = 0; a < d; a++) {
            var c = f[g].getElementsByTagName("span")[0];
            c.innerHTML += "<span>" + (a + 1) + "</span>"
        }
    }
})();
$(document).ready(function() {
    $("#contact").appendTo(".contact-form");
    $(".contact-form #contact").css("display", "block");
    $(".post-tabs").simpleTab({
        active: 1,
        fx: "fade",
        showSpeed: 400,
        hideSpeed: 400
    })
});
$(document).ready(function() {
    var b = "[post_ad]";
    var a = $(".item .ad-inside");
    $(".item .post *").replaceText(b, '<div class="ad-inside-to"/>');
    $(".ad-inside-to").append(a);
    var c = $(".post-body .ad-inside").width();
    $(".post-body .ad-inside-to").width(c)
});
$(document).ready(function() {
    $(".comments-tabs").simpleTab({
        active: 1,
        fx: "fade",
        showSpeed: 400,
        hideSpeed: 400
    });
    $(".tab-blogger").append($("#comments"));
    $(".comments-tabs.simpleTab .tab-wrapper").wrap("<div class='comments-tabs-header'/>");
    $(".comments-tabs-header").prepend("<h3>Bình luận</h3>")
});
$(document).ready(function() {
    if ($(".articleAuthor").length != 0 && $(".author-boxs .widget").length != 0) {
        var q = $("i.author-ID").text();
        if (q.indexOf(" ") >= 0) {
            var y = q.replace(/\s+/g, "")
        } else {
            var y = q
        }
        $(".articleAuthor").addClass(y);
        $(".author-boxs .widget").each(function() {
            var c = $(this);
            var a = c.find("h2").text();
            if (a.indexOf(" ") >= 0) {
                var f = a.replace(/\s+/g, "")
            } else {
                var f = a
            }
            c.addClass(f)
        });
        if ($(".author-boxs ." + y).length != 0) {
            $(".author-boxs .widget").not("." + y).remove();
            var g = $(".author-boxs .widget").find("span.caption").text();
            var b = $(".author-boxs .widget").find("img").attr("src");
            var k = $(".author-boxs .widget").find("a").attr("href");
            var z = k.match(/[^[\]]+(?=])/g);
            var d = z[0];
            var x = z[1];
            var w = z[2];
            var p = z[3];
            var j = z[4];
            var v = z[5];
            var m = z[6];
            $(".articleAuthor .authorContent p").text(g);
            $(".authorDetails h2 span").text(q);
            $(".authorLeft .authorAvatar img").attr("src", b);
            $(".authorDetails .AuthorPostsCount .itnm").text(d);
            $(".authorContent .authorSocial a.fa-twitter").attr("href", x);
            $(".authorContent .authorSocial a.fa-facebook").attr("href", w);
            $(".authorContent .authorSocial a.fa-google-plus").attr("href", p);
            $(".authorContent .authorSocial a.fa-youtube").attr("href", j);
            $(".authorContent .authorSocial a.fa-dribbble").attr("href", v);
            $(".authorContent .authorSocial a.fa-linkedin").attr("href", m);
            $(".author-boxs-hide").remove()
        } else {
            $(".author-boxs-hide").remove()
        }
    } else {
        $(".author-boxs-hide").remove()
    }
});
var static_page_text = $.trim($(".static_page .post-body").text());
if (static_page_text === "[sitemap]") {
    var postbody = $(".static_page .post-body");
    $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(d) {
            var b = [];
            for (var f = 0; f < d.feed.category.length; f++) {
                b.push(d.feed.category[f].term)
            }
            var b = b.join("/");
            postbody.html('<div class="siteLabel"></div>');
            $(".static_page .post-body .siteLabel").text(b);
            var c = $(".siteLabel").text().split("/");
            var a = "";
            for (get = 0; get < c.length; ++get) {
                a += "<span>" + c[get] + "</span>"
            }
            $(".siteLabel").html(a);
            $(".siteLabel span").each(function() {
                var h = $(this);
                var g = $(this).text();
                $.ajax({
                    url: "/feeds/posts/default/-/" + g + "?alt=json-in-script",
                    type: "get",
                    dataType: "jsonp",
                    success: function(k) {
                        var e = "";
                        var p = '<div class="mapp">';
                        for (var y = 0; y < k.feed.entry.length; y++) {
                            for (var j = 0; j < k.feed.entry[y].link.length; j++) {
                                if (k.feed.entry[y].link[j].rel == "alternate") {
                                    e = k.feed.entry[y].link[j].href;
                                    break
                                }
                            }
                            var x = k.feed.entry[y].title.$t;
                            var w = k.feed.entry[y].published.$t,
                                t = w.substring(0, 4),
                                m = w.substring(5, 7),
                                v = w.substring(8, 10),
                                q = '<span class="day">' + v.replace(/^0+/, "") + '</span><span class="month">' + text_month[parseInt(m, 10)] + ' </span><span class="year">' + t + "</span>";
                            p += '<div class="mpost"><div class="map-date">' + q + '</div><h3 class="rcp-title"><a href="' + e + '">' + x + "</a></h3></div>"
                        }
                        p += "</div>";
                        h.replaceWith('<div class="maplabel"><h2>' + g + '<span class="butoo"><i class="fa fa-plus-circle"></i></span></h2>' + p + "</div>");
                        $(document).on("click", ".maplabel h2", function() {
                            $(this).parent(".maplabel").addClass("active");
                            $(this).find(".butoo .fa").removeClass("fa-plus-circle").addClass("fa-minus-circle")
                        });
                        $(document).on("click", ".maplabel.active h2", function() {
                            $(this).parent(".maplabel").removeClass("active");
                            $(this).find(".butoo .fa").addClass("fa-plus-circle").removeClass("fa-minus-circle")
                        })
                    }
                })
            })
        }
    })
}
$(".intro .HTML .widget-content").each(function() {
    var a = $(this).text();
    $.ajax(a.match("random") ? {
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(f) {
            var c = f.feed.entry.length,
                d = 0,
                b = c - 3,
                g = Math.floor(Math.random() * (b - d + 1)) + d;
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + g + "&max-results=3",
                type: "get",
                dataType: "jsonp",
                success: function(F) {
                    for (var k = "", v = "<ul>", J = 0; J < F.feed.entry.length; J++) {
                        for (var y = 0; y < F.feed.entry[J].link.length; y++) {
                            if ("alternate" == F.feed.entry[J].link[y].rel) {
                                k = F.feed.entry[J].link[y].href;
                                break
                            }
                        }
                        var q = F.feed.entry[J].title.$t,
                            H = F.feed.entry[J].author[0].name.$t,
                            B = F.feed.entry[J].published.$t,
                            A = B.substring(0, 4),
                            x = B.substring(5, 7),
                            G = B.substring(8, 10),
                            j = text_month[parseInt(x, 10)] + " " + G + ", " + A,
                            C = F.feed.entry[J].category[0].term,
                            E = F.feed.entry[J].content.$t,
                            w = $("<div>").html(E);
                        if (E.indexOf("http://www.youtube.com/embed/") > -1 || E.indexOf("https://www.youtube.com/embed/") > -1) {
                            var z = F.feed.entry[J].media$thumbnail.url,
                                I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + z + ') no-repeat center center;						background-size: cover"/>'
                        } else {
                            if (E.indexOf("<img") > -1) {
                                var D = w.find("img:first").attr("src"),
                                    I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + D + ') no-repeat center center;						background-size: cover"/>'
                            } else {
                                var I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + no_image_url + ') no-repeat center center;						background-size: cover"/>'
                            }
                        }
                        v += '<li><a href="/search/label/' + C + '" class="post-tag">' + C + "</a>" + I + '<div class="post-panel"><h3 class="rcp-title"><a href="' + k + '">' + q + '</a></h3><span class="recent-date">' + j + '</span><span class="recent-author">' + H + "</span></div></li>"
                    }
                    v += '<div class="clear"/></ul>', $(".intro .HTML .widget-content").each(function() {
                        $(this).text().match("random") && ($(this).html(v), $(this).removeClass("widget-content").addClass("layout-content"), $(".intro-loader").remove(), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(i, h) {
                                return h.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(i, h) {
                                return h.replace("s72-c", "s350")
                            })
                        }), $("p.trans").each(function() {
                            var i = $(this).text(),
                                h = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(i, h)
                        }))
                    })
                }
            })
        }
    } : a.match("recent") ? {
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function() {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=3",
                type: "get",
                dataType: "jsonp",
                success: function(F) {
                    for (var k = "", v = "<ul>", J = 0; J < F.feed.entry.length; J++) {
                        for (var y = 0; y < F.feed.entry[J].link.length; y++) {
                            if ("alternate" == F.feed.entry[J].link[y].rel) {
                                k = F.feed.entry[J].link[y].href;
                                break
                            }
                        }
                        var q = F.feed.entry[J].title.$t,
                            H = F.feed.entry[J].author[0].name.$t,
                            B = F.feed.entry[J].published.$t,
                            A = B.substring(0, 4),
                            x = B.substring(5, 7),
                            G = B.substring(8, 10),
                            j = text_month[parseInt(x, 10)] + " " + G + ", " + A,
                            C = F.feed.entry[J].category[0].term,
                            E = F.feed.entry[J].content.$t,
                            w = $("<div>").html(E);
                        if (E.indexOf("http://www.youtube.com/embed/") > -1 || E.indexOf("https://www.youtube.com/embed/") > -1) {
                            var z = F.feed.entry[J].media$thumbnail.url,
                                I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + z + ') no-repeat center center;						background-size: cover"/>'
                        } else {
                            if (E.indexOf("<img") > -1) {
                                var D = w.find("img:first").attr("src"),
                                    I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + D + ') no-repeat center center;						background-size: cover"/>'
                            } else {
                                var I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + no_image_url + ') no-repeat center center;						background-size: cover"/>'
                            }
                        }
                        v += '<li><a href="/search/label/' + C + '" class="post-tag">' + C + "</a>" + I + '<div class="post-panel"><h3 class="rcp-title"><a href="' + k + '">' + q + '</a></h3><span class="recent-date">' + j + '</span><span class="recent-author">' + H + "</span></div></li>"
                    }
                    v += '<div class="clear"/></ul>', $(".intro .HTML .widget-content").each(function() {
                        $(this).text().match("recent") && ($(this).html(v), $(this).removeClass("widget-content").addClass("layout-content"), $(".intro-loader").remove(), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(c, b) {
                                return b.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(c, b) {
                                return b.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var c = $(this).text(),
                                b = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(c, b)
                        }))
                    })
                }
            })
        }
    } : {
        url: "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=3",
        type: "get",
        dataType: "jsonp",
        success: function(F) {
            for (var k = "", v = "<ul>", J = 0; J < F.feed.entry.length; J++) {
                for (var y = 0; y < F.feed.entry[J].link.length; y++) {
                    if ("alternate" == F.feed.entry[J].link[y].rel) {
                        k = F.feed.entry[J].link[y].href;
                        break
                    }
                }
                var q = F.feed.entry[J].title.$t,
                    H = F.feed.entry[J].author[0].name.$t,
                    B = F.feed.entry[J].published.$t,
                    A = B.substring(0, 4),
                    x = B.substring(5, 7),
                    G = B.substring(8, 10),
                    j = text_month[parseInt(x, 10)] + " " + G + ", " + A,
                    C = F.feed.entry[J].category[0].term,
                    E = F.feed.entry[J].content.$t,
                    w = $("<div>").html(E);
                if (E.indexOf("http://www.youtube.com/embed/") > -1 || E.indexOf("https://www.youtube.com/embed/") > -1) {
                    var z = F.feed.entry[J].media$thumbnail.url,
                        I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + z + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (E.indexOf("<img") > -1) {
                        var D = w.find("img:first").attr("src"),
                            I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + D + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var I = '<a class="rcp-thumb" href="' + k + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                v += '<li><a href="/search/label/' + C + '" class="post-tag">' + C + "</a>" + I + '<div class="post-panel"><h3 class="rcp-title"><a href="' + k + '">' + q + '</a></h3><span class="recent-date">' + j + '</span><span class="recent-author">' + H + "</span></div></li>"
            }
            v += '<div class="clear"/></ul>', $(".intro .HTML .widget-content").each(function() {
                $(this).html(v), $(this).removeClass("widget-content").addClass("layout-content"), $(".intro-loader").remove(), $(this).find(".rcp-thumb").each(function() {
                    $(this).attr("style", function(c, b) {
                        return b.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(c, b) {
                        return b.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var c = $(this).text(),
                        b = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(c, b)
                })
            })
        }
    })
}), $(".HTML .widget-content").each(function() {
    var a = $(this).text();
    a.match("recentcomments") && $.ajax({
        url: "/feeds/comments/default?alt=json-in-script&max-results=" + recentcomments_number,
        type: "get",
        dataType: "jsonp",
        success: function(j) {
            for (var p = "", b = '<ul class="commentswidget">', m = 0; m < j.feed.entry.length && m != j.feed.entry.length; m++) {
                for (var f = 0; f < j.feed.entry[m].link.length; f++) {
                    if ("alternate" == j.feed.entry[m].link[f].rel) {
                        p = j.feed.entry[m].link[f].href;
                        break
                    }
                }
                if ("content" in j.feed.entry[m]) {
                    var q = j.feed.entry[m].content.$t
                } else {
                    if ("summary" in b_rc) {
                        var q = j.feed.entry[m].summary.$t
                    } else {
                        var q = ""
                    }
                }
                var k = /<\S[^>]*>/g;
                q = q.replace(k, ""), q.length > 90 && (q = "" + q.substring(0, 70) + "...");
                var h = (j.feed.entry[m].title.$t, j.feed.entry[m].author[0].name.$t),
                    g = j.feed.entry[m].author[0].gd$image.src;
                if (g.match("http://img1.blogblog.com/img/blank.gif")) {
                    var d = '<div class="avatarImage avatarRound"><img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/></div>'
                } else {
                    if (g.match("http://img2.blogblog.com/img/b16-rounded.gif")) {
                        var d = '<div class="avatarImage avatarRound"><img class="rc-img" src="http://img1.blogblog.com/img/anon36.png"/></div>'
                    } else {
                        var d = '<div class="avatarImage avatarRound"><img class="avatarRound" src="' + g + '"/></div>'
                    }
                }
                b += "<li>" + d + '<a href="' + p + '">' + h + '</a><span>"' + q + '"</span></li>'
            }
            b += '</ul><div class="clear"/>', $(".HTML .widget-content").each(function() {
                $(this).text().match("recentcomments") && ($(this).html(b), $("p.trans").each(function() {
                    var i = $(this).text(),
                        c = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(i, c)
                }))
            })
        }
    }), a.match("randomposts") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(f) {
            var c = f.feed.entry.length,
                d = 0,
                b = c - randomposts_number,
                g = Math.floor(Math.random() * (b - d + 1)) + d;
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + g + "&max-results=" + randomposts_number,
                type: "get",
                dataType: "jsonp",
                success: function(B) {
                    for (var H = "", j = '<ul class="post-widget">', F = 0; F < B.feed.entry.length; F++) {
                        for (var v = 0; v < B.feed.entry[F].link.length; v++) {
                            if ("alternate" == B.feed.entry[F].link[v].rel) {
                                H = B.feed.entry[F].link[v].href;
                                break
                            }
                        }
                        var I = B.feed.entry[F].title.$t,
                            D = B.feed.entry[F].author[0].name.$t,
                            y = B.feed.entry[F].published.$t,
                            x = y.substring(0, 4),
                            q = y.substring(5, 7),
                            C = y.substring(8, 10),
                            G = text_month[parseInt(q, 10)] + " " + C + ", " + x,
                            z = (B.feed.entry[F].category[0].term, B.feed.entry[F].content.$t),
                            A = $("<div>").html(z);
                        if (z.indexOf("http://www.youtube.com/embed/") > -1 || z.indexOf("https://www.youtube.com/embed/") > -1) {
                            var k = B.feed.entry[F].media$thumbnail.url,
                                w = '<a class="rcp-thumb" href="' + H + '" style="background:url(' + k + ') no-repeat center center;						background-size: cover"/>'
                        } else {
                            if (z.indexOf("<img") > -1) {
                                var E = A.find("img:first").attr("src"),
                                    w = '<a class="rcp-thumb" href="' + H + '" style="background:url(' + E + ') no-repeat center center;						background-size: cover"/>'
                            } else {
                                var w = '<a class="rcp-thumb" href="' + H + '" style="background:url(' + no_image_url + ') no-repeat center center;						background-size: cover"/>'
                            }
                        }
                        j += "<li>" + w + '<div class="post-panel"><h3 class="rcp-title"><a href="' + H + '">' + I + '</a></h3><span class="recent-date">' + G + '</span><span class="recent-author">' + D + "</span></div></li>"
                    }
                    j += '</ul><div class="clear"/>', $(".HTML .widget-content").each(function() {
                        $(this).text().match("randomposts") && ($(this).html(j), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(i, h) {
                                return h.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(i, h) {
                                return h.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var i = $(this).text(),
                                h = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(i, h)
                        }))
                    })
                }
            })
        }
    }), a.match("recentposts") && $.ajax({
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function() {
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&max-results=" + recentposts_number,
                type: "get",
                dataType: "jsonp",
                success: function(A) {
                    for (var G = "", g = '<ul class="post-widget">', E = 0; E < A.feed.entry.length; E++) {
                        for (var q = 0; q < A.feed.entry[E].link.length; q++) {
                            if ("alternate" == A.feed.entry[E].link[q].rel) {
                                G = A.feed.entry[E].link[q].href;
                                break
                            }
                        }
                        var H = A.feed.entry[E].title.$t,
                            C = A.feed.entry[E].author[0].name.$t,
                            x = A.feed.entry[E].published.$t,
                            w = x.substring(0, 4),
                            k = x.substring(5, 7),
                            B = x.substring(8, 10),
                            F = text_month[parseInt(k, 10)] + " " + B + ", " + w,
                            y = (A.feed.entry[E].category[0].term, A.feed.entry[E].content.$t),
                            z = $("<div>").html(y);
                        if (y.indexOf("http://www.youtube.com/embed/") > -1 || y.indexOf("https://www.youtube.com/embed/") > -1) {
                            var j = A.feed.entry[E].media$thumbnail.url,
                                v = '<a class="rcp-thumb" href="' + G + '" style="background:url(' + j + ') no-repeat center center;						background-size: cover"/>'
                        } else {
                            if (y.indexOf("<img") > -1) {
                                var D = z.find("img:first").attr("src"),
                                    v = '<a class="rcp-thumb" href="' + G + '" style="background:url(' + D + ') no-repeat center center;						background-size: cover"/>'
                            } else {
                                var v = '<a class="rcp-thumb" href="' + G + '" style="background:url(' + no_image_url + ') no-repeat center center;						background-size: cover"/>'
                            }
                        }
                        g += "<li>" + v + '<div class="post-panel"><h3 class="rcp-title"><a href="' + G + '">' + H + '</a></h3><span class="recent-date">' + F + '</span><span class="recent-author">' + C + "</span></div></li>"
                    }
                    g += '</ul><div class="clear"/>', $(".HTML .widget-content").each(function() {
                        $(this).text().match("recentposts") && ($(this).html(g), $(this).find(".rcp-thumb").each(function() {
                            $(this).attr("style", function(c, b) {
                                return b.replace("/default.jpg", "/mqdefault.jpg")
                            }).attr("style", function(c, b) {
                                return b.replace("s72-c", "s1600")
                            })
                        }), $("p.trans").each(function() {
                            var c = $(this).text(),
                                b = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(c, b)
                        }))
                    })
                }
            })
        }
    })
}), $(".recent-layout .HTML .widget-content").each(function() {
    var h = $(this).html(),
        d = $(this).prev("h2").text(),
        g = h.match(/[^[\]]+(?=])/g);
    $(this).html("<span>" + g[0] + "</span><span>" + g[1] + "</span><span>" + g[2] + "</span>");
    var b = $(this).text(),
        j = $(this).find("span").eq(0).text(),
        f = $(this).find("span").eq(1).text(),
        i = $(this).find("span").eq(2).text();
    f.match("fbig1") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + fbig1_number,
        type: "get",
        dataType: "jsonp",
        success: function(K) {
            for (var A = "", z = "<ul>", G = 0; G < K.feed.entry.length; G++) {
                for (var E = 0; E < K.feed.entry[G].link.length; E++) {
                    if ("alternate" == K.feed.entry[G].link[E].rel) {
                        A = K.feed.entry[G].link[E].href;
                        break
                    }
                }
                var C = K.feed.entry[G].title.$t,
                    L = K.feed.entry[G].author[0].name.$t,
                    t = K.feed.entry[G].published.$t,
                    H = t.substring(0, 4),
                    J = t.substring(5, 7),
                    B = t.substring(8, 10),
                    D = text_month[parseInt(J, 10)] + " " + B + ", " + H,
                    M = K.feed.entry[G].content.$t,
                    I = $("<div>").html(M);
                if (0 == G) {
                    var q = /<\S[^>]*>/g,
                        a = M.replace(q, "");
                    if (a.length > 100 && (a = "" + a.substring(0, 100) + "..."), M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="first-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;					background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="first-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;					background-size: cover"/>'
                        } else {
                            var c = '<a class="first-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;					background-size: cover"/>'
                        }
                    }
                } else {
                    if (M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;				background-size: cover"/>'
                        } else {
                            var c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                        }
                    }
                }
                z += 0 == G ? '<div class="first"><div class="rthumbc">' + c + '</div><div class="first-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span><p class="recent-des">' + a + '<p><div class="post-readmore"><a href="' + A + '">Chi tiết <i class="fa fa-long-arrow-right"></i></a></div></div></div>' : '<li><div class="rthumbc">' + c + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span></div><div class="clear"/></li>'
            }
            z += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(z), $(this).parent().addClass("fbig1"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).find(".post-readmore a").css("background", i), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("fbig2") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + fbig2_number,
        type: "get",
        dataType: "jsonp",
        success: function(K) {
            for (var A = "", z = "<ul>", G = 0; G < K.feed.entry.length; G++) {
                for (var E = 0; E < K.feed.entry[G].link.length; E++) {
                    if ("alternate" == K.feed.entry[G].link[E].rel) {
                        A = K.feed.entry[G].link[E].href;
                        break
                    }
                }
                var C = K.feed.entry[G].title.$t,
                    L = K.feed.entry[G].author[0].name.$t,
                    t = K.feed.entry[G].published.$t,
                    H = t.substring(0, 4),
                    J = t.substring(5, 7),
                    B = t.substring(8, 10),
                    D = text_month[parseInt(J, 10)] + " " + B + ", " + H,
                    M = K.feed.entry[G].content.$t,
                    I = $("<div>").html(M);
                if (0 == G) {
                    var q = /<\S[^>]*>/g,
                        a = M.replace(q, "");
                    if (a.length > 100 && (a = "" + a.substring(0, 100) + "..."), M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="first-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;					background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="first-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;					background-size: cover"/>'
                        } else {
                            var c = '<a class="first-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;					background-size: cover"/>'
                        }
                    }
                } else {
                    if (M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;				background-size: cover"/>'
                        } else {
                            var c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                        }
                    }
                }
                z += 0 == G ? '<div class="first"><div class="rthumbc">' + c + '</div><div class="first-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span><p class="recent-des">' + a + "<p></div></div>" : '<li><div class="rthumbc">' + c + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span></div><div class="clear"/></li>'
            }
            z += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(z), $(this).parent().addClass("fbig2"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("column1") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + column1_number,
        type: "get",
        dataType: "jsonp",
        success: function(K) {
            for (var A = "", z = "<ul>", G = 0; G < K.feed.entry.length; G++) {
                for (var E = 0; E < K.feed.entry[G].link.length; E++) {
                    if ("alternate" == K.feed.entry[G].link[E].rel) {
                        A = K.feed.entry[G].link[E].href;
                        break
                    }
                }
                var C = K.feed.entry[G].title.$t,
                    L = K.feed.entry[G].author[0].name.$t,
                    t = K.feed.entry[G].published.$t,
                    H = t.substring(0, 4),
                    J = t.substring(5, 7),
                    B = t.substring(8, 10),
                    D = text_month[parseInt(J, 10)] + " " + B + ", " + H,
                    M = K.feed.entry[G].content.$t,
                    I = $("<div>").html(M);
                if (0 == G) {
                    var q = /<\S[^>]*>/g,
                        a = M.replace(q, "");
                    if (a.length > 100 && (a = "" + a.substring(0, 100) + "..."), M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="first-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;					background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="first-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;					background-size: cover"/>'
                        } else {
                            var c = '<a class="first-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;					background-size: cover"/>'
                        }
                    }
                } else {
                    if (M.indexOf("http://www.youtube.com/embed/") > -1 || M.indexOf("https://www.youtube.com/embed/") > -1) {
                        var F = K.feed.entry[G].media$thumbnail.url,
                            c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + F + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        if (M.indexOf("<img") > -1) {
                            var n = I.find("img:first").attr("src"),
                                c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + n + ') no-repeat center center;				background-size: cover"/>'
                        } else {
                            var c = '<a class="recent-thumb" href="' + A + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                        }
                    }
                }
                z += 0 == G ? '<div class="first"><div class="rthumbc">' + c + '</div><div class="first-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span><p class="recent-des">' + a + "<p></div></div>" : '<li><div class="rthumbc">' + c + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + A + '">' + C + '</a></h3><span class="recent-date">' + D + '</span><span class="recent-author">' + L + '</span></div><div class="clear"/></li>'
            }
            z += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(z), $(this).parent().addClass("column"), $(this).parent().addClass("column1"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $(this).find(".first-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("column2") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + column2_number,
        type: "get",
        dataType: "jsonp",
        success: function(C) {
            for (var a = "", I = "<ul>", x = 0; x < C.feed.entry.length; x++) {
                for (var t = 0; t < C.feed.entry[x].link.length; t++) {
                    if ("alternate" == C.feed.entry[x].link[t].rel) {
                        a = C.feed.entry[x].link[t].href;
                        break
                    }
                }
                var n = C.feed.entry[x].title.$t,
                    D = C.feed.entry[x].author[0].name.$t,
                    H = C.feed.entry[x].published.$t,
                    z = H.substring(0, 4),
                    B = H.substring(5, 7),
                    c = H.substring(8, 10),
                    q = text_month[parseInt(B, 10)] + " " + c + ", " + z,
                    F = C.feed.entry[x].content.$t,
                    A = $("<div>").html(F);
                if (F.indexOf("http://www.youtube.com/embed/") > -1 || F.indexOf("https://www.youtube.com/embed/") > -1) {
                    var G = C.feed.entry[x].media$thumbnail.url,
                        E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + G + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (F.indexOf("<img") > -1) {
                        var w = A.find("img:first").attr("src"),
                            E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + w + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                I += '<li><div class="rthumbc">' + E + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + a + '">' + n + '</a></h3><span class="recent-date">' + q + '</span><span class="recent-author">' + D + '</span></div><div class="clear"/></li>'
            }
            I += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(I), $(this).parent().addClass("column"), $(this).parent().addClass("column2"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("list") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + list_number,
        type: "get",
        dataType: "jsonp",
        success: function(C) {
            for (var a = "", I = "<ul>", x = 0; x < C.feed.entry.length; x++) {
                for (var t = 0; t < C.feed.entry[x].link.length; t++) {
                    if ("alternate" == C.feed.entry[x].link[t].rel) {
                        a = C.feed.entry[x].link[t].href;
                        break
                    }
                }
                var n = C.feed.entry[x].title.$t,
                    D = C.feed.entry[x].author[0].name.$t,
                    H = C.feed.entry[x].published.$t,
                    z = H.substring(0, 4),
                    B = H.substring(5, 7),
                    c = H.substring(8, 10),
                    q = text_month[parseInt(B, 10)] + " " + c + ", " + z,
                    F = C.feed.entry[x].content.$t,
                    A = $("<div>").html(F);
                if (F.indexOf("http://www.youtube.com/embed/") > -1 || F.indexOf("https://www.youtube.com/embed/") > -1) {
                    var G = C.feed.entry[x].media$thumbnail.url,
                        E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + G + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (F.indexOf("<img") > -1) {
                        var w = A.find("img:first").attr("src"),
                            E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + w + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                I += '<li><div class="rthumbc">' + E + '</div><div class="recent-content"><h3 class="recent-title"><a href="' + a + '">' + n + '</a></h3><span class="recent-date">' + q + '</span><span class="recent-author">' + D + '</span></div><div class="clear"/></li>'
            }
            I += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(I), $(this).parent().addClass("list"), $(this).parent().addClass("fbig"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("gallery") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + gallery_number,
        type: "get",
        dataType: "jsonp",
        success: function(C) {
            for (var a = "", I = "<ul>", x = 0; x < C.feed.entry.length; x++) {
                for (var t = 0; t < C.feed.entry[x].link.length; t++) {
                    if ("alternate" == C.feed.entry[x].link[t].rel) {
                        a = C.feed.entry[x].link[t].href;
                        break
                    }
                }
                var n = C.feed.entry[x].title.$t,
                    D = C.feed.entry[x].author[0].name.$t,
                    H = C.feed.entry[x].published.$t,
                    z = H.substring(0, 4),
                    B = H.substring(5, 7),
                    c = H.substring(8, 10),
                    q = text_month[parseInt(B, 10)] + " " + c + ", " + z,
                    F = C.feed.entry[x].content.$t,
                    A = $("<div>").html(F);
                if (F.indexOf("http://www.youtube.com/embed/") > -1 || F.indexOf("https://www.youtube.com/embed/") > -1) {
                    var G = C.feed.entry[x].media$thumbnail.url,
                        E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + G + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (F.indexOf("<img") > -1) {
                        var w = A.find("img:first").attr("src"),
                            E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + w + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                I += "<li>" + E + '<div class="recent-content"><h3 class="recent-title"><a href="' + a + '">' + n + '</a></h3><span class="recent-date">' + q + '</span><span class="recent-author">' + D + '</span></div><div class="clear"/></li>'
            }
            I += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(I), $(this).parent().addClass("gallery"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("videos") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + videos_number,
        type: "get",
        dataType: "jsonp",
        success: function(C) {
            for (var a = "", I = "<ul>", x = 0; x < C.feed.entry.length; x++) {
                for (var t = 0; t < C.feed.entry[x].link.length; t++) {
                    if ("alternate" == C.feed.entry[x].link[t].rel) {
                        a = C.feed.entry[x].link[t].href;
                        break
                    }
                }
                var n = C.feed.entry[x].title.$t,
                    D = C.feed.entry[x].author[0].name.$t,
                    H = C.feed.entry[x].published.$t,
                    z = H.substring(0, 4),
                    B = H.substring(5, 7),
                    c = H.substring(8, 10),
                    q = text_month[parseInt(B, 10)] + " " + c + ", " + z,
                    F = C.feed.entry[x].content.$t,
                    A = $("<div>").html(F);
                if (F.indexOf("http://www.youtube.com/embed/") > -1 || F.indexOf("https://www.youtube.com/embed/") > -1) {
                    var G = C.feed.entry[x].media$thumbnail.url,
                        E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + G + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (F.indexOf("<img") > -1) {
                        var w = A.find("img:first").attr("src"),
                            E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + w + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                I += "<li>" + E + '<div class="recent-content"><h3 class="recent-title"><a href="' + a + '">' + n + '</a></h3><span class="recent-date">' + q + '</span><span class="recent-author">' + D + '</span></div><div class="clear"/></li>'
            }
            I += "</ul>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(I), $(this).parent().addClass("videos"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).prev(".box-title").append('<a class="more-link" href="/search/label/' + j + '">Xem hết</a>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    }), f.match("carousel") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + carousel_number,
        type: "get",
        dataType: "jsonp",
        success: function(C) {
            for (var a = "", I = '<div class="owl-carousel carousel-items">', x = 0; x < C.feed.entry.length; x++) {
                for (var t = 0; t < C.feed.entry[x].link.length; t++) {
                    if ("alternate" == C.feed.entry[x].link[t].rel) {
                        a = C.feed.entry[x].link[t].href;
                        break
                    }
                }
                var n = C.feed.entry[x].title.$t,
                    D = C.feed.entry[x].author[0].name.$t,
                    H = C.feed.entry[x].published.$t,
                    z = H.substring(0, 4),
                    B = H.substring(5, 7),
                    c = H.substring(8, 10),
                    q = text_month[parseInt(B, 10)] + " " + c + ", " + z,
                    F = C.feed.entry[x].content.$t,
                    A = $("<div>").html(F);
                if (F.indexOf("http://www.youtube.com/embed/") > -1 || F.indexOf("https://www.youtube.com/embed/") > -1) {
                    var G = C.feed.entry[x].media$thumbnail.url,
                        E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + G + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (F.indexOf("<img") > -1) {
                        var w = A.find("img:first").attr("src"),
                            E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + w + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var E = '<a class="recent-thumb" href="' + a + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                I += "<li>" + E + '<div class="recent-content"><h3 class="recent-title"><a href="' + a + '">' + n + '</a></h3><span class="recent-date">' + q + '</span><span class="recent-author">' + D + '</span></div><div class="clear"/></li>'
            }
            I += "</div>", $(".recent-layout .HTML .widget-content").each(function() {
                var l = $(this).text();
                if (l == b) {
                    $(this).html(I), $(this).parent().addClass("carousel"), $(this).parent().addClass("recent-block"), $(this).prev("h2").html('<a href="/search/label/' + j + '">' + d + "</a>"), $(this).prev("h2").css("background", i), $(this).prev("h2").wrap('<div class="box-title"></div>'), $(this).prev(".box-title").css("border-color", i), $(this).removeClass("widget-content").addClass("layout-content"), $(".carousel-items").owlCarousel({
                        items: 3,
                        navigation: !0,
                        navigationText: ["", ""],
                        itemsDesktop: [1000, 3],
                        itemsDesktopSmall: [647, 1],
                        itemsTablet: [396, 1],
                        itemsMobile: !1,
                        pagination: !1
                    });
                    var k = $(this).find(".owl-controls");
                    $(this).prev(".box-title").append(k), $(this).find(".recent-thumb").each(function() {
                        $(this).attr("style", function(o, m) {
                            return m.replace("/default.jpg", "/mqdefault.jpg")
                        }).attr("style", function(o, m) {
                            return m.replace("s72-c", "s1600")
                        })
                    }), $("p.trans").each(function() {
                        var o = $(this).text(),
                            m = $(this).attr("data-tran");
                        $("#pages-wrapper *").replaceText(o, m)
                    })
                }
            })
        }
    }), f.match("slider") && $.ajax({
        url: "/feeds/posts/default/-/" + j + "?alt=json-in-script&max-results=" + slider_number,
        type: "get",
        dataType: "jsonp",
        success: function(K) {
            for (var w = "", z = '<div class="slider-items owl-carousel">', C = 0; C < K.feed.entry.length; C++) {
                for (var x = 0; x < K.feed.entry[C].link.length; x++) {
                    if ("alternate" == K.feed.entry[C].link[x].rel) {
                        w = K.feed.entry[C].link[x].href;
                        break
                    }
                }
                var G = K.feed.entry[C].title.$t,
                    E = K.feed.entry[C].author[0].name.$t,
                    B = K.feed.entry[C].published.$t,
                    L = B.substring(0, 4),
                    q = B.substring(5, 7),
                    H = B.substring(8, 10),
                    J = text_month[parseInt(q, 10)] + " " + H + ", " + L,
                    A = K.feed.entry[C].content.$t,
                    D = $("<div>").html(A),
                    M = /<\S[^>]*>/g,
                    I = A.replace(M, "");
                if (I.length > 150 && (I = "" + I.substring(0, 150) + "..."), A.indexOf("http://www.youtube.com/embed/") > -1 || A.indexOf("https://www.youtube.com/embed/") > -1) {
                    var c = K.feed.entry[C].media$thumbnail.url,
                        a = '<a class="recent-thumb" href="' + w + '" style="background:url(' + c + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (A.indexOf("<img") > -1) {
                        var F = D.find("img:first").attr("src"),
                            a = '<a class="recent-thumb" href="' + w + '" style="background:url(' + F + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var a = '<a class="recent-thumb" href="' + w + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                z += "<li>" + a + '<div class="recent-content"><h3 class="recent-title"><a href="' + w + '">' + G + '</a></h3><span class="recent-date">' + J + '</span><span class="recent-author">' + E + '</span><p class="recent-des">' + I + '<p></div><div class="clear"/></li>'
            }
            z += "</div>", $(".recent-layout .HTML .widget-content").each(function() {
                var k = $(this).text();
                k == b && ($(this).html(z), $(this).parent().addClass("carousel"), $(this).parent().addClass("slider"), $(this).parent().addClass("recent-block"), $(this).prev("h2").remove(), $(this).prev("h2").css("background", i), $(this).removeClass("widget-content").addClass("layout-content"), $(".slider-items").owlCarousel({
                    items: 1,
                    navigation: !0,
                    navigationText: ["", ""],
                    itemsDesktop: [1000, 1],
                    itemsDesktopSmall: [647, 1],
                    itemsTablet: [396, 1],
                    autoPlay: !0,
                    autoPlay: slider_speed,
                    itemsMobile: !1,
                    pagination: !0
                }), $(this).find(".recent-thumb").each(function() {
                    $(this).attr("style", function(m, l) {
                        return l.replace("/default.jpg", "/mqdefault.jpg")
                    }).attr("style", function(m, l) {
                        return l.replace("s72-c", "s1600")
                    })
                }), $("p.trans").each(function() {
                    var m = $(this).text(),
                        l = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(m, l)
                }))
            })
        }
    })
}), $("#related-posts").each(function() {
    var a = $(this).html();
    $.ajax({
        url: "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=" + related_number,
        type: "get",
        dataType: "jsonp",
        success: function(k) {
            for (var u = "", b = '<div class="rnav owl-carousel">', q = 0; q < k.feed.entry.length; q++) {
                for (var g = 0; g < k.feed.entry[q].link.length; g++) {
                    if ("alternate" == k.feed.entry[q].link[g].rel) {
                        u = k.feed.entry[q].link[g].href;
                        break
                    }
                }
                var v = k.feed.entry[q].title.$t,
                    p = k.feed.entry[q].content.$t,
                    j = $("<div>").html(p);
                if (p.indexOf("http://www.youtube.com/embed/") > -1 || p.indexOf("https://www.youtube.com/embed/") > -1) {
                    var h = k.feed.entry[q].media$thumbnail.url,
                        f = '<a class="rnav-img" href="' + u + '" style="background:url(' + h + ') no-repeat center center;				background-size: cover"/>'
                } else {
                    if (p.indexOf("<img") > -1) {
                        var m = j.find("img:first").attr("src"),
                            f = '<a class="rnav-img" href="' + u + '" style="background:url(' + m + ') no-repeat center center;				background-size: cover"/>'
                    } else {
                        var f = '<a class="rnav-img" href="' + u + '" style="background:url(' + no_image_url + ') no-repeat center center;				background-size: cover"/>'
                    }
                }
                b += "<li>" + f + '<div class="rnav-conent"><h3 class="rnav-title"><a href="' + u + '">' + v + "</a></h3></div></li>"
            }
            b += '</div><div class="clear"/>', $("#related-posts").html(b), $(".rnav.owl-carousel").owlCarousel({
                items: 3,
                navigation: !0,
                navigationText: ["", ""],
                itemsDesktop: [1000, 3],
                itemsDesktopSmall: [647, 1],
                itemsTablet: [396, 1],
                itemsMobile: !1,
                pagination: !1
            }), $(".rnav-img").each(function() {
                $(this).attr("style", function(d, c) {
                    return c.replace("/default.jpg", "/mqdefault.jpg")
                }).attr("style", function(d, c) {
                    return c.replace("s72-c", "s1600")
                })
            }), $("p.trans").each(function() {
                var d = $(this).text(),
                    c = $(this).attr("data-tran");
                $("#pages-wrapper *").replaceText(d, c)
            })
        }
    })
});
$(document).ready(function() {
    $("#sidebar-wrapper .widget h2").wrap("<div class='widget-title'/>"), $("#footer-wrapper .widget h2").wrap("<div class='widget-title'/>"), $("ul#sub-menu").parent("li").addClass("hasSub"), $(".index .post-outer").each(function() {
        $(this).find(".post-thumb a").attr("style", function(a, i) {
            return i.replace("/default.jpg", "/mqdefault.jpg")
        }).attr("style", function(a, i) {
            return i.replace("s72-c", "s500")
        })
    }), $(".share-container").each(function() {
        var a = $(this);
        a.find(".post-sharebtn").click(function() {
            a.find(".post-share").fadeToggle("slow")
        }), $(document).bind("click", function(e) {
            0 === $(e.target).parents(".share-container").length && $(".post-share").fadeOut(300)
        })
    }), $(document).ready(function(a) {
        a("abbr.timeago").timeago()
    }), $("#header-search .search-icon").click(function() {
        var a = $("#header-search input");
        return a.is(":hidden") ? (a.fadeIn(300), $("#header-search").removeClass("close-search"), $("#header-search").addClass("open-search"), $(this).removeClass("icon-search"), $(this).addClass("icon-cancel")) : (a.fadeOut(300), $("#header-search").removeClass("open-search"), $("#header-search").addClass("close-search"), $(this).removeClass("icon-cancel"), $(this).addClass("icon-search")), !1
    }), $(document).bind("click", function(a) {
        0 === $(a.target).parents("#header-search").length && ($("#header-search input").fadeOut(300), $("#header-search .search-icn").removeClass("icon-cancel"), $("#header-search .search-icn").addClass("icon-search"), $("#menu").show())
    }), $(".menu li").each(function() {
        $(this).hoverTimeout(0, function() {
            $(this).children("ul").slideDown()
        }, 0, function() {
            $(this).children("ul").hide()
        })
    }), $(function() {
        $(".upbt").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) {
                    return $("html,body").animate({
                        scrollTop: a.offset().top
                    }, 1000), !1
                }
            }
        })
    }), $(".widget-content").each(function() {
        var a = $(this).text();
        a.substr(0, 10).match("fbbox") && (a = a.replace("fbbox/", ""), $(this).html('<iframe allowtransparency="true" frameborder="0" scrolling="no" src="//www.facebook.com/plugins/likebox.php?href=' + a + '&width=340px&height=258&colorscheme=light&show_faces=true&header=false&stream=false&show_border=false&locale=en_US&appId=492409184153294" style="border:none;		 overflow:hidden;		 width:100%;		 height:210px;		"></iframe>'))
    }), $("p.trans").each(function() {
        var a = $(this).text(),
            i = $(this).attr("data-tran");
        $("#pages-wrapper *").replaceText(a, i)
    });
    var d = "[",
        h = "]";
    $(".menu li *").replaceText(d, '<span class="msubtitle">'), $(".menu li *").replaceText(h, "</span>"), $(".menu #nav").show(), $(".social-counter").each(function() {
        var n = $(this),
            o = $(this).find(".social-item");
        0 === o.length && n.remove(), $(this).find(".widget").removeClass("LinkList"), $(".social-counter .social-item.facebook").find(".item-text").text("Thích"), $(".social-counter .social-item.rss,.social-counter .social-item.youtube").find(".item-text").text("Đăng ký");
        var l = "[",
            m = "]";
        $(".social-counter *").replaceText(l, '<span class="item-count">'), $(".social-counter *").replaceText(m, "</span>"), $(".social-item").each(function() {
            var a = $(this).find(".remove-count"),
                i = $(this).find(".item-count");
            $(a).before($(i)), $(a).remove()
        })
    }), $(".contact-button a").click(function() {
        var a = $(".contact-sec");
        return a.is(":hidden") && (a.fadeIn(300), a.addClass("contact-show"), $("#outer-wrapper").addClass("pop_contact ")), !1
    }), $(document).bind("click", function(a) {
        0 === $(a.target).parents(".contact-sec").length && ($(".contact-sec").fadeOut(300), $("#outer-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"))
    }), $(".contact-close").click(function() {
        return $(".contact-sec").fadeOut(300), $("#outer-wrapper").removeClass("pop_contact "), $(".contact-sec").removeClass("contact-show"), !1
    });
    var b = $("#sidetabs #tabside1 .widget h2").text();
    $(".menu-tab .item-1 a").text(b);
    var c = $("#sidetabs #tabside2 .widget h2").text();
    $(".menu-tab .item-2 a").text(c);
    var g = $("#sidetabs #tabside3 .widget h2").text();
    $(".menu-tab .item-3 a").text(g), $("#tabside1 .widget h2,#tabside2 .widget h2,#tabside3 .widget h2,#tabside1 .widget-title,#tabside2 .widget-title,#tabside3 .widget-title").remove(), $(".sidetabs").tabslet({
        mouseevent: "click",
        attribute: "href",
        animation: !0
    }), 0 === $(".sidetabs .widget").length && $(".sidetabs").remove(), 0 === $(".home .post-outer").length && ($(".home #main-wrapper #main").remove(), $(".posts-title").remove()), 0 === $("#footer .widget").length && ($("#footer").remove(), $("#footer-wrapper").css("padding-bottom", "0"), $(".bottom-nav").css("margin-bottom", "0"), $(".bottom-nav").css("border-bottom", "0")), 0 === $("#ticker .widget").length && $("#ticker").remove();
    var k = "[full_width]",
        j = "[left_sidebar]",
        f = "[right_sidebar]";
    $(".post *").replaceText(k, "<style>.item #main-wrapper		{		width:100% !important;		float:none!important;		border-right:0!important;		border-left:0!important	}	.item #sidebar-wrapper		{		display:none;	}	.item #main-wrapper #main		{		margin-left:0!important;		margin-right:0!important	}	</style>"), $(".post-body *").replaceText(j, "<style>@media screen and (min-width: 1000px)		{		.item #main-wrapper			{			float:right!important;			border-left:1px solid #EEE!important;			border-right:0!important		}		.item #sidebar-wrapper			{			float:left!important;			padding-left:0!important;			padding-right:2%!important;			border-right:1px solid #EEE!important;			border-left:0!important;			left:1px!important		}		.item #main-wrapper #main			{			margin-left:2.85%!important;			margin-right:0!important		}	}	</style>"), $(".post-body *").replaceText(f, "<style>@media screen and (min-width: 1000px)		{		.item #main-wrapper			{			float:left!important;			border-right:1px solid #EEE!important;			border-left:0!important		}		.item #sidebar-wrapper			{			float:right!important;			padding-right:0!important;			padding-left:2%!important;			border-left:1px solid #EEE!important;			left:-1px!important;			border-right:0!important		}		.item #main-wrapper #main			{			margin-right:2.85%!important;			margin-left:0!important		}	}	</style>"),
        function(l) {
            var m = l("a.newer-link"),
                i = l("a.older-link");
            l.get(m.attr("href"), function(e) {
                m.html('<strong>Next <i class="fa fa-angle-double-right"></i></strong> <span>' + l(e).find(".post h1.post-title").text() + "</span>")
            }, "html"), l.get(i.attr("href"), function(a) {
                i.html('<strong><i class="fa fa-angle-double-left"></i> Previous</strong> <span>' + l(a).find(".post h1.post-title").text() + "</span>")
            }, "html")
        }(jQuery)
}), $(window).bind("load", function() {
    $(".intro-loader").remove(), $("p.trans").each(function() {
        var a = $(this).text(),
            b = $(this).attr("data-tran");
        $("#pages-wrapper *").replaceText(a, b)
    })
});
"function" !== typeof Object.create && (Object.create = function(b) {
    function a() {}
    a.prototype = b;
    return new a
});
(function(d, c, b) {
    var a = {
        init: function(f, e) {
            this.$elem = d(e);
            this.options = d.extend({}, d.fn.owlCarousel.options, this.$elem.data(), f);
            this.userOptions = f;
            this.loadContent()
        },
        loadContent: function() {
            function g(i) {
                var k, j = "";
                if ("function" === typeof f.options.jsonSuccess) {
                    f.options.jsonSuccess.apply(this, [i])
                } else {
                    for (k in i.owl) {
                        i.owl.hasOwnProperty(k) && (j += i.owl[k].item)
                    }
                    f.$elem.html(j)
                }
                f.logIn()
            }
            var f = this,
                h;
            "function" === typeof f.options.beforeInit && f.options.beforeInit.apply(this, [f.$elem]);
            "string" === typeof f.options.jsonPath ? (h = f.options.jsonPath, d.getJSON(h, g)) : f.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) {
                return !1
            }
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay && (this.options.autoPlay = 5000);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem])
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this, [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var e = this;
            c.setTimeout(function() {
                e.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var e = this;
            if (!1 === e.$elem.is(":visible")) {
                e.$elem.css({
                    opacity: 0
                }), c.clearInterval(e.autoPlayInterval), c.clearInterval(e.checkVisible)
            } else {
                return !1
            }
            e.checkVisible = c.setInterval(function() {
                e.$elem.is(":visible") && (e.reload(), e.$elem.animate({
                    opacity: 1
                }, 200), c.clearInterval(e.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var f = this.$elem.hasClass(this.options.baseClass),
                e = this.$elem.hasClass(this.options.theme);
            f || this.$elem.addClass(this.options.baseClass);
            e || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var f, e;
            if (!1 === this.options.responsive) {
                return !1
            }
            if (!0 === this.options.singleItem) {
                return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1
            }
            f = d(this.options.responsiveBaseWidth).width();
            f > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom) {
                for (this.options.itemsCustom.sort(function(h, g) {
                        return h[0] - g[0]
                    }), e = 0; e < this.options.itemsCustom.length; e += 1) {
                    this.options.itemsCustom[e][0] <= f && (this.options.items = this.options.itemsCustom[e][1])
                }
            } else {
                f <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]), f <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), f <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), f <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), f <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1])
            }
            this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var g = this,
                f, h;
            if (!0 !== g.options.responsive) {
                return !1
            }
            h = d(c).width();
            g.resizer = function() {
                d(c).width() !== h && (!1 !== g.options.autoPlay && c.clearInterval(g.autoPlayInterval), c.clearTimeout(f), f = c.setTimeout(function() {
                    h = d(c).width();
                    g.updateVars()
                }, g.options.responsiveRefreshRate))
            };
            d(c).resize(g.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var g = this,
                f = 0,
                h = g.itemsAmount - g.options.items;
            g.$owlItems.each(function(i) {
                var e = d(this);
                e.css({
                    width: g.itemWidth
                }).data("owl-item", Number(i));
                if (0 === i % g.options.items || i === h) {
                    i > h || (f += 1)
                }
                e.data("owl-roundPages", f)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() / this.options.items)
        },
        max: function() {
            var e = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e);
            return e
        },
        min: function() {
            return 0
        },
        loops: function() {
            var g = 0,
                f = 0,
                h, i;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (h = 0; h < this.itemsAmount; h += 1) {
                f += this.itemWidth, this.positionsInArray.push(-f), !0 === this.options.scrollPerPage && (i = d(this.$owlItems[h]), i = i.data("owl-roundPages"), i !== g && (this.pagesInArray[g] = this.positionsInArray[h], g = i))
            }
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) {
                this.owlControls = d('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem)
            }!0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var f = this,
                e = d('<div class="owl-buttons"/>');
            f.owlControls.append(e);
            f.buttonPrev = d("<div/>", {
                "class": "owl-prev",
                html: f.options.navigationText[0] || ""
            });
            f.buttonNext = d("<div/>", {
                "class": "owl-next",
                html: f.options.navigationText[1] || ""
            });
            e.append(f.buttonPrev).append(f.buttonNext);
            e.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(g) {
                g.preventDefault()
            });
            e.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(g) {
                g.preventDefault();
                d(this).hasClass("owl-next") ? f.next() : f.prev()
            })
        },
        buildPagination: function() {
            var e = this;
            e.paginationWrapper = d('<div class="owl-pagination"/>');
            e.owlControls.append(e.paginationWrapper);
            e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(f) {
                f.preventDefault();
                Number(d(this).data("owl-page")) !== e.currentItem && e.goTo(Number(d(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var h, f, j, l, k, i;
            if (!1 === this.options.pagination) {
                return !1
            }
            this.paginationWrapper.html("");
            h = 0;
            f = this.itemsAmount - this.itemsAmount % this.options.items;
            for (l = 0; l < this.itemsAmount; l += 1) {
                0 === l % this.options.items && (h += 1, f === l && (j = this.itemsAmount - this.options.items), k = d("<div/>", {
                    "class": "owl-page"
                }), i = d("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? h : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), k.append(i), k.data("owl-page", f === l ? j : l), k.data("owl-roundPages", h), this.paginationWrapper.append(k))
            }
            this.checkPagination()
        },
        checkPagination: function() {
            var e = this;
            if (!1 === e.options.pagination) {
                return !1
            }
            e.paginationWrapper.find(".owl-page").each(function() {
                d(this).data("owl-roundPages") === d(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), d(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) {
                return !1
            }!1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(e) {
            if (this.isTransition) {
                return !1
            }
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
                if (!0 === this.options.rewindNav) {
                    this.currentItem = 0, e = "rewind"
                } else {
                    return this.currentItem = this.maximumItem, !1
                }
            }
            this.goTo(this.currentItem, e)
        },
        prev: function(e) {
            if (this.isTransition) {
                return !1
            }
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
            if (0 > this.currentItem) {
                if (!0 === this.options.rewindNav) {
                    this.currentItem = this.maximumItem, e = "rewind"
                } else {
                    return this.currentItem = 0, !1
                }
            }
            this.goTo(this.currentItem, e)
        },
        goTo: function(g, f, h) {
            var i = this;
            if (i.isTransition) {
                return !1
            }
            "function" === typeof i.options.beforeMove && i.options.beforeMove.apply(this, [i.$elem]);
            g >= i.maximumItem ? g = i.maximumItem : 0 >= g && (g = 0);
            i.currentItem = i.owl.currentItem = g;
            if (!1 !== i.options.transitionStyle && "drag" !== h && 1 === i.options.items && !0 === i.browser.support3d) {
                return i.swapSpeed(0), !0 === i.browser.support3d ? i.transition3d(i.positionsInArray[g]) : i.css2slide(i.positionsInArray[g], 1), i.afterGo(), i.singleItemTransition(), !1
            }
            g = i.positionsInArray[g];
            !0 === i.browser.support3d ? (i.isCss3Finish = !1, !0 === f ? (i.swapSpeed("paginationSpeed"), c.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.paginationSpeed)) : "rewind" === f ? (i.swapSpeed(i.options.rewindSpeed), c.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.rewindSpeed)) : (i.swapSpeed("slideSpeed"), c.setTimeout(function() {
                i.isCss3Finish = !0
            }, i.options.slideSpeed)), i.transition3d(g)) : !0 === f ? i.css2slide(g, i.options.paginationSpeed) : "rewind" === f ? i.css2slide(g, i.options.rewindSpeed) : i.css2slide(g, i.options.slideSpeed);
            i.afterGo()
        },
        jumpTo: function(e) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            e >= this.maximumItem || -1 === e ? e = this.maximumItem : 0 >= e && (e = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e]) : this.css2slide(this.positionsInArray[e], 1);
            this.currentItem = this.owl.currentItem = e;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            c.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var e = this;
            e.apStatus = "play";
            if (!1 === e.options.autoPlay) {
                return !1
            }
            c.clearInterval(e.autoPlayInterval);
            e.autoPlayInterval = c.setInterval(function() {
                e.next(!0)
            }, e.options.autoPlay)
        },
        swapSpeed: function(e) {
            "slideSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
        },
        addCssSpeed: function(e) {
            return {
                "-webkit-transition": "all " + e + "ms ease",
                "-moz-transition": "all " + e + "ms ease",
                "-o-transition": "all " + e + "ms ease",
                transition: "all " + e + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(e) {
            return {
                "-webkit-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + e + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + e + "px, 0px, 0px)",
                transform: "translate3d(" + e + "px, 0px,0px)"
            }
        },
        transition3d: function(e) {
            this.$owlWrapper.css(this.doTranslate(e))
        },
        css2move: function(e) {
            this.$owlWrapper.css({
                left: e
            })
        },
        css2slide: function(g, f) {
            var h = this;
            h.isCssFinish = !1;
            h.$owlWrapper.stop(!0, !0).animate({
                left: g
            }, {
                duration: f || h.options.slideSpeed,
                complete: function() {
                    h.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var e = b.createElement("div");
            e.style.cssText = " -moz-transform:translate3d(0px, 0px, 0px);			 -ms-transform:translate3d(0px, 0px, 0px);			 -o-transform:translate3d(0px, 0px, 0px);			 -webkit-transform:translate3d(0px, 0px, 0px);			 transform:translate3d(0px, 0px, 0px)";
            e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== e && 1 === e.length,
                isTouch: "ontouchstart" in c || c.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) {
                this.gestures(), this.disabledEvents()
            }
        },
        eventTypes: function() {
            var e = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = e[0];
            this.ev_types.move = e[1];
            this.ev_types.end = e[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(e) {
                e.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(e) {
                return d(e.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function g(e) {
                if (void 0 !== e.touches) {
                    return {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    }
                }
                if (void 0 === e.touches) {
                    if (void 0 !== e.pageX) {
                        return {
                            x: e.pageX,
                            y: e.pageY
                        }
                    }
                    if (void 0 === e.pageX) {
                        return {
                            x: e.clientX,
                            y: e.clientY
                        }
                    }
                }
            }

            function f(e) {
                "on" === e ? (d(b).on(k.ev_types.move, j), d(b).on(k.ev_types.end, l)) : "off" === e && (d(b).off(k.ev_types.move), d(b).off(k.ev_types.end))
            }

            function j(e) {
                e = e.originalEvent || e || c.event;
                k.newPosX = g(e).x - i.offsetX;
                k.newPosY = g(e).y - i.offsetY;
                k.newRelativeX = k.newPosX - i.relativePos;
                "function" === typeof k.options.startDragging && !0 !== i.dragging && 0 !== k.newRelativeX && (i.dragging = !0, k.options.startDragging.apply(k, [k.$elem]));
                (8 < k.newRelativeX || -8 > k.newRelativeX) && !0 === k.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault() : e.returnValue = !1, i.sliding = !0);
                (10 < k.newPosY || -10 > k.newPosY) && !1 === i.sliding && d(b).off("touchmove.owl");
                k.newPosX = Math.max(Math.min(k.newPosX, k.newRelativeX / 5), k.maximumPixels + k.newRelativeX / 5);
                !0 === k.browser.support3d ? k.transition3d(k.newPosX) : k.css2move(k.newPosX)
            }

            function l(e) {
                e = e.originalEvent || e || c.event;
                var h;
                e.target = e.target || e.srcElement;
                i.dragging = !1;
                !0 !== k.browser.isTouch && k.$owlWrapper.removeClass("grabbing");
                k.dragDirection = 0 > k.newRelativeX ? k.owl.dragDirection = "left" : k.owl.dragDirection = "right";
                0 !== k.newRelativeX && (h = k.getNewPosition(), k.goTo(h, !1, "drag"), i.targetElement === e.target && !0 !== k.browser.isTouch && (d(e.target).on("click.disable", function(m) {
                    m.stopImmediatePropagation();
                    m.stopPropagation();
                    m.preventDefault();
                    d(m.target).off("click.disable")
                }), e = d._data(e.target, "events").click, h = e.pop(), e.splice(0, 0, h)));
                f("off")
            }
            var k = this,
                i = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            k.isCssFinish = !0;
            k.$elem.on(k.ev_types.start, ".owl-wrapper", function(m) {
                m = m.originalEvent || m || c.event;
                var h;
                if (3 === m.which) {
                    return !1
                }
                if (!(k.itemsAmount <= k.options.items)) {
                    if (!1 === k.isCssFinish && !k.options.dragBeforeAnimFinish || !1 === k.isCss3Finish && !k.options.dragBeforeAnimFinish) {
                        return !1
                    }!1 !== k.options.autoPlay && c.clearInterval(k.autoPlayInterval);
                    !0 === k.browser.isTouch || k.$owlWrapper.hasClass("grabbing") || k.$owlWrapper.addClass("grabbing");
                    k.newPosX = 0;
                    k.newRelativeX = 0;
                    d(this).css(k.removeTransition());
                    h = d(this).position();
                    i.relativePos = h.left;
                    i.offsetX = g(m).x - h.left;
                    i.offsetY = g(m).y - h.top;
                    f("on");
                    i.sliding = !1;
                    i.targetElement = m.target || m.srcElement
                }
            })
        },
        getNewPosition: function() {
            var e = this.closestItem();
            e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0);
            return e
        },
        closestItem: function() {
            var g = this,
                f = !0 === g.options.scrollPerPage ? g.pagesInArray : g.positionsInArray,
                h = g.newPosX,
                i = null;
            d.each(f, function(j, e) {
                h - g.itemWidth / 20 > f[j + 1] && h - g.itemWidth / 20 < e && "left" === g.moveDirection() ? (i = e, g.currentItem = !0 === g.options.scrollPerPage ? d.inArray(i, g.positionsInArray) : j) : h + g.itemWidth / 20 < e && h + g.itemWidth / 20 > (f[j + 1] || f[j] - g.itemWidth) && "right" === g.moveDirection() && (!0 === g.options.scrollPerPage ? (i = f[j + 1] || f[f.length - 1], g.currentItem = d.inArray(i, g.positionsInArray)) : (i = f[j + 1], g.currentItem = j + 1))
            });
            return g.currentItem
        },
        moveDirection: function() {
            var e;
            0 > this.newRelativeX ? (e = "right", this.playDirection = "next") : (e = "left", this.playDirection = "prev");
            return e
        },
        customEvents: function() {
            var e = this;
            e.$elem.on("owl.next", function() {
                e.next()
            });
            e.$elem.on("owl.prev", function() {
                e.prev()
            });
            e.$elem.on("owl.play", function(f, g) {
                e.options.autoPlay = g;
                e.play();
                e.hoverStatus = "play"
            });
            e.$elem.on("owl.stop", function() {
                e.stop();
                e.hoverStatus = "stop"
            });
            e.$elem.on("owl.goTo", function(f, g) {
                e.goTo(g)
            });
            e.$elem.on("owl.jumpTo", function(f, g) {
                e.jumpTo(g)
            })
        },
        stopOnHover: function() {
            var e = this;
            !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on("mouseover", function() {
                e.stop()
            }), e.$elem.on("mouseout", function() {
                "stop" !== e.hoverStatus && e.play()
            }))
        },
        lazyLoad: function() {
            var g, f, h, j, i;
            if (!1 === this.options.lazyLoad) {
                return !1
            }
            for (g = 0; g < this.itemsAmount; g += 1) {
                f = d(this.$owlItems[g]), "loaded" !== f.data("owl-loaded") && (h = f.data("owl-item"), j = f.find(".lazyOwl"), "string" !== typeof j.data("src") ? f.data("owl-loaded", "loaded") : (void 0 === f.data("owl-loaded") && (j.hide(), f.addClass("loading").data("owl-loaded", "checked")), (i = !0 === this.options.lazyFollow ? h >= this.currentItem : !0) && h < this.currentItem + this.options.items && j.length && this.lazyPreload(f, j)))
            }
        },
        lazyPreload: function(h, g) {
            function l() {
                h.data("owl-loaded", "loaded").removeClass("loading");
                g.removeAttr("data-src");
                "fade" === m.options.lazyEffect ? g.fadeIn(400) : g.show();
                "function" === typeof m.options.afterLazyLoad && m.options.afterLazyLoad.apply(this, [m.$elem])
            }

            function n() {
                j += 1;
                m.completeImg(g.get(0)) || !0 === i ? l() : 100 >= j ? c.setTimeout(n, 100) : l()
            }
            var m = this,
                j = 0,
                i;
            "DIV" === g.prop("tagName") ? (g.css("background-image", "url(" + g.data("src") + ")"), i = !0) : g[0].src = g.data("src");
            n()
        },
        autoHeight: function() {
            function g() {
                var e = d(h.$owlItems[h.currentItem]).height();
                h.wrapperOuter.css("height", e + "px");
                h.wrapperOuter.hasClass("autoHeight") || c.setTimeout(function() {
                    h.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function f() {
                i += 1;
                h.completeImg(j.get(0)) ? g() : 100 >= i ? c.setTimeout(f, 100) : h.wrapperOuter.css("height", "")
            }
            var h = this,
                j = d(h.$owlItems[h.currentItem]).find("img"),
                i;
            void 0 !== j.get(0) ? (i = 0, f()) : g()
        },
        completeImg: function(e) {
            return !e.complete || "undefined" !== typeof e.naturalWidth && 0 === e.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var e;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (e = this.currentItem; e < this.currentItem + this.options.items; e += 1) {
                this.visibleItems.push(e), !0 === this.options.addClassActive && d(this.$owlItems[e]).addClass("active")
            }
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(e) {
            this.outClass = "owl-" + e + "-out";
            this.inClass = "owl-" + e + "-in"
        },
        singleItemTransition: function() {
            var i = this,
                h = i.outClass,
                l = i.inClass,
                n = i.$owlItems.eq(i.currentItem),
                m = i.$owlItems.eq(i.prevItem),
                k = Math.abs(i.positionsInArray[i.currentItem]) + i.positionsInArray[i.prevItem],
                j = Math.abs(i.positionsInArray[i.currentItem]) + i.itemWidth / 2;
            i.isTransition = !0;
            i.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": j + "px",
                "-moz-perspective-origin": j + "px",
                "perspective-origin": j + "px"
            });
            m.css({
                position: "relative",
                left: k + "px"
            }).addClass(h).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                i.endPrev = !0;
                m.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                i.clearTransStyle(m, h)
            });
            n.addClass(l).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                i.endCurrent = !0;
                n.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                i.clearTransStyle(n, l)
            })
        },
        clearTransStyle: function(f, e) {
            f.css({
                position: "",
                left: ""
            }).removeClass(e);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            d(b).off(".owl owl");
            d(c).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            c.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(e) {
            e = d.extend({}, this.userOptions, e);
            this.unWrap();
            this.init(e, this.$elem)
        },
        addItem: function(g, f) {
            var h;
            if (!g) {
                return !1
            }
            if (0 === this.$elem.children().length) {
                return this.$elem.append(g), this.setVars(), !1
            }
            this.unWrap();
            h = void 0 === f || -1 === f ? -1 : f;
            h >= this.$userItems.length || -1 === h ? this.$userItems.eq(-1).after(g) : this.$userItems.eq(h).before(g);
            this.setVars()
        },
        removeItem: function(e) {
            if (0 === this.$elem.children().length) {
                return !1
            }
            e = void 0 === e || -1 === e ? -1 : e;
            this.unWrap();
            this.$userItems.eq(e).remove();
            this.setVars()
        }
    };
    d.fn.owlCarousel = function(e) {
        return this.each(function() {
            if (!0 === d(this).data("owl-init")) {
                return !1
            }
            d(this).data("owl-init", !0);
            var f = Object.create(a);
            f.init(e, this);
            d.data(this, "owlCarousel", f)
        })
    };
    d.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: c,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);
$(".ticker .widget-content").each(function() {
    var a = $(this).text();
    $.ajax(a.match("recent") ? {
        url: "/feeds/posts/default?alt=json-in-script&max-results=" + ticker_number,
        type: "get",
        dataType: "jsonp",
        success: function(h) {
            for (var d = "", b = "<ul>", g = 0; g < h.feed.entry.length; g++) {
                for (var j = 0; j < h.feed.entry[g].link.length; j++) {
                    if ("alternate" == h.feed.entry[g].link[j].rel) {
                        d = h.feed.entry[g].link[j].href;
                        break
                    }
                }
                var f = h.feed.entry[g].title.$t,
                    c = h.feed.entry[g].category[0].term;
                b += '<li><a href="/search/label/' + c + '" class="post-tag">' + c + '</a><h3 class="recent-title"><a href="' + d + '">' + f + "</a></h3></li>"
            }
            b += "</ul>", $(".ticker .widget-content").each(function() {
                $(this).html(b), $(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find("ul").webTicker(), $("p.trans").each(function() {
                    var k = $(this).text(),
                        i = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(k, i)
                })
            })
        }
    } : a.match("random") ? {
        url: "/feeds/posts/default?alt=json-in-script",
        type: "get",
        dataType: "jsonp",
        success: function(f) {
            var c = f.feed.entry.length,
                b = 0,
                d = c - randomposts_number,
                g = Math.floor(Math.random() * (d - b + 1)) + b;
            $.ajax({
                url: "/feeds/posts/default?alt=json-in-script&start-index=" + g + "&max-results=" + ticker_number,
                type: "get",
                dataType: "jsonp",
                success: function(o) {
                    for (var k = "", h = "<ul>", m = 0; m < o.feed.entry.length; m++) {
                        for (var p = 0; p < o.feed.entry[m].link.length; p++) {
                            if ("alternate" == o.feed.entry[m].link[p].rel) {
                                k = o.feed.entry[m].link[p].href;
                                break
                            }
                        }
                        var l = o.feed.entry[m].title.$t,
                            j = o.feed.entry[m].category[0].term;
                        h += '<li><a href="/search/label/' + j + '" class="post-tag">' + j + '</a><h3 class="recent-title"><a href="' + k + '">' + l + "</a></h3></li>"
                    }
                    h += "</ul>", $(".ticker .widget-content").each(function() {
                        $(this).html(h), $(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find("ul").webTicker(), $("p.trans").each(function() {
                            var n = $(this).text(),
                                i = $(this).attr("data-tran");
                            $("#pages-wrapper *").replaceText(n, i)
                        })
                    })
                }
            })
        }
    } : {
        url: "/feeds/posts/default/-/" + a + "?alt=json-in-script&max-results=" + ticker_number,
        type: "get",
        dataType: "jsonp",
        success: function(h) {
            for (var d = "", b = "<ul>", g = 0; g < h.feed.entry.length; g++) {
                for (var j = 0; j < h.feed.entry[g].link.length; j++) {
                    if ("alternate" == h.feed.entry[g].link[j].rel) {
                        d = h.feed.entry[g].link[j].href;
                        break
                    }
                }
                var f = h.feed.entry[g].title.$t,
                    c = h.feed.entry[g].category[0].term;
                b += '<li><a href="/search/label/' + c + '" class="post-tag">' + c + '</a><h3 class="recent-title"><a href="' + d + '">' + f + "</a></h3></li>"
            }
            b += "</ul>", $(".ticker .widget-content").each(function() {
                $(this).html(b), $(this).prev("h2").prepend('<i class="fa fa-thumb-tack"></i>'), $(this).removeClass("widget-content").addClass("layout-content"), $(this).find("ul").webTicker(), $("p.trans").each(function() {
                    var k = $(this).text(),
                        i = $(this).attr("data-tran");
                    $("#pages-wrapper *").replaceText(k, i)
                })
            })
        }
    })
});
