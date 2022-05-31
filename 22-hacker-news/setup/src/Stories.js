import React from 'react'
import { useGlobalContext } from './context'
/**Hacker-news app version 3 - 'Stories' js file - Features: 
 * 
 *      --> Destructuring 'hits' from 'useGlobalContext'
 *          to get his props.
 * 
 *      --> Destructuring removeStory to implement removing
 *          'story' from the 'UI' - user interface - WONT 
 *          REMOVE FROM THE API-.
 * 
 *      --> Testing that actually and targeting the 'id'
 *          from each 'story' triggering it by 'onClick'
 * 
 * Note: In this version the goals are displaying the data
 * from the API in a successful manner, and test 'removeStory'
 * targeting the 'id' fromeach 'story'
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
         * and avoid typo issues, also i add a friendly alias 
         * for the id*/
        console.log(story)
        const { objectID: id, 
                title, 
                num_comments, 
                url, 
                points, 
                author } = story;
        return(
          /**here i place the props for each story - the 'story'
           * container*/
          <article 
          key={id} 
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
                  {/**here i trigger the removeStory with an
                   * arrow function to trigger it only when i
                   * click on it, i should see the JavaConsole
                   * the test targeting the 'id'*/}
                  <button 
                    className='remove-btn' 
                    onClick={() => removeStory(id)}>remove</button>
                </div>
            </article>)
      })}
    </section>
  )
}

export default Stories
