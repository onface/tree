import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
class Intro extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            value: []
        }
        self.tree = new FaceTree({
            input: function () {
                return {
                    data: self.props.options,
                    value: self.state.value
                }
            },
            output: function (checkeds) {
                self.setState({
                    value: checkeds
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
                        checked={self.state.value.includes(data.value)}
                        onChange={() => {
                            self.tree.toggleCheck(data.value)
                        }}
                    />
                    {data.label}
                </label>

            )
        }
        return (
            <ul>
                {
                    self.props.options.map(function (item) {
                        return (
                            <li key={item.value} >
                                {renderLabel(item)}
                                <ul>
                                    {
                                        item.children.map(function (subItem) {
                                            return (
                                                <li key={subItem.value} >
                                                    {renderLabel(subItem)}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
// 树形选型数据结构
Intro.defaultProps = {
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
                    value: '1-2'
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
    <Intro />,
    document.getElementById('intro-demo')
)
