import React, { useState } from 'react';


/**this tour component will destructure in detail
 * the props for each 'Tour' component from 'Tours'
 */

/**all off these 'id, image, info, price, name', 
 * are unique 'props' from each json object in the
 * 'API' -url-
*/
const Tour = ({id, image, info, price, name}) => {
  return (
  <article className='single-tour'>
      {/**<h2>tour component</h2> */}
      <img 
        src={image} 
        alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'
          >${price}</h4>
        </div>
       <p>
          {info}
        </p>
        <button className='delete-btn'
         >Not Interested</button>
      </footer>
  </article>  
  );
};

export default Tour;
