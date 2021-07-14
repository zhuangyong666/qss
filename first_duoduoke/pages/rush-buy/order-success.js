var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        showShareShade: !1,
        backkey: 2,
        times_sum: 7199,
        timer: "",
        qgdjs_jo: {
            hour: "00",
            min: "00",
            sec: "00"
        },
        id: 0,
        goods: {},
        address: [],
        share_set: 3,
        come_share_id: 0
    },
    countDown: function() {
        var a = this;
        console.log("1111"), a.setData({
            timer: setInterval(function() {
                var t = a.data.times_sum;
                if (t <= 0) return a.setData({
                    qgdjs_jo: {
                        hour: "00",
                        min: "00",
                        sec: "00"
                    }
                }), void clearInterval(a.data.timer);
                var e = parseInt(t / 3600 % 24), s = parseInt(t / 60 % 60), o = parseInt(t % 60);
                e < 10 && (e = "0" + e), s < 10 && (s = "0" + s), o < 10 && (o = "0" + o), a.setData({
                    qgdjs_jo: {
                        hour: e,
                        min: s,
                        sec: o
                    },
                    times_sum: a.data.times_sum - 1
                });
            }, 1e3)
        });
    },
    onShowShareShade: function() {
        var a = this;
        a.setData({
            showShareShade: !this.data.showShareShade
        }), a.data.showShareShade && a.getShareImg();
    },
    getShareImg: function() {
        var t = this;
        console.log(t.data.info.r_id), console.log(t.data.info.r_id), a.util.request({
            url: "entry/wxapp/getRushBuyPoster",
            data: {
                share_set: t.data.share_set,
                r_id: t.data.info.r_id,
                log_id: t.data.info.id
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
    navBack: function() {
        wx.navigateBack();
    },
    navIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(a) {
        var t = this;
        t.data.backkey = a.key ? a.key : 2, wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    width: a.windowWidth,
                    height: a.windowHeight
                });
            }
        }), t.setData({
            id: a.id,
            come_share_id: a.come_share_id,
            backkey: t.data.backkey
        }), t.getRushBuyLogInfo();
    },
    getRushBuyLogInfo: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getRushBuyLogInfo",
            data: {
                id: t.data.id
            },
            success: function(a) {
                console.log(a.data.data), t.setData({
                    goods: a.data.data.goods,
                    address: a.data.data.address,
                    info: a.data.data.info,
                    avatar: a.data.data.avatar
                }), 0 == t.data.info.status && 0 == t.data.info.i_uid && (t.setData({
                    times_sum: t.data.info.times
                }), t.countDown()), t.getShareImg();
            }
        });
    },
    goRushBuyHome: function() {
        wx.navigateTo({
            url: "./rush-buy?come_share_id=" + this.data.come_share_id
        });
    },
    onGetaddress: function() {
        var a = this;
        wx.chooseAddress({
            success: function(t) {
                var e = [];
                e = {
                    name: t.userName,
                    tel: t.telNumber,
                    province: t.provinceName,
                    city: t.cityName,
                    county: t.countyName,
                    detail: t.detailInfo
                }, a.setData({
                    address: e
                }), console.log(a.data.address), a.updateRushbAddress();
            }
        });
    },
    updateRushbAddress: function() {
        var t = this, e = t.data.address;
        a.util.request({
            url: "entry/wxapp/updateRushbAddress",
            data: {
                id: t.data.id,
                name: e.name,
                province: e.province,
                city: e.city,
                county: e.county,
                detail: e.detail,
                tel: e.tel
            },
            success: function(a) {
                console.log(a.data.data), "ok" == a.data.message && wx.showToast({
                    title: "修改成功"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = this;
        if (0 == t.data.info.status && 0 == t.data.info.i_uid) {
            var e = a.globalData.setting.share_rushbuy_title ? a.globalData.setting.share_rushbuy_title : "一元购买,我在小程序里面用1元买了这个商品,赶紧下手哦", s = "/first_duoduoke/pages/rush-buy/rush-buy?log_id=" + t.data.info.id, o = t.data.goods.img ? t.data.goods.img : "";
            return {
                title: e,
                path: s + (void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
                imageUrl: o,
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
    }
});