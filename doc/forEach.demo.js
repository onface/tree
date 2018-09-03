var TreeForEach = require('face-tree/lib/forEach');
var data = require('./data.demo');

var itemArray = []
var parentMap = {}


TreeForEach(data, 'children', function (item, index, array) {
    itemArray.push(item)
    parentMap[item.name] = {
        index: this.$parent.index,
        data: this.$parent.data,
        // filter name
        name: this.$parent.data.map(function(item){ return item.name })
    }
})
console.log('----- forEach itemArray -----\n',itemArray)
console.log('----- forEach parentMap -----\n',parentMap)
