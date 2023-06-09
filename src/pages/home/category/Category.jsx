import React from "react";
import { useLoaderData} from "react-router-dom";
import NewsCard from "../newsCard/NewsCard";

const Category = () => {
	const categoryNews = useLoaderData();

	return (
		<div>
			<div className="fs-3 mb-4">Dragon News Home</div>
			{categoryNews.map((news) => (
				<NewsCard key={news._id} news={news}></NewsCard>
			))}
		</div>
	);
};

export default Category;
