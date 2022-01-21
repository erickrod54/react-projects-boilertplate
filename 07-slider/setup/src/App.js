import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

/**Slider App version 1 - Features:
 * 
 * ---------->building states.
 * ---------->implenting useEffect for side effects.
 * ---------->maping people 'data'.
 * ---------->transitions - index.css file-.
 * ---------->implementing css active classes.
 *            to slide the profiles.
 */

function App() {
  /**this state is to set a initial value of data
   * for the people value*/
  const [people] = useState(data);
  /**this index state will be use for map the data 
   * js file */
  const [index, setIndex] = useState(0);
  
  /**this useEffect is use to fix two side effects */
  useEffect(() => {
    const lastIndex = people.length - 1;
    
    /**when the index is less than 0 
     * -first element of the people 'data'-*/
    if (index < 0) {
      setIndex(lastIndex)               
    }
    /**when the index is greater than the last
     * index of the people data*/
    if (index > lastIndex) {
      setIndex(0)
    }
   /**the second parameter will be index and people*/ 
  }, [index, people])
  console.log(index)

  /**this useEffect is use for auto slide the 
   * people data*/
  useEffect(() => {
    /** here i use 'let' because the data will change*/
    let slider = setInterval(() => {
      /**here i 'setIndex' state plus 1 */
      setIndex(index + 1)
      /** 3 seconds of interval */
    }, 3000);
    /**i build a cleanup function for 'slider'
     * so i prevent a not accurate behavior */  
    return ( () => clearInterval(slider))
  }, [index])
  return (
  <>
    {/**<h2>slider project setup</h2> */}
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      {/**here is where the slide for 'activeSlide
       * is going to be show'*/}
      <div className='section-center'>
        {/** i start mapping the people 'data'*/}
        {people.map((person, personIndex) => {
          /**i destructure the data that i need */
          const {id, image, name, title, quote } 
          = person;

          /**i render the style-from index css- by 
           * the 'index' */

          /**position 'nextSlide' */
          let position = 'nextSlide';

          /**if personIndex -which is the current 
           * index- matches with 'index' it will 
           * show activeSlide -a current index-*/
          if (personIndex === index) {
            position = 'activeSlide';
          }
          /**if 'personIndex' is the same as the last
           * element or the 'index' same as the initial 
           * element and the 'personIndex' is the same 
           * as the last elmement of the people data
           * 
           * --->the position will be the last slide 
           */
          if (personIndex === index -1 || 
            (index === 0 && 
              personIndex === people.length - 1) ) {

            position = 'lastSlide'
          }
          
          return(
            <>
             {/** position is the style the jsx article  
              * and 'id' as key*/}
              <article 
                className={position} 
                key={id}>
                {/**the profile picture */}
                <img 
                  src={image} 
                  alt={name} 

                  className='person-img' />

                  <h4>{name}</h4>
                  <p className='title'>{title}</p>
                  <p className='text'>{quote}</p>
                  <FaQuoteRight className='icon'/>
              </article>
            </>
          )
        })}
        <button 
          className='prev'
          /**here i trigger the action for previous
           * slide*/ 
          onClick={() => { setIndex(index - 1)}}>
          <FiChevronLeft />
        </button>
        <button 
          className='next' 
          /**here i trigger the action for next 
           * slide */
          onClick={() => { setIndex(index + 1)}}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  </>
  );
}

export default App;
