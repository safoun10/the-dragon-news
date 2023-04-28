import React from "react";
import Header from "./../../pages/shared/header/Header";
import Footer from "../../pages/shared/footer/Footer";
import LeftNav from "../../pages/shared/leftNav/LeftNav";
import RightNav from "../../pages/shared/rightNav/RightNav";
import MarqueeTexts from "../../pages/components/marquee/MarqueeTexts";
import TopNav from "../../pages/shared/topNav/TopNav";

const Body = () => {
	return (
		<div style={{ maxWidth: "1200px" , minHeight: "100vh"}} className="mx-auto">
			<Header></Header>
			<MarqueeTexts></MarqueeTexts>
			<TopNav></TopNav>
			<section className="row">
				<div className="col-lg-3">
					<LeftNav></LeftNav>
				</div>
				<div className="col-lg-6">Content Coming Soon</div>
				<div className="col-lg-3">
					<RightNav></RightNav>
				</div>
			</section>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Body;
