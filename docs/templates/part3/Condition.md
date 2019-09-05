# 条件判断

## v-show

通过 v-show，条件判断进行控制和切换一个元素

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
        <p v-show="seen">Hello world!</p>
        <p v-show="!seen">Hello vue.js</p>
    </div>
    
    <script>
        new Vue({
            el: '#app',
            data: {
                seen: true
            }
        })
    </script>
    </body>
    </html>

    ```
    
* 页面显示效果

    ```Hello world!```
    

