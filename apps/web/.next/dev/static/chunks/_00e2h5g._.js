(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/packages/shared/events.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_TOOL_OUTPUT_BYTES",
    ()=>MAX_TOOL_OUTPUT_BYTES,
    "NAMESPACE",
    ()=>NAMESPACE
]);
const NAMESPACE = {
    WEB: "/web",
    DAEMON: "/daemon"
};
const MAX_TOOL_OUTPUT_BYTES = 5_000;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/lib/socket-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSocket",
    ()=>getSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/socket.io-client/build/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/shared/events.ts [app-client] (ecmascript)");
"use client";
;
;
let socket = null;
function getSocket() {
    if (socket) return socket;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$socket$2e$io$2d$client$2f$build$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["io"])(`${window.location.origin}${__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$shared$2f$events$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAMESPACE"].WEB}`, {
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionDelayMax: 10_000,
        randomizationFactor: 0.5
    });
    return socket;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/components/DaemonStatus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DaemonStatus",
    ()=>DaemonStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function DaemonStatus({ connected, daemonOnline }) {
    let label;
    let color;
    if (!connected) {
        label = "Connecting…";
        color = "bg-yellow-500";
    } else if (daemonOnline) {
        label = "Daemon online";
        color = "bg-green-500";
    } else {
        label = "Daemon offline";
        color = "bg-zinc-400 dark:bg-zinc-600";
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block h-2 w-2 rounded-full ${color} ${connected && daemonOnline ? "animate-pulse" : ""}`
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/DaemonStatus.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/DaemonStatus.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/components/DaemonStatus.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_c = DaemonStatus;
var _c;
__turbopack_context__.k.register(_c, "DaemonStatus");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/components/EventStream.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EventStream",
    ()=>EventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function EventStream({ events }) {
    _s();
    const endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EventStream.useEffect": ()=>{
            endRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "end"
            });
        }
    }["EventStream.useEffect"], [
        events.length
    ]);
    if (events.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "py-16 text-center text-sm text-zinc-500 dark:text-zinc-400",
            children: "Type a prompt below to start."
        }, void 0, false, {
            fileName: "[project]/apps/web/app/components/EventStream.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-3 text-sm leading-relaxed",
        children: [
            renderEvents(events),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: endRef
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/components/EventStream.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(EventStream, "wkzjRsewh8pSmp35FLqjNBWGCLs=");
_c = EventStream;
function renderEvents(events) {
    const out = [];
    let buffer = null;
    const flush = ()=>{
        if (!buffer) return;
        const { promptId, type, chunks } = buffer;
        out.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: type === "thinking" ? "italic text-zinc-500 dark:text-zinc-400" : "whitespace-pre-wrap text-zinc-900 dark:text-zinc-100",
            children: chunks.join("")
        }, `${promptId}-${out.length}-${type}`, false, {
            fileName: "[project]/apps/web/app/components/EventStream.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this));
        buffer = null;
    };
    for (const ev of events){
        if (ev.type === "text" || ev.type === "thinking") {
            if (buffer && buffer.promptId === ev.promptId && buffer.type === ev.type) {
                buffer.chunks.push(ev.chunk);
            } else {
                flush();
                buffer = {
                    promptId: ev.promptId,
                    type: ev.type,
                    chunks: [
                        ev.chunk
                    ]
                };
            }
            continue;
        }
        flush();
        out.push(renderEvent(ev, out.length));
    }
    flush();
    return out;
}
function renderEvent(ev, key) {
    switch(ev.type){
        case "prompt":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl bg-zinc-900 px-4 py-3 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-1 text-xs uppercase tracking-wider opacity-60",
                        children: "You"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/EventStream.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "whitespace-pre-wrap text-sm",
                        children: ev.text
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/EventStream.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this);
        case "tool_use":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg border border-zinc-200 bg-white px-3 py-2 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-zinc-500 dark:text-zinc-400",
                        children: "→ "
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/EventStream.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-zinc-900 dark:text-zinc-100",
                        children: ev.name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/EventStream.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-zinc-500 dark:text-zinc-400",
                        children: previewInput(ev.input)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/EventStream.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, key, true, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 93,
                columnNumber: 9
            }, this);
        case "tool_result":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-lg border px-3 py-2 font-mono text-xs ${ev.isError ? "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-200" : "border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                    className: "whitespace-pre-wrap break-words",
                    children: ev.output
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/components/EventStream.tsx",
                    lineNumber: 116,
                    columnNumber: 11
                }, this)
            }, key, false, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this);
        case "error":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700 dark:bg-red-950/40 dark:text-red-300",
                children: [
                    "✗ ",
                    ev.message
                ]
            }, key, true, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this);
        case "done":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-zinc-400 dark:text-zinc-600",
                children: "✓ done"
            }, key, false, {
                fileName: "[project]/apps/web/app/components/EventStream.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this);
        default:
            return null;
    }
}
function previewInput(input) {
    try {
        const s = typeof input === "string" ? input : JSON.stringify(input);
        return s.length > 120 ? `${s.slice(0, 120)}…` : s;
    } catch  {
        return "";
    }
}
var _c;
__turbopack_context__.k.register(_c, "EventStream");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/components/MicButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MicButton",
    ()=>MicButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function MicButton({ onTranscript, disabled }) {
    _s();
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const recognitionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const finalBufferRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MicButton.useEffect": ()=>{
            const Ctor = ("TURBOPACK compile-time truthy", 1) ? window.SpeechRecognition ?? window.webkitSpeechRecognition : "TURBOPACK unreachable";
            if (!Ctor) {
                setSupported(false);
                return;
            }
            const recognition = new Ctor();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = "en-US";
            recognition.onresult = ({
                "MicButton.useEffect": (event)=>{
                    for(let i = event.resultIndex; i < event.results.length; i++){
                        const result = event.results[i];
                        if (result.isFinal) {
                            finalBufferRef.current += result[0].transcript;
                        }
                    }
                }
            })["MicButton.useEffect"];
            recognition.onerror = ({
                "MicButton.useEffect": ()=>setListening(false)
            })["MicButton.useEffect"];
            recognition.onend = ({
                "MicButton.useEffect": ()=>{
                    const finalText = finalBufferRef.current.trim();
                    finalBufferRef.current = "";
                    if (finalText) onTranscript(finalText);
                    setListening(false);
                }
            })["MicButton.useEffect"];
            recognitionRef.current = recognition;
            return ({
                "MicButton.useEffect": ()=>{
                    recognition.onresult = null;
                    recognition.onerror = null;
                    recognition.onend = null;
                    recognition.stop();
                }
            })["MicButton.useEffect"];
        }
    }["MicButton.useEffect"], [
        onTranscript
    ]);
    const toggle = ()=>{
        const rec = recognitionRef.current;
        if (!rec) return;
        if (listening) {
            rec.stop();
            return;
        }
        finalBufferRef.current = "";
        try {
            rec.start();
            setListening(true);
        } catch  {
        // recognition.start() throws if already started — safe to ignore
        }
    };
    if (!supported) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggle,
        disabled: disabled,
        "aria-label": listening ? "Stop dictation" : "Start dictation",
        title: listening ? "Stop dictation" : "Dictate prompt",
        className: `flex h-9 w-9 items-center justify-center rounded-lg transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${listening ? "animate-pulse bg-red-500 text-white" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            className: "h-5 w-5",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3Zm5-3a1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 1 0-2 0 5 5 0 0 0 4 4.9V19H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-2.1A5 5 0 0 0 17 11Z"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/MicButton.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/app/components/MicButton.tsx",
            lineNumber: 115,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/app/components/MicButton.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(MicButton, "JLdZ9ja7+GJYzh2rpQTYE9LeeHs=");
_c = MicButton;
var _c;
__turbopack_context__.k.register(_c, "MicButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/components/PromptInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PromptInput",
    ()=>PromptInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$MicButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/components/MicButton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function PromptInput({ onSubmit, onStop, running, disabled }) {
    _s();
    const [text, setText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const send = ()=>{
        if (!text.trim() || running || disabled) return;
        onSubmit(text);
        setText("");
    };
    const onKeyDown = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            send();
        }
    };
    const placeholder = disabled ? "Daemon offline — start the daemon to chat" : "Ask Claude to do something…";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-end gap-2 rounded-xl border border-zinc-300 bg-white p-2 focus-within:border-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:focus-within:border-zinc-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: text,
                onChange: (e)=>setText(e.target.value),
                onKeyDown: onKeyDown,
                placeholder: placeholder,
                disabled: disabled || running,
                rows: 1,
                className: "min-h-[40px] max-h-32 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:opacity-50 dark:text-zinc-100 dark:placeholder:text-zinc-500"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/PromptInput.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$MicButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicButton"], {
                onTranscript: (t)=>setText((prev)=>prev ? `${prev} ${t}` : t),
                disabled: disabled || running
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/PromptInput.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            running ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onStop,
                className: "rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600",
                children: "Stop"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/PromptInput.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: send,
                disabled: disabled || !text.trim(),
                className: "rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300",
                children: "Send"
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/PromptInput.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/components/PromptInput.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(PromptInput, "3t0DFnMi16eB/7p7iIKtjG5r68g=");
_c = PromptInput;
var _c;
__turbopack_context__.k.register(_c, "PromptInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/app/components/Chat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$socket$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/lib/socket-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$DaemonStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/components/DaemonStatus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$EventStream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/components/EventStream.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$PromptInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/app/components/PromptInput.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Chat() {
    _s();
    const [connected, setConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [daemonOnline, setDaemonOnline] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [activePromptId, setActivePromptId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const socketRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Chat.useEffect": ()=>{
            const socket = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$lib$2f$socket$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])();
            socketRef.current = socket;
            const onConnect = {
                "Chat.useEffect.onConnect": ()=>setConnected(true)
            }["Chat.useEffect.onConnect"];
            const onDisconnect = {
                "Chat.useEffect.onDisconnect": ()=>setConnected(false)
            }["Chat.useEffect.onDisconnect"];
            const onEvent = {
                "Chat.useEffect.onEvent": (ev)=>{
                    if (ev.type === "status") {
                        setDaemonOnline(ev.daemonOnline);
                        return;
                    }
                    setEvents({
                        "Chat.useEffect.onEvent": (prev)=>[
                                ...prev,
                                ev
                            ]
                    }["Chat.useEffect.onEvent"]);
                    if (ev.type === "done") {
                        setActivePromptId({
                            "Chat.useEffect.onEvent": (current)=>current === ev.promptId ? null : current
                        }["Chat.useEffect.onEvent"]);
                    }
                }
            }["Chat.useEffect.onEvent"];
            socket.on("connect", onConnect);
            socket.on("disconnect", onDisconnect);
            socket.on("event", onEvent);
            if (socket.connected) setConnected(true);
            return ({
                "Chat.useEffect": ()=>{
                    socket.off("connect", onConnect);
                    socket.off("disconnect", onDisconnect);
                    socket.off("event", onEvent);
                }
            })["Chat.useEffect"];
        }
    }["Chat.useEffect"], []);
    const submit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[submit]": (text)=>{
            const trimmed = text.trim();
            if (!trimmed || !daemonOnline || activePromptId) return;
            const promptId = crypto.randomUUID();
            setActivePromptId(promptId);
            const ev = {
                type: "prompt",
                promptId,
                text: trimmed
            };
            setEvents({
                "Chat.useCallback[submit]": (prev)=>[
                        ...prev,
                        ev
                    ]
            }["Chat.useCallback[submit]"]);
            socketRef.current?.emit("event", ev);
        }
    }["Chat.useCallback[submit]"], [
        daemonOnline,
        activePromptId
    ]);
    const stop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Chat.useCallback[stop]": ()=>{
            if (!activePromptId) return;
            socketRef.current?.emit("event", {
                type: "abort",
                promptId: activePromptId
            });
        }
    }["Chat.useCallback[stop]"], [
        activePromptId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen flex-col bg-zinc-50 dark:bg-zinc-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex items-center justify-between border-b border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-zinc-950",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50",
                        children: "Ultra Service"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/Chat.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$DaemonStatus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DaemonStatus"], {
                        connected: connected,
                        daemonOnline: daemonOnline
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/Chat.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/app/components/Chat.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto px-6 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$EventStream$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventStream"], {
                        events: events
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/Chat.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/components/Chat.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/Chat.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "border-t border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-3xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$app$2f$components$2f$PromptInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PromptInput"], {
                        onSubmit: submit,
                        onStop: stop,
                        running: activePromptId !== null,
                        disabled: !daemonOnline || !connected
                    }, void 0, false, {
                        fileName: "[project]/apps/web/app/components/Chat.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/app/components/Chat.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/app/components/Chat.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/app/components/Chat.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(Chat, "LU8ohLehKyMkZujx20SMVnMG4mU=");
_c = Chat;
var _c;
__turbopack_context__.k.register(_c, "Chat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_00e2h5g._.js.map