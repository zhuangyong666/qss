var t = getApp();

Page({
    data: {
        navH: 0,
        keyword: "",
        goodsList: !1,
        type: 1,
        sort: 0,
        page: 1,
        lastPage: !1,
        loading: !1,
        showDel: !1,
        topHeight: 78,
        topLoadedHeight: 118,
        cur_id: 1,
        showGray: !1,
        showVoiceBtn: !1,
        jd_open: 0,
        mg_open: 0,
        vip_open: 0,
        sn_open: 0,
        source_open: !0,
        source_top: 0,
        recorderManager: {},
        fileManager: {},
        secretID: "",
        secretKey: "",
        sug_loading: !1,
        suggests: !1,
        scrollTop: 0,
        appletKeyword: ""
    },
    onPageScroll: function(t) {
        this.data.suggests && this.setData({
            suggests: !1
        });
    },
    toSaveMoney: function() {
        wx.navigateTo({
            url: "../save-money/save-money"
        });
    },
    toGoodsPage: function(t) {
        var a = t.currentTarget.dataset.goods_id, e = "&source=" + this.data.cur_id;
        3 != this.data.cur_id && 5 != this.data.cur_id || (e += "&goods_url=" + t.currentTarget.dataset.goods_url), 
        void 0 !== t.currentTarget.dataset.goods_sign && (e += "&goods_sign=" + t.currentTarget.dataset.goods_sign), 
        wx.navigateTo({
            url: "../goods/goods?goods_id=" + a + e
        });
    },
    onShowVoiceBtn: function() {
        this.setData({
            showVoiceBtn: !0
        });
    },
    chooseVoiceBtn: function() {
        this.setData({
            showVoiceBtn: !1
        });
    },
    loginAfter: function(a) {
        t.loginAfter(a);
    },
    loginCancel: function() {
        t.loginCancel();
    },
    onChoose: function(t) {
        var a = this, e = t.currentTarget.dataset.cur_id;
        if (e != a.data.cur_id && (a.setData({
            cur_id: e
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        }), a.data.keyword)) switch (a.data.lastPage = !1, a.data.page = 1, a.data.loading = !0, 
        a.setData({
            type: 1,
            sort: 0
        }), parseInt(e)) {
          case 1:
            a.getGoodsList();
            break;

          case 2:
            a.getJdGoods();
            break;

          case 3:
            a.getMgGoods();
            break;

          case 4:
            a.getVipGoods();
            break;

          case 5:
            a.getSnGoods();
            break;

          case 6:
            a.getTbGoods();
            break;

          case 7:
            a.getKlGoods();
            break;

          case 9:
            a.getSpGoods();
        }
    },
    toAiSearch: function(a) {
        t.globalData.userInfo ? wx.navigateTo({
            url: "../salesman/salesman"
        }) : t.checkLogin();
    },
    tapKeyword: function(t) {
        var a = t.currentTarget.dataset.key;
        this.setData({
            keyword: a,
            showDel: !0
        }), this.setHisKey(this.data.keyword), wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
        var e = this;
        if (e.data.keyword) switch (e.data.lastPage = !1, e.data.page = 1, e.data.loading = !0, 
        e.setData({
            type: 1,
            sort: 0
        }), parseInt(e.data.cur_id)) {
          case 1:
            e.getGoodsList();
            break;

          case 2:
            e.getJdGoods();
            break;

          case 3:
            e.getMgGoods();
            break;

          case 4:
            e.getVipGoods();
            break;

          case 5:
            e.getSnGoods();
            break;

          case 6:
            e.getTbGoods();
            break;

          case 7:
            e.getKlGoods();
            break;

          case 9:
            e.getSpGoods();
        }
    },
    sugSearch: function(t) {
        this.setData({
            keyword: t.currentTarget.dataset.key
        }), this.confirmSearchKey();
    },
    setSearchKey: function(t) {
        this.data.keyword = t.detail.value, this.data.keyword && !this.data.showDel && this.setData({
            showDel: !0
        }), this.data.keyword ? this.getSuggestKey() : this.setData({
            suggests: !1
        });
    },
    getSuggestKey: function() {
        if (!this.data.sug_loading) {
            this.data.sug_loading = !0;
            var t = this;
            wx.request({
                url: "https://suggest.taobao.com/sug?q=" + this.data.keyword + "&area=b2c&code=utf-8",
                success: function(a) {
                    t.data.sug_loading = !1, console.log(a), a.data.result.length > 0 ? t.setData({
                        suggests: a.data.result
                    }) : t.setData({
                        suggests: !1
                    });
                }
            });
        }
    },
    delKey: function() {
        this.setData({
            keyword: "",
            showDel: !1,
            goodsList: !1,
            topHeight: 84 - this.data.source_top,
            his_skey: wx.getStorageSync("his_skey"),
            suggests: !1
        });
    },
    confirmSearchKey: function(t) {
        if (!this.data.keyword) return wx.showToast({
            title: "请输入您要搜索的商品",
            icon: "none"
        }), !1;
        this.setHisKey(this.data.keyword), wx.pageScrollTo({
            scrollTop: 0,
            duration: 0
        });
        var a = this;
        if (a.data.keyword) switch (a.data.lastPage = !1, a.data.page = 1, a.data.loading = !0, 
        a.setData({
            type: 1,
            sort: 0,
            suggests: !1
        }), parseInt(a.data.cur_id)) {
          case 1:
            a.getGoodsList();
            break;

          case 2:
            a.getJdGoods();
            break;

          case 3:
            a.getMgGoods();
            break;

          case 4:
            a.getVipGoods();
            break;

          case 5:
            a.getSnGoods();
            break;

          case 6:
            a.getTbGoods();
            break;

          case 7:
            a.getKlGoods();
            break;

          case 9:
            a.getSpGoods();
        }
    },
    clearHistory: function() {
        console.log("here");
        var t = this;
        wx.removeStorage({
            key: "his_skey",
            success: function(a) {
                t.setData({
                    his_skey: !1
                }), console.log("已清空");
            }
        });
    },
    setHisKey: function(t) {
        var a = wx.getStorageSync("his_skey");
        if (a) {
            var e = !1;
            for (var o in a) if (a[o] == t) {
                e = o;
                break;
            }
            if (!1 === e) a.unshift(t); else {
                var s = a.splice(e, 1);
                a.unshift(s[0]);
            }
            wx.setStorageSync("his_skey", a);
        } else wx.setStorageSync("his_skey", [ t ]);
    },
    onLoad: function(a) {
        e = this;
        this.setData({
            navH: t.globalData.navHeight,
            hot_skey: t.globalData.setting.hot_skey.split("|"),
            tb_open: t.globalData.setting.tb_open,
            jd_open: t.globalData.setting.jd_open,
            mg_open: t.globalData.setting.mg_open,
            vip_open: t.globalData.setting.vip_open,
            sn_open: t.globalData.setting.sn_open,
            kl_open: t.globalData.setting.kl_open,
            sp_open: t.globalData.setting.sp_open,
            audio_search_open: t.globalData.setting.audio_search_open,
            his_skey: wx.getStorageSync("his_skey"),
            appletKeyword: t.globalData.setting.appletKeyword
        }, function() {
            if (0 == e.data.tb_open && 0 == e.data.jd_open && 0 == !e.data.mg_open && 0 == e.data.vip_open && 0 == e.data.sn_open && 0 == e.data.kl_open && 0 == e.data.sp_open) {
                var t = wx.createSelectorQuery();
                t.select("#source").boundingClientRect(), t.exec(function(t) {
                    console.log(t, "top");
                    var a = e.data.topHeight - t[0].height, o = e.data.topLoadedHeight - t[0].height;
                    e.setData({
                        source_open: !1,
                        source_top: t[0].height,
                        topHeight: a,
                        topLoadedHeight: o
                    });
                });
            }
        });
        var e = this;
        void 0 !== a.keyword && "" != a.keyword && e.setData({
            cur_id: a.source,
            keyword: a.keyword,
            showDel: !0
        }, function() {
            e.confirmSearchKey();
        }), e.initRecord();
    },
    initRecord: function() {
        this.data.secretID = t.globalData.setting.tencent_secretID, this.data.secretKey = t.globalData.setting.tencent_secretKey, 
        this.data.recorderManager = wx.getRecorderManager(), this.data.fileManager = wx.getFileSystemManager();
        var a = this;
        this.data.recorderManager.onStop(function(t) {
            a.chooseVoiceBtn(), console.log(t.tempFilePath), a.data.fileManager.readFile({
                filePath: t.tempFilePath,
                encoding: "base64",
                success: function(t) {
                    console.log(t), a.recognAudio(t.data);
                },
                fail: function(t) {
                    console.log(t, "fileRead FAILD!!!");
                },
                complete: function() {}
            });
        });
    },
    onVoiceEnd: function() {
        this.data.recorderManager.stop();
    },
    onShade: function() {
        this.data.recorderManager.start({
            duration: 1e4,
            sampleRate: 8e3,
            numberOfChannels: 1,
            encodeBitRate: 24e3,
            format: "mp3"
        });
    },
    recognAudio: function(a) {
        var e = this.data.secretKey, o = {
            Action: "SentenceRecognition",
            Version: "2019-06-14",
            ProjectId: "0",
            SubServiceType: 2,
            EngSerViceType: "8k",
            SourceType: 1,
            VoiceFormat: "mp3",
            UsrAudioKey: new Date().getTime(),
            Data: a,
            DataLen: t.util.base64Decode(a).length,
            Timestamp: parseInt(new Date().getTime() / 1e3),
            Nonce: parseInt(new Date().getTime() / 1e3),
            SecretId: this.data.secretID
        }, s = t.util.ksort(o), d = [];
        for (var i in s) s[i] = encodeURI(s[i]), d.push(i + "=" + s[i]);
        var n = "POSTasr.tencentcloudapi.com/?" + d.join("&");
        n = t.util.b64_hmac_sha1(e, n), s.Signature = n, wx.showLoading({
            title: "识别中..."
        });
        var r = this;
        wx.request({
            url: "https://asr.tencentcloudapi.com/",
            data: s,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            method: "post",
            success: function(t) {
                var a = t.data.Response;
                void 0 !== a.Error ? wx.showToast({
                    title: a.Error.Code,
                    icon: "none"
                }) : a.Result ? r.setData({
                    keyword: a.Result.replace(/[\.\,\。\，]/, ""),
                    showDel: !0
                }, function() {
                    r.confirmSearchKey();
                }) : wx.showToast({
                    title: "语音识别失败",
                    icon: "none"
                }), console.log(t.data.Response);
            },
            complete: function() {}
        });
    },
    sortGoods: function(t) {
        console.log(t);
        var a = t.currentTarget.dataset.type;
        if ((1 != this.data.type || 1 != a) && !(3 == this.data.cur_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 5 == this.data.cur_id && 4 == a && 4 == this.data.type && 1 == this.data.sort || 5 == this.data.cur_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 6 == this.data.cur_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 6 == this.data.cur_id && 4 == a && 4 == this.data.type && 1 == this.data.sort || 7 == this.data.cur_id && 2 == a && 2 == this.data.type && 1 == this.data.sort || 7 == this.data.cur_id && 4 == a && 4 == this.data.type && 1 == this.data.sort || 9 == this.data.skip_id && 3 == a && 3 == this.data.type && 1 == this.data.sort)) {
            var e = this.data.type == a ? this.data.sort ? 0 : 1 : 3 == a && this.data.type != a ? 0 : 1;
            this.setData({
                sort: e,
                type: a
            }), this.data.page = 1, this.data.lastPage = !1;
            var o = this;
            switch (o.data.loading = !0, wx.pageScrollTo({
                scrollTop: 0,
                duration: 0
            }), parseInt(o.data.cur_id)) {
              case 1:
                o.getGoodsList();
                break;

              case 2:
                o.getJdGoods();
                break;

              case 3:
                o.getMgGoods();
                break;

              case 4:
                o.getVipGoods();
                break;

              case 5:
                o.getSnGoods();
                break;

              case 6:
                o.getTbGoods();
                break;

              case 7:
                o.getKlGoods();
                break;

              case 9:
                o.getSpGoods();
            }
        }
    },
    getSpGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getSpGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if ("function" == typeof a && a(), console.log(t), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getKlGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/searchKlGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if ("function" == typeof a && a(), console.log(t), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getTbGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getTbGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if ("function" == typeof a && a(), console.log(t), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getJdGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getJdGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if ("function" == typeof a && a(), console.log(t), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getVipGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/searchVipGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if (console.log(t), "function" == typeof a && a(), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getSnGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/searchSnGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if (console.log(t), "function" == typeof a && a(), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getMgGoods: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getMgGoods",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(t) {
                if (console.log(t), "function" == typeof a && a(), t.data.data.length < 1) return 1 == e.data.page && (e.setData({
                    goodsList: !1,
                    topHeight: 84 - e.data.source_top
                }), wx.showToast({
                    title: "没有找到相关商品，亲~~~",
                    icon: "none"
                })), void (e.data.lastPage = !0);
                e.data.goodsList = 1 == e.data.page ? t.data.data : e.data.goodsList.concat(t.data.data), 
                e.setData({
                    goodsList: e.data.goodsList,
                    topHeight: e.data.topLoadedHeight
                }), e.data.loading = !1;
            }
        });
    },
    getGoodsList: function(a) {
        var e = this;
        t.util.request({
            url: "entry/wxapp/getGoodsList",
            data: {
                page: e.data.page,
                type: e.data.type,
                sort: e.data.sort,
                keyword: e.data.keyword
            },
            success: function(o) {
                if ("function" == typeof a && a(), "login" != o.data.message) if ("need" != o.data.message) {
                    if (console.log(o), o.data.data.length < 1) return 1 == e.data.page && (e.setData({
                        goodsList: !1,
                        topHeight: 84 - e.data.source_top
                    }), wx.showToast({
                        title: "没有找到相关商品，亲~~~",
                        icon: "none"
                    })), void (e.data.lastPage = !0);
                    e.data.goodsList = 1 == e.data.page ? o.data.data : e.data.goodsList.concat(o.data.data), 
                    e.setData({
                        goodsList: e.data.goodsList,
                        topHeight: e.data.topLoadedHeight
                    }), e.data.loading = !1;
                } else wx.showModal({
                    title: "系统信息",
                    content: "需要先去拼多多授权才能搜索:)",
                    showCancel: !1,
                    confirmColor: "#f43f6c",
                    confirmText: "去授权",
                    complete: function() {
                        wx.navigateToMiniProgram({
                            appId: o.data.data.app_id,
                            path: o.data.data.page_path,
                            success: function(t) {
                                console.log("ok"), wx.navigateBack();
                            }
                        });
                    }
                }); else t.checkLogin();
            }
        });
    },
    navBack: function() {
        t.globalData.from_act ? t.goIndex() : wx.navigateBack();
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
        if (this.data.keyword) {
            this.data.page = 1, this.data.lastPage = !1;
            var t = this;
            switch (parseInt(t.data.cur_id)) {
              case 1:
                t.getGoodsList(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 2:
                t.getJdGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 3:
                t.getMgGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 4:
                t.getVipGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 5:
                t.getSnGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 6:
                t.getTbGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 7:
                t.getKlGoods(function() {
                    wx.stopPullDownRefresh();
                });
                break;

              case 9:
                t.getSpGoods(function() {
                    wx.stopPullDownRefresh();
                });
            }
        } else wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        var t = this;
        if (!0 !== t.data.lastPage && !0 !== t.data.loading && t.data.keyword) switch (t.data.page++, 
        parseInt(t.data.cur_id)) {
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
    },
    onShareAppMessage: function() {
        var a = t.globalData.setting.share_title ? t.globalData.setting.share_title : "购物省钱，分享赚钱", e = t.globalData.setting.share_pic;
        return {
            title: a,
            path: "/first_duoduoke/pages/index/index" + (void 0 !== t.globalData.userInfo.uid ? "?from_uid=" + t.globalData.userInfo.uid + "&from_act=share" : "?from_act=share"),
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