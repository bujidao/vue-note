module.exports = {
    dest: 'dist',
    base: '/vue-note/',
    title: 'Vue Note',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Vue 官网', link: 'https://vuejs.org/' },
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    ['/templates/part1/background/', '背景'],
                    ['/templates/part2/install/', '安装'],
                    {
                        title: '语法用法',
                        collapsable: false,
                        children: [
                            ['/templates/part3/', '使用介绍'],
                            ['/templates/part3/Syntax.md', '模板语法'],
                            ['/templates/part3/Condition.md', '条件判断'],
                            ['/templates/part3/Class Style.md', 'Class & Style'],
                            ['/templates/part3/Event.md', '点击事件'],
                            ['/templates/part3/List.md', '列表渲染'],
                            {
                                title: '组件使用',
                                collapsable: false,
                                children: [
                                    ['/templates/part3/Components.md', '组件介绍'],
                                    ['/templates/part3/components/dialog.md', '弹窗使用']
                                ]
                            },
                        ]
                    },
                    ['/templates/part4/afterword/', '编后语']
                ]
            },
        ],
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',

        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'izengjing/vue-note',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'izengjing/vue-note',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'publish',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'

    },
    markdown: {
        lineNumbers: true
    }
}
