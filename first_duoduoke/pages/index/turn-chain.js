var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        showTextarea: !1,
        init: !1,
        content: "",
        content_v: "",
        loading: !1,
        mutil: !1
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    copyZl: function() {
        var a = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: a.data.content_v,
            success: function(a) {
                t.globalData.showSmart = !1, wx.showToast({
                    title: "复制成功"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    clearContent: function() {
        this.setData({
            content: "",
            showTextarea: !1
        });
    },
    onShowTextarea: function() {
        this.setData({
            showTextarea: !0
        });
    },
    onHideTextarea: function() {
        this.setData({
            showTextarea: !1
        });
    },
    setContent: function(t) {
        this.setData({
            content: t.detail.value
        }), this.data.content || this.onHideTextarea();
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    toChangeLink: function() {
        if (t.globalData.userInfo) {
            var a = this;
            if (!a.data.content) return wx.showToast({
                title: "转链内容不能为空",
                icon: "none"
            }), !1;
            a.data.loading || (a.data.loading = !0, wx.showLoading({
                title: "转换中",
                mask: !0
            }), a.setData({
                content_v: ""
            }), t.util.request({
                url: "entry/wxapp/toChangeLink",
                data: {
                    content: a.data.content
                },
                showLoading: !1,
                success: function(t) {
                    a.data.loading = !1, wx.hideLoading(), "ok" == t.data.message ? a.setData({
                        content_v: t.data.data
                    }) : wx.showToast({
                        title: t.data.message,
                        icon: "none",
                        duration: 3500
                    });
                }
            }));
        } else t.checkLogin();
    },
    onLoad: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/Setting",
            data: {
                name: "jd_open,tb_open,vip_open,sn_open,kl_open,mg_open,onekeyzl_share_title,onekeyzl_share_pic,share_title,share_pic"
            },
            showLoading: !1,
            success: function(t) {
                var a = t.data.data;
                e.setData(a), e.setData({
                    init: !0
                });
            }
        }), void 0 !== a.content && e.setData({
            content: decodeURIComponent(a.content),
            showTextarea: !0
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
            title: a.data.onekeyzl_share_title ? a.data.onekeyzl_share_title : a.data.share_title,
            imageUrl: a.data.onekeyzl_share_pic ? a.data.onekeyzl_share_pic : a.data.share_pic,
            query: e
        };
    },
    onShareAppMessage: function() {
        var a = this, e = a.data.onekeyzl_share_title ? a.data.onekeyzl_share_title : a.data.share_title, n = a.data.onekeyzl_share_pic ? a.data.onekeyzl_share_pic : a.data.share_pic;
        return {
            title: e,
            path: "/first_duoduoke/pages/index/turn-chain" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
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