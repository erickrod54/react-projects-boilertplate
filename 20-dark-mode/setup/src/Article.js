import React from 'react'
import moment from 'moment'

/**Dark-mode app version 1- 'Article' Component - Features: 
 * 
 *      -->Destructuring data props to be use in Article
 *        Component.
 * 
 *      -->Implementing 'moment' library to give format
 *        to the date.
 * 
 * Note: moment library is was created in 2011 in order
 * to make easy the 'date' formmatting, now there is 
 * another alternatives to 'moment js'
 * 
 * The current JavaScript object to handle the dates
 * is 'Date' object, and there is a proposal to replace
 * it, the project's name is 'Temporal'
 * 
 * reference --> https://momentjs.com/
 * 
 * */

/**Here i destructure the 'data' props to build 
 * the articles*/
const Article = ({ title, snippet, date, length }) => {
  console.log(date)
  return(
    <>
      <article className='post'>
        <h2>{title}</h2>
        <div className='post-info'>
          {/**Here i implement 'moment' to give
           * format to the 'date' prop*/}
          <span>{moment(date).format('MMMM dddd Do, YYYY')}</span>
          <span>{length} min read</span>
        </div>
        <p>{snippet}</p>
      </article>
    </>
  )
}

export default Article
