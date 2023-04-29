import React from "react";
import Header from "../../pages/shared/header/Header";
import RightNav from "../../pages/shared/rightNav/RightNav";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/footer/Footer";

const News = () => {
	return (
		<div>
			<div
				style={{ maxWidth: "1200px", minHeight: "100vh" }}
				className="mx-auto"
			>
				<Header></Header>
				<section className="row">
					<div className="col-lg-9">
						<Outlet></Outlet>
					</div>
					<div className="col-lg-3">
						<RightNav></RightNav>
					</div>
				</section>
				<Footer></Footer>
			</div>
		</div>
	);
};

export default News;
