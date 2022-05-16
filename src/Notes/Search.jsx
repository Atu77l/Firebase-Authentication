import React from 'react';
import { FaApple } from "react-icons/fa";

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<FaApple/>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
