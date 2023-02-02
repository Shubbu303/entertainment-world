import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const VideoCard = ({ movie }) => {
	const base_imgUrl = 'https://image.tmdb.org/t/p/original';
	const {
		id,
		title,
		overview,
		backdrop_path,
		poster_path,
		release_date,
		vote_count,
		first_air_date
	} = movie;
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/movie/${id}`);
	};

	return (
		<div
			className='videoCard'
			onClick={() => {
				handleClick(movie);
			}}
		>
			<img
				src={`${base_imgUrl}${backdrop_path || poster_path}`}
				alt='No preview'
			/>
			<TextTruncate line={1} element='p' truncateText='...' text={overview} />
			{/*apply truncate if content is more than one line in element "p" with the text "..." and value will be {}overview  */}

			<TextTruncate
				line={1}
				element='h3'
				truncateText='...'
				text={title || movie.original_name}
			/>
			<p className='videoStat'>
				{release_date || first_air_date}
				<ThumbUpSharp />
				{vote_count}
			</p>
		</div>
	);
};
