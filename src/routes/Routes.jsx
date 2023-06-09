import { Navigate, createBrowserRouter } from "react-router-dom";
import Body from "../layout/body/Body";
import Category from "../pages/home/category/Category";
import News from "../layout/news/News";
import NewsData from "../pages/components/news/NewsData";
import Home from "../pages/home/Home";
import AuthLayout from "../layout/authLayout/AuthLayout";
import Login from "../pages/components/login/Login";
import Register from "../pages/components/register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <AuthLayout></AuthLayout>,
		children: [
			{
				path: "/",
				element: <Navigate to="/category/0"></Navigate>,
				// element: <Home></Home>
			},
			{
				path: "login",
				element: <Login></Login>,
			},
			{
				path: "register",
				element: <Register></Register>,
			},
		],
	},
	{
		path: "category",
		element: <Body></Body>,
		children: [
			{
				path: ":ID",
				element: <Category></Category>,
				loader: ({ params }) =>
					fetch(
						`https://the-dragon-news-server-safoun10.vercel.app/categories/${params.ID}`
					),
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
					fetch(
						`https://the-dragon-news-server-safoun10.vercel.app/news/${params.ID}`
					),
			},
		],
	},
	{
		path: "*",
		element: <div>404</div>,
	},
]);

export default router;
