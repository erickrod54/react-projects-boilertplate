import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

/**Stock-photos app version 1 - 'App' js file - 
 * Features:
 * 
 *      --> Building states for 'loading' and 'photos'.
 * 
 *      --> Building 'useEffect' to invoke 'fetchImages'.
 * 
 *      --> Building 'fetchImages' to get the data
 *          from the API.
 * 
 * Note: there is an issue when i use 'mainUrl'
 * as string template to construct the 'url'
 * pending to test it
 * 
 * */
function App() {

  /**Here i build the states */
  const [loading, setLoading ] = useState(false);
  const [photos, setPhotos ] = useState([]);

  /**here i build 'fetchImages' */
  const fetchImages = async() => {
        setLoading(true)
        let url;
        url = 'https://api.unsplash.com/photos/?client_id=ORS8bvDrLdlvnckQexhtFqRY-tGsxtDcx-iaICjygOk'
        try {
          const response = await fetch(url);
          const data = response.json();
          /**i prompted to test that i get the data */
          console.log(data)
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
  return <h2>stock photos starter</h2>
}

export default App
