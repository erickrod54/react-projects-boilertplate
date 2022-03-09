import React, { useState, useContext } from 'react'
import sublinks from './data'

/**Stripe-submenu app version 2 - context js file - Features:
 * 
 *          -->Setting 'isSidebarOpen' state as 'false'
 *          -->Setting 'isSubmenuOpen' state as 'false'
 *             -to work on MouseOver feature to display
 *              the submenu, reference NavBar Component-
 * 
 * Note: from this version forward i will tackle the NavBar
 * Modal
 */

/**this is the AppContext to build custom hook*/
const AppContext = React.createContext();

/**
 * here i build the AppProvider to make states and 
 * functions to toggle the 'Sidebar' and 'Submenu' */
export const AppProvider = ({ children }) => {

    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }
    /**here in the 'AppContext.Provider' value i pass 
     * everything states and features to toggle 'Sidebar' and
     * 'Submenu' */
    return (
    <AppContext.Provider value={{
                            isSidebarOpen, 
                            isSubmenuOpen,
                            openSidebar,
                            closeSidebar,
                            openSubmenu,
                            closeSubmenu        
                                 }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hook - to use props and features where i need them-
export const useGlobalContext = () => {
    return useContext(AppContext)
}