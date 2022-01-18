import React from 'react';

/**Menu App version 3 - features:
 * 
 *   In order to add dynamicly buttons as 
 *   new categories items in the menu i'll
 *   map
 */

const Categories = ({ categories, filterItems }) => {
  return (
  <div className='btn-container'>
    {/**i'll map 'categories' to get the' category'
     * of every item, as i have a list of them,
     * i use an 'index'
     */}
    {categories.map((category, index) => {
      /**i return a 'JSX' button with: 
       *    
       * ----a 'key' as'index',
       * ----a 'onClick' action that filterItems
       *     by category
       * 
       * ----a 'value' in each button of 'category'
      */
      return(
        <button 
            type='button' 
            className='filter-btn' 
            key={index}
            onClick={() => filterItems(category)}
            >{category}</button>
      )
    })}
    
  </div>
    
  );
};

export default Categories;
