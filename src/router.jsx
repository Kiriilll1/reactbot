import { createBrowserRouter } from "react-router-dom";
import App from "./views/Login";
import Main from "./views/Main";
import Courses from "./views/course";

const router = createBrowserRouter([
    {
        path:"/login",
        element:<App/>,
        
    },
    {
        path:"/",
        element:<Main/>,
    },
    {
        path:"/course",
        element:<Courses/>,
    }
])
export default router