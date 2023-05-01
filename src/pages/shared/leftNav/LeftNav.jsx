import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./LeftNav.css";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("https://the-dragon-news-server-safoun10.vercel.app/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
			<div className="fs-3">All Categories</div>
			<div className="mt-4 ms-4 gap-4 d-flex flex-column">
				{categories.map((category) => (
					<div key={category.id}>
						<NavLink
							className="fw-bold text-decoration-none text-secondary"
							activeclassname="active"
							to={`/category/${category.id}`}
						>
							{category.name}
						</NavLink>
					</div>
				))}
			</div>
		</div>
	);
};

export default LeftNav;
