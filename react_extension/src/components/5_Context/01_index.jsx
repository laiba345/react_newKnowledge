import React, { Component } from 'react'
import './index.css'

export default class A extends Component {

    state = {
        username: 'tom'
    }

    render() {
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{this.state.username}</h4>
                {/* 组件之间可以进行相互调用 */}
                {/* 给组件传入相应的内容直接传递就可以 */}
                <B username={ this.state.username }/> 
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                {/* 接收传过来的数据是通过props属性 */}
                <h4>我从A组件接收到的用户名是:{ this.props.username }</h4>
                <C username={ this.props.username }/>
            </div>
        )
    }
}

class C extends Component {
    render() {
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名是：{ this.props.username }</h4>
            </div>
        )
    }
}