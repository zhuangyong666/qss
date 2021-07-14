var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("/first_duoduoke/utils/NumberAnimate"));

App({
    onLaunch: function(e) {
        var o = this;
        wx.getSystemInfo({
            success: function(e) {
                o.globalData.navHeight = e.statusBarHeight + 46, o.platform = e.platform, o.system = e.system;
            },
            fail: function(e) {
                console.log(e);
            }
        }), void 0 !== e.query.from_uid && e.query.from_uid && (this.globalData.from_uid = e.query.from_uid), 
        void 0 !== e.query.from_act && e.query.from_act && (this.globalData.from_act = e.query.from_act), 
        this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.autoplay = !1, 
        this.innerAudioContext.src = this.siteInfo.siteroot.replace("app/index.php", "") + "/addons/first_duoduoke/resource/images/app/coin.mp3", 
        this.innerAudioContext.onPlay(function() {
            console.log("开始播放音频");
        }), this.innerAudioContext.onError(function(e) {
            console.log("音频播放失败:" + e.errCode + "-" + e.errMsg), console.log();
        });
    },
    onShow: function() {},
    onHide: function() {
        this.globalData.from_uid && (this.globalData.from_uid = !1, this.globalData.from_act = !1), 
        !1 === this.globalData.showSmart && (this.globalData.showSmart = !0);
    },
    innerAudioContext: "",
    util: require("we7/resource/js/util.js"),
    config: require("first_duoduoke/utils/config.js"),
    siteInfo: require("siteinfo.js"),
    formIds: [],
    platform: !1,
    system: !1,
    globalData: {
        userInfo: !1,
        navHeight: 0,
        setting: !1,
        showVip: !1,
        showRed: !1,
        from_uid: !1,
        from_act: !1,
        showSmart: !0,
        hotTab: !1,
        show_once_subtip: !1,
        show_open_adv: !1
    },
    getImgUrl: function() {
        return getApp().siteInfo.siteroot.replace("app/index.php", "") + "/addons/first_duoduoke/resource/images/app/";
    },
    goIndex: function() {
        wx.switchTab({
            url: "/first_duoduoke/pages/index/index"
        });
    },
    reUserInfo: function() {
        var e = getCurrentPages(), o = e[e.length - 1], t = getApp(), a = wx.getStorageSync("userInfo");
        !t.globalData.userInfo && a ? t.util.request({
            url: "entry/wxapp/getUserInfo",
            showLoading: !1,
            success: function(e) {
                var s = e.data.data;
                s.avatar = a.wxInfo.avatarUrl, s.nickName = a.wxInfo.nickName, t.globalData.userInfo = s, 
                "first_duoduoke/pages/index/index" == o.route && t.globalData.setting && (o.isShowVip(), 
                o.isShowRed()), "first_duoduoke/pages/red-envelope/draw" == o.route && o.getReceiveRpw();
            }
        }) : "first_duoduoke/pages/index/index" == o.route && t.globalData.setting && (o.isShowVip(), 
        o.isShowRed());
    },
    checkLogin: function() {
        var o = getCurrentPages(), t = o[o.length - 1], a = getApp();
        a.util.getUserInfo(function(o) {
            t.data.showLoginModal && t.setData({
                showLoginModal: !1
            }), a.util.request({
                url: "entry/wxapp/getUserInfo",
                showLoading: !1,
                success: function(s) {
                    var n = s.data.data;
                    if (n.avatar = o.wxInfo.avatarUrl, n.nickName = o.wxInfo.nickName, a.globalData.userInfo = n, 
                    "first_duoduoke/pages/my/my" == t.route && t.setData({
                        uInfo: n
                    }, function() {
                        t.getBdPhone();
                    }), "first_duoduoke/pages/cash/cash" == t.route && t.setData({
                        uInfo: n
                    }), "first_duoduoke/pages/goods/goods" == t.route && t.getGoodsDetail(), "first_duoduoke/pages/find/find" == t.routr && t.zanSaleWallpaper(), 
                    "first_duoduoke/pages/partake/partake" == t.route && t.setData({
                        isLogin: !0
                    }), "first_duoduoke/pages/task/task" == t.route) {
                        t.setData({
                            isLogin: !0
                        });
                        var i = new e.default({
                            from: n.money,
                            speed: 600,
                            refreshTime: 100,
                            decimals: 2,
                            onUpdate: function() {
                                t.setData({
                                    "uInfo.money": i.tempValue
                                });
                            }
                        }), r = new e.default({
                            from: n.coin,
                            speed: 600,
                            refreshTime: 100,
                            decimals: 0,
                            onUpdate: function() {
                                t.setData({
                                    "uInfo.coin": r.tempValue
                                });
                            }
                        });
                        t.toPageTop(), a.innerAudioContext.play();
                    }
                    "first_duoduoke/pages/welfare/welfare" == t.route && t.checkReceive(), "first_duoduoke/pages/red-envelope/draw" == t.route && t.getReceiveRpw(), 
                    "first_duoduoke/pages/red-envelope/red-envelope" == t.route && t.getRedPacketWall(), 
                    "first_duoduoke/pages/turntable/turntable" == t.route && t.getRotaryInfo(), "first_duoduoke/pages/treasure/treasure" == t.route && t.getSpeedLootingInfo(), 
                    "first_duoduoke/pages/rush-buy/rush-buy" == t.route && t.getRushBuyInfo(), "first_duoduoke/pages/rush-buy/rush-goodsdetails" == t.route && t.getThisRushBuyGood(), 
                    "first_duoduoke/pages/exemption/exemption" == t.route && t.getFreeRedInfo(), "first_duoduoke/pages/morning/morning" == t.route && t.getMorningInfo(), 
                    "first_duoduoke/pages/hot/hot" == t.route && t.onPullDownRefresh(), a.checkUserSub("1|2|3");
                }
            });
        });
    },
    toChainpage: function() {
        console.log("ssss"), wx.navigateTo({
            url: "/first_duoduoke/pages/index/notice"
        });
    },
    loginAfter: function(e) {
        if ("getUserInfo:ok" == e.detail.errMsg) {
            var o = getCurrentPages();
            o[o.length - 1];
            getApp().checkLogin();
        }
    },
    loginCancel: function() {
        var e = getCurrentPages();
        e[e.length - 1].setData({
            showLoginModal: !1
        });
    },
    showInfo: function(e, o) {
        e.setData({
            info: {
                show: !0,
                cnt: o
            }
        });
    },
    hideInfo: function(e) {
        e.setData({
            info: {
                show: !1
            }
        });
    },
    oneKeyZl: function(e) {
        wx.navigateTo({
            url: "/first_duoduoke/pages/index/turn-chain?content=" + encodeURIComponent(e)
        });
    },
    showSmart: function(e, o) {
        !1 !== o.globalData.showSmart && (e.data.show_open_adv || o.globalData.setting && 1 != o.globalData.setting.audit_switch && wx.getClipboardData({
            success: function(t) {
                if (t.data && " " != t.data) {
                    var a = o.globalData.setting, s = t.data;
                    if (/^\d{19}$/g.test(s) && 1 == a.tb_open) return void wx.showModal({
                        title: "系统信息",
                        content: "系统检测到以下内容：[" + s + "]，类似“淘宝”订单号，点击确定去“找回订单”",
                        showCancel: !0,
                        confirmColor: "#f43f6c",
                        confirmText: "确定",
                        complete: function(t) {
                            t.confirm && wx.navigateTo({
                                url: "/first_duoduoke/pages/orders/orders?source=6&tb_order_sn=" + s,
                                success: function() {
                                    wx.setClipboardData({
                                        data: " ",
                                        success: function() {
                                            wx.hideLoading();
                                        }
                                    });
                                }
                            }), t.cancel && o.disGoods(o, s, e, a);
                        }
                    });
                    o.disGoods(o, s, e, a);
                }
            },
            fail: function(e) {
                console.log(e, "获取剪切版内容失败");
            }
        }));
    },
    disGoods: function(e, o, t, a) {
        e.util.request({
            url: "entry/wxapp/getDisGoods",
            data: {
                content: o
            },
            showLoading: !1,
            success: function(e) {
                t.setData({
                    rpReward: !1,
                    showVip: !1,
                    showShareStatus: !1,
                    showShareImg: !1,
                    enve: !1
                }), "ok" == e.data.message ? (wx.vibrateShort({
                    type: "heavy"
                }), t.setData({
                    smartSou: {
                        showg: !0,
                        goods: e.data.data,
                        appletKeyword: a.appletKeyword,
                        content: o
                    }
                }, function() {
                    wx.setClipboardData({
                        data: " ",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                })) : t.setData({
                    smartSou: {
                        show: !0,
                        key: o,
                        tb_open: a.tb_open,
                        kl_open: a.kl_open,
                        jd_open: a.jd_open,
                        mg_open: a.mg_open,
                        vip_open: a.vip_open,
                        sn_open: a.sn_open
                    }
                }, function() {
                    wx.setClipboardData({
                        data: " ",
                        success: function() {
                            wx.hideLoading();
                        }
                    });
                });
            }
        });
    },
    confirmSmart: function(e, o) {
        var t = e.data.smartSou.key;
        wx.navigateTo({
            url: "/first_duoduoke/pages/search/search?keyword=" + t + "&source=" + o,
            success: function() {
                e.setData({
                    smartSou: {
                        show: !1
                    }
                });
            }
        });
    },
    reMgToken: function(e) {
        getApp().util.request({
            url: "entry/wxapp/reMgToken",
            showLoading: !1,
            success: function(e) {}
        });
    },
    hideSmart: function(e) {
        e.setData({
            smartSou: {
                show: !1,
                showg: !1
            }
        });
    },
    checkUserSub: function(e) {
        var o = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], t = getApp();
        if (1 != t.globalData.setting.sub_msg_switch) return !1;
        !1 === o && 1 == t.globalData.setting.sub_trouble_switch && !1 !== t.globalData.show_once_subtip || t.util.request({
            url: t.util.url("entry/wxapp/getUserSub"),
            showLoading: !1,
            data: {
                key: e
            },
            method: "POST",
            success: function(a) {
                var s = [ t.globalData.setting.batch_tempid, t.globalData.setting.bind_tempid, t.globalData.setting.withdrawal_tempid, t.globalData.setting.booked_tempid, t.globalData.setting.settle_tempid, t.globalData.setting.morning_tempid ], n = [ "【优惠券领取通知】", "【关系绑定通知】", "【提现审核结果通知】", "【佣金入账通知】", "【结算佣金通知】", "【早起打卡通知】" ], i = [], r = [];
                if ("number" == typeof e) i = [ s[e - 1] ], r = [ n[e - 1] ]; else {
                    e = e.split("|");
                    for (var u in e) i.push(s[e[u] - 1]), r.push(n[e[u] - 1]);
                }
                var d = a.data.data, c = 0, l = [], g = [], f = [];
                for (var u in d) d[u][0] < 1 && (l.push(i.splice(c, 1, "")[0]), g.push(r.splice(c, 1, "")[0]), 
                "number" != typeof e && f.push(e.splice(c, 1, "")[0])), c++;
                if (l > 1 && t.system) {
                    var p = t.system.match(/\d+(\.\d+)?(\.\d+)?/);
                    p = parseInt(p.replace(/\./g, "")), ("ios" == t.platform && p < 706 || "android" == t.platform && p < 707) && (l.splice(1), 
                    g.splice(1), "number" != typeof e && f.splice(1));
                }
                l.length > 0 && wx.showModal({
                    title: "系统提示",
                    content: "您还没有订阅" + g.join("&") + "，订阅后可收到服务消息通知，建议勾选“（√）总是允许”选框",
                    confirmColor: "#f43f6c",
                    confirmText: "直接订阅",
                    showCancel: !0,
                    cancelColor: "#00c201",
                    cancelText: "去订阅",
                    success: function(a) {
                        !1 === o && 1 == t.globalData.setting.sub_trouble_switch && (t.globalData.show_once_subtip = !0), 
                        a.confirm ? wx.requestSubscribeMessage({
                            tmplIds: l,
                            success: function(o) {
                                console.log(o);
                                for (var a in o) {
                                    if ("reject" == o[a] || "ban" == o[a]) {
                                        wx.showToast({
                                            title: "订阅失败",
                                            icon: "none"
                                        }), wx.openSetting({
                                            withSubscriptions: !0,
                                            success: function(e) {
                                                console.log(e.authSetting);
                                            }
                                        });
                                        break;
                                    }
                                    if ("accept" == o[a]) {
                                        wx.showToast({
                                            title: "订阅成功",
                                            icon: "success"
                                        }), t.util.request({
                                            url: t.util.url("entry/wxapp/subUserMsg"),
                                            showLoading: !1,
                                            method: "POST",
                                            data: {
                                                key: "number" == typeof e ? e : f.join("|")
                                            },
                                            success: function(e) {}
                                        });
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
                                    success: function(e) {
                                        wx.openSetting({
                                            withSubscriptions: !0,
                                            success: function() {}
                                        });
                                    }
                                }) : wx.showModal({
                                    title: "系统提示",
                                    content: "订阅发生异常，请跳转订阅消息页面进行订阅",
                                    confirmColor: "#f43f6c",
                                    confirmText: "去订阅",
                                    showCancel: !1,
                                    success: function(e) {
                                        wx.navigateTo({
                                            url: "/first_duoduoke/pages/submsg/submsg"
                                        });
                                    }
                                }), t.util.request({
                                    url: t.util.url("entry/wxapp/reportSubErr"),
                                    showLoading: !1,
                                    method: "POST",
                                    data: {
                                        err_code: e.errCode,
                                        err_msg: e.errMsg,
                                        system: t.system
                                    },
                                    success: function(e) {}
                                });
                            }
                        }) : a.cancel && wx.navigateTo({
                            url: "/first_duoduoke/pages/submsg/submsg"
                        });
                    }
                });
            }
        });
    }
});