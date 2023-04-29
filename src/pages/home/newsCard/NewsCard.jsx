import React, { useState } from "react";
import "./NewsCard.css";
import { BsBookmark, BsEyeFill, BsShare, BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
	const {
        _id,
		title,
		author,
		thumbnail_url,
		image_url,
		details,
		rating,
		total_view,
	} = news;

	const string = author.published_date;
	const date = string.split(" ")[0];

	const text = details.slice(0, 280) + "  ....";
	console.log(text);

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
						<BsStarFill className="read-more"></BsStarFill>
						<BsStarFill className="read-more"></BsStarFill>
						<BsStarFill className="read-more"></BsStarFill>
						<BsStarFill className="read-more"></BsStarFill>
						<BsStarFill></BsStarFill>
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

// {
//         "_id": "0282e0e58a5c404fbd15261f11c2ab6a",
//         "others_info": {
//             "is_todays_pick": false,
//             "is_trending": true
//         },
//         "category_id": "1",
//         "rating": {
//             "number": 4.5,
//             "badge": "Excellent"
//         },
//         "total_view": 488,
//         "title": "Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet",
//         "author": {
//             "name": "Jimmy Dane",
//             "published_date": "2022-08-24 17:27:34",
//             "img": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
//         },
//         "thumbnail_url": "https://i.ibb.co/QnwC4sG/unsplash-Eh-Tc-C9s-YXsw-11.png",
//         "image_url": "https://i.ibb.co/M23fhxm/unsplash-Eh-Tc-C9s-YXsw.png",
//         "details": "Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military aid for Kyiv as Ukraine marked its independence day six months after Russia invaded the country.'The United States of America is committed to supporting the people of Ukraine as they continue the fight to defend their sovereignty. As part of that commitment, I am proud to announce our biggest tranche of security assistance to date: approximately $2."
//     }