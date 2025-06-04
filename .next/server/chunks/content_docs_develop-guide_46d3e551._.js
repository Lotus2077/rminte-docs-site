module.exports = {

"[project]/content/docs/develop-guide/develop.mdx.js?collection=docs&hash=1747583123973 [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MDXContent),
    "frontmatter": (()=>frontmatter),
    "lastModified": (()=>lastModified),
    "structuredData": (()=>structuredData),
    "toc": (()=>toc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/callout.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/card.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/steps.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/tabs.js [app-route] (ecmascript)");
;
let lastModified = undefined;
let frontmatter = {
    "title": "System Architecture Documentation",
    "icon": "LaptopMinimal"
};
let structuredData = {
    "contents": [
        {
            "heading": "",
            "content": "type: info"
        },
        {
            "heading": "",
            "content": "This document provides a comprehensive technical reference for application developers, detailing the three-part system architecture and its key components. The system consists of a Computing Unit, Application Unit, and Hardware Control Unit, each with specific functions and configuration requirements."
        },
        {
            "heading": "1-computing-unit",
            "content": "type: tip"
        },
        {
            "heading": "1-computing-unit",
            "content": "The Computing Unit is the core processing unit of the system, responsible for running various AI models and inference frameworks"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "vLLM Inference Framework"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "Large Language Model (LLM) Service"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "Port: 58000"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "TEI Embedding Model"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "Port: 58080"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "TEI Reranker Model"
        },
        {
            "heading": "inference-framework-configuration",
            "content": "Port: 58081"
        },
        {
            "heading": "auto-launch-configuration",
            "content": "Path: ~/cfe/autorun.sh"
        },
        {
            "heading": "auto-launch-configuration",
            "content": "Description: Non-encrypted auto-launch script, user-editable, used to specify default auto-start model scripts"
        },
        {
            "heading": "2-application-unit",
            "content": "type: tip"
        },
        {
            "heading": "2-application-unit",
            "content": "The Application Unit is responsible for running and managing various application services, providing flexible application deployment solutions"
        },
        {
            "heading": "service-configuration",
            "content": "Nginx"
        },
        {
            "heading": "service-configuration",
            "content": "User application service"
        },
        {
            "heading": "service-configuration",
            "content": "Port: 80"
        },
        {
            "heading": "service-configuration",
            "content": "System Platforms"
        },
        {
            "heading": "service-configuration",
            "content": "Dify: Port 59080"
        },
        {
            "heading": "service-configuration",
            "content": "Altai (Local Deployment Version): Port 59299"
        },
        {
            "heading": "3-hardware-control-unit",
            "content": "type: tip"
        },
        {
            "heading": "3-hardware-control-unit",
            "content": "The Hardware Control Unit provides comprehensive hardware monitoring and configuration capabilities, ensuring stable system operation"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Hardware Monitoring Frontend"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Path: /sdcard/web"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Description: User-modifiable hardware monitoring frontend interface"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Matrix Display Logo Configuration"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Path: /sdcard/matrix.json"
        },
        {
            "heading": "storage-path-configuration-2",
            "content": "Description: Used for configuring matrix display logos"
        },
        {
            "heading": "port-management",
            "content": "Port ranges are clearly defined for each unit. Ensure no port conflicts during development"
        },
        {
            "heading": "storage-paths",
            "content": "Strictly follow the specified paths for model and application storage to ensure automatic system recognition and operation"
        },
        {
            "heading": "user-editable-content",
            "content": "Computing Unit's ~/cfe/autorun.sh script can be customized by users"
        },
        {
            "heading": "user-editable-content",
            "content": "Hardware Control Unit's /sdcard/web frontend interface supports user modifications"
        },
        {
            "heading": "security-considerations",
            "content": "All imported applications and scripts are in non-encrypted format. Ensure proper security measures"
        },
        {
            "heading": "security-considerations",
            "content": "type: warning"
        },
        {
            "heading": "security-considerations",
            "content": "For additional technical support or detailed configuration guidance, please contact the system administrator"
        },
        {
            "heading": "security-considerations",
            "content": "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. All rights reserved."
        }
    ],
    "headings": [
        {
            "id": "system-architecture-overview",
            "content": "System Architecture Overview"
        },
        {
            "id": "detailed-configuration-guide",
            "content": "Detailed Configuration Guide"
        },
        {
            "id": "1-computing-unit",
            "content": "1. Computing Unit"
        },
        {
            "id": "inference-framework-configuration",
            "content": "Inference Framework Configuration"
        },
        {
            "id": "storage-path-configuration",
            "content": "Storage Path Configuration"
        },
        {
            "id": "auto-launch-configuration",
            "content": "Auto-launch Configuration"
        },
        {
            "id": "2-application-unit",
            "content": "2. Application Unit"
        },
        {
            "id": "service-configuration",
            "content": "Service Configuration"
        },
        {
            "id": "storage-path-configuration-1",
            "content": "Storage Path Configuration"
        },
        {
            "id": "3-hardware-control-unit",
            "content": "3. Hardware Control Unit"
        },
        {
            "id": "storage-path-configuration-2",
            "content": "Storage Path Configuration"
        },
        {
            "id": "important-notes",
            "content": "Important Notes"
        },
        {
            "id": "port-management",
            "content": "Port Management"
        },
        {
            "id": "storage-paths",
            "content": "Storage Paths"
        },
        {
            "id": "user-editable-content",
            "content": "User-editable Content"
        },
        {
            "id": "security-considerations",
            "content": "Security Considerations"
        }
    ]
};
;
;
;
;
const toc = [
    {
        depth: 2,
        url: "#system-architecture-overview",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "System Architecture Overview"
        })
    },
    {
        depth: 2,
        url: "#detailed-configuration-guide",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Detailed Configuration Guide"
        })
    },
    {
        depth: 3,
        url: "#1-computing-unit",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "1. Computing Unit"
        })
    },
    {
        depth: 4,
        url: "#inference-framework-configuration",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Inference Framework Configuration"
        })
    },
    {
        depth: 4,
        url: "#storage-path-configuration",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Storage Path Configuration"
        })
    },
    {
        depth: 4,
        url: "#auto-launch-configuration",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Auto-launch Configuration"
        })
    },
    {
        depth: 3,
        url: "#2-application-unit",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "2. Application Unit"
        })
    },
    {
        depth: 4,
        url: "#service-configuration",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Service Configuration"
        })
    },
    {
        depth: 4,
        url: "#storage-path-configuration-1",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Storage Path Configuration"
        })
    },
    {
        depth: 3,
        url: "#3-hardware-control-unit",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "3. Hardware Control Unit"
        })
    },
    {
        depth: 4,
        url: "#storage-path-configuration-2",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Storage Path Configuration"
        })
    },
    {
        depth: 2,
        url: "#important-notes",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Important Notes"
        })
    },
    {
        depth: 3,
        url: "#port-management",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Port Management"
        })
    },
    {
        depth: 3,
        url: "#storage-paths",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Storage Paths"
        })
    },
    {
        depth: 3,
        url: "#user-editable-content",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "User-editable Content"
        })
    },
    {
        depth: 3,
        url: "#security-considerations",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "Security Considerations"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "This document provides a comprehensive technical reference for application developers, detailing the three-part system architecture and its key components. The system consists of a Computing Unit, Application Unit, and Hardware Control Unit, each with specific functions and configuration requirements."
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "system-architecture-overview",
                children: "System Architecture Overview"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Computing Unit",
                        icon: "🧠",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-blue-800 dark:text-blue-300",
                                        children: "Core Function"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "Runs inference frameworks and models, provides computing services"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP Address: 10.10.99.98"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Port Range: 58000~58999"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Multiple inference frameworks"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Flexible model storage solutions"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Application Unit",
                        icon: "🖥️",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-purple-800 dark:text-purple-300",
                                        children: "Core Function"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "Runs user applications and system platforms, provides application services"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP Address: 10.10.99.99"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Port Range: 59000~59299"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Multiple application deployments"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Efficient application management"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "Hardware Control Unit",
                        icon: "🔒",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-green-50 dark:bg-green-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-green-800 dark:text-green-300",
                                        children: "Core Function"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "Provides hardware monitoring and configuration"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP Address: 10.10.99.97"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Hardware monitoring service: Port 80"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Matrix display configuration"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "Real-time hardware status monitoring"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "detailed-configuration-guide",
                children: "Detailed Configuration Guide"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "1-computing-unit",
                children: "1. Computing Unit"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "The Computing Unit is the core processing unit of the system, responsible for running various AI models and inference frameworks"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "inference-framework-configuration",
                children: "Inference Framework Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "vLLM Inference Framework"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Large Language Model (LLM) Service"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Port: 58000"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "TEI Embedding Model"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Port: 58080"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "TEI Reranker Model"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Port: 58081"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "storage-path-configuration",
                children: "Storage Path Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tabs"], {
                items: [
                    'Manual Model Storage',
                    'Auto-launch Model Storage'
                ],
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.code, {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "~/cfe/model/"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── llm/          # Large Language Models"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── embedding/    # Embedding Models"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "└── reranker/     # Reranker Models"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.code, {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "~/cfe/autoModel/"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── llm/          # Large Language Models"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── embedding/    # Embedding Models"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "└── reranker/     # Reranker Models"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "auto-launch-configuration",
                children: "Auto-launch Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            "Path: ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                children: "~/cfe/autorun.sh"
                            })
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                        children: "Description: Non-encrypted auto-launch script, user-editable, used to specify default auto-start model scripts"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "2-application-unit",
                children: "2. Application Unit"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "The Application Unit is responsible for running and managing various application services, providing flexible application deployment solutions"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "service-configuration",
                children: "Service Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "Nginx"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "User application service"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Port: 80"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "System Platforms"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Dify: Port 59080"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Altai (Local Deployment Version): Port 59299"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "storage-path-configuration-1",
                children: "Storage Path Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tabs"], {
                items: [
                    'Import Application Storage',
                    'Runtime Application Storage'
                ],
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        className: "line",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            children: "~/cfe/app/    # Storage location for imported non-encrypted applications"
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        className: "line",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            children: "~/app/        # Runtime application storage (located on Application Unit's NVMe SSD)"
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "3-hardware-control-unit",
                children: "3. Hardware Control Unit"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "The Hardware Control Unit provides comprehensive hardware monitoring and configuration capabilities, ensuring stable system operation"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "storage-path-configuration-2",
                children: "Storage Path Configuration"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "Hardware Monitoring Frontend"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "Path: ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/web"
                                            })
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Description: User-modifiable hardware monitoring frontend interface"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "Matrix Display Logo Configuration"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "Path: ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/matrix.json"
                                            })
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Description: Used for configuring matrix display logos"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "important-notes",
                children: "Important Notes"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "port-management",
                                children: "Port Management"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "Port ranges are clearly defined for each unit. Ensure no port conflicts during development"
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "storage-paths",
                                children: "Storage Paths"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "Strictly follow the specified paths for model and application storage to ensure automatic system recognition and operation"
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "user-editable-content",
                                children: "User-editable Content"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "Computing Unit's ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "~/cfe/autorun.sh"
                                            }),
                                            " script can be customized by users"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "Hardware Control Unit's ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/web"
                                            }),
                                            " frontend interface supports user modifications"
                                        ]
                                    }),
                                    "\n"
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "security-considerations",
                                children: "Security Considerations"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "All imported applications and scripts are in non-encrypted format. Ensure proper security measures"
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "warning",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "For additional technical support or detailed configuration guidance, please contact the system administrator"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "my-8 text-center",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "text-sm text-gray-500 mt-8",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. All rights reserved."
                })
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
}}),
"[project]/content/docs/develop-guide/develop.cn.mdx.js?collection=docs&hash=1747583123973 [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MDXContent),
    "frontmatter": (()=>frontmatter),
    "lastModified": (()=>lastModified),
    "structuredData": (()=>structuredData),
    "toc": (()=>toc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/callout.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/card.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/steps.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/tabs.js [app-route] (ecmascript)");
;
let lastModified = undefined;
let frontmatter = {
    "title": "系统架构说明文档",
    "icon": "LaptopMinimal"
};
let structuredData = {
    "contents": [
        {
            "heading": "",
            "content": "type: info"
        },
        {
            "heading": "",
            "content": "本文档详细说明了系统的三部分架构及其关键组件，为应用开发商提供全面的技术参考。系统由计算单元、应用单元和硬件控制单元组成，每个单元都有其特定的功能和配置要求。"
        },
        {
            "heading": "1-计算单元",
            "content": "type: tip"
        },
        {
            "heading": "1-计算单元",
            "content": "计算单元是系统的核心处理单元，负责运行各种AI模型和推理框架"
        },
        {
            "heading": "推理框架配置",
            "content": "vLLM推理框架"
        },
        {
            "heading": "推理框架配置",
            "content": "大语言模型（LLM）服务"
        },
        {
            "heading": "推理框架配置",
            "content": "端口：58000"
        },
        {
            "heading": "推理框架配置",
            "content": "TEI Embedding模型"
        },
        {
            "heading": "推理框架配置",
            "content": "端口：58080"
        },
        {
            "heading": "推理框架配置",
            "content": "TEI Reranker模型"
        },
        {
            "heading": "推理框架配置",
            "content": "端口：58081"
        },
        {
            "heading": "自动拉起配置",
            "content": "路径：~/cfe/autorun.sh"
        },
        {
            "heading": "自动拉起配置",
            "content": "说明：非加密自动拉起脚本，用户可编辑，用于指定默认自动启动的模型脚本"
        },
        {
            "heading": "2-应用单元",
            "content": "type: tip"
        },
        {
            "heading": "2-应用单元",
            "content": "应用单元负责运行和管理各类应用服务，提供灵活的应用部署方案"
        },
        {
            "heading": "服务配置",
            "content": "Nginx"
        },
        {
            "heading": "服务配置",
            "content": "用户应用服务"
        },
        {
            "heading": "服务配置",
            "content": "端口：80"
        },
        {
            "heading": "服务配置",
            "content": "系统平台"
        },
        {
            "heading": "服务配置",
            "content": "Dify：端口59080"
        },
        {
            "heading": "服务配置",
            "content": "Altai（本地部署版本）：端口59299"
        },
        {
            "heading": "3-硬件控制单元",
            "content": "type: tip"
        },
        {
            "heading": "3-硬件控制单元",
            "content": "硬件控制单元提供全面的硬件监控和配置功能，确保系统稳定运行"
        },
        {
            "heading": "存储路径配置-2",
            "content": "硬件监控前端"
        },
        {
            "heading": "存储路径配置-2",
            "content": "路径：/sdcard/web"
        },
        {
            "heading": "存储路径配置-2",
            "content": "说明：用户可自行修改硬件监控的前端界面"
        },
        {
            "heading": "存储路径配置-2",
            "content": "矩阵显示Logo配置"
        },
        {
            "heading": "存储路径配置-2",
            "content": "路径：/sdcard/matrix.json"
        },
        {
            "heading": "存储路径配置-2",
            "content": "说明：用于配置矩阵显示的Logo"
        },
        {
            "heading": "端口管理",
            "content": "各单元的端口范围已明确划分，开发时请确保端口不冲突"
        },
        {
            "heading": "存储路径",
            "content": "请严格按照指定路径存储模型和应用，确保系统自动识别和运行"
        },
        {
            "heading": "用户可编辑内容",
            "content": "计算单元的~/cfe/autorun.sh脚本可由用户自定义"
        },
        {
            "heading": "用户可编辑内容",
            "content": "硬件控制单元的/sdcard/web前端界面支持用户修改"
        },
        {
            "heading": "安全性考虑",
            "content": "所有导入的应用和脚本均为非加密格式，请确保安全性"
        },
        {
            "heading": "安全性考虑",
            "content": "type: warning"
        },
        {
            "heading": "安全性考虑",
            "content": "如需进一步技术支持或详细配置指南，请联系系统管理员"
        },
        {
            "heading": "安全性考虑",
            "content": "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. 保留所有权利。"
        }
    ],
    "headings": [
        {
            "id": "系统架构概览",
            "content": "系统架构概览"
        },
        {
            "id": "详细配置说明",
            "content": "详细配置说明"
        },
        {
            "id": "1-计算单元",
            "content": "1. 计算单元"
        },
        {
            "id": "推理框架配置",
            "content": "推理框架配置"
        },
        {
            "id": "存储路径配置",
            "content": "存储路径配置"
        },
        {
            "id": "自动拉起配置",
            "content": "自动拉起配置"
        },
        {
            "id": "2-应用单元",
            "content": "2. 应用单元"
        },
        {
            "id": "服务配置",
            "content": "服务配置"
        },
        {
            "id": "存储路径配置-1",
            "content": "存储路径配置"
        },
        {
            "id": "3-硬件控制单元",
            "content": "3. 硬件控制单元"
        },
        {
            "id": "存储路径配置-2",
            "content": "存储路径配置"
        },
        {
            "id": "注意事项",
            "content": "注意事项"
        },
        {
            "id": "端口管理",
            "content": "端口管理"
        },
        {
            "id": "存储路径",
            "content": "存储路径"
        },
        {
            "id": "用户可编辑内容",
            "content": "用户可编辑内容"
        },
        {
            "id": "安全性考虑",
            "content": "安全性考虑"
        }
    ]
};
;
;
;
;
const toc = [
    {
        depth: 2,
        url: "#系统架构概览",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "系统架构概览"
        })
    },
    {
        depth: 2,
        url: "#详细配置说明",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "详细配置说明"
        })
    },
    {
        depth: 3,
        url: "#1-计算单元",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "1. 计算单元"
        })
    },
    {
        depth: 4,
        url: "#推理框架配置",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "推理框架配置"
        })
    },
    {
        depth: 4,
        url: "#存储路径配置",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "存储路径配置"
        })
    },
    {
        depth: 4,
        url: "#自动拉起配置",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "自动拉起配置"
        })
    },
    {
        depth: 3,
        url: "#2-应用单元",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "2. 应用单元"
        })
    },
    {
        depth: 4,
        url: "#服务配置",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "服务配置"
        })
    },
    {
        depth: 4,
        url: "#存储路径配置-1",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "存储路径配置"
        })
    },
    {
        depth: 3,
        url: "#3-硬件控制单元",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "3. 硬件控制单元"
        })
    },
    {
        depth: 4,
        url: "#存储路径配置-2",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "存储路径配置"
        })
    },
    {
        depth: 2,
        url: "#注意事项",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "注意事项"
        })
    },
    {
        depth: 3,
        url: "#端口管理",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "端口管理"
        })
    },
    {
        depth: 3,
        url: "#存储路径",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "存储路径"
        })
    },
    {
        depth: 3,
        url: "#用户可编辑内容",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "用户可编辑内容"
        })
    },
    {
        depth: 3,
        url: "#安全性考虑",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "安全性考虑"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        code: "code",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        li: "li",
        p: "p",
        pre: "pre",
        span: "span",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "本文档详细说明了系统的三部分架构及其关键组件，为应用开发商提供全面的技术参考。系统由计算单元、应用单元和硬件控制单元组成，每个单元都有其特定的功能和配置要求。"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "系统架构概览",
                children: "系统架构概览"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-6",
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "计算单元",
                        icon: "🧠",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-blue-800 dark:text-blue-300",
                                        children: "核心功能"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "负责运行推理框架和模型，提供计算服务"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP地址：10.10.99.98"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "端口范围：58000~58999"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "支持多种推理框架"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "灵活的模型存储方案"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "应用单元",
                        icon: "🖥️",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-purple-800 dark:text-purple-300",
                                        children: "核心功能"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "运行用户应用和系统平台，提供应用服务"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP地址：10.10.99.99"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "端口范围：59000~59299"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "支持多种应用部署"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "高效的应用管理"
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$card$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Card"], {
                        title: "硬件控制单元",
                        icon: "🔒",
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-3 bg-green-50 dark:bg-green-900/30 rounded-lg mb-2",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "font-bold text-sm text-green-800 dark:text-green-300",
                                        children: "核心功能"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "text-sm dark:text-gray-300",
                                        children: "提供硬件监控及相关配置"
                                    })
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                className: "list-disc pl-5 text-sm dark:text-gray-300",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "IP地址：10.10.99.97"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "硬件监控服务：端口80"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "支持矩阵显示配置"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                        children: "实时硬件状态监测"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "详细配置说明",
                children: "详细配置说明"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "1-计算单元",
                children: "1. 计算单元"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "计算单元是系统的核心处理单元，负责运行各种AI模型和推理框架"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "推理框架配置",
                children: "推理框架配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "vLLM推理框架"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "大语言模型（LLM）服务"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "端口：58000"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "TEI Embedding模型"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "端口：58080"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "TEI Reranker模型"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "端口：58081"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "存储路径配置",
                children: "存储路径配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tabs"], {
                items: [
                    '手动配置模型存储',
                    '自动拉起模型存储'
                ],
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.code, {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "~/cfe/model/"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── llm/          # 大语言模型"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── embedding/    # Embedding模型"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "└── reranker/     # Reranker模型"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.code, {
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "~/cfe/autoModel/"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── llm/          # 大语言模型"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "├── embedding/    # Embedding模型"
                                            })
                                        }),
                                        "\n",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            className: "line",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                                children: "└── reranker/     # Reranker模型"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "自动拉起配置",
                children: "自动拉起配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            "路径：",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                children: "~/cfe/autorun.sh"
                            })
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                        children: "说明：非加密自动拉起脚本，用户可编辑，用于指定默认自动启动的模型脚本"
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "2-应用单元",
                children: "2. 应用单元"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "应用单元负责运行和管理各类应用服务，提供灵活的应用部署方案"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "服务配置",
                children: "服务配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "Nginx"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "用户应用服务"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "端口：80"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "系统平台"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Dify：端口59080"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "Altai（本地部署版本）：端口59299"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "存储路径配置-1",
                children: "存储路径配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tabs"], {
                items: [
                    '导入应用存储',
                    '运行应用存储'
                ],
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        className: "line",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            children: "~/cfe/app/    # 导入非加密应用的存储位置"
                                        })
                                    })
                                })
                            })
                        })
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$tabs$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Tab"], {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.pre, {
                                className: "shiki shiki-themes github-light github-dark",
                                style: {
                                    "--shiki-light": "#24292e",
                                    "--shiki-dark": "#e1e4e8",
                                    "--shiki-light-bg": "#fff",
                                    "--shiki-dark-bg": "#24292e"
                                },
                                tabIndex: "0",
                                icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                        className: "line",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.span, {
                                            children: "~/app/        # 运行应用的存储位置（位于应用单元的NVMe硬盘）"
                                        })
                                    })
                                })
                            })
                        })
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "3-硬件控制单元",
                children: "3. 硬件控制单元"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "tip",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "硬件控制单元提供全面的硬件监控和配置功能，确保系统稳定运行"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                id: "存储路径配置-2",
                children: "存储路径配置"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "硬件监控前端"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "路径：",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/web"
                                            })
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "说明：用户可自行修改硬件监控的前端界面"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                children: "矩阵显示Logo配置"
                            }),
                            "\n",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "路径：",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/matrix.json"
                                            })
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "说明：用于配置矩阵显示的Logo"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "注意事项",
                children: "注意事项"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "端口管理",
                                children: "端口管理"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "各单元的端口范围已明确划分，开发时请确保端口不冲突"
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "存储路径",
                                children: "存储路径"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "请严格按照指定路径存储模型和应用，确保系统自动识别和运行"
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "用户可编辑内容",
                                children: "用户可编辑内容"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "计算单元的",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "~/cfe/autorun.sh"
                                            }),
                                            "脚本可由用户自定义"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "硬件控制单元的",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.code, {
                                                children: "/sdcard/web"
                                            }),
                                            "前端界面支持用户修改"
                                        ]
                                    }),
                                    "\n"
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                                id: "安全性考虑",
                                children: "安全性考虑"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "所有导入的应用和脚本均为非加密格式，请确保安全性"
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Callout"], {
                type: "warning",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "如需进一步技术支持或详细配置指南，请联系系统管理员"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "my-8 text-center",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "text-sm text-gray-500 mt-8",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. 保留所有权利。"
                })
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
}}),

};

//# sourceMappingURL=content_docs_develop-guide_46d3e551._.js.map