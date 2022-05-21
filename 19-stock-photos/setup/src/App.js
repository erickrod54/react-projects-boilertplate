import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 7 - 'App' js file - 
 * Features:
 * 
 *      -->Building 'urlPage' to pass 'page' value as param.
 * 
 *      --> Building 'page' state to set a value to list
 *          photos.
 * 
 *      --> Setting 'page' as 'fecthImage' > 'useEffect'
 *          to fetch when 'page' state changes.
 * 
 *      --> Setting 'setPhoto' functionality for 'oldPhotos'
 *          and the new data.
 * 
 *      --> By the end of scrolling setting functionality
 *          for 'setPage' increment it by '1'. 
 * 
 * Note: In this version a i build in the link a param to
 * list the 'images' 
 * 
 *      -->page	Page number to retrieve. 
 *        (Optional; default: 1) i set it in 3
 * 
 * reference --> https://unsplash.com/documentation#list-photos
 * */
function App() {

  /**Here i build the states */
  const [loading, setLoading ] = useState(false);
  const [photos, setPhotos ] = useState([]);
  const [ page, setPage ] = useState(1)

  /**here i build 'fetchImages' */
  const fetchImages = async() => {
        setLoading(true)
        let url;
        const urlPage = `&page=${page}`
        url = `${mainUrl}${clientID}${urlPage}`

        try {
          const response = await fetch(url);
          /**here must await 'response.json();' */
          const data = await response.json();

          /**here i refactor setPhotos to get the photos
           * that i already have, and the 'data' with the
           * new ones.*/
          setPhotos((oldPhotos) => {
            return [...oldPhotos, ...data]
          });
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
    /**here i set 'page' as dependency*/
  },[page])

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {

      if (!loading && window.innerHeight +
         window.scrollY >= document.body.scrollHeight - 2) {
          /**by the end of scrolling i fetch again the data
           * --so i'll get new images
           */
          setPage((oldPage) => {
            return oldPage + 1;
          })
      }
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
