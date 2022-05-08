import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import { SectionWrapper } from '../styled.components'

/**Cocktails app version 4 - 'CocktailsList' Component - 
 * Features:
 * 
 *      --> Importing and Placing 'SectionWrapper' Style
 *          Component.
 * 
 * Notes: the conditions are made to handle conditions for the
 * search behavior that concerns to this component
 */

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

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
    <SectionWrapper>

    <h2 className='section-title'>
      cocktails
    </h2>
    <div className='cocktails-center'>
      {cocktails.map((cocktail) => {
        return <Cocktail key={cocktail.id} {...cocktail} />
      })}
    </div>

    </SectionWrapper>
 
  )
}

export default CocktailList
