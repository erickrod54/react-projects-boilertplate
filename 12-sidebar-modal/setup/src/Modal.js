import React from 'react'
import { FaTimes } from 'react-icons/fa'

/**
 * SideBar-Modal app version 1 - Modal Component - Features:
 *          ----> Placing a 'modal container' and a 
 *                '<FaTimes />' icon to close the modal 
 *          ----> Styling the 'Modal' component:
 * 
 *                -->`modal-overlay` with a `show-modal` toggle
 *                    class -to style and show the modal and 
 *                    its content-. 
 * 
 *                -->`modal conrainer` the style for
 *                    the modal container.
 *  
 *                -->'close-modal-btn' the 
 *                    style for the close modal button
 */

const Modal = () => {
  return(
    <>
      {/** <h2>Modal</h2> */}
    <div className={`modal-overlay `}> 
      <div className='modal-container'>
        <h3>modal container</h3>
        <button className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </div>
    </>
  )
}

export default Modal
