import { createBrowserRouter } from "react-router-dom";
import App from "./views/Login";
import Main from "./views/Main";
import Courses from "./views/course";
import Check from "./views/check";
import Test from "./views/test";

const router = createBrowserRouter([
    {
        path:"/login/:chatid",
        element:<App/>,
        
    },
    {
        path:"/",
        element:<Main/>,
    },
    {
        path:"/course",
        element:<Courses/>,
    },
    {
        path:"/:chatid",
        element:<Check/>,
    },
    {
        path:"/Test",
        element:<Test/>
    }
])
export default router