import React from 'react'
import { useGlobalContext } from './context'
import phoneImg from './images/phone.svg'

/**Stripe-submenu app version 4 - Hero Component - Features:
 * 
 *          -->Building a hide submenu feature onMouseOver
 *             'Hero' Component
 * 
 * Note: to build this feature i use 'closeSubmenu' 
 * functionality          
 */

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  
  return (
  <>
    {/** */}
    <section className='hero' onMouseOver={closeSubmenu }>
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