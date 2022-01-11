import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  /**Reviews App version 3 - Features added:
   * 
   * Prev and Next feature
   * RandomProfile
   * 
   *  */

  /**Here i build the state to 'index' management
   * for the profiles in the array*/
  const [index, setIndex] = useState(0);

  /**Here i destructure the data for each 'profile'
   * in the 'people' array */
  const { name, job, image, text } = people[index]

  console.log(people)

  /**'checkNumber' will check 'newIndex' 
   * to make a continous flow in index number
  */
  const checkNumber = (number) => {
    /**case for the last item 'people' array */
    if (number > people.length - 1) {
      return 0;
    }
    /**case for item is less than 0 will 
     * return last element in 'people' array */
    if (number < 0) {
      return people.length - 1;
    }
    /**in any other case will return number for
     * 'newIndex'
     */
    return number
  }
   
  const nextProfile = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    })
  }

  const prevProfile = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    })
  }

  const randomProfile = () => {
    /**floor gives an integer number, if i use
     * only random gives a unique float number
     */
     let randomNumber = Math.floor(
          Math.random() * people.length);
    /**Math.random is used to generate a random number
     * and i multiply to 'people.length' to get the 
     * range between my random number is gonna move,
     * -this case the 'length' of my 'people' array-
     */

    /**this condition garantee a unique random number
     * in order to avoid repetition
     */
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber))
  }

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
        <button className='prev-btn' onClick={prevProfile}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextProfile}>
          <FaChevronRight />
        </button>
      </div>
          <button className='random-btn' onClick={randomProfile}>
            surprise me
          </button>
  </article>
  );
};

export default Review;
