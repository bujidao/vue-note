# 组件


范例目录如下

    ├── index.html                  // 入口文件
    ├── css
    │   └── bui.css                 // 组件的样式
    ├── js
    │   └── vue.js                  // 本地vue.js
    ├── components
    │   └── dialog
    │        ├── dialog.js          // 组件文件
    │        └── dialog.md          // 组件使用说明
    └── tools

* 这里只讲组件的使用

    1. 通过script标签引入组件（在vue后面引入）
        > `<script src="./components/dialog/dialog.js"></script>`
    1. 通过link标签引入组件样式
        > `<link rel="stylesheet" href="./css/bui.css">`


* 本例演示的是引入的是一个弹窗组件：
    组件的用法和普通的html标签用法一样，例如本例 `<bu-dialog></bu-dialog>`
    引入组件以后，就可以根据组件的说明文档进行自定义文档了


* 上源码
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js</title>
        <script src="./js/vue.js"></script>
        <script src="components/dialog/dialog.js"></script>
        <link rel="stylesheet" href="css/bui.css">
    </head>
    <body>

    <div id="app">
        <button @click="dialogVisible = true">显示弹窗</button>
        <bu-dialog title="温馨提示！" :visible.sync="dialogVisible" color="white">
            <h1>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h1>
            <h1>披绣闼，俯雕甍，山原旷其盈视，川泽纡其骇瞩。闾阎扑地，钟鸣鼎食之家；舸舰迷津，青雀黄龙之舳。云销雨霁，彩彻区明。落霞与孤鹜齐飞，秋水共长天一色。</h1>
        </bu-dialog>
    </div>
    <script>
        new Vue({
            el: '#app',
            data: {
                dialogVisible: false
            }
        })
    </script>
    </body>
    </html>

    ```

<br>
> 以后有机会，我尽量把组件的相关说明统一放到这个文档里面



