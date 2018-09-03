import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
class InfiniteDome extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            checked: ['1-1']
        }
        self.tree = new FaceTree({
            // 配置所有选项 data 和 选中项 checked
            input: function () {
                return {
                    data: self.props.options,
                    checked: self.state.checked
                }
            },
            // 接收 tree.toggleCheck(value) 运行后的选中项
            output: function (checkeds) {
                self.setState({
                    checked: checkeds
                })
            }
        })
    }
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
ReactDOM.render(
    <InfiniteDome />,
    document.getElementById('infinite-demo')
)
