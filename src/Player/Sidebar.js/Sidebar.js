import React from "react";
import "./Sidebar.css";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../../Store/Store";

function Sidebar() {
	const [{ playlists }] = useStateValue();
	return (
		<div className="sidebar">
			<img
				className="sidebar__logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
				alt="spotify-logo"
			/>
			<SidebarOptions Icon={HomeIcon} title="Home" />
			<SidebarOptions Icon={SearchIcon} title="Search" />
			<SidebarOptions Icon={LibraryMusicIcon} title="Library" />
			<br />
			<strong className="sideBar__playlistTitle">PLAYLIST</strong>
			<hr />
			{playlists?.items?.map((playlist) => {
				return <SidebarOptions title={playlist.name} />;
			})}
		</div>
	);
}

export default Sidebar;
