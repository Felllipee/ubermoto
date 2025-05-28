(self["webpackChunk_canva_web"] = self["webpackChunk_canva_web"] || []).push([
    [12942], {

        /***/
        900337: function(_, __, __webpack_require__) {
            __webpack_require__.n_x = __webpack_require__.n;
            const __web_req__ = __webpack_require__;
            __web_req__(813110);
            self._c68b74ff4d61aaeea4f241f0854f5b1a = self._c68b74ff4d61aaeea4f241f0854f5b1a || {};
            (function(__c) {
                var krb = function(a) {
                        if (!a) return a;
                        try {
                            var b = new URL(a)
                        } catch (c) {
                            return a
                        }
                        if (typeof b.pathname === "undefined") return "unsupported";
                        typeof b.search !== "undefined" ? b.search && (b.search = irb(b.search)) : (b = a.indexOf("?"), a = b === -1 ? a : a.substring(0, b), b = new URL(a));
                        b.pathname = jrb(b.pathname);
                        return b.toString()
                    },
                    jrb = function(a) {
                        if (a.includes("/dist/renderer/")) return "/dist/renderer/" + a.split("/dist/renderer/").pop();
                        if (!a.startsWith("/design/")) return a;
                        const b = a.split("/");
                        if (b.length < 4 || lrb.has(b[3])) return a;
                        b[3] = "*****";
                        return b.join("/")
                    },
                    irb = function(a) {
                        if (!a || a.length === 0 || !a.startsWith("?")) return a;
                        a = a.slice(a.indexOf("?") + 1).split("&").filter(function(b) {
                            [b] = b.split("=");
                            return mrb.has(b)
                        });
                        return a.length > 0 ? `?${a.join("&")}` : ""
                    },
                    lrb = new Set("share acl remix view edit screen render animate watch published draft".split(" ")),
                    mrb = new Set("utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid q query clickId referrer signup_referrer redirect origin type category schema dclid _channel_track_key callback_id channel_account_id channel_ad_id channel_adgroup_id channel_campaign_id channel_keyword channel_keyword_id channel_link_type channel_name channel_utm_campaign channel_utm_content channel_utm_medium channel_utm_source channel_utm_term hash_key sat_cf tid link_version utm_adgroup utm_keyword template media create touchpoint_label touchpoint_correlation_id cta_source".split(" "));
                __c.nrb = {
                    jk: "resource_loaded",
                    yt(a) {
                        return __c.Ox({
                            source: a.source,
                            resource_id: a.eya,
                            success: a.Dc,
                            resource_type: a.resourceType,
                            version: a.version,
                            url: krb(a.url),
                            watermarked: a.Og,
                            spritesheet: a.ae,
                            height: a.height,
                            width: a.width,
                            quality: a.quality,
                            restricted_access: a.A0,
                            file_size: a.fileSize,
                            failure_reason: a.G8,
                            resource_already_loaded: a.Z$a,
                            performance_context: a.Hf == null ? void 0 : __c.Qx(a.Hf),
                            editing_context: a.Yh == null ? void 0 : __c.Px(a.Yh)
                        })
                    }
                };
            }).call(self, self._c68b74ff4d61aaeea4f241f0854f5b1a);
        }

    }
])
//# sourceMappingURL=sourcemaps/3ad1d0cfb5b81feb.js.map