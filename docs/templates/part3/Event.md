# 事件处理

## 点击事件

v-on 指令，它用于监听 DOM 事件<br>

点击事件可以是函数，也可以是简单的的计算
* code
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Vue.js</title>
        <script src="./js/vue.js"></script>
    </head>
    <body>
    
    <div id="app">
        <button @click="handleClickMe">Click 1</button>
        <button @click="seen = !seen">Click 2</button>
        <p v-show="seen">Now you seen me</p>
    </div>
    
    <script>
        new Vue({
            el: '#app',
            data: {
                seen: true
            },
            methods: {
                handleClickMe() {
                    this.seen = !this.seen
                }
            }
        })
    </script>
    </body>
    </html>

    ```

可以简写为@click<br>
* 缩写
    ```
    <!-- 完整语法 -->
    <a v-on:click="doSomething">...</a>
    
    <!-- 缩写 -->
    <a @click="doSomething">...</a>
    ```
    


