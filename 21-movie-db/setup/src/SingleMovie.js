import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

/**Movie-db app version 2 - 'SingleMovie' Component - Features: 
 * 
 *      --> Building States.
 *      
 *      --> Building 'fetchMovie' request.
 * 
 *      --> Building the useEffect to invoke 'fetchMovie'
 *          based in the 'API_ENDPOINT' and 'id'.
 * 
 *      --> Conditionally rendering 'loding' and 'error' state.
 *  
 *      --> Rendering the props from the 'API'.
 * 
 * Note: This version is gonna be refactor because 'fetchMovie'
 * and 'fetcMovies' from context js are very similar
 * 
 * */

const SingleMovie = () => {
  /**here i build the states */
  const { id } = useParams();
  console.log(id)
  const [ movie, setMovie ] = useState({});
  const [ isLoading, setLoading ] = useState(true)
  const [ error, setError ] = useState({show: false, msg:''});

  /**here i build the fetch request for the movie */
  const fetchMovie = async (url) => {

    const response = await fetch(url)
    const data = await response.json();
    console.log(data)

    if (data.Response === 'False') {
      setError({show:true, msg: data.Error })
      setLoading(false)
    }else{
      setMovie(data)
      setLoading(false)
    }
  }

  /**Using 'useEffect' i invoke 'fetchMovie' */
  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  },[id])

  /**Renring conditionallly 'isLoading' and 'error.show'*/
  if (isLoading) {
    return <div className='loading'/>
  }

  if (error.show) {
    return(
    <div className='page-error'>
      <h1>{error.msg}</h1>
      <Link to='/' className='btn'>back to movies</Link>
    </div>)
  }

  /**'destructuring' and 'formmating' API props in friendly 
   * names */
  const { 
      Poster: poster, 
      Tittle: 
      title, 
      Plot: plot, 
      Year: year} = movie;
      
/**Here i render 'SingleMovie' props */
  return(
    <>
      <section className='single-movie'>
        <img src={poster} alt={title}/>
        <div className='single-movie-info'>
          <h2>{title}</h2>
          <p>{plot}</p>
          <h4>{year}</h4>
          <Link to='/' className='btn'>
            back to movies
          </Link>
        </div>
      </section>
    </>
  )
}

export default SingleMovie
