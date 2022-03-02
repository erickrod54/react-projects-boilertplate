import React, { useState, useContext } from 'react'

/**SideBar-Modal app version 3 - context js file - Features: 
 *          
 *          -->Building a 'custom hook' 
 * 
 * 
 * Note: this is an alternative implementation to importing 
 * useContext and AppContext from every component that i 
 * wanted to provide data- this example still use Home 
 * component but can be any Component thati need-
 * 
 * --this implementation makes more clean code--
 */


/**First a create a variable to keep the context hook
 * functionality -this is the 'context'-*/
const AppContext = React.createContext();

/**Second i build a variable to keep the provider, and 
 * provide a value top-down to the children 
 * -this is the provider-*/
const AppProvider = ({children}) => {
    return <AppContext.Provider value='hello world'>
                {children}
            </AppContext.Provider>
}

//here i build a 'custom hook'
export const useGlobalContext = () => {
    return useContext(AppContext)
}

/**here i export both 'context' and 'provider' */
export { AppContext, AppProvider}
