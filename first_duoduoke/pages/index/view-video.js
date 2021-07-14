getApp();

Page({
    data: {
        url: "",
        showVideo: !1,
        videoSrc: !1,
        muted: !1
    },
    onLoad: function(o) {
        o.url && this.setData({
            videoSrc: decodeURIComponent(o.url)
        });
    },
    videoErrorCallback: function(o) {
        console.log(o);
    },
    toggleMuted: function() {
        this.data.muted ? this.setData({
            muted: !1
        }) : this.setData({
            muted: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});