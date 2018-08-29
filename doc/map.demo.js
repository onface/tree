var TreeLogic = require('face-tree');
var data = require('./data.demo');

var resultData = TreeLogic.map(data, 'child', function (item, index, currentArray) {
    item.$indexID = this.$parent.index.concat([index]).join('_')
    item.$id = this.$parent.data.concat(item).map(function (parentItem) {
        return parentItem.id
    }).join('_')
    return item
})

console.log('----- map resultData -----\n',resultData)
