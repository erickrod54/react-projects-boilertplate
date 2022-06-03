import React from 'react'
import { useGlobalContext } from './context'

/**Hacker-news app version 7 - 'Buttons' Component - Features: 
 * 
 *      -->Building 'prev' and 'next' button.
 *          
 * Note: the references for the styles in the global stylesheet
 * 
 * */

const Buttons = () => {
  /**here i destructure the values to make 
   * pagination functionality */
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()
  
  return(
    /**button container */
    <div className='btn-container'>
      {/**this is the 'Prev' button */}
      <button 
        disabled={isLoading} 
        onClick={() => handlePage('dec')}>
          prev
        </button>

        <p>some values</p>

        {/**this is the 'Next' button */}  
        <button 
        disabled={isLoading} 
        onClick={() => handlePage('inc')}>
          next
        </button>
    </div>
  )
}

export default Buttons
