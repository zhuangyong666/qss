var t = {};

t.getConf = function(t) {
    var n = wx.getStorageSync("appConfig");
    for (var a in n) if (n[a].code == t) return n[a].value;
}, t.init = function(t) {
    var n = getApp();
    n.globalData.setting ? "function" == typeof t && t() : n.util.request({
        url: "entry/wxapp/Setting",
        showLoading: !1,
        success: function(a) {
            n.globalData.setting = a.data.data, "function" == typeof t && t();
        }
    });
}, module.exports = t;