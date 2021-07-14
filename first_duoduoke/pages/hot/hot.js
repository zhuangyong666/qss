var a = getApp();

Page({
    data: {
        navH: 0,
        plusH: 0,
        themeList: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        tab: 1,
        type: "",
        cat_id: 0,
        store_banner: !1,
        appletKeyword: "",
        scrollLeft: 0,
        tabs: [ {
            title: "外卖券儿",
            type: "none",
            tab: 1
        }, {
            title: "今日爆款",
            type: 1,
            tab: 9
        }, {
            title: "品牌好货",
            type: 2,
            tab: 3
        }, {
            title: "1.9精选",
            type: 0,
            tab: 4
        }, {
            title: "实时热销",
            type: 5,
            tab: 10
        }, {
            title: "猜你喜欢",
            type: 4,
            tab: 12
        }, {
            title: "高佣专区",
            type: 8,
            tab: 8
        }, {
            title: "收益排行",
            type: 6,
            tab: 11
        }, {
            title: "今日畅销",
            type: 7,
            tab: 2
        }, {
            title: "排行榜",
            type: "none",
            tab: 6
        } ],
        imgPath: a.getImgUrl()
    },
    toGoodsPage: function(a) {
        var t = a.currentTarget.dataset.goods_id;
        void 0 !== a.currentTarget.dataset.goods_sign && (t += "&goods_sign=" + a.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + t
        });
    },
    switchCat: function(a) {
        var t = a.currentTarget.dataset.cat_id;
        t != this.data.cat_id && (this.setData({
            cat_id: t
        }), this.data.page = 1, this.data.lastPage = !1, this.getStoreList());
    },
    toGoodsClassify: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), a.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../classify/classify?theme_name=" + t.currentTarget.dataset.name + "&theme_id=" + t.currentTarget.dataset.theme_id + "&theme_img=" + t.currentTarget.dataset.theme_img
        });
    },
    toHomepage: function(a) {
        var t = a.currentTarget.dataset.mall_id;
        wx.navigateTo({
            url: "../homepage/homepage?mall_id=" + t
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight,
            appletKeyword: a.globalData.setting.appletKeyword
        }), this.thisNav();
        var e = this;
        1 != a.globalData.setting.hot_wm_switch && (e.data.tabs.splice(0, 1), console.log(e.data.tabs), 
        e.setData({
            tabs: e.data.tabs
        }, function() {
            e.switchTab({
                target: {
                    dataset: {
                        tab: 9,
                        type: 1,
                        cdx: 0
                    }
                }
            });
        }));
    },
    thisNav: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getBottomNav",
            showLoading: !1,
            success: function(a) {
                console.log(a.data.data);
                var e = a.data.data;
                if (void 0 !== e.list.length && e.list.length < 1) return wx.setTabBarStyle({
                    color: e.color,
                    selectedColor: e.selectedColor,
                    backgroundColor: e.backgroundColor,
                    borderStyle: 2 == e.borderStyle ? "black" : "white",
                    fail: function(a) {
                        console.log(a);
                    }
                }), void wx.showTabBar();
                t.setData({
                    tabBar: a.data.data,
                    "tabBar.thisurl": t.__route__
                });
            }
        });
    },
    getFrontPic: function(t) {
        var e = this;
        console.log("123", t), a.util.request({
            url: "entry/wxapp/getFrontPics",
            data: {
                page: t
            },
            showLoading: !1,
            success: function(a) {
                console.log(a);
                var o = a.data.data;
                "rank_banner" == t && e.setData({
                    rank_banner: o
                });
            }
        });
    },
    getThemeList: function(t) {
        var e = this;
        e.data.loading = !0, a.util.request({
            url: "entry/wxapp/getThemeList",
            data: {
                page: e.data.page
            },
            success: function(a) {
                e.data.loading = !1, console.log("Theme", a), "function" == typeof t && t(), a.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.themeList = 1 == e.data.page ? a.data.data : e.data.themeList.concat(a.data.data), 
                e.setData({
                    themeList: e.data.themeList
                }), e.data.loading = !1);
            }
        });
    },
    getRankList: function(t) {
        var e = this;
        e.data.loading = !0, a.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: e.data.page,
                type: 2,
                sort: 1
            },
            success: function(a) {
                "function" == typeof t && t(), console.log("rank", a), a.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.rankList = 1 == e.data.page ? a.data.data : e.data.rankList.concat(a.data.data), 
                e.setData({
                    rankList: e.data.rankList
                }), e.data.loading = !1);
            }
        });
    },
    getStoreList: function(t) {
        var e = this;
        e.data.loading = !0, a.util.request({
            url: "entry/wxapp/getStoreList",
            data: {
                page: e.data.page,
                cat_id: e.data.cat_id
            },
            success: function(a) {
                console.log("store", a), "function" == typeof t && t(), a.data.data.length < 1 ? e.data.lastPage = !0 : (1 == e.data.page ? (e.data.storeList = a.data.data.list, 
                e.setData({
                    store_banner: a.data.data.banner,
                    cates: a.data.data.cates,
                    storeList: e.data.storeList
                })) : (e.data.storeList = e.data.storeList.concat(a.data.data), e.setData({
                    storeList: e.data.storeList
                })), e.data.loading = !1);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        if (!1 !== a.globalData.hotTab) {
            for (var t in this.data.tabs) if (this.data.tabs[t].tab == a.globalData.hotTab) {
                var e = this.data.tabs[t].tab, o = this.data.tabs[t].type, s = t;
                break;
            }
            if (!e) return;
            this.switchTab({
                target: {
                    dataset: {
                        tab: e,
                        type: o,
                        cdx: s
                    }
                }
            }), a.globalData.hotTab = !1;
        }
    },
    confirmSmart: function() {
        a.confirmSmart(this);
    },
    hideSmart: function() {
        a.hideSmart(this);
    },
    onHide: function() {},
    onUnload: function() {},
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    switchTab: function(a) {
        console.log("456", a);
        var t = this, e = a.target.dataset.tab, o = a.target.dataset.type ? a.target.dataset.type : "", s = a.target.dataset.cdx;
        e != t.data.tab && (t.setData({
            tab: e,
            type: o,
            themeList: !1,
            artList: !1,
            rankList: !1,
            storeList: !1,
            goodsList: !1,
            cates: !1,
            cat_id: 0,
            scrollLeft: 60 * s
        }), t.data.page = 1, t.data.lastPage = !1, t.getTabData());
    },
    getTabData: function(a) {
        var t = this;
        switch (parseInt(t.data.tab)) {
          case 1:
            wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            }), "function" == typeof a && a();
            break;

          case 2:
          case 3:
          case 4:
          case 8:
          case 9:
          case 10:
          case 11:
          case 12:
            t.getRecommendGoods(a);
            break;

          case 5:
            break;

          case 6:
            1 == t.data.page && t.getFrontPic("rank_banner"), t.getRankList(a);
            break;

          case 7:
            t.getStoreList(a);
        }
    },
    getRecommendGoods: function(t) {
        var e = this;
        4 != e.data.type || a.globalData.userInfo ? (1 == e.data.page && wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), a.util.request({
            url: "entry/wxapp/getRcommendGoods",
            data: {
                page: e.data.page,
                channel_type: e.data.type
            },
            success: function(a) {
                "need" != a.data.message ? (console.log(a), "function" == typeof t && t(), a.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.goodsList = 1 == e.data.page ? a.data.data : e.data.goodsList.concat(a.data.data), 
                e.setData({
                    goodsList: e.data.goodsList
                }), e.data.loading = !1)) : wx.showModal({
                    title: "系统信息",
                    content: "需要先去拼多多授权才能查看哦:)",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "去授权",
                    complete: function() {
                        wx.navigateToMiniProgram({
                            appId: a.data.data.app_id,
                            path: a.data.data.page_path,
                            success: function(a) {
                                console.log("ok"), wx.navigateBack();
                            }
                        });
                    }
                });
            }
        })) : a.checkLogin();
    },
    toMainPage: function(t) {
        if (a.globalData.userInfo) {
            var e = t.currentTarget.dataset.show;
            wx.navigateTo({
                url: "../pleasure/pleasure-main?show=" + e
            });
        } else a.checkLogin();
    },
    toMainPage2: function(t) {
        if (a.globalData.userInfo) {
            var e = t.currentTarget.dataset.show;
            wx.navigateTo({
                url: "../pleasure/pleasure-main2?show=" + e
            });
        } else a.checkLogin();
    },
    getGoodsList: function(t) {
        var e = this;
        1 == e.data.page && wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), a.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: e.data.page,
                type: e.data.type
            },
            success: function(a) {
                console.log(a), "function" == typeof t && t(), a.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.goodsList = 1 == e.data.page ? a.data.data : e.data.goodsList.concat(a.data.data), 
                e.setData({
                    goodsList: e.data.goodsList
                }), e.data.loading = !1);
            }
        });
    },
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getTabData(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        !0 !== a.data.lastPage && !0 !== a.data.loading && 1 != a.data.tab && (console.log(a.data.lastPage), 
        a.data.page++, a.getTabData());
    },
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", e = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: e,
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