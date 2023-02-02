import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
const NabBar = () => {
	// fetch+
	return (
		<div className='nav'>
			<Link to='/movies/Trending'>Trending</Link>
			<Link to='/movies/TopRated'>Top Rated</Link>
			<Link to='/movies/ActionMovie'>Action</Link>
			<Link to='/movies/ComedyMovie'>Comedy</Link>
			<Link to='/movies/HorrorMovie'>Horror</Link>
			<Link to='/movies/RomanticMovie'>Romance</Link>
			<Link to='/movies/MystryMovie'>Mystery</Link>
			<Link to='/movies/ScifiMovie'>Sci-fi</Link>
			<Link to='/movies/WesterMovie'>Western</Link>
			<Link to='/movies/AnimationMovie'>Animation</Link>
			<Link to='/movies/TvShow'>Tv shows</Link>
		</div>
	);
};

export default NabBar;
