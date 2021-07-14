getApp();

Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        n.url && this.setData({
            url: decodeURIComponent(n.url)
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});