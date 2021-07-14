var a = getApp();

Page({
    data: {
        imgPath: a.getImgUrl(),
        navh: 0,
        animationData: {},
        count: 0,
        turning: !1,
        awardsList: {},
        isHongbao: !1,
        showShareShade: !1,
        showNowinshade: !1,
        showWinshade: !1,
        win_message: "",
        img: "",
        hidden_canvas: !0,
        awards: [],
        prize: 0,
        in_users: 0,
        rotarydraw: [],
        rotarydraw_sum: 0,
        page: 1,
        lastPage: !1,
        poster: "",
        goods: [],
        videoAd: !1,
        video_ad_code: !1,
        from_uid: 0,
        share_Rotary_coin: 0
    },
    initVideoAd: function() {
        var t = this;
        !1 === t.data.videoAd && wx.createRewardedVideoAd && a.globalData.setting.video_ad_code && (t.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + a.globalData.setting.video_ad_code
        }), t.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), t.data.videoAd.onClose(function(o) {
            console.log("Video_AD Close OK ..."), console.log(o), o && o.isEnded || void 0 === o ? (console.log("watch OK ..."), 
            a.util.request({
                url: "entry/wxapp/AddSpeedCount",
                data: {
                    num: 1
                },
                success: function(a) {
                    t.data.count++, t.setData({
                        count: t.data.count
                    }), wx.showToast({
                        title: "再抽一次",
                        icon: "success"
                    });
                }
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "视频没看完，看完视频才能再抽奖哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(a) {
                    a.confirm && t.data.videoAd && t.data.videoAd.show();
                },
                fail: function(a) {
                    console.log(a, "showModalErr");
                }
            }));
        }), t.data.videoAd.onError(function(a) {
            console.log(a, "VieoERR....");
        }));
    },
    toGoodsPage: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.goods_id, o = a.currentTarget.dataset.goods_sign;
        if (void 0 !== a.currentTarget.dataset.source) {
            var e = "&source=" + a.currentTarget.dataset.source;
            o && (e += "&goods_sign=" + o), wx.navigateTo({
                url: "../goods/goods?goods_id=" + t + e
            });
        } else o && (t += "&goods_sign=" + o), wx.navigateTo({
            url: "../goods/goods?goods_id=" + t
        });
    },
    getRotaryInfo: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", e = this;
        a.util.request({
            url: "entry/wxapp/getRotaryInfo",
            data: {
                page: e.data.page
            },
            success: function(a) {
                if (console.log(a.data.data), "function" == typeof t && t(), "append" == o) return a.data.data.rotarydraw.length ? (e.data.rotarydraw = e.data.rotarydraw.concat(a.data.data.rotarydraw), 
                e.setData({
                    rotarydraw: e.data.rotarydraw
                }), !1) : (e.data.lastPage = !0, !1);
                var s = a.data.data;
                e.setData({
                    count: s.amount,
                    awards: s.info,
                    theory_sum: s.theory_sum.theory_sum,
                    in_users: s.in_users.num,
                    rotarydraw_sum: s.rotarydraw_sum,
                    rotarydraw: s.rotarydraw
                }), e.createRotary();
            }
        });
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    onLoad: function(t) {
        var o = this;
        wx.getSystemInfo({
            success: function(a) {
                o.setData({
                    width: a.windowWidth,
                    height: a.windowHeight
                });
            }
        });
        var e = t.from_uid ? t.from_uid : 0;
        o.setData({
            navH: a.globalData.navHeight,
            video_ad_code: a.globalData.setting.video_ad_code,
            share_Rotary_coin: a.globalData.setting.share_Rotary_coin,
            from_uid: e
        }), o.data.video_ad_code && "devtools" != a.platform && o.initVideoAd(), o.getRotaryInfo();
    },
    createRotary: function() {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    contentHeight: a.windowHeight
                }), a.windowWidth < 360 ? t.setData({
                    scale: .9
                }) : a.windowWidth > 500 && t.setData({
                    scale: 1.4
                });
            }
        }), a.awardsConfig = {
            count: t.data.count,
            awards: t.data.awards,
            award_c: [ {
                color: "#754805"
            }, {
                color: "#BE9B6D"
            }, {
                color: "#754805"
            }, {
                color: "#BE9B6D"
            }, {
                color: "#EF1611"
            }, {
                color: "#BE9B6D"
            } ]
        }, t.setData({
            count: a.awardsConfig.count
        });
        for (var o = a.awardsConfig.awards, e = o.length, s = 360 / e / 2 + 90, n = [], i = 1 / e, r = wx.createContext("lotteryCanvas"), d = 0; d < e; d++) {
            var c = .38 * t.data.width;
            r.save(), r.beginPath(), r.translate(150, 150), r.moveTo(0, 0), r.rotate((360 / e * d - s) * Math.PI / 180), 
            r.arc(0, 0, c, 0, 2 * Math.PI / e, !1), d % 2 == 0 ? r.setFillStyle("#FFD394") : r.setFillStyle("#FFF1DC"), 
            r.fill(), r.setLineWidth(.5), r.setStrokeStyle("rgba(255,255,255,1)"), r.stroke(), 
            r.restore(), n.push({
                turn: d * i + "turn",
                lineTurn: d * i + i / 2 + "turn",
                award: o[d].station,
                img: o[d].img,
                color: a.awardsConfig.award_c[d].color,
                bg: o[d].bg
            });
        }
        t.setData({
            awardsList: n
        });
    },
    navBack: function() {
        this.data.from_uid > 0 ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onShowShareShade: function() {
        if (a.globalData.userInfo) {
            var t = this;
            t.setData({
                showShareShade: !0
            }), a.util.request({
                url: "entry/wxapp/getRotaryPoster",
                success: function(a) {
                    var o = a.data.data;
                    t.setData({
                        poster: o
                    });
                }
            });
        } else a.checkLogin();
    },
    saveQrcodeToPhotosAlbum: function(a) {
        var t = this;
        wx.getImageInfo({
            src: t.data.poster,
            success: function(a) {
                console.log(a), wx.saveImageToPhotosAlbum({
                    filePath: a.path,
                    success: function(a) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        }), t.chooseShareShade();
    },
    chooseShareShade: function() {
        this.setData({
            showShareShade: !1
        });
    },
    getMoveAbout: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getMoveAbout",
            data: {
                prize: t.data.prize,
                prize_thank: t.data.prize_thank,
                prize_again: t.data.prize_again
            },
            success: function(a) {
                if (console.log(a.data.data), t.setData({
                    goods: a.data.data
                }), "ok" == a.data.message) {
                    var o = t.data.awardIndex;
                    if (0 == o) t.setData({
                        showNowinshade: !0,
                        win_message: "很遗憾，你与奖品擦肩而过"
                    }); else if (1 == o) t.setData({
                        showWinshade: !0,
                        win_message: "恭喜你获得0.1元现金红包"
                    }); else if (2 == o) t.setData({
                        showWinshade: !0,
                        win_message: "恭喜你获得1元现金红包"
                    }); else {
                        if (3 == o) return void t.setData({
                            showNowinshade: !0,
                            count: t.data.count + 1,
                            win_message: "别遗憾，再送你一次机会"
                        });
                        4 == o ? t.setData({
                            showWinshade: !0,
                            win_message: "恭喜你获得10元现金红包"
                        }) : 5 == o && t.setData({
                            showWinshade: !0,
                            win_message: "恭喜你获得0.01元现金红包"
                        });
                    }
                }
                t.getRandomWinLists();
            }
        });
    },
    getRandomWinLists: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getRandomWinLists",
            success: function(a) {
                console.log(""), t.setData({
                    rotarydraw: a.data.data,
                    page: 1,
                    lastPage: !1
                });
            }
        });
    },
    getLottery: function() {
        if (a.globalData.userInfo) {
            var t = this;
            if (t.data.count <= 0) t.data.video_ad_code ? wx.showModal({
                title: "提示",
                content: "没有抽奖次数了，观看视频再转一次",
                showCancel: !0,
                confirmColor: "#f43f6c",
                cancelColor: "#bbb",
                confirmText: "观看视频",
                cancelText: "明天再来",
                success: function(a) {
                    a.confirm && t.data.videoAd && t.data.videoAd.show();
                }
            }) : wx.showToast({
                title: "机会用光了,请明天再来哦",
                icon: "none",
                duration: 2e3
            }); else {
                t.setData({
                    count: t.data.count - 1,
                    turning: !0
                }), setTimeout(function() {
                    t.setData({
                        turning: !1
                    });
                }, 4500);
                for (var o = a.awardsConfig, e = 0, s = t.data.awards, n = t.data.theory_sum, i = new Array(n), r = new Array(), d = 0; d < s.length; d++) {
                    i = [];
                    for (var c = 0; c < s[d].theory; c++) i[c] = s[d].id;
                    r = r.concat(i), i = [];
                }
                console.log("需要生成的数的总个数:" + n), console.log(r);
                var u = r, g = Math.random() * (n - 1) >>> 0;
                console.log("结果为:" + u[g] + "号奖品"), u[g] == t.data.awards[0].id ? e = 0 : u[g] == t.data.awards[1].id ? e = 1 : u[g] == t.data.awards[2].id ? e = 2 : u[g] == t.data.awards[3].id ? e = 3 : u[g] == t.data.awards[4].id ? e = 4 : u[g] == t.data.awards[5].id && (e = 5), 
                console.log("奖品序号：" + e + 1);
                var l = t.data.awards[e].id, h = t.data.awards[0].id, w = t.data.awards[3].id;
                t.setData({
                    prize: l,
                    prize_thank: h,
                    prize_again: w,
                    awardIndex: e
                }), a.runDegs = a.runDegs || 0, a.runDegs = a.runDegs + (360 - a.runDegs % 360) + (1440 - 60 * e), 
                console.log("deg", a.runDegs);
                var f = wx.createAnimation({
                    duration: 4e3,
                    timingFunction: "ease"
                });
                t.animationRun = f, f.rotate(a.runDegs).step(), t.setData({
                    animationData: f.export()
                });
                var _ = wx.getStorageSync("winAwards") || {
                    data: []
                };
                _.data.push(o.awards[e].station + "1个"), wx.setStorageSync("winAwards", _), setTimeout(function() {
                    t.getMoveAbout();
                }, 4e3);
            }
        } else a.checkLogin();
    },
    onReady: function(a) {},
    togglePopup: function() {
        this.setData({
            isShare: !this.data.isShare
        });
    },
    togglePopup2: function() {
        this.setData({
            isHongbao: !this.data.isHongbao
        });
    },
    togglePopup3: function() {
        this.setData({
            isMini: !this.data.isMini
        });
    },
    chooseWinshade: function() {
        this.setData({
            showNowinshade: !1,
            showWinshade: !1
        });
    },
    nomove: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getRotaryInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage) return !1;
        a.data.page++, a.getRotaryInfo("", "append");
    },
    onShareAppMessage: function() {
        this.chooseShareShade();
        var t = a.globalData.setting.share_Rotary_title ? a.globalData.setting.share_Rotary_title : "快点来抽现金,一般人我不告诉他!", o = a.globalData.setting.share_Rotary_pic ? a.globalData.setting.share_Rotary_pic : res.target.dataset.src;
        return {
            title: t,
            path: "/first_duoduoke/pages/turntable/turntable" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
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