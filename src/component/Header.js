import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='header'>
			<div className='left_container'>
				{/* All icons here */}
				<div
					className='header_icon header_icon--active'
					onClick={() => {
						navigate('/movies/Trending');
					}}
				>
					<HomeIcon />
					<p>Home</p>
				</div>

				<div
					className='header_icon'
					onClick={() => {
						navigate('/TrendingAll');
					}}
				>
					<FlashOnIcon />
					<p>Trending</p>
				</div>

				<div className='header_icon'>
					<LiveTvIcon />
					<p>Verified</p>
				</div>

				<div className='header_icon'>
					<VideoLibraryIcon />
					{/* TODO: If User is loggind in show his favourite movies, watchlist etc... */}
					<p>Collection</p>
				</div>

				<div className='header_icon'>
					<SearchIcon />
					{/* TODO:Make this search icon work, along with debouncing */}
					<p>Search</p>
				</div>

				<div
					className='header_icon'
					onClick={() => {
						navigate('/login');
					}}
				>
					<PersonOutlineIcon />
					<p>Account</p>
				</div>
			</div>
			<div className='right_container'>
				{/* logo */}
				<img src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' />
			</div>
		</div>
	);
};
