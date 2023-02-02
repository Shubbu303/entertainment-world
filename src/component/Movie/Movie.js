import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../ApiCalls/request';
import './Movie.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Movie = () => {
	const baseUrl = 'https://api.themoviedb.org/3/movie/';
	const base_imgUrl = 'https://image.tmdb.org/t/p/original';
	const param = useParams();
	const movieId = param.id;
	const [movieDetail, setMovieDetail] = useState({});
	const [renderPagination, setRenderPagination] = useState(false);
	const fetchData = async (url) => {
		const response = await axios.get(url);
		setMovieDetail(response.data);
		console.log(response.data);
		document.title = `${response.data?.original_title}`;
		setRenderPagination(true);
	};

	useEffect(() => {
		fetchData(`${baseUrl}${movieId}${request.fetchMovie}`);
	}, []);
	return (
		<div className='movie'>
			{renderPagination && (
				<div className='movie__details'>
					<div className='movie__image'>
						<img src={`${base_imgUrl}${movieDetail.backdrop_path}`} alt='' />
					</div>
					<div className='movie__description'>
						<div className='movie__name'>
							<h2>{movieDetail.original_title}</h2>
							{movieDetail?.genres?.map((e) => (
								<span className='movie__genre'>{e?.name}</span>
							))}
						</div>
						{/* TODO: after login ,user should be able to perform below operations, need to store these data in firebase, and after login we need to fetch and store those data in store */}
						<div className='movie__actions'>
							{/* add icons for the action */}
							<div className='movie__addfav'>
								<FavoriteBorderIcon />
								<span className='tooltiptext'>Login to add to favourite</span>
							</div>
							<div className='movie__addwatchlist'>
								<BookmarkBorderIcon />
								<span className='tooltiptext'>Login to add to watchlist</span>
							</div>
							<div className='movie__addrating'>
								<StarBorderIcon />
								<span className='tooltiptext'>Login to add to rating</span>
							</div>
							<div className='movie__playtrailer'>
								<PlayCircleIcon />
								<span className='tooltiptext'>Play Trailer</span>
							</div>
						</div>
						<div className='movie__overview'>
							<h2>Overview</h2>
							<p>{movieDetail.overview}</p>
						</div>
						<div className='movie__castcrew'>
							<div className='movie__director'>
								<h4>Status</h4>
								<p>{movieDetail.status}</p>
							</div>
							<div className='movie__character'>
								<h4>Release Date</h4>
								<p>{movieDetail.release_date}</p>
							</div>
							<div className='movie__screenplay'>
								<h4>Runtime</h4>
								<p>{movieDetail.runtime} mins</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Movie;
