var o = getApp();

Page({
    data: {
        navH: o.globalData.navHeight,
        phone_type: "",
        showNavcolor: !1,
        showBox: !1,
        pitch: !0,
        uInfo: !1,
        people_num: 0,
        people_glob: 0,
        yesterday_info: !1,
        yesterday_fast: !1,
        is_cy: 0,
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0,
        showTip: !1,
        is_tod: !1,
        tod: ""
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    goTask: function() {
        wx.switchTab({
            url: "../task/task"
        });
    },
    onPageScroll: function(o) {
        o.scrollTop >= 40 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    onChangepitch: function() {
        var o = this;
        o.setData({
            pitch: !o.data.pitch
        });
    },
    showInfo: function() {
        o.showInfo(this, o.globalData.setting.morning_rule_intro);
    },
    hideInfo: function() {
        o.hideInfo(this);
    },
    loginAfter: function(t) {
        o.loginAfter(t);
    },
    loginCancel: function() {
        o.loginCancel();
    },
    onLoad: function(t) {
        var n = this;
        wx.getSystemInfo({
            success: function(o) {
                console.log(o.screenWidth), o.screenWidth <= 320 && n.setData({
                    phone_type: "iPhone5"
                });
            }
        }), n.setData({
            morning_enroll_cost: o.globalData.setting.morning_enroll_cost,
            video_ad_code: o.globalData.setting.video_ad_code
        }), n.data.video_ad_code && "devtools" != o.platform && n.initVideoAd(), n.getMorningInfo();
    },
    initVideoAd: function() {
        var t = this;
        !1 === t.data.videoAd && wx.createRewardedVideoAd && o.globalData.setting.video_ad_code && (t.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + o.globalData.setting.video_ad_code
        }), t.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), t.data.videoAd.onClose(function(o) {
            console.log("Video_AD Close OK ..."), console.log(o), o && o.isEnded || void 0 === o ? (console.log("watch OK ..."), 
            t.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能打卡哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(o) {
                    o.confirm && t.data.videoAd && t.data.videoAd.show();
                },
                fail: function(o) {
                    console.log(o, "showModalErr");
                }
            }));
        }), t.data.videoAd.onError(function(o) {
            console.log(o, "VieoERR....");
        }));
    },
    beginDkThis: function() {
        var t = this;
        o.globalData.userInfo ? 3 == t.data.is_cy ? t.data.is_look_video && t.data.videoAd ? wx.showModal({
            title: "提示",
            content: "观看视频去打卡",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "放弃打卡",
            success: function(o) {
                o.confirm && t.data.videoAd.show();
            }
        }) : o.util.request({
            url: "entry/wxapp/getMorningDkThis",
            showLoading: !1,
            success: function(o) {
                "ok" == o.data.message && (wx.showToast({
                    title: "打卡成功",
                    icon: "success",
                    duration: 2e3
                }), t.getMorningInfo());
            }
        }) : wx.showToast({
            title: "请在指定时间进行打卡",
            icon: "none",
            duration: 2e3
        }) : o.checkLogin();
    },
    getMorningInfo: function(t) {
        var n = this;
        o.util.request({
            url: "entry/wxapp/getMorningInfo",
            showLoading: !1,
            success: function(o) {
                console.log(o.data.data), "function" == typeof t && t();
                var e = o.data.data;
                n.setData({
                    uInfo: e.uInfo,
                    people_glob: e.people_glob,
                    people_num: e.people_num,
                    tod: e.tod,
                    yesterday_info: e.yesterday_info,
                    yesterday_fast: e.yesterday_fast,
                    is_cy: e.is_cy,
                    people_dkimgs: e.people_dkimgs
                }), n.showMorningResult();
            }
        });
    },
    showMorningResult: function() {
        var t = this;
        o.util.request({
            url: "entry/wxapp/showMorningResult",
            showLoading: !1,
            success: function(o) {
                console.log(o.data.data), "no" != o.data.message ? t.setData({
                    is_tod: o.data.data,
                    showTip: !0
                }) : t.setData({
                    is_tod: !1,
                    showTip: !1
                });
            }
        });
    },
    showBox: function() {
        var t = this;
        o.globalData.userInfo ? o.util.request({
            url: "entry/wxapp/getEnrollMorning",
            showLoading: !1,
            success: function(o) {
                console.log(o.data.data), "ok" == o.data.message ? (t.setData({
                    showBox: !0
                }), wx.showToast({
                    title: "报名成功",
                    icon: "success",
                    duration: 1e3
                }), t.getMorningInfo()) : wx.showToast({
                    title: "报名失败," + o.data.message,
                    icon: "none",
                    duration: 2e3
                });
            }
        }) : o.checkLogin();
    },
    hideBox: function() {
        this.setData({
            showBox: !1
        }), this.data.pitch && o.checkUserSub(6, !0);
    },
    hideTip: function() {
        this.setData({
            showTip: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getMorningInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {}
});