(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [86783], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var f$b = function(a) {
                        return e$b(function(b) {
                            return F6("div", {
                                className: "gcYy_A",
                                children: F6(__c.eI, {
                                    r_: "both",
                                    children: ({
                                        width: c,
                                        height: d
                                    }) => F6(a.Xi, {
                                        fill: b.fill,
                                        Fb: c,
                                        bc: d,
                                        kf: void 0,
                                        animation: void 0,
                                        kC: !1,
                                        Y: void 0,
                                        fa: void 0
                                    })
                                })
                            })
                        })
                    },
                    g$b = function(a) {
                        a.$K && (a.$K(), a.$K = null);
                        const b = a.props.Cbb;
                        b.forEach(c => {
                            window.addEventListener(c, a.LFa)
                        });
                        a.$K = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.LFa)
                            })
                        }
                    },
                    m$b = function(a) {
                        return h$b(function(b) {
                            const [{
                                store: c,
                                ya: d
                            }] = i$b(() => {
                                const e = new j$b,
                                    f = new k$b(e);
                                return {
                                    store: e,
                                    ya: f
                                }
                            });
                            return F6(l$b, {
                                b3: d.reset,
                                children: F6(__c.csb, {
                                    Vhb: d,
                                    Whb: c,
                                    JPa: a.Dv.contains(b.url),
                                    children: ({
                                        Ao: e
                                    }) => F6(__c.PB, {
                                        url: b.url,
                                        store: a.Dv,
                                        fo: a.Ct,
                                        Rx: a.Rx,
                                        Zm: a.Zm,
                                        Ao: e,
                                        FB: b.FB,
                                        FU: b.FU
                                    })
                                })
                            })
                        })
                    },
                    n$b = function(a) {
                        return e$b(function(b) {
                            return F6("div", {
                                className: "oUJNhQ",
                                children: F6(a.le, {
                                    text: b.text,
                                    animation: void 0,
                                    sd: void 0,
                                    nb: void 0,
                                    Qa: void 0,
                                    Df: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    F6 = __webpack_require__(443763).jsx;
                var G6 = __webpack_require__(875604),
                    o$b = G6.Component,
                    e$b = G6.memo,
                    i$b = G6.useState;
                var p$b = __webpack_require__(519427),
                    H6 = p$b.action,
                    q$b = p$b.observable;
                var h$b = __webpack_require__(446474).Pi;
                var r$b = class extends o$b {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            bqb: c,
                            jea: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.u6a;
                            return f
                        }, {}));
                        return F6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.jea && g$b(this)
                    }
                    componentDidUpdate() {
                        this.props.jea && g$b(this)
                    }
                    componentWillUnmount() {
                        this.$K && (this.$K(), this.$K = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Nka = this.$K = null;
                        this.u6a = b => {
                            this.Nka = b.nativeEvent
                        };
                        this.LFa = b => {
                            const c = this.props.jea,
                                d = this.Nka === b;
                            c && !d &&
                                c(b);
                            this.Nka = null
                        }
                    }
                };
                var l$b = a => F6(r$b, {
                    bqb: ["onMouseDown", "onTouchStart"],
                    Cbb: ["mousedown", "touchstart"],
                    jea: a.b3,
                    children: a.children
                });
                var j$b = class {
                        static A(a) {
                            __c.P(a, {
                                Ao: q$b.ref
                            })
                        }
                        constructor() {
                            this.Ao = (j$b.A(this), !0)
                        }
                    },
                    k$b = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: H6.bound,
                                onTouchEnd: H6.bound,
                                reset: H6.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Ao = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.CP ? (window.clearTimeout(this.CP), this.CP = void 0, this.store.Ao = !1) : this.CP = window.setTimeout(() => this.CP = void 0, 300))
                        }
                        reset() {
                            this.store.Ao = !0
                        }
                        OR() {
                            this.CP && window.clearTimeout(this.CP)
                        }
                        constructor(a) {
                            this.store = a;
                            this.CP = (k$b.A(this), void 0)
                        }
                    };
                __c.JRa = {
                    Shb: function(a) {
                        const b = m$b({
                                Rx: (e, f) => a.H.error(e, {
                                    re: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                Zm: a.Zm,
                                Dv: a.Dv,
                                Ct: a.Ct
                            }),
                            c = n$b({
                                le: a.le
                            }),
                            d = f$b({
                                Xi: a.hf
                            });
                        return {
                            X4a: b,
                            eFa: c,
                            iX: d
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/ae927c849bb698b7.js.map