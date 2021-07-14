var a = getApp();

Page({
    data: {
        navH: 0,
        oneList: []
    },
    toCatePage: function(a) {
        var t = a.currentTarget.dataset.opt_id, e = a.currentTarget.dataset.opt_name;
        wx.navigateTo({
            url: "./cate?opt_id=" + t + "&opt_name=" + e
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight,
            search_portal_switch: a.globalData.setting.search_portal_switch
        });
        var e = this;
        a.util.request({
            url: "entry/wxapp/GetGoodsOpt",
            success: function(a) {
                console.log(a);
                var t = a.data.data;
                e.setData({
                    oneList: t,
                    opt_id: t[0].opt_id
                });
            }
        });
    },
    onClassification: function(a) {
        var t = a.currentTarget.dataset.opt_id;
        console.log(t), this.setData({
            opt_id: t
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    setSearchKey: function(a) {
        this.data.keyword = a.detail.value, this.data.keyword && !this.data.showDel && this.setData({
            showDel: !0
        });
    },
    confirmSearchKey: function(a) {
        if (this.data.keyword = a.detail.value, this.data.keyword) {
            var t = this;
            wx.navigateTo({
                url: "../search/search?keyword=" + this.data.keyword,
                success: function() {
                    t.setData({
                        keyword: "",
                        showDel: !1
                    });
                }
            });
        }
    },
    goSearch: function(a) {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", e = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
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