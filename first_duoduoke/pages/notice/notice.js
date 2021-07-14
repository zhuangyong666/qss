var a = getApp();

Page({
    data: {
        navh: 0,
        page: 1,
        list: []
    },
    navBack: function() {
        wx.navigateBack();
    },
    toNoticedetails: function(a) {
        var t = a.currentTarget.dataset.id;
        wx.navigateTo({
            url: "notice-details?id=" + t
        });
    },
    onLoad: function(t) {
        var o = this;
        o.setData({
            navH: a.globalData.navHeight
        }), o.getOffNotice("more");
    },
    getOffNotice: function(t) {
        var o = this;
        o.data.v_loading || (o.data.v_loading = !0, a.util.request({
            url: "entry/wxapp/getOffNotice",
            showLoading: !1,
            data: {
                page: o.data.page
            },
            success: function(a) {
                console.log(a.data), a.data.data.length < 1 || (o.data.list = "more" == t ? o.data.data == a.data.data ? a.data.data : o.data.list.concat(a.data.data) : a.data.data, 
                o.setData({
                    list: o.data.list,
                    page: o.data.page + 1
                }), console.log(o.data.list));
            },
            complete: function() {
                o.data.v_loading = !1;
            }
        }));
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        var a = this;
        console.log(a.data.page), a.setData({
            page: 1
        }), a.getOffNotice("down"), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.getOffNotice("more");
    },
    onShareAppMessage: function() {}
});