import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

/**Stock-photos app version 2 - 'App' js file - 
 * Features:
 * 
 *      --> Building 'url' using the 'mainUrl'.
 * 
 *      --> Building 'clientID' to get the access
 *          key previously set on an '.env' file.
 * 
 * Note: When i am setting a .env variable, i have to 
 * restart the server in order to get it working.
 * 
 * Setting a 'key' as an enviroment variable is a
 * good practice because can make applications more
 * secure.
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
        url = `${mainUrl}${clientID}`

        /**
         * 
         'https://api.unsplash.com/photos/?client_id=ORS8bvDrLdlvnckQexhtFqRY-tGsxtDcx-iaICjygOk'
         */
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
