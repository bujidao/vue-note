# 模板语法

vue.js 的核心是一个允许采用简洁的**模板语法**来声明式地将数据渲染进 DOM 的系统：<br>

## 文本
数据绑定最常见的形式就是使用 (双大括号) 的文本插值：

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
        <div>{% raw %}{{% endraw %}{ msg }}</div>
    </div>
    
    <script>
        new Vue({
            el: '#app',
            data: {
                msg: 'hello Vue.js'
            }
        })
    </script>
    </body>
    </html>

    ```

## 特性
语法不能作用在 HTML 特性上，遇到这种情况应该使用 v-bind 指令<br>
可以用冒号简写
* 简写
    ```
    <!-- 完整语法 -->
    <a v-bind:href="url">...</a>
    
    <!-- 缩写 -->
    <a :href="url">...</a>
    ```
    
## 使用Javascript表达式
以下这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含单个表达式。

* 有效写法
    ```
    {% raw %}{{ number + 1 }}{% endraw %}
        
    {% raw %}{{ ok ? 'YES' : 'NO' }}{% endraw %}
    
    {% raw %}{{ message.split('').reverse().join('') }}{% endraw %}
    
    <div v-bind:id="'list-' + id"></div>
    ```


以下这些不会生效
* 无效写法
    ```
    <!-- 这是语句，不是表达式 -->
    {% raw %}{{ var a = 1 }}{% endraw %}
    
    <!-- 流控制也不会生效，请使用三元表达式 -->
    {% raw %}{{ if (ok) { return message } }}{% endraw %}
    ```



