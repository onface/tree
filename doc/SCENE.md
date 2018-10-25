# 场景示例

## infinite
树形数据是多层结构的时候，我们需要进行无限递归渲染出dom结构，如下示例所示，这样很麻烦，比较容易出错。

````code
{
    title: '无限循环渲染',
    desc: '',
    html: '<div id="infinite-demo" style="padding:1em;" ></div>',
    source: './infinite.demo.js',
    run: './infinite.demo.js',
    side: false
}
````

## loop

我们可以利用loop函数进行无限递归循环渲染，使用者只需要负责dom的事件绑定与样式即可。如下示例所示：        
渲染顺序为：数据结构层次从浅到深直至叶子节点数据，同级数据按索引值从0开始。

````code
{
    title: 'loop函数循环渲染',
    desc: '',
    html: '<div id="loop-demo" style="padding:1em;" ></div>',
    source: './loop.demo.js',
    run: './loop.demo.js',
    side: false
}
````
