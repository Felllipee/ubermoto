(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [86783], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var d$b = function(a) {
                        return c$b(function(b) {
                            return F6("div", {
                                className: "gcYy_A",
                                children: F6(__c.fI, {
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
                    e$b = function(a) {
                        a.aL && (a.aL(), a.aL = null);
                        const b = a.props.Abb;
                        b.forEach(c => {
                            window.addEventListener(c, a.LFa)
                        });
                        a.aL = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.LFa)
                            })
                        }
                    },
                    k$b = function(a) {
                        return f$b(function(b) {
                            const [{
                                store: c,
                                ya: d
                            }] = g$b(() => {
                                const e = new h$b,
                                    f = new i$b(e);
                                return {
                                    store: e,
                                    ya: f
                                }
                            });
                            return F6(j$b, {
                                b3: d.reset,
                                children: F6(__c.bsb, {
                                    Thb: d,
                                    Uhb: c,
                                    JPa: a.Cv.contains(b.url),
                                    children: ({
                                        Ao: e
                                    }) => F6(__c.QB, {
                                        url: b.url,
                                        store: a.Cv,
                                        eo: a.Ct,
                                        Px: a.Px,
                                        Zm: a.Zm,
                                        Ao: e,
                                        FB: b.FB,
                                        GU: b.GU
                                    })
                                })
                            })
                        })
                    },
                    l$b = function(a) {
                        return c$b(function(b) {
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
                    m$b = G6.Component,
                    c$b = G6.memo,
                    g$b = G6.useState;
                var n$b = __webpack_require__(519427),
                    H6 = n$b.action,
                    o$b = n$b.observable;
                var f$b = __webpack_require__(446474).Pi;
                var p$b = class extends m$b {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            $pb: c,
                            jea: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.s6a;
                            return f
                        }, {}));
                        return F6(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.jea && e$b(this)
                    }
                    componentDidUpdate() {
                        this.props.jea && e$b(this)
                    }
                    componentWillUnmount() {
                        this.aL && (this.aL(), this.aL = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Oka = this.aL = null;
                        this.s6a = b => {
                            this.Oka = b.nativeEvent
                        };
                        this.LFa = b => {
                            const c = this.props.jea,
                                d = this.Oka === b;
                            c && !d &&
                                c(b);
                            this.Oka = null
                        }
                    }
                };
                var j$b = a => F6(p$b, {
                    $pb: ["onMouseDown", "onTouchStart"],
                    Abb: ["mousedown", "touchstart"],
                    jea: a.b3,
                    children: a.children
                });
                var h$b = class {
                        static A(a) {
                            __c.P(a, {
                                Ao: o$b.ref
                            })
                        }
                        constructor() {
                            this.Ao = (h$b.A(this), !0)
                        }
                    },
                    i$b = class {
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
                            a.touches.length > 0 || (this.EP ? (window.clearTimeout(this.EP), this.EP = void 0, this.store.Ao = !1) : this.EP = window.setTimeout(() => this.EP = void 0, 300))
                        }
                        reset() {
                            this.store.Ao = !0
                        }
                        QR() {
                            this.EP && window.clearTimeout(this.EP)
                        }
                        constructor(a) {
                            this.store = a;
                            this.EP = (i$b.A(this), void 0)
                        }
                    };
                __c.IRa = {
                    Qhb: function(a) {
                        const b = k$b({
                                Px: (e, f) => a.H.error(e, {
                                    re: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                Zm: a.Zm,
                                Cv: a.Cv,
                                Ct: a.Ct
                            }),
                            c = l$b({
                                le: a.le
                            }),
                            d = d$b({
                                Xi: a.hf
                            });
                        return {
                            V4a: b,
                            fFa: c,
                            iX: d
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/872101cddc522a15.js.map