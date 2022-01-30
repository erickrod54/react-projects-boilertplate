import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

/**Color Generator App - version 5 - Features:
 * 
 *    ---> i create a new value for the 'List' state
 *         and is posibble to get it improve 
 *         
 */

function App() {
  
  const [ color, setColor ] = useState('');

  const [error, setError ] =useState(false);

  /**modifying the list state value to mimic a 
   * set default and modifying the number a can 
   * can more o less colors indeed can be an 
   * improvement
   */
  const [list, setList] = useState(new Values('#f15025').
  all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    /**whith this try-catch i handle the error*/
    try {
      
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
