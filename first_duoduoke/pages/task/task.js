var t = getApp();

Page({
    data: {
        navH: 0,
        goodsList: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        taskList: !1,
        uInfo: !1,
        videoAd: !1,
        appletKeyword: "",
        showtipOr: !1
    },
    viewVideoAd: function() {
        var t = this;
        t.data.videoAd && t.data.videoAd.show();
    },
    initVideoAd: function() {
        var o = this;
        !1 === o.data.videoAd && wx.createRewardedVideoAd && t.globalData.setting.video_ad_code && (o.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + t.globalData.setting.video_ad_code
        }), o.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), o.data.videoAd.onClose(function(a) {
            console.log("Video_AD Close OK ..."), console.log(a), a && a.isEnded || void 0 === a ? (console.log("watch OK ..."), 
            t.util.request({
                url: "entry/wxapp/watchVideoRewards",
                success: function(a) {
                    wx.showToast({
                        title: "领取成功",
                        icon: "success"
                    }), t.checkLogin(), o.getTaskList();
                }
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "视频没看完，看完视频才能得到任务奖励哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(t) {
                    t.confirm && o.data.videoAd && o.data.videoAd.show();
                },
                fail: function(t) {
                    console.log(t, "showModalErr");
                }
            }));
        }), o.data.videoAd.onError(function(t) {
            console.log(t, "VieoERR....");
        }));
    },
    getRunStep: function() {
        var o = this;
        wx.getWeRunData({
            success: function(a) {
                a.iv && t.util.request({
                    url: "entry/wxapp/EncryptRunStep",
                    data: {
                        iv: a.iv,
                        encryptedData: a.encryptedData
                    },
                    method: "POST",
                    success: function(a) {
                        wx.showToast({
                            title: "领取成功",
                            icon: "success"
                        }), o.disTaskByLabel(6), t.checkLogin();
                    }
                });
            }
        });
    },
    signIn: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/signIn",
            success: function(a) {
                wx.showToast({
                    title: "签到成功",
                    icon: "success"
                }), o.disTaskByLabel(2), t.checkLogin();
            }
        });
    },
    toPageTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
    },
    coinExCash: function() {
        if (t.globalData.userInfo) {
            t.util.request({
                url: "entry/wxapp/coinExCash",
                success: function(o) {
                    wx.showToast({
                        title: "兑换成功",
                        icon: "success"
                    }), t.checkLogin();
                }
            });
        } else t.checkLogin();
    },
    disTaskByLabel: function(t) {
        var o = this.data.taskList;
        for (var a in o) o[a].label == t && (o[a].dis = !0);
        this.setData({
            taskList: o
        });
    },
    showInfo: function() {
        t.showInfo(this, t.globalData.setting.task_rule_intro);
    },
    hideInfo: function() {
        t.hideInfo(this);
    },
    toCoupon: function() {
        wx.navigateTo({
            url: "../coupon/coupon"
        });
    },
    toInvite: function() {
        wx.navigateTo({
            url: "../invite/invite"
        });
    },
    toPartake: function() {
        wx.navigateTo({
            url: "../partake/partake"
        });
    },
    goIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    goRedeem: function() {
        wx.navigateTo({
            url: "../redeem/redeem"
        });
    },
    goRules: function() {
        wx.navigateTo({
            url: "./rules"
        });
    },
    toCash: function() {
        t.globalData.userInfo ? wx.navigateTo({
            url: "../cash/cash"
        }) : t.checkLogin();
    },
    sharetoFq: function() {
        t.checkLogin();
    },
    onLoad: function(o) {
        this.setData({
            navH: t.globalData.navHeight,
            appletKeyword: t.globalData.setting.appletKeyword,
            withdraw_open: t.globalData.setting.withdraw_open
        });
        var a = !!t.globalData.userInfo;
        this.setData({
            isLogin: a
        }), this.thisNav(), this.getRcommendGoods();
    },
    thisNav: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/getBottomNav",
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data;
                void 0 !== a.list.length && a.list.length < 1 ? wx.setTabBarStyle({
                    color: a.color,
                    selectedColor: a.selectedColor,
                    backgroundColor: a.backgroundColor,
                    borderStyle: a.borderStyle,
                    fail: function(t) {
                        console.log(t);
                    }
                }) : (wx.hideTabBar(), o.setData({
                    tabBar: t.data.data,
                    "tabBar.thisurl": o.__route__
                }));
            }
        });
    },
    getTaskList: function(o) {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getTaskList",
            showLoading: "function" == typeof o,
            success: function(e) {
                "function" == typeof o && (o(), t.checkLogin()), a.setData({
                    taskList: e.data.data,
                    taskLen: e.data.data.length
                }, function() {
                    for (var o in a.data.taskList) if (5 == a.data.taskList[o].label) {
                        "devtools" != t.platform && a.initVideoAd();
                        break;
                    }
                });
            }
        });
    },
    loginAfter: function(o) {
        t.loginAfter(o);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    getRcommendGoods: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/getRcommendGoods",
            showLoading: !(o.data.page < 2),
            data: {
                page: o.data.page
            },
            success: function(t) {
                console.log(t), t.data.data.length < 1 ? o.data.lastPage = !0 : (o.data.goodsList = 1 == o.data.page ? t.data.data : o.data.goodsList.concat(t.data.data), 
                o.setData({
                    goodsList: o.data.goodsList
                }), o.data.loading = !1);
            }
        });
    },
    toGoodsPage: function(t) {
        var o = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (o += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + o
        });
    },
    onReady: function() {},
    backTop: function(t) {
        wx.pageScrollTo ? wx.pageScrollTo({
            scrollTop: 0
        }) : console.log("当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。");
    },
    onShow: function() {
        t.checkLogin(), this.getTaskList();
    },
    confirmSmart: function() {
        t.confirmSmart(this);
    },
    hideSmart: function() {
        t.hideSmart(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getTaskList(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        !0 !== t.data.lastPage && !0 !== t.data.loading && (t.data.page++, t.data.loading = !0, 
        t.getRcommendGoods());
    },
    onShareAppMessage: function() {
        var o = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", a = t.globalData.setting.share_pic;
        return {
            title: o,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: a,
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