function a(a, t, e) {
    return t in a ? Object.defineProperty(a, t, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[t] = e, a;
}

var t = getApp();

Page({
    data: {
        saleWallpaper: [],
        ownerrecList: [],
        orderShowList: [],
        yuan_bouns: "",
        app_name: "",
        avatar: "",
        navH: 0,
        plusH: 0,
        num: 2,
        is_zan: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        wp_id: 0,
        wp_index: 0,
        onVideo: !1,
        videoPath: null,
        share_title: "",
        share_pic: "",
        find: "find"
    },
    showWppic: function(a) {
        console.log(a);
        var t = a.currentTarget.dataset.index;
        wx.previewImage({
            urls: [ this.data.saleWallpaper[t].path ]
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    getSaleWallpaper: function(a) {
        var e = this;
        e.data.loading = !0, t.util.request({
            url: "entry/wxapp/getSaleWallpaper",
            data: {
                page: e.data.page
            },
            success: function(t) {
                if ("function" == typeof a && a(), t.data.data.length < 1) return console.log("到底了"), 
                void (e.data.lastPage = !0);
                e.data.saleWallpaper = 1 == e.data.page ? t.data.data : e.data.saleWallpaper.concat(t.data.data), 
                e.setData({
                    saleWallpaper: e.data.saleWallpaper
                }), e.data.loading = !1;
            }
        });
    },
    getPosterPic: function(a) {
        var e = this, o = a.currentTarget.dataset.wp_id, r = a.currentTarget.dataset.wp_idx;
        t.globalData.userInfo ? (e.setData({
            btnDis: !0
        }), t.util.request({
            url: "entry/wxapp/getQrWallpaper",
            data: {
                wp_id: o
            },
            success: function(a) {
                wx.showLoading({
                    title: "加载中"
                }), wx.downloadFile({
                    url: a.data.data,
                    success: function(a) {
                        wx.hideLoading(), 200 === a.statusCode && (e.setData({
                            btnDis: !1
                        }), wx.saveImageToPhotosAlbum({
                            filePath: a.tempFilePath,
                            success: function(a) {
                                wx.setClipboardData({
                                    data: e.data.saleWallpaper[r].share_title,
                                    success: function(a) {
                                        wx.hideLoading(), wx.showModal({
                                            title: "系统提示",
                                            content: "海报和文案素材已保存",
                                            confirmColor: "#f43f6c",
                                            confirmText: "知道了",
                                            showCancel: !1,
                                            success: function(a) {}
                                        });
                                    },
                                    fail: function(a) {
                                        console.log(a);
                                    }
                                });
                            }
                        })), t.util.request({
                            url: "entry/wxapp/delTempFile",
                            success: function(a) {}
                        });
                    },
                    fail: function(a) {
                        wx.showToast({
                            title: "获取海报图失败",
                            icon: "none"
                        });
                    }
                });
            }
        })) : t.checkLogin();
    },
    zanSaleWallpaper: function(a) {
        var e = this;
        console.log(a);
        var o = a.currentTarget.dataset.index, r = a.currentTarget.dataset.wp_id;
        t.globalData.userInfo ? t.util.request({
            url: "entry/wxapp/ZanSaleWallpaper",
            data: {
                wp_id: r,
                index: o
            },
            success: function(a) {
                console.log("222", a.data);
                var t = a.data;
                "" === t.data ? (e.data.saleWallpaper[o].is_zan = !0, e.onNorepeat()) : (e.data.saleWallpaper[o].zan_data.length >= 6 && e.data.saleWallpaper[o].zan_data.splice(5, 1), 
                e.data.saleWallpaper[o].zan_data.unshift(t.data), e.data.saleWallpaper[o].zan_count = 1, 
                e.data.saleWallpaper[o].is_zan = !0), e.setData({
                    saleWallpaper: e.data.saleWallpaper
                });
            }
        }) : t.checkLogin();
    },
    onNorepeat: function(a) {
        wx.showToast({
            title: "你已经点过赞了",
            icon: "success"
        });
    },
    wachVideo: function(a) {
        console.log(a);
        var t = this, e = a.target.dataset.path;
        console.log("gugugu"), t.data.onVideo = !t.data.onVideo, t.setData({
            onVideo: t.data.onVideo,
            videoPath: e
        });
    },
    onLoad: function(a) {
        console.log("options", a), this.setData({
            navH: t.globalData.navHeight,
            app_name: t.globalData.setting.name,
            avatar: t.globalData.setting.logo
        }), this.thisNav(), this.getSaleWallpaper(), this.getOwnerrecList(), this.getOrderShow();
    },
    thisNav: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getBottomNav",
            showLoading: !1,
            success: function(t) {
                console.log(t.data.data);
                var e = t.data.data;
                void 0 !== e.list.length && e.list.length < 1 ? wx.setTabBarStyle({
                    color: e.color,
                    selectedColor: e.selectedColor,
                    backgroundColor: e.backgroundColor,
                    borderStyle: 2 == e.borderStyle ? "black" : "white",
                    fail: function(a) {
                        console.log(a);
                    }
                }) : (wx.hideTabBar(), a.setData({
                    tabBar: t.data.data,
                    "tabBar.thisurl": a.__route__
                }));
            }
        });
    },
    getOwnerrecList: function(a) {
        var e = this;
        e.data.loading = !0, t.util.request({
            url: "entry/wxapp/getOwnerrecList",
            data: {
                page: e.data.page
            },
            success: function(t) {
                if ("function" == typeof a && a(), t.data.data.length < 1) return console.log("到底了"), 
                void (e.data.lastPage = !0);
                e.data.ownerrecList = 1 == e.data.page ? t.data.data : e.data.ownerrecList.concat(t.data.data), 
                console.log(e.data.ownerrecList);
                for (var o = 0; o < e.data.ownerrecList.length; o++) if (console.log(o, e.data.ownerrecList[o]), 
                e.data.ownerrecList[o].short_title) {
                    e.data.ownerrecList[o].showAllcontent = !1, console.log(e.data.ownerrecList[o]);
                }
                e.setData({
                    ownerrecList: e.data.ownerrecList
                }), e.data.loading = !1;
            }
        });
    },
    showGoodsPic: function(a) {
        console.log(a);
        var t = a.target.dataset.index, e = a.target.dataset.idx, o = this.data.ownerrecList[e];
        wx.previewImage({
            current: o.pics[t],
            urls: o.pics
        });
    },
    showGoodsPicc: function(a) {
        console.log(a);
        var t = a.target.dataset.index, e = a.target.dataset.idx, o = this.data.orderShowList[e];
        wx.previewImage({
            current: o.pics[t],
            urls: o.pics
        });
    },
    toGoodsPage: function(a) {
        console.log(a);
        var e = a.currentTarget.dataset.goods_id, o = a.currentTarget.dataset.source, r = a.currentTarget.dataset.from_uid, n = a.currentTarget.dataset.goods_sign;
        if (r && (t.globalData.from_uid = r), void 0 !== a.currentTarget.dataset.source) {
            var s = "&source=" + o, i = "&from_uid=" + t.globalData.from_uid;
            n && (s += "&goods_sign=" + n), wx.navigateTo({
                url: "../goods/goods?goods_id=" + e + s + i + "&find=" + this.data.find
            });
        } else n && (e += "&goods_sign=" + n), wx.navigateTo({
            url: "../goods/goods?goods_id=" + e
        });
    },
    getOrderShow: function(a) {
        var e = this;
        e.data.loading = !0, t.util.request({
            url: "entry/wxapp/getOrderShow",
            data: {
                page: e.data.page
            },
            success: function(t) {
                if ("function" == typeof a && a(), t.data.data.length < 1) return console.log("到底了"), 
                void (e.data.lastPage = !0);
                e.data.orderShowList = 1 == e.data.page ? t.data.data : e.data.orderShowList.concat(t.data.data);
                for (var o = 0; o < e.data.orderShowList.length; o++) if (e.data.orderShowList[o].short_content) {
                    e.data.orderShowList[o].showAllcontent = !1;
                }
                e.setData({
                    orderShowList: e.data.orderShowList
                }), e.data.loading = !1, console.log("orderShow", e.data.orderShowList);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    confirmSmart: function() {
        t.confirmSmart(this);
    },
    hideSmart: function() {
        t.hideSmart(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getTabData(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage || !0 === a.data.loading) return !1;
        a.data.page++, a.getTabData();
    },
    onShareAppMessage: function(a) {
        var e = this;
        if ("button" === a.from) {
            console.log("分享", a.target.dataset.res);
            var o = a.target.dataset.res;
            e.setData({
                share: o,
                toIndex: !1
            });
        } else {
            var r = [ {
                title: t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱",
                img: t.globalData.setting.share_pic,
                id: ""
            } ];
            e.setData({
                share: r[0],
                toIndex: !0
            }), console.log("右上角转发", e.data.share);
        }
        var n = void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&goods_id=" + e.data.share.goods_id + "&from_act=share&source=" + e.data.share.source : "?goods_id=" + e.data.share.goods_id + "&source=" + e.data.share.source, s = void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "";
        return {
            title: e.data.share.title,
            path: this.data.toIndex ? "/first_duoduoke/pages/index/index" + s : "/first_duoduoke/pages/goods/goods" + n,
            imageUrl: e.data.share.share_pic ? e.data.share.share_pic : e.data.share.img
        };
    },
    onChangePage: function(a) {
        console.log(a);
        var t = this, e = a.target.dataset.num;
        e != t.data.num && (this.setData({
            num: e,
            saleWallpaper: !1,
            ownerrecList: !1,
            orderShowList: !1
        }), t.data.page = 1, t.data.lastPage = !1, t.getTabData());
    },
    getTabData: function(a) {
        var t = this;
        switch (parseInt(t.data.num)) {
          case 1:
            t.getOrderShow(a);
            break;

          case 2:
            t.getOwnerrecList(a);
            break;

          case 3:
            t.getSaleWallpaper(a);
        }
        console.log(parseInt(t.data.num));
    },
    goDryingList: function(a) {
        wx.navigateTo({
            url: "../dryinglist/dryinglist"
        });
    },
    showAllcontent: function(t) {
        console.log(t);
        var e = this, o = t.currentTarget.dataset.index;
        e.data.ownerrecList[o].showAllcontent = !e.data.ownerrecList[o].showAllcontent, 
        console.log(e.data.ownerrecList[o].showAllcontent);
        var r = "ownerrecList[" + o + "].showAllcontent";
        e.setData(a({}, r, e.data.ownerrecList[o].showAllcontent));
    },
    showAllcontent_showorder: function(t) {
        console.log(t);
        var e = this, o = t.currentTarget.dataset.index;
        e.data.orderShowList[o].showAllcontent = !e.data.orderShowList[o].showAllcontent, 
        console.log(e.data.orderShowList[o].showAllcontent);
        var r = "orderShowList[" + o + "].showAllcontent";
        e.setData(a({}, r, e.data.orderShowList[o].showAllcontent));
    },
    zanOrderShow: function(a) {
        var e = this;
        console.log(a);
        var o = a.currentTarget.dataset.index, r = a.currentTarget.dataset.s_id;
        if (t.globalData.userInfo) {
            console.log("uid", t.globalData.userInfo);
            var n = t.globalData.userInfo.uid;
            if (e.data.orderShowList[o].uid == n) return void wx.showToast({
                icon: "none",
                title: "自己不能给自己点赞"
            });
            t.util.request({
                url: "entry/wxapp/zanOrderShow",
                data: {
                    s_id: r,
                    index: o
                },
                success: function(a) {
                    console.log("222", a.data);
                    var t = a.data;
                    "" === t.data ? (e.data.orderShowList[o].is_zan = !0, e.onNorepeat()) : (e.data.orderShowList[o].zan_data.length >= 6 && e.data.orderShowList[o].zan_data.splice(5, 1), 
                    e.data.orderShowList[o].zan_data.unshift(t.data), e.data.orderShowList[o].zan_count = 1, 
                    e.data.orderShowList[o].is_zan = !0), e.setData({
                        orderShowList: e.data.orderShowList
                    }), console.log("点赞后数据变化", e.data.orderShowList);
                }
            });
        } else t.checkLogin();
    }
});