import React , { Component } from "react"
import ReactDOM from "react-dom"
import FaceTree from "face-tree"
import cls from 'classnames'
import Checkbox from 'checkbox.react'
import Mock from 'mockjs'
const Random = Mock.Random;
class AsyncDome extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            data:props.options,
            checked: [],
            open:['1','2'],
            xhrBusy:false
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
                        return (
                            <div 
                            	key={data.value} 
                            	className={cls({
                                    "face-tree-node":true,
                                    "face-tree-node--close": !self.tree.render.open(data.value) && self.tree.render.hasChild(data) !== 0 ,
                                    "face-tree-node--open": self.tree.render.open(data.value) && self.tree.render.hasChild(data) > 0 ,
                                    "face-tree-node--loading":self.state.xhrBusy == data.value
                                })}
                            >
	                            <div 
                                    className="face-tree-node-icon"
                                    onClick={function(){
                                        if(self.tree.render.hasChild(data) === undefined){
                                            // 模拟ajax获取当前节点下数据
                                            self.setState({
                                                xhrBusy:data.value
                                            })
                                            setTimeout(function(){
                                                // 模拟随机数据(控制台查看)
                                                let mockData = Mock.mock({
                                                    'children|0-1': [{
                                                        label:Random.cword(2, 5),
                                                        value:String(Random.natural())
                                                    }]
                                                })
                                                console.log(JSON.stringify(mockData.children,null,4))
                                                // 将数据插入数据源中
                                                let dataOption = self.tree.map(function(item){
                                                    if(item.value == data.value){
                                                        item.children = item.children || []
                                                        item.children = item.children.concat(mockData.children)
                                                    }
                                                    return item
                                                })
                                                // 新数据默认展开当前节点(即模拟的新数据的父节点)
                                                let openArray = self.state.open
                                                    openArray.push(data.value)
                                                self.setState({
                                                    data:dataOption,
                                                    open:openArray,
                                                    xhrBusy:false
                                                })
                                            },1500)
                                        }else {
                                            // 有子节点的直接切换展开或收缩
                                            self.tree.action.toggle(data.value)
                                        }
                                    }}
                                ></div>
	                            <Checkbox
		                            className="face-tree-node-label"
		                            // checked [渲染类函数]判断是否选中
                                    checked={self.tree.render.checked(data.value)}
		                            onChange={() => {
                                        self.tree.action.switch(data.value)
                                    }}
	                            >{data.label}</Checkbox>
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
AsyncDome.defaultProps = {
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
                    children: []
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
/*ONFACE-DEL*/AsyncDome = require("react-hot-loader").hot(module)(AsyncDome)
ReactDOM.render(
    <AsyncDome />,
    document.getElementById('async-demo')
)
