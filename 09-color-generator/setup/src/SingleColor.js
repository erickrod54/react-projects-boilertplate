import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'


/**Color Generator App - version 5 - Features: */

 /**
  *       --->'copied to clipboard' functionality
  *           setting up 'alert' state
  *       ---> by 'onClick' trigger an action with
  *            'navigation.clipboard.writeText' to
  *             copy the 'hexValue'
  *       ---->building a 'useEffect' to set a timeout
  *           to the alert message for dissapear
  * 
  * 
  * */
const SingleColor = ({ rgb, weight, index, hexColor }) => {

console.log(hexColor)

/**this is the state for 'alert' that will let
 * us know if someone copy a color to clipboard*/
const [alert, setAlert ] = useState(false);

const bcg = rgb.join(',')
console.log(bcg)
const hex = rgbToHex(...rgb)
const hexValue = `# ${hexColor}`

/**this useEffect sets a timer of 3 sec
 * to make dissapear the alert message
 * of a color that has been copied*/
useEffect(() => {
  const  timeout = setTimeout(() => {
    setAlert(false)
  }, 3000)
  return () => clearTimeout(timeout)
}, [alert])

  return (
    <>
    <article 
      className={`color ${index > 10 && 'color-light'}`} 
      style={{backgroundColor:`rgb(${bcg})`}}
      onClick={() => {
        /**i set the alert as true */
        setAlert(true);
        /**this line copy the value to the 
         * clipboard by clicking */  
        navigator.clipboard.writeText(hexValue)
      }}>

       <p className='percent-value'>{weight}%</p>
       {/**i show hex -refers to line 31- 
        * adding hashtag to indicate every color
        * is an hex value*/}
       <p className='color-value'>{hexValue}</p>
       {alert && <p className='alert'>
         copied to clipboard</p>}
    </article>
    
    </>
    
  )
}

export default SingleColor
