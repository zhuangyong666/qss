var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        showNavcolor: !1,
        skip_id: 1,
        id: 0,
        from_uid: 0,
        info: "",
        goods: !1,
        cylist: !1,
        cy_page: 1,
        cy_lastpage: !1,
        cy: 0,
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0
    },
    toDuoDuo: function() {
        var o = this;
        a.globalData.userInfo ? wx.navigateToMiniProgram({
            appId: o.data.goods.appid,
            path: o.data.goods.page_path,
            success: function(a) {
                console.log("ok");
            }
        }) : a.checkLogin();
    },
    loginAfter: function(o) {
        a.loginAfter(o);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onPageScroll: function(a) {
        a.scrollTop >= 150 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    toEveryday: function() {
        0 == this.data.from_uid ? wx.navigateBack() : wx.navigateTo({
            url: "every-day"
        });
    },
    showGoodsPicc: function(a) {
        var o = a.target.dataset.index, t = this.data.goods;
        wx.previewImage({
            current: t.goods_gallery_urls[o],
            urls: t.goods_gallery_urls
        });
    },
    onLoad: function(a) {
        var o = this;
        wx.getSystemInfo({
            success: function(t) {
                o.setData({
                    width: t.windowWidth,
                    height: t.windowHeight,
                    id: a.id,
                    from_uid: a.from_uid ? a.from_uid : 0
                });
            }
        }), o.getEveryDayGd(), o.getCyLotteryDraw();
    },
    goCyLuckDraw: function() {
        if (a.globalData.userInfo) {
            var o = this;
            o.data.is_look_video && o.data.video_ad_code ? wx.showModal({
                title: "提示",
                content: "观看视频参加抽奖",
                showCancel: !0,
                confirmColor: "#f43f6c",
                cancelColor: "#bbb",
                confirmText: "观看视频",
                cancelText: "放弃抽奖",
                success: function(a) {
                    a.confirm && o.data.videoAd && o.data.videoAd.show();
                }
            }) : a.util.request({
                url: "entry/wxapp/goCyLuckDraw",
                showLoading: !1,
                data: {
                    id: o.data.id
                },
                success: function(a) {
                    console.log(a.data.data), "ok" == a.data.message && (o.setData({
                        cy_page: 1,
                        cy_lastpage: !1
                    }), wx.showToast({
                        title: "参与成功",
                        icon: "success",
                        duration: 2e3
                    }), o.getEveryDayGd(), o.getCyLotteryDraw());
                }
            });
        } else a.checkLogin();
    },
    getChange: function(a) {
        var o = a.currentTarget.dataset.add;
        if (0 == o) {
            if (1 == this.data.cy_page) return;
            this.data.cy_page > 1 && (this.data.cy_page--, this.setData({
                cy_lastpage: !1
            }));
        } else 1 == o && (this.data.cy_lastpage || this.data.cy_page++);
        this.getCyLotteryDraw();
    },
    getCyLotteryDraw: function() {
        var o = this;
        o.data.cy_lastpage || a.util.request({
            url: "entry/wxapp/getCyLotteryDraw",
            showLoading: !1,
            data: {
                id: o.data.id,
                page: o.data.cy_page
            },
            success: function(a) {
                console.log(a.data.data), "" != a.data.data ? o.setData({
                    cylist: a.data.data
                }) : (o.data.cy_page--, o.setData({
                    cy_lastpage: !0
                }));
            }
        });
    },
    getEveryDayGd: function() {
        var o = this;
        a.util.request({
            url: "entry/wxapp/getEveryDayGd",
            showLoading: !1,
            data: {
                id: o.data.id,
                from_uid: o.data.from_uid
            },
            success: function(t) {
                console.log(t.data.data), o.setData({
                    info: t.data.data,
                    video_ad_code: t.data.data.setting.video_ad_code
                }), o.data.video_ad_code && "devtools" != a.platform && o.initVideoAd(), o.getGoodsDetail();
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
                content: "看完视频才能参与哦~~~",
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
    getGoodsDetail: function() {
        var o = this;
        switch (parseInt(o.data.info.source)) {
          case 1:
            var t = "entry/wxapp/getGoodsDetail", e = {
                goods_id: o.data.info.goods_id,
                goods_sign: o.data.info.goods_sign
            };
            break;

          case 2:
            var t = "entry/wxapp/getJdDetail", e = {
                goods_id: o.data.info.goods_id
            };
            break;

          case 3:
            var t = "entry/wxapp/getMgDetail", e = {
                goods_url: encodeURIComponent(o.data.info.goods_url),
                goods_id: o.data.info.goods_id
            };
            break;

          case 4:
            var t = "entry/wxapp/getVipDetail", e = {
                goods_id: o.data.info.goods_id
            };
            break;

          case 5:
            var t = "entry/wxapp/getSnDetail", e = {
                goods_url: o.data.info.goods_url,
                goods_id: o.data.info.goods_id
            };
        }
        a.util.request({
            url: t,
            data: e,
            success: function(a) {
                console.log(a);
                var t = a.data.data;
                o.setData({
                    goods: t
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
        var o = this;
        {
            if (a.globalData.userInfo) {
                var t = a.globalData.userInfo.nickName + "邀请您免费抽奖得" + o.data.goods.goods_name + ",快点来抽奖吧!", e = "/first_duoduoke/pages/every-day/every-day-GD?id=" + o.data.id, d = o.data.goods.goods_image_url ? o.data.goods.goods_image_url : "";
                return {
                    title: t,
                    path: e + (void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
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
            a.checkLogin();
        }
    }
});