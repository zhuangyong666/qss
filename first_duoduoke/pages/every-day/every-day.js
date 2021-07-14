var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        showNavcolor: !1,
        switch1Checked: !1,
        showShareShade: !1,
        page: 1,
        lastPage: !1,
        goods_info: !1,
        win_list: "",
        share_img: "",
        from_uid: 0
    },
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    navBack: function() {
        this.data.from_uid > 0 ? wx.switchTab({
            url: "../index/index"
        }) : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onShowShareShade: function() {
        if (a.globalData.userInfo || this.data.showShareShade) {
            var t = this;
            t.data.showShareShade ? t.setData({
                showShareShade: !1
            }) : "" == t.data.share_img ? t.getShareImg() : t.setData({
                showShareShade: !0
            });
        } else a.checkLogin();
    },
    getShareImg: function() {
        var t = this;
        a.util.request({
            url: "entry/wxapp/getEveryDayPoster",
            success: function(a) {
                console.log(a.data.data), t.setData({
                    share_img: a.data.data,
                    showShareShade: !0
                });
            }
        });
    },
    saveQrcodeToPhotosAlbum: function(a) {
        var t = this;
        wx.getImageInfo({
            src: t.data.share_img,
            success: function(a) {
                console.log(a), wx.saveImageToPhotosAlbum({
                    filePath: a.path,
                    success: function(a) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(a) {
                        console.log(a);
                    }
                });
            }
        });
    },
    onPageScroll: function(a) {
        a.scrollTop >= 150 ? this.setData({
            showNavcolor: !0
        }) : this.setData({
            showNavcolor: !1
        });
    },
    switch1Change: function() {
        this.data.switch1Checked = !this.data.switch1Checked, this.setData({
            switch1Checked: this.data.switch1Checked
        }), 1 == this.data.switch1Checked ? wx.showToast({
            title: "已开启提醒"
        }) : wx.showToast({
            title: "已关闭提醒"
        });
    },
    toEverydayGD: function(a) {
        wx.navigateTo({
            url: "./every-day-GD?id=" + a.currentTarget.dataset.id
        });
    },
    toWinlist: function() {
        wx.navigateTo({
            url: "win-list"
        });
    },
    showGoodsPicc: function(a) {
        var t = a.target.dataset.index, o = a.target.dataset.idx, e = this.data.win_list[o];
        wx.previewImage({
            current: e.info.pics[t],
            urls: e.info.pics
        });
    },
    onLoad: function(a) {
        var t = this;
        wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    width: a.windowWidth,
                    height: a.windowHeight
                });
            }
        });
        var o = a.from_uid ? a.from_uid : 0;
        t.setData({
            from_uid: o
        }), t.getEveryDayInfo();
    },
    getEveryDayInfo: function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "cover", e = this;
        a.util.request({
            url: "entry/wxapp/getEveryDayInfo",
            showLoading: !1,
            data: {
                page: e.data.page
            },
            success: function(a) {
                console.log(a.data.data);
                var s = a.data.data;
                if ("function" == typeof t && t(), "append" == o) return s.goods_info.length < 1 ? (e.setData({
                    lastPage: !0
                }), void wx.showToast({
                    title: "已加载全部数据",
                    icon: "success",
                    duration: 1e3
                })) : (e.data.goods_info = 1 == e.data.page ? s.goods_info : e.data.goods_info.concat(s.goods_info), 
                e.setData({
                    goods_info: e.data.goods_info,
                    win_list: s.win_list
                }), !1);
                e.setData({
                    goods_info: s.goods_info,
                    win_list: s.win_list
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        this.data.page = 1, this.data.lastPage = !1, this.getEveryDayInfo(function() {
            wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        var a = this;
        if (!0 === a.data.lastPage) return !1;
        a.data.page++, a.getEveryDayInfo("", "append");
    },
    onShareAppMessage: function() {
        var t = this, o = a.globalData.userInfo.nickName + "邀请您免费抽奖得商品,快点来抽奖吧!", e = t.data.share_img ? t.data.share_img : "";
        return {
            title: o,
            path: "/first_duoduoke/pages/every-day/every-day" + (void 0 !== a.globalData.userInfo.uid ? "?from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : ""),
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