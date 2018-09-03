var TreeSome = require('face-tree/lib/some');
var data = require('./data.demo');

var visitedItem = []

TreeSome(data, 'children', function (item, index, array) {
    visitedItem.push(item)
    if(item.id == 11){
        return true
    }
})

console.log('----- some visitedItem -----\n',visitedItem)
