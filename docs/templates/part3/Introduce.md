# vue实例化

每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的：

```
var vm = new Vue({
  // options
})
```
<br>
注： 本教程只讲解如下几个方法

***

## \# el

解释： 为vue实例提供挂载元素，值可以是 CSS 选择符，或实际 HTML 元素，或返回 HTML 元素的函数。（本实例挂载到html上面）。<br>

* html
    ```
    <div id="app"></div>
    ```

* js代码
    ```
    var vm = new Vue({
      el: '#app'
    })
    ```



## \# data

解释： 当Vue 实例被创建时，它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。(注意的是只有当实例被创建时就已经存在于 data 中的属性才是响应式的。)

* html
    ```
    <div id="app">{{ msg }}</div>
    ```

* js代码
    ```
    var vm = new Vue({
      data: {
        msg: 'hello Vue.js!'
      }
    })
    ```

* 页面显示结果
    ```
    hello Vue.js!
    ```

## \# mounted (function)

解释： vue生命周期之一，不需要仔细研究，只需要知道：在页面加载以后，mounted函数会自动执行里面的函数进行了

* js代码
    ```
    var vm = new Vue({
      mounted () {
        //you code here       
      }
    })
    ```

## \# methods

解释： 所有的函数体都写在这个里面

* js代码
    ```
    var vm = new Vue({
      methods: {
        //you functions here       
      }
    })
    ```
