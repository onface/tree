var TreeLogic = require('face-tree');
var data = require('./data.demo');

var result = TreeLogic.find(data, 'child', function (item, index, array) {
    return item.id == '22'
})
console.log('----- find result -----\n',result)
