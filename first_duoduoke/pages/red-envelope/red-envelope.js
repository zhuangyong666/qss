var t = getApp();

Page({
    data: {
        navH: 0,
        showRule: !1,
        showEnvelope: !1,
        showShareShade: !1,
        imgPath: t.getImgUrl(),
        list: [ {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        }, {
            status: 0
        } ],
        all_money: 0,
        num: 0,
        last_id: [],
        rules_redpacked_game: "",
        redp_id: 0,
        poster: "",
        isLogin: !1
    },
    saveQrcodeToPhotosAlbum: function(t) {
        var s = this;
        wx.getImageInfo({
            src: s.data.poster,
            success: function(t) {
                console.log(t), wx.saveImageToPhotosAlbum({
                    filePath: t.path,
                    success: function(t) {
                        wx.showToast({
                            title: "已保存至相册",
                            icon: "success"
                        });
                    },
                    fail: function(t) {
                        console.log(t);
                    }
                });
            }
        });
    },
    getRedPacketWall: function() {
        var s = this;
        t.util.request({
            url: "entry/wxapp/getRedPacketWall",
            success: function(t) {
                if ("" != t.data.data.list) {
                    var a = t.data.data.list, e = 0, u = [];
                    for (var o in a) 0 == a[o].status && (u[e++] = a[o]);
                    u = u.map(function(t) {
                        return t.id;
                    }), console.log(u), s.setData({
                        all_money: t.data.data.all_money,
                        num: t.data.data.num,
                        list: t.data.data.list,
                        last_id: u
                    });
                }
                s.setData({
                    isLogin: !0
                });
            }
        });
    },
    onLoad: function(s) {
        this.setData({
            navH: t.globalData.navHeight
        }), t.globalData.userInfo && this.setData({
            uInfo: t.globalData.userInfo
        }), this.setData({
            rules_redpacked_game: t.globalData.setting.rules_redpacked_game
        }), console.log(this.data.rules_redpacked_game), this.getRedPacketWall();
    },
    loginAfter: function(s) {
        t.loginAfter(s);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    navBack: function() {
        wx.navigateBack();
    },
    toIndex: function() {
        wx.switchTab({
            url: "../index/index"
        });
    },
    onShowRegulation: function() {
        this.setData({
            showRule: !0
        });
    },
    chooseRuleShade: function() {
        this.setData({
            showRule: !1
        });
    },
    onShowEnvelopeShade: function(s) {
        var a = this;
        if (t.globalData.userInfo) {
            if (a.setData({
                showEnvelope: !0,
                redp_id: s.currentTarget.dataset.redp_id
            }), "share" == s.currentTarget.dataset.rig_share) {
                var e = a.data.last_id[Math.floor(Math.random() * a.data.last_id.length)];
                a.setData({
                    redp_id: e
                });
            }
            console.log(a.data.redp_id);
        } else t.checkLogin();
    },
    chooseEnvelopeShade: function() {
        this.setData({
            showEnvelope: !1
        });
    },
    onShowShareShade: function() {
        var s = this;
        s.setData({
            showEnvelope: !1,
            showShareShade: !0
        }), t.globalData.userInfo ? t.util.request({
            url: "entry/wxapp/getRedPwPoster",
            success: function(t) {
                var a = t.data.data;
                s.setData({
                    poster: a
                });
            }
        }) : t.checkLogin(), s.setData({
            showEnvelope: !1,
            showShareShade: !0
        });
    },
    chooseShareShade: function() {
        this.setData({
            showShareShade: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(s) {
        this.chooseEnvelopeShade();
        var a = t.globalData.setting.share_RedPw_title ? t.globalData.setting.share_RedPw_title : "送你一个红包,速领!", e = "/first_duoduoke/pages/red-envelope/draw?id=" + this.data.redp_id, u = t.globalData.setting.share_RedPw_pic ? t.globalData.setting.share_RedPw_pic : s.target.dataset.src;
        return console.log(e), {
            title: a,
            path: e + (void 0 !== t.globalData.userInfo.uid ? "&from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : ""),
            imageUrl: u,
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