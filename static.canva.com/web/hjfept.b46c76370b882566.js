(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [21389], {

        /***/
        476834: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            self._14ca148dba66601866f38250fc203092 = self._14ca148dba66601866f38250fc203092 || {};
            (function(__c) {
                /*

                 Copyright The Closure Library Authors.
                 Copyright The Closure Compiler Authors.
                 SPDX-License-Identifier: Apache-2.0
                */
                var aa = function(a) {
                        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
                        for (var b = 0; b < a.length; ++b) {
                            var c = a[b];
                            if (c && c.Math == Math) return c
                        }
                        throw Error("Cannot find global object");
                    },
                    da = function(a, b) {
                        if (b) a: {
                            var c = ba;a = a.split(".");
                            for (var d = 0; d < a.length - 1; d++) {
                                var e = a[d];
                                if (!(e in c)) break a;
                                c = c[e]
                            }
                            a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && ca(c, a, {
                                configurable: !0,
                                writable: !0,
                                value: b
                            })
                        }
                    },
                    r = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid argument" : ea(b, ...c));
                    },
                    ea = function(a, ...b) {
                        let c = 0;
                        return a.replace(/\{}/g, () => c < b.length ? b[c++] : "{}")
                    },
                    t = function(a, b) {
                        var c = [];
                        if (!a) throw Error(b == null ? "invalid state" : ea(b, ...c));
                    },
                    ha = function(a, b, ...c) {
                        if (a == null) throw Error(b == null ? "argument is null" : ea(b, ...c));
                        return a
                    },
                    la = function(a, b) {
                        if (!(a in ia)) {
                            const c = self.bootstrap;
                            if (!c) throw Error("Could not find bootstrap");
                            ia[a] = { ...c[a]
                            };
                            delete c[a]
                        }
                        a in ja && ja[a] != null ? a = ja[a] : (b = b(ka.required(a, ia)), a = ja[a] =
                            b);
                        return a
                    },
                    na = function() {
                        var a = window.location.search;
                        ["base", "page", "ui"].forEach(b => {
                            ma(a, `bootstrap.${b}.`)
                        })
                    },
                    ma = function(a, b) {
                        const c = new Map;
                        (new URLSearchParams(a)).forEach((d, e) => {
                            e.startsWith(b) && c.set(decodeURIComponent(e.replace(b, "").replace(/\+/g, " ")), decodeURIComponent(d.replace(/\+/g, " ")))
                        });
                        return c
                    },
                    pa = function(a) {
                        return new oa(a)
                    },
                    ra = function(a) {
                        return new qa(a)
                    },
                    sa = function(a) {
                        return a != null && a.then != null
                    },
                    va = function(a) {
                        ({
                            jf: b
                        } = {
                            jf: !1
                        });
                        var b;
                        let c = !1,
                            d;
                        return (...e) => {
                            r(e.length ===
                                0);
                            if (d == null || b && (!d.ok || c)) try {
                                c = !1, d = ta(a()), sa(d.value) && d.value.then(null, () => c = !0)
                            } catch (f) {
                                d = ua(f)
                            }
                            if (d.ok) return d.value;
                            throw d.error;
                        }
                    },
                    wa = function(a, b, c, d) {
                        return {
                            tag: c,
                            K: 2,
                            G: b,
                            default: d != null ? d : a.defaultValue,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    xa = function(a, b, c) {
                        return {
                            tag: c,
                            K: 3,
                            G: b,
                            defaultValue: a.defaultValue,
                            A: a.A
                        }
                    },
                    za = function(a) {
                        return (b, c, d) => {
                            const {
                                tag: e,
                                G: f,
                                W: g
                            } = u(b, c, d);
                            return {
                                K: 5,
                                tag: e,
                                G: f,
                                pa: g,
                                Mc: ya.A,
                                A: a === "object" ? "object" : a === "enum" ? "string" : a.A
                            }
                        }
                    },
                    x = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 1,
                            G: void 0,
                            rd: d,
                            value: e,
                            Ee: !1,
                            A: "string"
                        }
                    },
                    y = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    B = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    C = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 4,
                            G: d,
                            pa: e,
                            A: "object"
                        }
                    },
                    D = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e,
                            wd: f
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 2,
                            G: d,
                            pa: e,
                            default: f,
                            A: "string"
                        }
                    },
                    E = function(a, b) {
                        const {
                            tag: c,
                            G: d,
                            W: e
                        } = u(a, b);
                        return {
                            tag: c,
                            K: 3,
                            G: d,
                            pa: e,
                            A: "string"
                        }
                    },
                    J = function(a) {
                        var b = {};
                        const c = va(() => {
                            const e = a();
                            var f = Object.keys(e);
                            const g = {},
                                h = {};
                            for (const k of f) switch (f = e[k], f.K) {
                                case 1:
                                    h[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                case 2:
                                case 3:
                                case 4:
                                case 5:
                                    g[f.tag] = { ...f,
                                        name: k
                                    };
                                    break;
                                default:
                                    throw new F(f);
                            }
                            return {
                                kind: 1,
                                gd: e,
                                Hb: Aa(e, b.Eb),
                                Se: g,
                                xe: h
                            }
                        });
                        class d {
                            static za(e) {
                                return d.qb(e, [])
                            }
                            static Vb(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ba(e) : f.pa ? f.pa.qb(e, g) : e
                            }
                            static S(e) {
                                return d.Pa(e, [])
                            }
                            static Db(e, f, g) {
                                f = f.config;
                                return f.A === "Uint8Array" ? Ca(e) : f.pa ?
                                    f.pa.Pa(e, g) : e
                            }
                            static Pa(e, f) {
                                var {
                                    Hb: g
                                } = c(), h = Object.create(d.prototype);
                                for (const w of g) {
                                    g = w.config;
                                    const v = w.name;
                                    var k = w.L,
                                        l = w.Z,
                                        n = k,
                                        m = e[n];
                                    m == null && l != null && e[l] != null && (n = l, m = e[n]);
                                    switch (g.K) {
                                        case 3:
                                            if (m == null) {
                                                h[v] = void 0;
                                                break
                                            } else if (!G(m, g.A)) throw Da({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 2:
                                            if (m == null && g.defaultValue != null) {
                                                h[v] = g.defaultValue;
                                                break
                                            } else if (m == null || !G(m, g.A)) throw Ea({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            f.push(n);
                                            h[v] = d.Db(m, w, f);
                                            f.pop();
                                            break;
                                        case 1:
                                            var p = w.Sb;
                                            n = w.Jc;
                                            if (m == null && g.Ee) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (m === p) {
                                                h[v] = g.value;
                                                break
                                            }
                                            if (n != null && m === n) {
                                                h[v] = g.value;
                                                break
                                            }
                                            e = p;
                                            h = n;
                                            throw new TypeError(`Expected value ${h?`either "${e}" OR "${h}"`:`"${e}"`} for key ${Fa({L:k,Z:l})} found: ${JSON.stringify(m)} ${H(f)}`);
                                        case 4:
                                            if (m == null) {
                                                h[v] = [];
                                                break
                                            } else if (!Array.isArray(m)) throw Ga({
                                                L: k,
                                                Z: l
                                            }, m, g.A, f);
                                            p = Array(m.length);
                                            for (var q = 0; q < m.length; ++q) {
                                                if (!G(m[q], g.A)) throw Ea({
                                                    L: k,
                                                    Z: l
                                                }, m[q], g.A, [...f, n], q);
                                                f.push(`${n}[${q}]`);
                                                p[q] = d.Db(m[q], w, f);
                                                f.pop()
                                            }
                                            h[v] =
                                                p;
                                            break;
                                        case 5:
                                            if (m == null) {
                                                h[v] = new Map;
                                                break
                                            } else if (typeof m !== "object") throw new TypeError(`Expected Map for key ${Fa({L:k,Z:l})}, found: ${I(m)} ${H(f)}`);
                                            k = g.Mc === "number";
                                            m = Object.entries(m);
                                            l = Array(m.length);
                                            for (p = 0; p < m.length; ++p) {
                                                const [z, A] = m[p];
                                                if (k) {
                                                    if (q = Number(z), isNaN(q)) throw new TypeError(`Expected number map key, found: NaN ${H([...f,n])}`);
                                                } else q = z;
                                                if (!G(A, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${q}", found: ${I(A)} ${H([...f,n])}`);
                                                f.push(`${n}["${q}"]`);
                                                const M = d.Db(A, w, f);
                                                f.pop();
                                                l[p] = [q, M]
                                            }
                                            h[v] = new Map(l);
                                            break;
                                        default:
                                            throw new F(g);
                                    }
                                }
                                return h
                            }
                            constructor(e = {}) {
                                var {
                                    Hb: f
                                } = c();
                                for (const g of f) {
                                    f = g.config;
                                    const h = g.name,
                                        k = e[h];
                                    switch (f.K) {
                                        case 1:
                                            this[h] = f.value;
                                            break;
                                        case 2:
                                            this[h] = k == null ? f.default : k;
                                            break;
                                        case 3:
                                            this[h] = k;
                                            break;
                                        case 4:
                                            this[h] = k == null ? [] : k;
                                            break;
                                        case 5:
                                            this[h] = k == null ? new Map : k;
                                            break;
                                        default:
                                            throw new F(f);
                                    }
                                }
                            }
                        }
                        d.init = c;
                        d.qb = b.Ya ? (e, f) => {
                            throw new TypeError(`Unproducible oneof case ${H(f)}`);
                        } : (e, f) => {
                            if (e == null || typeof e !== "object") throw new TypeError(`Expected type object, found: ${I(e)} ${H(f)}`);
                            var {
                                Hb: g
                            } = c();
                            const h = {};
                            for (const m of g) {
                                g = m.config;
                                var k = m.L,
                                    l = e[m.name];
                                const p = k;
                                switch (g.K) {
                                    case 1:
                                        if (l !== g.value) throw new TypeError(`Expected value ${JSON.stringify(g.value)} for key "${k}", found: ${JSON.stringify(l)} ${H(f)}`);
                                        h[p] = m.Sb;
                                        break;
                                    case 2:
                                        if (g.defaultValue != null && l === g.defaultValue) break;
                                        f.push(p);
                                        var n = d.Vb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Ea({
                                            L: k
                                        }, l, g.A, f);
                                        h[p] = n;
                                        break;
                                    case 3:
                                        if (l == null) break;
                                        f.push(p);
                                        n = d.Vb(l, m, f);
                                        f.pop();
                                        if (!G(n, g.A)) throw Da({
                                            L: k
                                        }, l, g.A, f);
                                        h[p] = n;
                                        break;
                                    case 4:
                                        if (l == null) break;
                                        else {
                                            if (!Array.isArray(l)) throw Ga({
                                                L: k
                                            }, l, g.A, f);
                                            if (l.length === 0) break
                                        }
                                        n = Array(l.length);
                                        for (let q = 0; q < l.length; ++q) {
                                            f.push(`${p}[${q}]`);
                                            const w = d.Vb(l[q], m, f);
                                            f.pop();
                                            if (!G(w, g.A)) throw Ea({
                                                L: k
                                            }, w, g.A, [...f, p], q);
                                            n[q] = w
                                        }
                                        h[p] = n;
                                        break;
                                    case 5:
                                        if (!(l instanceof Map)) throw new TypeError(`Expected Map for key "${k}", found: ${I(l)} ${H(f)}`);
                                        if (l.size === 0) break;
                                        k = {};
                                        for (const [q, w] of l) {
                                            if (typeof q !== g.Mc) throw new TypeError(`Expected ${g.Mc} map key, found: ${I(q)} ${H([...f,
p])}`);
                                            f.push(`${p}["${q}"]`);
                                            l = d.Vb(w, m, f);
                                            f.pop();
                                            if (!G(l, g.A)) throw new TypeError(`Expected ${g.A} map value for map key "${q}", found: ${I(l)} ${H([...f,p])}`);
                                            k[q] = l
                                        }
                                        h[p] = k;
                                        break;
                                    default:
                                        throw new F(g);
                                }
                            }
                            return h
                        };
                        return d
                    },
                    K = function(a, b) {
                        var c = {};
                        const d = va(() => {
                                var g = a();
                                const h = Object.keys(g)[0];
                                let k;
                                const l = new Map,
                                    n = new Map,
                                    m = new Map;
                                for (var p = 0; p < g[h].length; p += 2) {
                                    var q = g[h][p];
                                    const z = g[h][p + 1],
                                        A = z.init().gd[h];
                                    if (!A) throw new TypeError("Missing discriminator.");
                                    if (A.K !== 1) throw new TypeError(`Discriminator must be FieldLabel.CONSTANT, was ${A.K}.}`);
                                    var w = Ha("A?", A.G, c.Eb);
                                    const {
                                        ea: M,
                                        ya: fa
                                    } = Ha(Ia(q - 1), A.rd, c.Eb);
                                    m.set(q, {
                                        tg: z,
                                        value: A.value
                                    });
                                    l.set(A.value, z);
                                    n.set(M, z);
                                    fa && n.set(fa, z);
                                    if (k && k.L !== w.ea) throw new TypeError(`oneOf JSON keys are not consistent. ${k.L} ${w.ea}`);
                                    if (k && k.Z !== w.ya) throw new TypeError(`oneOf secondary JSON keys are not consistent. ${k.Z} ${w.ya}`);
                                    q = A.tag;
                                    k = {
                                        L: w.ea,
                                        Z: w.ya
                                    }
                                }
                                if (k == null || q == null) throw new TypeError("OneOf has no cases.");
                                g = b();
                                w = Object.keys(g);
                                p = {};
                                for (var v of w) p[g[v].tag] = { ...g[v],
                                    name: v
                                };
                                v = c.Ce != null ?
                                    c.Ce() : void 0;
                                return {
                                    kind: 2,
                                    Hb: Aa(g, c.Eb),
                                    He: h,
                                    xf: l,
                                    Wg: q,
                                    Ge: k,
                                    Xf: n,
                                    De: v,
                                    gd: g,
                                    Se: p,
                                    xe: {},
                                    Ti: m
                                }
                            }),
                            e = (g, h) => {
                                const {
                                    He: k,
                                    xf: l
                                } = d(), n = g[k], m = l.get(n);
                                if (!m) throw new TypeError(`Unknown oneof deserialized case: ${JSON.stringify(n)} ${H(h)}`);
                                return m.qb(g, h)
                            },
                            f = (g, h) => {
                                const {
                                    Xf: k,
                                    Ge: l,
                                    De: n
                                } = d();
                                var m = l.Z;
                                let p = g[l.L];
                                p == null && m && (p = g[m]);
                                if (p == null && n) return n.Pa(g, h);
                                m = k.get(p);
                                if (!m) throw new TypeError(`Unknown oneof serialized case: ${JSON.stringify(p)} ${H(h)}`);
                                return m.Pa(g, h)
                            };
                        return {
                            init: d,
                            za: g =>
                                e(g, []),
                            qb: e,
                            S: g => f(g, []),
                            Pa: f
                        }
                    },
                    L = function(a, b = 0) {
                        var c = {};
                        const d = va(() => {
                                const g = a(),
                                    h = [],
                                    k = new Map,
                                    l = new Map,
                                    n = new Map,
                                    m = new Map,
                                    p = new Set;
                                let q = 0,
                                    w = 1;
                                for (; q < g.length;) {
                                    const z = w++,
                                        A = g[q];
                                    var v = Ia(A - b);
                                    q += 1;
                                    let M;
                                    const fa = g[q];
                                    typeof fa === "string" && (M = fa, q += 1);
                                    const {
                                        ea: Kb,
                                        ya: Lb
                                    } = Ha(v, M, c.Eb);
                                    v = g[q];
                                    typeof v === "object" && v.Ya && (p.add(z), q += 1);
                                    h.push(z);
                                    k.set(Kb, z);
                                    Lb && k.set(Lb, z);
                                    l.set(z, Kb);
                                    n.set(z, A);
                                    m.set(A, z)
                                }
                                return {
                                    values: h,
                                    Pd: l,
                                    ij: n,
                                    yi: m,
                                    Yf: k,
                                    Ya: p.size ? p : void 0
                                }
                            }),
                            e = (g, h, k) => {
                                const {
                                    Ya: l
                                } =
                                d();
                                if (l && l.has(g)) throw new TypeError(`Unproducible enum value: ${JSON.stringify(g)} ${k?H(k):""}`);
                                h = h.get(g);
                                if (h == null) throw new TypeError(`The proto enum serializer failed to serialize value ${JSON.stringify(g)} into JSON.
It does not recognize value ${JSON.stringify(g)} as a valid member of the TypeScript enum.
${k?H(k):""}`);
                                return h
                            },
                            f = (g, h) => {
                                const k = d().Yf.get(g);
                                if (k == null) throw new TypeError(`The proto enum deserializer failed to deserialize JSON ${JSON.stringify(g)} into an enum value.
It does not recognize JSON ${JSON.stringify(g)} as a valid JSON value encoding of the enum.
${H(h)}`);
                                return k
                            };
                        return {
                            values: () => d().values,
                            ui: () => {
                                const {
                                    values: g,
                                    Ya: h
                                } = d();
                                return h == null ? g : g.filter(k => !h.has(k))
                            },
                            za: g => e(g, d().Pd, []),
                            qb: (g, h) => e(g, d().Pd, h),
                            S: g => f(g, []),
                            Pa: f
                        }
                    },
                    Aa = function(a, b) {
                        return Object.entries(a).map(([c, d]) => {
                            let e = Ia(d.tag - 1);
                            if (d.K === 1) {
                                const {
                                    ea: k,
                                    ya: l
                                } = Ha(e, d.rd, b);
                                e = "A?";
                                var f = {
                                    Sb: k,
                                    Jc: l
                                }
                            }
                            const {
                                ea: g,
                                ya: h
                            } = Ha(e, d.G, b);
                            return {
                                config: d,
                                name: c,
                                L: g,
                                Z: h,
                                Sb: f === null || f === void 0 ? void 0 : f.Sb,
                                Jc: f === null || f === void 0 ? void 0 : f.Jc
                            }
                        })
                    },
                    Ha = function(a, b, c) {
                        if (!b) {
                            if (c !==
                                void 0) throw Error("Dual Deserialization config templated but JSON full key/value wasn't");
                            return {
                                ea: a
                            }
                        }
                        if (c === void 0) return {
                            ea: b
                        };
                        if (c === 0) return {
                            ea: a,
                            ya: b
                        };
                        if (c === 1) return {
                            ea: b,
                            ya: a
                        };
                        throw Error("function should have been exhaustive, but wasn't");
                    },
                    Ga = function(a, b, c, d) {
                        return new TypeError(`Expected repeated ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Da = function(a, b, c, d) {
                        return new TypeError(`Expected optional ${c} value for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Ea = function(a, b, c,
                        d, e) {
                        return new TypeError(`Expected ${c} value${e!==void 0?` at index ${e}`:""} for key ${Fa(a)}, found: ${I(b)} ${H(d)}`)
                    },
                    Fa = function(a) {
                        const b = a.L;
                        return (a = a.Z) ? `either "${b}" OR "${a}"` : `"${b}"`
                    },
                    H = function(a) {
                        return `(path: .${a.join(".")})`
                    },
                    I = function(a) {
                        return a === null ? "null" : Array.isArray(a) ? "array" : typeof a
                    },
                    Ia = function(a) {
                        if (a < 64) return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a);
                        const b = [];
                        for (; a > 0;) b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a %
                            64)), a = Math.floor(a / 64);
                        return b.reverse().join("")
                    },
                    u = function(a, b, c) {
                        return typeof a === "string" ? {
                            G: a,
                            tag: b,
                            W: c,
                            wd: void 0
                        } : {
                            tag: a,
                            W: b,
                            wd: c
                        }
                    },
                    G = function(a, b) {
                        return typeof a === b || b === "Uint8Array" && typeof a === "string"
                    },
                    Ba = function(a) {
                        a = Array.from(a, b => String.fromCodePoint(b)).join("");
                        return btoa(a)
                    },
                    Ca = function(a) {
                        return Uint8Array.from(atob(a), b => b.codePointAt(0))
                    },
                    Na = async function(a, b) {
                        const c = Ja(a.tb),
                            d = a.l.ta(b.request.mode === "navigate" ? "intercept_fetch.navigate" : "intercept_fetch.other", {
                                startTime: c
                            });
                        Ka(a.xa, b);
                        try {
                            await a.l.Ub("handle_request", d, () => {
                                const e = La(a.requestHandler, b, d);
                                e != null ? (b.request.mode === "navigate" && Ma(a.xa, b, e), b.respondWith(e)) : (d.abort(), a.l.ta("intercept_fetch.unhandled", {
                                    startTime: c
                                }).end());
                                return e
                            })
                        } finally {
                            d.end()
                        }
                    },
                    Oa = function(a, b, c) {
                        b = new Headers([
                            ["X-serviceworker-error-navigation-url", b],
                            ["X-serviceworker-error-code", JSON.stringify(c)]
                        ]);
                        try {
                            fetch(a.fb, {
                                headers: b
                            })
                        } catch (d) {}
                    },
                    Pa = function(a) {
                        return a != null
                    },
                    Ra = function(a, b, c) {
                        return b != null && typeof b === "object" &&
                            b.sampleRate != null && b instanceof Error ? Qa(b.sampleRate) : c === "error" || c === "fatal" ? a.$c : a.Zc
                    },
                    Qa = function(a) {
                        return Math.min(Math.max(0, a), 1)
                    },
                    Sa = async function(a, b) {
                        b = [
                            ["requestUrl", b]
                        ];
                        if (a instanceof Error && /quota/i.test(a.message)) {
                            var c, d;
                            (a = await ((d = navigator.storage) === null || d === void 0 ? void 0 : (c = d.estimate) === null || c === void 0 ? void 0 : c.call(d))) && b.push(...Object.entries(a))
                        }
                        return new Map(b)
                    },
                    Ta = async function(a, b, c) {
                        const d = new N(b instanceof Error ? b.message : String(b), .01);
                        try {
                            const e = await Sa(b,
                                    c.url),
                                f = new Map([
                                    ["requestMode", c.mode],
                                    ["requestOrigin", (new URL(c.url)).origin]
                                ]);
                            a.j.error(d, {
                                extra: e,
                                tags: f
                            })
                        } catch (e) {
                            a.j.error(d)
                        }
                    },
                    Wa = function({
                        D: {
                            j: a
                        },
                        fb: b
                    }) {
                        const c = b != null ? new Ua({
                                fb: b
                            }) : null,
                            d = new Va(a);
                        return {
                            hf: (e, f) => {
                                f.then(g => {
                                    e.mode !== "navigate" || g.ok || c === null || c === void 0 || Oa(c, e.url, g.status)
                                }).catch(g => {
                                    Ta(d, g, e);
                                    e.mode !== "navigate" || c !== null && c !== void 0 && Oa(c, e.url, -1)
                                })
                            }
                        }
                    },
                    La = function(a, b, c) {
                        try {
                            const d = a.Gc.resolve(b.request);
                            if (d == null) return a.C.Sa() ? Promise.resolve(Response.error()) :
                                void 0;
                            c.setAttribute("handler_name", d.name);
                            const e = d.handle(b, c);
                            a.Me.hf(b.request, e);
                            return e.then(f => a.Uf.Nd(f)).catch(() => a.yf.df(b.request))
                        } catch (d) {
                            a.j.error(new N(d instanceof Error ? d.message : String(d), .01))
                        }
                    },
                    Za = function() {
                        ({
                            userAgent: a
                        } = {
                            userAgent: self.navigator.userAgent
                        });
                        var a;
                        return a.includes("Firefox") ? new Xa : new Ya
                    },
                    $a = function(a) {
                        return new Promise(b => setTimeout(b, a))
                    },
                    ab = function(a) {
                        const b = Error(a);
                        return c => {
                            c instanceof Error && (c.stack == null || c.stack === "") && (c.stack = b.stack);
                            return c
                        }
                    },
                    bb = function(a) {
                        return new Promise((b, c) => {
                            const d = () => {
                                    a.removeEventListener("success", e);
                                    a.removeEventListener("error", g)
                                },
                                e = () => {
                                    d();
                                    b(a.result)
                                },
                                f = ab("idb promisify_request_events error"),
                                g = () => {
                                    d();
                                    c(f(a.error))
                                };
                            a.addEventListener("success", e);
                            a.addEventListener("error", g)
                        })
                    },
                    cb = async function(a, b) {
                        const c = a.J(a.cursor.request);
                        a.cursor.continue(b);
                        return c
                    },
                    eb = function(a) {
                        return new Promise((b, c) => {
                            const d = ab("idb_transaction error");
                            a.ca.addEventListener("complete", () => b());
                            a.ca.addEventListener("error",
                                f => {
                                    f = f.target;
                                    c(d((f === null || f === void 0 ? void 0 : f.error) || a.ca.error || Error("Unknown error")))
                                });
                            const e = new db;
                            a.ca.addEventListener("abort", () => {
                                if (a.ca.error instanceof Error) {
                                    var f = e.cause = a.ca.error;
                                    f = [`${f.name}`, `${f.message}`].filter(g => !!g).join(": ");
                                    e.message = `${e.message} (${f})`
                                }
                                c(e)
                            })
                        })
                    },
                    gb = function({
                        name: a,
                        version: b,
                        Ef: c,
                        ee: d
                    }) {
                        var e = indexedDB;
                        return new Promise((f, g) => {
                            try {
                                const h = e.open(a, b);
                                let k, l = !1;
                                c && h.addEventListener("upgradeneeded", m => {
                                    l || (k = new fb(h.result), c(k, m))
                                });
                                switch (d.type) {
                                    case 0:
                                        d.Cf &&
                                            h.addEventListener("blocked", d.Cf);
                                        h.addEventListener("success", () => {
                                            f(k !== null && k !== void 0 ? k : new fb(h.result))
                                        });
                                        break;
                                    case 1:
                                        h.addEventListener("blocked", () => {
                                            l = !0;
                                            g(Error("operation blocked due to open connections"))
                                        });
                                        h.addEventListener("success", () => {
                                            const m = h.result;
                                            l ? m.close() : (m.addEventListener("versionchange", p => {
                                                (d.ue && p.newVersion == null || d.ve && p.newVersion != null) && m.close()
                                            }), f(k !== null && k !== void 0 ? k : new fb(m)))
                                        });
                                        break;
                                    default:
                                        throw new F(d);
                                }
                                const n = ab("idb_database open error");
                                h.addEventListener("error",
                                    () => {
                                        g(n(h.error))
                                    })
                            } catch (h) {
                                g(h)
                            }
                        })
                    },
                    jb = function(a) {
                        if (!(a instanceof Error)) return !1;
                        if (a.name === "QuotaExceededError" || a instanceof DOMException && a.code === 22 || a instanceof hb) return !0;
                        ib == null && (ib = [/Encountered full disk while opening backing store for indexedDB.open./i, /Failed to PutOrAdd in database because not enough space for domain/i]);
                        return ib.some(b => b.test(a.message))
                    },
                    mb = function(a) {
                        if (!self.indexedDB) return !0;
                        if (!(a instanceof Error)) return !1;
                        if (a instanceof kb || a instanceof db || a instanceof DOMException && ["AbortError", "TransactionInactiveError"].includes(a.name)) return !0;
                        lb == null && (lb = [/(transaction|operation) was aborted/i, /The database connection is closing/i, /connection to indexed database server lost/i, /internal error/i, /the transaction is inactive or finished/i, /unable to open database file on disk/i, /without an in-progress transaction/i]);
                        return lb.some(b => b.test(a.message))
                    },
                    ob = async function(a, b) {
                        const c = await a.Ff(),
                            d = () => {
                                e.connection = void 0;
                                c.removeEventListener("close", d)
                            };
                        c.addEventListener("close", d, {
                            once: !0
                        });
                        const e = new nb({
                            transaction: (f, g) => c.transaction(f, g),
                            close: () => {
                                d();
                                c.close();
                                b()
                            }
                        });
                        e.Ab = self.setTimeout(() => {
                            e.dispose()
                        }, 2500);
                        return e
                    },
                    pb = async function(a, {
                        B: b
                    }) {
                        var c;
                        const d = b != null ? (c = a.l) === null || c === void 0 ? void 0 : c.ua("idb_connection_manager.open_idb_connection", b) : void 0,
                            e = ob(a.gf, () => {
                                a.connection === e && (a.connection = void 0)
                            }).catch(f => {
                                a.connection = void 0;
                                d === null || d === void 0 || d.setStatus("error");
                                throw f;
                            }).finally(() => d === null || d === void 0 ? void 0 :
                                d.end());
                        return e
                    },
                    qb = async function(a, b, {
                        B: c
                    }) {
                        var d;
                        const e = c != null ? (d = a.l) === null || d === void 0 ? void 0 : d.ua("idb_connection_manager.get_connection", c) : void 0;
                        try {
                            if (a.connection == null || (b === null || b === void 0 ? 0 : b.Ve)) a.connection = pb(a, {
                                B: c
                            });
                            let f = await a.connection;
                            f.lf || (a.connection = pb(a, {
                                B: c
                            }), f = await a.connection);
                            return f
                        } catch (f) {
                            throw e === null || e === void 0 || e.setStatus("error"), f;
                        } finally {
                            e === null || e === void 0 || e.end()
                        }
                    },
                    rb = async function({
                        transaction: a,
                        H: b,
                        Y: c
                    }) {
                        try {
                            const e = await c(a.objectStore(b));
                            try {
                                var d;
                                a === null || a === void 0 || (d = a.commit) === null || d === void 0 || d.call(a)
                            } catch (f) {}
                            return e
                        } catch (e) {
                            try {
                                a === null || a === void 0 || a.abort()
                            } catch (f) {}
                            throw e;
                        }
                    },
                    O = async function(a, {
                        H: b,
                        mode: c,
                        Y: d,
                        methodName: e
                    }) {
                        var f;
                        const g = (f = a.l) === null || f === void 0 ? void 0 : f.tf({
                            methodName: e
                        });
                        try {
                            try {
                                const k = (await qb(a.ld, {}, {
                                        B: g
                                    })).transaction(b, c),
                                    [l] = await Promise.all([rb({
                                        transaction: k.transaction,
                                        H: b,
                                        Y: d
                                    }), k.Rd]);
                                return l
                            } catch (k) {
                                const l = (await qb(a.ld, {
                                        Ve: !0
                                    }, {
                                        B: g
                                    })).transaction(b, c),
                                    [n] = await Promise.all([rb({
                                        transaction: l.transaction,
                                        H: b,
                                        Y: d
                                    }), l.Rd]);
                                return n
                            }
                        } catch (k) {
                            a = k;
                            var h = a instanceof Error ? jb(a) ? new hb(a) : mb(a) ? new kb(a) : a : Error(String(a));
                            h instanceof sb || h instanceof tb || h instanceof ub || h instanceof hb || (g === null || g === void 0 || g.setAttribute("error", k instanceof Error ? k.message : String(k)), g === null || g === void 0 || g.end("error"));
                            throw h;
                        } finally {
                            g === null || g === void 0 || g.end("ok")
                        }
                    },
                    yb = function(a, b, c, d = [], e) {
                        return new vb(a, b, new wb(new xb({
                            Ff: () => gb({
                                name: a,
                                version: 1,
                                Ef: f => {
                                    f = f.createObjectStore(a, {
                                        keyPath: "key"
                                    });
                                    if (d !=
                                        null && d.length > 0)
                                        for (const {
                                                name: g,
                                                Ib: h,
                                                ...k
                                            } of d) f.createIndex(g, `${"record"}.${h}`, k)
                                },
                                ee: {
                                    type: 1,
                                    ue: !0,
                                    ve: !0
                                }
                            })
                        }, e), e != null ? {
                            tf: ({
                                methodName: f
                            }) => {
                                if (!(e == null || Math.random() > .01)) return e.ta(`storage_layer.idb_database_manager.execute.${f}`, {
                                    attrs: new Map([
                                        ["sample_rate_override", 1]
                                    ]),
                                    timeout: 3E5
                                })
                            }
                        } : void 0), c)
                    },
                    zb = function(a, b, c, d, e) {
                        return yb(a, b, c, d, e)
                    },
                    Ab = async function(a) {
                        if (a.Cb != null) switch (a = await a.Cb.qc(), a) {
                            case 1:
                            case 2:
                                break;
                            case 3:
                            case void 0:
                                throw new sb;
                            default:
                                throw new F(a);
                        }
                    },
                    Db = async function(a, b, c) {
                        await Ab(a);
                        return O(a.oa, {
                            H: a.H,
                            mode: "readwrite",
                            Y: async d => {
                                await Promise.all(b.map(async e => {
                                    var f = await d.get(e);
                                    f = f ? {
                                        value: a.S(Bb(f))
                                    } : void 0;
                                    f = c(f, e);
                                    f != null ? await d.put(Cb(e, a.Wb.za(f.value))) : await d.delete(e)
                                }))
                            },
                            methodName: "updateMany"
                        })
                    },
                    Cb = function(a, b) {
                        return {
                            key: a,
                            record: b
                        }
                    },
                    Eb = function(a) {
                        if (typeof a !== "object" || a == null) throw Error("Result is not an object");
                        a = a.key;
                        if (typeof a !== "string") throw Error("Key is not a string");
                        return a
                    },
                    Bb = function(a) {
                        if (typeof a !==
                            "object" || a == null) throw Error("Result is not an object");
                        a = a.record;
                        if (a == null) throw Error("Value is undefined");
                        return a
                    },
                    Gb = async function(a) {
                        return Promise.race([(async () => {
                            try {
                                return await Fb().get("userAgent")
                            } catch (b) {
                                a.F(b)
                            }
                        })(), $a(1E4).then(() => {})])
                    },
                    Fb = function() {
                        return yb("config", {
                            za: a => a,
                            S: a => a
                        })
                    },
                    Hb = async function(a, b) {
                        const c = await a.Mf.Ze();
                        if (c == null || c === a.options.ag || (new URL(b.url)).origin !== a.options.targetOrigin) return b;
                        a = b.clone();
                        a.headers.set("X-Canva-User-Agent", c);
                        return a
                    },
                    Mb = function({
                        la: a,
                        C: b,
                        D: {
                            l: c,
                            j: d
                        }
                    }) {
                        return new Ib(b, a ? new Jb({
                            Ze: () => Gb(d)
                        }) : void 0, c, (...e) => self.fetch(...e))
                    },
                    Nb = function({
                        H: a,
                        ha: b,
                        ja: c
                    }) {
                        return `${b}-${c}-${a}`
                    },
                    Ob = function(a, b, c) {
                        return a.sd.Ga(b, c, void 0, a.md[b], a.l)
                    },
                    Qb = function(a, b) {
                        var c = Pb;
                        const d = a.Qc.ha,
                            e = a.Qc.ja,
                            f = Nb({
                                H: b,
                                ha: d,
                                ja: e
                            });
                        a.Tf.put(f, {
                            ha: d,
                            ja: e
                        }).catch(g => a.j.F(g));
                        return a.sd.Ga(f, c, a.we[b] ? {
                            qc: async () => a.Cb.qc(d)
                        } : void 0, a.md[b], a.l)
                    },
                    Ub = function(a) {
                        const b = new Rb(void 0),
                            c = new Sb(void 0);
                        return new Tb(void 0, b, c, a, void 0)
                    },
                    Vb = function(a) {
                        return self.navigator.locks ? self.navigator.locks.request("page_preloader_lock", a) : a()
                    },
                    Zb = async function(a) {
                        async function b(k, l, n, m = "js") {
                            n && (l = m === "js" ? l + `\n//# sourceMappingURL=${n}` : l + `\n/*# sourceMappingURL=${n}*/`);
                            if (n = k.match(/^([0-9a-fA-F]{16,}).*$/))
                                if ([, n] = n, m = (new TextEncoder).encode(l.replace(new RegExp(n, "g"), "")), await Wb(m) !== n) throw Error(`The file named ${k} doesn't match its content hash.`);
                            h.push({
                                fileName: k,
                                content: l
                            })
                        }
                        if (!Wb) {
                            var {
                                sg: c
                            } = await __webpack_require__.me(834202).then(() =>
                                ({
                                    sg: __c.Xb
                                }));
                            Wb = c
                        }
                        if (c = Yb(a)) a = c.ze;
                        const d = /(?:\n|^)(?:;\/\/|\/\*) __FILE_CONTENT_FOR__:(.*?)(?: \*\/)?\n/gm;
                        let e, f, g = "";
                        const h = [];
                        for (; e = d.exec(a);) g && await b(g, a.slice(f, e.index), c === null || c === void 0 ? void 0 : c.Id.shift(), c === null || c === void 0 ? void 0 : c.hd), g = e[1], f = d.lastIndex;
                        g && await b(g, a.slice(f, a.endsWith("\n") ? a.length - 1 : void 0), c === null || c === void 0 ? void 0 : c.Id.shift(), c === null || c === void 0 ? void 0 : c.hd);
                        return h
                    },
                    Yb = function(a) {
                        var b = a.endsWith("\n") ? a.length - 1 : a.length;
                        const c = a.lastIndexOf("\n",
                            b);
                        if (b = a.slice(c + 1, b).match(/\/(\/|\*)# sourceMappingURL=.*\/chunk-batch-sm\/(.*?)(?: \*\/)?$/)) {
                            var [, d, e] = b;
                            b = d === "/" ? "js" : "css";
                            return {
                                Id: e.split("+").map(f => f.split("_")[1]),
                                hd: b,
                                ze: a.slice(0, c)
                            }
                        }
                    },
                    ac = async function(a, {
                        urls: b,
                        Sf: c
                    }) {
                        const d = [];
                        await Db(a.db, b, (e, f) => {
                            e = e === null || e === void 0 ? void 0 : e.value;
                            e == null && (e = new $b({
                                Dc: [],
                                Ra: !1,
                                Kb: void 0
                            }));
                            e.Ra === !1 && d.push(f);
                            e.Sc.add(c);
                            e.Kb = Date.now();
                            return {
                                value: e
                            }
                        });
                        return {
                            lg: d
                        }
                    },
                    bc = async function(a, b, c) {
                        await a.db.update(b, d => {
                            d = d === null || d ===
                                void 0 ? void 0 : d.value;
                            d == null && (d = new $b({
                                Dc: [],
                                Ra: !1,
                                Kb: Date.now()
                            }));
                            d.Ra = !0;
                            return {
                                value: d
                            }
                        });
                        try {
                            await (await a.oc()).put(b, c)
                        } catch (d) {
                            throw a.db.update(b, e => {
                                e = e === null || e === void 0 ? void 0 : e.value;
                                if (e != null) return e.Ra = !1, {
                                    value: e
                                }
                            }).catch(() => {}), d;
                        }
                    },
                    cc = async function(a, b, c) {
                        if (b.ok) {
                            var d = await b.clone().text(),
                                e = [];
                            try {
                                e = (await a.l.ob("chunk_composing_route.extract_files_from_batch_content", c, async () => a.te.Qe(d))).map(({
                                    fileName: f,
                                    content: g
                                }) => ({
                                    url: `${a.N}/${f}`,
                                    response: new Response(g, {
                                        headers: b.headers
                                    })
                                }))
                            } catch (f) {
                                a.j.F(f);
                                return
                            }
                            try {
                                await a.l.ob("chunk_composing_route.cache_chunks", c, async () => a.qe.pe(e))
                            } catch (f) {
                                a.j.F(f)
                            }
                        }
                    },
                    fc = function({
                        N: a,
                        C: b,
                        I: c,
                        D: d
                    }) {
                        const e = {
                                Qe: Zb
                            },
                            f = Ub(d.j),
                            g = new dc(f, d.l);
                        return {
                            se: new ec(b, a, c, {
                                pe: async h => {
                                    await Vb(async () => {
                                        const k = new Map(h.map(({
                                                url: n,
                                                response: m
                                            }) => [n, m])),
                                            {
                                                lg: l
                                            } = await ac(g, {
                                                urls: [...k.keys()],
                                                Sf: ""
                                            });
                                        for (const n of l) {
                                            if (!k.has(n)) throw Error(`Response for ${n} not found`);
                                            await bc(g, n, k.get(n))
                                        }
                                    })
                                }
                            }, e, d.j, d.l)
                        }
                    },
                    hc = async function(a,
                        b, c) {
                        c = await a.vf.match(b.request.url, {
                            B: c
                        });
                        return c == null ? null : a.Tb != null && b.request.headers.has("range") ? gc(a.Tb, b.request, c) : c
                    },
                    ic = function({
                        start: a,
                        end: b,
                        de: c
                    }) {
                        r(a == null || a >= 0, "Range start and end must be within the bounds of the blob");
                        r(b == null || b <= c, "Range start and end must be within the bounds of the blob");
                        if (a != null && b != null) return {
                            start: a,
                            end: b + 1
                        };
                        if (a != null && b == null) return {
                            start: a,
                            end: c
                        };
                        if (a == null && b != null) return {
                            start: c - b,
                            end: c
                        };
                        throw Error(`Invalid range. Start: ${a}, end: ${b}`);
                    },
                    gc = async function(a, b, c) {
                        try {
                            const e = b.headers.get("range");
                            if (e == null) throw Error("Range header is required");
                            const f = await c.blob();
                            var d;
                            const [, g, h] = (d = jc.exec(e)) !== null && d !== void 0 ? d : [];
                            if (g == null && h == null) throw Error(`invalid-range-header: ${e}`);
                            const {
                                start: k,
                                end: l
                            } = {
                                start: g == null ? void 0 : Number(g),
                                end: h == null ? void 0 : Number(h)
                            }, n = ic({
                                start: k,
                                end: l,
                                de: f.size
                            }), m = f.slice(n.start, n.end), p = m.size, q = new Response(m, {
                                status: 206,
                                headers: c.headers
                            });
                            q.headers.set(...kc);
                            q.headers.set("Content-Length",
                                p.toString());
                            q.headers.set("Content-Range", `bytes ${n.start}-${n.end-1}/${f.size}`);
                            return q
                        } catch (e) {
                            return a.j.F(e), new Response("", {
                                status: 416
                            })
                        }
                    },
                    mc = function({
                        j: a
                    }) {
                        return {
                            Tb: new lc({
                                j: a
                            })
                        }
                    },
                    pc = function({
                        C: a,
                        ma: b,
                        D: {
                            j: c,
                            l: d
                        },
                        I: e
                    }) {
                        d = new nc({
                            cacheName: "media",
                            Pc(f) {
                                const {
                                    origin: g,
                                    pathname: h
                                } = new URL(f);
                                return g + h
                            }
                        }, c, d);
                        ({
                            Tb: b
                        } = b ? mc({
                            j: c
                        }) : {});
                        return {
                            Fe: new oc(a, d, b, e)
                        }
                    },
                    rc = function({
                        N: a,
                        D: {
                            j: b,
                            l: c
                        },
                        C: d,
                        I: e
                    }) {
                        b = new nc({
                            cacheName: "assets-2"
                        }, b, c);
                        return {
                            If: new qc({
                                N: a
                            }, d, e, b)
                        }
                    },
                    tc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a =
                            Qb(a, "homepage_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    uc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Qb(a, "editor_page_bootstraps");
                        return new sc({
                            rb: !1
                        }, a)
                    },
                    vc = function({
                        D: {
                            ub: a
                        }
                    }) {
                        a = Ob(a, "offline_fallback_bootstrap", Pb);
                        return new sc({
                            rb: !0
                        }, a)
                    },
                    wc = function({
                        rc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return tc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    xc = function({
                        rc: a
                    }) {
                        return {
                            ib: async b => {
                                const c = await a();
                                if (c != null) return uc({
                                    D: {
                                        ub: c
                                    }
                                }).ib(b)
                            }
                        }
                    },
                    zc = function(a) {
                        r(a.length > 0);
                        r(a.every(b => b.indexOf("?") < 0));
                        return new yc(["",
                            ...a.map(encodeURIComponent)
                        ].join("/"))
                    },
                    Ac = function(a, b) {
                        r(!0);
                        r(!a.Va.has("ui"));
                        if (b != null)
                            if (Array.isArray(b)) {
                                b = b.filter(Pa);
                                if (b.length === 0) return a;
                                r(b.every(c => typeof c === "number" || typeof c === "string"));
                                a.Va.set("ui", b)
                            } else if (typeof b === "boolean") a.Va.set("ui", b || String(b));
                        else if (typeof b === "number" || typeof b === "string") a.Va.set("ui", String(b));
                        else throw Error(`invalid param value type: ${typeof b}`);
                        return a
                    },
                    Bc = function(a) {
                        if (a.Va.size === 0) return a.path;
                        const b = Array.from(a.Va.entries()).map(([c,
                            d
                        ]) => d === !0 ? `${encodeURIComponent(c)}` : Array.isArray(d) ? d.map(e => `${encodeURIComponent(c)}=${encodeURIComponent(e)}`).join("&") : `${encodeURIComponent(c)}=${encodeURIComponent(d)}`).join("&");
                        return `${a.path}?${b}`
                    },
                    Cc = function(a) {
                        a = /design\/(D[a-zA-Z0-9_-]{10})\/?([a-zA-Z0-9_-]+)?/g.exec(a);
                        if (!(a == null || a.length < 2)) {
                            var b = a[2];
                            (new Set(["edit", "remix", "view", "watch"])).has(a[2]) && (b = void 0);
                            return {
                                id: a[1],
                                Bh: b
                            }
                        }
                    },
                    Dc = function({
                        R: a,
                        qf: b
                    }) {
                        const c = b.manifest.app;
                        return (c === "home" ? ["settings", "home"] : [c]).includes(a.app) ? a.locale === b.locale : !1
                    },
                    Ec = function({
                        app: a,
                        commit: b
                    }) {
                        return `${a}-${b}`
                    },
                    Fc = async function(a, b, c, d, e) {
                        b = Ec({
                            app: b,
                            commit: c
                        });
                        let f;
                        try {
                            f = await a.fa.get(b)
                        } catch (g) {
                            if (g instanceof tb) {
                                a.fa.delete(b);
                                return
                            }
                            throw g;
                        }
                        if (a = f != null) a = f, a.variant !== d ? a = !1 : (d = Date.now() / 1E3, a = (e === null || e === void 0 || !e.rb) && a.timestamp + 1209600 < d ? !1 : !0);
                        if (a) return f
                    },
                    Hc = async function(a, b, c) {
                        var d = ha(a.fe.get(b));
                        b = a.Jf.normalizeUrl({
                            url: c,
                            app: b
                        });
                        d = await d.ib(b);
                        if (d != null && (b = Gc.S(JSON.parse(d.Ba)),
                                a = await Fc(a.rf, d.app, b.commit, b.ne, {
                                    rb: c.href === a.options.V
                                }), a != null && Dc({
                                    R: d,
                                    qf: a
                                }))) return {
                            Ba: b,
                            nb: d,
                            manifest: a.manifest,
                            Kc: a.Kc
                        }
                    },
                    Oc = function({
                        V: a,
                        D: {
                            l: b,
                            j: c
                        }
                    }) {
                        const d = Ub(c);
                        var e = async () => {
                                var h = await Ob(d, "active_user_brand_hint_for_service_worker_to_serve_pages", Ic).get("active");
                                if (h != null) {
                                    const k = new Rb(void 0),
                                        l = new Sb(void 0);
                                    h = new Jc(h, k, l, c, void 0)
                                } else h = void 0;
                                return h
                            },
                            f = wc({
                                rc: e
                            });
                        e = xc({
                            rc: e
                        });
                        var g = vc({
                            D: {
                                ub: d
                            }
                        });
                        f = new Map([
                            ["home", f],
                            ["editor", e],
                            ["offline_fallback", g]
                        ]);
                        e = new Kc;
                        g = Ob(d, "manifests", Lc);
                        return new Mc({
                            V: a
                        }, f, e, new Nc(g, b))
                    },
                    Pc = function(a) {
                        let b;
                        try {
                            b = a.crypto.randomUUID()
                        } catch (c) {
                            b = a.crypto.getRandomValues(new Uint8Array(16)).reduce((d, e) => d + String.fromCharCode(e), "")
                        }
                        return btoa(b)
                    },
                    Qc = function(a) {
                        var b;
                        var c = '<!DOCTYPE html>\n<html dir="' + ((b = a.direction) == null ? "" : b) + '" lang="' + ((b = a.locale) == null ? "" : b) + '">\n  <head>\n    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>\n    <meta name="referrer" content="origin">\n    ';
                        a.viewport &&
                            (c += '\n      <meta name="viewport" content="' + ((b = a.viewport) == null ? "" : b) + '">\n    ');
                        c += '\n    <link rel="shortcut icon" href="/favicon.ico">\n    <title>' + ((b = a.title) == null ? "" : b) + '</title>\n    <script nonce="' + ((b = a.nonce) == null ? "" : b) + '">\n      window["bootstrap"] = {\n        "ui": JSON.parse(' + ((b = a.Nc) == null ? "" : b) + '),\n        "base": JSON.parse(' + ((b = a.Ba) == null ? "" : b) + '),\n        "page": JSON.parse(' + ((b = a.nb) == null ? "" : b) + '),\n      };\n      window["flags"] = JSON.parse(' + ((b = a.kc) == null ?
                            "" : b) + ');\n      window["__canva_public_path__"] = "' + ((b = a.Pf) == null ? "" : b) + '";\n      window["cmsg"] = {\n        locale: "' + ((b = a.locale) == null ? "" : b) + '",\n        strings: {},\n      };\n    \x3c/script>\n    ';
                        for (const d of a.links) c += '\n      <link href="' + ((b = d.href) == null ? "" : b) + '" rel="' + ((b = d.rel) == null ? "" : b) + '" ' + ((b = d.nonce ? `nonce="${d.nonce}"` : "") == null ? "" : b) + ">\n    ";
                        c += '\n  </head>\n  <body>\n    <div id="root">' + ((b = a.Bc) == null ? "" : b) + "</div>\n    ";
                        for (const d of a.scripts) c += '\n      <script src="' +
                            ((b = d.src) == null ? "" : b) + '" nonce="' + ((b = d.nonce) == null ? "" : b) + '" ' + ((b = d.defer ? "defer" : "") == null ? "" : b) + ">\x3c/script>\n    ";
                        return c + "\n  </body>\n</html>\n"
                    },
                    Rc = function(a, b) {
                        const c = [];
                        var d = a.bd;
                        d.config.O === 3 && /android/i.test(d.config.userAgent) ? c.push(...b.Fd.webview.$d.Fa) : (a = a.bd, a.config.O === 3 && /ipod|iphone|ipad/i.test(a.config.userAgent) && c.push(...b.Fd.webview.kf.Fa));
                        c.push(...b.Uc.Fa);
                        return c
                    },
                    Sc = function(a, b, c, d, e) {
                        const f = b.locale,
                            g = b.direction,
                            h = b.title,
                            k = b.Nc,
                            l = b.Ba,
                            n = b.nb;
                        b = b.kc;
                        const m = c.viewport,
                            p = c.Bc;
                        var q = c.Uc;
                        const w = c.nf.get(f) || {
                            ab: [],
                            Fa: []
                        };
                        q = [...c.links.filter(({
                            rel: v
                        }) => v !== "preload" && v !== "prefetch").map(v => ({
                            href: /^(https?:)?\/\//.test(v.href) ? v.href : `${d}/${v.href}`,
                            rel: v.rel,
                            nonce: e
                        })), ...w.ab.map(v => ({
                            href: `${d}/${v}`,
                            rel: "stylesheet"
                        })), ...q.ab.map(v => ({
                            href: `${d}/${v.filename}`,
                            rel: "stylesheet"
                        }))];
                        a = [...w.Fa.map(v => ({
                            src: `${d}/${v}`,
                            nonce: e
                        })), ...Rc(a, c).map(v => ({
                            src: `${d}/${v.filename}`,
                            nonce: e,
                            defer: !0
                        }))];
                        return Qc({
                            locale: f,
                            direction: g === 1 ? "ltr" : "rtl",
                            title: h,
                            viewport: m,
                            nonce: e,
                            Pf: d ? `${d}/` : "",
                            Nc: JSON.stringify(k),
                            Ba: JSON.stringify(l),
                            nb: JSON.stringify(n),
                            kc: JSON.stringify(b || "{}"),
                            links: q,
                            Bc: p !== null && p !== void 0 ? p : "",
                            scripts: a
                        })
                    },
                    Tc = function(a, b) {
                        const c = b.pathname;
                        if (c[0] !== "/") return a.fallback;
                        for (const d of a.rules) {
                            const e = d.match(c);
                            if (e != null) return {
                                page: d.page,
                                jb: f => e.jb(b, f)
                            }
                        }
                        return a.fallback
                    },
                    Uc = async function(a, b, {
                        B: c
                    }) {
                        c = a.l.ua("service_worker.page_assembler.render_page", c);
                        try {
                            const k = Tc(a.Wf, b);
                            let l = await Hc(a.yd, k.page, k.jb(0));
                            l == null && (l = await Hc(a.yd, "offline_fallback", new URL(a.config.V)));
                            if (l != null) {
                                var d = { ...l.nb
                                };
                                const n = Gc.za({ ...l.Ba,
                                    nd: 2,
                                    timestamp: void 0
                                });
                                var e = JSON.stringify(n);
                                b = { ...d,
                                    Ba: e
                                };
                                var f = Pc(a.Af),
                                    g = Sc(a.Bf, b, l.manifest, l.Kc, f),
                                    h = a.ye.createPolicy({
                                        page: k.page,
                                        nonce: f
                                    });
                                return new Response(g, {
                                    headers: {
                                        "content-type": "text/html;charset=utf-8",
                                        "content-security-policy-report-only": h,
                                        "X-Offline-Response": "true"
                                    }
                                })
                            }
                        } catch (k) {
                            c.setStatus("error"), a.j.F(k)
                        } finally {
                            c.end()
                        }
                    },
                    Yc = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        yc: d,
                        D: {
                            j: e,
                            l: f
                        }
                    }) {
                        b = new Vc(new Wc({
                            O: c,
                            userAgent: b
                        }));
                        c = Oc({
                            V: a,
                            D: {
                                l: f,
                                j: e
                            }
                        });
                        return new Xc({
                            V: a
                        }, d, e, c, b, f)
                    },
                    $c = function({
                        V: a,
                        userAgent: b,
                        O: c,
                        C: d,
                        D: {
                            j: e,
                            l: f
                        },
                        yc: g,
                        I: h,
                        ra: k
                    }) {
                        a = Yc({
                            V: a,
                            userAgent: b,
                            O: c,
                            yc: g,
                            D: {
                                j: e,
                                l: f
                            }
                        });
                        return {
                            Kf: new Zc({
                                ra: k
                            }, d, h, a)
                        }
                    },
                    ad = function(a) {
                        a = a.slice(1).split("/");
                        a[a.length - 1] === "" && a.pop();
                        return a
                    },
                    bd = function(a, b, c) {
                        for (const d of b) {
                            b = a.root;
                            for (const e of ad(d)) b.children.has(e) || b.children.set(e, {
                                children: new Map,
                                config: void 0
                            }), b = b.children.get(e);
                            t(b.config == null,
                                "Path already exists");
                            b.config = c
                        }
                    },
                    cd = function(a, b) {
                        r(b.startsWith("/"), "Path must start with a slash");
                        a = a.root;
                        for (const d of ad(b)) {
                            if (d === "") return;
                            var c;
                            b = (c = a.children.get(d)) !== null && c !== void 0 ? c : a.children.get("*");
                            if (b == null) return;
                            a = b
                        }
                        return a.config
                    },
                    dd = function(a, b) {
                        const c = [];
                        for (const [d, e] of b.children) c.push({
                            key: d,
                            Ph: e.config != null,
                            children: dd(a, e)
                        });
                        return c
                    },
                    hd = function() {
                        const a = new ed;
                        bd(a, fd, {});
                        bd(a, gd, {
                            mf: "/settings"
                        });
                        return {
                            page: "home",
                            match: b => {
                                const c = cd(a, b);
                                if (c != null) return {
                                    jb: (d,
                                        e) => {
                                        switch (e) {
                                            case 0:
                                                var f;
                                                d = (f = c.Jh) !== null && f !== void 0 ? f : "/";
                                                return new URL(d, self.location.origin);
                                            case 1:
                                                var g;
                                                f = (g = c.mf) !== null && g !== void 0 ? g : d;
                                                return new URL(f, self.location.origin);
                                            default:
                                                throw new F(e);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    id = function() {
                        return {
                            page: "editor",
                            match: a => Cc(a) != null ? {
                                jb: b => b
                            } : void 0
                        }
                    },
                    jd = function() {
                        return {
                            page: "offline_fallback",
                            jb: () => new URL("/_offline-fallback", self.location.origin)
                        }
                    },
                    ld = function({
                        D: {
                            j: a
                        },
                        C: b,
                        I: c
                    }) {
                        a = new nc({
                            cacheName: "web_workers"
                        }, a);
                        return {
                            qg: new kd(b, c, a)
                        }
                    },
                    qd = function({
                        V: a,
                        N: b,
                        userAgent: c,
                        O: d,
                        C: e,
                        D: {
                            j: f,
                            l: g
                        },
                        cb: h,
                        la: k,
                        ra: l,
                        ma: n
                    }) {
                        k = Mb({
                            la: k,
                            C: e,
                            D: {
                                l: g,
                                j: f
                            }
                        });
                        const m = hd();
                        ({
                            Kf: a
                        } = $c({
                            V: a,
                            userAgent: c,
                            O: d,
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            yc: new md([m, id()]),
                            I: k,
                            ra: l
                        }));
                        ({
                            qg: c
                        } = ld({
                            C: e,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            If: d
                        } = rc({
                            N: b,
                            D: {
                                j: f,
                                l: g
                            },
                            C: e,
                            I: k
                        }));
                        ({
                            Fe: n
                        } = pc({
                            C: e,
                            ma: n,
                            D: {
                                j: f,
                                l: g
                            },
                            I: k
                        }));
                        ({
                            se: b
                        } = fc({
                            C: e,
                            I: k,
                            N: b,
                            D: {
                                j: f,
                                l: g
                            }
                        }));
                        return {
                            Gc: new nd([new od(k), new pd(h), a, c, d, n, b])
                        }
                    },
                    sd = function({
                        kb: a,
                        V: b,
                        N: c,
                        userAgent: d,
                        O: e,
                        C: f,
                        D: {
                            j: g,
                            l: h
                        },
                        cb: k,
                        la: l,
                        ma: n,
                        ra: m,
                        wc: p = fetch
                    }) {
                        ({
                            Gc: b
                        } = qd({
                            V: b,
                            N: c,
                            userAgent: d,
                            O: e,
                            C: f,
                            D: {
                                j: g,
                                l: h
                            },
                            la: l,
                            ma: n,
                            cb: k,
                            ra: m
                        }));
                        a = Wa({
                            D: {
                                j: g
                            },
                            fb: a
                        });
                        c = Za();
                        return new rd(b, f, g, a, {
                            df: async q => {
                                if (f.Sa()) return Response.error();
                                try {
                                    return await p(q, {
                                        redirect: "follow"
                                    })
                                } catch (w) {
                                    return Response.error()
                                }
                            }
                        }, c)
                    },
                    ud = function({
                        serviceWorker: a,
                        D: {
                            j: b,
                            Ja: c,
                            tb: d,
                            xa: e
                        },
                        O: f,
                        C: g,
                        N: h,
                        kb: k,
                        Be: l,
                        ra: n,
                        la: m,
                        ma: p
                    }) {
                        c = c.Qa("service_worker.fetch_interceptor");
                        b = sd({
                            kb: k,
                            V: `${a.location.origin}/_offline-fallback`,
                            N: h,
                            userAgent: self.navigator.userAgent,
                            O: f,
                            C: g,
                            D: {
                                j: b,
                                l: c
                            },
                            cb: {
                                We: l
                            },
                            ra: n,
                            la: m,
                            ma: p
                        });
                        const q =
                            new td(b, d, e, c);
                        a.addEventListener("fetch", w => Na(q, w))
                    },
                    Bd = function(a, b) {
                        const c = a.l.ta("service_worker.handle_message");
                        try {
                            const d = a.l.Ub("process_message", c, e => {
                                try {
                                    const f = vd.S(b.data),
                                        g = f.message,
                                        h = f.requestId;
                                    e.setAttribute("message_type", f.message);
                                    switch (g) {
                                        case "GET_SW_RELEASE":
                                            return new wd({
                                                requestId: h,
                                                release: a.options.release
                                            });
                                        case "OVERRIDE_NETWORK_STRATEGY":
                                            return a.C.Jb = f.Jb, new xd({
                                                requestId: h,
                                                Sa: a.C.Sa()
                                            });
                                        case "SKIP_WAITING":
                                            return a.serviceWorker.skipWaiting(), new yd({
                                                requestId: h
                                            });
                                        default:
                                            throw new F(g);
                                    }
                                } catch (f) {
                                    return e.setStatus("error"), new zd({
                                        Rf: JSON.stringify(b.data)
                                    })
                                }
                            });
                            a.l.Ub("post_response", c, () => {
                                var e;
                                (e = b.source) === null || e === void 0 || e.postMessage(Ad.za(d))
                            })
                        } finally {
                            c.end()
                        }
                    },
                    Dd = function({
                        serviceWorker: a,
                        C: b,
                        release: c,
                        D: {
                            Ja: d
                        }
                    }) {
                        d = d.Qa("service_worker.message_handler");
                        const e = new Cd({
                            release: c
                        }, a, b, d);
                        a.addEventListener("message", f => Bd(e, f))
                    },
                    Ed = function(a, b, c, d) {
                        d = [c instanceof Error ? c : null, a.context, d].filter(Pa);
                        Object.keys(a.tags).length > 0 && d.push(a.tags);
                        return [`[ConsoleErrorClient][${a.name}][${b}]: ${c}`, ...d]
                    },
                    Gd = function() {
                        const a = Fd();
                        let b = 0;
                        return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, function(c) {
                            c = Number(c);
                            return (c ^ a[b++] & 15 >> c / 4).toString(16)
                        })
                    },
                    Fd = function() {
                        if (typeof window !== "undefined" && typeof window.crypto !== "undefined" && typeof window.crypto.getRandomValues === "function") return window.crypto.getRandomValues(new Uint8Array(31));
                        const a = Math.random;
                        return Array.from({
                            length: 31
                        }, () => Math.floor(a() * 255))
                    },
                    Hd = function(a) {
                        Object.keys(a).forEach(b =>
                            a[b] == null && delete a[b])
                    },
                    Jd = function(a) {
                        if (a instanceof Id) {
                            const b = [];
                            a.values.forEach(c => {
                                b.push(Jd(c))
                            });
                            return b
                        }
                        if (a instanceof Kd) {
                            const b = {};
                            a.values.forEach(c => {
                                b[c.name] = Jd(c.value)
                            });
                            return b
                        }
                        return a.value
                    },
                    Ld = function(a, b) {
                        let c = b;
                        Object.entries(a.Gd).forEach(([d, e]) => {
                            c = c.split(e).join(d)
                        });
                        return c
                    },
                    Md = function(a, b = {}) {
                        Object.keys(b).forEach(c => {
                            const d = b[c];
                            typeof d === "string" && (b[c] = Ld(a, d))
                        })
                    },
                    Nd = function(a, b) {
                        var c;
                        return { ...b,
                            frames: b === null || b === void 0 ? void 0 : (c = b.frames) === null ||
                                c === void 0 ? void 0 : c.map(d => {
                                    for (const [e, f] of Object.entries(a.Gd)) {
                                        const g = h => h === null || h === void 0 ? void 0 : h.replace(f, e);
                                        d.module = g(d.module);
                                        d.abs_path = g(d.abs_path);
                                        d.filename = g(d.filename)
                                    }
                                    return d
                                })
                        }
                    },
                    Od = function(a, b) {
                        var c, d;
                        b.exception && b.exception.values && (b.exception = { ...b.exception,
                            values: (d = b.exception) === null || d === void 0 ? void 0 : (c = d.values) === null || c === void 0 ? void 0 : c.map(e => ({ ...e,
                                ...(e.stacktrace && {
                                    stacktrace: Nd(a, e.stacktrace)
                                })
                            }))
                        })
                    },
                    Pd = function(a, b) {
                        var c = b.request;
                        c != null && c.url !=
                            null && (c.url = Ld(a, c.url));
                        Od(a, b);
                        b.tags != null && Md(a, b.tags)
                    },
                    Qd = function(a, b) {
                        const c = [];
                        b.message && c.push(b.message);
                        if (b.exception) {
                            const {
                                type: d = "",
                                value: e = ""
                            } = b.exception.values && b.exception.values[0] || {};
                            d !== "Error" && c.push(d, e)
                        }
                        return c.some(d => a.Xd.some(e => Object.prototype.toString.call(e) === "[object RegExp]" ? e.test(d) : typeof e === "string" ? d.indexOf(e) !== -1 : !1))
                    },
                    Sd = function(a, b) {
                        var c, d;
                        if ((a === null || a === void 0 ? void 0 : a.message) !== (b === null || b === void 0 ? void 0 : b.message)) return !1;
                        a = (c = a.exception) ===
                            null || c === void 0 ? void 0 : c.values;
                        b = (d = b.exception) === null || d === void 0 ? void 0 : d.values;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (d = 0; d < a.length; d++)
                            if (a[d].value !== b[d].value || a[d].type !== b[d].type || !Rd(a[d].stacktrace, b[d].stacktrace)) return !1;
                        return !0
                    },
                    Rd = function(a, b) {
                        a = a === null || a === void 0 ? void 0 : a.frames;
                        b = b === null || b === void 0 ? void 0 : b.frames;
                        if (a == null && b == null) return !0;
                        if (a == null || b == null || a.length !== b.length) return !1;
                        for (let c = 0; c < a.length; c++)
                            if (a[c].filename !== b[c].filename ||
                                a[c].colno !== b[c].colno || a[c].lineno !== b[c].lineno) return !1;
                        return !0
                    },
                    Ud = function(a, b) {
                        const c = a.history.find(f => Sd(f.event, b));
                        if (c == null) return !1;
                        const d = Td.now(),
                            e = c.timestamp;
                        return Sd(b, c.event) && d - e < a.ig
                    },
                    Xd = function() {
                        return new Vd({
                            Qh: a => Wd({
                                frame: a,
                                bg: "/dist/renderer/"
                            })
                        })
                    },
                    Wd = function({
                        frame: a,
                        bg: b
                    }) {
                        if (a.filename == null) return a;
                        const c = a.filename.replace(/\\/g, "/").split(b);
                        if (c.length <= 1) return a;
                        a.filename = "app://" + b + c.pop();
                        return a
                    },
                    Zd = function(a, b) {
                        var c;
                        b === null || b === void 0 || (c = b.breadcrumbs) ===
                            null || c === void 0 || c.map((d, e) => {
                                if (b === null || b === void 0 ? 0 : b.breadcrumbs) {
                                    var f = b.breadcrumbs;
                                    if (d.type === "http") {
                                        var g;
                                        d.data = d.data || {};
                                        var h;
                                        d.data.url = Yd(a, (h = (g = d.data) === null || g === void 0 ? void 0 : g.url) !== null && h !== void 0 ? h : "")
                                    }
                                    f[e] = d
                                }
                            });
                        b.request && (b.request = a.Ic(b.request));
                        return b
                    },
                    Yd = function(a, b) {
                        try {
                            const c = new URL(b, `${a.location.protocol}//${a.location.host}`);
                            if (!["http:", "https:"].includes(c.protocol)) return "";
                            a.Yd.some(d => c.hostname.includes(d)) && c.pathname.startsWith("/_ajax") || (c.pathname =
                                "");
                            c.search = "";
                            return b.includes(c.host) ? c.toString() : c.pathname || "/"
                        } catch (c) {
                            return ""
                        }
                    },
                    ae = function(a) {
                        const b = [];
                        for (const c of $d) {
                            const d = c(a);
                            d && b.push(d)
                        }
                        return b
                    },
                    ce = function(a) {
                        return (b, c) => {
                            b.request && (b.request = a.Ic(b.request));
                            if (be(a, b)) return null;
                            if (a.tc) {
                                b.tags == null && (b.tags = {});
                                a: switch (a.tc.status) {
                                    case 2:
                                        var d = "OFFLINE";
                                        break a;
                                    case 1:
                                        d = "ONLINE";
                                        break a;
                                    default:
                                        d = "UNKNOWN"
                                }
                                b.tags.offlineStatus = d
                            }
                            try {
                                Pd(a.Yc, b)
                            } catch (e) {
                                a.F(e)
                            }
                            return a.Vc.reduce((e, f) => f(e, c), b)
                        }
                    },
                    oe = function(a,
                        b, c) {
                        var d, e, f, g = (d = a.P) === null || d === void 0 ? void 0 : d.getCurrentHub().getClient();
                        d = g && g.getOptions() || {};
                        var h;
                        g = (h = b.sampleRate) !== null && h !== void 0 ? h : 1;
                        var k;
                        h = [new de, new ee, new fe, new ge(2E3), new he(g, (k = b.zf) !== null && k !== void 0 ? k : g), new ie, new je, new ke(a.allowUrls, location), Xd()];
                        a.R.flags && a.R.flags.Ke && h.push(new le(me));
                        a.setTags(a.R.tags);
                        a.setExtras(a.R.extra);
                        a.setTag("reactVersion", ne);
                        if (k = typeof navigator !== "undefined" ? navigator.userAgent : void 0) k = ae(k), a.setTags(k);
                        b = b.Lf;
                        b !== 1 && a.setTag("webx",
                            String(b === 3));
                        a.setTag("iframe", String(typeof window !== "undefined" && window.self !== window.top));
                        c.zd && a.setTag("webview", c.zd);
                        d.beforeSend = ce(a);
                        c = { ...d,
                            maxValueLength: 1024,
                            dsn: d.dsn || a.R.dsn,
                            environment: d.environment || a.R.environment,
                            release: d.release || a.R.release,
                            tracesSampleRate: 0,
                            sampleRate: 1,
                            integrations: h,
                            allowUrls: a.allowUrls,
                            autoSessionTracking: !1,
                            ignoreErrors: ["variable: _AutofillCallbackHandler", "_AutofillCallbackHandler is not defined", "Non-Error promise rejection captured with value: Object Not Found Matching Id"]
                        };
                        Hd(c);
                        (e = a.P) === null || e === void 0 || e.init(c);
                        (f = a.P) === null || f === void 0 || f.configureScope(l => {
                            l.setUser({
                                id: Gd()
                            });
                            l.setExtra("isAnonymousUser", !0);
                            l.setTag("initLocation", "error_client")
                        })
                    },
                    be = function(a, b) {
                        const c = b.exception && b.exception.values && b.exception.values.length > 0 && b.exception.values[0],
                            d = c && c.stacktrace || void 0,
                            e = d && d.frames && d.frames[0] && d.frames[0].filename,
                            f = b.message || c && c.value || void 0;
                        return a.jd.some(g => g({
                            message: f,
                            filename: e,
                            location,
                            tags: b.tags,
                            event: b
                        }))
                    },
                    pe = function(a, b) {
                        var c,
                            d;
                        b instanceof Error ? (c = a.P) === null || c === void 0 || c.captureException(b) : (d = a.P) === null || d === void 0 || d.captureMessage(b)
                    },
                    qe = function(a, b, c) {
                        if (b == null) return Error((c ? c + " " : "") + "[null error thrown]");
                        if (typeof b === "object") {
                            const e = b instanceof N ? new N(b.message, b.sampleRate) : Error(b.message);
                            b.stack && (e.stack = b.stack);
                            b.cause && (e.cause = b.cause);
                            if (c) {
                                var d;
                                if ((d = b.message) === null || d === void 0 ? 0 : d.startsWith(c)) return a.setTag("prefixCollision", "true"), b;
                                a = c + " " + (e.message || "[no message on error]");
                                try {
                                    e.message = a
                                } catch (f) {
                                    if (f instanceof TypeError) return Error(a);
                                    throw f;
                                }
                            }
                            return e
                        }
                        return b.toString()
                    },
                    re = function(a, b, c, d) {
                        a.P == null ? (console.error(c), d && console.log("errorParams", d)) : a.P && a.P.withScope(e => {
                            typeof d === "string" && (d = {
                                va: d
                            });
                            c = qe(e, c, typeof d === "string" ? d : d === null || d === void 0 ? void 0 : d.va);
                            d != null && (d.fingerprint && e.setFingerprint(d.fingerprint), d.mg && e.setTag("userFlow", d.mg), d.extra && d.extra.forEach((f, g) => e.setExtra(g, f)), d.tags && d.tags.forEach((f, g) => e.setTag(g, f)));
                            a.componentStack.length >
                                0 && e.setTag("component", a.componentStack.join("."));
                            e.setLevel(b);
                            pe(a, c)
                        })
                    },
                    se = function(a) {
                        return a.ga === "span" && a.attrs.get("is_uop") === !0
                    },
                    ue = function(a, b) {
                        te(a, b, () => {
                            const c = a.zb.get(b.context.spanId) || [];
                            for (const d of c) ue(a, d)
                        })
                    },
                    te = function(a, b, c) {
                        var d, e = (d = b.attrs.get("parent_relative_start_ms")) !== null && d !== void 0 ? d : b.duration;
                        e = typeof e === "number" ? ` - ${Math.round(e)}ms` : "";
                        var f = (d = b.parentSpanId != null) ? `${b.ga==="event"?"[ChildEvent]":"[ChildSpan]"}: ` : "[OpenTelemetryClient]: ";
                        const g =
                            se(b) ? "User Operation - " : "";
                        e = `${f}${g}${b.name}${e}`;
                        d && !a.sc.has(b.parentSpanId) ? console.group(e) : console.groupCollapsed(e);
                        console.groupCollapsed("Attributes");
                        d = {
                            name: b.name,
                            Oi: `${b.duration}ms`,
                            ...Object.fromEntries(b.attrs.entries())
                        };
                        e = {};
                        for (const h of Object.keys(d)) f = d[h], e[h] = f instanceof Object ? JSON.stringify(f) : f;
                        console.table(e);
                        console.groupEnd();
                        c === null || c === void 0 || c();
                        console.groupEnd();
                        a.sc.add(b.context.spanId)
                    },
                    P = function(a) {
                        return [
                            ["name", a.name],
                            ["status", a.status],
                            ["instrumentationScope",
                                a.U
                            ],
                            ["startTime", a.startTime],
                            ["endTime", a.endTime],
                            ["duration", a.duration],
                            ["parentSpanId", a.parentSpanId]
                        ]
                    },
                    ve = function(a) {
                        switch (a) {
                            case "unset":
                                return 0;
                            case "ok":
                                return 1;
                            case "error":
                                return 2;
                            default:
                                return 0
                        }
                    },
                    xe = function(a) {
                        const b = [];
                        for (const [c, d] of a.entries()) d != null && b.push({
                            key: c,
                            value: we(d)
                        });
                        return b
                    },
                    we = function(a) {
                        const b = typeof a;
                        return b === "string" ? {
                            stringValue: a
                        } : b === "number" ? Number.isInteger(a) ? {
                            intValue: a
                        } : {
                            doubleValue: a
                        } : b === "boolean" ? {
                            boolValue: a
                        } : a instanceof Uint8Array ? {
                            bytesValue: a
                        } : Array.isArray(a) ? {
                            arrayValue: {
                                values: a.map(we)
                            }
                        } : b === "object" && a != null ? {
                            kvlistValue: {
                                values: Object.entries(a).map(([c, d]) => ({
                                    key: c,
                                    value: we(d)
                                }))
                            }
                        } : {}
                    },
                    ye = function(a) {
                        const b = new Map;
                        for (const c of a) a = b.get(c.U), a || (a = [], b.set(c.U, a)), a.push(c);
                        return b
                    },
                    ze = function(a, b) {
                        b = b(a) / 1E3;
                        a = Math.trunc(b);
                        b = Number((b - a).toFixed(9)) * 1E9;
                        let [c, d] = [a, b];
                        d > 1E9 && (d -= 1E9, c += 1);
                        return c * 1E9 + d
                    },
                    Ae = function(a, b) {
                        if (a.length === 0) return {
                            resourceSpans: []
                        };
                        const c = [];
                        a = ye(a);
                        for (const [d, e] of a)
                            if (e.length >
                                0) {
                                a = {
                                    attributes: xe(e[0].da),
                                    droppedAttributesCount: 0
                                };
                                const f = [{
                                    scope: {
                                        name: d
                                    },
                                    spans: e.map(g => {
                                        var h = g.context;
                                        const k = ze(g.startTime, b);
                                        var l;
                                        const n = ze((l = g.endTime) !== null && l !== void 0 ? l : g.startTime, b);
                                        var m = g.attrs;
                                        g.ga === "event" && (l = g.attrs.get("parent_start"), l != null && typeof l === "number" && (m = new Map([...m.entries(), ["parent_start", ze(l, b)]])));
                                        l = h.traceId;
                                        h = h.spanId;
                                        var p = g.parentSpanId,
                                            q = g.name;
                                        m = xe(m);
                                        var w = {
                                            code: ve(g.status)
                                        };
                                        g = g.links;
                                        const v = [];
                                        for (const z of g) v.push({
                                            spanId: z.jg.spanId,
                                            traceId: z.jg.traceId,
                                            droppedAttributesCount: 0
                                        });
                                        return {
                                            traceId: l,
                                            spanId: h,
                                            parentSpanId: p,
                                            name: q,
                                            kind: 3,
                                            startTimeUnixNano: k,
                                            endTimeUnixNano: n,
                                            attributes: m,
                                            droppedAttributesCount: 0,
                                            events: [],
                                            droppedEventsCount: 0,
                                            status: w,
                                            links: v,
                                            droppedLinksCount: 0
                                        }
                                    })
                                }];
                                c.push({
                                    resource: a,
                                    scopeSpans: f
                                })
                            }
                        return {
                            resourceSpans: c
                        }
                    },
                    Be = function(a, b) {
                        a.Ad.unshift(b);
                        return a
                    },
                    De = function(a) {
                        try {
                            a.Ta.process(a.buffer)
                        } catch (b) {
                            a.j.F(b, {
                                va: `Failed to export the span buffer from ${Ce.name}`,
                                extra: new Map([
                                    ["spans", JSON.stringify(a.buffer.map(P),
                                        void 0, 2)],
                                    ["maxBatchSize", a.config.Lb],
                                    ["maxBatchingTimeMs", a.config.Mb]
                                ])
                            })
                        }
                        a.buffer = [];
                        a.Xa != null && clearTimeout(a.Xa);
                        a.Xa = void 0
                    },
                    Ee = function(a, b, c, d = !1) {
                        b.aborted || d || !b.wa() || (c.push(b), b.Ma.forEach(e => c.push(e)));
                        for (const e of b.Na) Ee(a, e, c, d || b.aborted);
                        b.B = void 0;
                        b.Na.length = 0
                    },
                    Ie = function({
                        span: a,
                        j: b,
                        aa: c,
                        Pg: d = new Map
                    }) {
                        try {
                            var e, f, g, h, k;
                            t(!a.qd(), "Span must be ended to create a PerformanceContext");
                            const l = Fe(c, "LongTaskService"),
                                n = Fe(c, "VisibilityService"),
                                m = a.startTime,
                                p = a.endTime;
                            t(p !=
                                null, "Span endTime must exist to create a PerformanceContext");
                            const q = new Map([
                                    ["start", Ge(m, m)]
                                ]),
                                w = se(a) ? (e = a.X) === null || e === void 0 ? void 0 : e.eb : void 0;
                            for (const {
                                    name: A,
                                    startTime: M
                                } of a.Ma) q.set(A, Ge(m, M));
                            if (w != null)
                                for (const [A, M] of w) q.set(A, Ge(m, M));
                            for (const [A, M] of d) q.set(A, Ge(m, M));
                            q.set("finish", Ge(m, p));
                            if (l == null || n == null) return {
                                wf: q,
                                ...((g = a.qa) === null || g === void 0 ? void 0 : (f = g.frameRate) === null || f === void 0 ? void 0 : He(f))
                            };
                            const v = l.Gh(m, p),
                                z = n.kj(a);
                            return {
                                wf: q,
                                Uh: v.count,
                                Vh: v.duration,
                                jj: z,
                                resources: void 0,
                                ...((k = a.qa) === null || k === void 0 ? void 0 : (h = k.frameRate) === null || h === void 0 ? void 0 : He(h))
                            }
                        } catch (l) {
                            return c = l instanceof Error ? l.message : "Unknown error creating PerformanceContext", d = c.includes("Invalid metric: adjusted time must not be negative") ? 2E-4 : .2, b.Qd(new N(c, d), {
                                va: "Error creating PerformanceContext",
                                tags: new Map([
                                    ["span.name", a.name],
                                    ["service.name", String(a.da.get("service.name"))]
                                ])
                            }), {
                                Eh: c
                            }
                        }
                    },
                    Ge = function(a, b) {
                        a = b - a;
                        t(a >= 0, "Invalid metric: adjusted time must not be negative");
                        return Math.round(a)
                    },
                    Ke = function(a) {
                        return function() {
                            for (let b = 0; b < a * 2; b++) Je[b] = Math.floor(Math.random() * 16) + 48, Je[b] >= 58 && (Je[b] += 39);
                            return String.fromCharCode.apply(null, Je.slice(0, a * 2))
                        }
                    },
                    Le = function(a) {
                        let b, c;
                        a instanceof Map ? b = a : a && (c = a);
                        return {
                            Nb: b,
                            Ob: c
                        }
                    },
                    Me = function(a) {
                        const {
                            Nb: b,
                            Ob: c
                        } = Le(a);
                        var d;
                        return { ...c,
                            attrs: (d = b !== null && b !== void 0 ? b : c === null || c === void 0 ? void 0 : c.attrs) !== null && d !== void 0 ? d : new Map
                        }
                    },
                    Ne = function(a) {
                        for (const c of a.ba.plugins) try {
                            var b;
                            (b = c.fi) === null || b === void 0 ||
                                b.call(c, a)
                        } catch (d) {
                            a.j.F(d, {
                                va: "Plugin.onSpanEnd error",
                                extra: new Map([
                                    ["plugin", c.name], ...P(a)
                                ])
                            })
                        }
                    },
                    Qe = function(a) {
                        var b;
                        (b = a.X) === null || b === void 0 || Oe(b, a);
                        a.B instanceof Pe && a.B.X != null && a.B.X !== a.X && Oe(a.B.X, a)
                    },
                    Se = function(a, b, c, d) {
                        const e = a.fc = {
                            Da: a.Da,
                            Ea: a.Ea
                        };
                        try {
                            var f;
                            a.timeout && clearTimeout(a.timeout);
                            let g, h, k;
                            b instanceof Map ? h = b : b != null && (g = b);
                            c instanceof Map ? h = c : c != null && (k = c);
                            d != null && (k = d);
                            a.Za = !1;
                            g != null && a.setStatus(g);
                            h && a.Ha(h);
                            if ((f = a.qa) === null || f === void 0 ? 0 : f.frameRate) {
                                Re(a.qa.frameRate);
                                const {
                                    mc: l,
                                    kd: n,
                                    frameCount: m
                                } = He(a.qa.frameRate);
                                l != null && n != null && m != null && (a.attrs.set("frame_duration_mean", l), a.attrs.set("frame_duration_standard_deviation", n), a.attrs.set("frame_count", m), a.attrs.set("long_frame_duration", l + 2 * n))
                            }
                            a.ended = !0;
                            a.endTime = k !== null && k !== void 0 ? k : a.getCurrentTime();
                            a.duration = a.endTime - a.startTime;
                            Ne(a);
                            Qe(a);
                            a.ba.Wa.process([a]);
                            a.mb.forEach(l => l(e));
                            a.Za = !0;
                            return e
                        } catch (g) {
                            return a.j.F(g, {
                                va: "Error ending span",
                                extra: new Map(P(a))
                            }), e
                        }
                    },
                    Ve = function({
                        vc: {
                            performance: a,
                            name: b,
                            type: c,
                            attrs: d,
                            startTime: e,
                            timeout: f,
                            Fb: g
                        },
                        l: h,
                        B: k,
                        Ae: l,
                        j: n,
                        Df: m
                    }) {
                        d = d || new Map;
                        c && d.set("uop_attr_type", c);
                        d.set("sample_rate_override", 1);
                        d.set("is_uop", !0);
                        c = k === null || k === void 0 ? void 0 : k.wa();
                        if (k != null && !k.wa()) {
                            const w = k.Yb();
                            w instanceof Te && (k = w.T)
                        }
                        e = {
                            performance: a,
                            attrs: d,
                            startTime: e,
                            timeout: f
                        };
                        const p = k ? h.ua(b, k, e) : h.ta(b, e);
                        t(p instanceof Pe, "User operations can only be created by SpanImpls");
                        const q = [];
                        l.forEach(w => {
                            try {
                                const v = w.Rg();
                                q.push(v)
                            } catch (v) {
                                n.F(v)
                            }
                        });
                        h = new Map(q.flatMap(w => [...w.entries()]));
                        a = new Te(b, p, h, n, c, g, (a === null || a === void 0 ? 0 : a.Xi) ? new Map : void 0);
                        p.X = a;
                        a.La(() => {
                            Ue(p, p.attrs.get("uop_attr_type"))
                        });
                        a.Ha(h);
                        a.Ha(d);
                        m === null || m === void 0 || m(p);
                        return a
                    },
                    We = function(a) {
                        a = a === null || a === void 0 ? void 0 : a.Yb();
                        return a instanceof Te ? a : void 0
                    },
                    Oe = function(a, b) {
                        a.ec.delete(b);
                        if (!a.ended) {
                            if (a.eb && b.ga === "span" && !b.aborted) {
                                a.eb.set(`${b.name}_start`, b.startTime);
                                for (var c of b.Ma) a.eb.set(`${b.name}_${c.name}`, c.startTime);
                                b.endTime != null && a.eb.set(`${b.name}_end`,
                                    b.endTime)
                            }
                            c = b.status === "error";
                            b = b.attrs.get("timed_out") === !0;
                            if (a.ec.size === 0 || c || b) {
                                a.ended = !0;
                                const e = Xe(a, a.T);
                                if (e != null) {
                                    b && !a.T.name.endsWith("timed_out") && (a.T.setAttribute("timed_out", !0, !0), a.Fb || (a.T.name += ".timed_out"));
                                    var d = a.hc = a.T.end(c || a.Fb && b ? "error" : "ok", e.endTime);
                                    a.mb.forEach(f => f(d))
                                } else a.T.abort(), a.lb.forEach(f => f())
                            }
                        }
                    },
                    Xe = function(a, b) {
                        if (!b.aborted) {
                            var c = b.endTime != null ? b : void 0;
                            for (const d of b.Na) b = Xe(a, d), b != null && (c == null || b.endTime > c.endTime) && (c = b);
                            return c
                        }
                    },
                    Ue = function(a, b) {
                        if (typeof b === "string") {
                            for (const c of a.Ma) c.setAttribute("uop_attr_type", b, !0);
                            for (const c of a.Na) c.attrs.get("is_uop") !== !0 && (c.setAttribute("uop_attr_type", b, !0), Ue(c, b))
                        }
                    },
                    Ye = function(a) {
                        if (a) {
                            var b = a === null || a === void 0 ? void 0 : a.Yb();
                            return b instanceof Te ? b.pb : a.wa()
                        }
                    },
                    He = function(a) {
                        return {
                            frameCount: a.Ia.count,
                            mc: a.Ia.count > 0 ? a.Ia.uf : void 0,
                            kd: a.Ia.count > 0 ? a.Ia.Nf : void 0
                        }
                    },
                    Re = function(a) {
                        a.$b && a.Cc.cancelAnimationFrame(a.$b);
                        a.document.removeEventListener("visibilitychange",
                            a.vd);
                        a = He(a);
                        var b = Ze;
                        const c = a.frameCount * a.mc,
                            d = a.mc + 2 * a.kd;
                        c > 0 && (b.frameCount += a.frameCount, b.ud.add(d, c));
                        for (const e of b.od) e(a)
                    },
                    $e = async function(a, b, c, d) {
                        let e, f;
                        typeof d === "function" ? f = d : e = Me(d);
                        const g = a.ua(b, c, e);
                        return f(g).catch(h => {
                            g.setStatus("error");
                            throw h;
                        }).finally(() => g.end())
                    },
                    Fe = function(a, b) {
                        try {
                            return a.config.plugins.find(d => d.name === b)
                        } catch (d) {
                            var c;
                            a.j.F(d, {
                                extra: new Map([
                                    ["attrs", Object.fromEntries((c = a.config) === null || c === void 0 ? void 0 : c.da)]
                                ])
                            })
                        }
                    },
                    af = function(a) {
                        var b =
                            Date.now(),
                            c = performance.now();
                        Math.abs(a.Oc + (c - a.Ac) - b) < a.threshold || (a.Oc = b, a.Ac = c)
                    },
                    mf = function({
                        R: a,
                        gb: b,
                        jc: c,
                        userAgent: d,
                        D: {
                            j: e
                        }
                    }) {
                        let f, g = new Map;
                        switch (a.M) {
                            case "NOOP":
                                return new bf;
                            case "CONSOLE":
                                f = new cf;
                                break;
                            case "HTTP":
                                var h;
                                f = new df({
                                    url: a.endpoint,
                                    cc: (h = a.Pe) !== null && h !== void 0 ? h : 1
                                }, e, new ef, ff({
                                    url: a.endpoint,
                                    gg: c !== null && c !== void 0 ? c : 3E4,
                                    gb: b !== null && b !== void 0 ? b : .01
                                }));
                                var k, l, n, m;
                                g = new Map([
                                    ["telemetry_version", "v2"],
                                    ["app.component", a.app],
                                    ["service.name", a.app],
                                    ["app.release",
                                        (k = a.release) !== null && k !== void 0 ? k : ""
                                    ],
                                    ["app.source", (l = a.source) !== null && l !== void 0 ? l : "web"],
                                    ["app.flavor", (n = a.Ue) !== null && n !== void 0 ? n : ""],
                                    ["app.build.variant", (m = a.variant) !== null && m !== void 0 ? m : "baseline"],
                                    ["session_id", Gd()],
                                    ["x-canva-tenant", "canva-app"],
                                    ["device.platform", a.platform],
                                    ["device.id", a.deviceId]
                                ]);
                                d != null && (g.set("browser.name", d.je), g.set("browser.version_major", d.he), g.set("browser.version_minor", d.ie));
                                break;
                            default:
                                throw new F(a);
                        }
                        b = Be(Be(new gf, q => new hf(q)), q => {
                            var w, v;
                            return new Ce(q, {
                                Lb: (w = a.Lb) !== null && w !== void 0 ? w : 20,
                                Mb: (v = a.Mb) !== null && v !== void 0 ? v : 5E3
                            }, e)
                        }).build(f);
                        var p;
                        c = a.M === "HTTP" ? (p = a.kg) !== null && p !== void 0 ? p : .01 : 1;
                        return new jf(new kf({
                            Wa: b,
                            Hc: new lf(c, e),
                            da: g
                        }), e)
                    },
                    Ka = function(a, b) {
                        b.request.mode !== "navigate" && (b = b.clientId, a.Md.Fc(b), a.Ld.Fc(b))
                    },
                    Ma = function(a, b, c) {
                        if (b.request.mode !== "navigate") throw Error("Navigation event expected");
                        c.then(d => {
                            d.ok && (d = b.resultingClientId, a.Md.Ec(d), a.Ld.Ec(d))
                        }).catch(() => {})
                    },
                    nf = function(a, b) {
                        const c = a.Oa.get(b);
                        if (c != null) {
                            var d =
                                performance.now() - 5E3,
                                e = c.Gb.filter(f => f >= d);
                            c.Gb = e;
                            e.length >= 3 ? c.Xa = self.setTimeout(() => nf(a, b), 5E3) : (e = Math.max(...e), c.span.end(void 0, void 0, e), a.Oa.delete(b))
                        }
                    },
                    rf = function({
                        Ja: a
                    }) {
                        a = a.Qa("service_worker.network_behavior_tracer");
                        return {
                            xa: new of (new pf(a), new qf(a))
                        }
                    },
                    Ja = function(a) {
                        if (a.cd) return performance.now();
                        a.cd = !0;
                        return a.ac == null || Date.now() - a.ac < 500 ? 0 : performance.now()
                    },
                    uf = function({
                        location: a,
                        R: b,
                        gb: c,
                        jc: d,
                        userAgent: e,
                        D: {
                            j: f
                        }
                    }) {
                        a = a.origin.includes("localhost");
                        if (b == null || a) b = new sf({});
                        b = mf({
                            R: b,
                            gb: c,
                            jc: d,
                            userAgent: e,
                            D: {
                                j: f
                            }
                        });
                        ({
                            xa: c
                        } = rf({
                            Ja: b
                        }));
                        return {
                            Ja: b,
                            tb: new tf,
                            xa: c
                        }
                    },
                    ca = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
                        if (a == Array.prototype || a == Object.prototype) return a;
                        a[b] = c.value;
                        return a
                    },
                    ba = aa(this);
                da("Object.fromEntries", function(a) {
                    return a ? a : function(b) {
                        var c = {};
                        if (!(Symbol.iterator in b)) throw new TypeError("" + b + " is not iterable");
                        b = b[Symbol.iterator].call(b);
                        for (var d = b.next(); !d.done; d = b.next()) {
                            d = d.value;
                            if (Object(d) !== d) throw new TypeError("iterable for fromEntries should yield objects");
                            c[d[0]] = d[1]
                        }
                        return c
                    }
                });
                var Vd = __webpack_require__(336105).RewriteFrames;
                var ne = __webpack_require__(875604).version;
                var ee = __webpack_require__(681196).ExtraErrorData;
                var fe = __webpack_require__(802011).Dedupe;
                __webpack_require__.p = self.__canva_public_path__;
                var F = class extends Error {
                    constructor(a) {
                        super(`unhandled case: ${JSON.stringify(a)}`)
                    }
                };
                var vf = class {
                    constructor(a) {
                        this.type = a
                    }
                };
                var wf = class extends vf {
                        required(a, b) {
                            b = b[a];
                            if (b == null || typeof b !== this.type) throw new TypeError(`expected ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                            return b
                        }
                        optional(a, b) {
                            b = b[a];
                            if (b != null) {
                                if (typeof b !== this.type) throw new TypeError(`expected optional ${this.type} for property "${a}", found: ${JSON.stringify(b)}`);
                                return b
                            }
                        }
                    },
                    ka = new wf("object");
                var ja = {},
                    ia = {};
                typeof window !== "undefined" && window.location && na();
                var oa = class {
                        get ok() {
                            return !0
                        }
                        map(a) {
                            return new oa(a(this.value))
                        }
                        constructor(a) {
                            this.value = a
                        }
                    },
                    qa = class {
                        get ok() {
                            return !1
                        }
                        map() {
                            return this
                        }
                        constructor(a) {
                            this.error = a
                        }
                    },
                    ta = pa,
                    ua = ra;
                var ya = {
                        A: "string"
                    },
                    xf = {
                        A: "boolean",
                        defaultValue: !1,
                        Te: 1
                    },
                    yf = {
                        A: "number",
                        defaultValue: 0,
                        Te: 8
                    },
                    zf = {
                        A: "number",
                        defaultValue: 0
                    },
                    Af = {
                        A: "number",
                        defaultValue: 0
                    },
                    Bf = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(zf, c, b, d)
                    },
                    Cf = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(Af, c, b, d)
                    },
                    Q = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(yf, c, b)
                    },
                    R = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(zf, c, b)
                    },
                    Df = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(Af, c, b)
                    },
                    Ef = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: zf.A
                        }
                    },
                    S = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(ya, c, b, d)
                    },
                    T = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(ya, c, b)
                    },
                    Ff = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return {
                            tag: b,
                            K: 4,
                            G: c,
                            A: ya.A
                        }
                    },
                    U = a => {
                        const {
                            tag: b,
                            G: c,
                            W: d
                        } = u(a);
                        return wa(xf, c, b, d)
                    },
                    V = a => {
                        const {
                            tag: b,
                            G: c
                        } = u(a);
                        return xa(xf, c, b)
                    },
                    Gf = za(ya),
                    Hf = za("object");
                var If = J(() => ({
                    M: x(2, "CONSOLE")
                }));
                var Jf = L(() => [1, 2, 3], 1);
                var Kf = J(() => ({
                    name: S(1),
                    value: S(2)
                }));
                var Lf = J(() => ({
                    Ke: V(1)
                }));
                var Mf = J(() => ({
                    gh: V(1),
                    ci: R(2),
                    di: R(3),
                    ei: R(4)
                }));
                var Nf = J(() => ({
                    type: x(1, "STRING"),
                    value: S(1)
                }));
                var Of = J(() => ({
                    type: x(2, "BOOL"),
                    value: U(1)
                }));
                var Pf = J(() => ({
                    type: x(3, "INT"),
                    value: Bf(1)
                }));
                var Qf = J(() => {
                    const {
                        tag: a,
                        G: b,
                        W: c
                    } = u(1);
                    return {
                        type: x(4, "DOUBLE"),
                        value: wa(yf, b, a, c)
                    }
                });
                var Id = J(() => ({
                    type: x(5, "ARRAY"),
                    values: C(1, Rf)
                }));
                var Kd = J(() => ({
                    type: x(6, "KVLIST"),
                    values: C(1, Sf)
                }));
                var Rf = K(() => ({
                    type: [1, Nf, 2, Of, 3, Pf, 4, Qf, 5, Id, 6, Kd]
                }), () => ({}));
                var Sf = J(() => ({
                    name: S(1),
                    value: y(2, Rf)
                }));
                var Tf = J(() => ({
                    M: x(3, "SENTRY"),
                    dsn: T(28),
                    environment: T(30),
                    release: T(34),
                    sampleRate: Q(29),
                    tracesSampleRate: Q(31),
                    dh: V(32),
                    Lf: E(33, Jf),
                    tags: C(35, Kf),
                    flags: B(36, Lf),
                    bi: B(37, Mf),
                    extra: C(38, Sf),
                    zf: Q(39)
                }));
                var Uf = K(() => ({
                    M: [2, If, 3, Tf]
                }), () => ({}));
                var Vf = () => ({
                    nh: V(5),
                    Mb: R(6),
                    Lb: R(7),
                    Pe: R(8),
                    kh: V(9),
                    Ei: Q(10),
                    kg: Q(11),
                    source: T(13),
                    ha: T(14),
                    ja: T(4),
                    Gf: T(17),
                    deviceId: T(18),
                    Ag: T(15),
                    Ah: V(16),
                    rh: V(19),
                    bh: V(20),
                    sh: V(21),
                    qh: V(22),
                    xg: Ff(23)
                });
                var Wf = J(() => ({ ...Vf(),
                    M: x(1, "HTTP"),
                    app: S(27),
                    endpoint: S(28),
                    release: T(29),
                    Ue: T(31),
                    jh: V(32),
                    mh: V(33),
                    platform: T(35),
                    variant: T(36)
                }));
                var Xf = J(() => ({ ...Vf(),
                    M: x(2, "CONSOLE"),
                    app: S(27)
                }));
                var sf = J(() => ({ ...Vf(),
                    M: x(3, "NOOP")
                }));
                var Yf = K(() => ({
                    M: [1, Wf, 2, Xf, 3, sf]
                }), Vf);
                var td = class {
                    constructor(a, b, c, d) {
                        this.requestHandler = a;
                        this.tb = b;
                        this.xa = c;
                        this.l = d
                    }
                };
                var Ua = class {
                    constructor({
                        fb: a
                    }) {
                        this.fb = a
                    }
                };
                var N = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.sampleRate = b;
                            this.sampleRate = Qa(b)
                        }
                    },
                    he = class {
                        setupOnce(a, b) {
                            a((c, d) => {
                                const e = b().getIntegration(he);
                                if (!e) return c;
                                if (!(Math.random() < Ra(e, d === null || d === void 0 ? void 0 : d.originalException, c.level))) return null;
                                d = {
                                    sampleRate: Ra(this, d === null || d === void 0 ? void 0 : d.originalException)
                                };
                                c.extra = c.extra != null ? { ...c.extra,
                                    ...d
                                } : d;
                                c.tags = c.tags != null ? { ...c.tags,
                                    ...d
                                } : d;
                                return c
                            })
                        }
                        constructor(a, b) {
                            this.$c = a;
                            this.Zc = b;
                            this.name = he.id;
                            this.$c = Qa(a);
                            this.Zc =
                                Qa(b)
                        }
                    };
                he.id = "Sampling";
                var Va = class {
                    constructor(a) {
                        this.j = a
                    }
                };
                var rd = class {
                    constructor(a, b, c, d, e, f) {
                        this.Gc = a;
                        this.C = b;
                        this.j = c;
                        this.Me = d;
                        this.yf = e;
                        this.Uf = f
                    }
                };
                var Xa = class {
                        Nd(a) {
                            if (a.status !== 401) return a
                        }
                    },
                    Ya = class {
                        Nd(a) {
                            return a
                        }
                    };
                var Zf = class {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new Zf(a)
                        }
                        async update(a) {
                            a = this.cursor.update(a);
                            return this.J(a)
                        }
                        async delete() {
                            const a = this.cursor.delete();
                            return this.J(a)
                        }
                        constructor(a) {
                            this.cursor = a;
                            this.J = bb
                        }
                    },
                    $f = class extends Zf {
                        async
                        continue (a) {
                            a = await cb(this, a);
                            if (a != null) return new $f(a)
                        }
                        get value() {
                            return this.cursor.value
                        }
                        constructor(a) {
                            super(a);
                            this.cursor = a
                        }
                    };
                var ag = class {
                    async get(a) {
                        a = this.index.get(a);
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.index.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.index.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.index.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.index.openCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new $f(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.index.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Zf(a) : void 0
                    }
                    constructor(a) {
                        this.index = a;
                        this.J = bb
                    }
                };
                var bg = class {
                    index(a) {
                        return new ag(this.store.index(a))
                    }
                    async put(a, b) {
                        a = this.store.put(a, b);
                        return this.J(a)
                    }
                    async get(a) {
                        a = this.store.get(a);
                        return this.J(a)
                    }
                    async delete(a) {
                        a = this.store.delete(a);
                        return this.J(a)
                    }
                    async clear() {
                        const a = this.store.clear();
                        return this.J(a)
                    }
                    async getAll(a, b) {
                        a = this.store.getAll(a, b);
                        return this.J(a)
                    }
                    async getAllKeys(a, b) {
                        a = this.store.getAllKeys(a, b);
                        return this.J(a)
                    }
                    async count(a) {
                        a = this.store.count(a);
                        return this.J(a)
                    }
                    async openCursor(a, b) {
                        a = this.store.openCursor(a,
                            b);
                        a = await this.J(a);
                        return a != null ? new $f(a) : void 0
                    }
                    async openKeyCursor(a, b) {
                        a = this.store.openKeyCursor(a, b);
                        a = await this.J(a);
                        return a != null ? new Zf(a) : void 0
                    }
                    createIndex(a, b, c) {
                        return this.store.createIndex(a, b, c)
                    }
                    deleteIndex(a) {
                        return this.store.deleteIndex(a)
                    }
                    constructor(a) {
                        this.store = a;
                        this.J = bb
                    }
                };
                var cg = class {
                        objectStore(a) {
                            a = this.ca.objectStore(a);
                            return new bg(a)
                        }
                        abort() {
                            this.ca.abort()
                        }
                        commit() {
                            this.ca.commit()
                        }
                        get error() {
                            return this.ca.error
                        }
                        constructor(a) {
                            this.ca = a;
                            this.rg = eb(this)
                        }
                    },
                    db = class extends Error {
                        constructor() {
                            super("Transaction was aborted")
                        }
                    };
                var fb = class {
                    transaction(a, b) {
                        return new cg(this.db.transaction(a, b))
                    }
                    createObjectStore(a, b) {
                        return new bg(this.db.createObjectStore(a, b))
                    }
                    get objectStoreNames() {
                        return this.db.objectStoreNames
                    }
                    close() {
                        this.db.close()
                    }
                    addEventListener(a, b, c) {
                        this.db.addEventListener(a, b, c)
                    }
                    removeEventListener(a, b, c) {
                        this.db.removeEventListener(a, b, c)
                    }
                    constructor(a) {
                        this.db = a
                    }
                };
                var hb = class extends Error {
                        constructor(a) {
                            super("Quota exceeded");
                            this.cause = a
                        }
                    },
                    ib, sb = class extends Error {
                        constructor() {
                            super("Consent required")
                        }
                    },
                    kb = class extends N {
                        constructor(a) {
                            super("IndexedDb Database Error", 0);
                            this.cause = a
                        }
                    },
                    lb, ub = class extends Error {
                        constructor() {
                            super("Maximum number of rows exceeded for put request")
                        }
                    },
                    tb = class extends Error {
                        constructor(a) {
                            super("Failed to deserialize stored data");
                            this.cause = a
                        }
                    };
                var nb = class {
                    get lf() {
                        return this.connection != null
                    }
                    transaction(a, b) {
                        if (this.connection == null) throw Error("Attempted to open a transaction on a closed connection");
                        self.clearTimeout(this.Ab);
                        this.Ab = void 0;
                        const c = this.connection;
                        try {
                            this.uc++;
                            const d = c.transaction(a, b),
                                e = d.rg;
                            e.catch(() => this.dispose()).finally(() => {
                                this.uc--;
                                this.uc <= 0 && (this.Ab = self.setTimeout(() => {
                                    this.dispose()
                                }, 2500))
                            });
                            return {
                                transaction: d,
                                Rd: e
                            }
                        } catch (d) {
                            throw this.dispose(), d;
                        }
                    }
                    dispose() {
                        var a;
                        (a = this.connection) === null || a ===
                            void 0 || a.close();
                        this.connection = void 0;
                        self.clearTimeout(this.Ab)
                    }
                    constructor(a) {
                        this.connection = a;
                        this.uc = 0
                    }
                };
                var xb = class {
                    constructor(a, b) {
                        this.gf = a;
                        this.l = b
                    }
                };
                var wb = class {
                    constructor(a, b) {
                        this.ld = a;
                        this.l = b
                    }
                };
                var vb = class {
                    async put(a, b, c) {
                        await Ab(this);
                        const d = Cb(a, this.Wb.za(b));
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async e => {
                                const {
                                    Vi: f
                                } = c !== null && c !== void 0 ? c : {};
                                if (f != null) {
                                    r(f > 0);
                                    const [g, h] = await Promise.all([e.get(a).then(k => !!k), e.count()]);
                                    if (h + (g ? 0 : 1) > f) throw new ub;
                                }
                                await e.put(d)
                            },
                            methodName: "put"
                        })
                    }
                    async get(a) {
                        const b = await O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async c => c.get(a),
                            methodName: "get"
                        });
                        return b != null ? this.S(Bb(b)) : void 0
                    }
                    async delete(a) {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async b => {
                                Array.isArray(a) ? await Promise.all(a.map(c => b.delete(c))) : await b.delete(a)
                            },
                            methodName: "delete"
                        })
                    }
                    async count() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async a => a.count(),
                            methodName: "count"
                        })
                    }
                    async update(a, b) {
                        await Ab(this);
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async c => {
                                var d = await c.get(a);
                                d = d ? {
                                    value: this.S(Bb(d))
                                } : void 0;
                                d = b(d);
                                d != null ? await c.put(Cb(a, this.Wb.za(d.value))) : await c.delete(a)
                            },
                            methodName: "update"
                        })
                    }
                    async getAll(a, b) {
                        const c = await O(this.oa, {
                                H: this.H,
                                mode: "readonly",
                                Y: async f => {
                                    const g = typeof b === "string" ? f.index(b) : f;
                                    try {
                                        return (await g.getAll(a)).map(h => ta(h))
                                    } catch (h) {
                                        return f = await g.getAllKeys(a), Promise.all(f.map(async k => {
                                            try {
                                                const l = await g.get(k);
                                                return ta(l)
                                            } catch (l) {
                                                return ua({
                                                    key: String(k),
                                                    error: l instanceof Error ? l : Error(String(l))
                                                })
                                            }
                                        }))
                                    }
                                },
                                methodName: "getAll"
                            }),
                            d = [],
                            e = [];
                        for (const f of c)
                            if (f.ok) try {
                                d.push({
                                    key: Eb(f.value),
                                    Bd: this.S(Bb(f.value))
                                })
                            } catch (g) {
                                e.push({
                                    key: Eb(f.value),
                                    error: g instanceof Error ? g : Error(String(g))
                                })
                            } else e.push({
                                key: f.error.key,
                                error: f.error.error
                            });
                        return {
                            items: d,
                            errors: e
                        }
                    }
                    async getAllKeys() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readonly",
                            Y: async a => (await a.getAllKeys()).map(b => String(b)) || [],
                            methodName: "getAllKeys"
                        })
                    }
                    async clear() {
                        return O(this.oa, {
                            H: this.H,
                            mode: "readwrite",
                            Y: async a => a.clear(),
                            methodName: "clear"
                        })
                    }
                    close() {}
                    S(a) {
                        try {
                            return this.Wb.S(a)
                        } catch (b) {
                            throw new tb(b instanceof Error ? b : Error(String(b)));
                        }
                    }
                    constructor(a, b, c, d) {
                        this.H = a;
                        this.Wb = b;
                        this.oa = c;
                        this.Cb = d
                    }
                };
                var Ib = class {
                    async fetch(a, {
                        B: b
                    }, c) {
                        return this.l.ob("fetch_from_network", b, async () => {
                            if (this.C.Sa()) throw Error("Is force offline");
                            if (a.request.mode === "navigate") {
                                var d = await a.preloadResponse;
                                if (d != null && d.status !== 401) return d;
                                if (this.Ed != null) return d = await Hb(this.Ed, a.request), this.wc(d, c)
                            }
                            return this.wc(a.request, { ...c,
                                redirect: "follow"
                            })
                        })
                    }
                    constructor(a, b, c, d) {
                        this.C = a;
                        this.Ed = b;
                        this.l = c;
                        this.wc = d
                    }
                };
                var Jb = class {
                    constructor(a) {
                        this.options = {
                            ag: self.navigator.userAgent,
                            targetOrigin: self.location.origin
                        };
                        this.Mf = a
                    }
                };
                var dg = L(() => [1, 2, 3, {
                    Ya: !0
                }]);
                var eg = J(() => ({
                    status: D(1, dg)
                }));
                var Sb = class {
                    async qc(a) {
                        a = await this.fa.get(a);
                        return a === null || a === void 0 ? void 0 : a.status
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("private_data_persist_consent", eg, void 0, [], a)
                    }
                };
                var fg = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var Rb = class {
                    async put(a, {
                        ha: b,
                        ja: c
                    }) {
                        await this.fa.put(a, new fg({
                            ha: b,
                            ja: c
                        }))
                    }
                    async getAll() {
                        const {
                            items: a,
                            errors: b
                        } = await this.fa.getAll();
                        if (b.length > 0) throw b[0].error;
                        return a.map(c => ({
                            Bi: c.key,
                            Bd: c.Bd
                        }))
                    }
                    async delete(a) {
                        await this.fa.delete(a)
                    }
                    constructor(a, b = {
                        Ga: (...c) => zb(...c)
                    }) {
                        this.fa = b.Ga("storage_layer_name", fg, void 0, [], a)
                    }
                };
                var gg = {
                        editor_page_bootstraps: !0,
                        homepage_bootstraps: !1,
                        lesson_config: !1,
                        offline_designs: !0,
                        offline_document_response: !0,
                        document_resources: !0
                    },
                    hg = {
                        editor_page_bootstraps: [],
                        homepage_bootstraps: [],
                        lesson_config: [],
                        offline_designs: [],
                        offline_document_response: [],
                        document_resources: [{
                            name: "documents",
                            Ib: "E",
                            multiEntry: !0
                        }],
                        storage_layer_name: [],
                        private_data_persist_consent: [],
                        active_user_brand_hint_for_service_worker_to_serve_pages: [],
                        offline_fallback_bootstrap: [],
                        config: [],
                        asset_metadata: [],
                        manifests: [],
                        leadership_lock: [],
                        index_example: [{
                            name: "indexName",
                            Ib: "values",
                            multiEntry: !0
                        }],
                        design_asset_references: [{
                            name: "referrer_ids_idx",
                            Ib: "A",
                            multiEntry: !0
                        }],
                        page_asset_references: [{
                            name: "referrer_ids_idx",
                            Ib: "A",
                            multiEntry: !0
                        }]
                    };
                var Tb = class {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = gg, h = hg) {
                        this.Qc = a;
                        this.Tf = b;
                        this.Cb = c;
                        this.j = d;
                        this.l = e;
                        this.sd = f;
                        this.we = g;
                        this.md = h
                    }
                };
                var Jc = class extends Tb {
                    constructor(a, b, c, d, e, f = {
                        Ga: (...k) => zb(...k)
                    }, g = gg, h = hg) {
                        super(a, b, c, d, e, f, g, h);
                        this.Qc = a
                    }
                };
                var Wb;
                var $b = class {
                    get Dc() {
                        return [...this.Sc]
                    }
                    constructor({
                        Dc: a,
                        Ra: b,
                        Kb: c
                    }) {
                        this.Sc = new Set(a.filter(d => !!d));
                        this.Kb = c || void 0;
                        this.Ra = b
                    }
                };
                var dc = class {
                        async oc() {
                            this.ka == null && (this.ka = self.caches.open(this.cacheName), self.setTimeout(() => {
                                this.ka = void 0
                            }, 5E3));
                            return this.ka
                        }
                        constructor(a, b) {
                            this.l = b;
                            this.options = void 0;
                            this.cacheName = ig[1];
                            this.db = Ob(a, jg[1], $b)
                        }
                    },
                    jg = {
                        [0]: "design_asset_references",
                        [1]: "page_asset_references"
                    },
                    ig = {
                        [0]: "media",
                        [1]: "assets-2"
                    };
                var ec = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.re !== 1 ? a.hostname.startsWith("chunk-composing.") && a.searchParams.get("preserve-source-map-comments") !== "true" : !1
                    }
                    async handle(a, b) {
                        return this.I.fetch(a, {
                            B: b
                        }, {
                            mode: "cors",
                            credentials: "omit"
                        }).then(c => {
                            a.waitUntil(cc(this, c, b));
                            return c
                        })
                    }
                    constructor(a, b, c, d, e, f, g) {
                        this.C = a;
                        this.N = b;
                        this.I = c;
                        this.qe = d;
                        this.te = e;
                        this.j = f;
                        this.l = g;
                        this.name = "chunk-composing"
                    }
                };
                var pd = class {
                    Ca(a) {
                        return a.url.pathname === "/__sw_debug_info"
                    }
                    async handle() {
                        return new Response(this.cb.We(), {
                            headers: {
                                "content-type": "text/plain"
                            }
                        })
                    }
                    constructor(a) {
                        this.cb = a;
                        this.name = "debug_info"
                    }
                };
                var kg = /[^a-zA-Z0-9]/g,
                    nc = class {
                        async match(a, {
                            B: b
                        } = {}) {
                            const c = async d => {
                                try {
                                    const e = await (await this.oc()).match(this.Pc(a));
                                    d === null || d === void 0 || d.Aa(`${this.Wc}.match.${e!=null?"cache_hit":"cache_miss"}`);
                                    d === null || d === void 0 || d.setAttribute("cache_hit", e != null);
                                    return e
                                } catch (e) {
                                    this.ka = null, d === null || d === void 0 || d.setStatus("error"), this.j.error(new N(e instanceof Error ? e.message : String(e), .01))
                                }
                            };
                            return this.l != null && b != null ? this.l.ob(`${this.Wc}.match`, b, c) : c()
                        }
                        async oc() {
                            this.ka == null &&
                                (this.ka = caches.open(this.cacheName), setTimeout(() => {
                                    this.ka = null
                                }, 1E3));
                            return this.ka
                        }
                        constructor({
                            cacheName: a,
                            Pc: b = e => e
                        }, c, d) {
                            this.j = c;
                            this.l = d;
                            this.ka = null;
                            this.cacheName = a;
                            this.Wc = `browser_cache_storage.${a.replace(kg,"_")}`;
                            this.Pc = b
                        }
                    };
                var lg = new Set("audio-private audio-public audio-upload blobs document-export font-private font-public media media-private media-public media-transformation mockup-assets print-product-assets template upload video-placeholders video-private-assets video-public video-upload".split(" ")),
                    oc = class {
                        Ca({
                            url: a
                        }) {
                            if (this.C.options.ad === 1) return !1;
                            if (a.hostname === "localhost" && !/\.js$|\.css$/.test(a.pathname)) return !0;
                            [a] = a.hostname.split(".");
                            return lg.has(a)
                        }
                        async handle(a, b) {
                            if (this.C.options.ad === 2) try {
                                return await this.I.fetch(a, {
                                    B: b
                                })
                            } catch (d) {
                                a = await hc(this, a, b);
                                if (a != null) return a;
                                throw d;
                            }
                            const c = await hc(this, a, b);
                            return c !== null && c !== void 0 ? c : this.I.fetch(a, {
                                B: b
                            })
                        }
                        constructor(a, b, c, d) {
                            this.C = a;
                            this.vf = b;
                            this.Tb = c;
                            this.I = d;
                            this.name = "design_asset"
                        }
                    };
                var jc = /^bytes=(\d+)?-(\d+)?$/;
                var kc = ["X-Shaka-From-Cache", "true"],
                    lc = class {
                        constructor({
                            j: a
                        }) {
                            this.j = a
                        }
                    };
                var qc = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.xd !== 1 ? a.hostname === "localhost" && /\.js$|\.css$/.test(a.pathname) && !a.pathname.includes("_web_worker") ? !0 : a.href.startsWith(this.options.N) : !1
                    }
                    async handle(a, b) {
                        if (this.C.options.xd === 2) try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (d) {
                            a = await this.Tc.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw d;
                        }
                        const c = await this.Tc.match(a.request.url, {
                            B: b
                        });
                        return c != null ? c : this.I.fetch(a, {
                            B: b
                        })
                    }
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.Tc =
                            d;
                        this.name = "page_asset"
                    }
                };
                var mg = L(() => [1, 2], 1);
                var Pb = J(() => ({
                    app: S(1),
                    url: S(2),
                    title: S(3),
                    locale: S(4),
                    direction: D(5, mg),
                    timestamp: Cf(7),
                    Ba: S(8),
                    Nc: S(9),
                    nb: S(10),
                    kc: T(11),
                    ri: Gf(12)
                }));
                var sc = class {
                    async ib(a) {
                        a = await this.fa.get(a.key);
                        const b = Date.now() / 1E3;
                        if (this.options.rb || a && a.timestamp + 1209600 > b) return a
                    }
                    constructor(a, b) {
                        this.options = a;
                        this.fa = b
                    }
                };
                var yc = class {
                    constructor(a) {
                        this.path = a;
                        this.Va = new Map
                    }
                };
                var Kc = class {
                    normalizeUrl({
                        url: a,
                        app: b
                    }) {
                        switch (b) {
                            case "home":
                            case "offline_fallback":
                                return {
                                    key: a.href
                                };
                            case "editor":
                                b = ha(Cc(a.href), `Attempted to load editor bootstrap with invalid url ${a}`);
                                a = location.origin;
                                b = {
                                    id: b.id
                                };
                                var c = zc(["design", b.id]);
                                b = Bc(Ac(c, b.Zi));
                                return {
                                    key: a + b
                                };
                            default:
                                throw new F(b);
                        }
                    }
                };
                var W = J(() => ({
                    filename: S(1),
                    Oh: V(4),
                    locale: T(5),
                    Jd: T(6)
                }));
                var ng = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var og = J(() => ({
                    kf: y(1, ng),
                    $d: y(2, ng)
                }));
                var pg = J(() => ({
                    webview: y(1, og)
                }));
                var qg = J(() => ({
                    Ri: S(1)
                }));
                var rg = J(() => ({
                    $i: Df(1)
                }));
                var sg = J(() => ({
                    ab: Ff(1),
                    Fa: Ff(2),
                    Pi: Gf(3)
                }));
                var tg = J(() => ({
                    rel: S(1),
                    href: S(2),
                    Jd: T(6)
                }));
                var ug = J(() => ({
                    ab: C(1, W),
                    Fa: C(2, W)
                }));
                var vg = J(() => ({
                    id: S(1),
                    Og: C(2, W),
                    Rh: C(3, W),
                    Ie: C(4, W),
                    Th: Hf(5, ug),
                    Wh: y(6, ug),
                    Hi: y(7, ug),
                    Qi: Ff(8),
                    Sh: Bf(9),
                    Di: V(10)
                }));
                var wg = J(() => ({
                    app: S(1),
                    Uc: y(9, ng),
                    Fd: y(8, pg),
                    Ie: C(10, W),
                    Ci: C(13, W),
                    fonts: B(14, qg),
                    build: y(3, rg),
                    nf: Hf(4, sg),
                    Bc: T(6),
                    oi: T(15),
                    pi: T(16),
                    viewport: T(7),
                    links: C(11, tg),
                    uh: T(18),
                    Gg: Hf(17, vg),
                    sj: Hf(25, vg)
                }));
                var Lc = J(() => ({
                    manifest: y(1, wg),
                    commit: S(5),
                    variant: T(4),
                    timestamp: Cf(2),
                    locale: S(3),
                    direction: D(6, mg),
                    Kc: S(7)
                }));
                var Nc = class {
                    constructor(a, b) {
                        this.fa = a;
                        this.l = b
                    }
                };
                var Ic = J(() => ({
                    ha: S(1),
                    ja: S(2)
                }));
                var xg = L(() => [0, "CLIENT_FULL", 1, "CLIENT_HYDRATE", 2, "SERVER_FULL"]);
                var yg = L(() => [1, 3, 2], 1);
                var zg = J(() => ({
                    action: x(1, "REGISTER"),
                    Ii: S(1),
                    scope: S(2)
                }));
                var Ag = J(() => ({
                    action: x(2, "UNREGISTER")
                }));
                var Bg = J(() => ({
                    action: x(3, "UPDATE")
                }));
                var Cg = J(() => ({
                    action: x(4, "RETAIN")
                }));
                var Dg = K(() => ({
                    action: [1, zg, 2, Ag, 3, Bg, 4, Cg]
                }), () => ({}));
                var Eg = J(() => ({
                    uj: S(1),
                    tj: R(2)
                }));
                var Fg = L(() => [1, 2]);
                var Gg = L(() => [1, 2, 3, 4]);
                var Hg = J(() => ({
                    category: D(1, Gg),
                    name: S(2)
                }));
                var Ig = J(() => ({
                    wg: U(15),
                    Ni: U(12),
                    cj: U(13),
                    Fg: U(1),
                    Yg: U(2),
                    ah: U(7),
                    fh: U(14),
                    Kg: S(3),
                    Xh: S(9),
                    si: S(10),
                    zi: C(5, Hg),
                    ki: T(6),
                    Lh: Ef(16),
                    Jg: Ef(17),
                    Xg: V(18),
                    Fh: V(19),
                    Ig: Df(22),
                    ph: V(23)
                }));
                var Jg = J(() => ({
                    traceId: S(1),
                    spanId: S(2),
                    Lc: Bf(3)
                }));
                var Kg = J(() => ({
                    href: S(1),
                    Jd: T(3)
                }));
                var Lg = () => ({
                    Fi: U(12),
                    hh: U(14),
                    commit: S(5),
                    timestamp: Df(11),
                    j: y(6, Uf),
                    Ai: D(7, xg),
                    O: D(9, yg),
                    Li: B(15, Dg),
                    rj: B(4, Eg),
                    gi: T(13),
                    nd: E(17, Fg),
                    Yi: B(18, Ig),
                    Kd: B(20, Yf),
                    ji: B(24, Jg),
                    ni: C(21, Kg),
                    dj: Ff(22),
                    ne: T(34)
                });
                var Mg = J(() => ({
                    Wi: S(1),
                    zh: Cf(2)
                }));
                var Ng = J(() => ({
                    Zd: T(1),
                    Bg: T(9),
                    be: T(2),
                    ce: T(3),
                    Wd: T(14),
                    ng: T(12),
                    ge: T(4),
                    pf: T(10),
                    app: T(11),
                    ke: T(5),
                    le: T(6),
                    Ki: T(7),
                    Ng: Hf(8, Mg)
                }));
                var Og = J(() => ({
                    Zd: T(1),
                    be: T(2),
                    ce: T(3),
                    Wd: T(10),
                    ng: T(9),
                    ge: T(4),
                    pf: T(5),
                    app: T(6),
                    ke: T(7),
                    le: T(8)
                }));
                var Pg = J(() => ({
                    url: S(1),
                    context: B(2, Og),
                    Yh: R(3)
                }));
                var Qg = J(() => ({
                    Oe: S(27)
                }));
                var Rg = J(() => ({
                    Oe: S(27),
                    Lg: T(28),
                    locale: S(29),
                    Hg: R(30),
                    ja: T(31),
                    Gf: T(37),
                    ha: T(34),
                    xh: T(32),
                    Ch: T(33),
                    deviceId: T(35)
                }));
                var Sg = () => ({
                    gj: B(3, Qg),
                    wh: y(4, Rg),
                    yh: Gf(5),
                    appName: T(9),
                    Mh: Ef(16),
                    Ui: Ef(17),
                    $g: U(18),
                    Vg: V(19)
                });
                var Tg = J(() => ({ ...Sg(),
                    M: x(2, "CONSOLE")
                }));
                var Ug = J(() => ({ ...Sg(),
                    M: x(8, "NOOP")
                }));
                var Vg = J(() => ({
                    containerId: S(1)
                }));
                var Wg = J(() => ({
                    ug: S(1),
                    projectId: S(2)
                }));
                var Xg = J(() => ({
                    ae: S(1)
                }));
                var Yg = J(() => ({}));
                var Zg = J(() => ({
                    Ih: B(2, Vg),
                    hi: B(4, Wg),
                    Cg: B(6, Xg),
                    Hh: B(7, Yg)
                }));
                var $g = J(() => ({ ...Sg(),
                    M: x(14, "PRODUCT_ANALYTICS"),
                    plugins: B(32, Zg),
                    pj: R(36),
                    oh: U(37),
                    qj: U(40),
                    eh: U(45),
                    Zg: U(47)
                }));
                var ah = K(() => ({
                    M: [2, Tg, 8, Ug, 14, $g]
                }), Sg);
                var bh = J(() => ({
                    M: x(1, "NONE")
                }));
                var ch = J(() => ({
                    M: x(2, "FULLSTORY"),
                    ii: S(28)
                }));
                var dh = K(() => ({
                    M: [1, bh, 2, ch]
                }), () => ({}));
                var X = L(() => [1, 2, 3, 4]);
                var eh = J(() => ({
                    Tg: E(1, X),
                    xi: E(2, X),
                    $h: E(4, X),
                    Zh: E(8, X),
                    fj: E(5, X),
                    Gi: E(6, X),
                    Sg: E(7, X),
                    Qg: E(10, X),
                    Mi: E(9, X),
                    hj: E(11, X),
                    Ug: E(12, X),
                    Eg: E(13, X),
                    Mg: E(14, X),
                    vg: E(15, X)
                }));
                var fh = J(() => ({
                    mi: y(1, eh),
                    wi: U(2)
                }));
                var gh = J(() => ({
                    ha: T(1),
                    ae: S(2),
                    bj: U(3),
                    ej: B(4, fh)
                }));
                var hh = J(() => ({
                    url: S(1),
                    zg: T(2),
                    aj: U(3),
                    mj: T(4)
                }));
                var ih = J(() => ({ ...Lg(),
                    mode: x(2, "REAL"),
                    Kh: y(27, Ng),
                    oj: y(30, Pg),
                    yg: y(28, ah),
                    Nh: B(29, dh),
                    Dg: B(32, gh),
                    Ji: B(31, hh)
                }));
                var jh = J(() => ({ ...Lg(),
                    mode: x(3, "FAKE"),
                    Si: Bf(27),
                    hostname: T(28),
                    nj: R(29)
                }));
                var Gc = K(() => ({
                    mode: [2, ih, 3, jh]
                }), Lg);
                var Mc = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.fe = b;
                        this.Jf = c;
                        this.rf = d
                    }
                };
                var kh = ["iOi0iWfdfKTOZE7Vp8+d8Cvsk9vE8DL4J4a5fgzlsUk="],
                    lh = class {
                        createPolicy({
                            page: a,
                            nonce: b
                        }) {
                            return [
                                ["frame-ancestors", "'none'"],
                                ["base-uri", "'self'"],
                                ["object-src", "'none'"],
                                ["script-src", `'report-sample' 'strict-dynamic' 'unsafe-eval' 'nonce-${b}' ${kh.map(c=>`'sha256-${c}'`).join(" ")}`],
                                ["report-uri", `https://csp.canva.com/_cspreport?app=sw_${a}&ro=true`]
                            ].map(([c, d]) => `${c} ${d}`).join("; ")
                        }
                    };
                var Wc = class {
                    constructor(a) {
                        this.config = a
                    }
                };
                var mh = class {
                    constructor() {
                        this.crypto = self.crypto
                    }
                };
                var Vc = class {
                    constructor(a) {
                        this.bd = a
                    }
                };
                var md = class {
                    constructor(a) {
                        var b = jd();
                        this.rules = a;
                        this.fallback = b
                    }
                };
                var Xc = class {
                    constructor(a, b, c, d, e, f) {
                        var g = new mh,
                            h = new lh;
                        this.config = a;
                        this.Wf = b;
                        this.j = c;
                        this.yd = d;
                        this.Bf = e;
                        this.Af = g;
                        this.ye = h;
                        this.l = f
                    }
                };
                var Zc = class {
                    Ca({
                        request: a
                    }) {
                        return this.C.options.Qb !== 1 ? a.mode === "navigate" : !1
                    }
                    async handle(a, b) {
                        let c;
                        try {
                            if (c = await this.I.fetch(a, {
                                    B: b
                                }), (c === null || c === void 0 ? void 0 : c.status) !== 0 || (c === null || c === void 0 ? 0 : c.type.includes("opaque"))) return c
                        } catch (e) {}
                        var d = this.C;
                        return d.options.Qb !== 5 && d.options.Qb !== 1 && (d = this.options.ra, a = Uc(this.Hf, new URL(a.request.url), {
                            B: b
                        }), a = d != null && d > 500 ? await Promise.race([a, $a(d)]) : await a, a === null || a === void 0 ? 0 : a.ok) ? a : c !== null && c !== void 0 ? c : Response.error()
                    }
                    constructor(a,
                        b, c, d) {
                        this.options = a;
                        this.C = b;
                        this.I = c;
                        this.Hf = d;
                        this.name = "page"
                    }
                };
                var ed = class {
                    toArray() {
                        return dd(this, this.root)
                    }
                    constructor() {
                        this.root = {
                            children: new Map,
                            config: void 0
                        }
                    }
                };
                var fd = "/ /folder /folder/* /folder/*/designs /folder/*/designs/* /folder/*/images /folder/*/images/* /folder/*/videos /folder/*/videos/* /folder/*/templates /folder/*/templates/* /your-projects /your-projects/videos /your-projects/videos/* /projects /projects/videos /projects/videos/* /library/* /library/*/videos /library/*/videos/* /dream-lab /assistant /assistant/* /ai /ai/* /ai/code /ai/code/* /s/designs /s/templates /offline-designs /shared-with-you /rewards /planner /design-reviews /classwork /menu /creators/apply /creators/template /creators/template/dashboard /creators/template/inspiration /creators/element /creators/my-items /creators/resources /creators/resources/videos /creators/resources/videos/* /creators/verify/* /creators/inspiration /creators/inspiration/campaigns/* /creators/welcome /creator-hub /contributors/upload /earnings /teams /teams/apps /teams/brand-control /teams/create /teams/designs /teams/folders /teams/groups /teams/groups/* /teams/layouts /teams/members /teams/settings /teams/timeline /groups/* /groups/*/designs /groups/*/folders /groups/*/members /pro-features /mockups /mockups/collection/* /mockups/mockup/* /smartmockups /smartmockups/collection/* /smartmockups/mockup/* /starred /team-stream /design-stream /trash /_design-spec-selector /your-apps /your-apps/* /portfolio /brand /brand/* /brand/brand-templates /brand/brand-templates/* /search/templates /search/designs /search /templates".split(" "),
                    gd = ["/settings", "/settings/*"];
                var od = class {
                    Ca({
                        url: a
                    }) {
                        return a.pathname === "/popout"
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            return new Response(null, {
                                headers: {
                                    "content-type": "text/plain",
                                    "content-security-policy": "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; script-src 'none'; report-uri https://csp.canva.com/_cspreport?app=popout;"
                                }
                            })
                        }
                    }
                    constructor(a) {
                        this.I = a;
                        this.name = "popout"
                    }
                };
                var nh = ["/_ajax/", "/local-intercept/", "/_online"],
                    oh = new Set(["GET"]),
                    nd = class {
                        resolve(a) {
                            if (oh.has(a.method)) {
                                var b = new URL(a.url);
                                if (!nh.some(c => b.pathname.startsWith(c)) && (b.hostname !== "localhost" || b.origin === this.options.$f)) return this.Vf.find(c => c.Ca({
                                    request: a,
                                    url: b
                                }))
                            }
                        }
                        constructor(a) {
                            this.options = {
                                $f: self.location.origin
                            };
                            this.Vf = a
                        }
                    };
                var kd = class {
                    Ca({
                        url: a
                    }) {
                        return this.C.options.pg !== 1 ? a.pathname.startsWith("/_web_worker/") : !1
                    }
                    async handle(a, b) {
                        try {
                            return await this.I.fetch(a, {
                                B: b
                            })
                        } catch (c) {
                            a = await this.og.match(a.request.url, {
                                B: b
                            });
                            if (a != null) return a;
                            throw c;
                        }
                    }
                    constructor(a, b, c) {
                        this.C = a;
                        this.I = b;
                        this.og = c;
                        this.name = "web_worker"
                    }
                };
                var ph = () => ({
                    requestId: S(1)
                });
                var qh = J(() => ({ ...ph(),
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    Jb: U(2)
                }));
                var rh = J(() => ({ ...ph(),
                    message: x(3, "GET_SW_RELEASE")
                }));
                var sh = J(() => ({ ...ph(),
                    message: x(4, "SKIP_WAITING")
                }));
                var vd = K(() => ({
                    message: [2, qh, 3, rh, 4, sh]
                }), ph);
                var wd = J(() => ({
                    message: x(3, "GET_SW_RELEASE"),
                    requestId: S(1),
                    release: S(2)
                }));
                var xd = J(() => ({
                    message: x(2, "OVERRIDE_NETWORK_STRATEGY"),
                    requestId: S(1),
                    Sa: U(2)
                }));
                var yd = J(() => ({
                    message: x(4, "SKIP_WAITING"),
                    requestId: S(1)
                }));
                var zd = J(() => ({
                    message: x(1, "MESSAGE_NOT_RECOGNISED"),
                    Rf: S(1)
                }));
                var Ad = K(() => ({
                    message: [1, zd, 2, xd, 3, wd, 4, yd]
                }), () => ({}));
                var Cd = class {
                    constructor(a, b, c, d) {
                        this.options = a;
                        this.serviceWorker = b;
                        this.C = c;
                        this.l = d
                    }
                };
                var th = class {
                    Sa() {
                        return this.Jb
                    }
                    constructor(a) {
                        this.options = a;
                        this.Jb = !1
                    }
                };
                var uh = L(() => [1, "N", 2, "O", 3, "A", 4, "C", {
                    Ya: !0
                }, 5, "B", 6, "D"]);
                var vh = J(() => ({
                    je: S(1),
                    he: R(2),
                    ie: R(3),
                    vj: T(4)
                }));
                var wh = () => ({
                    j: y(1, Uf),
                    O: D(8, yg),
                    bf: D(11, uh),
                    cf: D(12, uh),
                    af: D(7, uh),
                    ff: D(40, uh),
                    $e: D(41, uh),
                    ih: U(38),
                    ma: U(39),
                    kb: T(14),
                    Re: R(18),
                    ed: U(20),
                    Je: U(31),
                    Le: U(21),
                    release: S(22),
                    Kd: B(26, Yf),
                    eg: Q(36),
                    fg: R(37),
                    la: U(30),
                    userAgent: B(35, vh)
                });
                var xh = J(() => ({ ...wh(),
                    mode: x(2, "REAL"),
                    N: S(27)
                }));
                var yh = J(() => ({ ...wh(),
                    mode: x(3, "FAKE")
                }));
                var zh = K(() => ({
                    mode: [2, xh, 3, yh]
                }), wh);
                var Ah = !1,
                    Bh = class {
                        setTag(a, b) {
                            this.tags[a] = b
                        }
                        Xc(a) {
                            return new Bh(this, a)
                        }
                        setContext(a) {
                            this.context = a
                        }
                        error(a, b) {
                            this.console.error(...Ed(this, "error", a, b))
                        }
                        F(a, b) {
                            this.console.error(...Ed(this, "error", a, b))
                        }
                        Qd(a, b) {
                            this.console.warn(...Ed(this, "warning", a, b))
                        }
                        info(a, b) {
                            this.console.info(...Ed(this, "info", a, b))
                        }
                        debug(a, b) {
                            this.console.debug(...Ed(this, "debug", a, b))
                        }
                        toJSON() {
                            return {
                                name: this.name,
                                context: this.context,
                                tags: this.tags
                            }
                        }
                        constructor(a = console, b = "default") {
                            this.name = b;
                            this.tags = {};
                            if (!Ah &&
                                typeof window === "object") {
                                const c = window.onerror;
                                window.onerror = (...e) => {
                                    typeof c === "function" && c(...e);
                                    console.error("unhandled error:", ...e)
                                };
                                const d = window.onunhandledrejection;
                                window.onunhandledrejection = e => {
                                    typeof d === "function" && d(e);
                                    console.error("[ConsoleErrorClient]: Unhandled promise rejection", e)
                                };
                                Ah = !0
                            }
                            r(b.indexOf(".") === -1, "name must not contain a dot");
                            a instanceof Bh ? (this.name = `${a.name}.${b}`, this.console = a.console) : this.console = a
                        }
                    };
                var Ch = class {
                    constructor() {
                        this.Gd = {}
                    }
                };
                var le = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(le);
                            return d ? Qd(d, c) ? null : c : c
                        })
                    }
                    constructor(a = []) {
                        this.Xd = a;
                        this.name = le.id
                    }
                };
                le.id = "FilterErrors";
                var ie = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(ie);
                            return c
                        })
                    }
                    constructor() {
                        this.name = ie.id
                    }
                };
                ie.id = "HostRpcServiceErrors";
                var je = class {
                    setupOnce(a, b) {
                        a(c => {
                            b().getIntegration(je);
                            return c
                        })
                    }
                    constructor() {
                        this.name = je.id
                    }
                };
                je.id = "HttpServiceErrors";
                var Td = {
                    now: () => Date.now()
                };
                var Dh = class {
                        add(a) {
                            this.bb = this.Xe(this.bb);
                            this.list[this.bb] = a
                        }
                        find(a) {
                            let b = this.bb;
                            do {
                                if (this.list[b] && a(this.list[b])) return this.list[b];
                                b = this.Ye(b)
                            } while (b !== this.bb)
                        }
                        constructor() {
                            this.bc = 10;
                            this.bb = 0;
                            this.Xe = a => (a + 1) % this.bc;
                            this.Ye = a => (a + this.bc - 1) % this.bc;
                            this.list = Array(10)
                        }
                    },
                    ge = class {
                        setupOnce(a, b) {
                            a(c => {
                                const d = b().getIntegration(ge);
                                d && (Ud(d, c) ? c = null : d.history.add({
                                    event: c,
                                    timestamp: Td.now()
                                }));
                                return c
                            })
                        }
                        constructor(a) {
                            this.ig = a;
                            this.name = ge.id;
                            this.history = new Dh
                        }
                    };
                ge.id = "NoSuccessiveEvent";
                var de = class {
                    setupOnce(a, b) {
                        a(c => {
                            var d, e;
                            if (!b().getIntegration(de)) return c;
                            var f;
                            c.tags = (f = c.tags) !== null && f !== void 0 ? f : {};
                            c.tags["prior.unhandled.error.count"] = this.Dd;
                            ((e = c.exception) === null || e === void 0 ? 0 : (d = e.values) === null || d === void 0 ? 0 : d.some(g => {
                                var h;
                                return ((h = g.mechanism) === null || h === void 0 ? void 0 : h.handled) === !1
                            })) && this.Dd++;
                            return c
                        })
                    }
                    constructor() {
                        this.name = de.id;
                        this.Dd = 0
                    }
                };
                var ke = class {
                    setupOnce(a, b) {
                        a(c => {
                            const d = b().getIntegration(ke);
                            return d ? Zd(d, c) : c
                        })
                    }
                    Ic(a) {
                        var b, c, d;
                        const e = (a === null || a === void 0 ? 0 : a.url) ? Yd(this, a === null || a === void 0 ? void 0 : a.url) : void 0,
                            f = {};
                        if (a === null || a === void 0 ? 0 : (b = a.headers) === null || b === void 0 ? 0 : b["User-Agent"]) f["User-Agent"] = a === null || a === void 0 ? void 0 : a.headers["User-Agent"];
                        if (a === null || a === void 0 ? 0 : (c = a.headers) === null || c === void 0 ? 0 : c.Referer) f.Referer = Yd(this, a === null || a === void 0 ? void 0 : (d = a.headers) === null || d === void 0 ? void 0 : d.Referer);
                        return {
                            url: e,
                            headers: f
                        }
                    }
                    constructor(a, b) {
                        this.Yd = a;
                        this.location = b;
                        this.name = ke.id
                    }
                };
                ke.id = "UrlScrubber";
                var $d = [function(a) {
                    if (a = /canvaeditor\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }, function(a) {
                    if (a = /com.canva.editor\s\(version\/(\d+\.\d+\.\d+)/.exec(a)) return {
                        name: "mobile_app_version",
                        value: a[1]
                    }
                }];
                var me = ["TimeoutError", "HttpTimeoutError", /^ResizeObserver loop/, /^WHEN_CANCELLED$/, "ChunkLoadError", /^NetworkError: Failed to execute 'importScripts' on 'WorkerGlobalScope':/, /Failed to register a ServiceWorker.*(The document is in an invalid state|An unknown error occurred when fetching the script|Failed to access storage|The URL protocol of the current origin \('null'\) is not supported|Timed out while trying to start the Service Worker)\.$/, /^(Can't find variable: indexedDB|Internal error opening backing store for indexedDB.open.|Encountered full disk while opening backing store for indexedDB.open.|An internal error was encountered in the Indexed Database server)/,
                        /Non-Error promise rejection captured with value: [Tt]imeout( \(.\))?/
                    ],
                    Eh = class {
                        Ic(a) {
                            var b, c, d;
                            if (!a.url) return {
                                headers: {
                                    "User-Agent": (d = a === null || a === void 0 ? void 0 : (b = a.headers) === null || b === void 0 ? void 0 : b["User-Agent"]) !== null && d !== void 0 ? d : ""
                                }
                            };
                            b = /^(\/design\/[a-zA-Z0-9_-]+\/)([a-zA-Z0-9_-]{22})(.*)/;
                            d = new URL(a.url);
                            d.search = "";
                            b.test(d.pathname) && (d.pathname = d.pathname.replace(b, "$1<REDACTED>$3"));
                            var e;
                            return {
                                url: d.toString(),
                                headers: {
                                    "User-Agent": (e = a === null || a === void 0 ? void 0 : (c = a.headers) ===
                                        null || c === void 0 ? void 0 : c["User-Agent"]) !== null && e !== void 0 ? e : ""
                                }
                            }
                        }
                        Xc(a) {
                            return new Eh(this.R, this.componentStack.concat(a), this.jd, this.P, this.Yc, this.Vc, !0, this.tc)
                        }
                        setContext({
                            user: a,
                            locale: b,
                            Dh: c
                        }) {
                            var d, e;
                            (e = this.P) === null || e === void 0 || (d = e.getCurrentHub()) === null || d === void 0 || d.configureScope(f => {
                                a && (f.setUser(a), f.setExtra("isAnonymousUser", !1));
                                b && f.setTag("locale", b);
                                c === null || c === void 0 || c.forEach((g, h) => f.setExtra(h, g))
                            })
                        }
                        setTags(a) {
                            for (const b of a) this.setTag(b.name, b.value)
                        }
                        setTag(a,
                            b) {
                            if (this.P != null) {
                                {
                                    var c = a.length <= 32;
                                    const d = b.length <= 200;
                                    c && d ? c = ta(!0) : (c = (c ? "" : "Key name length cannot exceed 32 characters.\n") + (d ? "" : "Key value length cannot exceed 200 characters.\n"), c = ua(Error(c + `Tag: ${a}:${b}`)))
                                }
                                c.ok ? this.P.setTag(a, b) : pe(this, c.error)
                            }
                        }
                        setExtras(a) {
                            for (const b of a) this.setExtra(b.name, b.value)
                        }
                        setExtra(a, b) {
                            this.P != null && this.P.setExtra(a, Jd(b))
                        }
                        error(a, b) {
                            re(this, "error", a instanceof Error ? a : Error(a), b)
                        }
                        F(a, b) {
                            re(this, "error", a, b)
                        }
                        Qd(a, b) {
                            re(this, "warning", a, b)
                        }
                        info(a,
                            b) {
                            re(this, "info", a instanceof Error ? a : Error(a), b)
                        }
                        debug(a, b) {
                            re(this, "debug", a instanceof Error ? a : Error(a), b)
                        }
                        constructor(a, b = [], c = [], d = self.Sentry, e = new Ch, f = [], g = !1, h) {
                            a: {
                                var k = self;
                                if (typeof k.Android === "object" && typeof k.Android.getPageLocation === "function") {
                                    let l;
                                    try {
                                        l = k.Android.getPageLocation()
                                    } catch (n) {
                                        k = void 0;
                                        break a
                                    }
                                    k = typeof l === "string" ? l : void 0
                                } else k = void 0
                            }
                            this.R = a;this.componentStack = b;this.jd = c;this.P = d;this.Yc = e;this.Vc = f;this.tc = h;this.nd = void 0;this.allowUrls = "/dist/renderer/ canva.com canva.cn canva-dev.com canva-staging.com canva-staging.cn www.features.canva-internal.com www.features.canva-internal-staging.com canva-apps.com canva-apps.cn canva-apps-dev.com canva-apps-staging.com canva-apps-staging.cn".split(" ");
                            this.P ? g || oe(this, a, {
                                zd: k
                            }) : typeof self.suppressSentryInitializationError !== "undefined" && self.suppressSentryInitializationError === !0 || console.error("Sentry can not be found on the global scope.")
                        }
                    };
                var bf = class {
                        Qa() {
                            return new Fh
                        }
                    },
                    Fh = class {
                        ta() {
                            return new Gh
                        }
                        ua() {
                            return new Gh
                        }
                        Ub(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Gh)
                        }
                        async ob(a, b, c) {
                            let d;
                            typeof c === "function" && (d = c);
                            return d(new Gh)
                        }
                        Aa() {}
                        async flush() {}
                    },
                    Gh = class {
                        Yb() {
                            return new Hh
                        }
                        abort() {}
                        Ha() {}
                        setAttribute() {
                            return this
                        }
                        setStatus() {
                            return this
                        }
                        qd() {
                            return !1
                        }
                        wa() {
                            return !1
                        }
                        end() {
                            return {
                                Da: () => ({}),
                                Ea: () => ({})
                            }
                        }
                        Aa() {}
                        La() {}
                        $a() {}
                        constructor() {
                            this.name = "";
                            this.attrs = new Map;
                            this.U = "NOOP";
                            this.Ma = [];
                            this.status = "unset";
                            this.da = new Map;
                            this.startTime = performance.now();
                            this.ga = "span";
                            this.context = {
                                traceId: "",
                                spanId: "",
                                Lc: 0
                            };
                            this.links = []
                        }
                    },
                    Hh = class {
                        Aa() {}
                        La() {}
                        $a() {}
                        setAttribute() {}
                        Ha() {}
                    };
                var cf = class {
                    fd(a) {
                        var b = [];
                        for (const c of a) c.parentSpanId && !this.sc.has(c.parentSpanId) ? (a = this.zb.get(c.parentSpanId) || [], a.push(c), this.zb.set(c.parentSpanId, a)) : b.push(c);
                        for (const c of b) b = c.context.spanId, ue(this, c), this.zb.delete(b)
                    }
                    async flush() {}
                    constructor() {
                        this.zb = new Map;
                        this.sc = new Set
                    }
                };
                var Ih = class extends Error {
                        constructor(a, b) {
                            super(a);
                            this.vc = b;
                            this.name = "TelemetryExportError";
                            Object.setPrototypeOf(this, Ih.prototype)
                        }
                    },
                    Jh = class extends N {
                        constructor(a, b, c) {
                            super(a, b);
                            this.vc = c;
                            this.name = "SampledTracingExportError";
                            Object.setPrototypeOf(this, Jh.prototype)
                        }
                    };
                var df = class {
                    async fd(a) {
                        if (a.length !== 0)
                            if (this.Bb.size < this.cc) {
                                try {
                                    af(this.Od);
                                    var b = Ae(a, c => {
                                        var d = this.Od;
                                        return d.Oc + (c - d.Ac)
                                    })
                                } catch (c) {
                                    this.j.F(c, {
                                        va: "OTLPSpanAdapter: Unable to convert spans",
                                        extra: new Map([
                                            ["spans", JSON.stringify(a.map(P), void 0, 2)]
                                        ])
                                    });
                                    return
                                }
                                try {
                                    const c = this.send(b);
                                    this.Bb.add(c);
                                    c.catch(d => {
                                        this.j.F(d)
                                    }).finally(() => {
                                        this.Bb.delete(c)
                                    })
                                } catch (c) {
                                    this.j.F(c)
                                }
                            } else this.j.F(new Ih("OTLPExporter: Concurrency Limit Reached"))
                    }
                    async flush() {
                        await Promise.all(this.Bb)
                    }
                    constructor(a,
                        b, c, d) {
                        this.config = a;
                        this.j = b;
                        this.Od = c;
                        this.send = d;
                        this.Bb = new Set;
                        var e;
                        this.cc = (e = a.cc) !== null && e !== void 0 ? e : Infinity
                    }
                };
                var ff = ({
                    gg: a,
                    url: b,
                    gb: c,
                    fetch: d = self.fetch
                }) => async e => {
                    var f, g;
                    e = new Request(b, {
                        method: "POST",
                        body: JSON.stringify(e),
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json"
                        },
                        priority: "low",
                        signal: (f = (g = AbortSignal).timeout) === null || f === void 0 ? void 0 : f.call(g, a)
                    });
                    try {
                        const h = await d(e);
                        if (h.status > 299 || h.status < 200) throw c != null ? new Jh(`SendWithFetch: Failed to export (status: ${h.status})`, c) : new Ih(`SendWithFetch: Failed to export (status: ${h.status})`);
                    } catch (h) {
                        throw f = h instanceof
                        Error && h.name === "AbortError" ? `SendWithFetch: Fetch request timeout: ${a}ms` : "SendWithFetch: Failed to export", c != null ? new Jh(f, c) : new Ih(f);
                    }
                };
                var gf = class {
                    build(a) {
                        return this.Ad.reduce((b, c) => c(b), {
                            Ua: () => {},
                            process: b => a.fd(b),
                            flush: () => a.flush()
                        })
                    }
                    constructor() {
                        this.Ad = []
                    }
                };
                var Ce = class {
                    Ua() {}
                    process(a) {
                        for (const b of a) b.wa() && (this.buffer.push(b), this.buffer.length >= this.config.Lb && De(this));
                        this.buffer.length > 0 && this.Xa == null && (this.Xa = setTimeout(() => De(this), this.config.Mb))
                    }
                    async flush() {
                        De(this);
                        await this.Ta.flush()
                    }
                    constructor(a, b, c) {
                        this.Ta = a;
                        this.config = b;
                        this.j = c;
                        this.buffer = []
                    }
                };
                var hf = class {
                        Ua(a) {
                            const b = a.context.traceId,
                                c = this.Xb.get(b);
                            c != null ? (c.Pb += 1, a.B === void 0 && (c.root = a)) : this.Xb.set(b, {
                                Pb: 1,
                                root: a
                            });
                            this.Ta.Ua(a)
                        }
                        process(a) {
                            for (const c of a) {
                                a = c.context.traceId;
                                var b = this.Xb.get(a);
                                b != null && (--b.Pb, b.Pb === 0 && (b = this.Qf.process(b), this.Ta.process(b), this.Xb.delete(a)))
                            }
                        }
                        flush() {
                            return this.Ta.flush()
                        }
                        constructor(a) {
                            var b = new Kh;
                            this.Ta = a;
                            this.Qf = b;
                            this.Xb = new Map
                        }
                    },
                    Kh = class {
                        process(a) {
                            const b = [];
                            Ee(this, a.root, b);
                            return b
                        }
                    };
                var Lh = Ke(16),
                    Mh = Ke(8),
                    Je = Array(32);
                var Pe = class {
                        Yb() {
                            return this.X || new Hh
                        }
                        Ha(a) {
                            this.Za || (this.attrs = new Map([...this.attrs, ...a]))
                        }
                        setAttribute(a, b, c = !1) {
                            if (this.Za && !c) return this;
                            this.attrs.set(a, b);
                            return this
                        }
                        setStatus(a) {
                            try {
                                if (this.Za) return this;
                                this.status = a;
                                return this
                            } catch (b) {
                                return this.status = "error", this.j.F(b), this
                            }
                        }
                        qd() {
                            return !this.ended
                        }
                        wa() {
                            return (this.context.Lc & 1) !== 0
                        }
                        abort() {
                            try {
                                var a;
                                if (!this.aborted) {
                                    this.aborted = !0;
                                    this.setAttribute("span_aborted", !0);
                                    for (const b of this.Na) b.abort();
                                    this.ended || (this.Za =
                                        this.ended = !0, this.timeout && clearTimeout(this.timeout), ((a = this.qa) === null || a === void 0 ? 0 : a.frameRate) && Re(this.qa.frameRate), this.endTime = this.getCurrentTime(), this.duration = this.endTime - this.startTime, Ne(this), Qe(this), this.lb.forEach(b => b()), this.ba.Wa.process([this]))
                                }
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        end(a, b, c) {
                            try {
                                if (this.ended) return {
                                    Da: this.Da,
                                    Ea: this.Ea
                                };
                                this.ended = !0;
                                return Se(this, a, b, c)
                            } catch (d) {
                                return this.j.F(d, {
                                    va: "Error ending span",
                                    extra: new Map(P(this))
                                }), {
                                    Da: this.Da,
                                    Ea: this.Ea
                                }
                            }
                        }
                        La(a) {
                            try {
                                this.ended &&
                                    this.aborted || (this.ended && this.fc ? a(this.fc) : this.mb.push(a))
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        $a(a) {
                            try {
                                this.ended && this.aborted ? a() : this.lb.push(a)
                            } catch (b) {
                                this.j.F(b)
                            }
                        }
                        Aa(a, b) {
                            try {
                                r(a.length > 0, "Event name cannot be empty");
                                const {
                                    Nb: c,
                                    Ob: d
                                } = Le(b), e = new Nh({
                                    name: a,
                                    B: this,
                                    ba: this.ba,
                                    na: this.na,
                                    U: this.U,
                                    j: this.j,
                                    startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                    X: void 0,
                                    ga: "event",
                                    hb: d === null || d === void 0 ? void 0 : d.hb,
                                    getCurrentTime: this.getCurrentTime,
                                    aa: this.aa,
                                    attrs: (d === null || d === void 0 ? void 0 : d.attrs) ||
                                        c,
                                    zc: this.startTime
                                });
                                this.Ma.push(e)
                            } catch (c) {
                                this.j.F(c)
                            }
                        }
                        get da() {
                            return this.na()
                        }
                        constructor(a) {
                            var b;
                            this.Za = this.aborted = this.ended = !1;
                            this.attrs = new Map;
                            this.Ma = [];
                            this.Na = [];
                            this.status = "unset";
                            this.fc = void 0;
                            this.mb = [];
                            this.lb = [];
                            this.Da = f => Ie({
                                span: this,
                                j: this.j,
                                aa: this.aa,
                                ...f
                            });
                            this.Ea = () => this.wa() ? this.context : void 0;
                            this.name = a.name;
                            this.ended = !1;
                            this.ba = a.ba;
                            var c;
                            this.getCurrentTime = (c = a.getCurrentTime) !== null && c !== void 0 ? c : f => {
                                var g;
                                return (g = f === null || f === void 0 ? void 0 : f.xc) !==
                                    null && g !== void 0 ? g : performance.now()
                            };
                            c = Mh();
                            this.identifier = `${this.name}_${c}`;
                            this.startTime = this.getCurrentTime({
                                id: this.identifier,
                                xc: a.startTime
                            });
                            this.U = a.U;
                            this.X = a.X;
                            this.ga = a.ga;
                            this.j = a.j;
                            this.qa = a.qa;
                            const d = ((b = a.B) === null || b === void 0 ? void 0 : b.context.traceId) || Lh();
                            a.attrs && (this.attrs = new Map(a.attrs));
                            this.attrs.set("span_type", this.ga);
                            b = a.ba.Hc.Hd({
                                traceId: d,
                                cg: this.name,
                                attributes: this.attrs,
                                B: a.B
                            }) ? 1 : 0;
                            this.context = {
                                spanId: c,
                                traceId: d,
                                Lc: b
                            };
                            this.links = a.links || [];
                            a.B && (this.parentSpanId =
                                a.B.context.spanId, this.B = a.B);
                            this.na = a.na;
                            this.aa = a.aa;
                            this.setStatus("ok");
                            this.timeout = setTimeout(() => {
                                var f;
                                this.setAttribute("timed_out", !0);
                                se(this) && ((f = this.X) === null || f === void 0 ? 0 : f.Fb) ? this.end("error") : (this.name += ".timed_out", this.end("ok"))
                            }, a.timeout || 12E4);
                            for (const f of this.ba.plugins) try {
                                var e;
                                (e = f.Ua) === null || e === void 0 || e.call(f, this)
                            } catch (g) {
                                this.j.F(g, {
                                    va: "Error calling plugin onSpanStart",
                                    extra: new Map([
                                        ["plugin", f.name], ...P(this)
                                    ])
                                })
                            }
                            this.ba.Wa.Ua(this)
                        }
                    },
                    Nh = class extends Pe {
                        constructor(a) {
                            super(a);
                            a.zc != null && (this.setAttribute("parent_relative_start_ms", Math.round(this.startTime - a.zc)), this.setAttribute("parent_start", a.zc));
                            a.hb && this.setAttribute("event_type", a.hb);
                            this.end("ok", this.startTime)
                        }
                    };
                var Te = class {
                    get aborted() {
                        return this.T.aborted
                    }
                    La(a) {
                        try {
                            this.ended && this.aborted || (this.ended && this.hc ? a(this.hc) : this.mb.push(a))
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    $a(a) {
                        try {
                            this.ended && this.aborted ? a() : this.lb.push(a)
                        } catch (b) {
                            this.j.F(b, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Aa(a, b) {
                        try {
                            const c = Me(b);
                            this.Ne.forEach((e, f) => {
                                c.attrs.has(f) || c.attrs.set(f, e)
                            });
                            c.attrs.set("user_operation", this.name);
                            c.attrs.set("is_uop", !0);
                            c.attrs.set("sample_rate_override",
                                1);
                            const d = this.T.attrs.get("uop_attr_type");
                            d != null && c.attrs.set("uop_attr_type", d);
                            this.pb && c.attrs.set("uop_persist", !0);
                            this.T.Aa(a, c)
                        } catch (c) {
                            this.j.F(c, {
                                tags: new Map([
                                    ["user_operation", this.name]
                                ])
                            })
                        }
                    }
                    Ha(a) {
                        this.T.Ha(a)
                    }
                    setAttribute(a, b) {
                        this.T.setAttribute(a, b)
                    }
                    constructor(a, b, c, d, e, f, g) {
                        var h = new Set;
                        this.name = a;
                        this.T = b;
                        this.Ne = c;
                        this.j = d;
                        this.pb = e;
                        this.Fb = f;
                        this.eb = g;
                        this.ec = h;
                        this.mb = [];
                        this.lb = [];
                        this.hc = void 0;
                        this.ended = !1
                    }
                };
                var lf = class {
                    Hd({
                        cg: a,
                        attributes: b,
                        B: c
                    }) {
                        b = b === null || b === void 0 ? void 0 : b.get("sample_rate_override");
                        if (b != null && typeof b === "number") {
                            if (b < 0 || b > 1) this.j.error(Error(`Invalid sample rate (${b}) for ${a}`)), b = this.sampleRate;
                            return Math.random() < b
                        }
                        a = this.sf(c);
                        return a != null ? a : Math.random() < this.sampleRate
                    }
                    constructor(a = 0, b) {
                        var c = Ye;
                        this.sampleRate = a;
                        this.j = b;
                        this.sf = c;
                        this.sampleRate = Math.min(Math.max(0, this.sampleRate), 1)
                    }
                };
                var Oh = class {
                    add(a, b = 1) {
                        r(isFinite(a));
                        r(b > 0);
                        if (this.ia === 0) this.ia = b, this.wb = this.xb = this.Ka = a, this.yb = 0;
                        else {
                            this.ia += b;
                            const c = a - this.Ka;
                            this.Ka += b * c / this.ia;
                            this.yb += b * c * (a - this.Ka);
                            this.xb = Math.min(this.xb, a);
                            this.wb = Math.max(this.wb, a)
                        }
                    }
                    addAll(a) {
                        for (const b of a) this.add(b)
                    }
                    get count() {
                        return this.ia
                    }
                    get uf() {
                        return this.Ka
                    }
                    get min() {
                        return this.xb
                    }
                    get max() {
                        return this.wb
                    }
                    get Of() {
                        return this.ia === 0 ? NaN : this.ia === 1 ? 0 : Math.max(this.yb, 0) / this.ia
                    }
                    get Nf() {
                        return Math.sqrt(this.Of)
                    }
                    constructor() {
                        this.ia =
                            0;
                        this.Ka = NaN;
                        this.yb = 0;
                        this.wb = this.xb = NaN
                    }
                };
                var Ph = class {
                        start() {
                            this.Ia = new Oh;
                            this.Rb = void 0;
                            this.$b = this.Cc.requestAnimationFrame(this.Cd);
                            this.document.addEventListener("visibilitychange", this.vd)
                        }
                        get pd() {
                            return this.document.visibilityState === "visible"
                        }
                        constructor() {
                            var a = window.document;
                            this.Cc = window;
                            this.document = a;
                            this.Ia = new Oh;
                            this.Cd = b => {
                                this.Rb !== void 0 && this.Ia.add(Math.min(b - this.Rb, 5E3));
                                this.Rb = this.pd ? b : void 0;
                                this.$b = this.Cc.requestAnimationFrame(this.Cd)
                            };
                            this.vd = () => {
                                this.pd || (this.Rb = void 0)
                            }
                        }
                    },
                    Qh = class {
                        reset() {
                            this.frameCount =
                                0;
                            this.ud = new Oh;
                            this.od.clear()
                        }
                        constructor() {
                            this.frameCount = 0;
                            this.ud = new Oh;
                            this.od = new Set
                        }
                    },
                    Ze = new Qh;
                var Rh = class {
                    Ua() {}
                    process() {}
                    async flush() {}
                };
                var Sh = class {
                    Hd() {
                        return !0
                    }
                };
                var Th = class {
                    ta(a, b) {
                        return this.ua(a, void 0, b)
                    }
                    ua(a, b, c) {
                        try {
                            var d;
                            const {
                                Nb: e,
                                Ob: f
                            } = Le(c), g = ha(this.U(b), "No instrumentation scope found for '{}' of parent '{}:{}'", a, b === null || b === void 0 ? void 0 : b.U, b === null || b === void 0 ? void 0 : b.context.spanId), h = (f === null || f === void 0 ? 0 : (d = f.performance) === null || d === void 0 ? 0 : d.ai) ? this.dc.frameRate() : void 0;
                            h === null || h === void 0 || h.start();
                            const k = (f === null || f === void 0 ? 0 : f.dg) ? Ve({
                                    vc: { ...f.dg,
                                        startTime: f.startTime,
                                        timeout: f.timeout
                                    },
                                    l: this.Rc,
                                    B: b,
                                    Ae: [this.config.Zb,
                                        this.Zb
                                    ].filter(Pa),
                                    j: this.j,
                                    Df: n => {
                                        b = n
                                    }
                                }) : We(b),
                                l = new Pe({
                                    name: a,
                                    B: b,
                                    ba: this.config,
                                    na: this.na,
                                    U: g,
                                    j: this.j,
                                    getCurrentTime: this.getCurrentTime,
                                    startTime: f === null || f === void 0 ? void 0 : f.startTime,
                                    timeout: f === null || f === void 0 ? void 0 : f.timeout,
                                    aa: this.aa,
                                    attrs: (f === null || f === void 0 ? void 0 : f.attrs) || e,
                                    links: f === null || f === void 0 ? void 0 : f.links,
                                    X: k,
                                    ga: "span",
                                    qa: {
                                        frameRate: h
                                    }
                                });
                            k !== null && k !== void 0 && (l.attrs.get("is_uop") || l.setAttribute("user_operation", k.name), k.pb == null && (k.pb = l.wa(), k.pb && k.T.setAttribute("uop_persist", !0)), k.ec.add(l));
                            b != null && b instanceof Pe && b.Na.push(l);
                            return l
                        } catch (e) {
                            return this.j.F(e), new Gh
                        }
                    }
                    Ub(a, b, c) {
                        {
                            let e, f;
                            typeof c === "function" ? f = c : e = Me(c);
                            a = this.ua(a, b, e);
                            try {
                                var d = f(a)
                            } catch (g) {
                                throw a.setStatus("error"), g;
                            } finally {
                                a.end()
                            }
                        }
                        return d
                    }
                    async ob(a, b, c) {
                        return $e(this, a, b, c)
                    }
                    Aa(a, b) {
                        try {
                            const {
                                Nb: c,
                                Ob: d
                            } = Le(b);
                            r(a.length > 0, "Event name cannot be empty");
                            const e = ha(this.U(), "Event ({}) requires instrumentation scope", a);
                            new Nh({
                                name: a,
                                ba: this.config,
                                na: this.na,
                                U: e,
                                X: void 0,
                                j: this.j,
                                ga: "event",
                                hb: d === null || d === void 0 ? void 0 : d.hb,
                                getCurrentTime: this.getCurrentTime,
                                startTime: d === null || d === void 0 ? void 0 : d.startTime,
                                aa: this.aa,
                                attrs: (d === null || d === void 0 ? void 0 : d.attrs) || c,
                                B: void 0
                            })
                        } catch (c) {
                            this.j.F(c)
                        }
                    }
                    async flush() {
                        try {
                            await this.config.Wa.flush()
                        } catch (a) {
                            this.j.F(a)
                        }
                    }
                    constructor(a, b, c, d, e, f, g, h = l => {
                        var n;
                        return (n = l === null || l === void 0 ? void 0 : l.xc) !== null && n !== void 0 ? n : performance.now()
                    }, k = {
                        frameRate: () => new Ph
                    }) {
                        this.U = a;
                        this.aa = b;
                        this.config = c;
                        this.na = d;
                        this.j = e;
                        this.Rc = f;
                        this.Zb = g;
                        this.getCurrentTime =
                            h;
                        this.dc = k
                    }
                };
                var kf = class {
                        constructor(a) {
                            var b;
                            this.Hc = (b = a.Hc) !== null && b !== void 0 ? b : new Sh;
                            var c;
                            this.Wa = (c = a.Wa) !== null && c !== void 0 ? c : new Rh;
                            var d;
                            this.plugins = (d = a.plugins) !== null && d !== void 0 ? d : [];
                            var e;
                            this.da = (e = a.da) !== null && e !== void 0 ? e : new Map;
                            this.Zb = a.Zb
                        }
                    },
                    jf = class {
                        Qa(a) {
                            try {
                                return new Th(() => a, this, this.config, () => new Map([...this.config.da, ["service.name", this.Zf + " | " + a]]), this.j, this.Rc, void 0, this.getCurrentTime, this.dc)
                            } catch (c) {
                                var b;
                                this.j.F(c, {
                                    extra: new Map([
                                        ["attrs", Object.fromEntries((b = this.config) ===
                                            null || b === void 0 ? void 0 : b.da)]
                                    ])
                                });
                                return new Fh
                            }
                        }
                        constructor(a, b, c = e => {
                            var f;
                            return (f = e === null || e === void 0 ? void 0 : e.xc) !== null && f !== void 0 ? f : performance.now()
                        }, d = {
                            frameRate: () => new Ph
                        }) {
                            this.config = a;
                            this.j = b;
                            this.getCurrentTime = c;
                            this.dc = d;
                            this.Zf = (a = this.config.da.get("service.name")) && typeof a === "string" ? a : "no_service_name";
                            this.Rc = this.Qa("telemetry.user_operation")
                        }
                    };
                var ef = class {
                    constructor() {
                        var a = Date.now(),
                            b = performance.now();
                        this.Oc = a;
                        this.Ac = b;
                        this.threshold = 1E4
                    }
                };
                var of = class {
                    constructor(a, b) {
                        this.Md = a;
                        this.Ld = b
                    }
                };
                var qf = class {
                    Ec(a) {
                        const b = this.l.ta("time_until_idle");
                        b.La(() => this.Oa.delete(a));
                        b.$a(() => this.Oa.delete(a));
                        this.Oa.set(a, {
                            span: b,
                            Xa: self.setTimeout(() => nf(this, a), 5E3),
                            Gb: [performance.now()]
                        })
                    }
                    Fc(a) {
                        a = this.Oa.get(a);
                        a != null && (a.Gb = a.Gb.slice(-5).concat(performance.now()))
                    }
                    constructor(a) {
                        this.l = a;
                        this.Oa = new Map
                    }
                };
                var pf = class {
                    Ec(a) {
                        const b = this.l.ta("time_to_second_fetch_event", {
                            timeout: this.options.hg
                        });
                        b.La(() => this.sb.delete(a));
                        b.$a(() => this.sb.delete(a));
                        this.sb.set(a, b)
                    }
                    Fc(a) {
                        const b = this.sb.get(a);
                        b != null && (b.end(), this.sb.delete(a))
                    }
                    constructor(a) {
                        this.options = {
                            hg: 3E4
                        };
                        this.l = a;
                        this.sb = new Map
                    }
                };
                var tf = class {
                    constructor() {
                        this.cd = !1;
                        this.ac = null
                    }
                };
                (function() {
                    var a;
                    const b = performance.now(),
                        c = la("page", zh.S);
                    var d;
                    const e = (d = c.release) !== null && d !== void 0 ? d : self.bootstrap.release;
                    var f;
                    d = (f = c.j) !== null && f !== void 0 ? f : la("errorService", Uf.S);
                    var g;
                    f = (g = c.Kd) !== null && g !== void 0 ? g : la("telemetryService", Yf.S);
                    a: switch (d.M) {
                        case "CONSOLE":
                            g = new Bh;
                            break a;
                        case "SENTRY":
                            g = new Eh(d);
                            break a;
                        default:
                            throw new F(d);
                    }
                    const h = g.Xc("offline"),
                        {
                            Ja: k,
                            tb: l,
                            xa: n
                        } = uf({
                            location: self.location,
                            R: f,
                            gb: c.eg,
                            jc: c.fg,
                            userAgent: c.userAgent,
                            D: {
                                j: h
                            }
                        });
                    g = k.Qa("service_worker.install");
                    var m;
                    const p = g.ta(`boot.${(m=(a=self.serviceWorker)===null||a===void 0?void 0:a.state)!==null&&m!==void 0?m:"na"}`, {
                        startTime: 0
                    });
                    a = g.ua("main", p, {
                        startTime: b
                    });
                    const q = new th({
                        Qb: c.cf,
                        xd: c.bf,
                        ad: c.af,
                        re: c.$e,
                        pg: c.ff
                    });
                    if (c.ed) try {
                        ud({
                            serviceWorker: self,
                            D: {
                                j: h,
                                Ja: k,
                                tb: l,
                                xa: n
                            },
                            O: c.O,
                            C: q,
                            N: c.mode === "REAL" ? c.N : location.origin,
                            kb: c.kb,
                            Be: () => JSON.stringify(c, void 0, 2),
                            ra: c.Re,
                            la: c.la,
                            ma: c.ma
                        })
                    } catch (w) {
                        h.F(w)
                    }
                    Dd({
                        serviceWorker: self,
                        C: q,
                        release: e,
                        D: {
                            Ja: k
                        }
                    });
                    self.addEventListener("activate", w => {
                        w.waitUntil(async function() {
                            var v,
                                z;
                            c.Je && await self.clients.claim().catch(A => h.F(A));
                            c.ed && q.options.Qb !== 1 ? await ((v = self.registration.navigationPreload) === null || v === void 0 ? void 0 : v.enable().catch(() => {})) : await ((z = self.registration.navigationPreload) === null || z === void 0 ? void 0 : z.disable().catch(() => {}))
                        }())
                    });
                    self.addEventListener("install", () => {
                        c.Le && self.skipWaiting()
                    });
                    a.end();
                    Promise.resolve().then(() => {
                        p.end();
                        l.ac = Date.now()
                    })
                })();
            }).call(self, self._14ca148dba66601866f38250fc203092);
        },

        /***/
        692950:
            (_, __, r) => r(476834)

    },
    /******/
    __webpack_require__ => { // webpackRuntimeModules
        /******/
        var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
        /******/
        __webpack_require__.O(0, [95433, 69588], () => (__webpack_exec__(476834), __webpack_exec__(692950)));
        /******/
        var __webpack_exports__ = __webpack_require__.O();
        /******/
    }
])
//# sourceMappingURL=sourcemaps/hjfept.b46c76370b882566.js.map