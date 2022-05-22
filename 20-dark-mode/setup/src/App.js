import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

/**Dark-mode app version 1- 'App' js file - Features: 
 * 
 *      -->Building nav section for the 'title' -h1- and
 *        the button 'toogle'.
 * 
 *      -->Building a section to map the 'data' on 
 *         'Article' Component.
 * 
 * Note:This file will hold the two main sections. 
 * 
 * */
function App() {
  return(
    <>
    {/**here i place the nav section*/}
      <main>
        <nav>
          <div className='nav-center'>
            <h1>overreacted</h1>
            <button className='btn'>toggle</button>
          </div>
        </nav>
        {/**here i map the data on the 'Article' Component */}
        <section className='articles'>
          {data.map((article) => {
            return <Article key={article.id} {...article}/>
          })}
        </section>
      </main>
    </>
  )
}

export default App
