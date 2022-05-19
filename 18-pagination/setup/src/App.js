import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

/**Pagination app version 2 - 'App' js file - Features:
 * 
 *      --> Building buttons to switch between 
 *          pages.
 * 
 *      -->Building 'handlePage' to set a new
 *         page.
 *  
 *      -->Setting 'page' in 'useEffect' 
 *        dependency array in order to 
 *        make the buttons render the new
 *        pages.
 * 
 *      -->Setting the active Style Class
 *        to create a better user 
 *        experience.
 * 
 * Note: This version has the buttons container 
 * to create the pagination*/
function App() {

  const {loading, data } = useFetch();
  const [ page, setPage ] = useState(0);

  const [ followers, setFollowers ] = useState([])

  console.log('log from App js for new data-->', data)

  useEffect(() => {

    if (loading) return 
    setFollowers(data[page])
    /**here i set index also as dependency
     *  to trigger the useEffect */
  }, [loading, page])

  /**Here i build 'handlePage' i target 'index'
   * in order to paginate */
  const handlePage = (index) => {
    /**i set page by 'index' 
     * -every array set as a unique index
     * -this way i access them*/
    setPage(index)
  }

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
          {/**here i build the container and render
           * conditionally of the not 'loading' state
           */}
          {!loading &&
            <div 
              className='btn-container'>
                {data.map((item, index) => {
                  return <button 
                  key={index} 
                  /**here i set the active class */
                  className={`page-btn ${index === page ? 
                            'active-btn' : null}`}
                  /**i trigger handle page targeting index */
                  onClick={() => handlePage(index)}
                  >
                   {index + 1 }
                  </button>
                })}
              </div>
          }
        </section>
      </main>
    </>
  )
}

export default App
