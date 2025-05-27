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
                var K5b = function(a, b, c, d) {
                        c = new J5b(c, d);
                        C(a.count() === 1, "Only single widget root element is supported");
                        a = a.first();
                        C(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.Uia(a, b)
                    },
                    M5b = function(a) {
                        return { ...__c.Wfb,
                            ...z5,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.Oia.width,
                                height: a.Oia.height
                            },
                            lb: a.lb.map(L5b)
                        }
                    },
                    N5b = function(a) {
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
                                return { ...__c.CK,
                                    ...A5,
                                    ...z5,
                                    Ha: (c = a.Ha) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    Mg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.CK,
                                    ...A5,
                                    ...z5,
                                    text: b,
                                    Mg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    E5 = function({
                        content: a,
                        fill: b,
                        border: c,
                        X: d
                    }) {
                        b = { ...__c.Hfb,
                            fill: B5(b),
                            border: C5(c),
                            X: D5(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: M5b(a)
                                };
                            case "text":
                                return { ...b,
                                    element: N5b(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: O5b(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    O5b = function({
                        cells: a,
                        border: b,
                        fill: c,
                        X: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.Ifb,
                            ...A5,
                            ...z5,
                            J: A5.width,
                            W: A5.height,
                            fill: B5(c),
                            border: C5(b),
                            direction: 1,
                            X: D5(d),
                            cells: new Map(a.map(k => [k.id, E5(k)])),
                            behavior: {
                                rules: [{
                                    Ng: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        gh: P5b(a)
                                    }
                                }]
                            },
                            Ue: void 0
                        }
                    },
                    P5b = function(a) {
                        return new Map(a.map(b => [b.id, Q5b(b)]))
                    },
                    Q5b = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.JDa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.TQ,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    C5 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.PD,
                            all: a ? { ...__c.IQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Tf: !0
                            } : void 0
                        }
                    },
                    D5 = function(a) {
                        return { ...__c.SQ,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    L5b = function(a) {
                        return { ...__c.Xfb,
                            ...a,
                            fill: B5(a.fill),
                            stroke: R5b(a.stroke)
                        }
                    },
                    R5b = function(a) {
                        return a ? { ...__c.IQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    B5 = function(a) {
                        var b;
                        const c = { ...__c.mv,
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
                    X5b = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        S5b(a.cells, c, (e, f) => {
                            let g = !1;
                            T5b(e.element, f.content, () => {
                                a.cells.delete(f.id);
                                a.cells.set(f.id, E5(f));
                                g = !0
                            });
                            g || (F5(e.fill, f.fill), U5b(e.border, f.border), V5b(e.X, f.X))
                        }, e => E5(e));
                        W5b(a.behavior, b, c);
                        F5(a.fill, b.fill);
                        V5b(a.X, b.X);
                        U5b(a.border, b.border);
                        var d;
                        a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0
                    },
                    W5b = function(a, b, c) {
                        G5(a.rules, [b], d => {
                            Y5b(d.grid.gridTemplateColumns, b.gridTemplateColumns) ||
                                (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            Y5b(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows = b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            S5b(d.grid.gh, c, (g, h) => {
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
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.ra = k === null || k === void 0 ? void 0 : k.ra, g.padding.Fa = k === null || k === void 0 ? void 0 : k.Fa, g.padding.qa = k === null || k === void 0 ? void 0 : k.qa, g.padding.La = k === null || k === void 0 ? void 0 : k.La);
                                g.alignSelf = p
                            }, g => Q5b(g))
                        }, d => {
                            var e, f;
                            return {
                                Ng: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    gh: P5b(d.cells)
                                }
                            }
                        })
                    },
                    Z5b = function(a, b) {
                        G5(a.lb, b.lb, (e, f) => {
                            e.d = f.d;
                            F5(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref, f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(R5b(f.stroke))
                        }, e => L5b(e));
                        const {
                            viewBox: c,
                            width: d
                        } = M5b(b);
                        a.width = d;
                        __c.mu(a.viewBox).equals(__c.mu(c)) || (a.viewBox = c)
                    },
                    T5b = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? Z5b(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && __c.ml.domain.Pb(__c.ml.ja(a.text), N5b(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? X5b(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    S5b = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f), c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    G5 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    F5 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.eb.set(void 0);
                                var c;
                                a.Ha = (c = b.Ha) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.eb.ref && __c.Z5a.domain.Pb(a.eb.ref, b.eb)) break;
                                a.color = void 0;
                                a.eb.set(b.eb);
                                var d;
                                a.Ha = (d = b.Ha) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.eb.set(void 0)
                        }
                    },
                    V5b = function(a, b) {
                        b = D5(b);
                        a.all = b.all;
                        a.kD = b.kD;
                        a.iD = b.iD;
                        a.jD = b.jD;
                        a.hD = b.hD
                    },
                    U5b = function(a, b) {
                        b = C5(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.QD.domain.Pb(__c.QD.ja(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    Y5b = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    a6b = function(a, b, c, d) {
                        let e = a.kXa.get(b);
                        if (e) return e;
                        e = {
                            Bx: new $5b(c.sw, b, d, c.Zra),
                            RGa: void 0,
                            RQa: void 0,
                            RSa: __c.CV.mode
                        };
                        a.kXa.set(b, e);
                        return e
                    },
                    c6b = function(a, b, c, d, e) {
                        var f, g;
                        e = a6b(a, c, b, e);
                        const h = e.Bx,
                            k = e.RQa,
                            l = e.RGa,
                            m = e.RSa;
                        c = __c.OP.ja(c);
                        const n = ((f = (g = a.Pz).jra) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.CV;
                        h.Kj === k && b6b.structural(c, l) && n.mode === m || (e.RGa = c, e.RQa = h.Kj, e.RSa = n.mode, b = b.render(h, n), a.Klb.update(d, b), K5b(d, b, (p, q) => a.gQ.psa.set(p, q), (p, q, r) => a.gQ.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    f6b = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.xmb());
                        c.push(d6b(() => {
                            a: {
                                var e = new e6b;
                                for (const f of b)
                                    if (e.kQ(f), e.eqa) {
                                        e = e.eqa;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.Zb.isLoaded(e) || a.lta.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) C(f.type === "layout"), a.Ek.Pfa(f);
                                d()
                            }
                        }));
                        return d
                    },
                    g6b = function(a, b) {
                        return {
                            CD: ({
                                Zi: c
                            }) => {
                                var d;
                                const {
                                    Bx: e
                                } = a6b(a.renderer, c, b, a.m2), f = __c.QP.create([]), g = [];
                                g.push(f6b(a.feb, f));
                                g.push(d6b(() => {
                                    var k, l;
                                    return [(k = (l = a.Pz).jra) === null || k === void 0 ? void 0 : k.call(l, f), __c.OP.ja(c),
                                        e.Kj
                                    ]
                                }, () => {
                                    c6b(a.renderer, b, c, f, a.m2)
                                }, {
                                    fireImmediately: !0,
                                    equals: b6b.structural
                                }));
                                const h = (d = b.Qua) === null || d === void 0 ? void 0 : d.call(b, {
                                    Bx: e
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
                    H5 = __webpack_require__(519427),
                    b6b = H5.comparer,
                    h6b = H5.computed,
                    I5 = H5.observable,
                    d6b = H5.reaction,
                    i6b = H5.runInAction;
                var j6b = class {
                    static A(a) {
                        __c.P(a, {
                            iob: I5.ref,
                            ufb: I5.ref
                        })
                    }
                    constructor() {
                        this.jra = (j6b.A(this), void 0)
                    }
                };
                var k6b = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    $5b = class {
                        static A(a) {
                            __c.P(a, {
                                Pe: h6b
                            })
                        }
                        get SQa() {
                            var a = this.m2,
                                b = this.Zi,
                                c = this.Zra;
                            let d = a.sources.get(b);
                            d || (d = I5.box(c), a.sources.set(b, d));
                            return d
                        }
                        get Kj() {
                            return this.SQa.get()
                        }
                        get Pe() {
                            return this.sw.Nu({
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
                            this.sw = a;
                            this.Zi = b;
                            this.m2 = c;
                            this.Zra = d;
                            $5b.A(this)
                        }
                    };
                var J5b = class {
                    T6(a, b) {
                        this.ZWa(a, b);
                        b.ref && this.qxa(a, b.ref, b.key)
                    }
                    nQ(a, b) {
                        b.ref && this.qxa(a.text, b.ref, b.key)
                    }
                    CDa(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                C(a.element.type === "shape");
                                this.T6(a.element, b.content);
                                break;
                            case "text":
                                C(a.element.type === "text");
                                this.nQ(a.element, b.content);
                                break;
                            case "layout":
                                C(a.element.type === "layout");
                                this.Uia(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    Uia(a, b) {
                        this.ZWa(a, b);
                        b.ref && this.qxa(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), C(!!d && !!a), this.CDa(d, a)
                    }
                    constructor(a, b) {
                        this.ZWa = a;
                        this.qxa = b
                    }
                };
                var z5 = {
                        locked: !0,
                        Jk: {
                            hZ: !1,
                            kW: !1
                        },
                        ki: !0
                    },
                    A5 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var l6b = class {
                    constructor(a) {
                        this.Ek = a;
                        this.update = (b, c) => {
                            G5(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        X5b(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...O5b(d),
                                            ...z5,
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
                            for (const d of b) C(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.J = c.minWidth, d.W = c.minHeight, c.direction && (d.direction = c.direction), this.Ek.Pfa(d)
                        }
                    }
                };
                var m6b = class {
                    constructor(a, b, c) {
                        this.Klb = a;
                        this.gQ = b;
                        this.Pz = c;
                        this.kXa = new WeakMap
                    }
                };
                var n6b = class {
                        static A(a) {
                            __c.P(a, {
                                lta: I5.shallow
                            })
                        }
                        constructor(a, b) {
                            this.Zb = a;
                            this.Ek = b;
                            this.lta = (n6b.A(this), new Set);
                            this.pqa = new Set;
                            this.xmb = () => {
                                this.Daa || (this.Daa = __c.Jha(this.Zb).subscribe(d => {
                                    i6b(() => {
                                        this.lta.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.pqa.add(c);
                                return () => {
                                    this.pqa.delete(c);
                                    this.pqa.size <= 0 && this.Daa && (this.Daa.unsubscribe(), this.Daa = void 0)
                                }
                            }
                        }
                    },
                    e6b = class extends __c.nC {
                        kQ(a, b) {
                            this.eqa || super.kQ(a, b)
                        }
                        nQ(a) {
                            this.eqa = (a = a.text.Wx("font-family")["font-family"].values().next().value) &&
                                __c.Gr(a).id
                        }
                    };
                var o6b = !1,
                    p6b = class {
                        register(a, b) {
                            this.vD.has(a) || (this.vD.set(a, b), o6b || (__c.PP.set(a, g6b(this, b)), o6b = !0))
                        }
                        get(a) {
                            return this.vD.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.m2 = b;
                            this.Pz = c;
                            this.Zb = d;
                            this.Ek = e;
                            this.vD = new Map;
                            this.feb = new n6b(this.Zb, this.Ek)
                        }
                    };
                var q6b = class {
                        constructor() {
                            this.psa = new __c.LF;
                            this.refs = new __c.LF
                        }
                    },
                    r6b = class {
                        getContext(a) {
                            return this.gQ.refs.get(a)
                        }
                        HM(a) {
                            return this.gQ.psa.get(a)
                        }
                        constructor(a, b, c) {
                            this.gQ = a;
                            this.m2 = b;
                            this.renderer = c
                        }
                    };
                __c.FRa = {
                    Shb: function(a) {
                        const b = new j6b,
                            c = new q6b,
                            d = new m6b(new l6b(a.Ek), c, b),
                            e = new k6b;
                        a = new p6b(d, e, b, a.Zb, a.Ek);
                        return {
                            Pz: b,
                            fQb: new r6b(c, e, d),
                            W6: a,
                            gQ: c
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/388eef9c44ee8aa3.js.map