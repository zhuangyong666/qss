var t = getApp();

Page({
    data: {
        page: 1,
        lastPage: !1,
        hotGoodsList: !1,
        freered_id: 0
    },
    getHotGoods: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", e = this;
        t.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: e.data.page,
                sort_type: 0
            },
            success: function(t) {
                if (console.log(t.data.data), "function" == typeof o && o(), "append" == a) {
                    if (t.data.data.length < 1) return;
                    return e.data.hotGoodsList = 1 == e.data.page ? t.data.data : e.data.hotGoodsList.concat(t.data.data), 
                    e.setData({
                        hotGoodsList: e.data.hotGoodsList
                    }), !1;
                }
                e.setData({
                    hotGoodsList: t.data.data
                });
            }
        });
    },
    toOtherGoods: function(t) {
        var o = t.currentTarget.dataset.goods_id;
        void 0 !== t.currentTarget.dataset.goods_sign && (o += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + o + "&freered_id=" + this.data.freered_id
        });
    },
    onLoad: function(t) {
        this.setData({
            freered_id: t.freered_id
        }), this.getHotGoods();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getHotGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getHotGoods("", "append");
    }
});