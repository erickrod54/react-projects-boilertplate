import React, { useState, useContext } from 'react'
import sublinks from './data'

/**Stripe-submenu app version 4 - context js file - Features:
 * 
 *          -->Building a new state for 'page'.
 * 
 *          -->On 'openSubmenu' feature applying find
 *             method in order to find the 'sublinks'
 *             for the 'page' by comparing the 'text'
 *             i get with the text in the data
 * 
 * Note: this version will tackle the feature to display
 * the information dependending on the 'page' value
 * -product, company, developers-
 * 
 * On Submenu, i'll map the 'sublinks'
 */

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {

    const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
    const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
    const [location, setLocation ] = useState({})
    /**the state value is based on what i need to keep to show */
    const [ page, setPage ] = useState({page:'', links:[]})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    /**here i'll apply fin method to get page value */
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        /**i have now page, coordinates and setIsSubmenuOpen */
        setPage(page)
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
                            location,
                            page        
                                 }}>
        {children}
    </AppContext.Provider>
    )
}

//custom hook - to use props and features where i need them-
export const useGlobalContext = () => {
    return useContext(AppContext)
}