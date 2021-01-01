import React, { useEffect, useState } from "react";

import Login from "./Login/Login";
import { getTokenFromResponse } from "./Spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";

import "./App.css";

const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState();

	useEffect(() => {
		const hash = getTokenFromResponse();
		window.location.hash = "";
		const _token = hash.access_token;

		if (_token) {
			setToken(_token);

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				console.log("usser chutiya hai >>>", user);
			});
		}
	}, []);
	return (
		<div className="app">{!token ? <Login /> : <h1>AAgaya firs bsdk</h1>}</div>
	);
}

export default App;
