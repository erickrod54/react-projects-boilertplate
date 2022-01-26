import React, { useState } from 'react';
import data from './data';
function App() {

  /**Lorem ipsum App version 3 - 
   *              ------> condition when the 
   *                      paragraph count is 
   *                      less than '0' and 
   *                      when is more than 
   *                      '8'
   *                          
  */
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    let amount = parseInt(count);

    /**these conditions set 'amount' in 1 when
     * the 'count' is less than '0', and set in
     * 8 when the 'count' is more than '8'.
    */
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
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
