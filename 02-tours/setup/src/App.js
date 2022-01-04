import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  /**i build two states */

  /**first state for loading 
   * -this state switch from true to false- */
  const [loading, setLoading] = useState(true)

  /**second state to 'tours', i'll use this state
   * to fill it with the info from the 'url' in the 
   * api*/
  const [tours, setTours] = useState([])

  /**here i build the api request with a 
   * separate function for Promises to get
   * the data
   */
  const fetchTours = async () => {
    /**setLoading to 'true' because 
     * the app will wait for the data
     */
    setLoading(true)
    
    /** the try catch, will 'try' to get 
     * the data, a response await fecth 
     * the 'url'*/ 
    try {
      const response = await fetch(url);
      /**in 'tours' i keep the data requested
       * in a json object
       */
      const tours = await response.json();
      /**setLoading to 'false' to show the data
       * setTours to 'tours'
      */
      setLoading(false)
      setTours(tours)
      /**here i prompted in the console the
       * object, i can watch it in 
       * 
       *  JavaConsole > Components 
       */
      console.log(tours)
      
    } catch (error) {
      /**if an error occurs 
       * here will prompted the error
       */
      setLoading(false)
      console.log(error)
      
    }
  }
/**in the useEffect i call fetchTours*/
  useEffect(() => {
    fetchTours();
  }, [])

  /**A 'conditional rendering' 
   * if 'loading' is true then 
   * is Loading rendering 
  */
  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }

  return (
  <>
     <main>
     <h2>Tours Project Setup</h2>
     {/**the Tours component render with the 'tours'
      * value -this value is build in 'Tour' state-
      */}
      <Tours tours={tours}/>
     </main>
  </>  
  )
}

export default App
