module.exports = {

"[project]/lib/i18n.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "i18n": (()=>i18n)
});
const i18n = {
    defaultLanguage: 'en',
    languages: [
        'en',
        'cn'
    ],
    hideLocale: 'default-locale'
};
}}),
"[project]/app/[lang]/layout.config.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "baseOptions": (()=>baseOptions)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/i18n.ts [app-rsc] (ecmascript)");
;
;
;
const baseOptions = (locale)=>{
    return {
        i18n: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["i18n"],
        nav: {
            title: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-bold text-2xl flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logo.png",
                        alt: "RMinte Docs",
                        width: 28,
                        height: 28
                    }, void 0, false, {
                        fileName: "[project]/app/[lang]/layout.config.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    "RMinte Docs"
                ]
            }, void 0, true, {
                fileName: "[project]/app/[lang]/layout.config.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        },
        // see https://fumadocs.dev/docs/ui/navigation/links
        links: []
    };
};
}}),
"[project]/app/[lang]/(home)/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Layout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/layouts/home.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f5b$lang$5d2f$layout$2e$config$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/[lang]/layout.config.tsx [app-rsc] (ecmascript)");
;
;
;
async function Layout({ params, children }) {
    const { lang } = await params;
    const options = {
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f5b$lang$5d2f$layout$2e$config$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["baseOptions"])(lang),
        nav: {
            enabled: false
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$layouts$2f$home$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomeLayout"], {
        className: "home-layout",
        ...options,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/[lang]/(home)/layout.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=_2ea6a966._.js.map