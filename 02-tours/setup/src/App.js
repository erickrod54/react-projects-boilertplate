import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

/**---Tour App --> App js version 3 feature to
 *  remove a Tour using prop drilling from the 
 *  place where the state lives (props) to the 
 *  place where the component trigger the action
 *  (Tour):
 *  
 *  the prop drilling will use the component 'Tour'
 *  to pass the action 'removeTour':
 *
 *     
 *    App.js > Tours > Tour
 * 
 * this version 3 has a new 'conditional render'
 * to notifify when there no more tours, and a 
 * button to request again the tours data
*/

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  /**Here i build the removeTour feature, because
   * here lives tours data, and i'll trigger the 
   * feature from Tour file
   * 
   *  --prop drilling will be:
   * 
   *    App.js > Tours > Tour
  */
  const removeTour = (id) => {
    const newTours = 
    tours.filter((tour) => tour.id !== id);

    setTours(newTours)
  }

  const fetchTours = async () => {
    
    setLoading(true)
    
    try {
      const response = await fetch(url);
      
      const tours = await response.json();
      
      setLoading(false)
      setTours(tours)
      console.log(tours)
      
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }

/**Here i add a 'conditional rendering' to render
 * a notice when theres not tours left, and a button
 * to request again the tours data
*/
  if (tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button 
            className='btn'
            onClick={ () => fetchTours()}>
            Request Tours
          </button>
        </div>
      </main>
    )
  }

  return (
  <>
     <main>
     <h2>Tours Project Setup</h2>
     {/**Here i pass the removeTour feature as prop
      * ---this technique is called prop drilling---
     */}
      <Tours tours={tours} removeTour={removeTour}/>
      
     </main>
  </>  
  )
}

export default App
