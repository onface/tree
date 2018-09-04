import React, {Component} from 'react';
import ReactDom from 'react-dom';
import TreeLogic from 'face-tree'
const data = require('./data.demo');

class ForEachDemo extends Component {
	constructor(props) {
		super(props);
		this.state = {}
		this.tree = new TreeLogic({
		    input(){
		        return {
		            data:props.data,
		            checked:[]
		        }
		    },
		    output(checkeds) {
		        // ...
		    }
		})
	}

	render() {
		let self = this
		let itemArray = []
		let parentMap = {}
		self.tree.forEach(function (item, index, array) {
		    itemArray.push(item)
		    parentMap[item.label] = {
		        index: this.$parent.index,
		        data: this.$parent.data,
		        // filter label
		        label: this.$parent.data.map(function(item){ return item.label })
		    }
		})
		return (
			<div>
				<h3> itemArray =  </h3>
				<pre>
					{JSON.stringify(itemArray, null, 4)}
				</pre>
				<hr/>
				<h3> parentMap =  </h3>
				<pre>
					{JSON.stringify(parentMap, null, 4)}
				</pre>
			</div>
		);
	}
}
ForEachDemo.defaultProps = {
	data : data
}
ReactDom.render(
	<ForEachDemo />,
	document.getElementById('forEach-demo')
)


/* demo: 工具类函数直接调用示例 */
var TreeForEach = require('face-tree/lib/forEach');

var itemArray = []
var parentMap = {}
TreeForEach(data, 'children', function (item, index, array) {
    itemArray.push(item)
    parentMap[item.label] = {
        index: this.$parent.index,
        data: this.$parent.data,
        // filter label
        label: this.$parent.data.map(function(item){ return item.label })
    }
})
console.log('----- forEach itemArray -----\n',itemArray)
console.log('----- forEach parentMap -----\n',parentMap)
