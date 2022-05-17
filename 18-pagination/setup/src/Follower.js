import React from 'react'

/**Pagination app version 1 - 'Follower' Component - Features:
 * 
 *      --> Destructuring the props that i need form the API.
 * 
 *      --> Building a 'card' style div to keep the 'props'
 *          previously destructured. 
 * 
 * Note: This Component is rendered in 'App' js.
 * 
 */
const Follower = ({ avatar_url, html_url,login }) => {
  return(
    <>
      <article className='card'>
        <img src={avatar_url} alt={login}/>
        <h4>{login}</h4>
        <a href={html_url} className='btn'>
          view profile
        </a>
      </article>
    </>
  )
}

export default Follower
