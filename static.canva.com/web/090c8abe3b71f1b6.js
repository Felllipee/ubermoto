(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76301], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var tM = __c.tM;
                var Jc = __c.Jc;
                var P = __c.P;
                var vm = __c.vm;
                var xD = __c.xD;
                var O = __c.O;
                var Xl = __c.Xl;
                var C = __c.C;
                var E = __c.E;
                var H5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.JI(b.reference.ig);
                                a = a.hL(b.reference.sg);
                                return c != null && a != null;
                            case 1:
                                return a.JI(b.reference.ig) != null;
                            case 2:
                                return a.hL(b.reference.sg) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    $Fb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.S.length > 0) return !1;
                                a = a.Hy(c.CN.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.JI(new __c.MI, a.CA).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return H5(b, d);
                                        case 1:
                                            return H5(b,
                                                d.start) && H5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    aGb = function(a, b, c, d) {
                        const e = [];
                        for (const k of c)
                            for (const l of d) {
                                c = k.ea;
                                var f = l.column,
                                    g = a.layout.cells.get(c, f);
                                if (!g || (k.boundary === "start" ? g.span.ub === c : g.span.kc === c))
                                    if (c = b.get(`${f.id}:${c.id}`), c = k.boundary === "start" ? c === null || c === void 0 ? void 0 : c.la : c === null || c === void 0 ? void 0 : c.Ba) {
                                        g = e[e.length - 1];
                                        f = (f = a.layout.cols.next(f)) ? {
                                            column: f,
                                            boundary: "start"
                                        } : {
                                            column: C(a.layout.cols.last()),
                                            boundary: "end"
                                        };
                                        var h;
                                        if (h = g) h = g.v8, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.tya, h = h.ea === k.ea && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Gb === c.Gb && g.Gb === 0 ? g.v8 = f : e.push({
                                            tya: k,
                                            IWa: l,
                                            v8: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Gb: c.Gb
                                        })
                                    }
                            }
                        return e
                    },
                    bGb = function(a, b, c, d, e) {
                        const f = [];
                        for (const l of d)
                            for (const m of c) {
                                var g = m.ea,
                                    h = l.column;
                                d = a.layout.cells.get(g, h);
                                if (!d || (l.boundary === "start" ? d.span.qb === h : d.span.Qb === h))
                                    if (d = b.get(`${h.id}:${g.id}`), (d = l.boundary === "start" ? d === null ||
                                            d === void 0 ? void 0 : d.ia : d === null || d === void 0 ? void 0 : d.Da) && (l.boundary !== "start" || e(g, h) !== 1)) {
                                        h = f[f.length - 1];
                                        g = (g = a.layout.rows.next(g)) ? {
                                            ea: g,
                                            boundary: "start"
                                        } : {
                                            ea: C(a.layout.rows.last()),
                                            boundary: "end"
                                        };
                                        var k;
                                        if (k = h) k = h.rma, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.z8, k = k.ea === m.ea && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Gb === d.Gb && h.Gb === 0 ? h.z8 = g : f.push({
                                            rma: l,
                                            SWa: m,
                                            z8: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Gb: d.Gb
                                        })
                                    }
                            }
                        return f
                    },
                    cGb = function(a, b, c, d, e) {
                        const f =
                            a.Qza.tIa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                v = f.get(r) || 0;
                            return t <= v ? q : r
                        };
                        const g = new Map;
                        if (d.length === 0 || e.length === 0) return g;
                        var h = [],
                            k = b.layout.cols.Fc(e[0].column);
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
                        (k = b.layout.rows.Fc(d[0].ea)) && e.push({
                            ea: k,
                            boundary: "start"
                        });
                        e.push(...d);
                        (d = b.layout.rows.next(d[d.length - 1].ea)) && e.push({
                            ea: d,
                            boundary: "start"
                        });
                        for (const q of h) {
                            h = (d = q.boundary === "start" ? q.column : void 0) ? b.layout.cols.Fc(d) : b.layout.cols.last();
                            for (const r of e) {
                                var l = r.boundary === "start" ? r.ea : void 0;
                                k = l ? b.layout.rows.Fc(l) : b.layout.rows.last();
                                var m = d && l && c.get(`${d.id}:${l.id}`),
                                    n = d && k && c.get(`${d.id}:${k.id}`);
                                l = h && l && c.get(`${h.id}:${l.id}`);
                                var p = h && k && c.get(`${h.id}:${k.id}`);
                                k = q.boundary === "end" ? l === null || l === void 0 ? void 0 : l.Da : m === null || m === void 0 ? void 0 : m.ia;
                                m = r.boundary === "end" ? n === null || n === void 0 ? void 0 : n.Ba : m === null || m === void 0 ?
                                    void 0 : m.la;
                                n = q.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Da : n === null || n === void 0 ? void 0 : n.ia;
                                l = r.boundary === "end" ? p === null || p === void 0 ? void 0 : p.Ba : l === null || l === void 0 ? void 0 : l.la;
                                p = __c.Pl({
                                    la: n,
                                    Ba: k,
                                    ia: l,
                                    Da: m
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
                                } = (t === null || t === void 0 ? void 0 : t.Gb) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(I5(q, r), __c.Ml(p, v / 2, u / 2))
                            }
                        }
                        return g
                    },
                    dGb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = aGb(b, c, d, e);
                        f = bGb(b, c, d, e, f);
                        const h = cGb(a, b, c, d, e),
                            k = a.fNa(b),
                            l = a.EMa(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.IWa,
                                t = n.v8,
                                v = n.tya;
                            const u = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = m ? -1 : 1,
                                z = (p = h.get(I5(r, v))) === null || p === void 0 ?
                                void 0 : p.Da;
                            p = (q = h.get(I5(t, v))) === null || q === void 0 ? void 0 : q.ia;
                            if (z != null && p != null) {
                                q = C(k.get(v.ea));
                                var B = C(l.get(r.column));
                                r = C(l.get(t.column));
                                v = v.boundary === "start" ? q.start : q.end;
                                q = B.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Gb: n,
                                    p1: new Xl(q + z * y, v),
                                    p2: new Xl(t + p * y, v),
                                    ...__c.Sl((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.wb);
                        return [...f.map(n => {
                            var p, q, r = n.rma,
                                t = n.SWa,
                                v = n.z8;
                            const u = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = (p = h.get(I5(r, t))) === null || p === void 0 ? void 0 : p.Ba;
                            p = (q = h.get(I5(r,
                                v))) === null || q === void 0 ? void 0 : q.la;
                            if (y != null && p != null) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.ea));
                                t = C(k.get(v.ea));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                v = v.boundary === "start" ? t.start : t.end;
                                return {
                                    color: u,
                                    weight: x,
                                    Gb: n,
                                    p1: new Xl(r, q + y),
                                    p2: new Xl(r, v + p),
                                    ...__c.Sl(v - q, n * x, y)
                                }
                            }
                        }).filter(__c.wb), ...a]
                    },
                    eGb = function(a) {
                        const b = [];
                        a = a.filter(c => c.weight !== 0 && c.color != null);
                        a = __c.Rd(a, c => c.weight);
                        a = Array.from(a.entries()).sort(([c], [d]) => c - d);
                        for (const [c, d] of a) {
                            a = __c.Rd(d, e => `${e.Th}_${e.Uh}`);
                            for (const [, e] of a) {
                                const {
                                    Uh: f,
                                    Th: g
                                } = e[0];
                                a = __c.Rd(e, h => h.color);
                                for (const [h, k] of a) b.push({
                                    weight: c,
                                    color: h,
                                    lines: k,
                                    Th: g,
                                    Uh: f
                                })
                            }
                        }
                        return b
                    },
                    fGb = function(a, b, c, d) {
                        var e = __c.Gab;
                        const f = b.get().flatMap(k => a.layout.rows.last() === k ? [{
                                ea: k,
                                boundary: "start"
                            }, {
                                ea: k,
                                boundary: "end"
                            }] : [{
                                ea: k,
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
                                e.Qza.MUa(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = dGb(e, a, h, f, g, d);
                        return eGb(c)
                    },
                    gGb = function(a) {
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
                    J5 = function() {
                        const [a] = (0, __c.rb)(() => xD());
                        return a
                    },
                    hGb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    iGb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.Jab)(a) / 2 : -(0, __c.Hab)(a) / 2,
                            c = -(0, __c.Iab)(a) / 2,
                            d = a.width + (0, __c.Hab)(a) / 2 + (0, __c.Jab)(a) / 2;
                        a = a.height + (0, __c.Iab)(a) / 2 + (0, __c.Kab)(a) / 2;
                        return vm({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    jGb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    mGb = function(a) {
                        var b;
                        const c = a.ez;
                        var d = a.content;
                        const e = a.context;
                        a = a.Fl;
                        __c.A((d === null || d === void 0 ? void 0 : (b = d.Ne) === null || b ===
                            void 0 ? void 0 : b.type) === "formula");
                        b = d.Zh;
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
                                d = (g = c.J4) === null || g === void 0 ? void 0 : g.call(c, {
                                    content: __c.Je(__c.qNa, { ...__c.aSa,
                                        value: b.value
                                    }),
                                    context: e,
                                    Fl: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = kGb(c, e, d.ou, d.Zh.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: K5(__c.JS, {
                                        label: gGb(b.error),
                                        children: K5(__c.pl, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: K5(lGb, {
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
                    kGb = function(a, b, c, d) {
                        var e;
                        return (e = a.M4) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    pGb = function(a) {
                        const b = a.ez,
                            c = a.lf,
                            d = a.pXa,
                            e = a.Ja;
                        b.M4 = f => __c.fya({ ...f,
                            Ja: e
                        });
                        b.Aja = f => mGb({ ...f,
                            ez: b
                        });
                        b.J4 = jGb(nGb({
                            lf: c,
                            WH: void 0
                        }));
                        b.Cja = oGb(d, e);
                        b.Dja = jGb(f => K5(L5, { ...f,
                            Ja: e
                        }))
                    },
                    qGb = function({
                        label: a,
                        du: b,
                        width: c,
                        height: d,
                        scale: e,
                        yma: f
                    }) {
                        return K5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: M5(__c.ml, {
                                className: N5("ivlMMQ", O5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && K5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    O5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    sGb = function({
                        Ei: a,
                        Wqa: b,
                        scale: c,
                        ql: d,
                        sl: e,
                        rDa: f
                    }) {
                        const g = P5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.bJ(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return K5(__c.nl, {
                            ym: "light",
                            light: "light",
                            Mo: "light",
                            dark: "light",
                            children: m => K5("div", {
                                className: N5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: K5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: N5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.mo,
                                    children: K5(__c.NS, {
                                        className: N5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: K5(rGb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    uGb = function() {
                        const a = new tGb,
                            b = new __c.TT,
                            c = Q5(f => {
                                const {
                                    scale: g = 1,
                                    Tqa: h,
                                    size: k =
                                        "small",
                                    rDa: l = !0
                                } = f, m = R5(n => a.sl({
                                    scale: n,
                                    size: k,
                                    Taa: h
                                }), [k, h]);
                                return K5(sGb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    Ei: f.sheet.direction === "rtl",
                                    Wqa: f.selection != null && a.KPa(f.sheet, f.selection),
                                    sl: m,
                                    rDa: l
                                })
                            }),
                            d = Q5(f => {
                                const {
                                    scale: g = 1,
                                    Tqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    mVa: n
                                } = f, p = R5(u => a.sl({
                                    scale: u,
                                    size: k,
                                    Taa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = R5(u => m != null && a.Ada(m).has(u), [m]), t = R5(u => m != null && a.QNa(l, m).has(u), [l, m]), v = R5(u => {
                                    const x = n != null && l.layout.cols.Dd(u, n.qb) >= 0 && l.layout.cols.Dd(u, n.Qb) <=
                                        0;
                                    return r(u) ? x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return K5(S5, { ...f,
                                    xd: g,
                                    Td: q,
                                    sl: p,
                                    Bx: v,
                                    uy: b
                                })
                            }),
                            e = Q5(f => {
                                const {
                                    scale: g = 1,
                                    Tqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    mVa: n
                                } = f, p = R5(u => a.sl({
                                    scale: u,
                                    size: k,
                                    Taa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = R5(u => m != null && a.Cda(m).has(u), [m]), t = R5(u => m != null && a.RNa(l, m).has(u), [l, m]), v = R5(u => {
                                    const x = n != null && l.layout.rows.Dd(u, n.ub) >= 0 && l.layout.rows.Dd(u, n.kc) <= 0;
                                    return r(u) ?
                                        x ? "secondary-active" : "primary-active" : t(u) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return K5(T5, { ...f,
                                    xd: q,
                                    Td: g,
                                    sl: p,
                                    Bx: v,
                                    uy: b
                                })
                            });
                        return {
                            NDa: c,
                            MDa: d,
                            ODa: e
                        }
                    },
                    vGb = function(a) {
                        const b = a.gm,
                            c = () => null;
                        return __c.JD(d => K5(U5, { ...d,
                            gm: b,
                            Lf: c
                        }))
                    },
                    wGb = function({
                        sheet: a,
                        O: b,
                        range: c,
                        Sh: d
                    }) {
                        V5(() => W5(() => {
                            if (d.current != null) {
                                var e, f = (e = b === null || b === void 0 ? void 0 : b.get()) !== null && e !== void 0 ? e : 1;
                                e = a.direction === "rtl";
                                e = c ? a.ia(c.qb) * f * (e ? 1 : -1) : 0;
                                var g = c ? -a.la(c.ub) *
                                    f : 0;
                                d.current.style.transform = `translate(${e}px, ${g}px)`;
                                d.current.style.width = `${a.width*f}px`;
                                d.current.style.height = `${a.height*f}px`
                            }
                        }), [a, c, d, b])
                    },
                    zGb = function({
                        onScroll: a
                    }) {
                        const b = new xGb(a);
                        return {
                            Qv: b,
                            s4: Q5(c => K5(yGb, {
                                sheet: c.sheet,
                                Qv: b,
                                children: c.children
                            }))
                        }
                    },
                    CGb = function(a) {
                        const b = a.gm,
                            c = a.ke,
                            d = a.Rza,
                            e = ({
                                children: k
                            }) => k,
                            {
                                Qv: f,
                                s4: g
                            } = zGb({
                                onScroll: a.onScroll
                            });
                        class h extends AGb {
                            get lD() {
                                const k = this.props.V.Eu;
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
                                d.Eza(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                })
                            }
                            componentWillUnmount() {
                                d.zHa(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                })
                            }
                            render() {
                                d.Eza(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                });
                                return K5(BGb, { ...this.props,
                                    O: this.O,
                                    gm: b,
                                    lD: this.lD,
                                    Lf: this.Lf,
                                    Rza: d,
                                    Qv: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.O = X5(() => {
                                    const l = this.props.item;
                                    var m = this.props.V,
                                        n = m.Eu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.kNa(l);
                                            if (!n) return 1;
                                            ({
                                                width: n
                                            } = new __c.mn(l,
                                                n.bb, {
                                                    zoom: m
                                                }));
                                            return n / l.config.width;
                                        default:
                                            throw new E(n);
                                    }
                                });
                                this.Lf = Q5(l => K5("div", {
                                    className: "wKvivQ",
                                    children: K5(__c.nya, { ...this.props,
                                        ...l,
                                        ke: c
                                    })
                                }))
                            }
                        }
                        return {
                            y4: h,
                            Qv: f
                        }
                    },
                    DGb = function(a, b) {
                        if (b != null && b.qb != null && b.ub != null && b.Qb != null && b.kc != null) {
                            var c = a.ia(b.qb),
                                d = a.la(b.ub),
                                e = a.ia(b.Qb) + b.Qb.width - c;
                            a = a.la(b.kc) + b.kc.height - d;
                            return vm({
                                top: d,
                                left: c,
                                width: e,
                                height: a
                            })
                        }
                    },
                    FGb = function(a) {
                        const b = a.gm,
                            c = () => null;
                        return d => K5(EGb, { ...d,
                            gm: b,
                            Lf: c
                        })
                    },
                    JGb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                Ula: b,
                                yq: b,
                                ya: {},
                                fk: {}
                            },
                            d = Y5(() => a.Et.style || c, h => {
                                var k;
                                Object.assign(a.FV.style, h.Ula);
                                Object.assign(a.HD.style, h.yq);
                                Object.assign(a.Qw.style, h.ya);
                                Object.assign(a.Vw.style, h.fk);
                                h = h === null || h === void 0 ? void 0 : (k = h.ya) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.Qw.classList.toggle("OQx3PQ", h === "underline");
                                a.Qw.classList.toggle("_99ezUA", h === "line-through");
                                a.Qw.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: GGb
                            }),
                            e = Y5(() => a.aaa, h => {
                                a.Qw.classList.toggle("_84KvRA", !h);
                                a.FV.classList.toggle("_84KvRA", !h);
                                a.HD.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = Y5(() => a.renderer, h => {
                                a.jW && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.jW = void 0, a.TR.remove()) : a.Vw.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.jW = HGb(h.node, a.TR);
                                        a.Vw.appendChild(a.TR);
                                        break;
                                    case "dom":
                                        h.render(a.Vw);
                                        break;
                                    case void 0:
                                        break;
                                    default:
                                        throw new E(h);
                                }
                                a.vba()
                            }, {
                                fireImmediately: !0
                            }),
                            g = IGb ? Y5(() => a.W9, h => {
                                a.Qw.classList.toggle("qxD1GA", h)
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
                    GGb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    LGb = function(a) {
                        const b = a.At,
                            c = a.Wv,
                            d = a.ow,
                            e = a.QCa,
                            f = a.yx,
                            g = new KGb(c),
                            h = (k, l) => f ? $Fb(f, k, l) : !1;
                        return k => K5(Z5, { ...k,
                            tF: h,
                            ow: d,
                            Wv: c,
                            At: b,
                            F$: g,
                            QCa: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    I5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ea.id}-${b.boundary}`,
                    nGb = ({
                        lf: a,
                        WH: b
                    }) => c => (0, __c.N)(__c.Mab, { ...c,
                        lf: a,
                        WH: b
                    }),
                    $5 = __webpack_require__(443763),
                    MGb = $5.Fragment,
                    K5 = $5.jsx,
                    M5 = $5.jsxs;
                var NGb = __webpack_require__,
                    OGb = NGb(993864),
                    N5 = NGb.n_x(OGb)();
                var Q5 = __webpack_require__(446474).Pi;
                var a6 = __webpack_require__(875604),
                    b6 = a6.Component,
                    AGb = a6.PureComponent,
                    R5 = a6.useCallback,
                    V5 = a6.useEffect,
                    PGb = a6.useLayoutEffect,
                    P5 = a6.useMemo,
                    c6 = a6.useRef;
                var d6 = __webpack_require__(519427),
                    e6 = d6.action,
                    W5 = d6.autorun,
                    f6 = d6.comparer,
                    X5 = d6.computed,
                    QGb = d6.createAtom,
                    g6 = d6.observable,
                    Y5 = d6.reaction,
                    RGb = d6.untracked;
                var h6 = __webpack_require__(635872),
                    i6 = h6.Om,
                    SGb = h6.kq,
                    TGb = h6.YN;
                var j6 = __webpack_require__(937763)._;
                var k6 = __webpack_require__(161563)._;
                var UGb = __webpack_require__(358579).Z;
                var HGb = __webpack_require__(36281).createPortal;
                var VGb = class {
                        static A(a) {
                            P(a, {
                                viewBox: g6.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (VGb.A(this), vm({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.cWa = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    WGb = Q5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = c6(new VGb),
                            f = e6(() => {
                                if (a.q3) {
                                    var h = a.q3.current;
                                    h && e.current.cWa(vm({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        V5(() => {
                            var h, k;
                            f();
                            (h = a.q3.current) === null || h === void 0 || h.addEventListener("scroll", f);
                            (k = window) === null || k === void 0 || k.addEventListener("resize", f);
                            return () => {
                                var l, m;
                                (l = a.q3.current) === null || l === void 0 || l.removeEventListener("scroll", f);
                                (m = window) === null || m === void 0 || m.removeEventListener("resize", f)
                            }
                        }, [a.q3, f]);
                        const g = P5(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return M5("div", {
                            className: N5("nMvVqA", d),
                            children: [M5("div", {
                                ref: a.Sh,
                                className: "_0YOFPg",
                                children: [K5(a.gm, { ...a,
                                    viewport: g
                                }), K5("div", {
                                    className: N5("Gdl7fQ", d),
                                    children: (c = a.aja) === null || c === void 0 ? void 0 : (b = c.get()) === null ||
                                        b === void 0 ? void 0 : b.map((h, k) => K5(h, {}, k))
                                })]
                            }), a.Z6a === "visible" && M5(MGb, {
                                children: [K5("div", {
                                    className: N5("_32sKQw", d),
                                    children: K5(a.PEa, { ...a
                                    })
                                }), K5("div", {
                                    className: N5("xdIsTQ", d),
                                    children: K5(a.SEa, { ...a
                                    })
                                }), K5("div", {
                                    className: N5("rsTRSA", d),
                                    children: K5(a.REa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    XGb = Q5(a => {
                        a = a.content;
                        __c.w(a.type === "text2" || a.type === "text3");
                        switch (a.type) {
                            case "text2":
                                return a.value.T;
                            case "text3":
                                return __c.Vv.ka(a.value).cells.T();
                            default:
                                throw new E(a);
                        }
                    });
                var YGb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var lGb = __c.yS({
                    medium: YGb
                });
                var oGb = (a, b) => __c.Sxa((c, d) => {
                        const e = c.content;
                        c = c.context;
                        if (e.value.isEmpty)
                            for (; d.lastChild;) d.lastChild.remove();
                        else({
                            rf: c
                        } = __c.$g(__c.Gh, c.attrs)), c === "wrap" && (d = d.appendChild(document.createElement("div")), d.className = "dt4Dlg"), a.render({
                            container: d,
                            text: e.value,
                            Za: void 0,
                            writingMode: 1,
                            Gc: "start",
                            je: ZGb(e, c),
                            Ja: b
                        })
                    }),
                    ZGb = i6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.T.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: f6.structural
                    });
                var $Gb, aHb, bHb, L5;
                new($Gb = class extends j6 {
                    constructor() {
                        super(L5);
                        aHb()
                    }
                }, (() => {
                    class a extends(bHb = b6) {
                        static A(b) {
                            P(b, {
                                rf: X5
                            })
                        }
                        get rf() {
                            return __c.$g(__c.Gh, this.props.context.attrs).rf
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = K5(this.props.Lf, {
                                content: b,
                                ea: c.container.ea,
                                col: c.container.column,
                                rf: this.rf
                            });
                            return this.rf === "wrap" ? K5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [L5, aHb]
                    } = k6(a, [], [Jc], bHb))
                })(), $Gb);
                var cHb = __c.ql * 5,
                    dHb = __c.ql * 4;
                var tGb = class {
                    sl({
                        size: a,
                        scale: b,
                        Taa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? cHb * b : dHb * b
                    }
                    constructor() {
                        this.KPa = i6((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Ada = SGb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.El
                        });
                        this.Cda = SGb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.El
                        });
                        this.QNa = i6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Cda(b).size > 0) return new Set(a.layout.cols);
                            b = this.Ada(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of hGb(c ? c.span.qb : e.column, c ? c.span.Qb : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.El
                        });
                        this.RNa = i6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Ada(b).size > 0) return new Set(a.layout.rows);
                            b = this.Cda(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of hGb(c ? c.span.ub : e.ea, c ? c.span.kc : e.ea, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.El
                        })
                    }
                };
                var eHb, fHb, gHb, hHb, iHb, jHb, kHb = parseInt("4px", 10) || 4,
                    lHb = parseInt("0.5px", 10) || .5,
                    mHb = parseInt("1px", 10) || 1,
                    nHb = parseInt("0.5px", 10) || .5,
                    oHb = parseInt("0.5px", 10) || .5,
                    pHb = parseInt("1px", 10) || 1,
                    qHb = parseInt("0.5px", 10) || .5,
                    S5;
                new(eHb = class extends j6 {
                    constructor() {
                        super(S5);
                        gHb()
                    }
                }, (() => {
                    class a extends(hHb = b6) {
                        static A(b) {
                            P(b, {
                                Ei: X5,
                                As: X5,
                                XS: X5
                            })
                        }
                        get Ei() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.ql) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.bJ(c)
                        }
                        get XS() {
                            var b, c, d;
                            return (c = (d = this.props).A9) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return K5(__c.nl, {
                                ym: "light",
                                light: "light",
                                Mo: "light",
                                dark: "light",
                                children: this.NHa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (S5.A(this), e6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    xd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = e6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Oxa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    sl: g,
                                    Bx: h,
                                    h7a: k,
                                    xd: l = 1,
                                    Td: m = 1
                                } = this.props, n = {
                                    jNbTIg: !this.Ei,
                                    gtA7Dw: this.Ei
                                }, p = (e === null || e === void 0 ? 0 : e.sticky) ? this.Ei ? {
                                    right: 0
                                } : {
                                    left: 0
                                } : void 0;
                                var q;
                                const r = (e === null || e === void 0 ? 0 : e.sticky) ? (q = this.XS) !== null && q !== void 0 ? q : p : void 0;
                                let t = -1;
                                return M5("div", {
                                    style: r,
                                    className: N5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(v => {
                                        var u;
                                        t++;
                                        if (!(c && f.layout.cols.Dd(v, c) < 0 || d && f.layout.cols.Dd(v, d) > 0)) return K5(rHb, {
                                            col: v,
                                            label: __c.SC(t),
                                            du: k === null || k === void 0 ? void 0 : (u = k.get()) === null || u === void 0 ? void 0 : u.get(v),
                                            sl: g,
                                            Bx: h,
                                            xd: l,
                                            Td: m
                                        }, v.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && K5("div", {
                                        style: {
                                            width: kHb * l
                                        },
                                        className: N5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.NHa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.rA ? e.layout.$c.get(e.view.freeze.rA) : void 0,
                                    g = {
                                        jNbTIg: !this.Ei,
                                        gtA7Dw: this.Ei
                                    };
                                return M5("div", {
                                    ref: (d = this.As) === null || d === void 0 ? void 0 : d.mo,
                                    className: N5("xhBZaw", g, c.className),
                                    children: [f && this.Oxa(void 0, f, {
                                        sticky: !0
                                    }), this.Oxa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [S5, gHb]
                    } = k6(a, [], [Jc], hHb))
                })(), eHb);
                var T5;
                new(fHb = class extends j6 {
                    constructor() {
                        super(T5);
                        iHb()
                    }
                }, (() => {
                    class a extends(jHb = b6) {
                        static A(b) {
                            P(b, {
                                Ei: X5,
                                As: X5,
                                XS: X5
                            })
                        }
                        get Ei() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.ql) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.bJ(c)
                        }
                        get XS() {
                            var b, c, d;
                            return (c = (d = this.props).A9) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return K5(__c.nl, {
                                ym: "light",
                                light: "light",
                                Mo: "light",
                                dark: "light",
                                children: this.bVa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (T5.A(this), e6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Td: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = e6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Rxa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    sl: g,
                                    Bx: h,
                                    xd: k = 1,
                                    Td: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.Ei,
                                    gtA7Dw: this.Ei
                                };
                                var n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                        top: 0
                                    } : void 0,
                                    p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.XS) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1,
                                    t = 0;
                                n = f.rows.map(v => {
                                    r++;
                                    if (!(c && f.rows.Dd(v, c) < 0 || d && f.rows.Dd(v, d) > 0)) return t += v.height, K5(sHb, {
                                        ea: v,
                                        label: `${r+1}`,
                                        Bx: h,
                                        sl: g,
                                        xd: k,
                                        Td: l,
                                        start: f.la(v)
                                    }, v.id)
                                });
                                return M5("div", {
                                    style: {
                                        height: t * l,
                                        width: g(k),
                                        ...q
                                    },
                                    className: N5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [n, (e === null || e === void 0 ? void 0 : e.sticky) && K5("div", {
                                        style: {
                                            height: kHb * l
                                        },
                                        className: N5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.bVa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.iL ?
                                    e.layout.qd.get(e.view.freeze.iL) : void 0,
                                    g = {
                                        jNbTIg: !this.Ei,
                                        gtA7Dw: this.Ei
                                    };
                                return M5("div", {
                                    ref: (d = this.As) === null || d === void 0 ? void 0 : d.mo,
                                    className: N5("An9VeA", g, c.className),
                                    children: [f && this.Rxa(void 0, f, {
                                        sticky: !0
                                    }), this.Rxa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [T5, iHb]
                    } = k6(a, [], [Jc], jHb))
                })(), fHb);
                var rHb = Q5(a => {
                        const b = a.label,
                            c = a.du,
                            d = a.col,
                            e = a.Bx,
                            f = a.sl,
                            g = a.xd;
                        a = a.Td;
                        const h = f(a),
                            k = TGb(() => e(d));
                        return K5("div", {
                            className: N5("_83Rssw", "d2uLIA", O5(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${lHb*g}px`,
                                borderBlockStartWidth: `${mHb*g}px`,
                                borderBlockEndWidth: `${nHb*g}px`
                            },
                            children: K5(qGb, {
                                label: b,
                                du: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                yma: k
                            })
                        })
                    }),
                    sHb = Q5(a => {
                        const b = a.label,
                            c = a.ea,
                            d = a.sl,
                            e = a.Bx,
                            f = a.xd,
                            g = a.Td,
                            h = d(f),
                            k = TGb(() => e(c));
                        return K5("div", {
                            className: N5("_83Rssw", "JhBzyw",
                                O5(k)),
                            style: {
                                width: h,
                                height: c.height * g,
                                borderBlockWidth: `${oHb*g}px`,
                                borderInlineStartWidth: `${pHb*g}px`,
                                borderInlineEndWidth: `${qHb*g}px`,
                                transform: `translateY(${a.start*g}px)`
                            },
                            children: K5(qGb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                yma: k
                            })
                        })
                    });
                var tHb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var uHb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var rGb = __c.yS({
                    aq: tHb,
                    medium: uHb
                });
                var vHb, wHb, xHb, U5;
                new(vHb = class extends j6 {
                    constructor() {
                        super(U5);
                        wHb()
                    }
                }, (() => {
                    class a extends(xHb = b6) {
                        static A(b) {
                            P(b, {
                                ld: X5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return K5(this.props.gm, {
                                sheet: b.Y.config,
                                container: b,
                                pV: "visible",
                                ql: this.props.ql,
                                fp: this.props.fp,
                                gp: this.props.gp,
                                O: this.props.O,
                                ld: this.ld,
                                Lf: this.props.Lf,
                                Vz: void 0
                            })
                        }
                        get ld() {
                            return __c.dD(this.props.element.Y.Ea, this.props.zd)
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [U5, wHb]
                    } = k6(a, [], [Jc], xHb))
                })(), vHb);
                var yHb = class {
                    constructor() {
                        this.a1 = new WeakMap;
                        this.kNa = a => this.a1.get(a);
                        this.Eza = (a, b) => {
                            this.a1.set(a, b)
                        };
                        this.zHa = (a, b) => {
                            const c = this.a1.get(a);
                            c && c.V === b.V && c.bb === b.bb && this.a1.delete(a)
                        }
                    }
                };
                var l6 = parseInt("4px", 10) || 4,
                    zHb = Q5(({
                        sheet: a,
                        O: b,
                        range: c,
                        Kq: d,
                        Lq: e
                    }) => {
                        if (c != null && (d || e)) {
                            var f;
                            b = (f = b === null || b === void 0 ? void 0 : b.get()) !== null && f !== void 0 ? f : 1;
                            f = a.direction === "rtl";
                            var g = {
                                ZJ0G6w: !f,
                                dOI_jA: f
                            };
                            if (d && e) return d = a.la(c.kc) + c.kc.height, a = a.ia(c.Qb) + c.Qb.width, K5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: l6 * b
                                },
                                className: N5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ia(c.Qb) + c.Qb.width, K5("div", {
                                style: {
                                    width: l6 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: N5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.la(c.kc) + c.kc.height, K5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: l6 * b
                                },
                                className: N5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var m6 = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = J5();
                        wGb({
                            sheet: a,
                            O: c,
                            range: b,
                            Sh: e
                        });
                        return K5("div", {
                            ref: e,
                            className: N5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    AHb = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = J5();
                        wGb({
                            sheet: a,
                            O: c,
                            range: b,
                            Sh: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return K5("div", {
                            className: N5("nstn2A", a, "_9sodyg"),
                            children: K5("div", {
                                ref: e,
                                className: N5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var yGb = Q5(({
                        sheet: a,
                        children: b,
                        Qv: c
                    }) => {
                        const d = R5(f => {
                                c.Mda(a, f)
                            }, [c, a]),
                            e = R5(f => {
                                f != null ? c.Rv.set(a, f) : c.Rv.delete(a)
                            }, [c, a]);
                        return K5(__c.zeb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            kC: e,
                            children: b
                        })
                    }),
                    xGb = class {
                        Mda(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.rS.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.Rv = new WeakMap;
                            this.rS = g6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = e6((b, c) => {
                                b = this.Rv.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var BGb = Q5(a => {
                    const b = a.item,
                        c = a.ql,
                        d = a.ue,
                        e = a.measureRef,
                        f = a.O,
                        g = a.vra,
                        h = a.bb,
                        k = a.fp,
                        l = a.gp,
                        m = a.gm,
                        n = a.lD,
                        p = a.Lf,
                        q = a.zd,
                        r = a.Qv;
                    a = P5(() => __c.dD(b.Ea, q), [b, q]);
                    const t = P5(() => Q5(({
                            sheet: y,
                            range: z,
                            Kq: B,
                            Lq: D
                        }) => K5(m6, {
                            sheet: y,
                            range: z,
                            O: f,
                            children: K5(zHb, {
                                sheet: y,
                                O: f,
                                range: z,
                                Kq: B,
                                Lq: D
                            })
                        })), [f]),
                        v = iGb(b.config),
                        u = f.get(),
                        x = Math.min(v.width * u, h.width);
                    V5(() => W5(() => {
                        var y = b.config.view.freeze.rA ? b.config.layout.$c.get(b.config.view.freeze.rA) : void 0;
                        if (y != null)
                            if (b.config.ia(y) + y.width > x) {
                                if (y = r.Rv.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.Rv.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, u, x]);
                    return K5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: K5(n, {
                            sheet: b,
                            children: K5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: v.width * u,
                                    height: v.height * u
                                },
                                children: K5("div", {
                                    className: "W1ir5A",
                                    children: K5(m, {
                                        container: d.rh(b),
                                        sheet: b.config,
                                        pV: "visible",
                                        ql: c,
                                        O: f,
                                        fp: k,
                                        gp: l,
                                        ld: a,
                                        Lf: p,
                                        Vz: t
                                    })
                                })
                            })
                        })
                    })
                });
                var BHb = Q5(({
                    page: a,
                    range: b,
                    Lv: c
                }) => {
                    const d = DGb(a.sheet, b);
                    return K5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.tm(vm(e)).xl(d) && c(e, f))
                    })
                });
                var CHb = new __c.TT,
                    n6 = a => cHb * a,
                    DHb = () => "primary-default",
                    EGb = Q5(({
                        container: a,
                        ql: b,
                        fp: c,
                        gp: d,
                        sP: e,
                        O: f,
                        viewport: g,
                        rWa: h,
                        gm: k,
                        Lf: l,
                        Lv: m,
                        t0: n,
                        A0a: p,
                        z_a: q,
                        y_a: r
                    }) => {
                        const t = a.page,
                            v = P5(() => Q5(({
                                sheet: u,
                                range: x,
                                Kq: y,
                                Lq: z
                            }) => M5(MGb, {
                                children: [K5(m6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: K5(zHb, {
                                        sheet: u,
                                        O: f,
                                        range: x,
                                        Kq: y,
                                        Lq: z
                                    })
                                }), M5(AHb, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: [p && K5(p, {}), m && K5(BHb, {
                                        page: t,
                                        Lv: m,
                                        range: x
                                    }), r && K5(r, {}), n && n()]
                                }), q && x && K5(m6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: K5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? K5(EHb, {
                            container: a,
                            viewport: g,
                            O: f,
                            ql: b,
                            fp: c,
                            gp: d,
                            gm: k,
                            Lf: l,
                            Vz: v
                        }) : K5(k, {
                            sheet: t.sheet,
                            container: a,
                            pV: "hidden",
                            ql: b,
                            fp: c,
                            gp: d,
                            sP: e,
                            O: f,
                            viewport: g,
                            Lf: l,
                            Vz: v
                        })
                    }),
                    EHb = Q5(a => {
                        const b = a.container,
                            c = a.O,
                            d = a.viewport,
                            e = a.ql,
                            f = a.fp,
                            g = a.gp,
                            h = a.gm,
                            k = a.Lf;
                        a = a.Vz;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = c6(null),
                            p = c6(null),
                            q = c6(null);
                        V5(() => {
                            const y = o6({
                                sheet: l.sheet,
                                K1: !0,
                                L1: !0,
                                O: c,
                                viewport: d
                            });
                            return Y5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const B = n.current;
                                if (z && B) {
                                    var D =
                                        l.sheet.direction === "rtl",
                                        F;
                                    B.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G;
                                    B.style.top = (G = z.top) !== null && G !== void 0 ? G : "0px";
                                    var H, J;
                                    D ? B.style.right = (H = z.right) !== null && H !== void 0 ? H : "0px" : B.style.left = (J = z.left) !== null && J !== void 0 ? J : "0px";
                                    var M;
                                    B.style.transform = (M = z.transform) !== null && M !== void 0 ? M : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        V5(() => {
                            const y = o6({
                                sheet: l.sheet,
                                K1: !1,
                                L1: !0,
                                O: c,
                                viewport: d
                            });
                            return Y5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const B = q.current;
                                if (z && B) {
                                    var D;
                                    B.style.position =
                                        (D = z.position) !== null && D !== void 0 ? D : "sticky";
                                    var F;
                                    B.style.top = (F = z.top) !== null && F !== void 0 ? F : "0px";
                                    var G;
                                    B.style.transform = (G = z.transform) !== null && G !== void 0 ? G : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        V5(() => {
                            const y = o6({
                                sheet: l.sheet,
                                K1: !0,
                                L1: !1,
                                O: c,
                                viewport: d
                            });
                            return Y5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
                                const B = p.current;
                                if (z && B) {
                                    var D = l.sheet.direction === "rtl",
                                        F;
                                    B.style.position = (F = z.position) !== null && F !== void 0 ? F : "sticky";
                                    var G, H;
                                    D ? B.style.right = (G = z.right) !== null && G !== void 0 ? G : "0px" : B.style.left = (H =
                                        z.left) !== null && H !== void 0 ? H : "0px";
                                    var J;
                                    B.style.transform = (J = z.transform) !== null && J !== void 0 ? J : ""
                                }
                            })
                        }, [l.sheet, c, d]);
                        const r = R5((y, z, B) => o6({
                                sheet: y,
                                K1: z,
                                L1: B,
                                O: c,
                                viewport: d
                            }), [c, d]),
                            t = P5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            v = P5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var u;
                        const x = (u = c === null || c === void 0 ? void 0 : c.get()) !== null && u !== void 0 ? u : 1;
                        return M5("div", {
                            className: N5("OsKKIQ", "cbOp6Q"),
                            children: [K5("div", {
                                className: "VDFv_A",
                                children: K5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    pV: "hidden",
                                    ql: e,
                                    fp: f,
                                    gp: g,
                                    sP: r,
                                    O: c,
                                    viewport: d,
                                    Lf: k,
                                    Vz: a
                                })
                            }), K5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: K5(sGb, {
                                    Ei: m,
                                    Wqa: !1,
                                    sl: n6,
                                    scale: x
                                })
                            }), K5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: K5(S5, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    sl: n6,
                                    Bx: DHb,
                                    uy: CHb,
                                    A9: t
                                })
                            }), K5("div", {
                                ref: p,
                                className: "zm537g",
                                children: K5(T5, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    sl: n6,
                                    Bx: DHb,
                                    uy: CHb,
                                    A9: v
                                })
                            })]
                        })
                    }),
                    o6 = ({
                        sheet: a,
                        K1: b,
                        L1: c,
                        O: d,
                        viewport: e
                    }) => X5(() => {
                        var f = e === null || e === void 0 ? void 0 : __c.Gm(e.get()),
                            g;
                        const h = (g = d === null || d === void 0 ? void 0 : d.get()) !== null &&
                            g !== void 0 ? g : 1;
                        if (!f) return {};
                        g = {};
                        f = new Xl(f.left, f.top);
                        const k = a.direction === "rtl";
                        g.position = "relative";
                        c && (g.top = "0px");
                        b && (k ? g.right = "0px" : g.left = "0px");
                        g.transform = `translate(${b?f.x*h:0}px, ${c?f.y*h:0}px)`;
                        return g
                    });
                var KGb = class {
                    constructor(a) {
                        this.Wv = a;
                        this.oHa = __c.MV;
                        this.RMa = i6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.MMa(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !tM(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !tM(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !tM(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !tM(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.oHa);
                                        if (!(g.width >
                                                l)) {
                                            switch (h) {
                                                case "start":
                                                case "justify":
                                                    h = b.ia(g);
                                                    k = h + l;
                                                    break;
                                                case "center":
                                                    k = b.ia(g) + g.width / 2;
                                                    h = k - l / 2;
                                                    k += l / 2;
                                                    break;
                                                case "end":
                                                    k = b.ia(g) + g.width;
                                                    h = k - l;
                                                    break;
                                                default:
                                                    throw new E(h);
                                            }
                                            for (l = d.indexOf(g); l >= 0; l--) {
                                                var m = d[l],
                                                    n = l - 1 < 0 || tM(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || tM(b, c, m)) {
                                                    p = h;
                                                    var q = k,
                                                        r = b.ia(m);
                                                    p = p < r && r < q
                                                }
                                                if (p && n) f.set(m, 1);
                                                else break
                                            }
                                            for (g = d.indexOf(g) + 1; g < d.length; g++) {
                                                l = d[g];
                                                if (m = tM(b, c, l)) m = h, n = k, p = b.ia(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.MMa = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.pa.ref) && g.span.ub === g.span.kc && g.span.qb === g.span.Qb) {
                                var h = this.Wv.Mq(b, c, d);
                                b = this.Wv.v9(b, c, d, __c.Hh({
                                    rf: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    rf: k,
                                    textAlign: l
                                } = __c.$g(__c.Gh, b);
                                if (k === "overflow") return __c.Txa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.pa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Zh.type : void 0)
                            }
                        }
                    }
                };
                var FHb = Q5(function(a) {
                    const b = a.sheet;
                    var c = a.zf;
                    const d = a.kZa,
                        e = a.O,
                        f = a.F$,
                        g = a.CMa;
                    a = a.overflow;
                    const h = J5();
                    PGb(() => W5(() => {
                        const p = C(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = R5(p => f.RMa(b, p, d, g), [f, b, d, g]);
                    var l = R5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = fGb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return K5("svg", {
                        ref: h,
                        role: "presentation",
                        className: N5("c6a1eQ", {
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
                            Th: t,
                            Uh: v
                        }) => K5("path", {
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
                var GHb;
                GHb = Symbol.iterator;
                var HHb = class {
                    get size() {
                        return this.m1
                    }
                    get([a, b]) {
                        return (a = this.Zx.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.Zx.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.Zx.get(a);
                        d == null && (d = new Map, this.Zx.set(a, d));
                        d.set(b, c);
                        this.m1++;
                        return this
                    }
                    clear() {
                        this.Zx.clear();
                        this.m1 = 0
                    }
                    delete([a, b]) {
                        const c = this.Zx.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.m1--;
                        c.size === 0 && this.Zx.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.Zx)
                            for (const [d, e] of c) a([b, d], e)
                    }*[GHb]() {
                        for (const [a, b] of this.Zx)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.m1 = 0;
                        this.Zx = new Map
                    }
                };
                var IHb, JHb, KHb, LHb, MHb, NHb, OHb, IGb = __c.tA("285688d5", !1),
                    PHb, QHb = class extends b6 {
                        render() {
                            const {
                                TX: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return M5("div", {
                                ref: this.Tza,
                                className: N5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.hla) && K5(p6, { ...b,
                                    sheet: c,
                                    range: a.hla.range,
                                    Kq: !0,
                                    Lq: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.YCa) && K5(p6, { ...b,
                                    sheet: c,
                                    range: a.YCa.range,
                                    Kq: !1,
                                    Lq: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.Yqa) && K5(p6, { ...b,
                                    sheet: c,
                                    range: a.Yqa.range,
                                    Kq: !0,
                                    Lq: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.aCa) && K5(p6, { ...b,
                                    sheet: c,
                                    range: a.aCa.range,
                                    Kq: !1,
                                    Lq: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = W5(() => {
                                var b = this.props,
                                    c = b.O;
                                b = b.sheet;
                                const d = this.Tza.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.rc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.Tza = xD()
                        }
                    };
                ({
                    c: [PHb, KHb]
                } = k6(QHb, [], [Jc], b6));
                KHb();
                var p6;
                new(IHb = class extends j6 {
                    constructor() {
                        super(p6);
                        LHb()
                    }
                }, (() => {
                    class a extends(MHb = b6) {
                        static A(b) {
                            P(b, {
                                Uda: X5,
                                bounds: X5
                            })
                        }
                        get Uda() {
                            const b = this.props.viewport,
                                c = this.props.Kq,
                                d = this.props.Lq;
                            return b == null || !c && !d ? b : X5(() => {
                                const e = __c.Gm(b.get());
                                return vm({
                                    top: d ? 0 : e.top,
                                    left: c ? 0 : e.left,
                                    width: e.width,
                                    height: e.height
                                })
                            })
                        }
                        render() {
                            const b = this.props.tF,
                                c = this.props.sheet,
                                d = this.props.container,
                                e = this.props.range,
                                f = this.props.Vz,
                                g = this.props.Kq,
                                h = this.props.Lq;
                            return M5("div", {
                                ref: this.bca,
                                className: N5("i0YQww",
                                    this.props.className),
                                children: [K5("div", {
                                    ref: this.pwa,
                                    className: "vUKoKg",
                                    children: K5("div", {
                                        ref: this.qwa,
                                        children: K5(q6, {
                                            tF: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            ql: this.props.ql,
                                            ow: this.props.ow,
                                            Lf: this.props.Lf,
                                            bO: this.props.bO,
                                            O: this.props.O,
                                            zf: this.zf,
                                            WT: this.WT,
                                            TI: this.TI
                                        })
                                    })
                                }), K5(this.w4, {}), f && K5(f, {
                                    sheet: c,
                                    range: e,
                                    Kq: g,
                                    Lq: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = W5(() => {
                                    var h = this.props,
                                        k = h.O,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.bca.current;
                                    const p = this.pwa.current;
                                    h = this.qwa.current;
                                    k = k ? k.get() : 1;
                                    const q =
                                        m ? l.ia(m.Qb) + m.Qb.width - l.ia(m.qb) : l.width,
                                        r = m ? l.la(m.kc) + m.kc.height - l.la(m.ub) : l.height;
                                    n && (n.style.width = `${q*k}px`, n.style.height = `${r*k}px`);
                                    p && (p.style.width = `${q*k}px`, p.style.height = `${r*k}px`);
                                    n = l.direction === "rtl";
                                    n = m ? l.ia(m.qb) * k * (n ? 1 : -1) : 0;
                                    l = m ? -l.la(m.ub) * k : 0;
                                    h && (h.style.transform = `translate(${n}px, ${l}px)`)
                                }),
                                c = this.props.sheet;
                            var d = this.props.sP;
                            const e = this.props.Kq,
                                f = this.props.Lq,
                                g = e || f ? d === null || d === void 0 ? void 0 : d(c, e, f) : void 0;
                            d = W5(() => {
                                const h = this.bca.current;
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
                            __c.rc(this, [b, d])
                        }
                        get bounds() {
                            const b = this.props.sheet,
                                c = this.props.range;
                            if (b.layout.cols.empty || b.layout.rows.empty) return {
                                qb: void 0,
                                Qb: void 0,
                                ub: void 0,
                                kc: void 0
                            };
                            var d, e, f, g;
                            return {
                                qb: (d = c === null || c === void 0 ? void 0 : c.qb) !== null && d !== void 0 ? d : b.layout.cols.first(),
                                Qb: (e = c === null || c === void 0 ? void 0 : c.Qb) !== null && e !== void 0 ? e : b.layout.cols.last(),
                                ub: (f = c === null || c === void 0 ? void 0 : c.ub) !== null && f !== void 0 ? f : b.layout.rows.first(),
                                kc: (g = c === null || c === void 0 ? void 0 : c.kc) !==
                                    null && g !== void 0 ? g : b.layout.rows.last()
                            }
                        }
                        constructor(...b) {
                            super(...b);
                            this.bca = (p6.A(this), xD());
                            this.pwa = xD();
                            this.qwa = xD();
                            this.TI = new RHb;
                            this.lZa = X5(() => [...this.zf.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Dd(c, d)), {
                                equals: __c.Hl()
                            });
                            this.jZa = X5(() => [...this.WT.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Dd(c, d)), {
                                equals: __c.Hl()
                            });
                            this.w4 = Q5(() => K5(this.props.OEa, {
                                zf: this.lZa,
                                kZa: this.jZa,
                                CMa: this.TI.KMa,
                                range: this.props.range
                            }));
                            this.zf = X5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.Uda) === null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Ga.y - g : c.ub ? d.la(c.ub) : 0;
                                f = f ? f.br.y + g : c.kc ? d.la(c.kc) + c.kc.height : 0;
                                g = new Map;
                                for (let k = c.ub; k != null && c.kc != null && d.layout.rows.Dd(k, c.kc) <= 0; k = d.layout.rows.next(k)) {
                                    const l = d.la(k);
                                    if (!(l + k.height < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: f6.shallow
                            });
                            this.WT = X5(() => {
                                var c;
                                const d = this.props.sheet;
                                var e = this.props.O,
                                    f = (c = this.Uda) ===
                                    null || c === void 0 ? void 0 : c.get();
                                if (f && (f.height <= 0 || f.width <= 0)) return new Map;
                                c = this.bounds;
                                e = e.get();
                                var g = 50 * e;
                                const h = f ? f.Ga.x - g : c.qb ? d.ia(c.qb) : 0;
                                f = f ? f.br.x + g : c.Qb ? d.ia(c.Qb) + c.Qb.width : 0;
                                g = new Map;
                                for (let k = c.qb; k != null && c.Qb != null && d.layout.cols.Dd(k, c.Qb) <= 0; k = d.layout.cols.next(k)) {
                                    const l = d.ia(k);
                                    if (!(l + k.width < h)) {
                                        if (l > f) break;
                                        g.set(k, l * e)
                                    }
                                }
                                return g
                            }, {
                                equals: f6.shallow
                            })
                        }
                    }({
                        c: [p6, LHb]
                    } = k6(a, [], [Jc], MHb))
                })(), IHb);
                var RHb = class {
                        constructor() {
                            this.cells = new HHb;
                            this.Vca = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = g6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.KMa = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = g6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.Vma
                            }
                        }
                    },
                    q6;
                new(JHb = class extends j6 {
                    constructor() {
                        super(q6);
                        NHb()
                    }
                }, (() => {
                    class a extends(OHb = b6) {
                        static A(b) {
                            P(b, {
                                WC: g6.shallow,
                                As: X5,
                                Mka: e6,
                                yW: e6.bound
                            })
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.ql) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.bJ(c)
                        }
                        render() {
                            var b;
                            return M5("div", {
                                ref: UGb(this.Sh, (b = this.As) === null || b === void 0 ? void 0 : b.mo),
                                children: [K5("div", {
                                    ref: this.t6,
                                    className: "_5YlOqQ"
                                }), K5("div", {
                                    ref: this.v6,
                                    className: "_XCmKw"
                                }), this.WC.map(c => c.WTa)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                Y5(() => [this.props.sheet, this.props.WT.get(), this.props.zf.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.AHa();
                                    this.Mka(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = W5(() => {
                                    var e = this.props,
                                        f = e.O;
                                    e = e.sheet;
                                    const g = this.Sh.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.WC.map(e => JGb(e));
                            __c.rc(this, [c, b, ...d])
                        }
                        AHa() {
                            const b = C(this.t6.current),
                                c = C(this.v6.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.Oha.length = 0;
                            this.WC.length = 0
                        }
                        Mka(b, c) {
                            const d = C(this.t6.current),
                                e = C(this.v6.current),
                                f = [],
                                g = new Map;
                            for (const h of this.Oha) c.has(h.ea) ? g.set(h.ea, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new SHb(this.yW, h), d.appendChild(c.GV), e.appendChild(c.IV), this.Oha.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        yW(b, c) {
                            const d = this.props.bO,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.TI;
                            b = new THb(this.props.tF, this.props.ow, this.props.Lf, d(b, c), e, b, c, f, g.Vca, this.gY, this.fY);
                            __c.rc(this, JGb(b));
                            this.WC.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Sh = (q6.A(this), xD());
                            this.t6 = xD();
                            this.v6 = xD();
                            this.Oha = [];
                            this.WC = [];
                            this.gY = i6(c => {
                                const d = this.props.zf.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.fY = i6(c => {
                                const d = this.props.WT.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [q6, NHb]
                    } = k6(a, [], [Jc], OHb))
                })(), JHb);
                var SHb = class {
                        static A(a) {
                            P(a, {
                                update: e6
                            })
                        }
                        update(a, b, c) {
                            [this.GV, this.IV].forEach(d => {
                                d.style.transform = `translateY(${a}px)`;
                                d.classList.add("FPpqvg")
                            });
                            this.ea = b;
                            for (const [d] of c) c = this.WC.get(d), c || (c = this.yW(d, b), this.WC.set(d, c), this.GV.appendChild(c.FV), this.IV.appendChild(c.HD)), c.update(b)
                        }
                        hide() {
                            [this.GV, this.IV].forEach(a => {
                                a.style.transform = "translate(-1000px, -1000px) scale(0)"
                            })
                        }
                        constructor(a, b) {
                            this.yW = a;
                            this.ea = b;
                            this.GV = (SHb.A(this), document.createElement("div"));
                            this.IV = document.createElement("div");
                            this.WC = new Map
                        }
                    },
                    THb = class {
                        static A(a) {
                            P(a, {
                                jW: g6.ref,
                                ea: g6.ref,
                                W9: X5,
                                update: e6,
                                Lo: X5,
                                attrs: X5.struct,
                                aaa: X5,
                                yq: X5,
                                renderer: X5,
                                Vma: X5.struct
                            })
                        }
                        get W9() {
                            if (!IGb) return !1;
                            const a = this.Lo;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.tF(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ea && (this.ea = a, this.Et.ea = a, this.T7 && this.T7(), this.T7 = this.Vca(this.ea, this.col, this))
                        }
                        get WTa() {
                            return this.jW
                        }
                        get Lo() {
                            const a = this.sheet.layout.cells.get(this.ea, this.col);
                            return a ?
                                a.ref : void 0
                        }
                        get attrs() {
                            const a = this.Et.attrs;
                            return {
                                rf: a === null || a === void 0 ? void 0 : a.rf,
                                textAlign: a === null || a === void 0 ? void 0 : a.textAlign,
                                direction: a === null || a === void 0 ? void 0 : a.direction,
                                link: a === null || a === void 0 ? void 0 : a.link
                            }
                        }
                        get aaa() {
                            var a = this.Et.span;
                            if (!a) return !1;
                            if (a.ub === a.kc && a.qb === a.Qb) return !0;
                            var b = this.gY("first");
                            const c = this.gY("last"),
                                d = this.fY("first"),
                                e = this.fY("last");
                            if (!(b && c && d && e)) return !1;
                            b = this.sheet.layout.rows.Dd(a.ub, b) >= 0 && this.sheet.layout.rows.Dd(a.ub, c) <= 0 ? a.ub :
                                b;
                            a = this.sheet.layout.cols.Dd(a.qb, d) >= 0 && this.sheet.layout.cols.Dd(a.qb, e) <= 0 ? a.qb : d;
                            return b === this.ea && a === this.col
                        }
                        get yq() {
                            const a = this.sheet,
                                b = this.ea,
                                c = this.col;
                            if (!this.container) return {
                                type: void 0,
                                sheet: a,
                                ea: b,
                                column: c
                            };
                            switch (this.container.type) {
                                case "fixed-page":
                                    return this.container.vTa.Hc(c, b);
                                case "sheet-item":
                                    return this.container.Tda.Hc(c, b);
                                case "sheet-element":
                                    return this.container.hWa.Hc(c, b);
                                default:
                                    throw new E(this.container);
                            }
                        }
                        get renderer() {
                            const a = this.Lo;
                            if (a && this.aaa &&
                                (a.content.ref || a.pa.ref)) return this.ow({
                                context: {
                                    container: this.yq,
                                    attrs: this.attrs
                                },
                                Fl: this.vba,
                                Lf: this.Lf
                            })
                        }
                        get Vma() {
                            this.Wma.reportObserved();
                            var a = RGb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.TR : this.Vw, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, v;
                            this.tF = a;
                            this.ow = b;
                            this.Et = d;
                            this.sheet = e;
                            this.col = f;
                            this.container = h;
                            this.Vca = k;
                            this.gY = l;
                            this.fY = m;
                            this.FV =
                                (THb.A(this), document.createElement("div"));
                            this.HD = document.createElement("div");
                            this.Qw = document.createElement("div");
                            this.Vw = document.createElement("div");
                            this.TR = document.createElement("div");
                            this.Wma = QGb("content size atom");
                            this.vba = e6(() => this.Wma.reportChanged());
                            this.ea = g;
                            this.FV.className = "_2JFriw";
                            this.HD.className = "imy9ug";
                            this.Qw.className = N5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Lo) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Lo) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((v = this.Lo) === null || v === void 0 ? void 0 : (t = v.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.W9
                            });
                            this.Vw.className = "_30B9pw";
                            this.Qw.appendChild(this.Vw);
                            this.HD.appendChild(this.Qw);
                            this.TR.className = "G7zH2w";
                            this.T7 = k(this.ea, this.col, this);
                            this.Lf = u => K5(c, { ...u,
                                Fl: this.vba
                            })
                        }
                    };
                var UHb, VHb, WHb, Z5;
                new(UHb = class extends j6 {
                    constructor() {
                        super(Z5);
                        VHb()
                    }
                }, (() => {
                    class a extends(WHb = b6) {
                        static A(b) {
                            P(b, {
                                TX: X5
                            })
                        }
                        render() {
                            const {
                                tF: b,
                                sheet: c,
                                container: d,
                                ql: e,
                                sP: f,
                                ow: g,
                                ld: h,
                                Lf: k,
                                viewport: l,
                                Vz: m,
                                QCa: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return K5("div", {
                                className: N5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: K5(PHb, {
                                    tF: b,
                                    ow: g,
                                    Lf: k,
                                    OEa: this.w4,
                                    bO: this.bO,
                                    sheet: c,
                                    container: d,
                                    ql: e,
                                    sP: f,
                                    O: this.O,
                                    viewport: l,
                                    Vz: m,
                                    TX: this.TX
                                })
                            })
                        }
                        get TX() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.iL ? b.layout.qd.get(b.view.freeze.iL) : void 0,
                                e = b.view.freeze.rA ? b.layout.$c.get(b.view.freeze.rA) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.hla = {
                                    range: {
                                        qb: h,
                                        ub: f,
                                        Qb: e,
                                        kc: d
                                    }
                                });
                                d && l && (c.YCa = {
                                    range: {
                                        qb: l,
                                        ub: f,
                                        Qb: k,
                                        kc: d
                                    }
                                });
                                e && b && (c.Yqa = {
                                    range: {
                                        qb: h,
                                        ub: b,
                                        Qb: e,
                                        kc: g
                                    }
                                });
                                b && l && (c.aCa = {
                                    range: {
                                        qb: l,
                                        ub: b,
                                        Qb: k,
                                        kc: g
                                    }
                                });
                                return c
                            }
                        }
                        get O() {
                            return this.props.O ?
                                this.props.O : X5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.w4 = (Z5.A(this), Q5(c => {
                                const {
                                    sheet: d,
                                    F$: e,
                                    O: f,
                                    pV: g = "hidden"
                                } = this.props;
                                return K5(m6, {
                                    sheet: d,
                                    range: c.range,
                                    O: f,
                                    children: K5(FHb, { ...c,
                                        sheet: d,
                                        O: this.O,
                                        F$: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.bO = (c, d) => new __c.lya(this.props.Wv, this.props.At, this.props.sheet, c, d, this.O, this.fp, this.gp);
                            this.fp = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).fp) === null || e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            };
                            this.gp = (c, d) => {
                                var e, f;
                                return (e = (f = this.props).gp) === null ||
                                    e === void 0 ? void 0 : e.call(f, this.props.sheet, c, d)
                            }
                        }
                    }({
                        c: [Z5, VHb]
                    } = k6(a, [], [Jc], WHb))
                })(), UHb);
                __c.sya = {
                    TOa: function(a) {
                        const b = a.Gm,
                            c = a.Pe,
                            d = a.te,
                            e = a.jo,
                            f = a.Wv,
                            g = a.At,
                            h = a.DM;
                        pGb({
                            ez: a.ez,
                            lf: a.lf,
                            pXa: a.kS,
                            Ja: a.Ja
                        });
                        const k = LGb({
                            ow: h,
                            Wv: f,
                            At: g,
                            yx: void 0
                        });
                        b.Q4 = FGb({
                            gm: k
                        });
                        c.x4 = vGb({
                            gm: k
                        });
                        ({
                            y4: a
                        } = CGb({
                            gm: k,
                            ke: e(),
                            Rza: new yHb
                        }));
                        d.om.P4 = a;
                        const {
                            NDa: l,
                            ODa: m,
                            MDa: n
                        } = uGb();
                        return {
                            pja: Q5(p => K5(WGb, { ...p,
                                container: void 0,
                                gm: k,
                                REa: l,
                                SEa: m,
                                PEa: n,
                                Lf: XGb
                            }))
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/090c8abe3b71f1b6.js.map