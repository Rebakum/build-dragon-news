import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsDEtails from "../pages/NewsDeiails/NewsDEtails";
import PriviteRoute from "./PriviteRoute";


const router =createBrowserRouter([
   {
    path: '/',
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader:() => fetch('/news.json')
        },
        {
            path: '/news/:id',
            element: <PriviteRoute><NewsDEtails></NewsDEtails></PriviteRoute>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
    ]
   }
]);

export default router;