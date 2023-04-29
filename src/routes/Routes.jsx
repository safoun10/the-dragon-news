import { Navigate, createBrowserRouter } from "react-router-dom";
import Body from "../layout/body/Body";
import Category from "../pages/home/category/Category";
import News from "../layout/news/News";
import NewsData from "../pages/components/news/NewsData";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Body></Body>,
		children: [
			{
				path: "/",
				element: <Navigate to="/category/0"></Navigate>
				// element: <Home></Home>
			},
			{
				path: "/category/:ID",
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.ID}`),
			},
			{
				path: "*",
				element: <div>404</div>,
			},
		],
	},
	{
		path: "news",
		element: <News></News>,
		children: [
			{
				path: ":ID",
				element: <NewsData></NewsData>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/news/${params.ID}`),
			},
		],
	},
]);

export default router;
