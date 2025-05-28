(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        564722: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var dNb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.Os(a),
                                d = c instanceof __c.Ps ? c.Kp() : c;
                            return __c.Ar(b, e => {
                                e = __c.Os(e);
                                e = e instanceof __c.Ps ? __c.pH(e, d) : e;
                                return Math.abs(__c.dt(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    eNb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.js(b)[0]).join("")
                    },
                    hNb = function(a = "") {
                        a = fNb(a);
                        a = Math.floor(a() * gNb.length);
                        return gNb[a]
                    },
                    iNb = __webpack_require__(875604),
                    jNb =
                    iNb.memo,
                    kNb = iNb.useId;
                var fNb = __webpack_require__(503216);
                var lNb = __webpack_require__(443763),
                    xZ = lNb.jsx,
                    mNb = lNb.jsxs;
                var nNb = __webpack_require__,
                    oNb = nNb(993864),
                    yZ = nNb.n_x(oNb)();
                __c.pNb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var gNb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.Qs(__c.Js(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var qNb = jNb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        wR: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.Os(d);
                        var n = a instanceof __c.Ps ? __c.Rs(a) : __c.Qs(a)
                    } else n = e ? hNb(e) : "#8e8e8e";
                    var p = kNb();
                    switch (l) {
                        case "circle":
                            a = xZ("defs", {
                                children: xZ("clipPath", {
                                    id: p,
                                    children: xZ("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = xZ("defs", {
                                children: xZ("clipPath", {
                                    id: p,
                                    children: xZ("rect", {
                                        id: `${p}-path`,
                                        width: "100%",
                                        height: "100%"
                                    })
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    switch (l) {
                        case "circle":
                            p = xZ("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: yZ("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = xZ("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: yZ("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = dNb(n);
                    return xZ("span", {
                        role: f,
                        "aria-label": g,
                        className: yZ("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: mNb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, xZ("text", {
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
                                children: eNb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var rNb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var sNb = ({
                    borderColor: a,
                    OVa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => xZ("span", {
                    className: yZ(d, {
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
                __c.tNb = ({
                    name: a,
                    u7a: b,
                    ariaLabel: c,
                    wR: d,
                    backgroundColor: e,
                    borderColor: f,
                    Lq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = yZ("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? xZ(sNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        OVa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? xZ(qNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        wR: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : xZ(sNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        OVa: rNb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/9a8771d470905912.js.map