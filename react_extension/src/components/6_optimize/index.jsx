import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
    state = {
        carName: "奔驰c63",
        stus:['小张', '小K']
    }
    changeCar = () => {
        this.setState({ carName: '迈巴赫' })

        // 使用了PureComponent，在进行更新的时候，一定不要和原来的对象发生关系
        // 如果和原来对象相关，阀门会认为是同一个东西，阀门会关闭
        // const obj = this.state
        // obj.carName = '迈巴赫'
        // this.setState(obj)

        // 添加一个人的正确写法
        // const { stu } = this.state
        // this.setState({ stus:['小刘', ...stus] })
    }
    /*shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props, this.state); // 目前的props和state
        // console.log(nextProps, nextState); // 接下来要变化的目标props，目标state
        if (this.state.carName === nextState.carName) return false
        else return true
    }*/
    addLiu = () => {
        const { stus } = this.state
        this.setState({ stus: ['小刘', ...stus] })
    }
    render() {
        console.log('Parent---render')
        const { carName } = this.state
        return (
            <div className='parent'>
                <h3>我是Parent组件</h3>
                { this.state.stus }&nbsp;
                <span>我的车名字是：{carName}</span><br />
                <button onClick={this.changeCar}>点我换车</button>
                <button onClick={this.addLiu}>添加一个小刘</button>
                <Child carName='奥拓' />
            </div>
        )
    }
}

class Child extends PureComponent {

    /*shouldComponentUpdate(nextProps, nextState) {
        // console.log(this.props, this.state); // 目前的props和state
        // console.log(nextProps, nextState); // 接下来要变化的目标props，目标state
        // 通过每次输出都是奥拓来进行对比操作
        // if (this.props.carName === nextProps.carName) return false
        // else return true
        return !this.props.carName === nextProps.carName
    }*/

    render() {
        console.log('Child---render')
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是：{this.props.carName}</span>
            </div>
        )
    }
}
