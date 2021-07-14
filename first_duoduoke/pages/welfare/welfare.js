var e = getApp();

Page({
    data: {
        navH: 0,
        imgPath: e.getImgUrl(),
        isReceive: !1
    },
    receive: function() {
        if (e.globalData.userInfo) {
            var a = this;
            e.util.request({
                url: "entry/wxapp/receiveNew",
                success: function(t) {
                    console.log(t), "ok" == t.data.message && (a.setData({
                        isReceive: !0
                    }), wx.showModal({
                        title: "系统提示",
                        content: "恭喜您获得" + e.globalData.setting.new_guy_bouns + "元红包，请跳转至“我的”页面查看>>",
                        showCancel: !1,
                        confirmColor: "#f43f6c",
                        confirmText: "去查看",
                        success: function(e) {
                            wx.switchTab({
                                url: "../my/my"
                            });
                        }
                    }));
                }
            });
        } else e.checkLogin();
    },
    loginAfter: function(a) {
        e.loginAfter(a);
    },
    loginCancel: function() {
        e.loginCancel();
    },
    checkReceive: function() {
        e.globalData.userInfo && this.setData({
            isReceive: e.globalData.userInfo.isReceiveNew
        });
    },
    goVip: function() {
        wx.navigateTo({
            url: "../guest/guest"
        });
    },
    goCash: function() {
        wx.navigateTo({
            url: "../cash/cash"
        });
    },
    goPartakeOf: function() {
        wx.navigateTo({
            url: "../partake/partake"
        });
    },
    onLoad: function(a) {
        this.setData({
            navH: e.globalData.navHeight,
            withdraw_open: e.globalData.setting.withdraw_open
        }), this.checkReceive();
    },
    navBack: function() {
        wx.navigateBack();
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
        var a = e.globalData.setting.share_title ? e.globalData.setting.share_title : "购物省钱，分享赚钱", t = e.globalData.setting.share_pic;
        return {
            title: a,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: t,
            success: function(e) {
                "shareAppMessage:ok" == e.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(e) {
                "shareAppMessage:fail cancel" == e.errMsg || e.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});