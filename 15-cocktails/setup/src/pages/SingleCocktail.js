import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

/**Cocktails app version 7 - 'SingleCocktail' Component - 
 * Features:
 * 
 *      --> Rendering 'newCocktail' object data
 * 
 *      --> Fixing a little bug typo instead of 'strIngredients1' 
 *          for 'strIngredient1' and so on with the rest of the
 *          ingredient array.
 * 
 *      --> Mapping 'ingredients' array in order to render it
 *          for each 'SingleCocktail'.
 * 
 * Notes: This object is built to get back the data in a
 * friendly way
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
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
          } = data.drinks[0]
          
          /**here i build an array only for ingredients */
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5
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

  /**Here i handle the loading and just in case if an
   * error occurs
   */
  if (loading) {
    return <Loading />
  }

  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  }

/**here i destructure again because the data is in 
 * 'cocktail' state */
  const {
      name, 
      image, 
      category, 
      info, 
      glass, 
      instructions, 
      ingredients } = cocktail;

  return (
    /**here i start to render prop by prop the 'cocktail' */
    <section className='section cocktails-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{name}</h2>
      <div className='drink'>
        <img src={image} alt={name} />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name:</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>category:</span>
            {category}
          </p>
          <p>
            <span className='drink-data'>info:</span>
            {info}
          </p>
          <p>
            <span className='drink-data'>glass:</span>
            {glass}
          </p>
          <p>
            <span className='drink-data'>instructions:</span>
            {instructions}
          </p>
          <p>
            <span className='drink-data'>ingredients:</span>
            {/**here i map the ingredients array*/}
            {ingredients.map((item, index) => {
              console.log(ingredients)
              return item ? <span key={index}>{item}</span> : null
            })}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
