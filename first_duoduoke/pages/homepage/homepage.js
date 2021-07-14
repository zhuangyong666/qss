var a = getApp();

Page({
    data: {
        navH: 0,
        mall_id: !1,
        store: !1
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight
        }), void 0 !== t.mall_id ? (this.data.mall_id = t.mall_id, this.getStoreInfo()) : wx.navigateBack();
    },
    getStoreInfo: function() {
        var t = this;
        t.data.loading = !0, a.util.request({
            url: "entry/wxapp/getStoreInfo",
            data: {
                mall_id: t.data.mall_id
            },
            success: function(a) {
                console.log(a);
                var o = a.data.data.goodsList, n = a.data.data.mallInfo;
                t.setData({
                    goodsList: o,
                    mallInfo: n
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.getStoreInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    backIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toGoodsPage: function(a) {
        var t = a.currentTarget.dataset.goods_id;
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + t
        });
    },
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", o = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: o,
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
    },
    navBack: function() {
        wx.navigateBack();
    }
});