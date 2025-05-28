(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [24459], {

        /***/
        460541: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(900337);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var YHb, aIb, $Hb, ZHb;
                YHb = function(a, {
                    Dc: b,
                    endTime: c,
                    fill: d,
                    file: e,
                    url: f,
                    BVa: g,
                    span: h
                }) {
                    ({
                        zj: c
                    } = h.end(b ? "ok" : "error", c));
                    a.dg.track(__c.nrb, {
                        source: "editor",
                        Dc: b,
                        eya: d.video,
                        resourceType: g,
                        url: f,
                        height: e.height,
                        width: e.width,
                        quality: e.quality,
                        Og: e.Og,
                        Hf: c()
                    })
                };
                aIb = class {
                    VWa({
                        fill: a,
                        startTime: b,
                        file: c
                    }) {
                        var d, e;
                        if (!this.j3.has(a) && !this.IBa.has(a)) {
                            var f = ((d = c.url) === null || d === void 0 ? 0 : d.startsWith("data:")) || ((e = c.url) === null || e === void 0 ? 0 : e.startsWith("blob:")) ? void 0 : c.url,
                                g = c.container && ZHb(c.container),
                                h = this.hd.wr("load_video", {
                                    startTime: b,
                                    attrs: new Map([
                                        ["id", a.video],
                                        ["url", $Hb(f)],
                                        ["height", c.height],
                                        ["width", c.width],
                                        ["quality", c.quality],
                                        ["container", g],
                                        ["watermarked", c.Og]
                                    ])
                                });
                            this.j3.set(a, {
                                end: (k, l) => YHb(this, {
                                    Dc: k,
                                    endTime: l,
                                    fill: a,
                                    file: c,
                                    url: f,
                                    BVa: g,
                                    span: h
                                })
                            })
                        }
                    }
                    Toa({
                        Dc: a,
                        fill: b,
                        endTime: c
                    }) {
                        const d = this.j3.get(b);
                        d && (d.end(a, c), this.j3.delete(b), this.IBa.add(b))
                    }
                    constructor(a, b) {
                        this.dg = a;
                        this.hd = b;
                        this.j3 = new WeakMap;
                        this.IBa = new WeakSet
                    }
                };
                $Hb = a => {
                    if (!a) return a;
                    let b;
                    try {
                        b = new URL(a)
                    } catch (c) {
                        return a
                    }
                    b.search = "";
                    return b.toString()
                };
                ZHb = a => {
                    switch (a) {
                        case 1:
                            return "MP4";
                        case 2:
                            return "GIF";
                        case 4:
                            return "LOTTIE";
                        case 3:
                            return "WEBM";
                        default:
                            throw new __c.E(a);
                    }
                };
                __c.aAa = {};
                __c.aAa.YEa = aIb;
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/d562d2425f702e21.js.map