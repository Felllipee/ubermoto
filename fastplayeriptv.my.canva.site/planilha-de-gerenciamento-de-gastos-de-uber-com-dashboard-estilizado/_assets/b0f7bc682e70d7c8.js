(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var uH = __c.uH;
                var Tc = __c.Tc;
                var P = __c.P;
                var mu = __c.mu;
                var O = __c.O;
                var $w = __c.$w;
                var Pt = __c.Pt;
                var D = __c.D;
                var E = __c.E;
                var P4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.WR(b.reference.bi);
                                a = a.zV(b.reference.oi);
                                return c != null && a != null;
                            case 1:
                                return a.WR(b.reference.bi) != null;
                            case 2:
                                return a.zV(b.reference.oi) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    L3b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.da.length > 0) return !1;
                                a = a.iF(c.HY.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.FD(new __c.ID, a.lH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return P4(b, d);
                                        case 1:
                                            return P4(b,
                                                d.start) && P4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    M3b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.na;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Tb === c : g.span.Xc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.ra : c === null || c === void 0 ? void 0 : c.Fa) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Fpa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.QXa, h = h.na === k.na && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.oc === c.oc && g.oc === 0 ? g.Fpa = f : e.push({
                                            QXa: k,
                                            wtb: l,
                                            Fpa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            oc: c.oc
                                        })
                                    }
                            }
                        return e
                    },
                    N3b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.na,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Ob === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.qa : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            na: g,
                                            boundary: "start"
                                        } : {
                                            na: D(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.GIa, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.Jpa, k = k.na === m.na && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.oc === d.oc && h.oc === 0 ? h.Jpa = g : f.push({
                                            GIa: l,
                                            Htb: m,
                                            Jpa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            oc: d.oc
                                        })
                                    }
                            }
                        return f
                    },
                    O3b = function(a, b, c, d, e) {
                        const f =
                            a.HZa.v$a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Wb(e[0].column);
                        k && h.push({
                            column: k,
                            boundary: "start"
                        });
                        h.push(...e);
                        (e = b.layout.cols.next(e[e.length - 1].column)) && h.push({
                            column: e,
                            boundary: "start"
                        });
                        e = [];
                        (k = b.layout.rows.Wb(d[0].na)) && e.push({
                            na: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].na)) && e.push({
                            na: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Wb(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.na : void 0;
                                k = l ? b.layout.rows.Wb(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.qa;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Fa : m === null || m === void 0 ?
                                    void 0 : m.ra;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.qa;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Fa : l === null || l === void 0 ? void 0 : l.ra;
                                p = __c.SEa({
                                    ra: n,
                                    Fa: k,
                                    qa: l,
                                    La: m
                                }, a);
                                let t;
                                switch (p) {
                                    case "blockStart":
                                        t = n;
                                        break;
                                    case "blockEnd":
                                        t = k;
                                        break;
                                    case "inlineStart":
                                        t = l;
                                        break;
                                    case "inlineEnd":
                                        t = m;
                                        break;
                                    default:
                                        t = void 0
                                }
                                const {
                                    height: v,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.oc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(Q4(q, r), __c.hE(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    P3b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = M3b(b, c, d, e);
                        f = N3b(b, c, d, e, f);
                        const h = O3b(a, b, c, d, e),
                            k = a.Ffb(b),
                            l = a.Yeb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.wtb,
                                t = n.Fpa,
                                v = n.QXa;
                            const u = n.color,
                                x = n.weight;
                            n = n.oc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(Q4(r, v))) === null || p === void 0 ?
                                void 0 : p.La;
                            p = (q = h.get(Q4(t, v))) === null || q === void 0 ? void 0 : q.qa;
                            if (A != null && p != null) {
                                q = D(k.get(v.na));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    oc: n,
                                    p1: new Pt(q + A * y, v),
                                    p2: new Pt(t + p * y, v),
                                    ...__c.mE((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.Ib);
                        return [...f.map(n => {
                            var p, q, r = n.GIa,
                                t = n.Htb,
                                v = n.Jpa;
                            const u = n.color,
                                x = n.weight;
                            n = n.oc;
                            const y = (p = h.get(Q4(r, t))) === null || p === void 0 ? void 0 : p.Fa;
                            p = (q = h.get(Q4(r,
                                v))) === null || q === void 0 ? void 0 : q.ra;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.na));
                                t = D(k.get(v.na));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    oc: n,
                                    p1: new Pt(r, q + y),
                                    p2: new Pt(r, v + p),
                                    ...__c.mE(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.Ib), ...a]
                    },
                    Q3b = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.wd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.wd(d, e => `${e.jk}_${e.kk}`);
                            for (const [, e] of a) {
                                const {
                                    kk: f,
                                    jk: g
                                } = e[0];
                                a = __c.wd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    jk: g,
                                    kk: f
                                })
                            }
                        }
                        return b
                    },
                    R3b = function(a, b, c, d) {
                        var e = __c.Bwb;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                na: k,
                                boundary: "start"
                            }, {
                                na: k,
                                boundary: "end"
                            }] : [{
                                na: k,
                                boundary: "start"
                            }]),
                            g = c.get().flatMap(k => a.layout.cols.last() === k ? [{
                                column: k,
                                boundary: "start"
                            }, {
                                column: k,
                                boundary: "end"
                            }] : [{
                                column: k,
                                boundary: "start"
                            }]),
                            h = new Map;
                        for (const k of b.get())
                            for (const l of c.get()) b = l && k ?
                                e.HZa.Uqb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = P3b(e, a, h, f, g, d);
                        return Q3b(c)
                    },
                    R4 = function() {
                        const [a] = (0, __c.xb)(() => $w());
                        return a
                    },
                    S3b = function(a) {
                        switch (a) {
                            case 2:
                                return O("ibdecg");
                            case 7:
                                return O("446quA");
                            case 5:
                                return O("j1fbqg");
                            case 1:
                                return O("O5i4AQ");
                            case 6:
                                return O("C0VHsg");
                            case 4:
                                return O("9ND0kg");
                            case -1:
                                return O("RWqnLA");
                            case 9:
                                return O("nQR/7w");
                            case -2:
                                return O("P23rtA");
                            case 3:
                                return O("+IXmVg");
                            default:
                                throw new E(a);
                        }
                    },
                    T3b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    U3b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.Ewb)(a) / 2 : -(0, __c.Cwb)(a) / 2,
                            c = -(0, __c.Dwb)(a) / 2,
                            d = a.width + (0, __c.Cwb)(a) / 2 + (0, __c.Ewb)(a) / 2;
                        a = a.height + (0, __c.Dwb)(a) / 2 + (0, __c.Fwb)(a) / 2;
                        return mu({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    V3b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    X3b = function(a) {
                        var b;
                        const c = a.iz;
                        var d = a.content;
                        const e = a.context;
                        a = a.mp;
                        __c.C((d === null || d === void 0 ? void 0 : (b = d.eg) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.pk;
                        const f = {
                            type: "dom",
                            render: h => h.innerText = ""
                        };
                        switch (b.type) {
                            case 9:
                                d = f;
                                break;
                            case 6:
                                var g;
                                d = (g = c.ska) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.ye(__c.y9a, { ...__c.Jfb,
                                        value: b.value
                                    }),
                                    context: e,
                                    mp: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = W3b(c, e, d.dA, d.pk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: S4(__c.FR, {
                                        label: S3b(b.error),
                                        children: S4(__c.by, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: S4(__c.JGb, {
                                                tone: "critical"
                                            })
                                        })
                                    })
                                };
                                break;
                            default:
                                throw new E(b);
                        }
                        return d !== null && d !== void 0 ? d : f
                    },
                    W3b = function(a, b, c, d) {
                        var e;
                        return (e = a.vka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    $3b = function(a) {
                        const b = a.iz,
                            c = a.hf,
                            d = a.tub,
                            e = a.Qa;
                        b.vka = f => __c.aMa({ ...f,
                            Qa: e
                        });
                        b.vFa = f => X3b({ ...f,
                            iz: b
                        });
                        b.ska = V3b(Y3b({
                            hf: c,
                            KQ: void 0
                        }));
                        b.xFa = Z3b(d, e);
                        b.yFa = V3b(f => S4(T4, { ...f,
                            Qa: e
                        }))
                    },
                    a4b = function({
                        label: a,
                        Ua: b,
                        width: c,
                        height: d,
                        scale: e,
                        PIa: f
                    }) {
                        return S4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: U4(__c.Zx, {
                                className: V4("ivlMMQ", W4(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && S4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    W4 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    c4b = function({
                        vd: a,
                        dOa: b,
                        scale: c,
                        Vo: d,
                        Wo: e,
                        q3a: f
                    }) {
                        const g = X4(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.XD(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return S4(__c.$x, {
                            eq: "light",
                            light: "light",
                            et: "light",
                            dark: "light",
                            children: m => S4("div", {
                                className: V4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: S4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: V4("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.fm,
                                    children: S4(__c.JR, {
                                        className: V4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: S4(b4b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    e4b = function() {
                        const a = new d4b,
                            b = new __c.kS,
                            c = Y4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k =
                                        "small",
                                    q3a: l = !0
                                } = f, m = Z4(n => a.Wo({
                                    scale: n,
                                    size: k,
                                    cua: h
                                }), [k, h]);
                                return S4(c4b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    vd: f.sheet.direction === "rtl",
                                    dOa: f.selection != null && a.Tib(f.sheet, f.selection),
                                    Wo: m,
                                    q3a: l
                                })
                            }),
                            d = Y4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    zrb: n
                                } = f, p = Z4(u => a.Wo({
                                    scale: u,
                                    size: k,
                                    cua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Z4(u => m != null && a.hya(m).has(u), [m]), t = Z4(u => m != null && a.Ggb(l, m).has(u), [l, m]), v = Z4(u => {
                                    const x = n != null && l.layout.cols.Ie(u, n.Ob) >= 0 && l.layout.cols.Ie(u, n.Ic) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return S4($4, { ...f,
                                    ld: g,
                                    Ad: q,
                                    Wo: p,
                                    hE: v,
                                    UE: b
                                })
                            }),
                            e = Y4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    zrb: n
                                } = f, p = Z4(u => a.Wo({
                                    scale: u,
                                    size: k,
                                    cua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Z4(u => m != null && a.jya(m).has(u), [m]), t = Z4(u => m != null && a.Hgb(l, m).has(u), [l, m]), v = Z4(u => {
                                    const x = n != null && l.layout.rows.Ie(u, n.Tb) >= 0 && l.layout.rows.Ie(u, n.Xc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return S4(a5, { ...f,
                                    ld: q,
                                    Ad: g,
                                    Wo: p,
                                    hE: v,
                                    UE: b
                                })
                            });
                        return {
                            S3a: c,
                            R3a: d,
                            T3a: e
                        }
                    },
                    f4b = function(a) {
                        const b = a.Pp,
                            c = () => null;
                        return __c.jx(d => S4(b5, { ...d,
                            Pp: b,
                            Dh: c
                        }))
                    },
                    g4b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Fd: d
                    }) {
                        c5(() => d5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.qa(c.Ob) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.ra(c.Tb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    j4b = function({
                        onScroll: a
                    }) {
                        const b = new h4b(a);
                        return {
                            cC: b,
                            Zja: Y4(c => S4(i4b, {
                                sheet: c.sheet,
                                cC: b,
                                children: c.children
                            }))
                        }
                    },
                    m4b = function(a) {
                        const b = a.Pp,
                            c = a.le,
                            d = a.JZa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                cC: f,
                                Zja: g
                            } = j4b({
                                onScroll: a.onScroll
                            });
                        class h extends k4b {
                            get ZK() {
                                const k = this.props.fa.yv;
                                switch (k) {
                                    case "screen":
                                        return g;
                                    case "print":
                                        return e;
                                    default:
                                        throw new E(k);
                                }
                            }
                            componentDidMount() {
                                d.rZa(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                })
                            }
                            componentWillUnmount() {
                                d.k9a(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                })
                            }
                            render() {
                                d.rZa(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                });
                                return S4(l4b, { ...this.props,
                                    Y: this.Y,
                                    Pp: b,
                                    ZK: this.ZK,
                                    Dh: this.Dh,
                                    JZa: d,
                                    cC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = e5(() => {
                                    const l = this.props.item;
                                    var m = this.props.fa,
                                        n = m.yv;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Jfb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.wE(l,
                                                n.xb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Dh = Y4(l => S4("div", {
                                    className: "wKvivQ",
                                    children: S4(__c.iMa, { ...this.props,
                                        ...l,
                                        le: c
                                    })
                                }))
                            }
                        }
                        return {
                            eka: h,
                            cC: f
                        }
                    },
                    n4b = function(a, b) {
                        if (b != null && b.Ob != null && b.Tb != null && b.Ic != null && b.Xc != null) {
                            var c = a.qa(b.Ob),
                                d = a.ra(b.Tb),
                                e = a.qa(b.Ic) + b.Ic.width - c;
                            a = a.ra(b.Xc) + b.Xc.height - d;
                            return mu({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    p4b = function(a) {
                        const b = a.Pp,
                            c = () => null;
                        return d => S4(o4b, { ...d,
                            Pp: b,
                            Dh: c
                        })
                    },
                    t4b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                dIa: b,
                                qv: b,
                                Ia: {},
                                xn: {}
                            },
                            d = f5(() => a.rz.style || c, h => {
                                var k;
                                Object.assign(a.Z8.style, h.dIa);
                                Object.assign(a.wL.style, h.qv);
                                Object.assign(a.rD.style, h.Ia);
                                Object.assign(a.wD.style, h.xn);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ia) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.rD.classList.toggle("OQx3PQ", h === "underline");
                                a.rD.classList.toggle("_99ezUA", h === "line-through");
                                a.rD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: q4b
                            }),
                            e = f5(() => a.Xsa, h => {
                                a.rD.classList.toggle("_84KvRA", !h);
                                a.Z8.classList.toggle("_84KvRA", !h);
                                a.wL.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = f5(() => a.renderer, h => {
                                a.M9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.M9 = void 0, a.Q3.remove()) : a.wD.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.M9 = r4b(h.node, a.Q3);
                                        a.wD.appendChild(a.Q3);
                                        break;
                                    case "dom":
                                        h.render(a.wD);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.Yua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = s4b ? f5(() => a.vra, h => {
                                a.rD.classList.toggle("qxD1GA", h)
                            }, {
                                fireImmediately: !0
                            }) :
                            void 0;
                        return () => {
                            d();
                            e();
                            f();
                            g === null || g === void 0 || g()
                        }
                    },
                    q4b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    v4b = function(a) {
                        const b = a.jz,
                            c = a.jC,
                            d = a.IC,
                            e = a.L2a,
                            f = a.Vx,
                            g = new u4b(c),
                            h = (k, l) => f ? L3b(f, k, l) : !1;
                        return k => S4(g5, { ...k,
                            nN: h,
                            IC: d,
                            jC: c,
                            jz: b,
                            ssa: g,
                            L2a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    Q4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
                    Y3b = ({
                        hf: a,
                        KQ: b
                    }) => c => (0, __c.N)(__c.Hwb, { ...c,
                        hf: a,
                        KQ: b
                    }),
                    h5 = __webpack_require__(443763),
                    w4b = h5.Fragment,
                    S4 = h5.jsx,
                    U4 = h5.jsxs;
                var x4b = __webpack_require__,
                    y4b = x4b(993864),
                    V4 = x4b.n_x(y4b)();
                var Y4 = __webpack_require__(446474).Pi;
                var i5 = __webpack_require__(875604),
                    j5 = i5.Component,
                    k4b = i5.PureComponent,
                    Z4 = i5.useCallback,
                    c5 = i5.useEffect,
                    z4b = i5.useLayoutEffect,
                    X4 = i5.useMemo,
                    k5 = i5.useRef;
                var l5 = __webpack_require__(519427),
                    m5 = l5.action,
                    d5 = l5.autorun,
                    n5 = l5.comparer,
                    e5 = l5.computed,
                    A4b = l5.createAtom,
                    o5 = l5.observable,
                    f5 = l5.reaction,
                    B4b = l5.untracked;
                var p5 = __webpack_require__(635872),
                    q5 = p5.Om,
                    C4b = p5.kq,
                    D4b = p5.YN;
                var r5 = __webpack_require__(937763)._;
                var s5 = __webpack_require__(161563)._;
                var E4b = __webpack_require__(358579).Z;
                var r4b = __webpack_require__(36281).createPortal;
                var F4b = class {
                        static A(a) {
                            P(a, {
                                viewBox: o5.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (F4b.A(this), mu({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Fsb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    G4b = Y4(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = k5(new F4b),
                            f = m5(() => {
                                if (a.Pia) {
                                    var h = a.Pia.current;
                                    h && e.current.Fsb(mu({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        c5(() => {
                            var h, k;
                            f();
                            (h = a.Pia.current) === null || h === void 0 || h.addEventListener("scroll",
                                f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.Pia.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.Pia, f]);
                        const g = X4(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return U4("div", {
                            className: V4("nMvVqA", d),
                            children: [U4("div", {
                                ref: a.Fd,
                                className: "_0YOFPg",
                                children: [S4(a.Pp, { ...a,
                                    viewport: g
                                }), S4("div", {
                                    className: V4("Gdl7fQ", d),
                                    children: (c = a.PEa) === null || c === void 0 ? void 0 : (b = c.get()) ===
                                        null || b === void 0 ? void 0 : b.map((h, k) => S4(h, {}, k))
                                })]
                            }), a.aHb === "visible" && U4(w4b, {
                                children: [S4("div", {
                                    className: V4("_32sKQw", d),
                                    children: S4(a.O5a, { ...a
                                    })
                                }), S4("div", {
                                    className: V4("xdIsTQ", d),
                                    children: S4(a.R5a, { ...a
                                    })
                                }), S4("div", {
                                    className: V4("rsTRSA", d),
                                    children: S4(a.Q5a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    H4b = Y4(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.Oq.ja(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var Z3b = (a, b) => __c.NLa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            Pg: c
                        } = __c.Vg(__c.Dh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            nb: void 0,
                            writingMode: 1,
                            sd: "start",
                            Df: I4b(e, c),
                            Qa: b
                        })
                    }),
                    I4b = q5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: n5.structural
                    });
                var J4b, K4b, L4b, T4;
                new(J4b = class extends r5 {
                    constructor() {
                        super(T4);
                        K4b()
                    }
                }, (() => {
                    class a extends(L4b = j5) {
                        static A(b) {
                            P(b, {
                                Pg: e5
                            })
                        }
                        get Pg() {
                            return __c.Vg(__c.Dh, this.props.context.attrs).Pg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = S4(this.props.Dh, {
                                content: b,
                                na: c.container.na,
                                col: c.container.column,
                                Pg: this.Pg
                            });
                            return this.Pg === "wrap" ? S4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [T4, K4b]
                    } = s5(a, [], [Tc], L4b))
                })(), J4b);
                var d4b = class {
                    Wo({
                        size: a,
                        scale: b,
                        cua: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.IV * b : __c.zFb * b
                    }
                    constructor() {
                        this.Tib = q5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.hya = C4b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.vr
                        });
                        this.jya = C4b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.vr
                        });
                        this.Ggb = q5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.jya(b).size > 0) return new Set(a.layout.cols);
                            b = this.hya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of T3b(c ? c.span.Ob : e.column, c ? c.span.Ic : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.vr
                        });
                        this.Hgb = q5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.hya(b).size > 0) return new Set(a.layout.rows);
                            b = this.jya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of T3b(c ? c.span.Tb : e.na, c ? c.span.Xc : e.na, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.vr
                        })
                    }
                };
                var M4b, N4b, O4b, P4b, Q4b, R4b, S4b = parseInt("4px", 10) || 4,
                    T4b = parseInt("0.5px", 10) || .5,
                    U4b = parseInt("1px", 10) || 1,
                    V4b = parseInt("0.5px", 10) || .5,
                    W4b = parseInt("0.5px", 10) || .5,
                    X4b = parseInt("1px", 10) || 1,
                    Y4b = parseInt("0.5px", 10) || .5,
                    $4;
                new(M4b = class extends r5 {
                    constructor() {
                        super($4);
                        O4b()
                    }
                }, (() => {
                    class a extends(P4b = j5) {
                        static A(b) {
                            P(b, {
                                vd: e5,
                                sq: e5,
                                r5: e5
                            })
                        }
                        get vd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.XD(c)
                        }
                        get r5() {
                            var b, c, d;
                            return (c = (d = this.props).Rqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return S4(__c.$x, {
                                eq: "light",
                                light: "light",
                                et: "light",
                                dark: "light",
                                children: this.B9a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = ($4.A(this), m5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    ld: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = m5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.iXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    hE: h,
                                    kHb: k,
                                    ld: l = 1,
                                    Ad: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.vd,
                                    gtA7Dw: this.vd
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.vd ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.r5) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return U4("div", {
                                    style: r,
                                    className: V4("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(v => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Ie(v, c) < 0 || d && f.layout.cols.Ie(v, d) > 0)) return S4(Z4b, {
                                            col: v,
                                            label: __c.yA(t),
                                            Ua: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            Wo: g,
                                            hE: h,
                                            ld: l,
                                            Ad: m
                                        }, v.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && S4("div", {
                                        style: {
                                            width: S4b * l
                                        },
                                        className: V4("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.B9a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.ZG ? e.layout.Nd.get(e.view.freeze.ZG) : void 0,
                                    g = {
                                        jNbTIg: !this.vd,
                                        gtA7Dw: this.vd
                                    };
                                return U4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.fm,
                                    className: V4("xhBZaw", g, c.className),
                                    children: [f && this.iXa(void 0, f, {
                                        sticky: !0
                                    }), this.iXa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [$4, O4b]
                    } = s5(a, [], [Tc], P4b))
                })(), M4b);
                var a5;
                new(N4b = class extends r5 {
                    constructor() {
                        super(a5);
                        Q4b()
                    }
                }, (() => {
                    class a extends(R4b = j5) {
                        static A(b) {
                            P(b, {
                                vd: e5,
                                sq: e5,
                                r5: e5
                            })
                        }
                        get vd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.XD(c)
                        }
                        get r5() {
                            var b, c, d;
                            return (c = (d = this.props).Rqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return S4(__c.$x, {
                                eq: "light",
                                light: "light",
                                et: "light",
                                dark: "light",
                                children: this.jrb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (a5.A(this), m5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Ad: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = m5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.oXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    hE: h,
                                    ld: k = 1,
                                    Ad: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.vd,
                                    gtA7Dw: this.vd
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.r5) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return U4("div", {
                                    style: q,
                                    className: V4("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Ie(t, c) < 0 || d && f.rows.Ie(t, d) > 0)) return S4($4b, {
                                            na: t,
                                            label: `${r+1}`,
                                            hE: h,
                                            Wo: g,
                                            ld: k,
                                            Ad: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && S4("div", {
                                        style: {
                                            height: S4b * l
                                        },
                                        className: V4("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.jrb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.AV ? e.layout.$d.get(e.view.freeze.AV) : void 0,
                                    g = {
                                        jNbTIg: !this.vd,
                                        gtA7Dw: this.vd
                                    };
                                return U4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.fm,
                                    className: V4("An9VeA", g, c.className),
                                    children: [f && this.oXa(void 0, f, {
                                        sticky: !0
                                    }), this.oXa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [a5, Q4b]
                    } = s5(a, [], [Tc], R4b))
                })(), N4b);
                var Z4b = Y4(a => {
                        const b = a.label,
                            c = a.Ua,
                            d = a.col,
                            e = a.hE,
                            f = a.Wo,
                            g = a.ld;
                        a = a.Ad;
                        const h = f(a),
                            k = D4b(() => e(d));
                        return S4("div", {
                            className: V4("_83Rssw", "d2uLIA", W4(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${T4b*g}px`,
                                borderBlockStartWidth: `${U4b*g}px`,
                                borderBlockEndWidth: `${V4b*g}px`
                            },
                            children: S4(a4b, {
                                label: b,
                                Ua: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                PIa: k
                            })
                        })
                    }),
                    $4b = Y4(a => {
                        const b = a.label,
                            c = a.na,
                            d = a.Wo,
                            e = a.hE,
                            f = a.ld;
                        a = a.Ad;
                        const g = d(f),
                            h = D4b(() => e(c));
                        return S4("div", {
                            className: V4("_83Rssw", "JhBzyw",
                                W4(h)),
                            style: {
                                width: g,
                                height: c.height * a,
                                borderBlockWidth: `${W4b*a}px`,
                                borderInlineStartWidth: `${X4b*a}px`,
                                borderInlineEndWidth: `${Y4b*a}px`
                            },
                            children: S4(a4b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                PIa: h
                            })
                        })
                    });
                var a5b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var b5b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var b4b = __c.yR({
                    no: a5b,
                    medium: b5b
                });
                var c5b, d5b, e5b, b5;
                new(c5b = class extends r5 {
                    constructor() {
                        super(b5);
                        d5b()
                    }
                }, (() => {
                    class a extends(e5b = j5) {
                        static A(b) {
                            P(b, {
                                ne: e5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return S4(this.props.Pp, {
                                sheet: b.ha.config,
                                container: b,
                                D8: "visible",
                                Vo: this.props.Vo,
                                Kt: this.props.Kt,
                                Ot: this.props.Ot,
                                Y: this.props.Y,
                                ne: this.ne,
                                Dh: this.props.Dh,
                                vG: void 0
                            })
                        }
                        get ne() {
                            return __c.GA(this.props.element.ha.Na, this.props.Ge)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [b5, d5b]
                    } = s5(a, [], [Tc], e5b))
                })(), c5b);
                var f5b = class {
                    constructor() {
                        this.Pga = new WeakMap;
                        this.Jfb = a => this.Pga.get(a);
                        this.rZa = (a, b) => {
                            this.Pga.set(a, b)
                        };
                        this.k9a = (a, b) => {
                            const c = this.Pga.get(a);
                            c && c.fa === b.fa && c.xb === b.xb && this.Pga.delete(a)
                        }
                    }
                };
                var t5 = parseInt("4px", 10) || 4,
                    g5b = Y4(({
                        sheet: a,
                        Y: b,
                        range: c,
                        Ev: d,
                        Fv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.ra(c.Xc) + c.Xc.height, a = a.qa(c.Ic) + c.Ic.width, S4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: t5 * b
                                },
                                className: V4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.qa(c.Ic) + c.Ic.width, S4("div", {
                                style: {
                                    width: t5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: V4("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.ra(c.Xc) + c.Xc.height, S4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: t5 * b
                                },
                                className: V4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var u5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = R4();
                        g4b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        return S4("div", {
                            ref: e,
                            className: V4("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    h5b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = R4();
                        g4b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return S4("div", {
                            className: V4("nstn2A", a, "_9sodyg"),
                            children: S4("div", {
                                ref: e,
                                className: V4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var i4b = Y4(({
                        sheet: a,
                        children: b,
                        cC: c
                    }) => {
                        const d = Z4(f => {
                                c.Fya(a, f)
                            }, [c, a]),
                            e = Z4(f => {
                                f != null ? c.dC.set(a, f) : c.dC.delete(a)
                            }, [c, a]);
                        return S4(__c.sAb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            xu: e,
                            children: b
                        })
                    }),
                    h4b = class {
                        Fya(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.z4.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.dC = new WeakMap;
                            this.z4 = o5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = m5((b, c) => {
                                b = this.dC.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var l4b = Y4(a => {
                    const b = a.item,
                        c = a.Vo,
                        d = a.Lf,
                        e = a.measureRef,
                        f = a.Y,
                        g = a.cPa,
                        h = a.xb,
                        k = a.Kt,
                        l = a.Ot,
                        m = a.Pp,
                        n = a.ZK,
                        p = a.Dh,
                        q = a.Ge,
                        r = a.cC;
                    a = X4(() => __c.GA(b.Na, q), [b, q]);
                    const t = X4(() => Y4(({
                            sheet: y,
                            range: A,
                            Ev: z,
                            Fv: B
                        }) => S4(u5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: S4(g5b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                Ev: z,
                                Fv: B
                            })
                        })), [f]),
                        v = U3b(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    c5(() => d5(() => {
                        var y = b.config.view.freeze.ZG ? b.config.layout.Nd.get(b.config.view.freeze.ZG) : void 0;
                        if (y != null)
                            if (b.config.qa(y) + y.width > x) {
                                if (y = r.dC.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.dC.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return S4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: S4(n, {
                            sheet: b,
                            children: S4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: S4("div", {
                                    className: "W1ir5A",
                                    children: S4(m, {
                                        container: d.Ej(b),
                                        sheet: b.config,
                                        D8: "visible",
                                        Vo: c,
                                        Y: f,
                                        Kt: k,
                                        Ot: l,
                                        ne: a,
                                        Dh: p,
                                        vG: t
                                    })
                                })
                            })
                        })
                    })
                });
                var i5b = Y4(({
                    page: a,
                    range: b,
                    WB: c
                }) => {
                    const d = n4b(a.sheet, b);
                    return S4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.ku(mu(e)).$o(d) && c(e, f))
                    })
                });
                var j5b = new __c.kS,
                    v5 = a => __c.IV * a,
                    k5b = () => "primary-default",
                    o4b = Y4(({
                        container: a,
                        Vo: b,
                        Kt: c,
                        Ot: d,
                        g0: e,
                        Y: f,
                        viewport: g,
                        Zsb: h,
                        Pp: k,
                        Dh: l,
                        WB: m,
                        $fa: n,
                        lzb: p,
                        Zxb: q,
                        Yxb: r
                    }) => {
                        const t = a.page,
                            v = X4(() => Y4(({
                                sheet: u,
                                range: x,
                                Ev: y,
                                Fv: A
                            }) => U4(w4b, {
                                children: [S4(u5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: S4(g5b, {
                                        sheet: u,
                                        Y: f,
                                        range: x,
                                        Ev: y,
                                        Fv: A
                                    })
                                }), U4(h5b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && S4(p, {}), m && S4(i5b, {
                                        page: t,
                                        WB: m,
                                        range: x
                                    }), r && S4(r, {}), n && n()]
                                }), q && x && S4(u5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: S4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? S4(l5b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            Vo: b,
                            Kt: c,
                            Ot: d,
                            Pp: k,
                            Dh: l,
                            vG: v
                        }) : S4(k, {
                            sheet: t.sheet,
                            container: a,
                            D8: "hidden",
                            Vo: b,
                            Kt: c,
                            Ot: d,
                            g0: e,
                            Y: f,
                            viewport: g,
                            Dh: l,
                            vG: v
                        })
                    }),
                    l5b = Y4(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.Vo,
                            f = a.Kt,
                            g = a.Ot,
                            h = a.Pp,
                            k = a.Dh;
                        a = a.vG;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = k5(null),
                            p = k5(null),
                            q = k5(null);
                        c5(() => {
                            const y = w5({
                                sheet: l.sheet,
                                rha: !0,
                                sha: !0,
                                Y: c,
                                viewport: d
                            });
                            return f5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = n.current;
                                if (A && z) {
                                    var B =
                                        l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H;
                                    z.style.top = (H = A.top) !== null && H !== void 0 ? H : "0px";
                                    var I, K;
                                    B ? z.style.right = (I = A.right) !== null && I !== void 0 ? I : "0px" : z.style.left = (K = A.left) !== null && K !== void 0 ? K : "0px";
                                    var M;
                                    z.style.transform = (M = A.transform) !== null && M !== void 0 ? M : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        c5(() => {
                            const y = w5({
                                sheet: l.sheet,
                                rha: !1,
                                sha: !0,
                                Y: c,
                                viewport: d
                            });
                            return f5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = q.current;
                                if (A && z) {
                                    var B;
                                    z.style.position =
                                        (B = A.position) !== null && B !== void 0 ? B : "sticky";
                                    var G;
                                    z.style.top = (G = A.top) !== null && G !== void 0 ? G : "0px";
                                    var H;
                                    z.style.transform = (H = A.transform) !== null && H !== void 0 ? H : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        c5(() => {
                            const y = w5({
                                sheet: l.sheet,
                                rha: !0,
                                sha: !1,
                                Y: c,
                                viewport: d
                            });
                            return f5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
                                const z = p.current;
                                if (A && z) {
                                    var B = l.sheet.direction === "rtl",
                                        G;
                                    z.style.position = (G = A.position) !== null && G !== void 0 ? G : "sticky";
                                    var H, I;
                                    B ? z.style.right = (H = A.right) !== null && H !== void 0 ? H : "0px" : z.style.left =
                                        (I = A.left) !== null && I !== void 0 ? I : "0px";
                                    var K;
                                    z.style.transform = (K = A.transform) !== null && K !== void 0 ? K : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = Z4((y, A, z) => w5({
                                sheet: y,
                                rha: A,
                                sha: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = X4(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = X4(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return U4("div", {
                            className: V4("OsKKIQ", "cbOp6Q"),
                            children: [S4("div", {
                                className: "VDFv_A",
                                children: S4(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    D8: "hidden",
                                    Vo: e,
                                    Kt: f,
                                    Ot: g,
                                    g0: r,
                                    Y: c,
                                    viewport: d,
                                    Dh: k,
                                    vG: a
                                })
                            }), S4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: S4(c4b, {
                                    vd: m,
                                    dOa: !1,
                                    Wo: v5,
                                    scale: x
                                })
                            }), S4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: S4($4, {
                                    sheet: l.sheet,
                                    ld: x,
                                    Ad: x,
                                    Wo: v5,
                                    hE: k5b,
                                    UE: j5b,
                                    Rqa: t
                                })
                            }), S4("div", {
                                ref: p,
                                className: "zm537g",
                                children: S4(a5, {
                                    sheet: l.sheet,
                                    ld: x,
                                    Ad: x,
                                    Wo: v5,
                                    hE: k5b,
                                    UE: j5b,
                                    Rqa: v
                                })
                            })]
                        })
                    }),
                    w5 = ({
                        sheet: a,
                        rha: b,
                        sha: c,
                        Y: d,
                        viewport: e
                    }) => e5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.uu(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new Pt(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var u4b = class {
                    constructor(a) {
                        this.jC = a;
                        this.W8a = __c.$T;
                        this.nfb = q5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.hfb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !uH(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !uH(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !uH(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !uH(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.W8a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.qa(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.qa(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.qa(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || uH(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || uH(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.qa(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = uH(b, c, l)) m = h, n = k, p = b.qa(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.hfb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Aa.ref) && g.span.Tb === g.span.Xc && g.span.Ob === g.span.Ic) {
                                var h = this.jC.Gv(b, c, d);
                                b = this.jC.Lqa(b, c, d, __c.Eh({
                                    Pg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Pg: k,
                                    textAlign: l
                                } = __c.Vg(__c.Dh, b);
                                if (k === "overflow") return __c.OLa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Aa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.pk.type : void 0)
                            }
                        }
                    }
                };
                var m5b = Y4(function(a) {
                    const b = a.sheet;
                    var c = a.dh;
                    const d = a.Cwb,
                        e = a.Y,
                        f = a.ssa,
                        g = a.Web;
                    a = a.overflow;
                    const h = R4();
                    z4b(() => d5(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = Z4(p => f.nfb(b, p, d, g), [f, b, d, g]);
                    var l = Z4((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = R3b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return S4("svg", {
                        ref: h,
                        role: "presentation",
                        className: V4("c6a1eQ", {
                            H_CtIQ: !n,
                            _8_56PQ: n,
                            _3NnFzw: a === "visible",
                            JMH1ng: a === "hidden"
                        }),
                        viewBox: `0 0 ${l} ${m}`,
                        strokeLinecap: "butt",
                        strokeLinejoin: "miter",
                        children: c.map(({
                            lines: p,
                            color: q,
                            weight: r,
                            jk: t,
                            kk: v
                        }) => S4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: v,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${v}`))
                    })
                });
                var n5b;
                n5b = Symbol.iterator;
                var o5b = class {
                    get size() {
                        return this.aha
                    }
                    get([a, b]) {
                        return (a = this.GE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.GE.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.GE.get(a);
                        d == null && (d = new Map, this.GE.set(a, d));
                        d.set(b, c);
                        this.aha++;
                        return this
                    }
                    clear() {
                        this.GE.clear();
                        this.aha = 0
                    }
                    delete([a, b]) {
                        const c = this.GE.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.aha--;
                        c.size === 0 && this.GE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.GE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[n5b]() {
                        for (const [a, b] of this.GE)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.aha = 0;
                        this.GE = new Map
                    }
                };
                var p5b, q5b, r5b, s5b, t5b, u5b, v5b, s4b = __c.uw("285688d5", !1),
                    w5b, x5b = class extends j5 {
                        render() {
                            const {
                                Naa: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return U4("div", {
                                ref: this.LZa,
                                className: V4("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.uHa) && S4(x5, { ...b,
                                    sheet: c,
                                    range: a.uHa.range,
                                    Ev: !0,
                                    Fv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.V2a) && S4(x5, { ...b,
                                    sheet: c,
                                    range: a.V2a.range,
                                    Ev: !1,
                                    Fv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.gOa) && S4(x5, { ...b,
                                    sheet: c,
                                    range: a.gOa.range,
                                    Ev: !0,
                                    Fv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.I1a) && S4(x5, { ...b,
                                    sheet: c,
                                    range: a.I1a.range,
                                    Ev: !1,
                                    Fv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = d5(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.LZa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.Dc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.LZa = $w()
                        }
                    };
                ({
                    c: [w5b, r5b]
                } = s5(x5b, [], [Tc], j5));
                r5b();
                var x5;
                new(p5b = class extends r5 {
                    constructor() {
                        super(x5);
                        s5b()
                    }
                }, (() => {
                    class a extends(t5b = j5) {
                        static A(b) {
                            P(b, {
                                Tya: e5,
                                bounds: e5
                            })
                        }
                        get Tya() {
                            const b = this.props.viewport,
                                c = this.props.Ev,
                                d = this.props.Fv;
                            return b == null || !c && !d ? b : e5(() => {
                                const e = __c.uu(b.get());
                                return mu({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.nN,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.vG,
                                g = this.props.Ev,
                                h = this.props.Fv;
                            return U4("div", {
                                ref: this.hwa,
                                className: V4("i0YQww",
                                    this.props.className),
                                children: [S4("div", {
                                    ref: this.pVa,
                                    className: "vUKoKg",
                                    children: S4("div", {
                                        ref: this.qVa,
                                        children: S4(y5, {
                                            nN: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            Vo: this.props.Vo,
                                            IC: this.props.IC,
                                            Dh: this.props.Dh,
                                            oZ: this.props.oZ,
                                            Y: this.props.Y,
                                            dh: this.dh,
                                            R6: this.R6,
                                            fS: this.fS
                                        })
                                    })
                                }), S4(this.cka, {}), f && S4(f, {
                                    sheet: c,
                                    range: e,
                                    Ev: g,
                                    Fv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = d5(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.hwa.current;
                                    const p = this.pVa.current;
                                    h = this.qVa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.qa(m.Ic) + m.Ic.width - l.qa(m.Ob) : l.width,
                                        r = m ? l.ra(m.Xc) + m.Xc.height - l.ra(m.Tb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.qa(m.Ob) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.ra(m.Tb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.g0;
                            const e = this.props.Ev,
                                f = this.props.Fv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = d5(() => {
                                const h = this.hwa.current;
                                if (h != null) {
                                    var k =
                                        e || f ? "sticky" : "relative",
                                        l = f ? "0px" : "unset",
                                        m = e ? "0px" : "unset",
                                        n = e ? "0px" : "unset",
                                        p = c.direction === "rtl";
                                    if (g == null) h.style.position = k, h.style.top = l, h.style.left = p ? "unset" : m, h.style.right = p ? n : "unset";
                                    else {
                                        const x = g.get();
                                        var q;
                                        h.style.position = (q = x.position) !== null && q !== void 0 ? q : k;
                                        var r;
                                        h.style.top = (r = x.top) !== null && r !== void 0 ? r : l;
                                        var t;
                                        h.style.left = p ? "unset" : (t = x.left) !== null && t !== void 0 ? t : m;
                                        var v;
                                        h.style.right = p ? (v = x.right) !== null && v !== void 0 ? v : n : "unset";
                                        var u;
                                        h.style.transform = (u = x.transform) !== null &&
                                            u !== void 0 ? u : "unset"
                                    }
                                }
                            });
                            __c.Dc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                Ob: void 0,
                                Ic: void 0,
                                Tb: void 0,
                                Xc: void 0
                            };
                            var d, e, f, g;
                            return {
                                Ob: (d = c === null || c === void 0 ? void 0 : c.Ob) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Ic: (e = c === null || c === void 0 ? void 0 : c.Ic) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                Tb: (f = c === null || c === void 0 ? void 0 : c.Tb) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                Xc: (g = c === null || c === void 0 ? void 0 : c.Xc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.hwa = (x5.A(this), $w());
                            this.pVa = $w();
                            this.qVa = $w();
                            this.fS = new y5b;
                            this.Dwb = e5(() => [...this.dh.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Ie(c, d)), {
                                equals: __c.wr()
                            });
                            this.Bwb = e5(() => [...this.R6.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Ie(c, d)), {
                                equals: __c.wr()
                            });
                            this.cka = Y4(() => S4(this.props.N5a, {
                                dh: this.Dwb,
                                Cwb: this.Bwb,
                                Web: this.fS.efb,
                                range: this.props.range
                            }));
                            this.dh = e5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Tya) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.y - g : c.Tb ? d.ra(c.Tb) : 0;
                                f = f ? f.br.y + g : c.Xc ? d.ra(c.Xc) + c.Xc.height : 0;
                                g = new Map;
                                for (let k = c.Tb; k != null && c.Xc != null && d.layout.rows.Ie(k, c.Xc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.ra(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: n5.shallow
                            });
                            this.R6 = e5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Tya) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.x - g : c.Ob ? d.qa(c.Ob) : 0;
                                f = f ? f.br.x + g : c.Ic ? d.qa(c.Ic) + c.Ic.width : 0;
                                g = new Map;
                                for (let k = c.Ob; k != null && c.Ic != null && d.layout.cols.Ie(k, c.Ic) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.qa(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: n5.shallow
                            })
                        }
                    }({
                        c: [x5, s5b]
                    } = s5(a, [], [Tc], t5b))
                })(), p5b);
                var y5b = class {
                        constructor() {
                            this.cells = new o5b;
                            this.pxa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = o5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.efb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = o5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.oJa
                            }
                        }
                    },
                    y5;
                new(q5b = class extends r5 {
                    constructor() {
                        super(y5);
                        u5b()
                    }
                }, (() => {
                    class a extends(v5b = j5) {
                        static A(b) {
                            P(b, {
                                IK: o5.shallow,
                                sq: e5,
                                YGa: m5,
                                V9: m5.bound
                            })
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.XD(c)
                        }
                        render() {
                            var b;
                            return U4("div", {
                                ref: E4b(this.Fd, (b = this.sq) === null || b === void 0 ? void 0 : b.fm),
                                children: [S4("div", {
                                    ref: this.Uma,
                                    className: "_5YlOqQ"
                                }), S4("div", {
                                    ref: this.Wma,
                                    className: "_XCmKw"
                                }), this.IK.map(c => c.spb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                f5(() => [this.props.sheet, this.props.R6.get(), this.props.dh.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.l9a();
                                    this.YGa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = d5(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Fd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.IK.map(e => t4b(e));
                            __c.Dc(this, [c, b, ...d])
                        }
                        l9a() {
                            const b = D(this.Uma.current),
                                c = D(this.Wma.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.qDa.length = 0;
                            this.IK.length = 0
                        }
                        YGa(b, c) {
                            const d = D(this.Uma.current),
                                e = D(this.Wma.current),
                                f = [],
                                g = new Map;
                            for (const h of this.qDa) c.has(h.na) ? g.set(h.na, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new z5b(this.V9, h), d.appendChild(c.a9), e.appendChild(c.c9), this.qDa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        V9(b, c) {
                            const d = this.props.oZ,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.fS;
                            b = new A5b(this.props.nN, this.props.IC, this.props.Dh, d(b, c), e, b, c, f, g.pxa, this.dba, this.cba);
                            __c.Dc(this, t4b(b));
                            this.IK.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Fd = (y5.A(this), $w());
                            this.Uma = $w();
                            this.Wma = $w();
                            this.qDa = [];
                            this.IK = [];
                            this.dba = q5(c => {
                                const d = this.props.dh.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.cba = q5(c => {
                                const d = this.props.R6.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [y5, u5b]
                    } = s5(a, [], [Tc], v5b))
                })(), q5b);
                var z5b = class {
                        static A(a) {
                            P(a, {
                                update: m5
                            })
                        }
                        update(a, b, c) {
                            [this.a9, this.c9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.na = b;
                            for (const [d] of c) c = this.IK.get(d), c || (c = this.V9(d, b), this.IK.set(d, c), this.a9.appendChild(c.Z8), this.c9.appendChild(c.wL)), c.update(b)
                        }
                        hide() {
                            [this.a9, this.c9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.V9 = a;
                            this.na = b;
                            this.a9 = (z5b.A(this), document.createElement("div"));
                            this.c9 = document.createElement("div");
                            this.IK = new Map
                        }
                    },
                    A5b = class {
                        static A(a) {
                            P(a, {
                                M9: o5.ref,
                                na: o5.ref,
                                vra: e5,
                                update: m5,
                                bt: e5,
                                attrs: e5.struct,
                                Xsa: e5,
                                qv: e5,
                                renderer: e5,
                                oJa: e5.struct
                            })
                        }
                        get vra() {
                            if (!s4b) return !1;
                            const a = this.bt;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.nN(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.na && (this.na = a, this.rz.na = a, this.Roa && this.Roa(), this.Roa = this.pxa(this.na, this.col, this))
                        }
                        get spb() {
                            return this.M9
                        }
                        get bt() {
                            const a = this.sheet.layout.cells.get(this.na, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.rz.attrs;
                            return {
                                Pg: a === null || a === void 0 ? void 0 : a.Pg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Xsa() {
                            var a = this.rz.span;
                            if (!a) return !1;
                            if (a.Tb === a.Xc && a.Ob === a.Ic) return !0;
                            var b = this.dba("first");
                            const c = this.dba("last"),
                                d = this.cba("first"),
                                e = this.cba("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Ie(a.Tb, b) >= 0 && this.sheet.layout.rows.Ie(a.Tb, c) <=
                                0 ? a.Tb : b;
                            a = this.sheet.layout.cols.Ie(a.Ob, d) >= 0 && this.sheet.layout.cols.Ie(a.Ob, e) <= 0 ? a.Ob : d;
                            return b === this.na && a === this.col
                        }
                        get qv() {
                            const a = this.sheet,
                                b = this.na,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                na: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.Hob.Hd(c, b);
                                case "sheet-item":
                                    return this.container.Sya.Hd(c, b);
                                case "sheet-element":
                                    return this.container.Osb.Hd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.bt;
                            if (a && this.Xsa &&
                                (a.content.ref || a.Aa.ref)) return this.IC({
                                context: {
                                    container: this.qv,
                                    attrs: this.attrs
                                },
                                mp: this.Yua,
                                Dh: this.Dh
                            })
                        }
                        get oJa() {
                            this.pJa.reportObserved();
                            var a = B4b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.Q3 : this.wD, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.nN = a;
                            this.IC = b;
                            this.rz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.pxa = k;
                            this.dba = l;
                            this.cba = m;
                            this.Z8 =
                                (A5b.A(this), document.createElement("div"));
                            this.wL = document.createElement("div");
                            this.rD = document.createElement("div");
                            this.wD = document.createElement("div");
                            this.Q3 = document.createElement("div");
                            this.pJa = A4b("content size atom");
                            this.Yua = m5(() => this.pJa.reportChanged());
                            this.na = g;
                            this.Z8.className = "_2JFriw";
                            this.wL.className = "imy9ug";
                            this.rD.className = V4("pDMp7w", {
                                _0yZ6Qg: ((p = this.bt) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.bt) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.bt) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.vra
                            });
                            this.wD.className = "_30B9pw";
                            this.rD.appendChild(this.wD);
                            this.wL.appendChild(this.rD);
                            this.Q3.className = "G7zH2w";
                            this.Roa = k(this.na, this.col, this);
                            this.Dh = u => S4(c, { ...u,
                                mp: this.Yua
                            })
                        }
                    };
                var B5b, C5b, D5b, g5;
                new(B5b = class extends r5 {
                    constructor() {
                        super(g5);
                        C5b()
                    }
                }, (() => {
                    class a extends(D5b = j5) {
                        static A(b) {
                            P(b, {
                                Naa: e5
                            })
                        }
                        render() {
                            const {
                                nN: b,
                                sheet: c,
                                container: d,
                                Vo: e,
                                g0: f,
                                IC: g,
                                ne: h,
                                Dh: k,
                                viewport: l,
                                vG: m,
                                L2a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return S4("div", {
                                className: V4("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: S4(w5b, {
                                    nN: b,
                                    IC: g,
                                    Dh: k,
                                    N5a: this.cka,
                                    oZ: this.oZ,
                                    sheet: c,
                                    container: d,
                                    Vo: e,
                                    g0: f,
                                    Y: this.Y,
                                    viewport: l,
                                    vG: m,
                                    Naa: this.Naa
                                })
                            })
                        }
                        get Naa() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.AV ? b.layout.$d.get(b.view.freeze.AV) : void 0,
                                e = b.view.freeze.ZG ? b.layout.Nd.get(b.view.freeze.ZG) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.uHa = {
                                    range: {
                                        Ob: h,
                                        Tb: f,
                                        Ic: e,
                                        Xc: d
                                    }
                                });
                                d && l && (c.V2a = {
                                    range: {
                                        Ob: l,
                                        Tb: f,
                                        Ic: k,
                                        Xc: d
                                    }
                                });
                                e && b && (c.gOa = {
                                    range: {
                                        Ob: h,
                                        Tb: b,
                                        Ic: e,
                                        Xc: g
                                    }
                                });
                                b && l && (c.I1a = {
                                    range: {
                                        Ob: l,
                                        Tb: b,
                                        Ic: k,
                                        Xc: g
                                    }
                                });
                                return c
                            }
                        }
                        get Y() {
                            return this.props.Y ?
                                this.props.Y : e5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.cka = (g5.A(this), Y4(c => {
                                const {
                                    sheet: d,
                                    ssa: e,
                                    Y: f,
                                    D8: g = "hidden"
                                } = this.props;
                                return S4(u5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: S4(m5b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        ssa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.oZ = (c, d) => new __c.gMa(this.props.jC, this.props.jz, this.props.sheet, c, d, this.Y, this.Kt, this.Ot);
                            this.Kt = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Kt) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.Ot = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).Ot) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [g5, C5b]
                    } = s5(a, [], [Tc], D5b))
                })(), B5b);
                __c.nMa = {
                    Nhb: function(a) {
                        const b = a.Fn,
                            c = a.Gd,
                            d = a.hd,
                            e = a.$l,
                            f = a.jC,
                            g = a.jz,
                            h = a.pX;
                        $3b({
                            iz: a.iz,
                            hf: a.hf,
                            tub: a.VO,
                            Qa: a.Qa
                        });
                        const k = v4b({
                            IC: h,
                            jC: f,
                            jz: g,
                            Vx: void 0
                        });
                        b.zka = p4b({
                            Pp: k
                        });
                        c.dka = f4b({
                            Pp: k
                        });
                        ({
                            eka: a
                        } = m4b({
                            Pp: k,
                            le: e(),
                            JZa: new f5b
                        }));
                        d.Wp.yka = a;
                        const {
                            S3a: l,
                            T3a: m,
                            R3a: n
                        } = e4b();
                        return {
                            iFa: Y4(p => S4(G4b, { ...p,
                                container: void 0,
                                Pp: k,
                                Q5a: l,
                                R5a: m,
                                O5a: n,
                                Dh: H4b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/b0f7bc682e70d7c8.js.map