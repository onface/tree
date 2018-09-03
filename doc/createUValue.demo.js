var TreeMap = require('face-tree/lib/map');
var DataNotValue = require('./data.notValue.demo');

var resultData =TreeMap(DataNotValue, 'children', function (item, index, currentArray) {
    item.$index = this.$parent.index.concat([index]).join('_')
    return item
})

console.log('----- createUId resultData -----\n',resultData)
