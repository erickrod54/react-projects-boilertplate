import React from 'react'
import { useGlobalContext } from './context'
/**Cart app version 5  - CartItem Component - Features:
 *            ---> Importing 'useGlobalContext' and destructuring
 *                 'increase' feature to be use
 *            ---> Importing 'useGlobalContext' and destructuring
 *                 'decrease' feature to be use 
 *                       
 * 
 * Note: this action was implemented in context js, is going 
 * to be use here in the CartItem Component and is gonna be
 * build in reducer js
 *  */

const CartItem = ({ id, img, title, price, amount }) => {
  /**here i destructure 'remove' feature*/
  const { remove, increase, decrease } = useGlobalContext();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button
          className='remove-btn'
          /**here i trigger the feature targeting the id */
          onClick={() => remove(id)}
        >
          remove
        </button>
      </div>
      <div>
        {/* increase amount - i target the item id */}
        <button 
          className='amount-btn' 
          onClick={() => increase(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount - i target the item id */}
        <button 
          className='amount-btn' 
          onClick={() => decrease(id)}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </article>
  )
}

export default CartItem
