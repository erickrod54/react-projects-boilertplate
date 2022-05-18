import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

/**Pagination app version 2 - 'useFetch' js file - Features:
 * 
 *      --> Piping 'paginate' throught 'setData' to set
 *          the 'newFollowers' array per page.
 * 
 * Note: 'useFetch()' hook fetch already the data from
 * the github API.
 * 
 */
export const useFetch = () => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getProducts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    
    setData(paginate(data))
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
