const API_KEY = '526fda5fda2ba2faeca2bd32b7a42d1f';

const request = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-Us`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
	fetchActionMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,

	fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,

	fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=27`,

	fetchRomanticMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,

	fetchMystryMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=9648`,

	fetchScifiMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,

	fetchWesterMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=37`,

	fetchAnimationMovie: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,

	fetchTvShow: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10770`,

	fetchMovie: `?api_key=${API_KEY}&language=en-US`,
	fetchTrendingAll: `/trending/all/day?api_key=${API_KEY}`,
	fetchNextPage:
		'https://api.themoviedb.org/3/trending/all/day?api_key=526fda5fda2ba2faeca2bd32b7a42d1f&page=1000'
};

export default request;
