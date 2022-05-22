import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 9 - 'App' js file - 
 * Features:
 * 
 *      --> Fixing the 'results' to wiped out the 
 *          old images results.
 * 
 * Note:  changing the page state to be different value 
 * from the query and setPage will fix the results.
 * 
 * */
function App() {

  /**Here i build the states */
  const [loading, setLoading ] = useState(false);
  const [photos, setPhotos ] = useState([]);
  /**here i set page to 0 */
  const [ page, setPage ] = useState(0)

  /**here is the state to set a query criteria */
  const [ query, setQuery ] = useState('')


  /**here i build 'fetchImages' */
  const fetchImages = async() => {
        setLoading(true)
        let url;
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`
        
        /**here i switch between 'url' based on 'query'*/
        if (query) {
          url = `${searchUrl}${clientID}${urlPage}${urlQuery}`
        }else{
          url = `${mainUrl}${clientID}${urlPage}`
        }

        try {
          const response = await fetch(url);
          /**here must await 'response.json();' */
          const data = await response.json();
          
          setPhotos((oldPhotos) => {
            /**as i made the 'query and page equal' to 1 
             * here will show me the results*/
            if (query && page === 1) {
              return data.results
            }else if (query) {
              return [...oldPhotos, ...data.results]
            }else{
              return [...oldPhotos, ...data]
            }
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

  /**here is the handle submit for the search feature */
  const handleSubmit = (e) => {
    e.preventDefault();
    /**and the handle submit sould match with
     * the search condition*/
    setPage(1)
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
              className='form-input'
              /**i pass the query value here */
              value={query}
              /**i set the functionality to get 'query' and
               * set it from the input*/
              onChange={(e) => setQuery(e.target.value)}></input>
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
