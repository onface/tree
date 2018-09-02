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
        const renderLabel = function (data) {
            return (
                <label>
                    <input
                        type="checkbox"
                        checked={self.tree.render.checked(data.value)}
                        onChange={() => {
                            self.tree.action.switch(data.value)
                            // self.tree.action.switch(data.value, true)
                        }}
                    />
                    {data.label}
                </label>

            )
        }
        let loop = function(lists, itemComponent){
        	return (
        		<ul>
    			{
    				lists.map(function(item){
    					return (
    						<li key={item.value} >
                                {itemComponent(item)}
                                {
                                	Array.isArray(item.children)
                                	? loop(item.children, itemComponent)
                                	: null
                                }
                            </li>
						)
    				})
    			}
        		</ul>
    		)
        }
        return (
            <div>
                {loop(self.props.options, renderLabel)}
            </div>
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
