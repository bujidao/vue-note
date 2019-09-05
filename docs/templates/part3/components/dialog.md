[^_^]:
    ## buDialog 组件使用说明

* 使用方法
```
<bu-dialog :title="标题">
    <h2>dialog</h2>
    <p>Hi , i am bu-dialog demo body</p>
    
    <template v-slot:footer>
        <div>hi i am bu-dialog demo footer</div>
    </template>
</bu-dialog>
```

* 参数说明
    * visible: 是否显示弹窗
    * title: 标题（default: 温馨提示）
    * width: 弹窗宽度（default: 80%）
    * top: 弹窗距离浏览器顶部的高度（default: 25%）
    * theme: 弹窗主题颜色（default: #3490dc）
    * color: 弹窗标题字体颜色（default: #303133）
    * round: 弹窗圆角（default: 0px）
