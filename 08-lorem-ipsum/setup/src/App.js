import React, { useState } from 'react';
import data from './data';
function App() {

  /**Lorem ipsum App version 2 - 
   *              ------>mapping the 'text ' array
   *                    to get dynamicly the data.
   * 
   *              ------>making the data slice by the
   *                     number of paragraph that are
   *                     entered -this after converting 
   *                      count to a number -.
   *                          
  */
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /**every time i change the value and
     * click in generate it promp an 'string'
     * i can test the type like this:
     * 
     *  console.log( typeof count )
     * 
     * but i need it in 'integer number':
     * 
     *  console.log(count)
     * 
     * thats why i create amount and
     * use a parseInt to convert a 
     * 'string' in a 'number'.
     * 
     * i can test it this way:
     * 
     *  console.log(typeof amount)
     */

    let amount = parseInt(count);

    /**the functionality to get the
     * desire number of paragraphs 
     * is with 'slice' from 0 to
     * 'amount'
     */
    setText(data.slice(0,amount));
  }

  return (
    <>
      {/**all the 'JSX' and applied styles:
       * 
       *  -->section-center where the app
       *     is gonna show up
      */}
      <h2>lorem ipsum project setup</h2>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          
          <label htmlFor='amount'>
            paragraphs:
          </label>

          <input 
            type='number' 
            name='amount' 
            id='amount' 
            value={count} 
            onChange=
            {(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
        </form>
      {/**Here i mapped to do it dynamicly */}
      <article className='lorem-text'>
        {text.map((item, index) => {
          return(
            <p key={index}>{item}</p>
          )
        })}
      </article>
      </section>
    </>
    )
}

export default App;
