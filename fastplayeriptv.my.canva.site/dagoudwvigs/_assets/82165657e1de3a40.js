(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [70911], {

        /***/
        88780: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(878415);
            __web_req__(914242);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var mg = __c.mg;
                var E = __c.E;
                var v = __c.v;
                var i8b = function(a) {
                        var b = {
                            element: void 0
                        };
                        const c = new Map;
                        for (const d in b) a[d].WY.forEach((e, f) => c.set(f, e));
                        return {
                            WY: c,
                            apply: d => {
                                const e = new Map,
                                    f = {},
                                    g = {};
                                for (const h in d) {
                                    const k = a[h].apply(d[h]);
                                    k.Txa.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.nua
                                }
                                return {
                                    Txa: e,
                                    data: f,
                                    nua: g
                                }
                            }
                        }
                    },
                    j8b = function(a) {
                        return () => a
                    },
                    a6 = function(a, b, c, d) {
                        return new k8b(a, b, c, d)
                    },
                    l8b = function(a, b) {
                        return b(a)
                    },
                    b6 = function(a, b) {
                        return a === b || b.map(c => a.usa(m8b(c)))
                    },
                    o8b = function(a, b) {
                        return a.qua(b).map(c => new n8b(c,
                            d => d.props[b]))
                    },
                    m8b = function(a) {
                        v(a instanceof c6);
                        return a
                    },
                    e6 = function(a, b) {
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
                                        return b.kind === "array" && d6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : d6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !==
                                            b.size ? !1 : d6([...a.keys(), ...a.values()], [...b.keys(), ...b.values()]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && p8b(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    d6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!e6(a[c], b[c])) return !1;
                        return !0
                    },
                    p8b = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !==
                            e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!e6(a[f], b[f])) return !1;
                        return !0
                    },
                    f6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    r8b = function(a, b) {
                        return a.map(c => b.map(d => q8b[0](c, d)))
                    },
                    t8b = function(a, b, c) {
                        return b.map(d => s8b[a](d, c))
                    },
                    h6 = function(a, b) {
                        return new g6(new Map(b), a)
                    },
                    i6 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return u8b(c.value);
                            case 1:
                                const f = i6(a, b, c.kv);
                                return v8b[c.name].map(t => j6(t, f));
                            case 2:
                                const g = i6(a, b, c.o7a),
                                    h = i6(a, b, c.p7a);
                                return w8b[c.name].map(t =>
                                    x8b(t, g, h));
                            case 3:
                                const k = c.args.map(t => t.kind !== 13 ? new y8b(i6(a, b, t)) : new z8b(i6(a, b, t.cIb)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = k.map(t => t.fqa(w => w.type, w => w.type.uN()));
                                        return k6.union(...d).map(A8b[c]).map(t => B8b(t, k));
                                    default:
                                        return C8b[c].map(t => B8b(t, k))
                                }
                            case 4:
                                d = c.name;
                                var e = c.param;
                                const l = c.body,
                                    m = i6(a, b, c.x9);
                                c = m.type.uN();
                                const n = D8b(b, [
                                    [e, c]
                                ], t => i6(a, t, l));
                                return t8b(d, c, n.resultType).map(t => E8b(t, m, n));
                            case 5:
                                const p = c.entries.map(([t, w]) => [i6(a, b, t), i6(a, b, w)]);
                                c = k6.union(...p.map(([t]) =>
                                    t.type));
                                d = k6.union(...p.map(([, t]) => t.type));
                                if (!b6(c, k6.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return r8b(c, d).map(t => F8b(t, p));
                            case 6:
                                const q = mg(c.fields, t => i6(a, b, t));
                                c = mg(q, t => t.type);
                                return (0, G8b[0])(c).map(t => H8b(t, q));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const r = i6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.bmb.map(t => j6(t, r, {
                                    Fq: !0
                                }));
                            case 8:
                                return d = i6(a, b, c.base), I8b(d, c.lMb);
                            case 9:
                                return J8b(b, c.name);
                            case 10:
                                return d =
                                    __c.vd(c.defs, t => i6(a, b, t)), K8b(a, b, d, c.body);
                            case 11:
                                return d = i6(a, b, c.test).as(k6.ai), e = i6(a, b, c.JBb), c = i6(a, b, c.alternate), L8b(d, e, c);
                            case 12:
                                return i6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    u8b = function(a) {
                        switch (typeof a) {
                            case "string":
                                return l6(k6.string, a);
                            case "number":
                                return l6(k6.number, a);
                            case "boolean":
                                return l6(k6.ai, a);
                            case "undefined":
                                return l6(k6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    I8b = function(a, b) {
                        return a.map(c => o8b(c, b).map(({
                            type: d,
                            get: e
                        }) => j6(new m6(c, d, e), a)))
                    },
                    J8b = function(a, b) {
                        return a.resolve(b).map(c => n6.of(c, d => d.resolve(b)))
                    },
                    K8b = function(a, b, c, d) {
                        const e = __c.vd(c, g => g.type),
                            f = __c.vd(c, g => g.evaluate);
                        return M8b(i6(a, h6(b, e), d), g => {
                            const h = __c.vd(f, k => k(g));
                            return h6(g, h)
                        })
                    },
                    L8b = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = k6.union(d, f);
                            return n6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    j6 = function({
                        Fla: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new n6(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Fq) {
                                const k =
                                    N8b(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    x8b = function({
                        Fla: a,
                        q7a: b,
                        resultType: c,
                        apply: d
                    }, e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new n6(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    B8b = function({
                        s7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.ema(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = k6.x9(a))));
                        return new n6(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.ema(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.fqa(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    E8b = function({
                        itemType: a,
                        M7a: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as([a], b),
                            h = e.as(k6.x9(a));
                        return new n6(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = N8b(p => {
                                    p = p.map(j8b);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    F8b = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new n6(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    H8b = function({
                        r7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = O8b(a, (g, h) => d[h].as(g));
                        return new n6(b, g => {
                            const h = P8b(f, k => k(g));
                            return () => c(Q8b(h, k => k()))
                        })
                    },
                    l6 = function(a, b) {
                        const c = j8b(b);
                        return new n6(a, () => c)
                    },
                    M8b = function(a, b) {
                        const c = a.evaluate;
                        return new n6(a.type, d => c(b(d)))
                    },
                    D8b = function(a, b, c) {
                        const d = b.map(f => f[0]),
                            e = b.map(f => f[1]);
                        return l8b(e, f => c(h6(a, new Map(b))).map((g, h) => new R8b(f, g, k => (...l) => {
                            const m = new Map(d.map((n, p) => [n, l[p]]));
                            return h(h6(k, m))
                        })))
                    },
                    N8b = function(a) {
                        let b;
                        return c => {
                            if (b && o6.fh(b.u, c)) return b.v;
                            const d = a(c);
                            b = {
                                u: c,
                                v: d
                            };
                            return d
                        }
                    },
                    O8b = function(a, b) {
                        return mg(a, b)
                    },
                    P8b = function(a, b) {
                        return mg(a, b)
                    },
                    Q8b = function(a, b) {
                        return mg(a, b)
                    },
                    W8b = function(a) {
                        const b = a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const H = this.Zha,
                                    I = this.Lfa,
                                    K = this.ODa,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, Q => Q != null ? H(Q) : void 0, (Q, T, V) => V != null ? I(Q, T, V) : void 0, (Q, T, V, ba) => V != null ? K(Q, T, V, ba) : ba.delete(T))
                            }
                            UB() {
                                return new d(this.type, this.Zha, this.Lfa, (H, I) => {
                                    throw H.error(I, "read-only field");
                                })
                            }
                            G6(H) {
                                return H ? new d(this.type, this.Zha,
                                    (I, K, M) => {
                                        M = this.Lfa(I, K, M);
                                        M != null && H(I, K, M);
                                        return M
                                    }, (I, K, M, Q) => {
                                        M != null && H(I, K, M);
                                        this.ODa(I, K, M, Q)
                                    }) : this
                            }
                            Rub(H, I) {
                                const K = this.Zha,
                                    M = this.Lfa,
                                    Q = this.ODa;
                                return S8b(this.type, T => {
                                    const V = () => M(H, I, T.get(I));
                                    return {
                                        Rfb: () => K(V()),
                                        gNa: V,
                                        tsb: ba => Q(H, I, ba, T)
                                    }
                                })
                            }
                            constructor(H, I, K, M) {
                                this.type = H;
                                this.Zha = I;
                                this.Lfa = K;
                                this.ODa = M
                            }
                        }
                        a = new d(b.string, H => H, p6("string", H => H.value), q6("string"));
                        const e = new d(b.ai, H => H, p6("boolean", H => H.value), q6("boolean")),
                            f = (new d(b.number, H => H, p6("int32", H => H.value), q6("int32"))).G6(H =>
                                Number.isInteger(H)),
                            g = (new d(b.number, H => H, p6("double", H => H.value), q6("double"))).G6(H => Number.isFinite(H)),
                            h = new d(b.instance("Fill"), H => c.instance("Fill", H), p6("fill", H => H.value), q6("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.UB(),
                            r = e.UB(),
                            t = f.UB(),
                            w = g.UB(),
                            u = h.UB(),
                            x = k.UB(),
                            y = l.UB(),
                            A = m.UB(),
                            z = n.UB(),
                            B = p.UB(),
                            G = {
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
                                        double: w,
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
                                        int32: A,
                                        double: z,
                                        fill: B
                                    }
                                }
                            };
                        return (H, I) => {
                            const K = new T8b(H),
                                M = mg(I, T => T.key),
                                Q = mg(I, T => {
                                    var V = T.cWa;
                                    const ba = T.$Sa;
                                    switch (T.type) {
                                        case "string":
                                            V = G[V][ba].string.G6(U8b(T.FJ));
                                            break;
                                        case "boolean":
                                            V = G[V][ba]["boolean"];
                                            break;
                                        case "double":
                                            V = G[V][ba]["double"].G6(V8b(T.range));
                                            break;
                                        case "int32":
                                            V = G[V][ba].int32.G6(V8b(T.range));
                                            break;
                                        case "fill":
                                            V = G[V][ba].fill;
                                            break;
                                        default:
                                            throw new E(T);
                                    }
                                    return V.Rub(K, T.key)
                                });
                            return {
                                WY: new Map(Object.entries(Q).map(([T,
                                    V
                                ]) => [M[T], V.type])),
                                apply: T => {
                                    const V = mg(Q, ka => ka.eval(T)),
                                        ba = mg(V, ka => ({
                                            get: ka.gNa
                                        })),
                                        ea = mg(V, ka => ({
                                            get: ka.gNa,
                                            set: ka.tsb
                                        }));
                                    return {
                                        Txa: new Map(Object.entries(V).map(([ka, oa]) => [M[ka], oa.Rfb])),
                                        data: Object.create(null, ba),
                                        nua: Object.create(null, ea)
                                    }
                                }
                            }
                        }
                    },
                    p6 = function(a, b) {
                        return (c, d, e) => {
                            if (e == null) throw c.error(d, "not found");
                            if (e.type !== a) throw c.error(d, `type error: expected ${a}, was ${e.type}`);
                            return b(e)
                        }
                    },
                    q6 = function(a) {
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
                    V8b = function(a) {
                        if (a) {
                            var b = a.min,
                                c = a.max;
                            v(b == null || c == null || b <= c);
                            return (d, e, f) => {
                                if (b != null && f < b) throw d.error(e, `value below min ${b}: ${f}`);
                                if (c != null && f > c) throw d.error(e,
                                    `value above max ${b}: ${f}`);
                            }
                        }
                    },
                    U8b = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    S8b = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    Y8b = function() {
                        return (new X8b({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.NO.create({ ...__c.lv,
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
                                X: b.union(b.array(b.number),
                                    b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.jv.create({ ...__c.kv,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.kv.rotation,
                                    fill: __c.lv,
                                    X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.kv.X
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
                    r6 = function() {
                        throw Error("ref not found");
                    },
                    $8b = function(a, b) {
                        return class extends Z8b {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ?
                                    s6(__c.ay, {
                                        background: "criticalLow",
                                        width: "full",
                                        height: "full",
                                        padding: "0.25u",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        role: "alert",
                                        children: s6(__c.Yx, {
                                            size: "xsmall",
                                            alignment: "center",
                                            children: __c.O("Q6XSow")
                                        })
                                    }) : s6(b, { ...this.props
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
                    e9b = function(a, b, c) {
                        const d = f => ({
                            element: f.ha.Zi
                        });
                        b = i8b(b);
                        switch (c.type) {
                            case 0:
                                c = c.CD;
                                if (typeof c === "object") {
                                    var e = a.A1a.types;
                                    e = e.x9(e.instance("RectElement"));
                                    return a9b(a, d, b, e, c, f =>
                                        new b9b(() => f().map(g => g.instance)))
                                }
                                return c9b(d, b, c);
                            case 1:
                                return d9b(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    a9b = function(a, b, c, d, e, f) {
                        const g = a.Sna(a.A1a, c, d).compile(e);
                        return {
                            type: 0,
                            CD: h => ({
                                Oa: f(g.apply(b(h)))
                            })
                        }
                    },
                    c9b = function(a, b, c) {
                        return {
                            type: 0,
                            CD: d => c(b.apply(a(d)).data)
                        }
                    },
                    d9b = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: $8b(a.H, f9b(({
                                model: e
                            }) => {
                                const [f] = g9b(() => c.apply(b(e)).nua);
                                return s6(d, {
                                    data: f,
                                    Nz: a.Nz
                                })
                            }))
                        }
                    },
                    i9b = function(a) {
                        return {
                            WY: a.WY,
                            apply: h9b(a.apply)
                        }
                    },
                    h9b = function(a) {
                        const b =
                            new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    j9b = __webpack_require__(519427),
                    t6 = j9b.computed,
                    k9b = j9b.observable;
                var s6 = __webpack_require__(443763).jsx;
                var u6 = __webpack_require__(875604),
                    f9b = u6.memo,
                    Z8b = u6.PureComponent,
                    g9b = u6.useState;
                var m6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Fla = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    v6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.Fla = a;
                            this.q7a = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    m9b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b) {
                            var c = l9b;
                            this.r7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    w6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.s7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    o9b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = n9b;
                            this.keyType = a;
                            this.valueType = b;
                            this.resultType =
                                c;
                            this.apply = d
                        }
                    },
                    k8b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.M7a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var n8b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var p9b = class {},
                    y8b = class extends p9b {
                        ema(a) {
                            return new y8b(a(this.value))
                        }
                        fqa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    z8b = class extends p9b {
                        ema(a, b) {
                            return new z8b(b(this.value))
                        }
                        fqa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var c6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    x6 = class extends c6 {
                        usa(a) {
                            return this === a || a.eza(b => this.l1(b))
                        }
                        uN() {
                            throw Error(`${this} is not iterable`);
                        }
                        qua(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.cda();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        cda() {
                            throw Error(`${this} is not navigable`);
                        }
                        oqa(a) {
                            a(this)
                        }
                        eza(a) {
                            return a(this)
                        }
                        constructor() {
                            super();
                            this.kind = "simple";
                            this.propTypes =
                                void 0
                        }
                    },
                    y6 = class extends x6 {
                        l1(a) {
                            return a instanceof y6 && this.name === a.name
                        }
                        toString() {
                            return this.name
                        }
                        constructor(a) {
                            super();
                            this.name = a
                        }
                    },
                    z6 = class extends x6 {
                        l1(a) {
                            return a instanceof z6 && this.ED === a.ED
                        }
                        toString() {
                            return this.ED.name
                        }
                        constructor(a) {
                            super();
                            this.ED = a
                        }
                    },
                    A6 = class extends x6 {
                        l1(a) {
                            return a instanceof A6 && this.ED === a.ED && b6(this.kv, a.kv)
                        }
                        toString() {
                            return `${this.ED}<${this.kv}>`
                        }
                        constructor(a, b) {
                            super();
                            this.ED = a;
                            this.kv = b
                        }
                    },
                    q9b = class extends A6 {
                        uN() {
                            return this.kv
                        }
                        cda() {
                            const a =
                                this.kv;
                            return {
                                size: k6.number,
                                empty: k6.ai,
                                get first() {
                                    return k6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    r9b = class extends A6 {
                        uN() {
                            return this.kv
                        }
                        cda() {
                            const a = this.kv;
                            return {
                                size: k6.number,
                                empty: k6.ai,
                                get first() {
                                    return k6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    s9b = class extends x6 {
                        l1(a) {
                            return a instanceof s9b && b6(this.key, a.key) && b6(this.value, a.value)
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
                    t9b = class extends x6 {
                        l1(a) {
                            return a instanceof
                            t9b ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && b6(this.fields[b], c)) : !1
                        }
                        cda() {
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
                    B6 = class extends c6 {
                        usa(a) {
                            return this === a || this.Gh.every(b => b.usa(a))
                        }
                        uN() {
                            return k6.union(...this.Gh.map(a => a.uN()))
                        }
                        qua(a) {
                            return k6.union(...this.Gh.map(b => b.qua(a)))
                        }
                        oqa(a) {
                            this.Gh.forEach(b => b.oqa(a))
                        }
                        eza(a) {
                            return this.Gh.some(b =>
                                b.eza(a))
                        }
                        toString() {
                            return this.Gh.length ? this.Gh.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Gh = a;
                            this.kind = "disjunction";
                            v(a.length !== 1)
                        }
                    },
                    C6 = new B6([]),
                    u9b = new y6("string"),
                    v9b = new y6("number"),
                    w9b = new y6("boolean"),
                    x9b = new y6("undefined"),
                    y9b = new B6([u9b, v9b, w9b]),
                    z9b = class {
                        get never() {
                            return C6
                        }
                        get string() {
                            return u9b
                        }
                        get number() {
                            return v9b
                        }
                        get ai() {
                            return w9b
                        }
                        get undefined() {
                            return x9b
                        }
                        get primitive() {
                            return y9b
                        }
                        optional(a) {
                            return k6.union(a, k6.undefined)
                        }
                        array(a) {
                            return new q9b(a)
                        }
                        set(a) {
                            return new r9b(a)
                        }
                        x9(a) {
                            return new B6([new q9b(a),
                                new r9b(a)
                            ])
                        }
                        map(a, b) {
                            return new s9b(a, b)
                        }
                        Sc(a) {
                            return new t9b({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) m8b(d).oqa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return b6(d, e) ? e : b6(e, d) ? d : new B6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => b6(d, e)) || (c.forEach(e => b6(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new B6([...c])
                        }
                    },
                    A9b = class extends z9b {
                        instance(a) {
                            return new z6(a)
                        }
                    },
                    k6 = new A9b,
                    B9b = class extends z9b {
                        instance(a) {
                            return new z6(__c.D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var C9b, D9b, D6 = Symbol("value"),
                    E6 = class {
                        get props() {
                            var a;
                            return (a = this.D6a) !== null && a !== void 0 ? a : this.D6a = this.Gla()
                        }
                    },
                    E9b = class {
                        get size() {
                            return this[D6].length
                        }
                        get empty() {
                            return this[D6].length === 0
                        }
                        get first() {
                            return this[D6][0]
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                C9b = Symbol.iterator;
                var F9b = class extends E6 {
                        Gla() {
                            return new E9b(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[C9b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,f6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    G9b = class {
                        get size() {
                            return this[D6].size
                        }
                        get empty() {
                            return this[D6].size === 0
                        }
                        get first() {
                            return this[D6][Symbol.iterator]().next().value
                        }
                        constructor(a) {
                            this[D6] = a
                        }
                    };
                D9b = Symbol.iterator;
                var H9b = class extends E6 {
                        Gla() {
                            return new G9b(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[D9b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,f6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    I9b = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${f6(a)}]: ${f6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    J9b = class extends E6 {
                        Gla() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${f6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    K9b = class {
                        toString() {
                            return `[instance ${this.ED.name}]`
                        }
                        constructor(a, b) {
                            this.ED = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    L9b = class {
                        array(a) {
                            return new F9b(a)
                        }
                        arrayOf(...a) {
                            return new F9b(a)
                        }
                        set(a) {
                            return new H9b(a)
                        }
                        map(a) {
                            return new I9b(new Map(a))
                        }
                        Sc(a) {
                            return new J9b({ ...a
                            })
                        }
                    },
                    M9b = class extends L9b {
                        instance(a, b) {
                            return new K9b(a, b)
                        }
                        stringify(a) {
                            return f6(a)
                        }
                        constructor() {
                            super();
                            this.fh = e6
                        }
                    },
                    o6 = new M9b,
                    N9b = class extends L9b {
                        instance(a, b) {
                            a = __c.D(this.classes[a]);
                            return new K9b(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var v8b = {
                        [0]: new m6(k6.number, k6.number, a => -a),
                        [1]: new m6(k6.string, k6.number, a => a.length),
                        [2]: new m6(k6.ai, k6.ai, a => !a)
                    },
                    w8b = {
                        [0]: new v6(k6.number, k6.number, k6.number, (a, b) => a + b),
                        [1]: new v6(k6.number, k6.number, k6.number, (a, b) => a - b),
                        [2]: new v6(k6.number, k6.number, k6.number, (a, b) => a * b),
                        [3]: new v6(k6.number, k6.number, k6.number, (a, b) => a / b),
                        [4]: new v6(k6.number, k6.number, k6.number, (a, b) => a % b),
                        [5]: new v6(k6.string, k6.string, k6.string, (a, b) => a + b),
                        [6]: new v6(k6.number, k6.number, k6.ai, (a, b) => a === b),
                        [7]: new v6(k6.number,
                            k6.number, k6.ai, (a, b) => a !== b),
                        [8]: new v6(k6.number, k6.number, k6.ai, (a, b) => a < b),
                        [9]: new v6(k6.number, k6.number, k6.ai, (a, b) => a <= b),
                        [10]: new v6(k6.number, k6.number, k6.ai, (a, b) => a > b),
                        [11]: new v6(k6.number, k6.number, k6.ai, (a, b) => a >= b),
                        [12]: new v6(k6.ai, k6.ai, k6.ai, (a, b) => a && b),
                        [13]: new v6(k6.ai, k6.ai, k6.ai, (a, b) => a || b)
                    },
                    C8b = {
                        [2]: new w6(k6.number, k6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new w6(k6.number, k6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new w6(k6.number, k6.number, a => Math.max(...a)),
                        [5]: new w6(k6.number,
                            k6.number, a => Math.min(...a)),
                        [6]: new w6(k6.string, k6.string, a => a.join(""))
                    },
                    O9b = a => o6.array(a),
                    P9b = a => o6.set(a),
                    A8b = {
                        [0]: a => new w6(a, k6.array(a), O9b),
                        [1]: a => new w6(a, k6.set(a), P9b)
                    },
                    n9b = a => o6.map(a),
                    q8b = {
                        [0]: (a, b) => new o9b(a, b, k6.map(a, b))
                    },
                    l9b = a => o6.Sc(a),
                    G8b = {
                        [0]: a => new m9b(a, k6.Sc(a))
                    },
                    Q9b = (a, b) => o6.array(b.map(c => c())),
                    R9b = (a, b) => o6.array(b.flatMap(c => c().items)),
                    S9b = (a, b) => o6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    T9b = (a, b) => b.some(c => c()),
                    U9b = (a, b) => b.every(c => c()),
                    V9b = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    s8b = {
                        [0]: (a, b) => b.map(c => a6(a, c, k6.array(c), Q9b)),
                        [1]: (a, b) => b.uN().map(c => a6(a, k6.array(c), k6.array(c), R9b)),
                        [2]: a => a6(a, k6.ai, k6.array(a), S9b),
                        [3]: a => a6(a, k6.ai, k6.ai, T9b),
                        [4]: a => a6(a, k6.ai, k6.ai, U9b),
                        [5]: a => a6(a, k6.ai, k6.optional(a), V9b)
                    };
                var g6 = class {
                    define(a, b) {
                        return new g6(new Map([
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
                var X9b = (a, b, c) => {
                        const d = new g6(new Map(b.WY)),
                            e = new W9b(a);
                        return {
                            compile: f => {
                                const g = i6(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new g6(new Map(b.apply(h).Txa));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    W9b = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    n6 = class {
                        static of (a, b) {
                            return new n6(a, b)
                        }
                        as(a) {
                            if (!b6(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new n6(this.type, b => {
                                const c = t6(a(b), {
                                    equals: o6.fh
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
                    R8b = class {
                        as(a, b) {
                            const c = this.tVa,
                                d = this.resultType;
                            if (a.length < c.length) throw Error(`Target signature provides too few arguments. Expected ${c.length} or more, got ${a.length}.`);
                            for (let e = 0; e < c.length; e++)
                                if (!b6(a[e], c[e])) throw Error(`Types of parameter ${e} are incompatible.  Type ${a[e]} is not assignable to parameter type: ${c[e]}`);
                            if (!b6(d, b)) throw Error(`return type ${d} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this.tVa,
                                this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.tVa = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var X8b = class {
                        add(a) {
                            a = a(Y9b, this.types);
                            return new X8b({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new B9b(this.classes);
                            this.values = new N9b(this.classes)
                        }
                    },
                    Y9b = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.bmb = new m6(k6.Sc(b), k6.instance(this), d => o6.instance(this, c(d.fields)))
                        }
                    };
                var T8b = class {
                    error(a, b) {
                        return Error(`widget '${this.Twb}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.Twb = a
                    }
                };
                var Z9b = Object.freeze({
                    empty: !0,
                    count() {
                        return 0
                    },
                    toArray() {
                        return []
                    },
                    Bs() {
                        return new Map
                    },
                    first() {},
                    last() {},
                    next() {
                        r6()
                    },
                    Wb() {
                        r6()
                    },
                    Ie() {
                        r6()
                    },
                    cB() {
                        r6()
                    },
                    has() {
                        return !1
                    },
                    Jt() {
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
                var $9b;
                $9b = Symbol.iterator;
                var b9b = class {
                    static A(a) {
                        __c.P(a, {
                            Be: t6,
                            gy: t6
                        })
                    }
                    get Be() {
                        return this.x7a().map(a => {
                            let b = this.nOa.get(a);
                            b == null && (b = `${this.Sgb++}`, this.nOa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get gy() {
                        const a = new Map;
                        this.Be.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Pl(a) {
                        return __c.D(this.gy.get(a), "ref not found")
                    }
                    get empty() {
                        return !this.Be.length
                    }
                    count() {
                        return this.Be.length
                    }
                    toArray() {
                        return this.Be.map(a => a.ref)
                    }
                    Bs() {
                        return new Map(this.map((a, b) => [b, a]))
                    }
                    get paa() {
                        const a = this.Be[0];
                        return a && a.ref
                    }
                    get Lca() {
                        const a =
                            this.Be[this.Be.length - 1];
                        return a && a.ref
                    }
                    first(a) {
                        if (!a) return this.paa;
                        const b = this.Be.find(c => a(c.ref));
                        return b && b.ref
                    }
                    last(a) {
                        if (!a) return this.Lca;
                        const b = this.Be;
                        for (let c = b.length - 1; c >= 0; c--) {
                            const d = b[c];
                            if (a(d.ref)) return d.ref
                        }
                    }
                    next(a, b) {
                        const c = this.Be;
                        for (a = this.Pl(a) + 1; a < c.length; a++) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Wb(a, b) {
                        const c = this.Be;
                        for (a = this.Pl(a) - 1; a >= 0; a--) {
                            const d = c[a];
                            if (!b || b(d.ref)) return d.ref
                        }
                    }
                    Ie(a, b) {
                        a = this.gy.get(a);
                        b = this.gy.get(b);
                        v(a != null);
                        v(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    cB(a) {
                        return this.Be[this.Pl(a)].id
                    }
                    has(a) {
                        return this.gy.has(a)
                    }
                    Jt(a) {
                        return new __c.yN(this, a)
                    }
                    map(a) {
                        return this.Be.map(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    flatMap(a) {
                        return this.Be.flatMap(({
                            ref: b,
                            id: c
                        }) => a(b, c))
                    }
                    filter(a) {
                        return this.Be.filter(b => a(b.ref, b.id)).map(b => b.ref)
                    }
                    forEach(a) {
                        this.Be.forEach((b, c) => a(b.ref, b.id, c))
                    }
                    reduce(a, b) {
                        return this.Be.reduce((c, d) => a(c, d.ref, d.id), b)
                    }
                    some(a) {
                        return this.Be.some(b => a(b.ref, b.id))
                    }
                    every(a) {
                        return this.Be.every(b => a(b.ref, b.id))
                    }[$9b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.x7a =
                            a;
                        this.Sgb = (b9b.A(this), 0);
                        this.nOa = new WeakMap
                    }
                };
                var a$b = new Set,
                    b$b = {
                        CD: () => ({
                            Oa: Z9b
                        })
                    },
                    c$b = class {
                        static A(a) {
                            __c.P(a, {
                                aga: k9b.shallow
                            })
                        }
                        Nhb(a, b, {
                            element: c
                        }) {
                            const d = __c.D(this.srb.nga.get(a));
                            v(d.element === b.element);
                            v(!this.aga.has(a));
                            b = {
                                element: e9b(this, b, c)
                            };
                            this.aga.set(a, b);
                            a$b.has(a) || (__c.OP.set(a, b$b), a$b.add(a));
                            return b
                        }
                        Ldb(a) {
                            var b;
                            return (b = this.aga.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.srb = a;
                            this.A1a = b;
                            this.Sna = c;
                            this.H = d;
                            this.Nz = e;
                            this.aga = (c$b.A(this), new Map)
                        }
                    };
                var d$b = class {
                    static A(a) {
                        __c.P(a, {
                            nga: k9b.shallow
                        })
                    }
                    Ohb(a, b) {
                        v(!this.nga.has(a));
                        b = {
                            document: i9b(this.LJa(a, b.document)),
                            element: i9b(this.LJa(a, b.element))
                        };
                        this.nga.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.LJa = a;
                        this.nga = (d$b.A(this), new Map)
                    }
                };
                __c.KRa = {
                    Thb: function(a) {
                        var b = a.H;
                        a = a.Uwb;
                        var c = {
                            fo: Y8b(),
                            Sna: X9b
                        };
                        const {
                            fo: d,
                            Sna: e
                        } = c;
                        c = new d$b(W8b(d));
                        b = new c$b(c, d, e, b, a);
                        return {
                            HDa: c,
                            mQb: c,
                            W6: b,
                            V6: b
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/82165657e1de3a40.js.map