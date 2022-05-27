import { useState, useEffect } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

/**Movie-db app version 3 - 'useFetch' js file - Features: 
 * 
 *      -->Building 'useFetch' custom hook.
 * 
 *      -->Building states.
 * 
 *      -->Building 'fetchMovies' request for 'data'
 * 
 * Note: Now being doing this i can use these values provided
 * everywhere where i want in the app
 * 
 * */

/**setting 'urlParams' as a prop, i can use either context
 * or SingleMovie*/
const useFetch = (urlParams) => {

      /**here i build the states */
     const [ isLoading, setisLoading ] = useState(true);
     const [ error, setError ] = useState({ show: false, msg: ''});
     const [ data, setData ] = useState(null);

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
        /**the short-circuit 'or' is to return the data
         * for the 'SingleMovie' case 'data.Search' is for all
         * the movies */
        setData(data.Search || data);
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
    /**here i have two search, one for all the movies and
     * one for 'id', 'urlParams' will receive a 'query'
     * for all the movies and for 'id' dynamicly*/
    fetchMovies(`${API_ENDPOINT}${urlParams}`)
  }, [urlParams])

    return {isLoading, error, data }
}

export default useFetch;