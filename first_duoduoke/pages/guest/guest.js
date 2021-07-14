var a = getApp();

Page({
    data: {
        navH: 0,
        uInfo: {
            level: 0,
            inviters: 0,
            promotes: 0
        },
        vipSet: {
            id: 1,
            name: "VIP1",
            inviters: 1,
            promotes: 0
        }
    },
    goPartakeOf: function() {
        wx.redirectTo({
            url: "../partake/partake"
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight
        }), a.globalData.userInfo && (a.globalData.userInfo.level = parseInt(a.globalData.userInfo.level), 
        this.setData({
            uInfo: a.globalData.userInfo,
            vipSet: a.globalData.setting.vipSet
        }));
    },
    navBack: function() {
        wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", e = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: e,
            success: function(a) {
                "shareAppMessage:ok" == a.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(a) {
                "shareAppMessage:fail cancel" == a.errMsg || a.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});