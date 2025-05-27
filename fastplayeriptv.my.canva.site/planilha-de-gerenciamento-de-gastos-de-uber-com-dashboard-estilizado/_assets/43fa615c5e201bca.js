(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [26489], {

        /***/
        564722: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var cNb = function(a) {
                        var b = ["rgb(255, 255, 255)", "rgb(13, 18, 22)"];
                        try {
                            const c = __c.Ps(a),
                                d = c instanceof __c.Qs ? c.Kp() : c;
                            return __c.Br(b, e => {
                                e = __c.Ps(e);
                                e = e instanceof __c.Qs ? __c.qH(e, d) : e;
                                return Math.abs(__c.et(e, d))
                            })
                        } catch (c) {
                            if (c instanceof Error && c.message === `unrecognized color: ${b[0]}`) return b[0];
                            throw c;
                        }
                    },
                    dNb = function(a) {
                        return a.trim().split(/\s+/, 2).map(b => __c.ks(b)[0]).join("")
                    },
                    gNb = function(a = "") {
                        a = eNb(a);
                        a = Math.floor(a() * fNb.length);
                        return fNb[a]
                    },
                    hNb = __webpack_require__(875604),
                    iNb =
                    hNb.memo,
                    jNb = hNb.useId;
                var eNb = __webpack_require__(503216);
                var kNb = __webpack_require__(443763),
                    yZ = kNb.jsx,
                    lNb = kNb.jsxs;
                var mNb = __webpack_require__,
                    nNb = mNb(993864),
                    zZ = mNb.n_x(nNb)();
                __c.oNb = {
                    xxsmall: 2,
                    xsmall: 3,
                    small: 4,
                    medium: 5,
                    large: 6,
                    xlarge: 8,
                    xxlarge: 10,
                    xxxlarge: 20
                };
                var fNb = ["rgb(0, 126, 182)", "rgb(248, 72, 86)", "rgb(251, 190, 40)", "rgb(68, 133, 25)", "rgb(125, 42, 232)"].map(a => {
                    try {
                        return __c.Rs(__c.Ks(a))
                    } catch (b) {
                        return "#8e8e8e"
                    }
                });
                var pNb = iNb(a => {
                    const {
                        name: b,
                        borderColor: c,
                        backgroundColor: d,
                        yR: e,
                        role: f,
                        ariaLabel: g,
                        className: h,
                        style: k,
                        shape: l = "circle",
                        ...m
                    } = a;
                    if (d) {
                        a = __c.Ps(d);
                        var n = a instanceof __c.Qs ? __c.Ss(a) : __c.Rs(a)
                    } else n = e ? gNb(e) : "#8e8e8e";
                    var p = jNb();
                    switch (l) {
                        case "circle":
                            a = yZ("defs", {
                                children: yZ("clipPath", {
                                    id: p,
                                    children: yZ("circle", {
                                        id: `${p}-path`,
                                        cx: "50%",
                                        cy: "50%",
                                        r: "50%"
                                    })
                                })
                            });
                            break;
                        case "square":
                            a = yZ("defs", {
                                children: yZ("clipPath", {
                                    id: p,
                                    children: yZ("rect", {
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
                            p = yZ("circle", {
                                cx: "50%",
                                cy: "50%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: zZ("yCT70Q", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        case "square":
                            p = yZ("rect", {
                                width: "100%",
                                height: "100%",
                                fill: n,
                                shapeRendering: "geometricPrecision",
                                clipPath: `url(#${p})`,
                                stroke: c,
                                className: zZ("cUFFRA", {
                                    _2LVP_g: c
                                })
                            });
                            break;
                        default:
                            throw new __c.E(l);
                    }
                    n = cNb(n);
                    return yZ("span", {
                        role: f,
                        "aria-label": g,
                        className: zZ("VaW8_A", {
                            cUFFRA: l === "square"
                        }),
                        style: {
                            "--pDK9Gw": n
                        },
                        ...m,
                        children: lNb("svg", {
                            className: h,
                            style: k,
                            children: [a, p, yZ("text", {
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
                                children: dNb(b).toUpperCase()
                            })]
                        })
                    })
                });
                var qNb = __webpack_require__.p + "images/5c0e58707f218438bf0f73d47db2ce50.svg";
                var rNb = ({
                    borderColor: a,
                    MVa: b,
                    ariaLabel: c,
                    className: d,
                    style: e,
                    role: f,
                    ...g
                }) => yZ("span", {
                    className: zZ(d, {
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
                __c.sNb = ({
                    name: a,
                    s7a: b,
                    ariaLabel: c,
                    yR: d,
                    backgroundColor: e,
                    borderColor: f,
                    Lq: g,
                    className: h,
                    style: k,
                    shape: l = "circle",
                    ...m
                }) => {
                    h = zZ("n8XGZg", "f4qJng fs-hide", h, {
                        P3N3Pw: l === "square"
                    });
                    b = b || "presentation";
                    return g ? yZ(rNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        MVa: g,
                        ariaLabel: c,
                        role: b,
                        ...m
                    }) : a ? yZ(pNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        name: a,
                        shape: l,
                        yR: d,
                        backgroundColor: e,
                        role: b,
                        ariaLabel: c,
                        ...m
                    }) : yZ(rNb, {
                        className: h,
                        style: k,
                        borderColor: f,
                        MVa: qNb,
                        ariaLabel: c,
                        role: b,
                        ...m
                    })
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/43fa615c5e201bca.js.map