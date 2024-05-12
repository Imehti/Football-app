import { createBrowserRouter } from "react-router-dom";
import EventDetails from "../components/EventDetails";
import App from "../App";

const router=createBrowserRouter([
    {path:'/' , element:<App />},
    {path:'/EventDetails/:eventName', element:<EventDetails />}
])

export default router