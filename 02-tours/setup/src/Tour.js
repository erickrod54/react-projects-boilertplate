import React, { useState } from 'react';

/**this is Tour component version 2:
 *  
 *  features: toggle read info
 *            toggle button title 
 *            >topic: conditional rendering
 *            >RemoveTour:
 *              App.js > Tour state lives there so
 *                       where i build removeTour
 *                       feature
 *              
 * ---------this technique is called prop drilling:
 * 
 *              then i pass it as props inside
 *              the component from 
 *              App.js > Tours > Tour
 */

/**this tour component will destructure in detail
 * the props for each 'Tour' component from 'Tours'
 */

/**all off these 'id, image, info, price, name', 
 * are unique 'props' from each json object in the
 * 'API' -url-
*/
const Tour = ({id, image, info, price, name, removeTour}) => {

/**build a state toggle between read more and show
 * less content from the Tour component */  
const [ readMore, setReadMore ] = useState(false)

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
          {/**i build a conditional rendering
           * for the text
          */}
          { readMore ? info 
            : 
            /**info showing only 200 characters */
          `${info.substring(0, 200)}...`}
          {/**this button will toggle the state for readMore*/}
          <button onClick={()=>{setReadMore(!readMore)}}
            /**here i'll conditionally render the button title */
            >{ !readMore ? 'Read more' : 'Show less'}</button> 
        </p>
        {/**Here will be trigger the removeTour
         * action that comes from:
         * 
         *  App.js > Tours > Tour
         * 
        */}
        <button className='delete-btn'
            onClick=
            {() => {removeTour(id)}}
                    >Not Interested</button>
      </footer>
  </article>  
  );
};

export default Tour;
