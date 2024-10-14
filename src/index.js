import React from 'react';
import ReactDOM from 'react-dom/client'; // 确保使用 'react-dom/client' 以支持 React 18+
import './index.css';
import App from './App';

// 创建根元素
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); // 使用 createRoot 方法

// 渲染应用
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
