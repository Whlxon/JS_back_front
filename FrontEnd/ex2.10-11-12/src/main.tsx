import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App.tsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';

import { HomePage } from './components/HomePage/HomePage.tsx';
import { ListCinema } from './components/Movie/cinemaList.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ListCinema />,
      },
      {
        path: "HomePage",
        element: <HomePage/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)