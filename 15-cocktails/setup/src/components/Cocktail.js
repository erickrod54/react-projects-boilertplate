import React from 'react'
import { CocktailWrapper } from '../styled.components'
/**Cocktails app version 4 - 'Cocktail' Component - Features:
 * 
 *      --> Importing and Placing 'CocktailWrapper'
 *          style Component.
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
      </div>
    </CocktailWrapper>
    </>
  )
}

export default Cocktail
