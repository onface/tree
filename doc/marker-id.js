var TreeMap = require('face-tree/lib/map')
var TreeFind = require('face-tree/lib/find')
var data = require('./numberData')
var expect = require("expect.js")
var numberData = require('../example/numberData')
var resultData = TreeMap(numberData, 'children', function (item, index) {
    item.$index = this.$parent.index.concat([index]).join('-')
    item.$value = this.$parent.data.concat(item).map(function (parentItem) {
        return parentItem.value
    }).join('-')
    return item
})
/*
    某些场景下，服务器端给到的 value 数据并不是唯一的，而是相对同级数据是唯一的，此时就需要根据上下级关系扩展出$value
    就好像一个大家族，
    大爷爷
    二爷爷
    小爷爷

    大叔叔
    二叔叔
    小叔叔

    大儿子
    二儿子
    小儿子

    直接说小儿子，只能知道是第三个儿子，并不能知道他爸爸和爷爷是谁，所以需要
    $value = '大爷爷 生的 二叔叔 生的 小儿子'
    $value = '小爷爷 生的 大叔叔 生的 二儿子'

    最终通过将 $value进行 $value.split(' 生的 ') 可以找出所有的父级 value
    如果想要更多信息，则需要使用
    TreeLogic.find(data, function (item){
        return item.$value === '1-2'
    })
    {
        target: {
            label: "tim",
            value: "2",
            $index: "0-1",
            $value: "1-2"
        },
        parent: {
            index: [0],
            data: [
                {
                    label: "nimo",
                    value: "1",
                    children: [ Object, Object],
                    $index: "0",
                    $value: "1"
                }
            ]
        }
    }
*/
var result = [
    {
        "label": "nimo",
        "value": "1",
        "children": [
            {
                "label": "nico",
                "value": "1",
                "$index": "0-0",
                "$value": "1-1"
            },
            {
                "label": "tim",
                "value": "2",
                "$index": "0-1",
                "$value": "1-2"
            }
        ],
        "$index": "0",
        "$value": "1"
    },
    {
        "label": "jen",
        "value": "2",
        "children": [
            {
                "label": "tom",
                "value": "1",
                "$index": "1-0",
                "$value": "2-1"
            },
            {
                "label": "oil",
                "value": "2",
                "$index": "1-1",
                "$value": "2-2"
            }
        ],
        "$index": "1",
        "$value": "2"
    }
]
expect(resultData).to.eql(result)
expect(
    TreeFind(resultData, 'children', function (item) {
        return item.$value == '2-2'
    })
).to.eql(
    {
        "target": {
            "label": "oil",
            "value": "2",
            "$index": "1-1",
            "$value": "2-2"
        },
        "parent": {
            "index": [
                1
            ],
            "data": [
                {
                    "label": "jen",
                    "value": "2",
                    "children": [
                        {
                            "label": "tom",
                            "value": "1",
                            "$index": "1-0",
                            "$value": "2-1"
                        },
                        {
                            "label": "oil",
                            "value": "2",
                            "$index": "1-1",
                            "$value": "2-2"
                        }
                    ],
                    "$index": "1",
                    "$value": "2"
                }
            ]
        }
    }
)
