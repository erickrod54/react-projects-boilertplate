import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'


/**Color Generator App - version 3 - Features: */

 /**i pass 'rgbToHex' function as a 'prop' called 
  * 'hexColor' because i need to use it in
  *     App js --> 'SingleColor' component
  * 
  * --this way i propdrilling to access 'hex'
  * --which is converting from rgb to hexadecimal
  * 
  * ---accesing-drilling from -->utils-->'SingleColor' 
  * ---Component
  * */
const SingleColor = ({ rgb, weight, index, hexColor }) => {

console.log(hexColor)

/**this is the state for 'alert' that will let
 * us know if someone copy a color to clipboard*/
const [alert, setAlert ] = useState(false);

/** with 'bcg' i make an array separated by commas
 * from all the 'rgb' color values*/
const bcg = rgb.join(',')

/**i can see in JavaConsole the way is prompted*/
console.log(bcg)

/**'hex' --> which is converting from rgb to 
 * hexadecimal */
const hex = rgbToHex(...rgb)

  return (
    <>
    {/**<h4>single color</h4> */}
    <article 
      className={`color`} 
      /**the 'background' will be every single 
       * 'rgb' */
      style={{backgroundColor:`rgb(${bcg})`}}>
        {/**percent value is the weight
         * -is the color field related to
         * color density-*/}
       <p className='percent-value'>{weight}%</p>
       {/**i show hex -refers to line 31- */}
       <p className='color-value'>{hexColor}</p>
    </article>
    
    </>
    
  )
}

export default SingleColor
