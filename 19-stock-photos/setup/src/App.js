import React, { useState, useEffect, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 12 - 'App' js file - 
 * Features: ( continue fix for version 11 )
 * 
 *      --> Refactoring 'current scroll code'.
 *    
 *      --> Setting up a third 'useEffect' for
 *          fixing 'current scroll code'
 * 
 *      --> Building state to set new images.
 * 
 * Note: on the previous versions the since i run
 * the initial render in the useEffect 'loading'
 * state will be always false.
 * 
 * */
function App() {

  /**Here i build the states */
  const [loading, setLoading ] = useState(false);
  const [photos, setPhotos ] = useState([]);
  /**here i set page to 1 as part of refactoring
   * to avoid duplicate images */
  const [ page, setPage ] = useState(1)
  const mounted = useRef(false)
  /**this state will be use to set new images */
  const [ newImages, setNewImages ] = useState(false)

  /**here is the state to set a query criteria */
  const [ query, setQuery ] = useState('')


  /**here i build 'fetchImages' */
  const fetchImages = async() => {
        setLoading(true)
        let url;
        const urlPage = `&page=${page}`
        const urlQuery = `&query=${query}`
        
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
          /**i place 'setNewImages' here to false*/
          /**this is very important cause will turn down
           * before the loading so won't fetch multiple
           * times causing a re- render*/
          setNewImages(false)
          setLoading(false);

        } catch (error) {
          setNewImages(false)
          setLoading(false)
        }
  }

  useEffect(() => {
    fetchImages()
    // eslint-disable-next-line 
  },[page])

  useEffect(() => {
    /**checking mounted i avoid a re-render using 'useRef' */
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    if (!newImages) return
    if (loading) return
    /**here i set the infinite scroll */
    setPage((oldPage) => oldPage + 1)
    /**i trigger depending on new images */
  }, [newImages])

  /**in this 'event' variable i set the same condition
   * to detect the bottom of the page*/
  const event = () => {
    if (window.innerHeight + window.scrollY >= 
      document.body.scrollHeight -2 ) {
      setNewImages(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', event)
    return () => window.removeEventListener('scroll', event)
  }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault();
    /**checking on the query fetchs only when i type 
     * something and hit submit */
    if(!query) return;
    /**this condition will ftech me the match images
     * even if the page is '1'*/
    if (page === 1) {
      fetchImages()
      return;
    }
    /**if not, will set to page '1' */
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
