import React from "react";
import ReactDOM from 'react-dom'
// 1. 类式组件
// class Demo extends React.Component {
//   state = { count: 0 };

//   myRef = React.createRef()

//   add = () => {
//     this.setState((state) => ({ count: state.count + 1 }));
//   };

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState((state) => ({ count: state.count + 1 }));
//     }, 1000);
//   }

//   unmount = () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>当前求和为：{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unmount}>卸载组件</button>
//         <button onClick={this.show}>点我提示数据</button>
//       </div>
//     );
//   }
// }

// 2. 函数式组件; 改名
// function Demo() {
//     console.log("demo");
//     // 返回有两个状态，一般用状态的解构赋值来操作
//     // 返回第一个：给定的初始状态；第二个：操作初始状态的函数
//     // 24行底层做了处理，不会因为你的再次调用而覆盖
//     const [count, setCount] = React.useState(0);
//     const [name, setName] = React.useState("kang");
//     function add() {
//         // setCount(count + 1); // 第一种写法
//         // 因为需要依赖原来的属性或元素；
//         setCount((count) => count + 1);
//     }
//     // 此处书写的函数可以直接调用上方React.useState当中的相关函数
//     function changeName() {
//         setName("kk");
//     }
//     return (
//         <div>
//             <h2>当前求和为：{count}</h2>
//             <h2>我的名字是：{name}</h2>
//             <button onClick={add}>点我+1</button>
//             <button onClick={changeName}>点我改名</button>
//         </div>
//     );
// }

// 2. 函数式组件;
function Demo() {
    // console.log("demo");
    const [count, setCount] = React.useState(0);
    // 专人专用，可以在函数组件中存储/查找组件内的标签或其他数据
    const myRef = React.useRef()
    // 传入的函数相当于一个生命周期钩子
    // 如果不传第二个参数，不仅仅在组件挂载的时候执行，在组件更新的时候也执行
    // 传入的第二个参数数组，有点类似于监测的意思，写空数组表示都不监测，此时相当于componentDidMount
    // 其实：React.useEffect是相当于两钩子的，具体相当于谁，和后面的[]中的内容有关；
    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount((count) => count + 1);
    }

    // 卸载组件的回调
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show() {
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef} />
            <h2>当前求和为：{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>点我卸载</button>
            <button onClick={show}>点我提示数据</button>
        </div>
    );
}

export default Demo;
