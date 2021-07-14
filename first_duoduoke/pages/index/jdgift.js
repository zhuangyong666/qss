var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        zone: "A区",
        page: 1,
        loading: !1,
        lastPage: !1,
        goodsList: !1,
        plusH: 81,
        cont_id: 0,
        scrollLeft: 0,
        scrollLefts: 0,
        share_id: 0,
        goods_type: 0,
        cates: [ {
            key: "A",
            name: "3元礼金"
        }, {
            key: "B",
            name: "5元礼金"
        }, {
            key: "C",
            name: "礼金三"
        }, {
            key: "D",
            name: "礼金四"
        }, {
            key: "E",
            name: "礼金五"
        }, {
            key: "F",
            name: "礼金六"
        }, {
            key: "G",
            name: "礼金七"
        }, {
            key: "H",
            name: "礼金八"
        } ],
        reg: 0,
        cids: "1,9,10,12",
        catess: [ {
            name: "服饰内衣",
            cids: "1,9,10,12"
        }, {
            name: "居家生活",
            cids: "4,14"
        }, {
            name: "母婴美妆",
            cids: "2,3"
        }, {
            name: "食品家装",
            cids: "6,14"
        }, {
            name: "运动鞋包",
            cids: "5,11,13"
        }, {
            name: "3C家电虚拟",
            cids: "7,8"
        } ]
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    onChangecont: function(t) {
        var a = this, o = t.currentTarget.dataset.cont_id;
        if (a.data.cont_id != o) {
            var e = 0;
            e = o > 1 ? 120 * o : 10 * o, a.setData({
                cont_id: o,
                scrollLeft: e,
                scrollLefts: 0,
                cids: "1,9,10,12"
            }), a.data.zone = t.currentTarget.dataset.key + "区", a.data.page = 1, a.data.lastPage = !1, 
            a.getGiftGoods();
        }
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
    },
    onChangeregion: function(t) {
        var a = this, o = t.currentTarget.dataset.reg, e = t.currentTarget.dataset.cids, s = 0;
        s = o > 2 ? 30 * o : 10 * o, a.setData({
            reg: o,
            cids: e,
            scrollLefts: s
        }), a.data.page = 1, a.data.lastPage = !1, a.getGiftGoods();
    },
    onLoad: function(a) {
        var o = this;
        t.util.request({
            url: "entry/wxapp/Setting",
            data: {
                name: "jd_gift_tip,jd_gift_zone",
                page: "jdgift"
            },
            success: function(t) {
                var a = t.data.data;
                if (o.setData(a), 1 == o.data.show_gift_cates && o.setData({
                    plusH: o.data.plusH + 40
                }), (a = o.data.jd_gift_zone) && (a = a.split(",")).length > 0) {
                    var e = [];
                    for (var s in a) {
                        if (s > 7) break;
                        e[s] = {
                            key: o.data.cates[s].key,
                            name: o.data.cates[s].name
                        };
                    }
                    o.setData({
                        cates: e
                    });
                }
                o.getGiftGoods();
            }
        });
    },
    getGiftGoods: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", e = this;
        t.util.request({
            url: "entry/wxapp/GetJdGift",
            data: {
                page: e.data.page,
                zone: e.data.zone,
                cids: e.data.cids
            },
            success: function(t) {
                if ("function" == typeof a && a(), "append" == o) return t.data.data.length < 1 ? void (e.data.lastPage = !0) : (e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                void e.setData({
                    goodsList: e.data.goodsList
                }));
                1 == e.data.page && wx.pageScrollTo({
                    scrollTop: 0,
                    duration: 0
                }), e.setData({
                    goodsList: t.data.data
                });
            }
        });
    },
    getGiftPoster: function(a) {
        if (t.globalData.userInfo) {
            var o = this, e = a.currentTarget.dataset.gdx, s = o.data.goodsList[e].goods_name, n = o.data.goodsList[e].goods_id, i = o.data.goodsList[e].giftCouponKey, d = o.data.goodsList[e].price_subsidy, c = o.data.goodsList[e].picurl;
            wx.showLoading({
                title: "加载中...",
                mask: !0
            }), t.util.request({
                url: "entry/wxapp/JdGiftLink",
                showLoading: !1,
                data: {
                    goods_id: n,
                    giftcouponKey: i
                },
                success: function(a) {
                    if ("less" != a.data.message) {
                        n = a.data.data;
                        t.util.request({
                            url: "entry/wxapp/GetGiftPoster",
                            showLoading: !1,
                            data: {
                                qr_url: n,
                                banner: c,
                                title: s,
                                price: d
                            },
                            success: function(t) {
                                var a = t.data.data;
                                wx.getImageInfo({
                                    src: a,
                                    success: function(t) {
                                        wx.saveImageToPhotosAlbum({
                                            filePath: t.path,
                                            success: function(t) {
                                                wx.showToast({
                                                    title: "保存至相册成功",
                                                    icon: "success"
                                                });
                                            },
                                            fail: function(t) {
                                                console.log(t), wx.showModal({
                                                    title: "系统提示",
                                                    content: "请转至“授权设置”页面打开“保存到相册”开关",
                                                    confirmColor: "#f43f6c",
                                                    confirmText: "去打开",
                                                    showCancel: !1,
                                                    success: function(t) {
                                                        wx.openSetting({
                                                            withSubscriptions: !0,
                                                            success: function() {}
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    },
                                    complete: function() {
                                        o.delPoster(), wx.hideLoading();
                                    }
                                });
                            },
                            complete: function() {
                                wx.hideLoading();
                            }
                        });
                    } else {
                        var n = o.data.goodsList[e].tlj_send_url;
                        wx.showToast({
                            title: "今日礼金已抢完，每天0点更新",
                            icon: "none",
                            duration: 3e3
                        });
                    }
                },
                complete: function() {
                    wx.hideLoading();
                }
            });
        } else t.checkLogin();
    },
    delPoster: function() {
        t.util.request({
            url: "entry/wxapp/delTempPoster",
            showLoading: !1,
            success: function(t) {
                console.log(t);
            }
        });
    },
    goTop: function(t) {
        wx.pageScrollTo ? (this.setData({
            show_goTop: !1
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        })) : wx.showToast({
            title: "暂不支持"
        });
    },
    copyGiftLink: function(a) {
        if (t.globalData.userInfo) {
            var o = this, e = a.currentTarget.dataset.gdx, s = o.data.goodsList[e].goods_id, n = o.data.goodsList[e].giftCouponKey, i = o.data.goodsList[e].goods_name, d = o.data.goodsList[e].tlj_amount, c = o.data.goodsList[e].price_subsidy;
            t.util.request({
                url: "entry/wxapp/JdGiftLink",
                data: {
                    goods_id: s,
                    giftcouponKey: n
                },
                success: function(t) {
                    if ("less" != t.data.message) {
                        a = t.data.data;
                        wx.setClipboardData ? wx.setClipboardData({
                            data: i + "\n礼金补贴：" + d + "元\n补贴价：" + c + "\n" + a,
                            success: function(t) {
                                wx.showToast({
                                    title: "复制成功"
                                });
                            }
                        }) : console.log("当前微信版本不支持setClipboardData");
                    } else {
                        var a = o.data.goodsList[e].tlj_send_url;
                        wx.showToast({
                            title: "今日礼金已抢完，每天0点更新",
                            icon: "none",
                            duration: 3e3
                        });
                    }
                }
            });
        } else t.checkLogin();
    },
    toJdGift: function(a) {
        if (t.globalData.userInfo) {
            var o = this, e = a.currentTarget.dataset.gdx, s = o.data.goodsList[e].goods_id, n = o.data.goodsList[e].giftCouponKey;
            t.util.request({
                url: "entry/wxapp/JdGiftLink",
                data: {
                    goods_id: s,
                    giftcouponKey: n
                },
                success: function(t) {
                    "less" == t.data.message ? wx.showToast({
                        title: "今日礼金已抢完，每天0点更新",
                        icon: "none",
                        duration: 3e3
                    }) : wx.navigateToMiniProgram({
                        appId: "wxca1fe42a16552094",
                        path: "/pages/union/proxy/proxy?spreadUrl=" + encodeURIComponent(t.data.data),
                        envVersion: "release",
                        success: function(t) {
                            console.log("打开小程序成功");
                        }
                    });
                }
            });
        } else t.checkLogin();
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getGiftGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getGiftGoods("", "append");
    },
    onShareTimeline: function() {
        var a = this, o = void 0 !== t.globalData.userInfo.uid ? "from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "";
        return {
            title: "京享礼金，限量福利，好货一元就购~~~",
            imageUrl: a.data.goodsList[0].picurl,
            query: o
        };
    },
    onShareAppMessage: function(a) {
        var o = this;
        if ("button" == a.from && void 0 !== a.target.dataset.gdx) var e = a.target.dataset.gdx, s = "“京享礼金”👉︎" + o.data.goodsList[e].goods_name.substr(0, 20), n = o.data.goodsList[e].picurl; else var s = "京享礼金，限量福利，好货一元就购~~~", n = o.data.goodsList[0].picurl;
        return {
            title: s,
            path: "/first_duoduoke/pages/index/jdgift" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
            imageUrl: n,
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