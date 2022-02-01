import React, { useEffect } from 'react'

/**Grocery App version 2 - Features:
 *      -->Building alert component
 */


/**drilling the props that i need from the alert
 * state key object in App js, and drilling also
 * 'removeAlert' prop that has 'showAlert' 
 * functionality
 */
const Alert = ({ type, msg, removeAlert }) => {

  /**building the cleanup function 
   * -to clean the alert- */
  useEffect(() => {
    const timeout = setTimeout(() =>{
      removeAlert()
    }, 3000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/**<h2>alert component</h2> */}
      {/**i pass a type and a message */}
      <p className={`alert alert-${type}`}>{msg}</p>
    </>
    
  )
}

export default Alert
