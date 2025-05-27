(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [60205], {

        /***/
        994944: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var P = __c.P;
                var lEb = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    wd: s5,
                                    q5: s5
                                })
                            }
                            get wd() {
                                switch (this.q5) {
                                    case "date":
                                        return new gEb(this.fk, b.language || "en-AU");
                                    case "select":
                                        return new hEb(this.fk);
                                    case "mention":
                                        return new iEb(this.fk);
                                    case "embed":
                                        return new jEb(this.fk);
                                    case "plain_number":
                                    case "currency":
                                    case "percentage":
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(this.q5);
                                }
                            }
                            get q5() {
                                var d;
                                return (d = this.fk.jl) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.fk = (c.A(this), void 0);
                                this.fk = __c.C(a.Mq(d.sheet,
                                    d.ea, d.column))
                            }
                        }
                        return kEb(d => (new c(d)).wd)
                    },
                    mEb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.iE(a),
                                d = c instanceof __c.jE ? c.uz() : c;
                            return __c.hx(b, e => {
                                e = __c.iE(e);
                                e = e instanceof __c.jE ? __c.aL(e, d) : e;
                                return Math.abs(__c.eL(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    nEb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.uy(b)[0]).join("")
                    },
                    qEb = function(a = "") {
                        a = oEb(a);
                        a = Math.floor(a() * pEb.length);
                        return pEb[a]
                    },
                    sEb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : rEb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    uEb = function() {
                        const a = t5(() => new Map, []);
                        return {
                            bNa: b => {
                                if (a.has(b)) return __c.C(a.get(b));
                                const c = tEb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    vEb = function(a, b) {
                        return t5(() => {
                                const c = new Map;
                                return d => {
                                    if (c.has(d)) return __c.C(c.get(d));
                                    const e = a(d);
                                    c.set(d, e);
                                    return e
                                }
                            },
                            b)
                    },
                    CEb = function({
                        children: a,
                        keyFrame: b,
                        nAa: c,
                        ariaLive: d,
                        msa: e = !1,
                        PFa: f,
                        f7: g,
                        hKa: h,
                        X3a: k,
                        Oma: l,
                        soa: m,
                        V3a: n,
                        VXa: p
                    }) {
                        const {
                            bNa: q
                        } = uEb(), {
                            jMa: r,
                            vUa: t
                        } = wEb(b, a), u = vEb(v => () => {
                            (e === !1 || typeof e === "function" && !e(v)) && t(v)
                        }, [t, e]);
                        return u5("div", {
                            className: v5(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: u5("div", {
                                className: v5("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: v,
                                    element: x
                                }) => u5(xEb, { in: v === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(v),
                                    onExited: u(v),
                                    children: y => u5(yEb.Provider, {
                                        value: y,
                                        children: u5("div", {
                                            className: v5("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(v),
                                            "aria-hidden": y === zEb || y === AEb || y === BEb,
                                            children: v === b ? a : x
                                        })
                                    })
                                }, v)), r.every(v => v.key !== b) && u5(xEb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : u(b),
                                    children: v => u5(yEb.Provider, {
                                        value: v,
                                        children: u5("div", {
                                            className: v5("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": v === zEb || v === AEb || v === BEb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    wEb = function(a, b) {
                        const [c, d] = DEb(() => [{
                            key: a,
                            element: b
                        }]);
                        EEb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = w5(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            jMa: c,
                            vUa: e
                        }
                    },
                    FEb = function(a) {
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
                    JEb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return u5(GEb, {
                                    Fp: a.user ? b.iP(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.yMa(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.woa.GO.get(a.url);
                                return u5(HEb, {
                                    icon: a,
                                    DPa: c
                                });
                            case "date":
                                return a.text ? void 0 : u5(IEb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    LEb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return u5(KEb, {
                                    selected: !!b.pya
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    x5 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key ===
                            "Meta" || ["91", "224"].includes(a.code) : !1
                    },
                    MEb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    NEb = function(a, b, c) {
                        if (c) {
                            var d = sEb(c.images, "medium"),
                                e = sEb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = y5(() => a.OT.set(b, e));
                                f.onerror = y5(() => a.OT.set(b, void 0));
                                !f.complete && c.complete ? a.OT.set(b, d) : c.src = ""
                            }
                        } else a.OT.set(b, void 0)
                    },
                    PEb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Vg ? a.Vg.v6a(new OEb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Cj.content.title;
                                        h ? (z5(() => a.hBa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        z5(() => a.hBa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    A5 = __webpack_require__(519427),
                    y5 = A5.action,
                    QEb = A5.comparer,
                    s5 = A5.computed,
                    REb = A5.observable,
                    B5 = A5.ObservableMap,
                    z5 = A5.runInAction;
                var kEb = __webpack_require__(635872).Om;
                var C5 = __webpack_require__(875604),
                    SEb = C5.createContext,
                    tEb = C5.createRef,
                    TEb = C5.lazy,
                    D5 = C5.memo,
                    w5 = C5.useCallback,
                    EEb = C5.useEffect,
                    UEb = C5.useId,
                    VEb = C5.useLayoutEffect,
                    t5 = C5.useMemo,
                    DEb = C5.useState;
                var oEb = __webpack_require__(503216);
                var WEb = __webpack_require__(443763),
                    u5 = WEb.jsx,
                    E5 = WEb.jsxs;
                var XEb = __webpack_require__,
                    YEb = XEb(993864),
                    v5 = XEb.n_x(YEb)();
                var xEb = __webpack_require__(460876).Z;
                var F5 = __webpack_require__(223826),
                    BEb = F5.Wj,
                    zEb = F5.Ix,
                    AEb = F5.$r;
                var G5 = __webpack_require__(446474).Pi;
                var ZEb = class {
                        static A(a) {
                            P(a, {
                                text: s5,
                                user: s5,
                                brand: s5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get user() {
                            return this.wd.user
                        }
                        get brand() {
                            return this.wd.brand
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (ZEb.A(this), "mention")
                        }
                    },
                    $Eb = class {
                        static A(a) {
                            P(a, {
                                text: s5,
                                url: s5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get url() {
                            return this.wd.url
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = ($Eb.A(this), "embed")
                        }
                    },
                    aFb = class {
                        static A(a) {
                            P(a, {
                                text: s5,
                                language: s5,
                                style: s5,
                                date: s5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get language() {
                            return this.wd.language
                        }
                        get style() {
                            return this.wd.style
                        }
                        get date() {
                            return this.wd.date
                        }
                        constructor(a) {
                            this.wd =
                                a;
                            this.type = (aFb.A(this), "date")
                        }
                    },
                    bFb = class {
                        static A(a) {
                            P(a, {
                                text: s5,
                                options: s5,
                                yd: s5,
                                MI: s5
                            })
                        }
                        get text() {
                            return this.wd.text
                        }
                        get options() {
                            return this.wd.options.map(a => a)
                        }
                        get yd() {
                            return this.wd.yd
                        }
                        get MI() {
                            var a;
                            return (a = this.wd.options.first(b => b.id === this.wd.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (bFb.A(this), "select")
                        }
                    },
                    cFb = kEb(a => {
                        switch (a.type) {
                            case "mention":
                                return new ZEb(a);
                            case "embed":
                                return new $Eb(a);
                            case "date":
                                return new aFb(a);
                            case "select":
                                return new bFb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var gEb = class {
                        static A(a) {
                            P(a, {
                                style: s5,
                                date: s5,
                                text: s5
                            })
                        }
                        get style() {
                            return 2
                        }
                        get date() {
                            var a;
                            (a = this.Rk.Zh.type === 2 ? this.Rk.Zh.date : void 0) || (a = new Date, a = __c.qB(a), a = {
                                year: a.getFullYear(),
                                month: a.getMonth() + 1,
                                day: a.getDate(),
                                SNa: a.getHours(),
                                QRa: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Rk.ou
                        }
                        constructor(a, b) {
                            this.Rk = a;
                            this.language = b;
                            this.type = (gEb.A(this), "date")
                        }
                    },
                    dFb = class {
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
                    hEb = class {
                        static A(a) {
                            P(a, {
                                options: s5,
                                yd: s5,
                                MI: s5,
                                text: s5,
                                Upa: s5({
                                    equals: QEb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.Upa.map((a, b) => new dFb(a, b))
                        }
                        get yd() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get MI() {
                            var a;
                            return (a = this.options.find(b => b.id === this.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Rk.ou
                        }
                        get Upa() {
                            var a, b;
                            __c.A(((a = this.Rk.jl) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Rk.jl) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Rk = a;
                            this.type = (hEb.A(this), "select")
                        }
                    },
                    iEb = class {
                        static A(a) {
                            P(a, {
                                BE: s5
                            })
                        }
                        get text() {
                            return this.BE ? this.BE.text : ""
                        }
                        get user() {
                            return this.BE ? this.BE.user : ""
                        }
                        get brand() {
                            return this.BE ? this.BE.brand : ""
                        }
                        get BE() {
                            if (this.Rk.Zh.type !== 9) return __c.A(this.Rk.Zh.type === 7), this.Rk.Zh ? this.Rk.Zh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Rk = a;
                            this.type = (iEb.A(this), "mention")
                        }
                    },
                    jEb = class {
                        static A(a) {
                            P(a, {
                                VO: s5
                            })
                        }
                        get text() {
                            return this.VO ? this.VO.embed.text : ""
                        }
                        get url() {
                            return this.VO ?
                                this.VO.embed.url : ""
                        }
                        get VO() {
                            if (this.Rk.Zh.type !== 9) return __c.A(this.Rk.Zh.type === 8), this.Rk.Zh ? this.Rk.Zh.value[0] : void 0
                        }
                        constructor(a) {
                            this.Rk = a;
                            this.type = (jEb.A(this), "embed")
                        }
                    };
                var eFb = class {
                    N8(a) {
                        this.R5.N8(a)
                    }
                    FS(a, b) {
                        this.R5.FS(a, b)
                    }
                    iP(a) {
                        return this.R5.iP(a)
                    }
                    L8(a) {
                        this.woa.L8(a)
                    }
                    constructor(a, b, c, d) {
                        this.R5 = a;
                        this.woa = b;
                        this.Ja = c;
                        this.us = d;
                        this.zha = new __c.ndb;
                        this.yMa = e => __c.txa(this.zha, e)
                    }
                };
                var fFb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var pEb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                        try {
                            return __c.ZD(__c.dE(a))
                        } catch (b) {
                            return "#8e8e8e"
                        }
                    }),
                    rEb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.ql * fFb[a];
                var gFb = D5(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        ala: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.iE(d);
                        var n = a instanceof __c.jE ? __c.lE(a) : __c.ZD(a)
                    } else n = e ? qEb(e) : "#8e8e8e";
                    var p = UEb();
                    switch (l) {
                        case "circle":
                            a = u5("defs", {
                                children: u5("clipPath", {
                                    id: p,
                                    children: u5("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = u5("defs", {
                                children: u5("clipPath", {
                                    id: p,
                                    children: u5("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = u5("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: v5("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = u5("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: v5("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    n = mEb(n);
                    return u5("span", {
                        role: f,
                        "aria-label": g,
                        className: v5("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: E5("svg", {
                            className: h,
                            style: k,
                            children: [a, p, u5("text", {
                                x: "50%",
                                y: "50%",
                                "aria-hidden": "true",
                                textAnchor: "middle",
                                fill: n,
                                fontWeight: "500",
                                fontSize: "50%",
                                dominantBaseline: "central",
                                letterSpacing: "0.01rem",
                                dy: "-0.04em",
                                children: nEb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var hFb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var iFb = ({
                    borderColor: a,
                    Iwa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => u5("span", {
                    className: v5(d, {
                        JwH6AA: a,
                        QJpRHw: !a
                    }),
                    style: {
                        backgroundImage: `url(${b})`,
                        borderColor: a && `${a}`,
                        ...e
                    },
                    role: f,
                    "aria-label": f === "img" ? c : void 0,
                    ...g
                });
                var jFb = ({
                    name: a,
                    i1a: b,
                    ariaLabel: c,
                    ala: d,
                    backgroundColor: e,
                    borderColor: f,
                    Fp: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = v5("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? u5(iFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Iwa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? u5(gFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        ala: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : u5(iFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Iwa: hFb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                var kFb = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.116 12.366a1.25 1.25 0 0 1 1.768 0l5.586 5.586a.75.75 0 0 0 1.06 0l5.586-5.586a1.25 1.25 0 0 1 1.768 1.768l-5.586 5.586a3.25 3.25 0 0 1-4.596 0l-5.586-5.586a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"/></svg>';
                var lFb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M10.964 5.972 8.177 8.759a.25.25 0 0 1-.354 0L5.036 5.972a.75.75 0 1 0-1.06 1.06L6.762 9.82a1.75 1.75 0 0 0 2.475 0l2.787-2.788a.75.75 0 1 0-1.06-1.06"/></svg>';
                var mFb = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"/></svg>';
                var nFb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m16.384 9.225-4.207 4.207a.25.25 0 0 1-.353 0L7.623 9.224a.75.75 0 0 0-1.059.002.75.75 0 0 0-.002 1.059l4.201 4.21c.681.68 1.787.678 2.47-.005l4.207-4.207a.75.75 0 0 0 .002-1.059.75.75 0 0 0-1.058.002"/></svg>';
                var oFb = __c.zS({
                    aq: mFb,
                    small: lFb,
                    medium: nFb,
                    nB: kFb
                });
                var yEb = SEb(void 0);
                var pFb = Number.parseInt("300ms", 10),
                    qFb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    rFb = D5(function({
                        hE: a = !1,
                        children: b,
                        keyFrame: c,
                        nAa: d,
                        Oma: e = "hidden",
                        soa: f = "hidden",
                        ariaLive: g,
                        msa: h,
                        X6a: k = "none"
                    }) {
                        a = __c.ub().Kc && !a;
                        return CEb({
                            children: b,
                            keyFrame: c,
                            nAa: d,
                            ariaLive: g,
                            Oma: e,
                            soa: f,
                            msa: h,
                            PFa: a ? pFb : 0,
                            hKa: v5({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            VXa: qFb
                        })
                    });
                var sFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var tFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var uFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var vFb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var wFb = D5(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.MI,
                            f = a.DJa,
                            g = a.EEa,
                            h = a.SEa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = v5({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return E5("span", {
                            className: v5(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [u5("span", {
                                className: v5("_2Lr6pQ", p),
                                children: u5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), E5("span", {
                                className: v5("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, u5("span", {
                                    className: v5("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? u5("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    GEb = D5(a => {
                        const b = a.backgroundColor,
                            c = a.Fp;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return u5(rFb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? u5(jFb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Fp: c,
                                borderColor: c ? void 0 : b
                            }) : u5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: vFb
                                }
                            })
                        })
                    }),
                    HEb = D5(a => {
                        const b = a.icon;
                        a = a.DPa;
                        return u5(rFb, {
                            keyFrame: b ?
                                "favicon" : "placeholder",
                            children: b ? u5("span", {
                                className: "_tFJqA",
                                children: u5("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : u5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? uFb : tFb
                                }
                            })
                        })
                    }),
                    IEb = D5(() => u5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: sFb
                        }
                    })),
                    KEb = D5(({
                        selected: a
                    }) => u5("div", {
                        className: v5("whph4A", {
                            zgzjww: a
                        }),
                        children: u5(oFb, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    xFb = G5(a => {
                        const {
                            wd: b,
                            pya: c,
                            kca: d,
                            mode: e = "viewable",
                            measureRef: f,
                            El: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Ja(b.url) : void 0,
                            [l, m] = DEb(!1),
                            n = w5(t => m(x5(t)), [m]),
                            p = w5(t => m(!x5(t)), [m]),
                            q = w5(t => {
                                m(x5(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = w5(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        EEb(() => {
                            z5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.N8(b.user);
                                        break;
                                    case "embed":
                                        d.L8(b.url)
                                }
                            })
                        }, [b, d]);
                        VEb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return u5(wFb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            DJa: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: FEb(b),
                            MI: b.MI,
                            EEa: JEb(b, d),
                            SEa: LEb(b, {
                                pya: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var yFb = __c.L(() => ({
                    w7a: __c.gO(11),
                    mode: __c.I("A?", 1, "BY_USER_IDS"),
                    QYa: __c.fO(1)
                }));
                var zFb = class {
                        static A(a) {
                            P(a, {
                                xH: REb.shallow,
                                ipa: y5
                            })
                        }
                        iP(a) {
                            return this.Wka.iP(a)
                        }
                        N8(a) {
                            this.yha.has(a) || this.xH.has(a) || (this.xH.add(a), this.kJa())
                        }
                        FS(a, b) {
                            this.yha.has(a) || (this.yha.set(a, b), this.xH.delete(a), NEb(this.Wka, a, b))
                        }
                        async ipa() {
                            if (this.xH.size !== 0) {
                                var a = [...this.xH.values()];
                                this.xH.clear();
                                if (this.Yka) {
                                    var b = await this.Yka;
                                    await Promise.all(MEb(a).map(async c => {
                                        const d = new yFb({
                                                QYa: c
                                            }),
                                            {
                                                A1a: e
                                            } = await b.c6a(d);
                                        z5(() => c.forEach(f => this.FS(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.FS(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.Yka = a;
                            this.yha = (zFb.A(this), new B5);
                            this.xH = new Set;
                            this.Wka = new AFb;
                            this.kJa = __c.Oc(() => this.ipa(), 200);
                            z5(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.FS(d, c))
                            })
                        }
                    },
                    AFb = class {
                        iP(a) {
                            return this.OT.get(a)
                        }
                        constructor() {
                            this.OT = new B5
                        }
                    };
                var OEb = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Z("extension", 3),
                    iya: __c.bO("revision", 5),
                    version: __c.bO("version", 2),
                    d7a: __c.bO("imagesetsLimit", 6)
                }));
                var BFb = class {
                    static A(a) {
                        P(a, {
                            pLa: y5
                        })
                    }
                    async pLa(a) {
                        if (this.Vg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await PEb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Vg = a;
                        this.hBa = (BFb.A(this), new B5);
                        this.promises = new Map
                    }
                };
                var CFb = class {
                    static A(a) {
                        P(a, {
                            GO: REb.shallow
                        })
                    }
                    async L8(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.us) === null || d === void 0 ? void 0 : d.TU(a));
                            c = e === null || e === void 0 ? void 0 : e.oLa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = y5(() => this.GO.set(a, c)), b.onerror = y5(() => this.GO.set(a, void 0))) : z5(() => this.GO.set(a, void 0))
                    }
                    constructor(a) {
                        this.us = a;
                        this.GO = (CFb.A(this), new Map)
                    }
                };
                __c.Qta = {
                    NOa: function(a) {
                        const b = a.document,
                            c = a.Vg,
                            d = a.Ja,
                            e = a.us;
                        var f = a.Xka;
                        const g = a.te,
                            h = a.Pf,
                            k = a.dz,
                            l = a.o3;
                        a = a.q7a;
                        f = new zFb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new CFb(e);
                        new BFb(c);
                        const m = new eFb(f, a, d, e),
                            n = lEb(l, b);
                        g.om.L4 = G5(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = t5(() => cFb(q.wd), [q.wd]);
                            return u5(xFb, {
                                wd: t,
                                kca: m,
                                measureRef: r
                            })
                        });
                        const p = G5(({
                            context: q,
                            El: r
                        }) => {
                            const t = t5(() => __c.C(n(q.container)), [q]);
                            VEb(r, [r, q.container.column.width]);
                            return u5(xFb, {
                                wd: t,
                                kca: m,
                                El: r
                            })
                        });
                        k.Bja = ({
                                context: q,
                                El: r
                            }) =>
                            ({
                                type: "react",
                                node: u5(p, {
                                    context: q,
                                    El: r
                                })
                            });
                        h && (h.m4 = TEb(() => __webpack_require__.me(365475).then(() => __c.fEb).then(({
                            DIa: q
                        }) => ({
                            default: q()
                        }))));
                        return {
                            kca: m
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/811c08bbf54cdf5b.js.map