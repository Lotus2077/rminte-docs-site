module.exports = {

"[project]/content/docs/deploy-guide/deploy.cn.mdx.js?collection=docs&hash=1747583123973 [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/*### 3. 软件配置与应用部署

<div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-lg border border-blue-100 dark:border-blue-800 overflow-hidden">
<div className="p-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-blue-200 dark:border-blue-700">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3" style={{ minWidth: '2.5rem' }}>
<span className="text-xl">⚙️</span>
</div>
<h4 className="text-lg font-semibold dark:text-white">管理界面设置</h4>
</div>

<ol className="pl-4 space-y-2 text-sm dark:text-gray-300">
<li className="pb-2 border-b border-gray-100 dark:border-gray-700">
<strong className="dark:text-white">访问管理界面：</strong> 浏览器访问 http://分配的IP地址:xxxx（ xxxx 为设备序列号后四位 ）
</li>
<li className="pb-2 border-b border-gray-100 dark:border-gray-700">
<strong className="dark:text-white">初始登录：</strong> 用户名：admin，密码：见设备底部标签
</li>
<li className="pb-2 border-b border-gray-100 dark:border-gray-700">
<strong className="dark:text-white">基础配置：</strong> 修改管理员密码、设置设备名称与时区
</li>
<li>
<strong className="dark:text-white">安全设置：</strong> 配置访问控制策略
</li>
</ol>

<div className="mt-3 p-2 bg-amber-50 dark:bg-amber-950/40 rounded-md text-amber-800 dark:text-amber-300 text-xs">
请务必在首次登录后立即修改默认密码，确保系统安全
</div>
</div>

<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-indigo-200 dark:border-indigo-700">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 mr-3" style={{ minWidth: '2.5rem' }}>
<span className="text-xl">🧠</span>
</div>
<h4 className="text-lg font-semibold dark:text-white">模型管理</h4>
</div>

<ol className="pl-4 space-y-2 text-sm dark:text-gray-300">
<li className="pb-2 border-b border-gray-100 dark:border-gray-700">
<strong className="dark:text-white">访问模型管理：</strong> 导航至管理界面中的"模型管理"
</li>
<li className="pb-2 border-b border-gray-100 dark:border-gray-700">
<strong className="dark:text-white">查看模型状态：</strong> 检查已加载模型列表与运行状态
</li>
<li>
<strong className="dark:text-white">加载新模型：</strong>
<ul className="list-disc pl-5 mt-1 space-y-1 dark:text-gray-400">
<li>将模型文件存入 CFexpress 卡上的指定目录</li>
<li>插入 RM-01 设备</li>
<li>等待设备自动扫描模型</li>
<li>加载完成并验证状态</li>
</ul>
</li>
</ol>
</div>

<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-green-200 dark:border-green-700">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-3" style={{ minWidth: '2.5rem' }}>
<span className="text-xl">📱</span>
</div>
<h4 className="text-lg font-semibold dark:text-white">应用部署</h4>
</div>

<div className="space-y-3 text-sm dark:text-gray-300">
<div>
<strong className="block mb-1 dark:text-white">部署流程：</strong>
<ol className="list-decimal pl-5 space-y-1">
<li>进入"应用管理"</li>
<li>点击"部署新应用"</li>
<li>选择部署方式</li>
<li>等待部署完成</li>
<li>配置应用参数</li>
</ol>
</div>

<div>
<strong className="block mb-1 dark:text-white">应用加载方式：</strong>
<div className="grid grid-cols-3 gap-2">
<div className="p-2 bg-green-50 dark:bg-green-900/30 rounded text-center border border-green-100 dark:border-green-800">
<div className="text-xs font-medium dark:text-green-300">存储卡加载</div>
<div className="text-xs text-green-700 dark:text-green-400">推荐</div>
</div>
<div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded text-center border border-blue-100 dark:border-blue-800">
<div className="text-xs font-medium dark:text-blue-300">Docker镜像</div>
<div className="text-xs text-blue-700 dark:text-blue-400">中级选项</div>
</div>
<div className="p-2 bg-purple-50 dark:bg-purple-900/30 rounded text-center border border-purple-100 dark:border-purple-800">
<div className="text-xs font-medium dark:text-purple-300">自研开发</div>
<div className="text-xs text-purple-700 dark:text-purple-400">高级选项</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-orange-200 dark:border-orange-800">
<div className="flex items-center mb-4">
<div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 mr-3" style={{ minWidth: '2.5rem' }}>
<span className="text-xl">🔐</span>
</div>
<h4 className="text-lg font-semibold dark:text-white">权限与访问控制</h4>
</div>

<div className="space-y-3 text-sm dark:text-gray-300">
<div className="flex flex-col space-y-2">
<div className="flex items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
<span className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 mr-2 text-xs">1</span>
<span><strong className="dark:text-white">创建企业管理员账户</strong>（管理模型和应用）</span>
</div>
<div className="flex items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
<span className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 mr-2 text-xs">2</span>
<span><strong className="dark:text-white">创建普通用户账户</strong>（使用应用）</span>
</div>
<div className="flex items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
<span className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 mr-2 text-xs">3</span>
<span><strong className="dark:text-white">设置访问权限</strong>（模型、应用级别）</span>
</div>
<div className="flex items-center p-2 bg-slate-50 dark:bg-slate-800 rounded">
<span className="w-5 h-5 inline-flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 text-xs">4</span>
<span><strong className="dark:text-white">配置身份验证策略</strong>（单点登录/LDAP）</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>*/ __turbopack_context__.s({
    "default": (()=>MDXContent),
    "frontmatter": (()=>frontmatter),
    "lastModified": (()=>lastModified),
    "structuredData": (()=>structuredData),
    "toc": (()=>toc)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/steps.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/fumadocs-ui/dist/components/callout.js [app-rsc] (ecmascript)");
;
let lastModified = undefined;
let frontmatter = {
    "title": "服务商部署指南",
    "icon": "Compass"
};
let structuredData = {
    "contents": [
        {
            "heading": "",
            "content": "type: info"
        },
        {
            "heading": "",
            "content": "欢迎使用 RMinte RM-01 便携式 AI 超算部署指南。本文档旨在帮助服务提供商了解如何借助 RM-01 为企业客户快速部署模型及 AI 应用，实现真正的\"即插即用\"AI 体验。"
        },
        {
            "heading": "概览",
            "content": "💼 服务商部署流程"
        },
        {
            "heading": "概览",
            "content": "❓ 常见问题解答"
        },
        {
            "heading": "概览",
            "content": "🛟 技术支持"
        },
        {
            "heading": "模型与应用准备",
            "content": "根据企业需求，提前准备好适合的模型和应用："
        },
        {
            "heading": "模型与应用准备",
            "content": "标准模型包：包含常用的开源模型，如 DeepSeek、智谱、Qwen 等"
        },
        {
            "heading": "模型与应用准备",
            "content": "行业专用模型包：根据企业所在行业，选择适合的垂直领域模型"
        },
        {
            "heading": "模型与应用准备",
            "content": "企业定制模型：如企业有自己训练的模型，确保已转换为适合 RM-01 运行的格式，并存入 CFexpress 卡上的指定目录"
        },
        {
            "heading": "模型与应用准备",
            "content": "企业定制化应用：基于 RMinte 平台使用 Dify 或者其他开发工具开发的AI应用，以加密的 Docker Image 形式存入 CFexpress 卡上的指定目录"
        },
        {
            "heading": "企业环境评估",
            "content": "在部署前进行环境评估："
        },
        {
            "heading": "企业环境评估",
            "content": "网络环境：评估 RM-01 按客户需求接入企业内部网络进行连接的可行性"
        },
        {
            "heading": "企业环境评估",
            "content": "电力供应：确保部署场所有稳定的电源供应"
        },
        {
            "heading": "企业环境评估",
            "content": "物理安全：评估设备放置位置的物理安全性，并制定相应安全保障方案"
        },
        {
            "heading": "企业环境评估",
            "content": "IT 基础设施：了解企业现有 IT 基础设施，确保 RM-01 能够顺利集成"
        },
        {
            "heading": "设备与配件核对",
            "content": "在交付企业前，请确保以下物品齐全："
        },
        {
            "heading": "设备安装",
            "content": "选择合适的位置放置 RM-01（桌面或专用机柜）"
        },
        {
            "heading": "设备安装",
            "content": "插入预装有所需模型和应用的 CFexpress 存储卡"
        },
        {
            "heading": "设备安装",
            "content": "插入用于加密的 MicroSD 卡（如适用）"
        },
        {
            "heading": "设备安装",
            "content": "连接电源适配器"
        },
        {
            "heading": "设备安装",
            "content": "如需有线网络，连接 USB-C 转网线适配器"
        },
        {
            "heading": "设备安装",
            "content": "type: warning"
        },
        {
            "heading": "设备安装",
            "content": "确保设备放置在通风良好的环境中，避免阻塞散热口。"
        },
        {
            "heading": "开机与初始化",
            "content": "按下电源按钮开机"
        },
        {
            "heading": "开机与初始化",
            "content": "设备将自动初始化并加载存储卡中的模型和应用（约需 5 分钟）"
        },
        {
            "heading": "开机与初始化",
            "content": "5分钟后，RM-01 将完成模型及应用的加载，并进入可使用状态"
        },
        {
            "heading": "开机与初始化",
            "content": "type: info"
        },
        {
            "heading": "开机与初始化",
            "content": "在初始化过程中，可通过 USB-C 端口连接笔记本电脑进行设备状态监控"
        },
        {
            "heading": "网络配置",
            "content": "通过 USB-C 端口（可加转接器）连接到企业局域网"
        },
        {
            "heading": "网络配置",
            "content": "配置网络参数："
        },
        {
            "heading": "网络配置",
            "content": "IP 地址（静态/DHCP）"
        },
        {
            "heading": "网络配置",
            "content": "子网掩码"
        },
        {
            "heading": "网络配置",
            "content": "网关"
        },
        {
            "heading": "网络配置",
            "content": "DNS 服务器"
        },
        {
            "heading": "网络配置",
            "content": "验证网络连接"
        },
        {
            "heading": "4-培训与交付",
            "content": "建议录制培训视频，以便管理员后续参考"
        },
        {
            "heading": "4-培训与交付",
            "content": "推荐针对不同部门用户定制培训内容，提高培训效果"
        },
        {
            "heading": "4-培训与交付",
            "content": "所有文档均提供电子版与打印版，可通过管理界面随时获取最新版本"
        },
        {
            "heading": "4-培训与交付",
            "content": "推荐使用标准化交付清单确保所有交付项目无遗漏"
        },
        {
            "heading": "5-售后支持",
            "content": "标准服务包含 12 个月远程支持"
        },
        {
            "heading": "5-售后支持",
            "content": "推荐每季度进行一次系统全面检查"
        },
        {
            "heading": "5-售后支持",
            "content": "可按需购买额外增值服务"
        },
        {
            "heading": "5-售后支持",
            "content": "提供灵活的服务级别协议选项，可根据企业需求定制具体响应时间和服务内容。所有 SLA 承诺均有服务质量保证，不达标准将提供服务补偿。"
        },
        {
            "heading": "技术支持",
            "content": "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. 保留所有权利。"
        }
    ],
    "headings": [
        {
            "id": "概览",
            "content": "概览"
        },
        {
            "id": "服务商部署流程",
            "content": "服务商部署流程"
        },
        {
            "id": "1-前期准备工作",
            "content": "1. 前期准备工作"
        },
        {
            "id": "模型与应用准备",
            "content": "模型与应用准备"
        },
        {
            "id": "企业环境评估",
            "content": "企业环境评估"
        },
        {
            "id": "设备与配件核对",
            "content": "设备与配件核对"
        },
        {
            "id": "2-硬件部署流程",
            "content": "2. 硬件部署流程"
        },
        {
            "id": "设备安装",
            "content": "设备安装"
        },
        {
            "id": "开机与初始化",
            "content": "开机与初始化"
        },
        {
            "id": "网络配置",
            "content": "网络配置"
        },
        {
            "id": "3-验证与测试",
            "content": "3. 验证与测试"
        },
        {
            "id": "4-培训与交付",
            "content": "4. 培训与交付"
        },
        {
            "id": "5-售后支持",
            "content": "5. 售后支持"
        },
        {
            "id": "常见问题解答",
            "content": "常见问题解答"
        },
        {
            "id": "技术支持",
            "content": "技术支持"
        }
    ]
};
;
;
const toc = [
    {
        depth: 2,
        url: "#概览",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "概览"
        })
    },
    {
        depth: 2,
        url: "#服务商部署流程",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "服务商部署流程"
        })
    },
    {
        depth: 3,
        url: "#1-前期准备工作",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "1. 前期准备工作"
        })
    },
    {
        depth: 4,
        url: "#模型与应用准备",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "模型与应用准备"
        })
    },
    {
        depth: 4,
        url: "#企业环境评估",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "企业环境评估"
        })
    },
    {
        depth: 4,
        url: "#设备与配件核对",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "设备与配件核对"
        })
    },
    {
        depth: 3,
        url: "#2-硬件部署流程",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "2. 硬件部署流程"
        })
    },
    {
        depth: 4,
        url: "#设备安装",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "设备安装"
        })
    },
    {
        depth: 4,
        url: "#开机与初始化",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "开机与初始化"
        })
    },
    {
        depth: 4,
        url: "#网络配置",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "网络配置"
        })
    },
    {
        depth: 3,
        url: "#3-验证与测试",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "3. 验证与测试"
        })
    },
    {
        depth: 3,
        url: "#4-培训与交付",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "4. 培训与交付"
        })
    },
    {
        depth: 3,
        url: "#5-售后支持",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "5. 售后支持"
        })
    },
    {
        depth: 2,
        url: "#常见问题解答",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "常见问题解答"
        })
    },
    {
        depth: 2,
        url: "#技术支持",
        title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: "技术支持"
        })
    }
];
function _createMdxContent(props) {
    const _components = {
        a: "a",
        h2: "h2",
        h3: "h3",
        h4: "h4",
        li: "li",
        ol: "ol",
        p: "p",
        strong: "strong",
        ul: "ul",
        ...props.components
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                type: "info",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "欢迎使用 RMinte RM-01 便携式 AI 超算部署指南。本文档旨在帮助服务提供商了解如何借助 RM-01 为企业客户快速部署模型及 AI 应用，实现真正的\"即插即用\"AI 体验。"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "概览",
                children: "概览"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                children: [
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.a, {
                            href: "#%E6%9C%8D%E5%8A%A1%E5%95%86%E9%83%A8%E7%BD%B2%E6%B5%81%E7%A8%8B",
                            children: "💼 服务商部署流程"
                        })
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.a, {
                            href: "#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E8%A7%A3%E7%AD%94",
                            children: "❓ 常见问题解答"
                        })
                    }),
                    "\n",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.a, {
                            href: "#%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81",
                            children: "🛟 技术支持"
                        })
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "服务商部署流程",
                children: "服务商部署流程"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "1-前期准备工作",
                children: "1. 前期准备工作"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "模型与应用准备",
                                children: "模型与应用准备"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "根据企业需求，提前准备好适合的模型和应用："
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "标准模型包"
                                            }),
                                            "：包含常用的开源模型，如 DeepSeek、智谱、Qwen 等"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "行业专用模型包"
                                            }),
                                            "：根据企业所在行业，选择适合的垂直领域模型"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "企业定制模型"
                                            }),
                                            "：如企业有自己训练的模型，确保已转换为适合 RM-01 运行的格式，并存入 CFexpress 卡上的指定目录"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "企业定制化应用"
                                            }),
                                            "：基于 RMinte 平台使用 Dify 或者其他开发工具开发的AI应用，以加密的 Docker Image 形式存入 CFexpress 卡上的指定目录"
                                        ]
                                    }),
                                    "\n"
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "企业环境评估",
                                children: "企业环境评估"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "在部署前进行环境评估："
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "网络环境"
                                            }),
                                            "：评估 RM-01 按客户需求接入企业内部网络进行连接的可行性"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "电力供应"
                                            }),
                                            "：确保部署场所有稳定的电源供应"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "物理安全"
                                            }),
                                            "：评估设备放置位置的物理安全性，并制定相应安全保障方案"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.strong, {
                                                children: "IT 基础设施"
                                            }),
                                            "：了解企业现有 IT 基础设施，确保 RM-01 能够顺利集成"
                                        ]
                                    }),
                                    "\n"
                                ]
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "设备与配件核对",
                                children: "设备与配件核对"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                children: "在交付企业前，请确保以下物品齐全："
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "p-4 border rounded-lg",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                        children: "RM-01 设备包"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                        className: "list-disc pl-6 mt-2",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "RM-01 主机"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "CFexpress Type B 存储卡（预装模型及应用）"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "快速入门指南"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "保修卡"
                                            })
                                        ]
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                        children: "RM-01 配件包"
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                        className: "list-disc pl-6 mt-2",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "MicroSD 卡（可选，用于加密）"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "USB-C 电源适配器（PD3.1，最高 140W）"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                children: "USB-C 转网线适配器"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "2-硬件部署流程",
                children: "2. 硬件部署流程"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Steps"], {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "设备安装",
                                children: "设备安装"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ol, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "选择合适的位置放置 RM-01（桌面或专用机柜）"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "插入预装有所需模型和应用的 CFexpress 存储卡"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "插入用于加密的 MicroSD 卡（如适用）"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "连接电源适配器"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "如需有线网络，连接 USB-C 转网线适配器"
                                    }),
                                    "\n"
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                                type: "warning",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                    children: "确保设备放置在通风良好的环境中，避免阻塞散热口。"
                                })
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "开机与初始化",
                                children: "开机与初始化"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ol, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "按下电源按钮开机"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "设备将自动初始化并加载存储卡中的模型和应用（约需 5 分钟）"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "5分钟后，RM-01 将完成模型及应用的加载，并进入可使用状态"
                                    }),
                                    "\n"
                                ]
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$callout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Callout"], {
                                type: "info",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                    children: "在初始化过程中，可通过 USB-C 端口连接笔记本电脑进行设备状态监控"
                                })
                            })
                        ]
                    }),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$fumadocs$2d$ui$2f$dist$2f$components$2f$steps$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Step"], {
                        children: [
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h4, {
                                id: "网络配置",
                                children: "网络配置"
                            }),
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ol, {
                                children: [
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "通过 USB-C 端口（可加转接器）连接到企业局域网"
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.li, {
                                        children: [
                                            "配置网络参数：",
                                            "\n",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])(_components.ul, {
                                                children: [
                                                    "\n",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                                        children: "IP 地址（静态/DHCP）"
                                                    }),
                                                    "\n",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                                        children: "子网掩码"
                                                    }),
                                                    "\n",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                                        children: "网关"
                                                    }),
                                                    "\n",
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                                        children: "DNS 服务器"
                                                    }),
                                                    "\n"
                                                ]
                                            }),
                                            "\n"
                                        ]
                                    }),
                                    "\n",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.li, {
                                        children: "验证网络连接"
                                    }),
                                    "\n"
                                ]
                            })
                        ]
                    })
                ]
            }),
            "\n",
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "3-验证与测试",
                children: "3. 验证与测试"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "mb-8 rounded-lg overflow-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 p-5 border border-emerald-100 dark:border-emerald-800",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                            className: "text-lg font-bold mb-4 text-center dark:text-white",
                            children: "全面测试清单"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border-l-4 border-blue-400",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-2",
                                                    style: {
                                                        minWidth: '2rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-sm",
                                                        children: "✓"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "font-semibold text-blue-800 dark:text-blue-300",
                                                    children: "功能测试"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "pl-10 list-disc text-sm space-y-2 text-slate-700 dark:text-slate-300",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "模型加载与运行测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "应用基本功能测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "用户授权与访问控制"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "离线环境功能验证"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border-l-4 border-purple-400",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-2",
                                                    style: {
                                                        minWidth: '2rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-sm",
                                                        children: "⚡"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "font-semibold text-purple-800 dark:text-purple-300",
                                                    children: "性能测试"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "pl-10 list-disc text-sm space-y-2 text-slate-700 dark:text-slate-300",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "模型推理速度测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "并发处理能力测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "高负载稳定性测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "资源使用监控"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border-l-4 border-green-400",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-8 h-8 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2",
                                                    style: {
                                                        minWidth: '2rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-sm",
                                                        children: "🔄"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "font-semibold text-green-800 dark:text-green-300",
                                                    children: "连接性测试"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "pl-10 list-disc text-sm space-y-2 text-slate-700 dark:text-slate-300",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "内部系统集成测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "API 连接测试"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "外部应用调用测试"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "mt-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-teal-100 dark:border-teal-800",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "flex",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "w-10 flex-shrink-0 pt-1",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "w-6 h-6 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                className: "text-xs",
                                                children: "💡"
                                            })
                                        })
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        className: "flex-grow",
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                className: "font-semibold text-sm mb-1 dark:text-white",
                                                children: "专业测试建议"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                className: "text-xs text-slate-600 dark:text-slate-400",
                                                children: "建议基于 RM-01 全面测试清单进行全面的功能基准测试，确保设备在客户环境中达到最佳性能。测试完成后生成测试报告，作为交付文档的一部分。"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "4-培训与交付",
                children: "4. 培训与交付"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "mb-8 rounded-lg overflow-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 p-6 border border-blue-100 dark:border-blue-800/60",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "col-span-1 md:col-span-2 bg-white dark:bg-gray-800/90 rounded-xl shadow-sm p-4 border border-indigo-100 dark:border-indigo-700/50",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-bold mb-3 text-center text-indigo-800 dark:text-indigo-300",
                                            children: "培训与交付流程图"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex flex-wrap justify-center items-center text-center",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-full md:w-1/4 p-2",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-700/40 h-full",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 mx-auto mb-2",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                    className: "text-blue-600 dark:text-blue-300 text-lg",
                                                                    children: "1"
                                                                })
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-sm dark:text-white",
                                                                children: "管理员培训"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                children: "基础配置与日常管理"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "hidden md:block w-10 text-gray-300 dark:text-gray-600",
                                                    children: "→"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-full md:w-1/4 p-2",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 border border-indigo-100 dark:border-indigo-700/40 h-full",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-800/60 mx-auto mb-2",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                    className: "text-indigo-600 dark:text-indigo-300 text-lg",
                                                                    children: "2"
                                                                })
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-sm dark:text-white",
                                                                children: "用户培训"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                children: "应用操作与使用技巧"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "hidden md:block w-10 text-gray-300 dark:text-gray-600",
                                                    children: "→"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-full md:w-1/4 p-2",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-100 dark:border-purple-700/40 h-full",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/60 mx-auto mb-2",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                    className: "text-purple-600 dark:text-purple-300 text-lg",
                                                                    children: "3"
                                                                })
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-sm dark:text-white",
                                                                children: "文档交付"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                children: "使用手册与技术文档"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-5 border border-blue-200 dark:border-blue-700/50 flex flex-col h-full",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-600 dark:text-blue-300 mr-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "👨‍💼"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold dark:text-white",
                                                    children: "企业管理员培训"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "grid grid-cols-1 sm:grid-cols-2 gap-2 flex-grow",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/20 rounded p-3 flex items-start",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "1"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "设备操作与维护"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "基本启停、硬件维护"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/20 rounded p-3 flex items-start",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "2"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "管理界面使用"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "系统设置与监控"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/20 rounded p-3 flex items-start",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "3"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "模型与应用管理"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "更新与配置"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/20 rounded p-3 flex items-start",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800/60 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "4"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "故障排查"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "常见问题诊断与解决"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 p-2 bg-amber-50 dark:bg-amber-900/20 rounded-md text-xs text-amber-800 dark:text-amber-300",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "建议录制培训视频，以便管理员后续参考"
                                            })
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-5 border border-indigo-200 dark:border-indigo-700/50 flex flex-col h-full",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-800/60 text-indigo-600 dark:text-indigo-300 mr-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "👥"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold dark:text-white",
                                                    children: "最终用户培训"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "pl-6 list-disc text-sm space-y-2 text-slate-700 dark:text-slate-300 flex-grow",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                                            className: "text-indigo-700 dark:text-indigo-300",
                                                            children: "应用访问方式"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400 mt-0.5",
                                                            children: "如何登录并找到需要的应用"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                                            className: "text-indigo-700 dark:text-indigo-300",
                                                            children: "基本操作指导"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400 mt-0.5",
                                                            children: "常用功能与操作流程演示"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                                            className: "text-indigo-700 dark:text-indigo-300",
                                                            children: "使用技巧与最佳实践"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400 mt-0.5",
                                                            children: "提高效率的专业建议"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("li", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("strong", {
                                                            className: "text-indigo-700 dark:text-indigo-300",
                                                            children: "常见问题解决"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400 mt-0.5",
                                                            children: "操作错误与异常情况处理"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-md text-xs text-indigo-800 dark:text-indigo-300",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "推荐针对不同部门用户定制培训内容，提高培训效果"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-6",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-5 border border-purple-200 dark:border-purple-700/50",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800/60 text-purple-600 dark:text-purple-300 mr-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "📄"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold dark:text-white",
                                                    children: "文档交付"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "grid grid-cols-2 gap-3 text-sm",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-700/40",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "font-medium mb-1 text-purple-800 dark:text-purple-300",
                                                            children: "设备使用手册"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400",
                                                            children: "硬件规格与基本操作指导"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-700/40",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "font-medium mb-1 text-purple-800 dark:text-purple-300",
                                                            children: "管理员指南"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400",
                                                            children: "系统管理与故障排除"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-700/40",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "font-medium mb-1 text-purple-800 dark:text-purple-300",
                                                            children: "用户操作指南"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400",
                                                            children: "应用使用步骤与说明"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-700/40",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "font-medium mb-1 text-purple-800 dark:text-purple-300",
                                                            children: "故障排除指南"
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "text-xs text-slate-600 dark:text-slate-400",
                                                            children: "常见问题与解决方案"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 p-2 bg-blue-100 dark:bg-blue-800/60 rounded-md text-xs text-blue-600 dark:text-blue-300",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "所有文档均提供电子版与打印版，可通过管理界面随时获取最新版本"
                                            })
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-5 border border-emerald-200 dark:border-emerald-700/50",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/60 text-emerald-600 dark:text-emerald-300 mr-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "✅"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold dark:text-white",
                                                    children: "设备交付确认"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-2 bg-slate-50 dark:bg-slate-800/80 rounded",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "w-6 h-6 inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/60 text-emerald-600 dark:text-emerald-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "✓"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "text-sm dark:text-gray-300",
                                                            children: "获取企业签署的验收单"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-2 bg-slate-50 dark:bg-slate-800/80 rounded",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "w-6 h-6 inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/60 text-emerald-600 dark:text-emerald-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "✓"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "text-sm dark:text-gray-300",
                                                            children: "确认所有配置与培训已完成"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-2 bg-slate-50 dark:bg-slate-800/80 rounded",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "w-6 h-6 inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/60 text-emerald-600 dark:text-emerald-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "✓"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "text-sm dark:text-gray-300",
                                                            children: "提供保修信息与支持联系方式"
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-2 bg-slate-50 dark:bg-slate-800/80 rounded",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "w-6 h-6 inline-flex items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-800/60 text-emerald-600 dark:text-emerald-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-xs",
                                                                children: "✓"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                            className: "text-sm dark:text-gray-300",
                                                            children: "预约首次远程检查与回访时间"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-md text-xs text-emerald-800 dark:text-emerald-300",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "推荐使用标准化交付清单确保所有交付项目无遗漏"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h3, {
                id: "5-售后支持",
                children: "5. 售后支持"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "mb-8 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30 rounded-lg border border-purple-100 dark:border-purple-700 overflow-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "p-6",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                            className: "text-lg font-bold mb-5 text-center dark:text-white",
                            children: "全方位售后服务体系"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-5",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border-l-4 border-blue-400 flex flex-col",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-3",
                                                    style: {
                                                        minWidth: '2.5rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "💻"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold",
                                                    children: "远程支持服务"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "list-disc pl-5 text-sm space-y-2 text-slate-700 flex-grow",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "定期检查设备健康状态"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "远程故障诊断和解决"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "7×24 小时紧急技术支持"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 pt-3 border-t border-gray-100 text-xs text-center text-blue-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "标准服务包含 12 个月远程支持"
                                            })
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border-l-4 border-purple-400 flex flex-col",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 mr-3",
                                                    style: {
                                                        minWidth: '2.5rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "🔄"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold",
                                                    children: "更新与维护"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "list-disc pl-5 text-sm space-y-2 text-slate-700 flex-grow",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "定期提供模型更新与适配"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "协助企业进行固件更新"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "系统性能优化服务"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "资源使用效率建议"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 pt-3 border-t border-gray-100 text-xs text-center text-purple-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "推荐每季度进行一次系统全面检查"
                                            })
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border-l-4 border-green-400 flex flex-col",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex items-center mb-3",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-10 h-10 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-3",
                                                    style: {
                                                        minWidth: '2.5rem'
                                                    },
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-xl",
                                                        children: "🚀"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                    className: "text-lg font-semibold",
                                                    children: "扩展服务"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("ul", {
                                            className: "list-disc pl-5 text-sm space-y-2 text-slate-700 flex-grow",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "模型定制与优化服务"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "企业专属应用开发匹配"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "数据集成与分析服务"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("li", {
                                                    children: "现场技术支持服务"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                            className: "mt-3 pt-3 border-t border-gray-100 text-xs text-center text-green-600",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                children: "可按需购买额外增值服务"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                            className: "mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-indigo-100",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                className: "flex items-start",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                        className: "w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 mr-3 mt-1",
                                        style: {
                                            minWidth: '2.5rem'
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                            className: "text-lg",
                                            children: "📋"
                                        })
                                    }),
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h5", {
                                                className: "font-semibold text-sm mb-2",
                                                children: "服务级别协议 (SLA)"
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                className: "grid grid-cols-1 md:grid-cols-3 gap-3 text-xs mt-2",
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-blue-700 dark:text-blue-300",
                                                                children: "标准响应"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "mt-1 dark:text-gray-300",
                                                                children: "工作时间内 4 小时内响应"
                                                            })
                                                        ]
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-indigo-700 dark:text-indigo-300",
                                                                children: "高级响应"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "mt-1 dark:text-gray-300",
                                                                children: "工作时间内 2 小时内响应"
                                                            })
                                                        ]
                                                    }),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                        className: "p-2 bg-violet-50 dark:bg-violet-900/20 rounded-lg",
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "font-medium text-violet-700 dark:text-violet-300",
                                                                children: "紧急响应"
                                                            }),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                className: "mt-1 dark:text-gray-300",
                                                                children: "全天候 30 分钟内响应"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                                className: "text-xs text-slate-600 mt-3",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                                                    children: "提供灵活的服务级别协议选项，可根据企业需求定制具体响应时间和服务内容。所有 SLA 承诺均有服务质量保证，不达标准将提供服务补偿。"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "常见问题解答",
                children: "常见问题解答"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "mb-8 bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/50 dark:to-gray-900/50 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "p-6",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "mb-6 text-center",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                                    className: "text-xl font-bold mb-2 dark:text-white",
                                    children: "解答客户疑问"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("p", {
                                    className: "text-sm text-slate-600 dark:text-slate-400",
                                    children: "以下是客户最常询问的问题及其答案，助您高效推进销售流程"
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 gap-6",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-blue-100 dark:border-blue-800",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-bold mb-3 text-blue-800 dark:text-blue-300",
                                            children: "关于设备"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "RM-01 需要持续联网吗？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "不需要。RM-01 设计为完全离线运行。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "RM-01 的功耗是多少？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "RM-01 的最大功耗为 100W，TDP 为 60W，比传统 AI （单卡A100）服务器节能 98.6%，全年 24 小时不间断运行的电费约为 4800 元。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "RM-01 支持哪些模型规模？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "RM-01 支持参数规模从 0.5B 至 235B（GPTQ Int4）的模型，覆盖主流开源模型。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "设备需要专业 IT 人员维护吗？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "不需要。RM-01 采用零运维设计，普通用户经过简单培训也能轻松使用和管理。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-purple-100 dark:border-purple-800",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-bold mb-3 text-purple-800 dark:text-purple-300",
                                            children: "关于软件与应用"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "如何为 RM-01 添加新的模型？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "将模型文件存入 CFexpress 存储卡，插入设备，系统会自动识别并加载模型。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "企业自有数据如何保密？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "RM-01 采用硬件级非对称加密，所有数据本地处理，不会上传云端，确保企业数据绝对安全。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-800 text-purple-600 dark:text-purple-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "应用开发需要特殊技能吗？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "熟悉 Docker 和 Dify 开发技术的开发者可以快速为 RM-01 开发应用。RMinte 提供完整的开发者文档和 SDK。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800/90 rounded-lg shadow-sm p-5 border border-pink-100 dark:border-pink-800/60",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-bold mb-3 text-pink-800 dark:text-pink-300",
                                            children: "关于商业模式"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-800/60 text-pink-600 dark:text-pink-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "应用开发者如何从 RM-01 获利？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800/60 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "开发者/商可以基于任何平台开发应用，并在 RMinte 平台进行部署，最后通过向终端客户提供解决方案获得收入。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-800/60 text-pink-600 dark:text-pink-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "企业如何评估 RM-01 的投资回报？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800/60 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "相比传统 AI 部署，RM-01 初始投入节省 80%，运维成本降低 98%，3 年总拥有成本节约 99%。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-800/60 text-pink-600 dark:text-pink-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "是否有租赁或订阅模式？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800/60 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "是的，开发商或者服务商可以提供设备租赁和 DaaS（Device as a Service）订阅模式，降低企业初始投入。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "bg-pink-50 dark:bg-pink-900/20 p-4 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-pink-100 dark:bg-pink-800/60 text-pink-600 dark:text-pink-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "Q"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-bold text-sm dark:text-white",
                                                                    children: "是否提供试用服务？"
                                                                })
                                                            ]
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "flex items-start mt-2",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-800/60 text-green-600 dark:text-green-300 mr-2 mt-0.5",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                        className: "text-xs",
                                                                        children: "A"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm dark:text-gray-300",
                                                                    children: "是的，我们为企业客户提供 7 天免费试用服务，并提供专业技术人员现场支持。"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.h2, {
                id: "技术支持",
                children: "技术支持"
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-lg border border-blue-100 dark:border-blue-700 overflow-hidden",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                    className: "p-6",
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h3", {
                            className: "text-xl font-bold mb-5 text-center dark:text-white",
                            children: "多渠道专业支持"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-blue-200 dark:border-blue-700",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-semibold mb-4 text-center text-blue-800 dark:text-blue-300",
                                            children: "联系方式"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-2xl",
                                                                children: "📞"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium dark:text-white",
                                                                    children: "技术支持热线"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm text-blue-700 dark:text-blue-300",
                                                                    children: "158-8200-8185"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                                    children: "工作时间：周一至周五 9:00-21:00"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-2xl",
                                                                children: "📧"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium dark:text-white",
                                                                    children: "电子邮箱"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm text-blue-700 dark:text-blue-300",
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.a, {
                                                                        href: "mailto:support@rminte.com",
                                                                        children: "support@rminte.com"
                                                                    })
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                                    children: "24小时内响应"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex items-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 mr-4",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "text-2xl",
                                                                children: "💬"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium dark:text-white",
                                                                    children: "在线支持"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-sm text-blue-700 dark:text-blue-300",
                                                                    children: "rminte.com"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                                    children: "实时在线客服，工作时间秒级响应"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-lg shadow-sm p-5 border border-cyan-200 dark:border-cyan-700",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                            className: "text-lg font-semibold mb-4 text-center text-cyan-800 dark:text-cyan-300",
                                            children: "支持流程"
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "flex flex-col space-y-4",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "font-semibold",
                                                                children: "1"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 flex-grow",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "提交支持请求"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "通过电话、邮件或在线客服提交支持请求"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "font-semibold",
                                                                children: "2"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 flex-grow",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "确认与分级"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "技术支持团队确认问题并进行优先级分级"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "font-semibold",
                                                                children: "3"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 flex-grow",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "远程或现场支持"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "根据问题性质提供远程诊断或安排现场支持"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                    className: "flex",
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                            className: "w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full bg-cyan-100 dark:bg-cyan-900 text-cyan-600 dark:text-cyan-300 mr-2",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                                className: "font-semibold",
                                                                children: "4"
                                                            })
                                                        }),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                                            className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 flex-grow",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "font-medium text-sm dark:text-white",
                                                                    children: "问题解决与确认"
                                                                }),
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                                    className: "text-xs text-slate-600 dark:text-slate-400 mt-1",
                                                                    children: "解决问题后与客户确认，并记录解决方案"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                            className: "bg-white dark:bg-gray-800 rounded-lg p-5 shadow-sm border border-blue-100 dark:border-blue-700",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("h4", {
                                    className: "text-lg font-semibold mb-4 text-center dark:text-white",
                                    children: "资源与文档"
                                }),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                    className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "bg-gray-50 dark:bg-gray-800/80 rounded-lg p-4 text-center border border-gray-100 dark:border-gray-600/40 transition-all hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-sm",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 mb-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-2xl",
                                                        children: "📚"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "font-medium text-sm mb-1 dark:text-white",
                                                    children: "产品文档"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "详细技术文档与指南"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "mt-2",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("a", {
                                                        href: "https://docs.rminte.com",
                                                        className: "text-xs text-blue-600 dark:text-blue-300 font-medium",
                                                        children: "docs.rminte.com"
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "bg-gray-50 dark:bg-gray-800/80 rounded-lg p-4 justify-center text-center border border-gray-100 dark:border-gray-600/40 transition-all hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-sm",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 mb-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-2xl",
                                                        children: "👨‍💻"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "font-medium text-sm mb-1 dark:text-white",
                                                    children: "开发者社区"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "技术交流与最佳实践"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "bg-gray-50 dark:bg-gray-800/80 rounded-lg p-4 text-center border border-gray-100 dark:border-gray-600/40 transition-all hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-sm",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 mb-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-2xl",
                                                        children: "🛒"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "font-medium text-sm mb-1 dark:text-white",
                                                    children: "应用广场"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "发现与建联专业应用（团队）"
                                                })
                                            ]
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxs"])("div", {
                                            className: "bg-gray-50 dark:bg-gray-800/80 rounded-lg p-4 justify-center text-center border border-gray-100 dark:border-gray-600/40 transition-all hover:border-blue-200 dark:hover:border-blue-700/60 hover:shadow-sm",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-300 mb-3",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("span", {
                                                        className: "text-2xl",
                                                        children: "🎓"
                                                    })
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "font-medium text-sm mb-1 dark:text-white",
                                                    children: "教程与视频"
                                                }),
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                                                    className: "text-xs text-slate-500 dark:text-slate-400",
                                                    children: "学习与培训资源"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "my-8 text-center",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    className: "h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent"
                })
            }),
            "\n",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])("div", {
                className: "text-sm text-gray-500 mt-8",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_components.p, {
                    children: "© 2025 Panidea (Chengdu) Artificial Intelligence Technology Co., Ltd. 保留所有权利。"
                })
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout } = props.components || {};
    return MDXLayout ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(MDXLayout, {
        ...props,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsx"])(_createMdxContent, {
            ...props
        })
    }) : _createMdxContent(props);
}
}}),

};

//# sourceMappingURL=content_docs_deploy-guide_deploy_cn_mdx_45c8210f.js.map