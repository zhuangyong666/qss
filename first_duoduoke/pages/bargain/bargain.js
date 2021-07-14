var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        page: 1,
        lastPage: !1,
        bargain_list: [],
        finish_info: !1
    },
    toBargainmain: function(n) {
        a.globalData.userInfo ? wx.navigateTo({
            url: "./bargain-main?id=" + n.currentTarget.dataset.id
        }) : a.checkLogin();
    },
    loginAfter: function(n) {
        a.loginAfter(n);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    showInfo: function() {
        a.showInfo(this, a.globalData.setting.bargain_rule_intro);
    },
    hideInfo: function() {
        a.hideInfo(this);
    },
    onLoad: function(a) {
        this.getBargain();
    },
    getBargain: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", i = this;
        a.util.request({
            url: "entry/wxapp/getBargain",
            data: {
                page: i.data.page
            },
            success: function(a) {
                if (console.log(a.data.data), "function" == typeof n && n(), "append" == t) return a.data.data.bargain_list.length ? (i.data.bargain_list = i.data.bargain_list.concat(a.data.data.bargain_list), 
                i.setData({
                    bargain_list: i.data.bargain_list,
                    finish_info: a.data.data.goods_info
                }), !1) : (i.data.lastPage = !0, wx.showToast({
                    title: "已加载全部数据",
                    icon: "success",
                    duration: 1e3
                }), !1);
                i.setData({
                    bargain_list: a.data.data.bargain_list,
                    finish_info: a.data.data.goods_info
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getBargain(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage) return !1;
        a.data.page++, a.getBargain("", "append");
    },
    onShareAppMessage: function() {}
});