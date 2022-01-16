import React from 'react';

/**Menu App version 2 - features:
 * 
 *    Here i add the button to 'filterItems' by
 *    category all
 *    
 *    ---this filter still manual in this verion---
 */

const Categories = ({ filterItems }) => {
  return (
  <div className='btn-container'>
    {/**<h2>categories component</h2> */}
    <button 
        className='filter-btn' 
      /**i manually filter the 'category' by string */
        onClick={() => filterItems('all')}>
      All
    </button>
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
