import React from 'react'
import { useGlobalContext } from './context'

/**Hacker-news app version 8 - 'Buttons' Component - Features: 
 * 
 *      -->Building pagination for stories.
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

         <p>{page + 1} of {nbPages}</p>

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
