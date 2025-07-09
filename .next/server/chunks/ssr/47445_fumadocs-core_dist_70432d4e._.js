module.exports = {

"[project]/node_modules/.pnpm/fumadocs-core@15.6.2_@types+react@19.1.8_next@15.3.5_react-dom@19.1.0_react@19.1.0__rea_31f065ea4b5baf55d8e1e5ed46afe00b/node_modules/fumadocs-core/dist/chunk-KAOEMCTI.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/utils/remove-undefined.ts
__turbopack_context__.s({
    "removeUndefined": (()=>removeUndefined)
});
function removeUndefined(value, deep = false) {
    const obj = value;
    for (const key of Object.keys(obj)){
        if (obj[key] === void 0) delete obj[key];
        if (deep && typeof obj[key] === "object" && obj[key] !== null) {
            removeUndefined(obj[key], deep);
        } else if (deep && Array.isArray(obj[key])) {
            obj[key].forEach((v)=>removeUndefined(v, deep));
        }
    }
    return value;
}
;
}}),
"[project]/node_modules/.pnpm/fumadocs-core@15.6.2_@types+react@19.1.8_next@15.3.5_react-dom@19.1.0_react@19.1.0__rea_31f065ea4b5baf55d8e1e5ed46afe00b/node_modules/fumadocs-core/dist/orama-cloud-I4WBDIAI.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "searchDocs": (()=>searchDocs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$2_$40$types$2b$react$40$19$2e$1$2e$8_next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$rea_31f065ea4b5baf55d8e1e5ed46afe00b$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-core@15.6.2_@types+react@19.1.8_next@15.3.5_react-dom@19.1.0_react@19.1.0__rea_31f065ea4b5baf55d8e1e5ed46afe00b/node_modules/fumadocs-core/dist/chunk-KAOEMCTI.js [app-ssr] (ecmascript)");
;
// src/search/client/orama-cloud.ts
async function searchDocs(query, options) {
    const list = [];
    const { index = "default", client, params: extraParams = {}, tag } = options;
    if (index === "crawler") {
        const result2 = await client.search({
            ...extraParams,
            term: query,
            where: {
                category: tag ? {
                    eq: tag.slice(0, 1).toUpperCase() + tag.slice(1)
                } : void 0,
                ...extraParams.where
            },
            limit: 10
        });
        if (!result2) return list;
        if (index === "crawler") {
            for (const hit of result2.hits){
                const doc = hit.document;
                list.push({
                    id: hit.id,
                    type: "page",
                    content: doc.title,
                    url: doc.path
                }, {
                    id: "page" + hit.id,
                    type: "text",
                    content: doc.content,
                    url: doc.path
                });
            }
            return list;
        }
    }
    const params = {
        ...extraParams,
        term: query,
        where: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$core$40$15$2e$6$2e$2_$40$types$2b$react$40$19$2e$1$2e$8_next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$rea_31f065ea4b5baf55d8e1e5ed46afe00b$2f$node_modules$2f$fumadocs$2d$core$2f$dist$2f$chunk$2d$KAOEMCTI$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeUndefined"])({
            tag,
            ...extraParams.where
        }),
        groupBy: {
            properties: [
                "page_id"
            ],
            maxResult: 7,
            ...extraParams.groupBy
        }
    };
    const result = await client.search(params);
    if (!result || !result.groups) return list;
    for (const item of result.groups){
        let addedHead = false;
        for (const hit of item.result){
            const doc = hit.document;
            if (!addedHead) {
                list.push({
                    id: doc.page_id,
                    type: "page",
                    content: doc.title,
                    url: doc.url
                });
                addedHead = true;
            }
            list.push({
                id: doc.id,
                content: doc.content,
                type: doc.content === doc.section ? "heading" : "text",
                url: doc.section_id ? `${doc.url}#${doc.section_id}` : doc.url
            });
        }
    }
    return list;
}
;
}}),

};

//# sourceMappingURL=47445_fumadocs-core_dist_70432d4e._.js.map