import React from 'react'
import { useGlobalContext } from './context'

/**Quiz app version 4 - 'Modal' js file - Features: 
 * 
 *      --> Destructuring functionality and data
 *          on useGlobalContext in order to start
 *          to render on the modal.
 * 
 *       --> Conditionally rendering styles to 
 *           display the modal window.
 * 
 * 
 * Note: 'App' js and 'context' js files are in charge 
 * of modal functionality, and 'Modal' Component to render
 * the 'props', calculate percentage of correct answers.
 * */

const Modal = () => {

  /**here i destructure the props */
  const { isModalOpen, 
          closeModal, 
          correct, 
          questions } = useGlobalContext()
  
  return(
    <>
    {/**here i conditionally render class style
     * to show the modal container*/}
      <div className={`${isModalOpen ? 
        ('modal-container isOpen ') : 
        ('modal-container')}`}>

    {/**here i render the 'props' for the modal content*/}
        <div className='modal-content'>
          <h2>congrats!</h2>
          <p>You answered: {((correct / questions.length) * 100).toFixed(0) } % right!!</p>
          <button 
              className='close-btn' 
              onClick={closeModal}>
            play again
          </button>
        </div>

      </div>
    </>
  )
}

export default Modal
