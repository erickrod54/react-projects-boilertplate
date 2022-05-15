import React, { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

/**Random person app version 1 - 'App' js file - Features:
 * 
 *      --> Building states for 'loading', 'person', 'title',
 *          and 'value'.
 *      
 *      --> Building a reference function 'handleValue' to 
 *          handle the 'onMouseOver' feature over the icons.
 * 
 *      --> Setting up image, icons and a button to make 
 *          changes.
 * 
 * Note: In this version i set a boilerplate with default
 * values, then this values will be replaced with the API
 * data
 */

function App() {
  /**here i build the states */
  const [loading, setLoading ] = useState(true)
  const [person, setPerson ] = useState(null)
  const [ title, setTitle ] = useState('name')
  const [ value, setValue ] = useState('random person')

  /**here i build the function to handle the 'onMouseOver' 
   * feature */
  const handleValue = (e) => {
    console.log(e.target)
  }

  return(
    <>
      <main>
        <div className='block bcg-black'></div>
        <div className='block'>
          {/**here i place the image */}
          <div className='container'>
            <img 
                src={( person && person.image) || defaultImage} 
                alt='random user'
                className='user-img'/>
          {/**here i place the person name */}   
            <p className='user-title'>
              my {title} is:
            </p>
            <p className='user-value'>{value}</p>
            {/**here i place the person data */}
            <div className='values-list'>
              <button 
                className='icon' 
                data-label='name' 
                onMouseOver={handleValue}>
                <FaUser />
              </button>
              <button 
                className='icon' 
                data-label='email' 
                onMouseOver={handleValue}>
                <FaEnvelopeOpen />
              </button>
              <button 
                className='icon' 
                data-label='age' 
                onMouseOver={handleValue}>
                <FaCalendarTimes />
              </button>
              <button 
                className='icon' 
                data-label='street' 
                onMouseOver={handleValue}>
                <FaMap />
              </button>
              <button 
                className='icon' 
                data-label='phone' 
                onMouseOver={handleValue}>
                <FaPhone />
              </button>
              <button 
                className='icon' 
                data-label='password' 
                onMouseOver={handleValue}>
                <FaLock />
              </button>
            </div>
            {/**here i place the button */}
            <button className='btn' type='button'>
              {loading ? 'loading...' : 'random user'}
            </button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
