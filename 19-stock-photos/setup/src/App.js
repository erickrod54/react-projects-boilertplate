import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 5 - 'App' js file - 
 * Features:
 * 
 *      --> Building 'useEffect' in order to listen scroll
 *          events.
 * 
 * Note: In order the get this done  i have to first add
 * event listeners to 'scroll event' and get values of 
 * 'scrollHeigt', 'scrollY', 'innerHeight'.
 * 
 * In order to build the 'infinite scroll' i have to
 * make some calculations, that's why i prompted the
 * scroll event listeners, 'innnerHeigt + window.scrollY'
 * must be equal to .body.scrollHeight.
 * 
 * that calculations is the end of the document, so by that
 * point i wanna wetch the images.
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

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      /**this is the 'height' of the window */
      console.log(`innerHeight ${window.innerHeight}`)
      /**this is how much scrolled */
      console.log(`scroll y ${window.scrollY}`)
      /**this is how big is the document 'body'*/
      console.log(`body height ${document.body.scrollHeight}`)
    })
    return () => window.removeEventListener('scroll', event)
  }, [])

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
