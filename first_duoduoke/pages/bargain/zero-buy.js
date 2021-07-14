var o = getApp();

Page({
    data: {
        navH: o.globalData.navHeight,
        onShowShareShade: !1,
        imgPath: o.getImgUrl(),
        list: [],
        address: [],
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onShowShareShade: function() {
        this.setData({
            showShareShade: !this.data.showShareShade
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    loginAfter: function(e) {
        o.loginAfter(e);
    },
    loginCancel: function() {
        o.loginCancel();
    },
    showInfo: function() {
        o.showInfo(this, o.globalData.setting.zerobuy_rule_intro);
    },
    hideInfo: function() {
        o.hideInfo(this);
    },
    initVideoAd: function() {
        var o = this;
        !1 === o.data.videoAd && wx.createRewardedVideoAd && o.data.video_ad_code && (o.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + o.data.video_ad_code
        }), o.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), o.data.videoAd.onClose(function(e) {
            console.log("Video_AD Close OK ..."), console.log(e), e && e.isEnded || void 0 === e ? (console.log("watch OK ..."), 
            o.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能抢哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(e) {
                    e.confirm && o.data.videoAd && o.data.videoAd.show();
                },
                fail: function(o) {
                    console.log(o, "showModalErr");
                }
            }));
        }), o.data.videoAd.onError(function(o) {
            console.log(o, "VieoERR....");
        }));
    },
    onLoad: function(o) {
        this.getZeroInfo();
    },
    switchChange: function(o) {
        0 == o.detail.value ? wx.showToast({
            title: "取消提醒",
            icon: "success",
            duration: 1e3
        }) : wx.showToast({
            title: "打开提醒",
            icon: "success",
            duration: 1e3
        });
    },
    getZeroBuyPoster: function() {
        var e = this;
        o.globalData.userInfo ? o.util.request({
            url: "entry/wxapp/getZeroBuyPoster",
            data: {
                img: e.data.list[0].img,
                title: e.data.list[0].title
            },
            showLoading: !1,
            success: function(o) {
                e.setData({
                    share_img: o.data.data,
                    showShareShade: !0
                });
            }
        }) : o.checkLogin();
    },
    saveQrcodeToPhotosAlbum: function(o) {
        var e = this;
        wx.getImageInfo({
            src: e.data.share_img,
            success: function(o) {
                console.log(o), wx.saveImageToPhotosAlbum({
                    filePath: o.path,
                    success: function(o) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(o) {
                        console.log(o);
                    }
                });
            }
        });
    },
    getZeroInfo: function() {
        var e = this;
        o.util.request({
            url: "entry/wxapp/getZeroInfo",
            showLoading: !1,
            success: function(o) {
                e.setData({
                    list: o.data.data.list,
                    video_ad_code: o.data.data.setting.video_ad_code
                }), e.data.video_ad_code && e.initVideoAd();
            }
        });
    },
    fillAddress: function(o) {
        var e = o.currentTarget.dataset.this_id, t = o.currentTarget.dataset.this_img, a = o.currentTarget.dataset.this_title, i = this;
        i.data.is_look_video && i.data.video_ad_code ? wx.showModal({
            title: "提示",
            content: "观看视频抢免费商品",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "放弃抢购",
            success: function(o) {
                o.confirm && i.data.videoAd && i.data.videoAd.show();
            }
        }) : wx.chooseAddress({
            success: function(o) {
                var n = [];
                n = {
                    userName: o.userName,
                    tel: o.telNumber,
                    provinceName: o.provinceName,
                    cityName: o.cityName,
                    countyName: o.countyName,
                    detailInfo: o.detailInfo
                }, i.setData({
                    address: n,
                    this_id: e,
                    this_img: t,
                    this_title: a
                }), console.log(i.data.address), i.goZeroBuyThis();
            }
        });
    },
    goZeroBuyThis: function() {
        if (o.globalData.userInfo) {
            var e = this, t = e.data.address;
            o.util.request({
                url: "entry/wxapp/goZeroBuyThis",
                showLoading: !1,
                data: {
                    this_id: e.data.this_id,
                    this_img: e.data.this_img,
                    this_title: e.data.this_title,
                    name: t.userName,
                    province: t.provinceName,
                    city: t.cityName,
                    county: t.countyName,
                    detail: t.detailInfo,
                    tel: t.tel
                },
                success: function(o) {
                    console.log(o.data.data), "ok" == o.data.message ? wx.showToast({
                        title: "抢购成功",
                        icon: "success",
                        duration: 2e3
                    }) : wx.showToast({
                        title: o.data.message,
                        icon: "none",
                        duration: 2e3
                    }), e.getZeroInfo();
                }
            });
        } else o.checkLogin();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: o.globalData.setting.share_zerobuy_title ? o.globalData.setting.share_zerobuy_title : "s全额返还，超级0元购，免费商品等你来抢!",
            path: "/first_duoduoke/pages/bargain/zero-buy" + (void 0 !== o.globalData.userInfo.uid ? "?from_uid=" + o.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: "",
            success: function(o) {
                "shareAppMessage:ok" == o.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(o) {
                "shareAppMessage:fail cancel" == o.errMsg || o.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});