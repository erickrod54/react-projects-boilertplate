import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

/**
 * SideBar-Modal app version 2 - Modal Component - Features:
 *          ---->importing 'useGlobalContext' to get props
 *               and functionality.
 *          ----> getting isModalOpen state.
 *          ---->getting closeModal functionality
 * 
 */

const Modal = () => {
  /**here i destructure the state passed throught, and the 
   * closeModal 'functionality'
   */
  const { isModalOpen, closeModal } = useGlobalContext()

  return(
    <>
      {/** <h2>Modal</h2> */}
      {/** here i use ternary operator to open the modal
       * using the isModalOpen state to toogle the style 
       * to show or hide the 'Modal'
      */}
    <div className={`${isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'}`}> 
      <div className='modal-container'>
        <h3>modal container</h3>
        {/**here i invoke closeModal */}
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
    </>
  )
}

export default Modal
