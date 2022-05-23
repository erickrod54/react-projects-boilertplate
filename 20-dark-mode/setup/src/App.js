import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

/**Dark-mode app version 3 - 'App' js file - Features: 
 * 
 *      -->Building 'getStorageTheme' function to store
 *         the preference theme by the user.
 * 
 *      -->Setting the store 'theme' every time 'useEffect'
 *         triggers -so the theme will be keep-
 * 
 * Note: This version is about keeping the theme preferences.
 * 
 * */

const getStorageTheme = () => {
    let theme = 'light-theme'
    if (localStorage.getItem('theme')) {

        theme = localStorage.getItem('theme')
    }
    return theme
}

function App() {
  /**here i build the state for the 'theme' */
  const [ theme, setTheme ] = useState(getStorageTheme());

  /**here i build the 'toogle' feature */
  const toggleTheme = () => {
    /**the condition to toggle for one to another */
    if (theme === 'light-theme') {
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  }

  useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme])

  return(
    <>
    {/**here i place the nav section*/}
      <main>
        <nav>
          <div className='nav-center'>
            <h1>overreacted</h1>
            {/**here i trigger the toggle feature*/}
            <button 
                className='btn' 
                onClick={toggleTheme}
                >toggle</button>
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
