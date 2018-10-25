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
.face-tree-node {
  position: relative;
  padding-left: 1.3em;
}
.face-tree-node--open .face-tree-node-icon:before { content: '-';}
.face-tree-node--close .face-tree-node-icon:before { content: '+';}
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
````

