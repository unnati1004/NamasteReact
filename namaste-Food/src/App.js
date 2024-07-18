import './App.css';
import {createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import * as ReactDOM from  "react-dom/client";
import About from './Component/About';
import Contact from './Component/Contact';
import { Body } from './Component/Body';
import { Header } from './Component/Header';
import Error from "./Component/Error";
import ResturantMenuPage from './Component/ResturantMenuPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
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

const root  = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
// export default App;
