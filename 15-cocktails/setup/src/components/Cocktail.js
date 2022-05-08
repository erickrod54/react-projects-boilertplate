import React from 'react'
import { Link } from 'react-router-dom'
/**Cocktails app version 3 - 'Cocktail' Component - Features:
 * 
 *      --> Destructuring and rendering props related with
 *          the single cocktail from the API.
 * 
 * Notes: this is the single cocktail Component
 */
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <>
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h5>{info}</h5>
      </div>
    </article>
    </>
  )
}

export default Cocktail
