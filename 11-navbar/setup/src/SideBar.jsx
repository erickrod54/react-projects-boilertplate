import React from 'react';
import { links, social } from './data'


/**NavBar App version 2 - Features: 
 *                  -->mapping links from the data js file
 *                     (the array name is links)                     
 */
const SideBar = () => {

  return (
    <div className='links-container show-container'>
            <ul className='links'>
              {links.map((link) => {
                const { id, url, text } = link
                return(
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
  );
}

export default SideBar;
