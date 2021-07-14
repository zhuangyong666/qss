var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        duration: 300,
        cid: 0,
        page_id: 0,
        refresh: 0,
        categoryData: null,
        cList: null,
        onOff: !1,
        appletKeyword: ""
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onLoad: function(a) {
        var e = this;
        wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    scrollHeight: t.windowHeight
                });
            }
        }), t.util.request({
            url: "entry/wxapp/Setting",
            data: {
                name: "appletKeyword"
            },
            showLoading: !1,
            success: function(t) {
                var a = t.data.data;
                e.setData({
                    appletKeyword: a
                });
            }
        }), t.util.request({
            url: "entry/wxapp/tbVideoCates",
            showLoading: !1,
            data: {},
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data.cates || [], o = t.data.data.videos, i = t.data.data.recs || !1, s = [], n = [ {
                    id: 0,
                    categoryCur: 0,
                    listData: o,
                    page: 2,
                    scrollTop: 0
                } ];
                console.log("menus", a), a.forEach(function(t, a) {
                    s.push({
                        id: t.id,
                        name: t.name
                    }), n.push({
                        id: t.id,
                        categoryCur: a + 1,
                        listData: [],
                        page: 1
                    });
                }), console.log("categoryMenu", s), console.log("categoryData", n);
                var r = n, c = [];
                r = r.reduce(function(t, a) {
                    return c[a.id] || (c[a.id] = t.push(a)), t;
                }, []), console.log("去重", r), e.setData({
                    cList: s,
                    categoryData: r,
                    recs: i
                });
            }
        });
    },
    onChangeItem: function(t) {
        var a = this, e = t.currentTarget.dataset.item_id, o = t.currentTarget.dataset.page_id;
        console.log("item_id", e), console.log("page_id", o), a.setData({
            cid: e,
            page_id: o
        });
    },
    animationFinish: function(t) {
        var a = this.data.cList[t.detail.current].id;
        this.setData({
            cid: t.detail.current,
            page_id: a,
            duration: 200
        }), console.log("翻动页面--cid", this.data.cid), console.log("翻动页面-pageId", this.data.page_id), 
        0 === this.getCurrentData().listData.length && (this.setData({
            refresh: 7
        }), this.refresh()), this.eady();
    },
    eady: function() {
        var t = this, a = wx.createSelectorQuery();
        a.selectAll(".nav-item").boundingClientRect(), a.exec(function(a) {
            for (var e = 0, o = 0; o < t.data.cid; o++) e += a[0][o].width;
            t.setData({
                scrollLeft: Math.ceil(e),
                scrollTop: 0
            });
        });
    },
    refresh: function() {
        this.getVideoList("refresh", 1);
    },
    onBottomloading: function() {
        var t = this;
        t.more(), t.setData({
            refresh: 5
        });
    },
    more: function() {
        console.log("more", this.getCurrentData(this.data.page_id).page), this.getVideoList("more", this.getCurrentData(this.data.page_id).page);
    },
    getCurrentData: function() {
        return console.log("获取当前页面数据", this.data.categoryData[this.data.cid]), this.data.categoryData[this.data.cid];
    },
    getVideoList: function(a, e) {
        var o = this, i = this, s = i.data.cid;
        console.log("currentCur", s);
        var n = i.getCurrentData(s);
        console.log("当前页数据", n.listData), i.data.v_loading || (this.getCurrentData(this.data.page_id).listData.length == this.data.categoryData[this.data.cid].listData.length && (this.setData({
            refresh: 6
        }), setTimeout(function() {
            o.setData({
                refresh: 0
            });
        }, 1e3)), i.data.v_loading = !0, t.util.request({
            url: "entry/wxapp/getTbVideos",
            showLoading: !1,
            data: {
                page: e,
                cid: i.data.page_id
            },
            success: function(t) {
                if (!(t.data.data.length < 1)) {
                    var o = t.data.data;
                    console.log("请求获取到的数据", o), "refresh" === a ? (n.listData = o, console.log("刷新后应展示的数据", n.listData), 
                    n.page = e + 1) : (n.listData = n.listData == o ? "" : n.listData.concat(t.data.data), 
                    console.log("加载后应展示的数据", n.listData), n.page = e + 1), 2 === i.data.refresh && i.setData({
                        refresh: 3
                    }), i.setCurrentData(s, n);
                }
            },
            complete: function() {
                i.data.v_loading = !1;
            }
        }));
    },
    setCurrentData: function(t, a) {
        var e = this.data.categoryData;
        e[t] = a, console.log("更新页面数据", e[t]), this.setData({
            categoryData: e,
            refresh: 0,
            onOff: !1
        });
    },
    toShakevideo: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.id;
        t.currentTarget.dataset.idx;
        wx.navigateTo({
            url: "./shake-video?id=" + a
        });
    },
    onScroll: function(t) {
        var a = this, e = t.detail.scrollTop;
        a.setData({
            scrollTop: e
        });
    },
    touchStart: function(t) {
        var a = t.touches[0].pageY, e = t.touches[0].pageX;
        this.setData({
            touchS: a,
            touchA: e
        });
    },
    touchMove: function(t) {
        var a = t.touches[0].pageY, e = t.touches[0].pageX;
        this.setData({
            touchE: a,
            touchX: e
        }), e < this.data.touchA - 30 || e > this.data.touchA + 30 || a > this.data.touchS + 80 && this.data.scrollTop < 5 && this.setData({
            refresh: 1
        });
    },
    touchEnd: function() {
        var t = this;
        this.data.touchX < this.data.touchA - 30 || this.data.touchX > this.data.touchA + 30 || this.data.scrollTop < 5 && this.data.touchE > this.data.touchS + 80 && (this.setData({
            refresh: 2,
            onOff: !0
        }), setTimeout(function() {
            t.setData({
                refresh: 3,
                touchS: 0,
                touchE: 0
            }), t.refresh();
        }, 300));
    },
    onReady: function() {},
    onShow: function() {
        t.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareTimeline: function() {
        var a = this, e = void 0 !== t.globalData.userInfo.uid ? "from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "from_act=share";
        return {
            title: "~~~抖券-看视频买好货",
            imageUrl: a.data.categoryData[0].listData ? a.data.categoryData[0].listData[0].videoCoverImg : a.data.share_pic,
            query: e
        };
    },
    onShareAppMessage: function() {
        var a = this, e = a.data.categoryData[0].listData ? a.data.categoryData[0].listData[0].videoCoverImg : a.data.share_pic;
        return {
            title: "~~~抖券-看视频买好货",
            path: "/first_duoduoke/pages/shake-coupon/shake-coupon" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
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