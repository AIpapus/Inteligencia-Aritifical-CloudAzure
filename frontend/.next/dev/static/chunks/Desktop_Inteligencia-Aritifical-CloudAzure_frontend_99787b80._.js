(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WelcomePage",
    ()=>WelcomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
"use client";
;
;
;
function WelcomePage({ onStart }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "breathing-glow breathing-glow-1"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "breathing-glow breathing-glow-2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "breathing-glow breathing-glow-3"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto text-center relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 fade-in-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-white/10 backdrop-blur-sm breathing-scale",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl md:text-7xl font-bold mb-4 tracking-tight text-balance",
                                children: [
                                    "Diagnóstico de",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-gradient",
                                        children: "Enfermedades"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto text-pretty",
                                children: "Sistema inteligente de evaluación de síntomas para enfermedades infecciosas"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-6 mb-12 fade-in-up",
                        style: {
                            animationDelay: "0.2s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 mb-4 rounded-lg bg-green-500/20 flex items-center justify-center breathing-scale",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                            className: "w-6 h-6 text-green-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-2",
                                        children: "Análisis Preciso"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-400",
                                        children: "Algoritmo avanzado que evalúa múltiples síntomas y sus intensidades"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-card",
                                style: {
                                    animationDelay: "0.1s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 mb-4 rounded-lg bg-blue-500/20 flex items-center justify-center breathing-scale",
                                        style: {
                                            animationDelay: "0.5s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            className: "w-6 h-6 text-blue-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-2",
                                        children: "16 Síntomas"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 54,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-400",
                                        children: "Evaluación completa con escala de intensidad del 0 al 10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "feature-card",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 mb-4 rounded-lg bg-red-500/20 flex items-center justify-center breathing-scale",
                                        style: {
                                            animationDelay: "1s"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-6 h-6 text-red-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold mb-2",
                                        children: "Base de Datos Médica"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-400",
                                        children: "Información detallada de enfermedades infecciosas comunes"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fade-in-up",
                        style: {
                            animationDelay: "0.4s"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onStart,
                                size: "lg",
                                className: "bg-white text-black hover:bg-neutral-200 font-semibold px-8 py-6 text-lg group transition-all duration-300 hover:scale-105",
                                children: [
                                    "Comenzar Evaluación",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-sm text-neutral-500 max-w-xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-500",
                                        children: "⚠️"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    " Esta herramienta es únicamente informativa y educativa. No reemplaza el diagnóstico de un profesional médico. Consulta a tu médico ante cualquier síntoma preocupante."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = WelcomePage;
var _c;
__turbopack_context__.k.register(_c, "WelcomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Slider",
    ()=>Slider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/@radix-ui/react-slider/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const Slider = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex w-full touch-none select-none items-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Track"], {
                className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Range"], {
                    className: "absolute h-full bg-primary"
                }, void 0, false, {
                    fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx",
                lineNumber: 20,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Thumb"], {
                className: "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            }, void 0, false, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx",
        lineNumber: 12,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Slider;
Slider.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slider$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Slider$React.forwardRef");
__turbopack_context__.k.register(_c1, "Slider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/diseases-data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "diseasesDatabase",
    ()=>diseasesDatabase,
    "getSeverityColor",
    ()=>getSeverityColor,
    "numberToSeverity",
    ()=>numberToSeverity,
    "severityToNumber",
    ()=>severityToNumber
]);
const diseasesDatabase = [
    {
        name: "Gripe",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Fiebre",
                severity: "medio",
                description: "Elevación moderada de temperatura"
            },
            {
                name: "Dolor de cabeza",
                severity: "poco",
                description: "Cefalea leve por inflamación"
            },
            {
                name: "Fatiga",
                severity: "considerable",
                description: "Cansancio general"
            }
        ]
    },
    {
        name: "COVID-19",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Fiebre",
                severity: "considerable",
                description: "Elevación considerable de temperatura"
            },
            {
                name: "Tos seca",
                severity: "medio",
                description: "Irritación respiratoria"
            },
            {
                name: "Pérdida de olfato",
                severity: "demasiado",
                description: "Alteración neurológica"
            }
        ]
    },
    {
        name: "Tuberculosis",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Tos persistente",
                severity: "demasiado",
                description: "Tos crónica con flema"
            },
            {
                name: "Sudores nocturnos",
                severity: "medio",
                description: "Síntoma sistémico"
            },
            {
                name: "Pérdida de peso",
                severity: "poco",
                description: "Pérdida de peso gradual"
            }
        ]
    },
    {
        name: "Dengue",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Dolor articular",
                severity: "considerable",
                description: "Dolor intenso en articulaciones"
            },
            {
                name: "Dolor detrás de los ojos",
                severity: "medio",
                description: "Característico del dengue"
            },
            {
                name: "Sarpullido",
                severity: "poco",
                description: "Lesiones cutáneas leves"
            }
        ]
    },
    {
        name: "Cólera",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Diarrea acuosa",
                severity: "demasiado",
                description: "Pérdida rápida de líquidos"
            },
            {
                name: "Calambres musculares",
                severity: "medio",
                description: "Contracciones musculares"
            },
            {
                name: "Deshidratación",
                severity: "considerable",
                description: "Pérdida severa de líquidos"
            }
        ]
    },
    {
        name: "Sarampión",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Erupción cutánea",
                severity: "demasiado",
                description: "Lesiones rojas en piel"
            },
            {
                name: "Tos",
                severity: "poco",
                description: "Síntoma respiratorio"
            },
            {
                name: "Manchas de Koplik",
                severity: "medio",
                description: "Lesiones en mucosa oral"
            }
        ]
    },
    {
        name: "Malaria",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Escalofríos",
                severity: "considerable",
                description: "Escalofríos intensos"
            },
            {
                name: "Sudoración excesiva",
                severity: "medio",
                description: "Tras episodios febriles"
            },
            {
                name: "Dolor abdominal",
                severity: "poco",
                description: "Dolor abdominal leve"
            }
        ]
    },
    {
        name: "Hepatitis A",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Ictericia",
                severity: "demasiado",
                description: "Color amarillo en piel y ojos"
            },
            {
                name: "Náuseas",
                severity: "medio",
                description: "Alteración digestiva"
            },
            {
                name: "Orina oscura",
                severity: "poco",
                description: "Orina de color oscuro"
            }
        ]
    },
    {
        name: "Fiebre Tifoidea",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Dolor abdominal",
                severity: "considerable",
                description: "Inflamación intestinal"
            },
            {
                name: "Estreñimiento",
                severity: "poco",
                description: "Alteración digestiva"
            },
            {
                name: "Fiebre prolongada",
                severity: "demasiado",
                description: "Persistente por infección"
            }
        ]
    },
    {
        name: "VIH (fase aguda)",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Ganglios inflamados",
                severity: "medio",
                description: "Adenopatías"
            },
            {
                name: "Dolor muscular",
                severity: "poco",
                description: "Síntoma inespecífico"
            },
            {
                name: "Sudor nocturno",
                severity: "considerable",
                description: "Común en fase inicial"
            }
        ]
    },
    {
        name: "Tétanos",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Rigidez muscular",
                severity: "demasiado",
                description: "Contracciones dolorosas"
            },
            {
                name: "Espasmos",
                severity: "considerable",
                description: "Movimientos involuntarios"
            },
            {
                name: "Dificultad para tragar",
                severity: "medio",
                description: "Dificultad para tragar"
            }
        ]
    },
    {
        name: "Zika",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Conjuntivitis",
                severity: "poco",
                description: "Inflamación ocular"
            },
            {
                name: "Dolor muscular",
                severity: "medio",
                description: "Dolor generalizado"
            },
            {
                name: "Erupción cutánea",
                severity: "considerable",
                description: "Lesiones en piel"
            }
        ]
    },
    {
        name: "Ébola",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Hemorragias",
                severity: "demasiado",
                description: "Sangrado interno y externo"
            },
            {
                name: "Fiebre alta",
                severity: "demasiado",
                description: "Elevación extrema de temperatura"
            },
            {
                name: "Dolor abdominal",
                severity: "considerable",
                description: "Dolor abdominal severo"
            }
        ]
    },
    {
        name: "Rabia",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Hidrofobia",
                severity: "demasiado",
                description: "Miedo al agua por espasmos"
            },
            {
                name: "Agitación",
                severity: "considerable",
                description: "Alteración neurológica"
            },
            {
                name: "Salivación excesiva",
                severity: "medio",
                description: "Hipersalivación"
            }
        ]
    },
    {
        name: "Leptospirosis",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Dolor muscular",
                severity: "considerable",
                description: "Dolor intenso"
            },
            {
                name: "Ictericia",
                severity: "medio",
                description: "Afectación hepática"
            },
            {
                name: "Insuficiencia renal",
                severity: "demasiado",
                description: "Daño renal severo"
            }
        ]
    },
    {
        name: "Meningitis",
        category: "Enfermedades infecciosas",
        symptoms: [
            {
                name: "Rigidez de cuello",
                severity: "demasiado",
                description: "Signo clásico"
            },
            {
                name: "Fotofobia",
                severity: "considerable",
                description: "Sensibilidad a la luz"
            },
            {
                name: "Dolor de cabeza",
                severity: "medio",
                description: "Cefalea intensa"
            }
        ]
    }
];
const severityToNumber = (severity)=>{
    const mapping = {
        poco: 3,
        medio: 5,
        considerable: 7,
        demasiado: 10
    };
    return mapping[severity];
};
const numberToSeverity = (num)=>{
    if (num <= 3) return "poco";
    if (num <= 5) return "medio";
    if (num <= 7) return "considerable";
    return "demasiado";
};
const getSeverityColor = (value)=>{
    if (value === 0) return "transparent";
    if (value <= 3) return "#22c55e" // green
    ;
    if (value <= 5) return "#eab308" // yellow
    ;
    if (value <= 7) return "#f97316" // orange
    ;
    return "#ef4444" // red
    ;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SymptomChecker",
    ()=>SymptomChecker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/slider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/lib/diseases-data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SymptomChecker({ onBack }) {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [symptomSelections, setSymptomSelections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [diagnosis, setDiagnosis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Extract all unique symptoms
    const allSymptoms = Array.from(new Set(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diseasesDatabase"].flatMap((disease)=>disease.symptoms.map((s)=>s.name)))).sort();
    // Calculate average severity for cursor glow
    const calculateAverageSeverity = ()=>{
        const values = Object.values(symptomSelections).filter((v)=>v > 0);
        if (values.length === 0) return 0;
        return values.reduce((a, b)=>a + b, 0) / values.length;
    };
    const averageSeverity = calculateAverageSeverity();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SymptomChecker.useEffect": ()=>{
            const handleMouseMove = {
                "SymptomChecker.useEffect.handleMouseMove": (e)=>{
                    setMousePosition({
                        x: e.clientX,
                        y: e.clientY
                    });
                }
            }["SymptomChecker.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "SymptomChecker.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["SymptomChecker.useEffect"];
        }
    }["SymptomChecker.useEffect"], []);
    const handleSymptomChange = (symptom, value)=>{
        setSymptomSelections((prev)=>({
                ...prev,
                [symptom]: value[0]
            }));
    };
    const calculateDiagnosis = ()=>{
        const results = [];
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diseasesDatabase"].forEach((disease)=>{
            let matchScore = 0;
            let matchedSymptoms = 0;
            disease.symptoms.forEach((symptom)=>{
                const userValue = symptomSelections[symptom.name] || 0;
                if (userValue > 0) {
                    matchedSymptoms++;
                    // Calculate how close the user's value is to the disease symptom severity
                    const diseaseValue = symptom.severity === "poco" ? 3 : symptom.severity === "medio" ? 5 : symptom.severity === "considerable" ? 7 : 10;
                    const difference = Math.abs(userValue - diseaseValue);
                    const similarityScore = Math.max(0, 10 - difference);
                    matchScore += similarityScore;
                }
            });
            if (matchedSymptoms > 0) {
                const confidence = matchScore / (disease.symptoms.length * 10) * 100;
                results.push({
                    disease: disease.name,
                    confidence: Math.round(confidence),
                    matchedSymptoms,
                    totalSymptoms: disease.symptoms.length
                });
            }
        });
        results.sort((a, b)=>b.confidence - a.confidence);
        setDiagnosis(results.slice(0, 5));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-black text-white p-6 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cursor-glow",
                style: {
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    background: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeverityColor"])(averageSeverity)
                }
            }, void 0, false, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-12",
                        children: [
                            onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                onClick: onBack,
                                variant: "ghost",
                                className: "mb-4 text-neutral-400 hover:text-white hover:bg-white/5 transition-all breathing-scale",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4 mr-2"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this),
                                    "Volver"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-5xl font-bold mb-3 tracking-tight",
                                        children: "Diagnóstico de Enfermedades"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 126,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-neutral-400",
                                        children: "Selecciona tus síntomas y ajusta su intensidad del 0 al 10"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid lg:grid-cols-2 gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in-up",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm hover:border-neutral-600 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold mb-6 text-white",
                                                children: "Síntomas"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 135,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-6 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: allSymptoms.map((symptom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        className: "text-sm font-medium text-white",
                                                                        children: symptom
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm font-mono px-3 py-1 rounded-full font-semibold",
                                                                        style: {
                                                                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeverityColor"])(symptomSelections[symptom] || 0),
                                                                            backgroundColor: "rgba(255, 255, 255, 0.15)"
                                                                        },
                                                                        children: [
                                                                            symptomSelections[symptom] || 0,
                                                                            "/10"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 139,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$slider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slider"], {
                                                                value: [
                                                                    symptomSelections[symptom] || 0
                                                                ],
                                                                onValueChange: (value)=>handleSymptomChange(symptom, value),
                                                                max: 10,
                                                                step: 1,
                                                                className: "w-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 151,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, symptom, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 136,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: calculateDiagnosis,
                                        className: "w-full mt-4 bg-white text-black hover:bg-neutral-200 font-semibold py-6 text-lg breathing-scale hover:scale-105 transition-all",
                                        children: "Analizar Síntomas"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 163,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fade-in-up",
                                style: {
                                    animationDelay: "0.2s"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-neutral-900/80 border-neutral-700 p-6 backdrop-blur-sm hover:border-neutral-600 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold mb-6 text-white",
                                                children: "Posibles Diagnósticos"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 174,
                                                columnNumber: 15
                                            }, this),
                                            diagnosis.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center py-12 text-neutral-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg",
                                                        children: 'Ajusta los síntomas y presiona "Analizar Síntomas"'
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm mt-2",
                                                        children: "para ver posibles diagnósticos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: diagnosis.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                                        className: "bg-neutral-800/90 border-neutral-600 p-4 hover:bg-neutral-750 hover:border-neutral-500 transition-all hover:scale-[1.02]",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-start justify-between mb-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                                className: "font-semibold text-lg text-white",
                                                                                children: result.disease
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                                lineNumber: 189,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "text-sm text-neutral-400",
                                                                                children: [
                                                                                    result.matchedSymptoms,
                                                                                    " de ",
                                                                                    result.totalSymptoms,
                                                                                    " síntomas coinciden"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                                lineNumber: 190,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-2xl font-bold",
                                                                        style: {
                                                                            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeverityColor"])(result.confidence / 10)
                                                                        },
                                                                        children: [
                                                                            result.confidence,
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                        lineNumber: 194,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full bg-neutral-700 rounded-full h-2 overflow-hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "h-full transition-all duration-500",
                                                                    style: {
                                                                        width: `${result.confidence}%`,
                                                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$lib$2f$diseases$2d$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSeverityColor"])(result.confidence / 10)
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, result.disease, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                                        className: "bg-neutral-900/80 border-neutral-700 p-4 mt-4 backdrop-blur-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-sm font-semibold mb-3 text-white",
                                                children: "Escala de Severidad"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 218,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded",
                                                                style: {
                                                                    backgroundColor: "#22c55e"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-300",
                                                                children: "Poco (1-3)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 220,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded",
                                                                style: {
                                                                    backgroundColor: "#eab308"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 225,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-300",
                                                                children: "Medio (4-5)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded",
                                                                style: {
                                                                    backgroundColor: "#f97316"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-300",
                                                                children: "Considerable (6-7)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 230,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-4 h-4 rounded",
                                                                style: {
                                                                    backgroundColor: "#ef4444"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-neutral-300",
                                                                children: "Demasiado (8-10)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                                lineNumber: 219,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        className: "mt-12 text-center text-neutral-500 text-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "⚠️ Esta herramienta es solo informativa. Consulta a un profesional médico para un diagnóstico preciso."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                            lineNumber: 242,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(SymptomChecker, "MBAO7cXARkEPNjiTtchbD+XsXrQ=");
_c = SymptomChecker;
var _c;
__turbopack_context__.k.register(_c, "SymptomChecker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$welcome$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/welcome-page.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$symptom$2d$checker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/components/symptom-checker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Home() {
    _s();
    const [showChecker, setShowChecker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (showChecker) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$symptom$2d$checker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SymptomChecker"], {
            onBack: ()=>setShowChecker(false)
        }, void 0, false, {
            fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/app/page.tsx",
            lineNumber: 11,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Inteligencia$2d$Aritifical$2d$CloudAzure$2f$frontend$2f$components$2f$welcome$2d$page$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WelcomePage"], {
        onStart: ()=>setShowChecker(true)
    }, void 0, false, {
        fileName: "[project]/Desktop/Inteligencia-Aritifical-CloudAzure/frontend/app/page.tsx",
        lineNumber: 14,
        columnNumber: 10
    }, this);
}
_s(Home, "QAkOIOt05r0Q5/SzLVe84A2UzAU=");
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_Inteligencia-Aritifical-CloudAzure_frontend_99787b80._.js.map