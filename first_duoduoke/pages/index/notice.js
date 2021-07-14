var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        official: "",
        page: 1,
        lastPage: !1,
        list: [],
        prevPage: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    onLoad: function(a) {
        this.setData({
            official: t.globalData.setting.logo
        });
        var e = getCurrentPages();
        this.data.prevPage = e[e.length - 2], this.getNoticeInfo();
    },
    getNoticeInfo: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getNoticeInfo",
            data: {
                page: a.data.page
            },
            success: function(t) {
                "function" == typeof cb && cb(), t.data.data.length < 1 ? a.data.lastPage = !0 : (a.data.list = 1 == a.data.page ? t.data.data : a.data.list.concat(t.data.data), 
                a.setData({
                    list: a.data.list
                }), console.log(a.data.list));
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        this.getChangeNotice();
    },
    getChangeNotice: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getChangeNotice",
            success: function(t) {
                a.data.prevPage.data.isFresh = !0;
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1;
        t.globalData.userInfo ? this.getNoticeInfo(function() {
            wx.stopPullDownRefresh();
        }) : t.checkLogin();
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        wx.showLoading({
            title: "加载中"
        }), t.data.page++, t.getNoticeInfo();
    },
    onShareAppMessage: function() {}
});