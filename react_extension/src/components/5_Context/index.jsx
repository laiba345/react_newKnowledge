import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
// 为了方便后续书写，可以提前取出Provider
const { Provider, Consumer } = MyContext

export default class A extends Component {

    state = {
        username: 'tom',
        age: 18
    }

    render() {
        const { username, age } = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{this.state.username}</h4>
                {/* 组件之间可以进行相互调用 */}
                {/* 给组件传入相应的内容直接传递就可以 */}
                <Provider value={{ username, age }}>
                    <B />
                </Provider>
            </div>
        )
    }
}

class B extends Component {
    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <C />
            </div>
        )
    }
}

/* class C extends Component {
    // 声明接收
    static contextType = MyContext // 先进行声明接收
    render() {
        // 在哪里接收呢？直接在组件实例对象身上接收
        // console.log(this.context)
        const { username, age } = this.context
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我从A组件接收到的用户名是:{username}</h4>
                <h4>我从A组件接收到的年龄是:{age}</h4>
            </div>
        )
    }
} */

function C() {
    return (
        <div className='grand'>
            <h3>我是C组件</h3>
            <h4>我从A组件接收到的用户名是:
                <Consumer>
                    {
                        value => `${value.username},年龄是${value.age}`
                    }
                </Consumer>
            </h4>
        </div>
    )
}