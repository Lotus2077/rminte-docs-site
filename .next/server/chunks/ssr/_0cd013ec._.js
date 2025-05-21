module.exports = {

"[project]/app/[lang]/(home)/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function HomePage() {
    const [gradients, setGradients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        gradient1: {
            background: "linear-gradient(-45deg, #e5f4fe, #e3effd, #f0ecfe, #f6eeff, #fcf0ff, #fdf0f7)",
            opacity: 1
        },
        gradient2: {
            background: "linear-gradient(45deg, #e3effd, #e5eeff, #f7f5ff, #fcf0ff, #fce7f2, #fdf0f7)",
            opacity: 0
        }
    });
    const generateGradient = ()=>{
        // Only blues, purples, and pinks with slightly reduced saturation
        const colors = [
            // Blues (less saturated)
            "#e5f4fe",
            "#e3effd",
            "#d0e6fd",
            "#b5d8fd",
            "#8ac0fa",
            "#6ea8f0",
            "#5b89e6",
            "#4f76d8",
            // Purples (less saturated)
            "#f0ecfe",
            "#e6e0fd",
            "#d8cffa",
            "#bfb0f5",
            "#a996ed",
            "#9280e2",
            "#7c6ad5",
            "#6a5cc0",
            // Pinks (less saturated)
            "#fdf0f7",
            "#fce7f2",
            "#fac5e3",
            "#f5a5c8",
            "#ea8ab6",
            "#d66d9d",
            "#c45585",
            "#af4e7b"
        ];
        // Shuffle and select colors
        const shuffled = [
            ...colors
        ].sort(()=>0.5 - Math.random());
        const selectedColors = shuffled.slice(0, Math.floor(Math.random() * 3) + 6);
        // Random angle
        const angle = Math.floor(Math.random() * 360);
        return `linear-gradient(${angle}deg, ${selectedColors.join(', ')})`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const transitionGradients = ()=>{
            // First transition: fade out gradient1, fade in gradient2
            setGradients((prev)=>({
                    gradient1: {
                        ...prev.gradient1,
                        opacity: 0
                    },
                    gradient2: {
                        ...prev.gradient2,
                        opacity: 1
                    }
                }));
            // After fade completes, prepare the next gradient for gradient1
            setTimeout(()=>{
                setGradients((prev)=>({
                        gradient1: {
                            background: generateGradient(),
                            opacity: 0
                        },
                        gradient2: {
                            ...prev.gradient2
                        }
                    }));
                // Start fading gradient1 back in and gradient2 out
                setTimeout(()=>{
                    setGradients((prev)=>({
                            gradient1: {
                                ...prev.gradient1,
                                opacity: 1
                            },
                            gradient2: {
                                ...prev.gradient2,
                                opacity: 0
                            }
                        }));
                    // After fade completes, prepare the next gradient for gradient2
                    setTimeout(()=>{
                        setGradients((prev)=>({
                                gradient1: {
                                    ...prev.gradient1
                                },
                                gradient2: {
                                    background: generateGradient(),
                                    opacity: 0
                                }
                            }));
                    }, 3000);
                }, 200);
            }, 3000);
        };
        // Initial gradient transition (slowed down)
        const intervalId = setInterval(transitionGradients, 12000);
        // Clean up
        return ()=>clearInterval(intervalId);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 -z-10",
                style: {
                    background: gradients.gradient1.background,
                    opacity: gradients.gradient1.opacity,
                    transition: "opacity 3s cubic-bezier(0.4, 0, 0.2, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/app/[lang]/(home)/page.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 -z-10",
                style: {
                    background: gradients.gradient2.background,
                    opacity: gradients.gradient2.opacity,
                    transition: "opacity 3s cubic-bezier(0.4, 0, 0.2, 1)"
                }
            }, void 0, false, {
                fileName: "[project]/app/[lang]/(home)/page.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex flex-1 flex-col items-center justify-center min-h-screen",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-black mb-4 text-2xl font-bold",
                            children: "Welcome to RMinte Docs"
                        }, void 0, false, {
                            fileName: "[project]/app/[lang]/(home)/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white",
                            children: [
                                "You can open",
                                ' ',
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/docs",
                                    className: "text-black font-semibold underline",
                                    children: "/docs"
                                }, void 0, false, {
                                    fileName: "[project]/app/[lang]/(home)/page.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                ' ',
                                "and see the documentation."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/[lang]/(home)/page.tsx",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/[lang]/(home)/page.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/[lang]/(home)/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),

};

//# sourceMappingURL=_0cd013ec._.js.map