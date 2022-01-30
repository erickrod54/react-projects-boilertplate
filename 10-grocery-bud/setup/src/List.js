import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

/**Grocery App version  1 - 'List' Component, 
 * Features:
 * 
 *    ---> i drill the prop 'items' to get the list
 *         of the newItem.
 * 
 *    ---> i map 'items' to render every 'item'
 *         with fontAwesome to edit and delete
 *         ( functionality not set yet in 
 *         this version).
*/
const List = ({items}) => {
  return (
    <>
      {/**<h2>list component</h2> */}

      <div className='grocery-list'>
        {/**here i map the 'items' in every 'item' */}
        {items.map((item) => {
          /**i destructure in 'id' and 'title' every 
           * item */
          const {id, title} = item;
          /**i return the 'JSX' */
          return (
            /**this article is the container for 
             * every 'item'
             */
            <article 
              /**the 'id' */
              key={id} 
              className='grocery-item'>
                {/**'title' is the 'name' for 
                 * every item*/}
                <p className='title'>{title}</p>
                {/**this is the container for 
                 * the buttons*/}
                <div className='btn-container'>
                  <button 
                      type='button' 
                      className='edit-btn'>
                    <FaEdit />
                  </button>
                  <button 
                      type='button' 
                      className='delete-btn'>
                    <FaTrash />
                  </button>
                </div>
            </article>          
          )
        })}
      </div>
    </>
    
  )
}

export default List
