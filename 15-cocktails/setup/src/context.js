import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

/**Cocktails app version 1 - 'context' file - Features:
 * 
 *      -->Building states.
 * 
 *      -->Passing as values to the 'Provider' >' loading', 
 *         'cocktails', 'setSearchTerm'.
 * 
 *      -->Building the API request to get the cocktails
 *         data.
 * 
 * Notes: the states will handle 
 * 
 *        'loading' --> loading spinner.
 * 
 *        'searchTerm' --> SearchForm behavior
 * 
 *        'cocktails' --> will handle the data from the API
 * 
 * cocktails data has not been fullfilled in this version
 */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  /**Building state for loading */
  const [ loading, setLoading ] = useState(true)
  /**Building state for searchTerm*/
  const [searchTerm, setSearchTerm ] = useState('a')
  /**Building state for searchTerm*/
  const [ cocktails, setCocktails ] = useState([])

  /**here i build the API request */
  const fetchDrinks = async () => {
    /**i set loading to true while i get the data */
    setLoading(true)

    /**here i build the try-catch functionality*/
    try {
    /**i fetch the 'url' and 'searchTerm' the last as 
     * criteria*/
    const response = await fetch(`${url}${searchTerm}`)
    const data = await response.json()
    const { drinks } = data;

    /**if 'drinks' exist */  
    if (drinks) {
      /**then i map it */
      const newCocktails = drinks.map((drink) => {
        /**here i destructure the data */
        const { idDrink, strDrink, strDrinkThumb, 
          strAlcoholic, strGlass } = drink;
          
    /**here i shape the 'drinks' data to make it friendly*/
    return { id: idDrink, name: strDrink, 
            image: strDrinkThumb, info: strAlcoholic, 
            glass: strGlass}
     })
     /**i fill 'cocktails' value with 'newCocktails'*/
    setCocktails(newCocktails)
    /**if i wanna checkout i do it on 'CocktailList' 
     * Component render it
    */
   }else{
     setCocktails([])
   }
   setLoading(false)
    } catch (error) {
      console.log(error)
    setLoading(false)
    }
  }

  useEffect(() => {
    fetchDrinks()
  },[searchTerm])

  return (
  <AppContext.Provider 
      value={{
        loading,
        cocktails,
        setSearchTerm
      }}>{children}
  </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
