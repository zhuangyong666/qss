var e = getApp();

Page({
    data: {
        navH: 0,
        theme_id: 0,
        goodsList: !1,
        loading: !1,
        theme_img: !1,
        theme_name: "",
        appletKeyword: ""
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toGoodsDetail: function(e) {
        var t = e.currentTarget.dataset.goods_id;
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + t
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: e.globalData.navHeight,
            appletKeyword: e.globalData.setting.appletKeyword
        }), console.log(t), void 0 !== t.theme_id && 0 != t.theme_id ? (this.data.theme_id = t.theme_id, 
        this.setData({
            theme_name: t.theme_name,
            theme_img: t.theme_img
        }), this.getThemeGoods()) : wx.navigateBack();
    },
    getThemeGoods: function(t) {
        var a = this;
        a.data.loading = !0, e.util.request({
            url: "entry/wxapp/getThemeGoods",
            data: {
                theme_id: a.data.theme_id
            },
            success: function(e) {
                console.log(e), a.data.loading = !1, "function" == typeof t && t(), a.setData({
                    goodsList: e.data.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getThemeGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = e.globalData.setting.share_title ? e.globalData.setting.share_title : "购物省钱，分享赚钱", a = e.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: a,
            success: function(e) {
                "shareAppMessage:ok" == e.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(e) {
                "shareAppMessage:fail cancel" == e.errMsg || e.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});