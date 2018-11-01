import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
import cls from 'classnames'
import Checkbox from 'checkbox.react'
class BasicDome extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            checked: ['1-1'],
            open:[]
        }
        self.tree = new FaceTree({
            // 配置 所有选项data 选中项checked 展开项open
            input: function () {
                return {
                    data: self.props.options,
                    checked: self.state.checked,
                    open: self.state.open, 
                }
            },
            // 接收 tree.toggleCheck(value) 运行后的选中项
            output: function (value) {
                self.setState({
                    checked: value.checked,
                    open: value.open
                })
            }
        })
    }
    render() {
        const self = this
        return (
            <div className="face-tree">
                {
                    self.tree.render.loop(function (data, subRender) {
                    	let isopen = self.tree.render.open(data.value)
                        return (
                            <div 
                            	key={data.value} 
                            	className={cls({
                            		"face-tree-node":true,
                            		// open [渲染类函数]判断当前节点是否展开(需要声明时input中配置open)
                        			"face-tree-node--close":!isopen,
                        			"face-tree-node--open":isopen,
                            	})}
                            >
                            	{/* haschild [渲染类函数]判断是否有子节点 */}
	                            {
	                            	self.tree.render.hasChild(data)
	                            	? (
	                            		<div 
		                            		className="face-tree-node-icon"
		                            		onClick={function(){
		                            			// toggle [操作类函数]切换展开收缩
		                            			self.tree.action.toggle(data.value)
		                            		}}
	                            		></div>
                            		) : null
	                            }
	                            <Checkbox
		                            className="face-tree-node-label"
		                            // haschecked [渲染类函数]判断子孙节点中是否有选中的
		                            // themes={self.tree.render.hasChildChecked(data) ? 'partial' : ''}
		                            // checked [渲染类函数]判断是否选中
                                    checked={self.tree.render.checked(data.value)}
		                            onChange={() => {
                                    	// switch [操作类函数]切换选中或取消
                                        self.tree.action.switch(data.value)
                                    }}
	                            >{data.label}</Checkbox>
		                        {/* subRender 渲染子节点 */}
                                { subRender ? subRender() : false }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
// 树形选型数据结构
BasicDome.defaultProps = {
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
/*ONFACE-DEL*/BasicDome = require("react-hot-loader").hot(module)(BasicDome)
ReactDOM.render(
    <BasicDome />,
    document.getElementById('basic-demo')
)
