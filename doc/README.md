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
.face-tree-node--open .face-tree-node-open:before { content: '-';}
.face-tree-node--close .face-tree-node-open:before { content: '+';}
.face-tree-node--close {
  height: 22px;
  overflow-y: hidden;
}
.face-tree-node-open {
  position: absolute;
  left: 0;
  top: 0;
  color: #999;
}
.face-tree-node-label { display: block; }
.face-tree-node-label:hover { background-color: aliceblue;}
.face-tree-node-check {
  margin-right: 0.3em;
  vertical-align: middle;
  display: inline-block;
}
.face-tree-node-text {
  display: inline-block;
  vertical-align: middle;
}
````