import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

/**Cocktails app version 6 - 'SingleCocktail' Component - 
 * Features:
 * 
 *      --> Setting up the 'lookup' feature using the 
 *          'url' and destructuring the data with friendly
 *          aliasses.
 * 
 * Notes: This component will handle the cocktail at 'detail'
 * level, the 'Link' previously set on Cocktail address to this
 * Component.
 */

const SingleCocktail = () => {
  
  const { id } = useParams()
  const [loading, setLoading ] = React.useState(false)
  const [ cocktail, setCocktail ] = React.useState(null)
  
  React.useEffect(() => {
    
    setLoading(true);
    
    async function getCocktail(){
    
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json()
        /**also i can checkout the prompted value 
         * click in 'detail'
         */
        console.log(data)

        /**here i verify 'data.drinks' existence */
        if (data.drinks) {
          /**here i start to destructure value by value
           * into a friendly 'alias'
           */
          const {
            strDrink:name,
            strDrinkThumb:image,
            strAlcoholic:info,
            strCategory:category,
            strGlass:glass,
            strInstructions:instructions,
            strIngredients1,
            strIngredients2,
            strIngredients3,
            strIngredients4,
            strIngredients5,
          } = data.drinks[0]
          
          /**here i build an array only for ingredients */
          const ingredients = [
            strIngredients1,
            strIngredients2,
            strIngredients3,
            strIngredients4,
            strIngredients5,
          ]

          /**here i build the 'cocktail' object to be
           * use on my front-end
          */
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients
          }
          /**here i set the 'cocktail' to new
           * object previously built
          */
          setCocktail(newCocktail)

        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
        
      }
    }
    getCocktail()
  }, [id])

  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }
  return (
    <div>
      {/**here i get the id */}
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCocktail
