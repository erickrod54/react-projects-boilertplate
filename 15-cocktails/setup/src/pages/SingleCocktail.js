import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

/**Cocktails app version 5 - 'SingleCocktail' Component - 
 * Features:
 * 
 *      --> Building state for 'loading' and 'cocktail'.
 * 
 *      --> Implementing 'useEffect' to build a function
 *          to get the 'cocktail' data
 * 
 * Notes: This component will handle the cocktail at 'detail'
 * level, the 'Link' previously set on Cocktail address to this
 * Component.
 */

const SingleCocktail = () => {
  /**here i build the states */
  const { id } = useParams()
  const [loading, setLoading ] = React.useState(false)
  const [ cocktail, setCocktail ] = React.useState(null)
  
  React.useEffect(() => {
    /**i set loading state to 'true' */
    setLoading(true);
    /**i start to build the function to get the data */
    async function getCocktail(){
      /**i use a try catch to get the data */
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json()
        /**the response will be the original object */
        console.log(data)
      } catch (error) {
        
      }
    }
    getCocktail()
  }, [id])
  return (
    <div>
      {/**here i get the id */}
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCocktail
