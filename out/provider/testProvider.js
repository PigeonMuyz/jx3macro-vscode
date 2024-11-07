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
exports.Jx3MacroCompletionProvider = void 0;
const vscode = __importStar(require("vscode"));
class Jx3MacroCompletionProvider {
    provideCompletionItems(document, position, token, context) {
        const completionItems = [];
        // 假设我们提供简单的技能补全，带有描述
        const skills = [
            { name: '阳春白雪', detail: '曲风', description: '一种提升攻击力的技能' },
            { name: '疏影横斜', description: '提供防御效果的技能' },
            { name: '云生结海', description: '恢复气血的技能' },
            { name: '渡渡鸟真不靠谱', detail: '测试', alias: '渡渡鸟', description: '具有特殊效果的技能' },
            { name: '渡渡鸟呸呸呸', detail: '测试2', alias: '渡渡鸟', description: '具有特殊效果的技能' }
        ];
        // 为每个技能创建一个补全项
        skills.forEach(skill => {
            const completionItem = new vscode.CompletionItem(skill.name, vscode.CompletionItemKind.Text);
            completionItem.documentation = new vscode.MarkdownString(skill.description);
            completionItem.detail = skill.detail; // 在补全列表中直接显示额外描述信息
            completionItem.filterText = skill.alias; // 例如，“云结” 也能匹配到“云生结海”
            completionItems.push(completionItem);
        });
        return Promise.resolve(completionItems);
    }
}
exports.Jx3MacroCompletionProvider = Jx3MacroCompletionProvider;
