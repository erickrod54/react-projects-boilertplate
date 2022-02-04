import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

/**Grocery App version  4 - 'List' Component, 
 * Features:
 * 
 *    ---> i get 'editItem' feature drilled from 
 *         App js, and i trigger the edit
          'onClick' on 'FaTEdit' icon
 * 
 * */
const List = ({items, removeItem, editItem }) => {
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
                      className='edit-btn'
                      /**here i trigger the edit
                       * 'onClick' on 'FaTEdit' icon*/  
                      onClick={() => editItem(id)}>
                    <FaEdit />
                  </button>
                  <button 
                      type='button' 
                      className='delete-btn'
                      /**here i trigger the delete
                       * 'onClick' on 'FaTrash' icon*/
                      onClick={() => removeItem(id)}>
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
