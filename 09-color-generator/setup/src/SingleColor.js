import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'


/**Color Generator App - version 4 - Features: */

 /**
  *       --->creating contrast using lighter color 
  *           for color bases (darkers colors) 
  *           -conditional style class for article-
  * 
  * 
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

/**i create this variable to keep the hastag
 * with every color converted, this is for
 * clipboard porpuses*/
const hexValue = `# ${hexColor}`

  return (
    <>
    <article 
      /**this condition add a class 'color-light'
       * after the 10 colors displayed -base colors-, 
       * the index is use to set condition to this 
       * style 
       */
      className={`color ${index > 10 && 'color-light'}`} 
      /**the 'background' will be every single 
       * 'rgb' */
      style={{backgroundColor:`rgb(${bcg})`}}>

       <p className='percent-value'>{weight}%</p>
       {/**i show hex -refers to line 31- 
        * adding hashtag to indicate every color
        * is an hex value*/}
       <p className='color-value'>{hexValue}</p>
    </article>
    
    </>
    
  )
}

export default SingleColor
