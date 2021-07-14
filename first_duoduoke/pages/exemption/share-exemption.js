var e = getApp();

Page({
    data: {
        navH: 0,
        freered_text: "",
        share_img: ""
    },
    copyShare: function() {
        var e = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: e.data.freered_text,
            success: function(e) {
                wx.showToast({
                    title: "复制成功"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    getShareImg: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/getFreeRedPoster",
            success: function(e) {
                console.log(e.data.data), t.setData({
                    share_img: e.data.data
                });
            }
        });
    },
    saveQrcodeToPhotosAlbum: function(e) {
        var t = this;
        wx.getImageInfo({
            src: t.data.share_img,
            success: function(e) {
                console.log(e), wx.saveImageToPhotosAlbum({
                    filePath: e.path,
                    success: function(e) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                });
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: e.globalData.navHeight,
            freered_text: e.globalData.setting.freered_text
        }), this.getShareImg();
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
        var t = this, a = e.globalData.setting.share_freered_title ? e.globalData.setting.share_freered_title : "免单红包 既抢红包又抢免单 更有超多大额优惠券发放中，快来抢...", o = e.globalData.setting.share_freered_pic ? e.globalData.setting.share_freered_pic : t.data.share_img;
        return {
            title: a,
            path: "/first_duoduoke/pages/exemption/exemption" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: o,
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