import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

/**Cocktails app version 2 - 'CocktailsList' Component - Featrues:
 * 
 *      -->Getting the fetching result of cocktails
 *         from the provider.
 * 
 * Notes: the conditions are made to handle conditions for the
 * search behavior that concerns to this component
 */

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  /**here i just console log it to check that i'm
   * getting the value from the provider
   */
  console.log(cocktails)
  if (loading) {
    return <Loading />
  }

  if (cocktails.length < 1 ) {
    return(
    <>
    <h2 className='section-title'>
      no cocktails matches with your criteria
    </h2>
    </>  
    )
  }

  return (
    <div>
      <h2>cocktail list component</h2>
    </div>
  )
}

export default CocktailList
