module.exports = function (name,argProps) {
    switch(name){
        case 'forEach': case 'map': case 'find': case 'some': case 'filter':
            var data = argProps[0]
            var judgeChild = argProps[1]
            var handler = argProps[2]
            if (!Array.isArray(data)) {
                throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) data must be a array')
            }
            if (typeof judgeChild !== 'string' && typeof judgeChild !== 'function') {
                throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) judgeChild must be a string or function')
            }
            if (typeof handler !== 'function') {
                throw new Error('node_modules/tree-logic: ' +  name + '(data, judgeChild, handler) handler must be a function')
            }
        break
        case 'toggleCheck':
            var settings = argProps[0]
            var currentId = argProps[1]
            var handler = argProps[2]
            if (typeof currentId !== 'string' && typeof currentId !== 'number') {
                throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) currentId must be a string or number')
            }
            if (typeof handler !== 'function') {
                throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) handler must be a function')
            }
            if (typeof settings !== 'object') {
                throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings must be a object')
            }else{
                if (!Array.isArray(settings.data)) {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.data must be a array')
                }
                if (!Array.isArray(settings.checkArray)) {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.checkArray must be a array')
                }
                if (typeof settings.judgeChild !== 'string') {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.judgeChild must be a string')
                }
                if (typeof settings.multiple !== 'boolean') {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.multiple must be a boolean')
                }
                if (typeof settings.extendParent !== 'object') {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendParent must be a object')
                }else{
                    if (typeof settings.extendParent.check !== 'boolean') {
                        throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendParent.check must be a boolean')
                    }
                    if (typeof settings.extendParent.uncheck !== 'boolean') {
                        throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendParent.uncheck must be a boolean')
                    }
                    if (typeof settings.extendParent.uncheckUntilLast !== 'boolean') {
                        throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendParent.uncheckUntilLast must be a boolean')
                    }
                }
                if (typeof settings.extendChild !== 'object') {
                    throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendChild must be a object')
                }else{
                    if (typeof settings.extendChild.check !== 'boolean') {
                        throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendChild.check must be a boolean')
                    }
                    if (typeof settings.extendChild.uncheck !== 'boolean') {
                        throw new Error('node_modules/tree-logic: ' +  name + '(settings, currentId, handler) settings.extendChild.uncheck must be a boolean')
                    }
                }
            }
        break
        case 'init':
            if (typeof argProps.getData !== 'function') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.getData must be a function')
            }
            if (typeof argProps.getChecked !== 'function') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.getChecked must be a function')
            }
            if (typeof argProps.onToggleCheck !== 'function') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.onToggleCheck must be a function')
            }
            if (typeof argProps.judgeChild !== 'string') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.judgeChild must be a string')
            }
            if (typeof argProps.multiple !== 'boolean') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.multiple must be a boolean')
            }
            if (typeof argProps.extendParent !== 'object') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendParent must be a object')
            }else{
                if (typeof argProps.extendParent.check !== 'boolean') {
                    throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendParent.check must be a boolean')
                }
                if (typeof argProps.extendParent.uncheck !== 'boolean') {
                    throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendParent.uncheck must be a boolean')
                }
                if (typeof argProps.extendParent.uncheckUntilLast !== 'boolean') {
                    throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendParent.uncheckUntilLast must be a boolean')
                }
            }
            if (typeof argProps.extendChild !== 'object') {
                throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendChild must be a object')
            }else{
                if (typeof argProps.extendChild.check !== 'boolean') {
                    throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendChild.check must be a boolean')
                }
                if (typeof argProps.extendChild.uncheck !== 'boolean') {
                    throw new Error('node_modules/tree-logic: new TreeLogic(settings) settings.extendChild.uncheck must be a boolean')
                }
            }
        break
        default :
            console.warn('node_modules/tree-logic/throwErrorEachParam not find ' +  name )
    }
}
