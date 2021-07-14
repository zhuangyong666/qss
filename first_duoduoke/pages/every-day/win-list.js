var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        page: 1,
        lastPage: !1,
        list: "",
        address: [],
        address_id: 0
    },
    navBack: function() {
        wx.navigateBack();
    },
    goWineidt: function(t) {
        wx.redirectTo({
            url: "win-edit?id=" + t.currentTarget.dataset.id
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    lookLogisitics: function(t) {
        var a = t.currentTarget.dataset.logistics_no, e = t.currentTarget.dataset.logistics_name;
        "" != a || "" != e ? wx.showModal({
            title: "提示",
            content: "物流:" + e + ",单号:" + a,
            showCancel: !1,
            confirmText: "复制单号",
            success: function(t) {
                t.confirm && (wx.setClipboardData ? wx.setClipboardData({
                    data: a,
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功"
                        });
                    }
                }) : console.log("当前微信版本不支持setClipboardData"));
            }
        }) : wx.showToast({
            title: "无物流信息",
            icon: "none",
            duration: 2e3
        });
    },
    onGetaddress: function(t) {
        var a = this, e = t.currentTarget.dataset.id;
        a.setData({
            address_id: e
        }), wx.chooseAddress({
            success: function(t) {
                var e = [];
                e = [ {
                    userName: t.userName,
                    tel: t.telNumber,
                    provinceName: t.provinceName,
                    cityName: t.cityName,
                    countyName: t.countyName,
                    detailInfo: t.detailInfo
                } ], a.setData({
                    address: e
                }), a.getAddOrder(), console.log(a.data.address);
            }
        });
    },
    getAddOrder: function() {
        var a = this, e = a.data.address[0];
        t.util.request({
            url: "entry/wxapp/getAddEveryDayOrder",
            data: {
                id: a.data.address_id,
                name: e.userName,
                province: e.provinceName,
                city: e.cityName,
                county: e.countyName,
                detail: e.detailInfo,
                tel: e.tel
            },
            success: function(t) {
                "ok" == t.data.message && (wx.showToast({
                    title: "地址添加成功",
                    icon: "success",
                    duration: 2e3
                }), a.setData({
                    page: 1,
                    lastPage: !1
                }), a.getEveryDayOrder());
            }
        });
    },
    onLoad: function(t) {
        var a = this;
        wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    width: t.windowWidth,
                    height: t.windowHeight
                });
            }
        }), a.getEveryDayOrder();
    },
    getEveryDayOrder: function() {
        var a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", n = this;
        t.util.request({
            url: "entry/wxapp/getEveryDayOrder",
            showLoading: !1,
            data: {
                page: n.data.page
            },
            success: function(t) {
                console.log(t.data.data), "function" == typeof a && a();
                var o = t.data.data;
                if ("append" == e) return o.length < 1 ? void n.setData({
                    lastPage: !0
                }) : (n.data.list = 1 == n.data.page ? o : n.data.list.concat(o), n.setData({
                    list: n.data.list
                }), !1);
                n.setData({
                    list: o
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        t.globalData.userInfo ? (this.data.page = 1, this.data.lastPage = !1, this.getEveryDayOrder(function() {
            wx.stopPullDownRefresh();
        })) : t.checkLogin();
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        t.data.page++, t.getEveryDayOrder("", "append");
    },
    onShareAppMessage: function() {}
});