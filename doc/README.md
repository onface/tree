# 树形

## basic

````code
{
    title: '基本完整树形示例',
    desc: '',
    html: '<div id="basic-demo"></div>',
    run: './basic.demo.js',
    side: false,
    open: false
}
````

````css
.face-tree {
  min-height:250px;
}
.face-tree-node {
  position: relative;
  padding-left: 1.3em;
}
.face-tree-node--close > .face-tree-node-icon:before { content: '+';}
.face-tree-node--open > .face-tree-node-icon:before { content: '-';}
.face-tree-node--loading > .face-tree-node-icon:before { content: '○';}
.face-tree-node--close {
  height: 30px;
  overflow-y: hidden;
}
.face-tree-node-icon {
  position: absolute;
  left: 0;
  top: 0;
  color: #999;
  width:1.3em;
  line-height:28px;
  text-align:center;
  cursor:pointer;
}
.face-tree-node-label:hover { background-color: #f0f8ff;}
.face-tree-node-tool {
  display:inline-block;
  line-height:30px;
  vertical-align: middle;
  color:#aaa;
  font-size:10px;
}
````


## editable

有时会遇到业务场景，比如：树形数据是用户动态编辑生成的    
可以如下示例快速上手

````code
{
    title: '动态变化的树形示例',
    desc: '',
    html: '<div id="editable-demo"></div>',
    run: './editable.demo.js',
    side: false,
    open: false
}
````

## async

有时会遇到业务场景，比如：树形数据的数据量非常大，初始只显示一部分的数据，其余数据需要用户点击展开节点后，再异步加载该节点下的数据    
可以如下示例快速上手

````code
{
    title: '动态变化的树形示例',
    desc: '',
    html: '<div id="async-demo"></div>',
    run: './async.demo.js',
    side: false,
    open: false
}
````