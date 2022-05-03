import React from 'react'
import { Link } from 'react-router-dom'


/**Cocktails app version 1 - 'Error' page - Featrues:
 * 
 *      -->Setting a basic structure for 'Error' Component.
 *      
 * 
 * Note: This component has displaying a message and a link to take
 * back home.
 */

const Error = () => {
  return (
    <section className='error-page'> 
      <div className='error-container'>
        <h1>oops! it's a dead end</h1>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
    </section>
  )
}

export default Error
