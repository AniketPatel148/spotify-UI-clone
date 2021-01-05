import React from "react";
import { useStateValue } from "../../Store/Store";
import "./Body.css";
import Header from "./Header/Header";

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useStateValue();
	return (
		<div className="body">
			<Header spotify={spotify} />
			<div className="body__info">
				<img src={discover_weekly?.images[0].url} alt="" />
				<div className="body__infoText">
					<strong>PLAYLIST</strong>
					<h2>Discover weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
		</div>
	);
}

export default Body;
