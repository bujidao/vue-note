# 样式绑定

## 绑定class

样式绑定用v-bind

* html code
    ```
    <div id="app">
     <div
           class="static"
           v-bind:class="{ avatar: isActive, 'text-danger': isActive2 }"
         ></div>
    </div>
    ```
* script code
    ```
    var app = new Vue({
      el: '#app',
      data: {
        isActive: false,
        isActive2: true
      }
    })
    ```
代码说明：上面这个div的样式，isActive 为假，则avatar这个class无效，isActive2为真，则text-danger这个class 有效，因此，这个div的渲染结果是
```
<div class="static text-danger"></div>
```

## 绑定style

* html code
    ```
    <div id="app">
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
    </div>
    ```
* script code
    ```
    var app = new Vue({
      el: '#app',
      data: {
        activeColor: red,
        fontSize: 12
      }
    })
    ```
这个div的渲染结果是
```
<div style="color: red;fontSize: 12px;"></div>
```
