import React, { useEffect, useState } from "react";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";

import "./Footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer_left">
				<p>Album and songs</p>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer-icon" />
				<PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
				<SkipNextIcon className="footer-icon" />
				<RepeatIcon className="footer-green" />
			</div>
			<div className="footer__right">
				<p>Volume controls</p>
			</div>
		</div>
	);
}

export default Footer;
