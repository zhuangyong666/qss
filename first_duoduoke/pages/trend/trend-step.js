var n = getApp();

Page({
    data: {
        navH: n.globalData.navHeight,
        imgPath: n.getImgUrl()
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});