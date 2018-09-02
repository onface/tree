// domprops options
module.exports = function loop(data, judgeChild, component){
	let self = this
	// TODO: 校验propstype
	return (
		<ul>
		{
			data.map(function(item){
				// TODO: item.check
				return (
					<li key={item.value} >
                        {component(item)}
                        {
                        	Array.isArray(item[judgeChild])
                        	? loop(item[judgeChild], judgeChild, component)
                        	: null
                        }
                    </li>
				)
			})
		}
		</ul>
	)
}