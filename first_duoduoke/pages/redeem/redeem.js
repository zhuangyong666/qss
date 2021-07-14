var a = getApp();

Page({
    data: {
        navH: 0,
        showReF: !0,
        uInfo: !1,
        coinList: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        cal: !1
    },
    hideReFix: function() {
        this.setData({
            showReF: !1
        });
    },
    getCoinList: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getCoinList",
            data: {
                page: t.data.page
            },
            success: function(a) {
                t.data.loading = !1, "function" == typeof cb && cb(), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.coinList = 1 == t.data.page ? a.data.data : t.data.coinList.concat(a.data.data), 
                t.setData({
                    coinList: t.data.coinList
                }));
            }
        });
    },
    onLoad: function(t) {
        if ((n = this).setData({
            navH: a.globalData.navHeight
        }), this.setData({
            uInfo: a.globalData.userInfo
        }), this.getCoinList(), a.globalData.userInfo) {
            var n = this;
            a.util.request({
                url: "entry/wxapp/getExCal",
                success: function(a) {
                    n.setData({
                        cal: a.data.data
                    });
                }
            });
        }
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
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var a = this;
        !0 !== a.data.lastPage && !0 !== a.data.loading && (a.data.page++, a.getCoinList());
    },
    onShareAppMessage: function() {
        var t = a.globalData.setting.share_title ? a.globalData.setting.share_title : "购物省钱，分享赚钱", n = a.globalData.setting.share_pic;
        return {
            title: t,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: n,
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