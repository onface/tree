import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
class InfiniteDome extends Component {
    render() {
        const self = this
        let loop = function(lists){
        	return lists.map(function(item){
    					return (
    						<li key={item.value} >
                                <input type="checkbox"/> 
                                {item.label}
                                {
                                	Array.isArray(item.children)
                                	? (<ul>{loop(item.children)}</ul>)
                                	: null
                                }
                            </li>
						)
    				})
        }
        return (
            <ul>
            {loop(self.props.options)}
            </ul>
        )
    }
}
// 树形选型数据结构
InfiniteDome.defaultProps = {
    options: [
        {
            label: '上海市',
            value: '1',
            children: [
                {
                    label: '静安区',
                    value: '1-1'
                },
                {
                    label: '虹口区',
                    value: '1-2',
                    children: [
		                {
		                    label: '凉城',
		                    value: '1-2-1'
		                },
		                {
		                    label: '大场',
		                    value: '1-2-2'
		                }
		            ]
                }
            ]
        },
        {
            label: '北京市',
            value: '2',
            children: [
                {
                    label: '朝阳区',
                    value: '2-1'
                }
            ]
        }
    ]
}
/*ONFACE-DEL*/InfiniteDome = require("react-hot-loader").hot(module)(InfiniteDome)
ReactDOM.render(
    <InfiniteDome />,
    document.getElementById('infinite-demo')
)
