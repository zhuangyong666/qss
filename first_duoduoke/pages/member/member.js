var a = getApp();

Page({
    data: {
        navH: 0,
        userInfo: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        childList: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    goPartakeOf: function() {
        wx.redirectTo({
            url: "../partake/partake"
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight,
            substitute_word: a.globalData.setting.substitute_word
        }), a.globalData.userInfo && this.setData({
            userInfo: a.globalData.userInfo
        }), this.getChildList();
    },
    getChildList: function(t) {
        var e = this;
        e.data.loading = !0, a.util.request({
            url: "entry/wxapp/getChildList",
            data: {
                page: e.data.page
            },
            success: function(a) {
                e.data.loading = !1, console.log(a), "function" == typeof t && t(), a.data.data.length < 1 ? e.data.lastPage = !0 : (e.data.childList = 1 == e.data.page ? a.data.data : e.data.childList.concat(a.data.data), 
                e.setData({
                    childList: e.data.childList
                }));
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getChildList(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        !0 !== a.data.lastPage && !0 !== a.data.loading && (a.data.page++, a.getChildList());
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