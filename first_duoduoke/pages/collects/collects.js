var t = getApp();

Page({
    data: {
        navH: 0,
        list: [],
        page: 1,
        lastPage: !1,
        loading: !1
    },
    toGoodsPage: function(t) {
        var a = t.target.dataset.index, s = this.data.list[a].goods_id, o = this.data.list[a].source;
        3 == o || 5 == o ? (o = "&source=" + o, o += "&goods_url=" + this.data.list[a].goods_url) : (o = "&source=" + o, 
        this.data.list[a].goods_sign && (o += "&goods_sign=" + this.data.list[a].goods_sign)), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + s + o
        });
    },
    getCollectList: function(a) {
        var s = this;
        s.data.loading = !0, t.util.request({
            url: "entry/wxapp/getCollectList",
            data: {
                page: s.data.page
            },
            success: function(t) {
                console.log(t.data.data), s.data.loading = !1, "function" == typeof a && a(), t.data.data.length < 1 ? s.data.lastPage = !0 : (s.data.list = 1 == s.data.page ? t.data.data : s.data.list.concat(t.data.data), 
                s.setData({
                    list: s.data.list
                }));
            }
        });
    },
    onLoad: function(a) {
        this.setData({
            navH: t.globalData.navHeight
        }), this.getCollectList();
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
        this.data.page = 1, this.data.lastPage = !1, this.getCollectList(function() {
            wx.stopPullDownRefresh();
        });
    },
    delCollect: function(a) {
        var s = this, o = a.currentTarget.dataset.goods_id, e = a.currentTarget.dataset.source, i = a.currentTarget.dataset.index;
        t.util.request({
            url: "entry/wxapp/toggleGoodsCollect",
            data: {
                goods_id: o,
                source: e
            },
            success: function(t) {
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
        var t = this;
        !0 !== t.data.lastPage && !0 !== t.data.loading && (t.data.page++, t.getCollectList());
    },
    onShareAppMessage: function(a) {
        if ("button" == a.from && void 0 !== a.target.dataset.index) var s = a.target.dataset.index, o = this.data.list[s].title, e = this.data.list[s].share, i = "/first_duoduoke/pages/goods/goods" + (d = void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&goods_id=" + this.data.list[s].goods_id + "&source=" + this.data.list[s].source + "&from_act=share" : "?goods_id=" + this.data.list[s].goods_id); else var o = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", e = t.globalData.setting.share_pic, d = void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "", i = "/first_duoduoke/pages/index/index" + d;
        return {
            title: o,
            path: i,
            imageUrl: e,
            success: function(t) {
                "shareAppMessage:ok" == t.errMsg ? wx.showToast({
                    title: "分享成功",
                    icon: "success"
                }) : wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            },
            fail: function(t) {
                "shareAppMessage:fail cancel" == t.errMsg || t.errMsg, wx.showToast({
                    title: "分享失败",
                    icon: "none"
                });
            }
        };
    }
});