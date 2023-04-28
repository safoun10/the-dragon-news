import React from "react";
import { Link } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

const TopNav = () => {
	return (
		<div className="row mt-2 pb-2 mb-5 mx-0 w-100">
			<div className="col-md-9 col-8 d-flex justify-content-center align-items-center gap-4">

				<Link className="text-decoration-none text-secondary" to="/">
					Home
				</Link>

				<Link className="text-decoration-none text-secondary" to="/">
					About
				</Link>

				<Link className="text-decoration-none text-secondary" to="/">
					Career
				</Link>

			</div>
			<div className="col-md-3 col-4 d-flex justify-content-center align-items-center p-0">
				<div>
					<BsPersonCircle className="fs-2 text-secondary me-3"></BsPersonCircle>
				</div>
				<Link>
					<button className="bg-dark text-white px-4 py-2 border-0">
						Login
					</button>
				</Link>
			</div>
		</div>
	);
};

export default TopNav;
