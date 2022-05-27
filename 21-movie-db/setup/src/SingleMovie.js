import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useFetch from './useFetch'

/**Movie-db app version 3 - 'SingleMovie' Component - Features: 
 * 
 *        --> Importing 'useFetch' custom hook.
 * 
 *      --> Destructuring props 'isLoding', 'error', 
 *         'data:movie'.
 * 
 *      --> Getting as 'urlParams' `&i=${id}`) for
 *          'useFetch'.
 * 
 * Note: This file i format data as 'movie' because id for
 * a single movie
 * 
 * */

const SingleMovie = () => {
  /**here i build the states */
  const { id } = useParams();
  console.log(id)

  /**Here i destructure an reformat data > movie */
  /**i set the 'UrlParams' to get the movie by 'id' */
  const {isLoading, error, data:movie } = useFetch(`&i=${id}`)

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
