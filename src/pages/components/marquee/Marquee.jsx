import React from 'react';
import "./Marquee.css";

const Marquee = () => {
    return (
		<div className="row marquee-box align-items-center my-4">
			<div className="col-1 p-0">
				<button className="latest-btn">Latest</button>
			</div>
			<div className="col-11 fw-bold text-secondary ps-3 pe-5">
				<marquee>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Laudantium tenetur, fugit eos laborum beatae sapiente
					repellendus enim velit impedit facere corrupti magnam
					aperiam quae nostrum, numquam alias dolore perferendis. Nemo
					autem odio dolorem quas libero, nisi consectetur voluptatem
					quo excepturi mollitia voluptate nulla a, iusto labore,
					provident officia. Enim, est!
				</marquee>
			</div>
		</div>
	);
};

export default Marquee;