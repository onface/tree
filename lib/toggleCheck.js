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

module.exports = function toggleCheck(settings, currentId, handler) {
    require('./throwErrorEachParam')('toggleCheck', arguments)
    let s = extend(true, [], settings)

    // which action to do
    let isCheck = !s.checkArray.includes(currentId)

    /*
        1. 操作判断
        2. 关联判断 
        3. 递归遍历 直接父元素 直接子元素
    */

    let target = find(s.data, s.judgeChild, function(i){
                    return i.id == currentId
                })

    let targetAllChildren = []
        forEach(target.target[s.judgeChild] || [], s.judgeChild, function(i,index,array){
            targetAllChildren.push(i.id)
        })

    // 递归循环父选中
    let recurParentCheck = function(curId){
        let target = find(s.data, s.judgeChild, function(i){
            return i.id == curId
        })
        s.checkArray = check(s.checkArray, curId)

        let curParent = target.parent.data.reverse()[0] || {}
        let isExtendP = false
        if(s.extendParent.check){
            if(s.extendParent.checkUntilAll){
                let allSiblingsCheck = true
                target.siblings.some(function(i){
                    if(!s.checkArray.includes(i.id)){
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
        if(isExtendP && typeof(curParent.id) != 'undefined'){
            recurParentCheck(curParent.id)
        }
    }
    // 递归循环父取消
    let recurParentUncheck = function(curId){
        let target = find(s.data, s.judgeChild, function(i){
            return i.id == curId
        })

        s.checkArray = uncheck(s.checkArray,curId)
        let curParent = target.parent.data.reverse()[0] || {}
        let isExtendP = false
        if(s.extendParent.uncheck){
            if(s.extendParent.uncheckUntilLast){
                let allSiblingsUncheck = true
                target.siblings.some(function(i){
                    if(s.checkArray.includes(i.id)){
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
        if(isExtendP && typeof(curParent.id) != 'undefined'){
            recurParentUncheck(curParent.id)
        }
    }
    // 递归循环子 : 虽然是一层一层传递下去,但是目前没有别的属性关联,所以直接关联至所有子孙元素即可

    if(!s.multiple){
        s.checkArray = []
        recurParentCheck(currentId)
        if(s.extendChild.check){
            s.checkArray = s.checkArray.concat(targetAllChildren)
        }
    }else if(isCheck){
        if(s.extendChild.check){
            s.checkArray = check(s.checkArray,targetAllChildren)
        }
        recurParentCheck(currentId)
    }else if(!isCheck){
        if(s.extendChild.uncheck){
            s.checkArray = uncheck(s.checkArray,targetAllChildren)
        }
        recurParentUncheck(currentId)
    }

    handler(s.checkArray)
    return s.checkArray

}
