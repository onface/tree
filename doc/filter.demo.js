var TreeLogic = require('face-tree');
var data = require('./data.demo');

var result = TreeLogic.filter(data, 'child', function (item, index, array) {
    return !/2/.test(item.id)
})
console.log('----- filter result -----\n',result)
