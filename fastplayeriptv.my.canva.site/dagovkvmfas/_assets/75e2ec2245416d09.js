(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [35024], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._7ccc7343da2ae983607b3819c7bc1f93 = self._7ccc7343da2ae983607b3819c7bc1f93 || {};
            (function(__c) {
                var tH = __c.tH;
                var Tc = __c.Tc;
                var P = __c.P;
                var lu = __c.lu;
                var O = __c.O;
                var Zw = __c.Zw;
                var Ot = __c.Ot;
                var D = __c.D;
                var E = __c.E;
                var O4 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.UR(b.reference.bi);
                                a = a.zV(b.reference.oi);
                                return c != null && a != null;
                            case 1:
                                return a.UR(b.reference.bi) != null;
                            case 2:
                                return a.zV(b.reference.oi) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    M3b = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.da.length > 0) return !1;
                                a = a.jF(c.HY.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.ED(new __c.HD, a.mH).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return O4(b, d);
                                        case 1:
                                            return O4(b,
                                                d.start) && O4(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    N3b = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.na;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.Tb === c : g.span.Xc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.pa : c === null || c === void 0 ? void 0 : c.Fa) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: D(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.Dpa, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.SXa, h = h.na === k.na && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.oc === c.oc && g.oc === 0 ? g.Dpa = f : e.push({
                                            SXa: k,
                                            ytb: l,
                                            Dpa: f,
                                            color: c.color,
                                            weight: c.weight,
                                            oc: c.oc
                                        })
                                    }
                            }
                        return e
                    },
                    O3b = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.na,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.Ob === h : d.span.Ic === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ra : d === null || d === void 0 ? void 0 : d.La) && (l.boundary !== "start" || e(g, h) !== 1)) {
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
                                        k && (k = h.Hpa, k = k.na === m.na && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.oc === d.oc && h.oc === 0 ? h.Hpa = g : f.push({
                                            GIa: l,
                                            Jtb: m,
                                            Hpa: g,
                                            color: d.color,
                                            weight: d.weight,
                                            oc: d.oc
                                        })
                                    }
                            }
                        return f
                    },
                    P3b = function(a, b, c, d, e) {
                        const f =
                            a.JZa.x$a(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                w = f.get(r) || 0;
                            return t <= w ? q : r
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
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.La : m === null || m === void 0 ? void 0 : m.ra;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Fa : m === null || m === void 0 ?
                                    void 0 : m.pa;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.La : n === null || n === void 0 ? void 0 : n.ra;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Fa : l === null || l === void 0 ? void 0 : l.pa;
                                p = __c.TEa({
                                    pa: n,
                                    Fa: k,
                                    ra: l,
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
                                    height: w,
                                    width: u
                                } = (t === null || t === void 0 ? void 0 : t.oc) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(P4(q, r), __c.gE(p, w / 2, u / 2))
                            }
                        }
                        return g
                    },
                    Q3b = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = N3b(b, c, d, e);
                        f = O3b(b, c, d, e, f);
                        const h = P3b(a, b, c, d, e),
                            k = a.Hfb(b),
                            l = a.$eb(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.ytb,
                                t = n.Dpa,
                                w = n.SXa;
                            const u = n.color,
                                x = n.weight;
                            n = n.oc;
                            const y = m ? -1 : 1,
                                A = (p = h.get(P4(r, w))) === null || p === void 0 ?
                                void 0 : p.La;
                            p = (q = h.get(P4(t, w))) === null || q === void 0 ? void 0 : q.ra;
                            if (A != null && p != null) {
                                q = D(k.get(w.na));
                                var z = D(l.get(r.column));
                                r = D(l.get(t.column));
                                w = w.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    oc: n,
                                    p1: new Ot(q + A * y, w),
                                    p2: new Ot(t + p * y, w),
                                    ...__c.lE((t - q) * y, n * x, A)
                                }
                            }
                        }).filter(__c.Ib);
                        return [...f.map(n => {
                            var p, q, r = n.GIa,
                                t = n.Jtb,
                                w = n.Hpa;
                            const u = n.color,
                                x = n.weight;
                            n = n.oc;
                            const y = (p = h.get(P4(r, t))) === null || p === void 0 ? void 0 : p.Fa;
                            p = (q = h.get(P4(r,
                                w))) === null || q === void 0 ? void 0 : q.pa;
                            if (y != null && p != null) {
                                q = D(l.get(r.column));
                                var A = D(k.get(t.na));
                                t = D(k.get(w.na));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = A.start;
                                w = w.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    oc: n,
                                    p1: new Ot(r, q + y),
                                    p2: new Ot(r, w + p),
                                    ...__c.lE(w - q, n * x, y)
                                }
                            }
                        }).filter(__c.Ib), ...a]
                    },
                    R3b = function(a) {
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
                    S3b = function(a, b, c, d) {
                        var e = __c.Cwb;
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
                                e.JZa.Wqb(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = Q3b(e, a, h, f, g, d);
                        return R3b(c)
                    },
                    Q4 = function() {
                        const [a] = (0, __c.xb)(() => Zw());
                        return a
                    },
                    T3b = function(a) {
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
                    U3b = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    V3b = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.Fwb)(a) / 2 : -(0, __c.Dwb)(a) / 2,
                            c = -(0, __c.Ewb)(a) / 2,
                            d = a.width + (0, __c.Dwb)(a) / 2 + (0, __c.Fwb)(a) / 2;
                        a = a.height + (0, __c.Ewb)(a) / 2 + (0, __c.Gwb)(a) / 2;
                        return lu({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    W3b = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    Y3b = function(a) {
                        var b;
                        const c = a.jz;
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
                                d = (g = c.rka) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.ye(__c.z9a, { ...__c.Kfb,
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
                                d = X3b(c, e, d.eA, d.pk.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: R4(__c.ER, {
                                        label: T3b(b.error),
                                        children: R4(__c.ay, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: R4(__c.KGb, {
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
                    X3b = function(a, b, c, d) {
                        var e;
                        return (e = a.uka) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    a4b = function(a) {
                        const b = a.jz,
                            c = a.hf,
                            d = a.vub,
                            e = a.Qa;
                        b.uka = f => __c.bMa({ ...f,
                            Qa: e
                        });
                        b.uFa = f => Y3b({ ...f,
                            jz: b
                        });
                        b.rka = W3b(Z3b({
                            hf: c,
                            IQ: void 0
                        }));
                        b.wFa = $3b(d, e);
                        b.xFa = W3b(f => R4(S4, { ...f,
                            Qa: e
                        }))
                    },
                    b4b = function({
                        label: a,
                        Ua: b,
                        width: c,
                        height: d,
                        scale: e,
                        PIa: f
                    }) {
                        return R4("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: T4(__c.Yx, {
                                className: U4("ivlMMQ", V4(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && R4(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    V4 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    d4b = function({
                        vd: a,
                        dOa: b,
                        scale: c,
                        Vo: d,
                        Wo: e,
                        s3a: f
                    }) {
                        const g = W4(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.WD(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return R4(__c.Zx, {
                            eq: "light",
                            light: "light",
                            et: "light",
                            dark: "light",
                            children: m => R4("div", {
                                className: U4("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: R4("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: U4("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.fm,
                                    children: R4(__c.IR, {
                                        className: U4("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: R4(c4b, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    f4b = function() {
                        const a = new e4b,
                            b = new __c.jS,
                            c = X4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k =
                                        "small",
                                    s3a: l = !0
                                } = f, m = Y4(n => a.Wo({
                                    scale: n,
                                    size: k,
                                    bua: h
                                }), [k, h]);
                                return R4(d4b, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    vd: f.sheet.direction === "rtl",
                                    dOa: f.selection != null && a.Vib(f.sheet, f.selection),
                                    Wo: m,
                                    s3a: l
                                })
                            }),
                            d = X4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Brb: n
                                } = f, p = Y4(u => a.Wo({
                                    scale: u,
                                    size: k,
                                    bua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Y4(u => m != null && a.gya(m).has(u), [m]), t = Y4(u => m != null && a.Igb(l, m).has(u), [l, m]), w = Y4(u => {
                                    const x = n != null && l.layout.cols.Ie(u, n.Ob) >= 0 && l.layout.cols.Ie(u, n.Ic) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return R4(Z4, { ...f,
                                    ld: g,
                                    Ad: q,
                                    Wo: p,
                                    hE: w,
                                    VE: b
                                })
                            }),
                            e = X4(f => {
                                const {
                                    scale: g = 1,
                                    ZNa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    Brb: n
                                } = f, p = Y4(u => a.Wo({
                                    scale: u,
                                    size: k,
                                    bua: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = Y4(u => m != null && a.iya(m).has(u), [m]), t = Y4(u => m != null && a.Jgb(l, m).has(u), [l, m]), w = Y4(u => {
                                    const x = n != null && l.layout.rows.Ie(u, n.Tb) >= 0 && l.layout.rows.Ie(u, n.Xc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return R4($4, { ...f,
                                    ld: q,
                                    Ad: g,
                                    Wo: p,
                                    hE: w,
                                    VE: b
                                })
                            });
                        return {
                            U3a: c,
                            T3a: d,
                            V3a: e
                        }
                    },
                    g4b = function(a) {
                        const b = a.Pp,
                            c = () => null;
                        return __c.ix(d => R4(a5, { ...d,
                            Pp: b,
                            Dh: c
                        }))
                    },
                    h4b = function({
                        sheet: a,
                        Y: b,
                        range: c,
                        Fd: d
                    }) {
                        b5(() => c5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ra(c.Ob) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.pa(c.Tb) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    k4b = function({
                        onScroll: a
                    }) {
                        const b = new i4b(a);
                        return {
                            cC: b,
                            Yja: X4(c => R4(j4b, {
                                sheet: c.sheet,
                                cC: b,
                                children: c.children
                            }))
                        }
                    },
                    n4b = function(a) {
                        const b = a.Pp,
                            c = a.le,
                            d = a.LZa,
                            e = ({
                                children: k
                            }) => k,
                            {
                                cC: f,
                                Yja: g
                            } = k4b({
                                onScroll: a.onScroll
                            });
                        class h extends l4b {
                            get YK() {
                                const k = this.props.fa.zv;
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
                                d.tZa(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                })
                            }
                            componentWillUnmount() {
                                d.m9a(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                })
                            }
                            render() {
                                d.tZa(this.props.item, {
                                    xb: this.props.xb,
                                    fa: this.props.fa
                                });
                                return R4(m4b, { ...this.props,
                                    Y: this.Y,
                                    Pp: b,
                                    YK: this.YK,
                                    Dh: this.Dh,
                                    LZa: d,
                                    cC: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.Y = d5(() => {
                                    const l = this.props.item;
                                    var m = this.props.fa,
                                        n = m.zv;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.Lfb(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.vE(l,
                                                n.xb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Dh = X4(l => R4("div", {
                                    className: "wKvivQ",
                                    children: R4(__c.jMa, { ...this.props,
                                        ...l,
                                        le: c
                                    })
                                }))
                            }
                        }
                        return {
                            dka: h,
                            cC: f
                        }
                    },
                    o4b = function(a, b) {
                        if (b != null && b.Ob != null && b.Tb != null && b.Ic != null && b.Xc != null) {
                            var c = a.ra(b.Ob),
                                d = a.pa(b.Tb),
                                e = a.ra(b.Ic) + b.Ic.width - c;
                            a = a.pa(b.Xc) + b.Xc.height - d;
                            return lu({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    q4b = function(a) {
                        const b = a.Pp,
                            c = () => null;
                        return d => R4(p4b, { ...d,
                            Pp: b,
                            Dh: c
                        })
                    },
                    u4b = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                dIa: b,
                                rv: b,
                                Ia: {},
                                yn: {}
                            },
                            d = e5(() => a.sz.style || c, h => {
                                var k;
                                Object.assign(a.Z8.style, h.dIa);
                                Object.assign(a.vL.style, h.rv);
                                Object.assign(a.rD.style, h.Ia);
                                Object.assign(a.wD.style, h.yn);
                                h = h === null || h === void 0 ? void 0 : (k = h.Ia) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.rD.classList.toggle("OQx3PQ", h === "underline");
                                a.rD.classList.toggle("_99ezUA", h === "line-through");
                                a.rD.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: r4b
                            }),
                            e = e5(() => a.Wsa, h => {
                                a.rD.classList.toggle("_84KvRA", !h);
                                a.Z8.classList.toggle("_84KvRA", !h);
                                a.vL.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = e5(() => a.renderer, h => {
                                a.M9 && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.M9 = void 0, a.Q3.remove()) : a.wD.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.M9 = s4b(h.node, a.Q3);
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
                                a.Xua()
                            }, {
                                fireImmediately: !0
                            }),
                            g = t4b ? e5(() => a.ura, h => {
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
                    r4b = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    w4b = function(a) {
                        const b = a.kz,
                            c = a.jC,
                            d = a.IC,
                            e = a.N2a,
                            f = a.Xx,
                            g = new v4b(c),
                            h = (k, l) => f ? M3b(f, k, l) : !1;
                        return k => R4(f5, { ...k,
                            mN: h,
                            IC: d,
                            jC: c,
                            kz: b,
                            rsa: g,
                            N2a: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    P4 = (a, b) => `${a.column.id}-${a.boundary}:${b.na.id}-${b.boundary}`,
                    Z3b = ({
                        hf: a,
                        IQ: b
                    }) => c => (0, __c.N)(__c.Iwb, { ...c,
                        hf: a,
                        IQ: b
                    }),
                    g5 = __webpack_require__(443763),
                    x4b = g5.Fragment,
                    R4 = g5.jsx,
                    T4 = g5.jsxs;
                var y4b = __webpack_require__,
                    z4b = y4b(993864),
                    U4 = y4b.n_x(z4b)();
                var X4 = __webpack_require__(446474).Pi;
                var h5 = __webpack_require__(875604),
                    i5 = h5.Component,
                    l4b = h5.PureComponent,
                    Y4 = h5.useCallback,
                    b5 = h5.useEffect,
                    A4b = h5.useLayoutEffect,
                    W4 = h5.useMemo,
                    j5 = h5.useRef;
                var k5 = __webpack_require__(519427),
                    l5 = k5.action,
                    c5 = k5.autorun,
                    m5 = k5.comparer,
                    d5 = k5.computed,
                    B4b = k5.createAtom,
                    n5 = k5.observable,
                    e5 = k5.reaction,
                    C4b = k5.untracked;
                var o5 = __webpack_require__(635872),
                    p5 = o5.Om,
                    D4b = o5.kq,
                    E4b = o5.YN;
                var q5 = __webpack_require__(937763)._;
                var r5 = __webpack_require__(161563)._;
                var F4b = __webpack_require__(358579).Z;
                var s4b = __webpack_require__(36281).createPortal;
                var G4b = class {
                        static A(a) {
                            P(a, {
                                viewBox: n5.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (G4b.A(this), lu({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.Hsb = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    H4b = X4(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = j5(new G4b),
                            f = l5(() => {
                                if (a.Oia) {
                                    var h = a.Oia.current;
                                    h && e.current.Hsb(lu({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        b5(() => {
                            var h, k;
                            f();
                            (h = a.Oia.current) === null || h === void 0 || h.addEventListener("scroll",
                                f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.Oia.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.Oia, f]);
                        const g = W4(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return T4("div", {
                            className: U4("nMvVqA", d),
                            children: [T4("div", {
                                ref: a.Fd,
                                className: "_0YOFPg",
                                children: [R4(a.Pp, { ...a,
                                    viewport: g
                                }), R4("div", {
                                    className: U4("Gdl7fQ", d),
                                    children: (c = a.OEa) === null || c === void 0 ? void 0 : (b = c.get()) ===
                                        null || b === void 0 ? void 0 : b.map((h, k) => R4(h, {}, k))
                                })]
                            }), a.gHb === "visible" && T4(x4b, {
                                children: [R4("div", {
                                    className: U4("_32sKQw", d),
                                    children: R4(a.Q5a, { ...a
                                    })
                                }), R4("div", {
                                    className: U4("xdIsTQ", d),
                                    children: R4(a.T5a, { ...a
                                    })
                                }), R4("div", {
                                    className: U4("rsTRSA", d),
                                    children: R4(a.S5a, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    I4b = X4(a => {
                        a = a.content;
                        __c.v(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.aa;
                            case "text3":
                                return __c.Nq.ja(a.value).cells.aa();
                            default:
                                throw new E(a);
                        }
                    });
                var $3b = (a, b) => __c.OLa((c, d) => {
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
                            Df: J4b(e, c),
                            Qa: b
                        })
                    }),
                    J4b = p5((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.aa.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: m5.structural
                    });
                var K4b, L4b, M4b, S4;
                new(K4b = class extends q5 {
                    constructor() {
                        super(S4);
                        L4b()
                    }
                }, (() => {
                    class a extends(M4b = i5) {
                        static A(b) {
                            P(b, {
                                Pg: d5
                            })
                        }
                        get Pg() {
                            return __c.Vg(__c.Dh, this.props.context.attrs).Pg
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = R4(this.props.Dh, {
                                content: b,
                                na: c.container.na,
                                col: c.container.column,
                                Pg: this.Pg
                            });
                            return this.Pg === "wrap" ? R4("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [S4, L4b]
                    } = r5(a, [], [Tc], M4b))
                })(), K4b);
                var e4b = class {
                    Wo({
                        size: a,
                        scale: b,
                        bua: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? __c.HV * b : __c.AFb * b
                    }
                    constructor() {
                        this.Vib = p5((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.gya = D4b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.ur
                        });
                        this.iya = D4b(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ?
                                void 0 : b.rows) || [])
                        }, {
                            equals: __c.ur
                        });
                        this.Igb = p5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.iya(b).size > 0) return new Set(a.layout.cols);
                            b = this.gya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of U3b(c ? c.span.Ob : e.column, c ? c.span.Ic : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.ur
                        });
                        this.Jgb = p5((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.gya(b).size > 0) return new Set(a.layout.rows);
                            b = this.iya(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.na, e.column);
                                for (const f of U3b(c ? c.span.Tb : e.na, c ? c.span.Xc : e.na, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.ur
                        })
                    }
                };
                var N4b, O4b, P4b, Q4b, R4b, S4b, T4b = parseInt("4px", 10) || 4,
                    U4b = parseInt("0.5px", 10) || .5,
                    V4b = parseInt("1px", 10) || 1,
                    W4b = parseInt("0.5px", 10) || .5,
                    X4b = parseInt("0.5px", 10) || .5,
                    Y4b = parseInt("1px", 10) || 1,
                    Z4b = parseInt("0.5px", 10) || .5,
                    Z4;
                new(N4b = class extends q5 {
                    constructor() {
                        super(Z4);
                        P4b()
                    }
                }, (() => {
                    class a extends(Q4b = i5) {
                        static A(b) {
                            P(b, {
                                vd: d5,
                                sq: d5,
                                r5: d5
                            })
                        }
                        get vd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.WD(c)
                        }
                        get r5() {
                            var b, c, d;
                            return (c = (d = this.props).Qqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return R4(__c.Zx, {
                                eq: "light",
                                light: "light",
                                et: "light",
                                dark: "light",
                                children: this.D9a
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (Z4.A(this), l5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    ld: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = l5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.kXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    hE: h,
                                    qHb: k,
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
                                return T4("div", {
                                    style: r,
                                    className: U4("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(w => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Ie(w, c) < 0 || d && f.layout.cols.Ie(w, d) > 0)) return R4($4b, {
                                            col: w,
                                            label: __c.xA(t),
                                            Ua: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(w),
                                            Wo: g,
                                            hE: h,
                                            ld: l,
                                            Ad: m
                                        }, w.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && R4("div", {
                                        style: {
                                            width: T4b * l
                                        },
                                        className: U4("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.D9a = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.$G ? e.layout.Nd.get(e.view.freeze.$G) : void 0,
                                    g = {
                                        jNbTIg: !this.vd,
                                        gtA7Dw: this.vd
                                    };
                                return T4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.fm,
                                    className: U4("xhBZaw", g, c.className),
                                    children: [f && this.kXa(void 0, f, {
                                        sticky: !0
                                    }), this.kXa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [Z4, P4b]
                    } = r5(a, [], [Tc], Q4b))
                })(), N4b);
                var $4;
                new(O4b = class extends q5 {
                    constructor() {
                        super($4);
                        R4b()
                    }
                }, (() => {
                    class a extends(S4b = i5) {
                        static A(b) {
                            P(b, {
                                vd: d5,
                                sq: d5,
                                r5: d5
                            })
                        }
                        get vd() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.WD(c)
                        }
                        get r5() {
                            var b, c, d;
                            return (c = (d = this.props).Qqa) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return R4(__c.Zx, {
                                eq: "light",
                                light: "light",
                                et: "light",
                                dark: "light",
                                children: this.lrb
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = ($4.A(this), l5(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Ad: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = l5(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.qXa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    Wo: g,
                                    hE: h,
                                    ld: k = 1,
                                    Ad: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.vd,
                                    gtA7Dw: this.vd
                                };
                                var n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                        top: 0
                                    } : void 0,
                                    p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.r5) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1,
                                    t = 0;
                                n = f.rows.map(w => {
                                    r++;
                                    if (!(c && f.rows.Ie(w, c) < 0 || d && f.rows.Ie(w, d) > 0)) return t += w.height, R4(a5b, {
                                        na: w,
                                        label: `${r+1}`,
                                        hE: h,
                                        Wo: g,
                                        ld: k,
                                        Ad: l,
                                        start: f.pa(w)
                                    }, w.id)
                                });
                                return T4("div", {
                                    style: {
                                        height: t * l,
                                        width: g(k),
                                        ...q
                                    },
                                    className: U4("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [n, (e === null || e === void 0 ? void 0 : e.sticky) && R4("div", {
                                        style: {
                                            height: T4b * l
                                        },
                                        className: U4("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.lrb = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.AV ?
                                    e.layout.$d.get(e.view.freeze.AV) : void 0,
                                    g = {
                                        jNbTIg: !this.vd,
                                        gtA7Dw: this.vd
                                    };
                                return T4("div", {
                                    ref: (d = this.sq) === null || d === void 0 ? void 0 : d.fm,
                                    className: U4("An9VeA", g, c.className),
                                    children: [f && this.qXa(void 0, f, {
                                        sticky: !0
                                    }), this.qXa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [$4, R4b]
                    } = r5(a, [], [Tc], S4b))
                })(), O4b);
                var $4b = X4(a => {
                        const b = a.label,
                            c = a.Ua,
                            d = a.col,
                            e = a.hE,
                            f = a.Wo,
                            g = a.ld;
                        a = a.Ad;
                        const h = f(a),
                            k = E4b(() => e(d));
                        return R4("div", {
                            className: U4("_83Rssw", "d2uLIA", V4(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${U4b*g}px`,
                                borderBlockStartWidth: `${V4b*g}px`,
                                borderBlockEndWidth: `${W4b*g}px`
                            },
                            children: R4(b4b, {
                                label: b,
                                Ua: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                PIa: k
                            })
                        })
                    }),
                    a5b = X4(a => {
                        const b = a.label,
                            c = a.na,
                            d = a.Wo,
                            e = a.hE,
                            f = a.ld,
                            g = a.Ad,
                            h = d(f),
                            k = E4b(() => e(c));
                        return R4("div", {
                            className: U4("_83Rssw", "JhBzyw",
                                V4(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${X4b*g}px`,
                                borderInlineStartWidth: `${Y4b*g}px`,
                                borderInlineEndWidth: `${Z4b*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: R4(b4b, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                PIa: k
                            })
                        })
                    });
                var b5b = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var c5b = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var c4b = __c.xR({
                    oo: b5b,
                    medium: c5b
                });
                var d5b, e5b, f5b, a5;
                new(d5b = class extends q5 {
                    constructor() {
                        super(a5);
                        e5b()
                    }
                }, (() => {
                    class a extends(f5b = i5) {
                        static A(b) {
                            P(b, {
                                ne: d5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return R4(this.props.Pp, {
                                sheet: b.ha.config,
                                container: b,
                                D8: "visible",
                                Vo: this.props.Vo,
                                Kt: this.props.Kt,
                                Ot: this.props.Ot,
                                Y: this.props.Y,
                                ne: this.ne,
                                Dh: this.props.Dh,
                                wG: void 0
                            })
                        }
                        get ne() {
                            return __c.FA(this.props.element.ha.Na, this.props.Ge)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [a5, e5b]
                    } = r5(a, [], [Tc], f5b))
                })(), d5b);
                var g5b = class {
                    constructor() {
                        this.Oga = new WeakMap;
                        this.Lfb = a => this.Oga.get(a);
                        this.tZa = (a, b) => {
                            this.Oga.set(a, b)
                        };
                        this.m9a = (a, b) => {
                            const c = this.Oga.get(a);
                            c && c.fa === b.fa && c.xb === b.xb && this.Oga.delete(a)
                        }
                    }
                };
                var s5 = parseInt("4px", 10) || 4,
                    h5b = X4(({
                        sheet: a,
                        Y: b,
                        range: c,
                        Fv: d,
                        Gv: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.pa(c.Xc) + c.Xc.height, a = a.ra(c.Ic) + c.Ic.width, R4("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: s5 * b
                                },
                                className: U4("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ra(c.Ic) + c.Ic.width, R4("div", {
                                style: {
                                    width: s5 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: U4("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.pa(c.Xc) + c.Xc.height, R4("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: s5 * b
                                },
                                className: U4("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var t5 = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = Q4();
                        h4b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        return R4("div", {
                            ref: e,
                            className: U4("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    i5b = ({
                        sheet: a,
                        range: b,
                        Y: c,
                        children: d
                    }) => {
                        const e = Q4();
                        h4b({
                            sheet: a,
                            Y: c,
                            range: b,
                            Fd: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return R4("div", {
                            className: U4("nstn2A", a, "_9sodyg"),
                            children: R4("div", {
                                ref: e,
                                className: U4("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var j4b = X4(({
                        sheet: a,
                        children: b,
                        cC: c
                    }) => {
                        const d = Y4(f => {
                                c.Eya(a, f)
                            }, [c, a]),
                            e = Y4(f => {
                                f != null ? c.dC.set(a, f) : c.dC.delete(a)
                            }, [c, a]);
                        return R4(__c.tAb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            yu: e,
                            children: b
                        })
                    }),
                    i4b = class {
                        Eya(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.z4.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.dC = new WeakMap;
                            this.z4 = n5.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = l5((b, c) => {
                                b = this.dC.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var m4b = X4(a => {
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
                        n = a.YK,
                        p = a.Dh,
                        q = a.Ge,
                        r = a.cC;
                    a = W4(() => __c.FA(b.Na, q), [b, q]);
                    const t = W4(() => X4(({
                            sheet: y,
                            range: A,
                            Fv: z,
                            Gv: B
                        }) => R4(t5, {
                            sheet: y,
                            range: A,
                            Y: f,
                            children: R4(h5b, {
                                sheet: y,
                                Y: f,
                                range: A,
                                Fv: z,
                                Gv: B
                            })
                        })), [f]),
                        w = V3b(b.config),
                        u = f.get(),
                        x = Math.min(w.width * u, h.width);
                    b5(() => c5(() => {
                        var y = b.config.view.freeze.$G ? b.config.layout.Nd.get(b.config.view.freeze.$G) : void 0;
                        if (y != null)
                            if (b.config.ra(y) + y.width > x) {
                                if (y = r.dC.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.dC.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return R4("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: R4(n, {
                            sheet: b,
                            children: R4("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: w.width * u,
                                    height: w.height * u
                                },
                                children: R4("div", {
                                    className: "W1ir5A",
                                    children: R4(m, {
                                        container: d.Ej(b),
                                        sheet: b.config,
                                        D8: "visible",
                                        Vo: c,
                                        Y: f,
                                        Kt: k,
                                        Ot: l,
                                        ne: a,
                                        Dh: p,
                                        wG: t
                                    })
                                })
                            })
                        })
                    })
                });
                var j5b = X4(({
                    page: a,
                    range: b,
                    WB: c
                }) => {
                    const d = o4b(a.sheet, b);
                    return R4("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.ju(lu(e)).$o(d) && c(e, f))
                    })
                });
                var k5b = new __c.jS,
                    u5 = a => __c.HV * a,
                    l5b = () => "primary-default",
                    p4b = X4(({
                        container: a,
                        Vo: b,
                        Kt: c,
                        Ot: d,
                        g0: e,
                        Y: f,
                        viewport: g,
                        atb: h,
                        Pp: k,
                        Dh: l,
                        WB: m,
                        Zfa: n,
                        szb: p,
                        dyb: q,
                        cyb: r
                    }) => {
                        const t = a.page,
                            w = W4(() => X4(({
                                sheet: u,
                                range: x,
                                Fv: y,
                                Gv: A
                            }) => T4(x4b, {
                                children: [R4(t5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: R4(h5b, {
                                        sheet: u,
                                        Y: f,
                                        range: x,
                                        Fv: y,
                                        Gv: A
                                    })
                                }), T4(i5b, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: [p && R4(p, {}), m && R4(j5b, {
                                        page: t,
                                        WB: m,
                                        range: x
                                    }), r && R4(r, {}), n && n()]
                                }), q && x && R4(t5, {
                                    sheet: t.sheet,
                                    range: x,
                                    Y: f,
                                    children: R4(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? R4(m5b, {
                            container: a,
                            viewport: g,
                            Y: f,
                            Vo: b,
                            Kt: c,
                            Ot: d,
                            Pp: k,
                            Dh: l,
                            wG: w
                        }) : R4(k, {
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
                            wG: w
                        })
                    }),
                    m5b = X4(a => {
                        const b = a.container,
                            c = a.Y,
                            d = a.viewport,
                            e = a.Vo,
                            f = a.Kt,
                            g = a.Ot,
                            h = a.Pp,
                            k = a.Dh;
                        a = a.wG;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = j5(null),
                            p = j5(null),
                            q = j5(null);
                        b5(() => {
                            const y = v5({
                                sheet: l.sheet,
                                qha: !0,
                                rha: !0,
                                Y: c,
                                viewport: d
                            });
                            return e5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
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
                        b5(() => {
                            const y = v5({
                                sheet: l.sheet,
                                qha: !1,
                                rha: !0,
                                Y: c,
                                viewport: d
                            });
                            return e5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
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
                        b5(() => {
                            const y = v5({
                                sheet: l.sheet,
                                qha: !0,
                                rha: !1,
                                Y: c,
                                viewport: d
                            });
                            return e5(() => y === null || y === void 0 ? void 0 : y.get(), A => {
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
                        const r = Y4((y, A, z) => v5({
                                sheet: y,
                                qha: A,
                                rha: z,
                                Y: c,
                                viewport: d
                            }), [c, d]),
                            t = W4(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            w = W4(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return T4("div", {
                            className: U4("OsKKIQ", "cbOp6Q"),
                            children: [R4("div", {
                                className: "VDFv_A",
                                children: R4(h, {
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
                                    wG: a
                                })
                            }), R4("div", {
                                ref: n,
                                className: "_688KWg",
                                children: R4(d4b, {
                                    vd: m,
                                    dOa: !1,
                                    Wo: u5,
                                    scale: x
                                })
                            }), R4("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: R4(Z4, {
                                    sheet: l.sheet,
                                    ld: x,
                                    Ad: x,
                                    Wo: u5,
                                    hE: l5b,
                                    VE: k5b,
                                    Qqa: t
                                })
                            }), R4("div", {
                                ref: p,
                                className: "zm537g",
                                children: R4($4, {
                                    sheet: l.sheet,
                                    ld: x,
                                    Ad: x,
                                    Wo: u5,
                                    hE: l5b,
                                    VE: k5b,
                                    Qqa: w
                                })
                            })]
                        })
                    }),
                    v5 = ({
                        sheet: a,
                        qha: b,
                        rha: c,
                        Y: d,
                        viewport: e
                    }) => d5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.tu(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new Ot(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var v4b = class {
                    constructor(a) {
                        this.jC = a;
                        this.Y8a = __c.ZT;
                        this.pfb = p5((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.jfb(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !tH(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !tH(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !tH(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !tH(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.Y8a);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ra(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ra(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ra(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || tH(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || tH(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ra(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = tH(b, c, l)) m = h, n = k, p = b.ra(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.jfb = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.Aa.ref) && g.span.Tb === g.span.Xc && g.span.Ob === g.span.Ic) {
                                var h = this.jC.Hv(b, c, d);
                                b = this.jC.Jqa(b, c, d, __c.Eh({
                                    Pg: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    Pg: k,
                                    textAlign: l
                                } = __c.Vg(__c.Dh, b);
                                if (k === "overflow") return __c.PLa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.Aa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.pk.type : void 0)
                            }
                        }
                    }
                };
                var n5b = X4(function(a) {
                    const b = a.sheet;
                    var c = a.dh;
                    const d = a.Ewb,
                        e = a.Y,
                        f = a.rsa,
                        g = a.Yeb;
                    a = a.overflow;
                    const h = Q4();
                    A4b(() => c5(() => {
                        const p = D(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = Y4(p => f.pfb(b, p, d, g), [f, b, d, g]);
                    var l = Y4((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = S3b(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return R4("svg", {
                        ref: h,
                        role: "presentation",
                        className: U4("c6a1eQ", {
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
                            kk: w
                        }) => R4("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: w,
                            strokeWidth: r,
                            d: p.map(({
                                p1: u,
                                p2: x
                            }) => `M ${u.x} ${u.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${w}`))
                    })
                });
                var o5b;
                o5b = Symbol.iterator;
                var p5b = class {
                    get size() {
                        return this.$ga
                    }
                    get([a, b]) {
                        return (a = this.HE.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.HE.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.HE.get(a);
                        d == null && (d = new Map, this.HE.set(a, d));
                        d.set(b, c);
                        this.$ga++;
                        return this
                    }
                    clear() {
                        this.HE.clear();
                        this.$ga = 0
                    }
                    delete([a, b]) {
                        const c = this.HE.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.$ga--;
                        c.size === 0 && this.HE.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.HE)
                            for (const [d, e] of c) a([b, d], e)
                    }*[o5b]() {
                        for (const [a, b] of this.HE)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.$ga = 0;
                        this.HE = new Map
                    }
                };
                var q5b, r5b, s5b, t5b, u5b, v5b, w5b, t4b = __c.tw("285688d5", !1),
                    x5b, y5b = class extends i5 {
                        render() {
                            const {
                                Naa: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return T4("div", {
                                ref: this.NZa,
                                className: U4("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.uHa) && R4(w5, { ...b,
                                    sheet: c,
                                    range: a.uHa.range,
                                    Fv: !0,
                                    Gv: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.X2a) && R4(w5, { ...b,
                                    sheet: c,
                                    range: a.X2a.range,
                                    Fv: !1,
                                    Gv: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.gOa) && R4(w5, { ...b,
                                    sheet: c,
                                    range: a.gOa.range,
                                    Fv: !0,
                                    Gv: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.K1a) && R4(w5, { ...b,
                                    sheet: c,
                                    range: a.K1a.range,
                                    Fv: !1,
                                    Gv: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = c5(() => {
                                var b = this.props,
                                    c = b.Y;
                                b = b.sheet;
                                const d = this.NZa.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.Dc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.NZa = Zw()
                        }
                    };
                ({
                    c: [x5b, s5b]
                } = r5(y5b, [], [Tc], i5));
                s5b();
                var w5;
                new(q5b = class extends q5 {
                    constructor() {
                        super(w5);
                        t5b()
                    }
                }, (() => {
                    class a extends(u5b = i5) {
                        static A(b) {
                            P(b, {
                                Sya: d5,
                                bounds: d5
                            })
                        }
                        get Sya() {
                            const b = this.props.viewport,
                                c = this.props.Fv,
                                d = this.props.Gv;
                            return b == null || !c && !d ? b : d5(() => {
                                const e = __c.tu(b.get());
                                return lu({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.mN,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.wG,
                                g = this.props.Fv,
                                h = this.props.Gv;
                            return T4("div", {
                                ref: this.gwa,
                                className: U4("i0YQww",
                                    this.props.className),
                                children: [R4("div", {
                                    ref: this.qVa,
                                    className: "vUKoKg",
                                    children: R4("div", {
                                        ref: this.rVa,
                                        children: R4(x5, {
                                            mN: b,
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
                                            dS: this.dS
                                        })
                                    })
                                }), R4(this.bka, {}), f && R4(f, {
                                    sheet: c,
                                    range: e,
                                    Fv: g,
                                    Gv: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = c5(() => {
                                    var h = this.props,
                                        k = h.Y,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.gwa.current;
                                    const p = this.qVa.current;
                                    h = this.rVa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ra(m.Ic) + m.Ic.width - l.ra(m.Ob) : l.width,
                                        r = m ? l.pa(m.Xc) + m.Xc.height - l.pa(m.Tb) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ra(m.Ob) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.pa(m.Tb) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.g0;
                            const e = this.props.Fv,
                                f = this.props.Gv,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = c5(() => {
                                const h = this.gwa.current;
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
                                        var w;
                                        h.style.right = p ? (w = x.right) !== null && w !== void 0 ? w : n : "unset";
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
                            this.gwa = (w5.A(this), Zw());
                            this.qVa = Zw();
                            this.rVa = Zw();
                            this.dS = new z5b;
                            this.Fwb = d5(() => [...this.dh.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Ie(c, d)), {
                                equals: __c.vr()
                            });
                            this.Dwb = d5(() => [...this.R6.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Ie(c, d)), {
                                equals: __c.vr()
                            });
                            this.bka = X4(() => R4(this.props.P5a, {
                                dh: this.Fwb,
                                Ewb: this.Dwb,
                                Yeb: this.dS.gfb,
                                range: this.props.range
                            }));
                            this.dh = d5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Sya) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.y - g : c.Tb ? d.pa(c.Tb) : 0;
                                f = f ? f.br.y + g : c.Xc ? d.pa(c.Xc) + c.Xc.height : 0;
                                g = new Map;
                                for (let k = c.Tb; k != null && c.Xc != null && d.layout.rows.Ie(k, c.Xc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.pa(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: m5.shallow
                            });
                            this.R6 = d5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.Y,
                                    f = (c = this.Sya) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.la.x - g : c.Ob ? d.ra(c.Ob) : 0;
                                f = f ? f.br.x + g : c.Ic ? d.ra(c.Ic) + c.Ic.width : 0;
                                g = new Map;
                                for (let k = c.Ob; k != null && c.Ic != null && d.layout.cols.Ie(k, c.Ic) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ra(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: m5.shallow
                            })
                        }
                    }({
                        c: [w5, t5b]
                    } = r5(a, [], [Tc], u5b))
                })(), q5b);
                var z5b = class {
                        constructor() {
                            this.cells = new p5b;
                            this.oxa = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = n5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.gfb = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = n5.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.oJa
                            }
                        }
                    },
                    x5;
                new(r5b = class extends q5 {
                    constructor() {
                        super(x5);
                        v5b()
                    }
                }, (() => {
                    class a extends(w5b = i5) {
                        static A(b) {
                            P(b, {
                                HK: n5.shallow,
                                sq: d5,
                                YGa: l5,
                                V9: l5.bound
                            })
                        }
                        get sq() {
                            var b;
                            const c = (b = this.props.Vo) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.WD(c)
                        }
                        render() {
                            var b;
                            return T4("div", {
                                ref: F4b(this.Fd, (b = this.sq) === null || b === void 0 ? void 0 : b.fm),
                                children: [R4("div", {
                                    ref: this.Sma,
                                    className: "_5YlOqQ"
                                }), R4("div", {
                                    ref: this.Uma,
                                    className: "_XCmKw"
                                }), this.HK.map(c => c.upb)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                e5(() => [this.props.sheet, this.props.R6.get(), this.props.dh.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.n9a();
                                    this.YGa(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = c5(() => {
                                    var e = this.props,
                                        f = e.Y;
                                    e = e.sheet;
                                    const g = this.Fd.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.HK.map(e => u4b(e));
                            __c.Dc(this, [c, b, ...d])
                        }
                        n9a() {
                            const b = D(this.Sma.current),
                                c = D(this.Uma.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.pDa.length = 0;
                            this.HK.length = 0
                        }
                        YGa(b, c) {
                            const d = D(this.Sma.current),
                                e = D(this.Uma.current),
                                f = [],
                                g = new Map;
                            for (const h of this.pDa) c.has(h.na) ? g.set(h.na, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new A5b(this.V9, h), d.appendChild(c.a9), e.appendChild(c.c9), this.pDa.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        V9(b, c) {
                            const d = this.props.oZ,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.dS;
                            b = new B5b(this.props.mN, this.props.IC, this.props.Dh, d(b, c), e, b, c, f, g.oxa, this.dba, this.cba);
                            __c.Dc(this, u4b(b));
                            this.HK.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Fd = (x5.A(this), Zw());
                            this.Sma = Zw();
                            this.Uma = Zw();
                            this.pDa = [];
                            this.HK = [];
                            this.dba = p5(c => {
                                const d = this.props.dh.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.cba = p5(c => {
                                const d = this.props.R6.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [x5, v5b]
                    } = r5(a, [], [Tc], w5b))
                })(), r5b);
                var A5b = class {
                        static A(a) {
                            P(a, {
                                update: l5
                            })
                        }
                        update(a, b, c) {
                            [this.a9, this.c9].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.na = b;
                            for (const [d] of c) c = this.HK.get(d), c || (c = this.V9(d, b), this.HK.set(d, c), this.a9.appendChild(c.Z8), this.c9.appendChild(c.vL)), c.update(b)
                        }
                        hide() {
                            [this.a9, this.c9].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.V9 = a;
                            this.na = b;
                            this.a9 = (A5b.A(this), document.createElement("div"));
                            this.c9 = document.createElement("div");
                            this.HK = new Map
                        }
                    },
                    B5b = class {
                        static A(a) {
                            P(a, {
                                M9: n5.ref,
                                na: n5.ref,
                                ura: d5,
                                update: l5,
                                bt: d5,
                                attrs: d5.struct,
                                Wsa: d5,
                                rv: d5,
                                renderer: d5,
                                oJa: d5.struct
                            })
                        }
                        get ura() {
                            if (!t4b) return !1;
                            const a = this.bt;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.mN(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.na && (this.na = a, this.sz.na = a, this.Poa && this.Poa(), this.Poa = this.oxa(this.na, this.col, this))
                        }
                        get upb() {
                            return this.M9
                        }
                        get bt() {
                            const a = this.sheet.layout.cells.get(this.na, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.sz.attrs;
                            return {
                                Pg: a === null || a === void 0 ? void 0 : a.Pg,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get Wsa() {
                            var a = this.sz.span;
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
                        get rv() {
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
                                    return this.container.Job.Hd(c, b);
                                case "sheet-item":
                                    return this.container.Rya.Hd(c, b);
                                case "sheet-element":
                                    return this.container.Qsb.Hd(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.bt;
                            if (a && this.Wsa &&
                                (a.content.ref || a.Aa.ref)) return this.IC({
                                context: {
                                    container: this.rv,
                                    attrs: this.attrs
                                },
                                mp: this.Xua,
                                Dh: this.Dh
                            })
                        }
                        get oJa() {
                            this.pJa.reportObserved();
                            var a = C4b(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.Q3 : this.wD, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, w;
                            this.mN = a;
                            this.IC = b;
                            this.sz = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.oxa = k;
                            this.dba = l;
                            this.cba = m;
                            this.Z8 =
                                (B5b.A(this), document.createElement("div"));
                            this.vL = document.createElement("div");
                            this.rD = document.createElement("div");
                            this.wD = document.createElement("div");
                            this.Q3 = document.createElement("div");
                            this.pJa = B4b("content size atom");
                            this.Xua = l5(() => this.pJa.reportChanged());
                            this.na = g;
                            this.Z8.className = "_2JFriw";
                            this.vL.className = "imy9ug";
                            this.rD.className = U4("pDMp7w", {
                                _0yZ6Qg: ((p = this.bt) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.bt) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((w = this.bt) === null || w === void 0 ? void 0 : (t = w.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.ura
                            });
                            this.wD.className = "_30B9pw";
                            this.rD.appendChild(this.wD);
                            this.vL.appendChild(this.rD);
                            this.Q3.className = "G7zH2w";
                            this.Poa = k(this.na, this.col, this);
                            this.Dh = u => R4(c, { ...u,
                                mp: this.Xua
                            })
                        }
                    };
                var C5b, D5b, E5b, f5;
                new(C5b = class extends q5 {
                    constructor() {
                        super(f5);
                        D5b()
                    }
                }, (() => {
                    class a extends(E5b = i5) {
                        static A(b) {
                            P(b, {
                                Naa: d5
                            })
                        }
                        render() {
                            const {
                                mN: b,
                                sheet: c,
                                container: d,
                                Vo: e,
                                g0: f,
                                IC: g,
                                ne: h,
                                Dh: k,
                                viewport: l,
                                wG: m,
                                N2a: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return R4("div", {
                                className: U4("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: R4(x5b, {
                                    mN: b,
                                    IC: g,
                                    Dh: k,
                                    P5a: this.bka,
                                    oZ: this.oZ,
                                    sheet: c,
                                    container: d,
                                    Vo: e,
                                    g0: f,
                                    Y: this.Y,
                                    viewport: l,
                                    wG: m,
                                    Naa: this.Naa
                                })
                            })
                        }
                        get Naa() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.AV ? b.layout.$d.get(b.view.freeze.AV) : void 0,
                                e = b.view.freeze.$G ? b.layout.Nd.get(b.view.freeze.$G) : void 0,
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
                                d && l && (c.X2a = {
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
                                b && l && (c.K1a = {
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
                                this.props.Y : d5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.bka = (f5.A(this), X4(c => {
                                const {
                                    sheet: d,
                                    rsa: e,
                                    Y: f,
                                    D8: g = "hidden"
                                } = this.props;
                                return R4(t5, {
                                    sheet: d,
                                    range: c.range,
                                    Y: f,
                                    children: R4(n5b, { ...c,
                                        sheet: d,
                                        Y: this.Y,
                                        rsa: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.oZ = (c, d) => new __c.hMa(this.props.jC, this.props.kz, this.props.sheet, c, d, this.Y, this.Kt, this.Ot);
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
                        c: [f5, D5b]
                    } = r5(a, [], [Tc], E5b))
                })(), C5b);
                __c.oMa = {
                    Phb: function(a) {
                        const b = a.Gn,
                            c = a.Gd,
                            d = a.hd,
                            e = a.$l,
                            f = a.jC,
                            g = a.kz,
                            h = a.pX;
                        a4b({
                            jz: a.jz,
                            hf: a.hf,
                            vub: a.TO,
                            Qa: a.Qa
                        });
                        const k = w4b({
                            IC: h,
                            jC: f,
                            kz: g,
                            Xx: void 0
                        });
                        b.yka = q4b({
                            Pp: k
                        });
                        c.cka = g4b({
                            Pp: k
                        });
                        ({
                            dka: a
                        } = n4b({
                            Pp: k,
                            le: e(),
                            LZa: new g5b
                        }));
                        d.Wp.xka = a;
                        const {
                            U3a: l,
                            V3a: m,
                            T3a: n
                        } = f4b();
                        return {
                            hFa: X4(p => R4(H4b, { ...p,
                                container: void 0,
                                Pp: k,
                                S5a: l,
                                T5a: m,
                                Q5a: n,
                                Dh: I4b
                            }))
                        }
                    }
                };
            }).call(self, self._7ccc7343da2ae983607b3819c7bc1f93);
        }

    }
])
//# sourceMappingURL=sourcemaps/75e2ec2245416d09.js.map