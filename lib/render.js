var extend = require("extend");

module.exports = {
    open:function(id){
        let self = this
        let open = self.input().open 
        return open.includes(id)
    },
	checked: function(id){
		let self = this
        let checked = self.input().checked 
        return checked.includes(id)
    },
    haschild: function(data){
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