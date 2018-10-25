var extend = require("extend");
var toggleCheck = require('./toggleCheck');
var forEach = require('./forEach');
var map = require('./map');
var find = require('./find');
var some = require('./some');
var filter = require('./filter');
var render = require('./render'); 
var action = require('./action'); 

const defaultOption = {
    input() {
        return {
            data:[],
            checked:[] // [1,11]
        }
    },
    output(value) {
        /* @example
            {
                checked : [2,21]
            }
        */ 
    },
    options:{
        judge:{
            child:'children',
            id:'value',
        },
        extendParent: {
            check : true ,
            checkUntilAll : true , // check : true 才需要此参数 (选中item的条件:其下直接子元素都被选中)
            uncheck : true ,
            uncheckUntilLast : true // uncheck : true 才需要此参数 (取消item条件:其下直系子元素都没有被选中)
        },
        extendChild: {
            check : true,
            uncheck : true ,
        },
        multiple: true,
        // disable
    }
}

module.exports = class TreeLogic {
    constructor (props) {
        let setting = extend(true,{},defaultOption,props)
        require('./throwErrorEachParam')('init', setting)
        let self = this
        for(let key in setting){
            this[key] = setting[key]
        }

        this.render = {}
        for(let key in render){
            this.render[key] = render[key].bind(this)
        }
        this.action = {}
        for(let key in action){
            this.action[key] = action[key].bind(this)
        }
    }
    outputHandler(data){
        let self = this
        let input = self.input()
            delete input.data
        let result = extend({},input,data)
        self.output(result)
    }
    toggleCheck(id, tocheck){
        let self = this
        // Get Latest setting
        let settings = extend(
                true,
                {},
                self.input(),
                self.options
        )
        /*
            @example settins
            {
                data: [...]
                checked: [...]
                judge: {...}
                extendParent: {...}
                extendChild: {...}
                multiple
            }
        */
        let outputHandler = self.outputHandler.bind(this)
        return toggleCheck(settings, id, outputHandler, tocheck)
    }
    forEach(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.input().data)
        return forEach(latestData, self.options.judge.child, handler)
    }
    map(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.input().data)
        return map(latestData, self.options.judge.child, handler)
    }
    find(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.input().data)
        return find(latestData, self.options.judge.child, handler)
    }
    some(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.input().data)
        return some(latestData, self.options.judge.child, handler)
    }
    filter(handler){
        let self = this
        // Get Latest setting
        let latestData = extend(true,[],self.input().data)
        return filter(latestData, self.options.judge.child, handler)
    }
}
