var extend = require("extend")
var treeforEach = require('./forEach')
/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} childKey - 子节点的 key
 */
module.exports = function filter(data, judgeChild, handler) {
    require('./throwErrorEachParam')('filter', arguments)
    data = extend(true, [], data)
    treeforEach(data, judgeChild, function (item, index, array) {
        var notFilter = handler.apply(this, arguments)
        if(!notFilter){
            array.splice(index,1)
        }
    })
    return data
}
