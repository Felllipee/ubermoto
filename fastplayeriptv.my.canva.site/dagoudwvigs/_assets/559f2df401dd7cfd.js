(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [49222], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var E = __c.E;
                var C = __c.C;
                var L5b = function(a, b, c, d) {
                        c = new K5b(c, d);
                        C(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        C(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Tia(a, b)
                    },
                    N5b = function(a) {
                        return { ...__c.Xfb,
                            ...y5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.Nia.width,
                                height: a.Nia.height
                            },
                            lb: a.lb.map(M5b)
                        }
                    },
                    O5b = function(a) {
                        switch (a.uC) {
                            case 0:
                                var b = __c.ml.tc().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight *
                                        1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.dg("color", a.color);
                                b = b.Rb(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.BK,
                                    ...z5,
                                    ...y5,
                                    Ha: (c = a.Ha) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    Mg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.BK,
                                    ...z5,
                                    ...y5,
                                    text: b,
                                    Mg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    D5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.Ifb,
                            fill: A5(b),
                            border: B5(c),
                            X: C5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: N5b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: O5b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: P5b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    P5b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.Jfb,
                            ...z5,
                            ...y5,
                            J: z5.width,
                            W: z5.height,
                            fill: A5(c),
                            border: B5(b),
                            direction: 1,
                            X: C5(d),
                            cells: new Map(a.map(k => [k.id, D5(k)])),
                            behavior: {
                                rules: [{
                                    Ng: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        gh: Q5b(a)
                                    }
                                }]
                            },
                            Ue: void 0
                        }
                    },
                    Q5b = function(a) {
                        return new Map(a.map(b => [b.id, R5b(b)]))
                    },
                    R5b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.KDa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.SQ,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    B5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.OD,
                            all: a ? { ...__c.HQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Tf: !0
                            } : void 0
                        }
                    },
                    C5 = function(a) {
                        return { ...__c.RQ,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    M5b = function(a) {
                        return { ...__c.Yfb,
                            ...a,
                            fill: A5(a.fill),
                            stroke: S5b(a.stroke)
                        }
                    },
                    S5b = function(a) {
                        return a ? { ...__c.HQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    A5 = function(a) {
                        var b;
                        const c = { ...__c.lv,
                            Ha: (b = a === null || a === void 0 ? void 0 : a.Ha) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    eb: a.eb
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    Y5b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        T5b(a.cells, c, (e, f) => {
                            let g = !1;
                            U5b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, D5(f));
                                g = !0
                            });
                            g || (E5(e.fill, f.fill), V5b(e.border, f.border), W5b(e.X, f.X))
                        }, e => D5(e));
                        X5b(a.behavior, b, c);
                        E5(a.fill, b.fill);
                        W5b(a.X, b.X);
                        V5b(a.border, b.border);
                        var d;
                        a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0
                    },
                    X5b = function(a, b, c) {
                        F5(a.rules, [b], d => {
                            Z5b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            Z5b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            T5b(d.grid.gh, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd =
                                    n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.pa = k === null || k === void 0 ? void 0 : k.pa, g.padding.Fa = k === null || k === void 0 ? void 0 : k.Fa, g.padding.ra = k === null || k === void 0 ? void 0 : k.ra, g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                                g.alignSelf = p
                            }, g => R5b(g))
                        }, d => {
                            var e, f;
                            return {
                                Ng: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    gh: Q5b(d.cells)
                                }
                            }
                        })
                    },
                    $5b = function(a, b) {
                        F5(a.lb, b.lb, (e, f) => {
                            e.d = f.d;
                            E5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(S5b(f.stroke))
                        }, e => M5b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = N5b(b);
                        a.width = d;
                        __c.lu(a.viewBox).equals(__c.lu(c)) || (a.viewBox = c)
                    },
                    U5b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? $5b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.ml.domain.Pb(__c.ml.ja(a.text), O5b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? Y5b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    T5b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    F5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    E5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.eb.set(void 0);
                                var c;
                                a.Ha = (c = b.Ha) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.eb.ref && __c.$5a.domain.Pb(a.eb.ref, b.eb)) break;
                                a.color = void 0;
                                a.eb.set(b.eb);
                                var d;
                                a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.eb.set(void 0)
                        }
                    },
                    W5b = function(a, b) {
                        b = C5(b);
                        a.all = b.all;
                        a.kD = b.kD;
                        a.iD = b.iD;
                        a.jD = b.jD;
                        a.hD = b.hD
                    },
                    V5b = function(a, b) {
                        b = B5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.PD.domain.Pb(__c.PD.ja(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    Z5b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    b6b = function(a, b, c, d) {
                        let e = a.mXa.get(b);
                        if (e) return e;
                        e = {
                            Dx: new a6b(c.uw, b, d, c.Yra),
                            RGa: void 0,
                            RQa: void 0,
                            RSa: __c.BV.mode
                        };
                        a.mXa.set(b, e);
                        return e
                    },
                    d6b = function(a, b, c, d, e) {
                        var f, g;
                        e = b6b(a, c, b, e);
                        const h = e.Dx,
                            k = e.RQa,
                            l = e.RGa,
                            m = e.RSa;
                        c = __c.NP.ja(c);
                        const n = ((f = (g = a.Qz).ira) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.BV;
                        h.Kj === k && c6b.structural(c, l) && n.mode === m || (e.RGa = c, e.RQa = h.Kj, e.RSa = n.mode, b = b.render(h, n), a.Mlb.update(d, b), L5b(d, b, (p, q) => a.eQ.osa.set(p, q), (p, q, r) => a.eQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    g6b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.zmb());
                        c.push(e6b(() => {
                            a: {
                                var e = new f6b;
                                for (const f of b)
                                    if (e.iQ(f), e.cqa) {
                                        e = e.cqa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Zb.isLoaded(e) || a.kta.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) C(f.type === "layout"), a.Ek.Ofa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    h6b = function(a, b) {
                        return {
                            CD: ({
                                Zi: c
                            }) => {
                                var d;
                                const {
                                    Dx: e
                                } = b6b(a.renderer, c, b, a.m2), f = __c.PP.create([]), g = [];
                                g.push(g6b(a.heb, f));
                                g.push(e6b(() => {
                                    var k, l;
                                    return [(k = (l = a.Qz).ira) === null || k === void 0 ? void 0 : k.call(l, f), __c.NP.ja(c),
                                        e.Kj
                                    ]
                                }, () => {
                                    d6b(a.renderer, b, c, f, a.m2)
                                }, {
                                    fireImmediately: !0,
                                    equals: c6b.structural
                                }));
                                const h = (d = b.Pua) === null || d === void 0 ? void 0 : d.call(b, {
                                    Dx: e
                                });
                                h && g.push(h);
                                return {
                                    Oa: f,
                                    iu: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    G5 = __webpack_require__(519427),
                    c6b = G5.comparer,
                    i6b = G5.computed,
                    H5 = G5.observable,
                    e6b = G5.reaction,
                    j6b = G5.runInAction;
                var k6b = class {
                    static A(a) {
                        __c.P(a, {
                            kob: H5.ref,
                            wfb: H5.ref
                        })
                    }
                    constructor() {
                        this.ira = (k6b.A(this), void 0)
                    }
                };
                var l6b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    a6b = class {
                        static A(a) {
                            __c.P(a, {
                                Pe: i6b
                            })
                        }
                        get SQa() {
                            var a = this.m2,
                                b = this.Zi,
                                c = this.Yra;
                            let d = a.sources.get(b);
                            d || (d = H5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Kj() {
                            return this.SQa.get()
                        }
                        get Pe() {
                            return this.uw.Ou({
                                type: "dict",
                                value: this.Zi
                            })
                        }
                        dm(a) {
                            this.SQa.set(a instanceof Function ? { ...this.Kj,
                                ...a()
                            } : { ...this.Kj,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.uw = a;
                            this.Zi = b;
                            this.m2 = c;
                            this.Yra = d;
                            a6b.A(this)
                        }
                    };
                var K5b = class {
                    T6(a, b) {
                        this.aXa(a, b);
                        b.ref && this.pxa(a, b.ref, b.key)
                    }
                    lQ(a, b) {
                        b.ref && this.pxa(a.text, b.ref, b.key)
                    }
                    BDa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                C(a.element.type === "shape");
                                this.T6(a.element, b.content);
                                break;
                            case "text":
                                C(a.element.type === "text");
                                this.lQ(a.element, b.content);
                                break;
                            case "layout":
                                C(a.element.type === "layout");
                                this.Tia(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Tia(a, b) {
                        this.aXa(a, b);
                        b.ref && this.pxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), C(!!d && !!a), this.BDa(d, a)
                    }
                    constructor(a, b) {
                        this.aXa = a;
                        this.pxa = b
                    }
                };
                var y5 = {
                        locked: !0,
                        Jk: {
                            hZ: !1,
                            kW: !1
                        },
                        ki: !0
                    },
                    z5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var m6b = class {
                    constructor(a) {
                        this.Ek = a;
                        this.update = (b, c) => {
                            F5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        Y5b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...P5b(d),
                                            ...y5,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            J: d.minWidth,
                                            W: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) C(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.J = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.Ek.Ofa(d)
                        }
                    }
                };
                var n6b = class {
                    constructor(a, b, c) {
                        this.Mlb = a;
                        this.eQ = b;
                        this.Qz = c;
                        this.mXa = new WeakMap
                    }
                };
                var o6b = class {
                        static A(a) {
                            __c.P(a, {
                                kta: H5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.Zb = a;
                            this.Ek = b;
                            this.kta = (o6b.A(this), new Set);
                            this.nqa = new Set;
                            this.zmb = () => {
                                this.Daa || (this.Daa = __c.Kha(this.Zb).subscribe(d => {
                                    j6b(() => {
                                        this.kta.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.nqa.add(c);
                                return () => {
                                    this.nqa.delete(c);
                                    this.nqa.size <= 0 && this.Daa && (this.Daa.unsubscribe(), this.Daa = void 0)
                                }
                            }
                        }
                    },
                    f6b = class extends __c.mC {
                        iQ(a, b) {
                            this.cqa || super.iQ(a, b)
                        }
                        lQ(a) {
                            this.cqa = (a = a.text.Yx("font-family")["font-family"].values().next().value) &&
                                __c.Fr(a).id
                        }
                    };
                var p6b = !1,
                    q6b = class {
                        register(a, b) {
                            this.vD.has(a) || (this.vD.set(a, b), p6b || (__c.OP.set(a, h6b(this, b)), p6b = !0))
                        }
                        get(a) {
                            return this.vD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.m2 = b;
                            this.Qz = c;
                            this.Zb = d;
                            this.Ek = e;
                            this.vD = new Map;
                            this.heb = new o6b(this.Zb, this.Ek)
                        }
                    };
                var r6b = class {
                        constructor() {
                            this.osa = new __c.KF;
                            this.refs = new __c.KF
                        }
                    },
                    s6b = class {
                        getContext(a) {
                            return this.eQ.refs.get(a)
                        }
                        GM(a) {
                            return this.eQ.osa.get(a)
                        }
                        constructor(a, b, c) {
                            this.eQ = a;
                            this.m2 = b;
                            this.renderer = c
                        }
                    };
                __c.GRa = {
                    Uhb: function(a) {
                        const b = new k6b,
                            c = new r6b,
                            d = new n6b(new m6b(a.Ek), c, b),
                            e = new l6b;
                        a = new q6b(d, e, b, a.Zb, a.Ek);
                        return {
                            Qz: b,
                            lQb: new s6b(c, e, d),
                            W6: a,
                            eQ: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/559f2df401dd7cfd.js.map