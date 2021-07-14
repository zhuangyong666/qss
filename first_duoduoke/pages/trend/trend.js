var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        init: !1,
        content: ""
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/Setting",
            data: {
                name: "jd_open,tb_open,phis_share_pic,phis_share_title,share_title,share_pic"
            },
            showLoading: !1,
            success: function(t) {
                var a = t.data.data;
                e.setData(a), e.setData({
                    init: !0
                });
            }
        }), void 0 !== a.content && e.setData({
            content: decodeURIComponent(a.content)
        });
    },
    toTrendMain: function() {
        if (t.globalData.userInfo) {
            var a = this.data.content;
            a || (a = "https://item.m.jd.com/product/72057620449.html"), wx.navigateTo({
                url: "trend-main?content=" + encodeURIComponent(a)
            });
        } else t.checkLogin();
    },
    setContent: function(t) {
        this.setData({
            content: t.detail.value
        });
    },
    clearC: function(t) {
        console.log(t), this.setData({
            content: ""
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    toTrendStep: function() {
        wx.navigateTo({
            url: "trend-step"
        });
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
        var a = this;
        a.data.init && wx.getClipboardData({
            success: function(t) {
                t.data && " " != t.data && a.setData({
                    content: t.data
                }, function() {
                    wx.setClipboardData({
                        data: " ",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareTimeline: function() {
        var a = this, e = void 0 !== t.globalData.userInfo.uid ? "from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "from_act=share";
        return {
            title: a.data.phis_share_title ? a.data.phis_share_title : a.data.share_title,
            imageUrl: a.data.phis_share_pic ? a.data.phis_share_pic : a.data.share_pic,
            query: e
        };
    },
    onShareAppMessage: function() {
        var a = this, e = a.data.phis_share_title ? a.data.phis_share_title : a.data.share_title, n = a.data.phis_share_pic ? a.data.phis_share_pic : a.data.share_pic;
        return {
            title: e,
            path: "/first_duoduoke/pages/trend/trend" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
            imageUrl: n,
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