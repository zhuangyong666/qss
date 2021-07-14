var a = getApp();

Page({
    data: {
        navH: a.globalData.navHeight,
        show: 0,
        imgPath: a.getImgUrl(),
        linkData: !1
    },
    navBack: function() {
        a.globalData.from_act ? a.goIndex() : wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    switchShow: function(a) {
        var t = a.currentTarget.dataset.show;
        this.setData({
            show: t
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
    },
    onLoad: function(a) {
        this.setData({
            show: a.show
        }), this.getMtLink();
    },
    toMtwm: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.navigateToMiniProgram({
            appId: this.data.linkData.appid,
            path: this.data.linkData.mtwm.page_path,
            envVersion: "release",
            success: function(a) {
                console.log("打开小程序成功");
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getMtLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    }), wx.navigateToMiniProgram({
                        appId: t.data.linkData.appid,
                        path: t.data.linkData.mtwm.page_path,
                        envVersion: "release",
                        success: function(a) {
                            console.log("打开小程序成功");
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    toMtsg: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.navigateToMiniProgram({
            appId: this.data.linkData.appid,
            path: this.data.linkData.mtsg.page_path,
            envVersion: "release",
            success: function(a) {
                console.log("打开小程序成功");
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getMtLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    }), wx.navigateToMiniProgram({
                        appId: t.data.linkData.appid,
                        path: t.data.linkData.mtsg.page_path,
                        envVersion: "release",
                        success: function(a) {
                            console.log("打开小程序成功");
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    getMtLink: function() {
        if (a.globalData.userInfo) {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getMtLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    });
                }
            });
        }
    },
    copyArt: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.setClipboardData({
            data: 1 == this.data.show ? this.data.linkData.mtsg.guide_article : this.data.linkData.mtwm.guide_article,
            success: function(t) {
                a.globalData.showSmart = !1, wx.showToast({
                    title: "复制成功"
                });
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getMtLink",
                success: function(e) {
                    var n = e.data.data;
                    t.setData({
                        linkData: n
                    }), wx.setClipboardData({
                        data: 1 == t.data.show ? t.data.linkData.mtsg.guide_article : t.data.linkData.mtwm.guide_article,
                        success: function(t) {
                            a.globalData.showSmart = !1, wx.showToast({
                                title: "复制成功"
                            });
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    saveMtPoster: function() {
        if (a.globalData.userInfo) {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getMtPoster",
                data: {
                    show: t.data.show,
                    surl: 1 == t.data.show ? t.data.linkData.mtsg.short_url : t.data.linkData.mtwm.short_url
                },
                success: function(a) {
                    var e = a.data.data;
                    console.log(e), wx.getImageInfo({
                        src: e,
                        success: function(a) {
                            wx.saveImageToPhotosAlbum({
                                filePath: a.path,
                                success: function(a) {
                                    wx.showToast({
                                        title: "已保存至相册",
                                        icon: "success"
                                    });
                                },
                                fail: function(a) {
                                    console.log(a), wx.showModal({
                                        title: "系统提示",
                                        content: "请转至“授权设置”页面打开“保存到相册”开关",
                                        confirmColor: "#f43f6c",
                                        confirmText: "去打开",
                                        showCancel: !1,
                                        success: function(a) {
                                            wx.openSetting({
                                                withSubscriptions: !0,
                                                success: function() {}
                                            });
                                        }
                                    });
                                }
                            });
                        },
                        complete: function() {
                            t.delPoster();
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    delPoster: function() {
        a.util.request({
            url: "entry/wxapp/delTempPoster",
            showLoading: !1,
            success: function(a) {
                console.log(a);
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        a.reUserInfo();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    loginAfter: function(t) {
        a.loginAfter(t);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    onShareTimeline: function() {
        var t = this, e = void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "&from_act=share";
        return {
            title: 1 == t.data.show ? "【美团闪购34元红包】每日限时抢" : "【美团外卖65元红包】每日限时抢",
            imageUrl: 1 == t.data.show ? t.data.imgPath + "mtwm-main-st2.png" : t.data.imgPath + "mtwm-main-st.png",
            query: "show=" + t.data.show + e
        };
    },
    onShareAppMessage: function() {
        var t = this, e = 1 == t.data.show ? "【美团闪购34元红包】每日限时抢" : "【美团外卖65元红包】每日限时抢", n = 1 == t.data.show ? t.data.imgPath + "mtwm-main-st2.png" : t.data.imgPath + "mtwm-main-st.png", s = void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "&from_act=share";
        return {
            title: e,
            path: "/first_duoduoke/pages/pleasure/pleasure-main?show=" + t.data.show + s,
            imageUrl: n,
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