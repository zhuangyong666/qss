var t = getApp();

Page({
    data: {
        navH: 0,
        plusH: 42,
        plusH2: 67,
        itemChioce: 1,
        sta: 15,
        sliderOffset: -2,
        sliderLeft: 6.5,
        pmH: 0,
        list: !1,
        page: 1,
        lastPage: !1,
        loading: !1,
        source: 1,
        jd_open: 0,
        mg_open: 0,
        vip_open: 0,
        sn_open: 0,
        source_open: !0,
        source_top: 0,
        balance: "",
        goods_id: "",
        order_id: "",
        source_d: "",
        price: "",
        checked: !1,
        tb_order_sn: ""
    },
    toGoodsPage: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.goods_id;
        if (0 != a) {
            var e = t.currentTarget.dataset.source;
            if (void 0 !== t.currentTarget.dataset.source) {
                var o = "&source=" + e;
                wx.navigateTo({
                    url: "../goods/goods?goods_id=" + a + o
                });
            } else wx.navigateTo({
                url: "../goods/goods?goods_id=" + a
            });
        }
    },
    setTbOrdersn: function(t) {
        this.setData({
            tb_order_sn: t.detail.value
        });
    },
    emptyTbOrdersn: function() {
        this.setData({
            tb_order_sn: ""
        });
    },
    lookupTbOrder: function() {
        var a = this;
        a.data.tb_order_sn ? a.data.loading || (a.data.loading = !0, t.util.request({
            url: "entry/wxapp/lookTbOrder",
            data: {
                order_sn: a.data.tb_order_sn
            },
            success: function(t) {
                a.data.loading = !1, a.emptyTbOrdersn(), console.log(t.data.data), wx.showToast({
                    title: "订单已找回",
                    icon: "success"
                }), setTimeout(function() {
                    a.data.page = 1, a.data.lastPage = !1, a.getOrderList();
                }, 1500);
            }
        })) : wx.showToast({
            title: "订单号不能为空",
            icon: "none"
        });
    },
    switchSource: function(t) {
        var a = this;
        console.log(t);
        var e = t.target.dataset.source, o = t.target.dataset.idx, s = 0;
        s = o > 4 ? 30 * o : 0 * o, e != a.data.source && (a.setData({
            source: e,
            itemChioce: 1,
            sliderOffset: -2,
            sliderLeft: 6.5,
            order_sn: "",
            checked: !1,
            scrollLeft: s
        }), a.data.page = 1, a.data.lastPage = !1, a.getOrderList());
    },
    showTip: function(a) {
        var e = a.currentTarget.dataset.idx;
        t.showInfo(this, "该笔订单失效原因：" + this.data.list[e].order_status_desc);
    },
    hideInfo: function() {
        t.hideInfo(this);
    },
    copySn: function(a) {
        var e = a.currentTarget.dataset.idx, o = this;
        wx.setClipboardData ? wx.setClipboardData({
            data: o.data.list[e].order_sn,
            success: function(a) {
                t.globalData.showSmart = !1, wx.showToast({
                    title: "复制成功"
                });
            }
        }) : console.log("当前微信版本不支持setClipboardData");
    },
    goChangeTeam: function(t) {
        var a = t.currentTarget.dataset.replyType, e = t.currentTarget.dataset.status, o = this;
        a != o.data.itemChioce && (o.setData({
            itemChioce: a,
            sta: e
        }), console.log(e), 1 == o.data.itemChioce && o.setData({
            sliderOffset: -2,
            sliderLeft: 6.5
        }), 2 == o.data.itemChioce && o.setData({
            sliderOffset: 17,
            sliderLeft: 6.5
        }), 3 == o.data.itemChioce && o.setData({
            sliderOffset: 36,
            sliderLeft: 6.5
        }), 4 == o.data.itemChioce && o.setData({
            sliderOffset: 55,
            sliderLeft: 6.5
        }), 5 == o.data.itemChioce && o.setData({
            sliderOffset: 74,
            sliderLeft: 6.5
        }), o.data.page = 1, o.data.lastPage = !1, o.getOrderList());
    },
    getOrderList: function(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", o = this;
        if (1 != o.data.balance) s = 1 == o.data.itemChioce ? {
            page: o.data.page,
            source: o.data.source
        } : {
            page: o.data.page,
            status: o.data.sta,
            source: o.data.source
        }; else var s = {
            page: o.data.page,
            status: 3,
            source: o.data.source
        };
        1 == o.data.page && wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), o.data.loading || (o.data.loading = !0, t.util.request({
            url: "entry/wxapp/getOrderList",
            data: s,
            success: function(t) {
                if (o.data.loading = !1, "function" == typeof a && a(), "append" == e) {
                    if (!t.data.data.length) return o.data.lastPage = !0, !1;
                    o.data.list = o.data.list.concat(t.data.data);
                } else o.data.list = t.data.data;
                o.setData({
                    list: o.data.list
                });
            }
        }));
    },
    onLoad: function(a) {
        console.log("进入", a);
        var e = this;
        void 0 !== a.balance && 1 == a.balance && e.setData({
            itemChioce: 4,
            balance: a.balance,
            plusH2: 0
        }), e.setData({
            navH: t.globalData.navHeight,
            tb_open: t.globalData.setting.tb_open,
            jd_open: t.globalData.setting.jd_open,
            mg_open: t.globalData.setting.mg_open,
            vip_open: t.globalData.setting.vip_open,
            sn_open: t.globalData.setting.sn_open,
            kl_open: t.globalData.setting.kl_open,
            mt_open: t.globalData.setting.mt_open,
            sp_open: t.globalData.setting.sp_open
        }), 0 == e.data.tb_open && 0 == e.data.jd_open && 0 == e.data.mg_open && 0 == e.data.vip_open && 0 == e.data.sn_open && 0 == e.data.kl_open && 0 == e.data.mt_open && 0 == e.data.sp_open && e.setData({
            source_open: !1,
            plusH: 0
        }), void 0 !== a.tb_order_sn ? e.setData({
            source: a.source,
            tb_order_sn: a.tb_order_sn
        }, function() {
            e.getOrderList(function() {
                e.lookupTbOrder();
            });
        }) : e.getOrderList(), t.checkUserSub("4|5");
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
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1;
        this.getOrderList(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var t = this;
        if (!0 === t.data.lastPage) return !1;
        wx.showLoading({
            title: "加载中"
        }), t.data.page++, t.getOrderList(function() {
            wx.hideLoading();
        }, "append");
    },
    radioChange: function(t) {
        console.log("eee", t), console.log("radio发生change事件，携带value值为：", t.detail.value);
        var a = t.detail.value, e = a.split(",");
        console.log(a), console.log(e);
        var o = e[0], s = e[1], n = e[2], d = e[3];
        this.setData({
            goods_id: o,
            order_id: s,
            source_d: n,
            price: d
        });
    },
    backDryPage: function(t) {
        console.log(t);
        var a = [ t.target.dataset.goods_id, t.target.dataset.order_id, t.target.dataset.source_d, t.target.dataset.price ], e = getCurrentPages();
        e[e.length - 2].setData({
            returnedValue: a
        }), wx.navigateBack({
            delta: 1
        });
    }
});