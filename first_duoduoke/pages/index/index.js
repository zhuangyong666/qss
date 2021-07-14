function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp();

Page((a = {
    data: {
        navH: 0,
        items: [ {
            pic: "/first_duoduoke/public/images/item2.jpg",
            value: "../welfare/welfare",
            type: 6,
            bgcolor: ""
        }, {
            pic: "/first_duoduoke/public/images/item1.jpg",
            value: "../invite/invite",
            type: 6,
            bgcolor: ""
        }, {
            pic: "/first_duoduoke/public/images/item3.jpg",
            value: "../coupon/coupon",
            type: 6,
            bgcolor: ""
        } ],
        swipers: [ {
            pic: "/first_duoduoke/public/images/item2.jpg",
            value: "../welfare/welfare",
            type: 6,
            bgcolor: ""
        }, {
            pic: "/first_duoduoke/public/images/item1.jpg",
            value: "../invite/invite",
            type: 6,
            bgcolor: ""
        }, {
            pic: "/first_duoduoke/public/images/item3.jpg",
            value: "../coupon/coupon",
            type: 6,
            bgcolor: ""
        } ],
        scrollLeft: 0,
        scrollTop: 0,
        currentStyle: 0,
        goodsList: !1,
        type: 1,
        sort: 0,
        page: 1,
        lastPage: !1,
        loading: !1,
        showDel: !1,
        keyword: "",
        rpReward: !1,
        showVip: !1,
        animationData: "",
        showShareStatus: !1,
        beginAnimation: !1,
        poster: "",
        showShareImg: !1,
        menuFixed: !1,
        enve: !1,
        animationDataT: "",
        avatar: "",
        rpFun: !1,
        plusH: 44,
        cates: [ {
            opt_name: "精选",
            show_name: "精选",
            opt_id: 0,
            children: ""
        } ],
        opt_id: 0,
        tb_cates: !1,
        tb_cid: 0,
        kl_cates: !1,
        kl_cid: 0,
        sp_cates: !1,
        sp_cid: 0,
        jd_cates: !1,
        jd_cid: 0,
        mg_cates: !1,
        mg_cid: 0,
        vip_cates: !1,
        vip_cid: 0,
        sn_cates: !1,
        sn_cid: 0,
        skip_id: 1,
        hot_page: 2,
        hot_loading: !1,
        hotGoodsList: !1,
        hotLeft: 0,
        index_list_layout: 0,
        childH: 0,
        jd_open: 0,
        mg_open: 0,
        vip_open: 0,
        sn_open: 0,
        tb_open: 0,
        kl_open: 0,
        sp_open: 0,
        v_scrollTop: 0,
        c_scrollTop: 0,
        rpw_num: -1,
        appletKeyword: "",
        buyOr: !1,
        buyOr_idx: !1,
        tipOr: !1,
        tipOrInterval: !1,
        sysNum: 0,
        icon_jump: !1,
        showtipOr: !1,
        showIndSwi: !1,
        videoAd: !1,
        is_look_video: !0,
        scrollLeft_d: 0,
        top_bg_color: !1,
        swiper_auto_play: !0,
        showSwitchSource: !1,
        showTbCopy: !1,
        isTbCopy: !1,
        initDone: !1,
        show_open_adv: !1
    },
    hideLeftAdv: function() {
        this.setData({
            leftAdv: !1
        });
    },
    getRankingList: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../ranking-list/ranking-list"
        });
    },
    getSysNoticeNum: function() {
        var t = this;
        e.util.request({
            url: "entry/wxapp/sysNoticeNum",
            showLoading: !1,
            success: function(a) {
                t.setData({
                    sysNum: a.data.data
                });
            }
        });
    },
    toRedEnvelope: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../red-envelope/red-envelope"
        });
    },
    toRotaryDraw: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../turntable/turntable"
        });
    },
    toAnswerWinning: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../answer/answer"
        });
    },
    toSpeedLooting: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../treasure/treasure"
        });
    },
    toRushBuy: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../rush-buy/rush-buy"
        });
    },
    toFreeRed: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../exemption/exemption"
        });
    },
    toShopRed: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../shopping-red-envelopes/shopping-red-envelopes"
        });
    },
    toBargain: function(t) {
        void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
        wx.navigateTo({
            url: "../bargain/bargain"
        });
    },
    onSkipChange: function(t) {
        var a = this;
        console.log(t);
        var e = t.currentTarget.dataset.skip_id, o = t.currentTarget.dataset.idx, s = 0;
        if (s = o <= 3 ? 0 : 45 * o, e != a.data.skip_id) switch (a.setData({
            skip_id: e,
            menuFixed: !1,
            showTelescopic: !1,
            c_scrollTop: this.data.sourceTop - this.data.navH - this.data.plusH + 50,
            scrollLeft_d: s
        }), wx.pageScrollTo({
            scrollTop: this.data.sourceTop - this.data.navH - this.data.plusH,
            duration: 0
        }), a.data.lastPage = !1, a.data.page = 1, a.setData({
            type: 1,
            sort: 0,
            scrollLeft: 0
        }), 1 != e && a.data.children && (a.setData({
            children: ""
        }), this.data.childH = 0), parseInt(e)) {
          case 1:
            a.setData({
                opt_id: 0
            }), a.getGoodsList();
            break;

          case 2:
            a.setData({
                jd_cid: 0
            }), a.getJdGoods();
            break;

          case 3:
            a.setData({
                mg_cid: 0
            }), a.getMgGoods();
            break;

          case 4:
            a.setData({
                vip_cid: 0
            }), a.getVipGoods();
            break;

          case 5:
            a.setData({
                sn_cid: 0
            }), a.getSnGoods();
            break;

          case 6:
            a.setData({
                tb_cid: 0
            }), a.getTbGoods();
            break;

          case 7:
            a.setData({
                kl_cid: 0
            }), a.getKlGoods();
            break;

          case 9:
            a.setData({
                sp_cid: 0
            }), a.getSpGoods();
        }
    },
    videoErrorCallback: function(t) {
        console.log(t);
    },
    toHotMore: function() {
        wx.navigateTo({
            url: "../region/region"
        });
    },
    toSaveMoney: function() {
        wx.navigateTo({
            url: "../morning/morning"
        });
    }
}, t(a, "toRedEnvelope", function() {
    wx.navigateTo({
        url: "../red-envelope/red-envelope"
    });
}), t(a, "toEveryDay", function() {
    wx.navigateTo({
        url: "../every-day/every-day"
    });
}), t(a, "getHotGoods", function() {
    var t = this;
    t.data.hot_loading || (t.data.hot_loading = !0, e.util.request({
        url: "entry/wxapp/getRcommendGoods",
        showLoading: !1,
        data: {
            page: t.data.hot_page,
            channel_type: 1
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 || (t.data.hotGoodsList = 1 == t.data.hot_page ? a.data.data : t.data.hotGoodsList.concat(a.data.data), 
            t.setData({
                hotGoodsList: t.data.hotGoodsList
            }, function() {
                1 == t.data.hot_page && t.getMenuTop(), t.data.hot_page++;
            }));
        },
        complete: function() {
            t.data.hot_loading = !1;
        }
    }));
}), t(a, "makeIconWork", function(t) {
    var a = this;
    console.log(t);
    var e = t.currentTarget.dataset;
    if (e.type) switch (parseInt(e.type)) {
      case 1:
        a.toOtherPage(e.value);
        break;

      case 2:
        a.toWebView(e.value);
        break;

      case 3:
        a.toNavigateMiniPro(e.value, e.appid);
    }
}), t(a, "makeLinkWork", function(t) {
    var a = this, e = t.currentTarget.dataset;
    if (e.type) switch (parseInt(e.type)) {
      case 6:
        a.toOtherPage(e.value);
        break;

      case 1:
        a.toWebView(e.value);
        break;

      case 2:
        console.log(e), a.toNavigateMiniPro(e.value, e.appid);
        break;

      case 3:
        a.toPhoneCall(e.value);
        break;

      case 4:
        a.toGoodsLink(e.value);
        break;

      case 5:
        a.toViewVideo(e.value);
        break;

      case 7:
        a.showQrcodePic(e.value);
        break;

      case 8:
        a.toActivity(e.value, e.title, e.pic, e.bgcolor, e.info);
        break;

      case 9:
        a.showTbCopy(e.value);
    }
}), t(a, "copyTbKouling", function() {
    if (this.data.showTbCopy) {
        var t = this;
        wx.setClipboardData({
            data: this.data.showTbCopy,
            success: function(a) {
                t.setData({
                    isTbCopy: !0
                }), e.globalData.showSmart = !1, wx.hideToast();
            }
        });
    }
}), t(a, "hideTbCopy", function() {
    this.setData({
        showTbCopy: !1,
        swiper_auto_play: !0
    });
}), t(a, "showTbCopy", function(t) {
    this.setData({
        showTbCopy: t,
        isTbCopy: !1,
        swiper_auto_play: !1
    });
}), t(a, "toGoodsLink", function(t) {
    var t = JSON.parse(t);
    if (console.log(t), t) {
        var a = "&source=" + t.goods_source;
        void 0 !== t.goods_url && (a += "&goods_url=" + t.goods_url), wx.navigateTo({
            url: "../goods/goods?goods_id=" + t.goods_id + a
        });
    }
}), t(a, "toActivity", function(t, a, e, o, s) {
    t && wx.navigateTo({
        url: "./activity?title=" + a + "&tags=" + t + "&bgcolor=" + o + "&top_img=" + encodeURIComponent(e) + "&link=" + encodeURIComponent(s)
    });
}), t(a, "showQrcodePic", function(t) {
    wx.previewImage({
        current: t,
        urls: [ t ]
    });
}), t(a, "toPhoneCall", function(t) {
    wx.makePhoneCall({
        phoneNumber: t
    });
}), t(a, "toNavigateMiniPro", function(t, a) {
    wx.navigateToMiniProgram({
        appId: a,
        path: t,
        envVersion: "release",
        success: function(t) {
            console.log("打开小程序成功");
        }
    });
}), t(a, "toViewVideo", function(t) {
    wx.navigateTo({
        url: "./view-video?url=" + encodeURIComponent(t)
    });
}), t(a, "toOtherPage", function(t) {
    if (/hot\/hot/.test(t)) {
        var a = /\?tab_id=(\d)/, o = t.match(a);
        e.globalData.hotTab = o[1], t = t.replace(a, ""), wx.switchTab({
            url: t
        });
    } else /task\/task/.test(t) || /find\/find/.test(t) ? wx.switchTab({
        url: t
    }) : wx.navigateTo({
        url: t
    });
}), t(a, "toWebView", function(t) {
    wx.navigateTo({
        url: "./web-view?url=" + encodeURIComponent(t)
    });
}), t(a, "toLottery", function() {
    wx.navigateTo({
        url: "../lottery/lottery"
    });
}), t(a, "toWelfare", function() {
    this.data.is_look_video && this.data.videoAd ? this.data.videoAd.show() : (wx.navigateTo({
        url: "../welfare/welfare"
    }), this.hidenEnve());
}), t(a, "initVideoAd", function() {
    var t = this;
    !1 === t.data.videoAd && wx.createRewardedVideoAd && e.globalData.setting.video_ad_code && (t.setData({
        show_ad_t: !0
    }), t.data.videoAd = wx.createRewardedVideoAd({
        adUnitId: "adunit-" + e.globalData.setting.video_ad_code
    }), t.data.videoAd.onLoad(function() {
        console.log("Video_AD Load OK...");
    }), t.data.videoAd.onClose(function(a) {
        console.log("Video_AD Close OK ..."), console.log(a), a && a.isEnded || void 0 === a ? (console.log("watch OK ..."), 
        t.setData({
            is_look_video: !1
        })) : (console.log("noWatch OK ..."), wx.showModal({
            title: "提示",
            content: "看完视频才能開红包哦~~~",
            showCancel: !0,
            confirmColor: "#f43f6c",
            confirmText: "继续观看",
            cancelColor: "#bbb",
            success: function(a) {
                a.confirm && t.data.videoAd && t.data.videoAd.show();
            },
            fail: function(t) {
                console.log(t, "showModalErr");
            }
        }));
    }), t.data.videoAd.onError(function(t) {
        console.log(t, "VieoERR....");
    }));
}), t(a, "toAllClassify", function() {
    wx.navigateTo({
        url: "../allclassify/allclassify"
    });
}), t(a, "goLookCoupon", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
    wx.navigateTo({
        url: "../coupon/coupon"
    });
}), t(a, "goLookCash", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
    wx.navigateTo({
        url: "../cash/cash"
    });
}), t(a, "goLookInvite", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
    wx.navigateTo({
        url: "../invite/invite"
    });
}), t(a, "goLookGuest", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
    wx.navigateTo({
        url: "../guest/guest"
    });
}), t(a, "showEnve", function(t) {
    if (1 == e.globalData.setting.show_enve && (void 0 === this.data.smartSou || !this.data.smartSou.show && !this.data.smartSou.showg) && !this.data.show_open_adv) {
        void 0 !== t && void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId));
        var a = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            delay: 0
        });
        this.animation = a, a.translateY(-300).step(), this.setData({
            animationDataT: a.export(),
            enve: !0
        }), setTimeout(function() {
            a.translateY(0).step(), this.setData({
                animationDataT: a.export()
            });
        }.bind(this), 1);
    }
}), t(a, "hidenEnve", function() {
    var t = wx.createAnimation({
        duration: 500,
        timingFunction: "ease",
        delay: 0
    });
    this.animation = t, t.translateY(-300).step(), this.setData({
        animationDataT: t.export()
    }), setTimeout(function() {
        t.translateY(0).step(), this.setData({
            animationDataT: t.export(),
            enve: !1
        });
    }.bind(this), 200);
}), t(a, "getMenuTop", function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "all", a = this, e = wx.createSelectorQuery();
    e.select("#affix").boundingClientRect(), e.select("#childCates").boundingClientRect(), 
    e.select("#source").boundingClientRect(), e.exec(function(e) {
        console.log(e, "top"), "all" == t ? (a.data.menuTop = e[0].top, a.data.childTop = e[1].top, 
        a.data.sourceTop = e[2].top) : "child" == t && (a.data.childH = e[1].height, a.data.menuFixed && a.setData({
            menuFixed: !1
        }));
    });
}), t(a, "onPageScroll", function(t) {
    var a = this;
    this.data.scrollTop = t.scrollTop, t.scrollTop > 274 && a.data.swiper_auto_play && a.setData({
        swiper_auto_play: !1,
        top_bg_color: !1
    }), t.scrollTop < 274 && !a.data.swiper_auto_play && a.setData({
        swiper_auto_play: !0,
        top_bg_color: !!this.data.swipers[this.data.currentStyle].bgcolor && this.data.swipers[this.data.currentStyle].bgcolor
    }), t.scrollTop >= a.data.menuTop + a.data.childH - a.data.navH - a.data.plusH ? (a.data.showSwitchSource || a.setData({
        showSwitchSource: !0,
        showTelescopic: !1
    }), a.data.showTelescopic && a.setData({
        showTelescopic: !1
    })) : a.data.showSwitchSource && a.setData({
        showSwitchSource: !1
    }), 5 != a.data.skip_id && 4 != a.data.skip_id && (t.scrollTop >= a.data.menuTop + a.data.childH - a.data.navH - a.data.plusH ? a.data.menuFixed || a.setData({
        menuFixed: !0
    }) : a.data.menuFixed && a.setData({
        menuFixed: !1
    }));
}), t(a, "saveUserPoster", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getUserPoster",
        success: function(a) {
            var e = a.data.data;
            console.log(e), t.setData({
                poster: e,
                showShareImg: !0
            }), wx.getImageInfo({
                src: e,
                success: function(t) {
                    wx.saveImageToPhotosAlbum({
                        filePath: t.path,
                        success: function(t) {
                            wx.showToast({
                                title: "保存至相册成功",
                                icon: "success"
                            });
                        },
                        fail: function(t) {
                            console.log(t);
                        }
                    });
                }
            });
        }
    });
}), t(a, "hideShareImg", function() {
    this.hideShare(), this.setData({
        showShareImg: !1
    });
}), t(a, "goVip", function() {
    wx.navigateTo({
        url: "../guest/guest"
    });
}), t(a, "loginAfter", function(t) {
    e.loginAfter(t);
}), t(a, "loginCancel", function() {
    e.loginCancel();
}), t(a, "startSetInter", function() {
    var t = this;
    t.setData({
        beginAnimation: !0
    }), setTimeout(function() {
        t.endSetInter();
    }, 3e3);
}), t(a, "endSetInter", function() {
    var t = this;
    t.setData({
        beginAnimation: !1
    }), t.startSetInter();
}), t(a, "hideVip", function() {
    this.setData({
        showVip: !1
    }), this.hideShare();
}), t(a, "showShare", function() {
    if (e.globalData.userInfo) {
        var t = wx.createAnimation({
            duration: 500,
            timingFunction: "ease",
            delay: 0
        });
        this.animation = t, t.translateY(300).step(), this.setData({
            animationData: t.export(),
            showShareStatus: !0
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationData: t.export()
            });
        }.bind(this), 1);
    } else e.checkLogin();
}), t(a, "hideShare", function() {
    var t = wx.createAnimation({
        duration: 500,
        timingFunction: "ease",
        delay: 0
    });
    this.animation = t, t.translateY(300).step(), this.setData({
        animationData: t.export()
    }), setTimeout(function() {
        t.translateY(0).step(), this.setData({
            animationData: t.export(),
            showShareStatus: !1
        });
    }.bind(this), 200);
}), t(a, "lookRpReward", function(t) {
    this.setData({
        uVip: parseInt(e.globalData.userInfo.level),
        rpReward: !0
    });
}), t(a, "hideRpReward", function(t) {
    this.setData({
        rpReward: !1
    });
}), t(a, "setSearchKey", function(t) {
    this.data.keyword = t.detail.value, this.data.keyword && !this.data.showDel && this.setData({
        showDel: !0
    });
}), t(a, "delKey", function() {
    this.setData({
        keyword: "",
        showDel: !1
    });
}), t(a, "goSearch", function(t) {
    wx.navigateTo({
        url: "../search/search"
    });
}), t(a, "confirmSearchKey", function(t) {
    if (this.data.keyword = t.detail.value, this.data.keyword) {
        var a = this;
        wx.navigateTo({
            url: "../search/search?keyword=" + this.data.keyword,
            success: function() {
                a.setData({
                    keyword: "",
                    showDel: !1
                });
            }
        });
    }
}), t(a, "toRegion", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId)), 
    wx.navigateTo({
        url: "../region/region?type=" + t.currentTarget.dataset.type
    });
}), t(a, "switchStyle", function(t) {
    "touch" == t.detail.source && this.setData({
        currentStyle: t.detail.current
    }), "autoplay" == t.detail.source && this.setData({
        currentStyle: t.detail.current
    });
    var a = t.detail.current;
    this.data.swipers[a].bgcolor ? this.setData({
        top_bg_color: this.data.swipers[a].bgcolor
    }) : this.setData({
        top_bg_color: !1
    });
}), t(a, "thisNav", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getBottomNav",
        success: function(a) {
            console.log("123456", a.data.data);
            var e = a.data.data;
            void 0 !== e.list.length && e.list.length < 1 ? wx.setTabBarStyle({
                color: e.color,
                selectedColor: e.selectedColor,
                backgroundColor: e.backgroundColor,
                borderStyle: 2 == e.borderStyle ? "black" : "white",
                fail: function(t) {
                    console.log(t);
                }
            }) : (wx.hideTabBar(), t.setData({
                tabBar: a.data.data,
                "tabBar.thisurl": t.__route__,
                showtipOr: !0
            }));
        }
    });
}), t(a, "onLoad", function(t) {
    this.thisNav(), this.setData({
        navH: e.globalData.navHeight
    }), this.startSetInter(), this.freshIndex(), e.reMgToken();
}), t(a, "hideOpenAdv", function() {
    this.setData({
        show_open_adv: !1
    });
}), t(a, "isShowVip", function() {
    if (e.globalData.userInfo) if (e.globalData.userInfo.level < 1 && !e.globalData.showVip) {
        if (void 0 !== this.data.smartSou && (this.data.smartSou.show || this.data.smartSou.showg)) return;
        if (this.data.show_open_adv) return;
        this.setData({
            showVip: !0
        }), e.globalData.showVip = !0;
    } else this.setData({
        showVip: !1
    });
}), t(a, "isShowRed", function() {
    if (!this.data.enve) if (e.globalData.userInfo) if (e.globalData.userInfo.isReceiveNew < 1) {
        if (this.setData({
            rpFun: !0
        }), !e.globalData.showRed) {
            this.setData({
                avatar: e.globalData.userInfo.avatar,
                showVip: !1
            });
            t = this;
            setTimeout(function() {
                t.showEnve();
            }, 1e3), e.globalData.showRed = !0, e.globalData.showVip = !1;
        }
    } else this.setData({
        rpFun: !1
    }), this.hidenEnve(); else if (e.globalData.showRed) this.setData({
        rpFun: !1
    }), this.hidenEnve(); else {
        this.setData({
            avatar: e.globalData.setting.logo,
            rpFun: !0
        });
        var t = this;
        setTimeout(function() {
            t.showEnve();
        }, 1e3);
    }
}), t(a, "onShow", function() {
    !1 === this.data.items && (this.setData({
        items: this.data.swipers,
        currentStyle: this.data.currentStyle
    }), this.data.scrollTop > 274 ? this.setData({
        top_bg_color: !1
    }) : this.setData({
        top_bg_color: !!this.data.swipers[this.data.currentStyle].bgcolor && this.data.swipers[this.data.currentStyle].bgcolor
    })), e.reUserInfo(), e.showSmart(this, e);
}), t(a, "onHide", function() {
    this.setData({
        items: !1,
        top_bg_color: !1
    });
}), t(a, "confirmSmart", function(t) {
    var a = t.currentTarget.dataset.source;
    e.confirmSmart(this, a);
}), t(a, "hideSmart", function() {
    e.hideSmart(this);
}), t(a, "oneKeyZL", function(t) {
    this.hideSmart();
    var a = t.currentTarget.dataset.content;
    e.oneKeyZl(a);
}), t(a, "getOtherCates", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/indexOtherCates",
        success: function(a) {
            var e = a.data.data;
            1 == t.data.tb_open && t.setData({
                tb_cates: e.tb_cates
            }), 1 == t.data.jd_open && t.setData({
                jd_cates: e.jd_cates
            }), 1 == t.data.mg_open && t.setData({
                mg_cates: e.mg_cates
            }), 1 == t.data.vip_open && t.setData({
                vip_cates: e.vip_cates
            }), 1 == t.data.sn_open && t.setData({
                sn_cates: e.sn_cates
            }), 1 == t.data.kl_open && t.setData({
                kl_cates: e.kl_cates
            }), 1 == t.data.sp_open && t.setData({
                sp_cates: e.sp_cates
            });
        }
    });
}), t(a, "getBuyOr", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/GetOrderBuy",
        success: function(a) {
            var e = a.data.data;
            t.data.buyOr = e.length > 0 && e, t.data.buyOr && (t.data.buyOr_idx = 0, setTimeout(function() {
                console.log(t.data.tipOrInterval, "tipOrInterval....."), clearInterval(t.data.tipOrInterval), 
                t.data.tipOrInterval = setInterval(function() {
                    t.data.buyOr_idx > t.data.buyOr.length - 1 && (t.data.buyOr_idx = 0), t.setData({
                        tipOr: t.data.buyOr[t.data.buyOr_idx]
                    }), t.data.buyOr_idx++, setTimeout(function() {
                        t.setData({
                            tipOr: !1
                        });
                    }, 5e3);
                }, 1e4);
            }, 5e3));
        }
    });
}), t(a, "freshIndex", function(t) {
    var a = this;
    a.setData({
        page: 1,
        hot_page: 1,
        skip_id: 1,
        opt_id: 0,
        scrollLeft: 0,
        sort: 0,
        type: 1,
        children: "",
        childH: 0,
        scrollLeft_d: 0
    }), e.util.request({
        url: "entry/wxapp/initIndex",
        success: function(o) {
            "function" == typeof t && t(), console.log(o);
            var s = o.data.data;
            s.open_adv.length > 0 && !e.globalData.show_open_adv && (a.setData({
                show_open_adv: !0,
                open_adv: s.open_adv
            }), e.globalData.show_open_adv = !0), a.getSysNoticeNum(), a.getBuyOr(), a.getHotGoods(), 
            e.globalData.setting = s.setting, console.log(e.globalData.setting), a.setData({
                icon_jump: s.iconJump,
                offnotice: s.off_notice,
                shop_red_sum: s.shop_red_sum,
                rpw_num: s.rpw_num,
                app_name: s.setting.name,
                index_list_layout: s.setting.index_list_layout,
                tb_open: s.setting.tb_open,
                kl_open: s.setting.kl_open,
                sp_open: s.setting.sp_open,
                jd_open: s.setting.jd_open,
                mg_open: s.setting.mg_open,
                vip_open: s.setting.vip_open,
                sn_open: s.setting.sn_open,
                new_guy_bouns: s.setting.new_guy_bouns,
                taskRedpkt: s.taskRedpkt,
                appletKeyword: s.setting.appletKeyword,
                redPw_switch: s.setting.redPw_switch,
                rotary_switch: s.setting.rotary_switch,
                speedLooting_switch: s.setting.speedLooting_switch,
                ranking_list_switch: s.setting.ranking_list_switch,
                search_portal_switch: s.setting.search_portal_switch,
                rushBuy_switch: s.setting.rushBuy_switch,
                rushBuy_model_switch: s.setting.rushBuy_model_switch,
                question_switch: s.setting.question_switch,
                bargain_switch: s.setting.bargain_switch,
                freered_switch: s.setting.freered_switch,
                notice_show_switch: s.setting.notice_show_switch,
                shopred_switch: s.setting.shopred_switch,
                everyday_switch: s.setting.everyday_switch,
                morning_switch: s.setting.morning_switch,
                withdraw_open: s.setting.withdraw_open,
                show_enve: s.setting.show_enve,
                leftAdv: s.left_adv,
                initDone: !0
            }, function() {
                "ios" == e.platform && 1 == a.data.rushBuy_model_switch && a.setData({
                    rushBuy_switch: 0
                }), a.setData({
                    hotLeft: 0,
                    showIndSwi: !0
                }), "function" != typeof t && a.getMenuTop(), a.getOtherCates(), a.getGoodsList();
            }), s.swipers.length > 0 && a.setData({
                items: s.swipers,
                top_bg_color: !!s.swipers[a.data.currentStyle].bgcolor && s.swipers[a.data.currentStyle].bgcolor
            }, function() {
                a.data.swipers = s.swipers, "function" != typeof t && a.getMenuTop();
            }), s.cates.length > 0 && (a.data.cates = 1 == a.data.cates.length ? a.data.cates.concat(s.cates) : a.data.cates, 
            a.setData({
                cates: a.data.cates
            }, function() {
                "function" != typeof t && a.getMenuTop();
            })), 0 == a.data.jd_open && 0 == a.data.mg_open && 0 == a.data.vip_open && 0 == a.data.sn_open && 0 == a.data.tb_open && 0 == a.data.kl_open && 0 == a.data.sp_open ? a.setData({
                source_open: !1
            }) : a.setData({
                source_open: !0
            }, function() {
                "function" != typeof t && a.getMenuTop();
            }), "function" != typeof t && e.globalData.setting && (a.isShowVip(), a.isShowRed(), 
            e.showSmart(a, e)), e.globalData.setting.video_ad_code && "devtools" != e.platform && a.initVideoAd();
        }
    });
}), t(a, "toCatePage", function(t) {
    var a = t.currentTarget.dataset.opt_id, e = t.currentTarget.dataset.opt_name;
    wx.navigateTo({
        url: "../allclassify/cate?opt_id=" + a + "&opt_name=" + e
    });
}), t(a, "switchTbCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.tb_cid;
    t.currentTarget.dataset.tb_idx;
    this.setData({
        tb_cid: e,
        scrollLeft: 50 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getTbGoods();
}), t(a, "switchKlCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.kl_cid;
    t.currentTarget.dataset.kl_idx;
    this.setData({
        kl_cid: e,
        scrollLeft: 50 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getKlGoods();
}), t(a, "switchSpCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.sp_cid;
    t.currentTarget.dataset.sp_idx;
    this.setData({
        sp_cid: e,
        scrollLeft: 50 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getSpGoods();
}), t(a, "switchJdCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.jd_cid;
    t.currentTarget.dataset.jd_idx;
    this.setData({
        jd_cid: e,
        scrollLeft: 50 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getJdGoods();
}), t(a, "switchVipCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.vip_cid;
    t.currentTarget.dataset.vip_idx;
    this.setData({
        vip_cid: e,
        scrollLeft: 70 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getVipGoods();
}), t(a, "switchSnCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.sn_cid;
    t.currentTarget.dataset.sn_idx;
    this.setData({
        sn_cid: e,
        scrollLeft: 70 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getSnGoods();
}), t(a, "switchMgCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.mg_cid;
    t.currentTarget.dataset.mg_idx;
    this.setData({
        mg_cid: e,
        scrollLeft: 70 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    }), this.getMgGoods();
}), t(a, "switchCates", function(t) {
    var a = t.currentTarget.dataset.current, e = t.currentTarget.dataset.opt_id, o = t.currentTarget.dataset.opt_idx, s = this.data.cates[o].children;
    if (s) {
        for (var i = [], d = 0, n = s.length; d < n; d += 10) i.push(s.slice(d, d + 10));
        this.setData({
            childSL: 0,
            children: i
        }), wx.pageScrollTo({
            scrollTop: this.data.childTop - this.data.navH - this.data.plusH,
            duration: 0
        }), this.data.childH || this.getMenuTop("child");
    } else this.setData({
        children: ""
    }), this.data.childH = 0, wx.pageScrollTo({
        scrollTop: this.data.menuTop - this.data.navH - this.data.plusH,
        duration: 0
    });
    this.setData({
        opt_id: e,
        scrollLeft: 50 * a
    }), this.data.page = 1, this.data.lastPage = !1, this.data.loading = !0, this.setData({
        type: 1,
        sort: 0
    }), this.getGoodsList();
}), t(a, "sortGoods", function(t) {
    void 0 !== t.detail.formId && (console.log(t.detail.formId), e.formIds.push(t.detail.formId));
    var a = t.currentTarget.dataset.type;
    if ((1 != this.data.type || 1 != a) && !(3 == this.data.skip_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 6 == this.data.skip_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 6 == this.data.skip_id && 4 == a && 4 == this.data.type && 1 == this.data.sort || 7 == this.data.skip_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 7 == this.data.skip_id && 4 == a && 4 == this.data.type && 1 == this.data.sort || 9 == this.data.skip_id && 3 == a && 3 == this.data.type && 1 == this.data.sort)) {
        var o = this.data.type == a ? this.data.sort ? 0 : 1 : 3 == a && this.data.type != a ? 0 : 1;
        this.setData({
            sort: o,
            type: a
        }), this.data.page = 1, this.data.lastPage = !1;
        var s = this;
        switch (s.data.loading = !0, s.data.children ? wx.pageScrollTo({
            scrollTop: s.data.childTop - s.data.navH - s.data.plusH,
            duration: 0
        }) : wx.pageScrollTo({
            scrollTop: s.data.menuTop - s.data.navH - s.data.plusH,
            duration: 0
        }), parseInt(s.data.skip_id)) {
          case 1:
            s.getGoodsList();
            break;

          case 2:
            s.getJdGoods();
            break;

          case 3:
            s.getMgGoods();
            break;

          case 6:
            s.getTbGoods();
            break;

          case 7:
            s.getKlGoods();
            break;

          case 9:
            s.getSpGoods();
        }
    }
}), t(a, "toGoodsPage", function(t) {
    console.log(t);
    var a = t.currentTarget.dataset.goods_id;
    if (void 0 === t.currentTarget.dataset.source) {
        e = "&source=" + this.data.skip_id;
        3 != this.data.skip_id && 5 != this.data.skip_id || void 0 !== t.currentTarget.dataset.goods_url && (e += "&goods_url=" + t.currentTarget.dataset.goods_url), 
        void 0 !== t.currentTarget.dataset.goods_sign && (e += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a + e
        });
    } else {
        var e = "&source=" + t.currentTarget.dataset.source;
        void 0 !== t.currentTarget.dataset.goods_url && (e += "&goods_url=" + t.currentTarget.dataset.goods_url), 
        void 0 !== t.currentTarget.dataset.goods_sign && (e += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a + e
        }), this.hideSmart();
    }
}), t(a, "onPullDownRefresh", function() {
    this.data.initDone ? (this.data.page = 1, this.data.lastPage = !1, this.data.hot_page = 2, 
    this.data.hot_loading = !1, this.freshIndex(function() {
        wx.stopPullDownRefresh();
    })) : wx.stopPullDownRefresh();
}), t(a, "onReachBottom", function() {
    var t = this;
    if (t.data.initDone && !0 !== t.data.lastPage && !0 !== t.data.loading) switch (t.data.page++, 
    t.data.loading = !0, parseInt(t.data.skip_id)) {
      case 1:
        t.getGoodsList();
        break;

      case 2:
        t.getJdGoods();
        break;

      case 3:
        t.getMgGoods();
        break;

      case 4:
        t.getVipGoods();
        break;

      case 5:
        t.getSnGoods();
        break;

      case 6:
        t.getTbGoods();
        break;

      case 7:
        t.getKlGoods();
        break;

      case 9:
        t.getSpGoods();
    }
}), t(a, "getGoodsList", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getGoodsList",
        data: {
            page: t.data.page,
            type: t.data.type,
            sort: t.data.sort,
            opt_id: t.data.opt_id
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.goodsList = 1 == t.data.page ? a.data.data : t.data.goodsList.concat(a.data.data), 
            t.setData({
                goodsList: t.data.goodsList
            }), t.data.loading = !1);
        }
    });
}), t(a, "getTbGoods", function(t) {
    var a = this;
    e.util.request({
        url: "entry/wxapp/getTbGoods",
        data: {
            page: a.data.page,
            type: a.data.type,
            sort: a.data.sort,
            tb_cid: a.data.tb_cid
        },
        success: function(e) {
            "function" == typeof t && t(), console.log(e), e.data.data.length < 1 ? a.data.lastPage = !0 : (a.data.goodsList = 1 == a.data.page ? e.data.data : a.data.goodsList.concat(e.data.data), 
            a.setData({
                goodsList: a.data.goodsList
            }), a.data.loading = !1);
        }
    });
}), t(a, "getKlGoods", function(t) {
    var a = this;
    e.util.request({
        url: "entry/wxapp/getKlGoods",
        data: {
            page: a.data.page,
            type: a.data.type,
            sort: a.data.sort,
            kl_cid: a.data.kl_cid
        },
        success: function(e) {
            "function" == typeof t && t(), console.log(e), e.data.data.length < 1 ? a.data.lastPage = !0 : (a.data.goodsList = 1 == a.data.page ? e.data.data : a.data.goodsList.concat(e.data.data), 
            a.setData({
                goodsList: a.data.goodsList
            }), a.data.loading = !1);
        }
    });
}), t(a, "getSpGoods", function(t) {
    var a = this;
    e.util.request({
        url: "entry/wxapp/getSpGoods",
        data: {
            page: a.data.page,
            type: a.data.type,
            sort: a.data.sort,
            sp_cid: a.data.sp_cid
        },
        success: function(e) {
            "function" == typeof t && t(), console.log(e), e.data.data.length < 1 ? a.data.lastPage = !0 : (a.data.goodsList = 1 == a.data.page ? e.data.data : a.data.goodsList.concat(e.data.data), 
            a.setData({
                goodsList: a.data.goodsList
            }), a.data.loading = !1);
        }
    });
}), t(a, "getJdGoods", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getJdGoods",
        data: {
            page: t.data.page,
            type: t.data.type,
            sort: t.data.sort,
            jd_cid: t.data.jd_cid
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.goodsList = 1 == t.data.page ? a.data.data : t.data.goodsList.concat(a.data.data), 
            t.setData({
                goodsList: t.data.goodsList
            }), t.data.loading = !1);
        }
    });
}), t(a, "getVipGoods", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getVipGoods",
        data: {
            page: t.data.page,
            vip_cid: t.data.vip_cid
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.goodsList = 1 == t.data.page ? a.data.data : t.data.goodsList.concat(a.data.data), 
            t.setData({
                goodsList: t.data.goodsList
            }), t.data.loading = !1);
        }
    });
}), t(a, "getSnGoods", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getSnGoods",
        data: {
            page: t.data.page,
            sn_cid: t.data.sn_cid
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.goodsList = 1 == t.data.page ? a.data.data : t.data.goodsList.concat(a.data.data), 
            t.setData({
                goodsList: t.data.goodsList
            }), t.data.loading = !1);
        }
    });
}), t(a, "getMgGoods", function() {
    var t = this;
    e.util.request({
        url: "entry/wxapp/getMgGoods",
        data: {
            page: t.data.page,
            type: t.data.type,
            sort: t.data.sort,
            mg_cid: t.data.mg_cid
        },
        success: function(a) {
            console.log(a), a.data.data.length < 1 ? t.data.lastPage = !0 : (t.data.goodsList = 1 == t.data.page ? a.data.data : t.data.goodsList.concat(a.data.data), 
            t.setData({
                goodsList: t.data.goodsList
            }), t.data.loading = !1);
        }
    });
}), t(a, "onShareTimeline", function() {
    var t = void 0 !== e.globalData.userInfo.uid ? "from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : "";
    return {
        title: e.globalData.setting.share_title ? e.globalData.setting.share_title : "购物省钱，分享赚钱",
        imageUrl: e.globalData.setting.share_pic,
        query: t
    };
}), t(a, "onShareAppMessage", function() {
    var t = e.globalData.setting.share_title ? e.globalData.setting.share_title : "购物省钱，分享赚钱", a = e.globalData.setting.share_pic;
    return {
        title: t,
        path: "/first_duoduoke/pages/index/index" + (void 0 !== e.globalData.userInfo.uid ? "?from_uid=" + e.globalData.userInfo.uid + "&from_act=share" : ""),
        imageUrl: a,
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
}), t(a, "showTelescopic", function() {
    this.data.showTelescopic ? this.setData({
        showTelescopic: !1,
        teleUpDown: 2
    }) : this.setData({
        showTelescopic: !0,
        teleUpDown: 3
    });
}), t(a, "toNotice", function() {
    wx.navigateTo({
        url: "notice"
    });
}), t(a, "toNoticepage", function() {
    wx.navigateTo({
        url: "/first_duoduoke/pages/notice/notice"
    });
}), a));