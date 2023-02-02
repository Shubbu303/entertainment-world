import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css';

const Pagination = ({ handlePageClick, pageCount }) => {
	return (
		<div className='pagination_main'>
			<ReactPaginate
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={9}
				marginPagesDisplayed={3}
				pageCount={pageCount}
				previousLabel='< previous'
				pageClassName='page-item'
				pageLinkClassName='page-link'
				previousClassName='page-item'
				previousLinkClassName='page-link'
				nextClassName='page-item'
				nextLinkClassName='page-link'
				breakLabel='...'
				breakClassName='page-item'
				breakLinkClassName='page-link'
				containerClassName='pagination'
				activeClassName='active'
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default Pagination;
