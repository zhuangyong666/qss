var t = getApp();

Page({
    data: {
        isLogin: !1,
        imgPath: t.getImgUrl(),
        task_text: !1
    },
    onLoad: function(e) {
        this.setData({
            navH: t.globalData.navHeight
        }), t.globalData.setting.task_7_text && this.setData({
            task_text: t.globalData.setting.task_7_text
        });
        var n = !!t.globalData.userInfo;
        this.setData({
            isLogin: n
        }), t.checkUserSub(2);
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    loginAfter: function(e) {
        t.loginAfter(e);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    sharetoFq: function() {
        t.checkLogin();
    },
    saveUserPoster: function() {
        if (t.globalData.userInfo) {
            t.util.request({
                url: "entry/wxapp/getUserPoster",
                success: function(t) {
                    console.log(t);
                    var e = t.data.data;
                    console.log(e), wx.getImageInfo({
                        src: e,
                        success: function(t) {
                            wx.saveImageToPhotosAlbum({
                                filePath: t.path,
                                success: function(t) {
                                    wx.showToast({
                                        title: "已保存至相册",
                                        icon: "success"
                                    });
                                },
                                fail: function(t) {
                                    wx.showModal({
                                        title: "系统提示",
                                        content: "请转至“授权设置”页面打开“保存到相册”开关",
                                        confirmColor: "#f43f6c",
                                        confirmText: "去打开",
                                        showCancel: !1,
                                        success: function(t) {
                                            wx.openSetting({
                                                withSubscriptions: !0,
                                                success: function() {}
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else t.checkLogin();
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var e = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", n = t.globalData.setting.share_pic;
        return {
            title: e,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
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