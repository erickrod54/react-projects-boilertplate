import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  /**Reviews App version 1 - building states, 
   * destructuring data, and styling */

  /**Here i build the state to 'index' management
   * for the profiles in the array*/
  const [index, setIndex] = useState(0);

  /**Here i destructure the data for each 'profile'
   * in the 'people' array */
  const { name, job, image, text } = people[index]

  console.log(people)
   
  
  return (
/**the styles applied are:
 *  
 *      review, -> the whole container for the review
 *                  
 *      img-container, -> profile picture container
 * 
 *      person-img,-> profile picture
 * 
 *      quote-icon,-> decorative icon for profile 
 *                   picture
 * 
 *      button-container- container for buttons with
 *                       'Fa'
 *        prev-btn
 *        next-btn
 *        random-btn
 *    
 * 
 *   */
  <article className='review'>
    {/**<h2>review component</h2> */}
      <div className='img-container'>
      <img 
        src={image} 
        alt={name} 
        className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
    </div>
    {/**this section is for profile info */}
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft />
        </button>
        <button className='prev-btn'>
          <FaChevronRight />
        </button>
      </div>
          <button className='random-btn'>
            surprise me
          </button>
  </article>
  );
};

export default Review;
