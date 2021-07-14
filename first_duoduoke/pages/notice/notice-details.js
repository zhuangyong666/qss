var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        content: null
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(a) {
        this.showOffNotice(a.id);
    },
    showOffNotice: function(n) {
        var t = this;
        t.data.v_loading || (t.data.v_loading = !0, a.util.request({
            url: "entry/wxapp/showOffNotice",
            showLoading: !1,
            data: {
                id: n
            },
            success: function(a) {
                if (console.log(a.data), a.data.data.type, t.setData({
                    content: a.data.data
                }), "3" == a.data.data.type) {
                    console.log("aaaaa");
                    var n = a.data.data.url;
                    wx.redirectTo({
                        url: "/first_duoduoke/pages/index/web-view?url=" + encodeURIComponent(n)
                    });
                }
            },
            complete: function() {
                t.data.v_loading = !1;
            }
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});