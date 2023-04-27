import React from 'react';
import { Link } from 'react-router-dom';
// import profile from "../../../assets/"

const TopNav = () => {
    return (
		<div className="row">
			<div className="col-9 d-flex justify-content-center align-items-center gap-4">
				<Link to="/">Home</Link>
				<Link to="/">About</Link>
				<Link to="/">Career</Link>
			</div>
			<div className="col-3 d-flex justify-content-center align-items-center">
				<div>img</div>
				<Link>
					<button>Login</button>
				</Link>
			</div>
		</div>
	);
};

export default TopNav;