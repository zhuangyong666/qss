var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        id: 0,
        shopred_id: 0,
        from_uid: 0,
        page: 1,
        lastPage: !1,
        list: [],
        times_sum: 0,
        timer: "",
        qgdjs_jo: {
            hour: "00",
            min: "00",
            sec: "00"
        },
        share_img: "",
        showExcrete: !0,
        excrete_money: 0,
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0
    },
    countDown: function() {
        var a = this;
        a.setData({
            timer: setInterval(function() {
                var o = a.data.times_sum;
                if (o <= 0) return a.setData({
                    qgdjs_jo: {
                        hour: "00",
                        min: "00",
                        sec: "00"
                    }
                }), void clearInterval(a.data.timer);
                var e = parseInt(o / 3600 % 24), t = parseInt(o / 60 % 60), d = parseInt(o % 60);
                e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), d < 10 && (d = "0" + d), a.setData({
                    qgdjs_jo: {
                        hour: e,
                        min: t,
                        sec: d
                    },
                    times_sum: a.data.times_sum - 1
                });
            }, 1e3)
        });
    },
    navBack: function() {
        this.data.shopred_id > 0 ? this.goIndex() : wx.navigateBack();
    },
    goIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    saveQrcodeToPhotosAlbum: function(a) {
        var o = this;
        wx.getImageInfo({
            src: o.data.share_img,
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
    loginAfter: function(o) {
        a.loginAfter(o);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    onLoad: function(a) {
        var o = a.id ? a.id : a.shopred_id, e = a.shopred_id ? a.shopred_id : 0, t = a.from_uid ? a.from_uid : 0;
        this.setData({
            id: o,
            shopred_id: e,
            from_uid: t
        }), this.getShopRedRw(), 0 == this.data.shopred_id && this.getShopRedSharePoster();
    },
    goExcreteShopRed: function() {
        var o = this;
        a.globalData.userInfo ? o.data.is_look_video && o.data.video_ad_code ? wx.showModal({
            title: "提示",
            content: "观看视频继续领取",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "放弃领取",
            success: function(a) {
                a.confirm && o.data.videoAd && o.data.videoAd.show();
            }
        }) : a.util.request({
            url: "entry/wxapp/goExcreteShopRed",
            data: {
                id: o.data.id,
                from_uid: o.data.from_uid
            },
            success: function(a) {
                console.log(a.data.data), "ok" == a.data.message && (o.setData({
                    showExcrete: !1,
                    excrete_money: a.data.data
                }), o.getShopRedRw());
            }
        }) : a.checkLogin();
    },
    getShopRedSharePoster: function() {
        var o = this;
        a.util.request({
            url: "entry/wxapp/getShopRedSharePoster",
            data: {
                id: o.data.id
            },
            success: function(a) {
                console.log(a.data.data), o.setData({
                    share_img: a.data.data
                });
            }
        });
    },
    getShopRedRw: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", t = this;
        a.util.request({
            url: "entry/wxapp/getShopRedRw",
            data: {
                id: t.data.id,
                page: t.data.page,
                from_uid: t.data.from_uid
            },
            showLoading: !1,
            success: function(d) {
                console.log(d.data.data), "function" == typeof o && o(), "append" == e && d.data.data.lq_info.length < 1 ? t.setData({
                    lastPage: !0
                }) : (d.data.data.lq_info = 1 == t.data.page ? d.data.data.lq_info : t.data.list.lq_info.concat(d.data.data.lq_info), 
                t.setData({
                    video_ad_code: d.data.data.setting.video_ad_code,
                    list: d.data.data,
                    times_sum: d.data.data.countdown,
                    excrete_money: d.data.data.lq_result
                }), t.data.video_ad_code && "devtools" != a.platform && t.initVideoAd(), t.data.excrete_money > 0 && t.setData({
                    showExcrete: !1
                }), t.countDown());
            }
        });
    },
    initVideoAd: function() {
        var a = this;
        !1 === a.data.videoAd && wx.createRewardedVideoAd && a.data.video_ad_code && (a.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + a.data.video_ad_code
        }), a.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), a.data.videoAd.onClose(function(o) {
            console.log("Video_AD Close OK ..."), console.log(o), o && o.isEnded || void 0 === o ? (console.log("watch OK ..."), 
            a.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能领取哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(o) {
                    o.confirm && a.data.videoAd && a.data.videoAd.show();
                },
                fail: function(a) {
                    console.log(a, "showModalErr");
                }
            }));
        }), a.data.videoAd.onError(function(a) {
            console.log(a, "VieoERR....");
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getShopRedRw(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage) return !1;
        a.data.page++, a.getShopRedRw("", "append");
    },
    onShareAppMessage: function() {
        var o = this, e = a.globalData.setting.share_shopred_title ? a.globalData.setting.share_shopred_title : "购物立得红包", t = "/first_duoduoke/pages/shopping-red-envelopes/red-envelopes-main?shopred_id=" + o.data.id, d = o.data.share_img ? o.data.share_img : "";
        return {
            title: e,
            path: t + (void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: d,
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