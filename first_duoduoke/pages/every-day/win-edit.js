var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        noteMaxLen: 500,
        current: 0,
        share_content: "",
        id: 0,
        path: "",
        imgNum: 3,
        pics: [],
        postBtnDisabled: !1
    },
    limit: function(t) {
        var a = t.detail.value, e = parseInt(a.length);
        e > this.data.noteMaxLen || this.setData({
            current: e,
            share_content: a
        });
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(t) {
        this.setData({
            id: t.id
        });
    },
    saveOrderShow: function() {
        var a = this;
        "" != a.data.share_content ? "" != a.data.pics ? t.util.request({
            url: "entry/wxapp/saveEveryDayShow",
            method: "POST",
            data: {
                id: a.data.id,
                pics: a.data.pics,
                share_content: a.data.share_content
            },
            success: function(t) {
                var a = t.data;
                console.log(a), "ok" == a.message ? wx.redirectTo({
                    url: "win-list"
                }) : wx.showToast({
                    icon: "none",
                    title: a.message
                });
            }
        }) : wx.showToast({
            icon: "none",
            title: "请上传要展示的图片"
        }) : wx.showToast({
            icon: "none",
            title: "请输入您的中奖感言"
        });
    },
    uploadPostPic: function() {
        var a = this, e = [];
        wx.chooseImage({
            count: a.data.imgNum,
            sizeType: [ "compressed" ],
            sourceType: [ "album", "camera" ],
            success: function(n) {
                var o = n.tempFilePaths;
                e = e.concat(o), a.uploadimg({
                    url: t.util.url("entry/wxapp/uploadTempPic"),
                    path: e
                });
            }
        });
    },
    uploadimg: function(t) {
        var a = this, e = t.i ? t.i : 0, n = t.success ? t.success : 0, o = t.fail ? t.fail : 0;
        wx.showLoading({
            title: "图片上传中",
            mask: !0
        }), wx.uploadFile({
            url: t.url,
            filePath: t.path[e],
            name: "pic",
            header: {
                "content-type": "multipart/form-data"
            },
            success: function(t) {
                0 == (t = JSON.parse(t.data)).errno && (console.log(t.data), a.data.pics.push(t.data.path), 
                a.setData({
                    pics: a.data.pics
                }));
            },
            fail: function(t) {
                o++;
            },
            complete: function(s) {
                console.log(s), (s = JSON.parse(s.data)).errno ? wx.showToast({
                    title: s.message,
                    icon: "none",
                    duration: 5e3
                }) : ++e == t.path.length ? (console.log("上传完毕"), wx.showToast({
                    title: "上传成功",
                    icon: "success"
                })) : (t.i = e, t.success = n, t.fail = o, a.uploadimg(t));
            }
        });
    },
    closeImg: function(t) {
        console.log("asdasdads", t.target.dataset.index);
        var a = t.target.dataset.index, e = this.data.pics;
        e.splice(a, 1), console.log("pics", e), this.setData({
            pics: e
        });
    },
    closePicsAndPath: function() {
        this.setData({
            pics: [],
            path: "",
            postBtnDisabled: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});