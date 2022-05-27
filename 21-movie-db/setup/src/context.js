import React, { useState, useContext } from 'react'
// make sure to use https

import useFetch from './useFetch'

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
console.log(API_ENDPOINT)

const AppContext = React.createContext()

/**Movie-db app version 3 - 'context' js file - Features: 
 * 
 *      --> Importing 'useFetch' custom hook.
 * 
 *      --> Destructuring props 'isLoding', 'error', 
 *         'data:movies'.
 * 
 *      --> Getting as 'urlParams' `&s=${query}` for
 *          'useFetch'.
 * 
 * Note: Now being doing this i can use these values provided
 * everywhere where i want in the app
 * 
 * */

const AppProvider = ({ children }) => {
  const [ query, setQuery ] = useState('avengers')
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);


  return <AppContext.Provider value={{
    isLoading, 
    error, 
    movies, 
    query, 
    setQuery}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
