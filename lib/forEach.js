/**
 * fucntion - 遍历tree数据
 * @parame {Array} data - 树形结构数据
 * @param {string|function} judgeChild - 子节点的 key
 * @param {function} handler(item, index, array)   this.$parent
 */
module.exports = function forEach (data, judgeChild, handler) {
    require('./throwErrorEachParam')('forEach', arguments)
    function each(target, parent) {
        target.forEach(function (item, index) {
            var applyThis = {
                $parent: parent
            }
            var applyParam = [item, index, target]
            handler.apply(applyThis, applyParam)
            var child
            if (typeof judgeChild === 'function') {
                child = judgeChild.apply(applyThis, applyParam)
            }
            else if (typeof judgeChild === 'string') {
                child = item[judgeChild]
            }
            if (Array.isArray(child)) {
                var currentParent = {}
                // （与深复制有关）concat 是为了防止 index 和 data 按地址引用，并让 index data 中的 数组项还是按地址引用
                currentParent.index = parent.index.concat([index])
                currentParent.data = parent.data.concat([item])
                each(child, currentParent)
            }
        })
    }
    var rootChildParent = {
        index: [],
        data: []
    }
    each(data, rootChildParent)
}
