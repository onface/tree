# 场景示例

## notId
** *Question* **        
在某些场景下, 数据源会出现以下几种情况
1. 只有value, 没有id
2. 服务器端给到的 id 数据并不是唯一的
3. 压根就没有可识别节点key, 更别说id了     

** *Solution* **        
利用工具类方法[map](./README.md#map) 生成唯一id        
** *Explanation* **   

>       
建议根据上下级关系扩展出$id或id      
就好像一个大家族，
>          
    大爷爷     
    二爷爷     
    小爷爷
>
    大叔叔     
    二叔叔     
    小叔叔
>    
    大儿子     
    二儿子     
    小儿子
>
直接说小儿子，只能知道是第三个儿子，并不能知道他爸爸和爷爷是谁，所以需要        
$id = '大爷爷 生的 二叔叔 生的 小儿子'       
$id = '小爷爷 生的 大叔叔 生的 二儿子'    
>
最终通过将 $id进行 $id.split(' 生的 ') 可以找出所有的父级 id      


** *Way* **   
用此数据举例 [点此查看示例数据源](./DATA.md#notIdData)
````code
{
    title: '处理方式',
    desc: '`create unique id`',
    js: './createUId.demo.js',
    source: './createUId.demo.js',
    open: true
}
````
处理后数据
> 可以控制台查看,也可以点击`</>`展开查看

````js
[
  {
    "name": "nico",
    "value": "I'm grandpa one.",
    "child": [
      {
        "name": "nimo",
        "value": "I'm dad one.",
        "child": [
          {
            "name": "nipo",
            "value": "I'm son one.",
            "$indexID": "0_0_0"
          }
        ],
        "$indexID": "0_0"
      },
      {
        "name": "nina",
        "value": "I'm mom one.",
        "$indexID": "0_1"
      }
    ],
    "$indexID": "0"
  },
  {
    "name": "tim",
    "value": "I'm grandpa two.",
    "child": [
      {
        "name": "tom",
        "value": "I'm dad two.",
        "$indexID": "1_0"
      },
      {
        "name": "oil",
        "value": "I'm mom two.",
        "$indexID": "1_1"
      }
    ],
    "$indexID": "1"
  }
]
````
