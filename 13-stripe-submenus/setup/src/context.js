import React, { useState, useContext } from 'react'
import sublinks from './data'

/**Stripe-submenu app version 1 - context js file - Features:
 * 
 *          -->Building 'AppContext' to build the custom hook.
 *          -->Building 'AppProvider' that contains states
 *             realted to the Submenu -that is a modal- and
 *             and state related to 'sidebar'.
 *          -->Building reference functions related to
 *             close and open both 'Modal' and 'SideBar'.
 * 
 */

/**this is the AppContext to build custom hook*/
const AppContext = React.createContext();

/**
 * here i build the AppProvider to make states and 
 * functions to toggle the 'Sidebar' and 'Submenu' */
export const AppProvider = ({ children }) => {

    const [ isSidebarOpen, setIsSidebarOpen ] = useState(true);
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(true);

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