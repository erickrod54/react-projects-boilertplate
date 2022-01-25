import React, { useState } from 'react';
import data from './data';
function App() {

  /**Lorem ipsum App version 1 - 
   *              ------>building states.
   * 
   *              ------>building a basic input.
   *                    -to get the paragraph number-
   * 
   *              ------> creating the 'handleSubmit'
   *                      and loopback with a console
   *                      log to test response after
   *                      prevent defaul behavior.
   * 
   *              ------->styling the lorem ipsum App
   *                          
  */
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello world')
  }

  return (
    <>
      {/**all the 'JSX' and applied styles:
       * 
       *  -->section-center where the app
       *     is gonna show up
       *  -->'amount' is the style for paragraphs title.
       * 
       *  -->input type'number' where the amount is 
       *     gonna be entered.
       * 
       *  -->button to generate paragraph quantity.
       * 
       *  -->article is where the lorem ipsum is gonna be
       *    generated -this version manually to set some
       *    kind of style but in the next version will be
       *    mapped to do it dynamicly-.
       *  
       */}
      <h2>lorem ipsum project setup</h2>
      <section className='section-center'>
        <h3>tired of boring lorem ipsum?</h3>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor='amount'>
            paragraphs:
          </label>
          <input type='number' name='amount' id='amount' value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
        </form>
      <article className='lorem-text'>
        <p>Jelly sweet roll jelly beans bi, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,</p>
      </article>
      </section>
    </>
    )
}

export default App;
