var TreeFind = require('face-tree/lib/find');
var data = require('./data.demo');

var result = TreeFind(data, 'children', function (item, index, array) {
    return item.id == '22'
})
console.log('----- find result -----\n',result)
