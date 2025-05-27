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
        if (50869 === e) return "06af4c4cc1e4bb60.js";
        if (61454 === e) return "048252aca513298a.vendor.js";
        if (68772 === e) return "68f927d4d76307b6.vendor.js";
        if (71059 === e) return "e1140c34c6d2c403.js";
        if (50971 === e) return "8dbaad2dc02d52de.js";
        if (76703 === e) return "c5dc8c905ba8f19f.js";
        if (21023 === e) return "925c96ca55e79ab4.js";
        if (30270 === e) return "870ca2cb27b159ab.js";
        if (32915 === e) return "1e089dab623581b8.js";
        if (28646 === e) return "a7a706890f3e33f9.js";
        if (12942 === e) return "9022ea68fe7ffe7f.js";
        if (49830 === e) return "ce91f1925de2a351.js";
        if (39314 === e) return "3fc1e79e32887720.js";
        if (85225 === e) return "630c9ae2efbb7a86.vendor.js";
        if (45085 === e) return "3401190a93bbaefd.js";
        if (61615 === e) return "68ca0ad8097330f4.js";
        if (52358 === e) return "e84b97faac69fafe.js";
        if (52356 === e) return "178d03003774dccc.js";
        if (49392 === e) return "17280b0c87c57006.js";
        if (70665 === e) return "7f664f93d984cc05.js";
        if (81623 === e) return "fd83669051833114.js";
        if (97751 === e) return "2884729e20fbed11.js";
        if (48376 === e) return "60c107a0157a6b02.js";
        if (63891 === e) return "6445c6c80f5c08cf.js";
        if (47604 === e) return "25e8945b41b90890.js";
        if (6151 === e) return "14a4b8e7588cb036.js";
        if (61442 === e) return "7b8f456f57cd7aa0.js";
        if (29046 === e) return "8ce63a34434018e8.js";
        if (10412 === e) return "c3a8b8f724303674.js";
        if (3465 === e) return "cabe86ace6650113.js";
        if (3905 === e) return "f9c21e144c1293dd.js";
        if (53697 === e) return "c72f7cb9ea86db7e.js";
        if (67115 === e) return "58cf44f252dbaf43.js";
        if (83191 === e) return "fa2edd1dcef9d04a.js";
        if (32255 === e) return "1b474063c4f12516.js";
        if (33581 === e) return "89917ff440e86d10.js";
        if (73539 === e) return "b7f359fe1e965225.js";
        if (35672 === e) return "043fe74c39449f87.js";
        if (83126 === e) return "82831f6c8ab012a7.js";
        if (49210 === e) return "9f74e8c39514c375.js";
        if (49350 === e) return "149dedf448e704ad.js";
        if (42283 === e) return "da6b64bbd49d4d86.js";
        if (89840 === e) return "84c0a89ed2ba2f4f.js";
        if (10785 === e) return "b155dbaac1288e5a.js";
        if (42617 === e) return "be13a7ce42df0c91.js";
        if (19326 === e) return "662b2c85da9a1fe3.js";
        if (25360 === e) return "28c1cf1df025bdcc.js";
        if (15816 === e) return "086bec517d6198d9.js";
        if (83785 === e) return "c15009c02a1087de.js";
        if (98384 === e) return "a0855ec8decc8100.js";
        if (39927 === e) return "33102c610cc2500e.js";
        if (30203 === e) return "0d38e524700a1bdc.js";
        if (58899 === e) return "cb9338a71a9f20de.js";
        if (80978 === e) return "ece638ab3c53a802.js";
        if (34449 === e) return "a2f8d05be30edb3f.js";
        if (5925 === e) return "498dee79938d3740.js";
        if (52595 === e) return "ff4f5c43f2d9f165.js";
        if (39412 === e) return "b7d6774b0e696cdb.js";
        if (70038 === e) return "af4833f4e0918b6e.js";
        if (21877 === e) return "7e52c2a5f3ad6f08.js";
        if (12894 === e) return "cf509d6be9067c65.js";
        if (44374 === e) return "e00445ea24512587.js";
        if (67587 === e) return "8efc7b3edf2923bb.js";
        if (38207 === e) return "410512326a08fb96.js";
        if (99925 === e) return "d6b5850553d9daf0.js";
        if (46384 === e) return "1637c51b3e07c0b5.js";
        if (67896 === e) return "490795ed242ea682.js";
        if (84151 === e) return "aaa4366b3c461142.js";
        if (63963 === e) return "650f1ee40c260260.js";
        if (61372 === e) return "1d591c6602a2b268.js";
        if (14433 === e) return "56d3004eed42ec29.js";
        if (63299 === e) return "a8832a78c681970a.js";
        if (90063 === e) return "34fd5206835f196c.js";
        if (68255 === e) return "0f759df2e851d68e.js";
        if (10188 === e) return "9db6ca573a923b0c.js";
        if (58911 === e) return "3850e027c24905e7.js";
        if (20284 === e) return "d6508f5be216338b.js";
        if (67810 === e) return "44ad2f275c678c38.js";
        if (85140 === e) return "e060d03a07fbcc38.js";
        if (14842 === e) return "972252e647384610.js";
        if (77367 === e) return "ca1c2f6fea8bc9ab.js";
        if (47845 === e) return "371ac931d0236e2e.js";
        if (69774 === e) return "409f62d74ed1f050.js";
        if (29179 === e) return "fae707ab7f9fd382.js";
        if (93060 === e) return "578636e44c587e3f.js";
        if (97412 === e) return "193dcaa73ac1ecf9.js";
        if (99137 === e) return "06496c58f411811f.js";
        if (57257 === e) return "ae08c39121b284fd.js";
        if (83296 === e) return "7a9093ceb9065aab.js";
        if (79101 === e) return "1993353f084fce1d.js";
        if (38423 === e) return "c60da1c2ed16ce28.js";
        if (28338 === e) return "4e15f1c74275ec85.js";
        if (26271 === e) return "50eeb441485a0510.js";
        if (61433 === e) return "4fe0ef55a85db2f6.js";
        if (49235 === e) return "ac256df4a3c9969c.js";
        if (19750 === e) return "a5f8bc043af87e2d.js";
        if (65133 === e) return "f8caca5cefd6ac61.js";
        if (10242 === e) return "249b876e1eace07d.js";
        if (19827 === e) return "ea5f8d82069a1f4d.js";
        if (20520 === e) return "50aade3df13c867a.js";
        if (91821 === e) return "7df439cbde4dbccc.js";
        if (80117 === e) return "46bc857344f3b30a.js";
        if (92815 === e) return "dc40d3f8287eb3a0.js";
        if (35011 === e) return "66d14b55e401c549.js";
        if (59981 === e) return "e49518b0eab699fb.vendor.js";
        if (2956 === e) return "2b48f39ef3d88294.vendor.js";
        if (45699 === e) return "a72e193c356ed6d8.js";
        if (45366 === e) return "7cdcd7b0a429cbae.vendor.js";
        if (21829 === e) return "b027646d5d623782.js";
        if (56782 === e) return "0669a5ee54cd1934.js";
        if (50634 === e) return "9523b6cc2d733b88.js";
        if (87246 === e) return "fdc4de70086a6ea5.js";
        if (38660 === e) return "18fb9d026f100322.js";
        if (7822 === e) return "b3eef9ffb6c4235b.js";
        if (60650 === e) return "c7bbe50bb084c37e.js";
        if (87911 === e) return "cca7c940493efa5b.js";
        if (37438 === e) return "3d9baf3ebe0746f7.js";
        if (73825 === e) return "504e74ec0ea50a01.js";
        if (57914 === e) return "87609a66bb7376c5.js";
        if (37906 === e) return "f829b345f771c6a7.js";
        if (77181 === e) return "41591e0f489d17e0.js";
        if (19656 === e) return "bebeef79c1116883.js";
        if (76301 === e) return "47009270e7a983ad.js";
        if (32901 === e) return "c4e1561f73cdce2e.js";
        if (24459 === e) return "97ef904b07ae29d2.js";
        if (1794 === e) return "b49ce3ec81caa457.js";
        if (96826 === e) return "c98064e9889c02b9.vendor.js";
        if (47798 === e) return "85b25d69f02e5cd3.js";
        if (14408 === e) return "e8bde8237fb652fc.js";
        if (91969 === e) return "2f8da90bfa04df35.js";
        if (89303 === e) return "b8ce26fd07bc890b.js";
        if (57399 === e) return "dd87a4004aa4791e.js";
        if (19289 === e) return "6c978a0ec0acce1e.js";
        if (60205 === e) return "811c08bbf54cdf5b.js";
        if (13794 === e) return "65146d426c832b85.js";
        if (10316 === e) return "6a38f1070184c758.js";
        if (61316 === e) return "137f7892632dc4b4.js";
        if (47523 === e) return "5921fff0dd776d0f.js";
        if (2906 === e) return "9c46bf7564d9fec0.js";
        if (4450 === e) return "b34c8e934e175062.js";
        if (45749 === e) return "3fa52a392b9aaa70.js";
        if (50463 === e) return "3306fe457aff725c.js";
        if (38734 === e) return "e650b3683e8a526a.js";
        if (47510 === e) return "30e11d8af209ffe6.js";
        if (218 === e) return "66b03c9529151b21.js";
        if (68629 === e) return "963727154e9a5369.js";
        if (61161 === e) return "ee2d89983ac62846.js";
        if (74103 === e) return "bd628eacaa1bc22c.js";
        if (90451 === e) return "233a04e9496d4d9c.js";
        if (16621 === e) return "dd72a79aca23d4cf.js";
        if (13073 === e) return "e368aa53cfc7a9bf.js";
        if (53256 === e) return "59455465679104cd.js";
        if (14902 === e) return "90df178aceb9d349.js";
        if (14955 === e) return "dbae6b3ab44e0ade.js"
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
        if (76301 === e) return "6cd95ec3bdfd8887.ltr.css";
        if (1794 === e) return "5b7fe8f909b06739.ltr.css";
        if (14408 === e) return "9094dc9ec76e31ae.ltr.css";
        if (91969 === e) return "924c43291449318d.ltr.css";
        if (60205 === e) return "ee8b17ce4967cfe1.ltr.css"
    }, c.miniCssFRtl = e => {
        if (98581 === e) return "c166e5d20ad58f4e.runtime.rtl.css";
        if (69588 === e) return "c166e5d20ad58f4e.i3d79q.vendor.rtl.css";
        if (25436 === e) return "8e54262212aed57f.vendor.rtl.css";
        if (95433 === e) return "c166e5d20ad58f4e.5a9ync.vendor.rtl.css";
        if (21389 === e) return "23e2546af2fd6faa.rtl.css";
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
        if (76301 === e) return "24d8d7309fb8ff62.rtl.css";
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
            "e4ef9b0304756959.ltr.css": 452049,
            "ebe531a7e94403dd.js": 13465024,
            "23e2546af2fd6faa.rtl.css": 452061,
            "3c4f8f5485e6f0d1.runtime.js": 76185,
            "a0684b0780c739e9.vendor.ltr.css": 15361,
            "001d039c107b0438.vendor.js": 2219515,
            "8e54262212aed57f.vendor.rtl.css": 15361,
            "411de7fe679f1413.5a9ync.vendor.js": 85008,
            "c0feee7212ef7ec1.i3d79q.vendor.js": 705391,
            "d47fa7f5e61148d4.ltr.css": 7483,
            "06af4c4cc1e4bb60.js": 36630,
            "4f05c1b2bf63d608.rtl.css": 7483,
            "048252aca513298a.vendor.js": 158490,
            "68f927d4d76307b6.vendor.js": 125594,
            "e1140c34c6d2c403.js": 122358,
            "638e8938c76a575e.ltr.css": 412,
            "8dbaad2dc02d52de.js": 170822,
            "1e246b15020f607d.rtl.css": 414,
            "82a10fe01b3171ad.ltr.css": 2554,
            "c5dc8c905ba8f19f.js": 23925,
            "aecb2a1fb82ef161.rtl.css": 2554,
            "1e089dab623581b8.js": 302418,
            "925c96ca55e79ab4.js": 13577,
            "4878e9aab965ea40.ltr.css": 2339,
            "a7a706890f3e33f9.js": 405651,
            "1eaafa4788aa3654.rtl.css": 2339,
            "30e11d8af209ffe6.js": 77321,
            "66b03c9529151b21.js": 91954,
            "963727154e9a5369.js": 84949,
            "ee2d89983ac62846.js": 1467,
            "bd628eacaa1bc22c.js": 2994,
            "9022ea68fe7ffe7f.js": 12247,
            "ce91f1925de2a351.js": 40882,
            "3fc1e79e32887720.js": 29529,
            "630c9ae2efbb7a86.vendor.js": 168645,
            "e71066744fca056b.ltr.css": 3310,
            "17280b0c87c57006.js": 1794578,
            "b53e0b8f14174717.rtl.css": 3310,
            "68ca0ad8097330f4.js": 7482,
            "178d03003774dccc.js": 102928,
            "e84b97faac69fafe.js": 9306,
            "3401190a93bbaefd.js": 1315,
            "7f664f93d984cc05.js": 112559,
            "2884729e20fbed11.js": 148081,
            "fd83669051833114.js": 43385,
            "60c107a0157a6b02.js": 40393,
            "6445c6c80f5c08cf.js": 137517,
            "f6e522ba1b73f662.ltr.css": 322,
            "8ce63a34434018e8.js": 73595,
            "1991a15a9b55f670.rtl.css": 322,
            "14a4b8e7588cb036.js": 1779,
            "1b474063c4f12516.js": 192358,
            "cabe86ace6650113.js": 872,
            "fa2edd1dcef9d04a.js": 5251,
            "89917ff440e86d10.js": 31452,
            "58cf44f252dbaf43.js": 11890,
            "c72f7cb9ea86db7e.js": 6242,
            "f9c21e144c1293dd.js": 5761,
            "7b8f456f57cd7aa0.js": 17110,
            "c3a8b8f724303674.js": 24031,
            "b7f359fe1e965225.js": 64243,
            "043fe74c39449f87.js": 13382,
            "82831f6c8ab012a7.js": 6031,
            "5f1d4839e07de62c.ltr.css": 2196,
            "9f74e8c39514c375.js": 25745,
            "b4bd268b7e5afaa4.rtl.css": 2196,
            "149dedf448e704ad.js": 105936,
            "da6b64bbd49d4d86.js": 19638,
            "84c0a89ed2ba2f4f.js": 22610,
            "b155dbaac1288e5a.js": 1648,
            "be13a7ce42df0c91.js": 1680,
            "662b2c85da9a1fe3.js": 1449,
            "28c1cf1df025bdcc.js": 1448,
            "086bec517d6198d9.js": 1447,
            "c15009c02a1087de.js": 1445,
            "a0855ec8decc8100.js": 1445,
            "33102c610cc2500e.js": 1561,
            "0d38e524700a1bdc.js": 1650,
            "cb9338a71a9f20de.js": 1448,
            "ece638ab3c53a802.js": 1447,
            "a2f8d05be30edb3f.js": 1458,
            "498dee79938d3740.js": 1448,
            "ff4f5c43f2d9f165.js": 1450,
            "b7d6774b0e696cdb.js": 1554,
            "af4833f4e0918b6e.js": 1552,
            "7e52c2a5f3ad6f08.js": 1537,
            "cf509d6be9067c65.js": 1453,
            "e00445ea24512587.js": 1627,
            "8efc7b3edf2923bb.js": 1728,
            "410512326a08fb96.js": 1440,
            "d6b5850553d9daf0.js": 1539,
            "1637c51b3e07c0b5.js": 1586,
            "490795ed242ea682.js": 1674,
            "aaa4366b3c461142.js": 1674,
            "650f1ee40c260260.js": 1684,
            "1d591c6602a2b268.js": 1585,
            "56d3004eed42ec29.js": 1781,
            "a8832a78c681970a.js": 1570,
            "34fd5206835f196c.js": 1671,
            "0f759df2e851d68e.js": 1626,
            "9db6ca573a923b0c.js": 1627,
            "d6508f5be216338b.js": 181483,
            "71dec1f5d11e3f66.ltr.css": 360,
            "4e15f1c74275ec85.js": 388024,
            "7cf7805937173758.rtl.css": 360,
            "e060d03a07fbcc38.js": 246559,
            "193dcaa73ac1ecf9.js": 90304,
            "578636e44c587e3f.js": 514229,
            "409f62d74ed1f050.js": 85049,
            "ae08c39121b284fd.js": 24249,
            "7a9093ceb9065aab.js": 170140,
            "c60da1c2ed16ce28.js": 2185,
            "fae707ab7f9fd382.js": 6218,
            "3850e027c24905e7.js": 10118,
            "371ac931d0236e2e.js": 30028,
            "ca1c2f6fea8bc9ab.js": 10906,
            "50eeb441485a0510.js": 116112,
            "1993353f084fce1d.js": 1091,
            "972252e647384610.js": 39451,
            "06496c58f411811f.js": 23635,
            "4fe0ef55a85db2f6.js": 148100,
            "ac256df4a3c9969c.js": 298216,
            "05624d166fe81780.ltr.css": 698,
            "f8caca5cefd6ac61.js": 3846,
            "5e44a47af6e0da97.rtl.css": 698,
            "ea5f8d82069a1f4d.js": 327099,
            "249b876e1eace07d.js": 8299,
            "a5f8bc043af87e2d.js": 8324,
            "f8678f5d2a496896.ltr.css": 355,
            "50aade3df13c867a.js": 319021,
            "29bdbb1d75c8c7a3.rtl.css": 355,
            "aed61a49fdfc513b.ltr.css": 355,
            "46bc857344f3b30a.js": 299269,
            "7dac84e36568326f.rtl.css": 355,
            "7df439cbde4dbccc.js": 80024,
            "ca10385ab7f3657c.ltr.css": 354,
            "66d14b55e401c549.js": 68685,
            "be92cdc2c813e15f.rtl.css": 354,
            "dc40d3f8287eb3a0.js": 3520,
            "a72e193c356ed6d8.js": 207957,
            "e49518b0eab699fb.vendor.js": 12754,
            "2b48f39ef3d88294.vendor.js": 18823,
            "b027646d5d623782.js": 210552,
            "7cdcd7b0a429cbae.vendor.js": 13455,
            "0669a5ee54cd1934.js": 375288,
            "5b2241d885919c07.ltr.css": 360,
            "9523b6cc2d733b88.js": 184158,
            "3759df5a77daebac.rtl.css": 360,
            "fdc4de70086a6ea5.js": 250711,
            "18fb9d026f100322.js": 78007,
            "b3eef9ffb6c4235b.js": 10395,
            "c7bbe50bb084c37e.js": 1701,
            "cca7c940493efa5b.js": 1327,
            "504e74ec0ea50a01.js": 1399,
            "87609a66bb7376c5.js": 1299,
            "f829b345f771c6a7.js": 51278,
            "41591e0f489d17e0.js": 1389,
            "bebeef79c1116883.js": 1313,
            "6cd95ec3bdfd8887.ltr.css": 11984,
            "47009270e7a983ad.js": 764146,
            "24d8d7309fb8ff62.rtl.css": 11984,
            "c4e1561f73cdce2e.js": 1317,
            "97ef904b07ae29d2.js": 41588,
            "5b7fe8f909b06739.ltr.css": 913,
            "b49ce3ec81caa457.js": 179150,
            "b197b394e4f55ce1.rtl.css": 913,
            "c98064e9889c02b9.vendor.js": 648073,
            "9094dc9ec76e31ae.ltr.css": 446,
            "e8bde8237fb652fc.js": 21469,
            "918171a1aa694966.rtl.css": 446,
            "85b25d69f02e5cd3.js": 19177,
            "924c43291449318d.ltr.css": 263,
            "2f8da90bfa04df35.js": 10944,
            "d41a1c13df702638.rtl.css": 263,
            "dd87a4004aa4791e.js": 459808,
            "ee8b17ce4967cfe1.ltr.css": 8805,
            "811c08bbf54cdf5b.js": 292976,
            "272adea3752f60f0.rtl.css": 8805,
            "dd72a79aca23d4cf.js": 1299,
            "6a38f1070184c758.js": 505518,
            "65146d426c832b85.js": 1992,
            "5921fff0dd776d0f.js": 35920,
            "137f7892632dc4b4.js": 86670,
            "59455465679104cd.js": 733,
            "9c46bf7564d9fec0.js": 4794,
            "b34c8e934e175062.js": 40504,
            "3fa52a392b9aaa70.js": 196032,
            "90df178aceb9d349.js": 6493,
            "dbae6b3ab44e0ade.js": 39265
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
//# sourceMappingURL=sourcemaps/3c4f8f5485e6f0d1.runtime.js.map