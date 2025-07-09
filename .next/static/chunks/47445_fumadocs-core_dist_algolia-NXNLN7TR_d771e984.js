(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/node_modules/.pnpm/fumadocs-core@15.6.2_@types+react@19.1.8_next@15.3.5_react-dom@19.1.0_react@19.1.0__rea_31f065ea4b5baf55d8e1e5ed46afe00b/node_modules/fumadocs-core/dist/algolia-NXNLN7TR.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/search/client/algolia.ts
__turbopack_context__.s({
    "groupResults": (()=>groupResults),
    "searchDocs": (()=>searchDocs)
});
function groupResults(hits) {
    const grouped = [];
    const scannedUrls = /* @__PURE__ */ new Set();
    for (const hit of hits){
        if (!scannedUrls.has(hit.url)) {
            scannedUrls.add(hit.url);
            grouped.push({
                id: hit.url,
                type: "page",
                url: hit.url,
                content: hit.title
            });
        }
        grouped.push({
            id: hit.objectID,
            type: hit.content === hit.section ? "heading" : "text",
            url: hit.section_id ? `${hit.url}#${hit.section_id}` : hit.url,
            content: hit.content
        });
    }
    return grouped;
}
async function searchDocs(query, { indexName, onSearch, client, locale, tag }) {
    if (query.length > 0) {
        const result = onSearch ? await onSearch(query, tag, locale) : await client.searchForHits({
            requests: [
                {
                    type: "default",
                    indexName,
                    query,
                    distinct: 5,
                    hitsPerPage: 10,
                    filters: tag ? `tag:${tag}` : void 0
                }
            ]
        });
        return groupResults(result.results[0].hits).filter((hit)=>hit.type === "page");
    }
    return [];
}
;
}}),
}]);

//# sourceMappingURL=47445_fumadocs-core_dist_algolia-NXNLN7TR_d771e984.js.map