export const authEndpoint = "https://accounts.spotify.com/authorize";

const clientId = "a8908dc544334426984c17207aa5533d";

const redirectURL = "http://localhost:3000/";

const scopes = [
	"user-read-currently-playing",
	"user-read-recently-played",
	"user-read-playback-state",
	"user-top-read",
	"user-modify-playback-state",
];

export const getTokenFromResponse = () => {
	return window.location.hash
		.substring(1)
		.split("&")
		.reduce((initial, item) => {
			var parts = item.split("=");
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
	"%20"
)}&response_type=token&show_dialog=true`;
