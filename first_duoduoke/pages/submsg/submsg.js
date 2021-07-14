var t = getApp();

Page({
    data: {
        navH: 0,
        subList: [ {
            title: "优惠券领取通知",
            tip: "商品优惠券信息群发通知",
            key: 1
        }, {
            title: "下级关系绑定通知",
            tip: "您的好友成为您的下级时，发送消息提醒",
            key: 2
        }, {
            title: "提现审核结果通知",
            tip: "提现审核结果会自动发送给您",
            key: 3
        }, {
            title: "佣金入账提醒通知",
            tip: "当您有佣金入账时会为发送入账提醒",
            key: 4
        }, {
            title: "佣金结算消息通知",
            tip: "您的佣金进入结算账户发送结算提醒",
            key: 5
        }, {
            title: "早起打卡消息通知",
            tip: "报名打卡后，为您发送打卡提醒通知",
            key: 6
        } ],
        showTip: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(e) {
        this.setData({
            navH: t.globalData.navHeight
        }), this.getUserSub(0);
    },
    getUserSetting: function() {
        wx.getSetting({
            withSubscriptions: !0,
            success: function(t) {
                console.log(t.authSetting), console.log(t.subscriptionsSetting);
            }
        });
    },
    getUserSub: function(e, s) {
        var o = this;
        t.util.request({
            url: t.util.url("entry/wxapp/getUserSub"),
            showLoading: !1,
            data: {
                key: e
            },
            method: "POST",
            success: function(t) {
                "function" == typeof s && s(), console.log(t);
                var e = o.data.subList, n = t.data.data;
                for (var i in e) for (var a in n) e[i].key == a && (e[i].count = n[a][0]);
                o.setData({
                    subList: e
                });
            }
        });
    },
    updateUserSub: function(e) {
        var s = this;
        t.util.request({
            url: t.util.url("entry/wxapp/subUserMsg"),
            showLoading: !1,
            method: "POST",
            data: {
                key: e
            },
            success: function(t) {
                s.getUserSub(e);
            }
        });
    },
    submsg: function(e) {
        var s = e.currentTarget.dataset.key, o = "";
        switch (s) {
          case 1:
            o = t.globalData.setting.batch_tempid;
            break;

          case 2:
            o = t.globalData.setting.bind_tempid;
            break;

          case 3:
            o = t.globalData.setting.withdrawal_tempid;
            break;

          case 4:
            o = t.globalData.setting.booked_tempid;
            break;

          case 5:
            o = t.globalData.setting.settle_tempid;
            break;

          case 6:
            o = t.globalData.setting.morning_tempid;
        }
        var n = this;
        wx.requestSubscribeMessage({
            tmplIds: [ o ],
            success: function(t) {
                console.log(t);
                for (var e in t) {
                    if ("reject" == t[e] || "ban" == t[e]) {
                        wx.showToast({
                            title: "订阅失败",
                            icon: "none"
                        }), wx.openSetting({
                            withSubscriptions: !0,
                            success: function(t) {
                                console.log(t.authSetting);
                            }
                        });
                        break;
                    }
                    if ("accept" == t[e]) {
                        wx.showToast({
                            title: "订阅成功",
                            icon: "success"
                        }), n.updateUserSub(s);
                        break;
                    }
                }
            },
            fail: function(e) {
                console.log(e), 20004 == e.errCode ? wx.showModal({
                    title: "系统提示",
                    content: "请转至“授权设置”页面打开订阅消息主开关",
                    confirmColor: "#f43f6c",
                    confirmText: "去打开",
                    showCancel: !1,
                    success: function(t) {
                        wx.openSetting({
                            withSubscriptions: !0,
                            success: function() {}
                        });
                    }
                }) : wx.showToast({
                    title: "订阅异常：" + e.errCode + " " + e.errMsg,
                    icon: "none"
                }), t.util.request({
                    url: t.util.url("entry/wxapp/reportSubErr"),
                    showLoading: !1,
                    method: "POST",
                    data: {
                        err_code: e.errCode,
                        err_msg: e.errMsg,
                        system: t.system
                    },
                    success: function(t) {}
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this;
        setTimeout(function() {
            t.setData({
                showTip: !0
            });
        }, 1e3);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getUserSub(0, function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        return {
            title: t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱",
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: imgUrl,
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