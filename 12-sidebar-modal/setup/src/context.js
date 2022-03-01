import React, { useState, useContext } from 'react'

/**SideBar-Modal app version 2 - context js file - Features: 
 *          
 *          -->Building a context to toggle SideBar and Modal
 *             component
 *          -->Building a provider to provide values top
 *             down to the children
 * 
 * Note: i do it this way in order to avoid prop-drilling
 * or adding more components than will result in high 
 * complexity for the app -so this step is very important- */


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

/**here i export both 'context' and 'provider' */
export { AppContext, AppProvider}
