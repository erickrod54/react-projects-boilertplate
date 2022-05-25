import React, { useState, useContext, useEffect } from 'react'
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

console.log(API_ENDPOINT)

const AppContext = React.createContext()

/**Movie-db app version 2 - 'context' js file - Features: 
 * 
 *      --> Building states.
 *      
 *      -->Building 'fetchMovies' request.
 * 
 *      -->Building 'useEffect' to invoke 'fetchMovies' 
 *         request
 * 
 *      -->Setting the 'query' value as dependency array
 *        -doing this will be re-render movie resuts
 *         dinamicly- 
 * 
 *      --> Getting  'isLoading', 'error', 'movies', 
 *         'query', 'setQuery' throught the 
 *          AppContext.Provider.
 * 
 * Note: Now being doing this i can use these values provided
 * everywhere where i want in the app
 * 
 * */

const AppProvider = ({ children }) => {

  /**here i build the states */
  const [ isLoading, setisLoading ] = useState(true);
  const [ error, setError ] = useState({ show: false, msg: ''});
  const [ movies, setMovies ] = useState([]);
  const [ query, setQuery ] = useState('avengers')

  /**here i build 'fetch movie request' i pass the url
   * as the 'e' event*/
  const fetchMovies = async (url) => {
    setisLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json();
      //console.log(data)

      /**checking the console log of 'data' the props
       * and props 'values' are capitalize that why i
       * compare with capitalize value and use capitalize
       * props*/
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError({show:false, msg:''})
      }else{
        setError({ show:true, msg: data.Error })
      }
      setisLoading(false)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    /**here i pass the 'url' with a default search query set*/
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  }, [query])
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
