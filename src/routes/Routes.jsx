import { createBrowserRouter } from "react-router-dom";
import Body from "../layout/body/Body";
import Home from "../pages/home/Home";
import Category from "../pages/home/category/Category";
import News from "../layout/news/News";
import NewsData from "../pages/components/news/NewsData";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Body></Body>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/category/:ID",
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/categories/${params.ID}`),
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
			},
		],
	},
]);

export default router;
