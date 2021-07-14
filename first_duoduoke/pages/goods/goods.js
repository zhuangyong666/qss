var t = function(t) {
    if (t && t.__esModule) return t;
    var a = {};
    if (null != t) for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (a[o] = t[o]);
    return a.default = t, a;
}(require("../charts/echarts")), a = getApp();

Page({
    data: {
        navH: 0,
        pageScroll: !1,
        animationData: "",
        showShareStatus: !1,
        source: 1,
        goods_id: 0,
        goods: !1,
        showShareBg: !1,
        poster: "",
        share_pic: !1,
        from_uid: !1,
        per: 0,
        listHeight: 0,
        isStartRewards: !1,
        opt_id: 0,
        rec_page: 1,
        rec_loading: !1,
        recGoodsList: !1,
        hot_page: 1,
        hot_loading: !1,
        hotGoodsList: !1,
        goods_url: "",
        goods_sign: "",
        left_deg: 45,
        right_deg: 45,
        appletKeyword: "",
        freered_id: 0,
        shop_red_sum: 0,
        imgPath: a.getImgUrl(),
        mobile_short_url: !1,
        beginAnimation: !1,
        tbCopy: !1,
        copyTbBtnText: "一键复制",
        onVideo: !1,
        videoPath: !1,
        showMainV: !1,
        showHisP: !1,
        ecLine: {
            lazyLoad: !0
        }
    },
    getJdStore: function() {
        var t = this;
        a.globalData.userInfo ? void 0 === t.data.goods.storeInfo.page_path ? a.util.request({
            url: "entry/wxapp/getJdStore",
            data: {
                shop_id: t.data.goods.storeInfo.sellerId
            },
            success: function(a) {
                console.log(a), t.data.goods.storeInfo.appid = a.data.data.appid, t.data.goods.storeInfo.page_path = a.data.data.page_path, 
                wx.navigateToMiniProgram({
                    appId: a.data.data.appid,
                    path: a.data.data.page_path,
                    success: function(t) {
                        console.log("ok");
                    }
                });
            }
        }) : wx.navigateToMiniProgram({
            appId: t.data.goods.storeInfo.appid,
            path: t.data.goods.storeInfo.page_path,
            success: function(t) {
                console.log("ok");
            }
        }) : a.checkLogin();
    },
    getTbStore: function() {
        var t = this;
        a.globalData.userInfo ? void 0 === t.data.goods.storeInfo.tpwd ? a.util.request({
            url: "entry/wxapp/getTbStore",
            data: {
                sellerId: t.data.goods.storeInfo.sellerId,
                shopName: t.data.goods.storeInfo.mall_name
            },
            success: function(o) {
                t.data.goods.storeInfo.tpwd = o.data.data, wx.setClipboardData({
                    data: t.data.goods.storeInfo.tpwd,
                    success: function(t) {
                        a.globalData.showSmart = !1, wx.showModal({
                            title: "系统信息",
                            content: "店铺淘口令复制成功，打开淘宝即可浏览店铺：）",
                            showCancel: !1,
                            confirmColor: "#f43f6c",
                            confirmText: "朕知道了"
                        }), wx.hideToast();
                    }
                });
            }
        }) : wx.setClipboardData({
            data: t.data.goods.storeInfo.tpwd,
            success: function(t) {
                a.globalData.showSmart = !1, wx.showModal({
                    title: "系统信息",
                    content: "店铺淘口令复制成功，打开淘宝即可浏览店铺：）",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "朕知道了"
                }), wx.hideToast();
            }
        }) : a.checkLogin();
    },
    toHomepage: function(t) {
        var a = t.currentTarget.dataset.mall_id;
        wx.navigateTo({
            url: "../homepage/homepage?mall_id=" + a
        });
    },
    showMainVideo: function() {
        this.setData({
            showMainV: !this.data.showMainV
        });
    },
    toEvapage: function() {
        wx.navigateTo({
            url: "./eva-page?goods_id=" + this.data.goods_id
        });
    },
    copyShare: function() {
        var t = this;
        a.globalData.userInfo ? wx.setClipboardData ? wx.setClipboardData({
            data: 6 == t.data.source ? t.data.goods.mobile_short_url : t.data.goods.goods_name + "\n👉︎入口" + t.data.mobile_short_url,
            success: function(o) {
                a.globalData.showSmart = !1, 6 == t.data.source && (a.globalData.userInfo.tao_ord || 1 == t.data.goods.tb_bind || wx.showModal({
                    title: "系统信息",
                    content: "“首次”复制口令购买后您须手动复制淘宝订单号，添加至小程序订单页面实现返佣，后续即可自动返佣：）",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "朕知道了",
                    complete: function() {}
                })), wx.showToast({
                    title: "复制成功"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData") : a.checkLogin();
    },
    toShoppingRed: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), a.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../shopping-red-envelopes/shopping-red-envelopes"
        });
    },
    toCatePage: function(t) {
        var a = t.currentTarget.dataset.opt_id, o = t.currentTarget.dataset.opt_name;
        wx.navigateTo({
            url: "../allclassify/cate?opt_id=" + a + "&opt_name=" + o
        });
    },
    toHotMore: function() {
        wx.navigateTo({
            url: "../region/region"
        });
    },
    toOtherGoods: function(t) {
        var a = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (a += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "./goods?goods_id=" + a
        });
    },
    getHotGoods: function() {
        var t = this;
        t.data.hot_loading || (t.data.hot_loading = !0, a.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: t.data.hot_page,
                sort_type: 1
            },
            success: function(a) {
                console.log(a), a.data.data.length < 1 || (t.data.hotGoodsList = 1 == t.data.hot_page ? a.data.data : t.data.hotGoodsList.concat(a.data.data), 
                t.setData({
                    hotGoodsList: t.data.hotGoodsList
                }), t.data.hot_page++);
            },
            complete: function() {
                t.data.hot_loading = !1;
            }
        }));
    },
    getRecGoods: function() {
        var t = this;
        t.data.rec_loading || (t.data.rec_loading = !0, a.util.request({
            url: "entry/wxapp/getRcommendGoods",
            showLoading: !1,
            data: {
                page: t.data.rec_page,
                channel_type: 7
            },
            success: function(a) {
                console.log("1"), console.log(a), a.data.data.length < 1 || (t.data.recGoodsList = 1 == t.data.rec_page ? a.data.data : t.data.recGoodsList.concat(a.data.data), 
                t.setData({
                    recGoodsList: t.data.recGoodsList
                }, function() {
                    t.data.rec_page++;
                }));
            },
            complete: function() {
                t.data.rec_loading = !1;
            }
        }));
    },
    getSimGoods: function() {
        var t = this;
        t.data.rec_loading || (t.data.rec_loading = !0, a.util.request({
            url: "entry/wxapp/getRcommendGoods",
            showLoading: !1,
            data: {
                page: t.data.rec_page,
                channel_type: 3,
                goods_id: t.data.goods_id,
                goods_sign: t.data.goods.goods_sign
            },
            success: function(a) {
                console.log("1"), console.log(a), a.data.data.length < 1 || (t.data.recGoodsList = 1 == t.data.rec_page ? a.data.data : t.data.recGoodsList.concat(a.data.data), 
                t.setData({
                    recGoodsList: t.data.recGoodsList
                }, function() {
                    t.data.rec_page++;
                }));
            },
            complete: function() {
                t.data.rec_loading = !1;
            }
        }));
    },
    toggleCollect: function() {
        var t = this;
        a.globalData.userInfo ? a.util.request({
            url: "entry/wxapp/toggleGoodsCollect",
            data: {
                goods_id: t.data.goods_id,
                source: t.data.source
            },
            success: function(a) {
                var o = t.data.goods.isCollect, e = o ? "已取消收藏" : "收藏成功";
                t.setData({
                    "goods.isCollect": !o
                }), wx.showToast({
                    title: e,
                    icon: "success"
                });
            }
        }) : a.checkLogin();
    },
    toVip: function() {
        wx.navigateTo({
            url: "../guest/guest"
        });
    },
    calPageHeight: function() {
        var t = this, a = wx.createSelectorQuery();
        a.select("#cont").boundingClientRect(), a.exec(function(a) {
            t.data.listHeight = a[0].height;
        });
    },
    goRedeem: function() {
        wx.navigateTo({
            url: "../redeem/redeem"
        });
    },
    onReachBottom: function() {
        if (1 == this.data.goods.task.status && !this.data.isStartRewards && !this.data.goods.isRewards) {
            this.data.isStartRewards = !0, this.setData({
                per: 100
            });
            var t = this;
            a.util.request({
                url: "entry/wxapp/rewardsViewGoods",
                data: {
                    goods_id: t.data.goods_id,
                    source: t.data.source
                },
                showLoading: !1,
                success: function(o) {
                    "ok" == o.data.message ? (wx.showToast({
                        title: "+" + (t.data.goods.task.type ? t.data.goods.task.coin + "金币" : t.data.goods.task.money + "元"),
                        icon: "success"
                    }), t.setData({
                        "goods.isRewards": !0
                    }), a.innerAudioContext.play()) : wx.showToast({
                        title: o.data.message,
                        icon: "none"
                    });
                }
            });
        }
    },
    showGoodsPic: function(t) {
        console.log(t);
        var a = t.target.dataset.index, o = this.data.goods;
        if (6 != this.data.source && 7 != this.data.source || !o.goods_detail_pics) wx.previewImage({
            current: o.goods_gallery_urls[a],
            urls: o.goods_gallery_urls
        }); else {
            var e = [];
            if (7 == this.data.source) for (var s in o.goods_detail_pics) /https/.test(o.goods_detail_pics[s]) ? e.push(o.goods_detail_pics[s]) : e.push("https:" + o.goods_detail_pics[s]); else for (var s in o.goods_detail_pics) /https/.test(o.goods_detail_pics[s].img) ? e.push(o.goods_detail_pics[s].img) : e.push("https:" + o.goods_detail_pics[s].img);
            console.log(e), wx.previewImage({
                current: e[a],
                urls: e,
                fail: function(t) {
                    console(t);
                }
            });
        }
    },
    getSharePic: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/goodsSharePic",
            data: {
                goods_id: t.data.goods_id,
                source: t.data.source
            },
            showLoading: !1,
            success: function(a) {
                var o = a.data.data;
                t.setData({
                    share_pic: o
                });
            }
        });
    },
    confirmSavePoster: function() {
        this.setData({
            showShareImg: !1
        }), this.hideShare();
    },
    delPoster: function() {
        a.util.request({
            url: "entry/wxapp/delTempPoster",
            showLoading: !1,
            success: function(t) {
                console.log(t);
            }
        });
    },
    saveGoodsPoster: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getGoodsPoster",
            data: {
                goods_id: t.data.goods_id,
                source: t.data.source
            },
            success: function(a) {
                t.setData({
                    showShareStatus: !1
                });
                var o = a.data.data;
                t.setData({
                    poster: o,
                    showShareImg: !0
                }), wx.getImageInfo({
                    src: o,
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
                        t.delPoster();
                    }
                });
            }
        });
    },
    goIndex: function() {
        this.rmFromUid(), wx.switchTab({
            url: "../index/index"
        });
    },
    showShare: function() {
        if (a.globalData.userInfo) {
            var t = wx.createAnimation({
                duration: 500,
                timingFunction: "ease",
                delay: 0
            });
            this.animation = t, t.translateY(300).step(), this.setData({
                animationData: t.export(),
                showShareStatus: !0,
                showShareBg: !0
            }), setTimeout(function() {
                t.translateY(0).step(), this.setData({
                    animationData: t.export()
                });
            }.bind(this), 1);
        } else a.checkLogin();
    },
    hideShare: function() {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            delay: 0
        });
        this.animation = t, t.translateY(300).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationData: t.export(),
                showShareStatus: !1,
                showShareBg: !1,
                showShareImg: !1
            });
        }.bind(this), 200);
    },
    navBack: function() {
        a.globalData.from_uid ? this.data.find ? wx.navigateBack() : this.goIndex() : wx.navigateBack(), 
        this.rmFromUid();
    },
    rmFromUid: function() {
        a.globalData.from_uid && (a.globalData.from_uid = !1, a.globalData.from_act = !1);
    },
    onLoad: function(t) {
        if (console.log("options", t), this.setData({
            navH: a.globalData.navHeight,
            from_uid: a.globalData.from_uid,
            find: t.find,
            freered_id: t.freered_id ? t.freered_id : 0
        }), console.log("lololo", this.data.appletKeyword), void 0 !== t.goods_id && 0 != t.goods_id) if (void 0 !== t.source && (this.setData({
            source: t.source
        }), 3 != this.data.source && 5 != this.data.source || (this.data.goods_url = void 0 !== t.goods_url ? t.goods_url : "")), 
        1 == this.data.source && void 0 !== t.goods_sign && (this.data.goods_sign = t.goods_sign), 
        this.data.goods_id = t.goods_id, this.getGoodsDetail(), this.getHotGoods(), 1 == this.data.source && 1 == this.data.shopred_switch && (this.getShopRedSum(), 
        this.startSetInter()), a.globalData.setting) this.setData({
            appletKeyword: a.globalData.setting.appletKeyword,
            shopred_switch: a.globalData.setting.shopred_switch,
            ddk_rule_url: a.globalData.setting.dd_rule_url
        }); else {
            var o = this;
            a.config.init(function() {
                o.setData({
                    appletKeyword: a.globalData.setting.appletKeyword,
                    shopred_switch: a.globalData.setting.shopred_switch,
                    ddk_rule_url: a.globalData.setting.dd_rule_url
                });
            });
        } else wx.navigateBack();
    },
    toTaskPage: function() {
        wx.switchTab({
            url: "/first_duoduoke/pages/task/task"
        });
    },
    getShopRedSum: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getShopRedSum",
            showLoading: !1,
            success: function(a) {
                t.setData({
                    shop_red_sum: a.data.data
                });
            }
        });
    },
    showACommPics: function(t) {
        var a = t.target.dataset.caidx, o = this.data.goods.comments.comment.commentAppend.images;
        for (var e in o) o[e] = "https:" + o[e];
        wx.previewImage({
            current: o[a],
            urls: o
        });
    },
    showCommPics: function(t) {
        if (6 == this.data.source) {
            var a = t.target.dataset.cidx, o = this.data.goods.comments.comment.images;
            for (var e in o) o[e] = "https:" + o[e];
        }
        if (2 == this.data.source) {
            var s = t.target.dataset.cdx, a = t.target.dataset.cidx, i = this.data.goods.comments.list[s].imageList, o = [];
            for (var e in i) o[e] = i[e].url;
        }
        wx.previewImage({
            current: o[a],
            urls: o
        });
    },
    wachVideo: function(t) {
        console.log(t);
        var a = this, o = t.target.dataset.path;
        a.data.onVideo = !a.data.onVideo, a.setData({
            onVideo: a.data.onVideo,
            videoPath: o
        });
    },
    getTbComments: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getTbComments",
            data: {
                goods_id: t.data.goods_id,
                show: 1
            },
            showLoading: !1,
            success: function(a) {
                t.setData({
                    "goods.comments": a.data.data
                });
            }
        });
    },
    getHistoryPrice: function() {
        var o = this;
        a.util.request({
            url: "entry/wxapp/getHistoryPrice",
            data: {
                goods_id: (4 == o.data.source ? o.data.goods.brandId + "-" : "") + o.data.goods_id,
                source: o.data.source,
                shop_type: o.data.goods.shop_type
            },
            showLoading: !1,
            success: function(e) {
                if ("[]" != e.data.data) {
                    var s = JSON.parse(e.data.data), i = new a.util.date(), d = {
                        x: [],
                        y: [],
                        z: [],
                        h: []
                    }, n = 0;
                    for (var r in s) for (var c in s[r]) 0 == c && (d.x.push(i.dateToStr("MM-dd", new Date(s[r][c]))), 
                    d.h.push(i.dateToStr("yyyy年MM月dd日", new Date(s[r][c])))), 1 == c && (0 == r ? n = s[r][c] : s[r][c] < n && (n = s[r][c]), 
                    d.y.push(s[r][c])), 2 == c && d.z.push(s[r][c]);
                    o.setData({
                        showHisP: !0,
                        hisp_lowest: n
                    });
                    var g = o.selectComponent("#mychart-dom-line"), l = {
                        color: [ "#FF6729" ],
                        grid: {
                            containLabel: !0
                        },
                        tooltip: {
                            show: !0,
                            trigger: "axis",
                            position: [ 10, 5 ],
                            backgroundColor: "rgba(236,108,56, 1)",
                            formatter: function(t) {
                                var a = t[0].dataIndex;
                                return d.h[a] + " ￥" + d.y[a] + (d.z[a] ? "\n" + d.z[a] : "");
                            }
                        },
                        xAxis: {
                            type: "category",
                            boundaryGap: !1,
                            data: d.x,
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        yAxis: {
                            x: "center",
                            type: "value",
                            splitLine: {
                                lineStyle: {
                                    type: "dashed"
                                }
                            }
                        },
                        series: [ {
                            name: "历史价格",
                            type: "line",
                            data: d.y
                        } ]
                    };
                    g.init(function(a, o, e) {
                        var s = t.init(a, null, {
                            width: o,
                            height: e
                        });
                        return a.setChart(s), s.setOption(l), s;
                    });
                }
            }
        });
    },
    getGoodsDetail: function(t) {
        var o = this;
        switch (parseInt(o.data.source)) {
          case 1:
            var e = "entry/wxapp/getGoodsDetail", s = {
                goods_id: o.data.goods_id,
                freered_id: o.data.freered_id,
                goods_sign: o.data.goods_sign
            };
            break;

          case 2:
            var e = "entry/wxapp/getJdDetail", s = {
                goods_id: o.data.goods_id
            };
            break;

          case 3:
            var e = "entry/wxapp/getMgDetail", s = {
                goods_url: encodeURIComponent(o.data.goods_url),
                goods_id: o.data.goods_id
            };
            break;

          case 4:
            var e = "entry/wxapp/getVipDetail", s = {
                goods_id: o.data.goods_id
            };
            break;

          case 5:
            var e = "entry/wxapp/getSnDetail", s = {
                goods_url: o.data.goods_url,
                goods_id: o.data.goods_id
            };
            break;

          case 6:
            var e = "entry/wxapp/getTbDetail", s = {
                goods_id: o.data.goods_id
            };
            break;

          case 7:
            var e = "entry/wxapp/getKlDetail", s = {
                goods_id: o.data.goods_id
            };
            break;

          case 9:
            var e = "entry/wxapp/getSpDetail", s = {
                goods_id: o.data.goods_id
            };
        }
        a.util.request({
            url: e,
            data: s,
            success: function(e) {
                console.log(e), "function" == typeof t && t();
                var s = e.data.data;
                s.mobile_short_url = s.mobile_short_url ? s.mobile_short_url : "", o.setData({
                    mobile_short_url: s.mobile_short_url,
                    goods: s,
                    opt_id: s.opt_id,
                    goods_redpack: ((s.min_group_price - s.coupon_discount) / 200).toFixed(2)
                }, function() {
                    o.getSharePic(), 1 == o.data.source ? o.getSimGoods() : o.getRecGoods();
                    var t = o.data.source;
                    3 != t && 9 != t && o.getHistoryPrice(), 6 == o.data.source && (o.getTbComments(), 
                    1 == a.globalData.setting.tb_closure_switch && wx.setClipboardData && wx.setClipboardData({
                        data: o.data.goods.mobile_short_url,
                        success: function() {
                            a.globalData.showSmart = !1, wx.hideToast();
                        }
                    }));
                });
            }
        });
    },
    clearMallLogo: function() {
        this.data.goods.storeInfo.mall_logo && this.setData({
            "goods.storeInfo.mall_logo": ""
        });
    },
    onReady: function() {},
    onShow: function() {
        1 == this.data.source && !1 !== this.data.goods && "" == this.data.goods.mobile_short_url && this.getGoodsDetail(), 
        a.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getGoodsDetail(function() {
            wx.stopPullDownRefresh();
        });
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    fromToDuoDuo: function() {
        var t = this;
        if (1 == t.data.source && "" == t.data.goods.mobile_short_url) a.globalData.userInfo ? a.util.request({
            url: "entry/wxapp/checkUserAuth",
            success: function(a) {
                console.log(a);
                var o = a.data;
                "need" == o.message ? wx.showModal({
                    title: "系统信息",
                    content: "需要先去拼多多授权才能购买:)",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "去授权",
                    complete: function() {
                        wx.navigateToMiniProgram({
                            appId: o.data.app_id,
                            path: o.data.page_path,
                            success: function(t) {
                                console.log("ok"), wx.navigateBack();
                            }
                        });
                    }
                }) : t.data.goods.predict_promotion_rate ? wx.navigateToMiniProgram({
                    appId: t.data.goods.appid,
                    path: t.data.goods.page_path,
                    success: function(t) {
                        console.log("ok");
                    }
                }) : wx.showModal({
                    title: "系统信息",
                    content: "亲~，该商品被系统判定为比价商品，购买后无法获得佣金哦",
                    showCancel: !0,
                    confirmColor: "#f43f6c",
                    cancelColor: "#f43f6c",
                    confirmText: "直接购买",
                    cancelText: t.data.ddk_rule_url ? "查看新规" : "考虑看看",
                    success: function(a) {
                        a.confirm && wx.navigateToMiniProgram({
                            appId: t.data.goods.appid,
                            path: t.data.goods.page_path,
                            success: function(t) {
                                console.log("ok");
                            }
                        }), a.cancel && t.data.ddk_rule_url && wx.navigateTo({
                            url: "../index/web-view?url=" + encodeURIComponent(t.data.ddk_rule_url)
                        });
                    }
                });
            }
        }) : a.checkLogin(); else {
            var o = "";
            7 == t.data.source && (o = {
                unionId: t.data.goods.kl_unionId,
                tc1: t.data.goods.tc1,
                tc2: t.data.goods.tc2
            }), wx.navigateToMiniProgram({
                appId: t.data.goods.appid,
                path: t.data.goods.page_path,
                extraData: o,
                success: function(t) {
                    console.log("ok");
                },
                fail: function(t) {
                    console.log(t);
                }
            });
        }
    },
    toDuoDuo: function() {
        var t = this;
        if (a.globalData.userInfo) if (1 == t.data.source) a.util.request({
            url: "entry/wxapp/checkUserAuth",
            success: function(a) {
                console.log(a);
                var o = a.data;
                "need" == o.message ? wx.showModal({
                    title: "系统信息",
                    content: "需要先去拼多多授权才能购买:)",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "去授权",
                    complete: function() {
                        wx.navigateToMiniProgram({
                            appId: o.data.app_id,
                            path: o.data.page_path,
                            success: function(t) {
                                console.log("ok"), wx.navigateBack();
                            }
                        });
                    }
                }) : t.data.goods.predict_promotion_rate ? wx.navigateToMiniProgram({
                    appId: t.data.goods.appid,
                    path: t.data.goods.page_path,
                    success: function(t) {
                        console.log("ok");
                    }
                }) : wx.showModal({
                    title: "系统信息",
                    content: "亲~，该商品被系统判定为比价商品，购买后无法获得佣金哦",
                    showCancel: !0,
                    confirmColor: "#f43f6c",
                    cancelColor: "#f43f6c",
                    confirmText: "直接购买",
                    cancelText: t.data.ddk_rule_url ? "查看新规" : "考虑看看",
                    success: function(a) {
                        a.confirm && wx.navigateToMiniProgram({
                            appId: t.data.goods.appid,
                            path: t.data.goods.page_path,
                            success: function(t) {
                                console.log("ok");
                            }
                        }), a.cancel && t.data.ddk_rule_url && wx.navigateTo({
                            url: "../index/web-view?url=" + encodeURIComponent(t.data.ddk_rule_url)
                        });
                    }
                });
            }
        }); else if (6 == t.data.source) t.setData({
            tbCopy: !0
        }); else {
            var o = "";
            7 == t.data.source && (o = {
                unionId: t.data.goods.kl_unionId,
                tc1: t.data.goods.tc1,
                tc2: t.data.goods.tc2
            }), wx.navigateToMiniProgram({
                appId: t.data.goods.appid,
                path: t.data.goods.page_path,
                extraData: o,
                success: function(t) {
                    console.log("ok");
                }
            });
        } else a.checkLogin();
    },
    copyTpwd: function() {
        var t = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: t.data.goods.mobile_short_url,
            success: function(o) {
                a.globalData.showSmart = !1, t.setData({
                    copyTbBtnText: "复制成功"
                }), a.globalData.userInfo.tao_ord || 1 == t.data.goods.tb_bind || (wx.showModal({
                    title: "系统信息",
                    content: "“首次”复制口令购买后您须手动复制淘宝订单号，添加至小程序订单页面实现返佣，后续即可自动返佣：）",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "朕知道了",
                    complete: function() {}
                }), wx.hideToast());
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    hidetbCopy: function() {
        this.setData({
            tbCopy: !1
        });
    },
    onShareTimeline: function() {
        var t = this, o = void 0 !== a.globalData.userInfo.uid ? "from_uid=" + a.globalData.userInfo.uid + "&goods_id=" + t.data.goods_id + "&from_act=share&source=" + t.data.source : "goods_id=" + t.data.goods_id + "&source=" + t.data.source;
        return {
            title: t.data.goods.goods_name,
            imageUrl: t.data.goods.goods_gallery_urls[0],
            query: o
        };
    },
    onShareAppMessage: function() {
        var t = this, o = t.data.goods.share_title ? t.data.goods.share_title : "购物省钱，分享赚钱", e = t.data.share_pic ? t.data.share_pic : a.globalData.setting.share_pic;
        return {
            title: o,
            path: "/first_duoduoke/pages/goods/goods" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&goods_id=" + t.data.goods_id + "&from_act=share&source=" + t.data.source : "?goods_id=" + t.data.goods_id + "&source=" + t.data.source),
            imageUrl: e,
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
    },
    startSetInter: function() {
        var t = this;
        t.setData({
            beginAnimation: !0
        }), setTimeout(function() {
            t.endSetInter();
        }, 3e3);
    },
    endSetInter: function() {
        var t = this;
        t.setData({
            beginAnimation: !1
        }), t.startSetInter();
    },
    onPageScroll: function(t) {
        if (a.globalData.userInfo.uid && "devtools" != a.platform && 1 == this.data.goods.task.status && !this.data.isStartRewards) {
            var o = Math.round(t.scrollTop / this.data.listHeight * 1e4) / 100;
            this.setData({
                per: o
            }), 0 == this.data.per ? this.setData({
                left_deg: 45,
                right_deg: 45
            }) : this.data.per <= 5 ? this.setData({
                left_deg: 45,
                right_deg: 63
            }) : this.data.per <= 10 ? this.setData({
                left_deg: 45,
                right_deg: 81
            }) : this.data.per <= 15 ? this.setData({
                left_deg: 45,
                right_deg: 99
            }) : this.data.per <= 20 ? this.setData({
                left_deg: 45,
                right_deg: 117
            }) : this.data.per <= 25 ? this.setData({
                left_deg: 45,
                right_deg: 135
            }) : this.data.per <= 30 ? this.setData({
                left_deg: 45,
                right_deg: 153
            }) : this.data.per <= 35 ? this.setData({
                left_deg: 45,
                right_deg: 171
            }) : this.data.per <= 40 ? this.setData({
                left_deg: 45,
                right_deg: 189
            }) : this.data.per <= 45 ? this.setData({
                left_deg: 45,
                right_deg: 207
            }) : this.data.per <= 50 ? this.setData({
                left_deg: 45,
                right_deg: 225
            }) : this.data.per <= 55 ? this.setData({
                left_deg: 63,
                right_deg: 225
            }) : this.data.per <= 60 ? this.setData({
                left_deg: 81,
                right_deg: 225
            }) : this.data.per <= 65 ? this.setData({
                left_deg: 99,
                right_deg: 225
            }) : this.data.per <= 70 ? this.setData({
                left_deg: 117,
                right_deg: 225
            }) : this.data.per <= 75 ? this.setData({
                left_deg: 135,
                right_deg: 225
            }) : this.data.per <= 80 ? this.setData({
                left_deg: 153,
                right_deg: 225
            }) : this.data.per <= 85 ? this.setData({
                left_deg: 171,
                right_deg: 225
            }) : this.data.per <= 90 ? this.setData({
                left_deg: 189,
                right_deg: 225
            }) : this.data.per <= 95 ? this.setData({
                left_deg: 207,
                right_deg: 225
            }) : this.data.per >= 100 && this.setData({
                left_deg: 225,
                right_deg: 225
            });
        }
    }
});