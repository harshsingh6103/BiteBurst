import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import ErrorElement from "./components/ErrorElement";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

// It takes a list of routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path: "/about",
        element:<About/>,
      },
      {
        path: "/contact",
        element:<Contact/>,
        
      },
      {
        path: "/restaurants/:resId",
        element:<Menu/>
      }
    ],
    errorElement:<ErrorElement/>, // To show error if route is not defined
 }
  
])

const root = ReactDOM.createRoot(document.querySelector(".root"));

root.render(<RouterProvider router={appRouter} />);


