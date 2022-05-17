import { useState, useEffect } from 'react'
import paginate from './utils'
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

/**Pagination app version 1 - 'useFetch' js file - Features:
 * 
 *      --> Piping 'data' from the custom Fetch to 'paginate'
 *          function in utils.
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
    paginate(data)
    setData(data)
    setLoading(false)
  }

  useEffect(() => {
    getProducts()
  }, [])
  return { loading, data }
}
