import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
import cls from 'classnames'
import Checkbox from 'checkbox.react'
class EditDome extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            data:props.options,
            checked: [],
            open:['1','2']
        }
        self.tree = new FaceTree({
            // 配置 所有选项data 选中项checked 展开项open
            input: function () {
                return {
                    data: self.state.data,
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
                                    "face-tree-node--close":!isopen,
                                    "face-tree-node--open":isopen,
                                })}
                            >
	                            {
	                            	self.tree.render.hasChild(data)
	                            	? (
	                            		<div 
		                            		className="face-tree-node-icon"
		                            		onClick={function(){
		                            			self.tree.action.toggle(data.value)
		                            		}}
	                            		></div>
                            		) : null
	                            }
	                            <Checkbox
		                            className="face-tree-node-label"
		                            // checked [渲染类函数]判断是否选中
                                    checked={self.tree.render.checked(data.value)}
		                            onChange={() => {
                                        self.tree.action.switch(data.value)
                                    }}
	                            >{data.label}</Checkbox>
                                <div className="face-tree-node-tool">
                                    <span 
                                        onClick={function(){
                                            // 模拟一个新数据
                                            let mockData = {
                                                label:Math.random().toString(36).substr(2),
                                                value:String(new Date().getTime())
                                            }
                                            if(confirm('模拟用户创建一个新数据\n名称:'+mockData.label)){
                                                // 将数据插入数据源中
                                                let dataOption = self.tree.map(function(item){
                                                    if(item.value == data.value){
                                                        item.children = item.children || []
                                                        item.children.push(mockData)
                                                    }
                                                    return item
                                                })
                                                self.setState({
                                                    data:dataOption
                                                })
                                                // 新数据默认展开当前节点(即模拟的新数据的父节点)
                                                let openArray = self.state.open
                                                    openArray.push(data.value)
                                                self.setState({
                                                    open:openArray
                                                })

                                            }
                                        }}
                                    >➕</span>
                                    <span 
                                        onClick={function(){
                                            if(confirm('确认删除数据 "'+data.label+'" 吗?')){
                                                // 将当前数据从数据源中删除
                                                let dataOption = self.tree.filter(function(item){
                                                    return item.value != data.value
                                                })
                                                self.setState({
                                                    data:dataOption
                                                })
                                            }
                                        }}
                                    >➖</span>
                                    <span 
                                        onClick={function(){
                                            // 模拟修改数据
                                            let mockLabel = Math.random().toString(36).substr(2)
                                            if(confirm('确认更改数据  "'+data.label+'" 为 "'+mockLabel+'" 吗?')){
                                                // 将数据插入数据源中
                                                let dataOption = self.tree.map(function(item){
                                                    if(item.value == data.value){
                                                        item.label = mockLabel
                                                    }
                                                    return item
                                                })
                                                self.setState({
                                                    data:dataOption
                                                })
                                            }
                                        }}
                                    >✍️</span>
                                </div>
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
EditDome.defaultProps = {
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
/*ONFACE-DEL*/EditDome = require("react-hot-loader").hot(module)(EditDome)
ReactDOM.render(
    <EditDome />,
    document.getElementById('editable-demo')
)
