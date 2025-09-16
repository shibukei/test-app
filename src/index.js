import { RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import routersParam from './chap8/routersParam';
// 418p
const root = ReactDOM.createRoot(document.getElementById('root'));
// const dest = 'https://ja.react.dev';
root.render(<RouterProvider router={routersParam} />);
