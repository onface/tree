import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
class LoopDome extends Component {
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
            output: function (value) {
                self.setState({
                    checked: value.checked
                })
            }
        })
    }
    render() {
        const self = this
        return (
            <ul>
                {
                    self.tree.render.loop(function (data, subRender) {
                        // console.log(data, subRender)
                        return (
                            <li key={data.value}>
                                <input 
                                    type="checkbox" 
                                    checked={self.tree.render.checked(data.value)}
                                    onChange={() => {
                                        self.tree.action.switch(data.value)
                                    }}
                                /> 
                                {data.label}
                                {/* subRender渲染子节点 */}
                                {
                                    subRender?
                                    (<ul>{subRender()}</ul>)
                                    :false
                                }
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
// 树形选型数据结构
LoopDome.defaultProps = {
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
    <LoopDome />,
    document.getElementById('loop-demo')
)
