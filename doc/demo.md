# 场景示例

## notValue
** *Question* **        
在某些场景下, 数据源会出现以下几种情况
1. 只有value, 没有value
2. 服务器端给到的 value 数据并不是唯一的
3. 压根就没有可识别节点key, 更别说value了     

** *Solution* **        
利用工具类方法[map](./README.md#map) 生成唯一value        
** *Explanation* **   

>       
建议根据上下级关系扩展出$value或value      
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
$value = '大爷爷 生的 二叔叔 生的 小儿子'       
$value = '小爷爷 生的 大叔叔 生的 二儿子'    
>
最终通过将 $value进行 $value.split(' 生的 ') 可以找出所有的父级 value      


** *Way* **   
用此数据举例 [点此查看示例数据源](./DATA.md#notValueData)
````code
{
    title: '处理方式',
    desc: '`create unique value`',
    js: './createUValue.demo.js',
    source: './createUValue.demo.js',
    open: true
}
````
处理后数据
> 可以控制台查看,也可以点击`</>`展开查看

````js
[
  {
    "label": "nico",
    "value": "I'm grandpa one.",
    "children": [
      {
        "label": "nimo",
        "value": "I'm dad one.",
        "children": [
          {
            "label": "nipo",
            "value": "I'm son one.",
            "$index": "0_0_0"
          }
        ],
        "$index": "0_0"
      },
      {
        "label": "nina",
        "value": "I'm mom one.",
        "$index": "0_1"
      }
    ],
    "$index": "0"
  },
  {
    "label": "tim",
    "value": "I'm grandpa two.",
    "children": [
      {
        "label": "tom",
        "value": "I'm dad two.",
        "$index": "1_0"
      },
      {
        "label": "oil",
        "value": "I'm mom two.",
        "$index": "1_1"
      }
    ],
    "$index": "1"
  }
]
````
