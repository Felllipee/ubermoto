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
                var YKb = function(a) {
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
                    ZKb = function(a) {
                        return () => a
                    },
                    f7 = function(a, b, c, d) {
                        return new $Kb(a, b, c, d)
                    },
                    g7 = function(a, b) {
                        return a === b || b.map(c => a.G$(aLb(c)))
                    },
                    cLb = function(a, b) {
                        return a.dba(b).map(c => new bLb(c, d => d.props[b]))
                    },
                    aLb = function(a) {
                        w(a instanceof h7);
                        return a
                    },
                    j7 = function(a, b) {
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
                                        return b.kind === "array" && i7(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : i7([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : i7([...a.keys(), ...a.values()], [...b.keys(),
                                            ...b.values()
                                        ]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && dLb(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    i7 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!j7(a[c], b[c])) return !1;
                        return !0
                    },
                    dLb = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!j7(a[f],
                                    b[f])) return !1;
                        return !0
                    },
                    k7 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    fLb = function(a, b) {
                        return a.map(c => b.map(d => eLb[0](c, d)))
                    },
                    hLb = function(a, b, c) {
                        return b.map(d => gLb[a](d, c))
                    },
                    l7 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return iLb(c.value);
                            case 1:
                                const e = l7(a, b, c.tq);
                                return jLb[c.name].map(u => m7(u, e));
                            case 2:
                                const f = l7(a, b, c.ZFa),
                                    g = l7(a, b, c.$Fa);
                                return kLb[c.name].map(u => lLb(u, f, g));
                            case 3:
                                const h = c.args.map(u => u.kind !== 13 ? new mLb(l7(a, b, u)) : new nLb(l7(a, b, u.I7a)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = h.map(u => u.Y8(v => v.type, v => v.type.AF()));
                                        return n7.union(...d).map(oLb[c]).map(u => pLb(u, h));
                                    default:
                                        return qLb[c].map(u => pLb(u, h))
                                }
                            case 4:
                                d = c.name;
                                const k = c.param,
                                    l = c.body,
                                    m = l7(a, b, c.WV);
                                c = m.type.AF();
                                const n = c.map(u => rLb(b, k, u, v => l7(a, v, l)));
                                return hLb(d, c, n.resultType).map(u => sLb(u, m, n));
                            case 5:
                                const p = c.entries.map(([u, v]) => [l7(a, b, u), l7(a, b, v)]);
                                c = n7.union(...p.map(([u]) => u.type));
                                d = n7.union(...p.map(([, u]) => u.type));
                                if (!g7(c, n7.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return fLb(c, d).map(u => tLb(u, p));
                            case 6:
                                const q = tg(c.fields, u => l7(a, b, u));
                                c = tg(q, u => u.type);
                                return (0, uLb[0])(c).map(u => vLb(u, q));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const r = l7(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.bSa.map(u => m7(u, r, {
                                    Rm: !0
                                }));
                            case 8:
                                return d = l7(a, b, c.base), wLb(d, c.z$a);
                            case 9:
                                return xLb(b, c.name);
                            case 10:
                                return d = __c.Qd(c.defs, u => l7(a, b, u)), yLb(a, b, d, c.body);
                            case 11:
                                d = l7(a, b, c.test).as(n7.gg);
                                const t = l7(a, b, c.v2a);
                                c = l7(a,
                                    b, c.alternate);
                                return zLb(d, t, c);
                            case 12:
                                return l7(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    iLb = function(a) {
                        switch (typeof a) {
                            case "string":
                                return o7(n7.string, a);
                            case "number":
                                return o7(n7.number, a);
                            case "boolean":
                                return o7(n7.gg, a);
                            case "undefined":
                                return o7(n7.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    wLb = function(a, b) {
                        return a.map(c => cLb(c, b).map(({
                            type: d,
                            get: e
                        }) => m7(new p7(c, d, e), a)))
                    },
                    xLb = function(a, b) {
                        return a.resolve(b).map(c => q7.of(c, d => d.resolve(b)))
                    },
                    yLb = function(a, b, c, d) {
                        const e = __c.Qd(c,
                                g => g.type),
                            f = __c.Qd(c, g => g.evaluate);
                        return ALb(l7(a, new r7(new Map(e), b), d), g => {
                            const h = __c.Qd(f, k => k(g));
                            return new r7(new Map(h), g)
                        })
                    },
                    zLb = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = n7.union(d, f);
                            return q7.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    m7 = function({
                        G5: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new q7(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Rm) {
                                const k = BLb(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    lLb = function({
                            G5: a,
                            aGa: b,
                            resultType: c,
                            apply: d
                        },
                        e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new q7(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    pLb = function({
                        cGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.Y5(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = n7.WV(a))));
                        return new q7(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.Y5(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.Y8(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    sLb = function({
                        itemType: a,
                        uGa: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as(a, b),
                            h = e.as(n7.WV(a));
                        return q7.of(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = BLb(p => {
                                    p = p.map(ZKb);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    tLb = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new q7(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    vLb = function({
                        bGa: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = CLb(a, (g, h) => d[h].as(g));
                        return new q7(b,
                            g => {
                                const h = DLb(f, k => k(g));
                                return () => c(ELb(h, k => k()))
                            })
                    },
                    o7 = function(a, b) {
                        const c = ZKb(b);
                        return new q7(a, () => c)
                    },
                    ALb = function(a, b) {
                        const c = a.evaluate;
                        return new q7(a.type, d => c(b(d)))
                    },
                    rLb = function(a, b, c, d) {
                        return d(a.define(b, c)).map((e, f) => new FLb(c, e, g => h => f(g.define(b, h))))
                    },
                    BLb = function(a) {
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
                    CLb = function(a, b) {
                        return tg(a, b)
                    },
                    DLb = function(a, b) {
                        return tg(a, b)
                    },
                    ELb = function(a, b) {
                        return tg(a, b)
                    },
                    KLb = function(a) {
                        const b =
                            a.types,
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
                                return G ? new d(this.type, this.F2, (H, J, M) => {
                                    M = this.j0(H, J, M);
                                    M != null && G(H, J, M);
                                    return M
                                }, (H, J, M, T) => {
                                    M != null && G(H, J, M);
                                    this.iia(H, J, M, T)
                                }) : this
                            }
                            DXa(G, H) {
                                const J = this.F2,
                                    M = this.j0,
                                    T =
                                    this.iia;
                                return GLb(this.type, R => {
                                    const V = () => M(G, H, R.get(H));
                                    return {
                                        nNa: () => J(V()),
                                        pqa: V,
                                        QVa: da => T(G, H, da, R)
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
                            f = (new d(b.number, G => G, t7("int32", G => G.value), u7("int32"))).QT(G => Number.isInteger(G)),
                            g = (new d(b.number, G => G, t7("double", G => G.value), u7("double"))).QT(G => Number.isFinite(G)),
                            h = new d(b.instance("Fill"),
                                G => c.instance("Fill", G), t7("fill", G => G.value), u7("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.Kv(),
                            r = e.Kv(),
                            t = f.Kv(),
                            u = g.Kv(),
                            v = h.Kv(),
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
                                        double: u,
                                        fill: v
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
                            const J = new HLb(G),
                                M = tg(H, R => R.key),
                                T = tg(H, R => {
                                    var V =
                                        R.Pwa;
                                    const da = R.Hua;
                                    switch (R.type) {
                                        case "string":
                                            V = F[V][da].string.QT(ILb(R.bC));
                                            break;
                                        case "boolean":
                                            V = F[V][da]["boolean"];
                                            break;
                                        case "double":
                                            V = F[V][da]["double"].QT(JLb(R.range));
                                            break;
                                        case "int32":
                                            V = F[V][da].int32.QT(JLb(R.range));
                                            break;
                                        case "fill":
                                            V = F[V][da].fill;
                                            break;
                                        default:
                                            throw new E(R);
                                    }
                                    return V.DXa(J, R.key)
                                });
                            return {
                                NN: new Map(Object.entries(T).map(([R, V]) => [M[R], V.type])),
                                apply: R => {
                                    const V = tg(T, ma => ma.eval(R)),
                                        da = tg(V, ma => ({
                                            get: ma.pqa
                                        })),
                                        oa = tg(V, ma => ({
                                            get: ma.pqa,
                                            set: ma.QVa
                                        }));
                                    return {
                                        qda: new Map(Object.entries(V).map(([ma,
                                            Aa
                                        ]) => [M[ma], Aa.nNa])),
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
                            if (a === "string" && typeof d === "string" || a === "boolean" && typeof d === "boolean" || a === "double" && typeof d === "number" || a === "int32" && typeof d === "number") b = {
                                type: a,
                                value: d
                            };
                            else {
                                if (a === "fill" &&
                                    typeof d === "object") throw b.error(a, "Write for fill is not yet supported");
                                throw b.error(a, `type error: expected ${a}, but received ${typeof d}`);
                            }
                            e.set(c, b)
                        }
                    },
                    JLb = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            w(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e, `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    ILb = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    GLb = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    MLb = function() {
                        return (new LLb({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.yQ.create({ ...__c.AQ,
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
                                P: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.SK.create({ ...__c.$R,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.$R.rotation,
                                    fill: __c.AQ,
                                    P: (f = (d = c.P) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.$R.P
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
                    OLb = function(a, b) {
                        return class extends NLb {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? w7(__c.pl, {
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
                    TLb = function(a, b, c) {
                        const d = f => ({
                            element: f.Y.Qg
                        });
                        b = YKb(b);
                        switch (c.type) {
                            case 0:
                                c = c.$w;
                                if (typeof c === "object") {
                                    var e = a.RBa.types;
                                    e = e.WV(e.instance("RectElement"));
                                    return PLb(a, d, b, e, c, f => new QLb(() => f().map(g => g.instance)))
                                }
                                return RLb(d, b, c);
                            case 1:
                                return SLb(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    PLb = function(a, b, c, d, e, f) {
                        const g =
                            a.q7(a.RBa, c, d).compile(e);
                        return {
                            type: 0,
                            $w: h => ({
                                $a: f(g.apply(b(h)))
                            })
                        }
                    },
                    RLb = function(a, b, c) {
                        return {
                            type: 0,
                            $w: d => c(b.apply(a(d)).data)
                        }
                    },
                    SLb = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: OLb(a.M, ULb(({
                                model: e
                            }) => {
                                const [f] = VLb(() => c.apply(b(e)).aba);
                                return w7(d, {
                                    data: f,
                                    Vt: a.Vt
                                })
                            }))
                        }
                    },
                    XLb = function(a) {
                        return {
                            NN: a.NN,
                            apply: WLb(a.apply)
                        }
                    },
                    WLb = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    YLb = __webpack_require__(519427),
                    x7 = YLb.computed,
                    ZLb = YLb.observable;
                var w7 = __webpack_require__(443763).jsx;
                var y7 = __webpack_require__(875604),
                    ULb = y7.memo,
                    NLb = y7.PureComponent,
                    VLb = y7.useState;
                var p7 = class {
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
                            this.aGa = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    A7 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.cGa = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    aMb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = $Lb;
                            this.keyType = a;
                            this.valueType = b;
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
                            this.bGa = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    $Kb = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.uGa = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var dMb = class {},
                    mLb = class extends dMb {
                        Y5(a) {
                            return new mLb(a(this.value))
                        }
                        Y8(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    nLb = class extends dMb {
                        Y5(a, b) {
                            return new nLb(b(this.value))
                        }
                        Y8(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var bLb = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var h7 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    B7 = class extends h7 {
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
                        f9(a) {
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
                            return a instanceof E7 && this.gx === a.gx && g7(this.tq, a.tq)
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
                    eMb = class extends E7 {
                        AF() {
                            return this.tq
                        }
                        wZ() {
                            const a = this.tq;
                            return {
                                size: n7.number,
                                empty: n7.gg,
                                get first() {
                                    return n7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    fMb = class extends E7 {
                        AF() {
                            return this.tq
                        }
                        wZ() {
                            const a = this.tq;
                            return {
                                size: n7.number,
                                empty: n7.gg,
                                get first() {
                                    return n7.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    gMb = class extends B7 {
                        eQ(a) {
                            return a instanceof gMb && g7(this.key, a.key) && g7(this.value, a.value)
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
                    hMb = class extends B7 {
                        eQ(a) {
                            return a instanceof
                            hMb ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && g7(this.fields[b], c)) : !1
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
                    F7 = class extends h7 {
                        G$(a) {
                            return this === a || this.hg.every(b => b.G$(a))
                        }
                        AF() {
                            return n7.union(...this.hg.map(a => a.AF()))
                        }
                        dba(a) {
                            return n7.union(...this.hg.map(b => b.dba(a)))
                        }
                        f9(a) {
                            this.hg.forEach(b => b.f9(a))
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
                    iMb = new C7("string"),
                    jMb = new C7("number"),
                    kMb = new C7("boolean"),
                    lMb = new C7("undefined"),
                    mMb = new F7([iMb, jMb, kMb]),
                    nMb = class {
                        get never() {
                            return G7
                        }
                        get string() {
                            return iMb
                        }
                        get number() {
                            return jMb
                        }
                        get gg() {
                            return kMb
                        }
                        get undefined() {
                            return lMb
                        }
                        get primitive() {
                            return mMb
                        }
                        optional(a) {
                            return n7.union(a, n7.undefined)
                        }
                        array(a) {
                            return new eMb(a)
                        }
                        set(a) {
                            return new fMb(a)
                        }
                        WV(a) {
                            return new F7([new eMb(a),
                                new fMb(a)
                            ])
                        }
                        map(a, b) {
                            return new gMb(a, b)
                        }
                        ec(a) {
                            return new hMb({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) aLb(d).f9(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return G7;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return g7(d, e) ? e : g7(e, d) ? d : new F7(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => g7(d, e)) || (c.forEach(e => g7(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new F7([...c])
                        }
                    },
                    oMb = class extends nMb {
                        instance(a) {
                            return new D7(a)
                        }
                    },
                    n7 = new oMb,
                    pMb = class extends nMb {
                        instance(a) {
                            return new D7(__c.C(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var qMb, rMb, H7 = Symbol("value"),
                    I7 = class {
                        get props() {
                            var a;
                            return (a = this.nFa) !== null && a !== void 0 ? a : this.nFa = this.L5()
                        }
                    },
                    sMb = class {
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
                qMb = Symbol.iterator;
                var tMb = class extends I7 {
                        L5() {
                            return new sMb(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[qMb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,k7).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    uMb = class {
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
                rMb = Symbol.iterator;
                var vMb = class extends I7 {
                        L5() {
                            return new uMb(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[rMb]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,k7).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    wMb = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${k7(a)}]: ${k7(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    xMb = class extends I7 {
                        L5() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${k7(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    yMb = class {
                        toString() {
                            return `[instance ${this.gx.name}]`
                        }
                        constructor(a, b) {
                            this.gx = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    zMb = class {
                        array(a) {
                            return new tMb(a)
                        }
                        arrayOf(...a) {
                            return new tMb(a)
                        }
                        set(a) {
                            return new vMb(a)
                        }
                        map(a) {
                            return new wMb(new Map(a))
                        }
                        ec(a) {
                            return new xMb({ ...a
                            })
                        }
                    },
                    AMb = class extends zMb {
                        instance(a, b) {
                            return new yMb(a, b)
                        }
                        stringify(a) {
                            return k7(a)
                        }
                        constructor() {
                            super();
                            this.Oh = j7
                        }
                    },
                    s7 = new AMb,
                    BMb = class extends zMb {
                        instance(a, b) {
                            a = __c.C(this.classes[a]);
                            return new yMb(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var jLb = {
                        [0]: new p7(n7.number, n7.number, a => -a),
                        [1]: new p7(n7.string, n7.number, a => a.length),
                        [2]: new p7(n7.gg, n7.gg, a => !a)
                    },
                    kLb = {
                        [0]: new z7(n7.number, n7.number, n7.number, (a, b) => a + b),
                        [1]: new z7(n7.number, n7.number, n7.number, (a, b) => a - b),
                        [2]: new z7(n7.number, n7.number, n7.number, (a, b) => a * b),
                        [3]: new z7(n7.number, n7.number, n7.number, (a, b) => a / b),
                        [4]: new z7(n7.number, n7.number, n7.number, (a, b) => a % b),
                        [5]: new z7(n7.string, n7.string, n7.string, (a, b) => a + b),
                        [6]: new z7(n7.number, n7.number, n7.gg, (a, b) => a === b),
                        [7]: new z7(n7.number,
                            n7.number, n7.gg, (a, b) => a !== b),
                        [8]: new z7(n7.number, n7.number, n7.gg, (a, b) => a < b),
                        [9]: new z7(n7.number, n7.number, n7.gg, (a, b) => a <= b),
                        [10]: new z7(n7.number, n7.number, n7.gg, (a, b) => a > b),
                        [11]: new z7(n7.number, n7.number, n7.gg, (a, b) => a >= b),
                        [12]: new z7(n7.gg, n7.gg, n7.gg, (a, b) => a && b),
                        [13]: new z7(n7.gg, n7.gg, n7.gg, (a, b) => a || b)
                    },
                    qLb = {
                        [2]: new A7(n7.number, n7.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new A7(n7.number, n7.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new A7(n7.number, n7.number, a => Math.max(...a)),
                        [5]: new A7(n7.number,
                            n7.number, a => Math.min(...a)),
                        [6]: new A7(n7.string, n7.string, a => a.join(""))
                    },
                    CMb = a => s7.array(a),
                    DMb = a => s7.set(a),
                    oLb = {
                        [0]: a => new A7(a, n7.array(a), CMb),
                        [1]: a => new A7(a, n7.set(a), DMb)
                    },
                    $Lb = a => s7.map(a),
                    eLb = {
                        [0]: (a, b) => new aMb(a, b, n7.map(a, b))
                    },
                    bMb = a => s7.ec(a),
                    uLb = {
                        [0]: a => new cMb(a, n7.ec(a))
                    },
                    EMb = (a, b) => s7.array(b.map(c => c())),
                    FMb = (a, b) => s7.array(b.flatMap(c => c().items)),
                    GMb = (a, b) => s7.array(a.filter((c, d) => b[d]()).map(c => c())),
                    HMb = (a, b) => b.some(c => c()),
                    IMb = (a, b) => b.every(c => c()),
                    JMb = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    gLb = {
                        [0]: (a, b) => b.map(c => f7(a, c, n7.array(c), EMb)),
                        [1]: (a, b) => b.AF().map(c => f7(a, n7.array(c), n7.array(c), FMb)),
                        [2]: a => f7(a, n7.gg, n7.array(a), GMb),
                        [3]: a => f7(a, n7.gg, n7.gg, HMb),
                        [4]: a => f7(a, n7.gg, n7.gg, IMb),
                        [5]: a => f7(a, n7.gg, n7.optional(a), JMb)
                    };
                var r7 = class {
                    define(a, b) {
                        return new r7(new Map([
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
                var LMb = (a, b, c) => {
                        const d = new r7(new Map(b.NN)),
                            e = new KMb(a);
                        return {
                            compile: f => {
                                const g = l7(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new r7(new Map(b.apply(h).qda));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    KMb = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    q7 = class {
                        static of (a, b) {
                            return new q7(a, b)
                        }
                        as(a) {
                            if (!g7(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new q7(this.type, b => {
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
                    FLb = class {
                        as(a, b) {
                            if (!g7(a, this.H5)) throw Error(`argument type ${a} is not assignable to parameter type: ${this.H5}`);
                            if (!g7(this.resultType, b)) throw Error(`return type ${this.resultType} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this.H5, this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.H5 = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var LLb = class {
                        add(a) {
                            a = a(MMb, this.types);
                            return new LLb({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new pMb(this.classes);
                            this.values = new BMb(this.classes)
                        }
                    },
                    MMb = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.bSa = new p7(n7.ec(b), n7.instance(this), d => s7.instance(this, c(d.fields)))
                        }
                    };
                var HLb = class {
                    error(a, b) {
                        return Error(`widget '${this.uZa}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.uZa = a
                    }
                };
                var NMb = Object.freeze({
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
                    QA() {
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
                var OMb;
                OMb = Symbol.iterator;
                var QLb = class {
                    static A(a) {
                        __c.P(a, {
                            ud: x7,
                            Fs: x7
                        })
                    }
                    get ud() {
                        return this.gGa().map(a => {
                            let b = this.bra.get(a);
                            b == null && (b = `${this.YNa++}`, this.bra.set(a, b));
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
                    QA(a) {
                        return new __c.pP(this, a)
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
                    }[OMb]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.gGa =
                            a;
                        this.YNa = (QLb.A(this), 0);
                        this.bra = new WeakMap
                    }
                };
                var PMb = new Set,
                    QMb = {
                        $w: () => ({
                            $a: NMb
                        })
                    },
                    RMb = class {
                        static A(a) {
                            __c.P(a, {
                                u0: ZLb.shallow
                            })
                        }
                        POa(a, b, {
                            element: c
                        }) {
                            const d = __c.C(this.gVa.H0.get(a));
                            w(d.element === b.element);
                            w(!this.u0.has(a));
                            b = {
                                element: TLb(this, b, c)
                            };
                            this.u0.set(a, b);
                            PMb.has(a) || (__c.IR.set(a, QMb), PMb.add(a));
                            return b
                        }
                        wLa(a) {
                            var b;
                            return (b = this.u0.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.gVa = a;
                            this.RBa = b;
                            this.q7 = c;
                            this.M = d;
                            this.Vt = e;
                            this.u0 = (RMb.A(this), new Map)
                        }
                    };
                var SMb = class {
                    static A(a) {
                        __c.P(a, {
                            H0: ZLb.shallow
                        })
                    }
                    QOa(a, b) {
                        w(!this.H0.has(a));
                        b = {
                            document: XLb(this.kna(a, b.document)),
                            element: XLb(this.kna(a, b.element))
                        };
                        this.H0.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.kna = a;
                        this.H0 = (SMb.A(this), new Map)
                    }
                };
                __c.jBa = {
                    WOa: function(a) {
                        var b = a.M;
                        a = a.wZa;
                        var c = {
                            Hk: MLb(),
                            q7: LMb
                        };
                        const {
                            Hk: d,
                            q7: e
                        } = c;
                        c = new SMb(KLb(d));
                        b = new RMb(c, d, e, b, a);
                        return {
                            dia: c,
                            ocb: c,
                            bU: b,
                            aU: b
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/1e089dab623581b8.js.map