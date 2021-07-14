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
    saveElePoster: function() {
        if (a.globalData.userInfo) {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getElePoster",
                data: {
                    wx_qrcode_url: 1 == t.data.show ? t.data.linkData.elesc.wx_qrcode_url : t.data.linkData.elewm.wx_qrcode_url
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
        }), this.getEleLink();
    },
    toElewm: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.navigateToMiniProgram({
            appId: this.data.linkData.appid,
            path: this.data.linkData.elewm.wx_miniprogram_path,
            envVersion: "release",
            success: function(a) {
                console.log("打开小程序成功");
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getEleLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    }), wx.navigateToMiniProgram({
                        appId: t.data.linkData.appid,
                        path: t.data.linkData.elewm.wx_miniprogram_path,
                        envVersion: "release",
                        success: function(a) {
                            console.log("打开小程序成功");
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    copyTpwd: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.setClipboardData({
            data: 1 == this.data.show ? this.data.linkData.elesc.longTpwd : this.data.linkData.elewm.longTpwd,
            success: function(t) {
                a.globalData.showSmart = !1, wx.showToast({
                    title: "复制成功"
                });
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getEleLink",
                success: function(e) {
                    var n = e.data.data;
                    t.setData({
                        linkData: n
                    }), wx.setClipboardData({
                        data: 1 == t.data.show ? t.data.linkData.elesc.longTpwd : t.data.linkData.elewm.longTpwd,
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
    toElesc: function() {
        if (a.globalData.userInfo) if (this.data.linkData) wx.navigateToMiniProgram({
            appId: this.data.linkData.appid,
            path: this.data.linkData.elesc.wx_miniprogram_path,
            envVersion: "release",
            success: function(a) {
                console.log("打开小程序成功");
            }
        }); else {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getEleLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    }), wx.navigateToMiniProgram({
                        appId: t.data.linkData.appid,
                        path: t.data.linkData.elesc.wx_miniprogram_path,
                        envVersion: "release",
                        success: function(a) {
                            console.log("打开小程序成功");
                        }
                    });
                }
            });
        } else a.checkLogin();
    },
    getEleLink: function() {
        if (a.globalData.userInfo) {
            var t = this;
            a.util.request({
                url: "entry/wxapp/getEleLink",
                success: function(a) {
                    var e = a.data.data;
                    t.setData({
                        linkData: e
                    });
                }
            });
        }
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
            title: 1 == t.data.show ? "【饿了么福利】在家逛超市 领券享0元平安果" : "【饿了么福利】饿了么请你吃大餐，每月可省200元",
            imageUrl: 1 == t.data.show ? t.data.imgPath + "eleme-main-st2.png" : t.data.imgPath + "eleme-main-st.png",
            query: "show=" + t.data.show + e
        };
    },
    onShareAppMessage: function() {
        var t = this, e = 1 == t.data.show ? "【饿了么福利】在家逛超市 领券享0元平安果" : "【饿了么福利】饿了么请你吃大餐，每月可省200元", n = 1 == t.data.show ? t.data.imgPath + "eleme-main-st2.png" : t.data.imgPath + "eleme-main-st.png", o = void 0 !== a.globalData.userInfo.uid ? "&from_uid=" + a.globalData.userInfo.uid + "&from_act=share" : "&from_act=share";
        return {
            title: e,
            path: "/first_duoduoke/pages/pleasure/pleasure-main?show=" + t.data.show + o,
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