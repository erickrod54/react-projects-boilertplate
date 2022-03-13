import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

/**Cart app version 2 - Cart Container js - Features:
 *            ---> Importing 'useGlobalContext' and destructuring
 *                 'total' value in order to be use
 *                       
 * 
 * Note: this app has already set a boilerplate in order
 * to work */

const CartContainer = () => {
  const { cart, total } = useGlobalContext()
  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            {/**here i set total value*/}
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
