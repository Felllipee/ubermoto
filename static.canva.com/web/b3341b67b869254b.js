(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [32915], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var tg = __c.tg;
                var E = __c.E;
                var w = __c.w;
                var ZKb = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].NN.forEach((e, f) => c.set(f, e));
                        return {
                            NN: c,
                            apply: d => {
                                const e = new Map,
                                    f = {},
                                    g = {};
                                for (const h in d) {
                                    const k = a[h].apply(d[h]);
                                    k.qda.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.aba
                                }
                                return {
                                    qda: e,
                                    data: f,
                                    aba: g
                                }
                            }
                        }
                    },
                    $Kb = function(a) {
                        return () => a
                    },
                    e7 = function(a, b, c, d) {
                        return new aLb(a, b, c, d)
                    },
                    bLb = function(a, b) {
                        return b(a)
                    },
                    f7 = function(a, b) {
                        return a === b || b.map(c => a.G$(cLb(c)))
                    },
                    eLb = function(a, b) {
                        return a.dba(b).map(c => new dLb(c, d =>
                            d.props[b]))
                    },
                    cLb = function(a) {
                        w(a instanceof g7);
                        return a
                    },
                    i7 = function(a, b) {
                        if (a === b) return !0;
                        switch (typeof a) {
                            case "string":
                            case "number":
                            case "boolean":
                            case "undefined":
                                return !1;
                            case "object":
                                if (typeof b !== "object" || a.kind !== b.kind) return !1;
                                switch (a.kind) {
                                    case "array":
                                        return b.kind === "array" && h7(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : h7([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !==
                                            b.size ? !1 : h7([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && fLb(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    h7 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!i7(a[c], b[c])) return !1;
                        return !0
                    },
                    fLb = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !==
                            e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!i7(a[f], b[f])) return !1;
                        return !0
                    },
                    j7 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    hLb = function(a, b) {
                        return a.map(c => b.map(d => gLb[0](c, d)))
                    },
                    jLb = function(a, b, c) {
                        return b.map(d => iLb[a](d, c))
                    },
                    l7 = function(a, b) {
                        return new k7(new Map(b), a)
                    },
                    m7 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return kLb(c.value);
                            case 1:
                                const f = m7(a, b, c.tq);
                                return lLb[c.name].map(t => n7(t, f));
                            case 2:
                                const g = m7(a, b, c.aGa),
                                    h = m7(a, b, c.bGa);
                                return mLb[c.name].map(t =>
                                    nLb(t, g, h));
                            case 3:
                                const k = c.args.map(t => t.kind !== 13 ? new oLb(m7(a, b, t)) : new pLb(m7(a, b, t.O7a)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = k.map(t => t.X8(v => v.type, v => v.type.AF()));
                                        return o7.union(...d).map(qLb[c]).map(t => rLb(t, k));
                                    default:
                                        return sLb[c].map(t => rLb(t, k))
                                }
                            case 4:
                                d = c.name;
                                var e = c.param;
                                const l = c.body,
                                    m = m7(a, b, c.WV);
                                c = m.type.AF();
                                const n = tLb(b, [
                                    [e, c]
                                ], t => m7(a, t, l));
                                return jLb(d, c, n.resultType).map(t => uLb(t, m, n));
                            case 5:
                                const p = c.entries.map(([t, v]) => [m7(a, b, t), m7(a, b, v)]);
                                c = o7.union(...p.map(([t]) =>
                                    t.type));
                                d = o7.union(...p.map(([, t]) => t.type));
                                if (!f7(c, o7.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return hLb(c, d).map(t => vLb(t, p));
                            case 6:
                                const q = tg(c.fields, t => m7(a, b, t));
                                c = tg(q, t => t.type);
                                return (0, wLb[0])(c).map(t => xLb(t, q));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const r = m7(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.dSa.map(t => n7(t, r, {
                                    Rm: !0
                                }));
                            case 8:
                                return d = m7(a, b, c.base), yLb(d, c.F$a);
                            case 9:
                                return zLb(b, c.name);
                            case 10:
                                return d =
                                    __c.Qd(c.defs, t => m7(a, b, t)), ALb(a, b, d, c.body);
                            case 11:
                                return d = m7(a, b, c.test).as(o7.gg), e = m7(a, b, c.C2a), c = m7(a, b, c.alternate), BLb(d, e, c);
                            case 12:
                                return m7(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    kLb = function(a) {
                        switch (typeof a) {
                            case "string":
                                return p7(o7.string, a);
                            case "number":
                                return p7(o7.number, a);
                            case "boolean":
                                return p7(o7.gg, a);
                            case "undefined":
                                return p7(o7.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    yLb = function(a, b) {
                        return a.map(c => eLb(c, b).map(({
                            type: d,
                            get: e
                        }) => n7(new q7(c, d, e), a)))
                    },
                    zLb = function(a, b) {
                        return a.resolve(b).map(c => r7.of(c, d => d.resolve(b)))
                    },
                    ALb = function(a, b, c, d) {
                        const e = __c.Qd(c, g => g.type),
                            f = __c.Qd(c, g => g.evaluate);
                        return CLb(m7(a, l7(b, e), d), g => {
                            const h = __c.Qd(f, k => k(g));
                            return l7(g, h)
                        })
                    },
                    BLb = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = o7.union(d, f);
                            return r7.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    n7 = function({
                        G5: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new r7(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Rm) {
                                const k =
                                    DLb(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    nLb = function({
                        G5: a,
                        cGa: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new r7(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    rLb = function({
                        eGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.X5(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = o7.WV(a))));
                        return new r7(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.X5(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.X8(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    uLb = function({
                        itemType: a,
                        wGa: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as([a], b),
                            h = e.as(o7.WV(a));
                        return new r7(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = DLb(p => {
                                    p = p.map($Kb);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    vLb = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new r7(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    xLb = function({
                        dGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = ELb(a, (g, h) => d[h].as(g));
                        return new r7(b, g => {
                            const h = FLb(f, k => k(g));
                            return () => c(GLb(h, k => k()))
                        })
                    },
                    p7 = function(a, b) {
                        const c = $Kb(b);
                        return new r7(a, () => c)
                    },
                    CLb = function(a, b) {
                        const c = a.evaluate;
                        return new r7(a.type, d => c(b(d)))
                    },
                    tLb = function(a, b, c) {
                        const d = b.map(f => f[0]),
                            e = b.map(f => f[1]);
                        return bLb(e, f => c(l7(a, new Map(b))).map((g, h) => new HLb(f, g, k => (...l) => {
                            const m = new Map(d.map((n, p) => [n, l[p]]));
                            return h(l7(k, m))
                        })))
                    },
                    DLb = function(a) {
                        let b;
                        return c => {
                            if (b && s7.Oh(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    ELb = function(a, b) {
                        return tg(a, b)
                    },
                    FLb = function(a, b) {
                        return tg(a, b)
                    },
                    GLb = function(a, b) {
                        return tg(a, b)
                    },
                    MLb = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const G = this.F2,
                                    H = this.j0,
                                    J = this.iia,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, T => T != null ? G(T) : void 0, (T, R, V) => V != null ? H(T, R, V) : void 0, (T, R, V, da) => V != null ? J(T, R, V, da) : da.delete(R))
                            }
                            Kv() {
                                return new d(this.type, this.F2, this.j0, (G, H) => {
                                    throw G.error(H, "read-only field");
                                })
                            }
                            QT(G) {
                                return G ? new d(this.type, this.F2,
                                    (H, J, M) => {
                                        M = this.j0(H, J, M);
                                        M != null && G(H, J, M);
                                        return M
                                    }, (H, J, M, T) => {
                                        M != null && G(H, J, M);
                                        this.iia(H, J, M, T)
                                    }) : this
                            }
                            FXa(G, H) {
                                const J = this.F2,
                                    M = this.j0,
                                    T = this.iia;
                                return ILb(this.type, R => {
                                    const V = () => M(G, H, R.get(H));
                                    return {
                                        pNa: () => J(V()),
                                        qqa: V,
                                        SVa: da => T(G, H, da, R)
                                    }
                                })
                            }
                            constructor(G, H, J, M) {
                                this.type = G;
                                this.F2 = H;
                                this.j0 = J;
                                this.iia = M
                            }
                        }
                        a = new d(b.string, G => G, t7("string", G => G.value), u7("string"));
                        const e = new d(b.gg, G => G, t7("boolean", G => G.value), u7("boolean")),
                            f = (new d(b.number, G => G, t7("int32", G => G.value), u7("int32"))).QT(G =>
                                Number.isInteger(G)),
                            g = (new d(b.number, G => G, t7("double", G => G.value), u7("double"))).QT(G => Number.isFinite(G)),
                            h = new d(b.instance("Fill"), G => c.instance("Fill", G), t7("fill", G => G.value), u7("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.Kv(),
                            r = e.Kv(),
                            t = f.Kv(),
                            v = g.Kv(),
                            u = h.Kv(),
                            x = k.Kv(),
                            y = l.Kv(),
                            z = m.Kv(),
                            B = n.Kv(),
                            D = p.Kv(),
                            F = {
                                [0]: {
                                    [0]: {
                                        string: a,
                                        boolean: e,
                                        int32: f,
                                        double: g,
                                        fill: h
                                    },
                                    [1]: {
                                        string: q,
                                        boolean: r,
                                        int32: t,
                                        double: v,
                                        fill: u
                                    }
                                },
                                [1]: {
                                    [0]: {
                                        string: k,
                                        boolean: l,
                                        int32: m,
                                        double: n,
                                        fill: p
                                    },
                                    [1]: {
                                        string: x,
                                        boolean: y,
                                        int32: z,
                                        double: B,
                                        fill: D
                                    }
                                }
                            };
                        return (G, H) => {
                            const J = new JLb(G),
                                M = tg(H, R => R.key),
                                T = tg(H, R => {
                                    var V = R.Rwa;
                                    const da = R.Iua;
                                    switch (R.type) {
                                        case "string":
                                            V = F[V][da].string.QT(KLb(R.bC));
                                            break;
                                        case "boolean":
                                            V = F[V][da]["boolean"];
                                            break;
                                        case "double":
                                            V = F[V][da]["double"].QT(LLb(R.range));
                                            break;
                                        case "int32":
                                            V = F[V][da].int32.QT(LLb(R.range));
                                            break;
                                        case "fill":
                                            V = F[V][da].fill;
                                            break;
                                        default:
                                            throw new E(R);
                                    }
                                    return V.FXa(J, R.key)
                                });
                            return {
                                NN: new Map(Object.entries(T).map(([R,
                                    V
                                ]) => [M[R], V.type])),
                                apply: R => {
                                    const V = tg(T, ma => ma.eval(R)),
                                        da = tg(V, ma => ({
                                            get: ma.qqa
                                        })),
                                        oa = tg(V, ma => ({
                                            get: ma.qqa,
                                            set: ma.SVa
                                        }));
                                    return {
                                        qda: new Map(Object.entries(V).map(([ma, Aa]) => [M[ma], Aa.pNa])),
                                        data: Object.create(null, da),
                                        aba: Object.create(null, oa)
                                    }
                                }
                            }
                        }
                    },
                    t7 = function(a, b) {
                        return (c, d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    u7 = function(a) {
                        return (b, c, d, e) => {
                            if (d == null) throw b.error(a, "value is nullish");
                            if (a ===
                                "string" && typeof d === "string" || a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number") b = {
                                type: a,
                                value: d
                            };
                            else {
                                if (a === "fill" && typeof d === "object") throw b.error(a, "Write for fill is not yet supported");
                                throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                            }
                            e.set(c, b)
                        }
                    },
                    LLb = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e,
                                    `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    KLb = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    ILb = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    OLb = function() {
                        return (new NLb({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.xQ.create({ ...__c.zQ,
                                color: c.color
                            }))
                        })).add((a, b) => ({
                            RectElement: new a("RectElement", {
                                top: b.number,
                                left: b.number,
                                width: b.number,
                                height: b.number,
                                rotation: b.union(b.number, b.undefined),
                                fill: b.instance("Fill"),
                                P: b.union(b.array(b.number),
                                    b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.RK.create({ ...__c.ZR,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.ZR.rotation,
                                    fill: __c.zQ,
                                    P: (f = (d = c.P) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.ZR.P
                                });
                                Object.defineProperties(g, {
                                    fill: {
                                        value: c.fill.instance
                                    }
                                });
                                return g
                            })
                        }))
                    },
                    v7 = function() {
                        throw Error("ref not found");
                    },
                    QLb = function(a, b) {
                        return class extends PLb {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ?
                                    w7(__c.pl, {
                                        background: "criticalLow",
                                        width: "full",
                                        height: "full",
                                        padding: "0.25u",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        role: "alert",
                                        children: w7(__c.ml, {
                                            size: "xsmall",
                                            alignment: "center",
                                            children: __c.O("Q6XSow")
                                        })
                                    }) : w7(b, { ...this.props
                                    })
                            }
                            constructor(...c) {
                                super(...c);
                                this.state = {
                                    hasError: !1
                                }
                            }
                        }
                    },
                    VLb = function(a, b, c) {
                        const d = f => ({
                            element: f.Y.Qg
                        });
                        b = ZKb(b);
                        switch (c.type) {
                            case 0:
                                c = c.$w;
                                if (typeof c === "object") {
                                    var e = a.TBa.types;
                                    e = e.WV(e.instance("RectElement"));
                                    return RLb(a, d, b, e, c, f =>
                                        new SLb(() => f().map(g => g.instance)))
                                }
                                return TLb(d, b, c);
                            case 1:
                                return ULb(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    RLb = function(a, b, c, d, e, f) {
                        const g = a.p7(a.TBa, c, d).compile(e);
                        return {
                            type: 0,
                            $w: h => ({
                                $a: f(g.apply(b(h)))
                            })
                        }
                    },
                    TLb = function(a, b, c) {
                        return {
                            type: 0,
                            $w: d => c(b.apply(a(d)).data)
                        }
                    },
                    ULb = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: QLb(a.M, WLb(({
                                model: e
                            }) => {
                                const [f] = XLb(() => c.apply(b(e)).aba);
                                return w7(d, {
                                    data: f,
                                    Vt: a.Vt
                                })
                            }))
                        }
                    },
                    ZLb = function(a) {
                        return {
                            NN: a.NN,
                            apply: YLb(a.apply)
                        }
                    },
                    YLb = function(a) {
                        const b =
                            new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    $Lb = __webpack_require__(519427),
                    x7 = $Lb.computed,
                    aMb = $Lb.observable;
                var w7 = __webpack_require__(443763).jsx;
                var y7 = __webpack_require__(875604),
                    WLb = y7.memo,
                    PLb = y7.PureComponent,
                    XLb = y7.useState;
                var q7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.G5 = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    z7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.G5 = a;
                            this.cGa = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    cMb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = bMb;
                            this.dGa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    A7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.eGa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    eMb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = dMb;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType =
                                c;
                            this.apply = d
                        }
                    },
                    aLb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.wGa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var dLb = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var fMb = class {},
                    oLb = class extends fMb {
                        X5(a) {
                            return new oLb(a(this.value))
                        }
                        X8(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    pLb = class extends fMb {
                        X5(a, b) {
                            return new pLb(b(this.value))
                        }
                        X8(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var g7 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    B7 = class extends g7 {
                        G$(a) {
                            return this === a || a.cea(b => this.eQ(b))
                        }
                        AF() {
                            throw Error(`${this} is not iterable`);
                        }
                        dba(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.wZ();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        wZ() {
                            throw Error(`${this} is not navigable`);
                        }
                        e9(a) {
                            a(this)
                        }
                        cea(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    C7 = class extends B7 {
                        eQ(a) {
                            return a instanceof C7 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    D7 = class extends B7 {
                        eQ(a) {
                            return a instanceof D7 && this.gx === a.gx
                        }
                        toString() {
                            return this.gx.name
                        }
                        constructor(a) {
                            super();
                            this.gx = a
                        }
                    },
                    E7 = class extends B7 {
                        eQ(a) {
                            return a instanceof E7 && this.gx === a.gx && f7(this.tq, a.tq)
                        }
                        toString() {
                            return `${this.gx}<${this.tq}>`
                        }
                        constructor(a, b) {
                            super();
                            this.gx = a;
                            this.tq = b
                        }
                    },
                    gMb = class extends E7 {
                        AF() {
                            return this.tq
                        }
                        wZ() {
                            const a = this.tq;
                            return {
                                size: o7.number,
                                empty: o7.gg,
                                get first() {
                                    return o7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    hMb = class extends E7 {
                        AF() {
                            return this.tq
                        }
                        wZ() {
                            const a = this.tq;
                            return {
                                size: o7.number,
                                empty: o7.gg,
                                get first() {
                                    return o7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    iMb = class extends B7 {
                        eQ(a) {
                            return a instanceof iMb && f7(this.key, a.key) && f7(this.value, a.value)
                        }
                        toString() {
                            return `map<${this.key}, ${this.value}>`
                        }
                        constructor(a, b) {
                            super();
                            this.key = a;
                            this.value = b
                        }
                    },
                    jMb = class extends B7 {
                        eQ(a) {
                            return a instanceof
                            jMb ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && f7(this.fields[b], c)) : !1
                        }
                        wZ() {
                            return this.fields
                        }
                        toString() {
                            const a = Object.entries(this.fields);
                            return a.length ? `{ ${a.map(([b,c])=>`${b}: ${c}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a
                        }
                    },
                    F7 = class extends g7 {
                        G$(a) {
                            return this === a || this.hg.every(b => b.G$(a))
                        }
                        AF() {
                            return o7.union(...this.hg.map(a => a.AF()))
                        }
                        dba(a) {
                            return o7.union(...this.hg.map(b => b.dba(a)))
                        }
                        e9(a) {
                            this.hg.forEach(b => b.e9(a))
                        }
                        cea(a) {
                            return this.hg.some(b =>
                                b.cea(a))
                        }
                        toString() {
                            return this.hg.length ? this.hg.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.hg = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    G7 = new F7([]),
                    kMb = new C7("string"),
                    lMb = new C7("number"),
                    mMb = new C7("boolean"),
                    nMb = new C7("undefined"),
                    oMb = new F7([kMb, lMb, mMb]),
                    pMb = class {
                        get never() {
                            return G7
                        }
                        get string() {
                            return kMb
                        }
                        get number() {
                            return lMb
                        }
                        get gg() {
                            return mMb
                        }
                        get undefined() {
                            return nMb
                        }
                        get primitive() {
                            return oMb
                        }
                        optional(a) {
                            return o7.union(a, o7.undefined)
                        }
                        array(a) {
                            return new gMb(a)
                        }
                        set(a) {
                            return new hMb(a)
                        }
                        WV(a) {
                            return new F7([new gMb(a),
                                new hMb(a)
                            ])
                        }
                        map(a, b) {
                            return new iMb(a, b)
                        }
                        ec(a) {
                            return new jMb({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) cLb(d).e9(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return f7(d, e) ? e : f7(e, d) ? d : new F7(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => f7(d, e)) || (c.forEach(e => f7(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new F7([...c])
                        }
                    },
                    qMb = class extends pMb {
                        instance(a) {
                            return new D7(a)
                        }
                    },
                    o7 = new qMb,
                    rMb = class extends pMb {
                        instance(a) {
                            return new D7(__c.C(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var sMb, tMb, H7 = Symbol("value"),
                    I7 = class {
                        get props() {
                            var a;
                            return (a = this.pFa) !== null && a !== void 0 ? a : this.pFa = this.J5()
                        }
                    },
                    uMb = class {
                        get size() {
                            return this[H7].length
                        }
                        get empty() {
                            return this[H7].length === 0
                        }
                        get first() {
                            return this[H7][0]
                        }
                        constructor(a) {
                            this[H7] = a
                        }
                    };
                sMb = Symbol.iterator;
                var vMb = class extends I7 {
                        J5() {
                            return new uMb(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[sMb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,j7).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    wMb = class {
                        get size() {
                            return this[H7].size
                        }
                        get empty() {
                            return this[H7].size === 0
                        }
                        get first() {
                            return this[H7][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[H7] = a
                        }
                    };
                tMb = Symbol.iterator;
                var xMb = class extends I7 {
                        J5() {
                            return new wMb(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[tMb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,j7).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    yMb = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${j7(a)}]: ${j7(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    zMb = class extends I7 {
                        J5() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${j7(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    AMb = class {
                        toString() {
                            return `[instance ${this.gx.name}]`
                        }
                        constructor(a, b) {
                            this.gx = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    BMb = class {
                        array(a) {
                            return new vMb(a)
                        }
                        arrayOf(...a) {
                            return new vMb(a)
                        }
                        set(a) {
                            return new xMb(a)
                        }
                        map(a) {
                            return new yMb(new Map(a))
                        }
                        ec(a) {
                            return new zMb({ ...a
                            })
                        }
                    },
                    CMb = class extends BMb {
                        instance(a, b) {
                            return new AMb(a, b)
                        }
                        stringify(a) {
                            return j7(a)
                        }
                        constructor() {
                            super();
                            this.Oh = i7
                        }
                    },
                    s7 = new CMb,
                    DMb = class extends BMb {
                        instance(a, b) {
                            a = __c.C(this.classes[a]);
                            return new AMb(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var lLb = {
                        [0]: new q7(o7.number, o7.number, a => -a),
                        [1]: new q7(o7.string, o7.number, a => a.length),
                        [2]: new q7(o7.gg, o7.gg, a => !a)
                    },
                    mLb = {
                        [0]: new z7(o7.number, o7.number, o7.number, (a, b) => a + b),
                        [1]: new z7(o7.number, o7.number, o7.number, (a, b) => a - b),
                        [2]: new z7(o7.number, o7.number, o7.number, (a, b) => a * b),
                        [3]: new z7(o7.number, o7.number, o7.number, (a, b) => a / b),
                        [4]: new z7(o7.number, o7.number, o7.number, (a, b) => a % b),
                        [5]: new z7(o7.string, o7.string, o7.string, (a, b) => a + b),
                        [6]: new z7(o7.number, o7.number, o7.gg, (a, b) => a === b),
                        [7]: new z7(o7.number,
                            o7.number, o7.gg, (a, b) => a !== b),
                        [8]: new z7(o7.number, o7.number, o7.gg, (a, b) => a < b),
                        [9]: new z7(o7.number, o7.number, o7.gg, (a, b) => a <= b),
                        [10]: new z7(o7.number, o7.number, o7.gg, (a, b) => a > b),
                        [11]: new z7(o7.number, o7.number, o7.gg, (a, b) => a >= b),
                        [12]: new z7(o7.gg, o7.gg, o7.gg, (a, b) => a && b),
                        [13]: new z7(o7.gg, o7.gg, o7.gg, (a, b) => a || b)
                    },
                    sLb = {
                        [2]: new A7(o7.number, o7.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new A7(o7.number, o7.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new A7(o7.number, o7.number, a => Math.max(...a)),
                        [5]: new A7(o7.number,
                            o7.number, a => Math.min(...a)),
                        [6]: new A7(o7.string, o7.string, a => a.join(""))
                    },
                    EMb = a => s7.array(a),
                    FMb = a => s7.set(a),
                    qLb = {
                        [0]: a => new A7(a, o7.array(a), EMb),
                        [1]: a => new A7(a, o7.set(a), FMb)
                    },
                    dMb = a => s7.map(a),
                    gLb = {
                        [0]: (a, b) => new eMb(a, b, o7.map(a, b))
                    },
                    bMb = a => s7.ec(a),
                    wLb = {
                        [0]: a => new cMb(a, o7.ec(a))
                    },
                    GMb = (a, b) => s7.array(b.map(c => c())),
                    HMb = (a, b) => s7.array(b.flatMap(c => c().items)),
                    IMb = (a, b) => s7.array(a.filter((c, d) => b[d]()).map(c => c())),
                    JMb = (a, b) => b.some(c => c()),
                    KMb = (a, b) => b.every(c => c()),
                    LMb = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    iLb = {
                        [0]: (a, b) => b.map(c => e7(a, c, o7.array(c), GMb)),
                        [1]: (a, b) => b.AF().map(c => e7(a, o7.array(c), o7.array(c), HMb)),
                        [2]: a => e7(a, o7.gg, o7.array(a), IMb),
                        [3]: a => e7(a, o7.gg, o7.gg, JMb),
                        [4]: a => e7(a, o7.gg, o7.gg, KMb),
                        [5]: a => e7(a, o7.gg, o7.optional(a), LMb)
                    };
                var k7 = class {
                    define(a, b) {
                        return new k7(new Map([
                            [a, b]
                        ]), this)
                    }
                    resolve(a) {
                        const b = this.defs.get(a);
                        if (b) return b;
                        if (this.parent) return this.parent.resolve(a);
                        throw Error(`undefined symbol: ${a}`);
                    }
                    constructor(a, b) {
                        this.defs = a;
                        this.parent = b
                    }
                };
                var NMb = (a, b, c) => {
                        const d = new k7(new Map(b.NN)),
                            e = new MMb(a);
                        return {
                            compile: f => {
                                const g = m7(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new k7(new Map(b.apply(h).qda));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    MMb = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    r7 = class {
                        static of (a, b) {
                            return new r7(a, b)
                        }
                        as(a) {
                            if (!f7(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new r7(this.type, b => {
                                const c = x7(a(b), {
                                    equals: s7.Oh
                                });
                                return () => c.get()
                            })
                        }
                        map(a) {
                            return a(this.type,
                                this.evaluate)
                        }
                        constructor(a, b) {
                            this.type = a;
                            this.evaluate = b
                        }
                    },
                    HLb = class {
                        as(a, b) {
                            const c = this.rwa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!f7(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!f7(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this.rwa,
                                this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.rwa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var NLb = class {
                        add(a) {
                            a = a(OMb, this.types);
                            return new NLb({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new rMb(this.classes);
                            this.values = new DMb(this.classes)
                        }
                    },
                    OMb = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.dSa = new q7(o7.ec(b), o7.instance(this), d => s7.instance(this, c(d.fields)))
                        }
                    };
                var JLb = class {
                    error(a, b) {
                        return Error(`widget '${this.wZa}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.wZa = a
                    }
                };
                var PMb = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Dr() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        v7()
                    },
                    Fc() {
                        v7()
                    },
                    Dd() {
                        v7()
                    },
                    Yu() {
                        v7()
                    },
                    has() {
                        return !1
                    },
                    RA() {
                        return this
                    },
                    map() {
                        return []
                    },
                    flatMap() {
                        return []
                    },
                    filter() {
                        return []
                    },
                    forEach() {},
                    reduce(a, b) {
                        return b
                    },
                    some() {
                        return !1
                    },
                    every() {
                        return !0
                    },
                    [Symbol.iterator]() {
                        return [][Symbol.iterator]()
                    }
                });
                var QMb;
                QMb = Symbol.iterator;
                var SLb = class {
                    static A(a) {
                        __c.P(a, {
                            ud: x7,
                            Fs: x7
                        })
                    }
                    get ud() {
                        return this.iGa().map(a => {
                            let b = this.cra.get(a);
                            b == null && (b = `${this.$Na++}`, this.cra.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get Fs() {
                        const a = new Map;
                        this.ud.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Lj(a) {
                        return __c.C(this.Fs.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.ud.length
                    }
                    count() {
                        return this.ud.length
                    }
                    toArray() {
                        return this.ud.map(a => a.ref)
                    }
                    Dr() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get BX() {
                        const a = this.ud[0];
                        return a && a.ref
                    }
                    get kZ() {
                        const a =
                            this.ud[this.ud.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.BX;
                        const b = this.ud.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.kZ;
                        const b = this.ud;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.ud;
                        for (a = this.Lj(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Fc(a, b) {
                        const c = this.ud;
                        for (a = this.Lj(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Dd(a, b) {
                        a = this.Fs.get(a);
                        b = this.Fs.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    Yu(a) {
                        return this.ud[this.Lj(a)].id
                    }
                    has(a) {
                        return this.Fs.has(a)
                    }
                    RA(a) {
                        return new __c.oP(this, a)
                    }
                    map(a) {
                        return this.ud.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.ud.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.ud.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.ud.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.ud.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.ud.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.ud.every(b => a(b.ref, b.id))
                    }[QMb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.iGa =
                            a;
                        this.$Na = (SLb.A(this), 0);
                        this.cra = new WeakMap
                    }
                };
                var RMb = new Set,
                    SMb = {
                        $w: () => ({
                            $a: PMb
                        })
                    },
                    TMb = class {
                        static A(a) {
                            __c.P(a, {
                                u0: aMb.shallow
                            })
                        }
                        ROa(a, b, {
                            element: c
                        }) {
                            const d = __c.C(this.iVa.H0.get(a));
                            w(d.element === b.element);
                            w(!this.u0.has(a));
                            b = {
                                element: VLb(this, b, c)
                            };
                            this.u0.set(a, b);
                            RMb.has(a) || (__c.HR.set(a, SMb), RMb.add(a));
                            return b
                        }
                        yLa(a) {
                            var b;
                            return (b = this.u0.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.iVa = a;
                            this.TBa = b;
                            this.p7 = c;
                            this.M = d;
                            this.Vt = e;
                            this.u0 = (TMb.A(this), new Map)
                        }
                    };
                var UMb = class {
                    static A(a) {
                        __c.P(a, {
                            H0: aMb.shallow
                        })
                    }
                    SOa(a, b) {
                        w(!this.H0.has(a));
                        b = {
                            document: ZLb(this.lna(a, b.document)),
                            element: ZLb(this.lna(a, b.element))
                        };
                        this.H0.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.lna = a;
                        this.H0 = (UMb.A(this), new Map)
                    }
                };
                __c.kBa = {
                    YOa: function(a) {
                        var b = a.M;
                        a = a.yZa;
                        var c = {
                            Hk: OLb(),
                            p7: NMb
                        };
                        const {
                            Hk: d,
                            p7: e
                        } = c;
                        c = new UMb(MLb(d));
                        b = new TMb(c, d, e, b, a);
                        return {
                            dia: c,
                            ucb: c,
                            bU: b,
                            aU: b
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/b3341b67b869254b.js.map