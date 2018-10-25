var extend = require("extend");

module.exports = {
    // 切换选中或取消
    'switch':function(id, tocheck){
        let self = this
        self.toggleCheck(id, tocheck)
    },
    // 切换展开收缩
    'toggle':function(id){
        let self = this
        let isopen = self.render.open(id)
        let open = self.input().open
        if(isopen){
            let index = open.indexOf(id)
            open.splice(index,1)
        }else{
            open.push(id)
        }
        self.outputHandler({
            open:open
        })
    }
}