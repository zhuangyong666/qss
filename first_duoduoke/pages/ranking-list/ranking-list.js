var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        current: 0,
        dd_list: !1,
        lx_list: !1,
        tx_list: !1,
        sch: 0
    },
    getRankingList: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getRankingList",
            data: {
                tab: a.data.current + 1
            },
            success: function(t) {
                console.log(t.data.data), 0 == a.data.current ? a.setData({
                    dd_list: t.data.data
                }) : 1 == a.data.current ? a.setData({
                    lx_list: t.data.data
                }) : 2 == a.data.current && a.setData({
                    tx_list: t.data.data
                });
            }
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    onChangeswiper: function(t) {
        var a = this, n = t.detail.current;
        a.setData({
            current: n
        }), a.getRankingList();
    },
    onChangetype: function(t) {
        var a = this, n = t.currentTarget.dataset.type_id;
        a.setData({
            current: n
        }, function() {
            a.setData({
                sch: 0
            });
        });
    },
    onLoad: function(t) {
        this.getRankingList();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});