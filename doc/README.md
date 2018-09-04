# 工具类


## forEach
递归遍历, 从浅至深, 从上至下

> Tips:         
> forEach(data, judgeChild, handler(item, index, currentArray))       
> item and this.$parent not deep copy!   
> currentArray 是 item 所在的数组

````code
{
    title: 'forEach',
    desc: '',
    html: '<div id="forEach-demo"></div>',
    source: './forEach.demo.js',
    side: true,
    open: false
}
````


parentMap
```js
{
    nimo: {
        index: [],
        data: [],
        label: []
    },
    tim: {
        index: [0],
        data: [[Object]],
        label: ['nimo']
    },
    nico: {
        index: [0, 0],
        data: [[Object], [Object]],
        label: ['nimo', 'tim']
    },
    Jack: {
        index: [0, 0],
        data: [[Object], [Object]],
        label: ['nimo', 'tim']
    },
    Jen: {
        index: [0, 0, 1],
        data: [[Object], [Object], [Object]],
        label: ['nimo', 'tim', 'Jack']
    },
    sam: {
        index: [0],
        data: [[Object]],
        label: ['nimo']
    },
    oil: {
        index: [0, 1],
        data: [[Object], [Object]],
        label: ['nimo', 'sam']
    },
    poli: {
        index: [0, 1],
        data: [[Object], [Object]],
        label: ['nimo', 'sam']
    },
    Naer: {
        index: [],
        data: [],
        label: []
    },
    Que: {
        index: [1],
        data: [[Object]],
        label: ['Naer']
    },
    Beer: {
        index: [1],
        data: [[Object]],
        label: ['Naer']
    },
    nolabel: {
        index: [1, 1],
        data: [[Object], [Object]],
        label: ['Naer', 'Beer']
    },
    yumi: {
        index: [1, 1],
        data: [[Object], [Object]],
        label: ['Naer', 'Beer']
    }
}
```

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
```js
[
  {
    label: nimo,
    value: 1,
    children: [
      {
        label: tim,
        value: 11,
        children: [
          {
            label: nico,
            value: 111,
            $index: 0_0_0,
            $value: 1_11_111
          },
          {
            label: Jack,
            value: 112,
            children: [
              {
                label: Jen,
                value: 1121,
                $index: 0_0_1_0,
                $value: 1_11_112_1121
              }
            ],
            $index: 0_0_1,
            $value: 1_11_112
          }
        ],
        $index: 0_0,
        $value: 1_11
      },
      {
        label: sam,
        value: 12,
        children: [
          {
            label: oil,
            value: 121,
            $index: 0_1_0,
            $value: 1_12_121
          },
          {
            label: poli,
            value: 122,
            $index: 0_1_1,
            $value: 1_12_122
          }
        ],
        $index: 0_1,
        $value: 1_12
      }
    ],
    $index: 0,
    $value: 1
  },
  {
    label: Naer,
    value: 2,
    children: [
      {
        label: Que,
        value: 21,
        $index: 1_0,
        $value: 2_21
      },
      {
        label: Beer,
        value: 22,
        children: [
          {
            label: nolabel,
            value: 221,
            $index: 1_1_0,
            $value: 2_22_221
          },
          {
            label: yumi,
            value: 222,
            $index: 1_1_1,
            $value: 2_22_222
          }
        ],
        $index: 1_1,
        $value: 2_22
      }
    ],
    $index: 1,
    $value: 2
  }
]
```

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
```js
{
  target: {
    label: Beer,
    value: 22,
    children: [ [object] , [object] ]
  },
  siblings:[
    {
        label: Que,
        value: 21
    },
    {
        label: Beer,
        value: 22,
        children: [ [object] , [object] ]
    }
  ],
  parent: {
    index: [
      1
    ],
    data: [
      {
        label: Naer,
        value: 2,
        children: [
          {
            label: Que,
            value: 21
          },
          {
            label: Beer,
            value: 22,
            children: [
              {
                label: nolabel,
                value: 221
              },
              {
                label: yumi,
                value: 222
              }
            ]
          }
        ]
      }
    ]
  }
}
```

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
```js
[
  {
    "label": "nimo",
    "value": "1",
    "children": [ [Object], [Object] ]
  },
  {
    "label": "tim",
    "value": "11",
    "children": [ [Object], [Object] ]
  }
]
```

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
```js
[
  {
    label: nimo,
    value: 1,
    children: [
      {
        label: tim,
        value: 11,
        children: [
          {
            label: nico,
            value: 111
          }
        ]
      }
    ]
  }
]
```
