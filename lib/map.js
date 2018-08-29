var extend = require("extend")
var treeforEach = require('./forEach')
/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} childKey - 子节点的 key
 */
module.exports = function map(data, judgeChild, handler) {
    require('./throwErrorEachParam')('map', arguments)
    data = extend(true, [], data)
    treeforEach(data, judgeChild, function (item, index, array) {
        var result = handler.apply(this, arguments)
        array[index] = result
    })
    return data
}
