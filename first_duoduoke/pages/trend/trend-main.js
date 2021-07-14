var t = function(t) {
    if (t && t.__esModule) return t;
    var a = {};
    if (null != t) for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (a[e] = t[e]);
    return a.default = t, a;
}(require("../charts/echarts")), a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        showBuy: !1,
        goods: !1,
        nogoods: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(t) {
        if (void 0 !== t.content) {
            var e = this;
            a.util.request({
                url: "entry/wxapp/Setting",
                data: {
                    name: "phis_share_pic,phis_share_title,share_title,share_pic"
                },
                showLoading: !1,
                success: function(t) {
                    var a = t.data.data;
                    e.setData(a);
                }
            }), e.setData({
                content: decodeURIComponent(t.content)
            }, function() {
                e.disGoods();
            });
        } else wx.navigateBack();
    },
    toGoodsPage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.goods_id, e = "&source=" + t.currentTarget.dataset.source;
        void 0 !== t.currentTarget.dataset.goods_url && (e += "&goods_url=" + t.currentTarget.dataset.goods_url), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a + e
        });
    },
    disGoods: function() {
        var t = this;
        wx.showLoading({
            title: "查询中",
            mask: !0
        }), a.util.request({
            url: "entry/wxapp/getDisGoods",
            data: {
                content: t.data.content
            },
            showLoading: !1,
            success: function(a) {
                "ok" == a.data.message ? t.setData({
                    goods: a.data.data,
                    showBuy: !0
                }, function() {
                    t.getHistoryPrice();
                }) : t.getHistoryPricebyUrl();
            }
        });
    },
    getHistoryPricebyUrl: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/getHistoryPrice",
            data: {
                url: e.data.content
            },
            showLoading: !1,
            success: function(o) {
                if ("no-goods" != o.data.message) if (e.setData({
                    goods: o.data.data.goods
                }), "[]" != o.data.data.hisp) {
                    var s = JSON.parse(o.data.data.hisp), n = new a.util.date(), i = {
                        x: [],
                        y: [],
                        z: [],
                        h: []
                    }, r = 0;
                    for (var d in s) for (var c in s[d]) 0 == c && (i.x.push(n.dateToStr("MM-dd", new Date(s[d][c]))), 
                    i.h.push(n.dateToStr("yyyy年MM月dd日", new Date(s[d][c])))), 1 == c && (0 == d ? r = s[d][c] : s[d][c] < r && (r = s[d][c]), 
                    i.y.push(s[d][c])), 2 == c && i.z.push(s[d][c]);
                    e.setData({
                        showHisP: !0,
                        hisp_lowest: r
                    });
                    var u = e.selectComponent("#mychart-dom-line"), l = {
                        color: [ "#FF6729" ],
                        grid: {
                            containLabel: !0
                        },
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            position: [ 10, 5 ],
                            backgroundColor: "rgba(236,108,56, 1)",
                            formatter: function(t) {
                                var a = t[0].dataIndex;
                                return i.h[a] + " ￥" + i.y[a] + (i.z[a] ? "\n" + i.z[a] : "");
                            }
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: i.x,
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        yAxis: {
                            x: "center",
                            type: "value",
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        series: [ {
                            name: "历史价格",
                            type: "line",
                            data: i.y
                        } ]
                    };
                    u.init(function(a, e, o) {
                        var s = t.init(a, null, {
                            width: e,
                            height: o
                        });
                        return a.setChart(s), s.setOption(l), s;
                    });
                } else e.setData({
                    showHisPempty: !0
                }); else e.setData({
                    nogoods: !0
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    getHistoryPrice: function() {
        var e = this;
        a.util.request({
            url: "entry/wxapp/getHistoryPrice",
            data: {
                goods_id: (4 == e.data.goods.source ? e.data.goods.brandId + "-" : "") + e.data.goods.goods_id,
                source: e.data.goods.source,
                shop_type: e.data.goods.shop_type
            },
            showLoading: !1,
            success: function(o) {
                if ("[]" != o.data.data) {
                    var s = JSON.parse(o.data.data), n = new a.util.date(), i = {
                        x: [],
                        y: [],
                        z: [],
                        h: []
                    }, r = 0;
                    for (var d in s) for (var c in s[d]) 0 == c && (i.x.push(n.dateToStr("MM-dd", new Date(s[d][c]))), 
                    i.h.push(n.dateToStr("yyyy年MM月dd日", new Date(s[d][c])))), 1 == c && (0 == d ? r = s[d][c] : s[d][c] < r && (r = s[d][c]), 
                    i.y.push(s[d][c])), 2 == c && i.z.push(s[d][c]);
                    e.setData({
                        showHisP: !0,
                        hisp_lowest: r
                    });
                    var u = e.selectComponent("#mychart-dom-line"), l = {
                        color: [ "#FF6729" ],
                        grid: {
                            containLabel: !0
                        },
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            position: [ 10, 5 ],
                            backgroundColor: "rgba(236,108,56, 1)",
                            formatter: function(t) {
                                var a = t[0].dataIndex;
                                return i.h[a] + " ￥" + i.y[a] + (i.z[a] ? "\n" + i.z[a] : "");
                            }
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: i.x,
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        yAxis: {
                            x: "center",
                            type: "value",
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        series: [ {
                            name: "历史价格",
                            type: "line",
                            data: i.y
                        } ]
                    };
                    u.init(function(a, e, o) {
                        var s = t.init(a, null, {
                            width: e,
                            height: o
                        });
                        return a.setChart(s), s.setOption(l), s;
                    });
                } else e.setData({
                    showHisPempty: !0
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this, e = t.data.phis_share_title ? t.data.phis_share_title : t.data.share_title, o = t.data.phis_share_pic ? t.data.phis_share_pic : t.data.share_pic;
        return {
            title: e,
            path: "/first_duoduoke/pages/trend/trend" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
            imageUrl: o,
            success: function(t) {
                "shareAppMessage:ok" == t.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(t) {
                "shareAppMessage:fail cancel" == t.errMsg || t.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});