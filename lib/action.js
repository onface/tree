var extend = require("extend");

module.exports = {
    'switch':function(id, tocheck){
        let self = this
        self.toggleCheck(id, tocheck)
    },
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