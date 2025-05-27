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
                var i2b = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : h2b(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    o2b = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    Ee: A4,
                                    hla: A4
                                })
                            }
                            get Ee() {
                                switch (this.hla) {
                                    case "date":
                                        return new j2b(this.xn, b.language || "en-AU");
                                    case "select":
                                        return new k2b(this.xn);
                                    case "mention":
                                        return new l2b(this.xn);
                                    case "embed":
                                        return new m2b(this.xn);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.hla);
                                }
                            }
                            get hla() {
                                var d;
                                return (d = this.xn.Po) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.xn = (c.A(this), void 0);
                                this.xn = __c.D(a.Gv(d.sheet, d.na, d.column))
                            }
                        }
                        return n2b(d => (new c(d)).Ee)
                    },
                    q2b = function() {
                        const a = B4(() => new Map, []);
                        return {
                            Cfb: b => {
                                if (a.has(b)) return __c.D(a.get(b));
                                const c = p2b();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    r2b = function(a, b) {
                        return B4(() => {
                            const c = new Map;
                            return d => {
                                if (c.has(d)) return __c.D(c.get(d));
                                const e = a(d);
                                c.set(d, e);
                                return e
                            }
                        }, b)
                    },
                    y2b = function({
                        children: a,
                        keyFrame: b,
                        n_a: c,
                        ariaLive: d,
                        bQa: e = !1,
                        d7a: f,
                        Gna: g,
                        Wbb: h,
                        ADb: k,
                        gJa: l,
                        gLa: m,
                        yDb: n,
                        kvb: p
                    }) {
                        const {
                            Cfb: q
                        } = q2b(), {
                            Ceb: r,
                            uqb: t
                        } = s2b(b, a), v = r2b(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return C4("div", {
                            className: D4(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: C4("div", {
                                className: D4("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => C4(t2b, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => C4(u2b.Provider, {
                                        value: y,
                                        children: C4("div", {
                                            className: D4("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === v2b || y === w2b || y === x2b,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && C4(t2b, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => C4(u2b.Provider, {
                                        value: u,
                                        children: C4("div", {
                                            className: D4("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === v2b || u === w2b || u === x2b,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    s2b = function(a,
                        b) {
                        const [c, d] = z2b(() => [{
                            key: a,
                            element: b
                        }]);
                        A2b(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = E4(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            Ceb: c,
                            uqb: e
                        }
                    },
                    B2b = function(a) {
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
                    F2b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return C4(C2b, {
                                    Lq: a.user ? b.V_(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.Seb(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.kLa.d_.get(a.url);
                                return C4(D2b, {
                                    icon: a,
                                    Mib: c
                                });
                            case "date":
                                return a.text ? void 0 : C4(E2b, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    H2b = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return C4(G2b, {
                                    selected: !!b.NXa
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    F4 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key === "Meta" || ["91",
                            "224"
                        ].includes(a.code) : !1
                    },
                    I2b = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    J2b = function(a, b, c) {
                        if (c) {
                            var d = i2b(c.images, "medium"),
                                e = i2b(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = G4(() => a.E6.set(b, e));
                                f.onerror = G4(() => a.E6.set(b, void 0));
                                !f.complete && c.complete ? a.E6.set(b, d) : c.src = ""
                            }
                        } else a.E6.set(b, void 0)
                    },
                    L2b = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Fg ? a.Fg.xGb(new K2b({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Hf.content.title;
                                        h ? (H4(() => a.B0a.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        H4(() => a.B0a.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    h2b = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.cy * __c.oNb[a],
                    I4 = __webpack_require__(519427),
                    G4 = I4.action,
                    M2b = I4.comparer,
                    A4 = I4.computed,
                    N2b = I4.observable,
                    J4 = I4.ObservableMap,
                    H4 = I4.runInAction;
                var n2b = __webpack_require__(635872).Om;
                var K4 = __webpack_require__(875604),
                    O2b = K4.createContext,
                    p2b = K4.createRef,
                    P2b = K4.lazy,
                    L4 = K4.memo,
                    E4 = K4.useCallback,
                    A2b = K4.useEffect,
                    Q2b = K4.useLayoutEffect,
                    B4 = K4.useMemo,
                    z2b = K4.useState;
                var R2b = __webpack_require__(443763),
                    C4 = R2b.jsx,
                    S2b = R2b.jsxs;
                var T2b = __webpack_require__,
                    U2b = T2b(993864),
                    D4 = T2b.n_x(U2b)();
                var t2b = __webpack_require__(460876).Z;
                var M4 = __webpack_require__(223826),
                    x2b = M4.Wj,
                    v2b = M4.Ix,
                    w2b = M4.$r;
                var N4 = __webpack_require__(446474).Pi;
                var V2b = class {
                        static A(a) {
                            P(a, {
                                text: A4,
                                user: A4,
                                brand: A4
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
                            this.type = (V2b.A(this), "mention")
                        }
                    },
                    W2b = class {
                        static A(a) {
                            P(a, {
                                text: A4,
                                url: A4
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
                            this.type = (W2b.A(this), "embed")
                        }
                    },
                    X2b = class {
                        static A(a) {
                            P(a, {
                                text: A4,
                                language: A4,
                                style: A4,
                                date: A4
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
                            this.type = (X2b.A(this), "date")
                        }
                    },
                    Y2b = class {
                        static A(a) {
                            P(a, {
                                text: A4,
                                options: A4,
                                gf: A4,
                                YR: A4
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
                        get YR() {
                            var a;
                            return (a = this.Ee.options.first(b => b.id === this.Ee.gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.Ee = a;
                            this.type = (Y2b.A(this), "select")
                        }
                    },
                    Z2b = n2b(a => {
                        switch (a.type) {
                            case "mention":
                                return new V2b(a);
                            case "embed":
                                return new W2b(a);
                            case "date":
                                return new X2b(a);
                            case "select":
                                return new Y2b(a);
                            default:
                                throw new E(a);
                        }
                    });
                var j2b = class {
                        static A(a) {
                            P(a, {
                                style: A4,
                                date: A4,
                                text: A4
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.so.pk.type === 2 ? this.so.pk.date : void 0) || (a = new Date, a = __c.xz(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                Kgb: a.getHours(),
                                Glb: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.so.dA
                        }
                        constructor(a, b) {
                            this.so = a;
                            this.language = b;
                            this.type = (j2b.A(this), "date")
                        }
                    },
                    $2b = class {
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
                    k2b = class {
                        static A(a) {
                            P(a, {
                                options: A4,
                                gf: A4,
                                YR: A4,
                                text: A4,
                                KMa: A4({
                                    equals: M2b.shallow
                                })
                            })
                        }
                        get options() {
                            return this.KMa.map((a, b) => new $2b(a, b))
                        }
                        get gf() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get YR() {
                            var a;
                            return (a = this.options.find(b => b.id === this.gf)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.so.dA
                        }
                        get KMa() {
                            var a, b;
                            __c.C(((a = this.so.Po) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.so.Po) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.so = a;
                            this.type = (k2b.A(this), "select")
                        }
                    },
                    l2b = class {
                        static A(a) {
                            P(a, {
                                wM: A4
                            })
                        }
                        get text() {
                            return this.wM ? this.wM.text : ""
                        }
                        get user() {
                            return this.wM ? this.wM.user : ""
                        }
                        get brand() {
                            return this.wM ? this.wM.brand : ""
                        }
                        get wM() {
                            if (this.so.pk.type !== 9) return __c.C(this.so.pk.type === 7), this.so.pk ? this.so.pk.value[0] : void 0
                        }
                        constructor(a) {
                            this.so = a;
                            this.type = (l2b.A(this), "mention")
                        }
                    },
                    m2b = class {
                        static A(a) {
                            P(a, {
                                A_: A4
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
                            if (this.so.pk.type !== 9) return __c.C(this.so.pk.type === 8), this.so.pk ? this.so.pk.value[0] : void 0
                        }
                        constructor(a) {
                            this.so = a;
                            this.type = (m2b.A(this), "embed")
                        }
                    };
                var a3b = class {
                    Xpa(a) {
                        this.Xla.Xpa(a)
                    }
                    O4(a, b) {
                        this.Xla.O4(a, b)
                    }
                    V_(a) {
                        return this.Xla.V_(a)
                    }
                    Upa(a) {
                        this.kLa.Upa(a)
                    }
                    constructor(a, b, c, d) {
                        this.Xla = a;
                        this.kLa = b;
                        this.Qa = c;
                        this.Ct = d;
                        this.$Ca = new __c.Zyb;
                        this.Seb = e => __c.gLa(this.$Ca, e)
                    }
                };
                var u2b = O2b(void 0);
                var b3b = Number.parseInt("300ms", 10),
                    c3b = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    d3b = L4(function({
                        Dr: a = !1,
                        children: b,
                        keyFrame: c,
                        n_a: d,
                        gJa: e = "hidden",
                        gLa: f = "hidden",
                        ariaLive: g,
                        bQa: h,
                        bHb: k = "none"
                    }) {
                        a = __c.Db() && !a;
                        return y2b({
                            children: b,
                            keyFrame: c,
                            n_a: d,
                            ariaLive: g,
                            gJa: e,
                            gLa: f,
                            bQa: h,
                            d7a: a ? b3b : 0,
                            Wbb: D4({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            kvb: c3b
                        })
                    });
                var e3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var f3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var g3b = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var h3b = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var i3b = L4(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.YR,
                            f = a.cbb,
                            g = a.x5a,
                            h = a.Y5a,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = D4({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return S2b("span", {
                            className: D4(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [C4("span", {
                                className: D4("_2Lr6pQ", p),
                                children: C4("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), S2b("span", {
                                className: D4("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, C4("span", {
                                    className: D4("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? C4("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    C2b = L4(a => {
                        const b = a.backgroundColor,
                            c = a.Lq;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return C4(d3b, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? C4(__c.sNb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Lq: c,
                                borderColor: c ? void 0 : b
                            }) : C4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: h3b
                                }
                            })
                        })
                    }),
                    D2b = L4(a => {
                        const b = a.icon;
                        a = a.Mib;
                        return C4(d3b, {
                            keyFrame: b ? "favicon" : "placeholder",
                            children: b ? C4("span", {
                                className: "_tFJqA",
                                children: C4("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : C4("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? g3b : f3b
                                }
                            })
                        })
                    }),
                    E2b = L4(() => C4("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: e3b
                        }
                    })),
                    G2b = L4(({
                        selected: a
                    }) => C4("div", {
                        className: D4("whph4A", {
                            zgzjww: a
                        }),
                        children: C4(__c.nL, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    j3b = N4(a => {
                        const {
                            Ee: b,
                            NXa: c,
                            vwa: d,
                            mode: e = "viewable",
                            measureRef: f,
                            mp: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Qa(b.url) : void 0,
                            [l, m] = z2b(!1),
                            n = E4(t => m(F4(t)), [m]),
                            p = E4(t => m(!F4(t)), [m]),
                            q = E4(t => {
                                m(F4(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = E4(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        A2b(() => {
                            H4(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.Xpa(b.user);
                                        break;
                                    case "embed":
                                        d.Upa(b.url)
                                }
                            })
                        }, [b, d]);
                        Q2b(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return C4(i3b, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            cbb: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: B2b(b),
                            YR: b.YR,
                            x5a: F2b(b, d),
                            Y5a: H2b(b, {
                                NXa: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var k3b = __c.L(() => ({
                    JHb: __c.wM(11),
                    mode: __c.F("A?", 1, "BY_USER_IDS"),
                    gwb: __c.vM(1)
                }));
                var l3b = class {
                        static A(a) {
                            P(a, {
                                bQ: N2b.shallow,
                                ZLa: G4
                            })
                        }
                        V_(a) {
                            return this.mHa.V_(a)
                        }
                        Xpa(a) {
                            this.ZCa.has(a) || this.bQ.has(a) || (this.bQ.add(a), this.Eab())
                        }
                        O4(a, b) {
                            this.ZCa.has(a) || (this.ZCa.set(a, b), this.bQ.delete(a), J2b(this.mHa, a, b))
                        }
                        async ZLa() {
                            if (this.bQ.size !== 0) {
                                var a = [...this.bQ.values()];
                                this.bQ.clear();
                                if (this.nHa) {
                                    var b = await this.nHa;
                                    await Promise.all(I2b(a).map(async c => {
                                        const d = new k3b({
                                                gwb: c
                                            }),
                                            {
                                                AAb: e
                                            } = await b.YFb(d);
                                        H4(() => c.forEach(f => this.O4(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.O4(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.nHa = a;
                            this.ZCa = (l3b.A(this), new J4);
                            this.bQ = new Set;
                            this.mHa = new m3b;
                            this.Eab = __c.Yc(() => this.ZLa(), 200);
                            H4(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.O4(d, c))
                            })
                        }
                    },
                    m3b = class {
                        V_(a) {
                            return this.E6.get(a)
                        }
                        constructor() {
                            this.E6 = new J4
                        }
                    };
                var K2b = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Y("extension", 3),
                    GXa: __c.rM("revision", 5),
                    version: __c.rM("version", 2),
                    qHb: __c.rM("imagesetsLimit", 6)
                }));
                var n3b = class {
                    static A(a) {
                        P(a, {
                            Adb: G4
                        })
                    }
                    async Adb(a) {
                        if (this.Fg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await L2b(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Fg = a;
                        this.B0a = (n3b.A(this), new J4);
                        this.promises = new Map
                    }
                };
                var o3b = class {
                    static A(a) {
                        P(a, {
                            d_: N2b.shallow
                        })
                    }
                    async Upa(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.Ct) === null || d === void 0 ? void 0 : d.a8(a));
                            c = e === null || e === void 0 ? void 0 : e.zdb
                        } catch (e) {}
                        c ? (b.src = c, b.onload = G4(() => this.d_.set(a, c)), b.onerror = G4(() => this.d_.set(a, void 0))) : H4(() => this.d_.set(a, void 0))
                    }
                    constructor(a) {
                        this.Ct = a;
                        this.d_ = (o3b.A(this), new Map)
                    }
                };
                __c.QHa = {
                    Jhb: function(a) {
                        const b = a.document,
                            c = a.Fg,
                            d = a.Qa,
                            e = a.Ct;
                        var f = a.t8;
                        const g = a.hd,
                            h = a.yf,
                            k = a.iz,
                            l = a.TW;
                        a = a.CHb;
                        f = new l3b(a === null || a === void 0 ? void 0 : a(), f);
                        a = new o3b(e);
                        new n3b(c);
                        const m = new a3b(f, a, d, e),
                            n = o2b(l, b);
                        g.Wp.uka = N4(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = B4(() => Z2b(q.Ee), [q.Ee]);
                            return C4(j3b, {
                                Ee: t,
                                vwa: m,
                                measureRef: r
                            })
                        });
                        const p = N4(({
                            context: q,
                            mp: r
                        }) => {
                            const t = B4(() => __c.D(n(q.container)), [q]);
                            Q2b(r, [r, q.container.column.width]);
                            return C4(j3b, {
                                Ee: t,
                                vwa: m,
                                mp: r
                            })
                        });
                        k.wFa = ({
                                context: q,
                                mp: r
                            }) =>
                            ({
                                type: "react",
                                node: C4(p, {
                                    context: q,
                                    mp: r
                                })
                            });
                        h && (h.Tja = P2b(() => __webpack_require__.me(365475).then(() => __c.g2b).then(({
                            I$a: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            vwa: m
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/d7e746b07afba6ec.js.map