import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { Routes, Route, Navigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { fetchTodos } from "./api";
import { useEffect } from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();
console.log(fetchTodos('all').then(res=>console.log(res)))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path = "/">
            <Route index element={<App />} />
            <Route path=":filter" element={<App />} />
          </Route>
          </Routes>
      </BrowserRouter>
    
    </Provider>
  </React.StrictMode>
);

