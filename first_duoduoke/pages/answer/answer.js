var e = getApp();

Page({
    data: {
        navH: 0,
        showReplyShade: !1,
        showMistakeShade: !1,
        showReplyShadeWin: !1,
        subjectList: [],
        subject: {},
        currentIndex: 0,
        imgPath: e.getImgUrl(),
        from_uid: 0,
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0,
        max_question_money: .3
    },
    getQuestionInfo: function() {
        var o = this;
        e.util.request({
            url: "entry/wxapp/getQuestionInfo",
            success: function(e) {
                console.log(e.data.data);
                var t = e.data.data;
                o.setData({
                    subjectList: t,
                    subject: t[0],
                    currentIndex: 1
                });
            }
        });
    },
    loginAfter: function(o) {
        e.loginAfter(o);
    },
    loginCancel: function() {
        e.loginCancel();
    },
    initVideoAd: function() {
        var o = this;
        !1 === o.data.videoAd && wx.createRewardedVideoAd && e.globalData.setting.video_ad_code && (o.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + e.globalData.setting.video_ad_code
        }), o.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), o.data.videoAd.onClose(function(e) {
            console.log("Video_AD Close OK ..."), console.log(e), e && e.isEnded || void 0 === e ? (console.log("watch OK ..."), 
            o.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能领奖哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(e) {
                    e.confirm && o.data.videoAd && o.data.videoAd.show();
                },
                fail: function(e) {
                    console.log(e, "showModalErr");
                }
            }));
        }), o.data.videoAd.onError(function(e) {
            console.log(e, "VieoERR....");
        }));
    },
    showWinIn: function() {
        this.setData({
            showReplyShadeWin: !1
        });
    },
    onLoad: function(o) {
        var t = o.from_uid ? o.from_uid : 0, a = e.globalData.setting.max_question_money ? e.globalData.setting.max_question_money : 0;
        0 != a && this.setData({
            max_question_money: .01 * a
        }), this.setData({
            navH: e.globalData.navHeight,
            video_ad_code: e.globalData.setting.video_ad_code,
            from_uid: t
        }), this.data.video_ad_code && "devtools" != e.platform && this.initVideoAd(), this.getQuestionInfo();
    },
    showImg: function(e) {
        console.log(e);
        var o = e.currentTarget.dataset.img;
        wx.previewImage({
            urls: [ o ],
            current: o
        });
    },
    navBack: function() {
        this.data.from_uid > 0 ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    confirmAnswer: function(o) {
        if (e.globalData.userInfo) {
            var t = o.currentTarget.dataset.index;
            console.log(this.data.subject.answers[t].fraction), 1 == this.data.subject.answers[t].fraction ? 9 == this.data.currentIndex ? this.setData({
                showReplyShadeWin: !0
            }) : this.setData({
                showReplyShade: !0
            }) : this.setData({
                showMistakeShade: !0
            });
        } else e.checkLogin();
    },
    goReceiveRewards: function() {
        var o = this;
        o.data.is_look_video && o.data.video_ad_code ? wx.showModal({
            title: "提示",
            content: "观看视频领取奖励",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "明天再来",
            success: function(e) {
                e.confirm && o.data.videoAd && o.data.videoAd.show();
            }
        }) : (wx.showLoading({
            title: "领取中"
        }), e.util.request({
            url: "entry/wxapp/goReceiveRewards",
            success: function(e) {
                console.log(e.data.data), setTimeout(function() {
                    wx.hideLoading();
                }, 2e3), "ok" === e.data.message ? wx.showToast({
                    title: "领取成功",
                    icon: "success"
                }) : wx.showToast({
                    title: e.data.message,
                    icon: "success"
                }), o.setData({
                    showReplyShadeWin: !1
                });
            }
        }));
    },
    chooseReplyShade: function() {
        var e = this;
        e.setData({
            showReplyShade: !1,
            currentIndex: e.data.currentIndex + 1
        });
        var o = e.data.currentIndex - 1;
        e.setData({
            subject: e.data.subjectList[o]
        });
    },
    chooseMistakeShade: function() {
        this.setData({
            showMistakeShade: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(o) {
        return {
            title: "快点来答题,可以领取现金哦!",
            path: "/first_duoduoke/pages/answer/answer" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: "",
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