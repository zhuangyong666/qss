var a = getApp();

Page({
    data: {
        navH: 0,
        uInfo: !1,
        money: "",
        btnDis: !1,
        focus: !1,
        min_withdrawal_money: 0,
        withdrawal_method: 0
    },
    showInfo: function() {
        a.showInfo(this, a.globalData.setting.withdrawl_rule_intro);
    },
    hideInfo: function() {
        a.hideInfo(this);
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    choosePic: function(t) {
        if (a.globalData.userInfo) {
            t.currentTarget.dataset.field;
            var o = this;
            wx.chooseImage({
                count: 1,
                sizeType: [ "compressed" ],
                sourceType: [ "album" ],
                success: function(t) {
                    var e = t.tempFilePaths[0];
                    wx.compressImage({
                        src: e,
                        quality: 80,
                        complete: function() {
                            wx.uploadFile({
                                url: a.util.url("entry/wxapp/uploadTempPic"),
                                filePath: e,
                                name: "pic",
                                header: {
                                    "content-type": "multipart/form-data"
                                },
                                success: function(a) {
                                    console.log(a), 0 == (a = JSON.parse(a.data)).errno ? o.setData({
                                        withdrawal_qrcode: a.data.path
                                    }) : wx.showToast({
                                        title: a.message,
                                        icon: "none",
                                        duration: 2e3
                                    });
                                }
                            });
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    setMoney: function(a) {
        var t = a.detail.value;
        if (100 * t > 100 * this.data.uInfo.money) this.wholeMoney(); else {
            if (-1 != t.indexOf(".")) for (var o = [ [ "^0(\\d+)$", "$1" ], [ "[^\\d\\.]+$", "" ], [ "\\.(\\d?)\\.+", ".$1" ], [ "^(\\d+\\.\\d{2}).+", "$1" ] ], e = 0; e < o.length; e++) {
                var n = new RegExp(o[e][0]);
                t = t.replace(n, o[e][1]);
            }
            this.setData({
                money: t
            });
        }
    },
    wholeMoney: function() {
        this.setData({
            money: parseFloat(this.data.uInfo.money),
            focus: !1
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(t) {
        console.log("options", t), this.setData({
            navH: a.globalData.navHeight
        }), a.globalData.userInfo && this.setData({
            uInfo: a.globalData.userInfo
        }), this.setData({
            withdrawal_apply_rate: a.globalData.setting.withdrawal_apply_rate,
            withdrawal_apply_switch: a.globalData.setting.withdrawal_apply_switch,
            withdrawal_method: a.globalData.setting.withdrawal_method,
            withdrawal_apply_open: a.globalData.setting.withdrawal_apply_open,
            min_withdrawal_money: a.globalData.setting.min_withdrawal_money
        }), a.checkUserSub(3);
    },
    toWithDrawal: function(t) {
        if (a.globalData.userInfo) {
            var o = t.detail.formId, e = this;
            e.data.money ? e.data.uInfo.money ? 100 * e.data.uInfo.money < 100 * e.data.money ? wx.showToast({
                title: "您的提现金额大于当前可提现余额",
                icon: "none"
            }) : e.data.money < parseFloat(e.data.min_withdrawal_money) ? wx.showModal({
                title: "系统提示",
                content: "提现金额不能低于" + e.data.min_withdrawal_money + "元，快去推广商品赚钱吧~",
                showCancel: !0,
                cancelColor: "#cccccc",
                confirmColor: "#f43f6c",
                confirmText: "去赚钱",
                success: function(a) {
                    a.confirm && wx.navigateBack();
                }
            }) : 1 != e.data.withdrawal_method || e.data.withdrawal_qrcode ? wx.showModal({
                title: "系统提示",
                content: "确认要进行提现吗？该操作无法撤消",
                showCancel: !0,
                cancelColor: "#f43f6c",
                confirmColor: "#cccccc",
                confirmText: "确定",
                success: function(t) {
                    t.confirm && !e.data.btnDis && (e.setData({
                        btnDis: !0
                    }), a.util.request({
                        url: a.util.url("entry/wxapp/withdrawalMoney"),
                        data: {
                            money: e.data.money,
                            withdrawal_qrcode: e.data.withdrawal_qrcode ? e.data.withdrawal_qrcode : "",
                            formId: o
                        },
                        success: function(a) {
                            if (1 == e.data.withdrawal_apply_open) t = "您的提现申请已提交成功，我们会在1-3个工作日内处理您的提现请求"; else if (1 != e.data.withdrawal_method) t = "提现成功，稍候系统自动会为您处理提现请求，请注意查看收款通知"; else var t = "您的提现申请已提交成功，我们会在1-3个工作日内处理您的提现请求";
                            wx.showModal({
                                title: "系统通知",
                                content: t,
                                showCancel: !1,
                                confirmColor: "#f43f6c",
                                confirmText: "朕知道了",
                                success: function() {
                                    wx.navigateBack();
                                }
                            });
                        },
                        complete: function() {
                            e.setData({
                                btnDis: !1
                            });
                        }
                    }));
                }
            }) : wx.showToast({
                title: "请上传您的微信收款二维码，以便为您的提现转账",
                icon: "none"
            }) : wx.showToast({
                title: "您的可提现余额为0",
                icon: "none"
            }) : wx.showToast({
                title: "请输入您要提现的金额",
                icon: "none"
            });
        } else a.checkLogin();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", o = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
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
});