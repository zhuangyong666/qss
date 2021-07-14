var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        imgPath: a.getImgUrl()
    },
    navBack: function() {
        a.globalData.from_act ? a.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toMainPage: function(e) {
        if (a.globalData.userInfo) {
            var n = e.currentTarget.dataset.show;
            wx.navigateTo({
                url: "./pleasure-main?show=" + n
            });
        } else a.checkLogin();
    },
    toMainPage2: function(e) {
        if (a.globalData.userInfo) {
            var n = e.currentTarget.dataset.show;
            wx.navigateTo({
                url: "./pleasure-main2?show=" + n
            });
        } else a.checkLogin();
    },
    onLoad: function(a) {},
    loginAfter: function(e) {
        a.loginAfter(e);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    onReady: function() {},
    onShow: function() {
        a.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareTimeline: function() {
        var e = this, n = void 0 !== a.globalData.userInfo.uid ? "from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "from_act=share";
        return {
            title: "【美团&饿了么福利】吃喝玩乐 每日大额券限量领取",
            imageUrl: e.data.imgPath + "eleme.png",
            query: n
        };
    },
    onShareAppMessage: function() {
        var e = this.data.imgPath + "eleme-ht.jpg";
        return {
            title: "【美团&饿了么福利】吃喝玩乐 每日大额券限量领取",
            path: "/first_duoduoke/pages/pleasure/pleasure--list" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
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