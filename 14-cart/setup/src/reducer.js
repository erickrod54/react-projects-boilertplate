/**Cart app version 7 - reducer js - Features:
 *            ---> Building 'reduce' on 'state.cart'
 *                 to destructure 'total' and 'amount'   
 *                       
 * 
 * Note: with the 'reduce' method im gonna destructure the from 
 * the data 'price' and 'amount' to the cartItem, notice that 
 * the data is exported as default without a name -to be use by 
 * 'reduce' method- check 'data js'
 * */

const reducer = (state, action) => {

    if (action.type === 'CLEAR_CART') {
        return {...state, cart:[] }
    }
    
    if (action.type === 'REMOVE') {
        return {
            ...state,
             cart:state.cart.filter((cartItem) => cartItem.id !== 
             action.payload )}
    }

    /**here i build increase feature */
    if (action.type === 'INCREASE') {
        /**first i set the return (line 37, line 43):
         *  
         *  >> let tempCart = []
         *  >> return { ...state: temCart}
         * 
         * , and then build the map -so be easy to follow on-
         */
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return {...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem
        });
        return {...state, cart: tempCart} 
    }
    /**here i build decrease feature -is a copy of increase -*/
    if (action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                            /**instead of adding, decrease 1 */
                return {...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem
            /**after decrese i filter, when 'amount' is not
             * equal to 0, i'll take off the cartItem returning
             * the 'tempCart' -this feature is alike 'remove'-*/
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart: tempCart} 
    }
    if (action.type === 'GET_TOTALS') {
        /**i'll build the reduce in order to return an 
         * object with total and amount values, this is the 
         * way to set up, i defined as let to fix the digits
         * for the total:
         * 
         * >> let { total, amount } = state.cart.reduce(()=> {},{})
         * 
         * this first bracket '{' is the function body:
         * 
         * >> for the values check in 'data js'
         * 
         * after the comma ',' i return the object
         */
        let { total, amount } = state.cart.reduce((cartTotal, cartItem)=> {
            const { price, amount } = cartItem
        /**to calculate the total for 'cartContainer' i use
         * a separate variable*/
        const itemTotal = price * amount;
        cartTotal.total += itemTotal;    
            /**if i console log it, definitive helps to get it */
            //console.log(price, amount)
            cartTotal.amount += amount;
            //console.log(cartTotal)
            return cartTotal
        },{
            total:0,
            amount:0
        })
        /**this is the function that will fix digits after 
         * the comma for the 'total' -is a float needs to 
         * be fixed for to digits-*/
        total = parseFloat(total.toFixed(2))

           return { ...state, total, amount}
    }
    return state
}

export default reducer;