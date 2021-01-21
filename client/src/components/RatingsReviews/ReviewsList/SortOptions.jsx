import React from 'react';
import changeReviewSort from '../../../actions/RatingsReviews/reviewsList/reviewSort.js';

const SortOptions = ({ currentProductId, reviewSort, handleSortSelect }) => {

  const handleChange = (e) => {
    handleSortSelect(currentProductId, e.target.value);
  };

  return (
    <div className='sortSelectContainer'>
      <form>
        <select className='sortSelect' name='sortBy' onChange={e => handleChange(e)} value={reviewSort}>
          {['relevance', 'helpful', 'newest'].map((sortBy, i) => {
            return <option key={`reviewSort${i}`} value={sortBy}>{sortBy}</option>;
          })}
        </select>
      </form>
      <div className='svgIconContainer'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-down-circle"
          viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
        </svg>
      </div>
    </div>


  );
};

export default SortOptions;