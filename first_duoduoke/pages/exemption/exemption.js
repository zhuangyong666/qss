var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        showNavcolor: !1,
        showBighb: !1,
        showWinMoney: !1,
        list: !1,
        page: 1,
        lastPage: !1,
        freered_id: 0,
        imgPath: t.getImgUrl(),
        from_uid: 0
    },
    showInfo: function() {
        t.showInfo(this, t.globalData.setting.freered_rule_intro);
    },
    hideInfo: function() {
        t.hideInfo(this);
    },
    navBack: function() {
        this.data.from_uid > 0 ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toOtherGoods: function(t) {
        var a = t.currentTarget.dataset.goods_id;
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    bindscroll: function(t) {
        t.detail.scrollTop >= 90 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    onshowBighb: function(a) {
        var e = this;
        if (t.globalData.userInfo) {
            var o = a.currentTarget.dataset.freered_id;
            0 != e.data.showBighb && 0 != e.data.showWinMoney || e.setData({
                freered_id: o
            }), t.util.request({
                url: "entry/wxapp/getFreeRedResult",
                showLoading: !1,
                data: {
                    freered_id: o
                },
                success: function(t) {
                    console.log(t.data.data), "no" == t.data.message && e.setData({
                        showBighb: !0
                    }), "ok" == t.data.message && (e.setData({
                        showWinMoney: !0,
                        page: 1,
                        lastPage: !1,
                        get_money: t.data.data
                    }), e.getFreeRedInfo());
                }
            });
        } else t.checkLogin();
    },
    onhideBighb: function() {
        this.setData({
            showBighb: !1,
            showWinMoney: !1
        });
    },
    toHotgoodsrec: function() {
        this.setData({
            showBighb: !1
        }), wx.navigateTo({
            url: "./hot-good-rec?freered_id=" + this.data.freered_id
        });
    },
    toShare: function() {
        t.globalData.userInfo ? wx.navigateTo({
            url: "./share-exemption"
        }) : t.checkLogin();
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    onLoad: function(t) {
        this.setData({
            from_uid: t.from_uid ? t.from_uid : 0
        }), this.getFreeRedInfo();
    },
    getFreeRedInfo: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", o = this;
        t.util.request({
            url: "entry/wxapp/getFreeRedInfo",
            showLoading: !1,
            data: {
                page: o.data.page,
                from_uid: o.data.from_uid
            },
            success: function(n) {
                if (console.log(n.data.data), "function" == typeof a && a(), t.globalData.userInfo && o.data.from_uid > 0 && (t.globalData.setting = n.data.data.setting), 
                "append" == e) return n.data.data.list.length < 1 ? void o.setData({
                    lastPage: !0
                }) : (o.data.list = 1 == o.data.page ? n.data.data.list : o.data.list.concat(n.data.data.list), 
                o.setData({
                    list: o.data.list
                }), !1);
                o.setData({
                    list: n.data.data.list
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getFreeRedInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getFreeRedInfo("", "append");
    },
    onShareAppMessage: function() {}
});