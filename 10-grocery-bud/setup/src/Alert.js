import React, { useEffect } from 'react'
import List from './List'

/**Grocery App version 3 - Features:
 * 
 *      --> i get the 'list' value from App js to 
 *          'setTimeOut' by the 'list' as an array
 *          of dependencies -to fix the bug where 
 *         the timeOut change by the type of alert-
 * 
 */


/**
 * here i destructure the 'list' value as a prop
 */
const Alert = ({ type, msg, removeAlert, list }) => {

  /**building the cleanup function 
   * -to clean the alert- */
  useEffect(() => {
    const timeout = setTimeout(() =>{
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
    /**here i set the 'list' value as a dependency
     * array*/
  }, [list])

  return (
    <>
      {/**<h2>alert component</h2> */}
      {/**i pass a type and a message */}
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
    
  )
}

export default Alert
