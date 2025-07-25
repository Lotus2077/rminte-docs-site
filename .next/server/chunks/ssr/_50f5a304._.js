module.exports = {

"[project]/app/[lang]/layout.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$2_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$react$40$19$2e$1$2e$8_$5f40$types$2b$react$40$19$2e$1$2e$8_nex_694037d2ba39ff74d4be41e44117e87b$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$provider$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js [app-rsc] (ecmascript)");
;
;
// translations
const cn = {
    search: '搜索',
    searchNoResult: '没有找到结果',
    toc: '目录',
    tocNoHeadings: '没有找到目录',
    lastUpdate: '最后更新',
    chooseLanguage: '选择语言',
    nextPage: '下一页',
    previousPage: '上一页',
    chooseTheme: '选择主题',
    editOnGithub: '在GitHub上编辑'
};
// available languages that will be displayed on UI
// make sure `locale` is consistent with your i18n config
const locales = [
    {
        name: 'English',
        locale: 'en'
    },
    {
        name: 'Chinese',
        locale: 'cn'
    }
];
async function RootLayout({ params, children }) {
    const lang = (await params).lang;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        suppressHydrationWarning: true,
        lang: lang,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$2_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$react$40$19$2e$1$2e$8_$5f40$types$2b$react$40$19$2e$1$2e$8_nex_694037d2ba39ff74d4be41e44117e87b$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$provider$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RootProvider"], {
                i18n: {
                    locale: lang,
                    locales,
                    translations: {
                        cn
                    }[lang]
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/app/[lang]/layout.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/[lang]/layout.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/[lang]/layout.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18nLabel": (()=>I18nLabel),
    "NavProvider": (()=>NavProvider),
    "RootProvider": (()=>RootProvider),
    "SearchOnly": (()=>SearchOnly),
    "SearchProvider": (()=>SearchProvider),
    "SidebarProvider": (()=>SidebarProvider),
    "StylesProvider": (()=>StylesProvider),
    "TreeContextProvider": (()=>TreeContextProvider),
    "useI18n": (()=>useI18n),
    "useNav": (()=>useNav),
    "usePageStyles": (()=>usePageStyles),
    "useSearchContext": (()=>useSearchContext),
    "useSidebar": (()=>useSidebar),
    "useTreeContext": (()=>useTreeContext),
    "useTreePath": (()=>useTreePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const I18nLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call I18nLabel() from the server but I18nLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "I18nLabel");
const NavProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavProvider() from the server but NavProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "NavProvider");
const RootProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootProvider() from the server but RootProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "RootProvider");
const SearchOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchOnly() from the server but SearchOnly is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "SearchOnly");
const SearchProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchProvider() from the server but SearchProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "SearchProvider");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "SidebarProvider");
const StylesProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StylesProvider() from the server but StylesProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "StylesProvider");
const TreeContextProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreeContextProvider() from the server but TreeContextProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "TreeContextProvider");
const useI18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useI18n() from the server but useI18n is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useI18n");
const useNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNav() from the server but useNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useNav");
const usePageStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePageStyles() from the server but usePageStyles is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "usePageStyles");
const useSearchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSearchContext() from the server but useSearchContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useSearchContext");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useSidebar");
const useTreeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTreeContext() from the server but useTreeContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useTreeContext");
const useTreePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTreePath() from the server but useTreePath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js <module evaluation>", "useTreePath");
}}),
"[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "I18nLabel": (()=>I18nLabel),
    "NavProvider": (()=>NavProvider),
    "RootProvider": (()=>RootProvider),
    "SearchOnly": (()=>SearchOnly),
    "SearchProvider": (()=>SearchProvider),
    "SidebarProvider": (()=>SidebarProvider),
    "StylesProvider": (()=>StylesProvider),
    "TreeContextProvider": (()=>TreeContextProvider),
    "useI18n": (()=>useI18n),
    "useNav": (()=>useNav),
    "usePageStyles": (()=>usePageStyles),
    "useSearchContext": (()=>useSearchContext),
    "useSidebar": (()=>useSidebar),
    "useTreeContext": (()=>useTreeContext),
    "useTreePath": (()=>useTreePath)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const I18nLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call I18nLabel() from the server but I18nLabel is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "I18nLabel");
const NavProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NavProvider() from the server but NavProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "NavProvider");
const RootProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RootProvider() from the server but RootProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "RootProvider");
const SearchOnly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchOnly() from the server but SearchOnly is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "SearchOnly");
const SearchProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SearchProvider() from the server but SearchProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "SearchProvider");
const SidebarProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SidebarProvider() from the server but SidebarProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "SidebarProvider");
const StylesProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call StylesProvider() from the server but StylesProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "StylesProvider");
const TreeContextProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TreeContextProvider() from the server but TreeContextProvider is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "TreeContextProvider");
const useI18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useI18n() from the server but useI18n is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useI18n");
const useNav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useNav() from the server but useNav is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useNav");
const usePageStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call usePageStyles() from the server but usePageStyles is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "usePageStyles");
const useSearchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSearchContext() from the server but useSearchContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useSearchContext");
const useSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useSidebar() from the server but useSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useSidebar");
const useTreeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTreeContext() from the server but useTreeContext is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useTreeContext");
const useTreePath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call useTreePath() from the server but useTreePath is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js", "useTreePath");
}}),
"[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$2_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$react$40$19$2e$1$2e$8_$5f40$types$2b$react$40$19$2e$1$2e$8_nex_694037d2ba39ff74d4be41e44117e87b$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$provider$2f$index$2e$js__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$2_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$react$40$19$2e$1$2e$8_$5f40$types$2b$react$40$19$2e$1$2e$8_nex_694037d2ba39ff74d4be41e44117e87b$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$provider$2f$index$2e$js__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/fumadocs-ui@15.6.2_@types+react-dom@19.1.6_@types+react@19.1.8__@types+react@19.1.8_nex_694037d2ba39ff74d4be41e44117e87b/node_modules/fumadocs-ui/dist/provider/index.js (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$fumadocs$2d$ui$40$15$2e$6$2e$2_$40$types$2b$react$2d$dom$40$19$2e$1$2e$6_$40$types$2b$react$40$19$2e$1$2e$8_$5f40$types$2b$react$40$19$2e$1$2e$8_nex_694037d2ba39ff74d4be41e44117e87b$2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$provider$2f$index$2e$js__$28$client__reference$2f$proxy$29$__);
}}),

};

//# sourceMappingURL=_50f5a304._.js.map