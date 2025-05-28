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
                var mEb = function(a, b) {
                        class c {
                            static A(d) {
                                P(d, {
                                    wd: r5,
                                    q5: r5
                                })
                            }
                            get wd() {
                                switch (this.q5) {
                                    case "date":
                                        return new hEb(this.fk, b.language || "en-AU");
                                    case "select":
                                        return new iEb(this.fk);
                                    case "mention":
                                        return new jEb(this.fk);
                                    case "embed":
                                        return new kEb(this.fk);
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
                                return (d = this.fk.kl) === null || d === void 0 ? void 0 : d.type
                            }
                            constructor(d) {
                                this.context = d;
                                this.fk = (c.A(this), void 0);
                                this.fk = __c.C(a.Mq(d.sheet,
                                    d.ea, d.column))
                            }
                        }
                        return lEb(d => (new c(d)).wd)
                    },
                    nEb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.iE(a),
                                d = c instanceof __c.jE ? c.vz() : c;
                            return __c.hx(b, e => {
                                e = __c.iE(e);
                                e = e instanceof __c.jE ? __c.$K(e, d) : e;
                                return Math.abs(__c.dL(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    oEb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.uy(b)[0]).join("")
                    },
                    rEb = function(a = "") {
                        a = pEb(a);
                        a = Math.floor(a() * qEb.length);
                        return qEb[a]
                    },
                    tEb = function(a, b = "medium") {
                        if (a !== null && a !== void 0 && a.length) {
                            var c = window.devicePixelRatio || 1,
                                d = (typeof b === "number" ? b : sEb(b)) * c;
                            return [...a].sort((e, f) => {
                                e = e.width;
                                f = f.width;
                                return e > d && f < d ? -1 : e < d && f > d ? 1 : Math.abs(e - d) - Math.abs(f - d)
                            })[0].url
                        }
                    },
                    vEb = function() {
                        const a = s5(() => new Map, []);
                        return {
                            dNa: b => {
                                if (a.has(b)) return __c.C(a.get(b));
                                const c = uEb();
                                a.set(b, c);
                                return c
                            }
                        }
                    },
                    wEb = function(a, b) {
                        return s5(() => {
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
                    DEb = function({
                        children: a,
                        keyFrame: b,
                        pAa: c,
                        ariaLive: d,
                        nsa: e = !1,
                        RFa: f,
                        e7: g,
                        jKa: h,
                        d4a: k,
                        Pma: l,
                        toa: m,
                        b4a: n,
                        XXa: p
                    }) {
                        const {
                            dNa: q
                        } = vEb(), {
                            lMa: r,
                            xUa: t
                        } = xEb(b, a), v = wEb(u => () => {
                            (e === !1 || typeof e === "function" && !e(u)) && t(u)
                        }, [t, e]);
                        return t5("div", {
                            className: u5(g, "_9GxJfQ", {
                                KwB0XQ: l === "hidden",
                                WV1Mmw: c === "fill-height",
                                _2uSJxw: c === "flex-grow"
                            }),
                            children: t5("div", {
                                className: u5("m2VaAA", h),
                                "aria-live": d,
                                style: k,
                                role: "region",
                                children: [...r.map(({
                                    key: u,
                                    element: x
                                }) => t5(yEb, { in: u === b,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(u),
                                    onExited: v(u),
                                    children: y => t5(zEb.Provider, {
                                        value: y,
                                        children: t5("div", {
                                            className: u5("KxXR9g", n, {
                                                KwB0XQ: m === "hidden"
                                            }),
                                            ref: q(u),
                                            "aria-hidden": y === AEb || y === BEb || y === CEb,
                                            children: u === b ? a : x
                                        })
                                    })
                                }, u)), r.every(u => u.key !== b) && t5(yEb, { in: !1,
                                    timeout: f,
                                    classNames: p,
                                    mountOnEnter: !0,
                                    unmountOnExit: !e,
                                    nodeRef: q(b),
                                    onExited: e ? void 0 : v(b),
                                    children: u => t5(zEb.Provider, {
                                        value: u,
                                        children: t5("div", {
                                            className: u5("KxXR9g", n),
                                            ref: q(b),
                                            "aria-hidden": u === AEb || u === BEb || u === CEb,
                                            children: a
                                        })
                                    })
                                }, b)]
                            })
                        })
                    },
                    xEb = function(a, b) {
                        const [c, d] = EEb(() => [{
                            key: a,
                            element: b
                        }]);
                        FEb(() => {
                            d(f => f.every(g => g.key !== a) ? f.concat({
                                key: a,
                                element: b
                            }) : f.map(g => g.key === a ? {
                                key: a,
                                element: b
                            } : g))
                        }, [a, b]);
                        const e = v5(f => {
                            d(g => g.filter(h => h.key !== f))
                        }, []);
                        return {
                            lMa: c,
                            xUa: e
                        }
                    },
                    GEb = function(a) {
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
                    KEb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                                return t5(HEb, {
                                    Fp: a.user ? b.iP(a.user) : void 0,
                                    text: a.text,
                                    backgroundColor: a.user ? b.AMa(a.user).background : void 0
                                });
                            case "embed":
                                const c = !a.url;
                                a = b.xoa.GO.get(a.url);
                                return t5(IEb, {
                                    icon: a,
                                    FPa: c
                                });
                            case "date":
                                return a.text ? void 0 : t5(JEb, {});
                            case "select":
                                break;
                            default:
                                throw new E(a);
                        }
                    },
                    MEb = function(a, b) {
                        switch (a.type) {
                            case "mention":
                            case "embed":
                            case "date":
                                break;
                            case "select":
                                return t5(LEb, {
                                    selected: !!b.rya
                                });
                            default:
                                throw new E(a);
                        }
                    },
                    w5 = function(a) {
                        return (/Mac/.test(navigator.platform) ? a.metaKey : a.ctrlKey) ? !0 : a instanceof KeyboardEvent ? a.key ===
                            "Meta" || ["91", "224"].includes(a.code) : !1
                    },
                    NEb = function(a) {
                        __c.w(!0, "chunkLength must be positive");
                        const b = [];
                        for (let c = 0; c < a.length; c += 50) b.push(a.slice(c, c + 50));
                        return b
                    },
                    OEb = function(a, b, c) {
                        if (c) {
                            var d = tEb(c.images, "medium"),
                                e = tEb(c.images, "xxxlarge");
                            if (d && e) {
                                c = new Image;
                                c.src = d;
                                var f = new Image;
                                f.src = e;
                                f.onload = x5(() => a.OT.set(b, e));
                                f.onerror = x5(() => a.OT.set(b, void 0));
                                !f.complete && c.complete ? a.OT.set(b, d) : c.src = ""
                            }
                        } else a.OT.set(b, void 0)
                    },
                    QEb = function(a, {
                        url: b,
                        id: c,
                        extension: d
                    }) {
                        if (!a.promises.has(b)) {
                            const e =
                                new Promise(f => {
                                    a.Vg ? a.Vg.B6a(new PEb({
                                        id: c,
                                        extension: d
                                    })).then(({
                                        document: g
                                    }) => {
                                        const h = g.Cj.content.title;
                                        h ? (y5(() => a.jBa.set(b, {
                                            status: 1,
                                            title: h
                                        })), f(h)) : f(void 0)
                                    }).catch(() => {
                                        y5(() => a.jBa.set(b, {
                                            status: 2
                                        }));
                                        f(void 0)
                                    }) : f(void 0)
                                });
                            a.promises.set(b, e)
                        }
                        return a.promises.get(b)
                    },
                    z5 = __webpack_require__(519427),
                    x5 = z5.action,
                    REb = z5.comparer,
                    r5 = z5.computed,
                    SEb = z5.observable,
                    A5 = z5.ObservableMap,
                    y5 = z5.runInAction;
                var lEb = __webpack_require__(635872).Om;
                var B5 = __webpack_require__(875604),
                    TEb = B5.createContext,
                    uEb = B5.createRef,
                    UEb = B5.lazy,
                    C5 = B5.memo,
                    v5 = B5.useCallback,
                    FEb = B5.useEffect,
                    VEb = B5.useId,
                    WEb = B5.useLayoutEffect,
                    s5 = B5.useMemo,
                    EEb = B5.useState;
                var pEb = __webpack_require__(503216);
                var XEb = __webpack_require__(443763),
                    t5 = XEb.jsx,
                    D5 = XEb.jsxs;
                var YEb = __webpack_require__,
                    ZEb = YEb(993864),
                    u5 = YEb.n_x(ZEb)();
                var yEb = __webpack_require__(460876).Z;
                var E5 = __webpack_require__(223826),
                    CEb = E5.Wj,
                    AEb = E5.Ix,
                    BEb = E5.$r;
                var F5 = __webpack_require__(446474).Pi;
                var $Eb = class {
                        static A(a) {
                            P(a, {
                                text: r5,
                                user: r5,
                                brand: r5
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
                            this.type = ($Eb.A(this), "mention")
                        }
                    },
                    aFb = class {
                        static A(a) {
                            P(a, {
                                text: r5,
                                url: r5
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
                            this.type = (aFb.A(this), "embed")
                        }
                    },
                    bFb = class {
                        static A(a) {
                            P(a, {
                                text: r5,
                                language: r5,
                                style: r5,
                                date: r5
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
                            this.type = (bFb.A(this), "date")
                        }
                    },
                    cFb = class {
                        static A(a) {
                            P(a, {
                                text: r5,
                                options: r5,
                                yd: r5,
                                LI: r5
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
                        get LI() {
                            var a;
                            return (a = this.wd.options.first(b => b.id === this.wd.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        constructor(a) {
                            this.wd = a;
                            this.type = (cFb.A(this), "select")
                        }
                    },
                    dFb = lEb(a => {
                        switch (a.type) {
                            case "mention":
                                return new $Eb(a);
                            case "embed":
                                return new aFb(a);
                            case "date":
                                return new bFb(a);
                            case "select":
                                return new cFb(a);
                            default:
                                throw new E(a);
                        }
                    });
                var hEb = class {
                        static A(a) {
                            P(a, {
                                style: r5,
                                date: r5,
                                text: r5
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
                                UNa: a.getHours(),
                                SRa: a.getMinutes()
                            });
                            return a
                        }
                        get text() {
                            return this.Rk.ou
                        }
                        constructor(a, b) {
                            this.Rk = a;
                            this.language = b;
                            this.type = (hEb.A(this), "date")
                        }
                    },
                    eFb = class {
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
                    iEb = class {
                        static A(a) {
                            P(a, {
                                options: r5,
                                yd: r5,
                                LI: r5,
                                text: r5,
                                Vpa: r5({
                                    equals: REb.shallow
                                })
                            })
                        }
                        get options() {
                            return this.Vpa.map((a, b) => new eFb(a, b))
                        }
                        get yd() {
                            var a;
                            return (a = this.options.find(b => b.label === this.text)) === null || a === void 0 ? void 0 : a.id
                        }
                        get LI() {
                            var a;
                            return (a = this.options.find(b => b.id === this.yd)) === null || a === void 0 ? void 0 : a.fill.color
                        }
                        get text() {
                            return this.Rk.ou
                        }
                        get Vpa() {
                            var a, b;
                            __c.A(((a = this.Rk.kl) === null || a === void 0 ? void 0 : a.type) === "select");
                            return (b = this.Rk.kl) === null || b === void 0 ?
                                void 0 : b.options
                        }
                        constructor(a) {
                            this.Rk = a;
                            this.type = (iEb.A(this), "select")
                        }
                    },
                    jEb = class {
                        static A(a) {
                            P(a, {
                                BE: r5
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
                            this.type = (jEb.A(this), "mention")
                        }
                    },
                    kEb = class {
                        static A(a) {
                            P(a, {
                                VO: r5
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
                            this.type = (kEb.A(this), "embed")
                        }
                    };
                var fFb = class {
                    M8(a) {
                        this.Q5.M8(a)
                    }
                    FS(a, b) {
                        this.Q5.FS(a, b)
                    }
                    iP(a) {
                        return this.Q5.iP(a)
                    }
                    K8(a) {
                        this.xoa.K8(a)
                    }
                    constructor(a, b, c, d) {
                        this.Q5 = a;
                        this.xoa = b;
                        this.Ja = c;
                        this.us = d;
                        this.zha = new __c.odb;
                        this.AMa = e => __c.uxa(this.zha, e)
                    }
                };
                var gFb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var qEb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                        try {
                            return __c.ZD(__c.dE(a))
                        } catch (b) {
                            return "#8e8e8e"
                        }
                    }),
                    sEb = a => a.endsWith("rem") ? parseFloat(a) * 10 : __c.ql * gFb[a];
                var hFb = C5(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        bla: e,
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
                    } else n = e ? rEb(e) : "#8e8e8e";
                    var p = VEb();
                    switch (l) {
                        case "circle":
                            a = t5("defs", {
                                children: t5("clipPath", {
                                    id: p,
                                    children: t5("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = t5("defs", {
                                children: t5("clipPath", {
                                    id: p,
                                    children: t5("rect", {
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
                            p = t5("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: u5("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = t5("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: u5("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new E(l);
                    }
                    n = nEb(n);
                    return t5("span", {
                        role: f,
                        "aria-label": g,
                        className: u5("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: D5("svg", {
                            className: h,
                            style: k,
                            children: [a, p, t5("text", {
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
                                children: oEb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var iFb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var jFb = ({
                    borderColor: a,
                    Kwa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => t5("span", {
                    className: u5(d, {
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
                var kFb = ({
                    name: a,
                    p1a: b,
                    ariaLabel: c,
                    bla: d,
                    backgroundColor: e,
                    borderColor: f,
                    Fp: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = u5("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? t5(jFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Kwa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? t5(hFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        bla: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : t5(jFb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        Kwa: iFb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
                var lFb = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.116 12.366a1.25 1.25 0 0 1 1.768 0l5.586 5.586a.75.75 0 0 0 1.06 0l5.586-5.586a1.25 1.25 0 0 1 1.768 1.768l-5.586 5.586a3.25 3.25 0 0 1-4.596 0l-5.586-5.586a1.25 1.25 0 0 1 0-1.768" clip-rule="evenodd"/></svg>';
                var mFb = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M10.964 5.972 8.177 8.759a.25.25 0 0 1-.354 0L5.036 5.972a.75.75 0 1 0-1.06 1.06L6.762 9.82a1.75 1.75 0 0 0 2.475 0l2.787-2.788a.75.75 0 1 0-1.06-1.06"/></svg>';
                var nFb = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.25" d="M3.17 5 5.3 7.12a1 1 0 0 0 1.42 0L8.83 5"/></svg>';
                var oFb = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m16.384 9.225-4.207 4.207a.25.25 0 0 1-.353 0L7.623 9.224a.75.75 0 0 0-1.059.002.75.75 0 0 0-.002 1.059l4.201 4.21c.681.68 1.787.678 2.47-.005l4.207-4.207a.75.75 0 0 0 .002-1.059.75.75 0 0 0-1.058.002"/></svg>';
                var pFb = __c.yS({
                    aq: nFb,
                    small: mFb,
                    medium: oFb,
                    nB: lFb
                });
                var zEb = TEb(void 0);
                var qFb = Number.parseInt("300ms", 10),
                    rFb = {
                        enter: "_QukmA",
                        enterActive: "_5_06KQ",
                        enterDone: void 0,
                        exitActive: "a952jg",
                        exitDone: "orZOEA"
                    },
                    sFb = C5(function({
                        hE: a = !1,
                        children: b,
                        keyFrame: c,
                        pAa: d,
                        Pma: e = "hidden",
                        toa: f = "hidden",
                        ariaLive: g,
                        nsa: h,
                        c7a: k = "none"
                    }) {
                        a = __c.ub().Kc && !a;
                        return DEb({
                            children: b,
                            keyFrame: c,
                            pAa: d,
                            ariaLive: g,
                            Pma: e,
                            toa: f,
                            nsa: h,
                            RFa: a ? qFb : 0,
                            jKa: u5({
                                _1niDPQ: a,
                                Q6kGbg: k === "none",
                                _9j7ODw: k === "layout"
                            }),
                            XXa: rFb
                        })
                    });
                var tFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.25 3.5a.75.75 0 0 0-1.5 0V5H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-.75V3.5a.75.75 0 0 0-1.5 0V5h-5.5V3.5Zm5.5 4v-1h-5.5v1a.75.75 0 0 1-1.5 0v-1H7A2.5 2.5 0 0 0 4.5 9v1h15V9A2.5 2.5 0 0 0 17 6.5h-.75v1a.75.75 0 0 1-1.5 0Zm4.75 4h-15V17A2.5 2.5 0 0 0 7 19.5h10a2.5 2.5 0 0 0 2.5-2.5v-5.5Z" fill="currentColor"/></svg>';
                var uFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-1.288-.244-2.52-.687-3.65v-.1h-.04A10.003 10.003 0 0 0 12 2C6.477 2 2 6.477 2 12Zm12.653-8.078A8.526 8.526 0 0 1 19.63 8.25h-3.457c-.317-1.74-.848-3.236-1.52-4.328ZM20.2 9.75h-3.813c.075.723.114 1.476.114 2.25s-.04 1.527-.114 2.25h3.813A8.51 8.51 0 0 0 20.5 12a8.51 8.51 0 0 0-.301-2.25Zm-.569 6h-3.457c-.317 1.74-.848 3.236-1.52 4.328a8.526 8.526 0 0 0 4.977-4.328Zm-4.755-1.5a20.109 20.109 0 0 0 0-4.5h-5.75a20.116 20.116 0 0 0 0 4.5h5.75Zm-5.519 1.5h5.288C14.08 18.593 12.953 20.5 12 20.5c-.953 0-2.081-1.907-2.644-4.75Zm-1.529 0c.317 1.74.848 3.236 1.52 4.328A8.526 8.526 0 0 1 4.37 15.75h3.457Zm-.213-1.5H3.801A8.51 8.51 0 0 1 3.5 12c0-.779.105-1.533.301-2.25h3.813A21.9 21.9 0 0 0 7.5 12c0 .774.04 1.527.114 2.25ZM12 3.5c.953 0 2.081 1.907 2.644 4.75H9.356C9.92 5.407 11.047 3.5 12 3.5ZM4.37 8.25h3.457c.317-1.74.848-3.236 1.52-4.328A8.525 8.525 0 0 0 4.37 8.25Z" fill="currentColor"/></svg>';
                var vFb = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M8.64 16.5a4.87 4.87 0 0 0 4.11 2.25h4.5a4.88 4.88 0 0 0 0-9.75h-4.5a4.88 4.88 0 0 0-4.5 3h1.7c.6-.9 1.63-1.5 2.8-1.5h4.5a3.38 3.38 0 0 1 0 6.75h-4.5c-.8 0-1.54-.28-2.12-.75H8.64zm7.1-9a4.87 4.87 0 0 0-4.12-2.25h-4.5a4.87 4.87 0 1 0 0 9.75h4.5a4.88 4.88 0 0 0 4.5-3h-1.69c-.6.9-1.63 1.5-2.8 1.5h-4.5a3.38 3.38 0 0 1 0-6.75h4.5c.8 0 1.54.28 2.12.75h1.98z"/></svg>';
                var wFb = '<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.374 7.572A3.5 3.5 0 1 0 5.6 7.548a5.365 5.365 0 0 0-2.928 3.968 1.5 1.5 0 0 0 .592 1.441 7.9 7.9 0 0 0 4.7 1.543 7.9 7.9 0 0 0 4.698-1.542 1.5 1.5 0 0 0 .592-1.442 5.364 5.364 0 0 0-2.88-3.944ZM10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-5.847 6.75a3.858 3.858 0 0 1 7.62 0A6.4 6.4 0 0 1 7.963 13a6.4 6.4 0 0 1-3.81-1.25Z" fill="currentColor"/></svg>';
                var xFb = C5(a => {
                        const b = a.link,
                            c = a.className,
                            d = a.ariaLabel,
                            e = a.LI,
                            f = a.FJa,
                            g = a.GEa,
                            h = a.UEa,
                            k = a.measureRef,
                            l = a.onPointerDown,
                            m = a.onMouseEnter,
                            n = a.onMouseLeave,
                            p = u5({
                                EdewNw: !!g,
                                _6ZpPrw: !!h,
                                pzXyUA: a.text.length > 0
                            });
                        a = a.text.length > 0 ? a.text : "\ufeff";
                        return D5("span", {
                            className: u5(c, "FedJ0Q"),
                            "aria-label": d || a,
                            children: [t5("span", {
                                className: u5("_2Lr6pQ", p),
                                children: t5("span", {
                                    className: "Z_WvzQ",
                                    children: a
                                })
                            }), D5("span", {
                                className: u5("XemTdQ", p),
                                ref: k,
                                style: e ? {
                                    color: e
                                } : void 0,
                                onPointerDown: l,
                                onMouseEnter: m,
                                onMouseLeave: n,
                                children: [g, t5("span", {
                                    className: u5("U_QH_A", {
                                        C9XL8g: !f
                                    }),
                                    children: b ? t5("a", {
                                        className: "vgTP5Q",
                                        ...b,
                                        children: a
                                    }) : a
                                }), h]
                            })]
                        })
                    }),
                    HEb = C5(a => {
                        const b = a.backgroundColor,
                            c = a.Fp;
                        a = a.text;
                        const d = {
                            width: "0.9em",
                            height: "0.9em"
                        };
                        return t5(sFb, {
                            keyFrame: c ? "show" : "hide",
                            children: a ? t5(kFb, {
                                name: a,
                                style: d,
                                backgroundColor: b,
                                Fp: c,
                                borderColor: c ? void 0 : b
                            }) : t5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: wFb
                                }
                            })
                        })
                    }),
                    IEb = C5(a => {
                        const b = a.icon;
                        a = a.FPa;
                        return t5(sFb, {
                            keyFrame: b ?
                                "favicon" : "placeholder",
                            children: b ? t5("span", {
                                className: "_tFJqA",
                                children: t5("img", {
                                    src: b,
                                    className: "qpbYdw"
                                })
                            }) : t5("span", {
                                "aria-hidden": "true",
                                className: "_tFJqA",
                                dangerouslySetInnerHTML: {
                                    __html: a ? vFb : uFb
                                }
                            })
                        })
                    }),
                    JEb = C5(() => t5("span", {
                        "aria-hidden": "true",
                        className: "_tFJqA",
                        dangerouslySetInnerHTML: {
                            __html: tFb
                        }
                    })),
                    LEb = C5(({
                        selected: a
                    }) => t5("div", {
                        className: u5("whph4A", {
                            zgzjww: a
                        }),
                        children: t5(pFb, {
                            size: "medium",
                            style: {
                                width: "0.9em",
                                height: "0.9em"
                            },
                            className: "_tFJqA"
                        })
                    })),
                    yFb = F5(a => {
                        const {
                            wd: b,
                            rya: c,
                            kca: d,
                            mode: e = "viewable",
                            measureRef: f,
                            Fl: g,
                            onPointerDown: h
                        } = a;
                        a = b.text || "\u00a0".repeat(16);
                        const k = b.type === "embed" ? d.Ja(b.url) : void 0,
                            [l, m] = EEb(!1),
                            n = v5(t => m(w5(t)), [m]),
                            p = v5(t => m(!w5(t)), [m]),
                            q = v5(t => {
                                m(w5(t.nativeEvent));
                                document.addEventListener("keydown", n);
                                document.addEventListener("keyup", p)
                            }, [m, n, p]),
                            r = v5(() => {
                                m(!1);
                                document.removeEventListener("keydown", n);
                                document.removeEventListener("keyup", p)
                            }, [m, n, p]);
                        FEb(() => {
                            y5(() => {
                                switch (b.type) {
                                    case "mention":
                                        b.user && d.M8(b.user);
                                        break;
                                    case "embed":
                                        d.K8(b.url)
                                }
                            })
                        }, [b, d]);
                        WEb(() => {
                            g === null || g === void 0 || g()
                        }, [b.type, a, g]);
                        return t5(xFb, {
                            text: a,
                            link: e === "viewable" || l ? k : void 0,
                            FJa: b.text.length === 0,
                            ariaLabel: b.text || "",
                            className: GEb(b),
                            LI: b.LI,
                            GEa: KEb(b, d),
                            UEa: MEb(b, {
                                rya: c
                            }),
                            measureRef: f,
                            onPointerDown: h,
                            onMouseEnter: b.type === "embed" && e === "editable" ? q : void 0,
                            onMouseLeave: b.type === "embed" && e === "editable" ? r : void 0
                        })
                    });
                var zFb = __c.L(() => ({
                    C7a: __c.fO(11),
                    mode: __c.I("A?", 1, "BY_USER_IDS"),
                    SYa: __c.eO(1)
                }));
                var AFb = class {
                        static A(a) {
                            P(a, {
                                wH: SEb.shallow,
                                jpa: x5
                            })
                        }
                        iP(a) {
                            return this.Xka.iP(a)
                        }
                        M8(a) {
                            this.yha.has(a) || this.wH.has(a) || (this.wH.add(a), this.mJa())
                        }
                        FS(a, b) {
                            this.yha.has(a) || (this.yha.set(a, b), this.wH.delete(a), OEb(this.Xka, a, b))
                        }
                        async jpa() {
                            if (this.wH.size !== 0) {
                                var a = [...this.wH.values()];
                                this.wH.clear();
                                if (this.Zka) {
                                    var b = await this.Zka;
                                    await Promise.all(NEb(a).map(async c => {
                                        const d = new zFb({
                                                SYa: c
                                            }),
                                            {
                                                H1a: e
                                            } = await b.i6a(d);
                                        y5(() => c.forEach(f => this.FS(f, e.get(f))))
                                    }))
                                } else a.forEach(c => this.FS(c))
                            }
                        }
                        constructor(a,
                            b) {
                            this.Zka = a;
                            this.yha = (AFb.A(this), new A5);
                            this.wH = new Set;
                            this.Xka = new BFb;
                            this.mJa = __c.Oc(() => this.jpa(), 200);
                            y5(() => {
                                b === null || b === void 0 || b.forEach((c, d) => this.FS(d, c))
                            })
                        }
                    },
                    BFb = class {
                        iP(a) {
                            return this.OT.get(a)
                        }
                        constructor() {
                            this.OT = new A5
                        }
                    };
                var PEb = __c.L(() => ({
                    id: __c.X("id", 1),
                    extension: __c.Z("extension", 3),
                    kya: __c.aO("revision", 5),
                    version: __c.aO("version", 2),
                    j7a: __c.aO("imagesetsLimit", 6)
                }));
                var CFb = class {
                    static A(a) {
                        P(a, {
                            rLa: x5
                        })
                    }
                    async rLa(a) {
                        if (this.Vg) {
                            var b = (new URL(a)).pathname; {
                                const c = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(b);
                                c == null || c.length < 2 ? b = void 0 : (b = c[2], (new Set(["edit", "remix", "view", "watch"])).has(c[2]) && (b = void 0), b = {
                                    id: c[1],
                                    extension: b
                                })
                            }
                            if (b) return await QEb(this, {
                                url: a,
                                ...b
                            })
                        }
                    }
                    constructor(a) {
                        this.Vg = a;
                        this.jBa = (CFb.A(this), new A5);
                        this.promises = new Map
                    }
                };
                var DFb = class {
                    static A(a) {
                        P(a, {
                            GO: SEb.shallow
                        })
                    }
                    async K8(a) {
                        const b = new Image;
                        let c;
                        try {
                            var d;
                            const e = await ((d = this.us) === null || d === void 0 ? void 0 : d.TU(a));
                            c = e === null || e === void 0 ? void 0 : e.qLa
                        } catch (e) {}
                        c ? (b.src = c, b.onload = x5(() => this.GO.set(a, c)), b.onerror = x5(() => this.GO.set(a, void 0))) : y5(() => this.GO.set(a, void 0))
                    }
                    constructor(a) {
                        this.us = a;
                        this.GO = (DFb.A(this), new Map)
                    }
                };
                __c.Rta = {
                    POa: function(a) {
                        const b = a.document,
                            c = a.Vg,
                            d = a.Ja,
                            e = a.us;
                        var f = a.Yka;
                        const g = a.te,
                            h = a.Pf,
                            k = a.ez,
                            l = a.o3;
                        a = a.w7a;
                        f = new AFb(a === null || a === void 0 ? void 0 : a(), f);
                        a = new DFb(e);
                        new CFb(c);
                        const m = new fFb(f, a, d, e),
                            n = mEb(l, b);
                        g.om.L4 = F5(({
                            item: q,
                            measureRef: r
                        }) => {
                            const t = s5(() => dFb(q.wd), [q.wd]);
                            return t5(yFb, {
                                wd: t,
                                kca: m,
                                measureRef: r
                            })
                        });
                        const p = F5(({
                            context: q,
                            Fl: r
                        }) => {
                            const t = s5(() => __c.C(n(q.container)), [q]);
                            WEb(r, [r, q.container.column.width]);
                            return t5(yFb, {
                                wd: t,
                                kca: m,
                                Fl: r
                            })
                        });
                        k.Bja = ({
                                context: q,
                                Fl: r
                            }) =>
                            ({
                                type: "react",
                                node: t5(p, {
                                    context: q,
                                    Fl: r
                                })
                            });
                        h && (h.m4 = UEb(() => __webpack_require__.me(365475).then(() => __c.gEb).then(({
                            FIa: q
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
//# sourceMappingURL=sourcemaps/4719a0a4c99fa6d1.js.map