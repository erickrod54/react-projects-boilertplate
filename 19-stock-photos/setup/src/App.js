import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 3 - 'App' js file - 
 * Features:
 * 
 *      --> Setting 'setPhotos(data)' to fill
 *          'photos' with the 'data'
 * 
 *      --> Building a basic form to a 'search'
 *          feature.
 * 
 *      --> Building a basic form to return
 *          'data'.
 * 
 *      --> Building a 'handleSubmit' function
 *          to handle 'search' feature return.
 * 
 * Note: this case in order to display images
 *  need to set them, and set 'loading' to 'false'
 * 
 * by this version 'handleSubmit' will return
 * the prevent default in order to test that is 
 * working
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
          const data = response.json();
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
      </main>
    </>
  )
}

export default App
