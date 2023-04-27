import React from 'react';
import logo from "../../../assets/logo.png";
import moment from 'moment/moment';

const Header = () => {
    return (
		<div className="d-flex flex-column justify-content-center align-items-center mt-5">
			<div>
				<img className="mb-4 img-fluid" src={logo} />
			</div>
			<div className="text-secondary mb-2">
				Journalism Without Fear or Favor
			</div>
			<div className="fs-5">
				<span>{moment().format("dddd")}</span> , 
				<span  className='text-secondary'>{moment().format(" MMMM D, YYYY")}</span>
			</div>
		</div>
	);
};

export default Header;