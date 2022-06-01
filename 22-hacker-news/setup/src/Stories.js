import React from 'react'
import { useGlobalContext } from './context'
/**Hacker-news app version 4 - 'Stories' js file - Features: 
 * 
 *      --> Fixing 'objectID:id' to 'objectID' in order
 *          to work directly the API props. 
 * 
 * Note: In this version the goals are displaying the data
 * from the API in a successful manner, and test 'removeStory'
 * targeting the 'objectID' from each 'story'
 * */

const Stories = () => {
  const { isLoading, hits, removeStory } = useGlobalContext();

  if (isLoading) {
    return <div className='loading'/>
  }
  /**here i start to build the return to display the data*/
  return(
    /**this 'stories' section is the container for each 'story'*/
    <section className='stories'>
      {hits.map((story) => {
        /**i console log the 'story' to copy the props directly
         * and avoid typo issues*/
        console.log(story)
        const { objectID, 
                title, 
                num_comments, 
                url, 
                points, 
                author } = story;
        return(
          /**here i fix 'id' to 'objectID'*/
          <article 
          key={objectID} 
          className='story'>
            
            <h4 className='title'>{title}</h4>
              <p className='info'>
                {points} points by <span>{author} | </span> 
                {num_comments}{''} 
                comments</p>

                <div>
                  {/**target and rel 'props' is to open a new
                   * tab when the user hit the 'url'*/}
                  <a 
                    href={url} 
                    className='read-link'
                    target='_blank'
                    rel="noopener noreferrer">
                    read more
                  </a>
                  {/**here i trigger the removeStory fixing
                   * to 'objectID'*/}
                  <button 
                    className='remove-btn' 
                    onClick={() => removeStory(objectID)}>remove</button>
                </div>
            </article>)
      })}
    </section>
  )
}

export default Stories
