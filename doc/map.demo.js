var TreeMap = require('face-tree/lib/map');
var data = require('./data.demo');

var resultData = TreeMap(data, 'children', function (item, index, currentArray) {
    item.$index = this.$parent.index.concat([index]).join('_')
    item.$id = this.$parent.data.concat(item).map(function (parentItem) {
        return parentItem.id
    }).join('_')
    return item
})

console.log('----- map resultData -----\n',resultData)
