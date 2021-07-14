var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        page: 1,
        lastPage: !1,
        list: []
    },
    onLoad: function(a) {
        var n = this;
        t.globalData.userInfo ? n.getWinningInfo() : t.checkLogin();
    },
    getWinningInfo: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", o = this;
        t.util.request({
            url: "entry/wxapp/getWinningInfo",
            data: {
                page: o.data.page
            },
            success: function(t) {
                if (console.log(t.data.data), "function" == typeof a && a(), "append" == n) return t.data.data.length ? (o.data.list = o.data.list.concat(t.data.data), 
                o.setData({
                    list: o.data.list
                }), !1) : (o.data.lastPage = !0, !1);
                o.setData({
                    list: t.data.data
                });
            }
        });
    },
    lookLogisitics: function(t) {
        var a = t.currentTarget.dataset.logistics_no, n = t.currentTarget.dataset.logistics_name;
        "" != a || "" != n ? wx.showModal({
            title: "提示",
            content: "物流:" + n + ",单号:" + a,
            showCancel: !1,
            confirmText: "复制单号",
            success: function(t) {
                t.confirm && (wx.setClipboardData ? wx.setClipboardData({
                    data: a,
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功"
                        });
                    }
                }) : console.log("当前微信版本不支持setClipboardData"));
            }
        }) : wx.showToast({
            title: "无物流信息",
            icon: "none",
            duration: 2e3
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    navBack: function() {
        wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getWinningInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getWinningInfo("", "append");
    }
});