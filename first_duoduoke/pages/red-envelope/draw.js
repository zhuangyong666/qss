var t = getApp();

Page({
    data: {
        navH: 0,
        showDrawShade: !0,
        id: 0,
        user: [],
        isReceive: !0,
        rp_uid: 0,
        skip_id: 1,
        hot_page: 1,
        hot_loading: !1,
        hotGoodsList: !1,
        hotLeft: 0,
        confirmBtnDisabled: !1,
        imgPath: t.getImgUrl(),
        videoAd: !1,
        video_ad_code: !1,
        is_look_video: !0
    },
    getReceiveRpw: function() {
        var a = this;
        t.globalData.userInfo ? t.util.request({
            url: "entry/wxapp/getReceiveRpw",
            data: {
                id: a.data.id,
                rp_uid: a.data.rp_uid
            },
            success: function(t) {
                console.log(t.data.data), a.setData({
                    user: t.data.data
                }), 1 == a.data.user[0].status && a.setData({
                    showDrawShade: !1,
                    isReceive: !1
                });
            }
        }) : t.checkLogin();
    },
    getHotGoods: function() {
        var a = this;
        a.data.hot_loading || (a.data.hot_loading = !0, t.util.request({
            url: "entry/wxapp/getHotGoods",
            showLoading: !1,
            data: {
                page: a.data.hot_page,
                channel_type: 1
            },
            success: function(t) {
                t.data.data.length < 1 || (a.data.hotGoodsList = 1 == a.data.hot_page ? t.data.data : a.data.hotGoodsList.concat(t.data.data), 
                a.setData({
                    hotGoodsList: a.data.hotGoodsList
                }), console.log(a.data.hotGoodsList), a.data.hot_page++);
            },
            complete: function() {
                a.data.hot_loading = !1;
            }
        }));
    },
    toGoodsPage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.goods_id;
        if (void 0 === t.currentTarget.dataset.source) {
            var o = "&source=" + this.data.skip_id;
            wx.navigateTo({
                url: "../goods/goods?goods_id=" + a + o
            });
        } else wx.navigateTo({
            url: "../goods/goods?goods_id=" + a
        });
    },
    onLoad: function(a) {
        this.setData({
            navH: t.globalData.navHeight,
            id: a.id,
            rp_uid: a.rp_uid
        }), this.getHotGoods(), this.getReceiveRpw();
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    navBack: function() {
        wx.navigateBack();
    },
    chooseDrawShade: function(a) {
        if (t.globalData.userInfo) {
            var o = this, e = o.data.user[0].id, n = o.data.user[0].money, i = o.data.user[0].nickname;
            o.setData({
                confirmBtnDisabled: !0
            }), wx.showLoading({
                title: "加载中"
            }), t.util.request({
                url: "entry/wxapp/drawRedPacket",
                data: {
                    id: e,
                    money: n,
                    nickname: i
                },
                success: function(t) {
                    console.log(t.data.data), wx.hideLoading(), o.setData({
                        confirmBtnDisabled: !1,
                        showDrawShade: !1
                    });
                }
            });
        } else t.checkLogin();
    },
    toRedEnvelope: function() {
        wx.navigateTo({
            url: "./red-envelope"
        });
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.hot_page = 1, this.data.hot_loading = !1, this.getHotGoods(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {}
});