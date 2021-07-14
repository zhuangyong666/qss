var t = getApp();

Page({
    data: {
        navH: 0,
        imgPath: t.getImgUrl(),
        task: !1,
        task_text: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    goPartakeOf: function() {
        wx.redirectTo({
            url: "../partake/partake"
        });
    },
    onLoad: function(a) {
        this.setData({
            navH: t.globalData.navHeight
        }), t.globalData.setting.task_3_text ? this.setData({
            task_text: t.globalData.setting.task_3_text
        }) : this.getTask();
    },
    getTask: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getTaskDetail",
            data: {
                label: 3
            },
            showLoading: !1,
            success: function(t) {
                console.log("TASK3", t), e.setData({
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