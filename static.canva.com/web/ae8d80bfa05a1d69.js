(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76703], {

        /***/
        910906: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var WMb = function(a) {
                        return VMb(function(b) {
                            return J7("div", {
                                className: "gcYy_A",
                                children: J7(__c.mk, {
                                    D8: "both",
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
                    XMb = function(a) {
                        a.nD && (a.nD(), a.nD = null);
                        const b = a.props.UJa;
                        b.forEach(c => {
                            window.addEventListener(c, a.Oja)
                        });
                        a.nD = () => {
                            b.forEach(c => {
                                window.removeEventListener(c, a.Oja)
                            })
                        }
                    },
                    cNb = function(a) {
                        return YMb(function(b) {
                            const [{
                                store: c,
                                Ca: d
                            }] = ZMb(() => {
                                const e = new $Mb,
                                    f = new aNb(e);
                                return {
                                    store: e,
                                    Ca: f
                                }
                            });
                            return J7(bNb, {
                                sva: d.reset,
                                children: J7(__c.q7a, {
                                    $Oa: d,
                                    aPa: c,
                                    $ra: a.Eq.contains(b.url),
                                    children: ({
                                        Xk: e
                                    }) => J7(__c.JG, {
                                        url: b.url,
                                        store: a.Eq,
                                        Hk: a.us,
                                        Mu: a.Mu,
                                        Zm: a.Zm,
                                        Xk: e,
                                        xv: b.xv,
                                        FK: b.FK
                                    })
                                })
                            })
                        })
                    },
                    dNb = function(a) {
                        return VMb(function(b) {
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
                    eNb = K7.Component,
                    VMb = K7.memo,
                    ZMb = K7.useState;
                var fNb = __webpack_require__(519427),
                    L7 = fNb.action,
                    gNb = fNb.observable;
                var YMb = __webpack_require__(446474).Pi;
                var hNb = class extends eNb {
                    render() {
                        const {
                            children: a,
                            component: b = "div",
                            mUa: c,
                            l_: d
                        } = this.props;
                        let e = {};
                        d && (e = c.reduce((f, g) => {
                            f[g] = this.hFa;
                            return f
                        }, {}));
                        return J7(b, {
                            className: "_kI3Pw",
                            ...e,
                            children: a
                        })
                    }
                    componentDidMount() {
                        this.props.l_ && XMb(this)
                    }
                    componentDidUpdate() {
                        this.props.l_ && XMb(this)
                    }
                    componentWillUnmount() {
                        this.nD && (this.nD(), this.nD = null)
                    }
                    constructor(...a) {
                        super(...a);
                        this.Z4 = this.nD = null;
                        this.hFa = b => {
                            this.Z4 = b.nativeEvent
                        };
                        this.Oja = b => {
                            const c = this.props.l_,
                                d = this.Z4 === b;
                            c && !d && c(b);
                            this.Z4 = null
                        }
                    }
                };
                var bNb = a => J7(hNb, {
                    mUa: ["onMouseDown", "onTouchStart"],
                    UJa: ["mousedown", "touchstart"],
                    l_: a.sva,
                    children: a.children
                });
                var $Mb = class {
                        static A(a) {
                            __c.P(a, {
                                Xk: gNb.ref
                            })
                        }
                        constructor() {
                            this.Xk = ($Mb.A(this), !0)
                        }
                    },
                    aNb = class {
                        static A(a) {
                            __c.P(a, {
                                onDoubleClick: L7.bound,
                                onTouchEnd: L7.bound,
                                reset: L7.bound
                            })
                        }
                        onDoubleClick() {
                            this.store.Xk = !1
                        }
                        onTouchEnd(a) {
                            a.touches.length > 0 || (this.fH ? (window.clearTimeout(this.fH), this.fH = void 0, this.store.Xk = !1) : this.fH = window.setTimeout(() => this.fH = void 0, 300))
                        }
                        reset() {
                            this.store.Xk = !0
                        }
                        FI() {
                            this.fH && window.clearTimeout(this.fH)
                        }
                        constructor(a) {
                            this.store = a;
                            this.fH = (aNb.A(this), void 0)
                        }
                    };
                __c.jBa = {
                    XOa: function(a) {
                        const b = cNb({
                                Mu: (e, f) => a.M.error(e, {
                                    re: "widget: ",
                                    extra: new Map(Object.entries(f))
                                }),
                                Zm: a.Zm,
                                Eq: a.Eq,
                                us: a.us
                            }),
                            c = dNb({
                                ke: a.ke
                            }),
                            d = WMb({
                                Pg: a.lf
                            });
                        return {
                            vEa: b,
                            nja: c,
                            zM: d
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/ae8d80bfa05a1d69.js.map