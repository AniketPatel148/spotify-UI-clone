import React from "react";
import "./Body.css";
import Header from "./Header/Header";

function Body({ spotify }) {
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src="" alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover weekly</h2>
					<p>description</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
