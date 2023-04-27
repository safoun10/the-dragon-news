import React from 'react';
import "./Marquee.css";
import Marquee from "react-fast-marquee";

const MarqueeTexts = () => {
    return (
		<div className="d-flex marquee-box align-items-center my-4">
			<div className="p-0">
				<button className="latest-btn">Latest</button>
			</div>
			<div className="fw-bold text-secondary ps-3 pe-5">
				<Marquee pauseOnHover delay={2} speed={80}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Laudantium tenetur, fugit eos laborum beatae sapiente
					repellendus enim velit impedit facere corrupti magnam
					aperiam quae nostrum, numquam alias dolore perferendis. Nemo
					autem odio dolorem quas libero, nisi consectetur voluptatem
					quo excepturi mollitia voluptate nulla a, iusto labore,
					provident officia. Enim, est!
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeTexts;