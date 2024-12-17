import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './appstore/store';
import Playersdetais from './feactures/players/Playersdetais';
import Update from './feactures/players/Update';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Playersdetais></Playersdetais>, 
      },
      {
        path: "/:id",
        element: <Playersdetais></Playersdetais>, 
      },
      {
        path: "/playes/:id",
        element: <Update></Update>, 
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
 <RouterProvider router={router}></RouterProvider>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
