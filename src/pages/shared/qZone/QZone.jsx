import React from 'react';
import QZone1 from "../../../assets/qZone1.png"
import QZone2 from "../../../assets/qZone2.png"
import QZone3 from "../../../assets/qZone3.png";

const QZone = () => {
    return (
		<div className='d-flex flex-column pb-5 gap-2 justify-content-center align-items-center my-5' style={{ background: "#F3F3F3" }}>
			<div className="mb-2 fs-5 fw-bold mt-5">Q-Zone</div>
			<div>
				<img src={QZone1} />
			</div>
			<div>
				<img src={QZone2} />
			</div>
			<div>
				<img src={QZone3} />
			</div>
		</div>
	);
};

export default QZone;