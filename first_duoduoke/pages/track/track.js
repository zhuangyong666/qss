var a = getApp();

Page({
    data: {
        navH: 0,
        list: [],
        page: 1,
        lastPage: !1,
        loading: !1
    },
    toGoodsPage: function(a) {
        var t = a.target.dataset.index, s = this.data.list[t].goods_id, o = this.data.list[t].source;
        3 == o || 5 == o ? (o = "&source=" + o, o += "&goods_url=" + this.data.list[t].goods_url) : (o = "&source=" + o, 
        this.data.list[t].goods_sign && (o += "&goods_sign=" + this.data.list[t].goods_sign)), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + s + o
        });
    },
    getHelpInfo: function(t) {
        var s = this;
        s.data.loading = !0, a.util.request({
            url: "entry/wxapp/getTrackInfo",
            data: {
                page: s.data.page
            },
            success: function(a) {
                console.log(a.data.data), s.data.loading = !1, "function" == typeof t && t(), a.data.data.length < 1 ? s.data.lastPage = !0 : (s.data.list = 1 == s.data.page ? a.data.data : s.data.list.concat(a.data.data), 
                s.setData({
                    list: s.data.list
                }));
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight
        }), this.getHelpInfo();
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getHelpInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    delTrack: function(t) {
        var s = this, o = t.currentTarget.dataset.goods_id, e = t.currentTarget.dataset.source, i = t.currentTarget.dataset.index;
        a.util.request({
            url: "entry/wxapp/delTrack",
            data: {
                goods_id: o,
                source: e
            },
            success: function(a) {
                wx.showToast({
                    title: "删除成功",
                    icon: "success"
                }), s.data.list.splice(i, 1), s.setData({
                    list: s.data.list
                });
            }
        });
    },
    onReachBottom: function() {
        var a = this;
        !0 !== a.data.lastPage && !0 !== a.data.loading && (a.data.page++, a.getHelpInfo());
    },
    onShareAppMessage: function(t) {
        if ("button" == t.from && void 0 !== t.target.dataset.index) {
            var s = t.target.dataset.index, o = this.data.list[s].title, e = this.data.list[s].share;
            i = void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&goods_id=" + this.data.list[s].goods_id + "&source=" + this.data.list[s].source + "&from_act=share" : "?goods_id=" + this.data.list[s].goods_id;
        } else var o = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", e = a.globalData.setting.share_pic, i = void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "";
        return {
            title: o,
            path: "/first_duoduoke/pages/index/index" + i,
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