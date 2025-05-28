(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [4143], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(564722);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var j2b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : i2b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    p2b = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    Ee: z4,
                                    gla: z4
                                })
                            }
                            get Ee() {
                                switch (this.gla) {
                                    case "date":
                                        return new k2b(this.yn, b.language || "en-AU");
                                    case "select":
                                        return new l2b(this.yn);
                                    case "mention":
                                        return new m2b(this.yn);
                                    case "embed":
                                        return new n2b(this.yn);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.gla);
                                }
                            }
                            get gla() {
                                var d;
                                return (d = this.yn.Po) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.yn = (c.A(this), void 0);
                                this.yn = __c.D(a.Hv(d.sheet, d.na, d.column))
                            }
                        }
                        return o2b(d => (new c(d)).Ee)
                    },
                    r2b = function() {
                        const a = A4(() => new Map, []);
                        return {
                            Efb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = q2b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    s2b = function(a, b) {
                        return A4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    z2b = function({
                        children: a,
                        keyFrame: b,
                        p_a: c,
                        ariaLive: d,
                        bQa: e = !1,
                        f7a: f,
                        Ena: g,
                        Ybb: h,
                        HDb: k,
                        gJa: l,
                        gLa: m,
                        FDb: n,
                        nvb: p
                    }) {
                        const {
                            Efb: q
                        } = r2b(), {
                            Eeb: r,
                            wqb: t
                        } = t2b(b, a), w = s2b(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return B4("div", {
                            className: C4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: B4("div", {
                                className: C4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => B4(u2b, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: w(u),
                                    children: y => B4(v2b.Provider, {
                                        value: y,
                                        children: B4("div", {
                                            className: C4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === w2b || y === x2b || y === y2b,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && B4(u2b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : w(b),
                                    children: u => B4(v2b.Provider, {
                                        value: u,
                                        children: B4("div", {
                                            className: C4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === w2b || u === x2b || u === y2b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    t2b = function(a,
                        b) {
                        const [c, d] = A2b(() => [{
                            key: a,
                            element: b
                        }]);
                        B2b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = D4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            Eeb: c,
                            wqb: e
                        }
                    },
                    C2b = function(a) {
                        switch (a.type) {
                            case "mention":
                                return "bCAtqw";
                            case "embed":
                                return "BTcT3w";
                            case "date":
                                return "McKQgg";
                            case "select":
                                return "V2E5nQ";
                            default:
                                throw new E(a);
                        }
                    },
                    G2b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return B4(D2b, {
                                    Lq: a.user ? b.V_(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Ueb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.kLa.d_.get(a.url);
                                return B4(E2b, {
                                    icon: a,
                                    Oib: c
                                });
                            case "date":
                                return a.text ? void 0 : B4(F2b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    I2b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return B4(H2b, {
                                    selected: !!b.PXa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    E4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    J2b = function(a) {
                        __c.v(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    K2b = function(a, b, c) {
                        if (c) {
                            var d = j2b(c.images, "medium"),
                                e = j2b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = F4(() => a.E6.set(b, e));
                                f.onerror = F4(() => a.E6.set(b, void 0));
                                !f.complete && c.complete ? a.E6.set(b, d) : c.src = ""
                            }
                        } else a.E6.set(b, void 0)
                    },
                    M2b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Fg ? a.Fg.DGb(new L2b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Hf.content.title;
                                        h ? (G4(() => a.D0a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        G4(() => a.D0a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    i2b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.by * __c.pNb[a],
                    H4 = __webpack_require__(519427),
                    F4 = H4.action,
                    N2b = H4.comparer,
                    z4 = H4.computed,
                    O2b = H4.observable,
                    I4 = H4.ObservableMap,
                    G4 = H4.runInAction;
                var o2b = __webpack_require__(635872).Om;
                var J4 = __webpack_require__(875604),
                    P2b = J4.createContext,
                    q2b = J4.createRef,
                    Q2b = J4.lazy,
                    K4 = J4.memo,
                    D4 = J4.useCallback,
                    B2b = J4.useEffect,
                    R2b = J4.useLayoutEffect,
                    A4 = J4.useMemo,
                    A2b = J4.useState;
                var S2b = __webpack_require__(443763),
                    B4 = S2b.jsx,
                    T2b = S2b.jsxs;
                var U2b = __webpack_require__,
                    V2b = U2b(993864),
                    C4 = U2b.n_x(V2b)();
                var u2b = __webpack_require__(460876).Z;
                var L4 = __webpack_require__(223826),
                    y2b = L4.Wj,
                    w2b = L4.Ix,
                    x2b = L4.$r;
                var M4 = __webpack_require__(446474).Pi;
                var W2b = class {
                        static A(a) {
                            P(a, {
                                text: z4,
                                user: z4,
                                brand: z4
                            })
                        }
                        get text() {
                            return this.Ee.text
                        }
                        get user() {
                            return this.Ee.user
                        }
                        get brand() {
                            return this.Ee.brand
                        }
                        constructor(a) {
                            this.Ee = a;
                            this.type = (W2b.A(this), "mention")
                        }
                    },
                    X2b = class {
                        static A(a) {
                            P(a, {
                                text: z4,
                                url: z4
                            })
                        }
                        get text() {
                            return this.Ee.text
                        }
                        get url() {
                            return this.Ee.url
                        }
                        constructor(a) {
                            this.Ee = a;
                            this.type = (X2b.A(this), "embed")
                        }
                    },
                    Y2b = class {
                        static A(a) {
                            P(a, {
                                text: z4,
                                language: z4,
                                style: z4,
                                date: z4
                            })
                        }
                        get text() {
                            return this.Ee.text
                        }
                        get language() {
                            return this.Ee.language
                        }
                        get style() {
                            return this.Ee.style
                        }
                        get date() {
                            return this.Ee.date
                        }
                        constructor(a) {
                            this.Ee =
                                a;
                            this.type = (Y2b.A(this), "date")
                        }
                    },
                    Z2b = class {
                        static A(a) {
                            P(a, {
                                text: z4,
                                options: z4,
                                gf: z4,
                                WR: z4
                            })
                        }
                        get text() {
                            return this.Ee.text
                        }
                        get options() {
                            return this.Ee.options.map(a => a)
                        }
                        get gf() {
                            return this.Ee.gf
                        }
                        get WR() {
                            var a;
                            return (a = this.Ee.options.first(b => b.id === this.Ee.gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ee = a;
                            this.type = (Z2b.A(this), "select")
                        }
                    },
                    $2b = o2b(a => {
                        switch (a.type) {
                            case "mention":
                                return new W2b(a);
                            case "embed":
                                return new X2b(a);
                            case "date":
                                return new Y2b(a);
                            case "select":
                                return new Z2b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var k2b = class {
                        static A(a) {
                            P(a, {
                                style: z4,
                                date: z4,
                                text: z4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.uo.pk.type === 2 ? this.uo.pk.date : void 0) || (a = new Date, a = __c.wz(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Mgb: a.getHours(),
                                Ilb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.uo.eA
                        }
                        constructor(a, b) {
                            this.uo = a;
                            this.language = b;
                            this.type = (k2b.A(this), "date")
                        }
                    },
                    a3b = class {
                        get label() {
                            return this.option.label
                        }
                        get fill() {
                            return this.option.fill
                        }
                        constructor(a, b) {
                            this.option = a;
                            this.id =
                                b
                        }
                    },
                    l2b = class {
                        static A(a) {
                            P(a, {
                                options: z4,
                                gf: z4,
                                WR: z4,
                                text: z4,
                                KMa: z4({
                                    equals: N2b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.KMa.map((a, b) => new a3b(a, b))
                        }
                        get gf() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get WR() {
                            var a;
                            return (a = this.options.find(b => b.id === this.gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.uo.eA
                        }
                        get KMa() {
                            var a, b;
                            __c.C(((a = this.uo.Po) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.uo.Po) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (l2b.A(this), "select")
                        }
                    },
                    m2b = class {
                        static A(a) {
                            P(a, {
                                vM: z4
                            })
                        }
                        get text() {
                            return this.vM ? this.vM.text : ""
                        }
                        get user() {
                            return this.vM ? this.vM.user : ""
                        }
                        get brand() {
                            return this.vM ? this.vM.brand : ""
                        }
                        get vM() {
                            if (this.uo.pk.type !== 9) return __c.C(this.uo.pk.type === 7), this.uo.pk ? this.uo.pk.value[0] : void 0
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (m2b.A(this), "mention")
                        }
                    },
                    n2b = class {
                        static A(a) {
                            P(a, {
                                A_: z4
                            })
                        }
                        get text() {
                            return this.A_ ? this.A_.embed.text : ""
                        }
                        get url() {
                            return this.A_ ?
                                this.A_.embed.url : ""
                        }
                        get A_() {
                            if (this.uo.pk.type !== 9) return __c.C(this.uo.pk.type === 8), this.uo.pk ? this.uo.pk.value[0] : void 0
                        }
                        constructor(a) {
                            this.uo = a;
                            this.type = (n2b.A(this), "embed")
                        }
                    };
                var b3b = class {
                    Vpa(a) {
                        this.Vla.Vpa(a)
                    }
                    O4(a, b) {
                        this.Vla.O4(a, b)
                    }
                    V_(a) {
                        return this.Vla.V_(a)
                    }
                    Spa(a) {
                        this.kLa.Spa(a)
                    }
                    constructor(a, b, c, d) {
                        this.Vla = a;
                        this.kLa = b;
                        this.Qa = c;
                        this.Ct = d;
                        this.ZCa = new __c.$yb;
                        this.Ueb = e => __c.hLa(this.ZCa, e)
                    }
                };
                var v2b = P2b(void 0);
                var c3b = Number.parseInt("300ms", 10),
                    d3b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    e3b = K4(function({
                        Dr: a = !1,
                        children: b,
                        keyFrame: c,
                        p_a: d,
                        gJa: e = "hidden",
                        gLa: f = "hidden",
                        ariaLive: g,
                        bQa: h,
                        hHb: k = "none"
                    }) {
                        a = __c.Db() && !a;
                        return z2b({
                            children: b,
                            keyFrame: c,
                            p_a: d,
                            ariaLive: g,
                            gJa: e,
                            gLa: f,
                            bQa: h,
                            f7a: a ? c3b : 0,
                            Ybb: C4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            nvb: d3b
                        })
                    });
                var f3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var g3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var h3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var i3b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var j3b = K4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.WR,
                            f = a.ebb,
                            g = a.z5a,
                            h = a.$5a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = C4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return T2b("span", {
                            className: C4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [B4("span", {
                                className: C4("_2Lr6pQ", p),
                                children: B4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), T2b("span", {
                                className: C4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, B4("span", {
                                    className: C4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? B4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    D2b = K4(a => {
                        const b = a.backgroundColor,
                            c = a.Lq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return B4(e3b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? B4(__c.tNb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Lq: c,
                                borderColor: c ? void 0 : b
                            }) : B4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: i3b
                                }
                            })
                        })
                    }),
                    E2b = K4(a => {
                        const b = a.icon;
                        a = a.Oib;
                        return B4(e3b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? B4("span", {
                                className: "_tFJqA",
                                children: B4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : B4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? h3b : g3b
                                }
                            })
                        })
                    }),
                    F2b = K4(() => B4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: f3b
                        }
                    })),
                    H2b = K4(({
                        selected: a
                    }) => B4("div", {
                        className: C4("whph4A", {
                            zgzjww: a
                        }),
                        children: B4(__c.mL, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    k3b = M4(a => {
                        const {
                            Ee: b,
                            PXa: c,
                            uwa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            mp: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Qa(b.url) : void 0,
                            [l, m] = A2b(!1),
                            n = D4(t => m(E4(t)), [m]),
                            p = D4(t => m(!E4(t)), [m]),
                            q = D4(t => {
                                m(E4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = D4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        B2b(() => {
                            G4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Vpa(b.user);
                                        break;
                                    case "embed":
                                        d.Spa(b.url)
                                }
                            })
                        }, [b, d]);
                        R2b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return B4(j3b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            ebb: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: C2b(b),
                            WR: b.WR,
                            z5a: G2b(b, d),
                            $5a: I2b(b, {
                                PXa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var l3b = __c.L(() => ({
                    PHb: __c.vM(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    iwb: __c.uM(1)
                }));
                var m3b = class {
                        static A(a) {
                            P(a, {
                                $P: O2b.shallow,
                                ZLa: F4
                            })
                        }
                        V_(a) {
                            return this.mHa.V_(a)
                        }
                        Vpa(a) {
                            this.YCa.has(a) || this.$P.has(a) || (this.$P.add(a), this.Gab())
                        }
                        O4(a, b) {
                            this.YCa.has(a) || (this.YCa.set(a, b), this.$P.delete(a), K2b(this.mHa, a, b))
                        }
                        async ZLa() {
                            if (this.$P.size !== 0) {
                                var a = [...this.$P.values()];
                                this.$P.clear();
                                if (this.nHa) {
                                    var b = await this.nHa;
                                    await Promise.all(J2b(a).map(async c => {
                                        const d = new l3b({
                                                iwb: c
                                            }),
                                            {
                                                HAb: e
                                            } = await b.dGb(d);
                                        G4(() => c.forEach(f => this.O4(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.O4(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.nHa = a;
                            this.YCa = (m3b.A(this), new I4);
                            this.$P = new Set;
                            this.mHa = new n3b;
                            this.Gab = __c.Yc(() => this.ZLa(), 200);
                            G4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.O4(d, c))
                            })
                        }
                    },
                    n3b = class {
                        V_(a) {
                            return this.E6.get(a)
                        }
                        constructor() {
                            this.E6 = new I4
                        }
                    };
                var L2b = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    IXa: __c.qM("revision", 5),
                    version: __c.qM("version", 2),
                    wHb: __c.qM("imagesetsLimit", 6)
                }));
                var o3b = class {
                    static A(a) {
                        P(a, {
                            Cdb: F4
                        })
                    }
                    async Cdb(a) {
                        if (this.Fg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await M2b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Fg = a;
                        this.D0a = (o3b.A(this), new I4);
                        this.promises = new Map
                    }
                };
                var p3b = class {
                    static A(a) {
                        P(a, {
                            d_: O2b.shallow
                        })
                    }
                    async Spa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.Ct) === null || d === void 0 ? void 0 : d.a8(a));
                            c = e === null || e === void 0 ? void 0 : e.Bdb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = F4(() => this.d_.set(a, c)), b.onerror = F4(() => this.d_.set(a, void 0))) : G4(() => this.d_.set(a, void 0))
                    }
                    constructor(a) {
                        this.Ct = a;
                        this.d_ = (p3b.A(this), new Map)
                    }
                };
                __c.RHa = {
                    Lhb: function(a) {
                        const b = a.document,
                            c = a.Fg,
                            d = a.Qa,
                            e = a.Ct;
                        var f = a.t8;
                        const g = a.hd,
                            h = a.yf,
                            k = a.jz,
                            l = a.TW;
                        a = a.IHb;
                        f = new m3b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new p3b(e);
                        new o3b(c);
                        const m = new b3b(f, a, d, e),
                            n = p2b(l, b);
                        g.Wp.tka = M4(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = A4(() => $2b(q.Ee), [q.Ee]);
                            return B4(k3b, {
                                Ee: t,
                                uwa: m,
                                measureRef: r
                            })
                        });
                        const p = M4(({
                            context: q,
                            mp: r
                        }) => {
                            const t = A4(() => __c.D(n(q.container)), [q]);
                            R2b(r, [r, q.container.column.width]);
                            return B4(k3b, {
                                Ee: t,
                                uwa: m,
                                mp: r
                            })
                        });
                        k.vFa = ({
                                context: q,
                                mp: r
                            }) =>
                            ({
                                type: "react",
                                node: B4(p, {
                                    context: q,
                                    mp: r
                                })
                            });
                        h && (h.Sja = Q2b(() => __webpack_require__.me(365475).then(() => __c.h2b).then(({
                            K$a: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            uwa: m
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/d3ed7f0afba2d201.js.map