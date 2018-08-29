var TreeLogic = require('../index')
var data = require('./numberData')
var expect = require("expect.js")
var numberData = require('../example/numberData')
var resultData = TreeLogic.map(numberData, 'child', function (item, index) {
    item.$indexID = this.$parent.index.concat([index]).join('-')
    item.$id = this.$parent.data.concat(item).map(function (parentItem) {
        return parentItem.id
    }).join('-')
    return item
})
/*
    某些场景下，服务器端给到的 id 数据并不是唯一的，而是相对同级数据是唯一的，此时就需要根据上下级关系扩展出$id
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
    $id = '大爷爷 生的 二叔叔 生的 小儿子'
    $id = '小爷爷 生的 大叔叔 生的 二儿子'

    最终通过将 $id进行 $id.split(' 生的 ') 可以找出所有的父级 id
    如果想要更多信息，则需要使用
    TreeLogic.find(data, function (item){
        return item.$id === '1-2'
    })
    {
        target: {
            name: "tim",
            id: "2",
            $indexID: "0-1",
            $id: "1-2"
        },
        parent: {
            index: [0],
            data: [
                {
                    name: "nimo",
                    id: "1",
                    child: [ Object, Object],
                    $indexID: "0",
                    $id: "1"
                }
            ]
        }
    }
*/
var result = [
    {
        "name": "nimo",
        "id": "1",
        "child": [
            {
                "name": "nico",
                "id": "1",
                "$indexID": "0-0",
                "$id": "1-1"
            },
            {
                "name": "tim",
                "id": "2",
                "$indexID": "0-1",
                "$id": "1-2"
            }
        ],
        "$indexID": "0",
        "$id": "1"
    },
    {
        "name": "jen",
        "id": "2",
        "child": [
            {
                "name": "tom",
                "id": "1",
                "$indexID": "1-0",
                "$id": "2-1"
            },
            {
                "name": "oil",
                "id": "2",
                "$indexID": "1-1",
                "$id": "2-2"
            }
        ],
        "$indexID": "1",
        "$id": "2"
    }
]
expect(resultData).to.eql(result)
expect(
    TreeLogic.find(resultData, 'child', function (item) {
        return item.$id == '2-2'
    })
).to.eql(
    {
        "target": {
            "name": "oil",
            "id": "2",
            "$indexID": "1-1",
            "$id": "2-2"
        },
        "parent": {
            "index": [
                1
            ],
            "data": [
                {
                    "name": "jen",
                    "id": "2",
                    "child": [
                        {
                            "name": "tom",
                            "id": "1",
                            "$indexID": "1-0",
                            "$id": "2-1"
                        },
                        {
                            "name": "oil",
                            "id": "2",
                            "$indexID": "1-1",
                            "$id": "2-2"
                        }
                    ],
                    "$indexID": "1",
                    "$id": "2"
                }
            ]
        }
    }
)
