var a = getApp(), t = wx.getSystemInfoSync();

Page({
    data: {
        navH: 0,
        dateObj: !1,
        chatList: [],
        plusH: 37,
        pageHeight: t.windowHeight,
        keyword: "",
        his_key: [],
        is_loading: !1
    },
    onLoad: function(t) {
        this.setData({
            navH: a.globalData.navHeight,
            app_name: a.globalData.setting.name,
            hot_skey: a.globalData.setting.hot_skey.split("|")
        }), this.data.dateObj = new a.util.date();
    },
    setSearchKey: function(a) {
        this.data.keyword = a.detail.value;
    },
    aiSearch: function(t) {
        if (void 0 !== t) if (void 0 !== t.detail.value) {
            e = t.detail.value;
            console.log(e);
        } else if (void 0 !== t.currentTarget.dataset.key) e = t.currentTarget.dataset.key;
        if (!e) {
            if (!this.data.keyword) return;
            var e = this.data.keyword;
        }
        this.data.chatList.push({
            from: "user",
            type: "text",
            name: a.globalData.userInfo.nickName,
            avatar: a.globalData.userInfo.avatar,
            content: e,
            time_str: this.data.dateObj.dateToStr("MM-dd HH:mm")
        });
        var o = this;
        this.setData({
            chatList: this.data.chatList,
            keyword: ""
        }, function() {
            o.pageScrollToBottom();
        }), this.getAiSearch(e);
    },
    toGoodsPage: function(a) {
        var t = a.currentTarget.dataset.goods_id;
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + t
        });
    },
    getAiSearch: function(t) {
        var e = this, o = e.inArray(t, e.data.his_key);
        if (!1 === o) {
            s = {
                keyword: t,
                page: 1
            };
            e.data.his_key.push(s);
        } else {
            var i = e.data.his_key.slice(o, o + 1), s = {
                keyword: t,
                page: parseInt(i[0].page) + 1
            };
            e.data.his_key.splice(o, 1, s);
        }
        a.util.request({
            url: "entry/wxapp/getAiSearch",
            data: s,
            success: function(i) {
                if ("need" != i.data.message) {
                    var s = i.data.data.slice(0, 2);
                    if (s.length < 1) e.againSearch(t, o); else {
                        for (var n in s) e.data.chatList.push({
                            from: "official",
                            type: "goods",
                            name: a.globalData.setting.name,
                            avatar: a.globalData.setting.logo,
                            goods: {
                                title: s[n].goods_name,
                                price: (s[n].min_group_price - s[n].coupon_discount) / 100,
                                org_price: s[n].min_group_price / 100,
                                coupon: s[n].coupon_discount / 100,
                                img: s[n].goods_thumbnail_url,
                                id: s[n].goods_id,
                                store_logo: a.globalData.setting.logo,
                                store_name: a.globalData.setting.name
                            },
                            time_str: e.data.dateObj.dateToStr("MM-dd HH:mm")
                        });
                        e.setData({
                            chatList: e.data.chatList
                        }, function() {
                            e.pageScrollToBottom();
                        });
                    }
                } else wx.showModal({
                    title: "系统信息",
                    content: "需要先去拼多多授权才能搜索:)",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "去授权",
                    complete: function() {
                        wx.navigateToMiniProgram({
                            appId: i.data.data.app_id,
                            path: i.data.data.page_path,
                            success: function(a) {
                                console.log("ok"), wx.navigateBack();
                            }
                        });
                    }
                });
            },
            fail: function() {
                e.againSearch(t, o);
            }
        });
    },
    againSearch: function(a, t) {
        var e = this;
        wx.showModal({
            title: "系统提示",
            content: "亲亲~~，我打了个盹，没有为您找到关于“" + a + "”的商品，您可以再试一次！！！",
            confirmText: "再来一次",
            cancelColor: "#cccccc",
            confirmColor: "#f43f6c",
            showCancel: !0,
            cancelText: "算了",
            success: function(o) {
                o.confirm && (e.data.keyword = a, e.data.his_key.splice(t, 1), e.aiSearch(), console.log("用户点击确定"));
            }
        });
    },
    inArray: function(a, t) {
        for (var e = 0, o = t.length; e < o; e++) if (a == t[e].keyword) return e;
        return !1;
    },
    onShow: function() {
        this.data.chatList.push({
            from: "official",
            type: "text",
            name: a.globalData.setting.name,
            avatar: a.globalData.setting.logo,
            content: "欢迎光临，请输入你想搜索的商品，我们将为您挑选最优惠的，发送给您。",
            time_str: this.data.dateObj.dateToStr("MM-dd HH:mm")
        });
        var t = this;
        this.setData({
            chatList: this.data.chatList
        }, function() {
            t.pageScrollToBottom();
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
    pageScrollToBottom: function() {
        var a = 999 * this.data.chatList.length;
        this.setData({
            scrollTopVal: a
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