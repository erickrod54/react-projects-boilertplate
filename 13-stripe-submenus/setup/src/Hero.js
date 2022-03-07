import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

/**Stripe-submenu app version 2 - Hero Component - Features:
 * 
 *          -->Building basic structure for 'Hero' Component.
 *          -->Destructuring 'closeSubmenu'.
 *    

*          -->Styling: -->'hero'-style for the Hero Component 
                          and will be a colorfull background 
                          and will contain the whole contain 
                          'hero-center'-
 * 
 *                      -->'hero-center'-style for content of 
 *                         'hero-info' and 'hero-images'-
 * 
 *                      -->'hero-info' -style for texts explaining the app-
 * 
 *                      -->'hero-images' -style for the image 
 *                          a phone related to the service of 
 *                          the app-          
 */

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  
  return (
  <>
    {/**<h2>hero component</h2> */}
    {/**Here is the Hero component colorfull background */}
    <section className='hero'>
      {/**Here is the center of the Hero Component*/}
      <div className='hero-center'>
        {/**Here is the articles for 'info' and 'images' */}
        <article className='her-info'>
          <h1>Payments infrastructure for the internet</h1>
          <p>Millions of companies of all sizes--from startups 
          to Fortune 500s--use Stripe's software and APIs to accept 
          payments, send payouts, and manage their businesses online</p>
          <button className='btn'>Start now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'></img>
        </article>
      </div>  
    </section>
  </>
  )
}

export default Hero