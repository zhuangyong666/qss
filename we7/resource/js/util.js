function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function getQuery(e) {
    var t = [];
    if (-1 != e.indexOf("?")) for (var n = e.split("?")[1].split("&"), a = 0; a < n.length; a++) n[a].split("=")[0] && unescape(n[a].split("=")[1]) && (t[a] = {
        name: n[a].split("=")[0],
        value: unescape(n[a].split("=")[1])
    });
    return t;
}

function getUrlParam(e, t) {
    var n = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"), a = e.split("?")[1].match(n);
    return null != a ? unescape(a[2]) : null;
}

function getSign(e, t, n) {
    var a = require("underscore.js"), r = require("md5.js"), o = "", i = getUrlParam(e, "sign");
    if (i || t && t.sign) return !1;
    if (e && (o = getQuery(e)), t) {
        var s = [];
        for (var u in t) u && t[u] && (s = s.concat({
            name: u,
            value: t[u]
        }));
        o = o.concat(s);
    }
    o = a.sortBy(o, "name"), o = a.uniq(o, !0, "name");
    for (var c = "", f = 0; f < o.length; f++) o[f] && o[f].name && o[f].value && (c += o[f].name + "=" + o[f].value, 
    f < o.length - 1 && (c += "&"));
    return n = n || getApp().siteInfo.token, i = r(c + n);
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, _base = require("base64"), _md = require("md5"), _md2 = _interopRequireDefault(_md), util = {};

util.base64Encode = function(e) {
    return (0, _base.base64_encode)(e);
}, util.base64Decode = function(e) {
    return (0, _base.base64_decode)(e);
}, util.b64_hmac_sha1 = function(e, t, n, a) {
    function r(e, t, n, a) {
        return e < 20 ? t & n | ~t & a : e < 40 ? t ^ n ^ a : e < 60 ? t & n | t & a | n & a : t ^ n ^ a;
    }
    function o(e) {
        return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514;
    }
    function i(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
    }
    function s(e, t) {
        return e << t | e >>> 32 - t;
    }
    function u(e, t) {
        e[t >> 5] |= 128 << 24 - t % 32, e[15 + (t + 64 >> 9 << 4)] = t;
        for (var n = [ 80 ], a = 1732584193, u = -271733879, c = -1732584194, f = 271733878, g = -1009589776, l = 0; l < e.length; l += 16) {
            for (var d = a, h = u, p = c, m = f, w = g, v = 0; v < 80; v++) {
                n[v] = v < 16 ? e[l + v] : s(n[v - 3] ^ n[v - 8] ^ n[v - 14] ^ n[v - 16], 1);
                var y = i(i(s(a, 5), r(v, u, c, f)), i(i(g, n[v]), o(v)));
                g = f, f = c, c = s(u, 30), u = a, a = y;
            }
            a = i(a, d), u = i(u, h), c = i(c, p), f = i(f, m), g = i(g, w);
        }
        return [ a, u, c, f, g ];
    }
    function c(e) {
        for (var t = [], n = (1 << a) - 1, r = 0; r < e.length * a; r += a) t[r >> 5] |= (e.charCodeAt(r / 8) & n) << 32 - a - r % 32;
        return t;
    }
    function f(e, t) {
        var n = c(e);
        n.length > 16 && (n = u(n, e.length * a));
        for (var r = [ 16 ], o = [ 16 ], i = 0; i < 16; i++) r[i] = 909522486 ^ n[i], o[i] = 1549556828 ^ n[i];
        var s = u(r.concat(c(t)), 512 + t.length * a);
        return u(o.concat(s), 672);
    }
    function g(e) {
        for (var t = "", a = 0; a < 4 * e.length; a += 3) for (var r = (e[a >> 2] >> 8 * (3 - a % 4) & 255) << 16 | (e[a + 1 >> 2] >> 8 * (3 - (a + 1) % 4) & 255) << 8 | e[a + 2 >> 2] >> 8 * (3 - (a + 2) % 4) & 255, o = 0; o < 4; o++) 8 * a + 6 * o > 32 * e.length ? t += n : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(r >> 6 * (3 - o) & 63);
        return t;
    }
    return n || (n = "="), a || (a = 8), function(e, t) {
        return g(f(e, t));
    }(e, t);
}, util.ksort = function(e) {
    var t = [];
    for (var n in e) t.push(n);
    t.sort();
    for (var a = {}, r = 0; r < t.length; r++) {
        var o = t[r];
        a[o] = e[o];
    }
    return a;
}, util.md5 = function(e) {
    return (0, _md2.default)(e);
}, util.urlToJson = function(e) {
    var t = [], n = 0, a = {};
    n = (t = e.split("&")).length;
    for (var r = 0; r < n; r++) a[t[r].split("=")[0]] = t[r].split("=")[1];
    return a;
}, util.JsonToUrl = function(e) {
    var t = "";
    if (Object.keys(e).length > 0) {
        t += "?";
        for (var n in e) t += "&" + n + "=" + e[n];
    }
    return t;
}, util.url = function(e, t) {
    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a = getApp(), r = a.siteInfo.siteroot + "?i=" + a.siteInfo.uniacid + "&t=" + a.siteInfo.multiid + "&v=" + a.siteInfo.version + "&from=wxapp&";
    if (e && ((e = e.split("/"))[0] && (r += "c=" + e[0] + "&"), e[1] && (r += "a=" + e[1] + "&"), 
    e[2] && (r += "do=" + e[2] + "&")), t && "object" === (void 0 === t ? "undefined" : _typeof(t))) for (var o in t) o && t.hasOwnProperty(o) && t[o] && (r += o + "=" + t[o] + "&");
    if (!0 === n) {
        r = r + "&state=we7sid-" + wx.getStorageSync("userInfo").sessionid;
        var i = getCurrentPages();
        i.length && (i = i[getCurrentPages().length - 1]) && i.__route__ && (r += "&m=first_duoduoke");
        var s = getSign(r);
        s && (r = r + "&sign=" + s);
    }
    return r;
}, util.getSign = function(e, t, n) {
    return getSign(e, t, n);
}, util.request = function(e) {
    require("underscore.js");
    var t = require("md5.js"), n = getApp();
    (e = e || {}).cachetime = e.cachetime ? e.cachetime : 0, e.showLoading = void 0 === e.showLoading || e.showLoading;
    var a = wx.getStorageSync("userInfo").sessionid, r = e.url;
    if (-1 == r.indexOf("http://") && -1 == r.indexOf("https://") && (r = util.url(r, "", !1)), 
    getUrlParam(r, "state") || e.data && e.data.state || !a || (r = r + "&state=we7sid-" + a), 
    !e.data || !e.data.m) {
        var o = getCurrentPages();
        o.length && (o = o[getCurrentPages().length - 1]) && o.__route__ && (r += "&m=first_duoduoke");
    }
    var i = getSign(r, e.data);
    if (i && (r = r + "&sign=" + i), !r) return !1;
    if (wx.showNavigationBarLoading(), e.showLoading && util.showLoading(), e.cachetime) {
        var s = t(r), u = wx.getStorageSync(s), c = Date.parse(new Date());
        if (u && u.data) {
            if (u.expire > c) return e.complete && "function" == typeof e.complete && e.complete(u), 
            e.success && "function" == typeof e.success && e.success(u), console.log("cache:" + r), 
            wx.hideLoading(), wx.hideNavigationBarLoading(), !0;
            wx.removeStorageSync(s);
        }
    }
    e.data ? e.data.formIds = "" : e.data = {}, n.globalData.from_uid && (e.data.from_uid = n.globalData.from_uid), 
    n.globalData.from_act && (e.data.from_act = n.globalData.from_act), wx.request({
        url: r,
        data: e.data ? e.data : {},
        header: e.header ? e.header : {
            "content-type": "application/x-www-form-urlencoded"
        },
        method: e.method ? e.method : "GET",
        success: function(t) {
            if (wx.hideNavigationBarLoading(), !1 !== e.showLoading && wx.hideLoading(), t.data.errno) {
                if ("41009" == t.data.errno) return wx.setStorageSync("userInfo", ""), void util.getUserInfo(function() {
                    util.request(e);
                });
                if (e.fail && "function" == typeof e.fail) e.fail(t); else if (t.data.message) {
                    if (null != t.data.data && t.data.data.redirect) a = t.data.data.redirect; else var a = "";
                    n.util.message(t.data.message, a, "error");
                }
            } else if (e.success && "function" == typeof e.success && e.success(t), e.cachetime) {
                var r = {
                    data: t.data,
                    expire: c + 1e3 * e.cachetime
                };
                wx.setStorageSync(s, r);
            }
        },
        fail: function(t) {
            wx.hideNavigationBarLoading(), wx.hideLoading();
            var n = require("md5.js")(r), a = wx.getStorageSync(n);
            if (a && a.data) return e.success && "function" == typeof e.success && e.success(a), 
            console.log("failreadcache:" + r), !0;
            e.fail && "function" == typeof e.fail && e.fail(t);
        },
        complete: function(t) {
            e.complete && "function" == typeof e.complete && e.complete(t);
        }
    });
}, util.getUserInfo = function(e) {
    var t = function() {
        console.log("start login");
        var t = {
            sessionid: "",
            wxInfo: "",
            memberInfo: ""
        };
        wx.login({
            success: function(n) {
                util.request({
                    url: "auth/session/openid",
                    data: {
                        code: n.code
                    },
                    cachetime: 0,
                    showLoading: !1,
                    success: function(n) {
                        n.data.errno || wx.getUserInfo({
                            success: function(a) {
                                t.sessionid = n.data.data.sessionid, t.wxInfo = a.userInfo, wx.setStorageSync("userInfo", t), 
                                util.request({
                                    url: "auth/session/userinfo",
                                    data: {
                                        signature: a.signature,
                                        rawData: a.rawData,
                                        iv: a.iv,
                                        encryptedData: a.encryptedData
                                    },
                                    method: "POST",
                                    header: {
                                        "content-type": "application/x-www-form-urlencoded"
                                    },
                                    cachetime: 0,
                                    success: function(n) {
                                        n.data.errno || (t.memberInfo = n.data.data, wx.setStorageSync("userInfo", t)), 
                                        "function" == typeof e && e(t);
                                    }
                                });
                            },
                            fail: function(n) {
                                var a = getCurrentPages(), r = a[a.length - 1];
                                n.errMsg ? r.setData({
                                    showLoginModal: !0
                                }) : "function" == typeof e && e(t);
                            },
                            complete: function() {}
                        });
                    }
                });
            },
            fail: function() {
                wx.showModal({
                    title: "获取信息失败",
                    content: "请允许授权以便为您提供给服务",
                    confirmColor: "#f43f6c",
                    cancelColor: "#f43f6c",
                    success: function(e) {
                        e.confirm && util.getUserInfo();
                    }
                });
            }
        });
    }, n = wx.getStorageSync("userInfo");
    n.sessionid ? wx.checkSession({
        success: function() {
            "function" == typeof e && e(n);
        },
        fail: function() {
            n.sessionid = "", console.log("relogin"), wx.removeStorageSync("userInfo"), t();
        }
    }) : t();
}, util.navigateBack = function(e) {
    var t = e.delta ? e.delta : 1;
    if (e.data) {
        var n = getCurrentPages(), a = n[n.length - (t + 1)];
        a.pageForResult ? a.pageForResult(e.data) : a.setData(e.data);
    }
    wx.navigateBack({
        delta: t,
        success: function(t) {
            "function" == typeof e.success && e.success(t);
        },
        fail: function(t) {
            "function" == typeof e.fail && e.fail(t);
        },
        complete: function() {
            "function" == typeof e.complete && e.complete();
        }
    });
}, util.footer = function(e) {
    var t = e, n = getApp().tabBar;
    for (var a in n.list) n.list[a].pageUrl = n.list[a].pagePath.replace(/(\?|#)[^"]*/g, "");
    t.setData({
        tabBar: n,
        "tabBar.thisurl": t.__route__
    });
}, util.message = function(e, t, n) {
    if (!e) return !0;
    if ("object" == (void 0 === e ? "undefined" : _typeof(e)) && (t = e.redirect, n = e.type, 
    e = e.title), t) {
        var a = t.substring(0, 9), r = "", o = "";
        "navigate:" == a ? (o = "navigateTo", r = t.substring(9)) : "redirect:" == a ? (o = "redirectTo", 
        r = t.substring(9)) : (r = t, o = "redirectTo");
    }
    console.log(r), n || (n = "success"), "success" == n ? wx.showToast({
        title: e,
        icon: "success",
        duration: 2e3,
        mask: !!r,
        complete: function() {
            r && setTimeout(function() {
                wx[o]({
                    url: r
                });
            }, 1800);
        }
    }) : "error" == n && wx.showModal({
        title: "系统信息",
        content: e,
        showCancel: !1,
        confirmColor: "#f43f6c",
        cancelColor: "#f43f6c",
        confirmText: "我知道了",
        complete: function() {
            r && ("back" == r ? wx.navigateBack() : "index" == r ? wx.switchTab({
                url: "/first_duoduoke/pages/index/index"
            }) : "task" == r ? wx.switchTab({
                url: "/first_duoduoke/pages/task/task"
            }) : wx[o]({
                url: r
            }));
        }
    });
}, util.user = util.getUserInfo, util.showLoading = function() {
    wx.getStorageSync("isShowLoading") && (wx.hideLoading(), wx.setStorageSync("isShowLoading", !1)), 
    wx.showLoading({
        title: "加载中",
        complete: function() {
            wx.setStorageSync("isShowLoading", !0);
        },
        fail: function() {
            wx.setStorageSync("isShowLoading", !1);
        }
    });
}, util.showImage = function(e) {
    var t = e ? e.currentTarget.dataset.preview : "";
    if (!t) return !1;
    wx.previewImage({
        urls: [ t ]
    });
}, util.parseContent = function(e) {
    if (!e) return e;
    var t = [ "\ud83c[\udf00-\udfff]", "\ud83d[\udc00-\ude4f]", "\ud83d[\ude80-\udeff]" ], n = e.match(new RegExp(t.join("|"), "g"));
    if (n) for (var a in n) e = e.replace(n[a], "[U+" + n[a].codePointAt(0).toString(16).toUpperCase() + "]");
    return e;
}, util.date = function() {
    this.isLeapYear = function(e) {
        return 0 == e.getYear() % 4 && (e.getYear() % 100 != 0 || e.getYear() % 400 == 0);
    }, this.dateToStr = function(e, t) {
        e = arguments[0] || "yyyy-MM-dd HH:mm:ss", t = arguments[1] || new Date();
        var n = e, a = [ "日", "一", "二", "三", "四", "五", "六" ];
        return n = n.replace(/yyyy|YYYY/, t.getFullYear()), n = n.replace(/yy|YY/, t.getYear() % 100 > 9 ? (t.getYear() % 100).toString() : "0" + t.getYear() % 100), 
        n = n.replace(/MM/, t.getMonth() >= 9 ? t.getMonth() + 1 : "0" + (t.getMonth() + 1)), 
        n = n.replace(/M/g, t.getMonth()), n = n.replace(/w|W/g, a[t.getDay()]), n = n.replace(/dd|DD/, t.getDate() > 9 ? t.getDate().toString() : "0" + t.getDate()), 
        n = n.replace(/d|D/g, t.getDate()), n = n.replace(/hh|HH/, t.getHours() > 9 ? t.getHours().toString() : "0" + t.getHours()), 
        n = n.replace(/h|H/g, t.getHours()), n = n.replace(/mm/, t.getMinutes() > 9 ? t.getMinutes().toString() : "0" + t.getMinutes()), 
        n = n.replace(/m/g, t.getMinutes()), n = n.replace(/ss|SS/, t.getSeconds() > 9 ? t.getSeconds().toString() : "0" + t.getSeconds()), 
        n = n.replace(/s|S/g, t.getSeconds());
    }, this.dateAdd = function(e, t, n) {
        switch (n = arguments[2] || new Date(), e) {
          case "s":
            return new Date(n.getTime() + 1e3 * t);

          case "n":
            return new Date(n.getTime() + 6e4 * t);

          case "h":
            return new Date(n.getTime() + 36e5 * t);

          case "d":
            return new Date(n.getTime() + 864e5 * t);

          case "w":
            return new Date(n.getTime() + 6048e5 * t);

          case "m":
            return new Date(n.getFullYear(), n.getMonth() + t, n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());

          case "y":
            return new Date(n.getFullYear() + t, n.getMonth(), n.getDate(), n.getHours(), n.getMinutes(), n.getSeconds());
        }
    }, this.dateDiff = function(e, t, n) {
        switch (e) {
          case "s":
            return parseInt((n - t) / 1e3);

          case "n":
            return parseInt((n - t) / 6e4);

          case "h":
            return parseInt((n - t) / 36e5);

          case "d":
            return parseInt((n - t) / 864e5);

          case "w":
            return parseInt((n - t) / 6048e5);

          case "m":
            return n.getMonth() + 1 + 12 * (n.getFullYear() - t.getFullYear()) - (t.getMonth() + 1);

          case "y":
            return n.getFullYear() - t.getFullYear();
        }
    }, this.strToDate = function(dateStr) {
        var data = dateStr, reCat = /(\d{1,4})/gm, t = data.match(reCat);
        return t[1] = t[1] - 1, eval("var d = new Date(" + t.join(",") + ");"), d;
    }, this.strFormatToDate = function(e, t) {
        var n = 0, a = -1, r = t.length;
        (a = e.indexOf("yyyy")) > -1 && a < r && (n = t.substr(a, 4));
        var o = 0;
        (a = e.indexOf("MM")) > -1 && a < r && (o = parseInt(t.substr(a, 2)) - 1);
        var i = 0;
        (a = e.indexOf("dd")) > -1 && a < r && (i = parseInt(t.substr(a, 2)));
        var s = 0;
        ((a = e.indexOf("HH")) > -1 || (a = e.indexOf("hh")) > 1) && a < r && (s = parseInt(t.substr(a, 2)));
        var u = 0;
        (a = e.indexOf("mm")) > -1 && a < r && (u = t.substr(a, 2));
        var c = 0;
        return (a = e.indexOf("ss")) > -1 && a < r && (c = t.substr(a, 2)), new Date(n, o, i, s, u, c);
    }, this.dateToLong = function(e) {
        return e.getTime();
    }, this.longToDate = function(e) {
        return new Date(e);
    }, this.isDate = function(e, t) {
        null == t && (t = "yyyyMMdd");
        var n = t.indexOf("yyyy");
        if (-1 == n) return !1;
        var a = e.substring(n, n + 4), r = t.indexOf("MM");
        if (-1 == r) return !1;
        var o = e.substring(r, r + 2), i = t.indexOf("dd");
        if (-1 == i) return !1;
        var s = e.substring(i, i + 2);
        return !(!isNumber(a) || a > "2100" || a < "1900") && (!(!isNumber(o) || o > "12" || o < "01") && !(s > getMaxDay(a, o) || s < "01"));
    }, this.getMaxDay = function(e, t) {
        return 4 == t || 6 == t || 9 == t || 11 == t ? "30" : 2 == t ? e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? "29" : "28" : "31";
    }, this.isNumber = function(e) {
        return /^\d+$/g.test(e);
    }, this.toArray = function(e) {
        e = arguments[0] || new Date();
        var t = Array();
        return t[0] = e.getFullYear(), t[1] = e.getMonth(), t[2] = e.getDate(), t[3] = e.getHours(), 
        t[4] = e.getMinutes(), t[5] = e.getSeconds(), t;
    }, this.datePart = function(e, t) {
        t = arguments[1] || new Date();
        var n = "", a = [ "日", "一", "二", "三", "四", "五", "六" ];
        switch (e) {
          case "y":
            n = t.getFullYear();
            break;

          case "M":
            n = t.getMonth() + 1;
            break;

          case "d":
            n = t.getDate();
            break;

          case "w":
            n = a[t.getDay()];
            break;

          case "ww":
            n = t.WeekNumOfYear();
            break;

          case "h":
            n = t.getHours();
            break;

          case "m":
            n = t.getMinutes();
            break;

          case "s":
            n = t.getSeconds();
        }
        return n;
    }, this.maxDayOfDate = function(e) {
        (e = arguments[0] || new Date()).setDate(1), e.setMonth(e.getMonth() + 1);
        var t = e.getTime() - 864e5;
        return new Date(t).getDate();
    };
}, module.exports = util;