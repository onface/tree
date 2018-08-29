var TreeLogic = require('face-tree');
var data = require('./data.demo');

var visitedItem = []

TreeLogic.some(data, 'child', function (item, index, array) {
    visitedItem.push(item)
    if(item.id == 11){
        return true
    }
})

console.log('----- some visitedItem -----\n',visitedItem)
