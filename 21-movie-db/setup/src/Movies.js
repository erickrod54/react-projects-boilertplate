import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

  /**Movie-db app version 2 - 'Movies' Component - Features: 
 * 
 *      --> Destructuring 'movies', 'isLoading' using 
 *          the 'useGlobal' context hook.
 * 
 *      --> Settig up 'loading' state to display the 
 *          'loading' state.
 * 
 *      --> Mapping the 'movies' data and render it.
 * 
 * Note: Now being doing this i can use these values provided
 * everywhere where i want in the app
 * 
 * 'object not iterable' is because instead of  destruturing
 * it i do it as an arrays and thats wrong, 'usingGlobalContext'
 * always 'destructure'
 * */

const Movies = () => {

  /**Here i destructure 'movies', and 'isLoading' */
  const { movies, isLoading } = useGlobalContext();

  /**here  i set the isLoading */
  if (isLoading) {
      return <div className='loading'/>
  }
  /**here i map the movie data */
  return(
    <>
      <section className='movies'>
        {movies.map((movie)=>{
          //console.log(movie)
          /**here i convert the prop to friendly format */
          const { imdbID: id, 
            Poster: poster, 
            Title: title, 
            Year: year } = movie;

          /**here i render the movie props */
          return(
            <>
              <Link to={`/movies/${id}`} key={id} className='movie'>
                <article>
                  <img src={poster === 'N/A' ? url : poster} alt={title}/>
                  <div className='movie-info'>
                    <h4 className='title'>{title}</h4>
                    <p>{year}</p>
                  </div>
                </article>
              </Link>

            </>
            )
        })}
      </section>
    </>
  )
}

export default Movies
