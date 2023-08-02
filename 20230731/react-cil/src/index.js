import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// react webpack入口文件

// 渲染App组件到 ../public/index.html 中的root中
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
