import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

/**Color Generator App - version 4 - Features:
 * 
 *    ---> i 'setError' to false in the
 *          try-catch
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
      setList(colors);
      setError(false)
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
      {list.map((color, index) => {
        console.log(color)
        
        return(
          <SingleColor 
              key={index} {...color} 
              index={index}
              /**here i use 'hex' to convert
               * from 'rgbToHex'
               * 
               *  --accesing-drilling
               *    -->utils.js-->SingleColor-->App.js
              */
              hexColor={color.hex}/>
        )
      })}
    </section>
  </>
    
  )
}

export default App
