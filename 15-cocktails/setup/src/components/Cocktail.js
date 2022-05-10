import React from 'react'
import { CocktailWrapper } from '../styled.components'
import { Link } from 'react-router-dom'
/**Cocktails app version 5 - 'Cocktail' Component - Features:
 * 
 *      --> Setting up the Link to take to a 'Cocktail' Detail.
 * 
 * Notes: this is the single cocktail Component
 */
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <>
    <CocktailWrapper>
      <div className='img-container'>
        <img src={image} alt={name}/>
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h5>{info}</h5>
        {/**here i set the detail */}
        <Link to={`/cocktail/${id}`} className='btn btn-primary
        btn-details'> Details</Link>
      </div>
    </CocktailWrapper>
    </>
  )
}

export default Cocktail
