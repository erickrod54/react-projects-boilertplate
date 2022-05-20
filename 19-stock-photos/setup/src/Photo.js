import React from 'react'

/**Stock-photos app version 4 - 'Photo' Component file - 
 * Features:
 * 
 *      --> Destructuring the 'image' in the 
 *          props that i need to display.
 * 
 * Note: this is the 'Photo' Component previously
 * called from 'App' js
 * 
 * */

/**here i destructure the props from each 'photo' */
const Photo = ({ urls:{regular}, alt_description, likes, user:{ name, portfolio_url, profile_image: { medium }}}) => {
  return(
    <>
      <article className='photo'>
        {/**here i render the 'img' */}
        <img src={regular} alt={alt_description} />
        {/**here a container with 'photo-info'*/}
        <div className='photo-info'>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        <a href={portfolio_url}>
          <img src={medium} alt={name} className='user-img'/>
        </a>
        </div>
      </article>
    </>
  )
}

export default Photo
