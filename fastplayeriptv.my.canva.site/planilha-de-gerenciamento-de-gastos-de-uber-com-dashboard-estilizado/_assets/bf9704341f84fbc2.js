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
                var w = __c.w;
                var h8b = function(a) {
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
                                    k.Uxa.forEach((l, m) => e.set(m, l));
                                    f[h] = k.data;
                                    g[h] = k.oua
                                }
                                return {
                                    Uxa: e,
                                    data: f,
                                    oua: g
                                }
                            }
                        }
                    },
                    i8b = function(a) {
                        return () => a
                    },
                    b6 = function(a, b, c, d) {
                        return new j8b(a, b, c, d)
                    },
                    c6 = function(a, b) {
                        return a === b || b.map(c => a.vsa(k8b(c)))
                    },
                    m8b = function(a, b) {
                        return a.rua(b).map(c => new l8b(c, d => d.props[b]))
                    },
                    k8b = function(a) {
                        w(a instanceof d6);
                        return a
                    },
                    f6 = function(a, b) {
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
                                        return b.kind === "array" && e6(a.items, b.items);
                                    case "set":
                                        var c;
                                        if (c = b.kind === "set") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : e6([...a], [...b]);
                                        return c;
                                    case "map":
                                        if (c = b.kind === "map") a = a.items, b = b.items, c = a === b ? !0 : a.size !== b.size ? !1 : e6([...a.keys(), ...a.values()], [...b.keys(),
                                            ...b.values()
                                        ]);
                                        return c;
                                    case "record":
                                        return b.kind === "record" && n8b(a.fields, b.fields);
                                    case "instance":
                                        return b.kind === "instance" && a.instance === b.instance;
                                    default:
                                        throw new E(a);
                                }
                            default:
                                throw new E(a);
                        }
                    },
                    e6 = function(a, b) {
                        if (a === b) return !0;
                        if (a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (!f6(a[c], b[c])) return !1;
                        return !0
                    },
                    n8b = function(a, b) {
                        if (a === b) return !0;
                        const c = Object.keys(a),
                            d = Object.keys(b),
                            e = new Set([...c, ...d]);
                        if (c.length !== e.size || d.length !== e.size) return !1;
                        for (const f of e)
                            if (!f6(a[f],
                                    b[f])) return !1;
                        return !0
                    },
                    g6 = function(a) {
                        return typeof a === "string" ? JSON.stringify(a) : String(a)
                    },
                    p8b = function(a, b) {
                        return a.map(c => b.map(d => o8b[0](c, d)))
                    },
                    r8b = function(a, b, c) {
                        return b.map(d => q8b[a](d, c))
                    },
                    h6 = function(a, b, c) {
                        switch (c.kind) {
                            case 0:
                                return s8b(c.value);
                            case 1:
                                const e = h6(a, b, c.jv);
                                return t8b[c.name].map(v => i6(v, e));
                            case 2:
                                const f = h6(a, b, c.m7a),
                                    g = h6(a, b, c.n7a);
                                return u8b[c.name].map(v => v8b(v, f, g));
                            case 3:
                                const h = c.args.map(v => v.kind !== 13 ? new w8b(h6(a, b, v)) : new x8b(h6(a, b, v.XHb)));
                                c = c.name;
                                switch (c) {
                                    case 0:
                                    case 1:
                                        var d = h.map(v => v.hqa(u => u.type, u => u.type.vN()));
                                        return j6.union(...d).map(y8b[c]).map(v => z8b(v, h));
                                    default:
                                        return A8b[c].map(v => z8b(v, h))
                                }
                            case 4:
                                d = c.name;
                                const k = c.param,
                                    l = c.body,
                                    m = h6(a, b, c.x9);
                                c = m.type.vN();
                                const n = c.map(v => B8b(b, k, v, u => h6(a, u, l)));
                                return r8b(d, c, n.resultType).map(v => C8b(v, m, n));
                            case 5:
                                const p = c.entries.map(([v, u]) => [h6(a, b, v), h6(a, b, u)]);
                                c = j6.union(...p.map(([v]) => v.type));
                                d = j6.union(...p.map(([, v]) => v.type));
                                if (!c6(c, j6.primitive)) throw Error(`key type is not a primitive: ${c}`);
                                return p8b(c, d).map(v => D8b(v, p));
                            case 6:
                                const q = mg(c.fields, v => h6(a, b, v));
                                c = mg(q, v => v.type);
                                return (0, E8b[0])(c).map(v => F8b(v, q));
                            case 7:
                                d = a.types.resolve(c.name);
                                if (!d) throw Error(`cannot instantiate unknown type: ${c.name}`);
                                const r = h6(a, b, {
                                    kind: 6,
                                    fields: c.args
                                });
                                return d.$lb.map(v => i6(v, r, {
                                    Fq: !0
                                }));
                            case 8:
                                return d = h6(a, b, c.base), G8b(d, c.fMb);
                            case 9:
                                return H8b(b, c.name);
                            case 10:
                                return d = __c.vd(c.defs, v => h6(a, b, v)), I8b(a, b, d, c.body);
                            case 11:
                                d = h6(a, b, c.test).as(j6.ai);
                                const t = h6(a, b, c.CBb);
                                c = h6(a,
                                    b, c.alternate);
                                return J8b(d, t, c);
                            case 12:
                                return h6(a, b, c.body).computed();
                            default:
                                throw new E(c);
                        }
                    },
                    s8b = function(a) {
                        switch (typeof a) {
                            case "string":
                                return k6(j6.string, a);
                            case "number":
                                return k6(j6.number, a);
                            case "boolean":
                                return k6(j6.ai, a);
                            case "undefined":
                                return k6(j6.undefined, a);
                            default:
                                throw new E(a);
                        }
                    },
                    G8b = function(a, b) {
                        return a.map(c => m8b(c, b).map(({
                            type: d,
                            get: e
                        }) => i6(new l6(c, d, e), a)))
                    },
                    H8b = function(a, b) {
                        return a.resolve(b).map(c => m6.of(c, d => d.resolve(b)))
                    },
                    I8b = function(a, b, c, d) {
                        const e = __c.vd(c,
                                g => g.type),
                            f = __c.vd(c, g => g.evaluate);
                        return K8b(h6(a, new n6(new Map(e), b), d), g => {
                            const h = __c.vd(f, k => k(g));
                            return new n6(new Map(h), g)
                        })
                    },
                    J8b = function(a, b, c) {
                        return b.map((d, e) => c.map((f, g) => {
                            f = j6.union(d, f);
                            return m6.of(f, h => {
                                const k = a(h),
                                    l = e(h),
                                    m = g(h);
                                return () => k() ? l() : m()
                            })
                        }))
                    },
                    i6 = function({
                        Gla: a,
                        resultType: b,
                        apply: c
                    }, d, e) {
                        const f = d.as(a);
                        return new m6(b, g => {
                            const h = f(g);
                            if (e === null || e === void 0 ? 0 : e.Fq) {
                                const k = L8b(c);
                                return () => k(h())
                            }
                            return () => c(h())
                        })
                    },
                    v8b = function({
                            Gla: a,
                            o7a: b,
                            resultType: c,
                            apply: d
                        },
                        e, f) {
                        const g = e.as(a),
                            h = f.as(b);
                        return new m6(c, k => {
                            const l = g(k),
                                m = h(k);
                            return () => d(l(), m())
                        })
                    },
                    z8b = function({
                        q7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        let e;
                        const f = d.map(g => g.gma(h => h.as(a), h => h.as(e !== null && e !== void 0 ? e : e = j6.x9(a))));
                        return new m6(b, g => {
                            const h = l => l(g),
                                k = f.map(l => l.gma(h, h));
                            return () => {
                                const l = [];
                                k.forEach(m => {
                                    m.hqa(n => l.push(n()), n => l.push(...n()))
                                });
                                return c(l)
                            }
                        })
                    },
                    C8b = function({
                        itemType: a,
                        K7a: b,
                        resultType: c,
                        reduce: d
                    }, e, f) {
                        const g = f.as(a, b),
                            h = e.as(j6.x9(a));
                        return m6.of(c, k => {
                            const l = h(k),
                                m = g(k),
                                n = L8b(p => {
                                    p = p.map(i8b);
                                    return [p, p.map(m)]
                                });
                            return () => {
                                const [p, q] = n(l());
                                return d(p, q)
                            }
                        })
                    },
                    D8b = function({
                        keyType: a,
                        valueType: b,
                        resultType: c,
                        apply: d
                    }, e) {
                        const f = e.map(([g, h]) => [g.as(a), h.as(b)]);
                        return new m6(c, g => {
                            const h = f.map(([k, l]) => [k(g), l(g)]);
                            return () => d(h.map(([k, l]) => [k(), l()]))
                        })
                    },
                    F8b = function({
                        p7a: a,
                        resultType: b,
                        apply: c
                    }, d) {
                        const e = Object.keys(a).filter(g => !d.hasOwnProperty(g));
                        if (e.length) throw Error(`too few arguments (missing ${e})`);
                        const f = M8b(a, (g, h) => d[h].as(g));
                        return new m6(b,
                            g => {
                                const h = N8b(f, k => k(g));
                                return () => c(O8b(h, k => k()))
                            })
                    },
                    k6 = function(a, b) {
                        const c = i8b(b);
                        return new m6(a, () => c)
                    },
                    K8b = function(a, b) {
                        const c = a.evaluate;
                        return new m6(a.type, d => c(b(d)))
                    },
                    B8b = function(a, b, c, d) {
                        return d(a.define(b, c)).map((e, f) => new P8b(c, e, g => h => f(g.define(b, h))))
                    },
                    L8b = function(a) {
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
                    M8b = function(a, b) {
                        return mg(a, b)
                    },
                    N8b = function(a, b) {
                        return mg(a, b)
                    },
                    O8b = function(a, b) {
                        return mg(a, b)
                    },
                    U8b = function(a) {
                        const b =
                            a.types,
                            c = a.values;
                        class d {
                            optional() {
                                const H = this.$ha,
                                    I = this.Mfa,
                                    K = this.PDa,
                                    M = b.union(this.type, b.undefined);
                                return new d(M, Q => Q != null ? H(Q) : void 0, (Q, T, V) => V != null ? I(Q, T, V) : void 0, (Q, T, V, ba) => V != null ? K(Q, T, V, ba) : ba.delete(T))
                            }
                            UB() {
                                return new d(this.type, this.$ha, this.Mfa, (H, I) => {
                                    throw H.error(I, "read-only field");
                                })
                            }
                            G6(H) {
                                return H ? new d(this.type, this.$ha, (I, K, M) => {
                                    M = this.Mfa(I, K, M);
                                    M != null && H(I, K, M);
                                    return M
                                }, (I, K, M, Q) => {
                                    M != null && H(I, K, M);
                                    this.PDa(I, K, M, Q)
                                }) : this
                            }
                            Pub(H, I) {
                                const K = this.$ha,
                                    M = this.Mfa,
                                    Q = this.PDa;
                                return Q8b(this.type, T => {
                                    const V = () => M(H, I, T.get(I));
                                    return {
                                        Pfb: () => K(V()),
                                        gNa: V,
                                        rsb: ba => Q(H, I, ba, T)
                                    }
                                })
                            }
                            constructor(H, I, K, M) {
                                this.type = H;
                                this.$ha = I;
                                this.Mfa = K;
                                this.PDa = M
                            }
                        }
                        a = new d(b.string, H => H, p6("string", H => H.value), q6("string"));
                        const e = new d(b.ai, H => H, p6("boolean", H => H.value), q6("boolean")),
                            f = (new d(b.number, H => H, p6("int32", H => H.value), q6("int32"))).G6(H => Number.isInteger(H)),
                            g = (new d(b.number, H => H, p6("double", H => H.value), q6("double"))).G6(H => Number.isFinite(H)),
                            h = new d(b.instance("Fill"),
                                H => c.instance("Fill", H), p6("fill", H => H.value), q6("fill")),
                            k = a.optional(),
                            l = e.optional(),
                            m = f.optional(),
                            n = g.optional(),
                            p = h.optional(),
                            q = a.UB(),
                            r = e.UB(),
                            t = f.UB(),
                            v = g.UB(),
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
                                        int32: A,
                                        double: z,
                                        fill: B
                                    }
                                }
                            };
                        return (H, I) => {
                            const K = new R8b(H),
                                M = mg(I, T => T.key),
                                Q = mg(I, T => {
                                    var V =
                                        T.aWa;
                                    const ba = T.$Sa;
                                    switch (T.type) {
                                        case "string":
                                            V = G[V][ba].string.G6(S8b(T.GJ));
                                            break;
                                        case "boolean":
                                            V = G[V][ba]["boolean"];
                                            break;
                                        case "double":
                                            V = G[V][ba]["double"].G6(T8b(T.range));
                                            break;
                                        case "int32":
                                            V = G[V][ba].int32.G6(T8b(T.range));
                                            break;
                                        case "fill":
                                            V = G[V][ba].fill;
                                            break;
                                        default:
                                            throw new E(T);
                                    }
                                    return V.Pub(K, T.key)
                                });
                            return {
                                WY: new Map(Object.entries(Q).map(([T, V]) => [M[T], V.type])),
                                apply: T => {
                                    const V = mg(Q, ka => ka.eval(T)),
                                        ba = mg(V, ka => ({
                                            get: ka.gNa
                                        })),
                                        ea = mg(V, ka => ({
                                            get: ka.gNa,
                                            set: ka.rsb
                                        }));
                                    return {
                                        Uxa: new Map(Object.entries(V).map(([ka,
                                            oa
                                        ]) => [M[ka], oa.Pfb])),
                                        data: Object.create(null, ba),
                                        oua: Object.create(null, ea)
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
                    T8b = function(a) {
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
                    S8b = function(a) {
                        if (a) return (b, c, d) => {
                            if (!a.test(d)) throw b.error(c, `value does not match regex ${a}: '${d}'`);
                        }
                    },
                    Q8b = function(a, b) {
                        return {
                            type: a,
                            eval: b
                        }
                    },
                    W8b = function() {
                        return (new V8b({})).add((a, b) => ({
                            Fill: new a("Fill", {
                                color: b.string
                            }, c => __c.OO.create({ ...__c.mv,
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
                                X: b.union(b.array(b.number), b.undefined)
                            }, c => {
                                var d, e, f;
                                const g = __c.kv.create({ ...__c.lv,
                                    top: c.top,
                                    left: c.left,
                                    width: c.width,
                                    height: c.height,
                                    rotation: (e = c.rotation) !== null && e !== void 0 ? e : __c.lv.rotation,
                                    fill: __c.mv,
                                    X: (f = (d = c.X) === null || d === void 0 ? void 0 : d.items) !== null && f !== void 0 ? f : __c.lv.X
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
                    Y8b = function(a, b) {
                        return class extends X8b {
                            componentDidCatch(c) {
                                a.error(c);
                                this.setState({
                                    hasError: !0
                                })
                            }
                            render() {
                                return this.state.hasError ? s6(__c.by, {
                                    background: "criticalLow",
                                    width: "full",
                                    height: "full",
                                    padding: "0.25u",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    role: "alert",
                                    children: s6(__c.Zx, {
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
                    c9b = function(a, b, c) {
                        const d = f => ({
                            element: f.ha.Zi
                        });
                        b = h8b(b);
                        switch (c.type) {
                            case 0:
                                c = c.CD;
                                if (typeof c === "object") {
                                    var e = a.y1a.types;
                                    e = e.x9(e.instance("RectElement"));
                                    return Z8b(a, d, b, e, c, f => new $8b(() => f().map(g => g.instance)))
                                }
                                return a9b(d, b, c);
                            case 1:
                                return b9b(a, d, b, c.Component);
                            default:
                                throw new E(c);
                        }
                    },
                    Z8b = function(a, b, c, d, e, f) {
                        const g =
                            a.Una(a.y1a, c, d).compile(e);
                        return {
                            type: 0,
                            CD: h => ({
                                Oa: f(g.apply(b(h)))
                            })
                        }
                    },
                    a9b = function(a, b, c) {
                        return {
                            type: 0,
                            CD: d => c(b.apply(a(d)).data)
                        }
                    },
                    b9b = function(a, b, c, d) {
                        return {
                            type: 1,
                            Component: Y8b(a.H, d9b(({
                                model: e
                            }) => {
                                const [f] = e9b(() => c.apply(b(e)).oua);
                                return s6(d, {
                                    data: f,
                                    Mz: a.Mz
                                })
                            }))
                        }
                    },
                    g9b = function(a) {
                        return {
                            WY: a.WY,
                            apply: f9b(a.apply)
                        }
                    },
                    f9b = function(a) {
                        const b = new WeakMap;
                        return c => {
                            let d = b.get(c);
                            d || (d = a(c), b.set(c, d));
                            return d
                        }
                    },
                    h9b = __webpack_require__(519427),
                    t6 = h9b.computed,
                    i9b = h9b.observable;
                var s6 = __webpack_require__(443763).jsx;
                var u6 = __webpack_require__(875604),
                    d9b = u6.memo,
                    X8b = u6.PureComponent,
                    e9b = u6.useState;
                var l6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.Gla = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    v6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.Gla = a;
                            this.o7a = b;
                            this.resultType = c;
                            this.apply = d
                        }
                    },
                    w6 = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            this.q7a = a;
                            this.resultType = b;
                            this.apply = c
                        }
                    },
                    k9b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c) {
                            var d = j9b;
                            this.keyType = a;
                            this.valueType = b;
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
                            this.p7a = a;
                            this.resultType =
                                b;
                            this.apply = c
                        }
                    },
                    j8b = class {
                        map(a) {
                            return a(this)
                        }
                        constructor(a, b, c, d) {
                            this.itemType = a;
                            this.K7a = b;
                            this.resultType = c;
                            this.reduce = d
                        }
                    };
                var n9b = class {},
                    w8b = class extends n9b {
                        gma(a) {
                            return new w8b(a(this.value))
                        }
                        hqa(a) {
                            return a(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    },
                    x8b = class extends n9b {
                        gma(a, b) {
                            return new x8b(b(this.value))
                        }
                        hqa(a, b) {
                            return b(this.value)
                        }
                        constructor(a) {
                            super();
                            this.value = this.value = a
                        }
                    };
                var l8b = class {
                    map(a) {
                        return a(this)
                    }
                    constructor(a, b) {
                        this.type = a;
                        this.get = b
                    }
                };
                var d6 = class {
                        map(a) {
                            return a(this)
                        }
                    },
                    x6 = class extends d6 {
                        vsa(a) {
                            return this === a || a.fza(b => this.l1(b))
                        }
                        vN() {
                            throw Error(`${this} is not iterable`);
                        }
                        rua(a) {
                            var b;
                            const c = (b = this.propTypes) !== null && b !== void 0 ? b : this.propTypes = this.cda();
                            if (!c) throw Error(`${this} is not navigable"`);
                            if (!c.hasOwnProperty(a)) throw Error(`${this} has no navigable property "${a}"`);
                            return c[a]
                        }
                        cda() {
                            throw Error(`${this} is not navigable`);
                        }
                        qqa(a) {
                            a(this)
                        }
                        fza(a) {
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
                            return a instanceof A6 && this.ED === a.ED && c6(this.jv, a.jv)
                        }
                        toString() {
                            return `${this.ED}<${this.jv}>`
                        }
                        constructor(a, b) {
                            super();
                            this.ED = a;
                            this.jv = b
                        }
                    },
                    o9b = class extends A6 {
                        vN() {
                            return this.jv
                        }
                        cda() {
                            const a =
                                this.jv;
                            return {
                                size: j6.number,
                                empty: j6.ai,
                                get first() {
                                    return j6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("array", a)
                        }
                    },
                    p9b = class extends A6 {
                        vN() {
                            return this.jv
                        }
                        cda() {
                            const a = this.jv;
                            return {
                                size: j6.number,
                                empty: j6.ai,
                                get first() {
                                    return j6.optional(a)
                                }
                            }
                        }
                        constructor(a) {
                            super("set", a)
                        }
                    },
                    q9b = class extends x6 {
                        l1(a) {
                            return a instanceof q9b && c6(this.key, a.key) && c6(this.value, a.value)
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
                    r9b = class extends x6 {
                        l1(a) {
                            return a instanceof
                            r9b ? Object.entries(a.fields).every(([b, c]) => this.fields.hasOwnProperty(b) && c6(this.fields[b], c)) : !1
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
                    B6 = class extends d6 {
                        vsa(a) {
                            return this === a || this.Gh.every(b => b.vsa(a))
                        }
                        vN() {
                            return j6.union(...this.Gh.map(a => a.vN()))
                        }
                        rua(a) {
                            return j6.union(...this.Gh.map(b => b.rua(a)))
                        }
                        qqa(a) {
                            this.Gh.forEach(b => b.qqa(a))
                        }
                        fza(a) {
                            return this.Gh.some(b =>
                                b.fza(a))
                        }
                        toString() {
                            return this.Gh.length ? this.Gh.map(a => a.toString()).join(" | ") : "never"
                        }
                        constructor(a) {
                            super();
                            this.Gh = a;
                            this.kind = "disjunction";
                            w(a.length !== 1)
                        }
                    },
                    C6 = new B6([]),
                    s9b = new y6("string"),
                    t9b = new y6("number"),
                    u9b = new y6("boolean"),
                    v9b = new y6("undefined"),
                    w9b = new B6([s9b, t9b, u9b]),
                    x9b = class {
                        get never() {
                            return C6
                        }
                        get string() {
                            return s9b
                        }
                        get number() {
                            return t9b
                        }
                        get ai() {
                            return u9b
                        }
                        get undefined() {
                            return v9b
                        }
                        get primitive() {
                            return w9b
                        }
                        optional(a) {
                            return j6.union(a, j6.undefined)
                        }
                        array(a) {
                            return new o9b(a)
                        }
                        set(a) {
                            return new p9b(a)
                        }
                        x9(a) {
                            return new B6([new o9b(a),
                                new p9b(a)
                            ])
                        }
                        map(a, b) {
                            return new q9b(a, b)
                        }
                        Sc(a) {
                            return new r9b({ ...a
                            })
                        }
                        union(...a) {
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            const b = new Set;
                            for (const d of a) k8b(d).qqa(e => b.add(e));
                            a = [...b];
                            if (a.length === 0) return C6;
                            if (a.length === 1) return a[0];
                            if (a.length === 2) {
                                const [d, e] = a;
                                return c6(d, e) ? e : c6(e, d) ? d : new B6(a)
                            }
                            const c = new Set;
                            for (const d of a)[...c].some(e => c6(d, e)) || (c.forEach(e => c6(e, d) && c.delete(e)), c.add(d));
                            return c.size === 1 ? [...c][0] : new B6([...c])
                        }
                    },
                    y9b = class extends x9b {
                        instance(a) {
                            return new z6(a)
                        }
                    },
                    j6 = new y9b,
                    z9b = class extends x9b {
                        instance(a) {
                            return new z6(__c.D(this.classes[a]))
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var A9b, B9b, D6 = Symbol("value"),
                    E6 = class {
                        get props() {
                            var a;
                            return (a = this.B6a) !== null && a !== void 0 ? a : this.B6a = this.Ila()
                        }
                    },
                    C9b = class {
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
                A9b = Symbol.iterator;
                var D9b = class extends E6 {
                        Ila() {
                            return new C9b(this.items)
                        }
                        map(a) {
                            return this.items.map(a)
                        }[A9b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.length ? `[${Array.from(this.items,g6).join(", ")}]` : "[]"
                        }
                        constructor(a) {
                            super();
                            this.kind = "array";
                            this.items = [...a]
                        }
                    },
                    E9b = class {
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
                B9b = Symbol.iterator;
                var F9b = class extends E6 {
                        Ila() {
                            return new E9b(this.items)
                        }
                        map(a) {
                            return Array.from(this.items, a)
                        }[B9b]() {
                            return this.items[Symbol.iterator]()
                        }
                        toString() {
                            return this.items.size ? `Set [${Array.from(this.items,g6).join(", ")}]` : "Set []"
                        }
                        constructor(a) {
                            super();
                            this.kind = "set";
                            this.items = new Set(a)
                        }
                    },
                    G9b = class {
                        toString() {
                            return this.items.size ? `Map {${Array.from(this.items,([a,b])=>`[${g6(a)}]: ${g6(b)}`).join(", ")}}` : "Map {}"
                        }
                        constructor(a) {
                            this.items = a;
                            this.kind = "map"
                        }
                    },
                    H9b = class extends E6 {
                        Ila() {
                            return this.fields
                        }
                        toString() {
                            const a =
                                Object.entries(this.fields);
                            return a.length ? `{ ${[...a].map(([b,c])=>`${b}: ${g6(c)}`).join(", ")} }` : "{}"
                        }
                        constructor(a) {
                            super();
                            this.fields = a;
                            this.kind = "record"
                        }
                    },
                    I9b = class {
                        toString() {
                            return `[instance ${this.ED.name}]`
                        }
                        constructor(a, b) {
                            this.ED = a;
                            this.instance = b;
                            this.kind = "instance"
                        }
                    },
                    J9b = class {
                        array(a) {
                            return new D9b(a)
                        }
                        arrayOf(...a) {
                            return new D9b(a)
                        }
                        set(a) {
                            return new F9b(a)
                        }
                        map(a) {
                            return new G9b(new Map(a))
                        }
                        Sc(a) {
                            return new H9b({ ...a
                            })
                        }
                    },
                    K9b = class extends J9b {
                        instance(a, b) {
                            return new I9b(a, b)
                        }
                        stringify(a) {
                            return g6(a)
                        }
                        constructor() {
                            super();
                            this.fh = f6
                        }
                    },
                    o6 = new K9b,
                    L9b = class extends J9b {
                        instance(a, b) {
                            a = __c.D(this.classes[a]);
                            return new I9b(a, b)
                        }
                        constructor(a) {
                            super();
                            this.classes = a
                        }
                    };
                var t8b = {
                        [0]: new l6(j6.number, j6.number, a => -a),
                        [1]: new l6(j6.string, j6.number, a => a.length),
                        [2]: new l6(j6.ai, j6.ai, a => !a)
                    },
                    u8b = {
                        [0]: new v6(j6.number, j6.number, j6.number, (a, b) => a + b),
                        [1]: new v6(j6.number, j6.number, j6.number, (a, b) => a - b),
                        [2]: new v6(j6.number, j6.number, j6.number, (a, b) => a * b),
                        [3]: new v6(j6.number, j6.number, j6.number, (a, b) => a / b),
                        [4]: new v6(j6.number, j6.number, j6.number, (a, b) => a % b),
                        [5]: new v6(j6.string, j6.string, j6.string, (a, b) => a + b),
                        [6]: new v6(j6.number, j6.number, j6.ai, (a, b) => a === b),
                        [7]: new v6(j6.number,
                            j6.number, j6.ai, (a, b) => a !== b),
                        [8]: new v6(j6.number, j6.number, j6.ai, (a, b) => a < b),
                        [9]: new v6(j6.number, j6.number, j6.ai, (a, b) => a <= b),
                        [10]: new v6(j6.number, j6.number, j6.ai, (a, b) => a > b),
                        [11]: new v6(j6.number, j6.number, j6.ai, (a, b) => a >= b),
                        [12]: new v6(j6.ai, j6.ai, j6.ai, (a, b) => a && b),
                        [13]: new v6(j6.ai, j6.ai, j6.ai, (a, b) => a || b)
                    },
                    A8b = {
                        [2]: new w6(j6.number, j6.number, a => a.reduce((b, c) => b + c, 0)),
                        [3]: new w6(j6.number, j6.number, a => a.reduce((b, c) => b * c, 1)),
                        [4]: new w6(j6.number, j6.number, a => Math.max(...a)),
                        [5]: new w6(j6.number,
                            j6.number, a => Math.min(...a)),
                        [6]: new w6(j6.string, j6.string, a => a.join(""))
                    },
                    M9b = a => o6.array(a),
                    N9b = a => o6.set(a),
                    y8b = {
                        [0]: a => new w6(a, j6.array(a), M9b),
                        [1]: a => new w6(a, j6.set(a), N9b)
                    },
                    j9b = a => o6.map(a),
                    o8b = {
                        [0]: (a, b) => new k9b(a, b, j6.map(a, b))
                    },
                    l9b = a => o6.Sc(a),
                    E8b = {
                        [0]: a => new m9b(a, j6.Sc(a))
                    },
                    O9b = (a, b) => o6.array(b.map(c => c())),
                    P9b = (a, b) => o6.array(b.flatMap(c => c().items)),
                    Q9b = (a, b) => o6.array(a.filter((c, d) => b[d]()).map(c => c())),
                    R9b = (a, b) => b.some(c => c()),
                    S9b = (a, b) => b.every(c => c()),
                    T9b = (a, b) => {
                        var c;
                        return (c =
                            a.find((d, e) => b[e]())) === null || c === void 0 ? void 0 : c()
                    },
                    q8b = {
                        [0]: (a, b) => b.map(c => b6(a, c, j6.array(c), O9b)),
                        [1]: (a, b) => b.vN().map(c => b6(a, j6.array(c), j6.array(c), P9b)),
                        [2]: a => b6(a, j6.ai, j6.array(a), Q9b),
                        [3]: a => b6(a, j6.ai, j6.ai, R9b),
                        [4]: a => b6(a, j6.ai, j6.ai, S9b),
                        [5]: a => b6(a, j6.ai, j6.optional(a), T9b)
                    };
                var n6 = class {
                    define(a, b) {
                        return new n6(new Map([
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
                var V9b = (a, b, c) => {
                        const d = new n6(new Map(b.WY)),
                            e = new U9b(a);
                        return {
                            compile: f => {
                                const g = h6(e, d, f).as(c);
                                return {
                                    apply: h => {
                                        h = new n6(new Map(b.apply(h).Uxa));
                                        return g(h)
                                    }
                                }
                            }
                        }
                    },
                    U9b = class {
                        constructor(a) {
                            this.types = a
                        }
                    },
                    m6 = class {
                        static of (a, b) {
                            return new m6(a, b)
                        }
                        as(a) {
                            if (!c6(this.type, a)) throw Error(`inferred type ${this.type} does not match expected type: ${a}`);
                            return this.evaluate
                        }
                        computed() {
                            const a = this.evaluate;
                            return new m6(this.type, b => {
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
                    P8b = class {
                        as(a, b) {
                            if (!c6(a, this.Hla)) throw Error(`argument type ${a} is not assignable to parameter type: ${this.Hla}`);
                            if (!c6(this.resultType, b)) throw Error(`return type ${this.resultType} is not assignable to expected type: ${b}`);
                            return this.evaluate
                        }
                        map(a) {
                            return a(this.Hla, this.resultType, this.evaluate)
                        }
                        constructor(a, b, c) {
                            this.Hla = a;
                            this.resultType = b;
                            this.evaluate = c
                        }
                    };
                var V8b = class {
                        add(a) {
                            a = a(W9b, this.types);
                            return new V8b({ ...this.classes,
                                ...a
                            })
                        }
                        resolve(a) {
                            return this.classes[a]
                        }
                        constructor(a) {
                            this.classes = a;
                            this.types = new z9b(this.classes);
                            this.values = new L9b(this.classes)
                        }
                    },
                    W9b = class {
                        constructor(a, b, c) {
                            this.name = a;
                            this.create = c;
                            this.$lb = new l6(j6.Sc(b), j6.instance(this), d => o6.instance(this, c(d.fields)))
                        }
                    };
                var R8b = class {
                    error(a, b) {
                        return Error(`widget '${this.Rwb}': schema error on key '${a}': ${b}`)
                    }
                    constructor(a) {
                        this.Rwb = a
                    }
                };
                var X9b = Object.freeze({
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
                    bB() {
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
                var Y9b;
                Y9b = Symbol.iterator;
                var $8b = class {
                    static A(a) {
                        __c.P(a, {
                            Be: t6,
                            $x: t6
                        })
                    }
                    get Be() {
                        return this.v7a().map(a => {
                            let b = this.nOa.get(a);
                            b == null && (b = `${this.Qgb++}`, this.nOa.set(a, b));
                            return {
                                id: b,
                                ref: a
                            }
                        })
                    }
                    get $x() {
                        const a = new Map;
                        this.Be.forEach((b, c) => b && a.set(b.ref, c));
                        return a
                    }
                    Pl(a) {
                        return __c.D(this.$x.get(a), "ref not found")
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
                        a = this.$x.get(a);
                        b = this.$x.get(b);
                        w(a != null);
                        w(b != null);
                        return a < b ? -1 : a > b ? 1 : 0
                    }
                    bB(a) {
                        return this.Be[this.Pl(a)].id
                    }
                    has(a) {
                        return this.$x.has(a)
                    }
                    Jt(a) {
                        return new __c.zN(this, a)
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
                    }[Y9b]() {
                        return this.toArray()[Symbol.iterator]()
                    }
                    constructor(a) {
                        this.v7a =
                            a;
                        this.Qgb = ($8b.A(this), 0);
                        this.nOa = new WeakMap
                    }
                };
                var Z9b = new Set,
                    $9b = {
                        CD: () => ({
                            Oa: X9b
                        })
                    },
                    a$b = class {
                        static A(a) {
                            __c.P(a, {
                                bga: i9b.shallow
                            })
                        }
                        Lhb(a, b, {
                            element: c
                        }) {
                            const d = __c.D(this.qrb.oga.get(a));
                            w(d.element === b.element);
                            w(!this.bga.has(a));
                            b = {
                                element: c9b(this, b, c)
                            };
                            this.bga.set(a, b);
                            Z9b.has(a) || (__c.PP.set(a, $9b), Z9b.add(a));
                            return b
                        }
                        Jdb(a) {
                            var b;
                            return (b = this.bga.get(a)) === null || b === void 0 ? void 0 : b.element
                        }
                        constructor(a, b, c, d, e) {
                            this.qrb = a;
                            this.y1a = b;
                            this.Una = c;
                            this.H = d;
                            this.Mz = e;
                            this.bga = (a$b.A(this), new Map)
                        }
                    };
                var b$b = class {
                    static A(a) {
                        __c.P(a, {
                            oga: i9b.shallow
                        })
                    }
                    Mhb(a, b) {
                        w(!this.oga.has(a));
                        b = {
                            document: g9b(this.LJa(a, b.document)),
                            element: g9b(this.LJa(a, b.element))
                        };
                        this.oga.set(a, b);
                        return b
                    }
                    constructor(a) {
                        this.LJa = a;
                        this.oga = (b$b.A(this), new Map)
                    }
                };
                __c.JRa = {
                    Rhb: function(a) {
                        var b = a.H;
                        a = a.Swb;
                        var c = {
                            eo: W8b(),
                            Una: V9b
                        };
                        const {
                            eo: d,
                            Una: e
                        } = c;
                        c = new b$b(U8b(d));
                        b = new a$b(c, d, e, b, a);
                        return {
                            IDa: c,
                            gQb: c,
                            W6: b,
                            V6: b
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/bf9704341f84fbc2.js.map