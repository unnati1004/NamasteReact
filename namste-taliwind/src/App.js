import React, { lazy, Suspense, useEffect, useState } from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import * as ReactDOM from "react-dom/client";
import About from "./component/About";
import Contact from "./component/Contact";
import { Body } from "./component/Body";
import { Header } from "./component/Header";
import Error from "./component/Error";
import ResturantMenuPage from "./component/ResturantMenuPage";
// import { Grocery } from './Component/Grocery';
// import './App.css';
import "./index.css";
import Shimmer from "./component/Shimmer";
import UserContext from "./utils/userContext";
import appStore from "./utils/appStore";
import {Provider} from "react-redux";
import Cart from "./component/Cart";
const Grocery = lazy(() => import("./component/Grocery"));

function App() {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Akshay Saini",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ LoggedInUser: userName,setUserName }}>
      <div>
    {/* <UserContext.Provider value={{ LoggedInUser: userName }}> */}
        <Header />
    {/* </UserContext.Provider> */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenuPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

// const root  = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<RouterProvider router={appRouter} />)
export default appRouter;
