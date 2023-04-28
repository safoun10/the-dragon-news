import React from 'react';
import "./Marquee.css";
import Marquee from "react-fast-marquee";

const MarqueeTexts = () => {

	const textSample = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nisi corporis ducimus debitis qui. Veniam ratione consectetur, fuga quaerat molestiae aliquid enim suscipit rem temporibus vero et debitis. Sequi mollitia fugiat est maxime magni consectetur animi itaque nobis fugit, sit quia excepturi, magnam amet hic tenetur aperiam, error debitis dolor a iure non accusantium possimus. Doloremque nulla aperiam, sint itaque dicta sed atque laboriosam? Cum aliquam, saepe tempore fugit rerum cumque officiis, vero eum quis, assumenda nemo optio reprehenderit? Dolores quisquam, itaque alias, autem adipisci consequatur fugiat ipsa consectetur maxime suscipit magni, laborum corrupti optio omnis quae! Architecto, totam illum?" ;

    return (
		<div className="d-flex marquee-box align-items-center my-4">
			<div className="p-0">
				<button className="latest-btn">Latest</button>
			</div>
			<div className="fw-bold text-secondary ps-md-3 pe-md-5 pe-3">
				<Marquee pauseOnHover delay={2} speed={80}>
					{textSample}
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeTexts;