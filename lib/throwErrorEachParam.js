module.exports = function (name,argProps) {
    switch(name){
        case 'forEach': case 'map': case 'find': case 'some': case 'filter':
            var data = argProps[0]
            var judgeChild = argProps[1]
            var handler = argProps[2]
            if (!Array.isArray(data)) {
                throw new Error('node_modules/face-tree: ' +  name + '(data, judgeChild, handler) data must be a array')
            }
            if (typeof judgeChild !== 'string' && typeof judgeChild !== 'function') {
                throw new Error('node_modules/face-tree: ' +  name + '(data, judgeChild, handler) judgeChild must be a string or function')
            }
            if (typeof handler !== 'function') {
                throw new Error('node_modules/face-tree: ' +  name + '(data, judgeChild, handler) handler must be a function')
            }
        break
        case 'toggleCheck':
            var settings = argProps[0]
            var currentId = argProps[1]
            var handler = argProps[2]
            var toCheck = argProps[3]
            if (typeof currentId !== 'string' && typeof currentId !== 'number') {
                throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) currentId must be a string or number')
            }
            if (typeof handler !== 'function') {
                throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) handler must be a function')
            }
            if (typeof settings !== 'object') {
                throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings must be a object')
            }else{
                if (!Array.isArray(settings.data)) {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.data must be a array')
                }
                if (!Array.isArray(settings.checked)) {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.checked must be a array')
                }
                if (typeof settings.judge !== 'object') {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.judge must be a object')
                }else{
                    if (typeof settings.judge.child !== 'string') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.judge.child must be a string')
                    }
                    if (typeof settings.judge.id !== 'string') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.judge.id must be a string')
                    }
                }
                if (typeof settings.multiple !== 'boolean') {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.multiple must be a boolean')
                }
                if (typeof settings.extendParent !== 'object') {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendParent must be a object')
                }else{
                    if (typeof settings.extendParent.check !== 'boolean') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendParent.check must be a boolean')
                    }
                    if (typeof settings.extendParent.uncheck !== 'boolean') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendParent.uncheck must be a boolean')
                    }
                    if (typeof settings.extendParent.uncheckUntilLast !== 'boolean') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendParent.uncheckUntilLast must be a boolean')
                    }
                }
                if (typeof settings.extendChild !== 'object') {
                    throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendChild must be a object')
                }else{
                    if (typeof settings.extendChild.check !== 'boolean') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendChild.check must be a boolean')
                    }
                    if (typeof settings.extendChild.uncheck !== 'boolean') {
                        throw new Error('node_modules/face-tree: ' +  name + '(settings, currentId, handler) settings.extendChild.uncheck must be a boolean')
                    }
                }
            }
        break
        case 'init':
            if (typeof argProps.input !== 'function') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) input must be a function')
            }
            let input = argProps.input()
            if (!Array.isArray(input.data)) {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) input().data must be a array')
            }
            if (!Array.isArray(input.checked)) {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) input().checked must be a array')
            }
            if (typeof argProps.output !== 'function') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) output must be a function')
            }
            let options = argProps.options
            if (typeof options.judge !== 'object') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) options.judge must be a object')
            }else{
                if (typeof options.judge.child !== 'string') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) judge.child must be a string')
                }
                if (typeof options.judge.id !== 'string') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) judge.id must be a string')
                }
            }
            if (typeof options !== 'object') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) options must be a object')
            }
            if (typeof options.multiple !== 'boolean') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) options.multiple must be a boolean')
            }
            if (typeof options.extendParent !== 'object') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) options.extendParent must be a object')
            }else{
                if (typeof options.extendParent.check !== 'boolean') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendParent.check must be a boolean')
                }
                if (typeof options.extendParent.uncheck !== 'boolean') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendParent.uncheck must be a boolean')
                }
                if (typeof options.extendParent.uncheckUntilLast !== 'boolean') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendParent.uncheckUntilLast must be a boolean')
                }
            }
            if (typeof options.extendChild !== 'object') {
                throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendChild must be a object')
            }else{
                if (typeof options.extendChild.check !== 'boolean') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendChild.check must be a boolean')
                }
                if (typeof options.extendChild.uncheck !== 'boolean') {
                    throw new Error('node_modules/face-tree: new TreeLogic(...arg) extendChild.uncheck must be a boolean')
                }
            }
        break
        default :
            console.warn('node_modules/face-tree/throwErrorEachParam not find ' +  name )
    }
}
