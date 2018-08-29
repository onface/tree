import { TreeLogic } from 'face-tree';
var data = require('./data.demo');


var checkedArray = ['111','12']
var tree = new TreeLogic({
    getData() {
        return data
    },
    getChecked() {
        return checkedArray
    },
    judgeChild:'child',
    onToggleCheck(checkeds) {
        console.log('----- toggleCheck checkeds -----\n',checkeds)
        // checkedArray = extend(true,[],checkeds)
    }
})
tree.toggleCheck('112')
