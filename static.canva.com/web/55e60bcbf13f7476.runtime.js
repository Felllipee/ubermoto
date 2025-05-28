(() => {
    "use strict";
    var e, r, t, f, n, s = {},
        i = {};

    function c(e) {
        var r = i[e];
        if (void 0 !== r) return r.exports;
        var t = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return s[e].call(t.exports, t, t.exports, c), t.loaded = !0, t.exports
    }
    c.m = s, c.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, c.amdO = {}, e = [], c.O = (r, t, f, n) => {
        if (!t) {
            var s = 1 / 0;
            for (d = 0; d < e.length; d++) {
                for (var [t, f, n] = e[d], i = !0, a = 0; a < t.length; a++)
                    if ((!1 & n || s >= n) && Object.keys(c.O).every((e => c.O[e](t[a])))) t.splice(a--, 1);
                    else if (i = !1, n < s) s = n;
                if (i) {
                    e.splice(d--, 1);
                    var u = f();
                    if (void 0 !== u) r = u
                }
            }
            return r
        } else {
            n = n || 0;
            for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
            e[d] = [t, f, n]
        }
    }, c.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return c.d(r, {
            a: r
        }), r
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, c.t = function(e, f) {
        if (1 & f) e = this(e);
        if (8 & f) return e;
        if ("object" == typeof e && e) {
            if (4 & f && e.__esModule) return e;
            if (16 & f && "function" == typeof e.then) return e
        }
        var n = Object.create(null);
        c.r(n);
        var s = {};
        r = r || [null, t({}), t([]), t(t)];
        for (var i = 2 & f && e;
            "object" == typeof i && !~r.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((r => s[r] = () => e[r]));
        return s.default = () => e, c.d(n, s), n
    }, c.d = (e, r) => {
        for (var t in r)
            if (c.o(r, t) && !c.o(e, t)) Object.defineProperty(e, t, {
                enumerable: !0,
                get: r[t]
            })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((r, t) => (c.f[t](e, r), r)), [])), c.u = e => {
        if (50869 === e) return "cc5ef1fc9c875255.js";
        if (61454 === e) return "048252aca513298a.vendor.js";
        if (68772 === e) return "68f927d4d76307b6.vendor.js";
        if (71059 === e) return "265ba06de98c55a1.js";
        if (50971 === e) return "19ccd5a90589132c.js";
        if (76703 === e) return "ae8d80bfa05a1d69.js";
        if (21023 === e) return "c4bb44a315c70eca.js";
        if (30270 === e) return "870ca2cb27b159ab.js";
        if (32915 === e) return "b3341b67b869254b.js";
        if (28646 === e) return "cdc45295495b3d3b.js";
        if (12942 === e) return "3ad1d0cfb5b81feb.js";
        if (49830 === e) return "555560f53679985f.js";
        if (39314 === e) return "1122b92e0b866468.js";
        if (85225 === e) return "630c9ae2efbb7a86.vendor.js";
        if (45085 === e) return "3fc02161a29de042.js";
        if (61615 === e) return "684ea96b4ad0c8cd.js";
        if (52358 === e) return "5b888d290eb0fce9.js";
        if (52356 === e) return "e0486cae713b50d0.js";
        if (49392 === e) return "f64d61ceb8ae3226.js";
        if (70665 === e) return "3485748edaacef4b.js";
        if (81623 === e) return "5583489495ed1690.js";
        if (97751 === e) return "07ebf145264382ce.js";
        if (48376 === e) return "a8ac3e53adc69476.js";
        if (63891 === e) return "e691670c15974941.js";
        if (47604 === e) return "25e8945b41b90890.js";
        if (6151 === e) return "030bcbe60955116e.js";
        if (61442 === e) return "3d9fb83c70d3a02b.js";
        if (29046 === e) return "8c2590459dec4ed0.js";
        if (10412 === e) return "e2b3fdeefd5fc0e6.js";
        if (3465 === e) return "2938f09410d41452.js";
        if (3905 === e) return "fe8971384eadcc55.js";
        if (53697 === e) return "be67218bb2aeff54.js";
        if (67115 === e) return "71d4f569d38c4122.js";
        if (83191 === e) return "6903ee93666fe534.js";
        if (32255 === e) return "f06b5867c2dffbb5.js";
        if (33581 === e) return "5c129dd54bd34f32.js";
        if (73539 === e) return "194073a6ddf05526.js";
        if (35672 === e) return "87b7d2c5713f2a7b.js";
        if (83126 === e) return "d7e77a2b9fb88e38.js";
        if (49210 === e) return "a79015d0aaaffcd2.js";
        if (49350 === e) return "9419dc0a95eecb7f.js";
        if (42283 === e) return "833c2d3c1792321b.js";
        if (89840 === e) return "c3b6c8fef430548a.js";
        if (10785 === e) return "a6aa17ba8f924eb8.js";
        if (42617 === e) return "8be1d7435d9afd1f.js";
        if (19326 === e) return "f709b03d6607921e.js";
        if (25360 === e) return "55de6b515f366e2f.js";
        if (15816 === e) return "26f32b18b778bbc6.js";
        if (83785 === e) return "9fafff5781948bce.js";
        if (98384 === e) return "90d64c1cea443c77.js";
        if (39927 === e) return "a99cd46caadb59ef.js";
        if (30203 === e) return "c5d1efe64d5d8536.js";
        if (58899 === e) return "6a2abad768d26960.js";
        if (80978 === e) return "1feaea462996e7cc.js";
        if (34449 === e) return "b52dcaaeba4cf9da.js";
        if (5925 === e) return "7f4baa8636680f01.js";
        if (52595 === e) return "f70c9294f4d2a098.js";
        if (39412 === e) return "a563e2215ade6e81.js";
        if (70038 === e) return "d137df42f23219c5.js";
        if (21877 === e) return "ac653eb23aec7766.js";
        if (12894 === e) return "ac4e0ec172925731.js";
        if (44374 === e) return "538d4cb7b5eb91ac.js";
        if (67587 === e) return "81dccc4a7de559f3.js";
        if (38207 === e) return "9dfa93e61ace1ad7.js";
        if (99925 === e) return "4b74344a9ca80a62.js";
        if (46384 === e) return "da97c07f9b2bbb7d.js";
        if (67896 === e) return "945bdd94b30760e7.js";
        if (84151 === e) return "f06f155840ea39f3.js";
        if (63963 === e) return "dc578467d8c77361.js";
        if (61372 === e) return "9310ad408a0100dc.js";
        if (14433 === e) return "8829d13809d543e8.js";
        if (63299 === e) return "df33f232beac897e.js";
        if (90063 === e) return "41db761bbccf30db.js";
        if (68255 === e) return "3597726ff7eed92a.js";
        if (10188 === e) return "e50fe28c4a0c0c61.js";
        if (58911 === e) return "cb70cccb694a741e.js";
        if (20284 === e) return "825bc75cb3efd1c4.js";
        if (67810 === e) return "44ad2f275c678c38.js";
        if (85140 === e) return "5efd82d6999e041b.js";
        if (14842 === e) return "c77b53e9ea451410.js";
        if (77367 === e) return "3c78ca738f91b1df.js";
        if (47845 === e) return "9d1bceb928b05298.js";
        if (69774 === e) return "01e11c0b1ef12392.js";
        if (29179 === e) return "5fd7728e007e9d9e.js";
        if (93060 === e) return "9b5e7fd81c6572f0.js";
        if (97412 === e) return "024dbc82452dde97.js";
        if (99137 === e) return "f957a4f8d3d18df7.js";
        if (57257 === e) return "bbc4395084c46f3b.js";
        if (83296 === e) return "a8b8121b1ea73b44.js";
        if (79101 === e) return "9abe6a792193b07d.js";
        if (38423 === e) return "83d21b90dbe2d32f.js";
        if (28338 === e) return "a8065d9a3bf0e93b.js";
        if (26271 === e) return "dc02a65c81976a0d.js";
        if (61433 === e) return "306ef1d3f557a06c.js";
        if (49235 === e) return "fffc8763c5a7e2ac.js";
        if (19750 === e) return "350e75d49802db73.js";
        if (65133 === e) return "1340349671e51580.js";
        if (10242 === e) return "c4ce42ace4ac9493.js";
        if (19827 === e) return "9b42c62ce7c3ae2d.js";
        if (20520 === e) return "9afe84cc01ab4825.js";
        if (91821 === e) return "85bce33e6c7f490b.js";
        if (80117 === e) return "3676075bc31ac30e.js";
        if (92815 === e) return "67353bdf8bd19909.js";
        if (35011 === e) return "a2aaadbd42ff9820.js";
        if (59981 === e) return "e49518b0eab699fb.vendor.js";
        if (2956 === e) return "2b48f39ef3d88294.vendor.js";
        if (45699 === e) return "ad65e129f01643de.js";
        if (45366 === e) return "7cdcd7b0a429cbae.vendor.js";
        if (21829 === e) return "40a25f863a94a19a.js";
        if (56782 === e) return "60afe7b25e0fa6fd.js";
        if (50634 === e) return "5a4eed739b57ca3c.js";
        if (87246 === e) return "29323f6397130a62.js";
        if (38660 === e) return "ba11709cbe4d8112.js";
        if (7822 === e) return "cc36c10919bee34d.js";
        if (60650 === e) return "7cc4926e03a833fc.js";
        if (87911 === e) return "cb319a9e1d3b05d0.js";
        if (37438 === e) return "3d9baf3ebe0746f7.js";
        if (73825 === e) return "863a158e3f328bdd.js";
        if (57914 === e) return "2cc4d70684755af4.js";
        if (37906 === e) return "d06ae789bb8b5756.js";
        if (77181 === e) return "de0fa1f02a6f00d2.js";
        if (19656 === e) return "68ebb00997b5e81e.js";
        if (76301 === e) return "090c8abe3b71f1b6.js";
        if (32901 === e) return "97cff3a461a9492b.js";
        if (24459 === e) return "d562d2425f702e21.js";
        if (1794 === e) return "64174d025bcfcfa1.js";
        if (96826 === e) return "c98064e9889c02b9.vendor.js";
        if (47798 === e) return "82b47738b2d573c6.js";
        if (14408 === e) return "c21722b8453c6e03.js";
        if (91969 === e) return "e7a6d6382bc2d6b5.js";
        if (89303 === e) return "b8ce26fd07bc890b.js";
        if (57399 === e) return "54d9a3f5c3044e05.js";
        if (19289 === e) return "6c978a0ec0acce1e.js";
        if (60205 === e) return "4719a0a4c99fa6d1.js";
        if (13794 === e) return "47369df51bb74389.js";
        if (10316 === e) return "4697b8cb8d0acb30.js";
        if (61316 === e) return "5342682a5cd81ea7.js";
        if (47523 === e) return "6f11a1a647edbeaf.js";
        if (2906 === e) return "288efda7368cc45b.js";
        if (4450 === e) return "c71b26f65eb7e390.js";
        if (45749 === e) return "fa5e1d968a82af19.js";
        if (50463 === e) return "3306fe457aff725c.js";
        if (38734 === e) return "e650b3683e8a526a.js";
        if (47510 === e) return "45648a3d236819ce.js";
        if (218 === e) return "2d0cd51724c242af.js";
        if (68629 === e) return "ceefe5e0ce193310.js";
        if (61161 === e) return "beee70d939a50ad0.js";
        if (74103 === e) return "aab39d0406151293.js";
        if (90451 === e) return "233a04e9496d4d9c.js";
        if (16621 === e) return "73b069e804a223e6.js";
        if (13073 === e) return "e368aa53cfc7a9bf.js";
        if (53256 === e) return "90623597e5b42341.js";
        if (14902 === e) return "94acebc54f6ea120.js";
        if (14955 === e) return "6a8f2ae723ad813a.js"
    }, c.miniCssF = e => {
        if (50869 === e) return "d47fa7f5e61148d4.ltr.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "ef46db3751d8e999.vendor.ltr.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                3905: 1,
                53697: 1,
                67115: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                85140: 1,
                14842: 1,
                77367: 1,
                47845: 1,
                69774: 1,
                29179: 1,
                93060: 1,
                97412: 1,
                99137: 1,
                57257: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                91821: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                7822: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                74103: 1,
                90451: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "ef46db3751d8e999.ltr.css";
        if (50971 === e) return "638e8938c76a575e.ltr.css";
        if (76703 === e) return "82a10fe01b3171ad.ltr.css";
        if (28646 === e) return "4878e9aab965ea40.ltr.css";
        if (49392 === e) return "e71066744fca056b.ltr.css";
        if (29046 === e) return "f6e522ba1b73f662.ltr.css";
        if (49210 === e) return "5f1d4839e07de62c.ltr.css";
        if (28338 === e) return "71dec1f5d11e3f66.ltr.css";
        if (65133 === e) return "05624d166fe81780.ltr.css";
        if (20520 === e) return "f8678f5d2a496896.ltr.css";
        if (80117 === e) return "aed61a49fdfc513b.ltr.css";
        if (35011 === e) return "ca10385ab7f3657c.ltr.css";
        if (50634 === e) return "5b2241d885919c07.ltr.css";
        if (76301 === e) return "c26b2c36671e4247.ltr.css";
        if (1794 === e) return "5b7fe8f909b06739.ltr.css";
        if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
        if (91969 === e) return "924c43291449318d.ltr.css";
        if (60205 === e) return "ee8b17ce4967cfe1.ltr.css"
    }, c.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
        if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (95433 === e) return "c166e5d20ad58f4e.5a9ync.vendor.rtl.css";
        if (21389 === e) return "ee6f30cef025fb91.rtl.css";
        if (50869 === e) return "4f05c1b2bf63d608.rtl.css";
        if ({
                61454: 1,
                68772: 1,
                85225: 1,
                59981: 1,
                2956: 1,
                45366: 1,
                96826: 1
            }[e]) return "c166e5d20ad58f4e.vendor.rtl.css";
        if ({
                71059: 1,
                21023: 1,
                30270: 1,
                32915: 1,
                12942: 1,
                49830: 1,
                39314: 1,
                45085: 1,
                61615: 1,
                52358: 1,
                52356: 1,
                70665: 1,
                81623: 1,
                97751: 1,
                48376: 1,
                63891: 1,
                47604: 1,
                6151: 1,
                61442: 1,
                10412: 1,
                3465: 1,
                3905: 1,
                53697: 1,
                67115: 1,
                83191: 1,
                32255: 1,
                33581: 1,
                73539: 1,
                35672: 1,
                83126: 1,
                49350: 1,
                42283: 1,
                89840: 1,
                10785: 1,
                42617: 1,
                19326: 1,
                25360: 1,
                15816: 1,
                83785: 1,
                98384: 1,
                39927: 1,
                30203: 1,
                58899: 1,
                80978: 1,
                34449: 1,
                5925: 1,
                52595: 1,
                39412: 1,
                70038: 1,
                21877: 1,
                12894: 1,
                44374: 1,
                67587: 1,
                38207: 1,
                99925: 1,
                46384: 1,
                67896: 1,
                84151: 1,
                63963: 1,
                61372: 1,
                14433: 1,
                63299: 1,
                90063: 1,
                68255: 1,
                10188: 1,
                58911: 1,
                20284: 1,
                67810: 1,
                85140: 1,
                14842: 1,
                77367: 1,
                47845: 1,
                69774: 1,
                29179: 1,
                93060: 1,
                97412: 1,
                99137: 1,
                57257: 1,
                83296: 1,
                79101: 1,
                38423: 1,
                26271: 1,
                61433: 1,
                49235: 1,
                19750: 1,
                10242: 1,
                19827: 1,
                91821: 1,
                92815: 1,
                45699: 1,
                21829: 1,
                56782: 1,
                87246: 1,
                38660: 1,
                7822: 1,
                60650: 1,
                87911: 1,
                37438: 1,
                73825: 1,
                57914: 1,
                37906: 1,
                77181: 1,
                19656: 1,
                32901: 1,
                24459: 1,
                47798: 1,
                89303: 1,
                57399: 1,
                19289: 1,
                13794: 1,
                10316: 1,
                61316: 1,
                47523: 1,
                2906: 1,
                4450: 1,
                45749: 1,
                50463: 1,
                38734: 1,
                47510: 1,
                218: 1,
                68629: 1,
                61161: 1,
                74103: 1,
                90451: 1,
                16621: 1,
                13073: 1,
                53256: 1,
                14902: 1,
                14955: 1
            }[e]) return "c166e5d20ad58f4e.rtl.css";
        if (50971 === e) return "1e246b15020f607d.rtl.css";
        if (76703 === e) return "aecb2a1fb82ef161.rtl.css";
        if (28646 === e) return "1eaafa4788aa3654.rtl.css";
        if (49392 === e) return "b53e0b8f14174717.rtl.css";
        if (29046 === e) return "1991a15a9b55f670.rtl.css";
        if (49210 === e) return "b4bd268b7e5afaa4.rtl.css";
        if (28338 === e) return "7cf7805937173758.rtl.css";
        if (65133 === e) return "5e44a47af6e0da97.rtl.css";
        if (20520 === e) return "29bdbb1d75c8c7a3.rtl.css";
        if (80117 === e) return "7dac84e36568326f.rtl.css";
        if (35011 === e) return "be92cdc2c813e15f.rtl.css";
        if (50634 === e) return "3759df5a77daebac.rtl.css";
        if (76301 === e) return "1a581700cca19699.rtl.css";
        if (1794 === e) return "b197b394e4f55ce1.rtl.css";
        if (14408 === e) return "918171a1aa694966.rtl.css";
        if (91969 === e) return "d41a1c13df702638.rtl.css";
        if (60205 === e) return "272adea3752f60f0.rtl.css"
    }, c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.hmd = e => {
        if (!(e = Object.create(e)).children) e.children = [];
        return Object.defineProperty(e, "exports", {
            enumerable: !0,
            set: () => {
                throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
            }
        }), e
    }, c.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), f = {}, n = "@canva/web:", c.l = (e, r, t, s) => {
        if (!f[e]) {
            var i, a;
            if (void 0 !== t)
                for (var u = document.getElementsByTagName("script"), d = 0; d < u.length; d++) {
                    var o = u[d];
                    if (o.getAttribute("src") == e || o.getAttribute("data-webpack") == n + t) {
                        i = o;
                        break
                    }
                }
            if (!i) {
                if (a = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc) i.setAttribute("nonce", c.nc);
                i.setAttribute("data-webpack", n + t), i.src = e
            }
            f[e] = [r];
            var l = (r, t) => {
                    i.onerror = i.onload = null, clearTimeout(b);
                    var n = f[e];
                    if (delete f[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(t))), r) return r(t)
                },
                b = setTimeout(l.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = l.bind(null, i.onerror), i.onload = l.bind(null, i.onload), a && document.head.appendChild(i)
        } else f[e].push(r)
    }, c.r = e => {
        if ("undefined" != typeof Symbol && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => {
        if (e.paths = [], !e.children) e.children = [];
        return e
    }, (() => {
        const e = c.e,
            r = function e(r, t, f) {
                return r().catch((function(n) {
                    return 0 === f ? Promise.reject(n) : (s = t, new Promise((function(e) {
                        setTimeout(e, s)
                    }))).then((function() {
                        return e(r, t, f - 1)
                    }));
                    var s
                }))
            };
        c.e = function(t) {
            return r((function() {
                return e(t)
            }), 1e3, 5)
        }
    })(), c.p = "", (() => {
        if (self.__batch_chunks__) ! function(e, r, t, f, n, s, i, c, a, u) {
            const d = e.l;
            let o = [];
            const l = [];
            for (const C of document.head.querySelectorAll('link[rel="prefetch"][href]')) {
                const e = C.getAttribute("href");
                e && l.push(e)
            }
            let b = e => document.head.appendChild(e);
            e.l = function(e, r, n, i) {
                for (let t = 0; t < l.length; t++)
                    if (l[t].endsWith(e)) return l.splice(t, 1), d(e, r, n, i);
                const c = a && e.endsWith(".strings.js") ? p : h;
                if (t) {
                    if (0 === c.files.length) Promise.resolve().then((() => {
                        O(c.files, m), c.files = [], c.sourcemapSize = 0
                    }));
                    const r = _(e);
                    if (c.files.length >= 1 && c.sourcemapSize + r > s || c.files.length >= f) O(c.files, m), c.files = [], c.sourcemapSize = 0;
                    c.sourcemapSize += r
                } else {
                    if (j++ < 10) return d(e, r, n, i);
                    if (0 === c.files.length) setTimeout((() => k(c.files, m)), 1)
                }
                c.files.push({
                    src: e,
                    callback: function(t) {
                        if ("load" === t.type) r(t);
                        else window.batchFailedAssetCount = (window.batchFailedAssetCount || 0) + 1, d(e, r, n, i)
                    },
                    originalLoad: () => {
                        d(e, r, n, i)
                    }
                })
            }, e.loadCss = function(e, r) {
                const n = e.getAttribute("href");
                if (b = r || b, t) {
                    if (0 === o.length) Promise.resolve().then((() => {
                        O(o, y), o = [], v = 0
                    }));
                    const e = _(n);
                    if (o.length >= 1 && v + e > s || o.length >= f) O(o, y), o = [], v = 0;
                    v += e
                } else {
                    if (g++ < 15) return r(e);
                    if (0 === o.length) setTimeout((() => k(o, y)), 1)
                }
                o.push({
                    src: n,
                    callback: t => {
                        if ("load" === t.type) e.onload && e.onload(t);
                        else r(e)
                    },
                    originalLoad: () => {
                        r(e)
                    }
                })
            };
            let j = 0;
            const h = {
                    files: [],
                    sourcemapSize: 0
                },
                p = {
                    files: [],
                    sourcemapSize: 0
                };

            function m(e, t) {
                const f = document.createElement("script");
                let n;
                const s = e => {
                    f.onerror = f.onload = null, clearTimeout(n), f.parentNode && f.parentNode.removeChild(f), t("string" == typeof e ? {
                        type: "error",
                        target: {}
                    } : e)
                };
                f.onload = f.onerror = s, f.src = e, f.async = !1, n = setTimeout((() => s({
                    type: "timeout",
                    target: f
                })), r), document.head.appendChild(f)
            }
            let g = 0,
                v = 0;

            function y(e, r) {
                const t = document.createElement("link");
                t.onload = t.onerror = e => r(e), t.href = e, t.rel = "stylesheet", b(t)
            }

            function _(e) {
                const r = n(),
                    t = e.substring(r.length);
                return t ? i[t] || 0 : 0
            }

            function w() {
                const e = n(),
                    r = new URL(window.location.href);
                if (null == e ? void 0 : e.startsWith("http")) {
                    const {
                        protocol: r,
                        host: t
                    } = new URL(e);
                    return `${r}//chunk-composing.${t.split(".").slice(-2).join(".")}`
                } else if (["localhost", "127.0.0.1"].includes(r.hostname) && r.searchParams.get("pageLoadWorkerUrl")) return r.searchParams.get("pageLoadWorkerUrl");
                else return r.origin
            }
            async function k(e, r) {
                const t = n();
                let a, d = 0,
                    o = [];
                try {
                    a = self.navigator.serviceWorker
                } catch {}
                const l = c && (null == a ? void 0 : a.controller) ? await async function(e) {
                    const r = await caches.open(u),
                        t = [];
                    for (const f of e)
                        if (await r.match(f.src)) f.originalLoad();
                        else t.push(f);
                    return t
                }(e) : e;
                for (const n of l) {
                    const e = n.src.substring(t.length),
                        r = e ? i[e] || 0 : 0;
                    if (o.length >= 1 && d + r > s || o.length >= f) b(o), o = [], d = 0;
                    o.push(n), d += r
                }

                function b(e) {
                    if (1 === e.length) return void e[0].originalLoad();
                    const f = w(),
                        n = e.map((({
                            src: e
                        }) => e.substring(t.length))).join("+");
                    r(`${f}/chunk-batch/${n}`, (r => {
                        for (const {
                                callback: t,
                                src: f
                            } of e) t({
                            type: r.type,
                            target: {
                                src: f,
                                href: f
                            }
                        })
                    }))
                }
                o.length && b(o), e.length = 0
            }

            function O(e, r) {
                if (0 === e.length) return;
                const t = n();
                if (1 !== e.length) r(`${w()}/chunk-batch/${e.map((({src:e})=>e.substring(t.length))).join("+")}`, (r => {
                    for (const {
                            callback: t,
                            src: f
                        } of e) t({
                        type: r.type,
                        target: {
                            src: f,
                            href: f
                        }
                    })
                }));
                else e[0].originalLoad()
            }
        }(c, 12e4, self.__sync_batch_chunks__, 40, (() => c.p), 10485760, {
            "c1a9432812739a9f.ltr.css": 451810,
            "ca15c7395d08aa0b.js": 13492800,
            "ee6f30cef025fb91.rtl.css": 451822,
            "55e60bcbf13f7476.runtime.js": 76185,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "001d039c107b0438.vendor.js": 2219515,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "411de7fe679f1413.5a9ync.vendor.js": 85008,
            "c0feee7212ef7ec1.i3d79q.vendor.js": 705391,
            "d47fa7f5e61148d4.ltr.css": 7483,
            "cc5ef1fc9c875255.js": 36630,
            "4f05c1b2bf63d608.rtl.css": 7483,
            "048252aca513298a.vendor.js": 158490,
            "68f927d4d76307b6.vendor.js": 125594,
            "265ba06de98c55a1.js": 122358,
            "638e8938c76a575e.ltr.css": 412,
            "19ccd5a90589132c.js": 170822,
            "1e246b15020f607d.rtl.css": 414,
            "82a10fe01b3171ad.ltr.css": 2554,
            "ae8d80bfa05a1d69.js": 23925,
            "aecb2a1fb82ef161.rtl.css": 2554,
            "b3341b67b869254b.js": 306657,
            "c4bb44a315c70eca.js": 13577,
            "4878e9aab965ea40.ltr.css": 2339,
            "cdc45295495b3d3b.js": 405651,
            "1eaafa4788aa3654.rtl.css": 2339,
            "45648a3d236819ce.js": 77321,
            "2d0cd51724c242af.js": 91954,
            "ceefe5e0ce193310.js": 84949,
            "beee70d939a50ad0.js": 1467,
            "aab39d0406151293.js": 2994,
            "3ad1d0cfb5b81feb.js": 12247,
            "555560f53679985f.js": 40882,
            "1122b92e0b866468.js": 29529,
            "630c9ae2efbb7a86.vendor.js": 168645,
            "e71066744fca056b.ltr.css": 3310,
            "f64d61ceb8ae3226.js": 1794578,
            "b53e0b8f14174717.rtl.css": 3310,
            "684ea96b4ad0c8cd.js": 7482,
            "e0486cae713b50d0.js": 102928,
            "5b888d290eb0fce9.js": 9306,
            "3fc02161a29de042.js": 1315,
            "3485748edaacef4b.js": 115626,
            "07ebf145264382ce.js": 148081,
            "5583489495ed1690.js": 43385,
            "a8ac3e53adc69476.js": 43460,
            "e691670c15974941.js": 137517,
            "f6e522ba1b73f662.ltr.css": 322,
            "8c2590459dec4ed0.js": 73595,
            "1991a15a9b55f670.rtl.css": 322,
            "030bcbe60955116e.js": 1779,
            "f06b5867c2dffbb5.js": 192358,
            "2938f09410d41452.js": 872,
            "6903ee93666fe534.js": 5251,
            "5c129dd54bd34f32.js": 31452,
            "71d4f569d38c4122.js": 11890,
            "be67218bb2aeff54.js": 6242,
            "fe8971384eadcc55.js": 5761,
            "3d9fb83c70d3a02b.js": 17110,
            "e2b3fdeefd5fc0e6.js": 24031,
            "194073a6ddf05526.js": 64243,
            "87b7d2c5713f2a7b.js": 13382,
            "d7e77a2b9fb88e38.js": 6031,
            "5f1d4839e07de62c.ltr.css": 2196,
            "a79015d0aaaffcd2.js": 25745,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "9419dc0a95eecb7f.js": 105936,
            "833c2d3c1792321b.js": 19638,
            "c3b6c8fef430548a.js": 22610,
            "a6aa17ba8f924eb8.js": 1648,
            "8be1d7435d9afd1f.js": 1680,
            "f709b03d6607921e.js": 1449,
            "55de6b515f366e2f.js": 1448,
            "26f32b18b778bbc6.js": 1447,
            "9fafff5781948bce.js": 1445,
            "90d64c1cea443c77.js": 1445,
            "a99cd46caadb59ef.js": 1561,
            "c5d1efe64d5d8536.js": 1650,
            "6a2abad768d26960.js": 1448,
            "1feaea462996e7cc.js": 1447,
            "b52dcaaeba4cf9da.js": 1458,
            "7f4baa8636680f01.js": 1448,
            "f70c9294f4d2a098.js": 1450,
            "a563e2215ade6e81.js": 1554,
            "d137df42f23219c5.js": 1552,
            "ac653eb23aec7766.js": 1537,
            "ac4e0ec172925731.js": 1453,
            "538d4cb7b5eb91ac.js": 1627,
            "81dccc4a7de559f3.js": 1728,
            "9dfa93e61ace1ad7.js": 1440,
            "4b74344a9ca80a62.js": 1539,
            "da97c07f9b2bbb7d.js": 1586,
            "945bdd94b30760e7.js": 1674,
            "f06f155840ea39f3.js": 1674,
            "dc578467d8c77361.js": 1684,
            "9310ad408a0100dc.js": 1585,
            "8829d13809d543e8.js": 1781,
            "df33f232beac897e.js": 1570,
            "41db761bbccf30db.js": 1671,
            "3597726ff7eed92a.js": 1626,
            "e50fe28c4a0c0c61.js": 1627,
            "825bc75cb3efd1c4.js": 181483,
            "71dec1f5d11e3f66.ltr.css": 360,
            "a8065d9a3bf0e93b.js": 388024,
            "7cf7805937173758.rtl.css": 360,
            "5efd82d6999e041b.js": 246559,
            "024dbc82452dde97.js": 90304,
            "9b5e7fd81c6572f0.js": 514229,
            "01e11c0b1ef12392.js": 85049,
            "bbc4395084c46f3b.js": 24249,
            "a8b8121b1ea73b44.js": 170140,
            "83d21b90dbe2d32f.js": 2185,
            "5fd7728e007e9d9e.js": 6218,
            "cb70cccb694a741e.js": 10118,
            "9d1bceb928b05298.js": 30028,
            "3c78ca738f91b1df.js": 10906,
            "dc02a65c81976a0d.js": 116112,
            "9abe6a792193b07d.js": 1091,
            "c77b53e9ea451410.js": 39451,
            "f957a4f8d3d18df7.js": 23635,
            "306ef1d3f557a06c.js": 148100,
            "fffc8763c5a7e2ac.js": 298216,
            "05624d166fe81780.ltr.css": 698,
            "1340349671e51580.js": 3846,
            "5e44a47af6e0da97.rtl.css": 698,
            "9b42c62ce7c3ae2d.js": 327099,
            "c4ce42ace4ac9493.js": 8299,
            "350e75d49802db73.js": 8324,
            "f8678f5d2a496896.ltr.css": 355,
            "9afe84cc01ab4825.js": 319021,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "3676075bc31ac30e.js": 299269,
            "7dac84e36568326f.rtl.css": 355,
            "85bce33e6c7f490b.js": 80024,
            "ca10385ab7f3657c.ltr.css": 354,
            "a2aaadbd42ff9820.js": 68685,
            "be92cdc2c813e15f.rtl.css": 354,
            "67353bdf8bd19909.js": 3520,
            "ad65e129f01643de.js": 207957,
            "e49518b0eab699fb.vendor.js": 12754,
            "2b48f39ef3d88294.vendor.js": 18823,
            "40a25f863a94a19a.js": 210552,
            "7cdcd7b0a429cbae.vendor.js": 13455,
            "60afe7b25e0fa6fd.js": 375288,
            "5b2241d885919c07.ltr.css": 360,
            "5a4eed739b57ca3c.js": 184158,
            "3759df5a77daebac.rtl.css": 360,
            "29323f6397130a62.js": 250711,
            "ba11709cbe4d8112.js": 78007,
            "cc36c10919bee34d.js": 10395,
            "7cc4926e03a833fc.js": 1701,
            "cb319a9e1d3b05d0.js": 1327,
            "863a158e3f328bdd.js": 1399,
            "2cc4d70684755af4.js": 1299,
            "d06ae789bb8b5756.js": 51278,
            "de0fa1f02a6f00d2.js": 1389,
            "68ebb00997b5e81e.js": 1313,
            "c26b2c36671e4247.ltr.css": 12215,
            "090c8abe3b71f1b6.js": 767768,
            "1a581700cca19699.rtl.css": 12215,
            "97cff3a461a9492b.js": 1317,
            "d562d2425f702e21.js": 41588,
            "5b7fe8f909b06739.ltr.css": 913,
            "64174d025bcfcfa1.js": 179150,
            "b197b394e4f55ce1.rtl.css": 913,
            "c98064e9889c02b9.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "c21722b8453c6e03.js": 21469,
            "918171a1aa694966.rtl.css": 446,
            "82b47738b2d573c6.js": 19177,
            "924c43291449318d.ltr.css": 263,
            "e7a6d6382bc2d6b5.js": 10944,
            "d41a1c13df702638.rtl.css": 263,
            "54d9a3f5c3044e05.js": 459808,
            "ee8b17ce4967cfe1.ltr.css": 8805,
            "4719a0a4c99fa6d1.js": 292976,
            "272adea3752f60f0.rtl.css": 8805,
            "73b069e804a223e6.js": 1299,
            "4697b8cb8d0acb30.js": 505518,
            "47369df51bb74389.js": 1992,
            "6f11a1a647edbeaf.js": 35920,
            "5342682a5cd81ea7.js": 86670,
            "90623597e5b42341.js": 733,
            "288efda7368cc45b.js": 4794,
            "c71b26f65eb7e390.js": 40504,
            "fa5e1d968a82af19.js": 196032,
            "94acebc54f6ea120.js": 6493,
            "6a8f2ae723ad813a.js": 39265
        }, self.__check_cache_batch_chunks__, "undefined" != typeof self && null != self.flags && null != self.flags.f2ace465 ? self.flags.f2ace465 : !1, "assets-2")
    })(), (() => {
        const e = JSON.parse('{"2650":58899,"10588":35672,"16139":45699,"26307":61433,"26759":39927,"29203":60650,"33714":33581,"38844":19827,"46989":49210,"77732":50463,"78999":57399,"82986":28646,"83888":49392,"88780":32915,"100606":38660,"103478":38734,"110247":63891,"126802":99925,"144616":68772,"150721":70665,"150778":30203,"186873":19656,"201268":14433,"217517":56782,"223244":26271,"227900":42283,"229894":97751,"249007":87911,"250851":46384,"252935":32901,"254588":91969,"261760":52595,"266055":4450,"292270":48376,"305660":68629,"314854":38207,"317158":21877,"335146":12894,"340693":50869,"356430":89840,"363531":73825,"365475":16621,"368036":57914,"411625":218,"428405":47523,"432521":83126,"456572":14955,"460541":24459,"465530":90063,"467611":49350,"469546":53256,"482919":49235,"490896":50634,"502437":4450,"519561":20520,"520679":25360,"521746":10188,"535189":13073,"545058":80978,"555434":73539,"556151":52358,"563026":70038,"567764":39314,"571038":67587,"572534":14902,"582389":61442,"594403":63299,"605338":10316,"617807":52356,"621071":34449,"636287":61372,"647312":19326,"652365":44374,"652535":50971,"658506":71059,"678201":68255,"696820":61161,"697956":47510,"700123":21829,"723859":90451,"730337":49830,"733653":87246,"738083":76301,"741114":37438,"744620":61454,"777985":39412,"796735":1794,"807817":45749,"819178":10785,"846915":14408,"852979":74103,"858761":77181,"870064":42617,"877501":63963,"905923":84151,"910906":76703,"933618":67896,"938629":15816,"959820":83785,"973664":37906,"978457":98384,"988209":80117,"990570":5925,"994944":60205}'),
            r = JSON.parse('{"218":[21023,28646],"1794":[45085,85225],"2906":[61316],"2956":[59981],"3465":[],"3905":[29046],"4450":[2906],"5925":[],"6151":[],"7822":[],"10188":[],"10242":[],"10316":[13794,89303],"10412":[29046,61442],"10785":[],"12894":[],"12942":[],"13073":[],"13794":[],"14408":[47798,96826],"14433":[],"14842":[85140],"14902":[45749],"14955":[],"15816":[],"16621":[],"19289":[],"19326":[],"19656":[],"19750":[],"19827":[10242,14842,20284,32255,38423,3905,57257,65133,67810,69774],"20284":[29046,53697,58911],"20520":[10242,14842,19750,32255,38423,3905,57257,67115,67810,79101,83296,93060,99137],"21023":[],"21389":[],"21829":[35011,38423,45366,49350,83191,92815],"21877":[],"24459":[12942],"25360":[],"25436":[],"26271":[28338],"28338":[14842,32255,38423,3905,57257,67115,67810,77367,79101,83296,93060,97412,99137],"28646":[30270],"29046":[61615],"29179":[58911],"30203":[],"30270":[],"32255":[29046,3465,47604,6151,83191],"32901":[],"32915":[21023,30270],"33581":[10412,32255,3905,67115],"34449":[],"35011":[29179,85140,89840],"35672":[],"37438":[],"37906":[7822],"38207":[],"38423":[],"38660":[19750,32255,38423,57257,83296,99137],"38734":[],"39314":[],"39412":[],"39927":[],"42283":[],"42617":[],"44374":[],"45085":[],"45366":[59981],"45699":[2956,35011,38423,49350,83191,92815],"45749":[],"46384":[],"47510":[28646],"47523":[19289,61316],"47604":[],"47798":[],"47845":[29046],"48376":[],"49210":[],"49235":[38423,3905,67115,93060,97412,99137],"49350":[],"49392":[45085,52356,85225],"49830":[12942],"50463":[],"50634":[32255,38423,57257,58911,67810,77367,79101,83296],"50869":[],"50971":[],"52356":[52358],"52358":[61615],"52595":[],"53256":[2906],"53697":[],"56782":[20284,29179,47604,47845,57257,69774,77367,83296,92815],"57257":[10412],"57399":[89303],"57914":[],"58899":[],"58911":[],"59981":[],"60205":[19289],"60650":[7822],"61161":[28646],"61316":[13794],"61372":[],"61433":[28338],"61442":[],"61454":[],"61615":[],"63299":[],"63891":[48376],"63963":[],"65133":[19750,77367,83296],"67115":[29046,53697],"67587":[],"67810":[],"67896":[],"68255":[],"68629":[28646],"68772":[],"69588":[],"69774":[],"70038":[],"70665":[],"71059":[],"73539":[3465],"73825":[],"74103":[28646],"76301":[],"76703":[],"77181":[],"77367":[],"79101":[],"80117":[10242,19750,20284,32255,38423,3905,57257,67810,79101,91821],"80978":[],"81623":[],"83126":[],"83191":[],"83296":[85140],"83785":[],"84151":[],"85140":[29046,81623],"85225":[],"87246":[20284,3465,38423,3905,47604,6151,65133,83191,91821],"87911":[],"89303":[],"89840":[],"90063":[],"90451":[],"91821":[83296,99137],"91969":[47798,96826],"92815":[],"93060":[20284,29179,47845,6151,85140],"95433":[],"96826":[],"97412":[85140],"97751":[81623],"98384":[],"99137":[69774,85140],"99925":[]}'),
            t = (e, f, n) => {
                if (!n.has(e)) return n.add(e), r[e].forEach((e => t(e, f, n))), f.push(e), f
            };
        c.me = function(r) {
            const f = e[r];
            if (null == f) return Promise.resolve(c(r));
            const n = t(f, [], new Set);
            return Promise.all(n.map((e => c.e(e)))).then((() => c(r)))
        }
    })(), (() => {
        const e = {};
        c.f.locale = function(r, t) {
            ! function(e, r, t) {
                if (null == r[e]) {
                    const t = self.cmsg;
                    if (!t || !t.assets) return;
                    const f = t.loaded,
                        n = t.locale || "en";
                    if (f && f[e + "_" + n]) return;
                    const s = t.assets[n] && t.assets[n][e] && t.assets[n][e].js;
                    if (!s) return;
                    r[e] = Promise.all(s.map((t => new Promise(((f, n) => {
                        const s = c.p + t;
                        c.l(s, (s => {
                            if ("load" === s.type) r[e] = 0, f();
                            else delete r[e], n(new Error(`Fail to load message files@${t}`))
                        }), "ensure-locale-" + e, e)
                    })))))
                }
                const f = r[e];
                if (f) t.push(f)
            }(r, e, t)
        }
    })(), (() => {
        let e = "undefined" != typeof self && void 0 !== self.document ? self.document.body.parentElement.getAttribute("dir") : "ltr";
        if ("ltr" !== e && "rtl" !== e) console.warn("Could not determine the direction of text, please check that the dir attribute is set on the html tag"), e = "ltr";
        if ("rtl" === e) c.miniCssF = c.miniCssFRtl
    })(), (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((r, t) => {
                    var f = c.miniCssF(e),
                        n = c.p + f;
                    if (((e, r) => {
                            for (var t = document.getElementsByTagName("link"), f = 0; f < t.length; f++) {
                                var n = (i = t[f]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === e || n === r)) return i
                            }
                            var s = document.getElementsByTagName("style");
                            for (f = 0; f < s.length; f++) {
                                var i;
                                if ((n = (i = s[f]).getAttribute("data-href")) === e || n === r) return i
                            }
                        })(f, n)) return r();
                    ((e, r, t, f, n) => {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", s.onerror = s.onload = t => {
                                if (s.onerror = s.onload = null, "load" === t.type) f();
                                else {
                                    var i = t && ("load" === t.type ? "missing" : t.type),
                                        c = t && t.target && t.target.href || r,
                                        a = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                    if (a.code = "CSS_CHUNK_LOAD_FAILED", a.type = i, a.request = c, s.parentNode) s.parentNode.removeChild(s);
                                    n(a)
                                }
                            }, s.href = r,
                            function(e) {
                                const r = e => {
                                    document.head.appendChild(e)
                                };
                                if (c.loadCss) c.loadCss(e, r);
                                else r(e)
                            }(s)
                    })(e, n, 0, r, t)
                })),
                r = {
                    98581: 0
                };
            c.f.miniCss = (t, f) => {
                if (r[t]) f.push(r[t]);
                else if (0 !== r[t] && {
                        1794: 1,
                        14408: 1,
                        20520: 1,
                        28338: 1,
                        28646: 1,
                        29046: 1,
                        35011: 1,
                        49210: 1,
                        49392: 1,
                        50634: 1,
                        50869: 1,
                        50971: 1,
                        60205: 1,
                        65133: 1,
                        76301: 1,
                        76703: 1,
                        80117: 1,
                        91969: 1
                    }[t]) f.push(r[t] = e(t).then((() => {
                    r[t] = 0
                }), (e => {
                    throw delete r[t], e
                })))
            }
        }
    })(), (() => {
        var e = {
            98581: 0
        };
        c.f.j = (r, t) => {
            var f = c.o(e, r) ? e[r] : void 0;
            if (0 !== f)
                if (f) t.push(f[2]);
                else if (98581 != r) {
                var n = new Promise(((t, n) => f = e[r] = [t, n]));
                t.push(f[2] = n);
                var s = c.p + c.u(r),
                    i = new Error;
                c.l(s, (t => {
                    if (c.o(e, r)) {
                        if (0 !== (f = e[r])) e[r] = void 0;
                        if (f) {
                            var n = t && ("load" === t.type ? "missing" : t.type),
                                s = t && t.target && t.target.src;
                            i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + s + ")", i.name = "ChunkLoadError", i.type = n, i.request = s, f[1](i)
                        }
                    }
                }), "chunk-" + r, r)
            } else e[r] = 0
        }, c.O.j = r => 0 === e[r];
        var r = (r, t) => {
                var f, n, [s, i, a] = t,
                    u = 0;
                if (s.some((r => 0 !== e[r]))) {
                    for (f in i)
                        if (c.o(i, f)) c.m[f] = i[f];
                    if (a) var d = a(c)
                }
                if (r) r(t);
                for (; u < s.length; u++) {
                    if (n = s[u], c.o(e, n) && e[n]) e[n][0]();
                    e[n] = 0
                }
                return c.O(d)
            },
            t = self.webpackChunk_canva_web = self.webpackChunk_canva_web || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })()
})();
//# sourceMappingURL=sourcemaps/55e60bcbf13f7476.runtime.js.map