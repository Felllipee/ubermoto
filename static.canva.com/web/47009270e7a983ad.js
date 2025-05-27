(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [76301], {

        /***/
        738083: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var uM = __c.uM;
                var Jc = __c.Jc;
                var P = __c.P;
                var vm = __c.vm;
                var xD = __c.xD;
                var O = __c.O;
                var Xl = __c.Xl;
                var C = __c.C;
                var E = __c.E;
                var I5 = function(a, b) {
                        switch (b.reference.type) {
                            case 0:
                                const c = a.KI(b.reference.ig);
                                a = a.hL(b.reference.sg);
                                return c != null && a != null;
                            case 1:
                                return a.KI(b.reference.ig) != null;
                            case 2:
                                return a.hL(b.reference.sg) != null;
                            case 3:
                                return !1;
                            default:
                                throw new E(b.reference);
                        }
                    },
                    ZFb = function(a, b, c) {
                        switch (c.type) {
                            case "invalid":
                                return !1;
                            case "canonical":
                                if (c.S.length > 0) return !1;
                                a = a.Gy(c.CN.slice(1).trim());
                                return a.result !== "success" ? !1 : __c.KI(new __c.NI, a.BA).filter(d => {
                                    switch (d.type) {
                                        case 0:
                                            return I5(b, d);
                                        case 1:
                                            return I5(b,
                                                d.start) && I5(b, d.end);
                                        default:
                                            throw new E(d);
                                    }
                                }).length > 0;
                            default:
                                throw new E(c);
                        }
                    },
                    $Fb = function(a, b, c, d) {
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
                                        if (h = g) h = g.w8, h = h.column === l.column && h.boundary === l.boundary;
                                        h && (h = g.rya, h = h.ea === k.ea && h.boundary === k.boundary);
                                        h && g.color === c.color && g.weight === c.weight && g.Gb === c.Gb && g.Gb === 0 ? g.w8 = f : e.push({
                                            rya: k,
                                            GWa: l,
                                            w8: f,
                                            color: c.color,
                                            weight: c.weight,
                                            Gb: c.Gb
                                        })
                                    }
                            }
                        return e
                    },
                    aGb = function(a, b, c, d, e) {
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
                                        if (k = h) k = h.qma, k = k.column === l.column && k.boundary === l.boundary;
                                        k && (k = h.A8, k = k.ea === m.ea && k.boundary === m.boundary);
                                        k && h.color === d.color && h.weight === d.weight && h.Gb === d.Gb && h.Gb === 0 ? h.A8 = g : f.push({
                                            qma: l,
                                            QWa: m,
                                            A8: g,
                                            color: d.color,
                                            weight: d.weight,
                                            Gb: d.Gb
                                        })
                                    }
                            }
                        return f
                    },
                    bGb = function(a, b, c, d, e) {
                        const f =
                            a.Oza.rIa(c, b.layout.rows.last(), b.layout.cols.last());
                        a = (q, r) => {
                            const t = f.get(q) || 0,
                                u = f.get(r) || 0;
                            return t <= u ? q : r
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
                                    height: u,
                                    width: v
                                } = (t === null || t === void 0 ? void 0 : t.Gb) === 1 ? {
                                    height: t.weight,
                                    width: t.weight
                                } : {
                                    height: Math.max((l === null || l === void 0 ? void 0 :
                                        l.weight) || 0, (m === null || m === void 0 ? void 0 : m.weight) || 0),
                                    width: Math.max((n === null || n === void 0 ? void 0 : n.weight) || 0, (k === null || k === void 0 ? void 0 : k.weight) || 0)
                                };
                                g.set(J5(q, r), __c.Ml(p, u / 2, v / 2))
                            }
                        }
                        return g
                    },
                    cGb = function(a, b, c, d, e, f) {
                        if (d.length === 0 || e.length === 0) return [];
                        const g = $Fb(b, c, d, e);
                        f = aGb(b, c, d, e, f);
                        const h = bGb(a, b, c, d, e),
                            k = a.dNa(b),
                            l = a.CMa(b),
                            m = b.direction === "rtl";
                        a = g.map(n => {
                            var p, q, r = n.GWa,
                                t = n.w8,
                                u = n.rya;
                            const v = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = m ? -1 : 1,
                                z = (p = h.get(J5(r, u))) === null || p === void 0 ?
                                void 0 : p.Da;
                            p = (q = h.get(J5(t, u))) === null || q === void 0 ? void 0 : q.ia;
                            if (z != null && p != null) {
                                q = C(k.get(u.ea));
                                var B = C(l.get(r.column));
                                r = C(l.get(t.column));
                                u = u.boundary === "start" ? q.start : q.end;
                                q = B.start;
                                t = t.boundary === "start" ? r.start : r.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Gb: n,
                                    p1: new Xl(q + z * y, u),
                                    p2: new Xl(t + p * y, u),
                                    ...__c.Sl((t - q) * y, n * x, z)
                                }
                            }
                        }).filter(__c.wb);
                        return [...f.map(n => {
                            var p, q, r = n.qma,
                                t = n.QWa,
                                u = n.A8;
                            const v = n.color,
                                x = n.weight;
                            n = n.Gb;
                            const y = (p = h.get(J5(r, t))) === null || p === void 0 ? void 0 : p.Ba;
                            p = (q = h.get(J5(r,
                                u))) === null || q === void 0 ? void 0 : q.la;
                            if (y != null && p != null) {
                                q = C(l.get(r.column));
                                var z = C(k.get(t.ea));
                                t = C(k.get(u.ea));
                                r = r.boundary === "start" ? q.start : q.end;
                                q = z.start;
                                u = u.boundary === "start" ? t.start : t.end;
                                return {
                                    color: v,
                                    weight: x,
                                    Gb: n,
                                    p1: new Xl(r, q + y),
                                    p2: new Xl(r, u + p),
                                    ...__c.Sl(u - q, n * x, y)
                                }
                            }
                        }).filter(__c.wb), ...a]
                    },
                    dGb = function(a) {
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
                    eGb = function(a, b, c, d) {
                        var e = __c.Fab;
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
                                e.Oza.KUa(a, l, k) : void 0, b && h.set(`${l.id}:${k.id}`, b);
                        c = cGb(e, a, h, f, g, d);
                        return dGb(c)
                    },
                    fGb = function(a) {
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
                    K5 = function() {
                        const [a] = (0, __c.rb)(() => xD());
                        return a
                    },
                    gGb = function(a, b, c) {
                        const d = [a];
                        for (; a != null &&
                            a !== b;)(a = c.next(a)) && d.push(a);
                        return d
                    },
                    hGb = function(a) {
                        const b = a.direction === "rtl" ? -(0, __c.Iab)(a) / 2 : -(0, __c.Gab)(a) / 2,
                            c = -(0, __c.Hab)(a) / 2,
                            d = a.width + (0, __c.Gab)(a) / 2 + (0, __c.Iab)(a) / 2;
                        a = a.height + (0, __c.Hab)(a) / 2 + (0, __c.Jab)(a) / 2;
                        return vm({
                            top: 0,
                            left: 0,
                            width: d,
                            height: a,
                            rotation: 0
                        }).translate(b, c)
                    },
                    iGb = function(a) {
                        return b => ({
                            type: "react",
                            node: (0, __c.N)(a, { ...b
                            })
                        })
                    },
                    lGb = function(a) {
                        var b;
                        const c = a.dz;
                        var d = a.content;
                        const e = a.context;
                        a = a.El;
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
                                    content: __c.Je(__c.pNa, { ...__c.$Ra,
                                        value: b.value
                                    }),
                                    context: e,
                                    El: a
                                });
                                break;
                            case 1:
                            case 3:
                            case 4:
                            case 2:
                            case 7:
                            case 8:
                                d = jGb(c, e, d.ou, d.Zh.type);
                                break;
                            case 0:
                                d = {
                                    type: "react",
                                    node: L5(__c.KS, {
                                        label: fGb(b.error),
                                        children: L5(__c.pl, {
                                            width: "full",
                                            display: "flex",
                                            justifyContent: "center",
                                            children: L5(kGb, {
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
                    jGb = function(a, b, c, d) {
                        var e;
                        return (e = a.M4) === null || e === void 0 ? void 0 : e.call(a, {
                            context: b,
                            value: c,
                            valueType: d
                        })
                    },
                    oGb = function(a) {
                        const b = a.dz,
                            c = a.lf,
                            d = a.nXa,
                            e = a.Ja;
                        b.M4 = f => __c.eya({ ...f,
                            Ja: e
                        });
                        b.Aja = f => lGb({ ...f,
                            dz: b
                        });
                        b.J4 = iGb(mGb({
                            lf: c,
                            XH: void 0
                        }));
                        b.Cja = nGb(d, e);
                        b.Dja = iGb(f => L5(M5, { ...f,
                            Ja: e
                        }))
                    },
                    pGb = function({
                        label: a,
                        du: b,
                        width: c,
                        height: d,
                        scale: e,
                        xma: f
                    }) {
                        return L5("div", {
                            style: {
                                width: c,
                                height: d,
                                transform: `scale(${e})`
                            },
                            className: "bx74uQ",
                            children: N5(__c.ml, {
                                className: O5("ivlMMQ", P5(f)),
                                size: "small",
                                alignment: "center",
                                children: [b && L5(b, {
                                    size: "small"
                                }), a]
                            })
                        })
                    },
                    P5 = function(a) {
                        return {
                            _2BX0vg: a === "primary-default",
                            JfW_Cg: a === "primary-low",
                            isMgNg: a === "primary-active",
                            xwWDeQ: a === "secondary-default",
                            w0EyUQ: a === "secondary-low",
                            _8p5AIA: a === "secondary-active"
                        }
                    },
                    rGb = function({
                        Ei: a,
                        Vqa: b,
                        scale: c,
                        nl: d,
                        rl: e,
                        pDa: f
                    }) {
                        const g = Q5(() => {
                                const m = d === null || d === void 0 ? void 0 : d.get();
                                if (m != null && m.length !== 0) return new __c.cJ(m)
                            }, [d]),
                            h = e(1),
                            k = e(c),
                            l = {
                                ssE9Tg: !a,
                                OkifGQ: a
                            };
                        return L5(__c.nl, {
                            ym: "light",
                            light: "light",
                            Mo: "light",
                            dark: "light",
                            children: m => L5("div", {
                                className: O5("ze9QCQ", l, m.className),
                                style: {
                                    width: k,
                                    height: k
                                },
                                children: L5("div", {
                                    style: {
                                        width: h,
                                        height: h,
                                        transform: `scale(${c})`
                                    },
                                    className: O5("N7J3UA", l),
                                    ref: g === null || g === void 0 ? void 0 : g.mo,
                                    children: L5(__c.OS, {
                                        className: O5("m8CFdg", l, {
                                            G6wL4w: f,
                                            W_E0wA: b
                                        }),
                                        ariaLabel: O("ruWN9A"),
                                        children: L5(qGb, {
                                            size: "tiny"
                                        })
                                    })
                                })
                            })
                        })
                    },
                    tGb = function() {
                        const a = new sGb,
                            b = new __c.UT,
                            c = R5(f => {
                                const {
                                    scale: g = 1,
                                    Sqa: h,
                                    size: k =
                                        "small",
                                    pDa: l = !0
                                } = f, m = S5(n => a.rl({
                                    scale: n,
                                    size: k,
                                    Taa: h
                                }), [k, h]);
                                return L5(rGb, { ...f,
                                    scale: h ? Math.max(g, h) : g,
                                    Ei: f.sheet.direction === "rtl",
                                    Vqa: f.selection != null && a.IPa(f.sheet, f.selection),
                                    rl: m,
                                    pDa: l
                                })
                            }),
                            d = R5(f => {
                                const {
                                    scale: g = 1,
                                    Sqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    kVa: n
                                } = f, p = S5(v => a.rl({
                                    scale: v,
                                    size: k,
                                    Taa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = S5(v => m != null && a.Ada(m).has(v), [m]), t = S5(v => m != null && a.ONa(l, m).has(v), [l, m]), u = S5(v => {
                                    const x = n != null && l.layout.cols.Dd(v, n.qb) >= 0 && l.layout.cols.Dd(v, n.Qb) <=
                                        0;
                                    return r(v) ? x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return L5(T5, { ...f,
                                    xd: g,
                                    Td: q,
                                    rl: p,
                                    Bx: u,
                                    qy: b
                                })
                            }),
                            e = R5(f => {
                                const {
                                    scale: g = 1,
                                    Sqa: h,
                                    size: k = "small",
                                    sheet: l,
                                    selection: m,
                                    kVa: n
                                } = f, p = S5(v => a.rl({
                                    scale: v,
                                    size: k,
                                    Taa: h
                                }), [k, h]), q = h ? Math.max(g, h) : g, r = S5(v => m != null && a.Cda(m).has(v), [m]), t = S5(v => m != null && a.PNa(l, m).has(v), [l, m]), u = S5(v => {
                                    const x = n != null && l.layout.rows.Dd(v, n.ub) >= 0 && l.layout.rows.Dd(v, n.kc) <= 0;
                                    return r(v) ?
                                        x ? "secondary-active" : "primary-active" : t(v) ? x ? "secondary-low" : "primary-low" : x ? "secondary-default" : "primary-default"
                                }, [l, n, t, r]);
                                return L5(U5, { ...f,
                                    xd: q,
                                    Td: g,
                                    rl: p,
                                    Bx: u,
                                    qy: b
                                })
                            });
                        return {
                            LDa: c,
                            KDa: d,
                            MDa: e
                        }
                    },
                    uGb = function(a) {
                        const b = a.fm,
                            c = () => null;
                        return __c.JD(d => L5(V5, { ...d,
                            fm: b,
                            Lf: c
                        }))
                    },
                    vGb = function({
                        sheet: a,
                        O: b,
                        range: c,
                        Sh: d
                    }) {
                        W5(() => X5(() => {
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
                    yGb = function({
                        onScroll: a
                    }) {
                        const b = new wGb(a);
                        return {
                            Qv: b,
                            s4: R5(c => L5(xGb, {
                                sheet: c.sheet,
                                Qv: b,
                                children: c.children
                            }))
                        }
                    },
                    BGb = function(a) {
                        const b = a.fm,
                            c = a.ke,
                            d = a.Pza,
                            e = ({
                                children: k
                            }) => k,
                            {
                                Qv: f,
                                s4: g
                            } = yGb({
                                onScroll: a.onScroll
                            });
                        class h extends zGb {
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
                                d.Cza(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                })
                            }
                            componentWillUnmount() {
                                d.xHa(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                })
                            }
                            render() {
                                d.Cza(this.props.item, {
                                    bb: this.props.bb,
                                    V: this.props.V
                                });
                                return L5(AGb, { ...this.props,
                                    O: this.O,
                                    fm: b,
                                    lD: this.lD,
                                    Lf: this.Lf,
                                    Pza: d,
                                    Qv: f
                                })
                            }
                            constructor(...k) {
                                super(...k);
                                this.O = Y5(() => {
                                    const l = this.props.item;
                                    var m = this.props.V,
                                        n = m.Eu;
                                    m = m.zoom;
                                    switch (n) {
                                        case "screen":
                                            return m;
                                        case "print":
                                            n = d.iNa(l);
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
                                this.Lf = R5(l => L5("div", {
                                    className: "wKvivQ",
                                    children: L5(__c.mya, { ...this.props,
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
                    CGb = function(a, b) {
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
                    EGb = function(a) {
                        const b = a.fm,
                            c = () => null;
                        return d => L5(DGb, { ...d,
                            fm: b,
                            Lf: c
                        })
                    },
                    IGb = function(a) {
                        const b = {
                                transform: "translate(-1000px, -1000px) scale(0)"
                            },
                            c = {
                                Tla: b,
                                yq: b,
                                ya: {},
                                fk: {}
                            },
                            d = Z5(() => a.Et.style || c, h => {
                                var k;
                                Object.assign(a.FV.style, h.Tla);
                                Object.assign(a.HD.style, h.yq);
                                Object.assign(a.Qw.style, h.ya);
                                Object.assign(a.Vw.style, h.fk);
                                h = h === null || h === void 0 ? void 0 : (k = h.ya) === null || k === void 0 ? void 0 : k.textDecoration;
                                a.Qw.classList.toggle("OQx3PQ", h === "underline");
                                a.Qw.classList.toggle("_99ezUA", h === "line-through");
                                a.Qw.classList.toggle("kppAqQ", h === "underline line-through")
                            }, {
                                fireImmediately: !0,
                                equals: FGb
                            }),
                            e = Z5(() => a.aaa, h => {
                                a.Qw.classList.toggle("_84KvRA", !h);
                                a.FV.classList.toggle("_84KvRA", !h);
                                a.HD.classList.toggle("TL_RLA", !h)
                            }, {
                                fireImmediately: !0
                            }),
                            f = Z5(() => a.renderer, h => {
                                a.jW && (h === null || h === void 0 ? void 0 : h.type) !== "react" ? (a.jW = void 0, a.TR.remove()) : a.Vw.innerHTML = "";
                                switch (h === null || h === void 0 ? void 0 : h.type) {
                                    case "react":
                                        a.jW = GGb(h.node, a.TR);
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
                            g = HGb ? Z5(() => a.W9, h => {
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
                    FGb = function(a, b) {
                        return JSON.stringify(a) === JSON.stringify(b)
                    },
                    KGb = function(a) {
                        const b = a.At,
                            c = a.Wv,
                            d = a.ow,
                            e = a.OCa,
                            f = a.yx,
                            g = new JGb(c),
                            h = (k, l) => f ? ZFb(f, k, l) : !1;
                        return k => L5($5, { ...k,
                            tF: h,
                            ow: d,
                            Wv: c,
                            At: b,
                            F$: g,
                            OCa: e === null || e === void 0 ? void 0 : e.get()
                        })
                    },
                    J5 = (a, b) => `${a.column.id}-${a.boundary}:${b.ea.id}-${b.boundary}`,
                    mGb = ({
                        lf: a,
                        XH: b
                    }) => c => (0, __c.N)(__c.Lab, { ...c,
                        lf: a,
                        XH: b
                    }),
                    a6 = __webpack_require__(443763),
                    LGb = a6.Fragment,
                    L5 = a6.jsx,
                    N5 = a6.jsxs;
                var MGb = __webpack_require__,
                    NGb = MGb(993864),
                    O5 = MGb.n_x(NGb)();
                var R5 = __webpack_require__(446474).Pi;
                var b6 = __webpack_require__(875604),
                    c6 = b6.Component,
                    zGb = b6.PureComponent,
                    S5 = b6.useCallback,
                    W5 = b6.useEffect,
                    OGb = b6.useLayoutEffect,
                    Q5 = b6.useMemo,
                    d6 = b6.useRef;
                var e6 = __webpack_require__(519427),
                    f6 = e6.action,
                    X5 = e6.autorun,
                    g6 = e6.comparer,
                    Y5 = e6.computed,
                    PGb = e6.createAtom,
                    h6 = e6.observable,
                    Z5 = e6.reaction,
                    QGb = e6.untracked;
                var i6 = __webpack_require__(635872),
                    j6 = i6.Om,
                    RGb = i6.kq,
                    SGb = i6.YN;
                var k6 = __webpack_require__(937763)._;
                var l6 = __webpack_require__(161563)._;
                var TGb = __webpack_require__(358579).Z;
                var GGb = __webpack_require__(36281).createPortal;
                var UGb = class {
                        static A(a) {
                            P(a, {
                                viewBox: h6.ref
                            })
                        }
                        constructor() {
                            this.viewBox = (UGb.A(this), vm({
                                top: 0,
                                left: 0,
                                height: 0,
                                width: 0
                            }));
                            this.aWa = a => {
                                this.viewBox.equals(a) || (this.viewBox = a)
                            }
                        }
                    },
                    VGb = R5(a => {
                        var b, c, d = a.sheet.direction === "rtl";
                        d = {
                            H2wykw: !d,
                            UweldA: d
                        };
                        const e = d6(new UGb),
                            f = f6(() => {
                                if (a.q3) {
                                    var h = a.q3.current;
                                    h && e.current.aWa(vm({
                                        top: h.scrollTop,
                                        left: h.scrollLeft,
                                        height: h.clientHeight,
                                        width: h.clientWidth
                                    }))
                                }
                            });
                        W5(() => {
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
                        const g = Q5(() => ({
                            get: () => e.current.viewBox
                        }), []);
                        return N5("div", {
                            className: O5("nMvVqA", d),
                            children: [N5("div", {
                                ref: a.Sh,
                                className: "_0YOFPg",
                                children: [L5(a.fm, { ...a,
                                    viewport: g
                                }), L5("div", {
                                    className: O5("Gdl7fQ", d),
                                    children: (c = a.aja) === null || c === void 0 ? void 0 : (b = c.get()) === null ||
                                        b === void 0 ? void 0 : b.map((h, k) => L5(h, {}, k))
                                })]
                            }), a.T6a === "visible" && N5(LGb, {
                                children: [L5("div", {
                                    className: O5("_32sKQw", d),
                                    children: L5(a.NEa, { ...a
                                    })
                                }), L5("div", {
                                    className: O5("xdIsTQ", d),
                                    children: L5(a.QEa, { ...a
                                    })
                                }), L5("div", {
                                    className: O5("rsTRSA", d),
                                    children: L5(a.PEa, { ...a
                                    })
                                })]
                            })]
                        })
                    }),
                    WGb = R5(a => {
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
                var XGb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.996 19.995a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM13.762 9.17a.75.75 0 0 1 1.06 1.06l-1.766 1.766 1.766 1.767a.75.75 0 0 1-1.06 1.06l-1.766-1.766-1.767 1.766a.75.75 0 0 1-1.06-1.06l1.766-1.767L9.17 10.23a.75.75 0 0 1 1.06-1.06l1.767 1.766 1.766-1.766Z" fill="currentColor"/></svg>';
                var kGb = __c.zS({
                    medium: XGb
                });
                var nGb = (a, b) => __c.Rxa((c, d) => {
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
                            je: YGb(e, c),
                            Ja: b
                        })
                    }),
                    YGb = j6((a, b) => {
                        if (b === "wrap") return [];
                        a = a.value.T.split("\n").map(c => c.length + 1);
                        a.pop();
                        return a
                    }, {
                        equals: g6.structural
                    });
                var ZGb, $Gb, aHb, M5;
                new(ZGb = class extends k6 {
                    constructor() {
                        super(M5);
                        $Gb()
                    }
                }, (() => {
                    class a extends(aHb = c6) {
                        static A(b) {
                            P(b, {
                                rf: Y5
                            })
                        }
                        get rf() {
                            return __c.$g(__c.Gh, this.props.context.attrs).rf
                        }
                        render() {
                            var b = this.props.content;
                            const c = this.props.context;
                            if (b.value.isEmpty) return null;
                            b = L5(this.props.Lf, {
                                content: b,
                                ea: c.container.ea,
                                col: c.container.column,
                                rf: this.rf
                            });
                            return this.rf === "wrap" ? L5("div", {
                                className: "dt4Dlg",
                                children: b
                            }) : b
                        }
                        constructor(...b) {
                            super(...b);
                            a.A(this)
                        }
                    }({
                        c: [M5, $Gb]
                    } = l6(a, [], [Jc], aHb))
                })(), ZGb);
                var bHb = __c.ql * 5,
                    cHb = __c.ql * 4;
                var sGb = class {
                    rl({
                        size: a,
                        scale: b,
                        Taa: c
                    }) {
                        b = c ? Math.max(c, b) : b;
                        return a === "large" ? bHb * b : cHb * b
                    }
                    constructor() {
                        this.IPa = j6((a, b) => {
                            var c, d;
                            b = b.get();
                            return b != null && a.layout.rows.count() === (((c = b.rows) === null || c === void 0 ? void 0 : c.size) || 0) && a.layout.cols.count() === (((d = b.columns) === null || d === void 0 ? void 0 : d.size) || 0)
                        });
                        this.Ada = RGb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 : b.columns) || [])
                        }, {
                            equals: __c.El
                        });
                        this.Cda = RGb(a => {
                            var b;
                            return new Set(((b = a.get()) === null || b === void 0 ? void 0 :
                                b.rows) || [])
                        }, {
                            equals: __c.El
                        });
                        this.ONa = j6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Cda(b).size > 0) return new Set(a.layout.cols);
                            b = this.Ada(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of gGb(c ? c.span.qb : e.column, c ? c.span.Qb : e.column, a.layout.cols))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.El
                        });
                        this.PNa = j6((a, b) => {
                            var {
                                cells: c
                            } = b.get() || {};
                            if (!c) return new Set;
                            if (this.Ada(b).size > 0) return new Set(a.layout.rows);
                            b = this.Cda(b);
                            const d = new Set;
                            for (const e of c) {
                                c = a.layout.cells.get(e.ea, e.column);
                                for (const f of gGb(c ? c.span.ub : e.ea, c ? c.span.kc : e.ea, a.layout.rows))(b.size === 0 || b.has(f)) && d.add(f)
                            }
                            return d
                        }, {
                            equals: __c.El
                        })
                    }
                };
                var dHb, eHb, fHb, gHb, hHb, iHb, jHb = parseInt("4px", 10) || 4,
                    kHb = parseInt("0.5px", 10) || .5,
                    lHb = parseInt("1px", 10) || 1,
                    mHb = parseInt("0.5px", 10) || .5,
                    nHb = parseInt("0.5px", 10) || .5,
                    oHb = parseInt("1px", 10) || 1,
                    pHb = parseInt("0.5px", 10) || .5,
                    T5;
                new(dHb = class extends k6 {
                    constructor() {
                        super(T5);
                        fHb()
                    }
                }, (() => {
                    class a extends(gHb = c6) {
                        static A(b) {
                            P(b, {
                                Ei: Y5,
                                As: Y5,
                                XS: Y5
                            })
                        }
                        get Ei() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.nl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.cJ(c)
                        }
                        get XS() {
                            var b, c, d;
                            return (c = (d = this.props).A9) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return L5(__c.nl, {
                                ym: "light",
                                light: "light",
                                Mo: "light",
                                dark: "light",
                                children: this.LHa
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (T5.A(this), f6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    xd: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "column", f)
                            }));
                            this.onMouseLeave = f6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Mxa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    rl: g,
                                    Bx: h,
                                    b7a: k,
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
                                return N5("div", {
                                    style: r,
                                    className: O5("Vt2_4w", n, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.layout.cols.map(u => {
                                        var v;
                                        t++;
                                        if (!(c && f.layout.cols.Dd(u, c) < 0 || d && f.layout.cols.Dd(u, d) > 0)) return L5(qHb, {
                                            col: u,
                                            label: __c.SC(t),
                                            du: k === null || k === void 0 ? void 0 : (v = k.get()) === null || v === void 0 ? void 0 : v.get(u),
                                            rl: g,
                                            Bx: h,
                                            xd: l,
                                            Td: m
                                        }, u.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && L5("div", {
                                        style: {
                                            width: jHb * l
                                        },
                                        className: O5("HBvlug", "ru3tFQ",
                                            n)
                                    })]
                                })
                            };
                            this.LHa = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.qA ? e.layout.$c.get(e.view.freeze.qA) : void 0,
                                    g = {
                                        jNbTIg: !this.Ei,
                                        gtA7Dw: this.Ei
                                    };
                                return N5("div", {
                                    ref: (d = this.As) === null || d === void 0 ? void 0 : d.mo,
                                    className: O5("xhBZaw", g, c.className),
                                    children: [f && this.Mxa(void 0, f, {
                                        sticky: !0
                                    }), this.Mxa(f ? e.cols.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [T5, fHb]
                    } = l6(a, [], [Jc], gHb))
                })(), dHb);
                var U5;
                new(eHb = class extends k6 {
                    constructor() {
                        super(U5);
                        hHb()
                    }
                }, (() => {
                    class a extends(iHb = c6) {
                        static A(b) {
                            P(b, {
                                Ei: Y5,
                                As: Y5,
                                XS: Y5
                            })
                        }
                        get Ei() {
                            return this.props.sheet.direction === "rtl"
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.nl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.cJ(c)
                        }
                        get XS() {
                            var b, c, d;
                            return (c = (d = this.props).A9) === null || c === void 0 ? void 0 : (b = c.call(d)) === null || b === void 0 ? void 0 : b.get()
                        }
                        render() {
                            return L5(__c.nl, {
                                ym: "light",
                                light: "light",
                                Mo: "light",
                                dark: "light",
                                children: this.$Ua
                            })
                        }
                        constructor(...b) {
                            super(...b);
                            this.onMouseMove = (U5.A(this), f6(c => {
                                const {
                                    onMouseMove: d,
                                    sheet: e,
                                    Td: f = 1
                                } = this.props;
                                d === null || d === void 0 || d(c, e, "row", f)
                            }));
                            this.onMouseLeave = f6(c => {
                                var d, e;
                                (d = (e = this.props).onMouseLeave) === null || d === void 0 || d.call(e, c)
                            });
                            this.Pxa = (c, d, e) => {
                                const {
                                    sheet: f,
                                    rl: g,
                                    Bx: h,
                                    xd: k = 1,
                                    Td: l = 1
                                } = this.props, m = {
                                    jNbTIg: !this.Ei,
                                    gtA7Dw: this.Ei
                                }, n = (e === null || e === void 0 ? 0 : e.sticky) ? {
                                    top: 0
                                } : void 0;
                                var p;
                                const q = (e === null || e === void 0 ? 0 : e.sticky) ? (p = this.XS) !== null && p !== void 0 ? p : n : void 0;
                                let r = -1;
                                return N5("div", {
                                    style: q,
                                    className: O5("_93roJg", m, {
                                        Tn3nUw: e === null || e === void 0 ? void 0 : e.sticky
                                    }),
                                    onMouseMove: this.onMouseMove,
                                    onMouseLeave: this.onMouseLeave,
                                    children: [f.rows.map(t => {
                                        r++;
                                        if (!(c && f.rows.Dd(t, c) < 0 || d && f.rows.Dd(t, d) > 0)) return L5(rHb, {
                                            ea: t,
                                            label: `${r+1}`,
                                            Bx: h,
                                            rl: g,
                                            xd: k,
                                            Td: l
                                        }, t.id)
                                    }), (e === null || e === void 0 ? void 0 : e.sticky) && L5("div", {
                                        style: {
                                            height: jHb * l
                                        },
                                        className: O5("HBvlug", "koz2Hg")
                                    })]
                                })
                            };
                            this.$Ua = c => {
                                var d;
                                const e = this.props.sheet,
                                    f = e.view.freeze.iL ? e.layout.qd.get(e.view.freeze.iL) : void 0,
                                    g = {
                                        jNbTIg: !this.Ei,
                                        gtA7Dw: this.Ei
                                    };
                                return N5("div", {
                                    ref: (d = this.As) === null || d === void 0 ? void 0 : d.mo,
                                    className: O5("An9VeA", g, c.className),
                                    children: [f && this.Pxa(void 0, f, {
                                        sticky: !0
                                    }), this.Pxa(f ? e.rows.next(f) : void 0)]
                                })
                            }
                        }
                    }({
                        c: [U5, hHb]
                    } = l6(a, [], [Jc], iHb))
                })(), eHb);
                var qHb = R5(a => {
                        const b = a.label,
                            c = a.du,
                            d = a.col,
                            e = a.Bx,
                            f = a.rl,
                            g = a.xd;
                        a = a.Td;
                        const h = f(a),
                            k = SGb(() => e(d));
                        return L5("div", {
                            className: O5("_83Rssw", "d2uLIA", P5(k)),
                            style: {
                                width: d.width * g,
                                height: h,
                                borderInlineWidth: `${kHb*g}px`,
                                borderBlockStartWidth: `${lHb*g}px`,
                                borderBlockEndWidth: `${mHb*g}px`
                            },
                            children: L5(pGb, {
                                label: b,
                                du: c,
                                width: d.width,
                                height: f(1),
                                scale: a,
                                xma: k
                            })
                        })
                    }),
                    rHb = R5(a => {
                        const b = a.label,
                            c = a.ea,
                            d = a.rl,
                            e = a.Bx,
                            f = a.xd;
                        a = a.Td;
                        const g = d(f),
                            h = SGb(() => e(c));
                        return L5("div", {
                            className: O5("_83Rssw", "JhBzyw",
                                P5(h)),
                            style: {
                                width: g,
                                height: c.height * a,
                                borderBlockWidth: `${nHb*a}px`,
                                borderInlineStartWidth: `${oHb*a}px`,
                                borderInlineEndWidth: `${pHb*a}px`
                            },
                            children: L5(pGb, {
                                label: b,
                                width: d(1),
                                height: c.height,
                                scale: f,
                                xma: h
                            })
                        })
                    });
                var sHb = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="6" cy="6" r="5.5"/></svg>';
                var tHb = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle stroke="currentColor" cx="12" cy="12" r="9.25" stroke-width="1.5"/></svg>';
                var qGb = __c.zS({
                    aq: sHb,
                    medium: tHb
                });
                var uHb, vHb, wHb, V5;
                new(uHb = class extends k6 {
                    constructor() {
                        super(V5);
                        vHb()
                    }
                }, (() => {
                    class a extends(wHb = c6) {
                        static A(b) {
                            P(b, {
                                ld: Y5.struct
                            })
                        }
                        render() {
                            const b = this.props.element;
                            return L5(this.props.fm, {
                                sheet: b.Y.config,
                                container: b,
                                pV: "visible",
                                nl: this.props.nl,
                                fp: this.props.fp,
                                gp: this.props.gp,
                                O: this.props.O,
                                ld: this.ld,
                                Lf: this.props.Lf,
                                Uz: void 0
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
                        c: [V5, vHb]
                    } = l6(a, [], [Jc], wHb))
                })(), uHb);
                var xHb = class {
                    constructor() {
                        this.a1 = new WeakMap;
                        this.iNa = a => this.a1.get(a);
                        this.Cza = (a, b) => {
                            this.a1.set(a, b)
                        };
                        this.xHa = (a, b) => {
                            const c = this.a1.get(a);
                            c && c.V === b.V && c.bb === b.bb && this.a1.delete(a)
                        }
                    }
                };
                var m6 = parseInt("4px", 10) || 4,
                    yHb = R5(({
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
                            if (d && e) return d = a.la(c.kc) + c.kc.height, a = a.ia(c.Qb) + c.Qb.width, L5("div", {
                                style: {
                                    top: d * b,
                                    width: a * b,
                                    height: m6 * b
                                },
                                className: O5("aX8dhQ", "VGcLng")
                            });
                            if (d) return c = a.ia(c.Qb) + c.Qb.width, L5("div", {
                                style: {
                                    width: m6 * b,
                                    height: a.height * b,
                                    ...(f ? {
                                        right: c * b
                                    } : {
                                        left: c * b
                                    })
                                },
                                className: O5("aX8dhQ", "gl1RPg",
                                    g)
                            });
                            if (e) return c = a.la(c.kc) + c.kc.height, L5("div", {
                                style: {
                                    top: c * b,
                                    width: a.width * b,
                                    height: m6 * b
                                },
                                className: O5("aX8dhQ", "VGcLng")
                            })
                        }
                    });
                var n6 = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = K5();
                        vGb({
                            sheet: a,
                            O: c,
                            range: b,
                            Sh: e
                        });
                        return L5("div", {
                            ref: e,
                            className: O5("nstn2A", a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ"),
                            children: d
                        })
                    },
                    zHb = ({
                        sheet: a,
                        range: b,
                        O: c,
                        children: d
                    }) => {
                        const e = K5();
                        vGb({
                            sheet: a,
                            O: c,
                            range: b,
                            Sh: e
                        });
                        a = a.direction === "rtl" ? "NgnL2Q" : "f8jAGQ";
                        return L5("div", {
                            className: O5("nstn2A", a, "_9sodyg"),
                            children: L5("div", {
                                ref: e,
                                className: O5("nstn2A", a),
                                children: d
                            })
                        })
                    };
                var xGb = R5(({
                        sheet: a,
                        children: b,
                        Qv: c
                    }) => {
                        const d = S5(f => {
                                c.Mda(a, f)
                            }, [c, a]),
                            e = S5(f => {
                                f != null ? c.Rv.set(a, f) : c.Rv.delete(a)
                            }, [c, a]);
                        return L5(__c.yeb, {
                            direction: a.config.direction === "rtl" ? "rtl" : "ltr",
                            onScroll: d,
                            kC: e,
                            children: b
                        })
                    }),
                    wGb = class {
                        Mda(a, b) {
                            this.onScroll && this.onScroll(a);
                            this.rS.set(a, b)
                        }
                        constructor(a) {
                            this.onScroll = a;
                            this.Rv = new WeakMap;
                            this.rS = h6.map(new Map, {
                                deep: !1
                            });
                            this.scrollTo = f6((b, c) => {
                                b = this.Rv.get(b);
                                b === null || b === void 0 || b.scrollTo({
                                    left: Math.floor(c)
                                })
                            })
                        }
                    };
                var AGb = R5(a => {
                    const b = a.item,
                        c = a.nl,
                        d = a.ue,
                        e = a.measureRef,
                        f = a.O,
                        g = a.ura,
                        h = a.bb,
                        k = a.fp,
                        l = a.gp,
                        m = a.fm,
                        n = a.lD,
                        p = a.Lf,
                        q = a.zd,
                        r = a.Qv;
                    a = Q5(() => __c.dD(b.Ea, q), [b, q]);
                    const t = Q5(() => R5(({
                            sheet: y,
                            range: z,
                            Kq: B,
                            Lq: D
                        }) => L5(n6, {
                            sheet: y,
                            range: z,
                            O: f,
                            children: L5(yHb, {
                                sheet: y,
                                O: f,
                                range: z,
                                Kq: B,
                                Lq: D
                            })
                        })), [f]),
                        u = hGb(b.config),
                        v = f.get(),
                        x = Math.min(u.width * v, h.width);
                    W5(() => X5(() => {
                        var y = b.config.view.freeze.qA ? b.config.layout.$c.get(b.config.view.freeze.qA) : void 0;
                        if (y != null)
                            if (b.config.ia(y) + y.width > x) {
                                if (y = r.Rv.get(b)) y.style.overflowX =
                                    "hidden"
                            } else if (y = r.Rv.get(b)) y.style.overflowX = "scroll"
                    }), [b, h.width, r, v, x]);
                    return L5("div", {
                        ref: e,
                        className: "E8r86A",
                        style: {
                            width: x
                        },
                        children: L5(n, {
                            sheet: b,
                            children: L5("div", {
                                ref: g,
                                className: "cXTiJA",
                                style: {
                                    width: u.width * v,
                                    height: u.height * v
                                },
                                children: L5("div", {
                                    className: "W1ir5A",
                                    children: L5(m, {
                                        container: d.rh(b),
                                        sheet: b.config,
                                        pV: "visible",
                                        nl: c,
                                        O: f,
                                        fp: k,
                                        gp: l,
                                        ld: a,
                                        Lf: p,
                                        Uz: t
                                    })
                                })
                            })
                        })
                    })
                });
                var AHb = R5(({
                    page: a,
                    range: b,
                    Lv: c
                }) => {
                    const d = CGb(a.sheet, b);
                    return L5("div", {
                        className: "Gi9pfA",
                        children: a.elements.map((e, f) => d == null ? c(e, f) : __c.tm(vm(e)).wl(d) && c(e, f))
                    })
                });
                var BHb = new __c.UT,
                    o6 = a => bHb * a,
                    CHb = () => "primary-default",
                    DGb = R5(({
                        container: a,
                        nl: b,
                        fp: c,
                        gp: d,
                        sP: e,
                        O: f,
                        viewport: g,
                        pWa: h,
                        fm: k,
                        Lf: l,
                        Lv: m,
                        t0: n,
                        t0a: p,
                        u_a: q,
                        t_a: r
                    }) => {
                        const t = a.page,
                            u = Q5(() => R5(({
                                sheet: v,
                                range: x,
                                Kq: y,
                                Lq: z
                            }) => N5(LGb, {
                                children: [L5(n6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: L5(yHb, {
                                        sheet: v,
                                        O: f,
                                        range: x,
                                        Kq: y,
                                        Lq: z
                                    })
                                }), N5(zHb, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: [p && L5(p, {}), m && L5(AHb, {
                                        page: t,
                                        Lv: m,
                                        range: x
                                    }), r && L5(r, {}), n && n()]
                                }), q && x && L5(n6, {
                                    sheet: t.sheet,
                                    range: x,
                                    O: f,
                                    children: L5(q, {
                                        range: x
                                    })
                                })]
                            })), [t, f, p, m, r, n, q]);
                        return h ? L5(DHb, {
                            container: a,
                            viewport: g,
                            O: f,
                            nl: b,
                            fp: c,
                            gp: d,
                            fm: k,
                            Lf: l,
                            Uz: u
                        }) : L5(k, {
                            sheet: t.sheet,
                            container: a,
                            pV: "hidden",
                            nl: b,
                            fp: c,
                            gp: d,
                            sP: e,
                            O: f,
                            viewport: g,
                            Lf: l,
                            Uz: u
                        })
                    }),
                    DHb = R5(a => {
                        const b = a.container,
                            c = a.O,
                            d = a.viewport,
                            e = a.nl,
                            f = a.fp,
                            g = a.gp,
                            h = a.fm,
                            k = a.Lf;
                        a = a.Uz;
                        const l = b.page,
                            m = l.sheet.direction === "rtl",
                            n = d6(null),
                            p = d6(null),
                            q = d6(null);
                        W5(() => {
                            const y = p6({
                                sheet: l.sheet,
                                K1: !0,
                                L1: !0,
                                O: c,
                                viewport: d
                            });
                            return Z5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
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
                        W5(() => {
                            const y = p6({
                                sheet: l.sheet,
                                K1: !1,
                                L1: !0,
                                O: c,
                                viewport: d
                            });
                            return Z5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
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
                        W5(() => {
                            const y = p6({
                                sheet: l.sheet,
                                K1: !0,
                                L1: !1,
                                O: c,
                                viewport: d
                            });
                            return Z5(() => y === null || y === void 0 ? void 0 : y.get(), z => {
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
                        const r = S5((y, z, B) => p6({
                                sheet: y,
                                K1: z,
                                L1: B,
                                O: c,
                                viewport: d
                            }), [c, d]),
                            t = Q5(() => r ? () => r(l.sheet, !0, !1) : void 0, [r, l.sheet]),
                            u = Q5(() => r ? () => r(l.sheet, !1, !0) : void 0, [r, l.sheet]);
                        var v;
                        const x = (v = c === null || c === void 0 ? void 0 : c.get()) !== null && v !== void 0 ? v : 1;
                        return N5("div", {
                            className: O5("OsKKIQ", "cbOp6Q"),
                            children: [L5("div", {
                                className: "VDFv_A",
                                children: L5(h, {
                                    sheet: l.sheet,
                                    container: b,
                                    pV: "hidden",
                                    nl: e,
                                    fp: f,
                                    gp: g,
                                    sP: r,
                                    O: c,
                                    viewport: d,
                                    Lf: k,
                                    Uz: a
                                })
                            }), L5("div", {
                                ref: n,
                                className: "_688KWg",
                                children: L5(rGb, {
                                    Ei: m,
                                    Vqa: !1,
                                    rl: o6,
                                    scale: x
                                })
                            }), L5("div", {
                                ref: q,
                                className: "m0cT1w",
                                children: L5(T5, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    rl: o6,
                                    Bx: CHb,
                                    qy: BHb,
                                    A9: t
                                })
                            }), L5("div", {
                                ref: p,
                                className: "zm537g",
                                children: L5(U5, {
                                    sheet: l.sheet,
                                    xd: x,
                                    Td: x,
                                    rl: o6,
                                    Bx: CHb,
                                    qy: BHb,
                                    A9: u
                                })
                            })]
                        })
                    }),
                    p6 = ({
                        sheet: a,
                        K1: b,
                        L1: c,
                        O: d,
                        viewport: e
                    }) => Y5(() => {
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
                var JGb = class {
                    constructor(a) {
                        this.Wv = a;
                        this.mHa = __c.NV;
                        this.PMa = j6((b, c, d, e) => {
                            d = d.get();
                            const f = new WeakMap;
                            for (let t = 0; t < d.length; t++) {
                                var g = d[t],
                                    h = this.KMa(b, c, g);
                                if (h) {
                                    switch (h) {
                                        case "start":
                                        case "justify":
                                            var k = d[t + 1];
                                            if (k == null || !uM(b, c, k)) continue;
                                            break;
                                        case "center":
                                            k = d[t + 1];
                                            if (k == null || !uM(b, c, k)) continue;
                                            k = d[t - 1];
                                            if (k == null || !uM(b, c, k)) continue;
                                            break;
                                        case "end":
                                            k = d[t - 1];
                                            if (k == null || !uM(b, c, k)) continue;
                                            break;
                                        default:
                                            throw new E(h);
                                    }
                                    if (k = e(c, g)) {
                                        var l = k.width + (h === "center" ? 0 : this.mHa);
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
                                                    n = l - 1 < 0 || uM(b, c, d[l - 1]),
                                                    p;
                                                if (p = m === g || uM(b, c, m)) {
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
                                                if (m = uM(b, c, l)) m = h, n = k, p = b.ia(l), m = m < p && p < n;
                                                if (m) f.set(l, 1);
                                                else break
                                            }
                                        }
                                    }
                                }
                            }
                            return f
                        });
                        this.KMa = (b, c, d) => {
                            var e, f;
                            const g =
                                b.layout.cells.get(c, d);
                            if (g && (g.ref.content.ref || g.ref.pa.ref) && g.span.ub === g.span.kc && g.span.qb === g.span.Qb) {
                                var h = this.Wv.Mq(b, c, d);
                                b = this.Wv.w9(b, c, d, __c.Hh({
                                    rf: void 0,
                                    textAlign: void 0
                                }));
                                var {
                                    rf: k,
                                    textAlign: l
                                } = __c.$g(__c.Gh, b);
                                if (k === "overflow") return __c.Sxa(l, (e = g.ref.content.ref) === null || e === void 0 ? void 0 : e.type, (f = g.ref.pa.ref) === null || f === void 0 ? void 0 : f.type, h ? () => h.Zh.type : void 0)
                            }
                        }
                    }
                };
                var EHb = R5(function(a) {
                    const b = a.sheet;
                    var c = a.zf;
                    const d = a.iZa,
                        e = a.O,
                        f = a.F$,
                        g = a.AMa;
                    a = a.overflow;
                    const h = K5();
                    OGb(() => X5(() => {
                        const p = C(h.current);
                        var q;
                        const r = (q = e === null || e === void 0 ? void 0 : e.get()) !== null && q !== void 0 ? q : 1;
                        q = b.height;
                        p.style.width = `${b.width*r}px`;
                        p.style.height = `${q*r}px`
                    }), [h, e, b]);
                    const k = S5(p => f.PMa(b, p, d, g), [f, b, d, g]);
                    var l = S5((p, q) => {
                        var r, t;
                        return (t = (r = k(p)) === null || r === void 0 ? void 0 : r.get(q)) !== null && t !== void 0 ? t : 0
                    }, [k]);
                    c = eGb(b, c, d, l);
                    l = b.width;
                    const m = b.height,
                        n = b.direction ===
                        "rtl";
                    return L5("svg", {
                        ref: h,
                        role: "presentation",
                        className: O5("c6a1eQ", {
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
                            Uh: u
                        }) => L5("path", {
                            stroke: q,
                            strokeDasharray: t,
                            strokeDashoffset: u,
                            strokeWidth: r,
                            d: p.map(({
                                p1: v,
                                p2: x
                            }) => `M ${v.x} ${v.y} L ${x.x} ${x.y}`).join(" ")
                        }, `${q}-${r}-${t}-${u}`))
                    })
                });
                var FHb;
                FHb = Symbol.iterator;
                var GHb = class {
                    get size() {
                        return this.m1
                    }
                    get([a, b]) {
                        return (a = this.Yx.get(a)) ? a.get(b) : void 0
                    }
                    has([a, b]) {
                        a = this.Yx.get(a);
                        return a == null ? !1 : a.has(b)
                    }
                    set([a, b], c) {
                        let d = this.Yx.get(a);
                        d == null && (d = new Map, this.Yx.set(a, d));
                        d.set(b, c);
                        this.m1++;
                        return this
                    }
                    clear() {
                        this.Yx.clear();
                        this.m1 = 0
                    }
                    delete([a, b]) {
                        const c = this.Yx.get(a);
                        if (c == null || !c.delete(b)) return !1;
                        this.m1--;
                        c.size === 0 && this.Yx.delete(a);
                        return !0
                    }
                    forEach(a) {
                        for (const [b, c] of this.Yx)
                            for (const [d, e] of c) a([b, d], e)
                    }*[FHb]() {
                        for (const [a, b] of this.Yx)
                            for (const [c,
                                    d
                                ] of b) yield [
                                [a, c], d
                            ]
                    }
                    constructor() {
                        this.m1 = 0;
                        this.Yx = new Map
                    }
                };
                var HHb, IHb, JHb, KHb, LHb, MHb, NHb, HGb = __c.tA("285688d5", !1),
                    OHb, PHb = class extends c6 {
                        render() {
                            const {
                                TX: a,
                                ...b
                            } = this.props, c = this.props.sheet;
                            return N5("div", {
                                ref: this.Rza,
                                className: O5("ZTz_iA", c.direction === "ltr" ? "TA4X7w" : "WvuqMw"),
                                children: [(a === null || a === void 0 ? void 0 : a.gla) && L5(q6, { ...b,
                                    sheet: c,
                                    range: a.gla.range,
                                    Kq: !0,
                                    Lq: !0,
                                    className: "_0C8M3w"
                                }), (a === null || a === void 0 ? void 0 : a.WCa) && L5(q6, { ...b,
                                    sheet: c,
                                    range: a.WCa.range,
                                    Kq: !1,
                                    Lq: !0,
                                    className: "_7n44yg"
                                }), (a === null || a === void 0 ? void 0 : a.Xqa) && L5(q6, { ...b,
                                    sheet: c,
                                    range: a.Xqa.range,
                                    Kq: !0,
                                    Lq: !1,
                                    className: "fF5r6w"
                                }), (a === null || a === void 0 ? void 0 : a.ZBa) && L5(q6, { ...b,
                                    sheet: c,
                                    range: a.ZBa.range,
                                    Kq: !1,
                                    Lq: !1,
                                    className: "llILYw"
                                })]
                            })
                        }
                        componentDidMount() {
                            const a = X5(() => {
                                var b = this.props,
                                    c = b.O;
                                b = b.sheet;
                                const d = this.Rza.current;
                                d && (c = c ? c.get() : 1, d.style.width = `${b.width*c}px`, d.style.height = `${b.height*c}px`)
                            });
                            __c.rc(this, [a])
                        }
                        constructor(...a) {
                            super(...a);
                            this.Rza = xD()
                        }
                    };
                ({
                    c: [OHb, JHb]
                } = l6(PHb, [], [Jc], c6));
                JHb();
                var q6;
                new(HHb = class extends k6 {
                    constructor() {
                        super(q6);
                        KHb()
                    }
                }, (() => {
                    class a extends(LHb = c6) {
                        static A(b) {
                            P(b, {
                                Uda: Y5,
                                bounds: Y5
                            })
                        }
                        get Uda() {
                            const b = this.props.viewport,
                                c = this.props.Kq,
                                d = this.props.Lq;
                            return b == null || !c && !d ? b : Y5(() => {
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
                                f = this.props.Uz,
                                g = this.props.Kq,
                                h = this.props.Lq;
                            return N5("div", {
                                ref: this.bca,
                                className: O5("i0YQww",
                                    this.props.className),
                                children: [L5("div", {
                                    ref: this.owa,
                                    className: "vUKoKg",
                                    children: L5("div", {
                                        ref: this.pwa,
                                        children: L5(r6, {
                                            tF: b,
                                            sheet: c,
                                            container: d,
                                            bounds: e,
                                            nl: this.props.nl,
                                            ow: this.props.ow,
                                            Lf: this.props.Lf,
                                            bO: this.props.bO,
                                            O: this.props.O,
                                            zf: this.zf,
                                            WT: this.WT,
                                            UI: this.UI
                                        })
                                    })
                                }), L5(this.w4, {}), f && L5(f, {
                                    sheet: c,
                                    range: e,
                                    Kq: g,
                                    Lq: h
                                })]
                            })
                        }
                        componentDidMount() {
                            const b = X5(() => {
                                    var h = this.props,
                                        k = h.O,
                                        l = h.sheet;
                                    const m = h.range;
                                    var n = this.bca.current;
                                    const p = this.owa.current;
                                    h = this.pwa.current;
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
                            d = X5(() => {
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
                                        var u;
                                        h.style.right = p ? (u = x.right) !== null && u !== void 0 ? u : n : "unset";
                                        var v;
                                        h.style.transform = (v = x.transform) !== null &&
                                            v !== void 0 ? v : "unset"
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
                            this.bca = (q6.A(this), xD());
                            this.owa = xD();
                            this.pwa = xD();
                            this.UI = new QHb;
                            this.jZa = Y5(() => [...this.zf.get().keys()].sort((c, d) => this.props.sheet.layout.rows.Dd(c, d)), {
                                equals: __c.Hl()
                            });
                            this.hZa = Y5(() => [...this.WT.get().keys()].sort((c, d) => this.props.sheet.layout.cols.Dd(c, d)), {
                                equals: __c.Hl()
                            });
                            this.w4 = R5(() => L5(this.props.MEa, {
                                zf: this.jZa,
                                iZa: this.hZa,
                                AMa: this.UI.IMa,
                                range: this.props.range
                            }));
                            this.zf = Y5(() => {
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
                                equals: g6.shallow
                            });
                            this.WT = Y5(() => {
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
                                equals: g6.shallow
                            })
                        }
                    }({
                        c: [q6, KHb]
                    } = l6(a, [], [Jc], LHb))
                })(), HHb);
                var QHb = class {
                        constructor() {
                            this.cells = new GHb;
                            this.Vca = (a, b, c) => {
                                let d = this.cells.get([a, b]);
                                d == null && (d = h6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                d.set(c);
                                return () => {
                                    const e = this.cells.get([a, b]);
                                    e === d && (e.set(void 0), this.cells.delete([a, b]))
                                }
                            };
                            this.IMa = (a, b) => {
                                var c;
                                let d = this.cells.get([a, b]);
                                d == null && (d = h6.box(void 0, {
                                    deep: !1
                                }), this.cells.set([a, b], d));
                                return (c = d.get()) === null || c === void 0 ? void 0 : c.Uma
                            }
                        }
                    },
                    r6;
                new(IHb = class extends k6 {
                    constructor() {
                        super(r6);
                        MHb()
                    }
                }, (() => {
                    class a extends(NHb = c6) {
                        static A(b) {
                            P(b, {
                                WC: h6.shallow,
                                As: Y5,
                                Lka: f6,
                                yW: f6.bound
                            })
                        }
                        get As() {
                            var b;
                            const c = (b = this.props.nl) === null || b === void 0 ? void 0 : b.get();
                            if (c != null && c.length !== 0) return new __c.cJ(c)
                        }
                        render() {
                            var b;
                            return N5("div", {
                                ref: TGb(this.Sh, (b = this.As) === null || b === void 0 ? void 0 : b.mo),
                                children: [L5("div", {
                                    ref: this.u6,
                                    className: "_5YlOqQ"
                                }), L5("div", {
                                    ref: this.w6,
                                    className: "_XCmKw"
                                }), this.WC.map(c => c.UTa)]
                            })
                        }
                        componentDidMount() {
                            const b =
                                Z5(() => [this.props.sheet, this.props.WT.get(), this.props.zf.get()], ([e, f, g], h) => {
                                    [h] = h || [];
                                    e !== h && this.yHa();
                                    this.Lka(f, g)
                                }, {
                                    fireImmediately: !0
                                }),
                                c = X5(() => {
                                    var e = this.props,
                                        f = e.O;
                                    e = e.sheet;
                                    const g = this.Sh.current;
                                    g && (f = f ? f.get() : 1, g.style.width = `${e.width*f}px`, g.style.height = `${e.height*f}px`)
                                }),
                                d = this.WC.map(e => IGb(e));
                            __c.rc(this, [c, b, ...d])
                        }
                        yHa() {
                            const b = C(this.u6.current),
                                c = C(this.w6.current);
                            b.innerHTML = "";
                            c.innerHTML = "";
                            this.Oha.length = 0;
                            this.WC.length = 0
                        }
                        Lka(b, c) {
                            const d = C(this.u6.current),
                                e = C(this.w6.current),
                                f = [],
                                g = new Map;
                            for (const h of this.Oha) c.has(h.ea) ? g.set(h.ea, h) : f.push(h);
                            for (const [h, k] of c) c = g.get(h) || f.pop(), c || (c = new RHb(this.yW, h), d.appendChild(c.GV), e.appendChild(c.IV), this.Oha.push(c)), c.update(k, h, b);
                            for (const h of f) h.hide()
                        }
                        yW(b, c) {
                            const d = this.props.bO,
                                e = this.props.sheet,
                                f = this.props.container,
                                g = this.props.UI;
                            b = new SHb(this.props.tF, this.props.ow, this.props.Lf, d(b, c), e, b, c, f, g.Vca, this.gY, this.fY);
                            __c.rc(this, IGb(b));
                            this.WC.push(b);
                            return b
                        }
                        constructor(...b) {
                            super(...b);
                            this.Sh = (r6.A(this), xD());
                            this.u6 = xD();
                            this.w6 = xD();
                            this.Oha = [];
                            this.WC = [];
                            this.gY = j6(c => {
                                const d = this.props.zf.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            });
                            this.fY = j6(c => {
                                const d = this.props.WT.get();
                                return c === "first" ? d.keys().next().value : [...d.keys()].pop()
                            })
                        }
                    }({
                        c: [r6, MHb]
                    } = l6(a, [], [Jc], NHb))
                })(), IHb);
                var RHb = class {
                        static A(a) {
                            P(a, {
                                update: f6
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
                            this.GV = (RHb.A(this), document.createElement("div"));
                            this.IV = document.createElement("div");
                            this.WC = new Map
                        }
                    },
                    SHb = class {
                        static A(a) {
                            P(a, {
                                jW: h6.ref,
                                ea: h6.ref,
                                W9: Y5,
                                update: f6,
                                Lo: Y5,
                                attrs: Y5.struct,
                                aaa: Y5,
                                yq: Y5,
                                renderer: Y5,
                                Uma: Y5.struct
                            })
                        }
                        get W9() {
                            if (!HGb) return !1;
                            const a = this.Lo;
                            return a == null || a.content.ref == null || a.content.ref.type !== "formula" ? !1 : this.tF(this.sheet, a.content.ref.value)
                        }
                        update(a) {
                            a !== this.ea && (this.ea = a, this.Et.ea = a, this.U7 && this.U7(), this.U7 = this.Vca(this.ea, this.col, this))
                        }
                        get UTa() {
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
                                    return this.container.tTa.Hc(c, b);
                                case "sheet-item":
                                    return this.container.Tda.Hc(c, b);
                                case "sheet-element":
                                    return this.container.fWa.Hc(c, b);
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
                                El: this.vba,
                                Lf: this.Lf
                            })
                        }
                        get Uma() {
                            this.Vma.reportObserved();
                            var a = QGb(() => this.renderer);
                            if (a && (a = a.type === "react" ? this.TR : this.Vw, a.childNodes.length !== 0 && (a = a.childNodes[0], a instanceof HTMLElement))) return {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        }
                        constructor(a, b, c, d, e, f, g, h, k, l, m) {
                            var n, p, q, r, t, u;
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
                                (SHb.A(this), document.createElement("div"));
                            this.HD = document.createElement("div");
                            this.Qw = document.createElement("div");
                            this.Vw = document.createElement("div");
                            this.TR = document.createElement("div");
                            this.Vma = PGb("content size atom");
                            this.vba = f6(() => this.Vma.reportChanged());
                            this.ea = g;
                            this.FV.className = "_2JFriw";
                            this.HD.className = "imy9ug";
                            this.Qw.className = O5("pDMp7w", {
                                _0yZ6Qg: ((p = this.Lo) === null || p === void 0 ? void 0 : (n = p.content.ref) === null || n === void 0 ? void 0 : n.type) !== "text3",
                                qhF5uA: ((r = this.Lo) === null ||
                                    r === void 0 ? void 0 : (q = r.content.ref) === null || q === void 0 ? void 0 : q.type) !== "text3" && ((u = this.Lo) === null || u === void 0 ? void 0 : (t = u.content.ref) === null || t === void 0 ? void 0 : t.type) !== "text2",
                                qxD1GA: this.W9
                            });
                            this.Vw.className = "_30B9pw";
                            this.Qw.appendChild(this.Vw);
                            this.HD.appendChild(this.Qw);
                            this.TR.className = "G7zH2w";
                            this.U7 = k(this.ea, this.col, this);
                            this.Lf = v => L5(c, { ...v,
                                El: this.vba
                            })
                        }
                    };
                var THb, UHb, VHb, $5;
                new(THb = class extends k6 {
                    constructor() {
                        super($5);
                        UHb()
                    }
                }, (() => {
                    class a extends(VHb = c6) {
                        static A(b) {
                            P(b, {
                                TX: Y5
                            })
                        }
                        render() {
                            const {
                                tF: b,
                                sheet: c,
                                container: d,
                                nl: e,
                                sP: f,
                                ow: g,
                                ld: h,
                                Lf: k,
                                viewport: l,
                                Uz: m,
                                OCa: n = !1
                            } = this.props;
                            if (!c.layout.cols.empty && !c.layout.rows.empty) return L5("div", {
                                className: O5("SNkrHw", c.direction === "ltr" ? "TA4X7w" : "WvuqMw", {
                                    RaA0Nw: n
                                }),
                                ...h,
                                children: L5(OHb, {
                                    tF: b,
                                    ow: g,
                                    Lf: k,
                                    MEa: this.w4,
                                    bO: this.bO,
                                    sheet: c,
                                    container: d,
                                    nl: e,
                                    sP: f,
                                    O: this.O,
                                    viewport: l,
                                    Uz: m,
                                    TX: this.TX
                                })
                            })
                        }
                        get TX() {
                            var b = this.props.sheet;
                            const c = {},
                                d = b.view.freeze.iL ? b.layout.qd.get(b.view.freeze.iL) : void 0,
                                e = b.view.freeze.qA ? b.layout.$c.get(b.view.freeze.qA) : void 0,
                                f = b.layout.rows.first(),
                                g = b.layout.rows.last(),
                                h = b.layout.cols.first(),
                                k = b.layout.cols.last();
                            if (f != null && g != null && h != null && k != null) {
                                var l = e ? b.layout.cols.next(e) : h;
                                b = d ? b.layout.rows.next(d) : f;
                                d && e && (c.gla = {
                                    range: {
                                        qb: h,
                                        ub: f,
                                        Qb: e,
                                        kc: d
                                    }
                                });
                                d && l && (c.WCa = {
                                    range: {
                                        qb: l,
                                        ub: f,
                                        Qb: k,
                                        kc: d
                                    }
                                });
                                e && b && (c.Xqa = {
                                    range: {
                                        qb: h,
                                        ub: b,
                                        Qb: e,
                                        kc: g
                                    }
                                });
                                b && l && (c.ZBa = {
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
                                this.props.O : Y5(() => 1)
                        }
                        constructor(...b) {
                            super(...b);
                            this.w4 = ($5.A(this), R5(c => {
                                const {
                                    sheet: d,
                                    F$: e,
                                    O: f,
                                    pV: g = "hidden"
                                } = this.props;
                                return L5(n6, {
                                    sheet: d,
                                    range: c.range,
                                    O: f,
                                    children: L5(EHb, { ...c,
                                        sheet: d,
                                        O: this.O,
                                        F$: e,
                                        overflow: g
                                    })
                                })
                            }));
                            this.bO = (c, d) => new __c.kya(this.props.Wv, this.props.At, this.props.sheet, c, d, this.O, this.fp, this.gp);
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
                        c: [$5, UHb]
                    } = l6(a, [], [Jc], VHb))
                })(), THb);
                __c.rya = {
                    ROa: function(a) {
                        const b = a.Gm,
                            c = a.Pe,
                            d = a.te,
                            e = a.jo,
                            f = a.Wv,
                            g = a.At,
                            h = a.DM;
                        oGb({
                            dz: a.dz,
                            lf: a.lf,
                            nXa: a.kS,
                            Ja: a.Ja
                        });
                        const k = KGb({
                            ow: h,
                            Wv: f,
                            At: g,
                            yx: void 0
                        });
                        b.Q4 = EGb({
                            fm: k
                        });
                        c.x4 = uGb({
                            fm: k
                        });
                        ({
                            y4: a
                        } = BGb({
                            fm: k,
                            ke: e(),
                            Pza: new xHb
                        }));
                        d.om.P4 = a;
                        const {
                            LDa: l,
                            MDa: m,
                            KDa: n
                        } = tGb();
                        return {
                            pja: R5(p => L5(VGb, { ...p,
                                container: void 0,
                                fm: k,
                                PEa: l,
                                QEa: m,
                                NEa: n,
                                Lf: WGb
                            }))
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/47009270e7a983ad.js.map