import React from "react";
import { useStateValue } from "../../Store/Store";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";
import Header from "./Header/Header";
import SongRow from "./SongRow/SongRow";

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

			<div className="body__songs">
				<div className="body__icons">
					<PlayCircleFilledIcon
						className="body__shuffle"
						onClick={playPlaylist}
					/>
					<FavoriteIcon fontSize="large" />
					<MoreHorizIcon />
				</div>

				{discover_weekly?.tracks.items.map((item) => (
					<SongRow playSong={playSong} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
