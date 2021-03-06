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
                title: "?????????????????????????????????????????????",
                icon: "none"
            }) : e.data.money < parseFloat(e.data.min_withdrawal_money) ? wx.showModal({
                title: "????????????",
                content: "????????????????????????" + e.data.min_withdrawal_money + "?????????????????????????????????~",
                showCancel: !0,
                cancelColor: "#cccccc",
                confirmColor: "#f43f6c",
                confirmText: "?????????",
                success: function(a) {
                    a.confirm && wx.navigateBack();
                }
            }) : 1 != e.data.withdrawal_method || e.data.withdrawal_qrcode ? wx.showModal({
                title: "????????????",
                content: "????????????????????????????????????????????????",
                showCancel: !0,
                cancelColor: "#f43f6c",
                confirmColor: "#cccccc",
                confirmText: "??????",
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
                            if (1 == e.data.withdrawal_apply_open) t = "????????????????????????????????????????????????1-3???????????????????????????????????????"; else if (1 != e.data.withdrawal_method) t = "??????????????????????????????????????????????????????????????????????????????????????????"; else var t = "????????????????????????????????????????????????1-3???????????????????????????????????????";
                            wx.showModal({
                                title: "????????????",
                                content: t,
                                showCancel: !1,
                                confirmColor: "#f43f6c",
                                confirmText: "????????????",
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
                title: "??????????????????????????????????????????????????????????????????",
                icon: "none"
            }) : wx.showToast({
                title: "????????????????????????0",
                icon: "none"
            }) : wx.showToast({
                title: "??????????????????????????????",
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
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "???????????????????????????", o = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: o,
            success: function(a) {
                "shareAppMessage:ok" == a.errMsg ? wx.showToast({
                    title: "????????????",
                    icon: "success"
                }) : wx.showToast({
                    title: "????????????",
                    icon: "none"
                });
            },
            fail: function(a) {
                "shareAppMessage:fail cancel" == a.errMsg || a.errMsg, wx.showToast({
                    title: "????????????",
                    icon: "none"
                });
            }
        };
    }
});