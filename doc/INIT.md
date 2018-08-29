# 初始化
声称对象,减少每次调用传入参数,实例对象自带tool所有方法

## 加载调用
```js
import { TreeLogic } from 'face-tree';
```
或
```js
var TreeLogic = require('face-tree').TreeLogic;
```

## init
new TreeLogic(option)
最简单的进行如下四项必要配置即可开始使用

```js
import { TreeLogic } from 'face-tree';

var tree = new TreeLogic({
    getData() {
        return []
    },
    getChecked() {
        return []
    },
    judgeChild:'child',
    onToggleCheck(checkedArray) {
        // checkedArray: [1, 12, 121]
    }
})
```

### option
- getData
    - type : function
    - @return : [Array]
    - 作用 : 获取最新的数据源
    - 例 : [示例data](./data.html#data)
- getChecked
    - type : function
    - @return : [Array]
    - 作用 : 获取最新的已选中id数组
    - 例 : `[1,12,121]`
- judgeChild
    - type : String
    - 作用 : 递归遍历所需子节点的 key
    - 例 : [示例data](./data.html#data) 中的子节点`key`为`'child'`
- onToggleCheck
    - type : function
    - @param : [Array] 选中状态变化后的被选中的id数组
    - 作用 : 将选中状态变化后的被选中的id数组回调给使用者
    - 例 : [示例](#toggleCheck)

## toggleCheck

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './toggleCheck.demo.js',
    source: './toggleCheck.demo.js',
    open: true
}
````

checkeds
```
["111", "12", "1121", "112", "11", "1"]
```

## tool

forEach
> tree.forEach(handler)     
> 回调函数使用方法 [参考](./README.md#forEach)

```js
tree.forEach(function(item, index, array){
    // do something
})
```

map
> tree.map(handler)     
> 回调函数使用方法 [参考](./README.md#map)

```js
tree.map(function(item, index, array){
    return item
})
```

find
> tree.find(handler)     
> 回调函数使用方法 [参考](./README.md#find)

```js
let result = tree.find(function(item, index, array){
    return true
})
```

some
> tree.some(handler)     
> 回调函数使用方法 [参考](./README.md#some)

```js
tree.some(function(item, index, array){
    return true
})
```

filter
> tree.filter(handler)     
> 回调函数使用方法 [参考](./README.md#filter)

```js
tree.filter(function(item, index, array){
    return item
})
```
