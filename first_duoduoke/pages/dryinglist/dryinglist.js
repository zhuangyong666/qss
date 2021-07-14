var a = getApp();

Page({
    data: {
        focus: !1,
        showShade: !1,
        navH: 0,
        showGoods: !1,
        goods_id: "",
        order_id: "",
        source: "",
        goodsList: "",
        goods_price: "",
        yuan_price: "",
        pics: [],
        imgNum: 9,
        share_content: "",
        postBtnDisabled: !1,
        path: "",
        res: "",
        current: 0,
        noteMaxLen: 500,
        showTip: !1,
        returnedValue: !1
    },
    onLoad: function(o) {
        console.log(o);
        var t = this;
        t.setData({
            navH: a.globalData.navHeight,
            order_show_bouns: a.globalData.setting.order_show_bouns / 100
        }), setTimeout(function() {
            t.setData({
                showTip: !0
            });
        }, 2e3);
    },
    bindTextAreaBlur: function(a) {
        console.log(a.detail.value);
    },
    onShade: function() {
        a.globalData.userInfo ? this.setData({
            showShade: !0
        }) : a.checkLogin();
    },
    onClose: function() {
        this.setData({
            showShade: !1
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
    toOrders: function(o) {
        console.log(o);
        var t = o.target.dataset.balance;
        a.globalData.userInfo ? wx.navigateTo({
            url: "/first_duoduoke/pages/orders/orders?balance=" + t
        }) : a.checkLogin();
    },
    onShow: function() {
        console.log("返回之后", this.data.returnedValue);
        var a = this;
        if (this.data.returnedValue) {
            var o = this.data.returnedValue[0], t = this.data.returnedValue[1], e = this.data.returnedValue[2], s = this.data.returnedValue[3];
            void 0 !== o && (a.setData({
                goods_id: o,
                order_id: t,
                source: e,
                goods_price: s,
                showGoods: !0
            }), "" == a.data.goodsList && a.getOrderGoods());
        }
    },
    getOrderGoods: function() {
        var o = this;
        switch (o.data.loading = !0, parseInt(o.data.source)) {
          case 1:
            var t = "entry/wxapp/getGoodsDetail", e = {
                goods_id: o.data.goods_id,
                source: o.data.source,
                show_order: 1
            };
            break;

          case 2:
            var t = "entry/wxapp/getJdDetail", e = {
                goods_id: o.data.goods_id,
                source: o.data.source
            };
            break;

          case 3:
            var t = "entry/wxapp/getMgDetail", e = {
                goods_url: "",
                goods_id: o.data.goods_id,
                source: o.data.source
            };
            break;

          case 4:
            var t = "entry/wxapp/getVipDetail", e = {
                goods_id: o.data.goods_id
            };
            break;

          case 5:
            var t = "entry/wxapp/getSnDetail", e = {
                goods_url: "",
                goods_id: o.data.goods_id,
                source: o.data.source
            };
        }
        a.util.request({
            url: t,
            data: e,
            success: function(a) {
                console.log(a);
                var t = a.data.data, e = o.data.goods_price / 100;
                o.setData({
                    goodsList: t,
                    yuan_price: e,
                    showGoods: !1
                }), console.log("goods", t), o.data.loading = !1;
            }
        });
    },
    loginAfter: function(o) {
        a.loginAfter(o);
    },
    loginCancel: function() {
        a.loginCancel();
    },
    saveOrderShow: function() {
        var o = this;
        if (a.globalData.userInfo) if ("" == o.data.goodsList) wx.showToast({
            icon: "none",
            title: "请选择要晒单的商品"
        }); else if ("" == o.data.share_content) wx.showToast({
            icon: "none",
            title: "请输入您的使用心得"
        }); else if ("" == o.data.pics && "" == o.data.path) wx.showToast({
            icon: "none",
            title: "请上传要展示的图片或视频"
        }); else {
            var t = o.data.pics.join(","), e = o.data.goods_id, s = o.data.goodsList.goods_image_url, i = o.data.goodsList.goods_url, n = o.data.goodsList.goods_name, d = o.data.goods_price, r = o.data.goodsList.coupon_discount, c = o.data.goodsList.sales_tip, l = o.data.share_content, u = "" == o.data.pics ? "1" : "0", g = o.data.order_id, h = o.data.source;
            if (o.setData({
                postBtnDisabled: !0
            }), 1 == u) wx.showLoading({
                title: "视频上传中",
                mask: !0
            }), wx.uploadFile({
                url: a.util.url("entry/wxapp/saveOrderShow"),
                filePath: o.data.res.tempFilePath,
                name: "video",
                header: {
                    "content-type": "multipart/form-data"
                },
                formData: {
                    pics: t,
                    goods_id: e,
                    img: s,
                    source: h,
                    goods_url: i,
                    goods_name: n,
                    price: d,
                    coupon: r,
                    sales: c,
                    share_content: l,
                    type: u,
                    order_id: g,
                    duration: o.data.res.duration,
                    size: o.data.res.size,
                    width: o.data.res.width,
                    height: o.data.res.height,
                    thumbTempFilePath: o.data.res.thumbTempFilePath
                },
                success: function(a) {
                    console.log("上传视频成功", a);
                    var o = JSON.parse(a.data);
                    console.log("data", o), "ok" == o.message ? wx.showModal({
                        title: "您的晒单已提交",
                        content: "请耐心等待审核",
                        showCancel: !1,
                        confirmText: "我知道了",
                        success: function(a) {
                            a.confirm && (console.log("用户点击确定"), wx.navigateBack({
                                delta: 1
                            }));
                        }
                    }) : wx.showToast({
                        icon: "none",
                        title: o.message,
                        duration: 5e3
                    });
                },
                complete: function() {
                    wx.hideLoading();
                }
            }); else {
                if (o.data.pics.length < 3) return wx.showToast({
                    icon: "none",
                    title: "上传图片不得少于三张"
                }), void o.setData({
                    postBtnDisabled: !1
                });
                a.util.request({
                    url: "entry/wxapp/saveOrderShow",
                    method: "POST",
                    data: {
                        pics: t,
                        goods_id: e,
                        img: s,
                        source: h,
                        goods_url: i,
                        goods_name: n,
                        price: d,
                        coupon: r,
                        sales: c,
                        share_content: l,
                        type: u,
                        order_id: g
                    },
                    success: function(a) {
                        console.log("上传", a.data), wx.showModal({
                            title: "您的晒单已提交",
                            content: "请耐心等待审核",
                            showCancel: !1,
                            confirmText: "我知道了",
                            success: function(a) {
                                a.confirm && (console.log("用户点击确定"), wx.navigateBack({
                                    delta: 1
                                }));
                            }
                        });
                    }
                });
            }
        } else a.checkLogin();
    },
    uploadPostPic: function() {
        var o = this;
        o.setData({
            showShade: !1
        });
        var t = [];
        wx.chooseImage({
            count: o.data.imgNum,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(e) {
                var s = e.tempFilePaths;
                t = t.concat(s), o.uploadimg({
                    url: a.util.url("entry/wxapp/uploadTempPic"),
                    path: t
                });
            }
        });
    },
    uploadimg: function(a) {
        var o = this, t = a.i ? a.i : 0, e = a.success ? a.success : 0, s = a.fail ? a.fail : 0;
        wx.showLoading({
            title: "图片上传中",
            mask: !0
        }), wx.uploadFile({
            url: a.url,
            filePath: a.path[t],
            name: "pic",
            header: {
                "content-type": "multipart/form-data"
            },
            success: function(a) {
                0 == (a = JSON.parse(a.data)).errno && (console.log(a.data), o.data.pics.push(a.data.path), 
                o.setData({
                    pics: o.data.pics
                }));
            },
            fail: function(a) {
                s++;
            },
            complete: function(i) {
                console.log(i), (i = JSON.parse(i.data)).errno ? wx.showToast({
                    title: i.message,
                    icon: "none",
                    duration: 5e3
                }) : ++t == a.path.length ? (console.log("上传完毕"), wx.showToast({
                    title: "上传成功",
                    icon: "success"
                })) : (a.i = t, a.success = e, a.fail = s, o.uploadimg(a));
            }
        });
    },
    closeImg: function(a) {
        console.log("asdasdads", a.target.dataset.index);
        var o = a.target.dataset.index, t = this.data.pics;
        t.splice(o, 1), console.log("pics", t), this.setData({
            pics: t
        });
    },
    limit: function(a) {
        var o = a.detail.value, t = parseInt(o.length);
        t > this.data.noteMaxLen || this.setData({
            current: t,
            share_content: o
        });
    },
    closeGoodsId: function() {
        this.setData({
            goods_id: "",
            goodsList: "",
            postBtnDisabled: !1,
            showGoods: !1,
            returnedValue: !1
        });
    },
    closePicsAndPath: function() {
        this.setData({
            pics: [],
            path: "",
            postBtnDisabled: !1
        });
    },
    chooseCardVideo: function() {
        var a = this;
        a.setData({
            showShade: !1
        }), wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            maxDuration: 60,
            camera: "back",
            success: function(o) {
                return console.log(o), Math.floor(o.duration) < 10 ? (wx.showToast({
                    title: "时长太小",
                    icon: "none",
                    duration: 2e3
                }), !1) : Math.floor(o.duration) > 60 ? (wx.showToast({
                    title: "时长太长",
                    icon: "none",
                    duration: 2e3
                }), !1) : (a.setData({
                    path: o.tempFilePath,
                    res: o
                }), console.log("path", a.data.path), void console.log("res", a.data.res));
            },
            fail: function(a) {
                console.log(a);
            }
        });
    }
});