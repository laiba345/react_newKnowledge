import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'

// 下面这种方式引入会一次性全部导入，没有懒加载效果
// import Home from './Home'
// import About from './About'

// import Loading from './Loading'
// 定义变量的形式；lazy是一个函数，里面还要传入一个函数； 使用懒加载的形式的来加入相应的内容
// suspense：现点现加载；
const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))

export default class Demo extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                <Suspense fallback={<h1>Loading...</h1>}>
                                    {/* 注册路由 */}
                                    <Routes>
                                        <Route path="/about" Component={About} />
                                        <Route path="/home" Component={Home} />
                                    </Routes>
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}