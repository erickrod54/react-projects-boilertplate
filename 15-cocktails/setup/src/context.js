import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

/**Cocktails app version 7 - 'context' file - Features:
 * 
 *      -->Setting up 'callback' function to fix
 *        an infinite loop warning.
 * 
 * Note: there is an infinite loop warning when in this
 * version in order to fix it i add callback function
 * hook
 * 
 * to test porpuses i can remove it and checkout the
 * javaConsole.
 * 
 * as the dependencies array i use 'searchTerm' and 
 * 'fetchDrinks' so the fetch will be called just
 * when detect changes on those features
 */

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
 
  const [ loading, setLoading ] = useState(true);
  const [searchTerm, setSearchTerm ] = useState('a');
  const [ cocktails, setCocktails ] = useState([]);

  
  const fetchDrinks = useCallback(async () => {
    
    setLoading(true)
    try {
    const response = await fetch(`${url}${searchTerm}`)
    const data = await response.json()
    const { drinks } = data;

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
  }, [searchTerm])

  useEffect(() => {
    fetchDrinks()
  },[searchTerm, fetchDrinks])

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
