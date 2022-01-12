import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

/**Accordion App version 1 - this file contains:
 * 
 *  ---- <Question /> component that has been 
 * imported as '<SingleQuestion>' in App js file
 */

/** i destructure title -this is the question- 
 * and info -answer tothe question-
*/

/**  */
const Question = ({ title, info }) => {

  /**i build the satte for toggle the showInfo 
   * will toggle between true and false to show or
   * hide info
  */
  const [ showInfo, setShowInfo ] = useState(false);

  return (
    <>
    {/** this is the question component*/}
      <h2>question component</h2>
      {/** article with style question*/}
      <article className='question'>
        <header>
          {/** 'title' is the question field*/}
          <h4>{title}</h4>
          {/**button will toggle his value between
           * 'plus' and 'minus' these components are
           * from 'react-icons' library:
           *  ------ <AiOutlineMinus />
           *  ------ <AiOutlinePlus/>
           */}
          <button 
              className='btn'
              /** here i trigger by clicking
               * the oposite value for 'ShowInfo'
               * */ 
              onClick={() => setShowInfo(!showInfo)}
              > { showInfo ? 
               <AiOutlineMinus /> : <AiOutlinePlus/>}
          </button>
        </header>
        {/** here i use i short-circuit condition
         *  to show the info  
        */}
        {showInfo && <p>{info}</p>}
      </article>
    
    </>
  );
};

export default Question;
