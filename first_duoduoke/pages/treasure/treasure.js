var t = getApp();

Page({
    data: {
        navH: 0,
        showSnatchShade: !1,
        showTimeBox: !1,
        showFailureShade: !1,
        showWinureShade: !1,
        goodsList: [],
        total: 0,
        share_uid: 0,
        second: 0,
        millisecond: "00",
        setInter: "",
        is_win: 1,
        win_id: 0,
        win_title: "",
        win_img: "",
        hot_page: 1,
        hotGoodsList: !1,
        from_uid: 0
    },
    getSpeedLootingInfo: function() {
        var a = this;
        if (t.globalData.userInfo && a.data.share_uid) var o = {
            share_uid: a.data.share_uid
        };
        t.util.request({
            url: "entry/wxapp/getSpeedLootingInfo",
            data: o,
            success: function(o) {
                t.globalData.userInfo && a.data.share_uid && (a.data.share_uid = 0, t.globalData.setting = o.data.data.setting), 
                console.log(o.data.data), a.setData({
                    goodsList: o.data.data.list,
                    total: o.data.data.total
                });
            }
        });
    },
    toWinningPage: function() {
        wx.navigateTo({
            url: "./winning-record"
        });
    },
    getHotGoods: function() {
        var a = this;
        a.data.hot_loading || (a.data.hot_loading = !0, t.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: a.data.hot_page,
                sort_type: 0
            },
            success: function(t) {
                console.log(t), t.data.data.length < 1 || (a.data.hotGoodsList = 1 == a.data.hot_page ? t.data.data : a.data.hotGoodsList.concat(t.data.data), 
                a.setData({
                    hotGoodsList: a.data.hotGoodsList
                }), a.data.hot_page++);
            },
            complete: function() {
                a.data.hot_loading = !1;
            }
        }));
    },
    showInfo: function() {
        t.showInfo(this, t.globalData.setting.speedlooting_rule_intro);
    },
    hideInfo: function() {
        t.hideInfo(this);
    },
    toHotMore: function() {
        wx.navigateTo({
            url: "../region/region"
        });
    },
    onLoad: function(a) {
        var o = a.from_uid ? a.from_uid : 0;
        this.setData({
            navH: t.globalData.navHeight,
            from_uid: o,
            share_uid: a.share_uid
        }), this.getSpeedLootingInfo(), this.getHotGoods();
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
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
    openSnatchShade: function() {
        if (t.globalData.userInfo) {
            var a = this;
            a.data.total > 0 ? (a.setData({
                showTimeBox: !0,
                endK: !0
            }), this.setInterval()) : a.setData({
                showSnatchShade: !0
            });
        } else t.checkLogin();
    },
    toOtherGoods: function(t) {
        var a = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (a += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    setInterval: function(t) {
        function a() {
            return t.apply(this, arguments);
        }
        return a.toString = function() {
            return t.toString();
        }, a;
    }(function() {
        var t = this, a = t.data.millisecond, o = t.data.second;
        t.data.setInter = setInterval(function() {
            (a += 2) >= 100 && (a = 0, o++, t.setData({
                second: o
            })), a < 10 ? t.setData({
                millisecond: "0" + a
            }) : t.setData({
                millisecond: a
            });
        }, 20);
    }),
    onTestForEnd: function() {
        var t = this;
        clearInterval(t.data.setInter), t.data.total <= 0 || (t.setData({
            endK: !1
        }), t.goTreasureResult());
    },
    goTreasureResult: function() {
        wx.showLoading({
            title: "开奖中",
            mask: !0
        });
        var a = this, o = a.data.goodsList;
        console.log(a.data.second + "***" + a.data.millisecond);
        for (var e = 0; e < o.length; e++) if (a.data.second == o[e].info[0] && a.data.millisecond == o[e].info[1]) {
            a.setData({
                is_win: 2,
                win_id: o[e].id,
                win_img: o[e].img,
                win_title: o[e].title
            });
            break;
        }
        t.util.request({
            url: "entry/wxapp/goProveSpeedResult",
            showLoading: !1,
            success: function(t) {
                if ("ok" == t.data.message) {
                    var o = a.data.total - 1;
                    a.setData({
                        total: o
                    });
                }
                setTimeout(function() {
                    a.setData({
                        showTimeBox: !1,
                        millisecond: "00",
                        second: 0
                    }), 1 == a.data.is_win ? a.setData({
                        showFailureShade: !0
                    }) : 2 == a.data.is_win && a.setData({
                        showWinureShade: !0
                    });
                }, 1e3);
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    chooseWinureShade: function() {
        this.setData({
            showWinureShade: !1,
            is_win: 1
        });
    },
    goAddAdress: function() {
        var a = this, o = a.data.address[0];
        t.util.request({
            url: "entry/wxapp/goAddSlAddress",
            data: {
                is_win: a.data.is_win,
                win_id: a.data.win_id,
                win_img: a.data.win_img,
                win_title: a.data.win_title,
                name: o.userName,
                province: o.provinceName,
                city: o.cityName,
                county: o.countyName,
                detail: o.detailInfo,
                tel: o.tel
            },
            success: function(t) {
                console.log(t.data.data), a.setData({
                    is_win: 1
                }), "ok" == t.data.message && (a.setData({
                    showWinureShade: !1
                }), a.toWinningPage());
            }
        });
    },
    onGetaddress: function() {
        var t = this;
        wx.chooseAddress({
            success: function(a) {
                var o = [];
                o = [ {
                    userName: a.userName,
                    tel: a.telNumber,
                    provinceName: a.provinceName,
                    cityName: a.cityName,
                    countyName: a.countyName,
                    detailInfo: a.detailInfo
                } ], t.setData({
                    address: o
                }), t.goAddAdress(), console.log(t.data.address);
            }
        });
    },
    addAddress: function() {
        wx.navigateTo({
            url: "./share-treasure?uid=" + t.globalData.userInfo.uid
        });
    },
    chooseSnatchShade: function() {
        this.setData({
            showSnatchShade: !1
        });
    },
    chooseFailureShade: function() {
        this.setData({
            showFailureShade: !1
        });
    },
    toShareTreasure: function() {
        t.globalData.userInfo ? wx.navigateTo({
            url: "./share-treasure?uid=" + t.globalData.userInfo.uid
        }) : t.checkLogin();
    },
    toGoodsPage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.goods_id, o = t.currentTarget.dataset.goods_sign;
        if (void 0 !== t.currentTarget.dataset.source) {
            var e = "&source=" + t.currentTarget.dataset.source;
            o && (e += "&goods_sign=" + o), wx.navigateTo({
                url: "../goods/goods?goods_id=" + a + e
            });
        } else o && (a += "&goods_sign=" + o), wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        var t = this;
        clearInterval(t.data.setInter);
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});