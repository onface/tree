var extend = require("extend");
var some = require('./some');

module.exports = {
    // 判断当前节点是否展开
    open: function(id){
        let self = this
        let open = self.input().open 
        return open.includes(id)
    },
    // 判断当前节点是否选中
	checked: function(id){
		let self = this
        let checked = self.input().checked 
        return checked.includes(id)
    },
    // 判断是否有子节点
    hasChild: function(data){
        let self = this
        let child = data[self.options.judge.child]
        if(typeof child == 'undefined'){
            return false
        }
        if(Array.isArray(child)){
            if(child.length){
                return true
            }else{
                return false
            }
        }
        return false
    },
    // 判断子孙节点中是否有选中的
    hasChildChecked: function(data){
        let self = this
        let child = data[self.options.judge.child] || []
        let key = self.options.judge.id
        let checked = self.input().checked
        let hasChildChecked = false
        some(child, self.options.judge.child, function(item){
            if(checked.includes(item[key])){
                hasChildChecked = true
                return true
            }
        })
        return hasChildChecked
    },
    // 递归循环渲染(渲染顺序为：数据结构层次从浅到深直至叶子节点数据，同级数据按索引值从0开始)
	loop: function(handler){
		let self = this
        let data = extend(true,[],self.input().data)
        let judgeChild = self.options.judge.child

		let loop = function(data) {
            return data.map(function(item){
                if(Array.isArray(item[judgeChild]) ){
                    return handler(
                        item, 
                        function(){
                            return loop(item[judgeChild]) 
                        }
                    )
                }else{
                    return handler(item, false)
                }
            })
        }

        return loop(data)
	}
}