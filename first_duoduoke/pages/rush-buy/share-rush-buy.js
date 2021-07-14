var a = getApp();

Page({
    data: {
        navH: 0,
        r_id: 0,
        log_id: 0,
        rushbuy_text: "",
        share_img: "",
        share_set: 0,
        come_share_id: 0,
        goods_image_url: ""
    },
    copyShare: function() {
        var a = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: a.data.rushbuy_text,
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
            url: "entry/wxapp/getRushBuyPoster",
            data: {
                share_set: t.data.share_set,
                r_id: t.data.r_id,
                log_id: t.data.log_id
            },
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
            rushbuy_text: a.globalData.setting.rushbuy_text,
            r_id: t.r_id,
            log_id: t.log_id,
            come_share_id: t.come_share_id,
            goods_image_url: t.goods_image_url
        }), 0 == this.data.r_id && 0 == this.data.log_id ? (console.log("平常分享"), this.setData({
            share_set: 1
        })) : 0 != this.data.r_id && 0 == this.data.log_id ? (console.log("商品分享"), this.setData({
            share_set: 2
        })) : 0 == this.data.r_id && 0 != this.data.log_id && (console.log("抢购分享"), this.setData({
            share_set: 3
        })), this.getShareImg();
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
        var t = this, s = a.globalData.setting.share_rushbuy_title ? a.globalData.setting.share_rushbuy_title : "一元购买,我在小程序里面用1元买了这个商品,赶紧下手哦";
        if (1 == t.data.share_set) var o = "/first_duoduoke/pages/rush-buy/rush-buy", e = this.data.share_img ? this.data.share_img : "", i = void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""; else if (2 == t.data.share_set) var o = "/first_duoduoke/pages/rush-buy/rush-goodsdetails?id=" + t.data.r_id, e = this.data.goods_image_url ? this.data.goods_image_url : "", i = void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""; else if (3 == t.data.share_set) var o = "/first_duoduoke/pages/rush-buy/rush-buy?log_id=" + t.data.log_id, e = this.data.goods_image_url ? this.data.goods_image_url : "", i = void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "";
        return {
            title: s,
            path: o + i,
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