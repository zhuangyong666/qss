var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        page: 1,
        lastPage: !1,
        hotGoodsList: !1,
        showNavcolor: !1,
        list: !1
    },
    onPageScroll: function(t) {
        t.scrollTop >= 40 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    startTiem: function() {
        function t() {
            for (var t = 0; t < a; t++) {
                var e = o.data.list[t].countdown, n = 0, s = 0, d = 0, i = 0;
                if (e > 0) {
                    n = Math.floor(e / 86400), s = Math.floor(e / 3600) - 24 * n, d = Math.floor(e / 60) - 24 * n * 60 - 60 * s, 
                    i = Math.floor(e) - 24 * n * 60 * 60 - 60 * s * 60 - 60 * d, s <= 9 && (s = "0" + s), 
                    d <= 9 && (d = "0" + d), i <= 9 && (i = "0" + i), o.data.list[t].countdown--;
                    r = s + ":" + d + ":" + i;
                } else var r = "";
                o.data.list[t].difftime = r;
            }
            o.setData({
                list: o.data.list
            });
        }
        var o = this, a = o.data.list.length;
        t();
        setInterval(t, 1e3);
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toEnvelopemain: function(t) {
        console.log(t), wx.navigateTo({
            url: "red-envelopes-main?id=" + t.currentTarget.dataset.shopred_id
        });
    },
    goIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(t) {
        this.getShopRedInfo(), this.getHotGoods();
    },
    getShopRedInfo: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/getShopRedInfo",
            showLoading: !1,
            success: function(t) {
                console.log(t.data.data), o.setData({
                    list: t.data.data
                }), o.startTiem();
            }
        });
    },
    getHotGoods: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", e = this;
        t.util.request({
            url: "entry/wxapp/getHotGoods",
            data: {
                page: e.data.page,
                sort_type: 0
            },
            success: function(t) {
                if ("function" == typeof o && o(), "append" == a) {
                    if (t.data.data.length < 1) return;
                    e.data.hotGoodsList = 1 == e.data.page ? t.data.data : e.data.hotGoodsList.concat(t.data.data);
                    for (n = 0; n < e.data.hotGoodsList.length; n++) (s = e.data.hotGoodsList[n]).goods_redpack = ((s.min_group_price - s.coupon_discount) / 200).toFixed(2);
                    return e.setData({
                        hotGoodsList: e.data.hotGoodsList
                    }), !1;
                }
                for (var n = 0; n < t.data.data.length; n++) {
                    var s = t.data.data[n];
                    s.goods_redpack = ((s.min_group_price - s.coupon_discount) / 200).toFixed(2);
                }
                e.setData({
                    hotGoodsList: t.data.data
                });
            }
        });
    },
    toOtherGoods: function(t) {
        var o = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (o += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + o + "&come_freered=1"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getHotGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getHotGoods("", "append");
    },
    onShareAppMessage: function() {}
});