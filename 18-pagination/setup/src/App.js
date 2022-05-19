import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

/**Pagination app version 1 - 'App' js file - Features:
 * 
 *      --> Building states for 'page', and for 'followers'.
 * 
 *      --> Implementing 'useEffect' to set the data per
 *          'page' depending on 'loading'.
 * 
 */
function App() {

  const {loading, data } = useFetch();
  /**this is the state for 'page'*/
  const [ page, setPage ] = useState(0);

  /**this is the state for 'followers'
   * that are gonna display in each page*/
  const [ followers, setFollowers ] = useState([])
  /**i test the data fetch */
  console.log('log from App js for new data-->', data)

  useEffect(() => {
    /**if 'loading' will return*/
    if (loading) return 
    /**and i 'setFollowers' as the data with index 'page'
     * -this way the data change dinamicly-
    */
    setFollowers(data[page])
    /**the effect depending on loading */
  }, [loading])

  return(
    <>
      <main>
        <div className='section-title'>
          {/**Based in 'loading' existence i condionally render
            * the title 'Pagination App' */}
          <h1>{loading ? '...loading' : 'Pagination App'}</h1>
          <div className='underline'/>
        </div>

        <section className='followers'>
          <div className='container'>
            {followers.map((follower) => {
              return <Follower key={follower.id} {...follower}/>
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
