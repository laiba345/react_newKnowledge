import React, { Component } from "react";
import './index.css'
export default class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h2>我是Parent组件</h2>
                {/* <A>
                    <B />
                </A> */}
                {/* 对于简写形式，如果传入了参数最好还是加上一个小括号 */}
                <A render={(name) => <B name={name}/>} />
            </div>
        );
    }
}

class A extends Component {
    state = { name: 'tom' }
    render() {
        const { name } = this.state
        return (
            <div className="a">
                <h2>我是A组件</h2>
                {/* 一种新的形成父子组件关系的形式 */}
                {/* this.props.children */}
                {/* {this.props.children} */}

                {/* 类似于Vue中的插槽技术，可以提前预留好位置，还可以传递相应的参数  */}
                {/* 给A传递的不是一般的props而是renderProps */}
                { this.props.render(name) }
            </div>
        );
    }
}

class B extends Component {
    render() {
        console.log('B --- render')
        return (
            <div className="b">
                {/* 对于render搞定组件来说，其传入的参数还是在this.props当中，这一点很关键 */}
                <h2>我是B组件, { this.props.name }</h2>
            </div>
        );
    }
}

