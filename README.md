# react_newKnowledge
# 尚硅谷 -- 张天禹
# 1. setState
setState更新状态的2种写法
(1). setState(stateChange, [callback])------对象式的setState
        1.stateChange为状态改变对象(该对象可以体现出状态的更改)
        2.callback是可选的回调函数, 它在状态更新完毕、界面也更新后(render调用后)才被调用
                
(2). setState(updater, [callback])------函数式的setState
        1.updater为返回stateChange对象的函数。
        2.updater可以接收到state和props。
        4.callback是可选的回调函数, 它在状态更新、界面也更新后(render调用后)才被调用。
总结:
    1.对象式的setState是函数式的setState的简写方式(语法糖)
    2.使用原则：
            (1).如果新状态不依赖于原状态 ===> 使用对象方式
            (2).如果新状态依赖于原状态 ===> 使用函数方式
            (3).如果需要在setState()执行后获取最新的状态数据, 
                要在第二个callback函数中读取

# 2. lazyLoad
路由组件的lazyLoad
//1.通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
const Login = lazy(()=>import('@/pages/Login'))

//2.通过<Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
<Suspense fallback={<h1>loading.....</h1>}>
        <Switch>
                <Route path="/xxx" component={Xxxx}/>
                <Redirect to="/login"/>
        </Switch>
</Suspense>
```
{/* 注册路由 */}
<Routes>
        <Route path="/about" Component={About} />
        <Route path="/home" Component={Home} />
</Routes>
```
注意：上述的Component必须为大写的Component