(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/fumadocs-core@15.6.2_@types+react@19.1.8_next@15.3.5_react-dom@19.1.0_react@19.1.0__rea_31f065ea4b5baf55d8e1e5ed46afe00b/node_modules/fumadocs-core/dist/fetch-YKY7NMVE.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/search/client/fetch.ts
__turbopack_context__.s({
    "fetchDocs": (()=>fetchDocs)
});
var cache = /* @__PURE__ */ new Map();
async function fetchDocs(query, { api = "/api/search", locale, tag }) {
    const params = new URLSearchParams();
    params.set("query", query);
    if (locale) params.set("locale", locale);
    if (tag) params.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
    const key = `${api}?${params}`;
    const cached = cache.get(key);
    if (cached) return cached;
    const res = await fetch(key);
    if (!res.ok) throw new Error(await res.text());
    const result = await res.json();
    cache.set(key, result);
    return result;
}
;
}}),
}]);

//# sourceMappingURL=47445_fumadocs-core_dist_fetch-YKY7NMVE_1510c3c6.js.map