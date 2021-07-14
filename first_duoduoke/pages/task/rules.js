var n = getApp();

Page({
    data: {},
    onLoad: function(t) {
        var o = this;
        o.setData({
            navH: n.globalData.navHeight
        }), wx.getSystemInfo({
            success: function(n) {
                o.setData({
                    pmH: n.screenHeight
                });
            }
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});