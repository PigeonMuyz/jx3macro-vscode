"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
// import { Jx3MacroCompletionProvider } from './provider/testProvider';
const SkillProvider_1 = require("./provider/SkillProvider");
function activate(context) {
    // 注册补全提供者
    const disposable = vscode.languages.registerCompletionItemProvider('jx3macro', // 使用 'jx3macro' 作为语言标识符
    new SkillProvider_1.XiangzhiCompletionProvider(), // 创建补全提供者实例
    ' ', ':' // 设置补全触发的前缀（例如，'.' 触发补全）
    );
    context.subscriptions.push(disposable);
    // 注册文档更改监听器
    const documentChangeListener = vscode.workspace.onDidChangeTextDocument(event => {
        const document = event.document;
        // 确认是特定的语言
        if (document.languageId === 'jx3macro') {
            const text = document.getText();
            // 使用正则表达式按 `---` 分割内容，获取每个段落
            const segments = text.split(/---[\s\S]*?---/g).filter(segment => segment.trim() !== '');
            segments.forEach((segment, index) => {
                const trimmedSegment = segment.trim();
                // 从元数据部分提取标题信息（如果有）
                const titleMatch = trimmedSegment.match(/title: \s*(.+)/);
                const segmentTitle = titleMatch ? titleMatch[1].trim() : `第 ${index + 1} 段`;
                // 检查每个段落的字符数
                if (trimmedSegment.length > 128) {
                    vscode.window.showWarningMessage(`${segmentTitle}的宏命令字符数已超过128字符！`);
                }
            });
        }
    });
    context.subscriptions.push(documentChangeListener);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
