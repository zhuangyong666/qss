var t = getApp();

Page({
    data: {
        navH: 0,
        tags: "",
        goodsList: !1,
        page: 1,
        loading: !1,
        top_img: "",
        title: "",
        appletKeyword: "",
        top_bg_color: "",
        share_id: 0,
        link: "",
        type: 1,
        sort: 0,
        menuFixed: !1
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    sortGoods: function(t) {
        var a = t.currentTarget.dataset.type;
        if (1 != this.data.type || 1 != a) {
            var o = this.data.type == a ? this.data.sort ? 0 : 1 : 3 == a && this.data.type != a ? 0 : 1;
            this.setData({
                sort: o,
                type: a
            }), this.data.page = 1, this.data.lastPage = !1;
            var e = this;
            wx.pageScrollTo({
                scrollTop: e.data.menuTop,
                duration: 0
            }), e.getGoodsList();
        }
    },
    getMenuTop: function() {
        var t = this, a = wx.createSelectorQuery();
        a.select("#affix").boundingClientRect(), a.exec(function(a) {
            console.log(a, "top"), t.setData({
                menuTop: a[0].top - t.data.navH
            });
        });
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toGoodsDetail: function(t) {
        var a = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (a += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    onLoad: function(a) {
        if (this.setData({
            navH: t.globalData.navHeight,
            appletKeyword: t.globalData.setting.appletKeyword
        }), console.log(a), void 0 !== a.tags && 0 != a.tags) {
            var o = this;
            t.util.request({
                url: "entry/wxapp/Setting",
                data: {
                    name: "appletKeyword,share_pic"
                },
                showLoading: !1,
                success: function(t) {
                    var a = t.data.data;
                    o.setData(a);
                }
            }), this.data.tags = a.tags, this.setData({
                title: a.title,
                top_bg_color: a.bgcolor,
                top_img: decodeURIComponent(a.top_img),
                link: decodeURIComponent(a.link)
            }), this.getGoodsList();
        } else wx.navigateBack();
    },
    toAct: function() {
        t.globalData.userInfo ? t.util.request({
            url: "entry/wxapp/pddActivtyLink",
            data: {
                url: this.data.link,
                type: "39998"
            },
            success: function(t) {
                var a = t.data.data;
                void 0 === a.error_response ? wx.navigateToMiniProgram({
                    appId: a.resource_url_response.we_app_info.app_id,
                    path: a.resource_url_response.we_app_info.page_path,
                    success: function(t) {
                        console.log("ok");
                    }
                }) : wx.showToast({
                    title: "转链发生错误",
                    icon: "none"
                });
            }
        }) : t.checkLogin();
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
    getGoodsList: function() {
        var a = this;
        a.data.loading || (a.data.loading = !0, t.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: a.data.page,
                type: a.data.type,
                sort: a.data.sort,
                activity_tags: a.data.tags
            },
            success: function(t) {
                t.data.data.length < 1 ? a.data.lastPage = !0 : (a.data.goodsList = 1 == a.data.page ? t.data.data : a.data.goodsList.concat(t.data.data), 
                a.setData({
                    goodsList: a.data.goodsList
                }), a.data.loading = !1);
            }
        }));
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPageScroll: function(t) {
        var a = this;
        t.scrollTop >= a.data.menuTop ? a.data.menuFixed || a.setData({
            menuFixed: !0
        }) : a.data.menuFixed && a.setData({
            menuFixed: !1
        });
    },
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getGoodsList(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        !0 !== t.data.lastPage && !0 !== t.data.loading && (t.data.page++, t.getGoodsList());
    },
    onShareAppMessage: function() {
        var a = this.data.title ? this.data.title : "购物省钱，分享赚钱", o = this.data.top_img ? this.data.top_img : that.data.share_pic, e = void 0 !== t.globalData.userInfo.uid ? "&from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "&from_act=share";
        return {
            title: a,
            path: "/first_duoduoke/pages/index/activity?title=" + this.data.title + "&tags=" + this.data.tags + "&bgcolor=" + this.data.top_bg_color + "&top_img=" + encodeURIComponent(this.data.top_img) + "&link=" + this.data.link + e,
            imageUrl: o,
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