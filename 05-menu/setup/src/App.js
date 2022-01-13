import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

/**Menu App version 1, features:
 *    
 *  building states - menuItems, setMenuItems -
 * ---i'll map the menuItems from 'Menu' component--
 * 
 *  
 */
function App() {

  /**the state to managae the items */
  const [ menuItems, setMenuItems ] = useState(items);

  /**the state to manage the categories */
  const [ categories, setCategories] = useState([]);

  /**here i build the filterItems functionality
   * to filter by 'category' and by 'item'
   */
  const filterItems = (category) => {
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
