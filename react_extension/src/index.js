// 1. 引入核心库
import React from 'react'
// 2. 引入ReactDOM进行渲染
import ReactDOM from 'react-dom/client';
// 3. 引入根组件
import App from './App'
// import { BrowserRouter } from 'react-router-dom'

// 进行一次渲染
// ReactDOM.render(
//     <BrowserRouter><App /></BrowserRouter>
//     , document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    // <BrowserRouter><App /></BrowserRouter>
);