import React from "react";
import { Button } from "react-bootstrap";
import { BsFacebook, BsGithub, BsGoogle, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";
import QZone from "../qZone/QZone";
import "./RightNav.css"

const RightNav = () => {
	return (
		<div>
			<div>
				<div className="mb-2 fs-5 fw-bold">Login With</div>
				<div className="btn btn-outline-primary w-100 mb-2">
					<BsGoogle className="me-1"></BsGoogle> Login with Google
				</div>
				<div className="btn btn-outline-secondary w-100 ">
					<BsGithub className="me-1"></BsGithub> Login with Github
				</div>
			</div>
			<div>
				<div className="mb-2 fs-5 fw-bold mt-5">Find Us On</div>
				<Link
					className="text-decoration-none"
					to="https://www.facebook.com/safoun.10"
					target="_blank"
				>
					<div className="d-flex align-items-center border border-secondary rounded-1 py-2 ps-4 mb-2">
						<BsFacebook
							className="fs-5"
							style={{ color: "blue" }}
						></BsFacebook>
						<span className="ms-2 text-secondary">Facebook</span>
					</div>
				</Link>
				<Link
					className="text-decoration-none"
					to="https://www.facebook.com/safoun.10"
					target="_blank"
				>
					<div className="d-flex align-items-center border border-secondary rounded-1 py-2 ps-4 mb-2">
						<BsTwitter
							className="fs-5"
							style={{ color: "#1DA1F2" }}
						></BsTwitter>
						<span className="ms-2 text-secondary">Twitter</span>
					</div>
				</Link>
				<Link
					className="text-decoration-none"
					to="https://www.facebook.com/safoun.10"
					target="_blank"
				>
					<div className="d-flex align-items-center border border-secondary rounded-1 py-2 ps-4">
						<BsInstagram className="fs-5 text-secondary"></BsInstagram>
						<span className="ms-2 text-secondary">Instagram</span>
					</div>
				</Link>
			</div>
			<QZone></QZone>
			<div className="d-flex flex-column justify-content-center align-items-center text-center bg w-100 mb-5 p-5">
				<div className="display-6 text-white mt-5 mb-3">Create an Amazing Newspaper</div>
				<div className="text-secondary mb-2">
					Discover thousands of options, easy to customize layouts,
					one-click to import demo and much more.
				</div>
                <div className="btn btn-outline-secondary w-100 mb-4">Learn More</div>
			</div>
		</div>
	);
};

export default RightNav;
