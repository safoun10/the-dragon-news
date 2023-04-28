import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch("http://localhost:5000/categories")
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((err) => console.error(err));
	}, []);

	return (
		<div>
            <div className="fs-3">All Categories</div>
			<div className="mt-4 ms-4 gap-4 d-flex flex-column">
				{categories.map((category) => (
					<div
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="fw-bold text-decoration-none text-secondary ">{category.name}</Link>
                    </div>
				))}
			</div>
		</div>
	);
};

export default LeftNav;
