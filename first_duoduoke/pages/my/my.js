var t = getApp();

Page({
    data: {
        navH: 0,
        uInfo: !1,
        showLayer: !1,
        animationDataT: "",
        imgPath: t.getImgUrl(),
        showTips: !1,
        phone: !0,
        vip_skip_pic: "",
        interstitialAd: !1,
        show_once_firgure: !1
    },
    goGoodsTrack: function() {
        wx.navigateTo({
            url: "../track/track"
        });
    },
    showInfo: function() {
        t.showInfo(this, "1、绑定手机号码后，可以第一时间接受我们的官方通知、奖励活动、优惠信息等。\n2、不绑定手机号码，仍然可以正常使用，如果不需要通知请忽略绑定。");
    },
    hideInfo: function() {
        t.hideInfo(this);
    },
    goUserSub: function() {
        t.globalData.userInfo ? wx.navigateTo({
            url: "../submsg/submsg"
        }) : t.checkLogin();
    },
    onBindphone: function(o) {
        console.log(o);
        var a = this;
        o.detail.iv && t.util.request({
            url: "entry/wxapp/EncryptMobile",
            data: {
                iv: o.detail.iv,
                encryptedData: o.detail.encryptedData
            },
            method: "POST",
            cachetime: 0,
            success: function(o) {
                console.log(o);
                var e = o.data.data.phoneNumber;
                t.util.request({
                    url: "entry/wxapp/phoneAuthentication",
                    method: "POST",
                    data: {
                        phone: e
                    },
                    success: function(t) {
                        console.log("上传", t), a.setData({
                            phone: e
                        });
                    }
                });
            }
        });
    },
    goGoodsCollects: function() {
        wx.navigateTo({
            url: "../collects/collects"
        });
    },
    goLookOrders: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../orders/orders"
        });
    },
    showMonLayer: function() {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "ease",
            delay: 0
        });
        this.animation = t, t.translateY(-50).step(), this.setData({
            animationDataT: t.export(),
            showLayer: !0
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationDataT: t.export()
            });
        }.bind(this), 1);
        var o = this;
        setTimeout(function() {
            o.hideMonLayer();
        }, 2e3);
    },
    hideMonLayer: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            delay: 0
        });
        this.animation = t, t.translateY(-50).step(), this.setData({
            animationDataT: t.export()
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationDataT: t.export(),
                showLayer: !1
            });
        }.bind(this), 200);
    },
    goVip: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../guest/guest"
        });
    },
    goCash: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../cash/cash"
        });
    },
    goPartakeOf: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../partake/partake"
        });
    },
    goLookDetailed: function() {
        wx.navigateTo({
            url: "../detailed/detailed"
        });
    },
    goLookMethod: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../method/method"
        });
    },
    goLookSubordinate: function(o) {
        void 0 !== o.detail.formId && (console.log(o.detail.formId), t.formIds.push(o.detail.formId)), 
        wx.navigateTo({
            url: "../member/member"
        });
    },
    onLoad: function(o) {
        this.setData({
            navH: t.globalData.navHeight
        }), this.setData({
            adCode: t.globalData.setting.flower_ad_code,
            show_ad_switch: t.globalData.setting.show_ad_switch,
            vipSet: t.globalData.setting.vipSet,
            substitute_word: t.globalData.setting.substitute_word,
            vip_skip_pic: t.globalData.setting.vip_skip_pic,
            method_skip_pic: t.globalData.setting.method_skip_pic,
            withdraw_open: t.globalData.setting.withdraw_open,
            grid_ad_code: t.globalData.setting.grid_ad_code,
            my_serv_switch: t.globalData.setting.my_serv_switch
        }), this.thisNav(), this.getBdPhone();
        var a = this;
        1 == t.globalData.setting.show_ad_switch && "" != t.globalData.setting.figure_ad_code && wx.createInterstitialAd && (a.data.interstitialAd = wx.createInterstitialAd({
            adUnitId: "adunit-" + t.globalData.setting.figure_ad_code
        }), a.data.interstitialAd.onLoad(function() {
            console.log("插屏广告载入...");
        }), a.data.interstitialAd.onError(function(t) {
            console.log("插屏广告错误...", t);
        }), a.data.interstitialAd.onClose(function() {
            console.log("插屏广告关闭..."), !1 === a.data.show_once_firgure && (a.data.show_once_firgure = !0);
        }));
    },
    thisNav: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/getBottomNav",
            showLoading: !1,
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data;
                void 0 !== a.list.length && a.list.length < 1 ? wx.setTabBarStyle({
                    color: a.color,
                    selectedColor: a.selectedColor,
                    backgroundColor: a.backgroundColor,
                    borderStyle: 2 == a.borderStyle ? "black" : "white",
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
    loginAfter: function(o) {
        t.loginAfter(o);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    getBdPhone: function() {
        var o = this;
        t.util.request({
            url: "entry/wxapp/getBdPhone",
            success: function(t) {
                console.log("111", t);
                var a = t.data.data.phone;
                o.setData({
                    phone: a
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        t.checkLogin(), this.data.interstitialAd && !1 === this.data.show_once_firgure && this.data.interstitialAd.show().catch(function(t) {
            console.error(t, "插屏广告显示时发生错误...");
        });
    },
    confirmSmart: function() {
        t.confirmSmart(this);
    },
    hideSmart: function() {
        t.hideSmart(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
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