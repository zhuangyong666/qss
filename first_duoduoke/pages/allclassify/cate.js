var t = getApp();

Page({
    data: {
        navH: 0,
        opt_id: 0,
        type: 1,
        sort: 0,
        goodsList: [],
        page: 1,
        lastPage: !1,
        loading: !1,
        menuFixed: !1,
        appletKeyword: ""
    },
    toGoodsDetail: function(t) {
        console.log("asda", t);
        var a = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (a += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    sortGoods: function(t) {
        var a = t.currentTarget.dataset.type;
        if (1 != this.data.type || 1 != a) {
            var o = this.data.type == a ? this.data.sort ? 0 : 1 : 3 == a && this.data.type != a ? 0 : 1;
            this.setData({
                sort: o,
                type: a
            }), this.data.page = 1, this.data.lastPage = !1;
            var e = this;
            e.data.loading = !0, wx.pageScrollTo({
                scrollTop: e.data.menuTop - e.data.navH - e.data.plusH,
                duration: 0
            }), e.getGoodsList();
        }
    },
    getMenuTop: function() {
        var t = this, a = wx.createSelectorQuery();
        a.select("#affix").boundingClientRect(), a.exec(function(a) {
            console.log(a, "top"), t.setData({
                menuTop: a[0].top
            });
        });
    },
    onPageScroll: function(t) {
        var a = this;
        t.scrollTop >= a.data.menuTop ? a.data.menuFixed || a.setData({
            menuFixed: !0
        }) : a.data.menuFixed && a.setData({
            menuFixed: !1
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(a) {
        this.setData({
            navH: t.globalData.navHeight,
            appletKeyword: t.globalData.setting.appletKeyword
        }), console.log("options", a), void 0 !== a.opt_id && 0 != a.opt_id ? (this.data.opt_id = a.opt_id, 
        "undefined" != a.opt_name ? this.setData({
            opt_name: a.opt_name
        }) : this.setData({
            opt_name: "同类推荐"
        }), this.getMenuTop(), this.getGoodsList()) : wx.navigateBack();
    },
    getGoodsList: function(a) {
        var o = this;
        o.data.loading = !0, t.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: o.data.page,
                type: o.data.type,
                sort: o.data.sort,
                opt_id: o.data.opt_id
            },
            success: function(t) {
                console.log(t), t.data.data.length < 1 ? o.data.lastPage = !0 : (o.data.goodsList = 1 == o.data.page ? t.data.data : o.data.goodsList.concat(t.data.data), 
                o.data.goods_id = t.data.data.goods_id, o.setData({
                    goodsList: o.data.goodsList,
                    goods_id: o.data.goods_id
                }), o.data.loading = !1);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getGoodsList(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        !0 !== t.data.lastPage && !0 !== t.data.loading && (t.data.page++, t.getGoodsList());
    },
    onShareAppMessage: function() {
        var a = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", o = t.globalData.setting.share_pic;
        return {
            title: a,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
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