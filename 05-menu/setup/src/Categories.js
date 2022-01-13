import React from 'react';

/**Menu App version 1 - features:
 * 
 *    filter 'Categories', this is a 
 *    'Manual Approach', for version 2
 *    will be dynamicly
 */

const Categories = ({ filterItems }) => {
  return (
  <div className='btn-container'>
    {/**<h2>categories component</h2> */}
    <button 
        className='filter-btn' 
      /**i manually filter the 'category' by string */
        onClick={() => filterItems('Christmas food')}>
      Christmas Food
    </button>
  </div>
    
  );
};

export default Categories;
