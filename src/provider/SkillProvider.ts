import * as vscode from 'vscode';

export class XiangzhiCompletionProvider implements vscode.CompletionItemProvider {
    provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
    ): Thenable<vscode.CompletionItem[]> {
        const completionItems: vscode.CompletionItem[] = [];
        const skills = [
            { name: '阳春白雪',detail: '曲风&技能',alias:'阳春', description: '游戏设置里面设置自动释放才有效果' },
            { name: '高山流水',detail: '曲风&技能',alias:'高山', description: '可以移动释放技能！主动效果为增加加速值' },
            { name: '梅花三弄',detail: '曲风&技能',alias:'梅花盾', description: '梅花盾' },
            // { name: '平沙落雁',detail: '曲风&技能',alias:'平沙', description: '疯狂星期四专用！' },
            { name: '云生结海',detail: '技能',alias:'云生', description: '平摊小圈' },
            { name: '笑傲光阴',detail: '技能',alias:'笑傲', description: '减伤小圈' },
            // { name: '笑傲光阴',detail: '技能',alias:'笑傲', description: '一种提升攻击力的技能' },
            { name: '宫',detail: '技能',alias:'宫', description: '莫？' },
            { name: '变宫',detail: '技能',alias:'变宫', description: '莫？' },
            { name: '商',detail: '技能',alias:'商', description: '莫？' },
            { name: '角',detail: '技能',alias:'角', description: '莫？' },
            { name: '徵',detail: '技能',alias:'徵', description: '莫？' },
            { name: '变徵',detail: '技能',alias:'变徵', description: '莫？' },
            { name: '羽',detail: '技能',alias:'羽', description: '莫？' },
            { name: '一指回鸾',detail: '技能',alias:'驱散', description: '奶歌的驱散，cd 4s' },
            { name: '疏影横斜',detail: '技能',alias:'影子', description: '放影子都不知道玩什么咕咕！开除咕籍！' },
            { name: '孤影化生',detail: '技能',alias:'孤影', description: '保存当前状态，持续时间内关闭会回到保存的状态（根本就是临时保存吧！）' },
            { name: '移形换影',detail: '技能',alias:'吃影子', description: '吃影子才会用到这个' },
            // { name: '落梅',detail: 'BUFF',alias:'落梅', description: '不能套盾，还有一种我记得是减伤！' },
        ];

        // 为每个技能创建一个补全项
        skills.forEach(skill => {
            const completionItem = new vscode.CompletionItem(skill.name, vscode.CompletionItemKind.Text);
            completionItem.documentation = new vscode.MarkdownString(skill.description); // 详细描述
            completionItem.detail = skill.detail; // 额外描述信息
            completionItem.filterText = skill.alias; // 别名
            completionItems.push(completionItem);
        }); 

        return Promise.resolve(completionItems);
    }
}
