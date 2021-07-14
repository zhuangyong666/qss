var a = getApp();

Page({
    data: {
        navH: 0,
        share_img: "",
        speedlooting_text: "",
        share_name: ""
    },
    copyShare: function() {
        var a = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: a.data.speedlooting_text,
            success: function(a) {
                wx.showToast({
                    title: "复制成功"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    getShareImg: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getSpeedLootingPoster",
            success: function(a) {
                console.log(a.data.data), t.setData({
                    share_img: a.data.data
                });
            }
        });
    },
    saveQrcodeToPhotosAlbum: function(a) {
        var t = this;
        wx.getImageInfo({
            src: t.data.share_img,
            success: function(a) {
                console.log(a), wx.saveImageToPhotosAlbum({
                    filePath: a.path,
                    success: function(a) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight,
            speedlooting_text: a.globalData.setting.speedlooting_text
        }), this.getShareImg(), a.globalData.userInfo || a.checkLogin();
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
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
        var t = a.globalData.userInfo.nickName + "@你,挑战你的手速,免费夺宝赢奖品", o = "/first_duoduoke/pages/treasure/treasure?share_uid=" + a.globalData.userInfo.uid, e = this.data.share_img ? this.data.share_img : "";
        return {
            title: t,
            path: o + (void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=speed" : ""),
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