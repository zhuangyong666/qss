var o = getApp();

Page({
    data: {
        navH: o.globalData.navHeight,
        showNavcolor: !1,
        height: "",
        hot_page: 1,
        hotGoodsList: !1,
        address: [],
        thisGood: {},
        goods_id: 0,
        source: 0,
        goods_url: "",
        rushbuyorder_id: 0,
        come_share_id: 0,
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0
    },
    navBack: function() {
        console.log(this.data.come_share_id), 0 == this.data.come_share_id ? wx.navigateBack() : wx.navigateTo({
            url: "./rush-buy?come_share_id=" + this.data.come_share_id
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onPageScroll: function(o) {
        o.scrollTop >= 150 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    getHotGoods: function() {
        var a = this;
        a.data.hot_loading || (a.data.hot_loading = !0, o.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: a.data.hot_page,
                sort_type: 0
            },
            success: function(o) {
                console.log(o), o.data.data.length < 1 || (a.data.hotGoodsList = 1 == a.data.hot_page ? o.data.data : a.data.hotGoodsList.concat(o.data.data), 
                a.setData({
                    hotGoodsList: a.data.hotGoodsList
                }), a.data.hot_page++);
            },
            complete: function() {
                a.data.hot_loading = !1;
            }
        }));
    },
    toOtherGoods: function(o) {
        var a = o.currentTarget.dataset.goods_id;
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    onGetaddress: function() {
        var o = this;
        o.data.is_look_video && o.data.video_ad_code ? wx.showModal({
            title: "提示",
            content: "观看视频购买商品",
            showCancel: !0,
            confirmColor: "#f43f6c",
            cancelColor: "#bbb",
            confirmText: "观看视频",
            cancelText: "放弃购买",
            success: function(a) {
                a.confirm && o.data.videoAd && o.data.videoAd.show();
            }
        }) : wx.chooseAddress({
            success: function(a) {
                var t = [];
                t = [ {
                    userName: a.userName,
                    tel: a.telNumber,
                    provinceName: a.provinceName,
                    cityName: a.cityName,
                    countyName: a.countyName,
                    detailInfo: a.detailInfo
                } ], o.setData({
                    address: t
                }), console.log(o.data.address);
            }
        });
    },
    payRushBuy: function() {
        if (o.globalData.userInfo) {
            var a = this, t = a.data.address[0];
            o.util.request({
                url: "entry/wxapp/getAddOrder",
                data: {
                    img: a.data.thisGoods.goods_image_url,
                    title: a.data.thisGoods.goods_name,
                    r_id: a.data.r_id,
                    name: t.userName,
                    province: t.provinceName,
                    city: t.cityName,
                    county: t.countyName,
                    detail: t.detailInfo,
                    tel: t.tel
                },
                success: function(o) {
                    console.log(o.data.data), a.setData({
                        rushbuyorder_id: o.data.data.rushbuyorder_id
                    }), "ok" == o.data.message ? wx.requestPayment({
                        timeStamp: o.data.data.timeStamp,
                        nonceStr: o.data.data.nonceStr,
                        package: o.data.data.package,
                        signType: "MD5",
                        paySign: o.data.data.paySign,
                        success: function(o) {
                            console.log("succ:"), console.log(o), a.beginRushbuy();
                        },
                        fail: function(o) {
                            console.log("fail:"), console.log(o), a.failPayAfter("");
                        }
                    }) : a.failPayAfter("");
                }
            });
        } else o.checkLogin();
    },
    beginRushbuy: function() {
        var a = this;
        o.util.request({
            url: "entry/wxapp/beginRushbuy",
            data: {
                r_id: a.data.r_id,
                rushbuyorder_id: a.data.rushbuyorder_id,
                come_share_id: a.data.come_share_id
            },
            success: function(o) {
                console.log(o), "ok" == o.data.message && wx.redirectTo({
                    url: "./order-success?id=" + o.data.data.id + "&key=1"
                });
            }
        });
    },
    failPayAfter: function(o) {
        wx.showToast({
            title: "支付失败" + o,
            icon: "none"
        });
    },
    goShareFriend: function(a) {
        if (o.globalData.userInfo) {
            var t = a.currentTarget.dataset.r_id;
            wx.navigateTo({
                url: "./share-rush-buy?come_share_id=" + this.data.come_share_id + "&r_id=" + t + "&log_id=0&goods_image_url=" + this.data.thisGoods.goods_image_url
            });
        } else o.checkLogin();
    },
    loginAfter: function(a) {
        o.loginAfter(a);
    },
    loginCancel: function() {
        o.loginCancel();
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(o) {
                t.setData({
                    width: o.windowWidth,
                    height: o.windowHeight
                });
            }
        }), this.getHotGoods(), this.setData({
            video_ad_code: o.globalData.setting.video_ad_code,
            goods_id: a.goods_id ? a.goods_id : 0,
            source: a.source ? a.source : 0,
            r_id: a.id,
            come_share_id: a.come_share_id,
            from_act: a.from_act ? a.from_act : "no"
        }), this.getThisRushBuyGood();
    },
    initVideoAd: function() {
        var o = this;
        !1 === o.data.videoAd && wx.createRewardedVideoAd && o.data.video_ad_code && (o.data.videoAd = wx.createRewardedVideoAd({
            adUnitId: "adunit-" + o.data.video_ad_code
        }), o.data.videoAd.onLoad(function() {
            console.log("Video_AD Load OK...");
        }), o.data.videoAd.onClose(function(a) {
            console.log("Video_AD Close OK ..."), console.log(a), a && a.isEnded || void 0 === a ? (console.log("watch OK ..."), 
            o.setData({
                is_look_video: !1
            })) : (console.log("noWatch OK ..."), wx.showModal({
                title: "提示",
                content: "看完视频才能购买哦~~~",
                showCancel: !0,
                confirmColor: "#f43f6c",
                confirmText: "继续观看",
                cancelColor: "#bbb",
                success: function(a) {
                    a.confirm && o.data.videoAd && o.data.videoAd.show();
                },
                fail: function(o) {
                    console.log(o, "showModalErr");
                }
            }));
        }), o.data.videoAd.onError(function(o) {
            console.log(o, "VieoERR....");
        }));
    },
    getThisRushBuyGood: function() {
        var a = this;
        o.util.request({
            url: "entry/wxapp/getThisRushBuyGood",
            data: {
                r_id: a.data.r_id,
                goods_id: a.data.goods_id,
                source: a.data.source,
                from_act: a.data.from_act
            },
            success: function(t) {
                console.log(t.data.data), o.globalData.userInfo && "scan" == a.data.from_act && (o.globalData.setting = t.data.data.setting, 
                a.setData({
                    video_ad_code: t.data.data.setting.video_ad_code
                })), a.data.video_ad_code && "devtools" != o.platform && a.initVideoAd(), a.setData({
                    thisGood: t.data.data.list
                }), a.getGoodsInfo();
            }
        });
    },
    getGoodsInfo: function() {
        var a = this;
        switch (parseInt(a.data.thisGood.source)) {
          case 1:
            var t = "entry/wxapp/getGoodsDetail", d = {
                goods_id: a.data.thisGood.goods_id,
                goods_sign: a.data.thisGood.goods_sign
            };
            break;

          case 2:
            var t = "entry/wxapp/getJdDetail", d = {
                goods_id: a.data.thisGood.goods_id
            };
            break;

          case 3:
            var t = "entry/wxapp/getMgDetail", d = {
                goods_url: encodeURIComponent(a.data.thisGood.goods_url),
                goods_id: a.data.thisGood.goods_id
            };
            break;

          case 4:
            var t = "entry/wxapp/getVipDetail", d = {
                goods_id: a.data.thisGood.goods_id
            };
            break;

          case 5:
            var t = "entry/wxapp/getSnDetail", d = {
                goods_url: a.data.thisGood.goods_url,
                goods_id: a.data.thisGood.goods_id
            };
            break;

          case 6:
            var t = "entry/wxapp/getTbDetail", d = {
                goods_id: a.data.goods_id
            };
            break;

          case 7:
            var t = "entry/wxapp/getKlDetail", d = {
                goods_id: a.data.goods_id
            };
        }
        o.util.request({
            url: t,
            data: d,
            success: function(o) {
                console.log(o);
                var t = o.data.data;
                a.setData({
                    thisGoods: t
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});