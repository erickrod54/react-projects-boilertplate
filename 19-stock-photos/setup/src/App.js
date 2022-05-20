import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 4 - 'App' js file - 
 * Features:
 * 
 *      --> Displaying 'image' from the API.
 * 
 *      --> Setting 'loading' after to images map the 
 *         'images' by scrolling -related user experience-
 * 
 * Note: fixing tiny bug in 'data' variable
 * must await in order to be mapped.
 * */
function App() {

  /**Here i build the states */
  const [loading, setLoading ] = useState(false);
  const [photos, setPhotos ] = useState([]);

  /**here i build 'fetchImages' */
  const fetchImages = async() => {
        setLoading(true)
        let url;
        url = `${mainUrl}${clientID}`

        try {
          const response = await fetch(url);
          /**here must await 'response.json();' */
          const data = await response.json();
          /**here i set 'photo' and 'loading' */
          setPhotos(data);
          setLoading(false);

        } catch (error) {
          setLoading(false)
          console.log(error)
        }
  }
  /**here i Build 'useEffect' to invoke 
   * fetchImages*/
  useEffect(() => {
    fetchImages()
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello it works :) ')
  }

  return(
    <>
      <main>
        <section className='search'>
          {/**here i build the basic form for the 'search' */}
          <form className='search-form'>
            <input 
              type='text' 
              placeholder='search' 
              className='form-input'></input>
              <button 
                type='submit' 
                className='submit-btn' 
                onClick={handleSubmit}>
                  <FaSearch />
                </button>
          </form>
        </section>
        <section className='photos'>
          {/**here i build the basic form to map the 'data' from the api */}
          <div className='photos-center'>
            {photos.map((image) => {
              console.log(image)
              return <Photo key={image.id} {...image}/>
            })}
          </div>
          {/**i set loading after to images map the 'images' 
           * by scrolling -related user experience-*/}
          { loading && <h2 className='loading'>loading ...</h2>}
        </section>
      </main>
    </>
  )
}

export default App
