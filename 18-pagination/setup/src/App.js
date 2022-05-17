import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

/**Pagination app version 1 - 'App' js file - Features:
 * 
 *      --> Importing 'useFetch()' hook and destructuring
 *          'loading', and  'data'.
 * 
 *      --> Building section for the title and style in it.
 * 
 *      -->Building section to contain the 'followers'
 * 
 *      --> Mapping 'Follower' Component by follower 'id'.
 * 
 * Note: 'useFetch()' hook fetch already the data from
 * the github API.
 * 
 */
function App() {

  const {loading, data } = useFetch();
  /**i test the data fetch */
  console.log('log from App js', data)

  return(
    <>
      <main>
        <div className='section-title'>
          {/**Based in 'loading' existence i condionally render
 *          the title 'Pagination App' */}
          <h1>{loading ? '...loading' : 'Pagination App'}</h1>
          <div className='underline'/>
        </div>

        <section className='followers'>
          <div className='container'>
            {data.map((follower) => {
              return <Follower key={follower.id} {...follower}/>
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
