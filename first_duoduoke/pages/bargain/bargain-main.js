var t = getApp();

Page({
    data: {
        redEnvelopeList0: [ {
            text: "0"
        }, {
            text: "1"
        }, {
            text: "2"
        }, {
            text: "3"
        }, {
            text: "4"
        }, {
            text: "5"
        }, {
            text: "6"
        }, {
            text: "7"
        }, {
            text: "8"
        }, {
            text: "9",
            prize: !0
        } ],
        redEnvelopeList1: [ {
            text: "0"
        }, {
            text: "1"
        }, {
            text: "2"
        }, {
            text: "3"
        }, {
            text: "4"
        }, {
            text: "5"
        }, {
            text: "6"
        }, {
            text: "7"
        }, {
            text: "8"
        }, {
            text: "9",
            prize: !0
        } ],
        redEnvelopeList2: [ {
            text: "0"
        }, {
            text: "1"
        }, {
            text: "2"
        }, {
            text: "3"
        }, {
            text: "4"
        }, {
            text: "5"
        }, {
            text: "6"
        }, {
            text: "7"
        }, {
            text: "8"
        }, {
            text: "9",
            prize: !0
        } ],
        redEnvelopeList3: [ {
            text: "0"
        }, {
            text: "1"
        }, {
            text: "2"
        }, {
            text: "3"
        }, {
            text: "4"
        }, {
            text: "5"
        }, {
            text: "6"
        }, {
            text: "7"
        }, {
            text: "8"
        }, {
            text: "9",
            prize: !0
        } ],
        animation0: 0,
        animation1: 0,
        animation2: 0,
        animation3: 0,
        time0: 2,
        time1: 3.2,
        time2: 4.2,
        time3: 5.2,
        navH: t.globalData.navHeight,
        onShowShareShade: !1,
        showLight: !1,
        showCutpriceBTN: !1,
        page: 1,
        lastPage: !1,
        hotGoodsList: !1,
        bargainList: !1,
        qgdjs_jo: {
            hour: "00",
            min: "00",
            sec: "00"
        },
        times_sum: 86400,
        timer: "",
        id: 0,
        f_uid: 0,
        br_id: 0,
        this_goods: [],
        bargain_sum: 0,
        bargain_surplus_sum: 0,
        finish_info: !1,
        percent: 0,
        overtime: 0,
        v: 0,
        b: 0,
        n: 0,
        m: 0,
        is_win: 0,
        go_address: 0,
        address: [],
        imgPath: t.getImgUrl(),
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0,
        barginloading: !1
    },
    hideOver: function() {
        this.setData({
            overtime: 0
        });
    },
    hideOverThis: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toZeroBuy: function() {
        wx.navigateTo({
            url: "./zero-buy"
        });
    },
    onShowShareShade: function() {
        this.setData({
            showShareShade: !this.data.showShareShade
        });
    },
    navBack: function() {
        this.data.f_uid > 0 ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    start: function() {
        var a = this;
        t.globalData.userInfo ? a.data.is_look_video && a.data.video_ad_code ? wx.showModal({
            title: "提示",
            content: "观看视频继续砍价",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "放弃砍价",
            success: function(t) {
                t.confirm && a.data.videoAd && a.data.videoAd.show();
            }
        }) : (a.data.barginloading = !0, t.util.request({
            url: "entry/wxapp/bargainSelfCut",
            data: {
                f_uid: a.data.f_uid,
                b_id: a.data.this_goods.id,
                bargain_surplus_sum: a.data.bargain_surplus_sum
            },
            success: function(t) {
                if ("ok" == t.data.message) {
                    a.setData({
                        kNum: t.data.data
                    });
                    var e = a.data.kNum.split(".");
                    if (e[0] < 10) a.setData({
                        v: 0,
                        b: e[0]
                    }); else {
                        var o = e[0].split("");
                        a.setData({
                            v: o[0],
                            b: o[1]
                        });
                    }
                    var i = e[1].split("");
                    a.setData({
                        n: i[0],
                        m: i[1]
                    }), a.setData({
                        animation0: 1440 - Number(36 * a.data.v),
                        animation1: 1440 - Number(36 * a.data.b),
                        animation2: 1440 - Number(36 * a.data.n),
                        animation3: 1440 - Number(36 * a.data.m)
                    }), setTimeout(function() {
                        a.setData({
                            showLight: !0
                        }), a.bargainResult();
                    }, 5200);
                } else wx.showModal({
                    title: "提示",
                    cancelText: "回首页",
                    content: t.data.message,
                    success: function(t) {
                        t.confirm ? console.log("用户点击确定") : t.cancel && wx.switchTab({
                            url: "../index/index"
                        });
                    }
                });
                a.data.barginloading = !1;
            }
        })) : t.checkLogin();
    },
    bargainResult: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/bargainResult",
            showLoading: !1,
            data: {
                k_num: a.data.kNum,
                br_id: a.data.br_id,
                f_uid: a.data.f_uid
            },
            success: function(t) {
                "" != t.data.data && a.setData({
                    is_win: 1
                }), "ok" == t.data.message && (a.bargainMain(), a.setData({
                    showCutpriceBTN: !1
                }));
            }
        });
    },
    countDown: function() {
        var t = this;
        t.setData({
            timer: setInterval(function() {
                var a = t.data.times_sum;
                if (a <= 0) return t.setData({
                    qgdjs_jo: {
                        hour: "00",
                        min: "00",
                        sec: "00"
                    }
                }), void clearInterval(t.data.timer);
                var e = parseInt(a / 3600 % 24), o = parseInt(a / 60 % 60), i = parseInt(a % 60);
                e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), t.setData({
                    qgdjs_jo: {
                        hour: e,
                        min: o,
                        sec: i
                    },
                    times_sum: t.data.times_sum - 1
                });
            }, 1e3)
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    initVideoAd: function() {
        var t = this;
        !1 === t.data.videoAd && wx.createRewardedVideoAd && t.data.video_ad_code && (t.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + t.data.video_ad_code
        }), t.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), t.data.videoAd.onClose(function(a) {
            console.log("Video_AD Close OK ..."), console.log(a), a && a.isEnded || void 0 === a ? (console.log("watch OK ..."), 
            t.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能砍价哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(a) {
                    a.confirm && t.data.videoAd && t.data.videoAd.show();
                },
                fail: function(t) {
                    console.log(t, "showModalErr");
                }
            }));
        }), t.data.videoAd.onError(function(t) {
            console.log(t, "VieoERR....");
        }));
    },
    onLoad: function(a) {
        var e = this, o = a.from_uid ? a.from_uid : 0, i = a.br_id ? a.br_id : 0;
        e.setData({
            id: a.id,
            f_uid: o,
            br_id: i,
            zerobuy_switch: t.globalData.setting.zerobuy_switch
        }), e.bargainMain(), e.getHotGoods();
    },
    fillAddress: function() {
        var t = this;
        wx.chooseAddress({
            success: function(a) {
                var e = [];
                e = {
                    userName: a.userName,
                    tel: a.telNumber,
                    provinceName: a.provinceName,
                    cityName: a.cityName,
                    countyName: a.countyName,
                    detailInfo: a.detailInfo
                }, t.setData({
                    address: e
                }), console.log(t.data.address), t.updateBargainAddress();
            }
        });
    },
    updateBargainAddress: function() {
        var a = this, e = a.data.address;
        console.log(e), t.util.request({
            url: "entry/wxapp/updateBargainAddress",
            data: {
                id: a.data.this_goods.id,
                name: e.userName,
                province: e.provinceName,
                city: e.cityName,
                county: e.countyName,
                detail: e.detailInfo,
                tel: e.tel
            },
            success: function(t) {
                console.log(t.data.data), "ok" == t.data.message && (wx.showToast({
                    title: "添加地址成功"
                }), a.bargainMain());
            }
        });
    },
    saveQrcodeToPhotosAlbum: function(t) {
        var a = this;
        wx.getImageInfo({
            src: a.data.posterImg,
            success: function(t) {
                console.log(t), wx.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function(t) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    },
    getBargainPoster: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getBargainPoster",
            showLoading: !1,
            data: {
                b_id: a.data.this_goods.id,
                br_id: a.data.this_goods.br_id
            },
            success: function(t) {
                console.log(t.data.data), a.setData({
                    posterImg: t.data.data
                });
            }
        });
    },
    bargainMain: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getBargainMain",
            showLoading: !1,
            data: {
                id: a.data.id,
                f_uid: a.data.f_uid,
                br_id: a.data.br_id,
                is_win: a.data.is_win
            },
            success: function(e) {
                a.setData({
                    video_ad_code: e.data.data.setting.video_ad_code,
                    times_sum: e.data.data.this_goods.stop_time,
                    this_goods: e.data.data.this_goods,
                    bargain_sum: e.data.data.bargain_sum,
                    bargain_surplus_sum: e.data.data.bargain_surplus_sum,
                    bargainList: e.data.data.bargain_info,
                    finish_info: e.data.data.goods_info,
                    percent: e.data.data.bargain_sum / e.data.data.this_goods.price * 100,
                    overtime: e.data.data.is_overtime,
                    go_address: e.data.data.go_address ? e.data.data.go_address : 0
                }, function() {
                    a.data.br_id > 0 && a.setData({
                        showCutpriceBTN: !0
                    });
                }), a.data.video_ad_code && "devtools" != t.platform && a.initVideoAd(), 0 == a.data.go_address && a.countDown(), 
                a.getBargainPoster();
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    getHotGoods: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", o = this;
        t.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: o.data.page,
                sort_type: 0
            },
            success: function(t) {
                if (console.log(t.data.data), "function" == typeof a && a(), "append" == e) {
                    if (t.data.data.length < 1) return;
                    return o.data.hotGoodsList = 1 == o.data.page ? t.data.data : o.data.hotGoodsList.concat(t.data.data), 
                    o.setData({
                        hotGoodsList: o.data.hotGoodsList
                    }), !1;
                }
                o.setData({
                    hotGoodsList: t.data.data
                });
            }
        });
    },
    toOtherGoods: function(t) {
        var a = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (a += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getHotGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getHotGoods("", "append");
    },
    onShareAppMessage: function() {
        var a = "[" + t.globalData.userInfo.nickName + "@我]就差你这一刀了，赶快来帮我砍~", e = "/first_duoduoke/pages/bargain/bargain-main?br_id=" + this.data.this_goods.br_id, o = this.data.this_goods.share_img ? this.data.this_goods.share_img : "";
        return {
            title: a,
            path: e + (void 0 !== t.globalData.userInfo.uid ? "&from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: o,
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