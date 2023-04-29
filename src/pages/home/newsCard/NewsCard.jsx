import React, { useState } from "react";
import "./NewsCard.css";
import {
	BsBookmark,
	BsEyeFill,
	BsShare,
	BsStar,
	BsStarFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import moment from "moment";

const NewsCard = ({ news }) => {
	const { _id, title, author, image_url, details, rating, total_view } = news;

	const string = author.published_date;
	const date = moment(string).format("YYYY-MM-D");

	const text = details.slice(0, 280) + "  ....";

	return (
		<div className="mb-4 news-card">
			<div className="d-flex justify-content-between align-items-center author-bg">
				<div className="d-flex justify-content-center align-items-center">
					<div>
						<img className="author-img" src={author.img} />
					</div>
					<div className="ms-3">
						<div className="fw-bold">{author.name}</div>
						<div className="text-secondary">
							<small>{date}</small>
						</div>
					</div>
				</div>
				<div className="text-secondary d-flex gap-2">
					<div>
						<BsBookmark></BsBookmark>
					</div>
					<div>
						<BsShare></BsShare>
					</div>
				</div>
			</div>
			<div className="p-3">
				<div className="fs-3 fw-bold pb-3">{title}</div>
				<div>
					<img className="img-fluid pb-4" src={image_url} />
				</div>
				<div className="pb-3 text-secondary">
					{text}{" "}
					<Link to={`/news/${_id}`} className="text-decoration-none">
						<span className="fw-bold read-more">Read More</span>
					</Link>
				</div>
				<hr className="pb-2" />
				<div className="px-3 d-flex justify-content-between">
					<div className="d-flex text-secondary gap-1 align-items-center pb-1">
						<Rating
							initialRating={rating.number}
							emptySymbol={<BsStarFill></BsStarFill>}
							fullSymbol={
								<BsStarFill className="read-more"></BsStarFill>
							}
						/>
						<div>{rating.number}</div>
					</div>
					<div className="text-secondary d-flex gap-2 align-items-center">
						<BsEyeFill></BsEyeFill>
						<div>{total_view}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsCard;