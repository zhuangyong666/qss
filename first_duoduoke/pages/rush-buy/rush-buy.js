var o = getApp();

Page({
    data: {
        navH: o.globalData.navHeight,
        goodsList: [],
        nowIdx: 0,
        timer: "",
        rushbuylog_id: 0,
        f_uid: 0,
        show_shareHelp: !1,
        share_goodsinfo: {},
        share_rushbuylog: {},
        share_userinfo: {},
        times_sum: 7199,
        qgdjs_jo: {
            hour: "00",
            min: "00",
            sec: "00"
        },
        come_share_id: 0
    },
    countDown: function() {
        var o = this;
        console.log("1111"), o.setData({
            timer: setInterval(function() {
                var a = o.data.times_sum;
                if (a <= 0) return o.setData({
                    qgdjs_jo: {
                        hour: "00",
                        min: "00",
                        sec: "00"
                    }
                }), void clearInterval(o.data.timer);
                var e = parseInt(a / 3600 % 24), t = parseInt(a / 60 % 60), s = parseInt(a % 60);
                e < 10 && (e = "0" + e), t < 10 && (t = "0" + t), s < 10 && (s = "0" + s), o.setData({
                    qgdjs_jo: {
                        hour: e,
                        min: t,
                        sec: s
                    },
                    times_sum: o.data.times_sum - 1
                });
            }, 1e3)
        });
    },
    swiperChange: function(o) {
        console.log(o), this.setData({
            nowIdx: o.detail.current
        });
    },
    showInfo: function() {
        o.showInfo(this, o.globalData.setting.rushbuy_rule_intro);
    },
    hideInfo: function() {
        o.hideInfo(this);
    },
    toShareRushbuy: function() {
        o.globalData.userInfo ? wx.navigateTo({
            url: "./share-rush-buy?come_share_id=" + this.data.come_share_id + "&log_id=0&r_id=0"
        }) : o.checkLogin();
    },
    toRushorder: function() {
        o.globalData.userInfo ? wx.navigateTo({
            url: "./rush-order?come_share_id=" + this.data.come_share_id
        }) : o.checkLogin();
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    toGoodsdetails: function(o) {
        this.setData({
            show_shareHelp: !1
        });
        var a = o.currentTarget.dataset.goods_id, e = o.currentTarget.dataset.source, t = o.currentTarget.dataset.id, s = o.currentTarget.dataset.come_share_id ? o.currentTarget.dataset.come_share_id : this.data.come_share_id;
        wx.navigateTo({
            url: "./rush-goodsdetails?come_share_id=" + s + "&id=" + t + "&goods_id=" + a + "&source=" + e
        });
    },
    onLoad: function(o) {
        var a = this;
        a.setData({
            rushbuylog_id: void 0 !== o.log_id ? o.log_id : 0,
            f_uid: void 0 !== o.from_uid ? o.from_uid : 0,
            come_share_id: void 0 !== o.come_share_id ? o.come_share_id : 0
        }), a.getRushBuyInfo();
    },
    getRushBuyInfo: function() {
        var a = this;
        o.util.request({
            url: "entry/wxapp/getRushBuyInfo",
            data: {
                rushbuylog_id: a.data.rushbuylog_id,
                f_uid: a.data.f_uid
            },
            success: function(e) {
                var e = e.data.data;
                o.globalData.userInfo && a.data.f_uid && (o.globalData.setting = e.setting), a.setData({
                    goodsList: e.list
                }), e.share_rushbuylog && (a.setData({
                    share_goodsinfo: e.share_goodsinfo,
                    share_rushbuylog: e.share_rushbuylog,
                    share_userinfo: e.share_userinfo,
                    show_shareHelp: !0,
                    times_sum: e.share_rushbuylog.times_num
                }), a.countDown());
            }
        });
    },
    loginAfter: function(a) {
        o.loginAfter(a);
    },
    loginCancel: function() {
        o.loginCancel();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});