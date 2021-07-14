var n = getApp();

Page({
    data: {
        navH: n.globalData.navHeight,
        item_id: 0
    },
    navBack: function() {
        wx.navigateBack();
    },
    onChangeitemid: function(n) {
        var t = this, a = n.currentTarget.dataset.item_id;
        t.setData({
            item_id: t.data.item_id == a ? 0 : a
        });
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});