function t(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var e = getApp();

Page({
    data: {
        navH: 0,
        list: []
    },
    getHelpInfo: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/getUseHelp",
            success: function(e) {
                console.log(e), t.setData({
                    list: e.data.data
                });
            }
        });
    },
    showcontent: function(e) {
        var a = this, n = "list[" + e.currentTarget.dataset.replyType + "].show";
        if (1 == a.data.list[e.currentTarget.dataset.replyType].show) {
            for (var o = 0; o < a.data.list.length; ++o) {
                var s = "list[" + o + "].show";
                a.setData(t({}, s, 1));
            }
            a.setData(t({}, n, 2));
        } else a.setData(t({}, n, 1));
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: e.globalData.navHeight
        }), this.getHelpInfo();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = e.globalData.setting.share_title ? e.globalData.setting.share_title : "购物省钱，分享赚钱", a = e.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: a,
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