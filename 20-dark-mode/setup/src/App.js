import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'

/**Dark-mode app version 2- 'App' js file - Features: 
 * 
 *      -->Building state for 'theme' value.
 * 
 *      -->Building 'toggleTheme' feature.
 * 
 *      -->Building 'useEffect' to set a 'theme'
 *         value as default.
 * 
 * Note: in order to apply a t'theme' as default in
 * the useEffect i implement:
 * 
 * -----'document.documentElement.className = theme'
 * 
 * the dependency to trigger the useEffect is the 
 * existence of a theme -for this case light-theme-
 * 
 * the names of the classes 'light-theme' and 'dark-theme'
 * must match exactly, for the reason that are used by
 * 'useState' and 'documentElement' to set values to the
 * entire page
 * */
function App() {
  /**here i build the state for the 'theme' */
  const [ theme, setTheme ] = useState('light-theme');

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
