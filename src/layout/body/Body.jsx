import React from "react";
import Header from "./../../pages/shared/header/Header";
import Footer from "../../pages/shared/footer/Footer";
import LeftNav from "../../pages/shared/leftNav/LeftNav";
import RightNav from "../../pages/shared/rightNav/RightNav";

const Body = () => {
	return (
		<div style={{maxWidth: "1200px"}} className="mx-auto">
			<Header></Header>
			{/* <section className="row">
				<div className="col-lg-3">
					<LeftNav></LeftNav>
				</div>
				<div className="col-lg-6">Content Coming Soon</div>
				<div className="col-lg-3">
					<RightNav></RightNav>
				</div>
			</section> */}
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Body;
