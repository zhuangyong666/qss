var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        height: "",
        list: [],
        page: 1,
        lastPage: !1,
        come_share_id: 0
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    copyExno: function(t) {
        var e = t.currentTarget.dataset.exno;
        wx.setClipboardData ? wx.setClipboardData({
            data: e,
            success: function(t) {
                a.globalData.showSmart = !1, wx.showToast({
                    title: "单号已复制"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    getRushBuyOrders: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", n = this;
        a.util.request({
            url: "entry/wxapp/getRushBuyOrders",
            data: {
                page: n.data.page
            },
            success: function(a) {
                if (console.log(a.data.data), "function" == typeof t && t(), "append" == e) return a.data.data.length ? (n.data.list = n.data.list.concat(a.data.data), 
                n.setData({
                    list: n.data.list
                }), !1) : (n.data.lastPage = !0, !1);
                n.setData({
                    list: a.data.data
                });
            }
        });
    },
    goShareFriend: function(a) {
        var t = a.currentTarget.dataset.log_id;
        wx.navigateTo({
            url: "./share-rush-buy?come_share_id=" + this.data.come_share_id + "&log_id=" + t + "&r_id=0"
        });
    },
    goLookResult: function(a) {
        var t = a.currentTarget.dataset.log_id;
        wx.navigateTo({
            url: "./order-success?come_share_id=" + this.data.come_share_id + "&id=" + t
        });
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    width: a.windowWidth,
                    height: a.windowHeight
                });
            }
        }), t.setData({
            come_share_id: a.come_share_id
        }), t.getRushBuyOrders();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage) return !1;
        a.data.page++, a.getRushBuyOrders("", "append");
    },
    onShareAppMessage: function() {}
});