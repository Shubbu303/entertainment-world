import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import request from '../../ApiCalls/request';
import { findContent } from '../../Utils/Utils';
import Pagination from '../Pagination/Pagination';
import { VideoCard } from '../VideoCard/VideoCard';
import './Results.css';

export const Results = ({ selectedOption }) => {
	const param = useParams();
	const content = param.content;
	const api = findContent(content);
	const [movies, setMovies] = useState([]);
	const totalPages = 500;
	const baseURL = 'https://api.themoviedb.org/3';
	const [currentpage, setCurrentPage] = useState(1);
	const [renderPagination, setRenderPagination] = useState(false);
	const handlePageClick = (e) => {
		setCurrentPage(e.selected + 1);
	};
	useEffect(() => {
		async function fetchData() {
			console.log('in results', baseURL + request[api] + `&page=${currentpage}`);
			const response = await axios.get(
				baseURL + request[api] + `&page=${currentpage}`
			);
			setMovies(response.data.results);
			console.log(response);
		}
		fetchData();
		setRenderPagination(true);
	}, [content, currentpage]);
	return (
		<>
			<div className='results'>
				{movies.map((e) => (
					<VideoCard movie={e} key={e.id} />
				))}
			</div>
			{renderPagination && (
				<Pagination pageCount={totalPages} handlePageClick={handlePageClick} />
			)}
		</>
	);
};
