import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

/**Color Generator App - version 1 - Features:
 * 
 *    ---> building states 
 *    ---> building 'handleSubmit' with loopback to
 *         test functionality.
 *     ---> placing 'JSX':
 *                    ---> title
 *                    ---> basic form
 *                    ---> button
 *                    ---> input
 *                    ---> section for the color data 
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
    console.log('hello');
  }

  return (
  <>
    {/** the title for the project*/}
    <h2>color generator project</h2>
    {/**this is the container for the whole app*/}
    <section className='container'>
    {/**the title for the App */}  
    <h3>Color generator</h3>
    {/**the form trigering the handleSubmit 
     * -this version is with the loopback test- */}
    <form onSubmit={handleSubmit}>

      <input 
        type='text'
        /**the value will fill the color state */ 
        value={color} 
        /**'setColor' state for the value being
          entered*/
        onChange={(e) => setColor(e.target.value)}
        /** reference value for user porpuses*/
        placeholder="#f15025"/>

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
