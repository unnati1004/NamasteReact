import React,{lazy,Suspense} from "react";
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import * as ReactDOM from  "react-dom/client";
import About from './component/About';
import Contact from './component/Contact';
import { Body } from './component/Body';
import { Header } from './component/Header';
import Error from "./component/Error";
import ResturantMenuPage from './component/ResturantMenuPage';
// import { Grocery } from './Component/Grocery';
// import './App.css';
import './index.css';
import Shimmer from "./component/Shimmer";

const Grocery = lazy(()=> import('./component/Grocery'));

function App() {
   return (
    <div>
      <Header/>
      <Outlet/>
      {/* <h1 className="text-20xl font-bold underline">Hello</h1> */}
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}> <Grocery/> </Suspense>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/resturants/:resId",
        element:<ResturantMenuPage/>
      }
    ],
    errorElement: <Error/>
  },

])

// const root  = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<RouterProvider router={appRouter} />)
export default appRouter;
