import TreeLogic from 'face-tree';
var data = require('./data.demo');


var checkedArray = ['111','12']
var tree = new TreeLogic({
    input(){
        return {
            data:data,
            checked:checkedArray
        }
    },
    output(checkeds) {
        console.log('----- toggleCheck checkeds -----\n',checkeds)
        // checkedArray = extend(true,[],checkeds)
    }
})
tree.action.switch('112')
