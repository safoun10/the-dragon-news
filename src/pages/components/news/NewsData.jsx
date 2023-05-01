import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./NewsData.css";
import { BsArrowLeft } from "react-icons/bs";

const NewsData = () => {
	const news = useLoaderData();

	const { category_id , title, image_url, details } = news;
	return (
		<div className="mt-5 pt-2">
			<div className="mb-4 news-card">
				<div className="p-4">
					<div>
						<img className="img-fluid w-100 pb-4" src={image_url} />
					</div>
					<div className="fs-3 fw-bold pb-3">{title}</div>
					<div className="text-secondary px-1">{details}</div>
					<Link to={`/category/${category_id}`} className="text-decoration-none">
						<button className="all-news-btn d-flex justify-content-center align-items-center">
							<BsArrowLeft></BsArrowLeft>
							<span className="ps-2"> All news in this category</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NewsData;
