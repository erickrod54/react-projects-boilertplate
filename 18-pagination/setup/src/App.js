import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

/**Pagination app version 3 - 'App' js file - Features:
 * 
 *      --> Building 'prevPage' feature.
 * 
 *      --> Building 'nextPage' feature.
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

  /**here i build 'prevPage' function*/
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0 ) {
        prevPage = data.length - 1;
      }
      return prevPage;
    })
  }

  /**here i build 'nextPage' function*/
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    })
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
                {/**here i place prevPage button */}
                <button className='prev-btn' onClick={prevPage}>
                  prev
                </button>
                {data.map((item, index) => {
                  return <button 
                  key={index} 
                  className={`page-btn ${index === page ? 
                            'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                  >
                   {index + 1 }
                  </button>
                })}
                {/**here i place nextPage button */}
                <button className='next-btn' onClick={nextPage}>
                  next
                </button>
              </div>
          }
        </section>
      </main>
    </>
  )
}

export default App
