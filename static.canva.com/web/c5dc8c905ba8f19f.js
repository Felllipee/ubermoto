(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76703], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var UMb = function(a) {
                        return TMb(function(b) {
                            return J7("div", {
                                className: "gcYy_A",
                                children: J7(__c.mk, {
                                    E8: "both",
                                    children: ({
                                        width: c,
                                        height: d
                                    }) => J7(a.Pg, {
                                        fill: b.fill,
                                        Nb: c,
                                        wc: d,
                                        Wd: void 0,
                                        animation: void 0,
                                        Xv: !1,
                                        O: void 0,
                                        V: void 0
                                    })
                                })
                            })
                        })
                    },
                    VMb = function(a) {
                        a.nD && (a.nD(), a.nD = null);
                        const b = a.props.SJa;
                        b.forEach(c => {
                            window.addEventListener(c, a.Nja)
                        });
                        a.nD = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.Nja)
                            })
                        }
                    },
                    aNb = function(a) {
                        return WMb(function(b) {
                            const [{
                                store: c,
                                Ca: d
                            }] = XMb(() => {
                                const e = new YMb,
                                    f = new ZMb(e);
                                return {
                                    store: e,
                                    Ca: f
                                }
                            });
                            return J7($Mb, {
                                rva: d.reset,
                                children: J7(__c.p7a, {
                                    YOa: d,
                                    ZOa: c,
                                    Zra: a.Eq.contains(b.url),
                                    children: ({
                                        Wk: e
                                    }) => J7(__c.JG, {
                                        url: b.url,
                                        store: a.Eq,
                                        Hk: a.us,
                                        Mu: a.Mu,
                                        Zm: a.Zm,
                                        Wk: e,
                                        xv: b.xv,
                                        FK: b.FK
                                    })
                                })
                            })
                        })
                    },
                    bNb = function(a) {
                        return TMb(function(b) {
                            return J7("div", {
                                className: "oUJNhQ",
                                children: J7(a.ke, {
                                    text: b.text,
                                    animation: void 0,
                                    Gc: void 0,
                                    Za: void 0,
                                    Ja: void 0,
                                    je: [],
                                    writingMode: 1
                                })
                            })
                        })
                    },
                    J7 = __webpack_require__(443763).jsx;
                var K7 = __webpack_require__(875604),
                    cNb = K7.Component,
                    TMb = K7.memo,
                    XMb = K7.useState;
                var dNb = __webpack_require__(519427),
                    L7 = dNb.action,
                    eNb = dNb.observable;
                var WMb = __webpack_require__(446474).Pi;
                var fNb = class extends cNb {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            kUa: c,
                            l_: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.fFa;
                            return f
                        }, {}));
                        return J7(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.l_ && VMb(this)
                    }
                    componentDidUpdate() {
                        this.props.l_ && VMb(this)
                    }
                    componentWillUnmount() {
                        this.nD && (this.nD(), this.nD = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Z4 = this.nD = null;
                        this.fFa = b => {
                            this.Z4 = b.nativeEvent
                        };
                        this.Nja = b => {
                            const c = this.props.l_,
                                d = this.Z4 === b;
                            c && !d && c(b);
                            this.Z4 = null
                        }
                    }
                };
                var $Mb = a => J7(fNb, {
                    kUa: ["onMouseDown", "onTouchStart"],
                    SJa: ["mousedown", "touchstart"],
                    l_: a.rva,
                    children: a.children
                });
                var YMb = class {
                        static A(a) {
                            __c.P(a, {
                                Wk: eNb.ref
                            })
                        }
                        constructor() {
                            this.Wk = (YMb.A(this), !0)
                        }
                    },
                    ZMb = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: L7.bound,
                                onTouchEnd: L7.bound,
                                reset: L7.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Wk = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.gH ? (window.clearTimeout(this.gH), this.gH = void 0, this.store.Wk = !1) : this.gH = window.setTimeout(() => this.gH = void 0, 300))
                        }
                        reset() {
                            this.store.Wk = !0
                        }
                        GI() {
                            this.gH && window.clearTimeout(this.gH)
                        }
                        constructor(a) {
                            this.store = a;
                            this.gH = (ZMb.A(this), void 0)
                        }
                    };
                __c.iBa = {
                    VOa: function(a) {
                        const b = aNb({
                                Mu: (e, f) => a.M.error(e, {
                                    re: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                Zm: a.Zm,
                                Eq: a.Eq,
                                us: a.us
                            }),
                            c = bNb({
                                ke: a.ke
                            }),
                            d = UMb({
                                Pg: a.lf
                            });
                        return {
                            tEa: b,
                            nja: c,
                            zM: d
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/c5dc8c905ba8f19f.js.map