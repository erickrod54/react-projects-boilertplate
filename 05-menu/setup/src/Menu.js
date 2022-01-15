import React from 'react';
import menu from './data';

/**Menu App version 1 - Here in 'Menu' component
 * i destructure in detail the 'items' for every 
 * 'item' in the 'menuItem' 
*/

const Menu = ({ items }) => {
  return (
  <>
    <h2>menu component</h2>
    <div className='section-center'>
      {
        /**here i map the the 'menu' array */
        items.map((menuItem) =>{
          const {id, title, img, desc, price } = menuItem;

          return(
            /**by id, img, title, price, and desc
             * every item
             */
            <article key={id} className='menu-tem'>
              <img 
                src={img} 
                alt={title} 
                className='photo'/>
              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>${price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          )
        })
      }
    </div>
  </>
    
  );
};

export default Menu;
