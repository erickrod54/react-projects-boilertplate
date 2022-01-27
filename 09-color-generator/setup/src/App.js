import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

/**Color Generator App - version 2 - Features:
 * 
 *    ---> creating the error functionality
 *         with try catch to find out if exist
 *         or not and a conditional red border 
 *         for the input
 *  
 */

function App() {
  /**this is the 'state' for the color */
  const [ color, setColor ] = useState('');

  /**this is the state for the error, in case
   * that the entry is wrong, will contain a state 
   * for error messages*/
  const [error, setError ] =useState(false);

  /**this state will holbe filled out with the 
   * colors data*/
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    /**whith this try-catch i handle the error*/
    try {
      
      /**this makes reference to a library
       * that has an API with the 'colors'
       * 
       * -- https://
       *   github.com/noeldelgado/values.js
       * 
       */
      /**doing this method i get 20 colors
       * plus the color i give 21*/
      let colors = new Values(color).all(10);
      console.log(colors);
    } catch (error) {
      setError(true)
      console.log(error)
      
    }
  }

  return (
  <>
    
    <h2>color generator project</h2>
   
    <section className='container'>
      <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>

          <input 
            type='text'
            value={color} 
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            /**i add conditionally if an error
             * exists or not the red border to
             * the input*/
            className={`${error ? 'error' : null}`}/>

          <button className='btn' type='submit'>
            submit
          </button> 
        </form>
    </section>
    <section className='colors'>
      <h4>list goes here</h4>
    </section>
  </>
    
  )
}

export default App
