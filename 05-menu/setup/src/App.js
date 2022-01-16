import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

/**Menu App version 2, features: 
 *    
 *  'Dynamic Approach' to generate menu 
 *   categories -first part-
 *  
 *   filtering by 'all' categories
 *   - this specific filter still 
 *    manual in this version--
 * 
 * ---the 'Dynamic Approach' has two parts --- 
 * 
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
 */
const allCategories = new Set(items.map((item) => item.category));
console.log(allCategories)

function App() {

  /**the state to managae the items */
  const [ menuItems, setMenuItems ] = useState(items);

  /**the state to manage the categories */
  const [ categories, setCategories] = useState([]);

  
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

      {/**i pass filterItems as a prop to use it in
       * 'Categories' component
       */}
        <Categories filterItems={filterItems} />
        <Menu items={menuItems}/>
    </section>
  </main>
  </>  
  );
}

export default App;
