import React, { Component } from "react";

export default class Demo extends Component {
  // 相关状态可以直接写在外面 n
  state = {
    count: 0,
  };
  add = () => {
    // 一、对象式的setState
    //1. 获取原来的count值
    // const { count } = this.state;
    // //2. 更新状态; 里面可以设置相应的状态累加操作；加了一个对象即状态改变对象；
    // //!!! react状态的更新是异步的；
    // this.setState({ count: count + 1 }, () => {
    //   console.log(this.state.count); // 回调；想拿最新的值就可以在此处拿到；1
    // });

    // 二、函数式的setState
    // 优势，状态可以直接传入进来，组件传过来的props的值也可以获取
    // this.setState((state, props) => {
    //   console.log(state, props);
    //   // 函数调用的返回值是这个对象；
    //   return { count:state.count+1 }
    // })

    // 箭头函数简写形式时：如果返回一个函数 简写 用() 括起来
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
