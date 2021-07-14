function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var o = e[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, i, o) {
        return i && t(e.prototype, i), o && t(e, o), e;
    };
}(), i = function() {
    function i(e) {
        t(this, i);
        var o = {
            from: 50,
            speed: 2e3,
            refreshTime: 100,
            decimals: 2,
            onUpdate: function() {},
            onComplete: function() {}
        };
        this.tempValue = 0, this.opt = Object.assign(o, e), this.loopCount = 0, this.loops = Math.ceil(this.opt.speed / this.opt.refreshTime), 
        this.increment = this.opt.from / this.loops, this.interval = null, this.init();
    }
    return e(i, [ {
        key: "init",
        value: function() {
            var t = this;
            this.interval = setInterval(function() {
                t.updateTimer();
            }, this.opt.refreshTime);
        }
    }, {
        key: "updateTimer",
        value: function() {
            this.loopCount++, this.tempValue = this.formatFloat(this.tempValue, this.increment).toFixed(this.opt.decimals), 
            this.loopCount >= this.loops && (clearInterval(this.interval), this.tempValue = this.opt.from, 
            this.opt.onComplete()), this.opt.onUpdate();
        }
    }, {
        key: "formatFloat",
        value: function(t, e) {
            var i = void 0, o = void 0, n = void 0;
            try {
                o = t.toString().split(".")[1].length;
            } catch (t) {
                o = 0;
            }
            try {
                n = e.toString().split(".")[1].length;
            } catch (t) {
                n = 0;
            }
            return i = Math.pow(10, Math.max(o, n)), (t * i + e * i) / i;
        }
    } ]), i;
}();

exports.default = i;