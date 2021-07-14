var t = getApp();

Page({
    data: {
        navH: 0,
        from_act: 0
    },
    onLoad: function(n) {
        var a = n.from_act ? 1 : 0;
        this.setData({
            navH: t.globalData.navHeight,
            from_act: a
        }), this.getFrontPic("help");
    },
    getFrontPic: function(n) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getFrontPics",
            data: {
                page: n
            },
            showLoading: !1,
            success: function(t) {
                console.log(t);
                var n = t.data.data;
                a.setData({
                    pics: n
                });
            }
        });
    },
    navBack: function() {
        1 == this.data.from_act ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: "教您如何省钱!",
            path: "/first_duoduoke/pages/save-money/save-money?from_act=share",
            imageUrl: "",
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