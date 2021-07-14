var t = getApp();

Page({
    data: {
        navH: t.globalData.navHeight,
        goods_id: !1,
        comments: !1,
        onVideo: !1,
        videoPath: !1
    },
    navBack: function() {
        wx.navigateBack();
    },
    onLoad: function(t) {
        void 0 !== t.goods_id ? (this.data.goods_id = t.goods_id, this.getTbComments()) : wx.navigateBack();
    },
    getTbComments: function() {
        var a = this;
        t.util.request({
            url: "entry/wxapp/getTbComments",
            data: {
                goods_id: a.data.goods_id
            },
            showLoading: !0,
            success: function(t) {
                a.setData({
                    comments: t.data.data
                }), console.log(a.data.comments);
            }
        });
    },
    showACommPics: function(t) {
        var a = t.target.dataset.cdx, o = t.target.dataset.caidx, n = this.data.comments.commentList[a].commentAppend.images;
        for (var e in n) n[e] = "https:" + n[e];
        wx.previewImage({
            current: n[o],
            urls: n
        });
    },
    showCommPics: function(t) {
        var a = t.target.dataset.cdx, o = t.target.dataset.cidx, n = this.data.comments.commentList[a].images;
        for (var e in n) n[e] = "https:" + n[e];
        wx.previewImage({
            current: n[o],
            urls: n
        });
    },
    wachVideo: function(t) {
        console.log(t);
        var a = this, o = t.target.dataset.path;
        a.data.onVideo = !a.data.onVideo, a.setData({
            onVideo: a.data.onVideo,
            videoPath: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});