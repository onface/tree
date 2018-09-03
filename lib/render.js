var extend = require("extend");

module.exports = {
	checked: function(id){
		let self = this
        let checked = self.input().checked 
        let result = checked.includes(id)
        // console.log(checked,id,result)
        return result
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