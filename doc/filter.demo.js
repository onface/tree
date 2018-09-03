var TreeFilter = require('face-tree/lib/filter');
var data = require('./data.demo');

var result = TreeFilter(data, 'children', function (item, index, array) {
    return !/2/.test(item.id)
})
console.log('----- filter result -----\n',result)
