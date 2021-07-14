var t = getApp();

Page({
    data: {
        navH: 0,
        goodsList: !1,
        type: 5,
        page: 1,
        lastPage: !1,
        loading: !1,
        sliderOffset: 0,
        sliderLeft: 0,
        appletKeyword: ""
    },
    goChangeAct: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.type;
        a != this.data.type && (this.setData({
            type: a
        }), console.log(this.data.type), this.data.page = 1, this.data.lastPage = !1, this.getGoodsList());
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(a) {
        console.log(a.isact), this.setData({
            navH: t.globalData.navHeight,
            app_name: t.globalData.setting.name,
            appletKeyword: t.globalData.setting.appletKeyword
        }), void 0 !== a.type && this.setData({
            type: a.type
        }), this.getGoodsList();
    },
    getGoodsList: function(a) {
        var e = this;
        5 == e.data.type ? this.setData({
            sliderOffset: 0,
            sliderLeft: 6
        }) : 6 == e.data.type ? this.setData({
            sliderOffset: 23.5,
            sliderLeft: 6
        }) : 7 == e.data.type ? this.setData({
            sliderOffset: 47,
            sliderLeft: 6
        }) : 8 == e.data.type && this.setData({
            sliderOffset: 70.5,
            sliderLeft: 6
        }), 1 == e.data.page && wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), t.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: e.data.page,
                type: e.data.type
            },
            success: function(t) {
                console.log(t), t.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList
                }), e.data.loading = !1);
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
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
        return {
            title: t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱",
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: imgUrl,
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