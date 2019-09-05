# 列表渲染


## v-for in


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
        <table>
            <tr>
                <td>name</td>
                <td>age</td>
                <td>address</td>
            </tr>
            <tr v-for="(item, index) in dataList" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.age }}</td>
                <td>{{ item.address }}</td>
            </tr>
        </table>
    </div>

    <script>
        new Vue({
            el: '#app',
            data: {
                dataList: [
                    {
                        name: 'Alex',
                        age: 23,
                        address: 'beijing'
                    },
                    {
                        name: 'Tom',
                        age: 24,
                        address: 'tokyo'
                    },
                    {
                        name: 'Herry',
                        age: 24,
                        address: 'bujidao'
                    }
                ]
            }
        })
    </script>
    </body>
    </html>

    ```

* 显示结果

name | age | address
---|---|---
Alex | 23 | beijing
Tom | 24 | tokyo
Herry | 24 | bujidao



