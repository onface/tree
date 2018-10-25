# 指引

> 使用一个组件或模块之前，应当知道它能解决的问题是什么，不能解决的问题是什么。使用的最佳实践是什么？

日常开发工作中都会遇到开发树形菜单选型的功能比如：

![](https://user-images.githubusercontent.com/3949015/44773517-622dfc80-aba3-11e8-8bc5-0a06a58c449e.png)

有很多开源树形组件库可以使用，但是在某些业务需求下这些组件都不能满足业务需求。这时候就需要自己定制开发。 face-tree 提供了树形控件所有的逻辑封装。

使用 face-tree 可以快速开发一个自己的树形控件。

face-tree 用于处理树形数据的数据处理，是底层的数据逻辑封装，提供了一系列的工具类方法和树形组件必要的数据处理接口，可以在所有能兼容js的环境下进行二次封装，这需要对树形逻辑有一定的理解。       


## 快速上手

以 react 为例快速开发一个树形控件

````code
{
    title: '快速上手',
    desc: '',
    html: '<div id="intro-demo" style="padding:1em;" ></div>',
    source: './intro.demo.js',
    run: './intro.demo.js',
    side: false
}
````
[示例：无线循环渲染](./SCENE.md)

## 研发中的设计接口

接口的研发，设计，优化等都会在[issues](https://github。com/onface/face-tree/issues/)有记录，如果遇到特别的无法解决的业务场景，欢迎提出以便我们共同解决成长。
