import React, { useState, useContext } from 'react'
import sublinks from './data'

/**Stripe-submenu app version 3 - context js file - Features:
 * 
 *          -->Setting 'openSubmenu' to work with NavBar
 *            'displaySubmenu' with the 'location' features
 *             related to the 'page' buttons.
 *          -->Building a new state for the 'location'
 *          -->passing 'location' state and setting it from
 *             'OpenSubmenu'
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
    /**this is the state for location-the coordinates- */
    const [location, setLocation ] = useState({})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    /**this new values will be by 'displaySubmenu' 
     * feature 'page, { center, bottom }' */
    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates)
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
                            closeSubmenu,
                            location        
                                 }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hook - to use props and features where i need them-
export const useGlobalContext = () => {
    return useContext(AppContext)
}