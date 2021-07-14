var a = getApp();

Page({
    data: {
        navH: 0,
        detAct: 1,
        page: 1,
        lastPage: !1,
        loading: !1,
        bounsList: !1,
        withdrawalList: !1,
        plusH: 89
    },
    toChangeShow: function(a) {
        var t = a.currentTarget.dataset.act;
        t != this.data.detAct && (this.setData({
            detAct: t
        }), this.setData({
            bounsList: !1,
            withdrawalList: !1
        }), this.data.detAct < 3 ? (this.data.page = 1, this.data.lastPage = !1, this.getBounsLog()) : (this.data.page = 1, 
        this.data.lastPage = !1, this.getWithdrawalLog()));
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    getWithdrawalLog: function() {
        var t = this;
        t.data.loading = !0, a.util.request({
            url: "entry/wxapp/getWithdrawalLog",
            data: {
                page: t.data.page
            },
            success: function(a) {
                t.data.loading = !1, console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.withdrawalList = 1 == t.data.page ? a.data.data : t.data.withdrawalList.concat(a.data.data), 
                t.setData({
                    withdrawalList: t.data.withdrawalList
                }));
            }
        });
    },
    getBounsLog: function() {
        var t = this, e = 1 == t.data.detAct ? 0 : 1;
        t.data.loading = !0, a.util.request({
            url: "entry/wxapp/getBounsLog",
            data: {
                page: t.data.page,
                is_parent: e
            },
            success: function(a) {
                t.data.loading = !1, console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.bounsList = 1 == t.data.page ? a.data.data : t.data.bounsList.concat(a.data.data), 
                t.setData({
                    bounsList: t.data.bounsList
                }));
            }
        });
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight
        }), this.getBounsLog(), a.checkUserSub("4|5");
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {
        var a = this;
        !0 !== a.data.lastPage && !0 !== a.data.loading && (a.data.page++, this.data.detAct < 3 ? a.getBounsLog() : a.getWithdrawalLog());
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