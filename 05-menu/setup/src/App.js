import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

/**Menu App version 3, features: 
 *    
 *  'Dynamic Approach' to generate menu 
 *   categories -second part-
 *  
 *   filtering by 'all' categories
 *   - this specific filter now is 
 *     dynamic--
 * 
 * ---the 'Dynamic Approach' has two parts --- 
 *          -this is the second part-
 */

/**
 * First i map items by item.category to show all 
 * the categories (prompted categories 13)
 * 
 * Second i look for the unique values inside the 
 * categories so i wrap the 'map' with a 'new Set'
 * (prompted set must be 5)
 * 
 * ---new Set is ES6 and will show me unique values--
 * 
 * Third i include the 'category' 'all' in the new 
 * Set
 */
const allCategories = ['all',
... new Set(items.map((item) => item.category))];
console.log(allCategories)

function App() {

  /**the state to managae the items */
  const [ menuItems, setMenuItems ] = useState(items);

  /**the state to manage the categories */

  /**the new value for categories will be 
   * 'allCategories' -dynamic approach- */
  const [ categories, setCategories] = useState(allCategories);

  
  /**here i build the filterItems functionality
   * to filter by 'category' and by 'item'
   */
  const filterItems = (category) => {
    
    /**for a 'category' value of 'all' 
     * i'll return all the items in the array
    */
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    
    const newItems = items.filter((item) => item.category
    === category)
  /**here using 'setMenuItems' state, i set the 'items'
   * with the 'newItems' object -object already 
   * filtered-
  */
    setMenuItems(newItems)
  }

  return (
  <>
  <main>
    <h2>menu project setup</h2>
    <section className='menu section'>
      <div className='title'>
        <h2>Our menu</h2>
        <div className='underline' />
      </div>
      {/**here i render Categories and Menu component*/}

      {/**i pass categories and filterItems as a props
       *  to use it in 'Categories' component
       */}
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems}/>
    </section>
  </main>
  </>  
  );
}

export default App;
