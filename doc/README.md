# 工具类

## 加载调用
```js
import TreeLogic from 'face-tree';
```
或
```js
var TreeLogic = require('face-tree');
```

## forEach
递归遍历, 从浅至深 , 从上至下

> Tips:         
> forEach(data, judgeChild, handler(item, index, currentArray))       
> item and this.$parent not deep copy!   
> currentArray 是 item 所在的数组

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './forEach.demo.js',
    source: './forEach.demo.js',
    open: true
}
````
> 打印数据可以控制台查看,也可以展开`</>`查看下列简列

itemArray
````js
[
  { name: nimo, id: 1, child: [ [Object], [Object] ] },
  { name: tim, id: 11, child: [ [Object], [Object] ] },
  { name: nico, id: 111 },
  { name: Jack, id: 112, child: [ [Object] ] },
  { name: Jen, id: 1121 },
  { name: sam, id: 12, child: [ [Object], [Object] ] },
  { name: oil, id: 121 },
  { name: poli, id: 122 },
  { name: Naer, id: 2, child: [ [Object], [Object] ] },
  { name: Que, id: 21 },
  { name: Beer, id: 22, child: [ [Object], [Object] ] },
  { name: noname, id: 221 },
  { name: yumi, id: 222 }
]
````
parentMap
````js
{
    nimo: {
        index: [],
        data: [],
        name: []
    },
    tim: {
        index: [0],
        data: [[Object]],
        name: ['nimo']
    },
    nico: {
        index: [0, 0],
        data: [[Object], [Object]],
        name: ['nimo', 'tim']
    },
    Jack: {
        index: [0, 0],
        data: [[Object], [Object]],
        name: ['nimo', 'tim']
    },
    Jen: {
        index: [0, 0, 1],
        data: [[Object], [Object], [Object]],
        name: ['nimo', 'tim', 'Jack']
    },
    sam: {
        index: [0],
        data: [[Object]],
        name: ['nimo']
    },
    oil: {
        index: [0, 1],
        data: [[Object], [Object]],
        name: ['nimo', 'sam']
    },
    poli: {
        index: [0, 1],
        data: [[Object], [Object]],
        name: ['nimo', 'sam']
    },
    Naer: {
        index: [],
        data: [],
        name: []
    },
    Que: {
        index: [1],
        data: [[Object]],
        name: ['Naer']
    },
    Beer: {
        index: [1],
        data: [[Object]],
        name: ['Naer']
    },
    noname: {
        index: [1, 1],
        data: [[Object], [Object]],
        name: ['Naer', 'Beer']
    },
    yumi: {
        index: [1, 1],
        data: [[Object], [Object]],
        name: ['Naer', 'Beer']
    }
}
````

## map
> 在forEach遍历方法上,返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值      

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './map.demo.js',
    source: './map.demo.js',
    open: true
}
````
resultData
````js
[
  {
    name: nimo,
    id: 1,
    child: [
      {
        name: tim,
        id: 11,
        child: [
          {
            name: nico,
            id: 111,
            $indexID: 0_0_0,
            $id: 1_11_111
          },
          {
            name: Jack,
            id: 112,
            child: [
              {
                name: Jen,
                id: 1121,
                $indexID: 0_0_1_0,
                $id: 1_11_112_1121
              }
            ],
            $indexID: 0_0_1,
            $id: 1_11_112
          }
        ],
        $indexID: 0_0,
        $id: 1_11
      },
      {
        name: sam,
        id: 12,
        child: [
          {
            name: oil,
            id: 121,
            $indexID: 0_1_0,
            $id: 1_12_121
          },
          {
            name: poli,
            id: 122,
            $indexID: 0_1_1,
            $id: 1_12_122
          }
        ],
        $indexID: 0_1,
        $id: 1_12
      }
    ],
    $indexID: 0,
    $id: 1
  },
  {
    name: Naer,
    id: 2,
    child: [
      {
        name: Que,
        id: 21,
        $indexID: 1_0,
        $id: 2_21
      },
      {
        name: Beer,
        id: 22,
        child: [
          {
            name: noname,
            id: 221,
            $indexID: 1_1_0,
            $id: 2_22_221
          },
          {
            name: yumi,
            id: 222,
            $indexID: 1_1_1,
            $id: 2_22_222
          }
        ],
        $indexID: 1_1,
        $id: 2_22
      }
    ],
    $indexID: 1,
    $id: 2
  }
]
````

## find
> 返回值

```
{
    target : [object] ,
    parent : {
        index : [array] ,
        data : [array] ,
    }
}
```

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './find.demo.js',
    source: './find.demo.js',
    open: true
}
````
result
````js
{
  target: {
    name: Beer,
    id: 22,
    child: [ [object] , [object] ]
  },
  siblings:[
    {
        name: Que,
        id: 21
    },
    {
        name: Beer,
        id: 22,
        child: [ [object] , [object] ]
    }
  ],
  parent: {
    index: [
      1
    ],
    data: [
      {
        name: Naer,
        id: 2,
        child: [
          {
            name: Que,
            id: 21
          },
          {
            name: Beer,
            id: 22,
            child: [
              {
                name: noname,
                id: 221
              },
              {
                name: yumi,
                id: 222
              }
            ]
          }
        ]
      }
    ]
  }
}
````

## some

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './some.demo.js',
    source: './some.demo.js',
    open: true
}
````
> 打印数据可以控制台查看,也可以展开`</>`查看下列简列

visitedItem
````js
[
  {
    "name": "nimo",
    "id": "1",
    "child": [ [Object], [Object] ]
  },
  {
    "name": "tim",
    "id": "11",
    "child": [ [Object], [Object] ]
  }
]
````

## filter

````code
{
    title: '基础使用',
    desc: '`desc`',
    js: './filter.demo.js',
    source: './filter.demo.js',
    open: true
}
````
result
````js
[
  {
    name: nimo,
    id: 1,
    child: [
      {
        name: tim,
        id: 11,
        child: [
          {
            name: nico,
            id: 111
          }
        ]
      }
    ]
  }
]
````
