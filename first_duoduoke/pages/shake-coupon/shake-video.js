var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        msgList: [ {
            name: "我是**",
            msg: "正在去买"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "正在去买"
        }, {
            name: "我是**",
            msg: "正在去买"
        }, {
            name: "我是**",
            msg: "正在去买"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "我是**",
            msg: "喜欢了这件商品"
        }, {
            name: "我是**",
            msg: "正在去买"
        }, {
            name: "小**",
            msg: "喜欢了这件商品"
        }, {
            name: "小**",
            msg: "正在去买"
        } ],
        current: 0,
        pvd: null,
        duration: 500,
        id: "",
        toView: null,
        page: 1,
        vListAll: [],
        appletKeyword: "",
        video_title: ""
    },
    navBack: function() {
        wx.navigateBack();
    },
    toGoodsPage: function(t) {
        if (a.globalData.userInfo) {
            var e = t.currentTarget.dataset.goods_id;
            wx.navigateTo({
                url: "../goods/goods?source=6&goods_id=" + e
            });
        } else a.checkLogin();
    },
    dianZan: function(t) {
        if (a.globalData.userInfo) {
            var e = t.currentTarget.dataset.vdx;
            this.data.vListAll[e].zan || (this.data.vListAll[e].zan = !0, this.data.vListAll[e].videoLikeCount = parseInt(this.data.vListAll[e].videoLikeCount) + 1, 
            this.setData({
                vListAll: this.data.vListAll
            }));
        } else a.checkLogin();
    },
    copyGuideArt: function(t) {
        if (a.globalData.userInfo) {
            var e = t.currentTarget.dataset.art;
            wx.setClipboardData({
                data: e,
                success: function(t) {
                    a.globalData.showSmart = !1;
                }
            });
        } else a.checkLogin();
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    onChange: function(a) {
        var t = this;
        console.log(a.detail.current);
        var e = a.detail.current;
        if (t.setData({
            current: e
        }), wx.createVideoContext(t.data.pvd, this).pause(), 0 == t.data.current) {
            var o = "pvd" + this.data.vListAll[t.data.current].goods_id;
            console.log("第一页原生video自动播放", o), t.setData({
                pvd: o
            });
            var n = wx.createVideoContext(t.data.pvd, this);
            n.seek(0), setTimeout(function() {
                n.play();
            }, 500);
        } else {
            var s = "pvd" + this.data.vListAll[t.data.current].goods_id;
            console.log("原生video自动播放", s), t.setData({
                pvd: s
            });
            var i = wx.createVideoContext(t.data.pvd, this);
            i.seek(0), setTimeout(function() {
                i.play();
            }, 500);
        }
        if (t.data.vListAll.length - this.data.current <= 3) {
            var d = t.data.page + 1;
            t.setData({
                page: d
            }), t.getVideoList("more");
        }
    },
    onLoad: function(t) {
        var e = this;
        void 0 === t.id && wx.navigateBack(), a.util.request({
            url: "entry/wxapp/Setting",
            data: {
                name: "appletKeyword"
            },
            showLoading: !1,
            success: function(a) {
                var t = a.data.data;
                e.setData({
                    appletKeyword: t
                });
            }
        });
        var o = getCurrentPages(), n = o[o.length - 2].data.categoryData[t.id].listData[t.idx], s = "pvd" + n.goods_id, i = [ n ];
        this.setData({
            id: n.goods_id,
            cid: t.cid,
            cur: t.id,
            pvd: s,
            vListAll: i,
            toView: "msg-" + (e.data.msgList.length - 1)
        }), e.getVideoList("refresh");
    },
    getCurrentData: function() {
        return console.log("获取当前页面数据", this.data.vListAll), this.data.vListAll;
    },
    getVideoList: function(t) {
        var e = this, o = e.getCurrentData();
        console.log("获取当前的数据", o), e.data.v_loading || (e.data.v_loading = !0, a.util.request({
            url: "entry/wxapp/getTbVideos",
            showLoading: !1,
            data: {
                page: e.data.page,
                cid: e.data.cid
            },
            success: function(a) {
                if (!(a.data.data.length < 1)) {
                    console.log("通过cid获取到的视频数据", a);
                    var n = a.data.data;
                    o = "refresh" === t ? e.data.vListAll.concat(n) : o === n ? "" : o.concat(a.data.data), 
                    console.log("vListAll里的视频数据", o);
                    var s = o, i = [];
                    s = s.reduce(function(a, t) {
                        return i[t.goods_id] || (i[t.goods_id] = a.push(t)), a;
                    }, []), console.log("去重", s), e.setData({
                        vListAll: s
                    });
                }
            },
            complete: function() {
                e.data.v_loading = !1;
            }
        }));
    },
    onReady: function() {},
    onShow: function() {
        a.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        var e = "button" == t.from ? t.target.dataset.vdx : 0, o = this, n = o.data.vListAll[e].video_title, s = o.data.vListAll[e].videoCoverImg;
        return {
            title: n,
            path: "/first_duoduoke/pages/shake-coupon/shake-coupon" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "?from_act=share" : "&from_act=share"),
            imageUrl: s,
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