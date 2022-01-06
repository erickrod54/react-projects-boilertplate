import React from 'react';
import Tour from './Tour';

/**Tour file version 2, we use the component
 * to drill removeTour as a prop, to get finally
 * to 'Tour' file, where will be trigger
 */

/**This is the tours component, here i'll map
 * the API to get the tours data -i'll get all
 * the tours-
 */
const Tours = ({tours, removeTour }) => {

  return (
  <>
    <section>
        <div className='title'>
          {/**<h2>tours component</h2> */}
          <h2>our tours</h2>
          <div className='underline'></div>
        </div>
        <div>
          {/**here is the map all over the API*/}
          {tours.map((tour) => {
            /**the component get:
             *  
             *    tour by 'id'
             *    spread rest properties
             *    with '{...tour}' 
             *    operator
             */
            return <Tour key={tour.id} 
                        {...tour} 
                /**Here i pass as a prop removeTour 
                 * feature */            
                          removeTour={removeTour}></Tour>
         })}
       </div>
    </section>
  </>  
  );
};

export default Tours;
