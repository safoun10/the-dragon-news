import React from "react";
import TopNav from "../../pages/shared/topNav/TopNav";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
	return (
		<div className="py-4" style={{ backgroundColor: "rgba(128, 128, 128, 0.188)" , minHeight: "100vh"}}>
			<div
				className="mx-auto"
				style={{
					maxWidth: "1200px",
					minHeight: "100vh",
				}}
			>
				<TopNav></TopNav>
				<Outlet></Outlet>
			</div>
		</div>
	);
};

export default AuthLayout;
