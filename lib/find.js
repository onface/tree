var extend = require("extend")
var treeforEach = require('./forEach')
/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} childKey - 子节点的 key
 */
module.exports = function find(data, judgeChild, handler) {
    require('./throwErrorEachParam')('find', arguments)
    var output = {}
    treeforEach(data, judgeChild, function (item, index, array) {
        var result = handler.apply(this, arguments)
        if (result) {
            output.target = item
            output.siblings = array
            output.parent = this.$parent
        }
    })
    return output
}
