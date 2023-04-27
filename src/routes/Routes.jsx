import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/body/Body";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Body></Body>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            }
        ]
    }
]);

export default router;