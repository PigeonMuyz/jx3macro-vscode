import * as vscode from 'vscode';

export class Jx3MacroCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): Thenable<vscode.CompletionItem[]> {
        const completionItems: vscode.CompletionItem[] = [];

        // 假设我们提供简单的技能补全，带有描述
        const skills = [
            { name: '阳春白雪',detail: '曲风', description: '一种提升攻击力的技能' },
            { name: '疏影横斜', description: '提供防御效果的技能' },
            { name: '云生结海', description: '恢复气血的技能' },
            { name: '渡渡鸟真不靠谱',detail: '测试',alias:'渡渡鸟', description: '具有特殊效果的技能' },
            { name: '渡渡鸟呸呸呸',detail: '测试2',alias:'渡渡鸟', description: '具有特殊效果的技能' }
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
