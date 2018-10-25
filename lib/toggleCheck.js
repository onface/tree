var extend = require("extend");
var _ = require('lodash');
var find = require('./find');
var forEach = require('./forEach');

const check = function(checkArray,id) {
    // id : string|number|array
    if(typeof(id) == 'string' || typeof(id) == 'number'){
        id = [id]
    }
    // 往checkArray中添加 并去重
    return _.union(checkArray, id);
}
const uncheck = function(checkArray,id) {
    // id == string|number|array
    if(typeof(id) == 'string' || typeof(id) == 'number'){
        id = [id]
    }
    // 从checkArray中删除
    return _.difference(checkArray,id);
}

module.exports = function toggleCheck(settings, currentId, handler, tocheck) {
    require('./throwErrorEachParam')('toggleCheck', arguments)
    let s = extend(true, [], settings)

    // which action to do
    let isCheck = typeof tocheck != 'undefined' ? tocheck : !s.checked.includes(currentId)

    /*
        1. 操作判断
        2. 关联判断 
        3. 递归遍历 直接父元素 直接子元素
    */

    let target = find(s.data, s.judge.child, function(item){
                    return item[s.judge.id] == currentId
                })

    let targetAllChildren = []
        forEach(target.target[s.judge.child] || [], s.judge.child, function(item,index,array){
            targetAllChildren.push(item[s.judge.id])
        })

    // 递归循环父选中
    let recurParentCheck = function(curId){
        let target = find(s.data, s.judge.child, function(item){
            return item[s.judge.id] == curId
        })
        s.checked = check(s.checked, curId)

        let curParent = target.parent.data.reverse()[0] || {}
        let isExtendP = false
        if(s.extendParent.check){
            if(s.extendParent.checkUntilAll){
                let allSiblingsCheck = true
                target.siblings.some(function(item){
                    if(!s.checked.includes(item[s.judge.id])){
                        allSiblingsCheck = false
                    }
                })
                if(allSiblingsCheck){
                    isExtendP = true
                }
            }else{
                isExtendP = true
            }
        }
        if(isExtendP && typeof(curParent[s.judge.id]) != 'undefined'){
            recurParentCheck(curParent[s.judge.id])
        }
    }
    // 递归循环父取消
    let recurParentUncheck = function(curId){
        let target = find(s.data, s.judge.child, function(item){
            return item[s.judge.id] == curId
        })

        s.checked = uncheck(s.checked,curId)
        let curParent = target.parent.data.reverse()[0] || {}
        let isExtendP = false
        if(s.extendParent.uncheck){
            if(s.extendParent.uncheckUntilLast){
                let allSiblingsUncheck = true
                target.siblings.some(function(item){
                    if(s.checked.includes(item[s.judge.id])){
                        allSiblingsUncheck = false
                    }
                })
                if(allSiblingsUncheck){
                    isExtendP = true
                }
            }else{
                isExtendP = true
            }
        }
        if(isExtendP && typeof(curParent[s.judge.id]) != 'undefined'){
            recurParentUncheck(curParent[s.judge.id])
        }
    }
    // 递归循环子 : 虽然是一层一层传递下去,但是目前没有别的属性关联,所以直接关联至所有子孙元素即可

    if(!s.multiple){
        s.checked = []
        recurParentCheck(currentId)
        if(s.extendChild.check){
            s.checked = s.checked.concat(targetAllChildren)
        }
    }else if(isCheck){
        if(s.extendChild.check){
            s.checked = check(s.checked,targetAllChildren)
        }
        recurParentCheck(currentId)
    }else if(!isCheck){
        if(s.extendChild.uncheck){
            s.checked = uncheck(s.checked,targetAllChildren)
        }
        recurParentUncheck(currentId)
    }

    handler({
        checked:s.checked
    })
    return s.checked

}
