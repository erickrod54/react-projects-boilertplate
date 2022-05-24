import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

console.log(API_ENDPOINT)

const AppContext = React.createContext()

/**Movie-db app version 1 - 'context' js file - Features: 
 * 
 *      --> Testing API key.
 * 
 *      --> Testing sample search for random results
 * 
 * Note: the test consist in prompted, and get some movie
 * search with the link that i have already with the API
 * key
 * 
 * Once the API key is set, the server must be restarted, 
 * otherwise i'll get 'undefined' value for the key.
 * 
 *    i use '&s=' to indicate a search
 * 
 *  https://www.omdbapi.com/?apikey=[my key value]&s=avengers
 * 
 *  https://www.omdbapi.com/?apikey=[my key value]&s=batman
 * 
 * */
const AppProvider = ({ children }) => {
  return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
