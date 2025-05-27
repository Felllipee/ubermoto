; // __FILE_CONTENT_FOR__:b8ce26fd07bc890b.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [89303], {

        /***/
        841629: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {}).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:dd87a4004aa4791e.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [57399], {

        /***/
        78999: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var fL = __c.fL;
                var gL = __c.gL;
                var ca = __c.ca;
                var ba = __c.ba;
                var YV = __c.YV;
                var eo = __c.eo;
                var A = __c.A;
                var PJ = __c.PJ;
                var vm = __c.vm;
                var Gm = __c.Gm;
                var Zl = __c.Zl;
                var QJ = __c.QJ;
                var C = __c.C;
                var E = __c.E;
                var aIb = function(a, b) {
                        for (let d = 0; d < 10; d++) {
                            var c = Math.max(b * .001, 1);
                            const e = a(b);
                            c = (a(b + c) - e) / c;
                            Math.abs(c - 0) < 1E-8 && (c = 1);
                            if (Math.abs(e / b) < 1E-8) break;
                            b -= e / c
                        }
                        return b
                    },
                    bIb = function(a, b, c, d, e, f, g) {
                        const h = a - c;
                        g = Math.max(g !== null && g !== void 0 ? g : a, h);
                        return aIb(k => {
                            const l = Math.max(k, h),
                                m = l - h;
                            var n = __c.NF(b, b + c, b + m),
                                p = n(d);
                            n = n(d + e);
                            p += f;
                            k -= l;
                            return Math.abs(m - 0) < 1E-8 && n > p ? k : n - p + k
                        }, g)
                    },
                    cIb = function(a) {
                        const b = a.ib;
                        if (a = a.$b.first()) {
                            var c;
                            a = ((c = a.CD[0]) !== null && c !== void 0 ? c : 0) + __c.YK(b.toArray())
                        } else a =
                            0;
                        return a
                    },
                    s6 = function(a) {
                        return !!a && a.text.charLength > 1
                    },
                    t6 = function(a, b, c, d) {
                        a = dIb[a][b];
                        switch (c) {
                            case "left":
                                return a.left(d);
                            case "center":
                                return a.center(d);
                            case "right":
                                return a.right(d);
                            default:
                                throw new E(c);
                        }
                    },
                    eIb = function(a, {
                        c2: b,
                        NPa: c
                    }) {
                        const d = a.target,
                            e = d.viewBox,
                            f = d.slice,
                            g = d.$b.first();
                        if (s6(g) && f) {
                            var h = C(d.resizeMode, "resizeMode must be provided if there is text content"),
                                k = 2 * cIb(d),
                                l, m = a.ng.width / ((l = a.Ij) !== null && l !== void 0 ? l : e.width),
                                n;
                            a = a.ng.height / ((n = a.qk) !== null && n !== void 0 ?
                                n : e.height);
                            h.minBlockSize = Math.max(h.minBlockSize, (e.height - f.source.height) * a);
                            var p;
                            c = c ? b.height : (p = h.minBlockSize) !== null && p !== void 0 ? p : b.height;
                            return {
                                textBox: __c.RJ({
                                    width: b.width,
                                    height: c,
                                    viewBox: d.viewBox,
                                    slice: { ...f,
                                        Lg: b.width / m + f.source.width - e.width,
                                        Kg: c / a + f.source.height - e.height
                                    }
                                }, g.box),
                                desiredHeight: c,
                                Td: a,
                                pXa: k
                            }
                        }
                    },
                    fIb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    u6 = function(a, b, c) {
                        a.Fe || __c.Sua(a);
                        var d = C(a.Fe, "Cannot measure text using a destroyed qltt");
                        if (__c.kL(a.wf, a.Za) != null) return __c.wL(d);
                        const e = a.writingMode;
                        __c.$K(e) ? d.style.width = `${b}px` : d.style.height = `${b}px`;
                        d = d.getBoundingClientRect();
                        d = __c.Xta(e, d);
                        const {
                            width: f,
                            height: g
                        } = __c.Yta(e, {
                            inline: b,
                            block: d.block + a.oV
                        });
                        return {
                            width: f,
                            height: g,
                            Eb: (c === null || c === void 0 ? 0 : c.n1) ? [] : a.yK(b)
                        }
                    },
                    gIb = function(a, b, c = !0, d = a.ng.Ga, e) {
                        var f = a.target;
                        const g = f.viewBox,
                            h = f.slice;
                        var k = f.$b.first(),
                            l = eIb(a, {
                                c2: b,
                                NPa: c
                            });
                        if (!l || !h || !k || !s6(k) && !a.pe.FMa(f).length) return {
                            c2: b,
                            Eb: []
                        };
                        const m = C(a.jq, "typesetter must be provided if there is text content");
                        a = l.textBox;
                        c = l.desiredHeight;
                        const n = l.Td;
                        l = l.pXa;
                        e = u6(m, a.width - l, e);
                        fIb(k.Fa.Eb, e.Eb) || (k.Fa = {
                            Eb: e.Eb
                        });
                        l = e.height + l;
                        f = a.height > l ? c : bIb(g.height, h.source.top, h.source.height, k.box.top, k.box.height, l / n, QJ(f.viewBox, h)) * n;
                        k = k.Gc;
                        d = Zl(d, b.Ua) || Zl(d, b.r) || Zl(d, b.c) ? t6({
                            [1]: 1,
                            [2]: 2,
                            [3]: 3
                        }[k], 1, Zl(d, b.Ua) ? "left" : Zl(d, b.r) ? "right" : "center", b) : d;
                        return {
                            c2: b.resizeTo(d, b.width, f),
                            Eb: e.Eb
                        }
                    },
                    hIb = function(a, b) {
                        return __c.yL(a, b, 1, "glyph")
                    },
                    iIb = function(a, b, c) {
                        c = __c.Om(a, b, c);
                        return c > 1 ? a.transform(__c.om(b,
                            c)) : a
                    },
                    jIb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.Lm(a));
                        var e = b.transform(__c.Lm(a)),
                            f = e.c;
                        b = e.width;
                        const g = e.height;
                        e = e.rotation;
                        f = __c.pm(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(f);
                        return __c.zm({
                            center: f,
                            width: b,
                            height: g,
                            rotation: d ? c ? e + 180 : 2 * a.rotation + 180 - e : 2 * a.rotation - e
                        })
                    },
                    kIb = function(a, b, c, d) {
                        if (!c && !d) return b.transform(__c.Im(a));
                        var e = b.c;
                        const f = b.width,
                            g = b.height;
                        b = b.rotation;
                        e = __c.pm(a.center(), a.rotation * Math.PI / 180, c, d).transformPoint(e);
                        return __c.zm({
                            center: e,
                            width: f,
                            height: g,
                            rotation: d ? c ? b - 180 : 2 * a.rotation + 180 - b : 2 * a.rotation - b
                        }).transform(__c.Im(a))
                    },
                    lIb = function(a, b, c, d = !1, e = !1) {
                        const f = a.center();
                        var g = b.center();
                        const h = b.width / a.width,
                            k = b.height / a.height;
                        a = jIb(a, c, d, e).transform(__c.jm(g.x - f.x, g.y - f.y).then(__c.om(g, Math.min(1, Math.min(h, k)))));
                        g = iIb(a, g, b.ma());
                        return kIb(b, g, d, e)
                    },
                    v6 = function(a, b, c, d = !1, e = !1) {
                        return c && Gm(lIb(a, b, vm(c), d, e))
                    },
                    mIb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / PJ(c, d);
                        a = a.height / QJ(c, d);
                        return {
                            top: (b.top - c.top) *
                                a,
                            left: (b.left - c.left) * e,
                            width: b.width * e,
                            height: b.height * a,
                            rotation: b.rotation
                        }
                    },
                    nIb = function(a, b) {
                        const c = a.viewBox,
                            d = a.slice,
                            e = a.width / PJ(c, d);
                        a = a.height / QJ(c, d);
                        return {
                            top: b.top / a + c.top,
                            left: b.left / e + c.left,
                            width: b.width / e,
                            height: b.height / a,
                            rotation: b.rotation
                        }
                    },
                    oIb = function(a, b, c) {
                        var d = a.ora.get(b),
                            e = a.rra.get(b);
                        if (d != null || e != null) {
                            if (d === null || d === void 0 ? 0 : d.tb) {
                                d = d.tb;
                                var f = mIb(a.target, d);
                                const g = C(a.qra.get(b));
                                f = v6(g, c, f);
                                b.fill.image.ref && f && (b.fill.image.ref.tb = { ...nIb(a.target, f),
                                    rotation: d.rotation
                                })
                            }
                            if (e ===
                                null || e === void 0 ? 0 : e.tb) e = e.tb, d = mIb(a.target, e), f = C(a.qra.get(b)), c = v6(f, c, d), b.fill.video.ref && c && (b.fill.video.ref.tb = { ...nIb(a.target, c),
                                rotation: e.rotation
                            })
                        }
                    },
                    w6 = function(a) {
                        const b = new Map;
                        a.ib.forEach(c => {
                            const d = __c.hU(c.d);
                            d && b.set(c, vm(__c.RJ(a, Gm(d))).translate(a.left, a.top))
                        });
                        return b
                    },
                    pIb = function(a, b) {
                        return a === b ? !0 : a.length === b.length && a.every((c, d) => c === b[d])
                    },
                    qIb = function(a, b, c, d, e = !1, f = !1) {
                        if (d) return b = jIb(b, vm(d), e, f), a = iIb(b, a, c.ma()), Gm(kIb(c, a, e, f))
                    },
                    rIb = function({
                        width: a,
                        height: b
                    }) {
                        return vm({
                            width: a,
                            height: b,
                            top: 0,
                            left: 0
                        })
                    },
                    sIb = function(a, b) {
                        switch (b.element.type) {
                            case "text":
                                return a.v0.wW(b.element);
                            case "rect":
                                return a.v0.uW(b.element);
                            case "shape":
                                if (!b.element.slice) break;
                                return a.v0.vW(b.element);
                            case "layout":
                                return new x6(b.element, a.pe, a.v0, a.Ls);
                            default:
                                throw new E(b.element);
                        }
                    },
                    tIb = function(a) {
                        a.lS.forEach(({
                            writingMode: b,
                            state: c,
                            Za: d
                        }, e) => {
                            var f = c.cells.T();
                            a.gma.set(e, f.length);
                            __c.$K(b) && !__c.vcb.test(f) && a.Kla.add(e);
                            f = document.createElement("div");
                            f.classList.add("AdBbhQ", __c.tL(b));
                            f.style.writingMode = __c.ZK(b);
                            a.ut.set(e, f);
                            a.renderer.render(f, c, d, b)
                        });
                        a.Qt.append(...a.ut.values());
                        a.Qt.classList.add("kBwe2A");
                        a.lS.forEach(({
                            RZ: b,
                            state: c
                        }, d) => {
                            const e = C(a.ut.get(d));
                            b = __c.mL(c, a.kb, b);
                            a.qla.set(d, b);
                            a.NR.set(d, __c.Rua(e))
                        })
                    },
                    uIb = function(a, b) {
                        var c = vm(b);
                        a = a.fh.tW(b);
                        b = c.Ga;
                        const d = c.br;
                        c = c.br;
                        try {
                            a.gi(b, d, c, !0, !1)
                        } finally {
                            a.destroy()
                        }
                    },
                    wIb = function(a, b, c, d) {
                        c = new vIb(c, d);
                        A(a.count() === 1, "Only single widget root element is supported");
                        a =
                            a.first();
                        A(a != null && a.type === "layout", `Unexpected widget root found: ${a===null||a===void 0?void 0:a.type}`);
                        c.t3(a, b)
                    },
                    yIb = function(a) {
                        return { ...__c.mSa,
                            ...y6,
                            top: 0,
                            left: 0,
                            width: a.width,
                            height: a.height,
                            viewBox: {
                                top: 0,
                                left: 0,
                                width: a.gDa.width,
                                height: a.gDa.height
                            },
                            ib: a.ib.map(xIb)
                        }
                    },
                    zIb = function(a) {
                        switch (a.fw) {
                            case 0:
                                var b = eo.Yb().attrs({
                                    "font-size": a.fontSize,
                                    leading: a.lineHeight ? a.lineHeight * 1E3 : void 0,
                                    "text-align": a.textAlign || "start",
                                    "font-weight": a.fontWeight,
                                    "font-family": a.fontFamily,
                                    "font-kerning": "normal",
                                    "font-feature-liga": "on",
                                    "font-feature-clig": "on",
                                    "font-feature-calt": "on",
                                    direction: a.direction
                                });
                                a.color && b.nf("color", a.color);
                                b = b.Ib(a.text.endsWith("\n") ? a.text : `${a.text}\n`).build();
                                var c;
                                return { ...__c.oSa,
                                    ...z6,
                                    ...y6,
                                    Oa: (c = a.Oa) !== null && c !== void 0 ? c : 0,
                                    text: b,
                                    eg: 2
                                };
                            case 1:
                                return b = a.text, { ...__c.oSa,
                                    ...z6,
                                    ...y6,
                                    text: b,
                                    eg: 2
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    D6 = function({
                        content: a,
                        fill: b,
                        border: c,
                        P: d
                    }) {
                        b = { ...__c.YRa,
                            fill: A6(b),
                            border: B6(c),
                            P: C6(d)
                        };
                        switch (a.type) {
                            case "shape":
                                return { ...b,
                                    element: yIb(a)
                                };
                            case "text":
                                return { ...b,
                                    element: zIb(a)
                                };
                            case "layout":
                                return { ...b,
                                    element: AIb(a)
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    AIb = function({
                        cells: a,
                        border: b,
                        fill: c,
                        P: d,
                        gridTemplateColumns: e,
                        gridTemplateRows: f,
                        columnGap: g,
                        rowGap: h
                    }) {
                        return { ...__c.ZRa,
                            ...z6,
                            ...y6,
                            N: z6.width,
                            aa: z6.height,
                            fill: A6(c),
                            border: B6(b),
                            direction: 1,
                            P: C6(d),
                            cells: new Map(a.map(k => [k.id, D6(k)])),
                            behavior: {
                                rules: [{
                                    pf: void 0,
                                    grid: {
                                        gridTemplateColumns: e,
                                        gridTemplateRows: f,
                                        columnGap: g !== null && g !== void 0 ? g : 0,
                                        rowGap: h !== null && h !== void 0 ? h : 0,
                                        Bf: BIb(a)
                                    }
                                }]
                            },
                            be: void 0
                        }
                    },
                    BIb = function(a) {
                        return new Map(a.map(b => [b.id, CIb(b)]))
                    },
                    CIb = function(a) {
                        const b = a.placement.padding;
                        return { ...__c.Fpa,
                            ...a.placement,
                            alignSelf: "center",
                            padding: { ...__c.YR,
                                ...(b != null ? typeof b === "number" ? {
                                    all: b
                                } : b : {})
                            }
                        }
                    },
                    B6 = function(a) {
                        var b;
                        const c = (b = a === null || a === void 0 ? void 0 : a.color) !== null && b !== void 0 ? b : "#000000";
                        var d;
                        return { ...__c.UI,
                            all: a ? { ...__c.BQ,
                                weight: (d = a.weight) !== null && d !== void 0 ? d : 1,
                                color: c,
                                Be: !0
                            } : void 0
                        }
                    },
                    C6 = function(a) {
                        return { ...__c.WR,
                            ...(a != null ? typeof a === "number" ? {
                                all: a
                            } : a : {})
                        }
                    },
                    xIb = function(a) {
                        return { ...__c.nSa,
                            ...a,
                            fill: A6(a.fill),
                            stroke: DIb(a.stroke)
                        }
                    },
                    DIb = function(a) {
                        return a ? { ...__c.BQ,
                            color: a.color,
                            weight: a.weight
                        } : void 0
                    },
                    A6 = function(a) {
                        var b;
                        const c = { ...__c.AQ,
                            Oa: (b = a === null || a === void 0 ? void 0 : a.Oa) !== null && b !== void 0 ? b : 0
                        };
                        switch (a === null || a === void 0 ? void 0 : a.type) {
                            case "color":
                                return { ...c,
                                    color: a.color
                                };
                            case "gradient":
                                return { ...c,
                                    Ra: a.Ra
                                };
                            case void 0:
                                return c;
                            default:
                                throw new E(a);
                        }
                    },
                    JIb = function(a, b) {
                        const c = new Map(b.cells.map(e => [e.id, e]));
                        EIb(a.cells,
                            c, (e, f) => {
                                let g = !1;
                                FIb(e.element, f.content, () => {
                                    a.cells.delete(f.id);
                                    a.cells.set(f.id, D6(f));
                                    g = !0
                                });
                                g || (E6(e.fill, f.fill), GIb(e.border, f.border), HIb(e.P, f.P))
                            }, e => D6(e));
                        IIb(a.behavior, b, c);
                        E6(a.fill, b.fill);
                        HIb(a.P, b.P);
                        GIb(a.border, b.border);
                        var d;
                        a.Oa = (d = b.Oa) !== null && d !== void 0 ? d : 0
                    },
                    IIb = function(a, b, c) {
                        F6(a.rules, [b], d => {
                            KIb(d.grid.gridTemplateColumns, b.gridTemplateColumns) || (d.grid.gridTemplateColumns = b.gridTemplateColumns);
                            KIb(d.grid.gridTemplateRows, b.gridTemplateRows) || (d.grid.gridTemplateRows =
                                b.gridTemplateRows);
                            var e;
                            d.grid.columnGap = (e = b.columnGap) !== null && e !== void 0 ? e : 0;
                            var f;
                            d.grid.rowGap = (f = b.rowGap) !== null && f !== void 0 ? f : 0;
                            EIb(d.grid.Bf, c, (g, h) => {
                                const k = h.placement.padding,
                                    l = h.placement.gridColumnEnd,
                                    m = h.placement.gridRowStart,
                                    n = h.placement.gridRowEnd,
                                    p = h.placement.alignSelf;
                                g.gridColumnStart = h.placement.gridColumnStart;
                                g.gridColumnEnd = l;
                                g.gridRowStart = m;
                                g.gridRowEnd = n;
                                typeof k === "number" && g.padding.all !== k ? g.padding.all = k : typeof k !== "number" && (g.padding.la = k === null || k === void 0 ?
                                    void 0 : k.la, g.padding.Ba = k === null || k === void 0 ? void 0 : k.Ba, g.padding.ia = k === null || k === void 0 ? void 0 : k.ia, g.padding.Da = k === null || k === void 0 ? void 0 : k.Da);
                                g.alignSelf = p
                            }, g => CIb(g))
                        }, d => {
                            var e, f;
                            return {
                                pf: void 0,
                                grid: {
                                    gridTemplateColumns: b.gridTemplateColumns,
                                    gridTemplateRows: b.gridTemplateRows,
                                    columnGap: (e = b.columnGap) !== null && e !== void 0 ? e : 0,
                                    rowGap: (f = b.rowGap) !== null && f !== void 0 ? f : 0,
                                    Bf: BIb(d.cells)
                                }
                            }
                        })
                    },
                    LIb = function(a, b) {
                        F6(a.ib, b.ib, (e, f) => {
                            e.d = f.d;
                            E6(e.fill, f.fill);
                            e.stroke.ref && f.stroke ? (e = e.stroke.ref,
                                f = f.stroke, e.color = f.color, e.weight = f.weight) : e.stroke.set(DIb(f.stroke))
                        }, e => xIb(e));
                        const {
                            viewBox: c,
                            width: d
                        } = yIb(b);
                        a.width = d;
                        vm(a.viewBox).equals(vm(c)) || (a.viewBox = c)
                    },
                    FIb = function(a, b, c) {
                        switch (b.type) {
                            case "shape":
                                a.type === "shape" ? LIb(a, b) : c();
                                break;
                            case "text":
                                a.type === "text" && eo.domain.yb(eo.ka(a.text), zIb(b).text) || c();
                                break;
                            case "layout":
                                a.type === "layout" ? JIb(a, b) : c();
                                break;
                            default:
                                throw new E(b);
                        }
                    },
                    EIb = function(a, b, c, d) {
                        const e = new Set(a.keys());
                        for (const [f, g] of b)(b = a.get(f)) ? (e.delete(f),
                            c(b, g)) : a.set(f, d(g));
                        e.forEach(f => a.delete(f))
                    },
                    F6 = function(a, b, c, d) {
                        const e = a.toArray();
                        for (let f = 0; f < Math.max(e.length, b.length); f++)
                            if (f < e.length && f < b.length) c(e[f], b[f]);
                            else if (f < e.length && f >= b.length) a.delete(e[f]);
                        else if (f >= e.length && f < b.length) {
                            const g = d(b[f]);
                            a.append(g)
                        }
                    },
                    E6 = function(a, b) {
                        switch (b === null || b === void 0 ? void 0 : b.type) {
                            case "color":
                                a.color = b.color;
                                a.Ra.set(void 0);
                                var c;
                                a.Oa = (c = b.Oa) !== null && c !== void 0 ? c : 0;
                                break;
                            case "gradient":
                                if (a.Ra.ref && __c.GJa.domain.yb(a.Ra.ref, b.Ra)) break;
                                a.color = void 0;
                                a.Ra.set(b.Ra);
                                var d;
                                a.Oa = (d = b.Oa) !== null && d !== void 0 ? d : 0;
                                break;
                            default:
                                a.color = void 0, a.Ra.set(void 0)
                        }
                    },
                    HIb = function(a, b) {
                        b = C6(b);
                        a.all = b.all;
                        a.Ow = b.Ow;
                        a.Mw = b.Mw;
                        a.Nw = b.Nw;
                        a.Lw = b.Lw
                    },
                    GIb = function(a, b) {
                        b = B6(b).all;
                        var c;
                        if (c = b) c = a.all.ref, c = !(c && b ? __c.VI.domain.yb(__c.VI.ka(c), b) : !c && !b);
                        c && a.all.set(b)
                    },
                    KIb = function(a, b) {
                        return a.length === b.length && a.every(c => b.includes(c))
                    },
                    NIb = function(a, b, c, d) {
                        let e = a.Nxa.get(b);
                        if (e) return e;
                        e = {
                            fs: new MIb(c.vt, b, d, c.s$),
                            Gka: void 0,
                            Qsa: void 0,
                            Eua: __c.bX.mode
                        };
                        a.Nxa.set(b, e);
                        return e
                    },
                    PIb = function(a, b, c, d, e) {
                        var f, g;
                        e = NIb(a, c, b, e);
                        const h = e.fs,
                            k = e.Qsa,
                            l = e.Gka,
                            m = e.Eua;
                        c = __c.HR.ka(c);
                        const n = ((f = (g = a.Xt).O9) === null || f === void 0 ? void 0 : f.call(g, d)) || __c.bX;
                        h.uh === k && OIb.structural(c, l) && n.mode === m || (e.Gka = c, e.Qsa = h.uh, e.Eua = n.mode, b = b.render(h, n), a.RRa.update(d, b), wIb(d, b, (p, q) => a.AH.C$.set(p, q), (p, q, r) => a.AH.refs.set(p, {
                            ref: q,
                            key: r
                        })))
                    },
                    SIb = function(a, b) {
                        const c = [],
                            d = () => c.forEach(e => e());
                        c.push(a.wSa());
                        c.push(QIb(() => {
                            a: {
                                var e = new RIb;
                                for (const f of b)
                                    if (e.EH(f),
                                        e.V8) {
                                        e = e.V8;
                                        break a
                                    }
                                e = void 0
                            }
                            return e && (a.oc.isLoaded(e) || a.maa.has(e))
                        }, e => {
                            if (e) {
                                for (const f of b) A(f.type === "layout"), uIb(a.Kl, f);
                                d()
                            }
                        }));
                        return d
                    },
                    TIb = function(a, b) {
                        return {
                            $w: ({
                                Qg: c
                            }) => {
                                var d;
                                const {
                                    fs: e
                                } = NIb(a.renderer, c, b, a.PQ), f = __c.JR.create([]), g = [];
                                g.push(SIb(a.OLa, f));
                                g.push(QIb(() => {
                                    var k, l;
                                    return [(k = (l = a.Xt).O9) === null || k === void 0 ? void 0 : k.call(l, f), __c.HR.ka(c), e.uh]
                                }, () => {
                                    PIb(a.renderer, b, c, f, a.PQ)
                                }, {
                                    fireImmediately: !0,
                                    equals: OIb.structural
                                }));
                                const h = (d = b.qba) === null || d === void 0 ?
                                    void 0 : d.call(b, {
                                        fs: e
                                    });
                                h && g.push(h);
                                return {
                                    $a: f,
                                    Rs: () => {
                                        g.forEach(k => k())
                                    }
                                }
                            }
                        }
                    },
                    UIb = {
                        left: a => a.df,
                        center: a => a.Ua,
                        right: a => a.Ga
                    },
                    VIb = {
                        left: a => a.b,
                        center: a => a.c,
                        right: a => a.t
                    },
                    WIb = {
                        left: a => a.br,
                        center: a => a.r,
                        right: a => a.tr
                    },
                    dIb = {
                        [1]: {
                            [1]: {
                                left: a => a.tr,
                                center: a => a.t,
                                right: a => a.Ga
                            },
                            [2]: WIb,
                            [3]: UIb
                        },
                        [2]: {
                            [1]: {
                                left: a => a.r,
                                center: a => a.c,
                                right: a => a.Ua
                            },
                            [2]: VIb,
                            [3]: VIb
                        },
                        [3]: {
                            [1]: {
                                left: a => a.br,
                                center: a => a.b,
                                right: a => a.df
                            },
                            [2]: UIb,
                            [3]: WIb
                        }
                    },
                    G6 = class extends YV {
                        constructor(a, b, c, d, e) {
                            super(a, b);
                            this.jq = c;
                            this.qk =
                                d;
                            this.Ij = e;
                            this.qk = d !== null && d !== void 0 ? d : QJ(a.viewBox, a.slice);
                            this.Ij = e !== null && e !== void 0 ? e : PJ(a.viewBox, a.slice)
                        }
                    };
                G6.prototype.yG = ba(34);
                G6.prototype.yG = ca(34, function(a = vm(this.target), b, c = this.ng.Ga, d) {
                    const e = this.target,
                        f = e.slice,
                        {
                            c2: g,
                            Eb: h
                        } = gIb(this, a, b, c, d);
                    (a = this.target.$b.first()) && h && (a.Fa = {
                        Eb: h
                    });
                    b && e.resizeMode && (e.resizeMode.minBlockSize = g.height);
                    this.Ij != null && f && (f.Lg = Math.max(0, this.Ij / this.ng.width * g.width + f.source.width - e.viewBox.width));
                    this.qk != null && f && (f.Kg = Math.max(0, this.qk / this.ng.height * g.height + f.source.height - e.viewBox.height));
                    this.Vv(Gm(g));
                    return g
                });
                __c.hL.prototype.yG = ca(33, function(a, b) {
                    var c = a.$b.first();
                    c = s6(c) ? hIb(this.Yf, eo.ka(c === null || c === void 0 ? void 0 : c.text)) : void 0;
                    a = new G6(a, this.Di, c);
                    try {
                        return a.yG(void 0, !1, void 0, b)
                    } finally {
                        c === null || c === void 0 || c.destroy()
                    }
                });
                var XIb = class extends YV {
                        constructor(a, b, c, d) {
                            super(a, b);
                            this.jq = c;
                            this.Ls = d
                        }
                    },
                    H6 = class extends YV {
                        resize(a, b, c, d) {
                            a = this.Kl.yG(this.ng.resize(a, b, c, d), !0, void 0, {
                                n1: !0
                            });
                            w6(this.target).forEach((e, f) => oIb(this, f, e));
                            return a !== null && a !== void 0 ? a : this.ng
                        }
                        reset() {
                            super.reset();
                            const a = C(this.target.slice);
                            a.Lg = this.xOa;
                            a.Kg = this.wOa
                        }
                        complete() {
                            this.Kl.yG(void 0, !1, void 0, {
                                n1: !0
                            })
                        }
                        destroy() {
                            this.jq && this.jq.destroy()
                        }
                        constructor(a, b, c) {
                            super(a, b);
                            this.qra = w6(this.target);
                            this.ora = new WeakMap;
                            this.rra =
                                new WeakMap;
                            var d = C(a.slice);
                            this.xOa = d.Lg;
                            this.wOa = d.Kg;
                            a.ib.forEach(g => {
                                var h = g.fill.image.ref;
                                h && this.ora.set(g, __c.wJa.ka(h));
                                (h = g.fill.video.ref) && this.rra.set(g, __c.zJa.ka(h))
                            });
                            if (d.Lg != null) {
                                const g = a.$b.first();
                                this.Ij = PJ(a.viewBox, d);
                                const h = a.width / this.Ij;
                                var e = a.viewBox.width - d.source.width;
                                if (s6(g)) {
                                    var f;
                                    e = (f = g.text.ej(0)["font-size"]) !== null && f !== void 0 ? f : __c.Dh.ac["font-size"];
                                    e = bIb(a.viewBox.width, d.source.left, d.source.width, g.box.left, g.box.width, (e + 2 * cIb(a)) / h, PJ(a.viewBox, d))
                                }
                                this.minWidth =
                                    Math.max(5, e * h)
                            } else this.Ij = void 0, this.minWidth = 5;
                            d.Kg != null ? (this.qk = QJ(a.viewBox, d), this.minHeight = Math.max(5, a.height / this.qk * (a.viewBox.height - d.source.height))) : (this.qk = void 0, this.minHeight = 5);
                            this.Yf = c;
                            d = a.$b.first();
                            s6(d) && (this.jq = hIb(c, eo.ka(d.text)));
                            this.Kl = new G6(a, b, this.jq, this.qk, this.Ij)
                        }
                    };
                H6.prototype.gi = ba(5);
                var I6 = class extends YV {
                    resize() {
                        throw Error("Unimplemented");
                    }
                    complete() {
                        const a = u6(this.jq, Math.max(5, this.target.N || this.target.width));
                        this.target.Fa = {
                            Eb: a.Eb
                        }
                    }
                    destroy() {
                        this.Ls.destroy();
                        this.jq.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.Fa = this.yOa;
                        this.target.Fk = this.vOa;
                        this.target.N = this.Ij;
                        this.target.aa = this.qk
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.Yf = c;
                        this.ob = d;
                        this.Ij = a.N;
                        this.qk = a.aa;
                        this.vOa = a.Fk;
                        this.yOa = a.Fa;
                        this.xd = a.N != null ? a.width / a.N : void 0;
                        this.Td = a.aa != null ? a.height / a.aa : void 0;
                        this.eg = a.eg;
                        this.writingMode = a.writingMode || 1;
                        this.Ls = d.To();
                        this.jq = __c.yL(c, eo.ka(a.text), this.writingMode, "em-square", a.Re.ref);
                        this.Kl = new XIb(a, b, this.jq, this.Ls)
                    }
                };
                I6.prototype.gi = ba(4);
                var J6 = class extends YV {
                    resizeTo(a, b, c) {
                        A(this.flipX === this.target.fill.flipX);
                        A(this.flipY === this.target.fill.flipY);
                        this.Vv(Gm(a));
                        var d = this.target.fill.image.ref;
                        d && b && (d.tb = b);
                        (b = this.target.fill.video.ref) && c && (b.tb = c);
                        return a
                    }
                    resize(a, b, c, d) {
                        a = this.ng.resize(a, b, c, d);
                        b = v6(this.ng, a, this.p$, this.flipX, this.flipY);
                        c = v6(this.ng, a, this.q$, this.flipX, this.flipY);
                        return this.resizeTo(a, b, c)
                    }
                    reset() {
                        super.reset();
                        var a = this.target.fill.image.ref,
                            b = this.p$;
                        a && b && (a.tb = b);
                        a = this.target.fill.video.ref;
                        b = this.q$;
                        a && b && (a.tb = b)
                    }
                    complete() {}
                    destroy() {}
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.p$ = c;
                        this.q$ = d;
                        this.flipX = this.target.fill.flipX;
                        this.flipY = this.target.fill.flipY
                    }
                };
                J6.prototype.gi = ba(6);
                gL.prototype.vW = ca(32, function(a) {
                    return new H6(a, this.Di, this.Yf)
                });
                fL.prototype.vW = ca(31, function() {
                    throw Error("Unimplemented");
                });
                gL.prototype.uW = ca(30, function(a) {
                    var b = a.fill.image.ref;
                    const c = a.fill.video.ref;
                    b = b && (b.tb || Gm(this.cY(a, b)));
                    return new J6(a, this.Di, b, c === null || c === void 0 ? void 0 : c.tb)
                });
                fL.prototype.uW = ca(29, function() {
                    throw Error("Unimplemented");
                });
                gL.prototype.wW = ca(28, function(a) {
                    return new I6(a, this.Di, this.Yf, this.ob)
                });
                fL.prototype.wW = ca(27, function() {
                    throw Error("Unimplemented");
                });
                gL.prototype.cY = ca(26, function(a, b) {
                    const c = b.tb;
                    if (c) return vm(c);
                    b = this.AE(b.media);
                    return __c.bH(a, b)
                });
                fL.prototype.cY = ca(25, function(a, b) {
                    const c = b.tb;
                    if (c) return vm(c);
                    b = this.AE(b.media);
                    return __c.bH(a, b)
                });
                var x6 = class extends YV {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        for (const [, {
                                fh: a
                            }] of this.DN) a.complete()
                    }
                    destroy() {
                        for (const [, {
                                fh: a
                            }] of this.DN) a.destroy()
                    }
                    reset() {
                        super.reset();
                        this.target.width = this.GY;
                        this.target.height = this.tOa;
                        this.target.N = this.Ij;
                        this.target.aa = this.qk;
                        for (const [, {
                                fh: a
                            }] of this.DN) a.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.v0 = c;
                        this.Ls = d;
                        this.GY = this.target.width;
                        this.tOa = this.target.height;
                        this.Ij = this.target.N;
                        this.qk = this.target.aa;
                        this.DN = new Map;
                        for (const [, e] of a.cells)(a = sIb(this, e)) && this.DN.set(e, {
                            fh: a,
                            sOa: vm(e.element)
                        })
                    }
                };
                x6.prototype.gi = ba(7);
                var K6 = class extends YV {
                    resize() {
                        throw Error("Method not implemented.");
                    }
                    complete() {
                        this.fh.complete()
                    }
                    destroy() {
                        this.fh.destroy();
                        this.Ls.destroy()
                    }
                    reset() {
                        super.reset();
                        this.fh.reset()
                    }
                    constructor(a, b, c, d) {
                        super(a, b);
                        this.ob = d;
                        this.GY = this.target.width;
                        this.Ij = this.target.N;
                        this.qk = this.target.aa;
                        this.Ls = this.ob.create(a);
                        this.fh = new x6(a, b, c, this.Ls)
                    }
                };
                K6.prototype.gi = ba(8);
                gL.prototype.tW = ca(21, function(a) {
                    return new K6(a, this.Di, this, this.GF)
                });
                fL.prototype.tW = ca(20, function() {
                    throw Error("Unimplemented");
                });
                __c.sm.prototype.gi = ca(10, function(a, b, c, d, e, f = 0, g = 0) {
                    const h = this.rotation;
                    var k = __c.jm(-a.x, -a.y).then(__c.mm(-h * __c.Vl / 180));
                    a = k.invert();
                    b = k.transformPoint(b);
                    c = k.transformPoint(c);
                    k = k.transformPoint(this.center());
                    d = d ? Math.max(f, Math.min(Infinity, this.width * c.x / b.x)) : this.width;
                    e = e ? Math.max(g, Math.min(Infinity, this.height * c.y / b.y)) : this.height;
                    g = a.transformPoint(new __c.Xl(d / this.width * k.x, e / this.height * k.y));
                    return __c.zm({
                        center: g,
                        width: d,
                        height: e,
                        rotation: h
                    })
                });
                __c.ZV.prototype.gi = ca(9, function(a, b, c, d, e) {
                    this.resizeTo(this.ng.gi(a, b, c, d, e, this.minWidth, this.minHeight))
                });
                K6.prototype.gi = ca(8, function(a, b, c, d, e) {
                    const {
                        width: f,
                        height: g
                    } = this.ng.gi(a, b, c, d, e);
                    var h = this.GY / this.Ij,
                        k = this.Ls,
                        l = f / h;
                    h = e ? g / h : this.qk;
                    const m = C(k.fh, "Cannot measure layout using a destroyed measurer");
                    m.style.width = __c.ZI(l);
                    m.style.height = __c.ZI(h);
                    for (var [, n] of k.f2.entries()) n.style.minWidth = "", n.style.minHeight = "";
                    l = new Map;
                    for (const [p, q] of k.f2) n = C(q.parentElement), {
                        width: n
                    } = vm(n.getBoundingClientRect()), l.set(p, n);
                    n = k.fla;
                    n.ut.size === 0 && tIb(n);
                    for (const [p, q] of l) {
                        h = C(n.ut.get(p),
                            "Cannot measure text using a destroyed bqltt");
                        const {
                            writingMode: r,
                            Za: t
                        } = C(n.lS.get(p), "Cannot measure text using an unknown key");
                        __c.kL(n.wf, t) == null && (__c.$K(r) ? h.style.width = `${q}px` : h.style.height = `${q}px`)
                    }
                    l = n.measure(l, void 0);
                    for (const [p, q] of k.f2) {
                        const {
                            width: r,
                            height: t
                        } = C(l.get(p));
                        q.style.minWidth = __c.ZI(r);
                        q.style.minHeight = __c.ZI(t)
                    }
                    C(k.Fe).getBoundingClientRect();
                    this.fh.gi(a, b, c, d, e)
                });
                x6.prototype.gi = ca(7, function(a, b, c, d, e) {
                    for (const [n, {
                            fh: p,
                            sOa: q
                        }] of this.DN) {
                        ({
                            x6: b
                        } = C(this.Ls.y6.get(n)));
                        const {
                            top: r,
                            left: t,
                            width: u,
                            height: v
                        } = b.getBoundingClientRect();
                        b = C(vm({
                            top: r,
                            left: t,
                            width: u,
                            height: v
                        }));
                        c = rIb(q);
                        p.gi(c.Ga, c.br, rIb(b).br, d, e);
                        n.element.top !== 0 && (n.element.top = 0);
                        n.element.left !== 0 && (n.element.left = 0)
                    }
                    b = this.GY / this.Ij;
                    c = C(this.Ls.zsa.get(this.target));
                    const {
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    } = c.getBoundingClientRect(), {
                        width: l,
                        height: m
                    } = C(vm({
                        top: f,
                        left: g,
                        width: h,
                        height: k
                    }));
                    this.Vv(Gm(this.ng.resizeTo(a, l * b, m * b)));
                    d && (this.target.N = l);
                    e && (this.target.aa = m)
                });
                J6.prototype.gi = ca(6, function(a, b, c, d, e) {
                    const f = this.target.fill.image.ref ? 5 : 1;
                    b = this.ng.gi(a, b, c, d, e, f, f);
                    c = qIb(a, this.ng, b, this.p$, this.flipX, this.flipY);
                    a = qIb(a, this.ng, b, this.q$, this.flipX, this.flipY);
                    this.resizeTo(b, c, a)
                });
                H6.prototype.gi = ca(5, function(a, b, c, d, e) {
                    this.Kl.yG(this.ng.gi(a, b, c, d, e, this.minWidth, this.minHeight), e, a, {
                        n1: !0
                    });
                    w6(this.target).forEach((f, g) => oIb(this, g, f))
                });
                I6.prototype.gi = ca(4, function(a, b, c, d, e) {
                    b = this.ng.gi(a, b, c, d, e, 5, 5);
                    c = this.ng;
                    a = __c.Im(c).transformPoint(a);
                    var f = t6(this.eg, this.writingMode, d ? a.x < c.width / 2 ? "right" : a.x > c.width / 2 ? "left" : "center" : a.y < c.height / 2 ? "right" : a.y > c.height / 2 ? "left" : "center", this.ng); {
                        d = this.Kl;
                        a = d.target;
                        e = d.jq;
                        c = d.ng;
                        var g = d.target,
                            h = g.N != null ? g.width / g.N : 1;
                        g = g.aa != null ? g.height / g.aa : 1;
                        !Number.isFinite(h) && Number.isFinite(g) ? h = g : !Number.isFinite(g) && Number.isFinite(h) && (g = h);
                        const {
                            xd: m,
                            Td: n
                        } = {
                            xd: h,
                            Td: g
                        };
                        h = a.writingMode ||
                            1;
                        f = f || t6(a.eg, h, "left", c);
                        var k, l;
                        h = __c.$K(h) ? ((k = b === null || b === void 0 ? void 0 : b.width) !== null && k !== void 0 ? k : a.width) / m : ((l = b === null || b === void 0 ? void 0 : b.height) !== null && l !== void 0 ? l : a.height) / n;
                        k = u6(e, h);
                        l = c.resizeTo(f, m * Math.max(1, k.width), n * Math.max(1, k.height));
                        __c.Hm(c, l) && pIb(a.Fa.Eb, k.Eb) || (d.Vv(Gm(l)), a.Fk = 1, a.Fa = {
                            Eb: k.Eb
                        }, a.N = m !== 1 ? Math.max(1, k.width) : void 0, a.aa = n !== 1 ? Math.max(1, k.height) : void 0)
                    }
                });
                var L6 = __webpack_require__(519427),
                    OIb = L6.comparer,
                    YIb = L6.computed,
                    M6 = L6.observable,
                    QIb = L6.reaction,
                    ZIb = L6.runInAction;
                var $Ib = class {
                    static A(a) {
                        __c.P(a, {
                            ZSa: M6.ref,
                            WMa: M6.ref
                        })
                    }
                    constructor() {
                        this.O9 = ($Ib.A(this), void 0)
                    }
                };
                var aJb = class {
                        constructor() {
                            this.sources = new WeakMap
                        }
                    },
                    MIb = class {
                        static A(a) {
                            __c.P(a, {
                                Gd: YIb
                            })
                        }
                        get Rsa() {
                            var a = this.PQ,
                                b = this.Qg,
                                c = this.s$;
                            let d = a.sources.get(b);
                            d || (d = M6.box(c), a.sources.set(b, d));
                            return d
                        }
                        get uh() {
                            return this.Rsa.get()
                        }
                        get Gd() {
                            return this.vt.bq({
                                type: "dict",
                                value: this.Qg
                            })
                        }
                        oj(a) {
                            this.Rsa.set(a instanceof Function ? { ...this.uh,
                                ...a()
                            } : { ...this.uh,
                                ...a
                            })
                        }
                        constructor(a, b, c, d) {
                            this.vt = a;
                            this.Qg = b;
                            this.PQ = c;
                            this.s$ = d;
                            MIb.A(this)
                        }
                    };
                var vIb = class {
                    YT(a, b) {
                        this.Gxa(a, b);
                        b.ref && this.Wca(a, b.ref, b.key)
                    }
                    HH(a, b) {
                        b.ref && this.Wca(a.text, b.ref, b.key)
                    }
                    Zha(a, b) {
                        switch (b.content.type) {
                            case "shape":
                                A(a.element.type === "shape");
                                this.YT(a.element, b.content);
                                break;
                            case "text":
                                A(a.element.type === "text");
                                this.HH(a.element, b.content);
                                break;
                            case "layout":
                                A(a.element.type === "layout");
                                this.t3(a.element, b.content);
                                break;
                            default:
                                throw new E(b.content);
                        }
                    }
                    t3(a, b) {
                        this.Gxa(a, b);
                        b.ref && this.Wca(a, b.ref, b.key);
                        for (const [c, d] of a.cells) a = b.cells.find(e =>
                            e.id === c), A(!!d && !!a), this.Zha(d, a)
                    }
                    constructor(a, b) {
                        this.Gxa = a;
                        this.Wca = b
                    }
                };
                var y6 = {
                        locked: !0,
                        Vi: {
                            kW: !1,
                            aT: !1
                        },
                        qg: !0
                    },
                    z6 = {
                        top: 0,
                        left: 0,
                        width: 1,
                        height: 1
                    };
                var bJb = class {
                    constructor(a) {
                        this.Kl = a;
                        this.update = (b, c) => {
                            F6(b, [c], (d, e) => {
                                switch (d.type) {
                                    case "layout":
                                        JIb(d, e);
                                        break;
                                    default:
                                        throw Error(`Not supported element type: ${d.type}`);
                                }
                            }, d => {
                                a: switch (d.type) {
                                    case "layout":
                                        d = { ...AIb(d),
                                            ...y6,
                                            width: d.minWidth,
                                            height: d.minHeight,
                                            N: d.minWidth,
                                            aa: d.minHeight
                                        };
                                        break a;
                                    default:
                                        throw new E(d.type);
                                }
                                return d
                            });
                            for (const d of b) A(d.type === "layout"), d.width = c.minWidth, d.height = c.minHeight, d.N = c.minWidth, d.aa = c.minHeight, c.direction && (d.direction = c.direction), uIb(this.Kl,
                                d)
                        }
                    }
                };
                var cJb = class {
                    constructor(a, b, c) {
                        this.RRa = a;
                        this.AH = b;
                        this.Xt = c;
                        this.Nxa = new WeakMap
                    }
                };
                var dJb = class {
                        static A(a) {
                            __c.P(a, {
                                maa: M6.shallow
                            })
                        }
                        constructor(a, b) {
                            this.oc = a;
                            this.Kl = b;
                            this.maa = (dJb.A(this), new Set);
                            this.e9 = new Set;
                            this.wSa = () => {
                                this.JX || (this.JX = __c.Bx(this.oc).subscribe(d => {
                                    ZIb(() => {
                                        this.maa.add(d.id)
                                    })
                                }));
                                const c = Symbol();
                                this.e9.add(c);
                                return () => {
                                    this.e9.delete(c);
                                    this.e9.size <= 0 && this.JX && (this.JX.unsubscribe(), this.JX = void 0)
                                }
                            }
                        }
                    },
                    RIb = class extends __c.wz {
                        EH(a, b) {
                            this.V8 || super.EH(a, b)
                        }
                        HH(a) {
                            this.V8 = (a = a.text.zx("font-family")["font-family"].values().next().value) && __c.px(a).id
                        }
                    };
                var eJb = !1,
                    fJb = class {
                        register(a, b) {
                            this.b7.has(a) || (this.b7.set(a, b), eJb || (__c.IR.set(a, TIb(this, b)), eJb = !0))
                        }
                        get(a) {
                            return this.b7.get(a)
                        }
                        constructor(a, b, c, d, e) {
                            this.renderer = a;
                            this.PQ = b;
                            this.Xt = c;
                            this.oc = d;
                            this.Kl = e;
                            this.b7 = new Map;
                            this.OLa = new dJb(this.oc, this.Kl)
                        }
                    };
                var gJb = class {
                        constructor() {
                            this.C$ = new __c.IK;
                            this.refs = new __c.IK
                        }
                    },
                    hJb = class {
                        getContext(a) {
                            return this.AH.refs.get(a)
                        }
                        PE(a) {
                            return this.AH.C$.get(a)
                        }
                        constructor(a, b, c) {
                            this.AH = a;
                            this.PQ = b;
                            this.renderer = c
                        }
                    };
                __c.cBa = {
                    XOa: function(a) {
                        const b = new $Ib,
                            c = new gJb,
                            d = new cJb(new bJb(a.Kl), c, b),
                            e = new aJb;
                        a = new fJb(d, e, b, a.oc, a.Kl);
                        return {
                            Xt: b,
                            ncb: new hJb(c, e, d),
                            bU: a,
                            AH: c
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:65146d426c832b85.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [13794], {

        /***/
        316289: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var Okb;
                Okb = function(a) {
                    return {
                        status: 3,
                        error: a
                    }
                };
                __c.Pkb = Okb;
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:6a38f1070184c758.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [10316], {

        /***/
        605338: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(841629);
            __web_req__(316289);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var E = __c.E;
                var O = __c.O;
                var wb = __c.wb;
                var WCb = function(a, b) {
                        a.zC.forEach(c => c(b));
                        a.Uwa = b
                    },
                    XCb = function(a, b) {
                        WCb(a, {
                            notification: b
                        })
                    },
                    P4 = function(a, b) {
                        var c = a.uBa.get(b);
                        if (c != null) return c;
                        c = {
                            value: a.vt.po(b)
                        };
                        a.uBa.set(b, c);
                        a.pBa.set(c, b);
                        return c
                    },
                    Q4 = function(a, b) {
                        a = a.pBa.get(b);
                        if (a == null) throw new YCb("ref does not exists");
                        return a
                    },
                    T4 = function(a) {
                        const b = (c, d) => {
                            if (c == null && a != null) return a;
                            if ((c === null || c === void 0 ? void 0 : c.type) !== "string") throw d === "toWidgetData" ? new R4("string", c) : new S4("string", c);
                            return c.value
                        };
                        return {
                            Ti: c =>
                                ({
                                    type: "string",
                                    value: c
                                }),
                            qo: c => b(c, "toWidgetState"),
                            po: c => b(c, "toWidgetData"),
                            bq: c => b(c, "toWidgetData")
                        }
                    },
                    V4 = function(a, b) {
                        if (a.length === 0) throw new U4("At least one value must be provided for literal types.");
                        const c = new Set(a),
                            d = (e, f) => {
                                if (e == null) return b;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "string" || !c.has(e.value)) throw f === "toWidgetData" ? new R4("literal", e) : new S4("literal", e);
                                return e.value
                            };
                        return {
                            Ti: e => ({
                                type: "string",
                                value: e
                            }),
                            qo: e => d(e, "toWidgetState"),
                            po: e => d(e, "toWidgetData"),
                            bq: e => d(e, "toWidgetData")
                        }
                    },
                    W4 = function(a) {
                        const b = (c, d) => {
                            if (c == null || !Number.isFinite(a)) return a;
                            if ((c === null || c === void 0 ? void 0 : c.type) !== "double" || !Number.isFinite(c.value)) throw d === "toWidgetData" ? new R4("double", c) : new S4("double", c);
                            return c.value
                        };
                        return {
                            Ti: c => {
                                if (!Number.isFinite(c)) throw new ZCb(c);
                                return {
                                    type: "double",
                                    value: c
                                }
                            },
                            qo: c => b(c, "toWidgetState"),
                            po: c => b(c, "toWidgetData"),
                            bq: c => b(c, "toWidgetData")
                        }
                    },
                    $Cb = function() {
                        const a = b => {
                            if ((b === null || b === void 0 ? void 0 : b.type) !== "fill") throw new R4("fill",
                                b);
                            return b.value
                        };
                        return {
                            Ti: b => ({
                                type: "fill",
                                value: b
                            }),
                            qo: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "fill") throw new S4("fill", b);
                                return b.value
                            },
                            po: a,
                            bq: a
                        }
                    },
                    Y4 = function(a) {
                        const b = new Set;
                        for (const d of Object.keys(a)) {
                            const [e] = a[d];
                            if (b.has(e)) throw new U4(`Duplicate serialized keys "${e}" found in record schema.`);
                            b.add(e)
                        }
                        const c = (d, e) => {
                            if ((e === null || e === void 0 ? void 0 : e.type) !== "dict") throw new R4("record", e);
                            const f = {};
                            for (const g of Object.keys(a)) {
                                const [h, k] = a[g], l = X4(() => {
                                    const m =
                                        e.value.get(h);
                                    return k.po(m)
                                }, {
                                    keepAlive: !0
                                });
                                Object.defineProperty(f, g, {
                                    get() {
                                        return l.get()
                                    },
                                    set(m) {
                                        d !== "readonly" && (m = k.Ti(m), m == null ? e.value.delete(h) : e.value.set(h, m))
                                    },
                                    enumerable: !0
                                })
                            }
                            return f
                        };
                        return {
                            Ti: d => {
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k = h.Ti(d[f]);
                                    k != null && (e[g] = k)
                                }
                                return {
                                    type: "dict",
                                    value: new Map(Object.entries(e))
                                }
                            },
                            qo: d => {
                                if ((d === null || d === void 0 ? void 0 : d.type) !== "dict") throw new S4("record", d);
                                const e = {};
                                for (const f of Object.keys(a)) {
                                    const [g, h] = a[f], k =
                                        h.qo(d.value.get(g));
                                    k != null && (e[f] = k)
                                }
                                return e
                            },
                            po: d => c("editable", d),
                            bq: d => c("readonly", d),
                            xb: d => Y4({ ...a,
                                ...d
                            })
                        }
                    },
                    $4 = function(a) {
                        return {
                            Ti: b => ({
                                type: "list",
                                value: b.map(c => a.Ti(c))
                            }),
                            qo: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new S4("list", b);
                                return b.value.filter(wb).map(c => a.qo(c))
                            },
                            po: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new R4("list", b);
                                return new aDb(b, a)
                            },
                            bq: b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "list") throw new R4("list", b);
                                return new Z4(b,
                                    a)
                            }
                        }
                    },
                    bDb = function(a) {
                        return {
                            Ti: b => {
                                if (b != null) return a.Ti(b)
                            },
                            qo: b => {
                                if (b != null) return a.qo(b)
                            },
                            po: b => {
                                if (b != null) return a.po(b)
                            },
                            bq: b => {
                                if (b != null) return a.bq(b)
                            }
                        }
                    },
                    a5 = function(a, b) {
                        const c = new Set(Object.keys(a)),
                            d = e => {
                                var f;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict") throw new R4("union", e);
                                const g = (f = e.value.get("k")) === null || f === void 0 ? void 0 : f.value;
                                f = e.value.get("v");
                                if (g == null || f == null || typeof g !== "string" || !c.has(g)) throw new R4("union", e);
                                return {
                                    BV: a[g],
                                    CV: f
                                }
                            };
                        return {
                            Ti: e => {
                                const f =
                                    b(e);
                                return {
                                    type: "dict",
                                    value: new Map([
                                        ["k", {
                                            type: "string",
                                            value: f
                                        }],
                                        ["v", a[f].Ti(e)]
                                    ])
                                }
                            },
                            qo: e => {
                                var f;
                                if ((e === null || e === void 0 ? void 0 : e.type) !== "dict") throw new S4("union", e);
                                const g = (f = e.value.get("k")) === null || f === void 0 ? void 0 : f.value;
                                f = e.value.get("v");
                                if (g == null || f == null || typeof g !== "string" || !c.has(g)) throw new S4("union", e);
                                const {
                                    BV: h,
                                    CV: k
                                } = {
                                    BV: a[g],
                                    CV: f
                                };
                                return h.qo(k)
                            },
                            po: e => {
                                const {
                                    BV: f,
                                    CV: g
                                } = d(e);
                                return f.po(g)
                            },
                            bq: e => {
                                const {
                                    BV: f,
                                    CV: g
                                } = d(e);
                                return f.bq(g)
                            }
                        }
                    },
                    dDb = function(a) {
                        cDb({ ...a,
                            Y: a.span
                        })
                    },
                    cDb = function(a) {
                        const b = { ...a.props
                        };
                        a.Y.Zz(({
                            zj: c,
                            zA: d
                        }) => {
                            c = a.z3a ? {} : {
                                Hf: c()
                            };
                            a.Cd.track(a.event, { ...c,
                                Ul: d(),
                                ...b
                            })
                        })
                    },
                    eDb = function(a) {
                        const b = () => a.uh.Ft.get(a.Gd.tj) || b5;
                        return {
                            NJ: function() {
                                return a.uh.Sra ? 3 : a.uh.BOa === "checking" || a.uh.pb.status === 2 ? 1 : a.uh.pb.status === 3 ? 4 : a.uh.yQ ? 2 : 0
                            },
                            z9: function() {
                                const c = a.Gd,
                                    {
                                        lz: d
                                    } = b();
                                return !(!d || !c.fields.first(({
                                    value: e
                                }) => !!e.options.first(({
                                    value: f
                                }) => f.id === d)))
                            },
                            YMa: function(c, d) {
                                const {
                                    results: e
                                } = b();
                                c = e.fields.get(c);
                                if (!c) return 0;
                                var f;
                                d = (f = c.Us.get(d)) !== null && f !== void 0 ? f : 0;
                                f = c.total > 0 ? d / c.total * 100 : 0;
                                Number.isInteger(f) || (f = parseFloat(f.toFixed(1)));
                                return f
                            },
                            mNa: function(c) {
                                if (!a.Gd.fields.first(({
                                        value: e
                                    }) => e.id === c)) return 0;
                                var {
                                    results: d
                                } = b();
                                return (d = d.fields.get(c)) ? d.total : 0
                            },
                            Tu: b,
                            FRa: c => {
                                const d = new Map(a.uh.Ft);
                                d.set(a.Gd.tj, { ...b(),
                                    ...c
                                });
                                return d
                            }
                        }
                    },
                    iDb = function(a, b, c, d, e, f) {
                        function g() {
                            const u = b.NJ(),
                                v = q();
                            return (p === "poll" || !v) && u === 0
                        }
                        async function h() {
                            var u;
                            const v = f.wr("submit_response", {
                                WG: {
                                    name: "ui.rendering.form.submit_response"
                                }
                            });
                            var x = {
                                Ac: m,
                                eMa: p,
                                ju: "interacted",
                                action: "response_submitted",
                                location: "in_form"
                            };
                            e && dDb({
                                span: v,
                                Cd: e,
                                event: fDb,
                                props: x
                            });
                            const {
                                results: y,
                                yd: z,
                                Eca: B
                            } = r();
                            if (z != null && g())
                                if (x = (u = a.Gd.fields.first(({
                                        value: J
                                    }) => {
                                        var M;
                                        return !((M = J.options.first(({
                                            value: T
                                        }) => T.id === z)) === null || M === void 0 || !M.value)
                                    })) === null || u === void 0 ? void 0 : u.value) {
                                    l("selected_field_found", v);
                                    var D = a.uh,
                                        F = y;
                                    p === "poll" && B && B !== z && (F = c5({
                                        W5: y,
                                        lk: x.id,
                                        KK: B
                                    }));
                                    F = gDb({
                                        xna: F,
                                        lk: x.id,
                                        KK: z
                                    });
                                    l("field_results_created", v);
                                    d5(() => {
                                        a.oj(() =>
                                            ({
                                                Ft: t({
                                                    yd: z,
                                                    lz: z,
                                                    results: F
                                                }),
                                                yQ: !0
                                            }))
                                    });
                                    l("submission_set", v);
                                    v.oX();
                                    var G = await c.HQa({
                                        zh: a.Gd.zh,
                                        tj: n,
                                        SFa: {
                                            lk: x.id,
                                            Ai: x.label.text.T.trim(),
                                            yd: z,
                                            options: x.options.map(({
                                                value: J
                                            }) => ({
                                                id: J.id,
                                                label: J.label.text.T.trim()
                                            }))
                                        }
                                    });
                                    if (G.ok) return d5(() => {
                                        const J = M => {
                                            var T;
                                            return (T = G.value[0]) === null || T === void 0 ? void 0 : T.ana.includes(M)
                                        };
                                        a.oj(() => ({
                                            yQ: !1,
                                            pb: { ...a.uh.pb,
                                                nQ: J
                                            },
                                            Ft: t({
                                                Eca: void 0
                                            })
                                        }))
                                    });
                                    d === null || d === void 0 || XCb(d, {
                                        Aua: O("izckBA"),
                                        group: hDb,
                                        RM: {
                                            vI: O("mQhziQ"),
                                            onClick: h
                                        }
                                    });
                                    var H = c5({
                                        W5: F,
                                        lk: x.id,
                                        KK: z
                                    });
                                    B && (H = gDb({
                                        xna: H,
                                        lk: x.id,
                                        KK: B
                                    }));
                                    d5(() => {
                                        a.oj({ ...D,
                                            ...(B && {
                                                Ft: t({
                                                    yd: B,
                                                    lz: B,
                                                    results: H
                                                })
                                            })
                                        })
                                    })
                                } else v.abort();
                            else v.abort()
                        }
                        async function k(u) {
                            var v;
                            const x = r(),
                                y = (v = a.Gd.fields.first(({
                                    value: D
                                }) => {
                                    var F;
                                    return !((F = D.options.first(({
                                        value: G
                                    }) => G.id === u)) === null || F === void 0 || !F.value)
                                })) === null || v === void 0 ? void 0 : v.value;
                            if (y) {
                                var z = a.uh,
                                    B = c5({
                                        W5: x.results,
                                        lk: y.id,
                                        KK: u
                                    });
                                d5(() => {
                                    a.oj(() => ({
                                        Ft: t({
                                            yd: void 0,
                                            lz: void 0,
                                            results: B
                                        }),
                                        Sr: void 0,
                                        yQ: !0
                                    }))
                                });
                                (await c.wUa({
                                    tj: n
                                })).ok ? d5(() => {
                                        a.oj({
                                            yQ: !1
                                        })
                                    }) :
                                    (d === null || d === void 0 || XCb(d, {
                                        Aua: O("kgHTHw"),
                                        group: hDb,
                                        RM: {
                                            vI: O("mQhziQ"),
                                            onClick: () => k(u)
                                        }
                                    }), d5(() => {
                                        a.oj(z)
                                    }))
                            }
                        }

                        function l(u, v) {
                            v.bk(u);
                            v.hi().bk(u)
                        }
                        const m = a.Gd.id,
                            n = a.Gd.tj,
                            p = a.Gd.type,
                            q = b.z9,
                            r = b.Tu,
                            t = b.FRa;
                        return {
                            submit: h,
                            Yaa: function() {
                                a.oj(() => ({
                                    cH: 1
                                }))
                            },
                            Zaa: function() {
                                a.oj(() => ({
                                    cH: 0
                                }))
                            },
                            Xaa: function() {
                                a.oj(() => ({
                                    cH: 2
                                }))
                            },
                            $aa: function() {
                                a.oj(() => ({
                                    cH: 1
                                }))
                            },
                            I2: function(u) {
                                const v = r(),
                                    x = p === "poll" && u === (v === null || v === void 0 ? void 0 : v.yd) && u === (v === null || v === void 0 ? void 0 : v.lz);
                                if (g() && x) k(u);
                                else if (g() && a.Gd.fields.some(({
                                        value: z
                                    }) => z.options.some(({
                                        value: B
                                    }) => B.id === u))) {
                                    var y = v === null || v === void 0 ? void 0 : v.lz;
                                    d5(() => {
                                        const z = r();
                                        a.oj(() => ({
                                            Ft: t({
                                                Eca: y,
                                                yd: z.yd === u ? void 0 : u
                                            })
                                        }))
                                    });
                                    p === "poll" && h()
                                }
                            },
                            $Z: function(u) {
                                g() && a.Gd.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.oj(() => ({
                                    Kx: u
                                }))
                            },
                            a_: function(u) {
                                b.NJ() === 0 && a.Gd.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.uh.Kx && a.oj(() => ({
                                    Kx: void 0
                                }))
                            },
                            YZ: function(u) {
                                const {
                                    lz: v,
                                    yd: x
                                } = r();
                                b.NJ() === 0 &&
                                    a.Gd.fields.some(({
                                        value: y
                                    }) => y.options.some(({
                                        value: z
                                    }) => z.id === u)) && x !== u && !v && a.oj(() => ({
                                        Sr: u
                                    }))
                            },
                            b_: function(u) {
                                b.NJ() === 0 && a.Gd.fields.some(({
                                    value: v
                                }) => v.options.some(({
                                    value: x
                                }) => x.id === u)) && a.uh.Sr && a.oj(() => ({
                                    Sr: void 0
                                }))
                            }
                        }
                    },
                    c5 = function({
                        W5: a,
                        lk: b,
                        KK: c
                    }) {
                        var d;
                        const e = (d = a.fields.get(b)) !== null && d !== void 0 ? d : {
                            id: b,
                            Us: new Map,
                            total: 0
                        };
                        var f;
                        d = Math.max(0, ((f = e.Us.get(c)) !== null && f !== void 0 ? f : 0) - 1);
                        f = new Map(e.Us);
                        d > 0 ? f.set(c, d) : f.delete(c);
                        return {
                            fields: e5(a.fields, b, {
                                id: b,
                                Us: f,
                                total: Math.max(0,
                                    e.total - 1)
                            })
                        }
                    },
                    gDb = function({
                        xna: a,
                        lk: b,
                        KK: c
                    }) {
                        var d;
                        const e = (d = a.fields.get(b)) !== null && d !== void 0 ? d : {
                            id: b,
                            Us: new Map,
                            total: 0
                        };
                        var f;
                        d = ((f = e.Us.get(c)) !== null && f !== void 0 ? f : 0) + 1;
                        return {
                            fields: e5(a.fields, b, {
                                id: b,
                                Us: e5(e.Us, c, d),
                                total: e.total + 1
                            })
                        }
                    },
                    e5 = function(a, b, c) {
                        return new Map([...a.entries(), [b, c]])
                    },
                    jDb = async function() {
                        var {
                            JT: a
                        } = await __webpack_require__.me(535189).then(() => ({
                            JT: '{\n"af-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Verkeerd",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Dien tans in \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laai tans...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Vanlyn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrek",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Regstreeks"\n},\n"ar":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-AE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-EG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"ar-SA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0633\u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u064a\u0631 \u0635\u062d\u064a\u062d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u062a\u0645 \u062d\u0641\u0638 \u0627\u0644\u0631\u062f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0627\u0631\u064d \u0627\u0644\u0625\u0631\u0633\u0627\u0644...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062c\u0627\u0631\u064d \u0627\u0644\u062a\u062d\u0645\u064a\u0644...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, zero {# \u0635\u0648\u062a} one {\u0635\u0648\u062a \u0648\u0627\u062d\u062f} two {\u0635\u0648\u062a\u0627\u0646} few {# \u0623\u0635\u0648\u0627\u062a} many {# \u0635\u0648\u062a\u064b\u0627} other {# \u0635\u0648\u062a}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u063a\u064a\u0631 \u0645\u062a\u0635\u0644 \u0628\u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0644\u0646 \u062a\u062a\u0645 \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0633\u0645\u0643",\n"d648001f72873b11f1495205043049417024f9cf":"\u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u064a\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0645\u0628\u0627\u0634\u0631"\n},\n"as-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0985\u09b6\u09c1\u09a6\u09cd\u09a7",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u09a6\u09be\u0996\u09bf\u09b2 \u0995\u09f0\u09be \u09b9\u09c8 \u0986\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\'\u09a1 \u09b9\u09c8 \u0986\u099b\u09c7",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09bf\u09ac\u09be \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u2019\u09b2",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b6\u09c1\u09a6\u09cd\u09a7",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"az-AZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"T\u0259qdim edilir...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckl\u0259nir...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Canl\u0131"\n},\n"bg-BG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041f\u043e\u0434\u0430\u0432\u0430\u043d\u0435\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0440\u0435\u0436\u0434\u0430\u043d\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041f\u0440\u0430\u0432\u0438\u043b\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u041d\u0430 \u0436\u0438\u0432\u043e"\n},\n"bn-BD":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09df\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u09ad\u09c1\u09b2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u09aa\u09cd\u09b0\u09a4\u09bf\u0995\u09cd\u09b0\u09bf\u09af\u09bc\u09be \u09b8\u09c7\u09ad \u0995\u09b0\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u099c\u09ae\u09be \u09a6\u09c7\u0993\u09df\u09be \u09b9\u099a\u09cd\u099b\u09c7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u09b2\u09cb\u09a1 \u09b9\u099a\u09cd\u099b\u09c7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u099f\u09bf \u09ad\u09cb\u099f} other {# \u099f\u09bf \u09ad\u09cb\u099f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0985\u09ab\u09b2\u09be\u0987\u09a8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u09b6\u09c7\u09af\u09bc\u09be\u09b0 \u0995\u09b0\u09be \u09b9\u09ac\u09c7 \u09a8\u09be",\n"d648001f72873b11f1495205043049417024f9cf":"\u0995\u09cb\u09a8\u09cb \u09b8\u09ae\u09b8\u09cd\u09af\u09be \u09b9\u09df\u09c7\u099b\u09c7",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u09b8\u09a0\u09bf\u0995",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u09b2\u09be\u0987\u09ad"\n},\n"ca-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"El teu nom es compartir\u00e0",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecte",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"S\'ha desat la resposta",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"S\'est\u00e0 enviant...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"S\'est\u00e0 carregant...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} other {# vots}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sense connexi\u00f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No es compartir\u00e0 el teu nom",\n"d648001f72873b11f1495205043049417024f9cf":"Hi ha hagut un problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcte",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicada"\n},\n"ceb-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sayop",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Nagsumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nag-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Adunay nahitabo nga problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Husto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"cs-CZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e jm\u00e9no bude sd\u00edleno",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vn\u011b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpov\u011b\u010f ulo\u017eena",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odes\u00edl\u00e1n\u00ed\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edt\u00e1n\u00ed...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0hlas} few {#\u00a0hlasy} many {#\u00a0hlasu} other {#\u00a0hlas\u016f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e jm\u00e9no nebude sd\u00edleno",\n"d648001f72873b11f1495205043049417024f9cf":"N\u011bco se pokazilo",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vn\u011b",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00a0dispozici"\n},\n"cy-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Anghywir",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wrthi\'n cyflwyno...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yn llwytho...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"All-lein",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Cywir",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yn Fyw"\n},\n"da-DK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dit navn deles",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Forkert",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svaret er gemt",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Indsender...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Indl\u00e6ser...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dit navn deles ikke",\n"d648001f72873b11f1495205043049417024f9cf":"Der gik noget galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Korrekt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"de-DE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Dein Name bleibt nicht anonym",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Falsch",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwort gespeichert",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Wird gesendet \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# Stimme} other {# Stimmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Dein Name ist nicht sichtbar",\n"d648001f72873b11f1495205043049417024f9cf":"Da ist etwas schiefgelaufen.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Richtig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"el-GR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u039b\u03ac\u03b8\u03bf\u03c2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0397 \u03b1\u03c0\u03ac\u03bd\u03c4\u03b7\u03c3\u03b7 \u03b1\u03c0\u03bf\u03b8\u03b7\u03ba\u03b5\u03cd\u03c4\u03b7\u03ba\u03b5",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u03a5\u03c0\u03bf\u03b2\u03bf\u03bb\u03ae\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u03a6\u03cc\u03c1\u03c4\u03c9\u03c3\u03b7\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u03c8\u03ae\u03c6\u03bf\u03c2} other {# \u03c8\u03ae\u03c6\u03bf\u03b9}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0395\u03ba\u03c4\u03cc\u03c2 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u03a4\u03bf \u03cc\u03bd\u03bf\u03bc\u03ac \u03c3\u03b1\u03c2 \u03b4\u03b5\u03bd \u03b8\u03b1 \u03ba\u03bf\u03b9\u03bd\u03bf\u03c0\u03bf\u03b9\u03b7\u03b8\u03b5\u03af",\n"d648001f72873b11f1495205043049417024f9cf":"\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03ba\u03ac\u03c0\u03bf\u03b9\u03bf \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u03a3\u03c9\u03c3\u03c4\u03ac",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0394\u03b9\u03b1\u03b8\u03ad\u03c3\u03b9\u03bc\u03bf"\n},\n"en":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-AU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-GB":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"en-psaccent":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Submitting...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Loading...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"es-419":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-AR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Vamos a compartir tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se va a compartir tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-CO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no sali\u00f3 bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-MX":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no funcion\u00f3.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"es-US":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Compartiremos tu nombre.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrecto",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Guardamos tu respuesta.",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sin conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"No se compartir\u00e1 tu nombre.",\n"d648001f72873b11f1495205043049417024f9cf":"Se produjo un error",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correcto",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"P\u00fablico"\n},\n"et-EE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vale",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Esitatud ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laadimine ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"V\u00f5rgu\u00fchenduseta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u00d5ige",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Avalik"\n},\n"eu-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Oker",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bidaltzen...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kargatzen\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Lineaz kanpo",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Zuzen",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publikoa"\n},\n"fa-IR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0646\u0627\u062f\u0631\u0633\u062a",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062f\u0631\u062d\u0627\u0644 \u0627\u0631\u0633\u0627\u0644\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u062f\u0631\u062d\u0627\u0644 \u0628\u0627\u0631 \u06a9\u0631\u062f\u0646\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641\u0644\u0627\u06cc\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0635\u062d\u06cc\u062d",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0632\u0646\u062f\u0647"\n},\n"ff-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nana daidai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Tottirde...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Lowd\u00e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Boowal \u0253oggol",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Huunde boni",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Wuur"\n},\n"fi-FI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nimesi jaetaan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"V\u00e4\u00e4rin",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Vastaus tallennettu",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"L\u00e4hetet\u00e4\u00e4n...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ladataan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u00e4\u00e4ni} other {# \u00e4\u00e4nt\u00e4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nime\u00e4si ei jaeta",\n"d648001f72873b11f1495205043049417024f9cf":"Jokin meni pieleen",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Oikein",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"K\u00e4ynniss\u00e4"\n},\n"fr-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-CA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera communiqu\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"fr-FR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Votre nom sera partag\u00e9",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u00e9ponse enregistr\u00e9e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Envoi en cours...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Chargement\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0vote} other {#\u00a0votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hors ligne",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Votre nom ne sera pas partag\u00e9",\n"d648001f72873b11f1495205043049417024f9cf":"Une erreur est survenue",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correct",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En ligne"\n},\n"gl-ES":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Se compartir\u00e1 el nombre",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorrectas",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"La respuesta se ha guardado",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Cargando...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sen conexi\u00f3n",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Tu nombre no se compartir\u00e1",\n"d648001f72873b11f1495205043049417024f9cf":"Algo no ha salido bien",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correctas",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"En directo"\n},\n"gu-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a96\u0acb\u0a9f\u0abe",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0a9c\u0ab5\u0abe\u0aac \u0ab8\u0abe\u0a9a\u0ab5\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0acd\u0aaf\u0acb",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0ab8\u0aac\u0aae\u0abf\u0a9f \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe \u0a9b\u0ac0\u0a8f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0ab2\u0acb\u0aa1 \u0a95\u0ab0\u0ac0 \u0ab0\u0ab9\u0acd\u0aaf\u0abe\u0a82 \u0a9b\u0ac7...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0aae\u0aa4} other {# \u0aae\u0aa4}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a91\u0aab\u0ab2\u0abe\u0a87\u0aa8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0aa4\u0aae\u0abe\u0ab0\u0ac1\u0a82 \u0aa8\u0abe\u0aae \u0ab6\u0ac7\u0ab0 \u0a95\u0ab0\u0ab5\u0abe\u0aae\u0abe\u0a82 \u0a86\u0ab5\u0ab6\u0ac7 \u0aa8\u0ab9\u0ac0\u0a82",\n"d648001f72873b11f1495205043049417024f9cf":"\u0a95\u0a82\u0a88\u0a95 \u0a96\u0acb\u0a9f\u0ac1\u0a82 \u0aa5\u0aaf\u0ac1\u0a82",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0ab8\u0abe\u0a9a\u0abe",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ab2\u0abe\u0a87\u0ab5"\n},\n"ha-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Ba daidai ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Aikawa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u018aorawa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"A waje da layi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Daidai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Nan take"\n},\n"he-IL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u05e9\u05de\u05da \u05d9\u05e9\u05d5\u05ea\u05e3",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u05dc\u05d0 \u05e0\u05db\u05d5\u05df",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u05d4\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e0\u05e9\u05de\u05e8\u05d4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u05e9\u05d5\u05dc\u05d7...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u05d8\u05d5\u05e2\u05df...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {\u05d4\u05e6\u05d1\u05e2\u05d4 \u05d0\u05d7\u05ea} two {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} many {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea} other {# \u05d4\u05e6\u05d1\u05e2\u05d5\u05ea}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u05dc\u05d0 \u05de\u05e7\u05d5\u05d5\u05df",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u05d4\u05e9\u05dd \u05e9\u05dc\u05da \u05dc\u05d0 \u05d9\u05e9\u05d5\u05ea\u05e3",\n"d648001f72873b11f1495205043049417024f9cf":"\u05de\u05e9\u05d4\u05d5 \u05d4\u05e9\u05ea\u05d1\u05e9",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u05e0\u05db\u05d5\u05df",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u05d6\u05de\u05d9\u05df"\n},\n"hi-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u091c\u0935\u093e\u092c \u0938\u0947\u0935 \u0915\u093f\u092f\u093e \u0917\u092f\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u093f\u092f\u093e \u091c\u093e \u0930\u0939\u093e \u0939\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0935\u094b\u091f} other {# \u0935\u094b\u091f}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u095e\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0906\u092a\u0915\u093e \u0928\u093e\u092e \u0936\u0947\u092f\u0930 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u091c\u093e\u090f\u0917\u093e",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u094b\u0908 \u0917\u0921\u093c\u092c\u0921\u093c\u0940 \u0939\u0941\u0908",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"hr-HR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e ime se dijeli",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neto\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odgovor je spremljen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Slanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditavanje...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# glas} few {# glasa} other {# glasova}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Izvan mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e se ime ne\u0107e dijeliti",\n"d648001f72873b11f1495205043049417024f9cf":"Do\u0161lo je do pogre\u0161ke",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"hu-HU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"A neved meg lesz osztva",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Helytelen",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"V\u00e1lasz mentve",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Bek\u00fcld\u00e9s...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bet\u00f6lt\u00e9s\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# szavazat} other {# szavazat}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"A neved nem lesz megosztva",\n"d648001f72873b11f1495205043049417024f9cf":"Hiba t\u00f6rt\u00e9nt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Helyes",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u00c9l\u0151"\n},\n"hy-AM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u054d\u056d\u0561\u056c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0546\u0565\u0580\u056f\u0561\u0575\u0561\u0581\u057e\u0578\u0582\u0574 \u0567...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0532\u0565\u057c\u0576\u0578\u0582\u0574...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0531\u0576\u0581\u0561\u0576\u0581",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0543\u056b\u0577\u057f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0540\u0580\u0561\u057a\u0561\u0580\u0561\u056f\u057e\u0561\u056e \u0567"\n},\n"id-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sedang mengirim ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuat ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Benar",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Sudah tayang"\n},\n"ig-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abughi eziokwu",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Na-enyefe",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na-ebugo...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"An\u1ecdgh\u1ecb n\'\u1ecbntanet\u1ecb",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Eziokwu",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Gbanyere"\n},\n"it-IT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Il tuo nome verr\u00e0 condiviso",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Risposta errata",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Risposta salvata",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Stiamo inviando il modulo...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Caricamento in corso...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# voti}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Non condivideremo il tuo nome",\n"d648001f72873b11f1495205043049417024f9cf":"Abbiamo riscontrato un errore",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Risposta corretta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Disponibile"\n},\n"ja-Hira":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u3075\u305b\u3044\u304b\u3044",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u3078\u3093\u3057\u3093\u304c\u307b\u305e\u3093\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u305d\u3046\u3057\u3093\u3061\u3085\u3046...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u3088\u307f\u3053\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u3072\u3087\u3046} other {#\u3072\u3087\u3046}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u304a\u3075\u3089\u3044\u3093",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u3082\u3093\u3060\u3044\u304c\u306f\u3063\u305b\u3044\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u305b\u3044\u304b\u3044",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u3053\u3046\u304b\u3044\u306a\u304b"\n},\n"ja-JP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u3042\u306a\u305f\u306e\u540d\u524d\u304c\u5171\u6709\u3055\u308c\u307e\u3059",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u89e3",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u8fd4\u4fe1\u304c\u4fdd\u5b58\u3055\u308c\u307e\u3057\u305f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u9001\u4fe1\u4e2d...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u30aa\u30d5\u30e9\u30a4\u30f3",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u540d\u524d\u306f\u5171\u6709\u3055\u308c\u307e\u305b\u3093",\n"d648001f72873b11f1495205043049417024f9cf":"\u554f\u984c\u304c\u767a\u751f\u3057\u307e\u3057\u305f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u89e3",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u516c\u958b\u4e2d"\n},\n"jv-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama Anda akan dibagikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons tercatat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimake...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamot...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# suara} other {# suara}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama Anda tidak akan dibagikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terjadi kesalahan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Langsung"\n},\n"ka-GE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u10d0\u10e0\u10d0\u10e1\u10ec\u10dd\u10e0\u10d8",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u10db\u10d8\u10db\u10d3\u10d8\u10dc\u10d0\u10e0\u10d4\u10dd\u10d1\u10e1 \u10e9\u10d0\u10d1\u10d0\u10e0\u10d4\u10d1\u10d0...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u10d8\u10e2\u10d5\u10d8\u10e0\u10d7\u10d4\u10d1\u10d0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u10dd\u10e4\u10da\u10d0\u10d8\u10dc\u10d8",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u10e1\u10ec\u10dd\u10e0\u10d8",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u10e1\u10d0\u10ef\u10d0\u10e0\u10dd"\n},\n"kk-KZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0414\u04b1\u0440\u044b\u0441 \u0435\u043c\u0435\u0441",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0416\u0456\u0431\u0435\u0440\u0456\u043b\u0443\u0434\u0435...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u0435\u043b\u0443\u0434\u0435...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0414\u04b1\u0440\u044b\u0441",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0416\u0430\u043b\u043f\u044b\u0493\u0430 \u043e\u0440\u0442\u0430\u049b"\n},\n"km-KH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1798\u17b7\u1793\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17b6\u1780\u17cb\u1794\u1789\u17d2\u1787\u17bc\u1793...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1780\u17c6\u1796\u17bb\u1784\u178a\u17c6\u178e\u17be\u179a\u1780\u17b6\u179a.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1782\u17d2\u1798\u17b6\u1793\u17a2\u17ca\u17b8\u1793\u1792\u17ba\u178e\u17b7\u178f",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u1798\u17b6\u1793\u17a2\u17d2\u179c\u17b8\u1798\u17bd\u1799\u1781\u17bb\u179f\u1794\u17d2\u179a\u1780\u17d2\u179a\u178f\u17b8",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u178f\u17d2\u179a\u17b9\u1798\u178f\u17d2\u179a\u17bc\u179c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1794\u1793\u17d2\u178f\u1795\u17d2\u1791\u17b6\u179b\u17cb"\n},\n"kn-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0ca6\u0cc6",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0caa\u0ccd\u0cb0\u0ca4\u0cbf\u0c95\u0ccd\u0cb0\u0cbf\u0caf\u0cc6\u0caf\u0ca8\u0ccd\u0ca8\u0cc1 \u0c89\u0cb3\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0cb8\u0cb2\u0ccd\u0cb2\u0cbf\u0cb8\u0cb2\u0cbe\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0cb2\u0ccb\u0ca1\u0ccd \u0c86\u0c97\u0cc1\u0ca4\u0ccd\u0ca4\u0cbf\u0ca6\u0cc6...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0cae\u0ca4} other {# \u0cae\u0ca4\u0c97\u0cb3\u0cc1}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c86\u0cab\u0ccd\u200c\u0cb2\u0cc8\u0ca8\u0ccd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0ca8\u0cbf\u0cae\u0ccd\u0cae \u0cb9\u0cc6\u0cb8\u0cb0\u0ca8\u0ccd\u0ca8\u0cc1 \u0cb9\u0c82\u0c9a\u0cbf\u0c95\u0cca\u0cb3\u0ccd\u0cb3\u0cb2\u0cbe\u0c97\u0cc1\u0cb5\u0cc1\u0ca6\u0cbf\u0cb2\u0ccd\u0cb2",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c8f\u0ca8\u0ccb \u0ca4\u0caa\u0ccd\u0caa\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0cb8\u0cb0\u0cbf\u0caf\u0cbe\u0c97\u0cbf\u0ca6\u0cc6",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0cb2\u0cc8\u0cb5\u0ccd"\n},\n"ko-KR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\uc774\ub984\uc774 \uacf5\uc720\ub429\ub2c8\ub2e4",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\uc798\ubabb\ub41c \ub2f5\ubcc0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\ub2f5\ubcc0\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\uc81c\ucd9c \uc911...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\ub85c\ub4dc \uc911...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\ud45c} other {#\ud45c}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\uc624\ud504\ub77c\uc778",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\ub0b4 \uc774\ub984\uc774 \uacf5\uc720\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4",\n"d648001f72873b11f1495205043049417024f9cf":"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\uc62c\ubc14\ub978 \ub2f5\ubcc0",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\uac8c\uc2dc \uc911"\n},\n"ku-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nerast",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"P\u00ea\u015fk\u00ea\u015fkirin...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Bar dike",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u015ea\u015f\u00eeyek r\u00fb da",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Rast",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Z\u00eend\u00ee"\n},\n"ky-KG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041a\u0430\u0442\u0430",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0422\u0430\u043f\u0448\u044b\u0440\u044b\u043b\u0443\u0443\u0434\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0416\u04af\u043a\u0442\u04e9\u043b\u04af\u04af\u0434\u04e9...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u0443\u0443\u0440\u0430",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0422\u04af\u0437 \u043e\u0431\u043e"\n},\n"lt-LT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0} %",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neteisingai",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Pateikiama...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u012ekeliama...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Neprijungta",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Teisingai",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Vie\u0161as"\n},\n"lv-LV":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepareizi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iesnieg\u0161ana...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Notiek iel\u0101de",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Bezsaist\u0113",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pareizi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tie\u0161saist\u0113"\n},\n"ma-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092d\u090f \u0930\u0939\u0932 \u0905\u091b\u093f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u0935"\n},\n"mg-MG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Diso",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mandrotsaka...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mamoaka\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Ivelan-jotra",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Nisy zavatra tsy nety",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Marina",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Mivantana"\n},\n"mk-MK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0442\u043e\u0447\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0421\u0435 \u043f\u043e\u0434\u043d\u0435\u0441\u0443\u0432\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0421\u0435 \u0432\u0447\u0438\u0442\u0443\u0432\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0458\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0422\u043e\u0447\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0408\u0430\u0432\u043d\u043e"\n},\n"ml-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d41\u0d02.",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0d24\u0d46\u0d31\u0d4d\u0d31\u0d4d",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0d2a\u0d4d\u0d30\u0d24\u0d3f\u0d15\u0d30\u0d23\u0d02 \u0d38\u0d02\u0d30\u0d15\u0d4d\u0d37\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0d38\u0d2e\u0d7c\u0d2a\u0d4d\u0d2a\u0d3f\u0d15\u0d4d\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0d32\u0d4b\u0d21\u0d41\u0d1a\u0d46\u0d2f\u0d4d\u0d2f\u0d41\u0d28\u0d4d\u0d28\u0d41...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d4d} other {# \u0d35\u0d4b\u0d1f\u0d4d\u0d1f\u0d41\u0d15\u0d7e}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d13\u0d2b\u0d4d\u200c\u0d32\u0d48\u0d7b",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0d28\u0d3f\u0d19\u0d4d\u0d19\u0d33\u0d41\u0d1f\u0d46 \u0d2a\u0d47\u0d30\u0d4d \u0d2a\u0d19\u0d4d\u0d15\u0d3f\u0d1f\u0d3f\u0d32\u0d4d\u0d32",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d0e\u0d28\u0d4d\u0d24\u0d4b \u0d2a\u0d3f\u0d36\u0d15\u0d4d \u0d38\u0d02\u0d2d\u0d35\u0d3f\u0d1a\u0d4d\u0d1a\u0d41",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0d36\u0d30\u0d3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0d32\u0d48\u0d35\u0d4d"\n},\n"mn-MN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0411\u0443\u0440\u0443\u0443",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0418\u043b\u0433\u044d\u044d\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0410\u0447\u0430\u0430\u043b\u0436 \u0431\u0430\u0439\u043d\u0430...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041e\u0444\u043b\u0430\u0439\u043d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u042f\u043c\u0430\u0440 \u043d\u044d\u0433 \u0430\u043b\u0434\u0430\u0430 \u0433\u0430\u0440\u043b\u0430\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0417\u04e9\u0432",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0428\u0443\u0443\u0434"\n},\n"mr-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0908\u0932",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u091a\u0942\u0915",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u092a\u094d\u0930\u0924\u093f\u0938\u093e\u0926 \u091c\u0924\u0928 \u0915\u0947\u0932\u093e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0924 \u0906\u0939\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u094b\u0924 \u0906\u0939\u0947...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u092e\u0924} other {# \u092e\u0924\u0947}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0924\u0941\u092e\u091a\u0947 \u0928\u093e\u0935 \u0936\u0947\u0905\u0930 \u0915\u0947\u0932\u0947 \u091c\u093e\u0923\u093e\u0930 \u0928\u093e\u0939\u0940",\n"d648001f72873b11f1495205043049417024f9cf":"\u0915\u093e\u0939\u0940\u0924\u0930\u0940 \u091a\u0942\u0915 \u091d\u093e\u0932\u0940",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0905\u091a\u0942\u0915",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0908\u0935"\n},\n"ms-MY":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Nama anda akan dikongsikan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Respons disimpan",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Menyerahkan...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Memuatkan...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# undian} other {# undian}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Luar talian",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Nama anda tidak akan dikongsikan",\n"d648001f72873b11f1495205043049417024f9cf":"Terdapat sedikit masalah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Betul",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Hidup"\n},\n"my-MM":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u1019\u1019\u103e\u1014\u103a\u1015\u102b",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u1015\u1031\u1038\u1015\u102d\u102f\u1037\u1014\u1031\u101e\u100a\u103a...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u1016\u103d\u1004\u1037\u103a\u1014\u1031\u101e\u100a\u103a...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u1021\u1031\u102c\u1037\u1016\u103a\u101c\u102d\u102f\u1004\u103a\u1038",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u1019\u103e\u1014\u103a\u101e\u100a\u103a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u1010\u1036\u1006\u102d\u1015\u103a\u1021\u101b\u103e\u1004\u103a"\n},\n"nb-NO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Navnet ditt blir delt",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Feil",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar lagret",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Sender inn\u00a0\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laster inn\u00a0...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stemme} other {# stemmer}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Frakoblet",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Navnet ditt blir ikke delt",\n"d648001f72873b11f1495205043049417024f9cf":"Noe gikk galt",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Riktig",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"ne-NP":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u092a\u0947\u0936 \u0917\u0930\u093f\u0926\u0948...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u0939\u0941\u0901\u0926\u0948...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0905\u092b\u0932\u093e\u0907\u0928",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0932\u093e\u0907\u092d"\n},\n"nl-BE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"nl-NL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Je naam wordt gedeeld",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Onjuist",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Antwoord opgeslagen",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Verzenden...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Laden...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# stem} other {# stemmen}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Je naam wordt niet gedeeld",\n"d648001f72873b11f1495205043049417024f9cf":"Er is iets misgegaan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Juist",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"om-ET":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Sirrii miti",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Galchaa jirra...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Fe\'uu jira",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Sarara ala",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Wanti tokko dogongoraan deemaa jira",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sirrii",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"kallattin"\n},\n"pa-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0a17\u0a32\u0a24",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0a38\u0a2a\u0a41\u0a30\u0a26 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0a32\u0a4b\u0a21 \u0a15\u0a40\u0a24\u0a3e \u0a1c\u0a3e \u0a30\u0a3f\u0a39\u0a3e \u0a39\u0a48...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0a14\u0a5e\u0a32\u0a3e\u0a08\u0a28",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0a38\u0a39\u0a40",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0a32\u0a3e\u0a08\u0a35"\n},\n"pa-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u06cc\u062a\u0627 \u062c\u0627 \u0631\u06c1\u06cc\u0627 \u0627\u06d2...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u06cc\u0627 \u0627\u06d2\u06d4\u06d4\u06d4",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"pl-PL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Twoje imi\u0119 i\u00a0nazwisko zostanie udost\u0119pnione",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Niepoprawnie",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpowied\u017a zapisana",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Przesy\u0142anie\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0141adowanie\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# g\u0142os} few {# g\u0142osy} many {# g\u0142os\u00f3w} other {# g\u0142osu}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Twoje imi\u0119 i\u00a0nazwisko nie b\u0119d\u0105 udost\u0119pniane",\n"d648001f72873b11f1495205043049417024f9cf":"Co\u015b posz\u0142o nie tak",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Poprawnie",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Formularz aktywny"\n},\n"pt-BR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Seu nome ser\u00e1 compartilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi salva",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Carregando\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Seu nome n\u00e3o ser\u00e1 compartilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Algo deu errado",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"pt-PT":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"O seu nome ser\u00e1 partilhado",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorreta",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"A resposta foi guardada",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Enviando...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"A carregar...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# voto} other {# votos}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"O seu nome n\u00e3o ser\u00e1 partilhado",\n"d648001f72873b11f1495205043049417024f9cf":"Ocorreu um problema",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Correta",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicado"\n},\n"ro-RO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Numele t\u0103u va fi distribuit",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Incorect",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"R\u0103spunsul a fost salvat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Se trimite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Se \u00eencarc\u0103...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vot} few {# voturi} other {# de voturi}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Numele t\u0103u nu va fi distribuit",\n"d648001f72873b11f1495205043049417024f9cf":"Ceva nu a mers cum trebuie",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Corect",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicat"\n},\n"ru-RU":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0435\u0432\u0435\u0440\u043d\u043e",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u041e\u0442\u0432\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0433\u043e\u043b\u043e\u0441} few {#\u00a0\u0433\u043e\u043b\u043e\u0441\u0430} many {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432} other {#\u00a0\u0433\u043e\u043b\u043e\u0441\u043e\u0432}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u0441\u0435\u0442\u0438",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043e",\n"d648001f72873b11f1495205043049417024f9cf":"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0412\u0435\u0440\u043d\u043e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e"\n},\n"sd-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0917\u0932\u0924",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u091c\u092e\u093e \u0915\u0930\u093e\u0913 \u092a\u092f\u094b \u0935\u091e\u0947...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0932\u094b\u0921 \u092a\u092f\u094b \u0925\u093f\u0910...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0911\u092b\u0932\u093e\u0907\u0928\u0902",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0938\u0939\u0940",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u091c\u0940\u0924\u094b-\u091c\u093e\u0917\u0924\u094b"\n},\n"si-LK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0dba\u0ddc\u0db8\u0dd4 \u0d9a\u0dbb\u0db8\u0dd2\u0db1\u0dca...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0db4\u0dd6\u0dbb\u0dab\u0dba \u0dc0\u0dda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0d95\u0dc6\u0dca\u0dbd\u0dba\u0dd2\u0db1\u0dca",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"\u0d9a\u0dd4\u0db8\u0d9a\u0dca \u0dc4\u0ddd \u0dc0\u0dd0\u0dbb\u0daf\u0dd3 \u0d9c\u0ddc\u0dc3\u0dca \u0d87\u0dad.",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0db1\u0dd2\u0dc0\u0dd0\u0dbb\u0daf\u0dd2",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0dc3\u0da2\u0dd3\u0dc0\u0dd3"\n},\n"sk-SK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Va\u0161e meno sa bude zdie\u013ea\u0165",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nespr\u00e1vne",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Odpove\u010f bola ulo\u017een\u00e1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Odosiela sa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Na\u010d\u00edtava sa...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# hlas} few {# hlasy} many {# hlasu} other {# hlasov}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Va\u0161e meno sa nebude zdie\u013ea\u0165",\n"d648001f72873b11f1495205043049417024f9cf":"Vyskytla sa chyba",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Spr\u00e1vne",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Na\u017eivo"\n},\n"sl-SI":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Nepravilno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po\u0161iljanje \u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Nalaganje ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Brez povezave",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Pravilno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"V \u017eivo"\n},\n"sn-ZW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Vatadza",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Kutumira...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kurodha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Hapana indaneti",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Pane zvakanganisika",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Vagona",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Ruzhinji"\n},\n"so-SO":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Khalad",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Gudbinta...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Soo wada bogga.",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Qadka ka maqan",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Waxbaa khaldan",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sax",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Toos"\n},\n"sq-AL":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"E pasakt\u00eb",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Po d\u00ebrgohet...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"N\u00eb ngarkim...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Jasht\u00eb linje",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Ndodhi nj\u00eb gabim",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"E sakt\u00eb",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktiv"\n},\n"sr-RS":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Neta\u010dno",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Prosle\u0111ivanje...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"U\u010ditava se...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Van mre\u017ee",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ta\u010dno",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"U\u017eivo"\n},\n"su-ID":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Salah",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Ngirimkeun...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Ngamuat...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflen",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Aya nu salah",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Bener",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Aktif"\n},\n"sv-SE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ditt namn kommer att delas",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Fel",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Svar sparat",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Skickar in ...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"L\u00e4ser in ...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# r\u00f6st} other {# r\u00f6ster}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ditt namn kommer inte att delas",\n"d648001f72873b11f1495205043049417024f9cf":"N\u00e5gonting gick fel",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"R\u00e4tt",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Publicerad"\n},\n"sw-KE":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Si sahihi",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Inawasilisha...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Kupakia...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Nje ya mtandao",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Sahihi",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Moja kwa moja"\n},\n"ta-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bc1\u0bae\u0bcd",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0ba4\u0bb5\u0bb1\u0bc1",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0baa\u0ba4\u0bbf\u0bb2\u0bcd \u0b9a\u0bc7\u0bae\u0bbf\u0b95\u0bcd\u0b95\u0baa\u0bcd\u0baa\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0b9a\u0bae\u0bb0\u0bcd\u0baa\u0bcd\u0baa\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0b8f\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bbf\u0bb1\u0ba4\u0bc1...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1} other {# \u0bb5\u0bbe\u0b95\u0bcd\u0b95\u0bc1\u0b95\u0bb3\u0bcd}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0b86\u0b83\u0baa\u0bcd\u0bb2\u0bc8\u0ba9\u0bcd",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0baa\u0b95\u0bbf\u0bb0\u0baa\u0bcd\u0baa\u0b9f\u0bbe\u0ba4\u0bc1",\n"d648001f72873b11f1495205043049417024f9cf":"\u0b8f\u0ba4\u0bcb \u0ba4\u0bb5\u0bb1\u0bbe\u0b95\u0bbf\u0bb5\u0bbf\u0b9f\u0bcd\u0b9f\u0ba4\u0bc1",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0b9a\u0bb0\u0bbf",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0ba8\u0bc7\u0bb0\u0bb2\u0bc8"\n},\n"te-IN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c41\u0c24\u0c41\u0c02\u0c26\u0c3f",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f \u0c15\u0c3e\u0c26\u0c41",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0c2a\u0c4d\u0c30\u0c24\u0c3f\u0c38\u0c4d\u0c2a\u0c02\u0c26\u0c28 \u0c38\u0c47\u0c35\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0c38\u0c2e\u0c30\u0c4d\u0c2a\u0c3f\u0c38\u0c4d\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0c32\u0c4b\u0c21\u0c4d \u0c05\u0c35\u0c41\u0c24\u0c4b\u0c02\u0c26\u0c3f...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0c13\u0c1f\u0c4d\u200c} other {# \u0c13\u0c1f\u0c4d\u200c\u0c32\u0c41}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0c06\u0c2b\u0c4d\u200c\u0c32\u0c48\u0c28\u0c4d",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0c2e\u0c40 \u0c2a\u0c47\u0c30\u0c41 \u0c37\u0c47\u0c30\u0c4d \u0c1a\u0c47\u0c2f\u0c2c\u0c21\u0c26\u0c41",\n"d648001f72873b11f1495205043049417024f9cf":"\u0c0f\u0c26\u0c4b \u0c38\u0c2e\u0c38\u0c4d\u0c2f \u0c0f\u0c30\u0c4d\u0c2a\u0c21\u0c3f\u0c02\u0c26\u0c3f",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0c38\u0c30\u0c48\u0c28\u0c26\u0c3f",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0c2a\u0c2c\u0c4d\u0c32\u0c3f\u0c15\u0c4d"\n},\n"th-TH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e16\u0e39\u0e01\u0e41\u0e0a\u0e23\u0e4c",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u0e44\u0e21\u0e48\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e41\u0e25\u0e49\u0e27",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e2a\u0e48\u0e07...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u0e42\u0e2b\u0e27\u0e15} other {# \u0e42\u0e2b\u0e27\u0e15}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0e2d\u0e2d\u0e1f\u0e44\u0e25\u0e19\u0e4c",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0e23\u0e30\u0e1a\u0e1a\u0e08\u0e30\u0e44\u0e21\u0e48\u0e41\u0e0a\u0e23\u0e4c\u0e0a\u0e37\u0e48\u0e2d\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13",\n"d648001f72873b11f1495205043049417024f9cf":"\u0e21\u0e35\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e1a\u0e32\u0e07\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e40\u0e01\u0e34\u0e14\u0e02\u0e36\u0e49\u0e19",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0e43\u0e0a\u0e49\u0e07\u0e32\u0e19\u0e44\u0e14\u0e49"\n},\n"tl-PH":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ibabahagi ang iyong pangalan",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Hindi Tama",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Na-save ang tugon",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Isinusumite...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Naglo-load...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# boto} other {# (na) boto}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Hindi ibabahagi ang iyong pangalan",\n"d648001f72873b11f1495205043049417024f9cf":"May maling nangyari",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Tama",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"tr-TR":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"%{0}",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Ad\u0131n\u0131z payla\u015f\u0131lacak",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Yanl\u0131\u015f",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Yan\u0131t\u0131n\u0131z\u0131 kaydettik",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"G\u00f6nderiliyor...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Y\u00fckleniyor...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# oy} other {# oy}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c7evrimd\u0131\u015f\u0131",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Ad\u0131n\u0131z\u0131 payla\u015fmayaca\u011f\u0131z",\n"d648001f72873b11f1495205043049417024f9cf":"Bir sorunla kar\u015f\u0131la\u015ft\u0131k",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Do\u011fru",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Yay\u0131nda"\n},\n"uk-UA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}\u00a0%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u0431\u0443\u0434\u0435 \u043d\u0430\u0434\u0456\u0441\u043b\u0430\u043d\u043e",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0412\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043e",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u041d\u0430\u0434\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u044c} few {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456} many {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439} other {#\u00a0\u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0435\u0439}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u041d\u0435 \u0432 \u043c\u0435\u0440\u0435\u0436\u0456",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u0412\u0430\u0448\u0435 \u0456\u043c\u2019\u044f \u043d\u0435 \u043d\u0430\u0434\u0441\u0438\u043b\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f",\n"d648001f72873b11f1495205043049417024f9cf":"\u0421\u0442\u0430\u043b\u0430\u0441\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0430",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u041d\u0430\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0456 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0443\u0441\u0456\u043c"\n},\n"ur-PK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u063a\u0644\u0637",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u062c\u0645\u0639 \u06a9\u0631\u0648\u0627 \u0631\u06c1\u06d2 \u06c1\u06cc\u06ba...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0644\u0648\u0688 \u06c1\u0648 \u0631\u06c1\u0627 \u06c1\u06d2...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u0622\u0641 \u0644\u0627\u0626\u0646",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u062f\u0631\u0633\u062a",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u0628\u0631\u0627\u06c1\u0650 \u0631\u0627\u0633\u062a"\n},\n"uz-UZ":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Noto\u02bbg\u02bbri",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Yuborilmoqda...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Yuklanmoqda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Oflayn",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"To\u02bbg\u02bbri",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Jonli"\n},\n"vi-VN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd \u0111\u01b0\u1ee3c chia s\u1ebb",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Kh\u00f4ng ch\u00ednh x\u00e1c",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u0110\u00e3 l\u01b0u c\u00e2u tr\u1ea3 l\u1eddi",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u0110ang g\u1eedi...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u0110ang t\u1ea3i...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn} other {# l\u01b0\u1ee3t b\u00ecnh ch\u1ecdn}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"T\u00ean c\u1ee7a b\u1ea1n s\u1ebd kh\u00f4ng \u0111\u01b0\u1ee3c chia s\u1ebb",\n"d648001f72873b11f1495205043049417024f9cf":"\u0110\u00e3 x\u1ea3y ra l\u1ed7i",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Ch\u00ednh x\u00e1c",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Tr\u1ef1c ti\u1ebfp"\n},\n"wo-SN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Jubul",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Mingi koy joxe...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Mingi yab...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Amul net",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Amna lu jaarul yoon",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Jub na",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Teew"\n},\n"xh-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Abangachananga",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyangenisa...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalowuda...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"I-Offline",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Abachanileyo",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"iLive"\n},\n"yo-NG":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"K\u00f2 t\u1ecd\u0300n\u00e0",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u01f8f\u00e0kal\u1eb9\u0300...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u00d3 n \u1e63araj\u1ecd...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u00c0\u00ecs\u00ed n\u00ed on\u00edfor\u00edkor\u00ed",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"B\u1eb9\u0301\u1eb9\u0300 ni",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Live"\n},\n"zh-CN":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u4f60\u7684\u540d\u79f0\u5c06\u88ab\u5206\u4eab",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u9519\u8bef",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u4fdd\u5b58\u56de\u5e94",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u52a0\u8f7d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {#\u7968} other {#\u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u79bb\u7ebf",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u4f60\u7684\u540d\u79f0\u4e0d\u4f1a\u88ab\u5206\u4eab",\n"d648001f72873b11f1495205043049417024f9cf":"\u51fa\u73b0\u9519\u8bef",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u786e",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u5df2\u4e0a\u7ebf"\n},\n"zh-HK":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u6b63\u5728\u8f09\u5165\u2026\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u932f\u8aa4",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u4e0a\u7dda"\n},\n"zh-TW":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"\u6211\u5011\u6703\u5206\u4eab\u4f60\u7684\u59d3\u540d",\n"42a556d97b24604fe74079d18c6b127b9c784999":"\u4e0d\u6b63\u78ba",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"\u5df2\u5132\u5b58\u56de\u61c9",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"\u6b63\u5728\u63d0\u4ea4\u2026",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"\u8f09\u5165\u4e2d\u2026",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# \u7968} other {# \u7968}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"\u96e2\u7dda",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"\u6211\u5011\u4e0d\u6703\u516c\u958b\u4f60\u7684\u59d3\u540d",\n"d648001f72873b11f1495205043049417024f9cf":"\u767c\u751f\u554f\u984c\u4e86",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"\u6b63\u78ba",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"\u53ef\u4f7f\u7528"\n},\n"zu-ZA":{\n"1e9c8f51c1737724218d4dcd996b1769a2d77f6b":"{0}%",\n"36438292c2849fa28dfce6975a0b5c1e19665fca":"Your name will be shared",\n"42a556d97b24604fe74079d18c6b127b9c784999":"Akunembile",\n"4b3e2f9a17cc080780b94f558797a427feb09699":"Response saved",\n"4f9a47c6024bb1ec7f352e1fb0add2a4d26bdd3a":"Iyathumela...",\n"74e5d2b11c030e63392e0de665716d07b60f5b26":"Iyalayisha...",\n"79c77400a892353e0e83dd51f3846d806258dcaf":"{0, plural, one {# vote} other {# votes}}",\n"8c8ea51f90ca1e4348014807e7819d178adcb284":"Okungaxhunyiwe ku-inthanethi",\n"ab40c71ca870baac6f0586c9976350da3aa8b66e":"Your name won\u2019t be shared",\n"d648001f72873b11f1495205043049417024f9cf":"Something went wrong",\n"db3f1ba4b8b94e6cea45a1edc61f66113e207622":"Kunembile",\n"f251b66f31da32e71b7af4e667c3cccd2995cc4c":"Bukhoma"\n}\n}'
                        }));
                        a = JSON.parse(a);
                        const b = new Map;
                        for (const c in a) b.set(c, Object.values(a[c]));
                        return b
                    },
                    f5 = function({
                        layout: a,
                        direction: b,
                        gap: c,
                        padding: d,
                        background: e,
                        border: f,
                        P: g,
                        cells: h,
                        ...k
                    }) {
                        a = a === "vertical";
                        let l = [];
                        const m = [],
                            n = c && d,
                            p = d ? 1 : 0;
                        let q = 1;
                        for (let r = 0; r < h.length; r++) {
                            const t = h[r];
                            typeof t.size === "string" ? l.push(t.size) : l.push(`${t.size}px`);
                            m.push({ ...t,
                                id: t.id,
                                placement: a ? {
                                    gridColumnStart: `${p+1}`,
                                    gridColumnEnd: `${p+2}`,
                                    gridRowStart: `${p+q}`,
                                    gridRowEnd: `${p+q+1}`,
                                    padding: t.padding ? kDb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                } : {
                                    gridColumnStart: `${p+q}`,
                                    gridColumnEnd: `${p+q+1}`,
                                    gridRowStart: `${p+1}`,
                                    gridRowEnd: `${p+2}`,
                                    padding: t.padding ? kDb(t.padding) : void 0,
                                    alignSelf: t.alignSelf
                                }
                            });
                            q += n ? 2 : 1
                        }
                        n && (l = l.join(` ${c}px `).split(" "));
                        d && (l = [`${d}px`, ...l, `${d}px`]);
                        return { ...k,
                            type: "layout",
                            cells: m,
                            direction: b,
                            fill: e,
                            border: f,
                            P: g,
                            gridTemplateColumns: a ? d ? [`${d}px`, "1fr", `${d}px`] : ["1fr"] : l,
                            gridTemplateRows: a ? l : d ? [`${d}px`, "auto", `${d}px`] : ["auto"],
                            columnGap: n || a ? void 0 : c,
                            rowGap: !n && a ? c : void 0
                        }
                    },
                    lDb =
                    function({
                        padding: a,
                        direction: b,
                        background: c,
                        P: d,
                        Oa: e,
                        border: f,
                        content: g,
                        ref: h,
                        key: k,
                        ...l
                    }) {
                        return { ...l,
                            type: "layout",
                            direction: b,
                            gridTemplateColumns: ["1fr"],
                            gridTemplateRows: ["1fr"],
                            fill: c,
                            P: d,
                            Oa: e,
                            border: f,
                            cells: [{
                                id: "_",
                                content: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2",
                                    alignSelf: "center",
                                    padding: a
                                }
                            }],
                            key: k,
                            ref: h
                        }
                    },
                    kDb = function(a) {
                        switch (a.length) {
                            case 0:
                                break;
                            case 1:
                                return a[0];
                            case 2:
                                return {
                                    la: a[0],
                                    Da: a[1],
                                    Ba: a[0],
                                    ia: a[1]
                                };
                            case 4:
                                return {
                                    la: a[0],
                                    Da: a[1],
                                    Ba: a[2],
                                    ia: a[3]
                                };
                            default:
                                throw Error(`Invalid padding value: ${a}`);
                        }
                    },
                    g5 = function(a, b) {
                        __c.w(b.length > 0, "zero contrast candidates received");
                        const c = new Map;
                        return __c.hx(b, d => {
                            var e;
                            const f = (e = c.get(d)) !== null && e !== void 0 ? e : __c.dL(d, a);
                            c.set(d, f);
                            return f
                        })
                    },
                    i5 = function(a, b) {
                        return __c.cL(a, b) >= 20 ? a : g5(b, h5)
                    },
                    j5 = function(a) {
                        switch (a.type) {
                            case "color":
                                return a.color;
                            case "gradient":
                                return a.Ra.Qi[0].color;
                            default:
                                throw new E(a);
                        }
                    },
                    k5 = function(a, b) {
                        a = __c.eo.create(__c.eo.ka(a.text));
                        b != null && a.hh(b);
                        return {
                            type: "text",
                            fw: 1,
                            text: __c.eo.ka(a)
                        }
                    },
                    l5 = function(a) {
                        switch (a) {
                            case "l":
                                return 1;
                            case "r":
                                return 2;
                            default:
                                throw new E(a);
                        }
                    },
                    m5 = function(a) {
                        switch (a) {
                            case "l":
                                return "ltr";
                            case "r":
                                return "rtl";
                            default:
                                throw new E(a);
                        }
                    },
                    mDb = function(a) {
                        if (a) return {
                            I2: a.I2,
                            $Z: a.$Z,
                            a_: a.a_,
                            YZ: a.YZ,
                            b_: a.b_
                        }
                    },
                    nDb = function({
                        direction: a,
                        text: b,
                        background: c
                    }) {
                        return {
                            id: "header",
                            size: "auto",
                            fill: c,
                            padding: [20, 20, 16, 20],
                            content: k5(b, {
                                direction: m5(a)
                            })
                        }
                    },
                    qDb = function({
                        direction: a,
                        messages: b,
                        Tba: c,
                        Aj: d,
                        ica: e,
                        P: f,
                        state: g,
                        Oy: h,
                        wt: k
                    }) {
                        var l = h !== k,
                            m = g5(k, h5);
                        h = l ? h : m;
                        m = i5("#000000", k);
                        var n = i5(h, k);
                        l = oDb(g, g === 3 && l ? n : m, l);
                        b = {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "45px", "10px"],
                            fill: l,
                            cells: [{
                                id: "text",
                                placement: {
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: k5(c, {
                                    direction: m5(a),
                                    ...(g === 3 && {
                                        color: g5(h, h5)
                                    })
                                })
                            }, g === 3 || g === 4 || g === 5 ? {
                                id: "percentage",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: {
                                    type: "text",
                                    fw: 0,
                                    fontFamily: d,
                                    fontWeight: "bold",
                                    fontSize: pDb,
                                    text: b.eya(e),
                                    textAlign: "end",
                                    direction: m5(a),
                                    color: g === 3 ? g5(h, h5) : g5(k, h5)
                                }
                            } : void 0].filter(wb)
                        };
                        if (g !== 3 && g !== 4 && g !== 5) return b;
                        c = e > 0;
                        const p = e < 100;
                        n = (k = c && !p || !c && p) ? 1 : 2;
                        e = [c ? `${e}fr` : void 0, p ? `${100-e}fr` : void 0].filter(wb);
                        g = {
                            type: "color",
                            color: g === 3 ? h : m,
                            Oa: g === 3 ? 0 : .8
                        };
                        return k ? { ...b,
                            fill: c ? g : l
                        } : {
                            type: "layout",
                            direction: l5(a),
                            gridTemplateRows: ["1fr"],
                            gridTemplateColumns: e,
                            fill: l,
                            cells: [{
                                id: "bar",
                                P: f,
                                fill: g,
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: "2",
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: lDb({
                                    direction: l5(a),
                                    content: {
                                        type: "text",
                                        fw: 0,
                                        text: "",
                                        fontFamily: d,
                                        fontSize: pDb,
                                        direction: m5(a)
                                    }
                                })
                            }, {
                                id: "optionTextWithPercentage",
                                placement: {
                                    gridColumnStart: "1",
                                    gridColumnEnd: `${n+1}`,
                                    gridRowStart: "1",
                                    gridRowEnd: "2"
                                },
                                content: b
                            }]
                        }
                    },
                    oDb = function(a, b, c) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .92
                                };
                            case 1:
                            case 5:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .88
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .74
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: c ? .5 : .92
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .92
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    rDb = function({
                        cMa: a,
                        oF: b,
                        lk: c,
                        direction: d,
                        options: e,
                        yd: f,
                        Kx: g,
                        Sr: h,
                        Sba: k,
                        Aj: l,
                        NS: m,
                        Oy: n,
                        wt: p,
                        messages: q,
                        n3: r
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20],
                            alignSelf: "center",
                            content: f5({
                                layout: "vertical",
                                direction: l5(d),
                                gap: 8,
                                cells: e.map(({
                                    value: t
                                }) => {
                                    var u = t.id === f;
                                    const v = t.id === g,
                                        x = t.id === h;
                                    u = m ? u ? 3 : v ? 5 : 4 : x ? 2 : v ? 1 : 0;
                                    return {
                                        id: t.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: r.option,
                                            key: t.id,
                                            P: k,
                                            Ji: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.I2) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseEnter: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.$Z) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseLeave: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.a_) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseDown: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.YZ) === null || y === void 0 ? void 0 : y.call(b, t.id)
                                            },
                                            onMouseUp: () => {
                                                var y;
                                                return b === null || b === void 0 ? void 0 : (y = b.b_) === null || y === void 0 ? void 0 :
                                                    y.call(b, t.id)
                                            },
                                            ...qDb({
                                                messages: q,
                                                Tba: t.label,
                                                direction: d,
                                                Aj: l,
                                                ica: a.YMa(c, t.id),
                                                P: k,
                                                state: u,
                                                Oy: n,
                                                wt: p
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    wDb = function(a) {
                        const b = a.status,
                            c = a.Aj,
                            d = a.direction,
                            e = a.backgroundColor,
                            f = g5(e, h5);
                        switch (b) {
                            case 0:
                                var g;
                                return {
                                    type: "text",
                                    fw: 1,
                                    text: n5((g = a.statusMessage) !== null && g !== void 0 ? g : a.messages.sZ(), c, d, g5(e, sDb), f)
                                };
                            case 1:
                                return {
                                    type: "text",
                                    fw: 1,
                                    text: n5(a.messages.loading(), c, d, g5(e, tDb), f)
                                };
                            case 2:
                                return {
                                    type: "text",
                                    fw: 1,
                                    text: n5(a.messages.Aea(), c, d, g5(e, tDb), f)
                                };
                            case 3:
                                return {
                                    type: "text",
                                    fw: 1,
                                    text: n5(a.messages.mba(), c, d, g5(e, uDb), f)
                                };
                            case 4:
                                return {
                                    type: "text",
                                    fw: 1,
                                    text: n5(a.messages.dea(), c, d, g5(e, vDb), f)
                                };
                            default:
                                throw new E(b);
                        }
                    },
                    xDb = function({
                        direction: a,
                        messages: b,
                        Aj: c,
                        iba: d,
                        status: e,
                        pb: f,
                        backgroundColor: g
                    }) {
                        var h;
                        f = f.status === 1 ? ((h = f.data.P1) === null || h === void 0 ? void 0 : h.type) === "ANON" ? b.ria() : b.qia() : b.sZ();
                        return [{
                            id: "footer",
                            size: "auto",
                            padding: [0, 20, 20, 20],
                            content: wDb({
                                messages: b,
                                status: e,
                                statusMessage: `${f} | ${b.Wua(d)}`,
                                Aj: c,
                                backgroundColor: g,
                                direction: a
                            })
                        }]
                    },
                    yDb = function({
                        width: a,
                        height: b,
                        ek: c,
                        color: d,
                        mQ: e,
                        backgroundColor: f
                    }) {
                        return {
                            type: "shape",
                            width: a,
                            height: b,
                            gDa: {
                                width: 16,
                                height: 16
                            },
                            ib: [{
                                d: "M 8 16 C 12.4183 16 16 12.4183 16 8 C 16 3.5817 12.4183 0 8 0 C 3.5817 0 0 3.5817 0 8 C 0 12.4183 3.5817 16 8 16 Z",
                                stroke: {
                                    weight: c,
                                    color: d
                                },
                                fill: {
                                    type: "color",
                                    color: d
                                }
                            }, {
                                d: e ? "M11.9541 5.09249C11.5708 4.70916 10.9493 4.70916 10.5659 5.09249L6.84653 8.8119L5.44784 7.39414C5.23981 7.18328 4.97538 7.08048 4.70513 7.09454C4.44717 7.10796 4.22126 7.22537 4.05972 7.38474C3.89817 7.54411 3.77772 7.76841 3.76081 8.02616C3.74309 8.2962 3.8423 8.562 4.05032 8.77286L6.14306 10.8941C6.35108 11.105 6.61551 11.2078 6.88577 11.1937C7.14372 11.1803 7.36963 11.0629 7.53118 10.9035L7.53918 10.8955L11.9541 6.48064C12.3374 6.09731 12.3374 5.47582 11.9541 5.09249Z" : "M11.6813 5.85778C12.1063 5.43279 12.1063 4.74374 11.6813 4.31875C11.2564 3.89376 10.5673 3.89376 10.1423 4.31875L8.00005 6.46102L5.85777 4.31874C5.43279 3.89375 4.74374 3.89375 4.31874 4.31874C3.89375 4.74374 3.89375 5.43278 4.31874 5.85778L6.46101 8.00005L4.31883 10.1422C3.89384 10.5672 3.89384 11.2563 4.31883 11.6813C4.74383 12.1063 5.43288 12.1063 5.85786 11.6813L8.00005 9.53908L10.1422 11.6813C10.5672 12.1062 11.2563 12.1062 11.6813 11.6813C12.1062 11.2563 12.1062 10.5672 11.6813 10.1422L9.53908 8.00005L11.6813 5.85778Z",
                                fill: {
                                    type: "color",
                                    color: f
                                }
                            }]
                        }
                    },
                    BDb = function({
                        direction: a,
                        Tba: b,
                        wt: c,
                        state: d
                    }) {
                        const e = i5("#000000", c);
                        return {
                            type: "layout",
                            gridTemplateRows: ["10px", "1fr", "10px"],
                            gridTemplateColumns: ["10px", "1fr", "2px", "18px", "10px"],
                            fill: zDb(d, e),
                            cells: [{
                                id: "text",
                                placement: {
                                    alignSelf: "center",
                                    gridColumnStart: "2",
                                    gridColumnEnd: "3",
                                    gridRowStart: "2",
                                    gridRowEnd: "3"
                                },
                                content: (() => {
                                    switch (d) {
                                        case 5:
                                            return k5(b, {
                                                direction: m5(a),
                                                color: "#00873d"
                                            });
                                        case 6:
                                            return k5(b, {
                                                direction: m5(a),
                                                color: "#c8001e"
                                            });
                                        case 4:
                                            return k5(b, {
                                                direction: m5(a),
                                                color: g5(c, ADb)
                                            });
                                        default:
                                            return k5(b, {
                                                direction: m5(a)
                                            })
                                    }
                                })()
                            }, d === 5 || d === 6 ? {
                                id: "validation",
                                placement: {
                                    gridColumnStart: "4",
                                    gridColumnEnd: "5",
                                    gridRowStart: "2",
                                    gridRowEnd: "3",
                                    alignSelf: "center"
                                },
                                content: yDb({
                                    width: 18,
                                    height: 18,
                                    ek: 1.6,
                                    mQ: d === 5,
                                    color: d === 5 ? "#00873d" : "#c8001e",
                                    backgroundColor: "#ffffff"
                                })
                            } : void 0].filter(wb)
                        }
                    },
                    zDb = function(a, b) {
                        switch (a) {
                            case 0:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .92
                                };
                            case 1:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .74
                                };
                            case 2:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .88
                                };
                            case 3:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .74
                                };
                            case 4:
                                return {
                                    type: "color",
                                    color: b,
                                    Oa: .9
                                };
                            case 5:
                                return {
                                    type: "color",
                                    color: "#e3fff0",
                                    Oa: 0
                                };
                            case 6:
                                return {
                                    type: "color",
                                    color: "#ffd9df",
                                    Oa: 0
                                };
                            default:
                                throw new E(a);
                        }
                    },
                    CDb = function({
                        oF: a,
                        direction: b,
                        options: c,
                        pb: d,
                        yd: e,
                        Kx: f,
                        Sr: g,
                        Sba: h,
                        wt: k,
                        NS: l,
                        n3: m,
                        context: n
                    }) {
                        return {
                            id: "field",
                            size: "1fr",
                            padding: [16, 20, 10, 20],
                            alignSelf: "center",
                            content: f5({
                                layout: "vertical",
                                direction: l5(b),
                                gap: 8,
                                cells: c.map(({
                                    value: p
                                }) => {
                                    var q = p.id === e;
                                    const r = d.status === 1,
                                        t = p.id === f,
                                        u = p.id === g;
                                    q = r && l && n.mode !== "edit" ?
                                        d.data.nQ(p.id) ? 5 : q ? 6 : 4 : n.mode === "edit" ? r && d.data.nQ(p.id) ? 5 : 4 : q ? 1 : u ? 3 : t ? 2 : 0;
                                    return {
                                        id: p.id,
                                        size: "auto",
                                        alignSelf: "center",
                                        content: {
                                            ref: m.option,
                                            key: p.id,
                                            P: h,
                                            Ji: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.I2) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseEnter: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.$Z) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseLeave: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.a_) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseDown: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.YZ) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            onMouseUp: () => {
                                                var v;
                                                return a === null || a === void 0 ? void 0 : (v = a.b_) === null || v === void 0 ? void 0 : v.call(a, p.id)
                                            },
                                            ...BDb({
                                                direction: b,
                                                Tba: p.label,
                                                wt: k,
                                                state: q
                                            })
                                        }
                                    }
                                })
                            })
                        }
                    },
                    DDb = function({
                        direction: a,
                        text: b,
                        WGa: c,
                        Bla: d,
                        oF: e
                    }) {
                        const f = h5.includes(c),
                            {
                                h: g,
                                s: h,
                                Ua: k
                            } = __c.YD(c);
                        var l = new __c.OD(g, h, k < 10 ? k + 6 : k - 6);
                        l = __c.$D(l);
                        var m = new __c.OD(g, h, k < 10 ? k + 10 : k - 10);
                        m = __c.$D(m);
                        return {
                            id: "submit",
                            size: "auto",
                            padding: [0, 20],
                            content: lDb({
                                direction: l5(a),
                                Ji: e === null || e === void 0 ? void 0 : e.submit,
                                onMouseEnter: e === null || e === void 0 ? void 0 : e.Yaa,
                                onMouseLeave: e === null || e === void 0 ? void 0 : e.Zaa,
                                onMouseDown: e === null || e === void 0 ? void 0 : e.Xaa,
                                onMouseUp: e === null || e === void 0 ? void 0 : e.$aa,
                                background: {
                                    type: "color",
                                    color: d === 2 ? m : d === 1 ? l : c,
                                    Oa: (e === null || e === void 0 ? 0 : e.submit) ? f ? .1 : void 0 : .6
                                },
                                P: 24,
                                padding: 12,
                                content: k5(b, {
                                    direction: m5(a)
                                })
                            })
                        }
                    },
                    FDb = function({
                        oF: a,
                        direction: b,
                        messages: c,
                        Aj: d,
                        vI: e,
                        Oy: f,
                        status: g,
                        pb: h,
                        yd: k,
                        backgroundColor: l,
                        NS: m,
                        cH: n
                    }) {
                        if (!m || !h || !k) {
                            var p;
                            k = f === l ? g5(f, h5) : f;
                            h = (h === null || h === void 0 ? void 0 : h.status) === 1 ? ((p = h.data.P1) === null || p === void 0 ? void 0 : p.type) === "ANON" ? c.ria() : c.qia() : void 0;
                            return [DDb({
                                direction: b,
                                text: e,
                                WGa: k,
                                Bla: n,
                                oF: a
                            }), {
                                id: "quiz_status",
                                size: "auto",
                                padding: [8, 20, 10, 20],
                                content: wDb({
                                    status: g,
                                    statusMessage: h,
                                    Aj: d,
                                    messages: c,
                                    direction: b,
                                    backgroundColor: l
                                })
                            }]
                        }
                        a = g5(l, h5);
                        return [{
                            id: "quiz_results_footer",
                            size: "auto",
                            padding: [20, 20, 24, 20],
                            content: f5({
                                layout: "vertical",
                                direction: l5(b),
                                cells: [{
                                    id: "quiz_result",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        fw: 0,
                                        fontFamily: d,
                                        text: h.data.nQ(k) ? c.$ma() : c.jra(),
                                        fontSize: EDb,
                                        fontWeight: "bold",
                                        textAlign: "center",
                                        direction: m5(b),
                                        color: a
                                    }
                                }, {
                                    id: "quiz_message",
                                    size: "auto",
                                    content: {
                                        type: "text",
                                        fw: 0,
                                        fontFamily: d,
                                        text: c.dya(),
                                        fontSize: o5,
                                        Oa: .2,
                                        textAlign: "center",
                                        direction: m5(b),
                                        color: a
                                    }
                                }]
                            })
                        }]
                    };
                __c.dX.prototype.oX = __c.ca(23, function() {});
                __c.yN.prototype.oX = __c.ca(22, function() {
                    this.ended || this.cD || (this.cD = !0, setTimeout(() => {
                        try {
                            this.ended = !0, __c.oCa(this)
                        } catch (a) {
                            this.M.wb(a, {
                                re: "Error ending span in next cycle",
                                extra: new Map(__c.sN(this))
                            })
                        }
                    }))
                });
                __c.sI.prototype.ica = __c.ca(18, function() {
                    return __c.nI(this, () => __c.VH(this.operators, "%", this.value))
                });
                var GDb = class {
                        constructor() {
                            this.type = "layout"
                        }
                    },
                    p5 = __webpack_require__(519427),
                    q5 = p5.action,
                    X4 = p5.computed,
                    HDb = p5.observable,
                    IDb = p5.reaction,
                    d5 = p5.runInAction;
                var Z4 = class {
                        static A(a) {
                            __c.P(a, {
                                Rna: X4
                            })
                        }
                        get Rna() {
                            const a = [];
                            for (const b of this.list.value) {
                                const c = P4(this, b);
                                if (c === void 0) throw new YCb("undefined value found when deserializing list.");
                                a.push(c)
                            }
                            return a
                        }
                        count() {
                            return this.list.value.count()
                        }
                        toArray() {
                            return this.Rna.map(({
                                value: a
                            }) => a)
                        }
                        first(a) {
                            const b = this.list.value.first(a ? c => a(P4(this, c)) : void 0);
                            if (b != null) return P4(this, b)
                        }
                        last(a) {
                            const b = this.list.value.last(a ? c => a(P4(this, c)) : void 0);
                            if (b != null) return P4(this, b)
                        }
                        next(a, b) {
                            var c =
                                b ? d => b(P4(this, d)) : void 0;
                            a = Q4(this, a);
                            c = this.list.value.next(a, c);
                            if (c != null) return P4(this, c)
                        }
                        Fc(a, b) {
                            var c = b ? d => b(P4(this, d)) : void 0;
                            a = Q4(this, a);
                            c = this.list.value.Fc(a, c);
                            if (c != null) return P4(this, c)
                        }
                        map(a) {
                            return this.list.value.map((b, c) => a(P4(this, b), c))
                        }
                        filter(a) {
                            return this.list.value.filter((b, c) => a(P4(this, b), c)).map(b => P4(this, b))
                        }
                        forEach(a) {
                            return this.list.value.forEach((b, c) => a(P4(this, b), c))
                        }
                        some(a) {
                            return this.list.value.some(b => a(P4(this, b)))
                        }
                        constructor(a, b) {
                            this.vt = b;
                            this.uBa =
                                (Z4.A(this), new WeakMap);
                            this.pBa = new WeakMap;
                            __c.A(a.type === "list");
                            this.list = a
                        }
                    },
                    aDb = class extends Z4 {
                        replace(a, b) {
                            a = Q4(this, a);
                            b = this.list.value.replace(a, this.vt.Ti(b));
                            return P4(this, b)
                        }
                        kF(a, b) {
                            a = a != null ? Q4(this, a) : void 0;
                            b = this.list.value.kF(a, this.vt.Ti(b));
                            return P4(this, b)
                        }
                        insertBefore(a, b) {
                            a = a != null ? Q4(this, a) : void 0;
                            b = this.list.value.insertBefore(a, this.vt.Ti(b));
                            return P4(this, b)
                        }
                        append(a) {
                            a = this.list.value.append(this.vt.Ti(a));
                            return P4(this, a)
                        }
                        prepend(a) {
                            a = this.list.value.prepend(this.vt.Ti(a));
                            return P4(this, a)
                        }
                        delete(a) {
                            a = Q4(this, a);
                            this.list.value.delete(a)
                        }
                        Yn(a, b) {
                            a = a == null ? void 0 : Q4(this, a);
                            b = Q4(this, b);
                            this.list.value.Yn(a, b)
                        }
                    };
                var U4 = class extends Error {
                        constructor(a) {
                            super(a);
                            this.name = "SchemaError"
                        }
                    },
                    YCb = class extends U4 {
                        constructor(a) {
                            super(`ListError: ${a}`)
                        }
                    },
                    R4 = class extends U4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget data`)
                        }
                    },
                    S4 = class extends U4 {
                        constructor(a, b) {
                            super(`Error transforming ${b} into type ${a} of widget state`)
                        }
                    },
                    ZCb = class extends U4 {
                        constructor(a) {
                            super(`Error transforming ${a} into type ${"double"} of document state`)
                        }
                    };
                var b5 = {
                        yd: void 0,
                        lz: void 0,
                        Eca: void 0,
                        results: {
                            fields: new Map
                        }
                    },
                    JDb = {
                        pb: {
                            status: 2
                        },
                        Ft: new Map,
                        cH: 0,
                        Kx: void 0,
                        Sr: void 0,
                        X9: !1,
                        BOa: "unchecked",
                        yQ: !1,
                        Sra: !1
                    };
                var KDb = Y4({
                        type: ["t", V4(["text2"], "text2"), "readonly"],
                        text: ["te", function() {
                            const a = b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "text2") throw new R4("text2", b);
                                return b.value
                            };
                            return {
                                Ti: b => ({
                                    type: "text2",
                                    value: b
                                }),
                                qo: b => {
                                    if ((b === null || b === void 0 ? void 0 : b.type) !== "text2") throw new S4("text2", b);
                                    return b.value
                                },
                                po: a,
                                bq: a
                            }
                        }()]
                    }),
                    r5 = a5({
                        text2: KDb
                    }, a => a.type),
                    LDb = Y4({
                        id: ["i", T4("")],
                        label: ["l", r5]
                    }),
                    MDb = $4(LDb),
                    NDb = $4(T4("")),
                    ODb = Y4({
                        type: ["t", V4(["select"], "select"), "readonly"],
                        id: ["i", T4("")],
                        label: ["l",
                            r5
                        ],
                        options: ["o", MDb],
                        P: ["c", W4(0)],
                        l7: ["co", NDb],
                        qsa: ["tl", V4(["c", "u"], "c")]
                    }),
                    PDb = a5({
                        select: ODb
                    }, a => a.type),
                    QDb = $4(PDb),
                    RDb = Y4({
                        label: ["l", r5]
                    }),
                    SDb = Y4({}),
                    TDb = V4(["l", "r"], "l"),
                    UDb = Y4({
                        minHeight: ["mh", W4(1)],
                        minWidth: ["mw", W4(1)],
                        id: ["i", T4()],
                        tj: ["s", T4()],
                        zh: ["a", bDb(T4())],
                        direction: ["r", TDb],
                        Aj: ["d", T4("")],
                        Hp: ["pf", $Cb()],
                        Np: ["sf", $Cb()],
                        border: ["b", function() {
                            const a = b => {
                                if ((b === null || b === void 0 ? void 0 : b.type) !== "stroke") throw new R4("stroke", b);
                                return b.value
                            };
                            return {
                                Ti: b => ({
                                    type: "stroke",
                                    value: b
                                }),
                                qo: b => {
                                    if ((b === null || b === void 0 ? void 0 : b.type) !== "stroke") throw new S4("stroke", b);
                                    return b.value
                                },
                                po: a,
                                bq: a
                            }
                        }()],
                        P: ["c", W4(0)],
                        header: ["h", bDb(SDb)],
                        yY: ["hh", function(a) {
                            const b = (c, d) => {
                                if (c == null) return a;
                                if ((c === null || c === void 0 ? void 0 : c.type) !== "boolean") throw d === "toWidgetData" ? new R4("boolean", c) : new S4("boolean", c);
                                return c.value
                            };
                            return {
                                Ti: c => ({
                                    type: "boolean",
                                    value: c
                                }),
                                qo: c => b(c, "toWidgetState"),
                                po: c => b(c, "toWidgetData"),
                                bq: c => b(c, "toWidgetData")
                            }
                        }(!1)]
                    }),
                    VDb = UDb.xb({
                        type: ["t", V4(["quiz"],
                            "quiz"), "readonly"],
                        fields: ["f", QDb],
                        footer: ["fo", RDb]
                    }),
                    WDb = UDb.xb({
                        type: ["t", V4(["poll"], "poll"), "readonly"],
                        fields: ["f", QDb]
                    });
                V4(["poll", "quiz"], "quiz");
                var XDb = a5({
                    quiz: VDb,
                    poll: WDb
                }, a => a.type);
                var fDb = {
                    jk: "form_widget_interacted",
                    yt(a) {
                        return __c.Ox({
                            form_id: a.Ac,
                            form_type: a.eMa,
                            action_group: a.ju,
                            action: a.action,
                            location: a.location,
                            linked_design_id: a.X7a,
                            toggle_value: a.vz,
                            editing_context: a.Yh == null ? void 0 : __c.Px(a.Yh),
                            performance_context: a.Hf == null ? void 0 : __c.Qx(a.Hf)
                        })
                    }
                };
                var hDb = Symbol("UNABLE_TO_SUBMIT");
                var YDb = {
                        resultsPercentage: 0,
                        yourNameWillBeShared: 1,
                        incorrectLabel: 2,
                        responseSaved: 3,
                        submitting: 4,
                        loading: 5,
                        numVotes: 6,
                        offline: 7,
                        yourNameWontBeShared: 8,
                        somethingWentWrong: 9,
                        correctLabel: 10,
                        live: 11
                    },
                    ZDb = class {
                        static A(a) {
                            __c.P(a, {
                                hw: HDb.ref
                            })
                        }
                        mg(a) {
                            var b;
                            return (((b = this.hw) === null || b === void 0 ? void 0 : b.get(this.document.language || "en")) || [])[YDb[a]]
                        }
                        dea() {
                            return this.mg("somethingWentWrong") || O("ElTceA")
                        }
                        sZ() {
                            return this.mg("live") || O("/iw6+Q")
                        }
                        $ma() {
                            return this.mg("correctLabel") || O("i3mNPA")
                        }
                        jra() {
                            return this.mg("incorrectLabel") ||
                                O("As1GTA")
                        }
                        dya() {
                            return this.mg("responseSaved") || O("xSH8Og")
                        }
                        Wua(a) {
                            const b = this.mg("numVotes");
                            return b ? __c.Lb(b, [a], this.document.language) : __c.Db("6QpLYA", [a])
                        }
                        eya(a) {
                            const b = this.mg("resultsPercentage");
                            return b ? __c.Lb(b, [a], this.document.language) : __c.Db("sUWUOA", [a])
                        }
                        mba() {
                            return this.mg("offline") || O("nFbxIQ")
                        }
                        loading() {
                            return this.mg("loading") || O("2Q9Q+A")
                        }
                        Aea() {
                            return this.mg("submitting") || O("wutQEA")
                        }
                        ria() {
                            return this.mg("yourNameWontBeShared") || O("Gzs/9g")
                        }
                        qia() {
                            return this.mg("yourNameWillBeShared") ||
                                O("WjcAyg")
                        }
                        constructor(a) {
                            this.document = a;
                            this.hw = (ZDb.A(this), void 0);
                            jDb().then(q5(b => {
                                this.hw = b
                            }))
                        }
                    };
                var $Db = class {
                    static A(a) {
                        __c.P(a, {
                            border: X4
                        })
                    }
                    get border() {
                        const a = this.fs.Gd;
                        a.border.weight && !a.border.color && this.M && this.M.error("Form widget borders cannot have weight without a color");
                        return {
                            weight: a.border.weight,
                            color: a.border.color,
                            qya: a.P
                        }
                    }
                    constructor(a, b) {
                        this.fs = a;
                        this.M = b;
                        $Db.A(this)
                    }
                };
                var aEb = class {
                    static A(a) {
                        __c.P(a, {
                            Hp: X4,
                            Np: X4,
                            Oy: X4,
                            wt: X4
                        })
                    }
                    get Hp() {
                        const a = this.fs.Gd.Hp.color,
                            b = this.fs.Gd.Hp.Ra;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            Ra: b.ref
                        }
                    }
                    get Np() {
                        const a = this.fs.Gd.Np.color,
                            b = this.fs.Gd.Np.Ra;
                        if (a) return {
                            type: "color",
                            color: a
                        };
                        if (b.ref) return {
                            type: "gradient",
                            Ra: b.ref
                        }
                    }
                    get Oy() {
                        if (!this.Hp) return "#000000";
                        switch (this.Hp.type) {
                            case "color":
                                return this.Hp.color;
                            case "gradient":
                                return this.Hp.Ra.Qi[0].color;
                            default:
                                throw new E(this.Hp);
                        }
                    }
                    get wt() {
                        if (!this.Np) return "#000000";
                        switch (this.Np.type) {
                            case "color":
                                return this.Np.color;
                            case "gradient":
                                return this.Np.Ra.Qi[0].color;
                            default:
                                throw new E(this.Np);
                        }
                    }
                    constructor(a) {
                        this.fs = a;
                        aEb.A(this)
                    }
                };
                var h5 = ["#000000", "#ffffff"];
                var pDb = 9 * __c.$V,
                    ADb = ["#cccccc", "#333333"],
                    EDb = 14 * __c.$V,
                    o5 = 9 * __c.$V,
                    sDb = ["#00d200", "#00ed00"],
                    tDb = ["#ffae00", "#ffc654"],
                    uDb = ["#545454", "#c8c8c8"],
                    vDb = ["#e53935", "#ef5350"];
                var n5 = (a, b, c, d, e) => __c.eo.Yb().attrs({
                    "font-size": o5,
                    leading: void 0,
                    "text-align": "center",
                    direction: m5(c),
                    color: d
                }).Ib("\u25cf ").attrs({
                    "font-family": b,
                    "font-size": o5,
                    color: e,
                    "font-kerning": "normal",
                    "font-feature-liga": "on",
                    "font-feature-clig": "on",
                    "font-feature-calt": "on"
                }).Ib(a).Ib("\n").build();
                var bEb;
                bEb = ({
                    eSa: a,
                    bJa: b
                }) => {
                    const c = b.status !== 1 && a.status === 1;
                    return a.status === 1 && b.status === 1 && a.data.XV !== b.data.XV || c
                };
                __c.Vna = {
                    LIa: function(a, b, c, d, e, f, g, h, k) {
                        g.el("forms");
                        const {
                            Opa: l
                        } = d !== null && d !== void 0 ? d : {}, m = h.Cs("ui.rendering.form"), n = {
                            root: new GDb,
                            option: new GDb
                        }, p = new ZDb(b);
                        return {
                            s$: JDb,
                            vt: XDb,
                            qba: ({
                                fs: q
                            }) => {
                                if (l && a) {
                                    var r, t = IDb(() => q.Gd.id, () => {
                                            const v = q.Gd.type,
                                                x = l.get({
                                                    Ac: q.Gd.id,
                                                    zc: a,
                                                    gf: c
                                                });
                                            r === null || r === void 0 || r.unsubscribe();
                                            v === "poll" && (r = x.uQa({
                                                kNa: () => q.Gd.tj
                                            }).subscribe(({
                                                results: y,
                                                tj: z
                                            }) => {
                                                d5(() => {
                                                    const B = new Map(q.uh.Ft);
                                                    var D;
                                                    B.set(z, { ...((D = B.get(z)) !== null && D !== void 0 ? D : b5),
                                                        results: y
                                                    });
                                                    q.oj({
                                                        Ft: B
                                                    })
                                                })
                                            }));
                                            x.getSettings({
                                                hNa: () => q.Gd.zh
                                            }).subscribe(y => {
                                                const z = q.uh.pb;
                                                let B = y;
                                                if (y.status === 1 && !q.Gd.zh && q.Gd.type === "quiz") {
                                                    var D, F;
                                                    const G = (F = (D = q.Gd.fields.first()) === null || D === void 0 ? void 0 : D.value.l7.toArray()) !== null && F !== void 0 ? F : [];
                                                    B = {
                                                        status: 1,
                                                        data: {
                                                            nQ: H => G.includes(H),
                                                            XV: y.data.XV,
                                                            P1: y.data.P1
                                                        }
                                                    }
                                                }
                                                d5(() => {
                                                    q.oj({
                                                        pb: B
                                                    })
                                                });
                                                bEb({
                                                    eSa: B,
                                                    bJa: z
                                                }) && x.qpa({
                                                    tj: q.Gd.tj,
                                                    zh: q.Gd.zh
                                                }).then(q5(G => {
                                                    const H = q.Gd.tj;
                                                    if (G.ok) {
                                                        var J = new Map(q.uh.Ft);
                                                        if (G.value) {
                                                            var M;
                                                            G = G.value;
                                                            var T;
                                                            var R = (T = (M = q.Gd.fields.first()) ===
                                                                null || M === void 0 ? void 0 : M.value.id) !== null && T !== void 0 ? T : "";
                                                            var V;
                                                            ({
                                                                yd: M
                                                            } = (V = G.zn.get(R)) !== null && V !== void 0 ? V : {});
                                                            var da;
                                                            J.set(H, { ...((da = J.get(H)) !== null && da !== void 0 ? da : b5),
                                                                yd: M,
                                                                lz: M
                                                            })
                                                        } else J.set(H, { ...((R = J.get(H)) !== null && R !== void 0 ? R : b5),
                                                            yd: void 0,
                                                            lz: void 0
                                                        });
                                                        q.oj({
                                                            Ft: J,
                                                            Sr: void 0
                                                        })
                                                    }
                                                }))
                                            })
                                        }, {
                                            fireImmediately: !0
                                        }),
                                        u = IDb(() => (k === null || k === void 0 ? void 0 : k.status) === 2, q5(v => {
                                            q.oj({
                                                Sra: v
                                            })
                                        }), {
                                            fireImmediately: !0
                                        });
                                    return () => {
                                        r === null || r === void 0 || r.unsubscribe();
                                        t();
                                        u()
                                    }
                                }
                            },
                            render: (q, r) => {
                                var t = eDb(q);
                                if (l && a) {
                                    var u = l.get({
                                        Ac: q.Gd.id,
                                        zc: a,
                                        gf: c
                                    });
                                    u = iDb(q, t, u, e, f, m)
                                }
                                a: {
                                    var v = q.Gd,
                                        x = new aEb(q),
                                        y = new $Db(q);
                                    switch (v.type) {
                                        case "poll":
                                            var z;
                                            r = q.Gd;
                                            q = q.uh;
                                            v = x.Hp;
                                            x = x.Np;
                                            y = y.border;
                                            var B = y.qya,
                                                D = r.direction,
                                                F = (z = r.fields.first()) === null || z === void 0 ? void 0 : z.value;
                                            if (F && v && x) {
                                                z = j5(v);
                                                var G = j5(x),
                                                    H = t.z9(),
                                                    J = t.Tu();
                                                u = {
                                                    minWidth: r.minWidth,
                                                    minHeight: r.minHeight,
                                                    ...f5({
                                                        layout: "vertical",
                                                        direction: l5(D),
                                                        background: x,
                                                        P: B,
                                                        border: y,
                                                        cells: [r.yY ? void 0 : nDb({
                                                            direction: D,
                                                            text: F.label,
                                                            background: v
                                                        }), rDb({
                                                            cMa: t,
                                                            oF: mDb(u),
                                                            options: F.options,
                                                            Kx: q.Kx,
                                                            Sr: q.Sr,
                                                            yd: J.yd,
                                                            Sba: F.P,
                                                            Oy: z,
                                                            wt: G,
                                                            Aj: r.Aj,
                                                            direction: D,
                                                            NS: H,
                                                            lk: F.id,
                                                            messages: p,
                                                            n3: n
                                                        }), ...xDb({
                                                            direction: D,
                                                            messages: p,
                                                            Aj: r.Aj,
                                                            iba: t.mNa(F.id),
                                                            status: t.NJ(),
                                                            pb: q.pb,
                                                            backgroundColor: G
                                                        })].filter(wb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else u = { ...f5({
                                                    layout: "vertical",
                                                    direction: l5(D),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: r.minWidth,
                                                minHeight: r.minHeight
                                            };
                                            break a;
                                        case "quiz":
                                            v = x;
                                            z = q.Gd;
                                            q = q.uh;
                                            var M = v.Hp;
                                            v = v.Np;
                                            y = y.border;
                                            x = y.qya;
                                            B = z.direction;
                                            var T = (D = z.fields.first()) === null ||
                                                D === void 0 ? void 0 : D.value;
                                            if (T && M && v) {
                                                D = j5(M);
                                                F = j5(v);
                                                G = t.NJ();
                                                H = q.pb.status === 1 && q.pb;
                                                J = t.z9() && H && G === 0;
                                                t = t.Tu();
                                                var R = z.minWidth,
                                                    V = z.minHeight,
                                                    da = l5(B);
                                                M = z.yY ? void 0 : nDb({
                                                    direction: B,
                                                    text: T.label,
                                                    background: M
                                                });
                                                T = CDb({
                                                    oF: mDb(u),
                                                    direction: B,
                                                    options: T.options,
                                                    pb: q.pb,
                                                    Kx: q.Kx,
                                                    Sr: q.Sr,
                                                    yd: t.yd,
                                                    Sba: T.P,
                                                    wt: F,
                                                    NS: J,
                                                    n3: n,
                                                    context: r
                                                });
                                                u = u ? {
                                                    submit: u.submit,
                                                    Yaa: u.Yaa,
                                                    Zaa: u.Zaa,
                                                    Xaa: u.Xaa,
                                                    $aa: u.$aa
                                                } : void 0;
                                                u = {
                                                    minWidth: R,
                                                    minHeight: V,
                                                    ...f5({
                                                        layout: "vertical",
                                                        direction: da,
                                                        background: v,
                                                        P: x,
                                                        border: y,
                                                        cells: [M, T, ...FDb({
                                                            oF: u,
                                                            direction: B,
                                                            messages: p,
                                                            Aj: z.Aj,
                                                            vI: z.footer.label,
                                                            Oy: D,
                                                            status: G,
                                                            NS: J && r.mode !== "edit",
                                                            pb: H ? H : void 0,
                                                            yd: t.yd,
                                                            backgroundColor: F,
                                                            cH: q.cH
                                                        })].filter(wb)
                                                    }),
                                                    ref: n.root
                                                }
                                            } else u = { ...f5({
                                                    layout: "vertical",
                                                    direction: l5(B),
                                                    background: {
                                                        type: "color",
                                                        color: "#ffffff"
                                                    },
                                                    cells: []
                                                }),
                                                minWidth: z.minWidth,
                                                minHeight: z.minHeight
                                            };
                                            break a;
                                        default:
                                            throw new E(v);
                                    }
                                }
                                return u
                            },
                            n3: n
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:137f7892632dc4b4.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [61316], {

        /***/
        401054: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(316289);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var ib = __c.ib;
                var Z = __c.Z;
                var X = __c.X;
                var I = __c.I;
                var L = __c.L;
                var E = __c.E;
                var Ea = __c.Ea;
                var Fa = __c.Fa;
                var clb = function(a) {
                        return new __c.EY({
                            value: a.yd,
                            Iq: new __c.FY({
                                id: a.lk,
                                label: a.Ai,
                                Iq: new alb({
                                    arity: 1,
                                    multiple: !1,
                                    options: a.options.map(b => new blb({
                                        label: b.label,
                                        value: b.id
                                    }))
                                })
                            })
                        })
                    },
                    dlb = function(a) {
                        const b = a.Iq.Iq;
                        __c.A(b.type === "SELECT_FIELD");
                        return {
                            lk: a.Iq.id,
                            Ai: a.Iq.label,
                            yd: a.value,
                            options: b.options.map(c => ({
                                id: c.value,
                                label: c.label
                            }))
                        }
                    },
                    elb = function(a) {
                        return {
                            id: a.id,
                            status: a.status,
                            zn: new Map(a.zn.map(b => [b.Iq.id, dlb(b)]))
                        }
                    },
                    flb = function(a, b) {
                        return {
                            nQ: c => {
                                const d = a.pb.So[0];
                                return d ? d.ana.includes(c) :
                                    !1
                            },
                            XV: a.pb.RFa ? "anon" : "public",
                            P1: b
                        }
                    },
                    glb = function(a, b) {
                        const {
                            initialDelay: c,
                            ZJ: d = 1.6,
                            QF: e,
                            qM: f,
                            dJ: g,
                            signal: h,
                            Raa: k
                        } = b;
                        __c.w(d > 1, "increaseFactor (${increaseFactor}) must be greater than 1");
                        return __c.lx(a, l => {
                            l = Math.min(c * Math.pow(d, l), e);
                            const m = k === null || k === void 0 ? void 0 : k();
                            return m !== void 0 ? Math.max(l, m) : l
                        }, {
                            qM: f,
                            dJ: g,
                            signal: h
                        })
                    },
                    hlb = function({
                        zc: a,
                        Ac: b
                    }) {
                        return `${a}:${b}`
                    },
                    ilb = async function(a) {
                        if (![2, 1, 4].includes(a.wn)) {
                            var b = a.Ac,
                                c = a.zc;
                            GY(() => {
                                a.wn = 2
                            });
                            try {
                                await a.kV.MJ(new __c.HY({
                                    ref: {
                                        Ac: b,
                                        zc: c,
                                        mk: void 0
                                    },
                                    gf: a.gf,
                                    aj: IY(a)
                                })), GY(() => {
                                    a.wn = 4
                                })
                            } catch (d) {
                                GY(() => {
                                    a.wn === 2 && (a.wn = d instanceof __c.iN ? 1 : 5)
                                })
                            }
                        }
                    },
                    IY = function(a) {
                        return a.source.type === "website" ? a.source.aj : void 0
                    },
                    JY = async function(a, b) {
                        try {
                            await a.gF
                        } catch (c) {
                            return Fa()
                        }
                        return b()
                    },
                    llb = async function(a, b, c, d) {
                        d = clb(d);
                        try {
                            const e = await a.Jq.sha(new __c.jlb({
                                bH: b.id,
                                Ac: a.Ac,
                                fingerprint: c,
                                zc: a.zc,
                                gf: a.gf,
                                zn: [d],
                                aj: IY(a),
                                caller: b.submitter,
                                Fka: klb(a, c)
                            }));
                            switch (e.type) {
                                case "SUCCESS":
                                    const f = a.Tu(c);
                                    f.pK = e.FL.id;
                                    f.Zx = e.FL;
                                    return Ea([...e.So]);
                                case "ERROR":
                                    return a.M.wb(new KY("edit submission failed")), Fa();
                                default:
                                    throw new E(e);
                            }
                        } catch (e) {
                            return Fa()
                        }
                    },
                    mlb = async function(a, b, c, d, e) {
                        switch (b.code) {
                            case 3:
                                return a.M.wb(new KY("unknown form")), Fa();
                            case 1:
                            case 2:
                                try {
                                    if (!(await a.qpa({
                                            tj: c,
                                            zh: e
                                        })).ok) return a.M.wb(new KY("backfill submission failed")), Fa();
                                    const {
                                        Zx: f
                                    } = a.Tu(c);
                                    return f && f.zn.length !== 0 ? llb(a, f, c, d) : (a.M.wb(new KY("empty submission")), Fa())
                                } catch (f) {
                                    return a.M.wb(f), Fa()
                                }
                            default:
                                throw new E(b.code);
                        }
                    },
                    klb = function(a, b) {
                        ({
                                Zx: a
                            } =
                            a.Tu(b));
                        a = a === null || a === void 0 ? void 0 : a.submitter;
                        return (a === null || a === void 0 ? void 0 : a.type) === "ANON" ? a : void 0
                    },
                    nlb = function(a, b) {
                        return b.some(c => c === 5) && a.source.type === "website" ? 2 : void 0
                    },
                    LY = __webpack_require__(519427),
                    olb = LY.observable,
                    plb = LY.reaction,
                    GY = LY.runInAction;
                var qlb = __webpack_require__(430256).y;
                __c.MY = L(() => ({
                    type: I("A?", 2, "ANON"),
                    clientId: X(1)
                }));
                __c.NY = L(() => ({
                    type: I("A?", 1, "USER"),
                    brand: X(1),
                    user: X(2),
                    AR: Z(3)
                }));
                __c.OY = __c.gb(() => ({
                    type: [1, __c.NY, 2, __c.MY]
                }), () => ({}));
                __c.PY = () => ({
                    bH: X(1),
                    Ac: X(2),
                    zc: X(6),
                    fingerprint: X(7),
                    gf: Z(5),
                    aj: Z(8),
                    Fka: __c.K(9, __c.MY),
                    caller: __c.K(12, __c.OY)
                });
                __c.rlb = L(() => ({ ...__c.PY(),
                    type: I("A?", 4, "ARCHIVE")
                }));
                var slb = ib(() => [1, 2]);
                var QY = () => ({
                    arity: __c.Sa(1, slb)
                });
                var tlb = L(() => ({ ...QY(),
                    type: I("A?", 8, "EMAIL_FIELD")
                }));
                var ulb = L(() => ({ ...QY(),
                    type: I("A?", 9, "TEXT_FIELD")
                }));
                var blb = L(() => ({
                    label: X(1),
                    value: X(2)
                }));
                var alb = L(() => ({ ...QY(),
                    type: I("A?", 10, "SELECT_FIELD"),
                    options: __c.Ra(11, blb),
                    multiple: __c.gO(12)
                }));
                var vlb = __c.gb(() => ({
                    type: [8, tlb, 9, ulb, 10, alb]
                }), QY);
                __c.FY = L(() => ({
                    id: X(1),
                    label: X(2),
                    Iq: __c.Qa(3, vlb)
                }));
                __c.EY = L(() => ({
                    Iq: __c.Qa(3, __c.FY),
                    value: X(2)
                }));
                __c.jlb = L(() => ({ ...__c.PY(),
                    type: I("A?", 3, "EDIT"),
                    zn: __c.Ra(10, __c.EY),
                    submitter: __c.K(11, __c.OY)
                }));
                __c.RY = L(() => ({
                    zc: X(1),
                    Ac: X(2),
                    mk: Z(3)
                }));
                __c.wlb = ib(() => [1, 2, 3, 4, 5, 7, 8, 9], 1);
                __c.SY = ib(() => [1, 2]);
                __c.HY = L(() => ({
                    ref: __c.Qa(1, __c.RY),
                    a0: __c.Ua(2, __c.wlb),
                    q1: __c.Ta(6, __c.SY),
                    zh: Z(4),
                    gf: Z(3),
                    aj: Z(5)
                }));
                __c.TY = L(() => ({
                    lk: X(1),
                    ana: __c.fO(2)
                }));
                __c.xlb = ib(() => [1, 2]);
                __c.UY = ib(() => [1, 2]);
                var ylb = L(() => ({
                    VI: Z(1),
                    limit: __c.ZN(2, 100),
                    gf: Z(3),
                    eea: __c.Ta(7, __c.xlb),
                    status: __c.Ta(8, __c.UY),
                    zh: Z(20),
                    type: I("A?", 6, "BY_CALLER"),
                    zc: X(11),
                    Ac: X(12),
                    mk: Z(13),
                    aj: Z(14)
                }));
                var zlb = L(() => ({
                    type: I("A?", 1, "WEBSITE"),
                    wJa: X(1)
                }));
                var Alb = L(() => ({
                    type: I("A?", 2, "PREVIEW")
                }));
                var Blb = L(() => ({
                    type: I("A?", 3, "DESIGN"),
                    zc: X(1)
                }));
                __c.Clb = __c.gb(() => ({
                    type: [1, zlb, 2, Alb, 3, Blb]
                }), () => ({}));
                __c.Dlb = L(() => ({
                    i$: X(1),
                    Ac: X(2),
                    mk: X(3),
                    zh: Z(10),
                    source: __c.Qa(4, __c.Clb),
                    zn: __c.Ra(5, __c.EY),
                    Ir: Z(6),
                    rI: Z(7),
                    Qva: Z(8),
                    gf: Z(9),
                    aj: Z(11)
                }));
                var Elb = class {
                    MJ(a) {
                        const b = this.bufferData;
                        if (b) {
                            b.buffer.push(a);
                            const e = b.buffer.length - 1;
                            return b.FGa.then(f => ({
                                form: f.ida[e].form,
                                jS: f.jS
                            }))
                        }
                        const c = this.fVa,
                            d = [a];
                        a = new Promise((e, f) => {
                            c(async () => {
                                this.bufferData = void 0;
                                try {
                                    const g = await this.Jq.kqa({
                                        Vxa: d
                                    });
                                    e(g)
                                } catch (g) {
                                    f(g)
                                }
                            }, 500)
                        });
                        this.bufferData = {
                            buffer: d,
                            FGa: a
                        };
                        return a.then(e => ({
                            form: e.ida[0].form,
                            jS: e.jS
                        }))
                    }
                    constructor(a) {
                        var b = setTimeout;
                        this.Jq = a;
                        this.fVa = b
                    }
                };
                var Flb = class {
                    start() {
                        if (this.yI) return this.yI;
                        let a, b = !1;
                        const c = async () => {
                            a = glb(this.jXa, {
                                initialDelay: this.ha.initialDelay,
                                ZJ: this.ha.ZJ,
                                QF: this.ha.QF,
                                Raa: this.ha.Raa,
                                dJ: !0
                            });
                            try {
                                const d = await a.result;
                                b || this.effect(d)
                            } catch (d) {} finally {
                                b || c()
                            }
                        };
                        c();
                        return this.yI = () => {
                            b = !0;
                            a === null || a === void 0 || a.cancel();
                            this.yI = void 0
                        }
                    }
                    cancel() {
                        this.yI && this.yI()
                    }
                    constructor(a, b, c) {
                        this.jXa = a;
                        this.effect = b;
                        this.ha = c
                    }
                };
                var Glb, KY;
                __c.Hlb = class {
                    get(a) {
                        a = this.getContext(a);
                        ilb(a);
                        return a
                    }
                    Hc(a) {
                        const b = this.getContext(a);
                        b.rW(a);
                        return b
                    }
                    getContext({
                        Ac: a,
                        zc: b,
                        gf: c
                    }) {
                        const d = hlb({
                                zc: b,
                                Ac: a
                            }),
                            e = this.contexts.get(d);
                        if (e) return e;
                        a = new Glb(a, b, c, this.kV, this.Jq, this.M, this.source);
                        this.contexts.set(d, a);
                        return a
                    }
                    constructor(a, b, c = {
                        type: "design"
                    }) {
                        this.Jq = a;
                        this.M = b;
                        this.source = c;
                        this.contexts = new Map;
                        this.kV = new Elb(a)
                    }
                };
                Glb = class {
                    static A(a) {
                        __c.P(a, {
                            wn: olb.ref
                        })
                    }
                    get status() {
                        switch (this.wn) {
                            case 0:
                            case 2:
                            case 3:
                                return 1;
                            case 4:
                                return 2;
                            case 5:
                            case 1:
                                return 3;
                            default:
                                throw new E(this.wn);
                        }
                    }
                    get gF() {
                        return new Promise((a, b) => {
                            plb(() => this.status, (c, d, e) => {
                                switch (c) {
                                    case 2:
                                        a();
                                        e.dispose();
                                        break;
                                    case 3:
                                        b(Error("Form initialization errored."));
                                        e.dispose();
                                        break;
                                    case 1:
                                        break;
                                    default:
                                        throw new E(c);
                                }
                            }, {
                                fireImmediately: !0
                            })
                        })
                    }
                    getSettings(a) {
                        return new qlb(b => {
                            const c = plb(() => a.hNa(), async d => {
                                if (d) {
                                    const e = this.Mza.get(d);
                                    if (e) {
                                        b.next({
                                            status: 1,
                                            data: e
                                        });
                                        return
                                    }
                                }
                                try {
                                    b.next({
                                        status: 2
                                    });
                                    await this.gF;
                                    const {
                                        form: e,
                                        Ona: f
                                    } = await this.Jq.MJ(new __c.HY({
                                        ref: new __c.RY({
                                            Ac: this.Ac,
                                            zc: this.zc
                                        }),
                                        zh: d,
                                        gf: this.gf,
                                        aj: IY(this),
                                        a0: [8]
                                    })), g = flb(e.pb, f);
                                    d && this.Mza.set(d, g);
                                    b.next({
                                        status: 1,
                                        data: g
                                    })
                                } catch (e) {
                                    b.next((0, __c.Pkb)({
                                        zh: d
                                    })), this.M.wb(e)
                                }
                            }, {
                                fireImmediately: !0
                            });
                            return () => c()
                        })
                    }
                    async qpa(a) {
                        const b = this.Tu(a.tj);
                        return b.EJ ? b.EJ : JY(this, async () => {
                            b.EJ = this.Jq.rpa(new ylb({
                                Ac: this.Ac,
                                mk: a.tj,
                                zc: this.zc,
                                gf: this.gf,
                                eea: 2,
                                aj: IY(this),
                                zh: a.zh
                            })).then(({
                                Mk: c
                            }) => {
                                const d = (c = c.find(e => e.status === 1 && e.MX.mk === a.tj)) ? elb(c) : void 0;
                                b.pK = d === null || d === void 0 ? void 0 : d.id;
                                b.Zx = c;
                                return Ea(d)
                            }).catch(() => Fa()).finally(() => {
                                b.EJ = void 0
                            });
                            return b.EJ
                        })
                    }
                    async HQa({
                        zh: a,
                        tj: b,
                        SFa: c
                    }) {
                        return JY(this, async () => {
                            const d = this.Tu(b);
                            await d.EJ;
                            const e = this.Ac,
                                f = this.gf;
                            this.Wy && this.Wy.cancel();
                            const g = clb(c);
                            try {
                                if (d.Zx) return await llb(this, d.Zx, b, c);
                                const m = __c.jd();
                                var h = this.Jq,
                                    k = h.nna;
                                const n = this.zc;
                                var l = this.source.type === "website" ? new zlb({
                                        wJa: n
                                    }) :
                                    new Blb({
                                        zc: n
                                    });
                                const p = await k.call(h, new __c.Dlb({
                                    i$: m,
                                    Ac: e,
                                    mk: b,
                                    zh: a,
                                    gf: f,
                                    zn: [g],
                                    source: l,
                                    aj: IY(this)
                                }));
                                switch (p.type) {
                                    case "SUCCESS":
                                        return d.pK = m, d.Zx = p.FL, Ea([...p.So]);
                                    case "ERROR":
                                        return mlb(this, p, b, c, a);
                                    default:
                                        throw new E(p);
                                }
                            } catch (m) {
                                return Fa()
                            } finally {
                                this.Wy && this.Wy.start()
                            }
                        })
                    }
                    async wUa({
                        tj: a
                    }) {
                        return JY(this, async () => {
                            const b = this.Tu(a);
                            await b.EJ;
                            const c = this.Ac,
                                d = this.zc,
                                e = this.gf;
                            if (!b.pK) return Ea();
                            this.Wy && this.Wy.cancel();
                            try {
                                var f;
                                const g = await this.Jq.sha(new __c.rlb({
                                    bH: b.pK,
                                    Ac: c,
                                    zc: d,
                                    fingerprint: a,
                                    gf: e,
                                    aj: IY(this),
                                    caller: (f = b.Zx) === null || f === void 0 ? void 0 : f.submitter,
                                    Fka: klb(this, a)
                                }));
                                switch (g.type) {
                                    case "SUCCESS":
                                        return b.pK = void 0, b.Zx = void 0, Ea();
                                    case "ERROR":
                                        return Fa();
                                    default:
                                        throw new E(g);
                                }
                            } catch (g) {
                                return Fa()
                            } finally {
                                this.Wy && this.Wy.start()
                            }
                        })
                    }
                    Tu(a) {
                        var b = this.OAa.get(a);
                        if (b) return b;
                        b = {
                            tj: a,
                            pK: void 0,
                            Zx: void 0
                        };
                        this.OAa.set(a, b);
                        return b
                    }
                    async rW(a) {
                        if (![4, 3].includes(this.wn)) {
                            GY(() => {
                                this.wn = 3
                            });
                            try {
                                await this.Jq.rW({
                                    Ac: this.Ac,
                                    zc: this.zc,
                                    gf: this.gf,
                                    zh: a.zh,
                                    pb: a.wab
                                }), GY(() => {
                                    this.wn = 4
                                })
                            } catch (b) {
                                GY(() => {
                                    b instanceof __c.jN ? this.wn = 4 : this.wn === 3 && (this.wn = 5)
                                })
                            }
                        }
                    }
                    constructor(a, b, c, d, e, f, g = {
                        type: "design"
                    }) {
                        this.Ac = a;
                        this.zc = b;
                        this.gf = c;
                        this.kV = d;
                        this.Jq = e;
                        this.M = f;
                        this.source = g;
                        this.wn = (Glb.A(this), 0);
                        this.OAa = new Map;
                        this.Mza = new Map;
                        this.uQa = h => {
                            let k = [],
                                l;
                            const m = async () => {
                                try {
                                    const v = h.kNa();
                                    var n = this.Ac,
                                        p = this.zc;
                                    const x = this.gf,
                                        y = [5];
                                    await this.gF;
                                    const {
                                        form: z,
                                        jS: B
                                    } = await this.kV.MJ(new __c.HY({
                                        ref: new __c.RY({
                                            Ac: n,
                                            zc: p,
                                            mk: v
                                        }),
                                        a0: y,
                                        gf: x,
                                        aj: IY(this),
                                        q1: nlb(this, y)
                                    }));
                                    l = B != null ? B * 1E3 : void 0;
                                    a: {
                                        n = k;
                                        var q = z.xX;
                                        if (n.length !== q.length) var r = !1;
                                        else {
                                            for (p = 0; p < n.length; p++)
                                                if (n[p].version !== q[p].version) {
                                                    r = !1;
                                                    break a
                                                }
                                            r = !0
                                        }
                                    }
                                    if (!r) {
                                        var t = k = z.xX;
                                        const D = new Map;
                                        for (const F of t) {
                                            if (F.type !== "SELECT") continue;
                                            let G = D.get(F.lk);
                                            G || (G = {
                                                id: F.lk,
                                                Us: new Map,
                                                total: 0
                                            }, D.set(F.lk, G));
                                            for (const H of F.VAa) {
                                                const J = H.yR;
                                                var u;
                                                const M = (u = G.Us.get(J)) !== null && u !== void 0 ? u : 0;
                                                G.Us.set(J, M + H.Gea);
                                                G.total += H.Gea
                                            }
                                        }
                                        return {
                                            tj: v,
                                            results: {
                                                fields: D
                                            }
                                        }
                                    }
                                } catch (v) {
                                    this.M.wb(v)
                                }
                            };
                            return new qlb(n => {
                                const p = [],
                                    q = new Flb(() => m(), t => n.next(t), {
                                        initialDelay: 1E3,
                                        ZJ: 2,
                                        QF: 6E4,
                                        Raa: () => l
                                    }),
                                    r = q.start();
                                p.push(r);
                                this.Wy = q;
                                p.push(() => this.Wy = void 0);
                                return () => p.forEach(t => t())
                            })
                        }
                    }
                };
                KY = class extends Error {
                    constructor(a) {
                        super(`form: unexpected "${a}"`)
                    }
                };
                __c.Ilb = L(() => ({
                    l6a: __c.cO(1),
                    SYa: __c.cO(2),
                    RFa: __c.gO(4),
                    So: __c.Ra(3, __c.TY)
                }));
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
]); // __FILE_CONTENT_FOR__:5921fff0dd776d0f.js
(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [47523], {

        /***/
        428405: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            __web_req__(981587);
            __web_req__(401054);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var C = __c.C;
                var w = __c.w;
                var $rb = function(a, b, c) {
                        w(b.length > 0);
                        w(!a.lb.has(b));
                        if (c != null)
                            if (Array.isArray(c)) c = c.filter(__c.wb), c.length !== 0 && (w(c.every(d => typeof d === "number" || typeof d === "string")), a.lb.set(b, c));
                            else if (typeof c === "boolean") a.lb.set(b, c || String(c));
                        else if (typeof c === "number" || typeof c === "string") a.lb.set(b, String(c));
                        else throw Error(`invalid param value type: ${typeof c}`);
                    },
                    N0 = function(a, b) {
                        if (!b) return a;
                        if (b instanceof Map)
                            for (const [c, d] of b) $rb(a, c, d);
                        else
                            for (const c in b) $rb(a, c, b[c]);
                        return a
                    },
                    O0 = function(a) {
                        if (a.lb.size === 0) return a.path;
                        const b = Array.from(a.lb.entries()).map(([c, d]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    P0 = function(a) {
                        w(a.length > 0);
                        w(a.every(b => b.indexOf("?") < 0));
                        return N0(new asb(["", ...a.map(encodeURIComponent)].join("/")))
                    },
                    asb = class {
                        constructor(a) {
                            this.path = a;
                            this.lb = new Map
                        }
                    };
                var bsb = __c.gb(() => ({
                    type: [3, __c.jlb, 4, __c.rlb]
                }), __c.PY);
                var csb = __c.L(() => ({
                    zc: __c.X(1),
                    Ac: __c.X(2),
                    pb: __c.Qa(3, __c.Ilb),
                    zh: __c.Z(6),
                    gf: __c.Z(5)
                }));
                var dsb = __c.L(() => ({
                    Vxa: __c.Ra(1, __c.HY)
                }));
                var esb = class {
                        async rW(a) {
                            const b = O0(P0([Q0, ""])),
                                [c, {
                                    XDa: d
                                }] = await Promise.all([this.Rq.post(b, csb.serialize(a), {
                                    Ty: "createform"
                                }), __webpack_require__.me(469546).then(() => ({
                                    XDa: __c.Qlb
                                }))]);
                            return d.deserialize(c)
                        }
                        async MJ(a) {
                            const b = P0([Q0, ""]);
                            N0(b, {
                                "ref.designId": C(a.ref.zc),
                                "ref.formId": C(a.ref.Ac),
                                "ref.formFingerprint": a.ref.mk,
                                projections: a.a0.map(e => __c.wlb.serialize(e)),
                                sourceFilter: a.q1 && __c.SY.serialize(a.q1),
                                settingsId: a.zh,
                                extensionToken: a.gf,
                                websiteAccessToken: a.aj
                            });
                            a = O0(b);
                            const [c,
                                {
                                    qEa: d
                                }
                            ] = await Promise.all([this.Rq.get(a, {
                                Ty: "getform"
                            }), __webpack_require__.me(469546).then(() => ({
                                qEa: __c.aZ
                            }))]);
                            return d.deserialize(c)
                        }
                        async kqa(a) {
                            const b = O0(P0([Q0, "batch"])),
                                [c, {
                                    pEa: d
                                }] = await Promise.all([this.Rq.post(b, dsb.serialize(a), {
                                    Ty: "getformbatch"
                                }), __webpack_require__.me(469546).then(() => ({
                                    pEa: __c.Tlb
                                }))]);
                            return d.deserialize(c)
                        }
                        async nna(a) {
                            const b = O0(P0([Q0, "submissions"])),
                                [c, {
                                    YDa: d
                                }] = await Promise.all([this.Rq.post(b, __c.Dlb.serialize(a), {
                                    Ty: "createsubmission"
                                }), __webpack_require__.me(469546).then(() =>
                                    ({
                                        YDa: __c.Xrb
                                    }))]);
                            return d.deserialize(c)
                        }
                        async rpa(a) {
                            const b = P0([Q0, "submissions"]);
                            N0(b, {
                                type: a.type,
                                continuation: a.VI,
                                limit: C(a.limit),
                                extensionToken: a.gf,
                                sortOrder: a.eea && __c.xlb.serialize(a.eea),
                                status: a.status && __c.UY.serialize(a.status),
                                settingsId: a.zh
                            });
                            switch (a.type) {
                                case "BY_FORM":
                                    N0(b, {
                                        designId: C(a.zc),
                                        formId: C(a.Ac),
                                        formFingerprint: a.mk,
                                        source: a.source && __c.SY.serialize(a.source)
                                    });
                                    break;
                                case "BY_USER":
                                    N0(b, {
                                        designId: C(a.zc),
                                        formId: C(a.Ac),
                                        formFingerprint: a.mk,
                                        brand: C(a.brand),
                                        user: C(a.user),
                                        org: a.AR
                                    });
                                    break;
                                case "BY_CALLER":
                                    N0(b, {
                                        designId: C(a.zc),
                                        formId: C(a.Ac),
                                        formFingerprint: a.mk,
                                        websiteAccessToken: a.aj
                                    });
                                    break;
                                default:
                                    throw new __c.E(a);
                            }
                            a = O0(b);
                            const [c, {
                                lEa: d
                            }] = await Promise.all([this.Rq.get(a, {
                                Ty: "findsubmissions"
                            }), __webpack_require__.me(469546).then(() => ({
                                lEa: __c.$Y
                            }))]);
                            return d.deserialize(c)
                        }
                        async sha(a) {
                            w(a.Ac != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.Ac));
                            w(a.bH != null && /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(a.bH));
                            const b = O0(P0([Q0, a.Ac, "submissions", a.bH])),
                                [c, {
                                    UEa: d
                                }] = await Promise.all([this.Rq.post(b, bsb.serialize(a), {
                                    Ty: "updatesubmissionapi"
                                }), __webpack_require__.me(469546).then(() => ({
                                    UEa: __c.Zrb
                                }))]);
                            return d.deserialize(c)
                        }
                        constructor(a) {
                            this.Rq = a
                        }
                    },
                    Q0 = "form";
                var fsb = class {};
                __c.ZCa = {
                    TOa: function({
                        Rq: a,
                        M: b,
                        aj: c
                    }) {
                        a = new esb(a);
                        return {
                            Jq: a,
                            dMa: new fsb,
                            Opa: new __c.Hlb(a, b, {
                                type: "website",
                                aj: c
                            })
                        }
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=https://chunk-composing.canva.com/chunk-batch-sm/8+58_sourcemaps/dd87a4004aa4791e.js.map+8_sourcemaps/65146d426c832b85.js.map+64_sourcemaps/6a38f1070184c758.js.map+21_sourcemaps/137f7892632dc4b4.js.map+14_sourcemaps/5921fff0dd776d0f.js.map