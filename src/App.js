import React, { useEffect } from "react";

import Login from "./Login/Login";
import { getTokenFromResponse } from "./Spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";
import { useStateValue } from "./Store/Store";
import Player from "./Player/Player";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log("usser chutiya hai >>>", user);
				dispatch({
					type: "SET_USER",
					user: user,
				});
			});
		}
	}, []);

	return <div className="app">{!token ? <Login /> : <Player />}</div>;
}

export default App;
