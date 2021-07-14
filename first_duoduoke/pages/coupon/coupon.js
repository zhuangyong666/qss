var t = getApp();

Page({
    data: {
        navH: 0,
        imgPath: t.getImgUrl(),
        task: !1,
        task_text: !1
    },
    onLoad: function(a) {
        this.setData({
            navH: t.globalData.navHeight
        }), t.globalData.setting.task_1_text ? this.setData({
            task_text: t.globalData.setting.task_1_text
        }) : this.getTask();
    },
    navBack: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    getTask: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getTaskDetail",
            data: {
                label: 1
            },
            showLoading: !1,
            success: function(t) {
                e.setData({
                    task: t.data.data
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {
        var a = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", e = t.globalData.setting.share_pic;
        return {
            title: a,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
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